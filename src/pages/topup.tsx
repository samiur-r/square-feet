import type { NextPage } from 'next'

import PackageCard from 'components/Agency/PackageCard'
import Image from 'next/image'

const Topup: NextPage = () => {
  return (
    <div className="dir-rtl container max-w-6xl px-3 py-5">
      <h1 className="text-2xl font-bold">اشحن رصيد</h1>
      <ul className="list-disc mt-5 mr-5 text-base tracking-wider">
        <li>لا يوجد لديك عضوية مكتب</li>
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
      <div className="flex flex-col md:flex-row gap-10 justify-center mt-10">
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
      <div className="flex gap-5 mt-10 items-center">
        <div className="w-20 h-20 md:w-auto md:h-auto">
          <Image src="/images/checkmark_circle.svg" height={42} width={42} />
        </div>
        <div className="text-xl font-semibold text-green-800">
          كل وسائل الدفع الإلكترونية في بوشملان معتمدة وموثوقة 100% من البنوك
          المحلية
        </div>
      </div>
    </div>
  )
}

export default Topup
