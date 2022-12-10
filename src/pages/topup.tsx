import type { NextPage } from 'next'

import PackageCard from 'components/Agency/PackageCard'
import Image from 'next/image'
import Title from 'components/Title'

const Topup: NextPage = () => {
  return (
    <div className="dir-rtl container max-w-6xl px-3 pt-6 md:py-10 bg-gray-50 md:bg-white">
      <Title value="اشحن رصيد" />
      <ul className="list-disc mt-5 mr-5 text-sm md:text-base">
        <li>اختر الباقة المناسبة واضغط على الزر البرتقالي للشراء</li>
        <li>
          <div className="flex gap-2">
            <a className="text-primary hover:underline">راسلنا بالواتس اب</a>
            <p>او</p>
            <a className="text-primary hover:underline"> اتصل بنا</a>
            <p>للمساعده</p>
          </div>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row gap-5 justify-center mt-5">
        <PackageCard styleRow />
        <PackageCard styleRow />
        <PackageCard styleRow />
      </div>
      <div className="flex md:gap-5 mt-10 items-start md:items-center">
        <div className="w-20 h-20 md:w-auto md:h-auto">
          <Image
            src="/images/checkmark_circle.svg"
            height={42}
            width={42}
            alt="check_icon"
          />
        </div>
        <div className="text-xs md:text-xl font-semibold text-green-800">
          كل وسائل الدفع الإلكترونية في بوشملان معتمدة وموثوقة 100% من البنوك
          المحلية
        </div>
      </div>
    </div>
  )
}

export default Topup
