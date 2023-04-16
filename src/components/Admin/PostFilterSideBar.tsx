/* eslint-disable import/no-extraneous-dependencies */
import { Dispatch, FormEvent, SetStateAction } from 'react'
import { propertyTypes, categories, locations } from 'constant'
import { BanknotesIcon } from '@heroicons/react/20/solid'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const orderByItems = [
  'Created',
  'Sticked',
  'Repost Date',
  'Repost Count',
  'City',
  'Property Type',
  'Category'
]

const postStatusItems = ['Active', 'Deleted', 'Archived', 'Reposted']

interface FilterSideBarProps {
  locationToFilter: number
  categoryToFilter: number
  propertyTypeToFilter: number
  fromPriceToFilter: number | undefined
  toPriceToFilter: number | undefined
  fromCreationDateToFilter: Date | null
  toCreationDateToFilter: Date | null
  stickyStatusToFilter: number
  userTypeToFilter: string
  orderByToFilter: string | undefined
  postStatusToFilter: string | undefined
  handleSetLocationToFilter: Dispatch<SetStateAction<number>>
  handleSetCategoryToFilter: Dispatch<SetStateAction<number>>
  handleSetPropertyTypeToFilter: Dispatch<SetStateAction<number>>
  handleSetFromPriceToFilter: Dispatch<SetStateAction<number | undefined>>
  handleSetToPriceToFilter: Dispatch<SetStateAction<number | undefined>>
  handleSetFromCreationDateToFilter: Dispatch<SetStateAction<Date | null>>
  handleSetToCreationDateToFilter: Dispatch<SetStateAction<Date | null>>
  handleSetStickyStatusToFilter: Dispatch<SetStateAction<number>>
  handleSetUserTypeToFilter: Dispatch<SetStateAction<string>>
  handleSetOrderByToFilter: Dispatch<SetStateAction<string>>
  handleSetPostStatusToFilter: Dispatch<SetStateAction<string | undefined>>
  reset: () => void
  handleFilter: (e: FormEvent<HTMLButtonElement>) => void
}

