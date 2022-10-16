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
import { useCreateStore, StoreProvider } from 'store'

const MyApp = ({
  Component,
  pageProps
}: AppProps<{
  initialZustandState: { lastUpdate: number; light: boolean; count: number }
  dehydratedState: DehydratedState
}>) => {
  const createStore = useCreateStore(pageProps.initialZustandState)
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <StoreProvider createStore={createStore}>
          <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Layout>
        </StoreProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
