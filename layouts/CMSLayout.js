import { PageSEO } from '@/components/SEO'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { getBreadcrumbs } from '@/components/blog/getBreadcrumbs'
import { useRouter } from 'next/router'

export default function CMSLayout({ children, frontMatter }) {
  const { pathName, iconName } = frontMatter
  const router = useRouter()
  if (!pathName || !iconName) return
  const breadcrumb = getBreadcrumbs({ title: router.asPath.replace('/', '') })

  return (
    <>
      <PageSEO title={pathName} description={``} breadcrumb={breadcrumb} />
      <div className="container-xxl">
        <div className="row flex-column flex-lg-row">
          <div className="d-none col-lg-1 d-lg-flex"></div>
          <div className="col-12 col-lg-10 p-lg-4 about-us-header p-3">
            <Breadcrumb pathName={pathName} iconName={iconName} />
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
