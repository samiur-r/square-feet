;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [57],
  {
    384: function (e, t, n) {
      let r = n(959),
        s = r.forwardRef(function ({ title: e, titleId: t, ...n }, s) {
          return r.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                'aria-hidden': 'true',
                ref: s,
                'aria-labelledby': t
              },
              n
            ),
            e ? r.createElement('title', { id: t }, e) : null,
            r.createElement('path', {
              fillRule: 'evenodd',
              d: 'M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z',
              clipRule: 'evenodd'
            })
          )
        })
      e.exports = s
    },
    3668: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/agent/[id]',
        function () {
          return n(7895)
        }
      ])
    },
    7257: function (e, t, n) {
      'use strict'
      var r = n(7135),
        s = n(6583),
        i = n(1527),
        a = n(959),
        l = n(384),
        c = n(1463),
        o = n.n(c),
        u = function (e) {
          var t,
            n = e.breadcrumbsItems,
            c = (0, a.useState)(!0),
            u = c[0],
            d = c[1],
            m = (0, a.useState)([]),
            h = m[0],
            f = m[1]
          ;(0, a.useEffect)(
            function () {
              null !== n && f(n), d(!1)
            },
            [n]
          )
          var x =
            ((t = (0, r.Z)(function (e) {
              return (0, s.__generator)(this, function (t) {
                return o().push(e.href), [2]
              })
            })),
            function (e) {
              return t.apply(this, arguments)
            })
          return (0, i.jsx)('nav', {
            className: ''.concat(
              (null == h ? void 0 : h.length) ? 'block' : 'hidden',
              ' flex justify-center py-2 md:pr-10 dir-rtl border'
            ),
            'aria-label': 'Breadcrumb',
            children: (0, i.jsx)('div', {
              className: 'max-w-6xl w-full',
              children: u
                ? (0, i.jsxs)('svg', {
                    'aria-hidden': 'true',
                    role: 'status',
                    className: 'inline w-7 h-7 text-primary animate-spin',
                    viewBox: '0 0 100 101',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      (0, i.jsx)('path', {
                        d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
                        fill: '#E5E7EB'
                      }),
                      (0, i.jsx)('path', {
                        d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
                        fill: 'currentColor'
                      })
                    ]
                  })
                : (0, i.jsx)('ol', {
                    className: 'flex items-center flex-wrap',
                    children:
                      h &&
                      h.map(function (e, t) {
                        return (0, i.jsxs)(
                          'li',
                          {
                            className: 'flex gap-2 items-center',
                            children: [
                              (0, i.jsx)('a', {
                                className:
                                  'text-sm px-2 cursor-pointer hover:underline',
                                onClick: function () {
                                  return x(e)
                                },
                                children: e.title
                              }),
                              h.length - 1 > t &&
                                (0, i.jsx)(l, {
                                  className: 'text-sm w-7 h-7 text-custom-gray'
                                })
                            ]
                          },
                          Math.random()
                        )
                      })
                  })
            })
          })
        }
      t.Z = u
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
          l = n[1]
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
                l(i.isIntersecting)
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
    7895: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return v
          }
        })
      var r = n(7135),
        s = n(9970),
        i = n(6583),
        a = n(1527),
        l = n(2829),
        c = n.n(l),
        o = n(143),
        u = n.n(o),
        d = n(7257),
        m = n(638),
        h = n(8766),
        f = n(2578),
        x = n(959),
        p = n(6479),
        g = function (e) {
          var t,
            n = e.agent,
            l = e.postList,
            o = e.totalPosts,
            g = (0, x.useState)(l),
            v = g[0],
            j = g[1],
            w = (0, x.useState)((null == l ? void 0 : l.length) || 0),
            C = w[0],
            b = w[1],
            N = (0, x.useState)(10),
            y = N[0],
            _ = N[1],
            E = (0, x.useState)(10)[0],
            Z = (0, x.useState)(!1),
            S = Z[0],
            B = Z[1],
            M = (0, x.useRef)(null),
            k = (0, p.R)(M),
            I =
              ((t = (0, r.Z)(function () {
                var e
                return (0, i.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [
                          4,
                          (0, f.Z)({
                            method: 'GET',
                            url: '/post/get-many?limit='
                              .concat(E, '&offset=')
                              .concat(y, '&userId=')
                              .concat(null == n ? void 0 : n.user_id)
                          })
                        ]
                      )
                    case 1:
                      return (
                        (e = t.sent()),
                        B(!1),
                        j((0, s.Z)(v).concat((0, s.Z)(e.data.posts))),
                        _(function (e) {
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
              })
          ;(0, x.useEffect)(
            function () {
              k && o && C < o && (B(!0), I())
            },
            [k]
          ),
            (0, x.useEffect)(
              function () {
                b(null == v ? void 0 : v.length)
              },
              [v]
            )
          var R = [
            { title: 'الكويت', href: '/' },
            { title: 'المكاتب', href: '/المكاتب' },
            {
              title: (null == n ? void 0 : n.name) || '',
              href: '/agent/'.concat(null == n ? void 0 : n.id)
            }
          ]
          return (0, a.jsxs)('div', {
            children: [
              (0, a.jsx)(d.Z, { breadcrumbsItems: R }),
              (0, a.jsxs)('div', {
                className: 'dir-rtl pb-8',
                children: [
                  (0, a.jsxs)('div', {
                    className:
                      'bg-primary-light flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center text-white px-5 py-8 rounded-b-lg md:rounded-none',
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'w-40 h-32 md:w-46 md:h-32 rounded-lg overflow-hidden relative border',
                        children: (0, a.jsx)(c(), {
                          src: (null == n ? void 0 : n.logo_url)
                            ? '/images/agents/'.concat(n.logo_url)
                            : '/images/nopic-ar.jpg',
                          layout: 'fill',
                          objectFit: 'cover',
                          alt: 'logo'
                        })
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex flex-col items-center text-center',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'mb-3 md:mb-5',
                            children: (0, a.jsx)(h.Z, {
                              value: null == n ? void 0 : n.name
                            })
                          }),
                          n &&
                            n.description &&
                            (0, a.jsx)('p', {
                              className: 'text-xs md:text-base',
                              children: null == n ? void 0 : n.description
                            }),
                          n &&
                            n.instagram &&
                            (0, a.jsxs)('p', {
                              className: 'mt-2',
                              children: ['instagram: @', n.instagram]
                            }),
                          (0, a.jsxs)('div', {
                            className: 'flex gap-3 justify-center mt-5',
                            children: [
                              (0, a.jsxs)('a', {
                                href: 'tel:+'.concat(
                                  null == n ? void 0 : n.phone
                                ),
                                className:
                                  'bg-custom-green hover:opacity-90 transition-opacity duration-300 w-32 flex items-center justify-center gap-1 text-center text-white py-3 rounded-md',
                                children: [
                                  null == n ? void 0 : n.phone,
                                  ' ',
                                  (0, a.jsx)(c(), {
                                    src: '/images/call-white.svg',
                                    height: 24,
                                    width: 24,
                                    className:
                                      'text-white font-DroidArabicKufiBold',
                                    alt: 'phone_icon'
                                  })
                                ]
                              }),
                              (0, a.jsx)('div', {
                                className:
                                  'shadow-md bg-white rounded-md p-3 flex items-center justify-center',
                                children: (0, a.jsx)(c(), {
                                  src: '/images/whatsapp-logo-green.svg',
                                  width: 24,
                                  height: 24,
                                  alt: 'whatsapp'
                                })
                              })
                            ]
                          }),
                          n &&
                            n.instagram &&
                            (0, a.jsx)('div', {
                              className: 'flex gap-3 justify-center mt-4',
                              children: (0, a.jsx)(u(), {
                                href: 'https://instagram.com/'.concat(
                                  null == n ? void 0 : n.instagram
                                ),
                                children: (0, a.jsx)('a', {
                                  className:
                                    'p-2 rounded-full bg-primary-dark flex items-center ',
                                  children: (0, a.jsx)(c(), {
                                    src: '/images/instagram-white.svg',
                                    width: 18,
                                    height: 18,
                                    alt: 'instagram_icon'
                                  })
                                })
                              })
                            })
                        ]
                      })
                    ]
                  }),
                  (0, a.jsxs)('div', {
                    className: 'container max-w-3xl mt-8',
                    children: [
                      (0, a.jsx)(h.Z, { value: 'اعلانات المكتب' }),
                      v &&
                        v.map(function (e) {
                          return (0,
                          a.jsx)(u(), { href: '/post/'.concat(e.id), children: (0, a.jsx)('a', { children: (0, a.jsx)(m.Z, { post: e }) }) }, e.id)
                        })
                    ]
                  }),
                  (0, a.jsx)('div', { ref: M }),
                  S &&
                    (0, a.jsx)('div', {
                      className: 'flex justify-center mt-10',
                      children: (0, a.jsxs)('svg', {
                        'aria-hidden': 'true',
                        role: 'status',
                        className: 'inline w-10 h-10 text-primary animate-spin',
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
                  ((o && C >= o) || 0 === C) &&
                    (0, a.jsx)('p', {
                      className:
                        'text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8',
                      children: 'انتهت نتائج البحث ولا يوجد المزيد من الاعلانات'
                    })
                ]
              })
            ]
          })
        },
        v = !0
      t.default = g
    }
  },
  function (e) {
    e.O(0, [741, 523, 774, 888, 179], function () {
      return e((e.s = 3668))
    }),
      (_N_E = e.O())
  }
])
