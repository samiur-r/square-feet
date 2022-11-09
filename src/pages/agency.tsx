import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className="dir-rtl pb-12">
      <div className="bg-primary flex flex-col md:flex-row gap-10 justify-center items-center text-white px-3 py-20">
        <div className="w-40 h-40 rounded-lg overflow-hidden relative border">
          <Image
            src="/images/nopic-ar.jpg"
            layout="fill"
            objectFit="cover"
            alt="no_pic"
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold tracking-widest mb-5">
            شركة العتيقي العقارية
          </h3>
          <p>القبلة، شارع فهد السالم، مجمع الدولية، الميزانين، مكتب رقم ١٦٨</p>
          <p className="mt-2">instagram: @alateeqire</p>
          <a
            href="tel:+96599491575"
            className="bg-green-600 hover:bg-green-700 w-40 flex items-center justify-center gap-2 text-center text-white py-5 mt-10 rounded-md"
          >
            99491575{' '}
            <Image
              src="/images/call-white.svg"
              height={16}
              width={16}
              className="text-white"
              alt="phone_icon"
            />
          </a>
          <div className="flex gap-3 justify-center mt-5">
            <Link href="/">
              <a className="p-2 rounded-full bg-blue-600 flex items-center ">
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
      <div className="container max-w-4xl mt-10">
        <h3 className="text-xl font-bold">اعلانات المكتب</h3>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Agency
