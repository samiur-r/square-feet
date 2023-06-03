import React, { useEffect, useState } from 'react'
import Router from 'next/router'

import ListBox from 'components/ListBox'
import AutoComplete from 'components/AutoComplete'
import FilterAutoComplete from 'components/FilterAutoComplete'
import CTA from 'components/CTA'
import { categories } from 'constant'
import { LocationType } from 'interfaces'
import ApiClient from 'utils/ApiClient'
import { useStore } from 'store'

const SearchBox: React.FC<{
  locations: LocationType[]
  propertyTypes: any
}> = ({ locations, propertyTypes }) => {
  const {
    locationsSelected,
    propertyTypeSelected,
    categorySelected,
    setLocationsSelected,
    setPropertyTypeSelected,
    setCategorySelected,
    updateFilteredPosts,
    updateFilteredPostsCount,
    updateToast
  } = useStore()

  const [selectedCategory, setSelectedCategory] = useState<
    { id: number; title: string } | undefined
  >({
    id: 1,
    title: 'للايجار'
  })

  const [selectedPropertyType, setSelectedPropertyType] = useState<
    { id: number; title: string } | undefined
  >({
    id: 0,
    title: 'الكل'
  })
  const [selectedLocation, setSelectedLocation] = useState<
    LocationType[] | any
  >([])

  const [canUpdateFilterAutoCompleteShow, setCanUpdateFilterAutoCompleteShow] =
    useState(false)
  const [showFilterCombobox, setShowFilterCombobox] = useState(false)
  const [isCallingApi, setIsCallingApi] = useState(false)
  const [isSearchDone, setIsSearchDone] = useState(false)
  const [propertyTypeList, setPropertyTypeList] = useState<any>([])

  useEffect(() => {
    if (propertyTypes) {
      setPropertyTypeList([
        {
          id: 0,
          title: 'الكل'
        },
        ...propertyTypes
      ])
    }
  }, [propertyTypes])

  useEffect(() => {
    setSelectedLocation(locationsSelected)
  }, [locationsSelected])

  useEffect(() => {
    setSelectedPropertyType(propertyTypeSelected)
  }, [propertyTypeSelected])

  useEffect(() => {
    setSelectedCategory(categorySelected)
  }, [categorySelected])

  const handleLocationChanged = (
    id: number,
    title: string,
    stateId: number | null,
    count: number
  ) => {
    if (count === 0) {
      updateToast(
        true,
        'Your selected city has zero post. Please choose another',
        true
      )
      return
    }
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

  const nextUrl = () => {
    let url = ''
    if (locationsSelected && locationsSelected?.length < 2) {
      url = `/${categorySelected?.title}`
      if (propertyTypeSelected && propertyTypeSelected.id !== 0)
        url = `${url}/${propertyTypeSelected?.title}`
      if (locationsSelected.length === 1) {
        const location = locationsSelected[0].title
          ? locationsSelected[0].title.replace(/\s+/g, '-')
          : ''
        url = `${url}/${location}`
      }
    } else url = '/search'

    return url
  }

  const handleSearch = async () => {
    setIsCallingApi(true)
    setIsSearchDone(false)

    let location: string | any[] | undefined
    let propertyType: { id: number; title: string } | undefined
    if (
      selectedLocation.length === 1 &&
      selectedLocation[0].title === 'كل مناطق الكويت'
    )
      location = undefined
    else location = selectedLocation

    if (selectedPropertyType?.id === 0) propertyType = undefined
    else propertyType = selectedPropertyType

    setLocationsSelected(selectedLocation)
    setPropertyTypeSelected(selectedPropertyType)
    setCategorySelected(selectedCategory)

    if (!location || (location && location.length <= 1)) {
      setIsCallingApi(false)
      const paths = []
      let url = `${selectedCategory?.title}`

      if (propertyType) paths.push(1)
      if (location || location?.length) paths.push(2)

      paths.forEach((item) => {
        if (item === 1 && propertyType) {
          url = `${url}/${propertyType.title}`
        }
        if (item === 2 && location && location.length) {
          url = `${url}/${location[0].title.replace(/\s+/g, '-')}`
        }
      })
      Router.push(url)
      return
    }

    try {
      const response = await ApiClient({
        method: 'POST',
        url: '/search',
        data: {
          limit: 10,
          offset: 0,
          location,
          propertyType,
          category: selectedCategory
        }
      })

      setIsCallingApi(false)
      updateFilteredPostsCount(response?.data?.count)
      updateFilteredPosts(response?.data?.posts)
      setIsSearchDone(true)
    } catch (error) {
      setIsCallingApi(false)
    }
  }

  useEffect(() => {
    if (isSearchDone) {
      const url = nextUrl()
      Router.push(encodeURI(url))
    }
  }, [isSearchDone])

  return (
    <>
      <div className="container relative z-10 max-w-6xl md:flex gap-5 grid grid-cols-1 w-full md:w-auto px-8 py-12 md:-mt-20 md:rounded-lg md:shadow-md bg-custom-white-lighter md:bg-white">
        <div className="grid h-max md:w-2/12 w-full mt-5 md:mt-0 order-4 md:order-1">
          <CTA
            title="إبحث الآن"
            backgroundColor="secondary"
            handleClick={handleSearch}
            isCallingApi={isCallingApi}
          />
        </div>
        <div className="md:hidden cursor-pointer grid grid-cols-3 rounded-full border">
          {categories.map((categoryItem, index) => (
            <button
              key={categoryItem.id}
              type="submit"
              className={`${
                categoryItem.id === selectedCategory?.id &&
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
                  checked={categoryItem.id === selectedCategory?.id}
                  onChange={() =>
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
            selectedOpt={selectedPropertyType}
            options={propertyTypeList}
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
        <div className="fixed md:hidden w-screen h-full z-20 pt-3 px-5 bg-white top-0 left-0">
          <FilterAutoComplete
            locations={locations}
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
