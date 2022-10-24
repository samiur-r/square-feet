import type { NextPage } from 'next'

import SelectBox from 'components/SearchBox'
import Hero from 'components/Home/Hero'
import Banner from 'components/Home/Banner'
import Guide from 'components/Articles/Guide'
import Cards from 'components/Home/Cards'
import ApartmentRent from 'components/Articles/ApartmentRent'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <SelectBox />
      <Banner />
      <Guide />
      <Cards />
      <ApartmentRent />
    </>
  )
}

export default Home
