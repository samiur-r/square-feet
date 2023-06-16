import type { GetServerSideProps, NextPage } from 'next'

import Agency from 'components/Agency'
import AgencyArticle from 'components/Articles/AgencyArticle'
import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'
import ApiClient from 'utils/ApiClient'
import { ICredit } from 'interfaces'
import Breadcrumbs from 'components/Breadcrumbs'
import { IAgent } from './agent/edit'

const breadcrumbsItems = [
  {
    title: 'الكويت',
    href: '/'
  },
  {
    title: 'المكاتب',
    href: '/المكاتب'
  }
]

interface AgenciesType {
  agents: IAgent[]
  totalRows: number | undefined
  isLoggedIn: boolean
  agent: IAgent | null
  credits: ICredit | null
}

const Agencies: NextPage<AgenciesType> = ({
  agents,
  totalRows,
  isLoggedIn,
  agent,
  credits
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems} />
      <div className="dir-rtl container max-w-6xl pt-5 pb-10 flex flex-col items-center gap-5">
        <Agency
          isLoggedIn={isLoggedIn}
          agent={agent}
          credits={credits}
          agencyList={agents}
          totalRows={totalRows}
          thumbnailSmall
        />
      </div>
      <AgencyArticle />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const parsedCookie = req.cookies.token

  let token
  let totalRows = 0
  let agent = null
  let credits = null
  let agents = null
  let isLoggedIn = false
  if (parsedCookie) token = parseJwtFromCookie(parsedCookie)

  try {
    const responseAgents = await ApiClient({
      method: 'GET',
      url: '/agent/get-many?limit=10&offset=0'
    })
    agents = responseAgents.data?.agents
    totalRows = responseAgents.data?.totalRows || 0
  } catch (error) {
    /* empty */
  }

  if (token) {
    try {
      await verifyJwt(token)
      isLoggedIn = true
      const response = await ApiClient({
        method: 'GET',
        url: '/account/credit-agent-info',
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      })

      agent = response.data?.success?.agent
      credits = response.data?.success?.credits
    } catch (err) {
      isLoggedIn = false
    }
  }

  return {
    props: { agents, totalRows, isLoggedIn, agent, credits }
  }
}

export default Agencies
