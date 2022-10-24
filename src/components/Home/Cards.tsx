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
    <div className="container max-w-3xl pt-32 pb-28 grid md:grid-cols-3 gap-20 place-items-center">
      {items.map((item) => (
        <Link href={item.href}>
          <div className="shadow-md rounded-lg px-12 bg-stone-100 cursor-pointer">
            <div className="bg-blue-100 p-5 rounded-full -mt-10">
              <Image src={item.icon} width={64} height={51} alt="for-sale" />
            </div>
            <div className="font-bold text-2xl flex flex-col justify-center items-center mb-8 mt-5">
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
