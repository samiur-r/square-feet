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
import Router from 'next/router'
import { Combobox, Transition } from '@headlessui/react'
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

import { LocationType } from 'interfaces'
import FilterModal from 'components/SearchBox/FilterModal'
import { useStore } from 'store'

interface FilterAutoCompleteProps {
  locations: LocationType[]
  handleIsfilterComboboxOpen: Dispatch<SetStateAction<boolean>>
  handleLocationChanged?: (
    id: number,
    title: string,
    state_id: number | null
  ) => void
  showOptions?: boolean
}

const FilterAutoComplete: React.FC<FilterAutoCompleteProps> = ({
  locations,
  handleIsfilterComboboxOpen,
  handleLocationChanged,
  showOptions
}) => {
  const {
    locationsSelected: lastSelectedLocations,
    propertyTypeSelected,
    categorySelected,
    updateCanFetchPosts,
    setLocationsSelected: updateLocationsSelected
  } = useStore()

  const [selected, setSelected] = useState(undefined)
  const [query, setQuery] = useState('')
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [firstRender, setFirstRender] = useState(true)

  const comboBtn = useRef<HTMLButtonElement>(null)

  const [locationsSelected, setLocationsSelected] = useState<LocationType[]>([])

  const removeLocation = (id: number) => {
    setLocationsSelected(
      // @ts-ignore
      locationsSelected.filter((location: { id: number }) => location.id !== id)
    )
  }

  const redirectToFilter = (locationTitle: string) => {
    let url = `${categorySelected?.title}`

    if (propertyTypeSelected && propertyTypeSelected.id !== 0)
      url = `${url}/${propertyTypeSelected?.title}`

    url = `${url}/${locationTitle.replace(/\s+/g, '-')}`

    Router.push(url)
  }

  useEffect(() => {
    if (!showOptions && !firstRender) {
      if (
        locationsSelected &&
        locationsSelected.length <= 1 &&
        locationsSelected[0]
      ) {
        redirectToFilter(locationsSelected[0].title as string)
      }

      updateCanFetchPosts(true)
      updateLocationsSelected(locationsSelected)
      Router.push('/search')
    }
  }, [locationsSelected])

  useEffect(() => {
    if (!showOptions && firstRender) {
      setLocationsSelected(lastSelectedLocations)
    }
  }, [lastSelectedLocations])

  const handleChangeLocation = (
    id: number,
    title: string,
    stateId: number | null
  ) => {
    if (firstRender) setFirstRender(false)
    if (stateId === null)
      setLocationsSelected([{ id, title, state_id: stateId }])
    else {
      const isExists = locationsSelected.find(
        // @ts-ignore
        (location: { id: number }) => location.id === id
      )

      if (isExists) return

      const onlyCities = locationsSelected.filter(
        // @ts-ignore
        (location: { state_id: number | null }) => location.state_id !== null
      )

      setLocationsSelected([...onlyCities, { id, title, state_id: stateId }])
    }
  }

  const handleInputFocus = () => comboBtn.current?.click()

  useEffect(() => {
    if (showOptions) handleInputFocus()
  }, [showOptions])

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
      if (node !== null && showOptions) {
        setTimeout(() => {
          window.scrollTo({
            top: node.getBoundingClientRect().top,
            behavior: 'smooth'
          })
        }, 100)
      }
    },
    []
  )

  const handleLocationChoosed = (location: LocationType) => {
    handleIsfilterComboboxOpen(false)
    if (handleLocationChanged)
      // @ts-ignore
      handleLocationChanged(location.id, location.title, location.state_id)
    // @ts-ignore
    else handleChangeLocation(location.id, location.title, location.state_id)
  }

  useEffect(() => {
    if (!showOptions) handleIsfilterComboboxOpen(isOpen)
  }, [isOpen])

  const filteredLocations =
    query === ''
      ? locations
      : locations.filter((location) =>
          // @ts-ignore
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
              <div className="flex flex-col py-1 md:py-3 px-2 gap-2 relative cursor-default overflow-hidden rounded-lg text-left md:shadow-md outline-none">
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
                      className={`${
                        showOptions ? 'px-7' : 'px-2'
                      } w-full h-full text-base leading-5 text-black outline-none`}
                      placeholder="اكتب المنطقه للبحث"
                      onChange={(event) => setQuery(event.target.value)}
                      onClick={() => setIsOpen(!isOpen)}
                      onBlur={() => setIsOpen(false)}
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
                        // @ts-ignore
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
                <Combobox.Options className="fixed md:absolute pr-2 overflow-y-scroll mt-1 left-0 h-screen w-screen md:max-h-96 md:w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredLocations &&
                  filteredLocations.length === 0 &&
                  query !== '' ? (
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
                        <span
                          onClick={() =>
                            handleLocationChoosed({
                              title: 'كل مناطق الكويت',
                              state_id: null
                            })
                          }
                          className="block text-base truncate hover:bg-gray-100 text-black font-DroidArabicKufiBold py-2 px-4 cursor-pointer"
                        >
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
                          {location.state_id !== null && (
                            <span className="absolute left-5 top-1 text-primary">
                              ({location.count})
                            </span>
                          )}
                          <span
                            className={`${
                              location.state_id === null && 'text-black'
                            } ${
                              location.type !== null && 'text-primary'
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
          showFilterModal={showFilterModal}
          setShowFilterModal={setShowFilterModal}
          handleIsfilterComboboxOpen={handleIsfilterComboboxOpen}
        />
      </Suspense>
    </div>
  )
}

export default FilterAutoComplete
