;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [330],
  {
    384: function (e, t, n) {
      let l = n(959),
        i = l.forwardRef(function ({ title: e, titleId: t, ...n }, i) {
          return l.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                'aria-hidden': 'true',
                ref: i,
                'aria-labelledby': t
              },
              n
            ),
            e ? l.createElement('title', { id: t }, e) : null,
            l.createElement('path', {
              fillRule: 'evenodd',
              d: 'M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z',
              clipRule: 'evenodd'
            })
          )
        })
      e.exports = i
    },
    1071: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/[...slug]',
        function () {
          return n(2306)
        }
      ])
    },
    5284: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return c
        }
      })
      var l = n(1527)
      n(959)
      var i = n(4978),
        r = function (e) {
          var t = e.title,
            n = e.content,
            r = e.textDark
          return (0, l.jsxs)('div', {
            className: 'flex flex-col gap-2',
            children: [
              (0, l.jsxs)('div', {
                className: 'flex gap-2',
                children: [
                  (0, l.jsx)('span', { className: 'text-2xl', children: '•' }),
                  (0, l.jsx)('button', {
                    type: 'submit',
                    className:
                      'box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between',
                    children: (0, l.jsx)('span', {
                      className: 'inline-block text-start light',
                      children: (0, l.jsx)(i.Z, {
                        value: t,
                        light: !r,
                        textBlack: r
                      })
                    })
                  })
                ]
              }),
              (0, l.jsx)('div', {
                className: 'overflow-hidden text-start pr-3.5',
                children: (0, l.jsx)(i.Z, { value: n, light: !r, textBlack: r })
              })
            ]
          })
        },
        s = n(8766),
        a = [
          {
            id: 0,
            question:
              'كم عدد إعلانات العقارات المعروضة حاليًا للايجار او للبيع في الكويت على موقع بوشملان؟',
            answer:
              'عدد إعلانات العقارات المعروضة للايجار او للبيع في الكويت هو 6048 إعلان جديد'
          },
          {
            id: 1,
            question:
              'كم عدد المكاتب النشيطة والمتخصصة في الكويت على موقع بوشملان؟',
            answer: 'يوجد في بوشملان 168 مكتب نشيط ومتخصص في الكويت'
          },
          {
            id: 2,
            question:
              'ما هي أنواع العقارات المعروضة للايجار او للبيع في الكويت على موقع بوشملان؟',
            answer:
              'أنواع العقارات المعروضة للايجار او للبيع في الكويت هي أراضي ,بيوت ,تجاري ,دولي ,شاليهات ,شقق ,عمارات ,مزارع'
          },
          {
            id: 3,
            question:
              'كم تتراوح أسعار العقارات المعروضة للايجار او للبيع في الكويت على بوشملان؟',
            answer:
              'أسعار العقارات المعروضة للايجار او للبيع في الكويت تبدأ من 350 دك وتصل إلى 870,000 دك'
          },
          {
            id: 4,
            question:
              'كم أرخص أسعار العقارات المعروضة للايجار او للبيع في الكويت على موقع بوشملان؟',
            answer:
              'تبدأ أسعار العقارات المعروضة للايجار او للبيع في الكويت إبتداءً من 350 دك'
          },
          {
            id: 5,
            question:
              'ما هو متوسط سعر العقارات المعروضة للايجار او للبيع في الكويت على موقع بوشملان؟',
            answer:
              'متوسط أسعار العقارات المعروضة للايجار او للبيع في الكويت هو 183,233 دك'
          }
        ],
        c = function (e) {
          var t = e.bgPrimary,
            n = e.textDark
          return (0, l.jsx)('div', {
            className: ''.concat(t && 'bg-primary text-white'),
            children: (0, l.jsxs)('div', {
              className: 'dir-rtl container max-w-6xl',
              children: [
                (0, l.jsx)('div', {
                  className: 'mb-3',
                  children: (0, l.jsx)(s.Z, {
                    value:
                      'الأسئلة الشائعة عن العقارات المعروضة للايجار او للبيع في الكويت',
                    light: !n
                  })
                }),
                (0, l.jsx)('div', {
                  className: 'text-sm md:text-lg grid gap-5',
                  children: a.map(function (e) {
                    return (0,
                    l.jsx)(r, { title: e.question, content: e.answer, textDark: n }, e.id)
                  })
                })
              ]
            })
          })
        }
    },
    7257: function (e, t, n) {
      'use strict'
      var l = n(7135),
        i = n(6583),
        r = n(1527),
        s = n(959),
        a = n(384),
        c = n(1463),
        o = n.n(c),
        u = function (e) {
          var t,
            n = e.breadcrumbsItems,
            c = (0, s.useState)(!0),
            u = c[0],
            d = c[1],
            f = (0, s.useState)([]),
            x = f[0],
            v = f[1]
          ;(0, s.useEffect)(
            function () {
              null !== n && v(n), d(!1)
            },
            [n]
          )
          var h =
            ((t = (0, l.Z)(function (e) {
              return (0, i.__generator)(this, function (t) {
                return o().push(e.href), [2]
              })
            })),
            function (e) {
              return t.apply(this, arguments)
            })
          return (0, r.jsx)('nav', {
            className: ''.concat(
              (null == x ? void 0 : x.length) ? 'block' : 'hidden',
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
                      x &&
                      x.map(function (e, t) {
                        return (0, r.jsxs)(
                          'li',
                          {
                            className: 'flex gap-2 items-center',
                            children: [
                              (0, r.jsx)('a', {
                                className:
                                  'text-sm px-2 cursor-pointer hover:underline',
                                onClick: function () {
                                  return h(e)
                                },
                                children: e.title
                              }),
                              x.length - 1 > t &&
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
      t.Z = u
    },
    6479: function (e, t, n) {
      'use strict'
      n.d(t, {
        R: function () {
          return s
        }
      })
      var l = n(5421),
        i = n(7319),
        r = n(959)
      function s(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { threshold: 0.5 },
          n = (0, r.useState)(!1),
          s = n[0],
          a = n[1]
        return (
          (0, r.useEffect)(
            function () {
              var n = new IntersectionObserver(function (e) {
                var t,
                  n,
                  r = ((function (e) {
                    if (Array.isArray(e)) return e
                  })(e) ||
                    (0, l.Z)(e, 1) ||
                    (0, i.Z)(e, 1) ||
                    (function () {
                      throw TypeError(
                        'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      )
                    })())[0]
                a(r.isIntersecting)
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
          s
        )
      }
    },
    2306: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return y
          },
          default: function () {
            return b
          }
        })
      var l = n(7135),
        i = n(9970),
        r = n(6583),
        s = n(1527),
        a = n(1161),
        c = n.n(a),
        o = n(959),
        u = n(143),
        d = n.n(u),
        f = n(5202),
        x = n(7257),
        v = n(638),
        h = n(5284),
        m = function (e) {
          var t = e.articles,
            n = (0, o.useState)(!1),
            l = n[0],
            i = n[1]
          return t && t.length
            ? (0, s.jsxs)('div', {
                className: 'text-sm md:text-lg flex flex-col gap-5',
                children: [
                  (0, s.jsx)('div', {
                    className: 'inner-html dir-rtl',
                    dangerouslySetInnerHTML: { __html: t[0] }
                  }),
                  !l &&
                    t &&
                    t.length > 1 &&
                    (0, s.jsx)('div', {
                      children: (0, s.jsx)('button', {
                        type: 'submit',
                        className: 'underline text-primary',
                        onClick: function () {
                          return i(!0)
                        },
                        children: 'المزيد'
                      })
                    }),
                  (0, s.jsxs)('div', {
                    className: ''.concat(
                      l ? 'max-h-384' : 'max-h-0',
                      ' flex flex-col gap-5 overflow-y-hidden transition-all duration-2000 ease-in-out'
                    ),
                    children: [
                      (0, s.jsx)('div', {
                        className: 'inner-html dir-rtl',
                        dangerouslySetInnerHTML: { __html: t[1] }
                      }),
                      (0, s.jsx)(h.Z, { bgPrimary: !1, textDark: !0 })
                    ]
                  })
                ]
              })
            : null
        },
        p = n(8766),
        j = n(4249),
        g = n(6479),
        C = n(2578),
        w = function (e) {
          if ((null == e ? void 0 : e.id) === void 0) return ''
          if ((null == e ? void 0 : e.state_id) === null)
            return null == e
              ? void 0
              : null === (t = e.title) || void 0 === t
              ? void 0
              : t.replace(/\s+/g, '-')
          var t,
            n,
            l = f.Kl.find(function (t) {
              return (
                (null == t ? void 0 : t.id) ===
                (null == e ? void 0 : e.state_id)
              )
            })
          return null == l
            ? void 0
            : null === (n = l.title) || void 0 === n
            ? void 0
            : n.replace(/\s+/g, '-')
        },
        y = !0,
        b = function (e) {
          var t,
            n,
            a,
            u,
            f,
            h,
            y,
            b,
            N = e.retrievedPosts,
            _ = e.count,
            E = e.articles,
            Z = e.metaTitle,
            S = e.metaDescription,
            k = e.selectedLocations,
            T = e.selectedPropertyType,
            M = e.selectedCategory,
            P = e.similarSearches,
            B = 10,
            I = (0, j.oR)(),
            R = I.locationsSelected,
            q = I.propertyTypeSelected,
            O = I.categorySelected,
            D = I.setLocationsSelected,
            L = I.setPropertyTypeSelected,
            A = I.setCategorySelected,
            F = I.updateFilteredPostsCount,
            H = I.updateFilteredPosts,
            K = (0, o.useState)(N),
            X = K[0],
            z = K[1],
            G = (0, o.useState)(_)[0],
            J = (0, o.useState)(0),
            Q = J[0],
            U = J[1],
            V = (0, o.useState)(!1),
            W = V[0],
            Y = V[1],
            $ = (0, o.useState)(10)[0]
          ;(0, o.useEffect)(
            function () {
              D(k)
            },
            [k]
          ),
            (0, o.useEffect)(
              function () {
                L(T)
              },
              [T]
            ),
            (0, o.useEffect)(
              function () {
                A(M)
              },
              [M]
            ),
            (0, o.useEffect)(
              function () {
                H(X)
              },
              [X]
            ),
            (0, o.useEffect)(
              function () {
                F(_)
              },
              [_]
            )
          var ee,
            et = (0, o.useRef)(null),
            en = (0, g.R)(et),
            el =
              ((ee = (0, l.Z)(function () {
                var e
                return (0, r.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      Y(!0), (t.label = 1)
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        [
                          4,
                          (0, C.Z)({
                            method: 'POST',
                            url: '/search',
                            data: {
                              limit: $,
                              offset: B,
                              location: R,
                              propertyType: q,
                              category: O
                            }
                          })
                        ]
                      )
                    case 2:
                      return (
                        (e = t.sent()),
                        Y(!1),
                        (B += 10),
                        z((0, i.Z)(X).concat((0, i.Z)(e.data.posts))),
                        U(function (t) {
                          var n, l
                          return (
                            null === (n = e.data) || void 0 === n
                              ? void 0
                              : null === (l = n.posts) || void 0 === l
                              ? void 0
                              : l.length
                          )
                            ? t + e.data.posts.length
                            : t
                        }),
                        [3, 4]
                      )
                    case 3:
                      return t.sent(), Y(!1), [3, 4]
                    case 4:
                      return [2]
                  }
                })
              })),
              function () {
                return ee.apply(this, arguments)
              })
          ;(0, o.useEffect)(
            function () {
              en && G && Q < G && (Y(!0), el())
            },
            [en]
          )
          var ei = (0, o.useCallback)(function (e) {
              null !== e &&
                window.scrollTo({
                  top: e.getBoundingClientRect().top,
                  behavior: 'smooth'
                })
            }, []),
            er = [
              { title: 'الكويت', href: '/' },
              {
                title: 'عقارات '.concat(
                  null == M ? void 0 : M.title,
                  ' في الكويت'
                ),
                href: ''.concat(null == M ? void 0 : M.title)
              },
              T && 0 !== Object.keys(T).length && 0 !== T.id
                ? {
                    title: ''
                      .concat(null == T ? void 0 : T.title, ' ')
                      .concat(null == M ? void 0 : M.title),
                    href: ''
                      .concat(null == M ? void 0 : M.title, '/')
                      .concat(null == T ? void 0 : T.title)
                  }
                : null
            ],
            es = [
              { title: 'الكويت', href: '/', isLink: !0 },
              {
                title: 'عقارات '.concat(
                  null == M ? void 0 : M.title,
                  ' في الكويت'
                ),
                href: ''.concat(null == M ? void 0 : M.title)
              },
              {
                title: ''
                  .concat(null == M ? void 0 : M.title, ' في ')
                  .concat(w(k[0])),
                href: ''
                  .concat(null == M ? void 0 : M.title, '/')
                  .concat(w(k[0]))
              },
              k &&
              k.length &&
              (null === (t = k[0]) || void 0 === t ? void 0 : t.state_id) !==
                null
                ? {
                    title: ''
                      .concat(null == M ? void 0 : M.title, ' في ')
                      .concat(
                        null === (n = k[0]) || void 0 === n ? void 0 : n.title
                      ),
                    href: ''
                      .concat(null == M ? void 0 : M.title, '/')
                      .concat(
                        null === (a = k[0]) || void 0 === a
                          ? void 0
                          : null === (u = a.title) || void 0 === u
                          ? void 0
                          : u.replace(/\s+/g, '-')
                      )
                  }
                : null,
              k &&
              k.length &&
              (null === (f = k[0]) || void 0 === f ? void 0 : f.state_id) !==
                null &&
              0 !== Object.keys(T).length
                ? {
                    title: ''
                      .concat(null == T ? void 0 : T.title, ' ')
                      .concat(null == M ? void 0 : M.title, ' في ')
                      .concat(
                        null === (h = k[0]) || void 0 === h ? void 0 : h.title
                      ),
                    href: ''
                      .concat(null == M ? void 0 : M.title, '/')
                      .concat(null == T ? void 0 : T.title, '/')
                      .concat(
                        null === (y = k[0]) || void 0 === y
                          ? void 0
                          : null === (b = y.title) || void 0 === b
                          ? void 0
                          : b.replace(/\s+/g, '-')
                      )
                  }
                : null
            ],
            ea = er.filter(function (e) {
              return null !== e
            }),
            ec = es.filter(function (e) {
              return null !== e
            })
          return (0, s.jsxs)('div', {
            children: [
              (0, s.jsxs)(c(), {
                children: [
                  (0, s.jsx)('title', { children: Z || '' }),
                  (0, s.jsx)('meta', { name: 'description', content: S || '' })
                ]
              }),
              (0, s.jsx)(x.Z, { breadcrumbsItems: k && k.length ? ec : ea }),
              (0, s.jsxs)('div', {
                className: 'dir-rtl container max-w-5xl py-10 flex flex-col',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'flex flex-col gap-5',
                    children: [
                      (0, s.jsx)(m, { articles: E }),
                      (0, s.jsx)('div', {
                        ref: ei,
                        children: (0, s.jsx)(p.Z, {
                          value: 'قد تهمك نتائج بحث مشابهة'
                        })
                      }),
                      (0, s.jsx)('div', {
                        className: 'flex gap-2',
                        children:
                          P &&
                          P.map(function (e) {
                            return (0,
                            s.jsx)(d(), { href: e.href, children: (0, s.jsx)('a', { className: 'text-primary cursor-pointer hover: underline w-28', children: e.title }) }, Math.random())
                          })
                      })
                    ]
                  }),
                  (0, s.jsxs)('div', {
                    className:
                      'container max-w-[736px] flex flex-col gap-2 mt-10 p-0',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'self-start flex gap-2 items-center',
                        children: [
                          (0, s.jsx)(p.Z, {
                            value: ''
                              .concat(T && 0 !== T.id ? T.title : '', ' ')
                              .concat(M ? M.title : '', ' في ')
                              .concat(k && k.length ? k[0].title : 'الكويت')
                          }),
                          (0, s.jsxs)('p', {
                            className: 'text-lg md:text-xl',
                            children: ['(', G || 0, ' إعلان)']
                          })
                        ]
                      }),
                      (0, s.jsx)('div', {
                        className: 'w-full',
                        children:
                          X &&
                          X.length > 0 &&
                          X.map(function (e) {
                            return (0,
                            s.jsx)(d(), { href: '/post/'.concat(e.id), children: (0, s.jsx)('a', { children: (0, s.jsx)(v.Z, { post: e }, e.id) }) }, e.id)
                          })
                      })
                    ]
                  }),
                  (0, s.jsx)('div', { ref: et }),
                  W &&
                    (0, s.jsx)('div', {
                      className: 'flex justify-center mt-10',
                      children: (0, s.jsxs)('svg', {
                        'aria-hidden': 'true',
                        role: 'status',
                        className: 'inline w-10 h-10 text-primary animate-spin',
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
                    }),
                  G && Q >= G
                    ? (0, s.jsx)('p', {
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
    }
  },
  function (e) {
    e.O(0, [741, 523, 774, 888, 179], function () {
      return e((e.s = 1071))
    }),
      (_N_E = e.O())
  }
])
