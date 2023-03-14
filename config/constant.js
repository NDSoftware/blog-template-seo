const END_POINT = process.env.NEXT_PUBLIC_API_END_POINT;
const API_V1 = "api";
export const CONFIGURL = {
    blogDetails: END_POINT + API_V1 + '/blogs/get-blog-detail/',
    blogList: END_POINT + API_V1 + '/blogs/get-blog-lists',
    contactForm: END_POINT + API_V1 + '/contact-us/insert',
    sitemapList: END_POINT + API_V1 + '/blogs/get-blog-lists-for-sitemap'
}
