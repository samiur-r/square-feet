import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useSwipeable, SwipeableHandlers } from 'react-swipeable'

import Breadcrumbs from 'components/Breadcrumbs'
import isImage from 'utils/isImage'
import Title from 'components/Title'
import ApiClient from 'utils/ApiClient'
import { IPost } from 'interfaces'
import getElapsedTime from 'utils/getElapsedTime'
import { placeholderImg, toBase64 } from 'utils/strToBase64'
import { parseJwtFromCookie } from 'utils/jwtUtils'
import { useStore } from 'store'
import config from 'config'
import Link from 'next/link'

const DynamicCarousel = dynamic(() => import('components/Carousel'), {
  suspense: true
})

const Posts: NextPage<{
  post: IPost
  isActive: boolean
  inactivePostText: string
  relevantSearch: string
}> = ({ post, isActive, inactivePostText, relevantSearch }) => {
  const [showCarousel, setShowCarousel] = useState(false)
  const { unit, timeElapsed } = getElapsedTime(post?.updated_at?.toString())
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0)
  const [whatsappMsg, setWhatsappMsg] = useState('')
  const [isActivePost, setIsActivePost] = useState(true)

  const { updateScrollYTo, updateHighlightedPost } = useStore()

  const router = useRouter()

  const handleSwipeRight = () => {
    updateScrollYTo(true)
    router.back()
  }

  const swipeHandlers: SwipeableHandlers = useSwipeable({
    onSwipedRight: handleSwipeRight
  })

  const breadcrumbsItems = [
    {
      title: 'الكويت',
      href: '/'
    },
    {
      title: `عقارات ${post?.category_title} في الكويت`,
      href: `/${post?.category_title}`
    },
    {
      title: `${post?.category_title} في ${post?.state_title}`,
      href: `/${post?.category_title}/${post?.state_title.replace(/\s+/g, '-')}`
    },
    {
      title: `${post?.category_title} في ${post?.city_title}`,
      href: `/${post?.category_title}/${post?.city_title.replace(/\s+/g, '-')}`
    },
    {
      title: `${post?.title}`,
      href: `/post/${post?.id}`
    }
  ]

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          // title: 'Shared from My App',
          // text: 'Check out this cool content!',
          url: `${config.domain}/post/${post.id}`
        })
      } catch (error: any) {
        /* empty */
      }
    }
  }

  useEffect(() => {
    if (post) {
      setWhatsappMsg(
        `${config.domain}/post/${post.id} السلام عليكم اذا ممكن ترسل تفاصيل هذا الإعلان في بو شملان وشكرا`
      )
      updateHighlightedPost(post.id)
    }
  }, [post])

  useEffect(() => {
    setIsActivePost(isActive)
  }, [isActive])

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...swipeHandlers}>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems} />
      <div className="dir-rtl grid gap-8 pb-10">
        <div className="bg-primary-light flex flex-col gap-2 md:gap-7 justify-center items-center text-white px-10 py-8 md:py-10 rounded-b-lg md:rounded-none">
          <Title value={post?.title} light />
          <div className="font-DroidArabicKufiBold font-bold text-lg md:text-xl">
            {post?.price} دك
          </div>
          <div className="flex gap-3 dir-ltr mt-5 md:mt-0">
            <div className="flex items-center bg-primary-dark px-2 py-1 rounded-lg cursor-pointer">
              <Image
                src="/images/share.svg"
                width={17}
                height={17}
                alt="share_icon"
                onClick={handleShare}
              />
            </div>
            <div className="flex flex-nowrap gap-2 items-center bg-primary-dark px-2 py-1 rounded-lg">
              <div className="md:text-base text-sm">
                {post ? Math.floor(post.views) : ''}
              </div>
              <Image
                src="/images/eye-white.svg"
                width={19}
                height={14}
                alt="icon"
              />
            </div>
            <div className="flex flex-nowrap gap-2 items-center bg-primary-dark px-2 py-1 rounded-lg">
              <div className="dir-rtl md:text-base text-sm">
                {`${timeElapsed} ${unit}`}
              </div>
              <Image
                src="/images/time-white.svg"
                width={17}
                height={17}
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div className="container max-w-6xl text-center">
          <div className="text-sm md:text-lg">{post?.description}</div>
          {isActivePost ? (
            <div className="flex gap-3 justify-center mt-5">
              <a
                href={`tel:+965${post?.phone}`}
                className="bg-custom-green py-3 hover:opacity-90 transition-opacity duration-300 w-32 flex items-center justify-center gap-1 text-center text-white rounded-md"
              >
                {post?.phone}
                <Image
                  src="/images/call-white.svg"
                  height={24}
                  width={24}
                  className="text-white font-DroidArabicKufiBold"
                  alt="phone_icon"
                />
              </a>
              <a
                href={`https://wa.me/+965${post?.phone}?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="shadow-md rounded-md p-3 flex items-center justify-center">
                  <Image
                    src="/images/whatsapp-logo-green.svg"
                    width={24}
                    height={24}
                    alt="whatsapp"
                  />
                </div>
              </a>
            </div>
          ) : (
            <div className="text-sm md:text-lg mt-3">
              <p className="text-custom-red">{inactivePostText}</p>
              <p>
                <Link href={relevantSearch}>
                  <a className="text-custom-gray mt-2">Relevant searches</a>
                </Link>
              </p>
            </div>
          )}
          {post && post.media && post.media.length && isActivePost ? (
            <div className="mt-10 relative flex flex-col items-center">
              <div className="relative">
                {isImage(post.media[0]) ? (
                  <Image
                    key={Math.random()}
                    alt="post_image"
                    width={500}
                    height={500}
                    objectFit="contain"
                    className="cursor-pointer"
                    onClick={() => {
                      setCarouselCurrentIndex(0)
                      setShowCarousel(true)
                    }}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      placeholderImg()
                    )}`}
                    src={`${post.media[0]}`}
                  />
                ) : (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video
                    className="md:w-96 md:h-96 w-80 h-80 object-contain"
                    controls
                    playsInline
                    onClick={() => {
                      setCarouselCurrentIndex(0)
                      setShowCarousel(true)
                    }}
                  >
                    <source src={`${post.media[0]}#t=0.001`} type="video/mp4" />
                    <source
                      src={`${post.media[0]}#t=0.001`}
                      type="video/webm"
                    />
                    <source src={`${post.media[0]}#t=0.001`} type="video/ogg" />
                    <source
                      src={`${post.media[0]}#t=0.001`}
                      type="video/quicktime"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-5">
                {post.media.map((src, index) =>
                  isImage(src) ? (
                    <Image
                      key={Math.random()}
                      src={`${src}`}
                      width={100}
                      height={100}
                      objectFit="cover"
                      alt="post_image"
                      className="cursor-pointer overflow-hidden"
                      onClick={() => {
                        setCarouselCurrentIndex(index)
                        setShowCarousel(true)
                      }}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        placeholderImg()
                      )}`}
                    />
                  ) : (
                    <button
                      key={Math.random()}
                      type="button"
                      onClick={() => {
                        setCarouselCurrentIndex(index)
                        setShowCarousel(true)
                      }}
                    >
                      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                      <video className="w-24 h-24" playsInline>
                        <source src={`${src}#t=0.001`} type="video/mp4" />
                        <source src={`${src}#t=0.001`} type="video/webm" />
                        <source src={`${src}#t=0.001`} type="video/ogg" />
                        <source src={`${src}#t=0.001`} type="video/quicktime" />
                        Your browser does not support the video tag.
                      </video>
                    </button>
                  )
                )}
              </div>
            </div>
          ) : null}
          {post && post.media && post.media.length ? (
            <div>
              <Suspense fallback="...">
                <DynamicCarousel
                  media={post.media}
                  open={showCarousel}
                  setOpen={setShowCarousel}
                  carouselCurrentIndex={carouselCurrentIndex}
                  handleCarouselCurrentIndex={setCarouselCurrentIndex}
                />
              </Suspense>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const parsedCookie = req.cookies.token
  let token

  if (parsedCookie) token = parseJwtFromCookie(parsedCookie)

  try {
    const response = await ApiClient({
      method: 'GET',
      url: `/post/${params?.id}`
    })

    if (!token) {
      await ApiClient({
        method: 'POST',
        url: `/post/increment-post-view`,
        data: { postId: params?.id }
      })
    }
    return {
      props: {
        post: response?.data?.success,
        isActive: response?.data?.isActive,
        inactivePostText: response?.data?.inactivePostText,
        relevantSearch: response?.data?.relevantSearch
      }
    }
  } catch (error) {
    /* empty */
  }

  return {
    props: {}
  }
}

export default Posts
