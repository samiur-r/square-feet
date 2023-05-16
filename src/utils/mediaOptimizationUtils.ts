/* eslint-disable no-new */
import Compressor from 'compressorjs'

const optimizeImage = (file: any): Promise<any> => {
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

export { optimizeImage }
