import type { NextPage } from 'next'

import Auth from 'components/Auth'

const link = {
  title: 'تسجيلك يعني موافقتك على الشروط والأحكام',
  href: 'https://kw.boshamlan.com/terms-and-conditions'
}

const register: NextPage = () => {
  return (
    <div>
      <Auth type="register" link={link} />
    </div>
  )
}

export default register
