import {
    j as c
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as x,
    R as b
} from "./index.CtKCFvq0.js";
import {
    c as ot,
    d as Yt,
    i as es,
    k as ct,
    b as ts,
    r as ss,
    e as me,
    g as Ae,
    D as y,
    h as ns,
    p as rs
} from "./Document.Bap7vwYV.js";
import {
    I as is,
    r as as,
    a as os,
    c as k,
    d as W,
    i as cs,
    H as ls,
    T as lt,
    s as us,
    B as hs
} from "./index.BwDjtkKo.js";
import {
    n as ds,
    f as fs,
    d as ps,
    l as ms
} from "./getSanityFileUrl.qZZEuEbn.js";
import {
    d as Fe,
    o as gs,
    U as Ie,
    h as ys,
    n as ke,
    p as ut,
    q as oe,
    r as ht,
    S as dt,
    s as xs,
    i as ft,
    t as vs,
    k as _e,
    u as bs,
    b as js
} from "./_baseForOwn.BCVnIoVi.js";
import {
    i as le,
    l as ue,
    m as ws,
    r as Ps,
    S as Le,
    b as V,
    e as Ss,
    k as Cs,
    c as Os
} from "./get.B5nxRGLq.js";
import {
    c as Fs
} from "./_copyArray.B5-_TdEB.js";
import {
    b as ks,
    c as Ts,
    k as pt
} from "./keyBy.CJDoTgza.js";
import {
    m as mt,
    s as Ns
} from "./VideoAsset.ZXCa1LyB.js";
import {
    m as _
} from "./react.BJ61_sDN.js";
import {
    X as gt
} from "./X.esm.ClQ3KrmU.js";
import {
    S as Es
} from "./ScrollLock.BtDi9WrF.js";
import {
    a as Ms
} from "./use-animation.B7sqP0PS.js";
import {
    A as Z
} from "./index.DxFyLVPS.js";
import {
    T as Ds
} from "./Tag.DlD6Lj2s.js";
import {
    A as Rs
} from "./AnimateChangeInHeight.CBOpwvnb.js";
import {
    C as As
} from "./CaretUp.esm.B0cfIrJT.js";
import {
    C as Is
} from "./Container.Ce-IQkgp.js";
import {
    S as _s
} from "./Select.hfJbHHgD.js";
import {
    d as Ls
} from "./index.CUWDS_la.js";
import {
    a as Qs
} from "./index.B2eaZ1Nz.js";
import {
    Icon as $s
} from "./index.COaLw3f3.js";
import {
    a as Bs
} from "./ItemLink._PWNEyuz.js";
import {
    B as qs
} from "./Box.Dqp3SRBV.js";
const Us = (e, {
        root: t = null,
        rootMargin: s = "0px",
        threshold: i = 0
    } = {}) => {
        const [r, n] = x.useState(!1);
        return x.useEffect(() => {
            if (!e) return;
            const r = new IntersectionObserver(([e]) => {
                n(e.isIntersecting)
            }, {
                root: t,
                rootMargin: s,
                threshold: i
            });
            return r.observe(e), () => {
                r.disconnect()
            }
        }, [e, t, s, i]), {
            isVisible: r
        }
    },
    yt = (e, t) => {
        if (!e.parent || e.isRoot) return "";
        const s = t[e.parent._ref];
        return s ? [yt(s, t), e.slug ? .current].filter(Boolean).join("/") : e.slug ? .current || ""
    },
    z = e => null != e && void 0 !== e && !!e,
    Gs = e => "/preview" === e || e.startsWith("/preview/");
