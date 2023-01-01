import type { NextPage } from 'next'

import Hero from 'components/Home/Hero'
import Banner from 'components/Home/Banner'
import Guide from 'components/Articles/Guide'
import Cards from 'components/Home/Cards'
import ApartmentRent from 'components/Articles/ApartmentRent'
import Faq from 'components/Articles/Faq'
import Posts from 'components/Posts'
import SearchBox from 'components/SearchBox'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 md:bg-white">
      <div className="h-[calc(100vh_-_8rem)] md:h-[calc(100vh_-_6rem)] md:mb-10 overflow-hidden flex flex-col justify-between bg-custom-white-lighter">
        <div>
          <Hero />
          <SearchBox />
        </div>
        <Banner />
      </div>
      <Posts />
      <Guide />
      <Cards />
      <div className="bg-primary grid gap-8 py-8">
        <ApartmentRent />
        <Faq bgPrimary textDark={false} />
      </div>
    </div>
  )
}

export default Home
