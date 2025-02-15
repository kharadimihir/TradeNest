import React from 'react'

const OpenAccount = () => {
  return (
    <div className="w-full p-5 h-full flex flex-col items-center justify-center mx-auto">
      <div className="flex flex-col items-center justify-center gap-6 mt-24">
        <h1 className="text-4xl font-semibold">Open a Zerodha Account</h1>
        <p className="text-gray-700">
          Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.
        </p>
        <button className="bg-blue-500 text-white px-12 py-3 rounded-xl mt-1 cursor-pointer text-xl">
          Sign up Now
        </button>
      </div>
    </div>
  )
}

export default OpenAccount
