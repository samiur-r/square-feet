import React from 'react'

interface CTAProps {
  title: string
  backgroundColor: string
  Icon?: JSX.Element
}

const CTA: React.FC<CTAProps> = ({ title, backgroundColor, Icon }) => {
  return (
    <button
      type="button"
      className={`${
        backgroundColor === 'primary' ? 'bg-primary' : 'bg-secondary'
      } text-white opacity-80 font-medium py-3 px-8 md:rounded-lg rounded-full inline-flex items-center`}
    >
      <span>{title}</span>
      {Icon && Icon}
    </button>
  )
}

export default CTA
