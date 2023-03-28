import React, { useState } from 'react'
import Pagination from './Pagination'

const DataGrid = () => {
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
    <div>
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
      <div className="flex items-center justify-between mt-4">
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
