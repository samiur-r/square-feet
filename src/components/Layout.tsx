import React from 'react'
import Head from 'next/head'

import Nav from './Nav'
import Footer from './Footer'
// import Breadcrumbs from './Breadcrumbs'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Boshamlan</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,minimum-scale=0.5, maximum-scale=5.0"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="fonts/DroidKufi-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="fonts/DroidKufi-Bold.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Nav />
      <div className="h-20 md:h-24" />
      {/* <Breadcrumbs /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
