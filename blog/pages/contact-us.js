import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'CMSLayout'

export async function getStaticProps() {
    const authorDetails = await getFileBySlug('authors', ['contact'])
    return { props: { authorDetails } }
}

export default function ContactUs({ authorDetails }) {
    const { mdxSource, frontMatter } = authorDetails

    return (
        <MDXLayoutRenderer
            layout={frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
        />
    )
}