var K = new Map;
K.set("bold", function(e) {
    return b.createElement(b.Fragment, null, b.createElement("line", {
        x1: "64",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), b.createElement("line", {
        x1: "24",
        y1: "80",
        x2: "232",
        y2: "80",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), b.createElement("line", {
        x1: "104",
        y1: "176",
        x2: "152",
        y2: "176",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }))
}), K.set("duotone", function(e) {
    return b.createElement(b.Fragment, null, b.createElement("line", {
        x1: "64",
        y1: "128",
        x2: "192",
        y2: "128",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), b.createElement("line", {
        x1: "24",
        y1: "80",
        x2: "232",
        y2: "80",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), b.createElement("line", {
        x1: "104",
        y1: "176",
        x2: "152",
        y2: "176",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
}), K.set("fill", function() {
    return b.createElement(b.Fragment, null, b.createElement("path", {
        d: "M192,120H64a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"
    }), b.createElement("path", {
        d: "M232,72H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Z"
    }), b.createElement("path", {
        d: "M152,168H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"
    }))
}), K.set("light", function(e) {
    return b.createElement(b.Fragment, null, b.createElement("line", {
        x1: "64",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), b.createElement("line", {
        x1: "24",
        y1: "80",
        x2: "232",
        y2: "80",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), b.createElement("line", {
        x1: "104",
        y1: "176",
        x2: "152",
        y2: "176",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }))
}), K.set("thin", function(e) {
    return b.createElement(b.Fragment, null, b.createElement("line", {
        x1: "64",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), b.createElement("line", {
        x1: "24",
        y1: "80",
        x2: "232",
        y2: "80",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), b.createElement("line", {
        x1: "104",
        y1: "176",
        x2: "152",
        y2: "176",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }))
}), K.set("regular", function(e) {
    return b.createElement(b.Fragment, null, b.createElement("line", {
        x1: "64",
        y1: "128",
        x2: "192",
        y2: "128",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), b.createElement("line", {
        x1: "24",
        y1: "80",
        x2: "232",
        y2: "80",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), b.createElement("line", {
        x1: "104",
        y1: "176",
        x2: "152",
        y2: "176",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
});
var Hs = function(e, t) {
        return as(e, t, K)
    },
    xt = x.forwardRef(function(e, t) {
        return b.createElement(is, Object.assign({
            ref: t
        }, e, {
            renderPath: Hs
        }))
    });
xt.displayName = "FunnelSimple";
var Qe = Object.create,
    zs = function() {
        function e() {}
        return function(t) {
            if (!le(t)) return {};
            if (Qe) return Qe(t);
            e.prototype = t;
            var s = new e;
            return e.prototype = void 0, s
        }
    }();

function Ks(e, t) {
    for (var s = -1, i = null == e ? 0 : e.length; ++s < i && !1 !== t(e[s], s, e););
    return e
}

function Ws(e, t, s, i) {
    var r = !s;
    s || (s = {});
    for (var n = -1, a = t.length; ++n < a;) {
        var o = t[n],
            c = void 0;
        void 0 === c && (c = e[o]), r ? Fe(s, o, c) : ot(s, o, c)
    }
    return s
}

function Vs(e) {
    return Yt(function(t, s) {
        var i = -1,
            r = s.length,
            n = r > 1 ? s[r - 1] : void 0,
            a = r > 2 ? s[2] : void 0;
        for (n = e.length > 3 && "function" == typeof n ? (r--, n) : void 0, a && es(s[0], s[1], a) && (n = r < 3 ? void 0 : n, r = 1), t = Object(t); ++i < r;) {
            var o = s[i];
            o && e(t, o, i, n)
        }
        return t
    })
}
var vt = gs(Object.getPrototypeOf, Object),
    Zs = "[object Object]",
    Js = Function.prototype,
    Xs = Object.prototype,
    bt = Js.toString,
    Ys = Xs.hasOwnProperty,
    en = bt.call(Object);

function tn(e) {
    if (!ue(e) || ws(e) != Zs) return !1;
    var t = vt(e);
    if (null === t) return !0;
    var s = Ys.call(t, "constructor") && t.constructor;
    return "function" == typeof s && s instanceof s && bt.call(s) == en
}
var jt = "object" == typeof exports && exports && !exports.nodeType && exports,
    $e = jt && "object" == typeof module && module && !module.nodeType && module,
    sn = $e && $e.exports === jt,
    Be = sn ? Ps.Buffer : void 0,
    qe = Be ? Be.allocUnsafe : void 0;

function wt(e, t) {
    if (t) return e.slice();
    var s = e.length,
        i = qe ? qe(s) : new e.constructor(s);
    return e.copy(i), i
}
var nn = Object.prototype,
    rn = nn.hasOwnProperty;

function an(e) {
    var t = e.length,
        s = new e.constructor(t);
    return t && "string" == typeof e[0] && rn.call(e, "index") && (s.index = e.index, s.input = e.input), s
}

function Te(e) {
    var t = new e.constructor(e.byteLength);
    return new Ie(t).set(new Ie(e)), t
}

function on(e, t) {
    var s = Te(e.buffer);
    return new e.constructor(s, e.byteOffset, e.byteLength)
}
var cn = /\w*$/;

function ln(e) {
    var t = new e.constructor(e.source, cn.exec(e));
    return t.lastIndex = e.lastIndex, t
}
var Ue = Le ? Le.prototype : void 0,
    Ge = Ue ? Ue.valueOf : void 0;

function un(e) {
    return Ge ? Object(Ge.call(e)) : {}
}

function Pt(e, t) {
    var s = t ? Te(e.buffer) : e.buffer;
    return new e.constructor(s, e.byteOffset, e.length)
}
var hn = "[object Boolean]",
    dn = "[object Date]",
    fn = "[object Map]",
    pn = "[object Number]",
    mn = "[object RegExp]",
    gn = "[object Set]",
    yn = "[object String]",
    xn = "[object Symbol]",
    vn = "[object ArrayBuffer]",
    bn = "[object DataView]",
    jn = "[object Float32Array]",
    wn = "[object Float64Array]",
    Pn = "[object Int8Array]",
    Sn = "[object Int16Array]",
    Cn = "[object Int32Array]",
    On = "[object Uint8Array]",
    Fn = "[object Uint8ClampedArray]",
    kn = "[object Uint16Array]",
    Tn = "[object Uint32Array]";

function Nn(e, t, s) {
    var i = e.constructor;
    switch (t) {
        case vn:
            return Te(e);
        case hn:
        case dn:
            return new i(+e);
        case bn:
            return on(e);
        case jn:
        case wn:
        case Pn:
        case Sn:
        case Cn:
        case On:
        case Fn:
        case kn:
        case Tn:
            return Pt(e, s);
        case fn:
            return new i;
        case pn:
        case yn:
            return new i(e);
        case mn:
            return ln(e);
        case gn:
            return new i;
        case xn:
            return un(e)
    }
}

function St(e) {
    return "function" != typeof e.constructor || ys(e) ? {} : zs(vt(e))
}
var En = "[object Map]";

function Mn(e) {
    return ue(e) && ke(e) == En
}
var He = oe && oe.isMap,
    Dn = He ? ut(He) : Mn,
    Rn = "[object Set]";

function An(e) {
    return ue(e) && ke(e) == Rn
}
var ze = oe && oe.isSet,
    In = ze ? ut(ze) : An,
    _n = 1,
    Ct = "[object Arguments]",
    Ln = "[object Array]",
    Qn = "[object Boolean]",
    $n = "[object Date]",
    Bn = "[object Error]",
    Ot = "[object Function]",
    qn = "[object GeneratorFunction]",
    Un = "[object Map]",
    Gn = "[object Number]",
    Ft = "[object Object]",
    Hn = "[object RegExp]",
    zn = "[object Set]",
    Kn = "[object String]",
    Wn = "[object Symbol]",
    Vn = "[object WeakMap]",
    Zn = "[object ArrayBuffer]",
    Jn = "[object DataView]",
    Xn = "[object Float32Array]",
    Yn = "[object Float64Array]",
    er = "[object Int8Array]",
    tr = "[object Int16Array]",
    sr = "[object Int32Array]",
    nr = "[object Uint8Array]",
    rr = "[object Uint8ClampedArray]",
    ir = "[object Uint16Array]",
    ar = "[object Uint32Array]",
    w = {};

function ae(e, t, s, i, r, n) {
    var a, o = t & _n;
    if (void 0 !== a) return a;
    if (!le(e)) return e;
    var c = V(e);
    if (c) a = an(e);
    else {
        var l = ke(e),
            u = l == Ot || l == qn;
        if (ht(e)) return wt(e, o);
        if (l == Ft || l == Ct || u && !r) a = u ? {} : St(e);
        else {
            if (!w[l]) return r ? e : {};
            a = Nn(e, l, o)
        }
    }
    n || (n = new dt);
    var h = n.get(e);
    if (h) return h;
    n.set(e, a), In(e) ? e.forEach(function(i) {
        a.add(ae(i, t, s, i, e, n))
    }) : Dn(e) && e.forEach(function(i, r) {
        a.set(r, ae(i, t, s, r, e, n))
    });
    var d = c ? void 0 : xs(e);
    return Ks(d || e, function(i, r) {
        d && (i = e[r = i]), ot(a, r, ae(i, t, s, r, e, n))
    }), a
}
w[Ct] = w[Ln] = w[Zn] = w[Jn] = w[Qn] = w[$n] = w[Xn] = w[Yn] = w[er] = w[tr] = w[sr] = w[Un] = w[Gn] = w[Ft] = w[Hn] = w[zn] = w[Kn] = w[Wn] = w[nr] = w[rr] = w[ir] = w[ar] = !0, w[Bn] = w[Ot] = w[Vn] = !1;
var or = 1,
    cr = 4;

function Ke(e) {
    return ae(e, or | cr)
}

function ge(e, t, s) {
    (void 0 !== s && !Ss(e[t], s) || void 0 === s && !(t in e)) && Fe(e, t, s)
}

function lr(e) {
    return ue(e) && ft(e)
}

function ye(e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
}

function ur(e) {
    return Ws(e, ct(e))
}

function hr(e, t, s, i, r, n, a) {
    var o = ye(e, s),
        c = ye(t, s),
        l = a.get(c);
    if (l) ge(e, s, l);
    else {
        var u = n ? n(o, c, s + "", e, t, a) : void 0,
            h = void 0 === u;
        if (h) {
            var d = V(c),
                p = !d && ht(c),
                f = !d && !p && vs(c);
            u = c, d || p || f ? V(o) ? u = o : lr(o) ? u = Fs(o) : p ? (h = !1, u = wt(c, !0)) : f ? (h = !1, u = Pt(c, !0)) : u = [] : tn(c) || _e(c) ? (u = o, _e(o) ? u = ur(o) : (!le(o) || Cs(o)) && (u = St(c))) : h = !1
        }
        h && (a.set(c, u), r(u, c, i, n, a), a.delete(c)), ge(e, s, u)
    }
}

function kt(e, t, s, i, r) {
    e !== t && bs(t, function(n, a) {
        if (r || (r = new dt), le(n)) hr(e, t, a, s, kt, i, r);
        else {
            var o = i ? i(ye(e, a), n, a + "", e, t, r) : void 0;
            void 0 === o && (o = n), ge(e, a, o)
        }
    }, ct)
}
var dr = Vs(function(e, t, s, i) {
    kt(e, t, s, i)
});

function fr(e, t) {
    var s = -1,
        i = ft(e) ? Array(e.length) : [];
    return ks(e, function(e, r, n) {
        i[++s] = t(e, r, n)
    }), i
}

function he(e, t) {
    return (V(e) ? Os : fr)(e, js(t))
}

function pr(e, t) {
    return ts(he(e, t))
}
var mr = Object.prototype,
    gr = mr.hasOwnProperty,
    yr = Ts(function(e, t, s) {
        gr.call(e, s) ? e[s].push(t) : Fe(e, s, [t])
    });
const Ne = e => Tt(e) ? e.to.map(e => "reference" === e._type ? e._ref : "").filter(Boolean) : xr(e) ? e.of.flatMap(Ne) : [],
    Tt = e => "referenceField" === e._type,
    xr = e => vr(e) && 1 === e.of.length && Tt(e.of[0]),
    vr = e => "arrayField" === e._type,
    br = e => "objectField" === e._type,
    jr = ss({
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        7: "grid-cols-7",
        8: "grid-cols-8",
        9: "grid-cols-9",
        10: "grid-cols-10",
        11: "grid-cols-11",
        12: "grid-cols-12"
    });
var te = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    wr = class extends te {#
        e;#
        t;#
        s;
        constructor() {
            super(), this.#s = e => {
                if (typeof window < "u" && window.addEventListener) {
                    const t = () => e();
                    return window.addEventListener("visibilitychange", t, !1), () => {
                        window.removeEventListener("visibilitychange", t)
                    }
                }
            }
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#s)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t ? .(), this.#t = void 0)
        }
        setEventListener(e) {
            this.#s = e, this.#t ? .(), this.#t = e(e => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#e !== e && (this.#e = e, this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(t => {
                t(e)
            })
        }
        isFocused() {
            return "boolean" == typeof this.#e ? this.#e : "hidden" !== globalThis.document ? .visibilityState
        }
    },
    Ee = new wr,
    Pr = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout: e => clearTimeout(e),
        setInterval: (e, t) => setInterval(e, t),
        clearInterval: e => clearInterval(e)
    },
    Sr = class {#
        e = Pr;#
        t = !1;
        setTimeoutProvider(e) {
            this.#e = e
        }
        setTimeout(e, t) {
            return this.#e.setTimeout(e, t)
        }
        clearTimeout(e) {
            this.#e.clearTimeout(e)
        }
        setInterval(e, t) {
            return this.#e.setInterval(e, t)
        }
        clearInterval(e) {
            this.#e.clearInterval(e)
        }
    },
    H = new Sr;

function Cr(e) {
    setTimeout(e, 0)
}
var Or = typeof window > "u" || "Deno" in globalThis;

function T() {}

function Fr(e, t) {
    return "function" == typeof e ? e(t) : e
}

function xe(e) {
    return "number" == typeof e && e >= 0 && e !== 1 / 0
}

function Nt(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function q(e, t) {
    return "function" == typeof e ? e(t) : e
}

function D(e, t) {
    return "function" == typeof e ? e(t) : e
}

function We(e, t) {
    const {
        type: s = "all",
        exact: i,
        fetchStatus: r,
        predicate: n,
        queryKey: a,
        stale: o
    } = e;
    if (a)
        if (i) {
            if (t.queryHash !== Me(a, t.options)) return !1
        } else if (!Y(t.queryKey, a)) return !1;
    if ("all" !== s) {
        const e = t.isActive();
        if ("active" === s && !e || "inactive" === s && e) return !1
    }
    return !("boolean" == typeof o && t.isStale() !== o || r && r !== t.state.fetchStatus || n && !n(t))
}

function Ve(e, t) {
    const {
        exact: s,
        status: i,
        predicate: r,
        mutationKey: n
    } = e;
    if (n) {
        if (!t.options.mutationKey) return !1;
        if (s) {
            if (X(t.options.mutationKey) !== X(n)) return !1
        } else if (!Y(t.options.mutationKey, n)) return !1
    }
    return !(i && t.state.status !== i || r && !r(t))
}

function Me(e, t) {
    return (t ? .queryKeyHashFn || X)(e)
}

function X(e) {
    return JSON.stringify(e, (e, t) => be(t) ? Object.keys(t).sort().reduce((e, s) => (e[s] = t[s], e), {}) : t)
}

function Y(e, t) {
    return e === t || typeof e == typeof t && (!(!e || !t || "object" != typeof e || "object" != typeof t) && Object.keys(t).every(s => Y(e[s], t[s])))
}
var kr = Object.prototype.hasOwnProperty;

function Et(e, t, s = 0) {
    if (e === t) return e;
    if (s > 500) return t;
    const i = Ze(e) && Ze(t);
    if (!(i || be(e) && be(t))) return t;
    const r = (i ? e : Object.keys(e)).length,
        n = i ? t : Object.keys(t),
        a = n.length,
        o = i ? new Array(a) : {};
    let c = 0;
    for (let l = 0; l < a; l++) {
        const a = i ? l : n[l],
            u = e[a],
            h = t[a];
        if (u === h) {
            o[a] = u, (i ? l < r : kr.call(e, a)) && c++;
            continue
        }
        if (null === u || null === h || "object" != typeof u || "object" != typeof h) {
            o[a] = h;
            continue
        }
        const d = Et(u, h, s + 1);
        o[a] = d, d === u && c++
    }
    return r === a && c === r ? e : o
}

function ve(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const s in e)
        if (e[s] !== t[s]) return !1;
    return !0
}

function Ze(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function be(e) {
    if (!Je(e)) return !1;
    const t = e.constructor;
    if (void 0 === t) return !0;
    const s = t.prototype;
    return !(!Je(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Je(e) {
    return "[object Object]" === Object.prototype.toString.call(e)
}

function Tr(e) {
    return new Promise(t => {
        H.setTimeout(t, e)
    })
}

function je(e, t, s) {
    return "function" == typeof s.structuralSharing ? s.structuralSharing(e, t) : !1 !== s.structuralSharing ? Et(e, t) : t
}

function Nr(e) {
    return e
}

function Er(e, t, s = 0) {
    const i = [...e, t];
    return s && i.length > s ? i.slice(1) : i
}

function Mr(e, t, s = 0) {
    const i = [t, ...e];
    return s && i.length > s ? i.slice(0, -1) : i
}
var De = Symbol();

function Mt(e, t) {
    return !e.queryFn && t ? .initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== De ? e.queryFn : () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
}

function Dt(e, t) {
    return "function" == typeof e ? e(...t) : !!e
}

function Dr(e, t, s) {
    let i, r = !1;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => (i ? ? = t(), r || (r = !0, i.aborted ? s() : i.addEventListener("abort", s, {
            once: !0
        })), i)
    }), e
}
var ee = (() => {
    let e = () => Or;
    return {
        isServer: () => e(),
        setIsServer(t) {
            e = t
        }
    }
})();

function we() {
    let e, t;
    const s = new Promise((s, i) => {
        e = s, t = i
    });

    function i(e) {
        Object.assign(s, e), delete s.resolve, delete s.reject
    }
    return s.status = "pending", s.catch(() => {}), s.resolve = t => {
        i({
            status: "fulfilled",
            value: t
        }), e(t)
    }, s.reject = e => {
        i({
            status: "rejected",
            reason: e
        }), t(e)
    }, s
}
var Rr = Cr;

function Ar() {
    let e = [],
        t = 0,
        s = e => {
            e()
        },
        i = e => {
            e()
        },
        r = Rr;
    const n = i => {
        t ? e.push(i) : r(() => {
            s(i)
        })
    };
    return {
        batch: n => {
            let a;
            t++;
            try {
                a = n()
            } finally {
                t--, t || (() => {
                    const t = e;
                    e = [], t.length && r(() => {
                        i(() => {
                            t.forEach(e => {
                                s(e)
                            })
                        })
                    })
                })()
            }
            return a
        },
        batchCalls: e => (...t) => {
            n(() => {
                e(...t)
            })
        },
        schedule: n,
        setNotifyFunction: e => {
            s = e
        },
        setBatchNotifyFunction: e => {
            i = e
        },
        setScheduler: e => {
            r = e
        }
    }
}
var F = Ar(),
    Ir = class extends te {#
        e = !0;#
        t;#
        s;
        constructor() {
            super(), this.#s = e => {
                if (typeof window < "u" && window.addEventListener) {
                    const t = () => e(!0),
                        s = () => e(!1);
                    return window.addEventListener("online", t, !1), window.addEventListener("offline", s, !1), () => {
                        window.removeEventListener("online", t), window.removeEventListener("offline", s)
                    }
                }
            }
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#s)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t ? .(), this.#t = void 0)
        }
        setEventListener(e) {
            this.#s = e, this.#t ? .(), this.#t = e(this.setOnline.bind(this))
        }
        setOnline(e) {
            this.#e !== e && (this.#e = e, this.listeners.forEach(t => {
                t(e)
            }))
        }
        isOnline() {
            return this.#e
        }
    },
    ce = new Ir;

function _r(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function Rt(e) {
    return "online" !== (e ? ? "online") || ce.isOnline()
}
var Pe = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e ? .revert, this.silent = e ? .silent
    }
};

function At(e) {
    let t, s = !1,
        i = 0;
    const r = we(),
        n = () => "pending" !== r.status,
        a = () => Ee.isFocused() && ("always" === e.networkMode || ce.isOnline()) && e.canRun(),
        o = () => Rt(e.networkMode) && e.canRun(),
        c = e => {
            n() || (t ? .(), r.resolve(e))
        },
        l = e => {
            n() || (t ? .(), r.reject(e))
        },
        u = () => new Promise(s => {
            t = e => {
                (n() || a()) && s(e)
            }, e.onPause ? .()
        }).then(() => {
            t = void 0, n() || e.onContinue ? .()
        }),
        h = () => {
            if (n()) return;
            let t;
            const r = 0 === i ? e.initialPromise : void 0;
            try {
                t = r ? ? e.fn()
            } catch (e) {
                t = Promise.reject(e)
            }
            Promise.resolve(t).then(c).catch(t => {
                if (n()) return;
                const r = e.retry ? ? (ee.isServer() ? 0 : 3),
                    o = e.retryDelay ? ? _r,
                    c = "function" == typeof o ? o(i, t) : o,
                    d = !0 === r || "number" == typeof r && i < r || "function" == typeof r && r(i, t);
                !s && d ? (i++, e.onFail ? .(i, t), Tr(c).then(() => a() ? void 0 : u()).then(() => {
                    s ? l(t) : h()
                })) : l(t)
            })
        };
    return {
        promise: r,
        status: () => r.status,
        cancel: t => {
            if (!n()) {
                const s = new Pe(t);
                l(s), e.onCancel ? .(s)
            }
        },
        continue: () => (t ? .(), r),
        cancelRetry: () => {
            s = !0
        },
        continueRetry: () => {
            s = !1
        },
        canStart: o,
        start: () => (o() ? h() : u().then(h), r)
    }
}
var It = class {#
    e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(), xe(this.gcTime) && (this.#e = H.setTimeout(() => {
            this.optionalRemove()
        }, this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ? ? (ee.isServer() ? 1 / 0 : 3e5))
    }
    clearGcTimeout() {
        void 0 !== this.#e && (H.clearTimeout(this.#e), this.#e = void 0)
    }
};

function Lr(e) {
    return {
        onFetch: (t, s) => {
            const i = t.options,
                r = t.fetchOptions ? .meta ? .fetchMore ? .direction,
                n = t.state.data ? .pages || [],
                a = t.state.data ? .pageParams || [];
            let o = {
                    pages: [],
                    pageParams: []
                },
                c = 0;
            const l = async () => {
                let s = !1;
                const l = Mt(t.options, t.fetchOptions),
                    u = async (e, i, r) => {
                        if (s) return Promise.reject(t.signal.reason);
                        if (null == i && e.pages.length) return Promise.resolve(e);
                        const n = (() => {
                                const e = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: i,
                                    direction: r ? "backward" : "forward",
                                    meta: t.options.meta
                                };
                                return (e => {
                                    Dr(e, () => t.signal, () => s = !0)
                                })(e), e
                            })(),
                            a = await l(n),
                            {
                                maxPages: o
                            } = t.options,
                            c = r ? Mr : Er;
                        return {
                            pages: c(e.pages, a, o),
                            pageParams: c(e.pageParams, i, o)
                        }
                    };
                if (r && n.length) {
                    const e = "backward" === r,
                        t = {
                            pages: n,
                            pageParams: a
                        },
                        s = (e ? _t : Se)(i, t);
                    o = await u(t, s, e)
                } else {
                    const t = e ? ? n.length;
                    do {
                        const e = 0 === c ? a[0] ? ? i.initialPageParam : Se(i, o);
                        if (c > 0 && null == e) break;
                        o = await u(o, e), c++
                    } while (c < t)
                }
                return o
            };
            t.options.persister ? t.fetchFn = () => t.options.persister ? .(l, {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal
            }, s) : t.fetchFn = l
        }
    }
}

function Se(e, {
    pages: t,
    pageParams: s
}) {
    const i = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[i], t, s[i], s) : void 0
}

function _t(e, {
    pages: t,
    pageParams: s
}) {
    return t.length > 0 ? e.getPreviousPageParam ? .(t[0], t, s[0], s) : void 0
}

function Qr(e, t) {
    return !!t && null != Se(e, t)
}

function $r(e, t) {
    return !(!t || !e.getPreviousPageParam) && null != _t(e, t)
}
var Br = class extends It {#
    e;#
    t;#
    s;#
    i;#
    r;#
    n;#
    a;#
    o;
    constructor(e) {
        super(), this.#o = !1, this.#a = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#r = e.client, this.#i = this.#r.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = Ye(this.options), this.state = e.state ? ? this.#t, this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get queryType() {
        return this.#e
    }
    get promise() {
        return this.#n ? .promise
    }
    setOptions(e) {
        if (this.options = { ...this.#a,
                ...e
            }, e ? ._type && (this.#e = e._type), this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
            const e = Ye(this.options);
            void 0 !== e.data && (this.setState(Xe(e.data, e.dataUpdatedAt)), this.#t = e)
        }
    }
    optionalRemove() {
        !this.observers.length && "idle" === this.state.fetchStatus && this.#i.remove(this)
    }
    setData(e, t) {
        const s = je(this.state.data, e, this.options);
        return this.#c({
            data: s,
            type: "success",
            dataUpdatedAt: t ? .updatedAt,
            manual: t ? .manual
        }), s
    }
    setState(e) {
        this.#c({
            type: "setState",
            state: e
        })
    }
    cancel(e) {
        const t = this.#n ? .promise;
        return this.#n ? .cancel(e), t ? t.then(T).catch(T) : Promise.resolve()
    }
    destroy() {
        super.destroy(), this.cancel({
            silent: !0
        })
    }
    get resetState() {
        return this.#t
    }
    reset() {
        this.destroy(), this.setState(this.resetState)
    }
    isActive() {
        return this.observers.some(e => !1 !== D(e.options.enabled, this))
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === De || !this.isFetched()
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
    }
    isStatic() {
        return this.getObserversCount() > 0 && this.observers.some(e => "static" === q(e.options.staleTime, this))
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
    }
    isStaleByTime(e = 0) {
        return void 0 === this.state.data || "static" !== e && (!!this.state.isInvalidated || !Nt(this.state.dataUpdatedAt, e))
    }
    onFocus() {
        this.observers.find(e => e.shouldFetchOnWindowFocus()) ? .refetch({
            cancelRefetch: !1
        }), this.#n ? .continue()
    }
    onOnline() {
        this.observers.find(e => e.shouldFetchOnReconnect()) ? .refetch({
            cancelRefetch: !1
        }), this.#n ? .continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#i.notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#n && (this.#o || this.#l() ? this.#n.cancel({
            revert: !0
        }) : this.#n.cancelRetry()), this.scheduleGc()), this.#i.notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }#
    l() {
        return "paused" === this.state.fetchStatus && "pending" === this.state.status
    }
    invalidate() {
        this.state.isInvalidated || this.#c({
            type: "invalidate"
        })
    }
    async fetch(e, t) {
        if ("idle" !== this.state.fetchStatus && "rejected" !== this.#n ? .status())
            if (void 0 !== this.state.data && t ? .cancelRefetch) this.cancel({
                silent: !0
            });
            else if (this.#n) return this.#n.continueRetry(), this.#n.promise;
        if (e && this.setOptions(e), !this.options.queryFn) {
            const e = this.observers.find(e => e.options.queryFn);
            e && this.setOptions(e.options)
        }
        const s = new AbortController,
            i = e => {
                Object.defineProperty(e, "signal", {
                    enumerable: !0,
                    get: () => (this.#o = !0, s.signal)
                })
            },
            r = () => {
                const e = Mt(this.options, t),
                    s = (() => {
                        const e = {
                            client: this.#r,
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                        return i(e), e
                    })();
                return this.#o = !1, this.options.persister ? this.options.persister(e, s, this) : e(s)
            },
            n = (() => {
                const e = {
                    fetchOptions: t,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#r,
                    state: this.state,
                    fetchFn: r
                };
                return i(e), e
            })();
        ("infinite" === this.#e ? Lr(this.options.pages) : this.options.behavior) ? .onFetch(n, this), this.#s = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== n.fetchOptions ? .meta) && this.#c({
            type: "fetch",
            meta: n.fetchOptions ? .meta
        }), this.#n = At({
            initialPromise: t ? .initialPromise,
            fn: n.fetchFn,
            onCancel: e => {
                e instanceof Pe && e.revert && this.setState({ ...this.#s,
                    fetchStatus: "idle"
                }), s.abort()
            },
            onFail: (e, t) => {
                this.#c({
                    type: "failed",
                    failureCount: e,
                    error: t
                })
            },
            onPause: () => {
                this.#c({
                    type: "pause"
                })
            },
            onContinue: () => {
                this.#c({
                    type: "continue"
                })
            },
            retry: n.options.retry,
            retryDelay: n.options.retryDelay,
            networkMode: n.options.networkMode,
            canRun: () => !0
        });
        try {
            const e = await this.#n.start();
            if (void 0 === e) throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(e), this.#i.config.onSuccess ? .(e, this), this.#i.config.onSettled ? .(e, this.state.error, this), e
        } catch (e) {
            if (e instanceof Pe) {
                if (e.silent) return this.#n.promise;
                if (e.revert) {
                    if (void 0 === this.state.data) throw e;
                    return this.state.data
                }
            }
            throw this.#c({
                type: "error",
                error: e
            }), this.#i.config.onError ? .(e, this), this.#i.config.onSettled ? .(this.state.data, e, this), e
        } finally {
            this.scheduleGc()
        }
    }#
    c(e) {
        this.state = (t => {
            switch (e.type) {
                case "failed":
                    return { ...t,
                        fetchFailureCount: e.failureCount,
                        fetchFailureReason: e.error
                    };
                case "pause":
                    return { ...t,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...t,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...t,
                        ...Lt(t.data, this.options),
                        fetchMeta: e.meta ? ? null
                    };
                case "success":
                    const s = { ...t,
                        ...Xe(e.data, e.dataUpdatedAt),
                        dataUpdateCount: t.dataUpdateCount + 1,
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return this.#s = e.manual ? s : void 0, s;
                case "error":
                    const i = e.error;
                    return { ...t,
                        error: i,
                        errorUpdateCount: t.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: t.fetchFailureCount + 1,
                        fetchFailureReason: i,
                        fetchStatus: "idle",
                        status: "error",
                        isInvalidated: !0
                    };
                case "invalidate":
                    return { ...t,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...t,
                        ...e.state
                    }
            }
        })(this.state), F.batch(() => {
            this.observers.forEach(e => {
                e.onQueryUpdate()
            }), this.#i.notify({
                query: this,
                type: "updated",
                action: e
            })
        })
    }
};

