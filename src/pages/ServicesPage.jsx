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
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { services } from '../data/services'

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

export default function ServicesPage() {
  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
  }
  return (
    <section className="section-space">
      <Seo
        title="Υπηρεσίες"
        description="Υπηρεσίες Web Host Pro: websites, eShop, hosting, support, SEO, branding και strategic digital execution για σύγχρονα brands."
        path="/services"
      />

      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
            Υπηρεσίες
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Υπηρεσίες με στρατηγική συνέπεια, premium παρουσίαση και τεχνική αξιοπιστία
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Η Web Host Pro σχεδιάζει και υλοποιεί digital λύσεις από το
            positioning μέχρι την τεχνική υποδομή, με στόχο σοβαρή και
            επεκτάσιμη online παρουσία.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="trust-label">Στρατηγική παρουσίαση</span>
            <span className="trust-label">Μοντέρνα online εικόνα</span>
          </div>

          <div className="cta-row mt-7">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Συζητήστε το project σας
            </Link>
            <Link to="/projects" className="premium-btn btn btn-secondary">
              Δείτε έργα
            </Link>
          </div>
        </div>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => {
            const Icon = icons[service.key]
            return (
              <motion.div key={service.key} className="glass service-card rounded-[28px] p-6" variants={cardVariants}>
                <div className="icon-shell inline-flex p-3">
                  <Icon size={20} />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-cyan-100/70">Service Module</p>
                <h3 className="mt-2 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{service.text}</p>
                <Link to="/contact" className="inline-cta mt-5">
                  Ζητήστε παρουσίαση <ArrowRight size={14} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-16 grid gap-5 md:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[
            {
              step: '01',
              title: 'Σχεδιασμός',
              subtitle: 'Strategy Alignment',
              text: 'Αποσαφηνίζουμε στόχο, κοινό και business direction πριν από κάθε δημιουργική ή τεχνική απόφαση.',
            },
            {
              step: '02',
              title: 'Υλοποίηση',
              subtitle: 'Execution Layer',
              text: 'Χτίζουμε δομή, UI και τεχνική υποδομή με συνέπεια brand, καθαρή εμπειρία και έμφαση στην απόδοση.',
            },
            {
              step: '03',
              title: 'Υποστήριξη',
              subtitle: 'Growth Support',
              text: 'Προχωράμε με συνεχή βελτίωση, updates και λειτουργική παρακολούθηση ώστε το project να εξελίσσεται με σταθερότητα.',
            },
          ].map((item) => (
            <motion.div key={item.title} className="glass service-card rounded-[28px] p-6" variants={cardVariants}>
              <p className="text-xs uppercase tracking-[0.16em] text-amber-400/80">
                Step {item.step}
              </p>
              <p className="mt-2 text-sm text-white/45">{item.subtitle}</p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="section-end-block">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/75">Next Step</p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Επιλέξτε υπηρεσίες και ας οργανώσουμε το project σας
          </h2>
          <p className="mt-3 max-w-3xl text-white/65">
            Αν χρειάζεστε website, eShop, redesign ή hosting υποστήριξη,
            μπορούμε να ξεκινήσουμε με ένα σύντομο brief και καθαρό πλάνο υλοποίησης.
          </p>
          <div className="cta-row mt-6">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Συζητήστε το project σας
            </Link>
            <Link to="/projects" className="premium-btn btn btn-secondary">
              Δείτε έργα
            </Link>
            <Link to="/digital-achaia" className="btn-inline">
              Ανακαλύψτε την κατεύθυνση <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
