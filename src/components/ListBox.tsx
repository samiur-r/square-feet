import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

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
                open || selected
                  ? '-top-2.5 mx-3 text-xs px-1'
                  : 'top-3 md:top-4'
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
            } bg-white flex justify-between items-center py-2.5 md:py-3.5 px-3.5 relative w-full cursor-text border shadow-sm focus:outline-none text-base text-custom-gray`}
          >
            <span className="flex gap-1 items-center w-full">
              <span
                className={`${!showFilterIcon && 'hidden'} flex items-center`}
              >
                <Image
                  src="/images/filter-icon.svg"
                  width={24}
                  height={24}
                  alt="filter"
                />
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
            <Listbox.Options className="absolute z-20 mt-3 w-full overflow-auto rounded-lg bg-white p-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={`${
                    selected?.id === option.id && 'bg-primary-lighter'
                  } relative cursor-pointer hover:bg-primary-lighter rounded-lg transition-all duration-500 select-none py-2 px-3`}
                  value={option}
                >
                  <span className="block text-base truncate font-DroidArabicKufiBold text-primary">
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
