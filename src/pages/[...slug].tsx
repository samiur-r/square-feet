import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { LegacyRef, useCallback, useEffect, useRef, useState } from 'react'
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
  retrievedPosts: IPost[]
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
  retrievedPosts,
  count,
  articles,
  metaTitle,
  metaDescription,
  selectedLocations,
  selectedPropertyType,
  selectedCategory,
  similarSearches
}) => {
  let offset = 10
  const {
    locationsSelected,
    propertyTypeSelected,
    categorySelected,
    setLocationsSelected,
    setPropertyTypeSelected,
    setCategorySelected,
    updateFilteredPostsCount,
    updateFilteredPosts
  } = useStore()
  const [posts, setPosts] = useState<IPost[]>(retrievedPosts)
  const [totalPosts] = useState<number | undefined>(count)
  const [postCount, setPostCount] = useState<number>(0)
  const [isCallingApi, setIsCallingApi] = useState(false)
  const [limit] = useState(10)

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
    updateFilteredPosts(posts)
  }, [posts])

  useEffect(() => {
    updateFilteredPostsCount(count)
  }, [count])

  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useOnScreen(ref)

  const fetchPosts = async () => {
    setIsCallingApi(true)
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
      offset += 10
      setPosts([...posts, ...response.data.posts])
      setPostCount((curr) =>
        response.data?.posts?.length ? curr + response.data.posts.length : curr
      )
    } catch (error) {
      setIsCallingApi(false)
    }
  }

  useEffect(() => {
    if (isIntersecting) {
      if (totalPosts && postCount < totalPosts) {
        setIsCallingApi(true)
        fetchPosts()
      }
    }
  }, [isIntersecting])

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
          top: node.getBoundingClientRect().top,
          behavior: 'smooth'
        })
      }
    },
    []
  )

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
      title: `${selectedCategory?.title} في ${getStateTitleFromCity(
        selectedLocations[0]
      )}`,
      href: `${selectedCategory?.title}/${getStateTitleFromCity(
        selectedLocations[0]
      )}`
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

  return (
    <div>
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
        <div className="flex flex-col gap-5">
          <FilterArticle articles={articles} />
          <div ref={scroll as LegacyRef<HTMLDivElement>}>
            <Title value="قد تهمك نتائج بحث مشابهة" />
          </div>
          <div className="flex gap-2">
            {similarSearches &&
              similarSearches.map((item) => (
                <Link key={Math.random()} href={item.href}>
                  <a className="text-primary cursor-pointer hover: underline w-28">
                    {item.title}
                  </a>
                </Link>
              ))}
          </div>
        </div>
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
          <div className="w-full">
            {posts &&
              posts.length > 0 &&
              posts.map((post: IPost) => (
                <Link key={post.id} href={`/post/${post.id}`}>
                  <a>
                    <PostCard key={post.id} post={post} />
                  </a>
                </Link>
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
        {totalPosts && postCount >= totalPosts ? (
          <p className="text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8">
            انتهت نتائج البحث ولا يوجد المزيد من الاعلانات
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
      url: '/search',
      data: {
        limit: 10,
        offset: 0,
        location,
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

    const retrievedPosts = response.data?.posts || []
    const count = response.data?.count || 0
    const articles = responseArticleAndMeta.data?.articles || []
    const metaTitle = responseArticleAndMeta.data?.meta_title || ''
    const metaDescription = responseArticleAndMeta.data?.meta_description || ''

    return {
      props: {
        retrievedPosts,
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