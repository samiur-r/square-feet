/* eslint-disable import/no-extraneous-dependencies */
import { Dispatch, FormEvent, SetStateAction } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const statusItems = ['Created', 'Completed', 'Failed', 'Cancelled']

const typeItems = ['Regular', 'Sticky', 'Sticky Direct', 'Agent']

interface FilterSideBarProps {
  statusToFilter: string
  typeToFilter: string
  fromCreationDateToFilter: Date | null
  toCreationDateToFilter: Date | null
  handleSetStatusToFilter: Dispatch<SetStateAction<string>>
  handleSetTypeToFilter: Dispatch<SetStateAction<string>>
  handleSetFromCreationDateToFilter: Dispatch<SetStateAction<Date | null>>
  handleSetToCreationDateToFilter: Dispatch<SetStateAction<Date | null>>
  reset: () => void
  handleFilter: (e: FormEvent<HTMLButtonElement>) => void
}

const TransactionFilterSideBar: React.FC<FilterSideBarProps> = ({
  statusToFilter,
  typeToFilter,
  fromCreationDateToFilter,
  toCreationDateToFilter,
  handleSetStatusToFilter,
  handleSetTypeToFilter,
  handleSetFromCreationDateToFilter,
  handleSetToCreationDateToFilter,
  reset,
  handleFilter
}) => {
  return (
    <div className="flex m-auto h-full max-w-6xl flex-col divide-y divide-gray-200 bg-custom-gray-3 shadow-xl">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex py-2 text-base font-semibold justify-center text-primary">
          Filter Transactions
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 pb-5 px-4 sm:px-6 bg-custom-gray-2">
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
              className="bg-custom-gray-3 mt-2 block w-full rounded-md border-0 py-1.5 px-3 sm:text-sm sm:leading-6"
              value={statusToFilter}
              onChange={(e) => handleSetStatusToFilter(e.target.value)}
            >
              <option value="-">-</option>
              {statusItems.map((status) => (
                <option key={Math.random()} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <label
              htmlFor="type"
              className="block text-sm font-semibold leading-6"
            >
              Type:
            </label>
            <select
              id="type"
              name="type"
              className="bg-custom-gray-3 mt-2 block w-full rounded-md border-0 py-1.5 px-3 sm:text-sm sm:leading-6"
              value={typeToFilter}
              onChange={(e) => handleSetTypeToFilter(e.target.value)}
            >
              <option value="-">-</option>
              {typeItems.map((type) => (
                <option key={Math.random()} value={type}>
                  {type}
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
            <div className="mt-2 flex flex-col gap-3 items-center">
              <div className="flex gap-2 items-center">
                <p className="text-sm">From: </p>
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
          Save
        </button>
      </div>
    </div>
  )
}

export default TransactionFilterSideBar
