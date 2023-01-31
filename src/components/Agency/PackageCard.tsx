import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CryptoJS from 'crypto-js'

import Title from 'components/Title'
import Router from 'next/router'
import PackageModal from './PackageModal'
// import ApiClient from 'utils/ApiClient'
// import axios from 'axios'

const PackageCard: React.FC<{
  styleRow?: boolean
  thumbnailSmall?: boolean
}> = ({ thumbnailSmall, styleRow }) => {
  const [openModal, setOpenModal] = useState(false)

  const aesEncrypt = (content: string, key: string) => {
    const parsedKey = CryptoJS.enc.Utf8.parse(key)
    const encrypted = CryptoJS.AES.encrypt(content, parsedKey, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.toString()
  }

  const handlePayment = async () => {
    const tranportalId = 268901
    const responseUrl = 'https://boshamlan-ui.vercel.app/api/response'
    const errorUrl = 'https://boshamlan-ui.vercel.app/api/error'
    const termResourceKey = 'CAPMV61B247E6Q17'

    const paramData = {
      currencycode: 414,
      id: tranportalId,
      password: '268901pg',
      action: 1,
      langid: 'AR',
      amt: 20,
      responseURL: responseUrl,
      errorURL: errorUrl,
      trackid: Math.random(),
      udf3: 1744935905
    }

    let params = ''

    Object.keys(paramData).forEach((key) => {
      params += `${key}=${paramData[key as keyof typeof paramData]}&`
    })

    const encryptedParams = aesEncrypt(params, termResourceKey)

    params = `${encryptedParams}&tranportalId=${tranportalId}&responseURL=${responseUrl}&errorURL=${errorUrl}`

    const url = `https://www.kpay.com.kw/kpg/PaymentHTTP.htm?param=paymentInit&trandata=${params}`

    Router.push(url)
  }

  return (
    <div
      className={`${
        styleRow ? 'md:grid-cols-1' : 'md:grid-cols-2'
      }  grid grid-cols-2 w-full md:w-auto place-items-center gap-5 bg-white p-2 md:p-4 rounded-lg border border-gray-300 shadow-md`}
    >
      <div>
        <div
          className={`${
            thumbnailSmall ? 'md:h-48 md:w-48' : 'md:h-64 md:w-64'
          } rounded-lg h-36 w-36 overflow-hidden relative`}
        >
          <Image
            src="/images/subscribe.png"
            layout="fill"
            objectFit="contain"
            alt="package"
          />
          <div className="absolute w-full h-full  bg-gray-900 opacity-40" />
          <button
            type="submit"
            className="absolute w-full h-full flex items-center justify-center"
            onClick={() => setOpenModal(true)}
          >
            <Title value="اضغط هنا للتفاصيل" light />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-5 justify-center items-center w-full">
        <Title value="باقة المكاتب" />
        <div className="grid gap-3 md:w-full">
          <Link href="#">
            <a
              onClick={handlePayment}
              className="bg-secondary text-white text-sm md:text-base text-center px-5 md:px-auto py-2 md:py-4 rounded-md hover:opacity-90 transition-opacity duration-300"
            >
              2 أشهر 100 دك
            </a>
          </Link>

          <Link href="#">
            <a
              onClick={handlePayment}
              className="bg-secondary text-white text-center text-sm md:text-base px-5 md:px-auto py-2 md:py-4 rounded-md hover:opacity-90 transition-opacity duration-300"
            >
              6 أشهر 270 دك
            </a>
          </Link>
        </div>
      </div>
      <PackageModal open={openModal} setOpen={setOpenModal} />
    </div>
  )
}

export default PackageCard
