import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import PostCard from 'components/Posts/PostCard'
import Title from 'components/Title'

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

const Agency: NextPage = () => {
  return (
    <div className="dir-rtl pb-8">
      <div className="bg-primary-light flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center text-white px-5 py-8 rounded-b-lg md:rounded-none">
        <div className="w-40 h-32 md:w-46 md:h-32 rounded-lg overflow-hidden relative border">
          <Image
            src="/images/nopic-ar.jpg"
            layout="fill"
            objectFit="cover"
            alt="no_pic"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 md:mb-5">
            <Title value="شركة العتيقي العقارية" />
          </div>
          <p className="text-xs md:text-base">
            القبلة، شارع فهد السالم، مجمع الدولية، الميزانين، مكتب رقم ١٦٨
          </p>
          <p className="mt-2">instagram: @alateeqire</p>
          <div className="flex gap-3 justify-center mt-5">
            <a
              href="tel:+96599491575"
              className="bg-custom-green hover:opacity-90 transition-opacity duration-300 w-32 flex items-center justify-center gap-1 text-center text-white py-3 rounded-md"
            >
              99491575{' '}
              <Image
                src="/images/call-white.svg"
                height={24}
                width={24}
                className="text-white font-DroidArabicKufiBold"
                alt="phone_icon"
              />
            </a>
            <div className="shadow-md bg-white rounded-md p-3 flex items-center justify-center">
              <Image
                src="/images/whatsapp-logo-green.svg"
                width={24}
                height={24}
                alt="whatsapp"
              />
            </div>
          </div>
          <div className="flex gap-3 justify-center mt-4">
            <Link href="/">
              <a className="p-2 rounded-full bg-primary-dark flex items-center ">
                <Image
                  src="/images/instagram-white.svg"
                  width={18}
                  height={18}
                  alt="instagram_icon"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container max-w-3xl mt-8">
        <Title value="اعلانات المكتب" />
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <p className="text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8">
        انتهت نتائج البحث ولا يوجد المزيد من النتائج
      </p>
    </div>
  )
}

export default Agency
