;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [687],
  {
    384: function (e, t, i) {
      let n = i(959),
        s = n.forwardRef(function ({ title: e, titleId: t, ...i }, s) {
          return n.createElement(
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
              i
            ),
            e ? n.createElement('title', { id: t }, e) : null,
            n.createElement('path', {
              fillRule: 'evenodd',
              d: 'M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z',
              clipRule: 'evenodd'
            })
          )
        })
      e.exports = s
    },
    165: function (e, t, i) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/post/[id]',
        function () {
          return i(4559)
        }
      ])
    },
    7257: function (e, t, i) {
      'use strict'
      var n = i(7135),
        s = i(6583),
        a = i(1527),
        l = i(959),
        r = i(384),
        c = i(1463),
        o = i.n(c),
        d = function (e) {
          var t,
            i = e.breadcrumbsItems,
            c = (0, l.useState)(!0),
            d = c[0],
            u = c[1],
            m = (0, l.useState)([]),
            h = m[0],
            x = m[1]
          ;(0, l.useEffect)(
            function () {
              null !== i && x(i), u(!1)
            },
            [i]
          )
          var p =
            ((t = (0, n.Z)(function (e) {
              return (0, s.__generator)(this, function (t) {
                return o().push(e.href), [2]
              })
            })),
            function (e) {
              return t.apply(this, arguments)
            })
          return (0, a.jsx)('nav', {
            className: ''.concat(
              (null == h ? void 0 : h.length) ? 'block' : 'hidden',
              ' flex justify-center py-2 md:pr-10 dir-rtl border'
            ),
            'aria-label': 'Breadcrumb',
            children: (0, a.jsx)('div', {
              className: 'max-w-6xl w-full',
              children: d
                ? (0, a.jsxs)('svg', {
                    'aria-hidden': 'true',
                    role: 'status',
                    className: 'inline w-7 h-7 text-primary animate-spin',
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
                : (0, a.jsx)('ol', {
                    className: 'flex items-center flex-wrap',
                    children:
                      h &&
                      h.map(function (e, t) {
                        return (0, a.jsxs)(
                          'li',
                          {
                            className: 'flex gap-2 items-center',
                            children: [
                              (0, a.jsx)('a', {
                                className:
                                  'text-sm px-2 cursor-pointer hover:underline',
                                onClick: function () {
                                  return p(e)
                                },
                                children: e.title
                              }),
                              h.length - 1 > t &&
                                (0, a.jsx)(r, {
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
      t.Z = d
    },
    4559: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, {
          __N_SSP: function () {
            return p
          }
        })
      var n = i(1527),
        s = i(959),
        a = i(2829),
        l = i.n(a),
        r = i(7889),
        c = i.n(r),
        o = i(7257),
        d = i(6466),
        u = i(8766),
        m = i(9277),
        h = c()(
          function () {
            return Promise.all([i.e(794), i.e(386)]).then(i.bind(i, 7599))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7599]
              }
            },
            suspense: !0
          }
        ),
        x = function (e) {
          var t,
            i = e.post,
            a = (0, s.useState)(!1),
            r = a[0],
            c = a[1],
            x = (0, m.Z)(
              null == i
                ? void 0
                : null === (t = i.updated_at) || void 0 === t
                ? void 0
                : t.toString()
            ),
            p = x.unit,
            f = x.timeElapsed,
            g = [
              { title: 'الكويت', href: '/' },
              {
                title: 'عقارات '.concat(
                  null == i ? void 0 : i.category_title,
                  ' في الكويت'
                ),
                href: '/'.concat(null == i ? void 0 : i.category_title)
              },
              {
                title: ''
                  .concat(null == i ? void 0 : i.category_title, ' في ')
                  .concat(null == i ? void 0 : i.state_title),
                href: '/'
                  .concat(null == i ? void 0 : i.category_title, '/')
                  .concat(
                    null == i ? void 0 : i.state_title.replace(/\s+/g, '-')
                  )
              },
              {
                title: ''
                  .concat(null == i ? void 0 : i.category_title, ' في ')
                  .concat(null == i ? void 0 : i.city_title),
                href: '/'
                  .concat(null == i ? void 0 : i.category_title, '/')
                  .concat(
                    null == i ? void 0 : i.city_title.replace(/\s+/g, '-')
                  )
              },
              {
                title: ''.concat(null == i ? void 0 : i.title),
                href: '/post/'.concat(null == i ? void 0 : i.id)
              }
            ]
          return (0, n.jsxs)('div', {
            children: [
              (0, n.jsx)(o.Z, { breadcrumbsItems: g }),
              (0, n.jsxs)('div', {
                className: 'dir-rtl grid gap-8 pb-10',
                children: [
                  (0, n.jsxs)('div', {
                    className:
                      'bg-primary-light flex flex-col gap-2 md:gap-7 justify-center items-center text-white px-10 py-8 md:py-10 rounded-b-lg md:rounded-none',
                    children: [
                      (0, n.jsx)(u.Z, {
                        value: null == i ? void 0 : i.title,
                        light: !0
                      }),
                      (0, n.jsxs)('div', {
                        className:
                          'font-DroidArabicKufiBold font-bold text-lg md:text-xl',
                        children: [null == i ? void 0 : i.price, ' دك']
                      }),
                      (0, n.jsxs)('div', {
                        className: 'flex gap-3 dir-ltr mt-5 md:mt-0',
                        children: [
                          (0, n.jsx)('div', {
                            className:
                              'flex items-center bg-primary-dark px-2 py-1 rounded-lg',
                            children: (0, n.jsx)(l(), {
                              src: '/images/share.svg',
                              width: 17,
                              height: 17,
                              alt: 'share_icon'
                            })
                          }),
                          (0, n.jsxs)('div', {
                            className:
                              'flex flex-nowrap gap-2 items-center bg-primary-dark px-2 py-1 rounded-lg',
                            children: [
                              (0, n.jsx)('div', {
                                className: 'md:text-base text-sm',
                                children: i ? Math.floor(i.views) : ''
                              }),
                              (0, n.jsx)(l(), {
                                src: '/images/eye-white.svg',
                                width: 19,
                                height: 14,
                                alt: 'icon'
                              })
                            ]
                          }),
                          (0, n.jsxs)('div', {
                            className:
                              'flex flex-nowrap gap-2 items-center bg-primary-dark px-2 py-1 rounded-lg',
                            children: [
                              (0, n.jsx)('div', {
                                className: 'dir-rtl md:text-base text-sm',
                                children: ''.concat(f, ' ').concat(p)
                              }),
                              (0, n.jsx)(l(), {
                                src: '/images/time-white.svg',
                                width: 17,
                                height: 17,
                                alt: 'icon'
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  (0, n.jsxs)('div', {
                    className: 'container max-w-6xl text-center',
                    children: [
                      (0, n.jsx)('div', {
                        className: 'text-sm md:text-lg',
                        children: null == i ? void 0 : i.description
                      }),
                      (0, n.jsxs)('div', {
                        className: 'flex gap-3 justify-center mt-5',
                        children: [
                          (0, n.jsxs)('a', {
                            href: 'tel:+96599491575',
                            className:
                              'bg-custom-green py-3 hover:opacity-90 transition-opacity duration-300 w-32 flex items-center justify-center gap-1 text-center text-white rounded-md',
                            children: [
                              null == i ? void 0 : i.phone,
                              (0, n.jsx)(l(), {
                                src: '/images/call-white.svg',
                                height: 24,
                                width: 24,
                                className:
                                  'text-white font-DroidArabicKufiBold',
                                alt: 'phone_icon'
                              })
                            ]
                          }),
                          (0, n.jsx)('div', {
                            className:
                              'shadow-md rounded-md p-3 flex items-center justify-center',
                            children: (0, n.jsx)(l(), {
                              src: '/images/whatsapp-logo-green.svg',
                              width: 24,
                              height: 24,
                              alt: 'whatsapp'
                            })
                          })
                        ]
                      }),
                      i && i.media && i.media.length
                        ? (0, n.jsxs)('div', {
                            className:
                              'mt-10 relative flex flex-col items-center',
                            children: [
                              (0, n.jsx)('div', {
                                className: 'relative',
                                children: (0, d.Z)(i.media[0])
                                  ? (0, n.jsx)(
                                      l(),
                                      {
                                        src: '/images/posts/'.concat(
                                          i.media[0]
                                        ),
                                        alt: 'post_image',
                                        width: 500,
                                        height: 500,
                                        objectFit: 'contain',
                                        className: 'cursor-pointer',
                                        onClick: function () {
                                          return c(!0)
                                        }
                                      },
                                      Math.random()
                                    )
                                  : (0, n.jsxs)('video', {
                                      className: 'max-w-lg',
                                      controls: !0,
                                      onClick: function () {
                                        return c(!0)
                                      },
                                      children: [
                                        (0, n.jsx)('source', {
                                          src: '/images/posts/'.concat(
                                            i.media[0]
                                          )
                                        }),
                                        'Your browser does not support the video tag.'
                                      ]
                                    })
                              }),
                              (0, n.jsx)('div', {
                                className:
                                  'mt-5 flex flex-wrap justify-center gap-5',
                                children: i.media.map(function (e) {
                                  return (0, d.Z)(e)
                                    ? (0, n.jsx)(
                                        l(),
                                        {
                                          src: '/images/posts/'.concat(e),
                                          width: 100,
                                          height: 100,
                                          objectFit: 'contain',
                                          alt: 'post_image',
                                          className: 'cursor-pointer',
                                          onClick: function () {
                                            return c(!0)
                                          }
                                        },
                                        Math.random()
                                      )
                                    : (0, n.jsxs)(
                                        'video',
                                        {
                                          className: 'w-24 h-24',
                                          controls: !0,
                                          children: [
                                            (0, n.jsx)('source', {
                                              src: '/images/posts/'.concat(e)
                                            }),
                                            'Your browser does not support the video tag.'
                                          ]
                                        },
                                        Math.random()
                                      )
                                })
                              })
                            ]
                          })
                        : null,
                      i && i.media && i.media.length
                        ? (0, n.jsx)('div', {
                            children: (0, n.jsx)(s.Suspense, {
                              fallback: 'Loading...',
                              children: (0, n.jsx)(h, {
                                media: i.media,
                                open: r,
                                setOpen: c
                              })
                            })
                          })
                        : null
                    ]
                  })
                ]
              })
            ]
          })
        },
        p = !0
      t.default = x
    },
    9277: function (e, t) {
      'use strict'
      var i = function (e) {
        if (!e) return { unit: '-', timeElapsed: '-' }
        var t = new Date(Date.parse(e)),
          i = new Date(Date.now()).getTime() - t.getTime(),
          n = Math.floor(i / 864e5),
          s = Math.floor((i / 36e5) % 24),
          a = '',
          l = 0
        return (
          n >= 1
            ? ((a = 'يوم'), (l = n))
            : s >= 1
            ? ((a = 'ساعة'), (l = s))
            : ((a = 'دقيقة'), (l = Math.floor((i / 6e4) % 60))),
          { unit: a, timeElapsed: l }
        )
      }
      t.Z = i
    },
    6466: function (e, t) {
      'use strict'
      var i = function (e) {
        return null != e.match(/\.(jpeg|jpg|gif|png|svg)$/)
      }
      t.Z = i
    }
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 165))
    }),
      (_N_E = e.O())
  }
])
