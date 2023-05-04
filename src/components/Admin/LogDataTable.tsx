import Tooltip from 'components/Tooltip'
import { LogType } from 'interfaces'
import React, { useEffect, useState } from 'react'

interface DataGridProps {
  logs: LogType[]
}

const DataGrid: React.FC<DataGridProps> = ({ logs }) => {
  const [data, setData] = useState<LogType[]>([])

  useEffect(() => {
    setData(logs)
  }, [logs])

  return (
    <div className="overflow-x-scroll xl:overflow-x-hidden shadow-md">
      <table className="min-w-full shadow-lg">
        <thead className="bg-primary text-custom-gray-2 text-sm">
          <tr>
            {/* <th className="py-3 px-3 text-left">ID</th> */}
            <th className="py-3 px-3 text-left">User</th>
            <th className="py-3 px-3 text-left">Post Id</th>
            <th className="py-3 px-3 text-left">Transaction</th>
            <th className="py-3 px-3 text-left">Activity</th>
            <th className="py-3 px-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item: any) => (
              <tr key={item.id} className="text-sm">
                {/* <td className="py-2.5 px-3 border">{item.id}</td> */}
                <td className="py-2.5 px-3 border">{item.user}</td>
                <td className="py-2.5 px-3 border">{item.post_id ?? '-'}</td>
                <td className="py-2.5 px-3 border">
                  {item.transaction ?? '-'}
                </td>
                <td className="py-2.5 px-3 border text-xs truncate max-w-[100px] 2xl:max-w-[300px]">
                  {item.activity}
                </td>
                <td className="py-2.5 px-3 border">
                  <Tooltip text={item.time}>
                    <p>{item.date}</p>
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