function Lt(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Rt(t.networkMode) ? "fetching" : "paused",
        ...void 0 === e && {
            error: null,
            status: "pending"
        }
    }
}

function Xe(e, t) {
    return {
        data: e,
        dataUpdatedAt: t ? ? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function Ye(e) {
    const t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
        s = void 0 !== t,
        i = s ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? i ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Qt = class extends te {
    constructor(e, t) {
        super(), this.options = t, this.#e = e, this.#o = null, this.#a = we(), this.bindMethods(), this.setOptions(t)
    }#
    e;#
    t = void 0;#
    s = void 0;#
    i = void 0;#
    r;#
    n;#
    a;#
    o;#
    l;#
    c;#
    u;#
    h;#
    d;#
    p;#
    f = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        1 === this.listeners.size && (this.#t.addObserver(this), et(this.#t, this.options) ? this.#m() : this.updateResult(), this.#y())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Ce(this.#t, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Ce(this.#t, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, this.#g(), this.#x(), this.#t.removeObserver(this)
    }
    setOptions(e) {
        const t = this.options,
            s = this.#t;
        if (this.options = this.#e.defaultQueryOptions(e), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof D(this.options.enabled, this.#t)) throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#v(), this.#t.setOptions(this.options), t._defaulted && !ve(this.options, t) && this.#e.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this
        });
        const i = this.hasListeners();
        i && tt(this.#t, s, this.options, t) && this.#m(), this.updateResult(), i && (this.#t !== s || D(this.options.enabled, this.#t) !== D(t.enabled, this.#t) || q(this.options.staleTime, this.#t) !== q(t.staleTime, this.#t)) && this.#b();
        const r = this.#j();
        i && (this.#t !== s || D(this.options.enabled, this.#t) !== D(t.enabled, this.#t) || r !== this.#p) && this.#w(r)
    }
    getOptimisticResult(e) {
        const t = this.#e.getQueryCache().build(this.#e, e),
            s = this.createResult(t, e);
        return Ur(this, s) && (this.#i = s, this.#n = this.options, this.#r = this.#t.state), s
    }
    getCurrentResult() {
        return this.#i
    }
    trackResult(e, t) {
        return new Proxy(e, {
            get: (e, s) => (this.trackProp(s), t ? .(s), "promise" === s && (this.trackProp("data"), !this.options.experimental_prefetchInRender && "pending" === this.#a.status && this.#a.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(e, s))
        })
    }
    trackProp(e) {
        this.#f.add(e)
    }
    getCurrentQuery() {
        return this.#t
    }
    refetch({ ...e
    } = {}) {
        return this.fetch({ ...e
        })
    }
    fetchOptimistic(e) {
        const t = this.#e.defaultQueryOptions(e),
            s = this.#e.getQueryCache().build(this.#e, t);
        return s.fetch().then(() => this.createResult(s, t))
    }
    fetch(e) {
        return this.#m({ ...e,
            cancelRefetch: e.cancelRefetch ? ? !0
        }).then(() => (this.updateResult(), this.#i))
    }#
    m(e) {
        this.#v();
        let t = this.#t.fetch(this.options, e);
        return e ? .throwOnError || (t = t.catch(T)), t
    }#
    b() {
        this.#g();
        const e = q(this.options.staleTime, this.#t);
        if (ee.isServer() || this.#i.isStale || !xe(e)) return;
        const t = Nt(this.#i.dataUpdatedAt, e) + 1;
        this.#h = H.setTimeout(() => {
            this.#i.isStale || this.updateResult()
        }, t)
    }#
    j() {
        return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ? ? !1
    }#
    w(e) {
        this.#x(), this.#p = e, !ee.isServer() && !1 !== D(this.options.enabled, this.#t) && xe(this.#p) && 0 !== this.#p && (this.#d = H.setInterval(() => {
            (this.options.refetchIntervalInBackground || Ee.isFocused()) && this.#m()
        }, this.#p))
    }#
    y() {
        this.#b(), this.#w(this.#j())
    }#
    g() {
        void 0 !== this.#h && (H.clearTimeout(this.#h), this.#h = void 0)
    }#
    x() {
        void 0 !== this.#d && (H.clearInterval(this.#d), this.#d = void 0)
    }
    createResult(e, t) {
        const s = this.#t,
            i = this.options,
            r = this.#i,
            n = this.#r,
            a = this.#n,
            o = e !== s ? e.state : this.#s,
            {
                state: c
            } = e;
        let l, u = { ...c
            },
            h = !1;
        if (t._optimisticResults) {
            const r = this.hasListeners(),
                n = !r && et(e, t),
                a = r && tt(e, s, t, i);
            (n || a) && (u = { ...u,
                ...Lt(c.data, e.options)
            }), "isRestoring" === t._optimisticResults && (u.fetchStatus = "idle")
        }
        let {
            error: d,
            errorUpdatedAt: p,
            status: f
        } = u;
        l = u.data;
        let m = !1;
        if (void 0 !== t.placeholderData && void 0 === l && "pending" === f) {
            let e;
            r ? .isPlaceholderData && t.placeholderData === a ? .placeholderData ? (e = r.data, m = !0) : e = "function" == typeof t.placeholderData ? t.placeholderData(this.#u ? .state.data, this.#u) : t.placeholderData, void 0 !== e && (f = "success", l = je(r ? .data, e, t), h = !0)
        }
        if (t.select && void 0 !== l && !m)
            if (r && l === n ? .data && t.select === this.#l) l = this.#c;
            else try {
                this.#l = t.select, l = t.select(l), l = je(r ? .data, l, t), this.#c = l, this.#o = null
            } catch (e) {
                this.#o = e
            }
        this.#o && (d = this.#o, l = this.#c, p = Date.now(), f = "error");
        const y = "fetching" === u.fetchStatus,
            g = "pending" === f,
            x = "error" === f,
            v = g && y,
            b = void 0 !== l,
            j = {
                status: f,
                fetchStatus: u.fetchStatus,
                isPending: g,
                isSuccess: "success" === f,
                isError: x,
                isInitialLoading: v,
                isLoading: v,
                data: l,
                dataUpdatedAt: u.dataUpdatedAt,
                error: d,
                errorUpdatedAt: p,
                failureCount: u.fetchFailureCount,
                failureReason: u.fetchFailureReason,
                errorUpdateCount: u.errorUpdateCount,
                isFetched: e.isFetched(),
                isFetchedAfterMount: u.dataUpdateCount > o.dataUpdateCount || u.errorUpdateCount > o.errorUpdateCount,
                isFetching: y,
                isRefetching: y && !g,
                isLoadingError: x && !b,
                isPaused: "paused" === u.fetchStatus,
                isPlaceholderData: h,
                isRefetchError: x && b,
                isStale: Re(e, t),
                refetch: this.refetch,
                promise: this.#a,
                isEnabled: !1 !== D(t.enabled, e)
            };
        if (this.options.experimental_prefetchInRender) {
            const t = void 0 !== j.data,
                i = "error" === j.status && !t,
                r = e => {
                    i ? e.reject(j.error) : t && e.resolve(j.data)
                },
                n = () => {
                    const e = this.#a = j.promise = we();
                    r(e)
                },
                a = this.#a;
            switch (a.status) {
                case "pending":
                    e.queryHash === s.queryHash && r(a);
                    break;
                case "fulfilled":
                    (i || j.data !== a.value) && n();
                    break;
                case "rejected":
                    (!i || j.error !== a.reason) && n()
            }
        }
        return j
    }
    updateResult() {
        const e = this.#i,
            t = this.createResult(this.#t, this.options);
        if (this.#r = this.#t.state, this.#n = this.options, void 0 !== this.#r.data && (this.#u = this.#t), ve(t, e)) return;
        this.#i = t;
        this.#k({
            listeners: (() => {
                if (!e) return !0;
                const {
                    notifyOnChangeProps: t
                } = this.options, s = "function" == typeof t ? t() : t;
                if ("all" === s || !s && !this.#f.size) return !0;
                const i = new Set(s ? ? this.#f);
                return this.options.throwOnError && i.add("error"), Object.keys(this.#i).some(t => {
                    const s = t;
                    return this.#i[s] !== e[s] && i.has(s)
                })
            })()
        })
    }#
    v() {
        const e = this.#e.getQueryCache().build(this.#e, this.options);
        if (e === this.#t) return;
        const t = this.#t;
        this.#t = e, this.#s = e.state, this.hasListeners() && (t ? .removeObserver(this), e.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && this.#y()
    }#
    k(e) {
        F.batch(() => {
            e.listeners && this.listeners.forEach(e => {
                e(this.#i)
            }), this.#e.getQueryCache().notify({
                query: this.#t,
                type: "observerResultsUpdated"
            })
        })
    }
};

function qr(e, t) {
    return !1 !== D(t.enabled, e) && void 0 === e.state.data && !("error" === e.state.status && !1 === D(t.retryOnMount, e))
}

function et(e, t) {
    return qr(e, t) || void 0 !== e.state.data && Ce(e, t, t.refetchOnMount)
}

function Ce(e, t, s) {
    if (!1 !== D(t.enabled, e) && "static" !== q(t.staleTime, e)) {
        const i = "function" == typeof s ? s(e) : s;
        return "always" === i || !1 !== i && Re(e, t)
    }
    return !1
}

function tt(e, t, s, i) {
    return (e !== t || !1 === D(i.enabled, e)) && (!s.suspense || "error" !== e.state.status) && Re(e, s)
}

function Re(e, t) {
    return !1 !== D(t.enabled, e) && e.isStaleByTime(q(t.staleTime, e))
}

function Ur(e, t) {
    return !ve(e.getCurrentResult(), t)
}
var Gr = class extends Qt {
        constructor(e, t) {
            super(e, t)
        }
        bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
        }
        setOptions(e) {
            e._type = "infinite", super.setOptions(e)
        }
        getOptimisticResult(e) {
            return e._type = "infinite", super.getOptimisticResult(e)
        }
        fetchNextPage(e) {
            return this.fetch({ ...e,
                meta: {
                    fetchMore: {
                        direction: "forward"
                    }
                }
            })
        }
        fetchPreviousPage(e) {
            return this.fetch({ ...e,
                meta: {
                    fetchMore: {
                        direction: "backward"
                    }
                }
            })
        }
        createResult(e, t) {
            const {
                state: s
            } = e, i = super.createResult(e, t), {
                isFetching: r,
                isRefetching: n,
                isError: a,
                isRefetchError: o
            } = i, c = s.fetchMeta ? .fetchMore ? .direction, l = a && "forward" === c, u = r && "forward" === c, h = a && "backward" === c, d = r && "backward" === c;
            return { ...i,
                fetchNextPage: this.fetchNextPage,
                fetchPreviousPage: this.fetchPreviousPage,
                hasNextPage: Qr(t, s.data),
                hasPreviousPage: $r(t, s.data),
                isFetchNextPageError: l,
                isFetchingNextPage: u,
                isFetchPreviousPageError: h,
                isFetchingPreviousPage: d,
                isRefetchError: o && !l && !h,
                isRefetching: n && !u && !d
            }
        }
    },
    Hr = class extends It {#
        e;#
        t;#
        s;#
        i;
        constructor(e) {
            super(), this.#e = e.client, this.mutationId = e.mutationId, this.#s = e.mutationCache, this.#t = [], this.state = e.state || zr(), this.setOptions(e.options), this.scheduleGc()
        }
        setOptions(e) {
            this.options = e, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(e) {
            this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#s.notify({
                type: "observerAdded",
                mutation: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.#t = this.#t.filter(t => t !== e), this.scheduleGc(), this.#s.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e
            })
        }
        optionalRemove() {
            this.#t.length || ("pending" === this.state.status ? this.scheduleGc() : this.#s.remove(this))
        }
        continue () {
            return this.#i ? .continue() ? ? this.execute(this.state.variables)
        }
        async execute(e) {
            const t = () => {
                    this.#r({
                        type: "continue"
                    })
                },
                s = {
                    client: this.#e,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
            this.#i = At({
                fn: () => this.options.mutationFn ? this.options.mutationFn(e, s) : Promise.reject(new Error("No mutationFn found")),
                onFail: (e, t) => {
                    this.#r({
                        type: "failed",
                        failureCount: e,
                        error: t
                    })
                },
                onPause: () => {
                    this.#r({
                        type: "pause"
                    })
                },
                onContinue: t,
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => this.#s.canRun(this)
            });
            const i = "pending" === this.state.status,
                r = !this.#i.canStart();
            try {
                if (i) t();
                else {
                    this.#r({
                        type: "pending",
                        variables: e,
                        isPaused: r
                    }), this.#s.config.onMutate && await this.#s.config.onMutate(e, this, s);
                    const t = await (this.options.onMutate ? .(e, s));
                    t !== this.state.context && this.#r({
                        type: "pending",
                        context: t,
                        variables: e,
                        isPaused: r
                    })
                }
                const n = await this.#i.start();
                return await (this.#s.config.onSuccess ? .(n, e, this.state.context, this, s)), await (this.options.onSuccess ? .(n, e, this.state.context, s)), await (this.#s.config.onSettled ? .(n, null, this.state.variables, this.state.context, this, s)), await (this.options.onSettled ? .(n, null, e, this.state.context, s)), this.#r({
                    type: "success",
                    data: n
                }), n
            } catch (t) {
                try {
                    await (this.#s.config.onError ? .(t, e, this.state.context, this, s))
                } catch (e) {
                    Promise.reject(e)
                }
                try {
                    await (this.options.onError ? .(t, e, this.state.context, s))
                } catch (e) {
                    Promise.reject(e)
                }
                try {
                    await (this.#s.config.onSettled ? .(void 0, t, this.state.variables, this.state.context, this, s))
                } catch (e) {
                    Promise.reject(e)
                }
                try {
                    await (this.options.onSettled ? .(void 0, t, e, this.state.context, s))
                } catch (e) {
                    Promise.reject(e)
                }
                throw this.#r({
                    type: "error",
                    error: t
                }), t
            } finally {
                this.#s.runNext(this)
            }
        }#
        r(e) {
            this.state = (t => {
                switch (e.type) {
                    case "failed":
                        return { ...t,
                            failureCount: e.failureCount,
                            failureReason: e.error
                        };
                    case "pause":
                        return { ...t,
                            isPaused: !0
                        };
                    case "continue":
                        return { ...t,
                            isPaused: !1
                        };
                    case "pending":
                        return { ...t,
                            context: e.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: e.isPaused,
                            status: "pending",
                            variables: e.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return { ...t,
                            data: e.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return { ...t,
                            data: void 0,
                            error: e.error,
                            failureCount: t.failureCount + 1,
                            failureReason: e.error,
                            isPaused: !1,
                            status: "error"
                        }
                }
            })(this.state), F.batch(() => {
                this.#t.forEach(t => {
                    t.onMutationUpdate(e)
                }), this.#s.notify({
                    mutation: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

function zr() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Kr = class extends te {
    constructor(e = {}) {
        super(), this.config = e, this.#e = new Set, this.#t = new Map, this.#s = 0
    }#
    e;#
    t;#
    s;
    build(e, t, s) {
        const i = new Hr({
            client: e,
            mutationCache: this,
            mutationId: ++this.#s,
            options: e.defaultMutationOptions(t),
            state: s
        });
        return this.add(i), i
    }
    add(e) {
        this.#e.add(e);
        const t = ie(e);
        if ("string" == typeof t) {
            const s = this.#t.get(t);
            s ? s.push(e) : this.#t.set(t, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (this.#e.delete(e)) {
            const t = ie(e);
            if ("string" == typeof t) {
                const s = this.#t.get(t);
                if (s)
                    if (s.length > 1) {
                        const t = s.indexOf(e); - 1 !== t && s.splice(t, 1)
                    } else s[0] === e && this.#t.delete(t)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const t = ie(e);
        if ("string" == typeof t) {
            const s = this.#t.get(t) ? .find(e => "pending" === e.state.status);
            return !s || s === e
        }
        return !0
    }
    runNext(e) {
        const t = ie(e);
        return "string" == typeof t ? this.#t.get(t) ? .find(t => t !== e && t.state.isPaused) ? .continue() ? ? Promise.resolve() : Promise.resolve()
    }
    clear() {
        F.batch(() => {
            this.#e.forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }), this.#e.clear(), this.#t.clear()
        })
    }
    getAll() {
        return Array.from(this.#e)
    }
    find(e) {
        const t = {
            exact: !0,
            ...e
        };
        return this.getAll().find(e => Ve(t, e))
    }
    findAll(e = {}) {
        return this.getAll().filter(t => Ve(e, t))
    }
    notify(e) {
        F.batch(() => {
            this.listeners.forEach(t => {
                t(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(e => e.state.isPaused);
        return F.batch(() => Promise.all(e.map(e => e.continue().catch(T))))
    }
};

function ie(e) {
    return e.options.scope ? .id
}
var Wr = class extends te {
        constructor(e = {}) {
            super(), this.config = e, this.#e = new Map
        }#
        e;
        build(e, t, s) {
            const i = t.queryKey,
                r = t.queryHash ? ? Me(i, t);
            let n = this.get(r);
            return n || (n = new Br({
                client: e,
                queryKey: i,
                queryHash: r,
                options: e.defaultQueryOptions(t),
                state: s,
                defaultOptions: e.getQueryDefaults(i)
            }), this.add(n)), n
        }
        add(e) {
            this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const t = this.#e.get(e.queryHash);
            t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            F.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return this.#e.get(e)
        }
        getAll() {
            return [...this.#e.values()]
        }
        find(e) {
            const t = {
                exact: !0,
                ...e
            };
            return this.getAll().find(e => We(t, e))
        }
        findAll(e = {}) {
            const t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter(t => We(e, t)) : t
        }
        notify(e) {
            F.batch(() => {
                this.listeners.forEach(t => {
                    t(e)
                })
            })
        }
        onFocus() {
            F.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            F.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    },
    Vr = class {#
        e;#
        t;#
        s;#
        i;#
        r;#
        n;#
        a;#
        o;
        constructor(e = {}) {
            this.#e = e.queryCache || new Wr, this.#t = e.mutationCache || new Kr, this.#s = e.defaultOptions || {}, this.#i = new Map, this.#r = new Map, this.#n = 0
        }
        mount() {
            this.#n++, 1 === this.#n && (this.#a = Ee.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#e.onFocus())
            }), this.#o = ce.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#e.onOnline())
            }))
        }
        unmount() {
            this.#n--, 0 === this.#n && (this.#a ? .(), this.#a = void 0, this.#o ? .(), this.#o = void 0)
        }
        isFetching(e) {
            return this.#e.findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return this.#t.findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(t.queryHash) ? .state.data
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
                s = this.#e.build(this, t),
                i = s.state.data;
            return void 0 === i ? this.fetchQuery(e) : (e.revalidateIfStale && s.isStaleByTime(q(t.staleTime, s)) && this.prefetchQuery(t), Promise.resolve(i))
        }
        getQueriesData(e) {
            return this.#e.findAll(e).map(({
                queryKey: e,
                state: t
            }) => [e, t.data])
        }
        setQueryData(e, t, s) {
            const i = this.defaultQueryOptions({
                    queryKey: e
                }),
                r = this.#e.get(i.queryHash) ? .state.data,
                n = Fr(t, r);
            if (void 0 !== n) return this.#e.build(this, i).setData(n, { ...s,
                manual: !0
            })
        }
        setQueriesData(e, t, s) {
            return F.batch(() => this.#e.findAll(e).map(({
                queryKey: e
            }) => [e, this.setQueryData(e, t, s)]))
        }
        getQueryState(e) {
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(t.queryHash) ? .state
        }
        removeQueries(e) {
            const t = this.#e;
            F.batch(() => {
                t.findAll(e).forEach(e => {
                    t.remove(e)
                })
            })
        }
        resetQueries(e, t) {
            const s = this.#e;
            return F.batch(() => (s.findAll(e).forEach(e => {
                e.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, t)))
        }
        cancelQueries(e, t = {}) {
            const s = {
                    revert: !0,
                    ...t
                },
                i = F.batch(() => this.#e.findAll(e).map(e => e.cancel(s)));
            return Promise.all(i).then(T).catch(T)
        }
        invalidateQueries(e, t = {}) {
            return F.batch(() => (this.#e.findAll(e).forEach(e => {
                e.invalidate()
            }), "none" === e ? .refetchType ? Promise.resolve() : this.refetchQueries({ ...e,
                type: e ? .refetchType ? ? e ? .type ? ? "active"
            }, t)))
        }
        refetchQueries(e, t = {}) {
            const s = { ...t,
                    cancelRefetch: t.cancelRefetch ? ? !0
                },
                i = F.batch(() => this.#e.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
                    let t = e.fetch(void 0, s);
                    return s.throwOnError || (t = t.catch(T)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                }));
            return Promise.all(i).then(T)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            const s = this.#e.build(this, t);
            return s.isStaleByTime(q(t.staleTime, s)) ? s.fetch(t) : Promise.resolve(s.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(T).catch(T)
        }
        fetchInfiniteQuery(e) {
            return e._type = "infinite", this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(T).catch(T)
        }
        ensureInfiniteQueryData(e) {
            return e._type = "infinite", this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return ce.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#e
        }
        getMutationCache() {
            return this.#t
        }
        getDefaultOptions() {
            return this.#s
        }
        setDefaultOptions(e) {
            this.#s = e
        }
        setQueryDefaults(e, t) {
            this.#i.set(X(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...this.#i.values()],
                s = {};
            return t.forEach(t => {
                Y(e, t.queryKey) && Object.assign(s, t.defaultOptions)
            }), s
        }
        setMutationDefaults(e, t) {
            this.#r.set(X(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...this.#r.values()],
                s = {};
            return t.forEach(t => {
                Y(e, t.mutationKey) && Object.assign(s, t.defaultOptions)
            }), s
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...this.#s.queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = Me(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === De && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e ? ._defaulted ? e : { ...this.#s.mutations,
                ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted : !0
            }
        }
        clear() {
            this.#e.clear(), this.#t.clear()
        }
    },
    Zr = x.createContext(void 0),
    Jr = e => {
        const t = x.useContext(Zr);
        if (e) return e;
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t
    },
    $t = x.createContext(!1),
    Xr = () => x.useContext($t);

