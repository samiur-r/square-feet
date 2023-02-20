import { XCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface MediaUploaderType {
  maxMediaNum?: number
  handleMediaUpload: Dispatch<SetStateAction<Array<File>>>
}

const MediaUploader: React.FC<MediaUploaderType> = ({
  maxMediaNum = 20,
  handleMediaUpload
}) => {
  const [mediaList, setMediaList] = useState<Array<File>>([])
  const [mediaPreviewList, setMediaPreviewList] = useState<
    Array<{ src: string; type: string }>
  >([])
  const [mediaCount, setMediaCount] = useState(0)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    if (!files || files.length === 0) {
      return
    }
    const file = files[0]
    const reader = new FileReader()

    const mediaType = file?.type.split('/')[0]

    reader.onloadend = () => {
      setMediaPreviewList((prev: Array<{ src: string; type: string }>) => [
        ...prev,
        { src: reader.result as string, type: mediaType }
      ])
    }

    reader.readAsDataURL(file)
    setMediaList((prev: Array<File>) => [...prev, files[0]])
    setMediaCount((prev) => prev + 1)
  }

  const removeMediaPreview = (index: number) => {
    setMediaCount((prev) => prev - 1)

    const tempPreviewList = [...mediaPreviewList]
    const tempMediaList = [...mediaList]

    tempPreviewList.splice(index, 1)
    tempMediaList.splice(index, 1)

    setMediaPreviewList(tempPreviewList)
    setMediaList(tempMediaList)
  }

  useEffect(() => {
    handleMediaUpload(mediaList)
  }, [mediaList])

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-52 rounded-lg border border-custom-gray-border">
      <div className="flex flex-col justify-center items-center pt-5 pb-6">
        <label
          htmlFor="dropzone-file"
          className="cursor-pointer flex justify-center flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-14 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          {mediaCount < maxMediaNum && (
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleUpload}
            />
          )}

          <p className="mb-2 mt-2 text-base text-primary flex flex-col items-center">
            إضافة الصور
            <span className="block text-custom-gray">(اختياري)</span>
          </p>
        </label>
        {mediaPreviewList.length !== 0 && (
          <div className="flex flex-wrap gap-3 mx-5 mt-5">
            {mediaPreviewList.map((preview, index) => (
              <div className="relative border" key={Math.random()}>
                {preview.type === 'image' ? (
                  <Image
                    src={preview.src}
                    width="80"
                    height="80"
                    objectFit="contain"
                  />
                ) : (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video className="w-20 h-20" src={preview.src} />
                )}
                <XCircleIcon
                  className="w-5 h-5 absolute -top-2 -right-2 text-primary font-bold bg-white rounded-full"
                  onClick={() => removeMediaPreview(index)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MediaUploader
