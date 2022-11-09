import React, { useState, useEffect } from 'react'

import useComponentVisible from 'hooks/useComponentVisible'

interface SelectPropertyTypeProps {
  propertyTypes: Array<{ title: string; id: number }>
  handleSetPropertyType: (id: number, title: string) => void
}

const SelectPropertyType: React.FC<SelectPropertyTypeProps> = ({
  propertyTypes,
  handleSetPropertyType
}) => {
  const {
    ref: propertyTypeRef,
    isComponentVisible: isPropertyTypeDropdownVisible,
    setIsComponentVisible: setIsPropertyTypeDropdownVisible
  } = useComponentVisible(false)

  const [showPropertyTypeDropdown, setShowPropertyTypeDropdown] =
    useState(false)

  const [propertyTypeSelected, setPropertyTypeSelected] = useState<{
    id: number
    title: string
  }>({ id: propertyTypes[0].id, title: propertyTypes[0].title })

  const togglePropertyTypeDropDown = () => {
    setShowPropertyTypeDropdown(!showPropertyTypeDropdown)
    setIsPropertyTypeDropdownVisible(!showPropertyTypeDropdown)
  }

  useEffect(() => {
    setShowPropertyTypeDropdown(isPropertyTypeDropdownVisible)
  }, [isPropertyTypeDropdownVisible])

  const handlePropertyTypeChange = (id: number, title: string) => {
    setPropertyTypeSelected({ id, title })
    handleSetPropertyType(id, title)
    togglePropertyTypeDropDown()
  }

  return (
    <div className="relative z-20">
      {/* eslint-disable-next-line */}
      <div
        className="flex justify-between relative w-full md:w-60 py-4 h-14 cursor-text px-5 border border-gray-400 text-gray-600 md:bg-stone-100 focus:outline-none font-medium rounded-full md:rounded-lg text-sm"
        onClick={togglePropertyTypeDropDown}
      >
        <div>
          {showPropertyTypeDropdown ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
          <div>{propertyTypeSelected.title}</div>
          <div>
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
          </div>
        </div>
      </div>
      <div
        ref={propertyTypeRef}
        className={`${
          showPropertyTypeDropdown ? 'block' : 'hidden'
        } z-10 w-full md:w-60 mt-4 bg-white rounded-md divide-y divide-gray-100 drop-shadow-[0px_0px_3px_rgb(156,163,175)] absolute`}
      >
        <div
          className="m-0 p-0 text-md font-bold text-primary tracking-wider bg-white cursor-pointer rounded-md"
          aria-labelledby="dropdownDefault"
        >
          {propertyTypes.map((type) => (
            <button
              type="button"
              key={type.id}
              className={`${
                propertyTypeSelected.title === type.title && 'bg-gray-200'
              } flex w-full justify-end px-4 py-2 m-0 hover:bg-gray-100`}
              onClick={() => handlePropertyTypeChange(type.id, type.title)}
            >
              {type.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectPropertyType
