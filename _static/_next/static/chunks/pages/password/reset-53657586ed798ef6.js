;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [686],
  {
    2518: function (e, r, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/password/reset',
        function () {
          return t(5099)
        }
      ])
    },
    5099: function (e, r, t) {
      'use strict'
      t.r(r)
      var s = t(7135),
        a = t(6583),
        n = t(1527),
        o = t(959),
        l = t(1463),
        c = t.n(l),
        u = t(4249),
        d = t(4978),
        p = t(8766),
        i = t(1869),
        h = t(2578),
        m = t(2033),
        f = t(7257),
        x = [
          { title: 'الكويت', href: '/' },
          { title: 'تغيير كلمة السر', href: '/password/reset' }
        ],
        w = function () {
          var e,
            r = (0, o.useState)(''),
            t = r[0],
            l = r[1],
            w = (0, o.useState)(''),
            g = w[0],
            v = w[1],
            b = (0, o.useState)(!1),
            y = b[0],
            j = b[1],
            C = (0, o.useState)([]),
            N = C[0],
            S = C[1],
            _ = (0, o.useState)([]),
            E = _[0],
            Z = _[1],
            O = (0, o.useState)(!1),
            k = O[0],
            M = O[1],
            P = (0, o.useState)(void 0),
            T = P[0],
            I = P[1],
            F = (0, o.useState)(!1),
            z = F[0],
            B = F[1],
            V = (0, o.useState)(!1),
            X = V[0],
            D = V[1],
            J = function (e) {
              e.target.value.length <= 10 && l(e.target.value)
            },
            K = (0, u.oR)().updateToast
          ;(0, o.useEffect)(
            function () {
              z && j(!0)
            },
            [z]
          )
          var R,
            q =
              ((e = (0, s.Z)(function () {
                var e, r, s
                return (0, a.__generator)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 4, , 5]),
                        [4, i.K.validate(t, { abortEarly: !1 })]
                      )
                    case 1:
                      return (
                        a.sent(),
                        S([]),
                        D(!0),
                        [
                          4,
                          (0, h.Z)({
                            method: 'POST',
                            url: '/user/check-user',
                            data: { phone: t }
                          })
                        ]
                      )
                    case 2:
                      return (
                        (e = a.sent().data),
                        [
                          4,
                          (0, h.Z)({
                            method: 'POST',
                            url: '/otp/resend',
                            data: { userId: e.userId, type: 'password-reset' }
                          })
                        ]
                      )
                    case 3:
                      return a.sent(), D(!1), I(e.userId), M(!0), [3, 5]
                    case 4:
                      return (
                        (r = a.sent()),
                        D(!1),
                        (null == r ? void 0 : r.name) === 'ValidationError'
                          ? S(
                              null === (s = r.inner) || void 0 === s
                                ? void 0
                                : s.map(function (e) {
                                    return e.message
                                  })
                            )
                          : K(!0, 'Error: '.concat(r.response.data), !0),
                        [3, 5]
                      )
                    case 5:
                      return [2]
                  }
                })
              })),
              function () {
                return e.apply(this, arguments)
              }),
            A =
              ((R = (0, s.Z)(function () {
                var e, r, s
                return (0, a.__generator)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 3, , 4]),
                        [4, i.J.validate(g, { abortEarly: !1 })]
                      )
                    case 1:
                      return (
                        a.sent(),
                        Z([]),
                        D(!0),
                        [
                          4,
                          (0, h.Z)({
                            method: 'POST',
                            url: '/user/password-reset',
                            data: { phone: t, password: g }
                          })
                        ]
                      )
                    case 2:
                      return (
                        (e = a.sent().data),
                        D(!1),
                        K(
                          !0,
                          'Success: '.concat(null == e ? void 0 : e.success),
                          !1
                        ),
                        c().push('/login'),
                        [3, 4]
                      )
                    case 3:
                      return (
                        (r = a.sent()),
                        D(!1),
                        (null == r ? void 0 : r.name) === 'ValidationError'
                          ? Z(
                              null === (s = r.inner) || void 0 === s
                                ? void 0
                                : s.map(function (e) {
                                    return e.message
                                  })
                            )
                          : K(!0, 'Error: '.concat(r.response.data), !0),
                        [3, 4]
                      )
                    case 4:
                      return [2]
                  }
                })
              })),
              function () {
                return R.apply(this, arguments)
              })
          return (0, n.jsxs)('div', {
            children: [
              (0, n.jsx)(f.Z, { breadcrumbsItems: x }),
              (0, n.jsxs)('div', {
                className:
                  'dir-rtl container max-w-md grid place-items-center py-10',
                children: [
                  k &&
                    (0, n.jsx)(m.Z, {
                      userId: T,
                      isOtpModalOpen: k,
                      nextOperation: !0,
                      handleIsOtpModalOpen: M,
                      handleSetShowPasswordField: B
                    }),
                  (0, n.jsx)('div', {
                    className: 'w-full md:w-auto',
                    children: (0, n.jsx)(p.Z, { value: 'تغيير كلمة السر' })
                  }),
                  (0, n.jsx)('div', {
                    className: 'text-start md:text-center mt-5',
                    children: (0, n.jsx)(d.Z, {
                      value:
                        'سنرسل لك رسالة نصية SMS وفيها رقم تفعيل OTP للتأكد من أن رقم موبايلك صحيح'
                    })
                  }),
                  (0, n.jsxs)('form', {
                    className: 'mt-8 px-3 md:px-0 w-full',
                    children: [
                      (0, n.jsxs)('div', {
                        className: 'relative',
                        children: [
                          (0, n.jsx)('input', {
                            disabled: y,
                            type: 'number',
                            name: 'phone',
                            id: 'phone',
                            value: t,
                            className: ''.concat(
                              N.length
                                ? 'border-custom-red focus:border-red'
                                : 'focus:border-primary border-custom-gray-border',
                              ' block px-4 py-2.5 md:py-4 w-full text-black bg-transparent rounded-lg shadow-sm border  appearance-none focus:outline-none focus:ring-0 peer'
                            ),
                            placeholder: ' ',
                            onChange: function (e) {
                              return J(e)
                            }
                          }),
                          (0, n.jsx)('label', {
                            htmlFor: 'phone',
                            className: ''.concat(
                              N.length
                                ? 'text-custom-red peer-focus:text-red'
                                : 'text-custom-gray peer-focus:text-primary',
                              ' absolute text-md  duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0'
                            ),
                            children: 'رقم الموبايل'
                          }),
                          z &&
                            (0, n.jsxs)('div', {
                              children: [
                                (0, n.jsxs)('div', {
                                  className: 'relative mt-8',
                                  children: [
                                    (0, n.jsx)('input', {
                                      type: 'password',
                                      name: 'password',
                                      id: 'password',
                                      className: ''.concat(
                                        E.length
                                          ? 'border-custom-red focus:border-red'
                                          : 'focus:border-primary border-custom-gray-border',
                                        ' block px-4 py-2.5 md:py-4 w-full shadow-sm text-black bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0 peer'
                                      ),
                                      placeholder: ' ',
                                      onChange: function (e) {
                                        return v(e.target.value)
                                      }
                                    }),
                                    (0, n.jsx)('label', {
                                      htmlFor: 'password',
                                      className: ''.concat(
                                        E.length
                                          ? 'text-custom-red peer-focus:text-custom-red'
                                          : 'text-custom-gray peer-focus:text-primary',
                                        ' absolute text-md duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-1 peer-focus:right-1 peer-placeholder-shown:right-0'
                                      ),
                                      children: 'كلمة السر'
                                    })
                                  ]
                                }),
                                (0, n.jsx)('div', {
                                  className: 'flex flex-col gap-2 mt-3',
                                  children: E.map(function (e) {
                                    return (0,
                                    n.jsx)('p', { className: 'text-custom-red', children: e }, Math.random())
                                  })
                                })
                              ]
                            })
                        ]
                      }),
                      N &&
                        N.length > 0 &&
                        (0, n.jsx)('div', {
                          className: 'flex flex-col gap-2 mt-3',
                          children: N.map(function (e) {
                            return (0,
                            n.jsx)('p', { className: 'text-custom-red', children: e }, Math.random())
                          })
                        }),
                      (0, n.jsx)('div', {
                        className: 'mt-8',
                        children: (0, n.jsxs)('button', {
                          type: 'submit',
                          className:
                            'flex items-center justify-center bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white py-3.5 md:py-4 px-8 rounded-lg',
                          onClick: function (e) {
                            e.preventDefault(), y ? A() : q()
                          },
                          children: [
                            'أرسل لي رقم التفعيل SMS',
                            ' ',
                            X &&
                              (0, n.jsxs)('svg', {
                                'aria-hidden': 'true',
                                role: 'status',
                                className:
                                  'inline w-5 h-5 mr-3 text-white animate-spin',
                                viewBox: '0 0 100 101',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  (0, n.jsx)('path', {
                                    d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
                                    fill: '#E5E7EB'
                                  }),
                                  (0, n.jsx)('path', {
                                    d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
                                    fill: 'currentColor'
                                  })
                                ]
                              })
                          ]
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }
      r.default = w
    }
  },
  function (e) {
    e.O(0, [741, 423, 334, 774, 888, 179], function () {
      return e((e.s = 2518))
    }),
      (_N_E = e.O())
  }
])
