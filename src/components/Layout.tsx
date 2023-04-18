/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
// import { io, Socket } from 'socket.io-client'

// import { useStore } from 'store'
// import config from 'config'
import Nav from './Nav'
import Footer from './Footer'
import Toast from './Toast'

const footerPages = ['/', '/agencies', '/agent/[id]']

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter()
  // const { user } = useStore()
  const [showFooter, setShowFooter] = useState(false)
  // const socket: Socket = io(config.socketUrl)

  useEffect(() => {
    if (pathname && footerPages.includes(pathname)) setShowFooter(true)
    else setShowFooter(false)
  }, [pathname])

  // useEffect(() => {
  //   socket.on('userBlocked', (data) => {
  //     if (user && data && data.user === user.phone) {
  //       Router.push('/logout')
  //     }
  //   })
  // }, [])

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
