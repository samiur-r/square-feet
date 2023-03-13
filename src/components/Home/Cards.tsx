import React from 'react'
import Image from 'next/image'
import Router from 'next/router'

const items = [
  {
    row1: 'عقارات',
    row2: 'للبدل',
    icon: '/images/sale.png',
    href: 'للبدل'
  },
  {
    row1: 'عقارات',
    row2: 'للبيع',
    icon: '/images/sale.png',
    href: 'للبيع'
  },
  {
    row1: 'عقارات',
    row2: 'للايجار',
    icon: '/images/rent.png',
    href: 'للايجار'
  }
]

const Cards = () => {
  const handleSearch = async (link: string) => {
    Router.push(`/${link}`)
  }

  return (
    <div className="container max-w-3xl pt-20 pb-10 md:pt-32 md:pb-28 grid grid-cols-3 gap-5 md:gap-20 place-items-center">
      {items.map((item) => (
        <a
          key={Math.random()}
          onClick={() => handleSearch(item.href)}
          className="block shadow-md rounded-lg px-5 md:px-12 bg-custom-gray-3 cursor-pointer"
        >
          <div className="bg-primary-lighter p-3 md:p-5 rounded-full -mt-10">
            <div className="w-10 h-8 md:w-16 md:h-14 relative">
              <Image
                src={item.icon}
                layout="fill"
                objectFit="contain"
                alt="for-sale"
              />
            </div>
          </div>
          <div className="font-DroidArabicKufiBold text-base md:text-2xl flex flex-col justify-center items-center my-5 md:mb-8 md:mt-5">
            <span>{item.row1}</span>
            <span>{item.row2}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Cards
