import Link from 'next/link'
import { useState } from 'react'

import { userSchema } from 'validations/UserValidation'
import ApiClient from 'utils/ApiClient'
import Description from 'components/Description'
import Modal from 'components/Modal'
import Title from 'components/Title'
import Toast from 'components/Toast'

interface AuthFormProps {
  type: string
  link: {
    title: string
    href: string
  }
}

const Form: React.FC<AuthFormProps> = ({ type, link }) => {
  const [phone, setPhone] = useState<number | undefined>(undefined)
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isToastStatusError, setIsToastStatusError] = useState(true)
  const [toastMsg, setToastMsg] = useState('')

  const handleAuth = async (e: React.MouseEvent<HTMLElement>, opt: string) => {
    e.preventDefault()
    const data = {
      phone,
      password
    }

    try {
      await userSchema.validate(data, { abortEarly: false })
      setErrors([])

      const response = await ApiClient({
        method: 'POST',
        url: `/user/${opt}`,
        data: { phone, password }
      })

      setIsToastStatusError(false)
      setToastMsg(
        `Success: ${opt === 'login' ? 'logged in' : 'registered'} successfully`
      )
      setShowToast(true)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error?.name === 'ValidationError') {
        setErrors(error.inner?.map((err: { message: string }) => err.message))
        setIsModalOpen(true)
      } else {
        setIsToastStatusError(true)
        setToastMsg(`Error: ${opt} attempt failed`)
        setShowToast(true)
      }
    }
  }

  return (
    <>
      <Toast
        msg={toastMsg}
        showToast={showToast}
        isError={isToastStatusError}
        handleSetShowToast={setShowToast}
      />
      <Modal
        type="error"
        isModalOpen={isModalOpen}
        handleIsModalOpen={setIsModalOpen}
      >
        <Title value="مدخل غير صالح" />
        <div className="mt-5 flex flex-col gap-2 text-start">
          {errors &&
            errors.length > 0 &&
            errors.map((error) => (
              <p key={Math.random()} className="text-red-600">
                *{error}
              </p>
            ))}
        </div>
      </Modal>
      <form className="w-full mt-10 px-3 md:px-auto dir-rtl">
        <div className="relative">
          <input
            type="number"
            name="phone"
            id="phone"
            className="block px-4 py-2.5 md:py-4 w-full shadow-sm text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            onChange={(e) => setPhone(parseInt(e.target.value, 10))}
          />
          <label
            htmlFor="phone"
            className="absolute text-custom-gray duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0"
          >
            رقم الموبايل
          </label>
        </div>
        <div className="relative mt-8">
          <input
            type="password"
            name="password"
            id="password"
            className="block px-4 py-2.5 md:py-4 w-full shadow-sm text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className="absolute text-md text-custom-gray duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-1 peer-focus:right-1 peer-placeholder-shown:right-0"
          >
            كلمة السر
          </label>
        </div>
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
              onClick={(e) => handleAuth(e, 'register')}
            >
              تسجيل
            </button>
          ) : (
            <button
              type="submit"
              className="bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white font-DroidArabicKufiBold py-3.5 md:py-4 px-8 rounded-lg"
              onClick={(e) => handleAuth(e, 'login')}
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
