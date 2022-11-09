import React from 'react'

interface CTAProps {
  title: string
  backgroundColor: string
  Icon?: JSX.Element
  fullWidth?: boolean
}

const CTA: React.FC<CTAProps> = ({
  title,
  backgroundColor,
  Icon,
  fullWidth
}) => {
  return (
    <button
      type="button"
      className={`${
        backgroundColor === 'primary' ? 'bg-primary' : 'bg-secondary'
      } ${
        fullWidth && 'w-full md:w-auto mx-10 md:mx-auto'
      } text-white font-medium py-3 px-8 md:rounded-lg rounded-full flex justify-center items-center`}
    >
      <span>{title}</span>
      {Icon && Icon}
    </button>
  )
}

export default CTA