function Yr() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        },
        reset: () => {
            e = !0
        },
        isReset: () => e
    }
}
$t.Provider;
var ei = x.createContext(Yr()),
    ti = () => x.useContext(ei),
    si = (e, t, s) => {
        const i = s ? .state.error && "function" == typeof e.throwOnError ? Dt(e.throwOnError, [s.state.error, s]) : e.throwOnError;
        (e.suspense || e.experimental_prefetchInRender || i) && (t.isReset() || (e.retryOnMount = !1))
    },
    ni = e => {
        x.useEffect(() => {
            e.clearReset()
        }, [e])
    },
    ri = ({
        result: e,
        errorResetBoundary: t,
        throwOnError: s,
        query: i,
        suspense: r
    }) => e.isError && !t.isReset() && !e.isFetching && i && (r && void 0 === e.data || Dt(s, [e.error, i])),
    ii = e => {
        if (e.suspense) {
            const t = e => "static" === e ? e : Math.max(e ? ? 1e3, 1e3),
                s = e.staleTime;
            e.staleTime = "function" == typeof s ? (...e) => t(s(...e)) : t(s), "number" == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, 1e3))
        }
    },
    ai = (e, t) => e.isLoading && e.isFetching && !t,
    oi = (e, t) => e ? .suspense && t.isPending,
    st = (e, t, s) => t.fetchOptimistic(e).catch(() => {
        s.clearReset()
    });

