;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [603],
  {
    384: function (t, e, n) {
      let l = n(959),
        i = l.forwardRef(function ({ title: t, titleId: e, ...n }, i) {
          return l.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                'aria-hidden': 'true',
                ref: i,
                'aria-labelledby': e
              },
              n
            ),
            t ? l.createElement('title', { id: e }, t) : null,
            l.createElement('path', {
              fillRule: 'evenodd',
              d: 'M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z',
              clipRule: 'evenodd'
            })
          )
        })
      t.exports = i
    },
    5036: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/search',
        function () {
          return n(8113)
        }
      ])
    },
    7257: function (t, e, n) {
      'use strict'
      var l = n(7135),
        i = n(6583),
        r = n(1527),
        c = n(959),
        a = n(384),
        s = n(1463),
        o = n.n(s),
        u = function (t) {
          var e,
            n = t.breadcrumbsItems,
            s = (0, c.useState)(!0),
            u = s[0],
            d = s[1],
            f = (0, c.useState)([]),
            v = f[0],
            h = f[1]
          ;(0, c.useEffect)(
            function () {
              null !== n && h(n), d(!1)
            },
            [n]
          )
          var x =
            ((e = (0, l.Z)(function (t) {
              return (0, i.__generator)(this, function (e) {
                return o().push(t.href), [2]
              })
            })),
            function (t) {
              return e.apply(this, arguments)
            })
          return (0, r.jsx)('nav', {
            className: ''.concat(
              (null == v ? void 0 : v.length) ? 'block' : 'hidden',
              ' flex justify-center py-2 md:pr-10 dir-rtl border'
            ),
            'aria-label': 'Breadcrumb',
            children: (0, r.jsx)('div', {
              className: 'max-w-6xl w-full',
              children: u
                ? (0, r.jsxs)('svg', {
                    'aria-hidden': 'true',
                    role: 'status',
                    className: 'inline w-7 h-7 text-primary animate-spin',
                    viewBox: '0 0 100 101',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      (0, r.jsx)('path', {
                        d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
                        fill: '#E5E7EB'
                      }),
                      (0, r.jsx)('path', {
                        d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
                        fill: 'currentColor'
                      })
                    ]
                  })
                : (0, r.jsx)('ol', {
                    className: 'flex items-center flex-wrap',
                    children:
                      v &&
                      v.map(function (t, e) {
                        return (0, r.jsxs)(
                          'li',
                          {
                            className: 'flex gap-2 items-center',
                            children: [
                              (0, r.jsx)('a', {
                                className:
                                  'text-sm px-2 cursor-pointer hover:underline',
                                onClick: function () {
                                  return x(t)
                                },
                                children: t.title
                              }),
                              v.length - 1 > e &&
                                (0, r.jsx)(a, {
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
      e.Z = u
    },
    6479: function (t, e, n) {
      'use strict'
      n.d(e, {
        R: function () {
          return c
        }
      })
      var l = n(5421),
        i = n(7319),
        r = n(959)
      function c(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { threshold: 0.5 },
          n = (0, r.useState)(!1),
          c = n[0],
          a = n[1]
        return (
          (0, r.useEffect)(
            function () {
              var n = new IntersectionObserver(function (t) {
                var e,
                  n,
                  r = ((function (t) {
                    if (Array.isArray(t)) return t
                  })(t) ||
                    (0, l.Z)(t, 1) ||
                    (0, i.Z)(t, 1) ||
                    (function () {
                      throw TypeError(
                        'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      )
                    })())[0]
                a(r.isIntersecting)
              }, e)
              return (
                t.current && n.observe(t.current),
                function () {
                  t.current && n.unobserve(t.current)
                }
              )
            },
            [t, e]
          ),
          c
        )
      }
    },
    8113: function (t, e, n) {
      'use strict'
      n.r(e)
      var l = n(7135),
        i = n(9970),
        r = n(6583),
        c = n(1527),
        a = n(959),
        s = n(143),
        o = n.n(s),
        u = n(7257),
        d = n(638),
        f = n(8766),
        v = n(4249),
        h = n(6479),
        x = n(2578),
        m = n(5202),
        p = function () {
          var t,
            e,
            n,
            s,
            p,
            C,
            j,
            w = !1,
            g = 10,
            b = (0, v.oR)(),
            y = b.filteredPosts,
            N = b.totalFilteredPosts,
            E = b.locationsSelected,
            _ = b.propertyTypeSelected,
            Z = b.categorySelected,
            S = b.canFetchPosts,
            P = b.updateFilteredPostsCount,
            k = b.updateFilteredPosts,
            B = b.updateCanFetchPosts,
            M = (0, a.useState)([]),
            R = M[0],
            T = M[1],
            I = (0, a.useState)(),
            F = I[0],
            O = I[1],
            A = (0, a.useState)(0),
            K = A[0],
            L = A[1],
            X = (0, a.useState)(!1),
            z = X[0],
            D = X[1],
            q = (0, a.useState)(10)[0],
            G = (0, a.useRef)(null),
            H = (0, h.R)(G)
          ;(0, a.useEffect)(
            function () {
              T(y), L(y.length)
            },
            [y]
          ),
            (0, a.useEffect)(
              function () {
                O(N)
              },
              [N]
            )
          var J =
            ((j = (0, l.Z)(function () {
              var t, e
              return (0, r.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    D(!0), (n.label = 1)
                  case 1:
                    return (
                      n.trys.push([1, 3, , 4]),
                      [
                        4,
                        (0, x.Z)({
                          method: 'POST',
                          url: '/search',
                          data: {
                            limit: q,
                            offset: g,
                            location: E,
                            propertyType: _,
                            category: Z
                          }
                        })
                      ]
                    )
                  case 2:
                    return (
                      (e = n.sent()),
                      D(!1),
                      (g += 10),
                      P(
                        null == e
                          ? void 0
                          : null === (t = e.data) || void 0 === t
                          ? void 0
                          : t.count
                      ),
                      k(
                        w
                          ? e.data.posts
                          : (0, i.Z)(y).concat((0, i.Z)(e.data.posts))
                      ),
                      B(!1),
                      [3, 4]
                    )
                  case 3:
                    return n.sent(), D(!1), [3, 4]
                  case 4:
                    return [2]
                }
              })
            })),
            function () {
              return j.apply(this, arguments)
            })
          ;(0, a.useEffect)(
            function () {
              H && !S && F && K < F && ((w = !1), D(!0), J())
            },
            [H]
          ),
            (0, a.useEffect)(
              function () {
                S && ((g = 0), (w = !0), J())
              },
              [S]
            )
          var Q = (0, a.useCallback)(function (t) {
              null !== t &&
                window.scrollTo({
                  top: t.getBoundingClientRect().top,
                  behavior: 'smooth'
                })
            }, []),
            U = function (t) {
              if ((null == t ? void 0 : t.id) === void 0) return ''
              if ((null == t ? void 0 : t.state_id) === null)
                return null == t ? void 0 : t.title
              var e = m.Kl.find(function (e) {
                return (
                  (null == e ? void 0 : e.id) ===
                  (null == t ? void 0 : t.state_id)
                )
              })
              return null == e ? void 0 : e.title
            },
            V = [
              { title: 'الكويت', href: '/' },
              {
                title: 'عقارات '.concat(
                  null == Z ? void 0 : Z.title,
                  ' في الكويت'
                ),
                href: ''.concat(null == Z ? void 0 : Z.title)
              },
              _ && 0 !== _.id
                ? {
                    title: ''
                      .concat(null == _ ? void 0 : _.title, ' ')
                      .concat(null == Z ? void 0 : Z.title),
                    href: ''
                      .concat(null == _ ? void 0 : _.title, '/')
                      .concat(null == Z ? void 0 : Z.title)
                  }
                : null
            ],
            W = [
              { title: 'الكويت', href: '/', isLink: !0 },
              {
                title: 'عقارات '.concat(
                  null == Z ? void 0 : Z.title,
                  ' في الكويت'
                ),
                href: ''.concat(null == Z ? void 0 : Z.title)
              },
              {
                title: ''
                  .concat(null == Z ? void 0 : Z.title, ' في ')
                  .concat(U(E[0])),
                href: ''
                  .concat(U(E[0]), '/')
                  .concat(null == Z ? void 0 : Z.title)
              },
              E &&
              E.length &&
              (null === (t = E[0]) || void 0 === t ? void 0 : t.state_id) !==
                null
                ? {
                    title: ''
                      .concat(null == Z ? void 0 : Z.title, ' في ')
                      .concat(
                        null === (e = E[0]) || void 0 === e ? void 0 : e.title
                      ),
                    href: ''
                      .concat(
                        null === (n = E[0]) || void 0 === n ? void 0 : n.title,
                        '/'
                      )
                      .concat(null == Z ? void 0 : Z.title)
                  }
                : null,
              E &&
              E.length &&
              (null === (s = E[0]) || void 0 === s ? void 0 : s.state_id) !==
                null &&
              _
                ? {
                    title: ''
                      .concat(null == _ ? void 0 : _.title, ' ')
                      .concat(null == Z ? void 0 : Z.title, ' في ')
                      .concat(
                        null === (p = E[0]) || void 0 === p ? void 0 : p.title
                      ),
                    href: ''
                      .concat(
                        null === (C = E[0]) || void 0 === C ? void 0 : C.title,
                        '/'
                      )
                      .concat(null == _ ? void 0 : _.title, '/')
                      .concat(null == Z ? void 0 : Z.title)
                  }
                : null
            ],
            Y = V.filter(function (t) {
              return null !== t
            }),
            $ = W.filter(function (t) {
              return null !== t
            })
          return (0, c.jsxs)('div', {
            children: [
              (0, c.jsx)(u.Z, { breadcrumbsItems: E && E.length ? $ : Y }),
              (0, c.jsxs)('div', {
                className: 'dir-rtl container max-w-5xl py-10 flex flex-col',
                children: [
                  (0, c.jsxs)('div', {
                    className: 'flex flex-col gap-5',
                    children: [
                      (0, c.jsx)('div', {
                        ref: Q,
                        children: (0, c.jsx)(f.Z, {
                          value: 'قد تهمك نتائج بحث مشابهة'
                        })
                      }),
                      (0, c.jsx)('div', {
                        children: (0, c.jsx)(o(), {
                          href: '/',
                          children: (0, c.jsx)('a', {
                            className: 'text-primary underline',
                            children: 'عقارات للبيع في الكويت'
                          })
                        })
                      })
                    ]
                  }),
                  (0, c.jsxs)('div', {
                    className:
                      'container max-w-[736px] flex flex-col gap-2 mt-5 p-0',
                    children: [
                      (0, c.jsxs)('div', {
                        className: 'self-start flex gap-2 items-center',
                        children: [
                          (0, c.jsx)(f.Z, { value: 'نتائج البحث' }),
                          (0, c.jsxs)('p', {
                            className: 'text-lg md:text-xl',
                            children: ['(', F || '', ' إعلان)']
                          })
                        ]
                      }),
                      (0, c.jsx)('div', {
                        className: 'w-full',
                        children:
                          R &&
                          R.length > 0 &&
                          R.map(function (t) {
                            return (0,
                            c.jsx)(o(), { href: '/post/'.concat(t.id), children: (0, c.jsx)('a', { children: (0, c.jsx)(d.Z, { post: t }, t.id) }) }, t.id)
                          })
                      })
                    ]
                  }),
                  (0, c.jsx)('div', { ref: G }),
                  z &&
                    (0, c.jsx)('div', {
                      className: 'flex justify-center mt-10',
                      children: (0, c.jsxs)('svg', {
                        'aria-hidden': 'true',
                        role: 'status',
                        className: 'inline w-10 h-10 text-primary animate-spin',
                        viewBox: '0 0 100 101',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          (0, c.jsx)('path', {
                            d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
                            fill: '#E5E7EB'
                          }),
                          (0, c.jsx)('path', {
                            d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
                            fill: 'currentColor'
                          })
                        ]
                      })
                    }),
                  F && K >= F
                    ? (0, c.jsx)('p', {
                        className:
                          'text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8',
                        children:
                          'انتهت نتائج البحث ولا يوجد المزيد من الاعلانات'
                      })
                    : null
                ]
              })
            ]
          })
        }
      e.default = p
    }
  },
  function (t) {
    t.O(0, [741, 523, 774, 888, 179], function () {
      return t((t.s = 5036))
    }),
      (_N_E = t.O())
  }
])
