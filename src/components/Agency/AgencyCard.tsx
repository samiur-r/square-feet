import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AgencyType } from 'intefaces'

const AgencyCard: React.FC<AgencyType> = ({
  thumbnail,
  title,
  phone,
  socialLinks
}) => {
  return (
    <div className="flex flex-col w-44 justify-center items-center gap-5 bg-white p-2 rounded-lg border border-gray-300 shadow-sm cursor-pointer">
      <div className="w-40 h-40 rounded-lg overflow-hidden relative border">
        <Image src={thumbnail} layout="fill" objectFit="cover" />
      </div>
      <div className="w-32 text-center">
        <a className="font-bold text-base hover:text-primary hover:underline cursor-pointer">
          {title}
        </a>
      </div>
      <div className="w-32">
        <a
          href="tel:+96599491575"
          className="bg-primary flex items-center justify-center gap-2 text-center text-white w-full py-1 rounded-md"
        >
          {phone}{' '}
          <Image
            src="/images/call-white.svg"
            height={16}
            width={16}
            className="text-white"
          />
        </a>
      </div>
      <div className="flex gap-3 justify-center">
        {socialLinks.map((link) => (
          <Link key={Math.random()} href={link.href}>
            <a className="p-2 rounded-full bg-gray-200 flex items-center">
              <Image src={link.image} width={14} height={14} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AgencyCard
