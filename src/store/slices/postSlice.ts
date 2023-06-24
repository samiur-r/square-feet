import { IPost } from 'interfaces'
import { StateCreator } from 'zustand'

export interface PostSliceType {
  indexPosts: IPost[]
  filteredPosts: IPost[]
  updateIndexPosts: (posts: IPost[]) => void
  updateFilteredPosts: (posts: IPost[]) => void
}

export const createPostSlice: StateCreator<PostSliceType> = (set) => ({
  indexPosts: [],
  filteredPosts: [],
  updateIndexPosts: (posts) =>
    set(() => ({
      indexPosts: posts
    })),
  updateFilteredPosts: (posts) =>
    set(() => ({
      filteredPosts: posts
    }))
})
