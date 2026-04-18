(function initAchaiaMapSection() {
  const mapRoot = document.querySelector('#achaia-map-intelligence');
  if (!mapRoot) return;

  const mapPins = Array.from(mapRoot.querySelectorAll('.map-pin[data-project-id]'));
  const mapLegendButtons = Array.from(mapRoot.querySelectorAll('.map-legend-btn[data-map-target]'));
  const mapPanelTitle = mapRoot.querySelector('#mapPanelTitle');
  const mapPanelText = mapRoot.querySelector('#mapPanelText');
  const mapPanelLink = mapRoot.querySelector('#mapPanelLink');
  const weatherItems = Array.from(mapRoot.querySelectorAll('.meteo-item[data-weather-city]'));

  const weatherProfiles = {
    patra: {
      base: 20,
      el: ['Καθαρός', 'Ήπιος άνεμος', 'Θαλάσσια υγρασία'],
      en: ['Clear sky', 'Mild breeze', 'Sea humidity']
    },
    aigio: {
      base: 19,
      el: ['Παραλιακός αέρας', 'Καλή ορατότητα', 'Ήπιος καιρός'],
      en: ['Coastal breeze', 'Clear visibility', 'Mild weather']
    },
    kalavryta: {
      base: 13,
      el: ['Ορεινό κλίμα', 'Δροσερή αίσθηση', 'Καθαρή ατμόσφαιρα'],
      en: ['Mountain climate', 'Cool conditions', 'Crisp atmosphere']
    },
    vouraikos: {
      base: 16,
      el: ['Ιδανικό για διαδρομές', 'Σκιερά περάσματα', 'Καθαρός αέρας'],
      en: ['Ideal for routes', 'Shaded passages', 'Fresh air']
    }
  };

  function renderWeatherStrip(focusCity) {
    const lang = (document.documentElement.lang || 'el').startsWith('en') ? 'en' : 'el';
    const now = new Date();
    const phase = now.getMinutes() % 3;

    weatherItems.forEach((item) => {
      const city = item.dataset.weatherCity;
      const profile = weatherProfiles[city];
      if (!profile) return;

      const temp = profile.base + ((now.getHours() % 2 === 0) ? 1 : 0) - (phase === 2 ? 1 : 0);
      const cond = profile[lang][phase % profile[lang].length];

      const cityLabel = item.querySelector('[data-weather-city-label]');
      const tempEl = item.querySelector('[data-weather-temp]');
      const condEl = item.querySelector('[data-weather-cond]');

      if (cityLabel) {
        if (lang === 'en') {
          const cityMap = { patra: 'Patra', aigio: 'Aigio', kalavryta: 'Kalavryta', vouraikos: 'Vouraikos' };
          cityLabel.textContent = cityMap[city] || city;
        } else {
          const cityMap = { patra: 'Πάτρα', aigio: 'Αίγιο', kalavryta: 'Καλάβρυτα', vouraikos: 'Βουραϊκός' };
          cityLabel.textContent = cityMap[city] || city;
        }
      }

      if (tempEl) tempEl.textContent = `${temp}°C`;
      if (condEl) condEl.textContent = cond;

      item.classList.toggle('active', city === focusCity);
    });
  }

  function updateMapPanelFromPin(pin) {
    if (!pin) return;

    const lang = (document.documentElement.lang || 'el').startsWith('en') ? 'en' : 'el';
    const title = lang === 'en' ? (pin.dataset.titleEn || pin.dataset.titleEl) : (pin.dataset.titleEl || pin.dataset.titleEn);
    const text = lang === 'en' ? (pin.dataset.textEn || pin.dataset.textEl) : (pin.dataset.textEl || pin.dataset.textEn);
    const link = pin.dataset.link || '#';

    mapPins.forEach((item) => item.classList.toggle('active', item === pin));
    mapLegendButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.mapTarget === pin.dataset.projectId));

    if (mapPanelTitle) mapPanelTitle.textContent = title || 'Project';
    if (mapPanelText) mapPanelText.textContent = text || '';
    if (mapPanelLink) {
      mapPanelLink.href = link;
      const external = /^https?:\/\//i.test(link);
      mapPanelLink.target = external ? '_blank' : '_self';
      mapPanelLink.rel = external ? 'noopener noreferrer' : '';
    }

    renderWeatherStrip(pin.dataset.weatherFocus || 'patra');
  }

  mapPins.forEach((pin) => {
    pin.addEventListener('click', () => updateMapPanelFromPin(pin));
    pin.addEventListener('mouseenter', () => updateMapPanelFromPin(pin));
    pin.addEventListener('focus', () => updateMapPanelFromPin(pin));
  });

  mapLegendButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = mapPins.find((pin) => pin.dataset.projectId === btn.dataset.mapTarget);
      if (target) updateMapPanelFromPin(target);
    });
  });

  if (mapPins.length) updateMapPanelFromPin(mapPins[0]);

  window.setInterval(() => {
    const activeMapPin = mapRoot.querySelector('.map-pin.active') || mapPins[0];
    if (activeMapPin) renderWeatherStrip(activeMapPin.dataset.weatherFocus || 'patra');
  }, 45000);
})();
