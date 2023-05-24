import React, { useState, useRef, useEffect } from 'react'
import { TwitterShareButton } from 'react-share'
import TextTruncate from 'react-text-truncate'
import Image from 'next/image'

import { IPost } from 'interfaces'
import getElapsedTime from 'utils/getElapsedTime'
import Router from 'next/router'
import ApiClient from 'utils/ApiClient'
import { useStore } from 'store'
import Link from 'next/link'
import { placeholderImg, toBase64 } from 'utils/strToBase64'
import config from 'config'
import Actions from './Actions'
import Modal from 'components/Modal'

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
  const twitterBtnRef: any = useRef(null)
  const { updateToast, highlightedPost } = useStore()
  const [isCallingApiForStick, setIsCallingApiForStick] = useState(false)
  const [isCallingApiForRepost, setIsCallingApiForRepost] = useState(false)
  const [isCallingApiForDelete, setIsCallingApiForDelete] = useState(false)
  const [isPreviouslyClicked, setIsPreviouslyClicked] = useState(false)
  const [showRedirectModal, setShowRedirectModal] = useState(false)

  useEffect(() => {
    if (post && post.id === highlightedPost) setIsPreviouslyClicked(true)
  }, [post])

  const getMediaType = (base64Str: string) => {
    const pathSegments = base64Str.split('/')
    const resourceType = pathSegments[4]
    return resourceType
  }

  // eslint-disable-next-line no-nested-ternary
  const thumbnail = post?.media?.length
    ? getMediaType(post.media[0]) === 'image'
      ? `${post.media[0]}`
      : '/images/nopic-ar.jpg'
    : '/images/nopic-ar.jpg'

  const { unit, timeElapsed } = getElapsedTime(post?.public_date?.toString())

  const stickPost = async () => {
    setIsCallingApiForStick(true)
    try {
      const response = await ApiClient({
        url: '/post/stick',
        method: 'POST',
        data: { postId: post.id }
      })
      setIsCallingApiForStick(false)
      updateToast(true, `Success: ${response?.data.success}`, false)
      Router.reload()
    } catch (error: any) {
      setIsCallingApiForStick(false)
      if (error?.response?.status === 402) {
        setShowRedirectModal(true)
        return
      }
      updateToast(true, `Error: ${error?.response?.data}`, true)
    }
  }

  const rePost = async () => {
    setIsCallingApiForRepost(true)
    try {
      const response = await ApiClient({
        url: '/post/repost',
        method: 'POST',
        data: { postId: post.id }
      })
      setIsCallingApiForRepost(false)
      updateToast(true, `Success: ${response?.data.success}`, false)
      Router.reload()
    } catch (error: any) {
      setIsCallingApiForRepost(false)
      if (error?.response?.status === 402) {
        setShowRedirectModal(true)
        return
      }
      updateToast(true, `Error: ${error?.response?.data}`, true)
    }
  }

  const deletePost = async () => {
    setIsCallingApiForDelete(true)
    try {
      const response = await ApiClient({
        url: '/post',
        method: 'DELETE',
        data: { postId: post.id, isArchive }
      })
      setIsCallingApiForDelete(false)
      updateToast(true, `Success: ${response?.data.success}`, false)
      Router.reload()
    } catch (error: any) {
      setIsCallingApiForDelete(false)
      updateToast(true, `Error: ${error?.response?.data}`, true)
    }
  }

  const shareOnTwitter = () => {
    if (twitterBtnRef && twitterBtnRef.current) twitterBtnRef.current.click()
  }

  const handleAction = async (operation: string) => {
    switch (operation) {
      case 'edit':
        Router.push(`/post?mode=edit&id=${post.id}`)
        break
      case 'stick':
        await stickPost()
        break
      case 'repost':
        await rePost()
        break
      case 'delete':
        await deletePost()
        break
      case 'shareOnTwitter':
        shareOnTwitter()
        break
      default:
        break
    }
  }

  return (
    <div
      style={{
        // eslint-disable-next-line no-nested-ternary
        backgroundColor: post.is_sticky
          ? '#FCF2F2'
          : isArchive
          ? '#f9f9f9'
          : '#fff'
      }}
      className={`${
        post.is_sticky &&
        `
             border-custom-red-light after:absolute after:content-["مميز"] after:text-xs after:md:text-sm after:bg-custom-red after:top-1.5 after:right-1 after:text-white 
							after:rounded-sm after:px-2 after:pb-[3.5px] after:pt-[2.5px] after:md:pb-[4px] after:md:pt-[3px] after:text-center before:absolute before:top-[13px] before:md:top-[18px] before:-right-[3.5px] before:md:-right-[4px] before:content-[""] before:border-t-8 before:border-t-transparent 
							before:border-b-8 before:border-b-transparent before:border-l-8 before:border-l-[#CE3552] before:p-1`
      } 
      ${isPreviouslyClicked ? 'shadow-lg' : ''}
      rounded-lg border cursor-pointer mt-3 py-2.5 px-2.5 relative`}
    >
      <Modal
        type="warning"
        isModalOpen={showRedirectModal}
        handleIsModalOpen={setShowRedirectModal}
      >
        <p className="font-semibold text-lg">
          You do not have enough credits. Do you want to topup
        </p>
        <div className="flex justify-end mt-10 gap-3">
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-custom-gray"
            onClick={() => setShowRedirectModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-red-400"
            onClick={() => Router.push('/topup')}
          >
            Confirm
          </button>
        </div>
      </Modal>
      <Link href={`/post/${post.id}`}>
        <a>
          <div className="flex md:items-center gap-3 md:gap-4">
            <div className="rounded-lg overflow-hidden h-full w-full max-w-fit flex items-center border">
              <div className="w-16 h-12 md:w-28 md:h-28 relative">
                {/* <Link href={isArchive ? '#' : `/post/${post.id}`}>
                  <a> */}
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="property_image"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    placeholderImg()
                  )}`}
                  src={thumbnail}
                />
                {/* </a>
                </Link> */}
              </div>
            </div>
            <div>
              <div className="font-DroidArabicKufiBold text-sm md:text-lg line-clamp-1 max-w-xs relative z-10">
                {/* <Link href={isArchive ? '#' : `/post/${post.id}`}> */}
                <p>{post.title}</p>
                {/* </Link> */}
              </div>

              <div className="flex gap-3 md:gap-5 mt-3">
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
                    {post ? Math.ceil(post.views) : ''}
                  </div>
                </div>
                {post && post.price && (
                  <div className="text-primary md:text-base text-xs font-bold font-DroidArabicKufiBold">
                    {post.price} دك
                  </div>
                )}
              </div>
              <div className="hidden md:block mt-3 text-sm text-custom-gray-1">
                <TextTruncate
                  line={2}
                  element="p"
                  truncateText="…"
                  text={post.description}
                />
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href={isArchive ? '#' : `/post/${post.id}`}>
        <a>
          <div className="md:hidden mt-3 text-xs text-custom-gray-1">
            <TextTruncate
              line={2}
              element="p"
              truncateText="…"
              text={post.description}
            />
          </div>
        </a>
      </Link>
      {showActions && (
        <div className="mt-5 md:mt-3 w-full grid place-items-center md:absolute md:top-0 md:place-items-end md:pl-10">
          <Actions
            isArchive={isArchive}
            isSticky={post.is_sticky}
            isCallingApiForStick={isCallingApiForStick}
            isCallingApiForRepost={isCallingApiForRepost}
            isCallingApiForDelete={isCallingApiForDelete}
            handleAction={handleAction}
          />
          <TwitterShareButton
            ref={twitterBtnRef}
            title={`${post.title} ${post.description} `}
            url={`${config.domain}/post/${post.id}`}
          >
            <p> </p>
          </TwitterShareButton>
        </div>
      )}
    </div>
  )
}

export default PostCard
