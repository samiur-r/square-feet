import React from 'react'
import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import '../styles/globals.css'
import Layout from 'components/Layout'
import { useCreateStore, Provider, StoreState } from 'store'

const MyApp = ({
  Component,
  pageProps
}: AppProps<{
  initialZustandState: StoreState
  dehydratedState: DehydratedState
}>) => {
  const [queryClient] = React.useState(() => new QueryClient())
  const createStore = useCreateStore(pageProps.initialZustandState)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider createStore={createStore}>
          <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
