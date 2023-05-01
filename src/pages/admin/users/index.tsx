import Pagination from 'components/Admin/Pagination'
import UserDataTable from 'components/Admin/UserDataTable'
import UserFilterBar from 'components/Admin/UserFilterBar'
import { AdminUser } from 'interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import Router from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { useStore } from 'store'
import ApiClient from 'utils/ApiClient'
import getLocaleDate from 'utils/getLocaleDate'
import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'

interface AdminPostProps {
  users: AdminUser[]
  totalPages: number
  totalResults: number
  filterValues: any
}

const Users: NextPage<AdminPostProps> = ({
  users,
  totalPages,
  totalResults,
  filterValues
}) => {
  const { updateToast } = useStore()
  const [userList, setUserList] = useState<any[]>(users)
  const [isLoading, setIsLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)
  const [currentItemList, setCurrentItemList] = useState<any[]>([])

  const [statusToFilter, setStatusToFilter] = useState<number | string>(0)
  const [phoneToFilter, setPhoneToFilter] = useState<string>('')
  const [adminCommentToFilter, setAdminCommentToFilter] = useState<string>('')
  const [fromCreationDateToFilter, setFromCreationDateToFilter] =
    useState<Date | null>(null)
  const [toCreationDateToFilter, setToCreationDateToFilter] =
    useState<Date | null>(null)
  const [orderByToFilter, setOrderByToFilter] = useState<string>('Registered')
  const [count, setCount] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    const filterVals = JSON.parse(filterValues)
    setStatusToFilter(filterVals.status)
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
    setUserList([{ page: 1, users }])
    setCurrentItemList(users)
    setIsLoading(false)
  }, [users])

  const fetchItems = async () => {
    if (pageNumber === 1) return
    setCurrentItemList([])
    setIsLoading(true)

    try {
      const { data } = await ApiClient({
        method: 'POST',
        url: '/admin/filter-users',
        data: {
          offset: pageNumber ? pageNumber * 10 - 10 : 0,
          statusToFilter,
          phoneToFilter,
          adminCommentToFilter,
          fromCreationDateToFilter: fromCreationDateToFilter
            ? getLocaleDate(fromCreationDateToFilter)
            : undefined,
          toCreationDateToFilter: toCreationDateToFilter
            ? getLocaleDate(toCreationDateToFilter)
            : undefined,
          orderByToFilter
        }
      })
      setUserList([...userList, { page: pageNumber, users: data.users ?? [] }])
      setCurrentItemList(data.users ?? [])
      setIsLoading(false)
    } catch (error) {
      updateToast(true, 'Error: Something went wrong', true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const foundItem = userList.find((user) => user.page === pageNumber)
    if (foundItem) setCurrentItemList(foundItem.users)
    else fetchItems()
  }, [pageNumber])

  const reset = () => {
    setStatusToFilter(0)
    setPhoneToFilter('')
    setAdminCommentToFilter('')
    setFromCreationDateToFilter(null)
    setToCreationDateToFilter(null)
    setOrderByToFilter('Registered')
  }

  const handleFilter = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setUserList([])

    try {
      const { data } = await ApiClient({
        method: 'POST',
        url: '/admin/filter-users',
        data: {
          statusToFilter,
          phoneToFilter,
          adminCommentToFilter,
          fromCreationDateToFilter: fromCreationDateToFilter
            ? getLocaleDate(fromCreationDateToFilter)
            : undefined,
          toCreationDateToFilter: toCreationDateToFilter
            ? getLocaleDate(toCreationDateToFilter)
            : undefined,
          orderByToFilter,
          offset: 0
        },
        headers: {
          'content-type': 'application/json'
        }
      })
      setIsLoading(false)
      setUserList([{ page: 1, users: data.users }])
      setCurrentItemList(data.users)
      setPageNumber(1)
      setCount(data.totalPages)
      setTotalItems(data.totalResults)
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: Something went wrong', true)
    }
  }

  const updateUserCredit = async (
    creditAmount: number | undefined,
    creditType: string | undefined,
    userId: number | undefined
  ) => {
    if (creditAmount === undefined || !creditType || !userId) return
    setIsLoading(true)

    try {
      await ApiClient({
        method: 'POST',
        url: '/admin/update-credit',
        data: {
          creditAmount,
          creditType,
          userId
        },
        headers: {
          'content-type': 'application/json'
        }
      })
      setIsLoading(false)
      updateToast(true, 'Success: Credit updated successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Success: Credit update attempt failed', true)
    }
  }

  const handleVerifyUser = async (id: number) => {
    if (!id) return
    const user = currentItemList?.find((item) => item.id === id)

    if (!user) {
      updateToast(true, 'Error: Something went wrong', true)
      return
    }

    if (user.status === 'verified') {
      updateToast(true, 'Error: User is already verified', true)
    }

    setIsLoading(true)
    try {
      await ApiClient({
        method: 'POST',
        url: '/admin/verify-user',
        data: { userId: id }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User verified successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User verification attempt failed', true)
    }
  }

  const handleBlockUser = async (id: number | undefined) => {
    if (!id) return
    const user = currentItemList?.find((item) => item.id === id)

    if (!user) {
      updateToast(true, 'Error: Something went wrong', true)
      return
    }

    if (user.is_blocked) {
      updateToast(true, 'Error: User is already blocked', true)
      return
    }

    setIsLoading(true)
    try {
      await ApiClient({
        method: 'PUT',
        url: '/admin/block-status',
        data: { userId: id, status: true }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User blocked successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User block attempt failed', true)
    }
  }

  const handleUnBlockUser = async (id: number | undefined) => {
    if (!id) return
    const user = currentItemList?.find((item) => item.id === id)

    if (!user) {
      updateToast(true, 'Error: Something went wrong', true)
      return
    }

    if (!user.is_blocked) {
      updateToast(true, 'Error: User is not blocked', true)
      return
    }

    setIsLoading(true)
    try {
      await ApiClient({
        method: 'PUT',
        url: '/admin/block-status',
        data: { userId: id, status: false }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User unblocked successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User unblock attempt failed', true)
    }
  }

  const handleUpdateAdminComment = async (
    userId: number | undefined,
    adminComment: string | undefined
  ) => {
    if (!userId) {
      updateToast(true, 'Error: Something went wrong', true)
      return
    }

    setIsLoading(true)
    try {
      await ApiClient({
        method: 'PUT',
        url: '/admin/admin-comment',
        data: { userId, adminComment }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User comment updated successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User comment update attempt failed', true)
    }
  }

  const handleDeleteUser = async (userId: number | undefined) => {
    if (!userId) return
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'DELETE',
        url: '/user',
        data: { userId }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User deleted successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User delete attempt failed', true)
    }
  }

  const handlePermanentDeleteUser = async (userId: number | undefined) => {
    if (!userId) return
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'DELETE',
        url: '/admin/user-permanent',
        data: { userId }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User deleted permanently', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User permanent delete attempt failed', true)
    }
  }

  const handleRestoreUser = async (userId: number | undefined) => {
    if (!userId) return
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'POST',
        url: '/admin/restore',
        data: { userId }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User restored successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User restore attempt failed', true)
    }
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Users
          </h1>
        </div>
      </div>
      <div className="container max-w-8xl p-5">
        <UserFilterBar
          statusToFilter={statusToFilter}
          phoneToFilter={phoneToFilter}
          adminCommentToFilter={adminCommentToFilter}
          fromCreationDateToFilter={fromCreationDateToFilter}
          toCreationDateToFilter={toCreationDateToFilter}
          orderByToFilter={orderByToFilter}
          handleSetStatusToFilter={setStatusToFilter}
          handleSetPhoneToFilter={setPhoneToFilter}
          handleSetAdminCommentToFilter={setAdminCommentToFilter}
          handleSetFromCreationDateToFilter={setFromCreationDateToFilter}
          handleSetToCreationDateToFilter={setToCreationDateToFilter}
          handleSetOrderByToFilter={setOrderByToFilter}
          reset={reset}
          handleFilter={handleFilter}
        />
        {isLoading && (
          <div className="flex justify-center my-5">
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
          <UserDataTable
            users={currentItemList}
            updateUserCredit={updateUserCredit}
            handleVerifyUser={handleVerifyUser}
            handleBlockUser={handleBlockUser}
            handleUnBlockUser={handleUnBlockUser}
            handleUpdateAdminComment={handleUpdateAdminComment}
            handleDeleteUser={handleDeleteUser}
            handlePermanentDeleteUser={handlePermanentDeleteUser}
            handleRestoreUser={handleRestoreUser}
          />
        </div>
        <div className="mt-16">
          <Pagination
            totalPages={count}
            handlePageNumberChange={setPageNumber}
            pageNum={pageNumber}
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
    status: 0,
    fromCreationDateToFilter: null,
    toCreationDateToFilter: null
  }

  if (query) {
    const today = new Date()
    const yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)

    const kuwaitTime = new Date(new Date().getTime() + 3 * 60 * 60 * 1000)
    console.log(kuwaitTime)

    if (query.status && query.status === 'not_verified')
      filterValues.status = 'Not Verified'
    if (query.status && query.status === 'active_today') {
      filterValues.status = 'Active Today'
    }
    if (query.status && query.status === 'active_yesterday') {
      filterValues.status = 'Active Yesterday'
    }
    if (query.status && query.status === 'zero_free')
      filterValues.status = 'Zero Free'
    if (query.status && query.status === 'has_regular_history')
      filterValues.status = 'Has Regular Credit History'
    if (query.status && query.status === 'has_sticky_history')
      filterValues.status = 'Has Sticky Credit History'
    if (query.status && query.status === 'has_direct_history')
      filterValues.status = 'Has Direct Sticky Credit History'
    if (query.status && query.status === 'has_agent_history')
      filterValues.status = 'Has Agent History'
    if (query.status && query.status === 'agent') filterValues.status = 'Agent'
    if (query.status && query.status === 'has_regular_credits')
      filterValues.status = 'Has Regular Credits'
    if (query.status && query.status === 'has_sticky_credits')
      filterValues.status = 'Has Sticky Credits'
    if (query.status && query.status === 'has_agent_credits')
      filterValues.status = 'Has Agent Credits'
    if (query.created_at && query.created_at === 'today')
      filterValues.fromCreationDateToFilter = today
    if (query.created_at && query.created_at === 'yesterday') {
      filterValues.fromCreationDateToFilter = yesterday
      filterValues.toCreationDateToFilter = yesterday
    }
  }

  let token
  let users = []
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
        url: '/admin/filter-users',
        data: {
          offset: 0,
          orderByToFilter: 'Registered',
          statusToFilter: filterValues.status,
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
      users = response.data?.users ?? []
      totalPages = response.data?.totalPages ?? null
      totalResults = response.data?.totalResults ?? 0
    } catch (err) {
      /* empty */
    }
  }

  return {
    props: {
      users,
      totalPages,
      totalResults,
      filterValues: JSON.stringify(filterValues)
    }
  }
}

export default Users
