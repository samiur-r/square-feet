import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

import BalanceCard from 'components/Account/BalanceCard'
import PostCard from 'components/Posts/PostCard'
import Description from 'components/Description'
import ApiClient from 'utils/ApiClient'
import Router, { useRouter } from 'next/router'
import { useStore } from 'store'
import { useEffect, useState } from 'react'
import { IAgent, ICredit, IPost } from 'interfaces'

interface AccountType {
  agent: IAgent | null
  credits: ICredit
  posts: IPost[] | null
  archivedPosts: IPost[] | null
}

const MyPosts: NextPage<AccountType> = ({
  agent,
  credits,
  posts,
  archivedPosts
}) => {
  const [showArchivedPosts, setShowArchivedPosts] = useState(false)
  const { removeUser, updateToast } = useStore()
  const router = useRouter()
  const expiredDate = agent ? new Date(agent?.expiry_date) : undefined
  const hours = expiredDate?.getHours().toString().padStart(2, '0')
  const minutes = expiredDate?.getMinutes().toString().padStart(2, '0')

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

  const logout = async () => {
    try {
      await ApiClient({
        method: 'GET',
        url: `/user/logout`
      })
      removeUser()
      Router.push('/login')
      // eslint-disable-next-line no-empty
    } catch (err) {}
  }
  return (
    <div className="dir-rtl container max-w-6xl pt-10 pb-8 flex flex-col gap-5 items-center bg-custom-white-light md:bg-white">
      <button
        onClick={logout}
        className="bg-primary p-2 text-white"
        type="button"
      >
        Logout
      </button>
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
          ? archivedPosts &&
            archivedPosts?.length >= 1 &&
            archivedPosts.map((post) => (
              <PostCard key={post.id} post={post} showActions isArchive />
            ))
          : posts &&
            posts?.length >= 1 &&
            posts.map((post) => (
              <PostCard key={post.id} post={post} showActions />
            ))}
        <p className="text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8">
          انتهت نتائج البحث ولا يوجد المزيد من النتائج
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
        archivedPosts: response.data?.success?.archivedPosts
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
