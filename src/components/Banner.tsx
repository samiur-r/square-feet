import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="opacity-60 flex justify-center -mt-10 md:-mt-20">
      <Image
        src="/images/banner.svg"
        width={1350}
        height={758}
        objectFit="cover"
        alt="banner"
      />
    </div>
  )
}

export default Banner
