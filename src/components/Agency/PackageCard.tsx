import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import config from 'config'
import Title from 'components/Title'
import Router from 'next/router'
import aesEncrypt from 'utils/aesEncrypt'
import PackageModal from './PackageModal'

const PackageCard: React.FC<{
  styleRow?: boolean
  thumbnailSmall?: boolean
}> = ({ thumbnailSmall, styleRow }) => {
  const [openModal, setOpenModal] = useState(false)

  const handlePayment = async () => {
    const responseUrl = 'https://boshamlan-ui.vercel.app/api/response'
    const errorUrl = 'https://boshamlan-ui.vercel.app/api/error'

    const paramData = {
      currencycode: '414',
      id: config.tranportalId,
      password: config.tranportalPassword,
      action: '1',
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

    const encryptedParams = aesEncrypt(params, config.termResourceKey)

    params = `${encryptedParams}&tranportalId=${config.tranportalId}&responseURL=${responseUrl}&errorURL=${errorUrl}`

    const url = `${config.kpayUrl}?param=paymentInit&trandata=${params}`

    // const kpayUrl =
    //   'https://www.kpay.com.kw/kpg/PaymentHTTP.htm?param=paymentInit&trandata=89276834b6f2e8f81346d4149fb59decb7d091a044602310588136f32ecf904011db3ce14347ba441af1d46a2a4d5484e3623076378620171511bd8f5a63c4f673e1dd624ff07538fd701ce8609665d2fbf58b072c291aafaf25caf1bd4376a8e8406899a593cbbf56ba70d9bc9384f9cfd0ee989fa695fdb183821e5a906c3067248fc0249e538ac04196e4f07794591879998d9efdc248b0441d72d10886f966cc1564fa673a292f2825f2fc5a426518437da8c72a4fe937b5f6f76140998c00a5841cecb6a313deab2b992bcfa5d012d6487b8c2e3b7726a34df19cf54477&tranportalId=322701&responseURL=https://boshamlan-ui.vercel.app/api/response&errorURL=https://boshamlan-ui.vercel.app/api/error'

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
