'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [435],
  {
    8435: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return T
          }
        })
      var r = n(9970),
        i = n(1527),
        s = n(959),
        l = n(1463),
        a = n.n(l),
        o = n(4573),
        c = n(9326),
        d = n(5380),
        u = n(5241),
        m = n(6536),
        x = n(2829),
        h = n.n(x),
        p = n(143),
        f = n.n(p),
        v = n(7135),
        g = n(9447),
        y = n(4405),
        j = n(6583),
        b = n(4),
        w = n(416),
        C = n(4249),
        N = n(3553),
        k = n(5202),
        S = n(2578),
        F = function (e) {
          var t,
            n = e.showFilterModal,
            r = e.setShowFilterModal,
            l = e.handleIsfilterComboboxOpen,
            o = (0, C.oR)(),
            u = o.propertyTypeSelected,
            m = o.categorySelected,
            x = o.priceRangeSelected,
            h = o.setPropertyTypeSelected,
            p = o.setCategorySelected,
            f = o.setPriceRangeSelected,
            F = o.updateFilteredPosts,
            T = o.updateFilteredPostsCount,
            B = (0, s.useState)(''),
            _ = B[0],
            E = B[1],
            M = (0, s.useState)(!1),
            R = M[0],
            Z = M[1],
            L =
              ((t = (0, v.Z)(function () {
                var e, t, n, i
                return (0, j.__generator)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      Z(!0),
                        (e = (null == u ? void 0 : u.id) === 0 ? void 0 : u),
                        (s.label = 1)
                    case 1:
                      return (
                        s.trys.push([1, 3, , 4]),
                        [
                          4,
                          (0, S.Z)({
                            method: 'POST',
                            url: '/search',
                            data: {
                              limit: 10,
                              offset: 0,
                              propertyType: e,
                              category: m,
                              priceRange: { min: x[0], max: x[1] },
                              keyword: _
                            }
                          })
                        ]
                      )
                    case 2:
                      return (
                        (i = s.sent()),
                        Z(!1),
                        T(
                          null == i
                            ? void 0
                            : null === (t = i.data) || void 0 === t
                            ? void 0
                            : t.count
                        ),
                        F(
                          null == i
                            ? void 0
                            : null === (n = i.data) || void 0 === n
                            ? void 0
                            : n.posts
                        ),
                        r(!1),
                        a().push('/search'),
                        [3, 4]
                      )
                    case 3:
                      return s.sent(), Z(!1), [3, 4]
                    case 4:
                      return [2]
                  }
                })
              })),
              function () {
                return t.apply(this, arguments)
              })
          return (0, i.jsx)(c.u.Root, {
            show: n,
            as: s.Fragment,
            children: (0, i.jsxs)(b.V, {
              as: 'div',
              className: 'fixed z-30',
              onClose: r,
              children: [
                (0, i.jsx)(c.u.Child, {
                  as: s.Fragment,
                  enter: 'ease-out duration-500',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, i.jsx)('div', {
                    className:
                      'fixed inset-0 bg-custom-gray bg-opacity-75 transition-opacity'
                  })
                }),
                (0, i.jsx)('div', {
                  className: 'fixed inset-0 z-20 overflow-y-auto',
                  children: (0, i.jsx)('div', {
                    className:
                      'flex min-h-full items-start justify-center md:p-4 text-center sm:items-center sm:p-0',
                    children: (0, i.jsx)(c.u.Child, {
                      as: s.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                      leaveTo:
                        'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                      children: (0, i.jsx)(b.V.Panel, {
                        className:
                          'relative transform overflow-hidden md:rounded-lg bg-white pt-5 pb-4 shadow-xl transition-all h-screen md:h-auto md:my-8 w-full md:max-w-lg',
                        children: (0, i.jsxs)('div', {
                          className: 'px-4',
                          children: [
                            (0, i.jsxs)('div', {
                              className:
                                'grid grid-cols-3 md:grid-cols-2 items-center pb-5',
                              children: [
                                (0, i.jsx)('div', {
                                  children: (0, i.jsxs)('button', {
                                    type: 'submit',
                                    className:
                                      'rounded-md hidden md:block bg-white text-custom-gray focus:outline-none',
                                    onClick: function () {
                                      return r(!1)
                                    },
                                    children: [
                                      (0, i.jsx)('span', {
                                        className: 'sr-only',
                                        children: 'Close'
                                      }),
                                      (0, i.jsx)(w, {
                                        className: 'h-6 w-6 stroke-black',
                                        'aria-hidden': 'true'
                                      })
                                    ]
                                  })
                                }),
                                (0, i.jsx)('div', {
                                  className:
                                    'text-center md:text-end font-DroidArabicKufiBold text-lg',
                                  children: 'فلتر'
                                }),
                                (0, i.jsx)('div', {
                                  className: 'flex justify-end md:hidden',
                                  children: (0, i.jsx)(d, {
                                    className: 'h-9 w-9 text-black',
                                    'aria-hidden': 'true',
                                    onClick: function () {
                                      r(!1), l(!1)
                                    }
                                  })
                                })
                              ]
                            }),
                            (0, i.jsxs)('div', {
                              className: 'py-5',
                              children: [
                                (0, i.jsx)('div', {
                                  className: 'text-end',
                                  children: 'الغرض'
                                }),
                                (0, i.jsx)('div', {
                                  className:
                                    'flex flex-wrap flex-row-reverse gap-3 mt-3',
                                  children:
                                    k.bd &&
                                    k.bd.map(function (e) {
                                      return (0, i.jsx)(
                                        'button',
                                        {
                                          type: 'submit',
                                          className: ''.concat(
                                            (null == m ? void 0 : m.id) ===
                                              (null == e ? void 0 : e.id)
                                              ? 'bg-primary text-white'
                                              : 'bg-custom-gray-3 text-custom-gray border-custom-gray-border border',
                                            ' px-4 py-2 rounded-full text-sm flex align-center w-max cursor-pointer transition duration-300 ease outline-none'
                                          ),
                                          onClick: function () {
                                            return p({
                                              id: null == e ? void 0 : e.id,
                                              title:
                                                null == e ? void 0 : e.title
                                            })
                                          },
                                          children: null == e ? void 0 : e.title
                                        },
                                        e.id
                                      )
                                    })
                                })
                              ]
                            }),
                            (0, i.jsxs)('div', {
                              className: 'py-5',
                              children: [
                                (0, i.jsx)('div', {
                                  className: 'text-end',
                                  children: 'نوع العقار'
                                }),
                                (0, i.jsx)('div', {
                                  className:
                                    'flex flex-wrap flex-row-reverse gap-3 mt-3',
                                  children:
                                    k.DN &&
                                    k.DN.map(function (e) {
                                      return (0, i.jsx)(
                                        'button',
                                        {
                                          type: 'submit',
                                          className: ''.concat(
                                            (null == u ? void 0 : u.id) ===
                                              (null == e ? void 0 : e.id)
                                              ? 'bg-primary text-white'
                                              : 'bg-custom-gray-3 text-custom-gray border-custom-gray-border border',
                                            ' px-4 py-2 rounded-full text-sm flex align-center w-max cursor-pointer transition duration-300 ease outline-none'
                                          ),
                                          onClick: function () {
                                            return h({
                                              id: null == e ? void 0 : e.id,
                                              title:
                                                null == e ? void 0 : e.title
                                            })
                                          },
                                          children: null == e ? void 0 : e.title
                                        },
                                        e.id
                                      )
                                    })
                                })
                              ]
                            }),
                            (0, i.jsxs)('div', {
                              className: 'py-5',
                              children: [
                                (0, i.jsx)('div', {
                                  className: 'text-end',
                                  children: 'السعر'
                                }),
                                (0, i.jsx)('div', {
                                  className:
                                    'flex flex-wrap justify-center mt-12 px-5',
                                  children: (0, i.jsx)(N.Range, {
                                    values: x,
                                    step: k.Co.step,
                                    min: k.Co.min,
                                    max: k.Co.max,
                                    onChange: function (e) {
                                      return f(e)
                                    },
                                    renderTrack: function (e) {
                                      var t = e.props,
                                        n = e.children
                                      return (0, i.jsx)('div', {
                                        onMouseDown: t.onMouseDown,
                                        onTouchStart: t.onTouchStart,
                                        style: (0, y.Z)((0, g.Z)({}, t.style), {
                                          height: '36px',
                                          display: 'flex',
                                          width: '100%'
                                        }),
                                        children: (0, i.jsx)('div', {
                                          ref: t.ref,
                                          style: {
                                            height: '5px',
                                            width: '100%',
                                            borderRadius: '4px',
                                            background: (0,
                                            N.getTrackBackground)({
                                              values: x,
                                              colors: [
                                                '#ccc',
                                                '#6598CB',
                                                '#ccc'
                                              ],
                                              min: k.Co.min,
                                              max: k.Co.max
                                            }),
                                            alignSelf: 'center'
                                          },
                                          children: n
                                        })
                                      })
                                    },
                                    renderThumb: function (e) {
                                      var t = e.index,
                                        n = e.props
                                      return (0, i.jsx)(
                                        'div',
                                        (0, y.Z)((0, g.Z)({}, n), {
                                          style: (0, y.Z)(
                                            (0, g.Z)({}, n.style),
                                            {
                                              height: '15px',
                                              width: '15px',
                                              borderRadius: '50%',
                                              backgroundColor: '#6598CB',
                                              display: 'flex',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              boxShadow: '0px 2px 6px #DFE9F3',
                                              outline: 'none'
                                            }
                                          ),
                                          children: (0, i.jsxs)('div', {
                                            style: {
                                              position: 'absolute',
                                              top: '-45px',
                                              fontSize: '14px',
                                              fontFamily:
                                                'Arial,Helvetica Neue,Helvetica,sans-serif',
                                              padding: '8px',
                                              borderRadius: '4px',
                                              backgroundColor: '#E8F0F7',
                                              color: '#72A1CF',
                                              display: 'flex',
                                              gap: 10,
                                              border: '1px solid #6D9DCE',
                                              left: 0 === t ? '0px' : 'auto',
                                              right: 1 === t ? '0px' : 'auto'
                                            },
                                            children: [
                                              (0, i.jsx)('span', {
                                                children: 'دك'
                                              }),
                                              (0, i.jsx)('span', {
                                                children: x[t]
                                              })
                                            ]
                                          })
                                        })
                                      )
                                    }
                                  })
                                })
                              ]
                            }),
                            (0, i.jsx)('div', {
                              className: 'mt-2',
                              children: (0, i.jsxs)('div', {
                                className: 'relative',
                                children: [
                                  (0, i.jsx)('input', {
                                    type: 'search',
                                    id: 'search',
                                    className:
                                      'outline-none text-base block px-4 py-3 md:py-4 pr-10 w-full text-black rounded-full border border-custom-gray-border text-end',
                                    placeholder: 'البحث بالكلمه',
                                    onChange: function (e) {
                                      return E(e.target.value)
                                    }
                                  }),
                                  (0, i.jsx)('div', {
                                    className:
                                      'flex absolute inset-y-0 right-5 items-center pl-2 pointer-events-none',
                                    children: (0, i.jsx)('svg', {
                                      'aria-hidden': 'true',
                                      className: 'w-5 h-5 text-custom-gray',
                                      fill: 'none',
                                      stroke: 'currentColor',
                                      viewBox: '0 0 24 24',
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      children: (0, i.jsx)('path', {
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        strokeWidth: '2',
                                        d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                      })
                                    })
                                  })
                                ]
                              })
                            }),
                            (0, i.jsx)('div', {
                              className: 'flex justify-center mt-8 mb-4',
                              children: (0, i.jsxs)('button', {
                                type: 'submit',
                                className:
                                  'bg-secondary w-full flex justify-center items-center py-3 md:py-4 px-8 text-white md:rounded-lg rounded-full hover:opacity-90 transition-opacity duration-300',
                                onClick: L,
                                children: [
                                  R &&
                                    (0, i.jsxs)('svg', {
                                      'aria-hidden': 'true',
                                      role: 'status',
                                      className:
                                        'inline w-5 h-5 mr-3 text-primary animate-spin',
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
                                    }),
                                  'عرض النتائج'
                                ]
                              })
                            })
                          ]
                        })
                      })
                    })
                  })
                })
              ]
            })
          })
        },
        T = function (e) {
          var t = e.locations,
            n = e.handleIsfilterComboboxOpen,
            l = e.handleLocationChanged,
            x = e.showOptions,
            p = (0, C.oR)(),
            v = p.locationsSelected,
            g = p.propertyTypeSelected,
            y = p.categorySelected,
            j = p.updateCanFetchPosts,
            b = p.setLocationsSelected,
            w = (0, s.useState)(void 0),
            N = w[0],
            k = w[1],
            S = (0, s.useState)(''),
            T = S[0],
            B = S[1],
            _ = (0, s.useState)(!1),
            E = _[0],
            M = _[1],
            R = (0, s.useState)(!1),
            Z = R[0],
            L = R[1],
            D = (0, s.useState)(!0),
            O = D[0],
            P = D[1],
            z = (0, s.useRef)(null),
            A = (0, s.useState)([]),
            I = A[0],
            K = A[1],
            H = function (e) {
              K(
                I.filter(function (t) {
                  return t.id !== e
                })
              )
            },
            V = function (e) {
              var t = ''.concat(null == y ? void 0 : y.title)
              g &&
                0 !== g.id &&
                (t = ''.concat(t, '/').concat(null == g ? void 0 : g.title)),
                (t = ''.concat(t, '/').concat(e.replace(/\s+/g, '-'))),
                a().push(t)
            }
          ;(0, s.useEffect)(
            function () {
              x ||
                O ||
                (I && I.length <= 1 && I[0] && V(I[0].title),
                j(!0),
                b(I),
                a().push('/search'))
            },
            [I]
          ),
            (0, s.useEffect)(
              function () {
                !x && O && K(v)
              },
              [v]
            )
          var W = function (e, t, n) {
              if ((O && P(!1), null === n))
                K([{ id: e, title: t, state_id: n }])
              else {
                if (
                  I.find(function (t) {
                    return t.id === e
                  })
                )
                  return
                var i = I.filter(function (e) {
                  return null !== e.state_id
                })
                K((0, r.Z)(i).concat([{ id: e, title: t, state_id: n }]))
              }
            },
            q = function () {
              var e
              return null === (e = z.current) || void 0 === e
                ? void 0
                : e.click()
            }
          ;(0, s.useEffect)(
            function () {
              x && q()
            },
            [x]
          )
          var G = (0, s.useCallback)(function (e) {
              null !== e &&
                x &&
                setTimeout(function () {
                  window.scrollTo({
                    top: e.getBoundingClientRect().top,
                    behavior: 'smooth'
                  })
                }, 100)
            }, []),
            J = function (e) {
              n(!1),
                l ? l(e.id, e.title, e.state_id) : W(e.id, e.title, e.state_id)
            }
          ;(0, s.useEffect)(
            function () {
              x || n(Z)
            },
            [Z]
          )
          var Q =
            '' === T
              ? t
              : t.filter(function (e) {
                  return e.title
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(T.toLowerCase().replace(/\s+/g, ''))
                })
          return (0, i.jsxs)('div', {
            className: 'dir-rtl w-full',
            ref: G,
            children: [
              (0, i.jsx)(o.h, {
                value: N,
                onChange: k,
                children: function (e) {
                  var t = e.open
                  return (0, i.jsxs)(i.Fragment, {
                    children: [
                      x &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)('div', {
                              className:
                                'flex md:hidden items-center absolute z-10 right-3 top-3.5',
                              children: (0, i.jsx)(d, {
                                className: 'h-9 w-9 text-black',
                                'aria-hidden': 'true',
                                onClick: function () {
                                  return n(!1)
                                }
                              })
                            }),
                            (0, i.jsx)(o.h.Button, {
                              className: 'absolute top-5 left-7 z-10',
                              type: 'submit',
                              children: (0, i.jsx)(h(), {
                                src: '/images/filter-icon-black.svg',
                                width: 24,
                                height: 24,
                                onClick: function () {
                                  return M(!0)
                                },
                                alt: 'filter'
                              })
                            })
                          ]
                        }),
                      (0, i.jsxs)('div', {
                        className: 'relative',
                        children: [
                          (0, i.jsxs)('div', {
                            className:
                              'flex flex-col py-3 px-2 gap-2 relative cursor-default overflow-hidden rounded-lg text-left md:shadow-md outline-none',
                            children: [
                              (0, i.jsxs)('div', {
                                className: 'flex gap-2 items-center relative',
                                children: [
                                  (0, i.jsx)(o.h.Button, {
                                    className: 'hidden md:flex items-center',
                                    type: 'submit',
                                    'aria-label': 'dropdown',
                                    children: t
                                      ? (0, i.jsx)(u, {
                                          className: 'h-7 w-7 text-custom-gray',
                                          'aria-hidden': 'true'
                                        })
                                      : (0, i.jsx)(m, {
                                          className: 'h-7 w-7 text-custom-gray',
                                          'aria-hidden': 'true'
                                        })
                                  }),
                                  (0, i.jsx)(o.h.Button, {
                                    className: 'hidden',
                                    ref: z,
                                    type: 'submit'
                                  }),
                                  (0, i.jsx)(o.h.Button, {
                                    className: 'w-full h-8',
                                    as: 'div',
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(o.h.Input, {
                                      className: ''.concat(
                                        x ? 'px-7' : 'px-2',
                                        ' w-full h-full text-base leading-5 text-black outline-none'
                                      ),
                                      placeholder: 'اكتب المنطقه للبحث',
                                      onChange: function (e) {
                                        return B(e.target.value)
                                      },
                                      onClick: function () {
                                        return L(!Z)
                                      },
                                      onBlur: function () {
                                        return L(!1)
                                      }
                                    })
                                  }),
                                  !x &&
                                    (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        (0, i.jsx)('div', {
                                          className:
                                            'hidden md:flex md:items-center md:w-7 md:h-7 relative cursor-pointer',
                                          children: (0, i.jsx)(h(), {
                                            src: '/images/filter-icon-black.svg',
                                            layout: 'fill',
                                            onClick: function () {
                                              return M(!0)
                                            },
                                            alt: 'filter'
                                          })
                                        }),
                                        (0, i.jsx)('div', {
                                          className:
                                            'md:hidden w-10 h-10 relative',
                                          children: (0, i.jsx)(h(), {
                                            src: '/images/filter-icon-grey.svg',
                                            layout: 'fill',
                                            onClick: function () {
                                              return M(!0)
                                            },
                                            alt: 'filter'
                                          })
                                        }),
                                        (0, i.jsx)('div', {
                                          className: 'md:hidden',
                                          children: (0, i.jsx)(f(), {
                                            href: '/',
                                            children: (0, i.jsx)('a', {
                                              className: 'flex items-center',
                                              children: (0, i.jsx)(h(), {
                                                width: 40,
                                                height: 40,
                                                src: '/images/mobile-search-logo.svg',
                                                alt: 'logo'
                                              })
                                            })
                                          })
                                        })
                                      ]
                                    })
                                ]
                              }),
                              (0, i.jsx)('div', {
                                className: ''.concat(
                                  I.length ? 'my-1' : 'm-0 hidden',
                                  ' flex flex-wrap justify-start'
                                ),
                                children: I.map(function (e) {
                                  return (0, i.jsxs)(
                                    'div',
                                    {
                                      className:
                                        'rounded-lg mt-2 ml-2 py-1 px-2 border border-primary text-primary bg-primary-lighter text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease',
                                      children: [
                                        e.title,
                                        (0, i.jsx)('button', {
                                          type: 'submit',
                                          className:
                                            'bg-transparent hover focus:outline-none',
                                          onClick: function () {
                                            return H(e.id)
                                          },
                                          children: (0, i.jsx)('svg', {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            fill: 'none',
                                            viewBox: '0 0 24 24',
                                            strokeWidth: '1.5',
                                            stroke: 'currentColor',
                                            className: 'w-4 h-4 ml-1',
                                            children: (0, i.jsx)('path', {
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                              d: 'M6 18L18 6M6 6l12 12'
                                            })
                                          })
                                        })
                                      ]
                                    },
                                    e.id
                                  )
                                })
                              })
                            ]
                          }),
                          (0, i.jsx)(c.u, {
                            as: s.Fragment,
                            leave: 'transition ease-in duration-100',
                            leaveFrom: 'opacity-100',
                            leaveTo: 'opacity-0',
                            afterLeave: function () {
                              return B('')
                            },
                            children: (0, i.jsx)(o.h.Options, {
                              className:
                                'fixed md:absolute pr-2 overflow-y-scroll mt-1 left-0 h-screen w-screen md:max-h-96 md:w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                              children:
                                Q && 0 === Q.length && '' !== T
                                  ? (0, i.jsx)('div', {
                                      className:
                                        'relative cursor-default select-none py-2 px-4 text-custom-gray',
                                      children: 'لا توجد منطقه بهذا الاسم'
                                    })
                                  : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        (0, i.jsx)(o.h.Option, {
                                          className:
                                            'relative cursor-default select-none',
                                          value: 'all',
                                          onClick: function () {
                                            return n(!1)
                                          },
                                          children: (0, i.jsxs)('span', {
                                            onClick: function () {
                                              return J({
                                                title: 'كل مناطق الكويت',
                                                state_id: null
                                              })
                                            },
                                            className:
                                              'block text-base truncate hover:bg-gray-100 text-black font-DroidArabicKufiBold py-2 px-4 cursor-pointer',
                                            children: [' ', 'كل مناطق الكويت']
                                          })
                                        }),
                                        Q.map(function (e) {
                                          return (0, i.jsxs)(
                                            o.h.Option,
                                            {
                                              className:
                                                'relative cursor-default select-none',
                                              value: e,
                                              onClick: function () {
                                                return J(e)
                                              },
                                              children: [
                                                null !== e.state_id &&
                                                  (0, i.jsxs)('span', {
                                                    className:
                                                      'absolute left-5 top-1 text-primary',
                                                    children: [
                                                      '(',
                                                      e.count,
                                                      ')'
                                                    ]
                                                  }),
                                                (0, i.jsx)('span', {
                                                  className: ''
                                                    .concat(
                                                      null === e.state_id &&
                                                        'text-black',
                                                      ' '
                                                    )
                                                    .concat(
                                                      null !== e.type &&
                                                        'text-primary',
                                                      ' hover:bg-gray-100 font-DroidArabicKufiBold text-base block truncate py-2 pr-4 cursor-pointer'
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
              }),
              (0, i.jsx)(s.Suspense, {
                fallback: 'Loading...',
                children: (0, i.jsx)(F, {
                  showFilterModal: E,
                  setShowFilterModal: M,
                  handleIsfilterComboboxOpen: n
                })
              })
            ]
          })
        }
    }
  }
])
