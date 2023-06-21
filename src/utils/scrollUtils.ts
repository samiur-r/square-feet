// eslint-disable-next-line no-promise-executor-return
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const scrollToPrevPosition = async (
  scrollPosition: number,
  handleShowPage: (show: boolean) => void
) => {
  await delay(200)
  window.scrollTo({
    top: scrollPosition,
    left: 0,
    behavior: 'auto'
  })
  await delay(300)
  handleShowPage(true)
}

export { scrollToPrevPosition, delay }