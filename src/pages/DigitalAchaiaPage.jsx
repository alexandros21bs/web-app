import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPinned, Landmark, Camera, Compass, Sparkles, ArrowRight } from 'lucide-react'
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

export default function DigitalAchaiaPage() {
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
    <section className="section-space">
      <Seo
        title="Digital Achaia"
        description="Digital Achaia: regional identity initiative powered by Web Host Pro για πολιτισμό, τουρισμό, local projects και στρατηγική ψηφιακή αφήγηση."
        path="/digital-achaia"
      />

      <div className="container-main">
        <motion.div
          {...fadeUp}
          className="glass-strong page-glow soft-grid relative overflow-hidden rounded-[36px] p-8 md:p-14"
        >
          <div className="absolute -left-8 top-2 h-52 w-52 rounded-full bg-cyan-300/22 blur-3xl" />
          <div className="absolute -right-10 bottom-3 h-56 w-56 rounded-full bg-amber-400/14 blur-3xl" />
          <span className="badge-gold">
            Powered by Web Host Pro
          </span>

          <h1 className="mt-6 text-4xl font-semibold md:text-6xl">
            Digital Achaia
            <br />
            Περιφερειακή ψηφιακή ταυτότητα, πολιτισμός και σύγχρονη παρουσίαση τόπων
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Η Digital Achaia λειτουργεί ως creative και στρατηγική πρωτοβουλία
            της Web Host Pro, με στόχο να αναδεικνύει περιοχές, τοπικά brands,
            πολιτισμό και διαδρομές με premium ψηφιακή γλώσσα.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="premium-btn btn btn-primary"
            >
              Συζητήστε το project σας
            </Link>
            <Link
              to="/projects"
              className="premium-btn btn btn-secondary"
            >
              Δείτε έργα
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              'Φωτογραφία Προορισμού',
              'Οπτική Ταυτότητα Brand',
              'Project Screenshot',
            ].map((label) => (
              <div key={label} className="hero-visual-panel">
                <span className="hero-visual-label">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

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

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div {...fadeUp} className="glass-strong rounded-[32px] p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-sky-300/70">
              Τι αναλαμβάνει
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Από τον τόπο και την αφήγηση, μέχρι τη δομημένη ψηφιακή εικόνα
            </h2>
            <p className="mt-4 leading-8 text-white/70">
              Δεν πρόκειται για απλή σελίδα προβολής. Πρόκειται για ένα
              δημιουργικό framework που συνδέει ταυτότητα, πολιτιστική αξία,
              destination storytelling και σύγχρονο digital design.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="glass-strong rounded-[32px] p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Παραδείγματα
            </p>
            <div className="mt-4 space-y-4">
              {[
                'Τοπικοί ψηφιακοί οδηγοί',
                'Destination microsites',
                'Θεματικά αφιερώματα',
                'Πολιτιστικές & τουριστικές συνεργασίες',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-sky-300/12 bg-sky-300/[0.04] px-4 py-3 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="glass-strong page-glow mt-16 rounded-[32px] p-8 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-amber-200/80">
                Συνεργασίες & ανάπτυξη
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Τοπικά projects με ουσία, αισθητική και προοπτική
              </h2>
            </div>
            <Sparkles className="text-amber-200" size={28} />
          </div>

          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            Η πρωτοβουλία απευθύνεται σε περιοχές, φορείς, τοπικές επιχειρήσεις
            και πολιτιστικά σχήματα που χρειάζονται σύγχρονη, οργανωμένη και
            αισθητικά ώριμη ψηφιακή παρουσία.
          </p>

          <div className="cta-row mt-8">
            <Link
              to="/contact"
              className="premium-btn btn btn-primary"
            >
              Ξεκινήστε συνεργασία <ArrowRight size={18} />
            </Link>
            <Link
              to="/projects"
              className="premium-btn btn btn-ghost"
            >
              Μάθετε περισσότερα
            </Link>
            <a href="mailto:info@webhostpro.gr" className="btn-inline">
              Μιλήστε μαζί μας
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
