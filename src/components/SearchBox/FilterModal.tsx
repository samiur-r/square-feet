import { Dispatch, Fragment, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { Range, getTrackBackground } from 'react-range'

import { PRICE_RANGES } from 'constant'

interface FilterModalProps {
  purposes: Array<{ id: number; title: string }>
  propertyTypes: Array<{ id: number; title: string }>
  selectedPurpose: { id: number; title: string }
  selectedPropertyType: { id: number; title: string }
  selectedPriceRange: number[]
  showFilterModal: boolean
  setPurpose: Dispatch<SetStateAction<{ id: number; title: string }>>
  setPropertyType: Dispatch<SetStateAction<{ id: number; title: string }>>
  setPriceRange: Dispatch<SetStateAction<number[]>>
  setShowFilterModal: Dispatch<SetStateAction<boolean>>
}

const FilterModal: React.FC<FilterModalProps> = ({
  purposes,
  propertyTypes,
  selectedPurpose,
  selectedPropertyType,
  selectedPriceRange: priceRange,
  showFilterModal,
  setPurpose,
  setPropertyType,
  setPriceRange,
  setShowFilterModal
}) => {
  return (
    <Transition.Root show={showFilterModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowFilterModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center md:p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white pt-5 pb-4 shadow-xl transition-all h-screen md:h-auto md:my-8 w-full md:max-w-lg">
                <div className="px-4">
                  <div className="grid grid-cols-3 md:grid-cols-2 items-center border-b pb-5">
                    <div>
                      <button
                        type="button"
                        className="rounded-md hidden md:block bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={() => setShowFilterModal(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon
                          className="h-6 w-6 stroke-black"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="text-center md:text-end font-bold text-lg">
                      فلتر
                    </div>
                    <div className="flex justify-end md:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => setShowFilterModal(false)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="border-b py-5">
                    <div className="text-end">الغرض</div>
                    <div className="flex flex-wrap flex-row-reverse gap-3 mt-3">
                      {purposes.map((purpose) => (
                        <button
                          type="button"
                          key={purpose.id}
                          className={`${
                            selectedPurpose.id === purpose.id
                              ? 'bg-primary-400 text-white'
                              : 'bg-gray-200 text-gray-500 '
                          } px-4 py-2 rounded-full text-sm flex align-center w-max cursor-pointer transition duration-300 ease outline-none`}
                          onClick={() =>
                            setPurpose({ id: purpose.id, title: purpose.title })
                          }
                        >
                          {purpose.title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-b py-5">
                    <div className="text-end">نوع العقار</div>
                    <div className="flex flex-wrap flex-row-reverse gap-3 mt-3">
                      {propertyTypes.map((type) => (
                        <button
                          type="button"
                          key={type.id}
                          className={`${
                            selectedPropertyType.id === type.id
                              ? 'bg-primary-400 text-white'
                              : 'bg-gray-200 text-gray-500 '
                          } px-4 py-2 rounded-full text-sm flex align-center w-max cursor-pointer transition duration-300 ease outline-none`}
                          onClick={() =>
                            setPropertyType({ id: type.id, title: type.title })
                          }
                        >
                          {type.title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-b py-5">
                    <div className="text-end">السعر</div>
                    <div className="flex flex-wrap justify-center mt-16 px-5">
                      <Range
                        values={priceRange}
                        step={PRICE_RANGES.step}
                        min={PRICE_RANGES.min}
                        max={PRICE_RANGES.max}
                        // eslint-disable-next-line @typescript-eslint/no-shadow
                        onChange={(values) => setPriceRange(values)}
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
                                  values: priceRange,
                                  colors: ['#ccc', '#548BF4', '#ccc'],
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
                              backgroundColor: '#548BF4',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              boxShadow: '0px 2px 6px #AAA',
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
                                color: '#548BF4',
                                display: 'flex',
                                gap: 10,
                                border: '1px solid #548BF4',
                                left: index === 0 ? '0px' : 'auto',
                                right: index === 1 ? '0px' : 'auto'
                              }}
                            >
                              <span>دك</span>
                              <span>{priceRange[index]}</span>
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="border-b py-5">
                    <div className="text-end">البحث بالكلمه</div>
                    <div className="mt-5 relative">
                      <input
                        type="search"
                        id="search"
                        className="outline-none block p-4 pr-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 text-end"
                        placeholder="البحث بالكلمه"
                        required
                      />
                      <div className="flex absolute inset-y-0 right-5 items-center pl-2 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500"
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
                  <div className="py-5 mt-3">
                    <button
                      type="button"
                      className="bg-secondary w-full md:w-auto rounded-full opacity-80 text-white py-3 px-5"
                    >
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
