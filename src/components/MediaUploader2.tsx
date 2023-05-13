import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

interface MediaUploaderProps {
  handleMediaList: Dispatch<SetStateAction<Media[]>>
}

interface Media {
  url: string
  type: 'image' | 'video'
}

const MediaUploader: React.FC<MediaUploaderProps> = ({ handleMediaList }) => {
  const [media, setMedia] = useState<Media[]>([])

  useEffect(() => {
    function cleanup() {
      console.log('called')
      // Revoke the URLs of all media items when the component is unmounted
      media.forEach((mediaItem) => {
        URL.revokeObjectURL(mediaItem.url)
      })
    }

    return cleanup
  }, [media])

  function handleMediaUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const mediaFiles: Media[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      if (file.type.startsWith('image/')) {
        mediaFiles.push({ url: URL.createObjectURL(file), type: 'image' })
      } else if (file.type.startsWith('video/')) {
        mediaFiles.push({ url: URL.createObjectURL(file), type: 'video' })
      }
    }

    setMedia([...media, ...mediaFiles])
    // handleMediaList([...media, ...mediaFiles])
  }

  function handleMediaRemove(index: number) {
    // Revoke the URL of the media item before removing it from the state
    URL.revokeObjectURL(media[index].url)
    const newMedia = [...media]
    newMedia.splice(index, 1)
    setMedia(newMedia)
    // handleMediaList(newMedia)
  }

  return (
    <>
      <label className="block font-medium text-gray-700 mb-2">
        Upload Media
        <input
          className="mt-2 border-gray-300 rounded-md"
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleMediaUpload}
        />
      </label>

      <div className="flex flex-wrap">
        {media.map((mediaItem, index) => (
          <div
            key={Math.random()}
            className="relative m-2 rounded-md bg-gray-200 shadow-md"
          >
            <button
              type="button"
              className="absolute right-0 top-0 bg-red-500 text-white font-bold px-2 rounded-md"
              onClick={() => handleMediaRemove(index)}
            >
              X
            </button>
            {mediaItem.type === 'image' ? (
              <Image
                src={mediaItem.url}
                alt="uploaded media"
                width="200"
                height="200"
                objectFit="cover"
                className="rounded-t-md"
              />
            ) : (
              <video src={mediaItem.url} controls width="200">
                <source src={mediaItem.url} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default MediaUploader
