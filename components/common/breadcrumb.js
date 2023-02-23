import Link from '@/components/Link'

export const Breadcrumb = ({ pathName, iconName }) => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row- justify-content-between">
        <div className="fs13 bcrmb pb-2 opacity-75">
          <Link href="/" passHref>
            <a className="pointer">
              <i className="fa fa-home"></i> Home
            </a>
          </Link>
          <span> >> </span>
          <Link href="/" passHref>
            <a className="category-name pointer">Portal</a>
          </Link>
          <span className="category-name"> >> {pathName}</span>
        </div>
      </div>
    </>
  )
}
