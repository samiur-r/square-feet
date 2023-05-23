import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Breadcrumbs from 'components/Breadcrumbs'
import PostCard from 'components/Posts/PostCard'
import Title from 'components/Title'
import ApiClient from 'utils/ApiClient'
import { IAgent, IPost } from 'interfaces'
import { useEffect, useRef, useState } from 'react'
import { useOnScreen } from 'hooks/useOnScreen'
import { toBase64, placeholderImg } from 'utils/strToBase64'
import { useRouter } from 'next/router'
import { useStore } from 'store'
// import config from 'config'

interface AgentProps {
  agent: IAgent
  postList: IPost[]
  totalPosts: number
}

const Agency: NextPage<AgentProps> = ({ agent, postList, totalPosts }) => {
  const [posts, setPosts] = useState(postList)
  const [postCount, setPostCount] = useState(postList?.length || 0)
  const [offset, setOffset] = useState(10)
  const [limit] = useState(10)
  const [isCallingApi, setIsCallingAPi] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [whatsappMsg, setWhatsappMsg] = useState('')

  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useOnScreen(ref)

  const router = useRouter()

  const { scrollYTo, updateScrollYTo } = useStore()

  useEffect(() => {
    const handleRouteChange = () => {
      // Save the current scroll position to local storage
      localStorage.setItem('scrollPosition', JSON.stringify(window.scrollY))
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // Cleanup the event listener
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      updateScrollYTo(false)
    }
  }, [])

  useEffect(() => {
    const scrollPosition = JSON.parse(
      localStorage.getItem('scrollPosition') || 'null'
    )

    if (typeof scrollPosition === 'number' && scrollYTo) {
      window.scrollTo(0, scrollPosition)
    }
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await ApiClient({
        method: 'GET',
        url: `/post/get-many?limit=${limit}&offset=${offset}&userId=${agent?.user_id}`
      })

      setIsCallingAPi(false)
      setPosts([...posts, ...response.data.posts])
      setOffset((curr) => curr + 10)
    } catch (error) {
      /* empty */
    }
  }

  useEffect(() => {
    if (isIntersecting && totalPosts && postCount < totalPosts) {
      setIsCallingAPi(true)
      fetchPosts()
    }
  }, [isIntersecting])

  useEffect(() => {
    setPostCount(posts?.length)
  }, [posts])

  const breadcrumbsItems = [
    {
      title: 'الكويت',
      href: '/'
    },
    {
      title: 'المكاتب',
      href: '/المكاتب'
    },
    {
      title: agent?.name || '',
      href: `/agent/${agent?.id}`
    }
  ]

  // useEffect(() => {
  //   if (agent)
  //     setWhatsappMsg(
  //       `${config.domain}/agent${agent.id} السلام عليكم اذا ممكن ترسل تفاصيل هذا الإعلان في بو شملان وشكرا`
  //     )
  // }, [agent])

  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems} />
      <div className="dir-rtl pb-8">
        <div className="bg-primary-light flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center text-white px-5 py-8 rounded-b-lg md:rounded-none">
          <div className="w-40 h-32 md:w-46 md:h-32 rounded-lg overflow-hidden relative border">
            <Image
              layout="fill"
              objectFit="cover"
              alt="logo"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                placeholderImg()
              )}`}
              src={
                agent?.logo_url ? `${agent.logo_url}` : '/images/nopic-ar.jpg'
              }
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 md:mb-5">
              <Title value={agent?.name} />
            </div>
            {agent && agent.description && (
              <p className="text-xs md:text-base">{agent?.description}</p>
            )}
            {agent && agent.instagram && (
              <p className="mt-2">instagram: @{agent.instagram}</p>
            )}
            <div className="flex gap-3 justify-center mt-5">
              <a
                href={`tel:+965${agent?.phone}`}
                className="bg-custom-green hover:opacity-90 transition-opacity duration-300 w-32 flex items-center justify-center gap-1 text-center text-white py-3 rounded-md"
              >
                {agent?.phone}{' '}
                <Image
                  src="/images/call-white.svg"
                  height={24}
                  width={24}
                  className="text-white font-DroidArabicKufiBold"
                  alt="phone_icon"
                />
              </a>
              <a
                href={`https://wa.me/+965${agent?.phone}?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="shadow-md bg-white rounded-md p-3 flex items-center justify-center">
                  <Image
                    src="/images/whatsapp-logo-green.svg"
                    width={24}
                    height={24}
                    alt="whatsapp"
                  />
                </div>
              </a>
            </div>
            {agent && agent.instagram && (
              <div className="flex gap-3 justify-center mt-4">
                <Link href={`https://instagram.com/${agent?.instagram}`}>
                  <a className="p-2 rounded-full bg-primary-dark flex items-center ">
                    <Image
                      src="/images/instagram-white.svg"
                      width={18}
                      height={18}
                      alt="instagram_icon"
                    />
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="container max-w-3xl mt-8">
          <Title value="اعلانات المكتب" />
          {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
        <div ref={ref} />
        {isCallingApi && (
          <div className="flex justify-center mt-10">
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-10 h-10 text-primary animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}
        {((totalPosts && postCount >= totalPosts) || postCount === 0) && (
          <p className="text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8">
            انتهت نتائج البحث ولا يوجد المزيد من الاعلانات
          </p>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const response = await ApiClient({
      method: 'GET',
      url: `/agent/${params?.id}`
    })

    return {
      props: {
        agent: response?.data?.agent,
        postList: response?.data?.posts,
        totalPosts: response?.data?.totalPosts ? response?.data?.totalPosts : 0
      }
    }
  } catch (error) {
    /* empty */
  }

  return {
    props: {}
  }
}

export default Agency
