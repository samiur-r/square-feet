const getPositionOfChar = (
  string: string,
  subString: string,
  index: number
) => {
  return string.split(subString, index).join(subString).length
}

export default getPositionOfChar
