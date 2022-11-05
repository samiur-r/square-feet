import { Fragment, useState, SetStateAction, Dispatch } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

import { LocationType } from 'intefaces'
import { PRICE_RANGES } from 'constant'
import FilterModal from 'components/SearchBox/FilterModal'

interface FilterAutoCompleteProps {
  locations: LocationType[]
  purposes: Array<{ id: number; title: string }>
  propertyTypes: Array<{ id: number; title: string }>
  handleIsLocationDropDownOpen: Dispatch<SetStateAction<boolean>>
}

const FilterAutoComplete: React.FC<FilterAutoCompleteProps> = ({
  locations,
  purposes,
  propertyTypes,
  handleIsLocationDropDownOpen
}) => {
  const [selected, setSelected] = useState(locations[0])
  const [query, setQuery] = useState('')

  const [propertyType, setPropertyType] = useState({
    id: propertyTypes[0].id,
    title: propertyTypes[0].title
  })
  const [purpose, setPurpose] = useState({
    id: purposes[2].id,
    title: purposes[2].title
  })
  const [priceRange, setPriceRange] = useState([
    PRICE_RANGES.min,
    PRICE_RANGES.max
  ])
  const [showFilterModal, setShowFilterModal] = useState(false)

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
          <div className="relative">
            {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
            <>
              {open
                ? handleIsLocationDropDownOpen(true)
                : handleIsLocationDropDownOpen(false)}
              <div className="flex py-3 px-2 gap-2 items-center relative w-full h-full cursor-default overflow-hidden rounded-lg bg-white text-left md:shadow-md outline-none">
                <Combobox.Button className="hidden md:flex items-center">
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
                <Combobox.Button className="w-full h-8" as="div">
                  <Combobox.Input
                    className="w-full h-full text-base leading-5 text-gray-900 outline-none"
                    // @ts-ignore
                    displayValue={(location) => location?.title}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </Combobox.Button>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="blue"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setShowFilterModal(true)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                    />
                  </svg>
                </div>
                <div className="md:hidden">
                  <Link href="/">
                    <a className="flex items-center">
                      <Image
                        width={40}
                        height={40}
                        src="/images/mobile-search-logo.svg"
                        alt="logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="fixed md:absolute pr-2 overflow-y-scroll mt-5 md:mt-1 left-0 h-screen w-screen md:max-h-80 md:w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredLocations.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      لا توجد منطقه بهذا الاسم
                    </div>
                  ) : (
                    <>
                      <Combobox.Option
                        className="relative cursor-default select-none"
                        value="all"
                      >
                        <span className="block text-base truncate hover:bg-gray-100 text-black font-bold p-2 cursor-pointer">
                          {' '}
                          كل مناطق الكويت
                        </span>
                      </Combobox.Option>
                      {filteredLocations.map((location) => (
                        <Combobox.Option
                          key={location.id}
                          className="relative cursor-default select-none"
                          value={location}
                        >
                          {location.type === 'city' && (
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
      <FilterModal
        purposes={purposes}
        propertyTypes={propertyTypes}
        selectedPurpose={purpose}
        selectedPropertyType={propertyType}
        selectedPriceRange={priceRange}
        showFilterModal={showFilterModal}
        setPurpose={setPurpose}
        setPropertyType={setPropertyType}
        setPriceRange={setPriceRange}
        setShowFilterModal={setShowFilterModal}
      />
    </div>
  )
}

export default FilterAutoComplete
