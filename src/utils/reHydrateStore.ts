import { IPost } from 'interfaces'

const reHydrateStore = (arrA: IPost[], arrB: IPost[]) => {
  const missingElements = arrA.filter((elementA: IPost) => {
    return !arrB.some((elementB) => {
      return elementB.id === elementA.id
    })
  })

  if (missingElements.length) {
    arrB.unshift(...missingElements)
    if (arrB.length >= 10) arrB.splice(-missingElements.length)
  }
}

export default reHydrateStore
