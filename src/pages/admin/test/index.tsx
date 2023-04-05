import PaginationNew from 'components/Admin/PaginationNew'
import TestDataTable from 'components/Admin/TestDataTable'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import ApiClient from 'utils/ApiClient'
import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'

interface TestProps {
  items: any[]
  totalPages: number | null
}

const Test: NextPage<TestProps> = ({ items, totalPages }) => {
  const [itemsList, setItemsList] = useState<any[]>([])
  const [currentItemList, setCurrentItemList] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  const fetchItems = async () => {
    setCurrentItemList([])
    setIsLoading(true)
    try {
      const response = await ApiClient({
        method: 'POST',
        url: '/admin/get-test',
        data: { offset: pageNumber ? pageNumber * 10 - 10 : 0 }
      })
      setItemsList([
        ...itemsList,
        { page: pageNumber, items: response.data.items ?? [] }
      ])
      setCurrentItemList(response.data.items ?? [])
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (pageNumber) {
      const foundItem = itemsList.find((item) => item.page === pageNumber)
      if (foundItem) setCurrentItemList(foundItem.items)
      else fetchItems()
    }
  }, [pageNumber])

  useEffect(() => {
    setItemsList([{ page: 1, items }])
    setIsLoading(false)
  }, [items])

  return (
    <div>
      <div className="border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Test
          </h1>
        </div>
      </div>
      <div className="container max-w-8xl p-5">
        {isLoading && (
          <div className="flex justify-center mb-3">
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
        <div className="mt-16">
          <TestDataTable items={currentItemList} />
        </div>
        <div className="mt-10">
          <PaginationNew
            totalPages={totalPages ?? 0}
            handlePageNumberChange={setPageNumber}
          />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const parsedCookie = req.cookies.token

  let token
  let items = null
  let totalPages = null
  if (parsedCookie) token = parseJwtFromCookie(parsedCookie)

  if (token) {
    try {
      const { payload } = await verifyJwt(token)
      if (!payload.admin_status)
        return {
          redirect: {
            destination: '/admin/login',
            permanent: false
          }
        }
      const response = await ApiClient({
        method: 'POST',
        url: '/admin/get-test',
        data: { offset: 0 },
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      })
      items = response.data?.items ?? []
      totalPages = response.data?.totalPages
    } catch (err) {
      /* empty */
    }
  }

  return {
    props: { items, totalPages }
  }
}

export default Test
