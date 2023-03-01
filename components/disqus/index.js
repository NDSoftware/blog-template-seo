import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import { useEffect } from 'react'

export const useDisqus = () => {
  const router = useRouter()

  useEffect(() => {
    let disqus_config = function () {
      this.page.url = `${siteMetadata.siteUrl}${router.asPath}`
      this.page.identifier = `${router.asPath}`
    }
    ;(function () {
      // DON'T EDIT BELOW THIS LINE
      let d = document,
        s = d.createElement('script')
      s.src = 'https://blog-qjcbwxwmvd.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date())
      ;(d.head || d.body).appendChild(s)
    })()
  }, [router.asPath])

  return <div id="disqus_thread" />
}
