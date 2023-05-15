/* eslint-disable no-new */
import Compressor from 'compressorjs'

const optimizeImages = (file: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      maxWidth: 620,
      maxHeight: 620 / (file.width / file.height),
      success: (result) => {
        resolve(new File([result], file.name, { type: file.type }))
      },
      error: (error) => {
        reject(error)
      }
    })
  })
}

const optimizeVideo = async (file: any): Promise<File> => {
  return new Promise<File>((resolve, reject) => {
    const video = document.createElement('video')
    const canvas = document.createElement('canvas')
    const ctx: any = canvas.getContext('2d')

    video.preload = 'metadata'
    video.onloadedmetadata = () => {
      const aspectRatio = video.videoWidth / video.videoHeight
      const maxWidth = 500 // Adjust this value as per your requirements
      const maxHeight = maxWidth / aspectRatio

      canvas.width = maxWidth
      canvas.height = maxHeight

      ctx.drawImage(video, 0, 0, maxWidth, maxHeight)

      canvas.toBlob((blob: any) => {
        const optimizedFile = new File([blob as BlobPart], file.name, {
          type: file.type,
          lastModified: Date.now()
        })

        URL.revokeObjectURL(video.src) // Revoke the created URL

        resolve(optimizedFile)
      }, 'video/mp4') // or 'video/mp4' depending on your desired video format
    }

    video.onerror = () => {
      reject(new Error('Error loading video.'))
    }

    video.src = URL.createObjectURL(file)
  })
}


export { optimizeImages, optimizeVideo }
