import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

import CTA from 'components/CTA'
import Title from 'components/Title'
import PostCard from './PostCard'

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

const Posts = () => {
  return (
    <div className="dir-rtl container max-w-3xl pt-5 md:pt-0 pb-10 bg-custom-white-light md:bg-white">
      <Title value="أحدث الإعلانات" />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div className="mt-10 max-w-xs px-10 m-auto flex items-center justify-center">
        <CTA
          title="المزيد"
          backgroundColor="secondary"
          Icon={<PlusCircleIcon className="h-6 w-6 mr-3" />}
        />
      </div>
    </div>
  )
}

export default Posts
