import axios from 'axios'

export async function getStaticPaths() {
  const response = await axios.get('https://hypertest.rishvi.app/api/blogs/get-blog-lists')
  const posts = response.data.data.map((p) => ({
    params: {
      slug: p.slug,
    },
  }))
  return {
    paths: posts,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const response = await axios.get(
    'https://hypertest.rishvi.app/api/blogs/get-blog-detail/' + params.slug
  )
  const post = response.data.data

  return { props: { blogPost: post } }
}

import Link from 'next/link'
import NextImage from 'next/image'

export default function Blog({ blogPost }) {
  return (
    <div className="container-xxl">
      <div className="row flex-column flex-lg-row">
        <div className="d-none col-lg-1 d-lg-flex"></div>
        <div className="col-12 col-lg-8 p-3 p-lg-4 blog-head">
          <div className="d-flex flex-column flex-md-row- justify-content-between">
            <div className="opacity-75 pb-2 fs13 bcrmb">
              <Link href="/" passHref>
                <i className="fa fa-home"></i>
              </Link>
              <Link href="/" passHref className="pointer">
                <span className="category-name">Health</span>
              </Link>
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
            <span className="published-date">
              <i className="fa fa-clock me-2"></i>9 months ago
            </span>
          </div>
          {blogPost?.content && <span dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogPost?.content, null, '\t')
          }}/>}
          <br />
          {blogPost?.blogDetails.map((detail, index) => {
            return (
              <div className="result" id={detail?.id} key={'blog_Detail_' + index}>
                <div className="pr-dm">
                  <span>{index + 1 + '. '}</span>
                  <span>{detail?.domain}</span>
                </div>
                <div className="card sr">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="opacity-50 fs14">
                          <span className="me-2 user-name" title="Critic">
                            <i className="fa fa-user me-2"></i>{detail?.userName}
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
                            <Link
                              title={detail?.title}
                              href="/"
                              passHref
                              rel="nofollow"
                              target="_blank"
                            >
                              <span className="bg-blog-title">{detail?.title}</span>
                            </Link>
                          </h2>
                          <div className="url">{detail?.contentLink}</div>
                        </div>
                        <p className="card-text mb-0 mt-1">
                          {detail?.content && <span dangerouslySetInnerHTML={{
                            __html: JSON.stringify(detail?.content, null, '\t')
                          }}/>}
                        </p>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-lg-9">
                            {detail?.socialContent && <span dangerouslySetInnerHTML={{
                              __html: JSON.stringify(detail?.socialContent, null, '\t')
                            }}/>}
                          </div>
                          <div className="col-lg-3">
                            {detail?.applicationContent && <span dangerouslySetInnerHTML={{
                              __html: JSON.stringify(detail?.applicationContent, null, '\t')
                            }}/>}
                          </div>
                        </div>
                        <div className="mt-4 mb-2 site-links">
                          {detail?.officialPageContent && <span dangerouslySetInnerHTML={{
                            __html: JSON.stringify(detail?.officialPageContent, null, '\t')
                          }}/>}
                        </div>
                        <div className="d-flex flex-row justify-content-between pt-2">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className=" card py-3">
            <div className="card-body faq p-md-3">
              <p>
                If you know a webpage link that work for the reported issue. Consider sharing with
                the community by adding in the above list. After verification of provided
                information, it would be get listed on this web page.
              </p>
              <div className="text-center">
                <Link className="mt-1 btn btn-primary" href="/" rel="nofollow">
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
          </div>
        </div>
      </div>
    </div>
  )
}
