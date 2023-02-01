const pkcs5Pad = (text: string) => {
  const blocksize = 16
  const pad = blocksize - (text.length % blocksize)

  return text + pad.toString().repeat(pad)
}

export default pkcs5Pad
