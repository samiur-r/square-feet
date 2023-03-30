import { LogType } from 'interfaces'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

interface DataGridProps {
  logs: LogType[]
}

const DataGrid: React.FC<DataGridProps> = ({ logs }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [data, setData] = useState<LogType[]>([])

  useEffect(() => {
    setData(logs)
  }, [logs])

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
            <th className="py-3 px-3 text-left">User</th>
            <th className="py-3 px-3 text-left">Post Id</th>
            <th className="py-3 px-3 text-left">Transaction</th>
            <th className="py-3 px-3 text-left">Activity</th>
            <th className="py-3 px-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="text-sm">
              <td className="py-2.5 px-3 border">{item.id}</td>
              <td className="py-2.5 px-3 border">{item.user}</td>
              <td className="py-2.5 px-3 border">{item.post_id ?? '-'}</td>
              <td className="py-2.5 px-3 border">{item.transaction ?? '-'}</td>
              <td className="py-2.5 px-3 border text-xs truncate max-w-[100px] 2xl:max-w-[300px]">
                {item.activity}
              </td>
              <td className="py-2.5 px-3 border">{item.publish_date}</td>
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
