import { IPost } from 'interfaces'
import { StateCreator } from 'zustand'

export interface FilteredPostSliceType {
  filteredPosts: IPost[]
  totalFilteredPosts: number | undefined
  updateFilteredPosts: (posts: IPost[]) => void
  updateFilteredPostsCount: (numOfPosts: number) => void
}

export const createFilteredPostSlice: StateCreator<FilteredPostSliceType> = (
  set
) => ({
  filteredPosts: [],
  totalFilteredPosts: undefined,
  updateFilteredPosts: (posts: IPost[]) =>
    set(() => ({
      filteredPosts: posts
    })),
  updateFilteredPostsCount: (numOfPosts: number) =>
    set(() => ({
      totalFilteredPosts: numOfPosts
    }))
})
