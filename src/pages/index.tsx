import type { NextPage } from 'next'

import SelectBox from 'components/SearchBox'
import Hero from 'components/Hero'
import Banner from 'components/Banner'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <SelectBox />
      <Banner />
    </>
  )
}

export default Home
