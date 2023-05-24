import { LocationType } from 'interfaces'
import { StateCreator } from 'zustand'
import { PRICE_RANGES } from 'constant'

export interface SearchSliceType {
  locationsSelected: LocationType[]
  propertyTypeSelected: { id: number; title: string } | undefined
  categorySelected: { id: number; title: string } | undefined
  archivedLocationsSelected: LocationType[]
  archivedPropertyTypeSelected: { id: number; title: string } | undefined
  archivedCategorySelected: { id: number; title: string } | undefined
  canFetchPosts: boolean
  canFetchArchivedPosts: boolean
  priceRangeSelected: Array<number>
  setLocationsSelected: (locations: LocationType[]) => void
  setPropertyTypeSelected: (
    propertyType: { id: number; title: string } | undefined
  ) => void
  setCategorySelected: (
    category: { id: number; title: string } | undefined
  ) => void
  setArchivedLocationsSelected: (locations: LocationType[]) => void
  setArchivedPropertyTypeSelected: (
    propertyType: { id: number; title: string } | undefined
  ) => void
  setArchivedCategorySelected: (
    category: { id: number; title: string } | undefined
  ) => void
  setPriceRangeSelected: (price: Array<number>) => void
  updateCanFetchPosts: (val: boolean) => void
  updateCanFetchArchivedPosts: (val: boolean) => void
}

export const createSearchSlice: StateCreator<SearchSliceType> = (set) => ({
  locationsSelected: [],
  propertyTypeSelected: {
    id: 0,
    title: 'الكل'
  },
  categorySelected: {
    id: 1,
    title: 'للايجار'
  },
  archivedLocationsSelected: [],
  archivedPropertyTypeSelected: {
    id: 0,
    title: 'الكل'
  },
  archivedCategorySelected: {
    id: 1,
    title: 'للايجار'
  },
  priceRangeSelected: [PRICE_RANGES.min, PRICE_RANGES.max],
  canFetchPosts: false,
  canFetchArchivedPosts: false,
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
  setArchivedLocationsSelected: (locations: LocationType[]) =>
    set(() => ({
      archivedLocationsSelected: locations
    })),
  setArchivedPropertyTypeSelected: (
    propertyType: { id: number; title: string } | undefined
  ) =>
    set(() => ({
      archivedPropertyTypeSelected: propertyType
    })),
  setArchivedCategorySelected: (
    category: { id: number; title: string } | undefined
  ) =>
    set(() => ({
      archivedCategorySelected: category
    })),
  setPriceRangeSelected: (price: Array<number>) =>
    set(() => ({
      priceRangeSelected: price
    })),
  updateCanFetchPosts: (val: boolean) =>
    set(() => ({
      canFetchPosts: val
    })),
  updateCanFetchArchivedPosts: (val: boolean) =>
    set(() => ({
      canFetchArchivedPosts: val
    }))
})
