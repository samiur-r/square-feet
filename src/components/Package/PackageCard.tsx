import React, { useState } from 'react'
import Image from 'next/image'

import config from 'config'
import Title from 'components/Title'
import Router from 'next/router'
import aesEncrypt from 'utils/aesEncrypt'
import ApiClient from 'utils/ApiClient'
import { useStore } from 'store'
import PackageModal from './PackageModal'

interface PackageType {
  thumbnail: string
  title: string
  list: Array<{
    packageId: number
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
  const [isCallingApi, setIsCallingApi] = useState(false)

  const { user, updateToast } = useStore()

  const handlePayment = async (
    e: React.MouseEvent<HTMLElement>,
    {
      packageId,
      title,
      cost,
      numOfCredits
    }: {
      packageId: number
      title: string
      cost: number
      numOfCredits: number
    }
  ) => {
    e.preventDefault()
    if (!user) return Router.push('/login')

    setIsCallingApi(true)
    const responseUrl = config.kpayResponseUrl
    const errorUrl = config.kpayErrorUrl
    const trackId = new Date().valueOf()

    const paramData = {
      currencycode: '414',
      id: config.tranportalId,
      password: config.tranportalPassword,
      action: '1',
      langid: 'AR',
      amt: cost,
      responseURL: responseUrl,
      errorURL: errorUrl,
      trackid: trackId,
      udf1: numOfCredits,
      udf3: user?.phone
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
      packageId,
      amount: cost,
      packageTitle: title,
      status: 'created'
    }

    try {
      await ApiClient({
        url: '/transaction',
        method: 'POST',
        data: { payload }
      })
      setIsCallingApi(false)
      Router.push(url)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setIsCallingApi(false)
      updateToast(true, `Error: ${err.message}`, true)
    }
    return 0
  }

  return (
    <div
      className={`${
        styleRow ? 'md:grid-cols-1' : 'md:grid-cols-2'
      } grid grid-cols-2 w-full md:w-auto place-items-center gap-5 bg-white p-2 md:p-4 rounded-lg border border-gray-300 shadow-md`}
    >
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
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-5 justify-center items-center text-center w-full">
        <Title value={packageItem.title} />
        <div className="grid gap-3 md:w-full">
          {packageItem &&
            packageItem.list.map((item) => (
              <a
                key={item.packageId}
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
