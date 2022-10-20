import React, { useState, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

import CTA from './CTA'

const realEstate = [
  {
    title: 'للايجار في الكويت',
    subItems: [
      {
        title: 'بيوت للايجار',
        href: ''
      },
      {
        title: 'شقق للايجار',
        href: ''
      },
      {
        title: 'أراضي للايجار',
        href: ''
      },
      {
        title: 'تجاري للايجار',
        href: ''
      },
      {
        title: 'عمارات للايجار',
        href: ''
      },
      {
        title: 'شاليهات للايجار',
        href: ''
      },
      {
        title: 'مزارع للايجار',
        href: ''
      }
    ]
  },
  {
    title: 'للبيع في الكويت',
    subItems: [
      {
        title: 'بيوت للبيع',
        href: ''
      },
      {
        title: 'شقق للبيع',
        href: ''
      },
      {
        title: 'أراضي للبيع',
        href: ''
      },
      {
        title: 'تجاري للبيع',
        href: ''
      },
      {
        title: 'عمارات للبيع',
        href: ''
      },
      {
        title: 'شاليهات للبيع',
        href: ''
      },
      {
        title: 'مزارع للبيع',
        href: ''
      },
      {
        title: 'دولي للبيع',
        href: ''
      }
    ]
  },
  {
    title: 'للبدل في الكويت',
    subItems: [
      {
        title: 'بيوت للبدل',
        href: ''
      },
      {
        title: 'شقق للبدل',
        href: ''
      },
      {
        title: 'أراضي للبدل',
        href: ''
      }
    ]
  }
]

const navItems = [
  {
    title: 'تسجيل',
    href: '/'
  },
  {
    title: 'دخول',
    href: '/'
  },
  {
    title: 'المكاتب',
    href: '/'
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
    icon: '/images/home_search.svg'
  },
  {
    title: 'دخول / تسجيل',
    href: '/',
    icon: '/images/sign_in.svg'
  },
  {
    title: 'إعلان مجانًا',
    href: '/',
    icon: '/images/add_circle_outlined.png'
  },
  {
    title: 'المكاتب',
    href: '/',
    icon: '/images/briefcase_outlined.svg'
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
  const [showSubRealState, setShowSubRealState] = useState([
    false,
    false,
    false
  ])

  const [activeItem, setActiveItem] = useState(navItems[3].title)
  const [activeItemOnMobile, setActiveItemOnMobile] = useState(
    mobileNavItems[0].title
  )

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

  return (
    <Popover className="relative bg-white shadow-sm">
      <div className="container max-w-6xl">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-3 md:py-5 md:justify-start md:space-x-10">
          <div className="hidden md:flex md:flex-1">
            <CTA
              title="إضافة إعلان"
              backgroundColor="primary"
              Icon={<PlusCircleIcon className="h-6 w-6 ml-3" />}
            />
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {() => (
                <>
                  <Popover.Button className="group inline-flex mt-1 items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none">
                    <ChevronDownIcon
                      className="text-base mr-2 h-5 w-5 group-hover:text-gray-500"
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
                    <Popover.Panel className="absolute z-10 transform">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="bg-white w-48">
                          {realEstate.map((item, index) => (
                            <button
                              type="button"
                              key={item.title}
                              className="rounded-lg w-full p-3"
                              onClick={() => handleShowSubRealState(index)}
                            >
                              <div className="flex items-center justify-between">
                                <ChevronDownIcon
                                  className="mr-2 h-5 w-5 group-hover:text-gray-500 text-base"
                                  aria-hidden="true"
                                />
                                <p className="text-base font-medium text-gray-900">
                                  {item.title}
                                </p>
                              </div>
                              <div
                                className={`${
                                  showSubRealState[index] ? 'flex' : 'hidden'
                                } flex-col mt-2 shadow py-2`}
                              >
                                {item.subItems?.map((subItem) => (
                                  <Link key={subItem.title} href={subItem.href}>
                                    <p className="hover:bg-gray-50">
                                      {subItem.title}
                                    </p>
                                  </Link>
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
            {navItems.map((item) => (
              <button
                type="button"
                onClick={() => handleNavChange(item)}
                className={`${
                  activeItem === item.title
                    ? "text-primary-500 after:content-['.'] after:text-primary-500 after:text-3xl after:font-bold after:absolute after:-bottom-4 after:w-full after:left-0"
                    : 'text-base'
                } font-medium hover:text-primary-500 relative`}
                key={item.title}
              >
                {item.title}
              </button>
            ))}
          </Popover.Group>
          <div className="flex justify-center items-center pl-5 md:pl-auto lg:w-0 lg:flex-1 w-full">
            <span className="sr-only">Company Logo</span>
            <Image width={150} height={47} src="/images/logo.png" alt="logo" />
          </div>
          <div className="md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black-400 hover:bg-black-100 hover:text-gray-500 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-9 w-9" aria-hidden="true" />
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
          className="absolute top-0 right-0 transform transition md:hidden w-10/12 h-screen"
        >
          <div className="rounded-lg bg-white shadow-2xl h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between px-4 pt-5 pb-3">
                <div>
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div>
                  <Image
                    width={150}
                    height={47}
                    src="/images/logo.png"
                    alt="logo"
                  />
                </div>
              </div>
              <hr className="h-px bg-gray-400 border-0" />

              {/* nav items */}
              <div className="mt-6 flex flex-col gap-3">
                {mobileNavItems.map((item) => (
                  <Link href={item.href} key={item.title}>
                    <button
                      type="button"
                      onClick={() => handleMobileNavChange(item)}
                      className={`${
                        activeItemOnMobile === item.title && 'bg-blue-100'
                      } flex items-center gap-4 justify-end pr-5 py-2 ml-5 rounded-l-2xl hover:bg-blue-100 cursor-pointer transition-colors ease-in-out duration-500`}
                    >
                      <p
                        className={`${
                          item.title === 'إعلان مجانًا' && 'text-secondary'
                        } font-semibold`}
                      >
                        {item.title}
                      </p>
                      <Image
                        src={item.icon}
                        height={30}
                        width={30}
                        alt="nav_item"
                      />
                    </button>
                  </Link>
                ))}
                <Popover className="relative ml-5 rounded-l-2xl">
                  {() => (
                    <>
                      <Popover.Button className="group py-1 inline-flex mt-1 pl-5 items-center justify-between w-full rounded-l-2xl bg-white text-base font-medium hover:bg-blue-100 transition-colors ease-in-out duration-500 focus:outline-none">
                        <ChevronDownIcon
                          className="text-base h-5 w-5 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <div className="flex items-center gap-4 justify-end pr-5 py-2 ml-5 rounded-l-2xl cursor-pointer">
                          <p className="font-semibold">عقارات الكویت</p>
                          <Image
                            src="/images/building-solid.svg"
                            height={25}
                            width={25}
                            alt="home_search"
                          />
                        </div>
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
                        <Popover.Panel className="absolute z-10 transform">
                          <div className="overflow-hidden rounded-lg w-full shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="bg-white w-full">
                              {realEstate.map((item, index) => (
                                <button
                                  type="button"
                                  key={item.title}
                                  className="rounded-lg w-full p-3"
                                  onClick={() => handleShowSubRealState(index)}
                                >
                                  <div className="flex items-center justify-between">
                                    <ChevronDownIcon
                                      className="ml-2 h-5 w-5 group-hover:text-gray-500 text-base"
                                      aria-hidden="true"
                                    />
                                    <p className="text-base font-medium text-gray-900">
                                      {item.title}
                                    </p>
                                  </div>
                                  <div
                                    className={`${
                                      showSubRealState[index]
                                        ? 'flex'
                                        : 'hidden'
                                    } flex-col mt-2 shadow py-2`}
                                  >
                                    {item.subItems?.map((subItem) => (
                                      <Link
                                        key={subItem.title}
                                        href={subItem.href}
                                      >
                                        <p className="hover:bg-gray-50">
                                          {subItem.title}
                                        </p>
                                      </Link>
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
              </div>
            </div>
            <div className="mb-5 px-5 flex justify-center gap-5">
              {socialLinks.map((link) => (
                <Link href={link.href} key={Math.random()}>
                  <button
                    type="button"
                    className="px-3 py-2 flex items-center bg-gray-100 rounded-lg cursor-pointer"
                  >
                    <Image src={link.imagePath} width={21} height={24} />
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
