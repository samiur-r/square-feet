import React from 'react'
import Image from 'next/image'
import { IPost } from 'interfaces'
import getElapsedTime from 'utils/getElapsedTime'
import Actions from './Actions'

interface PostCardProps {
  post: IPost
  showActions?: boolean
  isArchive?: boolean
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  showActions,
  isArchive
}) => {
  const thumbnail = post?.media?.length
    ? `/images/posts/${post.media[0]}`
    : '/images/nopic-ar.jpg'

  const { unit, timeElapsed } = getElapsedTime(post.updated_at.toString())

  return (
    <div
      className={`${
        post.is_sticky &&
        `
							border-custom-red-light bg-custom-red-lighter after:absolute after:content-["مميز"] after:text-xs after:md:text-sm after:bg-custom-red after:top-1.5 after:right-1 after:text-white 
							after:rounded-sm after:px-2 after:pb-[3.5px] after:pt-[2.5px] after:md:pb-[4px] after:md:pt-[3px] after:text-center before:absolute before:top-[13px] before:md:top-[18px] before:-right-[3.5px] before:md:-right-[4px] before:content-[""] before:border-t-8 before:border-t-transparent 
							before:border-b-8 before:border-b-transparent before:border-l-8 before:border-l-[#CE3552] before:p-1`
      } 
      ${isArchive ? 'bg-custom-gray-3' : 'shadow-md bg-white'}
      rounded-lg border cursor-pointer mt-3 py-2.5 px-2.5 relative`}
    >
      <div className="flex md:items-center gap-3 md:gap-4">
        <div className="rounded-lg overflow-hidden h-full w-full max-w-fit flex items-center border">
          <div className="w-16 h-12 md:w-28 md:h-28 relative">
            <Image
              src={thumbnail}
              layout="fill"
              objectFit="cover"
              alt="property_image"
            />
          </div>
        </div>
        <div>
          <div className="font-DroidArabicKufiBold text-sm md:text-lg line-clamp-1 max-w-xs">
            {post.title}
          </div>
          <div className="flex gap-3 md:gap-5 mt-3">
            <div className="text-primary md:text-base text-xs font-bold font-DroidArabicKufiBold">
              {post.price} دك
            </div>
            <div className="flex flex-nowrap gap-2 items-center">
              <Image
                src="/images/time.svg"
                width={17}
                height={17}
                alt="clock_icon"
              />
              <div className="text-custom-gray md:text-base text-xs">
                {`${timeElapsed} ${unit}`}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/images/eye.svg"
                width={19}
                height={14}
                alt="views_icon"
              />
              <div className="text-custom-gray md:text-base text-xs">
                {post.views}
              </div>
            </div>
          </div>
          <div className="hidden md:block mt-3 text-sm text-custom-gray-1 md:line-clamp-2">
            {post.description}
          </div>
        </div>
      </div>
      <div className="md:hidden mt-3 text-xs text-custom-gray-1 line-clamp-2">
        {post.description}
      </div>
      {showActions && (
        <div className="mt-5 md:mt-3 w-full grid place-items-center md:absolute md:top-0 md:place-items-end md:pl-10">
          <Actions isArchive={isArchive} />
        </div>
      )}
    </div>
  )
}

export default PostCard
