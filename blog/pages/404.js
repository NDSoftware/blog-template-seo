import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex justify-start">
        <div className="pt-6 pb-8">
          <h1>404</h1>
        </div>
        <div>
          <p>Sorry we couldn't find this page.</p>
          <Link href="/">
            <button className="btn btn-secondary">Back to homepage</button>
          </Link>
        </div>
      </div>
    </>
  )
}
