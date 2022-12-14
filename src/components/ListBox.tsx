import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

interface OptType {
  id: number
  title: string
}

interface ListProps {
  selectedOpt: OptType | undefined
  placeholder?: string
  options: Array<OptType>
  isFloatingLabel?: boolean
  showFilterIcon?: boolean
  bgGray?: boolean
}

const List: React.FC<ListProps> = ({
  selectedOpt,
  placeholder,
  options,
  isFloatingLabel,
  showFilterIcon,
  bgGray
}) => {
  const [selected, setSelected] = useState<OptType | undefined>(selectedOpt)

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="relative dir-rtl">
          {isFloatingLabel && (
            <span
              className={`${
                open || selected ? '-top-2.5 mx-3 text-xs px-1' : 'top-3'
              } 
							${open ? 'text-primary' : 'text-custom-gray'}
							${
                bgGray ? 'bg-custom-gray' : 'bg-white'
              } pointer-events-none transition-all duration-300 absolute z-10 mx-4`}
            >
              {placeholder}
            </span>
          )}
          <Listbox.Button
            type="button"
            className={`${
              bgGray ? ' rounded-full md:rounded-lg' : ' rounded-lg'
            } ${
              open ? 'border-primary' : 'border-custom-gray-border'
            } bg-white flex justify-between items-center py-2.5 md:py-3.5 px-4 relative w-full cursor-text border shadow-sm focus:outline-none text-base text-custom-gray`}
          >
            <span className="flex gap-3 items-center w-full">
              <span className={`${!showFilterIcon && 'hidden'}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="blue"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              </span>
              <span className="truncate">{selected?.title}</span>
            </span>
            <span className="pointer-events-none flex items-center pr-2">
              {open ? (
                <ChevronUpIcon
                  className="h-7 w-7 text-custom-gray"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-7 w-7 text-custom-gray"
                  aria-hidden="true"
                />
              )}
            </span>
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-20 mt-3 max-h-60 w-full overflow-auto rounded-lg bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={`${
                    selected?.id === option.id && 'bg-primary-lighter'
                  } relative cursor-pointer hover:bg-primary-lighter transition-all duration-500 select-none py-2 px-3`}
                  value={option}
                >
                  <span className="block text-base truncate font-bold text-primary">
                    {option.title}
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

export default List
