'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [704],
  {
    167: function (e, t, n) {
      var r = n(9970),
        a = n(1527),
        l = n(959),
        s = n(4573),
        o = n(9326),
        i = n(5241),
        c = n(6536),
        u = function (e) {
          var t = e.locations,
            n = e.selectedLocation,
            u = e.isHomePage,
            d = e.canUpdateFilterAutoCompleteShow,
            h = e.isError,
            m = e.handleCanUpdateFilterAutoCompleteShow,
            f = e.handleSetSelectedLocation,
            x = (0, l.useState)(n),
            p = x[0],
            g = x[1],
            b = (0, l.useState)(''),
            v = b[0],
            w = b[1],
            j = (0, l.useState)([]),
            y = j[0],
            N = j[1],
            k = (0, l.useState)(!1),
            C = k[0],
            _ = k[1],
            F = (0, l.useRef)(null),
            B = (0, l.useState)(''),
            L = B[0],
            S = B[1]
          ;(0, l.useEffect)(
            function () {
              ;(null == p ? void 0 : p.title) && S(p.title),
                p && f && !u && f(p)
            },
            [p]
          ),
            (0, l.useEffect)(
              function () {
                u && f && f(y)
              },
              [y]
            )
          var E = function (e) {
              N(
                y.filter(function (t) {
                  return t.id !== e
                })
              )
            },
            A = function (e, t, n) {
              if (null === n) N([{ id: e, title: t, state_id: n }])
              else {
                if (
                  y.find(function (t) {
                    return t.id === e
                  })
                )
                  return
                var a = y.filter(function (e) {
                  return null !== e.state_id
                })
                N((0, r.Z)(a).concat([{ id: e, title: t, state_id: n }]))
              }
            },
            O = function (e) {
              setTimeout(function () {
                m(e)
              })
            },
            z =
              '' === v
                ? t
                : t.filter(function (e) {
                    return e.title
                      .toLowerCase()
                      .replace(/\s+/g, '')
                      .includes(v.toLowerCase().replace(/\s+/g, ''))
                  })
          ;(0, l.useEffect)(
            function () {
              u && n && n.length && N(n)
            },
            [n]
          ),
            (0, l.useEffect)(function () {
              F.current && u && F.current.focus()
            }, [])
          var R = function (e) {
              var t, n
              e
                ? null === (t = F.current) || void 0 === t || t.focus()
                : null === (n = F.current) || void 0 === n || n.blur()
            },
            M = function () {
              return _(!0)
            },
            T = function () {
              return _(!1)
            }
          return (0, a.jsx)('div', {
            className: 'dir-rtl w-full relative',
            children: (0, a.jsx)(s.h, {
              defaultValue: p,
              onChange: g,
              children: function (e) {
                var t = e.open
                return (0, a.jsxs)(a.Fragment, {
                  children: [
                    void 0 !== d && d !== t && O(t),
                    !u && R(t),
                    (0, a.jsxs)('div', {
                      children: [
                        (0, a.jsxs)('div', {
                          className: ''
                            .concat(
                              t || C
                                ? 'border-primary border-2 '
                                : 'border-custom-gray-border',
                              ' '
                            )
                            .concat(h && 'border-custom-red', ' ')
                            .concat(
                              u && !y.length
                                ? 'rounded-full md:rounded-lg'
                                : 'rounded-lg',
                              ' bg-white flex flex-col py-2 md:py-3 px-4 gap-2 border shadow-sm w-full h-full cursor-default overflow-hidden outline-none'
                            ),
                          children: [
                            (0, a.jsxs)('div', {
                              className:
                                'flex items-center text-left gap-2 w-full',
                              children: [
                                u &&
                                  (0, a.jsx)('div', {
                                    className: 'flex items-center',
                                    children: (0, a.jsx)('svg', {
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      fill: 'none',
                                      viewBox: '0 0 24 24',
                                      strokeWidth: '2.5',
                                      stroke: '#6598CB',
                                      className: 'w-5 h-5',
                                      children: (0, a.jsx)('path', {
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        d: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                                      })
                                    })
                                  }),
                                (0, a.jsxs)(s.h.Button, {
                                  className: 'w-full h-full',
                                  children: [
                                    (0, a.jsx)(s.h.Input, {
                                      ref: F,
                                      id: 'location',
                                      className: ''.concat(
                                        !u && 'placeholder-black',
                                        ' peer w-full h-full text-base leading-5 text-black outline-none'
                                      ),
                                      placeholder: ''.concat(
                                        u ? 'اكتب المنطقه للبحث' : L
                                      ),
                                      onChange: function (e) {
                                        return w(e.target.value)
                                      },
                                      onFocus: M,
                                      onBlur: T
                                    }),
                                    !u &&
                                      (0, a.jsx)('label', {
                                        htmlFor: 'location',
                                        className: ''
                                          .concat(
                                            t ? 'text-primary' : 'ray',
                                            ' '
                                          )
                                          .concat(h && 'text-custom-red', ' ')
                                          .concat(
                                            '' !== L || t
                                              ? '-top-2 px-1 right-3 text-xs'
                                              : 'top-3 md:top-4 right-4',
                                            ' absolute cursor-text duration-300 z-10 bg-white'
                                          ),
                                        children: 'المنطقه'
                                      })
                                  ]
                                }),
                                (0, a.jsx)(s.h.Button, {
                                  className: 'flex items-center',
                                  type: 'submit',
                                  'aria-label': 'dropdown',
                                  children: t
                                    ? (0, a.jsx)(i, {
                                        className: 'h-7 w-7 text-custom-gray',
                                        'aria-hidden': 'true'
                                      })
                                    : (0, a.jsx)(c, {
                                        className: 'h-7 w-7 text-custom-gray',
                                        'aria-hidden': 'true'
                                      })
                                })
                              ]
                            }),
                            (0, a.jsx)('div', {
                              className: ''.concat(
                                y.length && u ? 'my-1' : 'm-0 hidden',
                                ' flex flex-wrap justify-start'
                              ),
                              children:
                                u &&
                                y.map(function (e) {
                                  return (0, a.jsxs)(
                                    'div',
                                    {
                                      className:
                                        'rounded-lg mt-2 ml-2 py-1 px-2 text-white bg-[#6598CB] text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease',
                                      children: [
                                        e.title,
                                        (0, a.jsx)('button', {
                                          type: 'submit',
                                          className:
                                            'bg-transparent hover focus:outline-none',
                                          onClick: function () {
                                            return E(e.id)
                                          },
                                          children: (0, a.jsx)('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            fill: 'none',
                                            viewBox: '0 0 24 24',
                                            strokeWidth: '1.5',
                                            stroke: 'currentColor',
                                            className: 'w-4 h-4 ml-1',
                                            children: (0, a.jsx)('path', {
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                              d: 'M6 18L18 6M6 6l12 12'
                                            })
                                          })
                                        })
                                      ]
                                    },
                                    e.id || Math.random()
                                  )
                                })
                            })
                          ]
                        }),
                        (0, a.jsx)(o.u, {
                          as: l.Fragment,
                          enter: 'transition ease-in duration-100',
                          enterFrom: 'opacity-0',
                          enterTo: 'opacity-100',
                          leave: 'transition ease-in duration-100',
                          leaveFrom: 'opacity-100',
                          leaveTo: 'opacity-0',
                          afterLeave: function () {
                            return w('')
                          },
                          children: (0, a.jsx)(s.h.Options, {
                            className: ''.concat(
                              u && 'hidden md:block',
                              ' z-20 bg-white absolute p-2 overflow-y-scroll mt-3 left-0 max-h-80 w-full rounded-lg text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                            ),
                            children:
                              z && 0 === z.length && '' !== v
                                ? (0, a.jsx)('div', {
                                    className:
                                      'relative cursor-default select-none py-2 px-4 text-custom-gray',
                                    children: 'لا توجد منطقه بهذا الاسم'
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      u &&
                                        (0, a.jsx)(s.h.Option, {
                                          className:
                                            'relative cursor-default select-none rounded-lg',
                                          value: { title: ' كل مناطق الكويت' },
                                          children: (0, a.jsxs)('span', {
                                            onClick: function () {
                                              return N([
                                                {
                                                  title: 'كل مناطق الكويت',
                                                  state_id: null
                                                }
                                              ])
                                            },
                                            className:
                                              'block text-base truncate hover:bg-primary-lighter text-black font-DroidArabicKufiBold p-2 cursor-pointer',
                                            children: [' ', 'كل مناطق الكويت']
                                          })
                                        }),
                                      z &&
                                        z.map(function (e) {
                                          return (0, a.jsxs)(
                                            s.h.Option,
                                            {
                                              className:
                                                'relative cursor-default select-none',
                                              value:
                                                u || null !== e.state_id
                                                  ? e
                                                  : void 0,
                                              onClick: function () {
                                                return A(
                                                  null == e ? void 0 : e.id,
                                                  e.title,
                                                  e.state_id || null
                                                )
                                              },
                                              children: [
                                                u &&
                                                  null !== e.state_id &&
                                                  (0, a.jsxs)('span', {
                                                    className:
                                                      'absolute top-3 left-5 text-primary',
                                                    children: [
                                                      '(',
                                                      e.count,
                                                      ')'
                                                    ]
                                                  }),
                                                (0, a.jsx)('span', {
                                                  className: ''
                                                    .concat(
                                                      null === e.state_id &&
                                                        !u &&
                                                        'hidden',
                                                      ' '
                                                    )
                                                    .concat(
                                                      null === e.state_id &&
                                                        'text-black',
                                                      ' '
                                                    )
                                                    .concat(
                                                      null !== e.state_id &&
                                                        'text-primary',
                                                      ' hover:bg-primary-lighter font-DroidArabicKufiBold text-base block truncate p-2 cursor-pointer'
                                                    ),
                                                  children: e.title
                                                })
                                              ]
                                            },
                                            e.id
                                          )
                                        })
                                    ]
                                  })
                          })
                        })
                      ]
                    })
                  ]
                })
              }
            })
          })
        }
      t.Z = u
    },
    2462: function (e, t, n) {
      var r = n(1527),
        a = n(959),
        l = n(4545),
        s = n(9326),
        o = n(5241),
        i = n(6536),
        c = n(2829),
        u = n.n(c),
        d = function (e) {
          var t = e.selectedOpt,
            n = e.placeholder,
            c = e.options,
            d = e.isFloatingLabel,
            h = e.showFilterIcon,
            m = e.bgGray,
            f = e.handleSetItem,
            x = e.isError,
            p = (0, a.useState)(t),
            g = p[0],
            b = p[1]
          return (
            (0, a.useEffect)(
              function () {
                g && f && f(g)
              },
              [g]
            ),
            (0, a.useEffect)(
              function () {
                b(t)
              },
              [t]
            ),
            (0, r.jsx)(l.R, {
              value: g,
              onChange: b,
              children: function (e) {
                var t = e.open
                return (0, r.jsxs)('div', {
                  className: 'relative dir-rtl',
                  children: [
                    d &&
                      (0, r.jsx)('span', {
                        className: ''
                          .concat(
                            t || g
                              ? '-top-2.5 mx-3 text-xs px-1'
                              : 'top-3 md:top-4',
                            ' \n							'
                          )
                          .concat(
                            t ? 'text-primary' : 'text-custom-gray',
                            '\n              '
                          )
                          .concat(x && 'text-custom-red', '\n							')
                          .concat(
                            m ? 'bg-custom-gray' : 'bg-white',
                            ' pointer-events-none transition-all duration-300 absolute z-10 mx-4'
                          ),
                        children: n
                      }),
                    (0, r.jsxs)(l.R.Button, {
                      type: 'button',
                      className: ''
                        .concat(
                          m ? ' rounded-full md:rounded-lg' : ' rounded-lg',
                          ' '
                        )
                        .concat(
                          t ? 'border-primary' : 'border-custom-gray-border',
                          ' '
                        )
                        .concat(
                          x && 'border-custom-red',
                          ' bg-white flex justify-between items-center py-2.5 md:py-3.5 px-3.5 relative w-full cursor-text border shadow-sm focus:outline-none text-base text-black'
                        ),
                      children: [
                        (0, r.jsxs)('span', {
                          className: 'flex gap-1.5 items-center w-full',
                          children: [
                            (0, r.jsx)('span', {
                              className: ''.concat(
                                !h && 'hidden',
                                ' flex items-center'
                              ),
                              children: (0, r.jsx)(u(), {
                                src: '/images/filter-icon.svg',
                                width: 24,
                                height: 24,
                                alt: 'filter'
                              })
                            }),
                            g
                              ? (0, r.jsx)('span', {
                                  className: 'truncate',
                                  children: g.title
                                })
                              : m &&
                                (0, r.jsx)('span', {
                                  className: 'truncate text-custom-gray',
                                  children: 'الكل'
                                })
                          ]
                        }),
                        (0, r.jsx)('span', {
                          className:
                            'pointer-events-none flex items-center pr-2',
                          children: t
                            ? (0, r.jsx)(o, {
                                className: 'h-7 w-7 text-custom-gray',
                                'aria-hidden': 'true'
                              })
                            : (0, r.jsx)(i, {
                                className: 'h-7 w-7 text-custom-gray',
                                'aria-hidden': 'true'
                              })
                        })
                      ]
                    }),
                    (0, r.jsx)(s.u, {
                      show: t,
                      as: a.Fragment,
                      leave: 'transition ease-in duration-100',
                      leaveFrom: 'opacity-100',
                      leaveTo: 'opacity-0',
                      children: (0, r.jsx)(l.R.Options, {
                        className:
                          'absolute z-20 mt-3 w-full overflow-auto rounded-lg bg-white p-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                        children: c.map(function (e) {
                          return (0,
                          r.jsx)(l.R.Option, { className: ''.concat((null == g ? void 0 : g.id) === e.id && 'bg-primary-lighter', ' relative cursor-pointer hover:bg-primary-lighter rounded-lg transition-all duration-500 select-none py-2 px-3'), value: e, children: (0, r.jsx)('span', { className: 'block text-base truncate font-DroidArabicKufiBold text-primary', children: e.title }) }, e.id)
                        })
                      })
                    })
                  ]
                })
              }
            })
          )
        }
      t.Z = d
    }
  }
])
