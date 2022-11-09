/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import Image from 'next/image'

import FilterModal from 'components/SearchBox/FilterModal'
import { LocationType } from 'intefaces'
import { PRICE_RANGES } from 'constant'

interface LocationsDropDownProps {
  locations: LocationType[]
  purposes: Array<{ id: number; title: string }>
  propertyTypes: Array<{ id: number; title: string }>
}

const LocationsDropDown: React.FC<LocationsDropDownProps> = ({
  locations,
  propertyTypes,
  purposes
}) => {
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

  return (
    <div className="container max-w-4xl">
      <div className="py-4 px-2 flex items-center gap-3 md:shadow-md md:rounded-md">
        <div className="md:hidden w-2/12 flex items-center">
          <span className="sr-only">Company Logo</span>
          <Image
            width={35}
            height={35}
            src="/images/mobile-search-logo.svg"
            alt="logo"
          />
        </div>
        <div className="w-1/12">
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
        <div className="dir-rtl w-9/12">
          <input
            type="text"
            name="location"
            placeholder="اكتب المنطقه للبحث"
            className="text-lg text-gray-500 w-full outline-none"
          />
        </div>
      </div>
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

export default LocationsDropDown
