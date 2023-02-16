import Link from '@/components/Link'

export const Breadcrumb = ({ pathName, iconName }) => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row- justify-content-between">
        <div className="fs13 bcrmb pb-2 opacity-75">
          <Link href="/">
            <i className="fa"></i>
          </Link>
          <span className="category-name">{pathName}</span>
        </div>
      </div>
    </>
  )
}
