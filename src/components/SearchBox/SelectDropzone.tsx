import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'

import useComponentVisible from 'hooks/useComponentVisible'
import useWindowSize from 'hooks/useWindowSize'
import { LocationType } from 'intefaces'
import useDebounce from 'hooks/useDebounce'
import LocationsModal from './LocationsModal'

interface SelectDropZoneProps {
  locations: LocationType[]
  handleSetLocationsSelected: (locations: LocationType[]) => void
  setShowFilterModal: Dispatch<SetStateAction<boolean>>
}

const SelectDropZone: React.FC<SelectDropZoneProps> = ({
  locations,
  handleSetLocationsSelected,
  setShowFilterModal
}) => {
  const {
    ref: locationRef,
    isComponentVisible: isLocationDropdownVisible,
    setIsComponentVisible: setIsLocationDropdownVisible
  } = useComponentVisible(false)

  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const [locationsSelected, setLocationsSelected] = useState<LocationType[]>([])
  const [filteredLocations, setFilteredLocations] = useState(locations)
  const [locationSearchedValue, setLocationSearchedValue] = useState('')
  const [showLocationsModal, setShowLocationsModal] = useState(false)
  const debouncedLocationSearchedVal = useDebounce(locationSearchedValue, 500)

  const { width: windowWidth } = useWindowSize()

  const toggleLocationDropDown = () => {
    setShowLocationDropdown(!showLocationDropdown)
    setIsLocationDropdownVisible(!showLocationDropdown)
  }

  useEffect(() => {
    setShowLocationDropdown(isLocationDropdownVisible)
  }, [isLocationDropdownVisible])

  const removeLocation = (id: number) => {
    setLocationsSelected(
      locationsSelected.filter((location: { id: number }) => location.id !== id)
    )
    setLocationSearchedValue('')
  }

  const resetLocation = () => {
    setLocationsSelected([])
    toggleLocationDropDown()
    setLocationSearchedValue('')
  }

  const handleLocationChanged = (id: number, title: string, type: string) => {
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
    toggleLocationDropDown()
    setLocationSearchedValue('')
  }

  const filterLocations = () => {
    if (debouncedLocationSearchedVal === '') setFilteredLocations(locations)
    else {
      setFilteredLocations(
        filteredLocations.filter((location) =>
          location.title.includes(debouncedLocationSearchedVal)
        )
      )
    }
  }

  const handleSearchIconClick = () => {
    toggleLocationDropDown()
  }

  const handleSetShowLocationsModal = (show: boolean) => {
    if ((windowWidth as number) < 768) setShowLocationsModal(show)
  }

  useEffect(() => {
    filterLocations()
  }, [debouncedLocationSearchedVal])

  useEffect(() => {
    handleSetLocationsSelected(locationsSelected)
  }, [handleSetLocationsSelected, locationsSelected])

  return (
    <>
      <div
        className={`${
          locationsSelected.length
            ? 'pb-2 rounded-md'
            : 'rounded-full md:rounded-lg'
        } cursor-text border border-gray-400 text-gray-600 md:bg-stone-100 focus:outline-none font-medium text-center`}
      >
        <div className="flex items-center justify-between p-4 md:p-3">
          <div>
            {showLocationDropdown ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => {
                  toggleLocationDropDown()
                  handleSetShowLocationsModal(true)
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  toggleLocationDropDown()
                  handleSetShowLocationsModal(true)
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div>
              <input
                type="text"
                dir="rtl"
                placeholder="اكتب المنطقه للبحث"
                value={locationSearchedValue}
                className="md:bg-stone-100 text-md md:text-lg focus:outline-none w-full"
                onClick={() => {
                  toggleLocationDropDown()
                  handleSetShowLocationsModal(true)
                }}
                onChange={(e) => setLocationSearchedValue(e.target.value)}
              />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="blue"
                className="w-5 h-5"
                onClick={() => {
                  handleSearchIconClick()
                  handleSetShowLocationsModal(true)
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`${
            locationsSelected.length ? 'mx-5 my-1' : 'm-0'
          } flex flex-wrap justify-end`}
        >
          {locationsSelected.map((location: LocationType) => (
            <div
              key={location.id}
              className="rounded-lg mt-2 ml-2 py-1 px-2 text-white bg-[#6598CB] text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease"
            >
              {location.title}
              <button
                type="button"
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
      <div
        ref={locationRef}
        className={`${
          showLocationDropdown && 'md:block'
        } hidden z-10 w-80 mt-4 bg-white rounded-md divide-y divide-gray-100 drop-shadow-[0px_0px_3px_rgb(156,163,175)] absolute`}
      >
        <ul
          className="m-0 p-0 max-h-64 overflow-y-scroll text-md font-bold text-[#6E9ECE] tracking-wider bg-white cursor-pointer rounded-md"
          aria-labelledby="dropdownDefault"
        >
          <button
            type="button"
            className="flex w-full justify-end px-4 py-2 m-0 hover:bg-gray-100 text-black font-bold"
            onClick={resetLocation}
          >
            كل مناطق الكويت
          </button>
          {filteredLocations.map((location) => (
            <button
              type="button"
              key={location.id}
              className={`${
                location.type === 'state' && 'text-black font-bold'
              } relative w-full flex justify-end px-4 py-2 m-0 hover:bg-gray-100`}
              onClick={() =>
                handleLocationChanged(
                  location.id,
                  location.title,
                  location.type
                )
              }
            >
              {location.type === 'city' && (
                <span className="absolute left-5">({location.count})</span>
              )}
              {location.title}
            </button>
          ))}
        </ul>
      </div>
      {showLocationsModal && (
        <LocationsModal
          filteredLocations={filteredLocations}
          handleLocationChanged={handleLocationChanged}
          setLocationSearchedValue={setLocationSearchedValue}
          resetLocation={resetLocation}
          setShowLocationsModal={handleSetShowLocationsModal}
          setShowFilterModal={setShowFilterModal}
        />
      )}
    </>
  )
}

export default SelectDropZone
