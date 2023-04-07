import { TransactionType } from 'interfaces'
import React, { useEffect, useState } from 'react'

interface DataGridProps {
  transactions: TransactionType[]
}

const DataGrid: React.FC<DataGridProps> = ({ transactions }) => {
  const [data, setData] = useState<TransactionType[]>([])

  useEffect(() => {
    setData(transactions)
  }, [transactions])

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
          {data.map((item) => (
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
    </div>
  )
}

export default DataGrid
