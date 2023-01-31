/* eslint-disable import/prefer-default-export */
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { createUserSlice, UserSliceType } from './slices/userSlice'

type StoreState = UserSliceType

export const useAppStore = create<StoreState>()(
  persist((...a) => ({
    // @ts-ignore
    ...createUserSlice(...a)
  }))
)
