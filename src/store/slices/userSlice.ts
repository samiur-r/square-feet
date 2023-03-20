import { StateCreator } from 'zustand'

interface UserType {
  id: number
  phone: string
  isAdmin: boolean
  isAgent: boolean
  status: string
}

export interface UserSliceType {
  user: UserType | undefined
  addUser: (user: UserType) => void
  removeUser: () => void
}

export const createUserSlice: StateCreator<UserSliceType> = (set) => ({
  user: undefined,
  addUser: (userPayload: UserType) =>
    set(() => ({
      user: userPayload
    })),
  removeUser: () => {
    set(() => ({
      user: undefined
    }))
  }
})
