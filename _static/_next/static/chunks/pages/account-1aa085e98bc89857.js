;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [966],
  {
    6065: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/account',
        function () {
          return n(9508)
        }
      ])
    },
    5779: function (e, t, n) {
      'use strict'
      var r = n(1527),
        s = n(4978),
        i = n(143),
        a = n.n(i)
      n(959)
      var c = function (e) {
        var t = e.headline,
          n = e.items,
          i = e.ctaList
        return (0, r.jsxs)('div', {
          className:
            'border border-custom-gray-border w-full max-w-md px-10 py-3 md:py-8 rounded-lg bg-white',
          children: [
            (0, r.jsx)('h2', {
              className: 'text-base md:text-2xl text-center',
              children: t
            }),
            (0, r.jsx)('div', {
              className:
                'mt-2 md:mt-8 flex gap-5 md:gap-10 justify-center w-full',
              children: n.map(function (e) {
                return (0,
                r.jsxs)('div', { className: 'flex flex-col justify-center items-center gap-1', children: [(0, r.jsx)('p', { className: 'text-lg whitespace-nowrap text-primary font-DroidArabicKufiBold', children: e.value }), (0, r.jsx)('span', { className: 'overflow-hidden whitespace-nowrap', children: (0, r.jsx)(s.Z, { value: e.title }) })] }, Math.random())
              })
            }),
            (0, r.jsx)('div', {
              className: 'w-full flex justify-center gap-3',
              children: i.map(function (e, t) {
                return (0,
                r.jsx)(a(), { href: e.href, children: (0, r.jsx)('button', { type: 'submit', className: ''.concat(1 === t ? 'bg-white text-secondary shadow-md border' : 'bg-secondary text-white', ' rounded-lg mt-4 md:mt-8 py-2 md:py-4 w-full max-w-xs hover:opacity-90 transition-opacity duration-300'), children: e.title }) }, ''.concat(e.title + t))
              })
            })
          ]
        })
      }
      t.Z = c
    },
    6479: function (e, t, n) {
      'use strict'
      n.d(t, {
        R: function () {
          return a
        }
      })
      var r = n(5421),
        s = n(7319),
        i = n(959)
      function a(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { threshold: 0.5 },
          n = (0, i.useState)(!1),
          a = n[0],
          c = n[1]
        return (
          (0, i.useEffect)(
            function () {
              var n = new IntersectionObserver(function (e) {
                var t,
                  n,
                  i = ((function (e) {
                    if (Array.isArray(e)) return e
                  })(e) ||
                    (0, r.Z)(e, 1) ||
                    (0, s.Z)(e, 1) ||
                    (function () {
                      throw TypeError(
                        'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      )
                    })())[0]
                c(i.isIntersecting)
              }, t)
              return (
                e.current && n.observe(e.current),
                function () {
                  e.current && n.unobserve(e.current)
                }
              )
            },
            [e, t]
          ),
          a
        )
      }
    },
    9508: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return g
          }
        })
      var r = n(7135),
        s = n(9970),
        i = n(6583),
        a = n(1527),
        c = n(143),
        l = n.n(c),
        o = n(5779),
        u = n(638),
        d = n(4978),
        h = n(2578),
        f = n(1463),
        m = n(4249),
        p = n(959),
        x = n(6479),
        v = function (e) {
          var t,
            n,
            c = e.agent,
            v = e.credits,
            g = e.posts,
            j = e.archivedPosts,
            w = e.totalPosts,
            y = e.totalArchivePosts,
            b = (0, p.useState)(!1),
            N = b[0],
            C = b[1],
            _ = (0, m.oR)().updateToast,
            S = (0, f.useRouter)(),
            Z = c ? new Date(null == c ? void 0 : c.expiry_date) : void 0,
            E = null == Z ? void 0 : Z.getHours().toString().padStart(2, '0'),
            A = null == Z ? void 0 : Z.getMinutes().toString().padStart(2, '0'),
            P = (0, p.useState)(g),
            k = P[0],
            R = P[1],
            B = (0, p.useState)((null == g ? void 0 : g.length) || 0),
            O = B[0],
            T = B[1],
            I = (0, p.useState)(j),
            M = I[0],
            D = I[1],
            K = (0, p.useState)((null == j ? void 0 : j.length) || 0),
            L = K[0],
            q = K[1],
            X = (0, p.useState)(10),
            H = X[0],
            Y = X[1],
            z = (0, p.useState)(10)[0],
            F = (0, p.useState)(!1),
            G = F[0],
            J = F[1],
            Q = (0, p.useRef)(null),
            U = (0, x.R)(Q),
            V =
              ((t = (0, r.Z)(function () {
                var e
                return (0, i.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [
                          4,
                          (0, h.Z)({
                            method: 'POST',
                            url: '/post/get-many?limit='
                              .concat(z, '&offset=')
                              .concat(H)
                          })
                        ]
                      )
                    case 1:
                      return (
                        (e = t.sent()),
                        J(!1),
                        R((0, s.Z)(k).concat((0, s.Z)(e.data.posts))),
                        Y(function (e) {
                          return e + 10
                        }),
                        [3, 3]
                      )
                    case 2:
                      return t.sent(), [3, 3]
                    case 3:
                      return [2]
                  }
                })
              })),
              function () {
                return t.apply(this, arguments)
              }),
            W =
              ((n = (0, r.Z)(function () {
                var e
                return (0, i.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [
                          4,
                          (0, h.Z)({
                            method: 'POST',
                            url: '/post/archive/get-many?limit='
                              .concat(z, '&offset=')
                              .concat(H)
                          })
                        ]
                      )
                    case 1:
                      return (
                        (e = t.sent()),
                        J(!1),
                        D((0, s.Z)(M).concat((0, s.Z)(e.data.posts))),
                        Y(function (e) {
                          return e + 10
                        }),
                        [3, 3]
                      )
                    case 2:
                      return t.sent(), [3, 3]
                    case 3:
                      return [2]
                  }
                })
              })),
              function () {
                return n.apply(this, arguments)
              })
          ;(0, p.useEffect)(
            function () {
              U && (N ? y && L < y && (J(!0), W()) : w && O < w && (J(!0), V()))
            },
            [U]
          ),
            (0, p.useEffect)(
              function () {
                T(null == k ? void 0 : k.length)
              },
              [k]
            ),
            (0, p.useEffect)(
              function () {
                q(null == M ? void 0 : M.length)
              },
              [M]
            )
          var $ = [
              { title: 'مجاني', value: (null == v ? void 0 : v.free) || 0 },
              { title: 'اضافي', value: (null == v ? void 0 : v.regular) || 0 },
              { title: 'مميز', value: (null == v ? void 0 : v.sticky) || 0 }
            ],
            ee = [
              {
                title: 'عدد الإعلانات',
                value: (null == v ? void 0 : v.agent) || 0
              },
              {
                title: 'تاريخ الإنتهاء',
                value: Z ? Z.toISOString().substring(0, 10) : '-'
              },
              {
                title: 'وقت الإنتهاء',
                value: E && A ? ''.concat(E, ':').concat(A, 'م') : '-'
              }
            ]
          return (
            (0, p.useEffect)(
              function () {
                if (S.isReady) {
                  var e = S.query
                  e && 'true' === e.success
                    ? _(!0, 'Success: Your payment was successful', !1)
                    : e &&
                      'false' === e.success &&
                      _(!0, 'Error: Payment failed', !0)
                }
              },
              [S.isReady, S.query]
            ),
            (0, a.jsxs)('div', {
              className:
                'dir-rtl container max-w-6xl pt-10 pb-8 flex flex-col gap-5 items-center bg-custom-white-light md:bg-white',
              children: [
                (0, a.jsxs)('div', {
                  className: ''.concat(
                    null !== c && 'md:grid-cols-2 md:w-auto',
                    ' grid grid-cols-1 gap-10 w-full place-items-center'
                  ),
                  children: [
                    (0, a.jsx)(o.Z, {
                      headline: 'رصيدك من الاعلانات',
                      items: $,
                      ctaList: [{ title: 'اشحن الرصيد', href: '/topup' }]
                    }),
                    null !== c &&
                      (0, a.jsx)(o.Z, {
                        headline: 'رصيد اشتراك المكتب',
                        items: ee,
                        ctaList: [
                          { title: 'بياناتي', href: '/agent/edit' },
                          { title: 'صفحتي', href: '/agent' }
                        ]
                      })
                  ]
                }),
                (0, a.jsx)(d.Z, {
                  textBlack: !0,
                  children: (0, a.jsxs)('span', {
                    className:
                      'flex justify-center text-sm md:text-base gap-2 pb-5',
                    children: [
                      (0, a.jsx)(l(), {
                        href: 'https://api.whatsapp.com/send/?phone=96560444900&text&type=phone_number&app_absent=0',
                        children: (0, a.jsx)('a', {
                          className: 'text-primary hover:underline',
                          children: 'راسلنا بالواتس اب'
                        })
                      }),
                      (0, a.jsx)('span', { children: 'او' }),
                      (0, a.jsx)(l(), {
                        href: 'tel:+96560444900',
                        children: (0, a.jsx)('a', {
                          className: 'text-primary hover:underline',
                          children: 'اتصل بنا'
                        })
                      }),
                      (0, a.jsx)('span', { children: 'للمساعده' })
                    ]
                  })
                }),
                (0, a.jsxs)('div', {
                  className: 'md:max-w-3xl md:container',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex gap-3 items-center',
                      children: [
                        (0, a.jsx)('h3', {
                          className:
                            'text-base md:text-xl font-DroidArabicKufiBold',
                          children: N ? 'الاعلانات المنتهيه' : 'إعلاناتي'
                        }),
                        (0, a.jsx)('button', {
                          type: 'button',
                          className:
                            'hover:underline cursor-pointer text-primary',
                          onClick: function () {
                            return C(!N)
                          },
                          children: N ? '(إعلاناتي)' : '(الاعلانات المنتهيه)'
                        })
                      ]
                    }),
                    N
                      ? M &&
                        M.length > 0 &&
                        M.map(function (e) {
                          return (0,
                          a.jsx)(l(), { href: '/post/'.concat(e.id), children: (0, a.jsx)('a', { children: (0, a.jsx)(u.Z, { post: e, showActions: !0, isArchive: !0 }) }) }, e.id)
                        })
                      : k &&
                        k.length > 0 &&
                        k.map(function (e) {
                          return (0,
                          a.jsx)(l(), { href: '/post/'.concat(e.id), children: (0, a.jsx)('a', { children: (0, a.jsx)(u.Z, { post: e, showActions: !0 }, e.id) }) }, e.id)
                        }),
                    (0, a.jsx)('div', { ref: Q }),
                    G &&
                      (0, a.jsx)('div', {
                        className: 'flex justify-center mt-10',
                        children: (0, a.jsxs)('svg', {
                          'aria-hidden': 'true',
                          role: 'status',
                          className:
                            'inline w-10 h-10 text-primary animate-spin',
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
                      }),
                    (0, a.jsx)('p', {
                      className:
                        'text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8',
                      children: 'انتهت نتائج البحث ولا يوجد المزيد من الاعلانات'
                    })
                  ]
                })
              ]
            })
          )
        },
        g = !0
      t.default = v
    }
  },
  function (e) {
    e.O(0, [741, 523, 774, 888, 179], function () {
      return e((e.s = 6065))
    }),
      (_N_E = e.O())
  }
])
