import React from 'react'
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
  const adminPanel = !!router.route.startsWith('/admin')
  const getLayout = adminPanel
    ? (
        page: any
        // eslint-disable-next-line react/no-children-prop
      ) => <AdminLayout children={page} />
    : (
        page: any
        // eslint-disable-next-line react/no-children-prop
      ) => <Layout children={page} />

  return (
    <Provider createStore={createStore}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}

export default MyApp
