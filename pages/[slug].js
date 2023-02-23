import axios from 'axios'

export async function getServerSideProps({ params }) {
  const response = await axios.get(
    'https://hypertest.rishvi.app/api/blogs/get-blog-detail/' + params.slug
  )
  const post = response.data.data

  return { props: { blogPost: post } }
}

import Link from 'next/link'
import { BlogNotFound } from '@/components/blog/BlogNotFound'
import TOCInline from '@/components/TOCInline'
import { BlogSEO } from '@/components/SEO'

export default function Blog({ blogPost }) {
  if (!blogPost) {
    return <BlogNotFound />
  }

  const toc = blogPost?.blogDetails.map((blog) => {
    return {
      value: blog.domain,
      url: blog.domain,
    }
  })

  const authorDetails = blogPost?.blogDetails.map((blog) => blog?.userName)

  return (
    <>
      <BlogSEO
        title={blogPost?.title}
        date={blogPost?.articleDate}
        authorDetails={authorDetails}
        summary={blogPost?.metaDescription}
      />
      <div className="container-xxl">
        <div className="row flex-column flex-lg-row justify-content-center">
          <div className="col-12 col-md-10 col-lg-10 p-3 p-lg-4 blog-head">
            <div className="d-flex flex-column flex-md-row- justify-content-between">
              <div className="opacity-75 pb-2 fs13 bcrmb">
                <Link href="/" passHref>
                  <a className="pointer">
                    <i className="fa fa-home"></i> Home
                  </a>
                </Link>
                <span> >> </span>
                <Link href="/" passHref className="pointer">
                  <a className="category-name pointer">Portal</a>
                </Link>
                <span className="category-name"> >> {blogPost?.title}</span>
              </div>
            </div>
            <h1>{blogPost?.title}</h1>
            <div className="opacity-75 py-2 fs13">
              <span className="me-2 badge bg-success opacity-100 d-sm-inline">
                <i className="fa fa-user"></i>Reviewer
              </span>
              <span className="d-md-inline user-location">
                <i className="fa fa-map-marker-alt"></i>West Des Moines, IA
              </span>
              <span className="published-date ms-2">
                <i className="fa fa-clock me-2"></i>9 months ago
              </span>
            </div>
            {blogPost?.content && (
              <span
                dangerouslySetInnerHTML={{
                  __html: blogPost?.content,
                }}
              />
            )}
            <TOCInline toc={toc} />
            {blogPost?.blogDetails.map((detail, index) => {
              return (
                <div className="result" id={detail?.id} key={'blog_Detail_' + index}>
                  <div className="pr-dm">
                    <span>{index + 1 + '. '}</span>
                    <span id={detail?.domain}>{detail?.domain}</span>
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
                                <a target="_blank">{detail?.title}</a>
                              </Link>
                            </h2>
                            <div className="url">{detail?.contentLink}</div>
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
                            <div className="col-lg-9">
                              {detail?.socialContent && (
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: detail?.socialContent,
                                  }}
                                />
                              )}
                            </div>
                            <div className="col-lg-3">
                              {detail?.applicationContent && (
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: detail?.applicationContent,
                                  }}
                                />
                              )}
                            </div>
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
            {/*<div className=" card py-3">
            <div className="card-body faq p-md-3">
              <p>
                If you know a webpage link that work for the reported issue. Consider sharing with
                the community by adding in the above list. After verification of provided
                information, it would be get listed on this web page.
              </p>
              <div className="text-center">
                <Link className="mt-1 btn btn-primary" href="/" passHref rel="nofollow">
                  Add New Link
                </Link>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="card-body faq p-md-3">
              <div className="qa">
                <h3>How much does it cost to charter seanna?</h3>
                <span>
                  My Seanna commands a charter rental price of{' '}
                  <b>$352,500 per week during the summer and $294,000 in the winter</b>. This price
                  does not include expenses. The yacht can demand an even higher price during “high
                  season.” Summer “high season” rental price is $412,500 per week.
                </span>
              </div>
              <div className="qa">
                <h3>How much does it cost to charter Below Deck yacht?</h3>
                <span>
                  Other yachts featured on the show are just as pricey. The Wellington from Below
                  Deck Mediterranean Season 5 can set vacationers back about $270,000 per week.
                  Below Deck yacht prices range from{' '}
                  <b>$140,000 per week to more than $300,000 per week</b>.
                </span>
              </div>
              <div className="qa">
                <h3>Can a yacht cross the ocean?</h3>
                <span>
                  <b>Both the Pacific and Atlantic oceans can be crossed in a yacht</b>. You can
                  cross the Pacific and Atlantic oceans on a sailing yacht or a motor yacht. … Some
                  yachts will not hold enough fuel to complete the trip and will typically be
                  shipped on freighters designed.
                </span>
              </div>
            </div>
          </div>*/}
          </div>
          {/*<div
            className="col-12 col-lg-3 d-lg-flex flex-lg-column">
          <div>
            <h4 className="ps-3 mt-3 fw-bold"><i
                className="fas fa-tools pe-2"></i>Troubleshooting
            </h4>
            <div className="px-3 py-3 bg-white">
              <div className="fw-bold mb-2">Before login,
                must ensure following:
              </div>
              <ul className="p-0 m-0 ps-3">
                <li>Keyboard CAPS lock is OFF</li>
                <li>You are not using an old password</li>
                <li>Your given email/login-name is valid</li>
                <li>Its not a phishing website</li>
                <li>Do not use VPN as some sites restrict VPN</li>
                <li>The internet connection is active and login form is loading cache</li>
                <li>If the site requires captcha, it
                  must be valid. Regenerate if its
                  not readable
                </li>
                <li>Still not resolved? Visit
                  <Link href="/faq" passHref className="pointer">FAQs page</Link>
                </li>
              </ul>
            </div>
          </div>
          <h5 className="ps-3 mt-3"><i
              className="fa fa-copy pe-2"></i>Similar</h5>
          <div className="list-group list-group-flush">
            <Link href="/" passHref
               className="list-group-item list-group-item-action d-flex py-3 pointer"
               aria-current="true">
              <div
                  className="w-100 justify-content-between d-flex">
                <div>
                  <h6 className="mb-0">Project Blackout Login</h6>
                </div>
              </div>
            </Link>
            <Link href="/" passHref
               className="list-group-item list-group-item-action d-flex py-3"
               aria-current="true">
              <div
                  className="w-100 justify-content-between d-flex">
                <div>
                  <h6 className="mb-0">Usa Rugby Login</h6>
                </div>
              </div>
            </Link>
            <Link href="/" passHref
               className="list-group-item list-group-item-action d-flex py-3"
               aria-current="true">
              <div
                  className="w-100 justify-content-between d-flex">
                <div>
                  <h6 className="mb-0">Udt Super Rugby
                    Login</h6>
                </div>
              </div>
            </Link>
            <Link href="/" passHref
               className="list-group-item list-group-item-action d-flex py-3"
               aria-current="true">
              <div
                  className="w-100 justify-content-between d-flex">
                <div>
                  <h6 className="mb-0">The Rugby Site Login</h6>
                </div>
              </div>
            </Link>
            <Link href="/" passHref
               className="list-group-item list-group-item-action d-flex py-3"
               aria-current="true">
              <div
                  className="w-100 justify-content-between d-flex">
                <div>
                  <h6 className="mb-0">Gloucester Rugby Login</h6>
                </div>
              </div>
            </Link>
          </div>
          <h5 className="mt-3">
            <Link href="/" passHref><i
              className="fa fa-th-list"></i>Most Discussed
            </Link>
          </h5>
          <div className="list-group list-group-flush">
            <Link href="/" passHref
               className="col-md-6 list-group-item list-group-item-action d-flex gap-3 py-3"
               aria-current="true">
              <div
                  className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-1">Rapido Login
                  </h6>
                  <div className="opacity-75 mt-2 recentPost">
                          <span className="totalView">
                            <i
                              className="fa fa-eye"
                              title="Total Views"></i><span
                              className="views-count">1,392
                                  Views </span></span>
                    <span className="bg-rating">
                      <i className="fa fa-star ms-2"
                        title="Rating"></i>
                        <span
                            className="average-rating">5</span>
                    </span>
                    <span className=".bg-lastView"><i
                        className="fa fa-clock ms-2"
                        title="Last Viewed"></i>
                      <span
                          className="last-viewed">24
                          minutes
                          ago
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/" passHref
               className="col-md-6 list-group-item list-group-item-action d-flex gap-3 py-3"
               aria-current="true">
              <div
                  className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-1">Cloud Tv Login
                  </h6>
                  <div className="opacity-75 mt-2 recentPost">
                    <span className="totalView"><i
                        className="fa fa-eye"
                        title="Total Views"></i><span
                        className="views-count">974
                            Views </span></span>
                    <span className="bg-rating">
                      <i className="fa fa-star ms-2" title="Rating"></i>
                      <span className="average-rating">4</span></span>
                    <span className="bg-lastView"><i
                        className="fa fa-clock ms-2"
                        title="Last Viewed"></i>
                      <span
                          className="last-viewed">41
                          minutes
                          ago</span></span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <h5 className="mt-3">
            <Link href="/" passHref>
              <i className="fa fa-edit pointer"></i>Recently Updated
            </Link>
          </h5>
          <div className="list-group list-group-flush">
            <Link href="/" passHref
               className="list-group-item list-group-item-action d-flex gap-3 py-3 pointer"
               aria-current="true">
              <div className="w-100">
                <h6 className="mb-1">Outside Agents
                  Login</h6>
                <div className="d-flex w-100 ">
                  <span
                      className="opacity-75 d-inline-block pt-1">
                  </span>
                  <small
                      className="opacity-75 text-nowrap align-self-center pt-2"><i
                      className="fa fa-clock"></i><span
                      className="updated-date">1
                                                                                                minute
                                                                                                ago</span></small>
                </div>
              </div>
            </Link>
          </div>
        </div>*/}
        </div>
      </div>
    </>
  )
}
