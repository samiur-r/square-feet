const createFileObjFromUrlStr = async (imageUrl: string) => {
  const response = await fetch(`${imageUrl}`)
  const blob = await response.blob()
  const file = new File([blob], imageUrl, { type: blob.type })
  return file
}

export default createFileObjFromUrlStr
