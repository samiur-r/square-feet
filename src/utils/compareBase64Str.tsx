const compareBase64Strings = (base64Str1: string, base64Str2: string) => {
  // Decode the Base64 strings into binary data
  const binaryData1 = Buffer.from(base64Str1, 'base64')
  const binaryData2 = Buffer.from(base64Str2, 'base64')

  // Compare the lengths of the binary data
  if (binaryData1.length !== binaryData2.length) {
    return false
  }

  // Compare the byte values of the binary data
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < binaryData1.length; i++) {
    if (binaryData1[i] !== binaryData2[i]) {
      return false
    }
  }

  return true
}

export default compareBase64Strings
