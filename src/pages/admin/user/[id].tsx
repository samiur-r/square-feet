import Pagination from 'components/Admin/Pagination'
import PostDataTable from 'components/Admin/PostDataTable'
import UserDataTable from 'components/Admin/UserDataTable'
import { AdminUser, PostsWithUser } from 'interfaces'
import { GetServerSideProps, NextPage } from 'next'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useStore } from 'store'
import ApiClient from 'utils/ApiClient'
import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'

interface AdminPostProps {
  posts: PostsWithUser[]
  totalPages: number
  totalResults: number
  userId: number | null
  user: AdminUser[]
}

const User: NextPage<AdminPostProps> = ({
  posts,
  totalPages,
  totalResults,
  userId,
  user
}) => {
  const { updateToast } = useStore()
  const [postList, setPostList] = useState<any[]>(posts)
  const [userList, setUserList] = useState<AdminUser[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const [pageNumber, setPageNumber] = useState(1)
  const [currentItemList, setCurrentItemList] = useState<any[]>([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    setUserList(user)
    setIsLoading(false)
  }, [user])

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
          postStatusToFilter: undefined,
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

  const updateUserCredit = async (
    creditAmount: number | undefined,
    creditType: string | undefined,
    _userId: number | undefined
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
          userId: _userId
        },
        headers: {
          'content-type': 'application/json'
        }
      })
      setIsLoading(false)
      updateToast(true, 'Success: Credit updated successfully', false)
      Router.push('/admin/users')
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Success: Credit update attempt failed', true)
    }
  }

  const handleVerifyUser = async (id: number) => {
    if (!id) return
    const userObj = userList?.find((item) => item.id === id)

    if (!userObj) {
      updateToast(true, 'Error: Something went wrong', true)
      return
    }

    if (userObj.status === 'verified') {
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
    const userObj = userList?.find((item) => item.id === id)

    if (!userObj) {
      updateToast(true, 'Error: Something went wrong', true)
      return
    }

    if (userObj.is_blocked) {
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
    const userObj = userList?.find((item) => item.id === id)

    if (!userObj) {
      updateToast(true, 'Error: Something went wrong', true)
      return
    }

    if (!userObj.is_blocked) {
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
    _userId: number | undefined,
    adminComment: string | undefined
  ) => {
    if (!_userId) {
      updateToast(true, 'Error: Something went wrong', true)
      return
    }

    setIsLoading(true)
    try {
      await ApiClient({
        method: 'PUT',
        url: '/admin/admin-comment',
        data: { userId: _userId, adminComment }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User comment updated successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User comment update attempt failed', true)
    }
  }

  const handleDeleteUser = async (id: number | undefined) => {
    if (!id) return
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'DELETE',
        url: '/user',
        data: { userId: id }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User deleted successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User delete attempt failed', true)
    }
  }

  const handlePermanentDeleteUser = async (id: number | undefined) => {
    if (!id) return
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'DELETE',
        url: '/admin/user-permanent',
        data: { userId: id }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User deleted permanently', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User permanent delete attempt failed', true)
    }
  }

  const handleRestoreUser = async (id: number | undefined) => {
    if (!id) return
    setIsLoading(true)
    try {
      await ApiClient({
        method: 'POST',
        url: '/admin/restore',
        data: { userId: id }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User restored successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User restore attempt failed', true)
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

  return (
    <div className="mb-10">
      <div className="border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            User: {userList && userList.length ? userList[0].phone : ''}
          </h1>
        </div>
      </div>
      <div className="container max-w-8xl p-5">
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
          <div className="mb-10 text-xl font-bold text-center">User Info</div>
          <UserDataTable
            users={userList}
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
  params
}) => {
  const parsedCookie = req.cookies.token
  let token
  let posts = []
  let totalPages = null
  let totalResults = 0
  let user: any[] = []
  const userId = params?.id

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
      const responsePosts = await ApiClient({
        method: 'POST',
        url: '/admin/filter-posts',
        data: { postStatusToFilter: undefined, userId, offset: 0 },
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      })
      const responseUser = await ApiClient({
        method: 'POST',
        url: '/admin/filter-user',
        data: { userId },
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      })
      user = responseUser.data?.user ? [responseUser.data?.user] : []
      posts = responsePosts.data?.posts ?? []
      totalPages = responsePosts.data?.totalPages ?? 0
      totalResults = responsePosts.data?.totalResults ?? 0
    } catch (err) {
      /* empty */
    }
  }

  return {
    props: { posts, totalPages, totalResults, user, userId }
  }
}

export default User
