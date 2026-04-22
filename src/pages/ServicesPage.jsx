import {
  Globe,
  MonitorSmartphone,
  ShoppingBag,
  ServerCog,
  ShieldCheck,
  SearchCheck,
  Megaphone,
  Palette,
  IdCard,
  Brush,
  PencilRuler,
  Video,
  Wrench,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import Seo from '../components/common/Seo'

export default function ServicesPage() {
  const navigate = useNavigate()

  const BrandingIdentityDesignIcon = ({ className }) => (
    <span className={`relative inline-flex h-6 w-6 ${className || ''}`}>
      <IdCard size={17} strokeWidth={1.9} className="absolute left-0 bottom-0" />
      <Brush size={12} strokeWidth={2} className="absolute -right-1 -top-1" />
    </span>
  )

  const serviceCategories = [
    {
      key: 'web-ecommerce',
      Icon: MonitorSmartphone,
      label: 'Κατηγορία 1',
      title: 'Web & eCommerce',
      items: [
        {
          key: 'corporate-websites',
          Icon: MonitorSmartphone,
          title: 'Εταιρικές ιστοσελίδες',
          text: 'Σχεδιάζουμε εταιρικές ιστοσελίδες υψηλής αισθητικής που αποτυπώνουν επαγγελματισμό, αξιοπιστία και σύγχρονη επιχειρηματική ταυτότητα. Κάθε project δομείται με στόχο να δημιουργεί δυνατή πρώτη εντύπωση, καθαρή πλοήγηση και ουσιαστική εμπειρία για τον επισκέπτη.',
        },
        {
          key: 'landing-pages',
          Icon: Globe,
          title: 'Landing pages',
          text: 'Δημιουργούμε στοχευμένες landing pages με ξεκάθαρο μήνυμα, δυνατή αισθητική και στρατηγική δομή μετατροπών. Είναι ιδανικές για υπηρεσίες, προσφορές, καμπάνιες και projects που χρειάζονται άμεση ανταπόκριση και επαγγελματική παρουσίαση.',
        },
        {
          key: 'eshop-build',
          Icon: ShoppingBag,
          title: 'Κατασκευή και διαχείριση eShop',
          text: 'Αναπτύσσουμε και υποστηρίζουμε σύγχρονα eShop που συνδυάζουν λειτουργικότητα, εμπορική λογική και δυνατή οπτική παρουσία. Δίνουμε έμφαση στην εμπειρία χρήστη, στη σωστή παρουσίαση των προϊόντων και στη δημιουργία μιας αξιόπιστης βάσης για online πωλήσεις, με δυνατότητα διαχείρισης και συνεχούς υποστήριξης όπου χρειάζεται.',
        },
        {
          key: 'services-products-presentation',
          Icon: Globe,
          title: 'Παρουσίαση υπηρεσιών και προϊόντων',
          text: 'Οργανώνουμε και αναδεικνύουμε υπηρεσίες και προϊόντα με καθαρή δομή, ισχυρή εικόνα και σωστή επικοινωνία του οφέλους προς τον πελάτη. Στόχος είναι η επαγγελματική παρουσίαση που εμπνέει εμπιστοσύνη και ενισχύει την εμπορική αξία της επιχείρησης.',
        },
      ],
    },
    {
      key: 'hosting-technical-care',
      Icon: ServerCog,
      label: 'Κατηγορία 2',
      title: 'Hosting & Technical Care',
      items: [
        {
          key: 'web-hosting',
          Icon: ServerCog,
          title: 'Web Hosting, Mail Hosting & Cloud Solutions',
          text: 'Παρέχουμε λύσεις φιλοξενίας που υποστηρίζουν μια σταθερή, γρήγορη και αξιόπιστη online παρουσία, καλύπτοντας ανάγκες web hosting, επαγγελματικών email και cloud υποδομών. Η σωστή τεχνική βάση αποτελεί το θεμέλιο κάθε σοβαρού ψηφιακού project και φροντίζουμε να ανταποκρίνεται ουσιαστικά στις πραγματικές απαιτήσεις κάθε επιχείρησης.',
        },
        {
          key: 'technical-support',
          Icon: Wrench,
          title: 'Domain Services & Domain Management',
          text: 'Παρέχουμε υπηρεσίες καταχώρησης, διαχείρισης και τεχνικής υποστήριξης domains, ώστε κάθε project να ξεκινά και να λειτουργεί πάνω σε σωστή και αξιόπιστη βάση. Φροντίζουμε τη σωστή οργάνωση και τη σταθερή διαχείριση της online ταυτότητάς σας.',
        },
        {
          key: 'optimizations-updates',
          Icon: ShieldCheck,
          title: 'Τεχνική υποστήριξη, συντήρηση και βελτιστοποιήσεις',
          text: 'Αναλαμβάνουμε τη συνεχή υποστήριξη, συντήρηση και αναβάθμιση της ιστοσελίδας σας, ώστε να παραμένει ασφαλής, ενημερωμένη, γρήγορη και πλήρως λειτουργική. Μέσα από σταθερή παρακολούθηση, ουσιαστικά updates και στοχευμένες βελτιστοποιήσεις, διασφαλίζουμε ένα πιο σύγχρονο, πιο αποδοτικό και πιο αξιόπιστο ψηφιακό αποτέλεσμα.',
        },
        {
          key: 'wordpress-ecommerce-hosting',
          Icon: ServerCog,
          title: 'WordPress Hosting & eCommerce Hosting',
          text: 'Παρέχουμε λύσεις φιλοξενίας προσαρμοσμένες σε WordPress websites και eCommerce projects, με στόχο μια σταθερή, γρήγορη και αξιόπιστη online λειτουργία. Η σωστή τεχνική υποδομή αποτελεί τη βάση κάθε σοβαρής ψηφιακής παρουσίας και φροντίζουμε να υποστηρίζει ουσιαστικά τις ανάγκες μιας επιχείρησης, είτε αφορά ένα εταιρικό site είτε ένα απαιτητικό ηλεκτρονικό κατάστημα.',
        },
      ],
    },
    {
      key: 'visibility-growth',
      Icon: SearchCheck,
      label: 'Κατηγορία 3',
      title: 'Visibility & Growth',
      items: [
        {
          key: 'seo-structure',
          Icon: SearchCheck,
          title: 'SEO, Local Presence & Google Targeted Reach',
          text: 'Χτίζουμε σωστές βάσεις για μια πιο οργανωμένη και επαγγελματική online παρουσία, με έμφαση στη δομή του site, στο περιεχόμενο και στη συνολική εικόνα του brand. Παράλληλα, ενισχύουμε τη local SEO κατεύθυνση και τη στοχευμένη προβολή σε Google, ώστε μια επιχείρηση να γίνεται πιο εύκολα ορατή στο κοινό που την αναζητά και να αποκτά πιο ουσιαστική ψηφιακή απήχηση.',
        },
        {
          key: 'content-sales-boost',
          Icon: Sparkles,
          title: 'Δημιουργία περιεχομένου για αύξηση πωλήσεων',
          text: 'Σχεδιάζουμε και παράγουμε περιεχόμενο με στόχο την ενίσχυση της ζήτησης και τη μετατροπή ενδιαφέροντος σε πωλήσεις. Μέσα από στοχευμένα visuals, κείμενα και video, αναδεικνύουμε τα προϊόντα ή τις υπηρεσίες σας με τρόπο που τραβά το ενδιαφέρον και οδηγεί σε ουσιαστικά αποτελέσματα.',
        },
        {
          key: 'digital-marketing',
          Icon: Megaphone,
          title: 'Digital marketing, social media management και στρατηγική ανάπτυξης',
          text: 'Σχεδιάζουμε και υλοποιούμε στοχευμένες ενέργειες digital marketing, συνδυάζοντας στρατηγική, διαχείριση social media και δημιουργία περιεχομένου που ενισχύει την εικόνα και την αναγνωρισιμότητα ενός brand. Μέσα από οργανωμένη παρουσία, σωστή κατεύθυνση και περιεχόμενο με στόχο, υποστηρίζουμε την αύξηση της απήχησης, τη δημιουργία σχέσης με το κοινό και την ουσιαστική ανάπτυξη μιας επιχείρησης στον ψηφιακό χώρο.',
        },
        {
          key: 'social-support',
          Icon: Megaphone,
          title: 'Social Media Management, Performance Strategy & Campaign Support',
          text: 'Αναλαμβάνουμε τη συνολική οργάνωση και διαχείριση της social media παρουσίας ενός brand, με στρατηγική κατεύθυνση, συνέπεια και υψηλή αισθητική που ενισχύει μια πιο δυνατή και αναγνωρίσιμη digital εικόνα. Παράλληλα, σχεδιάζουμε και υποστηρίζουμε στοχευμένα campaigns και ad actions με performance προσανατολισμό, που αυξάνουν το reach, ενισχύουν το brand awareness και δημιουργούν καλύτερες προϋποθέσεις αλληλεπίδρασης, προσέγγισης νέου κοινού και ανάπτυξης.',
        },
      ],
    },
    {
      key: 'branding-image',
      Icon: BrandingIdentityDesignIcon,
      label: 'Κατηγορία 4',
      title: 'Branding & Image',
      items: [
        {
          key: 'branding-identity',
          Icon: Palette,
          title: 'Branding και οπτική ταυτότητα',
          text: 'Διαμορφώνουμε ισχυρή οπτική ταυτότητα που δίνει συνέπεια, χαρακτήρα και αναγνωρισιμότητα σε μια επιχείρηση. Από τη συνολική αισθητική μέχρι τις λεπτομέρειες της εικόνας, δημιουργούμε brands με ξεχωριστή παρουσία και επαγγελματικό αποτύπωμα.',
        },
        {
          key: 'creative-graphics',
          Icon: PencilRuler,
          title: 'Δημιουργικά γραφιστικά',
          text: 'Σχεδιάζουμε δημιουργικά γραφιστικά που υποστηρίζουν την προβολή, την επικοινωνία και τη συνοχή της εικόνας μιας επιχείρησης σε κάθε μέσο. Εστιάζουμε σε καθαρό design, προσεγμένη αισθητική και σύγχρονη οπτική αντίληψη.',
        },
        {
          key: 'digital-image-strategy',
          Icon: Globe,
          title: 'Στρατηγική ψηφιακής εικόνας',
          text: 'Οργανώνουμε τη συνολική ψηφιακή εικόνα μιας επιχείρησης, ώστε site, social media, branding και περιεχόμενο να λειτουργούν ενιαία και με ξεκάθαρη κατεύθυνση. Έτσι δημιουργείται μια πιο δυνατή ταυτότητα, πιο σταθερή παρουσία και πιο ολοκληρωμένη εμπειρία προς το κοινό.',
        },
        {
          key: 'audiovisual-production',
          Icon: Video,
          title: 'Δημιουργία και παραγωγή οπτικοακουστικού υλικού',
          text: 'Σχεδιάζουμε και παράγουμε βίντεο, promo spots και δημιουργικό περιεχόμενο για την προβολή προϊόντων, υπηρεσιών και brands, με στόχο μια πιο δυνατή εικόνα και πιο ξεκάθαρο μήνυμα. Έτσι ενισχύεται η αναγνωρισιμότητα, τραβιέται πιο εύκολα το ενδιαφέρον του κοινού και υποστηρίζεται πιο ουσιαστικά η συνολική προώθηση μιας επιχείρησης.',
        },
      ],
    },
  ]

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
        <div className="glass-strong page-glow soft-grid relative overflow-hidden rounded-[36px] p-8 md:p-12">
          <div className="absolute -left-8 top-2 h-52 w-52 rounded-full bg-cyan-300/22 blur-3xl" />
          <div className="absolute -right-10 bottom-3 h-56 w-56 rounded-full bg-amber-400/14 blur-3xl" />

          <button onClick={() => navigate(-1)} className="back-btn mb-4 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80">
            <ArrowLeft size={16} /> Πίσω
          </button>

          <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
            Υπηρεσίες
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold text-[#67E8F9] md:text-6xl">
            Ψηφιακές λύσεις με πιο καθαρή στρατηγική και σύγχρονη αισθητική
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Η <span className="text-[#67E8F9]">Web Host Pro</span> προσφέρει ολοκληρωμένες λύσεις για επαγγελματίες, επιχειρήσεις και projects που χρειάζονται σύγχρονη εικόνα, σωστή τεχνική βάση, ουσιαστική προβολή και πιο οργανωμένη online παρουσία.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-9">
          <div className="pointer-events-none absolute -left-10 top-0 h-32 w-32 rounded-full bg-amber-300/14 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-cyan-300/14 blur-3xl" />

          <div className="relative z-10">
          <h2 className="text-3xl font-semibold text-[#67E8F9] md:text-4xl">
            Τι είναι η <span className="text-[#67E8F9]">Web Host Pro</span>
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            Η <span className="text-[#67E8F9]">Web Host Pro</span> είναι μια σύγχρονη δημιουργική και τεχνική κατεύθυνση για επαγγελματίες, επιχειρήσεις και digital projects που χρειάζονται σοβαρή online παρουσία, καθαρή αισθητική, σωστή τεχνική βάση και στρατηγική ανάπτυξης.
          </p>
          <p className="mt-4 leading-8 text-white/70">
            Συνδυάζει web design, eShop λύσεις, hosting, υποστήριξη, branding, digital προβολή και οργανωμένη online εικόνα, με στόχο να προσφέρει πιο σωστή, πιο επαγγελματική και πιο ουσιαστική παρουσία στο διαδίκτυο.
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
        </div>

        <motion.div
          className="relative mt-12 overflow-hidden rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-6 md:p-8"
          animate={{
            boxShadow: [
              '0 14px 34px rgba(0,0,0,0.22)',
              '0 18px 40px rgba(212,168,79,0.14)',
              '0 14px 34px rgba(0,0,0,0.22)',
            ],
          }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(212,168,79,0.13),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(103,232,249,0.12),transparent_36%)]"
            animate={{ opacity: [0.55, 0.95, 0.55] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10 mb-8 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-amber-300/85">
              Main Services Structure
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
              Όλες οι υπηρεσίες οργανωμένες σε 4 βασικές κατηγορίες
            </h2>
            <p className="mt-4 leading-8 text-white/68">
              Ξεκάθαρη δομή υπηρεσιών για να γνωρίζεις ακριβώς πώς η <span className="text-[#67E8F9]">Web Host Pro</span> καλύπτει web, τεχνική υποδομή, προβολή και συνολική ψηφιακή εικόνα.
            </p>
          </div>

          <motion.div
            className="relative z-10 grid gap-6"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            {serviceCategories.map((category) => {
              const CategoryIcon = category.Icon
              return (
                <motion.article
                  key={category.key}
                  className="rounded-[30px] border border-white/10 bg-[#0d1828]/65 p-6 backdrop-blur-xl md:p-8"
                  variants={cardVariants}
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-[#111d31]">
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#67E8F9]/24 to-amber-300/12" />
                      <CategoryIcon size={22} strokeWidth={1.9} className="relative z-10 text-[#67E8F9]" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-amber-200/78">
                        {category.label}
                      </p>
                      <h3 className="text-2xl font-semibold text-[#67E8F9] md:text-3xl">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {category.items.map((item) => {
                      const ItemIcon = item.Icon
                      return (
                        <div
                          key={item.key}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:bg-white/[0.06] hover:shadow-[0_14px_34px_rgba(0,0,0,0.25),0_0_0_1px_rgba(103,232,249,0.1)]"
                        >
                          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-cyan-200/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#111b2b] text-[#67E8F9]">
                            <ItemIcon size={18} strokeWidth={1.8} />
                          </div>
                          <h4 className="text-xl font-semibold text-[#67E8F9]">
                            {item.title}
                          </h4>
                          <p className="mt-3 leading-7 text-white/65">
                            {item.text}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mt-16 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-7"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(103,232,249,0.12),transparent_35%),radial-gradient(circle_at_95%_100%,rgba(212,168,79,0.12),transparent_35%)]" />
          <div className="relative z-10 grid gap-5 md:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Σχεδιασμός',
              subtitle: 'Strategy Alignment',
              text: 'Καταλαβαίνουμε τον στόχο, το brand και την αγορά πριν χτιστεί η τελική παρουσία.',
            },
            {
              step: '02',
              title: 'Υλοποίηση',
              subtitle: 'Execution Layer',
              text: 'Δημιουργούμε καθαρή εμπειρία, σωστή δομή περιεχομένου και μοντέρνο UI.',
            },
            {
              step: '03',
              title: 'Υποστήριξη',
              subtitle: 'Growth Support',
              text: 'Βελτιώσεις, updates, τεχνική παρακολούθηση και επόμενο βήμα ανάπτυξης.',
            },
          ].map((item) => (
            <motion.div key={item.title} className="glass service-card rounded-[28px] p-6" variants={cardVariants}>
              <p className="text-xs uppercase tracking-[0.16em] text-amber-400/80">
                Step {item.step}
              </p>
              <p className="mt-2 text-sm text-white/45">{item.subtitle}</p>
              <h3 className="text-xl font-semibold text-[#67E8F9]">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{item.text}</p>
            </motion.div>
          ))}
          </div>
        </motion.div>

        <div className="relative mt-14 overflow-hidden rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-9">
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan-300/14 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-amber-300/14 blur-3xl" />

          <div className="section-end-block relative z-10 mt-0 rounded-none border-none bg-transparent p-0 shadow-none">
            <p className="text-xs tracking-[0.12em] text-cyan-100/75">Έτοιμος για το νέο σου project;</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#67E8F9] md:text-3xl">
              Θέλεις μια πιο οργανωμένη και επαγγελματική ψηφιακή παρουσία;
            </h2>
            <p className="mt-3 max-w-3xl text-white/65">
              Η <span className="text-[#67E8F9]">Web Host Pro</span> προσφέρει τη βάση, την αισθητική και την τεχνική υποστήριξη που χρειάζεται μια σύγχρονη επιχείρηση για να παρουσιαστεί σωστά online.
            </p>
            <div className="cta-row mt-6">
              <Link to="/contact" className="premium-btn btn btn-primary">
                Συζητήστε το project σας
              </Link>
              <Link to="/contact" className="premium-btn btn btn-secondary">
                Επικοινωνία
              </Link>
              <Link to="/contact" className="btn-inline inline-flex !border-amber-300/60 !bg-amber-300/18 !text-amber-100 !shadow-[0_10px_26px_rgba(212,168,79,0.18)] hover:!bg-amber-300/34 hover:!text-white hover:!shadow-[0_14px_30px_rgba(212,168,79,0.24)]">
                Ζήτα προσφορά <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-inline inline-flex !border-[#67E8F9]/60 !bg-[#67E8F9]/16 !text-[#67E8F9] !shadow-[0_10px_26px_rgba(103,232,249,0.18)] hover:!bg-[#67E8F9]/30 hover:!text-white hover:!shadow-[0_14px_30px_rgba(103,232,249,0.24)]">
                Πες μας την ιδέα σου <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
