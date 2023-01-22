import Link from 'next/link'
import { useEffect, useState } from 'react'
import Router from 'next/router'

import { passwordSchema, phoneSchema } from 'validations/UserValidation'
import ApiClient from 'utils/ApiClient'
import Description from 'components/Description'
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
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(true)
  const [showToast, setShowToast] = useState(false)
  const [isToastStatusError, setIsToastStatusError] = useState(true)
  const [toastMsg, setToastMsg] = useState('')
  const [canHandleAuth, setCanHandleAuth] = useState(false)
  const [opt, setOpt] = useState('')
  const [isCallingApi, setIsCallingApi] = useState(false)

  const [userId, setUserId] = useState<number | undefined>(undefined)

  const handleSetPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) setPhone(parseInt(e.target.value, 10))
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
      setIsCallingApi(true)
      const { data } = await ApiClient({
        method: 'POST',
        url: `/user/${opt}`,
        data: { phone, password }
      })

      if (data && data.nextOperation) {
        await ApiClient({
          method: 'POST',
          url: `/otp/resend`,
          data: {
            userId: data.userId,
            type: 'registration'
          }
        })
        setIsCallingApi(false)
        setIsToastStatusError(false)
        setUserId(data.userId)
        setToastMsg(`يرجى التحقق من هاتفك`) // please verify your phone
        setShowToast(true)
        setIsOtpModalOpen(true)
        return
      }
      Router.push('/my-posts')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setIsCallingApi(false)
      setIsToastStatusError(true)
      setToastMsg(`خطأ: ${error.response.data}`) // Error
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
            value={phone || ''}
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
              className="flex items-center justify-center bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white font-DroidArabicKufiBold py-3.5 md:py-4 px-8 rounded-lg"
              onClick={(e) => validateUserInput(e, 'register')}
            >
              تسجيل
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
          ) : (
            <button
              type="submit"
              className="flex items-center justify-center bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white font-DroidArabicKufiBold py-3.5 md:py-4 px-8 rounded-lg"
              onClick={(e) => validateUserInput(e, 'login')}
            >
              دخول
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
