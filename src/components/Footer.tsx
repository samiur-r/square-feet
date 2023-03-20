import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Router from 'next/router'
import Title from './Title'
import Description from './Description'

const items = [
  {
    headline: 'الصفحات',
    links: [
      {
        title: 'نبذه عنا',
        href: '/نبذه-عنا'
      },
      {
        title: 'اتصل بنا',
        href: '/contact'
      },
      {
        title: 'الشروط والأحكام',
        href: '/terms-and-conditions'
      },
      {
        title: 'تقارير ومقالات',
        href: 'https://boshamlan.com/blog/'
      },
      {
        title: 'خريطة الموقع',
        href: 'https://kw.boshamlan.com/sitemap.html'
      }
    ]
  },
  {
    headline: 'عقارات للبدل في الكويت',
    links: [
      {
        title: 'بيوت للبدل',
        href: 'للبدل/بيوت'
      },
      {
        title: 'شقق للبدل',
        href: 'للبدل/شقه'
      },
      {
        title: 'أراضي للبدل',
        href: 'للبدل/أرض'
      }
    ]
  },
  {
    headline: 'عقارات للبيع في الكويت',
    links: [
      {
        title: 'بيوت للبيع',
        href: 'للبيع/بيت'
      },
      {
        title: 'شقق للبيع',
        href: 'للبيع/شقه'
      },
      {
        title: 'أراضي للبيع',
        href: 'للبيع/أرض'
      },
      {
        title: 'تجاري للبيع',
        href: 'للبيع/عماره'
      },
      {
        title: 'عمارات للبيع',
        href: 'للبيع/تجاري'
      },
      {
        title: 'شاليهات للبيع',
        href: 'للبيع/شاليه'
      },
      {
        title: 'مزارع للبيع',
        href: 'للبيع/مزرعه'
      }
    ]
  },
  {
    headline: 'عقارات للايجار في الكويت',
    links: [
      {
        title: 'بيوت للايجار',
        href: 'للايجار/بيت'
      },
      {
        title: 'شقق للايجار',
        href: 'للايجار/شقه'
      },
      {
        title: 'أراضي للايجار',
        href: 'للايجار/أرض'
      },
      {
        title: 'عمارات للايجار',
        href: 'للايجار/تجاري'
      },
      {
        title: 'تجاري للايجار',
        href: 'للايجار/عماره'
      },
      {
        title: 'شاليهات للايجار',
        href: 'للايجار/شاليه'
      },
      {
        title: 'مزارع للايجار',
        href: 'للايجار/مزرعه'
      }
    ]
  }
]

const socialLinks = [
  {
    href: 'https://www.facebook.com/boshamlanKW/',
    imagePath: '/images/facebook-filled.svg'
  },
  {
    href: 'https://twitter.com/boshamlankw',
    imagePath: '/images/twitter-filled.svg'
  },
  {
    href: 'https://www.instagram.com/boshamlankw/',
    imagePath: '/images/instagram-filled.svg'
  }
]

const Footer = () => {
  const handleSearch = async (val: { title?: string; href: any }) => {
    const parts = val.href.split('/')
    Router.push(`/${parts[0]}/${parts[1]}`)
  }

  return (
    <div className="bg-custom-gray-2 py-12 relative w-full">
      <div className="container max-w-6xl grid grid-cols-2 md:grid-cols-4 md:gap-auto">
        {items.map((item, index) => (
          <div
            key={Math.random()}
            className="flex flex-col items-center mb-16 md:mb-auto"
          >
            <div className="mb-5 text-center">
              <Title value={item.headline} />
            </div>
            <ul className="flex flex-col items-center gap-3">
              {index === 0
                ? item.links.map((link) => (
                    <li className="cursor-pointer hover:underline">
                      <Link key={link.title} href={link.href}>
                        <a>
                          <Description value={link.title} />
                        </a>
                      </Link>
                    </li>
                  ))
                : item.links.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:underline"
                    >
                      <button type="button" onClick={() => handleSearch(link)}>
                        <Description value={link.title} />
                      </button>
                    </li>
                  ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 md:mt-20 flex justify-center gap-5">
        {socialLinks.map((link) => (
          <Link href={link.href} key={Math.random()}>
            <button
              type="submit"
              className="px-3 py-2 flex items-center bg-white rounded-lg cursor-pointer"
            >
              <Image
                src={link.imagePath}
                width={21}
                height={24}
                alt="social_link"
              />
            </button>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-5">
        <Link href="https://apps.apple.com/kw/app/%D8%A8%D9%88%D8%B4%D9%85%D9%84%D8%A7%D9%86-%D8%B9%D9%82%D8%A7%D8%B1-%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1-%D9%88-%D9%84%D9%84%D8%A8%D9%8A%D8%B9/id1185405864?mt=8">
          <button type="submit">
            <Image
              src="/images/apple-store.svg"
              width={119}
              height={35}
              alt="apple_store"
            />
          </button>
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.q8villa.product">
          <button type="submit">
            <Image
              src="/images/google-play.svg"
              width={119}
              height={35}
              alt="google_play"
            />
          </button>
        </Link>
      </div>
      <div className="mt-10 text-center text-lg italic text-custom-gray">
        2022 ©boshamlan.com
      </div>
    </div>
  )
}

export default Footer
