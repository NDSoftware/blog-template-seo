import Link from '@/components/Link'

export default function Header() {
  return (
    <div className="my-0">
      <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-white shadow-sm">
        <div className="container-xxl z-50 bg-white">
          <Link href="/" className="navbar-brand">
            <span className="fw-bold ps-1">Blog</span>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <div className="navbar-nav text-base">
              <Link href="/" className="nav-item nav-link p-2">
                <i className="fa fa-home"></i>Home
              </Link>
              <Link href="/about" className="nav-item nav-link p-2">
                <i className="fa fa-user"></i>About US
              </Link>
              <Link href="/contact-us" className="nav-item nav-link p-2">
                <i className="fa fa-address-book"></i>Contact US
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
