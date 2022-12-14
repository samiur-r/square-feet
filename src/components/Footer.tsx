import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Title from './Title'
import Description from './Description'

const items = [
  {
    headline: 'الصفحات',
    links: [
      {
        title: 'الرئيسية العالمية',
        href: '/'
      },
      {
        title: 'نبذه عنا',
        href: '/نبذه-عنا'
      },
      {
        title: 'اتصل بنا',
        href: '/اتصل-بنا'
      },
      {
        title: 'الشروط والأحكام',
        href: '/terms-and-conditions'
      },
      {
        title: 'تقارير ومقالات',
        href: '/blog'
      },
      {
        title: 'خريطة الموقع',
        href: '/sitemap.html'
      }
    ]
  },
  {
    headline: 'عقارات للبدل في الكويت',
    links: [
      {
        title: 'بيوت للبدل',
        href: '/للبدل/بيوت'
      },
      {
        title: 'شقق للبدل',
        href: '/للبدل/شقق'
      },
      {
        title: 'أراضي للبدل',
        href: '/للبدل/أراضي'
      }
    ]
  },
  {
    headline: 'عقارات للبيع في الكويت',
    links: [
      {
        title: 'بيوت للبيع',
        href: '/للبيع/بيوت'
      },
      {
        title: 'شقق للبيع',
        href: '/للبيع/شقق'
      },
      {
        title: 'أراضي للبيع',
        href: '/للبيع/أراضي'
      },
      {
        title: 'تجاري للبيع',
        href: '/للبيع/تجاري'
      },
      {
        title: 'عمارات للبيع',
        href: '/للبيع/عمارات'
      },
      {
        title: 'شاليهات للبيع',
        href: '/للبيع/شاليهات'
      },
      {
        title: 'مزارع للبيع',
        href: '/للبيع/مزارع'
      },
      {
        title: 'دولي للبيع',
        href: '/للبيع/دولي'
      }
    ]
  },
  {
    headline: 'عقارات للايجار في الكويت',
    links: [
      {
        title: 'بيوت للايجار',
        href: '/للايجار/بيوت'
      },
      {
        title: 'شقق للايجار',
        href: '/للايجار/شقق'
      },
      {
        title: 'أراضي للايجار',
        href: '/للايجار/أراضي'
      },
      {
        title: 'تجاري للايجار',
        href: '/للايجار/تجاري'
      },
      {
        title: 'عمارات للايجار',
        href: '/للايجار/عمارات'
      },
      {
        title: 'شاليهات للايجار',
        href: '/للايجار/شاليهات'
      },
      {
        title: 'مزارع للايجار',
        href: '/للايجار/مزارع'
      }
    ]
  }
]

const socialLinks = [
  {
    href: 'https://www.facebook.com/boshamlanKW/',
    imagePath: '/images/facebook-dark.svg'
  },
  {
    href: 'https://twitter.com/boshamlankw',
    imagePath: '/images/twitter-dark.svg'
  },
  {
    href: 'https://www.instagram.com/boshamlankw/',
    imagePath: '/images/instagram-dark.svg'
  }
]

const Footer = () => {
  return (
    <div className="bg-custom-gray-2 py-12 relative w-full">
      <div className="container max-w-6xl grid grid-cols-2 md:grid-cols-4 md:gap-auto">
        {items.map((item) => (
          <div
            key={Math.random()}
            className="flex flex-col items-center mb-16 md:mb-auto"
          >
            <div className="mb-5 text-center">
              <Title value={item.headline} />
            </div>
            <ul className="flex flex-col items-center gap-3">
              {item.links.map((link) => (
                <Link key={link.title} href={link.href}>
                  <li className="cursor-pointer hover:underline">
                    <Description value={link.title} />
                  </li>
                </Link>
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
