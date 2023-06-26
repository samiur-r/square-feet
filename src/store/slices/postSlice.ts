import { IPost } from 'interfaces'
import { StateCreator } from 'zustand'

export interface PostSliceType {
  indexPosts: IPost[]
  filteredPosts: IPost[]
  searchedPosts: IPost[]
  updateIndexPosts: (posts: IPost[]) => void
  updateFilteredPosts: (posts: IPost[]) => void
  updateSearchedPosts: (posts: IPost[]) => void
}

export const createPostSlice: StateCreator<PostSliceType> = (set) => ({
  indexPosts: [],
  filteredPosts: [],
  searchedPosts: [],
  updateIndexPosts: (posts) =>
    set(() => ({
      indexPosts: posts
    })),
  updateFilteredPosts: (posts) =>
    set(() => ({
      filteredPosts: posts
    })),
  updateSearchedPosts: (posts) =>
    set(() => ({
      searchedPosts: posts
    }))
})
