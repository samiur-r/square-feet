import React, { useState } from 'react'
import Image from 'next/image'

interface MediaFile {
  id: string
  file: File
  previewUrl: string
  isVideo: boolean
}

interface MediaUploaderProps {
  maxFiles: number
}

const MediaUploader: React.FC<MediaUploaderProps> = ({ maxFiles }) => {
  const [files, setFiles] = useState<MediaFile[]>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || [])
    const newFiles: MediaFile[] = selectedFiles
      .slice(0, maxFiles - files.length)
      .map((file) => ({
        id: Math.random().toString(),
        file,
        previewUrl: URL.createObjectURL(file),
        isVideo: file.type.startsWith('video')
      }))

    setFiles([...files, ...newFiles])
  }

  const handleRemoveFile = (fileId: string) => {
    const updatedFiles = files.filter((file) => file.id !== fileId)
    setFiles(updatedFiles)
  }

  return (
    <div>
      <label>
        Select media files:
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          accept="image/*, video/*"
        />
      </label>

      <div>
        {files.map((file) => (
          <div key={file.id}>
            {file.isVideo ? (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video src={file.previewUrl} controls>
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={file.previewUrl}
                alt={file.file.name}
                width={500}
                height={500}
              />
            )}

            <button
              type="button"
              onClick={() => handleRemoveFile(file.id)}
              aria-label="Remove"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MediaUploader
