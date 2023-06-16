import Description from 'components/Description'
import Title from 'components/Title'
import React from 'react'

interface HeaderProps {
  headline: string
  description: string
}

const Header: React.FC<HeaderProps> = ({ headline, description }) => {
  return (
    <div className="dir-rtl flex flex-col gap-5 items-start md:items-center text-start md:text-center w-full">
      <Title value={headline} />
      <Description value={description} />
    </div>
  )
}

export default Header
