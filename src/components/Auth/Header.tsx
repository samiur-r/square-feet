import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const { pathname } = useRouter()

  return (
    <div className="flex border rounded-full w-full">
      <Link href="/register">
        <a
          className={`${
            pathname === '/register' && 'bg-primary text-white'
          } py-4 px-16 md:px-20 rounded-full`}
        >
          تسجيل
        </a>
      </Link>
      <Link href="/login">
        <a
          className={`${
            pathname === '/login' && 'bg-primary text-white'
          } py-4 px-16 md:px-20 rounded-full`}
        >
          دخول
        </a>
      </Link>
    </div>
  )
}

export default Header
