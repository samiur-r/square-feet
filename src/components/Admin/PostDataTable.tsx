import React, { useState } from 'react'
import Pagination from './Pagination'

const DataGrid = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' },
    { id: 4, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 5, name: 'Samuel Lee', email: 'samuel.lee@example.com' },
    { id: 6, name: 'Emily Davis', email: 'emily.davis@example.com' },
    { id: 7, name: 'Jack Brown', email: 'jack.brown@example.com' },
    { id: 8, name: 'Olivia Wilson', email: 'olivia.wilson@example.com' },
    { id: 9, name: 'Lucas Miller', email: 'lucas.miller@example.com' },
    { id: 10, name: 'Isabella Garcia', email: 'isabella.garcia@example.com' },
    { id: 11, name: 'Jacob Hernandez', email: 'jacob.hernandez@example.com' },
    { id: 12, name: 'Sophia Lopez', email: 'sophia.lopez@example.com' },
    { id: 13, name: 'Michael Martin', email: 'michael.martin@example.com' },
    { id: 14, name: 'Abigail Jackson', email: 'abigail.jackson@example.com' },
    { id: 15, name: 'William Davis', email: 'william.davis@example.com' }
  ])

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const pageRangeDisplayed = 5

  // Function to handle page changes
  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber)
  }

  // Function to handle items per page changes
  const handleItemsPerPageChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value, 10)
    setItemsPerPage(value)
    setCurrentPage(1)
  }

  return (
    <div className="overflow-x-scroll">
      {isLoading && (
        <div className="flex justify-center mb-3">
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-10 h-10 text-primary animate-spin"
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

      <table className="min-w-full shadow-lg">
        <thead className="bg-primary text-custom-gray-2">
          <tr>
            <th className="py-3 px-3 text-left">ID</th>
            <th className="py-3 px-3 text-left">Name</th>
            <th className="py-3 px-3 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="py-2.5 px-3 border">{item.id}</td>
              <td className="py-2.5 px-3 border">{item.name}</td>
              <td className="py-2.5 px-3 border">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between mt-4">
        <div>
          <span className="mr-2 text-sm">Show</span>
          <select
            className="py-1 text-sm px-4 bg-custom-gray-2 rounded"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="ml-2 text-sm">entries</span>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageRangeDisplayed={pageRangeDisplayed}
          onPageChange={handlePageChange}
          prevPageText="<"
          nextPageText=">"
          firstPageText="|<"
          lastPageText=">|"
        />
      </div>
    </div>
  )
}

export default DataGrid
