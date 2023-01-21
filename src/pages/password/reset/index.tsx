import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Router from 'next/router'

import Description from 'components/Description'
import Title from 'components/Title'
import { phoneSchema, passwordSchema } from 'validations/UserValidation'
import ApiClient from 'utils/ApiClient'
import Otp from 'components/Auth/Otp'
import Toast from 'components/Toast'

const PasswordReset: NextPage = () => {
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [otpVerified, setOtpVerified] = useState(false)
  const [phoneErrors, setPhoneErrors] = useState<string[]>([])
  const [passwordErrors, setPasswordErrors] = useState<string[]>([])
  const [showToast, setShowToast] = useState(false)
  const [isToastStatusError, setIsToastStatusError] = useState(true)
  const [toastMsg, setToastMsg] = useState('')
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false)
  const [userId, setUserId] = useState<number | undefined>(undefined)
  const [showPasswordField, setShowPasswordField] = useState(false)

  const handleSetPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) setPhone(e.target.value)
  }

  useEffect(() => {
    if (showPasswordField) setOtpVerified(true)
  }, [showPasswordField])

  const checkIfUserExists = async () => {
    try {
      await phoneSchema.validate(phone, { abortEarly: false })
      setPhoneErrors([])

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

      setUserId(data.userId)
      setIsOtpModalOpen(true)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errs: any) {
      if (errs?.name === 'ValidationError') {
        setPhoneErrors(
          errs.inner?.map((err: { message: string }) => err.message)
        )
      } else {
        setIsToastStatusError(true)
        setToastMsg(`Error: ${errs.response.data}`)
        setShowToast(true)
      }
    }
  }

  const changePassword = async () => {
    try {
      await passwordSchema.validate(password, { abortEarly: false })
      setPasswordErrors([])

      const { data } = await ApiClient({
        method: 'POST',
        url: `/user/password-reset`,
        data: { phone, password }
      })

      setIsToastStatusError(false)
      setToastMsg(`Success: ${data?.success}`)
      setShowToast(true)

      Router.push('/login')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errs: any) {
      if (errs?.name === 'ValidationError') {
        setPasswordErrors(
          errs.inner?.map((err: { message: string }) => err.message)
        )
      } else {
        setIsToastStatusError(true)
        setToastMsg(`Error: ${errs.response.data}`)
        setShowToast(true)
      }
    }
  }

  return (
    <div className="dir-rtl container max-w-md grid place-items-center py-10">
      <Toast
        msg={toastMsg}
        showToast={showToast}
        isError={isToastStatusError}
        handleSetShowToast={setShowToast}
      />
      {isOtpModalOpen && (
        <Otp
          userId={userId as number}
          isOtpModalOpen={isOtpModalOpen}
          nextOperation
          handleIsOtpModalOpen={setIsOtpModalOpen}
          handleSetToastMsg={setToastMsg}
          handleSetShowToast={setShowToast}
          handleSetIsToastStatusError={setIsToastStatusError}
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
          <div className="flex flex-col gap-2 mt-3">
            {phoneErrors.map((error) => (
              <p className="text-custom-red" key={Math.random()}>
                {error}
              </p>
            ))}
          </div>
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
        <div className="mt-8">
          <button
            type="submit"
            className="bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white py-3.5 md:py-4 px-8 rounded-lg"
            onClick={(e) => {
              e.preventDefault()
              if (otpVerified) {
                changePassword()
              } else checkIfUserExists()
            }}
          >
            أرسل لي رقم التفعيل SMS
          </button>
        </div>
      </form>
    </div>
  )
}

export default PasswordReset
