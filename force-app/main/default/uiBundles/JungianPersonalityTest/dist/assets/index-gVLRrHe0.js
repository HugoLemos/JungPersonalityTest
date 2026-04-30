function rb(l, i) {
  for (var s = 0; s < i.length; s++) {
    const u = i[s];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const c in u)
        if (c !== "default" && !(c in l)) {
          const f = Object.getOwnPropertyDescriptor(u, c);
          f &&
            Object.defineProperty(
              l,
              c,
              f.get ? f : { enumerable: !0, get: () => u[c] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(l, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === "childList")
        for (const m of f.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && u(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = s(c);
    fetch(c.href, f);
  }
})();
function ob(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var Dc = { exports: {} },
  Sr = {};
var sp;
function ub() {
  if (sp) return Sr;
  sp = 1;
  var l = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function s(u, c, f) {
    var m = null;
    if (
      (f !== void 0 && (m = "" + f),
      c.key !== void 0 && (m = "" + c.key),
      "key" in c)
    ) {
      f = {};
      for (var g in c) g !== "key" && (f[g] = c[g]);
    } else f = c;
    return (
      (c = f.ref),
      { $$typeof: l, type: u, key: m, ref: c !== void 0 ? c : null, props: f }
    );
  }
  return ((Sr.Fragment = i), (Sr.jsx = s), (Sr.jsxs = s), Sr);
}
var cp;
function sb() {
  return (cp || ((cp = 1), (Dc.exports = ub())), Dc.exports);
}
var _ = sb(),
  zc = { exports: {} },
  De = {};
var fp;
function cb() {
  if (fp) return De;
  fp = 1;
  var l = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    m = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    N = Symbol.iterator;
  function w(R) {
    return R === null || typeof R != "object"
      ? null
      : ((R = (N && R[N]) || R["@@iterator"]),
        typeof R == "function" ? R : null);
  }
  var j = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    k = Object.assign,
    O = {};
  function $(R, Y, Z) {
    ((this.props = R),
      (this.context = Y),
      (this.refs = O),
      (this.updater = Z || j));
  }
  (($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (R, Y) {
      if (typeof R != "object" && typeof R != "function" && R != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, R, Y, "setState");
    }),
    ($.prototype.forceUpdate = function (R) {
      this.updater.enqueueForceUpdate(this, R, "forceUpdate");
    }));
  function W() {}
  W.prototype = $.prototype;
  function F(R, Y, Z) {
    ((this.props = R),
      (this.context = Y),
      (this.refs = O),
      (this.updater = Z || j));
  }
  var ie = (F.prototype = new W());
  ((ie.constructor = F), k(ie, $.prototype), (ie.isPureReactComponent = !0));
  var he = Array.isArray;
  function Se() {}
  var P = { H: null, A: null, T: null, S: null },
    E = Object.prototype.hasOwnProperty;
  function ee(R, Y, Z) {
    var re = Z.ref;
    return {
      $$typeof: l,
      type: R,
      key: Y,
      ref: re !== void 0 ? re : null,
      props: Z
    };
  }
  function Ae(R, Y) {
    return ee(R.type, Y, R.props);
  }
  function Re(R) {
    return typeof R == "object" && R !== null && R.$$typeof === l;
  }
  function Ee(R) {
    var Y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      R.replace(/[=:]/g, function (Z) {
        return Y[Z];
      })
    );
  }
  var ze = /\/+/g;
  function Xe(R, Y) {
    return typeof R == "object" && R !== null && R.key != null
      ? Ee("" + R.key)
      : Y.toString(36);
  }
  function fe(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (
          (typeof R.status == "string"
            ? R.then(Se, Se)
            : ((R.status = "pending"),
              R.then(
                function (Y) {
                  R.status === "pending" &&
                    ((R.status = "fulfilled"), (R.value = Y));
                },
                function (Y) {
                  R.status === "pending" &&
                    ((R.status = "rejected"), (R.reason = Y));
                }
              )),
          R.status)
        ) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function z(R, Y, Z, re, ne) {
    var de = typeof R;
    (de === "undefined" || de === "boolean") && (R = null);
    var Ne = !1;
    if (R === null) Ne = !0;
    else
      switch (de) {
        case "bigint":
        case "string":
        case "number":
          Ne = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case l:
            case i:
              Ne = !0;
              break;
            case b:
              return ((Ne = R._init), z(Ne(R._payload), Y, Z, re, ne));
          }
      }
    if (Ne)
      return (
        (ne = ne(R)),
        (Ne = re === "" ? "." + Xe(R, 0) : re),
        he(ne)
          ? ((Z = ""),
            Ne != null && (Z = Ne.replace(ze, "$&/") + "/"),
            z(ne, Y, Z, "", function (Wt) {
              return Wt;
            }))
          : ne != null &&
            (Re(ne) &&
              (ne = Ae(
                ne,
                Z +
                  (ne.key == null || (R && R.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(ze, "$&/") + "/") +
                  Ne
              )),
            Y.push(ne)),
        1
      );
    Ne = 0;
    var Je = re === "" ? "." : re + ":";
    if (he(R))
      for (var Me = 0; Me < R.length; Me++)
        ((re = R[Me]), (de = Je + Xe(re, Me)), (Ne += z(re, Y, Z, de, ne)));
    else if (((Me = w(R)), typeof Me == "function"))
      for (R = Me.call(R), Me = 0; !(re = R.next()).done; )
        ((re = re.value),
          (de = Je + Xe(re, Me++)),
          (Ne += z(re, Y, Z, de, ne)));
    else if (de === "object") {
      if (typeof R.then == "function") return z(fe(R), Y, Z, re, ne);
      throw (
        (Y = String(R)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Y === "[object Object]"
              ? "object with keys {" + Object.keys(R).join(", ") + "}"
              : Y) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    }
    return Ne;
  }
  function J(R, Y, Z) {
    if (R == null) return R;
    var re = [],
      ne = 0;
    return (
      z(R, re, "", "", function (de) {
        return Y.call(Z, de, ne++);
      }),
      re
    );
  }
  function ce(R) {
    if (R._status === -1) {
      var Y = R._result;
      ((Y = Y()),
        Y.then(
          function (Z) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 1), (R._result = Z));
          },
          function (Z) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 2), (R._result = Z));
          }
        ),
        R._status === -1 && ((R._status = 0), (R._result = Y)));
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var pe =
      typeof reportError == "function"
        ? reportError
        : function (R) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var Y = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof R == "object" &&
                  R !== null &&
                  typeof R.message == "string"
                    ? String(R.message)
                    : String(R),
                error: R
              });
              if (!window.dispatchEvent(Y)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", R);
              return;
            }
            console.error(R);
          },
    te = {
      map: J,
      forEach: function (R, Y, Z) {
        J(
          R,
          function () {
            Y.apply(this, arguments);
          },
          Z
        );
      },
      count: function (R) {
        var Y = 0;
        return (
          J(R, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (R) {
        return (
          J(R, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (R) {
        if (!Re(R))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return R;
      }
    };
  return (
    (De.Activity = v),
    (De.Children = te),
    (De.Component = $),
    (De.Fragment = s),
    (De.Profiler = c),
    (De.PureComponent = F),
    (De.StrictMode = u),
    (De.Suspense = p),
    (De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (De.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (R) {
        return P.H.useMemoCache(R);
      }
    }),
    (De.cache = function (R) {
      return function () {
        return R.apply(null, arguments);
      };
    }),
    (De.cacheSignal = function () {
      return null;
    }),
    (De.cloneElement = function (R, Y, Z) {
      if (R == null)
        throw Error(
          "The argument must be a React element, but you passed " + R + "."
        );
      var re = k({}, R.props),
        ne = R.key;
      if (Y != null)
        for (de in (Y.key !== void 0 && (ne = "" + Y.key), Y))
          !E.call(Y, de) ||
            de === "key" ||
            de === "__self" ||
            de === "__source" ||
            (de === "ref" && Y.ref === void 0) ||
            (re[de] = Y[de]);
      var de = arguments.length - 2;
      if (de === 1) re.children = Z;
      else if (1 < de) {
        for (var Ne = Array(de), Je = 0; Je < de; Je++)
          Ne[Je] = arguments[Je + 2];
        re.children = Ne;
      }
      return ee(R.type, ne, re);
    }),
    (De.createContext = function (R) {
      return (
        (R = {
          $$typeof: m,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }),
        (R.Provider = R),
        (R.Consumer = { $$typeof: f, _context: R }),
        R
      );
    }),
    (De.createElement = function (R, Y, Z) {
      var re,
        ne = {},
        de = null;
      if (Y != null)
        for (re in (Y.key !== void 0 && (de = "" + Y.key), Y))
          E.call(Y, re) &&
            re !== "key" &&
            re !== "__self" &&
            re !== "__source" &&
            (ne[re] = Y[re]);
      var Ne = arguments.length - 2;
      if (Ne === 1) ne.children = Z;
      else if (1 < Ne) {
        for (var Je = Array(Ne), Me = 0; Me < Ne; Me++)
          Je[Me] = arguments[Me + 2];
        ne.children = Je;
      }
      if (R && R.defaultProps)
        for (re in ((Ne = R.defaultProps), Ne))
          ne[re] === void 0 && (ne[re] = Ne[re]);
      return ee(R, de, ne);
    }),
    (De.createRef = function () {
      return { current: null };
    }),
    (De.forwardRef = function (R) {
      return { $$typeof: g, render: R };
    }),
    (De.isValidElement = Re),
    (De.lazy = function (R) {
      return { $$typeof: b, _payload: { _status: -1, _result: R }, _init: ce };
    }),
    (De.memo = function (R, Y) {
      return { $$typeof: h, type: R, compare: Y === void 0 ? null : Y };
    }),
    (De.startTransition = function (R) {
      var Y = P.T,
        Z = {};
      P.T = Z;
      try {
        var re = R(),
          ne = P.S;
        (ne !== null && ne(Z, re),
          typeof re == "object" &&
            re !== null &&
            typeof re.then == "function" &&
            re.then(Se, pe));
      } catch (de) {
        pe(de);
      } finally {
        (Y !== null && Z.types !== null && (Y.types = Z.types), (P.T = Y));
      }
    }),
    (De.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (De.use = function (R) {
      return P.H.use(R);
    }),
    (De.useActionState = function (R, Y, Z) {
      return P.H.useActionState(R, Y, Z);
    }),
    (De.useCallback = function (R, Y) {
      return P.H.useCallback(R, Y);
    }),
    (De.useContext = function (R) {
      return P.H.useContext(R);
    }),
    (De.useDebugValue = function () {}),
    (De.useDeferredValue = function (R, Y) {
      return P.H.useDeferredValue(R, Y);
    }),
    (De.useEffect = function (R, Y) {
      return P.H.useEffect(R, Y);
    }),
    (De.useEffectEvent = function (R) {
      return P.H.useEffectEvent(R);
    }),
    (De.useId = function () {
      return P.H.useId();
    }),
    (De.useImperativeHandle = function (R, Y, Z) {
      return P.H.useImperativeHandle(R, Y, Z);
    }),
    (De.useInsertionEffect = function (R, Y) {
      return P.H.useInsertionEffect(R, Y);
    }),
    (De.useLayoutEffect = function (R, Y) {
      return P.H.useLayoutEffect(R, Y);
    }),
    (De.useMemo = function (R, Y) {
      return P.H.useMemo(R, Y);
    }),
    (De.useOptimistic = function (R, Y) {
      return P.H.useOptimistic(R, Y);
    }),
    (De.useReducer = function (R, Y, Z) {
      return P.H.useReducer(R, Y, Z);
    }),
    (De.useRef = function (R) {
      return P.H.useRef(R);
    }),
    (De.useState = function (R) {
      return P.H.useState(R);
    }),
    (De.useSyncExternalStore = function (R, Y, Z) {
      return P.H.useSyncExternalStore(R, Y, Z);
    }),
    (De.useTransition = function () {
      return P.H.useTransition();
    }),
    (De.version = "19.2.5"),
    De
  );
}
var dp;
function of() {
  return (dp || ((dp = 1), (zc.exports = cb())), zc.exports);
}
var x = of();
const sl = ob(x),
  uf = rb({ __proto__: null, default: sl }, [x]);
var xg = (l) => {
    throw TypeError(l);
  },
  fb = (l, i, s) => i.has(l) || xg("Cannot " + s),
  Lc = (l, i, s) => (
    fb(l, i, "read from private field"),
    s ? s.call(l) : i.get(l)
  ),
  db = (l, i, s) =>
    i.has(l)
      ? xg("Cannot add the same private member more than once")
      : i instanceof WeakSet
        ? i.add(l)
        : i.set(l, s),
  mp = "popstate";
function hp(l) {
  return (
    typeof l == "object" &&
    l != null &&
    "pathname" in l &&
    "search" in l &&
    "hash" in l &&
    "state" in l &&
    "key" in l
  );
}
function mb(l = {}) {
  function i(u, c) {
    let f = c.state?.masked,
      { pathname: m, search: g, hash: p } = f || u.location;
    return jr(
      "",
      { pathname: m, search: g, hash: p },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default",
      f
        ? {
            pathname: u.location.pathname,
            search: u.location.search,
            hash: u.location.hash
          }
        : void 0
    );
  }
  function s(u, c) {
    return typeof c == "string" ? c : tn(c);
  }
  return pb(i, s, null, l);
}
function Ye(l, i) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(i);
}
function Ot(l, i) {
  if (!l) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function hb() {
  return Math.random().toString(36).substring(2, 10);
}
function pp(l, i) {
  return {
    usr: l.state,
    key: l.key,
    idx: i,
    masked: l.unstable_mask
      ? { pathname: l.pathname, search: l.search, hash: l.hash }
      : void 0
  };
}
function jr(l, i, s = null, u, c) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? an(i) : i),
    state: s,
    key: (i && i.key) || u || hb(),
    unstable_mask: c
  };
}
function tn({ pathname: l = "/", search: i = "", hash: s = "" }) {
  return (
    i && i !== "?" && (l += i.charAt(0) === "?" ? i : "?" + i),
    s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s),
    l
  );
}
function an(l) {
  let i = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && ((i.hash = l.substring(s)), (l = l.substring(0, s)));
    let u = l.indexOf("?");
    (u >= 0 && ((i.search = l.substring(u)), (l = l.substring(0, u))),
      l && (i.pathname = l));
  }
  return i;
}
function pb(l, i, s, u = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = u,
    m = c.history,
    g = "POP",
    p = null,
    h = b();
  h == null && ((h = 0), m.replaceState({ ...m.state, idx: h }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function v() {
    g = "POP";
    let O = b(),
      $ = O == null ? null : O - h;
    ((h = O), p && p({ action: g, location: k.location, delta: $ }));
  }
  function N(O, $) {
    g = "PUSH";
    let W = hp(O) ? O : jr(k.location, O, $);
    h = b() + 1;
    let F = pp(W, h),
      ie = k.createHref(W.unstable_mask || W);
    try {
      m.pushState(F, "", ie);
    } catch (he) {
      if (he instanceof DOMException && he.name === "DataCloneError") throw he;
      c.location.assign(ie);
    }
    f && p && p({ action: g, location: k.location, delta: 1 });
  }
  function w(O, $) {
    g = "REPLACE";
    let W = hp(O) ? O : jr(k.location, O, $);
    h = b();
    let F = pp(W, h),
      ie = k.createHref(W.unstable_mask || W);
    (m.replaceState(F, "", ie),
      f && p && p({ action: g, location: k.location, delta: 0 }));
  }
  function j(O) {
    return Eg(O);
  }
  let k = {
    get action() {
      return g;
    },
    get location() {
      return l(c, m);
    },
    listen(O) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(mp, v),
        (p = O),
        () => {
          (c.removeEventListener(mp, v), (p = null));
        }
      );
    },
    createHref(O) {
      return i(c, O);
    },
    createURL: j,
    encodeLocation(O) {
      let $ = j(O);
      return { pathname: $.pathname, search: $.search, hash: $.hash };
    },
    push: N,
    replace: w,
    go(O) {
      return m.go(O);
    }
  };
  return k;
}
function Eg(l, i = !1) {
  let s = "http://localhost";
  (typeof window < "u" &&
    (s =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ye(s, "No window.location.(origin|href) available to create URL"));
  let u = typeof l == "string" ? l : tn(l);
  return (
    (u = u.replace(/ $/, "%20")),
    !i && u.startsWith("//") && (u = s + u),
    new URL(u, s)
  );
}
var Nr,
  gp = class {
    constructor(l) {
      if ((db(this, Nr, new Map()), l)) for (let [i, s] of l) this.set(i, s);
    }
    get(l) {
      if (Lc(this, Nr).has(l)) return Lc(this, Nr).get(l);
      if (l.defaultValue !== void 0) return l.defaultValue;
      throw new Error("No value found for context");
    }
    set(l, i) {
      Lc(this, Nr).set(l, i);
    }
  };
Nr = new WeakMap();
var gb = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function yb(l) {
  return gb.has(l);
}
var vb = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function bb(l) {
  return vb.has(l);
}
function Sb(l) {
  return l.index === !0;
}
function Hr(l, i, s = [], u = {}, c = !1) {
  return l.map((f, m) => {
    let g = [...s, String(m)],
      p = typeof f.id == "string" ? f.id : g.join("-");
    if (
      (Ye(
        f.index !== !0 || !f.children,
        "Cannot specify children on an index route"
      ),
      Ye(
        c || !u[p],
        `Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`
      ),
      Sb(f))
    ) {
      let h = { ...f, id: p };
      return ((u[p] = yp(h, i(h))), h);
    } else {
      let h = { ...f, id: p, children: void 0 };
      return (
        (u[p] = yp(h, i(h))),
        f.children && (h.children = Hr(f.children, i, g, u, c)),
        h
      );
    }
  });
}
function yp(l, i) {
  return Object.assign(l, {
    ...i,
    ...(typeof i.lazy == "object" && i.lazy != null
      ? { lazy: { ...l.lazy, ...i.lazy } }
      : {})
  });
}
function cl(l, i, s = "/") {
  return Or(l, i, s, !1);
}
function Or(l, i, s, u) {
  let c = typeof i == "string" ? an(i) : i,
    f = ja(c.pathname || "/", s);
  if (f == null) return null;
  let m = Tg(l);
  Eb(m);
  let g = null;
  for (let p = 0; g == null && p < m.length; ++p) {
    let h = zb(f);
    g = Ob(m[p], h, u);
  }
  return g;
}
function xb(l, i) {
  let { route: s, pathname: u, params: c } = l;
  return {
    id: s.id,
    pathname: u,
    params: c,
    data: i[s.id],
    loaderData: i[s.id],
    handle: s.handle
  };
}
function Tg(l, i = [], s = [], u = "", c = !1) {
  let f = (m, g, p = c, h) => {
    let b = {
      relativePath: h === void 0 ? m.path || "" : h,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: g,
      route: m
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(u) && p) return;
      (Ye(
        b.relativePath.startsWith(u),
        `Absolute route path "${b.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (b.relativePath = b.relativePath.slice(u.length)));
    }
    let v = Ua([u, b.relativePath]),
      N = s.concat(b);
    (m.children &&
      m.children.length > 0 &&
      (Ye(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`
      ),
      Tg(m.children, i, N, v, p)),
      !(m.path == null && !m.index) &&
        i.push({ path: v, score: Mb(v, m.index), routesMeta: N }));
  };
  return (
    l.forEach((m, g) => {
      if (m.path === "" || !m.path?.includes("?")) f(m, g);
      else for (let p of Rg(m.path)) f(m, g, !0, p);
    }),
    i
  );
}
function Rg(l) {
  let i = l.split("/");
  if (i.length === 0) return [];
  let [s, ...u] = i,
    c = s.endsWith("?"),
    f = s.replace(/\?$/, "");
  if (u.length === 0) return c ? [f, ""] : [f];
  let m = Rg(u.join("/")),
    g = [];
  return (
    g.push(...m.map((p) => (p === "" ? f : [f, p].join("/")))),
    c && g.push(...m),
    g.map((p) => (l.startsWith("/") && p === "" ? "/" : p))
  );
}
function Eb(l) {
  l.sort((i, s) =>
    i.score !== s.score
      ? s.score - i.score
      : Nb(
          i.routesMeta.map((u) => u.childrenIndex),
          s.routesMeta.map((u) => u.childrenIndex)
        )
  );
}
var Tb = /^:[\w-]+$/,
  Rb = 3,
  Ab = 2,
  wb = 1,
  _b = 10,
  Cb = -2,
  vp = (l) => l === "*";
function Mb(l, i) {
  let s = l.split("/"),
    u = s.length;
  return (
    s.some(vp) && (u += Cb),
    i && (u += Ab),
    s
      .filter((c) => !vp(c))
      .reduce((c, f) => c + (Tb.test(f) ? Rb : f === "" ? wb : _b), u)
  );
}
function Nb(l, i) {
  return l.length === i.length && l.slice(0, -1).every((u, c) => u === i[c])
    ? l[l.length - 1] - i[i.length - 1]
    : 0;
}
function Ob(l, i, s = !1) {
  let { routesMeta: u } = l,
    c = {},
    f = "/",
    m = [];
  for (let g = 0; g < u.length; ++g) {
    let p = u[g],
      h = g === u.length - 1,
      b = f === "/" ? i : i.slice(f.length) || "/",
      v = gu(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: h },
        b
      ),
      N = p.route;
    if (
      (!v &&
        h &&
        s &&
        !u[u.length - 1].route.index &&
        (v = gu(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          b
        )),
      !v)
    )
      return null;
    (Object.assign(c, v.params),
      m.push({
        params: c,
        pathname: Ua([f, v.pathname]),
        pathnameBase: jb(Ua([f, v.pathnameBase])),
        route: N
      }),
      v.pathnameBase !== "/" && (f = Ua([f, v.pathnameBase])));
  }
  return m;
}
function gu(l, i) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, u] = Db(l.path, l.caseSensitive, l.end),
    c = i.match(s);
  if (!c) return null;
  let f = c[0],
    m = f.replace(/(.)\/+$/, "$1"),
    g = c.slice(1);
  return {
    params: u.reduce((h, { paramName: b, isOptional: v }, N) => {
      if (b === "*") {
        let j = g[N] || "";
        m = f.slice(0, f.length - j.length).replace(/(.)\/+$/, "$1");
      }
      const w = g[N];
      return (
        v && !w ? (h[b] = void 0) : (h[b] = (w || "").replace(/%2F/g, "/")),
        h
      );
    }, {}),
    pathname: f,
    pathnameBase: m,
    pattern: l
  };
}
function Db(l, i = !1, s = !0) {
  Ot(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let u = [],
    c =
      "^" +
      l
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (m, g, p, h, b) => {
          if ((u.push({ paramName: g, isOptional: p != null }), p)) {
            let v = b.charAt(h + m.length);
            return v && v !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    l.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
        ? (c += "\\/*$")
        : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, i ? void 0 : "i"), u]
  );
}
function zb(l) {
  try {
    return l
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      Ot(
        !1,
        `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
      ),
      l
    );
  }
}
function ja(l, i) {
  if (i === "/") return l;
  if (!l.toLowerCase().startsWith(i.toLowerCase())) return null;
  let s = i.endsWith("/") ? i.length - 1 : i.length,
    u = l.charAt(s);
  return u && u !== "/" ? null : l.slice(s) || "/";
}
function Lb({ basename: l, pathname: i }) {
  return i === "/" ? l : Ua([l, i]);
}
var Ag = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  sf = (l) => Ag.test(l);
function Ub(l, i = "/") {
  let {
      pathname: s,
      search: u = "",
      hash: c = ""
    } = typeof l == "string" ? an(l) : l,
    f;
  return (
    s
      ? ((s = ff(s)),
        s.startsWith("/") ? (f = bp(s.substring(1), "/")) : (f = bp(s, i)))
      : (f = i),
    { pathname: f, search: Hb(u), hash: Bb(c) }
  );
}
function bp(l, i) {
  let s = yu(i).split("/");
  return (
    l.split("/").forEach((c) => {
      c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Uc(l, i, s, u) {
  return `Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function wg(l) {
  return l.filter(
    (i, s) => s === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function cf(l) {
  let i = wg(l);
  return i.map((s, u) => (u === i.length - 1 ? s.pathname : s.pathnameBase));
}
function Su(l, i, s, u = !1) {
  let c;
  typeof l == "string"
    ? (c = an(l))
    : ((c = { ...l }),
      Ye(
        !c.pathname || !c.pathname.includes("?"),
        Uc("?", "pathname", "search", c)
      ),
      Ye(
        !c.pathname || !c.pathname.includes("#"),
        Uc("#", "pathname", "hash", c)
      ),
      Ye(!c.search || !c.search.includes("#"), Uc("#", "search", "hash", c)));
  let f = l === "" || c.pathname === "",
    m = f ? "/" : c.pathname,
    g;
  if (m == null) g = s;
  else {
    let v = i.length - 1;
    if (!u && m.startsWith("..")) {
      let N = m.split("/");
      for (; N[0] === ".."; ) (N.shift(), (v -= 1));
      c.pathname = N.join("/");
    }
    g = v >= 0 ? i[v] : "/";
  }
  let p = Ub(c, g),
    h = m && m !== "/" && m.endsWith("/"),
    b = (f || m === ".") && s.endsWith("/");
  return (!p.pathname.endsWith("/") && (h || b) && (p.pathname += "/"), p);
}
var ff = (l) => l.replace(/\/\/+/g, "/"),
  Ua = (l) => ff(l.join("/")),
  yu = (l) => l.replace(/\/+$/, ""),
  jb = (l) => yu(l).replace(/^\/*/, "/"),
  Hb = (l) => (!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l),
  Bb = (l) => (!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l),
  Yr = class {
    constructor(l, i, s, u = !1) {
      ((this.status = l),
        (this.statusText = i || ""),
        (this.internal = u),
        s instanceof Error
          ? ((this.data = s.toString()), (this.error = s))
          : (this.data = s));
    }
  };
function Br(l) {
  return (
    l != null &&
    typeof l.status == "number" &&
    typeof l.statusText == "string" &&
    typeof l.internal == "boolean" &&
    "data" in l
  );
}
function qr(l) {
  let i = l.map((s) => s.route.path).filter(Boolean);
  return Ua(i) || "/";
}
var _g =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function Cg(l, i) {
  let s = l;
  if (typeof s != "string" || !Ag.test(s))
    return { absoluteURL: void 0, isExternal: !1, to: s };
  let u = s,
    c = !1;
  if (_g)
    try {
      let f = new URL(window.location.href),
        m = s.startsWith("//") ? new URL(f.protocol + s) : new URL(s),
        g = ja(m.pathname, i);
      m.origin === f.origin && g != null
        ? (s = g + m.search + m.hash)
        : (c = !0);
    } catch {
      Ot(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: u, isExternal: c, to: s };
}
var dl = Symbol("Uninstrumented");
function kb(l, i) {
  let s = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  l.forEach((c) =>
    c({
      id: i.id,
      index: i.index,
      path: i.path,
      instrument(f) {
        let m = Object.keys(s);
        for (let g of m) f[g] && s[g].push(f[g]);
      }
    })
  );
  let u = {};
  if (typeof i.lazy == "function" && s.lazy.length > 0) {
    let c = Ci(s.lazy, i.lazy, () => {});
    c && (u.lazy = c);
  }
  if (typeof i.lazy == "object") {
    let c = i.lazy;
    ["middleware", "loader", "action"].forEach((f) => {
      let m = c[f],
        g = s[`lazy.${f}`];
      if (typeof m == "function" && g.length > 0) {
        let p = Ci(g, m, () => {});
        p && (u.lazy = Object.assign(u.lazy || {}, { [f]: p }));
      }
    });
  }
  return (
    ["loader", "action"].forEach((c) => {
      let f = i[c];
      if (typeof f == "function" && s[c].length > 0) {
        let m = f[dl] ?? f,
          g = Ci(s[c], m, (...p) => Sp(p[0]));
        g &&
          (c === "loader" && m.hydrate === !0 && (g.hydrate = !0),
          (g[dl] = m),
          (u[c] = g));
      }
    }),
    i.middleware &&
      i.middleware.length > 0 &&
      s.middleware.length > 0 &&
      (u.middleware = i.middleware.map((c) => {
        let f = c[dl] ?? c,
          m = Ci(s.middleware, f, (...g) => Sp(g[0]));
        return m ? ((m[dl] = f), m) : c;
      })),
    u
  );
}
function Gb(l, i) {
  let s = { navigate: [], fetch: [] };
  if (
    (i.forEach((u) =>
      u({
        instrument(c) {
          let f = Object.keys(c);
          for (let m of f) c[m] && s[m].push(c[m]);
        }
      })
    ),
    s.navigate.length > 0)
  ) {
    let u = l.navigate[dl] ?? l.navigate,
      c = Ci(s.navigate, u, (...f) => {
        let [m, g] = f;
        return {
          to:
            typeof m == "number" || typeof m == "string" ? m : m ? tn(m) : ".",
          ...xp(l, g ?? {})
        };
      });
    c && ((c[dl] = u), (l.navigate = c));
  }
  if (s.fetch.length > 0) {
    let u = l.fetch[dl] ?? l.fetch,
      c = Ci(s.fetch, u, (...f) => {
        let [m, , g, p] = f;
        return { href: g ?? ".", fetcherKey: m, ...xp(l, p ?? {}) };
      });
    c && ((c[dl] = u), (l.fetch = c));
  }
  return l;
}
function Ci(l, i, s) {
  return l.length === 0
    ? null
    : async (...u) => {
        let c = await Mg(l, s(...u), () => i(...u), l.length - 1);
        if (c.type === "error") throw c.value;
        return c.value;
      };
}
async function Mg(l, i, s, u) {
  let c = l[u],
    f;
  if (c) {
    let m,
      g = async () => (
        m
          ? console.error(
              "You cannot call instrumented handlers more than once"
            )
          : (m = Mg(l, i, s, u - 1)),
        (f = await m),
        Ye(f, "Expected a result"),
        f.type === "error" && f.value instanceof Error
          ? { status: "error", error: f.value }
          : { status: "success", error: void 0 }
      );
    try {
      await c(g, i);
    } catch (p) {
      console.error("An instrumentation function threw an error:", p);
    }
    (m || (await g()), await m);
  } else
    try {
      f = { type: "success", value: await s() };
    } catch (m) {
      f = { type: "error", value: m };
    }
  return (
    f || {
      type: "error",
      value: new Error("No result assigned in instrumentation chain.")
    }
  );
}
function Sp(l) {
  let { request: i, context: s, params: u, unstable_pattern: c } = l;
  return {
    request: Yb(i),
    params: { ...u },
    unstable_pattern: c,
    context: qb(s)
  };
}
function xp(l, i) {
  return {
    currentUrl: tn(l.state.location),
    ...("formMethod" in i ? { formMethod: i.formMethod } : {}),
    ...("formEncType" in i ? { formEncType: i.formEncType } : {}),
    ...("formData" in i ? { formData: i.formData } : {}),
    ...("body" in i ? { body: i.body } : {})
  };
}
function Yb(l) {
  return {
    method: l.method,
    url: l.url,
    headers: { get: (...i) => l.headers.get(...i) }
  };
}
function qb(l) {
  if (Xb(l)) {
    let i = { ...l };
    return (Object.freeze(i), i);
  } else return { get: (i) => l.get(i) };
}
var Vb = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Xb(l) {
  if (l === null || typeof l != "object") return !1;
  const i = Object.getPrototypeOf(l);
  return (
    i === Object.prototype ||
    i === null ||
    Object.getOwnPropertyNames(i).sort().join("\0") === Vb
  );
}
var Ng = ["POST", "PUT", "PATCH", "DELETE"],
  Qb = new Set(Ng),
  Zb = ["GET", ...Ng],
  Fb = new Set(Zb),
  Og = new Set([301, 302, 303, 307, 308]),
  Kb = new Set([307, 308]),
  jc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  Jb = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  xr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Ib = (l) => ({ hasErrorBoundary: !!l.hasErrorBoundary }),
  Dg = "remix-router-transitions",
  zg = Symbol("ResetLoaderData");
function $b(l) {
  const i = l.window ? l.window : typeof window < "u" ? window : void 0,
    s =
      typeof i < "u" &&
      typeof i.document < "u" &&
      typeof i.document.createElement < "u";
  Ye(
    l.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let u = l.hydrationRouteProperties || [],
    c = l.mapRouteProperties || Ib,
    f = c;
  if (l.unstable_instrumentations) {
    let T = l.unstable_instrumentations;
    f = (M) => ({ ...c(M), ...kb(T.map((L) => L.route).filter(Boolean), M) });
  }
  let m = {},
    g = Hr(l.routes, f, void 0, m),
    p,
    h = l.basename || "/";
  h.startsWith("/") || (h = `/${h}`);
  let b = l.dataStrategy || aS,
    v = { unstable_passThroughRequests: !1, ...l.future },
    N = null,
    w = new Set(),
    j = null,
    k = null,
    O = null,
    $ = l.hydrationData != null,
    W = cl(g, l.history.location, h),
    F = !1,
    ie = null,
    he,
    Se;
  if (W == null && !l.patchRoutesOnNavigation) {
    let T = La(404, { pathname: l.history.location.pathname }),
      { matches: M, route: L } = iu(g);
    ((he = !0), (Se = !he), (W = M), (ie = { [L.id]: T }));
  } else if (
    (W &&
      !l.hydrationData &&
      Ja(W, g, l.history.location.pathname).active &&
      (W = null),
    W)
  )
    if (W.some((T) => T.route.lazy)) ((he = !1), (Se = !he));
    else if (!W.some((T) => df(T.route))) ((he = !0), (Se = !he));
    else {
      let T = l.hydrationData ? l.hydrationData.loaderData : null,
        M = l.hydrationData ? l.hydrationData.errors : null,
        L = W;
      if (M) {
        let K = W.findIndex((ae) => M[ae.route.id] !== void 0);
        L = L.slice(0, K + 1);
      }
      ((Se = !1),
        (he = !0),
        L.forEach((K) => {
          let ae = Lg(K.route, T, M);
          ((Se = Se || ae.renderFallback), (he = he && !ae.shouldLoad));
        }));
    }
  else {
    ((he = !1), (Se = !he), (W = []));
    let T = Ja(null, g, l.history.location.pathname);
    T.active && T.matches && ((F = !0), (W = T.matches));
  }
  let P,
    E = {
      historyAction: l.history.action,
      location: l.history.location,
      matches: W,
      initialized: he,
      renderFallback: Se,
      navigation: jc,
      restoreScrollPosition: l.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (l.hydrationData && l.hydrationData.loaderData) || {},
      actionData: (l.hydrationData && l.hydrationData.actionData) || null,
      errors: (l.hydrationData && l.hydrationData.errors) || ie,
      fetchers: new Map(),
      blockers: new Map()
    },
    ee = "POP",
    Ae = null,
    Re = !1,
    Ee,
    ze = !1,
    Xe = new Map(),
    fe = null,
    z = !1,
    J = !1,
    ce = new Set(),
    pe = new Map(),
    te = 0,
    R = -1,
    Y = new Map(),
    Z = new Set(),
    re = new Map(),
    ne = new Map(),
    de = new Set(),
    Ne = new Map(),
    Je,
    Me = null;
  function Wt() {
    if (
      ((N = l.history.listen(({ action: T, location: M, delta: L }) => {
        if (Je) {
          (Je(), (Je = void 0));
          return;
        }
        Ot(
          Ne.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let K = on({
          currentLocation: E.location,
          nextLocation: M,
          historyAction: T
        });
        if (K && L != null) {
          let ae = new Promise((me) => {
            Je = me;
          });
          (l.history.go(L * -1),
            ma(K, {
              state: "blocked",
              location: M,
              proceed() {
                (ma(K, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: M
                }),
                  ae.then(() => l.history.go(L)));
              },
              reset() {
                let me = new Map(E.blockers);
                (me.set(K, xr), Pe({ blockers: me }));
              }
            }),
            Ae?.resolve(),
            (Ae = null));
          return;
        }
        return da(T, M);
      })),
      s)
    ) {
      SS(i, Xe);
      let T = () => xS(i, Xe);
      (i.addEventListener("pagehide", T),
        (fe = () => i.removeEventListener("pagehide", T)));
    }
    return (
      E.initialized || da("POP", E.location, { initialHydration: !0 }),
      P
    );
  }
  function ea() {
    (N && N(),
      fe && fe(),
      w.clear(),
      Ee && Ee.abort(),
      E.fetchers.forEach((T, M) => na(M)),
      E.blockers.forEach((T, M) => Ya(M)));
  }
  function fa(T) {
    return (w.add(T), () => w.delete(T));
  }
  function Pe(T, M = {}) {
    (T.matches &&
      (T.matches = T.matches.map((ae) => {
        let me = m[ae.route.id],
          oe = ae.route;
        return oe.element !== me.element ||
          oe.errorElement !== me.errorElement ||
          oe.hydrateFallbackElement !== me.hydrateFallbackElement
          ? { ...ae, route: me }
          : ae;
      })),
      (E = { ...E, ...T }));
    let L = [],
      K = [];
    (E.fetchers.forEach((ae, me) => {
      ae.state === "idle" && (de.has(me) ? L.push(me) : K.push(me));
    }),
      de.forEach((ae) => {
        !E.fetchers.has(ae) && !pe.has(ae) && L.push(ae);
      }),
      [...w].forEach((ae) =>
        ae(E, {
          deletedFetchers: L,
          newErrors: T.errors ?? null,
          viewTransitionOpts: M.viewTransitionOpts,
          flushSync: M.flushSync === !0
        })
      ),
      L.forEach((ae) => na(ae)),
      K.forEach((ae) => E.fetchers.delete(ae)));
  }
  function ft(T, M, { flushSync: L } = {}) {
    let K =
        E.actionData != null &&
        E.navigation.formMethod != null &&
        Zt(E.navigation.formMethod) &&
        E.navigation.state === "loading" &&
        T.state?._isRedirect !== !0,
      ae;
    M.actionData
      ? Object.keys(M.actionData).length > 0
        ? (ae = M.actionData)
        : (ae = null)
      : K
        ? (ae = E.actionData)
        : (ae = null);
    let me = M.loaderData
        ? Dp(E.loaderData, M.loaderData, M.matches || [], M.errors)
        : E.loaderData,
      oe = E.blockers;
    oe.size > 0 && ((oe = new Map(oe)), oe.forEach((we, xe) => oe.set(xe, xr)));
    let le = z ? !1 : Ra(T, M.matches || E.matches),
      ge =
        Re === !0 ||
        (E.navigation.formMethod != null &&
          Zt(E.navigation.formMethod) &&
          T.state?._isRedirect !== !0);
    (p && ((g = p), (p = void 0)),
      z ||
        ee === "POP" ||
        (ee === "PUSH"
          ? l.history.push(T, T.state)
          : ee === "REPLACE" && l.history.replace(T, T.state)));
    let se;
    if (ee === "POP") {
      let we = Xe.get(E.location.pathname);
      we && we.has(T.pathname)
        ? (se = { currentLocation: E.location, nextLocation: T })
        : Xe.has(T.pathname) &&
          (se = { currentLocation: T, nextLocation: E.location });
    } else if (ze) {
      let we = Xe.get(E.location.pathname);
      (we
        ? we.add(T.pathname)
        : ((we = new Set([T.pathname])), Xe.set(E.location.pathname, we)),
        (se = { currentLocation: E.location, nextLocation: T }));
    }
    (Pe(
      {
        ...M,
        actionData: ae,
        loaderData: me,
        historyAction: ee,
        location: T,
        initialized: !0,
        renderFallback: !1,
        navigation: jc,
        revalidation: "idle",
        restoreScrollPosition: le,
        preventScrollReset: ge,
        blockers: oe
      },
      { viewTransitionOpts: se, flushSync: L === !0 }
    ),
      (ee = "POP"),
      (Re = !1),
      (ze = !1),
      (z = !1),
      (J = !1),
      Ae?.resolve(),
      (Ae = null),
      Me?.resolve(),
      (Me = null));
  }
  async function ta(T, M) {
    if ((Ae?.resolve(), (Ae = null), typeof T == "number")) {
      Ae || (Ae = jp());
      let ue = Ae.promise;
      return (l.history.go(T), ue);
    }
    let L = $c(E.location, E.matches, h, T, M?.fromRouteId, M?.relative),
      { path: K, submission: ae, error: me } = Ep(!1, L, M),
      oe;
    M?.unstable_mask &&
      (oe = {
        pathname: "",
        search: "",
        hash: "",
        ...(typeof M.unstable_mask == "string"
          ? an(M.unstable_mask)
          : { ...E.location.unstable_mask, ...M.unstable_mask })
      });
    let le = E.location,
      ge = jr(le, K, M && M.state, void 0, oe);
    ge = { ...ge, ...l.history.encodeLocation(ge) };
    let se = M && M.replace != null ? M.replace : void 0,
      we = "PUSH";
    se === !0
      ? (we = "REPLACE")
      : se === !1 ||
        (ae != null &&
          Zt(ae.formMethod) &&
          ae.formAction === E.location.pathname + E.location.search &&
          (we = "REPLACE"));
    let xe =
        M && "preventScrollReset" in M ? M.preventScrollReset === !0 : void 0,
      Fe = (M && M.flushSync) === !0,
      je = on({ currentLocation: le, nextLocation: ge, historyAction: we });
    if (je) {
      ma(je, {
        state: "blocked",
        location: ge,
        proceed() {
          (ma(je, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ge
          }),
            ta(T, M));
        },
        reset() {
          let ue = new Map(E.blockers);
          (ue.set(je, xr), Pe({ blockers: ue }));
        }
      });
      return;
    }
    await da(we, ge, {
      submission: ae,
      pendingError: me,
      preventScrollReset: xe,
      replace: M && M.replace,
      enableViewTransition: M && M.viewTransition,
      flushSync: Fe,
      callSiteDefaultShouldRevalidate: M && M.unstable_defaultShouldRevalidate
    });
  }
  function rn() {
    (Me || (Me = jp()), Ta(), Pe({ revalidation: "loading" }));
    let T = Me.promise;
    return E.navigation.state === "submitting"
      ? T
      : E.navigation.state === "idle"
        ? (da(E.historyAction, E.location, {
            startUninterruptedRevalidation: !0
          }),
          T)
        : (da(ee || E.historyAction, E.navigation.location, {
            overrideNavigation: E.navigation,
            enableViewTransition: ze === !0
          }),
          T);
  }
  async function da(T, M, L) {
    (Ee && Ee.abort(),
      (Ee = null),
      (ee = T),
      (z = (L && L.startUninterruptedRevalidation) === !0),
      yt(E.location, E.matches),
      (Re = (L && L.preventScrollReset) === !0),
      (ze = (L && L.enableViewTransition) === !0));
    let K = p || g,
      ae = L && L.overrideNavigation,
      me =
        L?.initialHydration && E.matches && E.matches.length > 0 && !F
          ? E.matches
          : cl(K, M, h),
      oe = (L && L.flushSync) === !0;
    if (
      me &&
      E.initialized &&
      !J &&
      cS(E.location, M) &&
      !(L && L.submission && Zt(L.submission.formMethod))
    ) {
      ft(M, { matches: me }, { flushSync: oe });
      return;
    }
    let le = Ja(me, K, M.pathname);
    if ((le.active && le.matches && (me = le.matches), !me)) {
      let { error: S, notFoundMatches: q, route: I } = Ht(M.pathname);
      ft(
        M,
        { matches: q, loaderData: {}, errors: { [I.id]: S } },
        { flushSync: oe }
      );
      return;
    }
    Ee = new AbortController();
    let ge = Ai(l.history, M, Ee.signal, L && L.submission),
      se = l.getContext ? await l.getContext() : new gp(),
      we;
    if (L && L.pendingError)
      we = [fl(me).route.id, { type: "error", error: L.pendingError }];
    else if (L && L.submission && Zt(L.submission.formMethod)) {
      let S = await ka(
        ge,
        M,
        L.submission,
        me,
        se,
        le.active,
        L && L.initialHydration === !0,
        { replace: L.replace, flushSync: oe }
      );
      if (S.shortCircuited) return;
      if (S.pendingActionResult) {
        let [q, I] = S.pendingActionResult;
        if (Ea(I) && Br(I.error) && I.error.status === 404) {
          ((Ee = null),
            ft(M, {
              matches: S.matches,
              loaderData: {},
              errors: { [q]: I.error }
            }));
          return;
        }
      }
      ((me = S.matches || me),
        (we = S.pendingActionResult),
        (ae = Hc(M, L.submission)),
        (oe = !1),
        (le.active = !1),
        (ge = Ai(l.history, ge.url, ge.signal)));
    }
    let {
      shortCircuited: xe,
      matches: Fe,
      loaderData: je,
      errors: ue
    } = await Fa(
      ge,
      M,
      me,
      se,
      le.active,
      ae,
      L && L.submission,
      L && L.fetcherSubmission,
      L && L.replace,
      L && L.initialHydration === !0,
      oe,
      we,
      L && L.callSiteDefaultShouldRevalidate
    );
    xe ||
      ((Ee = null),
      ft(M, { matches: Fe || me, ...zp(we), loaderData: je, errors: ue }));
  }
  async function ka(T, M, L, K, ae, me, oe, le = {}) {
    Ta();
    let ge = vS(M, L);
    if ((Pe({ navigation: ge }, { flushSync: le.flushSync === !0 }), me)) {
      let xe = await ha(K, M.pathname, T.signal);
      if (xe.type === "aborted") return { shortCircuited: !0 };
      if (xe.type === "error") {
        if (xe.partialMatches.length === 0) {
          let { matches: je, route: ue } = iu(g);
          return {
            matches: je,
            pendingActionResult: [ue.id, { type: "error", error: xe.error }]
          };
        }
        let Fe = fl(xe.partialMatches).route.id;
        return {
          matches: xe.partialMatches,
          pendingActionResult: [Fe, { type: "error", error: xe.error }]
        };
      } else if (xe.matches) K = xe.matches;
      else {
        let { notFoundMatches: Fe, error: je, route: ue } = Ht(M.pathname);
        return {
          matches: Fe,
          pendingActionResult: [ue.id, { type: "error", error: je }]
        };
      }
    }
    let se,
      we = mu(K, M);
    if (!we.route.action && !we.route.lazy)
      se = {
        type: "error",
        error: La(405, {
          method: T.method,
          pathname: M.pathname,
          routeId: we.route.id
        })
      };
    else {
      let xe = Ni(f, m, T, M, K, we, oe ? [] : u, ae),
        Fe = await Kt(T, M, xe, ae, null);
      if (((se = Fe[we.route.id]), !se)) {
        for (let je of K)
          if (Fe[je.route.id]) {
            se = Fe[je.route.id];
            break;
          }
      }
      if (T.signal.aborted) return { shortCircuited: !0 };
    }
    if (Ll(se)) {
      let xe;
      return (
        le && le.replace != null
          ? (xe = le.replace)
          : (xe =
              Mp(
                se.response.headers.get("Location"),
                new URL(T.url),
                h,
                l.history
              ) ===
              E.location.pathname + E.location.search),
        await Ft(T, se, !0, { submission: L, replace: xe }),
        { shortCircuited: !0 }
      );
    }
    if (Ea(se)) {
      let xe = fl(K, we.route.id);
      return (
        (le && le.replace) !== !0 && (ee = "PUSH"),
        { matches: K, pendingActionResult: [xe.route.id, se, we.route.id] }
      );
    }
    return { matches: K, pendingActionResult: [we.route.id, se] };
  }
  async function Fa(T, M, L, K, ae, me, oe, le, ge, se, we, xe, Fe) {
    let je = me || Hc(M, oe),
      ue = oe || le || Up(je),
      S = !z && !se;
    if (ae) {
      if (S) {
        let Et = Ga(xe);
        Pe(
          { navigation: je, ...(Et !== void 0 ? { actionData: Et } : {}) },
          { flushSync: we }
        );
      }
      let Ge = await ha(L, M.pathname, T.signal);
      if (Ge.type === "aborted") return { shortCircuited: !0 };
      if (Ge.type === "error") {
        if (Ge.partialMatches.length === 0) {
          let { matches: Xt, route: wt } = iu(g);
          return { matches: Xt, loaderData: {}, errors: { [wt.id]: Ge.error } };
        }
        let Et = fl(Ge.partialMatches).route.id;
        return {
          matches: Ge.partialMatches,
          loaderData: {},
          errors: { [Et]: Ge.error }
        };
      } else if (Ge.matches) L = Ge.matches;
      else {
        let { error: Et, notFoundMatches: Xt, route: wt } = Ht(M.pathname);
        return { matches: Xt, loaderData: {}, errors: { [wt.id]: Et } };
      }
    }
    let q = p || g,
      { dsMatches: I, revalidatingFetchers: Oe } = Tp(
        T,
        K,
        f,
        m,
        l.history,
        E,
        L,
        ue,
        M,
        se ? [] : u,
        se === !0,
        J,
        ce,
        de,
        re,
        Z,
        q,
        h,
        l.patchRoutesOnNavigation != null,
        xe,
        Fe
      );
    if (
      ((R = ++te),
      !l.dataStrategy &&
        !I.some((Ge) => Ge.shouldLoad) &&
        !I.some(
          (Ge) => Ge.route.middleware && Ge.route.middleware.length > 0
        ) &&
        Oe.length === 0)
    ) {
      let Ge = Ln();
      return (
        ft(
          M,
          {
            matches: L,
            loaderData: {},
            errors: xe && Ea(xe[1]) ? { [xe[0]]: xe[1].error } : null,
            ...zp(xe),
            ...(Ge ? { fetchers: new Map(E.fetchers) } : {})
          },
          { flushSync: we }
        ),
        { shortCircuited: !0 }
      );
    }
    if (S) {
      let Ge = {};
      if (!ae) {
        Ge.navigation = je;
        let Et = Ga(xe);
        Et !== void 0 && (Ge.actionData = Et);
      }
      (Oe.length > 0 && (Ge.fetchers = Dn(Oe)), Pe(Ge, { flushSync: we }));
    }
    Oe.forEach((Ge) => {
      (tt(Ge.key), Ge.controller && pe.set(Ge.key, Ge.controller));
    });
    let Le = () => Oe.forEach((Ge) => tt(Ge.key));
    Ee && Ee.signal.addEventListener("abort", Le);
    let { loaderResults: at, fetcherResults: ct } = await Vt(I, Oe, T, M, K);
    if (T.signal.aborted) return { shortCircuited: !0 };
    (Ee && Ee.signal.removeEventListener("abort", Le),
      Oe.forEach((Ge) => pe.delete(Ge.key)));
    let We = ru(at);
    if (We)
      return (
        await Ft(T, We.result, !0, { replace: ge }),
        { shortCircuited: !0 }
      );
    if (((We = ru(ct)), We))
      return (
        Z.add(We.key),
        await Ft(T, We.result, !0, { replace: ge }),
        { shortCircuited: !0 }
      );
    let { loaderData: vt, errors: qa } = Op(E, L, at, xe, Oe, ct);
    se && E.errors && (qa = { ...E.errors, ...qa });
    let nt = Ln(),
      Ia = Un(R),
      un = nt || Ia || Oe.length > 0;
    return {
      matches: L,
      loaderData: vt,
      errors: qa,
      ...(un ? { fetchers: new Map(E.fetchers) } : {})
    };
  }
  function Ga(T) {
    if (T && !Ea(T[1])) return { [T[0]]: T[1].data };
    if (E.actionData)
      return Object.keys(E.actionData).length === 0 ? null : E.actionData;
  }
  function Dn(T) {
    return (
      T.forEach((M) => {
        let L = E.fetchers.get(M.key),
          K = Er(void 0, L ? L.data : void 0);
        E.fetchers.set(M.key, K);
      }),
      new Map(E.fetchers)
    );
  }
  async function kl(T, M, L, K) {
    tt(T);
    let ae = (K && K.flushSync) === !0,
      me = p || g,
      oe = $c(E.location, E.matches, h, L, M, K?.relative),
      le = cl(me, oe, h),
      ge = Ja(le, me, oe);
    if ((ge.active && ge.matches && (le = ge.matches), !le)) {
      Jt(T, M, La(404, { pathname: oe }), { flushSync: ae });
      return;
    }
    let { path: se, submission: we, error: xe } = Ep(!0, oe, K);
    if (xe) {
      Jt(T, M, xe, { flushSync: ae });
      return;
    }
    let Fe = l.getContext ? await l.getContext() : new gp(),
      je = (K && K.preventScrollReset) === !0;
    if (we && Zt(we.formMethod)) {
      await Gl(
        T,
        M,
        se,
        le,
        Fe,
        ge.active,
        ae,
        je,
        we,
        K && K.unstable_defaultShouldRevalidate
      );
      return;
    }
    (re.set(T, { routeId: M, path: se }),
      await zt(T, M, se, le, Fe, ge.active, ae, je, we));
  }
  async function Gl(T, M, L, K, ae, me, oe, le, ge, se) {
    (Ta(), re.delete(T));
    let we = E.fetchers.get(T);
    aa(T, bS(ge, we), { flushSync: oe });
    let xe = new AbortController(),
      Fe = Ai(l.history, L, xe.signal, ge);
    if (me) {
      let dt = await ha(K, new URL(Fe.url).pathname, Fe.signal, T);
      if (dt.type === "aborted") return;
      if (dt.type === "error") {
        Jt(T, M, dt.error, { flushSync: oe });
        return;
      } else if (dt.matches) K = dt.matches;
      else {
        Jt(T, M, La(404, { pathname: L }), { flushSync: oe });
        return;
      }
    }
    let je = mu(K, L);
    if (!je.route.action && !je.route.lazy) {
      let dt = La(405, { method: ge.formMethod, pathname: L, routeId: M });
      Jt(T, M, dt, { flushSync: oe });
      return;
    }
    pe.set(T, xe);
    let ue = te,
      S = Ni(f, m, Fe, L, K, je, u, ae),
      q = await Kt(Fe, L, S, ae, T),
      I = q[je.route.id];
    if (!I) {
      for (let dt of S)
        if (q[dt.route.id]) {
          I = q[dt.route.id];
          break;
        }
    }
    if (Fe.signal.aborted) {
      pe.get(T) === xe && pe.delete(T);
      return;
    }
    if (de.has(T)) {
      if (Ll(I) || Ea(I)) {
        aa(T, _n(void 0));
        return;
      }
    } else {
      if (Ll(I))
        if ((pe.delete(T), R > ue)) {
          aa(T, _n(void 0));
          return;
        } else
          return (
            Z.add(T),
            aa(T, Er(ge)),
            Ft(Fe, I, !1, { fetcherSubmission: ge, preventScrollReset: le })
          );
      if (Ea(I)) {
        Jt(T, M, I.error);
        return;
      }
    }
    let Oe = E.navigation.location || E.location,
      Le = Ai(l.history, Oe, xe.signal),
      at = p || g,
      ct =
        E.navigation.state !== "idle"
          ? cl(at, E.navigation.location, h)
          : E.matches;
    Ye(ct, "Didn't find any matches after fetcher action");
    let We = ++te;
    Y.set(T, We);
    let vt = Er(ge, I.data);
    E.fetchers.set(T, vt);
    let { dsMatches: qa, revalidatingFetchers: nt } = Tp(
      Le,
      ae,
      f,
      m,
      l.history,
      E,
      ct,
      ge,
      Oe,
      u,
      !1,
      J,
      ce,
      de,
      re,
      Z,
      at,
      h,
      l.patchRoutesOnNavigation != null,
      [je.route.id, I],
      se
    );
    (nt
      .filter((dt) => dt.key !== T)
      .forEach((dt) => {
        let ql = dt.key,
          Vl = E.fetchers.get(ql),
          Fr = Er(void 0, Vl ? Vl.data : void 0);
        (E.fetchers.set(ql, Fr),
          tt(ql),
          dt.controller && pe.set(ql, dt.controller));
      }),
      Pe({ fetchers: new Map(E.fetchers) }));
    let Ia = () => nt.forEach((dt) => tt(dt.key));
    xe.signal.addEventListener("abort", Ia);
    let { loaderResults: un, fetcherResults: Ge } = await Vt(
      qa,
      nt,
      Le,
      Oe,
      ae
    );
    if (xe.signal.aborted) return;
    if (
      (xe.signal.removeEventListener("abort", Ia),
      Y.delete(T),
      pe.delete(T),
      nt.forEach((dt) => pe.delete(dt.key)),
      E.fetchers.has(T))
    ) {
      let dt = _n(I.data);
      E.fetchers.set(T, dt);
    }
    let Et = ru(un);
    if (Et) return Ft(Le, Et.result, !1, { preventScrollReset: le });
    if (((Et = ru(Ge)), Et))
      return (Z.add(Et.key), Ft(Le, Et.result, !1, { preventScrollReset: le }));
    let { loaderData: Xt, errors: wt } = Op(E, ct, un, void 0, nt, Ge);
    (Un(We),
      E.navigation.state === "loading" && We > R
        ? (Ye(ee, "Expected pending action"),
          Ee && Ee.abort(),
          ft(E.navigation.location, {
            matches: ct,
            loaderData: Xt,
            errors: wt,
            fetchers: new Map(E.fetchers)
          }))
        : (Pe({
            errors: wt,
            loaderData: Dp(E.loaderData, Xt, ct, wt),
            fetchers: new Map(E.fetchers)
          }),
          (J = !1)));
  }
  async function zt(T, M, L, K, ae, me, oe, le, ge) {
    let se = E.fetchers.get(T);
    aa(T, Er(ge, se ? se.data : void 0), { flushSync: oe });
    let we = new AbortController(),
      xe = Ai(l.history, L, we.signal);
    if (me) {
      let I = await ha(K, new URL(xe.url).pathname, xe.signal, T);
      if (I.type === "aborted") return;
      if (I.type === "error") {
        Jt(T, M, I.error, { flushSync: oe });
        return;
      } else if (I.matches) K = I.matches;
      else {
        Jt(T, M, La(404, { pathname: L }), { flushSync: oe });
        return;
      }
    }
    let Fe = mu(K, L);
    pe.set(T, we);
    let je = te,
      ue = Ni(f, m, xe, L, K, Fe, u, ae),
      S = await Kt(xe, L, ue, ae, T),
      q = S[Fe.route.id];
    if (!q) {
      for (let I of K)
        if (S[I.route.id]) {
          q = S[I.route.id];
          break;
        }
    }
    if ((pe.get(T) === we && pe.delete(T), !xe.signal.aborted)) {
      if (de.has(T)) {
        aa(T, _n(void 0));
        return;
      }
      if (Ll(q))
        if (R > je) {
          aa(T, _n(void 0));
          return;
        } else {
          (Z.add(T), await Ft(xe, q, !1, { preventScrollReset: le }));
          return;
        }
      if (Ea(q)) {
        Jt(T, M, q.error);
        return;
      }
      aa(T, _n(q.data));
    }
  }
  async function Ft(
    T,
    M,
    L,
    {
      submission: K,
      fetcherSubmission: ae,
      preventScrollReset: me,
      replace: oe
    } = {}
  ) {
    (L || (Ae?.resolve(), (Ae = null)),
      M.response.headers.has("X-Remix-Revalidate") && (J = !0));
    let le = M.response.headers.get("Location");
    (Ye(le, "Expected a Location header on the redirect Response"),
      (le = Mp(le, new URL(T.url), h, l.history)));
    let ge = jr(E.location, le, { _isRedirect: !0 });
    if (s) {
      let ue = !1;
      if (M.response.headers.has("X-Remix-Reload-Document")) ue = !0;
      else if (sf(le)) {
        const S = Eg(le, !0);
        ue = S.origin !== i.location.origin || ja(S.pathname, h) == null;
      }
      if (ue) {
        oe ? i.location.replace(le) : i.location.assign(le);
        return;
      }
    }
    Ee = null;
    let se =
        oe === !0 || M.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: we, formAction: xe, formEncType: Fe } = E.navigation;
    !K && !ae && we && xe && Fe && (K = Up(E.navigation));
    let je = K || ae;
    if (Kb.has(M.response.status) && je && Zt(je.formMethod))
      await da(se, ge, {
        submission: { ...je, formAction: le },
        preventScrollReset: me || Re,
        enableViewTransition: L ? ze : void 0
      });
    else {
      let ue = Hc(ge, K);
      await da(se, ge, {
        overrideNavigation: ue,
        fetcherSubmission: ae,
        preventScrollReset: me || Re,
        enableViewTransition: L ? ze : void 0
      });
    }
  }
  async function Kt(T, M, L, K, ae) {
    let me,
      oe = {};
    try {
      me = await lS(b, T, M, L, ae, K, !1);
    } catch (le) {
      return (
        L.filter((ge) => ge.shouldLoad).forEach((ge) => {
          oe[ge.route.id] = { type: "error", error: le };
        }),
        oe
      );
    }
    if (T.signal.aborted) return oe;
    if (!Zt(T.method))
      for (let le of L) {
        if (me[le.route.id]?.type === "error") break;
        !me.hasOwnProperty(le.route.id) &&
          !E.loaderData.hasOwnProperty(le.route.id) &&
          (!E.errors || !E.errors.hasOwnProperty(le.route.id)) &&
          le.shouldCallHandler() &&
          (me[le.route.id] = {
            type: "error",
            result: new Error(
              `No result returned from dataStrategy for route ${le.route.id}`
            )
          });
      }
    for (let [le, ge] of Object.entries(me))
      if (hS(ge)) {
        let se = ge.result;
        oe[le] = { type: "redirect", response: uS(se, T, le, L, h) };
      } else oe[le] = await oS(ge);
    return oe;
  }
  async function Vt(T, M, L, K, ae) {
    let me = Kt(L, K, T, ae, null),
      oe = Promise.all(
        M.map(async (se) => {
          if (se.matches && se.match && se.request && se.controller) {
            let xe = (await Kt(se.request, se.path, se.matches, ae, se.key))[
              se.match.route.id
            ];
            return { [se.key]: xe };
          } else
            return Promise.resolve({
              [se.key]: { type: "error", error: La(404, { pathname: se.path }) }
            });
        })
      ),
      le = await me,
      ge = (await oe).reduce((se, we) => Object.assign(se, we), {});
    return { loaderResults: le, fetcherResults: ge };
  }
  function Ta() {
    ((J = !0),
      re.forEach((T, M) => {
        (pe.has(M) && ce.add(M), tt(M));
      }));
  }
  function aa(T, M, L = {}) {
    (E.fetchers.set(T, M),
      Pe(
        { fetchers: new Map(E.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      ));
  }
  function Jt(T, M, L, K = {}) {
    let ae = fl(E.matches, M);
    (na(T),
      Pe(
        { errors: { [ae.route.id]: L }, fetchers: new Map(E.fetchers) },
        { flushSync: (K && K.flushSync) === !0 }
      ));
  }
  function zn(T) {
    return (
      ne.set(T, (ne.get(T) || 0) + 1),
      de.has(T) && de.delete(T),
      E.fetchers.get(T) || Jb
    );
  }
  function Yl(T, M) {
    (tt(T, M?.reason), aa(T, _n(null)));
  }
  function na(T) {
    let M = E.fetchers.get(T);
    (pe.has(T) && !(M && M.state === "loading" && Y.has(T)) && tt(T),
      re.delete(T),
      Y.delete(T),
      Z.delete(T),
      de.delete(T),
      ce.delete(T),
      E.fetchers.delete(T));
  }
  function At(T) {
    let M = (ne.get(T) || 0) - 1;
    (M <= 0 ? (ne.delete(T), de.add(T)) : ne.set(T, M),
      Pe({ fetchers: new Map(E.fetchers) }));
  }
  function tt(T, M) {
    let L = pe.get(T);
    L && (L.abort(M), pe.delete(T));
  }
  function gt(T) {
    for (let M of T) {
      let L = zn(M),
        K = _n(L.data);
      E.fetchers.set(M, K);
    }
  }
  function Ln() {
    let T = [],
      M = !1;
    for (let L of Z) {
      let K = E.fetchers.get(L);
      (Ye(K, `Expected fetcher: ${L}`),
        K.state === "loading" && (Z.delete(L), T.push(L), (M = !0)));
    }
    return (gt(T), M);
  }
  function Un(T) {
    let M = [];
    for (let [L, K] of Y)
      if (K < T) {
        let ae = E.fetchers.get(L);
        (Ye(ae, `Expected fetcher: ${L}`),
          ae.state === "loading" && (tt(L), Y.delete(L), M.push(L)));
      }
    return (gt(M), M.length > 0);
  }
  function Di(T, M) {
    let L = E.blockers.get(T) || xr;
    return (Ne.get(T) !== M && Ne.set(T, M), L);
  }
  function Ya(T) {
    (E.blockers.delete(T), Ne.delete(T));
  }
  function ma(T, M) {
    let L = E.blockers.get(T) || xr;
    Ye(
      (L.state === "unblocked" && M.state === "blocked") ||
        (L.state === "blocked" && M.state === "blocked") ||
        (L.state === "blocked" && M.state === "proceeding") ||
        (L.state === "blocked" && M.state === "unblocked") ||
        (L.state === "proceeding" && M.state === "unblocked"),
      `Invalid blocker state transition: ${L.state} -> ${M.state}`
    );
    let K = new Map(E.blockers);
    (K.set(T, M), Pe({ blockers: K }));
  }
  function on({ currentLocation: T, nextLocation: M, historyAction: L }) {
    if (Ne.size === 0) return;
    Ne.size > 1 && Ot(!1, "A router only supports one blocker at a time");
    let K = Array.from(Ne.entries()),
      [ae, me] = K[K.length - 1],
      oe = E.blockers.get(ae);
    if (
      !(oe && oe.state === "proceeding") &&
      me({ currentLocation: T, nextLocation: M, historyAction: L })
    )
      return ae;
  }
  function Ht(T) {
    let M = La(404, { pathname: T }),
      L = p || g,
      { matches: K, route: ae } = iu(L);
    return { notFoundMatches: K, route: ae, error: M };
  }
  function jn(T, M, L) {
    if (((j = T), (O = M), (k = L || null), !$ && E.navigation === jc)) {
      $ = !0;
      let K = Ra(E.location, E.matches);
      K != null && Pe({ restoreScrollPosition: K });
    }
    return () => {
      ((j = null), (O = null), (k = null));
    };
  }
  function Ka(T, M) {
    return (
      (k &&
        k(
          T,
          M.map((K) => xb(K, E.loaderData))
        )) ||
      T.key
    );
  }
  function yt(T, M) {
    if (j && O) {
      let L = Ka(T, M);
      j[L] = O();
    }
  }
  function Ra(T, M) {
    if (j) {
      let L = Ka(T, M),
        K = j[L];
      if (typeof K == "number") return K;
    }
    return null;
  }
  function Ja(T, M, L) {
    if (l.patchRoutesOnNavigation)
      if (T) {
        if (Object.keys(T[0].params).length > 0)
          return { active: !0, matches: Or(M, L, h, !0) };
      } else return { active: !0, matches: Or(M, L, h, !0) || [] };
    return { active: !1, matches: null };
  }
  async function ha(T, M, L, K) {
    if (!l.patchRoutesOnNavigation) return { type: "success", matches: T };
    let ae = T;
    for (;;) {
      let me = p == null,
        oe = p || g,
        le = m;
      try {
        await l.patchRoutesOnNavigation({
          signal: L,
          path: M,
          matches: ae,
          fetcherKey: K,
          patch: (we, xe) => {
            L.aborted || Rp(we, xe, oe, le, f, !1);
          }
        });
      } catch (we) {
        return { type: "error", error: we, partialMatches: ae };
      } finally {
        me && !L.aborted && (g = [...g]);
      }
      if (L.aborted) return { type: "aborted" };
      let ge = cl(oe, M, h),
        se = null;
      if (ge) {
        if (Object.keys(ge[0].params).length === 0)
          return { type: "success", matches: ge };
        if (
          ((se = Or(oe, M, h, !0)),
          !(se && ae.length < se.length && Hn(ae, se.slice(0, ae.length))))
        )
          return { type: "success", matches: ge };
      }
      if ((se || (se = Or(oe, M, h, !0)), !se || Hn(ae, se)))
        return { type: "success", matches: null };
      ae = se;
    }
  }
  function Hn(T, M) {
    return (
      T.length === M.length && T.every((L, K) => L.route.id === M[K].route.id)
    );
  }
  function hl(T) {
    ((m = {}), (p = Hr(T, f, void 0, m)));
  }
  function pl(T, M, L = !1) {
    let K = p == null;
    (Rp(T, M, p || g, m, f, L), K && ((g = [...g]), Pe({})));
  }
  return (
    (P = {
      get basename() {
        return h;
      },
      get future() {
        return v;
      },
      get state() {
        return E;
      },
      get routes() {
        return g;
      },
      get window() {
        return i;
      },
      initialize: Wt,
      subscribe: fa,
      enableScrollRestoration: jn,
      navigate: ta,
      fetch: kl,
      revalidate: rn,
      createHref: (T) => l.history.createHref(T),
      encodeLocation: (T) => l.history.encodeLocation(T),
      getFetcher: zn,
      resetFetcher: Yl,
      deleteFetcher: At,
      dispose: ea,
      getBlocker: Di,
      deleteBlocker: Ya,
      patchRoutes: pl,
      _internalFetchControllers: pe,
      _internalSetRoutes: hl,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(T) {
        Pe(T);
      }
    }),
    l.unstable_instrumentations &&
      (P = Gb(
        P,
        l.unstable_instrumentations.map((T) => T.router).filter(Boolean)
      )),
    P
  );
}
function Pb(l) {
  return (
    l != null &&
    (("formData" in l && l.formData != null) ||
      ("body" in l && l.body !== void 0))
  );
}
function $c(l, i, s, u, c, f) {
  let m, g;
  if (c) {
    m = [];
    for (let h of i)
      if ((m.push(h), h.route.id === c)) {
        g = h;
        break;
      }
  } else ((m = i), (g = i[i.length - 1]));
  let p = Su(u || ".", cf(m), ja(l.pathname, s) || l.pathname, f === "path");
  if (
    (u == null && ((p.search = l.search), (p.hash = l.hash)),
    (u == null || u === "" || u === ".") && g)
  ) {
    let h = hf(p.search);
    if (g.route.index && !h)
      p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index";
    else if (!g.route.index && h) {
      let b = new URLSearchParams(p.search),
        v = b.getAll("index");
      (b.delete("index"),
        v.filter((w) => w).forEach((w) => b.append("index", w)));
      let N = b.toString();
      p.search = N ? `?${N}` : "";
    }
  }
  return (
    s !== "/" && (p.pathname = Lb({ basename: s, pathname: p.pathname })),
    tn(p)
  );
}
function Ep(l, i, s) {
  if (!s || !Pb(s)) return { path: i };
  if (s.formMethod && !yS(s.formMethod))
    return { path: i, error: La(405, { method: s.formMethod }) };
  let u = () => ({ path: i, error: La(400, { type: "invalid-body" }) }),
    f = (s.formMethod || "get").toUpperCase(),
    m = Yg(i);
  if (s.body !== void 0) {
    if (s.formEncType === "text/plain") {
      if (!Zt(f)) return u();
      let v =
        typeof s.body == "string"
          ? s.body
          : s.body instanceof FormData || s.body instanceof URLSearchParams
            ? Array.from(s.body.entries()).reduce(
                (N, [w, j]) => `${N}${w}=${j}
`,
                ""
              )
            : String(s.body);
      return {
        path: i,
        submission: {
          formMethod: f,
          formAction: m,
          formEncType: s.formEncType,
          formData: void 0,
          json: void 0,
          text: v
        }
      };
    } else if (s.formEncType === "application/json") {
      if (!Zt(f)) return u();
      try {
        let v = typeof s.body == "string" ? JSON.parse(s.body) : s.body;
        return {
          path: i,
          submission: {
            formMethod: f,
            formAction: m,
            formEncType: s.formEncType,
            formData: void 0,
            json: v,
            text: void 0
          }
        };
      } catch {
        return u();
      }
    }
  }
  Ye(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let g, p;
  if (s.formData) ((g = Wc(s.formData)), (p = s.formData));
  else if (s.body instanceof FormData) ((g = Wc(s.body)), (p = s.body));
  else if (s.body instanceof URLSearchParams) ((g = s.body), (p = Np(g)));
  else if (s.body == null) ((g = new URLSearchParams()), (p = new FormData()));
  else
    try {
      ((g = new URLSearchParams(s.body)), (p = Np(g)));
    } catch {
      return u();
    }
  let h = {
    formMethod: f,
    formAction: m,
    formEncType: (s && s.formEncType) || "application/x-www-form-urlencoded",
    formData: p,
    json: void 0,
    text: void 0
  };
  if (Zt(h.formMethod)) return { path: i, submission: h };
  let b = an(i);
  return (
    l && b.search && hf(b.search) && g.append("index", ""),
    (b.search = `?${g}`),
    { path: tn(b), submission: h }
  );
}
function Tp(l, i, s, u, c, f, m, g, p, h, b, v, N, w, j, k, O, $, W, F, ie) {
  let he = F ? (Ea(F[1]) ? F[1].error : F[1].data) : void 0,
    Se = c.createURL(f.location),
    P = c.createURL(p),
    E;
  if (b && f.errors) {
    let fe = Object.keys(f.errors)[0];
    E = m.findIndex((z) => z.route.id === fe);
  } else if (F && Ea(F[1])) {
    let fe = F[0];
    E = m.findIndex((z) => z.route.id === fe) - 1;
  }
  let ee = F ? F[1].statusCode : void 0,
    Ae = ee && ee >= 400,
    Re = {
      currentUrl: Se,
      currentParams: f.matches[0]?.params || {},
      nextUrl: P,
      nextParams: m[0].params,
      ...g,
      actionResult: he,
      actionStatus: ee
    },
    Ee = qr(m),
    ze = m.map((fe, z) => {
      let { route: J } = fe,
        ce = null;
      if (E != null && z > E) ce = !1;
      else if (J.lazy) ce = !0;
      else if (!df(J)) ce = !1;
      else if (b) {
        let { shouldLoad: Y } = Lg(J, f.loaderData, f.errors);
        ce = Y;
      } else Wb(f.loaderData, f.matches[z], fe) && (ce = !0);
      if (ce !== null) return Pc(s, u, l, p, Ee, fe, h, i, ce);
      let pe = !1;
      typeof ie == "boolean"
        ? (pe = ie)
        : Ae
          ? (pe = !1)
          : (v ||
              Se.pathname + Se.search === P.pathname + P.search ||
              Se.search !== P.search ||
              eS(f.matches[z], fe)) &&
            (pe = !0);
      let te = { ...Re, defaultShouldRevalidate: pe },
        R = Ur(fe, te);
      return Pc(s, u, l, p, Ee, fe, h, i, R, te, ie);
    }),
    Xe = [];
  return (
    j.forEach((fe, z) => {
      if (b || !m.some((re) => re.route.id === fe.routeId) || w.has(z)) return;
      let J = f.fetchers.get(z),
        ce = J && J.state !== "idle" && J.data === void 0,
        pe = cl(O, fe.path, $);
      if (!pe) {
        if (W && ce) return;
        Xe.push({
          key: z,
          routeId: fe.routeId,
          path: fe.path,
          matches: null,
          match: null,
          request: null,
          controller: null
        });
        return;
      }
      if (k.has(z)) return;
      let te = mu(pe, fe.path),
        R = new AbortController(),
        Y = Ai(c, fe.path, R.signal),
        Z = null;
      if (N.has(z)) (N.delete(z), (Z = Ni(s, u, Y, fe.path, pe, te, h, i)));
      else if (ce) v && (Z = Ni(s, u, Y, fe.path, pe, te, h, i));
      else {
        let re;
        typeof ie == "boolean" ? (re = ie) : Ae ? (re = !1) : (re = v);
        let ne = { ...Re, defaultShouldRevalidate: re };
        Ur(te, ne) && (Z = Ni(s, u, Y, fe.path, pe, te, h, i, ne));
      }
      Z &&
        Xe.push({
          key: z,
          routeId: fe.routeId,
          path: fe.path,
          matches: Z,
          match: te,
          request: Y,
          controller: R
        });
    }),
    { dsMatches: ze, revalidatingFetchers: Xe }
  );
}
function df(l) {
  return l.loader != null || (l.middleware != null && l.middleware.length > 0);
}
function Lg(l, i, s) {
  if (l.lazy) return { shouldLoad: !0, renderFallback: !0 };
  if (!df(l)) return { shouldLoad: !1, renderFallback: !1 };
  let u = i != null && l.id in i,
    c = s != null && s[l.id] !== void 0;
  if (!u && c) return { shouldLoad: !1, renderFallback: !1 };
  if (typeof l.loader == "function" && l.loader.hydrate === !0)
    return { shouldLoad: !0, renderFallback: !u };
  let f = !u && !c;
  return { shouldLoad: f, renderFallback: f };
}
function Wb(l, i, s) {
  let u = !i || s.route.id !== i.route.id,
    c = !l.hasOwnProperty(s.route.id);
  return u || c;
}
function eS(l, i) {
  let s = l.route.path;
  return (
    l.pathname !== i.pathname ||
    (s != null && s.endsWith("*") && l.params["*"] !== i.params["*"])
  );
}
function Ur(l, i) {
  if (l.route.shouldRevalidate) {
    let s = l.route.shouldRevalidate(i);
    if (typeof s == "boolean") return s;
  }
  return i.defaultShouldRevalidate;
}
function Rp(l, i, s, u, c, f) {
  let m;
  if (l) {
    let h = u[l];
    (Ye(h, `No route found to patch children into: routeId = ${l}`),
      h.children || (h.children = []),
      (m = h.children));
  } else m = s;
  let g = [],
    p = [];
  if (
    (i.forEach((h) => {
      let b = m.find((v) => Ug(h, v));
      b ? p.push({ existingRoute: b, newRoute: h }) : g.push(h);
    }),
    g.length > 0)
  ) {
    let h = Hr(g, c, [l || "_", "patch", String(m?.length || "0")], u);
    m.push(...h);
  }
  if (f && p.length > 0)
    for (let h = 0; h < p.length; h++) {
      let { existingRoute: b, newRoute: v } = p[h],
        N = b,
        [w] = Hr([v], c, [], {}, !0);
      Object.assign(N, {
        element: w.element ? w.element : N.element,
        errorElement: w.errorElement ? w.errorElement : N.errorElement,
        hydrateFallbackElement: w.hydrateFallbackElement
          ? w.hydrateFallbackElement
          : N.hydrateFallbackElement
      });
    }
}
function Ug(l, i) {
  return "id" in l && "id" in i && l.id === i.id
    ? !0
    : l.index === i.index &&
        l.path === i.path &&
        l.caseSensitive === i.caseSensitive
      ? (!l.children || l.children.length === 0) &&
        (!i.children || i.children.length === 0)
        ? !0
        : (l.children?.every((s, u) => i.children?.some((c) => Ug(s, c))) ?? !1)
      : !1;
}
var Ap = new WeakMap(),
  jg = ({ key: l, route: i, manifest: s, mapRouteProperties: u }) => {
    let c = s[i.id];
    if (
      (Ye(c, "No route found in manifest"),
      !c.lazy || typeof c.lazy != "object")
    )
      return;
    let f = c.lazy[l];
    if (!f) return;
    let m = Ap.get(c);
    m || ((m = {}), Ap.set(c, m));
    let g = m[l];
    if (g) return g;
    let p = (async () => {
      let h = yb(l),
        v = c[l] !== void 0 && l !== "hasErrorBoundary";
      if (h)
        (Ot(
          !h,
          "Route property " +
            l +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (m[l] = Promise.resolve()));
      else if (v)
        Ot(
          !1,
          `Route "${c.id}" has a static property "${l}" defined. The lazy property will be ignored.`
        );
      else {
        let N = await f();
        N != null && (Object.assign(c, { [l]: N }), Object.assign(c, u(c)));
      }
      typeof c.lazy == "object" &&
        ((c.lazy[l] = void 0),
        Object.values(c.lazy).every((N) => N === void 0) && (c.lazy = void 0));
    })();
    return ((m[l] = p), p);
  },
  wp = new WeakMap();
function tS(l, i, s, u, c) {
  let f = s[l.id];
  if ((Ye(f, "No route found in manifest"), !l.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof l.lazy == "function") {
    let b = wp.get(f);
    if (b) return { lazyRoutePromise: b, lazyHandlerPromise: b };
    let v = (async () => {
      Ye(typeof l.lazy == "function", "No lazy route function found");
      let N = await l.lazy(),
        w = {};
      for (let j in N) {
        let k = N[j];
        if (k === void 0) continue;
        let O = bb(j),
          W = f[j] !== void 0 && j !== "hasErrorBoundary";
        O
          ? Ot(
              !O,
              "Route property " +
                j +
                " is not a supported property to be returned from a lazy route function. This property will be ignored."
            )
          : W
            ? Ot(
                !W,
                `Route "${f.id}" has a static property "${j}" defined but its lazy function is also returning a value for this property. The lazy route property "${j}" will be ignored.`
              )
            : (w[j] = k);
      }
      (Object.assign(f, w), Object.assign(f, { ...u(f), lazy: void 0 }));
    })();
    return (
      wp.set(f, v),
      v.catch(() => {}),
      { lazyRoutePromise: v, lazyHandlerPromise: v }
    );
  }
  let m = Object.keys(l.lazy),
    g = [],
    p;
  for (let b of m) {
    if (c && c.includes(b)) continue;
    let v = jg({ key: b, route: l, manifest: s, mapRouteProperties: u });
    v && (g.push(v), b === i && (p = v));
  }
  let h = g.length > 0 ? Promise.all(g).then(() => {}) : void 0;
  return (
    h?.catch(() => {}),
    p?.catch(() => {}),
    { lazyRoutePromise: h, lazyHandlerPromise: p }
  );
}
async function _p(l) {
  let i = l.matches.filter((c) => c.shouldLoad),
    s = {};
  return (
    (await Promise.all(i.map((c) => c.resolve()))).forEach((c, f) => {
      s[i[f].route.id] = c;
    }),
    s
  );
}
async function aS(l) {
  return l.matches.some((i) => i.route.middleware) ? Hg(l, () => _p(l)) : _p(l);
}
function Hg(l, i) {
  return nS(
    l,
    i,
    (u) => {
      if (gS(u)) throw u;
      return u;
    },
    dS,
    s
  );
  function s(u, c, f) {
    if (f)
      return Promise.resolve(
        Object.assign(f.value, { [c]: { type: "error", result: u } })
      );
    {
      let { matches: m } = l,
        g = Math.min(
          Math.max(
            m.findIndex((h) => h.route.id === c),
            0
          ),
          Math.max(
            m.findIndex((h) => h.shouldCallHandler()),
            0
          )
        ),
        p = fl(m, m[g].route.id).route.id;
      return Promise.resolve({ [p]: { type: "error", result: u } });
    }
  }
}
async function nS(l, i, s, u, c) {
  let { matches: f, ...m } = l,
    g = f.flatMap((h) =>
      h.route.middleware ? h.route.middleware.map((b) => [h.route.id, b]) : []
    );
  return await Bg(m, g, i, s, u, c);
}
async function Bg(l, i, s, u, c, f, m = 0) {
  let { request: g } = l;
  if (g.signal.aborted)
    throw g.signal.reason ?? new Error(`Request aborted: ${g.method} ${g.url}`);
  let p = i[m];
  if (!p) return await s();
  let [h, b] = p,
    v,
    N = async () => {
      if (v) throw new Error("You may only call `next()` once per middleware");
      try {
        return ((v = { value: await Bg(l, i, s, u, c, f, m + 1) }), v.value);
      } catch (w) {
        return ((v = { value: await f(w, h, v) }), v.value);
      }
    };
  try {
    let w = await b(l, N),
      j = w != null ? u(w) : void 0;
    return c(j)
      ? j
      : v
        ? (j ?? v.value)
        : ((v = { value: await N() }), v.value);
  } catch (w) {
    return await f(w, h, v);
  }
}
function kg(l, i, s, u, c) {
  let f = jg({
      key: "middleware",
      route: u.route,
      manifest: i,
      mapRouteProperties: l
    }),
    m = tS(u.route, Zt(s.method) ? "action" : "loader", i, l, c);
  return {
    middleware: f,
    route: m.lazyRoutePromise,
    handler: m.lazyHandlerPromise
  };
}
function Pc(l, i, s, u, c, f, m, g, p, h = null, b) {
  let v = !1,
    N = kg(l, i, s, f, m);
  return {
    ...f,
    _lazyPromises: N,
    shouldLoad: p,
    shouldRevalidateArgs: h,
    shouldCallHandler(w) {
      return (
        (v = !0),
        h
          ? typeof b == "boolean"
            ? Ur(f, { ...h, defaultShouldRevalidate: b })
            : typeof w == "boolean"
              ? Ur(f, { ...h, defaultShouldRevalidate: w })
              : Ur(f, h)
          : p
      );
    },
    resolve(w) {
      let { lazy: j, loader: k, middleware: O } = f.route,
        $ = v || p || (w && !Zt(s.method) && (j || k)),
        W = O && O.length > 0 && !k && !j;
      return $ && (Zt(s.method) || !W)
        ? iS({
            request: s,
            path: u,
            unstable_pattern: c,
            match: f,
            lazyHandlerPromise: N?.handler,
            lazyRoutePromise: N?.route,
            handlerOverride: w,
            scopedContext: g
          })
        : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function Ni(l, i, s, u, c, f, m, g, p = null) {
  return c.map((h) =>
    h.route.id !== f.route.id
      ? {
          ...h,
          shouldLoad: !1,
          shouldRevalidateArgs: p,
          shouldCallHandler: () => !1,
          _lazyPromises: kg(l, i, s, h, m),
          resolve: () => Promise.resolve({ type: "data", result: void 0 })
        }
      : Pc(l, i, s, u, qr(c), h, m, g, !0, p)
  );
}
async function lS(l, i, s, u, c, f, m) {
  u.some((b) => b._lazyPromises?.middleware) &&
    (await Promise.all(u.map((b) => b._lazyPromises?.middleware)));
  let g = {
      request: i,
      unstable_url: Gg(i, s),
      unstable_pattern: qr(u),
      params: u[0].params,
      context: f,
      matches: u
    },
    h = await l({
      ...g,
      fetcherKey: c,
      runClientMiddleware: (b) => {
        let v = g;
        return Hg(v, () =>
          b({
            ...v,
            fetcherKey: c,
            runClientMiddleware: () => {
              throw new Error(
                "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
              );
            }
          })
        );
      }
    });
  try {
    await Promise.all(
      u.flatMap((b) => [b._lazyPromises?.handler, b._lazyPromises?.route])
    );
  } catch {}
  return h;
}
async function iS({
  request: l,
  path: i,
  unstable_pattern: s,
  match: u,
  lazyHandlerPromise: c,
  lazyRoutePromise: f,
  handlerOverride: m,
  scopedContext: g
}) {
  let p,
    h,
    b = Zt(l.method),
    v = b ? "action" : "loader",
    N = (w) => {
      let j,
        k = new Promise((W, F) => (j = F));
      ((h = () => j()), l.signal.addEventListener("abort", h));
      let O = (W) =>
          typeof w != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${u.route.id}]`
                )
              )
            : w(
                {
                  request: l,
                  unstable_url: Gg(l, i),
                  unstable_pattern: s,
                  params: u.params,
                  context: g
                },
                ...(W !== void 0 ? [W] : [])
              ),
        $ = (async () => {
          try {
            return { type: "data", result: await (m ? m((F) => O(F)) : O()) };
          } catch (W) {
            return { type: "error", result: W };
          }
        })();
      return Promise.race([$, k]);
    };
  try {
    let w = b ? u.route.action : u.route.loader;
    if (c || f)
      if (w) {
        let j,
          [k] = await Promise.all([
            N(w).catch((O) => {
              j = O;
            }),
            c,
            f
          ]);
        if (j !== void 0) throw j;
        p = k;
      } else {
        await c;
        let j = b ? u.route.action : u.route.loader;
        if (j) [p] = await Promise.all([N(j), f]);
        else if (v === "action") {
          let k = new URL(l.url),
            O = k.pathname + k.search;
          throw La(405, { method: l.method, pathname: O, routeId: u.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (w) p = await N(w);
    else {
      let j = new URL(l.url),
        k = j.pathname + j.search;
      throw La(404, { pathname: k });
    }
  } catch (w) {
    return { type: "error", result: w };
  } finally {
    h && l.signal.removeEventListener("abort", h);
  }
  return p;
}
async function rS(l) {
  let i = l.headers.get("Content-Type");
  return i && /\bapplication\/json\b/.test(i)
    ? l.body == null
      ? null
      : l.json()
    : l.text();
}
async function oS(l) {
  let { result: i, type: s } = l;
  if (mf(i)) {
    let u;
    try {
      u = await rS(i);
    } catch (c) {
      return { type: "error", error: c };
    }
    return s === "error"
      ? {
          type: "error",
          error: new Yr(i.status, i.statusText, u),
          statusCode: i.status,
          headers: i.headers
        }
      : { type: "data", data: u, statusCode: i.status, headers: i.headers };
  }
  return s === "error"
    ? Lp(i)
      ? i.data instanceof Error
        ? {
            type: "error",
            error: i.data,
            statusCode: i.init?.status,
            headers: i.init?.headers ? new Headers(i.init.headers) : void 0
          }
        : {
            type: "error",
            error: fS(i),
            statusCode: Br(i) ? i.status : void 0,
            headers: i.init?.headers ? new Headers(i.init.headers) : void 0
          }
      : { type: "error", error: i, statusCode: Br(i) ? i.status : void 0 }
    : Lp(i)
      ? {
          type: "data",
          data: i.data,
          statusCode: i.init?.status,
          headers: i.init?.headers ? new Headers(i.init.headers) : void 0
        }
      : { type: "data", data: i };
}
function uS(l, i, s, u, c) {
  let f = l.headers.get("Location");
  if (
    (Ye(
      f,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !sf(f))
  ) {
    let m = u.slice(0, u.findIndex((g) => g.route.id === s) + 1);
    ((f = $c(new URL(i.url), m, c, f)), l.headers.set("Location", f));
  }
  return l;
}
var Cp = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  "javascript:"
];
function Mp(l, i, s, u) {
  if (sf(l)) {
    let c = l,
      f = c.startsWith("//") ? new URL(i.protocol + c) : new URL(c);
    if (Cp.includes(f.protocol)) throw new Error("Invalid redirect location");
    let m = ja(f.pathname, s) != null;
    if (f.origin === i.origin && m) return ff(f.pathname) + f.search + f.hash;
  }
  try {
    let c = u.createURL(l);
    if (Cp.includes(c.protocol)) throw new Error("Invalid redirect location");
  } catch {}
  return l;
}
function Ai(l, i, s, u) {
  let c = l.createURL(Yg(i)).toString(),
    f = { signal: s };
  if (u && Zt(u.formMethod)) {
    let { formMethod: m, formEncType: g } = u;
    ((f.method = m.toUpperCase()),
      g === "application/json"
        ? ((f.headers = new Headers({ "Content-Type": g })),
          (f.body = JSON.stringify(u.json)))
        : g === "text/plain"
          ? (f.body = u.text)
          : g === "application/x-www-form-urlencoded" && u.formData
            ? (f.body = Wc(u.formData))
            : (f.body = u.formData));
  }
  return new Request(c, f);
}
function Gg(l, i) {
  let s = new URL(l.url),
    u = typeof i == "string" ? an(i) : i;
  if (((s.pathname = u.pathname || "/"), u.search)) {
    let c = new URLSearchParams(u.search),
      f = c.getAll("index");
    c.delete("index");
    for (let m of f.filter(Boolean)) c.append("index", m);
    s.search = c.size ? `?${c.toString()}` : "";
  } else s.search = "";
  return ((s.hash = u.hash || ""), s);
}
function Wc(l) {
  let i = new URLSearchParams();
  for (let [s, u] of l.entries())
    i.append(s, typeof u == "string" ? u : u.name);
  return i;
}
function Np(l) {
  let i = new FormData();
  for (let [s, u] of l.entries()) i.append(s, u);
  return i;
}
function sS(l, i, s, u = !1, c = !1) {
  let f = {},
    m = null,
    g,
    p = !1,
    h = {},
    b = s && Ea(s[1]) ? s[1].error : void 0;
  return (
    l.forEach((v) => {
      if (!(v.route.id in i)) return;
      let N = v.route.id,
        w = i[N];
      if (
        (Ye(!Ll(w), "Cannot handle redirect results in processLoaderData"),
        Ea(w))
      ) {
        let j = w.error;
        if ((b !== void 0 && ((j = b), (b = void 0)), (m = m || {}), c))
          m[N] = j;
        else {
          let k = fl(l, N);
          m[k.route.id] == null && (m[k.route.id] = j);
        }
        (u || (f[N] = zg),
          p || ((p = !0), (g = Br(w.error) ? w.error.status : 500)),
          w.headers && (h[N] = w.headers));
      } else
        ((f[N] = w.data),
          w.statusCode && w.statusCode !== 200 && !p && (g = w.statusCode),
          w.headers && (h[N] = w.headers));
    }),
    b !== void 0 && s && ((m = { [s[0]]: b }), s[2] && (f[s[2]] = void 0)),
    { loaderData: f, errors: m, statusCode: g || 200, loaderHeaders: h }
  );
}
function Op(l, i, s, u, c, f) {
  let { loaderData: m, errors: g } = sS(i, s, u);
  return (
    c
      .filter((p) => !p.matches || p.matches.some((h) => h.shouldLoad))
      .forEach((p) => {
        let { key: h, match: b, controller: v } = p;
        if (v && v.signal.aborted) return;
        let N = f[h];
        if ((Ye(N, "Did not find corresponding fetcher result"), Ea(N))) {
          let w = fl(l.matches, b?.route.id);
          ((g && g[w.route.id]) || (g = { ...g, [w.route.id]: N.error }),
            l.fetchers.delete(h));
        } else if (Ll(N)) Ye(!1, "Unhandled fetcher revalidation redirect");
        else {
          let w = _n(N.data);
          l.fetchers.set(h, w);
        }
      }),
    { loaderData: m, errors: g }
  );
}
function Dp(l, i, s, u) {
  let c = Object.entries(i)
    .filter(([, f]) => f !== zg)
    .reduce((f, [m, g]) => ((f[m] = g), f), {});
  for (let f of s) {
    let m = f.route.id;
    if (
      (!i.hasOwnProperty(m) &&
        l.hasOwnProperty(m) &&
        f.route.loader &&
        (c[m] = l[m]),
      u && u.hasOwnProperty(m))
    )
      break;
  }
  return c;
}
function zp(l) {
  return l
    ? Ea(l[1])
      ? { actionData: {} }
      : { actionData: { [l[0]]: l[1].data } }
    : {};
}
function fl(l, i) {
  return (
    (i ? l.slice(0, l.findIndex((u) => u.route.id === i) + 1) : [...l])
      .reverse()
      .find((u) => u.route.hasErrorBoundary === !0) || l[0]
  );
}
function iu(l) {
  let i =
    l.length === 1
      ? l[0]
      : l.find((s) => s.index || !s.path || s.path === "/") || {
          id: "__shim-error-route__"
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: i }],
    route: i
  };
}
function La(
  l,
  { pathname: i, routeId: s, method: u, type: c, message: f } = {}
) {
  let m = "Unknown Server Error",
    g = "Unknown @remix-run/router error";
  return (
    l === 400
      ? ((m = "Bad Request"),
        u && i && s
          ? (g = `You made a ${u} request to "${i}" but did not provide a \`loader\` for route "${s}", so there is no way to handle the request.`)
          : c === "invalid-body" && (g = "Unable to encode submission body"))
      : l === 403
        ? ((m = "Forbidden"), (g = `Route "${s}" does not match URL "${i}"`))
        : l === 404
          ? ((m = "Not Found"), (g = `No route matches URL "${i}"`))
          : l === 405 &&
            ((m = "Method Not Allowed"),
            u && i && s
              ? (g = `You made a ${u.toUpperCase()} request to "${i}" but did not provide an \`action\` for route "${s}", so there is no way to handle the request.`)
              : u && (g = `Invalid request method "${u.toUpperCase()}"`)),
    new Yr(l || 500, m, new Error(g), !0)
  );
}
function ru(l) {
  let i = Object.entries(l);
  for (let s = i.length - 1; s >= 0; s--) {
    let [u, c] = i[s];
    if (Ll(c)) return { key: u, result: c };
  }
}
function Yg(l) {
  let i = typeof l == "string" ? an(l) : l;
  return tn({ ...i, hash: "" });
}
function cS(l, i) {
  return l.pathname !== i.pathname || l.search !== i.search
    ? !1
    : l.hash === ""
      ? i.hash !== ""
      : l.hash === i.hash
        ? !0
        : i.hash !== "";
}
function fS(l) {
  return new Yr(
    l.init?.status ?? 500,
    l.init?.statusText ?? "Internal Server Error",
    l.data
  );
}
function dS(l) {
  return (
    l != null &&
    typeof l == "object" &&
    Object.entries(l).every(([i, s]) => typeof i == "string" && mS(s))
  );
}
function mS(l) {
  return (
    l != null &&
    typeof l == "object" &&
    "type" in l &&
    "result" in l &&
    (l.type === "data" || l.type === "error")
  );
}
function hS(l) {
  return mf(l.result) && Og.has(l.result.status);
}
function Ea(l) {
  return l.type === "error";
}
function Ll(l) {
  return (l && l.type) === "redirect";
}
function Lp(l) {
  return (
    typeof l == "object" &&
    l != null &&
    "type" in l &&
    "data" in l &&
    "init" in l &&
    l.type === "DataWithResponseInit"
  );
}
function mf(l) {
  return (
    l != null &&
    typeof l.status == "number" &&
    typeof l.statusText == "string" &&
    typeof l.headers == "object" &&
    typeof l.body < "u"
  );
}
function pS(l) {
  return Og.has(l);
}
function gS(l) {
  return mf(l) && pS(l.status) && l.headers.has("Location");
}
function yS(l) {
  return Fb.has(l.toUpperCase());
}
function Zt(l) {
  return Qb.has(l.toUpperCase());
}
function hf(l) {
  return new URLSearchParams(l).getAll("index").some((i) => i === "");
}
function mu(l, i) {
  let s = typeof i == "string" ? an(i).search : i.search;
  if (l[l.length - 1].route.index && hf(s || "")) return l[l.length - 1];
  let u = wg(l);
  return u[u.length - 1];
}
function Up(l) {
  let {
    formMethod: i,
    formAction: s,
    formEncType: u,
    text: c,
    formData: f,
    json: m
  } = l;
  if (!(!i || !s || !u)) {
    if (c != null)
      return {
        formMethod: i,
        formAction: s,
        formEncType: u,
        formData: void 0,
        json: void 0,
        text: c
      };
    if (f != null)
      return {
        formMethod: i,
        formAction: s,
        formEncType: u,
        formData: f,
        json: void 0,
        text: void 0
      };
    if (m !== void 0)
      return {
        formMethod: i,
        formAction: s,
        formEncType: u,
        formData: void 0,
        json: m,
        text: void 0
      };
  }
}
function Hc(l, i) {
  return i
    ? {
        state: "loading",
        location: l,
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text
      }
    : {
        state: "loading",
        location: l,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
      };
}
function vS(l, i) {
  return {
    state: "submitting",
    location: l,
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text
  };
}
function Er(l, i) {
  return l
    ? {
        state: "loading",
        formMethod: l.formMethod,
        formAction: l.formAction,
        formEncType: l.formEncType,
        formData: l.formData,
        json: l.json,
        text: l.text,
        data: i
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: i
      };
}
function bS(l, i) {
  return {
    state: "submitting",
    formMethod: l.formMethod,
    formAction: l.formAction,
    formEncType: l.formEncType,
    formData: l.formData,
    json: l.json,
    text: l.text,
    data: i ? i.data : void 0
  };
}
function _n(l) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: l
  };
}
function SS(l, i) {
  try {
    let s = l.sessionStorage.getItem(Dg);
    if (s) {
      let u = JSON.parse(s);
      for (let [c, f] of Object.entries(u || {}))
        f && Array.isArray(f) && i.set(c, new Set(f || []));
    }
  } catch {}
}
function xS(l, i) {
  if (i.size > 0) {
    let s = {};
    for (let [u, c] of i) s[u] = [...c];
    try {
      l.sessionStorage.setItem(Dg, JSON.stringify(s));
    } catch (u) {
      Ot(
        !1,
        `Failed to save applied view transitions in sessionStorage (${u}).`
      );
    }
  }
}
function jp() {
  let l,
    i,
    s = new Promise((u, c) => {
      ((l = async (f) => {
        u(f);
        try {
          await s;
        } catch {}
      }),
        (i = async (f) => {
          c(f);
          try {
            await s;
          } catch {}
        }));
    });
  return { promise: s, resolve: l, reject: i };
}
var jl = x.createContext(null);
jl.displayName = "DataRouter";
var Vr = x.createContext(null);
Vr.displayName = "DataRouterState";
var qg = x.createContext(!1);
function Vg() {
  return x.useContext(qg);
}
var pf = x.createContext({ isTransitioning: !1 });
pf.displayName = "ViewTransition";
var Xg = x.createContext(new Map());
Xg.displayName = "Fetchers";
var ES = x.createContext(null);
ES.displayName = "Await";
var Ba = x.createContext(null);
Ba.displayName = "Navigation";
var xu = x.createContext(null);
xu.displayName = "Location";
var nn = x.createContext({ outlet: null, matches: [], isDataRoute: !1 });
nn.displayName = "Route";
var gf = x.createContext(null);
gf.displayName = "RouteError";
var Qg = "REACT_ROUTER_ERROR",
  TS = "REDIRECT",
  RS = "ROUTE_ERROR_RESPONSE";
function AS(l) {
  if (l.startsWith(`${Qg}:${TS}:{`))
    try {
      let i = JSON.parse(l.slice(28));
      if (
        typeof i == "object" &&
        i &&
        typeof i.status == "number" &&
        typeof i.statusText == "string" &&
        typeof i.location == "string" &&
        typeof i.reloadDocument == "boolean" &&
        typeof i.replace == "boolean"
      )
        return i;
    } catch {}
}
function wS(l) {
  if (l.startsWith(`${Qg}:${RS}:{`))
    try {
      let i = JSON.parse(l.slice(40));
      if (
        typeof i == "object" &&
        i &&
        typeof i.status == "number" &&
        typeof i.statusText == "string"
      )
        return new Yr(i.status, i.statusText, i.data);
    } catch {}
}
function _S(l, { relative: i } = {}) {
  Ye(
    Xr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: u } = x.useContext(Ba),
    { hash: c, pathname: f, search: m } = Qr(l, { relative: i }),
    g = f;
  return (
    s !== "/" && (g = f === "/" ? s : Ua([s, f])),
    u.createHref({ pathname: g, search: m, hash: c })
  );
}
function Xr() {
  return x.useContext(xu) != null;
}
function Za() {
  return (
    Ye(
      Xr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    x.useContext(xu).location
  );
}
var Zg =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Fg(l) {
  x.useContext(Ba).static || x.useLayoutEffect(l);
}
function Eu() {
  let { isDataRoute: l } = x.useContext(nn);
  return l ? qS() : CS();
}
function CS() {
  Ye(
    Xr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = x.useContext(jl),
    { basename: i, navigator: s } = x.useContext(Ba),
    { matches: u } = x.useContext(nn),
    { pathname: c } = Za(),
    f = JSON.stringify(cf(u)),
    m = x.useRef(!1);
  return (
    Fg(() => {
      m.current = !0;
    }),
    x.useCallback(
      (p, h = {}) => {
        if ((Ot(m.current, Zg), !m.current)) return;
        if (typeof p == "number") {
          s.go(p);
          return;
        }
        let b = Su(p, JSON.parse(f), c, h.relative === "path");
        (l == null &&
          i !== "/" &&
          (b.pathname = b.pathname === "/" ? i : Ua([i, b.pathname])),
          (h.replace ? s.replace : s.push)(b, h.state, h));
      },
      [i, s, f, c, l]
    )
  );
}
var MS = x.createContext(null);
function NS(l) {
  let i = x.useContext(nn).outlet;
  return x.useMemo(
    () => i && x.createElement(MS.Provider, { value: l }, i),
    [i, l]
  );
}
function Qr(l, { relative: i } = {}) {
  let { matches: s } = x.useContext(nn),
    { pathname: u } = Za(),
    c = JSON.stringify(cf(s));
  return x.useMemo(() => Su(l, JSON.parse(c), u, i === "path"), [l, c, u, i]);
}
function OS(l, i, s) {
  Ye(
    Xr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: u } = x.useContext(Ba),
    { matches: c } = x.useContext(nn),
    f = c[c.length - 1],
    m = f ? f.params : {},
    g = f ? f.pathname : "/",
    p = f ? f.pathnameBase : "/",
    h = f && f.route;
  {
    let O = (h && h.path) || "";
    Jg(
      g,
      !h || O.endsWith("*") || O.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O === "/" ? "*" : `${O}/*`}">.`
    );
  }
  let b = Za(),
    v;
  v = b;
  let N = v.pathname || "/",
    w = N;
  if (p !== "/") {
    let O = p.replace(/^\//, "").split("/");
    w = "/" + N.replace(/^\//, "").split("/").slice(O.length).join("/");
  }
  let j = cl(l, { pathname: w });
  return (
    Ot(
      h || j != null,
      `No routes matched location "${v.pathname}${v.search}${v.hash}" `
    ),
    Ot(
      j == null ||
        j[j.length - 1].route.element !== void 0 ||
        j[j.length - 1].route.Component !== void 0 ||
        j[j.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    jS(
      j &&
        j.map((O) =>
          Object.assign({}, O, {
            params: Object.assign({}, m, O.params),
            pathname: Ua([
              p,
              u.encodeLocation
                ? u.encodeLocation(
                    O.pathname
                      .replace(/%/g, "%25")
                      .replace(/\?/g, "%3F")
                      .replace(/#/g, "%23")
                  ).pathname
                : O.pathname
            ]),
            pathnameBase:
              O.pathnameBase === "/"
                ? p
                : Ua([
                    p,
                    u.encodeLocation
                      ? u.encodeLocation(
                          O.pathnameBase
                            .replace(/%/g, "%25")
                            .replace(/\?/g, "%3F")
                            .replace(/#/g, "%23")
                        ).pathname
                      : O.pathnameBase
                  ])
          })
        ),
      c,
      s
    )
  );
}
function DS() {
  let l = YS(),
    i = Br(l)
      ? `${l.status} ${l.statusText}`
      : l instanceof Error
        ? l.message
        : JSON.stringify(l),
    s = l instanceof Error ? l.stack : null,
    u = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: u },
    f = { padding: "2px 4px", backgroundColor: u },
    m = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", l),
    (m = x.createElement(
      x.Fragment,
      null,
      x.createElement("p", null, "💿 Hey developer 👋"),
      x.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        x.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        x.createElement("code", { style: f }, "errorElement"),
        " prop on your route."
      )
    )),
    x.createElement(
      x.Fragment,
      null,
      x.createElement("h2", null, "Unexpected Application Error!"),
      x.createElement("h3", { style: { fontStyle: "italic" } }, i),
      s ? x.createElement("pre", { style: c }, s) : null,
      m
    )
  );
}
var zS = x.createElement(DS, null),
  Kg = class extends x.Component {
    constructor(l) {
      (super(l),
        (this.state = {
          location: l.location,
          revalidation: l.revalidation,
          error: l.error
        }));
    }
    static getDerivedStateFromError(l) {
      return { error: l };
    }
    static getDerivedStateFromProps(l, i) {
      return i.location !== l.location ||
        (i.revalidation !== "idle" && l.revalidation === "idle")
        ? { error: l.error, location: l.location, revalidation: l.revalidation }
        : {
            error: l.error !== void 0 ? l.error : i.error,
            location: i.location,
            revalidation: l.revalidation || i.revalidation
          };
    }
    componentDidCatch(l, i) {
      this.props.onError
        ? this.props.onError(l, i)
        : console.error(
            "React Router caught the following error during render",
            l
          );
    }
    render() {
      let l = this.state.error;
      if (
        this.context &&
        typeof l == "object" &&
        l &&
        "digest" in l &&
        typeof l.digest == "string"
      ) {
        const s = wS(l.digest);
        s && (l = s);
      }
      let i =
        l !== void 0
          ? x.createElement(
              nn.Provider,
              { value: this.props.routeContext },
              x.createElement(gf.Provider, {
                value: l,
                children: this.props.component
              })
            )
          : this.props.children;
      return this.context ? x.createElement(LS, { error: l }, i) : i;
    }
  };
Kg.contextType = qg;
var Bc = new WeakMap();
function LS({ children: l, error: i }) {
  let { basename: s } = x.useContext(Ba);
  if (
    typeof i == "object" &&
    i &&
    "digest" in i &&
    typeof i.digest == "string"
  ) {
    let u = AS(i.digest);
    if (u) {
      let c = Bc.get(i);
      if (c) throw c;
      let f = Cg(u.location, s);
      if (_g && !Bc.get(i))
        if (f.isExternal || u.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const m = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(f.to, {
              replace: u.replace
            })
          );
          throw (Bc.set(i, m), m);
        }
      return x.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${f.absoluteURL || f.to}`
      });
    }
  }
  return l;
}
function US({ routeContext: l, match: i, children: s }) {
  let u = x.useContext(jl);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = i.route.id),
    x.createElement(nn.Provider, { value: l }, s)
  );
}
function jS(l, i = [], s) {
  let u = s?.state;
  if (l == null) {
    if (!u) return null;
    if (u.errors) l = u.matches;
    else if (i.length === 0 && !u.initialized && u.matches.length > 0)
      l = u.matches;
    else return null;
  }
  let c = l,
    f = u?.errors;
  if (f != null) {
    let b = c.findIndex((v) => v.route.id && f?.[v.route.id] !== void 0);
    (Ye(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`
    ),
      (c = c.slice(0, Math.min(c.length, b + 1))));
  }
  let m = !1,
    g = -1;
  if (s && u) {
    m = u.renderFallback;
    for (let b = 0; b < c.length; b++) {
      let v = c[b];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (g = b),
        v.route.id)
      ) {
        let { loaderData: N, errors: w } = u,
          j =
            v.route.loader &&
            !N.hasOwnProperty(v.route.id) &&
            (!w || w[v.route.id] === void 0);
        if (v.route.lazy || j) {
          (s.isStatic && (m = !0),
            g >= 0 ? (c = c.slice(0, g + 1)) : (c = [c[0]]));
          break;
        }
      }
    }
  }
  let p = s?.onError,
    h =
      u && p
        ? (b, v) => {
            p(b, {
              location: u.location,
              params: u.matches?.[0]?.params ?? {},
              unstable_pattern: qr(u.matches),
              errorInfo: v
            });
          }
        : void 0;
  return c.reduceRight((b, v, N) => {
    let w,
      j = !1,
      k = null,
      O = null;
    u &&
      ((w = f && v.route.id ? f[v.route.id] : void 0),
      (k = v.route.errorElement || zS),
      m &&
        (g < 0 && N === 0
          ? (Jg(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (j = !0),
            (O = null))
          : g === N &&
            ((j = !0), (O = v.route.hydrateFallbackElement || null))));
    let $ = i.concat(c.slice(0, N + 1)),
      W = () => {
        let F;
        return (
          w
            ? (F = k)
            : j
              ? (F = O)
              : v.route.Component
                ? (F = x.createElement(v.route.Component, null))
                : v.route.element
                  ? (F = v.route.element)
                  : (F = b),
          x.createElement(US, {
            match: v,
            routeContext: { outlet: b, matches: $, isDataRoute: u != null },
            children: F
          })
        );
      };
    return u && (v.route.ErrorBoundary || v.route.errorElement || N === 0)
      ? x.createElement(Kg, {
          location: u.location,
          revalidation: u.revalidation,
          component: k,
          error: w,
          children: W(),
          routeContext: { outlet: null, matches: $, isDataRoute: !0 },
          onError: h
        })
      : W();
  }, null);
}
function yf(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function HS(l) {
  let i = x.useContext(jl);
  return (Ye(i, yf(l)), i);
}
function BS(l) {
  let i = x.useContext(Vr);
  return (Ye(i, yf(l)), i);
}
function kS(l) {
  let i = x.useContext(nn);
  return (Ye(i, yf(l)), i);
}
function vf(l) {
  let i = kS(l),
    s = i.matches[i.matches.length - 1];
  return (
    Ye(
      s.route.id,
      `${l} can only be used on routes that contain a unique "id"`
    ),
    s.route.id
  );
}
function GS() {
  return vf("useRouteId");
}
function YS() {
  let l = x.useContext(gf),
    i = BS("useRouteError"),
    s = vf("useRouteError");
  return l !== void 0 ? l : i.errors?.[s];
}
function qS() {
  let { router: l } = HS("useNavigate"),
    i = vf("useNavigate"),
    s = x.useRef(!1);
  return (
    Fg(() => {
      s.current = !0;
    }),
    x.useCallback(
      async (c, f = {}) => {
        (Ot(s.current, Zg),
          s.current &&
            (typeof c == "number"
              ? await l.navigate(c)
              : await l.navigate(c, { fromRouteId: i, ...f })));
      },
      [l, i]
    )
  );
}
var Hp = {};
function Jg(l, i, s) {
  !i && !Hp[l] && ((Hp[l] = !0), Ot(!1, s));
}
var Bp = {};
function kp(l, i) {
  !l && !Bp[i] && ((Bp[i] = !0), console.warn(i));
}
var VS = "useOptimistic",
  Gp = uf[VS],
  XS = () => {};
function QS(l) {
  return Gp ? Gp(l) : [l, XS];
}
function ZS(l) {
  let i = {
    hasErrorBoundary:
      l.hasErrorBoundary || l.ErrorBoundary != null || l.errorElement != null
  };
  return (
    l.Component &&
      (l.element &&
        Ot(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(i, {
        element: x.createElement(l.Component),
        Component: void 0
      })),
    l.HydrateFallback &&
      (l.hydrateFallbackElement &&
        Ot(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(i, {
        hydrateFallbackElement: x.createElement(l.HydrateFallback),
        HydrateFallback: void 0
      })),
    l.ErrorBoundary &&
      (l.errorElement &&
        Ot(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(i, {
        errorElement: x.createElement(l.ErrorBoundary),
        ErrorBoundary: void 0
      })),
    i
  );
}
var FS = ["HydrateFallback", "hydrateFallbackElement"],
  KS = class {
    constructor() {
      ((this.status = "pending"),
        (this.promise = new Promise((l, i) => {
          ((this.resolve = (s) => {
            this.status === "pending" && ((this.status = "resolved"), l(s));
          }),
            (this.reject = (s) => {
              this.status === "pending" && ((this.status = "rejected"), i(s));
            }));
        })));
    }
  };
function JS({
  router: l,
  flushSync: i,
  onError: s,
  unstable_useTransitions: u
}) {
  u = Vg() || u;
  let [f, m] = x.useState(l.state),
    [g, p] = QS(f),
    [h, b] = x.useState(),
    [v, N] = x.useState({ isTransitioning: !1 }),
    [w, j] = x.useState(),
    [k, O] = x.useState(),
    [$, W] = x.useState(),
    F = x.useRef(new Map()),
    ie = x.useCallback(
      (
        ee,
        {
          deletedFetchers: Ae,
          newErrors: Re,
          flushSync: Ee,
          viewTransitionOpts: ze
        }
      ) => {
        (Re &&
          s &&
          Object.values(Re).forEach((fe) =>
            s(fe, {
              location: ee.location,
              params: ee.matches[0]?.params ?? {},
              unstable_pattern: qr(ee.matches)
            })
          ),
          ee.fetchers.forEach((fe, z) => {
            fe.data !== void 0 && F.current.set(z, fe.data);
          }),
          Ae.forEach((fe) => F.current.delete(fe)),
          kp(
            Ee === !1 || i != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          ));
        let Xe =
          l.window != null &&
          l.window.document != null &&
          typeof l.window.document.startViewTransition == "function";
        if (
          (kp(
            ze == null || Xe,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !ze || !Xe)
        ) {
          i && Ee
            ? i(() => m(ee))
            : u === !1
              ? m(ee)
              : x.startTransition(() => {
                  (u === !0 && p((fe) => Yp(fe, ee)), m(ee));
                });
          return;
        }
        if (i && Ee) {
          i(() => {
            (k && (w?.resolve(), k.skipTransition()),
              N({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: ze.currentLocation,
                nextLocation: ze.nextLocation
              }));
          });
          let fe = l.window.document.startViewTransition(() => {
            i(() => m(ee));
          });
          (fe.finished.finally(() => {
            i(() => {
              (j(void 0), O(void 0), b(void 0), N({ isTransitioning: !1 }));
            });
          }),
            i(() => O(fe)));
          return;
        }
        k
          ? (w?.resolve(),
            k.skipTransition(),
            W({
              state: ee,
              currentLocation: ze.currentLocation,
              nextLocation: ze.nextLocation
            }))
          : (b(ee),
            N({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: ze.currentLocation,
              nextLocation: ze.nextLocation
            }));
      },
      [l.window, i, k, w, u, p, s]
    );
  x.useLayoutEffect(() => l.subscribe(ie), [l, ie]);
  let he = g.initialized;
  (x.useLayoutEffect(() => {
    !he &&
      l.state.initialized &&
      ie(l.state, { deletedFetchers: [], flushSync: !1, newErrors: null });
  }, [he, ie, l.state]),
    x.useEffect(() => {
      v.isTransitioning && !v.flushSync && j(new KS());
    }, [v]),
    x.useEffect(() => {
      if (w && h && l.window) {
        let ee = h,
          Ae = w.promise,
          Re = l.window.document.startViewTransition(async () => {
            (u === !1
              ? m(ee)
              : x.startTransition(() => {
                  (u === !0 && p((Ee) => Yp(Ee, ee)), m(ee));
                }),
              await Ae);
          });
        (Re.finished.finally(() => {
          (j(void 0), O(void 0), b(void 0), N({ isTransitioning: !1 }));
        }),
          O(Re));
      }
    }, [h, w, l.window, u, p]),
    x.useEffect(() => {
      w && h && g.location.key === h.location.key && w.resolve();
    }, [w, k, g.location, h]),
    x.useEffect(() => {
      !v.isTransitioning &&
        $ &&
        (b($.state),
        N({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: $.currentLocation,
          nextLocation: $.nextLocation
        }),
        W(void 0));
    }, [v.isTransitioning, $]));
  let Se = x.useMemo(
      () => ({
        createHref: l.createHref,
        encodeLocation: l.encodeLocation,
        go: (ee) => l.navigate(ee),
        push: (ee, Ae, Re) =>
          l.navigate(ee, {
            state: Ae,
            preventScrollReset: Re?.preventScrollReset
          }),
        replace: (ee, Ae, Re) =>
          l.navigate(ee, {
            replace: !0,
            state: Ae,
            preventScrollReset: Re?.preventScrollReset
          })
      }),
      [l]
    ),
    P = l.basename || "/",
    E = x.useMemo(
      () => ({ router: l, navigator: Se, static: !1, basename: P, onError: s }),
      [l, Se, P, s]
    );
  return x.createElement(
    x.Fragment,
    null,
    x.createElement(
      jl.Provider,
      { value: E },
      x.createElement(
        Vr.Provider,
        { value: g },
        x.createElement(
          Xg.Provider,
          { value: F.current },
          x.createElement(
            pf.Provider,
            { value: v },
            x.createElement(
              WS,
              {
                basename: P,
                location: g.location,
                navigationType: g.historyAction,
                navigator: Se,
                unstable_useTransitions: u
              },
              x.createElement(IS, {
                routes: l.routes,
                future: l.future,
                state: g,
                isStatic: !1,
                onError: s
              })
            )
          )
        )
      )
    ),
    null
  );
}
function Yp(l, i) {
  return {
    ...l,
    navigation: i.navigation.state !== "idle" ? i.navigation : l.navigation,
    revalidation: i.revalidation !== "idle" ? i.revalidation : l.revalidation,
    actionData:
      i.navigation.state !== "submitting" ? i.actionData : l.actionData,
    fetchers: i.fetchers
  };
}
var IS = x.memo($S);
function $S({ routes: l, future: i, state: s, isStatic: u, onError: c }) {
  return OS(l, void 0, { state: s, isStatic: u, onError: c });
}
function PS(l) {
  return NS(l.context);
}
function WS({
  basename: l = "/",
  children: i = null,
  location: s,
  navigationType: u = "POP",
  navigator: c,
  static: f = !1,
  unstable_useTransitions: m
}) {
  Ye(
    !Xr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = l.replace(/^\/*/, "/"),
    p = x.useMemo(
      () => ({
        basename: g,
        navigator: c,
        static: f,
        unstable_useTransitions: m,
        future: {}
      }),
      [g, c, f, m]
    );
  typeof s == "string" && (s = an(s));
  let {
      pathname: h = "/",
      search: b = "",
      hash: v = "",
      state: N = null,
      key: w = "default",
      unstable_mask: j
    } = s,
    k = x.useMemo(() => {
      let O = ja(h, g);
      return O == null
        ? null
        : {
            location: {
              pathname: O,
              search: b,
              hash: v,
              state: N,
              key: w,
              unstable_mask: j
            },
            navigationType: u
          };
    }, [g, h, b, v, N, w, u, j]);
  return (
    Ot(
      k != null,
      `<Router basename="${g}"> is not able to match the URL "${h}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    k == null
      ? null
      : x.createElement(
          Ba.Provider,
          { value: p },
          x.createElement(xu.Provider, { children: i, value: k })
        )
  );
}
var hu = "get",
  pu = "application/x-www-form-urlencoded";
function Tu(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function ex(l) {
  return Tu(l) && l.tagName.toLowerCase() === "button";
}
function tx(l) {
  return Tu(l) && l.tagName.toLowerCase() === "form";
}
function ax(l) {
  return Tu(l) && l.tagName.toLowerCase() === "input";
}
function nx(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function lx(l, i) {
  return l.button === 0 && (!i || i === "_self") && !nx(l);
}
var ou = null;
function ix() {
  if (ou === null)
    try {
      (new FormData(document.createElement("form"), 0), (ou = !1));
    } catch {
      ou = !0;
    }
  return ou;
}
var rx = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function kc(l) {
  return l != null && !rx.has(l)
    ? (Ot(
        !1,
        `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pu}"`
      ),
      null)
    : l;
}
function ox(l, i) {
  let s, u, c, f, m;
  if (tx(l)) {
    let g = l.getAttribute("action");
    ((u = g ? ja(g, i) : null),
      (s = l.getAttribute("method") || hu),
      (c = kc(l.getAttribute("enctype")) || pu),
      (f = new FormData(l)));
  } else if (ex(l) || (ax(l) && (l.type === "submit" || l.type === "image"))) {
    let g = l.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = l.getAttribute("formaction") || g.getAttribute("action");
    if (
      ((u = p ? ja(p, i) : null),
      (s = l.getAttribute("formmethod") || g.getAttribute("method") || hu),
      (c =
        kc(l.getAttribute("formenctype")) ||
        kc(g.getAttribute("enctype")) ||
        pu),
      (f = new FormData(g, l)),
      !ix())
    ) {
      let { name: h, type: b, value: v } = l;
      if (b === "image") {
        let N = h ? `${h}.` : "";
        (f.append(`${N}x`, "0"), f.append(`${N}y`, "0"));
      } else h && f.append(h, v);
    }
  } else {
    if (Tu(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((s = hu), (u = null), (c = pu), (m = l));
  }
  return (
    f && c === "text/plain" && ((m = f), (f = void 0)),
    { action: u, method: s.toLowerCase(), encType: c, formData: f, body: m }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function bf(l, i) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(i);
}
function Ig(l, i, s, u) {
  let c =
    typeof l == "string"
      ? new URL(
          l,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : l;
  return (
    s
      ? c.pathname.endsWith("/")
        ? (c.pathname = `${c.pathname}_.${u}`)
        : (c.pathname = `${c.pathname}.${u}`)
      : c.pathname === "/"
        ? (c.pathname = `_root.${u}`)
        : i && ja(c.pathname, i) === "/"
          ? (c.pathname = `${yu(i)}/_root.${u}`)
          : (c.pathname = `${yu(c.pathname)}.${u}`),
    c
  );
}
async function ux(l, i) {
  if (l.id in i) return i[l.id];
  try {
    let s = await import(l.module);
    return ((i[l.id] = s), s);
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${l.module}\`, reloading page...`
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function sx(l) {
  return l == null
    ? !1
    : l.href == null
      ? l.rel === "preload" &&
        typeof l.imageSrcSet == "string" &&
        typeof l.imageSizes == "string"
      : typeof l.rel == "string" && typeof l.href == "string";
}
async function cx(l, i, s) {
  let u = await Promise.all(
    l.map(async (c) => {
      let f = i.routes[c.route.id];
      if (f) {
        let m = await ux(f, s);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return hx(
    u
      .flat(1)
      .filter(sx)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" }
      )
  );
}
function qp(l, i, s, u, c, f) {
  let m = (p, h) => (s[h] ? p.route.id !== s[h].route.id : !0),
    g = (p, h) =>
      s[h].pathname !== p.pathname ||
      (s[h].route.path?.endsWith("*") && s[h].params["*"] !== p.params["*"]);
  return f === "assets"
    ? i.filter((p, h) => m(p, h) || g(p, h))
    : f === "data"
      ? i.filter((p, h) => {
          let b = u.routes[p.route.id];
          if (!b || !b.hasLoader) return !1;
          if (m(p, h) || g(p, h)) return !0;
          if (p.route.shouldRevalidate) {
            let v = p.route.shouldRevalidate({
              currentUrl: new URL(
                c.pathname + c.search + c.hash,
                window.origin
              ),
              currentParams: s[0]?.params || {},
              nextUrl: new URL(l, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0
            });
            if (typeof v == "boolean") return v;
          }
          return !0;
        })
      : [];
}
function fx(l, i, { includeHydrateFallback: s } = {}) {
  return dx(
    l
      .map((u) => {
        let c = i.routes[u.route.id];
        if (!c) return [];
        let f = [c.module];
        return (
          c.clientActionModule && (f = f.concat(c.clientActionModule)),
          c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)),
          s &&
            c.hydrateFallbackModule &&
            (f = f.concat(c.hydrateFallbackModule)),
          c.imports && (f = f.concat(c.imports)),
          f
        );
      })
      .flat(1)
  );
}
function dx(l) {
  return [...new Set(l)];
}
function mx(l) {
  let i = {},
    s = Object.keys(l).sort();
  for (let u of s) i[u] = l[u];
  return i;
}
function hx(l, i) {
  let s = new Set();
  return (
    new Set(i),
    l.reduce((u, c) => {
      let f = JSON.stringify(mx(c));
      return (s.has(f) || (s.add(f), u.push({ key: f, link: c })), u);
    }, [])
  );
}
function Sf() {
  let l = x.useContext(jl);
  return (
    bf(
      l,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    l
  );
}
function px() {
  let l = x.useContext(Vr);
  return (
    bf(
      l,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    l
  );
}
var xf = x.createContext(void 0);
xf.displayName = "FrameworkContext";
function Ef() {
  let l = x.useContext(xf);
  return (
    bf(l, "You must render this element inside a <HydratedRouter> element"),
    l
  );
}
function gx(l, i) {
  let s = x.useContext(xf),
    [u, c] = x.useState(!1),
    [f, m] = x.useState(!1),
    {
      onFocus: g,
      onBlur: p,
      onMouseEnter: h,
      onMouseLeave: b,
      onTouchStart: v
    } = i,
    N = x.useRef(null);
  (x.useEffect(() => {
    if ((l === "render" && m(!0), l === "viewport")) {
      let k = ($) => {
          $.forEach((W) => {
            m(W.isIntersecting);
          });
        },
        O = new IntersectionObserver(k, { threshold: 0.5 });
      return (
        N.current && O.observe(N.current),
        () => {
          O.disconnect();
        }
      );
    }
  }, [l]),
    x.useEffect(() => {
      if (u) {
        let k = setTimeout(() => {
          m(!0);
        }, 100);
        return () => {
          clearTimeout(k);
        };
      }
    }, [u]));
  let w = () => {
      c(!0);
    },
    j = () => {
      (c(!1), m(!1));
    };
  return s
    ? l !== "intent"
      ? [f, N, {}]
      : [
          f,
          N,
          {
            onFocus: Tr(g, w),
            onBlur: Tr(p, j),
            onMouseEnter: Tr(h, w),
            onMouseLeave: Tr(b, j),
            onTouchStart: Tr(v, w)
          }
        ]
    : [!1, N, {}];
}
function Tr(l, i) {
  return (s) => {
    (l && l(s), s.defaultPrevented || i(s));
  };
}
function yx({ page: l, ...i }) {
  let s = Vg(),
    { router: u } = Sf(),
    c = x.useMemo(() => cl(u.routes, l, u.basename), [u.routes, l, u.basename]);
  return c
    ? s
      ? x.createElement(bx, { page: l, matches: c, ...i })
      : x.createElement(Sx, { page: l, matches: c, ...i })
    : null;
}
function vx(l) {
  let { manifest: i, routeModules: s } = Ef(),
    [u, c] = x.useState([]);
  return (
    x.useEffect(() => {
      let f = !1;
      return (
        cx(l, i, s).then((m) => {
          f || c(m);
        }),
        () => {
          f = !0;
        }
      );
    }, [l, i, s]),
    u
  );
}
function bx({ page: l, matches: i, ...s }) {
  let u = Za(),
    { future: c } = Ef(),
    { basename: f } = Sf(),
    m = x.useMemo(() => {
      if (l === u.pathname + u.search + u.hash) return [];
      let g = Ig(l, f, c.unstable_trailingSlashAwareDataRequests, "rsc"),
        p = !1,
        h = [];
      for (let b of i)
        typeof b.route.shouldRevalidate == "function"
          ? (p = !0)
          : h.push(b.route.id);
      return (
        p && h.length > 0 && g.searchParams.set("_routes", h.join(",")),
        [g.pathname + g.search]
      );
    }, [f, c.unstable_trailingSlashAwareDataRequests, l, u, i]);
  return x.createElement(
    x.Fragment,
    null,
    m.map((g) =>
      x.createElement("link", {
        key: g,
        rel: "prefetch",
        as: "fetch",
        href: g,
        ...s
      })
    )
  );
}
function Sx({ page: l, matches: i, ...s }) {
  let u = Za(),
    { future: c, manifest: f, routeModules: m } = Ef(),
    { basename: g } = Sf(),
    { loaderData: p, matches: h } = px(),
    b = x.useMemo(() => qp(l, i, h, f, u, "data"), [l, i, h, f, u]),
    v = x.useMemo(() => qp(l, i, h, f, u, "assets"), [l, i, h, f, u]),
    N = x.useMemo(() => {
      if (l === u.pathname + u.search + u.hash) return [];
      let k = new Set(),
        O = !1;
      if (
        (i.forEach((W) => {
          let F = f.routes[W.route.id];
          !F ||
            !F.hasLoader ||
            ((!b.some((ie) => ie.route.id === W.route.id) &&
              W.route.id in p &&
              m[W.route.id]?.shouldRevalidate) ||
            F.hasClientLoader
              ? (O = !0)
              : k.add(W.route.id));
        }),
        k.size === 0)
      )
        return [];
      let $ = Ig(l, g, c.unstable_trailingSlashAwareDataRequests, "data");
      return (
        O &&
          k.size > 0 &&
          $.searchParams.set(
            "_routes",
            i
              .filter((W) => k.has(W.route.id))
              .map((W) => W.route.id)
              .join(",")
          ),
        [$.pathname + $.search]
      );
    }, [g, c.unstable_trailingSlashAwareDataRequests, p, u, f, b, i, l, m]),
    w = x.useMemo(() => fx(v, f), [v, f]),
    j = vx(v);
  return x.createElement(
    x.Fragment,
    null,
    N.map((k) =>
      x.createElement("link", {
        key: k,
        rel: "prefetch",
        as: "fetch",
        href: k,
        ...s
      })
    ),
    w.map((k) =>
      x.createElement("link", { key: k, rel: "modulepreload", href: k, ...s })
    ),
    j.map(({ key: k, link: O }) =>
      x.createElement("link", {
        key: k,
        nonce: s.nonce,
        ...O,
        crossOrigin: O.crossOrigin ?? s.crossOrigin
      })
    )
  );
}
function xx(...l) {
  return (i) => {
    l.forEach((s) => {
      typeof s == "function" ? s(i) : s != null && (s.current = i);
    });
  };
}
var Ex =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Ex && (window.__reactRouterVersion = "7.14.2");
} catch {}
function Tx(l, i) {
  return $b({
    basename: i?.basename,
    getContext: i?.getContext,
    future: i?.future,
    history: mb({ window: i?.window }),
    hydrationData: i?.hydrationData || Rx(),
    routes: l,
    mapRouteProperties: ZS,
    hydrationRouteProperties: FS,
    dataStrategy: i?.dataStrategy,
    patchRoutesOnNavigation: i?.patchRoutesOnNavigation,
    window: i?.window,
    unstable_instrumentations: i?.unstable_instrumentations
  }).initialize();
}
function Rx() {
  let l = window?.__staticRouterHydrationData;
  return (l && l.errors && (l = { ...l, errors: Ax(l.errors) }), l);
}
function Ax(l) {
  if (!l) return null;
  let i = Object.entries(l),
    s = {};
  for (let [u, c] of i)
    if (c && c.__type === "RouteErrorResponse")
      s[u] = new Yr(c.status, c.statusText, c.data, c.internal === !0);
    else if (c && c.__type === "Error") {
      if (c.__subType) {
        let f = window[c.__subType];
        if (typeof f == "function")
          try {
            let m = new f(c.message);
            ((m.stack = ""), (s[u] = m));
          } catch {}
      }
      if (s[u] == null) {
        let f = new Error(c.message);
        ((f.stack = ""), (s[u] = f));
      }
    } else s[u] = c;
  return s;
}
var $g = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  kr = x.forwardRef(function (
    {
      onClick: i,
      discover: s = "render",
      prefetch: u = "none",
      relative: c,
      reloadDocument: f,
      replace: m,
      unstable_mask: g,
      state: p,
      target: h,
      to: b,
      preventScrollReset: v,
      viewTransition: N,
      unstable_defaultShouldRevalidate: w,
      ...j
    },
    k
  ) {
    let {
        basename: O,
        navigator: $,
        unstable_useTransitions: W
      } = x.useContext(Ba),
      F = typeof b == "string" && $g.test(b),
      ie = Cg(b, O);
    b = ie.to;
    let he = _S(b, { relative: c }),
      Se = Za(),
      P = null;
    if (g) {
      let fe = Su(
        g,
        [],
        Se.unstable_mask ? Se.unstable_mask.pathname : "/",
        !0
      );
      (O !== "/" &&
        (fe.pathname = fe.pathname === "/" ? O : Ua([O, fe.pathname])),
        (P = $.createHref(fe)));
    }
    let [E, ee, Ae] = gx(u, j),
      Re = Mx(b, {
        replace: m,
        unstable_mask: g,
        state: p,
        target: h,
        preventScrollReset: v,
        relative: c,
        viewTransition: N,
        unstable_defaultShouldRevalidate: w,
        unstable_useTransitions: W
      });
    function Ee(fe) {
      (i && i(fe), fe.defaultPrevented || Re(fe));
    }
    let ze = !(ie.isExternal || f),
      Xe = x.createElement("a", {
        ...j,
        ...Ae,
        href: (ze ? P : void 0) || ie.absoluteURL || he,
        onClick: ze ? Ee : i,
        ref: xx(k, ee),
        target: h,
        "data-discover": !F && s === "render" ? "true" : void 0
      });
    return E && !F
      ? x.createElement(x.Fragment, null, Xe, x.createElement(yx, { page: he }))
      : Xe;
  });
kr.displayName = "Link";
var wx = x.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: s = !1,
    className: u = "",
    end: c = !1,
    style: f,
    to: m,
    viewTransition: g,
    children: p,
    ...h
  },
  b
) {
  let v = Qr(m, { relative: h.relative }),
    N = Za(),
    w = x.useContext(Vr),
    { navigator: j, basename: k } = x.useContext(Ba),
    O = w != null && Lx(v) && g === !0,
    $ = j.encodeLocation ? j.encodeLocation(v).pathname : v.pathname,
    W = N.pathname,
    F =
      w && w.navigation && w.navigation.location
        ? w.navigation.location.pathname
        : null;
  (s ||
    ((W = W.toLowerCase()),
    (F = F ? F.toLowerCase() : null),
    ($ = $.toLowerCase())),
    F && k && (F = ja(F, k) || F));
  const ie = $ !== "/" && $.endsWith("/") ? $.length - 1 : $.length;
  let he = W === $ || (!c && W.startsWith($) && W.charAt(ie) === "/"),
    Se =
      F != null &&
      (F === $ || (!c && F.startsWith($) && F.charAt($.length) === "/")),
    P = { isActive: he, isPending: Se, isTransitioning: O },
    E = he ? i : void 0,
    ee;
  typeof u == "function"
    ? (ee = u(P))
    : (ee = [
        u,
        he ? "active" : null,
        Se ? "pending" : null,
        O ? "transitioning" : null
      ]
        .filter(Boolean)
        .join(" "));
  let Ae = typeof f == "function" ? f(P) : f;
  return x.createElement(
    kr,
    {
      ...h,
      "aria-current": E,
      className: ee,
      ref: b,
      style: Ae,
      to: m,
      viewTransition: g
    },
    typeof p == "function" ? p(P) : p
  );
});
wx.displayName = "NavLink";
var _x = x.forwardRef(
  (
    {
      discover: l = "render",
      fetcherKey: i,
      navigate: s,
      reloadDocument: u,
      replace: c,
      state: f,
      method: m = hu,
      action: g,
      onSubmit: p,
      relative: h,
      preventScrollReset: b,
      viewTransition: v,
      unstable_defaultShouldRevalidate: N,
      ...w
    },
    j
  ) => {
    let { unstable_useTransitions: k } = x.useContext(Ba),
      O = Dx(),
      $ = zx(g, { relative: h }),
      W = m.toLowerCase() === "get" ? "get" : "post",
      F = typeof g == "string" && $g.test(g),
      ie = (he) => {
        if ((p && p(he), he.defaultPrevented)) return;
        he.preventDefault();
        let Se = he.nativeEvent.submitter,
          P = Se?.getAttribute("formmethod") || m,
          E = () =>
            O(Se || he.currentTarget, {
              fetcherKey: i,
              method: P,
              navigate: s,
              replace: c,
              state: f,
              relative: h,
              preventScrollReset: b,
              viewTransition: v,
              unstable_defaultShouldRevalidate: N
            });
        k && s !== !1 ? x.startTransition(() => E()) : E();
      };
    return x.createElement("form", {
      ref: j,
      method: W,
      action: $,
      onSubmit: u ? p : ie,
      ...w,
      "data-discover": !F && l === "render" ? "true" : void 0
    });
  }
);
_x.displayName = "Form";
function Cx(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Pg(l) {
  let i = x.useContext(jl);
  return (Ye(i, Cx(l)), i);
}
function Mx(
  l,
  {
    target: i,
    replace: s,
    unstable_mask: u,
    state: c,
    preventScrollReset: f,
    relative: m,
    viewTransition: g,
    unstable_defaultShouldRevalidate: p,
    unstable_useTransitions: h
  } = {}
) {
  let b = Eu(),
    v = Za(),
    N = Qr(l, { relative: m });
  return x.useCallback(
    (w) => {
      if (lx(w, i)) {
        w.preventDefault();
        let j = s !== void 0 ? s : tn(v) === tn(N),
          k = () =>
            b(l, {
              replace: j,
              unstable_mask: u,
              state: c,
              preventScrollReset: f,
              relative: m,
              viewTransition: g,
              unstable_defaultShouldRevalidate: p
            });
        h ? x.startTransition(() => k()) : k();
      }
    },
    [v, b, N, s, u, c, i, l, f, m, g, p, h]
  );
}
var Nx = 0,
  Ox = () => `__${String(++Nx)}__`;
function Dx() {
  let { router: l } = Pg("useSubmit"),
    { basename: i } = x.useContext(Ba),
    s = GS(),
    u = l.fetch,
    c = l.navigate;
  return x.useCallback(
    async (f, m = {}) => {
      let { action: g, method: p, encType: h, formData: b, body: v } = ox(f, i);
      if (m.navigate === !1) {
        let N = m.fetcherKey || Ox();
        await u(N, s, m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: v,
          formMethod: m.method || p,
          formEncType: m.encType || h,
          flushSync: m.flushSync
        });
      } else
        await c(m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: v,
          formMethod: m.method || p,
          formEncType: m.encType || h,
          replace: m.replace,
          state: m.state,
          fromRouteId: s,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [u, c, i, s]
  );
}
function zx(l, { relative: i } = {}) {
  let { basename: s } = x.useContext(Ba),
    u = x.useContext(nn);
  Ye(u, "useFormAction must be used inside a RouteContext");
  let [c] = u.matches.slice(-1),
    f = { ...Qr(l || ".", { relative: i }) },
    m = Za();
  if (l == null) {
    f.search = m.search;
    let g = new URLSearchParams(f.search),
      p = g.getAll("index");
    if (p.some((b) => b === "")) {
      (g.delete("index"),
        p.filter((v) => v).forEach((v) => g.append("index", v)));
      let b = g.toString();
      f.search = b ? `?${b}` : "";
    }
  }
  return (
    (!l || l === ".") &&
      c.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (f.pathname = f.pathname === "/" ? s : Ua([s, f.pathname])),
    tn(f)
  );
}
function Lx(l, { relative: i } = {}) {
  let s = x.useContext(pf);
  Ye(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = Pg("useViewTransitionState"),
    c = Qr(l, { relative: i });
  if (!s.isTransitioning) return !1;
  let f = ja(s.currentLocation.pathname, u) || s.currentLocation.pathname,
    m = ja(s.nextLocation.pathname, u) || s.nextLocation.pathname;
  return gu(c.pathname, m) != null || gu(c.pathname, f) != null;
}
const Wg = (l, i = "") => {
    let s;
    l.index
      ? (s = i || "/")
      : l.path
        ? l.path.startsWith("/")
          ? (s = l.path)
          : (s = i === "/" ? `/${l.path}` : `${i}/${l.path}`)
        : (s = i);
    const u = { ...l, fullPath: s },
      c = l.children?.flatMap((f) => Wg(f, s)) || [];
    return [u, ...c];
  },
  Ux = () => Wy.flatMap((l) => Wg(l));
function jx() {
  const [l, i] = x.useState(!1),
    s = Za(),
    u = (m) => s.pathname === m,
    c = () => i(!l),
    f = Ux()
      .filter(
        (m) =>
          m.handle?.showInNavigation === !0 &&
          m.fullPath !== void 0 &&
          m.handle?.label !== void 0
      )
      .map((m) => ({ path: m.fullPath, label: m.handle?.label }));
  return _.jsxs(_.Fragment, {
    children: [
      _.jsx("nav", {
        className: "bg-white border-b border-gray-200",
        children: _.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            _.jsxs("div", {
              className: "flex justify-between items-center h-16",
              children: [
                _.jsx(kr, {
                  to: "/",
                  className: "text-xl font-semibold text-gray-900",
                  children: "Jungian Personality Assessment"
                }),
                _.jsx("button", {
                  onClick: c,
                  className:
                    "p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
                  "aria-label": "Toggle menu",
                  children: _.jsxs("div", {
                    className:
                      "w-6 h-6 flex flex-col justify-center space-y-1.5",
                    children: [
                      _.jsx("span", {
                        className: `block h-0.5 w-6 bg-current transition-all ${l ? "rotate-45 translate-y-2" : ""}`
                      }),
                      _.jsx("span", {
                        className: `block h-0.5 w-6 bg-current transition-all ${l ? "opacity-0" : ""}`
                      }),
                      _.jsx("span", {
                        className: `block h-0.5 w-6 bg-current transition-all ${l ? "-rotate-45 -translate-y-2" : ""}`
                      })
                    ]
                  })
                })
              ]
            }),
            l &&
              _.jsx("div", {
                className: "pb-4",
                children: _.jsx("div", {
                  className: "flex flex-col space-y-2",
                  children: f.map((m) =>
                    _.jsx(
                      kr,
                      {
                        to: m.path,
                        onClick: () => i(!1),
                        className: `px-3 py-2 rounded-md text-sm font-medium transition-colors ${u(m.path) ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"}`,
                        children: m.label
                      },
                      m.path
                    )
                  )
                })
              })
          ]
        })
      }),
      _.jsx(PS, {})
    ]
  });
}
function ey(l) {
  var i,
    s,
    u = "";
  if (typeof l == "string" || typeof l == "number") u += l;
  else if (typeof l == "object")
    if (Array.isArray(l)) {
      var c = l.length;
      for (i = 0; i < c; i++)
        l[i] && (s = ey(l[i])) && (u && (u += " "), (u += s));
    } else for (s in l) l[s] && (u && (u += " "), (u += s));
  return u;
}
function ty() {
  for (var l, i, s = 0, u = "", c = arguments.length; s < c; s++)
    (l = arguments[s]) && (i = ey(l)) && (u && (u += " "), (u += i));
  return u;
}
const Vp = (l) => (typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l),
  Xp = ty,
  ay = (l, i) => (s) => {
    var u;
    if (i?.variants == null) return Xp(l, s?.class, s?.className);
    const { variants: c, defaultVariants: f } = i,
      m = Object.keys(c).map((h) => {
        const b = s?.[h],
          v = f?.[h];
        if (b === null) return null;
        const N = Vp(b) || Vp(v);
        return c[h][N];
      }),
      g =
        s &&
        Object.entries(s).reduce((h, b) => {
          let [v, N] = b;
          return (N === void 0 || (h[v] = N), h);
        }, {}),
      p =
        i == null || (u = i.compoundVariants) === null || u === void 0
          ? void 0
          : u.reduce((h, b) => {
              let { class: v, className: N, ...w } = b;
              return Object.entries(w).every((j) => {
                let [k, O] = j;
                return Array.isArray(O)
                  ? O.includes({ ...f, ...g }[k])
                  : { ...f, ...g }[k] === O;
              })
                ? [...h, v, N]
                : h;
            }, []);
    return Xp(l, m, p, s?.class, s?.className);
  };
var Gc = { exports: {} },
  Qt = {};
var Qp;
function Hx() {
  if (Qp) return Qt;
  Qp = 1;
  var l = of();
  function i(p) {
    var h = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        h += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var u = {
      d: {
        f: s,
        r: function () {
          throw Error(i(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s
      },
      p: 0,
      findDOMNode: null
    },
    c = Symbol.for("react.portal");
  function f(p, h, b) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: v == null ? null : "" + v,
      children: p,
      containerInfo: h,
      implementation: b
    };
  }
  var m = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, h) {
    if (p === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (Qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (Qt.createPortal = function (p, h) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(i(299));
      return f(p, h, null, b);
    }),
    (Qt.flushSync = function (p) {
      var h = m.T,
        b = u.p;
      try {
        if (((m.T = null), (u.p = 2), p)) return p();
      } finally {
        ((m.T = h), (u.p = b), u.d.f());
      }
    }),
    (Qt.preconnect = function (p, h) {
      typeof p == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        u.d.C(p, h));
    }),
    (Qt.prefetchDNS = function (p) {
      typeof p == "string" && u.d.D(p);
    }),
    (Qt.preinit = function (p, h) {
      if (typeof p == "string" && h && typeof h.as == "string") {
        var b = h.as,
          v = g(b, h.crossOrigin),
          N = typeof h.integrity == "string" ? h.integrity : void 0,
          w = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        b === "style"
          ? u.d.S(p, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: v,
              integrity: N,
              fetchPriority: w
            })
          : b === "script" &&
            u.d.X(p, {
              crossOrigin: v,
              integrity: N,
              fetchPriority: w,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0
            });
      }
    }),
    (Qt.preinitModule = function (p, h) {
      if (typeof p == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var b = g(h.as, h.crossOrigin);
            u.d.M(p, {
              crossOrigin: b,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0
            });
          }
        } else h == null && u.d.M(p);
    }),
    (Qt.preload = function (p, h) {
      if (
        typeof p == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var b = h.as,
          v = g(b, h.crossOrigin);
        u.d.L(p, b, {
          crossOrigin: v,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0
        });
      }
    }),
    (Qt.preloadModule = function (p, h) {
      if (typeof p == "string")
        if (h) {
          var b = g(h.as, h.crossOrigin);
          u.d.m(p, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: b,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0
          });
        } else u.d.m(p);
    }),
    (Qt.requestFormReset = function (p) {
      u.d.r(p);
    }),
    (Qt.unstable_batchedUpdates = function (p, h) {
      return p(h);
    }),
    (Qt.useFormState = function (p, h, b) {
      return m.H.useFormState(p, h, b);
    }),
    (Qt.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (Qt.version = "19.2.5"),
    Qt
  );
}
var Zp;
function ny() {
  if (Zp) return Gc.exports;
  Zp = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return (l(), (Gc.exports = Hx()), Gc.exports);
}
ny();
function Fp(l, i) {
  if (typeof l == "function") return l(i);
  l != null && (l.current = i);
}
function ly(...l) {
  return (i) => {
    let s = !1;
    const u = l.map((c) => {
      const f = Fp(c, i);
      return (!s && typeof f == "function" && (s = !0), f);
    });
    if (s)
      return () => {
        for (let c = 0; c < u.length; c++) {
          const f = u[c];
          typeof f == "function" ? f() : Fp(l[c], null);
        }
      };
  };
}
function Ul(...l) {
  return x.useCallback(ly(...l), l);
}
function vu(l) {
  const i = Bx(l),
    s = x.forwardRef((u, c) => {
      const { children: f, ...m } = u,
        g = x.Children.toArray(f),
        p = g.find(Gx);
      if (p) {
        const h = p.props.children,
          b = g.map((v) =>
            v === p
              ? x.Children.count(h) > 1
                ? x.Children.only(null)
                : x.isValidElement(h)
                  ? h.props.children
                  : null
              : v
          );
        return _.jsx(i, {
          ...m,
          ref: c,
          children: x.isValidElement(h) ? x.cloneElement(h, void 0, b) : null
        });
      }
      return _.jsx(i, { ...m, ref: c, children: f });
    });
  return ((s.displayName = `${l}.Slot`), s);
}
var iy = vu("Slot");
function Bx(l) {
  const i = x.forwardRef((s, u) => {
    const { children: c, ...f } = s;
    if (x.isValidElement(c)) {
      const m = qx(c),
        g = Yx(f, c.props);
      return (
        c.type !== x.Fragment && (g.ref = u ? ly(u, m) : m),
        x.cloneElement(c, g)
      );
    }
    return x.Children.count(c) > 1 ? x.Children.only(null) : null;
  });
  return ((i.displayName = `${l}.SlotClone`), i);
}
var kx = Symbol("radix.slottable");
function Gx(l) {
  return (
    x.isValidElement(l) &&
    typeof l.type == "function" &&
    "__radixId" in l.type &&
    l.type.__radixId === kx
  );
}
function Yx(l, i) {
  const s = { ...i };
  for (const u in i) {
    const c = l[u],
      f = i[u];
    /^on[A-Z]/.test(u)
      ? c && f
        ? (s[u] = (...g) => {
            const p = f(...g);
            return (c(...g), p);
          })
        : c && (s[u] = c)
      : u === "style"
        ? (s[u] = { ...c, ...f })
        : u === "className" && (s[u] = [c, f].filter(Boolean).join(" "));
  }
  return { ...l, ...s };
}
function qx(l) {
  let i = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    s = i && "isReactWarning" in i && i.isReactWarning;
  return s
    ? l.ref
    : ((i = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (s = i && "isReactWarning" in i && i.isReactWarning),
      s ? l.props.ref : l.props.ref || l.ref);
}
var Vx = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
  ],
  Hl = Vx.reduce((l, i) => {
    const s = vu(`Primitive.${i}`),
      u = x.forwardRef((c, f) => {
        const { asChild: m, ...g } = c,
          p = m ? s : i;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          _.jsx(p, { ...g, ref: f })
        );
      });
    return ((u.displayName = `Primitive.${i}`), { ...l, [i]: u });
  }, {});
function Ru(l, i = []) {
  let s = [];
  function u(f, m) {
    const g = x.createContext(m),
      p = s.length;
    s = [...s, m];
    const h = (v) => {
      const { scope: N, children: w, ...j } = v,
        k = N?.[l]?.[p] || g,
        O = x.useMemo(() => j, Object.values(j));
      return _.jsx(k.Provider, { value: O, children: w });
    };
    h.displayName = f + "Provider";
    function b(v, N) {
      const w = N?.[l]?.[p] || g,
        j = x.useContext(w);
      if (j) return j;
      if (m !== void 0) return m;
      throw new Error(`\`${v}\` must be used within \`${f}\``);
    }
    return [h, b];
  }
  const c = () => {
    const f = s.map((m) => x.createContext(m));
    return function (g) {
      const p = g?.[l] || f;
      return x.useMemo(() => ({ [`__scope${l}`]: { ...g, [l]: p } }), [g, p]);
    };
  };
  return ((c.scopeName = l), [u, Xx(c, ...i)]);
}
function Xx(...l) {
  const i = l[0];
  if (l.length === 1) return i;
  const s = () => {
    const u = l.map((c) => ({ useScope: c(), scopeName: c.scopeName }));
    return function (f) {
      const m = u.reduce((g, { useScope: p, scopeName: h }) => {
        const v = p(f)[`__scope${h}`];
        return { ...g, ...v };
      }, {});
      return x.useMemo(() => ({ [`__scope${i.scopeName}`]: m }), [m]);
    };
  };
  return ((s.scopeName = i.scopeName), s);
}
function Qx(l) {
  const i = l + "CollectionProvider",
    [s, u] = Ru(i),
    [c, f] = s(i, { collectionRef: { current: null }, itemMap: new Map() }),
    m = (k) => {
      const { scope: O, children: $ } = k,
        W = sl.useRef(null),
        F = sl.useRef(new Map()).current;
      return _.jsx(c, { scope: O, itemMap: F, collectionRef: W, children: $ });
    };
  m.displayName = i;
  const g = l + "CollectionSlot",
    p = vu(g),
    h = sl.forwardRef((k, O) => {
      const { scope: $, children: W } = k,
        F = f(g, $),
        ie = Ul(O, F.collectionRef);
      return _.jsx(p, { ref: ie, children: W });
    });
  h.displayName = g;
  const b = l + "CollectionItemSlot",
    v = "data-radix-collection-item",
    N = vu(b),
    w = sl.forwardRef((k, O) => {
      const { scope: $, children: W, ...F } = k,
        ie = sl.useRef(null),
        he = Ul(O, ie),
        Se = f(b, $);
      return (
        sl.useEffect(
          () => (
            Se.itemMap.set(ie, { ref: ie, ...F }),
            () => {
              Se.itemMap.delete(ie);
            }
          )
        ),
        _.jsx(N, { [v]: "", ref: he, children: W })
      );
    });
  w.displayName = b;
  function j(k) {
    const O = f(l + "CollectionConsumer", k);
    return sl.useCallback(() => {
      const W = O.collectionRef.current;
      if (!W) return [];
      const F = Array.from(W.querySelectorAll(`[${v}]`));
      return Array.from(O.itemMap.values()).sort(
        (Se, P) => F.indexOf(Se.ref.current) - F.indexOf(P.ref.current)
      );
    }, [O.collectionRef, O.itemMap]);
  }
  return [{ Provider: m, Slot: h, ItemSlot: w }, j, u];
}
function On(l, i, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (c) {
    if ((l?.(c), s === !1 || !c.defaultPrevented)) return i?.(c);
  };
}
var Gr = globalThis?.document ? x.useLayoutEffect : () => {},
  Zx = uf[" useInsertionEffect ".trim().toString()] || Gr;
function ry({ prop: l, defaultProp: i, onChange: s = () => {}, caller: u }) {
  const [c, f, m] = Fx({ defaultProp: i, onChange: s }),
    g = l !== void 0,
    p = g ? l : c;
  {
    const b = x.useRef(l !== void 0);
    x.useEffect(() => {
      const v = b.current;
      (v !== g &&
        console.warn(
          `${u} is changing from ${v ? "controlled" : "uncontrolled"} to ${g ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (b.current = g));
    }, [g, u]);
  }
  const h = x.useCallback(
    (b) => {
      if (g) {
        const v = Kx(b) ? b(l) : b;
        v !== l && m.current?.(v);
      } else f(b);
    },
    [g, l, f, m]
  );
  return [p, h];
}
function Fx({ defaultProp: l, onChange: i }) {
  const [s, u] = x.useState(l),
    c = x.useRef(s),
    f = x.useRef(i);
  return (
    Zx(() => {
      f.current = i;
    }, [i]),
    x.useEffect(() => {
      c.current !== s && (f.current?.(s), (c.current = s));
    }, [s, c]),
    [s, u, f]
  );
}
function Kx(l) {
  return typeof l == "function";
}
function Jx(l, i) {
  return x.useReducer((s, u) => i[s][u] ?? s, l);
}
var oy = (l) => {
  const { present: i, children: s } = l,
    u = Ix(i),
    c =
      typeof s == "function" ? s({ present: u.isPresent }) : x.Children.only(s),
    f = Ul(u.ref, $x(c));
  return typeof s == "function" || u.isPresent
    ? x.cloneElement(c, { ref: f })
    : null;
};
oy.displayName = "Presence";
function Ix(l) {
  const [i, s] = x.useState(),
    u = x.useRef(null),
    c = x.useRef(l),
    f = x.useRef("none"),
    m = l ? "mounted" : "unmounted",
    [g, p] = Jx(m, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" }
    });
  return (
    x.useEffect(() => {
      const h = uu(u.current);
      f.current = g === "mounted" ? h : "none";
    }, [g]),
    Gr(() => {
      const h = u.current,
        b = c.current;
      if (b !== l) {
        const N = f.current,
          w = uu(h);
        (l
          ? p("MOUNT")
          : w === "none" || h?.display === "none"
            ? p("UNMOUNT")
            : p(b && N !== w ? "ANIMATION_OUT" : "UNMOUNT"),
          (c.current = l));
      }
    }, [l, p]),
    Gr(() => {
      if (i) {
        let h;
        const b = i.ownerDocument.defaultView ?? window,
          v = (w) => {
            const k = uu(u.current).includes(CSS.escape(w.animationName));
            if (w.target === i && k && (p("ANIMATION_END"), !c.current)) {
              const O = i.style.animationFillMode;
              ((i.style.animationFillMode = "forwards"),
                (h = b.setTimeout(() => {
                  i.style.animationFillMode === "forwards" &&
                    (i.style.animationFillMode = O);
                })));
            }
          },
          N = (w) => {
            w.target === i && (f.current = uu(u.current));
          };
        return (
          i.addEventListener("animationstart", N),
          i.addEventListener("animationcancel", v),
          i.addEventListener("animationend", v),
          () => {
            (b.clearTimeout(h),
              i.removeEventListener("animationstart", N),
              i.removeEventListener("animationcancel", v),
              i.removeEventListener("animationend", v));
          }
        );
      } else p("ANIMATION_END");
    }, [i, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(g),
      ref: x.useCallback((h) => {
        ((u.current = h ? getComputedStyle(h) : null), s(h));
      }, [])
    }
  );
}
function uu(l) {
  return l?.animationName || "none";
}
function $x(l) {
  let i = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    s = i && "isReactWarning" in i && i.isReactWarning;
  return s
    ? l.ref
    : ((i = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (s = i && "isReactWarning" in i && i.isReactWarning),
      s ? l.props.ref : l.props.ref || l.ref);
}
var Px = uf[" useId ".trim().toString()] || (() => {}),
  Wx = 0;
function eE(l) {
  const [i, s] = x.useState(Px());
  return (
    Gr(() => {
      s((u) => u ?? String(Wx++));
    }, [l]),
    i ? `radix-${i}` : ""
  );
}
var tE = x.createContext(void 0);
function uy(l) {
  const i = x.useContext(tE);
  return l || i || "ltr";
}
function aE(l) {
  const i = x.useRef(l);
  return (
    x.useEffect(() => {
      i.current = l;
    }),
    x.useMemo(
      () =>
        (...s) =>
          i.current?.(...s),
      []
    )
  );
}
function nE(l) {
  const i = x.useRef({ value: l, previous: l });
  return x.useMemo(
    () => (
      i.current.value !== l &&
        ((i.current.previous = i.current.value), (i.current.value = l)),
      i.current.previous
    ),
    [l]
  );
}
function lE(l) {
  const [i, s] = x.useState(void 0);
  return (
    Gr(() => {
      if (l) {
        s({ width: l.offsetWidth, height: l.offsetHeight });
        const u = new ResizeObserver((c) => {
          if (!Array.isArray(c) || !c.length) return;
          const f = c[0];
          let m, g;
          if ("borderBoxSize" in f) {
            const p = f.borderBoxSize,
              h = Array.isArray(p) ? p[0] : p;
            ((m = h.inlineSize), (g = h.blockSize));
          } else ((m = l.offsetWidth), (g = l.offsetHeight));
          s({ width: m, height: g });
        });
        return (u.observe(l, { box: "border-box" }), () => u.unobserve(l));
      } else s(void 0);
    }, [l]),
    i
  );
}
var Yc = "rovingFocusGroup.onEntryFocus",
  iE = { bubbles: !1, cancelable: !0 },
  Zr = "RovingFocusGroup",
  [ef, sy, rE] = Qx(Zr),
  [oE, cy] = Ru(Zr, [rE]),
  [uE, sE] = oE(Zr),
  fy = x.forwardRef((l, i) =>
    _.jsx(ef.Provider, {
      scope: l.__scopeRovingFocusGroup,
      children: _.jsx(ef.Slot, {
        scope: l.__scopeRovingFocusGroup,
        children: _.jsx(cE, { ...l, ref: i })
      })
    })
  );
fy.displayName = Zr;
var cE = x.forwardRef((l, i) => {
    const {
        __scopeRovingFocusGroup: s,
        orientation: u,
        loop: c = !1,
        dir: f,
        currentTabStopId: m,
        defaultCurrentTabStopId: g,
        onCurrentTabStopIdChange: p,
        onEntryFocus: h,
        preventScrollOnEntryFocus: b = !1,
        ...v
      } = l,
      N = x.useRef(null),
      w = Ul(i, N),
      j = uy(f),
      [k, O] = ry({ prop: m, defaultProp: g ?? null, onChange: p, caller: Zr }),
      [$, W] = x.useState(!1),
      F = aE(h),
      ie = sy(s),
      he = x.useRef(!1),
      [Se, P] = x.useState(0);
    return (
      x.useEffect(() => {
        const E = N.current;
        if (E)
          return (
            E.addEventListener(Yc, F),
            () => E.removeEventListener(Yc, F)
          );
      }, [F]),
      _.jsx(uE, {
        scope: s,
        orientation: u,
        dir: j,
        loop: c,
        currentTabStopId: k,
        onItemFocus: x.useCallback((E) => O(E), [O]),
        onItemShiftTab: x.useCallback(() => W(!0), []),
        onFocusableItemAdd: x.useCallback(() => P((E) => E + 1), []),
        onFocusableItemRemove: x.useCallback(() => P((E) => E - 1), []),
        children: _.jsx(Hl.div, {
          tabIndex: $ || Se === 0 ? -1 : 0,
          "data-orientation": u,
          ...v,
          ref: w,
          style: { outline: "none", ...l.style },
          onMouseDown: On(l.onMouseDown, () => {
            he.current = !0;
          }),
          onFocus: On(l.onFocus, (E) => {
            const ee = !he.current;
            if (E.target === E.currentTarget && ee && !$) {
              const Ae = new CustomEvent(Yc, iE);
              if ((E.currentTarget.dispatchEvent(Ae), !Ae.defaultPrevented)) {
                const Re = ie().filter((z) => z.focusable),
                  Ee = Re.find((z) => z.active),
                  ze = Re.find((z) => z.id === k),
                  fe = [Ee, ze, ...Re]
                    .filter(Boolean)
                    .map((z) => z.ref.current);
                hy(fe, b);
              }
            }
            he.current = !1;
          }),
          onBlur: On(l.onBlur, () => W(!1))
        })
      })
    );
  }),
  dy = "RovingFocusGroupItem",
  my = x.forwardRef((l, i) => {
    const {
        __scopeRovingFocusGroup: s,
        focusable: u = !0,
        active: c = !1,
        tabStopId: f,
        children: m,
        ...g
      } = l,
      p = eE(),
      h = f || p,
      b = sE(dy, s),
      v = b.currentTabStopId === h,
      N = sy(s),
      {
        onFocusableItemAdd: w,
        onFocusableItemRemove: j,
        currentTabStopId: k
      } = b;
    return (
      x.useEffect(() => {
        if (u) return (w(), () => j());
      }, [u, w, j]),
      _.jsx(ef.ItemSlot, {
        scope: s,
        id: h,
        focusable: u,
        active: c,
        children: _.jsx(Hl.span, {
          tabIndex: v ? 0 : -1,
          "data-orientation": b.orientation,
          ...g,
          ref: i,
          onMouseDown: On(l.onMouseDown, (O) => {
            u ? b.onItemFocus(h) : O.preventDefault();
          }),
          onFocus: On(l.onFocus, () => b.onItemFocus(h)),
          onKeyDown: On(l.onKeyDown, (O) => {
            if (O.key === "Tab" && O.shiftKey) {
              b.onItemShiftTab();
              return;
            }
            if (O.target !== O.currentTarget) return;
            const $ = mE(O, b.orientation, b.dir);
            if ($ !== void 0) {
              if (O.metaKey || O.ctrlKey || O.altKey || O.shiftKey) return;
              O.preventDefault();
              let F = N()
                .filter((ie) => ie.focusable)
                .map((ie) => ie.ref.current);
              if ($ === "last") F.reverse();
              else if ($ === "prev" || $ === "next") {
                $ === "prev" && F.reverse();
                const ie = F.indexOf(O.currentTarget);
                F = b.loop ? hE(F, ie + 1) : F.slice(ie + 1);
              }
              setTimeout(() => hy(F));
            }
          }),
          children:
            typeof m == "function"
              ? m({ isCurrentTabStop: v, hasTabStop: k != null })
              : m
        })
      })
    );
  });
my.displayName = dy;
var fE = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function dE(l, i) {
  return i !== "rtl"
    ? l
    : l === "ArrowLeft"
      ? "ArrowRight"
      : l === "ArrowRight"
        ? "ArrowLeft"
        : l;
}
function mE(l, i, s) {
  const u = dE(l.key, s);
  if (
    !(i === "vertical" && ["ArrowLeft", "ArrowRight"].includes(u)) &&
    !(i === "horizontal" && ["ArrowUp", "ArrowDown"].includes(u))
  )
    return fE[u];
}
function hy(l, i = !1) {
  const s = document.activeElement;
  for (const u of l)
    if (
      u === s ||
      (u.focus({ preventScroll: i }), document.activeElement !== s)
    )
      return;
}
function hE(l, i) {
  return l.map((s, u) => l[(i + u) % l.length]);
}
var pE = fy,
  gE = my,
  yE = "Label",
  py = x.forwardRef((l, i) =>
    _.jsx(Hl.label, {
      ...l,
      ref: i,
      onMouseDown: (s) => {
        s.target.closest("button, input, select, textarea") ||
          (l.onMouseDown?.(s),
          !s.defaultPrevented && s.detail > 1 && s.preventDefault());
      }
    })
  );
py.displayName = yE;
var vE = py,
  Tf = "Radio",
  [bE, gy] = Ru(Tf),
  [SE, xE] = bE(Tf),
  yy = x.forwardRef((l, i) => {
    const {
        __scopeRadio: s,
        name: u,
        checked: c = !1,
        required: f,
        disabled: m,
        value: g = "on",
        onCheck: p,
        form: h,
        ...b
      } = l,
      [v, N] = x.useState(null),
      w = Ul(i, (O) => N(O)),
      j = x.useRef(!1),
      k = v ? h || !!v.closest("form") : !0;
    return _.jsxs(SE, {
      scope: s,
      checked: c,
      disabled: m,
      children: [
        _.jsx(Hl.button, {
          type: "button",
          role: "radio",
          "aria-checked": c,
          "data-state": xy(c),
          "data-disabled": m ? "" : void 0,
          disabled: m,
          value: g,
          ...b,
          ref: w,
          onClick: On(l.onClick, (O) => {
            (c || p?.(),
              k &&
                ((j.current = O.isPropagationStopped()),
                j.current || O.stopPropagation()));
          })
        }),
        k &&
          _.jsx(Sy, {
            control: v,
            bubbles: !j.current,
            name: u,
            value: g,
            checked: c,
            required: f,
            disabled: m,
            form: h,
            style: { transform: "translateX(-100%)" }
          })
      ]
    });
  });
yy.displayName = Tf;
var vy = "RadioIndicator",
  by = x.forwardRef((l, i) => {
    const { __scopeRadio: s, forceMount: u, ...c } = l,
      f = xE(vy, s);
    return _.jsx(oy, {
      present: u || f.checked,
      children: _.jsx(Hl.span, {
        "data-state": xy(f.checked),
        "data-disabled": f.disabled ? "" : void 0,
        ...c,
        ref: i
      })
    });
  });
by.displayName = vy;
var EE = "RadioBubbleInput",
  Sy = x.forwardRef(
    ({ __scopeRadio: l, control: i, checked: s, bubbles: u = !0, ...c }, f) => {
      const m = x.useRef(null),
        g = Ul(m, f),
        p = nE(s),
        h = lE(i);
      return (
        x.useEffect(() => {
          const b = m.current;
          if (!b) return;
          const v = window.HTMLInputElement.prototype,
            w = Object.getOwnPropertyDescriptor(v, "checked").set;
          if (p !== s && w) {
            const j = new Event("click", { bubbles: u });
            (w.call(b, s), b.dispatchEvent(j));
          }
        }, [p, s, u]),
        _.jsx(Hl.input, {
          type: "radio",
          "aria-hidden": !0,
          defaultChecked: s,
          ...c,
          tabIndex: -1,
          ref: g,
          style: {
            ...c.style,
            ...h,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }
        })
      );
    }
  );
Sy.displayName = EE;
function xy(l) {
  return l ? "checked" : "unchecked";
}
var TE = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Au = "RadioGroup",
  [RE] = Ru(Au, [cy, gy]),
  Ey = cy(),
  Ty = gy(),
  [AE, wE] = RE(Au),
  Ry = x.forwardRef((l, i) => {
    const {
        __scopeRadioGroup: s,
        name: u,
        defaultValue: c,
        value: f,
        required: m = !1,
        disabled: g = !1,
        orientation: p,
        dir: h,
        loop: b = !0,
        onValueChange: v,
        ...N
      } = l,
      w = Ey(s),
      j = uy(h),
      [k, O] = ry({ prop: f, defaultProp: c ?? null, onChange: v, caller: Au });
    return _.jsx(AE, {
      scope: s,
      name: u,
      required: m,
      disabled: g,
      value: k,
      onValueChange: O,
      children: _.jsx(pE, {
        asChild: !0,
        ...w,
        orientation: p,
        dir: j,
        loop: b,
        children: _.jsx(Hl.div, {
          role: "radiogroup",
          "aria-required": m,
          "aria-orientation": p,
          "data-disabled": g ? "" : void 0,
          dir: j,
          ...N,
          ref: i
        })
      })
    });
  });
Ry.displayName = Au;
var Ay = "RadioGroupItem",
  wy = x.forwardRef((l, i) => {
    const { __scopeRadioGroup: s, disabled: u, ...c } = l,
      f = wE(Ay, s),
      m = f.disabled || u,
      g = Ey(s),
      p = Ty(s),
      h = x.useRef(null),
      b = Ul(i, h),
      v = f.value === c.value,
      N = x.useRef(!1);
    return (
      x.useEffect(() => {
        const w = (k) => {
            TE.includes(k.key) && (N.current = !0);
          },
          j = () => (N.current = !1);
        return (
          document.addEventListener("keydown", w),
          document.addEventListener("keyup", j),
          () => {
            (document.removeEventListener("keydown", w),
              document.removeEventListener("keyup", j));
          }
        );
      }, []),
      _.jsx(gE, {
        asChild: !0,
        ...g,
        focusable: !m,
        active: v,
        children: _.jsx(yy, {
          disabled: m,
          required: f.required,
          checked: v,
          ...p,
          ...c,
          name: f.name,
          ref: b,
          onCheck: () => f.onValueChange(c.value),
          onKeyDown: On((w) => {
            w.key === "Enter" && w.preventDefault();
          }),
          onFocus: On(c.onFocus, () => {
            N.current && h.current?.click();
          })
        })
      })
    );
  });
wy.displayName = Ay;
var _E = "RadioGroupIndicator",
  _y = x.forwardRef((l, i) => {
    const { __scopeRadioGroup: s, ...u } = l,
      c = Ty(s);
    return _.jsx(by, { ...c, ...u, ref: i });
  });
_y.displayName = _E;
var Cy = Ry,
  My = wy,
  CE = _y;
const ME = (l, i) => {
    const s = new Array(l.length + i.length);
    for (let u = 0; u < l.length; u++) s[u] = l[u];
    for (let u = 0; u < i.length; u++) s[l.length + u] = i[u];
    return s;
  },
  NE = (l, i) => ({ classGroupId: l, validator: i }),
  Ny = (l = new Map(), i = null, s) => ({
    nextPart: l,
    validators: i,
    classGroupId: s
  }),
  bu = "-",
  Kp = [],
  OE = "arbitrary..",
  DE = (l) => {
    const i = LE(l),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: u } = l;
    return {
      getClassGroupId: (m) => {
        if (m.startsWith("[") && m.endsWith("]")) return zE(m);
        const g = m.split(bu),
          p = g[0] === "" && g.length > 1 ? 1 : 0;
        return Oy(g, p, i);
      },
      getConflictingClassGroupIds: (m, g) => {
        if (g) {
          const p = u[m],
            h = s[m];
          return p ? (h ? ME(h, p) : p) : h || Kp;
        }
        return s[m] || Kp;
      }
    };
  },
  Oy = (l, i, s) => {
    if (l.length - i === 0) return s.classGroupId;
    const c = l[i],
      f = s.nextPart.get(c);
    if (f) {
      const h = Oy(l, i + 1, f);
      if (h) return h;
    }
    const m = s.validators;
    if (m === null) return;
    const g = i === 0 ? l.join(bu) : l.slice(i).join(bu),
      p = m.length;
    for (let h = 0; h < p; h++) {
      const b = m[h];
      if (b.validator(g)) return b.classGroupId;
    }
  },
  zE = (l) =>
    l.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const i = l.slice(1, -1),
            s = i.indexOf(":"),
            u = i.slice(0, s);
          return u ? OE + u : void 0;
        })(),
  LE = (l) => {
    const { theme: i, classGroups: s } = l;
    return UE(s, i);
  },
  UE = (l, i) => {
    const s = Ny();
    for (const u in l) {
      const c = l[u];
      Rf(c, s, u, i);
    }
    return s;
  },
  Rf = (l, i, s, u) => {
    const c = l.length;
    for (let f = 0; f < c; f++) {
      const m = l[f];
      jE(m, i, s, u);
    }
  },
  jE = (l, i, s, u) => {
    if (typeof l == "string") {
      HE(l, i, s);
      return;
    }
    if (typeof l == "function") {
      BE(l, i, s, u);
      return;
    }
    kE(l, i, s, u);
  },
  HE = (l, i, s) => {
    const u = l === "" ? i : Dy(i, l);
    u.classGroupId = s;
  },
  BE = (l, i, s, u) => {
    if (GE(l)) {
      Rf(l(u), i, s, u);
      return;
    }
    (i.validators === null && (i.validators = []), i.validators.push(NE(s, l)));
  },
  kE = (l, i, s, u) => {
    const c = Object.entries(l),
      f = c.length;
    for (let m = 0; m < f; m++) {
      const [g, p] = c[m];
      Rf(p, Dy(i, g), s, u);
    }
  },
  Dy = (l, i) => {
    let s = l;
    const u = i.split(bu),
      c = u.length;
    for (let f = 0; f < c; f++) {
      const m = u[f];
      let g = s.nextPart.get(m);
      (g || ((g = Ny()), s.nextPart.set(m, g)), (s = g));
    }
    return s;
  },
  GE = (l) => "isThemeGetter" in l && l.isThemeGetter === !0,
  YE = (l) => {
    if (l < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      s = Object.create(null),
      u = Object.create(null);
    const c = (f, m) => {
      ((s[f] = m), i++, i > l && ((i = 0), (u = s), (s = Object.create(null))));
    };
    return {
      get(f) {
        let m = s[f];
        if (m !== void 0) return m;
        if ((m = u[f]) !== void 0) return (c(f, m), m);
      },
      set(f, m) {
        f in s ? (s[f] = m) : c(f, m);
      }
    };
  },
  tf = "!",
  Jp = ":",
  qE = [],
  Ip = (l, i, s, u, c) => ({
    modifiers: l,
    hasImportantModifier: i,
    baseClassName: s,
    maybePostfixModifierPosition: u,
    isExternal: c
  }),
  VE = (l) => {
    const { prefix: i, experimentalParseClassName: s } = l;
    let u = (c) => {
      const f = [];
      let m = 0,
        g = 0,
        p = 0,
        h;
      const b = c.length;
      for (let k = 0; k < b; k++) {
        const O = c[k];
        if (m === 0 && g === 0) {
          if (O === Jp) {
            (f.push(c.slice(p, k)), (p = k + 1));
            continue;
          }
          if (O === "/") {
            h = k;
            continue;
          }
        }
        O === "[" ? m++ : O === "]" ? m-- : O === "(" ? g++ : O === ")" && g--;
      }
      const v = f.length === 0 ? c : c.slice(p);
      let N = v,
        w = !1;
      v.endsWith(tf)
        ? ((N = v.slice(0, -1)), (w = !0))
        : v.startsWith(tf) && ((N = v.slice(1)), (w = !0));
      const j = h && h > p ? h - p : void 0;
      return Ip(f, w, N, j);
    };
    if (i) {
      const c = i + Jp,
        f = u;
      u = (m) =>
        m.startsWith(c) ? f(m.slice(c.length)) : Ip(qE, !1, m, void 0, !0);
    }
    if (s) {
      const c = u;
      u = (f) => s({ className: f, parseClassName: c });
    }
    return u;
  },
  XE = (l) => {
    const i = new Map();
    return (
      l.orderSensitiveModifiers.forEach((s, u) => {
        i.set(s, 1e6 + u);
      }),
      (s) => {
        const u = [];
        let c = [];
        for (let f = 0; f < s.length; f++) {
          const m = s[f],
            g = m[0] === "[",
            p = i.has(m);
          g || p
            ? (c.length > 0 && (c.sort(), u.push(...c), (c = [])), u.push(m))
            : c.push(m);
        }
        return (c.length > 0 && (c.sort(), u.push(...c)), u);
      }
    );
  },
  QE = (l) => ({
    cache: YE(l.cacheSize),
    parseClassName: VE(l),
    sortModifiers: XE(l),
    ...DE(l)
  }),
  ZE = /\s+/,
  FE = (l, i) => {
    const {
        parseClassName: s,
        getClassGroupId: u,
        getConflictingClassGroupIds: c,
        sortModifiers: f
      } = i,
      m = [],
      g = l.trim().split(ZE);
    let p = "";
    for (let h = g.length - 1; h >= 0; h -= 1) {
      const b = g[h],
        {
          isExternal: v,
          modifiers: N,
          hasImportantModifier: w,
          baseClassName: j,
          maybePostfixModifierPosition: k
        } = s(b);
      if (v) {
        p = b + (p.length > 0 ? " " + p : p);
        continue;
      }
      let O = !!k,
        $ = u(O ? j.substring(0, k) : j);
      if (!$) {
        if (!O) {
          p = b + (p.length > 0 ? " " + p : p);
          continue;
        }
        if ((($ = u(j)), !$)) {
          p = b + (p.length > 0 ? " " + p : p);
          continue;
        }
        O = !1;
      }
      const W = N.length === 0 ? "" : N.length === 1 ? N[0] : f(N).join(":"),
        F = w ? W + tf : W,
        ie = F + $;
      if (m.indexOf(ie) > -1) continue;
      m.push(ie);
      const he = c($, O);
      for (let Se = 0; Se < he.length; ++Se) {
        const P = he[Se];
        m.push(F + P);
      }
      p = b + (p.length > 0 ? " " + p : p);
    }
    return p;
  },
  KE = (...l) => {
    let i = 0,
      s,
      u,
      c = "";
    for (; i < l.length; )
      (s = l[i++]) && (u = zy(s)) && (c && (c += " "), (c += u));
    return c;
  },
  zy = (l) => {
    if (typeof l == "string") return l;
    let i,
      s = "";
    for (let u = 0; u < l.length; u++)
      l[u] && (i = zy(l[u])) && (s && (s += " "), (s += i));
    return s;
  },
  JE = (l, ...i) => {
    let s, u, c, f;
    const m = (p) => {
        const h = i.reduce((b, v) => v(b), l());
        return (
          (s = QE(h)),
          (u = s.cache.get),
          (c = s.cache.set),
          (f = g),
          g(p)
        );
      },
      g = (p) => {
        const h = u(p);
        if (h) return h;
        const b = FE(p, s);
        return (c(p, b), b);
      };
    return ((f = m), (...p) => f(KE(...p)));
  },
  IE = [],
  Ut = (l) => {
    const i = (s) => s[l] || IE;
    return ((i.isThemeGetter = !0), i);
  },
  Ly = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Uy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  $E = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  PE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  WE =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  e1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  t1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  a1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ol = (l) => $E.test(l),
  ke = (l) => !!l && !Number.isNaN(Number(l)),
  ul = (l) => !!l && Number.isInteger(Number(l)),
  qc = (l) => l.endsWith("%") && ke(l.slice(0, -1)),
  wn = (l) => PE.test(l),
  jy = () => !0,
  n1 = (l) => WE.test(l) && !e1.test(l),
  Af = () => !1,
  l1 = (l) => t1.test(l),
  i1 = (l) => a1.test(l),
  r1 = (l) => !ve(l) && !be(l),
  o1 = (l) => ml(l, ky, Af),
  ve = (l) => Ly.test(l),
  Dl = (l) => ml(l, Gy, n1),
  $p = (l) => ml(l, p1, ke),
  u1 = (l) => ml(l, qy, jy),
  s1 = (l) => ml(l, Yy, Af),
  Pp = (l) => ml(l, Hy, Af),
  c1 = (l) => ml(l, By, i1),
  su = (l) => ml(l, Vy, l1),
  be = (l) => Uy.test(l),
  Rr = (l) => Bl(l, Gy),
  f1 = (l) => Bl(l, Yy),
  Wp = (l) => Bl(l, Hy),
  d1 = (l) => Bl(l, ky),
  m1 = (l) => Bl(l, By),
  cu = (l) => Bl(l, Vy, !0),
  h1 = (l) => Bl(l, qy, !0),
  ml = (l, i, s) => {
    const u = Ly.exec(l);
    return u ? (u[1] ? i(u[1]) : s(u[2])) : !1;
  },
  Bl = (l, i, s = !1) => {
    const u = Uy.exec(l);
    return u ? (u[1] ? i(u[1]) : s) : !1;
  },
  Hy = (l) => l === "position" || l === "percentage",
  By = (l) => l === "image" || l === "url",
  ky = (l) => l === "length" || l === "size" || l === "bg-size",
  Gy = (l) => l === "length",
  p1 = (l) => l === "number",
  Yy = (l) => l === "family-name",
  qy = (l) => l === "number" || l === "weight",
  Vy = (l) => l === "shadow",
  g1 = () => {
    const l = Ut("color"),
      i = Ut("font"),
      s = Ut("text"),
      u = Ut("font-weight"),
      c = Ut("tracking"),
      f = Ut("leading"),
      m = Ut("breakpoint"),
      g = Ut("container"),
      p = Ut("spacing"),
      h = Ut("radius"),
      b = Ut("shadow"),
      v = Ut("inset-shadow"),
      N = Ut("text-shadow"),
      w = Ut("drop-shadow"),
      j = Ut("blur"),
      k = Ut("perspective"),
      O = Ut("aspect"),
      $ = Ut("ease"),
      W = Ut("animate"),
      F = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column"
      ],
      ie = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom"
      ],
      he = () => [...ie(), be, ve],
      Se = () => ["auto", "hidden", "clip", "visible", "scroll"],
      P = () => ["auto", "contain", "none"],
      E = () => [be, ve, p],
      ee = () => [ol, "full", "auto", ...E()],
      Ae = () => [ul, "none", "subgrid", be, ve],
      Re = () => ["auto", { span: ["full", ul, be, ve] }, ul, be, ve],
      Ee = () => [ul, "auto", be, ve],
      ze = () => ["auto", "min", "max", "fr", be, ve],
      Xe = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe"
      ],
      fe = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe"
      ],
      z = () => ["auto", ...E()],
      J = () => [
        ol,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...E()
      ],
      ce = () => [
        ol,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...E()
      ],
      pe = () => [
        ol,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...E()
      ],
      te = () => [l, be, ve],
      R = () => [...ie(), Wp, Pp, { position: [be, ve] }],
      Y = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      Z = () => ["auto", "cover", "contain", d1, o1, { size: [be, ve] }],
      re = () => [qc, Rr, Dl],
      ne = () => ["", "none", "full", h, be, ve],
      de = () => ["", ke, Rr, Dl],
      Ne = () => ["solid", "dashed", "dotted", "double"],
      Je = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity"
      ],
      Me = () => [ke, qc, Wp, Pp],
      Wt = () => ["", "none", j, be, ve],
      ea = () => ["none", ke, be, ve],
      fa = () => ["none", ke, be, ve],
      Pe = () => [ke, be, ve],
      ft = () => [ol, "full", ...E()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [wn],
        breakpoint: [wn],
        color: [jy],
        container: [wn],
        "drop-shadow": [wn],
        ease: ["in", "out", "in-out"],
        font: [r1],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black"
        ],
        "inset-shadow": [wn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none"
        ],
        radius: [wn],
        shadow: [wn],
        spacing: ["px", ke],
        text: [wn],
        "text-shadow": [wn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", ol, ve, be, O] }],
        container: ["container"],
        columns: [{ columns: [ke, ve, be, g] }],
        "break-after": [{ "break-after": F() }],
        "break-before": [{ "break-before": F() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] }
        ],
        "object-position": [{ object: he() }],
        overflow: [{ overflow: Se() }],
        "overflow-x": [{ "overflow-x": Se() }],
        "overflow-y": [{ "overflow-y": Se() }],
        overscroll: [{ overscroll: P() }],
        "overscroll-x": [{ "overscroll-x": P() }],
        "overscroll-y": [{ "overscroll-y": P() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: ee() }],
        "inset-x": [{ "inset-x": ee() }],
        "inset-y": [{ "inset-y": ee() }],
        start: [{ "inset-s": ee(), start: ee() }],
        end: [{ "inset-e": ee(), end: ee() }],
        "inset-bs": [{ "inset-bs": ee() }],
        "inset-be": [{ "inset-be": ee() }],
        top: [{ top: ee() }],
        right: [{ right: ee() }],
        bottom: [{ bottom: ee() }],
        left: [{ left: ee() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [ul, "auto", be, ve] }],
        basis: [{ basis: [ol, "full", "auto", g, ...E()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] }
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [ke, ol, "auto", "initial", "none", ve] }],
        grow: [{ grow: ["", ke, be, ve] }],
        shrink: [{ shrink: ["", ke, be, ve] }],
        order: [{ order: [ul, "first", "last", "none", be, ve] }],
        "grid-cols": [{ "grid-cols": Ae() }],
        "col-start-end": [{ col: Re() }],
        "col-start": [{ "col-start": Ee() }],
        "col-end": [{ "col-end": Ee() }],
        "grid-rows": [{ "grid-rows": Ae() }],
        "row-start-end": [{ row: Re() }],
        "row-start": [{ "row-start": Ee() }],
        "row-end": [{ "row-end": Ee() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }
        ],
        "auto-cols": [{ "auto-cols": ze() }],
        "auto-rows": [{ "auto-rows": ze() }],
        gap: [{ gap: E() }],
        "gap-x": [{ "gap-x": E() }],
        "gap-y": [{ "gap-y": E() }],
        "justify-content": [{ justify: [...Xe(), "normal"] }],
        "justify-items": [{ "justify-items": [...fe(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...fe()] }],
        "align-content": [{ content: ["normal", ...Xe()] }],
        "align-items": [{ items: [...fe(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...fe(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Xe() }],
        "place-items": [{ "place-items": [...fe(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...fe()] }],
        p: [{ p: E() }],
        px: [{ px: E() }],
        py: [{ py: E() }],
        ps: [{ ps: E() }],
        pe: [{ pe: E() }],
        pbs: [{ pbs: E() }],
        pbe: [{ pbe: E() }],
        pt: [{ pt: E() }],
        pr: [{ pr: E() }],
        pb: [{ pb: E() }],
        pl: [{ pl: E() }],
        m: [{ m: z() }],
        mx: [{ mx: z() }],
        my: [{ my: z() }],
        ms: [{ ms: z() }],
        me: [{ me: z() }],
        mbs: [{ mbs: z() }],
        mbe: [{ mbe: z() }],
        mt: [{ mt: z() }],
        mr: [{ mr: z() }],
        mb: [{ mb: z() }],
        ml: [{ ml: z() }],
        "space-x": [{ "space-x": E() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": E() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: J() }],
        "inline-size": [{ inline: ["auto", ...ce()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...ce()] }],
        "max-inline-size": [{ "max-inline": ["none", ...ce()] }],
        "block-size": [{ block: ["auto", ...pe()] }],
        "min-block-size": [{ "min-block": ["auto", ...pe()] }],
        "max-block-size": [{ "max-block": ["none", ...pe()] }],
        w: [{ w: [g, "screen", ...J()] }],
        "min-w": [{ "min-w": [g, "screen", "none", ...J()] }],
        "max-w": [
          { "max-w": [g, "screen", "none", "prose", { screen: [m] }, ...J()] }
        ],
        h: [{ h: ["screen", "lh", ...J()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...J()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...J()] }],
        "font-size": [{ text: ["base", s, Rr, Dl] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [u, h1, u1] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              qc,
              ve
            ]
          }
        ],
        "font-family": [{ font: [f1, s1, i] }],
        "font-features": [{ "font-features": [ve] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [c, be, ve] }],
        "line-clamp": [{ "line-clamp": [ke, "none", be, $p] }],
        leading: [{ leading: [f, ...E()] }],
        "list-image": [{ "list-image": ["none", be, ve] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", be, ve] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] }
        ],
        "placeholder-color": [{ placeholder: te() }],
        "text-color": [{ text: te() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [{ decoration: [...Ne(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [ke, "from-font", "auto", be, Dl] }
        ],
        "text-decoration-color": [{ decoration: te() }],
        "underline-offset": [{ "underline-offset": [ke, "auto", be, ve] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: E() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              be,
              ve
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", be, ve] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: R() }],
        "bg-repeat": [{ bg: Y() }],
        "bg-size": [{ bg: Z() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  ul,
                  be,
                  ve
                ],
                radial: ["", be, ve],
                conic: [ul, be, ve]
              },
              m1,
              c1
            ]
          }
        ],
        "bg-color": [{ bg: te() }],
        "gradient-from-pos": [{ from: re() }],
        "gradient-via-pos": [{ via: re() }],
        "gradient-to-pos": [{ to: re() }],
        "gradient-from": [{ from: te() }],
        "gradient-via": [{ via: te() }],
        "gradient-to": [{ to: te() }],
        rounded: [{ rounded: ne() }],
        "rounded-s": [{ "rounded-s": ne() }],
        "rounded-e": [{ "rounded-e": ne() }],
        "rounded-t": [{ "rounded-t": ne() }],
        "rounded-r": [{ "rounded-r": ne() }],
        "rounded-b": [{ "rounded-b": ne() }],
        "rounded-l": [{ "rounded-l": ne() }],
        "rounded-ss": [{ "rounded-ss": ne() }],
        "rounded-se": [{ "rounded-se": ne() }],
        "rounded-ee": [{ "rounded-ee": ne() }],
        "rounded-es": [{ "rounded-es": ne() }],
        "rounded-tl": [{ "rounded-tl": ne() }],
        "rounded-tr": [{ "rounded-tr": ne() }],
        "rounded-br": [{ "rounded-br": ne() }],
        "rounded-bl": [{ "rounded-bl": ne() }],
        "border-w": [{ border: de() }],
        "border-w-x": [{ "border-x": de() }],
        "border-w-y": [{ "border-y": de() }],
        "border-w-s": [{ "border-s": de() }],
        "border-w-e": [{ "border-e": de() }],
        "border-w-bs": [{ "border-bs": de() }],
        "border-w-be": [{ "border-be": de() }],
        "border-w-t": [{ "border-t": de() }],
        "border-w-r": [{ "border-r": de() }],
        "border-w-b": [{ "border-b": de() }],
        "border-w-l": [{ "border-l": de() }],
        "divide-x": [{ "divide-x": de() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": de() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Ne(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Ne(), "hidden", "none"] }],
        "border-color": [{ border: te() }],
        "border-color-x": [{ "border-x": te() }],
        "border-color-y": [{ "border-y": te() }],
        "border-color-s": [{ "border-s": te() }],
        "border-color-e": [{ "border-e": te() }],
        "border-color-bs": [{ "border-bs": te() }],
        "border-color-be": [{ "border-be": te() }],
        "border-color-t": [{ "border-t": te() }],
        "border-color-r": [{ "border-r": te() }],
        "border-color-b": [{ "border-b": te() }],
        "border-color-l": [{ "border-l": te() }],
        "divide-color": [{ divide: te() }],
        "outline-style": [{ outline: [...Ne(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [ke, be, ve] }],
        "outline-w": [{ outline: ["", ke, Rr, Dl] }],
        "outline-color": [{ outline: te() }],
        shadow: [{ shadow: ["", "none", b, cu, su] }],
        "shadow-color": [{ shadow: te() }],
        "inset-shadow": [{ "inset-shadow": ["none", v, cu, su] }],
        "inset-shadow-color": [{ "inset-shadow": te() }],
        "ring-w": [{ ring: de() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: te() }],
        "ring-offset-w": [{ "ring-offset": [ke, Dl] }],
        "ring-offset-color": [{ "ring-offset": te() }],
        "inset-ring-w": [{ "inset-ring": de() }],
        "inset-ring-color": [{ "inset-ring": te() }],
        "text-shadow": [{ "text-shadow": ["none", N, cu, su] }],
        "text-shadow-color": [{ "text-shadow": te() }],
        opacity: [{ opacity: [ke, be, ve] }],
        "mix-blend": [
          { "mix-blend": [...Je(), "plus-darker", "plus-lighter"] }
        ],
        "bg-blend": [{ "bg-blend": Je() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          },
          "mask-no-clip"
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] }
        ],
        "mask-image-linear-pos": [{ "mask-linear": [ke] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": Me() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": Me() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": te() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": te() }],
        "mask-image-t-from-pos": [{ "mask-t-from": Me() }],
        "mask-image-t-to-pos": [{ "mask-t-to": Me() }],
        "mask-image-t-from-color": [{ "mask-t-from": te() }],
        "mask-image-t-to-color": [{ "mask-t-to": te() }],
        "mask-image-r-from-pos": [{ "mask-r-from": Me() }],
        "mask-image-r-to-pos": [{ "mask-r-to": Me() }],
        "mask-image-r-from-color": [{ "mask-r-from": te() }],
        "mask-image-r-to-color": [{ "mask-r-to": te() }],
        "mask-image-b-from-pos": [{ "mask-b-from": Me() }],
        "mask-image-b-to-pos": [{ "mask-b-to": Me() }],
        "mask-image-b-from-color": [{ "mask-b-from": te() }],
        "mask-image-b-to-color": [{ "mask-b-to": te() }],
        "mask-image-l-from-pos": [{ "mask-l-from": Me() }],
        "mask-image-l-to-pos": [{ "mask-l-to": Me() }],
        "mask-image-l-from-color": [{ "mask-l-from": te() }],
        "mask-image-l-to-color": [{ "mask-l-to": te() }],
        "mask-image-x-from-pos": [{ "mask-x-from": Me() }],
        "mask-image-x-to-pos": [{ "mask-x-to": Me() }],
        "mask-image-x-from-color": [{ "mask-x-from": te() }],
        "mask-image-x-to-color": [{ "mask-x-to": te() }],
        "mask-image-y-from-pos": [{ "mask-y-from": Me() }],
        "mask-image-y-to-pos": [{ "mask-y-to": Me() }],
        "mask-image-y-from-color": [{ "mask-y-from": te() }],
        "mask-image-y-to-color": [{ "mask-y-to": te() }],
        "mask-image-radial": [{ "mask-radial": [be, ve] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": Me() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": Me() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": te() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": te() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] }
            ]
          }
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": ie() }],
        "mask-image-conic-pos": [{ "mask-conic": [ke] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": Me() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": Me() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": te() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": te() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          }
        ],
        "mask-position": [{ mask: R() }],
        "mask-repeat": [{ mask: Y() }],
        "mask-size": [{ mask: Z() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", be, ve] }],
        filter: [{ filter: ["", "none", be, ve] }],
        blur: [{ blur: Wt() }],
        brightness: [{ brightness: [ke, be, ve] }],
        contrast: [{ contrast: [ke, be, ve] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", w, cu, su] }],
        "drop-shadow-color": [{ "drop-shadow": te() }],
        grayscale: [{ grayscale: ["", ke, be, ve] }],
        "hue-rotate": [{ "hue-rotate": [ke, be, ve] }],
        invert: [{ invert: ["", ke, be, ve] }],
        saturate: [{ saturate: [ke, be, ve] }],
        sepia: [{ sepia: ["", ke, be, ve] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", be, ve] }],
        "backdrop-blur": [{ "backdrop-blur": Wt() }],
        "backdrop-brightness": [{ "backdrop-brightness": [ke, be, ve] }],
        "backdrop-contrast": [{ "backdrop-contrast": [ke, be, ve] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", ke, be, ve] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ke, be, ve] }],
        "backdrop-invert": [{ "backdrop-invert": ["", ke, be, ve] }],
        "backdrop-opacity": [{ "backdrop-opacity": [ke, be, ve] }],
        "backdrop-saturate": [{ "backdrop-saturate": [ke, be, ve] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", ke, be, ve] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": E() }],
        "border-spacing-x": [{ "border-spacing-x": E() }],
        "border-spacing-y": [{ "border-spacing-y": E() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              be,
              ve
            ]
          }
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [ke, "initial", be, ve] }],
        ease: [{ ease: ["linear", "initial", $, be, ve] }],
        delay: [{ delay: [ke, be, ve] }],
        animate: [{ animate: ["none", W, be, ve] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [k, be, ve] }],
        "perspective-origin": [{ "perspective-origin": he() }],
        rotate: [{ rotate: ea() }],
        "rotate-x": [{ "rotate-x": ea() }],
        "rotate-y": [{ "rotate-y": ea() }],
        "rotate-z": [{ "rotate-z": ea() }],
        scale: [{ scale: fa() }],
        "scale-x": [{ "scale-x": fa() }],
        "scale-y": [{ "scale-y": fa() }],
        "scale-z": [{ "scale-z": fa() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Pe() }],
        "skew-x": [{ "skew-x": Pe() }],
        "skew-y": [{ "skew-y": Pe() }],
        transform: [{ transform: [be, ve, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: he() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: ft() }],
        "translate-x": [{ "translate-x": ft() }],
        "translate-y": [{ "translate-y": ft() }],
        "translate-z": [{ "translate-z": ft() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: te() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: te() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light"
            ]
          }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              be,
              ve
            ]
          }
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": E() }],
        "scroll-mx": [{ "scroll-mx": E() }],
        "scroll-my": [{ "scroll-my": E() }],
        "scroll-ms": [{ "scroll-ms": E() }],
        "scroll-me": [{ "scroll-me": E() }],
        "scroll-mbs": [{ "scroll-mbs": E() }],
        "scroll-mbe": [{ "scroll-mbe": E() }],
        "scroll-mt": [{ "scroll-mt": E() }],
        "scroll-mr": [{ "scroll-mr": E() }],
        "scroll-mb": [{ "scroll-mb": E() }],
        "scroll-ml": [{ "scroll-ml": E() }],
        "scroll-p": [{ "scroll-p": E() }],
        "scroll-px": [{ "scroll-px": E() }],
        "scroll-py": [{ "scroll-py": E() }],
        "scroll-ps": [{ "scroll-ps": E() }],
        "scroll-pe": [{ "scroll-pe": E() }],
        "scroll-pbs": [{ "scroll-pbs": E() }],
        "scroll-pbe": [{ "scroll-pbe": E() }],
        "scroll-pt": [{ "scroll-pt": E() }],
        "scroll-pr": [{ "scroll-pr": E() }],
        "scroll-pb": [{ "scroll-pb": E() }],
        "scroll-pl": [{ "scroll-pl": E() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", be, ve] }
        ],
        fill: [{ fill: ["none", ...te()] }],
        "stroke-w": [{ stroke: [ke, Rr, Dl, $p] }],
        stroke: [{ stroke: ["none", ...te()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z"
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection"
      ]
    };
  },
  y1 = JE(g1);
function ln(...l) {
  return y1(ty(l));
}
const v1 = ay(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);
function Nn({
  className: l,
  variant: i = "default",
  size: s = "default",
  asChild: u = !1,
  ...c
}) {
  const f = u ? iy : "button";
  return _.jsx(f, {
    "data-slot": "button",
    "data-variant": i,
    "data-size": s,
    className: ln(v1({ variant: i, size: s, className: l })),
    ...c
  });
}
function Cn({ className: l, size: i = "default", ...s }) {
  return _.jsx("div", {
    "data-slot": "card",
    "data-size": i,
    className: ln(
      "ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col",
      l
    ),
    ...s
  });
}
function Dr({ className: l, ...i }) {
  return _.jsx("div", {
    "data-slot": "card-header",
    className: ln(
      "gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
      l
    ),
    ...i
  });
}
function zr({ className: l, ...i }) {
  return _.jsx("div", {
    "data-slot": "card-title",
    className: ln(
      "text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
      l
    ),
    ...i
  });
}
function af({ className: l, ...i }) {
  return _.jsx("div", {
    "data-slot": "card-description",
    className: ln("text-muted-foreground text-sm", l),
    ...i
  });
}
function Mn({ className: l, ...i }) {
  return _.jsx("div", {
    "data-slot": "card-content",
    className: ln("px-4 group-data-[size=sm]/card:px-3", l),
    ...i
  });
}
const {
  entries: Xy,
  setPrototypeOf: eg,
  isFrozen: b1,
  getPrototypeOf: S1,
  getOwnPropertyDescriptor: x1
} = Object;
let { freeze: Pt, seal: Ha, create: wi } = Object,
  { apply: nf, construct: lf } = typeof Reflect < "u" && Reflect;
Pt ||
  (Pt = function (i) {
    return i;
  });
Ha ||
  (Ha = function (i) {
    return i;
  });
nf ||
  (nf = function (i, s) {
    for (
      var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2;
      f < u;
      f++
    )
      c[f - 2] = arguments[f];
    return i.apply(s, c);
  });
lf ||
  (lf = function (i) {
    for (
      var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), c = 1;
      c < s;
      c++
    )
      u[c - 1] = arguments[c];
    return new i(...u);
  });
const Ar = Dt(Array.prototype.forEach),
  E1 = Dt(Array.prototype.lastIndexOf),
  tg = Dt(Array.prototype.pop),
  wr = Dt(Array.prototype.push),
  T1 = Dt(Array.prototype.splice),
  $t = Array.isArray,
  Lr = Dt(String.prototype.toLowerCase),
  Vc = Dt(String.prototype.toString),
  ag = Dt(String.prototype.match),
  Ti = Dt(String.prototype.replace),
  ng = Dt(String.prototype.indexOf),
  R1 = Dt(String.prototype.trim),
  A1 = Dt(Number.prototype.toString),
  w1 = Dt(Boolean.prototype.toString),
  lg = typeof BigInt > "u" ? null : Dt(BigInt.prototype.toString),
  ig = typeof Symbol > "u" ? null : Dt(Symbol.prototype.toString),
  xt = Dt(Object.prototype.hasOwnProperty),
  _r = Dt(Object.prototype.toString),
  qt = Dt(RegExp.prototype.test),
  fu = _1(TypeError);
function Dt(l) {
  return function (i) {
    i instanceof RegExp && (i.lastIndex = 0);
    for (
      var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), c = 1;
      c < s;
      c++
    )
      u[c - 1] = arguments[c];
    return nf(l, i, u);
  };
}
function _1(l) {
  return function () {
    for (var i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return lf(l, s);
  };
}
function Be(l, i) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lr;
  if ((eg && eg(l, null), !$t(i))) return l;
  let u = i.length;
  for (; u--; ) {
    let c = i[u];
    if (typeof c == "string") {
      const f = s(c);
      f !== c && (b1(i) || (i[u] = f), (c = f));
    }
    l[c] = !0;
  }
  return l;
}
function C1(l) {
  for (let i = 0; i < l.length; i++) xt(l, i) || (l[i] = null);
  return l;
}
function ca(l) {
  const i = wi(null);
  for (const [s, u] of Xy(l))
    xt(l, s) &&
      ($t(u)
        ? (i[s] = C1(u))
        : u && typeof u == "object" && u.constructor === Object
          ? (i[s] = ca(u))
          : (i[s] = u));
  return i;
}
function M1(l) {
  switch (typeof l) {
    case "string":
      return l;
    case "number":
      return A1(l);
    case "boolean":
      return w1(l);
    case "bigint":
      return lg ? lg(l) : "0";
    case "symbol":
      return ig ? ig(l) : "Symbol()";
    case "undefined":
      return _r(l);
    case "function":
    case "object": {
      if (l === null) return _r(l);
      const i = l,
        s = _i(i, "toString");
      if (typeof s == "function") {
        const u = s(i);
        return typeof u == "string" ? u : _r(u);
      }
      return _r(l);
    }
    default:
      return _r(l);
  }
}
function _i(l, i) {
  for (; l !== null; ) {
    const u = x1(l, i);
    if (u) {
      if (u.get) return Dt(u.get);
      if (typeof u.value == "function") return Dt(u.value);
    }
    l = S1(l);
  }
  function s() {
    return null;
  }
  return s;
}
function N1(l) {
  try {
    return (qt(l, ""), !0);
  } catch {
    return !1;
  }
}
const rg = Pt([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "search",
    "section",
    "select",
    "shadow",
    "slot",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
  ]),
  Xc = Pt([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "enterkeyhint",
    "exportparts",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "inputmode",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "part",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern"
  ]),
  Qc = Pt([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence"
  ]),
  O1 = Pt([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use"
  ]),
  Zc = Pt([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts"
  ]),
  D1 = Pt([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none"
  ]),
  og = Pt(["#text"]),
  ug = Pt([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "exportparts",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inert",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "part",
    "pattern",
    "placeholder",
    "playsinline",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "wrap",
    "xmlns"
  ]),
  Fc = Pt([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "amplitude",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "exponent",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "intercept",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "mask-type",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "slope",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "tablevalues",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan"
  ]),
  sg = Pt([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnalign",
    "columnlines",
    "columnspacing",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lquote",
    "lspace",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns"
  ]),
  du = Pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  z1 = Ha(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  L1 = Ha(/<%[\w\W]*|[\w\W]*%>/gm),
  U1 = Ha(/\$\{[\w\W]*/gm),
  j1 = Ha(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  H1 = Ha(/^aria-[\-\w]+$/),
  Qy = Ha(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  ),
  B1 = Ha(/^(?:\w+script|data):/i),
  k1 = Ha(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  Zy = Ha(/^html$/i),
  G1 = Ha(/^[a-z][.\w]*(-[.\w]+)+$/i);
var cg = Object.freeze({
  __proto__: null,
  ARIA_ATTR: H1,
  ATTR_WHITESPACE: k1,
  CUSTOM_ELEMENT: G1,
  DATA_ATTR: j1,
  DOCTYPE_NAME: Zy,
  ERB_EXPR: L1,
  IS_ALLOWED_URI: Qy,
  IS_SCRIPT_OR_DATA: B1,
  MUSTACHE_EXPR: z1,
  TMPLIT_EXPR: U1
});
const Cr = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
  },
  Y1 = function () {
    return typeof window > "u" ? null : window;
  },
  q1 = function (i, s) {
    if (typeof i != "object" || typeof i.createPolicy != "function")
      return null;
    let u = null;
    const c = "data-tt-policy-suffix";
    s && s.hasAttribute(c) && (u = s.getAttribute(c));
    const f = "dompurify" + (u ? "#" + u : "");
    try {
      return i.createPolicy(f, {
        createHTML(m) {
          return m;
        },
        createScriptURL(m) {
          return m;
        }
      });
    } catch {
      return (
        console.warn("TrustedTypes policy " + f + " could not be created."),
        null
      );
    }
  },
  fg = function () {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
  };
function Fy() {
  let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Y1();
  const i = (ue) => Fy(ue);
  if (
    ((i.version = "3.4.1"),
    (i.removed = []),
    !l || !l.document || l.document.nodeType !== Cr.document || !l.Element)
  )
    return ((i.isSupported = !1), i);
  let { document: s } = l;
  const u = s,
    c = u.currentScript,
    {
      DocumentFragment: f,
      HTMLTemplateElement: m,
      Node: g,
      Element: p,
      NodeFilter: h,
      NamedNodeMap: b = l.NamedNodeMap || l.MozNamedAttrMap,
      HTMLFormElement: v,
      DOMParser: N,
      trustedTypes: w
    } = l,
    j = p.prototype,
    k = _i(j, "cloneNode"),
    O = _i(j, "remove"),
    $ = _i(j, "nextSibling"),
    W = _i(j, "childNodes"),
    F = _i(j, "parentNode");
  if (typeof m == "function") {
    const ue = s.createElement("template");
    ue.content && ue.content.ownerDocument && (s = ue.content.ownerDocument);
  }
  let ie,
    he = "";
  const {
      implementation: Se,
      createNodeIterator: P,
      createDocumentFragment: E,
      getElementsByTagName: ee
    } = s,
    { importNode: Ae } = u;
  let Re = fg();
  i.isSupported =
    typeof Xy == "function" &&
    typeof F == "function" &&
    Se &&
    Se.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Ee,
    ERB_EXPR: ze,
    TMPLIT_EXPR: Xe,
    DATA_ATTR: fe,
    ARIA_ATTR: z,
    IS_SCRIPT_OR_DATA: J,
    ATTR_WHITESPACE: ce,
    CUSTOM_ELEMENT: pe
  } = cg;
  let { IS_ALLOWED_URI: te } = cg,
    R = null;
  const Y = Be({}, [...rg, ...Xc, ...Qc, ...Zc, ...og]);
  let Z = null;
  const re = Be({}, [...ug, ...Fc, ...sg, ...du]);
  let ne = Object.seal(
      wi(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1
        }
      })
    ),
    de = null,
    Ne = null;
  const Je = Object.seal(
    wi(null, {
      tagCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
      attributeCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      }
    })
  );
  let Me = !0,
    Wt = !0,
    ea = !1,
    fa = !0,
    Pe = !1,
    ft = !0,
    ta = !1,
    rn = !1,
    da = !1,
    ka = !1,
    Fa = !1,
    Ga = !1,
    Dn = !0,
    kl = !1;
  const Gl = "user-content-";
  let zt = !0,
    Ft = !1,
    Kt = {},
    Vt = null;
  const Ta = Be({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let aa = null;
  const Jt = Be({}, ["audio", "video", "img", "source", "image", "track"]);
  let zn = null;
  const Yl = Be({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns"
    ]),
    na = "http://www.w3.org/1998/Math/MathML",
    At = "http://www.w3.org/2000/svg",
    tt = "http://www.w3.org/1999/xhtml";
  let gt = tt,
    Ln = !1,
    Un = null;
  const Di = Be({}, [na, At, tt], Vc);
  let Ya = Be({}, ["mi", "mo", "mn", "ms", "mtext"]),
    ma = Be({}, ["annotation-xml"]);
  const on = Be({}, ["title", "style", "font", "a", "script"]);
  let Ht = null;
  const jn = ["application/xhtml+xml", "text/html"],
    Ka = "text/html";
  let yt = null,
    Ra = null;
  const Ja = s.createElement("form"),
    ha = function (S) {
      return S instanceof RegExp || S instanceof Function;
    },
    Hn = function () {
      let S =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (Ra && Ra === S) return;
      ((!S || typeof S != "object") && (S = {}),
        (S = ca(S)),
        (Ht =
          jn.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Ka : S.PARSER_MEDIA_TYPE),
        (yt = Ht === "application/xhtml+xml" ? Vc : Lr),
        (R =
          xt(S, "ALLOWED_TAGS") && $t(S.ALLOWED_TAGS)
            ? Be({}, S.ALLOWED_TAGS, yt)
            : Y),
        (Z =
          xt(S, "ALLOWED_ATTR") && $t(S.ALLOWED_ATTR)
            ? Be({}, S.ALLOWED_ATTR, yt)
            : re),
        (Un =
          xt(S, "ALLOWED_NAMESPACES") && $t(S.ALLOWED_NAMESPACES)
            ? Be({}, S.ALLOWED_NAMESPACES, Vc)
            : Di),
        (zn =
          xt(S, "ADD_URI_SAFE_ATTR") && $t(S.ADD_URI_SAFE_ATTR)
            ? Be(ca(Yl), S.ADD_URI_SAFE_ATTR, yt)
            : Yl),
        (aa =
          xt(S, "ADD_DATA_URI_TAGS") && $t(S.ADD_DATA_URI_TAGS)
            ? Be(ca(Jt), S.ADD_DATA_URI_TAGS, yt)
            : Jt),
        (Vt =
          xt(S, "FORBID_CONTENTS") && $t(S.FORBID_CONTENTS)
            ? Be({}, S.FORBID_CONTENTS, yt)
            : Ta),
        (de =
          xt(S, "FORBID_TAGS") && $t(S.FORBID_TAGS)
            ? Be({}, S.FORBID_TAGS, yt)
            : ca({})),
        (Ne =
          xt(S, "FORBID_ATTR") && $t(S.FORBID_ATTR)
            ? Be({}, S.FORBID_ATTR, yt)
            : ca({})),
        (Kt = xt(S, "USE_PROFILES")
          ? S.USE_PROFILES && typeof S.USE_PROFILES == "object"
            ? ca(S.USE_PROFILES)
            : S.USE_PROFILES
          : !1),
        (Me = S.ALLOW_ARIA_ATTR !== !1),
        (Wt = S.ALLOW_DATA_ATTR !== !1),
        (ea = S.ALLOW_UNKNOWN_PROTOCOLS || !1),
        (fa = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
        (Pe = S.SAFE_FOR_TEMPLATES || !1),
        (ft = S.SAFE_FOR_XML !== !1),
        (ta = S.WHOLE_DOCUMENT || !1),
        (ka = S.RETURN_DOM || !1),
        (Fa = S.RETURN_DOM_FRAGMENT || !1),
        (Ga = S.RETURN_TRUSTED_TYPE || !1),
        (da = S.FORCE_BODY || !1),
        (Dn = S.SANITIZE_DOM !== !1),
        (kl = S.SANITIZE_NAMED_PROPS || !1),
        (zt = S.KEEP_CONTENT !== !1),
        (Ft = S.IN_PLACE || !1),
        (te = N1(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Qy),
        (gt = typeof S.NAMESPACE == "string" ? S.NAMESPACE : tt),
        (Ya =
          xt(S, "MATHML_TEXT_INTEGRATION_POINTS") &&
          S.MATHML_TEXT_INTEGRATION_POINTS &&
          typeof S.MATHML_TEXT_INTEGRATION_POINTS == "object"
            ? ca(S.MATHML_TEXT_INTEGRATION_POINTS)
            : Be({}, ["mi", "mo", "mn", "ms", "mtext"])),
        (ma =
          xt(S, "HTML_INTEGRATION_POINTS") &&
          S.HTML_INTEGRATION_POINTS &&
          typeof S.HTML_INTEGRATION_POINTS == "object"
            ? ca(S.HTML_INTEGRATION_POINTS)
            : Be({}, ["annotation-xml"])));
      const q =
        xt(S, "CUSTOM_ELEMENT_HANDLING") &&
        S.CUSTOM_ELEMENT_HANDLING &&
        typeof S.CUSTOM_ELEMENT_HANDLING == "object"
          ? ca(S.CUSTOM_ELEMENT_HANDLING)
          : wi(null);
      if (
        ((ne = wi(null)),
        xt(q, "tagNameCheck") &&
          ha(q.tagNameCheck) &&
          (ne.tagNameCheck = q.tagNameCheck),
        xt(q, "attributeNameCheck") &&
          ha(q.attributeNameCheck) &&
          (ne.attributeNameCheck = q.attributeNameCheck),
        xt(q, "allowCustomizedBuiltInElements") &&
          typeof q.allowCustomizedBuiltInElements == "boolean" &&
          (ne.allowCustomizedBuiltInElements =
            q.allowCustomizedBuiltInElements),
        Pe && (Wt = !1),
        Fa && (ka = !0),
        Kt &&
          ((R = Be({}, og)),
          (Z = wi(null)),
          Kt.html === !0 && (Be(R, rg), Be(Z, ug)),
          Kt.svg === !0 && (Be(R, Xc), Be(Z, Fc), Be(Z, du)),
          Kt.svgFilters === !0 && (Be(R, Qc), Be(Z, Fc), Be(Z, du)),
          Kt.mathMl === !0 && (Be(R, Zc), Be(Z, sg), Be(Z, du))),
        (Je.tagCheck = null),
        (Je.attributeCheck = null),
        xt(S, "ADD_TAGS") &&
          (typeof S.ADD_TAGS == "function"
            ? (Je.tagCheck = S.ADD_TAGS)
            : $t(S.ADD_TAGS) &&
              (R === Y && (R = ca(R)), Be(R, S.ADD_TAGS, yt))),
        xt(S, "ADD_ATTR") &&
          (typeof S.ADD_ATTR == "function"
            ? (Je.attributeCheck = S.ADD_ATTR)
            : $t(S.ADD_ATTR) &&
              (Z === re && (Z = ca(Z)), Be(Z, S.ADD_ATTR, yt))),
        xt(S, "ADD_URI_SAFE_ATTR") &&
          $t(S.ADD_URI_SAFE_ATTR) &&
          Be(zn, S.ADD_URI_SAFE_ATTR, yt),
        xt(S, "FORBID_CONTENTS") &&
          $t(S.FORBID_CONTENTS) &&
          (Vt === Ta && (Vt = ca(Vt)), Be(Vt, S.FORBID_CONTENTS, yt)),
        xt(S, "ADD_FORBID_CONTENTS") &&
          $t(S.ADD_FORBID_CONTENTS) &&
          (Vt === Ta && (Vt = ca(Vt)), Be(Vt, S.ADD_FORBID_CONTENTS, yt)),
        zt && (R["#text"] = !0),
        ta && Be(R, ["html", "head", "body"]),
        R.table && (Be(R, ["tbody"]), delete de.tbody),
        S.TRUSTED_TYPES_POLICY)
      ) {
        if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw fu(
            'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
          );
        if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw fu(
            'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
          );
        ((ie = S.TRUSTED_TYPES_POLICY), (he = ie.createHTML("")));
      } else
        (ie === void 0 && (ie = q1(w, c)),
          ie !== null && typeof he == "string" && (he = ie.createHTML("")));
      (Pt && Pt(S), (Ra = S));
    },
    hl = Be({}, [...Xc, ...Qc, ...O1]),
    pl = Be({}, [...Zc, ...D1]),
    T = function (S) {
      let q = F(S);
      (!q || !q.tagName) && (q = { namespaceURI: gt, tagName: "template" });
      const I = Lr(S.tagName),
        Oe = Lr(q.tagName);
      return Un[S.namespaceURI]
        ? S.namespaceURI === At
          ? q.namespaceURI === tt
            ? I === "svg"
            : q.namespaceURI === na
              ? I === "svg" && (Oe === "annotation-xml" || Ya[Oe])
              : !!hl[I]
          : S.namespaceURI === na
            ? q.namespaceURI === tt
              ? I === "math"
              : q.namespaceURI === At
                ? I === "math" && ma[Oe]
                : !!pl[I]
            : S.namespaceURI === tt
              ? (q.namespaceURI === At && !ma[Oe]) ||
                (q.namespaceURI === na && !Ya[Oe])
                ? !1
                : !pl[I] && (on[I] || !hl[I])
              : !!(Ht === "application/xhtml+xml" && Un[S.namespaceURI])
        : !1;
    },
    M = function (S) {
      wr(i.removed, { element: S });
      try {
        F(S).removeChild(S);
      } catch {
        O(S);
      }
    },
    L = function (S, q) {
      try {
        wr(i.removed, { attribute: q.getAttributeNode(S), from: q });
      } catch {
        wr(i.removed, { attribute: null, from: q });
      }
      if ((q.removeAttribute(S), S === "is"))
        if (ka || Fa)
          try {
            M(q);
          } catch {}
        else
          try {
            q.setAttribute(S, "");
          } catch {}
    },
    K = function (S) {
      let q = null,
        I = null;
      if (da) S = "<remove></remove>" + S;
      else {
        const at = ag(S, /^[\r\n\t ]+/);
        I = at && at[0];
      }
      Ht === "application/xhtml+xml" &&
        gt === tt &&
        (S =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          S +
          "</body></html>");
      const Oe = ie ? ie.createHTML(S) : S;
      if (gt === tt)
        try {
          q = new N().parseFromString(Oe, Ht);
        } catch {}
      if (!q || !q.documentElement) {
        q = Se.createDocument(gt, "template", null);
        try {
          q.documentElement.innerHTML = Ln ? he : Oe;
        } catch {}
      }
      const Le = q.body || q.documentElement;
      return (
        S &&
          I &&
          Le.insertBefore(s.createTextNode(I), Le.childNodes[0] || null),
        gt === tt
          ? ee.call(q, ta ? "html" : "body")[0]
          : ta
            ? q.documentElement
            : Le
      );
    },
    ae = function (S) {
      return P.call(
        S.ownerDocument || S,
        S,
        h.SHOW_ELEMENT |
          h.SHOW_COMMENT |
          h.SHOW_TEXT |
          h.SHOW_PROCESSING_INSTRUCTION |
          h.SHOW_CDATA_SECTION,
        null
      );
    },
    me = function (S) {
      return (
        S instanceof v &&
        (typeof S.nodeName != "string" ||
          typeof S.textContent != "string" ||
          typeof S.removeChild != "function" ||
          !(S.attributes instanceof b) ||
          typeof S.removeAttribute != "function" ||
          typeof S.setAttribute != "function" ||
          typeof S.namespaceURI != "string" ||
          typeof S.insertBefore != "function" ||
          typeof S.hasChildNodes != "function")
      );
    },
    oe = function (S) {
      return typeof g == "function" && S instanceof g;
    };
  function le(ue, S, q) {
    Ar(ue, (I) => {
      I.call(i, S, q, Ra);
    });
  }
  const ge = function (S) {
      let q = null;
      if ((le(Re.beforeSanitizeElements, S, null), me(S))) return (M(S), !0);
      const I = yt(S.nodeName);
      if (
        (le(Re.uponSanitizeElement, S, { tagName: I, allowedTags: R }),
        (ft &&
          S.hasChildNodes() &&
          !oe(S.firstElementChild) &&
          qt(/<[/\w!]/g, S.innerHTML) &&
          qt(/<[/\w!]/g, S.textContent)) ||
          (ft &&
            S.namespaceURI === tt &&
            I === "style" &&
            oe(S.firstElementChild)) ||
          S.nodeType === Cr.progressingInstruction ||
          (ft && S.nodeType === Cr.comment && qt(/<[/\w]/g, S.data)))
      )
        return (M(S), !0);
      if (
        de[I] ||
        (!(Je.tagCheck instanceof Function && Je.tagCheck(I)) && !R[I])
      ) {
        if (
          !de[I] &&
          xe(I) &&
          ((ne.tagNameCheck instanceof RegExp && qt(ne.tagNameCheck, I)) ||
            (ne.tagNameCheck instanceof Function && ne.tagNameCheck(I)))
        )
          return !1;
        if (zt && !Vt[I]) {
          const Oe = F(S) || S.parentNode,
            Le = W(S) || S.childNodes;
          if (Le && Oe) {
            const at = Le.length;
            for (let ct = at - 1; ct >= 0; --ct) {
              const We = k(Le[ct], !0);
              Oe.insertBefore(We, $(S));
            }
          }
        }
        return (M(S), !0);
      }
      return (S instanceof p && !T(S)) ||
        ((I === "noscript" || I === "noembed" || I === "noframes") &&
          qt(/<\/no(script|embed|frames)/i, S.innerHTML))
        ? (M(S), !0)
        : (Pe &&
            S.nodeType === Cr.text &&
            ((q = S.textContent),
            Ar([Ee, ze, Xe], (Oe) => {
              q = Ti(q, Oe, " ");
            }),
            S.textContent !== q &&
              (wr(i.removed, { element: S.cloneNode() }), (S.textContent = q))),
          le(Re.afterSanitizeElements, S, null),
          !1);
    },
    se = function (S, q, I) {
      if (Ne[q] || (Dn && (q === "id" || q === "name") && (I in s || I in Ja)))
        return !1;
      if (!(Wt && !Ne[q] && qt(fe, q))) {
        if (!(Me && qt(z, q))) {
          if (
            !(Je.attributeCheck instanceof Function && Je.attributeCheck(q, S))
          ) {
            if (!Z[q] || Ne[q]) {
              if (
                !(
                  (xe(S) &&
                    ((ne.tagNameCheck instanceof RegExp &&
                      qt(ne.tagNameCheck, S)) ||
                      (ne.tagNameCheck instanceof Function &&
                        ne.tagNameCheck(S))) &&
                    ((ne.attributeNameCheck instanceof RegExp &&
                      qt(ne.attributeNameCheck, q)) ||
                      (ne.attributeNameCheck instanceof Function &&
                        ne.attributeNameCheck(q, S)))) ||
                  (q === "is" &&
                    ne.allowCustomizedBuiltInElements &&
                    ((ne.tagNameCheck instanceof RegExp &&
                      qt(ne.tagNameCheck, I)) ||
                      (ne.tagNameCheck instanceof Function &&
                        ne.tagNameCheck(I))))
                )
              )
                return !1;
            } else if (!zn[q]) {
              if (!qt(te, Ti(I, ce, ""))) {
                if (
                  !(
                    (q === "src" || q === "xlink:href" || q === "href") &&
                    S !== "script" &&
                    ng(I, "data:") === 0 &&
                    aa[S]
                  )
                ) {
                  if (!(ea && !qt(J, Ti(I, ce, "")))) {
                    if (I) return !1;
                  }
                }
              }
            }
          }
        }
      }
      return !0;
    },
    we = Be({}, [
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "missing-glyph"
    ]),
    xe = function (S) {
      return !we[Lr(S)] && qt(pe, S);
    },
    Fe = function (S) {
      le(Re.beforeSanitizeAttributes, S, null);
      const { attributes: q } = S;
      if (!q || me(S)) return;
      const I = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: Z,
        forceKeepAttr: void 0
      };
      let Oe = q.length;
      for (; Oe--; ) {
        const Le = q[Oe],
          { name: at, namespaceURI: ct, value: We } = Le,
          vt = yt(at),
          qa = We;
        let nt = at === "value" ? qa : R1(qa);
        if (
          ((I.attrName = vt),
          (I.attrValue = nt),
          (I.keepAttr = !0),
          (I.forceKeepAttr = void 0),
          le(Re.uponSanitizeAttribute, S, I),
          (nt = I.attrValue),
          kl &&
            (vt === "id" || vt === "name") &&
            ng(nt, Gl) !== 0 &&
            (L(at, S), (nt = Gl + nt)),
          ft &&
            qt(
              /((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
              nt
            ))
        ) {
          L(at, S);
          continue;
        }
        if (vt === "attributename" && ag(nt, "href")) {
          L(at, S);
          continue;
        }
        if (I.forceKeepAttr) continue;
        if (!I.keepAttr) {
          L(at, S);
          continue;
        }
        if (!fa && qt(/\/>/i, nt)) {
          L(at, S);
          continue;
        }
        Pe &&
          Ar([Ee, ze, Xe], (un) => {
            nt = Ti(nt, un, " ");
          });
        const Ia = yt(S.nodeName);
        if (!se(Ia, vt, nt)) {
          L(at, S);
          continue;
        }
        if (
          ie &&
          typeof w == "object" &&
          typeof w.getAttributeType == "function" &&
          !ct
        )
          switch (w.getAttributeType(Ia, vt)) {
            case "TrustedHTML": {
              nt = ie.createHTML(nt);
              break;
            }
            case "TrustedScriptURL": {
              nt = ie.createScriptURL(nt);
              break;
            }
          }
        if (nt !== qa)
          try {
            (ct ? S.setAttributeNS(ct, at, nt) : S.setAttribute(at, nt),
              me(S) ? M(S) : tg(i.removed));
          } catch {
            L(at, S);
          }
      }
      le(Re.afterSanitizeAttributes, S, null);
    },
    je = function (S) {
      let q = null;
      const I = ae(S);
      for (le(Re.beforeSanitizeShadowDOM, S, null); (q = I.nextNode()); )
        (le(Re.uponSanitizeShadowNode, q, null),
          ge(q),
          Fe(q),
          q.content instanceof f && je(q.content));
      le(Re.afterSanitizeShadowDOM, S, null);
    };
  return (
    (i.sanitize = function (ue) {
      let S =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        q = null,
        I = null,
        Oe = null,
        Le = null;
      if (
        ((Ln = !ue),
        Ln && (ue = "<!-->"),
        typeof ue != "string" &&
          !oe(ue) &&
          ((ue = M1(ue)), typeof ue != "string"))
      )
        throw fu("dirty is not a string, aborting");
      if (!i.isSupported) return ue;
      if (
        (rn || Hn(S), (i.removed = []), typeof ue == "string" && (Ft = !1), Ft)
      ) {
        const We = ue.nodeName;
        if (typeof We == "string") {
          const vt = yt(We);
          if (!R[vt] || de[vt])
            throw fu("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (ue instanceof g)
        ((q = K("<!---->")),
          (I = q.ownerDocument.importNode(ue, !0)),
          (I.nodeType === Cr.element && I.nodeName === "BODY") ||
          I.nodeName === "HTML"
            ? (q = I)
            : q.appendChild(I));
      else {
        if (!ka && !Pe && !ta && ue.indexOf("<") === -1)
          return ie && Ga ? ie.createHTML(ue) : ue;
        if (((q = K(ue)), !q)) return ka ? null : Ga ? he : "";
      }
      q && da && M(q.firstChild);
      const at = ae(Ft ? ue : q);
      for (; (Oe = at.nextNode()); )
        (ge(Oe), Fe(Oe), Oe.content instanceof f && je(Oe.content));
      if (Ft) return ue;
      if (ka) {
        if (Pe) {
          q.normalize();
          let We = q.innerHTML;
          (Ar([Ee, ze, Xe], (vt) => {
            We = Ti(We, vt, " ");
          }),
            (q.innerHTML = We));
        }
        if (Fa)
          for (Le = E.call(q.ownerDocument); q.firstChild; )
            Le.appendChild(q.firstChild);
        else Le = q;
        return (
          (Z.shadowroot || Z.shadowrootmode) && (Le = Ae.call(u, Le, !0)),
          Le
        );
      }
      let ct = ta ? q.outerHTML : q.innerHTML;
      return (
        ta &&
          R["!doctype"] &&
          q.ownerDocument &&
          q.ownerDocument.doctype &&
          q.ownerDocument.doctype.name &&
          qt(Zy, q.ownerDocument.doctype.name) &&
          (ct =
            "<!DOCTYPE " +
            q.ownerDocument.doctype.name +
            `>
` +
            ct),
        Pe &&
          Ar([Ee, ze, Xe], (We) => {
            ct = Ti(ct, We, " ");
          }),
        ie && Ga ? ie.createHTML(ct) : ct
      );
    }),
    (i.setConfig = function () {
      let ue =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      (Hn(ue), (rn = !0));
    }),
    (i.clearConfig = function () {
      ((Ra = null), (rn = !1));
    }),
    (i.isValidAttribute = function (ue, S, q) {
      Ra || Hn({});
      const I = yt(ue),
        Oe = yt(S);
      return se(I, Oe, q);
    }),
    (i.addHook = function (ue, S) {
      typeof S == "function" && wr(Re[ue], S);
    }),
    (i.removeHook = function (ue, S) {
      if (S !== void 0) {
        const q = E1(Re[ue], S);
        return q === -1 ? void 0 : T1(Re[ue], q, 1)[0];
      }
      return tg(Re[ue]);
    }),
    (i.removeHooks = function (ue) {
      Re[ue] = [];
    }),
    (i.removeAllHooks = function () {
      Re = fg();
    }),
    i
  );
}
var V1 = Fy(),
  zl = ((l) => (
    (l.UIBundle = "UIBundle"),
    (l.MicroFrontend = "Micro-Frontend"),
    (l.OpenAI = "OpenAI"),
    (l.SalesforceACC = "Salesforce-ACC"),
    (l.MCPApps = "MCP-Apps"),
    (l.Mosaic = "Mosaic"),
    l
  ))(zl || {});
const X1 = Q1();
function Q1() {
  if (typeof window > "u") return "Mosaic";
  if (window.openai) return "OpenAI";
  try {
    if (window.self !== window.top) return "Micro-Frontend";
  } catch {
    return "Micro-Frontend";
  }
  const l = window;
  return l.$A || l.Aura ? "Salesforce-ACC" : "UIBundle";
}
function Z1(l) {
  return X1;
}
const F1 = "graphqlQuery";
class K1 {
  async graphql(i, s) {
    return (
      await window.openai.callTool(F1, {
        query: i,
        ...(s != null ? { variables: s } : {})
      })
    ).structuredContent;
  }
}
function Oi(l) {
  return Ky(l)
    ? l.then((i) => i)
    : {
        then: (i, s) => {
          try {
            return Oi(i(l));
          } catch (u) {
            return i === void 0 ? Oi(l) : rf(u);
          }
        }
      };
}
function rf(l) {
  return Ky(l)
    ? l.then((i) => i)
    : {
        then: (i, s) => {
          if (typeof s == "function")
            try {
              return Oi(s(l));
            } catch (u) {
              return rf(u);
            }
          return rf(l);
        }
      };
}
function Ky(l) {
  return typeof l?.then == "function";
}
function J1(l = { request: [], retry: void 0, response: [], finally: [] }, i) {
  return {
    type: "fetch",
    version: "1.0",
    service: function (...s) {
      var u;
      const c = (u = l.createContext) == null ? void 0 : u.call(l),
        {
          request: f = [],
          retry: m = void 0,
          response: g = [],
          finally: p = []
        } = l,
        h = f.reduce((b, v) => b.then((N) => v(N, c)), Oi(s));
      return Promise.resolve(h)
        .then((b) =>
          m ? m(b, i, c) : i ? i.applyRetry(() => fetch(...b)) : fetch(...b)
        )
        .then((b) => g.reduce((v, N) => v.then((w) => N(w, c)), Oi(b)))
        .finally(() => {
          if (p.length > 0)
            return p.reduce((b, v) => b.then(() => v(c)), Promise.resolve());
        });
    }
  };
}
function I1(
  l,
  i,
  [s, u = {}],
  {
    throwOnExisting: c = !1,
    errorMessage: f = `Unexpected ${l} header encountered`
  } = {}
) {
  let m = !1;
  if (s instanceof Request && !u?.headers) {
    if (c && s.headers.has(l)) throw new Error(f);
    (s.headers.set(l, i), (m = !0));
  }
  if (u?.headers instanceof Headers) {
    if (c && u.headers.has(l)) throw new Error(f);
    u.headers.set(l, i);
  } else {
    if (c && u?.headers && Reflect.has(u.headers, l)) throw new Error(f);
    m || (u.headers = { ...u?.headers, [l]: i });
  }
  return [s, u];
}
class $1 {
  constructor(i) {
    this.defaultRetryPolicy = i;
  }
  applyRetry(i, s) {
    return this.retry(i, s || this.defaultRetryPolicy);
  }
  async retry(i, s) {
    const u = Date.now();
    let c = 0,
      f = await i(),
      m = { attempt: c, totalElapsedMs: Date.now() - u, lastResult: f };
    for (; await s.shouldRetry(f, m); ) {
      const g = await s.calculateDelay(f, m);
      (await this.delay(g),
        s.prepareRetry && (await s.prepareRetry(f, m)),
        c++,
        (f = await i()),
        (m = { attempt: c, totalElapsedMs: Date.now() - u, lastResult: f }));
    }
    return f;
  }
  delay(i) {
    return new Promise((s) => {
      setTimeout(s, i);
    });
  }
}
class P1 {}
function W1(l) {
  return { version: "1.0", service: new $1(l), type: "retry" };
}
const eT = "X-CSRF-Token";
function tT(l, i = {}) {
  const { protectedUrls: s = [], alwaysProtectedUrls: u = [] } = i;
  return async (c) => {
    const [f, m] = c,
      g = new Request(f, m);
    if (dg(u, g.url) || (aT(g.method) && dg(s, g.url))) {
      const p = await l.getToken();
      c = I1(eT, p, c);
    }
    return Oi(c);
  };
}
function aT(l) {
  const i = l.toLowerCase();
  return i === "post" || i === "put" || i === "patch" || i === "delete";
}
function dg(l, i) {
  const s = new URL(i);
  return l.some((u) => s.pathname.includes(u));
}
function nT(l, i = {}) {
  const s = tT(l, i);
  async function u(c) {
    const f = await s(c);
    return fetch(f[0], f[1]);
  }
  return (c, f) => (f ? f.applyRetry(async () => u(c)) : u(c));
}
const lT = [400, 401, 403];
class iT extends P1 {
  constructor(i) {
    (super(i), (this.csrfTokenManager = i));
  }
  async shouldRetry(i, s) {
    return s.attempt >= 1 ? !1 : lT.includes(i.status);
  }
  async calculateDelay(i, s) {
    return 0;
  }
  async prepareRetry(i, s) {
    await this.csrfTokenManager.refreshToken();
  }
}
class rT {
  constructor(i, s) {
    ((this.endpoint = i),
      (this.cacheName = s),
      (this.tokenPromise = this.obtainToken()));
  }
  tokenPromise;
  async getToken() {
    return this.tokenPromise;
  }
  async refreshToken() {
    return (
      await this.withCache((i) => i.delete(this.endpoint)),
      (this.tokenPromise = this.obtainToken()),
      this.tokenPromise
    );
  }
  async obtainToken() {
    let i = await this.withCache((c) => c.match(this.endpoint)),
      s = !1;
    i || ((i = await fetch(this.endpoint, { method: "get" })), (s = !0));
    const u = (await i.clone().json()).csrfToken;
    return (s && (await this.withCache((c) => c.put(this.endpoint, i))), u);
  }
  async withCache(i) {
    if (this.cacheName && caches) {
      const s = await caches.open(this.cacheName);
      return i(s);
    } else return;
  }
}
const mg = new Map();
function oT(l) {
  const { endpoint: i, cacheName: s, ...u } = l.csrf;
  let c = mg.get(i);
  return (
    c || ((c = new rT(i, s)), mg.set(i, c)),
    J1({ retry: nT(c, u) }, W1(new iT(c)).service).service
  );
}
const uT = 1,
  sT = `@salesforce/sdk-data_v${uT}`,
  cT = "66.0",
  Jy = `/services/data/v${cT}`,
  fT = `${Jy}/ui-api`;
class dT {
  baseUrl;
  clientFetch;
  onStatus;
  constructor(i) {
    const s = mT();
    ((this.baseUrl = hT(i?.basePath ?? s.apiPath)),
      (this.onStatus = i?.onStatus ?? {}),
      (this.clientFetch = oT({
        csrf: {
          endpoint: `${this.baseUrl}${fT}/session/csrf`,
          cacheName: sT,
          protectedUrls: ["services/data/v", "services/apexrest"],
          alwaysProtectedUrls: ["services/apexrest"]
        }
      })));
  }
  async graphql(i, s) {
    return (
      await this.fetch(`${Jy}/graphql`, {
        method: "POST",
        body: JSON.stringify({ query: i, variables: s }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
    ).json();
  }
  async fetch(i, s) {
    const u = this.applySalesforceBase(i),
      c = await this.clientFetch(u, s);
    return (await this.onStatus[c.status]?.(), c);
  }
  applySalesforceBase(i) {
    if (typeof i == "string") {
      if (i.startsWith("http")) return i;
      const s = i.startsWith("/") ? i : `/${i}`;
      return `${this.baseUrl}${s}`;
    }
    return i;
  }
}
function mT() {
  return { apiPath: globalThis.SFDC_ENV?.apiPath };
}
function hT(l) {
  if (!l || l === "/") return "";
  let i = l;
  return (
    i.startsWith("/") || (i = `/${i}`),
    i.endsWith("/") && (i = i.slice(0, -1)),
    i
  );
}
async function pT(l) {
  switch (Z1()) {
    case zl.OpenAI:
      return new K1();
    case zl.UIBundle:
    case zl.MicroFrontend:
      return new dT(l?.uiBundle);
    case zl.SalesforceACC:
    case zl.MCPApps:
    case zl.Mosaic:
      return {};
    default:
      return {};
  }
}
async function Ri(l, i = "GET", s) {
  try {
    const u = await pT(),
      c = { method: i, headers: { "Content-Type": "application/json" } };
    s && i === "POST" && (c.body = JSON.stringify(s));
    const f = await u.fetch?.(l, c);
    if (!f?.ok)
      throw new Error(`Apex REST error: ${f?.status} ${f?.statusText}`);
    return await f.json();
  } catch (u) {
    return (
      console.error(`Error calling ${l}:`, u),
      {
        success: !1,
        message: u instanceof Error ? u.message : "Unknown error occurred",
        data: null
      }
    );
  }
}
const Mi = {
  async getActiveQuestionnaire() {
    return Ri("/services/apexrest/questionnaires?action=active");
  },
  async getQuestionnaireWithQuestions(l) {
    const i = `/services/apexrest/questionnaires?action=details&id=${encodeURIComponent(l)}`;
    return Ri(i);
  },
  async createResponse(l, i) {
    return Ri("/services/apexrest/responses", "POST", {
      questionnaireId: l,
      sessionId: i
    });
  },
  async createResponseAnswer(l, i, s) {
    return Ri("/services/apexrest/response-answers", "POST", {
      responseId: l,
      questionId: i,
      answerOptionId: s
    });
  },
  async createResult(l, i, s, u, c, f, m, g, p, h, b) {
    return Ri("/services/apexrest/results", "POST", {
      responseId: l,
      dominantFunction: i,
      auxiliaryFunction: s,
      tertiaryFunction: u,
      inferiorFunction: c,
      extrovertedScore: f,
      introvertedScore: m,
      thinkingScore: g,
      feelingScore: p,
      intuitionScore: h,
      sensingScore: b
    });
  },
  async getResultBySessionId(l) {
    const i = `/services/apexrest/results?action=get&sessionId=${encodeURIComponent(l)}`;
    return Ri(i);
  }
};
function gT(l) {
  const i = document.createElement("textarea");
  return ((i.innerHTML = l), i.value);
}
function yT() {
  const l = Eu(),
    [i, s] = x.useState(null),
    [u, c] = x.useState(!0),
    [f, m] = x.useState(null);
  x.useEffect(() => {
    async function p() {
      try {
        const h = await Mi.getActiveQuestionnaire();
        if (!h.success) {
          (console.error("Apex error:", h.message),
            m(
              h.message ||
                "Failed to load questionnaire. Please try again later."
            ),
            c(!1));
          return;
        }
        if (h.data) {
          const b =
              h.data.introductionText || "<p>Welcome to the assessment.</p>",
            v = gT(b);
          (s({
            id: h.data.id,
            name: h.data.name || "Jungian Personality Assessment",
            introductionText: v,
            questionsPerPage: h.data.questionsPerPage || 1
          }),
            sessionStorage.setItem("questionnaireId", h.data.id));
        } else
          m("No active questionnaire found. Please contact the administrator.");
      } catch (h) {
        (console.error("Error fetching questionnaire:", h),
          m("Failed to load questionnaire. Please try again later."));
      } finally {
        c(!1);
      }
    }
    p();
  }, []);
  const g = () => {
    const p = crypto.randomUUID();
    (sessionStorage.setItem("sessionId", p), l("/questionnaire"));
  };
  return u
    ? _.jsx("div", {
        className:
          "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4",
        children: _.jsxs("div", {
          className: "text-center",
          children: [
            _.jsx("div", {
              className:
                "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"
            }),
            _.jsx("p", {
              className: "mt-4 text-slate-600",
              children: "Loading assessment..."
            })
          ]
        })
      })
    : f
      ? _.jsx("div", {
          className:
            "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4",
          children: _.jsx(Cn, {
            className: "max-w-md",
            children: _.jsxs(Mn, {
              className: "pt-6 text-center",
              children: [
                _.jsx("p", { className: "text-red-600 mb-4", children: f }),
                _.jsx(Nn, {
                  onClick: () => window.location.reload(),
                  children: "Try Again"
                })
              ]
            })
          })
        })
      : i
        ? _.jsx("div", {
            className:
              "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
            children: _.jsxs("div", {
              className:
                "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",
              children: [
                _.jsxs("div", {
                  className: "text-center mb-8 sm:mb-12",
                  children: [
                    _.jsx("h1", {
                      className:
                        "text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight",
                      children: "Discover Your Cognitive Profile"
                    }),
                    _.jsx("p", {
                      className:
                        "text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto",
                      children:
                        "Understand how your mind processes information and makes decisions"
                    })
                  ]
                }),
                _.jsxs(Cn, {
                  className:
                    "shadow-lg border-slate-200/60 bg-white/80 backdrop-blur",
                  children: [
                    _.jsxs(Dr, {
                      className: "space-y-1 pb-6",
                      children: [
                        _.jsx(zr, {
                          className: "text-2xl sm:text-3xl text-slate-800",
                          children: i?.name
                        }),
                        _.jsx(af, {
                          className: "text-base text-slate-600",
                          children:
                            "A comprehensive assessment of your Jungian personality type"
                        })
                      ]
                    }),
                    _.jsxs(Mn, {
                      className: "space-y-6",
                      children: [
                        _.jsx("div", {
                          className:
                            "prose prose-slate max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-headings:text-slate-800 prose-li:text-slate-700 prose-strong:text-slate-900 prose-ul:my-4",
                          dangerouslySetInnerHTML: {
                            __html: V1.sanitize(i?.introductionText || "")
                          }
                        }),
                        _.jsxs("div", {
                          className:
                            "flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200",
                          children: [
                            _.jsx(Nn, {
                              onClick: g,
                              className:
                                "w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-medium shadow-md hover:shadow-lg transition-all",
                              children: "Begin Assessment"
                            }),
                            _.jsxs("div", {
                              className:
                                "flex-1 flex items-center text-sm text-slate-500",
                              children: [
                                _.jsx("svg", {
                                  className: "w-5 h-5 mr-2 flex-shrink-0",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: _.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  })
                                }),
                                "Approximately 10-15 minutes"
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                _.jsx("div", {
                  className: "mt-8 text-center text-sm text-slate-500",
                  children: _.jsx("p", {
                    children:
                      "Your responses are stored securely and anonymously"
                  })
                })
              ]
            })
          })
        : _.jsx("div", {
            className:
              "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4",
            children: _.jsx(Cn, {
              className: "max-w-md",
              children: _.jsx(Mn, {
                className: "pt-6 text-center",
                children: _.jsx("p", {
                  className: "text-slate-600 mb-4",
                  children: "No questionnaire available."
                })
              })
            })
          });
}
const vT = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  bT = (l) =>
    l.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, u) =>
      u ? u.toUpperCase() : s.toLowerCase()
    ),
  hg = (l) => {
    const i = bT(l);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  Iy = (...l) =>
    l
      .filter((i, s, u) => !!i && i.trim() !== "" && u.indexOf(i) === s)
      .join(" ")
      .trim(),
  ST = (l) => {
    for (const i in l)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
var xT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const ET = x.forwardRef(
  (
    {
      color: l = "currentColor",
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: u,
      className: c = "",
      children: f,
      iconNode: m,
      ...g
    },
    p
  ) =>
    x.createElement(
      "svg",
      {
        ref: p,
        ...xT,
        width: i,
        height: i,
        stroke: l,
        strokeWidth: u ? (Number(s) * 24) / Number(i) : s,
        className: Iy("lucide", c),
        ...(!f && !ST(g) && { "aria-hidden": "true" }),
        ...g
      },
      [
        ...m.map(([h, b]) => x.createElement(h, b)),
        ...(Array.isArray(f) ? f : [f])
      ]
    )
);
const TT = (l, i) => {
  const s = x.forwardRef(({ className: u, ...c }, f) =>
    x.createElement(ET, {
      ref: f,
      iconNode: i,
      className: Iy(`lucide-${vT(hg(l))}`, `lucide-${l}`, u),
      ...c
    })
  );
  return ((s.displayName = hg(l)), s);
};
const RT = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]],
  AT = TT("circle", RT),
  $y = x.forwardRef(({ className: l, ...i }, s) =>
    _.jsx(Cy, { className: ln("grid gap-2", l), ...i, ref: s })
  );
$y.displayName = Cy.displayName;
const Py = x.forwardRef(({ className: l, ...i }, s) =>
  _.jsx(My, {
    ref: s,
    className: ln(
      "aspect-square h-4 w-4 rounded-full border border-slate-300 text-indigo-600 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      l
    ),
    ...i,
    children: _.jsx(CE, {
      className: "flex items-center justify-center",
      children: _.jsx(AT, {
        className: "h-2.5 w-2.5 fill-current text-current"
      })
    })
  })
);
Py.displayName = My.displayName;
function wT({ className: l, ...i }) {
  return _.jsx(vE, {
    "data-slot": "label",
    className: ln(
      "gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
      l
    ),
    ...i
  });
}
function _T(l) {
  const i = {
    extroverted: 0,
    introverted: 0,
    thinking: 0,
    feeling: 0,
    intuition: 0,
    sensing: 0
  };
  l.forEach((g) => {
    const p = g.classification.toLowerCase().replace(/\s+/g, "");
    p in i && i[p]++;
  });
  const s = l.length,
    u = Object.entries(i).reduce(
      (g, [p, h]) => ((g[p] = Math.round((h / s) * 100)), g),
      {}
    ),
    c = i.extroverted > i.introverted ? "Extroverted" : "Introverted",
    m = [
      { name: "Intuition", score: i.intuition },
      { name: "Sensing", score: i.sensing },
      { name: "Thinking", score: i.thinking },
      { name: "Feeling", score: i.feeling }
    ]
      .sort((g, p) => p.score - g.score)
      .map((g) => `${g.name}`);
  return {
    dominantFunction: m[0],
    auxiliaryFunction: m[1],
    tertiaryFunction: m[2],
    inferiorFunction: m[3],
    scores: u,
    attitude: c
  };
}
function CT() {
  const l = Eu(),
    [i, s] = x.useState(!0),
    [u, c] = x.useState([]),
    [f, m] = x.useState(0),
    [g, p] = x.useState(1),
    [h, b] = x.useState({}),
    [v, N] = x.useState(""),
    [w] = x.useState(() => {
      const P = sessionStorage.getItem("sessionId");
      if (P) return P;
      const E = crypto.randomUUID();
      return (sessionStorage.setItem("sessionId", E), E);
    });
  x.useEffect(() => {
    (async () => {
      try {
        const E = sessionStorage.getItem("questionnaireId");
        if (!E) {
          l("/");
          return;
        }
        const ee = await Mi.createResponse(E, w);
        ee.success && ee.data && N(ee.data.id);
        const Ae = await Mi.getQuestionnaireWithQuestions(E);
        if ((console.log("result", Ae), !Ae.success || !Ae.data)) {
          (console.error("Error fetching questionnaire:", Ae.message), l("/"));
          return;
        }
        p(Ae.data.questionsPerPage || 1);
        const Re = Ae.data.questions.map((Ee) => ({
          id: Ee.id,
          order: Ee.orderNum,
          questionText: Ee.questionText,
          answers: Ee.answers.map((ze) => ({
            id: ze.id,
            answerText: ze.answerText,
            classification: ze.classification,
            order: ze.orderNum
          }))
        }));
        (c(Re), s(!1));
      } catch (E) {
        (console.error("Error fetching questionnaire:", E), s(!1));
      }
    })();
  }, [l, w]);
  const j = Math.ceil(u.length / g),
    k = u.slice(f * g, (f + 1) * g),
    O = Object.keys(h).length,
    $ = u.length > 0 ? (O / u.length) * 100 : 0,
    W = async (P, E) => {
      b((ee) => ({ ...ee, [P]: E }));
      try {
        if (!v) {
          console.error("No response ID available");
          return;
        }
        await Mi.createResponseAnswer(v, P, E);
      } catch (ee) {
        console.error("Error saving answer:", ee);
      }
    },
    F = () => {
      f < j - 1 &&
        (m((P) => P + 1), window.scrollTo({ top: 0, behavior: "smooth" }));
    },
    ie = () => {
      f > 0 &&
        (m((P) => P - 1), window.scrollTo({ top: 0, behavior: "smooth" }));
    },
    he = async () => {
      try {
        const P = [];
        u.forEach((ee) => {
          const Ae = h[ee.id];
          if (Ae) {
            const Re = ee.answers.find((Ee) => Ee.id === Ae);
            Re && P.push({ classification: Re.classification });
          }
        });
        const E = _T(P);
        (await Mi.createResult(
          v,
          E.dominantFunction,
          E.auxiliaryFunction,
          E.tertiaryFunction,
          E.inferiorFunction,
          E.scores.extroverted,
          E.scores.introverted,
          E.scores.thinking,
          E.scores.feeling,
          E.scores.intuition,
          E.scores.sensing
        ),
          l("/results", { state: { sessionId: w } }));
      } catch (P) {
        console.error("Error submitting results:", P);
      }
    },
    Se = O === u.length;
  return i
    ? _.jsx("div", {
        className:
          "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4",
        children: _.jsxs("div", {
          className: "text-center",
          children: [
            _.jsx("div", {
              className:
                "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"
            }),
            _.jsx("p", {
              className: "mt-4 text-slate-600",
              children: "Loading questionnaire..."
            })
          ]
        })
      })
    : _.jsx("div", {
        className:
          "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
        children: _.jsxs("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
          children: [
            _.jsxs("div", {
              className: "mb-8",
              children: [
                _.jsxs("div", {
                  className: "flex justify-between items-center mb-2",
                  children: [
                    _.jsxs("span", {
                      className: "text-sm font-medium text-slate-700",
                      children: [
                        "Progress: ",
                        O,
                        " of ",
                        u.length,
                        " questions"
                      ]
                    }),
                    _.jsxs("span", {
                      className: "text-sm font-medium text-slate-700",
                      children: [Math.round($), "%"]
                    })
                  ]
                }),
                _.jsx("div", {
                  className:
                    "w-full h-2 bg-slate-200 rounded-full overflow-hidden",
                  children: _.jsx("div", {
                    className:
                      "h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ease-out",
                    style: { width: `${$}%` }
                  })
                })
              ]
            }),
            _.jsx("div", {
              className: "space-y-6",
              children: k.map((P, E) =>
                _.jsx(
                  Cn,
                  {
                    className:
                      "shadow-lg border-slate-200/60 bg-white/80 backdrop-blur",
                    children: _.jsxs(Mn, {
                      className: "pt-6",
                      children: [
                        _.jsx("div", {
                          className: "mb-6",
                          children: _.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [
                              _.jsx("span", {
                                className:
                                  "flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center justify-center text-sm",
                                children: f * g + E + 1
                              }),
                              _.jsx("h3", {
                                className:
                                  "text-lg sm:text-xl font-medium text-slate-900 leading-tight",
                                children: P.questionText
                              })
                            ]
                          })
                        }),
                        _.jsx($y, {
                          value: h[P.id] || "",
                          onValueChange: (ee) => W(P.id, ee),
                          className: "space-y-3",
                          children: P.answers
                            .sort((ee, Ae) => ee.order - Ae.order)
                            .map((ee) =>
                              _.jsxs(
                                "div",
                                {
                                  onClick: () => W(P.id, ee.id),
                                  className: `flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-slate-50 ${h[P.id] === ee.id ? "border-indigo-500 bg-indigo-50" : "border-slate-200"}`,
                                  children: [
                                    _.jsx(Py, {
                                      value: ee.id,
                                      id: ee.id,
                                      className: "mt-0.5 flex-shrink-0",
                                      onClick: (Ae) => Ae.stopPropagation()
                                    }),
                                    _.jsx(wT, {
                                      htmlFor: ee.id,
                                      className:
                                        "text-base text-slate-700 cursor-pointer flex-1 leading-relaxed",
                                      onClick: (Ae) => Ae.preventDefault(),
                                      children: ee.answerText
                                    })
                                  ]
                                },
                                ee.id
                              )
                            )
                        })
                      ]
                    })
                  },
                  P.id
                )
              )
            }),
            _.jsxs("div", {
              className:
                "mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center",
              children: [
                _.jsxs(Nn, {
                  onClick: ie,
                  disabled: f === 0,
                  variant: "outline",
                  className: "w-full sm:w-auto order-2 sm:order-1",
                  children: [
                    _.jsx("svg", {
                      className: "w-4 h-4 mr-2",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: _.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 19l-7-7 7-7"
                      })
                    }),
                    "Previous"
                  ]
                }),
                _.jsxs("div", {
                  className: "text-sm text-slate-600 order-1 sm:order-2",
                  children: ["Page ", f + 1, " of ", j]
                }),
                f < j - 1
                  ? _.jsxs(Nn, {
                      onClick: F,
                      className:
                        "w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 order-3",
                      children: [
                        "Next",
                        _.jsx("svg", {
                          className: "w-4 h-4 ml-2",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: _.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5l7 7-7 7"
                          })
                        })
                      ]
                    })
                  : _.jsxs(Nn, {
                      onClick: he,
                      disabled: !Se,
                      className:
                        "w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 order-3",
                      children: [
                        "View Results",
                        _.jsx("svg", {
                          className: "w-4 h-4 ml-2",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: _.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        })
                      ]
                    })
              ]
            })
          ]
        })
      });
}
const MT = ay(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline:
          "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
function NT({ className: l, variant: i = "default", asChild: s = !1, ...u }) {
  const c = s ? iy : "span";
  return _.jsx(c, {
    "data-slot": "badge",
    "data-variant": i,
    className: ln(MT({ variant: i }), l),
    ...u
  });
}
function OT() {
  const l = Eu(),
    i = Za(),
    [s, u] = x.useState(!0),
    [c, f] = x.useState(null),
    [m, g] = x.useState(""),
    p = (w) => {
      const j = `I've completed a Jungian personality assessment with the following results:

**Cognitive Function Stack:**
1. Dominant: ${w.dominantFunction}
2. Auxiliary: ${w.auxiliaryFunction}
3. Tertiary: ${w.tertiaryFunction}
4. Inferior: ${w.inferiorFunction}

**Attitude:** ${w.attitude} (${w.scores.extroverted}% Extroverted, ${w.scores.introverted}% Introverted)

**Function Scores:**
- Intuition: ${w.scores.intuition}%
- Sensing: ${w.scores.sensing}%
- Thinking: ${w.scores.thinking}%
- Feeling: ${w.scores.feeling}%

Based on these results, please provide a personalized analysis that explains:

1. How my mind naturally prioritizes information and decisions
2. How I perceive and interact with the world around me
3. My natural working style and preferences
4. Potential friction points or blind spots I should be aware of
5. Strategies for personal growth and development

Please be specific and actionable in your analysis, relating it directly to my cognitive function stack.`;
      g(j);
    },
    h = x.useCallback((w) => {
      p(w);
    }, []);
  x.useEffect(() => {
    const w = i.state?.sessionId || sessionStorage.getItem("sessionId");
    if (!w) {
      l("/");
      return;
    }
    (async () => {
      try {
        const k = await Mi.getResultBySessionId(w);
        if (!k.success || !k.data) {
          (console.error("Error fetching results:", k.message), u(!1));
          return;
        }
        const O = k.data,
          $ = {
            dominantFunction: O.dominantFunction,
            auxiliaryFunction: O.auxiliaryFunction,
            tertiaryFunction: O.tertiaryFunction,
            inferiorFunction: O.inferiorFunction,
            scores: {
              extroverted: O.extrovertedScore,
              introverted: O.introvertedScore,
              thinking: O.thinkingScore,
              feeling: O.feelingScore,
              intuition: O.intuitionScore,
              sensing: O.sensingScore
            },
            attitude:
              O.extrovertedScore > O.introvertedScore
                ? "Extroverted"
                : "Introverted"
          };
        (f($), h($), u(!1));
      } catch (k) {
        (console.error("Error fetching results:", k), u(!1));
      }
    })();
  }, [i, l, h]);
  const b = () => {
      if (!c) return;
      const w = {
          timestamp: new Date().toISOString(),
          results: c,
          aiPrompt: m
        },
        j = new Blob([JSON.stringify(w, null, 2)], {
          type: "application/json"
        }),
        k = URL.createObjectURL(j),
        O = document.createElement("a");
      ((O.href = k),
        (O.download = `jungian-assessment-${new Date().toISOString().split("T")[0]}.json`),
        document.body.appendChild(O),
        O.click(),
        document.body.removeChild(O),
        URL.revokeObjectURL(k));
    },
    v = () => {
      navigator.clipboard.writeText(m);
    },
    N = () => {
      (sessionStorage.removeItem("sessionId"),
        sessionStorage.removeItem("questionnaireId"),
        l("/"));
    };
  return s
    ? _.jsx("div", {
        className:
          "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4",
        children: _.jsxs("div", {
          className: "text-center",
          children: [
            _.jsx("div", {
              className:
                "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"
            }),
            _.jsx("p", {
              className: "mt-4 text-slate-600",
              children: "Calculating your results..."
            })
          ]
        })
      })
    : c
      ? _.jsx("div", {
          className:
            "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
          children: _.jsxs("div", {
            className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
            children: [
              _.jsxs("div", {
                className: "text-center mb-8 sm:mb-12",
                children: [
                  _.jsx("div", {
                    className:
                      "inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-4",
                    children: _.jsx("svg", {
                      className: "w-8 h-8",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: _.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    })
                  }),
                  _.jsx("h1", {
                    className:
                      "text-3xl sm:text-4xl font-bold text-slate-900 mb-2",
                    children: "Your Cognitive Profile"
                  }),
                  _.jsx("p", {
                    className: "text-lg text-slate-600",
                    children: "Assessment Complete"
                  })
                ]
              }),
              _.jsxs(Cn, {
                className:
                  "mb-6 shadow-lg border-slate-200/60 bg-white/80 backdrop-blur",
                children: [
                  _.jsxs(Dr, {
                    children: [
                      _.jsx(zr, {
                        className: "text-2xl text-slate-800",
                        children: "Cognitive Function Stack"
                      }),
                      _.jsx(af, {
                        children:
                          "Your natural hierarchy of information processing and decision-making"
                      })
                    ]
                  }),
                  _.jsx(Mn, {
                    className: "space-y-4",
                    children: [
                      {
                        label: "Dominant (Primary)",
                        value: c.dominantFunction,
                        color: "from-indigo-500 to-purple-600"
                      },
                      {
                        label: "Auxiliary (Supporting)",
                        value: c.auxiliaryFunction,
                        color: "from-blue-500 to-indigo-500"
                      },
                      {
                        label: "Tertiary (Developing)",
                        value: c.tertiaryFunction,
                        color: "from-slate-400 to-blue-400"
                      },
                      {
                        label: "Inferior (Aspirational)",
                        value: c.inferiorFunction,
                        color: "from-slate-300 to-slate-400"
                      }
                    ].map((w, j) =>
                      _.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-4",
                          children: [
                            _.jsx("div", {
                              className: `flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${w.color} text-white font-bold text-lg flex items-center justify-center shadow-md`,
                              children: j + 1
                            }),
                            _.jsxs("div", {
                              className: "flex-1",
                              children: [
                                _.jsx("div", {
                                  className:
                                    "text-sm font-medium text-slate-600",
                                  children: w.label
                                }),
                                _.jsx("div", {
                                  className:
                                    "text-lg font-semibold text-slate-900",
                                  children: w.value
                                })
                              ]
                            })
                          ]
                        },
                        j
                      )
                    )
                  })
                ]
              }),
              _.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",
                children: [
                  _.jsxs(Cn, {
                    className:
                      "shadow-lg border-slate-200/60 bg-white/80 backdrop-blur",
                    children: [
                      _.jsx(Dr, {
                        children: _.jsx(zr, {
                          className: "text-xl text-slate-800",
                          children: "Primary Attitude"
                        })
                      }),
                      _.jsxs(Mn, {
                        children: [
                          _.jsx("div", {
                            className: "mb-4",
                            children: _.jsx(NT, {
                              className:
                                "text-base px-4 py-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-100",
                              children: c.attitude
                            })
                          }),
                          _.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              _.jsxs("div", {
                                children: [
                                  _.jsxs("div", {
                                    className:
                                      "flex justify-between text-sm mb-1",
                                    children: [
                                      _.jsx("span", {
                                        className: "text-slate-600",
                                        children: "Extroverted"
                                      }),
                                      _.jsxs("span", {
                                        className: "font-medium text-slate-900",
                                        children: [c.scores.extroverted, "%"]
                                      })
                                    ]
                                  }),
                                  _.jsx("div", {
                                    className:
                                      "h-2 bg-slate-200 rounded-full overflow-hidden",
                                    children: _.jsx("div", {
                                      className:
                                        "h-full bg-gradient-to-r from-orange-400 to-red-500",
                                      style: {
                                        width: `${c.scores.extroverted}%`
                                      }
                                    })
                                  })
                                ]
                              }),
                              _.jsxs("div", {
                                children: [
                                  _.jsxs("div", {
                                    className:
                                      "flex justify-between text-sm mb-1",
                                    children: [
                                      _.jsx("span", {
                                        className: "text-slate-600",
                                        children: "Introverted"
                                      }),
                                      _.jsxs("span", {
                                        className: "font-medium text-slate-900",
                                        children: [c.scores.introverted, "%"]
                                      })
                                    ]
                                  }),
                                  _.jsx("div", {
                                    className:
                                      "h-2 bg-slate-200 rounded-full overflow-hidden",
                                    children: _.jsx("div", {
                                      className:
                                        "h-full bg-gradient-to-r from-blue-400 to-indigo-500",
                                      style: {
                                        width: `${c.scores.introverted}%`
                                      }
                                    })
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  _.jsxs(Cn, {
                    className:
                      "shadow-lg border-slate-200/60 bg-white/80 backdrop-blur",
                    children: [
                      _.jsx(Dr, {
                        children: _.jsx(zr, {
                          className: "text-xl text-slate-800",
                          children: "Function Preferences"
                        })
                      }),
                      _.jsx(Mn, {
                        className: "space-y-3",
                        children: [
                          {
                            label: "Intuition",
                            value: c.scores.intuition,
                            color: "from-purple-400 to-purple-600"
                          },
                          {
                            label: "Sensing",
                            value: c.scores.sensing,
                            color: "from-green-400 to-green-600"
                          },
                          {
                            label: "Thinking",
                            value: c.scores.thinking,
                            color: "from-blue-400 to-blue-600"
                          },
                          {
                            label: "Feeling",
                            value: c.scores.feeling,
                            color: "from-pink-400 to-pink-600"
                          }
                        ].map((w) =>
                          _.jsxs(
                            "div",
                            {
                              children: [
                                _.jsxs("div", {
                                  className:
                                    "flex justify-between text-sm mb-1",
                                  children: [
                                    _.jsx("span", {
                                      className: "text-slate-600",
                                      children: w.label
                                    }),
                                    _.jsxs("span", {
                                      className: "font-medium text-slate-900",
                                      children: [w.value, "%"]
                                    })
                                  ]
                                }),
                                _.jsx("div", {
                                  className:
                                    "h-2 bg-slate-200 rounded-full overflow-hidden",
                                  children: _.jsx("div", {
                                    className: `h-full bg-gradient-to-r ${w.color}`,
                                    style: { width: `${w.value}%` }
                                  })
                                })
                              ]
                            },
                            w.label
                          )
                        )
                      })
                    ]
                  })
                ]
              }),
              _.jsxs(Cn, {
                className:
                  "mb-6 shadow-lg border-slate-200/60 bg-white/80 backdrop-blur",
                children: [
                  _.jsxs(Dr, {
                    children: [
                      _.jsx(zr, {
                        className: "text-xl text-slate-800",
                        children: "AI Analysis Prompt"
                      }),
                      _.jsx(af, {
                        children:
                          "Copy this prompt and submit it to an AI assistant for a personalized analysis"
                      })
                    ]
                  }),
                  _.jsxs(Mn, {
                    children: [
                      _.jsx("div", {
                        className:
                          "bg-slate-50 rounded-lg p-4 mb-4 font-mono text-sm text-slate-700 whitespace-pre-wrap max-h-80 overflow-y-auto border border-slate-200",
                        children: m
                      }),
                      _.jsxs(Nn, {
                        onClick: v,
                        variant: "outline",
                        className: "w-full sm:w-auto",
                        children: [
                          _.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: _.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            })
                          }),
                          "Copy to Clipboard"
                        ]
                      })
                    ]
                  })
                ]
              }),
              _.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [
                  _.jsxs(Nn, {
                    onClick: b,
                    variant: "outline",
                    className: "w-full sm:w-auto",
                    children: [
                      _.jsx("svg", {
                        className: "w-4 h-4 mr-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: _.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        })
                      }),
                      "Download Results"
                    ]
                  }),
                  _.jsxs(Nn, {
                    onClick: N,
                    className:
                      "w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700",
                    children: [
                      _.jsx("svg", {
                        className: "w-4 h-4 mr-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: _.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        })
                      }),
                      "Start New Assessment"
                    ]
                  })
                ]
              })
            ]
          })
        })
      : _.jsx("div", {
          className:
            "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4",
          children: _.jsx(Cn, {
            className: "max-w-md",
            children: _.jsxs(Mn, {
              className: "pt-6 text-center",
              children: [
                _.jsx("p", {
                  className: "text-slate-600 mb-4",
                  children:
                    "No results found. Please complete the assessment first."
                }),
                _.jsx(Nn, {
                  onClick: () => l("/"),
                  children: "Start Assessment"
                })
              ]
            })
          })
        });
}
function DT() {
  return _.jsx("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
    children: _.jsxs("div", {
      className: "text-center",
      children: [
        _.jsx("h1", {
          className: "text-4xl font-bold text-gray-900 mb-4",
          children: "404"
        }),
        _.jsx("p", {
          className: "text-lg text-gray-600 mb-8",
          children: "Page not found"
        }),
        _.jsx(kr, {
          to: "/",
          className:
            "inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
          children: "Go to Home"
        })
      ]
    })
  });
}
const Wy = [
  {
    path: "/",
    element: _.jsx(jx, {}),
    children: [
      {
        index: !0,
        element: _.jsx(yT, {}),
        handle: { showInNavigation: !1, label: "Home" }
      },
      {
        path: "questionnaire",
        element: _.jsx(CT, {}),
        handle: { showInNavigation: !1, label: "Questionnaire" }
      },
      {
        path: "results",
        element: _.jsx(OT, {}),
        handle: { showInNavigation: !1, label: "Results" }
      },
      { path: "*", element: _.jsx(DT, {}) }
    ]
  }
];
var Kc = { exports: {} },
  Mr = {},
  Jc = { exports: {} },
  Ic = {};
var pg;
function zT() {
  return (
    pg ||
      ((pg = 1),
      (function (l) {
        function i(z, J) {
          var ce = z.length;
          z.push(J);
          e: for (; 0 < ce; ) {
            var pe = (ce - 1) >>> 1,
              te = z[pe];
            if (0 < c(te, J)) ((z[pe] = J), (z[ce] = te), (ce = pe));
            else break e;
          }
        }
        function s(z) {
          return z.length === 0 ? null : z[0];
        }
        function u(z) {
          if (z.length === 0) return null;
          var J = z[0],
            ce = z.pop();
          if (ce !== J) {
            z[0] = ce;
            e: for (var pe = 0, te = z.length, R = te >>> 1; pe < R; ) {
              var Y = 2 * (pe + 1) - 1,
                Z = z[Y],
                re = Y + 1,
                ne = z[re];
              if (0 > c(Z, ce))
                re < te && 0 > c(ne, Z)
                  ? ((z[pe] = ne), (z[re] = ce), (pe = re))
                  : ((z[pe] = Z), (z[Y] = ce), (pe = Y));
              else if (re < te && 0 > c(ne, ce))
                ((z[pe] = ne), (z[re] = ce), (pe = re));
              else break e;
            }
          }
          return J;
        }
        function c(z, J) {
          var ce = z.sortIndex - J.sortIndex;
          return ce !== 0 ? ce : z.id - J.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          l.unstable_now = function () {
            return f.now();
          };
        } else {
          var m = Date,
            g = m.now();
          l.unstable_now = function () {
            return m.now() - g;
          };
        }
        var p = [],
          h = [],
          b = 1,
          v = null,
          N = 3,
          w = !1,
          j = !1,
          k = !1,
          O = !1,
          $ = typeof setTimeout == "function" ? setTimeout : null,
          W = typeof clearTimeout == "function" ? clearTimeout : null,
          F = typeof setImmediate < "u" ? setImmediate : null;
        function ie(z) {
          for (var J = s(h); J !== null; ) {
            if (J.callback === null) u(h);
            else if (J.startTime <= z)
              (u(h), (J.sortIndex = J.expirationTime), i(p, J));
            else break;
            J = s(h);
          }
        }
        function he(z) {
          if (((k = !1), ie(z), !j))
            if (s(p) !== null) ((j = !0), Se || ((Se = !0), Ee()));
            else {
              var J = s(h);
              J !== null && fe(he, J.startTime - z);
            }
        }
        var Se = !1,
          P = -1,
          E = 5,
          ee = -1;
        function Ae() {
          return O ? !0 : !(l.unstable_now() - ee < E);
        }
        function Re() {
          if (((O = !1), Se)) {
            var z = l.unstable_now();
            ee = z;
            var J = !0;
            try {
              e: {
                ((j = !1), k && ((k = !1), W(P), (P = -1)), (w = !0));
                var ce = N;
                try {
                  t: {
                    for (
                      ie(z), v = s(p);
                      v !== null && !(v.expirationTime > z && Ae());
                    ) {
                      var pe = v.callback;
                      if (typeof pe == "function") {
                        ((v.callback = null), (N = v.priorityLevel));
                        var te = pe(v.expirationTime <= z);
                        if (((z = l.unstable_now()), typeof te == "function")) {
                          ((v.callback = te), ie(z), (J = !0));
                          break t;
                        }
                        (v === s(p) && u(p), ie(z));
                      } else u(p);
                      v = s(p);
                    }
                    if (v !== null) J = !0;
                    else {
                      var R = s(h);
                      (R !== null && fe(he, R.startTime - z), (J = !1));
                    }
                  }
                  break e;
                } finally {
                  ((v = null), (N = ce), (w = !1));
                }
                J = void 0;
              }
            } finally {
              J ? Ee() : (Se = !1);
            }
          }
        }
        var Ee;
        if (typeof F == "function")
          Ee = function () {
            F(Re);
          };
        else if (typeof MessageChannel < "u") {
          var ze = new MessageChannel(),
            Xe = ze.port2;
          ((ze.port1.onmessage = Re),
            (Ee = function () {
              Xe.postMessage(null);
            }));
        } else
          Ee = function () {
            $(Re, 0);
          };
        function fe(z, J) {
          P = $(function () {
            z(l.unstable_now());
          }, J);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (l.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (l.unstable_next = function (z) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = N;
            }
            var ce = N;
            N = J;
            try {
              return z();
            } finally {
              N = ce;
            }
          }),
          (l.unstable_requestPaint = function () {
            O = !0;
          }),
          (l.unstable_runWithPriority = function (z, J) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var ce = N;
            N = z;
            try {
              return J();
            } finally {
              N = ce;
            }
          }),
          (l.unstable_scheduleCallback = function (z, J, ce) {
            var pe = l.unstable_now();
            switch (
              (typeof ce == "object" && ce !== null
                ? ((ce = ce.delay),
                  (ce = typeof ce == "number" && 0 < ce ? pe + ce : pe))
                : (ce = pe),
              z)
            ) {
              case 1:
                var te = -1;
                break;
              case 2:
                te = 250;
                break;
              case 5:
                te = 1073741823;
                break;
              case 4:
                te = 1e4;
                break;
              default:
                te = 5e3;
            }
            return (
              (te = ce + te),
              (z = {
                id: b++,
                callback: J,
                priorityLevel: z,
                startTime: ce,
                expirationTime: te,
                sortIndex: -1
              }),
              ce > pe
                ? ((z.sortIndex = ce),
                  i(h, z),
                  s(p) === null &&
                    z === s(h) &&
                    (k ? (W(P), (P = -1)) : (k = !0), fe(he, ce - pe)))
                : ((z.sortIndex = te),
                  i(p, z),
                  j || w || ((j = !0), Se || ((Se = !0), Ee()))),
              z
            );
          }),
          (l.unstable_shouldYield = Ae),
          (l.unstable_wrapCallback = function (z) {
            var J = N;
            return function () {
              var ce = N;
              N = J;
              try {
                return z.apply(this, arguments);
              } finally {
                N = ce;
              }
            };
          }));
      })(Ic)),
    Ic
  );
}
var gg;
function LT() {
  return (gg || ((gg = 1), (Jc.exports = zT())), Jc.exports);
}
var yg;
function UT() {
  if (yg) return Mr;
  yg = 1;
  var l = LT(),
    i = of(),
    s = ny();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (f(e) !== e) throw Error(u(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var a = e, n = t; ; ) {
      var r = a.return;
      if (r === null) break;
      var o = r.alternate;
      if (o === null) {
        if (((n = r.return), n !== null)) {
          a = n;
          continue;
        }
        break;
      }
      if (r.child === o.child) {
        for (o = r.child; o; ) {
          if (o === a) return (p(r), e);
          if (o === n) return (p(r), t);
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (a.return !== n.return) ((a = r), (n = o));
      else {
        for (var d = !1, y = r.child; y; ) {
          if (y === a) {
            ((d = !0), (a = r), (n = o));
            break;
          }
          if (y === n) {
            ((d = !0), (n = r), (a = o));
            break;
          }
          y = y.sibling;
        }
        if (!d) {
          for (y = o.child; y; ) {
            if (y === a) {
              ((d = !0), (a = o), (n = r));
              break;
            }
            if (y === n) {
              ((d = !0), (n = o), (a = r));
              break;
            }
            y = y.sibling;
          }
          if (!d) throw Error(u(189));
        }
      }
      if (a.alternate !== n) throw Error(u(190));
    }
    if (a.tag !== 3) throw Error(u(188));
    return a.stateNode.current === a ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = b(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    N = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    j = Symbol.for("react.portal"),
    k = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    $ = Symbol.for("react.profiler"),
    W = Symbol.for("react.consumer"),
    F = Symbol.for("react.context"),
    ie = Symbol.for("react.forward_ref"),
    he = Symbol.for("react.suspense"),
    Se = Symbol.for("react.suspense_list"),
    P = Symbol.for("react.memo"),
    E = Symbol.for("react.lazy"),
    ee = Symbol.for("react.activity"),
    Ae = Symbol.for("react.memo_cache_sentinel"),
    Re = Symbol.iterator;
  function Ee(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Re && e[Re]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ze = Symbol.for("react.client.reference");
  function Xe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ze ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case k:
        return "Fragment";
      case $:
        return "Profiler";
      case O:
        return "StrictMode";
      case he:
        return "Suspense";
      case Se:
        return "SuspenseList";
      case ee:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case j:
          return "Portal";
        case F:
          return e.displayName || "Context";
        case W:
          return (e._context.displayName || "Context") + ".Consumer";
        case ie:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case P:
          return (
            (t = e.displayName || null),
            t !== null ? t : Xe(e.type) || "Memo"
          );
        case E:
          ((t = e._payload), (e = e._init));
          try {
            return Xe(e(t));
          } catch {}
      }
    return null;
  }
  var fe = Array.isArray,
    z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ce = { pending: !1, data: null, method: null, action: null },
    pe = [],
    te = -1;
  function R(e) {
    return { current: e };
  }
  function Y(e) {
    0 > te || ((e.current = pe[te]), (pe[te] = null), te--);
  }
  function Z(e, t) {
    (te++, (pe[te] = e.current), (e.current = t));
  }
  var re = R(null),
    ne = R(null),
    de = R(null),
    Ne = R(null);
  function Je(e, t) {
    switch ((Z(de, t), Z(ne, e), Z(re, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Dh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Dh(t)), (e = zh(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (Y(re), Z(re, e));
  }
  function Me() {
    (Y(re), Y(ne), Y(de));
  }
  function Wt(e) {
    e.memoizedState !== null && Z(Ne, e);
    var t = re.current,
      a = zh(t, e.type);
    t !== a && (Z(ne, e), Z(re, a));
  }
  function ea(e) {
    (ne.current === e && (Y(re), Y(ne)),
      Ne.current === e && (Y(Ne), (gr._currentValue = ce)));
  }
  var fa, Pe;
  function ft(e) {
    if (fa === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((fa = (t && t[1]) || ""),
          (Pe =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      fa +
      e +
      Pe
    );
  }
  var ta = !1;
  function rn(e, t) {
    if (!e || ta) return "";
    ta = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Q.prototype, "props", {
                  set: function () {
                    throw Error();
                  }
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Q, []);
                } catch (G) {
                  var B = G;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (G) {
                  B = G;
                }
                e.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                B = G;
              }
              (Q = e()) &&
                typeof Q.catch == "function" &&
                Q.catch(function () {});
            }
          } catch (G) {
            if (G && B && typeof G.stack == "string") return [G.stack, B.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      r &&
        r.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
      var o = n.DetermineComponentFrameRoot(),
        d = o[0],
        y = o[1];
      if (d && y) {
        var A = d.split(`
`),
          H = y.split(`
`);
        for (
          r = n = 0;
          n < A.length && !A[n].includes("DetermineComponentFrameRoot");
        )
          n++;
        for (; r < H.length && !H[r].includes("DetermineComponentFrameRoot"); )
          r++;
        if (n === A.length || r === H.length)
          for (
            n = A.length - 1, r = H.length - 1;
            1 <= n && 0 <= r && A[n] !== H[r];
          )
            r--;
        for (; 1 <= n && 0 <= r; n--, r--)
          if (A[n] !== H[r]) {
            if (n !== 1 || r !== 1)
              do
                if ((n--, r--, 0 > r || A[n] !== H[r])) {
                  var V =
                    `
` + A[n].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", e.displayName)),
                    V
                  );
                }
              while (1 <= n && 0 <= r);
            break;
          }
      }
    } finally {
      ((ta = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? ft(a) : "";
  }
  function da(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ft(e.type);
      case 16:
        return ft("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? ft("Suspense Fallback")
          : ft("Suspense");
      case 19:
        return ft("SuspenseList");
      case 0:
      case 15:
        return rn(e.type, !1);
      case 11:
        return rn(e.type.render, !1);
      case 1:
        return rn(e.type, !0);
      case 31:
        return ft("Activity");
      default:
        return "";
    }
  }
  function ka(e) {
    try {
      var t = "",
        a = null;
      do ((t += da(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var Fa = Object.prototype.hasOwnProperty,
    Ga = l.unstable_scheduleCallback,
    Dn = l.unstable_cancelCallback,
    kl = l.unstable_shouldYield,
    Gl = l.unstable_requestPaint,
    zt = l.unstable_now,
    Ft = l.unstable_getCurrentPriorityLevel,
    Kt = l.unstable_ImmediatePriority,
    Vt = l.unstable_UserBlockingPriority,
    Ta = l.unstable_NormalPriority,
    aa = l.unstable_LowPriority,
    Jt = l.unstable_IdlePriority,
    zn = l.log,
    Yl = l.unstable_setDisableYieldValue,
    na = null,
    At = null;
  function tt(e) {
    if (
      (typeof zn == "function" && Yl(e),
      At && typeof At.setStrictMode == "function")
    )
      try {
        At.setStrictMode(na, e);
      } catch {}
  }
  var gt = Math.clz32 ? Math.clz32 : Di,
    Ln = Math.log,
    Un = Math.LN2;
  function Di(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ln(e) / Un) | 0)) | 0);
  }
  var Ya = 256,
    ma = 262144,
    on = 4194304;
  function Ht(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function jn(e, t, a) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var y = n & 134217727;
    return (
      y !== 0
        ? ((n = y & ~o),
          n !== 0
            ? (r = Ht(n))
            : ((d &= y),
              d !== 0
                ? (r = Ht(d))
                : a || ((a = y & ~e), a !== 0 && (r = Ht(a)))))
        : ((y = n & ~o),
          y !== 0
            ? (r = Ht(y))
            : d !== 0
              ? (r = Ht(d))
              : a || ((a = n & ~e), a !== 0 && (r = Ht(a)))),
      r === 0
        ? 0
        : t !== 0 &&
            t !== r &&
            (t & o) === 0 &&
            ((o = r & -r),
            (a = t & -t),
            o >= a || (o === 32 && (a & 4194048) !== 0))
          ? t
          : r
    );
  }
  function Ka(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function yt(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ra() {
    var e = on;
    return ((on <<= 1), (on & 62914560) === 0 && (on = 4194304), e);
  }
  function Ja(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function ha(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Hn(e, t, a, n, r, o) {
    var d = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var y = e.entanglements,
      A = e.expirationTimes,
      H = e.hiddenUpdates;
    for (a = d & ~a; 0 < a; ) {
      var V = 31 - gt(a),
        Q = 1 << V;
      ((y[V] = 0), (A[V] = -1));
      var B = H[V];
      if (B !== null)
        for (H[V] = null, V = 0; V < B.length; V++) {
          var G = B[V];
          G !== null && (G.lane &= -536870913);
        }
      a &= ~Q;
    }
    (n !== 0 && hl(e, n, 0),
      o !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(d & ~t)));
  }
  function hl(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var n = 31 - gt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (a & 261930)));
  }
  function pl(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var n = 31 - gt(a),
        r = 1 << n;
      ((r & t) | (e[n] & t) && (e[n] |= t), (a &= ~r));
    }
  }
  function T(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : M(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function M(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function L(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function K() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : ap(e.type));
  }
  function ae(e, t) {
    var a = J.p;
    try {
      return ((J.p = e), t());
    } finally {
      J.p = a;
    }
  }
  var me = Math.random().toString(36).slice(2),
    oe = "__reactFiber$" + me,
    le = "__reactProps$" + me,
    ge = "__reactContainer$" + me,
    se = "__reactEvents$" + me,
    we = "__reactListeners$" + me,
    xe = "__reactHandles$" + me,
    Fe = "__reactResources$" + me,
    je = "__reactMarker$" + me;
  function ue(e) {
    (delete e[oe], delete e[le], delete e[se], delete e[we], delete e[xe]);
  }
  function S(e) {
    var t = e[oe];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[ge] || a[oe])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = Gh(e); e !== null; ) {
            if ((a = e[oe])) return a;
            e = Gh(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function q(e) {
    if ((e = e[oe] || e[ge])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function I(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Oe(e) {
    var t = e[Fe];
    return (
      t ||
        (t = e[Fe] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Le(e) {
    e[je] = !0;
  }
  var at = new Set(),
    ct = {};
  function We(e, t) {
    (vt(e, t), vt(e + "Capture", t));
  }
  function vt(e, t) {
    for (ct[e] = t, e = 0; e < t.length; e++) at.add(t[e]);
  }
  var qa = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    nt = {},
    Ia = {};
  function un(e) {
    return Fa.call(Ia, e)
      ? !0
      : Fa.call(nt, e)
        ? !1
        : qa.test(e)
          ? (Ia[e] = !0)
          : ((nt[e] = !0), !1);
  }
  function Ge(e, t, a) {
    if (un(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Et(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Xt(e, t, a, n) {
    if (n === null) e.removeAttribute(a);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + n);
    }
  }
  function wt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function dt(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ql(e, t, a) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var r = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (d) {
            ((a = "" + d), o.call(this, d));
          }
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (d) {
            a = "" + d;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          }
        }
      );
    }
  }
  function Vl(e) {
    if (!e._valueTracker) {
      var t = dt(e) ? "checked" : "value";
      e._valueTracker = ql(e, t, "" + e[t]);
    }
  }
  function Fr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      n = "";
    return (
      e && (n = dt(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function Kr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var ev = /[\n"\\]/g;
  function Aa(e) {
    return e.replace(ev, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function wu(e, t, a, n, r, o, d, y) {
    ((e.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.type = d)
        : e.removeAttribute("type"),
      t != null
        ? d === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + wt(t))
          : e.value !== "" + wt(t) && (e.value = "" + wt(t))
        : (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
      t != null
        ? _u(e, d, wt(t))
        : a != null
          ? _u(e, d, wt(a))
          : n != null && e.removeAttribute("value"),
      r == null && o != null && (e.defaultChecked = !!o),
      r != null &&
        (e.checked = r && typeof r != "function" && typeof r != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.name = "" + wt(y))
        : e.removeAttribute("name"));
  }
  function wf(e, t, a, n, r, o, d, y) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.type = o),
      t != null || a != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || t != null)) {
        Vl(e);
        return;
      }
      ((a = a != null ? "" + wt(a) : ""),
        (t = t != null ? "" + wt(t) : a),
        y || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = n ?? r),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (e.checked = y ? e.checked : !!n),
      (e.defaultChecked = !!n),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d),
      Vl(e));
  }
  function _u(e, t, a) {
    (t === "number" && Kr(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function Xl(e, t, a, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var r = 0; r < a.length; r++) t["$" + a[r]] = !0;
      for (a = 0; a < e.length; a++)
        ((r = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== r && (e[a].selected = r),
          r && n && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + wt(a), t = null, r = 0; r < e.length; r++) {
        if (e[r].value === a) {
          ((e[r].selected = !0), n && (e[r].defaultSelected = !0));
          return;
        }
        t !== null || e[r].disabled || (t = e[r]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _f(e, t, a) {
    if (
      t != null &&
      ((t = "" + wt(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + wt(a) : "";
  }
  function Cf(e, t, a, n) {
    if (t == null) {
      if (n != null) {
        if (a != null) throw Error(u(92));
        if (fe(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        a = n;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = wt(t)),
      (e.defaultValue = a),
      (n = e.textContent),
      n === a && n !== "" && n !== null && (e.value = n),
      Vl(e));
  }
  function Ql(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var tv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Mf(e, t, a) {
    var n = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? n
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : n
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || tv.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function Nf(e, t, a) {
    if (t != null && typeof t != "object") throw Error(u(62));
    if (((e = e.style), a != null)) {
      for (var n in a)
        !a.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? e.setProperty(n, "")
            : n === "float"
              ? (e.cssFloat = "")
              : (e[n] = ""));
      for (var r in t)
        ((n = t[r]), t.hasOwnProperty(r) && a[r] !== n && Mf(e, r, n));
    } else for (var o in t) t.hasOwnProperty(o) && Mf(e, o, t[o]);
  }
  function Cu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var av = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]),
    nv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Jr(e) {
    return nv.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function sn() {}
  var Mu = null;
  function Nu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Zl = null,
    Fl = null;
  function Of(e) {
    var t = q(e);
    if (t && (e = t.stateNode)) {
      var a = e[le] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (wu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Aa("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var n = a[t];
              if (n !== e && n.form === e.form) {
                var r = n[le] || null;
                if (!r) throw Error(u(90));
                wu(
                  n,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((n = a[t]), n.form === e.form && Fr(n));
          }
          break e;
        case "textarea":
          _f(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && Xl(e, !!a.multiple, t, !1));
      }
    }
  }
  var Ou = !1;
  function Df(e, t, a) {
    if (Ou) return e(t, a);
    Ou = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (
        ((Ou = !1),
        (Zl !== null || Fl !== null) &&
          (Ho(), Zl && ((t = Zl), (e = Fl), (Fl = Zl = null), Of(t), e)))
      )
        for (t = 0; t < e.length; t++) Of(e[t]);
    }
  }
  function zi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var n = a[le] || null;
    if (n === null) return null;
    a = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(u(231, t, typeof a));
    return a;
  }
  var cn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Du = !1;
  if (cn)
    try {
      var Li = {};
      (Object.defineProperty(Li, "passive", {
        get: function () {
          Du = !0;
        }
      }),
        window.addEventListener("test", Li, Li),
        window.removeEventListener("test", Li, Li));
    } catch {
      Du = !1;
    }
  var Bn = null,
    zu = null,
    Ir = null;
  function zf() {
    if (Ir) return Ir;
    var e,
      t = zu,
      a = t.length,
      n,
      r = "value" in Bn ? Bn.value : Bn.textContent,
      o = r.length;
    for (e = 0; e < a && t[e] === r[e]; e++);
    var d = a - e;
    for (n = 1; n <= d && t[a - n] === r[o - n]; n++);
    return (Ir = r.slice(e, 1 < n ? 1 - n : void 0));
  }
  function $r(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Pr() {
    return !0;
  }
  function Lf() {
    return !1;
  }
  function la(e) {
    function t(a, n, r, o, d) {
      ((this._reactName = a),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = d),
        (this.currentTarget = null));
      for (var y in e)
        e.hasOwnProperty(y) && ((a = e[y]), (this[y] = a ? a(o) : o[y]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Pr
          : Lf),
        (this.isPropagationStopped = Lf),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Pr));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Pr));
        },
        persist: function () {},
        isPersistent: Pr
      }),
      t
    );
  }
  var gl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Wr = la(gl),
    Ui = v({}, gl, { view: 0, detail: 0 }),
    lv = la(Ui),
    Lu,
    Uu,
    ji,
    eo = v({}, Ui, {
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
      getModifierState: Hu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ji &&
              (ji && e.type === "mousemove"
                ? ((Lu = e.screenX - ji.screenX), (Uu = e.screenY - ji.screenY))
                : (Uu = Lu = 0),
              (ji = e)),
            Lu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Uu;
      }
    }),
    Uf = la(eo),
    iv = v({}, eo, { dataTransfer: 0 }),
    rv = la(iv),
    ov = v({}, Ui, { relatedTarget: 0 }),
    ju = la(ov),
    uv = v({}, gl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sv = la(uv),
    cv = v({}, gl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }),
    fv = la(cv),
    dv = v({}, gl, { data: 0 }),
    jf = la(dv),
    mv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    },
    hv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    },
    pv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
  function gv(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = pv[e])
        ? !!t[e]
        : !1;
  }
  function Hu() {
    return gv;
  }
  var yv = v({}, Ui, {
      key: function (e) {
        if (e.key) {
          var t = mv[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = $r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? hv[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Hu,
      charCode: function (e) {
        return e.type === "keypress" ? $r(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? $r(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      }
    }),
    vv = la(yv),
    bv = v({}, eo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    Hf = la(bv),
    Sv = v({}, Ui, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hu
    }),
    xv = la(Sv),
    Ev = v({}, gl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tv = la(Ev),
    Rv = v({}, eo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    Av = la(Rv),
    wv = v({}, gl, { newState: 0, oldState: 0 }),
    _v = la(wv),
    Cv = [9, 13, 27, 32],
    Bu = cn && "CompositionEvent" in window,
    Hi = null;
  cn && "documentMode" in document && (Hi = document.documentMode);
  var Mv = cn && "TextEvent" in window && !Hi,
    Bf = cn && (!Bu || (Hi && 8 < Hi && 11 >= Hi)),
    kf = " ",
    Gf = !1;
  function Yf(e, t) {
    switch (e) {
      case "keyup":
        return Cv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qf(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Kl = !1;
  function Nv(e, t) {
    switch (e) {
      case "compositionend":
        return qf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Gf = !0), kf);
      case "textInput":
        return ((e = t.data), e === kf && Gf ? null : e);
      default:
        return null;
    }
  }
  function Ov(e, t) {
    if (Kl)
      return e === "compositionend" || (!Bu && Yf(e, t))
        ? ((e = zf()), (Ir = zu = Bn = null), (Kl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Bf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
    week: !0
  };
  function Vf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dv[e.type] : t === "textarea";
  }
  function Xf(e, t, a, n) {
    (Zl ? (Fl ? Fl.push(n) : (Fl = [n])) : (Zl = n),
      (t = Xo(t, "onChange")),
      0 < t.length &&
        ((a = new Wr("onChange", "change", null, a, n)),
        e.push({ event: a, listeners: t })));
  }
  var Bi = null,
    ki = null;
  function zv(e) {
    wh(e, 0);
  }
  function to(e) {
    var t = I(e);
    if (Fr(t)) return e;
  }
  function Qf(e, t) {
    if (e === "change") return t;
  }
  var Zf = !1;
  if (cn) {
    var ku;
    if (cn) {
      var Gu = "oninput" in document;
      if (!Gu) {
        var Ff = document.createElement("div");
        (Ff.setAttribute("oninput", "return;"),
          (Gu = typeof Ff.oninput == "function"));
      }
      ku = Gu;
    } else ku = !1;
    Zf = ku && (!document.documentMode || 9 < document.documentMode);
  }
  function Kf() {
    Bi && (Bi.detachEvent("onpropertychange", Jf), (ki = Bi = null));
  }
  function Jf(e) {
    if (e.propertyName === "value" && to(ki)) {
      var t = [];
      (Xf(t, ki, e, Nu(e)), Df(zv, t));
    }
  }
  function Lv(e, t, a) {
    e === "focusin"
      ? (Kf(), (Bi = t), (ki = a), Bi.attachEvent("onpropertychange", Jf))
      : e === "focusout" && Kf();
  }
  function Uv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return to(ki);
  }
  function jv(e, t) {
    if (e === "click") return to(t);
  }
  function Hv(e, t) {
    if (e === "input" || e === "change") return to(t);
  }
  function Bv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pa = typeof Object.is == "function" ? Object.is : Bv;
  function Gi(e, t) {
    if (pa(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      n = Object.keys(t);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var r = a[n];
      if (!Fa.call(t, r) || !pa(e[r], t[r])) return !1;
    }
    return !0;
  }
  function If(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $f(e, t) {
    var a = If(e);
    e = 0;
    for (var n; a; ) {
      if (a.nodeType === 3) {
        if (((n = e + a.textContent.length), e <= t && n >= t))
          return { node: a, offset: t - e };
        e = n;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = If(a);
    }
  }
  function Pf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Pf(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Wf(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Kr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Kr(e.document);
    }
    return t;
  }
  function Yu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var kv = cn && "documentMode" in document && 11 >= document.documentMode,
    Jl = null,
    qu = null,
    Yi = null,
    Vu = !1;
  function ed(e, t, a) {
    var n =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Vu ||
      Jl == null ||
      Jl !== Kr(n) ||
      ((n = Jl),
      "selectionStart" in n && Yu(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
          })),
      (Yi && Gi(Yi, n)) ||
        ((Yi = n),
        (n = Xo(qu, "onSelect")),
        0 < n.length &&
          ((t = new Wr("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: n }),
          (t.target = Jl))));
  }
  function yl(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var Il = {
      animationend: yl("Animation", "AnimationEnd"),
      animationiteration: yl("Animation", "AnimationIteration"),
      animationstart: yl("Animation", "AnimationStart"),
      transitionrun: yl("Transition", "TransitionRun"),
      transitionstart: yl("Transition", "TransitionStart"),
      transitioncancel: yl("Transition", "TransitionCancel"),
      transitionend: yl("Transition", "TransitionEnd")
    },
    Xu = {},
    td = {};
  cn &&
    ((td = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Il.animationend.animation,
      delete Il.animationiteration.animation,
      delete Il.animationstart.animation),
    "TransitionEvent" in window || delete Il.transitionend.transition);
  function vl(e) {
    if (Xu[e]) return Xu[e];
    if (!Il[e]) return e;
    var t = Il[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in td) return (Xu[e] = t[a]);
    return e;
  }
  var ad = vl("animationend"),
    nd = vl("animationiteration"),
    ld = vl("animationstart"),
    Gv = vl("transitionrun"),
    Yv = vl("transitionstart"),
    qv = vl("transitioncancel"),
    id = vl("transitionend"),
    rd = new Map(),
    Qu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Qu.push("scrollEnd");
  function Va(e, t) {
    (rd.set(e, t), We(t, [e]));
  }
  var ao =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    wa = [],
    $l = 0,
    Zu = 0;
  function no() {
    for (var e = $l, t = (Zu = $l = 0); t < e; ) {
      var a = wa[t];
      wa[t++] = null;
      var n = wa[t];
      wa[t++] = null;
      var r = wa[t];
      wa[t++] = null;
      var o = wa[t];
      if (((wa[t++] = null), n !== null && r !== null)) {
        var d = n.pending;
        (d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)),
          (n.pending = r));
      }
      o !== 0 && od(a, r, o);
    }
  }
  function lo(e, t, a, n) {
    ((wa[$l++] = e),
      (wa[$l++] = t),
      (wa[$l++] = a),
      (wa[$l++] = n),
      (Zu |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n));
  }
  function Fu(e, t, a, n) {
    return (lo(e, t, a, n), io(e));
  }
  function bl(e, t) {
    return (lo(e, null, null, t), io(e));
  }
  function od(e, t, a) {
    e.lanes |= a;
    var n = e.alternate;
    n !== null && (n.lanes |= a);
    for (var r = !1, o = e.return; o !== null; )
      ((o.childLanes |= a),
        (n = o.alternate),
        n !== null && (n.childLanes |= a),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (r = !0)),
        (e = o),
        (o = o.return));
    return e.tag === 3
      ? ((o = e.stateNode),
        r &&
          t !== null &&
          ((r = 31 - gt(a)),
          (e = o.hiddenUpdates),
          (n = e[r]),
          n === null ? (e[r] = [t]) : n.push(t),
          (t.lane = a | 536870912)),
        o)
      : null;
  }
  function io(e) {
    if (50 < sr) throw ((sr = 0), (ac = null), Error(u(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Pl = {};
  function Vv(e, t, a, n) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ga(e, t, a, n) {
    return new Vv(e, t, a, n);
  }
  function Ku(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function fn(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = ga(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function ud(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function ro(e, t, a, n, r, o) {
    var d = 0;
    if (((n = e), typeof e == "function")) Ku(e) && (d = 1);
    else if (typeof e == "string")
      d = K0(e, a, re.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ee:
          return (
            (e = ga(31, a, t, r)),
            (e.elementType = ee),
            (e.lanes = o),
            e
          );
        case k:
          return Sl(a.children, r, o, t);
        case O:
          ((d = 8), (r |= 24));
          break;
        case $:
          return (
            (e = ga(12, a, t, r | 2)),
            (e.elementType = $),
            (e.lanes = o),
            e
          );
        case he:
          return (
            (e = ga(13, a, t, r)),
            (e.elementType = he),
            (e.lanes = o),
            e
          );
        case Se:
          return (
            (e = ga(19, a, t, r)),
            (e.elementType = Se),
            (e.lanes = o),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case F:
                d = 10;
                break e;
              case W:
                d = 9;
                break e;
              case ie:
                d = 11;
                break e;
              case P:
                d = 14;
                break e;
              case E:
                ((d = 16), (n = null));
                break e;
            }
          ((d = 29),
            (a = Error(u(130, e === null ? "null" : typeof e, ""))),
            (n = null));
      }
    return (
      (t = ga(d, a, t, r)),
      (t.elementType = e),
      (t.type = n),
      (t.lanes = o),
      t
    );
  }
  function Sl(e, t, a, n) {
    return ((e = ga(7, e, n, t)), (e.lanes = a), e);
  }
  function Ju(e, t, a) {
    return ((e = ga(6, e, null, t)), (e.lanes = a), e);
  }
  function sd(e) {
    var t = ga(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Iu(e, t, a) {
    return (
      (t = ga(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }),
      t
    );
  }
  var cd = new WeakMap();
  function _a(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = cd.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: ka(t) }), cd.set(e, t), t);
    }
    return { value: e, source: t, stack: ka(t) };
  }
  var Wl = [],
    ei = 0,
    oo = null,
    qi = 0,
    Ca = [],
    Ma = 0,
    kn = null,
    $a = 1,
    Pa = "";
  function dn(e, t) {
    ((Wl[ei++] = qi), (Wl[ei++] = oo), (oo = e), (qi = t));
  }
  function fd(e, t, a) {
    ((Ca[Ma++] = $a), (Ca[Ma++] = Pa), (Ca[Ma++] = kn), (kn = e));
    var n = $a;
    e = Pa;
    var r = 32 - gt(n) - 1;
    ((n &= ~(1 << r)), (a += 1));
    var o = 32 - gt(t) + r;
    if (30 < o) {
      var d = r - (r % 5);
      ((o = (n & ((1 << d) - 1)).toString(32)),
        (n >>= d),
        (r -= d),
        ($a = (1 << (32 - gt(t) + r)) | (a << r) | n),
        (Pa = o + e));
    } else (($a = (1 << o) | (a << r) | n), (Pa = e));
  }
  function $u(e) {
    e.return !== null && (dn(e, 1), fd(e, 1, 0));
  }
  function Pu(e) {
    for (; e === oo; )
      ((oo = Wl[--ei]), (Wl[ei] = null), (qi = Wl[--ei]), (Wl[ei] = null));
    for (; e === kn; )
      ((kn = Ca[--Ma]),
        (Ca[Ma] = null),
        (Pa = Ca[--Ma]),
        (Ca[Ma] = null),
        ($a = Ca[--Ma]),
        (Ca[Ma] = null));
  }
  function dd(e, t) {
    ((Ca[Ma++] = $a),
      (Ca[Ma++] = Pa),
      (Ca[Ma++] = kn),
      ($a = t.id),
      (Pa = t.overflow),
      (kn = e));
  }
  var Bt = null,
    mt = null,
    Ke = !1,
    Gn = null,
    Na = !1,
    Wu = Error(u(519));
  function Yn(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Vi(_a(t, e)), Wu);
  }
  function md(e) {
    var t = e.stateNode,
      a = e.type,
      n = e.memoizedProps;
    switch (((t[oe] = e), (t[le] = n), a)) {
      case "dialog":
        (Ve("cancel", t), Ve("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ve("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < fr.length; a++) Ve(fr[a], t);
        break;
      case "source":
        Ve("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Ve("error", t), Ve("load", t));
        break;
      case "details":
        Ve("toggle", t);
        break;
      case "input":
        (Ve("invalid", t),
          wf(
            t,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0
          ));
        break;
      case "select":
        Ve("invalid", t);
        break;
      case "textarea":
        (Ve("invalid", t), Cf(t, n.value, n.defaultValue, n.children));
    }
    ((a = n.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      n.suppressHydrationWarning === !0 ||
      Nh(t.textContent, a)
        ? (n.popover != null && (Ve("beforetoggle", t), Ve("toggle", t)),
          n.onScroll != null && Ve("scroll", t),
          n.onScrollEnd != null && Ve("scrollend", t),
          n.onClick != null && (t.onclick = sn),
          (t = !0))
        : (t = !1),
      t || Yn(e, !0));
  }
  function hd(e) {
    for (Bt = e.return; Bt; )
      switch (Bt.tag) {
        case 5:
        case 31:
        case 13:
          Na = !1;
          return;
        case 27:
        case 3:
          Na = !0;
          return;
        default:
          Bt = Bt.return;
      }
  }
  function ti(e) {
    if (e !== Bt) return !1;
    if (!Ke) return (hd(e), (Ke = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || yc(e.type, e.memoizedProps))),
        (a = !a)),
      a && mt && Yn(e),
      hd(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      mt = kh(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      mt = kh(e);
    } else
      t === 27
        ? ((t = mt), tl(e.type) ? ((e = Ec), (Ec = null), (mt = e)) : (mt = t))
        : (mt = Bt ? Da(e.stateNode.nextSibling) : null);
    return !0;
  }
  function xl() {
    ((mt = Bt = null), (Ke = !1));
  }
  function es() {
    var e = Gn;
    return (
      e !== null &&
        (ua === null ? (ua = e) : ua.push.apply(ua, e), (Gn = null)),
      e
    );
  }
  function Vi(e) {
    Gn === null ? (Gn = [e]) : Gn.push(e);
  }
  var ts = R(null),
    El = null,
    mn = null;
  function qn(e, t, a) {
    (Z(ts, t._currentValue), (t._currentValue = a));
  }
  function hn(e) {
    ((e._currentValue = ts.current), Y(ts));
  }
  function as(e, t, a) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function ns(e, t, a, n) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var o = r.dependencies;
      if (o !== null) {
        var d = r.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var y = o;
          o = r;
          for (var A = 0; A < t.length; A++)
            if (y.context === t[A]) {
              ((o.lanes |= a),
                (y = o.alternate),
                y !== null && (y.lanes |= a),
                as(o.return, a, e),
                n || (d = null));
              break e;
            }
          o = y.next;
        }
      } else if (r.tag === 18) {
        if (((d = r.return), d === null)) throw Error(u(341));
        ((d.lanes |= a),
          (o = d.alternate),
          o !== null && (o.lanes |= a),
          as(d, a, e),
          (d = null));
      } else d = r.child;
      if (d !== null) d.return = r;
      else
        for (d = r; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (((r = d.sibling), r !== null)) {
            ((r.return = d.return), (d = r));
            break;
          }
          d = d.return;
        }
      r = d;
    }
  }
  function ai(e, t, a, n) {
    e = null;
    for (var r = t, o = !1; r !== null; ) {
      if (!o) {
        if ((r.flags & 524288) !== 0) o = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var d = r.alternate;
        if (d === null) throw Error(u(387));
        if (((d = d.memoizedProps), d !== null)) {
          var y = r.type;
          pa(r.pendingProps.value, d.value) ||
            (e !== null ? e.push(y) : (e = [y]));
        }
      } else if (r === Ne.current) {
        if (((d = r.alternate), d === null)) throw Error(u(387));
        d.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (e !== null ? e.push(gr) : (e = [gr]));
      }
      r = r.return;
    }
    (e !== null && ns(t, e, a, n), (t.flags |= 262144));
  }
  function uo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!pa(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Tl(e) {
    ((El = e),
      (mn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function kt(e) {
    return pd(El, e);
  }
  function so(e, t) {
    return (El === null && Tl(e), pd(e, t));
  }
  function pd(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), mn === null)) {
      if (e === null) throw Error(u(308));
      ((mn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else mn = mn.next = t;
    return a;
  }
  var Xv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, n) {
                  e.push(n);
                }
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    Qv = l.unstable_scheduleCallback,
    Zv = l.unstable_NormalPriority,
    _t = {
      $$typeof: F,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
  function ls() {
    return { controller: new Xv(), data: new Map(), refCount: 0 };
  }
  function Xi(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Qv(Zv, function () {
          e.controller.abort();
        }));
  }
  var Qi = null,
    is = 0,
    ni = 0,
    li = null;
  function Fv(e, t) {
    if (Qi === null) {
      var a = (Qi = []);
      ((is = 0),
        (ni = uc()),
        (li = {
          status: "pending",
          value: void 0,
          then: function (n) {
            a.push(n);
          }
        }));
    }
    return (is++, t.then(gd, gd), t);
  }
  function gd() {
    if (--is === 0 && Qi !== null) {
      li !== null && (li.status = "fulfilled");
      var e = Qi;
      ((Qi = null), (ni = 0), (li = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Kv(e, t) {
    var a = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          a.push(r);
        }
      };
    return (
      e.then(
        function () {
          ((n.status = "fulfilled"), (n.value = t));
          for (var r = 0; r < a.length; r++) (0, a[r])(t);
        },
        function (r) {
          for (n.status = "rejected", n.reason = r, r = 0; r < a.length; r++)
            (0, a[r])(void 0);
        }
      ),
      n
    );
  }
  var yd = z.S;
  z.S = function (e, t) {
    ((eh = zt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Fv(e, t),
      yd !== null && yd(e, t));
  };
  var Rl = R(null);
  function rs() {
    var e = Rl.current;
    return e !== null ? e : st.pooledCache;
  }
  function co(e, t) {
    t === null ? Z(Rl, Rl.current) : Z(Rl, t.pool);
  }
  function vd() {
    var e = rs();
    return e === null ? null : { parent: _t._currentValue, pool: e };
  }
  var ii = Error(u(460)),
    os = Error(u(474)),
    fo = Error(u(542)),
    mo = { then: function () {} };
  function bd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Sd(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(sn, sn), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Ed(e), e);
      default:
        if (typeof t.status == "string") t.then(sn, sn);
        else {
          if (((e = st), e !== null && 100 < e.shellSuspendCounter))
            throw Error(u(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (n) {
                if (t.status === "pending") {
                  var r = t;
                  ((r.status = "fulfilled"), (r.value = n));
                }
              },
              function (n) {
                if (t.status === "pending") {
                  var r = t;
                  ((r.status = "rejected"), (r.reason = n));
                }
              }
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Ed(e), e);
        }
        throw ((wl = t), ii);
    }
  }
  function Al(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((wl = a), ii)
        : a;
    }
  }
  var wl = null;
  function xd() {
    if (wl === null) throw Error(u(459));
    var e = wl;
    return ((wl = null), e);
  }
  function Ed(e) {
    if (e === ii || e === fo) throw Error(u(483));
  }
  var ri = null,
    Zi = 0;
  function ho(e) {
    var t = Zi;
    return ((Zi += 1), ri === null && (ri = []), Sd(ri, e, t));
  }
  function Fi(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function po(e, t) {
    throw t.$$typeof === N
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          u(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Td(e) {
    function t(D, C) {
      if (e) {
        var U = D.deletions;
        U === null ? ((D.deletions = [C]), (D.flags |= 16)) : U.push(C);
      }
    }
    function a(D, C) {
      if (!e) return null;
      for (; C !== null; ) (t(D, C), (C = C.sibling));
      return null;
    }
    function n(D) {
      for (var C = new Map(); D !== null; )
        (D.key !== null ? C.set(D.key, D) : C.set(D.index, D), (D = D.sibling));
      return C;
    }
    function r(D, C) {
      return ((D = fn(D, C)), (D.index = 0), (D.sibling = null), D);
    }
    function o(D, C, U) {
      return (
        (D.index = U),
        e
          ? ((U = D.alternate),
            U !== null
              ? ((U = U.index), U < C ? ((D.flags |= 67108866), C) : U)
              : ((D.flags |= 67108866), C))
          : ((D.flags |= 1048576), C)
      );
    }
    function d(D) {
      return (e && D.alternate === null && (D.flags |= 67108866), D);
    }
    function y(D, C, U, X) {
      return C === null || C.tag !== 6
        ? ((C = Ju(U, D.mode, X)), (C.return = D), C)
        : ((C = r(C, U)), (C.return = D), C);
    }
    function A(D, C, U, X) {
      var _e = U.type;
      return _e === k
        ? V(D, C, U.props.children, X, U.key)
        : C !== null &&
            (C.elementType === _e ||
              (typeof _e == "object" &&
                _e !== null &&
                _e.$$typeof === E &&
                Al(_e) === C.type))
          ? ((C = r(C, U.props)), Fi(C, U), (C.return = D), C)
          : ((C = ro(U.type, U.key, U.props, null, D.mode, X)),
            Fi(C, U),
            (C.return = D),
            C);
    }
    function H(D, C, U, X) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== U.containerInfo ||
        C.stateNode.implementation !== U.implementation
        ? ((C = Iu(U, D.mode, X)), (C.return = D), C)
        : ((C = r(C, U.children || [])), (C.return = D), C);
    }
    function V(D, C, U, X, _e) {
      return C === null || C.tag !== 7
        ? ((C = Sl(U, D.mode, X, _e)), (C.return = D), C)
        : ((C = r(C, U)), (C.return = D), C);
    }
    function Q(D, C, U) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return ((C = Ju("" + C, D.mode, U)), (C.return = D), C);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case w:
            return (
              (U = ro(C.type, C.key, C.props, null, D.mode, U)),
              Fi(U, C),
              (U.return = D),
              U
            );
          case j:
            return ((C = Iu(C, D.mode, U)), (C.return = D), C);
          case E:
            return ((C = Al(C)), Q(D, C, U));
        }
        if (fe(C) || Ee(C))
          return ((C = Sl(C, D.mode, U, null)), (C.return = D), C);
        if (typeof C.then == "function") return Q(D, ho(C), U);
        if (C.$$typeof === F) return Q(D, so(D, C), U);
        po(D, C);
      }
      return null;
    }
    function B(D, C, U, X) {
      var _e = C !== null ? C.key : null;
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return _e !== null ? null : y(D, C, "" + U, X);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case w:
            return U.key === _e ? A(D, C, U, X) : null;
          case j:
            return U.key === _e ? H(D, C, U, X) : null;
          case E:
            return ((U = Al(U)), B(D, C, U, X));
        }
        if (fe(U) || Ee(U)) return _e !== null ? null : V(D, C, U, X, null);
        if (typeof U.then == "function") return B(D, C, ho(U), X);
        if (U.$$typeof === F) return B(D, C, so(D, U), X);
        po(D, U);
      }
      return null;
    }
    function G(D, C, U, X, _e) {
      if (
        (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
      )
        return ((D = D.get(U) || null), y(C, D, "" + X, _e));
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case w:
            return (
              (D = D.get(X.key === null ? U : X.key) || null),
              A(C, D, X, _e)
            );
          case j:
            return (
              (D = D.get(X.key === null ? U : X.key) || null),
              H(C, D, X, _e)
            );
          case E:
            return ((X = Al(X)), G(D, C, U, X, _e));
        }
        if (fe(X) || Ee(X))
          return ((D = D.get(U) || null), V(C, D, X, _e, null));
        if (typeof X.then == "function") return G(D, C, U, ho(X), _e);
        if (X.$$typeof === F) return G(D, C, U, so(C, X), _e);
        po(C, X);
      }
      return null;
    }
    function ye(D, C, U, X) {
      for (
        var _e = null, Ie = null, Te = C, He = (C = 0), Ze = null;
        Te !== null && He < U.length;
        He++
      ) {
        Te.index > He ? ((Ze = Te), (Te = null)) : (Ze = Te.sibling);
        var $e = B(D, Te, U[He], X);
        if ($e === null) {
          Te === null && (Te = Ze);
          break;
        }
        (e && Te && $e.alternate === null && t(D, Te),
          (C = o($e, C, He)),
          Ie === null ? (_e = $e) : (Ie.sibling = $e),
          (Ie = $e),
          (Te = Ze));
      }
      if (He === U.length) return (a(D, Te), Ke && dn(D, He), _e);
      if (Te === null) {
        for (; He < U.length; He++)
          ((Te = Q(D, U[He], X)),
            Te !== null &&
              ((C = o(Te, C, He)),
              Ie === null ? (_e = Te) : (Ie.sibling = Te),
              (Ie = Te)));
        return (Ke && dn(D, He), _e);
      }
      for (Te = n(Te); He < U.length; He++)
        ((Ze = G(Te, D, He, U[He], X)),
          Ze !== null &&
            (e &&
              Ze.alternate !== null &&
              Te.delete(Ze.key === null ? He : Ze.key),
            (C = o(Ze, C, He)),
            Ie === null ? (_e = Ze) : (Ie.sibling = Ze),
            (Ie = Ze)));
      return (
        e &&
          Te.forEach(function (rl) {
            return t(D, rl);
          }),
        Ke && dn(D, He),
        _e
      );
    }
    function Ce(D, C, U, X) {
      if (U == null) throw Error(u(151));
      for (
        var _e = null,
          Ie = null,
          Te = C,
          He = (C = 0),
          Ze = null,
          $e = U.next();
        Te !== null && !$e.done;
        He++, $e = U.next()
      ) {
        Te.index > He ? ((Ze = Te), (Te = null)) : (Ze = Te.sibling);
        var rl = B(D, Te, $e.value, X);
        if (rl === null) {
          Te === null && (Te = Ze);
          break;
        }
        (e && Te && rl.alternate === null && t(D, Te),
          (C = o(rl, C, He)),
          Ie === null ? (_e = rl) : (Ie.sibling = rl),
          (Ie = rl),
          (Te = Ze));
      }
      if ($e.done) return (a(D, Te), Ke && dn(D, He), _e);
      if (Te === null) {
        for (; !$e.done; He++, $e = U.next())
          (($e = Q(D, $e.value, X)),
            $e !== null &&
              ((C = o($e, C, He)),
              Ie === null ? (_e = $e) : (Ie.sibling = $e),
              (Ie = $e)));
        return (Ke && dn(D, He), _e);
      }
      for (Te = n(Te); !$e.done; He++, $e = U.next())
        (($e = G(Te, D, He, $e.value, X)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              Te.delete($e.key === null ? He : $e.key),
            (C = o($e, C, He)),
            Ie === null ? (_e = $e) : (Ie.sibling = $e),
            (Ie = $e)));
      return (
        e &&
          Te.forEach(function (ib) {
            return t(D, ib);
          }),
        Ke && dn(D, He),
        _e
      );
    }
    function ut(D, C, U, X) {
      if (
        (typeof U == "object" &&
          U !== null &&
          U.type === k &&
          U.key === null &&
          (U = U.props.children),
        typeof U == "object" && U !== null)
      ) {
        switch (U.$$typeof) {
          case w:
            e: {
              for (var _e = U.key; C !== null; ) {
                if (C.key === _e) {
                  if (((_e = U.type), _e === k)) {
                    if (C.tag === 7) {
                      (a(D, C.sibling),
                        (X = r(C, U.props.children)),
                        (X.return = D),
                        (D = X));
                      break e;
                    }
                  } else if (
                    C.elementType === _e ||
                    (typeof _e == "object" &&
                      _e !== null &&
                      _e.$$typeof === E &&
                      Al(_e) === C.type)
                  ) {
                    (a(D, C.sibling),
                      (X = r(C, U.props)),
                      Fi(X, U),
                      (X.return = D),
                      (D = X));
                    break e;
                  }
                  a(D, C);
                  break;
                } else t(D, C);
                C = C.sibling;
              }
              U.type === k
                ? ((X = Sl(U.props.children, D.mode, X, U.key)),
                  (X.return = D),
                  (D = X))
                : ((X = ro(U.type, U.key, U.props, null, D.mode, X)),
                  Fi(X, U),
                  (X.return = D),
                  (D = X));
            }
            return d(D);
          case j:
            e: {
              for (_e = U.key; C !== null; ) {
                if (C.key === _e)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === U.containerInfo &&
                    C.stateNode.implementation === U.implementation
                  ) {
                    (a(D, C.sibling),
                      (X = r(C, U.children || [])),
                      (X.return = D),
                      (D = X));
                    break e;
                  } else {
                    a(D, C);
                    break;
                  }
                else t(D, C);
                C = C.sibling;
              }
              ((X = Iu(U, D.mode, X)), (X.return = D), (D = X));
            }
            return d(D);
          case E:
            return ((U = Al(U)), ut(D, C, U, X));
        }
        if (fe(U)) return ye(D, C, U, X);
        if (Ee(U)) {
          if (((_e = Ee(U)), typeof _e != "function")) throw Error(u(150));
          return ((U = _e.call(U)), Ce(D, C, U, X));
        }
        if (typeof U.then == "function") return ut(D, C, ho(U), X);
        if (U.$$typeof === F) return ut(D, C, so(D, U), X);
        po(D, U);
      }
      return (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
        ? ((U = "" + U),
          C !== null && C.tag === 6
            ? (a(D, C.sibling), (X = r(C, U)), (X.return = D), (D = X))
            : (a(D, C), (X = Ju(U, D.mode, X)), (X.return = D), (D = X)),
          d(D))
        : a(D, C);
    }
    return function (D, C, U, X) {
      try {
        Zi = 0;
        var _e = ut(D, C, U, X);
        return ((ri = null), _e);
      } catch (Te) {
        if (Te === ii || Te === fo) throw Te;
        var Ie = ga(29, Te, null, D.mode);
        return ((Ie.lanes = X), (Ie.return = D), Ie);
      }
    };
  }
  var _l = Td(!0),
    Rd = Td(!1),
    Vn = !1;
  function us(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ss(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null
        }));
  }
  function Xn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Qn(e, t, a) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (et & 2) !== 0)) {
      var r = n.pending;
      return (
        r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
        (n.pending = t),
        (t = io(e)),
        od(e, null, a),
        t
      );
    }
    return (lo(e, n, t, a), io(e));
  }
  function Ki(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (a |= n), (t.lanes = a), pl(e, a));
    }
  }
  function cs(e, t) {
    var a = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), a === n)) {
      var r = null,
        o = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var d = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          (o === null ? (r = o = d) : (o = o.next = d), (a = a.next));
        } while (a !== null);
        o === null ? (r = o = t) : (o = o.next = t);
      } else r = o = t;
      ((a = {
        baseState: n.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: o,
        shared: n.shared,
        callbacks: n.callbacks
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var fs = !1;
  function Ji() {
    if (fs) {
      var e = li;
      if (e !== null) throw e;
    }
  }
  function Ii(e, t, a, n) {
    fs = !1;
    var r = e.updateQueue;
    Vn = !1;
    var o = r.firstBaseUpdate,
      d = r.lastBaseUpdate,
      y = r.shared.pending;
    if (y !== null) {
      r.shared.pending = null;
      var A = y,
        H = A.next;
      ((A.next = null), d === null ? (o = H) : (d.next = H), (d = A));
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (y = V.lastBaseUpdate),
        y !== d &&
          (y === null ? (V.firstBaseUpdate = H) : (y.next = H),
          (V.lastBaseUpdate = A)));
    }
    if (o !== null) {
      var Q = r.baseState;
      ((d = 0), (V = H = A = null), (y = o));
      do {
        var B = y.lane & -536870913,
          G = B !== y.lane;
        if (G ? (Qe & B) === B : (n & B) === B) {
          (B !== 0 && B === ni && (fs = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null
                }));
          e: {
            var ye = e,
              Ce = y;
            B = t;
            var ut = a;
            switch (Ce.tag) {
              case 1:
                if (((ye = Ce.payload), typeof ye == "function")) {
                  Q = ye.call(ut, Q, B);
                  break e;
                }
                Q = ye;
                break e;
              case 3:
                ye.flags = (ye.flags & -65537) | 128;
              case 0:
                if (
                  ((ye = Ce.payload),
                  (B = typeof ye == "function" ? ye.call(ut, Q, B) : ye),
                  B == null)
                )
                  break e;
                Q = v({}, Q, B);
                break e;
              case 2:
                Vn = !0;
            }
          }
          ((B = y.callback),
            B !== null &&
              ((e.flags |= 64),
              G && (e.flags |= 8192),
              (G = r.callbacks),
              G === null ? (r.callbacks = [B]) : G.push(B)));
        } else
          ((G = {
            lane: B,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }),
            V === null ? ((H = V = G), (A = Q)) : (V = V.next = G),
            (d |= B));
        if (((y = y.next), y === null)) {
          if (((y = r.shared.pending), y === null)) break;
          ((G = y),
            (y = G.next),
            (G.next = null),
            (r.lastBaseUpdate = G),
            (r.shared.pending = null));
        }
      } while (!0);
      (V === null && (A = Q),
        (r.baseState = A),
        (r.firstBaseUpdate = H),
        (r.lastBaseUpdate = V),
        o === null && (r.shared.lanes = 0),
        (In |= d),
        (e.lanes = d),
        (e.memoizedState = Q));
    }
  }
  function Ad(e, t) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(t);
  }
  function wd(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Ad(a[e], t);
  }
  var oi = R(null),
    go = R(0);
  function _d(e, t) {
    ((e = Tn), Z(go, e), Z(oi, t), (Tn = e | t.baseLanes));
  }
  function ds() {
    (Z(go, Tn), Z(oi, oi.current));
  }
  function ms() {
    ((Tn = go.current), Y(oi), Y(go));
  }
  var ya = R(null),
    Oa = null;
  function Zn(e) {
    var t = e.alternate;
    (Z(Tt, Tt.current & 1),
      Z(ya, e),
      Oa === null &&
        (t === null || oi.current !== null || t.memoizedState !== null) &&
        (Oa = e));
  }
  function hs(e) {
    (Z(Tt, Tt.current), Z(ya, e), Oa === null && (Oa = e));
  }
  function Cd(e) {
    e.tag === 22
      ? (Z(Tt, Tt.current), Z(ya, e), Oa === null && (Oa = e))
      : Fn();
  }
  function Fn() {
    (Z(Tt, Tt.current), Z(ya, ya.current));
  }
  function va(e) {
    (Y(ya), Oa === e && (Oa = null), Y(Tt));
  }
  var Tt = R(0);
  function yo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Sc(a) || xc(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var pn = 0,
    Ue = null,
    rt = null,
    Ct = null,
    vo = !1,
    ui = !1,
    Cl = !1,
    bo = 0,
    $i = 0,
    si = null,
    Jv = 0;
  function bt() {
    throw Error(u(321));
  }
  function ps(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!pa(e[a], t[a])) return !1;
    return !0;
  }
  function gs(e, t, a, n, r, o) {
    return (
      (pn = o),
      (Ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = e === null || e.memoizedState === null ? fm : Os),
      (Cl = !1),
      (o = a(n, r)),
      (Cl = !1),
      ui && (o = Nd(t, a, n, r)),
      Md(e),
      o
    );
  }
  function Md(e) {
    z.H = er;
    var t = rt !== null && rt.next !== null;
    if (((pn = 0), (Ct = rt = Ue = null), (vo = !1), ($i = 0), (si = null), t))
      throw Error(u(300));
    e === null ||
      Mt ||
      ((e = e.dependencies), e !== null && uo(e) && (Mt = !0));
  }
  function Nd(e, t, a, n) {
    Ue = e;
    var r = 0;
    do {
      if ((ui && (si = null), ($i = 0), (ui = !1), 25 <= r))
        throw Error(u(301));
      if (((r += 1), (Ct = rt = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((z.H = dm), (o = t(a, n)));
    } while (ui);
    return o;
  }
  function Iv() {
    var e = z.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Pi(t) : t),
      (e = e.useState()[0]),
      (rt !== null ? rt.memoizedState : null) !== e && (Ue.flags |= 1024),
      t
    );
  }
  function ys() {
    var e = bo !== 0;
    return ((bo = 0), e);
  }
  function vs(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function bs(e) {
    if (vo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      vo = !1;
    }
    ((pn = 0), (Ct = rt = Ue = null), (ui = !1), ($i = bo = 0), (si = null));
  }
  function It() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return (Ct === null ? (Ue.memoizedState = Ct = e) : (Ct = Ct.next = e), Ct);
  }
  function Rt() {
    if (rt === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = rt.next;
    var t = Ct === null ? Ue.memoizedState : Ct.next;
    if (t !== null) ((Ct = t), (rt = e));
    else {
      if (e === null)
        throw Ue.alternate === null ? Error(u(467)) : Error(u(310));
      ((rt = e),
        (e = {
          memoizedState: rt.memoizedState,
          baseState: rt.baseState,
          baseQueue: rt.baseQueue,
          queue: rt.queue,
          next: null
        }),
        Ct === null ? (Ue.memoizedState = Ct = e) : (Ct = Ct.next = e));
    }
    return Ct;
  }
  function So() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pi(e) {
    var t = $i;
    return (
      ($i += 1),
      si === null && (si = []),
      (e = Sd(si, e, t)),
      (t = Ue),
      (Ct === null ? t.memoizedState : Ct.next) === null &&
        ((t = t.alternate),
        (z.H = t === null || t.memoizedState === null ? fm : Os)),
      e
    );
  }
  function xo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Pi(e);
      if (e.$$typeof === F) return kt(e);
    }
    throw Error(u(438, String(e)));
  }
  function Ss(e) {
    var t = null,
      a = Ue.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var n = Ue.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (r) {
                return r.slice();
              }),
              index: 0
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = So()), (Ue.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), n = 0; n < e; n++) a[n] = Ae;
    return (t.index++, a);
  }
  function gn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Eo(e) {
    var t = Rt();
    return xs(t, rt, e);
  }
  function xs(e, t, a) {
    var n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = a;
    var r = e.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (r !== null) {
        var d = r.next;
        ((r.next = o.next), (o.next = d));
      }
      ((t.baseQueue = r = o), (n.pending = null));
    }
    if (((o = e.baseState), r === null)) e.memoizedState = o;
    else {
      t = r.next;
      var y = (d = null),
        A = null,
        H = t,
        V = !1;
      do {
        var Q = H.lane & -536870913;
        if (Q !== H.lane ? (Qe & Q) === Q : (pn & Q) === Q) {
          var B = H.revertLane;
          if (B === 0)
            (A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: H.action,
                  hasEagerState: H.hasEagerState,
                  eagerState: H.eagerState,
                  next: null
                }),
              Q === ni && (V = !0));
          else if ((pn & B) === B) {
            ((H = H.next), B === ni && (V = !0));
            continue;
          } else
            ((Q = {
              lane: 0,
              revertLane: H.revertLane,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }),
              A === null ? ((y = A = Q), (d = o)) : (A = A.next = Q),
              (Ue.lanes |= B),
              (In |= B));
          ((Q = H.action),
            Cl && a(o, Q),
            (o = H.hasEagerState ? H.eagerState : a(o, Q)));
        } else
          ((B = {
            lane: Q,
            revertLane: H.revertLane,
            gesture: H.gesture,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }),
            A === null ? ((y = A = B), (d = o)) : (A = A.next = B),
            (Ue.lanes |= Q),
            (In |= Q));
        H = H.next;
      } while (H !== null && H !== t);
      if (
        (A === null ? (d = o) : (A.next = y),
        !pa(o, e.memoizedState) && ((Mt = !0), V && ((a = li), a !== null)))
      )
        throw a;
      ((e.memoizedState = o),
        (e.baseState = d),
        (e.baseQueue = A),
        (n.lastRenderedState = o));
    }
    return (r === null && (n.lanes = 0), [e.memoizedState, n.dispatch]);
  }
  function Es(e) {
    var t = Rt(),
      a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = e;
    var n = a.dispatch,
      r = a.pending,
      o = t.memoizedState;
    if (r !== null) {
      a.pending = null;
      var d = (r = r.next);
      do ((o = e(o, d.action)), (d = d.next));
      while (d !== r);
      (pa(o, t.memoizedState) || (Mt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (a.lastRenderedState = o));
    }
    return [o, n];
  }
  function Od(e, t, a) {
    var n = Ue,
      r = Rt(),
      o = Ke;
    if (o) {
      if (a === void 0) throw Error(u(407));
      a = a();
    } else a = t();
    var d = !pa((rt || r).memoizedState, a);
    if (
      (d && ((r.memoizedState = a), (Mt = !0)),
      (r = r.queue),
      As(Ld.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || d || (Ct !== null && Ct.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ci(9, { destroy: void 0 }, zd.bind(null, n, r, a, t), null),
        st === null)
      )
        throw Error(u(349));
      o || (pn & 127) !== 0 || Dd(n, t, a);
    }
    return a;
  }
  function Dd(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = Ue.updateQueue),
      t === null
        ? ((t = So()), (Ue.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function zd(e, t, a, n) {
    ((t.value = a), (t.getSnapshot = n), Ud(t) && jd(e));
  }
  function Ld(e, t, a) {
    return a(function () {
      Ud(t) && jd(e);
    });
  }
  function Ud(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !pa(e, a);
    } catch {
      return !0;
    }
  }
  function jd(e) {
    var t = bl(e, 2);
    t !== null && sa(t, e, 2);
  }
  function Ts(e) {
    var t = It();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Cl)) {
        tt(!0);
        try {
          a();
        } finally {
          tt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gn,
        lastRenderedState: e
      }),
      t
    );
  }
  function Hd(e, t, a, n) {
    return ((e.baseState = a), xs(e, rt, typeof n == "function" ? n : gn));
  }
  function $v(e, t, a, n, r) {
    if (Ao(e)) throw Error(u(485));
    if (((e = t.action), e !== null)) {
      var o = {
        payload: r,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          o.listeners.push(d);
        }
      };
      (z.T !== null ? a(!0) : (o.isTransition = !1),
        n(o),
        (a = t.pending),
        a === null
          ? ((o.next = t.pending = o), Bd(t, o))
          : ((o.next = a.next), (t.pending = a.next = o)));
    }
  }
  function Bd(e, t) {
    var a = t.action,
      n = t.payload,
      r = e.state;
    if (t.isTransition) {
      var o = z.T,
        d = {};
      z.T = d;
      try {
        var y = a(r, n),
          A = z.S;
        (A !== null && A(d, y), kd(e, t, y));
      } catch (H) {
        Rs(e, t, H);
      } finally {
        (o !== null && d.types !== null && (o.types = d.types), (z.T = o));
      }
    } else
      try {
        ((o = a(r, n)), kd(e, t, o));
      } catch (H) {
        Rs(e, t, H);
      }
  }
  function kd(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (n) {
            Gd(e, t, n);
          },
          function (n) {
            return Rs(e, t, n);
          }
        )
      : Gd(e, t, a);
  }
  function Gd(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Yd(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Bd(e, a))));
  }
  function Rs(e, t, a) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do ((t.status = "rejected"), (t.reason = a), Yd(t), (t = t.next));
      while (t !== n);
    }
    e.action = null;
  }
  function Yd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function qd(e, t) {
    return t;
  }
  function Vd(e, t) {
    if (Ke) {
      var a = st.formState;
      if (a !== null) {
        e: {
          var n = Ue;
          if (Ke) {
            if (mt) {
              t: {
                for (var r = mt, o = Na; r.nodeType !== 8; ) {
                  if (!o) {
                    r = null;
                    break t;
                  }
                  if (((r = Da(r.nextSibling)), r === null)) {
                    r = null;
                    break t;
                  }
                }
                ((o = r.data), (r = o === "F!" || o === "F" ? r : null));
              }
              if (r) {
                ((mt = Da(r.nextSibling)), (n = r.data === "F!"));
                break e;
              }
            }
            Yn(n);
          }
          n = !1;
        }
        n && (t = a[0]);
      }
    }
    return (
      (a = It()),
      (a.memoizedState = a.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qd,
        lastRenderedState: t
      }),
      (a.queue = n),
      (a = um.bind(null, Ue, n)),
      (n.dispatch = a),
      (n = Ts(!1)),
      (o = Ns.bind(null, Ue, !1, n.queue)),
      (n = It()),
      (r = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = r),
      (a = $v.bind(null, Ue, r, o, a)),
      (r.dispatch = a),
      (n.memoizedState = e),
      [t, a, !1]
    );
  }
  function Xd(e) {
    var t = Rt();
    return Qd(t, rt, e);
  }
  function Qd(e, t, a) {
    if (
      ((t = xs(e, t, qd)[0]),
      (e = Eo(gn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var n = Pi(t);
      } catch (d) {
        throw d === ii ? fo : d;
      }
    else n = t;
    t = Rt();
    var r = t.queue,
      o = r.dispatch;
    return (
      a !== t.memoizedState &&
        ((Ue.flags |= 2048),
        ci(9, { destroy: void 0 }, Pv.bind(null, r, a), null)),
      [n, o, e]
    );
  }
  function Pv(e, t) {
    e.action = t;
  }
  function Zd(e) {
    var t = Rt(),
      a = rt;
    if (a !== null) return Qd(t, a, e);
    (Rt(), (t = t.memoizedState), (a = Rt()));
    var n = a.queue.dispatch;
    return ((a.memoizedState = e), [t, n, !1]);
  }
  function ci(e, t, a, n) {
    return (
      (e = { tag: e, create: a, deps: n, inst: t, next: null }),
      (t = Ue.updateQueue),
      t === null && ((t = So()), (Ue.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((n = a.next), (a.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function Fd() {
    return Rt().memoizedState;
  }
  function To(e, t, a, n) {
    var r = It();
    ((Ue.flags |= e),
      (r.memoizedState = ci(
        1 | t,
        { destroy: void 0 },
        a,
        n === void 0 ? null : n
      )));
  }
  function Ro(e, t, a, n) {
    var r = Rt();
    n = n === void 0 ? null : n;
    var o = r.memoizedState.inst;
    rt !== null && n !== null && ps(n, rt.memoizedState.deps)
      ? (r.memoizedState = ci(t, o, a, n))
      : ((Ue.flags |= e), (r.memoizedState = ci(1 | t, o, a, n)));
  }
  function Kd(e, t) {
    To(8390656, 8, e, t);
  }
  function As(e, t) {
    Ro(2048, 8, e, t);
  }
  function Wv(e) {
    Ue.flags |= 4;
    var t = Ue.updateQueue;
    if (t === null) ((t = So()), (Ue.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function Jd(e) {
    var t = Rt().memoizedState;
    return (
      Wv({ ref: t, nextImpl: e }),
      function () {
        if ((et & 2) !== 0) throw Error(u(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Id(e, t) {
    return Ro(4, 2, e, t);
  }
  function $d(e, t) {
    return Ro(4, 4, e, t);
  }
  function Pd(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Wd(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), Ro(4, 4, Pd.bind(null, t, e), a));
  }
  function ws() {}
  function em(e, t) {
    var a = Rt();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    return t !== null && ps(t, n[1]) ? n[0] : ((a.memoizedState = [e, t]), e);
  }
  function tm(e, t) {
    var a = Rt();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    if (t !== null && ps(t, n[1])) return n[0];
    if (((n = e()), Cl)) {
      tt(!0);
      try {
        e();
      } finally {
        tt(!1);
      }
    }
    return ((a.memoizedState = [n, t]), n);
  }
  function _s(e, t, a) {
    return a === void 0 || ((pn & 1073741824) !== 0 && (Qe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = ah()), (Ue.lanes |= e), (In |= e), a);
  }
  function am(e, t, a, n) {
    return pa(a, t)
      ? a
      : oi.current !== null
        ? ((e = _s(e, a, n)), pa(e, t) || (Mt = !0), e)
        : (pn & 42) === 0 || ((pn & 1073741824) !== 0 && (Qe & 261930) === 0)
          ? ((Mt = !0), (e.memoizedState = a))
          : ((e = ah()), (Ue.lanes |= e), (In |= e), t);
  }
  function nm(e, t, a, n, r) {
    var o = J.p;
    J.p = o !== 0 && 8 > o ? o : 8;
    var d = z.T,
      y = {};
    ((z.T = y), Ns(e, !1, t, a));
    try {
      var A = r(),
        H = z.S;
      if (
        (H !== null && H(y, A),
        A !== null && typeof A == "object" && typeof A.then == "function")
      ) {
        var V = Kv(A, n);
        Wi(e, t, V, xa(e));
      } else Wi(e, t, n, xa(e));
    } catch (Q) {
      Wi(e, t, { then: function () {}, status: "rejected", reason: Q }, xa());
    } finally {
      ((J.p = o),
        d !== null && y.types !== null && (d.types = y.types),
        (z.T = d));
    }
  }
  function e0() {}
  function Cs(e, t, a, n) {
    if (e.tag !== 5) throw Error(u(476));
    var r = lm(e).queue;
    nm(
      e,
      r,
      t,
      ce,
      a === null
        ? e0
        : function () {
            return (im(e), a(n));
          }
    );
  }
  function lm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ce,
      baseState: ce,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gn,
        lastRenderedState: ce
      },
      next: null
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: gn,
          lastRenderedState: a
        },
        next: null
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function im(e) {
    var t = lm(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Wi(e, t.next.queue, {}, xa()));
  }
  function Ms() {
    return kt(gr);
  }
  function rm() {
    return Rt().memoizedState;
  }
  function om() {
    return Rt().memoizedState;
  }
  function t0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = xa();
          e = Xn(a);
          var n = Qn(t, e, a);
          (n !== null && (sa(n, t, a), Ki(n, t, a)),
            (t = { cache: ls() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function a0(e, t, a) {
    var n = xa();
    ((a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
      Ao(e)
        ? sm(t, a)
        : ((a = Fu(e, t, a, n)), a !== null && (sa(a, e, n), cm(a, t, n))));
  }
  function um(e, t, a) {
    var n = xa();
    Wi(e, t, a, n);
  }
  function Wi(e, t, a, n) {
    var r = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ao(e)) sm(t, r);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var d = t.lastRenderedState,
            y = o(d, a);
          if (((r.hasEagerState = !0), (r.eagerState = y), pa(y, d)))
            return (lo(e, t, r, 0), st === null && no(), !1);
        } catch {}
      if (((a = Fu(e, t, r, n)), a !== null))
        return (sa(a, e, n), cm(a, t, n), !0);
    }
    return !1;
  }
  function Ns(e, t, a, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: uc(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }),
      Ao(e))
    ) {
      if (t) throw Error(u(479));
    } else ((t = Fu(e, a, n, 2)), t !== null && sa(t, e, 2));
  }
  function Ao(e) {
    var t = e.alternate;
    return e === Ue || (t !== null && t === Ue);
  }
  function sm(e, t) {
    ui = vo = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function cm(e, t, a) {
    if ((a & 4194048) !== 0) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (a |= n), (t.lanes = a), pl(e, a));
    }
  }
  var er = {
    readContext: kt,
    use: xo,
    useCallback: bt,
    useContext: bt,
    useEffect: bt,
    useImperativeHandle: bt,
    useLayoutEffect: bt,
    useInsertionEffect: bt,
    useMemo: bt,
    useReducer: bt,
    useRef: bt,
    useState: bt,
    useDebugValue: bt,
    useDeferredValue: bt,
    useTransition: bt,
    useSyncExternalStore: bt,
    useId: bt,
    useHostTransitionStatus: bt,
    useFormState: bt,
    useActionState: bt,
    useOptimistic: bt,
    useMemoCache: bt,
    useCacheRefresh: bt
  };
  er.useEffectEvent = bt;
  var fm = {
      readContext: kt,
      use: xo,
      useCallback: function (e, t) {
        return ((It().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: kt,
      useEffect: Kd,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          To(4194308, 4, Pd.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return To(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        To(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = It();
        t = t === void 0 ? null : t;
        var n = e();
        if (Cl) {
          tt(!0);
          try {
            e();
          } finally {
            tt(!1);
          }
        }
        return ((a.memoizedState = [n, t]), n);
      },
      useReducer: function (e, t, a) {
        var n = It();
        if (a !== void 0) {
          var r = a(t);
          if (Cl) {
            tt(!0);
            try {
              a(t);
            } finally {
              tt(!1);
            }
          }
        } else r = t;
        return (
          (n.memoizedState = n.baseState = r),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r
          }),
          (n.queue = e),
          (e = e.dispatch = a0.bind(null, Ue, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = It();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Ts(e);
        var t = e.queue,
          a = um.bind(null, Ue, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: ws,
      useDeferredValue: function (e, t) {
        var a = It();
        return _s(a, e, t);
      },
      useTransition: function () {
        var e = Ts(!1);
        return (
          (e = nm.bind(null, Ue, e.queue, !0, !1)),
          (It().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var n = Ue,
          r = It();
        if (Ke) {
          if (a === void 0) throw Error(u(407));
          a = a();
        } else {
          if (((a = t()), st === null)) throw Error(u(349));
          (Qe & 127) !== 0 || Dd(n, t, a);
        }
        r.memoizedState = a;
        var o = { value: a, getSnapshot: t };
        return (
          (r.queue = o),
          Kd(Ld.bind(null, n, o, e), [e]),
          (n.flags |= 2048),
          ci(9, { destroy: void 0 }, zd.bind(null, n, o, a, t), null),
          a
        );
      },
      useId: function () {
        var e = It(),
          t = st.identifierPrefix;
        if (Ke) {
          var a = Pa,
            n = $a;
          ((a = (n & ~(1 << (32 - gt(n) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = bo++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Jv++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ms,
      useFormState: Vd,
      useActionState: Vd,
      useOptimistic: function (e) {
        var t = It();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return (
          (t.queue = a),
          (t = Ns.bind(null, Ue, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Ss,
      useCacheRefresh: function () {
        return (It().memoizedState = t0.bind(null, Ue));
      },
      useEffectEvent: function (e) {
        var t = It(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((et & 2) !== 0) throw Error(u(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      }
    },
    Os = {
      readContext: kt,
      use: xo,
      useCallback: em,
      useContext: kt,
      useEffect: As,
      useImperativeHandle: Wd,
      useInsertionEffect: Id,
      useLayoutEffect: $d,
      useMemo: tm,
      useReducer: Eo,
      useRef: Fd,
      useState: function () {
        return Eo(gn);
      },
      useDebugValue: ws,
      useDeferredValue: function (e, t) {
        var a = Rt();
        return am(a, rt.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Eo(gn)[0],
          t = Rt().memoizedState;
        return [typeof e == "boolean" ? e : Pi(e), t];
      },
      useSyncExternalStore: Od,
      useId: rm,
      useHostTransitionStatus: Ms,
      useFormState: Xd,
      useActionState: Xd,
      useOptimistic: function (e, t) {
        var a = Rt();
        return Hd(a, rt, e, t);
      },
      useMemoCache: Ss,
      useCacheRefresh: om
    };
  Os.useEffectEvent = Jd;
  var dm = {
    readContext: kt,
    use: xo,
    useCallback: em,
    useContext: kt,
    useEffect: As,
    useImperativeHandle: Wd,
    useInsertionEffect: Id,
    useLayoutEffect: $d,
    useMemo: tm,
    useReducer: Es,
    useRef: Fd,
    useState: function () {
      return Es(gn);
    },
    useDebugValue: ws,
    useDeferredValue: function (e, t) {
      var a = Rt();
      return rt === null ? _s(a, e, t) : am(a, rt.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Es(gn)[0],
        t = Rt().memoizedState;
      return [typeof e == "boolean" ? e : Pi(e), t];
    },
    useSyncExternalStore: Od,
    useId: rm,
    useHostTransitionStatus: Ms,
    useFormState: Zd,
    useActionState: Zd,
    useOptimistic: function (e, t) {
      var a = Rt();
      return rt !== null
        ? Hd(a, rt, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    },
    useMemoCache: Ss,
    useCacheRefresh: om
  };
  dm.useEffectEvent = Jd;
  function Ds(e, t, a, n) {
    ((t = e.memoizedState),
      (a = a(n, t)),
      (a = a == null ? t : v({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var zs = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var n = xa(),
        r = Xn(n);
      ((r.payload = t),
        a != null && (r.callback = a),
        (t = Qn(e, r, n)),
        t !== null && (sa(t, e, n), Ki(t, e, n)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var n = xa(),
        r = Xn(n);
      ((r.tag = 1),
        (r.payload = t),
        a != null && (r.callback = a),
        (t = Qn(e, r, n)),
        t !== null && (sa(t, e, n), Ki(t, e, n)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = xa(),
        n = Xn(a);
      ((n.tag = 2),
        t != null && (n.callback = t),
        (t = Qn(e, n, a)),
        t !== null && (sa(t, e, a), Ki(t, e, a)));
    }
  };
  function mm(e, t, a, n, r, o, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, o, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Gi(a, n) || !Gi(r, o)
          : !0
    );
  }
  function hm(e, t, a, n) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, n),
      t.state !== e && zs.enqueueReplaceState(t, t.state, null));
  }
  function Ml(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var n in t) n !== "ref" && (a[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = v({}, a));
      for (var r in e) a[r] === void 0 && (a[r] = e[r]);
    }
    return a;
  }
  function pm(e) {
    ao(e);
  }
  function gm(e) {
    console.error(e);
  }
  function ym(e) {
    ao(e);
  }
  function wo(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function vm(e, t, a) {
    try {
      var n = e.onCaughtError;
      n(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Ls(e, t, a) {
    return (
      (a = Xn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        wo(e, t);
      }),
      a
    );
  }
  function bm(e) {
    return ((e = Xn(e)), (e.tag = 3), e);
  }
  function Sm(e, t, a, n) {
    var r = a.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = n.value;
      ((e.payload = function () {
        return r(o);
      }),
        (e.callback = function () {
          vm(t, a, n);
        }));
    }
    var d = a.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        (vm(t, a, n),
          typeof r != "function" &&
            ($n === null ? ($n = new Set([this])) : $n.add(this)));
        var y = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: y !== null ? y : ""
        });
      });
  }
  function n0(e, t, a, n, r) {
    if (
      ((a.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && ai(t, a, r, !0),
        (a = ya.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              Oa === null ? Bo() : a.alternate === null && St === 0 && (St = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = r),
              n === mo
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([n])) : t.add(n),
                  ic(e, n, r)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              n === mo
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n])
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([n])) : a.add(n)),
                  ic(e, n, r)),
              !1
            );
        }
        throw Error(u(435, a.tag));
      }
      return (ic(e, n, r), Bo(), !1);
    }
    if (Ke)
      return (
        (t = ya.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = r),
            n !== Wu && ((e = Error(u(422), { cause: n })), Vi(_a(e, a))))
          : (n !== Wu && ((t = Error(u(423), { cause: n })), Vi(_a(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (r &= -r),
            (e.lanes |= r),
            (n = _a(n, a)),
            (r = Ls(e.stateNode, n, r)),
            cs(e, r),
            St !== 4 && (St = 2)),
        !1
      );
    var o = Error(u(520), { cause: n });
    if (
      ((o = _a(o, a)),
      ur === null ? (ur = [o]) : ur.push(o),
      St !== 4 && (St = 2),
      t === null)
    )
      return !0;
    ((n = _a(n, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = r & -r),
            (a.lanes |= e),
            (e = Ls(a.stateNode, n, e)),
            cs(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (o = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  ($n === null || !$n.has(o)))))
          )
            return (
              (a.flags |= 65536),
              (r &= -r),
              (a.lanes |= r),
              (r = bm(r)),
              Sm(r, e, a, n),
              cs(a, r),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Us = Error(u(461)),
    Mt = !1;
  function Gt(e, t, a, n) {
    t.child = e === null ? Rd(t, null, a, n) : _l(t, e.child, a, n);
  }
  function xm(e, t, a, n, r) {
    a = a.render;
    var o = t.ref;
    if ("ref" in n) {
      var d = {};
      for (var y in n) y !== "ref" && (d[y] = n[y]);
    } else d = n;
    return (
      Tl(t),
      (n = gs(e, t, a, d, o, r)),
      (y = ys()),
      e !== null && !Mt
        ? (vs(e, t, r), yn(e, t, r))
        : (Ke && y && $u(t), (t.flags |= 1), Gt(e, t, n, r), t.child)
    );
  }
  function Em(e, t, a, n, r) {
    if (e === null) {
      var o = a.type;
      return typeof o == "function" &&
        !Ku(o) &&
        o.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = o), Tm(e, t, o, n, r))
        : ((e = ro(a.type, null, n, t, t.mode, r)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !Vs(e, r))) {
      var d = o.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Gi), a(d, n) && e.ref === t.ref)
      )
        return yn(e, t, r);
    }
    return (
      (t.flags |= 1),
      (e = fn(o, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Tm(e, t, a, n, r) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Gi(o, n) && e.ref === t.ref)
        if (((Mt = !1), (t.pendingProps = n = o), Vs(e, r)))
          (e.flags & 131072) !== 0 && (Mt = !0);
        else return ((t.lanes = e.lanes), yn(e, t, r));
    }
    return js(e, t, a, n, r);
  }
  function Rm(e, t, a, n) {
    var r = n.children,
      o = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }),
      n.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | a : a), e !== null)) {
          for (n = t.child = e.child, r = 0; n !== null; )
            ((r = r | n.lanes | n.childLanes), (n = n.sibling));
          n = r & ~o;
        } else ((n = 0), (t.child = null));
        return Am(e, t, o, a, n);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && co(t, o !== null ? o.cachePool : null),
          o !== null ? _d(t, o) : ds(),
          Cd(t));
      else
        return (
          (n = t.lanes = 536870912),
          Am(e, t, o !== null ? o.baseLanes | a : a, a, n)
        );
    } else
      o !== null
        ? (co(t, o.cachePool), _d(t, o), Fn(), (t.memoizedState = null))
        : (e !== null && co(t, null), ds(), Fn());
    return (Gt(e, t, r, a), t.child);
  }
  function tr(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }),
      t.sibling
    );
  }
  function Am(e, t, a, n, r) {
    var o = rs();
    return (
      (o = o === null ? null : { parent: _t._currentValue, pool: o }),
      (t.memoizedState = { baseLanes: a, cachePool: o }),
      e !== null && co(t, null),
      ds(),
      Cd(t),
      e !== null && ai(e, t, n, !0),
      (t.childLanes = r),
      null
    );
  }
  function _o(e, t) {
    return (
      (t = Mo({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function wm(e, t, a) {
    return (
      _l(t, e.child, null, a),
      (e = _o(t, t.pendingProps)),
      (e.flags |= 2),
      va(t),
      (t.memoizedState = null),
      e
    );
  }
  function l0(e, t, a) {
    var n = t.pendingProps,
      r = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ke) {
        if (n.mode === "hidden")
          return ((e = _o(t, n)), (t.lanes = 536870912), tr(null, e));
        if (
          (hs(t),
          (e = mt)
            ? ((e = Bh(e, Na)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: kn !== null ? { id: $a, overflow: Pa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null
                }),
                (a = sd(e)),
                (a.return = t),
                (t.child = a),
                (Bt = t),
                (mt = null)))
            : (e = null),
          e === null)
        )
          throw Yn(t);
        return ((t.lanes = 536870912), null);
      }
      return _o(t, n);
    }
    var o = e.memoizedState;
    if (o !== null) {
      var d = o.dehydrated;
      if ((hs(t), r))
        if (t.flags & 256) ((t.flags &= -257), (t = wm(e, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(u(558));
      else if (
        (Mt || ai(e, t, a, !1), (r = (a & e.childLanes) !== 0), Mt || r)
      ) {
        if (
          ((n = st),
          n !== null && ((d = T(n, a)), d !== 0 && d !== o.retryLane))
        )
          throw ((o.retryLane = d), bl(e, d), sa(n, e, d), Us);
        (Bo(), (t = wm(e, t, a)));
      } else
        ((e = o.treeContext),
          (mt = Da(d.nextSibling)),
          (Bt = t),
          (Ke = !0),
          (Gn = null),
          (Na = !1),
          e !== null && dd(t, e),
          (t = _o(t, n)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = fn(e.child, { mode: n.mode, children: n.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Co(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(u(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function js(e, t, a, n, r) {
    return (
      Tl(t),
      (a = gs(e, t, a, n, void 0, r)),
      (n = ys()),
      e !== null && !Mt
        ? (vs(e, t, r), yn(e, t, r))
        : (Ke && n && $u(t), (t.flags |= 1), Gt(e, t, a, r), t.child)
    );
  }
  function _m(e, t, a, n, r, o) {
    return (
      Tl(t),
      (t.updateQueue = null),
      (a = Nd(t, n, a, r)),
      Md(e),
      (n = ys()),
      e !== null && !Mt
        ? (vs(e, t, o), yn(e, t, o))
        : (Ke && n && $u(t), (t.flags |= 1), Gt(e, t, a, o), t.child)
    );
  }
  function Cm(e, t, a, n, r) {
    if ((Tl(t), t.stateNode === null)) {
      var o = Pl,
        d = a.contextType;
      (typeof d == "object" && d !== null && (o = kt(d)),
        (o = new a(n, o)),
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = zs),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = n),
        (o.state = t.memoizedState),
        (o.refs = {}),
        us(t),
        (d = a.contextType),
        (o.context = typeof d == "object" && d !== null ? kt(d) : Pl),
        (o.state = t.memoizedState),
        (d = a.getDerivedStateFromProps),
        typeof d == "function" && (Ds(t, a, d, n), (o.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((d = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          d !== o.state && zs.enqueueReplaceState(o, o.state, null),
          Ii(t, n, o, r),
          Ji(),
          (o.state = t.memoizedState)),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        (n = !0));
    } else if (e === null) {
      o = t.stateNode;
      var y = t.memoizedProps,
        A = Ml(a, y);
      o.props = A;
      var H = o.context,
        V = a.contextType;
      ((d = Pl), typeof V == "object" && V !== null && (d = kt(V)));
      var Q = a.getDerivedStateFromProps;
      ((V =
        typeof Q == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (y = t.pendingProps !== y),
        V ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((y || H !== d) && hm(t, o, n, d)),
        (Vn = !1));
      var B = t.memoizedState;
      ((o.state = B),
        Ii(t, n, o, r),
        Ji(),
        (H = t.memoizedState),
        y || B !== H || Vn
          ? (typeof Q == "function" && (Ds(t, a, Q, n), (H = t.memoizedState)),
            (A = Vn || mm(t, a, A, n, B, H, d))
              ? (V ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = H)),
            (o.props = n),
            (o.state = H),
            (o.context = d),
            (n = A))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1)));
    } else {
      ((o = t.stateNode),
        ss(e, t),
        (d = t.memoizedProps),
        (V = Ml(a, d)),
        (o.props = V),
        (Q = t.pendingProps),
        (B = o.context),
        (H = a.contextType),
        (A = Pl),
        typeof H == "object" && H !== null && (A = kt(H)),
        (y = a.getDerivedStateFromProps),
        (H =
          typeof y == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((d !== Q || B !== A) && hm(t, o, n, A)),
        (Vn = !1),
        (B = t.memoizedState),
        (o.state = B),
        Ii(t, n, o, r),
        Ji());
      var G = t.memoizedState;
      d !== Q ||
      B !== G ||
      Vn ||
      (e !== null && e.dependencies !== null && uo(e.dependencies))
        ? (typeof y == "function" && (Ds(t, a, y, n), (G = t.memoizedState)),
          (V =
            Vn ||
            mm(t, a, V, n, B, G, A) ||
            (e !== null && e.dependencies !== null && uo(e.dependencies)))
            ? (H ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(n, G, A),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(n, G, A)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (d === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = G)),
          (o.props = n),
          (o.state = G),
          (o.context = A),
          (n = V))
        : (typeof o.componentDidUpdate != "function" ||
            (d === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return (
      (o = n),
      Co(e, t),
      (n = (t.flags & 128) !== 0),
      o || n
        ? ((o = t.stateNode),
          (a =
            n && typeof a.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = _l(t, e.child, null, r)),
              (t.child = _l(t, null, a, r)))
            : Gt(e, t, a, r),
          (t.memoizedState = o.state),
          (e = t.child))
        : (e = yn(e, t, r)),
      e
    );
  }
  function Mm(e, t, a, n) {
    return (xl(), (t.flags |= 256), Gt(e, t, a, n), t.child);
  }
  var Hs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Bs(e) {
    return { baseLanes: e, cachePool: vd() };
  }
  function ks(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= Sa), e);
  }
  function Nm(e, t, a) {
    var n = t.pendingProps,
      r = !1,
      o = (t.flags & 128) !== 0,
      d;
    if (
      ((d = o) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (Tt.current & 2) !== 0),
      d && ((r = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ke) {
        if (
          (r ? Zn(t) : Fn(),
          (e = mt)
            ? ((e = Bh(e, Na)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: kn !== null ? { id: $a, overflow: Pa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null
                }),
                (a = sd(e)),
                (a.return = t),
                (t.child = a),
                (Bt = t),
                (mt = null)))
            : (e = null),
          e === null)
        )
          throw Yn(t);
        return (xc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var y = n.children;
      return (
        (n = n.fallback),
        r
          ? (Fn(),
            (r = t.mode),
            (y = Mo({ mode: "hidden", children: y }, r)),
            (n = Sl(n, r, a, null)),
            (y.return = t),
            (n.return = t),
            (y.sibling = n),
            (t.child = y),
            (n = t.child),
            (n.memoizedState = Bs(a)),
            (n.childLanes = ks(e, d, a)),
            (t.memoizedState = Hs),
            tr(null, n))
          : (Zn(t), Gs(t, y))
      );
    }
    var A = e.memoizedState;
    if (A !== null && ((y = A.dehydrated), y !== null)) {
      if (o)
        t.flags & 256
          ? (Zn(t), (t.flags &= -257), (t = Ys(e, t, a)))
          : t.memoizedState !== null
            ? (Fn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Fn(),
              (y = n.fallback),
              (r = t.mode),
              (n = Mo({ mode: "visible", children: n.children }, r)),
              (y = Sl(y, r, a, null)),
              (y.flags |= 2),
              (n.return = t),
              (y.return = t),
              (n.sibling = y),
              (t.child = n),
              _l(t, e.child, null, a),
              (n = t.child),
              (n.memoizedState = Bs(a)),
              (n.childLanes = ks(e, d, a)),
              (t.memoizedState = Hs),
              (t = tr(null, n)));
      else if ((Zn(t), xc(y))) {
        if (((d = y.nextSibling && y.nextSibling.dataset), d)) var H = d.dgst;
        ((d = H),
          (n = Error(u(419))),
          (n.stack = ""),
          (n.digest = d),
          Vi({ value: n, source: null, stack: null }),
          (t = Ys(e, t, a)));
      } else if (
        (Mt || ai(e, t, a, !1), (d = (a & e.childLanes) !== 0), Mt || d)
      ) {
        if (
          ((d = st),
          d !== null && ((n = T(d, a)), n !== 0 && n !== A.retryLane))
        )
          throw ((A.retryLane = n), bl(e, n), sa(d, e, n), Us);
        (Sc(y) || Bo(), (t = Ys(e, t, a)));
      } else
        Sc(y)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = A.treeContext),
            (mt = Da(y.nextSibling)),
            (Bt = t),
            (Ke = !0),
            (Gn = null),
            (Na = !1),
            e !== null && dd(t, e),
            (t = Gs(t, n.children)),
            (t.flags |= 4096));
      return t;
    }
    return r
      ? (Fn(),
        (y = n.fallback),
        (r = t.mode),
        (A = e.child),
        (H = A.sibling),
        (n = fn(A, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = A.subtreeFlags & 65011712),
        H !== null ? (y = fn(H, y)) : ((y = Sl(y, r, a, null)), (y.flags |= 2)),
        (y.return = t),
        (n.return = t),
        (n.sibling = y),
        (t.child = n),
        tr(null, n),
        (n = t.child),
        (y = e.child.memoizedState),
        y === null
          ? (y = Bs(a))
          : ((r = y.cachePool),
            r !== null
              ? ((A = _t._currentValue),
                (r = r.parent !== A ? { parent: A, pool: A } : r))
              : (r = vd()),
            (y = { baseLanes: y.baseLanes | a, cachePool: r })),
        (n.memoizedState = y),
        (n.childLanes = ks(e, d, a)),
        (t.memoizedState = Hs),
        tr(e.child, n))
      : (Zn(t),
        (a = e.child),
        (e = a.sibling),
        (a = fn(a, { mode: "visible", children: n.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Gs(e, t) {
    return (
      (t = Mo({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Mo(e, t) {
    return ((e = ga(22, e, null, t)), (e.lanes = 0), e);
  }
  function Ys(e, t, a) {
    return (
      _l(t, e.child, null, a),
      (e = Gs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Om(e, t, a) {
    e.lanes |= t;
    var n = e.alternate;
    (n !== null && (n.lanes |= t), as(e.return, t, a));
  }
  function qs(e, t, a, n, r, o) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: a,
          tailMode: r,
          treeForkCount: o
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = n),
        (d.tail = a),
        (d.tailMode = r),
        (d.treeForkCount = o));
  }
  function Dm(e, t, a) {
    var n = t.pendingProps,
      r = n.revealOrder,
      o = n.tail;
    n = n.children;
    var d = Tt.current,
      y = (d & 2) !== 0;
    if (
      (y ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
      Z(Tt, d),
      Gt(e, t, n, a),
      (n = Ke ? qi : 0),
      !y && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Om(e, a, t);
        else if (e.tag === 19) Om(e, a, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (r) {
      case "forwards":
        for (a = t.child, r = null; a !== null; )
          ((e = a.alternate),
            e !== null && yo(e) === null && (r = a),
            (a = a.sibling));
        ((a = r),
          a === null
            ? ((r = t.child), (t.child = null))
            : ((r = a.sibling), (a.sibling = null)),
          qs(t, !1, r, a, o, n));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && yo(e) === null)) {
            t.child = r;
            break;
          }
          ((e = r.sibling), (r.sibling = a), (a = r), (r = e));
        }
        qs(t, !0, a, null, o, n);
        break;
      case "together":
        qs(t, !1, null, null, void 0, n);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function yn(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (In |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ai(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, a = fn(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (a = a.sibling = fn(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Vs(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && uo(e)));
  }
  function i0(e, t, a) {
    switch (t.tag) {
      case 3:
        (Je(t, t.stateNode.containerInfo),
          qn(t, _t, e.memoizedState.cache),
          xl());
        break;
      case 27:
      case 5:
        Wt(t);
        break;
      case 4:
        Je(t, t.stateNode.containerInfo);
        break;
      case 10:
        qn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), hs(t), null);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (Zn(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Nm(e, t, a)
              : (Zn(t), (e = yn(e, t, a)), e !== null ? e.sibling : null);
        Zn(t);
        break;
      case 19:
        var r = (e.flags & 128) !== 0;
        if (
          ((n = (a & t.childLanes) !== 0),
          n || (ai(e, t, a, !1), (n = (a & t.childLanes) !== 0)),
          r)
        ) {
          if (n) return Dm(e, t, a);
          t.flags |= 128;
        }
        if (
          ((r = t.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          Z(Tt, Tt.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Rm(e, t, a, t.pendingProps));
      case 24:
        qn(t, _t, e.memoizedState.cache);
    }
    return yn(e, t, a);
  }
  function zm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Mt = !0;
      else {
        if (!Vs(e, a) && (t.flags & 128) === 0) return ((Mt = !1), i0(e, t, a));
        Mt = (e.flags & 131072) !== 0;
      }
    else ((Mt = !1), Ke && (t.flags & 1048576) !== 0 && fd(t, qi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (((e = Al(t.elementType)), (t.type = e), typeof e == "function"))
            Ku(e)
              ? ((n = Ml(e, n)), (t.tag = 1), (t = Cm(null, t, e, n, a)))
              : ((t.tag = 0), (t = js(null, t, e, n, a)));
          else {
            if (e != null) {
              var r = e.$$typeof;
              if (r === ie) {
                ((t.tag = 11), (t = xm(null, t, e, n, a)));
                break e;
              } else if (r === P) {
                ((t.tag = 14), (t = Em(null, t, e, n, a)));
                break e;
              }
            }
            throw ((t = Xe(e) || e), Error(u(306, t, "")));
          }
        }
        return t;
      case 0:
        return js(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((n = t.type), (r = Ml(n, t.pendingProps)), Cm(e, t, n, r, a));
      case 3:
        e: {
          if ((Je(t, t.stateNode.containerInfo), e === null))
            throw Error(u(387));
          n = t.pendingProps;
          var o = t.memoizedState;
          ((r = o.element), ss(e, t), Ii(t, n, null, a));
          var d = t.memoizedState;
          if (
            ((n = d.cache),
            qn(t, _t, n),
            n !== o.cache && ns(t, [_t], a, !0),
            Ji(),
            (n = d.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: n, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              t = Mm(e, t, n, a);
              break e;
            } else if (n !== r) {
              ((r = _a(Error(u(424)), t)), Vi(r), (t = Mm(e, t, n, a)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  mt = Da(e.firstChild),
                  Bt = t,
                  Ke = !0,
                  Gn = null,
                  Na = !0,
                  a = Rd(t, null, n, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((xl(), n === r)) {
              t = yn(e, t, a);
              break e;
            }
            Gt(e, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Co(e, t),
          e === null
            ? (a = Xh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : Ke ||
                ((a = t.type),
                (e = t.pendingProps),
                (n = Qo(de.current).createElement(a)),
                (n[oe] = t),
                (n[le] = e),
                Yt(n, a, e),
                Le(n),
                (t.stateNode = n))
            : (t.memoizedState = Xh(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Wt(t),
          e === null &&
            Ke &&
            ((n = t.stateNode = Yh(t.type, t.pendingProps, de.current)),
            (Bt = t),
            (Na = !0),
            (r = mt),
            tl(t.type) ? ((Ec = r), (mt = Da(n.firstChild))) : (mt = r)),
          Gt(e, t, t.pendingProps.children, a),
          Co(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ke &&
            ((r = n = mt) &&
              ((n = U0(n, t.type, t.pendingProps, Na)),
              n !== null
                ? ((t.stateNode = n),
                  (Bt = t),
                  (mt = Da(n.firstChild)),
                  (Na = !1),
                  (r = !0))
                : (r = !1)),
            r || Yn(t)),
          Wt(t),
          (r = t.type),
          (o = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (n = o.children),
          yc(r, o) ? (n = null) : d !== null && yc(r, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((r = gs(e, t, Iv, null, null, a)), (gr._currentValue = r)),
          Co(e, t),
          Gt(e, t, n, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ke &&
            ((e = a = mt) &&
              ((a = j0(a, t.pendingProps, Na)),
              a !== null
                ? ((t.stateNode = a), (Bt = t), (mt = null), (e = !0))
                : (e = !1)),
            e || Yn(t)),
          null
        );
      case 13:
        return Nm(e, t, a);
      case 4:
        return (
          Je(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = _l(t, null, n, a)) : Gt(e, t, n, a),
          t.child
        );
      case 11:
        return xm(e, t, t.type, t.pendingProps, a);
      case 7:
        return (Gt(e, t, t.pendingProps, a), t.child);
      case 8:
        return (Gt(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Gt(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (n = t.pendingProps),
          qn(t, t.type, n.value),
          Gt(e, t, n.children, a),
          t.child
        );
      case 9:
        return (
          (r = t.type._context),
          (n = t.pendingProps.children),
          Tl(t),
          (r = kt(r)),
          (n = n(r)),
          (t.flags |= 1),
          Gt(e, t, n, a),
          t.child
        );
      case 14:
        return Em(e, t, t.type, t.pendingProps, a);
      case 15:
        return Tm(e, t, t.type, t.pendingProps, a);
      case 19:
        return Dm(e, t, a);
      case 31:
        return l0(e, t, a);
      case 22:
        return Rm(e, t, a, t.pendingProps);
      case 24:
        return (
          Tl(t),
          (n = kt(_t)),
          e === null
            ? ((r = rs()),
              r === null &&
                ((r = st),
                (o = ls()),
                (r.pooledCache = o),
                o.refCount++,
                o !== null && (r.pooledCacheLanes |= a),
                (r = o)),
              (t.memoizedState = { parent: n, cache: r }),
              us(t),
              qn(t, _t, r))
            : ((e.lanes & a) !== 0 && (ss(e, t), Ii(t, null, null, a), Ji()),
              (r = e.memoizedState),
              (o = t.memoizedState),
              r.parent !== n
                ? ((r = { parent: n, cache: n }),
                  (t.memoizedState = r),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = r),
                  qn(t, _t, n))
                : ((n = o.cache),
                  qn(t, _t, n),
                  n !== r.cache && ns(t, [_t], a, !0))),
          Gt(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function vn(e) {
    e.flags |= 4;
  }
  function Xs(e, t, a, n, r) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (r & 335544128) === r))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rh()) e.flags |= 8192;
        else throw ((wl = mo), os);
    } else e.flags &= -16777217;
  }
  function Lm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Jh(t)))
      if (rh()) e.flags |= 8192;
      else throw ((wl = mo), os);
  }
  function No(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Ra() : 536870912), (e.lanes |= t), (hi |= t)));
  }
  function ar(e, t) {
    if (!Ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var n = null; a !== null; )
            (a.alternate !== null && (n = a), (a = a.sibling));
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function ht(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      n = 0;
    if (t)
      for (var r = e.child; r !== null; )
        ((a |= r.lanes | r.childLanes),
          (n |= r.subtreeFlags & 65011712),
          (n |= r.flags & 65011712),
          (r.return = e),
          (r = r.sibling));
    else
      for (r = e.child; r !== null; )
        ((a |= r.lanes | r.childLanes),
          (n |= r.subtreeFlags),
          (n |= r.flags),
          (r.return = e),
          (r = r.sibling));
    return ((e.subtreeFlags |= n), (e.childLanes = a), t);
  }
  function r0(e, t, a) {
    var n = t.pendingProps;
    switch ((Pu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ht(t), null);
      case 1:
        return (ht(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          hn(_t),
          Me(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (ti(t)
              ? vn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), es())),
          ht(t),
          null
        );
      case 26:
        var r = t.type,
          o = t.memoizedState;
        return (
          e === null
            ? (vn(t),
              o !== null ? (ht(t), Lm(t, o)) : (ht(t), Xs(t, r, null, n, a)))
            : o
              ? o !== e.memoizedState
                ? (vn(t), ht(t), Lm(t, o))
                : (ht(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== n && vn(t),
                ht(t),
                Xs(t, r, e, n, a)),
          null
        );
      case 27:
        if (
          (ea(t),
          (a = de.current),
          (r = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== n && vn(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(u(166));
            return (ht(t), null);
          }
          ((e = re.current),
            ti(t) ? md(t) : ((e = Yh(r, n, a)), (t.stateNode = e), vn(t)));
        }
        return (ht(t), null);
      case 5:
        if ((ea(t), (r = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && vn(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(u(166));
            return (ht(t), null);
          }
          if (((o = re.current), ti(t))) md(t);
          else {
            var d = Qo(de.current);
            switch (o) {
              case 1:
                o = d.createElementNS("http://www.w3.org/2000/svg", r);
                break;
              case 2:
                o = d.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                break;
              default:
                switch (r) {
                  case "svg":
                    o = d.createElementNS("http://www.w3.org/2000/svg", r);
                    break;
                  case "math":
                    o = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    ((o = d.createElement("div")),
                      (o.innerHTML = "<script><\/script>"),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case "select":
                    ((o =
                      typeof n.is == "string"
                        ? d.createElement("select", { is: n.is })
                        : d.createElement("select")),
                      n.multiple
                        ? (o.multiple = !0)
                        : n.size && (o.size = n.size));
                    break;
                  default:
                    o =
                      typeof n.is == "string"
                        ? d.createElement(r, { is: n.is })
                        : d.createElement(r);
                }
            }
            ((o[oe] = t), (o[le] = n));
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) o.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t) break e;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            t.stateNode = o;
            e: switch ((Yt(o, r, n), r)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && vn(t);
          }
        }
        return (
          ht(t),
          Xs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && vn(t);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(u(166));
          if (((e = de.current), ti(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (n = null),
              (r = Bt),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  n = r.memoizedProps;
              }
            ((e[oe] = t),
              (e = !!(
                e.nodeValue === a ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                Nh(e.nodeValue, a)
              )),
              e || Yn(t, !0));
          } else
            ((e = Qo(e).createTextNode(n)), (e[oe] = t), (t.stateNode = e));
        }
        return (ht(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = ti(t)), a !== null)) {
            if (e === null) {
              if (!n) throw Error(u(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(u(557));
              e[oe] = t;
            } else
              (xl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ht(t), (e = !1));
          } else
            ((a = es()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0));
          if (!e) return t.flags & 256 ? (va(t), t) : (va(t), null);
          if ((t.flags & 128) !== 0) throw Error(u(558));
        }
        return (ht(t), null);
      case 13:
        if (
          ((n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((r = ti(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!r) throw Error(u(318));
              if (
                ((r = t.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(u(317));
              r[oe] = t;
            } else
              (xl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ht(t), (r = !1));
          } else
            ((r = es()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = r),
              (r = !0));
          if (!r) return t.flags & 256 ? (va(t), t) : (va(t), null);
        }
        return (
          va(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = n !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((n = t.child),
                (r = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (r = n.alternate.memoizedState.cachePool.pool),
                (o = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (o = n.memoizedState.cachePool.pool),
                o !== r && (n.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              No(t, t.updateQueue),
              ht(t),
              null)
        );
      case 4:
        return (Me(), e === null && dc(t.stateNode.containerInfo), ht(t), null);
      case 10:
        return (hn(t.type), ht(t), null);
      case 19:
        if ((Y(Tt), (n = t.memoizedState), n === null)) return (ht(t), null);
        if (((r = (t.flags & 128) !== 0), (o = n.rendering), o === null))
          if (r) ar(n, !1);
          else {
            if (St !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = yo(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      ar(n, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      No(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;
                  )
                    (ud(a, e), (a = a.sibling));
                  return (
                    Z(Tt, (Tt.current & 1) | 2),
                    Ke && dn(t, n.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            n.tail !== null &&
              zt() > Uo &&
              ((t.flags |= 128), (r = !0), ar(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = yo(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                No(t, e),
                ar(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !o.alternate &&
                  !Ke)
              )
                return (ht(t), null);
            } else
              2 * zt() - n.renderingStartTime > Uo &&
                a !== 536870912 &&
                ((t.flags |= 128), (r = !0), ar(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((e = n.last),
              e !== null ? (e.sibling = o) : (t.child = o),
              (n.last = o));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = zt()),
            (e.sibling = null),
            (a = Tt.current),
            Z(Tt, r ? (a & 1) | 2 : a & 1),
            Ke && dn(t, n.treeForkCount),
            e)
          : (ht(t), null);
      case 22:
      case 23:
        return (
          va(t),
          ms(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ht(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ht(t),
          (a = t.updateQueue),
          a !== null && No(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== a && (t.flags |= 2048),
          e !== null && Y(Rl),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          hn(_t),
          ht(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function o0(e, t) {
    switch ((Pu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          hn(_t),
          Me(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ea(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((va(t), t.alternate === null)) throw Error(u(340));
          xl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (va(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          xl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Y(Tt), null);
      case 4:
        return (Me(), null);
      case 10:
        return (hn(t.type), null);
      case 22:
      case 23:
        return (
          va(t),
          ms(),
          e !== null && Y(Rl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (hn(_t), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Um(e, t) {
    switch ((Pu(t), t.tag)) {
      case 3:
        (hn(_t), Me());
        break;
      case 26:
      case 27:
      case 5:
        ea(t);
        break;
      case 4:
        Me();
        break;
      case 31:
        t.memoizedState !== null && va(t);
        break;
      case 13:
        va(t);
        break;
      case 19:
        Y(Tt);
        break;
      case 10:
        hn(t.type);
        break;
      case 22:
      case 23:
        (va(t), ms(), e !== null && Y(Rl));
        break;
      case 24:
        hn(_t);
    }
  }
  function nr(e, t) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var r = n.next;
        a = r;
        do {
          if ((a.tag & e) === e) {
            n = void 0;
            var o = a.create,
              d = a.inst;
            ((n = o()), (d.destroy = n));
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (y) {
      it(t, t.return, y);
    }
  }
  function Kn(e, t, a) {
    try {
      var n = t.updateQueue,
        r = n !== null ? n.lastEffect : null;
      if (r !== null) {
        var o = r.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            var d = n.inst,
              y = d.destroy;
            if (y !== void 0) {
              ((d.destroy = void 0), (r = t));
              var A = a,
                H = y;
              try {
                H();
              } catch (V) {
                it(r, A, V);
              }
            }
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (V) {
      it(t, t.return, V);
    }
  }
  function jm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        wd(t, a);
      } catch (n) {
        it(e, e.return, n);
      }
    }
  }
  function Hm(e, t, a) {
    ((a.props = Ml(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (n) {
      it(e, t, n);
    }
  }
  function lr(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(n)) : (a.current = n);
      }
    } catch (r) {
      it(e, t, r);
    }
  }
  function Wa(e, t) {
    var a = e.ref,
      n = e.refCleanup;
    if (a !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (r) {
          it(e, t, r);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (r) {
          it(e, t, r);
        }
      else a.current = null;
  }
  function Bm(e) {
    var t = e.type,
      a = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && n.focus();
          break e;
        case "img":
          a.src ? (n.src = a.src) : a.srcSet && (n.srcset = a.srcSet);
      }
    } catch (r) {
      it(e, e.return, r);
    }
  }
  function Qs(e, t, a) {
    try {
      var n = e.stateNode;
      (M0(n, e.type, a, t), (n[le] = t));
    } catch (r) {
      it(e, e.return, r);
    }
  }
  function km(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && tl(e.type)) ||
      e.tag === 4
    );
  }
  function Zs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || km(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && tl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Fs(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = sn)));
    else if (
      n !== 4 &&
      (n === 27 && tl(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Fs(e, t, a), e = e.sibling; e !== null; )
        (Fs(e, t, a), (e = e.sibling));
  }
  function Oo(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (
      n !== 4 &&
      (n === 27 && tl(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (Oo(e, t, a), e = e.sibling; e !== null; )
        (Oo(e, t, a), (e = e.sibling));
  }
  function Gm(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var n = e.type, r = t.attributes; r.length; )
        t.removeAttributeNode(r[0]);
      (Yt(t, n, a), (t[oe] = e), (t[le] = a));
    } catch (o) {
      it(e, e.return, o);
    }
  }
  var bn = !1,
    Nt = !1,
    Ks = !1,
    Ym = typeof WeakSet == "function" ? WeakSet : Set,
    jt = null;
  function u0(e, t) {
    if (((e = e.containerInfo), (pc = Po), (e = Wf(e)), Yu(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var r = n.anchorOffset,
              o = n.focusNode;
            n = n.focusOffset;
            try {
              (a.nodeType, o.nodeType);
            } catch {
              a = null;
              break e;
            }
            var d = 0,
              y = -1,
              A = -1,
              H = 0,
              V = 0,
              Q = e,
              B = null;
            t: for (;;) {
              for (
                var G;
                Q !== a || (r !== 0 && Q.nodeType !== 3) || (y = d + r),
                  Q !== o || (n !== 0 && Q.nodeType !== 3) || (A = d + n),
                  Q.nodeType === 3 && (d += Q.nodeValue.length),
                  (G = Q.firstChild) !== null;
              )
                ((B = Q), (Q = G));
              for (;;) {
                if (Q === e) break t;
                if (
                  (B === a && ++H === r && (y = d),
                  B === o && ++V === n && (A = d),
                  (G = Q.nextSibling) !== null)
                )
                  break;
                ((Q = B), (B = Q.parentNode));
              }
              Q = G;
            }
            a = y === -1 || A === -1 ? null : { start: y, end: A };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      gc = { focusedElem: e, selectionRange: a }, Po = !1, jt = t;
      jt !== null;
    )
      if (
        ((t = jt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (jt = e));
      else
        for (; jt !== null; ) {
          switch (((t = jt), (o = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (a = 0; a < e.length; a++)
                  ((r = e[a]), (r.ref.impl = r.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                ((e = void 0),
                  (a = t),
                  (r = o.memoizedProps),
                  (o = o.memoizedState),
                  (n = a.stateNode));
                try {
                  var ye = Ml(a.type, r);
                  ((e = n.getSnapshotBeforeUpdate(ye, o)),
                    (n.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Ce) {
                  it(a, a.return, Ce);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  bc(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (jt = e));
            break;
          }
          jt = t.return;
        }
  }
  function qm(e, t, a) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (xn(e, a), n & 4 && nr(5, a));
        break;
      case 1:
        if ((xn(e, a), n & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              it(a, a.return, d);
            }
          else {
            var r = Ml(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              it(a, a.return, d);
            }
          }
        (n & 64 && jm(a), n & 512 && lr(a, a.return));
        break;
      case 3:
        if ((xn(e, a), n & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            wd(e, t);
          } catch (d) {
            it(a, a.return, d);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Gm(a);
      case 26:
      case 5:
        (xn(e, a), t === null && n & 4 && Bm(a), n & 512 && lr(a, a.return));
        break;
      case 12:
        xn(e, a);
        break;
      case 31:
        (xn(e, a), n & 4 && Qm(e, a));
        break;
      case 13:
        (xn(e, a),
          n & 4 && Zm(e, a),
          n & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = y0.bind(null, a)), H0(e, a)))));
        break;
      case 22:
        if (((n = a.memoizedState !== null || bn), !n)) {
          ((t = (t !== null && t.memoizedState !== null) || Nt), (r = bn));
          var o = Nt;
          ((bn = n),
            (Nt = t) && !o ? En(e, a, (a.subtreeFlags & 8772) !== 0) : xn(e, a),
            (bn = r),
            (Nt = o));
        }
        break;
      case 30:
        break;
      default:
        xn(e, a);
    }
  }
  function Vm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Vm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && ue(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var pt = null,
    ia = !1;
  function Sn(e, t, a) {
    for (a = a.child; a !== null; ) (Xm(e, t, a), (a = a.sibling));
  }
  function Xm(e, t, a) {
    if (At && typeof At.onCommitFiberUnmount == "function")
      try {
        At.onCommitFiberUnmount(na, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Nt || Wa(a, t),
          Sn(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Nt || Wa(a, t);
        var n = pt,
          r = ia;
        (tl(a.type) && ((pt = a.stateNode), (ia = !1)),
          Sn(e, t, a),
          mr(a.stateNode),
          (pt = n),
          (ia = r));
        break;
      case 5:
        Nt || Wa(a, t);
      case 6:
        if (
          ((n = pt),
          (r = ia),
          (pt = null),
          Sn(e, t, a),
          (pt = n),
          (ia = r),
          pt !== null)
        )
          if (ia)
            try {
              (pt.nodeType === 9
                ? pt.body
                : pt.nodeName === "HTML"
                  ? pt.ownerDocument.body
                  : pt
              ).removeChild(a.stateNode);
            } catch (o) {
              it(a, t, o);
            }
          else
            try {
              pt.removeChild(a.stateNode);
            } catch (o) {
              it(a, t, o);
            }
        break;
      case 18:
        pt !== null &&
          (ia
            ? ((e = pt),
              jh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode
              ),
              Ei(e))
            : jh(pt, a.stateNode));
        break;
      case 4:
        ((n = pt),
          (r = ia),
          (pt = a.stateNode.containerInfo),
          (ia = !0),
          Sn(e, t, a),
          (pt = n),
          (ia = r));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Kn(2, a, t), Nt || Kn(4, a, t), Sn(e, t, a));
        break;
      case 1:
        (Nt ||
          (Wa(a, t),
          (n = a.stateNode),
          typeof n.componentWillUnmount == "function" && Hm(a, t, n)),
          Sn(e, t, a));
        break;
      case 21:
        Sn(e, t, a);
        break;
      case 22:
        ((Nt = (n = Nt) || a.memoizedState !== null), Sn(e, t, a), (Nt = n));
        break;
      default:
        Sn(e, t, a);
    }
  }
  function Qm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ei(e);
      } catch (a) {
        it(t, t.return, a);
      }
    }
  }
  function Zm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ei(e);
      } catch (a) {
        it(t, t.return, a);
      }
  }
  function s0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Ym()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Ym()),
          t
        );
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Do(e, t) {
    var a = s0(e);
    t.forEach(function (n) {
      if (!a.has(n)) {
        a.add(n);
        var r = v0.bind(null, e, n);
        n.then(r, r);
      }
    });
  }
  function ra(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var r = a[n],
          o = e,
          d = t,
          y = d;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (tl(y.type)) {
                ((pt = y.stateNode), (ia = !1));
                break e;
              }
              break;
            case 5:
              ((pt = y.stateNode), (ia = !1));
              break e;
            case 3:
            case 4:
              ((pt = y.stateNode.containerInfo), (ia = !0));
              break e;
          }
          y = y.return;
        }
        if (pt === null) throw Error(u(160));
        (Xm(o, d, r),
          (pt = null),
          (ia = !1),
          (o = r.alternate),
          o !== null && (o.return = null),
          (r.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Fm(t, e), (t = t.sibling));
  }
  var Xa = null;
  function Fm(e, t) {
    var a = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ra(t, e),
          oa(e),
          n & 4 && (Kn(3, e, e.return), nr(3, e), Kn(5, e, e.return)));
        break;
      case 1:
        (ra(t, e),
          oa(e),
          n & 512 && (Nt || a === null || Wa(a, a.return)),
          n & 64 &&
            bn &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? n : a.concat(n))))));
        break;
      case 26:
        var r = Xa;
        if (
          (ra(t, e),
          oa(e),
          n & 512 && (Nt || a === null || Wa(a, a.return)),
          n & 4)
        ) {
          var o = a !== null ? a.memoizedState : null;
          if (((n = e.memoizedState), a === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  ((n = e.type),
                    (a = e.memoizedProps),
                    (r = r.ownerDocument || r));
                  t: switch (n) {
                    case "title":
                      ((o = r.getElementsByTagName("title")[0]),
                        (!o ||
                          o[je] ||
                          o[oe] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = r.createElement(n)),
                          r.head.insertBefore(
                            o,
                            r.querySelector("head > title")
                          )),
                        Yt(o, n, a),
                        (o[oe] = e),
                        Le(o),
                        (n = o));
                      break e;
                    case "link":
                      var d = Fh("link", "href", r).get(n + (a.href || ""));
                      if (d) {
                        for (var y = 0; y < d.length; y++)
                          if (
                            ((o = d[y]),
                            o.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              o.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              o.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              o.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            d.splice(y, 1);
                            break t;
                          }
                      }
                      ((o = r.createElement(n)),
                        Yt(o, n, a),
                        r.head.appendChild(o));
                      break;
                    case "meta":
                      if (
                        (d = Fh("meta", "content", r).get(
                          n + (a.content || "")
                        ))
                      ) {
                        for (y = 0; y < d.length; y++)
                          if (
                            ((o = d[y]),
                            o.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              o.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              o.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              o.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            d.splice(y, 1);
                            break t;
                          }
                      }
                      ((o = r.createElement(n)),
                        Yt(o, n, a),
                        r.head.appendChild(o));
                      break;
                    default:
                      throw Error(u(468, n));
                  }
                  ((o[oe] = e), Le(o), (n = o));
                }
                e.stateNode = n;
              } else Kh(r, e.type, e.stateNode);
            else e.stateNode = Zh(r, n, e.memoizedProps);
          else
            o !== n
              ? (o === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : o.count--,
                n === null
                  ? Kh(r, e.type, e.stateNode)
                  : Zh(r, n, e.memoizedProps))
              : n === null &&
                e.stateNode !== null &&
                Qs(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (ra(t, e),
          oa(e),
          n & 512 && (Nt || a === null || Wa(a, a.return)),
          a !== null && n & 4 && Qs(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (ra(t, e),
          oa(e),
          n & 512 && (Nt || a === null || Wa(a, a.return)),
          e.flags & 32)
        ) {
          r = e.stateNode;
          try {
            Ql(r, "");
          } catch (ye) {
            it(e, e.return, ye);
          }
        }
        (n & 4 &&
          e.stateNode != null &&
          ((r = e.memoizedProps), Qs(e, r, a !== null ? a.memoizedProps : r)),
          n & 1024 && (Ks = !0));
        break;
      case 6:
        if ((ra(t, e), oa(e), n & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          ((n = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = n;
          } catch (ye) {
            it(e, e.return, ye);
          }
        }
        break;
      case 3:
        if (
          ((Ko = null),
          (r = Xa),
          (Xa = Zo(t.containerInfo)),
          ra(t, e),
          (Xa = r),
          oa(e),
          n & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Ei(t.containerInfo);
          } catch (ye) {
            it(e, e.return, ye);
          }
        Ks && ((Ks = !1), Km(e));
        break;
      case 4:
        ((n = Xa),
          (Xa = Zo(e.stateNode.containerInfo)),
          ra(t, e),
          oa(e),
          (Xa = n));
        break;
      case 12:
        (ra(t, e), oa(e));
        break;
      case 31:
        (ra(t, e),
          oa(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), Do(e, n))));
        break;
      case 13:
        (ra(t, e),
          oa(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Lo = zt()),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), Do(e, n))));
        break;
      case 22:
        r = e.memoizedState !== null;
        var A = a !== null && a.memoizedState !== null,
          H = bn,
          V = Nt;
        if (
          ((bn = H || r),
          (Nt = V || A),
          ra(t, e),
          (Nt = V),
          (bn = H),
          oa(e),
          n & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = r ? t._visibility & -2 : t._visibility | 1,
              r && (a === null || A || bn || Nt || Nl(e)),
              a = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                A = a = t;
                try {
                  if (((o = A.stateNode), r))
                    ((d = o.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    y = A.stateNode;
                    var Q = A.memoizedProps.style,
                      B =
                        Q != null && Q.hasOwnProperty("display")
                          ? Q.display
                          : null;
                    y.style.display =
                      B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (ye) {
                  it(A, A.return, ye);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                A = t;
                try {
                  A.stateNode.nodeValue = r ? "" : A.memoizedProps;
                } catch (ye) {
                  it(A, A.return, ye);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                A = t;
                try {
                  var G = A.stateNode;
                  r ? Hh(G, !0) : Hh(A.stateNode, !1);
                } catch (ye) {
                  it(A, A.return, ye);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        n & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((a = n.retryQueue),
            a !== null && ((n.retryQueue = null), Do(e, a))));
        break;
      case 19:
        (ra(t, e),
          oa(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), Do(e, n))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ra(t, e), oa(e));
    }
  }
  function oa(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, n = e.return; n !== null; ) {
          if (km(n)) {
            a = n;
            break;
          }
          n = n.return;
        }
        if (a == null) throw Error(u(160));
        switch (a.tag) {
          case 27:
            var r = a.stateNode,
              o = Zs(e);
            Oo(e, o, r);
            break;
          case 5:
            var d = a.stateNode;
            a.flags & 32 && (Ql(d, ""), (a.flags &= -33));
            var y = Zs(e);
            Oo(e, y, d);
            break;
          case 3:
          case 4:
            var A = a.stateNode.containerInfo,
              H = Zs(e);
            Fs(e, H, A);
            break;
          default:
            throw Error(u(161));
        }
      } catch (V) {
        it(e, e.return, V);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Km(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Km(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function xn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (qm(e, t.alternate, t), (t = t.sibling));
  }
  function Nl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Kn(4, t, t.return), Nl(t));
          break;
        case 1:
          Wa(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Hm(t, t.return, a),
            Nl(t));
          break;
        case 27:
          mr(t.stateNode);
        case 26:
        case 5:
          (Wa(t, t.return), Nl(t));
          break;
        case 22:
          t.memoizedState === null && Nl(t);
          break;
        case 30:
          Nl(t);
          break;
        default:
          Nl(t);
      }
      e = e.sibling;
    }
  }
  function En(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        r = e,
        o = t,
        d = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (En(r, o, a), nr(4, o));
          break;
        case 1:
          if (
            (En(r, o, a),
            (n = o),
            (r = n.stateNode),
            typeof r.componentDidMount == "function")
          )
            try {
              r.componentDidMount();
            } catch (H) {
              it(n, n.return, H);
            }
          if (((n = o), (r = n.updateQueue), r !== null)) {
            var y = n.stateNode;
            try {
              var A = r.shared.hiddenCallbacks;
              if (A !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < A.length; r++)
                  Ad(A[r], y);
            } catch (H) {
              it(n, n.return, H);
            }
          }
          (a && d & 64 && jm(o), lr(o, o.return));
          break;
        case 27:
          Gm(o);
        case 26:
        case 5:
          (En(r, o, a), a && n === null && d & 4 && Bm(o), lr(o, o.return));
          break;
        case 12:
          En(r, o, a);
          break;
        case 31:
          (En(r, o, a), a && d & 4 && Qm(r, o));
          break;
        case 13:
          (En(r, o, a), a && d & 4 && Zm(r, o));
          break;
        case 22:
          (o.memoizedState === null && En(r, o, a), lr(o, o.return));
          break;
        case 30:
          break;
        default:
          En(r, o, a);
      }
      t = t.sibling;
    }
  }
  function Js(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Xi(a)));
  }
  function Is(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Xi(e)));
  }
  function Qa(e, t, a, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Jm(e, t, a, n), (t = t.sibling));
  }
  function Jm(e, t, a, n) {
    var r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Qa(e, t, a, n), r & 2048 && nr(9, t));
        break;
      case 1:
        Qa(e, t, a, n);
        break;
      case 3:
        (Qa(e, t, a, n),
          r & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Xi(e))));
        break;
      case 12:
        if (r & 2048) {
          (Qa(e, t, a, n), (e = t.stateNode));
          try {
            var o = t.memoizedProps,
              d = o.id,
              y = o.onPostCommit;
            typeof y == "function" &&
              y(
                d,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (A) {
            it(t, t.return, A);
          }
        } else Qa(e, t, a, n);
        break;
      case 31:
        Qa(e, t, a, n);
        break;
      case 13:
        Qa(e, t, a, n);
        break;
      case 23:
        break;
      case 22:
        ((o = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? o._visibility & 2
              ? Qa(e, t, a, n)
              : ir(e, t)
            : o._visibility & 2
              ? Qa(e, t, a, n)
              : ((o._visibility |= 2),
                fi(e, t, a, n, (t.subtreeFlags & 10256) !== 0 || !1)),
          r & 2048 && Js(d, t));
        break;
      case 24:
        (Qa(e, t, a, n), r & 2048 && Is(t.alternate, t));
        break;
      default:
        Qa(e, t, a, n);
    }
  }
  function fi(e, t, a, n, r) {
    for (
      r = r && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var o = e,
        d = t,
        y = a,
        A = n,
        H = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (fi(o, d, y, A, r), nr(8, d));
          break;
        case 23:
          break;
        case 22:
          var V = d.stateNode;
          (d.memoizedState !== null
            ? V._visibility & 2
              ? fi(o, d, y, A, r)
              : ir(o, d)
            : ((V._visibility |= 2), fi(o, d, y, A, r)),
            r && H & 2048 && Js(d.alternate, d));
          break;
        case 24:
          (fi(o, d, y, A, r), r && H & 2048 && Is(d.alternate, d));
          break;
        default:
          fi(o, d, y, A, r);
      }
      t = t.sibling;
    }
  }
  function ir(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          n = t,
          r = n.flags;
        switch (n.tag) {
          case 22:
            (ir(a, n), r & 2048 && Js(n.alternate, n));
            break;
          case 24:
            (ir(a, n), r & 2048 && Is(n.alternate, n));
            break;
          default:
            ir(a, n);
        }
        t = t.sibling;
      }
  }
  var rr = 8192;
  function di(e, t, a) {
    if (e.subtreeFlags & rr)
      for (e = e.child; e !== null; ) (Im(e, t, a), (e = e.sibling));
  }
  function Im(e, t, a) {
    switch (e.tag) {
      case 26:
        (di(e, t, a),
          e.flags & rr &&
            e.memoizedState !== null &&
            J0(a, Xa, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        di(e, t, a);
        break;
      case 3:
      case 4:
        var n = Xa;
        ((Xa = Zo(e.stateNode.containerInfo)), di(e, t, a), (Xa = n));
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = rr), (rr = 16777216), di(e, t, a), (rr = n))
            : di(e, t, a));
        break;
      default:
        di(e, t, a);
    }
  }
  function $m(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function or(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          ((jt = n), Wm(n, e));
        }
      $m(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Pm(e), (e = e.sibling));
  }
  function Pm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (or(e), e.flags & 2048 && Kn(9, e, e.return));
        break;
      case 3:
        or(e);
        break;
      case 12:
        or(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), zo(e))
          : or(e);
        break;
      default:
        or(e);
    }
  }
  function zo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          ((jt = n), Wm(n, e));
        }
      $m(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Kn(8, t, t.return), zo(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), zo(t)));
          break;
        default:
          zo(t);
      }
      e = e.sibling;
    }
  }
  function Wm(e, t) {
    for (; jt !== null; ) {
      var a = jt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Kn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var n = a.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Xi(a.memoizedState.cache);
      }
      if (((n = a.child), n !== null)) ((n.return = a), (jt = n));
      else
        e: for (a = e; jt !== null; ) {
          n = jt;
          var r = n.sibling,
            o = n.return;
          if ((Vm(n), n === a)) {
            jt = null;
            break e;
          }
          if (r !== null) {
            ((r.return = o), (jt = r));
            break e;
          }
          jt = o;
        }
    }
  }
  var c0 = {
      getCacheForType: function (e) {
        var t = kt(_t),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return kt(_t).controller.signal;
      }
    },
    f0 = typeof WeakMap == "function" ? WeakMap : Map,
    et = 0,
    st = null,
    qe = null,
    Qe = 0,
    lt = 0,
    ba = null,
    Jn = !1,
    mi = !1,
    $s = !1,
    Tn = 0,
    St = 0,
    In = 0,
    Ol = 0,
    Ps = 0,
    Sa = 0,
    hi = 0,
    ur = null,
    ua = null,
    Ws = !1,
    Lo = 0,
    eh = 0,
    Uo = 1 / 0,
    jo = null,
    $n = null,
    Lt = 0,
    Pn = null,
    pi = null,
    Rn = 0,
    ec = 0,
    tc = null,
    th = null,
    sr = 0,
    ac = null;
  function xa() {
    return (et & 2) !== 0 && Qe !== 0 ? Qe & -Qe : z.T !== null ? uc() : K();
  }
  function ah() {
    if (Sa === 0)
      if ((Qe & 536870912) === 0 || Ke) {
        var e = ma;
        ((ma <<= 1), (ma & 3932160) === 0 && (ma = 262144), (Sa = e));
      } else Sa = 536870912;
    return ((e = ya.current), e !== null && (e.flags |= 32), Sa);
  }
  function sa(e, t, a) {
    (((e === st && (lt === 2 || lt === 9)) || e.cancelPendingCommit !== null) &&
      (gi(e, 0), Wn(e, Qe, Sa, !1)),
      ha(e, a),
      ((et & 2) === 0 || e !== st) &&
        (e === st &&
          ((et & 2) === 0 && (Ol |= a), St === 4 && Wn(e, Qe, Sa, !1)),
        en(e)));
  }
  function nh(e, t, a) {
    if ((et & 6) !== 0) throw Error(u(327));
    var n = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Ka(e, t),
      r = n ? h0(e, t) : lc(e, t, !0),
      o = n;
    do {
      if (r === 0) {
        mi && !n && Wn(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), o && !d0(a))) {
          ((r = lc(e, t, !1)), (o = !1));
          continue;
        }
        if (r === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var d = 0;
          else
            ((d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            t = d;
            e: {
              var y = e;
              r = ur;
              var A = y.current.memoizedState.isDehydrated;
              if ((A && (gi(y, d).flags |= 256), (d = lc(y, d, !1)), d !== 2)) {
                if ($s && !A) {
                  ((y.errorRecoveryDisabledLanes |= o), (Ol |= o), (r = 4));
                  break e;
                }
                ((o = ua),
                  (ua = r),
                  o !== null &&
                    (ua === null ? (ua = o) : ua.push.apply(ua, o)));
              }
              r = d;
            }
            if (((o = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          (gi(e, 0), Wn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((n = e), (o = r), o)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Wn(n, t, Sa, !Jn);
              break e;
            case 2:
              ua = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && ((r = Lo + 300 - zt()), 10 < r)) {
            if ((Wn(n, t, Sa, !Jn), jn(n, 0, !0) !== 0)) break e;
            ((Rn = t),
              (n.timeoutHandle = Lh(
                lh.bind(
                  null,
                  n,
                  a,
                  ua,
                  jo,
                  Ws,
                  t,
                  Sa,
                  Ol,
                  hi,
                  Jn,
                  o,
                  "Throttled",
                  -0,
                  0
                ),
                r
              )));
            break e;
          }
          lh(n, a, ua, jo, Ws, t, Sa, Ol, hi, Jn, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    en(e);
  }
  function lh(e, t, a, n, r, o, d, y, A, H, V, Q, B, G) {
    if (
      ((e.timeoutHandle = -1),
      (Q = t.subtreeFlags),
      Q & 8192 || (Q & 16785408) === 16785408)
    ) {
      ((Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sn
      }),
        Im(t, o, Q));
      var ye =
        (o & 62914560) === o ? Lo - zt() : (o & 4194048) === o ? eh - zt() : 0;
      if (((ye = I0(Q, ye)), ye !== null)) {
        ((Rn = o),
          (e.cancelPendingCommit = ye(
            dh.bind(null, e, t, o, a, n, r, d, y, A, V, Q, null, B, G)
          )),
          Wn(e, o, d, !H));
        return;
      }
    }
    dh(e, t, o, a, n, r, d, y, A);
  }
  function d0(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var n = 0; n < a.length; n++) {
          var r = a[n],
            o = r.getSnapshot;
          r = r.value;
          try {
            if (!pa(o(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Wn(e, t, a, n) {
    ((t &= ~Ps),
      (t &= ~Ol),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes));
    for (var r = t; 0 < r; ) {
      var o = 31 - gt(r),
        d = 1 << o;
      ((n[o] = -1), (r &= ~d));
    }
    a !== 0 && hl(e, a, t);
  }
  function Ho() {
    return (et & 6) === 0 ? (cr(0), !1) : !0;
  }
  function nc() {
    if (qe !== null) {
      if (lt === 0) var e = qe.return;
      else ((e = qe), (mn = El = null), bs(e), (ri = null), (Zi = 0), (e = qe));
      for (; e !== null; ) (Um(e.alternate, e), (e = e.return));
      qe = null;
    }
  }
  function gi(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), D0(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (Rn = 0),
      nc(),
      (st = e),
      (qe = a = fn(e.current, null)),
      (Qe = t),
      (lt = 0),
      (ba = null),
      (Jn = !1),
      (mi = Ka(e, t)),
      ($s = !1),
      (hi = Sa = Ps = Ol = In = St = 0),
      (ua = ur = null),
      (Ws = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var r = 31 - gt(n),
          o = 1 << r;
        ((t |= e[r]), (n &= ~o));
      }
    return ((Tn = t), no(), a);
  }
  function ih(e, t) {
    ((Ue = null),
      (z.H = er),
      t === ii || t === fo
        ? ((t = xd()), (lt = 3))
        : t === os
          ? ((t = xd()), (lt = 4))
          : (lt =
              t === Us
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (ba = t),
      qe === null && ((St = 1), wo(e, _a(t, e.current))));
  }
  function rh() {
    var e = ya.current;
    return e === null
      ? !0
      : (Qe & 4194048) === Qe
        ? Oa === null
        : (Qe & 62914560) === Qe || (Qe & 536870912) !== 0
          ? e === Oa
          : !1;
  }
  function oh() {
    var e = z.H;
    return ((z.H = er), e === null ? er : e);
  }
  function uh() {
    var e = z.A;
    return ((z.A = c0), e);
  }
  function Bo() {
    ((St = 4),
      Jn || ((Qe & 4194048) !== Qe && ya.current !== null) || (mi = !0),
      ((In & 134217727) === 0 && (Ol & 134217727) === 0) ||
        st === null ||
        Wn(st, Qe, Sa, !1));
  }
  function lc(e, t, a) {
    var n = et;
    et |= 2;
    var r = oh(),
      o = uh();
    ((st !== e || Qe !== t) && ((jo = null), gi(e, t)), (t = !1));
    var d = St;
    e: do
      try {
        if (lt !== 0 && qe !== null) {
          var y = qe,
            A = ba;
          switch (lt) {
            case 8:
              (nc(), (d = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ya.current === null && (t = !0);
              var H = lt;
              if (((lt = 0), (ba = null), yi(e, y, A, H), a && mi)) {
                d = 0;
                break e;
              }
              break;
            default:
              ((H = lt), (lt = 0), (ba = null), yi(e, y, A, H));
          }
        }
        (m0(), (d = St));
        break;
      } catch (V) {
        ih(e, V);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (mn = El = null),
      (et = n),
      (z.H = r),
      (z.A = o),
      qe === null && ((st = null), (Qe = 0), no()),
      d
    );
  }
  function m0() {
    for (; qe !== null; ) sh(qe);
  }
  function h0(e, t) {
    var a = et;
    et |= 2;
    var n = oh(),
      r = uh();
    st !== e || Qe !== t
      ? ((jo = null), (Uo = zt() + 500), gi(e, t))
      : (mi = Ka(e, t));
    e: do
      try {
        if (lt !== 0 && qe !== null) {
          t = qe;
          var o = ba;
          t: switch (lt) {
            case 1:
              ((lt = 0), (ba = null), yi(e, t, o, 1));
              break;
            case 2:
            case 9:
              if (bd(o)) {
                ((lt = 0), (ba = null), ch(t));
                break;
              }
              ((t = function () {
                ((lt !== 2 && lt !== 9) || st !== e || (lt = 7), en(e));
              }),
                o.then(t, t));
              break e;
            case 3:
              lt = 7;
              break e;
            case 4:
              lt = 5;
              break e;
            case 7:
              bd(o)
                ? ((lt = 0), (ba = null), ch(t))
                : ((lt = 0), (ba = null), yi(e, t, o, 7));
              break;
            case 5:
              var d = null;
              switch (qe.tag) {
                case 26:
                  d = qe.memoizedState;
                case 5:
                case 27:
                  var y = qe;
                  if (d ? Jh(d) : y.stateNode.complete) {
                    ((lt = 0), (ba = null));
                    var A = y.sibling;
                    if (A !== null) qe = A;
                    else {
                      var H = y.return;
                      H !== null ? ((qe = H), ko(H)) : (qe = null);
                    }
                    break t;
                  }
              }
              ((lt = 0), (ba = null), yi(e, t, o, 5));
              break;
            case 6:
              ((lt = 0), (ba = null), yi(e, t, o, 6));
              break;
            case 8:
              (nc(), (St = 6));
              break e;
            default:
              throw Error(u(462));
          }
        }
        p0();
        break;
      } catch (V) {
        ih(e, V);
      }
    while (!0);
    return (
      (mn = El = null),
      (z.H = n),
      (z.A = r),
      (et = a),
      qe !== null ? 0 : ((st = null), (Qe = 0), no(), St)
    );
  }
  function p0() {
    for (; qe !== null && !kl(); ) sh(qe);
  }
  function sh(e) {
    var t = zm(e.alternate, e, Tn);
    ((e.memoizedProps = e.pendingProps), t === null ? ko(e) : (qe = t));
  }
  function ch(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _m(a, t, t.pendingProps, t.type, void 0, Qe);
        break;
      case 11:
        t = _m(a, t, t.pendingProps, t.type.render, t.ref, Qe);
        break;
      case 5:
        bs(t);
      default:
        (Um(a, t), (t = qe = ud(t, Tn)), (t = zm(a, t, Tn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ko(e) : (qe = t));
  }
  function yi(e, t, a, n) {
    ((mn = El = null), bs(t), (ri = null), (Zi = 0));
    var r = t.return;
    try {
      if (n0(e, r, t, a, Qe)) {
        ((St = 1), wo(e, _a(a, e.current)), (qe = null));
        return;
      }
    } catch (o) {
      if (r !== null) throw ((qe = r), o);
      ((St = 1), wo(e, _a(a, e.current)), (qe = null));
      return;
    }
    t.flags & 32768
      ? (Ke || n === 1
          ? (e = !0)
          : mi || (Qe & 536870912) !== 0
            ? (e = !1)
            : ((Jn = e = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = ya.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        fh(t, e))
      : ko(t);
  }
  function ko(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        fh(t, Jn);
        return;
      }
      e = t.return;
      var a = r0(t.alternate, t, Tn);
      if (a !== null) {
        qe = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        qe = t;
        return;
      }
      qe = t = e;
    } while (t !== null);
    St === 0 && (St = 5);
  }
  function fh(e, t) {
    do {
      var a = o0(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (qe = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        qe = e;
        return;
      }
      qe = e = a;
    } while (e !== null);
    ((St = 6), (qe = null));
  }
  function dh(e, t, a, n, r, o, d, y, A) {
    e.cancelPendingCommit = null;
    do Go();
    while (Lt !== 0);
    if ((et & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (
        ((o = t.lanes | t.childLanes),
        (o |= Zu),
        Hn(e, a, o, d, y, A),
        e === st && ((qe = st = null), (Qe = 0)),
        (pi = t),
        (Pn = e),
        (Rn = a),
        (ec = o),
        (tc = r),
        (th = n),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            b0(Ta, function () {
              return (yh(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (n = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || n)
      ) {
        ((n = z.T), (z.T = null), (r = J.p), (J.p = 2), (d = et), (et |= 4));
        try {
          u0(e, t, a);
        } finally {
          ((et = d), (J.p = r), (z.T = n));
        }
      }
      ((Lt = 1), mh(), hh(), ph());
    }
  }
  function mh() {
    if (Lt === 1) {
      Lt = 0;
      var e = Pn,
        t = pi,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = z.T), (z.T = null));
        var n = J.p;
        J.p = 2;
        var r = et;
        et |= 4;
        try {
          Fm(t, e);
          var o = gc,
            d = Wf(e.containerInfo),
            y = o.focusedElem,
            A = o.selectionRange;
          if (
            d !== y &&
            y &&
            y.ownerDocument &&
            Pf(y.ownerDocument.documentElement, y)
          ) {
            if (A !== null && Yu(y)) {
              var H = A.start,
                V = A.end;
              if ((V === void 0 && (V = H), "selectionStart" in y))
                ((y.selectionStart = H),
                  (y.selectionEnd = Math.min(V, y.value.length)));
              else {
                var Q = y.ownerDocument || document,
                  B = (Q && Q.defaultView) || window;
                if (B.getSelection) {
                  var G = B.getSelection(),
                    ye = y.textContent.length,
                    Ce = Math.min(A.start, ye),
                    ut = A.end === void 0 ? Ce : Math.min(A.end, ye);
                  !G.extend && Ce > ut && ((d = ut), (ut = Ce), (Ce = d));
                  var D = $f(y, Ce),
                    C = $f(y, ut);
                  if (
                    D &&
                    C &&
                    (G.rangeCount !== 1 ||
                      G.anchorNode !== D.node ||
                      G.anchorOffset !== D.offset ||
                      G.focusNode !== C.node ||
                      G.focusOffset !== C.offset)
                  ) {
                    var U = Q.createRange();
                    (U.setStart(D.node, D.offset),
                      G.removeAllRanges(),
                      Ce > ut
                        ? (G.addRange(U), G.extend(C.node, C.offset))
                        : (U.setEnd(C.node, C.offset), G.addRange(U)));
                  }
                }
              }
            }
            for (Q = [], G = y; (G = G.parentNode); )
              G.nodeType === 1 &&
                Q.push({ element: G, left: G.scrollLeft, top: G.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < Q.length;
              y++
            ) {
              var X = Q[y];
              ((X.element.scrollLeft = X.left), (X.element.scrollTop = X.top));
            }
          }
          ((Po = !!pc), (gc = pc = null));
        } finally {
          ((et = r), (J.p = n), (z.T = a));
        }
      }
      ((e.current = t), (Lt = 2));
    }
  }
  function hh() {
    if (Lt === 2) {
      Lt = 0;
      var e = Pn,
        t = pi,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = z.T), (z.T = null));
        var n = J.p;
        J.p = 2;
        var r = et;
        et |= 4;
        try {
          qm(e, t.alternate, t);
        } finally {
          ((et = r), (J.p = n), (z.T = a));
        }
      }
      Lt = 3;
    }
  }
  function ph() {
    if (Lt === 4 || Lt === 3) {
      ((Lt = 0), Gl());
      var e = Pn,
        t = pi,
        a = Rn,
        n = th;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Lt = 5)
        : ((Lt = 0), (pi = Pn = null), gh(e, e.pendingLanes));
      var r = e.pendingLanes;
      if (
        (r === 0 && ($n = null),
        L(a),
        (t = t.stateNode),
        At && typeof At.onCommitFiberRoot == "function")
      )
        try {
          At.onCommitFiberRoot(na, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((t = z.T), (r = J.p), (J.p = 2), (z.T = null));
        try {
          for (var o = e.onRecoverableError, d = 0; d < n.length; d++) {
            var y = n[d];
            o(y.value, { componentStack: y.stack });
          }
        } finally {
          ((z.T = t), (J.p = r));
        }
      }
      ((Rn & 3) !== 0 && Go(),
        en(e),
        (r = e.pendingLanes),
        (a & 261930) !== 0 && (r & 42) !== 0
          ? e === ac
            ? sr++
            : ((sr = 0), (ac = e))
          : (sr = 0),
        cr(0));
    }
  }
  function gh(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Xi(t)));
  }
  function Go() {
    return (mh(), hh(), ph(), yh());
  }
  function yh() {
    if (Lt !== 5) return !1;
    var e = Pn,
      t = ec;
    ec = 0;
    var a = L(Rn),
      n = z.T,
      r = J.p;
    try {
      ((J.p = 32 > a ? 32 : a), (z.T = null), (a = tc), (tc = null));
      var o = Pn,
        d = Rn;
      if (((Lt = 0), (pi = Pn = null), (Rn = 0), (et & 6) !== 0))
        throw Error(u(331));
      var y = et;
      if (
        ((et |= 4),
        Pm(o.current),
        Jm(o, o.current, d, a),
        (et = y),
        cr(0, !1),
        At && typeof At.onPostCommitFiberRoot == "function")
      )
        try {
          At.onPostCommitFiberRoot(na, o);
        } catch {}
      return !0;
    } finally {
      ((J.p = r), (z.T = n), gh(e, t));
    }
  }
  function vh(e, t, a) {
    ((t = _a(a, t)),
      (t = Ls(e.stateNode, t, 2)),
      (e = Qn(e, t, 2)),
      e !== null && (ha(e, 2), en(e)));
  }
  function it(e, t, a) {
    if (e.tag === 3) vh(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vh(t, e, a);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              ($n === null || !$n.has(n)))
          ) {
            ((e = _a(a, e)),
              (a = bm(2)),
              (n = Qn(t, a, 2)),
              n !== null && (Sm(a, n, t, e), ha(n, 2), en(n)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ic(e, t, a) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new f0();
      var r = new Set();
      n.set(t, r);
    } else ((r = n.get(t)), r === void 0 && ((r = new Set()), n.set(t, r)));
    r.has(a) ||
      (($s = !0), r.add(a), (e = g0.bind(null, e, t, a)), t.then(e, e));
  }
  function g0(e, t, a) {
    var n = e.pingCache;
    (n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      st === e &&
        (Qe & a) === a &&
        (St === 4 || (St === 3 && (Qe & 62914560) === Qe && 300 > zt() - Lo)
          ? (et & 2) === 0 && gi(e, 0)
          : (Ps |= a),
        hi === Qe && (hi = 0)),
      en(e));
  }
  function bh(e, t) {
    (t === 0 && (t = Ra()), (e = bl(e, t)), e !== null && (ha(e, t), en(e)));
  }
  function y0(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), bh(e, a));
  }
  function v0(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          r = e.memoizedState;
        r !== null && (a = r.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (n !== null && n.delete(t), bh(e, a));
  }
  function b0(e, t) {
    return Ga(e, t);
  }
  var Yo = null,
    vi = null,
    rc = !1,
    qo = !1,
    oc = !1,
    el = 0;
  function en(e) {
    (e !== vi &&
      e.next === null &&
      (vi === null ? (Yo = vi = e) : (vi = vi.next = e)),
      (qo = !0),
      rc || ((rc = !0), x0()));
  }
  function cr(e, t) {
    if (!oc && qo) {
      oc = !0;
      do
        for (var a = !1, n = Yo; n !== null; ) {
          if (e !== 0) {
            var r = n.pendingLanes;
            if (r === 0) var o = 0;
            else {
              var d = n.suspendedLanes,
                y = n.pingedLanes;
              ((o = (1 << (31 - gt(42 | e) + 1)) - 1),
                (o &= r & ~(d & ~y)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((a = !0), Th(n, o));
          } else
            ((o = Qe),
              (o = jn(
                n,
                n === st ? o : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1
              )),
              (o & 3) === 0 || Ka(n, o) || ((a = !0), Th(n, o)));
          n = n.next;
        }
      while (a);
      oc = !1;
    }
  }
  function S0() {
    Sh();
  }
  function Sh() {
    qo = rc = !1;
    var e = 0;
    el !== 0 && O0() && (e = el);
    for (var t = zt(), a = null, n = Yo; n !== null; ) {
      var r = n.next,
        o = xh(n, t);
      (o === 0
        ? ((n.next = null),
          a === null ? (Yo = r) : (a.next = r),
          r === null && (vi = a))
        : ((a = n), (e !== 0 || (o & 3) !== 0) && (qo = !0)),
        (n = r));
    }
    ((Lt !== 0 && Lt !== 5) || cr(e), el !== 0 && (el = 0));
  }
  function xh(e, t) {
    for (
      var a = e.suspendedLanes,
        n = e.pingedLanes,
        r = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;
    ) {
      var d = 31 - gt(o),
        y = 1 << d,
        A = r[d];
      (A === -1
        ? ((y & a) === 0 || (y & n) !== 0) && (r[d] = yt(y, t))
        : A <= t && (e.expiredLanes |= y),
        (o &= ~y));
    }
    if (
      ((t = st),
      (a = Qe),
      (a = jn(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (n = e.callbackNode),
      a === 0 ||
        (e === t && (lt === 2 || lt === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && Dn(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Ka(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((n !== null && Dn(n), L(a))) {
        case 2:
        case 8:
          a = Vt;
          break;
        case 32:
          a = Ta;
          break;
        case 268435456:
          a = Jt;
          break;
        default:
          a = Ta;
      }
      return (
        (n = Eh.bind(null, e)),
        (a = Ga(a, n)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      n !== null && n !== null && Dn(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Eh(e, t) {
    if (Lt !== 0 && Lt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (Go() && e.callbackNode !== a) return null;
    var n = Qe;
    return (
      (n = jn(
        e,
        e === st ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      n === 0
        ? null
        : (nh(e, n, t),
          xh(e, zt()),
          e.callbackNode != null && e.callbackNode === a
            ? Eh.bind(null, e)
            : null)
    );
  }
  function Th(e, t) {
    if (Go()) return null;
    nh(e, t, !0);
  }
  function x0() {
    z0(function () {
      (et & 6) !== 0 ? Ga(Kt, S0) : Sh();
    });
  }
  function uc() {
    if (el === 0) {
      var e = ni;
      (e === 0 && ((e = Ya), (Ya <<= 1), (Ya & 261888) === 0 && (Ya = 256)),
        (el = e));
    }
    return el;
  }
  function Rh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Jr("" + e);
  }
  function Ah(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function E0(e, t, a, n, r) {
    if (t === "submit" && a && a.stateNode === r) {
      var o = Rh((r[le] || null).action),
        d = n.submitter;
      d &&
        ((t = (t = d[le] || null)
          ? Rh(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((o = t), (d = null)));
      var y = new Wr("action", "action", null, n, r);
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (el !== 0) {
                  var A = d ? Ah(r, d) : new FormData(r);
                  Cs(
                    a,
                    { pending: !0, data: A, method: r.method, action: o },
                    null,
                    A
                  );
                }
              } else
                typeof o == "function" &&
                  (y.preventDefault(),
                  (A = d ? Ah(r, d) : new FormData(r)),
                  Cs(
                    a,
                    { pending: !0, data: A, method: r.method, action: o },
                    o,
                    A
                  ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var sc = 0; sc < Qu.length; sc++) {
    var cc = Qu[sc],
      T0 = cc.toLowerCase(),
      R0 = cc[0].toUpperCase() + cc.slice(1);
    Va(T0, "on" + R0);
  }
  (Va(ad, "onAnimationEnd"),
    Va(nd, "onAnimationIteration"),
    Va(ld, "onAnimationStart"),
    Va("dblclick", "onDoubleClick"),
    Va("focusin", "onFocus"),
    Va("focusout", "onBlur"),
    Va(Gv, "onTransitionRun"),
    Va(Yv, "onTransitionStart"),
    Va(qv, "onTransitionCancel"),
    Va(id, "onTransitionEnd"),
    vt("onMouseEnter", ["mouseout", "mouseover"]),
    vt("onMouseLeave", ["mouseout", "mouseover"]),
    vt("onPointerEnter", ["pointerout", "pointerover"]),
    vt("onPointerLeave", ["pointerout", "pointerover"]),
    We(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    We(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    We("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    We(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    We(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    We(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    ));
  var fr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    A0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(fr)
    );
  function wh(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var n = e[a],
        r = n.event;
      n = n.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var d = n.length - 1; 0 <= d; d--) {
            var y = n[d],
              A = y.instance,
              H = y.currentTarget;
            if (((y = y.listener), A !== o && r.isPropagationStopped()))
              break e;
            ((o = y), (r.currentTarget = H));
            try {
              o(r);
            } catch (V) {
              ao(V);
            }
            ((r.currentTarget = null), (o = A));
          }
        else
          for (d = 0; d < n.length; d++) {
            if (
              ((y = n[d]),
              (A = y.instance),
              (H = y.currentTarget),
              (y = y.listener),
              A !== o && r.isPropagationStopped())
            )
              break e;
            ((o = y), (r.currentTarget = H));
            try {
              o(r);
            } catch (V) {
              ao(V);
            }
            ((r.currentTarget = null), (o = A));
          }
      }
    }
  }
  function Ve(e, t) {
    var a = t[se];
    a === void 0 && (a = t[se] = new Set());
    var n = e + "__bubble";
    a.has(n) || (_h(t, e, 2, !1), a.add(n));
  }
  function fc(e, t, a) {
    var n = 0;
    (t && (n |= 4), _h(a, e, n, t));
  }
  var Vo = "_reactListening" + Math.random().toString(36).slice(2);
  function dc(e) {
    if (!e[Vo]) {
      ((e[Vo] = !0),
        at.forEach(function (a) {
          a !== "selectionchange" && (A0.has(a) || fc(a, !1, e), fc(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vo] || ((t[Vo] = !0), fc("selectionchange", !1, t));
    }
  }
  function _h(e, t, a, n) {
    switch (ap(t)) {
      case 2:
        var r = W0;
        break;
      case 8:
        r = eb;
        break;
      default:
        r = _c;
    }
    ((a = r.bind(null, t, a, e)),
      (r = void 0),
      !Du ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (r = !0),
      n
        ? r !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: r })
          : e.addEventListener(t, a, !0)
        : r !== void 0
          ? e.addEventListener(t, a, { passive: r })
          : e.addEventListener(t, a, !1));
  }
  function mc(e, t, a, n, r) {
    var o = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var d = n.tag;
        if (d === 3 || d === 4) {
          var y = n.stateNode.containerInfo;
          if (y === r) break;
          if (d === 4)
            for (d = n.return; d !== null; ) {
              var A = d.tag;
              if ((A === 3 || A === 4) && d.stateNode.containerInfo === r)
                return;
              d = d.return;
            }
          for (; y !== null; ) {
            if (((d = S(y)), d === null)) return;
            if (((A = d.tag), A === 5 || A === 6 || A === 26 || A === 27)) {
              n = o = d;
              continue e;
            }
            y = y.parentNode;
          }
        }
        n = n.return;
      }
    Df(function () {
      var H = o,
        V = Nu(a),
        Q = [];
      e: {
        var B = rd.get(e);
        if (B !== void 0) {
          var G = Wr,
            ye = e;
          switch (e) {
            case "keypress":
              if ($r(a) === 0) break e;
            case "keydown":
            case "keyup":
              G = vv;
              break;
            case "focusin":
              ((ye = "focus"), (G = ju));
              break;
            case "focusout":
              ((ye = "blur"), (G = ju));
              break;
            case "beforeblur":
            case "afterblur":
              G = ju;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = Uf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = rv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = xv;
              break;
            case ad:
            case nd:
            case ld:
              G = sv;
              break;
            case id:
              G = Tv;
              break;
            case "scroll":
            case "scrollend":
              G = lv;
              break;
            case "wheel":
              G = Av;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = fv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Hf;
              break;
            case "toggle":
            case "beforetoggle":
              G = _v;
          }
          var Ce = (t & 4) !== 0,
            ut = !Ce && (e === "scroll" || e === "scrollend"),
            D = Ce ? (B !== null ? B + "Capture" : null) : B;
          Ce = [];
          for (var C = H, U; C !== null; ) {
            var X = C;
            if (
              ((U = X.stateNode),
              (X = X.tag),
              (X !== 5 && X !== 26 && X !== 27) ||
                U === null ||
                D === null ||
                ((X = zi(C, D)), X != null && Ce.push(dr(C, X, U))),
              ut)
            )
              break;
            C = C.return;
          }
          0 < Ce.length &&
            ((B = new G(B, ye, null, a, V)),
            Q.push({ event: B, listeners: Ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((B = e === "mouseover" || e === "pointerover"),
            (G = e === "mouseout" || e === "pointerout"),
            B &&
              a !== Mu &&
              (ye = a.relatedTarget || a.fromElement) &&
              (S(ye) || ye[ge]))
          )
            break e;
          if (
            (G || B) &&
            ((B =
              V.window === V
                ? V
                : (B = V.ownerDocument)
                  ? B.defaultView || B.parentWindow
                  : window),
            G
              ? ((ye = a.relatedTarget || a.toElement),
                (G = H),
                (ye = ye ? S(ye) : null),
                ye !== null &&
                  ((ut = f(ye)),
                  (Ce = ye.tag),
                  ye !== ut || (Ce !== 5 && Ce !== 27 && Ce !== 6)) &&
                  (ye = null))
              : ((G = null), (ye = H)),
            G !== ye)
          ) {
            if (
              ((Ce = Uf),
              (X = "onMouseLeave"),
              (D = "onMouseEnter"),
              (C = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Ce = Hf),
                (X = "onPointerLeave"),
                (D = "onPointerEnter"),
                (C = "pointer")),
              (ut = G == null ? B : I(G)),
              (U = ye == null ? B : I(ye)),
              (B = new Ce(X, C + "leave", G, a, V)),
              (B.target = ut),
              (B.relatedTarget = U),
              (X = null),
              S(V) === H &&
                ((Ce = new Ce(D, C + "enter", ye, a, V)),
                (Ce.target = U),
                (Ce.relatedTarget = ut),
                (X = Ce)),
              (ut = X),
              G && ye)
            )
              t: {
                for (Ce = w0, D = G, C = ye, U = 0, X = D; X; X = Ce(X)) U++;
                X = 0;
                for (var _e = C; _e; _e = Ce(_e)) X++;
                for (; 0 < U - X; ) ((D = Ce(D)), U--);
                for (; 0 < X - U; ) ((C = Ce(C)), X--);
                for (; U--; ) {
                  if (D === C || (C !== null && D === C.alternate)) {
                    Ce = D;
                    break t;
                  }
                  ((D = Ce(D)), (C = Ce(C)));
                }
                Ce = null;
              }
            else Ce = null;
            (G !== null && Ch(Q, B, G, Ce, !1),
              ye !== null && ut !== null && Ch(Q, ut, ye, Ce, !0));
          }
        }
        e: {
          if (
            ((B = H ? I(H) : window),
            (G = B.nodeName && B.nodeName.toLowerCase()),
            G === "select" || (G === "input" && B.type === "file"))
          )
            var Ie = Qf;
          else if (Vf(B))
            if (Zf) Ie = Hv;
            else {
              Ie = Uv;
              var Te = Lv;
            }
          else
            ((G = B.nodeName),
              !G ||
              G.toLowerCase() !== "input" ||
              (B.type !== "checkbox" && B.type !== "radio")
                ? H && Cu(H.elementType) && (Ie = Qf)
                : (Ie = jv));
          if (Ie && (Ie = Ie(e, H))) {
            Xf(Q, Ie, a, V);
            break e;
          }
          (Te && Te(e, B, H),
            e === "focusout" &&
              H &&
              B.type === "number" &&
              H.memoizedProps.value != null &&
              _u(B, "number", B.value));
        }
        switch (((Te = H ? I(H) : window), e)) {
          case "focusin":
            (Vf(Te) || Te.contentEditable === "true") &&
              ((Jl = Te), (qu = H), (Yi = null));
            break;
          case "focusout":
            Yi = qu = Jl = null;
            break;
          case "mousedown":
            Vu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Vu = !1), ed(Q, a, V));
            break;
          case "selectionchange":
            if (kv) break;
          case "keydown":
          case "keyup":
            ed(Q, a, V);
        }
        var He;
        if (Bu)
          e: {
            switch (e) {
              case "compositionstart":
                var Ze = "onCompositionStart";
                break e;
              case "compositionend":
                Ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ze = "onCompositionUpdate";
                break e;
            }
            Ze = void 0;
          }
        else
          Kl
            ? Yf(e, a) && (Ze = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (Ze = "onCompositionStart");
        (Ze &&
          (Bf &&
            a.locale !== "ko" &&
            (Kl || Ze !== "onCompositionStart"
              ? Ze === "onCompositionEnd" && Kl && (He = zf())
              : ((Bn = V),
                (zu = "value" in Bn ? Bn.value : Bn.textContent),
                (Kl = !0))),
          (Te = Xo(H, Ze)),
          0 < Te.length &&
            ((Ze = new jf(Ze, e, null, a, V)),
            Q.push({ event: Ze, listeners: Te }),
            He
              ? (Ze.data = He)
              : ((He = qf(a)), He !== null && (Ze.data = He)))),
          (He = Mv ? Nv(e, a) : Ov(e, a)) &&
            ((Ze = Xo(H, "onBeforeInput")),
            0 < Ze.length &&
              ((Te = new jf("onBeforeInput", "beforeinput", null, a, V)),
              Q.push({ event: Te, listeners: Ze }),
              (Te.data = He))),
          E0(Q, e, H, a, V));
      }
      wh(Q, t);
    });
  }
  function dr(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Xo(e, t) {
    for (var a = t + "Capture", n = []; e !== null; ) {
      var r = e,
        o = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          o === null ||
          ((r = zi(e, a)),
          r != null && n.unshift(dr(e, r, o)),
          (r = zi(e, t)),
          r != null && n.push(dr(e, r, o))),
        e.tag === 3)
      )
        return n;
      e = e.return;
    }
    return [];
  }
  function w0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ch(e, t, a, n, r) {
    for (var o = t._reactName, d = []; a !== null && a !== n; ) {
      var y = a,
        A = y.alternate,
        H = y.stateNode;
      if (((y = y.tag), A !== null && A === n)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        H === null ||
        ((A = H),
        r
          ? ((H = zi(a, o)), H != null && d.unshift(dr(a, H, A)))
          : r || ((H = zi(a, o)), H != null && d.push(dr(a, H, A)))),
        (a = a.return));
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var _0 = /\r\n?/g,
    C0 = /\u0000|\uFFFD/g;
  function Mh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        _0,
        `
`
      )
      .replace(C0, "");
  }
  function Nh(e, t) {
    return ((t = Mh(t)), Mh(e) === t);
  }
  function ot(e, t, a, n, r, o) {
    switch (a) {
      case "children":
        typeof n == "string"
          ? t === "body" || (t === "textarea" && n === "") || Ql(e, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            t !== "body" &&
            Ql(e, "" + n);
        break;
      case "className":
        Et(e, "class", n);
        break;
      case "tabIndex":
        Et(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Et(e, a, n);
        break;
      case "style":
        Nf(e, n, o);
        break;
      case "data":
        if (t !== "object") {
          Et(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((n = Jr("" + n)), e.setAttribute(a, n));
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (a === "formAction"
              ? (t !== "input" && ot(e, t, "name", r.name, r, null),
                ot(e, t, "formEncType", r.formEncType, r, null),
                ot(e, t, "formMethod", r.formMethod, r, null),
                ot(e, t, "formTarget", r.formTarget, r, null))
              : (ot(e, t, "encType", r.encType, r, null),
                ot(e, t, "method", r.method, r, null),
                ot(e, t, "target", r.target, r, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((n = Jr("" + n)), e.setAttribute(a, n));
        break;
      case "onClick":
        n != null && (e.onclick = sn);
        break;
      case "onScroll":
        n != null && Ve("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Ve("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(u(61));
          if (((a = n.__html), a != null)) {
            if (r.children != null) throw Error(u(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = Jr("" + n)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(a, "" + n)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        n === !0
          ? e.setAttribute(a, "")
          : n !== !1 &&
              n != null &&
              typeof n != "function" &&
              typeof n != "symbol"
            ? e.setAttribute(a, n)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? e.setAttribute(a, n)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? e.removeAttribute(a)
          : e.setAttribute(a, n);
        break;
      case "popover":
        (Ve("beforetoggle", e), Ve("toggle", e), Ge(e, "popover", n));
        break;
      case "xlinkActuate":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        Ge(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = av.get(a) || a), Ge(e, a, n));
    }
  }
  function hc(e, t, a, n, r, o) {
    switch (a) {
      case "style":
        Nf(e, n, o);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(u(61));
          if (((a = n.__html), a != null)) {
            if (r.children != null) throw Error(u(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? Ql(e, n)
          : (typeof n == "number" || typeof n == "bigint") && Ql(e, "" + n);
        break;
      case "onScroll":
        n != null && Ve("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Ve("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = sn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ct.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((r = a.endsWith("Capture")),
              (t = a.slice(2, r ? a.length - 7 : void 0)),
              (o = e[le] || null),
              (o = o != null ? o[a] : null),
              typeof o == "function" && e.removeEventListener(t, o, r),
              typeof n == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, n, r));
              break e;
            }
            a in e
              ? (e[a] = n)
              : n === !0
                ? e.setAttribute(a, "")
                : Ge(e, a, n);
          }
    }
  }
  function Yt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Ve("error", e), Ve("load", e));
        var n = !1,
          r = !1,
          o;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var d = a[o];
            if (d != null)
              switch (o) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  ot(e, t, o, d, a, null);
              }
          }
        (r && ot(e, t, "srcSet", a.srcSet, a, null),
          n && ot(e, t, "src", a.src, a, null));
        return;
      case "input":
        Ve("invalid", e);
        var y = (o = d = r = null),
          A = null,
          H = null;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var V = a[n];
            if (V != null)
              switch (n) {
                case "name":
                  r = V;
                  break;
                case "type":
                  d = V;
                  break;
                case "checked":
                  A = V;
                  break;
                case "defaultChecked":
                  H = V;
                  break;
                case "value":
                  o = V;
                  break;
                case "defaultValue":
                  y = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(u(137, t));
                  break;
                default:
                  ot(e, t, n, V, a, null);
              }
          }
        wf(e, o, y, A, H, d, r, !1);
        return;
      case "select":
        (Ve("invalid", e), (n = d = o = null));
        for (r in a)
          if (a.hasOwnProperty(r) && ((y = a[r]), y != null))
            switch (r) {
              case "value":
                o = y;
                break;
              case "defaultValue":
                d = y;
                break;
              case "multiple":
                n = y;
              default:
                ot(e, t, r, y, a, null);
            }
        ((t = o),
          (a = d),
          (e.multiple = !!n),
          t != null ? Xl(e, !!n, t, !1) : a != null && Xl(e, !!n, a, !0));
        return;
      case "textarea":
        (Ve("invalid", e), (o = r = n = null));
        for (d in a)
          if (a.hasOwnProperty(d) && ((y = a[d]), y != null))
            switch (d) {
              case "value":
                n = y;
                break;
              case "defaultValue":
                r = y;
                break;
              case "children":
                o = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(u(91));
                break;
              default:
                ot(e, t, d, y, a, null);
            }
        Cf(e, n, r, o);
        return;
      case "option":
        for (A in a)
          a.hasOwnProperty(A) &&
            ((n = a[A]), n != null) &&
            (A === "selected"
              ? (e.selected =
                  n && typeof n != "function" && typeof n != "symbol")
              : ot(e, t, A, n, a, null));
        return;
      case "dialog":
        (Ve("beforetoggle", e),
          Ve("toggle", e),
          Ve("cancel", e),
          Ve("close", e));
        break;
      case "iframe":
      case "object":
        Ve("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < fr.length; n++) Ve(fr[n], e);
        break;
      case "image":
        (Ve("error", e), Ve("load", e));
        break;
      case "details":
        Ve("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Ve("error", e), Ve("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (H in a)
          if (a.hasOwnProperty(H) && ((n = a[H]), n != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                ot(e, t, H, n, a, null);
            }
        return;
      default:
        if (Cu(t)) {
          for (V in a)
            a.hasOwnProperty(V) &&
              ((n = a[V]), n !== void 0 && hc(e, t, V, n, a, void 0));
          return;
        }
    }
    for (y in a)
      a.hasOwnProperty(y) && ((n = a[y]), n != null && ot(e, t, y, n, a, null));
  }
  function M0(e, t, a, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null,
          o = null,
          d = null,
          y = null,
          A = null,
          H = null,
          V = null;
        for (G in a) {
          var Q = a[G];
          if (a.hasOwnProperty(G) && Q != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = Q;
              default:
                n.hasOwnProperty(G) || ot(e, t, G, null, n, Q);
            }
        }
        for (var B in n) {
          var G = n[B];
          if (((Q = a[B]), n.hasOwnProperty(B) && (G != null || Q != null)))
            switch (B) {
              case "type":
                o = G;
                break;
              case "name":
                r = G;
                break;
              case "checked":
                H = G;
                break;
              case "defaultChecked":
                V = G;
                break;
              case "value":
                d = G;
                break;
              case "defaultValue":
                y = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null) throw Error(u(137, t));
                break;
              default:
                G !== Q && ot(e, t, B, G, n, Q);
            }
        }
        wu(e, d, y, A, H, V, o, r);
        return;
      case "select":
        G = d = y = B = null;
        for (o in a)
          if (((A = a[o]), a.hasOwnProperty(o) && A != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                G = A;
              default:
                n.hasOwnProperty(o) || ot(e, t, o, null, n, A);
            }
        for (r in n)
          if (
            ((o = n[r]),
            (A = a[r]),
            n.hasOwnProperty(r) && (o != null || A != null))
          )
            switch (r) {
              case "value":
                B = o;
                break;
              case "defaultValue":
                y = o;
                break;
              case "multiple":
                d = o;
              default:
                o !== A && ot(e, t, r, o, n, A);
            }
        ((t = y),
          (a = d),
          (n = G),
          B != null
            ? Xl(e, !!a, B, !1)
            : !!n != !!a &&
              (t != null ? Xl(e, !!a, t, !0) : Xl(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        G = B = null;
        for (y in a)
          if (
            ((r = a[y]),
            a.hasOwnProperty(y) && r != null && !n.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                ot(e, t, y, null, n, r);
            }
        for (d in n)
          if (
            ((r = n[d]),
            (o = a[d]),
            n.hasOwnProperty(d) && (r != null || o != null))
          )
            switch (d) {
              case "value":
                B = r;
                break;
              case "defaultValue":
                G = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(u(91));
                break;
              default:
                r !== o && ot(e, t, d, r, n, o);
            }
        _f(e, B, G);
        return;
      case "option":
        for (var ye in a)
          ((B = a[ye]),
            a.hasOwnProperty(ye) &&
              B != null &&
              !n.hasOwnProperty(ye) &&
              (ye === "selected"
                ? (e.selected = !1)
                : ot(e, t, ye, null, n, B)));
        for (A in n)
          ((B = n[A]),
            (G = a[A]),
            n.hasOwnProperty(A) &&
              B !== G &&
              (B != null || G != null) &&
              (A === "selected"
                ? (e.selected =
                    B && typeof B != "function" && typeof B != "symbol")
                : ot(e, t, A, B, n, G)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ce in a)
          ((B = a[Ce]),
            a.hasOwnProperty(Ce) &&
              B != null &&
              !n.hasOwnProperty(Ce) &&
              ot(e, t, Ce, null, n, B));
        for (H in n)
          if (
            ((B = n[H]),
            (G = a[H]),
            n.hasOwnProperty(H) && B !== G && (B != null || G != null))
          )
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(u(137, t));
                break;
              default:
                ot(e, t, H, B, n, G);
            }
        return;
      default:
        if (Cu(t)) {
          for (var ut in a)
            ((B = a[ut]),
              a.hasOwnProperty(ut) &&
                B !== void 0 &&
                !n.hasOwnProperty(ut) &&
                hc(e, t, ut, void 0, n, B));
          for (V in n)
            ((B = n[V]),
              (G = a[V]),
              !n.hasOwnProperty(V) ||
                B === G ||
                (B === void 0 && G === void 0) ||
                hc(e, t, V, B, n, G));
          return;
        }
    }
    for (var D in a)
      ((B = a[D]),
        a.hasOwnProperty(D) &&
          B != null &&
          !n.hasOwnProperty(D) &&
          ot(e, t, D, null, n, B));
    for (Q in n)
      ((B = n[Q]),
        (G = a[Q]),
        !n.hasOwnProperty(Q) ||
          B === G ||
          (B == null && G == null) ||
          ot(e, t, Q, B, n, G));
  }
  function Oh(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function N0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), n = 0;
        n < a.length;
        n++
      ) {
        var r = a[n],
          o = r.transferSize,
          d = r.initiatorType,
          y = r.duration;
        if (o && y && Oh(d)) {
          for (d = 0, y = r.responseEnd, n += 1; n < a.length; n++) {
            var A = a[n],
              H = A.startTime;
            if (H > y) break;
            var V = A.transferSize,
              Q = A.initiatorType;
            V &&
              Oh(Q) &&
              ((A = A.responseEnd), (d += V * (A < y ? 1 : (y - H) / (A - H))));
          }
          if ((--n, (t += (8 * (o + d)) / (r.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var pc = null,
    gc = null;
  function Qo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Dh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function yc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vc = null;
  function O0() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === vc
        ? !1
        : ((vc = e), !0)
      : ((vc = null), !1);
  }
  var Lh = typeof setTimeout == "function" ? setTimeout : void 0,
    D0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Uh = typeof Promise == "function" ? Promise : void 0,
    z0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Uh < "u"
          ? function (e) {
              return Uh.resolve(null).then(e).catch(L0);
            }
          : Lh;
  function L0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function tl(e) {
    return e === "head";
  }
  function jh(e, t) {
    var a = t,
      n = 0;
    do {
      var r = a.nextSibling;
      if ((e.removeChild(a), r && r.nodeType === 8))
        if (((a = r.data), a === "/$" || a === "/&")) {
          if (n === 0) {
            (e.removeChild(r), Ei(t));
            return;
          }
          n--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          n++;
        else if (a === "html") mr(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), mr(a));
          for (var o = a.firstChild; o; ) {
            var d = o.nextSibling,
              y = o.nodeName;
            (o[je] ||
              y === "SCRIPT" ||
              y === "STYLE" ||
              (y === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(o),
              (o = d));
          }
        } else a === "body" && mr(e.ownerDocument.body);
      a = r;
    } while (a);
    Ei(t);
  }
  function Hh(e, t) {
    var a = e;
    e = 0;
    do {
      var n = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        n && n.nodeType === 8)
      )
        if (((a = n.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = n;
    } while (a);
  }
  function bc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (bc(a), ue(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function U0(e, t, a, n) {
    for (; e.nodeType === 1; ) {
      var r = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (n) {
        if (!e[je])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((o = e.getAttribute("rel")),
                o === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== r.rel ||
                e.getAttribute("href") !==
                  (r.href == null || r.href === "" ? null : r.href) ||
                e.getAttribute("crossorigin") !==
                  (r.crossOrigin == null ? null : r.crossOrigin) ||
                e.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((o = e.getAttribute("src")),
                (o !== (r.src == null ? null : r.src) ||
                  e.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  e.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  o &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var o = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && e.getAttribute("name") === o) return e;
      } else return e;
      if (((e = Da(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function j0(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Da(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Bh(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Da(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Sc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function xc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function H0(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var n = function () {
        (t(), a.removeEventListener("DOMContentLoaded", n));
      };
      (a.addEventListener("DOMContentLoaded", n), (e._reactRetry = n));
    }
  }
  function Da(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Ec = null;
  function kh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Da(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Gh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Yh(e, t, a) {
    switch (((t = Qo(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(u(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(u(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function mr(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ue(e);
  }
  var za = new Map(),
    qh = new Set();
  function Zo(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var An = J.d;
  J.d = { f: B0, r: k0, D: G0, C: Y0, L: q0, m: V0, X: Q0, S: X0, M: Z0 };
  function B0() {
    var e = An.f(),
      t = Ho();
    return e || t;
  }
  function k0(e) {
    var t = q(e);
    t !== null && t.tag === 5 && t.type === "form" ? im(t) : An.r(e);
  }
  var bi = typeof document > "u" ? null : document;
  function Vh(e, t, a) {
    var n = bi;
    if (n && typeof t == "string" && t) {
      var r = Aa(t);
      ((r = 'link[rel="' + e + '"][href="' + r + '"]'),
        typeof a == "string" && (r += '[crossorigin="' + a + '"]'),
        qh.has(r) ||
          (qh.add(r),
          (e = { rel: e, crossOrigin: a, href: t }),
          n.querySelector(r) === null &&
            ((t = n.createElement("link")),
            Yt(t, "link", e),
            Le(t),
            n.head.appendChild(t))));
    }
  }
  function G0(e) {
    (An.D(e), Vh("dns-prefetch", e, null));
  }
  function Y0(e, t) {
    (An.C(e, t), Vh("preconnect", e, t));
  }
  function q0(e, t, a) {
    An.L(e, t, a);
    var n = bi;
    if (n && e && t) {
      var r = 'link[rel="preload"][as="' + Aa(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((r += '[imagesrcset="' + Aa(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (r += '[imagesizes="' + Aa(a.imageSizes) + '"]'))
        : (r += '[href="' + Aa(e) + '"]');
      var o = r;
      switch (t) {
        case "style":
          o = Si(e);
          break;
        case "script":
          o = xi(e);
      }
      za.has(o) ||
        ((e = v(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t
          },
          a
        )),
        za.set(o, e),
        n.querySelector(r) !== null ||
          (t === "style" && n.querySelector(hr(o))) ||
          (t === "script" && n.querySelector(pr(o))) ||
          ((t = n.createElement("link")),
          Yt(t, "link", e),
          Le(t),
          n.head.appendChild(t)));
    }
  }
  function V0(e, t) {
    An.m(e, t);
    var a = bi;
    if (a && e) {
      var n = t && typeof t.as == "string" ? t.as : "script",
        r =
          'link[rel="modulepreload"][as="' + Aa(n) + '"][href="' + Aa(e) + '"]',
        o = r;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = xi(e);
      }
      if (
        !za.has(o) &&
        ((e = v({ rel: "modulepreload", href: e }, t)),
        za.set(o, e),
        a.querySelector(r) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(pr(o))) return;
        }
        ((n = a.createElement("link")),
          Yt(n, "link", e),
          Le(n),
          a.head.appendChild(n));
      }
    }
  }
  function X0(e, t, a) {
    An.S(e, t, a);
    var n = bi;
    if (n && e) {
      var r = Oe(n).hoistableStyles,
        o = Si(e);
      t = t || "default";
      var d = r.get(o);
      if (!d) {
        var y = { loading: 0, preload: null };
        if ((d = n.querySelector(hr(o)))) y.loading = 5;
        else {
          ((e = v({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = za.get(o)) && Tc(e, a));
          var A = (d = n.createElement("link"));
          (Le(A),
            Yt(A, "link", e),
            (A._p = new Promise(function (H, V) {
              ((A.onload = H), (A.onerror = V));
            })),
            A.addEventListener("load", function () {
              y.loading |= 1;
            }),
            A.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Fo(d, t, n));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: y }),
          r.set(o, d));
      }
    }
  }
  function Q0(e, t) {
    An.X(e, t);
    var a = bi;
    if (a && e) {
      var n = Oe(a).hoistableScripts,
        r = xi(e),
        o = n.get(r);
      o ||
        ((o = a.querySelector(pr(r))),
        o ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = za.get(r)) && Rc(e, t),
          (o = a.createElement("script")),
          Le(o),
          Yt(o, "link", e),
          a.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        n.set(r, o));
    }
  }
  function Z0(e, t) {
    An.M(e, t);
    var a = bi;
    if (a && e) {
      var n = Oe(a).hoistableScripts,
        r = xi(e),
        o = n.get(r);
      o ||
        ((o = a.querySelector(pr(r))),
        o ||
          ((e = v({ src: e, async: !0, type: "module" }, t)),
          (t = za.get(r)) && Rc(e, t),
          (o = a.createElement("script")),
          Le(o),
          Yt(o, "link", e),
          a.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        n.set(r, o));
    }
  }
  function Xh(e, t, a, n) {
    var r = (r = de.current) ? Zo(r) : null;
    if (!r) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Si(a.href)),
            (a = Oe(r).hoistableStyles),
            (n = a.get(t)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Si(a.href);
          var o = Oe(r).hoistableStyles,
            d = o.get(e);
          if (
            (d ||
              ((r = r.ownerDocument || r),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null }
              }),
              o.set(e, d),
              (o = r.querySelector(hr(e))) &&
                !o._p &&
                ((d.instance = o), (d.state.loading = 5)),
              za.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy
                }),
                za.set(e, a),
                o || F0(r, e, a, d.state))),
            t && n === null)
          )
            throw Error(u(528, ""));
          return d;
        }
        if (t && n !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = xi(a)),
              (a = Oe(r).hoistableScripts),
              (n = a.get(t)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null
                }),
                a.set(t, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, e));
    }
  }
  function Si(e) {
    return 'href="' + Aa(e) + '"';
  }
  function hr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Qh(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function F0(e, t, a, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (n.loading = 1)
      : ((t = e.createElement("link")),
        (n.preload = t),
        t.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        Yt(t, "link", a),
        Le(t),
        e.head.appendChild(t));
  }
  function xi(e) {
    return '[src="' + Aa(e) + '"]';
  }
  function pr(e) {
    return "script[async]" + e;
  }
  function Zh(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + Aa(a.href) + '"]');
          if (n) return ((t.instance = n), Le(n), n);
          var r = v({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return (
            (n = (e.ownerDocument || e).createElement("style")),
            Le(n),
            Yt(n, "style", r),
            Fo(n, a.precedence, e),
            (t.instance = n)
          );
        case "stylesheet":
          r = Si(a.href);
          var o = e.querySelector(hr(r));
          if (o) return ((t.state.loading |= 4), (t.instance = o), Le(o), o);
          ((n = Qh(a)),
            (r = za.get(r)) && Tc(n, r),
            (o = (e.ownerDocument || e).createElement("link")),
            Le(o));
          var d = o;
          return (
            (d._p = new Promise(function (y, A) {
              ((d.onload = y), (d.onerror = A));
            })),
            Yt(o, "link", n),
            (t.state.loading |= 4),
            Fo(o, a.precedence, e),
            (t.instance = o)
          );
        case "script":
          return (
            (o = xi(a.src)),
            (r = e.querySelector(pr(o)))
              ? ((t.instance = r), Le(r), r)
              : ((n = a),
                (r = za.get(o)) && ((n = v({}, a)), Rc(n, r)),
                (e = e.ownerDocument || e),
                (r = e.createElement("script")),
                Le(r),
                Yt(r, "link", n),
                e.head.appendChild(r),
                (t.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((n = t.instance), (t.state.loading |= 4), Fo(n, a.precedence, e));
    return t.instance;
  }
  function Fo(e, t, a) {
    for (
      var n = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        r = n.length ? n[n.length - 1] : null,
        o = r,
        d = 0;
      d < n.length;
      d++
    ) {
      var y = n[d];
      if (y.dataset.precedence === t) o = y;
      else if (o !== r) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function Tc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Rc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Ko = null;
  function Fh(e, t, a) {
    if (Ko === null) {
      var n = new Map(),
        r = (Ko = new Map());
      r.set(a, n);
    } else ((r = Ko), (n = r.get(a)), n || ((n = new Map()), r.set(a, n)));
    if (n.has(e)) return n;
    for (
      n.set(e, null), a = a.getElementsByTagName(e), r = 0;
      r < a.length;
      r++
    ) {
      var o = a[r];
      if (
        !(
          o[je] ||
          o[oe] ||
          (e === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = o.getAttribute(t) || "";
        d = e + d;
        var y = n.get(d);
        y ? y.push(o) : n.set(d, [o]);
      }
    }
    return n;
  }
  function Kh(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      ));
  }
  function K0(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Jh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function J0(e, t, a, n) {
    if (
      a.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var r = Si(n.href),
          o = t.querySelector(hr(r));
        if (o) {
          ((t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Jo.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = o),
            Le(o));
          return;
        }
        ((o = t.ownerDocument || t),
          (n = Qh(n)),
          (r = za.get(r)) && Tc(n, r),
          (o = o.createElement("link")),
          Le(o));
        var d = o;
        ((d._p = new Promise(function (y, A) {
          ((d.onload = y), (d.onerror = A));
        })),
          Yt(o, "link", n),
          (a.instance = o));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = Jo.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Ac = 0;
  function I0(e, t) {
    return (
      e.stylesheets && e.count === 0 && $o(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var n = setTimeout(function () {
              if ((e.stylesheets && $o(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                ((e.unsuspend = null), o());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Ac === 0 && (Ac = 62500 * N0());
            var r = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && $o(e, e.stylesheets), e.unsuspend))
                ) {
                  var o = e.unsuspend;
                  ((e.unsuspend = null), o());
                }
              },
              (e.imgBytes > Ac ? 50 : 800) + t
            );
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(n), clearTimeout(r));
              }
            );
          }
        : null
    );
  }
  function Jo() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) $o(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Io = null;
  function $o(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Io = new Map()),
        t.forEach($0, e),
        (Io = null),
        Jo.call(e)));
  }
  function $0(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Io.get(e);
      if (a) var n = a.get(null);
      else {
        ((a = new Map()), Io.set(e, a));
        for (
          var r = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < r.length;
          o++
        ) {
          var d = r[o];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (a.set(d.dataset.precedence, d), (n = d));
        }
        n && a.set(null, n);
      }
      ((r = t.instance),
        (d = r.getAttribute("data-precedence")),
        (o = a.get(d) || n),
        o === n && a.set(null, r),
        a.set(d, r),
        this.count++,
        (n = Jo.bind(this)),
        r.addEventListener("load", n),
        r.addEventListener("error", n),
        o
          ? o.parentNode.insertBefore(r, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(r, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var gr = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0
  };
  function P0(e, t, a, n, r, o, d, y, A) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ja(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ja(0)),
      (this.hiddenUpdates = Ja(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = r),
      (this.onCaughtError = o),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = A),
      (this.incompleteTransitions = new Map()));
  }
  function Ih(e, t, a, n, r, o, d, y, A, H, V, Q) {
    return (
      (e = new P0(e, t, a, d, A, H, V, Q, y)),
      (t = 1),
      o === !0 && (t |= 24),
      (o = ga(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = ls()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = { element: n, isDehydrated: a, cache: t }),
      us(o),
      e
    );
  }
  function $h(e) {
    return e ? ((e = Pl), e) : Pl;
  }
  function Ph(e, t, a, n, r, o) {
    ((r = $h(r)),
      n.context === null ? (n.context = r) : (n.pendingContext = r),
      (n = Xn(t)),
      (n.payload = { element: a }),
      (o = o === void 0 ? null : o),
      o !== null && (n.callback = o),
      (a = Qn(e, n, t)),
      a !== null && (sa(a, e, t), Ki(a, e, t)));
  }
  function Wh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function wc(e, t) {
    (Wh(e, t), (e = e.alternate) && Wh(e, t));
  }
  function ep(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = bl(e, 67108864);
      (t !== null && sa(t, e, 67108864), wc(e, 67108864));
    }
  }
  function tp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xa();
      t = M(t);
      var a = bl(e, t);
      (a !== null && sa(a, e, t), wc(e, t));
    }
  }
  var Po = !0;
  function W0(e, t, a, n) {
    var r = z.T;
    z.T = null;
    var o = J.p;
    try {
      ((J.p = 2), _c(e, t, a, n));
    } finally {
      ((J.p = o), (z.T = r));
    }
  }
  function eb(e, t, a, n) {
    var r = z.T;
    z.T = null;
    var o = J.p;
    try {
      ((J.p = 8), _c(e, t, a, n));
    } finally {
      ((J.p = o), (z.T = r));
    }
  }
  function _c(e, t, a, n) {
    if (Po) {
      var r = Cc(n);
      if (r === null) (mc(e, t, n, Wo, a), np(e, n));
      else if (ab(r, e, t, a, n)) n.stopPropagation();
      else if ((np(e, n), t & 4 && -1 < tb.indexOf(e))) {
        for (; r !== null; ) {
          var o = q(r);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var d = Ht(o.pendingLanes);
                  if (d !== 0) {
                    var y = o;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; d; ) {
                      var A = 1 << (31 - gt(d));
                      ((y.entanglements[1] |= A), (d &= ~A));
                    }
                    (en(o), (et & 6) === 0 && ((Uo = zt() + 500), cr(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((y = bl(o, 2)), y !== null && sa(y, o, 2), Ho(), wc(o, 2));
            }
          if (((o = Cc(n)), o === null && mc(e, t, n, Wo, a), o === r)) break;
          r = o;
        }
        r !== null && n.stopPropagation();
      } else mc(e, t, n, null, a);
    }
  }
  function Cc(e) {
    return ((e = Nu(e)), Mc(e));
  }
  var Wo = null;
  function Mc(e) {
    if (((Wo = null), (e = S(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = g(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Wo = e), null);
  }
  function ap(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ft()) {
          case Kt:
            return 2;
          case Vt:
            return 8;
          case Ta:
          case aa:
            return 32;
          case Jt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nc = !1,
    al = null,
    nl = null,
    ll = null,
    yr = new Map(),
    vr = new Map(),
    il = [],
    tb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function np(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        al = null;
        break;
      case "dragenter":
      case "dragleave":
        nl = null;
        break;
      case "mouseover":
      case "mouseout":
        ll = null;
        break;
      case "pointerover":
      case "pointerout":
        yr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vr.delete(t.pointerId);
    }
  }
  function br(e, t, a, n, r, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: n,
          nativeEvent: o,
          targetContainers: [r]
        }),
        t !== null && ((t = q(t)), t !== null && ep(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        r !== null && t.indexOf(r) === -1 && t.push(r),
        e);
  }
  function ab(e, t, a, n, r) {
    switch (t) {
      case "focusin":
        return ((al = br(al, e, t, a, n, r)), !0);
      case "dragenter":
        return ((nl = br(nl, e, t, a, n, r)), !0);
      case "mouseover":
        return ((ll = br(ll, e, t, a, n, r)), !0);
      case "pointerover":
        var o = r.pointerId;
        return (yr.set(o, br(yr.get(o) || null, e, t, a, n, r)), !0);
      case "gotpointercapture":
        return (
          (o = r.pointerId),
          vr.set(o, br(vr.get(o) || null, e, t, a, n, r)),
          !0
        );
    }
    return !1;
  }
  function lp(e) {
    var t = S(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = m(a)), t !== null)) {
            ((e.blockedOn = t),
              ae(e.priority, function () {
                tp(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = g(a)), t !== null)) {
            ((e.blockedOn = t),
              ae(e.priority, function () {
                tp(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function eu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Cc(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var n = new a.constructor(a.type, a);
        ((Mu = n), a.target.dispatchEvent(n), (Mu = null));
      } else return ((t = q(a)), t !== null && ep(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function ip(e, t, a) {
    eu(e) && a.delete(t);
  }
  function nb() {
    ((Nc = !1),
      al !== null && eu(al) && (al = null),
      nl !== null && eu(nl) && (nl = null),
      ll !== null && eu(ll) && (ll = null),
      yr.forEach(ip),
      vr.forEach(ip));
  }
  function tu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Nc ||
        ((Nc = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, nb)));
  }
  var au = null;
  function rp(e) {
    au !== e &&
      ((au = e),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        au === e && (au = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            n = e[t + 1],
            r = e[t + 2];
          if (typeof n != "function") {
            if (Mc(n || a) === null) continue;
            break;
          }
          var o = q(a);
          o !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Cs(o, { pending: !0, data: r, method: a.method, action: n }, n, r));
        }
      }));
  }
  function Ei(e) {
    function t(A) {
      return tu(A, e);
    }
    (al !== null && tu(al, e),
      nl !== null && tu(nl, e),
      ll !== null && tu(ll, e),
      yr.forEach(t),
      vr.forEach(t));
    for (var a = 0; a < il.length; a++) {
      var n = il[a];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < il.length && ((a = il[0]), a.blockedOn === null); )
      (lp(a), a.blockedOn === null && il.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (n = 0; n < a.length; n += 3) {
        var r = a[n],
          o = a[n + 1],
          d = r[le] || null;
        if (typeof o == "function") d || rp(a);
        else if (d) {
          var y = null;
          if (o && o.hasAttribute("formAction")) {
            if (((r = o), (d = o[le] || null))) y = d.formAction;
            else if (Mc(r) !== null) continue;
          } else y = d.action;
          (typeof y == "function" ? (a[n + 1] = y) : (a.splice(n, 3), (n -= 3)),
            rp(a));
        }
      }
  }
  function op() {
    function e(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (r = d);
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
    }
    function t() {
      (r !== null && (r(), (r = null)), n || setTimeout(a, 20));
    }
    function a() {
      if (!n && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace"
          });
      }
    }
    if (typeof navigation == "object") {
      var n = !1,
        r = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            r !== null && (r(), (r = null)));
        }
      );
    }
  }
  function Oc(e) {
    this._internalRoot = e;
  }
  ((nu.prototype.render = Oc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      var a = t.current,
        n = xa();
      Ph(a, n, e, t, null, null);
    }),
    (nu.prototype.unmount = Oc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Ph(e.current, 2, null, e, null, null), Ho(), (t[ge] = null));
        }
      }));
  function nu(e) {
    this._internalRoot = e;
  }
  nu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = K();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < il.length && t !== 0 && t < il[a].priority; a++);
      (il.splice(a, 0, e), a === 0 && lp(e));
    }
  };
  var up = i.version;
  if (up !== "19.2.5") throw Error(u(527, up, "19.2.5"));
  J.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(u(188))
        : ((e = Object.keys(e).join(",")), Error(u(268, e)));
    return (
      (e = h(t)),
      (e = e !== null ? b(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var lb = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lu.isDisabled && lu.supportsFiber)
      try {
        ((na = lu.inject(lb)), (At = lu));
      } catch {}
  }
  return (
    (Mr.createRoot = function (e, t) {
      if (!c(e)) throw Error(u(299));
      var a = !1,
        n = "",
        r = pm,
        o = gm,
        d = ym;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = Ih(e, 1, !1, null, null, a, n, null, r, o, d, op)),
        (e[ge] = t.current),
        dc(e),
        new Oc(t)
      );
    }),
    (Mr.hydrateRoot = function (e, t, a) {
      if (!c(e)) throw Error(u(299));
      var n = !1,
        r = "",
        o = pm,
        d = gm,
        y = ym,
        A = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (n = !0),
          a.identifierPrefix !== void 0 && (r = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (o = a.onUncaughtError),
          a.onCaughtError !== void 0 && (d = a.onCaughtError),
          a.onRecoverableError !== void 0 && (y = a.onRecoverableError),
          a.formState !== void 0 && (A = a.formState)),
        (t = Ih(e, 1, !0, t, a ?? null, n, r, A, o, d, y, op)),
        (t.context = $h(null)),
        (a = t.current),
        (n = xa()),
        (n = M(n)),
        (r = Xn(n)),
        (r.callback = null),
        Qn(a, r, n),
        (a = n),
        (t.current.lanes = a),
        ha(t, a),
        en(t),
        (e[ge] = t.current),
        dc(e),
        new nu(t)
      );
    }),
    (Mr.version = "19.2.5"),
    Mr
  );
}
var vg;
function jT() {
  if (vg) return Kc.exports;
  vg = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return (l(), (Kc.exports = UT()), Kc.exports);
}
var HT = jT();
class BT extends x.Component {
  state = { hasError: !1, error: null };
  static getDerivedStateFromError(i) {
    return { hasError: !0, error: i };
  }
  render() {
    return this.state.hasError && this.state.error
      ? _.jsxs("div", {
          className: "mx-auto max-w-[600px] p-8 font-sans",
          children: [
            _.jsx("h1", {
              className: "text-xl text-destructive",
              children: "Something went wrong"
            }),
            _.jsx("pre", {
              className:
                "mt-2 overflow-auto rounded-md bg-destructive/10 p-4 text-sm",
              children: this.state.error.message
            })
          ]
        })
      : this.props.children;
  }
}
const bg = globalThis.SFDC_ENV?.basePath,
  kT = typeof bg == "string" ? bg.replace(/\/+$/, "") : void 0,
  GT = Tx(Wy, { basename: kT }),
  Sg = document.getElementById("root");
Sg &&
  HT.createRoot(Sg).render(
    _.jsx(x.StrictMode, {
      children: _.jsx(BT, { children: _.jsx(JS, { router: GT }) })
    })
  );
