import type { NextPage } from 'next'

import SearchBox from 'components/SearchBox'
import Hero from 'components/Home/Hero'
import Banner from 'components/Home/Banner'
import Guide from 'components/Articles/Guide'
import Cards from 'components/Home/Cards'
import ApartmentRent from 'components/Articles/ApartmentRent'
import Faq from 'components/Articles/Faq'
import Posts from 'components/Posts'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <SearchBox />
      <Banner />
      <Posts />
      <Guide />
      <Cards />
      <ApartmentRent />
      <Faq bgPrimary />
    </>
  )
}

export default Home
