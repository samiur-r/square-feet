import React, { useState } from 'react'
import Image from 'next/image'

import config from 'config'
import Title from 'components/Title'
import Router from 'next/router'
import aesEncrypt from 'utils/aesEncrypt'
import Toast from 'components/Toast'
import ApiClient from 'utils/ApiClient'
import PackageModal from './PackageModal'

interface PackageType {
  thumbnail: string
  title: string
  list: Array<{
    title: string
    cost: number
    numOfCredits: number
    description: string
  }>
}

interface PackageCardType {
  packageItem: PackageType
  styleRow?: boolean
  thumbnailSmall?: boolean
}

const PackageCard: React.FC<PackageCardType> = ({
  packageItem,
  thumbnailSmall,
  styleRow
}) => {
  const [openModal, setOpenModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isToastStatusError, setIsToastStatusError] = useState(true)
  const [toastMsg, setToastMsg] = useState('')

  const handlePayment = async (
    e: React.MouseEvent<HTMLElement>,
    {
      title,
      cost,
      numOfCredits
    }: {
      title: string
      cost: number
      numOfCredits: number
    }
  ) => {
    e.preventDefault()

    const responseUrl = config.kpayResponseUrl
    const errorUrl = config.kpayErrorUrl
    const trackId = new Date().valueOf()

    const paramData = {
      currencycode: '414',
      id: config.tranportalId,
      password: config.tranportalPassword,
      action: '1',
      langid: 'AR',
      amt: 20,
      responseURL: responseUrl,
      errorURL: errorUrl,
      trackid: trackId,
      udf3: 1744935905
    }

    let params = ''

    Object.keys(paramData).forEach((key) => {
      params += `${key}=${paramData[key as keyof typeof paramData]}&`
    })

    const encryptedParams = aesEncrypt(params, config.termResourceKey)

    params = `${encryptedParams}&tranportalId=${config.tranportalId}&responseURL=${responseUrl}&errorURL=${errorUrl}`

    const url = `${config.kpayUrl}?param=paymentInit&trandata=${params}`

    const payload = {
      trackId,
      amount: cost,
      packageTitle: title,
      numOfCredits,
      status: 'created'
    }

    try {
      await ApiClient({
        url: '/transaction',
        method: 'POST',
        data: { payload }
      })

      // Router.push(url)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setToastMsg(`Error: ${err.response.data}`)
      setShowToast(true)
    }
  }

  return (
    <div
      className={`${
        styleRow ? 'md:grid-cols-1' : 'md:grid-cols-2'
      } grid grid-cols-2 w-full md:w-auto place-items-center gap-5 bg-white p-2 md:p-4 rounded-lg border border-gray-300 shadow-md`}
    >
      <Toast
        msg={toastMsg}
        showToast={showToast}
        isError={isToastStatusError}
        handleSetShowToast={setShowToast}
      />
      <div>
        <div
          className={`${
            thumbnailSmall ? 'md:h-48 md:w-48' : 'md:h-64 md:w-64'
          } rounded-lg h-36 w-36 overflow-hidden relative`}
        >
          <Image
            src={`/images/${packageItem.thumbnail}`}
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
      <div className="flex flex-col gap-2 md:gap-5 justify-center items-center text-center w-full">
        <Title value={packageItem.title} />
        <div className="grid gap-3 md:w-full">
          {packageItem &&
            packageItem.list.map((item) => (
              <a
                key={item.title}
                onClick={(e) => handlePayment(e, item)}
                className="bg-secondary text-white text-sm md:text-base text-center px-5 md:px-auto py-2 md:py-4 rounded-md hover:opacity-90 transition-opacity duration-300"
              >
                {item.description}
              </a>
            ))}
        </div>
      </div>
      <PackageModal
        open={openModal}
        setOpen={setOpenModal}
        thumbnail={packageItem.thumbnail}
      />
    </div>
  )
}

export default PackageCard
