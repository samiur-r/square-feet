import React from 'react'
import Link from 'next/link'

import { OfficeType } from 'intefaces'
import PackageCard from './PackageCard'
import OfficeCard from './OfficeCard'

const Office: React.FC<{ officeList: OfficeType[] }> = ({ officeList }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-center">
        <PackageCard />
      </div>
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
      <h1 className="text-3xl font-bold tracking-widest flex justify-center">
        قائمة المكاتب
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
        {officeList.map((office) => (
          <OfficeCard
            key={office.id}
            thumbnail={office.thumbnail}
            title={office.title}
            phone={office.phone}
            socialLinks={office.socialLinks}
          />
        ))}
      </div>
    </div>
  )
}

export default Office
