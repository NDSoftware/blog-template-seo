import { memo } from 'react'
import Link from 'next/link'

const BlogTocList = ({ blogDetails }) => {
  return (
    <>
      {blogDetails?.map((detail, index) => {
        return (
          <div className="result" id={detail?.id} key={'blog_Detail_' + index}>
            <div className="pr-dm">
              <span>{index + 1 + '. '}</span>
              <span id={detail?.title}>{detail?.domain}</span>
            </div>
            <div className="card sr">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="opacity-50 fs14">
                      <span className="me-2 user-name" title="Critic">
                        <i className="fa fa-user me-2"></i>
                        {detail?.userName}
                      </span>
                      <span className="d-none d-sm-inline me-2 user-location">
                        <i className="fa fa-map-marker-alt me-2"></i>
                        {detail?.location}
                      </span>
                      <span className="published-date">
                        <i className="fa fa-clock me-2"></i>
                        {detail?.articleTime}
                      </span>
                    </div>
                    <div className="my-2">
                      <h2>
                        <Link title={detail?.title} href={detail?.contentLink}>
                          <a className="bg-blog-list-title" rel="noopener nofollow" target="_blank">
                            {detail?.title}
                          </a>
                        </Link>
                      </h2>
                      <div className="url text-truncate">{detail?.contentLink}</div>
                    </div>
                    <p className="card-text mb-0 mt-1">
                      {detail?.content && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: detail?.content,
                          }}
                        />
                      )}
                    </p>
                  </div>
                  <div className="col">
                    <div className="row">
                      {detail?.socialContent && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: detail?.socialContent,
                          }}
                        />
                      )}
                      {detail?.applicationContent && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: detail?.applicationContent,
                          }}
                        />
                      )}
                    </div>
                    <div className="mt-4 mb-2 site-links">
                      {detail?.officialPageContent && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: detail?.officialPageContent,
                          }}
                        />
                      )}
                    </div>
                    {/*<div className="d-flex flex-row justify-content-between pt-2">
                          <div className="d-flex flex-row opacity-75">
                            <div className="text-center">
                              <Link href="/" title="I found it useful" passHref className="bg-like">
                                <i className="fa fa-thumbs-up me-2"></i>
                              </Link>
                              <span className="thumbs-up-count">1</span>
                            </div>
                            <div className="text-center ps-3">
                              <Link href="/" title="Its not useful" passHref className="bg-dislike">
                                <i className="fa fa-thumbs-down me-2"></i>
                              </Link>
                              <span className="thumbs-down-count">0</span>
                            </div>
                          </div>
                          <div className="d-flex flex-row opacity-75">
                            <Link
                              title="Report Link"
                              className="bg-reported-link"
                              href="/"
                              rel="nofollow"
                              passHref
                            >
                              <i className="fa fa-flag"></i>
                            </Link>
                          </div>
                        </div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default memo(BlogTocList)
