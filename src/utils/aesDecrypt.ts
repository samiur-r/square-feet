/* eslint-disable no-buffer-constructor */
import * as crypto from 'crypto'

import config from 'config'

const key = config.termResourceKey

const decrypt = (text: string) => {
  const AES_METHOD = 'aes-128-cbc'
  const decipher = crypto.createDecipheriv(
    AES_METHOD,
    new Buffer(key as string),
    key as string
  )
  const encryptedText = new Buffer(text, 'hex')
  let decrypted = decipher.update(encryptedText)

  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString()
}

export default decrypt
