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
        href: 'للايجار/بيوت'
      },
      {
        title: 'شقق للايجار',
        href: 'للايجار/شقه'
      },
      {
        title: 'أراضي للايجار',
        href: 'للايجار/اراضي'
      },
      {
        title: 'تجاري للايجار',
        href: 'للايجار/تجاري'
      },
      {
        title: 'عمارات للايجار',
        href: 'للايجار/عمارات'
      },
      {
        title: 'شاليهات للايجار',
        href: 'للايجار/شاليهات'
      },
      {
        title: 'مزارع للايجار',
        href: 'للايجار/مزارع'
      }
    ]
  },
  {
    title: 'للبيع في الكويت',
    subItems: [
      {
        title: 'بيوت للبيع',
        href: 'للبيع/بيوت'
      },
      {
        title: 'شقق للبيع',
        href: 'للبيع/شقه'
      },
      {
        title: 'أراضي للبيع',
        href: 'للبيع/اراضي'
      },
      {
        title: 'عمارات للبيع',
        href: 'للبيع/عمارات'
      },
      {
        title: 'تجاري للبيع',
        href: 'للبيع/تجاري'
      },
      {
        title: 'شاليهات للبيع',
        href: 'للبيع/شاليهات'
      },
      {
        title: 'مزارع للبيع',
        href: 'للبيع/مزارع'
      }
    ]
  },
  {
    title: 'للبدل في الكويت',
    subItems: [
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
        href: 'للبدل/اراضي'
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
    title: 'دخول',
    href: '/login',
    icon: '/images/mobile_nav_icons/sign_in.svg',
    primaryIcon: '/images/mobile_nav_icons/sign_in_primary.svg'
  },
  {
    title: 'تسجيل',
    href: '/register',
    icon: '/images/mobile_nav_icons/register-icon.svg',
    primaryIcon: '/images/mobile_nav_icons/register-icon-primary.svg'
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
    title: 'إعلان جديد',
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
    href: 'https://twitter.com/boshamlankw',
    imagePath: '/images/mobile_nav_icons/twitter.svg'
  },
  {
    href: 'https://www.instagram.com/boshamlankw/',
    imagePath: '/images/mobile_nav_icons/instagram.svg'
  },
  {
    href: '/',
    imagePath: '/images/mobile_nav_icons/en.svg'
  },
  {
    href: '/settings',
    imagePath: '/images/mobile_nav_icons/settings.svg'
  }
]

