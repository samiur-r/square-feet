import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

import Title from 'components/Title'
import { IPost } from 'interfaces'
import ApiClient from 'utils/ApiClient'
import PostCard from './PostCard'

const Posts: React.FC<{ posts: IPost[]; totalPosts: number }> = ({
  posts,
  totalPosts
}) => {
  const [postList, setPostList] = useState(posts)
  const [postCount, setPostCount] = useState(posts?.length || 0)
  const [offset, setOffset] = useState(10)
  const [limit] = useState(10)
  const [isCallingApi, setIsCallingAPi] = useState(false)

  const fetchPosts = async () => {
    if (totalPosts && postCount >= totalPosts) return

    setIsCallingAPi(true)
    try {
      const response = await ApiClient({
        method: 'GET',
        url: `/post/get-many?limit=${limit}&offset=${offset}`
      })

      setIsCallingAPi(false)
      setPostList([...postList, ...response.data.posts])
      setOffset((curr) => curr + 10)
    } catch (error) {
      /* empty */
    }
  }

  useEffect(() => {
    setPostCount(postList?.length)
  }, [postList])

  return (
    <div className="dir-rtl container max-w-3xl pt-5 md:pt-0 pb-10 bg-custom-white-light md:bg-white">
      <Title value="أحدث الإعلانات" />
      {postList &&
        postList.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <a>
              <PostCard post={post} />
            </a>
          </Link>
        ))}
      {(totalPosts && postCount >= totalPosts) || postCount === 0 ? (
        <p className="text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8">
          انتهت نتائج البحث ولا يوجد المزيد من الاعلانات
        </p>
      ) : (
        <div className="mt-10 max-w-xs px-10 m-auto flex items-center justify-center">
          <button
            type="submit"
            className="bg-secondary rounded-lg w-full md:w-auto flex justify-center items-center py-3 md:py-4 px-8 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300"
            onClick={fetchPosts}
          >
            <span>المزيد</span>
            {isCallingApi ? (
              <div className="flex justify-center">
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-6 h-6 mr-3 text-white animate-spin"
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
            ) : (
              <PlusCircleIcon className="h-6 w-6 mr-3" />
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default Posts
