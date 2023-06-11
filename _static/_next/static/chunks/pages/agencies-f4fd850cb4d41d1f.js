;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [546, 578],
  {
    384: function (e, t, a) {
      let s = a(959),
        n = s.forwardRef(function ({ title: e, titleId: t, ...a }, n) {
          return s.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                'aria-hidden': 'true',
                ref: n,
                'aria-labelledby': t
              },
              a
            ),
            e ? s.createElement('title', { id: t }, e) : null,
            s.createElement('path', {
              fillRule: 'evenodd',
              d: 'M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z',
              clipRule: 'evenodd'
            })
          )
        })
      e.exports = n
    },
    5274: function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/agencies',
        function () {
          return a(8965)
        }
      ])
    },
    5779: function (e, t, a) {
      'use strict'
      var s = a(1527),
        n = a(4978),
        r = a(143),
        l = a.n(r)
      a(959)
      var i = function (e) {
        var t = e.headline,
          a = e.items,
          r = e.ctaList
        return (0, s.jsxs)('div', {
          className:
            'border border-custom-gray-border w-full max-w-md px-10 py-3 md:py-8 rounded-lg bg-white',
          children: [
            (0, s.jsx)('h2', {
              className: 'text-base md:text-2xl text-center',
              children: t
            }),
            (0, s.jsx)('div', {
              className:
                'mt-2 md:mt-8 flex gap-5 md:gap-10 justify-center w-full',
              children: a.map(function (e) {
                return (0,
                s.jsxs)('div', { className: 'flex flex-col justify-center items-center gap-1', children: [(0, s.jsx)('p', { className: 'text-lg whitespace-nowrap text-primary font-DroidArabicKufiBold', children: e.value }), (0, s.jsx)('span', { className: 'overflow-hidden whitespace-nowrap', children: (0, s.jsx)(n.Z, { value: e.title }) })] }, Math.random())
              })
            }),
            (0, s.jsx)('div', {
              className: 'w-full flex justify-center gap-3',
              children: r.map(function (e, t) {
                return (0,
                s.jsx)(l(), { href: e.href, children: (0, s.jsx)('button', { type: 'submit', className: ''.concat(1 === t ? 'bg-white text-secondary shadow-md border' : 'bg-secondary text-white', ' rounded-lg mt-4 md:mt-8 py-2 md:py-4 w-full max-w-xs hover:opacity-90 transition-opacity duration-300'), children: e.title }) }, ''.concat(e.title + t))
              })
            })
          ]
        })
      }
      t.Z = i
    },
    7257: function (e, t, a) {
      'use strict'
      var s = a(7135),
        n = a(6583),
        r = a(1527),
        l = a(959),
        i = a(384),
        c = a(1463),
        o = a.n(c),
        d = function (e) {
          var t,
            a = e.breadcrumbsItems,
            c = (0, l.useState)(!0),
            d = c[0],
            u = c[1],
            m = (0, l.useState)([]),
            h = m[0],
            x = m[1]
          ;(0, l.useEffect)(
            function () {
              null !== a && x(a), u(!1)
            },
            [a]
          )
          var p =
            ((t = (0, s.Z)(function (e) {
              return (0, n.__generator)(this, function (t) {
                return o().push(e.href), [2]
              })
            })),
            function (e) {
              return t.apply(this, arguments)
            })
          return (0, r.jsx)('nav', {
            className: ''.concat(
              (null == h ? void 0 : h.length) ? 'block' : 'hidden',
              ' flex justify-center py-2 md:pr-10 dir-rtl border'
            ),
            'aria-label': 'Breadcrumb',
            children: (0, r.jsx)('div', {
              className: 'max-w-6xl w-full',
              children: d
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
                      h &&
                      h.map(function (e, t) {
                        return (0, r.jsxs)(
                          'li',
                          {
                            className: 'flex gap-2 items-center',
                            children: [
                              (0, r.jsx)('a', {
                                className:
                                  'text-sm px-2 cursor-pointer hover:underline',
                                onClick: function () {
                                  return p(e)
                                },
                                children: e.title
                              }),
                              h.length - 1 > t &&
                                (0, r.jsx)(i, {
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
    1752: function (e, t, a) {
      'use strict'
      var s = a(7135),
        n = a(6583),
        r = a(1527),
        l = a(959),
        i = a(2829),
        c = a.n(i),
        o = a(3096),
        d = a(8766),
        u = a(1463),
        m = a.n(u),
        h = a(9248),
        x = a(2578),
        p = a(4249),
        f = a(7383),
        g = function (e) {
          var t,
            a = e.packageItem,
            i = e.thumbnailSmall,
            u = e.styleRow,
            g = (0, l.useState)(!1),
            v = g[0],
            j = g[1],
            w = (0, l.useState)(!1),
            y = w[0],
            b = w[1],
            N = (0, p.oR)(),
            C = N.user,
            Z = N.updateToast,
            k =
              ((t = (0, s.Z)(function (e, t) {
                var a, s, r, l, i, c, d, u, p, f, g, v, j
                return (0, n.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (
                        ((a = t.packageId),
                        (s = t.title),
                        (r = t.cost),
                        (l = t.numOfCredits),
                        e.preventDefault(),
                        !C)
                      )
                        return [2, m().push('/login')]
                      b(!0),
                        (i = o.Z.kpayResponseUrl),
                        (c = o.Z.kpayErrorUrl),
                        (d = new Date().valueOf()),
                        (u = {
                          currencycode: '414',
                          id: o.Z.tranportalId,
                          password: o.Z.tranportalPassword,
                          action: '1',
                          langid: 'AR',
                          amt: r,
                          responseURL: i,
                          errorURL: c,
                          trackid: d,
                          udf1: l,
                          udf3: null == C ? void 0 : C.phone
                        }),
                        (p = ''),
                        Object.keys(u).forEach(function (e) {
                          p += ''.concat(e, '=').concat(u[e], '&')
                        }),
                        (f = (0, h.Z)(p, o.Z.termResourceKey)),
                        (p = ''
                          .concat(f, '&tranportalId=')
                          .concat(o.Z.tranportalId, '&responseURL=')
                          .concat(i, '&errorURL=')
                          .concat(c)),
                        (g = ''
                          .concat(o.Z.kpayUrl, '?param=paymentInit&trandata=')
                          .concat(p)),
                        (v = {
                          trackId: d,
                          packageId: a,
                          amount: r,
                          packageTitle: s,
                          status: 'created'
                        }),
                        (n.label = 1)
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          (0, x.Z)({
                            url: '/transaction',
                            method: 'POST',
                            data: { payload: v }
                          })
                        ]
                      )
                    case 2:
                      return n.sent(), b(!1), m().push(g), [3, 4]
                    case 3:
                      return (
                        (j = n.sent()),
                        b(!1),
                        Z(!0, 'Error: '.concat(j.message), !0),
                        [3, 4]
                      )
                    case 4:
                      return [2, 0]
                  }
                })
              })),
              function (e, a) {
                return t.apply(this, arguments)
              })
          return (0, r.jsxs)('div', {
            className: ''.concat(
              u ? 'md:grid-cols-1' : 'md:grid-cols-2',
              ' grid grid-cols-2 w-full md:w-auto place-items-center gap-5 bg-white p-2 md:p-4 rounded-lg border border-gray-300 shadow-md'
            ),
            children: [
              (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                  className: ''.concat(
                    i ? 'md:h-48 md:w-48' : 'md:h-64 md:w-64',
                    ' rounded-lg h-36 w-36 overflow-hidden relative'
                  ),
                  children: [
                    (0, r.jsx)(c(), {
                      src: '/images/'.concat(a.thumbnail),
                      layout: 'fill',
                      objectFit: 'contain',
                      alt: 'package'
                    }),
                    (0, r.jsx)('div', {
                      className: 'absolute w-full h-full bg-gray-900 opacity-40'
                    }),
                    (0, r.jsxs)('button', {
                      type: 'submit',
                      className:
                        'absolute w-full h-full flex items-center justify-center',
                      onClick: function () {
                        return j(!0)
                      },
                      children: [
                        (0, r.jsx)(d.Z, {
                          value: 'اضغط هنا للتفاصيل',
                          light: !0
                        }),
                        y &&
                          (0, r.jsxs)('svg', {
                            'aria-hidden': 'true',
                            role: 'status',
                            className:
                              'inline w-5 h-5 mr-3 text-white animate-spin',
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
                      ]
                    })
                  ]
                })
              }),
              (0, r.jsxs)('div', {
                className:
                  'flex flex-col gap-2 md:gap-5 justify-center items-center text-center w-full',
                children: [
                  (0, r.jsx)(d.Z, { value: a.title }),
                  (0, r.jsx)('div', {
                    className: 'grid gap-3 md:w-full',
                    children:
                      a &&
                      a.list.map(function (e) {
                        return (0, r.jsx)(
                          'a',
                          {
                            onClick: function (t) {
                              return k(t, e)
                            },
                            className:
                              'bg-secondary text-white text-sm md:text-base text-center px-5 md:px-auto py-2 md:py-4 rounded-md hover:opacity-90 transition-opacity duration-300',
                            children: e.description
                          },
                          e.packageId
                        )
                      })
                  })
                ]
              }),
              (0, r.jsx)(f.Z, { open: v, setOpen: j, thumbnail: a.thumbnail })
            ]
          })
        }
      t.Z = g
    },
    7383: function (e, t, a) {
      'use strict'
      var s = a(1527),
        n = a(959),
        r = a(9326),
        l = a(4),
        i = a(2829),
        c = a.n(i),
        o = function (e) {
          var t = e.open,
            a = e.setOpen,
            i = e.thumbnail
          return (0, s.jsx)(r.u.Root, {
            show: t,
            as: n.Fragment,
            children: (0, s.jsxs)(l.V, {
              as: 'div',
              className: 'relative z-20',
              onClose: a,
              children: [
                (0, s.jsx)(r.u.Child, {
                  as: n.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, s.jsx)('div', {
                    className:
                      'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
                  })
                }),
                (0, s.jsx)('div', {
                  className: 'fixed inset-0 z-10 overflow-y-auto',
                  children: (0, s.jsx)('div', {
                    className:
                      'flex min-h-full items-center justify-center p-4 text-center sm:p-0',
                    children: (0, s.jsx)(r.u.Child, {
                      as: n.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, s.jsxs)(l.V.Panel, {
                        className:
                          'relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6',
                        children: [
                          (0, s.jsx)('div', {
                            children: (0, s.jsx)(c(), {
                              src: '/images/'.concat(i),
                              width: 600,
                              height: 600,
                              alt: 'package'
                            })
                          }),
                          (0, s.jsx)('div', {
                            className:
                              'mt-5 sm:mt-6 w-full flex justify-center',
                            children: (0, s.jsx)('button', {
                              type: 'submit',
                              className:
                                'rounded-md bg-primary-lighter px-4 py-4 text-base font-medium shadow-sm focus:outline-none',
                              onClick: function () {
                                return a(!1)
                              },
                              children: 'إغلاق'
                            })
                          })
                        ]
                      })
                    })
                  })
                })
              ]
            })
          })
        }
      t.Z = o
    },
    3096: function (e, t, a) {
      'use strict'
      var s,
        n,
        r = a(1065),
        l = {
          nodeEnv:
            null !== (s = r.env.NEXT_PUBLIC_NODE_ENV) && void 0 !== s
              ? s
              : 'development',
          port: null !== (n = r.env.NEXT_PUBLIC_PORT) && void 0 !== n ? n : 3e3,
          domain: r.env.DOMAIN,
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
      t.Z = l
    },
    6479: function (e, t, a) {
      'use strict'
      a.d(t, {
        R: function () {
          return l
        }
      })
      var s = a(5421),
        n = a(7319),
        r = a(959)
      function l(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { threshold: 0.5 },
          a = (0, r.useState)(!1),
          l = a[0],
          i = a[1]
        return (
          (0, r.useEffect)(
            function () {
              var a = new IntersectionObserver(function (e) {
                var t,
                  a,
                  r = ((function (e) {
                    if (Array.isArray(e)) return e
                  })(e) ||
                    (0, s.Z)(e, 1) ||
                    (0, n.Z)(e, 1) ||
                    (function () {
                      throw TypeError(
                        'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      )
                    })())[0]
                i(r.isIntersecting)
              }, t)
              return (
                e.current && a.observe(e.current),
                function () {
                  e.current && a.unobserve(e.current)
                }
              )
            },
            [e, t]
          ),
          l
        )
      }
    },
    8965: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, {
          __N_SSP: function () {
            return C
          },
          default: function () {
            return Z
          }
        })
      var s = a(1527),
        n = a(7135),
        r = a(9970),
        l = a(6583),
        i = a(959),
        c = a(143),
        o = a.n(c),
        d = a(8766),
        u = a(4978),
        m = a(5779),
        h = a(2578),
        x = a(6479),
        p = a(1752),
        f = a(2829),
        g = a.n(f),
        v = i.forwardRef(function (e, t) {
          var a = e.id,
            n = e.name,
            r = e.phone,
            l = e.logo_url,
            i = e.socialLinks
          return (0, s.jsxs)('div', {
            className:
              'grid grid-cols-3 md:grid-cols-1 place-items-center bg-white p-2 rounded-lg border border-gray-300 shadow-sm cursor-pointer w-max',
            children: [
              (0, s.jsx)(o(), {
                href: '/agent/'.concat(a),
                children: (0, s.jsx)('a', {
                  children: (0, s.jsx)('div', {
                    className: 'w-full flex justify-center md:mb-2',
                    children: (0, s.jsx)('div', {
                      className:
                        'w-28 h-28 rounded-lg overflow-hidden relative',
                      children: (0, s.jsx)(g(), {
                        src: '/images/agents/'.concat(l) || 0,
                        layout: 'fill',
                        objectFit: 'cover',
                        alt: 'agency'
                      })
                    })
                  })
                })
              }),
              (0, s.jsxs)('div', {
                className: 'col-span-2 place-items-center',
                children: [
                  (0, s.jsx)('div', {
                    className: 'w-full text-center',
                    children: (0, s.jsx)(o(), {
                      href: '/agent/'.concat(a),
                      children: (0, s.jsx)('a', {
                        className:
                          'font-DroidArabicKufiBold text-sm md:text-base hover:text-primary hover:underline cursor-pointer',
                        children: n
                      })
                    })
                  }),
                  (0, s.jsxs)('div', {
                    className:
                      'mt-2 w-full flex items-center justify-center gap-2',
                    children: [
                      (0, s.jsx)('div', {
                        className: 'w-28',
                        children: (0, s.jsxs)('a', {
                          href: 'tel:+96599491575',
                          className:
                            'bg-primary text-sm flex items-center justify-center gap-2 text-center text-white w-full py-2 rounded-md',
                          children: [
                            r,
                            ' ',
                            (0, s.jsx)(g(), {
                              src: '/images/call-white.svg',
                              height: 16,
                              width: 16,
                              className: 'text-white',
                              alt: 'phone_icon'
                            })
                          ]
                        })
                      }),
                      (0, s.jsx)('div', {
                        className:
                          'shadow-md rounded-md p-2 flex items-center justify-center',
                        children: (0, s.jsx)(g(), {
                          src: '/images/whatsapp-logo-blue.svg',
                          width: 20,
                          height: 20,
                          alt: 'whatsapp'
                        })
                      })
                    ]
                  }),
                  (0, s.jsx)('div', {
                    className: 'flex w-full mt-3 gap-2 justify-center h-7',
                    children:
                      null == i
                        ? void 0
                        : i.map(function (e) {
                            if (e.href)
                              return (0, s.jsx)(
                                o(),
                                {
                                  href: e.href,
                                  children: (0, s.jsx)('a', {
                                    className:
                                      'p-2 rounded-full bg-custom-gray-2 flex items-center',
                                    children: (0, s.jsx)(g(), {
                                      src: e.image,
                                      width: 14,
                                      height: 14,
                                      alt: 'social_link'
                                    })
                                  })
                                },
                                Math.random()
                              )
                          })
                  })
                ]
              })
            ]
          })
        }),
        j = [
          {
            thumbnail: 'topup-agent.png',
            title: 'باقة المكاتب',
            list: [
              {
                packageId: 3,
                title: 'agent1',
                cost: 100,
                numOfCredits: 30,
                description: '2 أشهر 100 دك'
              },
              {
                packageId: 4,
                title: 'agent2',
                cost: 270,
                numOfCredits: 90,
                description: '6 أشهر 270 دك'
              }
            ]
          }
        ],
        w = function (e) {
          var t,
            a = e.isLoggedIn,
            c = e.agencyList,
            f = e.totalRows,
            g = e.thumbnailSmall,
            w = e.agent,
            y = e.credits,
            b = w ? new Date(null == w ? void 0 : w.expiry_date) : void 0,
            N = null == b ? void 0 : b.getHours().toString().padStart(2, '0'),
            C = null == b ? void 0 : b.getMinutes().toString().padStart(2, '0'),
            Z = (0, i.useState)(c),
            k = Z[0],
            _ = Z[1],
            E = (0, i.useState)((null == k ? void 0 : k.length) || 0),
            S = E[0],
            I = E[1],
            R = (0, i.useState)(10),
            L = R[0],
            B = R[1],
            O = (0, i.useState)(10)[0],
            M = (0, i.useState)(!1),
            T = M[0],
            U = M[1],
            F = (0, i.useRef)(null),
            P = (0, x.R)(F),
            A = [
              { title: 'مجاني', value: (null == y ? void 0 : y.free) || 0 },
              { title: 'اضافي', value: (null == y ? void 0 : y.regular) || 0 },
              { title: 'مميز', value: (null == y ? void 0 : y.sticky) || 0 }
            ],
            D = [
              {
                title: 'عدد الإعلانات',
                value: (null == y ? void 0 : y.agent) || 0
              },
              {
                title: 'تاريخ الإنتهاء',
                value: b ? b.toISOString().substring(0, 10) : '-'
              },
              {
                title: 'وقت الإنتهاء',
                value: N && C ? ''.concat(N, ':').concat(C, 'م') : '-'
              }
            ],
            K =
              ((t = (0, n.Z)(function () {
                var e
                return (0, l.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [
                          4,
                          (0, h.Z)({
                            method: 'GET',
                            url: '/agent/get-many?limit='
                              .concat(O, '&offset=')
                              .concat(L)
                          })
                        ]
                      )
                    case 1:
                      return (
                        (e = t.sent()),
                        U(!1),
                        _((0, r.Z)(k).concat((0, r.Z)(e.data.agents))),
                        B(function (e) {
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
          return (
            (0, i.useEffect)(
              function () {
                P && f && S < f && (U(!0), K())
              },
              [P]
            ),
            (0, i.useEffect)(
              function () {
                I(null == k ? void 0 : k.length)
              },
              [k]
            ),
            (0, s.jsxs)('div', {
              className: 'flex flex-col gap-5 w-full',
              children: [
                (0, s.jsx)('div', {
                  className: 'flex w-full justify-center',
                  children: a
                    ? (0, s.jsxs)('div', {
                        className:
                          'grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-auto place-items-center',
                        children: [
                          (0, s.jsx)(m.Z, {
                            headline: 'رصيدك من الاعلانات',
                            items: A,
                            ctaList: [{ title: 'اشحن الرصيد', href: '/topup' }]
                          }),
                          (0, s.jsx)(m.Z, {
                            headline: 'رصيد اشتراك المكتب',
                            items: D,
                            ctaList: [
                              { title: 'بياناتي', href: '/agent/edit' },
                              { title: 'صفحتي', href: '/agent' }
                            ]
                          })
                        ]
                      })
                    : j.map(function (e) {
                        return (0,
                        s.jsx)(p.Z, { packageItem: e, thumbnailSmall: g }, Math.random())
                      })
                }),
                (0, s.jsx)(u.Z, {
                  textBlack: !0,
                  children: (0, s.jsxs)('span', {
                    className:
                      'flex justify-center gap-2 pb-5 text-sm md:text-lg',
                    children: [
                      (0, s.jsx)(o(), {
                        href: 'https://api.whatsapp.com/send/?phone=96560444900&text&type=phone_number&app_absent=0',
                        children: (0, s.jsx)('a', {
                          className: 'text-primary hover:underline',
                          children: 'راسلنا بالواتس اب'
                        })
                      }),
                      (0, s.jsx)('span', { children: 'او' }),
                      (0, s.jsx)(o(), {
                        href: 'tel:+96560444900',
                        children: (0, s.jsx)('a', {
                          className: 'text-primary hover:underline',
                          children: 'اتصل بنا'
                        })
                      }),
                      (0, s.jsx)('span', { children: 'للمساعده' })
                    ]
                  })
                }),
                (0, s.jsx)('div', {
                  className: 'flex justify-center',
                  children: (0, s.jsx)(d.Z, { value: 'قائمة المكاتب' })
                }),
                (0, s.jsx)('div', {
                  className:
                    'flex flex-col md:flex-row flex-wrap justify-center md:justify-center gap-5',
                  children:
                    k &&
                    k.map(function (e) {
                      return (0,
                      s.jsx)(i.Fragment, { children: (0, s.jsx)(v, { id: e.id, name: e.name, phone: e.phone, logo_url: e.logo_url, socialLinks: e.socialLinks }) }, e.id)
                    })
                }),
                f &&
                  S >= f &&
                  (0, s.jsx)('p', {
                    className:
                      'text-center text-secondary font-DroidArabicKufiBold text-sm md:text-lg mt-8',
                    children: 'انتهت نتائج البحث ولا يوجد المزيد من الاعلانات'
                  }),
                (0, s.jsx)('div', { ref: F }),
                T &&
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
                  })
              ]
            })
          )
        },
        y = function () {
          return (0, s.jsx)('div', {
            className: 'dir-rtl bg-primary py-10',
            children: (0, s.jsxs)('div', {
              className: 'container max-w-6xl px-5 grid gap-10 text-white',
              children: [
                (0, s.jsx)(u.Z, {
                  light: !0,
                  value:
                    ' يمكنك البحث في تطبيق بو شملان دليل الكويت ومن خلال هذه الصفحه الخاصة بأهم المكاتب العقاريه في الكويت عن شقق للايجار وبيوت للبيع او اراضي للبدل وغيرها بأسعار مناسبة ومساحات متنوعه، فقد تكون عقارات الكويت في المتناول اليوم ولكن في المستقبل ربما قد ترتفع الأسعار بشكل كبير مما يؤدى الى تحقيق أرباح كبيرة في فترة وجيزة، كما تختلف العروض والاعلانات المقدمه من طرف المكاتب منها: شقق للبيع اوفلل للايجار، اراضي،مزارع، شاليهات، عمارات، .. الخ. فهذا النشاط يحقق الأمن والاستقرار لاصحاب العقارات لارتباطه دائما بقوة الطلب على القطاع العقاري.'
                }),
                (0, s.jsx)(u.Z, {
                  light: !0,
                  value:
                    'ان الاسواق العقارية تشهد الكثير من المتغيرات فيها، كونها تحتوي على العديد من عروض الطلب، البيع، الايجار والبدل، و هذه التغيرات ليست فقط من قبل المالك الذي يعرض للعقار، و لكن من قبل طلبات المشترين أيضا. فالمشتري يعرف بأنه ذو احتياج كبير لمن عنده الخبرة و المعرفة الكبيرة للسوق العقاري سواء للتخميم او للتسعير و اعطاء الافضلية بين العقارات و كل هذه الامور تنصب في الوكلاء العقاريون او الوكلاء العاملين في مكاتب عقاريه.'
                }),
                (0, s.jsx)(u.Z, {
                  light: !0,
                  value:
                    'كما يعد شراء العقارات من الأمور المكلفة ماليا وتحتاج في العديد من الأحيان خاصة لمعظم الناس ان يقوموا اما بالادخار الى فترات طويلة او اللجوء الى عملية الاقتراض ان كان عن طريق البنوك او عن طريق أشخاص عاديين، وتعتبر عملية السداد لفترات طويلة هي الاخرى، وبالتالي فإن العملية تحتاج الى الكثير من الحذر والانتباه لئلا يخسر الانسان الكثير في هذا العقار، ان كان اثناء عملية الشراء في عملية اختيار الموقع ونوع البناء وغيرها، هذا بالطبع الى جانب خدمة البيع اذا كنت ترغب في بيع العقار وبالتالي أن لا تخسر في سعره حين بيعه.'
                }),
                (0, s.jsxs)('ul', {
                  className: 'list-disc mr-5',
                  children: [
                    (0, s.jsxs)('li', {
                      children: [
                        (0, s.jsx)(u.Z, {
                          light: !0,
                          value: 'المكتب العقاري لا يبيع خدماته مجانا :'
                        }),
                        (0, s.jsx)('span', {
                          className: 'block mt-5',
                          children: (0, s.jsx)(u.Z, {
                            light: !0,
                            value:
                              'وهذه ايضا من النقاط الهامه التي يجب الانتباه اليها جيدا وهي أنك عندما تتعامل مع احد المكاتب العقارية فهو يبيعك الخدمة ولا يقدمها مجانا، فأنت فعليا تدفع له نسبة معينة من البيع او الشراء وبالتالي عليك ان تعرف كيف تختار ذلك المكتب وما الذي يقدمه لك فعليا مقابل المال الذي تدفعه له، انت تستحق ان تجد المكتب العقاري الافضل'
                          })
                        })
                      ]
                    }),
                    (0, s.jsxs)('li', {
                      className: 'mt-10',
                      children: [
                        (0, s.jsx)(u.Z, {
                          light: !0,
                          value: 'كيف تجد الوكيل العقاري الذي يحقق مطالبك :'
                        }),
                        (0, s.jsx)('span', {
                          className: 'block mt-5',
                          children: (0, s.jsx)(u.Z, {
                            light: !0,
                            value:
                              'لا تنخدع بالاسم فعالم الوكلاء التجاريون والعقاريين هم مثل كل العوالم التجارية الاخرى، يزخر بالكثير من الاسماء والمحال، بعضها اكتسب شهرته واسمه عن طريق الخدمة التي تقدم والتي اثبت خبرته في تقديمها، وهناك البعض الاخر الذي لم يقم بأي من هذه الافعال بل يشتري الشهرة عن طريق الدعاية المكثفة والتي قد تؤدي الى قرارات خاطئة في الكثير من الاحيان، فعليك ان تكون قادرا على ان تختار المكتب السليم الذي يقدم الخدمة التي ترغب بها'
                          })
                        })
                      ]
                    }),
                    (0, s.jsxs)('li', {
                      className: 'mt-10',
                      children: [
                        (0, s.jsx)(u.Z, {
                          light: !0,
                          value: 'داوم على البحث ولا تختر اول ما تقابل :'
                        }),
                        (0, s.jsx)('span', {
                          className: 'block mt-5',
                          children: (0, s.jsx)(u.Z, {
                            light: !0,
                            value:
                              'إياك والمخاطرة بالتوقيع والاتفاق مع أول مكتب يصادفك، بل حاول قدر الامكان ان تبحث عن بعض المكاتب الاخرى ، واستمر في هذا البحث، يمكن القيام بالتحري عبر الانترنت عن المكاتب والوكلاء العقاريين في المنطقة، ودونها على ورقة وابحث بين بعضهم، وقم بتقييمهم في المقابلة حتى تصل الى الوكيل الذي تقتنع انه الافضل لك.'
                          })
                        })
                      ]
                    }),
                    (0, s.jsxs)('li', {
                      className: 'mt-10',
                      children: [
                        (0, s.jsx)(u.Z, {
                          value: ' اسأل اصدقائك واقاربك :',
                          light: !0
                        }),
                        (0, s.jsx)('span', {
                          className: 'block mt-5',
                          children: (0, s.jsx)(u.Z, {
                            light: !0,
                            value:
                              'عندما تبحث عن المكتب العقاري لبيع او شراء عقار، عليك ان تسأل وتبحث بين اصدقائك عمن سبق له التعامل مع احد المكاتب العقارية، وكيف كانت المعاملة والنتيجة اذا كانت مرضية وهل كانت الخدمة جيدة، هذا الامر سيمنحك بعض الثقة عند تعاملك مع المكتب العقاري نتيجة للتجربة التي مر بها صديقك وبناءا عليها فأنت لا تشعر بالقلق كما لو كنت تتعامل مع احد المكاتب او الوكلاء للمرة الاولى.'
                          })
                        })
                      ]
                    }),
                    (0, s.jsxs)('li', {
                      className: 'mt-10',
                      children: [
                        (0, s.jsx)(u.Z, {
                          light: !0,
                          value: 'قم بالبحث حول بعض الامور العقارية :'
                        }),
                        (0, s.jsx)('span', {
                          className: 'block mt-5',
                          children: (0, s.jsx)(u.Z, {
                            light: !0,
                            value:
                              ' حاول ان تقوم بالبحث عبر الانترنت عن المعلومات التي تحتاجها في الامور العقارية، وحاول ان تسأل من معرفك و الاشخاص الذين لديهم اطلاع في بعض هذه المسائل عن الاسلوب الافضل والانجح في التعامل مع العقارات، هذه المعلومات سوف تفيدك لاحقا عند التعامل مع هذا المكتب وفي اثناء الجلسة، فأنت ستطلع على معلومات من عنده ومن خلال معرفتك السابقة يمكنك الحكم على تلك المعلومات المقدمه لك ما اذا كانت سليمه.'
                          })
                        })
                      ]
                    }),
                    (0, s.jsxs)('li', {
                      className: 'mt-10',
                      children: [
                        (0, s.jsx)(u.Z, {
                          light: !0,
                          value: 'كن أكثر مهنيه عند المقابلة مع المكتب :'
                        }),
                        (0, s.jsx)('span', {
                          className: 'block mt-5',
                          children: (0, s.jsx)(u.Z, {
                            light: !0,
                            value:
                              ' عندما تذهب الى المقابلة مع الوكيل العقاري، حاول ان تكون في الجلسة مهنيا كأكثر ما يكون ففي العادة يحاول ان يقدم نفسه على انه شخص ذو شخصية ودودة ولطيف، وهذا الامر يعني انه يحاول التقرب الى الزبون كأقرب ما يكون، ولهذا عليك ان تكون حذرا جدا في هذه المعاملة، وعليك ان تكون مهنيا ايضا فأنت قادم الى هذا المكتب من اجل القيام بعملية تجارية ومهنية بحتة لا من اجل التعارف، وعليه كن مستعدا للمقابلة وقم بإلقاء الاسئلة التي ترغب بمعرفة اجوبتها ومن ثم قم بتدوينها، و لا تخجل من الاستفسار عن اي امر يثير فضولك.'
                          })
                        })
                      ]
                    }),
                    (0, s.jsxs)('li', {
                      className: 'mt-10',
                      children: [
                        (0, s.jsx)(u.Z, {
                          light: !0,
                          value: 'ابحث عن الاسعار المماثلة :'
                        }),
                        (0, s.jsx)('span', {
                          className: 'block mt-5',
                          children: (0, s.jsx)(u.Z, {
                            light: !0,
                            value:
                              'عندما ترغب بشراء عقار معين او بيع العقار، حاول ان تبحث عبر الانترنت من خلال تطبيق عقارات الكويت بو شملان او المجلات والصحف العقارية عن الاسعار التي تعتبر قريبة الى اسعار العقار موضوع البيع والشراء، وحتى الايجار، وبذلك فأنت حين تقابل الوكيل العقاري ، او عندما تقصد المكتب، فتكون على علم بالسعر الذي ترغب بالبيع او الشراء او الايجار بها، فأنت في النهاية تقوم بعملية مالية وتجارية بحتة، وبالتالي فكل قرش يعني شيئا.'
                          })
                        })
                      ]
                    }),
                    (0, s.jsxs)('li', {
                      className: 'mt-10',
                      children: [
                        (0, s.jsx)(u.Z, {
                          light: !0,
                          value:
                            ' تاكد ان المكتب معتمد وموثق لدى الجهات المعنيه في دولة الكويت ولديها دفاتر ورخص صالحة وغير منتهية'
                        }),
                        (0, s.jsx)('span', {
                          className: 'block mt-5',
                          children: (0, s.jsx)(u.Z, {
                            light: !0,
                            value:
                              'عليك تحرى الدقة عن مصدر الإعلان، فإذا كان مكتب عقاري ينبغي عليك أولا التاكد من اعتماده لدى الجهات المعنية بالكويت، او اذا كانت شركة عقارية ابحث عن تاريخها وأعمالها السابقة وتأكد إذا كانت هناك شكوى من مشتريين سابقين أم لا. كذلك يجب عليك زيارة العقار في أرضه، لتتأكد من وجوده على أرض الواقع بكامل المواصفات التي تم الإعلان عنها حرصاً على أموالك.'
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          })
        },
        b = a(7257),
        N = [
          { title: 'الكويت', href: '/' },
          { title: 'المكاتب', href: '/المكاتب' }
        ],
        C = !0,
        Z = function (e) {
          var t = e.agents,
            a = e.totalRows,
            n = e.isLoggedIn,
            r = e.agent,
            l = e.credits
          return (0, s.jsxs)('div', {
            className: 'min-h-screen bg-gray-100',
            children: [
              (0, s.jsx)(b.Z, { breadcrumbsItems: N }),
              (0, s.jsx)('div', {
                className:
                  'dir-rtl container max-w-6xl pt-5 pb-10 flex flex-col items-center gap-5',
                children: (0, s.jsx)(w, {
                  isLoggedIn: n,
                  agent: r,
                  credits: l,
                  agencyList: t,
                  totalRows: a,
                  thumbnailSmall: !0
                })
              }),
              (0, s.jsx)(y, {})
            ]
          })
        }
    },
    2578: function (e, t, a) {
      'use strict'
      var s = a(8086),
        n = a(3096).Z.apiUrl || 'http://localhost:5000/api/v1'
      t.Z = s.Z.create({ withCredentials: !0, baseURL: n })
    },
    9248: function (e, t, a) {
      'use strict'
      a.d(t, {
        Z: function () {
          return l
        }
      })
      var s = a(9525),
        n = function (e) {
          var t = 16 - (e.length % 16)
          return e + t.toString().repeat(t)
        },
        r = a(1620).Buffer,
        l = function (e, t) {
          var a = n(e)
          try {
            var l = s.createCipheriv('aes-128-cbc', r.from(t), t),
              i = l.update(a)
            return (i = r.concat([i, l.final()])), ''.concat(i.toString('hex'))
          } catch (c) {}
          return 0
        }
    }
  },
  function (e) {
    e.O(0, [877, 741, 801, 774, 888, 179], function () {
      return e((e.s = 5274))
    }),
      (_N_E = e.O())
  }
])
