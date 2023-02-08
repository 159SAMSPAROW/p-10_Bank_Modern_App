;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l)
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(l) {
    const i = {}
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
      l.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(l) {
    if (l.ep) return
    l.ep = !0
    const i = n(l)
    fetch(l.href, i)
  }
})()
function cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var jr = {},
  fc = {
    get exports() {
      return jr
    },
    set exports(e) {
      jr = e
    },
  },
  il = {},
  bt = {},
  dc = {
    get exports() {
      return bt
    },
    set exports(e) {
      bt = e
    },
  },
  M = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jn = Symbol.for('react.element'),
  pc = Symbol.for('react.portal'),
  mc = Symbol.for('react.fragment'),
  hc = Symbol.for('react.strict_mode'),
  vc = Symbol.for('react.profiler'),
  yc = Symbol.for('react.provider'),
  gc = Symbol.for('react.context'),
  wc = Symbol.for('react.forward_ref'),
  xc = Symbol.for('react.suspense'),
  kc = Symbol.for('react.memo'),
  Sc = Symbol.for('react.lazy'),
  Vo = Symbol.iterator
function Ec(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Vo && e[Vo]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var bu = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  es = Object.assign,
  ts = {}
function sn(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = ts),
    (this.updater = n || bu)
}
sn.prototype.isReactComponent = {}
sn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function ns() {}
ns.prototype = sn.prototype
function Qi(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = ts),
    (this.updater = n || bu)
}
var Ki = (Qi.prototype = new ns())
Ki.constructor = Qi
es(Ki, sn.prototype)
Ki.isPureReactComponent = !0
var Wo = Array.isArray,
  rs = Object.prototype.hasOwnProperty,
  Yi = { current: null },
  ls = { key: !0, ref: !0, __self: !0, __source: !0 }
function is(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      rs.call(t, r) && !ls.hasOwnProperty(r) && (l[r] = t[r])
  var u = arguments.length - 2
  if (u === 1) l.children = n
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2]
    l.children = s
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r])
  return { $$typeof: Jn, type: e, key: i, ref: o, props: l, _owner: Yi.current }
}
function Nc(e, t) {
  return {
    $$typeof: Jn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Xi(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Jn
}
function Cc(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Ho = /\/+/g
function Nl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Cc('' + e.key)
    : t.toString(36)
}
function Sr(e, t, n, r, l) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var o = !1
  if (e === null) o = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Jn:
          case pc:
            o = !0
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + Nl(o, 0) : r),
      Wo(l)
        ? ((n = ''),
          e != null && (n = e.replace(Ho, '$&/') + '/'),
          Sr(l, t, n, '', function (c) {
            return c
          }))
        : l != null &&
          (Xi(l) &&
            (l = Nc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Ho, '$&/') + '/') +
                e,
            )),
          t.push(l)),
      1
    )
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Wo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u]
      var s = r + Nl(i, u)
      o += Sr(i, t, n, s, l)
    }
  else if (((s = Ec(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Nl(i, u++)), (o += Sr(i, t, n, s, l))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return o
}
function lr(e, t, n) {
  if (e == null) return e
  var r = [],
    l = 0
  return (
    Sr(e, r, '', '', function (i) {
      return t.call(n, i, l++)
    }),
    r
  )
}
function _c(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var ae = { current: null },
  Er = { transition: null },
  Pc = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: Yi,
  }
M.Children = {
  map: lr,
  forEach: function (e, t, n) {
    lr(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      lr(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      lr(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Xi(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
M.Component = sn
M.Fragment = mc
M.Profiler = vc
M.PureComponent = Qi
M.StrictMode = hc
M.Suspense = xc
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pc
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = es({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Yi.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps
    for (s in t)
      rs.call(t, s) &&
        !ls.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    u = Array(s)
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2]
    r.children = u
  }
  return { $$typeof: Jn, type: e.type, key: l, ref: i, props: r, _owner: o }
}
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: gc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yc, _context: e }),
    (e.Consumer = e)
  )
}
M.createElement = is
M.createFactory = function (e) {
  var t = is.bind(null, e)
  return (t.type = e), t
}
M.createRef = function () {
  return { current: null }
}
M.forwardRef = function (e) {
  return { $$typeof: wc, render: e }
}
M.isValidElement = Xi
M.lazy = function (e) {
  return { $$typeof: Sc, _payload: { _status: -1, _result: e }, _init: _c }
}
M.memo = function (e, t) {
  return { $$typeof: kc, type: e, compare: t === void 0 ? null : t }
}
M.startTransition = function (e) {
  var t = Er.transition
  Er.transition = {}
  try {
    e()
  } finally {
    Er.transition = t
  }
}
M.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
M.useCallback = function (e, t) {
  return ae.current.useCallback(e, t)
}
M.useContext = function (e) {
  return ae.current.useContext(e)
}
M.useDebugValue = function () {}
M.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e)
}
M.useEffect = function (e, t) {
  return ae.current.useEffect(e, t)
}
M.useId = function () {
  return ae.current.useId()
}
M.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n)
}
M.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t)
}
M.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t)
}
M.useMemo = function (e, t) {
  return ae.current.useMemo(e, t)
}
M.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n)
}
M.useRef = function (e) {
  return ae.current.useRef(e)
}
M.useState = function (e) {
  return ae.current.useState(e)
}
M.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n)
}
M.useTransition = function () {
  return ae.current.useTransition()
}
M.version = '18.2.0'
;(function (e) {
  e.exports = M
})(dc)
const zc = cc(bt)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc = bt,
  Lc = Symbol.for('react.element'),
  Rc = Symbol.for('react.fragment'),
  Mc = Object.prototype.hasOwnProperty,
  Oc = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jc = { key: !0, ref: !0, __self: !0, __source: !0 }
function os(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref)
  for (r in t) Mc.call(t, r) && !jc.hasOwnProperty(r) && (l[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r])
  return { $$typeof: Lc, type: e, key: i, ref: o, props: l, _owner: Oc.current }
}
il.Fragment = Rc
il.jsx = os
il.jsxs = os
;(function (e) {
  e.exports = il
})(fc)
const v = jr.jsx,
  L = jr.jsxs
var Zl = {},
  Jl = {},
  Ic = {
    get exports() {
      return Jl
    },
    set exports(e) {
      Jl = e
    },
  },
  xe = {},
  ql = {},
  Dc = {
    get exports() {
      return ql
    },
    set exports(e) {
      ql = e
    },
  },
  us = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(N, T) {
    var R = N.length
    N.push(T)
    e: for (; 0 < R; ) {
      var K = (R - 1) >>> 1,
        J = N[K]
      if (0 < l(J, T)) (N[K] = T), (N[R] = J), (R = K)
      else break e
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0]
  }
  function r(N) {
    if (N.length === 0) return null
    var T = N[0],
      R = N.pop()
    if (R !== T) {
      N[0] = R
      e: for (var K = 0, J = N.length, nr = J >>> 1; K < nr; ) {
        var gt = 2 * (K + 1) - 1,
          El = N[gt],
          wt = gt + 1,
          rr = N[wt]
        if (0 > l(El, R))
          wt < J && 0 > l(rr, El)
            ? ((N[K] = rr), (N[wt] = R), (K = wt))
            : ((N[K] = El), (N[gt] = R), (K = gt))
        else if (wt < J && 0 > l(rr, R)) (N[K] = rr), (N[wt] = R), (K = wt)
        else break e
      }
    }
    return T
  }
  function l(N, T) {
    var R = N.sortIndex - T.sortIndex
    return R !== 0 ? R : N.id - T.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var o = Date,
      u = o.now()
    e.unstable_now = function () {
      return o.now() - u
    }
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    w = !1,
    x = !1,
    k = !1,
    U = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function d(N) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c)
      else if (T.startTime <= N) r(c), (T.sortIndex = T.expirationTime), t(s, T)
      else break
      T = n(c)
    }
  }
  function y(N) {
    if (((k = !1), d(N), !x))
      if (n(s) !== null) (x = !0), kl(E)
      else {
        var T = n(c)
        T !== null && Sl(y, T.startTime - N)
      }
  }
  function E(N, T) {
    ;(x = !1), k && ((k = !1), f(P), (P = -1)), (w = !0)
    var R = p
    try {
      for (
        d(T), m = n(s);
        m !== null && (!(m.expirationTime > T) || (N && !ze()));

      ) {
        var K = m.callback
        if (typeof K == 'function') {
          ;(m.callback = null), (p = m.priorityLevel)
          var J = K(m.expirationTime <= T)
          ;(T = e.unstable_now()),
            typeof J == 'function' ? (m.callback = J) : m === n(s) && r(s),
            d(T)
        } else r(s)
        m = n(s)
      }
      if (m !== null) var nr = !0
      else {
        var gt = n(c)
        gt !== null && Sl(y, gt.startTime - T), (nr = !1)
      }
      return nr
    } finally {
      ;(m = null), (p = R), (w = !1)
    }
  }
  var C = !1,
    _ = null,
    P = -1,
    Q = 5,
    O = -1
  function ze() {
    return !(e.unstable_now() - O < Q)
  }
  function fn() {
    if (_ !== null) {
      var N = e.unstable_now()
      O = N
      var T = !0
      try {
        T = _(!0, N)
      } finally {
        T ? dn() : ((C = !1), (_ = null))
      }
    } else C = !1
  }
  var dn
  if (typeof a == 'function')
    dn = function () {
      a(fn)
    }
  else if (typeof MessageChannel < 'u') {
    var Bo = new MessageChannel(),
      ac = Bo.port2
    ;(Bo.port1.onmessage = fn),
      (dn = function () {
        ac.postMessage(null)
      })
  } else
    dn = function () {
      U(fn, 0)
    }
  function kl(N) {
    ;(_ = N), C || ((C = !0), dn())
  }
  function Sl(N, T) {
    P = U(function () {
      N(e.unstable_now())
    }, T)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), kl(E))
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (Q = 0 < N ? Math.floor(1e3 / N) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var T = 3
          break
        default:
          T = p
      }
      var R = p
      p = T
      try {
        return N()
      } finally {
        p = R
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, T) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          N = 3
      }
      var R = p
      p = N
      try {
        return T()
      } finally {
        p = R
      }
    }),
    (e.unstable_scheduleCallback = function (N, T, R) {
      var K = e.unstable_now()
      switch (
        (typeof R == 'object' && R !== null
          ? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? K + R : K))
          : (R = K),
        N)
      ) {
        case 1:
          var J = -1
          break
        case 2:
          J = 250
          break
        case 5:
          J = 1073741823
          break
        case 4:
          J = 1e4
          break
        default:
          J = 5e3
      }
      return (
        (J = R + J),
        (N = {
          id: h++,
          callback: T,
          priorityLevel: N,
          startTime: R,
          expirationTime: J,
          sortIndex: -1,
        }),
        R > K
          ? ((N.sortIndex = R),
            t(c, N),
            n(s) === null &&
              N === n(c) &&
              (k ? (f(P), (P = -1)) : (k = !0), Sl(y, R - K)))
          : ((N.sortIndex = J), t(s, N), x || w || ((x = !0), kl(E))),
        N
      )
    }),
    (e.unstable_shouldYield = ze),
    (e.unstable_wrapCallback = function (N) {
      var T = p
      return function () {
        var R = p
        p = T
        try {
          return N.apply(this, arguments)
        } finally {
          p = R
        }
      }
    })
})(us)
;(function (e) {
  e.exports = us
})(Dc)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ss = bt,
  we = ql
