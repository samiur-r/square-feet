import { StateCreator } from 'zustand'

export interface UiSliceType {
  highlightedPost: number | undefined
  updateHighlightedPost: (id: number | undefined) => void
}

export const createUiSlice: StateCreator<UiSliceType> = (set) => ({
  highlightedPost: undefined,
  updateHighlightedPost: (id: number | undefined) =>
    set(() => ({
      highlightedPost: id
    }))
})
