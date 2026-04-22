import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  MonitorSmartphone,
  ServerCog,
  ShieldCheck,
  SearchCheck,
  Megaphone,
  Palette,
} from 'lucide-react'
import Seo from '../components/common/Seo'
import litoImage from '../../LITO.png'
import ven1Image from '../../VEN1.png'
import artImage from '../../ART.png'
import arisImage from '../../ARIS.png'
import arg2Image from '../../ARG2.png'
import timoniImage from '../../TIMONI.png'
import tt2Image from '../../tt2.png'

export default function HomePage() {
  const [previewModal, setPreviewModal] = useState({ open: false, index: 0, mode: 'live' })

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const subscriberEmail = String(formData.get('subscriberEmail') || '').trim()
    if (!subscriberEmail) return

    const recipients = 'info@webhostpro.gr,alexandros12bs@gmail.com'
    const subject = encodeURIComponent('Newsletter Signup - Web Host Pro')
    const body = encodeURIComponent(
      `Νέα εγγραφή newsletter.\n\nEmail συνδρομητή: ${subscriberEmail}\n\nSource: HomePage Newsletter`
    )

    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`
    e.currentTarget.reset()
  }

  const openPreviewModal = (index) => {
    setPreviewModal({ open: true, index, mode: 'live' })
  }

  const closePreviewModal = () => {
    setPreviewModal((prev) => ({ ...prev, open: false }))
  }

  const homeServices = [
    {
      key: 'websites-eshop',
      title: 'Ιστοσελίδες & eShop',
      text: 'Κατασκευή σύγχρονων εταιρικών ιστοσελίδων και ηλεκτρονικών καταστημάτων με premium αισθητική, καθαρή δομή, mobile-first λογική και σωστή εμπειρία χρήστη.',
      accent: 'from-cyan-300/25 to-cyan-300/5',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6 text-cyan-100" aria-hidden="true">
          <rect x="3" y="4" width="18" height="11" rx="2.3" />
          <path d="M8 20h8" />
          <path d="M12 15v5" />
          <path d="M6.2 11.2h11.6" />
          <path d="M8.4 8.2h7.2" />
          <circle cx="17.2" cy="18.2" r="2.1" />
          <path d="M15 16.1h-1.4l-.6-1.3H9" />
        </svg>
      ),
    },
    {
      key: 'hosting-domain-ssl',
      title: 'Hosting, Domains, SSL & Μεταφορές',
      text: 'Φιλοξενία ιστοσελίδων, κατοχύρωση domain, πιστοποιητικά SSL και μεταφορά website με τεχνική σταθερότητα και σωστή βάση για την online λειτουργία της επιχείρησής σου.',
      accent: 'from-amber-300/25 to-amber-300/5',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6 text-amber-100" aria-hidden="true">
          <ellipse cx="8" cy="6.2" rx="4.5" ry="2.2" />
          <path d="M3.5 6.2v4.4C3.5 11.8 5.5 13 8 13s4.5-1.2 4.5-2.4V6.2" />
          <path d="M3.5 10.6v4.4C3.5 16.2 5.5 17.4 8 17.4s4.5-1.2 4.5-2.4v-4.4" />
          <circle cx="16.9" cy="8.6" r="3.3" />
          <path d="M13.6 8.6h6.6" />
          <path d="M16.9 5.3c1 1 .9 4.2 0 6.6" />
          <path d="M20.7 16.9l-3.8 3.1-3.8-3.1V13.8l3.8-1.5 3.8 1.5v3.1Z" />
          <path d="m15.5 16.9 1 1.1 2-2.3" />
        </svg>
      ),
    },
    {
      key: 'support-security-performance',
      title: 'Τεχνική Υποστήριξη, Security & Performance',
      text: 'Συντήρηση, updates, βελτιστοποιήσεις ταχύτητας, βασική προστασία, monitoring και πρακτική τεχνική υποστήριξη για ασφαλή και σταθερή καθημερινή λειτουργία.',
      accent: 'from-cyan-300/25 to-amber-300/10',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6 text-cyan-100" aria-hidden="true">
          <path d="m4 14 3.5-3.5 2.3 2.3 4.6-4.6" />
          <path d="M16.8 7.4h2.9v2.9" />
          <path d="M5.7 19.4h5.6" />
          <path d="M8.5 16.6v2.8" />
          <path d="m10.8 7.5 1.3-2.3 2.6 1.5-1.3 2.3" />
          <path d="m9.8 9.3 2.6 1.5" />
          <path d="M17.4 20.2s3.1-1.6 3.1-3.9v-3.1l-3.1-1.2-3.1 1.2v3.1c0 2.3 3.1 3.9 3.1 3.9Z" />
        </svg>
      ),
    },
    {
      key: 'seo-google-presence',
      title: 'SEO, Google SEO & Online Παρουσία',
      text: 'Βελτιστοποίηση δομής και περιεχομένου για καλύτερη εικόνα στη Google, local SEO κατεύθυνση, σωστή ψηφιακή οργάνωση και πιο δυνατή online παρουσία.',
      accent: 'from-cyan-200/20 to-cyan-300/5',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6 text-cyan-100" aria-hidden="true">
          <circle cx="9" cy="9" r="4.6" />
          <path d="m12.5 12.5 3.5 3.5" />
          <path d="M4 18.5h6" />
          <path d="M4 15.5h4" />
          <path d="m14.8 18.7 2.1-2.1 1.7 1.7 3.2-3.2" />
          <circle cx="20.3" cy="8.2" r="2.4" />
          <circle cx="20.3" cy="8.2" r="0.9" />
        </svg>
      ),
    },
    {
      key: 'marketing-campaigns-content',
      title: 'Digital Marketing, Campaigns & Content Creation',
      text: 'Σχεδιασμός digital καμπανιών, δημιουργία περιεχομένου και προωθητικές ενέργειες με εμπορική και δημιουργική κατεύθυνση για ανάπτυξη προβολής και αποτελέσματος.',
      accent: 'from-amber-300/20 to-cyan-200/10',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6 text-amber-100" aria-hidden="true">
          <path d="M4 12.4V9.1l9.2-3.1v11L4 13.9v-1.5Z" />
          <path d="M13.2 8.2h2.3a2.6 2.6 0 0 1 2.6 2.6v1.4" />
          <path d="m6.4 14.8 1.3 3.4h2.6l-1.2-4" />
          <path d="M17.2 6.2 18 4.6l.8 1.6 1.7.8-1.7.8-.8 1.6-.8-1.6-1.7-.8 1.7-.8Z" />
          <rect x="14.2" y="13.8" width="6.3" height="5.1" rx="1.1" />
          <path d="M15.6 15.9h3.5" />
          <path d="M15.6 17.3h2.2" />
        </svg>
      ),
    },
    {
      key: 'social-branding-design',
      title: 'Social Media, Branding & Design',
      text: 'Διαχείριση εικόνας στα social media, οπτική ταυτότητα, δημιουργικά, παρουσιάσεις και ενιαία επαγγελματική αισθητική για web και digital παρουσία.',
      accent: 'from-cyan-200/20 to-amber-300/10',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6 text-cyan-100" aria-hidden="true">
          <path d="M4.6 15.8a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
          <path d="M18.9 7.8a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
          <path d="M19.7 20.6a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
          <path d="m6.6 12.4 10.1-5.2" />
          <path d="m6.6 14.4 10.9 3.1" />
          <path d="m10.1 19.2 6.5-12" />
          <path d="m10.6 6.1 5.3 5.3-6.6 2.5 1.3-7.8Z" />
        </svg>
      ),
    },
  ]

  const homeServicesLucide = [
    {
      key: 'lucide-websites-eshop',
      Icon: MonitorSmartphone,
      smallLabel: 'Web Development',
      title: 'Websites & eShop',
      text: 'Σύγχρονες ιστοσελίδες και online καταστήματα με premium αισθητική, σωστή δομή, mobile-first λογική και επαγγελματική βάση ανάπτυξης.',
      cta: 'Δες λύσεις web & eShop',
      accentClass: 'text-[#67E8F9]',
      gradientClass: 'from-[#67E8F9]/25 to-[#67E8F9]/5',
    },
    {
      key: 'lucide-hosting-domains-ssl',
      Icon: ServerCog,
      smallLabel: 'Hosting Infrastructure',
      title: 'Hosting, Domains & SSL',
      text: 'Φιλοξενία ιστοσελίδων, domain names, SSL πιστοποιητικά και μεταφορές website με σταθερότητα, ασφάλεια και τεχνική αξιοπιστία.',
      cta: 'Δες υπηρεσίες φιλοξενίας',
      accentClass: 'text-[#67E8F9]',
      gradientClass: 'from-[#67E8F9]/25 to-[#67E8F9]/5',
    },
    {
      key: 'lucide-support-security-performance',
      Icon: ShieldCheck,
      smallLabel: 'Technical Care',
      title: 'Support, Security & Performance',
      text: 'Συντήρηση, updates, monitoring, βασική προστασία και βελτιστοποιήσεις για ταχύτητα, ασφάλεια και ομαλή καθημερινή λειτουργία.',
      cta: 'Δες τεχνική υποστήριξη',
      accentClass: 'text-[#67E8F9]',
      gradientClass: 'from-[#67E8F9]/25 to-[#67E8F9]/5',
    },
    {
      key: 'lucide-seo-google-presence',
      Icon: SearchCheck,
      smallLabel: 'Visibility & Structure',
      title: 'SEO & Google Presence',
      text: 'SEO βελτιστοποίηση, Google SEO, local στόχευση και σωστή δομή περιεχομένου για καλύτερη προβολή και ισχυρότερη online παρουσία.',
      cta: 'Δες στρατηγική SEO',
      accentClass: 'text-[#67E8F9]',
      gradientClass: 'from-[#67E8F9]/25 to-[#67E8F9]/5',
    },
    {
      key: 'lucide-campaigns-content',
      Icon: Megaphone,
      smallLabel: 'Digital Promotion',
      title: 'Campaigns & Content Creation',
      text: 'Δημιουργία καμπανιών, εμπορική κατεύθυνση και παραγωγή περιεχομένου που βοηθά την επιχείρηση να προβάλλεται σωστά και να ξεχωρίζει.',
      cta: 'Δες προωθητικές λύσεις',
      accentClass: 'text-[#67E8F9]',
      gradientClass: 'from-[#67E8F9]/25 to-[#67E8F9]/5',
    },
    {
      key: 'lucide-social-branding-design',
      Icon: Palette,
      smallLabel: 'Brand Identity',
      title: 'Social Media, Branding & Design',
      text: 'Οπτική ταυτότητα, δημιουργικά, social media υλικό και ενιαία επαγγελματική εικόνα για web, social και συνολική ψηφιακή παρουσία.',
      cta: 'Δες branding & design',
      accentClass: 'text-[#67E8F9]',
      gradientClass: 'from-[#67E8F9]/25 to-[#67E8F9]/5',
    },
  ]

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

  const ecosystemPreviewCards = [
    {
      title: 'DiscoverDiakopto.gr',
      category: 'FLAGSHIP PROJECT',
      text: 'Ψηφιακός οδηγός περιοχής με έμφαση σε εμπειρίες, τοπική ταυτότητα, ιστορία και αυθεντική εικόνα.',
      cta: 'Δες το έργο',
      previewType: 'image',
      imageSrc: '/images/ecosystem/discoverdiakopto-preview.jpg',
      iframeSrc: 'https://discoverdiakopto.gr',
    },
    {
      title: 'Odontotos.gr',
      category: 'FLAGSHIP PROJECT',
      text: 'Θεματική προβολή διαδρομής, εμπειρίας και πολιτιστικού ενδιαφέροντος με σύγχρονη ψηφιακή παρουσίαση.',
      cta: 'Δες το έργο',
      previewType: 'image',
      imageSrc: '/images/ecosystem/odontotos-preview.jpg',
      iframeSrc: 'https://odontotos.gr',
    },
    {
      title: 'Vouraikos.gr',
      category: 'FLAGSHIP PROJECT',
      text: 'Μια θεματική ψηφιακή παρουσία για το φαράγγι, τα μονοπάτια, τα φυσικά τοπία, την εμπειρία του επισκέπτη και την τουριστική ταυτότητα της περιοχής.',
      cta: 'Δες το έργο',
      previewType: 'image',
      imageSrc: '/images/ecosystem/vouraikos-preview.jpg',
      iframeSrc: 'https://vouraikos.gr',
    },
  ]

  const activePreviewCard = ecosystemPreviewCards[previewModal.index] || ecosystemPreviewCards[0]

  const setPreviewMode = (mode) => {
    setPreviewModal((prev) => ({ ...prev, mode }))
  }

  const stepPreview = (direction) => {
    setPreviewModal((prev) => ({
      ...prev,
      index: (prev.index + direction + ecosystemPreviewCards.length) % ecosystemPreviewCards.length,
      mode: 'live',
    }))
  }

  const portfolioPlaceholderCards = [
    {
      title: 'Lito Apartments | Παλαιοχώρα Χανίων',
      category: 'Hotel & Apartments Project',
      text: 'Premium παρουσίαση καταλύματος για την Παλαιοχώρα Χανίων, με έμφαση στην ποιοτική διαμονή, το μοναδικό πλεονέκτημα της τοποθεσίας, τις σύγχρονες παροχές και την άμεση ευκολία κράτησης μέσα από μια καθαρή, καλαίσθητη τουριστική εμπειρία.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: 'Signature Preview',
      imageSrc: litoImage,
      iframeSrc: 'https://discoverdiakopto.gr',
      projectUrl: 'https://discoverdiakopto.gr',
      isFeatured: true,
    },
    {
      title: 'Web Host Pro | Αιγιαλεία',
      category: 'Web Agency Showcase',
      text: 'Η Web Host Pro στην Αιγιαλεία παρουσιάζει ένα σύγχρονο και επαγγελματικό πλαίσιο ψηφιακών υπηρεσιών, με έμφαση στην κατασκευή ιστοσελίδων, το web hosting, το SEO και το digital marketing.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: 'Signature Preview',
      imageSrc: ven1Image,
      iframeSrc: '',
      isFeatured: true,
    },
    {
      title: '7 Day Nervous System Reset for Dogs',
      category: 'Canine Behavior & Wellness Program',
      text: 'Ένα reset του νευρικού συστήματος για αντιδραστικούς, υπερφορτωμένους σκύλους. Το «7 Day Nervous System Reset for Dogs» εξηγεί γιατί το στρες έχει μεγαλύτερη σημασία από την εκπαίδευση και σου δίνει έναν πρακτικό επταήμερο ρυθμό για να μειώσεις τα ερεθίσματα, να προστατεύσεις την αποκατάσταση και να κατανοήσεις τη συμπεριφορά νωρίτερα.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: 'Visual Showcase',
      imageSrc: artImage,
      iframeSrc: '',
      isFeatured: false,
    },
    {
      title: 'Honeymoon Hotel Santorini',
      category: 'Hotel Showcase Project',
      text: 'Premium hotel παρουσίαση με έμφαση στα δωμάτια, τις παροχές και την εμπειρία φιλοξενίας, με καθαρή δομή, elegant αισθητική και conversion-first προσέγγιση.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: 'Project Placeholder',
      imageSrc: arisImage,
      iframeSrc: '',
      isFeatured: true,
    },
    {
      title: 'Εργαστήρι Ζυμαρικών Διακοπτό',
      category: 'eShop Handmade Pasta Project',
      text: 'Premium eShop για χειροποίητα ζυμαρικά με έμφαση στη γαστρονομική ταυτότητα, την καθαρή παρουσίαση προϊόντων, την εύκολη αγορά και μια ζεστή artisan αισθητική.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: 'Signature Preview',
      imageSrc: arg2Image,
      iframeSrc: '',
      isFeatured: false,
    },
    {
      title: 'Online Βιβλιοπωλείο Διακοπτό',
      category: 'eBooks, Audio & Self-Growth Platform',
      text: 'The Steering Wheel of Our Lives - Finally in Our Hands. Μια σύγχρονη online πλατφόρμα με ebooks, audio περιεχόμενο και επιλεγμένα άρθρα αυτοβελτίωσης, αυτοθεραπείας και αφύπνισης, σχεδιασμένη για όσου...',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: 'Signature Preview',
      imageSrc: timoniImage,
      iframeSrc: '',
      isFeatured: false,
    },
    {
      title: 'Premium Business Presence',
      category: 'Strategic Identity Presence',
      text: 'Digital concept για brands που χρειάζονται ισχυρότερη online εικόνα, καλύτερη παρουσίαση υπηρεσιών και μια πιο ώριμη ψηφιακή ταυτότητα.',
      cta: 'Δες το έργο',
      previewType: 'iframe',
      previewLabel: 'Live Preview Area',
      imageSrc: '',
      iframeSrc: '',
      isFeatured: true,
    },
    {
      title: 'Harmony Books | Πλατφόρμα Βιβλίων & Άρθρων',
      category: 'Books Marketplace & Editorial Content',
      text: 'Πλατφόρμα για πώληση βιβλίων από διαφορετικούς συγγραφείς, με οργανωμένες κατηγορίες, έξυπνη αναζήτηση και εύκολη εμπειρία αγοράς. Παράλληλα, ενσωματώνει αρθρογραφία και θεματικές ενότητες γύρω από λογοτεχνία, κουλτούρα και κοινωνία, με ξεκάθαρη κατεύθυνση περιεχομένου εκτός πολιτικής θεματολογίας. Ιδιαίτερη έμφαση δίνεται σε βιβλία για αυτοθεραπεία, σύνδεση με τη φύση, πνευματική αφύπνιση και οικολογία, δημιουργώντας μια ουσιαστική βιβλιοθήκη προσωπικής εξέλιξης και οικολογικής συνείδησης.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: '',
      imageSrc: tt2Image,
      iframeSrc: '',
      isFeatured: false,
    },
    {
      title: 'Art Addicts | Portfolio & Community Platform',
      category: 'Portfolio & Community Platform',
      text: 'Το Art Addicts είναι μια ανοιχτή, σύγχρονη πλατφόρμα portfolio και περιεχομένου αφιερωμένη στη ζωγραφική, τη μουσική, την ποίηση και συνολικά σε όλες τις μορφές τέχνης που καλλιεργούν έκφραση και σύνδεση. Το project συνδυάζει δημιουργικά έργα, επιλεγμένη αρθρογραφία, θεματικές ψυχολογίας και πολιτιστικά insights, προσφέροντας έναν ζωντανό ψηφιακό χώρο όπου το κοινό μπορεί να ανακαλύπτει ιδέες, να έρχεται σε επαφή με δημιουργούς και να συμμετέχει ενεργά σε μια κοινότητα έμπνευσης. Με καθαρή δομή, φιλικό UX και ατμοσφαιρική αισθητική, η πλατφόρμα λειτουργεί ως σημείο συνάντησης τέχνης, σκέψης και ανθρώπινης έκφρασης.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: '',
      imageSrc: '',
      iframeSrc: '',
      isFeatured: false,
    },
    {
      title: 'Service Presentation Systems',
      category: 'High-Clarity Business Communication',
      text: 'Premium placeholder για παρουσίαση υπηρεσιών, offers και business πληροφοριών με καθαρή δομή, στρατηγικό UX και πιο πειστική επαγγελματική εικόνα.',
      cta: 'Δες το έργο',
      previewType: 'iframe',
      previewLabel: 'Live Preview Area',
      imageSrc: '',
      iframeSrc: '',
      isFeatured: false,
    },
    {
      title: 'Local Brand Identity Projects',
      category: 'Identity & Visual Presence',
      text: 'Placeholder concept για brands που χρειάζονται πιο δυνατή αναγνωρισιμότητα, αισθητική συνέπεια και πιο ολοκληρωμένη ψηφιακή παρουσία.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: 'Signature Preview',
      imageSrc: '',
      iframeSrc: '',
      isFeatured: false,
    },
    {
      title: 'Digital Experience Concepts',
      category: 'Visual & Interactive Signature Concepts',
      text: 'Curated placeholder για projects που συνδυάζουν design, περιεχόμενο, εμπειρία χρήστη και οπτική καθαρότητα σε πιο σύγχρονα digital περιβάλλοντα.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: 'Visual Showcase',
      imageSrc: '',
      iframeSrc: '',
      isFeatured: true,
    },
    {
      title: 'Coming Soon',
      category: 'New Project',
      text: 'Placeholder για νέο project. Σύντομα εδώ.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: '',
      imageSrc: '',
      iframeSrc: '',
      isFeatured: false,
    },
    {
      title: 'Coming Soon',
      category: 'New Project',
      text: 'Placeholder για νέο project. Σύντομα εδώ.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: '',
      imageSrc: '',
      iframeSrc: '',
      isFeatured: false,
    },
    {
      title: 'Coming Soon',
      category: 'New Project',
      text: 'Placeholder για νέο project. Σύντομα εδώ.',
      cta: 'Δες το έργο',
      previewType: 'image',
      previewLabel: '',
      imageSrc: '',
      iframeSrc: '',
      isFeatured: false,
    },
  ]

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
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr]">
            <motion.div {...fadeUp} className="w-full md:mt-[5rem]">
              <span className="badge-gold">
                Web Host Pro Aigialeia
              </span>

              <h1 className="mt-6 max-w-5xl text-3xl font-semibold leading-[1.14] tracking-[0.01em] text-[#67E8F9] md:text-5xl md:leading-[1.12]">
                Websites, digital strategy και σύγχρονες λύσεις για σοβαρή online παρουσία.
              </h1>

              <p className="mt-7 max-w-xl text-xl leading-9 text-white/70">
                Κατασκευάζουμε ιστοσελίδες και eShop με αισθητική, λειτουργικότητα και στρατηγική, ώστε κάθε brand να αποκτά σωστή και δυνατή ψηφιακή παρουσία. Με hosting, τεχνική υποστήριξη, branding και ολοκληρωμένες digital λύσεις, βοηθάμε επαγγελματίες, επιχειρήσεις και δημιουργικά projects να χτίσουν μια σύγχρονη και αποτελεσματική online ταυτότητα.
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

            <div className="mt-[2rem] flex w-full flex-col gap-6 self-start md:-mt-8 md:ml-auto md:max-w-[34rem]">
              {/* Animated Logo — Orbit Particles */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{
                  opacity: 1, scale: 1, y: 0,
                  boxShadow: [
                    '0 0 40px rgba(212,168,79,0.05)',
                    '0 0 60px rgba(110,198,255,0.12)',
                    '0 0 40px rgba(212,168,79,0.05)',
                  ]
                }}
                transition={{
                  opacity: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
                  scale: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
                  y: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
                  boxShadow: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="relative flex w-full items-center justify-center self-center rounded-full md:max-w-[32rem]" style={{ minHeight: '340px' }}
              >
                {/* Orbit ring 1 — gold */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '1.5px solid rgba(212,168,79,0.2)',
                    boxShadow: '0 0 20px rgba(212,168,79,0.1)',
                    margin: '-8%',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                >
                  <div style={{
                    position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
                    width: 10, height: 10, borderRadius: '50%',
                    background: '#D4A84F', boxShadow: '0 0 14px rgba(212,168,79,0.8)',
                  }} />
                </motion.div>

                {/* Orbit ring 2 — cyan, reverse */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '1px solid rgba(110,198,255,0.15)',
                    boxShadow: '0 0 15px rgba(110,198,255,0.08)',
                    margin: '-14%',
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                >
                  <div style={{
                    position: 'absolute', top: '50%', right: 0, transform: 'translate(50%, -50%)',
                    width: 7, height: 7, borderRadius: '50%',
                    background: '#6EC6FF', boxShadow: '0 0 12px rgba(110,198,255,0.8)',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 50%)',
                    width: 5, height: 5, borderRadius: '50%',
                    background: '#a5f3fc', boxShadow: '0 0 10px rgba(165,243,252,0.7)',
                  }} />
                </motion.div>

                {/* Logo */}
                <motion.img
                  src="/images/logo.webp"
                  alt="Web Host Pro"
                  width="600"
                  height="600"
                  fetchpriority="high"
                  decoding="async"
                  className="w-full relative z-10"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(212,168,79,0.25))' }}
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.03, 1],
                    filter: [
                      'drop-shadow(0 0 25px rgba(212,168,79,0.2))',
                      'drop-shadow(0 0 50px rgba(212,168,79,0.5))',
                      'drop-shadow(0 0 25px rgba(212,168,79,0.2))',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>

              {/* Right panel */}
              <motion.div
              {...fadeUp}
              className="glass-strong page-glow relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:-mt-14"
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,143,255,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,194,168,0.15),transparent_28%)] opacity-80"
              />
              <div className="soft-grid absolute inset-0 opacity-40" />
              <div className="relative grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/6 p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-white">
                    Digital Solutions
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-[#67E8F9]">
                    Web Development, Hosting, Brand Strategy
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Σχεδιάζουμε και χτίζουμε επαγγελματική ψηφιακή παρουσία με λειτουργικότητα, συνέπεια και καθαρό design.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white">Premium Experience</p>
                    <p className="mt-2 text-lg font-medium text-[#67E8F9]">Καθαρό interface, δυνατή ταυτότητα</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white">Digital Achaia</p>
                    <p className="mt-2 text-lg font-medium text-[#67E8F9]">Local vision, digital execution</p>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-0">
        <div className="container-main relative overflow-hidden rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-6 backdrop-blur-xl md:p-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-amber-300/85">
                Υπηρεσίες
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
                Ο βασικός πυρήνας της Web Host Pro
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-white/65">
                Σύγχρονες ψηφιακές λύσεις για επιχειρήσεις, επαγγελματίες και brands που θέλουν πιο καθαρή εικόνα, καλύτερη λειτουργία και σοβαρή online παρουσία.
              </p>
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
              <motion.div
                className="relative z-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
                variants={gridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {homeServicesLucide.map((service) => {
                  const Icon = service.Icon
                  return (
                    <motion.article
                      key={`alt2-${service.key}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1828]/68 p-6 shadow-[0_14px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/25"
                      variants={cardVariants}
                    >
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-amber-200/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                      <div className="pointer-events-none absolute -left-8 -top-7 h-20 w-20 rounded-full bg-cyan-300/12 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />

                      <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-[#111d31]">
                        <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradientClass} opacity-95`} />
                        <Icon size={22} strokeWidth={1.9} className={`relative z-10 ${service.accentClass}`} />
                      </div>

                      <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-white">
                        {service.smallLabel}
                      </p>
                      <h4 className="mt-2 text-xl font-semibold leading-8 text-[#67E8F9]">
                        {service.title}
                      </h4>
                      <p className="mt-3 leading-7 text-white/65">
                        {service.text}
                      </p>

                      <span className="inline-cta mt-auto ml-auto pt-6 text-right text-amber-100 group-hover:text-[#67E8F9]">
                        {service.cta} <ArrowRight size={14} />
                      </span>
                    </motion.article>
                  )
                })}
              </motion.div>

              <div className="relative z-10 mt-8 flex flex-wrap justify-end gap-3">
                <Link to="/services" className="btn-inline inline-flex !border-[#67E8F9]/60 !bg-[#67E8F9]/16 !text-[#67E8F9] hover:!bg-[#67E8F9]/30 hover:!text-white">
                  Δείτε όλες τις υπηρεσίες <ArrowRight size={14} />
                </Link>
                <Link to="/contact" className="btn-inline inline-flex !border-amber-300/60 !bg-amber-300/18 !text-amber-100 hover:!bg-amber-300/34 hover:!text-white">
                  Συζητήστε το project σας <ArrowRight size={14} />
                </Link>
                <Link to="/projects" className="btn-inline inline-flex !border-white/28 !bg-white/8 !text-white/88 hover:!border-[#67E8F9]/55 hover:!bg-[#67E8F9]/12 hover:!text-[#67E8F9]">
                  Δες τα έργα <ArrowRight size={14} />
                </Link>
              </div>
          </motion.div>
        </div>
      </section>

      <section className="section-space section-divider pt-0">
        <div className="container-main">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.18em] text-amber-200/80">
              Portfolio Highlights
            </p>
            <h2 className="mt-3 max-w-5xl text-3xl font-semibold leading-tight text-[#67E8F9] md:text-4xl">
              Signature έργα, curated concepts και premium ψηφιακές κατευθύνσεις
            </h2>
            <p className="mt-4 max-w-5xl leading-8 text-white/65">
              Μια επιλεγμένη σύνθεση από digital έργα, visual concepts και στρατηγικές κατευθύνσεις που αποτυπώνουν τη φιλοσοφία, την αισθητική και το δημιουργικό αποτύπωμα της Web Host Pro. Η ενότητα αυτή λειτουργεί ως curated showcase υψηλής αισθητικής, παρουσιάζοντας business παρουσίες, destination concepts, thematic projects και premium digital directions με σύγχρονη δομή, οπτική συνέπεια και ουσιαστική ταυτότητα.
            </p>
          </div>

          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {portfolioPlaceholderCards.slice(0, 6).map((card, index) => (
              <motion.div
                key={card.title}
                className={`glass service-card group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[26px] border p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_42px_rgba(6,14,26,0.44)] ${card.isFeatured ? 'border-amber-300/24 bg-white/[0.05] hover:border-amber-200/46' : 'border-white/10 bg-white/[0.04] hover:border-cyan-200/28'}`}
                variants={cardVariants}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-200/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-amber-300/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

                {card.previewType === 'iframe' ? (
                  <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl border border-cyan-200/18 bg-gradient-to-br from-cyan-300/12 via-white/5 to-amber-300/8">
                    <div className="absolute inset-3 rounded-xl border border-cyan-200/20 bg-[#0b1525]/75" />
                  </div>
                ) : (
                  <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-amber-300/12 via-white/5 to-cyan-300/10">
                    {card.imageSrc ? (
                      <img
                        src={card.imageSrc}
                        alt={`${card.title} preview`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : null}
                    <div className="absolute inset-0 opacity-40 [background:linear-gradient(140deg,rgba(255,255,255,0.08),transparent_60%)]" />
                    <div className="absolute inset-2 rounded-xl border border-white/10 bg-white/[0.02] shadow-[inset_0_0_26px_rgba(103,232,249,0.08)]" />
                  </div>
                )}

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/90">
                  {card.category}
                </p>
                <h3 className="mt-3 text-[1.45rem] font-semibold leading-8 text-[#67E8F9]">
                  {card.title}
                </h3>
                <p className="mt-4 leading-7 text-white/65">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="glass mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/[0.03] p-4 md:p-5">
            <p className="text-sm text-white/60">
              Curated portfolio preview by Web Host Pro
            </p>
            <div className="flex flex-wrap gap-3">
            <Link to="/projects" className="btn-inline inline-flex !border-[#67E8F9]/55 !bg-[#67E8F9]/14 !text-[#67E8F9] hover:!bg-[#67E8F9]/28 hover:!text-white">
              Δείτε όλα τα έργα <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-inline inline-flex !border-amber-300/55 !bg-amber-300/16 !text-amber-100 hover:!bg-amber-300/30 hover:!text-white">
              Συζητήστε το project σας <ArrowRight size={14} />
            </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-0">
        <div className="container-main">
          <div className="relative overflow-hidden rounded-[30px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-7 backdrop-blur-xl md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-amber-300/85">
                  Digital Achaia
                </p>
                <h2 className="mt-3 max-w-4xl text-2xl font-semibold text-[#67E8F9] md:text-3xl">
                  Η δημιουργική κατεύθυνση της Web Host Pro για τόπους, πολιτισμό και τοπικά projects
                </h2>
                <p className="mt-4 leading-8 text-white/68">
                  Η Digital Achaia εστιάζει στην ανάδειξη περιοχών, εμπειριών, πολιτιστικών στοιχείων, local brands και θεματικών διαδρομών μέσα από σύγχρονη ψηφιακή ταυτότητα και σοβαρή παρουσίαση.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Place branding & ταυτότητα περιοχών',
                  'Τουριστική προβολή και ψηφιακή αφήγηση',
                  'Θεματικοί οδηγοί και πολιτιστικές διαδρομές',
                  'Συνεργασίες με τοπικά brands και πρωτοβουλίες',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="mt-6 grid gap-5 md:grid-cols-3"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {ecosystemPreviewCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  className="glass service-card group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25"
                  variants={cardVariants}
                >
                  <p className="inline-flex w-fit rounded-full border border-amber-300/40 bg-amber-300/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-100/88">
                    {card.category}
                  </p>
                  <h3 className="mt-3 text-[2rem] font-semibold leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 min-h-[6.4rem] leading-7 text-white/68 md:min-h-[8rem]">
                    {card.text}
                  </p>

                  {card.previewType === 'iframe' ? (
                    <div className="relative mb-4 mt-4 aspect-[16/10] overflow-hidden rounded-2xl border border-cyan-200/18 bg-[#0b1525]">
                      <iframe
                        src={card.iframeSrc}
                        title={`${card.title} preview`}
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  ) : (
                    <div className="relative mb-4 mt-4 aspect-[16/10] overflow-hidden rounded-2xl border border-white/12 bg-[#0b1525]">
                      <img
                        src={card.imageSrc}
                        alt={`${card.title} screenshot`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="mt-auto flex items-center gap-2 pt-2">
                    <a
                      href={card.iframeSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-amber-300/55 bg-amber-300/16 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/28 hover:text-white"
                    >
                      Δείτε το site
                    </a>
                    <button
                      type="button"
                      onClick={() => openPreviewModal(idx)}
                      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#67E8F9]/60 bg-[#67E8F9]/16 px-4 py-2 text-sm font-semibold text-[#67E8F9] transition hover:bg-[#67E8F9]/28 hover:text-white"
                    >
                      Προεπισκόπηση
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-7 flex flex-wrap justify-end gap-3">
              <Link to="/digital-achaia" className="btn-inline inline-flex !border-[#67E8F9]/60 !bg-[#67E8F9]/16 !text-[#67E8F9] hover:!bg-[#67E8F9]/30 hover:!text-white">
                Δείτε την Digital Achaia <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-inline inline-flex !border-amber-300/60 !bg-amber-300/18 !text-amber-100 hover:!bg-amber-300/34 hover:!text-white">
                Συζητήστε ένα project <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-0">
        <div className="container-main">
          <div className="relative overflow-hidden rounded-[32px] border border-amber-300/12 bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-8 backdrop-blur-xl md:p-12">
            <div className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-amber-300/14 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-cyan-300/14 blur-3xl" />

            <div className="relative mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-amber-300/85">
                Newsletter
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-[#67E8F9] md:text-4xl">
                Μείνετε ενημερωμένοι
              </h3>
              <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
                Νέα, ιδέες, digital tips και ενημερώσεις για websites, eShop, hosting, branding και σύγχρονη online παρουσία από τη Web Host Pro.
              </p>

              <form className="mx-auto mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  name="subscriberEmail"
                  required
                  placeholder="Το email σας"
                  className="focus-ring w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-white placeholder:text-white/40"
                />
                <button type="submit" className="premium-btn btn btn-primary sm:w-auto">
                  Εγγραφή
                </button>
              </form>

              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/55">
                Κάντε εγγραφή για updates, ιδέες και νέα γύρω από web, branding και digital παρουσία.
              </p>
            </div>

            <div className="relative mx-auto mt-10 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-[#67E8F9] md:text-4xl">
                Θέλεις μια πιο σοβαρή και σύγχρονη ψηφιακή παρουσία;
              </h2>
              <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/70">
                Η Web Host Pro δημιουργεί websites, eShop, hosting υποδομή, branding και στρατηγική ψηφιακής παρουσίας για επιχειρήσεις, επαγγελματίες και projects που θέλουν πιο καθαρή εικόνα και σωστή online βάση ανάπτυξης.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="premium-btn btn btn-primary">
                  Συζητήστε το project σας
                </Link>
                <Link to="/services" className="premium-btn btn btn-secondary">
                  Δείτε υπηρεσίες
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {previewModal.open && activePreviewCard && (
        <div
          className="fixed inset-0 z-[2200] flex items-center justify-center bg-[#040914]/82 p-4 backdrop-blur-md"
          onClick={closePreviewModal}
          role="presentation"
        >
          <div
            className="flex h-[65vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-cyan-200/24 bg-[#071221] shadow-[0_30px_100px_rgba(0,0,0,0.6)] md:h-[70vh]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Προεπισκόπηση ${activePreviewCard.title}`}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-6">
              <p className="text-sm font-semibold text-white/92">
                {activePreviewCard.title}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewMode('live')}
                  className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-[11px] font-semibold transition ${previewModal.mode === 'live' ? 'border-cyan-300/45 bg-cyan-300/16 text-cyan-100' : 'border-white/20 bg-white/[0.04] text-white/80 hover:bg-white/[0.12]'}`}
                >
                  Live
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewMode('screenshot')}
                  className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-[11px] font-semibold transition ${previewModal.mode === 'screenshot' ? 'border-cyan-300/45 bg-cyan-300/16 text-cyan-100' : 'border-white/20 bg-white/[0.04] text-white/80 hover:bg-white/[0.12]'}`}
                >
                  Screenshot
                </button>
                <button
                  type="button"
                  onClick={closePreviewModal}
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-[11px] font-semibold text-white/90 transition hover:bg-white/[0.12]"
                  aria-label="Κλείσιμο προεπισκόπησης"
                >
                  X
                </button>
              </div>
            </div>
            <div className="h-full min-h-[60vh] w-full bg-[#091427]">
              {previewModal.mode === 'live' ? (
                <iframe
                  src={activePreviewCard.iframeSrc}
                  title={`Iframe preview ${activePreviewCard.title}`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <img
                  src={activePreviewCard.imageSrc}
                  alt={`${activePreviewCard.title} screenshot`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              )}
            </div>
            <div className="flex items-center gap-2 border-t border-white/10 px-4 py-2 md:px-6">
              <button
                type="button"
                onClick={() => stepPreview(-1)}
                className="inline-flex items-center justify-center rounded-full border border-white/22 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/88 transition hover:bg-white/[0.11]"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => stepPreview(1)}
                className="inline-flex items-center justify-center rounded-full border border-white/22 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/88 transition hover:bg-white/[0.11]"
              >
                Next
              </button>
              <a
                href={activePreviewCard.iframeSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-amber-300/45 bg-amber-300/16 px-4 py-1.5 text-xs font-semibold text-amber-100 transition hover:bg-amber-300/28"
              >
                Δείτε το site
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
