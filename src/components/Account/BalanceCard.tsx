import React from 'react'

const BalanceCard = () => {
  return (
    <div className="border border-gray-300 w-full md:w-auto px-3 md:px-20 py-8 rounded-md">
      <h2 className="text-2xl text-center">رصيدك من الاعلانات</h2>
      <div className="mt-8 flex gap-16">
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xl text-primary font-bold">0</p>
          <p className="text-xl text-gray-600">مجاني</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xl text-primary font-bold">0</p>
          <p className="text-xl text-gray-600">مجاني</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xl text-primary font-bold">0</p>
          <p className="text-xl text-gray-600">مجاني</p>
        </div>
      </div>
      <button
        type="submit"
        className="bg-secondary text-white rounded-lg w-full mt-8 py-4 opacity-80"
      >
        اشحن الرصيد
      </button>
    </div>
  )
}

export default BalanceCard
