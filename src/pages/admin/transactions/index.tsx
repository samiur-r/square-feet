import Pagination from 'components/Admin/Pagination'
import TransactionDataTable from 'components/Admin/TransactionDataTable'
import TransactionFilterSideBar from 'components/Admin/TransactionFilterSideBar'
import { TransactionType } from 'interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import { FormEvent, useEffect, useState } from 'react'
import { useStore } from 'store'
import ApiClient from 'utils/ApiClient'
import getLocaleDate from 'utils/getLocaleDate'
import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'

interface TransactionProps {
  transactions: TransactionType[]
  userId: number
  totalPages: number
  totalResults: number
  filterValues: any
}

const Transactions: NextPage<TransactionProps> = ({
  transactions,
  userId,
  totalPages,
  totalResults,
  filterValues
}) => {
  const { updateToast } = useStore()
  const [transactionList, setTransactionList] = useState<any[]>([])
  const [pageNumber, setPageNumber] = useState(1)
  const [currentItemList, setCurrentItemList] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const [statusToFilter, setStatusToFilter] = useState<string>('-')
  const [typeToFilter, setTypeToFilter] = useState<string>('-')
  const [fromCreationDateToFilter, setFromCreationDateToFilter] =
    useState<Date | null>(null)
  const [toCreationDateToFilter, setToCreationDateToFilter] =
    useState<Date | null>(null)

  useEffect(() => {
    const filterVals = JSON.parse(filterValues)
    setStatusToFilter(filterVals.status)
    setTypeToFilter(filterVals.type)
    if (filterVals.fromCreationDateToFilter)
      setFromCreationDateToFilter(new Date(filterVals.fromCreationDateToFilter))
    if (filterVals.toCreationDateToFilter)
      setToCreationDateToFilter(new Date(filterVals.toCreationDateToFilter))
  }, [filterValues])

  useEffect(() => {
    setCount(totalPages)
  }, [totalPages])

  useEffect(() => {
    setTotalItems(totalResults)
  }, [totalResults])

  useEffect(() => {
    setTransactionList([{ page: 1, transactions }])
    setCurrentItemList(transactions)
    setIsLoading(false)
  }, [transactions])

  const fetchItems = async () => {
    if (pageNumber === 1) return
    setCurrentItemList([])
    setIsLoading(true)
    try {
      const { data } = await ApiClient({
        method: 'POST',
        url: '/admin/get-transactions',
        data: {
          offset: pageNumber ? pageNumber * 10 - 10 : 0,
          userId,
          statusToFilter,
          typeToFilter,
          fromCreationDateToFilter: fromCreationDateToFilter
            ? getLocaleDate(fromCreationDateToFilter)
            : undefined,
          toCreationDateToFilter: toCreationDateToFilter
            ? getLocaleDate(toCreationDateToFilter)
            : undefined
        }
      })
      setTransactionList([
        ...transactionList,
        { page: pageNumber, transactions: data.transactions ?? [] }
      ])
      setCurrentItemList(data.transactions ?? [])
      setIsLoading(false)
    } catch (error) {
      updateToast(true, 'Error: Something went wrong', true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const foundItem = transactionList.find(
      (transaction) => transaction.page === pageNumber
    )
    if (foundItem) setCurrentItemList(foundItem.transactions)
    else fetchItems()
  }, [pageNumber])

  const reset = () => {
    setStatusToFilter('-')
    setTypeToFilter('-')
    setFromCreationDateToFilter(null)
    setToCreationDateToFilter(null)
  }

  const handleFilter = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setTransactionList([])

    try {
      const { data } = await ApiClient({
        method: 'POST',
        url: '/admin/get-transactions',
        data: {
          statusToFilter,
          typeToFilter,
          fromCreationDateToFilter: fromCreationDateToFilter
            ? getLocaleDate(fromCreationDateToFilter)
            : undefined,
          toCreationDateToFilter: toCreationDateToFilter
            ? getLocaleDate(toCreationDateToFilter)
            : undefined,
          userId,
          offset: 0
        },
        headers: {
          'content-type': 'application/json'
        }
      })
      setIsLoading(false)
      setTransactionList([{ page: 1, transactions: data.transactions }])
      setCurrentItemList(data.transactions)
      setPageNumber(1)
      setCount(data.totalPages)
      setTotalItems(data.totalResults)
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Transactions
          </h1>
        </div>
      </div>
      <div className="container max-w-8xl p-5">
        <TransactionFilterSideBar
          statusToFilter={statusToFilter}
          typeToFilter={typeToFilter}
          fromCreationDateToFilter={fromCreationDateToFilter}
          toCreationDateToFilter={toCreationDateToFilter}
          handleSetStatusToFilter={setStatusToFilter}
          handleSetTypeToFilter={setTypeToFilter}
          handleSetFromCreationDateToFilter={setFromCreationDateToFilter}
          handleSetToCreationDateToFilter={setToCreationDateToFilter}
          reset={reset}
          handleFilter={handleFilter}
        />
        {isLoading && (
          <div className="flex justify-center mb-3">
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-10 h-10 text-primary animate-spin"
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
          </div>
        )}
        <div className="mt-16 text-sm">Total result found: {totalItems}</div>
        <div className="mt-5">
          <TransactionDataTable transactions={currentItemList} />
        </div>
        <div className="mt-16">
          <Pagination
            pageNum={pageNumber}
            totalPages={count}
            handlePageNumberChange={setPageNumber}
          />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query
}) => {
  const parsedCookie = req.cookies.token

  const filterValues: any = {
    status: '-',
    type: '-',
    fromCreationDateToFilter: null,
    toCreationDateToFilter: null
  }

  if (query) {
    const today = new Date()
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    const firstDayOfLastMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      1
    )
    const lastDayOfLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    )
    const yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)

    if (query.status) {
      filterValues.status =
        (query.status as string).charAt(0).toUpperCase() + query.status.slice(1)
    }
    if (query.type) {
      let str = query.type as string
      if (str.includes('_')) {
        const words = str.split('_')
        str = words
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      } else {
        str = str.charAt(0).toUpperCase() + str.slice(1)
      }
      filterValues.type = str
    }
    if (query.created === 'this_month') {
      filterValues.fromCreationDateToFilter = firstDayOfMonth
    }
    if (query.created === 'last_month') {
      filterValues.fromCreationDateToFilter = firstDayOfLastMonth
      filterValues.toCreationDateToFilter = lastDayOfLastMonth
    }
    if (query.created === 'today') {
      filterValues.fromCreationDateToFilter = today
    }
    if (query.created === 'yesterday') {
      filterValues.fromCreationDateToFilter = yesterday
      filterValues.toCreationDateToFilter = yesterday
    }
  }

  let token
  let transactions = null
  let totalPages = null
  let totalResults = 0
  if (parsedCookie) token = parseJwtFromCookie(parsedCookie)

  if (token) {
    try {
      const { payload } = await verifyJwt(token)
      if (!payload.admin_status)
        return {
          redirect: {
            destination: '/admin/login',
            permanent: false
          }
        }
      const response = await ApiClient({
        method: 'POST',
        url: '/admin/get-transactions',
        data: {
          userId: query?.userId,
          offset: 0,
          statusToFilter: filterValues.status,
          typeToFilter: filterValues.type,
          fromCreationDateToFilter: filterValues.fromCreationDateToFilter
            ? getLocaleDate(filterValues.fromCreationDateToFilter)
            : undefined,
          toCreationDateToFilter: filterValues.toCreationDateToFilter
            ? getLocaleDate(filterValues.toCreationDateToFilter)
            : undefined
        },
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      })
      transactions = response.data?.transactions ?? []
      totalPages = response.data?.totalPages ?? 0
      totalResults = response.data?.totalResults ?? 0
    } catch (err) {
      /* empty */
    }
  }

  return {
    props: {
      transactions,
      totalResults,
      userId: query?.userId ?? null,
      totalPages,
      filterValues: JSON.stringify(filterValues)
    }
  }
}

export default Transactions
