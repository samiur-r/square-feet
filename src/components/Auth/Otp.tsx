/* eslint-disable no-nested-ternary */
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { useStore } from 'store'
import Title from 'components/Title'
import Description from 'components/Description'
import ApiClient from 'utils/ApiClient'
import Router from 'next/router'

interface OtpType {
  userId: number
  nextOperation?: boolean
  isOtpModalOpen: boolean
  handleIsOtpModalOpen: Dispatch<SetStateAction<boolean>>
  handleSetShowPasswordField?: Dispatch<SetStateAction<boolean>>
}

const Otp: React.FC<OtpType> = ({
  userId,
  isOtpModalOpen,
  nextOperation,
  handleIsOtpModalOpen,
  handleSetShowPasswordField
}) => {
  const [open, setOpen] = useState(false)
  const [timer, setTimer] = useState(60)
  const [code, setCode] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isValidationDone, setIsValidationDone] = useState(false)
  const [isCallingApi, setIsCallingApi] = useState(false)

  const { addUser, updateToast } = useStore()

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
    if (!code) setError('مطلوب كود otp') // Otp code is required
    setIsValidationDone(true)
  }

  const verifyOtp = () => {
    if (!error.length) {
      setIsCallingApi(true)

      ApiClient({
        method: 'POST',
        url: `/otp/verify`,
        data: { userId, otpCode: code, nextOperation }
      })
        .then((res) => {
          setIsCallingApi(false)
          updateToast(true, `Success: Otp verified successfully`, false)
          handleIsOtpModalOpen(false)
          if (nextOperation && handleSetShowPasswordField)
            handleSetShowPasswordField(true)
          else {
            addUser(res.data.success)
            if (res.data.success.userHasCredits)
              Router.push('/post?mode=create')
            else Router.push('/topup')
          }
        })
        .catch((err) => {
          setIsCallingApi(false)
          updateToast(true, `Error: ${err?.response?.data}`, true)
        })
    }
    setIsValidationDone(false)
  }

  useEffect(() => {
    if (isValidationDone) verifyOtp()
  }, [isValidationDone])

  const resendOtp = async () => {
    try {
      setIsCallingApi(true)
      const { data } = await ApiClient({
        method: 'POST',
        url: `/otp/resend`,
        data: {
          userId,
          type: nextOperation ? 'password-reset' : 'registration'
        }
      })
      setIsCallingApi(false)
      setCode('')
      setTimer(60)
      setError('')
      updateToast(true, `Success: ${data?.success}`, false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setIsCallingApi(false)
      updateToast(true, `Error: ${err?.response?.data}`, true)
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
                    تأكيد الرقم{' '}
                    {isCallingApi && (
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-5 h-5 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
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
