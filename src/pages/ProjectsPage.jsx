import Seo from '../components/common/Seo'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projectPlaceholders = [
  {
    id: '01',
    badge: 'Featured Slot',
    visual: 'Homepage + Brand Preview',
    title: 'Corporate Website Launch',
    category: 'Website Development',
    text: 'Εταιρική ιστοσελίδα με στόχο καλύτερη online εικόνα, αυξημένη αξιοπιστία και αποτελεσματικό lead generation.',
  },
  {
    id: '02',
    badge: 'Selected Slot',
    visual: 'Storefront + Product Grid',
    title: 'eShop Performance Setup',
    category: 'eCommerce',
    text: 'eShop με έμφαση σε conversion flow, mobile-first εμπειρία και καθαρή δομή προϊόντων για μέγιστη απόδοση.',
  },
  {
    id: '03',
    badge: 'Portfolio Slot',
    visual: 'Before / After Screens',
    title: 'Premium Redesign Project',
    category: 'Redesign',
    text: 'Ανασχεδιασμός υπάρχοντος site για καθαρότερο UX, ισχυρότερη brand εικόνα και σύγχρονη παρουσίαση.',
  },
  {
    id: '04',
    badge: 'Portfolio Slot',
    visual: 'Identity Board + Assets',
    title: 'Brand Identity System',
    category: 'Branding',
    text: 'Οπτική ταυτότητα, design system και brand assets για web, print και social με συνεπή χαρακτήρα.',
  },
  {
    id: '05',
    badge: 'Selected Slot',
    visual: 'Analytics + Search Snapshot',
    title: 'SEO & Visibility Growth',
    category: 'SEO Strategy',
    text: 'Τεχνικό SEO και βελτιστοποίηση περιεχομένου για ενίσχυση οργανικής παρουσίας και ποιοτικής επισκεψιμότητας.',
  },
  {
    id: '06',
    badge: 'Portfolio Slot',
    visual: 'Campaign Creative Panel',
    title: 'Digital Campaign Presence',
    category: 'Digital Marketing',
    text: 'Creative campaign setup με στοχευμένα assets, συνεπή επικοινωνία brand και στρατηγική τοποθέτηση στα κατάλληλα κανάλια.',
  },
  {
    id: '07',
    badge: 'Initiative Slot',
    visual: 'Destination Storyboard',
    title: 'Digital Achaia: Destination Story',
    category: 'Regional Initiative',
    text: 'Ψηφιακή προβολή περιοχής με narrative δομή, τοπική ταυτότητα, τουριστικό χαρακτήρα και premium αισθητική.',
  },
  {
    id: '08',
    badge: 'Initiative Slot',
    visual: 'Route Map + Highlights',
    title: 'Route & Experience Concept',
    category: 'Tourism Content',
    text: 'Θεματική διαδρομή με curated σημεία ενδιαφέροντος, οργανωμένη ψηφιακή εμπειρία και visual storytelling.',
  },
  {
    id: '09',
    badge: 'Portfolio Slot',
    visual: 'Support Dashboard Mock',
    title: 'Hosting & Support Care',
    category: 'Maintenance',
    text: 'Τεχνική υποστήριξη, uptime monitoring και performance βελτιώσεις για σταθερή, ασφαλή και γρήγορη λειτουργία.',
  },
]

export default function ProjectsPage() {
  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
  }
  return (
    <section className="section-space">
      <Seo
        title="Projects"
        description="Portfolio Web Host Pro και Digital Achaia με selected projects, destination concepts και στρατηγικές digital κατευθύνσεις."
        path="/projects"
      />

      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
            Έργα
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
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
            <Link to="/contact" className="premium-btn btn btn-primary">
              Συζητήστε το project σας
            </Link>
            <Link to="/services" className="premium-btn btn btn-secondary">
              Δείτε υπηρεσίες
            </Link>
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
              className="glass service-card group relative overflow-hidden rounded-[28px] p-6"
              variants={cardVariants}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-200/12 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="portfolio-thumb">
                <span className="portfolio-thumb-label">{entry.visual}</span>
              </div>
              <span className={`${ entry.badge.includes('Featured') || entry.badge.includes('Initiative') ? 'badge-gold' : 'badge-blue' } px-3 py-1 text-[11px]`}>
                {entry.badge}
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">
                {entry.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{entry.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{entry.text}</p>
              <span className="inline-cta mt-5">
                Δες το έργο <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </motion.div>

        <div className="section-end-block">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/75">Portfolio Flow</p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Έχετε project idea; πάμε να το περάσουμε από concept σε υλοποίηση
          </h2>
          <p className="mt-3 max-w-3xl text-white/65">
            Στείλτε μας το concept σας για website, eShop, redesign ή regional initiative
            και θα οργανώσουμε πρόταση με καθαρή στρατηγική κατεύθυνση.
          </p>
          <div className="cta-row mt-6">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Συζητήστε το project σας
            </Link>
            <Link to="/services" className="premium-btn btn btn-secondary">
              Δείτε υπηρεσίες
            </Link>
            <Link to="/digital-achaia" className="btn-inline">
              Ανακαλύψτε την κατεύθυνση
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
