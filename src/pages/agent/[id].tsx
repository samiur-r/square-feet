import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import PostCard from 'components/Posts/PostCard'
import Title from 'components/Title'
import ApiClient from 'utils/ApiClient'
import { IAgent, IPost } from 'interfaces'

interface AgentProps {
  agent: IAgent
  posts: IPost[]
}

const Agency: NextPage<AgentProps> = ({ agent, posts }) => {
  return (
    <div className="dir-rtl pb-8">
      <div className="bg-primary-light flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center text-white px-5 py-8 rounded-b-lg md:rounded-none">
        <div className="w-40 h-32 md:w-46 md:h-32 rounded-lg overflow-hidden relative border">
          <Image
            src={
              agent?.logo_url
                ? `/images/agents/${agent.logo_url}`
                : '/images/nopic-ar.jpg'
            }
            layout="fill"
            objectFit="cover"
            alt="logo"
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
              href={`tel:+${agent?.phone}`}
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
            <div className="shadow-md bg-white rounded-md p-3 flex items-center justify-center">
              <Image
                src="/images/whatsapp-logo-green.svg"
                width={24}
                height={24}
                alt="whatsapp"
              />
            </div>
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
        {posts &&
          posts?.length >= 1 &&
          posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
      <p className="text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8">
        انتهت نتائج البحث ولا يوجد المزيد من النتائج
      </p>
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
      props: { agent: response?.data?.agent, posts: response?.data?.posts }
    }
  } catch (error) {
    /* empty */
  }

  return {
    props: {}
  }
}

export default Agency
