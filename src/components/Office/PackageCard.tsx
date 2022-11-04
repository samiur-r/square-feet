import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PackageModal from './PackageModal'

const PackageCard = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="flex flex-col md:flex-row items-center md:max-w-min gap-5 bg-white p-5 rounded-lg border border-gray-300 shadow-sm">
      <div className="rounded-lg h-52 w-52 overflow-hidden relative">
        <Image src="/images/subscribe.png" layout="fill" objectFit="contain" />
        <div className="absolute w-full h-full  bg-gray-900 opacity-40" />
        <button
          type="button"
          className="absolute w-full h-full text-white text-lg flex items-center justify-center"
          onClick={() => setOpenModal(true)}
        >
          اضغط هنا للتفاصيل
        </button>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <h6 className="text-sm font-semibold tracking-widest">باقة المكاتب</h6>
        <div className="flex flex-col gap-3">
          <Link href="https://www.kpay.com">
            <a className="bg-secondary opacity-80 text-white px-20 py-4 rounded-md hover:opacity-100">
              {' '}
              2 أشهر 100 دك{' '}
            </a>
          </Link>
          <Link href="https://www.kpay.com">
            <a className="bg-secondary opacity-80 text-white px-20 py-4 rounded-md hover:opacity-100">
              {' '}
              6 أشهر 270 دك{' '}
            </a>
          </Link>
        </div>
      </div>
      <PackageModal open={openModal} setOpen={setOpenModal} />
    </div>
  )
}

export default PackageCard
