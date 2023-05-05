import React from 'react'
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
    <div className="container max-w-3xl pt-10 pb-10 md:pt-20 md:pb-20 grid grid-cols-3 gap-5 md:gap-20 place-items-center">
      {items.map((item) => (
        <button
          type="button"
          key={Math.random()}
          onClick={() => handleSearch(item.href)}
          className="block shadow-md rounded-lg px-5 md:px-12 bg-custom-gray-3 cursor-pointer"
        >
          <div className="font-DroidArabicKufiBold text-base md:text-2xl flex flex-col justify-center items-center my-5 md:my-8">
            <span>{item.row1}</span>
            <span>{item.row2}</span>
          </div>
        </button>
      ))}
    </div>
  )
}

export default Cards