function g(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var as = new Set(),
  jn = {}
function Mt(e, t) {
  en(e, t), en(e + 'Capture', t)
}
function en(e, t) {
  for (jn[e] = t, e = 0; e < t.length; e++) as.add(t[e])
}
var Ye = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  bl = Object.prototype.hasOwnProperty,
  Fc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qo = {},
  Ko = {}
function $c(e) {
  return bl.call(Ko, e)
    ? !0
    : bl.call(Qo, e)
    ? !1
    : Fc.test(e)
    ? (Ko[e] = !0)
    : ((Qo[e] = !0), !1)
}
function Uc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Ac(e, t, n, r) {
  if (t === null || typeof t > 'u' || Uc(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ce(e, t, n, r, l, i, o) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o)
}
var ne = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Gi = /[\-:]([a-z])/g
function Zi(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Gi, Zi)
    ne[t] = new ce(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Gi, Zi)
    ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Gi, Zi)
  ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ne.xlinkHref = new ce(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Ji(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null
  ;(l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Ac(t, n, l, r) && (n = null),
    r || l === null
      ? $c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Je = ss.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ir = Symbol.for('react.element'),
  It = Symbol.for('react.portal'),
  Dt = Symbol.for('react.fragment'),
  qi = Symbol.for('react.strict_mode'),
  ei = Symbol.for('react.profiler'),
  cs = Symbol.for('react.provider'),
  fs = Symbol.for('react.context'),
  bi = Symbol.for('react.forward_ref'),
  ti = Symbol.for('react.suspense'),
  ni = Symbol.for('react.suspense_list'),
  eo = Symbol.for('react.memo'),
  be = Symbol.for('react.lazy'),
  ds = Symbol.for('react.offscreen'),
  Yo = Symbol.iterator
function pn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Yo && e[Yo]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var W = Object.assign,
  Cl
function kn(e) {
  if (Cl === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Cl = (t && t[1]) || ''
    }
  return (
    `
` +
    Cl +
    e
  )
}
var _l = !1
function Pl(e, t) {
  if (!e || _l) return ''
  _l = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (c) {
          var r = c
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (c) {
          r = c
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (c) {
        r = c
      }
      e()
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                )
              }
            while (1 <= o && 0 <= u)
          break
        }
    }
  } finally {
    ;(_l = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? kn(e) : ''
}
function Bc(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type)
    case 16:
      return kn('Lazy')
    case 13:
      return kn('Suspense')
    case 19:
      return kn('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Pl(e.type, !1)), e
    case 11:
      return (e = Pl(e.type.render, !1)), e
    case 1:
      return (e = Pl(e.type, !0)), e
    default:
      return ''
  }
}
function ri(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Dt:
      return 'Fragment'
    case It:
      return 'Portal'
    case ei:
      return 'Profiler'
    case qi:
      return 'StrictMode'
    case ti:
      return 'Suspense'
    case ni:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case fs:
        return (e.displayName || 'Context') + '.Consumer'
      case cs:
        return (e._context.displayName || 'Context') + '.Provider'
      case bi:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case eo:
        return (
          (t = e.displayName || null), t !== null ? t : ri(e.type) || 'Memo'
        )
      case be:
        ;(t = e._payload), (e = e._init)
        try {
          return ri(e(t))
        } catch {}
    }
  return null
}
function Vc(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return ri(t)
    case 8:
      return t === qi ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function pt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function ps(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function Wc(e) {
  var t = ps(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this)
        },
        set: function (o) {
          ;(r = '' + o), i.call(this, o)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (o) {
          r = '' + o
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = Wc(e))
}
function ms(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = ps(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Ir(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function li(e, t) {
  var n = t.checked
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Xo(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function hs(e, t) {
  ;(t = t.checked), t != null && Ji(e, 'checked', t, !1)
}
function ii(e, t) {
  hs(e, t)
  var n = pt(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? oi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && oi(e, t.type, pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Go(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function oi(e, t, n) {
  ;(t !== 'number' || Ir(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Sn = Array.isArray
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
        return
      }
      t !== null || e[l].disabled || (t = e[l])
    }
    t !== null && (t.selected = !0)
  }
}
function ui(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91))
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Zo(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92))
      if (Sn(n)) {
        if (1 < n.length) throw Error(g(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: pt(n) }
}
function vs(e, t) {
  var n = pt(t.value),
    r = pt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Jo(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function ys(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function si(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ys(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var ur,
  gs = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ur = ur || document.createElement('div'),
          ur.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function In(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Cn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Hc = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Cn).forEach(function (e) {
  Hc.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cn[t] = Cn[e])
  })
})
function ws(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Cn.hasOwnProperty(e) && Cn[e])
    ? ('' + t).trim()
    : t + 'px'
}
function xs(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = ws(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l)
    }
}
var Qc = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function ai(e, t) {
  if (t) {
    if (Qc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(g(62))
  }
}
function ci(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var fi = null
function to(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var di = null,
  Xt = null,
  Gt = null
function qo(e) {
  if ((e = er(e))) {
    if (typeof di != 'function') throw Error(g(280))
    var t = e.stateNode
    t && ((t = cl(t)), di(e.stateNode, e.type, t))
  }
}
function ks(e) {
  Xt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Xt = e)
}
function Ss() {
  if (Xt) {
    var e = Xt,
      t = Gt
    if (((Gt = Xt = null), qo(e), t)) for (e = 0; e < t.length; e++) qo(t[e])
  }
}
function Es(e, t) {
  return e(t)
}
function Ns() {}
var zl = !1
function Cs(e, t, n) {
  if (zl) return e(t, n)
  zl = !0
  try {
    return Es(e, t, n)
  } finally {
    ;(zl = !1), (Xt !== null || Gt !== null) && (Ns(), Ss())
  }
}
function Dn(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = cl(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(g(231, t, typeof n))
  return n
}
var pi = !1
if (Ye)
  try {
    var mn = {}
    Object.defineProperty(mn, 'passive', {
      get: function () {
        pi = !0
      },
    }),
      window.addEventListener('test', mn, mn),
      window.removeEventListener('test', mn, mn)
  } catch {
    pi = !1
  }
function Kc(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, c)
  } catch (h) {
    this.onError(h)
  }
}
var _n = !1,
  Dr = null,
  Fr = !1,
  mi = null,
  Yc = {
    onError: function (e) {
      ;(_n = !0), (Dr = e)
    },
  }
function Xc(e, t, n, r, l, i, o, u, s) {
  ;(_n = !1), (Dr = null), Kc.apply(Yc, arguments)
}
function Gc(e, t, n, r, l, i, o, u, s) {
  if ((Xc.apply(this, arguments), _n)) {
    if (_n) {
      var c = Dr
      ;(_n = !1), (Dr = null)
    } else throw Error(g(198))
    Fr || ((Fr = !0), (mi = c))
  }
}
function Ot(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function _s(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function bo(e) {
  if (Ot(e) !== e) throw Error(g(188))
}
function Zc(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Ot(e)), t === null)) throw Error(g(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var l = n.return
    if (l === null) break
    var i = l.alternate
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return bo(l), e
        if (i === r) return bo(l), t
        i = i.sibling
      }
      throw Error(g(188))
    }
    if (n.return !== r.return) (n = l), (r = i)
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          ;(o = !0), (n = l), (r = i)
          break
        }
        if (u === r) {
          ;(o = !0), (r = l), (n = i)
          break
        }
        u = u.sibling
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            ;(o = !0), (n = i), (r = l)
            break
          }
          if (u === r) {
            ;(o = !0), (r = i), (n = l)
            break
          }
          u = u.sibling
        }
        if (!o) throw Error(g(189))
      }
    }
    if (n.alternate !== r) throw Error(g(190))
  }
  if (n.tag !== 3) throw Error(g(188))
  return n.stateNode.current === n ? e : t
}
function Ps(e) {
  return (e = Zc(e)), e !== null ? zs(e) : null
}
function zs(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = zs(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Ts = we.unstable_scheduleCallback,
  eu = we.unstable_cancelCallback,
  Jc = we.unstable_shouldYield,
  qc = we.unstable_requestPaint,
  Y = we.unstable_now,
  bc = we.unstable_getCurrentPriorityLevel,
  no = we.unstable_ImmediatePriority,
  Ls = we.unstable_UserBlockingPriority,
  $r = we.unstable_NormalPriority,
  ef = we.unstable_LowPriority,
  Rs = we.unstable_IdlePriority,
  ol = null,
  Ue = null
function tf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == 'function')
    try {
      Ue.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : lf,
  nf = Math.log,
  rf = Math.LN2
function lf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((nf(e) / rf) | 0)) | 0
}
var sr = 64,
  ar = 4194304
function En(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Ur(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455
  if (o !== 0) {
    var u = o & ~l
    u !== 0 ? (r = En(u)) : ((i &= o), i !== 0 && (r = En(i)))
  } else (o = n & ~l), o !== 0 ? (r = En(o)) : i !== 0 && (r = En(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l)
  return r
}
function of(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function uf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o]
    s === -1
      ? (!(u & n) || u & r) && (l[o] = of(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u)
  }
}
function hi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Ms() {
  var e = sr
  return (sr <<= 1), !(sr & 4194240) && (sr = 64), e
}
function Tl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function qn(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n)
}
function sf(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l
    ;(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i)
  }
}
function ro(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r
    ;(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l)
  }
}
var I = 0
function Os(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var js,
  lo,
  Is,
  Ds,
  Fs,
  vi = !1,
  cr = [],
  it = null,
  ot = null,
  ut = null,
  Fn = new Map(),
  $n = new Map(),
  tt = [],
  af = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
    ' ',
  )
function tu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      it = null
      break
    case 'dragenter':
    case 'dragleave':
      ot = null
      break
    case 'mouseover':
    case 'mouseout':
      ut = null
      break
    case 'pointerover':
    case 'pointerout':
      Fn.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      $n.delete(t.pointerId)
  }
}
function hn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = er(t)), t !== null && lo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e)
}
function cf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (it = hn(it, e, t, n, r, l)), !0
    case 'dragenter':
      return (ot = hn(ot, e, t, n, r, l)), !0
    case 'mouseover':
      return (ut = hn(ut, e, t, n, r, l)), !0
    case 'pointerover':
      var i = l.pointerId
      return Fn.set(i, hn(Fn.get(i) || null, e, t, n, r, l)), !0
    case 'gotpointercapture':
      return (
        (i = l.pointerId), $n.set(i, hn($n.get(i) || null, e, t, n, r, l)), !0
      )
  }
  return !1
}
function $s(e) {
  var t = St(e.target)
  if (t !== null) {
    var n = Ot(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _s(n)), t !== null)) {
          ;(e.blockedOn = t),
            Fs(e.priority, function () {
              Is(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Nr(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(fi = r), n.target.dispatchEvent(r), (fi = null)
    } else return (t = er(n)), t !== null && lo(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function nu(e, t, n) {
  Nr(e) && n.delete(t)
}
function ff() {
  ;(vi = !1),
    it !== null && Nr(it) && (it = null),
    ot !== null && Nr(ot) && (ot = null),
    ut !== null && Nr(ut) && (ut = null),
    Fn.forEach(nu),
    $n.forEach(nu)
}
function vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vi ||
      ((vi = !0), we.unstable_scheduleCallback(we.unstable_NormalPriority, ff)))
}
function Un(e) {
  function t(l) {
    return vn(l, e)
  }
  if (0 < cr.length) {
    vn(cr[0], e)
    for (var n = 1; n < cr.length; n++) {
      var r = cr[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    it !== null && vn(it, e),
      ot !== null && vn(ot, e),
      ut !== null && vn(ut, e),
      Fn.forEach(t),
      $n.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    $s(n), n.blockedOn === null && tt.shift()
}
var Zt = Je.ReactCurrentBatchConfig,
  Ar = !0
function df(e, t, n, r) {
  var l = I,
    i = Zt.transition
  Zt.transition = null
  try {
    ;(I = 1), io(e, t, n, r)
  } finally {
    ;(I = l), (Zt.transition = i)
  }
}
function pf(e, t, n, r) {
  var l = I,
    i = Zt.transition
  Zt.transition = null
  try {
    ;(I = 4), io(e, t, n, r)
  } finally {
    ;(I = l), (Zt.transition = i)
  }
}
function io(e, t, n, r) {
  if (Ar) {
    var l = yi(e, t, n, r)
    if (l === null) Ul(e, t, r, Br, n), tu(e, r)
    else if (cf(l, e, t, n, r)) r.stopPropagation()
    else if ((tu(e, r), t & 4 && -1 < af.indexOf(e))) {
      for (; l !== null; ) {
        var i = er(l)
        if (
          (i !== null && js(i),
          (i = yi(e, t, n, r)),
          i === null && Ul(e, t, r, Br, n),
          i === l)
        )
          break
        l = i
      }
      l !== null && r.stopPropagation()
    } else Ul(e, t, r, null, n)
  }
}
var Br = null
function yi(e, t, n, r) {
  if (((Br = null), (e = to(r)), (e = St(e)), e !== null))
    if (((t = Ot(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = _s(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Br = e), null
}
function Us(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (bc()) {
        case no:
          return 1
        case Ls:
          return 4
        case $r:
        case ef:
          return 16
        case Rs:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var rt = null,
  oo = null,
  Cr = null
function As() {
  if (Cr) return Cr
  var e,
    t = oo,
    n = t.length,
    r,
    l = 'value' in rt ? rt.value : rt.textContent,
    i = l.length
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Cr = l.slice(e, 1 < r ? 1 - r : void 0))
}
function _r(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function fr() {
  return !0
}
function ru() {
  return !1
}
function ke(e) {
  function t(n, r, l, i, o) {
    ;(this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null)
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? fr
        : ru),
      (this.isPropagationStopped = ru),
      this
    )
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = fr))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = fr))
      },
      persist: function () {},
      isPersistent: fr,
    }),
    t
  )
}
var an = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uo = ke(an),
  bn = W({}, an, { view: 0, detail: 0 }),
  mf = ke(bn),
  Ll,
  Rl,
  yn,
  ul = W({}, bn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: so,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== yn &&
            (yn && e.type === 'mousemove'
              ? ((Ll = e.screenX - yn.screenX), (Rl = e.screenY - yn.screenY))
              : (Rl = Ll = 0),
            (yn = e)),
          Ll)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Rl
    },
  }),
  lu = ke(ul),
  hf = W({}, ul, { dataTransfer: 0 }),
  vf = ke(hf),
  yf = W({}, bn, { relatedTarget: 0 }),
  Ml = ke(yf),
  gf = W({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wf = ke(gf),
  xf = W({}, an, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  kf = ke(xf),
  Sf = W({}, an, { data: 0 }),
  iu = ke(Sf),
  Ef = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Nf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Cf = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function _f(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Cf[e]) ? !!t[e] : !1
}
function so() {
  return _f
}
var Pf = W({}, bn, {
    key: function (e) {
      if (e.key) {
        var t = Ef[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = _r(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Nf[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: so,
    charCode: function (e) {
      return e.type === 'keypress' ? _r(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? _r(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  zf = ke(Pf),
  Tf = W({}, ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ou = ke(Tf),
  Lf = W({}, bn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: so,
  }),
  Rf = ke(Lf),
  Mf = W({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Of = ke(Mf),
  jf = W({}, ul, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  If = ke(jf),
  Df = [9, 13, 27, 32],
  ao = Ye && 'CompositionEvent' in window,
  Pn = null
Ye && 'documentMode' in document && (Pn = document.documentMode)
var Ff = Ye && 'TextEvent' in window && !Pn,
  Bs = Ye && (!ao || (Pn && 8 < Pn && 11 >= Pn)),
  uu = String.fromCharCode(32),
  su = !1
function Vs(e, t) {
  switch (e) {
    case 'keyup':
      return Df.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Ws(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Ft = !1
function $f(e, t) {
  switch (e) {
    case 'compositionend':
      return Ws(t)
    case 'keypress':
      return t.which !== 32 ? null : ((su = !0), uu)
    case 'textInput':
      return (e = t.data), e === uu && su ? null : e
    default:
      return null
  }
}
function Uf(e, t) {
  if (Ft)
    return e === 'compositionend' || (!ao && Vs(e, t))
      ? ((e = As()), (Cr = oo = rt = null), (Ft = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Bs && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Af = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Af[e.type] : t === 'textarea'
}
function Hs(e, t, n, r) {
  ks(r),
    (t = Vr(t, 'onChange')),
    0 < t.length &&
      ((n = new uo('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var zn = null,
  An = null
function Bf(e) {
  ta(e, 0)
}
function sl(e) {
  var t = At(e)
  if (ms(t)) return e
}
function Vf(e, t) {
  if (e === 'change') return t
}
var Qs = !1
if (Ye) {
  var Ol
  if (Ye) {
    var jl = 'oninput' in document
    if (!jl) {
      var cu = document.createElement('div')
      cu.setAttribute('oninput', 'return;'),
        (jl = typeof cu.oninput == 'function')
    }
    Ol = jl
  } else Ol = !1
  Qs = Ol && (!document.documentMode || 9 < document.documentMode)
}
function fu() {
  zn && (zn.detachEvent('onpropertychange', Ks), (An = zn = null))
}
function Ks(e) {
  if (e.propertyName === 'value' && sl(An)) {
    var t = []
    Hs(t, An, e, to(e)), Cs(Bf, t)
  }
}
function Wf(e, t, n) {
  e === 'focusin'
    ? (fu(), (zn = t), (An = n), zn.attachEvent('onpropertychange', Ks))
    : e === 'focusout' && fu()
}
function Hf(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return sl(An)
}
function Qf(e, t) {
  if (e === 'click') return sl(t)
}
function Kf(e, t) {
  if (e === 'input' || e === 'change') return sl(t)
}
function Yf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Ie = typeof Object.is == 'function' ? Object.is : Yf
function Bn(e, t) {
  if (Ie(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var l = n[r]
    if (!bl.call(t, l) || !Ie(e[l], t[l])) return !1
  }
  return !0
}
function du(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function pu(e, t) {
  var n = du(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = du(n)
  }
}
function Ys(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ys(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Xs() {
  for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ir(e.document)
  }
  return t
}
function co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Xf(e) {
  var t = Xs(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ys(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && co(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var l = n.textContent.length,
          i = Math.min(r.start, l)
        ;(r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = pu(n, i))
        var o = pu(n, r)
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Gf = Ye && 'documentMode' in document && 11 >= document.documentMode,
  $t = null,
  gi = null,
  Tn = null,
  wi = !1
function mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  wi ||
    $t == null ||
    $t !== Ir(r) ||
    ((r = $t),
    'selectionStart' in r && co(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Tn && Bn(Tn, r)) ||
      ((Tn = r),
      (r = Vr(gi, 'onSelect')),
      0 < r.length &&
        ((t = new uo('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $t))))
}
function dr(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Ut = {
    animationend: dr('Animation', 'AnimationEnd'),
    animationiteration: dr('Animation', 'AnimationIteration'),
    animationstart: dr('Animation', 'AnimationStart'),
    transitionend: dr('Transition', 'TransitionEnd'),
  },
  Il = {},
  Gs = {}
Ye &&
  ((Gs = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ut.animationend.animation,
    delete Ut.animationiteration.animation,
    delete Ut.animationstart.animation),
  'TransitionEvent' in window || delete Ut.transitionend.transition)
function al(e) {
  if (Il[e]) return Il[e]
  if (!Ut[e]) return e
  var t = Ut[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Gs) return (Il[e] = t[n])
  return e
}
var Zs = al('animationend'),
  Js = al('animationiteration'),
  qs = al('animationstart'),
  bs = al('transitionend'),
  ea = new Map(),
  hu = 'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
    ' ',
  )
function ht(e, t) {
  ea.set(e, t), Mt(t, [e])
}
for (var Dl = 0; Dl < hu.length; Dl++) {
  var Fl = hu[Dl],
    Zf = Fl.toLowerCase(),
    Jf = Fl[0].toUpperCase() + Fl.slice(1)
  ht(Zf, 'on' + Jf)
}
ht(Zs, 'onAnimationEnd')
ht(Js, 'onAnimationIteration')
ht(qs, 'onAnimationStart')
ht('dblclick', 'onDoubleClick')
ht('focusin', 'onFocus')
ht('focusout', 'onBlur')
ht(bs, 'onTransitionEnd')
en('onMouseEnter', ['mouseout', 'mouseover'])
en('onMouseLeave', ['mouseout', 'mouseover'])
en('onPointerEnter', ['pointerout', 'pointerover'])
en('onPointerLeave', ['pointerout', 'pointerover'])
Mt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
Mt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
Mt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Mt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
Mt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
Mt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var Nn = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
    ' ',
  ),
  qf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Nn))
function vu(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Gc(r, t, void 0, e), (e.currentTarget = null)
}
function ta(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e
          vu(l, u, c), (i = s)
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e
          vu(l, u, c), (i = s)
        }
    }
  }
  if (Fr) throw ((e = mi), (Fr = !1), (mi = null), e)
}
function F(e, t) {
  var n = t[Ni]
  n === void 0 && (n = t[Ni] = new Set())
  var r = e + '__bubble'
  n.has(r) || (na(t, e, 2, !1), n.add(r))
}
function $l(e, t, n) {
  var r = 0
  t && (r |= 4), na(n, e, r, t)
}
var pr = '_reactListening' + Math.random().toString(36).slice(2)
function Vn(e) {
  if (!e[pr]) {
    ;(e[pr] = !0),
      as.forEach(function (n) {
        n !== 'selectionchange' && (qf.has(n) || $l(n, !1, e), $l(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[pr] || ((t[pr] = !0), $l('selectionchange', !1, t))
  }
}
function na(e, t, n, r) {
  switch (Us(t)) {
    case 1:
      var l = df
      break
    case 4:
      l = pf
      break
    default:
      l = io
  }
  ;(n = l.bind(null, t, n, e)),
    (l = void 0),
    !pi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1)
}
function Ul(e, t, n, r, l) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var o = r.tag
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return
            o = o.return
          }
        for (; u !== null; ) {
          if (((o = St(u)), o === null)) return
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
  Cs(function () {
    var c = i,
      h = to(n),
      m = []
    e: {
      var p = ea.get(e)
      if (p !== void 0) {
        var w = uo,
          x = e
        switch (e) {
          case 'keypress':
            if (_r(n) === 0) break e
          case 'keydown':
          case 'keyup':
            w = zf
            break
          case 'focusin':
            ;(x = 'focus'), (w = Ml)
            break
          case 'focusout':
            ;(x = 'blur'), (w = Ml)
            break
          case 'beforeblur':
          case 'afterblur':
            w = Ml
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = lu
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = vf
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = Rf
            break
          case Zs:
          case Js:
          case qs:
            w = wf
            break
          case bs:
            w = Of
            break
          case 'scroll':
            w = mf
            break
          case 'wheel':
            w = If
            break
          case 'copy':
          case 'cut':
          case 'paste':
            w = kf
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = ou
        }
        var k = (t & 4) !== 0,
          U = !k && e === 'scroll',
          f = k ? (p !== null ? p + 'Capture' : null) : p
        k = []
        for (var a = c, d; a !== null; ) {
          d = a
          var y = d.stateNode
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = Dn(a, f)), y != null && k.push(Wn(a, y, d)))),
            U)
          )
            break
          a = a.return
        }
        0 < k.length &&
          ((p = new w(p, x, null, n, h)), m.push({ event: p, listeners: k }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== fi &&
            (x = n.relatedTarget || n.fromElement) &&
            (St(x) || x[Xe]))
        )
          break e
        if (
          (w || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? St(x) : null),
              x !== null &&
                ((U = Ot(x)), x !== U || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((k = lu),
            (y = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = ou),
              (y = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (a = 'pointer')),
            (U = w == null ? p : At(w)),
            (d = x == null ? p : At(x)),
            (p = new k(y, a + 'leave', w, n, h)),
            (p.target = U),
            (p.relatedTarget = d),
            (y = null),
            St(h) === c &&
              ((k = new k(f, a + 'enter', x, n, h)),
              (k.target = d),
              (k.relatedTarget = U),
              (y = k)),
            (U = y),
            w && x)
          )
            t: {
              for (k = w, f = x, a = 0, d = k; d; d = jt(d)) a++
              for (d = 0, y = f; y; y = jt(y)) d++
              for (; 0 < a - d; ) (k = jt(k)), a--
              for (; 0 < d - a; ) (f = jt(f)), d--
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t
                ;(k = jt(k)), (f = jt(f))
              }
              k = null
            }
          else k = null
          w !== null && yu(m, p, w, k, !1),
            x !== null && U !== null && yu(m, U, x, k, !0)
        }
      }
      e: {
        if (
          ((p = c ? At(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && p.type === 'file'))
        )
          var E = Vf
        else if (au(p))
          if (Qs) E = Kf
          else {
            E = Hf
            var C = Wf
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (E = Qf)
        if (E && (E = E(e, c))) {
          Hs(m, E, n, h)
          break e
        }
        C && C(e, p, c),
          e === 'focusout' &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === 'number' &&
            oi(p, 'number', p.value)
      }
      switch (((C = c ? At(c) : window), e)) {
        case 'focusin':
          ;(au(C) || C.contentEditable === 'true') &&
            (($t = C), (gi = c), (Tn = null))
          break
        case 'focusout':
          Tn = gi = $t = null
          break
        case 'mousedown':
          wi = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(wi = !1), mu(m, n, h)
          break
        case 'selectionchange':
          if (Gf) break
        case 'keydown':
        case 'keyup':
          mu(m, n, h)
      }
      var _
      if (ao)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart'
              break e
            case 'compositionend':
              P = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              P = 'onCompositionUpdate'
              break e
          }
          P = void 0
        }
      else
        Ft
          ? Vs(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart')
      P &&
        (Bs &&
          n.locale !== 'ko' &&
          (Ft || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && Ft && (_ = As())
            : ((rt = h),
              (oo = 'value' in rt ? rt.value : rt.textContent),
              (Ft = !0))),
        (C = Vr(c, P)),
        0 < C.length &&
          ((P = new iu(P, e, null, n, h)),
          m.push({ event: P, listeners: C }),
          _ ? (P.data = _) : ((_ = Ws(n)), _ !== null && (P.data = _)))),
        (_ = Ff ? $f(e, n) : Uf(e, n)) &&
          ((c = Vr(c, 'onBeforeInput')),
          0 < c.length &&
            ((h = new iu('onBeforeInput', 'beforeinput', null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = _)))
    }
    ta(m, t)
  })
}
function Wn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Vr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Dn(e, n)),
      i != null && r.unshift(Wn(e, i, l)),
      (i = Dn(e, t)),
      i != null && r.push(Wn(e, i, l))),
      (e = e.return)
  }
  return r
}
function jt(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function yu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode
    if (s !== null && s === r) break
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Dn(n, i)), s != null && o.unshift(Wn(n, s, u)))
        : l || ((s = Dn(n, i)), s != null && o.push(Wn(n, s, u)))),
      (n = n.return)
  }
  o.length !== 0 && e.push({ event: t, listeners: o })
}
var bf = /\r\n?/g,
  ed = /\u0000|\uFFFD/g
function gu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      bf,
      `
`,
    )
    .replace(ed, '')
}
function mr(e, t, n) {
  if (((t = gu(t)), gu(e) !== t && n)) throw Error(g(425))
}
function Wr() {}
var xi = null,
  ki = null
function Si(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ei = typeof setTimeout == 'function' ? setTimeout : void 0,
  td = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  wu = typeof Promise == 'function' ? Promise : void 0,
  nd =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof wu < 'u'
      ? function (e) {
          return wu.resolve(null).then(e).catch(rd)
        }
      : Ei
function rd(e) {
  setTimeout(function () {
    throw e
  })
}
function Al(e, t) {
  var n = t,
    r = 0
  do {
    var l = n.nextSibling
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Un(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = l
  } while (n)
  Un(t)
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function xu(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var cn = Math.random().toString(36).slice(2),
  $e = '__reactFiber$' + cn,
  Hn = '__reactProps$' + cn,
  Xe = '__reactContainer$' + cn,
  Ni = '__reactEvents$' + cn,
  ld = '__reactListeners$' + cn,
  id = '__reactHandles$' + cn
function St(e) {
  var t = e[$e]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = xu(e); e !== null; ) {
          if ((n = e[$e])) return n
          e = xu(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function er(e) {
  return (
    (e = e[$e] || e[Xe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function At(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(g(33))
}
function cl(e) {
  return e[Hn] || null
}
var Ci = [],
  Bt = -1
function vt(e) {
  return { current: e }
}
function $(e) {
  0 > Bt || ((e.current = Ci[Bt]), (Ci[Bt] = null), Bt--)
}
function D(e, t) {
  Bt++, (Ci[Bt] = e.current), (e.current = t)
}
var mt = {},
  oe = vt(mt),
  pe = vt(!1),
  Pt = mt
function tn(e, t) {
  var n = e.type.contextTypes
  if (!n) return mt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var l = {},
    i
  for (i in n) l[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  )
}
function me(e) {
  return (e = e.childContextTypes), e != null
}
function Hr() {
  $(pe), $(oe)
}
function ku(e, t, n) {
  if (oe.current !== mt) throw Error(g(168))
  D(oe, t), D(pe, n)
}
function ra(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var l in r) if (!(l in t)) throw Error(g(108, Vc(e) || 'Unknown', l))
  return W({}, n, r)
}
function Qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (Pt = oe.current),
    D(oe, e),
    D(pe, pe.current),
    !0
  )
}
function Su(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(g(169))
  n
    ? ((e = ra(e, t, Pt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(pe),
      $(oe),
      D(oe, e))
    : $(pe),
    D(pe, n)
}
var Ve = null,
  fl = !1,
  Bl = !1
function la(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e)
}
function od(e) {
  ;(fl = !0), la(e)
}
function yt() {
  if (!Bl && Ve !== null) {
    Bl = !0
    var e = 0,
      t = I
    try {
      var n = Ve
      for (I = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Ve = null), (fl = !1)
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ts(no, yt), l)
    } finally {
      ;(I = t), (Bl = !1)
    }
  }
  return null
}
var Vt = [],
  Wt = 0,
  Kr = null,
  Yr = 0,
  Se = [],
  Ee = 0,
  zt = null,
  We = 1,
  He = ''
function xt(e, t) {
  ;(Vt[Wt++] = Yr), (Vt[Wt++] = Kr), (Kr = e), (Yr = t)
}
function ia(e, t, n) {
  ;(Se[Ee++] = We), (Se[Ee++] = He), (Se[Ee++] = zt), (zt = e)
  var r = We
  e = He
  var l = 32 - Oe(r) - 1
  ;(r &= ~(1 << l)), (n += 1)
  var i = 32 - Oe(t) + l
  if (30 < i) {
    var o = l - (l % 5)
    ;(i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (He = i + e)
  } else (We = (1 << i) | (n << l) | r), (He = e)
}
function fo(e) {
  e.return !== null && (xt(e, 1), ia(e, 1, 0))
}
function po(e) {
  for (; e === Kr; )
    (Kr = Vt[--Wt]), (Vt[Wt] = null), (Yr = Vt[--Wt]), (Vt[Wt] = null)
  for (; e === zt; )
    (zt = Se[--Ee]),
      (Se[Ee] = null),
      (He = Se[--Ee]),
      (Se[Ee] = null),
      (We = Se[--Ee]),
      (Se[Ee] = null)
}
var ge = null,
  ye = null,
  A = !1,
  Me = null
function oa(e, t) {
  var n = Ne(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Eu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ye = st(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ye = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: We, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ye = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function _i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Pi(e) {
  if (A) {
    var t = ye
    if (t) {
      var n = t
      if (!Eu(e, t)) {
        if (_i(e)) throw Error(g(418))
        t = st(n.nextSibling)
        var r = ge
        t && Eu(e, t)
          ? oa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (ge = e))
      }
    } else {
      if (_i(e)) throw Error(g(418))
      ;(e.flags = (e.flags & -4097) | 2), (A = !1), (ge = e)
    }
  }
}
function Nu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  ge = e
}
function hr(e) {
  if (e !== ge) return !1
  if (!A) return Nu(e), (A = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Si(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (_i(e)) throw (ua(), Error(g(418)))
    for (; t; ) oa(e, t), (t = st(t.nextSibling))
  }
  if ((Nu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              ye = st(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      ye = null
    }
  } else ye = ge ? st(e.stateNode.nextSibling) : null
  return !0
}
function ua() {
  for (var e = ye; e; ) e = st(e.nextSibling)
}
function nn() {
  ;(ye = ge = null), (A = !1)
}
function mo(e) {
  Me === null ? (Me = [e]) : Me.push(e)
}
var ud = Je.ReactCurrentBatchConfig
function Le(e, t) {
  if (e && e.defaultProps) {
    ;(t = W({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var Xr = vt(null),
  Gr = null,
  Ht = null,
  ho = null
function vo() {
  ho = Ht = Gr = null
}
function yo(e) {
  var t = Xr.current
  $(Xr), (e._currentValue = t)
}
function zi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Jt(e, t) {
  ;(Gr = e),
    (ho = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null))
}
function _e(e) {
  var t = e._currentValue
  if (ho !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Gr === null) throw Error(g(308))
      ;(Ht = e), (Gr.dependencies = { lanes: 0, firstContext: e })
    } else Ht = Ht.next = e
  return t
}
var Et = null
function go(e) {
  Et === null ? (Et = [e]) : Et.push(e)
}
function sa(e, t, n, r) {
  var l = t.interleaved
  return (
    l === null ? ((n.next = n), go(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ge(e, r)
  )
}
function Ge(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var et = !1
function wo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function aa(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function at(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), j & 2)) {
    var l = r.pending
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ge(e, n)
    )
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), go(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ge(e, n)
  )
}
function Pr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), ro(e, n)
  }
}
function Cu(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next)
      } while (n !== null)
      i === null ? (l = i = t) : (i = i.next = t)
    } else l = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Zr(e, t, n, r) {
  var l = e.updateQueue
  et = !1
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending
  if (u !== null) {
    l.shared.pending = null
    var s = u,
      c = s.next
    ;(s.next = null), o === null ? (i = c) : (o.next = c), (o = s)
    var h = e.alternate
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)))
  }
  if (i !== null) {
    var m = l.baseState
    ;(o = 0), (h = c = s = null), (u = i)
    do {
      var p = u.lane,
        w = u.eventTime
      if ((r & p) === p) {
        h !== null &&
          (h = h.next = {
            eventTime: w,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          })
        e: {
          var x = e,
            k = u
          switch (((p = t), (w = n), k.tag)) {
            case 1:
              if (((x = k.payload), typeof x == 'function')) {
                m = x.call(w, m, p)
                break e
              }
              m = x
              break e
            case 3:
              x.flags = (x.flags & -65537) | 128
            case 0:
              if (
                ((x = k.payload),
                (p = typeof x == 'function' ? x.call(w, m, p) : x),
                p == null)
              )
                break e
              m = W({}, m, p)
              break e
            case 2:
              et = !0
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u))
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = w), (s = m)) : (h = h.next = w),
          (o |= p)
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break
        ;(p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null)
      }
    } while (1)
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t
      do (o |= l.lane), (l = l.next)
      while (l !== t)
    } else i === null && (l.shared.lanes = 0)
    ;(Lt |= o), (e.lanes = o), (e.memoizedState = m)
  }
}
function _u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(g(191, l))
        l.call(r)
      }
    }
}
var ca = new ss.Component().refs
function Ti(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ot(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = se(),
      l = ft(e),
      i = Qe(r, l)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (je(t, e, l, r), Pr(t, e, l))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = se(),
      l = ft(e),
      i = Qe(r, l)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (je(t, e, l, r), Pr(t, e, l))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = se(),
      r = ft(e),
      l = Qe(n, r)
    ;(l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (je(t, e, r, n), Pr(t, e, r))
  },
}
function Pu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bn(n, r) || !Bn(l, i)
      : !0
  )
}
function fa(e, t, n) {
  var r = !1,
    l = mt,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = _e(i))
      : ((l = me(t) ? Pt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? tn(e, l) : mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function zu(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null)
}
function Li(e, t, n, r) {
  var l = e.stateNode
  ;(l.props = n), (l.state = e.memoizedState), (l.refs = ca), wo(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (l.context = _e(i))
    : ((i = me(t) ? Pt : oe.current), (l.context = tn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ti(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && dl.enqueueReplaceState(l, l.state, null),
      Zr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308)
}
function gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309))
        var r = n.stateNode
      }
      if (!r) throw Error(g(147, e))
      var l = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs
            u === ca && (u = l.refs = {}), o === null ? delete u[i] : (u[i] = o)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(g(284))
    if (!n._owner) throw Error(g(290, e))
  }
  return e
}
function vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  )
}
function Tu(e) {
  var t = e._init
  return t(e._payload)
}
function da(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a)
    }
  }
  function n(f, a) {
    if (!e) return null
    for (; a !== null; ) t(f, a), (a = a.sibling)
    return null
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling)
    return f
  }
  function l(f, a) {
    return (f = dt(f, a)), (f.index = 0), (f.sibling = null), f
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    )
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f
  }
  function u(f, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = Xl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a)
  }
  function s(f, a, d, y) {
    var E = d.type
    return E === Dt
      ? h(f, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === be &&
            Tu(E) === a.type))
      ? ((y = l(a, d.props)), (y.ref = gn(f, a, d)), (y.return = f), y)
      : ((y = Or(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = gn(f, a, d)),
        (y.return = f),
        y)
  }
  function c(f, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Gl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a)
  }
  function h(f, a, d, y, E) {
    return a === null || a.tag !== 7
      ? ((a = _t(d, f.mode, y, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a)
  }
  function m(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = Xl('' + a, f.mode, d)), (a.return = f), a
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case ir:
          return (
            (d = Or(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = gn(f, null, a)),
            (d.return = f),
            d
          )
        case It:
          return (a = Gl(a, f.mode, d)), (a.return = f), a
        case be:
          var y = a._init
          return m(f, y(a._payload), d)
      }
      if (Sn(a) || pn(a)) return (a = _t(a, f.mode, d, null)), (a.return = f), a
      vr(f, a)
    }
    return null
  }
  function p(f, a, d, y) {
    var E = a !== null ? a.key : null
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return E !== null ? null : u(f, a, '' + d, y)
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case ir:
          return d.key === E ? s(f, a, d, y) : null
        case It:
          return d.key === E ? c(f, a, d, y) : null
        case be:
          return (E = d._init), p(f, a, E(d._payload), y)
      }
      if (Sn(d) || pn(d)) return E !== null ? null : h(f, a, d, y, null)
      vr(f, d)
    }
    return null
  }
  function w(f, a, d, y, E) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (f = f.get(d) || null), u(a, f, '' + y, E)
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case ir:
          return (f = f.get(y.key === null ? d : y.key) || null), s(a, f, y, E)
        case It:
          return (f = f.get(y.key === null ? d : y.key) || null), c(a, f, y, E)
        case be:
          var C = y._init
          return w(f, a, d, C(y._payload), E)
      }
      if (Sn(y) || pn(y)) return (f = f.get(d) || null), h(a, f, y, E, null)
      vr(a, y)
    }
    return null
  }
  function x(f, a, d, y) {
    for (
      var E = null, C = null, _ = a, P = (a = 0), Q = null;
      _ !== null && P < d.length;
      P++
    ) {
      _.index > P ? ((Q = _), (_ = null)) : (Q = _.sibling)
      var O = p(f, _, d[P], y)
      if (O === null) {
        _ === null && (_ = Q)
        break
      }
      e && _ && O.alternate === null && t(f, _),
        (a = i(O, a, P)),
        C === null ? (E = O) : (C.sibling = O),
        (C = O),
        (_ = Q)
    }
    if (P === d.length) return n(f, _), A && xt(f, P), E
    if (_ === null) {
      for (; P < d.length; P++)
        (_ = m(f, d[P], y)),
          _ !== null &&
            ((a = i(_, a, P)), C === null ? (E = _) : (C.sibling = _), (C = _))
      return A && xt(f, P), E
    }
    for (_ = r(f, _); P < d.length; P++)
      (Q = w(_, f, P, d[P], y)),
        Q !== null &&
          (e && Q.alternate !== null && _.delete(Q.key === null ? P : Q.key),
          (a = i(Q, a, P)),
          C === null ? (E = Q) : (C.sibling = Q),
          (C = Q))
    return (
      e &&
        _.forEach(function (ze) {
          return t(f, ze)
        }),
      A && xt(f, P),
      E
    )
  }
  function k(f, a, d, y) {
    var E = pn(d)
    if (typeof E != 'function') throw Error(g(150))
    if (((d = E.call(d)), d == null)) throw Error(g(151))
    for (
      var C = (E = null), _ = a, P = (a = 0), Q = null, O = d.next();
      _ !== null && !O.done;
      P++, O = d.next()
    ) {
      _.index > P ? ((Q = _), (_ = null)) : (Q = _.sibling)
      var ze = p(f, _, O.value, y)
      if (ze === null) {
        _ === null && (_ = Q)
        break
      }
      e && _ && ze.alternate === null && t(f, _),
        (a = i(ze, a, P)),
        C === null ? (E = ze) : (C.sibling = ze),
        (C = ze),
        (_ = Q)
    }
    if (O.done) return n(f, _), A && xt(f, P), E
    if (_ === null) {
      for (; !O.done; P++, O = d.next())
        (O = m(f, O.value, y)),
          O !== null &&
            ((a = i(O, a, P)), C === null ? (E = O) : (C.sibling = O), (C = O))
      return A && xt(f, P), E
    }
    for (_ = r(f, _); !O.done; P++, O = d.next())
      (O = w(_, f, P, O.value, y)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? P : O.key),
          (a = i(O, a, P)),
          C === null ? (E = O) : (C.sibling = O),
          (C = O))
    return (
      e &&
        _.forEach(function (fn) {
          return t(f, fn)
        }),
      A && xt(f, P),
      E
    )
  }
  function U(f, a, d, y) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Dt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case ir:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (((E = d.type), E === Dt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a)
                    break e
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === be &&
                    Tu(E) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = gn(f, C, d)),
                    (a.return = f),
                    (f = a)
                  break e
                }
                n(f, C)
                break
              } else t(f, C)
              C = C.sibling
            }
            d.type === Dt
              ? ((a = _t(d.props.children, f.mode, y, d.key)),
                (a.return = f),
                (f = a))
              : ((y = Or(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = gn(f, a, d)),
                (y.return = f),
                (f = y))
          }
          return o(f)
        case It:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a)
                  break e
                } else {
                  n(f, a)
                  break
                }
              else t(f, a)
              a = a.sibling
            }
            ;(a = Gl(d, f.mode, y)), (a.return = f), (f = a)
          }
          return o(f)
        case be:
          return (C = d._init), U(f, a, C(d._payload), y)
      }
      if (Sn(d)) return x(f, a, d, y)
      if (pn(d)) return k(f, a, d, y)
      vr(f, d)
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Xl(d, f.mode, y)), (a.return = f), (f = a)),
        o(f))
      : n(f, a)
  }
  return U
}
var rn = da(!0),
  pa = da(!1),
  tr = {},
  Ae = vt(tr),
  Qn = vt(tr),
  Kn = vt(tr)
