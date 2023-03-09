import { memo } from 'react'
import Link from 'next/link'

const BlogBreadcrumb = ({ title }) => {
  return (
    <div className="d-flex flex-column flex-md-row- justify-content-between">
      <div className="opacity-75 pb-2 fs13 bcrmb">
        <Link href="/" passHref>
          <a className="pointer">
            <i className="fa fa-home"></i> Home
          </a>
        </Link>
        <span> >> </span>
        <Link href="/" passHref className="pointer">
          <a className="category-name pointer">Portal</a>
        </Link>
        <span className="category-name"> >> {title}</span>
      </div>
    </div>
  )
}

export default memo(BlogBreadcrumb)
