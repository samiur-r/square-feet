import type { NextPage } from 'next'

import SelectBox from 'components/SearchBox'
import Hero from 'components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className="container max-w-6xl">
        <SelectBox />
      </div>
    </>
  )
}

export default Home
