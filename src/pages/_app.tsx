import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from 'components/Layout'
import { useCreateStore, Provider, StoreState } from 'store'

const MyApp = ({
  Component,
  pageProps
}: AppProps<{
  initialZustandState: StoreState
}>) => {
  const createStore = useCreateStore(pageProps.initialZustandState)

  return (
    <Provider createStore={createStore}>
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
