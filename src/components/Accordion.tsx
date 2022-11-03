import React from 'react'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col">
      <button
        type="button"
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
      >
        <p className="inline-block text-base font-semibold text-start light">
          {title}
        </p>
      </button>
      <div className="h-12 overflow-hidden text-start text-base">{content}</div>
    </div>
  )
}

export default Accordion
