import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const items = [
  {
    row1: 'عقارات',
    row2: 'للبدل',
    icon: '/images/sale.png',
    href: '/للبدل'
  },
  {
    row1: 'عقارات',
    row2: 'للبيع',
    icon: '/images/sale.png',
    href: '/للبيع'
  },
  {
    row1: 'عقارات',
    row2: 'للايجار',
    icon: '/images/rent.png',
    href: '/للايجار'
  }
]

const Cards = () => {
  return (
    <div className="container max-w-3xl pt-20 pb-10 md:pt-32 md:pb-28 grid grid-cols-3 gap-5 md:gap-20 place-items-center">
      {items.map((item) => (
        <Link key={Math.random()} href={item.href}>
          <div className="shadow-md rounded-lg md:px-12 bg-stone-100 cursor-pointer">
            <div className="bg-blue-100 p-3 md:p-5 rounded-full -mt-10">
              <div className="w-16 h-14 relative">
                <Image
                  src={item.icon}
                  layout="fill"
                  objectFit="contain"
                  alt="for-sale"
                />
              </div>
            </div>
            <div className="font-bold text-sm md:text-2xl flex flex-col justify-center items-center my-5 md:mb-8 md:mt-5">
              <span>{item.row1}</span>
              <span>{item.row2}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cards
