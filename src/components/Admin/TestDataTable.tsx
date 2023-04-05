import React, { useEffect, useState } from 'react'

interface DataGridProps {
  items: any[]
}

const DataGrid: React.FC<DataGridProps> = ({ items }) => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(items)
  }, [items])

  return (
    <div className="overflow-x-scroll xl:overflow-x-hidden">
      <table className="min-w-full shadow-lg">
        <thead className="bg-primary text-custom-gray-2 text-sm">
          <tr>
            <th className="py-3 px-3 text-left">ID</th>
            <th className="py-3 px-3 text-left">User Id</th>
            <th className="py-3 px-3 text-left">Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-sm">
              <td className="py-2.5 px-3 border">{item.id}</td>
              <td className="py-2.5 px-3 border">{item.userId}</td>
              <td className="py-2.5 px-3 border">{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataGrid
