import type { NextPage } from 'next'

import PackageCard from 'components/Package/PackageCard'
import Image from 'next/image'
import Title from 'components/Title'
import Description from 'components/Description'

const packages = [
  {
    thumbnail: 'topup-regular.png',
    title: 'رصيد اعلانات اضافي',
    list: [
      {
        title: 'regular1',
        cost: 12,
        numOfCredits: 3,
        description: '3 اعلان 12 دك'
      },
      {
        title: 'regular2',
        cost: 23,
        numOfCredits: 6,
        description: '6 اعلان 23 دك'
      }
    ]
  },
  {
    thumbnail: 'topup-sticky.png',
    title: 'إعلان مميز',
    list: [
      {
        title: 'sticky1',
        cost: 12,
        numOfCredits: 1,
        description: '1 اعلان مميز 12 دك'
      },
      {
        title: 'sticky2',
        cost: 55,
        numOfCredits: 5,
        description: '5 اعلان مميز 55 دك'
      }
    ]
  },
  {
    thumbnail: 'topup-agent.png',
    title: 'باقة المكاتب',
    list: [
      {
        title: 'agent1',
        cost: 100,
        numOfCredits: 30,
        description: '2 أشهر 100 دك'
      },
      {
        title: 'agent2',
        cost: 270,
        numOfCredits: 90,
        description: '6 أشهر 270 دك'
      }
    ]
  }
]

const Topup: NextPage = () => {
  return (
    <div className="dir-rtl container max-w-6xl px-3 pt-10 pb-0 md:pb-10 bg-gray-50 md:bg-white">
      <Title value="اشحن رصيد" />
      <ul className="list-disc mt-5 mr-5 text-sm md:text-base">
        <li>اختر الباقة المناسبة واضغط على الزر البرتقالي للشراء</li>
        <li>
          <Description textBlack>
            <span className="flex gap-2">
              <a className="text-primary hover:underline">راسلنا بالواتس اب</a>
              <span>او</span>
              <a className="text-primary hover:underline"> اتصل بنا</a>
              <span>للمساعده</span>
            </span>
          </Description>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row gap-5 justify-center mt-5">
        {packages &&
          packages.map((item) => (
            <PackageCard key={Math.random()} styleRow packageItem={item} />
          ))}
      </div>
      <div className="flex md:gap-5 mt-10 items-start md:items-center">
        <div className="w-20 h-20 md:w-auto md:h-auto flex items-start md:items-center">
          <Image
            src="/images/checkmark_circle.svg"
            height={42}
            width={42}
            alt="check_icon"
          />
        </div>
        <div className="text-xs md:text-xl font-semibold text-custom-green">
          كل وسائل الدفع الإلكترونية في بوشملان معتمدة وموثوقة 100% من البنوك
          المحلية
        </div>
      </div>
    </div>
  )
}

export default Topup
