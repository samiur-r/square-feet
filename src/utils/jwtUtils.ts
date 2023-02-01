/* eslint-disable import/prefer-default-export */
import * as jose from 'jose'

import config from 'config'
import getPositionOfChar from './getPositionOfChar'

const verifyJwt = async (token: string) => {
  const secret = new TextEncoder().encode(config.jwtSecret)
  const response = await jose.jwtVerify(token, secret)
  return response
}

const parseJwtFromCookie = (cookie: string) => {
  const token = cookie?.substring(2, getPositionOfChar(cookie, '.', 3))
  return token
}

export { verifyJwt, parseJwtFromCookie }
