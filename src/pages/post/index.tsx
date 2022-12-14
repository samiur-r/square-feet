import type { NextPage } from 'next'
import { Suspense, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import isImage from 'utils/isImage'
import Title from 'components/Title'

const DynamicCarousel = dynamic(() => import('components/Carousel'), {
  suspense: true
})

const post = {
  id: 0,
  phone: '12345678',
  title: 'بيت للبيع في سعد العبد الله',
  views: 5,
  createdAt: '1 دقيقة',
  price: '1,150,000',
  description: 'سعد العبد الله للبيع بيت شارع واحد وارتداد مراجعه ٣١٠',
  isSticky: true,
  mobile: '1234',
  thumbnail: '/images/posts/post.jpeg',
  media: [
    'slide-placeholder.svg',
    'slide-placeholder.svg',
    'slide-placeholder.svg',
    'slide-placeholder.svg',
    'slide-placeholder.svg',
    'slide-placeholder.svg'
  ]
}

const Posts: NextPage = () => {
  const [showCarousel, setShowCarousel] = useState(false)
  return (
    <div className="dir-rtl grid gap-8 pb-10">
      <div className="bg-primary-light flex flex-col gap-2 md:gap-7 justify-center items-center text-white px-10 py-8 md:py-10 rounded-b-lg md:rounded-none">
        <Title value={post.title} light />
        <div className="font-bold text-lg md:text-2xl">{post.price} دك</div>
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
            <div className="md:text-base text-sm">{post.views}</div>
            <Image
              src="/images/eye-white.svg"
              width={19}
              height={14}
              alt="icon"
            />
          </div>
          <div className="flex flex-nowrap gap-2 items-center bg-primary-dark px-2 py-1 rounded-lg">
            <div className="dir-rtl md:text-base text-sm">{post.createdAt}</div>
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
        <div className="text-sm md:text-lg">{post.description}</div>
        <div className="flex gap-5 justify-center mt-5">
          <a
            href="tel:+96599491575"
            className="bg-custom-green font-bold hover:opacity-90 transition-opacity duration-300 w-36 flex items-center justify-center gap-2 text-center text-white py-3 md:py-5 rounded-md"
          >
            {post.phone}
            <Image
              src="/images/call-white.svg"
              height={24}
              width={24}
              className="text-white font-bold"
              alt="phone_icon"
            />
          </a>
          <div className="shadow-md rounded-md py-3 md:py-5 px-5 flex items-center justify-center">
            <Image
              src="/images/whatsapp-logo-green.svg"
              width={24}
              height={24}
              alt="whatsapp"
            />
          </div>
        </div>
        <div className="mt-10 relative flex flex-col items-center">
          <div className="relative">
            {isImage(post.media[0]) ? (
              <Image
                key={Math.random()}
                src={`/images/${post.media[0]}`}
                alt="post_image"
                width={500}
                height={500}
                objectFit="contain"
                className="cursor-pointer"
                onClick={() => setShowCarousel(true)}
              />
            ) : (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video
                className="max-w-lg"
                controls
                onClick={() => setShowCarousel(true)}
              >
                <source src={`/images/posts/${post.media[0]}`} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-5">
            {post.media.map((src) =>
              isImage(src) ? (
                <Image
                  key={Math.random()}
                  src={`/images/${src}`}
                  width={100}
                  height={100}
                  objectFit="contain"
                  alt="post_image"
                  className="cursor-pointer"
                  onClick={() => setShowCarousel(true)}
                />
              ) : (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video className="w-24 h-24" controls>
                  <source src={`/images/posts/${src}`} />
                  Your browser does not support the video tag.
                </video>
              )
            )}
          </div>
        </div>
        <div>
          <Suspense fallback="Loading...">
            <DynamicCarousel
              media={post.media}
              open={showCarousel}
              setOpen={setShowCarousel}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Posts
