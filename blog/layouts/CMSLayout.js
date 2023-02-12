import { PageSEO } from '@/components/SEO'
import {Breadcrumb} from "@/components/common/breadcrumb";

export default function CMSLayout({ children, frontMatter }) {
  const { pathName, iconName } = frontMatter
    if (!pathName || !iconName) return
  return (
    <>
        <PageSEO title={`About Us`} description={``} />
        <div className="container-xxl">
            <div className="row flex-column flex-lg-row">
                <div className="d-none col-lg-1 d-lg-flex"></div>
                <div className="col-12 col-lg-10 p-3 p-lg-4 about-us-header">
                    <Breadcrumb pathName={pathName} iconName={iconName} />
                    {children}
                </div>
            </div>
        </div>
    </>
  )
}
