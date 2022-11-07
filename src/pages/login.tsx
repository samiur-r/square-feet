import type { NextPage } from 'next'

import Auth from 'components/Auth'

const link = {
  title: 'نسيت كلمة المرور؟',
  href: '/password/reset'
}

const headline = 'دخول'
const description = 'اكتب رقم موبايلك المسجل وكلمة المرور للدخول إلى حسابك'

const login: NextPage = () => {
  return (
    <div>
      <Auth
        type="login"
        link={link}
        headline={headline}
        description={description}
      />
    </div>
  )
}

export default login
