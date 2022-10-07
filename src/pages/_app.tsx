import React from 'react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useCreateStore, StoreProvider } from '../store'

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
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </StoreProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
