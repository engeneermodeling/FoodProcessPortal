function isExternalUrl(value) {
  return /^https?:\/\//i.test(value);
}

function appendRel(existingRel) {
  const tokens = new Set(String(existingRel || "").split(/\s+/).filter(Boolean));
  tokens.add("noopener");
  tokens.add("noreferrer");
  return [...tokens].join(" ");
}

function visit(node) {
  if (!node || typeof node !== "object") return;

  if (node.type === "element" && node.tagName === "a") {
    const properties = node.properties || {};
    const href = properties.href;

    if (typeof href === "string" && isExternalUrl(href)) {
      node.properties = {
        ...properties,
        target: "_blank",
        rel: appendRel(properties.rel),
      };
    }
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) visit(child);
  }
}

export default function rehypeExternalLinks() {
  return (tree) => visit(tree);
}
