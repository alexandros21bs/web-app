import { Link, useNavigate } from 'react-router-dom'
import Seo from '../components/common/Seo'

import { ArrowLeft, ArrowRight, Target, LayoutPanelTop, ShieldCheck, Sparkles } from 'lucide-react'

export default function AboutPage() {
  const navigate = useNavigate()
  return (
    <section className="section-space">
      <Seo
        title="Ποιοι Είμαστε — Web Host Pro"
        description="Web Host Pro Αιγιαλεία: δημιουργούμε επαγγελματικές digital παρουσίες για επιχειρήσεις, brands και projects με καθαρό design και τεχνική σοβαρότητα."
        path="/about"
      />

      <div className="container-main">
        <div className="glass-strong page-glow soft-grid relative overflow-hidden rounded-[36px] p-8 md:p-12">
          <div className="absolute -left-8 top-2 h-52 w-52 rounded-full bg-cyan-300/22 blur-3xl" />
          <div className="absolute -right-10 bottom-3 h-56 w-56 rounded-full bg-amber-400/14 blur-3xl" />

          <button onClick={() => navigate(-1)} className="back-btn mb-4 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80">
            <ArrowLeft size={16} /> Πίσω
          </button>
          <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
            Σχετικά
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#67E8F9] md:text-6xl">
            Web Host Pro
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Η <span className="text-[#67E8F9]">Web Host Pro</span> δημιουργεί σύγχρονες ψηφιακές παρουσίες για επαγγελματίες, επιχειρήσεις και projects που χρειάζονται κάτι περισσότερο από μια απλή ιστοσελίδα. Δημιουργεί ψηφιακή εικόνα με ουσία, καθαρή στρατηγική, σωστή αισθητική και τεχνική βάση που μπορεί πραγματικά να στηρίξει την online λειτουργία και την ανάπτυξη μιας επιχείρησης.
          </p>
          <p className="mt-4 text-lg leading-8 text-white/68">
            Σε μια εποχή όπου η πρώτη εντύπωση διαμορφώνεται μέσα από την οθόνη, η <span className="text-[#67E8F9]">Web Host Pro</span> προσεγγίζει κάθε project με στόχο να χτίσει μια παρουσία που να εμπνέει εμπιστοσύνη, να εξυπηρετεί σωστά τον επισκέπτη και να εκφράζει με επαγγελματισμό την ταυτότητα του brand. Από εταιρικές ιστοσελίδες και eShop μέχρι hosting, τεχνική υποστήριξη, branding και στρατηγική ψηφιακής παρουσίας, η λογική της δεν είναι απλώς να “ανεβαίνει” ένα site, αλλά να δημιουργείται ένα ολοκληρωμένο και σωστά οργανωμένο ψηφιακό περιβάλλον.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="trust-label">Σύγχρονες ψηφιακές λύσεις</span>
            <span className="trust-label">Για επιχειρήσεις, brands και projects</span>
            <span className="trust-label">Premium design + technical seriousness</span>
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

        <div className="mt-10 rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-9">
          <h2 className="text-3xl font-semibold text-[#67E8F9] md:text-4xl">Τι είναι η <span className="text-[#67E8F9]">Web Host Pro</span></h2>
          <p className="mt-4 leading-8 text-white/70">
            Η <span className="text-[#67E8F9]">Web Host Pro</span> είναι μια δημιουργική και τεχνική κατεύθυνση που εστιάζει στη σύγχρονη ψηφιακή παρουσία επαγγελματιών, επιχειρήσεων και brands. Δεν περιορίζεται μόνο στην κατασκευή μιας ιστοσελίδας ή στην τεχνική φιλοξενία ενός project, αλλά αντιμετωπίζει συνολικά την εικόνα, τη δομή, την online στρατηγική και τη λειτουργικότητα κάθε ψηφιακής παρουσίας.
          </p>
          <p className="mt-4 leading-8 text-white/70">
            Ο ρόλος της είναι να οργανώνει σωστά το ψηφιακό αποτύπωμα μιας επιχείρησης. Αυτό σημαίνει καθαρή αρχιτεκτονική περιεχομένου, σωστή αισθητική κατεύθυνση, αξιόπιστη τεχνική υποδομή, καλύτερη παρουσίαση υπηρεσιών και πιο ολοκληρωμένη εμπειρία για τον επισκέπτη. Η <span className="text-[#67E8F9]">Web Host Pro</span> συνδέει την πρακτική ανάγκη της online λειτουργίας με τη σημασία της επαγγελματικής εικόνας, ώστε κάθε project να αποκτά ταυτότητα, συνοχή και προοπτική.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'Σύγχρονες ιστοσελίδες & eShop',
              'Hosting & τεχνική σταθερότητα',
              'SEO & online παρουσία',
              'Branding, campaigns & digital προβολή',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/82">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl md:p-9">
          <h2 className="text-3xl font-semibold text-[#67E8F9] md:text-4xl">Η φιλοσοφία μας</h2>
          <p className="mt-4 leading-8 text-white/70">
            Η φιλοσοφία της <span className="text-[#67E8F9]">Web Host Pro</span> βασίζεται στην ιδέα ότι μια πραγματικά καλή ψηφιακή παρουσία δεν είναι αποτέλεσμα μόνο ωραίου design ή μόνο καλής τεχνολογίας. Είναι αποτέλεσμα ισορροπίας. Χρειάζεται καθαρό design, σύγχρονη εμπειρία χρήστη, σωστή δομή, επαγγελματική εικόνα, τεχνική σταθερότητα και μια πρακτική στρατηγική που να υποστηρίζει τις πραγματικές ανάγκες του έργου ή της επιχείρησης.
          </p>
          <p className="mt-4 leading-8 text-white/70">
            Για αυτόν τον λόγο, κάθε project αντιμετωπίζεται ως κάτι περισσότερο από μια σελίδα ή μια online καταχώριση. Αντιμετωπίζεται ως μια παρουσία που πρέπει να αποτυπώνει σωστά το ύφος, τον χαρακτήρα και την αξία του brand. Η αισθητική δεν είναι διακοσμητική πολυτέλεια. Είναι εργαλείο επικοινωνίας. Η δομή δεν είναι τεχνική λεπτομέρεια. Είναι κομμάτι της εμπειρίας. Η ταχύτητα, η καθαρότητα, η σωστή ροή και η συνοχή είναι στοιχεία που επηρεάζουν άμεσα το πώς βλέπει και εμπιστεύεται ο επισκέπτης μια επιχείρηση.
          </p>
        </div>

        <div className="mt-8 rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-9">
          <h2 className="text-3xl font-semibold text-[#67E8F9] md:text-4xl">Πώς δουλεύουμε</h2>
          <p className="mt-4 leading-8 text-white/70">
            Η προσέγγιση της <span className="text-[#67E8F9]">Web Host Pro</span> βασίζεται στη σωστή κατανόηση του project πριν ξεκινήσει η υλοποίηση. Πρώτα εξετάζεται η ταυτότητα, ο στόχος και η κατεύθυνση της επιχείρησης ή του brand, ώστε η ψηφιακή παρουσία να μη χτίζεται τυχαία, αλλά με λογική και συνέπεια.
          </p>
          <p className="mt-4 leading-8 text-white/70">
            Στη συνέχεια οργανώνεται η σωστή δομή, το περιεχόμενο, η αισθητική γλώσσα και η τεχνική βάση, για να διαμορφωθεί μια παρουσία που να έχει επαγγελματικό αποτέλεσμα και ουσιαστική λειτουργία. Μετά την κατασκευή, εξίσου σημαντικό ρόλο παίζει η υποστήριξη, η συντήρηση και η δυνατότητα εξέλιξης, ώστε κάθε project να παραμένει λειτουργικό, ασφαλές, καθαρό και ανοιχτό σε βελτιώσεις.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, text: 'Κατανόηση στόχου' },
              { icon: LayoutPanelTop, text: 'Σωστή δομή & αισθητική' },
              { icon: ShieldCheck, text: 'Τεχνική σταθερότητα' },
              { icon: Sparkles, text: 'Εξέλιξη & υποστήριξη' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.text} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-[#111d31] text-[#67E8F9]">
                    <Icon size={17} />
                  </div>
                  <p className="mt-3 text-sm font-medium text-white/88">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl md:p-9">
          <h2 className="text-3xl font-semibold text-[#67E8F9] md:text-4xl">Τι θέλουμε να πετυχαίνει κάθε project</h2>
          <p className="mt-4 leading-8 text-white/70">
            Κάθε project που περνά από τη <span className="text-[#67E8F9]">Web Host Pro</span> πρέπει να πετυχαίνει μερικά βασικά πράγματα: να αποπνέει σοβαρότητα, να εξηγεί καθαρά τι προσφέρει, να λειτουργεί σωστά σε όλες τις συσκευές, να έχει τεχνική αξιοπιστία και να βοηθά τον επισκέπτη να καταλάβει γρήγορα την αξία της επιχείρησης ή του brand.
          </p>
          <p className="mt-4 leading-8 text-white/70">
            Μια καλή ψηφιακή παρουσία δεν πρέπει να μπερδεύει, να κουράζει ή να μοιάζει πρόχειρη. Πρέπει να είναι καθαρή, σύγχρονη, λειτουργική και επαγγελματική. Ο στόχος δεν είναι μόνο η παράδοση μιας σελίδας, αλλά η δημιουργία μιας παρουσίας που θα μπορεί να εκπροσωπήσει σωστά το brand και να αποτελέσει πραγματική βάση για το επόμενο βήμα.
          </p>
        </div>

        <div className="section-end-block">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/75">Final CTA</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#67E8F9] md:text-3xl">
            Θέλεις μια πιο οργανωμένη και επαγγελματική ψηφιακή παρουσία;
          </h2>
          <p className="mt-3 max-w-3xl text-white/65">
            Η <span className="text-[#67E8F9]">Web Host Pro</span> προσφέρει τη βάση, την αισθητική και την τεχνική κατεύθυνση που χρειάζεται μια σύγχρονη επιχείρηση για να παρουσιαστεί σωστά online, να αποκτήσει καλύτερη εικόνα και να χτίσει μια πιο ουσιαστική ψηφιακή παρουσία.
          </p>
          <div className="cta-row mt-6">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Συζητήστε το project σας
            </Link>
            <Link to="/contact" className="premium-btn btn btn-secondary">
              Επικοινωνία
            </Link>
            <Link to="/services" className="btn-inline">
              Δείτε υπηρεσίες <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
