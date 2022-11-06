import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

import { LocationType } from 'intefaces'

interface AutoCompleteProps {
  locations: LocationType[]
  isHomePage?: boolean
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  locations,
  isHomePage
}) => {
  const [selected, setSelected] = useState(
    isHomePage
      ? {
          title: 'اكتب-المنطقه للبحث'
        }
      : undefined
  )

  const [query, setQuery] = useState('')

  const filteredLocations =
    query === ''
      ? locations
      : locations.filter((location) =>
          location.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="dir-rtl w-full">
      <Combobox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div>
            {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
            <>
              <div
                className={`${
                  isHomePage ? 'bg-gray-100' : 'bg-white'
                } flex py-3 px-2 gap-2 items-center border border-gray-300 w-full h-full cursor-default overflow-hidden rounded-lg text-left outline-none`}
              >
                {isHomePage && (
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="blue"
                      className="w-5 h-5 opacity-70"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                )}
                <Combobox.Button className="w-full h-8" as="div">
                  <Combobox.Input
                    id="location"
                    className="peer w-full bg-inherit h-full text-base leading-5 text-gray-500 outline-none"
                    placeholder=" "
                    // @ts-ignore
                    displayValue={(location) => location?.title}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  {!isHomePage && (
                    <label
                      htmlFor="location"
                      className="absolute cursor-text text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
                    >
                      المنطقه
                    </label>
                  )}
                </Combobox.Button>
                <Combobox.Button className="flex items-center">
                  {open ? (
                    <ChevronUpIcon
                      className="h-7 w-7 text-gray-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-7 w-7 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="z-20 bg-white absolute pr-2 overflow-y-scroll mt-5 md:mt-1 left-0 max-h-80 w-full rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredLocations.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      لا توجد منطقه بهذا الاسم
                    </div>
                  ) : (
                    <>
                      {isHomePage && (
                        <Combobox.Option
                          className="relative cursor-default select-none"
                          value="all"
                        >
                          <span className="block text-base truncate hover:bg-gray-100 text-black font-bold p-2 cursor-pointer">
                            {' '}
                            كل مناطق الكويت
                          </span>
                        </Combobox.Option>
                      )}
                      {filteredLocations.map((location) => (
                        <Combobox.Option
                          key={location.id}
                          className="relative cursor-default select-none"
                          value={
                            isHomePage || location.type === 'city'
                              ? location
                              : undefined
                          }
                        >
                          {isHomePage && location.type === 'city' && (
                            <span className="absolute left-5">
                              ({location.count})
                            </span>
                          )}
                          <span
                            className={`${
                              location.type === 'state' &&
                              'text-black font-bold'
                            } ${
                              location.type === 'city' && 'text-primary'
                            } hover:bg-gray-100 text-base block truncate p-2 cursor-pointer`}
                          >
                            {location.title}
                          </span>
                        </Combobox.Option>
                      ))}
                    </>
                  )}
                </Combobox.Options>
              </Transition>
            </>
          </div>
        )}
      </Combobox>
    </div>
  )
}

export default AutoComplete
