import React from 'react'
import Image from 'next/image'

interface PostCardType {
  id: number
  title: string
  views: number
  createdAt: string
  price: number
  description: string
  isSticky: boolean
  mobile: string
  thumbnail: string
  media: string[]
}

interface PostCardProps {
  post: PostCardType
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div
      className={`${
        post.isSticky
          ? `
							border-rose-300 bg-red-50 after:absolute after:content-["مميز"] after:bg-rose-500 after:top-1 after:right-3 after:text-white 
							after:px-3 after:py-2 before:absolute before:top-7 before:right-1 before:content-[""] before:border-t-8 before:border-t-transparent 
							before:border-b-8 before:border-b-transparent before:border-l-8 before:border-l-rose-500 before:p-1`
          : 'shadow-md'
      } rounded-lg border cursor-pointer mt-5 py-3 px-5 relative
					`}
    >
      <div className={`flex gap-5 `}>
        <div className="flex-grow-0 rounded-lg overflow-hidden h-full w-full max-w-fit flex items-center relative ">
          <Image
            src={post.thumbnail}
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="flex-grow">
          <div className="font-bold">{post.title}</div>
          <div className="flex gap-3 md:gap-5 mt-3">
            <div className="text-primary md:text-base text-xs font-bold ">
              {post.price} دك
            </div>
            <div className="flex flex-nowrap gap-2 items-center">
              <Image src="/images/time.svg" width={17} height={17} />
              <div className="text-gray-500 md:text-base text-xs">
                {post.createdAt}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/images/eye.svg" width={19} height={14} />
              <div className="text-gray-500 md:text-base text-xs">
                {post.views}
              </div>
            </div>
          </div>
          <div className="hidden md:block mt-3 text-sm text-gray-500 md:line-clamp-2">
            {post.description}
          </div>
        </div>
      </div>
      <div className="md:hidden mt-3 text-xs text-gray-500 line-clamp-2">
        {post.description}
      </div>
    </div>
  )
}

export default PostCard
