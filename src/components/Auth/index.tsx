import Header from 'components/Auth/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Form from './Form'

export interface AuthProps {
  type: string
  link: {
    title: string
    href: string
  }
  headline: string
  description: string
}

const breadcrumbsItemsLogin = [
  {
    title: 'الكويت',
    href: '/'
  },
  {
    title: 'دخول',
    href: '/login'
  }
]

const breadcrumbsItemsRegister = [
  {
    title: 'الكويت',
    href: '/'
  },
  {
    title: 'تسجيل',
    href: '/register'
  }
]

const Auth: React.FC<AuthProps> = ({ type, link, headline, description }) => {
  return (
    <div>
      {type === 'register' ? (
        <Breadcrumbs breadcrumbsItems={breadcrumbsItemsRegister} />
      ) : (
        <Breadcrumbs breadcrumbsItems={breadcrumbsItemsLogin} />
      )}
      <div className="container max-w-md grid place-items-center py-10">
        <Header headline={headline} description={description} />
        <Form type={type} link={link} />
      </div>
    </div>
  )
}

export default Auth
