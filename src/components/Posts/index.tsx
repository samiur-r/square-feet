import Image from 'next/image'
import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

import CTA from 'components/CTA'

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
    <div className="dir-rtl container max-w-3xl py-12">
      <div className="font-semibold text-2xl mb-10">أحدث الإعلانات</div>
      {posts.map((post) => (
        <div
          key={post.id}
          className={`${
            post.isSticky ? 'border-red-300 bg-red-50' : 'shadow-md'
          } rounded-lg border cursor-pointer mt-5 p-3`}
        >
          <div className={`flex gap-5 `}>
            <div className="flex-grow-0 rounded-lg overflow-hidden h-full w-full max-w-fit flex items-center border">
              <Image
                src={post.thumbnail}
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <div className="flex-grow">
              <div className="font-bold">{post.title}</div>
              <div className="flex gap-3 md:gap-5 mt-3">
                <div className="text-primary md:text-base text-xs font-bold ">
                  {post.price} دك
                </div>
                <div className="flex flex-nowrap gap-2 items-center">
                  <Image src="/images/time.svg" width={17} height={17} />
                  <div className="text-gray-500 md:text-base text-xs">
                    {post.createdAt}
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Image src="/images/eye.svg" width={19} height={14} />
                  <div className="text-gray-500 md:text-base text-xs">
                    {post.views}
                  </div>
                </div>
              </div>
              <div className="hidden md:block mt-3 text-sm text-gray-500 md:line-clamp-2">
                {post.description}
              </div>
            </div>
          </div>
          <div className="md:hidden mt-3 text-xs text-gray-500 line-clamp-2">
            {post.description}
          </div>
        </div>
      ))}
      <div className="mt-10 flex items-center justify-center">
        <CTA
          title="المزيد"
          backgroundColor="secondary"
          Icon={<PlusCircleIcon className="h-6 w-6 mr-3" />}
          fullWidth
        />
      </div>
    </div>
  )
}

export default Posts
