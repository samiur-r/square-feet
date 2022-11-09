import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

interface OptType {
  id: number
  title: string
}

interface SelectProps {
  placeholder: string
  options: Array<OptType>
}

const Select: React.FC<SelectProps> = ({ placeholder, options }) => {
  const [selected, setSelected] = useState<OptType | undefined>(undefined)
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-10 relative">
      <select
        required
        name="select"
        value={selected?.title}
        onChange={(e) => setSelected(JSON.parse(e.target.value))}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="block bg-gray-50 px-2.5 py-4 w-full text-base text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      >
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <option value="" selected disabled hidden />
        {options.map((opt) => (
          <option key={opt.id} value={JSON.stringify(opt)}>
            {opt.title}
          </option>
        ))}
      </select>
      <label
        htmlFor="select"
        className={`${
          selected ? '' : 'scale-100 -translate-y-1/2 top-1/2'
        } absolute bg-white pointer-events-none cursor-text text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 px-1 peer-focus:text-blue-600 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1`}
      >
        {placeholder}
      </label>
      <div className="absolute h-full flex items-center left-3 top-0">
        {open ? (
          <ChevronUpIcon className="h-7 w-7 text-gray-400" aria-hidden="true" />
        ) : (
          <ChevronDownIcon
            className="h-7 w-7 text-gray-400"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  )
}

export default Select
