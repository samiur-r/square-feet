import type { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Popover } from '@headlessui/react'
import Router from 'next/router'

import AutoComplete from 'components/AutoComplete'
import ListBox from 'components/ListBox'
import Title from 'components/Title'
import Description from 'components/Description'
import { useStore } from 'store'
import MediaUploader from 'components/MediaUploader'
import { postSchema } from 'validations/PostValidation'
import ApiClient from 'utils/ApiClient'
import { IPost, LocationType } from 'interfaces'
import { locations, propertyTypes, categories } from 'constant'
import PackageModal from 'components/Package/PackageModal'
import config from 'config'
import aesEncrypt from 'utils/aesEncrypt'
import createFileObjFromUrlStr from 'utils/createFileObjFromUrlStr'

const CreatePost: NextPage<{ post?: IPost | undefined; mode: string }> = ({
  post,
  mode
}) => {
  const [scrollToTop, setScrollToTop] = useState(false)
  const { admin, user, updateToast } = useStore()
  const [cityErrors, setCityErrors] = useState<string[]>([])
  const [propertyTypeErrors, setPropertyTypeErrors] = useState<string[]>([])
  const [purposeErrors, setPurposeErrors] = useState<string[]>([])
  const [descriptionErrors, setDescriptionErrors] = useState<string[]>([])

  const [selectedLocation, setSelectedLocation] = useState<LocationType | any>(
    post
      ? {
          id: post.city_id,
          title: post.city_title,
          state_id: post.state_id,
          count: post.views
        }
      : undefined
  )
  const [selectedPropertyType, setSelectedPropertyType] = useState<
    { id: number; title: string } | undefined
  >(post ? { id: post.property_id, title: post.property_title } : undefined)
  const [selectedPurpose, setSelectedPurpose] = useState<
    { id: number; title: string } | undefined
  >(post ? { id: post.category_id, title: post.category_title } : undefined)
  const [price, setPrice] = useState<number | undefined>(
    post && post.price !== null ? post.price : undefined
  )
  const [description, setDescription] = useState<string | undefined>(
    post && post.description !== null ? post.description : undefined
  )
  const [mediaList, setMediaList] = useState<Array<string>>([])
  const [isCallingApi, setIsCallingApi] = useState(false)
  const [openPackageModal, setOpenPackageModal] = useState(false)
  const [isStickyDirectPost, setIsStickyDirectPost] = useState(false)

  const handleMediaListForEdit = async (media: string[]) => {
    const multimediaList: string[] = await Promise.all(
      media.map((f) => {
        return createFileObjFromUrlStr(f)
      })
    )
    setMediaList(() => [...multimediaList])
  }

  useEffect(() => {
    if (post?.media?.length) handleMediaListForEdit(post.media)
  }, [post?.media])

  useEffect(() => {
    if (selectedLocation) setCityErrors([])
  }, [selectedLocation])

  useEffect(() => {
    if (selectedPropertyType !== undefined) setPropertyTypeErrors([])
  }, [selectedPropertyType])

  useEffect(() => {
    if (selectedPurpose !== undefined) setPurposeErrors([])
  }, [selectedPurpose])

  useEffect(() => {
    if (description !== undefined) setDescriptionErrors([])
  }, [description])

  const handleValidationError = (
    errors: Array<{ path: string; errors: string[] }>
  ) => {
    errors?.forEach((err: { path: string; errors: string[] }) => {
      switch (err.path) {
        case 'cityId' || 'cityTitle':
          setCityErrors(err.errors)
          break
        case 'propertyId' || 'propertyTitle':
          setPropertyTypeErrors(err.errors)
          break
        case 'categoryId' || 'categoryTitle':
          setPurposeErrors(err.errors)
          break
        case 'description':
          setDescriptionErrors(err.errors)
          break
        default:
          break
      }
    })
    return 0
  }

  const handlePayment = async (postInfo: any) => {
    const responseUrl = config.kpayResponseUrl
    const errorUrl = config.kpayErrorUrl
    const trackId = new Date().valueOf()

    // eslint-disable-next-line no-param-reassign
    postInfo.trackId = trackId

    const paramData = {
      currencycode: '414',
      id: config.tranportalId,
      password: config.tranportalPassword,
      action: '1',
      langid: 'AR',
      amt: 12,
      responseURL: responseUrl,
      errorURL: errorUrl,
      trackid: trackId,
      udf1: 1,
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
      packageId: 7,
      amount: 12,
      packageTitle: 'stickyDirect',
      status: 'created'
    }

    try {
      await ApiClient({
        url: '/transaction',
        method: 'POST',
        data: { payload }
      })
      await ApiClient({
        method: 'POST',
        url: '/post/temp',
        data: { postInfo },
        headers: {
          'content-type': 'application/json'
        }
      })
      setIsCallingApi(false)
      Router.push(url)
    } catch (error: any) {
      if (error.name === 'ValidationError') {
        handleValidationError(error.inner)
        return 0
      }
      updateToast(true, `Error: ${error?.response?.data}`, true)
    }
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const state = locations.filter(
      (location) => location.id === selectedLocation?.state_id
    )
    const postInfo = {
      cityId: selectedLocation?.id,
      cityTitle: selectedLocation?.title,
      stateId: state[0]?.id,
      stateTitle: state[0]?.title,
      propertyId: selectedPropertyType?.id,
      propertyTitle: selectedPropertyType?.title,
      categoryId: selectedPurpose?.id,
      categoryTitle: selectedPurpose?.title,
      price,
      description,
      multimedia: mediaList,
      isStickyPost: isStickyDirectPost,
      phone: user?.phone
    }

    try {
      await postSchema.validate(postInfo, { abortEarly: false })
      setIsCallingApi(true)

      if (isStickyDirectPost) {
        const response = await ApiClient({
          method: 'GET',
          url: '/credits/sticky-credit'
        })

        if (response.data.success === 0) {
          await handlePayment(postInfo)
          return
        }
      }

      let response

      if (mode === 'create') {
        response = await ApiClient({
          method: 'POST',
          url: '/post',
          data: { postInfo },
          headers: {
            'content-type': 'application/json'
          }
        })
      } else {
        response = await ApiClient({
          method: 'PUT',
          url: '/post',
          data: { postInfo, postId: post?.id },
          headers: {
            'content-type': 'application/json'
          }
        })
      }
      setIsCallingApi(false)
      updateToast(true, `Success: ${response?.data.success}`, false)
      if (admin) Router.push('/admin/posts')
      else Router.push('/account')
    } catch (error: any) {
      setIsCallingApi(false)
      if (error.name === 'ValidationError') {
        handleValidationError(error.inner)
        return 0
      }
      updateToast(true, `Error: ${error?.response?.data}`, true)
    }
  }

  const scrollToAutocomplete = () => {
    setScrollToTop(true)
  }

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      window.scrollTo({
        top: 150,
        left: 0,
        behavior: 'smooth'
      })
      setScrollToTop(false)
    }
  }, [scrollToTop])

  const handleStickyDirect = () => {
    setIsStickyDirectPost(!isStickyDirectPost)
  }

  return (
    <div className="dir-rtl container max-w-6xl py-10 flex flex-col gap-3 items-center">
      <PackageModal
        open={openPackageModal}
        setOpen={setOpenPackageModal}
        thumbnail="sticky-direct.png"
      />
      <div className="md:text-center w-full">
        <Title value="إضافة إعلان" />
      </div>
      <div className="w-full md:text-center">
        <Description value="أدخل البيانات التالية لإضافة اعلان" />
      </div>
      <form className="w-full max-w-md px-3 md:px-0 mt-8 md:mt-10">
        <div className="relative">
          <Popover className="relative">
            <Popover.Panel className="absolute z-10 -top-14 right-2 text-secondary bg-custom-white-light shadow-md p-2 rounded-md">
              Hey! You can not edit this field
            </Popover.Panel>
            <Popover.Button className="w-full">
              <input
                type="number"
                name="phone"
                id="phone"
                className="block bg-custom-gray-3 px-4 py-2.5 md:py-4 w-full text-custom-gray rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=""
                value={post?.phone || user?.phone}
                readOnly
              />
            </Popover.Button>
            <label
              htmlFor="phone"
              className="absolute cursor-text text-md text-custom-gray duration-300 top-2 transform -translate-y-5 scale-75 z-10 bg-white px-1 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0"
            >
              رقم الموبايل{' '}
            </label>
          </Popover>
        </div>
        <div
          className="mt-8 md:mt-10"
          onClick={() => {
            if (window?.innerWidth < 768) scrollToAutocomplete()
          }}
        >
          <AutoComplete
            locations={locations}
            selectedLocation={selectedLocation}
            handleSetSelectedLocation={setSelectedLocation}
            isError={cityErrors.length >= 1}
          />
          {cityErrors && (
            <div className="flex flex-col gap-2">
              {cityErrors.map((err) => (
                <div
                  key={Math.random()}
                  className="mt-3 text-custom-red text-sm"
                >
                  {err}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 md:mt-10">
          <ListBox
            selectedOpt={selectedPropertyType}
            options={propertyTypes}
            placeholder="نوع العقار"
            isFloatingLabel
            handleSetItem={setSelectedPropertyType}
            isError={propertyTypeErrors.length >= 1}
          />
          {propertyTypeErrors && (
            <div className="flex flex-col gap-2">
              {propertyTypeErrors.map((err) => (
                <div
                  key={Math.random()}
                  className="mt-3 text-custom-red text-sm"
                >
                  {err}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 md:mt-10">
          <ListBox
            selectedOpt={selectedPurpose}
            options={categories}
            placeholder="الغرض"
            isFloatingLabel
            handleSetItem={setSelectedPurpose}
            isError={purposeErrors.length >= 1}
          />
          {purposeErrors && (
            <div className="flex flex-col gap-2">
              {purposeErrors.map((err) => (
                <div
                  key={Math.random()}
                  className="mt-3 text-custom-red text-sm"
                >
                  {err}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative mt-8 md:mt-10">
          <input
            type="number"
            name="price"
            id="price"
            defaultValue={price}
            className="block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            onChange={(e) => setPrice(parseInt(e.target.value, 10))}
          />
          <label
            htmlFor="price"
            className="whitespace-nowrap absolute cursor-text text-md text-custom-gray duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 -right-1 peer-focus:-right-1 peer-placeholder-shown:right-0"
          >
            السعر (اختياري)
          </label>
        </div>
        <div className="relative mt-8 md:mt-10">
          <textarea
            name="description"
            rows={7}
            className={`${
              descriptionErrors.length
                ? 'border-custom-red'
                : 'border-custom-gray-border'
            } block p-4 w-full text-base text-black bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
            placeholder=" "
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label
            htmlFor="description"
            className={`${
              descriptionErrors.length ? 'text-custom-red' : 'text-custom-gray'
            } absolute pointer-events-none cursor-text text-md duration-300 transform -translate-y-4 scale-75 top-1 z-10 bg-white px-0 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:top-8 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 -right-2 peer-focus:-right-3`}
          >
            اكتب تفاصيل الاعلان هنا{' '}
          </label>
        </div>
        {descriptionErrors && (
          <div className="flex flex-col gap-2">
            {descriptionErrors.map((err) => (
              <div key={Math.random()} className="mt-3 text-custom-red text-sm">
                {err}
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center items-center w-full mt-8 md:mt-10">
          <MediaUploader
            handleSetMediaList={setMediaList}
            mediaList={mediaList}
            mode={mode}
            hasMedia={post?.media?.length}
          />
        </div>
        {mode === 'create' && (
          <div className="flex items-center gap-3 mt-8 md:mt-10">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-custom-gray rounded border-custom-gray-border focus:ring-blue-500 focus:ring-2"
              onChange={handleStickyDirect}
            />
            <span className="font-medium">
              <a
                className="hover:underline flex gap-3 cursor-pointer"
                onClick={() => setOpenPackageModal(true)}
              >
                <p className="text-primary text-xs md:text-sm">
                  إجعل إعلاني مميزًا مقابل 12 دك
                </p>
                <p className="text-secondary text-xs md:text-sm whitespace-nowrap">
                  (لمعرفة المزيد)
                </p>
              </a>
            </span>
          </div>
        )}
        <div className="mt-3 md:mt-5">
          <button
            type="submit"
            className="bg-secondary text-white rounded-lg w-full mt-8 py-3 md:py-4 hover:opacity-90 transition-opacity duration-300"
            onClick={(e) => handleSubmit(e)}
          >
            إضافة الإعلان{' '}
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
      </form>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query
}) => {
  if (query?.mode === 'edit') {
    try {
      const response = await ApiClient({
        method: 'GET',
        url: `/post/edit/${query?.id}`,
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      })

      return {
        props: {
          post: response?.data?.success ? response?.data?.success : undefined,
          mode: query.mode
        }
      }
    } catch (error) {
      return {
        redirect: {
          destination: '/post?mode=create',
          permanent: false
        }
      }
    }
  }

  return {
    props: { mode: query.mode }
  }
}

export default CreatePost
