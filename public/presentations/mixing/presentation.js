import { localizeVideoControls } from './video-controls-uk.js';
import { initializeSlideViewport } from './slide-viewport.js';

const slides = [...document.querySelectorAll('article.slide')];
const app = document.querySelector('.app');
document.body.classList.toggle('embed-mode', new URLSearchParams(location.search).get('embed') === '1');
const outline = document.querySelector('#outline');
const notesPanel = document.querySelector('#speakerPanel');
// Keep overlays inside the fullscreen element.
app.append(outline, notesPanel);
const number = document.querySelector('#slideNumber');
let index = 0;
let notes = [];
let returnFocus;
const objectUrls = new Map();
const initial = Number(location.hash.match(/^#s(\d+)$/)?.[1] || 1) - 1;

function updateNotes() {
  const note = notes[index];
  document.querySelector('#speakerHeading').textContent = `Слайд ${index + 1} · ${slides[index].querySelector('h1').textContent}`;
  document.querySelector('#speakerTiming').textContent = note ? `${note.minutes} хв · ${note.start}–${note.end} хв із 80` : '';
  const text = document.querySelector('#speakerText');
  text.replaceChildren();
  for (const paragraph of note?.speech || []) {
    const p = document.createElement('p'); p.textContent = paragraph; text.append(p);
  }
  if (note?.activity) {
    const p = document.createElement('p'); p.textContent = `Робота з аудиторією: ${note.activity}`; text.append(p);
  }
}
function show(next, focus = false) {
  index = Math.max(0, Math.min(slides.length - 1, next));
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    slide.hidden = i !== index;
    if (i === index) slide.querySelectorAll('img').forEach(image => image.loading = 'eager');
    if (i !== index) slide.querySelectorAll('video').forEach(video => video.pause());
  });
  document.querySelector('#counter').textContent = `${index + 1} / ${slides.length}`;
  number.value = String(index + 1);
  document.querySelector('#bar').style.width = `${100 * (index + 1) / slides.length}%`;
  document.querySelector('[data-action=previous]').disabled = index === 0;
  document.querySelector('[data-action=next]').disabled = index === slides.length - 1;
  document.querySelectorAll('.thumb').forEach((thumb, i) => thumb.setAttribute('aria-current', String(i === index)));
  history.replaceState(null, '', `#s${index + 1}`);
  document.title = `${index + 1} · ${slides[index].querySelector('h1').textContent} | FoodProcessPortal`;
  updateNotes();
  if (focus) slides[index].focus({preventScroll:true});
}
function togglePanel(panel, open = panel.hidden) {
  if (open) { returnFocus = document.activeElement; panel.hidden = false; panel.classList.add('open'); panel.querySelector('button')?.focus(); }
  else { panel.hidden = true; panel.classList.remove('open'); returnFocus?.focus(); }
  const action = panel === outline ? 'outline' : 'notes';
  document.querySelector(`[data-action=${action}]`).setAttribute('aria-expanded', String(open));
}
async function fullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (app.requestFullscreen) await app.requestFullscreen();
    else throw new Error('unsupported');
  } catch {
    document.querySelector('[data-action=fullscreen]').textContent = 'Відкрити окремо';
    window.open(location.href, '_blank', 'noopener');
  }
}
document.querySelector('#outlineGrid').replaceChildren(...slides.map((slide, i) => {
  const button = document.createElement('button'); button.className = 'thumb';
  button.textContent = `${String(i+1).padStart(2,'0')} · ${slide.querySelector('h1').textContent}`;
  button.addEventListener('click', () => { togglePanel(outline, false); show(i, true); }); return button;
}));
document.addEventListener('click', event => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'previous') show(index - 1, true);
  if (action === 'next') show(index + 1, true);
  if (action === 'outline') togglePanel(outline);
  if (action === 'outline-close') togglePanel(outline, false);
  if (action === 'notes') togglePanel(notesPanel);
  if (action === 'notes-close') togglePanel(notesPanel, false);
  if (action === 'fullscreen') fullscreen();
  if (action === 'print') { slides.forEach(s => s.hidden = false); window.print(); show(index); }
});
number.addEventListener('change', () => { const n = Number(number.value); if (Number.isInteger(n)) show(n - 1); });
window.addEventListener('hashchange', () => show(Number(location.hash.match(/^#s(\d+)$/)?.[1] || 1) - 1));
document.addEventListener('keydown', event => {
  if (document.querySelector('dialog[open]')) return;
  if (event.key === 'Escape') {
    if (!notesPanel.hidden) togglePanel(notesPanel, false);
    else if (!outline.hidden) togglePanel(outline, false);
    return;
  }
  const panel = !notesPanel.hidden ? notesPanel : !outline.hidden ? outline : null;
  if (panel) {
    if (event.key === 'Tab') {
      const focusable = [...panel.querySelectorAll('button,a,input')]; const first=focusable[0], last=focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {event.preventDefault();last?.focus();}
      else if (!event.shiftKey && document.activeElement === last) {event.preventDefault();first?.focus();}
    }
    return;
  }
  if (event.ctrlKey || event.metaKey || event.altKey || event.target.closest('input,textarea,select,button,a,video,[contenteditable]')) return;
  const key = event.key.toLowerCase();
  if (['ArrowRight','PageDown',' '].includes(event.key)) {event.preventDefault();show(index+1,true);}
  if (['ArrowLeft','PageUp'].includes(event.key)) {event.preventDefault();show(index-1,true);}
  if (key === 'home') {event.preventDefault();show(0,true);}
  if (key === 'end') {event.preventDefault();show(slides.length-1,true);}
  if (key === 'o') togglePanel(outline);
  if (key === 'n') togglePanel(notesPanel);
  if (key === 'f') fullscreen();
});
window.addEventListener('beforeprint',()=>slides.forEach(s=>s.hidden=false));
window.addEventListener('afterprint',()=>show(index));
const videoSettings = new WeakMap();
const timestamp = seconds => `${Math.floor(seconds / 60).toString().padStart(2,'0')}:${Math.floor(seconds % 60).toString().padStart(2,'0')}`;
// Present the original illustration and its local demonstration together.
function pairVideoWithIllustration(slot) {
  if (slot.parentElement.classList.contains('paired-media')) return;
  const illustration = slot.parentElement;
  const content = illustration.parentElement;
  if (!illustration.matches('.photo,.visual-card') || !content.matches('.content')) return;
  const pair = document.createElement('div');
  pair.className = 'paired-media';
  content.classList.add('media-comparison');
  illustration.replaceWith(pair);
  illustration.classList.add('paired-illustration');
  pair.append(illustration, slot);
}
function attachVideo(slot, src, settings = {}) {
  const video = slot.querySelector('video');
  video.pause();
  const start=Number.isFinite(settings.start)?settings.start:0;
  const end=Number.isFinite(settings.end)&&settings.end>start?settings.end:null;
  videoSettings.set(video,{start,end,full:false});
  if(settings.poster)video.poster=settings.poster;
  if(settings.title)video.setAttribute('aria-label',settings.title);
  video.preload='metadata';video.src = src; video.hidden = false;
  slot.querySelector('.video-details summary').textContent = 'Додатково';
  slot.querySelector('.photo-toggle').hidden = false;
  slot.querySelector('.photo-toggle').textContent=slot.dataset.fallbackLabel||'Показати фото';
  pairVideoWithIllustration(slot);
  if (slot.parentElement.classList.contains('paired-media')) slot.querySelector('.photo-toggle').hidden = true;
  const clipToggle=slot.querySelector('.clip-toggle');
  if(clipToggle){clipToggle.hidden=!(start>0||end);clipToggle.textContent='Повне відео';}
  slot.querySelector('.media-status').textContent = end ? `Фрагмент для лекції ${timestamp(start)}–${timestamp(end)}. Запуск — кнопкою відтворення.` : 'Відео готове. Запуск — кнопкою відтворення.';
}
document.querySelectorAll('[data-video-slot]').forEach(slot => {
  const video = slot.querySelector('video');
  localizeVideoControls(slot);
  const details = document.createElement('details');
  details.className = 'video-details';
  details.innerHTML = '<summary title="Локальний відеофайл, опис і режими відтворення">Додати відео</summary><div class="video-details-content"></div>';
  for (const element of [...slot.children]) {
    if (element.matches('.video-caption,.choose-video,.media-status,.photo-toggle,.clip-toggle')) details.lastElementChild.append(element);
  }
  slot.append(details);
  video.addEventListener('lecture-seek', event => {
    const settings = videoSettings.get(video);
    const time = event.detail?.time;
    if (!settings || settings.full || !Number.isFinite(time)) return;
    if (time < settings.start || (settings.end && time >= settings.end)) {
      settings.full = true;
      const toggle = slot.querySelector('.clip-toggle');
      if (toggle) toggle.textContent = 'Фрагмент для лекції';
      slot.querySelector('.media-status').textContent = 'Повне відео: довільне перемотування.';
    }
  });
  slot.querySelector('.choose-video-button').addEventListener('click', () => slot.querySelector('input[type=file]').click());
  slot.querySelector('input[type=file]').addEventListener('change', event => {
    const file = event.target.files?.[0];
    const filename = slot.querySelector('.chosen-video-name');
    filename.textContent = file?.name || 'Файл не обрано';
    filename.title = filename.textContent;
    if (!file) return;
    if (objectUrls.has(slot)) URL.revokeObjectURL(objectUrls.get(slot));
    const url=URL.createObjectURL(file); objectUrls.set(slot,url);attachVideo(slot,url);
    const caption=slot.querySelector('.video-caption');if(caption)caption.textContent=file.name;
  });
  slot.querySelector('.photo-toggle').addEventListener('click', event => {
    video.pause();video.hidden=!video.hidden;event.target.textContent=video.hidden?'Показати відео':(slot.dataset.fallbackLabel||'Показати фото');
  });
  video.addEventListener('loadedmetadata',()=>{
    const settings=videoSettings.get(video);
    if(settings&&!settings.full&&settings.start>0)video.currentTime=Math.min(settings.start,video.duration);
  });
  video.addEventListener('play',()=>{
    const settings=videoSettings.get(video);
    if(settings&&!settings.full&&(video.currentTime<settings.start||(settings.end&&video.currentTime>=settings.end-.05)))video.currentTime=settings.start;
  });
  video.addEventListener('timeupdate',()=>{
    const settings=videoSettings.get(video);
    if(settings&&!settings.full&&settings.end&&video.currentTime>=settings.end){
      video.pause();
      slot.querySelector('.media-status').textContent='Фрагмент завершено. Можна повторити або вибрати повне відео.';
    }
  });
  slot.querySelector('.clip-toggle')?.addEventListener('click',event=>{
    const settings=videoSettings.get(video);if(!settings)return;
    video.pause();settings.full=!settings.full;video.currentTime=settings.full?0:settings.start;
    event.target.textContent=settings.full?'Фрагмент для лекції':'Повне відео';
    slot.querySelector('.media-status').textContent=settings.full?'Повне відео. Запуск — кнопкою відтворення.':`Фрагмент для лекції ${timestamp(settings.start)}–${timestamp(settings.end||video.duration)}.`;
  });
  video.addEventListener('error',()=>{slot.querySelector('.media-status').textContent='Не вдалося відтворити файл. Виберіть MP4 з кодеком H.264 або WebM.';details.open=true;});
});
Promise.all([
  fetch('lecture-notes.json').then(r=>{if(!r.ok)throw Error(r.status);return r.json();}).then(data=>{notes=data;updateNotes();}),
  fetch('videos.json').then(r=>{if(!r.ok)throw Error(r.status);return r.json();}).then(items=>items.forEach(item=>{
    if(item.src){const slot=document.querySelector(`[data-video-slot="${item.slide}"]`);if(slot)attachVideo(slot,item.src,item);}
  }))
]).catch(()=>{document.querySelector('#speakerText').textContent='Нотатки недоступні. Відкрийте доповідь DOCX зі сторінки лекції.';});
try {
  const parentRoot=window.parent.document.documentElement;
  if (window.parent !== window) {
    const syncTheme=()=>{
      const theme=parentRoot.dataset.theme;
      if(theme)document.documentElement.dataset.theme=theme;
      else delete document.documentElement.dataset.theme;
    };
    syncTheme();
    new MutationObserver(syncTheme).observe(parentRoot,{attributes:true,attributeFilter:['data-theme']});
  }
} catch { /* Standalone presentation may have a different origin. */ }
show(initial);
initializeSlideViewport(app, slides);

// Source drawings open in a viewport-sized, keyboard-accessible dialog.
const figureDialog = document.createElement('dialog');
figureDialog.className = 'figure-dialog';
figureDialog.setAttribute('aria-labelledby', 'figureTitle');
figureDialog.innerHTML = '<header class="figure-toolbar"><p id="figureTitle"></p><div class="figure-tools"><button type="button" class="figure-scale" aria-pressed="false">Масштаб 1:1</button><button type="button" class="figure-close" aria-label="Закрити перегляд рисунка">Закрити ×</button></div></header><div class="figure-scroll" tabindex="0" aria-label="Рисунок. У масштабі 1:1 доступна прокрутка"><img alt=""></div>';
app.append(figureDialog);
const figureScale = figureDialog.querySelector('.figure-scale');
const figureViewport = figureDialog.querySelector('.figure-scroll');
figureDialog.querySelector('.figure-close').addEventListener('click', () => figureDialog.close());
figureScale.addEventListener('click', () => {
  const natural = figureDialog.classList.toggle('figure-natural');
  figureScale.setAttribute('aria-pressed', String(natural));
  figureScale.textContent = natural ? 'Вписати в екран' : 'Масштаб 1:1';
  figureViewport.scrollTo(0, 0);
});
figureDialog.addEventListener('click', event => {
  if (event.target !== figureDialog) return;
  const rect = figureDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) figureDialog.close();
});
figureDialog.addEventListener('close', () => { document.body.style.overflow = ''; });

document.querySelectorAll('.source-graphic,.engineering-flow,.photo').forEach(container => {
  const image=container.querySelector('img');if(!image)return;
  let title = image.alt;
  const button=document.createElement('button');button.type='button';button.className='enlarge-figure';button.textContent='Збільшити рисунок';
  if (container.matches('.photo')) {
    const updateRatio = () => { if (image.naturalHeight) container.style.setProperty('--photo-ratio', String(image.naturalWidth / image.naturalHeight)); };
    image.addEventListener('load', updateRatio);updateRatio();
    button.classList.add('enlarge-photo');button.textContent='⤢';
    button.title='Збільшити фотографію';button.setAttribute('aria-label', 'Збільшити фотографію');
    container.append(button);
  } else container.after(button);
  if (container.dataset.figureGallery) {
    const figures = JSON.parse(container.dataset.figureGallery);
    const chooser = document.createElement('div');
    chooser.className = 'figure-chooser';
    chooser.setAttribute('role', 'group');
    chooser.setAttribute('aria-label', 'Рисунки ферментерів');
    figures.forEach((figure, i) => {
      const choice = document.createElement('button');
      choice.type = 'button'; choice.textContent = figure.title;
      const sourceSlide = Number(figure.src.match(/pptx-(\d+)/)[1]);
      const caption = `${figure.title} · PPTX, слайд ${sourceSlide}`;
      choice.title = caption;
      choice.setAttribute('aria-pressed', String(i === 0));
      if (i === 0) { title = caption; image.alt = caption; }
      choice.addEventListener('click', () => {
        image.src = figure.src; image.alt = caption; title = caption;
        chooser.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === choice)));
      });
      chooser.append(choice);
    });
    container.after(chooser);
  }
  button.addEventListener('click',()=>{
    const enlarged=figureDialog.querySelector('img');enlarged.src=image.src;enlarged.alt=image.alt;
    figureDialog.querySelector('p').textContent=title;
    figureDialog.classList.remove('figure-natural');
    figureScale.setAttribute('aria-pressed', 'false');figureScale.textContent='Масштаб 1:1';
    figureDialog.showModal();document.body.style.overflow='hidden';figureViewport.scrollTo(0,0);
  });
});
