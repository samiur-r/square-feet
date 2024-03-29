'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [429],
  {
    8429: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return v
        }
      })
      var s = t(1527),
        n = t(4978),
        a = t(8766),
        l = t(959),
        o = function (e) {
          var r = e.headline,
            t = e.description
          return (0, s.jsxs)('div', {
            className:
              'dir-rtl flex flex-col gap-5 items-start md:items-center text-start md:text-center w-full',
            children: [
              (0, s.jsx)(a.Z, { value: r }),
              (0, s.jsx)(n.Z, { value: t })
            ]
          })
        },
        c = t(7257),
        i = t(7135),
        u = t(6583),
        d = t(143),
        p = t.n(d),
        h = t(1463),
        m = t.n(h),
        x = t(1869),
        f = t(2578),
        g = t(4249),
        y = t(2033),
        j = function (e) {
          var r,
            t,
            a,
            o,
            c = e.type,
            d = e.link,
            h = (0, l.useState)(),
            j = h[0],
            w = h[1],
            C = (0, l.useState)(''),
            v = C[0],
            b = C[1],
            N = (0, l.useState)([]),
            Z = N[0],
            k = N[1],
            E = (0, l.useState)([]),
            S = E[0],
            _ = E[1],
            M = (0, l.useState)(!1),
            I = M[0],
            B = M[1],
            O = (0, l.useState)(!1),
            F = O[0],
            D = O[1],
            K = (0, l.useState)(''),
            P = K[0],
            T = K[1],
            z = (0, l.useState)(!1),
            A = z[0],
            J = z[1],
            R = (0, l.useState)(void 0),
            U = R[0],
            q = R[1],
            G = (0, g.oR)(),
            H = G.addUser,
            L = G.updateToast,
            Q = function (e) {
              e.target.value.length <= 10 && w(parseInt(e.target.value, 10))
            },
            V =
              ((r = (0, i.Z)(function () {
                var e, r
                return (0, u.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 2, , 3]),
                        [4, x.K.validate(j, { abortEarly: !1 })]
                      )
                    case 1:
                      return e.sent(), k([]), [3, 3]
                    case 2:
                      return (
                        k(
                          null === (r = e.sent().inner) || void 0 === r
                            ? void 0
                            : r.map(function (e) {
                                return e.message
                              })
                        ),
                        [3, 3]
                      )
                    case 3:
                      return [2]
                  }
                })
              })),
              function () {
                return r.apply(this, arguments)
              }),
            W =
              ((t = (0, i.Z)(function () {
                var e, r
                return (0, u.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 2, , 3]),
                        [4, x.J.validate(v, { abortEarly: !1 })]
                      )
                    case 1:
                      return e.sent(), _([]), [3, 3]
                    case 2:
                      return (
                        _(
                          null === (r = e.sent().inner) || void 0 === r
                            ? void 0
                            : r.map(function (e) {
                                return e.message
                              })
                        ),
                        [3, 3]
                      )
                    case 3:
                      return [2]
                  }
                })
              })),
              function () {
                return t.apply(this, arguments)
              }),
            X =
              ((a = (0, i.Z)(function (e, r) {
                return (0, u.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return e.preventDefault(), [4, V()]
                    case 1:
                      return t.sent(), [4, W()]
                    case 2:
                      return t.sent(), T(r), D(!0), [2]
                  }
                })
              })),
              function (e, r) {
                return a.apply(this, arguments)
              }),
            Y =
              ((o = (0, i.Z)(function () {
                var e, r, t
                return (0, u.__generator)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if ((D(!1), Z.length > 0 || S.length > 0)) return [2]
                      s.label = 1
                    case 1:
                      return (
                        s.trys.push([1, 5, , 6]),
                        J(!0),
                        [
                          4,
                          (0, f.Z)({
                            method: 'POST',
                            url: '/user/'.concat(P),
                            data: { phone: j, password: v }
                          })
                        ]
                      )
                    case 2:
                      if (!((e = s.sent().data) && e.nextOperation))
                        return [3, 4]
                      return [
                        4,
                        (0, f.Z)({
                          method: 'POST',
                          url: '/otp/resend',
                          data: { userId: e.userId, type: 'registration' }
                        })
                      ]
                    case 3:
                      return (
                        s.sent(),
                        J(!1),
                        q(e.userId),
                        L(!0, 'Success: Please verify your phone', !1),
                        B(!0),
                        [2]
                      )
                    case 4:
                      return J(!1), H(e.success), m().push('/account'), [3, 6]
                    case 5:
                      return (
                        (r = s.sent()),
                        J(!1),
                        L(
                          !0,
                          'Error: '.concat(
                            null == r
                              ? void 0
                              : null === (t = r.response) || void 0 === t
                              ? void 0
                              : t.data
                          ),
                          !0
                        ),
                        [3, 6]
                      )
                    case 6:
                      return [2]
                  }
                })
              })),
              function () {
                return o.apply(this, arguments)
              })
          return (
            (0, l.useEffect)(
              function () {
                F && Y()
              },
              [F]
            ),
            (0, s.jsxs)(s.Fragment, {
              children: [
                I &&
                  (0, s.jsx)(y.Z, {
                    userId: U,
                    isOtpModalOpen: I,
                    handleIsOtpModalOpen: B
                  }),
                (0, s.jsxs)('form', {
                  className: 'w-full mt-10 px-3 md:px-auto dir-rtl',
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'relative',
                      children: [
                        (0, s.jsx)('input', {
                          type: 'number',
                          name: 'phone',
                          id: 'phone',
                          value: j || '',
                          className: ''.concat(
                            Z.length > 0
                              ? 'border-custom-red focus:border-custom-red'
                              : 'border-custom-gray-border focus:border-primary',
                            ' block px-4 py-2.5 md:py-4 w-full shadow-sm text-black bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0 peer'
                          ),
                          placeholder: ' ',
                          onChange: function (e) {
                            return Q(e)
                          }
                        }),
                        (0, s.jsx)('label', {
                          htmlFor: 'phone',
                          className: ''.concat(
                            Z.length > 0
                              ? 'text-custom-red peer-focus:text-custom-red'
                              : 'text-custom-gray peer-focus:text-primary',
                            ' absolute duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0'
                          ),
                          children: 'رقم الموبايل'
                        })
                      ]
                    }),
                    Z &&
                      Z.length > 0 &&
                      (0, s.jsx)('div', {
                        className: 'mt-3 flex flex-col gap-2',
                        children: Z.map(function (e) {
                          return (0,
                          s.jsx)('p', { className: 'text-custom-red text-sm', children: e }, Math.random())
                        })
                      }),
                    (0, s.jsxs)('div', {
                      className: 'relative mt-8',
                      children: [
                        (0, s.jsx)('input', {
                          type: 'password',
                          name: 'password',
                          id: 'password',
                          className: ''.concat(
                            Z.length > 0
                              ? 'border-custom-red focus:border-custom-red'
                              : 'border-custom-gray-border focus:border-primary',
                            ' block px-4 py-2.5 md:py-4 w-full shadow-sm text-black bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0 peer'
                          ),
                          placeholder: ' ',
                          onChange: function (e) {
                            return b(e.target.value)
                          }
                        }),
                        (0, s.jsx)('label', {
                          htmlFor: 'password',
                          className: ''.concat(
                            S.length > 0
                              ? 'text-custom-red peer-focus:text-custom-red'
                              : 'text-custom-gray peer-focus:text-primary',
                            ' absolute text-md duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-1 peer-focus:right-1 peer-placeholder-shown:right-0'
                          ),
                          children: 'كلمة السر'
                        })
                      ]
                    }),
                    S &&
                      S.length > 0 &&
                      (0, s.jsx)('div', {
                        className: 'mt-3 flex flex-col gap-2',
                        children: S.map(function (e) {
                          return (0,
                          s.jsx)('p', { className: 'text-custom-red text-sm', children: e }, Math.random())
                        })
                      }),
                    (0, s.jsx)('div', {
                      className: 'mt-5',
                      children: (0, s.jsx)(n.Z, {
                        children: (0, s.jsx)(p(), {
                          href: d.href,
                          children: (0, s.jsx)('a', {
                            className: 'text-primary',
                            children: d.title
                          })
                        })
                      })
                    }),
                    (0, s.jsx)('div', {
                      className: 'mt-8',
                      children:
                        'register' === c
                          ? (0, s.jsxs)('button', {
                              type: 'submit',
                              className:
                                'flex items-center justify-center bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white font-DroidArabicKufiBold py-3.5 md:py-4 px-8 rounded-lg',
                              onClick: function (e) {
                                return X(e, 'register')
                              },
                              children: [
                                'تسجيل',
                                A &&
                                  (0, s.jsxs)('svg', {
                                    'aria-hidden': 'true',
                                    role: 'status',
                                    className:
                                      'inline w-5 h-5 mr-3 text-white animate-spin',
                                    viewBox: '0 0 100 101',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    children: [
                                      (0, s.jsx)('path', {
                                        d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
                                        fill: '#E5E7EB'
                                      }),
                                      (0, s.jsx)('path', {
                                        d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
                                        fill: 'currentColor'
                                      })
                                    ]
                                  })
                              ]
                            })
                          : (0, s.jsxs)('button', {
                              type: 'submit',
                              className:
                                'flex items-center justify-center bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white font-DroidArabicKufiBold py-3.5 md:py-4 px-8 rounded-lg',
                              onClick: function (e) {
                                return X(e, 'login')
                              },
                              children: [
                                'دخول',
                                A &&
                                  (0, s.jsxs)('svg', {
                                    'aria-hidden': 'true',
                                    role: 'status',
                                    className:
                                      'inline w-5 h-5 mr-3 text-white animate-spin',
                                    viewBox: '0 0 100 101',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    children: [
                                      (0, s.jsx)('path', {
                                        d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
                                        fill: '#E5E7EB'
                                      }),
                                      (0, s.jsx)('path', {
                                        d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
                                        fill: 'currentColor'
                                      })
                                    ]
                                  })
                              ]
                            })
                    }),
                    (0, s.jsx)('div', {
                      className: 'mt-8',
                      children: (0, s.jsx)(n.Z, {
                        textBlack: !0,
                        children: (0, s.jsx)('span', {
                          className: 'flex gap-3 justify-center',
                          children:
                            'login' === c
                              ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)('span', {
                                      children: 'لا تمتلك حساب؟'
                                    }),
                                    (0, s.jsx)(p(), {
                                      href: '/register',
                                      children: (0, s.jsx)('a', {
                                        className:
                                          'text-primary hover:underline',
                                        children: 'تسجيل'
                                      })
                                    })
                                  ]
                                })
                              : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)('span', {
                                      children: 'يس لديك حساب'
                                    }),
                                    (0, s.jsx)(p(), {
                                      href: '/login',
                                      children: (0, s.jsx)('a', {
                                        className:
                                          'text-primary hover:underline',
                                        children: 'دخول'
                                      })
                                    })
                                  ]
                                })
                        })
                      })
                    })
                  ]
                })
              ]
            })
          )
        },
        w = [
          { title: 'الكويت', href: '/' },
          { title: 'دخول', href: '/login' }
        ],
        C = [
          { title: 'الكويت', href: '/' },
          { title: 'تسجيل', href: '/register' }
        ],
        v = function (e) {
          var r = e.type,
            t = e.link,
            n = e.headline,
            a = e.description
          return (0, s.jsxs)('div', {
            children: [
              'register' === r
                ? (0, s.jsx)(c.Z, { breadcrumbsItems: C })
                : (0, s.jsx)(c.Z, { breadcrumbsItems: w }),
              (0, s.jsxs)('div', {
                className: 'container max-w-md grid place-items-center py-10',
                children: [
                  (0, s.jsx)(o, { headline: n, description: a }),
                  (0, s.jsx)(j, { type: r, link: t })
                ]
              })
            ]
          })
        }
    }
  }
])
