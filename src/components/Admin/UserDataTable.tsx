import { AdminUser } from 'interfaces'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

interface DataGridProps {
  users: AdminUser[]
}

const DataGrid: React.FC<DataGridProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [data, setData] = useState<AdminUser[]>([])

  useEffect(() => {
    setData(users)
  }, [users])

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
            <th colSpan={4}> </th>
            <th colSpan={7} className="border py-2">
              Posts
            </th>
            <th colSpan={2}> </th>
          </tr>
          <tr>
            <th className="py-3 px-3 text-left border">ID</th>
            <th className="py-3 px-3 text-left border">Phone</th>
            <th className="py-3 px-3 text-left border">Admin Comment</th>
            <th className="py-3 px-3 text-left border">Status</th>
            <th className="py-3 px-3 text-left border">Total</th>
            <th className="py-3 px-3 text-left border">Active</th>
            <th className="py-3 px-3 text-left border">Archived</th>
            <th className="py-3 px-3 text-left border">Repost</th>
            <th className="py-3 px-3 text-left border">Deleted</th>
            <th className="py-3 px-3 text-center border flex flex-col gap-1">
              <p>Credits</p>
              <p className="text-xs">Free / Regular / Sticky / Agent</p>
            </th>
            <th className="py-3 px-3 text-center border">
              <p>Payment History</p>
              <p className="text-xs">Regular / Sticky / Agent</p>
            </th>
            <th className="py-3 px-3 text-left border">Subscription</th>
            <th className="py-3 px-3 text-left border">Registered</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="text-sm text-center">
              <td className="py-2.5 px-3 border">{item.id}</td>
              <td className="py-2.5 px-3 border">{item.phone}</td>
              <td className="py-2.5 px-3 border">
                {item.admin_comment ?? '-'}
              </td>
              <td className="py-2.5 px-3 border">{item.status}</td>
              <td className="py-2.5 px-3 border">{item.post.total}</td>
              <td className="py-2.5 px-3 border">{item.post.active}</td>
              <td className="py-2.5 px-3 border">{item.post.archived}</td>
              <td className="py-2.5 px-3 border">{item.post.repost}</td>
              <td className="py-2.5 px-3 border">{item.post.deleted}</td>
              <td className="py-2.5 px-3 border">{`${item.credits.free} / ${item.credits.regular} / ${item.credits.sticky} / ${item.credits.agent}`}</td>
              <td className="py-2.5 px-3 border">{`${item.payment.regular} / ${item.payment.sticky} / ${item.payment.agent}`}</td>
              <td className="py-2.5 px-3 border">{item.subscription}</td>
              <td className="py-2.5 px-3 border">{item.registered}</td>
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
