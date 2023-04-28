import Pagination from 'components/Admin/Pagination'
import PostDataTable from 'components/Admin/PostDataTable'
import PostFilterSideBar from 'components/Admin/PostFilterSideBar'
import { PostsWithUser } from 'interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import Router from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { useStore } from 'store'
import ApiClient from 'utils/ApiClient'
import getLocaleDate from 'utils/getLocaleDate'
import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'

interface AdminPostProps {
  posts: PostsWithUser[]
  userId: number
  totalPages: number
  totalResults: number
  filterValues: any
}

const Posts: NextPage<AdminPostProps> = ({
  posts,
  userId,
  totalPages,
  totalResults,
  filterValues
}) => {
  const { updateToast } = useStore()
  const [postList, setPostList] = useState<any[]>(posts)
  const [isLoading, setIsLoading] = useState(true)

  const [pageNumber, setPageNumber] = useState(1)
  const [currentItemList, setCurrentItemList] = useState<any[]>([])
  const [count, setCount] = useState(0)

  const [locationToFilter, setLocationToFilter] = useState<number>(0)
  const [categoryToFilter, setCategoryToFilter] = useState<number>(0)
  const [propertyTypeToFilter, setPropertyTypeToFilter] = useState<number>(0)
  const [fromPriceToFilter, setFromPriceToFilter] = useState<
    number | undefined
  >(undefined)
  const [toPriceToFilter, setToPriceToFilter] = useState<number | undefined>(
    undefined
  )
  const [fromCreationDateToFilter, setFromCreationDateToFilter] =
    useState<Date | null>(null)
  const [toCreationDateToFilter, setToCreationDateToFilter] =
    useState<Date | null>(null)
  const [stickyStatusToFilter, setStickyStatusToFilter] = useState<number>(0)
  const [userTypeToFilter, setUserTypeToFilter] = useState<string>('-')
  const [orderByToFilter, setOrderByToFilter] = useState<string>('Created')
  const [postStatusToFilter, setPostStatusToFilter] = useState<
    string | undefined
  >(undefined)

  useEffect(() => {
    const filterVals = JSON.parse(filterValues)
    if (filterVals.stickyStatusToFilter)
      setStickyStatusToFilter(filterVals.stickyStatusToFilter)
    if (filterVals.fromCreationDateToFilter)
      setFromCreationDateToFilter(new Date(filterVals.fromCreationDateToFilter))
    if (filterVals.toCreationDateToFilter)
      setToCreationDateToFilter(new Date(filterVals.toCreationDateToFilter))
  }, [filterValues])

  useEffect(() => {
    setCount(totalPages)
  }, [totalPages])

  useEffect(() => {
    setPostList([{ page: 1, posts }])
    setCurrentItemList(posts)
    setIsLoading(false)
  }, [posts])

  const fetchItems = async () => {
    if (pageNumber === 1) return

    setCurrentItemList([])
    setIsLoading(true)
    try {
      const { data } = await ApiClient({
        method: 'POST',
        url: '/admin/filter-posts',
        data: {
          offset: pageNumber ? pageNumber * 10 - 10 : 0,
          locationToFilter,
          categoryToFilter,
          propertyTypeToFilter,
          fromPriceToFilter,
          toPriceToFilter,
          fromCreationDateToFilter: fromCreationDateToFilter
            ? getLocaleDate(fromCreationDateToFilter)
            : undefined,
          toCreationDateToFilter: toCreationDateToFilter
            ? getLocaleDate(toCreationDateToFilter)
            : undefined,
          stickyStatusToFilter,
          userTypeToFilter,
          orderByToFilter,
          postStatusToFilter,
          userId
        }
      })
      setCount(data.totalPages)
      setPostList([...postList, { page: pageNumber, posts: data.posts ?? [] }])
      setCurrentItemList(data.posts ?? [])
      setIsLoading(false)
    } catch (error) {
      updateToast(true, 'Error: Something went wrong', true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const foundItem = postList.find((post) => post.page === pageNumber)
    if (foundItem) setCurrentItemList(foundItem.posts)
    else fetchItems()
  }, [pageNumber])

  const reset = () => {
    setLocationToFilter(0)
    setCategoryToFilter(0)
    setPropertyTypeToFilter(0)
    setFromPriceToFilter(undefined)
    setToPriceToFilter(undefined)
    setFromCreationDateToFilter(null)
    setToCreationDateToFilter(null)
    setStickyStatusToFilter(0)
    setUserTypeToFilter('-')
    setOrderByToFilter('Created')
    setPostStatusToFilter(undefined)
  }

  const handleFilter = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setPostList([])

    try {
      const { data } = await ApiClient({
        method: 'POST',
        url: '/admin/filter-posts',
        data: {
          locationToFilter,
          categoryToFilter,
          propertyTypeToFilter,
          fromPriceToFilter,
          toPriceToFilter,
          fromCreationDateToFilter: fromCreationDateToFilter
            ? getLocaleDate(fromCreationDateToFilter)
            : undefined,
          toCreationDateToFilter: toCreationDateToFilter
            ? getLocaleDate(toCreationDateToFilter)
            : undefined,
          stickyStatusToFilter,
          userTypeToFilter,
          orderByToFilter,
          postStatusToFilter,
          userId,
          offset: 0
        },
        headers: {
          'content-type': 'application/json'
        }
      })
      setIsLoading(false)
      setPostList([{ page: 1, posts: data.posts }])
      setCurrentItemList(data.posts)
      setPageNumber(1)
      setCount(data.totalPages)
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: Something went wrong', true)
    }
  }

  const handleStickPost = async (postId: number) => {
    if (!postId) return
    const post = postList.find((item) => item.id === postId)

    if (!post) {
      updateToast(true, 'Error: Something went wrong', true)
    }

    if (post?.is_sticky) {
      updateToast(true, `Error: The post is already sticked`, true)
      return false
    }
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'POST',
        url: '/admin/stick-post',
        data: { postId }
      })
      setIsLoading(false)
      updateToast(true, 'Success: Post sticked successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: Post sticked attempt failed', true)
    }
  }

  const handleDeletePost = async (postId: number | undefined) => {
    if (!postId) return
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'DELETE',
        url: '/admin/delete-post',
        data: { postId }
      })
      setIsLoading(false)
      updateToast(true, 'Success: Post deleted successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: Post delete attempt failed', true)
    }
  }

  const handlePermanentDeletePost = async (postId: number | undefined) => {
    if (!postId) return
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'DELETE',
        url: '/admin/delete-post-permanent',
        data: { postId }
      })
      setIsLoading(false)
      updateToast(true, 'Success: Post deleted successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: Post delete attempt failed', true)
    }
  }

  const handleRestorePost = async (postId: number | undefined) => {
    if (!postId) return
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'POST',
        url: '/post/restore',
        data: { postId }
      })
      setIsLoading(false)
      updateToast(true, 'Success: Post restored successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: Post restore attempt failed', true)
    }
  }

  const handleRePost = async (postId: number | undefined) => {
    if (!postId) return
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'POST',
        url: '/admin/repost',
        data: { postId }
      })
      setIsLoading(false)
      updateToast(true, 'Success: Post reposted successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: Post reposted attempt failed', true)
    }
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 md:px-8 py-4 flex items-center">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Posts
          </h1>
        </div>
      </div>
      <div className="container max-w-8xl p-5">
        <PostFilterSideBar
          locationToFilter={locationToFilter}
          categoryToFilter={categoryToFilter}
          propertyTypeToFilter={propertyTypeToFilter}
          fromPriceToFilter={fromPriceToFilter}
          toPriceToFilter={toPriceToFilter}
          fromCreationDateToFilter={fromCreationDateToFilter}
          toCreationDateToFilter={toCreationDateToFilter}
          stickyStatusToFilter={stickyStatusToFilter}
          userTypeToFilter={userTypeToFilter}
          orderByToFilter={orderByToFilter}
          postStatusToFilter={postStatusToFilter}
          handleSetLocationToFilter={setLocationToFilter}
          handleSetCategoryToFilter={setCategoryToFilter}
          handleSetPropertyTypeToFilter={setPropertyTypeToFilter}
          handleSetFromPriceToFilter={setFromPriceToFilter}
          handleSetToPriceToFilter={setToPriceToFilter}
          handleSetFromCreationDateToFilter={setFromCreationDateToFilter}
          handleSetToCreationDateToFilter={setToCreationDateToFilter}
          handleSetStickyStatusToFilter={setStickyStatusToFilter}
          handleSetUserTypeToFilter={setUserTypeToFilter}
          handleSetOrderByToFilter={setOrderByToFilter}
          handleSetPostStatusToFilter={setPostStatusToFilter}
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
        <div className="mt-16 text-sm">Total result found: {totalResults}</div>
        <div className="mt-5">
          <PostDataTable
            posts={currentItemList}
            handleStickPost={handleStickPost}
            handleDeletePost={handleDeletePost}
            handlePermanentDeletePost={handlePermanentDeletePost}
            handleRePost={handleRePost}
            handleRestorePost={handleRestorePost}
          />
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
    stickyStatusToFilter: 0,
    fromCreationDateToFilter: null,
    toCreationDateToFilter: null
  }

  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)

  if (query) {
    if (query.sticky && query.sticky === '1')
      filterValues.stickyStatusToFilter = 1
    if (query.created_at && query.created_at === 'today')
      filterValues.fromCreationDateToFilter = today
    if (query.created_at && query.created_at === 'yesterday') {
      filterValues.fromCreationDateToFilter = yesterday
      filterValues.toCreationDateToFilter = yesterday
    }
  }

  let token
  let posts = null
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
        url: '/admin/filter-posts',
        data: {
          postStatusToFilter: undefined,
          userId: query?.userId,
          offset: 0,
          stickyStatusToFilter: filterValues.stickyStatusToFilter,
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
      posts = response.data?.posts ?? []
      totalPages = response.data?.totalPages ?? 0
      totalResults = response.data?.totalResults ?? 0
    } catch (err) {
      /* empty */
    }
  }

  return {
    props: {
      posts,
      totalPages,
      totalResults,
      userId: query?.userId ?? null,
      filterValues: JSON.stringify(filterValues)
    }
  }
}

export default Posts
