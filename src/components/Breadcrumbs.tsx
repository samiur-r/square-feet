import React from 'react'

const Breadcrumbs = () => {
  return (
    <nav className="flex mt-4 dir-rtl max-w-6xl m-auto" aria-label="Breadcrumb">
      <ol className="flex items-center gap-5">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            اختبار
          </a>
        </li>
        <li>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>

            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              اختبار
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>

            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              اختبار
            </span>
          </div>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
