;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [262, 578],
  {
    4058: function (e, t, r) {
      let a = r(959),
        o = a.forwardRef(function ({ title: e, titleId: t, ...r }, o) {
          return a.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                'aria-hidden': 'true',
                ref: o,
                'aria-labelledby': t
              },
              r
            ),
            e ? a.createElement('title', { id: t }, e) : null,
            a.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            })
          )
        })
      e.exports = o
    },
    7070: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/agent/edit',
        function () {
          return r(7533)
        }
      ])
    },
    2927: function (e, t, r) {
      'use strict'
      var a = r(9970),
        o = r(1527),
        s = r(4058),
        n = r(2829),
        l = r.n(n),
        c = r(959),
        i = function (e) {
          var t = e.maxMediaNum,
            r = e.prevItems,
            n = e.handleMediaUpload,
            i = (0, c.useState)([]),
            u = i[0],
            p = i[1],
            d = (0, c.useState)([]),
            m = d[0],
            h = d[1],
            f = (0, c.useState)(0),
            x = f[0],
            g = f[1],
            b = function (e) {
              var t = e.target.files
              if (t && 0 !== t.length) {
                var r = t[0],
                  o = new FileReader(),
                  s = null == r ? void 0 : r.type.split('/')[0]
                ;(o.onloadend = function () {
                  h(function (e) {
                    return (0, a.Z)(e).concat([{ src: o.result, type: s }])
                  })
                }),
                  o.readAsDataURL(r),
                  p(function (e) {
                    return (0, a.Z)(e).concat([t[0]])
                  }),
                  g(function (e) {
                    return e + 1
                  })
              }
            },
            w = function (e) {
              g(function (e) {
                return e - 1
              })
              var t = (0, a.Z)(m),
                r = (0, a.Z)(u)
              t.splice(e, 1), r.splice(e, 1), h(t), p(r)
            }
          return (
            (0, c.useEffect)(
              function () {
                ;(null == r ? void 0 : r.length) &&
                  (p(r),
                  g(r.length),
                  r.forEach(function (e) {
                    var t = new FileReader(),
                      r = null == e ? void 0 : e.type.split('/')[0]
                    ;(t.onloadend = function () {
                      h(function (e) {
                        return (
                          null == e
                            ? void 0
                            : e.some(function (e) {
                                return e.src === t.result
                              })
                        )
                          ? (0, a.Z)(e)
                          : (0, a.Z)(e).concat([{ src: t.result, type: r }])
                      })
                    }),
                      t.readAsDataURL(e)
                  }))
              },
              [r]
            ),
            (0, c.useEffect)(
              function () {
                n(u)
              },
              [u]
            ),
            (0, o.jsx)('div', {
              className:
                'flex flex-col justify-center items-center w-full min-h-52 rounded-lg border border-custom-gray-border',
              children: (0, o.jsxs)('div', {
                className:
                  'flex flex-col justify-center items-center pt-5 pb-6',
                children: [
                  (0, o.jsxs)('label', {
                    htmlFor: 'dropzone-file',
                    className:
                      'cursor-pointer flex justify-center flex-col items-center',
                    children: [
                      (0, o.jsx)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        strokeWidth: '1.5',
                        stroke: 'currentColor',
                        className: 'w-14 h-14 text-primary',
                        children: (0, o.jsx)('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          d: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                        })
                      }),
                      x < (void 0 === t ? 20 : t) &&
                        (0, o.jsx)('input', {
                          id: 'dropzone-file',
                          type: 'file',
                          className: 'hidden',
                          onChange: b
                        }),
                      (0, o.jsxs)('p', {
                        className:
                          'mb-2 mt-2 text-base text-primary flex flex-col items-center',
                        children: [
                          'إضافة الصور',
                          (0, o.jsx)('span', {
                            className: 'block text-custom-gray',
                            children: '(اختياري)'
                          })
                        ]
                      })
                    ]
                  }),
                  0 !== m.length &&
                    (0, o.jsx)('div', {
                      className: 'flex flex-wrap gap-3 mx-5 mt-5',
                      children: m.map(function (e, t) {
                        return (0, o.jsxs)(
                          'div',
                          {
                            className: 'relative border',
                            children: [
                              'image' === e.type
                                ? (0, o.jsx)(l(), {
                                    src: e.src,
                                    width: '80',
                                    height: '80',
                                    objectFit: 'contain'
                                  })
                                : (0, o.jsx)('video', {
                                    className: 'w-20 h-20',
                                    src: e.src
                                  }),
                              (0, o.jsx)(s, {
                                className:
                                  'w-5 h-5 absolute -top-2 -right-2 text-primary font-bold bg-white rounded-full',
                                onClick: function () {
                                  return w(t)
                                }
                              })
                            ]
                          },
                          Math.random()
                        )
                      })
                    })
                ]
              })
            })
          )
        }
      t.Z = i
    },
    3096: function (e, t, r) {
      'use strict'
      var a,
        o,
        s = r(1065),
        n = {
          nodeEnv:
            null !== (a = s.env.NEXT_PUBLIC_NODE_ENV) && void 0 !== a
              ? a
              : 'development',
          port: null !== (o = s.env.NEXT_PUBLIC_PORT) && void 0 !== o ? o : 3e3,
          domain: s.env.DOMAIN,
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
      t.Z = n
    },
    7533: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return f
          },
          default: function () {
            return x
          }
        })
      var a = r(7135),
        o = r(6583),
        s = r(1527),
        n = r(959),
        l = r(6770),
        c = r(8766),
        i = r(4978),
        u = r(4249),
        p = r(2927),
        d = r(2578),
        m = r(5423),
        h = (0, m.Ry)({
          name: (0, m.Z_)().required(),
          description: (0, m.Z_)(),
          instagram: (0, m.Z_)(),
          twitter: (0, m.Z_)(),
          facebook: (0, m.Z_)(),
          email: (0, m.Z_)().email(),
          logo: (0, m.nK)()
        }),
        f = !0,
        x = function (e) {
          var t,
            r = e.agent,
            m = (0, u.oR)(),
            f = m.user,
            x = m.updateToast,
            g = (0, n.useState)(null == r ? void 0 : r.name),
            b = g[0],
            w = g[1],
            v = (0, n.useState)(null == r ? void 0 : r.description),
            y = v[0],
            j = v[1],
            N = (0, n.useState)(null == r ? void 0 : r.instagram),
            k = N[0],
            C = N[1],
            _ = (0, n.useState)(null == r ? void 0 : r.twitter),
            Z = _[0],
            E = _[1],
            S = (0, n.useState)(null == r ? void 0 : r.facebook),
            z = S[0],
            F = S[1],
            M = (0, n.useState)(null == r ? void 0 : r.email),
            P = M[0],
            U = M[1],
            R = (0, n.useState)(!1),
            B = R[0],
            O = R[1],
            A = (0, n.useState)(''),
            L = A[0],
            T = A[1],
            D = (0, n.useState)([]),
            I = D[0],
            V = D[1],
            X =
              ((t = (0, a.Z)(function (e) {
                var t, r, a, s
                return (0, o.__generator)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      e.preventDefault(),
                        T(''),
                        (t = {
                          name: b,
                          description: y,
                          instagram: k,
                          twitter: Z,
                          facebook: z,
                          email: P,
                          logo: I[0]
                        }),
                        (o.label = 1)
                    case 1:
                      return o.trys.push([1, 4, , 5]), [4, h.validate(t)]
                    case 2:
                      return (
                        o.sent(),
                        O(!0),
                        [
                          4,
                          (0, d.Z)({
                            method: 'POST',
                            url: '/agent',
                            data: { agentInfo: t },
                            headers: { 'content-type': 'multipart/form-data' }
                          })
                        ]
                      )
                    case 3:
                      return (
                        (r = o.sent()),
                        O(!1),
                        x(
                          !0,
                          'Success: '.concat(
                            null == r ? void 0 : r.data.success
                          ),
                          !1
                        ),
                        [3, 5]
                      )
                    case 4:
                      return (
                        (a = o.sent()),
                        O(!1),
                        'Name is a required field' === a.message &&
                          T(a.message),
                        x(
                          !0,
                          'Error: '.concat(
                            null == a
                              ? void 0
                              : null === (s = a.response) || void 0 === s
                              ? void 0
                              : s.data
                          ),
                          !0
                        ),
                        [3, 5]
                      )
                    case 5:
                      return [2]
                  }
                })
              })),
              function (e) {
                return t.apply(this, arguments)
              })
          return (0, s.jsxs)('div', {
            className:
              'dir-rtl container max-w-6xl py-10 flex flex-col gap-3 items-center',
            children: [
              (0, s.jsx)('div', {
                className: 'md:text-center w-full',
                children: (0, s.jsx)(c.Z, { value: 'بیانات المكتب (اختیاري)' })
              }),
              (0, s.jsx)('div', {
                className: 'w-full md:text-center',
                children: (0, s.jsx)(i.Z, {
                  value: 'یمكنك كتابة البیانات أو تركها خالیة كما یناسبك'
                })
              }),
              (0, s.jsxs)('form', {
                className: 'w-full max-w-md px-3 md:px-0 mt-8 md:mt-10',
                children: [
                  (0, s.jsx)('div', {
                    className: 'relative',
                    children: (0, s.jsxs)(l.J, {
                      className: 'relative',
                      children: [
                        (0, s.jsx)(l.J.Panel, {
                          className:
                            'absolute z-10 -top-14 right-2 text-secondary bg-custom-white-light shadow-md p-2 rounded-md',
                          children: 'Hey! You can not edit this field'
                        }),
                        (0, s.jsx)(l.J.Button, {
                          className: 'w-full',
                          children: (0, s.jsx)('input', {
                            type: 'number',
                            name: 'phone',
                            id: 'phone',
                            className:
                              'block bg-custom-gray-3 px-4 py-2.5 md:py-4 w-full text-custom-gray rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer',
                            placeholder: '',
                            value: null == f ? void 0 : f.phone,
                            readOnly: !0
                          })
                        }),
                        (0, s.jsxs)('label', {
                          htmlFor: 'phone',
                          className:
                            'absolute cursor-text text-md text-custom-gray duration-300 top-2 transform -translate-y-5 scale-75 z-10 bg-white px-1 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0',
                          children: ['رقم الموبايل', ' ']
                        })
                      ]
                    })
                  }),
                  (0, s.jsxs)('div', {
                    className: 'relative mt-8 md:mt-10',
                    children: [
                      (0, s.jsx)('input', {
                        type: 'text',
                        name: 'name',
                        id: 'name',
                        className: ''.concat(
                          L
                            ? 'border-custom-red focus:border-custom-red'
                            : 'border-custom-gray-border focus:border-primary',
                          ' block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0 peer'
                        ),
                        placeholder: ' ',
                        value: b,
                        onChange: function (e) {
                          return w(e.target.value)
                        }
                      }),
                      (0, s.jsx)('label', {
                        htmlFor: 'name',
                        className: ''.concat(
                          L
                            ? 'text-custom-red peer-focus:text-custom-red'
                            : 'text-custom-gray peer-focus:text-primary',
                          ' whitespace-nowrap absolute cursor-text text-md duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 -right-1 peer-focus:-right-1 peer-placeholder-shown:right-0'
                        ),
                        children: 'اسم المكتب (إجباري)'
                      })
                    ]
                  }),
                  L &&
                    (0, s.jsx)(
                      'p',
                      {
                        className: 'text-custom-red text-sm mt-3',
                        children: L
                      },
                      Math.random()
                    ),
                  (0, s.jsxs)('div', {
                    className: 'relative mt-8 md:mt-10',
                    children: [
                      (0, s.jsx)('textarea', {
                        name: 'description',
                        rows: 7,
                        className:
                          'block p-4 w-full text-base text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer',
                        placeholder: ' ',
                        value: y,
                        onChange: function (e) {
                          return j(e.target.value)
                        }
                      }),
                      (0, s.jsx)('label', {
                        htmlFor: 'description',
                        className:
                          'absolute pointer-events-none cursor-text text-md text-custom-gray peer-focus:text-primary duration-300 z-10 bg-white px-1 -top-3 scale-75 -right-2 peer-focus:-top-3 peer-focus:scale-75 peer-focus:-right-2 peer-placeholder-shown:top-5 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100',
                        children: 'نبذة عن المكتب (اختياري)'
                      })
                    ]
                  }),
                  (0, s.jsxs)('div', {
                    className: 'relative mt-8 md:mt-10',
                    children: [
                      (0, s.jsx)('input', {
                        type: 'text',
                        name: 'instagram',
                        id: 'instagram',
                        className:
                          'block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer',
                        placeholder: ' ',
                        value: k,
                        onChange: function (e) {
                          return C(e.target.value)
                        }
                      }),
                      (0, s.jsx)('label', {
                        htmlFor: 'instagram',
                        className:
                          'absolute pointer-events-none cursor-text text-md text-custom-gray peer-focus:text-primary duration-300 z-10 bg-white px-1 -top-3 scale-75 right-1 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-1 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100',
                        children: 'انستقرام'
                      })
                    ]
                  }),
                  (0, s.jsxs)('div', {
                    className: 'relative mt-8 md:mt-10',
                    children: [
                      (0, s.jsx)('input', {
                        type: 'text',
                        name: 'twitter',
                        id: 'twitter',
                        className:
                          'block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer',
                        placeholder: ' ',
                        value: Z,
                        onChange: function (e) {
                          return E(e.target.value)
                        }
                      }),
                      (0, s.jsx)('label', {
                        htmlFor: 'twitter',
                        className:
                          'absolute pointer-events-none cursor-text text-md text-custom-gray peer-focus:text-primary duration-300 z-10 bg-white px-1 -top-3 scale-75 right-2 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-2 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100',
                        children: 'تويتر'
                      })
                    ]
                  }),
                  (0, s.jsxs)('div', {
                    className: 'relative mt-8 md:mt-10',
                    children: [
                      (0, s.jsx)('input', {
                        type: 'text',
                        name: 'facebook',
                        id: 'facebook',
                        className:
                          'block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer',
                        placeholder: ' ',
                        value: z,
                        onChange: function (e) {
                          return F(e.target.value)
                        }
                      }),
                      (0, s.jsx)('label', {
                        htmlFor: 'facebook',
                        className:
                          'absolute pointer-events-none cursor-text text-md text-custom-gray peer-focus:text-primary duration-300 z-10 bg-white px-1 -top-3 scale-75 right-1 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-1 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100',
                        children: 'فيسبوك'
                      })
                    ]
                  }),
                  (0, s.jsxs)('div', {
                    className: 'relative mt-8 md:mt-10',
                    children: [
                      (0, s.jsx)('input', {
                        type: 'email',
                        name: 'email',
                        id: 'email',
                        className:
                          'block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer',
                        placeholder: ' ',
                        value: P,
                        onChange: function (e) {
                          return U(e.target.value)
                        }
                      }),
                      (0, s.jsx)('label', {
                        htmlFor: 'email',
                        className:
                          'absolute pointer-events-none cursor-text text-md text-custom-gray peer-focus:text-primary duration-300 z-10 bg-white px-1 -top-3 scale-75 right-1.5 peer-focus:-top-3 peer-focus:scale-75 peer-focus:right-1.5 peer-placeholder-shown:top-4 peer-placeholder-shown:right-3 peer-placeholder-shown:scale-100',
                        children: 'الايميل'
                      })
                    ]
                  }),
                  (0, s.jsx)('div', {
                    className: 'w-full mt-8 md:mt-10',
                    children: (0, s.jsx)(p.Z, {
                      handleMediaUpload: V,
                      maxMediaNum: 1
                    })
                  }),
                  (0, s.jsx)('div', {
                    className: 'mt-3 md:mt-5',
                    children: (0, s.jsxs)('button', {
                      type: 'submit',
                      className:
                        'bg-secondary text-white rounded-lg w-full mt-8 py-3 md:py-4 hover:opacity-90 transition-opacity duration-300',
                      onClick: function (e) {
                        return X(e)
                      },
                      children: [
                        'إضافة الإعلان',
                        ' ',
                        B &&
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
                  })
                ]
              })
            ]
          })
        }
    },
    2578: function (e, t, r) {
      'use strict'
      var a = r(8086),
        o = r(3096).Z.apiUrl || 'http://localhost:5000/api/v1'
      t.Z = a.Z.create({ withCredentials: !0, baseURL: o })
    }
  },
  function (e) {
    e.O(0, [741, 423, 774, 888, 179], function () {
      return e((e.s = 7070))
    }),
      (_N_E = e.O())
  }
])
