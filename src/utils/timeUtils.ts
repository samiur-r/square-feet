const getToday = () => {
  const now = new Date()
  return new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kuwait' }))
}

const getYesterday = () => {
  const today = getToday()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)
  return yesterday
}

export { getToday, getYesterday }
