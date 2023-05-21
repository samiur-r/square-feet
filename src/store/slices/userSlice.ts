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
  // scrollTo: boolean
  // updateScrollTo: (status: boolean) => void
}

export const createUserSlice: StateCreator<UserSliceType> = (set) => ({
  user: undefined,
  // scrollTo: false,
  addUser: (userPayload: UserType) =>
    set(() => ({
      user: userPayload
    })),
  removeUser: () => {
    set(() => ({
      user: undefined
    }))
  }
  // updateScrollTo: (status: boolean) =>
  //   set(() => ({
  //     scrollTo: status
  //   }))
})
