import { spawn } from "node:child_process";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const chromePath = process.argv[2] || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const url = process.argv[3] || "http://127.0.0.1:4322/uk/courses/bioprocess-engineering/chapter-01-general-information";
const width = Number(process.argv[4] || 390);
const height = Number(process.argv[5] || 1200);
const port = 9223 + Math.floor(Math.random() * 1000);
const profile = await mkdtemp(path.join(tmpdir(), "fpp-chrome-"));

const chrome = spawn(chromePath, [
  "--headless",
  "--disable-gpu",
  "--no-sandbox",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  `--window-size=${width},${height}`,
  "about:blank",
], { stdio: "ignore" });

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJson(endpoint) {
  const response = await fetch(`http://127.0.0.1:${port}${endpoint}`);
  if (!response.ok) throw new Error(`${endpoint}: ${response.status}`);
  return response.json();
}

let tab;
for (let i = 0; i < 160; i += 1) {
  try {
    [tab] = await fetchJson("/json");
    if (tab?.webSocketDebuggerUrl) break;
  } catch {
    await wait(100);
  }
}

if (!tab?.webSocketDebuggerUrl) {
  chrome.kill();
  throw new Error("Chrome DevTools endpoint did not start");
}

const ws = new WebSocket(tab.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();

ws.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  }
});

await new Promise((resolve) => ws.addEventListener("open", resolve, { once: true }));

function send(method, params = {}) {
  const messageId = ++id;
  ws.send(JSON.stringify({ id: messageId, method, params }));
  return new Promise((resolve) => pending.set(messageId, resolve));
}

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width,
  height,
  deviceScaleFactor: 1,
  mobile: false,
});
await send("Page.navigate", { url });
await wait(2500);

const result = await send("Runtime.evaluate", {
  returnByValue: true,
  expression: `(() => {
    const vw = document.documentElement.clientWidth;
    const docWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
    const els = [...document.querySelectorAll("body *")].map((el) => {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        tag: el.tagName.toLowerCase(),
        cls: el.className && typeof el.className === "string" ? el.className : "",
        text: (el.textContent || "").trim().replace(/\\s+/g, " ").slice(0, 80),
        left: Math.round(r.left),
        right: Math.round(r.right),
        width: Math.round(r.width),
        scrollWidth: el.scrollWidth,
        overflowX: cs.overflowX,
      };
    }).filter((x) => x.width > 0 && (x.right > vw + 2 || x.left < -2 || x.scrollWidth > x.width + 2));
    return { viewport: vw, docWidth, overflow: els.slice(0, 30) };
  })()`,
});

if (result.exceptionDetails) {
  console.log(JSON.stringify(result.exceptionDetails, null, 2));
} else if ("value" in result.result) {
  console.log(JSON.stringify(result.result.value, null, 2));
} else {
  console.log(JSON.stringify(result.result, null, 2));
}
ws.close();
chrome.kill();
