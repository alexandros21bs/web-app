import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/common/Seo'

export default function PrivacyPage() {
  const navigate = useNavigate()
  return (
    <section className="section-space">
      <Seo
        title="Πολιτική Απορρήτου & Cookies"
        description="Πολιτική απορρήτου και cookies της Web Host Pro. Πληροφορίες για συλλογή δεδομένων, χρήση cookies και δικαιώματα GDPR."
        path="/privacy"
      />
      <div className="container-main">
        <div className="glass-strong page-glow rounded-[32px] p-8 md:p-12">
          <button
            onClick={() => navigate(-1)}
            className="back-btn mb-4 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
          >
            <ArrowLeft size={16} /> Πίσω
          </button>

          <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">Νομικό</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#67E8F9] md:text-5xl">
            Πολιτική Απορρήτου & Cookies
          </h1>
          <p className="mt-3 text-sm text-white/45">Τελευταία ενημέρωση: 23 Απριλίου 2026</p>

          <div className="prose-invert mt-10 max-w-3xl space-y-8 text-white/75 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_a]:text-[#67E8F9] [&_a]:underline">

            <section>
              <h2>1. Ποιοι είμαστε</h2>
              <p>
                Η <strong className="text-white">Web Host Pro</strong> (εφεξής «εμείς», «μας») είναι εταιρεία ψηφιακών υπηρεσιών με έδρα στο Διακοπτό Αιγιαλείας, Αχαΐα 25003. Λειτουργούμε στη διεύθυνση{' '}
                <a href="https://webhostpro.gr" target="_blank" rel="noopener noreferrer">webhostpro.gr</a>.
              </p>
              <p className="mt-2">
                Επικοινωνία: <a href="mailto:info@webhostpro.gr">info@webhostpro.gr</a>
              </p>
            </section>

            <section>
              <h2>2. Ποια δεδομένα συλλέγουμε</h2>
              <p>Συλλέγουμε προσωπικά δεδομένα μόνο όταν εσείς μας τα παρέχετε:</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-white/70">
                <li><strong className="text-white">Φόρμα επικοινωνίας:</strong> Ονοματεπώνυμο, email, τύπος project, θέμα, timeline και μήνυμα.</li>
                <li><strong className="text-white">Newsletter:</strong> Email διεύθυνση (προαιρετικά).</li>
              </ul>
              <p className="mt-3">
                Δεν συλλέγουμε αυτόματα δεδομένα πλοήγησης, δεν χρησιμοποιούμε Google Analytics ή άλλα trackers τρίτων.
              </p>
            </section>

            <section>
              <h2>3. Πώς χρησιμοποιούμε τα δεδομένα σας</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-white/70">
                <li>Απάντηση στο αίτημα συνεργασίας σας μέσω email.</li>
                <li>Επικοινωνία για θέματα project ή υποστήριξης.</li>
              </ul>
              <p className="mt-3">
                Δεν πωλούμε, δεν νοικιάζουμε και δεν κοινοποιούμε τα δεδομένα σας σε τρίτους.
              </p>
            </section>

            <section>
              <h2>4. Cookies</h2>
              <p>
                Το site χρησιμοποιεί <strong className="text-white">αποκλειστικά λειτουργικά cookies</strong>:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-white/70">
                <li><code className="rounded bg-white/10 px-1">whp_cookie_consent</code> — αποθηκεύει την επιλογή σας για το cookie banner (localStorage, όχι cookie). Διάρκεια: μόνιμη μέχρι διαγραφή.</li>
              </ul>
              <p className="mt-3">
                Δεν χρησιμοποιούμε cookies τρίτων, marketing ή analytics cookies.
              </p>
            </section>

            <section>
              <h2>5. Νομική βάση επεξεργασίας (GDPR)</h2>
              <p>
                Η επεξεργασία των δεδομένων σας βασίζεται στο <strong className="text-white">έννομο συμφέρον</strong> (άρθρο 6§1(f) GDPR) για την ανταπόκριση στα αιτήματά σας και στη <strong className="text-white">συγκατάθεσή σας</strong> (άρθρο 6§1(a)) όπου αυτή ζητείται.
              </p>
            </section>

            <section>
              <h2>6. Δικαιώματά σας</h2>
              <p>Σύμφωνα με τον GDPR έχετε δικαίωμα:</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-white/70">
                <li>Πρόσβασης στα δεδομένα που τηρούμε για εσάς.</li>
                <li>Διόρθωσης ή διαγραφής τους.</li>
                <li>Εναντίωσης στην επεξεργασία.</li>
                <li>Υποβολής καταγγελίας στην ΑΠΔΠΧ (<a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer">dpa.gr</a>).</li>
              </ul>
              <p className="mt-3">
                Για άσκηση δικαιωμάτων επικοινωνήστε: <a href="mailto:info@webhostpro.gr">info@webhostpro.gr</a>
              </p>
            </section>

            <section>
              <h2>7. Ασφάλεια</h2>
              <p>
                Το site λειτουργεί αποκλειστικά μέσω <strong className="text-white">HTTPS</strong>. Τα email που αποστέλλονται από τη φόρμα επικοινωνίας προστατεύονται από spam/bot μέσω honeypot και time-trap μεθόδων.
              </p>
            </section>

            <section>
              <h2>8. Αλλαγές</h2>
              <p>
                Ενδέχεται να ενημερώνουμε αυτή την πολιτική περιοδικά. Κάθε αλλαγή θα αναρτάται σε αυτή τη σελίδα με ενημερωμένη ημερομηνία.
              </p>
            </section>

          </div>

          <div className="mt-10">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Επικοινωνία για ερωτήσεις
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
