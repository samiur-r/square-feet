const config = {
  nodeEnv: process.env.NEXT_PUBLIC_NODE_ENV ?? 'development',
  port: process.env.NEXT_PUBLIC_PORT ?? 3000,
  apiUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:5000/api/v1/',
  jwtSecret: process.env.NEXT_PUBLIC_JWT_SECRET ?? 'majoron_boshamlan',
  kpayUrl:
    process.env.NEXT_PUBLIC_KNET_URL ??
    'https://www.kpay.com.kw/kpg/PaymentHTTP.htm',
  tranportalId: process.env.NEXT_PUBLIC_TRANPORTAL_ID ?? '',
  tranportalPassword: process.env.NEXT_PUBLIC_TRANPORTAL_PASSWORD ?? '',
  termResourceKey: process.env.NEXT_PUBLIC_TERM_RESOURCE_KEY ?? ''
}

export default config