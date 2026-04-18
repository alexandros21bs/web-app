import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPinned, Landmark, Camera, Compass, Sparkles, ArrowRight, ArrowLeft, Mail, BookOpen, Globe, Palette, Handshake, Map, ShieldCheck, Monitor, Network, ChevronDown, Phone } from 'lucide-react'
import Seo from '../components/common/Seo'

const focusItems = [
  {
    icon: MapPinned,
    title: 'Ταυτότητα περιοχών',
    text: 'Σύγχρονη ψηφιακή παρουσίαση τόπων, περιοχών και εμπειριών με καθαρό οπτικό χαρακτήρα.',
  },
  {
    icon: Landmark,
    title: 'Πολιτισμός & ιστορία',
    text: 'Ανάδειξη τοπικής μνήμης, πολιτιστικών στοιχείων και ιστορικών αναφορών με premium παρουσίαση.',
  },
  {
    icon: Camera,
    title: 'Τουριστική προβολή',
    text: 'Προβολή σημείων ενδιαφέροντος, θεματικών διαδρομών, εμπειριών και προορισμών.',
  },
  {
    icon: Compass,
    title: 'Θεματικά projects',
    text: 'Τοπικοί οδηγοί, αφιερώματα, routes, destination concepts και ειδικές συνεργασίες.',
  },
]

const whyItMattersItems = [
  {
    icon: Map,
    title: 'Τοπική Ανάδειξη',
    text: 'Προβάλλουμε την ταυτότητα κάθε τόπου με σεβασμό στην ιδιαιτερότητα και την ιστορία του.',
    color: 'text-sky-300',
    bg: 'bg-sky-400/10',
  },
  {
    icon: ShieldCheck,
    title: 'Ψηφιακή Αξιοπιστία',
    text: 'Οργανωμένη, ποιοτική και συνεπής παρουσία που ενισχύει εμπιστοσύνη και επαγγελματισμό.',
    color: 'text-emerald-300',
    bg: 'bg-emerald-400/10',
  },
  {
    icon: Monitor,
    title: 'Σύγχρονη Παρουσία',
    text: 'Σχεδιασμός και περιεχόμενο που ανταποκρίνονται στις σύγχρονες απαιτήσεις κοινού και αγοράς.',
    color: 'text-violet-300',
    bg: 'bg-violet-400/10',
  },
  {
    icon: Network,
    title: 'Περιφερειακή Σύνδεση',
    text: 'Ενώνουμε έργα, φορείς και επιχειρήσεις σε ένα λειτουργικό και διαρκώς εξελισσόμενο δίκτυο.',
    color: 'text-amber-200',
    bg: 'bg-amber-400/10',
  },
]

function CallCta() {
  const [open, setOpen] = useState(false)
  const phone = '306988888888'
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="premium-btn btn btn-secondary"
      >
        <Phone size={16} /> Καλέστε μας
      </button>
      {open && (
        <div className="absolute bottom-full left-0 mb-2 flex min-w-[200px] flex-col gap-1 rounded-2xl border border-white/12 bg-[#0c1425]/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <a
            href={`tel:+${phone}`}
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/8 hover:text-white"
          >
            <Phone size={15} /> Τηλεφωνική κλήση
          </a>
          <a
            href={`viber://chat?number=%2B${phone}`}
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-white/80 transition hover:bg-violet-400/10 hover:text-violet-300"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 0C9.5.1 5.6.6 3.4 2.7 1.6 4.5.9 7.2.8 10.5c0 3.3.6 5.3 2.6 7.1v3.1s0 1.2.8 1.5c.9.3 1.4-.6 1.4-.6l1.6-1.8c.2-.2.4-.2.6-.1 1.7.5 3.6.7 5.3.7h.4c0 0 0 0 0 0 .3-3.8 2.5-5.5 4-6.2.5-.2.7-.3.7-.3-.1-1.5-.3-4.4-1.3-6.2C15.6 4.5 12.5.2 11.4 0zm1.5 3.5c2.2.3 4.2 1.4 5.5 3.2.9 1.3 1.3 2.7 1.4 4.3 0 .3-.2.5-.5.5-.3 0-.5-.2-.5-.5-.1-1.3-.5-2.5-1.2-3.6-1.1-1.5-2.8-2.5-4.6-2.7-.3 0-.5-.3-.5-.6 0-.3.2-.6.4-.6zm.2 2c1.4.2 2.6.8 3.5 1.9.6.8 1 1.7 1.1 2.7 0 .3-.2.5-.5.6-.3 0-.5-.2-.6-.5-.1-.8-.4-1.5-.8-2.1-.7-1-1.7-1.4-2.8-1.6-.3-.1-.5-.3-.4-.6.1-.3.3-.5.5-.4zm.3 2c.7.1 1.3.5 1.7 1 .3.4.5.8.5 1.3 0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-.3-.1-.6-.3-.8-.3-.4-.7-.6-1.1-.6-.3 0-.5-.3-.5-.5.1-.3.4-.5.7-.4zM8.7 6.4c.3 0 .6.1.8.4l1.1 1.4c.2.3.2.7 0 1l-.5.7c-.1.2-.1.4 0 .5.5 1 1.2 1.8 2 2.5.2.2.4.2.6.1l.7-.5c.3-.2.7-.2 1 0l1.4 1c.5.3.5 1 .1 1.4-.5.6-1.1 1-1.9 1.1-.9.1-1.9-.2-2.8-.7-1.6-1-3-2.4-3.9-4.1-.5-1-.8-2-.6-2.9.1-.7.5-1.3 1.1-1.7.2-.1.5-.2.7-.2z"/></svg>
            Viber
          </a>
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-white/80 transition hover:bg-emerald-400/10 hover:text-emerald-300"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.3-.6.1-1.6-.8-2.7-1.7-3.5-3-.3-.4 0-.5.2-.7l.5-.6c.2-.2.1-.4 0-.6L9.6 7.3c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.6.1-.9.4C7 8 6.6 8.7 6.6 10c0 1.3 1 2.6 1.1 2.7.1.2 2 3 4.8 4.2 2.8 1.2 2.8.8 3.3.8.5 0 1.7-.7 1.9-1.4.3-.6.3-1.2.2-1.3-.1-.2-.3-.3-.5-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.6 1 1-3.5-.3-.4C2.5 15.6 1.9 13.8 1.9 12 1.9 6.4 6.4 1.9 12 1.9S22.1 6.4 22.1 12 17.6 21.8 12 21.8zm0-21.8C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg>
            WhatsApp
          </a>
        </div>
      )}
    </div>
  )
}

