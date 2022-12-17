import React from 'react'

const Title: React.FC<{ value: string; light?: boolean }> = ({
  value,
  light
}) => {
  return (
    <h3
      className={`${
        light && 'text-white'
      } font-DroidArabicKufiBold font-bold text-lg md:text-xl`}
    >
      {value}
    </h3>
  )
}

export default Title
