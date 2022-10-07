import React from 'react'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState
} from '@tanstack/react-query'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp = ({
  Component,
  pageProps
}: AppProps<{ dehydratedState: DehydratedState }>) => {
  const [queryClient] = React.useState(() => new QueryClient())

  ;<QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
}

export default MyApp
