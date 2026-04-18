import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Αρχική', to: '/' },
  { label: 'Υπηρεσίες', to: '/services' },
  { label: 'Digital Achaia', to: '/digital-achaia' },
  { label: 'Έργα', to: '/projects' },
  { label: 'Σχετικά', to: '/about' },
  { label: 'Επικοινωνία', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const doc = document.documentElement
      const scrollable = doc.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-white/12 bg-slate-950/72 shadow-[0_8px_38px_rgba(0,0,0,0.32)] backdrop-blur-2xl'
          : 'bg-transparent'
      )}
    >
      <div className="container-main">
        <div className={clsx('flex items-center justify-between transition-all duration-400', scrolled ? 'py-3.5' : 'py-4')}>
          <Link to="/" className="group flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-white">
              Web Host Pro
            </span>
            <span className="text-xs text-white/55 transition group-hover:text-white/75">
              Digital solutions & modern web presence
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'relative rounded-full border px-3 py-1.5 text-sm transition',
                    isActive
                      ? 'border-amber-400/30 bg-amber-400/10 text-white'
                      : 'border-transparent text-white/70 hover:border-white/15 hover:text-white'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={clsx(
                        'absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-amber-400/20 via-amber-300 to-amber-400/20 transition-opacity duration-300',
                        isActive ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="premium-btn btn btn-primary px-5 py-2 text-sm"
            >
              Επικοινωνία
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white transition hover:border-cyan-200/35 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="glass-strong soft-grid mb-4 overflow-hidden rounded-2xl p-4 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        'rounded-xl px-3 py-2.5 text-sm transition',
                        isActive
                          ? 'bg-amber-400/10 text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="premium-btn btn btn-primary mt-2 rounded-xl px-4 py-3 text-center text-sm"
                >
                  Επικοινωνία
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative h-[2px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 via-yellow-200 to-cyan-300 shadow-[0_0_12px_rgba(212,168,79,0.7)]"
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          />
        </div>
      </div>
    </header>
  )
}
