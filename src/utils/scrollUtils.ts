// eslint-disable-next-line no-promise-executor-return
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const scrollToPrevPosition = async (scrollPosition: number, url: string) => {
  await delay(10)
  window.scrollTo(0, scrollPosition)
  sessionStorage.removeItem(url)
}

export { scrollToPrevPosition, delay }
