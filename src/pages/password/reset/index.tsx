import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Router from 'next/router'

import { useStore } from 'store'
import Description from 'components/Description'
import Title from 'components/Title'
import { phoneSchema, passwordSchema } from 'validations/UserValidation'
import ApiClient from 'utils/ApiClient'
import Otp from 'components/Auth/Otp'
import Breadcrumbs from 'components/Breadcrumbs'

const breadcrumbsItems = [
  {
    title: 'الكويت',
    href: '/'
  },
  {
    title: 'تغيير كلمة السر',
    href: '/password/reset'
  }
]

const PasswordReset: NextPage = () => {
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [otpVerified, setOtpVerified] = useState(false)
  const [phoneErrors, setPhoneErrors] = useState<string[]>([])
  const [passwordErrors, setPasswordErrors] = useState<string[]>([])
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false)
  const [userId, setUserId] = useState<number | undefined>(undefined)
  const [showPasswordField, setShowPasswordField] = useState(false)
  const [isCallingApi, setIsCallingApi] = useState(false)

  const handleSetPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) setPhone(e.target.value)
  }

  const { updateToast } = useStore()

  useEffect(() => {
    if (showPasswordField) setOtpVerified(true)
  }, [showPasswordField])

  const checkIfUserExists = async () => {
    try {
      await phoneSchema.validate(phone, { abortEarly: false })
      setPhoneErrors([])
      setIsCallingApi(true)
      const { data } = await ApiClient({
        method: 'POST',
        url: `/user/check-user`,
        data: { phone }
      })

      await ApiClient({
        method: 'POST',
        url: `/otp/resend`,
        data: { userId: data.userId, type: 'password-reset' }
      })
      setIsCallingApi(false)
      setUserId(data.userId)
      setIsOtpModalOpen(true)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errs: any) {
      setIsCallingApi(false)
      if (errs?.name === 'ValidationError') {
        setPhoneErrors(
          errs.inner?.map((err: { message: string }) => err.message)
        )
      } else {
        updateToast(true, `Error: ${errs.response.data}`, true)
      }
    }
  }

  const changePassword = async () => {
    try {
      await passwordSchema.validate(password, { abortEarly: false })
      setPasswordErrors([])
      setIsCallingApi(true)

      const { data } = await ApiClient({
        method: 'POST',
        url: `/user/password-reset`,
        data: { phone, password }
      })

      setIsCallingApi(false)
      updateToast(true, `Success: ${data?.success}`, false)
      Router.push('/login')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errs: any) {
      setIsCallingApi(false)
      if (errs?.name === 'ValidationError') {
        setPasswordErrors(
          errs.inner?.map((err: { message: string }) => err.message)
        )
      } else {
        updateToast(true, `Error: ${errs.response.data}`, true)
      }
    }
  }

  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems} />
      <div className="dir-rtl container max-w-md grid place-items-center py-10">
        {isOtpModalOpen && (
          <Otp
            userId={userId as number}
            isOtpModalOpen={isOtpModalOpen}
            nextOperation
            handleIsOtpModalOpen={setIsOtpModalOpen}
            handleSetShowPasswordField={setShowPasswordField}
          />
        )}
        <div className="w-full md:w-auto">
          <Title value="تغيير كلمة السر" />
        </div>
        <div className="text-start md:text-center mt-5">
          <Description
            value="سنرسل لك رسالة نصية SMS وفيها رقم تفعيل OTP للتأكد من أن رقم موبايلك
        صحيح"
          />
        </div>
        <form className="mt-8 px-3 md:px-0 w-full">
          <div className="relative">
            <input
              disabled={otpVerified}
              type="number"
              name="phone"
              id="phone"
              value={phone}
              className={`${
                phoneErrors.length
                  ? 'border-custom-red focus:border-red'
                  : 'focus:border-primary border-custom-gray-border'
              } block px-4 py-2.5 md:py-4 w-full text-black bg-transparent rounded-lg shadow-sm border  appearance-none focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              onChange={(e) => handleSetPhone(e)}
            />
            <label
              htmlFor="phone"
              className={`${
                phoneErrors.length
                  ? 'text-custom-red peer-focus:text-red'
                  : 'text-custom-gray peer-focus:text-primary'
              } absolute text-md  duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0`}
            >
              رقم الموبايل
            </label>
            {showPasswordField && (
              <div>
                <div className="relative mt-8">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className={`${
                      passwordErrors.length
                        ? 'border-custom-red focus:border-red'
                        : 'focus:border-primary border-custom-gray-border'
                    } block px-4 py-2.5 md:py-4 w-full shadow-sm text-black bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=" "
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className={`${
                      passwordErrors.length
                        ? 'text-custom-red peer-focus:text-custom-red'
                        : 'text-custom-gray peer-focus:text-primary'
                    } absolute text-md duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-1 peer-focus:right-1 peer-placeholder-shown:right-0`}
                  >
                    كلمة السر
                  </label>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  {passwordErrors.map((error) => (
                    <p className="text-custom-red" key={Math.random()}>
                      {error}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          {phoneErrors && phoneErrors.length > 0 && (
            <div className="flex flex-col gap-2 mt-3">
              {phoneErrors.map((error) => (
                <p className="text-custom-red" key={Math.random()}>
                  {error}
                </p>
              ))}
            </div>
          )}
          <div className="mt-8">
            <button
              type="submit"
              className="flex items-center justify-center bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white py-3.5 md:py-4 px-8 rounded-lg"
              onClick={(e) => {
                e.preventDefault()
                if (otpVerified) {
                  changePassword()
                } else checkIfUserExists()
              }}
            >
              {otpVerified
                ? 'إعادة تعيين كلمة المرور'
                : 'أرسل لي رقم التفعيل SMS'}
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
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordReset
