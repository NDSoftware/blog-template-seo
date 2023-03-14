import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { BlogHome } from '@/components/blog/blog-home'
import axios from 'axios'
import { CONFIGURL } from '../config/constant'

export async function getStaticProps() {
  try {
    const response = await axios.get(CONFIGURL.blogList)
    const posts = response.data.data
    return {
      props: { posts },
      revalidate: 60,
    }
  } catch (error) {
    console.log('error', error)
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
