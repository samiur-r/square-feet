'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [578],
  {
    3096: function (t, e, a) {
      var o,
        n,
        p = a(1065),
        s = {
          nodeEnv:
            null !== (o = p.env.NEXT_PUBLIC_NODE_ENV) && void 0 !== o
              ? o
              : 'development',
          port: null !== (n = p.env.NEXT_PUBLIC_PORT) && void 0 !== n ? n : 3e3,
          domain: p.env.DOMAIN,
          apiUrl: 'http://localhost:5000/api/v1/',
          jwtSecret: '8BBFA48F5934AA317C4DF92DD6179',
          cookieOptions: {
            httpOnly: !0,
            secure: !0,
            signed: !0,
            sameSite: 'strict',
            maxAge: 628992e5
          },
          kpayUrl: 'https://kpaytest.com.kw/kpg/PaymentHTTP.htm',
          kpayResponseUrl: 'http://localhost:5000/api/v1/transaction/response',
          kpayErrorUrl: 'http://localhost:5000/api/v1/transaction/response',
          tranportalId: '268901',
          tranportalPassword: '268901pg',
          termResourceKey: 'CAPMV61B247E6Q17'
        }
      e.Z = s
    },
    2578: function (t, e, a) {
      var o = a(8086),
        n = a(3096).Z.apiUrl || 'http://localhost:5000/api/v1'
      e.Z = o.Z.create({ withCredentials: !0, baseURL: n })
    }
  }
])
