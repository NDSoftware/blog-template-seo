import siteMetadata from '@/data/siteMetadata'

export const getBreadcrumbs = ({ title }) => {
  const baseUrl = siteMetadata.siteUrl

  const breadcrumbItems = {
    '@type': 'ListItem',
    position: 2,
    name: title,
    item: baseUrl + '/' + title,
  }

  let breadcrumbIndex = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Homepage',
          item: baseUrl,
        },
      ],
    },
  ]

  let breadcrumbDetail = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Homepage',
          item: baseUrl,
        },
        breadcrumbItems,
      ],
    },
  ]

  return title ? breadcrumbDetail : breadcrumbIndex
}
