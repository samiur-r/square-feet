import React from 'react'

import { LocationType } from 'intefaces'

interface LocationsModalProps {
  filteredLocations: LocationType[]
  handleLocationChanged: (id: number, title: string, type: string) => void
  setLocationSearchedValue: (title: string) => void
  resetLocation: () => void
  setShowLocationsModal: (show: boolean) => void
}

const LocationsModal: React.FC<LocationsModalProps> = ({
  filteredLocations,
  handleLocationChanged,
  setLocationSearchedValue,
  resetLocation,
  setShowLocationsModal
}) => {
  return (
    <div className="md:hidden absolute top-0 left-0 bg-white z-15 w-full h-full">
      <div className="flex justify-between items-center p-5 gap-3 shadow-md">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="blue"
            className="w-5 h-5 md:w-6 md:h-6 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <input
              type="text"
              dir="rtl"
              placeholder="اكتب المنطقه للبحث"
              className="md:bg-stone-100 text-md focus:outline-none"
              onChange={(e) => setLocationSearchedValue(e.target.value)}
            />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
              onClick={() => setShowLocationsModal(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="">
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
            } ${
              location.type === 'city' && 'text-primary-400'
            } relative w-full  flex justify-end px-4 py-2 m-0 hover:bg-gray-100`}
            onClick={() => {
              handleLocationChanged(location.id, location.title, location.type)
              setShowLocationsModal(false)
            }}
          >
            {location.type === 'city' && (
              <span className="absolute left-5">({location.count})</span>
            )}
            {location.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LocationsModal
