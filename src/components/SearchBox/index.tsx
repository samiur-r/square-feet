import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import ListBox from 'components/ListBox'
import AutoComplete from 'components/AutoComplete'
import FilterAutoComplete from 'components/FilterAutoComplete'
import CTA from 'components/CTA'
import { locations, propertyTypes, categories } from 'constant'
import { LocationType } from 'interfaces'

const SearchBox = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    id: categories[0].id,
    title: categories[0].title
  })
  const [selectedPropertyType, setSelectedPropertyType] = useState<
    { id: number; title: string } | undefined
  >(undefined)

  const [selectedLocation, setSelectedLocation] = useState<
    LocationType[] | any
  >([])

  const [canUpdateFilterAutoCompleteShow, setCanUpdateFilterAutoCompleteShow] =
    useState(false)
  const [showFilterCombobox, setShowFilterCombobox] = useState(false)

  useEffect(() => {
    console.log(selectedLocation)
  }, [selectedLocation])

  const handleLocationChanged = (
    id: number,
    title: string,
    stateId: number | null
  ) => {
    if (stateId === null)
      setSelectedLocation([{ id, title, state_id: stateId }])
    else {
      const isExists = selectedLocation?.find(
        // @ts-ignore
        (location: { id: number }) => location.id === id
      )

      if (isExists) return

      const onlyCities = selectedLocation.filter(
        // @ts-ignore
        (location: { state_id: number | null }) => location.state_id !== null
      )

      setSelectedLocation([...onlyCities, { id, title, state_id: stateId }])
    }
  }

  useEffect(() => {
    if (canUpdateFilterAutoCompleteShow) setShowFilterCombobox(true)
  }, [canUpdateFilterAutoCompleteShow])

  return (
    <>
      <div className="container relative z-10 max-w-6xl md:flex gap-5 grid grid-cols-1 w-full md:w-auto px-8 py-12 md:-mt-20 md:rounded-lg md:shadow-md bg-custom-white-lighter md:bg-white">
        <Link href="/filter">
          <div className="grid h-max md:w-2/12 w-full mt-5 md:mt-0 order-4 md:order-1">
            <CTA title="إبحث الآن" backgroundColor="secondary" />
          </div>
        </Link>
        <div className="md:hidden cursor-pointer grid grid-cols-3 rounded-full border">
          {categories.map((categoryItem, index) => (
            <button
              key={categoryItem.id}
              type="submit"
              className={`${
                categoryItem.id === selectedCategory.id &&
                'bg-primary text-white'
              } ${
                index === 0 ? 'rounded-l-full' : index === 2 && 'rounded-r-full'
              } flex justify-center items-center px-3 py-2.5 border-r`}
              onClick={() =>
                setSelectedCategory({
                  id: categoryItem.id,
                  title: categoryItem.title
                })
              }
            >
              {categoryItem.title}
            </button>
          ))}
        </div>
        <div className="md:w-3/12 hidden md:flex gap-5 h-14 justify-center order-1 md:order-2">
          {categories.map((categoryItem, index) => (
            <div className="flex items-center w-max" key={categoryItem.id}>
              <label
                htmlFor={`default-radio-${index + 1}`}
                className="text-base font-medium text-black"
              >
                {categoryItem.title}
                <input
                  id={`default-radio-${index + 1}`}
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 ml-2 accent-orange-600"
                  defaultChecked={categoryItem.id === selectedCategory.id}
                  onClick={() =>
                    setSelectedCategory({
                      id: categoryItem.id,
                      title: categoryItem.title
                    })
                  }
                />
              </label>
            </div>
          ))}
        </div>
        <div className="md:w-3/12 order-3 place-items-center">
          <ListBox
            selectedOpt={undefined}
            options={propertyTypes}
            handleSetItem={setSelectedPropertyType}
            showFilterIcon
            bgGray
          />
        </div>
        <div className="md:w-4/12 order-2 md:order-4">
          <AutoComplete
            locations={locations}
            isHomePage
            canUpdateFilterAutoCompleteShow={canUpdateFilterAutoCompleteShow}
            handleCanUpdateFilterAutoCompleteShow={
              setCanUpdateFilterAutoCompleteShow
            }
            selectedLocation={selectedLocation}
            handleSetSelectedLocation={setSelectedLocation}
          />
        </div>
      </div>
      {showFilterCombobox && (
        <div className="absolute md:hidden w-screen h-full z-20 pt-1 px-5 bg-white top-0 left-0">
          <FilterAutoComplete
            locations={locations}
            purposes={categories}
            propertyTypes={propertyTypes}
            handleIsfilterComboboxOpen={setShowFilterCombobox}
            showOptions
            handleLocationChanged={handleLocationChanged}
          />
        </div>
      )}
    </>
  )
}

export default SearchBox
