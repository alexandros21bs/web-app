(function initProjectsFlagshipSection() {
  const projectMediaBlocks = document.querySelectorAll('.project-media[data-project]');
  const previewButtons = Array.from(document.querySelectorAll('.project-preview-btn'));

  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxVisit = document.getElementById('lightboxVisit');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const previewImageMode = document.getElementById('previewImageMode');
  const previewLiveMode = document.getElementById('previewLiveMode');
  const lightboxIframe = document.getElementById('lightboxIframe');
  const lightboxLiveNote = document.getElementById('lightboxLiveNote');

  if (!projectMediaBlocks.length || !previewButtons.length || !lightbox) return;

  let activePreviewIndex = 0;
  let currentPreviewUrl = '';
  let liveLoadTimer = null;
  let liveConfirmed = false;

  const messages = {
    liveNoteDefault: 'Αν κάποιο site δεν εμφανιστεί εδώ, άνοιξέ το από το κουμπί "Δείτε το site".',
    liveLoading: 'Φόρτωση live προεπισκόπησης...',
    liveBlocked: 'Το site δεν επιτρέπει ενσωμάτωση live preview. Γυρίσαμε σε screenshot mode.',
    liveReady: 'Live preview ενεργό: μπορείς να σκρολάρεις κανονικά μέσα στο παράθυρο.'
  };

  const imageExtensions = ['webp', 'jpg', 'jpeg', 'png'];

  const loadProjectImage = (element) => {
    const slug = element.dataset.project;
    let index = 0;
    const previewBtn = document.querySelector(`[data-preview-for="${slug}"]`);

    const tryNext = () => {
      if (index >= imageExtensions.length) {
        element.classList.add('no-image');
        return;
      }

      const src = `images/ecosystem/${slug}.${imageExtensions[index]}`;
      index += 1;
      const img = new Image();

      img.onload = () => {
        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
          element.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
        }
        element.style.backgroundImage = `url('${src}')`;
        if (previewBtn) previewBtn.dataset.previewSrc = src;
        element.classList.remove('no-image');
      };

      img.onerror = tryNext;
      img.src = src;
    };

    tryNext();
  };

  projectMediaBlocks.forEach(loadProjectImage);

  const setLiveNote = (message) => {
    if (lightboxLiveNote) lightboxLiveNote.textContent = message;
  };

  const clearLiveTimer = () => {
    if (liveLoadTimer) {
      window.clearTimeout(liveLoadTimer);
      liveLoadTimer = null;
    }
  };

  const setLightboxMode = (mode) => {
    const isLive = mode === 'live';
    lightbox.classList.toggle('live-mode', isLive);
    if (previewLiveMode) previewLiveMode.classList.toggle('active', isLive);
    if (previewImageMode) previewImageMode.classList.toggle('active', !isLive);
  };

  const fallbackToScreenshot = () => {
    setLightboxMode('image');
    setLiveNote(messages.liveBlocked);
  };

  const startLivePreview = (url) => {
    if (!lightboxIframe) return;

    clearLiveTimer();
    liveConfirmed = false;
    setLiveNote(messages.liveLoading);
    lightboxIframe.src = 'about:blank';

    window.requestAnimationFrame(() => {
      lightboxIframe.src = url;
    });

    liveLoadTimer = window.setTimeout(() => {
      if (!liveConfirmed) fallbackToScreenshot();
    }, 4500);
  };

  if (lightboxIframe) {
    lightboxIframe.addEventListener('load', () => {
      let blocked = false;

      try {
        const iframeHref = lightboxIframe.contentWindow && lightboxIframe.contentWindow.location
          ? lightboxIframe.contentWindow.location.href
          : '';
        if (iframeHref === 'about:blank') blocked = true;
      } catch (error) {
        blocked = false;
      }

      if (blocked) {
        clearLiveTimer();
        fallbackToScreenshot();
        return;
      }

      liveConfirmed = true;
      clearLiveTimer();
      setLiveNote(messages.liveReady);
    });
  }

  const openLightbox = (index) => {
    const btn = previewButtons[index];
    if (!btn || !lightboxImage) return;

    const src = btn.dataset.previewSrc;
    if (!src) return;

    activePreviewIndex = index;
    lightboxImage.src = src;
    lightboxImage.alt = btn.dataset.previewTitle || 'Project preview';
    if (lightboxTitle) lightboxTitle.textContent = btn.dataset.previewTitle || 'Project';
    if (lightboxVisit) lightboxVisit.href = btn.dataset.previewUrl || '#';

    currentPreviewUrl = btn.dataset.previewUrl || '';

    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setLightboxMode('live');
    if (currentPreviewUrl) {
      startLivePreview(currentPreviewUrl);
    } else {
      fallbackToScreenshot();
    }
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    clearLiveTimer();

    if (lightboxIframe) lightboxIframe.src = 'about:blank';
    currentPreviewUrl = '';
    setLiveNote(messages.liveNoteDefault);
    document.body.style.overflow = '';
  };

  const stepLightbox = (direction) => {
    const nextIndex = (activePreviewIndex + direction + previewButtons.length) % previewButtons.length;
    openLightbox(nextIndex);
  };

  if (previewLiveMode) {
    previewLiveMode.addEventListener('click', () => {
      setLightboxMode('live');
      if (currentPreviewUrl) startLivePreview(currentPreviewUrl);
    });
  }

  if (previewImageMode) {
    previewImageMode.addEventListener('click', () => setLightboxMode('image'));
  }

  previewButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => openLightbox(index));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => stepLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => stepLightbox(1));

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('open')) return;

    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      stepLightbox(1);
    } else if (event.key === 'ArrowLeft') {
      stepLightbox(-1);
    }
  });
})();
