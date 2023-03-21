import Link from './Link'
import { useEffect } from 'react'

export default function Footer() {
  useEffect(() => {
    let backToTopBtn = document.getElementById('btn-back-to-top')
    window.onscroll = function () {
      scrollFunction()
    }
    function scrollFunction() {
      if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        backToTopBtn.style.display = 'block'
      } else {
        backToTopBtn.style.display = 'none'
      }
    }
    backToTopBtn.addEventListener('click', backToTop)
    function backToTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }, [])

  return (
    <>
      <div className="container">
        <footer className="d-flex justify-content-between align-items-center my-4 flex-wrap py-3">
          <p className="col-md-4 text-muted mb-0">&copy; 2023 login Directory</p>
          <ul className="nav col-md-8 justify-content-end">
            {/*<li className="nav-item">*/}
            {/*  <Link href="/faq" className="nav-link text-muted px-2">*/}
            {/*    FAQs*/}
            {/*  </Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <Link href="/terms-of-service" className="nav-link text-muted px-2">*/}
            {/*    Terms*/}
            {/*  </Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <Link href="/disclaimer" className="nav-link text-muted px-2">*/}
            {/*    Disclaimer*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li className="nav-item">
              <Link href="/privacy-policy" className="nav-link text-muted px-2">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </footer>
      </div>
      <button type="button" className="btn btn-secondary btn-floating btn-lg" id="btn-back-to-top">
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}
