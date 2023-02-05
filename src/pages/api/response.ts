import aesDecrypt from 'utils/aesDecrypt'

const handler = (req: any, res: any) => {
  // const errorText = req.Error
  const decryptedText = aesDecrypt(req.body.trandata)
  console.log(decryptedText)
  res.status(200).json({ success: true })
}

export default handler
