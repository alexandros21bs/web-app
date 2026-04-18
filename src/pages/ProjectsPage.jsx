import Seo from '../components/common/Seo'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import logAni from '../../log_ani.svg'

const projectPlaceholders = [
  {
    id: '01',
    badge: 'Flagship Project',
    visual: 'Signature Preview',
    title: 'Corporate Website Launch',
    category: 'Website Development',
    text: 'Εταιρική ιστοσελίδα με στόχο καλύτερη online εικόνα, αυξημένη αξιοπιστία και αποτελεσματικό lead generation.',
    imageSrc: '/images/ecosystem/discoverdiakopto-preview.jpg',
    projectUrl: 'https://discoverdiakopto.gr',
  },
  {
    id: '02',
    badge: 'Flagship Project',
    visual: 'Destination Preview',
    title: 'eShop Performance Setup',
    category: 'eCommerce',
    text: 'eShop με έμφαση σε conversion flow, mobile-first εμπειρία και καθαρή δομή προϊόντων για μέγιστη απόδοση.',
    imageSrc: '/images/ecosystem/odontotos-preview.jpg',
    projectUrl: 'https://odontotos.gr',
  },
  {
    id: '03',
    badge: 'Flagship Project',
    visual: 'Nature Preview',
    title: 'Premium Redesign Project',
    category: 'Redesign',
    text: 'Ανασχεδιασμός υπάρχοντος site για καθαρότερο UX, ισχυρότερη brand εικόνα και σύγχρονη παρουσίαση.',
    imageSrc: '/images/ecosystem/vouraikos-preview.jpg',
    projectUrl: 'https://vouraikos.gr',
  },
  {
    id: '04',
    badge: 'Curated Project',
    visual: 'Visual Placeholder',
    title: 'Brand Identity System',
    category: 'Branding',
    text: 'Οπτική ταυτότητα, design system και brand assets για web, print και social με συνεπή χαρακτήρα.',
    imageSrc: '',
    projectUrl: '',
  },
  {
    id: '05',
    badge: 'Curated Project',
    visual: 'Project Placeholder',
    title: 'SEO & Visibility Growth',
    category: 'SEO Strategy',
    text: 'Τεχνικό SEO και βελτιστοποίηση περιεχομένου για ενίσχυση οργανικής παρουσίας και ποιοτικής επισκεψιμότητας.',
    imageSrc: '',
    projectUrl: '',
  },
  {
    id: '06',
    badge: 'Curated Project',
    visual: 'Visual Showcase',
    title: 'Digital Campaign Presence',
    category: 'Digital Marketing',
    text: 'Creative campaign setup με στοχευμένα assets, συνεπή επικοινωνία brand και στρατηγική τοποθέτηση στα κατάλληλα κανάλια.',
    imageSrc: '',
    projectUrl: '',
  },
  {
    id: '07',
    badge: 'Initiative Project',
    visual: 'Editorial Preview',
    title: 'Digital Achaia: Destination Story',
    category: 'Regional Initiative',
    text: 'Ψηφιακή προβολή περιοχής με narrative δομή, τοπική ταυτότητα, τουριστικό χαρακτήρα και premium αισθητική.',
    imageSrc: '',
    projectUrl: '/digital-achaia',
  },
  {
    id: '08',
    badge: 'Initiative Project',
    visual: 'Concept Placeholder',
    title: 'Route & Experience Concept',
    category: 'Tourism Content',
    text: 'Θεματική διαδρομή με curated σημεία ενδιαφέροντος, οργανωμένη ψηφιακή εμπειρία και visual storytelling.',
    imageSrc: '',
    projectUrl: '',
  },
  {
    id: '09',
    badge: 'Curated Project',
    visual: 'Service Placeholder',
    title: 'Hosting & Support Care',
    category: 'Maintenance',
    text: 'Τεχνική υποστήριξη, uptime monitoring και performance βελτιώσεις για σταθερή, ασφαλή και γρήγορη λειτουργία.',
    imageSrc: '',
    projectUrl: '',
  },
]

