import React from 'react'
import Link from 'next/link'

import { AgencyType } from 'interfaces'
import Title from 'components/Title'
import Description from 'components/Description'
import PackageCard from '../Package/PackageCard'
import AgencyCard from './AgencyCard'

const packages = [
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

const Agency: React.FC<{
  agencyList: AgencyType[]
  thumbnailSmall?: boolean
}> = ({ agencyList, thumbnailSmall }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex w-full justify-center">
        {packages &&
          packages.map((item) => (
            <PackageCard
              key={Math.random()}
              packageItem={item}
              thumbnailSmall={thumbnailSmall}
            />
          ))}
      </div>
      <Description textBlack>
        <span className="flex justify-center gap-2 pb-5 text-sm md:text-lg">
          <Link href="https://api.whatsapp.com/send/?phone=96560444900&text&type=phone_number&app_absent=0">
            <a className="text-primary hover:underline">راسلنا بالواتس اب</a>
          </Link>
          <span>او</span>
          <Link href="tel:+96560444900">
            <a className="text-primary hover:underline">اتصل بنا</a>
          </Link>
          <span>للمساعده</span>
        </span>
      </Description>
      <div className="flex justify-center">
        <Title value="قائمة المكاتب" />
      </div>
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
