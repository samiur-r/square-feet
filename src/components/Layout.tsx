import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className="text-2xl font-droidkufi">شقق للبيع</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}

export default Layout
