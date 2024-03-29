import * as crypto from 'crypto'

import pkcs5Pad from './pkcs5Pad'

const aesEncrypt = (text: string, key: string) => {
  const AES_METHOD = 'aes-128-cbc'
  const content = pkcs5Pad(text)

  try {
    const cipher = crypto.createCipheriv(AES_METHOD, Buffer.from(key), key)
    let encrypted = cipher.update(content)

    encrypted = Buffer.concat([encrypted, cipher.final()])

    return `${encrypted.toString('hex')}`
  } catch (err) {
    /* empty */
  }
  return 0
}

export default aesEncrypt
