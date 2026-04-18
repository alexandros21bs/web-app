import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'

export default function AboutPage() {
  return (
    <section className="section-space">
      <Seo
        title="Σχετικά"
        description="Η Web Host Pro προσφέρει σύγχρονη στρατηγική digital παρουσία με καθαρό design, hosting, branding και Digital Achaia initiatives."
        path="/about"
      />

      <div className="container-main">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
            Σχετικά
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Web Host Pro
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Η Web Host Pro δημιουργεί σύγχρονες ψηφιακές παρουσίες για
            επαγγελματίες, επιχειρήσεις και projects που θέλουν καλύτερη εικόνα,
            πιο καθαρή στρατηγική και σύγχρονη online λειτουργία.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="trust-label">Σύγχρονες ψηφιακές λύσεις</span>
            <span className="trust-label">Για επιχειρήσεις, brands και projects</span>
            <span className="trust-label">Digital Achaia powered by Web Host Pro</span>
          </div>

          <div className="cta-row mt-7">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Επικοινωνία
            </Link>
            <Link to="/services" className="premium-btn btn btn-secondary">
              Δείτε υπηρεσίες
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Η φιλοσοφία μας</h2>
            <p className="mt-4 leading-8 text-white/70">
              Καθαρό design, σύγχρονη εμπειρία, σωστή δομή, επαγγελματική εικόνα
              και πρακτικές λύσεις που μπορούν να εξελιχθούν με τον χρόνο.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Η Digital Achaia</h2>
            <p className="mt-4 leading-8 text-white/70">
              Ξεχωριστή δημιουργική κατεύθυνση για περιφερειακή ταυτότητα,
              πολιτισμό, τοπικά brands, τουριστική προβολή και θεματικά projects.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="glass rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Core Services</p>
            <h3 className="mt-3 text-xl font-semibold">Websites & eShop</h3>
            <p className="mt-3 leading-7 text-white/65">
              Σχεδιασμός, υλοποίηση και τεχνική υποδομή για σοβαρή online παρουσία
              με έμφαση σε conversion και αισθητική.
            </p>
          </div>
          <div className="glass rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Strategy & Branding</p>
            <h3 className="mt-3 text-xl font-semibold">Ταυτότητα & Κατεύθυνση</h3>
            <p className="mt-3 leading-7 text-white/65">
              Brand identity, οπτική γλώσσα, positioning και digital στρατηγική
              για brands που θέλουν να ξεχωρίζουν.
            </p>
          </div>
          <div className="glass rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Support & Growth</p>
            <h3 className="mt-3 text-xl font-semibold">Hosting & Υποστήριξη</h3>
            <p className="mt-3 leading-7 text-white/65">
              Αξιόπιστη φιλοξενία, τεχνική παρακολούθηση, updates και στήριξη
              για σταθερή και ασφαλή λειτουργία.
            </p>
          </div>
        </div>

        <div className="section-end-block">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/75">Ξεκινήστε</p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Έτοιμοι για ένα νέο digital project;
          </h2>
          <p className="mt-3 max-w-3xl text-white/65">
            Στείλτε μας το brief σας και θα σας απαντήσουμε με καθαρή πρόταση
            και επόμενα βήματα για website, eShop, branding ή Digital Achaia initiative.
          </p>
          <div className="cta-row mt-6">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Ξεκινήστε συνεργασία
            </Link>
            <Link to="/projects" className="premium-btn btn btn-secondary">
              Δείτε έργα
            </Link>
            <Link to="/digital-achaia" className="btn-inline">
              Digital Achaia Initiative
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
