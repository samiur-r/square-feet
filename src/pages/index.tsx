import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Hero from 'components/Home/Hero'
import Banner from 'components/Home/Banner'
import Guide from 'components/Articles/Guide'
import Cards from 'components/Home/Cards'
import ApartmentRent from 'components/Articles/ApartmentRent'
import Faq from 'components/Articles/Faq'
import Posts from 'components/Posts'
import { Suspense } from 'react'

const DynamicSearchBox = dynamic(() => import('components/SearchBox'), {
  suspense: true
})

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 md:bg-white">
      <Hero />
      <Suspense fallback="Loading...">
        <DynamicSearchBox />
      </Suspense>
      <Banner />
      <Posts />
      <Guide />
      <Cards />
      <ApartmentRent />
      <Faq bgPrimary />
    </div>
  )
}

export default Home
