import { IPost } from 'interfaces'
import { StateCreator } from 'zustand'

export interface PostSliceType {
  indexPosts: IPost[]
  indexPostCount: number
  updateIndexPosts: (posts: IPost[]) => void
  updateIndexPostCount: (count: number) => void
}

export const createPostSlice: StateCreator<PostSliceType> = (set) => ({
  indexPostCount: 0,
  indexPosts: [],
  updateIndexPostCount: (count: number) =>
    set(() => ({
      indexPostCount: count
    })),
  updateIndexPosts: (posts) =>
    set(() => ({
      indexPosts: posts
    }))
})
