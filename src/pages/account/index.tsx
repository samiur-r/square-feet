import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

import BalanceCard from 'components/Account/BalanceCard'
import PostCard from 'components/Posts/PostCard'
import Description from 'components/Description'
import ApiClient from 'utils/ApiClient'
import Router, { useRouter } from 'next/router'
import { useStore } from 'store'
import { useEffect, useRef, useState } from 'react'
import { IAgent, ICredit, IPost } from 'interfaces'
import { useOnScreen } from 'hooks/useOnScreen'

interface AccountType {
  agent: IAgent | null
  credits: ICredit
  posts: IPost[]
  archivedPosts: IPost[]
  totalPosts: number
  totalArchivePosts: number
}

const MyPosts: NextPage<AccountType> = ({
  agent,
  credits,
  posts,
  archivedPosts,
  totalPosts,
  totalArchivePosts
}) => {
  const [showArchivedPosts, setShowArchivedPosts] = useState(false)
  const { updateToast } = useStore()
  const router = useRouter()
  const expiredDate = agent ? new Date(agent?.expiry_date) : undefined
  const hours = expiredDate?.getHours().toString().padStart(2, '0')
  const minutes = expiredDate?.getMinutes().toString().padStart(2, '0')

  const [postList, setPostList] = useState(posts)
  const [postCount, setPostCount] = useState(posts?.length || 0)

  const [archivePostList, setArchivePostList] = useState(archivedPosts)
  const [archivePostCount, setArchivePostCount] = useState(
    archivedPosts?.length || 0
  )

  const [offset, setOffset] = useState(10)
  const [limit] = useState(10)
  const [isCallingApi, setIsCallingAPi] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useOnScreen(ref)

  const fetchPosts = async () => {
    try {
      const response = await ApiClient({
        method: 'POST',
        url: `/post/get-many?limit=${limit}&offset=${offset}`
      })
      setIsCallingAPi(false)
      setPostList([...postList, ...response.data.posts])
      setOffset((curr) => curr + 10)
    } catch (error) {
      /* empty */
    }
  }

  const fetchArchivePosts = async () => {
    try {
      const response = await ApiClient({
        method: 'POST',
        url: `/post/archive/get-many?limit=${limit}&offset=${offset}`
      })
      setIsCallingAPi(false)
      setArchivePostList([...archivePostList, ...response.data.posts])
      setOffset((curr) => curr + 10)
    } catch (error) {
      /* empty */
    }
  }

  useEffect(() => {
    if (isIntersecting) {
      if (showArchivedPosts) {
        if (totalArchivePosts && archivePostCount < totalArchivePosts) {
          setIsCallingAPi(true)
          fetchArchivePosts()
        }
      } else if (totalPosts && postCount < totalPosts) {
        setIsCallingAPi(true)
        fetchPosts()
      }
    }
  }, [isIntersecting])

  useEffect(() => {
    setPostCount(postList?.length)
  }, [postList])

  useEffect(() => {
    setArchivePostCount(archivePostList?.length)
  }, [archivePostList])

  const balanceItems = [
    {
      title: 'مجاني',
      value: credits?.free || 0
    },
    {
      title: 'اضافي',
      value: credits?.regular || 0
    },
    {
      title: 'مميز',
      value: credits?.sticky || 0
    }
  ]

  const agencyItems = [
    {
      title: 'عدد الإعلانات',
      value: credits?.agent || 0
    },
    {
      title: 'تاريخ الإنتهاء',
      value: expiredDate ? expiredDate.toISOString().substring(0, 10) : '-'
    },
    {
      title: 'وقت الإنتهاء',
      value: hours && minutes ? `${hours}:${minutes}م` : '-'
    }
  ]

  useEffect(() => {
    if (!router.isReady) return

    const { query } = router

    if (query && query.success === 'true') {
      updateToast(true, 'Success: Your payment was successful', false)
    } else if (query && query.success === 'false') {
      updateToast(true, 'Error: Payment failed', true)
    }
  }, [router.isReady, router.query])

  return (
    <div className="dir-rtl container max-w-6xl pt-10 pb-8 flex flex-col gap-5 items-center bg-custom-white-light md:bg-white">
      <div
        className={`${
          agent !== null && 'md:grid-cols-2 md:w-auto'
        } grid grid-cols-1 gap-10 w-full place-items-center`}
      >
        <BalanceCard
          headline="رصيدك من الاعلانات"
          items={balanceItems}
          ctaList={[{ title: 'اشحن الرصيد', href: '/topup' }]}
        />
        {agent !== null && (
          <BalanceCard
            headline="رصيد اشتراك المكتب"
            items={agencyItems}
            ctaList={[
              { title: 'بياناتي', href: '/agent/edit' },
              { title: 'صفحتي', href: '/agent' }
            ]}
          />
        )}
      </div>
      <Description textBlack>
        <span className="flex justify-center text-sm md:text-base gap-2 pb-5">
          <Link href="https://api.whatsapp.com/send/?phone=96560444900&text&type=phone_number&app_absent=0">
            <a className="text-primary hover:underline">راسلنا بالواتس اب</a>
          </Link>
          <span>او</span>
          <Link href="tel:+96560444900">
            <a className="text-primary hover:underline">اتصل بنا</a>
          </Link>
          <span>للمساعده</span>
        </span>
      </Description>
      <div className="md:max-w-3xl md:container">
        <div className="flex gap-3 items-center">
          <h3 className="text-base md:text-xl font-DroidArabicKufiBold">
            {showArchivedPosts ? 'الاعلانات المنتهيه' : 'إعلاناتي'}
          </h3>
          <button
            type="button"
            className="hover:underline cursor-pointer text-primary"
            onClick={() => setShowArchivedPosts(!showArchivedPosts)}
          >
            {showArchivedPosts ? '(إعلاناتي)' : '(الاعلانات المنتهيه)'}
          </button>
        </div>
        {showArchivedPosts
          ? archivePostList &&
            archivePostList.length > 0 &&
            archivePostList.map((post) => (
              <Link key={post.id} href={`/post/${post.id}`}>
                <a>
                  <PostCard post={post} showActions isArchive />
                </a>
              </Link>
            ))
          : postList &&
            postList.length > 0 &&
            postList.map((post) => (
              <Link key={post.id} href={`/post/${post.id}`}>
                <a>
                  <PostCard key={post.id} post={post} showActions />
                </a>
              </Link>
            ))}
        <div ref={ref} />
        {isCallingApi && (
          <div className="flex justify-center mt-10">
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
        <p className="text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8">
          انتهت نتائج البحث ولا يوجد المزيد من الاعلانات
        </p>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const response = await ApiClient({
      method: 'GET',
      url: '/account',
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie
      }
    })

    return {
      props: {
        agent: response.data?.success?.agent,
        credits: response.data?.success?.credits,
        posts: response.data?.success?.posts,
        archivedPosts: response.data?.success?.archivePosts,
        totalPosts: response.data?.success?.totalPosts
          ? response.data?.success?.totalPosts
          : 0,
        totalArchivePosts: response.data?.success?.totalArchivePosts
          ? response.data?.success?.totalArchivePosts
          : 0
      }
    }
  } catch (error) {
    /* empty */
  }

  return {
    props: {}
  }
}

export default MyPosts
