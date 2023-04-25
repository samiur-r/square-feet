const getLocaleDate = (timestamp: any) => {
  const date = new Date(timestamp)
  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // add leading zero to month if necessary
  const day = date.getDate().toString().padStart(2, '0') // add leading zero to day if necessary

  return `${year}-${month}-${day}`
}

export default getLocaleDate
