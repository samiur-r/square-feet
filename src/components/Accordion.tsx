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
      <div className="flex gap-2">
        <span className="text-2xl">&#8226;</span>
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
      </div>
      <div className="overflow-hidden text-start pr-3.5">
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
