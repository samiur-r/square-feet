import React, { useState } from 'react'
import Image from 'next/image'

const MediaUploader = (): JSX.Element => {
  const [mediaFiles, setMediaFiles] = useState<File[]>([])

  const handleFileSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { files } = event.target
    const media: File[] = []

    if (!files?.length) return

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        media.push(file)
      }
    }

    if (media.length > 0) {
      setMediaFiles((prevFiles) => [...prevFiles, ...media].slice(0, 10))
    }
  }

  const handleRemove = (index: number): void => {
    setMediaFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  const renderMedia = (): JSX.Element[] => {
    return mediaFiles.map((file, index) => (
      <div key={Math.random()} className="media-item">
        <button type="button" onClick={() => handleRemove(index)}>
          Remove
        </button>
        {file.type.startsWith('image/') && (
          <Image
            src={URL.createObjectURL(file)}
            alt={file.name}
            width={500}
            height={500}
          />
        )}
        {file.type.startsWith('video/') && (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video src={URL.createObjectURL(file)} controls />
        )}
      </div>
    ))
  }

  return (
    <div className="media-uploader">
      <label htmlFor="media-select">Select media (max 10):</label>
      <input
        type="file"
        id="media-select"
        accept="image/*,video/*"
        multiple
        onChange={handleFileSelect}
      />
      <div className="media-preview">{renderMedia()}</div>
    </div>
  )
}

export default MediaUploader
