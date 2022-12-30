import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="flex justify-center -mt-10 bg-custom-white-lighter md:bg-white">
      <div className="hidden md:block opacity-20 flex-grow-1 relative md:h-[calc(100vh_-_23rem)] w-full bg-[url('/images/banner.svg')] bg-no-repeat bg-center bg-contain" />
      <div className="md:hidden">
        <Image
          src="/images/banner.svg"
          width={1350}
          height={758}
          objectFit="cover"
          alt="boshamlan_banner"
          className="opacity-90 md:opacity-20"
        />
      </div>
    </div>
  )
}

export default Banner