function Nt(e) {
  if (e === tr) throw Error(g(174))
  return e
}
function xo(e, t) {
  switch ((D(Kn, t), D(Qn, e), D(Ae, tr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : si(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = si(t, e))
  }
  $(Ae), D(Ae, t)
}
function ln() {
  $(Ae), $(Qn), $(Kn)
}
function ma(e) {
  Nt(Kn.current)
  var t = Nt(Ae.current),
    n = si(t, e.type)
  t !== n && (D(Qn, e), D(Ae, n))
}
function ko(e) {
  Qn.current === e && ($(Ae), $(Qn))
}
var B = vt(0)
function Jr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Vl = []
function So() {
  for (var e = 0; e < Vl.length; e++) Vl[e]._workInProgressVersionPrimary = null
  Vl.length = 0
}
var zr = Je.ReactCurrentDispatcher,
  Wl = Je.ReactCurrentBatchConfig,
  Tt = 0,
  V = null,
  G = null,
  q = null,
  qr = !1,
  Ln = !1,
  Yn = 0,
  sd = 0
function re() {
  throw Error(g(321))
}
function Eo(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n])) return !1
  return !0
}
function No(e, t, n, r, l, i) {
  if (
    ((Tt = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zr.current = e === null || e.memoizedState === null ? dd : pd),
    (e = n(r, l)),
    Ln)
  ) {
    i = 0
    do {
      if (((Ln = !1), (Yn = 0), 25 <= i)) throw Error(g(301))
      ;(i += 1),
        (q = G = null),
        (t.updateQueue = null),
        (zr.current = md),
        (e = n(r, l))
    } while (Ln)
  }
  if (
    ((zr.current = br),
    (t = G !== null && G.next !== null),
    (Tt = 0),
    (q = G = V = null),
    (qr = !1),
    t)
  )
    throw Error(g(300))
  return e
}
function Co() {
  var e = Yn !== 0
  return (Yn = 0), e
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return q === null ? (V.memoizedState = q = e) : (q = q.next = e), q
}
function Pe() {
  if (G === null) {
    var e = V.alternate
    e = e !== null ? e.memoizedState : null
  } else e = G.next
  var t = q === null ? V.memoizedState : q.next
  if (t !== null) (q = t), (G = e)
  else {
    if (e === null) throw Error(g(310))
    ;(G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (V.memoizedState = q = e) : (q = q.next = e)
  }
  return q
}
function Xn(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Hl(e) {
  var t = Pe(),
    n = t.queue
  if (n === null) throw Error(g(311))
  n.lastRenderedReducer = e
  var r = G,
    l = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (l !== null) {
      var o = l.next
      ;(l.next = i.next), (i.next = o)
    }
    ;(r.baseQueue = l = i), (n.pending = null)
  }
  if (l !== null) {
    ;(i = l.next), (r = r.baseState)
    var u = (o = null),
      s = null,
      c = i
    do {
      var h = c.lane
      if ((Tt & h) === h)
        s !== null &&
          (s = s.next = {
            lane: 0,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action))
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        }
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (V.lanes |= h),
          (Lt |= h)
      }
      c = c.next
    } while (c !== null && c !== i)
    s === null ? (o = r) : (s.next = u),
      Ie(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    l = e
    do (i = l.lane), (V.lanes |= i), (Lt |= i), (l = l.next)
    while (l !== e)
  } else l === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Ql(e) {
  var t = Pe(),
    n = t.queue
  if (n === null) throw Error(g(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState
  if (l !== null) {
    n.pending = null
    var o = (l = l.next)
    do (i = e(i, o.action)), (o = o.next)
    while (o !== l)
    Ie(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function ha() {}
function va(e, t) {
  var n = V,
    r = Pe(),
    l = t(),
    i = !Ie(r.memoizedState, l)
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    _o(wa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gn(9, ga.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(g(349))
    Tt & 30 || ya(n, t, l)
  }
  return l
}
function ya(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function ga(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), xa(t) && ka(e)
}
function wa(e, t, n) {
  return n(function () {
    xa(t) && ka(e)
  })
}
function xa(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Ie(e, n)
  } catch {
    return !0
  }
}
function ka(e) {
  var t = Ge(e, 1)
  t !== null && je(t, e, 1, -1)
}
function Lu(e) {
  var t = Fe()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fd.bind(null, V, e)),
    [t.memoizedState, e]
  )
}
function Gn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Sa() {
  return Pe().memoizedState
}
function Tr(e, t, n, r) {
  var l = Fe()
  ;(V.flags |= e),
    (l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r))
}
function pl(e, t, n, r) {
  var l = Pe()
  r = r === void 0 ? null : r
  var i = void 0
  if (G !== null) {
    var o = G.memoizedState
    if (((i = o.destroy), r !== null && Eo(r, o.deps))) {
      l.memoizedState = Gn(t, n, i, r)
      return
    }
  }
  ;(V.flags |= e), (l.memoizedState = Gn(1 | t, n, i, r))
}
function Ru(e, t) {
  return Tr(8390656, 8, e, t)
}
function _o(e, t) {
  return pl(2048, 8, e, t)
}
function Ea(e, t) {
  return pl(4, 2, e, t)
}
function Na(e, t) {
  return pl(4, 4, e, t)
}
function Ca(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function _a(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), pl(4, 4, Ca.bind(null, t, e), n)
  )
}
function Po() {}
function Pa(e, t) {
  var n = Pe()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Eo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function za(e, t) {
  var n = Pe()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Eo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Ta(e, t, n) {
  return Tt & 21
    ? (Ie(n, t) || ((n = Ms()), (V.lanes |= n), (Lt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n))
}
function ad(e, t) {
  var n = I
  ;(I = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Wl.transition
  Wl.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(I = n), (Wl.transition = r)
  }
}
function La() {
  return Pe().memoizedState
}
function cd(e, t, n) {
  var r = ft(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ra(e))
  )
    Ma(t, n)
  else if (((n = sa(e, t, n, r)), n !== null)) {
    var l = se()
    je(n, e, r, l), Oa(n, t, r)
  }
}
function fd(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Ra(e)) Ma(t, l)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n)
        if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, o))) {
          var s = t.interleaved
          s === null
            ? ((l.next = l), go(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l)
          return
        }
      } catch {
      } finally {
      }
    ;(n = sa(e, t, l, r)),
      n !== null && ((l = se()), je(n, e, r, l), Oa(n, t, r))
  }
}
function Ra(e) {
  var t = e.alternate
  return e === V || (t !== null && t === V)
}
function Ma(e, t) {
  Ln = qr = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Oa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), ro(e, n)
  }
}
var br = {
    readContext: _e,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  dd = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: _e,
    useEffect: Ru,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Tr(4194308, 4, Ca.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Tr(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Tr(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Fe()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Fe()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cd.bind(null, V, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Fe()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Lu,
    useDebugValue: Po,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e)
    },
    useTransition: function () {
      var e = Lu(!1),
        t = e[0]
      return (e = ad.bind(null, e[1])), (Fe().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Fe()
      if (A) {
        if (n === void 0) throw Error(g(407))
        n = n()
      } else {
        if (((n = t()), b === null)) throw Error(g(349))
        Tt & 30 || ya(r, t, n)
      }
      l.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (l.queue = i),
        Ru(wa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Gn(9, ga.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Fe(),
        t = b.identifierPrefix
      if (A) {
        var n = He,
          r = We
        ;(n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Yn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = sd++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  pd = {
    readContext: _e,
    useCallback: Pa,
    useContext: _e,
    useEffect: _o,
    useImperativeHandle: _a,
    useInsertionEffect: Ea,
    useLayoutEffect: Na,
    useMemo: za,
    useReducer: Hl,
    useRef: Sa,
    useState: function () {
      return Hl(Xn)
    },
    useDebugValue: Po,
    useDeferredValue: function (e) {
      var t = Pe()
      return Ta(t, G.memoizedState, e)
    },
    useTransition: function () {
      var e = Hl(Xn)[0],
        t = Pe().memoizedState
      return [e, t]
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: La,
    unstable_isNewReconciler: !1,
  },
  md = {
    readContext: _e,
    useCallback: Pa,
    useContext: _e,
    useEffect: _o,
    useImperativeHandle: _a,
    useInsertionEffect: Ea,
    useLayoutEffect: Na,
    useMemo: za,
    useReducer: Ql,
    useRef: Sa,
    useState: function () {
      return Ql(Xn)
    },
    useDebugValue: Po,
    useDeferredValue: function (e) {
      var t = Pe()
      return G === null ? (t.memoizedState = e) : Ta(t, G.memoizedState, e)
    },
    useTransition: function () {
      var e = Ql(Xn)[0],
        t = Pe().memoizedState
      return [e, t]
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: La,
    unstable_isNewReconciler: !1,
  }
function on(e, t) {
  try {
    var n = '',
      r = t
    do (n += Bc(r)), (r = r.return)
    while (r)
    var l = n
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: l, digest: null }
}
function Kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Ri(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var hd = typeof WeakMap == 'function' ? WeakMap : Map
function ja(e, t, n) {
  ;(n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      tl || ((tl = !0), (Bi = r)), Ri(e, t)
    }),
    n
  )
}
function Ia(e, t, n) {
  ;(n = Qe(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var l = t.value
    ;(n.payload = function () {
      return r(l)
    }),
      (n.callback = function () {
        Ri(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ri(e, t),
          typeof r != 'function' &&
            (ct === null ? (ct = new Set([this])) : ct.add(this))
        var o = t.stack
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' })
      }),
    n
  )
}
function Mu(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new hd()
    var l = new Set()
    r.set(t, l)
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l))
  l.has(n) || (l.add(n), (e = Td.bind(null, e, t, n)), t.then(e, e))
}
function Ou(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function ju(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var vd = Je.ReactCurrentOwner,
  de = !1
function ue(e, t, n, r) {
  t.child = e === null ? pa(t, null, n, r) : rn(t, e.child, n, r)
}
function Iu(e, t, n, r, l) {
  n = n.render
  var i = t.ref
  return (
    Jt(t, l),
    (r = No(e, t, n, r, i, l)),
    (n = Co()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (A && n && fo(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  )
}
function Du(e, t, n, r, l) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !Io(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Da(e, t, i, r, l))
      : ((e = Or(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Bn), n(o, r) && e.ref === t.ref)
    )
      return Ze(e, t, l)
  }
  return (
    (t.flags |= 1),
    (e = dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function Da(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Bn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0)
      else return (t.lanes = e.lanes), Ze(e, t, l)
  }
  return Mi(e, t, n, r, l)
}
function Fa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Kt, ve),
        (ve |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Kt, ve),
          (ve |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(Kt, ve),
        (ve |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Kt, ve),
      (ve |= r)
  return ue(e, t, l, n), t.child
}
function $a(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Mi(e, t, n, r, l) {
  var i = me(n) ? Pt : oe.current
  return (
    (i = tn(t, i)),
    Jt(t, l),
    (n = No(e, t, n, r, i, l)),
    (r = Co()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (A && r && fo(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  )
}
function Fu(e, t, n, r, l) {
  if (me(n)) {
    var i = !0
    Qr(t)
  } else i = !1
  if ((Jt(t, l), t.stateNode === null))
    Lr(e, t), fa(t, n, r), Li(t, n, r, l), (r = !0)
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps
    o.props = u
    var s = o.context,
      c = n.contextType
    typeof c == 'object' && c !== null
      ? (c = _e(c))
      : ((c = me(n) ? Pt : oe.current), (c = tn(t, c)))
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && zu(t, o, r, c)),
      (et = !1)
    var p = t.memoizedState
    ;(o.state = p),
      Zr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || pe.current || et
        ? (typeof h == 'function' && (Ti(t, n, h, r), (s = t.memoizedState)),
          (u = et || Pu(t, n, u, r, p, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(o = t.stateNode),
      aa(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Le(t.type, u)),
      (o.props = c),
      (m = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = _e(s))
        : ((s = me(n) ? Pt : oe.current), (s = tn(t, s)))
    var w = n.getDerivedStateFromProps
    ;(h =
      typeof w == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== m || p !== s) && zu(t, o, r, s)),
      (et = !1),
      (p = t.memoizedState),
      (o.state = p),
      Zr(t, r, o, l)
    var x = t.memoizedState
    u !== m || p !== x || pe.current || et
      ? (typeof w == 'function' && (Ti(t, n, w, r), (x = t.memoizedState)),
        (c = et || Pu(t, n, c, r, p, x, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Oi(e, t, n, r, i, l)
}
function Oi(e, t, n, r, l, i) {
  $a(e, t)
  var o = (t.flags & 128) !== 0
  if (!r && !o) return l && Su(t, n, !1), Ze(e, t, i)
  ;(r = t.stateNode), (vd.current = t)
  var u =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = rn(t, e.child, null, i)), (t.child = rn(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && Su(t, n, !0),
    t.child
  )
}
function Ua(e) {
  var t = e.stateNode
  t.pendingContext
    ? ku(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ku(e, t.context, !1),
    xo(e, t.containerInfo)
}
function $u(e, t, n, r, l) {
  return nn(), mo(l), (t.flags |= 256), ue(e, t, n, r), t.child
}
var ji = { dehydrated: null, treeContext: null, retryLane: 0 }
function Ii(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Aa(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(B, l & 1),
    e === null)
  )
    return (
      Pi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = vl(o, r, 0, null)),
              (e = _t(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ii(n)),
              (t.memoizedState = ji),
              e)
            : zo(t, o))
    )
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return yd(e, t, o, r, u, l, n)
  if (i) {
    ;(i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dt(u, i)) : ((i = _t(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ii(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ji),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function zo(e, t) {
  return (
    (t = vl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function yr(e, t, n, r) {
  return (
    r !== null && mo(r),
    rn(t, e.child, null, n),
    (e = zo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function yd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Kl(Error(g(422)))), yr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = vl({ mode: 'visible', children: r.children }, l, 0, null)),
        (i = _t(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && rn(t, e.child, null, o),
        (t.child.memoizedState = Ii(o)),
        (t.memoizedState = ji),
        i)
  if (!(t.mode & 1)) return yr(e, t, o, null)
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst
    return (r = u), (i = Error(g(419))), (r = Kl(i, r, void 0)), yr(e, t, o, r)
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2
          break
        case 16:
          l = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32
          break
        case 536870912:
          l = 268435456
          break
        default:
          l = 0
      }
      ;(l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ge(e, l), je(r, e, l, -1))
    }
    return jo(), (r = Kl(Error(g(421)))), yr(e, t, o, r)
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ld.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ye = st(l.nextSibling)),
      (ge = t),
      (A = !0),
      (Me = null),
      e !== null &&
        ((Se[Ee++] = We),
        (Se[Ee++] = He),
        (Se[Ee++] = zt),
        (We = e.id),
        (He = e.overflow),
        (zt = t)),
      (t = zo(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Uu(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), zi(e.return, t, n)
}
function Yl(e, t, n, r, l) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l))
}
function Ba(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uu(e, n, t)
        else if (e.tag === 19) Uu(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((D(B, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Jr(e) === null && (l = n),
            (n = n.sibling)
        ;(n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Yl(t, !1, l, n, i)
        break
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Jr(e) === null)) {
            t.child = l
            break
          }
          ;(e = l.sibling), (l.sibling = n), (n = l), (l = e)
        }
        Yl(t, !0, n, null, i)
        break
      case 'together':
        Yl(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Lr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Lt |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(g(153))
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function gd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ua(t), nn()
      break
    case 5:
      ma(t)
      break
    case 1:
      me(t.type) && Qr(t)
      break
    case 4:
      xo(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value
      D(Xr, r._currentValue), (r._currentValue = l)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Aa(e, t, n)
          : (D(B, B.current & 1),
            (e = Ze(e, t, n)),
            e !== null ? e.sibling : null)
      D(B, B.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ba(e, t, n)
        t.flags |= 128
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(B, B.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Fa(e, t, n)
  }
  return Ze(e, t, n)
}
var Va, Di, Wa, Ha
Va = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Di = function () {}
Wa = function (e, t, n, r) {
  var l = e.memoizedProps
  if (l !== r) {
    ;(e = t.stateNode), Nt(Ae.current)
    var i = null
    switch (n) {
      case 'input':
        ;(l = li(e, l)), (r = li(e, r)), (i = [])
        break
      case 'select':
        ;(l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(l = ui(e, l)), (r = ui(e, r)), (i = [])
        break
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Wr)
    }
    ai(n, r)
    var o
    n = null
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c]
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (jn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null))
    for (c in r) {
      var s = r[c]
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''))
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]))
          } else n || (i || (i = []), i.push(c, n)), (n = s)
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(c, '' + s)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (jn.hasOwnProperty(c)
                ? (s != null && c === 'onScroll' && F('scroll', e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s))
    }
    n && (i = i || []).push('style', n)
    var c = i
    ;(t.updateQueue = c) && (t.flags |= 4)
  }
}
Ha = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function wn(e, t) {
  if (!A)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling)
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function wd(e, t, n) {
  var r = t.pendingProps
  switch ((po(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null
    case 1:
      return me(t.type) && Hr(), le(t), null
    case 3:
      return (
        (r = t.stateNode),
        ln(),
        $(pe),
        $(oe),
        So(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (Hi(Me), (Me = null)))),
        Di(e, t),
        le(t),
        null
      )
    case 5:
      ko(t)
      var l = Nt(Kn.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Wa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166))
          return le(t), null
        }
        if (((e = Nt(Ae.current)), hr(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[$e] = t), (r[Hn] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              F('cancel', r), F('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              F('load', r)
              break
            case 'video':
            case 'audio':
              for (l = 0; l < Nn.length; l++) F(Nn[l], r)
              break
            case 'source':
              F('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              F('error', r), F('load', r)
              break
            case 'details':
              F('toggle', r)
              break
            case 'input':
              Xo(r, i), F('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                F('invalid', r)
              break
            case 'textarea':
              Zo(r, i), F('invalid', r)
          }
          ai(n, i), (l = null)
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o]
              o === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : jn.hasOwnProperty(o) &&
                  u != null &&
                  o === 'onScroll' &&
                  F('scroll', r)
            }
          switch (n) {
            case 'input':
              or(r), Go(r, i, !0)
              break
            case 'textarea':
              or(r), Jo(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = Wr)
          }
          ;(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ys(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[$e] = t),
            (e[Hn] = r),
            Va(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((o = ci(n, r)), n)) {
              case 'dialog':
                F('cancel', e), F('close', e), (l = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                F('load', e), (l = r)
                break
              case 'video':
              case 'audio':
                for (l = 0; l < Nn.length; l++) F(Nn[l], e)
                l = r
                break
              case 'source':
                F('error', e), (l = r)
                break
              case 'img':
              case 'image':
              case 'link':
                F('error', e), F('load', e), (l = r)
                break
              case 'details':
                F('toggle', e), (l = r)
                break
              case 'input':
                Xo(e, r), (l = li(e, r)), F('invalid', e)
                break
              case 'option':
                l = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  F('invalid', e)
                break
              case 'textarea':
                Zo(e, r), (l = ui(e, r)), F('invalid', e)
                break
              default:
                l = r
            }
            ai(n, l), (u = l)
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i]
                i === 'style'
                  ? xs(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && gs(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && In(e, s)
                    : typeof s == 'number' && In(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (jn.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && F('scroll', e)
                      : s != null && Ji(e, i, s, o))
              }
            switch (n) {
              case 'input':
                or(e), Go(e, r, !1)
                break
              case 'textarea':
                or(e), Jo(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + pt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof l.onClick == 'function' && (e.onclick = Wr)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return le(t), null
    case 6:
      if (e && t.stateNode != null) Ha(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(g(166))
        if (((n = Nt(Kn.current)), Nt(Ae.current), hr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (i = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                mr(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mr(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r)
      }
      return le(t), null
    case 13:
      if (
        ($(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && ye !== null && t.mode & 1 && !(t.flags & 128))
          ua(), nn(), (t.flags |= 98560), (i = !1)
        else if (((i = hr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317))
            i[$e] = t
          } else
            nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          le(t), (i = !1)
        } else Me !== null && (Hi(Me), (Me = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? Z === 0 && (Z = 3) : jo())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null)
    case 4:
      return (
        ln(), Di(e, t), e === null && Vn(t.stateNode.containerInfo), le(t), null
      )
    case 10:
      return yo(t.type._context), le(t), null
    case 17:
      return me(t.type) && Hr(), le(t), null
    case 19:
      if (($(B), (i = t.memoizedState), i === null)) return le(t), null
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) wn(i, !1)
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Jr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    wn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return D(B, (B.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            Y() > un &&
            ((t.flags |= 128), (r = !0), wn(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Jr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !A)
            )
              return le(t), null
          } else
            2 * Y() - i.renderingStartTime > un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wn(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = B.current),
          D(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null)
    case 22:
    case 23:
      return (
        Oo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(g(156, t.tag))
}
function xd(e, t) {
  switch ((po(t), t.tag)) {
    case 1:
      return (
        me(t.type) && Hr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        ln(),
        $(pe),
        $(oe),
        So(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return ko(t), null
    case 13:
      if (($(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340))
        nn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return $(B), null
    case 4:
      return ln(), null
    case 10:
      return yo(t.type._context), null
    case 22:
    case 23:
      return Oo(), null
    case 24:
      return null
    default:
      return null
  }
}
var gr = !1,
  ie = !1,
  kd = typeof WeakSet == 'function' ? WeakSet : Set,
  S = null
function Qt(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        H(e, t, r)
      }
    else n.current = null
}
function Fi(e, t, n) {
  try {
    n()
  } catch (r) {
    H(e, t, r)
  }
}
var Au = !1
function Sd(e, t) {
  if (((xi = Ar), (e = Xs()), co(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var l = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (p = m), (m = w)
            for (;;) {
              if (m === e) break t
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++h === r && (s = o),
                (w = m.nextSibling) !== null)
              )
                break
              ;(m = p), (p = m.parentNode)
            }
            m = w
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (ki = { focusedElem: e, selectionRange: n }, Ar = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e)
    else
      for (; S !== null; ) {
        t = S
        try {
          var x = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (x !== null) {
                  var k = x.memoizedProps,
                    U = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Le(t.type, k),
                      U,
                    )
                  f.__reactInternalSnapshotBeforeUpdate = a
                }
                break
              case 3:
                var d = t.stateNode.containerInfo
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(g(163))
            }
        } catch (y) {
          H(t, t.return, y)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (S = e)
          break
        }
        S = t.return
      }
  return (x = Au), (Au = !1), x
}
function Rn(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next)
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy
        ;(l.destroy = void 0), i !== void 0 && Fi(t, n, i)
      }
      l = l.next
    } while (l !== r)
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function $i(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Qa(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Qa(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[Hn], delete t[Ni], delete t[ld], delete t[id])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Ka(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Bu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ka(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Ui(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Wr))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ui(e, t, n), e = e.sibling; e !== null; ) Ui(e, t, n), (e = e.sibling)
}
function Ai(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ai(e, t, n), e = e.sibling; e !== null; ) Ai(e, t, n), (e = e.sibling)
}
var ee = null,
  Re = !1
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Ya(e, t, n), (n = n.sibling)
}
function Ya(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == 'function')
    try {
      Ue.onCommitFiberUnmount(ol, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Qt(n, t)
    case 6:
      var r = ee,
        l = Re
      ;(ee = null),
        qe(e, t, n),
        (ee = r),
        (Re = l),
        ee !== null &&
          (Re
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode))
      break
    case 18:
      ee !== null &&
        (Re
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            Un(e))
          : Al(ee, n.stateNode))
      break
    case 4:
      ;(r = ee),
        (l = Re),
        (ee = n.stateNode.containerInfo),
        (Re = !0),
        qe(e, t, n),
        (ee = r),
        (Re = l)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next
        do {
          var i = l,
            o = i.destroy
          ;(i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Fi(n, t, o),
            (l = l.next)
        } while (l !== r)
      }
      qe(e, t, n)
      break
    case 1:
      if (
        !ie &&
        (Qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (u) {
          H(n, t, u)
        }
      qe(e, t, n)
      break
    case 21:
      qe(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), qe(e, t, n), (ie = r))
        : qe(e, t, n)
      break
    default:
      qe(e, t, n)
  }
}
function Vu(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new kd()),
      t.forEach(function (r) {
        var l = Rd.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(l, l))
      })
  }
}
function Te(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r]
      try {
        var i = e,
          o = t,
          u = o
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ;(ee = u.stateNode), (Re = !1)
              break e
            case 3:
              ;(ee = u.stateNode.containerInfo), (Re = !0)
              break e
            case 4:
              ;(ee = u.stateNode.containerInfo), (Re = !0)
              break e
          }
          u = u.return
        }
        if (ee === null) throw Error(g(160))
        Ya(i, o, l), (ee = null), (Re = !1)
        var s = l.alternate
        s !== null && (s.return = null), (l.return = null)
      } catch (c) {
        H(l, t, c)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Xa(t, e), (t = t.sibling)
}
function Xa(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), De(e), r & 4)) {
        try {
          Rn(3, e, e.return), ml(3, e)
        } catch (k) {
          H(e, e.return, k)
        }
        try {
          Rn(5, e, e.return)
        } catch (k) {
          H(e, e.return, k)
        }
      }
      break
    case 1:
      Te(t, e), De(e), r & 512 && n !== null && Qt(n, n.return)
      break
    case 5:
      if (
        (Te(t, e),
        De(e),
        r & 512 && n !== null && Qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode
        try {
          In(l, '')
        } catch (k) {
          H(e, e.return, k)
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && hs(l, i),
              ci(u, o)
            var c = ci(u, i)
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                m = s[o + 1]
              h === 'style'
                ? xs(l, m)
                : h === 'dangerouslySetInnerHTML'
                ? gs(l, m)
                : h === 'children'
                ? In(l, m)
                : Ji(l, h, m, c)
            }
            switch (u) {
              case 'input':
                ii(l, i)
                break
              case 'textarea':
                vs(l, i)
                break
              case 'select':
                var p = l._wrapperState.wasMultiple
                l._wrapperState.wasMultiple = !!i.multiple
                var w = i.value
                w != null
                  ? Yt(l, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yt(l, !!i.multiple, i.defaultValue, !0)
                      : Yt(l, !!i.multiple, i.multiple ? [] : '', !1))
            }
            l[Hn] = i
          } catch (k) {
            H(e, e.return, k)
          }
      }
      break
    case 6:
      if ((Te(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162))
        ;(l = e.stateNode), (i = e.memoizedProps)
        try {
          l.nodeValue = i
        } catch (k) {
          H(e, e.return, k)
        }
      }
      break
    case 3:
      if (
        (Te(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Un(t.containerInfo)
        } catch (k) {
          H(e, e.return, k)
        }
      break
    case 4:
      Te(t, e), De(e)
      break
    case 13:
      Te(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ro = Y())),
        r & 4 && Vu(e)
      break
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || h), Te(t, e), (ie = c)) : Te(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (S = e, h = e.child; h !== null; ) {
            for (m = S = h; S !== null; ) {
              switch (((p = S), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rn(4, p, p.return)
                  break
                case 1:
                  Qt(p, p.return)
                  var x = p.stateNode
                  if (typeof x.componentWillUnmount == 'function') {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount()
                    } catch (k) {
                      H(r, n, k)
                    }
                  }
                  break
                case 5:
                  Qt(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    Hu(m)
                    continue
                  }
              }
              w !== null ? ((w.return = p), (S = w)) : Hu(m)
            }
            h = h.sibling
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m
              try {
                ;(l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = ws('display', o)))
              } catch (k) {
                H(e, e.return, k)
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? '' : m.memoizedProps
              } catch (k) {
                H(e, e.return, k)
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            ;(m.child.return = m), (m = m.child)
            continue
          }
          if (m === e) break e
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e
            h === m && (h = null), (m = m.return)
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling)
        }
      }
      break
    case 19:
      Te(t, e), De(e), r & 4 && Vu(e)
      break
    case 21:
      break
    default:
      Te(t, e), De(e)
  }
}
function De(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ka(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(g(160))
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode
          r.flags & 32 && (In(l, ''), (r.flags &= -33))
          var i = Bu(e)
          Ai(e, i, l)
          break
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Bu(e)
          Ui(e, u, o)
          break
        default:
          throw Error(g(161))
      }
    } catch (s) {
      H(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Ed(e, t, n) {
  ;(S = e), Ga(e)
}
function Ga(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || gr
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie
        u = gr
        var c = ie
        if (((gr = o), (ie = s) && !c))
          for (S = l; S !== null; )
            (o = S),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Qu(l)
                : s !== null
                ? ((s.return = o), (S = s))
                : Qu(l)
        for (; i !== null; ) (S = i), Ga(i), (i = i.sibling)
        ;(S = l), (gr = u), (ie = c)
      }
      Wu(e)
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Wu(e)
  }
}
function Wu(e) {
  for (; S !== null; ) {
    var t = S
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || ml(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount()
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var i = t.updateQueue
              i !== null && _u(t, i, r)
              break
            case 3:
              var o = t.updateQueue
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                _u(t, o, n)
              }
              break
            case 5:
              var u = t.stateNode
              if (n === null && t.flags & 4) {
                n = u
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus()
                    break
                  case 'img':
                    s.src && (n.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate
                if (c !== null) {
                  var h = c.memoizedState
                  if (h !== null) {
                    var m = h.dehydrated
                    m !== null && Un(m)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(g(163))
          }
        ie || (t.flags & 512 && $i(t))
      } catch (p) {
        H(t, t.return, p)
      }
    }
    if (t === e) {
      S = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (S = n)
      break
    }
    S = t.return
  }
}
function Hu(e) {
  for (; S !== null; ) {
    var t = S
    if (t === e) {
      S = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (S = n)
      break
    }
    S = t.return
  }
}
function Qu(e) {
  for (; S !== null; ) {
    var t = S
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            ml(4, t)
          } catch (s) {
            H(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var l = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              H(t, l, s)
            }
          }
          var i = t.return
          try {
            $i(t)
          } catch (s) {
            H(t, i, s)
          }
          break
        case 5:
          var o = t.return
          try {
            $i(t)
          } catch (s) {
            H(t, o, s)
          }
      }
    } catch (s) {
      H(t, t.return, s)
    }
    if (t === e) {
      S = null
      break
    }
    var u = t.sibling
    if (u !== null) {
      ;(u.return = t.return), (S = u)
      break
    }
    S = t.return
  }
}
var Nd = Math.ceil,
  el = Je.ReactCurrentDispatcher,
  To = Je.ReactCurrentOwner,
  Ce = Je.ReactCurrentBatchConfig,
  j = 0,
  b = null,
  X = null,
  te = 0,
  ve = 0,
  Kt = vt(0),
  Z = 0,
  Zn = null,
  Lt = 0,
  hl = 0,
  Lo = 0,
  Mn = null,
  fe = null,
  Ro = 0,
  un = 1 / 0,
  Be = null,
  tl = !1,
  Bi = null,
  ct = null,
  wr = !1,
  lt = null,
  nl = 0,
  On = 0,
  Vi = null,
  Rr = -1,
  Mr = 0
function se() {
  return j & 6 ? Y() : Rr !== -1 ? Rr : (Rr = Y())
}
function ft(e) {
  return e.mode & 1
    ? j & 2 && te !== 0
      ? te & -te
      : ud.transition !== null
      ? (Mr === 0 && (Mr = Ms()), Mr)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Us(e.type))),
        e)
    : 1
}
function je(e, t, n, r) {
  if (50 < On) throw ((On = 0), (Vi = null), Error(g(185)))
  qn(e, n, r),
    (!(j & 2) || e !== b) &&
      (e === b && (!(j & 2) && (hl |= n), Z === 4 && nt(e, te)),
      he(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && ((un = Y() + 500), fl && yt()))
}
function he(e, t) {
  var n = e.callbackNode
  uf(e, t)
  var r = Ur(e, e === b ? te : 0)
  if (r === 0)
    n !== null && eu(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && eu(n), t === 1))
      e.tag === 0 ? od(Ku.bind(null, e)) : la(Ku.bind(null, e)),
        nd(function () {
          !(j & 6) && yt()
        }),
        (n = null)
    else {
      switch (Os(r)) {
        case 1:
          n = no
          break
        case 4:
          n = Ls
          break
        case 16:
          n = $r
          break
        case 536870912:
          n = Rs
          break
        default:
          n = $r
      }
      n = rc(n, Za.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Za(e, t) {
  if (((Rr = -1), (Mr = 0), j & 6)) throw Error(g(327))
  var n = e.callbackNode
  if (qt() && e.callbackNode !== n) return null
  var r = Ur(e, e === b ? te : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r)
  else {
    t = r
    var l = j
    j |= 2
    var i = qa()
    ;(b !== e || te !== t) && ((Be = null), (un = Y() + 500), Ct(e, t))
    do
      try {
        Pd()
        break
      } catch (u) {
        Ja(e, u)
      }
    while (1)
    vo(),
      (el.current = i),
      (j = l),
      X !== null ? (t = 0) : ((b = null), (te = 0), (t = Z))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = hi(e)), l !== 0 && ((r = l), (t = Wi(e, l)))), t === 1)
    )
      throw ((n = Zn), Ct(e, 0), nt(e, r), he(e, Y()), n)
    if (t === 6) nt(e, r)
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Cd(l) &&
          ((t = rl(e, r)),
          t === 2 && ((i = hi(e)), i !== 0 && ((r = i), (t = Wi(e, i)))),
          t === 1))
      )
        throw ((n = Zn), Ct(e, 0), nt(e, r), he(e, Y()), n)
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345))
        case 2:
          kt(e, fe, Be)
          break
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = Ro + 500 - Y()), 10 < t))
          ) {
            if (Ur(e, 0) !== 0) break
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l)
              break
            }
            e.timeoutHandle = Ei(kt.bind(null, e, fe, Be), t)
            break
          }
          kt(e, fe, Be)
          break
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r)
            ;(i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i)
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Nd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ei(kt.bind(null, e, fe, Be), r)
            break
          }
          kt(e, fe, Be)
          break
        case 5:
          kt(e, fe, Be)
          break
        default:
          throw Error(g(329))
      }
    }
  }
  return he(e, Y()), e.callbackNode === n ? Za.bind(null, e) : null
}
function Wi(e, t) {
  var n = Mn
  return (
    e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && Hi(t)),
    e
  )
}
function Hi(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e)
}
function Cd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot
          l = l.value
          try {
            if (!Ie(i(), l)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function nt(e, t) {
  for (
    t &= ~Lo,
      t &= ~hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Ku(e) {
  if (j & 6) throw Error(g(327))
  qt()
  var t = Ur(e, 0)
  if (!(t & 1)) return he(e, Y()), null
  var n = rl(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = hi(e)
    r !== 0 && ((t = r), (n = Wi(e, r)))
  }
  if (n === 1) throw ((n = Zn), Ct(e, 0), nt(e, t), he(e, Y()), n)
  if (n === 6) throw Error(g(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, fe, Be),
    he(e, Y()),
    null
  )
}
function Mo(e, t) {
  var n = j
  j |= 1
  try {
    return e(t)
  } finally {
    ;(j = n), j === 0 && ((un = Y() + 500), fl && yt())
  }
}
function Rt(e) {
  lt !== null && lt.tag === 0 && !(j & 6) && qt()
  var t = j
  j |= 1
  var n = Ce.transition,
    r = I
  try {
    if (((Ce.transition = null), (I = 1), e)) return e()
  } finally {
    ;(I = r), (Ce.transition = n), (j = t), !(j & 6) && yt()
  }
}
function Oo() {
  ;(ve = Kt.current), $(Kt)
}
function Ct(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), td(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n
      switch ((po(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Hr()
          break
        case 3:
          ln(), $(pe), $(oe), So()
          break
        case 5:
          ko(r)
          break
        case 4:
          ln()
          break
        case 13:
          $(B)
          break
        case 19:
          $(B)
          break
        case 10:
          yo(r.type._context)
          break
        case 22:
        case 23:
          Oo()
      }
      n = n.return
    }
  if (
    ((b = e),
    (X = e = dt(e.current, null)),
    (te = ve = t),
    (Z = 0),
    (Zn = null),
    (Lo = hl = Lt = 0),
    (fe = Mn = null),
    Et !== null)
  ) {
    for (t = 0; t < Et.length; t++)
      if (((n = Et[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var l = r.next,
          i = n.pending
        if (i !== null) {
          var o = i.next
          ;(i.next = l), (r.next = o)
        }
        n.pending = r
      }
    Et = null
  }
  return e
}
function Ja(e, t) {
  do {
    var n = X
    try {
      if ((vo(), (zr.current = br), qr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue
          l !== null && (l.pending = null), (r = r.next)
        }
        qr = !1
      }
      if (
        ((Tt = 0),
        (q = G = V = null),
        (Ln = !1),
        (Yn = 0),
        (To.current = null),
        n === null || n.return === null)
      ) {
        ;(Z = 1), (Zn = t), (X = null)
        break
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            h = u,
            m = h.tag
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null))
          }
          var w = Ou(o)
          if (w !== null) {
            ;(w.flags &= -257),
              ju(w, o, u, i, t),
              w.mode & 1 && Mu(i, c, t),
              (t = w),
              (s = c)
            var x = t.updateQueue
            if (x === null) {
              var k = new Set()
              k.add(s), (t.updateQueue = k)
            } else x.add(s)
            break e
          } else {
            if (!(t & 1)) {
              Mu(i, c, t), jo()
              break e
            }
            s = Error(g(426))
          }
        } else if (A && u.mode & 1) {
          var U = Ou(o)
          if (U !== null) {
            !(U.flags & 65536) && (U.flags |= 256),
              ju(U, o, u, i, t),
              mo(on(s, u))
            break e
          }
        }
        ;(i = s = on(s, u)),
          Z !== 4 && (Z = 2),
          Mn === null ? (Mn = [i]) : Mn.push(i),
          (i = o)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var f = ja(i, s, t)
              Cu(i, f)
              break e
            case 1:
              u = s
              var a = i.type,
                d = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (ct === null || !ct.has(d))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var y = Ia(i, u, t)
                Cu(i, y)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      ec(n)
    } catch (E) {
      ;(t = E), X === n && n !== null && (X = n = n.return)
      continue
    }
    break
  } while (1)
}
function qa() {
  var e = el.current
  return (el.current = br), e === null ? br : e
}
function jo() {
  ;(Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    b === null || (!(Lt & 268435455) && !(hl & 268435455)) || nt(b, te)
}
function rl(e, t) {
  var n = j
  j |= 2
  var r = qa()
  ;(b !== e || te !== t) && ((Be = null), Ct(e, t))
  do
    try {
      _d()
      break
    } catch (l) {
      Ja(e, l)
    }
  while (1)
  if ((vo(), (j = n), (el.current = r), X !== null)) throw Error(g(261))
  return (b = null), (te = 0), Z
}
function _d() {
  for (; X !== null; ) ba(X)
}
function Pd() {
  for (; X !== null && !Jc(); ) ba(X)
}
function ba(e) {
  var t = nc(e.alternate, e, ve)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? ec(e) : (X = t),
    (To.current = null)
}
function ec(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xd(n, t)), n !== null)) {
        ;(n.flags &= 32767), (X = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Z = 6), (X = null)
        return
      }
    } else if (((n = wd(n, t, ve)), n !== null)) {
      X = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      X = t
      return
    }
    X = t = e
  } while (t !== null)
  Z === 0 && (Z = 5)
}
function kt(e, t, n) {
  var r = I,
    l = Ce.transition
  try {
    ;(Ce.transition = null), (I = 1), zd(e, t, n, r)
  } finally {
    ;(Ce.transition = l), (I = r)
  }
  return null
}
function zd(e, t, n, r) {
  do qt()
  while (lt !== null)
  if (j & 6) throw Error(g(327))
  n = e.finishedWork
  var l = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (sf(e, i),
    e === b && ((X = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wr ||
      ((wr = !0),
      rc($r, function () {
        return qt(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = Ce.transition), (Ce.transition = null)
    var o = I
    I = 1
    var u = j
    ;(j |= 4),
      (To.current = null),
      Sd(e, n),
      Xa(n, e),
      Xf(ki),
      (Ar = !!xi),
      (ki = xi = null),
      (e.current = n),
      Ed(n),
      qc(),
      (j = u),
      (I = o),
      (Ce.transition = i)
  } else e.current = n
  if (
    (wr && ((wr = !1), (lt = e), (nl = l)),
    (i = e.pendingLanes),
    i === 0 && (ct = null),
    tf(n.stateNode),
    he(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest })
  if (tl) throw ((tl = !1), (e = Bi), (Bi = null), e)
  return (
    nl & 1 && e.tag !== 0 && qt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Vi ? On++ : ((On = 0), (Vi = e))) : (On = 0),
    yt(),
    null
  )
}
function qt() {
  if (lt !== null) {
    var e = Os(nl),
      t = Ce.transition,
      n = I
    try {
      if (((Ce.transition = null), (I = 16 > e ? 16 : e), lt === null))
        var r = !1
      else {
        if (((e = lt), (lt = null), (nl = 0), j & 6)) throw Error(g(331))
        var l = j
        for (j |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child
          if (S.flags & 16) {
            var u = i.deletions
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s]
                for (S = c; S !== null; ) {
                  var h = S
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, h, i)
                  }
                  var m = h.child
                  if (m !== null) (m.return = h), (S = m)
                  else
                    for (; S !== null; ) {
                      h = S
                      var p = h.sibling,
                        w = h.return
                      if ((Qa(h), h === c)) {
                        S = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = w), (S = p)
                        break
                      }
                      S = w
                    }
                }
              }
              var x = i.alternate
              if (x !== null) {
                var k = x.child
                if (k !== null) {
                  x.child = null
                  do {
                    var U = k.sibling
                    ;(k.sibling = null), (k = U)
                  } while (k !== null)
                }
              }
              S = i
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o)
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rn(9, i, i.return)
                }
              var f = i.sibling
              if (f !== null) {
                ;(f.return = i.return), (S = f)
                break e
              }
              S = i.return
            }
        }
        var a = e.current
        for (S = a; S !== null; ) {
          o = S
          var d = o.child
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (S = d)
          else
            e: for (o = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, u)
                  }
                } catch (E) {
                  H(u, u.return, E)
                }
              if (u === o) {
                S = null
                break e
              }
              var y = u.sibling
              if (y !== null) {
                ;(y.return = u.return), (S = y)
                break e
              }
              S = u.return
            }
        }
        if (
          ((j = l), yt(), Ue && typeof Ue.onPostCommitFiberRoot == 'function')
        )
          try {
            Ue.onPostCommitFiberRoot(ol, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(I = n), (Ce.transition = t)
    }
  }
  return !1
}
function Yu(e, t, n) {
  ;(t = on(n, t)),
    (t = ja(e, t, 1)),
    (e = at(e, t, 1)),
    (t = se()),
    e !== null && (qn(e, 1, t), he(e, t))
}
function H(e, t, n) {
  if (e.tag === 3) Yu(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yu(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ct === null || !ct.has(r)))
        ) {
          ;(e = on(n, e)),
            (e = Ia(t, e, 1)),
            (t = at(t, e, 1)),
            (e = se()),
            t !== null && (qn(t, 1, e), he(t, e))
          break
        }
      }
      t = t.return
    }
}
function Td(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (Z === 4 || (Z === 3 && (te & 130023424) === te && 500 > Y() - Ro)
        ? Ct(e, 0)
        : (Lo |= n)),
    he(e, t)
}
function tc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ar), (ar <<= 1), !(ar & 130023424) && (ar = 4194304))
      : (t = 1))
  var n = se()
  ;(e = Ge(e, t)), e !== null && (qn(e, t, n), he(e, n))
}
function Ld(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), tc(e, n)
}
function Rd(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState
      l !== null && (n = l.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(g(314))
  }
  r !== null && r.delete(t), tc(e, n)
}
var nc
nc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), gd(e, t, n)
      de = !!(e.flags & 131072)
    }
  else (de = !1), A && t.flags & 1048576 && ia(t, Yr, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Lr(e, t), (e = t.pendingProps)
      var l = tn(t, oe.current)
      Jt(t, n), (l = No(null, t, r, e, l, n))
      var i = Co()
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((i = !0), Qr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            wo(t),
            (l.updater = dl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Li(t, r, e, n),
            (t = Oi(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && fo(t), ue(null, t, l, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Lr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Od(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = Mi(null, t, r, e, n)
            break e
          case 1:
            t = Fu(null, t, r, e, n)
            break e
          case 11:
            t = Iu(null, t, r, e, n)
            break e
          case 14:
            t = Du(null, t, r, Le(r.type, e), n)
            break e
        }
        throw Error(g(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Mi(e, t, r, l, n)
      )
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Fu(e, t, r, l, n)
      )
    case 3:
      e: {
        if ((Ua(t), e === null)) throw Error(g(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          aa(e, t),
          Zr(t, r, null, n)
        var o = t.memoizedState
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(l = on(Error(g(423)), t)), (t = $u(e, t, r, n, l))
            break e
          } else if (r !== l) {
            ;(l = on(Error(g(424)), t)), (t = $u(e, t, r, n, l))
            break e
          } else
            for (
              ye = st(t.stateNode.containerInfo.firstChild),
                ge = t,
                A = !0,
                Me = null,
                n = pa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((nn(), r === l)) {
            t = Ze(e, t, n)
            break e
          }
          ue(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        ma(t),
        e === null && Pi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Si(r, l) ? (o = null) : i !== null && Si(r, i) && (t.flags |= 32),
        $a(e, t),
        ue(e, t, o, n),
        t.child
      )
    case 6:
      return e === null && Pi(t), null
    case 13:
      return Aa(e, t, n)
    case 4:
      return (
        xo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Iu(e, t, r, l, n)
      )
    case 7:
      return ue(e, t, t.pendingProps, n), t.child
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          D(Xr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ie(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Ze(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies
              if (u !== null) {
                o = i.child
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      ;(s = Qe(-1, n & -n)), (s.tag = 2)
                      var c = i.updateQueue
                      if (c !== null) {
                        c = c.shared
                        var h = c.pending
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s)
                      }
                    }
                    ;(i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      zi(i.return, n, t),
                      (u.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(g(341))
                ;(o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  zi(o, n, t),
                  (o = i.sibling)
              } else o = i.child
              if (o !== null) o.return = i
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null
                    break
                  }
                  if (((i = o.sibling), i !== null)) {
                    ;(i.return = o.return), (o = i)
                    break
                  }
                  o = o.return
                }
              i = o
            }
        ue(e, t, l.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        Du(e, t, r, l, n)
      )
    case 15:
      return Da(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Lr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), Qr(t)) : (e = !1),
        Jt(t, n),
        fa(t, r, l),
        Li(t, r, l, n),
        Oi(null, t, r, !0, e, n)
      )
    case 19:
      return Ba(e, t, n)
    case 22:
      return Fa(e, t, n)
  }
  throw Error(g(156, t.tag))
}
function rc(e, t) {
  return Ts(e, t)
}
function Md(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Ne(e, t, n, r) {
  return new Md(e, t, n, r)
}
function Io(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Od(e) {
  if (typeof e == 'function') return Io(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === bi)) return 11
    if (e === eo) return 14
  }
  return 2
}
function dt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Or(e, t, n, r, l, i) {
  var o = 2
  if (((r = e), typeof e == 'function')) Io(e) && (o = 1)
  else if (typeof e == 'string') o = 5
  else
    e: switch (e) {
      case Dt:
        return _t(n.children, l, i, t)
      case qi:
        ;(o = 8), (l |= 8)
        break
      case ei:
        return (e = Ne(12, n, t, l | 2)), (e.elementType = ei), (e.lanes = i), e
      case ti:
        return (e = Ne(13, n, t, l)), (e.elementType = ti), (e.lanes = i), e
      case ni:
        return (e = Ne(19, n, t, l)), (e.elementType = ni), (e.lanes = i), e
      case ds:
        return vl(n, l, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case cs:
              o = 10
              break e
            case fs:
              o = 9
              break e
            case bi:
              o = 11
              break e
            case eo:
              o = 14
              break e
            case be:
              ;(o = 16), (r = null)
              break e
          }
        throw Error(g(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Ne(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  )
}
function _t(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e
}
function vl(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = ds),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Xl(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e
}
function Gl(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function jd(e, t, n, r, l) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Tl(0)),
    (this.expirationTimes = Tl(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = Tl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null)
}
function Do(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new jd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ne(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wo(i),
    e
  )
}
function Id(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: It,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function lc(e) {
  if (!e) return mt
  e = e._reactInternals
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(g(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(g(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (me(n)) return ra(e, n, t)
  }
  return t
}
function ic(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Do(n, r, !0, e, l, i, o, u, s)),
    (e.context = lc(null)),
    (n = e.current),
    (r = se()),
    (l = ft(n)),
    (i = Qe(r, l)),
    (i.callback = t ?? null),
    at(n, i, l),
    (e.current.lanes = l),
    qn(e, l, r),
    he(e, r),
    e
  )
}
function yl(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = ft(l)
  return (
    (n = lc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, o)),
    e !== null && (je(e, l, o, i), Pr(e, l, o)),
    o
  )
}
function ll(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Xu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Fo(e, t) {
  Xu(e, t), (e = e.alternate) && Xu(e, t)
}
function Dd() {
  return null
}
var oc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function $o(e) {
  this._internalRoot = e
}
gl.prototype.render = $o.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(g(409))
  yl(e, t, null, null)
}
gl.prototype.unmount = $o.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Rt(function () {
      yl(null, e, null, null)
    }),
      (t[Xe] = null)
  }
}
function gl(e) {
  this._internalRoot = e
}
gl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ds()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && $s(e)
  }
}
function Uo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Gu() {}
function Fd(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var c = ll(o)
        i.call(c)
      }
    }
    var o = ic(t, r, e, 0, null, !1, !1, '', Gu)
    return (
      (e._reactRootContainer = o),
      (e[Xe] = o.current),
      Vn(e.nodeType === 8 ? e.parentNode : e),
      Rt(),
      o
    )
  }
  for (; (l = e.lastChild); ) e.removeChild(l)
  if (typeof r == 'function') {
    var u = r
    r = function () {
      var c = ll(s)
      u.call(c)
    }
  }
  var s = Do(e, 0, !1, null, null, !1, !1, '', Gu)
  return (
    (e._reactRootContainer = s),
    (e[Xe] = s.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    Rt(function () {
      yl(t, s, n, r)
    }),
    s
  )
}
function xl(e, t, n, r, l) {
  var i = n._reactRootContainer
  if (i) {
    var o = i
    if (typeof l == 'function') {
      var u = l
      l = function () {
        var s = ll(o)
        u.call(s)
      }
    }
    yl(t, o, e, l)
  } else o = Fd(n, t, e, l, r)
  return ll(o)
}
js = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = En(t.pendingLanes)
        n !== 0 &&
          (ro(t, n | 1), he(t, Y()), !(j & 6) && ((un = Y() + 500), yt()))
      }
      break
    case 13:
      Rt(function () {
        var r = Ge(e, 1)
        if (r !== null) {
          var l = se()
          je(r, e, 1, l)
        }
      }),
        Fo(e, 1)
  }
}
lo = function (e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728)
    if (t !== null) {
      var n = se()
      je(t, e, 134217728, n)
    }
    Fo(e, 134217728)
  }
}
Is = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Ge(e, t)
    if (n !== null) {
      var r = se()
      je(n, e, t, r)
    }
    Fo(e, t)
  }
}
Ds = function () {
  return I
}
Fs = function (e, t) {
  var n = I
  try {
    return (I = e), t()
  } finally {
    I = n
  }
}
di = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ii(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var l = cl(r)
            if (!l) throw Error(g(90))
            ms(r), ii(r, l)
          }
        }
      }
      break
    case 'textarea':
      vs(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Yt(e, !!n.multiple, t, !1)
  }
}
Es = Mo
Ns = Rt
var $d = { usingClientEntryPoint: !1, Events: [er, At, cl, ks, Ss, Mo] },
  xn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Ud = {
    bundleType: xn.bundleType,
    version: xn.version,
    rendererPackageName: xn.rendererPackageName,
    rendererConfig: xn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ps(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: xn.findFiberByHostInstance || Dd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!xr.isDisabled && xr.supportsFiber)
    try {
      ;(ol = xr.inject(Ud)), (Ue = xr)
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Uo(t)) throw Error(g(200))
  return Id(e, t, null, n)
}
xe.createRoot = function (e, t) {
  if (!Uo(e)) throw Error(g(299))
  var n = !1,
    r = '',
    l = oc
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Do(e, 1, !1, null, null, n, !1, r, l)),
    (e[Xe] = t.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    new $o(t)
  )
}
xe.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(g(188))
      : ((e = Object.keys(e).join(',')), Error(g(268, e)))
  return (e = Ps(t)), (e = e === null ? null : e.stateNode), e
}
xe.flushSync = function (e) {
  return Rt(e)
}
xe.hydrate = function (e, t, n) {
  if (!wl(t)) throw Error(g(200))
  return xl(null, e, t, !0, n)
}
xe.hydrateRoot = function (e, t, n) {
  if (!Uo(e)) throw Error(g(405))
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = oc
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ic(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Xe] = t.current),
    Vn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l)
  return new gl(t)
}
xe.render = function (e, t, n) {
  if (!wl(t)) throw Error(g(200))
  return xl(null, e, t, !1, n)
}
xe.unmountComponentAtNode = function (e) {
  if (!wl(e)) throw Error(g(40))
  return e._reactRootContainer
    ? (Rt(function () {
        xl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Xe] = null)
        })
      }),
      !0)
    : !1
}
xe.unstable_batchedUpdates = Mo
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wl(n)) throw Error(g(200))
  if (e == null || e._reactInternals === void 0) throw Error(g(38))
  return xl(e, t, n, !1, r)
}
xe.version = '18.2.0-next-9e3b772b8-20220608'
;(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (n) {
        console.error(n)
      }
  }
  t(), (e.exports = xe)
})(Ic)
var Zu = Jl
;(Zl.createRoot = Zu.createRoot), (Zl.hydrateRoot = Zu.hydrateRoot)
const z = {
    boxWidth: 'xl:max-w-[1280px] w-full',
    heading2:
      'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
    paragraph:
      'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',
    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-center items-start',
    paddingX: 'sm:px-16 px-6',
    paddingY: 'sm:py-16 py-6',
    padding: 'sm:px-16 px-6 sm:py-12 py-4',
    marginX: 'sm:mx-16 mx-6',
    marginY: 'sm:my-16 my-6',
  },
  Ke = {
    section: `flex md:flex-row flex-col ${z.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${z.paddingY}`,
    sectionImgReverse: `flex-1 flex ${z.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${z.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionInfo: `flex-1 ${z.flexStart} flex-col`,
  },
  Ad = './assets/airbnb-ac0ba47e.png',
  Bd = './assets/bill-fd47dad8.png',
  Vd = './assets/binance-ef218256.png',
  Wd = './assets/card-af071def.png',
  Hd = './assets/coinbase-fd06c89f.png',
  Qd = './assets/dropbox-fb49a0e9.png',
  uc = './assets/logo-efc6c435.svg',
  Kd = './assets/quotes-a87d5e6d.svg',
  Yd = './assets/robot-352cd501.png',
  Xd = './assets/Send-454b3199.svg',
  Gd = './assets/Shield-6d9e87e5.svg',
  Zd = './assets/Star-b8bf87ea.svg',
  Jd = './assets/menu-e0613cf3.svg',
  qd = './assets/close-945782e8.svg',
  bd = './assets/google-3035153f.svg',
  ep = './assets/apple-994d47a8.svg',
  tp = './assets/arrow-up-012ff21b.svg',
  np = './assets/Discount-61d9dc08.svg',
  rp = './assets/facebook-b1172216.svg',
  lp = './assets/instagram-a54e883a.svg',
  ip = './assets/linkedin-3be30c66.svg',
  op = './assets/twitter-8f349e28.svg',
  up = './assets/people01-a772086b.png',
  sp = './assets/people02-ee8ce82b.png',
  ap = './assets/people03-d9f4f98a.png',
  kr = [
    { id: 'home', title: 'Home' },
    { id: 'features', title: 'Features' },
    { id: 'product', title: 'Product' },
    { id: 'clients', title: 'Clients' },
  ],
  sc = [
    {
      id: 'feature-1',
      icon: Zd,
      title: 'Rewards',
      content:
        'The best credit cards offer some tantalizing combinations of promotions and prizes',
    },
    {
      id: 'feature-2',
      icon: Gd,
      title: '100% Secured',
      content:
        'We take proactive steps make sure your information and transactions are secure.',
    },
    {
      id: 'feature-3',
      icon: Xd,
      title: 'Balance Transfer',
      content:
        'A balance transfer credit card can save you a lot of money in interest charges.',
    },
  ],
  cp = [
    {
      id: 'feedback-1',
      content:
        'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      name: 'Herman Jensen',
      title: 'Founder & Leader',
      img: up,
    },
    {
      id: 'feedback-2',
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: 'Steve Mark',
      title: 'Founder & Leader',
      img: sp,
    },
    {
      id: 'feedback-3',
      content:
        'It is usually people in the money business, finance, and international trade that are really rich.',
      name: 'Kenn Gallagher',
      title: 'Founder & Leader',
      img: ap,
    },
  ],
  fp = [
    { id: 'stats-1', title: 'User Active', value: '3800+' },
    { id: 'stats-2', title: 'Trusted by Company', value: '230+' },
    { id: 'stats-3', title: 'Transaction', value: '$230M+' },
  ],
  dp = [
    {
      title: 'Useful Links',
      links: [
        { name: 'Content', link: 'https://www.hoobank.com/content/' },
        { name: 'How it Works', link: 'https://www.hoobank.com/how-it-works/' },
        { name: 'Create', link: 'https://www.hoobank.com/create/' },
        { name: 'Explore', link: 'https://www.hoobank.com/explore/' },
        {
          name: 'Terms & Services',
          link: 'https://www.hoobank.com/terms-and-services/',
        },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Help Center', link: 'https://www.hoobank.com/help-center/' },
        { name: 'Partners', link: 'https://www.hoobank.com/partners/' },
        { name: 'Suggestions', link: 'https://www.hoobank.com/suggestions/' },
        { name: 'Blog', link: 'https://www.hoobank.com/blog/' },
        { name: 'Newsletters', link: 'https://www.hoobank.com/newsletters/' },
      ],
    },
    {
      title: 'Partner',
      links: [
        { name: 'Our Partner', link: 'https://www.hoobank.com/our-partner/' },
        {
          name: 'Become a Partner',
          link: 'https://www.hoobank.com/become-a-partner/',
        },
      ],
    },
  ],
  Ju = [
    { id: 'social-media-1', icon: lp, link: 'https://www.instagram.com/' },
    { id: 'social-media-2', icon: rp, link: 'https://www.facebook.com/' },
    { id: 'social-media-3', icon: op, link: 'https://www.twitter.com/' },
    { id: 'social-media-4', icon: ip, link: 'https://www.linkedin.com/' },
  ],
  pp = [
    { id: 'client-1', logo: Ad },
    { id: 'client-2', logo: Vd },
    { id: 'client-3', logo: Hd },
    { id: 'client-4', logo: Qd },
  ],
  mp = () => {
    const [e, t] = bt.useState(!1)
    return L('nav', {
      className: 'w-full flex py-6 justify-between items-center navbar',
      children: [
        v('img', { src: uc, alt: 'logo', className: 'w-[124px] h-[32px]' }),
        v('ul', {
          className: 'list-none sm:flex hidden justify-end items-center flex-1',
          children: kr.map((n, r) =>
            v(
              'li',
              {
                className: `font-poppins font-normal cursor-pointer text-[16px]
             ${r === kr.length - 1 ? 'mr-0' : 'mr-10'} text-white`,
                children: v('a', { href: `#${n.id}`, children: n.title }),
              },
              n.id,
            ),
          ),
        }),
        L('div', {
          className: 'sm:hidden flex flex-1 justify-end items-center',
          children: [
            v('img', {
              src: e ? qd : Jd,
              alt: 'menu',
              className: 'w-[28px] h-[28px] object-contain',
              onClick: () => t((n) => !n),
            }),
            v('div', {
              className: `${
                e ? 'flex' : 'hidden'
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4
            my-2 min-w-[140px] rounded-xl sidebar`,
              children: v('ul', {
                className:
                  'list-none flex flex-col justify-end items-center flex-1',
                children: kr.map((n, r) =>
                  v(
                    'li',
                    {
                      className: `font-poppins font-normal cursor-pointer text-[16px]
                  ${r === kr.length - 1 ? 'mr-0' : 'mb-4'} text-white`,
                      children: v('a', { href: `#${n.id}`, children: n.title }),
                    },
                    n.id,
                  ),
                ),
              }),
            }),
          ],
        }),
      ],
    })
  },
  hp = () =>
    L('section', {
      id: 'product',
      className: Ke.sectionReverse,
      children: [
        L('div', {
          className: Ke.sectionImgReverse,
          children: [
            v('img', {
              src: Bd,
              alt: 'billing',
              className: 'w-[100%] h-[100%] relative z-[5]',
            }),
            v('div', {
              className:
                'absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient',
            }),
            v('div', {
              className:
                'absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient',
            }),
          ],
        }),
        L('div', {
          className: Ke.sectionInfo,
          children: [
            L('h2', {
              className: z.heading2,
              children: [
                'Easily control your',
                v('br', { className: 'sm:block hidden' }),
                ' billing & invoicing.',
              ],
            }),
            v('p', {
              className: `${z.paragraph} max-w-[470px] mt-5`,
              children:
                'Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus liporttitor integer platea placerat.',
            }),
            L('div', {
              className: 'flex flex-row flex-wrap sm:mt-10 mt-6',
              children: [
                v('img', {
                  src: ep,
                  alt: 'apple store',
                  className:
                    'w-[128px] h-[42px] object-contain mr-5 cursor-pointer',
                }),
                v('img', {
                  src: bd,
                  alt: 'google play',
                  className: 'w-[128px] h-[42px] object-contain cursor-pointer',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Ao = ({ styles: e }) =>
    v('button', {
      type: 'button',
      className: `py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${e} rounded-[10px]`,
      children: 'Get Started',
    }),
  vp = () =>
    L('section', {
      className: Ke.section,
      children: [
        L('div', {
          className: Ke.sectionInfo,
          children: [
            L('h2', {
              className: z.heading2,
              children: [
                'Find a better card deal',
                v('br', { className: 'sm:block hidden' }),
                ' in few easy steps.',
              ],
            }),
            v('p', {
              className: `${z.paragraph} max-w-[470px] mt-5`,
              children:
                'Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.',
            }),
            v(Ao, { styles: 'mt-10' }),
          ],
        }),
        v('div', {
          className: Ke.sectionImg,
          children: v('img', {
            src: Wd,
            alt: 'card',
            className: 'w-[100%] h-[100%]',
          }),
        }),
      ],
    }),
  yp = ({ icon: e, title: t, content: n, index: r }) =>
    L('div', {
      className: `flex flex-row p-6 rounded-[20px] ${
        r !== sc.length - 1 ? 'mb-6' : 'mb-0'
      } feature-card`,
      children: [
        v('div', {
          className: `w-[64px] h-[64px] rounded-full ${z.flexCenter} bg-dimBlue`,
          children: v('img', {
            src: e,
            alt: 'icon',
            className: 'w-[50%] h-[50%] object-contain',
          }),
        }),
        L('div', {
          className: 'flex-1 flex flex-col ml-3',
          children: [
            v('h4', {
              className:
                'font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1',
              children: t,
            }),
            v('p', {
              className:
                'font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1',
              children: n,
            }),
          ],
        }),
      ],
    }),
  gp = () =>
    L('section', {
      id: 'features',
      className: Ke.section,
      children: [
        L('div', {
          className: Ke.sectionInfo,
          children: [
            L('h2', {
              className: z.heading2,
              children: [
                'You do the business,',
                v('br', { className: 'sm:block hidden' }),
                ' we’ll handle the money.',
              ],
            }),
            v('p', {
              className: `${z.paragraph} max-w-[470px] mt-5`,
              children:
                'With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.',
            }),
            v(Ao, { styles: 'mt-10' }),
          ],
        }),
        v('div', {
          className: `${Ke.sectionImg} flex-col`,
          children: sc.map((e, t) => v(yp, { ...e, index: t }, e.id)),
        }),
      ],
    }),
  wp = () =>
    v('section', {
      className: `${z.flexCenter} my-4`,
      children: v('div', {
        className: `${z.flexCenter} flex-wrap w-full`,
        children: pp.map((e) =>
          v(
            'div',
            {
              className: `flex-1 ${z.flexCenter} sm:min-w-[192px] min-w[120px]`,
              children: v('img', {
                src: e.logo,
                alt: 'client',
                className: 'sm:w-[192px] w-[100px] object-contain',
              }),
            },
            e.id,
          ),
        ),
      }),
    }),
  xp = () =>
    L('section', {
      className: `${z.flexCenter} ${z.marginY} ${z.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`,
      children: [
        L('div', {
          className: 'flex-1 flex flex-col',
          children: [
            v('h2', {
              className: z.heading2,
              children: 'Let’s try our service now!',
            }),
            v('p', {
              className: `${z.paragraph} max-w-[470px] mt-5`,
              children:
                'Everything you need to accept card payments and grow your business anywhere on the planet.',
            }),
          ],
        }),
        v('div', {
          className: `${z.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`,
          children: v(Ao, {}),
        }),
      ],
    }),
  kp = () =>
    v('section', {
      className: `${z.flexCenter} flex-row flex-wrap sm:mb-20 md-6`,
      children: fp.map((e) =>
        L(
          'div',
          {
            className: 'flex-1 flex items-center justify-start flex-row m-3',
            children: [
              v('h4', {
                className:
                  'font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white',
                children: e.value,
              }),
              v('p', {
                className:
                  'font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3',
                children: e.title,
              }),
            ],
          },
          e.id,
        ),
      ),
    }),
  Sp = () =>
    L('section', {
      className: `${z.flexCenter} ${z.paddingY} flex-col`,
      children: [
        L('div', {
          className: `${z.flexStart} md:flex-row flex-col mb-8 w-full`,
          children: [
            L('div', {
              className: 'flex-1 flex flex-col justify-start mr-10',
              children: [
                v('img', {
                  src: uc,
                  alt: 'hoobank',
                  className: 'w-[266px] h-[72px] object-contain',
                }),
                v('p', {
                  className: `${z.paragraph} mt-4 maw-w-[310px]`,
                  children:
                    'A new way to make the payments easy, reliable and secure.',
                }),
              ],
            }),
            v('div', {
              className:
                'flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10',
              children: dp.map((e) =>
                L(
                  'div',
                  {
                    className: 'flex flex-col ss:my-0 my-4 min-w-[150px]',
                    children: [
                      v('h4', {
                        className:
                          'font-poppins font-medium text-[18px] leading-[27px] text-white',
                        children: e.title,
                      }),
                      v('ul', {
                        className: 'list-none mt-4',
                        children: e.links.map((t, n) =>
                          v(
                            'li',
                            {
                              className: `font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
              ${n !== e.links.length - 1 ? 'mb-4' : 'mb-0'}`,
                              children: t.name,
                            },
                            t.name,
                          ),
                        ),
                      }),
                    ],
                  },
                  e.key,
                ),
              ),
            }),
          ],
        }),
        L('div', {
          className:
            'w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]',
          children: [
            v('p', {
              className:
                'font-poppins font-normal text-[18px] text-center leading-[27px] text-white',
              children: '2021 HooBank. All Rights Reserved.',
            }),
            v('div', {
              className: 'flex flex-row mt-6',
              children: Ju.map((e, t) =>
                v(
                  'img',
                  {
                    src: e.icon,
                    alt: e.id,
                    className: `w-[21px] h-[21px] object-contain cursor-pointer ${
                      t !== Ju.length - 1 ? 'mr-6' : 'mr-0'
                    }`,
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  Ep = ({ content: e, name: t, title: n, img: r }) =>
    L('div', {
      className:
        'flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr_10 sm:mr-5 mr-0 my-5 feedback-card',
      children: [
        v('img', {
          src: Kd,
          alt: 'double_quotes',
          className: 'w-[42px] h-[27px] object-contain',
        }),
        v('p', {
          className:
            'font-poppins font-normal text-[18px] leading-[32px] text-white my-10',
          children: e,
        }),
        L('div', {
          className: 'flex flex-row',
          children: [
            v('img', {
              src: r,
              alt: t,
              className: 'w-[48px] h-[48px] rounded-full',
            }),
            L('div', {
              className: 'flex flex-col ml-4',
              children: [
                v('h4', {
                  className:
                    'font-poppins font-semibold text-[20px] leading-[32px] text-white',
                  children: t,
                }),
                v('p', {
                  className:
                    'font-poppins font-normal text-[16px] leading-[24px] text-dimWhite',
                  children: n,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Np = () =>
    L('section', {
      id: 'clients',
      className: `${z.paddingY} ${z.flexCenter} flex-col relative`,
      children: [
        v('div', {
          className:
            'absolute z-[0] w-[60%] h-[60%] h-[60%] -right-[50%] rounded-full blue__gradient',
        }),
        L('div', {
          className:
            'w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]',
          children: [
            L('h1', {
              className: z.heading2,
              children: [
                'What people are ',
                v('br', { className: 'sm:block hidden' }),
                'saying about us',
              ],
            }),
            v('div', {
              className: 'w-full md:mt-0 mt-6',
              children: v('p', {
                className: `${z.paragraph} text-left max-w-[450px]`,
                children:
                  'Everything you need to accept card payments and grow your business anywhere on the planet.',
              }),
            }),
          ],
        }),
        v('div', {
          className:
            'flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]',
          children: cp.map((e) => v(Ep, { ...e }, e.id)),
        }),
      ],
    }),
  qu = () =>
    v('div', {
      className: `${z.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`,
      children: L('div', {
        className: `${z.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`,
        children: [
          L('div', {
            className: `${z.flexStart} flex-row`,
            children: [
              v('p', {
                className:
                  'font-poppins font-medium text-[18px] leading-[23px] mr-2',
                children: v('span', {
                  className: 'text-gradient',
                  children: 'Get',
                }),
              }),
              v('img', {
                src: tp,
                alt: 'arrow',
                className: 'w-[23px] h-[23px] object-contain',
              }),
            ],
          }),
          v('p', {
            className: 'font-poppins font-medium text-[18px] leading-[23px]',
            children: v('span', {
              className: 'text-gradient',
              children: 'Started',
            }),
          }),
        ],
      }),
    }),
  Cp = () =>
    L('section', {
      id: 'home',
      className: `flex md:flex-row flex-col ${z.paddingY}`,
      children: [
        L('div', {
          className: `flex-1 ${z.flexStart} flex-col xl:px-0 sm:px-16 px-6`,
          children: [
            L('div', {
              className:
                'flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2',
              children: [
                v('img', {
                  src: np,
                  alt: 'discount',
                  className: 'w-[32px] h-[32px]',
                }),
                L('p', {
                  className: `${z.paragraph} ml-2`,
                  children: [
                    v('span', { className: 'text-white', children: '20%' }),
                    ' Discount For',
                    v('span', {
                      className: 'text-white',
                      children: ' 1 Month',
                    }),
                    ' Account',
                  ],
                }),
              ],
            }),
            L('div', {
              className: 'flex flex-row justify-between items-center w-full',
              children: [
                L('h1', {
                  className:
                    'flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]',
                  children: [
                    'The Next ',
                    v('br', { className: 'sm:block hidden' }),
                    ' ',
                    L('span', {
                      className: 'text-gradient',
                      children: ['Generation', v('br', {})],
                    }),
                    ' ',
                  ],
                }),
                v('div', {
                  className: 'ss:flex hidden md:mr-4 mr-0',
                  children: v(qu, {}),
                }),
              ],
            }),
            v('h1', {
              className:
                'flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full',
              children: 'Payment Method',
            }),
            v('p', {
              className: `${z.paragraph} max-w-[470px] mt-5`,
              children:
                'Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.',
            }),
          ],
        }),
        L('div', {
          className: `flex flex-1 ${z.flexCenter} md:my-0 my-10 relative`,
          children: [
            v('img', {
              src: Yd,
              alt: 'billing',
              className: 'w-[100%] h-[100%] relative z-[5]',
            }),
            v('div', {
              className: 'absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient',
            }),
            v('div', {
              className:
                'absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient',
            }),
            v('div', {
              className:
                'absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient',
            }),
          ],
        }),
        v('div', {
          className: `ss:hidden ${z.flexCenter}`,
          children: v(qu, {}),
        }),
      ],
    }),
  _p = () =>
    L('div', {
      className: ' w-full bg-primary overflow-hidden',
      children: [
        v('div', {
          className: `${z.paddingX} ${z.flexCenter}`,
          children: v('div', {
            className: `${z.boxWidth}`,
            children: v(mp, {}),
          }),
        }),
        v('div', {
          className: `bg-primary ${z.flexStart}`,
          children: v('div', {
            className: `${z.boxWidth}`,
            children: v(Cp, {}),
          }),
        }),
        v('div', {
          className: `bg-primary ${z.paddingX} ${z.flexStart}`,
          children: L('div', {
            className: `${z.boxWidth}`,
            children: [
              v(kp, {}),
              v(gp, {}),
              v(hp, {}),
              v(vp, {}),
              v(Np, {}),
              v(wp, {}),
              v(xp, {}),
              v(Sp, {}),
            ],
          }),
        }),
      ],
    })
Zl.createRoot(document.getElementById('root')).render(
  v(zc.StrictMode, { children: v(_p, {}) }),
)
