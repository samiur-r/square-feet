/* eslint-disable @typescript-eslint/no-unused-vars */
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
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
  totalPosts: number
  locations: LocationType[]
  propertyTypes: any
}> = ({ totalPosts, locations, propertyTypes }) => {
  const router = useRouter()

  const { scrollYTo, scrollPosition, updateScrollYTo, updateScrollPosition } =
    useStore()
  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    const handleRouteChange = () => {
      updateScrollPosition(window.scrollY)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      updateScrollYTo(false)
    }
  }, [])

  useEffect(() => {
    if (scrollYTo) {
      scrollToPrevPosition(scrollPosition, setShowPage)
    } else setShowPage(true)
  }, [])

  return (
    <div
      className={`${
        showPage ? 'opacity-1' : 'opacity-0'
      } bg-gray-50 md:bg-white`}
    >
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
      {/* <div ref={scroll as LegacyRef<HTMLDivElement>} /> */}
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
