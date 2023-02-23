import {
  ArrowPathIcon,
  RocketLaunchIcon,
  TrashIcon
} from '@heroicons/react/20/solid'
import { PencilIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Image from 'next/image'

const Actions: React.FC<{ isArchive?: boolean | undefined }> = ({
  isArchive
}) => {
  return (
    <div className="flex flex-row-reverse gap-3">
      <div className="p-1 bg-[#ECEEF0] rounded-md">
        <TrashIcon className="w-5 h-5 text-[#939FAE]" />
      </div>
      {!isArchive && (
        <div className="p-1 bg-[#FBE4DB] rounded-md">
          <PencilIcon className="w-5 h-5 text-[#EE772A]" />
        </div>
      )}
      <div className="p-1 bg-[#F8D8D7] rounded-md">
        <RocketLaunchIcon className="w-5 h-5 text-[#D2110C]" />
      </div>
      <div className="p-1 bg-[#E3F4F1] rounded-md">
        <ArrowPathIcon className="w-5 h-5 text-[#2BAA90]" />
      </div>
      {!isArchive && (
        <>
          <div className="w-7 h-7 relative">
            <Image src="/images/twitter.png" alt="twitter-icon" layout="fill" />
          </div>
          <div className="w-7 h-7 relative">
            <Image
              src="/images/chat-bubble.png"
              alt="chat-icon"
              layout="fill"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Actions
