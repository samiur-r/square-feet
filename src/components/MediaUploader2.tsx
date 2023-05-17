import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback
} from 'react'
import Image from 'next/image'
import { XCircleIcon } from '@heroicons/react/24/solid'

import { useStore } from 'store'

interface MediaUploaderProps {
  handleSetMediaList: Dispatch<SetStateAction<File[]>>
  mediaList: File[]
  maxMediaNum: number
  isEditable: boolean
  hasMedia?: number | undefined
}

interface Media {
  url: string
  type: 'image' | 'video'
}

const MediaUploader: React.FC<MediaUploaderProps> = ({
  mediaList,
  handleSetMediaList,
  maxMediaNum,
  isEditable,
  hasMedia
}) => {
  const [showLoading, setShowLoading] = useState(false)
  const [mediaCount, setMediaCount] = useState(0)
  const [media, setMedia] = useState<Media[]>([])

  const { updateToast } = useStore()

  useEffect(() => {
    return () => {
      media.forEach((mediaItem) => {
        URL.revokeObjectURL(mediaItem.url)
      })
    }
  }, [])

  const handleMediaUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target

      if (!files) {
        return
      }

      if (
        files.length > maxMediaNum ||
        media.length + files.length > maxMediaNum
      )
        updateToast(true, 'You can not upload more than 10 files', true)

      const filteredFiles: any = []
      const validFileTypes = new Set(['image', 'video'])

      // Array.from(files).forEach(async (file: any) => {
      //   const isFileSizeValid = file.size <= 104857600
      //   const isFileTypeValid =
      //     file.type.split('/')[0] === 'image' ||
      //     file.type.split('/')[0] === 'video'

      //   if (!isFileSizeValid) {
      //     updateToast(true, 'Max file size limit is 100mb', true)
      //   }
      //   if (!isFileTypeValid) {
      //     updateToast(true, 'You can only upload images or videos', true)
      //   }
      //   if (isFileSizeValid && isFileTypeValid) {
      //     if (file.type.split('/')[1] === 'heif') {
      //       // eslint-disable-next-line no-param-reassign
      //       file = await convertHEICtoJPG(file)
      //     }
      //     if (file) filteredFiles.push(file)
      //   }
      // })

      const fileArray = Array.from(files)

      // eslint-disable-next-line no-restricted-syntax
      for (const file of fileArray) {
        const isFileSizeValid = file.size <= 104857600
        const fileType = file.type.split('/')[0]

        if (!isFileSizeValid) {
          updateToast(true, 'Max file size limit is 100mb', true)
          break
        }

        if (!validFileTypes.has(fileType)) {
          updateToast(true, 'You can only upload images or videos', true)
          break
        }

        filteredFiles.push(file)
      }

      filteredFiles.slice(0, maxMediaNum - media.length)

      const mediaFiles: Media[] = []

      // eslint-disable-next-line no-restricted-syntax
      for (const file of filteredFiles) {
        mediaFiles.push({
          url: URL.createObjectURL(file),
          type: file.type.split('/')[0] as 'image' | 'video'
        })
      }

      setMedia([...media, ...mediaFiles])
      // handleSetMediaList([...mediaList, ...filteredFiles])
      setMediaCount((prev) => prev + mediaFiles.length)
    },
    [media, setMedia]
  )

  const removeMedia = useCallback(
    (index: number) => {
      URL.revokeObjectURL(media[index].url)
      const newMedia = [...media]
      const newMediaList = [...mediaList]
      newMedia.splice(index, 1)
      newMediaList.splice(index, 1)
      setMedia(newMedia)
      handleSetMediaList(newMediaList)
      setMediaCount((prev) => prev - 1)
    },
    [setMedia, media]
  )

  useEffect(() => {
    if (isEditable && mediaList && mediaList.length) {
      const mediaFiles: Media[] = []

      // eslint-disable-next-line no-restricted-syntax
      for (const file of mediaList) {
        mediaFiles.push({
          url: URL.createObjectURL(file),
          type: file.type.split('/')[0] as 'image' | 'video'
        })
      }

      setMedia(mediaFiles)
      setMediaCount(mediaFiles.length)
    }
  }, [isEditable, mediaList])

  useEffect(() => {
    if (mediaList.length && showLoading) setShowLoading(false)
  }, [mediaList])

  useEffect(() => {
    if (hasMedia && hasMedia > 0 && isEditable) setShowLoading(true)
  }, [hasMedia])

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
              accept="image/jpeg, image/png, video/*"
              multiple
              className="hidden"
              onChange={handleMediaUpload}
            />
          )}

          <p className="mb-2 mt-2 text-base text-primary flex flex-col items-center">
            إضافة الصور
            <span className="block text-custom-gray">(اختياري)</span>
          </p>
        </label>
        {showLoading && (
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-5 h-5 mt-3 text-primary animate-spin"
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
        <div className="flex flex-wrap gap-3 justify-center mt-5">
          {media.map((mediaItem, index) => (
            <div className="relative" key={mediaItem.url}>
              {mediaItem.type === 'image' ? (
                <Image
                  src={mediaItem.url}
                  alt="uploaded media"
                  width="80"
                  height="80"
                  objectFit="contain"
                  onLoad={() => URL.revokeObjectURL(mediaItem.url)}
                />
              ) : (
                <video
                  src={mediaItem.url}
                  controls
                  className="w-20 h-20 object-contain"
                >
                  <source src={mediaItem.url} type="video/mp4" />
                </video>
              )}
              <XCircleIcon
                className="w-5 h-5 absolute -top-2 -right-2 text-primary font-bold bg-white rounded-full cursor-pointer"
                onClick={() => removeMedia(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const MemoizedMediaUploader = React.memo(MediaUploader)

export default MemoizedMediaUploader
