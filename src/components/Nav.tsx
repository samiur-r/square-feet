import React, { useState, Fragment, useEffect, Suspense } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { XMarkIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { locations, categories, propertyTypes } from 'constant'
import { useStore } from 'store'
import ApiClient from 'utils/ApiClient'
import CTA from './CTA'

const DynamicFilterAutoComplete = dynamic(
  () => import('components/FilterAutoComplete'),
  {
    suspense: true
  }
)

const realEstate = [
  {
    title: 'للايجار في الكويت',
    subItems: [
      {
        title: 'بيوت للايجار',
        href: 'للايجار/بيوت',
        property: 'بيت'
      },
      {
        title: 'شقق للايجار',
        href: 'للايجار/مزارع',
        property: 'شقه'
      },
      {
        title: 'أراضي للايجار',
        href: 'للايجار/اراضي',
        property: 'أرض'
      },
      {
        title: 'عمارات للايجار',
        href: 'للايجار/عمارات',
        property: 'عماره'
      },
      {
        title: 'تجاري للايجار',
        href: 'للايجار/تجاري',
        property: 'تجاري'
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
  },
  {
    title: 'للبيع في الكويت',
    subItems: [
      {
        title: 'بيوت للبيع',
        href: 'للبيع/بيوت',
        property: 'بيت'
      },
      {
        title: 'شقق للبيع',
        href: 'للبيع/مزارع',
        property: 'شقه'
      },
      {
        title: 'أراضي للبيع',
        href: 'للبيع/اراضي',
        property: 'أرض'
      },
      {
        title: 'عمارات للبيع',
        href: 'للبيع/عمارات',
        property: 'عماره'
      },
      {
        title: 'تجاري للبيع',
        href: 'للبيع/تجاري',
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
    title: 'للبدل في الكويت',
    subItems: [
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
        href: 'للبدل/اراضي',
        property: 'أرض'
      }
    ]
  }
]

const navItems = [
  {
    title: 'تسجيل',
    href: '/register'
  },
  {
    title: 'دخول',
    href: '/login'
  },
  {
    title: 'المكاتب',
    href: '/المكاتب'
  },
  {
    title: 'الرئيسية',
    href: '/'
  }
]

const navItemsAuth = [
  {
    title: 'خروج',
    href: '/logout'
  },
  {
    title: 'اشحن رصيد',
    href: '/topup'
  },
  {
    title: 'إعلاناتي',
    href: '/account'
  },
  {
    title: 'المكاتب',
    href: '/المكاتب'
  },
  {
    title: 'الرئيسية',
    href: '/'
  }
]

const mobileNavItems = [
  {
    title: 'الرئيسية / بحث',
    href: '/',
    icon: '/images/mobile_nav_icons/home_search.svg',
    primaryIcon: '/images/mobile_nav_icons/home_search_primary.svg'
  },
  {
    title: 'دخول / تسجيل',
    href: '/login',
    icon: '/images/mobile_nav_icons/sign_in.svg',
    primaryIcon: '/images/mobile_nav_icons/sign_in_primary.svg'
  },
  {
    title: 'إعلان مجانًا',
    href: '/post?mode=create',
    icon: '/images/mobile_nav_icons/add_circle_outlined.svg',
    primaryIcon: '/images/mobile_nav_icons/add_circle_outlined_primary.svg'
  },
  {
    title: 'المكاتب',
    href: '/المكاتب',
    icon: '/images/mobile_nav_icons/briefcase_outlined.svg',
    primaryIcon: '/images/mobile_nav_icons/briefcase_outlined_primary.svg'
  }
]

const mobileNavItemsAuth = [
  {
    title: 'الرئيسية / بحث',
    href: '/',
    icon: '/images/mobile_nav_icons/home_search.svg',
    primaryIcon: '/images/mobile_nav_icons/home_search_primary.svg'
  },
  {
    title: 'خروج',
    href: '/logout',
    icon: '/images/mobile_nav_icons/sign_in.svg',
    primaryIcon: '/images/mobile_nav_icons/sign_in_primary.svg'
  },
  {
    title: 'إعلاناتي',
    href: '/account',
    icon: '/images/mobile_nav_icons/doc.svg',
    primaryIcon: '/images/mobile_nav_icons/doc_primary.svg'
  },
  {
    title: 'اشحن رصيد',
    href: '/topup',
    icon: '/images/mobile_nav_icons/credit_card_add.svg',
    primaryIcon: '/images/mobile_nav_icons/credit_card_add_primary.svg'
  },
  {
    title: 'إعلان مجانًا',
    href: '/post?mode=create',
    icon: '/images/mobile_nav_icons/add_circle_outlined.svg',
    primaryIcon: '/images/mobile_nav_icons/add_circle_outlined_primary.svg'
  },
  {
    title: 'المكاتب',
    href: '/المكاتب',
    icon: '/images/mobile_nav_icons/briefcase_outlined.svg',
    primaryIcon: '/images/mobile_nav_icons/briefcase_outlined_primary.svg'
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
  },
  {
    href: 'https://boshamlan.com',
    imagePath: '/images/global.svg'
  }
]

const Nav: React.FC = () => {
  const {
    user,
    setPropertyTypeSelected,
    setCategorySelected,
    updateFilteredPosts,
    updateFilteredPostsCount
  } = useStore()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (user) setIsLoggedIn(true)
    else setIsLoggedIn(false)
  }, [user])
  const { pathname } = useRouter()
  const [showSubRealState, setShowSubRealState] = useState([
    false,
    false,
    false
  ])
  const [activeItem, setActiveItem] = useState(navItems[3].title)
  const [activeItemOnMobile, setActiveItemOnMobile] = useState(
    mobileNavItems[0].title
  )
  const [isFilterPage, setIsFilterPage] = useState(false)
  const [isLocationDropDownOpen, setIsLocationDropDownOpen] = useState(false)
  const [isCallingApi, setIsCallingApi] = useState(false)

  const handleShowSubRealState = (index: number) => {
    setShowSubRealState(
      showSubRealState.map((item, i) => (i === index ? !item : item))
    )
  }

  const handleNavChange = (item: { title: string; href: string }) => {
    setActiveItem(item.title)
  }

  const handleMobileNavChange = (item: {
    title: string
    href: string
    icon: string
  }) => {
    setActiveItemOnMobile(item.title)
  }

  const handleActiveItem = (pathStr: string) => {
    switch (pathStr) {
      case '/':
        setActiveItem('الرئيسية')
        setActiveItemOnMobile('الرئيسية / بحث')
        break
      case '/agencies':
        setActiveItem('المكاتب')
        setActiveItemOnMobile('المكاتب')
        break
      case '/account':
        setActiveItem('إعلاناتي')
        setActiveItemOnMobile('إعلاناتي')
        break
      case '/topup':
        setActiveItem('اشحن رصيد')
        setActiveItemOnMobile('اشحن رصيد')
        break
      case '/post':
        setActiveItem('')
        setActiveItemOnMobile('إعلان مجانًا')
        break
      case '/login':
        setActiveItem('دخول')
        setActiveItemOnMobile('دخول / تسجيل')
        break
      case '/register':
        setActiveItem('تسجيل')
        setActiveItemOnMobile('دخول / تسجيل')
        break
      default:
        break
    }
  }

  useEffect(() => {
    handleActiveItem(pathname)
    setIsFilterPage(pathname === '/search' || pathname === '/[...slug]')
  }, [pathname])

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
    <Popover className="fixed top-0 bg-white shadow-md md:shadow-sm w-full z-20 flex items-center min-h-20 md:min-h-24">
      <div
        className={`${
          isFilterPage ? 'max-w-[860px] md:left-10 md:relative' : 'max-w-6xl'
        } container h-full items-center flex`}
      >
        <div
          className={`${
            isFilterPage && 'border'
          } w-full flex items-center justify-between md:space-x-10 rounded-lg md:border-0`}
        >
          {isFilterPage && (
            <Suspense fallback="Loading...">
              <DynamicFilterAutoComplete
                locations={locations}
                handleIsfilterComboboxOpen={setIsLocationDropDownOpen}
              />
            </Suspense>
          )}
          {!isFilterPage && (
            <div className="hidden md:flex w-3/12">
              <Link href="/post?mode=create">
                <a>
                  <CTA
                    title="إضافة إعلان"
                    backgroundColor="primary"
                    Icon={<PlusCircleIcon className="h-6 w-6 ml-3 z-10" />}
                  />
                </a>
              </Link>
            </div>
          )}
          {!isFilterPage && (
            <Popover.Group
              as="nav"
              className="hidden md:flex justify-between w-7/12"
            >
              <Popover className="relative">
                {() => (
                  <>
                    <Popover.Button className="group inline-flex mt-1 items-center rounded-md bg-white text-base font-medium focus:outline-none">
                      <ChevronDownIcon
                        className="text-base mr-2 h-5 w-5 group-hover:text-custom-gray text-custom-gray-4"
                        aria-hidden="true"
                      />
                      <span>عقارات الكویت</span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 transform">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="bg-white w-48">
                            {realEstate.map((item, index) => (
                              <a
                                key={item.title}
                                className="block rounded-lg w-full p-3"
                                onClick={() => handleShowSubRealState(index)}
                              >
                                <div className="flex items-center justify-between">
                                  <ChevronDownIcon
                                    className="mr-2 h-5 w-5 text-custom-gray-4 text-base"
                                    aria-hidden="true"
                                  />
                                  <p className="text-base font-medium">
                                    {item.title}
                                  </p>
                                </div>
                                <div
                                  className={`${
                                    showSubRealState[index] ? 'flex' : 'hidden'
                                  } flex-col mt-2 shadow py-2 items-center`}
                                >
                                  {isCallingApi ? (
                                    <svg
                                      aria-hidden="true"
                                      role="status"
                                      className="inline w-5 h-5 text-primary animate-spin"
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
                                  ) : (
                                    item.subItems.map((subItem) => (
                                      <Popover.Button
                                        key={subItem.title}
                                        onClick={() => handleSearch(subItem)}
                                      >
                                        <p className="hover:bg-gray-50">
                                          {subItem.title}
                                        </p>
                                      </Popover.Button>
                                    ))
                                  )}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {isLoggedIn
                ? navItemsAuth.map((item) => (
                    <a href={`${item.href}`} key={item.title}>
                      <button
                        type="submit"
                        onClick={() => handleNavChange(item)}
                        className={`${
                          activeItem === item.title
                            ? "text-primary after:content-['.'] after:text-primary after:text-3xl after:font-DroidArabicKufiBold after:absolute after:-bottom-4 after:w-full after:left-0"
                            : 'text-base'
                        } font-medium hover:text-primary relative`}
                      >
                        {item.title}
                      </button>
                    </a>
                  ))
                : navItems.map((item) => (
                    <a href={`${item.href}`} key={item.title}>
                      <button
                        type="submit"
                        onClick={() => handleNavChange(item)}
                        className={`${
                          activeItem === item.title
                            ? "text-primary after:content-['.'] after:text-primary after:text-3xl after:font-DroidArabicKufiBold after:absolute after:-bottom-4 after:w-full after:left-0"
                            : 'text-base'
                        } font-medium hover:text-primary relative`}
                      >
                        {item.title}
                      </button>
                    </a>
                  ))}
            </Popover.Group>
          )}
          <div
            className={`${
              isFilterPage && 'hidden'
            } flex justify-center items-center pl-10 md:pl-0 w-full md:w-2/12`}
          >
            <span className="sr-only">Company Logo</span>
            <Link href="/">
              <a className="block relative w-40 h-12">
                <Image layout="fill" src="/images/logo.svg" alt="logo" />
              </a>
            </Link>
          </div>
          <div className={`${!isFilterPage && 'md:hidden'}`}>
            <div
              className={`${
                isLocationDropDownOpen ? 'block md:hidden' : 'hidden'
              }`}
            >
              <ChevronRightIcon
                className="h-9 w-9 text-black"
                aria-hidden="true"
              />
            </div>
            <Popover.Button
              className={`${
                isLocationDropDownOpen && 'hidden md:inline-flex'
              } inline-flex items-center justify-center rounded-md bg-white p-2 text-black-400 hover:bg-black-100 focus:outline-none`}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon
                className="h-7 w-7 mt-px font-DroidArabicKufiBold"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className={`${
            !isFilterPage && 'md:hidden'
          } fixed h-full top-0 right-0 transform transition w-10/12 md:w-3/12`}
        >
          <div className="bg-black opacity-50 right-0 w-screen absolute h-full z-10 pointer-events-none" />
          <div className="bg-white shadow-2xl h-full flex flex-col justify-between relative z-20">
            <div>
              <div className="flex items-center justify-between px-4 pt-5 pb-3">
                <div>
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-custom-gray focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="relative w-36 h-11">
                  <Link href="/">
                    <a>
                      <Image layout="fill" src="/images/logo.svg" alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>
              <hr className="h-px bg-[#DCDCDC] border-0" />

              {/* nav items */}
              <div className="mt-2 flex flex-col gap-3">
                {isLoggedIn
                  ? mobileNavItemsAuth.map((item) => (
                      <Link href={item.href} key={item.title}>
                        <a
                          className={`${
                            activeItemOnMobile === item.title &&
                            'bg-primary-lighter text-primary'
                          } flex font-DroidArabicKufiBold items-center justify-end pr-5 py-3 ml-2 rounded-l-2xl hover:bg-primary-lighter cursor-pointer transition-colors ease-in-out duration-500`}
                        >
                          <Popover.Button
                            type="submit"
                            onClick={() => handleMobileNavChange(item)}
                            className="flex gap-4 items-center"
                          >
                            <p
                              className={`${
                                item.title === 'إعلان مجانًا' &&
                                'text-secondary'
                              } font-DroidArabicKufiBold`}
                            >
                              {item.title}
                            </p>
                            {item.title === 'إعلان مجانًا' ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-8 h-8 text-secondary"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            ) : (
                              <Image
                                src={
                                  activeItemOnMobile === item.title
                                    ? item.primaryIcon
                                    : item.icon
                                }
                                height={30}
                                width={30}
                                alt="nav_item"
                              />
                            )}
                          </Popover.Button>
                        </a>
                      </Link>
                    ))
                  : mobileNavItems.map((item) => (
                      <Link href={item.href} key={item.title}>
                        <a
                          className={`${
                            activeItemOnMobile === item.title &&
                            'bg-primary-lighter text-primary'
                          } flex font-DroidArabicKufiBold items-center justify-end pr-5 py-3 ml-2 rounded-l-2xl hover:bg-primary-lighter cursor-pointer transition-colors ease-in-out duration-500`}
                        >
                          <Popover.Button
                            type="submit"
                            onClick={() => handleMobileNavChange(item)}
                            className="flex gap-4"
                          >
                            <p
                              className={`${
                                item.title === 'إعلان مجانًا' &&
                                'text-secondary'
                              } font-DroidArabicKufiBold`}
                            >
                              {item.title}
                            </p>
                            {item.title === 'إعلان مجانًا' ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-8 h-8 text-secondary"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            ) : (
                              <Image
                                src={
                                  activeItemOnMobile === item.title
                                    ? item.primaryIcon
                                    : item.icon
                                }
                                height={30}
                                width={30}
                                alt="nav_item"
                              />
                            )}
                          </Popover.Button>
                        </a>
                      </Link>
                    ))}
                <Menu as="div" className="relative ml-5 rounded-l-2xl">
                  <div>
                    <Menu.Button className="group py-1 inline-flex mt-1 pl-5 items-center justify-between w-full rounded-l-2xl bg-white text-base font-medium hover:bg-blue-100 transition-colors ease-in-out duration-500 focus:outline-none">
                      <ChevronDownIcon
                        className="text-base h-5 w-5 group-hover:text-custom-gray text-custom-gray-4"
                        aria-hidden="true"
                      />
                      <div className="flex items-center gap-5 justify-end pr-6 py-2 ml-5 rounded-l-2xl cursor-pointer">
                        <p className="font-DroidArabicKufiBold">
                          عقارات الكویت
                        </p>
                        <Image
                          src="/images/building-solid.svg"
                          height={25}
                          width={25}
                          alt="home_search"
                        />
                      </div>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Menu.Items className="absolute right-0 mr-12 px-3 z-50 transform">
                      <div className="overflow-hidden flex flex-col gap-3 rounded-lg w-full px-2 py-2 shadow-lg bg-white">
                        {realEstate.map((item, index) => (
                          <div key={item.title}>
                            <a
                              className="rounded-lg w-full hover:bg-primary"
                              onClick={() => handleShowSubRealState(index)}
                            >
                              <div className="flex items-center justify-between">
                                <ChevronDownIcon
                                  className="ml-2 h-5 w-5 group-hover:text-custom-gray text-custom-gray-4 text-base"
                                  aria-hidden="true"
                                />
                                <p className="text-base font-medium">
                                  {item.title}
                                </p>
                              </div>
                              <div
                                className={`${
                                  showSubRealState[index] ? 'flex' : 'hidden'
                                } flex-col items-center shadow mt-5 py-1`}
                              >
                                {item.subItems?.map((subItem) => (
                                  <Popover.Button
                                    key={subItem.title}
                                    onClick={() => handleSearch(subItem)}
                                  >
                                    <p className="hover:bg-gray-50">
                                      {subItem.title}
                                    </p>
                                  </Popover.Button>
                                ))}
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="px-5 w-full flex justify-center gap-5 mb-5">
              {socialLinks.map((link) => (
                <Link href={link.href} key={Math.random()}>
                  <button
                    type="submit"
                    className="px-3 py-2 flex items-center bg-custom-gray-2 rounded-lg cursor-pointer"
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
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Nav
