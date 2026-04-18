import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Monitor,
  ShoppingCart,
  Server,
  Wrench,
  Search,
  Megaphone,
  Palette,
  Bot,
  ShieldCheck,
  ArrowRight,
  Mail,
} from 'lucide-react'
import Seo from '../components/common/Seo'
import { services } from '../data/services'
import { projects } from '../data/projects'

const MotionLink = motion(Link)

const icons = {
  websites: Monitor,
  eshops: ShoppingCart,
  hosting: Server,
  support: Wrench,
  seo: Search,
  marketing: Megaphone,
  branding: Palette,
  automation: Bot,
  security: ShieldCheck,
}

const projectPresentation = {
  'Digital Achaia': {
    badge: 'Featured Initiative',
    visual: 'Regional Identity Visual',
    title: 'Digital Achaia Initiative',
    category: 'Regional Identity Strategy',
    text: 'Στρατηγική ψηφιακή πρωτοβουλία για ταυτότητα τόπου, πολιτισμό και σύγχρονη τουριστική αφήγηση.',
  },
  'Discover Diakopto': {
    badge: 'Selected Concept',
    visual: 'Destination Storyboard',
    title: 'Discover Diakopto Concept',
    category: 'Local Destination Showcase',
    text: 'Concept για τοπικό destination με έμφαση σε εμπειρία επισκέπτη, διαδρομές και premium παρουσίαση περιεχομένου.',
  },
  'Destination / Route Concepts': {
    badge: 'Creative Direction',
    visual: 'Route Design Mock',
    title: 'Destination & Route Concepts',
    category: 'Tourism Content Systems',
    text: 'Πλαίσιο για θεματικές διαδρομές, curated guides και branded ψηφιακά concepts με στρατηγική συνοχή.',
  },
}

