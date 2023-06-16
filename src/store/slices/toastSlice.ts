import { StateCreator } from 'zustand'

export interface ToastSliceType {
  showToast: boolean
  toastMessage: string
  isToastError: boolean
  updateToast: (show: boolean, message: string, isError: boolean) => void
}

export const createToastSlice: StateCreator<ToastSliceType> = (set) => ({
  showToast: false,
  toastMessage: '',
  isToastError: true,
  updateToast: (show: boolean, message: string, isError: boolean) =>
    set(() => ({
      showToast: show,
      toastMessage: message,
      isToastError: isError
    }))
})
