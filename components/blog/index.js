import dynamic from 'next/dynamic'

export const BlogTocList = dynamic(() => import('./blog-toc-list'))
