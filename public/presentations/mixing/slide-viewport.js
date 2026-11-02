/** Keep a fixed viewer while fitting desktop slides and preserving mobile reading size. */
export function initializeSlideViewport(app, slides) {
  const viewer = app.querySelector('.viewer');
  let scheduled = false;
  let printing = false;
  app.classList.add('viewport-managed');

  function fitActiveSlide() {
    scheduled = false;
    if (printing) return;
    const slide = slides.find(item => !item.hidden);
    if (!slide) return;
    for (const property of ['--slide-scale', '--slide-canvas-width', '--slide-canvas-height']) {
      slide.style.removeProperty(property);
    }
    if (!matchMedia('(min-width: 901px)').matches) return;
    const width = viewer.clientWidth;
    const height = viewer.clientHeight;
    if (width < 1 || height < 1) return;
    let scale = 1;
    // Widen the layout as it scales down, keeping the painted slide the viewer's width.
    // A minimum canvas height also keeps short slides the same size as long slides.
    for (let pass = 0; pass < 8; pass++) {
      slide.style.setProperty('--slide-canvas-width', `${width / scale}px`);
      slide.style.setProperty('--slide-canvas-height', `${height / scale}px`);
      if (slide.scrollHeight * scale <= height + 0.5 && slide.scrollWidth * scale <= width + 0.5) break;
      const next = Math.min(scale, (height - 1) / slide.scrollHeight, width / slide.scrollWidth);
      if (next >= scale - 0.0001) break;
      scale = Math.max(0.1, next);
    }
    slide.style.setProperty('--slide-canvas-width', `${width / scale}px`);
    slide.style.setProperty('--slide-canvas-height', `${height / scale}px`);
    slide.style.setProperty('--slide-scale', String(scale));
    viewer.scrollTop = 0;
  }
  function scheduleFit() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(fitActiveSlide); }
  }
  new ResizeObserver(scheduleFit).observe(viewer);
  const visibility = new MutationObserver(() => {
    const slide = slides.find(item => !item.hidden);
    if (slide) slide.scrollTop = 0;
    scheduleFit();
  });
  slides.forEach(slide => visibility.observe(slide, { attributes: true, attributeFilter: ['hidden'] }));
  app.addEventListener('load', scheduleFit, true);
  app.addEventListener('loadedmetadata', scheduleFit, true);
  app.addEventListener('click', scheduleFit);
  app.addEventListener('toggle', scheduleFit, true);
  window.addEventListener('resize', scheduleFit);
  document.addEventListener('fullscreenchange', scheduleFit);
  document.fonts.ready.then(scheduleFit);
  window.addEventListener('beforeprint', () => { printing = true; });
  window.addEventListener('afterprint', () => { printing = false; scheduleFit(); });
  scheduleFit();
}
