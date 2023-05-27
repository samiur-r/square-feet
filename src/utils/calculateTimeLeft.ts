const calculateTimeLeft = (dateString: string) => {
  // const targetDate = new Date(dateString)
  // const currentDate = new Date()

  const targetDate = new Date(
    new Date(Date.parse(dateString)).toLocaleString('en-US', {
      timeZone: 'Asia/Kuwait'
    })
  )

  const currentDate = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Kuwait' })
  )

  const timeDiff = targetDate.getTime() - currentDate.getTime()

  if (timeDiff <= 0) {
    return '0 دقيقة'
  }

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  const daysLeft = Math.floor(timeDiff / oneDay)
  const hoursLeft = Math.floor((timeDiff % oneDay) / oneHour)
  const minutesLeft = Math.floor((timeDiff % oneHour) / oneMinute)

  if (daysLeft > 0) {
    return `${daysLeft} يوم`
  }
  if (hoursLeft > 0) {
    return `${hoursLeft} ساعة`
  }
  return `${minutesLeft} دقيقة`
}

export default calculateTimeLeft
