import {
  ArrowPathIcon,
  PencilIcon,
  RocketLaunchIcon,
  TrashIcon
} from '@heroicons/react/20/solid'
import React from 'react'
import Image from 'next/image'

const Actions = () => {
  return (
    <div className="flex flex-row-reverse gap-3">
      <div className="p-1 bg-gray-200 rounded-md">
        <TrashIcon className="w-5 h-5 text-gray-400" />
      </div>
      <div className="p-1 bg-orange-100 rounded-md">
        <PencilIcon className="w-5 h-5 text-orange-500" />
      </div>
      <div className="p-1 bg-red-100 rounded-md">
        <RocketLaunchIcon className="w-5 h-5 text-red-500" />
      </div>
      <div className="p-1 bg-emerald-100 rounded-md">
        <ArrowPathIcon className="w-5 h-5 text-emerald-800" />
      </div>
      <div className="w-7 h-7 relative">
        <Image src="/images/twitter.png" layout="fill" />
      </div>
      <div className="w-7 h-7 relative">
        <Image src="/images/chat-bubble.png" layout="fill" />
      </div>
    </div>
  )
}

export default Actions