export default function ProjectsPage() {
  const navigate = useNavigate()
  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
  }
  return (
    <section className="section-space relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-16 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-6 left-1/3 h-64 w-64 rounded-full bg-cyan-200/8 blur-3xl" />
      <Seo
        title="Projects"
        description="Portfolio Web Host Pro και Digital Achaia με selected projects, destination concepts και στρατηγικές digital κατευθύνσεις."
        path="/projects"
      />

      <div className="container-main">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <button onClick={() => navigate(-1)} className="back-btn mb-4 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80">
              <ArrowLeft size={16} /> Πίσω
            </button>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
              Έργα
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[#67E8F9] md:text-6xl">
              Portfolio — websites, eShop, branding, hosting και Digital Achaia initiatives
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Επιλογή digital projects που αντιπροσωπεύουν τη μεθοδολογία, τον τεχνικό χαρακτήρα
              και το ύφος της Web Host Pro.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="trust-label">Websites & eCommerce</span>
              <span className="trust-label">Branding & Strategy</span>
              <span className="trust-label">Digital Achaia Initiative</span>
            </div>
            <div className="cta-row mt-7">
              <Link to="/contact" className="premium-btn btn btn-primary transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(212,168,79,0.28)]">
                Συζητήστε το project σας
              </Link>
              <Link to="/services" className="premium-btn btn btn-secondary transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(103,232,249,0.24)]">
                Δείτε υπηρεσίες
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center">
            <motion.div
              className="pointer-events-none absolute h-[120%] w-[120%] rounded-full bg-cyan-300/10 blur-3xl"
              animate={{ opacity: [0.35, 0.62, 0.35], scale: [0.96, 1.05, 0.96] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="pointer-events-none absolute h-[108%] w-[108%] rounded-full bg-amber-300/9 blur-3xl"
              animate={{ opacity: [0.26, 0.52, 0.26], scale: [0.94, 1.08, 0.94] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-[92%] w-[92%] rounded-full border border-amber-300/26"
              animate={{ rotate: 360 }}
              transition={{ duration: 9.5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-[106%] w-[106%] rounded-full border border-cyan-200/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-[118%] w-[118%] rounded-full border border-white/8"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
            <motion.img
              src={logAni}
              alt="Web Host Pro animated emblem"
              className="mx-auto w-full max-w-[560px]"
              animate={{ y: [0, -12, 0], scale: [1, 1.035, 1], rotateZ: [0, 0.8, 0, -0.8, 0] }}
              transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
        >
          {projectPlaceholders.map((entry) => (
            <motion.article
              key={entry.id}
              className="glass service-card flagship-card group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.045] p-6 shadow-[0_12px_34px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-200/30 hover:shadow-[0_20px_46px_rgba(0,0,0,0.36)]"
              variants={cardVariants}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-200/12 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-300/14 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="project-tag">
                {entry.badge}
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">
                {entry.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#67E8F9]">{entry.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{entry.text}</p>

              {entry.projectUrl ? (
                <a
                  className="project-media-link"
                  href={entry.projectUrl}
                  target={entry.projectUrl.startsWith('http') ? '_blank' : undefined}
                  rel={entry.projectUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`Άνοιγμα ${entry.title}`}
                >
                  <div
                    className={`project-media${entry.imageSrc ? '' : ' no-image'}`}
                    role="img"
                    aria-label={`${entry.title} εικόνα`}
                    style={entry.imageSrc ? { backgroundImage: `url(${entry.imageSrc})` } : undefined}
                  />
                </a>
              ) : (
                <div className="project-media no-image" role="img" aria-label={`${entry.title} placeholder`}>
                  <span className="portfolio-thumb-label absolute left-3 top-3 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-white/75">{entry.visual}</span>
                </div>
              )}

              <div className="project-actions">
                {entry.projectUrl ? (
                  <a
                    className="project-cta transition duration-300 hover:-translate-y-0.5"
                    href={entry.projectUrl}
                    target={entry.projectUrl.startsWith('http') ? '_blank' : undefined}
                    rel={entry.projectUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    Δείτε το site
                  </a>
                ) : (
                  <button className="project-cta transition duration-300 hover:-translate-y-0.5" type="button">Δείτε το site</button>
                )}
                <button className="project-preview-btn transition duration-300 hover:-translate-y-0.5" type="button">Προεπισκόπηση</button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="section-end-block glass-strong page-glow relative mt-16 overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.035] p-7 md:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-amber-300/10 to-transparent" />
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/75">Portfolio Flow</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#67E8F9] md:text-3xl">
            Έχετε project idea; πάμε να το περάσουμε από concept σε υλοποίηση
          </h2>
          <p className="mt-3 max-w-3xl text-white/65">
            Στείλτε μας το concept σας για website, eShop, redesign ή regional initiative
            και θα οργανώσουμε πρόταση με καθαρή στρατηγική κατεύθυνση.
          </p>
          <div className="cta-row mt-6">
            <Link to="/contact" className="premium-btn btn btn-primary transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(212,168,79,0.28)]">
              Συζητήστε το project σας
            </Link>
            <Link to="/services" className="premium-btn btn btn-secondary transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(103,232,249,0.24)]">
              Δείτε υπηρεσίες
            </Link>
            <Link to="/digital-achaia" className="btn-inline transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(103,232,249,0.16)]">
              Ανακαλύψτε την κατεύθυνση
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
