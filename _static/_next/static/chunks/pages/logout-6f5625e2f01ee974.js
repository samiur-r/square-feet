;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [765, 578],
  {
    8714: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/logout',
        function () {
          return n(533)
        }
      ])
    },
    3096: function (t, e, n) {
      'use strict'
      var r,
        s,
        a = n(1065),
        o = {
          nodeEnv:
            null !== (r = a.env.NEXT_PUBLIC_NODE_ENV) && void 0 !== r
              ? r
              : 'development',
          port: null !== (s = a.env.NEXT_PUBLIC_PORT) && void 0 !== s ? s : 3e3,
          domain: a.env.DOMAIN,
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
      e.Z = o
    },
    533: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n(7135),
        s = n(6583),
        a = n(1527),
        o = n(1463),
        i = n.n(o),
        l = n(959),
        u = n(4249),
        c = n(2578),
        p = function () {
          var t,
            e = (0, u.oR)().removeUser,
            n =
              ((t = (0, r.Z)(function () {
                return (0, s.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [4, (0, c.Z)({ method: 'GET', url: '/user/logout' })]
                      )
                    case 1:
                      return t.sent(), e(), i().push('/'), [3, 3]
                    case 2:
                      return t.sent(), [3, 3]
                    case 3:
                      return [2]
                  }
                })
              })),
              function () {
                return t.apply(this, arguments)
              })
          return (
            (0, l.useEffect)(function () {
              n()
            }, []),
            (0, a.jsx)('div', {
              className: 'h-screen flex justify-center items-start mt-40',
              children: (0, a.jsxs)('svg', {
                'aria-hidden': 'true',
                role: 'status',
                className: 'inline w-16 h-16 text-primary animate-spin',
                viewBox: '0 0 100 101',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                  (0, a.jsx)('path', {
                    d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
                    fill: '#E5E7EB'
                  }),
                  (0, a.jsx)('path', {
                    d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
                    fill: 'currentColor'
                  })
                ]
              })
            })
          )
        }
      e.default = p
    },
    2578: function (t, e, n) {
      'use strict'
      var r = n(8086),
        s = n(3096).Z.apiUrl || 'http://localhost:5000/api/v1'
      e.Z = r.Z.create({ withCredentials: !0, baseURL: s })
    }
  },
  function (t) {
    t.O(0, [741, 774, 888, 179], function () {
      return t((t.s = 8714))
    }),
      (_N_E = t.O())
  }
])
