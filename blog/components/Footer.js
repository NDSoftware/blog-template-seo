import Link from './Link'

export default function Footer() {
  return (
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <p className="col-md-4 mb-0 text-muted">&copy; 2023 login Directory</p>
          <ul className="nav col-md-8 justify-content-end">
            <li className="nav-item">
              <Link href="/faq" className="nav-link px-2 text-muted">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link href="/terms-of-service" className="nav-link px-2 text-muted">Terms</Link>
            </li>
            <li className="nav-item">
              <Link href="/disclaimer" className="nav-link px-2 text-muted">Disclaimer</Link>
            </li>
            <li className="nav-item">
              <Link href="/privacy-policy" className="nav-link px-2 text-muted">
                Privacy Policy</Link>
            </li>
          </ul>
        </footer>
      </div>
  )
}
