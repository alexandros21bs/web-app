import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'whp_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          role="dialog"
          aria-label="Ειδοποίηση cookies"
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border border-white/12 bg-[#0a1524]/95 p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-sm leading-6 text-white/80">
              Χρησιμοποιούμε <strong className="text-white">cookies</strong> αποκλειστικά για την ομαλή λειτουργία του site (session, form security). Δεν αποστέλλουμε δεδομένα σε τρίτους. Διαβάστε την{' '}
              <Link to="/privacy" className="underline underline-offset-2 transition hover:text-[#67E8F9]">
                Πολιτική Απορρήτου
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={accept}
                className="rounded-xl bg-[#67E8F9]/20 px-5 py-2 text-sm font-semibold text-[#67E8F9] transition hover:bg-[#67E8F9]/35"
              >
                Αποδοχή
              </button>
              <button
                type="button"
                onClick={decline}
                className="rounded-xl border border-white/15 px-5 py-2 text-sm font-semibold text-white/60 transition hover:border-white/30 hover:text-white/80"
              >
                Απόρριψη
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
