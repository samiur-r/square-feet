import Tooltip from 'components/Tooltip'
import { TransactionType } from 'interfaces'
import React, { useEffect, useState } from 'react'
import { PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Modal from 'components/Modal'

interface DataGridProps {
  transactions: TransactionType[]
  handleUpdateTransactionStatus: (
    transactionId: number | undefined,
    transactionStatus: string | undefined
  ) => void
}

const DataGrid: React.FC<DataGridProps> = ({
  transactions,
  handleUpdateTransactionStatus
}) => {
  const [data, setData] = useState<any>([])
  const [transactionId, setTransactionId] = useState<number | undefined>(
    undefined
  )
  const [showEditStatusModal, setShowEditStatusModal] = useState(false)
  const [transactionStatus, setTransactionStatus] = useState<
    string | undefined
  >(undefined)

  useEffect(() => {
    setData(transactions)
  }, [transactions])

  const getBgColor = (item: any) => {
    if (item.status === 'completed') return 'bg-green-200'
    if (item.status === 'failed' || item.status === 'canceled')
      return 'bg-red-200'
    return ''
  }

  const handleShowConfirmModalForEditStatus = (
    id: number,
    status: string | undefined
  ) => {
    setTransactionId(id)
    setTransactionStatus(status)
    setShowEditStatusModal(true)
  }

  return (
    <div className="overflow-x-scroll xl:overflow-x-hidden shadow-md">
      {/* edit transaction status modal */}
      <Modal
        isModalOpen={showEditStatusModal}
        handleIsModalOpen={setShowEditStatusModal}
        type="warning"
      >
        <p className="font-semibold text-lg">Transaction Status</p>
        <div className="mt-5">
          <select
            id="status"
            name="status"
            className="bg-custom-gray-3 mt-2 block w-full rounded-md border py-1.5 px-3 sm:text-sm sm:leading-6 outline-none"
            value={transactionStatus}
            onChange={(e) => setTransactionStatus(e.target.value)}
          >
            <option value="created">Created</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
            <option value="failed">Failed</option>
          </select>
        </div>
        <div className="flex justify-end mt-10 gap-3">
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-custom-gray"
            onClick={() => setShowEditStatusModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-red-400"
            onClick={() => {
              handleUpdateTransactionStatus(transactionId, transactionStatus)
              setShowEditStatusModal(false)
            }}
          >
            Confirm
          </button>
        </div>
      </Modal>
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
            <th className="py-3 px-3 text-left">Track Id</th>
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
                  <button
                    type="button"
                    onClick={() =>
                      handleShowConfirmModalForEditStatus(item.id, item.status)
                    }
                  >
                    {item.status}
                  </button>
                </td>
                <td className="py-2.5 px-3 border">
                  {item.package_title ? item.package_title.slice(0, -1) : ''}
                </td>
                <td className="py-2.5 px-3 border">
                  <span className="flex gap-2 items-center">
                    <a
                      href={`https://wa.me/+965${item.user.phone}`}
                      className="p-1 rounded-sm bg-custom-green"
                    >
                      <PhoneIcon className="w-3 h-3 text-white" />
                    </a>
                    <Link href={`/admin/user/${item.user.id}`}>
                      <a className="text-primary">{item.user.phone}</a>
                    </Link>
                  </span>
                </td>
                <td className="py-2.5 px-3 border">
                  {item.user.admin_comment ?? '-'}
                </td>
                <td className="py-2.5 px-3 border">{item.amount}</td>
                <td className="py-2.5 px-3 border">{item.tran_id}</td>
                <td className="py-2.5 px-3 border">{item.track_id}</td>
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
