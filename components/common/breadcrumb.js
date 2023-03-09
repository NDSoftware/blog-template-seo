import Link from '@/components/Link'

export const Breadcrumb = ({ pathName, iconName }) => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row- justify-content-between">
        <div className="fs13 bcrmb pb-2 opacity-75">
          <Link href="/">
            <span className="pointer">
              <i className="fa fa-home"></i> Home
            </span>
          </Link>
          <span> >> </span>
          <Link href="/">
            <span className="category-name pointer">Portal</span>
          </Link>
          <span className="category-name"> >> {pathName}</span>
        </div>
      </div>
    </>
  )
}
