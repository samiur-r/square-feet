'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [386],
  {
    7599: function (e, t, s) {
      s.r(t)
      var a = s(1527),
        n = s(959),
        o = s(2829),
        r = s.n(o),
        i = s(9326),
        c = s(4),
        l = s(6050)
      s(8224)
      var d = s(384),
        u = s(5380),
        m = s(416),
        h = s(6466),
        p = function (e) {
          var t = e.media,
            s = e.open,
            o = e.setOpen,
            p = (0, n.useState)(0),
            x = p[0],
            f = p[1],
            j = function () {
              f(function (e) {
                return e + 1
              })
            },
            w = function () {
              f(function (e) {
                return e - 1
              })
            },
            v = function (e) {
              x !== e && f(e)
            }
          return (0, a.jsx)(i.u.Root, {
            show: s,
            as: n.Fragment,
            children: (0, a.jsxs)(c.V, {
              as: 'div',
              className: 'relative',
              onClose: o,
              children: [
                (0, a.jsx)(i.u.Child, {
                  as: n.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, a.jsx)('div', {
                    className: 'fixed inset-0 bg-stone-800 transition-opacity'
                  })
                }),
                (0, a.jsx)('div', {
                  className: 'fixed inset-0 z-30 overflow-y-auto',
                  children: (0, a.jsx)(i.u.Child, {
                    as: n.Fragment,
                    enter: 'ease-out duration-300',
                    enterFrom:
                      'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                    leave: 'ease-in duration-200',
                    leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                    leaveTo:
                      'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                    children: (0, a.jsx)(c.V.Panel, {
                      className: 'bg-stone-800 transform transition-all',
                      children: (0, a.jsxs)('div', {
                        className: 'dir-ltr',
                        children: [
                          (0, a.jsx)('div', {
                            className:
                              'h-screen flex flex-col justify-center md:justify-between overflow-hidden md:pt-10',
                            children: (0, a.jsx)(l.lr, {
                              selectedItem: x,
                              onChange: v,
                              showIndicators: !1,
                              showArrows: !1,
                              infiniteLoop: !0,
                              transitionTime: 200,
                              useKeyboardArrows: !0,
                              showStatus: !1,
                              renderThumbs: function () {
                                return t.map(function (e) {
                                  return (0, h.Z)(e)
                                    ? (0, a.jsx)(
                                        r(),
                                        {
                                          src: '/images/posts/'.concat(e),
                                          width: 150,
                                          height: 150,
                                          objectFit: 'contain',
                                          alt: 'post_image'
                                        },
                                        Math.random()
                                      )
                                    : (0, a.jsxs)(
                                        'video',
                                        {
                                          className:
                                            '2xl:w-96 2xl:h-96 w-26 h-26',
                                          playsInline: !0,
                                          children: [
                                            (0, a.jsx)('source', {
                                              src: '/images/posts/'.concat(e)
                                            }),
                                            'Your browser does not support the video tag.'
                                          ]
                                        },
                                        Math.random()
                                      )
                                })
                              },
                              children: t.map(function (e) {
                                return (0, h.Z)(e)
                                  ? (0, a.jsx)(
                                      r(),
                                      {
                                        src: '/images/posts/'.concat(e),
                                        alt: 'post_image',
                                        width: 600,
                                        height: 600,
                                        objectFit: 'contain'
                                      },
                                      Math.random()
                                    )
                                  : (0, a.jsxs)(
                                      'video',
                                      {
                                        className: 'max-w-3xl',
                                        controls: !0,
                                        playsInline: !0,
                                        children: [
                                          (0, a.jsx)('source', {
                                            src: '/images/posts/'.concat(e)
                                          }),
                                          'Your browser does not support the video tag.'
                                        ]
                                      },
                                      Math.random()
                                    )
                              })
                            })
                          }),
                          (0, a.jsx)('div', {
                            className:
                              'absolute top-0 right-0 w-8 md:w-10 cursor-pointer m-2 z-10',
                            children: (0, a.jsx)(m, {
                              className: 'text-white',
                              onClick: function () {
                                return o(!1)
                              }
                            })
                          }),
                          (0, a.jsx)('div', {
                            className:
                              'absolute top-0 left-0 h-full flex items-center w-16 cursor-pointer',
                            children: (0, a.jsx)(d, {
                              className: 'text-white',
                              onClick: w
                            })
                          }),
                          (0, a.jsx)('div', {
                            className:
                              'absolute top-0 right-0 h-full flex items-center w-16 cursor-pointer',
                            children: (0, a.jsx)(u, {
                              className: 'text-white',
                              onClick: j
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
      t.default = p
    }
  }
])
