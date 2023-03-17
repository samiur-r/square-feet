const createFileObjFromUrlStr = async (imageUrl: string): Promise<string> => {
  const response = await fetch(`${imageUrl}`)
  const blob = await response.blob()
  const file = new File([blob], imageUrl, { type: blob.type })
  return new Promise((resolve) => {
    const fileReader = new FileReader()
    fileReader.onload = () => {
      if (fileReader.result !== null)
        return resolve(fileReader.result as string)
      return undefined
    }
    fileReader.readAsDataURL(file)
  })
}

export default createFileObjFromUrlStr
