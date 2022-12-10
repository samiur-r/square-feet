import React from 'react'

interface CTAProps {
  title: string
  backgroundColor: string
  Icon?: JSX.Element
  handleClick?: () => void
}

const CTA: React.FC<CTAProps> = ({
  title,
  backgroundColor,
  Icon,
  handleClick
}) => {
  return (
    <button
      type="submit"
      className={`${
        backgroundColor === 'primary' ? 'bg-primary' : 'bg-secondary'
      } max-w-xs w-full md:w-auto flex justify-center items-center py-4 px-8 text-white md:rounded-lg rounded-full opacity-80 hover:opacity-70 transition-opacity duration-500`}
      onClick={handleClick}
    >
      <span>{title}</span>
      {Icon && Icon}
    </button>
  )
}

export default CTA