function AccordionCard({ icon: Icon, label, title, color, bg, text }) {
  const [open, setOpen] = useState(false)
  const heading = label || title
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="group w-full rounded-[16px] border border-white/10 bg-white/[0.03] p-5 text-left transition duration-300 hover:border-sky-300/25 hover:bg-white/[0.06] hover:shadow-[0_14px_32px_rgba(0,0,0,0.22),0_0_0_1px_rgba(110,198,255,0.08)]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`inline-flex shrink-0 rounded-xl p-2.5 ${bg}`}>
            <Icon size={18} strokeWidth={1.6} className={color} />
          </div>
          <span className="text-[0.92rem] font-semibold leading-6 text-white/90">{heading}</span>
        </div>
        <ChevronDown
          size={16}
          className={`shrink-0 text-white/40 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[0.88rem] leading-7 text-white/60">{text}</p>
        </div>
      </div>
    </button>
  )
}

export default function DigitalAchaiaPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const mapRoot = document.querySelector('#achaia-map-intelligence')
    if (!mapRoot) return undefined

    const mapPins = Array.from(mapRoot.querySelectorAll('.map-pin[data-project-id]'))
    const mapLegendButtons = Array.from(mapRoot.querySelectorAll('.map-legend-btn[data-map-target]'))
    const mapPanelTitle = mapRoot.querySelector('#mapPanelTitle')
    const mapPanelText = mapRoot.querySelector('#mapPanelText')
    const mapPanelLink = mapRoot.querySelector('#mapPanelLink')
    const weatherItems = Array.from(mapRoot.querySelectorAll('.meteo-item[data-weather-city]'))

    const weatherProfiles = {
      patra: {
        base: 20,
        el: ['Καθαρός', 'Ήπιος άνεμος', 'Θαλάσσια υγρασία'],
        en: ['Clear sky', 'Mild breeze', 'Sea humidity'],
      },
      aigio: {
        base: 19,
        el: ['Παραλιακός αέρας', 'Καλή ορατότητα', 'Ήπιος καιρός'],
        en: ['Coastal breeze', 'Clear visibility', 'Mild weather'],
      },
      kalavryta: {
        base: 13,
        el: ['Ορεινό κλίμα', 'Δροσερή αίσθηση', 'Καθαρή ατμόσφαιρα'],
        en: ['Mountain climate', 'Cool conditions', 'Crisp atmosphere'],
      },
      vouraikos: {
        base: 16,
        el: ['Ιδανικό για διαδρομές', 'Σκιερά περάσματα', 'Καθαρός αέρας'],
        en: ['Ideal for routes', 'Shaded passages', 'Fresh air'],
      },
    }

    function renderWeatherStrip(focusCity) {
      const lang = (document.documentElement.lang || 'el').startsWith('en') ? 'en' : 'el'
      const now = new Date()
      const phase = now.getMinutes() % 3

      weatherItems.forEach((item) => {
        const city = item.dataset.weatherCity
        const profile = weatherProfiles[city]
        if (!profile) return

        const temp = profile.base + (now.getHours() % 2 === 0 ? 1 : 0) - (phase === 2 ? 1 : 0)
        const cond = profile[lang][phase % profile[lang].length]

        const cityLabel = item.querySelector('[data-weather-city-label]')
        const tempEl = item.querySelector('[data-weather-temp]')
        const condEl = item.querySelector('[data-weather-cond]')

        if (cityLabel) {
          if (lang === 'en') {
            const cityMap = { patra: 'Patra', aigio: 'Aigio', kalavryta: 'Kalavryta', vouraikos: 'Vouraikos' }
            cityLabel.textContent = cityMap[city] || city
          } else {
            const cityMap = { patra: 'Πάτρα', aigio: 'Αίγιο', kalavryta: 'Καλάβρυτα', vouraikos: 'Βουραϊκός' }
            cityLabel.textContent = cityMap[city] || city
          }
        }

        if (tempEl) tempEl.textContent = `${temp}°C`
        if (condEl) condEl.textContent = cond

        item.classList.toggle('active', city === focusCity)
      })
    }

    function updateMapPanelFromPin(pin) {
      if (!pin) return

      const lang = (document.documentElement.lang || 'el').startsWith('en') ? 'en' : 'el'
      const title = lang === 'en' ? pin.dataset.titleEn || pin.dataset.titleEl : pin.dataset.titleEl || pin.dataset.titleEn
      const text = lang === 'en' ? pin.dataset.textEn || pin.dataset.textEl : pin.dataset.textEl || pin.dataset.textEn
      const link = pin.dataset.link || '#'

      mapPins.forEach((item) => item.classList.toggle('active', item === pin))
      mapLegendButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.mapTarget === pin.dataset.projectId))

      if (mapPanelTitle) mapPanelTitle.textContent = title || 'Project'
      if (mapPanelText) mapPanelText.textContent = text || ''
      if (mapPanelLink) {
        mapPanelLink.href = link
        const external = /^https?:\/\//i.test(link)
        mapPanelLink.target = external ? '_blank' : '_self'
        mapPanelLink.rel = external ? 'noopener noreferrer' : ''
      }

      renderWeatherStrip(pin.dataset.weatherFocus || 'patra')
    }

    const pinHandlers = mapPins.map((pin) => {
      const onActivate = () => updateMapPanelFromPin(pin)
      pin.addEventListener('click', onActivate)
      pin.addEventListener('mouseenter', onActivate)
      pin.addEventListener('focus', onActivate)
      return { pin, onActivate }
    })

    const legendHandlers = mapLegendButtons.map((btn) => {
      const onLegendClick = () => {
        const target = mapPins.find((pin) => pin.dataset.projectId === btn.dataset.mapTarget)
        if (target) updateMapPanelFromPin(target)
      }
      btn.addEventListener('click', onLegendClick)
      return { btn, onLegendClick }
    })

    if (mapPins.length) updateMapPanelFromPin(mapPins[0])

    const intervalId = window.setInterval(() => {
      const activeMapPin = mapRoot.querySelector('.map-pin.active') || mapPins[0]
      if (activeMapPin) renderWeatherStrip(activeMapPin.dataset.weatherFocus || 'patra')
    }, 45000)

    return () => {
      pinHandlers.forEach(({ pin, onActivate }) => {
        pin.removeEventListener('click', onActivate)
        pin.removeEventListener('mouseenter', onActivate)
        pin.removeEventListener('focus', onActivate)
      })
      legendHandlers.forEach(({ btn, onLegendClick }) => {
        btn.removeEventListener('click', onLegendClick)
      })
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    const imageExtensions = ['webp', 'jpg', 'jpeg', 'png']
    const previewButtons = Array.from(document.querySelectorAll('.project-preview-btn'))
    const lightbox = document.getElementById('flagshipLightbox')
    const lightboxImage = document.getElementById('flagshipLightboxImage')
    const lightboxTitle = document.getElementById('flagshipLightboxTitle')
    const lightboxVisit = document.getElementById('flagshipLightboxVisit')
    const lightboxClose = document.getElementById('flagshipLightboxClose')
    const lightboxPrev = document.getElementById('flagshipLightboxPrev')
    const lightboxNext = document.getElementById('flagshipLightboxNext')
    const previewImageMode = document.getElementById('flagshipPreviewImageMode')
    const previewLiveMode = document.getElementById('flagshipPreviewLiveMode')
    const lightboxIframe = document.getElementById('flagshipLightboxIframe')
    const lightboxLiveNote = document.getElementById('flagshipLightboxLiveNote')

    if (!lightbox || !previewButtons.length) return undefined

    let activePreviewIndex = 0
    let currentPreviewUrl = ''
    let liveLoadTimer = null
    let liveConfirmed = false

    const messages = {
      liveNoteDefault: 'Αν κάποιο site δεν εμφανιστεί εδώ, άνοιξέ το από το κουμπί "Δείτε το site".',
      liveLoading: 'Φόρτωση live προεπισκόπησης...',
      liveBlocked: 'Το site δεν επιτρέπει ενσωμάτωση live preview. Γυρίσαμε σε screenshot mode.',
      liveReady: 'Live preview ενεργό: μπορείς να σκρολάρεις κανονικά μέσα στο παράθυρο.',
    }

    document.querySelectorAll('.project-media[data-project]').forEach((el) => {
      const slug = el.dataset.project
      const previewBtn = document.querySelector(`[data-preview-for="${slug}"]`)
      let idx = 0
      const tryNext = () => {
        if (idx >= imageExtensions.length) { el.classList.add('no-image'); return }
        const src = `images/ecosystem/${slug}.${imageExtensions[idx]}`
        idx += 1
        const img = new Image()
        img.onload = () => {
          if (img.naturalWidth > 0) el.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`
          el.style.backgroundImage = `url('${src}')`
          if (previewBtn) previewBtn.dataset.previewSrc = src
          el.classList.remove('no-image')
        }
        img.onerror = tryNext
        img.src = src
      }
      tryNext()
    })

    const setLiveNote = (msg) => { if (lightboxLiveNote) lightboxLiveNote.textContent = msg }
    const clearLiveTimer = () => { if (liveLoadTimer) { window.clearTimeout(liveLoadTimer); liveLoadTimer = null } }

    const setLightboxMode = (mode) => {
      const isLive = mode === 'live'
      lightbox.classList.toggle('live-mode', isLive)
      if (previewLiveMode) previewLiveMode.classList.toggle('active', isLive)
      if (previewImageMode) previewImageMode.classList.toggle('active', !isLive)
    }

    const fallbackToScreenshot = () => { setLightboxMode('image'); setLiveNote(messages.liveBlocked) }

    const startLivePreview = (url) => {
      if (!lightboxIframe) return
      clearLiveTimer()
      liveConfirmed = false
      setLiveNote(messages.liveLoading)
      lightboxIframe.src = 'about:blank'
      window.requestAnimationFrame(() => { lightboxIframe.src = url })
      liveLoadTimer = window.setTimeout(() => { if (!liveConfirmed) fallbackToScreenshot() }, 4500)
    }

    const onIframeLoad = () => {
      let blocked = false
      try {
        const href = lightboxIframe.contentWindow?.location?.href ?? ''
        if (href === 'about:blank') blocked = true
      } catch { blocked = false }
      if (blocked) { clearLiveTimer(); fallbackToScreenshot(); return }
      liveConfirmed = true
      clearLiveTimer()
      setLiveNote(messages.liveReady)
    }
    if (lightboxIframe) lightboxIframe.addEventListener('load', onIframeLoad)

    const openLightbox = (index) => {
      const btn = previewButtons[index]
      if (!btn || !lightboxImage) return
      const src = btn.dataset.previewSrc
      if (!src) return
      activePreviewIndex = index
      lightboxImage.src = src
      lightboxImage.alt = btn.dataset.previewTitle || 'Project preview'
      if (lightboxTitle) lightboxTitle.textContent = btn.dataset.previewTitle || 'Project'
      if (lightboxVisit) lightboxVisit.href = btn.dataset.previewUrl || '#'
      currentPreviewUrl = btn.dataset.previewUrl || ''
      lightbox.classList.add('open')
      lightbox.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden'
      setLightboxMode('live')
      if (currentPreviewUrl) startLivePreview(currentPreviewUrl)
      else fallbackToScreenshot()
    }

    const closeLightbox = () => {
      lightbox.classList.remove('open')
      lightbox.setAttribute('aria-hidden', 'true')
      clearLiveTimer()
      if (lightboxIframe) lightboxIframe.src = 'about:blank'
      currentPreviewUrl = ''
      setLiveNote(messages.liveNoteDefault)
      document.body.style.overflow = ''
    }

    const stepLightbox = (dir) => openLightbox((activePreviewIndex + dir + previewButtons.length) % previewButtons.length)

    const onKeyDown = (e) => {
      if (!lightbox.classList.contains('open')) return
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowRight') stepLightbox(1)
      else if (e.key === 'ArrowLeft') stepLightbox(-1)
    }

    if (previewLiveMode) previewLiveMode.addEventListener('click', () => { setLightboxMode('live'); if (currentPreviewUrl) startLivePreview(currentPreviewUrl) })
    if (previewImageMode) previewImageMode.addEventListener('click', () => setLightboxMode('image'))
    previewButtons.forEach((btn, i) => btn.addEventListener('click', () => openLightbox(i)))
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox)
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => stepLightbox(-1))
    if (lightboxNext) lightboxNext.addEventListener('click', () => stepLightbox(1))
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox() })
    document.addEventListener('keydown', onKeyDown)

    return () => {
      clearLiveTimer()
      if (lightboxIframe) lightboxIframe.removeEventListener('load', onIframeLoad)
      if (lightboxClose) lightboxClose.removeEventListener('click', closeLightbox)
      if (lightboxPrev) lightboxPrev.removeEventListener('click', () => stepLightbox(-1))
      if (lightboxNext) lightboxNext.removeEventListener('click', () => stepLightbox(1))
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [])

  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45, ease: 'easeOut' },
  }

  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
  }

  return (
    <>
    <section className="section-space">
      <Seo
        title="Digital Achaia"
        description="Digital Achaia: regional identity initiative powered by Web Host Pro για πολιτισμό, τουρισμό, local projects και στρατηγική ψηφιακή αφήγηση."
        path="/digital-achaia"
      />

      <div className="container-main">
        {/* Row Top Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-amber-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
              Live
            </span>
            <a
              href="https://digitalachaia.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 transition hover:text-amber-200"
            >
              digitalachaia.gr
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@digitalachaia.gr" className="text-xs text-white/45 transition hover:text-sky-300">
              info@digitalachaia.gr
            </a>
            <span className="hidden text-white/15 sm:inline">|</span>
            <Link to="/contact" className="text-xs font-medium text-sky-300/70 transition hover:text-sky-200">
              Επικοινωνία
            </Link>
          </div>
        </div>

        <motion.div
          {...fadeUp}
          className="glass-strong page-glow soft-grid relative overflow-hidden rounded-[36px] p-8 md:p-14"
        >
          <div className="absolute -left-8 top-2 h-52 w-52 rounded-full bg-cyan-300/22 blur-3xl" />
          <div className="absolute -right-10 bottom-3 h-56 w-56 rounded-full bg-amber-400/14 blur-3xl" />
          <span className="badge-gold">
            Powered by Web Host Pro
          </span>

          <button onClick={() => navigate(-1)} className="back-btn mt-4 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80">
            <ArrowLeft size={16} /> Πίσω
          </button>

          <h1 className="mt-6 text-4xl font-semibold text-[#67E8F9] md:text-6xl">
            Digital Achaia
          </h1>
          <p className="mt-3 text-xl font-semibold text-white/60 md:text-2xl">
            Περιφερειακή ψηφιακή ταυτότητα, πολιτισμός και σύγχρονη παρουσίαση τόπων
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/65">
            Το Digital Achaia είναι μια στρατηγική πλατφόρμα δημιουργίας, προβολής και αφήγησης για τον τόπο, τον πολιτισμό, τον τουρισμό και τις τοπικές πρωτοβουλίες. Με πυρήνα την τεχνογνωσία της Web Host Pro Aigialeia, διαμορφώνουμε μια συνεκτική, premium και αξιόπιστη ψηφιακή παρουσία για την Αχαΐα.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="premium-btn btn btn-primary"
            >
              Συζητήστε το project σας
            </Link>
            <a
              href="https://digitalachaia.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn btn btn-secondary"
            >
              Επίσκεψη στο Digital Achaia <ArrowRight size={16} />
            </a>
            <CallCta />
          </div>
        </motion.div>

        <motion.section {...fadeUp} className="flagship-section">
          <div className="flagship-eyebrow"><span>Οικοσύστημα Projects</span></div>
          <h2 className="flagship-title text-[#67E8F9]">Εμβληματικά παραδείγματα περιφερειακής ψηφιακής αφήγησης.</h2>
          <p className="flagship-lead">Τα έργα του οικοσυστήματος δείχνουν πώς η στρατηγική προβολή μπορεί να ενώσει τόπο, εμπειρία και ταυτότητα σε μία ισχυρή ψηφιακή παρουσία.</p>

          <div className="flagship-grid">
            <article className="flagship-card">
              <span className="project-tag">Flagship Project</span>
              <h3 className="text-[#67E8F9]">DiscoverDiakopto.gr</h3>
              <p>Ψηφιακή βιτρίνα του Διακοπτού με έμφαση στην αυθεντική εμπειρία, τη φιλοξενία και τη σύνδεση θάλασσας και βουνού.</p>
              <a className="project-media-link" href="https://discoverdiakopto.gr" target="_blank" rel="noopener noreferrer" aria-label="Άνοιγμα DiscoverDiakopto.gr">
                <div className="project-media" data-project="discoverdiakopto-preview" role="img" aria-label="DiscoverDiakopto.gr εικόνα" />
              </a>
              <div className="project-actions">
                <a className="project-cta" href="https://discoverdiakopto.gr" target="_blank" rel="noopener noreferrer">Δείτε το site</a>
                <button className="project-preview-btn" data-preview-for="discoverdiakopto-preview" data-preview-title="DiscoverDiakopto.gr" data-preview-url="https://discoverdiakopto.gr" type="button">Προεπισκόπηση</button>
              </div>
            </article>

            <article className="flagship-card">
              <span className="project-tag">Flagship Project</span>
              <h3 className="text-[#67E8F9]">Odontotos.gr</h3>
              <p>Πλατφόρμα που αναδεικνύει τη μοναδικότητα του Οδοντωτού ως ιστορικό, τουριστικό και πολιτιστικό σύμβολο της περιοχής.</p>
              <a className="project-media-link" href="https://odontotos.gr" target="_blank" rel="noopener noreferrer" aria-label="Άνοιγμα Odontotos.gr">
                <div className="project-media" data-project="odontotos-preview" role="img" aria-label="Odontotos.gr εικόνα" />
              </a>
              <div className="project-actions">
                <a className="project-cta" href="https://odontotos.gr" target="_blank" rel="noopener noreferrer">Δείτε το site</a>
                <button className="project-preview-btn" data-preview-for="odontotos-preview" data-preview-title="Odontotos.gr" data-preview-url="https://odontotos.gr" type="button">Προεπισκόπηση</button>
              </div>
            </article>

            <article className="flagship-card">
              <span className="project-tag">Flagship Project</span>
              <h3 className="text-[#67E8F9]">Vouraikos.gr</h3>
              <p>Στοχευμένη παρουσίαση του Βουραϊκού με φυσιολατρικό χαρακτήρα, περιπατητική ταυτότητα και αφηγηματική συνέπεια.</p>
              <a className="project-media-link" href="https://vouraikos.gr" target="_blank" rel="noopener noreferrer" aria-label="Άνοιγμα Vouraikos.gr">
                <div className="project-media" data-project="vouraikos-preview" role="img" aria-label="Vouraikos.gr εικόνα" />
              </a>
              <div className="project-actions">
                <a className="project-cta" href="https://vouraikos.gr" target="_blank" rel="noopener noreferrer">Δείτε το site</a>
                <button className="project-preview-btn" data-preview-for="vouraikos-preview" data-preview-title="Vouraikos.gr" data-preview-url="https://vouraikos.gr" type="button">Προεπισκόπηση</button>
              </div>
            </article>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="achaia-map-section" id="achaia-map-intelligence">
          <div className="about-map-shell">
            <div className="about-map-head">
              <div>
                <h3>Χάρτης Αχαΐας • Project Intelligence Layer</h3>
                <p>Custom visual βάση για μελλοντική τοποθέτηση σημαιών, routes και δυναμικών project markers.</p>
              </div>
              <span className="project-tag">Map Stage v1</span>
            </div>

            <div className="about-map-grid">
              <div className="map-stage" aria-label="Stylized map stage of Achaia">
                <div className="map-grid" aria-hidden="true" />
                <div className="map-terrain terrain-far" aria-hidden="true" />
                <div className="map-terrain terrain-near" aria-hidden="true" />
                <div className="map-cloud cloud-a" aria-hidden="true" />
                <div className="map-cloud cloud-b" aria-hidden="true" />

                <svg className="map-route-layer" viewBox="0 0 800 420" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
                  <path d="M220 240 C260 210, 320 190, 385 188 C445 187, 510 198, 562 218" fill="none" stroke="rgba(247, 229, 188, 0.45)" strokeWidth="2" strokeDasharray="6 8" />
                </svg>

                <svg className="achaia-shape" viewBox="0 0 800 420" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="achFillStandalone" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#4b6480" stopOpacity="0.72" />
                      <stop offset="52%" stopColor="#2e4459" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#1f2f40" stopOpacity="0.95" />
                    </linearGradient>
                  </defs>
                  <path d="M115 249 L148 198 L188 176 L219 151 L248 154 L287 131 L337 126 L371 134 L401 154 L440 166 L492 170 L536 196 L570 202 L612 222 L657 262 L667 286 L641 311 L596 322 L554 319 L522 331 L478 336 L431 344 L395 336 L366 321 L336 316 L306 329 L270 337 L231 329 L209 312 L179 307 L153 290 L126 274 Z" fill="url(#achFillStandalone)" stroke="rgba(243, 228, 193, 0.55)" strokeWidth="2" />
                </svg>

                <button className="map-pin pin-diakopto active" data-project-id="diakopto" data-label="DiscoverDiakopto" data-title-el="DiscoverDiakopto.gr" data-title-en="DiscoverDiakopto.gr" data-text-el="Ψηφιακή πύλη για την ταυτότητα του Διακοπτού, με έμφαση σε εμπειρία, ιστορία και τουριστική εικόνα." data-text-en="Digital gateway for Diakopto identity with focus on local experience, heritage, and tourism visibility." data-link="https://discoverdiakopto.gr" data-weather-focus="aigio" type="button" aria-label="DiscoverDiakopto marker" />
                <button className="map-pin pin-odontotos" data-project-id="odontotos" data-label="Odontotos" data-title-el="Odontotos.gr" data-title-en="Odontotos.gr" data-text-el="Εστιασμένη παρουσίαση του Οδοντωτού ως ιστορικού και πολιτιστικού άξονα της περιοχής." data-text-en="Focused presentation of Odontotos as a historical and cultural axis of the region." data-link="https://odontotos.gr" data-weather-focus="kalavryta" type="button" aria-label="Odontotos marker" />
                <button className="map-pin pin-vouraikos" data-project-id="vouraikos" data-label="Vouraikos" data-title-el="Vouraikos.gr" data-title-en="Vouraikos.gr" data-text-el="Ανάδειξη του Βουραϊκού με φυσιολατρική αφήγηση, διαδρομές και περιφερειακή ταυτότητα." data-text-en="Showcasing Vouraikos through nature-driven storytelling, routes, and regional identity." data-link="https://vouraikos.gr" data-weather-focus="vouraikos" type="button" aria-label="Vouraikos marker" />
                <button className="map-pin pin-future" data-project-id="future" data-label="Next Project" data-title-el="Επόμενο Περιφερειακό Project" data-title-en="Next Regional Project" data-text-el="Ο χώρος είναι έτοιμος για νέα projects με custom σημαία, metadata και σύνδεση με το οικοσύστημα." data-text-en="This stage is ready for new projects with custom flags, metadata, and ecosystem connections." data-link="#contact" data-weather-focus="patra" type="button" aria-label="Future project marker" />

                <span className="city-callout city-patra">Πάτρα</span>
                <span className="city-callout city-aigio">Αίγιο</span>
                <span className="city-callout city-kalavryta">Καλάβρυτα</span>
                <span className="city-callout city-kato-achaia">Κ. Αχαΐα</span>

                <div className="map-meteo" aria-label="Regional weather strip">
                  <div className="meteo-item" data-weather-city="patra">
                    <small data-weather-city-label>Πάτρα</small>
                    <span data-weather-temp>20°C</span>
                    <em data-weather-cond>Καθαρός</em>
                  </div>
                  <div className="meteo-item" data-weather-city="aigio">
                    <small data-weather-city-label>Αίγιο</small>
                    <span data-weather-temp>19°C</span>
                    <em data-weather-cond>Παραλιακός αέρας</em>
                  </div>
                  <div className="meteo-item" data-weather-city="kalavryta">
                    <small data-weather-city-label>Καλάβρυτα</small>
                    <span data-weather-temp>13°C</span>
                    <em data-weather-cond>Ορεινό κλίμα</em>
                  </div>
                  <div className="meteo-item" data-weather-city="vouraikos">
                    <small data-weather-city-label>Βουραϊκός</small>
                    <span data-weather-temp>16°C</span>
                    <em data-weather-cond>Ιδανικό για διαδρομές</em>
                  </div>
                </div>
              </div>

              <aside className="map-panel" aria-live="polite">
                <span className="map-panel-kicker">Project Node</span>
                <h4 id="mapPanelTitle">DiscoverDiakopto.gr</h4>
                <p id="mapPanelText">Ψηφιακή πύλη για την ταυτότητα του Διακοπτού, με έμφαση σε εμπειρία, ιστορία και τουριστική εικόνα.</p>

                <div className="map-legend">
                  <span className="map-legend-title">Επιλογή Node</span>
                  <div className="map-legend-row">
                    <button className="map-legend-btn active" data-map-target="diakopto" type="button">DiscoverDiakopto</button>
                    <button className="map-legend-btn" data-map-target="odontotos" type="button">Odontotos</button>
                    <button className="map-legend-btn" data-map-target="vouraikos" type="button">Vouraikos</button>
                    <button className="map-legend-btn" data-map-target="future" type="button">Next Project</button>
                  </div>
                </div>

                <div className="map-panel-actions">
                  <a className="map-btn map-btn-primary" id="mapPanelLink" href="https://discoverdiakopto.gr" target="_blank" rel="noopener noreferrer">Open Project</a>
                  <a className="map-btn map-btn-ghost" href="#projects">View Projects</a>
                </div>
              </aside>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="mt-12">
          <div className="glass-strong page-glow vision-card rounded-[32px] p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.18em] text-amber-200/80">
              Όραμα
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#67E8F9] md:text-5xl">
              Ένα μακροπρόθεσμο ψηφιακό οικοσύστημα για την Αχαΐα.
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-9 text-white/72 md:text-xl">
              Στόχος μας είναι μια Αχαΐα με ενιαία ψηφιακή φωνή: σύγχρονη,
              αυθεντική και διεθνώς αναγνώσιμη. Μια περιφέρεια που δεν
              παρουσιάζει μόνο προορισμούς, αλλά αφηγείται ταυτότητα, αξίες,
              επιχειρηματικότητα και πολιτισμό με στρατηγική συνέπεια.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-9 text-white/72 md:text-xl">
              Το Digital Achaia λειτουργεί ως γέφυρα ανάμεσα σε τουρισμό,
              τοπική δημιουργία, πολιτιστικές διαδρομές, επιχειρηματικές
              πρωτοβουλίες και σύγχρονα media, ώστε κάθε έργο να ενισχύει το
              επόμενο και να δημιουργείται πραγματική περιφερειακή υπεραξία.
            </p>
          </div>
        </motion.section>

        <motion.div
          className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {focusItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} className="glass service-card rounded-[28px] p-6" variants={cardVariants}>
                <div className="icon-shell inline-flex p-3">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{item.text}</p>
                <Link to="/contact" className="inline-cta mt-5">
                  Μάθετε περισσότερα <ArrowRight size={14} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div {...fadeUp} className="glass-strong page-glow service-highlight-card mt-10 rounded-[32px] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-sky-300/70">
            Υπηρεσίες
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#67E8F9]">
            Ολοκληρωμένες υπηρεσίες για premium περιφερειακή παρουσία.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            Δημιουργούμε λύσεις που υπηρετούν τον χαρακτήρα κάθε περιοχής και
            κάθε τοπικής πρωτοβουλίας, με ακρίβεια στο περιεχόμενο, στον
            σχεδιασμό και στη στρατηγική προβολής.
          </p>

          <div className="mt-8 border-t border-white/8 pt-8">
            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.16em] text-amber-100/80">Γιατί έχει σημασία</p>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Αξία που φαίνεται σήμερα και χτίζει το αύριο.
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {whyItMattersItems.map((item) => (
                <AccordionCard key={item.title} {...item} />
              ))}
            </div>

            <div className="mt-8 border-t border-white/8 pt-8">
              <div className="flex items-center gap-3">
                <p className="text-xs uppercase tracking-[0.16em] text-sky-200/80">Στόχος</p>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#67E8F9] md:text-3xl">
                Τι δημιουργούμε μέσα από το Digital Achaia.
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  { icon: BookOpen, label: 'Τοπικοί ψηφιακοί οδηγοί', color: 'text-sky-300', bg: 'bg-sky-400/10', text: 'Αναπτύσσουμε ολοκληρωμένους ψηφιακούς οδηγούς που προβάλλουν με σύγχρονο τρόπο την ταυτότητα, τα σημεία ενδιαφέροντος, τις επιχειρήσεις και τις εμπειρίες κάθε περιοχής.' },
                  { icon: Globe, label: 'Destination microsites', color: 'text-emerald-300', bg: 'bg-emerald-400/10', text: 'Σχεδιάζουμε εξειδικευμένα microsites για προορισμούς, αξιοθέατα και τουριστικές ενότητες, με ξεκάθαρη στρατηγική, υψηλή αισθητική και στόχο τη δυνατή ψηφιακή παρουσία.' },
                  { icon: Palette, label: 'Θεματικά αφιερώματα', color: 'text-violet-300', bg: 'bg-violet-400/10', text: 'Δημιουργούμε θεματικά αφιερώματα που αναδεικνύουν την ιστορία, τον πολιτισμό, τη φύση, τη γαστρονομία και τις αυθεντικές εμπειρίες ενός τόπου με ξεχωριστό και ελκυστικό τρόπο.' },
                  { icon: Handshake, label: 'Πολιτιστικές & τουριστικές συνεργασίες', color: 'text-amber-200', bg: 'bg-amber-400/10', text: 'Υποστηρίζουμε συνεργασίες με φορείς, συλλόγους, επιχειρήσεις και τοπικές πρωτοβουλίες, ενισχύοντας την κοινή προβολή, την πολιτιστική εξωστρέφεια και την τουριστική ανάπτυξη.' },
                ].map((item) => (
                  <AccordionCard key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="glass-strong page-glow mt-16 rounded-[32px] p-8 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-amber-200/80">
                Συνεργασίες & ανάπτυξη
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
                Ας σχεδιάσουμε μαζί την επόμενη ψηφιακή εικόνα της Αχαΐας.
              </h2>
            </div>
            <Sparkles className="text-amber-200" size={28} />
          </div>

          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            Δήμοι, τουριστικές πρωτοβουλίες, τοπικές επιχειρήσεις, πολιτιστικοί
            φορείς και δημιουργικές ομάδες μπορούν να ενταχθούν σε ένα ενιαίο
            πλαίσιο προβολής που αναδεικνύει τον τόπο με ποιότητα, στρατηγική
            και διάρκεια.
          </p>

          <div className="cta-row mt-8">
            <a
              href="https://digitalachaia.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn btn btn-primary collaboration-cta"
            >
              Επίσκεψη στο DigitalAchaia.gr <ArrowRight size={18} />
            </a>
            <Link
              to="/contact"
              className="premium-btn btn btn-ghost"
            >
              Στείλτε μας την πρότασή σας <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="premium-btn btn btn-secondary"
            >
              Άμεσο αίτημα <ArrowRight size={18} />
            </Link>
            <CallCta />
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div {...fadeUp} className="newsletter-card mt-12 flex flex-col items-center gap-5 rounded-[28px] border border-white/8 bg-white/[0.025] px-6 py-10 text-center backdrop-blur-sm md:px-12">
          <Mail className="text-amber-200/70" size={22} strokeWidth={1.6} />
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200/60">Digital Achaia · Newsletter</p>
          <h3 className="max-w-lg text-xl font-semibold text-[#67E8F9] md:text-2xl">
            Μείνετε κοντά στις εξελίξεις του Digital Achaia.
          </h3>
          <p className="max-w-md text-sm leading-6 text-white/50">
            Νέα έργα, συνεργασίες, launches και ψηφιακές πρωτοβουλίες από το οικοσύστημα του Digital Achaia — απευθείας στο inbox σας.
          </p>
          <form
            action="mailto:info@webhostpro.gr,info@digitalachaia.gr,alexandros21bs@gmail.com"
            method="POST"
            encType="text/plain"
            className="mt-2 flex w-full max-w-md items-center gap-3"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-amber-300/40 focus:bg-white/[0.06]"
            />
            <button
              type="submit"
              className="premium-btn btn btn-primary whitespace-nowrap px-6 py-3 text-sm"
            >
              Εγγραφή
            </button>
          </form>
          <p className="text-[0.7rem] text-white/30">Χωρίς spam · Unsubscribe ανά πάσα στιγμή</p>
        </motion.div>

      </div>
    </section>

    <div className="flagship-lightbox" id="flagshipLightbox" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Project preview">
      <div className="flagship-lightbox-inner">
        <div className="flagship-lightbox-top">
          <h3 className="flagship-lightbox-title" id="flagshipLightboxTitle">Project</h3>
          <div className="flagship-lightbox-head-actions">
            <button className="flagship-lightbox-mode live-priority active" id="flagshipPreviewLiveMode" type="button">Live</button>
            <button className="flagship-lightbox-mode" id="flagshipPreviewImageMode" type="button">Screenshot</button>
            <button className="flagship-lightbox-close" id="flagshipLightboxClose" type="button" aria-label="Close preview">×</button>
          </div>
        </div>
        <img className="flagship-lightbox-image" id="flagshipLightboxImage" src="" alt="Project preview" />
        <div className="flagship-lightbox-live-wrap" id="flagshipLightboxLiveWrap">
          <iframe className="flagship-lightbox-iframe" id="flagshipLightboxIframe" src="about:blank" title="Live site preview" loading="lazy" />
          <p className="flagship-lightbox-live-note" id="flagshipLightboxLiveNote">Αν κάποιο site δεν εμφανιστεί εδώ, άνοιξέ το από το κουμπί &quot;Δείτε το site&quot;.</p>
        </div>
        <div className="flagship-lightbox-actions">
          <button className="project-cta" id="flagshipLightboxPrev" type="button">Previous</button>
          <button className="project-cta" id="flagshipLightboxNext" type="button">Next</button>
          <a className="btn btn-primary" id="flagshipLightboxVisit" href="#" target="_blank" rel="noopener noreferrer">Δείτε το site</a>
        </div>
      </div>
    </div>
    </>
  )
}
