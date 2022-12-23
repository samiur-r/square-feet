import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AgencyType } from 'interfaces'

const AgencyCard = React.forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ thumbnail, title, phone, socialLinks }: AgencyType, ref) => {
    return (
      <div className="grid grid-cols-3 w-full md:grid-cols-1 gap-2 bg-white p-2 rounded-lg border border-gray-300 shadow-sm cursor-pointer">
        <div className="w-28 h-28 rounded-lg overflow-hidden relative">
          <Image src={thumbnail} layout="fill" objectFit="cover" alt="agency" />
        </div>
        <div className="col-span-2 place-items-center">
          <div className="w-full text-center">
            <a className="font-bold font-DroidArabicKufiBold text-sm md:text-base hover:text-primary hover:underline cursor-pointer">
              {title}
            </a>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-32 md:w-full mt-2">
              <a
                href="tel:+96599491575"
                className="bg-primary text-sm flex items-center justify-center gap-2 text-center text-white w-full py-2 rounded-md"
              >
                {phone}{' '}
                <Image
                  src="/images/call-white.svg"
                  height={16}
                  width={16}
                  className="text-white"
                  alt="phone_icon"
                />
              </a>
            </div>
          </div>
          <div className="flex w-full mt-3 gap-2 justify-center">
            {socialLinks.map((link) => (
              <Link key={Math.random()} href={link.href}>
                <a className="p-2 rounded-full bg-custom-gray-2 flex items-center">
                  <Image
                    src={link.image}
                    width={14}
                    height={14}
                    alt="social_link"
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
)

export default AgencyCard
