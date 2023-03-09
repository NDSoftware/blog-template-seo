import dynamic from 'next/dynamic'

export const BlogBreadcrumb = dynamic(() => import('./blog-breadcrumb'))
