import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { scrollToPrevPosition } from 'utils/scrollUtils'

const useScrollRestoration = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      // Store the scroll position
      const scrollPosition = window.pageYOffset
      sessionStorage.setItem(router.asPath, scrollPosition.toString())
    }

    const handleScrollRestoration = () => {
      // Restore the scroll position
      const scrollPosition = sessionStorage.getItem(router.asPath)
      if (scrollPosition)
        scrollToPrevPosition(parseInt(scrollPosition, 10), router.asPath)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleScrollRestoration)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleScrollRestoration)
    }
  }, [router])

  return null
}

export default useScrollRestoration
