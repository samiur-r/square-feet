import React from 'react'

interface CTAProps {
  title: string
  backgroundColor: string
  Icon?: JSX.Element
  notFullRounded?: boolean
  handleClick?: () => void
}

const CTA: React.FC<CTAProps> = ({
  title,
  backgroundColor,
  Icon,
  notFullRounded,
  handleClick
}) => {
  return (
    <button
      type="submit"
      className={`${
        backgroundColor === 'primary' ? 'bg-primary' : 'bg-secondary'
      } ${
        notFullRounded ? 'rounded-lg' : 'rounded-full'
      } w-full md:w-auto flex justify-center items-center py-3 md:py-4 px-8 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300`}
      onClick={handleClick}
    >
      <span>{title}</span>
      {Icon && Icon}
    </button>
  )
}

export default CTA
