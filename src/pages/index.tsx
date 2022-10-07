import type { NextPage } from 'next'

import { initializeStore } from '../store'

const Home: NextPage = () => {
  return <div className="text-4xl">Boshamlan</div>
}

export default Home

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
// You will not see this while in development mode though.
export function getStaticProps() {
  const zustandStore = initializeStore()
  return {
    props: {
      // the "stringify and then parse again" piece is required as next.js
      // isn't able to serialize it to JSON properly
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState()))
    }
  }
}
