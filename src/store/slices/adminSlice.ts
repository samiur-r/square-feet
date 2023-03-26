import { StateCreator } from 'zustand'

interface AdminType {
  id: number
  phone: string
  name: string
  is_super: boolean
}

export interface AdminSliceType {
  admin: AdminType | undefined
  addAdmin: (user: AdminType) => void
  removeAdmin: () => void
}

export const createAdminSlice: StateCreator<AdminSliceType> = (set) => ({
  admin: undefined,
  addAdmin: (adminPayload: AdminType) =>
    set(() => ({
      admin: adminPayload
    })),
  removeAdmin: () => {
    set(() => ({
      admin: undefined
    }))
  }
})
