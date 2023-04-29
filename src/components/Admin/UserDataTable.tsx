import { AdminUser } from 'interfaces'
import React, { useEffect, useState } from 'react'
import Modal from 'components/Modal'
import {
  CheckBadgeIcon,
  ClipboardDocumentIcon,
  CreditCardIcon,
  UserCircleIcon,
  CommandLineIcon,
  PencilSquareIcon,
  NoSymbolIcon,
  BoltIcon
} from '@heroicons/react/20/solid'
import Router from 'next/router'
import Tooltip from 'components/Tooltip'
import Link from 'next/link'
import {
  ArchiveBoxXMarkIcon,
  PhoneIcon,
  ReceiptRefundIcon,
  TrashIcon
} from '@heroicons/react/24/solid'
import DropDown from './Dropdown'

interface DataGridProps {
  users: AdminUser[]
  updateUserCredit: (
    creditAmount: number | undefined,
    creditType: string | undefined,
    userId: number | undefined
  ) => void
  handleVerifyUser?: (id: number) => void
  handleBlockUser: (id: number | undefined) => void
  handleUnBlockUser: (id: number | undefined) => void
  handleUpdateAdminComment: (
    userId: number | undefined,
    adminComment: string | undefined
  ) => void
  handleDeleteUser: (id: number | undefined) => void
  handlePermanentDeleteUser: (id: number | undefined) => void
  handleRestoreUser: (id: number | undefined) => void
}

