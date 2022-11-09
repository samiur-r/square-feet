const isImage = (filename: string) => {
  return filename.match(/\.(jpeg|jpg|gif|png|svg)$/) != null
}

export default isImage
