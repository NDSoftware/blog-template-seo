import Link from '@/components/Link'

export const BlogHome = ({ posts }) => {
  return (
    <>
      <div className="px-2 text-center">
        <h1 className="display-5 fw-bold">Blogs</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container-xxl hpcats">
              <div className="row">
                {posts &&
                  posts.map((blog, index) => (
                    <div className="col-lg-6 cat-row" key={'blog_' + index}>
                      <div className="cat-txt">
                        <Link href={'/blog/' + blog.slug}>{blog.title}</Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
