import React from 'react'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-2">
      <button
        type="submit"
        className="box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
      >
        <p className="inline-block text-sm md:text-base text-start light">
          {title}
        </p>
      </button>
      <div className="overflow-hidden text-start text-sm md:text-base">
        {content}
      </div>
    </div>
  )
}

export default Accordion
