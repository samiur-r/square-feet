import React, { useState } from 'react'
import Link from 'next/link'

const purposes = [
  {
    id: 0,
    title: 'للبدل'
  },
  {
    id: 1,
    title: 'للبيع'
  },
  {
    id: 2,
    title: 'للايجار'
  }
]

const SearchBox = () => {
  const [purpose, setPurpose] = useState({
    id: purposes[2].id,
    title: purposes[2].title
  })

  return (
    <>
      <div className="container relative z-10 max-w-6xl md:flex gap-5 grid grid-cols-1 w-full md:w-auto px-10 py-12 md:-mt-20 md:rounded-lg md:shadow-md bg-gray-50 md:bg-white">
        <Link href="/filter">
          <button
            type="submit"
            className="md:w-2/12 py-3 bg-secondary whitespace-nowrap order-4 md:order-1 opacity-80 hover:opacity-100 text-white font-bold flex justify-center items-center md:rounded-lg rounded-full"
          >
            إبحث الآن
          </button>
        </Link>
        <div className="md:hidden cursor-pointer grid grid-cols-3 rounded-full border">
          {purposes.map((purposeItem, index) => (
            <button
              key={purposeItem.id}
              type="submit"
              className={`${
                purposeItem.id === purpose.id && 'bg-primary text-white'
              } ${
                index === 0 ? 'rounded-l-full' : index === 2 && 'rounded-r-full'
              } flex justify-center items-center px-3 py-2 text-lg border-r`}
              onClick={() =>
                setPurpose({ id: purposeItem.id, title: purposeItem.title })
              }
            >
              {purposeItem.title}
            </button>
          ))}
        </div>
        <div className="md:w-3/12 hidden md:flex gap-5 justify-center order-1 md:order-2">
          {purposes.map((purposeItem, index) => (
            <div className="flex items-center w-max" key={purposeItem.id}>
              <label
                htmlFor={`default-radio-${index + 1}`}
                className="text-base font-medium text-gray-900"
              >
                {purposeItem.title}
                <input
                  id={`default-radio-${index + 1}`}
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 ml-2 accent-orange-600/50"
                  defaultChecked={purposeItem.id === purpose.id}
                  onClick={() =>
                    setPurpose({ id: purposeItem.id, title: purposeItem.title })
                  }
                />
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed md:hidden w-screen h-full z-20 pt-1 px-5 bg-white top-0 left-0">
        test
      </div>
    </>
  )
}

export default SearchBox
