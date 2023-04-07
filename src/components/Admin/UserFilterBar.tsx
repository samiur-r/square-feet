/* eslint-disable import/no-extraneous-dependencies */
import { Dispatch, FormEvent, SetStateAction } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const statusItems = [
  'User',
  'Agent',
  'Verified',
  'Not Verified',
  'Has Regular Credits',
  'Has Sticky Credits',
  'Has Agent Credits',
  'Zero Free'
]

const orderByItems = [
  'Registered',
  'Mobile',
  'Total Posts',
  'Active Posts',
  'Archived Posts',
  'Trashed Posts'
]

interface FilterSideBarProps {
  statusToFilter: string | number
  phoneToFilter: string
  adminCommentToFilter: string
  fromCreationDateToFilter: Date | null
  toCreationDateToFilter: Date | null
  orderByToFilter: string
  handleSetStatusToFilter: Dispatch<SetStateAction<string | number>>
  handleSetPhoneToFilter: Dispatch<SetStateAction<string>>
  handleSetAdminCommentToFilter: Dispatch<SetStateAction<string>>
  handleSetFromCreationDateToFilter: Dispatch<SetStateAction<Date | null>>
  handleSetToCreationDateToFilter: Dispatch<SetStateAction<Date | null>>
  handleSetOrderByToFilter: Dispatch<SetStateAction<string>>
  reset: () => void
  handleFilter: (e: FormEvent<HTMLButtonElement>) => void
}

const UserFilterBar: React.FC<FilterSideBarProps> = ({
  fromCreationDateToFilter,
  toCreationDateToFilter,
  statusToFilter,
  phoneToFilter,
  adminCommentToFilter,
  orderByToFilter,
  handleSetStatusToFilter,
  handleSetPhoneToFilter,
  handleSetAdminCommentToFilter,
  handleSetFromCreationDateToFilter,
  handleSetToCreationDateToFilter,
  handleSetOrderByToFilter,
  reset,
  handleFilter
}) => {
  return (
    <div className="flex m-auto h-full max-w-6xl flex-col divide-y divide-gray-200 bg-custom-gray-3 shadow-xl">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex py-2 text-base font-semibold justify-center text-primary">
          Filter Users
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 flex-1 pb-5 px-4 sm:px-6 bg-custom-gray-2">
          <div className="mt-5">
            <label
              htmlFor="status"
              className="block text-sm font-semibold leading-6"
            >
              Status:
            </label>
            <select
              id="status"
              name="status"
              className="bg-custom-gray-3 mt-2 block w-full rounded-md border-0 py-2 px-3 sm:text-sm sm:leading-6"
              value={statusToFilter}
              onChange={(e) => handleSetStatusToFilter(e.target.value)}
            >
              <option value={0}>-</option>
              {statusItems.map((item) => (
                <option key={Math.random()} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6"
            >
              Phone:
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="block mt-2 bg-custom-gray-3 w-full rounded-md border-0 py-2.5 px-3 sm:text-sm sm:leading-6"
              placeholder="Phone Number"
              aria-describedby="price-currency"
              value={phoneToFilter ?? ''}
              onChange={(e) => handleSetPhoneToFilter(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="admin_comment"
              className="block text-sm font-semibold leading-6"
            >
              Admin Comment:
            </label>
            <input
              type="text"
              name="admin_comment"
              id="admin_comment"
              className="block mt-2 bg-custom-gray-3 w-full rounded-md border-0 py-2.5 px-3 sm:text-sm sm:leading-6"
              placeholder="Comment"
              aria-describedby="price-currency"
              value={adminCommentToFilter ?? ''}
              onChange={(e) => handleSetAdminCommentToFilter(e.target.value)}
            />
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
              htmlFor="date"
              className="block text-sm font-semibold leading-6"
            >
              Creation Date:
            </label>
            <div className="mt-2 md:ml-16 flex flex-col gap-3 items-center">
              <div className="flex gap-2 items-center">
                <p className="text-sm">From: </p>
                <DatePicker
                  id="date"
                  selected={fromCreationDateToFilter}
                  onChange={(date: any) =>
                    handleSetFromCreationDateToFilter(date)
                  }
                  className="py-2.5 px-3 bg-custom-gray-3 rounded-md"
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
                  className="py-2.5 px-3 ml-5 bg-custom-gray-3 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-shrink-0 justify-end px-4 py-2">
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

export default UserFilterBar
