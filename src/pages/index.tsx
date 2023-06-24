import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Hero from 'components/Home/Hero'
import Banner from 'components/Home/Banner'
import Guide from 'components/Articles/Guide'
import Cards from 'components/Home/Cards'
import ApartmentRent from 'components/Articles/ApartmentRent'
import Faq from 'components/Articles/Faq'
import Posts from 'components/Posts'
import SearchBox from 'components/SearchBox'
import ApiClient from 'utils/ApiClient'
import { IPost, LocationType } from 'interfaces'
import { useStore } from 'store'
import { scrollToPrevPosition } from 'utils/scrollUtils'

const Home: NextPage<{
  posts: any
  totalPosts: number
  locations: LocationType[]
  propertyTypes: any
}> = ({ posts, totalPosts, locations, propertyTypes }) => {
  const { indexPosts, updateIndexPosts } = useStore()

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
      if (scrollPosition) {
        scrollToPrevPosition(parseInt(scrollPosition, 10), router.asPath)
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleScrollRestoration)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleScrollRestoration)
    }
  }, [router])

  const reHydratePosts = () => {
    const missingElements = posts.filter((elementA: IPost) => {
      return !indexPosts.some((elementB) => {
        return elementB.id === elementA.id
      })
    })

    if (missingElements.length) {
      indexPosts.unshift(...missingElements)
      if (indexPosts.length >= 10) indexPosts.splice(-missingElements.length)
    }
  }

  useEffect(() => {
    if (!indexPosts.length) updateIndexPosts(posts)
    else reHydratePosts()
  }, [posts])

  return (
    <div className="bg-gray-50 md:bg-white">
      <Head>
        <title>
          شقق للايجار ✔️ بيوت للبيع ✔️ بوشملان دليل عقارات الكويت #1
        </title>
        <meta
          name="description"
          content="شقق للإيجار في الكويت ✔️ بيوت اراضي عقارات للبيع ✔️ من المالك مباشرة وبدون عمولة ✔️ مجاني وسهل الإستخدام ✚ 6,000 إعلان عقار جديد في بو شملان الدليل العقاري"
        />
      </Head>
      <div className="h-[calc(100vh_-_8rem)] md:h-[calc(100vh_-_6rem)] md:mb-10 overflow-hidden flex flex-col justify-between bg-custom-white-lighter">
        <div>
          <Hero />
          <SearchBox locations={locations} propertyTypes={propertyTypes} />
        </div>
        <Banner />
      </div>
      <Posts totalPosts={totalPosts} />
      <Guide />
      <Cards />
      <div className="bg-primary grid gap-8 py-8">
        <ApartmentRent />
        <Faq bgPrimary textDark={false} />
      </div>
    </div>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  try {
    const response = await ApiClient({
      method: 'GET',
      url: '/post/get-many?limit=10&offset=0'
    })

    const responseLocations = await ApiClient({
      method: 'GET',
      url: '/locations'
    })

    return {
      props: {
        posts: response.data.posts ? response.data?.posts : [],
        totalPosts: response.data?.totalPosts ? response.data?.totalPosts : 0,
        locations: responseLocations.data?.locations || null,
        propertyTypes: responseLocations.data?.propertyTypes || null
      },
      revalidate: 60
    }
  } catch (error) {
    /* empty */
  }

  return {
    props: {}
  }
}

export default Home
