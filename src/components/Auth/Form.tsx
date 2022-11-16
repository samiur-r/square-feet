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
    <form className="w-full mt-10 px-3 md:px-auto dir-rtl">
      <div className="relative">
        <input
          type="number"
          name="phone"
          id="phone"
          className="block px-2.5 py-3 md:py-5 w-full text-base text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="phone"
          className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
        >
          رقم الموبايل
        </label>
      </div>
      <div className="relative mt-8">
        <input
          type="password"
          name="password"
          id="password"
          className="block px-2.5 py-3 md:py-5 w-full text-base text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="password"
          className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
        >
          كلمة السر
        </label>
      </div>
      <div className="mt-5">
        <Link href={link.href}>
          <a className="text-primary">{link.title}</a>
        </Link>
      </div>
      <div className="mt-8">
        {type === 'register' ? (
          <button
            type="submit"
            className="bg-secondary w-full opacity-80 hover:opacity-100 text-white font-bold py-4 px-10 md:rounded-lg rounded-full"
          >
            تسجيل
          </button>
        ) : (
          <button
            type="submit"
            className="bg-secondary w-full opacity-80 hover:opacity-100 text-white font-bold py-4 px-10 rounded-lg"
          >
            دخول
          </button>
        )}
      </div>
      <div className="mt-10 flex gap-3 justify-center">
        {type === 'login' ? (
          <>
            <p>لا تمتلك حساب؟</p>
            <Link href="/register">
              <a className="text-primary hover:underline">تسجيل</a>
            </Link>
          </>
        ) : (
          <>
            <p>يس لديك حساب</p>
            <Link href="/login">
              <a className="text-primary hover:underline">دخول</a>
            </Link>
          </>
        )}
      </div>
    </form>
  )
}

export default Form
