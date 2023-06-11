import type { NextPage } from 'next'
import { LegacyRef, useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import Breadcrumbs from 'components/Breadcrumbs'
import PostCard from 'components/Posts/PostCard'
import Title from 'components/Title'
import { useStore } from 'store'
import { IPost, LocationType } from 'interfaces'
import { useOnScreen } from 'hooks/useOnScreen'
import ApiClient from 'utils/ApiClient'
import { locations } from 'constant'
import Router, { useRouter } from 'next/router'

const Search: NextPage = () => {
  const {
    searchPostCount,
    locationsSelected,
    propertyTypeSelected,
    categorySelected,
    canFetchPosts,
    scrollYTo,
    scrollPosition,
    priceRangeSelected,
    keyword,
    isSearchFromFilterModal,
    updateSearchPostCount,
    updateCanFetchPosts,
    updateScrollYTo,
    updateScrollPosition,
    setArchivedLocationsSelected,
    setArchivedPropertyTypeSelected,
    setArchivedCategorySelected,
    updateFilteredArchivedPostsCount,
    updateFilteredArchivedPosts,
    updateIsSearchFromFilterModal
  } = useStore()
  const [posts, setPosts] = useState<IPost[]>([])
  const [totalPosts, setTotalPosts] = useState<number | undefined>()
  const [postCount, setPostCount] = useState<number>(0)
  const [isCallingApi, setIsCallingApi] = useState(false)
  const [isFetchingArchivedPosts, setIsFetchingArchivedPosts] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useOnScreen(ref)
  const router = useRouter()

  useEffect(() => {
    setPostCount(posts.length)
  }, [posts])

  const fetchPosts = async (limit: number, offset: number) => {
    if (!canFetchPosts && totalPosts && postCount >= totalPosts) return
    setIsCallingApi(true)
    let countPost = searchPostCount

    if (offset === 0) {
      updateSearchPostCount(0)
      countPost = 0
    }

    try {
      const response = await ApiClient({
        method: 'POST',
        url: '/search',
        data: {
          limit,
          offset,
          location: locationsSelected,
          propertyType: propertyTypeSelected,
          category: categorySelected,
          keyword: isSearchFromFilterModal ? keyword : undefined,
          priceRange: isSearchFromFilterModal
            ? {
                min: priceRangeSelected[0],
                max: priceRangeSelected[1]
              }
            : undefined
        }
      })
      setIsCallingApi(false)
      if (canFetchPosts) setPosts(response.data.posts)
      else setPosts([...posts, ...response.data.posts])
      setTotalPosts(response?.data?.count)
      updateSearchPostCount(countPost + response.data.posts.length)
      updateCanFetchPosts(false)
    } catch (error) {
      setIsCallingApi(false)
    }
  }

  useEffect(() => {
    if (isIntersecting && !canFetchPosts) {
      if (totalPosts && postCount < totalPosts) {
        setIsCallingApi(true)
        fetchPosts(
          10,
          searchPostCount ? Math.ceil(searchPostCount / 10) * 10 : 10
        )
      }
    }
  }, [isIntersecting])

  useEffect(() => {
    if (canFetchPosts) {
      setPosts([])
      fetchPosts(10, 0)
    }
  }, [canFetchPosts])

  const scroll = useCallback(
    (
      node: {
        getBoundingClientRect: () => {
          (): unknown
          new (): unknown
          top: number | undefined
        }
      } | null
    ) => {
      if (node !== null) {
        window.scrollTo({
          top: node.getBoundingClientRect().top
          // behavior: 'smooth'
        })
      }
    },
    []
  )

  useEffect(() => {
    if (scrollYTo) {
      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition,
          left: 0,
          behavior: 'smooth'
        })
      }, 500)
    }

    fetchPosts(searchPostCount ? Math.ceil(searchPostCount / 10) * 10 : 10, 0)

    const handleRouteChange = () => {
      updateScrollPosition(window.scrollY)
    }
    const handleBeforeUnload = (e: any) => {
      e.preventDefault()
      updateSearchPostCount(0)
      updateIsSearchFromFilterModal(false)
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    router.events.on('routeChangeStart', handleRouteChange)

    // Cleanup the event listener
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      updateScrollYTo(false)
    }
  }, [])

  const getStateTitleFromCity = (locationObj: LocationType) => {
    if (locationObj?.id === undefined) return ''
    if (locationObj?.state_id === null) return locationObj?.title
    const state = locations.find(
      (location) => location?.id === locationObj?.state_id
    )
    return state?.title
  }

  const breadcrumbsItems = [
    {
      title: 'الكويت',
      href: '/'
    },
    {
      title: `عقارات ${categorySelected?.title} في الكويت`,
      href: `${categorySelected?.title}`
    },
    propertyTypeSelected && propertyTypeSelected.id !== 0
      ? {
          title: `${propertyTypeSelected?.title} ${categorySelected?.title}`,
          href: `${propertyTypeSelected?.title}/${categorySelected?.title}`
        }
      : null
  ]

  const breadcrumbsItemsWithLocation = [
    {
      title: 'الكويت',
      href: '/',
      isLink: true
    },
    {
      title: `عقارات ${categorySelected?.title} في الكويت`,
      href: `${categorySelected?.title}`
    },
    {
      title: `${categorySelected?.title} في ${getStateTitleFromCity(
        locationsSelected[0]
      )}`,
      href: `${getStateTitleFromCity(locationsSelected[0])}/${
        categorySelected?.title
      }`
    },
    locationsSelected &&
    locationsSelected.length &&
    locationsSelected[0]?.state_id !== null
      ? {
          title: `${categorySelected?.title} في ${locationsSelected[0]?.title}`,
          href: `${locationsSelected[0]?.title}/${categorySelected?.title}`
        }
      : null,
    locationsSelected &&
    locationsSelected.length &&
    locationsSelected[0]?.state_id !== null &&
    propertyTypeSelected
      ? {
          title: `${propertyTypeSelected?.title} ${categorySelected?.title} في ${locationsSelected[0]?.title}`,
          href: `${locationsSelected[0]?.title}/${propertyTypeSelected?.title}/${categorySelected?.title}`
        }
      : null
  ]

  const breadcrumbsItemsFiltered = breadcrumbsItems.filter(
    (obj) => obj !== null
  )

  const breadcrumbsItemsWithLocationFiltered =
    breadcrumbsItemsWithLocation.filter((obj) => obj !== null)

  const handleArchivedPostSearch = async () => {
    setIsFetchingArchivedPosts(true)
    setArchivedLocationsSelected(locationsSelected)
    setArchivedPropertyTypeSelected(propertyTypeSelected)
    setArchivedCategorySelected(categorySelected)
    try {
      const response = await ApiClient({
        method: 'POST',
        url: '/search/archived',
        data: {
          limit: 10,
          offset: 0,
          location: locationsSelected,
          propertyType: propertyTypeSelected,
          category: categorySelected
        }
      })
      updateFilteredArchivedPostsCount(response?.data?.count)
      updateFilteredArchivedPosts(response?.data?.posts)
      setIsFetchingArchivedPosts(false)
      Router.push('/archived-posts')
    } catch (error) {
      setIsFetchingArchivedPosts(false)
    }
  }

  return (
    <div className="bg-custom-white-light min-h-screen">
      <Breadcrumbs
        breadcrumbsItems={
          locationsSelected && locationsSelected.length
            ? breadcrumbsItemsWithLocationFiltered
            : breadcrumbsItemsFiltered
        }
      />
      <div className="dir-rtl container max-w-5xl py-10 flex flex-col">
        <div className="flex flex-col gap-5">
          <div>
            <Title value="قد تهمك نتائج بحث مشابهة" />
          </div>
          <div ref={scroll as LegacyRef<HTMLDivElement>} />
          <div>
            <Link href="/">
              <a className="text-primary underline">عقارات للبيع في الكويت</a>
            </Link>
          </div>
        </div>
        <div className="container max-w-[736px] flex flex-col gap-2 mt-5 p-0">
          <div className="self-start flex gap-2 items-center">
            <Title value="نتائج البحث" />
            <p className="text-lg md:text-xl">({totalPosts || ''} إعلان)</p>
          </div>
          <div className="w-full">
            {posts &&
              posts.length > 0 &&
              posts.map((post: IPost) => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        </div>
        <div ref={ref} />
        {isCallingApi && (
          <div className="flex justify-center mt-10">
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-10 h-10 text-primary animate-spin"
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
          </div>
        )}
        {typeof totalPosts === 'number' && postCount >= totalPosts ? (
          <p className="text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8">
            {isFetchingArchivedPosts ? (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-10 h-10 text-primary animate-spin"
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
            ) : (
              <a onClick={handleArchivedPostSearch}>
                {' '}
                انتهت نتائج البحث ولا يوجد المزيد من الاعلانات
              </a>
            )}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default Search
