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
      <div className="p-1 bg-[#BBBFC8] rounded-md">
        <TrashIcon className="w-5 h-5 text-[#909CAB]" />
      </div>
      <div className="p-1 bg-[#FBE4DB] rounded-md">
        <PencilIcon className="w-5 h-5 text-[#EE772A]" />
      </div>
      <div className="p-1 bg-[#F8D8D7] rounded-md">
        <RocketLaunchIcon className="w-5 h-5 text-[#D2110C]" />
      </div>
      <div className="p-1 bg-[#E0E9E5] rounded-md">
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
