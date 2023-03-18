import type { GetServerSideProps, NextPage } from 'next'
import { Suspense, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import Breadcrumbs from 'components/Breadcrumbs'
import isImage from 'utils/isImage'
import Title from 'components/Title'
import ApiClient from 'utils/ApiClient'
import { IPost } from 'interfaces'
import getElapsedTime from 'utils/getElapsedTime'
import { placeholderImg, toBase64 } from 'utils/strToBase64'

const DynamicCarousel = dynamic(() => import('components/Carousel'), {
  suspense: true
})

const Posts: NextPage<{ post: IPost }> = ({ post }) => {
  const [showCarousel, setShowCarousel] = useState(false)
  const { unit, timeElapsed } = getElapsedTime(post?.updated_at?.toString())

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

  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems} />
      <div className="dir-rtl grid gap-8 pb-10">
        <div className="bg-primary-light flex flex-col gap-2 md:gap-7 justify-center items-center text-white px-10 py-8 md:py-10 rounded-b-lg md:rounded-none">
          <Title value={post?.title} light />
          <div className="font-DroidArabicKufiBold font-bold text-lg md:text-xl">
            {post?.price} دك
          </div>
          <div className="flex gap-3 dir-ltr mt-5 md:mt-0">
            <div className="flex items-center bg-primary-dark px-2 py-1 rounded-lg">
              <Image
                src="/images/share.svg"
                width={17}
                height={17}
                alt="share_icon"
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
          <div className="flex gap-3 justify-center mt-5">
            <a
              href="tel:+96599491575"
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
            <div className="shadow-md rounded-md p-3 flex items-center justify-center">
              <Image
                src="/images/whatsapp-logo-green.svg"
                width={24}
                height={24}
                alt="whatsapp"
              />
            </div>
          </div>
          {post && post.media && post.media.length ? (
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
                    onClick={() => setShowCarousel(true)}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      placeholderImg()
                    )}`}
                    src={`${post.media[0]}`}
                  />
                ) : (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video
                    className="max-w-lg"
                    controls
                    onClick={() => setShowCarousel(true)}
                  >
                    <source src={`${post.media[0]}`} />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-5">
                {post.media.map((src) =>
                  isImage(src) ? (
                    <Image
                      key={Math.random()}
                      src={`${src}`}
                      width={100}
                      height={100}
                      objectFit="contain"
                      alt="post_image"
                      className="cursor-pointer"
                      onClick={() => setShowCarousel(true)}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        placeholderImg()
                      )}`}
                    />
                  ) : (
                    // eslint-disable-next-line jsx-a11y/media-has-caption
                    <video className="w-24 h-24" controls key={Math.random()}>
                      <source src={`${src}`} />
                      Your browser does not support the video tag.
                    </video>
                  )
                )}
              </div>
            </div>
          ) : null}
          {post && post.media && post.media.length ? (
            <div>
              <Suspense fallback="Loading...">
                <DynamicCarousel
                  media={post.media}
                  open={showCarousel}
                  setOpen={setShowCarousel}
                />
              </Suspense>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // $id-$city-$category-$type/عقارات
  try {
    const response = await ApiClient({
      method: 'GET',
      url: `/post/${params?.id}`
    })

    await ApiClient({
      method: 'POST',
      url: `/post/increment-post-view`,
      data: { postId: params?.id }
    })

    return {
      props: {
        post: response?.data?.success
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
