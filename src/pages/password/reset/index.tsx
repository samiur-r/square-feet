import type { NextPage } from 'next'

const PasswordReset: NextPage = () => {
  return (
    <div className="dir-rtl container max-w-md grid place-items-center py-10 md:py-16 px-8">
      <h1 className="font-semibold text-lg md:text-xl w-full md:w-auto">
        تغيير كلمة السر
      </h1>
      <p className="text-sm md:text-base text-gray-600 text-start md:text-center mt-5 tracking-wider">
        سنرسل لك رسالة نصية SMS وفيها رقم تفعيل OTP للتأكد من أن رقم موبايلك
        صحيح
      </p>
      <form className="mt-8 w-full">
        <div className="relative">
          <input
            type="number"
            name="phone"
            id="phone"
            className="block p-4 md:py-5 w-full text-gray-900 bg-transparent rounded-lg shadow-sm border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="absolute text-md text-gray-500 duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0"
          >
            رقم الموبايل
          </label>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="bg-secondary w-full opacity-80 hover:opacity-100 text-white py-4 px-8 rounded-lg"
          >
            أرسل لي رقم التفعيل SMS
          </button>
        </div>
      </form>
    </div>
  )
}

export default PasswordReset
