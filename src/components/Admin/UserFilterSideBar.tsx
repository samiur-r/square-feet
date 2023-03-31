/* eslint-disable import/no-extraneous-dependencies */
import {
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
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
  show: boolean
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
  handleSetShowFilterSideBar: Dispatch<SetStateAction<boolean>>
  reset: () => void
  handleFilter: (e: FormEvent<HTMLButtonElement>) => void
}

const UserFilterSideBar: React.FC<FilterSideBarProps> = ({
  show,
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
  handleSetShowFilterSideBar,
  reset,
  handleFilter
}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open !== show) handleSetShowFilterSideBar(open)
  }, [open])

  useEffect(() => {
    setOpen(show)
  }, [show])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col divide-y divide-gray-200 bg-slate-800 shadow-xl">
                    <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll pt-6">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-custom-gray-2">
                            Filter
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-custom-gray-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 py-5 sm:px-6 bg-slate-700">
                        <div className="mt-5">
                          <label
                            htmlFor="status"
                            className="block text-sm font-medium leading-6 text-custom-gray-2"
                          >
                            Status:
                          </label>
                          <select
                            id="status"
                            name="status"
                            className="bg-slate-500 mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-custom-gray-2 sm:text-sm sm:leading-6"
                            value={statusToFilter}
                            onChange={(e) =>
                              handleSetStatusToFilter(e.target.value)
                            }
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
                            className="block text-sm font-medium leading-6 text-custom-gray-2"
                          >
                            Phone:
                          </label>
                          <input
                            type="number"
                            name="phone"
                            id="phone"
                            className="block mt-2 bg-slate-500 w-full rounded-md border-0 py-1.5 pl-5 pr-12 text-custom-gray-2 placeholder:text-custom-gray-4 sm:text-sm sm:leading-6"
                            placeholder="Phone Number"
                            aria-describedby="price-currency"
                            value={phoneToFilter ?? ''}
                            onChange={(e) =>
                              handleSetPhoneToFilter(e.target.value)
                            }
                          />
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="admin_comment"
                            className="block text-sm font-medium leading-6 text-custom-gray-2"
                          >
                            Admin Comment:
                          </label>
                          <input
                            type="text"
                            name="admin_comment"
                            id="admin_comment"
                            className="block mt-2 bg-slate-500 w-full rounded-md border-0 py-1.5 pl-5 pr-12 text-custom-gray-2 placeholder:text-custom-gray-4 sm:text-sm sm:leading-6"
                            placeholder="Comment"
                            aria-describedby="price-currency"
                            value={adminCommentToFilter ?? ''}
                            onChange={(e) =>
                              handleSetAdminCommentToFilter(e.target.value)
                            }
                          />
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium leading-6 text-custom-gray-2"
                          >
                            Creation Date:
                          </label>
                          <div className="mt-2 flex flex-col gap-3 items-center">
                            <div className="flex gap-2 items-center">
                              <p className="text-custom-gray-2 text-sm">
                                From:{' '}
                              </p>
                              <DatePicker
                                id="date"
                                selected={fromCreationDateToFilter}
                                onChange={(date: any) =>
                                  handleSetFromCreationDateToFilter(date)
                                }
                                className="p-2 bg-slate-500 text-custom-gray-2 rounded-md"
                              />
                            </div>
                            <div className="flex gap-2 items-center">
                              <p className="text-custom-gray-2  text-sm">
                                To:{' '}
                              </p>
                              <DatePicker
                                id="date"
                                selected={toCreationDateToFilter}
                                onChange={(date: any) =>
                                  handleSetToCreationDateToFilter(date)
                                }
                                className="p-2 ml-5 bg-slate-500 text-custom-gray-2 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="order_by"
                            className="block text-sm font-medium leading-6 text-custom-gray-2"
                          >
                            Order By:
                          </label>
                          <select
                            id="order_by"
                            name="order_by"
                            className="bg-slate-500 mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-custom-gray-2 sm:text-sm sm:leading-6"
                            value={orderByToFilter}
                            onChange={(e) =>
                              handleSetOrderByToFilter(e.target.value)
                            }
                          >
                            {orderByItems.map((item) => (
                              <option key={Math.random()} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
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
                        onClick={(e: FormEvent<HTMLButtonElement>) => {
                          setOpen(false)
                          handleFilter(e)
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default UserFilterSideBar
