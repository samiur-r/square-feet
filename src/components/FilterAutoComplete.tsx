import {
  Fragment,
  useState,
  useRef,
  SetStateAction,
  Dispatch,
  useEffect,
  Suspense,
  LegacyRef,
  useCallback
} from 'react'
import { Combobox, Transition } from '@headlessui/react'
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

import { LocationType } from 'interfaces'
import { PRICE_RANGES } from 'constant'
import FilterModal from 'components/SearchBox/FilterModal'

interface FilterAutoCompleteProps {
  locations: LocationType[]
  purposes: Array<{ id: number; title: string }>
  propertyTypes: Array<{ id: number; title: string }>
  handleIsfilterComboboxOpen: Dispatch<SetStateAction<boolean>>
  handleLocationChanged?: (id: number, title: string, type: string) => void
  showOptions?: boolean
}

const FilterAutoComplete: React.FC<FilterAutoCompleteProps> = ({
  locations,
  purposes,
  propertyTypes,
  handleIsfilterComboboxOpen,
  handleLocationChanged,
  showOptions
}) => {
  const [selected, setSelected] = useState(locations[0])
  const [query, setQuery] = useState('')
  const [showFilterModal, setShowFilterModal] = useState(false)
  // const [blurInput, setBlurInput] = useState(true)
  // const [focusInput, setFocusInput] = useState(true)

  const isOpenRef = useRef<HTMLInputElement>(null)
  const comboBtn = useRef<HTMLButtonElement>(null)

  const [locationsSelected, setLocationsSelected] = useState<LocationType[]>([])

  const removeLocation = (id: number) => {
    setLocationsSelected(
      locationsSelected.filter((location: { id: number }) => location.id !== id)
    )
  }

  const handleChangeLocation = (id: number, title: string, type: string) => {
    if (type === 'state') setLocationsSelected([{ id, title, type }])
    else {
      const isExists = locationsSelected.find(
        (location: { id: number }) => location.id === id
      )

      if (isExists) return

      const onlyCities = locationsSelected.filter(
        (location: { type: string }) => location.type === 'city'
      )
      setLocationsSelected([...onlyCities, { id, title, type }])
    }
  }

  const handleInputFocus = () => comboBtn.current?.click()

  useEffect(() => {
    if (showOptions) handleInputFocus()
  }, [showOptions])

  // const onInputFocus = () => {
  //   // if (blurInput) {
  //   //   e.target.blur()
  //   //   setBlurInput(false)
  //   // }
  // }

  // const onInputClick = () => {
  //   // if (focusInput) {
  //   //   handleInputFocus()
  //   //   setFocusInput(false)
  //   // }
  // }

  const scroll = useCallback(
    (
      node: {
        getBoundingClientRect: () => {
          (): unknown
          new (): unknown
          top: number | undefined
        }
      } | null
    ) => {
      if (node !== null) {
        window.scrollTo({
          top: node.getBoundingClientRect().top,
          behavior: 'smooth'
        })
      }
    },
    []
  )

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

  const handleLocationChoosed = (location: LocationType) => {
    handleIsfilterComboboxOpen(false)
    if (handleLocationChanged)
      handleLocationChanged(location.id, location.title, location.type)
    else handleChangeLocation(location.id, location.title, location.type)
  }

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
    <div className="dir-rtl w-full" ref={scroll as LegacyRef<HTMLDivElement>}>
      <Combobox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <input ref={isOpenRef} type="hidden" value={`${open}`} />
            {showOptions && (
              <>
                <div className="flex md:hidden items-center absolute z-10 right-3 top-3.5">
                  <ChevronRightIcon
                    className="h-9 w-9 text-black"
                    aria-hidden="true"
                    onClick={() => handleIsfilterComboboxOpen(false)}
                  />
                </div>
                <Combobox.Button
                  className="absolute top-5 left-7 z-10"
                  type="submit"
                >
                  <Image
                    src="/images/filter-icon-black.svg"
                    width={24}
                    height={24}
                    onClick={() => setShowFilterModal(true)}
                    alt="filter"
                  />
                </Combobox.Button>
              </>
            )}
            <div className="relative">
              <div className="flex flex-col py-3 px-2 gap-2 relative cursor-default overflow-hidden rounded-lg text-left md:shadow-md outline-none">
                <div className="flex gap-2 items-center relative">
                  <Combobox.Button
                    className="hidden md:flex items-center"
                    type="submit"
                    aria-label="dropdown"
                  >
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
                  </Combobox.Button>
                  <Combobox.Button
                    className="hidden"
                    ref={comboBtn}
                    type="submit"
                  />
                  <Combobox.Button className="w-full h-8" as="div" aria-hidden>
                    <Combobox.Input
                      // @ts-ignore
                      key={open}
                      className={`${
                        showOptions ? 'px-7' : 'px-2'
                      } w-full h-full text-base leading-5 text-custom-gray outline-none`}
                      placeholder="اكتب المنطقه للبحث"
                      onChange={(event) => setQuery(event.target.value)}
                      // onFocus={(e) => onInputFocus(e)}
                      // onClick={onInputClick}
                    />
                  </Combobox.Button>

                  {!showOptions && (
                    <>
                      <div className="hidden md:flex md:items-center md:w-7 md:h-7 relative cursor-pointer">
                        <Image
                          src="/images/filter-icon-black.svg"
                          layout="fill"
                          onClick={() => setShowFilterModal(true)}
                          alt="filter"
                        />
                      </div>
                      <div className="md:hidden w-10 h-10  relative">
                        <Image
                          src="/images/filter-icon-grey.svg"
                          layout="fill"
                          onClick={() => setShowFilterModal(true)}
                          alt="filter"
                        />
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
                    </>
                  )}
                </div>
                <div
                  className={`${
                    locationsSelected.length ? 'my-1' : 'm-0 hidden'
                  } flex flex-wrap justify-start`}
                >
                  {locationsSelected.map((location: LocationType) => (
                    <div
                      key={location.id}
                      className="rounded-lg mt-2 ml-2 py-1 px-2 border border-primary text-primary bg-primary-lighter text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease"
                    >
                      {location.title}
                      <button
                        type="submit"
                        className="bg-transparent hover focus:outline-none"
                        onClick={() => removeLocation(location.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 ml-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="fixed md:absolute pr-2 overflow-y-scroll mt-1 left-0 h-screen w-screen md:max-h-80 md:w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredLocations.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-custom-gray">
                      لا توجد منطقه بهذا الاسم
                    </div>
                  ) : (
                    <>
                      <Combobox.Option
                        className="relative cursor-default select-none"
                        value="all"
                        onClick={() => handleIsfilterComboboxOpen(false)}
                      >
                        <span className="block text-base truncate hover:bg-gray-100 text-black font-DroidArabicKufiBold py-2 px-4 cursor-pointer">
                          {' '}
                          كل مناطق الكويت
                        </span>
                      </Combobox.Option>
                      {filteredLocations.map((location) => (
                        <Combobox.Option
                          key={location.id}
                          className="relative cursor-default select-none"
                          value={location}
                          onClick={() => handleLocationChoosed(location)}
                        >
                          {location.type === 'city' && (
                            <span className="absolute left-5 top-1 text-primary">
                              ({location.count})
                            </span>
                          )}
                          <span
                            className={`${
                              location.type === 'state' && 'text-black'
                            } ${
                              location.type === 'city' && 'text-primary'
                            } hover:bg-gray-100 font-DroidArabicKufiBold text-base block truncate py-2 pr-4 cursor-pointer`}
                          >
                            {location.title}
                          </span>
                        </Combobox.Option>
                      ))}
                    </>
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </>
        )}
      </Combobox>
      <Suspense fallback="Loading...">
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
          handleIsfilterComboboxOpen={handleIsfilterComboboxOpen}
        />
      </Suspense>
    </div>
  )
}

export default FilterAutoComplete
