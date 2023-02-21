import axios from 'axios'

const EXTERNAL_DATA_URL = 'https://hypertest.rishvi.app/api/blogs/get-blog-lists'
const siteUrl = 'https://blog-template-seo.vercel.app/'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${siteUrl}${slug}`}</loc>
       </url>
     `
       })
       .join('')}
        <url>
           <loc>${`${siteUrl}about`}</loc>
        </url>
        <url>
          <loc>${`${siteUrl}contact-us`}</loc>
        </url>
        <url>
          <loc>${`${siteUrl}faq`}</loc>
        </url>
        <url>
          <loc>${`${siteUrl}terms-of-service`}</loc>
        </url>
        <url>
          <loc>${`${siteUrl}disclaimer`}</loc>
        </url>
        <url>
          <loc>${`${siteUrl}privacy-policy`}</loc>
        </url>
   </urlset>
 `
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await axios.get(EXTERNAL_DATA_URL)
  const posts = await request.data.data

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default getServerSideProps
