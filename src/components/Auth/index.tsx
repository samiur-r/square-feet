import Header from 'components/Auth/Header'
import Form from './Form'

export interface AuthProps {
  type: string
  link: {
    title: string
    href: string
  }
}

const Auth: React.FC<AuthProps> = ({ type, link }) => {
  return (
    <div className="container max-w-md grid place-items-center py-16 px-5">
      <Header />
      <Form type={type} link={link} />
    </div>
  )
}

export default Auth
