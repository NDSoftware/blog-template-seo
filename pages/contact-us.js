import { Breadcrumb } from '@/components/common/breadcrumb'
import { countries } from '../config/countries'
import axios from 'axios'
import { CONFIGURL } from '../config/constant'
import { useRef, useState } from 'react'
import { preventNonNumericalInput } from '../config/util'

export async function getStaticProps() {
  return { props: { countryList: countries } }
}

export default function ContactUs({ countryList }) {
  const toastRef = useRef()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const showToast = () => {
    const toast = new bootstrap.Toast(toastRef.current)
    toast.show()
  }

  const formSuccess = (formEl) => {
    showToast()
    formEl.classList.remove('was-validated')
    formEl.reset()
  }

  const formSubmit = async (e) => {
    e.preventDefault()
    const formEl = e.target
    formEl.classList.add('was-validated')
    if (formEl.checkValidity()) {
      const formData = new FormData(formEl)
      setLoading(true)
      const response = await axios.post(CONFIGURL.contactForm, Object.fromEntries(formData))
      if (!response) {
        setLoading(false)
        return
      }
      setMessage(response.data?.message)
      setLoading(false)
      formSuccess(formEl)
    }
  }

  return (
    <div className="container-xxl">
      <div className="row flex-column flex-lg-row justify-content-center">
        <div className="col-12 col-md-10 col-lg-10 p-3 p-lg-4 blog-head">
          <Breadcrumb pathName={'Contact Us'} />
          <h1>Contact Us</h1>
          <form className="needs-validation" onSubmit={formSubmit} noValidate>
            <div className="row">
              <div className="col-12 form-group pb-2">
                <label className="pb-1" htmlFor="name">
                  Name <small className="required">*</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                  aria-describedby="name"
                  placeholder="Your Name"
                />
                <div className="invalid-feedback">Name is required!</div>
              </div>
              <div className="col-12 form-group pb-2">
                <label htmlFor="email" className="pb-1">
                  Email address <small className="required">*</small>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email"
                  placeholder="Your Email"
                />
                <div className="invalid-feedback">Email is required!</div>
              </div>
              <div className="col-12 form-group pb-2">
                <label htmlFor="phoneNumber" className="pb-1">
                  Phone Number <small className="required">*</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  aria-describedby="phoneNumber"
                  placeholder="Phone Number"
                />
                <div className="invalid-feedback">Phone Number is required!</div>
              </div>
              <div className="col-12 form-group pb-2">
                <label htmlFor="country" className="pb-1">
                  Country <small className="required">*</small>
                </label>
                <select name="country" id="country" required className="form-control">
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option value={country.name} key={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">Country is required!</div>
              </div>
              <div className="col-12 form-group pb-2">
                <label htmlFor="description" className="pb-1">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  aria-describedby="description"
                  placeholder="Description"
                />
              </div>
              <div className="col-12">
                <button type="submit" disabled={loading} className="btn btn-primary">
                  Submit{' '}
                  {loading && <span className="spinner-border spinner-border-sm" role="status" />}
                </button>
              </div>
            </div>
          </form>
          <div
            className="toast-container p-3 top-0 end-0 position-absolute z-50"
            id="toastPlacement"
          >
            <div className="toast" id="message-toaster" ref={toastRef}>
              <div className="toast-body bg-success text-white">
                <span>
                  <i className="fa fa-check-circle" /> {message}{' '}
                </span>
                <button
                  type="button"
                  className="btn-close float-end btn-close-white"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
