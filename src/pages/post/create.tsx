import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Popover } from '@headlessui/react'

import AutoComplete from 'components/AutoComplete'
import ListBox from 'components/ListBox'
import Title from 'components/Title'
import Description from 'components/Description'
import { useStore } from 'store'
import MediaUploader from 'components/MediaUploader'
import { postSchema } from 'validations/PostValidation'
import ApiClient from 'utils/ApiClient'
import { LocationType } from 'interfaces'
import { locations, propertyTypes, categories } from 'constant'

const CreatePost: NextPage = () => {
  const [scrollToTop, setScrollToTop] = useState(false)
  const { user, updateToast } = useStore()
  const [cityErrors, setCityErrors] = useState<string[]>([])
  const [propertyTypeErrors, setPropertyTypeErrors] = useState<string[]>([])
  const [purposeErrors, setPurposeErrors] = useState<string[]>([])

  const [selectedLocation, setSelectedLocation] = useState<
    LocationType | undefined
  >(undefined)
  const [selectedPropertyType, setSelectedPropertyType] = useState<
    { id: number; title: string } | undefined
  >(undefined)
  const [selectedPurpose, setSelectedPurpose] = useState<
    { id: number; title: string } | undefined
  >(undefined)
  const [price, setPrice] = useState<number | undefined>(undefined)
  const [description, setDescription] = useState<string | undefined>(undefined)
  const [mediaList, setMediaList] = useState<Array<File>>([])

  useEffect(() => {
    if (selectedLocation) setCityErrors([])
  }, [selectedLocation])

  useEffect(() => {
    if (selectedPropertyType !== undefined) setPropertyTypeErrors([])
  }, [selectedPropertyType])

  useEffect(() => {
    if (selectedPurpose !== undefined) setPurposeErrors([])
  }, [selectedPurpose])

  const handleValidationError = (
    errors: Array<{ path: string; errors: string[] }>
  ) => {
    errors?.forEach((err: { path: string; errors: string[] }) => {
      switch (err.path) {
        case 'cityId' || 'cityTitle':
          setCityErrors(err.errors)
          break
        case 'propertyId' || 'propertyTitle':
          setPropertyTypeErrors(err.errors)
          break
        case 'categoryId' || 'categoryTitle':
          setPurposeErrors(err.errors)
          break
        default:
          break
      }
    })
    return 0
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const state = locations.filter(
      (location) => location.id === selectedLocation?.state_id
    )

    const payload = {
      cityId: selectedLocation?.id,
      cityTitle: selectedLocation?.title,
      stateId: state[0]?.id,
      stateTitle: state[0]?.title,
      propertyId: selectedPropertyType?.id,
      propertyTitle: selectedPropertyType?.title,
      categoryId: selectedPurpose?.id,
      categoryTitle: selectedPurpose?.title,
      price,
      description,
      media: mediaList
    }

    try {
      await postSchema.validate(payload, { abortEarly: false })
      const response = await ApiClient({
        method: 'POST',
        url: '/post',
        data: { payload },
        headers: {
          'content-type': 'multipart/form-data'
        }
      })

      updateToast(true, `Success: ${response?.data.success}`, false)
    } catch (error: any) {
      if (error.name === 'ValidationError') {
        handleValidationError(error.inner)
        return 0
      }
      updateToast(true, `Error: ${error?.response?.data}`, true)
    }
  }

  const scrollToAutocomplete = () => {
    setScrollToTop(true)
  }

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      window.scrollTo({
        top: 150,
        left: 0,
        behavior: 'smooth'
      })
      setScrollToTop(false)
    }
  }, [scrollToTop])

  return (
    <div className="dir-rtl container max-w-6xl py-10 flex flex-col gap-3 items-center">
      <div className="md:text-center w-full">
        <Title value="إضافة إعلان" />
      </div>
      <div className="w-full md:text-center">
        <Description value="أدخل البيانات التالية لإضافة اعلان" />
      </div>
      <form className="w-full max-w-md px-3 md:px-0 mt-8 md:mt-10">
        <div className="relative">
          <Popover className="relative">
            <Popover.Panel className="absolute z-10 -top-14 right-2 text-secondary bg-custom-white-light shadow-md p-2 rounded-md">
              Hey! You can not edit this field
            </Popover.Panel>
            <Popover.Button className="w-full">
              <input
                type="number"
                name="phone"
                id="phone"
                className="block bg-custom-gray-3 px-4 py-2.5 md:py-4 w-full text-custom-gray rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=""
                value={user?.phone}
                readOnly
              />
            </Popover.Button>
            <label
              htmlFor="phone"
              className="absolute cursor-text text-md text-custom-gray duration-300 top-2 transform -translate-y-5 scale-75 z-10 bg-white px-1 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0"
            >
              رقم الموبايل{' '}
            </label>
          </Popover>
        </div>
        <div
          className="mt-8 md:mt-10"
          onClick={() => {
            if (window?.innerWidth < 768) scrollToAutocomplete()
          }}
        >
          <AutoComplete
            locations={locations}
            handleSetSelectedLocation={setSelectedLocation}
            isError={cityErrors.length >= 1}
          />
          {cityErrors && (
            <div className="flex flex-col gap-2">
              {cityErrors.map((err) => (
                <div
                  key={Math.random()}
                  className="mt-3 text-custom-red text-sm"
                >
                  {err}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 md:mt-10">
          <ListBox
            selectedOpt={undefined}
            options={propertyTypes}
            placeholder="نوع العقار"
            isFloatingLabel
            handleSetItem={setSelectedPropertyType}
            isError={propertyTypeErrors.length >= 1}
          />
          {propertyTypeErrors && (
            <div className="flex flex-col gap-2">
              {propertyTypeErrors.map((err) => (
                <div
                  key={Math.random()}
                  className="mt-3 text-custom-red text-sm"
                >
                  {err}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 md:mt-10">
          <ListBox
            selectedOpt={undefined}
            options={categories}
            placeholder="الغرض"
            isFloatingLabel
            handleSetItem={setSelectedPurpose}
            isError={purposeErrors.length >= 1}
          />
          {purposeErrors && (
            <div className="flex flex-col gap-2">
              {purposeErrors.map((err) => (
                <div
                  key={Math.random()}
                  className="mt-3 text-custom-red text-sm"
                >
                  {err}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative mt-8 md:mt-10">
          <input
            type="number"
            name="price"
            id="price"
            className="block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            onChange={(e) => setPrice(parseInt(e.target.value, 10))}
          />
          <label
            htmlFor="price"
            className="whitespace-nowrap absolute cursor-text text-md text-custom-gray duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 -right-1 peer-focus:-right-1 peer-placeholder-shown:right-0"
          >
            السعر (اختياري)
          </label>
        </div>
        <div className="relative mt-8 md:mt-10">
          <textarea
            name="description"
            rows={7}
            className="block p-4 w-full text-base text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            onChange={(e) => setDescription(e.target.value)}
          />
          <label
            htmlFor="description"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray duration-300 transform -translate-y-4 scale-75 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:top-8 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0 peer-focus:-right-3"
          >
            اكتب تفاصيل الاعلان هنا{' '}
          </label>
        </div>
        <div className="flex justify-center items-center w-full mt-8 md:mt-10">
          <MediaUploader handleMediaUpload={setMediaList} />
        </div>
        <div className="flex items-center gap-3 mt-8 md:mt-10">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-custom-gray rounded border-custom-gray-border focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="checked-checkbox" className="font-medium">
            <a className="hover:underline flex gap-3 cursor-pointer">
              <p className="text-primary text-xs md:text-sm">
                إجعل إعلاني مميزًا مقابل 12 دك
              </p>
              <p className="text-secondary text-xs md:text-sm whitespace-nowrap">
                (لمعرفة المزيد)
              </p>
            </a>
          </label>
        </div>
        <div className="mt-3 md:mt-5">
          <button
            type="submit"
            className="bg-secondary text-white rounded-lg w-full mt-8 py-3 md:py-4 hover:opacity-90 transition-opacity duration-300"
            onClick={(e) => handleSubmit(e)}
          >
            إضافة الإعلان{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
