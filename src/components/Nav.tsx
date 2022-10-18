/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-redundant-roles */
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

const Nav: React.FC = () => {
  const [showSubRealState, setShowSubRealState] = useState([
    false,
    false,
    false
  ])

  const [activeItem, setActiveItem] = useState(navItems[3].title)

  const handleShowSubRealState = (index: number) => {
    setShowSubRealState(
      showSubRealState.map((item, i) => (i === index ? !item : item))
    )
  }

  const handleNavChange = (item: { title: string; href: string }) => {
    setActiveItem(item.title)
  }

  return (
    <Popover className="relative bg-white">
      <div className="container max-w-6xl">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10">
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
                  <Popover.Button className="group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none">
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
          <div className="flex justify-center items-center lg:w-0 lg:flex-1">
            <span className="sr-only">Company Logo</span>
            <Image
              width="150px"
              height="47px"
              src="/images/logo.svg"
              alt="logo"
            />
          </div>
          <div className="md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

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
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {realEstate.map((item) => (
                    <button
                      type="button"
                      key={item.title}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <button
                  type="button"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </button>

                <button
                  type="button"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </button>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Nav
