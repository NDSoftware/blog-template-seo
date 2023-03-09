const END_POINT = process.env.API_END_POINT;
const API_V1 = "api";
export const CONFIGURL = {
    blogDetails: END_POINT + API_V1 + '/blogs/get-blog-detail/',
    blogList: END_POINT + API_V1 + '/blogs/get-blog-lists'
}
