/* eslint-disable import/prefer-default-export */
import * as jose from 'jose'

const verifyJwt = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  const response = await jose.jwtVerify(token, secret)
  return response
}

export { verifyJwt }