function Bt(e, t, s) {
    const i = Xr(),
        r = ti(),
        n = Jr(s),
        a = n.defaultQueryOptions(e);
    n.getDefaultOptions().queries ? ._experimental_beforeQuery ? .(a);
    const o = n.getQueryCache().get(a.queryHash);
    a._optimisticResults = i ? "isRestoring" : "optimistic", ii(a), si(a, r, o), ni(r);
    const c = !n.getQueryCache().get(a.queryHash),
        [l] = x.useState(() => new t(n, a)),
        u = l.getOptimisticResult(a),
        h = !i && !1 !== e.subscribed;
    if (x.useSyncExternalStore(x.useCallback(e => {
            const t = h ? l.subscribe(F.batchCalls(e)) : T;
            return l.updateResult(), t
        }, [l, h]), () => l.getCurrentResult(), () => l.getCurrentResult()), x.useEffect(() => {
            l.setOptions(a)
        }, [a, l]), oi(a, u)) throw st(a, l, r);
    if (ri({
            result: u,
            errorResetBoundary: r,
            throwOnError: a.throwOnError,
            query: o,
            suspense: a.suspense
        })) throw u.error;
    return n.getDefaultOptions().queries ? ._experimental_afterQuery ? .(a, u), a.experimental_prefetchInRender && !ee.isServer() && ai(u, i) && (c ? st(a, l, r) : o ? .promise) ? .catch(T).finally(() => {
        l.updateResult()
    }), a.notifyOnChangeProps ? u : l.trackResult(u)
}

function ci(e, t) {
    return Bt(e, Qt, t)
}

function li(e, t) {
    return Bt(e, Gr, t)
}
const B = ({
        operator: e,
        filters: t
    }) => U({
        operator: e,
        _type: "groqQueryFiltersGroup",
        _key: ds(),
        filters: t
    }),
    U = e => e,
    ui = ({
        orders: e,
        collection: t
    }) => t && t.items.length > 1 ? `order(select(${t?.items.map((e,t)=>`_id == "${e._ref}" => ${t}`).join(",")}) asc)` : e && e.length ? e.map(({
        field: e,
        direction: t = "desc"
    }) => `order(${e} ${t})`).join(" | ") : "order(coalesce(importance, 0) desc, publishedAt desc)",
    qt = e => "equal" === e._type ? `${e.path} == ${e.value}` : "notEqual" === e._type ? `${e.path} != ${e.value}` : "greaterThan" === e._type ? `${e.path} > ${e.value}` : "lessThan" === e._type ? `${e.path} < ${e.value}` : "greaterThanOrEqual" === e._type ? `${e.path} >= ${e.value}` : "lessThanOrEqual" === e._type ? `${e.path} <= ${e.value}` : "contain" === e._type ? `${e.value} in ${e.path}` : "notContain" === e._type ? `!(${e.value} in ${e.path})` : "in" === e._type ? `${e.path} in [${e.value.join(" , ")}]` : "notIn" === e._type ? `!(${e.path} in [${e.value}])` : "match" === e._type ? `${e.path} match ${e.value}` : "notMatch" === e._type ? `!(${e.path} match ${e.value})` : "defined" === e._type ? `defined(${e.path})` : "notDefined" === e._type ? `!defined(${e.path})` : "custom" === e._type ? e.value : "groqQueryFiltersGroup" === e._type ? hi(e) : "",
    hi = e => {
        const {
            filters: t,
            operator: s
        } = e;
        if (!t || !t.length) return "";
        const i = t.map(qt).filter(z);
        return i.length > 1 ? `(${i.join(` ${s} `)})` : i[0]
    },
    di = e => {
        const {
            collection: t,
            definitions: s,
            schemaTypeIdLookup: i,
            additionalFilters: r = []
        } = e;
        if (t && t ? .items.length) {
            const {
                items: e
            } = t;
            return B({
                operator: "&&",
                filters: [U({
                    _type: "in",
                    path: "_type",
                    value: s.map(({
                        schemaType: e
                    }) => `"${i[e._ref].name}"`),
                    _key: ""
                }), U({
                    _type: "in",
                    path: "_id",
                    value: e.map(e => `"${e._ref}"`),
                    _key: ""
                }), ...r]
            })
        }
        return B({
            operator: "&&",
            filters: [B({
                operator: "||",
                filters: s ? .map(({
                    schemaType: e,
                    filters: t = []
                }) => B({
                    operator: "&&",
                    filters: [{
                        _type: "equal",
                        path: "_type",
                        value: `"${i[e._ref].name}"`,
                        _key: e._ref
                    }, ...t]
                }))
            }), ...r]
        })
    },
    fi = ({
        path: e,
        schemaType: t,
        schemaTypeIdLookup: s
    }) => {
        const i = e.replaceAll("->", ".").split(".").filter(Boolean);
        return Oe({
            pathSegments: i,
            schemaType: t,
            schemaTypeIdLookup: s
        })
    },
    Oe = ({
        pathSegments: e,
        schemaType: t,
        schemaTypeIdLookup: s
    }) => {
        const [i, ...r] = e, n = pi({
            fieldName: i,
            schemaType: t
        });
        if (!n) return null;
        if (0 === r.length) return n;
        if (br(n) && n.fields) {
            const e = { ...t,
                fields: n.fields
            };
            return Oe({
                pathSegments: r,
                schemaType: e,
                schemaTypeIdLookup: s
            })
        }
        const a = Ne(n),
            o = a.length > 0 ? s[a[0]] : null;
        return o ? Oe({
            pathSegments: r,
            schemaType: o,
            schemaTypeIdLookup: s
        }) : null
    },
    pi = ({
        fieldName: e,
        schemaType: t
    }) => {
        if (!t.fields) return null;
        const s = e.replace(/\[\]$/, "");
        return t.fields.find(e => e.name === s) || null
    },
    fe = e => {
        const {
            fieldPath: t,
            fallbacks: s,
            schemaType: i,
            schemaTypeIdLookup: r,
            projectionMapSchemaTypeNameLookup: n
        } = e;
        if ("boolean" == typeof t) return String(t);
        if (!t.endsWith("->")) return mi(t, s);
        const a = fi({
            path: t,
            schemaType: i,
            schemaTypeIdLookup: r
        });
        if (!a) return null;
        const o = Ne(a);
        if (0 === o.length) return null;
        const c = Ut({
            definitions: o.map(e => ({
                _key: e,
                schemaType: {
                    _type: "reference",
                    _ref: e
                }
            })),
            projectionMapSchemaTypeNameLookup: n,
            schemaTypeIdLookup: r
        });
        return c ? `${t} {${c}}` : null
    },
    mi = (e, t) => t && 0 !== t.length ? `coalesce(${[e,...t].join(", ")})` : e,
    gi = ["_type", "_id"],
    Ut = e => {
        const {
            definitions: t,
            projectionMapSchemaTypeNameLookup: s,
            schemaTypeIdLookup: i
        } = e, r = [];
        for (const e of t) {
            const t = e.schemaType,
                n = i[t._ref],
                a = s[n.name] || n.projectionMap;
            if (!n || !a) continue;
            const o = Object.keys(a),
                c = [];
            for (const e of o) {
                if ("tags" === e) {
                    const t = a ? .[e] ? .map(e => "custom" === e._type ? `"${e.value}"` : e.path);
                    if (!t) continue;
                    const r = t.map(e => fe({
                        fieldPath: e,
                        schemaType: n,
                        schemaTypeIdLookup: i,
                        projectionMapSchemaTypeNameLookup: s
                    })).filter(z);
                    r.length > 0 && c.push(`"${e}": [${r.join(", ")}]`);
                    continue
                }
                if ("metadata" === e) {
                    const t = a[e] ? .items ? .map(e => "custom" === e._type ? `"${e.value}"` : e.path);
                    if (!t) continue;
                    const r = t.map(e => fe({
                        fieldPath: e,
                        schemaType: n,
                        schemaTypeIdLookup: i,
                        projectionMapSchemaTypeNameLookup: s
                    })).filter(z);
                    r.length > 0 && c.push(`"${e}": [${r.join(", ")}]`);
                    continue
                }
                const t = a[e];
                if (!t || "object" != typeof t) continue;
                const r = t.path;
                if (!r) continue;
                const o = "fallbacks" in t ? t.fallbacks : void 0,
                    l = fe({
                        fieldPath: r,
                        fallbacks: o,
                        schemaType: n,
                        schemaTypeIdLookup: i,
                        projectionMapSchemaTypeNameLookup: s
                    });
                l && c.push(`"${e}": ${l}`)
            }
            r.push(`_type == "${n.name}" => { ${c.join(", ")} }`)
        }
        const n = [];
        return n.push(...gi), n.push(`...select(${r.join(", ")})`), n.join(", ")
    },
    yi = () => {
        const {
            isPreviewMode: e,
            isServer: t
        } = ps();
        return t ? e : Gs(window.location.pathname)
    },
    xi = () => !yi(),
    vi = async e => {
        const {
            query: t,
            pageSize: s,
            schemaTypeIdLookup: i,
            filters: r,
            orders: n = [],
            projectionMapSchemaTypeNameLookup: a
        } = e, {
            definitions: o,
            orders: c = [],
            collection: l,
            size: u = 0
        } = t, h = await fs({
            reference: l,
            tag: "parse-groq-query-collection-reference"
        }), d = di({
            collection: h,
            definitions: o,
            schemaTypeIdLookup: i,
            additionalFilters: r
        }), p = Ut({
            definitions: o,
            schemaTypeIdLookup: i,
            projectionMapSchemaTypeNameLookup: a
        }), f = [d, U({
            _type: "notEqual",
            _key: "isHidden",
            path: "isHidden",
            value: "true"
        }), ...xi() ? [U({
            _type: "notEqual",
            _key: "isTest",
            path: "isTest",
            value: "true"
        })] : []];
        return {
            filter: qt(B({
                operator: "&&",
                filters: f
            })),
            order: ui({
                orders: [...c, ...n],
                collection: h
            }),
            fields: p,
            size: s || u
        }
    };

function bi(e) {
    return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
}

function ji(e) {
    return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
}
const wi = /^\s/,
    Pi = /\s$/;

function Si(e) {
    const t = Array.isArray(e) ? e : [e];
    let s = "";
    return t.forEach((e, i) => {
        if (!ji(e)) return;
        let r = !1;
        e.children.forEach(e => {
            bi(e) ? (s += r && s && !Pi.test(s) && !wi.test(e.text) ? " " : "", s += e.text, r = !1) : r = !0
        }), i !== t.length - 1 && (s += "\n\n")
    }), s
}