const Nav: React.FC = () => {
  const { user, updateScrollYTo } = useStore()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [newPostBtnText, setNewPostBtnText] = useState('')
  const [propertyTypes, setPropertyTypes] = useState<any>([])
  const [locations, setLocations] = useState<any>([])

  useEffect(() => {
    if (user) setIsLoggedIn(true)
    else setIsLoggedIn(false)
  }, [user])
  const { pathname, query } = useRouter()
  const router = useRouter()
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
  const [isPostPage, setIsPostPage] = useState(false)
  const [isLocationDropDownOpen, setIsLocationDropDownOpen] = useState(false)

  const handleShowSubRealState = (index: number) => {
    setShowSubRealState(
      showSubRealState.map((item, i) => (i === index ? !item : item))
    )
  }

  const handleNavChange = (item: { title: string; href: string }) => {
    setActiveItem(item.title)
  }

  // const handleMobileNavChange = (item: {
  //   title: string
  //   href: string
  //   icon: string
  // }) => {
  //   // setActiveItemOnMobile(item.title)
  // }

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
      case '/agent/[phone]':
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
        setActiveItemOnMobile(newPostBtnText)
        break
      case '/login':
        setActiveItem('دخول')
        setActiveItemOnMobile('دخول')
        break
      case '/register':
        setActiveItem('تسجيل')
        setActiveItemOnMobile('تسجيل')
        break
      default:
        break
    }
  }

  const getNewPostBtnText = async () => {
    if (user) {
      try {
        const { data } = await ApiClient({
          method: 'GET',
          url: 'credits/free-credit'
        })
        if (data.success > 0) setNewPostBtnText('إعلان مجانًا')
        else setNewPostBtnText('إعلان جديد')
      } catch (error) {
        /* empty */
      }
    } else setNewPostBtnText('إعلان جديد')
  }

  const fetchPropertyTypesAndLocations = async () => {
    if (propertyTypes.length || locations.length) return
    try {
      const responseLocations = await ApiClient({
        method: 'GET',
        url: '/locations'
      })
      setLocations(responseLocations.data?.locations || [])
      setPropertyTypes(responseLocations.data?.propertyTypes || [])
    } catch (error) {
      /* empty */
    }
  }

  useEffect(() => {
    handleActiveItem(pathname)
    setIsFilterPage(pathname === '/search' || pathname === '/[...slug]')
    setIsPostPage(pathname === '/post/[id]')
    getNewPostBtnText()
    fetchPropertyTypesAndLocations()
  }, [pathname])

  const handleSearch = async (val: { title?: string; href: any }) => {
    const parts = val.href.split('/')
    Router.push(`/${parts[0]}/${parts[1]}`)
  }

  return (
    <Popover className="sticky top-0 bg-white shadow-md md:shadow-sm w-full z-20 flex items-center min-h-20 md:min-h-24">
      <div
        className={`${
          isFilterPage ? 'max-w-[860px] md:left-10 md:relative' : 'max-w-6xl'
        } container h-full items-center flex relative`}
      >
        <div
          className={`${isFilterPage && 'border'} ${
            isPostPage ? 'justify-center' : 'justify-between'
          } w-full flex items-center md:space-x-10 rounded-lg md:border-0`}
        >
          {isFilterPage && (
            <Suspense fallback="...">
              <DynamicFilterAutoComplete
                propertyTypes={propertyTypes}
                locations={locations}
                handleIsfilterComboboxOpen={setIsLocationDropDownOpen}
              />
            </Suspense>
          )}
          {!isFilterPage && !isPostPage && (
            <div className="hidden md:flex w-3/12">
              <Link href="/post?mode=create">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/post?mode=create">
                  <CTA
                    title={newPostBtnText}
                    backgroundColor="primary"
                    Icon={<PlusCircleIcon className="h-6 w-6 ml-3 z-10" />}
                  />
                </a>
              </Link>
            </div>
          )}
          {!isFilterPage && !isPostPage && (
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
                              <button
                                type="button"
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
                                  {item.subItems.map((subItem) => (
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
                              </button>
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
                    <Link href={`${item.href}`} key={item.title}>
                      <a href={`${item.href}`}>
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
                    </Link>
                  ))
                : navItems.map((item) => (
                    <Link href={`${item.href}`} key={item.title}>
                      <a href={`${item.href}`}>
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
                    </Link>
                  ))}
            </Popover.Group>
          )}
          <div
            className={`${
              isFilterPage && 'hidden md:flex'
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
            {pathname === '/' ||
            isFilterPage ||
            pathname === '/account' ||
            pathname === '/topup' ||
            (query && query.mode && query.mode === 'create') ? (
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
            ) : (
              <div className={`${isFilterPage && 'hidden'}`}>
                <ChevronRightIcon
                  className="w-10 h-10 cursor-pointer"
                  onClick={() => {
                    router.back()
                    updateScrollYTo(true)
                  }}
                />
              </div>
            )}
          </div>
          {isPostPage && (
            <div className="absolute right-0 hidden md:block">
              <ChevronRightIcon
                className="w-10 h-10 cursor-pointer"
                onClick={() => {
                  router.back()
                  updateScrollYTo(true)
                }}
              />
            </div>
          )}
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
              <div className="mt-2 flex flex-col md:gap-3">
                {isLoggedIn
                  ? mobileNavItemsAuth.map((item) => (
                      <Link href={`${item.href}`} key={item.title}>
                        <a href={item.href}>
                          <Popover.Button
                            type="submit"
                            // onClick={() => handleMobileNavChange(item)}
                            className={`${
                              activeItemOnMobile === item.title &&
                              'bg-primary-lighter text-primary'
                            } w-full flex gap-4 font-DroidArabicKufiBold items-center justify-end pr-5 py-3 ml-2 rounded-l-2xl hover:bg-primary-lighter cursor-pointer transition-colors ease-in-out duration-500`}
                          >
                            <p
                              className={`${
                                item.title === 'إعلان جديد' ||
                                item.title === 'إعلان مجانًا'
                                  ? 'text-secondary'
                                  : null
                              } font-DroidArabicKufiBold`}
                            >
                              {item.title === 'إعلان جديد' ||
                              item.title === 'إعلان مجانًا'
                                ? newPostBtnText
                                : item.title}
                            </p>
                            <Image
                              src={
                                activeItemOnMobile === item.title
                                  ? item.primaryIcon
                                  : item.icon
                              }
                              height={18}
                              width={18}
                              alt="nav_item"
                            />
                          </Popover.Button>
                        </a>
                      </Link>
                    ))
                  : mobileNavItems.map((item) => (
                      <Link href={`${item.href}`} key={item.title}>
                        <a href={item.href}>
                          <Popover.Button
                            type="submit"
                            // onClick={() => handleMobileNavChange(item)}
                            className={`${
                              activeItemOnMobile === item.title &&
                              'bg-primary-lighter text-primary'
                            } flex items-center justify-end gap-4 w-full pr-5 py-3 ml-2 rounded-l-2xl hover:bg-primary-lighter cursor-pointer transition-colors ease-in-out duration-500`}
                          >
                            <p
                              className={`${
                                (item.title === 'إعلان جديد' ||
                                  item.title === 'إعلان مجانًا') &&
                                'text-secondary'
                              } font-DroidArabicKufiBold`}
                            >
                              {item.title}
                            </p>
                            <Image
                              src={
                                activeItemOnMobile === item.title
                                  ? item.primaryIcon
                                  : item.icon
                              }
                              height={18}
                              width={18}
                              alt="nav_item"
                            />
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
                      <div className="flex items-center gap-4 justify-end pr-5 py-2 ml-5 rounded-l-2xl cursor-pointer">
                        <p className="font-DroidArabicKufiBold">
                          عقارات الكویت
                        </p>
                        <Image
                          src="/images/building-solid.svg"
                          height={18}
                          width={18}
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
                            <button
                              type="button"
                              className="rounded-lg w-full"
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
                            </button>
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
                  <a>
                    <Popover.Button
                      type="submit"
                      className="px-3 py-2 flex items-center bg-custom-gray-2 rounded-lg cursor-pointer"
                    >
                      <Image
                        src={link.imagePath}
                        width={18}
                        height={20}
                        alt="social_link"
                      />
                    </Popover.Button>
                  </a>
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
