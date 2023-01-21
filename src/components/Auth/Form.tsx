import Link from 'next/link'
import { useEffect, useState } from 'react'
import Router from 'next/router'

import {
  passwordSchema,
  phoneSchema,
  userSchema
} from 'validations/UserValidation'
import ApiClient from 'utils/ApiClient'
import Description from 'components/Description'
import Modal from 'components/Modal'
import Title from 'components/Title'
import Toast from 'components/Toast'
import Otp from './Otp'

interface AuthFormProps {
  type: string
  link: {
    title: string
    href: string
  }
}

const Form: React.FC<AuthFormProps> = ({ type, link }) => {
  const [phone, setPhone] = useState<number | undefined>()
  const [password, setPassword] = useState('')
  const [phoneErrors, setPhoneErrors] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isToastStatusError, setIsToastStatusError] = useState(true)
  const [toastMsg, setToastMsg] = useState('')
  const [canHandleAuth, setCanHandleAuth] = useState(false)
  const [opt, setOpt] = useState('')

  const [userId, setUserId] = useState<number | undefined>(undefined)

  const handleSetPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) setPhone(parseInt(e.target.value, 10))
  }

  const validatePhone = async () => {
    try {
      await phoneSchema.validate(phone, { abortEarly: false })
      setPhoneErrors([])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setPhoneErrors(
        error.inner?.map((err: { message: string }) => err.message)
      )
    }
  }

  const validatePassword = async () => {
    try {
      await passwordSchema.validate(password, { abortEarly: false })
      setPasswordErrors([])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setPasswordErrors(
        error.inner?.map((err: { message: string }) => err.message)
      )
    }
  }

  const validateUserInput = async (
    e: React.MouseEvent<HTMLElement>,
    optVal: string
  ) => {
    e.preventDefault()
    await validatePhone()
    await validatePassword()
    setOpt(optVal)
    setCanHandleAuth(true)
  }

  const handleAuth = async () => {
    setCanHandleAuth(false)
    if (phoneErrors.length > 0 || passwordErrors.length > 0) return
    try {
      const { data } = await ApiClient({
        method: 'POST',
        url: `/user/${opt}`,
        data: { phone, password }
      })

      if (data && data.nextOperation) {
        setIsToastStatusError(false)
        setUserId(data.userId)
        setToastMsg(`Please verify your phone`)
        setShowToast(true)
        setIsOtpModalOpen(true)
        return
      }
      Router.push('/my-posts')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setIsToastStatusError(true)
      setToastMsg(`Error: ${error.response.data}`)
      setShowToast(true)
    }
  }

  useEffect(() => {
    if (canHandleAuth) handleAuth()
  }, [canHandleAuth])

  return (
    <>
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
          handleIsOtpModalOpen={setIsOtpModalOpen}
          handleSetToastMsg={setToastMsg}
          handleSetShowToast={setShowToast}
          handleSetIsToastStatusError={setIsToastStatusError}
        />
      )}
      <form className="w-full mt-10 px-3 md:px-auto dir-rtl">
        <div className="relative">
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            className={`${
              phoneErrors.length > 0
                ? 'border-custom-red focus:border-custom-red'
                : 'border-custom-gray-border focus:border-primary'
            } block px-4 py-2.5 md:py-4 w-full shadow-sm text-black bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0 peer`}
            placeholder=" "
            onChange={(e) => handleSetPhone(e)}
          />
          <label
            htmlFor="phone"
            className={`${
              phoneErrors.length > 0
                ? 'text-custom-red peer-focus:text-custom-red'
                : 'text-custom-gray peer-focus:text-primary'
            } absolute duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0`}
          >
            رقم الموبايل
          </label>
        </div>
        {phoneErrors && phoneErrors.length > 0 && (
          <div className="mt-3 flex flex-col gap-2">
            {phoneErrors.map((err) => (
              <p key={Math.random()} className="text-custom-red text-sm">
                {err}
              </p>
            ))}
          </div>
        )}
        <div className="relative mt-8">
          <input
            type="password"
            name="password"
            id="password"
            className={`${
              phoneErrors.length > 0
                ? 'border-custom-red focus:border-custom-red'
                : 'border-custom-gray-border focus:border-primary'
            } block px-4 py-2.5 md:py-4 w-full shadow-sm text-black bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0 peer`}
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className={`${
              passwordErrors.length > 0
                ? 'text-custom-red peer-focus:text-custom-red'
                : 'text-custom-gray peer-focus:text-primary'
            } absolute text-md duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-1 peer-focus:right-1 peer-placeholder-shown:right-0`}
          >
            كلمة السر
          </label>
        </div>
        {passwordErrors && passwordErrors.length > 0 && (
          <div className="mt-3 flex flex-col gap-2">
            {passwordErrors.map((err) => (
              <p key={Math.random()} className="text-custom-red text-sm">
                {err}
              </p>
            ))}
          </div>
        )}
        <div className="mt-5">
          <Description>
            <Link href={link.href}>
              <a className="text-primary">{link.title}</a>
            </Link>
          </Description>
        </div>
        <div className="mt-8">
          {type === 'register' ? (
            <button
              type="submit"
              className="bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white font-DroidArabicKufiBold py-3.5 md:py-4 px-8 rounded-lg"
              onClick={(e) => validateUserInput(e, 'register')}
            >
              تسجيل
            </button>
          ) : (
            <button
              type="submit"
              className="bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white font-DroidArabicKufiBold py-3.5 md:py-4 px-8 rounded-lg"
              onClick={(e) => validateUserInput(e, 'login')}
            >
              دخول
            </button>
          )}
        </div>
        <div className="mt-8">
          <Description textBlack>
            <span className="flex gap-3 justify-center">
              {type === 'login' ? (
                <>
                  <span>لا تمتلك حساب؟</span>
                  <Link href="/register">
                    <a className="text-primary hover:underline">تسجيل</a>
                  </Link>
                </>
              ) : (
                <>
                  <span>يس لديك حساب</span>
                  <Link href="/login">
                    <a className="text-primary hover:underline">دخول</a>
                  </Link>
                </>
              )}
            </span>
          </Description>
        </div>
      </form>
    </>
  )
}

export default Form
