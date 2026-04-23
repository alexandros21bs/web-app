import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'

export default function NotFoundPage() {
  return (
    <section className="section-space">
      <Seo
        title="404 — Σελίδα δεν βρέθηκε"
        description="Η σελίδα που αναζητάτε δεν υπάρχει."
        path="/404"
      />
      <div className="container-main flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="text-8xl font-bold text-[#67E8F9]/20 md:text-[10rem]">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Η σελίδα δεν βρέθηκε
        </h1>
        <p className="mt-4 max-w-md text-lg text-white/60">
          Η διεύθυνση που ακολουθήσατε δεν υπάρχει ή έχει μετακινηθεί.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="premium-btn btn btn-primary">
            Αρχική σελίδα
          </Link>
          <Link to="/contact" className="premium-btn btn btn-secondary">
            Επικοινωνία
          </Link>
        </div>
      </div>
    </section>
  )
}
