import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ApiClient from 'utils/ApiClient'
import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'

interface DashboardProps {
  usersItem: any
  postsItem: any
  transactionsItem: any
  creditsItem: any
}

const Dashboard: NextPage<DashboardProps> = ({
  usersItem,
  postsItem,
  transactionsItem,
  creditsItem
}) => {
  const [userSummary, setUserSummary] = useState<any>()
  const [postSummary, setPostSummary] = useState<any>()
  const [transactionSummary, setTransactionSummary] = useState<any>()
  const [creditSummary, setCreditSummary] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (usersItem) {
      setUserSummary(usersItem)
    }
  }, [usersItem])

  useEffect(() => {
    if (postsItem) {
      setPostSummary(postsItem)
    }
  }, [postsItem])

  useEffect(() => {
    if (creditsItem) {
      setCreditSummary(creditsItem)
    }
  }, [creditsItem])

  useEffect(() => {
    if (transactionsItem) {
      setTransactionSummary(transactionsItem)
      setIsLoading(false)
    }
  }, [transactionsItem])

  return (
    <div>
      <div className="border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Dashboard
          </h1>
        </div>
      </div>
      <div className="container max-w-6xl p-5 mb-10">
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
        <div className="mt-10 flex flex-col gap-10">
          <table className="min-w-full shadow-lg">
            <thead className="bg-indigo-50 text-black text-sm">
              <tr>
                <th colSpan={3} className="border border-gray-300 py-2">
                  Summary
                </th>
              </tr>
              <tr>
                <th className="py-3 px-3 text-center border border-gray-300 ">
                  {' '}
                </th>
                <th className="py-3 px-3 text-center border border-gray-300 ">
                  Today
                </th>
                <th className="py-3 px-3 text-center border border-gray-300 ">
                  Yesterday
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Not Verified</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?status=not_verified&created_at=today">
                    <a className="text-primary">
                      {userSummary?.notVerifiedToday}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?status=not_verified&created_at=yesterday">
                    <a className="text-primary">
                      {userSummary?.notVerifiedYesterday}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Registered</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?created_at=today">
                    <a className="text-primary">
                      {userSummary?.registeredToday}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?created_at=yesterday">
                    <a className="text-primary">
                      {userSummary?.registeredYesterday}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">New Posts</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/posts?created_at=today">
                    <a className="text-primary">{postSummary?.postsToday}</a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/posts?created_at=yesterday">
                    <a className="text-primary">
                      {postSummary?.postsYesterday}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Posts by Agent</td>
                <td className="py-2.5 px-3 border">
                  {postSummary?.postsByAgentToday}%
                </td>
                <td className="py-2.5 px-3 border">
                  {' '}
                  {postSummary?.postsByAgentYesterday}%
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Active Users</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?status=active_today">
                    <a className="text-primary">{userSummary?.activeToday}</a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?status=active_yesterday">
                    <a className="text-primary">
                      {userSummary?.activeYesterday}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Transactions</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?status=completed&created=today">
                    <a className="text-primary">
                      {transactionSummary?.completedTransactionsToday}
                    </a>
                  </Link>{' '}
                  /{' '}
                  <Link href="/admin/transactions?created=today">
                    <a className="text-primary">
                      {transactionSummary?.totalTransactionsToday}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?status=completed&created=yesterday">
                    <a className="text-primary">
                      {transactionSummary?.completedTransactionsYesterday}
                    </a>
                  </Link>{' '}
                  /{' '}
                  <Link href="/admin/transactions?created=yesterday">
                    <a className="text-primary">
                      {transactionSummary?.totalTransactionsYesterday}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Income</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?created=today&status=completed">
                    <a className="text-primary">
                      {transactionSummary?.incomeToday}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?created=yesterday&status=completed">
                    <a className="text-primary">
                      {transactionSummary?.incomeYesterday}
                    </a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="min-w-full shadow-lg">
            <thead className="bg-indigo-200 text-black text-sm">
              <tr>
                <th colSpan={3} className="border py-2">
                  Transactions
                </th>
              </tr>
              <tr>
                <th className="py-3 px-3 text-center border"> </th>
                <th className="py-3 px-3 text-center border">This Month</th>
                <th className="py-3 px-3 text-center border">Last Month</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Total</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?status=completed&created=this_month">
                    <a className="text-primary">
                      {transactionSummary?.totalIncomeThisMonth}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?status=completed&created=last_month">
                    <a className="text-primary">
                      {transactionSummary?.totalIncomeLastMonth}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Total - 6 months agent</td>
                <td className="py-2.5 px-3 border">
                  {transactionSummary
                    ? transactionSummary.totalIncomeThisMonth -
                      transactionSummary.totalAgentSixIncomeThisMonth
                    : ''}
                </td>
                <td className="py-2.5 px-3 border">
                  {transactionSummary
                    ? transactionSummary.totalIncomeLastMonth -
                      transactionSummary.totalAgentSixIncomeLastMonth
                    : ''}
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Agent (2months/6months)</td>
                <td className="py-2.5 px-3 border">
                  {transactionSummary ? (
                    <span className="flex gap-2 justify-center items-center">
                      <Link href="/admin/transactions?status=completed&type=agent&created=this_month">
                        <a className="text-primary">
                          <p>
                            {transactionSummary.totalAgentTwoIncomeThisMonth +
                              transactionSummary.totalAgentSixIncomeThisMonth}
                          </p>
                        </a>
                      </Link>
                      <p className="text-xs">
                        {transactionSummary.totalAgentTwoIncomeThisMonth} /{' '}
                        {transactionSummary.totalAgentSixIncomeThisMonth}
                      </p>
                    </span>
                  ) : (
                    ''
                  )}
                </td>
                <td className="py-2.5 px-3 border">
                  {transactionSummary ? (
                    <span className="flex gap-2 justify-center items-center">
                      <Link href="/admin/transactions?status=completed&type=agent&created=last_month">
                        <a className="text-primary">
                          <p>
                            {transactionSummary.totalAgentTwoIncomeLastMonth +
                              transactionSummary.totalAgentSixIncomeLastMonth}
                          </p>
                        </a>
                      </Link>
                      <p className="text-xs">
                        {transactionSummary.totalAgentTwoIncomeLastMonth} /{' '}
                        {transactionSummary.totalAgentSixIncomeLastMonth}
                      </p>
                    </span>
                  ) : (
                    ''
                  )}
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Regular</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?status=completed&type=regular&created=this_month">
                    <a className="text-primary">
                      {transactionSummary?.totalRegularIncomeThisMonth}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?status=completed&type=regular&created=last_month">
                    <a className="text-primary">
                      {transactionSummary?.totalRegularIncomeLastMonth}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Sticky (direct/credit)</td>
                <td className="py-2.5 px-3 border">
                  {transactionSummary ? (
                    <span className="flex gap-2 justify-center items-center">
                      <p>
                        {transactionSummary.totalStickyDirectIncomeThisMonth +
                          transactionSummary.totalStickyIncomeThisMonth}
                      </p>
                      <p>
                        <Link href="/admin/transactions?status=completed&type=sticky_direct&created=this_month">
                          <a className="text-primary">
                            {
                              transactionSummary?.totalStickyDirectIncomeThisMonth
                            }
                          </a>
                        </Link>{' '}
                        /{' '}
                        <Link href="/admin/transactions?status=completed&type=sticky&created=this_month">
                          <a className="text-primary">
                            {transactionSummary?.totalStickyIncomeThisMonth}
                          </a>
                        </Link>
                      </p>
                    </span>
                  ) : (
                    ''
                  )}
                </td>
                <td className="py-2.5 px-3 border">
                  {transactionSummary ? (
                    <span className="flex gap-2 justify-center items-center">
                      <p>
                        {transactionSummary.totalStickyDirectIncomeLastMonth +
                          transactionSummary.totalStickyIncomeLastMonth}
                      </p>
                      <p>
                        <Link href="/admin/transactions?status=completed&type=sticky_direct&created=last_month">
                          <a className="text-primary">
                            {
                              transactionSummary?.totalStickyDirectIncomeLastMonth
                            }{' '}
                          </a>
                        </Link>{' '}
                        /{' '}
                        <Link href="/admin/transactions?status=completed&type=sticky&created=last_month">
                          <a className="text-primary">
                            {transactionSummary?.totalStickyIncomeLastMonth}
                          </a>
                        </Link>
                      </p>
                    </span>
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <table className="shadow-lg">
              <thead className="bg-indigo-200 text-black text-sm">
                <tr>
                  <th colSpan={2} className="border py-2">
                    Posts
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm text-center">
                  <td className="py-2.5 px-3 border">Total</td>
                  <td className="py-2.5 px-3 border">
                    <Link href="/admin/posts">
                      <a className="text-primary">{postSummary?.totalPosts}</a>
                    </Link>
                  </td>
                </tr>
                <tr className="text-sm text-center">
                  <td className="py-2.5 px-3 border">Active</td>
                  <td className="py-2.5 px-3 border">
                    {postSummary?.totalActivePosts}
                  </td>
                </tr>
                <tr className="text-sm text-center">
                  <td className="py-2.5 px-3 border">Active by Agents</td>
                  <td className="py-2.5 px-3 border">
                    {postSummary?.totalActiveAgentPosts}%
                  </td>
                </tr>
                <tr className="text-sm text-center">
                  <td className="py-2.5 px-3 border">Expired</td>
                  <td className="py-2.5 px-3 border">
                    {postSummary?.totalArchivedPosts}
                  </td>
                </tr>
                <tr className="text-sm text-center">
                  <td className="py-2.5 px-3 border">Trashed</td>
                  <td className="py-2.5 px-3 border">
                    {postSummary?.totalDeletedPosts}
                  </td>
                </tr>
                <tr className="text-sm text-center">
                  <td className="py-2.5 px-3 border">Active Sticky</td>
                  <td className="py-2.5 px-3 border">
                    <Link href="/admin/posts?sticky=1">
                      <a className="text-primary">
                        {postSummary?.totalActiveStickyPosts}
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="shadow-lg">
              <thead className="bg-indigo-200 text-black text-sm">
                <tr>
                  <th colSpan={2} className="border py-2">
                    Users
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm text-center">
                  <td className="py-2.5 px-3 border">Total</td>
                  <td className="py-2.5 px-3 border">
                    <Link href="/admin/users">
                      <a className="text-primary">{userSummary?.totalUsers}</a>
                    </Link>
                  </td>
                </tr>
                <tr className="text-sm text-center">
                  <td className="py-2.5 px-3 border">0 Free</td>
                  <td className="py-2.5 px-3 border">
                    <Link href="/admin/users?status=zero_free">
                      <a className="text-primary">
                        {creditSummary?.totalZeroFreeCredits}
                      </a>
                    </Link>
                  </td>
                </tr>
                <tr className="text-sm text-center">
                  <td className="py-2.5 px-3 border">Active Agents</td>
                  <td className="py-2.5 px-3 border">
                    <Link href="/admin/users?status=agent">
                      <a className="text-primary">
                        {userSummary?.activeAgents}
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <table className="shadow-lg">
            <thead className="bg-indigo-300 text-black text-sm">
              <tr>
                <th colSpan={4} className="border py-2">
                  Credits
                </th>
              </tr>
              <tr>
                <th className="border py-2"> </th>
                <th className="border py-2">Regular</th>
                <th className="border py-2">Sticky</th>
                <th className="border py-2">Agent</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Users with history</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?status=has_regular_history">
                    <a className="text-primary">
                      {creditSummary?.usersWithHistory.regular}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?status=has_sticky_history">
                    <a className="text-primary">
                      {creditSummary?.usersWithHistory.sticky}
                    </a>
                  </Link>{' '}
                  /{' '}
                  <Link href="/admin/users?status=has_direct_history">
                    <a className="text-primary">
                      {creditSummary?.usersWithHistory.stickyDirect}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?status=has_agent_history">
                    <a className="text-primary">
                      {creditSummary?.usersWithHistory.agent}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Total history</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?status=completed&type=regular">
                    <a className="text-primary">
                      {creditSummary?.totalHistory.regular}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?status=completed&type=sticky">
                    <a className="text-primary">
                      {creditSummary?.totalHistory.sticky}
                    </a>
                  </Link>{' '}
                  /{' '}
                  <Link href="/admin/transactions?status=completed&type=sticky_direct">
                    <a className="text-primary">
                      {creditSummary?.totalHistory.stickyDirect}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/transactions?status=completed&type=agent">
                    <a className="text-primary">
                      {creditSummary?.totalHistory.agent}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Users with active</td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?status=has_regular_credits">
                    <a className="text-primary">
                      {creditSummary?.userWithActive.regular}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?status=has_sticky_credits">
                    <a className="text-primary">
                      {creditSummary?.userWithActive.sticky}
                    </a>
                  </Link>
                </td>
                <td className="py-2.5 px-3 border">
                  <Link href="/admin/users?status=has_agent_credits">
                    <a className="text-primary">
                      {creditSummary?.userWithActive.agent}
                    </a>
                  </Link>
                </td>
              </tr>
              <tr className="text-sm text-center">
                <td className="py-2.5 px-3 border">Total active</td>
                <td className="py-2.5 px-3 border">
                  {creditSummary?.totalActive.regular}
                </td>
                <td className="py-2.5 px-3 border">
                  {creditSummary?.totalActive.sticky}
                </td>
                <td className="py-2.5 px-3 border">
                  {creditSummary?.totalActive.agent}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const parsedCookie = req.cookies.token

  let token
  let usersItem = null
  let postsItem = null
  let transactionsItem = null
  let creditsItem = null
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
        method: 'GET',
        url: '/admin/dashboard',
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      })
      usersItem = response.data?.userSummary
      postsItem = response.data?.postSummary
      transactionsItem = response.data?.transactionSummary
      creditsItem = response.data?.creditSummary
    } catch (err) {
      /* empty */
    }
  }

  return {
    props: { usersItem, postsItem, transactionsItem, creditsItem }
  }
}

export default Dashboard
