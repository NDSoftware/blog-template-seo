import {memo, useRef, useState} from "react";

const BlogComment = () => {
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
        setLoading(true)
        const formEl = e.target
        formEl.classList.add('was-validated')
        if (!formEl.checkValidity()) {
            // const formData = new FormData(formEl)
            return
        }
        setMessage('Comment submitted successfully!')
        setLoading(false)
        formSuccess(formEl)
    }
    return (
        <form className="needs-validation position-relative" onSubmit={formSubmit} noValidate>
            <div className="row">
                <div className="col-md-12 pb-2">
                    <h2 className="border-bottom pb-2">
                        Add Comment
                    </h2>
                </div>
                <div className="col-6 form-group pb-2">
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
                <div className="col-6 form-group pb-2">
                    <label htmlFor="email" className="pb-1">
                        Email address <small className="required">*</small>
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required
                        aria-describedby="email"
                        placeholder="Your Email"
                    />
                    <div className="invalid-feedback">Email is required!</div>
                </div>
                <div className="col-12 form-group pb-2">
                    <label htmlFor="comment" className="pb-1">
                        Comment <small className="required">*</small>
                    </label>
                    <textarea
                        className="form-control"
                        id="comment"
                        name="comment"
                        required
                        aria-describedby="comment"
                        placeholder="Comment"
                    />
                    <div className="invalid-feedback">Comment is required!</div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
            <div
                className="toast-container top-0 end-0 position-absolute z-50"
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
        </form>
    )
}

export default memo(BlogComment)
