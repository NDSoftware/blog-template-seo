import Link from "@/components/Link";

export default function Header() {
    return (
        <div className="my-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
                <div className="container-xxl bg-white z-50">
                    <Link href="/" className="navbar-brand">
                        <span className="fw-bold ps-1">Blog</span>
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav text-base">
                            <Link href="/" className="p-2 nav-item nav-link">
                                <i className="fa fa-home"></i>Home
                            </Link>
                            <Link href="/about" className="p-2 nav-item nav-link">
                                <i className="fa fa-user"></i>About US
                            </Link>
                            <a href="/contact-us" className="p-2 nav-item nav-link">
                                <i className="fa fa-address-book"></i>Contact US
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
