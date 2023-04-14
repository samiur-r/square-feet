import { Fragment, useEffect, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3CenterLeftIcon,
  HomeIcon,
  XMarkIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import ApiClient from 'utils/ApiClient'
import { useStore } from 'store'
import Toast from '../Toast'

const navigation = [
  {
    id: 1,
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: HomeIcon
  },
  {
    id: 2,
    name: 'Users',
    href: '/admin/users',
    icon: UserGroupIcon
  },
  {
    id: 3,
    name: 'Posts',
    href: '/admin/posts',
    icon: ClipboardDocumentListIcon
  },
  {
    id: 4,
    name: 'Transactions',
    href: '/admin/transactions',
    icon: CreditCardIcon
  }
]

interface AdminLayoutProps {
  children: React.ReactNode
}
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const router = useRouter()
  const currentUrl = router.asPath

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const [adminName, setAdminName] = useState('')
  const [isSuperAdmin, setIsSuperAdmin] = useState(false)
  const { admin, removeAdmin } = useStore()

  useEffect(() => {
    const matchingNavItem = navigation.find(
      (navItem) => navItem.href === currentUrl
    )
    const matchingItemId = matchingNavItem ? matchingNavItem.id : 0
    setActiveItem(matchingItemId)
  }, [currentUrl])

  useEffect(() => {
    if (admin && admin.name) setAdminName(admin.name)
    if (admin && admin.is_super) setIsSuperAdmin(admin.is_super)
  }, [admin])

  const handleLogout = async () => {
    try {
      await ApiClient({
        method: 'GET',
        url: `/admin/logout`
      })
      removeAdmin()
      Router.push('/admin/login')
      // eslint-disable-next-line no-empty
    } catch (err) {}
  }

  return (
    <>
      <Head>
        <title>Boshamlan Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full">
        <Toast />
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <Link href="/">
                      <a className="block relative w-40 h-12">
                        <Image
                          layout="fill"
                          src="/images/logo.svg"
                          alt="logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="px-2">
                      <div className="space-y-1">
                        {navigation.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <a
                              className={`
                            ${
                              activeItem === item.id
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }
                            group flex items-center rounded-md px-2 py-2 text-base font-medium leading-5
                          `}
                              onClick={() => setSidebarOpen(false)}
                            >
                              <item.icon
                                className={`
                              ${
                                activeItem === item.id
                                  ? 'text-gray-500'
                                  : 'text-gray-400 group-hover:text-gray-500'
                              }
                              mr-3 h-6 w-6 flex-shrink-0
                            `}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden shadow-lg lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4">
          <div className="flex flex-shrink-0 items-center px-6">
            <Link href="/">
              <a className="block relative w-40 h-12">
                <Image layout="fill" src="/images/logo.svg" alt="logo" />
              </a>
            </Link>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
            {/* User account dropdown */}
            <Menu
              as="div"
              className="relative inline-block px-3 text-left border-b-2 pb-1"
            >
              <div>
                <Menu.Button className="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  <span className="flex w-full items-center justify-between">
                    <span className="flex min-w-0 items-center justify-between space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-9 h-9 text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate text-sm font-bold text-gray-900">
                          {adminName}
                        </span>
                      </span>
                    </span>
                    <ChevronUpDownIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {isSuperAdmin && (
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/admin/settings">
                            <a
                              className={`${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              } block px-4 py-2 text-sm
                      `}
                            >
                              Settings
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  )}
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          } block px-4 py-2 text-sm`}
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {/* Desktop Navigation */}
            <nav className="mt-6 px-3">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      key={item.name}
                      href={item.href}
                      className={`${
                        activeItem === item.id
                          ? 'bg-gray-200 text-gray-900'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      } group flex items-center rounded-md px-2 py-2 text-sm font-medium`}
                    >
                      <item.icon
                        className={`${
                          activeItem === item.id
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500'
                        } mr-3 h-6 w-6 flex-shrink-0`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
        {/* Main column */}
        <div className="flex flex-col lg:pl-64">
          {/* Search header */}
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between items-center px-4 sm:px-6 lg:px-8">
              <div>
                <Link href="/">
                  <a className="block relative w-40 h-12">
                    <Image layout="fill" src="/images/logo.svg" alt="logo" />
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-9 h-9 text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {isSuperAdmin && (
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/admin/settings">
                                <a
                                  className={`${
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700'
                                  } block px-4 py-2 text-sm`}
                                >
                                  Settings
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      )}
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={`${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              } block px-4 py-2 text-sm`}
                              onClick={handleLogout}
                            >
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  )
}

export default AdminLayout
