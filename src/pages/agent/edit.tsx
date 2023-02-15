import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Popover } from '@headlessui/react'

import Title from 'components/Title'
import Description from 'components/Description'
import { useStore } from 'store'
import MediaUploader from 'components/MediaUploader'

const CreatePost: NextPage = () => {
  const { user } = useStore()
  const [userName, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [facebook, setFacebook] = useState('')
  const [email, setEmail] = useState('')

  const [mediaList, setMediaList] = useState<Array<File>>([])

  const createOrEditPost = async () => {
    console.log('here')
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
                type="number"
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
            name="username"
            id="username"
            className="block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor="username"
            className="whitespace-nowrap absolute cursor-text text-md text-custom-gray duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 -right-1 peer-focus:-right-1 peer-placeholder-shown:right-0"
          >
            اسم المكتب (إجباري)
          </label>
        </div>
        <div className="relative mt-8 md:mt-10">
          <textarea
            name="description"
            rows={7}
            className="block p-4 w-full text-base text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            onChange={(e) => setDescription(e.target.value)}
          />
          <label
            htmlFor="description"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray duration-300 z-10 bg-white px-1 -top-3 scale-75 -right-2 peer-focus:-top-3 peer-focus:scale-75 peer-focus:-right-2 peer-placeholder-shown:top-5 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100"
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
            onChange={(e) => setInstagram(e.target.value)}
          />
          <label
            htmlFor="instagram"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray duration-300 z-10 bg-white px-1 -top-3 scale-75 right-1 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-1 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100"
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
            onChange={(e) => setTwitter(e.target.value)}
          />
          <label
            htmlFor="twitter"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray duration-300 z-10 bg-white px-1 -top-3 scale-75 right-2 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-2 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100"
          >
            تويتر
          </label>
        </div>
        <div className="relative mt-8 md:mt-10">
          <input
            type="text"
            name="facebook"
            id="facebook"
            className="block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            onChange={(e) => setFacebook(e.target.value)}
          />
          <label
            htmlFor="facebook"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray duration-300 z-10 bg-white px-1 -top-3 scale-75 right-1 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-1 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100"
          >
            فيسبوك
          </label>
        </div>
        <div className="relative mt-8 md:mt-10">
          <input
            type="email"
            name="email"
            id="email"
            className="block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="email"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray duration-300 z-10 bg-white px-1 -top-3 scale-75 right-1.5 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-1.5 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100"
          >
            الايميل
          </label>
        </div>
        <div className="w-full mt-8 md:mt-10">
          <MediaUploader handleMediaUpload={setMediaList} maxMediaNum={1} />
        </div>
        <div className="flex items-center gap-3 mt-8 md:mt-10">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-custom-gray rounded border-custom-gray-border focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="checked-checkbox" className="font-medium">
            <a className="hover:underline flex gap-3 cursor-pointer">
              <p className="text-primary text-xs md:text-sm">
                إجعل إعلاني مميزًا مقابل 12 دك
              </p>
              <p className="text-secondary text-xs md:text-sm whitespace-nowrap">
                (لمعرفة المزيد)
              </p>
            </a>
          </label>
        </div>
        <div className="mt-3 md:mt-5">
          <button
            type="submit"
            className="bg-secondary text-white rounded-lg w-full mt-8 py-3 md:py-4 hover:opacity-90 transition-opacity duration-300"
            // onClick={(e) => handleSubmit(e)}
          >
            إضافة الإعلان{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