export default function HomePage() {
  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22 },
    transition: { duration: 0.45, ease: 'easeOut' },
  }

  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
  }

  return (
    <>
      <Seo
        title="Websites, Hosting, Digital Strategy"
        description="Web Host Pro: websites, eShop, hosting, branding και στρατηγική digital παρουσία με premium αισθητική και επιχειρηματική στόχευση."
        path="/"
      />

      <section className="section-space relative overflow-hidden">
        <div className="hero-blob -left-12 top-20 h-56 w-56 bg-cyan-300/35" />
        <div className="hero-blob right-[12%] top-8 h-72 w-72 bg-blue-400/24" />
        <div className="hero-blob bottom-6 left-[36%] h-52 w-52 bg-emerald-300/24" />

        <div className="container-main">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <span className="badge-gold">
                Web Host Pro
              </span>

              <h1 className="title-display mt-6 max-w-[14ch] font-semibold text-white">
                Websites, digital strategy και υποδομή που χτίζει σοβαρή online παρουσία.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
                Σχεδιάζουμε και υλοποιούμε websites, eShop, hosting,
                branding και content direction για brands που θέλουν
                καθαρή στρατηγική και σύγχρονη εικόνα στην αγορά.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="premium-btn btn btn-primary"
                >
                  Δείτε υπηρεσίες
                </Link>

                <Link
                  to="/contact"
                  className="premium-btn btn btn-secondary"
                >
                  Συζητήστε το project σας
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="trust-label">Σύγχρονες ψηφιακές λύσεις</span>
                <span className="trust-label">Για επιχειρήσεις, brands και projects</span>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.04 }}
              className="glass-strong page-glow relative overflow-hidden rounded-[32px] p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,143,255,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,194,168,0.15),transparent_28%)]" />
              <div className="soft-grid absolute inset-0 opacity-40" />
              <div className="relative grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/6 p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/45">
                    Strategic Focus
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Websites, Hosting, Branding, Growth
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Premium digital execution με έμφαση σε θέση brand,
                    λειτουργικότητα και επαγγελματική αξιοπιστία.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/45">Creative-Tech Direction</p>
                    <p className="mt-2 text-lg font-medium">Σύγχρονη premium παρουσίαση</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/45">Regional Initiative</p>
                    <p className="mt-2 text-lg font-medium">Digital Achaia powered by Web Host Pro</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-0">
        <div className="container-main">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
                Υπηρεσίες
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Ο υπηρεσιακός πυρήνας της Web Host Pro
              </h2>
            </div>
            <Link to="/services" className="btn-inline hidden md:inline-flex">
              Δείτε όλες <ArrowRight size={14} />
            </Link>
          </div>

          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => {
              const Icon = icons[service.key]
              return (
                <motion.div
                  key={service.key}
                  className="glass service-card group rounded-[28px] p-6"
                  variants={cardVariants}
                >
                  <div className="icon-shell inline-flex p-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/65">{service.text}</p>
                  <span className="inline-cta mt-5">
                    Μάθετε περισσότερα <ArrowRight size={14} />
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-space section-divider">
        <div className="container-main">
          <div className="glass-strong page-glow relative overflow-hidden rounded-[32px] p-8 md:p-12">
            <div className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-cyan-300/22 blur-3xl" />
            <div className="absolute -left-8 bottom-2 h-40 w-40 rounded-full bg-emerald-300/18 blur-3xl" />
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-amber-300/85">
                  Digital Achaia
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Η περιφερειακή creative πρωτοβουλία της Web Host Pro για τόπους, πολιτισμό και local projects
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-white/70">
                  Η Digital Achaia αναπτύσσει δομημένη ψηφιακή αφήγηση για
                  περιοχές, εμπειρίες, πολιτισμό και τοπικά brands με
                  στρατηγική λογική και premium αισθητική.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/digital-achaia"
                    className="premium-btn btn btn-primary"
                  >
                    Δείτε την Digital Achaia
                  </Link>
                  <Link
                    to="/contact"
                    className="premium-btn btn btn-secondary"
                  >
                    Συζητήστε το project σας
                  </Link>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  'Place branding & ταυτότητα περιοχών',
                  'Τουριστική προβολή και ψηφιακή αφήγηση',
                  'Θεματικοί οδηγοί και πολιτιστικές διαδρομές',
                  'Συνεργασίες με τοπικά brands και πρωτοβουλίες',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-amber-400/12 bg-amber-400/[0.04] px-5 py-4 text-white/80"
                  >
                    {item}
                  </div>
                ))}

                <div className="rounded-3xl border border-cyan-200/20 bg-cyan-200/7 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/70">Strategic Arm</p>
                  <p className="mt-2 text-sm text-white/75">Regional identity, tourism storytelling και thematic digital initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-0">
        <div className="container-main">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.18em] text-amber-200/80">
              Portfolio Highlights
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Selected concepts και πρωτοβουλίες με στρατηγικό χαρακτήρα
            </h2>
            <p className="mt-4 max-w-3xl text-white/65">
              Μια curated επιλογή από initiative cases, destination concepts και thematic directions
              που δείχνουν τη μεθοδολογία και το ύφος της Web Host Pro.
            </p>
          </div>

          <motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project) => {
              const entry = projectPresentation[project.title] || {
                badge: 'Selected',
                visual: 'Project Visual Placeholder',
                title: project.title,
                category: project.category,
                text: project.text,
              }

              return (
                <MotionLink
                  to={project.url}
                  key={project.title}
                  className="glass service-card group relative overflow-hidden rounded-[28px] p-6"
                  variants={cardVariants}
                >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-200/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="portfolio-thumb">
                  <span className="portfolio-thumb-label">{entry.visual}</span>
                </div>
                <span className="badge-gold px-3 py-1 text-[11px]">
                  {entry.badge}
                </span>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  {entry.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{entry.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{entry.text}</p>
                <span className="inline-cta mt-5">
                  Δες το έργο <ArrowRight size={15} />
                </span>
                </MotionLink>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-space section-divider pt-0">
        <div className="container-main">
          <div className="glass-strong rounded-[32px] p-8 text-center md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Έτοιμοι για πιο ώριμη και στρατηγική ψηφιακή παρουσία;
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
              Αναλαμβάνουμε websites, eShop, hosting υποδομή, branding και
              content direction με στόχο ισχυρότερη τοποθέτηση και καθαρή εικόνα.
            </p>
            <div className="cta-row mt-8 justify-center">
              <Link
                to="/contact"
                className="premium-btn btn btn-primary"
              >
                Ξεκινήστε συνεργασία
              </Link>
              <Link
                to="/projects"
                className="premium-btn btn btn-ghost"
              >
                Δείτε έργα
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <a href="mailto:info@webhostpro.gr" className="contact-chip"><Mail size={12} /> Email</a>
              <a href="#" className="contact-chip" onClick={(e) => e.preventDefault()}>Instagram</a>
              <a href="#" className="contact-chip" onClick={(e) => e.preventDefault()}>Facebook</a>
              <a href="#" className="contact-chip" onClick={(e) => e.preventDefault()}>LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
