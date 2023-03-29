import { AdjustmentsVerticalIcon } from '@heroicons/react/20/solid'
import PostDataTable from 'components/Admin/PostDataTable'
import PostFilterSideBar from 'components/Admin/PostFilterSideBar'
import type { NextPage } from 'next'
import { useState } from 'react'

const Posts: NextPage = () => {
  const [showFilterSideBar, setShowFilterSideBar] = useState(false)

  return (
    <div>
      <div className="border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Posts
          </h1>
        </div>
        <div className="min-w-0 flex-1 flex justify-end">
          <AdjustmentsVerticalIcon
            className="h6 w-6 text-primary cursor-pointer"
            onClick={() => setShowFilterSideBar(!showFilterSideBar)}
          />
        </div>
      </div>
      <div className="container max-w-6xl p-5 ">
        <PostFilterSideBar
          show={showFilterSideBar}
          handleSetShowFilterSideBar={setShowFilterSideBar}
        />
        <div className="mt-16">
          <PostDataTable />
        </div>
      </div>
    </div>
  )
}

export default Posts
