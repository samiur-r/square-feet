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

const convertHEICtoJPG = async (heicFile: any) => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    const heic2any = require('heic2any')
    try {
      const jpgBlob = await heic2any({
        blob: heicFile,
        toType: 'image/jpeg',
        quality: 0.6 // optional: adjust the image quality (0.0 - 1.0)
      })
      const jpgFile = new File([jpgBlob], `${heicFile.name}`, {
        type: 'image/jpeg'
      })
      return jpgFile
    } catch (error) {
      return null
    }
  }
}

export { optimizeImage, convertHEICtoJPG }
