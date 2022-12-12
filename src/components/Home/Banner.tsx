import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="flex justify-center -mt-10 md:-mt-20 bg-custom-white-lighter md:bg-white">
      <Image
        src="/images/banner.svg"
        width={1350}
        height={758}
        objectFit="cover"
        alt="boshamlan_banner"
        className="opacity-50"
      />
    </div>
  )
}

export default Banner
