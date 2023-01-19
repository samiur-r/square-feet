import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface ToastProps {
  showToast: boolean
  msg: string
  isError: boolean
  handleSetShowToast: Dispatch<SetStateAction<boolean>>
}

const Toast: React.FC<ToastProps> = ({
  showToast,
  msg,
  isError,
  handleSetShowToast
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(showToast)
  }, [showToast])

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false)
        handleSetShowToast(false)
      }, 40000)
    }
  }, [show])

  if (!show) return null

  return (
    <div className="fixed right-0 top-20 z-50 m-8 w-5/6 max-w-sm md:w-full">
      <div
        className={`${
          isError ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
        } close flex h-24 w-full cursor-pointer items-start justify-between rounded p-2 shadow-lg`}
      >
        <span className="p-2">{msg}</span>
        <svg
          className={`${
            isError ? 'text-red-600' : 'text-green-600'
          } fill-current`}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          onClick={() => handleSetShowToast(false)}
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
        </svg>
      </div>
    </div>
  )
}

export default Toast