const PostFilterSideBar: React.FC<FilterSideBarProps> = ({
  locationToFilter,
  categoryToFilter,
  propertyTypeToFilter,
  fromPriceToFilter,
  toPriceToFilter,
  fromCreationDateToFilter,
  toCreationDateToFilter,
  stickyStatusToFilter,
  userTypeToFilter,
  orderByToFilter,
  postStatusToFilter,
  handleSetLocationToFilter,
  handleSetCategoryToFilter,
  handleSetPropertyTypeToFilter,
  handleSetFromPriceToFilter,
  handleSetToPriceToFilter,
  handleSetFromCreationDateToFilter,
  handleSetToCreationDateToFilter,
  handleSetStickyStatusToFilter,
  handleSetUserTypeToFilter,
  handleSetOrderByToFilter,
  handleSetPostStatusToFilter,
  reset,
  handleFilter
}) => {
  return (
    <div className="flex m-auto max-w-6xl flex-col divide-y divide-gray-200 bg-custom-gray-3 h-full shadow-xl">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex py-2 text-base font-semibold justify-center text-primary">
          Filter Posts
        </div>
        <div className="flex flex-col flex-1 pb-5 px-4 sm:px-6 bg-custom-gray-2">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="mt-5">
              <label
                htmlFor="location"
                className="block text-sm font-semibold leading-6"
              >
                Location:
              </label>
              <select
                id="location"
                name="location"
                className="bg-custom-gray-3 mt-2 block w-full rounded-md border-0 py-2 px-3 sm:text-sm sm:leading-6"
                value={locationToFilter}
                onChange={(e) =>
                  handleSetLocationToFilter(parseInt(e.target.value, 10))
                }
              >
                <option value={0}>-</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5">
              <label
                htmlFor="category"
                className="block text-sm font-semibold leading-6"
              >
                Category:
              </label>
              <select
                id="category"
                name="category"
                className="bg-custom-gray-3 mt-2 block w-full rounded-md border-0 py-2 px-3 sm:text-sm sm:leading-6"
                value={categoryToFilter}
                onChange={(e) =>
                  handleSetCategoryToFilter(parseInt(e.target.value, 10))
                }
              >
                <option value={0}>-</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5">
              <label
                htmlFor="property_type"
                className="block text-sm font-semibold leading-6 "
              >
                Property Type:
              </label>
              <select
                id="property_type"
                name="property_type"
                className="bg-custom-gray-3 mt-2 block w-full rounded-md border-0 py-2 px-3 sm:text-sm sm:leading-6"
                value={propertyTypeToFilter}
                onChange={(e) =>
                  handleSetPropertyTypeToFilter(parseInt(e.target.value, 10))
                }
              >
                <option value={0}>-</option>
                {propertyTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5">
              <label
                htmlFor="is_sticky"
                className="block text-sm font-semibold leading-6"
              >
                Sticky?:
              </label>
              <select
                id="is_sticky"
                name="is_sticky"
                className="bg-custom-gray-3 mt-2 block w-full rounded-md border-0 py-2 px-3 sm:text-sm sm:leading-6"
                value={stickyStatusToFilter}
                onChange={(e) =>
                  handleSetStickyStatusToFilter(parseInt(e.target.value, 10))
                }
              >
                <option value={0}>-</option>
                <option value={-1}>No</option>
                <option value={1}>Yes</option>
              </select>
            </div>
            <div className="mt-5">
              <label
                htmlFor="user_type"
                className="block text-sm font-semibold leading-6"
              >
                User Type:
              </label>
              <select
                id="user_type"
                name="user_type"
                className="bg-custom-gray-3 mt-2 block w-full rounded-md border-0 py-2 px-3 sm:text-sm sm:leading-6"
                value={userTypeToFilter}
                onChange={(e) => handleSetUserTypeToFilter(e.target.value)}
              >
                <option value="-">-</option>
                <option value="agent">Agent</option>
                <option value="regular">Regular</option>
              </select>
            </div>
            <div className="mt-5">
              <label
                htmlFor="order_by"
                className="block text-sm font-semibold leading-6"
              >
                Order By:
              </label>
              <select
                id="order_by"
                name="order_by"
                className="bg-custom-gray-3 mt-2 block w-full rounded-md border-0 py-2 px-3 sm:text-sm sm:leading-6"
                value={orderByToFilter}
                onChange={(e) => handleSetOrderByToFilter(e.target.value)}
              >
                {orderByItems.map((item) => (
                  <option key={Math.random()} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5">
              <label
                htmlFor="post_status"
                className="block text-sm font-semibold leading-6"
              >
                Post Status:
              </label>
              <select
                id="post_status"
                name="post_status"
                className="bg-custom-gray-3 mt-2 block w-full rounded-md border-0 py-2 px-3 sm:text-sm sm:leading-6"
                value={postStatusToFilter}
                onChange={(e) => handleSetPostStatusToFilter(e.target.value)}
              >
                <option value={undefined}>-</option>
                {postStatusItems.map((item) => (
                  <option key={Math.random()} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-5 md:gap-10 md:flex-row">
            <div className="mt-5">
              <label
                htmlFor="price"
                className="block text-sm font-semibold leading-6"
              >
                Price:
              </label>
              <div className="flex flex-col gap-2">
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center mx-2">
                    <BanknotesIcon className="text-primary w-5 h-5" />
                  </div>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="block bg-custom-gray-3 w-full rounded-md border-0 py-2 pl-8 sm:text-sm sm:leading-6"
                    placeholder="From"
                    aria-describedby="price-currency"
                    value={fromPriceToFilter ?? ''}
                    onChange={(e) =>
                      handleSetFromPriceToFilter(
                        e.target.value
                          ? parseInt(e.target.value, 10)
                          : undefined
                      )
                    }
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 bg-primary">
                    <span className="sm:text-sm text-white" id="price-currency">
                      KWD
                    </span>
                  </div>
                </div>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center mx-2">
                    <BanknotesIcon className="text-primary w-5 h-5" />
                  </div>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="block bg-custom-gray-3 w-full rounded-md border-0 py-2 pl-8 sm:text-sm sm:leading-6"
                    placeholder="To"
                    aria-describedby="price-currency"
                    value={toPriceToFilter ?? ''}
                    onChange={(e) =>
                      handleSetToPriceToFilter(
                        e.target.value
                          ? parseInt(e.target.value, 10)
                          : undefined
                      )
                    }
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 bg-primary">
                    <span
                      className="text-white sm:text-sm "
                      id="price-currency"
                    >
                      KWD
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="date"
                className="block text-sm font-semibold leading-6"
              >
                Creation Date:
              </label>
              <div className="mt-2  md:ml-5 flex flex-col gap-3 items-center">
                <div className="flex gap-2 items-center">
                  <p className=" text-sm">From: </p>
                  <DatePicker
                    id="date"
                    selected={fromCreationDateToFilter}
                    onChange={(date: any) =>
                      handleSetFromCreationDateToFilter(date)
                    }
                    className="p-2 bg-custom-gray-3 rounded-md"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-sm">To: </p>
                  <DatePicker
                    id="date"
                    selected={toCreationDateToFilter}
                    onChange={(date: any) =>
                      handleSetToCreationDateToFilter(date)
                    }
                    className="p-2 ml-5 bg-custom-gray-3 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-shrink-0 justify-end px-4 py-4">
        <button
          type="button"
          className="rounded-md bg-custom-gray-2 py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
          onClick={reset}
        >
          Reset
        </button>
        <button
          type="submit"
          className="ml-4 inline-flex justify-center rounded-md bg-primary py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={(e: FormEvent<HTMLButtonElement>) => handleFilter(e)}
        >
          Filter
        </button>
      </div>
    </div>
  )
}

export default PostFilterSideBar
