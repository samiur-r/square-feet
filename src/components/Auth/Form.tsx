import Description from 'components/Description'
import Link from 'next/link'

interface AuthFormProps {
  type: string
  link: {
    title: string
    href: string
  }
}

const Form: React.FC<AuthFormProps> = ({ type, link }) => {
  return (
    <form className="w-full mt-10 md:px-auto dir-rtl">
      <div className="relative">
        <input
          type="number"
          name="phone"
          id="phone"
          className="block px-4 py-2.5 md:py-4 w-full shadow-sm text-custom-gray bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
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
          className="block px-4 py-2.5 md:py-4 w-full shadow-sm text-custom-gray bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
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
      <div className="mt-5">
        {type === 'register' ? (
          <button
            type="submit"
            className="bg-secondary w-full opacity-80 hover:opacity-100 text-white font-bold py-3.5 md:py-4 px-8 rounded-lg"
          >
            تسجيل
          </button>
        ) : (
          <button
            type="submit"
            className="bg-secondary w-full opacity-80 hover:opacity-100 text-white font-bold py-3.5 md:py-4 px-8 rounded-lg"
          >
            دخول
          </button>
        )}
      </div>
      <div className="mt-5">
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
  )
}

export default Form
