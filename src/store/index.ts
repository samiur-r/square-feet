/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect } from 'react'
import { create, UseBoundStore } from 'zustand'
import createContext from 'zustand/context'
import { persist } from 'zustand/middleware'

import { createToastSlice, ToastSliceType } from './slices/toastSlice'
import { createUserSlice, UserSliceType } from './slices/userSlice'
import { createSearchSlice, SearchSliceType } from './slices/searchSlice'
import {
  createFilteredPostSlice,
  FilteredPostSliceType
} from './slices/filteredPostSlice'
import { createAdminSlice, AdminSliceType } from './slices/adminSlice'
import { createUiSlice, UiSliceType } from './slices/uiSlice'

export type StoreState = UserSliceType &
  ToastSliceType &
  SearchSliceType &
  FilteredPostSliceType &
  AdminSliceType &
  UiSliceType

let store: any

type InitialState = StoreState
type UseStoreState = typeof initializeStore extends (
  ...args: never
) => UseBoundStore<infer T>
  ? T
  : never

const zustandContext = createContext<UseStoreState>()
export const { Provider } = zustandContext
export const { useStore } = zustandContext

export const initializeStore = (preloadedState: unknown = {}) => {
  return create(
    persist(
      (...a: any) => ({
        ...(preloadedState as object),
        // @ts-ignore
        ...createUserSlice(...a),
        // @ts-ignore
        ...createToastSlice(...a),
        // @ts-ignore
        ...createSearchSlice(...a),
        // @ts-ignore
        ...createFilteredPostSlice(...a),
        // @ts-ignore
        ...createAdminSlice(...a),
        // @ts-ignore
        ...createUiSlice(...a)
      }),
      { name: 'store' }
    )
  )
}

export const useCreateStore = (serverInitialState: InitialState) => {
  // For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(serverInitialState)
  }

  const isReusingStore = Boolean(store)
  // For CSR, always re-use same store.
  store = store ?? initializeStore(serverInitialState)
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  useLayoutEffect(() => {
    // serverInitialState is undefined for CSR pages. It is up to you if you want to reset
    // states on CSR page navigation or not. I have chosen not to, but if you choose to,
    // then add `serverInitialState = getDefaultInitialState()` here.
    if (serverInitialState && isReusingStore) {
      store.setState(
        {
          // re-use functions from existing store
          ...store.getState(),
          // but reset all other properties.
          ...serverInitialState
        },
        true // replace states, rather than shallow merging
      )
    }
  })

  return () => store
}
