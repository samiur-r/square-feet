import React from 'react'

const Title: React.FC<{ value: string; light?: boolean }> = ({
  value,
  light
}) => {
  return (
    <h3 className={`${light && 'text-white'} text-lg md:text-xl tracking-wide`}>
      {value}
    </h3>
  )
}

export default Title
