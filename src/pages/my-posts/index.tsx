import type { NextPage } from 'next'
import Link from 'next/link'

import BalanceCard from 'components/Account/BalanceCard'
import PostCard from 'components/Posts/PostCard'
import Description from 'components/Description'
import ApiClient from 'utils/ApiClient'
import Router from 'next/router'
// import { useAppStore } from 'store'

const posts = [
  {
    id: 0,
    title: 'بيت للبيع في سعد العبد الله',
    views: 5,
    createdAt: '1 دقيقة',
    price: 1000,
    description:
      'للبيع شاله في مرحله الرابعه A مساحه 450 متر تشطيب ممتاز 3 ادوار ونص بطن وظهر يمنع الوسطاء مراجعه 550 الف',
    isSticky: true,
    mobile: '1234',
    thumbnail: '/images/posts/post.jpeg',
    media: ['', '']
  },
  {
    id: 1,
    title: 'أرض للبيع في صباح الاحمد البحريه - الخيران',
    views: 10,
    createdAt: '2 دقيقة',
    price: 1100,
    description:
      'للبيع شاله في مرحله الرابعه A مساحه 450 متر تشطيب ممتاز 3 ادوار ونص بطن وظهر يمنع الوسطاء مراجعه 550 الف',
    isSticky: true,
    mobile: '1234',
    thumbnail: '/images/posts/post.jpeg',
    media: ['', '']
  }
]

const balanceItems = [
  {
    title: 'مجاني',
    value: 0
  },
  {
    title: 'اضافي',
    value: 9
  },
  {
    title: 'مميز',
    value: 0
  }
]

const agencyItems = [
  {
    title: 'عدد الإعلانات',
    value: 15
  },
  {
    title: 'تاريخ الإنتهاء',
    value: '13-01-2023'
  },
  {
    title: 'وقت الإنتهاء',
    value: '03:48 م'
  }
]

const MyPosts: NextPage = () => {
  // const { removeUser } = useAppStore()

  const logout = async () => {
    try {
      await ApiClient({
        method: 'GET',
        url: `/user/logout`
      })
      // removeUser()
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-auto">
        <BalanceCard
          headline="رصيدك من الاعلانات"
          items={balanceItems}
          ctaList={['اشحن الرصيد']}
        />
        <BalanceCard
          headline="رصيد اشتراك المكتب"
          items={agencyItems}
          ctaList={['بياناتي', 'صفحتي']}
        />
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
            إعلاناتي
          </h3>
          <Link href="/">
            <a className="hover:underline cursor-pointer text-primary ">
              (الاعلانات المنتهيه)
            </a>
          </Link>
        </div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} showActions />
        ))}
        <p className="text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8">
          انتهت نتائج البحث ولا يوجد المزيد من النتائج
        </p>
      </div>
    </div>
  )
}

export default MyPosts
