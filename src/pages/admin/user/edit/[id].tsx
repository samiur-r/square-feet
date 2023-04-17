import { GetServerSideProps, NextPage } from 'next'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useStore } from 'store'
import ApiClient from 'utils/ApiClient'
import { parseJwtFromCookie, verifyJwt } from 'utils/jwtUtils'

interface AgentType {
  id: number
  name: string
  email: string
  instagram: string
  facebook: string
  twitter: string
  website: string
  description: string
}

interface UserType {
  id: number
  phone: string
  admin_comment: string
  agent: AgentType[]
}

interface AdminPostProps {
  user: UserType
}

const EditUser: NextPage<AdminPostProps> = ({ user }) => {
  const { updateToast } = useStore()
  const [showUserForm, setShowUserForm] = useState(true)
  const [userItem, setUserItem] = useState<UserType>()
  const [isLoading, setIsLoading] = useState(true)
  const [phone, setPhone] = useState('')
  const [adminComment, setAdminComment] = useState('')
  const [password, setPassword] = useState('')

  const [agentId, setAgentId] = useState<number | undefined>(undefined)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [facebook, setFacebook] = useState('')
  const [website, setWebsite] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setUserItem(user)
    setIsLoading(false)
    if (user) {
      setPhone(user.phone)
      setAdminComment(user.admin_comment ?? '')
      if (user.agent && user.agent.length) {
        const agentInfo = user.agent[0]
        setAgentId(agentInfo.id)
        setName(agentInfo.name ?? '')
        setEmail(agentInfo.email ?? '')
        setInstagram(agentInfo.instagram ?? '')
        setTwitter(agentInfo.twitter ?? '')
        setFacebook(agentInfo.facebook ?? '')
        setWebsite(agentInfo.website ?? '')
        setDescription(agentInfo.description ?? '')
      }
    }
  }, [user])

  const handleEditUserInfo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (password) {
      if (password.length < 3) {
        updateToast(true, 'Password length must be 3 character long', true)
        return
      }
    }

    setIsLoading(true)
    try {
      await ApiClient({
        method: 'PUT',
        url: '/admin/edit-user',
        data: { id: user.id, phone, adminComment, password }
      })
      setIsLoading(false)
      updateToast(true, 'Success: User info updated successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: User info update attempt failed', true)
    }
  }

  const handleEditAgentInfo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    if (!name) {
      updateToast(true, 'Agent name is required', true)
      return
    }

    setIsLoading(true)
    try {
      await ApiClient({
        method: 'PUT',
        url: '/admin/edit-agent',
        data: {
          userId: user?.id,
          agentId,
          name,
          email,
          instagram,
          facebook,
          twitter,
          website,
          description
        }
      })
      setIsLoading(false)
      updateToast(true, 'Success: Agent info updated successfully', false)
      Router.reload()
    } catch (error) {
      setIsLoading(false)
      updateToast(true, 'Error: Agent info update attempt failed', true)
    }
  }

  return (
    <div className="mb-10">
      <div className="border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Edit User: {userItem ? userItem.phone : ''}
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
        {showUserForm ? (
          <div className="mt-16">
            <div className="text-xl font-bold text-center">User Info</div>
            <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8">
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-custom-gray-2 px-4 py-8 shadow sm:rounded-lg sm:px-10">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"
                          name="phone"
                          type="number"
                          required
                          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value ?? '')}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="admin_comment"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Admin Comment
                      </label>
                      <div className="mt-2">
                        <input
                          id="admin_comment"
                          name="admin_comment"
                          type="text"
                          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={adminComment}
                          onChange={(e) =>
                            setAdminComment(e.target.value ?? '')
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setPassword(e.target.value ?? '')}
                          placeholder="***"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={(e) => handleEditUserInfo(e)}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-16">
            <div className="text-xl font-bold text-center">Agent Info</div>
            <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8">
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-custom-gray-2 px-4 py-8 shadow sm:rounded-lg sm:px-10">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={name}
                          onChange={(e) => setName(e.target.value ?? '')}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={email}
                          onChange={(e) => setEmail(e.target.value ?? '')}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="instagram"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Instagram
                      </label>
                      <div className="mt-2">
                        <input
                          id="instagram"
                          name="instagram"
                          type="text"
                          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={instagram}
                          onChange={(e) => setInstagram(e.target.value ?? '')}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="twitter"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Twitter
                      </label>
                      <div className="mt-2">
                        <input
                          id="twitter"
                          name="twitter"
                          type="text"
                          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={twitter}
                          onChange={(e) => setTwitter(e.target.value ?? '')}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="facebook"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Facebook
                      </label>
                      <div className="mt-2">
                        <input
                          id="facebook"
                          name="facebook"
                          type="text"
                          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={facebook}
                          onChange={(e) => setFacebook(e.target.value ?? '')}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Website
                      </label>
                      <div className="mt-2">
                        <input
                          id="website"
                          name="website"
                          type="text"
                          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={website}
                          onChange={(e) => setWebsite(e.target.value ?? '')}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        description
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="description"
                          rows={7}
                          className="block p-4 w-full text-base text-black bg-white rounded-lg border border-custom-gray-border"
                          placeholder=" "
                          defaultValue={description}
                          onChange={(e) => setDescription(e.target.value ?? '')}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={(e) => handleEditAgentInfo(e)}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="text-primary"
            onClick={() => setShowUserForm(!showUserForm)}
          >
            {showUserForm ? 'Edit agent info' : 'Edit user info'}
          </button>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const parsedCookie = req.cookies.token
  let token
  let user = null

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
      const responseUser = await ApiClient({
        method: 'POST',
        url: '/admin/get-user-info',
        data: { userId: params?.id },
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie
        }
      })
      user = responseUser.data?.user ?? null
    } catch (err) {
      /* empty */
    }
  }

  return {
    props: { user }
  }
}

export default EditUser
