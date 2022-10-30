import type { NextPage } from 'next'

import Auth from 'components/Auth'

const link = {
  title: 'اضغط هنا إذا نسيت كلمة السر؟',
  href: '/password/reset'
}

const login: NextPage = () => {
  return (
    <div>
      <Auth type="login" link={link} />
    </div>
  )
}

export default login
