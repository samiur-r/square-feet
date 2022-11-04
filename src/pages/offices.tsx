import type { NextPage } from 'next'

import Office from 'components/Office'

const Offices: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-5">
      <div className="dir-rtl container max-w-6xl py-10 flex flex-col gap-5">
        <Office />
      </div>
    </div>
  )
}

export default Offices
