import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { IAgent, ICredit } from 'interfaces'
import Title from 'components/Title'
import Description from 'components/Description'
import BalanceCard from 'components/Account/BalanceCard'
import ApiClient from 'utils/ApiClient'
import { useOnScreen } from 'hooks/useOnScreen'
import calculateTimeLeft from 'utils/calculateTimeLeft'
import PackageCard from '../Package/PackageCard'
import AgencyCard from './AgencyCard'

const packages = [
  {
    thumbnail: 'topup-agent.png',
    title: 'باقة المكاتب',
    list: [
      {
        packageId: 3,
        title: 'agent1',
        cost: 100,
        numOfCredits: 30,
        description: '2 أشهر 100 دك'
      },
      {
        packageId: 4,
        title: 'agent2',
        cost: 270,
        numOfCredits: 90,
        description: '6 أشهر 270 دك'
      }
    ]
  }
]

const Agency: React.FC<{
  isLoggedIn?: boolean
  agencyList: any
  totalRows: number | undefined
  thumbnailSmall?: boolean
  agent: any
  credits: ICredit | null
}> = ({
  isLoggedIn,
  agencyList,
  totalRows,
  thumbnailSmall,
  agent,
  credits
}) => {
  // const expiredDate = agent
  //   ? new Date(agent?.subscription_ends_date)
  //   : undefined
  // const hours = expiredDate?.getHours().toString().padStart(2, '0')
  // const minutes = expiredDate?.getMinutes().toString().padStart(2, '0')

  const [agents, setAgents] = useState(agencyList)
  const [totalAgents, setTotalAgents] = useState(agents?.length || 0)
  const [offset, setOffset] = useState(10)
  const [limit] = useState(10)
  const [isCallingApi, setIsCallingAPi] = useState(false)
  const [expiring, setExpiring] = useState('')

  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useOnScreen(ref)

  useEffect(() => {
    if (agent) {
      const timeLeft = calculateTimeLeft(
        agent.subscription_ends_date.toString()
      )
      setExpiring(timeLeft)
    }
  }, [agent])

  const balanceItems = [
    {
      title: 'مجاني',
      value: credits?.free || 0
    },
    {
      title: 'اضافي',
      value: credits?.regular || 0
    },
    {
      title: 'مميز',
      value: credits?.sticky || 0
    }
  ]

  const agencyItems = [
    {
      title: 'عدد الإعلانات',
      value: credits?.agent || 0
    },
    {
      title: 'إنتهاء الإشتراك',
      value: expiring
    }
    // {
    //   title: 'وقت الإنتهاء',
    //   value: hours && minutes ? `${hours}:${minutes}م` : '-'
    // }
  ]

  const fetchAgents = async () => {
    try {
      const response = await ApiClient({
        method: 'GET',
        url: `/agent/get-many?limit=${limit}&offset=${offset}`
      })
      setIsCallingAPi(false)
      setAgents([...agents, ...response.data.agents])
      setOffset((curr) => curr + 10)
    } catch (error) {
      /* empty */
    }
  }

  useEffect(() => {
    if (isIntersecting && totalRows && totalAgents < totalRows) {
      setIsCallingAPi(true)
      fetchAgents()
    }
  }, [isIntersecting])

  useEffect(() => {
    setTotalAgents(agents?.length)
  }, [agents])

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex w-full justify-center">
        {!isLoggedIn ? (
          packages.map((item) => (
            <PackageCard
              key={Math.random()}
              packageItem={item}
              thumbnailSmall={thumbnailSmall}
            />
          ))
        ) : (
          <div className="md:grid-cols-2 md:w-auto grid grid-cols-1 gap-10 w-full place-items-center">
            <BalanceCard
              headline="رصيدك من الاعلانات"
              items={balanceItems}
              ctaList={[{ title: 'اشحن الرصيد', href: '/topup' }]}
            />
            {agent ? (
              <BalanceCard
                headline="رصيد اشتراك المكتب"
                items={agencyItems}
                ctaList={[
                  { title: 'بياناتي', href: '/agent/edit' },
                  { title: 'صفحتي', href: `/agent/${agent.id}` }
                ]}
              />
            ) : (
              packages.map((item) => (
                <PackageCard
                  key={Math.random()}
                  packageItem={item}
                  thumbnailSmall={thumbnailSmall}
                />
              ))
            )}
          </div>
        )}
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
      <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-center gap-5">
        {agents &&
          agents.map((agency: IAgent) => (
            <React.Fragment key={agency.id}>
              <AgencyCard
                id={agency.id}
                name={agency.name}
                phone={agency.phone}
                logo_url={agency.logo_url}
                socialLinks={agency.socialLinks}
              />
            </React.Fragment>
          ))}
      </div>
      {(totalRows && totalAgents >= totalRows) || totalRows === 0 ? (
        <p className="text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8">
          انتهت نتائج البحث ولا يوجد المزيد من الاعلانات
        </p>
      ) : null}
      <div ref={ref} />
      {isCallingApi && (
        <div className="flex justify-center mt-10">
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-10 h-10 text-primary animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default Agency
