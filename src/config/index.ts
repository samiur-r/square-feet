const config = {
  nodeEnv: process.env.NEXT_PUBLIC_NODE_ENV ?? 'development',
  port: process.env.NEXT_PUBLIC_PORT ?? 3000,
  domain: process.env.NEXT_PUBLIC_DOMAIN ?? 'boshamlan.com',
  socketUrl: process.env.NEXT_PUBLIC_SOCKET_URL ?? 'http://localhost:5000',
  apiUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:5000/api/v1/',
  jwtSecret: process.env.NEXT_PUBLIC_JWT_SECRET ?? 'majoron_boshamlan',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    sameSite: 'strict',
    maxAge: 728 * 86400000 // 2 years
  },
  kpayUrl:
    process.env.NEXT_PUBLIC_KNET_URL ??
    'https://www.kpay.com.kw/kpg/PaymentHTTP.htm',
  kpayResponseUrl:
    process.env.NEXT_PUBLIC_KNET_RESPONSE_URL ??
    'https://boshamlan-ui.vercel.app/api/response',
  kpayErrorUrl:
    process.env.NEXT_PUBLIC_KNET_ERROR_URL ??
    'https://boshamlan-ui.vercel.app/api/error',
  tranportalId: process.env.NEXT_PUBLIC_TRANPORTAL_ID ?? '',
  tranportalPassword: process.env.NEXT_PUBLIC_TRANPORTAL_PASSWORD ?? '',
  termResourceKey: process.env.NEXT_PUBLIC_TERM_RESOURCE_KEY ?? ''
}

export default config
