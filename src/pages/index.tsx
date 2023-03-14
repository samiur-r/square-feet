import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

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

const Home: NextPage<{
  posts: IPost[]
  totalPosts: number
  locations: LocationType[]
}> = ({ posts, totalPosts, locations }) => {
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
          <SearchBox locations={locations} />
        </div>
        <Banner />
      </div>
      <Posts posts={posts} totalPosts={totalPosts} />
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

    console.log(responseLocations.data)

    return {
      props: {
        posts: response.data.posts,
        totalPosts: response.data?.totalPosts ? response.data?.totalPosts : 0,
        locations: responseLocations.data?.locations || null
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
