/* eslint-disable import/prefer-default-export */
import * as jose from 'jose'
import getPositionOfChar from './getPositionOfChar'

const verifyJwt = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  const response = await jose.jwtVerify(token, secret)
  return response
}

const parseJwtFromCookie = (cookie: string) => {
  const token = cookie?.substring(2, getPositionOfChar(cookie, '.', 3))
  return token
}

export { verifyJwt, parseJwtFromCookie }
