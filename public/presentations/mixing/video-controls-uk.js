// Ukrainian presentation controls, independent of the browser interface language.
// Playback and lecture-fragment rules remain on the existing video element.
export function localizeVideoControls(slot) {
  const video = slot.querySelector('video');
  const controls = document.createElement('div');
  controls.className = 'uk-video-controls';
  controls.setAttribute('role', 'group');
  controls.setAttribute('aria-label', 'Керування відео');
  controls.hidden = video.hidden;
  controls.innerHTML = `
    <button type="button" data-video-control="play">Відтворити відео</button>
    <label class="video-position">Позиція відтворення
      <input type="range" min="0" max="0" step="0.1" value="0" aria-label="Позиція відтворення" title="Перемотування відео">
    </label>
    <output class="video-time" aria-label="Час відео">00:00 / 00:00</output>
    <button type="button" data-video-control="mute">Вимкнути звук</button>
    <label class="video-volume">Гучність
      <input type="range" min="0" max="1" step="0.05" value="1" aria-label="Гучність відео" title="Гучність відео">
    </label>
    <button type="button" data-video-control="fullscreen">Розгорнути відео</button>`;
  video.after(controls);
  const play = controls.querySelector('[data-video-control=play]');
  const mute = controls.querySelector('[data-video-control=mute]');
  const expand = controls.querySelector('[data-video-control=fullscreen]');
  const position = controls.querySelector('.video-position input');
  const volume = controls.querySelector('.video-volume input');
  const clock = seconds => {
    const value = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
    return `${Math.floor(value / 60).toString().padStart(2, '0')}:${Math.floor(value % 60).toString().padStart(2, '0')}`;
  };
  function update() {
    controls.hidden = video.hidden;
    play.textContent = video.paused ? 'Відтворити відео' : 'Призупинити відео';
    play.title = play.textContent;
    mute.textContent = video.muted ? 'Увімкнути звук' : 'Вимкнути звук';
    mute.title = mute.textContent;
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    position.max = String(duration);
    position.value = String(video.currentTime);
    position.disabled = !duration;
    position.setAttribute('aria-valuetext', `${clock(video.currentTime)} із ${clock(duration)}`);
    controls.querySelector('.video-time').textContent = `${clock(video.currentTime)} / ${clock(duration)}`;
    volume.value = String(video.volume);
    expand.textContent = document.fullscreenElement === slot ? 'Згорнути відео' : 'Розгорнути відео';
    expand.title = expand.textContent;
  }
  play.addEventListener('click', () => {
    if (!video.paused) video.pause();
    else video.play().catch(() => {
      slot.querySelector('.media-status').textContent = 'Не вдалося запустити відео. Спробуйте ще раз або оберіть інший файл.';
    });
  });
  mute.addEventListener('click', () => { video.muted = !video.muted; });
  volume.addEventListener('input', () => { video.volume = Number(volume.value); });
  position.addEventListener('input', () => { video.currentTime = Number(position.value); });
  expand.hidden = !slot.requestFullscreen;
  expand.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement === slot) await document.exitFullscreen();
      else await slot.requestFullscreen();
    } catch {
      slot.querySelector('.media-status').textContent = 'Браузер не дозволив розгорнути відео. Скористайтеся повноекранним режимом презентації.';
    }
  });
  for (const event of ['play', 'pause', 'ended', 'timeupdate', 'loadedmetadata', 'durationchange', 'volumechange', 'emptied']) video.addEventListener(event, update);
  new MutationObserver(update).observe(video, { attributes: true, attributeFilter: ['hidden'] });
  document.addEventListener('fullscreenchange', update);
  video.controls = false;
  update();
}
