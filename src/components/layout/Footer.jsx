import { Link } from 'react-router-dom'
import { Mail, Globe, Phone, ArrowRight, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10 bg-slate-950/55">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />
      <div className="container-main py-16">
        <div className="section-end-block mb-10">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/75">Ready to Launch</p>
          <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
            Σύγχρονες ψηφιακές λύσεις για επιχειρήσεις, brands και projects
          </h3>
          <p className="mt-3 max-w-3xl text-white/65">
            Από websites και eShop μέχρι hosting, στρατηγική παρουσίαση και Digital Achaia initiatives,
            οργανώνουμε το επόμενο βήμα με καθαρή κατεύθυνση.
          </p>
          <div className="cta-row mt-6">
            <Link to="/contact" className="premium-btn btn btn-primary">
              Ξεκινήστε συνεργασία
            </Link>
            <Link to="/projects" className="premium-btn btn btn-secondary">
              Δείτε έργα
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-4">
            <h3 className="text-lg font-semibold tracking-tight">Web Host Pro</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">
              Κύριο brand για websites, eShop, hosting, technical support,
              branding και στρατηγική ψηφιακής παρουσίας.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-white/45">
              Digital Achaia powered by Web Host Pro
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Σελίδες</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/65">
              <Link className="footer-link icon-text" to="/"><Globe size={13} />Αρχική</Link>
              <Link className="footer-link icon-text" to="/services"><ArrowRight size={13} />Υπηρεσίες</Link>
              <Link className="footer-link icon-text" to="/digital-achaia"><MapPin size={13} />Digital Achaia</Link>
              <Link className="footer-link icon-text" to="/projects"><ArrowRight size={13} />Έργα</Link>
              <Link className="footer-link icon-text" to="/contact"><Mail size={13} />Επικοινωνία</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Core Services</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/65">
              <span className="icon-text"><ArrowRight size={13} />Ιστοσελίδες & εταιρική παρουσία</span>
              <span className="icon-text"><ArrowRight size={13} />eShop & conversion structure</span>
              <span className="icon-text"><ArrowRight size={13} />Hosting & technical support</span>
              <span className="icon-text"><ArrowRight size={13} />Branding & digital strategy</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Contact & Social</h4>
            <div className="mt-3 flex flex-col gap-3 text-sm text-white/65">
              <a href="mailto:info@webhostpro.gr" className="footer-link icon-text">
                <Mail size={13} />info@webhostpro.gr
              </a>
              <span className="icon-text text-white/50">
                <MapPin size={13} />Αχαΐα, Ελλάδα
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="mailto:info@webhostpro.gr" className="contact-chip" aria-label="Email">
                <Mail size={12} /> Email
              </a>
              <a href="#" className="contact-chip" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                Instagram
              </a>
              <a href="#" className="contact-chip" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                Facebook
              </a>
              <a href="#" className="contact-chip" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-amber-400/16 bg-amber-400/[0.04] p-5 text-sm text-white/62">
          <p className="icon-text font-medium text-white/80"><MapPin size={14} className="text-amber-400/75" />Digital Achaia Initiative</p>
          <p className="mt-2 leading-7">
            Ξεχωριστή strategic initiative για regional identity, culture, tourism και local brands, powered by Web Host Pro.
          </p>
          <Link className="btn-inline mt-4 inline-flex" to="/digital-achaia">
            Ανακαλύψτε την κατεύθυνση <ArrowRight size={13} />
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Web Host Pro. All rights reserved.</span>
          <span className="icon-text text-white/35"><Globe size={12} />Digital Achaia — powered by Web Host Pro</span>
        </div>
      </div>
    </footer>
  )
}
