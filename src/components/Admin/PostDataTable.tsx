import {
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/20/solid'
import {
  ArchiveBoxXMarkIcon,
  ArrowPathIcon,
  CommandLineIcon,
  PencilSquareIcon,
  ReceiptRefundIcon,
  TrashIcon
} from '@heroicons/react/24/solid'
import { PostsWithUser } from 'interfaces'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import Modal from 'components/Modal'
import Tooltip from 'components/Tooltip'
import Link from 'next/link'
import DropDown from './Dropdown'

interface DataGridProps {
  posts: PostsWithUser[]
  handleStickPost: (postId: number) => void
  handleDeletePost: (postId: number | undefined) => void
  handlePermanentDeletePost: (postId: number | undefined) => void
  handleRePost: (postId: number | undefined) => void
  handleRestorePost: (postId: number | undefined) => void
}

const DataGrid: React.FC<DataGridProps> = ({
  posts,
  handleStickPost,
  handleDeletePost,
  handlePermanentDeletePost,
  handleRePost,
  handleRestorePost
}) => {
  const [data, setData] = useState<PostsWithUser[]>([])
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [postIdToDelete, setPostIdToDelete] = useState<number | undefined>(
    undefined
  )
  const [postIdToPermanentDelete, setPostIdToPermanentDelete] = useState<
    number | undefined
  >(undefined)
  const [postIdToRePost, setPostIdToRePost] = useState<number | undefined>(
    undefined
  )
  const [postIdToRestore, setPostIdToRestore] = useState<number | undefined>(
    undefined
  )
  const [modalMsg, setModalMsg] = useState('')
  const [opt, setOpt] = useState<string | undefined>(undefined)

  useEffect(() => {
    setData(posts)
  }, [posts])

  const handleViewPost = (postId: number) => {
    Router.push(`/post/${postId}`)
  }

  const handleEditPost = (postId: number) => {
    Router.push(`/post?mode=edit&id=${postId}`)
  }

  const handleShowDeleteConfirmModal = (postId: number) => {
    setOpt('delete')
    setModalMsg('Are you sure you want to delete the post?')
    setPostIdToDelete(postId)
    setShowConfirmModal(true)
  }

  const handleShowPermanentDeleteConfirmModal = (postId: number) => {
    setOpt('permanent_delete')
    setModalMsg('Are you sure you want to permanently delete the post?')
    setPostIdToPermanentDelete(postId)
    setShowConfirmModal(true)
  }

  const handleShowRepostConfirmModal = (postId: number) => {
    setOpt('repost')
    setModalMsg('Are you sure you want to repost the post?')
    setPostIdToRePost(postId)
    setShowConfirmModal(true)
  }

  const handleShowRestoreConfirmModal = (postId: number) => {
    setOpt('restore')
    setModalMsg('Are you sure you want to restore the post?')
    setPostIdToRestore(postId)
    setShowConfirmModal(true)
  }

  const handleLogPost = (postId: number) => {
    Router.push(`/admin/logs?postId=${postId}`)
  }

  useEffect(() => {
    if (!showConfirmModal) {
      setModalMsg('')
      setPostIdToPermanentDelete(undefined)
      setPostIdToDelete(undefined)
      setPostIdToRePost(undefined)
      setPostIdToRestore(undefined)
      setOpt(undefined)
    }
  }, [showConfirmModal])

  const handleOpt = () => {
    setShowConfirmModal(false)
    switch (opt) {
      case 'delete':
        handleDeletePost(postIdToDelete)
        break
      case 'permanent_delete':
        handlePermanentDeletePost(postIdToPermanentDelete)
        break
      case 'repost':
        handleRePost(postIdToRePost)
        break
      case 'restore':
        handleRestorePost(postIdToRestore)
        break
      default:
        break
    }
  }

  const dropDownItems = [
    {
      title: 'View Post',
      icon: ClipboardDocumentCheckIcon,
      handleClick: handleViewPost
    },
    {
      title: 'Edit Post',
      icon: PencilSquareIcon,
      handleClick: handleEditPost
    },
    {
      title: 'Stick',
      icon: CheckBadgeIcon,
      handleClick: handleStickPost
    },
    {
      title: 'Log',
      icon: CommandLineIcon,
      handleClick: handleLogPost
    },
    {
      title: 'Re post',
      icon: ArrowPathIcon,
      handleClick: handleShowRepostConfirmModal
    },
    {
      title: 'Restore',
      icon: ReceiptRefundIcon,
      handleClick: handleShowRestoreConfirmModal
    },
    {
      title: 'Delete',
      icon: TrashIcon,
      handleClick: handleShowDeleteConfirmModal
    },
    {
      title: 'Delete Permanently',
      icon: ArchiveBoxXMarkIcon,
      handleClick: handleShowPermanentDeleteConfirmModal
    }
  ]

  const getRowBGColor = (post_type: string | undefined, isSticky: boolean) => {
    switch (post_type) {
      case 'archived':
        return 'bg-gray-100'
      case 'deleted':
        return 'bg-red-100'
      default:
        break
    }

    if (isSticky) return 'bg-green-100'
  }

  return (
    <div className="overflow-x-scroll xl:overflow-x-hidden shadow-md">
      <Modal
        type="warning"
        isModalOpen={showConfirmModal}
        handleIsModalOpen={setShowConfirmModal}
      >
        <p className="font-semibold text-lg">{modalMsg}</p>
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
            onClick={() => handleOpt()}
          >
            Confirm
          </button>
        </div>
      </Modal>
      <table className="min-w-full shadow-lg">
        <thead className="bg-primary text-custom-gray-2 text-sm">
          <tr>
            <th className="py-3 px-3 text-left">ID</th>
            <th className="py-3 px-3 text-left">Description</th>
            <th className="py-3 px-3 text-left">Category</th>
            <th className="py-3 px-3 text-left">Type</th>
            <th className="py-3 px-3 text-left">City</th>
            <th className="py-3 px-3 text-left">Price</th>
            <th className="py-3 px-3 text-left">User</th>
            <th className="py-3 px-3 text-left">Repost Count</th>
            <th className="py-3 px-3 text-left">Reposted</th>
            <th className="py-3 px-3 text-left">Sticky</th>
            <th className="py-3 px-3 text-left">Unstick</th>
            <th className="py-3 px-3 text-left">Posted</th>
            <th className="py-3 px-3 text-left">Public Date</th>
            <th className="py-3 px-3 text-left">Deleted At</th>
            <th className="py-3 px-3 text-left">Expires</th>
            <th className="py-3 px-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <tr
                key={item.id}
                className={`text-sm ${getRowBGColor(
                  item.post_type,
                  item.is_sticky
                )}`}
              >
                <td className="py-2.5 px-3 border">{item.id}</td>
                <td className="py-2.5 px-3 border text-xs truncate max-w-[100px] 2xl:max-w-[300px]">
                  {item.description}
                </td>
                <td className="py-2.5 px-3 border">{item.category_title}</td>
                <td className="py-2.5 px-3 border">{item.property_title}</td>
                <td className="py-2.5 px-3 border">{item.city_title}</td>
                <td className="py-2.5 px-3 border">
                  {item.price ? item.price : '-'}
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href={`/admin/user/${item.user_id}`}>
                    <a className="text-primary">{item.user_phone}</a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">{item.repost_count}</td>
                <td className="py-2.5 px-3 border">
                  {item.is_reposted ? (
                    <Tooltip text={item.repostedTime}>
                      <p>{item.repostedDate}</p>
                    </Tooltip>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="py-2.5 px-3 border">
                  {item.is_sticky ? (
                    <Tooltip text={item.stickyTime}>
                      <p>{item.stickyDate}</p>
                    </Tooltip>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="py-2.5 px-3 border">
                  {item.is_sticky ? (
                    <Tooltip text={item.unStickTime}>
                      <p>{item.unStickDate}</p>
                    </Tooltip>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="py-2.5 px-3 border">
                  <Tooltip text={item.postedTime}>
                    <p>{item.postedDate}</p>
                  </Tooltip>
                </td>
                <td className="py-2.5 px-3 border">
                  <Tooltip text={item.publicTime}>
                    <p>{item.publicDate}</p>
                  </Tooltip>
                </td>
                <td className="py-2.5 px-3 border">
                  {item.deletedDate ? (
                    <Tooltip text={item.deletedTime}>
                      <p>{item.deletedDate}</p>
                    </Tooltip>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="py-2.5 px-3 border">
                  <Tooltip text={item.expiredTime}>
                    <p>{item.expiredDate}</p>
                  </Tooltip>
                </td>
                <td className="py-2.5 px-3 border">
                  <DropDown
                    items={dropDownItems}
                    postId={item.id}
                    showStick={
                      item.is_sticky === false && item.post_type === 'active'
                    }
                    showDelete={item.post_type !== 'deleted'}
                    showRepost={item.post_type !== 'deleted'}
                    showRestore={item.post_type === 'deleted'}
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
