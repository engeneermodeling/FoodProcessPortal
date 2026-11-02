// Compact Ukrainian controls on the existing video element.
export function localizeVideoControls(slot) {
  const video = slot.querySelector('video');
  const controls = document.createElement('div');
  controls.className = 'uk-video-controls';
  controls.setAttribute('role', 'group');
  controls.setAttribute('aria-label', 'Керування відео');
  controls.hidden = video.hidden;
  controls.innerHTML = `
    <label class="video-position"><span class="visually-hidden">Позиція відтворення</span>
      <input type="range" min="0" max="0" step="0.1" value="0" aria-label="Позиція відтворення" title="Перемотування відео">
    </label>
    <div class="video-transport">
      <button type="button" data-video-control="play">▶</button>
      <button type="button" data-video-control="back" title="Назад на 10 секунд" aria-label="Назад на 10 секунд">−10 с</button>
      <button type="button" data-video-control="forward" title="Вперед на 10 секунд" aria-label="Вперед на 10 секунд">+10 с</button>
      <output class="video-time" aria-label="Час відео">00:00 / 00:00</output>
      <label class="video-speed"><span class="visually-hidden">Швидкість відтворення</span><select aria-label="Швидкість відтворення" title="Швидкість відтворення">
        <option value="0.75">0,75×</option><option value="1" selected>1×</option><option value="1.25">1,25×</option><option value="1.5">1,5×</option><option value="2">2×</option>
      </select></label>
      <button type="button" data-video-control="mute">Звук</button>
      <button type="button" data-video-control="fullscreen">⛶</button>
    </div>`;
  video.after(controls);
  const play = controls.querySelector('[data-video-control=play]');
  const mute = controls.querySelector('[data-video-control=mute]');
  const expand = controls.querySelector('[data-video-control=fullscreen]');
  const position = controls.querySelector('.video-position input');
  const speed = controls.querySelector('select');
  let scrubbing = false;
  let resumeAfterSeek = false;
  const clock = seconds => {
    const value = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
    return `${Math.floor(value / 60).toString().padStart(2, '0')}:${Math.floor(value % 60).toString().padStart(2, '0')}`;
  };
  const label = (button, text) => { button.title = text; button.setAttribute('aria-label', text); };
  function update() {
    controls.hidden = video.hidden;
    play.textContent = video.paused ? '▶' : 'Ⅱ';
    label(play, video.paused ? 'Відтворити відео' : 'Призупинити відео');
    mute.textContent = video.muted ? 'Без звуку' : 'Звук';
    label(mute, video.muted ? 'Увімкнути звук' : 'Вимкнути звук');
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    position.max = String(duration);
    if (!scrubbing) position.value = String(video.currentTime);
    position.disabled = !duration;
    controls.querySelectorAll('[data-video-control=back],[data-video-control=forward]').forEach(button => button.disabled = !duration);
    position.setAttribute('aria-valuetext', `${clock(video.currentTime)} із ${clock(duration)}`);
    controls.querySelector('.video-time').textContent = `${clock(video.currentTime)} / ${clock(duration)}`;
    speed.value = String(video.playbackRate);
    label(expand, document.fullscreenElement === slot ? 'Згорнути відео' : 'Розгорнути відео');
  }
  function startPlayback() {
    video.play().catch(error => {
      if (error.name === 'AbortError') return;
      const status = slot.querySelector('.media-status');
      status.textContent = 'Не вдалося запустити відео. Спробуйте ще раз або оберіть інший файл.';
      status.closest('details')?.setAttribute('open', '');
    });
  }
  function seekTo(seconds) {
    if (!Number.isFinite(video.duration) || !Number.isFinite(seconds)) return;
    const time = Math.max(0, Math.min(video.duration, seconds));
    // Explicit seeking beyond the teaching excerpt enables the whole local file.
    video.dispatchEvent(new CustomEvent('lecture-seek', { detail: { time } }));
    video.currentTime = time;
  }
  function finishScrub() {
    if (!scrubbing) return;
    scrubbing = false;
    const resume = resumeAfterSeek; resumeAfterSeek = false;
    update();
    if (resume && !video.closest('article')?.hidden) startPlayback();
  }
  play.addEventListener('click', () => { if (!video.paused) video.pause(); else startPlayback(); });
  mute.addEventListener('click', () => { video.muted = !video.muted; });
  speed.addEventListener('change', () => { video.playbackRate = Number(speed.value); });
  controls.querySelector('[data-video-control=back]').addEventListener('click', () => seekTo(video.currentTime - 10));
  controls.querySelector('[data-video-control=forward]').addEventListener('click', () => seekTo(video.currentTime + 10));
  position.addEventListener('pointerdown', () => { scrubbing = true; resumeAfterSeek = !video.paused; video.pause(); });
  position.addEventListener('input', () => seekTo(Number(position.value)));
  position.addEventListener('change', finishScrub);
  window.addEventListener('pointerup', finishScrub);
  window.addEventListener('pointercancel', finishScrub);
  expand.hidden = !slot.requestFullscreen;
  expand.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement === slot) await document.exitFullscreen();
      else await slot.requestFullscreen();
    } catch {
      const status = slot.querySelector('.media-status');
      status.textContent = 'Браузер не дозволив розгорнути відео. Скористайтеся повноекранним режимом презентації.';
      status.closest('details')?.setAttribute('open', '');
    }
  });
  for (const event of ['play', 'pause', 'ended', 'timeupdate', 'loadedmetadata', 'durationchange', 'volumechange', 'ratechange', 'emptied']) video.addEventListener(event, update);
  new MutationObserver(update).observe(video, { attributes: true, attributeFilter: ['hidden'] });
  document.addEventListener('fullscreenchange', update);
  video.controls = false;
  update();
}
