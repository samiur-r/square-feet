/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid'
import React from 'react'

const Pagination = (props) => {
  const {
    currentPage,
    totalPages,
    onPageChange,
    prevPageText,
    nextPageText,
    firstPageText,
    lastPageText
  } = props

  const handleClickPrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handleClickFirst = () => {
    onPageChange(1)
  }

  const handleClickLast = () => {
    onPageChange(totalPages)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="text-sm mr-2">{`Page ${currentPage} of ${totalPages}`}</div>
      <ul className="flex">
        <li
          className={`mx-1 ${
            currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={handleClickFirst}
        >
          <ChevronDoubleLeftIcon
            className={`h-6 w-6 ${
              currentPage === 1 ? 'text-gray-300' : 'text-primary'
            }`}
          />
        </li>
        <li
          className={`mx-1 ${
            currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={handleClickPrev}
        >
          <ChevronLeftIcon
            className={`h-6 w-6 ${
              currentPage === 1 ? 'text-gray-300' : 'text-primary'
            }`}
          />
        </li>
        <li
          className={`mx-1 ${
            currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={handleClickNext}
        >
          <ChevronRightIcon
            className={`h-6 w-6 ${
              currentPage === totalPages ? 'text-gray-300' : 'text-primary'
            }`}
          />
        </li>
        <li
          className={`mx-1 ${
            currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={handleClickLast}
        >
          <ChevronDoubleRightIcon
            className={`h-6 w-6 ${
              currentPage === totalPages ? 'text-gray-300' : 'text-primary'
            }`}
          />
        </li>
      </ul>
    </div>
  )
}

export default Pagination
