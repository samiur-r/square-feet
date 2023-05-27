import type { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Popover } from '@headlessui/react'

import Title from 'components/Title'
import Description from 'components/Description'
import { useStore } from 'store'
import MediaUploader from 'components/MediaUploader'
import ApiClient from 'utils/ApiClient'
import { agentSchema } from 'validations/AgentValidation'
import Router from 'next/router'
import createFileObjFromUrlStr from 'utils/createFileObjFromUrlStr'

export interface IAgent {
  id: number
  name: string
  description: string
  email: string
  instagram: string
  twitter: string
  logo_url: string
  expiry_date: Date
  created_at: Date
  updated_at: Date
  phone?: string
  socialLinks?: Array<{ image: string; href: string }>
}

interface EditAgentProps {
  agent?: any
}

const EditAgent: NextPage<EditAgentProps> = ({ agent }) => {
  const { user, updateToast } = useStore()
  const [name, setName] = useState(agent?.name)
  const [description, setDescription] = useState(agent?.description ?? '')
  const [instagram, setInstagram] = useState(agent?.instagram)
  const [twitter, setTwitter] = useState(agent?.twitter)
  const [email, setEmail] = useState(agent?.email)
  const [isCallingApi, setIsCallingApi] = useState(false)
  const [nameError, setNameError] = useState('')

  const [mediaList, setMediaList] = useState<File[]>([])

  const handleMediaListForEdit = async (media: string[]) => {
    const multimediaList = await Promise.all(
      media.map((f) => {
        return createFileObjFromUrlStr(f)
      })
    )
    setMediaList(() => [...multimediaList])
  }

  useEffect(() => {
    if (agent?.logo_url) handleMediaListForEdit([agent.logo_url])
  }, [agent?.logo_url])

  const handleEditAgent = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setNameError('')

    const agentInfo = {
      name,
      description,
      instagram,
      twitter,
      email,
      logo_url: mediaList
    }

    try {
      await agentSchema.validate(agentInfo)
      setIsCallingApi(true)

      const response = await ApiClient({
        method: 'POST',
        url: '/agent',
        data: { agentInfo },
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      setIsCallingApi(false)
      updateToast(true, `Success: ${response?.data.success}`, false)
      if (agent) Router.push(`/المكاتب/${agent.user.phone}`)
    } catch (error: any) {
      setIsCallingApi(false)
      if (error.message === 'Name is a required field')
        setNameError(error.message)
      updateToast(
        true,
        `Error: ${error?.response?.data ?? 'Something went wrong'}`,
        true
      )
    }
  }

  return (
    <div className="dir-rtl container max-w-6xl py-10 flex flex-col gap-3 items-center">
      <div className="md:text-center w-full">
        <Title value="بیانات المكتب (اختیاري)" />
      </div>
      <div className="w-full md:text-center">
        <Description value="یمكنك كتابة البیانات أو تركها خالیة كما یناسبك" />
      </div>
      <form className="w-full max-w-md px-3 md:px-0 mt-8 md:mt-10">
        <div className="relative">
          <Popover className="relative">
            <Popover.Panel className="absolute z-10 -top-14 right-2 text-secondary bg-custom-white-light shadow-md p-2 rounded-md">
              Hey! You can not edit this field
            </Popover.Panel>
            <Popover.Button className="w-full">
              <input
                type="text"
                name="phone"
                id="phone"
                className="block bg-custom-gray-3 px-4 py-2.5 md:py-4 w-full text-custom-gray rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=""
                value={user?.phone}
                readOnly
              />
            </Popover.Button>
            <label
              htmlFor="phone"
              className="absolute cursor-text text-md text-custom-gray duration-300 top-2 transform -translate-y-5 scale-75 z-10 bg-white px-1 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0"
            >
              رقم الموبايل{' '}
            </label>
          </Popover>
        </div>
        <div className="relative mt-8 md:mt-10">
          <input
            type="text"
            name="name"
            id="name"
            className={`${
              nameError
                ? 'border-custom-red focus:border-custom-red'
                : 'border-custom-gray-border focus:border-primary'
            } block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0 peer`}
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="name"
            className={`${
              nameError
                ? 'text-custom-red peer-focus:text-custom-red'
                : 'text-custom-gray peer-focus:text-primary'
            } whitespace-nowrap absolute cursor-text text-md duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 -right-1 peer-focus:-right-1 peer-placeholder-shown:right-0`}
          >
            اسم المكتب (إجباري)
          </label>
        </div>
        {nameError && (
          <p key={Math.random()} className="text-custom-red text-sm mt-3">
            {nameError}
          </p>
        )}
        <div className="relative mt-8 md:mt-10">
          <textarea
            name="description"
            rows={7}
            className="block p-4 w-full text-base text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label
            htmlFor="description"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray peer-focus:text-primary duration-300 z-10 bg-white px-1 -top-3 scale-75 -right-2 peer-focus:-top-3 peer-focus:scale-75 peer-focus:-right-2 peer-placeholder-shown:top-5 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100"
          >
            نبذة عن المكتب (اختياري)
          </label>
        </div>
        <div className="relative mt-8 md:mt-10">
          <input
            type="text"
            name="instagram"
            id="instagram"
            className="block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <label
            htmlFor="instagram"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray peer-focus:text-primary duration-300 z-10 bg-white px-1 -top-3 scale-75 right-1 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-1 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100"
          >
            انستقرام
          </label>
        </div>
        <div className="relative mt-8 md:mt-10">
          <input
            type="text"
            name="twitter"
            id="twitter"
            className="block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
          <label
            htmlFor="twitter"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray peer-focus:text-primary duration-300 z-10 bg-white px-1 -top-3 scale-75 right-2 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-2 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100"
          >
            تويتر
          </label>
        </div>
        <div className="relative mt-8 md:mt-10">
          <input
            type="email"
            name="email"
            id="email"
            className="block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="email"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray peer-focus:text-primary duration-300 z-10 bg-white px-1 -top-3 scale-75 right-1.5 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-1.5 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100"
          >
            الايميل
          </label>
        </div>
        <div className="w-full mt-8 md:mt-10">
          <MediaUploader
            mediaList={mediaList}
            handleSetMediaList={setMediaList}
            maxMediaNum={1}
            isEditable
            hasMedia={agent?.logo_url ? 1 : 0}
          />
        </div>
        <div className="mt-3 md:mt-5">
          <button
            type="submit"
            className="bg-secondary text-white rounded-lg w-full mt-8 py-3 md:py-4 hover:opacity-90 transition-opacity duration-300"
            onClick={(e) => handleEditAgent(e)}
          >
            إضافة الإعلان{' '}
            {isCallingApi && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-5 h-5 mr-3 text-white animate-spin"
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
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const response = await ApiClient({
      method: 'GET',
      url: '/agent',
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie
      }
    })
    return {
      props: { agent: response.data?.agent }
    }
  } catch (error) {
    /* empty */
  }

  return {
    props: {}
  }
}

export default EditAgent
