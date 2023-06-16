import type { NextPage } from 'next'

import Auth from 'components/Auth'

const link = {
  title: 'تسجيلك يعني موافقتك على الشروط والأحكام',
  href: 'https://kw.boshamlan.com/terms-and-conditions'
}

const headline = 'تسجيل'
const description = 'اكتب رقم موبايلك المسجل وكلمة المرور للدخول إلى حسابك'

const register: NextPage = () => {
  return (
    <div>
      <Auth
        type="register"
        link={link}
        headline={headline}
        description={description}
      />
    </div>
  )
}

export default register
