import React from 'react'

const Description: React.FC<{
  value?: string
  light?: boolean
  textBlack?: boolean
  children?: React.ReactNode
}> = ({ value, light, textBlack, children }) => {
  return (
    <p
      className={`${light ? 'text-white' : 'text-gray-500'} ${
        textBlack && 'text-black'
      } text-sm md:text-lg tracking-wide`}
    >
      {value || children}
    </p>
  )
}

export default Description
