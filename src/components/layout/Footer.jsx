import { Link } from 'react-router-dom'
import { Mail, Globe, Phone, ArrowRight, MapPin } from 'lucide-react'
import footerLogo from '../../../12.png'

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10 bg-slate-950/55">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />
      <div className="container-main py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <img
              src={footerLogo}
              alt="Web Host Pro"
              width="240"
              height="80"
              loading="lazy"
              decoding="async"
              className="h-16 w-auto md:h-20"
            />
            <p className="mt-4 text-sm leading-7 text-white/65">
              Σύγχρονες ψηφιακές λύσεις για ιστοσελίδες, eShop, hosting, branding και στρατηγική ψηφιακής παρουσίας για επαγγελματίες, επιχειρήσεις και projects.
            </p>
          </div>

          <div className="lg:pl-10 xl:pl-12">
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">Σελίδες</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/65">
              <Link className="footer-link icon-text" to="/"><Globe size={13} />Αρχική</Link>
              <Link className="footer-link icon-text" to="/services"><ArrowRight size={13} />Υπηρεσίες</Link>
              <Link className="footer-link icon-text" to="/"><ArrowRight size={13} />Portfolio Highlights</Link>
              <Link className="footer-link icon-text" to="/digital-achaia"><MapPin size={13} />Digital Achaia</Link>
              <Link className="footer-link icon-text" to="/projects"><ArrowRight size={13} />Έργα</Link>
              <Link className="footer-link icon-text" to="/contact"><Mail size={13} />Επικοινωνία</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">Υπηρεσίες</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/65">
              <span className="icon-text"><ArrowRight size={13} />Websites & eShop</span>
              <span className="icon-text"><ArrowRight size={13} />Hosting, Domains & SSL</span>
              <span className="icon-text"><ArrowRight size={13} />Support, Security & Performance</span>
              <span className="icon-text"><ArrowRight size={13} />SEO & Google Presence</span>
              <span className="icon-text"><ArrowRight size={13} />Campaigns & Content Creation</span>
              <span className="icon-text"><ArrowRight size={13} />Social Media, Branding & Design</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">Επικοινωνία</h4>
            <div className="mt-3 flex flex-col gap-3 text-sm text-white/65">
              <a href="mailto:info@webhostpro.gr" className="footer-link icon-text">
                <Mail size={13} />info@webhostpro.gr
              </a>
              <a href="tel:+306955236006" className="footer-link icon-text">
                <Phone size={13} />+30 6955236006
              </a>
              <a href="tel:+306984138488" className="footer-link icon-text">
                <Phone size={13} />+30 6984138488
              </a>
              <span className="icon-text text-white/50">
                <MapPin size={13} />Διακοπτό, Αιγιαλείας, Αχαΐα, 25003
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="viber://chat?number=%2B306984138488"
                className="contact-chip h-12 w-12 justify-center p-0"
                aria-label="Viber"
                title="Viber"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 5.7 2 10.25c0 2.6 1.48 4.92 3.8 6.42L5 22l5.56-2.14c.47.06.95.09 1.44.09 5.52 0 10-3.7 10-8.25S17.52 2 12 2Zm5.35 10.3c-.2.56-1.18 1.07-1.62 1.13-.42.05-.95.07-2.92-.73-2.52-1.03-4.14-3.5-4.26-3.66-.11-.16-1.02-1.35-1.02-2.57 0-1.21.64-1.81.86-2.05.22-.24.49-.3.65-.3h.47c.16 0 .37-.06.57.43.2.49.67 1.68.73 1.8.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.35.41-.12.12-.25.25-.11.49.14.24.62 1.01 1.32 1.63.91.8 1.68 1.04 1.92 1.16.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.45.28.06.1.06.57-.14 1.13Z" />
                </svg>
              </a>
              <a
                href="https://wa.me/306955236006"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-chip h-12 w-12 justify-center p-0"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.76.46 3.41 1.26 4.84L2 22l5.31-1.27A9.94 9.94 0 0 0 12.04 22C17.56 22 22.04 17.52 22.04 12S17.56 2 12.04 2Zm0 18.2c-1.49 0-2.95-.4-4.23-1.15l-.3-.18-3.15.75.84-3.06-.2-.31a8.17 8.17 0 0 1-1.26-4.25c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.2-8.18 8.2Zm4.52-6.12c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.16.24-.65.81-.79.97-.14.16-.28.18-.53.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.39-1.75-.14-.24-.02-.37.1-.49.11-.11.25-.29.37-.43.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.57-1.38-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.16 0-.43.06-.65.31-.23.24-.86.84-.86 2.04 0 1.19.88 2.34 1 2.5.12.16 1.72 2.63 4.17 3.68.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.48-.6 1.69-1.19.21-.59.21-1.09.14-1.19-.06-.1-.23-.16-.48-.29Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-chip h-12 w-12 justify-center p-0"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.93.26-1.56 1.6-1.56h1.7V3.08c-.3-.04-1.3-.08-2.46-.08-2.44 0-4.12 1.49-4.12 4.24v2.36H7.4v3.2h2.82V21h3.28Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-chip h-12 w-12 justify-center p-0"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-chip h-12 w-12 justify-center p-0"
                aria-label="YouTube"
                title="YouTube"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M21.58 7.19a2.99 2.99 0 0 0-2.11-2.11C17.62 4.5 12 4.5 12 4.5s-5.62 0-7.47.58A2.99 2.99 0 0 0 2.42 7.2 31.3 31.3 0 0 0 2 12c0 1.6.15 3.2.42 4.8a2.99 2.99 0 0 0 2.11 2.11c1.85.58 7.47.58 7.47.58s5.62 0 7.47-.58a2.99 2.99 0 0 0 2.11-2.11c.27-1.6.42-3.2.42-4.8 0-1.6-.15-3.2-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Web Host Pro Αιγιαλεία. All rights reserved.</span>
        </div>

        <div className="mt-5 rounded-2xl border border-cyan-200/12 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-200/82">Ecosystem Placeholders</p>
          <p className="mt-2 text-sm leading-7 text-white/65">
            Ένα preview από brands, guides και thematic projects που συνδέονται με το οικοσύστημα της Web Host Pro.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {['Discover Diakopto', 'Odontotos Project', 'Vouraikos', 'Digital Achaia', 'Web Host Pro'].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 transition duration-300 hover:border-cyan-200/30"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-cyan-200/8 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative mb-2 h-8 rounded-lg border border-amber-300/20 bg-gradient-to-r from-amber-300/8 via-white/5 to-cyan-300/10" />
                <p className="relative text-xs uppercase tracking-[0.14em] text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
