import { TransactionType } from 'interfaces'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

interface DataGridProps {
  transactions: TransactionType[]
}

const DataGrid: React.FC<DataGridProps> = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [data, setData] = useState<TransactionType[]>([])

  useEffect(() => {
    setData(transactions)
  }, [transactions])

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(data.length / itemsPerPage)

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
    <div className="overflow-x-scroll xl:overflow-x-hidden">
      <table className="min-w-full shadow-lg">
        <thead className="bg-primary text-custom-gray-2 text-sm">
          <tr>
            <th className="py-3 px-3 text-left">ID</th>
            <th className="py-3 px-3 text-left">Status</th>
            <th className="py-3 px-3 text-left">Package</th>
            <th className="py-3 px-3 text-left">User</th>
            <th className="py-3 px-3 text-left">Admin Comment</th>
            <th className="py-3 px-3 text-left">Amount</th>
            <th className="py-3 px-3 text-left">Transaction Id</th>
            <th className="py-3 px-3 text-left">Created</th>
            <th className="py-3 px-3 text-left">Last Update</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="text-sm">
              <td className="py-2.5 px-3 border">{item.id}</td>
              <td className="py-2.5 px-3 border text-xs truncate max-w-[100px] 2xl:max-w-[300px]">
                {item.status}
              </td>
              <td className="py-2.5 px-3 border">
                {item.package_title ? item.package_title.slice(0, -1) : ''}
              </td>
              <td className="py-2.5 px-3 border">{item.user.phone}</td>
              <td className="py-2.5 px-3 border">
                {item.user.admin_comment ?? '-'}
              </td>
              <td className="py-2.5 px-3 border">{item.amount}</td>
              <td className="py-2.5 px-3 border">{item.tran_id}</td>
              <td className="py-2.5 px-3 border">
                {item.created_at ? item.created_at.toString().slice(0, 10) : ''}
              </td>
              <td className="py-2.5 px-3 border">
                {item.updated_at ? item.updated_at.toString().slice(0, 10) : ''}
              </td>
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
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default DataGrid
