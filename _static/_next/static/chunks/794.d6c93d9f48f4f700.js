;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [794],
  {
    4875: function (e, t) {
      var n
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        'use strict'
        var r = {}.hasOwnProperty
        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t]
            if (n) {
              var o = typeof n
              if ('string' === o || 'number' === o) e.push(n)
              else if (Array.isArray(n)) {
                if (n.length) {
                  var s = i.apply(null, n)
                  s && e.push(s)
                }
              } else if ('object' === o) {
                if (
                  n.toString !== Object.prototype.toString &&
                  !n.toString.toString().includes('[native code]')
                ) {
                  e.push(n.toString())
                  continue
                }
                for (var a in n) r.call(n, a) && n[a] && e.push(a)
              }
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 !==
              (n = function () {
                return i
              }.apply(t, [])) && (e.exports = n)
      })()
    },
    8224: function () {},
    4049: function (e, t, n) {
      'use strict'
      var r = n(6257)
      function i() {}
      function o() {}
      ;(o.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, o, s) {
            if (s !== r) {
              var a = Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((a.name = 'Invariant Violation'), a)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: i
          }
          return (n.PropTypes = n), n
        })
    },
    507: function (e, t, n) {
      e.exports = n(4049)()
    },
    6257: function (e) {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    7325: function (e, t, n) {
      var r, i, o, s
      ;(s = function (e, t) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 })
        var n,
          r = ((n = t), n && n.__esModule ? n : { default: n })
        e.default = r.default
      }),
        (i = [t, n(21)]),
        void 0 !== (o = s.apply(t, i)) && (e.exports = o)
    },
    21: function (e, t, n) {
      var r, i, o, s
      ;(s = function (e, t, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.setHasSupportToCaptureOption = u)
        var r = o(t),
          i = o(n)
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            },
          a = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r)
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          })(),
          l = !1
        function u(e) {
          l = e
        }
        try {
          addEventListener(
            'test',
            null,
            Object.defineProperty({}, 'capture', {
              get: function () {
                var e
                l = !0
              }
            })
          )
        } catch (c) {}
        function p() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { capture: !0 }
          return l ? e : e.capture
        }
        function f(e) {
          if ('touches' in e) {
            var t,
              n,
              r = e.touches[0]
            return { x: r.pageX, y: r.pageY }
          }
          return { x: e.screenX, y: e.screenY }
        }
        var d = (function (e) {
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError('Cannot call a class as a function')
            })(this, t)
            for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++)
              r[i] = arguments[i]
            var o = (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return t && ('object' == typeof t || 'function' == typeof t)
                ? t
                : e
            })(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(r)
              )
            )
            return (
              (o._handleSwipeStart = o._handleSwipeStart.bind(o)),
              (o._handleSwipeMove = o._handleSwipeMove.bind(o)),
              (o._handleSwipeEnd = o._handleSwipeEnd.bind(o)),
              (o._onMouseDown = o._onMouseDown.bind(o)),
              (o._onMouseMove = o._onMouseMove.bind(o)),
              (o._onMouseUp = o._onMouseUp.bind(o)),
              (o._setSwiperRef = o._setSwiperRef.bind(o)),
              o
            )
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, e),
            a(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.swiper &&
                    this.swiper.addEventListener(
                      'touchmove',
                      this._handleSwipeMove,
                      p({ capture: !0, passive: !1 })
                    )
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.swiper &&
                    this.swiper.removeEventListener(
                      'touchmove',
                      this._handleSwipeMove,
                      p({ capture: !0, passive: !1 })
                    )
                }
              },
              {
                key: '_onMouseDown',
                value: function (e) {
                  this.props.allowMouseEvents &&
                    ((this.mouseDown = !0),
                    document.addEventListener('mouseup', this._onMouseUp),
                    document.addEventListener('mousemove', this._onMouseMove),
                    this._handleSwipeStart(e))
                }
              },
              {
                key: '_onMouseMove',
                value: function (e) {
                  this.mouseDown && this._handleSwipeMove(e)
                }
              },
              {
                key: '_onMouseUp',
                value: function (e) {
                  ;(this.mouseDown = !1),
                    document.removeEventListener('mouseup', this._onMouseUp),
                    document.removeEventListener(
                      'mousemove',
                      this._onMouseMove
                    ),
                    this._handleSwipeEnd(e)
                }
              },
              {
                key: '_handleSwipeStart',
                value: function (e) {
                  var t = f(e),
                    n = t.x,
                    r = t.y
                  ;(this.moveStart = { x: n, y: r }), this.props.onSwipeStart(e)
                }
              },
              {
                key: '_handleSwipeMove',
                value: function (e) {
                  if (this.moveStart) {
                    var t = f(e),
                      n = t.x,
                      r = t.y,
                      i = n - this.moveStart.x,
                      o = r - this.moveStart.y
                    ;(this.moving = !0),
                      this.props.onSwipeMove({ x: i, y: o }, e) &&
                        e.cancelable &&
                        e.preventDefault(),
                      (this.movePosition = { deltaX: i, deltaY: o })
                  }
                }
              },
              {
                key: '_handleSwipeEnd',
                value: function (e) {
                  this.props.onSwipeEnd(e)
                  var t = this.props.tolerance
                  this.moving &&
                    this.movePosition &&
                    (this.movePosition.deltaX < -t
                      ? this.props.onSwipeLeft(1, e)
                      : this.movePosition.deltaX > t &&
                        this.props.onSwipeRight(1, e),
                    this.movePosition.deltaY < -t
                      ? this.props.onSwipeUp(1, e)
                      : this.movePosition.deltaY > t &&
                        this.props.onSwipeDown(1, e)),
                    (this.moveStart = null),
                    (this.moving = !1),
                    (this.movePosition = null)
                }
              },
              {
                key: '_setSwiperRef',
                value: function (e) {
                  ;(this.swiper = e), this.props.innerRef(e)
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.tagName, e.className),
                    n = e.style,
                    i = e.children,
                    o =
                      (e.allowMouseEvents,
                      e.onSwipeUp,
                      e.onSwipeDown,
                      e.onSwipeLeft,
                      e.onSwipeRight,
                      e.onSwipeStart,
                      e.onSwipeMove,
                      e.onSwipeEnd,
                      e.innerRef,
                      e.tolerance,
                      (function (e, t) {
                        var n = {}
                        for (var r in e)
                          !(t.indexOf(r) >= 0) &&
                            Object.prototype.hasOwnProperty.call(e, r) &&
                            (n[r] = e[r])
                        return n
                      })(e, [
                        'tagName',
                        'className',
                        'style',
                        'children',
                        'allowMouseEvents',
                        'onSwipeUp',
                        'onSwipeDown',
                        'onSwipeLeft',
                        'onSwipeRight',
                        'onSwipeStart',
                        'onSwipeMove',
                        'onSwipeEnd',
                        'innerRef',
                        'tolerance'
                      ]))
                  return r.default.createElement(
                    this.props.tagName,
                    s(
                      {
                        ref: this._setSwiperRef,
                        onMouseDown: this._onMouseDown,
                        onTouchStart: this._handleSwipeStart,
                        onTouchEnd: this._handleSwipeEnd,
                        className: t,
                        style: n
                      },
                      o
                    ),
                    i
                  )
                }
              }
            ]),
            t
          )
        })(t.Component)
        ;(d.displayName = 'ReactSwipe'),
          (d.propTypes = {
            tagName: i.default.string,
            className: i.default.string,
            style: i.default.object,
            children: i.default.node,
            allowMouseEvents: i.default.bool,
            onSwipeUp: i.default.func,
            onSwipeDown: i.default.func,
            onSwipeLeft: i.default.func,
            onSwipeRight: i.default.func,
            onSwipeStart: i.default.func,
            onSwipeMove: i.default.func,
            onSwipeEnd: i.default.func,
            innerRef: i.default.func,
            tolerance: i.default.number.isRequired
          }),
          (d.defaultProps = {
            tagName: 'div',
            allowMouseEvents: !1,
            onSwipeUp: function () {},
            onSwipeDown: function () {},
            onSwipeLeft: function () {},
            onSwipeRight: function () {},
            onSwipeStart: function () {},
            onSwipeMove: function () {},
            onSwipeEnd: function () {},
            innerRef: function () {},
            tolerance: 0
          }),
          (e.default = d)
      }),
        (i = [t, n(959), n(507)]),
        void 0 !== (o = s.apply(t, i)) && (e.exports = o)
    },
    1674: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var n = function (e, t, n) {
        var r = 0 === e ? e : e + t
        return (
          'translate3d(' +
          ('horizontal' === n ? [r, 0, 0] : [0, r, 0]).join(',') +
          ')'
        )
      }
      t.default = n
    },
    1102: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.fadeAnimationHandler =
          t.slideStopSwipingHandler =
          t.slideSwipeAnimationHandler =
          t.slideAnimationHandler =
            void 0)
      var r,
        i = n(959),
        o = ((r = n(1674)), r && r.__esModule ? r : { default: r }),
        s = n(9513)
      function a(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                u(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      }
      var c = function (e, t) {
        var n = {},
          r = t.selectedItem,
          a = i.Children.count(e.children) - 1
        if (e.infiniteLoop && (r < 0 || r > a))
          return (
            r < 0
              ? e.centerMode &&
                e.centerSlidePercentage &&
                'horizontal' === e.axis
                ? (n.itemListStyle = (0, s.setPosition)(
                    -(a + 2) * e.centerSlidePercentage -
                      (100 - e.centerSlidePercentage) / 2,
                    e.axis
                  ))
                : (n.itemListStyle = (0, s.setPosition)(
                    -(100 * (a + 2)),
                    e.axis
                  ))
              : r > a && (n.itemListStyle = (0, s.setPosition)(0, e.axis)),
            n
          )
        var u = (0, s.getPosition)(r, e),
          c = (0, o.default)(u, '%', e.axis),
          p = e.transitionTime + 'ms'
        return (
          (n.itemListStyle = {
            WebkitTransform: c,
            msTransform: c,
            OTransform: c,
            transform: c
          }),
          t.swiping ||
            (n.itemListStyle = l(
              l({}, n.itemListStyle),
              {},
              {
                WebkitTransitionDuration: p,
                MozTransitionDuration: p,
                OTransitionDuration: p,
                transitionDuration: p,
                msTransitionDuration: p
              }
            )),
          n
        )
      }
      t.slideAnimationHandler = c
      var p = function (e, t, n, r) {
        var o = {},
          a = 'horizontal' === t.axis,
          l = i.Children.count(t.children),
          u = (0, s.getPosition)(n.selectedItem, t),
          c = t.infiniteLoop
            ? (0, s.getPosition)(l - 1, t) - 100
            : (0, s.getPosition)(l - 1, t),
          p = a ? e.x : e.y,
          f = p
        0 === u && p > 0 && (f = 0), u === c && p < 0 && (f = 0)
        var d = u + 100 / (n.itemSize / f),
          h = Math.abs(p) > t.swipeScrollTolerance
        return (
          t.infiniteLoop &&
            h &&
            (0 === n.selectedItem && d > -100
              ? (d -= 100 * l)
              : n.selectedItem === l - 1 && d < -(100 * l) && (d += 100 * l)),
          (!t.preventMovementUntilSwipeScrollTolerance ||
            h ||
            n.swipeMovementStarted) &&
            (n.swipeMovementStarted || r({ swipeMovementStarted: !0 }),
            (o.itemListStyle = (0, s.setPosition)(d, t.axis))),
          h && !n.cancelClick && r({ cancelClick: !0 }),
          o
        )
      }
      t.slideSwipeAnimationHandler = p
      var f = function (e, t) {
        var n = (0, s.getPosition)(t.selectedItem, e)
        return { itemListStyle: (0, s.setPosition)(n, e.axis) }
      }
      t.slideStopSwipingHandler = f
      var d = function (e, t) {
        var n = e.transitionTime + 'ms',
          r = 'ease-in-out',
          i = {
            position: 'absolute',
            display: 'block',
            zIndex: -2,
            minHeight: '100%',
            opacity: 0,
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            transitionTimingFunction: r,
            msTransitionTimingFunction: r,
            MozTransitionTimingFunction: r,
            WebkitTransitionTimingFunction: r,
            OTransitionTimingFunction: r
          }
        return (
          t.swiping ||
            (i = l(
              l({}, i),
              {},
              {
                WebkitTransitionDuration: n,
                MozTransitionDuration: n,
                OTransitionDuration: n,
                transitionDuration: n,
                msTransitionDuration: n
              }
            )),
          {
            slideStyle: i,
            selectedStyle: l(
              l({}, i),
              {},
              { opacity: 1, position: 'relative' }
            ),
            prevStyle: l({}, i)
          }
        )
      }
      t.fadeAnimationHandler = d
    },
    858: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== d(e) && 'function' != typeof e))
            return { default: e }
          var t = f()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, i) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i])
            }
          return (n.default = e), t && t.set(e, n), n
        })(n(959)),
        i = p(n(7325)),
        o = p(n(1292)),
        s = p(n(956)),
        a = p(n(7903)),
        l = p(n(2528)),
        u = n(9513),
        c = n(1102)
      function p(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function f() {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (f = function () {
            return e
          }),
          e
        )
      }
      function d(e) {
        return (d =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      function m(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                g(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function b(e, t) {
        return (b =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function w(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function S(e) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      }
      var E = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw TypeError(
              'Super expression must either be null or a function'
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && b(e, t)
        })(P, e)
        var t,
          n,
          p,
          f,
          m,
          E =
            ((n = (function () {
              if (
                'undefined' == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1
              if ('function' == typeof Proxy) return !0
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                )
              } catch (e) {
                return !1
              }
            })()),
            function () {
              var e,
                t,
                r,
                i = S(P)
              if (n) {
                var o = S(this).constructor
                r = Reflect.construct(i, arguments, o)
              } else r = i.apply(this, arguments)
              return (
                (e = this),
                (t = r),
                t && ('object' === d(t) || 'function' == typeof t) ? t : w(e)
              )
            })
        function P(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError('Cannot call a class as a function')
          })(this, P),
            g(w((t = E.call(this, e))), 'thumbsRef', void 0),
            g(w(t), 'carouselWrapperRef', void 0),
            g(w(t), 'listRef', void 0),
            g(w(t), 'itemsRef', void 0),
            g(w(t), 'timer', void 0),
            g(w(t), 'animationHandler', void 0),
            g(w(t), 'setThumbsRef', function (e) {
              t.thumbsRef = e
            }),
            g(w(t), 'setCarouselWrapperRef', function (e) {
              t.carouselWrapperRef = e
            }),
            g(w(t), 'setListRef', function (e) {
              t.listRef = e
            }),
            g(w(t), 'setItemsRef', function (e, n) {
              t.itemsRef || (t.itemsRef = []), (t.itemsRef[n] = e)
            }),
            g(w(t), 'autoPlay', function () {
              if (!(1 >= r.Children.count(t.props.children)))
                t.clearAutoPlay(),
                  t.props.autoPlay &&
                    (t.timer = setTimeout(function () {
                      t.increment()
                    }, t.props.interval))
            }),
            g(w(t), 'clearAutoPlay', function () {
              t.timer && clearTimeout(t.timer)
            }),
            g(w(t), 'resetAutoPlay', function () {
              t.clearAutoPlay(), t.autoPlay()
            }),
            g(w(t), 'stopOnHover', function () {
              t.setState({ isMouseEntered: !0 }, t.clearAutoPlay)
            }),
            g(w(t), 'startOnLeave', function () {
              t.setState({ isMouseEntered: !1 }, t.autoPlay)
            }),
            g(w(t), 'isFocusWithinTheCarousel', function () {
              return (
                !!t.carouselWrapperRef &&
                !!(
                  (0, a.default)().activeElement === t.carouselWrapperRef ||
                  t.carouselWrapperRef.contains((0, a.default)().activeElement)
                )
              )
            }),
            g(w(t), 'navigateWithKeyboard', function (e) {
              if (t.isFocusWithinTheCarousel()) {
                var n = 'horizontal' === t.props.axis,
                  r = {
                    ArrowUp: 38,
                    ArrowRight: 39,
                    ArrowDown: 40,
                    ArrowLeft: 37
                  },
                  i = n ? r.ArrowRight : r.ArrowDown,
                  o = n ? r.ArrowLeft : r.ArrowUp
                i === e.keyCode
                  ? t.increment()
                  : o === e.keyCode && t.decrement()
              }
            }),
            g(w(t), 'updateSizes', function () {
              if (
                t.state.initialized &&
                t.itemsRef &&
                0 !== t.itemsRef.length
              ) {
                var e = 'horizontal' === t.props.axis,
                  n = t.itemsRef[0]
                if (n) {
                  var r = e ? n.clientWidth : n.clientHeight
                  t.setState({ itemSize: r }),
                    t.thumbsRef && t.thumbsRef.updateSizes()
                }
              }
            }),
            g(w(t), 'setMountState', function () {
              t.setState({ hasMount: !0 }), t.updateSizes()
            }),
            g(w(t), 'handleClickItem', function (e, n) {
              if (0 !== r.Children.count(t.props.children)) {
                if (t.state.cancelClick) {
                  t.setState({ cancelClick: !1 })
                  return
                }
                t.props.onClickItem(e, n),
                  e !== t.state.selectedItem && t.setState({ selectedItem: e })
              }
            }),
            g(w(t), 'handleOnChange', function (e, n) {
              !(1 >= r.Children.count(t.props.children)) &&
                t.props.onChange(e, n)
            }),
            g(w(t), 'handleClickThumb', function (e, n) {
              t.props.onClickThumb(e, n), t.moveTo(e)
            }),
            g(w(t), 'onSwipeStart', function (e) {
              t.setState({ swiping: !0 }), t.props.onSwipeStart(e)
            }),
            g(w(t), 'onSwipeEnd', function (e) {
              t.setState({
                swiping: !1,
                cancelClick: !1,
                swipeMovementStarted: !1
              }),
                t.props.onSwipeEnd(e),
                t.clearAutoPlay(),
                t.state.autoPlay && t.autoPlay()
            }),
            g(w(t), 'onSwipeMove', function (e, n) {
              t.props.onSwipeMove(n)
              var r = t.props.swipeAnimationHandler(
                e,
                t.props,
                t.state,
                t.setState.bind(w(t))
              )
              return t.setState(v({}, r)), !!Object.keys(r).length
            }),
            g(w(t), 'decrement', function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1
              t.moveTo(t.state.selectedItem - ('number' == typeof e ? e : 1))
            }),
            g(w(t), 'increment', function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1
              t.moveTo(t.state.selectedItem + ('number' == typeof e ? e : 1))
            }),
            g(w(t), 'moveTo', function (e) {
              if ('number' == typeof e) {
                var n = r.Children.count(t.props.children) - 1
                e < 0 && (e = t.props.infiniteLoop ? n : 0),
                  e > n && (e = t.props.infiniteLoop ? 0 : n),
                  t.selectItem({ selectedItem: e }),
                  t.state.autoPlay &&
                    !1 === t.state.isMouseEntered &&
                    t.resetAutoPlay()
              }
            }),
            g(w(t), 'onClickNext', function () {
              t.increment(1)
            }),
            g(w(t), 'onClickPrev', function () {
              t.decrement(1)
            }),
            g(w(t), 'onSwipeForward', function () {
              t.increment(1),
                t.props.emulateTouch && t.setState({ cancelClick: !0 })
            }),
            g(w(t), 'onSwipeBackwards', function () {
              t.decrement(1),
                t.props.emulateTouch && t.setState({ cancelClick: !0 })
            }),
            g(w(t), 'changeItem', function (e) {
              return function (n) {
                ;((0, u.isKeyboardEvent)(n) && 'Enter' !== n.key) || t.moveTo(e)
              }
            }),
            g(w(t), 'selectItem', function (e) {
              t.setState(
                v({ previousItem: t.state.selectedItem }, e),
                function () {
                  t.setState(t.animationHandler(t.props, t.state))
                }
              ),
                t.handleOnChange(
                  e.selectedItem,
                  r.Children.toArray(t.props.children)[e.selectedItem]
                )
            }),
            g(w(t), 'getInitialImage', function () {
              var e = t.props.selectedItem,
                n = t.itemsRef && t.itemsRef[e]
              return ((n && n.getElementsByTagName('img')) || [])[0]
            }),
            g(w(t), 'getVariableItemHeight', function (e) {
              var n = t.itemsRef && t.itemsRef[e]
              if (t.state.hasMount && n && n.children.length) {
                var r = n.children[0].getElementsByTagName('img') || []
                if (r.length > 0) {
                  var i = r[0]
                  if (!i.complete) {
                    var o = function e() {
                      t.forceUpdate(), i.removeEventListener('load', e)
                    }
                    i.addEventListener('load', o)
                  }
                }
                var s = (r[0] || n.children[0]).clientHeight
                return s > 0 ? s : null
              }
              return null
            })
          var t,
            n = {
              initialized: !1,
              previousItem: e.selectedItem,
              selectedItem: e.selectedItem,
              hasMount: !1,
              isMouseEntered: !1,
              autoPlay: e.autoPlay,
              swiping: !1,
              swipeMovementStarted: !1,
              cancelClick: !1,
              itemSize: 1,
              itemListStyle: {},
              slideStyle: {},
              selectedStyle: {},
              prevStyle: {}
            }
          return (
            (t.animationHandler =
              ('function' == typeof e.animationHandler && e.animationHandler) ||
              ('fade' === e.animationHandler && c.fadeAnimationHandler) ||
              c.slideAnimationHandler),
            (t.state = v(v({}, n), t.animationHandler(e, n))),
            t
          )
        }
        return (
          (f = [
            {
              key: 'componentDidMount',
              value: function () {
                this.props.children && this.setupCarousel()
              }
            },
            {
              key: 'componentDidUpdate',
              value: function (e, t) {
                e.children ||
                  !this.props.children ||
                  this.state.initialized ||
                  this.setupCarousel(),
                  !e.autoFocus && this.props.autoFocus && this.forceFocus(),
                  t.swiping &&
                    !this.state.swiping &&
                    this.setState(
                      v(
                        {},
                        this.props.stopSwipingHandler(this.props, this.state)
                      )
                    ),
                  (e.selectedItem !== this.props.selectedItem ||
                    e.centerMode !== this.props.centerMode) &&
                    (this.updateSizes(), this.moveTo(this.props.selectedItem)),
                  e.autoPlay !== this.props.autoPlay &&
                    (this.props.autoPlay
                      ? this.setupAutoPlay()
                      : this.destroyAutoPlay(),
                    this.setState({ autoPlay: this.props.autoPlay }))
              }
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.destroyCarousel()
              }
            },
            {
              key: 'setupCarousel',
              value: function () {
                var e = this
                this.bindEvents(),
                  this.state.autoPlay &&
                    r.Children.count(this.props.children) > 1 &&
                    this.setupAutoPlay(),
                  this.props.autoFocus && this.forceFocus(),
                  this.setState({ initialized: !0 }, function () {
                    var t = e.getInitialImage()
                    t && !t.complete
                      ? t.addEventListener('load', e.setMountState)
                      : e.setMountState()
                  })
              }
            },
            {
              key: 'destroyCarousel',
              value: function () {
                this.state.initialized &&
                  (this.unbindEvents(), this.destroyAutoPlay())
              }
            },
            {
              key: 'setupAutoPlay',
              value: function () {
                this.autoPlay()
                var e = this.carouselWrapperRef
                this.props.stopOnHover &&
                  e &&
                  (e.addEventListener('mouseenter', this.stopOnHover),
                  e.addEventListener('mouseleave', this.startOnLeave))
              }
            },
            {
              key: 'destroyAutoPlay',
              value: function () {
                this.clearAutoPlay()
                var e = this.carouselWrapperRef
                this.props.stopOnHover &&
                  e &&
                  (e.removeEventListener('mouseenter', this.stopOnHover),
                  e.removeEventListener('mouseleave', this.startOnLeave))
              }
            },
            {
              key: 'bindEvents',
              value: function () {
                ;(0, l.default)().addEventListener('resize', this.updateSizes),
                  (0, l.default)().addEventListener(
                    'DOMContentLoaded',
                    this.updateSizes
                  ),
                  this.props.useKeyboardArrows &&
                    (0, a.default)().addEventListener(
                      'keydown',
                      this.navigateWithKeyboard
                    )
              }
            },
            {
              key: 'unbindEvents',
              value: function () {
                ;(0, l.default)().removeEventListener(
                  'resize',
                  this.updateSizes
                ),
                  (0, l.default)().removeEventListener(
                    'DOMContentLoaded',
                    this.updateSizes
                  )
                var e = this.getInitialImage()
                e && e.removeEventListener('load', this.setMountState),
                  this.props.useKeyboardArrows &&
                    (0, a.default)().removeEventListener(
                      'keydown',
                      this.navigateWithKeyboard
                    )
              }
            },
            {
              key: 'forceFocus',
              value: function () {
                var e
                null === (e = this.carouselWrapperRef) ||
                  void 0 === e ||
                  e.focus()
              }
            },
            {
              key: 'renderItems',
              value: function (e) {
                var t = this
                return this.props.children
                  ? r.Children.map(this.props.children, function (n, i) {
                      var s = i === t.state.selectedItem,
                        a = i === t.state.previousItem,
                        l =
                          (s && t.state.selectedStyle) ||
                          (a && t.state.prevStyle) ||
                          t.state.slideStyle ||
                          {}
                      t.props.centerMode &&
                        'horizontal' === t.props.axis &&
                        (l = v(
                          v({}, l),
                          {},
                          { minWidth: t.props.centerSlidePercentage + '%' }
                        )),
                        t.state.swiping &&
                          t.state.swipeMovementStarted &&
                          (l = v(v({}, l), {}, { pointerEvents: 'none' }))
                      var u = {
                        ref: function (e) {
                          return t.setItemsRef(e, i)
                        },
                        key: 'itemKey' + i + (e ? 'clone' : ''),
                        className: o.default.ITEM(
                          !0,
                          i === t.state.selectedItem,
                          i === t.state.previousItem
                        ),
                        onClick: t.handleClickItem.bind(t, i, n),
                        style: l
                      }
                      return r.default.createElement(
                        'li',
                        u,
                        t.props.renderItem(n, {
                          isSelected: i === t.state.selectedItem,
                          isPrevious: i === t.state.previousItem
                        })
                      )
                    })
                  : []
              }
            },
            {
              key: 'renderControls',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.showIndicators,
                  i = t.labels,
                  o = t.renderIndicator,
                  s = t.children
                return n
                  ? r.default.createElement(
                      'ul',
                      { className: 'control-dots' },
                      r.Children.map(s, function (t, n) {
                        return (
                          o &&
                          o(
                            e.changeItem(n),
                            n === e.state.selectedItem,
                            n,
                            i.item
                          )
                        )
                      })
                    )
                  : null
              }
            },
            {
              key: 'renderStatus',
              value: function () {
                return this.props.showStatus
                  ? r.default.createElement(
                      'p',
                      { className: 'carousel-status' },
                      this.props.statusFormatter(
                        this.state.selectedItem + 1,
                        r.Children.count(this.props.children)
                      )
                    )
                  : null
              }
            },
            {
              key: 'renderThumbs',
              value: function () {
                return this.props.showThumbs &&
                  this.props.children &&
                  0 !== r.Children.count(this.props.children)
                  ? r.default.createElement(
                      s.default,
                      {
                        ref: this.setThumbsRef,
                        onSelectItem: this.handleClickThumb,
                        selectedItem: this.state.selectedItem,
                        transitionTime: this.props.transitionTime,
                        thumbWidth: this.props.thumbWidth,
                        labels: this.props.labels,
                        emulateTouch: this.props.emulateTouch
                      },
                      this.props.renderThumbs(this.props.children)
                    )
                  : null
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this
                if (
                  !this.props.children ||
                  0 === r.Children.count(this.props.children)
                )
                  return null
                var t =
                    this.props.swipeable &&
                    r.Children.count(this.props.children) > 1,
                  n = 'horizontal' === this.props.axis,
                  s =
                    this.props.showArrows &&
                    r.Children.count(this.props.children) > 1,
                  a =
                    (s &&
                      (this.state.selectedItem > 0 ||
                        this.props.infiniteLoop)) ||
                    !1,
                  l =
                    (s &&
                      (this.state.selectedItem <
                        r.Children.count(this.props.children) - 1 ||
                        this.props.infiniteLoop)) ||
                    !1,
                  u = this.renderItems(!0),
                  c = u.shift(),
                  p = u.pop(),
                  f = {
                    className: o.default.SLIDER(!0, this.state.swiping),
                    onSwipeMove: this.onSwipeMove,
                    onSwipeStart: this.onSwipeStart,
                    onSwipeEnd: this.onSwipeEnd,
                    style: this.state.itemListStyle,
                    tolerance: this.props.swipeScrollTolerance
                  },
                  d = {}
                if (n) {
                  if (
                    ((f.onSwipeLeft = this.onSwipeForward),
                    (f.onSwipeRight = this.onSwipeBackwards),
                    this.props.dynamicHeight)
                  ) {
                    var m = this.getVariableItemHeight(this.state.selectedItem)
                    d.height = m || 'auto'
                  }
                } else
                  (f.onSwipeUp =
                    'natural' === this.props.verticalSwipe
                      ? this.onSwipeBackwards
                      : this.onSwipeForward),
                    (f.onSwipeDown =
                      'natural' === this.props.verticalSwipe
                        ? this.onSwipeForward
                        : this.onSwipeBackwards),
                    (f.style = v(
                      v({}, f.style),
                      {},
                      { height: this.state.itemSize }
                    )),
                    (d.height = this.state.itemSize)
                return r.default.createElement(
                  'div',
                  {
                    'aria-label': this.props.ariaLabel,
                    className: o.default.ROOT(this.props.className),
                    ref: this.setCarouselWrapperRef,
                    tabIndex: this.props.useKeyboardArrows ? 0 : void 0
                  },
                  r.default.createElement(
                    'div',
                    {
                      className: o.default.CAROUSEL(!0),
                      style: { width: this.props.width }
                    },
                    this.renderControls(),
                    this.props.renderArrowPrev(
                      this.onClickPrev,
                      a,
                      this.props.labels.leftArrow
                    ),
                    r.default.createElement(
                      'div',
                      {
                        className: o.default.WRAPPER(!0, this.props.axis),
                        style: d
                      },
                      t
                        ? r.default.createElement(
                            i.default,
                            h({ tagName: 'ul', innerRef: this.setListRef }, f, {
                              allowMouseEvents: this.props.emulateTouch
                            }),
                            this.props.infiniteLoop && p,
                            this.renderItems(),
                            this.props.infiniteLoop && c
                          )
                        : r.default.createElement(
                            'ul',
                            {
                              className: o.default.SLIDER(
                                !0,
                                this.state.swiping
                              ),
                              ref: function (t) {
                                return e.setListRef(t)
                              },
                              style: this.state.itemListStyle || {}
                            },
                            this.props.infiniteLoop && p,
                            this.renderItems(),
                            this.props.infiniteLoop && c
                          )
                    ),
                    this.props.renderArrowNext(
                      this.onClickNext,
                      l,
                      this.props.labels.rightArrow
                    ),
                    this.renderStatus()
                  ),
                  this.renderThumbs()
                )
              }
            }
          ]),
          y(P.prototype, f),
          m && y(P, m),
          P
        )
      })(r.default.Component)
      ;(t.default = E),
        g(E, 'displayName', 'Carousel'),
        g(E, 'defaultProps', {
          ariaLabel: void 0,
          axis: 'horizontal',
          centerSlidePercentage: 80,
          interval: 3e3,
          labels: {
            leftArrow: 'previous slide / item',
            rightArrow: 'next slide / item',
            item: 'slide item'
          },
          onClickItem: u.noop,
          onClickThumb: u.noop,
          onChange: u.noop,
          onSwipeStart: function () {},
          onSwipeEnd: function () {},
          onSwipeMove: function () {
            return !1
          },
          preventMovementUntilSwipeScrollTolerance: !1,
          renderArrowPrev: function (e, t, n) {
            return r.default.createElement('button', {
              type: 'button',
              'aria-label': n,
              className: o.default.ARROW_PREV(!t),
              onClick: e
            })
          },
          renderArrowNext: function (e, t, n) {
            return r.default.createElement('button', {
              type: 'button',
              'aria-label': n,
              className: o.default.ARROW_NEXT(!t),
              onClick: e
            })
          },
          renderIndicator: function (e, t, n, i) {
            return r.default.createElement('li', {
              className: o.default.DOT(t),
              onClick: e,
              onKeyDown: e,
              value: n,
              key: n,
              role: 'button',
              tabIndex: 0,
              'aria-label': ''.concat(i, ' ').concat(n + 1)
            })
          },
          renderItem: function (e) {
            return e
          },
          renderThumbs: function (e) {
            var t = r.Children.map(e, function (e) {
              var t = e
              if (
                ('img' !== e.type &&
                  (t = r.Children.toArray(e.props.children).find(function (e) {
                    return 'img' === e.type
                  })),
                t)
              )
                return t
            })
            return 0 ===
              t.filter(function (e) {
                return e
              }).length
              ? (console.warn(
                  "No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"
                ),
                [])
              : t
          },
          statusFormatter: u.defaultStatusFormatter,
          selectedItem: 0,
          showArrows: !0,
          showIndicators: !0,
          showStatus: !0,
          showThumbs: !0,
          stopOnHover: !0,
          swipeScrollTolerance: 5,
          swipeable: !0,
          transitionTime: 350,
          verticalSwipe: 'standard',
          width: '100%',
          animationHandler: 'slide',
          swipeAnimationHandler: c.slideSwipeAnimationHandler,
          stopSwipingHandler: c.slideStopSwipingHandler
        })
    },
    4943: function () {},
    9513: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.setPosition =
          t.getPosition =
          t.isKeyboardEvent =
          t.defaultStatusFormatter =
          t.noop =
            void 0)
      var r,
        i = n(959),
        o = ((r = n(1674)), r && r.__esModule ? r : { default: r }),
        s = function () {}
      t.noop = s
      var a = function (e, t) {
        return ''.concat(e, ' of ').concat(t)
      }
      t.defaultStatusFormatter = a
      var l = function (e) {
        return !!e && e.hasOwnProperty('key')
      }
      t.isKeyboardEvent = l
      var u = function (e, t) {
        if ((t.infiniteLoop && ++e, 0 === e)) return 0
        var n = i.Children.count(t.children)
        if (t.centerMode && 'horizontal' === t.axis) {
          var r = -e * t.centerSlidePercentage,
            o = n - 1
          return (
            e && (e !== o || t.infiniteLoop)
              ? (r += (100 - t.centerSlidePercentage) / 2)
              : e === o && (r += 100 - t.centerSlidePercentage),
            r
          )
        }
        return -(100 * e)
      }
      t.getPosition = u
      var c = function (e, t) {
        var n = {}
        return (
          [
            'WebkitTransform',
            'MozTransform',
            'MsTransform',
            'OTransform',
            'transform',
            'msTransform'
          ].forEach(function (r) {
            n[r] = (0, o.default)(e, '%', t)
          }),
          n
        )
      }
      t.setPosition = c
    },
    956: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== p(e) && 'function' != typeof e))
            return { default: e }
          var t = c()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, i) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i])
            }
          return (n.default = e), t && t.set(e, n), n
        })(n(959)),
        i = u(n(1292)),
        o = n(3671),
        s = u(n(1674)),
        a = u(n(7325)),
        l = u(n(2528))
      function u(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c() {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (c = function () {
            return e
          }),
          e
        )
      }
      function p(e) {
        return (p =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function m(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function v(e) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function y(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      }
      var b = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw TypeError(
              'Super expression must either be null or a function'
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && h(e, t)
        })(S, e)
        var t,
          n,
          u,
          c,
          b,
          w =
            ((n = (function () {
              if (
                'undefined' == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1
              if ('function' == typeof Proxy) return !0
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                )
              } catch (e) {
                return !1
              }
            })()),
            function () {
              var e,
                t,
                r,
                i = v(S)
              if (n) {
                var o = v(this).constructor
                r = Reflect.construct(i, arguments, o)
              } else r = i.apply(this, arguments)
              return (
                (e = this),
                (t = r),
                t && ('object' === p(t) || 'function' == typeof t) ? t : m(e)
              )
            })
        function S(e) {
          var t
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError('Cannot call a class as a function')
            })(this, S),
            y(m((t = w.call(this, e))), 'itemsWrapperRef', void 0),
            y(m(t), 'itemsListRef', void 0),
            y(m(t), 'thumbsRef', void 0),
            y(m(t), 'setItemsWrapperRef', function (e) {
              t.itemsWrapperRef = e
            }),
            y(m(t), 'setItemsListRef', function (e) {
              t.itemsListRef = e
            }),
            y(m(t), 'setThumbsRef', function (e, n) {
              t.thumbsRef || (t.thumbsRef = []), (t.thumbsRef[n] = e)
            }),
            y(m(t), 'updateSizes', function () {
              if (t.props.children && t.itemsWrapperRef && t.thumbsRef) {
                var e = r.Children.count(t.props.children),
                  n = t.itemsWrapperRef.clientWidth,
                  i = t.props.thumbWidth
                    ? t.props.thumbWidth
                    : (0, o.outerWidth)(t.thumbsRef[0]),
                  s = Math.floor(n / i),
                  a = s < e,
                  l = a ? e - s : 0
                t.setState(function (e, n) {
                  return {
                    itemSize: i,
                    visibleItems: s,
                    firstItem: a ? t.getFirstItem(n.selectedItem) : 0,
                    lastPosition: l,
                    showArrows: a
                  }
                })
              }
            }),
            y(m(t), 'handleClickItem', function (e, n, r) {
              var i
              if (!r.hasOwnProperty('key') || 'Enter' === r.key) {
                var o = t.props.onSelectItem
                'function' == typeof o && o(e, n)
              }
            }),
            y(m(t), 'onSwipeStart', function () {
              t.setState({ swiping: !0 })
            }),
            y(m(t), 'onSwipeEnd', function () {
              t.setState({ swiping: !1 })
            }),
            y(m(t), 'onSwipeMove', function (e) {
              var n = e.x
              if (
                !t.state.itemSize ||
                !t.itemsWrapperRef ||
                !t.state.visibleItems
              )
                return !1
              var i,
                o = r.Children.count(t.props.children),
                a = -(100 * t.state.firstItem) / t.state.visibleItems
              0 === a && n > 0 && (n = 0),
                a ===
                  -(100 * Math.max(o - t.state.visibleItems, 0)) /
                    t.state.visibleItems &&
                  n < 0 &&
                  (n = 0)
              var l = a + 100 / (t.itemsWrapperRef.clientWidth / n)
              return (
                t.itemsListRef &&
                  [
                    'WebkitTransform',
                    'MozTransform',
                    'MsTransform',
                    'OTransform',
                    'transform',
                    'msTransform'
                  ].forEach(function (e) {
                    t.itemsListRef.style[e] = (0, s.default)(
                      l,
                      '%',
                      t.props.axis
                    )
                  }),
                !0
              )
            }),
            y(m(t), 'slideRight', function (e) {
              t.moveTo(t.state.firstItem - ('number' == typeof e ? e : 1))
            }),
            y(m(t), 'slideLeft', function (e) {
              t.moveTo(t.state.firstItem + ('number' == typeof e ? e : 1))
            }),
            y(m(t), 'moveTo', function (e) {
              ;(e =
                (e = e < 0 ? 0 : e) >= t.state.lastPosition
                  ? t.state.lastPosition
                  : e),
                t.setState({ firstItem: e })
            }),
            (t.state = {
              selectedItem: e.selectedItem,
              swiping: !1,
              showArrows: !1,
              firstItem: 0,
              visibleItems: 0,
              lastPosition: 0
            }),
            t
          )
        }
        return (
          (c = [
            {
              key: 'componentDidMount',
              value: function () {
                this.setupThumbs()
              }
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this.props.selectedItem !== this.state.selectedItem &&
                  this.setState({
                    selectedItem: this.props.selectedItem,
                    firstItem: this.getFirstItem(this.props.selectedItem)
                  }),
                  this.props.children !== e.children && this.updateSizes()
              }
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.destroyThumbs()
              }
            },
            {
              key: 'setupThumbs',
              value: function () {
                ;(0, l.default)().addEventListener('resize', this.updateSizes),
                  (0, l.default)().addEventListener(
                    'DOMContentLoaded',
                    this.updateSizes
                  ),
                  this.updateSizes()
              }
            },
            {
              key: 'destroyThumbs',
              value: function () {
                ;(0, l.default)().removeEventListener(
                  'resize',
                  this.updateSizes
                ),
                  (0, l.default)().removeEventListener(
                    'DOMContentLoaded',
                    this.updateSizes
                  )
              }
            },
            {
              key: 'getFirstItem',
              value: function (e) {
                var t = e
                return (
                  e >= this.state.lastPosition && (t = this.state.lastPosition),
                  e < this.state.firstItem + this.state.visibleItems &&
                    (t = this.state.firstItem),
                  e < this.state.firstItem && (t = e),
                  t
                )
              }
            },
            {
              key: 'renderItems',
              value: function () {
                var e = this
                return this.props.children.map(function (t, n) {
                  var o = i.default.ITEM(!1, n === e.state.selectedItem),
                    s = {
                      key: n,
                      ref: function (t) {
                        return e.setThumbsRef(t, n)
                      },
                      className: o,
                      onClick: e.handleClickItem.bind(
                        e,
                        n,
                        e.props.children[n]
                      ),
                      onKeyDown: e.handleClickItem.bind(
                        e,
                        n,
                        e.props.children[n]
                      ),
                      'aria-label': ''
                        .concat(e.props.labels.item, ' ')
                        .concat(n + 1),
                      style: { width: e.props.thumbWidth }
                    }
                  return r.default.createElement(
                    'li',
                    f({}, s, { role: 'button', tabIndex: 0 }),
                    t
                  )
                })
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this
                if (!this.props.children) return null
                var t = r.Children.count(this.props.children) > 1,
                  n = this.state.showArrows && this.state.firstItem > 0,
                  o =
                    this.state.showArrows &&
                    this.state.firstItem < this.state.lastPosition,
                  l = {},
                  u = -this.state.firstItem * (this.state.itemSize || 0),
                  c = (0, s.default)(u, 'px', this.props.axis),
                  p = this.props.transitionTime + 'ms'
                return (
                  (l = {
                    WebkitTransform: c,
                    MozTransform: c,
                    MsTransform: c,
                    OTransform: c,
                    transform: c,
                    msTransform: c,
                    WebkitTransitionDuration: p,
                    MozTransitionDuration: p,
                    MsTransitionDuration: p,
                    OTransitionDuration: p,
                    transitionDuration: p,
                    msTransitionDuration: p
                  }),
                  r.default.createElement(
                    'div',
                    { className: i.default.CAROUSEL(!1) },
                    r.default.createElement(
                      'div',
                      {
                        className: i.default.WRAPPER(!1),
                        ref: this.setItemsWrapperRef
                      },
                      r.default.createElement('button', {
                        type: 'button',
                        className: i.default.ARROW_PREV(!n),
                        onClick: function () {
                          return e.slideRight()
                        },
                        'aria-label': this.props.labels.leftArrow
                      }),
                      t
                        ? r.default.createElement(
                            a.default,
                            {
                              tagName: 'ul',
                              className: i.default.SLIDER(
                                !1,
                                this.state.swiping
                              ),
                              onSwipeLeft: this.slideLeft,
                              onSwipeRight: this.slideRight,
                              onSwipeMove: this.onSwipeMove,
                              onSwipeStart: this.onSwipeStart,
                              onSwipeEnd: this.onSwipeEnd,
                              style: l,
                              innerRef: this.setItemsListRef,
                              allowMouseEvents: this.props.emulateTouch
                            },
                            this.renderItems()
                          )
                        : r.default.createElement(
                            'ul',
                            {
                              className: i.default.SLIDER(
                                !1,
                                this.state.swiping
                              ),
                              ref: function (t) {
                                return e.setItemsListRef(t)
                              },
                              style: l
                            },
                            this.renderItems()
                          ),
                      r.default.createElement('button', {
                        type: 'button',
                        className: i.default.ARROW_NEXT(!o),
                        onClick: function () {
                          return e.slideLeft()
                        },
                        'aria-label': this.props.labels.rightArrow
                      })
                    )
                  )
                )
              }
            }
          ]),
          d(S.prototype, c),
          b && d(S, b),
          S
        )
      })(r.Component)
      ;(t.default = b),
        y(b, 'displayName', 'Thumbs'),
        y(b, 'defaultProps', {
          axis: 'horizontal',
          labels: {
            leftArrow: 'previous slide / item',
            rightArrow: 'next slide / item',
            item: 'slide item'
          },
          selectedItem: 0,
          thumbWidth: 80,
          transitionTime: 350
        })
    },
    1292: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r,
        i = ((r = n(4875)), r && r.__esModule ? r : { default: r })
      t.default = {
        ROOT: function (e) {
          var t, n, r
          return (0, i.default)(
            ((t = { 'carousel-root': !0 }),
            (n = e || ''),
            (r = !!e),
            n in t
              ? Object.defineProperty(t, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (t[n] = r),
            t)
          )
        },
        CAROUSEL: function (e) {
          return (0, i.default)({ carousel: !0, 'carousel-slider': e })
        },
        WRAPPER: function (e, t) {
          return (0, i.default)({
            'thumbs-wrapper': !e,
            'slider-wrapper': e,
            'axis-horizontal': 'horizontal' === t,
            'axis-vertical': 'horizontal' !== t
          })
        },
        SLIDER: function (e, t) {
          return (0, i.default)({ thumbs: !e, slider: e, animated: !t })
        },
        ITEM: function (e, t, n) {
          return (0, i.default)({
            thumb: !e,
            slide: e,
            selected: t,
            previous: n
          })
        },
        ARROW_PREV: function (e) {
          return (0, i.default)({
            'control-arrow control-prev': !0,
            'control-disabled': e
          })
        },
        ARROW_NEXT: function (e) {
          return (0, i.default)({
            'control-arrow control-next': !0,
            'control-disabled': e
          })
        },
        DOT: function (e) {
          return (0, i.default)({ dot: !0, selected: e })
        }
      }
    },
    3671: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.outerWidth = void 0)
      var n = function (e) {
        var t = e.offsetWidth,
          n = getComputedStyle(e)
        return t + (parseInt(n.marginLeft) + parseInt(n.marginRight))
      }
      t.outerWidth = n
    },
    6050: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, 'lr', {
        enumerable: !0,
        get: function () {
          return r.default
        }
      })
      var r = i(n(858))
      function i(e) {
        return e && e.__esModule ? e : { default: e }
      }
      n(4943), i(n(956))
    },
    7903: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var n = function () {
        return document
      }
      t.default = n
    },
    2528: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var n = function () {
        return window
      }
      t.default = n
    },
    4: function (e, t, n) {
      'use strict'
      n.d(t, {
        V: function () {
          return ec
        }
      })
      var r,
        i = n(959),
        o = n(1044),
        s = n(1322),
        a = n(2293),
        l = n(1832),
        u = n(801),
        c = n(7970),
        p = n(1282),
        f = n(7719),
        d = n(3429),
        h = n(5742),
        m = n(5729),
        v = n(2048),
        y = n(9522),
        b = n(6945),
        w = n(8170),
        S = n(2683),
        g = n(6585),
        E =
          (((r = E || {})[(r.None = 1)] = 'None'),
          (r[(r.InitialFocus = 2)] = 'InitialFocus'),
          (r[(r.TabLock = 4)] = 'TabLock'),
          (r[(r.FocusLock = 8)] = 'FocusLock'),
          (r[(r.RestoreFocus = 16)] = 'RestoreFocus'),
          (r[(r.All = 30)] = 'All'),
          r)
      let P = Object.assign(
        (0, s.yV)(function (e, t) {
          let n = (0, i.useRef)(null),
            r = (0, a.T)(n, t),
            { initialFocus: l, containers: u, features: c = 30, ...E } = e
          ;(0, p.H)() || (c = 1)
          let P = (0, y.i)(n)
          !(function ({ ownerDocument: e }, t) {
            let n = (0, i.useRef)(null)
            ;(0, b.O)(
              null == e ? void 0 : e.defaultView,
              'focusout',
              (e) => {
                !t || n.current || (n.current = e.target)
              },
              !0
            ),
              (0, S.q)(() => {
                t ||
                  ((null == e ? void 0 : e.activeElement) ===
                    (null == e ? void 0 : e.body) && (0, d.C5)(n.current),
                  (n.current = null))
              }, [t])
            let r = (0, i.useRef)(!1)
            ;(0, i.useEffect)(
              () => (
                (r.current = !1),
                () => {
                  ;(r.current = !0),
                    (0, w.Y)(() => {
                      r.current && ((0, d.C5)(n.current), (n.current = null))
                    })
                }
              ),
              []
            )
          })({ ownerDocument: P }, Boolean(16 & c))
          let T = (function (
            { ownerDocument: e, container: t, initialFocus: n },
            r
          ) {
            let o = (0, i.useRef)(null),
              s = (0, v.t)()
            return (
              (0, S.q)(() => {
                if (!r) return
                let i = t.current
                i &&
                  (0, w.Y)(() => {
                    if (!s.current) return
                    let t = null == e ? void 0 : e.activeElement
                    if (null != n && n.current) {
                      if ((null == n ? void 0 : n.current) === t) {
                        o.current = t
                        return
                      }
                    } else if (i.contains(t)) {
                      o.current = t
                      return
                    }
                    null != n && n.current
                      ? (0, d.C5)(n.current)
                      : (0, d.jA)(i, d.TO.First) === d.fE.Error &&
                        console.warn(
                          'There are no focusable elements inside the <FocusTrap />'
                        ),
                      (o.current = null == e ? void 0 : e.activeElement)
                  })
              }, [r]),
              o
            )
          })(
            { ownerDocument: P, container: n, initialFocus: l },
            Boolean(2 & c)
          )
          !(function (
            {
              ownerDocument: e,
              container: t,
              containers: n,
              previousActiveElement: r
            },
            i
          ) {
            let o = (0, v.t)()
            ;(0, b.O)(
              null == e ? void 0 : e.defaultView,
              'focus',
              (e) => {
                if (!i || !o.current) return
                let s = new Set(null == n ? void 0 : n.current)
                s.add(t)
                let a = r.current
                if (!a) return
                let l = e.target
                l && l instanceof HTMLElement
                  ? O(s, l)
                    ? ((r.current = l), (0, d.C5)(l))
                    : (e.preventDefault(), e.stopPropagation(), (0, d.C5)(a))
                  : (0, d.C5)(r.current)
              },
              !0
            )
          })(
            {
              ownerDocument: P,
              container: n,
              containers: u,
              previousActiveElement: T
            },
            Boolean(8 & c)
          )
          let R = (0, m.l)(),
            M = (0, h.z)((e) => {
              let t = n.current
              t &&
                (0, o.E)(R.current, {
                  [m.N.Forwards]() {
                    ;(0, d.jA)(t, d.TO.First, {
                      skipElements: [e.relatedTarget]
                    })
                  },
                  [m.N.Backwards]() {
                    ;(0, d.jA)(t, d.TO.Last, {
                      skipElements: [e.relatedTarget]
                    })
                  }
                })
            }),
            I = (0, g.G)(),
            k = (0, i.useRef)(!1)
          return i.createElement(
            i.Fragment,
            null,
            Boolean(4 & c) &&
              i.createElement(f._, {
                as: 'button',
                type: 'button',
                'data-headlessui-focus-guard': !0,
                onFocus: M,
                features: f.A.Focusable
              }),
            (0, s.sY)({
              ourProps: {
                ref: r,
                onKeyDown(e) {
                  'Tab' == e.key &&
                    ((k.current = !0),
                    I.requestAnimationFrame(() => {
                      k.current = !1
                    }))
                },
                onBlur(e) {
                  let t = new Set(null == u ? void 0 : u.current)
                  t.add(n)
                  let r = e.relatedTarget
                  r instanceof HTMLElement &&
                    'true' !== r.dataset.headlessuiFocusGuard &&
                    (O(t, r) ||
                      (k.current
                        ? (0, d.jA)(
                            n.current,
                            (0, o.E)(R.current, {
                              [m.N.Forwards]: () => d.TO.Next,
                              [m.N.Backwards]: () => d.TO.Previous
                            }) | d.TO.WrapAround,
                            { relativeTo: e.target }
                          )
                        : e.target instanceof HTMLElement &&
                          (0, d.C5)(e.target)))
                }
              },
              theirProps: E,
              defaultTag: 'div',
              name: 'FocusTrap'
            }),
            Boolean(4 & c) &&
              i.createElement(f._, {
                as: 'button',
                type: 'button',
                'data-headlessui-focus-guard': !0,
                onFocus: M,
                features: f.A.Focusable
              })
          )
        }),
        { features: E }
      )
      function O(e, t) {
        var n
        for (let r of e) if (null != (n = r.current) && n.contains(t)) return !0
        return !1
      }
      var T = n(3599),
        R = n(1676)
      let M = new Set(),
        I = new Map()
      function k(e) {
        e.setAttribute('aria-hidden', 'true'), (e.inert = !0)
      }
      function C(e) {
        let t = I.get(e)
        t &&
          (null === t['aria-hidden']
            ? e.removeAttribute('aria-hidden')
            : e.setAttribute('aria-hidden', t['aria-hidden']),
          (e.inert = t.inert))
      }
      var _ = n(422)
      let L = (0, i.createContext)(!1)
      function D(e) {
        return i.createElement(L.Provider, { value: e.force }, e.children)
      }
      var A = n(4240)
      let j = i.Fragment,
        x = (0, s.yV)(function (e, t) {
          let n = (0, i.useRef)(null),
            r = (0, a.T)(
              (0, a.h)((e) => {
                n.current = e
              }),
              t
            ),
            o = (0, y.i)(n),
            l = (function (e) {
              let t = (0, i.useContext)(L),
                n = (0, i.useContext)(z),
                r = (0, y.i)(e),
                [o, s] = (0, i.useState)(() => {
                  if ((!t && null !== n) || A.O.isServer) return null
                  let e =
                    null == r
                      ? void 0
                      : r.getElementById('headlessui-portal-root')
                  if (e) return e
                  if (null === r) return null
                  let i = r.createElement('div')
                  return (
                    i.setAttribute('id', 'headlessui-portal-root'),
                    r.body.appendChild(i)
                  )
                })
              return (
                (0, i.useEffect)(() => {
                  null !== o &&
                    ((null != r && r.body.contains(o)) ||
                      null == r ||
                      r.body.appendChild(o))
                }, [o, r]),
                (0, i.useEffect)(() => {
                  t || (null !== n && s(n.current))
                }, [n, s, t]),
                o
              )
            })(n),
            [u] = (0, i.useState)(() => {
              var e
              return A.O.isServer
                ? null
                : null != (e = null == o ? void 0 : o.createElement('div'))
                ? e
                : null
            }),
            c = (0, p.H)(),
            f = (0, i.useRef)(!1)
          return (
            (0, R.e)(() => {
              if (((f.current = !1), !(!l || !u)))
                return (
                  l.contains(u) ||
                    (u.setAttribute('data-headlessui-portal', ''),
                    l.appendChild(u)),
                  () => {
                    ;(f.current = !0),
                      (0, w.Y)(() => {
                        var e
                        f.current &&
                          l &&
                          u &&
                          (u instanceof Node &&
                            l.contains(u) &&
                            l.removeChild(u),
                          l.childNodes.length <= 0 &&
                            (null == (e = l.parentElement) || e.removeChild(l)))
                      })
                  }
                )
            }, [l, u]),
            c && l && u
              ? (0, _.createPortal)(
                  (0, s.sY)({
                    ourProps: { ref: r },
                    theirProps: e,
                    defaultTag: j,
                    name: 'Portal'
                  }),
                  u
                )
              : null
          )
        }),
        W = i.Fragment,
        z = (0, i.createContext)(null),
        N = (0, s.yV)(function (e, t) {
          let { target: n, ...r } = e,
            o = { ref: (0, a.T)(t) }
          return i.createElement(
            z.Provider,
            { value: n },
            (0, s.sY)({
              ourProps: o,
              theirProps: r,
              defaultTag: W,
              name: 'Popover.Group'
            })
          )
        }),
        F = Object.assign(x, { Group: N }),
        H = (0, i.createContext)(null),
        U = (0, s.yV)(function (e, t) {
          let n = (0, c.M)(),
            { id: r = `headlessui-description-${n}`, ...o } = e,
            l = (function e() {
              let t = (0, i.useContext)(H)
              if (null === t) {
                let n = Error(
                  'You used a <Description /> component, but it is not inside a relevant parent.'
                )
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(n, e), n)
                )
              }
              return t
            })(),
            u = (0, a.T)(t)
          ;(0, R.e)(() => l.register(r), [r, l.register])
          let p = { ref: u, ...l.props, id: r }
          return (0,
          s.sY)({ ourProps: p, theirProps: o, slot: l.slot || {}, defaultTag: 'p', name: l.name || 'Description' })
        })
      var Y = n(1127)
      let V = (0, i.createContext)(() => {})
      V.displayName = 'StackContext'
      var B =
        ((($ = B || {})[($.Add = 0)] = 'Add'),
        ($[($.Remove = 1)] = 'Remove'),
        $)
      function K({
        children: e,
        onUpdate: t,
        type: n,
        element: r,
        enabled: o
      }) {
        let s = (0, i.useContext)(V),
          a = (0, h.z)((...e) => {
            null == t || t(...e), s(...e)
          })
        return (
          (0, R.e)(() => {
            let e = void 0 === o || !0 === o
            return (
              e && a(0, n, r),
              () => {
                e && a(1, n, r)
              }
            )
          }, [a, n, r, o]),
          i.createElement(V.Provider, { value: a }, e)
        )
      }
      var $,
        q,
        X,
        G = n(2925),
        Z = n(5921),
        J =
          (((q = J || {})[(q.Open = 0)] = 'Open'),
          (q[(q.Closed = 1)] = 'Closed'),
          q),
        Q = (((X = Q || {})[(X.SetTitleId = 0)] = 'SetTitleId'), X)
      let ee = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id })
        },
        et = (0, i.createContext)(null)
      function en(e) {
        let t = (0, i.useContext)(et)
        if (null === t) {
          let n = Error(`<${e} /> is missing a parent <Dialog /> component.`)
          throw (Error.captureStackTrace && Error.captureStackTrace(n, en), n)
        }
        return t
      }
      function er(e, t) {
        return (0, o.E)(t.type, ee, e, t)
      }
      et.displayName = 'DialogContext'
      let ei = s.AN.RenderStrategy | s.AN.Static,
        eo = (0, s.yV)(function (e, t) {
          let n = (0, c.M)(),
            {
              id: r = `headlessui-dialog-${n}`,
              open: u,
              onClose: d,
              initialFocus: m,
              __demoMode: v = !1,
              ...w
            } = e,
            [S, g] = (0, i.useState)(0),
            E = (0, Y.oJ)()
          void 0 === u &&
            null !== E &&
            (u = (0, o.E)(E, { [Y.ZM.Open]: !0, [Y.ZM.Closed]: !1 }))
          let O = (0, i.useRef)(new Set()),
            _ = (0, i.useRef)(null),
            L = (0, a.T)(_, t),
            A = (0, i.useRef)(null),
            j = (0, y.i)(_),
            x = e.hasOwnProperty('open') || null !== E,
            W = e.hasOwnProperty('onClose')
          if (!x && !W)
            throw Error(
              'You have to provide an `open` and an `onClose` prop to the `Dialog` component.'
            )
          if (!x)
            throw Error(
              'You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.'
            )
          if (!W)
            throw Error(
              'You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.'
            )
          if ('boolean' != typeof u)
            throw Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u}`
            )
          if ('function' != typeof d)
            throw Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${d}`
            )
          let z = u ? 0 : 1,
            [N, U] = (0, i.useReducer)(er, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, i.createRef)()
            }),
            V = (0, h.z)(() => d(!1)),
            $ = (0, h.z)((e) => U({ type: 0, id: e })),
            q = !!(0, p.H)() && !v && 0 === z,
            X = S > 1,
            J = null !== (0, i.useContext)(et)
          !(function (e, t = !0) {
            ;(0, R.e)(() => {
              if (!t || !e.current) return
              let n = e.current,
                r = (0, T.r)(n)
              if (r) {
                for (let i of (M.add(n), I.keys()))
                  i.contains(n) && (C(i), I.delete(i))
                return (
                  r.querySelectorAll('body > *').forEach((e) => {
                    if (e instanceof HTMLElement) {
                      for (let t of M) if (e.contains(t)) return
                      1 === M.size &&
                        (I.set(e, {
                          'aria-hidden': e.getAttribute('aria-hidden'),
                          inert: e.inert
                        }),
                        k(e))
                    }
                  }),
                  () => {
                    if ((M.delete(n), M.size > 0))
                      r.querySelectorAll('body > *').forEach((e) => {
                        if (e instanceof HTMLElement && !I.has(e)) {
                          for (let t of M) if (e.contains(t)) return
                          I.set(e, {
                            'aria-hidden': e.getAttribute('aria-hidden'),
                            inert: e.inert
                          }),
                            k(e)
                        }
                      })
                    else for (let e of I.keys()) C(e), I.delete(e)
                  }
                )
              }
            }, [t])
          })(_, !!X && q)
          let Q = (0, h.z)(() => {
            var e, t
            return [
              ...Array.from(
                null !=
                  (e =
                    null == j
                      ? void 0
                      : j.querySelectorAll(
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
                    e.contains(A.current) ||
                    (N.panelRef.current && e.contains(N.panelRef.current))
                  )
              ),
              null != (t = N.panelRef.current) ? t : _.current
            ]
          })
          ;(0, G.O)(() => Q(), V, q && !X),
            (0, b.O)(null == j ? void 0 : j.defaultView, 'keydown', (e) => {
              e.defaultPrevented ||
                (e.key === l.R.Escape &&
                  0 === z &&
                  (X || (e.preventDefault(), e.stopPropagation(), V())))
            }),
            (function (e, t, n = () => [document.body]) {
              ;(0, i.useEffect)(() => {
                var r
                if (!t || !e) return
                let i = (0, Z.k)(),
                  o = window.pageYOffset
                function s(e, t, n) {
                  let r = e.style.getPropertyValue(t)
                  return (
                    Object.assign(e.style, { [t]: n }),
                    i.add(() => {
                      Object.assign(e.style, { [t]: r })
                    })
                  )
                }
                let a = e.documentElement,
                  l =
                    (null != (r = e.defaultView) ? r : window).innerWidth -
                    a.clientWidth
                if ((s(a, 'overflow', 'hidden'), l > 0)) {
                  let u = a.clientWidth - a.offsetWidth
                  s(a, 'paddingRight', `${l - u}px`)
                }
                if (
                  /iPhone/gi.test(window.navigator.platform) ||
                  (/Mac/gi.test(window.navigator.platform) &&
                    window.navigator.maxTouchPoints > 0)
                ) {
                  s(e.body, 'marginTop', `-${o}px`), window.scrollTo(0, 0)
                  let c = null
                  i.addEventListener(
                    e,
                    'click',
                    (t) => {
                      if (t.target instanceof HTMLElement)
                        try {
                          let r = t.target.closest('a')
                          if (!r) return
                          let { hash: i } = new URL(r.href),
                            o = e.querySelector(i)
                          o && !n().some((e) => e.contains(o)) && (c = o)
                        } catch {}
                    },
                    !0
                  ),
                    i.addEventListener(
                      e,
                      'touchmove',
                      (e) => {
                        e.target instanceof HTMLElement &&
                          !n().some((t) => t.contains(e.target)) &&
                          e.preventDefault()
                      },
                      { passive: !1 }
                    ),
                    i.add(() => {
                      window.scrollTo(0, window.pageYOffset + o),
                        c &&
                          c.isConnected &&
                          (c.scrollIntoView({ block: 'nearest' }), (c = null))
                    })
                }
                return i.dispose
              }, [e, t])
            })(j, 0 === z && !J, Q),
            (0, i.useEffect)(() => {
              if (0 !== z || !_.current) return
              let e = new IntersectionObserver((e) => {
                for (let t of e)
                  0 === t.boundingClientRect.x &&
                    0 === t.boundingClientRect.y &&
                    0 === t.boundingClientRect.width &&
                    0 === t.boundingClientRect.height &&
                    V()
              })
              return e.observe(_.current), () => e.disconnect()
            }, [z, _, V])
          let [ee, en] = (function () {
              let [e, t] = (0, i.useState)([])
              return [
                e.length > 0 ? e.join(' ') : void 0,
                (0, i.useMemo)(
                  () =>
                    function (e) {
                      let n = (0, h.z)(
                          (e) => (
                            t((t) => [...t, e]),
                            () =>
                              t((t) => {
                                let n = t.slice(),
                                  r = n.indexOf(e)
                                return -1 !== r && n.splice(r, 1), n
                              })
                          )
                        ),
                        r = (0, i.useMemo)(
                          () => ({
                            register: n,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                          }),
                          [n, e.slot, e.name, e.props]
                        )
                      return i.createElement(
                        H.Provider,
                        { value: r },
                        e.children
                      )
                    },
                  [t]
                )
              ]
            })(),
            eo = (0, i.useMemo)(
              () => [{ dialogState: z, close: V, setTitleId: $ }, N],
              [z, N, V, $]
            ),
            es = (0, i.useMemo)(() => ({ open: 0 === z }), [z]),
            ea = {
              ref: L,
              id: r,
              role: 'dialog',
              'aria-modal': 0 === z || void 0,
              'aria-labelledby': N.titleId,
              'aria-describedby': ee
            }
          return i.createElement(
            K,
            {
              type: 'Dialog',
              enabled: 0 === z,
              element: _,
              onUpdate: (0, h.z)((e, t, n) => {
                'Dialog' === t &&
                  (0, o.E)(e, {
                    [B.Add]() {
                      O.current.add(n), g((e) => e + 1)
                    },
                    [B.Remove]() {
                      O.current.add(n), g((e) => e - 1)
                    }
                  })
              })
            },
            i.createElement(
              D,
              { force: !0 },
              i.createElement(
                F,
                null,
                i.createElement(
                  et.Provider,
                  { value: eo },
                  i.createElement(
                    F.Group,
                    { target: _ },
                    i.createElement(
                      D,
                      { force: !1 },
                      i.createElement(
                        en,
                        { slot: es, name: 'Dialog.Description' },
                        i.createElement(
                          P,
                          {
                            initialFocus: m,
                            containers: O,
                            features: q
                              ? (0, o.E)(X ? 'parent' : 'leaf', {
                                  parent: P.features.RestoreFocus,
                                  leaf: P.features.All & ~P.features.FocusLock
                                })
                              : P.features.None
                          },
                          (0, s.sY)({
                            ourProps: ea,
                            theirProps: w,
                            slot: es,
                            defaultTag: 'div',
                            features: ei,
                            visible: 0 === z,
                            name: 'Dialog'
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            i.createElement(f._, { features: f.A.Hidden, ref: A })
          )
        }),
        es = (0, s.yV)(function (e, t) {
          let n = (0, c.M)(),
            { id: r = `headlessui-dialog-overlay-${n}`, ...o } = e,
            [{ dialogState: l, close: p }] = en('Dialog.Overlay'),
            f = (0, a.T)(t),
            d = (0, h.z)((e) => {
              if (e.target === e.currentTarget) {
                if ((0, u.P)(e.currentTarget)) return e.preventDefault()
                e.preventDefault(), e.stopPropagation(), p()
              }
            }),
            m = (0, i.useMemo)(() => ({ open: 0 === l }), [l])
          return (0,
          s.sY)({ ourProps: { ref: f, id: r, 'aria-hidden': !0, onClick: d }, theirProps: o, slot: m, defaultTag: 'div', name: 'Dialog.Overlay' })
        }),
        ea = (0, s.yV)(function (e, t) {
          let n = (0, c.M)(),
            { id: r = `headlessui-dialog-backdrop-${n}`, ...o } = e,
            [{ dialogState: l }, u] = en('Dialog.Backdrop'),
            p = (0, a.T)(t)
          ;(0, i.useEffect)(() => {
            if (null === u.panelRef.current)
              throw Error(
                'A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.'
              )
          }, [u.panelRef])
          let f = (0, i.useMemo)(() => ({ open: 0 === l }), [l])
          return i.createElement(
            D,
            { force: !0 },
            i.createElement(
              F,
              null,
              (0, s.sY)({
                ourProps: { ref: p, id: r, 'aria-hidden': !0 },
                theirProps: o,
                slot: f,
                defaultTag: 'div',
                name: 'Dialog.Backdrop'
              })
            )
          )
        }),
        el = (0, s.yV)(function (e, t) {
          let n = (0, c.M)(),
            { id: r = `headlessui-dialog-panel-${n}`, ...o } = e,
            [{ dialogState: l }, u] = en('Dialog.Panel'),
            p = (0, a.T)(t, u.panelRef),
            f = (0, i.useMemo)(() => ({ open: 0 === l }), [l]),
            d = (0, h.z)((e) => {
              e.stopPropagation()
            })
          return (0,
          s.sY)({ ourProps: { ref: p, id: r, onClick: d }, theirProps: o, slot: f, defaultTag: 'div', name: 'Dialog.Panel' })
        }),
        eu = (0, s.yV)(function (e, t) {
          let n = (0, c.M)(),
            { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
            [{ dialogState: l, setTitleId: u }] = en('Dialog.Title'),
            p = (0, a.T)(t)
          ;(0, i.useEffect)(() => (u(r), () => u(null)), [r, u])
          let f = (0, i.useMemo)(() => ({ open: 0 === l }), [l])
          return (0,
          s.sY)({ ourProps: { ref: p, id: r }, theirProps: o, slot: f, defaultTag: 'h2', name: 'Dialog.Title' })
        }),
        ec = Object.assign(eo, {
          Backdrop: ea,
          Panel: el,
          Overlay: es,
          Title: eu,
          Description: U
        })
    },
    2683: function (e, t, n) {
      'use strict'
      n.d(t, {
        q: function () {
          return o
        }
      })
      var r = n(959),
        i = n(5742)
      function o(e, t) {
        let n = (0, r.useRef)([]),
          o = (0, i.z)(e)
        ;(0, r.useEffect)(() => {
          let e = [...n.current]
          for (let [r, i] of t.entries())
            if (n.current[r] !== i) {
              let s = o(t, e)
              return (n.current = t), s
            }
        }, [o, ...t])
      }
    }
  }
])