const DataGrid: React.FC<DataGridProps> = ({
  users,
  updateUserCredit,
  handleVerifyUser,
  handleBlockUser,
  handleUnBlockUser,
  handleUpdateAdminComment,
  handleDeleteUser,
  handlePermanentDeleteUser,
  handleRestoreUser
}) => {
  const [data, setData] = useState<AdminUser[]>([])
  const [creditAmount, setCreditAmount] = useState<number | undefined>(
    undefined
  )
  const [creditType, setCreditType] = useState<string | undefined>(undefined)
  const [showCreditModal, setShowCreditModal] = useState(false)
  const [userId, setUserId] = useState<number | undefined>(undefined)

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [confirmationMsg, setConfirmationMsg] = useState('')
  const [blockOpt, setBlockOpt] = useState<undefined | number>(undefined)

  const [showAdminCommentModal, setShowAdminCommentModal] = useState(false)
  const [adminComment, setAdminComment] = useState<string | undefined>(
    undefined
  )

  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false)
  const [userIdToDelete, setUserIdToDelete] = useState<number | undefined>(
    undefined
  )

  const [showPermanentDeleteConfirmModal, setShowPermanentDeleteConfirmModal] =
    useState(false)
  const [userIdToPermanentDelete, setUserIdToPermanentDelete] = useState<
    number | undefined
  >(undefined)

  const [showRestoreConfirmModal, setShowRestoreConfirmModal] = useState(false)
  const [userIdToRestore, setUserIdToRestore] = useState<number | undefined>(
    undefined
  )

  useEffect(() => {
    setData(users)
  }, [users])

  useEffect(() => {
    if (!showDeleteConfirmModal) {
      setUserIdToDelete(undefined)
    }
  }, [showDeleteConfirmModal])

  useEffect(() => {
    if (!showPermanentDeleteConfirmModal) {
      setUserIdToPermanentDelete(undefined)
    }
  }, [showPermanentDeleteConfirmModal])

  useEffect(() => {
    if (!showRestoreConfirmModal) {
      setUserIdToRestore(undefined)
    }
  }, [showRestoreConfirmModal])

  useEffect(() => {
    if (!showCreditModal) {
      setCreditAmount(undefined)
      setUserId(undefined)
      setCreditType(undefined)
    }
  }, [showCreditModal])

  const handleShowPosts = (id: number) => {
    Router.push(`/admin/posts?userId=${id}`)
  }

  const handleShowTransactions = (id: number) => {
    Router.push(`/admin/transactions?userId=${id}`)
  }

  const handleShowUser = (id: number) => {
    Router.push(`/admin/user/${id}`)
  }

  const handleShowLogs = (id: number) => {
    Router.push(`/admin/logs?user=${id}`)
  }

  const handleEditUser = (id: number) => {
    Router.push(`/admin/user/edit/${id}`)
  }

  useEffect(() => {
    if (!showConfirmModal) {
      setBlockOpt(undefined)
      setUserId(undefined)
      setConfirmationMsg('')
    }
  }, [showConfirmModal])

  const handleShowConfirmModalForBlock = (id: number) => {
    setBlockOpt(1)
    setUserId(id)
    setConfirmationMsg('Are you sure to block the user?')
    setShowConfirmModal(true)
  }

  const handleShowConfirmModalForUnBlock = (id: number) => {
    setBlockOpt(2)
    setUserId(id)
    setConfirmationMsg('Are you sure to unblock the user?')
    setShowConfirmModal(true)
  }

  useEffect(() => {
    if (!showAdminCommentModal) {
      setUserId(undefined)
      setAdminComment(undefined)
    }
  }, [showAdminCommentModal])

  const handleShowConfirmModalForAdminComment = (
    id: number,
    admin_comment: string | undefined
  ) => {
    setUserId(id)
    setAdminComment(admin_comment)
    setShowAdminCommentModal(true)
  }

  const getUserStatus = (user: AdminUser) => {
    if (user.is_deleted) return 'deleted'
    if (user.is_blocked) return 'blocked'
    if (user.status === 'not_verified') return 'not verified'
    if (user.is_agent) return 'agent'
    return 'user'
  }

  const handleShowConfirmModalForRestore = (id: number) => {
    setUserIdToRestore(id)
    setShowRestoreConfirmModal(true)
  }

  const handleShowConfirmModalForDelete = (id: number) => {
    setUserIdToDelete(id)
    setShowDeleteConfirmModal(true)
  }

  const handleShowConfirmModalForPermanentDelete = (id: number) => {
    setUserIdToPermanentDelete(id)
    setShowPermanentDeleteConfirmModal(true)
  }

  const dropDownItems = [
    {
      title: 'View Posts',
      icon: ClipboardDocumentIcon,
      handleClick: handleShowPosts
    },
    {
      title: 'Transactions',
      icon: CreditCardIcon,
      handleClick: handleShowTransactions
    },
    {
      title: 'View Page',
      icon: UserCircleIcon,
      handleClick: handleShowUser
    },
    {
      title: 'Verify',
      icon: CheckBadgeIcon,
      handleClick: handleVerifyUser
    },
    {
      title: 'Block',
      icon: NoSymbolIcon,
      handleClick: handleShowConfirmModalForBlock
    },
    {
      title: 'Unblock',
      icon: BoltIcon,
      handleClick: handleShowConfirmModalForUnBlock
    },
    {
      title: 'Log',
      icon: CommandLineIcon,
      handleClick: handleShowLogs
    },
    {
      title: 'Edit',
      icon: PencilSquareIcon,
      handleClick: handleEditUser
    },
    {
      title: 'Restore',
      icon: ReceiptRefundIcon,
      handleClick: handleShowConfirmModalForRestore
    },
    {
      title: 'Delete',
      icon: TrashIcon,
      handleClick: handleShowConfirmModalForDelete
    },
    {
      title: 'Delete Permanently',
      icon: ArchiveBoxXMarkIcon,
      handleClick: handleShowConfirmModalForPermanentDelete
    }
  ]

  const getBgColor = (item: any) => {
    if (item.is_deleted) return 'bg-yellow-800'
    if (item.is_blocked) return 'bg-gray-500'
    if (item.status === 'not_verified') return 'bg-red-200'
    if (item.is_agent) return 'bg-indigo-100'
    if (item.has_zero_credits) return 'bg-orange-200'
  }

  return (
    <div className="overflow-x-scroll xl:overflow-x-hidden shadow-md">
      {/* delete confirmation modal */}
      <Modal
        isModalOpen={showDeleteConfirmModal}
        handleIsModalOpen={setShowDeleteConfirmModal}
        type="warning"
      >
        <p className="font-semibold text-lg">
          Are you sure you want delete the user?
        </p>
        <div className="flex justify-end mt-10 gap-3">
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-custom-gray"
            onClick={() => setShowDeleteConfirmModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-red-400"
            onClick={() => {
              handleDeleteUser(userIdToDelete)
              setShowDeleteConfirmModal(false)
            }}
          >
            Confirm
          </button>
        </div>
      </Modal>
      {/* permanent delete confirmation modal */}
      <Modal
        isModalOpen={showPermanentDeleteConfirmModal}
        handleIsModalOpen={setShowPermanentDeleteConfirmModal}
        type="warning"
      >
        <p className="font-semibold text-lg">
          Are you sure you want permanently delete the user?
        </p>
        <div className="flex justify-end mt-10 gap-3">
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-custom-gray"
            onClick={() => setShowPermanentDeleteConfirmModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-red-400"
            onClick={() => {
              handlePermanentDeleteUser(userIdToPermanentDelete)
              setShowPermanentDeleteConfirmModal(false)
            }}
          >
            Confirm
          </button>
        </div>
      </Modal>
      {/* restore confirmation modal */}
      <Modal
        isModalOpen={showRestoreConfirmModal}
        handleIsModalOpen={setShowRestoreConfirmModal}
        type="warning"
      >
        <p className="font-semibold text-lg">
          Are you sure you want restore the user?
        </p>
        <div className="flex justify-end mt-10 gap-3">
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-custom-gray"
            onClick={() => setShowRestoreConfirmModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-red-400"
            onClick={() => {
              handleRestoreUser(userIdToRestore)
              setShowRestoreConfirmModal(false)
            }}
          >
            Confirm
          </button>
        </div>
      </Modal>
      {/* admin comment modal */}
      <Modal
        isModalOpen={showAdminCommentModal}
        handleIsModalOpen={setShowAdminCommentModal}
        type="warning"
      >
        <p className="font-semibold text-lg">Admin Comment</p>
        <input
          type="text"
          name="adminComment"
          value={adminComment}
          className="mt-5 p-2 outline-none border"
          onChange={(e) => setAdminComment(e.target.value)}
        />

        <div className="flex justify-end mt-10 gap-3">
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-custom-gray"
            onClick={() => setShowAdminCommentModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-red-400"
            onClick={() => {
              handleUpdateAdminComment(userId, adminComment)
              setShowAdminCommentModal(false)
            }}
          >
            Confirm
          </button>
        </div>
      </Modal>
      {/* block/unblock confirmation modal */}
      <Modal
        isModalOpen={showConfirmModal}
        handleIsModalOpen={setShowConfirmModal}
        type="warning"
      >
        <p className="font-semibold text-lg">{confirmationMsg}</p>
        <div className="flex justify-end mt-10 gap-3">
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-custom-gray"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-red-400"
            onClick={() => {
              switch (blockOpt) {
                case 1:
                  handleBlockUser(userId)
                  break
                case 2:
                  handleUnBlockUser(userId)
                  break
                default:
                  break
              }
              setShowConfirmModal(false)
            }}
          >
            Confirm
          </button>
        </div>
      </Modal>
      {/* credit edit modal */}
      <Modal
        isModalOpen={showCreditModal}
        handleIsModalOpen={setShowCreditModal}
        type=""
      >
        <p className="font-semibold text-lg">{creditType} credit</p>
        <input
          type="number"
          name="credit"
          value={creditAmount}
          className="mt-5 p-2 outline-none border"
          onChange={(e) =>
            setCreditAmount(
              e.target.value ? parseInt(e.target.value, 10) : undefined
            )
          }
        />
        <div className="flex justify-end mt-10 gap-3">
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-custom-gray"
            onClick={() => setShowCreditModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-red-400"
            onClick={() => {
              updateUserCredit(creditAmount, creditType, userId)
              setShowCreditModal(false)
            }}
            disabled={creditAmount === undefined}
          >
            Confirm
          </button>
        </div>
      </Modal>
      <table className="min-w-full shadow-lg">
        <thead className="bg-primary text-custom-gray-2 text-sm">
          <tr>
            <th colSpan={4}> </th>
            <th colSpan={8} className="border py-2">
              Posts
            </th>
            <th colSpan={3}> </th>
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
            <th className="py-3 px-3 text-left border">Last</th>
            <th className="py-3 px-3 text-left border">Subscription</th>
            <th className="py-3 px-3 text-left border">Registered</th>
            <th className="py-3 px-3 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <tr
                key={item.id}
                className={`text-sm text-center ${getBgColor(item)}`}
              >
                <td className="py-2.5 px-3 border">{item.id}</td>
                <td className="py-2.5 px-3 border">
                  <span className="flex gap-2 items-center">
                    <a
                      href={`https://wa.me/${item.phone}`}
                      className="p-1 rounded-sm bg-custom-green"
                    >
                      <PhoneIcon className="w-3 h-3 text-white" />
                    </a>
                    <Link href={`/admin/user/${item.id}`}>
                      <a className="text-primary">{item.phone}</a>
                    </Link>
                  </span>
                </td>
                <td className="py-2.5 px-3 border">
                  <button
                    type="button"
                    onClick={() =>
                      handleShowConfirmModalForAdminComment(
                        item.id,
                        item.adminComment
                      )
                    }
                  >
                    {item.adminComment && item.adminComment !== ''
                      ? item.adminComment
                      : '-'}
                  </button>
                </td>
                <td className="py-2.5 px-3 border">{getUserStatus(item)}</td>
                <td className="py-2.5 px-3 border">
                  {item.post.active + item.post.archived + item.post.deleted}
                </td>
                <td className="py-2.5 px-3 border">{item.post.active}</td>
                <td className="py-2.5 px-3 border">{item.post.archived}</td>
                <td className="py-2.5 px-3 border">{item.post.repost}</td>
                <td className="py-2.5 px-3 border">{item.post.deleted}</td>
                <td className="py-5 px-3 border flex justify-center gap-1">
                  <button
                    type="button"
                    className="text-custom-gray-1 underline"
                    onClick={() => {
                      setCreditAmount(item.credits.free)
                      setUserId(item.id)
                      setCreditType('free')
                      setShowCreditModal(true)
                    }}
                  >
                    {item.credits.free}
                  </button>
                  <p>/</p>
                  <button
                    type="button"
                    className="text-custom-green underline"
                    onClick={() => {
                      setCreditAmount(item.credits.regular)
                      setUserId(item.id)
                      setCreditType('regular')
                      setShowCreditModal(true)
                    }}
                  >
                    {item.credits.regular}
                  </button>
                  <p>/</p>
                  <button
                    type="button"
                    className="text-custom-red underline"
                    onClick={() => {
                      setCreditAmount(item.credits.sticky)
                      setUserId(item.id)
                      setCreditType('sticky')
                      setShowCreditModal(true)
                    }}
                  >
                    {item.credits.sticky}
                  </button>
                  <p>/</p>
                  <button
                    type="button"
                    className="text-primary underline"
                    onClick={() => {
                      setCreditAmount(item.credits.agent)
                      setUserId(item.id)
                      setCreditType('agent')
                      setShowCreditModal(true)
                    }}
                  >
                    {item.credits.agent}
                  </button>
                </td>
                <td className="py-2.5 px-3 border">{`${item.payment.regular} / ${item.payment.sticky} / ${item.payment.agent}`}</td>
                <td className="py-2.5 px-3 border">
                  {item.lastPostDate ? (
                    <Tooltip text={item.lastPostTime}>
                      <p>{item.lastPostDate}</p>
                    </Tooltip>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="py-2.5 px-3 border">
                  {item.is_agent ? (
                    <span>
                      <Tooltip
                        text={`${item.subscriptionStartTime} - ${item.subscriptionEndsTime}`}
                      >
                        <p>
                          {item.subscriptionStartDate}
                          {' - '}
                          {item.subscriptionEndsDate}
                        </p>
                      </Tooltip>
                    </span>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="py-2.5 px-3 border">
                  <Tooltip text={item.registeredTime}>
                    <p>{item.registeredDate}</p>
                  </Tooltip>
                </td>
                <td className="py-2.5 px-3 border">
                  <DropDown
                    items={dropDownItems}
                    postId={item.id}
                    showDelete={!item.is_deleted}
                    showRestore={item.is_deleted}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataGrid
