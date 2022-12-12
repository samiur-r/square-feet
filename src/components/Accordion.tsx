import React from 'react'
import Description from './Description'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
  textDark?: boolean
}

const Accordion: React.FC<AccordionProps> = ({ title, content, textDark }) => {
  return (
    <div className="flex flex-col gap-2">
      <button
        type="submit"
        className="box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
      >
        <span className="inline-block text-start light">
          <Description
            value={title as string}
            light={!textDark}
            textBlack={textDark}
          />
        </span>
      </button>
      <div className="overflow-hidden text-start">
        <Description
          value={content as string}
          light={!textDark}
          textBlack={textDark}
        />
      </div>
    </div>
  )
}

export default Accordion
