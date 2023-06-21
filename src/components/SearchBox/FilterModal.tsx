import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Router from 'next/router'

import { useStore } from 'store'
import { Range, getTrackBackground } from 'react-range'

import { PRICE_RANGES, categories } from 'constant'

interface FilterModalProps {
  showFilterModal: boolean
  propertyTypeList: any
  setShowFilterModal: Dispatch<SetStateAction<boolean>>
  handleIsfilterComboboxOpen: Dispatch<SetStateAction<boolean>>
}

const FilterModal: React.FC<FilterModalProps> = ({
  showFilterModal,
  propertyTypeList,
  setShowFilterModal,
  handleIsfilterComboboxOpen
}) => {
  const {
    propertyTypeSelected,
    categorySelected,
    priceRangeSelected,
    keyword: lastKeyword,
    updateCanFetchPosts,
    setPropertyTypeSelected,
    setCategorySelected,
    setPriceRangeSelected,
    updateIsSearchFromFilterModal,
    updateKeyword,
    updateSearchPostCount
  } = useStore()
  const [keyword, setKeyword] = useState('')
  const [isCallingApi, setIsCallingApi] = useState(false)
  const [propertyTypes, setPropertyTypes] = useState<any>([])

  useEffect(() => {
    if (propertyTypeList) {
      setPropertyTypes([
        {
          id: 0,
          title: 'الكل'
        },
        ...propertyTypeList
      ])
    }
  }, [propertyTypeList])

  const handleSearch = async () => {
    setIsCallingApi(true)
    let propertyType

    if (propertyTypeSelected?.id === 0) propertyType = undefined
    else propertyType = propertyTypeSelected

    updateIsSearchFromFilterModal(true)
    updateKeyword(keyword)
    setPropertyTypeSelected(propertyType)
    updateSearchPostCount(0)
    setIsCallingApi(false)
    setShowFilterModal(false)
    updateCanFetchPosts(true)
    Router.push('/search')
  }

  return (
    <Transition.Root show={showFilterModal} as={Fragment}>
      <Dialog as="div" className="fixed z-30" onClose={setShowFilterModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-custom-gray bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center md:p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0"
            >
              <Dialog.Panel className="relative transform overflow-hidden md:rounded-lg bg-white pt-5 pb-4 shadow-xl transition-all h-screen md:h-auto md:my-8 w-full md:max-w-lg">
                <div className="px-4">
                  <div className="grid grid-cols-3 md:grid-cols-2 items-center pb-5">
                    <div>
                      <button
                        type="submit"
                        className="rounded-md hidden md:block bg-white text-custom-gray focus:outline-none"
                        onClick={() => setShowFilterModal(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon
                          className="h-6 w-6 stroke-black"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="text-center md:text-end font-DroidArabicKufiBold text-lg">
                      فلتر
                    </div>
                    <div className="flex justify-end md:hidden">
                      <ChevronRightIcon
                        className="h-9 w-9 text-black"
                        aria-hidden="true"
                        onClick={() => {
                          setShowFilterModal(false)
                          handleIsfilterComboboxOpen(false)
                        }}
                      />
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="text-end">الغرض</div>
                    <div className="flex flex-wrap flex-row justify-end gap-3 mt-3">
                      {categories &&
                        categories.map((category) => (
                          <button
                            type="submit"
                            key={category.id}
                            className={`${
                              categorySelected?.id === category?.id
                                ? 'bg-primary text-white'
                                : 'bg-custom-gray-3 text-custom-gray border-custom-gray-border border'
                            } px-4 py-2 rounded-full text-sm flex align-center w-max cursor-pointer transition duration-300 ease outline-none`}
                            onClick={() =>
                              setCategorySelected({
                                id: category?.id,
                                title: category?.title
                              })
                            }
                          >
                            {category?.title}
                          </button>
                        ))}
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="text-end">نوع العقار</div>
                    <div className="flex flex-wrap flex-row-reverse gap-3 mt-3">
                      {propertyTypes &&
                        propertyTypes.map((type: any) => (
                          <button
                            type="submit"
                            key={type.id}
                            className={`${
                              propertyTypeSelected?.id === type?.id
                                ? 'bg-primary text-white'
                                : 'bg-custom-gray-3 text-custom-gray border-custom-gray-border border'
                            } px-4 py-2 rounded-full text-sm flex align-center w-max cursor-pointer transition duration-300 ease outline-none`}
                            onClick={() =>
                              setPropertyTypeSelected({
                                id: type?.id,
                                title: type?.title
                              })
                            }
                          >
                            {type?.title}
                          </button>
                        ))}
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="text-end">السعر</div>
                    <div className="flex flex-wrap justify-center mt-12 px-5">
                      <Range
                        values={priceRangeSelected}
                        step={PRICE_RANGES.step}
                        min={PRICE_RANGES.min}
                        max={PRICE_RANGES.max}
                        // eslint-disable-next-line @typescript-eslint/no-shadow
                        onChange={(values) => setPriceRangeSelected(values)}
                        renderTrack={({ props, children }) => (
                          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                          <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                              ...props.style,
                              height: '36px',
                              display: 'flex',
                              width: '100%'
                            }}
                          >
                            <div
                              ref={props.ref}
                              style={{
                                height: '5px',
                                width: '100%',
                                borderRadius: '4px',
                                background: getTrackBackground({
                                  values: priceRangeSelected,
                                  colors: ['#ccc', '#6598CB', '#ccc'],
                                  min: PRICE_RANGES.min,
                                  max: PRICE_RANGES.max
                                }),
                                alignSelf: 'center'
                              }}
                            >
                              {children}
                            </div>
                          </div>
                        )}
                        renderThumb={({ index, props }) => (
                          <div
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...props}
                            style={{
                              ...props.style,
                              height: '15px',
                              width: '15px',
                              borderRadius: '50%',
                              backgroundColor: '#6598CB',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              boxShadow: '0px 2px 6px #DFE9F3',
                              outline: 'none'
                            }}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                top: '-45px',
                                fontSize: '14px',
                                fontFamily:
                                  'Arial,Helvetica Neue,Helvetica,sans-serif',
                                padding: '8px',
                                borderRadius: '4px',
                                backgroundColor: '#E8F0F7',
                                color: '#72A1CF',
                                display: 'flex',
                                gap: 10,
                                border: '1px solid #6D9DCE',
                                left: index === 0 ? '0px' : 'auto',
                                right: index === 1 ? '0px' : 'auto'
                              }}
                            >
                              <span>دك</span>
                              <span>{priceRangeSelected[index]}</span>
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="relative">
                      <input
                        type="search"
                        id="search"
                        className="outline-none text-base block px-4 py-3 md:py-4 pr-10 w-full text-black rounded-full border border-custom-gray-border text-end"
                        placeholder="البحث بالكلمه"
                        onChange={(e) => setKeyword(e.target.value)}
                        defaultValue={lastKeyword}
                      />
                      <div className="flex absolute inset-y-0 right-5 items-center pl-2 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-custom-gray"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-8 mb-4">
                    <button
                      type="submit"
                      className="bg-secondary w-full flex justify-center items-center py-3 md:py-4 px-8 text-white md:rounded-lg rounded-full hover:opacity-90 transition-opacity duration-300"
                      onClick={handleSearch}
                    >
                      {isCallingApi && (
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-5 h-5 mr-3 text-primary animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                      عرض النتائج
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default FilterModal
