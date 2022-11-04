import type { NextPage } from 'next'
import Link from 'next/link'

import BalanceCard from 'components/Account/BalanceCard'
import PostCard from 'components/Posts/PostCard'

const posts = [
  {
    id: 0,
    title: 'بيت للبيع في سعد العبد الله',
    views: 5,
    createdAt: '1 دقيقة',
    price: 1000,
    description: 'سعد العبد الله للبيع بيت شارع واحد وارتداد مراجعه ٣١٠',
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

const Account: NextPage = () => {
  return (
    <div className="dir-rtl container max-w-4xl py-10 px-5 flex flex-col gap-10 items-center">
      <BalanceCard />
      <div className="flex justify-center gap-2 pb-5">
        <Link href="https://api.whatsapp.com/send/?phone=96560444900&text&type=phone_number&app_absent=0">
          <a className="text-primary hover:underline">راسلنا بالواتس اب</a>
        </Link>
        <p>او</p>
        <Link href="tel:+96560444900">
          <a className="text-primary hover:underline">اتصل بنا</a>
        </Link>
        <p>للمساعده</p>
      </div>
      <div className="w-full">
        <h3 className="text-xl font-bold tracking-widest">إعلاناتي</h3>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Account
