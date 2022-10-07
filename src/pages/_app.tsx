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

const MyApp = ({
  Component,
  pageProps
}: AppProps<{ dehydratedState: DehydratedState }>) => {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
