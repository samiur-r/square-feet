import { NextApiRequest, NextApiResponse } from 'next'

import aesDecrypt from 'utils/aesDecrypt'
import ApiClient from 'utils/ApiClient'
import { signJwt } from 'utils/jwtUtils'
import config from 'config'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let isOperationSucceeded = false
  let redirectUrl = `${config.domain}/topup?`

  if (req.body?.trandata) {
    const decryptedText = aesDecrypt(req.body.trandata)
    const urlParams = new URLSearchParams(decryptedText)
    const trackId = urlParams.get('trackid')
    const referenceId = urlParams.get('ref')
    const tranId = urlParams.get('tranid')
    const result = urlParams.get('result')
    const numOfCredits = urlParams.get('udf1')
    const phone = urlParams.get('udf3')
    let status

    const token = await signJwt(phone)

    if (tranId) {
      if (result === 'CAPTURED') {
        status = 'completed'
        isOperationSucceeded = true
      } else status = 'failed'

      try {
        const response = await ApiClient({
          url: '/transaction',
          method: 'PUT',
          data: { trackId, referenceId, tranId, status, numOfCredits },
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (response.data.nextOperation)
          redirectUrl = `${config.domain}/agent/edit?`
      } catch (error) {
        /* empty */
      }
    } else {
      status = 'canceled'

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
  }
  const message = `success=${!!isOperationSucceeded}`
  return res.redirect(301, `${redirectUrl}${message}`)
}

export default handler
