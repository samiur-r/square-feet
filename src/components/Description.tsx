import React from 'react'

const Description: React.FC<{
  value?: string
  light?: boolean
  textBlack?: boolean
  children?: React.ReactNode
}> = ({ value, light, textBlack, children }) => {
  return (
    <p
      // eslint-disable-next-line prettier/prettier, no-nested-ternary
      className={`${light ? 'text-white' : (textBlack ? 'text-black' : 'text-custom-gray')} text-sm md:text-lg`}
    >
      {value || children}
    </p>
  )
}

export default Description
