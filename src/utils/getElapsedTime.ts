const getElapsedTime = (dateStr: string) => {
  if (!dateStr) return { unit: '-', timeElapsed: '-' }

  const startDate = new Date(Date.parse(dateStr))
  const currentDate = new Date(Date.now())
  const differenceInTime = currentDate.getTime() - startDate.getTime()
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24))
  const differenceInHours = Math.floor(
    (differenceInTime / (1000 * 60 * 60)) % 24
  )
  const differenceInMinutes = Math.floor((differenceInTime / (1000 * 60)) % 60)

  // Determine which unit to display
  let unit = ''
  let timeElapsed = 0
  if (differenceInDays >= 1) {
    unit = 'يوم'
    timeElapsed = differenceInDays
  } else if (differenceInHours >= 1) {
    unit = 'ساعة'
    timeElapsed = differenceInHours
  } else {
    unit = 'دقيقة'
    timeElapsed = differenceInMinutes
  }

  return { unit, timeElapsed }
}

export default getElapsedTime
