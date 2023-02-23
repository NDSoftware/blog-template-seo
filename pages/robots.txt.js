import { GetServerSideProps } from 'next'

const DEFAULT_ROBOT_TXT = `User-agent: *
User-agent: AdsBot-Google
Disallow:/
`
const BlogTemplate = `User-agent: *

# Allowed Resources
Allow: /*static

# Internal Search
Disallow: /search
Disallow: /*filter=
Disallow: /*enable-cookies
Disallow: /faq
Disallow: /privacy-policy
Disallow: /disclaimer
Disallow: /terms-of-service

Sitemap: https://blog-template-seo.vercel.app/sitemap.xml
`

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain')

  res.write(BlogTemplate)
  res.end()

  return { props: {} }
}

export default getServerSideProps
