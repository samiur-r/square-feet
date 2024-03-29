/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import NextNProgress from 'nextjs-progressbar'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import Layout from 'components/Layout'
import { useCreateStore, Provider, StoreState } from 'store'
import AdminLayout from 'components/Admin/AdminLayout'

const MyApp = ({
  Component,
  pageProps,
  router
}: AppProps<{
  initialZustandState: StoreState
}>) => {
  const createStore = useCreateStore(pageProps.initialZustandState)

  const getLayout =
    router.pathname.includes('/admin') && router.pathname !== '/admin/login'
      ? (page: any) => <AdminLayout children={page} />
      : (page: any) => <Layout children={page} />

  return (
    <Provider createStore={createStore}>
      <NextNProgress options={{ showSpinner: false }} />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}

export default MyApp
