import Link from "@/components/Link";

export const BlogHome = () => {
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
                                <div className="col-lg-6 cat-row">
                                    <div className="cat-txt">
                                        <Link href="/blog/Details">Automotive</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 cat-row">
                                    <div className="cat-txt">
                                        <Link href="/blog/details">Automotive</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
