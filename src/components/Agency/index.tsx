import React from 'react'
import Link from 'next/link'

import { AgencyType } from 'intefaces'
import PackageCard from './PackageCard'
import AgencyCard from './AgencyCard'

const Agency: React.FC<{ agencyList: AgencyType[] }> = ({ agencyList }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-center">
        <PackageCard styleRow />
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
        {agencyList.map((agency) => (
          <Link key={agency.id} href="/agency">
            <AgencyCard
              thumbnail={agency.thumbnail}
              title={agency.title}
              phone={agency.phone}
              socialLinks={agency.socialLinks}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Agency
