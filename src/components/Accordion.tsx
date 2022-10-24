import React, { useRef, useState } from 'react'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false)
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef<any>(null)

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    setRotate(
      active
        ? 'transform duration-700 ease'
        : 'transform duration-700 ease rotate-180'
    )
  }

  return (
    <div className="flex flex-col">
      <button
        type="button"
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-footnote text-start light">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`${rotate} inline-block w-6 h-6`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        ref={contentSpace}
        className={`${
          active ? 'h-12' : 'h-0'
        } overflow-auto transition-max-height duration-700 ease-in-out overflow-hidden text-start`}
      >
        {content}
      </div>
    </div>
  )
}

export default Accordion
