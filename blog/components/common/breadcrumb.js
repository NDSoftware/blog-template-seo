import Link from "@/components/Link";

export const Breadcrumb = ({pathName, iconName}) => {
    return (
        <>
            <div className="d-flex flex-column flex-md-row- justify-content-between">
                <div className="opacity-75 pb-2 fs13 bcrmb">
                    <Link href="/"><i class="fa"></i></Link>
                    <span class="category-name">{pathName}</span>
                </div>
            </div>
        </>
    )
}
