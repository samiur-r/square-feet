/* eslint-disable no-nested-ternary */
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import Title from 'components/Title'
import Description from 'components/Description'
import ApiClient from 'utils/ApiClient'
import Router from 'next/router'

interface OtpType {
  userId: number
  nextOperation?: boolean
  isOtpModalOpen: boolean
  handleIsOtpModalOpen: Dispatch<SetStateAction<boolean>>
  handleSetToastMsg: Dispatch<SetStateAction<string>>
  handleSetShowToast: Dispatch<SetStateAction<boolean>>
  handleSetIsToastStatusError: Dispatch<SetStateAction<boolean>>
  handleSetShowPasswordField?: Dispatch<SetStateAction<boolean>>
}

const Otp: React.FC<OtpType> = ({
  userId,
  isOtpModalOpen,
  nextOperation,
  handleIsOtpModalOpen,
  handleSetToastMsg,
  handleSetShowToast,
  handleSetIsToastStatusError,
  handleSetShowPasswordField
}) => {
  const [open, setOpen] = useState(false)
  const [timer, setTimer] = useState(10)
  const [code, setCode] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isValidationDone, setIsValidationDone] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
  }, [timer])

  useEffect(() => {
    setOpen(isOtpModalOpen)
  }, [isOtpModalOpen])

  const handleSetCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) setCode(e.target.value)
  }

  const validateOtpInput = () => {
    setError('')
    if (!code) setError('Otp code is required')
    setIsValidationDone(true)
  }

  const verifyOtp = () => {
    if (!error.length) {
      ApiClient({
        method: 'POST',
        url: `/otp/verify`,
        data: { userId, otpCode: code, nextOperation }
      })
        .then((res) => {
          handleSetIsToastStatusError(false)
          handleSetToastMsg(`Success: ${res?.data?.success}`)
          handleSetShowToast(true)
          handleIsOtpModalOpen(false)
          if (nextOperation && handleSetShowPasswordField)
            handleSetShowPasswordField(true)
          else Router.push('/login')
        })
        .catch((err) => {
          handleSetIsToastStatusError(true)
          handleSetToastMsg(`Error: ${err?.response?.data}`)
          handleSetShowToast(true)
        })
    }
    setIsValidationDone(false)
  }

  useEffect(() => {
    if (isValidationDone) verifyOtp()
  }, [isValidationDone])

  const resendOtp = async () => {
    try {
      const { data } = await ApiClient({
        method: 'POST',
        url: `/otp/resend`,
        data: {
          userId,
          type: nextOperation ? 'password-reset' : 'registration'
        }
      })
      setCode('')
      setTimer(10)
      setError('')
      handleSetIsToastStatusError(false)
      handleSetToastMsg(`Success: ${data?.success}`)
      handleSetShowToast(true)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      handleSetIsToastStatusError(true)
      handleSetToastMsg(`Error: ${err?.response?.data}`)
      handleSetShowToast(true)
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 dir-rtl"
        onClose={handleIsOtpModalOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="flex flex-col items-start text-start gap-3">
                  <Title value="تأكيد رقم موبايلك" />
                  <div className="mt-8">
                    <Description
                      textBlack
                      value="لقد أرسلنا للتو رسالة نصية SMS وفيها رقم التفعيل OTP. أكتبه هنا لتأكيد موبايلك"
                    />
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <p className="text-md">لم تصلك الرسالة النصية SMS ؟</p>
                      {timer <= 0 ? (
                        <button
                          type="button"
                          className="text-primary cursor-pointer hover:underline"
                          onClick={resendOtp}
                        >
                          أرسل مرة أخرى
                        </button>
                      ) : (
                        <p className="text-primary ">ثانية {timer} إنتظر</p>
                      )}
                    </div>
                  </div>
                  <div className="relative w-full mt-5">
                    <input
                      type="number"
                      name="otp"
                      id="otp"
                      value={code}
                      className={`${
                        error
                          ? 'border-custom-red focus:border-custom-red'
                          : 'border-custom-gray-border focus:border-primary'
                      } block px-4 py-2.5 md:py-4 w-full text-black bg-transparent rounded-lg shadow-sm border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
                      placeholder=" "
                      onChange={(e) => handleSetCode(e)}
                    />
                    <label
                      htmlFor="otp"
                      className={`${
                        error
                          ? 'text-custom-red peer-focus:text-custom-red'
                          : 'text-custom-gray peer-focus:text-primary'
                      } absolute text-md duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0`}
                    >
                      رقم الموبايل
                    </label>
                  </div>
                  <p className="flex text-custom-red">{error}</p>
                </div>
                <div className="mt-8 flex justify-center gap-3">
                  <button
                    type="button"
                    className="flex justify-center items-center py-3 md:py-4 px-8 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-secondary"
                    onClick={(e) => {
                      e.preventDefault()
                      // handleIsOtpModalOpen(false)
                      validateOtpInput()
                    }}
                  >
                    تأكيد الرقم
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center py-3 md:py-4 px-8 text-black md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-primary-lighter"
                    onClick={() => handleIsOtpModalOpen(false)}
                  >
                    إلغاء
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Otp
