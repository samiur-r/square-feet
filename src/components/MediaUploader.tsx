import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react'
import { useStore } from 'store'

interface MediaUploaderType {
  maxMediaNum?: number
  mediaList: Array<string>
  handleSetMediaList: Dispatch<SetStateAction<Array<string>>>
  mode?: string
  hasMedia?: number | undefined
}

const MediaUploader: React.FC<MediaUploaderType> = ({
  maxMediaNum = 10,
  mediaList,
  handleSetMediaList,
  mode,
  hasMedia
}) => {
  const [mediaCount, setMediaCount] = useState(0)
  const [showLoading, setShowLoading] = useState(false)

  const { updateToast } = useStore()

  const getMediaType = (base64Str: string) => {
    let type = 'image'
    // eslint-disable-next-line prefer-destructuring
    if (base64Str) type = base64Str.split('/')[0].split(':')[1]
    return type
  }

  const handleUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target

      if (!files || files.length === 0) {
        return
      }

      if (files.length > 10)
        updateToast(true, 'You can not upload more than 10 files', true)

      const mediaFiles = Array.from(files)
        .filter(
          (file) =>
            file.type.split('/')[0] === 'image' ||
            file.type.split('/')[0] === 'video'
        )
        .slice(0, 10 - files.length)

      if (mediaFiles.length === 0) {
        updateToast(true, 'You can only upload image or video files', true)
        return
      }

      try {
        const mediaItems = await Promise.all(
          mediaFiles.map((file) => {
            return new Promise<string>((resolve, reject) => {
              const reader = new FileReader()

              reader.onloadend = () => {
                if (reader.result && typeof reader.result === 'string') {
                  resolve(reader.result)
                } else {
                  reject(new Error('Unable to read file.'))
                }
              }

              reader.onerror = () => {
                reject(new Error('Unable to read file.'))
              }

              reader.readAsDataURL(file)
            })
          })
        )

        mediaItems.forEach((media) => {
          if (getMediaType(media) === 'video') {
            const video = document.createElement('video')
            video.src = media
            const container = document.getElementById('preview-video-container')
            container?.appendChild(video)
          }
        })

        handleSetMediaList((prev) => [...prev, ...mediaItems])
        setMediaCount((prev) => prev + mediaItems.length)
      } catch (error) {
        updateToast(
          true,
          'An error occurred while uploading the file(s). Please try again later.',
          true
        )
      }
    },
    [handleSetMediaList, mediaList]
  )

  const removeMedia = useCallback(
    (index: number) => {
      setMediaCount((prev) => prev - 1)

      const tempMediaList = [...mediaList]
      tempMediaList.splice(index, 1)
      handleSetMediaList(tempMediaList)
    },
    [handleSetMediaList, mediaList]
  )

  useEffect(() => {
    if (hasMedia && hasMedia > 0 && mode === 'edit') setShowLoading(true)
  }, [hasMedia])

  const removeMediaIcon = (index: number): any => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svg.setAttribute('fill', 'none')
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.setAttribute('stroke-width', '1.5')
    svg.setAttribute('stroke', 'currentColor')
    svg.setAttribute(
      'class',
      'w-5 h-5 absolute -top-2 -right-2 text-primary font-bold bg-white rounded-full'
    )

    svg.onclick = () => {
      removeMedia(index)
    }

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('stroke-linecap', 'round')
    path.setAttribute('stroke-linejoin', 'round')
    path.setAttribute(
      'd',
      'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    )

    svg.appendChild(path)
    return svg
  }

  const renderPreview = () => {
    const previewContainer = document.getElementById('preview-container')
    if (previewContainer) previewContainer.innerHTML = ''
    mediaList.forEach((media, index) => {
      const xIcon = removeMediaIcon(index)
      if (getMediaType(media) === 'image') {
        const container = document.createElement('div')
        container.style.position = 'relative'
        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', media)
        imageEl.alt = 'uploaded-img'
        imageEl.style.width = '80px'
        imageEl.style.height = '80px'
        imageEl.style.objectFit = 'cover'
        imageEl.style.overflow = 'hidden'
        imageEl.style.border = '1px solid #DCDCDC'
        container?.appendChild(imageEl)
        container?.appendChild(xIcon)
        previewContainer?.appendChild(container)
      } else {
        const container = document.createElement('div')
        container.style.position = 'relative'
        const videoEl = document.createElement('video')
        videoEl.setAttribute('src', media)
        videoEl.style.width = '80px'
        videoEl.style.height = '80px'
        videoEl.style.objectFit = 'cover'
        videoEl.style.overflow = 'hidden'
        videoEl.style.border = '1px solid #DCDCDC'
        videoEl.controls = true
        videoEl.playsInline = true
        videoEl.load()
        container?.appendChild(videoEl)
        container?.appendChild(xIcon)
        previewContainer?.appendChild(container)
      }
    })
  }

  useEffect(() => {
    if (mediaList.length && showLoading) setShowLoading(false)
    if (mediaList) renderPreview()
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
              accept="image/*, video/*"
              multiple
              className="hidden"
              onChange={handleUpload}
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

        <div
          id="preview-container"
          className="flex flex-wrap gap-3 justify-center mt-5 relative"
        />
        {/* <XCircleIcon
          className="w-5 h-5 absolute -top-2 -right-2 text-primary font-bold bg-white rounded-full"
          onClick={() => removeMedia(1)}
        /> */}
      </div>
    </div>
  )
}

const MemoizedMediaUploader = React.memo(MediaUploader)

export default MemoizedMediaUploader
