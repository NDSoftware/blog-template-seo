import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import { getBreadcrumbs } from '@/components/blog/getBreadcrumbs'

const CommonSEO = ({ title, description, breadcrumbData }) => {
  const router = useRouter()
  const breadcrumb = () => {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbData ? breadcrumbData : getBreadcrumbs({ title: null }),
            null,
            '\t'
          ),
        }}
      />
    )
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="canonical" href={`${siteMetadata.siteUrl}${router.asPath}`} />
      {breadcrumb()}
    </Head>
  )
}

export const PageSEO = ({ title, description, breadcrumb }) => {
  return <CommonSEO title={title} description={description} breadcrumbData={breadcrumb} />
}

export const BlogSEO = ({
  authorDetails,
  title,
  summary,
  date,
  lastmod,
  url,
  images = [],
  canonicalUrl,
  breadcrumbData,
}) => {
  const router = useRouter()
  const publishedAt = new Date(date).toISOString()
  const modifiedAt = new Date(lastmod || date).toISOString()
  let imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
      ? [images]
      : images

  const featuredImages = imagesArr.map((img) => {
    return {
      '@type': 'ImageObject',
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index)
  }

  let authorList
  if (authorDetails) {
    authorList = removeDuplicates(authorDetails).map((author) => {
      return {
        '@type': 'Person',
        name: author,
      }
    })
  } else {
    authorList = {
      '@type': 'Person',
      name: siteMetadata.author,
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteMetadata.siteUrl}${router.asPath}`,
    },
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      url: siteMetadata.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: summary,
  }

  const twImageUrl = featuredImages[0].url

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="article"
        ogImage={featuredImages}
        twImage={twImageUrl}
        canonicalUrl={canonicalUrl}
        breadcrumbData={breadcrumbData}
      />
      <Head>
        {date && <meta property="article:published_time" content={publishedAt} />}
        {lastmod && <meta property="article:modified_time" content={modifiedAt} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  )
}
