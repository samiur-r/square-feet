import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

import BalanceCard from 'components/Account/BalanceCard'
import PostCard from 'components/Posts/PostCard'
import Description from 'components/Description'
import ApiClient from 'utils/ApiClient'
import Router, { useRouter } from 'next/router'
import { useStore } from 'store'
import { useEffect, useRef, useState } from 'react'
import { ICredit, IPost } from 'interfaces'
import { useOnScreen } from 'hooks/useOnScreen'
import calculateTimeLeft from 'utils/calculateTimeLeft'

interface AccountType {
  agent: any
  credits: ICredit
  archivedPosts: IPost[]
  totalPosts: number
  totalArchivePosts: number
}

const MyPosts: NextPage<AccountType> = ({
  agent,
  credits,
  archivedPosts,
  totalPosts,
  totalArchivePosts
}) => {
  const [showArchivedPosts, setShowArchivedPosts] = useState(false)
  const {
    scrollYTo,
    scrollPosition,
    accountPostCount,
    locationsSelected,
    propertyTypeSelected,
    categorySelected,
    setArchivedLocationsSelected,
    setArchivedPropertyTypeSelected,
    setArchivedCategorySelected,
    updateFilteredArchivedPostsCount,
    updateFilteredArchivedPosts,
    updateScrollYTo,
    updateToast,
    updateScrollPosition,
    updateAccountPostCount
  } = useStore()
  const router = useRouter()
  // const expiredDate = agent
  //   ? new Date(agent?.subscription_ends_date)
  //   : undefined
  // const hours = expiredDate?.getHours().toString().padStart(2, '0')
  // const minutes = expiredDate?.getMinutes().toString().padStart(2, '0')

  const [isFetchingArchivedPosts, setIsFetchingArchivedPosts] = useState(false)
  const [postList, setPostList] = useState<any>([])
  const [postCount, setPostCount] = useState(0)
  const [isFirstRender, setIsFirstRender] = useState(true)

  const [archivePostList, setArchivePostList] = useState(archivedPosts)
  const [archivePostCount, setArchivePostCount] = useState(
    archivedPosts?.length || 0
  )

  const [offset, setOffset] = useState(10)
  const [limit] = useState(10)
  const [isCallingApi, setIsCallingAPi] = useState(false)
  const [expiring, setExpiring] = useState('')

  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useOnScreen(ref)

  useEffect(() => {
    if (agent) {
      const timeLeft = calculateTimeLeft(
        agent.subscription_ends_date.toString()
      )
      setExpiring(timeLeft)
    }
  }, [agent])

  const fetchPosts = async (limitNum: number, offsetNum: number) => {
    if (totalPosts && postCount >= totalPosts) return
    setIsCallingAPi(true)

    let countPost = accountPostCount

    if (offset === 0) {
      updateAccountPostCount(0)
      countPost = 0
    }

    try {
      const response = await ApiClient({
        method: 'POST',
        url: `/post/get-many?limit=${limitNum}&offset=${offsetNum}`
      })
      setIsCallingAPi(false)
      setPostList([...postList, ...response.data.posts])
      updateAccountPostCount(countPost + response.data.posts.length)
      setIsFirstRender(false)
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
    if (scrollYTo) {
      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition,
          left: 0,
          behavior: 'smooth'
        })
      }, 200)
    }

    fetchPosts(accountPostCount ? Math.ceil(accountPostCount / 10) * 10 : 10, 0)

    const handleRouteChange = () => {
      updateScrollPosition(window.scrollY)
    }
    const handleBeforeUnload = (e: any) => {
      e.preventDefault()
      updateAccountPostCount(0)
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    router.events.on('routeChangeStart', handleRouteChange)

    // Cleanup the event listener
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      updateScrollYTo(false)
    }
  }, [])

  useEffect(() => {
    if (isIntersecting && !isFirstRender) {
      if (showArchivedPosts) {
        if (totalArchivePosts && archivePostCount < totalArchivePosts) {
          setIsCallingAPi(true)
          fetchArchivePosts()
        }
      } else if (totalPosts && postCount < totalPosts) {
        setIsCallingAPi(true)
        fetchPosts(
          10,
          accountPostCount ? Math.ceil(accountPostCount / 10) * 10 : 10
        )
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
      title: 'إنتهاء الإشتراك',
      value: expiring
    }
    // {
    //   title: 'وقت الإنتهاء',
    //   value: hours && minutes ? `${hours}:${minutes}م` : '-'
    // }
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

  const handleArchivedPostSearch = async () => {
    setIsFetchingArchivedPosts(true)
    setArchivedLocationsSelected(locationsSelected)
    setArchivedPropertyTypeSelected(propertyTypeSelected)
    setArchivedCategorySelected(categorySelected)
    try {
      const response = await ApiClient({
        method: 'POST',
        url: '/search/archived',
        data: {
          limit: 10,
          offset: 0,
          location: locationsSelected,
          propertyType: propertyTypeSelected,
          category: categorySelected
        }
      })
      updateFilteredArchivedPostsCount(response?.data?.count)
      updateFilteredArchivedPosts(response?.data?.posts)
      setIsFetchingArchivedPosts(false)
      Router.push('/archived-posts')
    } catch (error) {
      setIsFetchingArchivedPosts(false)
    }
  }

  return (
    <div className="bg-custom-white-light">
      <div className="min-h-screen dir-rtl container max-w-6xl pt-10 pb-8 flex flex-col gap-5 items-center">
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
                { title: 'بياناتي', href: '/المكاتب/edit' },
                { title: 'صفحتي', href: `/المكاتب/${agent?.user?.phone}` }
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
                <PostCard key={post.id} post={post} showActions isArchive />
              ))
            : postList &&
              postList.length > 0 &&
              postList.map((post: any) => (
                <PostCard key={post.id} post={post} showActions />
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
            {isFetchingArchivedPosts ? (
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
            ) : (
              <a onClick={handleArchivedPostSearch}>
                {' '}
                انتهت نتائج البحث ولا يوجد المزيد من الاعلانات
              </a>
            )}
          </p>
        </div>
        <div className="w-12 h-12 rounded-full bg-primary fixed right-3 bottom-10 w-50 flex justify-center items-center">
          <Link href="/post?mode=create">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </a>
          </Link>
        </div>
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
