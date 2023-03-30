import {
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/20/solid'
import {
  CommandLineIcon,
  PencilSquareIcon,
  TrashIcon
} from '@heroicons/react/24/solid'
import { PostsWithUser } from 'interfaces'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import Modal from 'components/Modal'
import DropDown from './Dropdown'
import Pagination from './Pagination'

interface DataGridProps {
  posts: PostsWithUser[]
  handleStickPost: (postId: number) => void
  handleDeletePost: (postId: number | undefined) => void
}

const DataGrid: React.FC<DataGridProps> = ({
  posts,
  handleStickPost,
  handleDeletePost
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [data, setData] = useState<PostsWithUser[]>([])
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [postIdToDelete, setPostIdToDelete] = useState<number | undefined>(
    undefined
  )

  useEffect(() => {
    setData(posts)
  }, [posts])

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

  const handleViewPost = (postId: number) => {
    Router.push(`/post/${postId}`)
  }

  const handleEditPost = (postId: number) => {
    Router.push(`/post?mode=edit&id=${postId}`)
  }

  const handleShowDeleteConfirmModal = (postId: number) => {
    setPostIdToDelete(postId)
    setShowConfirmModal(true)
  }

  const handleLogPost = (postId: number) => {
    Router.push(`/admin/logs?postId=${postId}`)
  }

  useEffect(() => {
    if (!showConfirmModal) setPostIdToDelete(undefined)
  }, [showConfirmModal])

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
      title: 'Delete Post',
      icon: TrashIcon,
      handleClick: handleShowDeleteConfirmModal
    }
  ]

  return (
    <div className="overflow-x-scroll xl:overflow-x-hidden">
      <Modal
        type="warning"
        isModalOpen={showConfirmModal}
        handleIsModalOpen={setShowConfirmModal}
      >
        <p className="font-semibold text-lg">
          Are you sure you want to delete the post?
        </p>
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
              handleDeletePost(postIdToDelete)
              setShowConfirmModal(false)
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
            <th className="py-3 px-3 text-left">Description</th>
            <th className="py-3 px-3 text-left">Category</th>
            <th className="py-3 px-3 text-left">Type</th>
            <th className="py-3 px-3 text-left">City</th>
            <th className="py-3 px-3 text-left">Price</th>
            <th className="py-3 px-3 text-left">Sticky</th>
            <th className="py-3 px-3 text-left">User</th>
            <th className="py-3 px-3 text-left">Reposted</th>
            <th className="py-3 px-3 text-left">Repost Count</th>
            <th className="py-3 px-3 text-left">Posted</th>
            <th className="py-3 px-3 text-left">Public Date</th>
            <th className="py-3 px-3 text-left">Expires</th>
            <th className="py-3 px-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="text-sm">
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
                {item.is_sticky ? 'true' : 'false'}
              </td>
              <td className="py-2.5 px-3 border">{item.user_phone}</td>
              <td className="py-2.5 px-3 border">
                {item.is_reposted ? 'true' : 'false'}
              </td>
              <td className="py-2.5 px-3 border">{item.repost_count}</td>
              <td className="py-2.5 px-3 border">{item.posted_date}</td>
              <td className="py-2.5 px-3 border">{item.public_date}</td>
              <td className="py-2.5 px-3 border">{item.expired_date}</td>
              <td className="py-2.5 px-3 border">
                <DropDown items={dropDownItems} postId={item.id} />
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
