import Tooltip from 'components/Tooltip'
import { TransactionType } from 'interfaces'
import React, { useEffect, useState } from 'react'

interface DataGridProps {
  transactions: TransactionType[]
}

const DataGrid: React.FC<DataGridProps> = ({ transactions }) => {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    setData(transactions)
  }, [transactions])

  const getBgColor = (item: any) => {
    if (item.status === 'completed') return 'bg-green-200'
    if (item.status === 'failed' || item.status === 'cancelled')
      return 'bg-red-200'
    return ''
  }

  return (
    <div className="overflow-x-scroll xl:overflow-x-hidden shadow-md">
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
          {data &&
            data.length > 0 &&
            data.map((item: any) => (
              <tr key={item.id} className={`text-sm ${getBgColor(item)}`}>
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
                  <Tooltip text={item.createdTime}>
                    <p>{item.createdDate}</p>
                  </Tooltip>
                </td>
                <td className="py-2.5 px-3 border">
                  <Tooltip text={item.updatedTime}>
                    <p>{item.updatedDate}</p>
                  </Tooltip>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataGrid
