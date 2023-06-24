import { IPost } from 'interfaces'
import { StateCreator } from 'zustand'

export interface FilteredPostSliceType {
  searchPostCount: number
  agentPostCount: number
  accountPostCount: number
  totalFilteredPosts: number
  filteredArchivedPosts: IPost[]
  totalFilteredArchivedPosts: number | undefined
  updateTotalFilteredPost: (count: number) => void
  updateSearchPostCount: (count: number) => void
  updateAgentPostCount: (count: number) => void
  updateAccountPostCount: (count: number) => void
  updateFilteredArchivedPosts: (posts: IPost[]) => void
  updateFilteredArchivedPostsCount: (numOfPosts: number) => void
}

export const createFilteredPostSlice: StateCreator<FilteredPostSliceType> = (
  set
) => ({
  searchPostCount: 0,
  filteredArchivedPosts: [],
  totalFilteredArchivedPosts: undefined,
  totalFilteredPosts: 0,
  agentPostCount: 0,
  accountPostCount: 0,
  updateTotalFilteredPost: (count: number) =>
    set(() => ({
      totalFilteredPosts: count
    })),
  updateAgentPostCount: (count: number) =>
    set(() => ({
      agentPostCount: count
    })),
  updateAccountPostCount: (count: number) =>
    set(() => ({
      accountPostCount: count
    })),
  updateSearchPostCount: (count: number) =>
    set(() => ({
      searchPostCount: count
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
