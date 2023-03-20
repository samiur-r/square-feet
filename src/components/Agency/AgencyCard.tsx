import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { toBase64, placeholderImg } from 'utils/strToBase64'

const AgencyCard = React.forwardRef(
  (
    {
      id,
      name,
      phone,
      logo_url,
      socialLinks
    }: {
      id: number
      name: string
      phone: string | undefined
      logo_url: string | undefined
      socialLinks: Array<{ image: string; href: string }> | undefined
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref
  ) => {
    return (
      <div className="grid grid-cols-3 md:grid-cols-1 place-items-center bg-white p-2 rounded-lg border border-gray-300 shadow-sm cursor-pointer w-max">
        <Link href={`/agent/${id}`}>
          <a>
            <div className="w-full flex justify-center md:mb-2">
              <div className="w-28 h-28 rounded-lg overflow-hidden relative">
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="agency"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    placeholderImg()
                  )}`}
                  src={logo_url ? `${logo_url}` : '/images/nopic-ar.jpg'}
                />
              </div>
            </div>
          </a>
        </Link>
        <div className="col-span-2 place-items-center">
          <div className="w-full text-center">
            <Link href={`/agent/${id}`}>
              <a className="font-DroidArabicKufiBold text-sm md:text-base hover:text-primary hover:underline cursor-pointer">
                {name}
              </a>
            </Link>
          </div>
          <div className="mt-2 w-full flex items-center justify-center gap-2">
            <div className="w-28">
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
            <div className="shadow-md rounded-md p-2 flex items-center justify-center">
              <Image
                src="/images/whatsapp-logo-blue.svg"
                width={20}
                height={20}
                alt="whatsapp"
              />
            </div>
          </div>
          <div className="flex w-full mt-3 gap-2 justify-center h-7">
            {socialLinks?.map(
              // eslint-disable-next-line array-callback-return
              (link: { image: string; href: string | null }) => {
                if (link.href)
                  return (
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
                  )
              }
            )}
          </div>
        </div>
      </div>
    )
  }
)

export default AgencyCard
