import { StateCreator } from 'zustand'

export interface UiSliceType {
  highlightedPost: number | undefined
  scrollYTo: boolean
  scrollPosition: number
  updateScrollYTo: (val: boolean) => void
  updateScrollPosition: (val: number) => void
  updateHighlightedPost: (id: number | undefined) => void
}

export const createUiSlice: StateCreator<UiSliceType> = (set) => ({
  highlightedPost: undefined,
  scrollYTo: true,
  scrollPosition: 0,
  updateScrollYTo: (val: boolean) =>
    set(() => ({
      scrollYTo: val
    })),
  updateScrollPosition: (val: number) =>
    set(() => ({
      scrollPosition: val
    })),
  updateHighlightedPost: (id: number | undefined) =>
    set(() => ({
      highlightedPost: id
    }))
})
