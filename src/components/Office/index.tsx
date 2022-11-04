import React from 'react'
import Link from 'next/link'

import PackageCard from './PackageCard'

const Office = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <PackageCard />
      <div className="flex gap-2">
        <Link href="https://api.whatsapp.com/send/?phone=96560444900&text&type=phone_number&app_absent=0">
          <a className="text-primary hover:underline">راسلنا بالواتس اب</a>
        </Link>
        <p>او</p>
        <Link href="tel:+96560444900">
          <a className="text-primary hover:underline">اتصل بنا</a>
        </Link>
        <p>للمساعده</p>
      </div>
    </div>
  )
}

export default Office
