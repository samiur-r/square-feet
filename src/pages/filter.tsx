import type { NextPage } from 'next'
import { useCallback } from 'react'
import Link from 'next/link'

import PostCard from 'components/Posts/PostCard'
import FilterArticle from 'components/Articles/Filter'

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
  },
  {
    id: 2,
    title: 'بيت للبيع في السلام',
    views: 50,
    createdAt: '8 دقيقة',
    price: 1500,
    description:
      'للبيع فيلا موقع مميز 600 متر 3 ادوار وسرداب سوبرديلوكس في السلام للتواصل مكتب عقاري يمنع الوسطاء نستقبل عروض البيع والايجار من السادة الملاك 99928013',
    isSticky: true,
    mobile: '1234',
    thumbnail: '/images/posts/post.jpeg',
    media: ['', '']
  },
  {
    id: 3,
    title: 'شقه للبيع في صباح السالم',
    views: 80,
    createdAt: '12 دقيقة',
    price: 800,
    description:
      'للبيع شقة دور في صباح السالم المساحه 261م ق2 الابراج موقعها راس 3 واجهات مع حمام سباحه الوصف 5 غرف نوم و5 حمامات اثنين ماستر واثنين بينهم حمام غرفة خادمة مع حمامها ومطبخ كبير وصاله كبيره مع حمام وغرفة طعام وغرفة سايق مع حمامها خارج الشقه مفصوله الشقه تم تجديدها بالكامل من صبغ ارضيات وحمامات وصيانة تكييف وابواب ومطبخ نظيفه جدا جدا مصافط السيارات موقفين في السرداب وموقفين مظللين برى الوثيقة مطلوبه لبنك الائتمان الشقه فاضيه والتسليم فوري السعر على السوم مراجعه',
    isSticky: false,
    mobile: '1234',
    thumbnail: '/images/posts/post.jpeg',
    media: ['', '']
  }
]

const Filter: NextPage = () => {
  const scroll = useCallback(
    (
      node: {
        getBoundingClientRect: () => {
          (): unknown
          new (): unknown
          top: unknown
        }
      } | null
    ) => {
      if (node !== null) {
        window.scrollTo({
          top: node.getBoundingClientRect().top,
          behavior: 'smooth'
        })
      }
    },
    []
  )

  return (
    <div className="dir-rtl container max-w-6xl py-10 flex flex-col">
      <div className="flex flex-col gap-5">
        <FilterArticle />
        <h3 ref={scroll} className="font-semibold text-xl">
          قد تهمك نتائج بحث مشابهة
        </h3>
        <div>
          <Link href="/">
            <a className="text-primary underline">عقارات للبيع في الكويت</a>
          </Link>
        </div>
      </div>
      <div className="max-w-4xl flex flex-col gap-5 mt-5 items-end p-2 md:p-5 self-end">
        <h1 className="font-semibold text-2xl self-start">
          شاليهات للبيع في الكويت (100 إعلان)
        </h1>
        <div className="w-full">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filter
