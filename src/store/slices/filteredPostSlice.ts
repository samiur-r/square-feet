import { IPost } from 'interfaces'
import { StateCreator } from 'zustand'

export interface FilteredPostSliceType {
  indexPostCount: number
  filteredPosts: IPost[]
  totalFilteredPosts: number | undefined
  filteredArchivedPosts: IPost[]
  totalFilteredArchivedPosts: number | undefined
  updateIndexPostCount: (count: number) => void
  updateFilteredPosts: (posts: IPost[]) => void
  updateFilteredPostsCount: (numOfPosts: number) => void
  updateFilteredArchivedPosts: (posts: IPost[]) => void
  updateFilteredArchivedPostsCount: (numOfPosts: number) => void
}

export const createFilteredPostSlice: StateCreator<FilteredPostSliceType> = (
  set
) => ({
  indexPostCount: 0,
  filteredPosts: [],
  totalFilteredPosts: undefined,
  filteredArchivedPosts: [],
  totalFilteredArchivedPosts: undefined,
  updateIndexPostCount: (count: number) =>
    set(() => ({
      indexPostCount: count
    })),
  updateFilteredPosts: (posts: IPost[]) =>
    set(() => ({
      filteredPosts: posts
    })),
  updateFilteredPostsCount: (numOfPosts: number) =>
    set(() => ({
      totalFilteredPosts: numOfPosts
    })),
  updateFilteredArchivedPosts: (posts: IPost[]) =>
    set(() => ({
      filteredArchivedPosts: posts
    })),
  updateFilteredArchivedPostsCount: (numOfPosts: number) =>
    set(() => ({
      totalFilteredArchivedPosts: numOfPosts
    }))
})
