const createFileObjFromUrlStr = async (dir: string, imageUrl: string) => {
  try {
    const response = await fetch(`/images/${dir}/${imageUrl}`)
    const blob = await response.blob()
    const file = new File([blob], imageUrl, { type: blob.type })
    return file
  } catch (error) {
    /* empty */
  }
}

export default createFileObjFromUrlStr
