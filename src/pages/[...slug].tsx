import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { locations, categories, propertyTypes } from 'constant'
import Breadcrumbs from 'components/Breadcrumbs'
import PostCard from 'components/Posts/PostCard'
import FilterArticle from 'components/Articles/Filter'
import Title from 'components/Title'
import { useStore } from 'store'
import { IPost, LocationType } from 'interfaces'
import { useOnScreen } from 'hooks/useOnScreen'
import ApiClient from 'utils/ApiClient'
import Router, { useRouter } from 'next/router'

const getStateTitleFromCity = (locationObj: LocationType) => {
  if (locationObj?.id === undefined) return ''
  if (locationObj?.state_id === null)
    return locationObj?.title?.replace(/\s+/g, '-')
  const state = locations.find(
    (location) => location?.id === locationObj?.state_id
  )
  return state?.title?.replace(/\s+/g, '-')
}

interface PageProps {
  count: number
  articles: string[]
  metaTitle: string
  metaDescription: string
  selectedLocations: LocationType[]
  selectedPropertyType: { id: number; title: string }
  selectedCategory: { id: number; title: string }
  similarSearches: Array<{ title: string; href: string }>
}

const Search: NextPage<PageProps> = ({
  count,
  articles,
  metaTitle,
  metaDescription,
  selectedLocations,
  selectedPropertyType,
  selectedCategory,
  similarSearches
}) => {
  const {
    locationsSelected,
    propertyTypeSelected,
    categorySelected,
    scrollYTo,
    scrollPosition,
    filterPostCount,
    updateFilterPostCount,
    setLocationsSelected,
    setPropertyTypeSelected,
    setCategorySelected,
    updateScrollYTo,
    updateScrollPosition,
    setArchivedLocationsSelected,
    setArchivedPropertyTypeSelected,
    setArchivedCategorySelected,
    updateFilteredArchivedPostsCount,
    updateFilteredArchivedPosts
  } = useStore()
  const [posts, setPosts] = useState<IPost[]>([])
  const [totalPosts, setTotalPosts] = useState<number | undefined>(undefined)
  const [postCount, setPostCount] = useState<number>(0)
  const [isCallingApi, setIsCallingApi] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [showPageData, setShowPageData] = useState(false)
  const [isFetchingArchivedPosts, setIsFetchingArchivedPosts] = useState(false)

  useEffect(() => {
    setLocationsSelected(selectedLocations)
  }, [selectedLocations])

  useEffect(() => {
    setPropertyTypeSelected(selectedPropertyType)
  }, [selectedPropertyType])

  useEffect(() => {
    setCategorySelected(selectedCategory)
  }, [selectedCategory])

  useEffect(() => {
    setPostCount(posts.length)
  }, [posts])

  useEffect(() => {
    setTotalPosts(count)
  }, [count])

  const router = useRouter()

  const ref = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<any>(null)
  const isIntersecting = useOnScreen(ref)

  const fetchPosts = async (limit: number, offset: number) => {
    if (totalPosts && postCount >= totalPosts) return
    setIsCallingApi(true)

    let countPost = filterPostCount

    if (offset === 0) {
      updateFilterPostCount(0)
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
          category: categorySelected
        }
      })
      setIsCallingApi(false)
      setPosts([...posts, ...response.data.posts])
      updateFilterPostCount(countPost + response.data.posts.length)
      setIsFirstRender(false)
    } catch (error) {
      setIsCallingApi(false)
    }
  }

  useEffect(() => {
    if (isIntersecting && !isFirstRender) {
      if (totalPosts && postCount < totalPosts) {
        setIsCallingApi(true)
        fetchPosts(
          10,
          filterPostCount ? Math.ceil(filterPostCount / 10) * 10 : 10
        )
      }
    }
  }, [isIntersecting])

  useEffect(() => {
    if (scrollYTo) {
      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition,
          left: 0,
          behavior: 'smooth'
        })
      }, 500)
    } else if (scrollRef.current)
      setTimeout(() => {
        scrollRef.current.scrollIntoView({ behavior: 'auto' })
      }, 300)

    setTimeout(() => {
      setShowPageData(true)
    }, 100)

    const handleRouteChange = () => {
      updateScrollPosition(window.scrollY)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    fetchPosts(filterPostCount ? Math.ceil(filterPostCount / 10) * 10 : 10, 0)

    const handleBeforeUnload = (e: any) => {
      e.preventDefault()
      updateFilterPostCount(0)
    }
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      router.events.off('routeChangeStart', handleRouteChange)
      updateScrollYTo(false)
    }
  }, [])

  // const scroll = useCallback(
  //   (
  //     node: {
  //       getBoundingClientRect: () => {
  //         (): unknown
  //         new (): unknown
  //         top: number | undefined
  //       }
  //     } | null
  //   ) => {
  //     if (node !== null) {
  //       window.scrollTo({
  //         top: node.getBoundingClientRect().top,
  //         // @ts-ignore
  //         behavior: 'smooth'
  //       })
  //     }
  //   },
  //   []
  // )

  const breadcrumbsItems = [
    {
      title: 'الكويت',
      href: '/'
    },
    {
      title: `عقارات ${selectedCategory?.title} في الكويت`,
      href: `${selectedCategory?.title}`
    },
    selectedPropertyType &&
    Object.keys(selectedPropertyType).length !== 0 &&
    selectedPropertyType.id !== 0
      ? {
          title: `${selectedPropertyType?.title} ${selectedCategory?.title}`,
          href: `${selectedCategory?.title}/${selectedPropertyType?.title}`
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
      title: `عقارات ${selectedCategory?.title} في الكويت`,
      href: `${selectedCategory?.title}`
    },
    {
      title: `${selectedCategory?.title} في ${
        selectedLocations && selectedLocations.length
          ? getStateTitleFromCity(selectedLocations[0])
          : ''
      }`,
      href: `${selectedCategory?.title}/${
        selectedLocations && selectedLocations.length
          ? getStateTitleFromCity(selectedLocations[0])
          : ''
      }`
    },
    selectedLocations &&
    selectedLocations.length &&
    selectedLocations[0]?.state_id !== null
      ? {
          title: `${selectedCategory?.title} في ${selectedLocations[0]?.title}`,
          href: `${
            selectedCategory?.title
          }/${selectedLocations[0]?.title?.replace(/\s+/g, '-')}`
        }
      : null,
    selectedLocations &&
    selectedLocations.length &&
    selectedLocations[0]?.state_id !== null &&
    Object.keys(selectedPropertyType).length !== 0
      ? {
          title: `${selectedPropertyType?.title} ${selectedCategory?.title} في ${selectedLocations[0]?.title}`,
          href: `${selectedCategory?.title}/${
            selectedPropertyType?.title
          }/${selectedLocations[0]?.title?.replace(/\s+/g, '-')}`
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
      <Head>
        <title>{metaTitle || ''}</title>
        <meta name="description" content={metaDescription || ''} />
      </Head>
      <Breadcrumbs
        breadcrumbsItems={
          selectedLocations && selectedLocations.length
            ? breadcrumbsItemsWithLocationFiltered
            : breadcrumbsItemsFiltered
        }
      />
      <div className="dir-rtl container max-w-5xl py-10 flex flex-col">
        {showPageData && (
          <div className="flex flex-col gap-5">
            <FilterArticle articles={articles} />
            <div>
              <Title value="قد تهمك نتائج بحث مشابهة" />
            </div>
            <div className="flex flex-col flex-wrap gap-3 max-h-52">
              {similarSearches &&
                similarSearches.map((item) => (
                  <Link key={Math.random()} href={item.href}>
                    <a className="text-primary cursor-pointer hover:underline">
                      {item.title}
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        )}
        <div className="container max-w-[736px] flex flex-col gap-2 mt-10 p-0">
          <div className="self-start flex gap-2 items-center">
            <Title
              value={`${
                selectedPropertyType && selectedPropertyType.id !== 0
                  ? selectedPropertyType.title
                  : ''
              } ${selectedCategory ? selectedCategory.title : ''} في ${
                selectedLocations && selectedLocations.length
                  ? selectedLocations[0].title
                  : 'الكويت'
              }`}
            />
            <p className="text-lg md:text-xl">({totalPosts || 0} إعلان)</p>
          </div>
          <div ref={scrollRef} className="w-full">
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params || !params?.slug || !params.slug.length) {
    return {
      props: {}
    }
  }

  if (
    params.slug[0] === 'post' ||
    params.slug[0] === 'agent' ||
    params.slug[0] === 'admin' ||
    params.slug[0] === 'المكاتب'
  )
    return {
      notFound: true // return a 404 page
    }

  const slugs: string[] = params.slug as string[]
  let propertyType: { id: number; title: string } | undefined
  let category: { id: number; title: string } | undefined
  let location:
    | { id: number; title: string; state_id: null; count: number }
    | { id: number; title: string; state_id: number; count: number }
    | undefined

  slugs.forEach((item, index) => {
    if (index === 0) {
      category = categories.find((element) => element.title === item)
    }
    if (index === 1) {
      propertyType = propertyTypes.find((element) => element.title === item)

      if (!propertyType) {
        const locationTitle = item.replace(/-/g, ' ')
        location = locations.find((element) => element.title === locationTitle)
      }
    }
    if (index === 2) {
      const locationTitle = item.replace(/-/g, ' ')
      location = locations.find((element) => element.title === locationTitle)
    }
  })

  if (!category)
    return {
      notFound: true // return a 404 page
    }

  const similarSearches: Array<{ title: string; href: string }> = [
    {
      title: `عقارات ${category?.title} في الكويت`,
      href: `${category?.title}`
    }
  ]

  if (!propertyType && !location) {
    propertyTypes.forEach((type) => {
      if (type.id !== 0) {
        similarSearches.push({
          title: `${type.title} ${category?.title} في الكويت`,
          href: `${category?.title}/${type.title}`
        })
      }
    })
  } else if (!propertyType && location) {
    propertyTypes.forEach((type) => {
      if (type.id === 1 || type.id === 2 || type.id === 3) {
        similarSearches.push({
          title: `${category?.title} ${type.title} في ${location?.title}`,
          href: `${category?.title}/${type.title}/${location?.title.replace(
            /\s+/g,
            '-'
          )}`
        })
      }
    })
  } else if (propertyType && location) {
    similarSearches.push({
      title: `${category?.title} في ${location?.title}`,
      href: `${category?.title}/${location?.title.replace(/\s+/g, '-')}`
    })
    similarSearches.push({
      title: `${category?.title} في ${location?.title}`,
      href: `${category?.title}/${location?.title.replace(/\s+/g, '-')}`
    })
    similarSearches.push({
      title: `${category?.title} في ${getStateTitleFromCity(location)}`,
      href: `${category?.title}/${getStateTitleFromCity(location)}`
    })
    similarSearches.push({
      title: `${propertyType?.title} ${
        category?.title
      } في ${getStateTitleFromCity(location)}`,
      href: `${category?.title}/${propertyType?.title}/${getStateTitleFromCity(
        location
      )}`
    })
  }

  try {
    const response = await ApiClient({
      method: 'POST',
      url: '/search/count',
      data: {
        location: location ? [location] : null,
        propertyType,
        category
      }
    })

    const responseArticleAndMeta = await ApiClient({
      method: 'POST',
      url: '/page-content',
      data: {
        location,
        propertyType,
        category
      }
    })

    const count = response.data?.totalPosts || 0
    const articles = responseArticleAndMeta.data?.articles || []
    const metaTitle = responseArticleAndMeta.data?.meta_title || ''
    const metaDescription = responseArticleAndMeta.data?.meta_description || ''

    return {
      props: {
        count,
        articles,
        metaTitle,
        metaDescription,
        selectedLocations: location ? [location] : [],
        selectedPropertyType: propertyType || {
          id: 0,
          title: 'الكل'
        },
        selectedCategory: category || {},
        similarSearches
      }
    }
  } catch (error) {
    return {
      props: {}
    }
  }
}

export default Search
