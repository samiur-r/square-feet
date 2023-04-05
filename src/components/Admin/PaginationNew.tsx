import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface PaginationProps {
  totalPages: number
  handlePageNumberChange: Dispatch<SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  handlePageNumberChange
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageRange = 4 // number of pages to show before and after the current page

  useEffect(() => {
    handlePageNumberChange(currentPage)
  }, [currentPage])

  function handlePageChange(page: React.SetStateAction<number>) {
    setCurrentPage(page)
  }

  function handlePrevClick() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  function handleNextClick() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  function handleFirstPageClick() {
    setCurrentPage(1)
  }

  function handleLastPageClick() {
    setCurrentPage(totalPages)
  }

  function renderPageNumbers() {
    const pageNumbers = []

    // Show ellipses at the beginning if the current page is more than the page range
    if (currentPage > pageRange + 1) {
      pageNumbers.push(<span key="left-ellipsis">...</span>)
    }

    // Show page numbers within the range of the current page
    // eslint-disable-next-line no-plusplus
    for (let i = currentPage - pageRange; i <= currentPage + pageRange; i++) {
      if (i > 0 && i <= totalPages) {
        pageNumbers.push(
          <span
            key={i}
            className={`inline-block mx-1 px-3 py-1 cursor-pointer hover:text-primary transition-all duration-200 ${
              i === currentPage
                ? 'bg-primary text-white border rounded-lg shadow-lg'
                : 'text-gray-700'
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </span>
        )
      }
    }

    // Show ellipses at the end if the current page is less than the total pages minus the page range
    if (currentPage < totalPages - pageRange) {
      pageNumbers.push(<span key="right-ellipsis">...</span>)
    }

    // Show the first and last pages
    if (currentPage - pageRange > 1) {
      pageNumbers.unshift(
        <span
          key="first"
          className="inline-block mx-1 px-3 py-1 cursor-pointer hover:text-primary text-gray-700"
          onClick={handleFirstPageClick}
        >
          1
        </span>
      )
    }

    if (currentPage + pageRange < totalPages) {
      pageNumbers.push(
        <span
          key="last"
          className="inline-block mx-1 px-3 py-1 text-gray-700 cursor-pointer hover:text-primary"
          onClick={handleLastPageClick}
        >
          {totalPages}
        </span>
      )
    }

    return pageNumbers
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        type="button"
        className="inline-block shadow-md cursor-pointer mx-1 p-1 rounded-full bg-custom-gray-2 hover:opacity-30 transition-opacity duration-500 focus:outline-none"
        onClick={handleFirstPageClick}
        disabled={currentPage === 1}
      >
        <ChevronDoubleLeftIcon className="h-7 w-7 text-primary" />
      </button>
      <button
        type="button"
        className="inline-block shadow-md cursor-pointer mx-1 p-1 rounded-full bg-custom-gray-2 hover:opacity-30 transition-opacity duration-500 focus:outline-none"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="h-7 w-7 text-primary" />
      </button>

      <div className="bg-custom-gray-2 p-1 rounded-lg mx-2 shadow-md">
        {renderPageNumbers()}
      </div>

      <button
        type="button"
        className="inline-block shadow-md cursor-pointer mx-1 p-1 rounded-full bg-custom-gray-2 hover:opacity-30 transition-opacity duration-500 focus:outline-none"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon className="h-7 w-7 text-primary" />
      </button>
      <button
        type="button"
        className="inline-block shadow-md cursor-pointer mx-1 p-1 rounded-full bg-custom-gray-2 hover:opacity-30 transition-opacity duration-500 focus:outline-none"
        onClick={handleLastPageClick}
        disabled={currentPage === totalPages}
      >
        <ChevronDoubleRightIcon className="h-7 w-7 text-primary" />
      </button>
    </div>
  )
}

export default Pagination
