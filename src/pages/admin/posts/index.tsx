import { AdjustmentsVerticalIcon } from '@heroicons/react/20/solid'
import PostDataTable from 'components/Admin/PostDataTable'
import PostFilterSideBar from 'components/Admin/PostFilterSideBar'
import { PostsWithUser } from 'interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import Router from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { useStore } from 'store'
import ApiClient from 'utils/ApiClient'
import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'

interface AdminPostProps {
  posts: PostsWithUser[]
  userId: number
}

const Posts: NextPage<AdminPostProps> = ({ posts, userId }) => {
  const { updateToast } = useStore()
  const [showFilterSideBar, setShowFilterSideBar] = useState(false)
  const [postList, setPostList] = useState<PostsWithUser[]>([])
  const [isLoading, setIsLoading] = useState(true)

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
  const [postStatusToFilter, setPostStatusToFilter] = useState<string>('Active')

  useEffect(() => {
    setPostList(posts)
    setIsLoading(false)
  }, [posts])

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
    setPostStatusToFilter('Active')
  }

  const handleFilter = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoading(true)

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
          fromCreationDateToFilter,
          toCreationDateToFilter,
          stickyStatusToFilter,
          userTypeToFilter,
          orderByToFilter,
          postStatusToFilter,
          userId
        },
        headers: {
          'content-type': 'application/json'
        }
      })
      setIsLoading(false)
      setPostList(data.posts)
    } catch (error) {
      setIsLoading(false)
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
        data: { postId, isArchive: postStatusToFilter === 'Archived' }
      })
      setIsLoading(false)
      updateToast(true, 'Success: Post deleted successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: Post delete attempt failed', true)
    }
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Posts
          </h1>
        </div>
        <div className="min-w-0 flex-1 flex justify-end">
          <AdjustmentsVerticalIcon
            className="h6 w-6 text-primary cursor-pointer"
            onClick={() => setShowFilterSideBar(!showFilterSideBar)}
          />
        </div>
      </div>
      <div className="container max-w-8xl p-5">
        <PostFilterSideBar
          show={showFilterSideBar}
          handleSetShowFilterSideBar={setShowFilterSideBar}
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
        <div className="mt-16">
          <PostDataTable
            posts={postList}
            handleStickPost={handleStickPost}
            handleDeletePost={handleDeletePost}
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

  console.log(query)

  let token
  let posts = null
  let totalPosts = null
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
        data: { postStatusToFilter: 'Active', userId: query?.userId },
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      })
      posts = response.data?.posts ?? []
      totalPosts = response.data?.totalPosts ?? 0
    } catch (err) {
      /* empty */
    }
  }

  return {
    props: { posts, totalPosts, userId: query?.userId ?? null }
  }
}

export default Posts
