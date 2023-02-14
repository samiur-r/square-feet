import { NextApiRequest, NextApiResponse } from 'next'

import aesDecrypt from 'utils/aesDecrypt'
import ApiClient from 'utils/ApiClient'
import { signJwt } from 'utils/jwtUtils'
import config from 'config'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.trandata) {
    const decryptedText = aesDecrypt(req.body.trandata)
    const urlParams = new URLSearchParams(decryptedText)
    const trackId = urlParams.get('trackid')
    const phone = urlParams.get('udf3')
    const token = await signJwt(phone)

    const status = 'failed'

    try {
      await ApiClient({
        url: '/transaction/update-status',
        method: 'PUT',
        data: { trackId, status },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      /* empty */
    }
  }

  const message = 'success=false'
  return res.redirect(301, `${config.domain}/topup?${message}`)
}

export default handler
