import { LocationType } from 'interfaces'
import { StateCreator } from 'zustand'
import { PRICE_RANGES } from 'constant'

export interface SearchSliceType {
  locationsSelected: LocationType[]
  propertyTypeSelected: { id: number; title: string } | undefined
  categorySelected: { id: number; title: string } | undefined
  priceRangeSelected: Array<number>
  canFetchPosts: boolean
  setLocationsSelected: (locations: LocationType[]) => void
  setPropertyTypeSelected: (
    propertyType: { id: number; title: string } | undefined
  ) => void
  setCategorySelected: (
    category: { id: number; title: string } | undefined
  ) => void
  setPriceRangeSelected: (price: Array<number>) => void
  updateCanFetchPosts: (val: boolean) => void
}

export const createSearchSlice: StateCreator<SearchSliceType> = (set) => ({
  locationsSelected: [],
  propertyTypeSelected: {
    id: 0,
    title: 'الكل'
  },
  categorySelected: {
    id: 1,
    title: 'للبدل'
  },
  priceRangeSelected: [PRICE_RANGES.min, PRICE_RANGES.max],
  canFetchPosts: false,
  setLocationsSelected: (locations: LocationType[]) =>
    set(() => ({
      locationsSelected: locations
    })),
  setPropertyTypeSelected: (
    propertyType: { id: number; title: string } | undefined
  ) =>
    set(() => ({
      propertyTypeSelected: propertyType
    })),
  setCategorySelected: (category: { id: number; title: string } | undefined) =>
    set(() => ({
      categorySelected: category
    })),
  setPriceRangeSelected: (price: Array<number>) =>
    set(() => ({
      priceRangeSelected: price
    })),
  updateCanFetchPosts: (val: boolean) =>
    set(() => ({
      canFetchPosts: val
    }))
})
