;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [334, 578],
  {
    384: function (e, t, r) {
      let n = r(959),
        o = n.forwardRef(function ({ title: e, titleId: t, ...r }, o) {
          return n.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                'aria-hidden': 'true',
                ref: o,
                'aria-labelledby': t
              },
              r
            ),
            e ? n.createElement('title', { id: t }, e) : null,
            n.createElement('path', {
              fillRule: 'evenodd',
              d: 'M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z',
              clipRule: 'evenodd'
            })
          )
        })
      e.exports = o
    },
    2033: function (e, t, r) {
      'use strict'
      var n = r(7135),
        o = r(6583),
        a = r(1527),
        l = r(959),
        i = r(9326),
        s = r(4),
        u = r(4249),
        c = r(8766),
        d = r(4978),
        p = r(2578),
        f = r(1463),
        m = r.n(f),
        h = function (e) {
          var t = e.userId,
            r = e.isOtpModalOpen,
            f = e.nextOperation,
            h = e.handleIsOtpModalOpen,
            v = e.handleSetShowPasswordField,
            g = (0, l.useState)(!1),
            y = g[0],
            x = g[1],
            w = (0, l.useState)(60),
            C = w[0],
            b = w[1],
            E = (0, l.useState)(''),
            T = E[0],
            P = E[1],
            j = (0, l.useState)(''),
            k = j[0],
            S = j[1],
            N = (0, l.useState)(!1),
            R = N[0],
            O = N[1],
            D = (0, l.useState)(!1),
            M = D[0],
            F = D[1],
            A = (0, u.oR)().updateToast
          ;(0, l.useEffect)(
            function () {
              C > 0 &&
                setTimeout(function () {
                  return b(C - 1)
                }, 1e3)
            },
            [C]
          ),
            (0, l.useEffect)(
              function () {
                x(r)
              },
              [r]
            )
          var B,
            I = function (e) {
              e.target.value.length <= 4 && P(e.target.value)
            },
            L = function () {
              S(''), T || S('مطلوب كود otp'), O(!0)
            },
            Z = function () {
              k.length ||
                (F(!0),
                (0, p.Z)({
                  method: 'POST',
                  url: '/otp/verify',
                  data: { userId: t, otpCode: T, nextOperation: f }
                })
                  .then(function (e) {
                    var t
                    F(!1),
                      A(
                        !0,
                        'Success: '.concat(
                          null == e
                            ? void 0
                            : null === (t = e.data) || void 0 === t
                            ? void 0
                            : t.success
                        ),
                        !1
                      ),
                      h(!1),
                      f && v ? v(!0) : m().push('/login')
                  })
                  .catch(function (e) {
                    var t
                    F(!1),
                      A(
                        !0,
                        'Error: '.concat(
                          null == e
                            ? void 0
                            : null === (t = e.response) || void 0 === t
                            ? void 0
                            : t.data
                        ),
                        !0
                      )
                  })),
                O(!1)
            }
          ;(0, l.useEffect)(
            function () {
              R && Z()
            },
            [R]
          )
          var V =
            ((B = (0, n.Z)(function () {
              var e, r, n
              return (0, o.__generator)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, , 3]),
                      F(!0),
                      [
                        4,
                        (0, p.Z)({
                          method: 'POST',
                          url: '/otp/resend',
                          data: {
                            userId: t,
                            type: f ? 'password-reset' : 'registration'
                          }
                        })
                      ]
                    )
                  case 1:
                    return (
                      (e = o.sent().data),
                      F(!1),
                      P(''),
                      b(60),
                      S(''),
                      A(
                        !0,
                        'Success: '.concat(null == e ? void 0 : e.success),
                        !1
                      ),
                      [3, 3]
                    )
                  case 2:
                    return (
                      (r = o.sent()),
                      F(!1),
                      A(
                        !0,
                        'Error: '.concat(
                          null == r
                            ? void 0
                            : null === (n = r.response) || void 0 === n
                            ? void 0
                            : n.data
                        ),
                        !0
                      ),
                      [3, 3]
                    )
                  case 3:
                    return [2]
                }
              })
            })),
            function () {
              return B.apply(this, arguments)
            })
          return (0, a.jsx)(i.u.Root, {
            show: y,
            as: l.Fragment,
            children: (0, a.jsxs)(s.V, {
              as: 'div',
              className: 'relative z-10 dir-rtl',
              onClose: h,
              children: [
                (0, a.jsx)(i.u.Child, {
                  as: l.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, a.jsx)('div', {
                    className:
                      'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
                  })
                }),
                (0, a.jsx)('div', {
                  className: 'fixed inset-0 z-10 overflow-y-auto',
                  children: (0, a.jsx)('div', {
                    className:
                      'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0',
                    children: (0, a.jsx)(i.u.Child, {
                      as: l.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, a.jsxs)(s.V.Panel, {
                        className:
                          'relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6',
                        children: [
                          (0, a.jsxs)('div', {
                            className:
                              'flex flex-col items-start text-start gap-3',
                            children: [
                              (0, a.jsx)(c.Z, { value: 'تأكيد رقم موبايلك' }),
                              (0, a.jsx)('div', {
                                className: 'mt-8',
                                children: (0, a.jsx)(d.Z, {
                                  textBlack: !0,
                                  value:
                                    'لقد أرسلنا للتو رسالة نصية SMS وفيها رقم التفعيل OTP. أكتبه هنا لتأكيد موبايلك'
                                })
                              }),
                              (0, a.jsx)('div', {
                                children: (0, a.jsxs)('div', {
                                  className: 'flex gap-2',
                                  children: [
                                    (0, a.jsx)('p', {
                                      className: 'text-md',
                                      children: 'لم تصلك الرسالة النصية SMS ؟'
                                    }),
                                    C <= 0
                                      ? (0, a.jsx)('button', {
                                          type: 'button',
                                          className:
                                            'text-primary cursor-pointer hover:underline',
                                          onClick: V,
                                          children: 'أرسل مرة أخرى'
                                        })
                                      : (0, a.jsxs)('p', {
                                          className: 'text-primary ',
                                          children: ['ثانية ', C, ' إنتظر']
                                        })
                                  ]
                                })
                              }),
                              (0, a.jsxs)('div', {
                                className: 'relative w-full mt-5',
                                children: [
                                  (0, a.jsx)('input', {
                                    type: 'number',
                                    name: 'otp',
                                    id: 'otp',
                                    value: T,
                                    className: ''.concat(
                                      k
                                        ? 'border-custom-red focus:border-custom-red'
                                        : 'border-custom-gray-border focus:border-primary',
                                      ' block px-4 py-2.5 md:py-4 w-full text-black bg-transparent rounded-lg shadow-sm border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
                                    ),
                                    placeholder: ' ',
                                    onChange: function (e) {
                                      return I(e)
                                    }
                                  }),
                                  (0, a.jsx)('label', {
                                    htmlFor: 'otp',
                                    className: ''.concat(
                                      k
                                        ? 'text-custom-red peer-focus:text-custom-red'
                                        : 'text-custom-gray peer-focus:text-primary',
                                      ' absolute text-md duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0'
                                    ),
                                    children: 'رقم الموبايل'
                                  })
                                ]
                              }),
                              (0, a.jsx)('p', {
                                className: 'flex text-custom-red',
                                children: k
                              })
                            ]
                          }),
                          (0, a.jsxs)('div', {
                            className: 'mt-8 flex justify-center gap-3',
                            children: [
                              (0, a.jsxs)('button', {
                                type: 'button',
                                className:
                                  'flex justify-center items-center py-3 md:py-4 px-8 text-white md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-secondary',
                                onClick: function (e) {
                                  e.preventDefault(), L()
                                },
                                children: [
                                  'تأكيد الرقم',
                                  ' ',
                                  M &&
                                    (0, a.jsxs)('svg', {
                                      'aria-hidden': 'true',
                                      role: 'status',
                                      className:
                                        'inline w-5 h-5 mr-3 text-white animate-spin',
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
                                ]
                              }),
                              (0, a.jsx)('button', {
                                type: 'button',
                                className:
                                  'flex justify-center items-center py-3 md:py-4 px-8 text-black md:rounded-lg hover:opacity-90 transition-opacity duration-300 bg-primary-lighter',
                                onClick: function () {
                                  return h(!1)
                                },
                                children: 'إلغاء'
                              })
                            ]
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
      t.Z = h
    },
    7257: function (e, t, r) {
      'use strict'
      var n = r(7135),
        o = r(6583),
        a = r(1527),
        l = r(959),
        i = r(384),
        s = r(1463),
        u = r.n(s),
        c = function (e) {
          var t,
            r = e.breadcrumbsItems,
            s = (0, l.useState)(!0),
            c = s[0],
            d = s[1],
            p = (0, l.useState)([]),
            f = p[0],
            m = p[1]
          ;(0, l.useEffect)(
            function () {
              null !== r && m(r), d(!1)
            },
            [r]
          )
          var h =
            ((t = (0, n.Z)(function (e) {
              return (0, o.__generator)(this, function (t) {
                return u().push(e.href), [2]
              })
            })),
            function (e) {
              return t.apply(this, arguments)
            })
          return (0, a.jsx)('nav', {
            className: ''.concat(
              (null == f ? void 0 : f.length) ? 'block' : 'hidden',
              ' flex justify-center py-2 md:pr-10 dir-rtl border'
            ),
            'aria-label': 'Breadcrumb',
            children: (0, a.jsx)('div', {
              className: 'max-w-6xl w-full',
              children: c
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
                      f &&
                      f.map(function (e, t) {
                        return (0, a.jsxs)(
                          'li',
                          {
                            className: 'flex gap-2 items-center',
                            children: [
                              (0, a.jsx)('a', {
                                className:
                                  'text-sm px-2 cursor-pointer hover:underline',
                                onClick: function () {
                                  return h(e)
                                },
                                children: e.title
                              }),
                              f.length - 1 > t &&
                                (0, a.jsx)(i, {
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
      t.Z = c
    },
    3096: function (e, t, r) {
      'use strict'
      var n,
        o,
        a = r(1065),
        l = {
          nodeEnv:
            null !== (n = a.env.NEXT_PUBLIC_NODE_ENV) && void 0 !== n
              ? n
              : 'development',
          port: null !== (o = a.env.NEXT_PUBLIC_PORT) && void 0 !== o ? o : 3e3,
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
      t.Z = l
    },
    2578: function (e, t, r) {
      'use strict'
      var n = r(8086),
        o = r(3096).Z.apiUrl || 'http://localhost:5000/api/v1'
      t.Z = n.Z.create({ withCredentials: !0, baseURL: o })
    },
    1869: function (e, t, r) {
      'use strict'
      r.d(t, {
        J: function () {
          return a
        },
        K: function () {
          return o
        }
      })
      var n = r(5423),
        o = n
          .Rx()
          .typeError('يجب أن يكون الهاتف رقمًا')
          .required('الهاتف هو حقل مطلوب')
          .test('len', 'يجب أن يكون 8 أرقام', function (e) {
            return (null == e ? void 0 : e.toString().length) === 10
          }),
        a = n
          .Z_()
          .required('كلمة المرور هي حقل مطلوب')
          .min(3, 'يجب أن تتكون كلمة المرور من 3 أحرف على الأقل')
    },
    4: function (e, t, r) {
      'use strict'
      r.d(t, {
        V: function () {
          return ec
        }
      })
      var n,
        o = r(959),
        a = r(1044),
        l = r(1322),
        i = r(2293),
        s = r(1832),
        u = r(801),
        c = r(7970),
        d = r(1282),
        p = r(7719),
        f = r(3429),
        m = r(5742),
        h = r(5729),
        v = r(2048),
        g = r(9522),
        y = r(6945),
        x = r(8170),
        w = r(2683),
        C = r(6585),
        b =
          (((n = b || {})[(n.None = 1)] = 'None'),
          (n[(n.InitialFocus = 2)] = 'InitialFocus'),
          (n[(n.TabLock = 4)] = 'TabLock'),
          (n[(n.FocusLock = 8)] = 'FocusLock'),
          (n[(n.RestoreFocus = 16)] = 'RestoreFocus'),
          (n[(n.All = 30)] = 'All'),
          n)
      let E = Object.assign(
        (0, l.yV)(function (e, t) {
          let r = (0, o.useRef)(null),
            n = (0, i.T)(r, t),
            { initialFocus: s, containers: u, features: c = 30, ...b } = e
          ;(0, d.H)() || (c = 1)
          let E = (0, g.i)(r)
          !(function ({ ownerDocument: e }, t) {
            let r = (0, o.useRef)(null)
            ;(0, y.O)(
              null == e ? void 0 : e.defaultView,
              'focusout',
              (e) => {
                !t || r.current || (r.current = e.target)
              },
              !0
            ),
              (0, w.q)(() => {
                t ||
                  ((null == e ? void 0 : e.activeElement) ===
                    (null == e ? void 0 : e.body) && (0, f.C5)(r.current),
                  (r.current = null))
              }, [t])
            let n = (0, o.useRef)(!1)
            ;(0, o.useEffect)(
              () => (
                (n.current = !1),
                () => {
                  ;(n.current = !0),
                    (0, x.Y)(() => {
                      n.current && ((0, f.C5)(r.current), (r.current = null))
                    })
                }
              ),
              []
            )
          })({ ownerDocument: E }, Boolean(16 & c))
          let P = (function (
            { ownerDocument: e, container: t, initialFocus: r },
            n
          ) {
            let a = (0, o.useRef)(null),
              l = (0, v.t)()
            return (
              (0, w.q)(() => {
                if (!n) return
                let o = t.current
                o &&
                  (0, x.Y)(() => {
                    if (!l.current) return
                    let t = null == e ? void 0 : e.activeElement
                    if (null != r && r.current) {
                      if ((null == r ? void 0 : r.current) === t) {
                        a.current = t
                        return
                      }
                    } else if (o.contains(t)) {
                      a.current = t
                      return
                    }
                    null != r && r.current
                      ? (0, f.C5)(r.current)
                      : (0, f.jA)(o, f.TO.First) === f.fE.Error &&
                        console.warn(
                          'There are no focusable elements inside the <FocusTrap />'
                        ),
                      (a.current = null == e ? void 0 : e.activeElement)
                  })
              }, [n]),
              a
            )
          })(
            { ownerDocument: E, container: r, initialFocus: s },
            Boolean(2 & c)
          )
          !(function (
            {
              ownerDocument: e,
              container: t,
              containers: r,
              previousActiveElement: n
            },
            o
          ) {
            let a = (0, v.t)()
            ;(0, y.O)(
              null == e ? void 0 : e.defaultView,
              'focus',
              (e) => {
                if (!o || !a.current) return
                let l = new Set(null == r ? void 0 : r.current)
                l.add(t)
                let i = n.current
                if (!i) return
                let s = e.target
                s && s instanceof HTMLElement
                  ? T(l, s)
                    ? ((n.current = s), (0, f.C5)(s))
                    : (e.preventDefault(), e.stopPropagation(), (0, f.C5)(i))
                  : (0, f.C5)(n.current)
              },
              !0
            )
          })(
            {
              ownerDocument: E,
              container: r,
              containers: u,
              previousActiveElement: P
            },
            Boolean(8 & c)
          )
          let j = (0, h.l)(),
            k = (0, m.z)((e) => {
              let t = r.current
              t &&
                (0, a.E)(j.current, {
                  [h.N.Forwards]() {
                    ;(0, f.jA)(t, f.TO.First, {
                      skipElements: [e.relatedTarget]
                    })
                  },
                  [h.N.Backwards]() {
                    ;(0, f.jA)(t, f.TO.Last, {
                      skipElements: [e.relatedTarget]
                    })
                  }
                })
            }),
            S = (0, C.G)(),
            N = (0, o.useRef)(!1)
          return o.createElement(
            o.Fragment,
            null,
            Boolean(4 & c) &&
              o.createElement(p._, {
                as: 'button',
                type: 'button',
                'data-headlessui-focus-guard': !0,
                onFocus: k,
                features: p.A.Focusable
              }),
            (0, l.sY)({
              ourProps: {
                ref: n,
                onKeyDown(e) {
                  'Tab' == e.key &&
                    ((N.current = !0),
                    S.requestAnimationFrame(() => {
                      N.current = !1
                    }))
                },
                onBlur(e) {
                  let t = new Set(null == u ? void 0 : u.current)
                  t.add(r)
                  let n = e.relatedTarget
                  n instanceof HTMLElement &&
                    'true' !== n.dataset.headlessuiFocusGuard &&
                    (T(t, n) ||
                      (N.current
                        ? (0, f.jA)(
                            r.current,
                            (0, a.E)(j.current, {
                              [h.N.Forwards]: () => f.TO.Next,
                              [h.N.Backwards]: () => f.TO.Previous
                            }) | f.TO.WrapAround,
                            { relativeTo: e.target }
                          )
                        : e.target instanceof HTMLElement &&
                          (0, f.C5)(e.target)))
                }
              },
              theirProps: b,
              defaultTag: 'div',
              name: 'FocusTrap'
            }),
            Boolean(4 & c) &&
              o.createElement(p._, {
                as: 'button',
                type: 'button',
                'data-headlessui-focus-guard': !0,
                onFocus: k,
                features: p.A.Focusable
              })
          )
        }),
        { features: b }
      )
      function T(e, t) {
        var r
        for (let n of e) if (null != (r = n.current) && r.contains(t)) return !0
        return !1
      }
      var P = r(3599),
        j = r(1676)
      let k = new Set(),
        S = new Map()
      function N(e) {
        e.setAttribute('aria-hidden', 'true'), (e.inert = !0)
      }
      function R(e) {
        let t = S.get(e)
        t &&
          (null === t['aria-hidden']
            ? e.removeAttribute('aria-hidden')
            : e.setAttribute('aria-hidden', t['aria-hidden']),
          (e.inert = t.inert))
      }
      var O = r(422)
      let D = (0, o.createContext)(!1)
      function M(e) {
        return o.createElement(D.Provider, { value: e.force }, e.children)
      }
      var F = r(4240)
      let A = o.Fragment,
        B = (0, l.yV)(function (e, t) {
          let r = (0, o.useRef)(null),
            n = (0, i.T)(
              (0, i.h)((e) => {
                r.current = e
              }),
              t
            ),
            a = (0, g.i)(r),
            s = (function (e) {
              let t = (0, o.useContext)(D),
                r = (0, o.useContext)(L),
                n = (0, g.i)(e),
                [a, l] = (0, o.useState)(() => {
                  if ((!t && null !== r) || F.O.isServer) return null
                  let e =
                    null == n
                      ? void 0
                      : n.getElementById('headlessui-portal-root')
                  if (e) return e
                  if (null === n) return null
                  let o = n.createElement('div')
                  return (
                    o.setAttribute('id', 'headlessui-portal-root'),
                    n.body.appendChild(o)
                  )
                })
              return (
                (0, o.useEffect)(() => {
                  null !== a &&
                    ((null != n && n.body.contains(a)) ||
                      null == n ||
                      n.body.appendChild(a))
                }, [a, n]),
                (0, o.useEffect)(() => {
                  t || (null !== r && l(r.current))
                }, [r, l, t]),
                a
              )
            })(r),
            [u] = (0, o.useState)(() => {
              var e
              return F.O.isServer
                ? null
                : null != (e = null == a ? void 0 : a.createElement('div'))
                ? e
                : null
            }),
            c = (0, d.H)(),
            p = (0, o.useRef)(!1)
          return (
            (0, j.e)(() => {
              if (((p.current = !1), !(!s || !u)))
                return (
                  s.contains(u) ||
                    (u.setAttribute('data-headlessui-portal', ''),
                    s.appendChild(u)),
                  () => {
                    ;(p.current = !0),
                      (0, x.Y)(() => {
                        var e
                        p.current &&
                          s &&
                          u &&
                          (u instanceof Node &&
                            s.contains(u) &&
                            s.removeChild(u),
                          s.childNodes.length <= 0 &&
                            (null == (e = s.parentElement) || e.removeChild(s)))
                      })
                  }
                )
            }, [s, u]),
            c && s && u
              ? (0, O.createPortal)(
                  (0, l.sY)({
                    ourProps: { ref: n },
                    theirProps: e,
                    defaultTag: A,
                    name: 'Portal'
                  }),
                  u
                )
              : null
          )
        }),
        I = o.Fragment,
        L = (0, o.createContext)(null),
        Z = (0, l.yV)(function (e, t) {
          let { target: r, ...n } = e,
            a = { ref: (0, i.T)(t) }
          return o.createElement(
            L.Provider,
            { value: r },
            (0, l.sY)({
              ourProps: a,
              theirProps: n,
              defaultTag: I,
              name: 'Popover.Group'
            })
          )
        }),
        V = Object.assign(B, { Group: Z }),
        Y = (0, o.createContext)(null),
        _ = (0, l.yV)(function (e, t) {
          let r = (0, c.M)(),
            { id: n = `headlessui-description-${r}`, ...a } = e,
            s = (function e() {
              let t = (0, o.useContext)(Y)
              if (null === t) {
                let r = Error(
                  'You used a <Description /> component, but it is not inside a relevant parent.'
                )
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(r, e), r)
                )
              }
              return t
            })(),
            u = (0, i.T)(t)
          ;(0, j.e)(() => s.register(n), [n, s.register])
          let d = { ref: u, ...s.props, id: n }
          return (0,
          l.sY)({ ourProps: d, theirProps: a, slot: s.slot || {}, defaultTag: 'p', name: s.name || 'Description' })
        })
      var z = r(1127)
      let H = (0, o.createContext)(() => {})
      H.displayName = 'StackContext'
      var U =
        (((q = U || {})[(q.Add = 0)] = 'Add'),
        (q[(q.Remove = 1)] = 'Remove'),
        q)
      function $({
        children: e,
        onUpdate: t,
        type: r,
        element: n,
        enabled: a
      }) {
        let l = (0, o.useContext)(H),
          i = (0, m.z)((...e) => {
            null == t || t(...e), l(...e)
          })
        return (
          (0, j.e)(() => {
            let e = void 0 === a || !0 === a
            return (
              e && i(0, r, n),
              () => {
                e && i(1, r, n)
              }
            )
          }, [i, r, n, a]),
          o.createElement(H.Provider, { value: i }, e)
        )
      }
      var q,
        G,
        W,
        K = r(2925),
        J = r(5921),
        X =
          (((G = X || {})[(G.Open = 0)] = 'Open'),
          (G[(G.Closed = 1)] = 'Closed'),
          G),
        Q = (((W = Q || {})[(W.SetTitleId = 0)] = 'SetTitleId'), W)
      let ee = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id })
        },
        et = (0, o.createContext)(null)
      function er(e) {
        let t = (0, o.useContext)(et)
        if (null === t) {
          let r = Error(`<${e} /> is missing a parent <Dialog /> component.`)
          throw (Error.captureStackTrace && Error.captureStackTrace(r, er), r)
        }
        return t
      }
      function en(e, t) {
        return (0, a.E)(t.type, ee, e, t)
      }
      et.displayName = 'DialogContext'
      let eo = l.AN.RenderStrategy | l.AN.Static,
        ea = (0, l.yV)(function (e, t) {
          let r = (0, c.M)(),
            {
              id: n = `headlessui-dialog-${r}`,
              open: u,
              onClose: f,
              initialFocus: h,
              __demoMode: v = !1,
              ...x
            } = e,
            [w, C] = (0, o.useState)(0),
            b = (0, z.oJ)()
          void 0 === u &&
            null !== b &&
            (u = (0, a.E)(b, { [z.ZM.Open]: !0, [z.ZM.Closed]: !1 }))
          let T = (0, o.useRef)(new Set()),
            O = (0, o.useRef)(null),
            D = (0, i.T)(O, t),
            F = (0, o.useRef)(null),
            A = (0, g.i)(O),
            B = e.hasOwnProperty('open') || null !== b,
            I = e.hasOwnProperty('onClose')
          if (!B && !I)
            throw Error(
              'You have to provide an `open` and an `onClose` prop to the `Dialog` component.'
            )
          if (!B)
            throw Error(
              'You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.'
            )
          if (!I)
            throw Error(
              'You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.'
            )
          if ('boolean' != typeof u)
            throw Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u}`
            )
          if ('function' != typeof f)
            throw Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${f}`
            )
          let L = u ? 0 : 1,
            [Z, _] = (0, o.useReducer)(en, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, o.createRef)()
            }),
            H = (0, m.z)(() => f(!1)),
            q = (0, m.z)((e) => _({ type: 0, id: e })),
            G = !!(0, d.H)() && !v && 0 === L,
            W = w > 1,
            X = null !== (0, o.useContext)(et)
          !(function (e, t = !0) {
            ;(0, j.e)(() => {
              if (!t || !e.current) return
              let r = e.current,
                n = (0, P.r)(r)
              if (n) {
                for (let o of (k.add(r), S.keys()))
                  o.contains(r) && (R(o), S.delete(o))
                return (
                  n.querySelectorAll('body > *').forEach((e) => {
                    if (e instanceof HTMLElement) {
                      for (let t of k) if (e.contains(t)) return
                      1 === k.size &&
                        (S.set(e, {
                          'aria-hidden': e.getAttribute('aria-hidden'),
                          inert: e.inert
                        }),
                        N(e))
                    }
                  }),
                  () => {
                    if ((k.delete(r), k.size > 0))
                      n.querySelectorAll('body > *').forEach((e) => {
                        if (e instanceof HTMLElement && !S.has(e)) {
                          for (let t of k) if (e.contains(t)) return
                          S.set(e, {
                            'aria-hidden': e.getAttribute('aria-hidden'),
                            inert: e.inert
                          }),
                            N(e)
                        }
                      })
                    else for (let e of S.keys()) R(e), S.delete(e)
                  }
                )
              }
            }, [t])
          })(O, !!W && G)
          let Q = (0, m.z)(() => {
            var e, t
            return [
              ...Array.from(
                null !=
                  (e =
                    null == A
                      ? void 0
                      : A.querySelectorAll(
                          'html > *, body > *, [data-headlessui-portal]'
                        ))
                  ? e
                  : []
              ).filter(
                (e) =>
                  !(
                    e === document.body ||
                    e === document.head ||
                    !(e instanceof HTMLElement) ||
                    e.contains(F.current) ||
                    (Z.panelRef.current && e.contains(Z.panelRef.current))
                  )
              ),
              null != (t = Z.panelRef.current) ? t : O.current
            ]
          })
          ;(0, K.O)(() => Q(), H, G && !W),
            (0, y.O)(null == A ? void 0 : A.defaultView, 'keydown', (e) => {
              e.defaultPrevented ||
                (e.key === s.R.Escape &&
                  0 === L &&
                  (W || (e.preventDefault(), e.stopPropagation(), H())))
            }),
            (function (e, t, r = () => [document.body]) {
              ;(0, o.useEffect)(() => {
                var n
                if (!t || !e) return
                let o = (0, J.k)(),
                  a = window.pageYOffset
                function l(e, t, r) {
                  let n = e.style.getPropertyValue(t)
                  return (
                    Object.assign(e.style, { [t]: r }),
                    o.add(() => {
                      Object.assign(e.style, { [t]: n })
                    })
                  )
                }
                let i = e.documentElement,
                  s =
                    (null != (n = e.defaultView) ? n : window).innerWidth -
                    i.clientWidth
                if ((l(i, 'overflow', 'hidden'), s > 0)) {
                  let u = i.clientWidth - i.offsetWidth
                  l(i, 'paddingRight', `${s - u}px`)
                }
                if (
                  /iPhone/gi.test(window.navigator.platform) ||
                  (/Mac/gi.test(window.navigator.platform) &&
                    window.navigator.maxTouchPoints > 0)
                ) {
                  l(e.body, 'marginTop', `-${a}px`), window.scrollTo(0, 0)
                  let c = null
                  o.addEventListener(
                    e,
                    'click',
                    (t) => {
                      if (t.target instanceof HTMLElement)
                        try {
                          let n = t.target.closest('a')
                          if (!n) return
                          let { hash: o } = new URL(n.href),
                            a = e.querySelector(o)
                          a && !r().some((e) => e.contains(a)) && (c = a)
                        } catch {}
                    },
                    !0
                  ),
                    o.addEventListener(
                      e,
                      'touchmove',
                      (e) => {
                        e.target instanceof HTMLElement &&
                          !r().some((t) => t.contains(e.target)) &&
                          e.preventDefault()
                      },
                      { passive: !1 }
                    ),
                    o.add(() => {
                      window.scrollTo(0, window.pageYOffset + a),
                        c &&
                          c.isConnected &&
                          (c.scrollIntoView({ block: 'nearest' }), (c = null))
                    })
                }
                return o.dispose
              }, [e, t])
            })(A, 0 === L && !X, Q),
            (0, o.useEffect)(() => {
              if (0 !== L || !O.current) return
              let e = new IntersectionObserver((e) => {
                for (let t of e)
                  0 === t.boundingClientRect.x &&
                    0 === t.boundingClientRect.y &&
                    0 === t.boundingClientRect.width &&
                    0 === t.boundingClientRect.height &&
                    H()
              })
              return e.observe(O.current), () => e.disconnect()
            }, [L, O, H])
          let [ee, er] = (function () {
              let [e, t] = (0, o.useState)([])
              return [
                e.length > 0 ? e.join(' ') : void 0,
                (0, o.useMemo)(
                  () =>
                    function (e) {
                      let r = (0, m.z)(
                          (e) => (
                            t((t) => [...t, e]),
                            () =>
                              t((t) => {
                                let r = t.slice(),
                                  n = r.indexOf(e)
                                return -1 !== n && r.splice(n, 1), r
                              })
                          )
                        ),
                        n = (0, o.useMemo)(
                          () => ({
                            register: r,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                          }),
                          [r, e.slot, e.name, e.props]
                        )
                      return o.createElement(
                        Y.Provider,
                        { value: n },
                        e.children
                      )
                    },
                  [t]
                )
              ]
            })(),
            ea = (0, o.useMemo)(
              () => [{ dialogState: L, close: H, setTitleId: q }, Z],
              [L, Z, H, q]
            ),
            el = (0, o.useMemo)(() => ({ open: 0 === L }), [L]),
            ei = {
              ref: D,
              id: n,
              role: 'dialog',
              'aria-modal': 0 === L || void 0,
              'aria-labelledby': Z.titleId,
              'aria-describedby': ee
            }
          return o.createElement(
            $,
            {
              type: 'Dialog',
              enabled: 0 === L,
              element: O,
              onUpdate: (0, m.z)((e, t, r) => {
                'Dialog' === t &&
                  (0, a.E)(e, {
                    [U.Add]() {
                      T.current.add(r), C((e) => e + 1)
                    },
                    [U.Remove]() {
                      T.current.add(r), C((e) => e - 1)
                    }
                  })
              })
            },
            o.createElement(
              M,
              { force: !0 },
              o.createElement(
                V,
                null,
                o.createElement(
                  et.Provider,
                  { value: ea },
                  o.createElement(
                    V.Group,
                    { target: O },
                    o.createElement(
                      M,
                      { force: !1 },
                      o.createElement(
                        er,
                        { slot: el, name: 'Dialog.Description' },
                        o.createElement(
                          E,
                          {
                            initialFocus: h,
                            containers: T,
                            features: G
                              ? (0, a.E)(W ? 'parent' : 'leaf', {
                                  parent: E.features.RestoreFocus,
                                  leaf: E.features.All & ~E.features.FocusLock
                                })
                              : E.features.None
                          },
                          (0, l.sY)({
                            ourProps: ei,
                            theirProps: x,
                            slot: el,
                            defaultTag: 'div',
                            features: eo,
                            visible: 0 === L,
                            name: 'Dialog'
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            o.createElement(p._, { features: p.A.Hidden, ref: F })
          )
        }),
        el = (0, l.yV)(function (e, t) {
          let r = (0, c.M)(),
            { id: n = `headlessui-dialog-overlay-${r}`, ...a } = e,
            [{ dialogState: s, close: d }] = er('Dialog.Overlay'),
            p = (0, i.T)(t),
            f = (0, m.z)((e) => {
              if (e.target === e.currentTarget) {
                if ((0, u.P)(e.currentTarget)) return e.preventDefault()
                e.preventDefault(), e.stopPropagation(), d()
              }
            }),
            h = (0, o.useMemo)(() => ({ open: 0 === s }), [s])
          return (0,
          l.sY)({ ourProps: { ref: p, id: n, 'aria-hidden': !0, onClick: f }, theirProps: a, slot: h, defaultTag: 'div', name: 'Dialog.Overlay' })
        }),
        ei = (0, l.yV)(function (e, t) {
          let r = (0, c.M)(),
            { id: n = `headlessui-dialog-backdrop-${r}`, ...a } = e,
            [{ dialogState: s }, u] = er('Dialog.Backdrop'),
            d = (0, i.T)(t)
          ;(0, o.useEffect)(() => {
            if (null === u.panelRef.current)
              throw Error(
                'A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.'
              )
          }, [u.panelRef])
          let p = (0, o.useMemo)(() => ({ open: 0 === s }), [s])
          return o.createElement(
            M,
            { force: !0 },
            o.createElement(
              V,
              null,
              (0, l.sY)({
                ourProps: { ref: d, id: n, 'aria-hidden': !0 },
                theirProps: a,
                slot: p,
                defaultTag: 'div',
                name: 'Dialog.Backdrop'
              })
            )
          )
        }),
        es = (0, l.yV)(function (e, t) {
          let r = (0, c.M)(),
            { id: n = `headlessui-dialog-panel-${r}`, ...a } = e,
            [{ dialogState: s }, u] = er('Dialog.Panel'),
            d = (0, i.T)(t, u.panelRef),
            p = (0, o.useMemo)(() => ({ open: 0 === s }), [s]),
            f = (0, m.z)((e) => {
              e.stopPropagation()
            })
          return (0,
          l.sY)({ ourProps: { ref: d, id: n, onClick: f }, theirProps: a, slot: p, defaultTag: 'div', name: 'Dialog.Panel' })
        }),
        eu = (0, l.yV)(function (e, t) {
          let r = (0, c.M)(),
            { id: n = `headlessui-dialog-title-${r}`, ...a } = e,
            [{ dialogState: s, setTitleId: u }] = er('Dialog.Title'),
            d = (0, i.T)(t)
          ;(0, o.useEffect)(() => (u(n), () => u(null)), [n, u])
          let p = (0, o.useMemo)(() => ({ open: 0 === s }), [s])
          return (0,
          l.sY)({ ourProps: { ref: d, id: n }, theirProps: a, slot: p, defaultTag: 'h2', name: 'Dialog.Title' })
        }),
        ec = Object.assign(ea, {
          Backdrop: ei,
          Panel: es,
          Overlay: el,
          Title: eu,
          Description: _
        })
    },
    2683: function (e, t, r) {
      'use strict'
      r.d(t, {
        q: function () {
          return a
        }
      })
      var n = r(959),
        o = r(5742)
      function a(e, t) {
        let r = (0, n.useRef)([]),
          a = (0, o.z)(e)
        ;(0, n.useEffect)(() => {
          let e = [...r.current]
          for (let [n, o] of t.entries())
            if (r.current[n] !== o) {
              let l = a(t, e)
              return (r.current = t), l
            }
        }, [a, ...t])
      }
    }
  }
])
