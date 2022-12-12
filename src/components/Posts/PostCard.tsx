import React from 'react'
import Image from 'next/image'
import Actions from './Actions'

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
  showActions?: boolean
}

const PostCard: React.FC<PostCardProps> = ({ post, showActions }) => {
  return (
    <div
      className={`${
        post.isSticky
          ? `
							border-rose-300 bg-red-50 after:absolute after:content-["مميز"] after:text-xs after:md:text-sm after:bg-rose-500 after:top-1 after:right-3 after:text-white 
							after:px-2 after:md:px-3 after:py-1 after:md:py-2 before:absolute before:top-3 before:md:top-6 before:right-1 before:content-[""] before:border-t-8 before:border-t-transparent 
							before:border-b-8 before:border-b-transparent before:border-l-8 before:border-l-rose-600 before:p-1`
          : 'shadow-md'
      } rounded-lg border cursor-pointer mt-5 py-3 px-5 relative
					`}
    >
      <div className="flex gap-5">
        <div className="rounded-lg overflow-hidden h-full w-full max-w-fit flex items-center">
          <div className="w-16 h-12 md:w-24 md:h-24 relative">
            <Image
              src={post.thumbnail}
              layout="fill"
              objectFit="cover"
              alt="property_image"
            />
          </div>
        </div>
        <div className="">
          <div className="font-bold text-sm md:text:base line-clamp-1">
            {post.title}
          </div>
          <div className="flex gap-3 md:gap-5 mt-3">
            <div className="text-primary md:text-base text-xs font-bold ">
              {post.price} دك
            </div>
            <div className="flex flex-nowrap gap-2 items-center">
              <Image
                src="/images/time.svg"
                width={17}
                height={17}
                alt="clock_icon"
              />
              <div className="text-gray-500 md:text-base text-xs">
                {post.createdAt}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/images/eye.svg"
                width={19}
                height={14}
                alt="views_icon"
              />
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
      {showActions && (
        <div className="mt-5 md:mt-3 w-full grid place-items-center md:absolute md:top-0 md:place-items-end md:pl-10">
          <Actions />
        </div>
      )}
    </div>
  )
}

export default PostCard
