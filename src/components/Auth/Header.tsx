import React from 'react'

interface HeaderProps {
  headline: string
  description: string
}

const Header: React.FC<HeaderProps> = ({ headline, description }) => {
  return (
    <div className="dir-rtl flex flex-col gap-5 items-start md:items-center w-full">
      <h1 className="text-lg font-bold">{headline}</h1>
      <p className="md:text-center text-gray-400">{description}</p>
    </div>
  )
}

export default Header
