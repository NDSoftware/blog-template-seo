import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { BlogHome } from '@/components/blog/blog-home'
import axios from 'axios'

export async function getStaticProps() {
  try {
    const response = await axios.get('https://hypertest.rishvi.app/api/blogs/get-blog-lists')
    const posts = response.data.data
    return { props: { posts } }
  } catch (error) {
    return {}
  }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <BlogHome posts={posts} />
    </>
  )
}