function Ci(e) {
    return Array.isArray(e) && e.filter(Boolean).some(e => "object" == typeof e && "block" === e ? ._type)
}
const Oi = e => "object" == typeof e && null !== e && "_type" in e && "_id" in e,
    J = ({
        value: e,
        projectionMapSchemaTypeNameLookup: t,
        parseRouteSlugPath: s
    }) => {
        if (Array.isArray(e)) return Ci(e) ? Si(e.slice(0, 2)) : e.filter(z).map(e => Array.isArray(e) ? Ht({
            documents: e,
            projectionMapSchemaTypeNameLookup: t,
            parseRouteSlugPath: s
        }) : J({
            value: e,
            projectionMapSchemaTypeNameLookup: t,
            parseRouteSlugPath: s
        }));
        if (null == e) return null;
        if ("string" == typeof e || "number" == typeof e) return e;
        if ("object" == typeof e) {
            if ("_type" in e) {
                const {
                    _type: t
                } = e;
                if ("image" === t || "visualAssetBlock" === t || "richString" === t) return e;
                if ("routeSlug" === t) {
                    return s ? s(e) : null
                }
            }
            return Oi(e) && t[e._type] ? Gt({
                document: e,
                projectionMapSchemaTypeNameLookup: t,
                parseRouteSlugPath: s
            }) : mt(e, e => J({
                value: e,
                projectionMapSchemaTypeNameLookup: t,
                parseRouteSlugPath: s
            }))
        }
        return e
    },
    Gt = ({
        document: e,
        projectionMapSchemaTypeNameLookup: t,
        parseRouteSlugPath: s
    }) => {
        const i = t[e._type],
            r = {
                projectionMap: i
            };
        for (const n of Object.keys(e))
            if ("tags" !== n) {
                if ("metadata" !== n) r[n] = J({
                    value: e[n],
                    projectionMapSchemaTypeNameLookup: t,
                    parseRouteSlugPath: s
                });
                else if (e.metadata && e.metadata.length && i && i.metadata) {
                    const n = e.metadata,
                        {
                            separator: a,
                            items: o = []
                        } = i.metadata,
                        c = n.map((e, i) => {
                            const r = o[i],
                                n = "field" === r ? ._type ? r.format : void 0,
                                a = J({
                                    value: e,
                                    projectionMapSchemaTypeNameLookup: t,
                                    parseRouteSlugPath: s
                                });
                            return a ? Array.isArray(a) ? a.map(e => ({
                                value: e,
                                format: n
                            })).flat() : {
                                value: a,
                                format: n
                            } : null
                        }).filter(Boolean).flat();
                    r.metadata = {
                        items: c,
                        separator: a
                    }
                }
            } else if (e.tags && e.tags.length && i && i.tags) {
            const n = e.tags,
                a = i.tags,
                o = n.filter(z).map((e, t) => {
                    const s = a[t],
                        i = "field" === s ? ._type ? s.format : void 0;
                    return Array.isArray(e) ? e.map(e => ({
                        value: e,
                        format: i
                    })) : {
                        value: e,
                        format: i
                    }
                }).flat().map(({
                    value: e,
                    format: i
                }) => ({
                    value: J({
                        value: e,
                        projectionMapSchemaTypeNameLookup: t,
                        parseRouteSlugPath: s
                    }),
                    format: i
                }));
            r.tags = {
                items: o
            }
        }
        return r
    },
    Ht = ({
        documents: e,
        projectionMapSchemaTypeNameLookup: t,
        parseRouteSlugPath: s
    }) => e.map(e => Gt({
        document: e,
        projectionMapSchemaTypeNameLookup: t,
        parseRouteSlugPath: s
    })),
    Fi = ({
        page: e,
        size: t
    }) => {
        if (!t) return null;
        return `[${(e-1)*t}...${e*t}]`
    },
    ki = ({
        filter: e,
        page: t = 1,
        size: s,
        order: i,
        fields: r
    }) => {
        const n = Fi({
                page: t,
                size: s
            }),
            a = `*[${e}]`,
            o = `${[a,i].filter(z).join(" | ")} {${r}} ${n||""}`;
        return {
            baseQuery: a,
            fullQuery: o
        }
    },
    Ti = ({
        definitions: e,
        schemaTypeIdLookup: t
    }) => ({ ...me(Object.values(t).filter(e => !!e.name).map(e => [e.name, e.projectionMap])),
        ...me(e.flatMap(({
            schemaType: e,
            projectionMapOverride: s
        }) => {
            const i = t[e._ref],
                r = i ? .name;
            if (!r) return [];
            const n = i.projectionMap;
            return s ? n ? [
                [r, dr(Ke(n), Ke(s), (e, t) => {
                    if (V(e) && V(t)) return 0 === t.length ? null : t
                })]
            ] : [
                [r, s]
            ] : [
                [r, n]
            ]
        }))
    }),
    Ni = async e => {
        const {
            page: t = 1,
            parsedGroqQuery: s,
            parseRouteSlugPath: i,
            projectionMapSchemaTypeNameLookup: r,
            tag: n
        } = e, {
            filter: a,
            order: o,
            fields: c,
            size: l
        } = s, {
            fullQuery: u,
            baseQuery: h
        } = ki({
            filter: a,
            order: o,
            size: l,
            fields: c,
            page: t
        }), d = 1 === t ? `{\n      "documents": ${u},\n      "totalDocuments": count(${h})\n    }` : `{\n      "documents": ${u}\n    }`, {
            documents: p,
            totalDocuments: f = 0
        } = await ms({
            query: d,
            tag: n,
            perspective: "published"
        }), m = Ht({
            documents: p,
            parseRouteSlugPath: i,
            projectionMapSchemaTypeNameLookup: r
        }), y = l ? Math.ceil(f / l) : 1;
        return {
            documents: m,
            nextPage: t === y ? null : t + 1,
            totalDocuments: f,
            totalPages: y
        }
    },
    nt = new Vr,
    Ei = e => {
        const {
            id: t,
            tag: s,
            query: i,
            pageSize: r,
            nextPage: n,
            initialDocuments: a = [],
            initialTotalPages: o = 1,
            initialTotalDocuments: c = 0,
            filters: l,
            orders: u,
            schemaTypeIdLookup: h,
            dynamicRouteSegmentIdLookup: d,
            staticRouteSegmentIdLookup: p
        } = e, f = x.useMemo(() => JSON.stringify(l), [l]), m = x.useMemo(() => JSON.stringify(u), [u]), y = x.useRef(f), g = x.useRef(m), v = x.useMemo(() => f === y.current && m === g.current, [f, m]), b = x.useMemo(() => Ti({
            definitions: i.definitions || [],
            schemaTypeIdLookup: h
        }), []), j = x.useMemo(() => e => {
            if (!(e ? .current && e.segment ? ._ref && d && p)) return null;
            const t = d[e.segment._ref],
                s = t ? .staticSegment ? p[t.staticSegment._ref] : void 0;
            if (!s) return null;
            const i = yt(s, p);
            return i ? `/${i}/${e.current}` : `/${e.current}`
        }, [d, p]), {
            data: w
        } = ci({
            queryKey: ["parsed-groq-query", t, m, f],
            queryFn: () => vi({
                schemaTypeIdLookup: h,
                filters: l,
                orders: u,
                query: i,
                pageSize: r,
                projectionMapSchemaTypeNameLookup: b
            }),
            retryOnMount: !1,
            refetchOnMount: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            enabled: !0
        }, nt), {
            data: k,
            isFetching: S,
            isFetchingNextPage: P,
            isLoading: O,
            isPending: N,
            hasNextPage: T,
            fetchNextPage: F
        } = li({
            queryKey: ["groq", t, f, m],
            queryFn: ({
                pageParam: e = 1
            }) => Ni({
                page: e,
                parsedGroqQuery: w,
                parseRouteSlugPath: j,
                projectionMapSchemaTypeNameLookup: b,
                tag: s || "groq-query-infinite"
            }),
            initialPageParam: 1,
            retryOnMount: !1,
            refetchOnMount: !1,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
            staleTime: 1 / 0,
            enabled: !!w,
            getNextPageParam: e => e ? .nextPage,
            placeholderData: Nr,
            initialData: () => a && a.length && v ? {
                pages: [{
                    nextPage: n,
                    documents: a,
                    totalPages: o,
                    totalDocuments: c
                }],
                pageParams: [1]
            } : void 0
        }, nt);
        return {
            documents: x.useMemo(() => k ? .pages ? pr(k.pages, e => e.documents) : [], [k ? .pages]),
            totalDocuments: x.useMemo(() => k ? .pages ? .[0] ? k.pages[0].totalDocuments : c, [k ? .pages, c]),
            isPending: N,
            isLoading: O,
            isFetching: S,
            isFetchingNextPage: P,
            hasNextPage: T,
            fetchNextPage: F
        }
    },
    rt = e => me(e.map(e => [e.id, new Map])),
    Mi = e => {
        const [t, s] = x.useState(rt(e)), [i, r] = x.useState(null), n = x.useMemo(() => e.find(e => e.id === i), [i]), a = x.useMemo(() => Object.values(t).flatMap(e => Array.from(e.values())), [t]), o = x.useCallback(e => {
            r(e === i ? null : e)
        }, [i, r]);
        return {
            toggledFilter: n,
            toggledFilterId: i,
            activeFiltersOptions: a,
            filtersState: t,
            handleFilterToggle: o,
            handleResetFilters: () => {
                s(rt(e))
            },
            handleFilterOptionClick: e => {
                const {
                    filterId: t,
                    value: i
                } = e;
                s(s => {
                    const r = s[t],
                        n = new Map(r);
                    return null === i ? n.clear() : n.has(i) ? n.delete(i) : n.set(i, e), { ...s,
                        [t]: n
                    }
                })
            }
        }
    },
    Di = e => {
        const {
            orders: t
        } = e, s = t && t[0], {
            value: i,
            direction: r = "desc"
        } = s || {}, [n, a] = x.useState(i), [o, c] = x.useState(r);
        return {
            orderByState: n,
            orderDirectionState: o,
            handleOrderByChange: e => {
                a(e.value), c(e.direction)
            },
            handleOrderDirectionChange: e => {
                c(e)
            }
        }
    },
    Ri = () => {
        const [e, t] = x.useState("");
        return {
            searchState: e,
            handleSearchChange: e => {
                t(e)
            }
        }
    },
    Ai = e => {
        const {
            searchState: t,
            activeFiltersOptions: s,
            orderByState: i,
            orderDirectionState: r
        } = e, n = x.useMemo(() => t ? B({
            operator: "||",
            filters: [U({
                _type: "match",
                path: "title",
                _key: t,
                value: `"${t}*"`
            }), U({
                _type: "match",
                path: "title.plain",
                _key: t,
                value: `"${t}*"`
            })]
        }) : null, [t]), a = x.useMemo(() => s.length ? B({
            operator: "||",
            filters: s.map(e => U({
                _type: "custom",
                _key: e.value,
                value: e.value
            }))
        }) : null, [s]);
        return {
            parsedFilters: x.useMemo(() => n || a ? B({
                operator: "&&",
                filters: [n, a].filter(z)
            }) : null, [n, a]),
            parsedOrders: x.useMemo(() => i ? [{
                field: i,
                direction: r,
                _type: "groqQueryOrder"
            }] : void 0, [i, r])
        }
    },
    zt = x.createContext({}),
    Ii = e => {
        const {
            id: t,
            query: s,
            pageSize: i,
            nextPage: r,
            initialDocuments: n,
            initialTotalPages: a,
            initialTotalDocuments: o,
            orders: l,
            filters: u,
            schemaTypeIdLookup: h,
            dynamicRouteSegmentIdLookup: d,
            staticRouteSegmentIdLookup: p,
            children: f
        } = e, {
            filtersState: m,
            toggledFilter: y,
            toggledFilterId: g,
            activeFiltersOptions: x,
            handleResetFilters: v,
            handleFilterToggle: b,
            handleFilterOptionClick: j
        } = Mi(u), {
            searchState: w,
            handleSearchChange: k
        } = Ri(), {
            orderByState: S,
            orderDirectionState: P,
            handleOrderByChange: O,
            handleOrderDirectionChange: N
        } = Di({
            orders: l
        }), {
            parsedFilters: T,
            parsedOrders: F
        } = Ai({
            searchState: w,
            orderByState: S,
            orderDirectionState: P,
            activeFiltersOptions: x
        }), {
            documents: C,
            totalDocuments: L,
            isLoading: M,
            isFetching: R,
            isFetchingNextPage: A,
            hasNextPage: D,
            fetchNextPage: E
        } = Ei({
            id: t,
            tag: "all-documents-section",
            query: s,
            pageSize: i,
            nextPage: r,
            initialDocuments: n,
            initialTotalPages: a,
            initialTotalDocuments: o,
            schemaTypeIdLookup: h,
            dynamicRouteSegmentIdLookup: d,
            staticRouteSegmentIdLookup: p,
            filters: T ? [T] : void 0,
            orders: F
        });
        return c.jsx(zt.Provider, {
            value: {
                documents: C,
                totalDocuments: L,
                isLoading: M,
                isFetching: R,
                isFetchingNextPage: A,
                hasNextPage: D,
                fetchNextPage: E,
                filters: u,
                filtersState: m,
                toggledFilter: y,
                toggledFilterId: g,
                activeFiltersOptions: x,
                handleFilterOptionClick: j,
                handleFilterToggle: b,
                handleResetFilters: v,
                orders: l,
                orderByState: S,
                orderDirectionState: P,
                handleOrderByChange: O,
                handleOrderDirectionChange: N,
                searchState: w,
                handleSearchChange: k,
                schemaTypeIdLookup: h
            },
            children: f
        })
    },
    A = () => {
        const e = x.useContext(zt);
        if (!e || 0 === Object.keys(e).length) throw new Error("the useAllDocumentsContext hook must be used within an AllDocumentsContextProvider component");
        return e
    },
    Kt = x.createContext({}),
    _i = e => {
        const {
            pagination: t,
            sizeByBreakpoint: s = {
                sm: 0
            },
            children: i
        } = e, r = t ? .[0], [n, a] = x.useState(0), {
            hasNextPage: o,
            totalDocuments: l,
            fetchNextPage: u
        } = A(), h = x.useMemo(() => Object.fromEntries(Object.entries(s).map(([e, t]) => [e, t * (n + 1)])), [s, n]), d = x.useMemo(() => Object.fromEntries(Object.entries(h).map(([e, t]) => [e, !!(t && t < (l || 0))])), [h, l]), p = x.useCallback(() => {
            a(e => e + 1), o && u()
        }, [o, u]);
        return c.jsx(Kt.Provider, {
            value: {
                pagination: r,
                hasMorePagesByBreakpoint: d,
                visibleDocumentsByBreakpoint: h,
                fetchNextPage: p
            },
            children: i
        })
    },
    Wt = () => {
        const e = x.useContext(Kt);
        if (!e || 0 === Object.keys(e).length) throw new Error("the useAllDocumentsPaginationContext hook must be used within an AllDocumentsPaginationContextProvider component");
        return e
    },
    Li = e => {
        const {
            hasMorePagesByBreakpoint: t,
            fetchNextPage: s,
            isLoadingMore: i,
            threshold: r = .1,
            children: n
        } = e, a = Object.values(t).some(Boolean), o = Qs(e => {
            e && !i && a && s()
        }, {
            rootMargin: "800px 0px",
            threshold: r
        });
        return c.jsxs(c.Fragment, {
            children: [n, a ? c.jsx("div", {
                ref: o,
                className: "flex items-center justify-center",
                children: i ? c.jsx($s, {
                    icon: "SpinnerIcon",
                    size: 20,
                    className: "animate-spin"
                }) : null
            }) : null]
        })
    },
    Qi = e => {
        const {
            hasMorePagesByBreakpoint: t,
            isLoadingMore: s,
            buttonLabel: i = "Load More",
            fetchNextPage: r,
            children: n
        } = e, a = x.useMemo(() => he(t, (e, t) => "sm" === t ? "display-" + (e || s ? "block" : "none") : `${t}:display-${e||s?"block":"none"}`).join(" "), [t, s]);
        return c.jsxs("div", {
            className: "flex flex-col gap-20",
            children: [n, c.jsx(os, {
                variant: "outline",
                label: i,
                className: k("self-center", a),
                loading: s,
                onClick: r
            })]
        })
    },
    $i = e => {
        const {
            children: t
        } = e, {
            isFetchingNextPage: s,
            isLoading: i
        } = A(), {
            pagination: r,
            fetchNextPage: n,
            hasMorePagesByBreakpoint: a
        } = Wt();
        if (r) {
            if ("button" === r._type) {
                const {
                    label: e
                } = r;
                return c.jsx(Qi, {
                    buttonLabel: e,
                    fetchNextPage: n,
                    isLoadingMore: s,
                    hasMorePagesByBreakpoint: a,
                    children: t
                })
            }
            if ("scroll" === r._type) {
                const {
                    threshold: e
                } = r;
                return c.jsx(Li, {
                    threshold: e,
                    fetchNextPage: n,
                    isLoadingMore: s || i,
                    hasMorePagesByBreakpoint: a,
                    children: t
                })
            }
        }
        return c.jsx(c.Fragment, {
            children: t
        })
    },
    Bi = [W.LG, W.XL],
    qi = {
        [W.SM]: "col-span-2",
        [W.MD]: "md:col-span-2",
        [W.LG]: "lg:col-span-2",
        [W.XL]: "xl:col-span-2"
    },
    Ui = e => {
        const t = e ? Ns(e) : [],
            s = Object.fromEntries(t),
            i = {};
        let r = 0;
        for (const e of cs) {
            const t = Number(s[e]);
            Number.isFinite(t) && t > 0 && (r = t), i[e] = r
        }
        return i
    },
    Gi = (e, t) => {
        const s = new Set;
        if (e < 1 || t < 3) return s;
        const i = t - 1;
        for (let t = 0; t * i < e; t++) {
            const r = t * i,
                n = Math.min(r + i - 1, e - 1),
                a = t % 2 == 0 ? r : n;
            s.add(a)
        }
        return s
    },
    Hi = e => {
        const {
            grid: t,
            documents: s,
            children: i
        } = e, {
            rowGap: r,
            columnGap: n,
            columns: a,
            type: o = "symmetric"
        } = t || {}, l = "asymmetric" === o, u = "alternating" === o, h = x.useMemo(() => {
            if (!u || s.length < 1) return s.map(() => "");
            const e = Array.from({
                    length: s.length
                }, () => []),
                t = Ui(a);
            for (const i of Bi) {
                const r = t[i];
                if (r < 3) continue;
                const n = Gi(s.length, r),
                    a = qi[i];
                n.forEach(t => {
                    e[t].push(a)
                })
            }
            return e.map(e => e.join(" "))
        }, [a, s.length, u]);
        return c.jsx("div", {
            className: k("grid", Ae(r, {
                axis: "y"
            }), Ae(n, {
                axis: "x"
            }), jr(a), l && "md:[&>:first-child]:col-span-2 lg:[&>:first-child]:row-span-2 lg:[&>:first-child]:h-fit"),
            children: c.jsx(Z, {
                initial: !1,
                mode: "popLayout",
                children: i(s.map((e, t) => ({
                    document: e,
                    documentLayout: 0 === t && l ? "detailed" : "default",
                    className: h[t]
                })))
            })
        })
    },
    zi = new Set(["", "null", "undefined"]),
    Ki = e => {
        const t = e.trim().toLowerCase();
        return !zi.has(t)
    },
    Wi = e => {
        const {
            layout: t,
            children: s
        } = e, {
            documents: i
        } = A(), {
            isFullBleed: r,
            grid: n,
            displayAsGroups: a
        } = t || {}, o = x.useMemo(() => a ? he(yr(i, "group"), (e, t) => ({
            group: t,
            groupDocuments: e
        })) : [{
            group: "default",
            groupDocuments: i
        }], [i, a]);
        return c.jsx("div", {
            className: k("flex flex-col gap-16 md:gap-20 lg:gap-32", r && "-mx-container-overflow"),
            children: c.jsx(Z, {
                initial: !1,
                mode: "popLayout",
                children: o.map(({
                    group: e,
                    groupDocuments: t
                }) => {
                    const i = o.length > 1 && Ki(e);
                    return c.jsxs(_.div, {
                        layout: !0,
                        className: k(i && "border-foreground/15 flex flex-col gap-8 border-t pt-4 lg:gap-14 lg:pt-8"),
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            mass: 1
                        },
                        children: [i ? c.jsx(ls, {
                            type: "h5",
                            className: "font-medium",
                            children: e
                        }) : null, c.jsx(Hi, {
                            grid: n,
                            documents: t,
                            children: s
                        }, e)]
                    }, e)
                })
            })
        })
    },
    Vt = e => {
        const {
            className: t,
            title: s,
            hideIcon: i,
            isToggled: r,
            onClick: n
        } = e;
        return c.jsxs("button", {
            className: k("flex flex-row items-center gap-2", t),
            onClick: n,
            children: [s, " ", i ? null : r ? c.jsx(gt, {}) : c.jsx(xt, {})]
        })
    },
    it = e => {
        const {
            className: t,
            toggleClassName: s,
            activeToggleClassName: i,
            hideIcon: r
        } = e, {
            filters: n,
            toggledFilterId: a,
            handleFilterToggle: o
        } = A();
        return c.jsx("div", {
            className: k("flex flex-row gap-10", t),
            children: n.map(({
                id: e,
                title: t
            }) => {
                const n = e === a;
                return c.jsx(Vt, {
                    title: t,
                    hideIcon: r,
                    isToggled: n,
                    className: k(s, n && i),
                    onClick: () => o(e)
                }, e)
            })
        })
    },
    Vi = e => {
        const {
            open: t,
            className: s,
            peekHeight: i = 0,
            onOpenChange: r,
            children: n
        } = e, a = Ms(), o = x.useMemo(() => `calc(100% - ${i}px)`, [i]);
        x.useEffect(() => {
            a.start({
                y: t ? 0 : o
            })
        }, [t, o, a]);
        const l = () => r(!1);
        return c.jsxs(c.Fragment, {
            children: [c.jsx(Z, {
                children: t && c.jsx(_.div, {
                    className: "bg-black-100/25 fixed inset-0 z-40 h-full w-full",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: l
                })
            }), c.jsx(Es, {
                isActive: t
            }), c.jsx(_.div, {
                drag: "y",
                dragElastic: 0,
                dragConstraints: {
                    top: 0,
                    bottom: 700
                },
                onDrag: (e, t) => {
                    t.offset.y > 0 && a.set({
                        y: t.offset.y
                    })
                },
                onDragEnd: (e, s) => {
                    const {
                        offset: i,
                        velocity: n
                    } = s, c = i.y < -50 || n.y < -500, u = i.y > 100 || n.y > 500;
                    t || !c ? t && u ? l() : a.start({
                        y: t ? 0 : o
                    }) : r(!0)
                },
                initial: {
                    y: o
                },
                animate: a,
                transition: {
                    type: "spring",
                    damping: 30,
                    stiffness: 300
                },
                whileDrag: {
                    cursor: "grabbing"
                },
                className: k("fixed right-0 bottom-0 left-0 z-50 overflow-hidden rounded-t-2xl shadow-2xl", s),
                children: n
            })]
        })
    },
    Zt = () => {
        const {
            handleResetFilters: e
        } = A();
        return c.jsx("button", {
            className: "shrink-0 underline",
            onClick: () => {
                e()
            },
            children: "Reset filters"
        })
    },
    Zi = e => {
        const {
            withClearIcon: t,
            label: s,
            className: i,
            variant: r = "fill",
            onClick: n,
            ...a
        } = e;
        return c.jsx(Ds, {
            as: "button",
            onClick: n,
            uppercase: !1,
            color: "foreground",
            size: "sm",
            variant: r,
            label: c.jsxs(c.Fragment, {
                children: [s, " ", t ? c.jsx(gt, {
                    size: 8
                }) : null]
            }),
            className: k("whitespace-nowrap transition-colors duration-200 ease-in-out", "outline" === r && "hover:bg-foreground/5", i),
            ...a
        })
    },
    at = {
        layout: !0,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 50,
            mass: 1
        }
    },
    pe = e => {
        const {
            options: t,
            withResetButton: s,
            withClearIcon: i,
            className: r
        } = e, {
            filtersState: n,
            handleFilterOptionClick: a
        } = A(), o = t && t.length;
        return c.jsx(Rs, {
            children: e => c.jsx("div", {
                ref: e,
                className: k("flex flex-row flex-wrap gap-1 lg:gap-2", r),
                children: c.jsxs(Z, {
                    initial: !1,
                    mode: "popLayout",
                    children: [t ? .map(e => {
                        const t = e.value,
                            s = e.title,
                            r = n[e.filterId],
                            o = t ? r.has(t) : !r.size;
                        return c.jsx(_.div, { ...at,
                            className: "shrink-0",
                            children: c.jsx(Zi, {
                                label: s,
                                variant: o ? "fill" : "outline",
                                withClearIcon: !!t && o && i,
                                onClick: () => a(e)
                            }, t)
                        }, t)
                    }), s && o ? c.jsx(_.div, { ...at,
                        className: "flex items-center",
                        children: c.jsx(Zt, {})
                    }) : null]
                })
            })
        })
    },
    Ji = e => {
        const {
            className: t,
            container: s
        } = e, {
            filters: i,
            toggledFilter: r,
            toggledFilterId: n,
            activeFiltersOptions: a,
            handleFilterToggle: o
        } = A(), {
            isVisible: l
        } = Us(s), [u, h] = x.useState(!1), d = 1 === i.length, p = x.useMemo(() => d ? i[0].options : r ? .options || a, [n, a]), f = a.length;
        return c.jsxs("div", {
            className: t,
            children: [c.jsx(Vt, {
                title: "Filters",
                className: "md:hidden",
                isToggled: u,
                onClick: () => {
                    r || o(i[0].id), h(!0)
                }
            }), c.jsx(it, {
                className: k("hidden md:flex", d && "hidden!")
            }), c.jsx(pe, {
                options: p,
                className: k("hidden md:flex", !d && "mt-4 lg:mt-8"),
                withClearIcon: !0,
                withResetButton: !(!f || n)
            }), c.jsx(Vi, {
                open: u,
                onOpenChange: h,
                peekHeight: f && l ? 58 : void 0,
                className: "md:hidden",
                children: c.jsxs(Is, {
                    mood: "light",
                    paddingBottom: "none",
                    paddingTop: "none",
                    contentClassName: "flex w-full flex-col py-4",
                    children: [c.jsx(Z, {
                        children: f ? c.jsxs(_.div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: "auto",
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            className: "z-3 flex flex-col gap-4",
                            children: [c.jsxs("div", {
                                className: "flex flex-row items-center justify-between",
                                children: [c.jsxs("button", {
                                    className: "flex flex-1 flex-row items-center gap-2",
                                    onClick: () => h(e => !e),
                                    children: [c.jsxs(lt, {
                                        children: ["Active Filters (", f, ")"]
                                    }), c.jsx(As, {
                                        className: k(u && "rotate-180")
                                    })]
                                }), c.jsx(Zt, {})]
                            }), c.jsx(pe, {
                                options: a,
                                withClearIcon: !0
                            })]
                        }) : null
                    }), c.jsxs(_.div, {
                        animate: f ? {
                            paddingTop: 32
                        } : {
                            paddingTop: 0
                        },
                        className: "flex flex-col gap-8",
                        children: [c.jsx(it, {
                            hideIcon: !0,
                            className: "bg-background z-10 w-full flex-row rounded-full border p-1",
                            toggleClassName: "w-full rounded-full py-1 justify-center",
                            activeToggleClassName: "bg-bor-secondary"
                        }), c.jsx(pe, {
                            options: r ? .options
                        })]
                    })]
                })
            })]
        })
    },
    Xi = e => {
        const {
            className: t,
            searchConfig: s
        } = e, [i, r] = x.useState(""), {
            handleSearchChange: n
        } = A(), {
            enabled: a,
            placeholder: o = "Search...."
        } = s || {}, l = x.useCallback(Ls(400, n), [n]), u = x.useCallback(e => {
            r(e.target.value), l(e.target.value)
        }, [l]);
        return s && a ? c.jsx("div", {
            className: t,
            children: c.jsx(us, {
                size: "xs",
                variant: "outline",
                value: i,
                placeholder: o,
                onChange: u
            })
        }) : null
    },
    Yi = e => {
        const {
            className: t
        } = e, {
            orders: s,
            orderByState: i,
            handleOrderByChange: r
        } = A(), n = pt(s, "value");
        return s ? .length ? c.jsxs("div", {
            className: k("flex flex-row items-center gap-2", t),
            children: [c.jsx(lt, {
                size: "sm",
                className: "shrink-0",
                children: "Sort by"
            }), c.jsx(_s, {
                size: "xs",
                variant: "outline",
                value: i,
                placeholder: "Sort by",
                options: s.map(e => ({
                    label: e.label,
                    value: e.value
                })),
                onChange: e => r(n[e])
            })]
        }) : null
    },
    ea = e => {
        const {
            children: t,
            searchConfig: s
        } = e, i = x.useRef(null), [r, n] = x.useState(), {
            filters: a,
            orders: o,
            isLoading: l
        } = A();
        return x.useEffect(() => {
            i.current && i.current.offsetHeight >= window.innerHeight && n(window.innerHeight)
        }, []), o.length || s ? .enabled || a.length ? c.jsxs(_.div, {
            ref: i,
            className: "flex flex-col gap-20",
            animate: {
                minHeight: r,
                pointerEvents: l ? "none" : void 0,
                opacity: l ? .4 : 1
            },
            children: [c.jsxs("div", {
                className: "flex flex-row flex-wrap items-start justify-between gap-x-2 gap-y-6 md:gap-6 lg:flex-nowrap lg:gap-6",
                children: [c.jsx(Ji, {
                    className: "self-center md:w-full lg:w-auto lg:flex-1 lg:self-start",
                    container: i.current
                }), c.jsx(Yi, {
                    className: "lg:order-3"
                }), c.jsx(Xi, {
                    searchConfig: s,
                    className: "w-full md:max-w-80 lg:order-2 lg:max-w-72"
                })]
            }), t]
        }) : c.jsx(c.Fragment, {
            children: t
        })
    },
    ta = e => {
        const {
            ctaLabel: t,
            document: s
        } = e;
        return c.jsx(y.provider, {
            document: s,
            children: c.jsxs(y.wrapper, {
                "data-testid": "document-card-info",
                className: "bg-bor-surface flex h-full flex-col justify-between gap-4 rounded-lg p-4 lg:gap-6 lg:p-6",
                children: [c.jsxs("div", {
                    children: [c.jsx(y.title, {
                        className: "text-xl font-semibold md:text-2xl lg:text-2xl xl:text-2xl",
                        children: ({
                            title: e
                        }) => c.jsx(sa, {
                            ctaLabel: t,
                            title: e
                        })
                    }), c.jsx(y.metadata, {
                        className: "opacity-50"
                    })]
                }), c.jsxs("div", {
                    className: "flex flex-row items-start justify-between gap-2",
                    children: [c.jsx(y.tags, {
                        variant: "outline"
                    }), t ? c.jsx(y.clickHandler, {
                        text: t,
                        hideIcon: !t,
                        clickArea: !0,
                        className: "shrink-0"
                    }) : null]
                })]
            })
        })
    },
    sa = ({
        ctaLabel: e,
        title: t
    }) => e ? t : c.jsx(y.clickHandler, {
        hideIcon: !0,
        clickArea: !0,
        underline: !1,
        children: t
    }),
    na = e => {
        const {
            document: t
        } = e;
        return c.jsx(y.provider, {
            document: t,
            children: c.jsxs(y.wrapper, {
                "data-testid": "document-card-cover",
                mood: "dark",
                className: "flex h-full min-h-96 w-full overflow-hidden rounded-lg lg:min-h-[512px]",
                children: [c.jsx(y.asset, {
                    withOverlay: !0,
                    className: "absolute inset-0 h-full w-full",
                    hoverEffects: ["zoom-in"]
                }), c.jsx(y.icon, {
                    className: "absolute top-1/2 left-1/2 -translate-1/2"
                }), c.jsxs("div", {
                    className: "z-3 flex h-full flex-1 flex-col-reverse justify-between p-4 lg:p-6 xl:p-8",
                    children: [c.jsxs("div", {
                        className: k("flex flex-col gap-2"),
                        children: [c.jsx(y.metadata, {
                            className: "w-fit"
                        }), c.jsx(y.title, {
                            size: "sm",
                            className: "text-bor-base lg:text-bor-2xl font-medium",
                            children: ({
                                title: e
                            }) => c.jsx(y.clickHandler, {
                                clickArea: !0,
                                underline: !1,
                                hideIcon: !0,
                                children: e
                            })
                        })]
                    }), c.jsx(y.logo, {})]
                })]
            })
        })
    },
    ra = e => {
        const {
            document: t
        } = e;
        return c.jsx(y.provider, {
            document: t,
            allowInlineModal: !0,
            children: c.jsxs(y.wrapper, {
                "data-testid": "document-card-poster",
                mood: "dark",
                className: "flex aspect-square size-full flex-row overflow-hidden",
                children: [c.jsx(y.asset, {
                    className: "absolute inset-0 h-full w-full",
                    hoverEffects: ["zoom-in"]
                }), c.jsxs("div", {
                    className: k("z-3 flex w-full flex-col gap-2 self-end p-4 pt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:p-8 lg:pt-24 xl:p-10", "gradient-overlay-to-bottom-50"),
                    children: [c.jsxs("div", {
                        className: "flex flex-1 flex-col gap-2 xl:max-w-[600px]",
                        children: [c.jsx(y.title, {
                            className: "text-bor-2xl md:text-bor-2xl lg:text-bor-7xl xl:text-bor-7xl font-serif",
                            children: ({
                                title: e
                            }) => c.jsx(y.clickHandler, {
                                clickArea: !0,
                                arrowClassName: "size-6",
                                children: e
                            })
                        }), "microPortfolio" === t._type ? null : c.jsx(y.description, {
                            className: "hidden lg:block"
                        }), c.jsx(y.metadata, {
                            className: "w-fit"
                        })]
                    }), c.jsx(y.tags, {
                        className: "max-w-md flex-wrap justify-start lg:justify-end",
                        variant: "outline"
                    })]
                })]
            })
        })
    },
    Jt = e => {
        const {
            document: t
        } = e, {
            logo: s
        } = t;
        return c.jsx(y.provider, {
            document: t,
            children: c.jsxs(y.wrapper, {
                "data-testid": "document-card-featured",
                className: "relative flex flex-col gap-6",
                children: [c.jsxs(qs, {
                    mood: "dark",
                    className: "relative aspect-[1.77] overflow-hidden rounded-lg lg:aspect-[1.795] xl:aspect-[1.775]",
                    children: [c.jsx(y.asset, {
                        hoverEffects: ["zoom-in"],
                        className: "h-full w-full"
                    }), c.jsx(y.icon, {
                        className: "absolute top-1/2 left-1/2 -translate-1/2"
                    })]
                }), c.jsx("div", {
                    className: "flex flex-col gap-6 xl:flex-row xl:justify-between xl:gap-12",
                    children: c.jsxs("div", {
                        className: "flex flex-1 flex-col gap-4 xl:max-w-[700px]",
                        children: [c.jsxs("div", {
                            className: "flex flex-col gap-2",
                            children: [c.jsx(y.metadata, {
                                className: "font-normal opacity-50"
                            }), c.jsx(y.title, {
                                className: "xl:text-bor-7xl! text-bor-4xl! md:text-bor-4xl! lg:text-bor-3xl! line-clamp-3 font-serif",
                                children: ({
                                    title: e
                                }) => c.jsx(y.clickHandler, {
                                    clickArea: !0,
                                    hideIcon: !0,
                                    arrowClassName: "size-6",
                                    children: e
                                })
                            }), c.jsx(y.description, {
                                className: "xl:text-bor-lg line-clamp-2"
                            })]
                        }), c.jsx(y.tags, {
                            color: "surface"
                        })]
                    })
                }), s ? c.jsx(y.logo, {
                    className: "xl:self-start xl:pt-8"
                }) : c.jsx(y.authors, {
                    className: "xl:w-60 xl:flex-col"
                })]
            })
        })
    },
    ia = e => {
        const {
            document: t,
            layout: s
        } = e;
        return "detailed" === s ? c.jsx(Jt, {
            document: t
        }) : c.jsx(y.provider, {
            document: t,
            children: c.jsxs(y.wrapper, {
                "data-testid": "document-card-classic",
                className: "relative flex flex-col gap-4",
                children: [c.jsxs(hs, {
                    mood: "dark",
                    className: "relative aspect-[1.822] overflow-hidden rounded-lg bg-transparent lg:aspect-[1.777]",
                    children: [c.jsx(y.asset, {
                        hoverEffects: ["zoom-in"],
                        className: "h-full w-full"
                    }), c.jsx(y.logo, {
                        className: "gradient-overlay-to-top-25 absolute top-0 left-0 z-3 w-full p-8 select-none"
                    }), c.jsx(y.icon, {
                        className: "absolute top-1/2 left-1/2 -translate-1/2"
                    })]
                }), c.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [c.jsx(y.metadata, {
                        className: "font-normal opacity-50"
                    }), c.jsx(y.title, {
                        className: "line-clamp-2 text-lg font-medium md:text-lg lg:text-xl xl:text-xl",
                        children: ({
                            title: e
                        }) => c.jsx(y.clickHandler, {
                            clickArea: !0,
                            hideIcon: !0,
                            children: e
                        })
                    }), c.jsx(y.description, {
                        className: "text-base opacity-50 lg:text-base"
                    })]
                }), c.jsx(y.tags, {
                    color: "surface"
                })]
            })
        })
    },
    aa = e => {
        const {
            document: t
        } = e;
        return c.jsx(y.provider, {
            document: t,
            children: c.jsxs(y.wrapper, {
                className: "flex flex-col gap-3 lg:gap-6",
                children: [c.jsx(y.asset, {
                    hoverEffects: ["zoom-in"],
                    className: "aspect-[1.82] rounded-lg lg:h-[396px]"
                }), c.jsxs("div", {
                    className: "flex flex-col gap-1",
                    children: [c.jsx(y.title, {
                        level: "h5",
                        className: "font-serif italic",
                        children: ({
                            title: e
                        }) => c.jsx(y.clickHandler, {
                            clickArea: !0,
                            hideIcon: !0,
                            underline: !1,
                            children: e
                        })
                    }), c.jsx(y.metadata, {
                        className: "opacity-80"
                    })]
                })]
            })
        })
    },
    oa = e => {
        const {
            document: t,
            ctaLabel: s
        } = e;
        return c.jsx(y.provider, {
            document: t,
            children: c.jsxs(y.wrapper, {
                mood: "dark",
                className: "flex h-full min-h-[400px] w-full overflow-hidden rounded-lg lg:min-h-[440px]",
                children: [c.jsx(y.asset, {
                    className: "absolute inset-0 h-full w-full",
                    hoverEffects: ["zoom-in"]
                }), c.jsxs("div", {
                    className: "z-3 flex h-full flex-1 flex-col justify-between p-4 lg:p-6 xl:p-8",
                    children: [c.jsxs("div", {
                        className: "flex max-w-[380px] flex-col gap-4",
                        children: [c.jsx(y.tags, {
                            variant: "outline",
                            color: "foreground",
                            size: "sm",
                            uppercase: !0
                        }), c.jsx(y.title, {
                            level: "h5",
                            children: ({
                                title: e
                            }) => c.jsx(y.clickHandler, {
                                clickArea: !0,
                                underline: !1,
                                hideIcon: !0,
                                cursorTitle: s,
                                children: e
                            })
                        })]
                    }), c.jsxs("div", {
                        className: "flex flex-row justify-between",
                        children: [s ? c.jsxs("span", {
                            className: "flex items-center gap-1 self-start",
                            children: [s, c.jsx(Bs, {
                                size: 16
                            })]
                        }) : null, c.jsx(y.logo, {})]
                    })]
                }), c.jsx("div", {
                    className: "gradient-overlay-to-bottom-25 absolute bottom-0 left-0 h-[80px] w-full"
                })]
            })
        })
    },
    ca = {
        info: ta,
        cover: na,
        poster: ra,
        classic: ia,
        featured: Jt,
        canvas: aa,
        story: oa
    },
    la = e => {
        const {
            document: t,
            layout: s = "default",
            skin: i = "classic",
            ctaLabel: r
        } = e, n = ca[i];
        return c.jsx(n, {
            document: t,
            layout: s,
            ctaLabel: r
        })
    },
    ua = e => {
        const {
            documents: t,
            cardConfig: s
        } = e, {
            schemaTypeIdLookup: i,
            isLoading: r
        } = A(), {
            ctaLabel: n,
            skin: a,
            overrides: o = []
        } = s || {}, l = mt(pt(o, ({
            schemaType: e
        }) => i[e._ref].name), e => rs(e, ["ctaLabel", "skin"])), {
            visibleDocumentsByBreakpoint: u
        } = Wt(), h = x.useMemo(() => t.map((e, t) => he(u, (e, s) => "sm" === s ? "display-" + (e && t >= e ? "none" : "block") : `${s}:display-${e&&t>=e?"none":"block"}`).join(" ")), [t.length, u]);
        return c.jsx(Z, {
            initial: !1,
            mode: "popLayout",
            children: t.map(({
                document: e,
                documentLayout: t,
                className: s
            }, i) => {
                const {
                    ctaLabel: o,
                    skin: u
                } = ns(l[e._type], {
                    ctaLabel: n,
                    skin: a
                });
                return c.jsx(_.article, {
                    layout: !0,
                    initial: {
                        opacity: 0
                    },
                    animate: r ? {
                        opacity: .4,
                        pointerEvents: "none"
                    } : {
                        opacity: 1,
                        pointerEvents: "auto"
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 1
                    },
                    className: k(h[i], s),
                    children: c.jsx(la, {
                        document: e,
                        layout: t,
                        ctaLabel: o,
                        skin: u
                    })
                }, e._id)
            })
        })
    },
    Ia = e => {
        const {
            id: t,
            query: s,
            pageSize: i,
            nextPage: r,
            initialDocuments: n,
            initialTotalPages: a,
            initialTotalDocuments: o,
            schemaTypeIdLookup: l,
            dynamicRouteSegmentIdLookup: u,
            staticRouteSegmentIdLookup: h,
            orders: d,
            filters: p,
            cardConfig: f,
            searchConfig: m,
            pagination: y,
            layout: g,
            sizeByBreakpoint: x
        } = e;
        return c.jsx(Ii, {
            id: t,
            query: s,
            orders: d,
            filters: p,
            pageSize: i,
            schemaTypeIdLookup: l,
            dynamicRouteSegmentIdLookup: u,
            staticRouteSegmentIdLookup: h,
            nextPage: r,
            initialDocuments: n,
            initialTotalPages: a,
            initialTotalDocuments: o,
            children: c.jsx(_i, {
                pagination: y,
                sizeByBreakpoint: x,
                children: c.jsx(ea, {
                    searchConfig: m,
                    children: c.jsx($i, {
                        children: c.jsx(Wi, {
                            layout: g,
                            children: e => c.jsx(ua, {
                                documents: e,
                                cardConfig: f
                            })
                        })
                    })
                })
            })
        })
    };
export {
    Ia as AllDocuments
};