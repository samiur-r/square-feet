import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Nav from './Nav'
import Footer from './Footer'
import Toast from './Toast'

const footerPages = ['/', '/agencies', '/agent/[id]']

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter()
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    if (pathname && footerPages.includes(pathname)) setShowFooter(true)
    else setShowFooter(false)
  }, [pathname])

  return (
    <>
      <Head>
        <title>Boshamlan</title>
        <meta name="description" content="Boshamlan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
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
      <Toast />
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  )
}

export default Layout
