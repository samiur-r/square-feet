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
        backgroundColor === 'primary' ? 'bg-primary-700' : 'bg-secondary'
      } opacity-60 text-white font-medium py-3 px-10 h-14 md:rounded-lg rounded-full inline-flex items-center`}
    >
      <span>{title}</span>
      {Icon && Icon}
    </button>
  )
}

export default CTA
