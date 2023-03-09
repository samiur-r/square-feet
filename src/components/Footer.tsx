import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'

import { useStore } from 'store'
import ApiClient from 'utils/ApiClient'
import { categories, propertyTypes } from 'constant'
import Title from './Title'
import Description from './Description'

const items = [
  {
    headline: 'الصفحات',
    links: [
      {
        title: 'نبذه عنا',
        href: '/نبذه-عنا',
        property: ''
      },
      {
        title: 'اتصل بنا',
        href: '/contact',
        property: ''
      },
      {
        title: 'الشروط والأحكام',
        href: '/terms-and-conditions',
        property: ''
      },
      {
        title: 'تقارير ومقالات',
        href: 'https://boshamlan.com/blog/',
        property: ''
      },
      {
        title: 'خريطة الموقع',
        href: 'https://kw.boshamlan.com/sitemap.html',
        property: ''
      }
    ]
  },
  {
    headline: 'عقارات للبدل في الكويت',
    links: [
      {
        title: 'بيوت للبدل',
        href: 'للبدل/بيوت',
        property: 'بيت'
      },
      {
        title: 'شقق للبدل',
        href: 'للبدل/شقق',
        property: 'شقه'
      },
      {
        title: 'أراضي للبدل',
        href: 'للبدل/أراضي',
        property: 'أرض'
      }
    ]
  },
  {
    headline: 'عقارات للبيع في الكويت',
    links: [
      {
        title: 'بيوت للبيع',
        href: 'للبيع/بيوت',
        property: 'بيت'
      },
      {
        title: 'شقق للبيع',
        href: 'للبيع/شقق',
        property: 'شقه'
      },
      {
        title: 'أراضي للبيع',
        href: 'للبيع/أراضي',
        property: 'أرض'
      },
      {
        title: 'تجاري للبيع',
        href: 'للبيع/تجاري',
        property: 'عماره'
      },
      {
        title: 'عمارات للبيع',
        href: 'للبيع/عمارات',
        property: 'تجاري'
      },
      {
        title: 'شاليهات للبيع',
        href: 'للبيع/شاليهات',
        property: 'شاليه'
      },
      {
        title: 'مزارع للبيع',
        href: 'للبيع/مزارع',
        property: 'مزرعه'
      }
    ]
  },
  {
    headline: 'عقارات للايجار في الكويت',
    links: [
      {
        title: 'بيوت للايجار',
        href: 'للايجار/بيوت',
        property: 'بيت'
      },
      {
        title: 'شقق للايجار',
        href: 'للايجار/شقق',
        property: 'شقه'
      },
      {
        title: 'أراضي للايجار',
        href: 'للايجار/أراضي',
        property: 'أرض'
      },
      {
        title: 'عمارات للايجار',
        href: 'للايجار/عمارات',
        property: 'تجاري'
      },
      {
        title: 'تجاري للايجار',
        href: 'للايجار/تجاري',
        property: 'عماره'
      },
      {
        title: 'شاليهات للايجار',
        href: 'للايجار/شاليهات',
        property: 'شاليه'
      },
      {
        title: 'مزارع للايجار',
        href: 'للايجار/مزارع',
        property: 'مزرعه'
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
  const {
    setPropertyTypeSelected,
    setCategorySelected,
    updateFilteredPosts,
    updateFilteredPostsCount
  } = useStore()
  const [isCallingApi, setIsCallingApi] = useState(false)

  const handleSearch = async (val: { href: string; property: string }) => {
    setIsCallingApi(true)
    const parts = val.href.split('/')
    const categorySelected = categories.find(
      (element) => element.title === parts[0]
    )
    const propertyTypeSelected = propertyTypes.find(
      (element) => element.title === val.property
    )

    setPropertyTypeSelected(propertyTypeSelected)
    setCategorySelected(categorySelected)
    try {
      const response = await ApiClient({
        method: 'POST',
        url: '/search',
        data: {
          limit: 10,
          offset: 0,
          propertyType: propertyTypeSelected,
          category: categorySelected
        }
      })
      setIsCallingApi(false)
      updateFilteredPostsCount(response?.data?.count)
      updateFilteredPosts(response?.data?.posts)
      Router.push(`/${parts[0]}/${parts[1]}`)
    } catch (error) {
      setIsCallingApi(false)
    }
  }

  return (
    <div className="bg-custom-gray-2 py-12 relative w-full">
      {isCallingApi && (
        <div className="flex justify-center mb-5">
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-7 h-7 text-primary animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
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
                    <Link key={link.title} href={link.href}>
                      <a>
                        <li className="cursor-pointer hover:underline">
                          <Description value={link.title} />
                        </li>
                      </a>
                    </Link>
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
