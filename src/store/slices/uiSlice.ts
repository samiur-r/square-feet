import { StateCreator } from 'zustand'

export interface UiSliceType {
  highlightedPost: number | undefined
  scrollYTo: boolean
  updateScrollYTo: (id: boolean) => void
  updateHighlightedPost: (id: number | undefined) => void
}

export const createUiSlice: StateCreator<UiSliceType> = (set) => ({
  highlightedPost: undefined,
  scrollYTo: true,
  updateScrollYTo: (val: boolean) =>
    set(() => ({
      scrollYTo: val
    })),
  updateHighlightedPost: (id: number | undefined) =>
    set(() => ({
      highlightedPost: id
    }))
})
