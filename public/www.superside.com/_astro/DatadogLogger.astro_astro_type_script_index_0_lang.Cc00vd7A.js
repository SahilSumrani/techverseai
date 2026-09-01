import {
    r as ts
} from "./shared.C2Q9Xc0Z.js";
import {
    r as es,
    s as rs,
    g as ns
} from "./config.CPkfl8rD.js";
var P = {
        log: "log",
        debug: "debug",
        info: "info",
        warn: "warn",
        error: "error"
    },
    pt = console,
    Wt = {};
Object.keys(P).forEach(function(t) {
    Wt[t] = pt[t]
});
var ye = "Datadog Browser SDK:",
    A = {
        debug: Wt.debug.bind(pt, ye),
        log: Wt.log.bind(pt, ye),
        info: Wt.info.bind(pt, ye),
        warn: Wt.warn.bind(pt, ye),
        error: Wt.error.bind(pt, ye)
    },
    hr = "https://docs.datadoghq.com",
    Na = "".concat(hr, "/real_user_monitoring/browser/troubleshooting"),
    mr = "More details:";

function Ma(t, e) {
    return function() {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        try {
            return t.apply(void 0, n)
        } catch (t) {
            A.error(e, t)
        }
    }
}

function Lt(t) {
    return 0 !== t && 100 * Math.random() <= t
}

function ar(t, e) {
    return +t.toFixed(e)
}

function as(t) {
    return Pe(t) && t >= 0 && t <= 100
}

function Pe(t) {
    return "number" == typeof t
}
var Fr, j = 1e3,
    Z = 60 * j,
    Da = 60 * Z,
    is = 24 * Da,
    Pa = 365 * is;

function gr(t) {
    return {
        relative: t,
        timeStamp: ss(t)
    }
}

function os(t) {
    return {
        relative: _r(t),
        timeStamp: t
    }
}

function ss(t) {
    var e = at() - performance.now();
    return e > Ue() ? Math.round(pe(e, t)) : cs(t)
}

function us() {
    return Math.round(at() - pe(Ue(), performance.now()))
}

function T(t) {
    return Pe(t) ? ar(1e6 * t, 0) : t
}

function at() {
    return (new Date).getTime()
}

function D() {
    return at()
}

function it() {
    return performance.now()
}

function H() {
    return {
        relative: it(),
        timeStamp: D()
    }
}

function Ua() {
    return {
        relative: 0,
        timeStamp: Ue()
    }
}

function z(t, e) {
    return e - t
}

function pe(t, e) {
    return t + e
}

function _r(t) {
    return t - Ue()
}

function cs(t) {
    return Math.round(pe(Ue(), t))
}

function ds(t) {
    return t < Pa
}

function Ue() {
    return void 0 === Fr && (Fr = performance.timing.navigationStart), Fr
}
var Et = 1024,
    Va = 1024 * Et,
    ls = /[^\u0000-\u007F]/;

function mn(t) {
    return ls.test(t) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(t).length : new Blob([t]).size : t.length
}

function fs(t) {
    for (var e = t.reduce(function(t, e) {
            return t + e.length
        }, 0), n = new Uint8Array(e), r = 0, i = 0, o = t; i < o.length; i++) {
        var a = o[i];
        n.set(a, r), r += a.length
    }
    return n
}

function q(t, e) {
    return -1 !== t.indexOf(e)
}

function br(t) {
    if (Array.from) return Array.from(t);
    var e = [];
    if (t instanceof Set) t.forEach(function(t) {
        return e.push(t)
    });
    else
        for (var n = 0; n < t.length; n++) e.push(t[n]);
    return e
}

function Nt(t, e) {
    for (var n = 0; n < t.length; n += 1) {
        var r = t[n];
        if (e(r, n)) return r
    }
}

function vs(t, e) {
    for (var n = t.length - 1; n >= 0; n -= 1) {
        var r = t[n];
        if (e(r, n, t)) return r
    }
}

function ps(t, e) {
    Array.prototype.forEach.call(t, e)
}

function ir(t) {
    return Object.keys(t).map(function(e) {
        return t[e]
    })
}

function gn(t) {
    return Object.keys(t).map(function(e) {
        return [e, t[e]]
    })
}

function Ve(t, e) {
    return t.slice(0, e.length) === e
}

function hs(t, e) {
    return t.slice(-e.length) === e
}

function S(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return e.forEach(function(e) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
    }), t
}

function xe(t) {
    return S({}, t)
}

function or(t, e) {
    return Object.keys(t).some(function(n) {
        return t[n] === e
    })
}

function Mt(t) {
    return 0 === Object.keys(t).length
}

function ms(t, e) {
    for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
        var o = i[r];
        n[o] = e(t[o])
    }
    return n
}

function Tt() {
    if ("object" == typeof globalThis) return globalThis;
    Object.defineProperty(Object.prototype, "_dd_temp_", {
        get: function() {
            return this
        },
        configurable: !0
    });
    var t = _dd_temp_;
    return delete Object.prototype._dd_temp_, "object" != typeof t && (t = "object" == typeof self ? self : "object" == typeof window ? window : {}), t
}

function Dt(t, e) {
    var n, r = Tt();
    return r.Zone && "function" == typeof r.Zone.__symbol__ && (n = t[r.Zone.__symbol__(e)]), n || (n = t[e]), n
}
var sr, gs = function(t, e, n) {
        if (n || 2 === arguments.length)
            for (var r, i = 0, o = e.length; i < o; i++)(r || !(i in e)) && (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    Ba = !1;

function _s(t) {
    sr = t
}

function bs(t) {
    Ba = t
}

function ys(t, e, n) {
    var r = n.value;
    n.value = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (sr ? y(r) : r).apply(this, t)
    }
}

function y(t) {
    return function() {
        return $t(t, this, arguments)
    }
}

function $t(t, e, n) {
    try {
        return t.apply(e, n)
    } catch (t) {
        if (un(t), sr) try {
            sr(t)
        } catch (t) {
            un(t)
        }
    }
}

function un() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    Ba && A.error.apply(A, gs(["[MONITOR]"], t, !1))
}

function B(t, e) {
    return Dt(Tt(), "setTimeout")(y(t), e)
}

function tt(t) {
    Dt(Tt(), "clearTimeout")(t)
}

function he(t, e) {
    return Dt(Tt(), "setInterval")(y(t), e)
}

function yr(t) {
    Dt(Tt(), "clearInterval")(t)
}
var R = function() {
    function t(t) {
        this.onFirstSubscribe = t, this.observers = []
    }
    return t.prototype.subscribe = function(t) {
        var e = this;
        return this.observers.push(t), 1 === this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0), {
            unsubscribe: function() {
                e.observers = e.observers.filter(function(e) {
                    return t !== e
                }), !e.observers.length && e.onLastUnsubscribe && e.onLastUnsubscribe()
            }
        }
    }, t.prototype.notify = function(t) {
        this.observers.forEach(function(e) {
            return e(t)
        })
    }, t
}();

function za() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return new R(function(e) {
        var n = t.map(function(t) {
            return t.subscribe(function(t) {
                return e.notify(t)
            })
        });
        return function() {
            return n.forEach(function(t) {
                return t.unsubscribe()
            })
        }
    })
}

function Ct(t, e, n) {
    var r, i, o = !n || void 0 === n.leading || n.leading,
        a = !n || void 0 === n.trailing || n.trailing,
        s = !1;
    return {
        throttled: function() {
            for (var n = [], u = 0; u < arguments.length; u++) n[u] = arguments[u];
            s ? r = n : (o ? t.apply(void 0, n) : r = n, s = !0, i = B(function() {
                a && r && t.apply(void 0, r), s = !1, r = void 0
            }, e))
        },
        cancel: function() {
            tt(i), s = !1, r = void 0
        }
    }
}

function I() {}

function K(t) {
    return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, K)
}
var We, ot, ur = /([\w-]+)\s*=\s*([^;]+)/g;

function ke(t, e) {
    for (ur.lastIndex = 0;;) {
        var n = ur.exec(t);
        if (!n) break;
        if (n[1] === e) return n[2]
    }
}

function Ss(t) {
    var e = new Map;
    for (ur.lastIndex = 0;;) {
        var n = ur.exec(t);
        if (!n) break;
        e.set(n[1], n[2])
    }
    return e
}

function Fa(t, e, n) {
    void 0 === n && (n = "");
    var r = t.charCodeAt(e - 1),
        i = r >= 55296 && r <= 56319 ? e + 1 : e;
    return t.length <= i ? t : "".concat(t.slice(0, i)).concat(n)
}

function Es() {
    return 0 === _n()
}

function ws() {
    return 1 === _n()
}

function Ts() {
    return 2 === _n()
}

function _n() {
    return We ? ? (We = Cs())
}

function Cs(t) {
    var e;
    void 0 === t && (t = window);
    var n = t.navigator.userAgent;
    return t.chrome || /HeadlessChrome/.test(n) ? 1 : 0 === (null === (e = t.navigator.vendor) || void 0 === e ? void 0 : e.indexOf("Apple")) || /safari/i.test(n) && !/chrome|android/i.test(n) ? 2 : t.document.documentMode ? 0 : 3
}! function(t) {
    t.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql", t.REMOTE_CONFIGURATION = "remote_configuration", t.LONG_ANIMATION_FRAME = "long_animation_frame", t.ANONYMOUS_USER_TRACKING = "anonymous_user_tracking", t.ACTION_NAME_MASKING = "action_name_masking", t.CONSISTENT_TRACE_SAMPLING = "consistent_trace_sampling", t.DELAY_VIEWPORT_COLLECTION = "delay_viewport_collection"
}(ot || (ot = {}));
var Gr, Hr, bn = new Set;

function Ga(t) {
    Array.isArray(t) && Is(t.filter(function(t) {
        return or(ot, t)
    }))
}

function Is(t) {
    t.forEach(function(t) {
        bn.add(t)
    })
}

function wt(t) {
    return bn.has(t)
}

function As() {
    return bn
}

function Be(t, e, n, r) {
    void 0 === n && (n = 0);
    var i = new Date;
    i.setTime(i.getTime() + n);
    var o = "expires=".concat(i.toUTCString()),
        a = r && r.crossSite ? "none" : "strict",
        s = r && r.domain ? ";domain=".concat(r.domain) : "",
        u = r && r.secure ? ";secure" : "",
        c = r && r.partitioned ? ";partitioned" : "";
    document.cookie = "".concat(t, "=").concat(e, ";").concat(o, ";path=/;samesite=").concat(a).concat(s).concat(u).concat(c)
}

function yn(t) {
    return ke(document.cookie, t)
}

function kt(t) {
    return Gr || (Gr = Ss(document.cookie)), Gr.get(t)
}

function Ha(t, e) {
    Be(t, "", 0, e)
}

function Rs(t) {
    if (void 0 === document.cookie || null === document.cookie) return !1;
    try {
        var e = "dd_cookie_test_".concat(K()),
            n = "test";
        Be(e, n, Z, t);
        var r = yn(e) === n;
        return Ha(e, t), r
    } catch (t) {
        return A.error(t), !1
    }
}

function xs() {
    if (void 0 === Hr) {
        for (var t = "dd_site_test_".concat(K()), e = window.location.hostname.split("."), n = e.pop(); e.length && !yn(t);) n = "".concat(e.pop(), ".").concat(n), Be(t, "test", j, {
            domain: n
        });
        Ha(t, {
            domain: n
        }), Hr = n
    }
    return Hr
}
var me = "_dd_s";

function Ut(t) {
    return null === t ? "null" : Array.isArray(t) ? "array" : typeof t
}

function cr(t) {
    var e = S({}, t);
    return ["id", "name", "email"].forEach(function(t) {
        t in e && (e[t] = String(e[t]))
    }), e
}

function ja(t) {
    var e = "object" === Ut(t);
    return e || A.error("Unsupported user:", t), e
}

function ks() {
    return Math.floor(Math.random() * Math.pow(2, 53)).toString(36)
}
var Qt = 4 * Da,
    Ka = 15 * Z,
    Os = Pa,
    Oe = {
        COOKIE: "cookie",
        LOCAL_STORAGE: "local-storage"
    },
    Wa = /^([a-zA-Z]+)=([a-z0-9-]+)$/,
    Sn = "&";

function Ls(t) {
    return !!t && (-1 !== t.indexOf(Sn) || Wa.test(t))
}
var Ns = "1";

function Yt(t) {
    var e = {
        isExpired: Ns
    };
    return wt(ot.ANONYMOUS_USER_TRACKING) && (e.anonymousId = t ? .anonymousId ? t ? .anonymousId : ks()), e
}

function Qe(t) {
    return Mt(t)
}

function Ya(t) {
    return !Qe(t)
}

function dr(t) {
    return void 0 !== t.isExpired || !Ms(t)
}

function Ms(t) {
    return (void 0 === t.created || at() - Number(t.created) < Qt) && (void 0 === t.expire || at() < Number(t.expire))
}

function qa(t) {
    t.expire = String(at() + Ka)
}

function En(t) {
    return gn(t).map(function(t) {
        var e = t[0],
            n = t[1];
        return "anonymousId" === e ? "aid=".concat(n) : "".concat(e, "=").concat(n)
    }).join(Sn)
}

function Xa(t) {
    var e = {};
    return Ls(t) && t.split(Sn).forEach(function(t) {
        var n = Wa.exec(t);
        if (null !== n) {
            var r = n[1],
                i = n[2];
            "aid" === r ? e.anonymousId = i : e[r] = i
        }
    }), e
}
var Ds = "_dd",
    Ps = "_dd_r",
    Us = "_dd_l",
    Vs = "rum",
    Bs = "logs";

function zs(t) {
    if (!kt(me)) {
        var e = kt(Ds),
            n = kt(Ps),
            r = kt(Us),
            i = {};
        e && (i.id = e), r && /^[01]$/.test(r) && (i[Bs] = r), n && /^[012]$/.test(n) && (i[Vs] = n), Ya(i) && (qa(i), t.persistSession(i))
    }
}

function Fn(t) {
    var e = Ks(t);
    return Rs(e) ? {
        type: Oe.COOKIE,
        cookieOptions: e
    } : void 0
}

function Fs(t) {
    var e = {
        isLockEnabled: ws(),
        persistSession: Gs(t),
        retrieveSession: js,
        expireSession: function(e) {
            return Hs(t, e)
        }
    };
    return zs(e), e
}

function Gs(t) {
    return function(e) {
        Be(me, En(e), Ka, t)
    }
}

function Hs(t, e) {
    var n = Yt(e);
    Be(me, En(n), wt(ot.ANONYMOUS_USER_TRACKING) ? Os : Qt, t)
}

function js() {
    return Xa(yn(me))
}

function Ks(t) {
    var e = {};
    return e.secure = !!t.useSecureSessionCookie || !!t.usePartitionedCrossSiteSessionCookie || !!t.useCrossSiteSessionCookie, e.crossSite = !!t.usePartitionedCrossSiteSessionCookie || !!t.useCrossSiteSessionCookie, e.partitioned = !!t.usePartitionedCrossSiteSessionCookie, t.trackSessionAcrossSubdomains && (e.domain = xs()), e
}
var Ws = "_dd_test_";

function Gn() {
    try {
        var t = K(),
            e = "".concat(Ws).concat(t);
        localStorage.setItem(e, t);
        var n = localStorage.getItem(e);
        return localStorage.removeItem(e), t === n ? {
            type: Oe.LOCAL_STORAGE
        } : void 0
    } catch {
        return
    }
}

function Ys() {
    return {
        isLockEnabled: !1,
        persistSession: Ja,
        retrieveSession: qs,
        expireSession: Xs
    }
}

function Ja(t) {
    localStorage.setItem(me, En(t))
}

function qs() {
    return Xa(localStorage.getItem(me))
}

function Xs(t) {
    Ja(Yt(t))
}
var tr, Js = 10,
    $s = 100,
    $a = [];

function qt(t, e, n) {
    var r;
    void 0 === n && (n = 0);
    var i = e.isLockEnabled,
        o = e.persistSession,
        a = e.expireSession,
        s = function(t) {
            return o(S({}, t, {
                lock: c
            }))
        },
        u = function() {
            var t = e.retrieveSession(),
                n = t.lock;
            return t.lock && delete t.lock, {
                session: t,
                lock: n
            }
        };
    if (tr || (tr = t), t === tr)
        if (i && n >= $s) Hn(e);
        else {
            var c, l = u();
            if (i) {
                if (l.lock) return void Ye(t, e, n);
                if (c = K(), s(l.session), (l = u()).lock !== c) return void Ye(t, e, n)
            }
            var d = t.process(l.session);
            if (i && (l = u()).lock !== c) Ye(t, e, n);
            else {
                if (d && (dr(d) ? a(d) : (qa(d), i ? s(d) : o(d))), i && (!d || !dr(d))) {
                    if ((l = u()).lock !== c) return void Ye(t, e, n);
                    o(l.session), d = l.session
                }
                null === (r = t.after) || void 0 === r || r.call(t, d || l.session), Hn(e)
            }
        }
    else $a.push(t)
}

function Ye(t, e, n) {
    B(function() {
        qt(t, e, n + 1)
    }, Js)
}

function Hn(t) {
    tr = void 0;
    var e = $a.shift();
    e && qt(e, t)
}
var jn = j;

function Zs(t) {
    switch (t.sessionPersistence) {
        case Oe.COOKIE:
            return Fn(t);
        case Oe.LOCAL_STORAGE:
            return Gn();
        case void 0:
            var e = Fn(t);
            return !e && t.allowFallbackToLocalStorage && (e = Gn()), e;
        default:
            A.error("Invalid session persistence '".concat(String(t.sessionPersistence), "'"))
    }
}

function Qs(t, e, n) {
    var r, i = new R,
        o = new R,
        a = new R,
        s = t.type === Oe.COOKIE ? Fs(t.cookieOptions) : Ys(),
        u = s.expireSession,
        c = he(function() {
            qt({
                process: function(t) {
                    return dr(t) ? Yt(t) : void 0
                },
                after: p
            }, s)
        }, jn);
    v();
    var l = Ct(function() {
            qt({
                process: function(t) {
                    if (!Qe(t)) {
                        var r = p(t);
                        return function(t) {
                            if (Qe(t)) return !1;
                            var r = n(t[e]),
                                i = r.trackingType,
                                o = r.isTracked;
                            t[e] = i, delete t.isExpired, o && !t.id && (t.id = K(), t.created = String(at()))
                        }(r), r
                    }
                },
                after: function(t) {
                    Ya(t) && !h() && function(t) {
                        r = t, i.notify()
                    }(t), r = t
                }
            }, s)
        }, jn),
        d = l.throttled,
        f = l.cancel;

    function p(t) {
        return dr(t) && (t = Yt(t)), h() && (function(t) {
            return r.id !== t.id || r[e] !== t[e]
        }(t) ? (r = Yt(r), o.notify()) : (a.notify({
            previousState: r,
            newState: t
        }), r = t)), t
    }

    function v() {
        qt({
            process: function(t) {
                if (Qe(t)) return Yt(t)
            },
            after: function(t) {
                r = t
            }
        }, s)
    }

    function h() {
        return void 0 !== r[e]
    }
    return {
        expandOrRenewSession: d,
        expandSession: function() {
            qt({
                process: function(t) {
                    return h() ? p(t) : void 0
                }
            }, s)
        },
        getSession: function() {
            return r
        },
        renewObservable: i,
        expireObservable: o,
        sessionStateUpdateObservable: a,
        restartSession: v,
        expire: function() {
            f(), u(r), p(Yt(r))
        },
        stop: function() {
            yr(c)
        },
        updateSessionState: function(t) {
            qt({
                process: function(e) {
                    return S({}, e, t)
                },
                after: p
            }, s)
        }
    }
}
var cn = {
    GRANTED: "granted",
    NOT_GRANTED: "not-granted"
};

function Za(t) {
    var e = new R;
    return {
        tryToInit: function(e) {
            t || (t = e)
        },
        update: function(n) {
            t = n, e.notify()
        },
        isGranted: function() {
            return t === cn.GRANTED
        },
        observable: e
    }
}

function te(t, e, n) {
    if ("object" != typeof t || null === t) return JSON.stringify(t);
    var r = ie(Object.prototype),
        i = ie(Array.prototype),
        o = ie(Object.getPrototypeOf(t)),
        a = ie(t);
    try {
        return JSON.stringify(t, e, n)
    } catch {
        return "<error: unable to serialize object>"
    } finally {
        r(), i(), o(), a()
    }
}

function ie(t) {
    var e = t,
        n = e.toJSON;
    return n ? (delete e.toJSON, function() {
        e.toJSON = n
    }) : I
}

function wn(t) {
    return Sr(t, location.href).href
}

function tu(t) {
    try {
        return !!Sr(t)
    } catch {
        return !1
    }
}

function eu(t) {
    var e = Sr(t).pathname;
    return "/" === e[0] ? e : "/".concat(e)
}

function Sr(t, e) {
    var n = ru();
    if (n) try {
        return void 0 !== e ? new n(t, e) : new n(t)
    } catch (n) {
        throw new Error("Failed to construct URL: ".concat(String(n), " ").concat(te({
            url: t,
            base: e
        })))
    }
    if (void 0 === e && !/:/.test(t)) throw new Error("Invalid URL: '".concat(t, "'"));
    var r = document,
        i = r.createElement("a");
    if (void 0 !== e) {
        var o = (r = document.implementation.createHTMLDocument("")).createElement("base");
        o.href = e, r.head.appendChild(o), r.body.appendChild(i)
    }
    return i.href = t, i
}
var qe, Kn = URL;

function ru() {
    if (void 0 === qe) try {
        var t = new Kn("http://test/path");
        qe = "http://test/path" === t.href
    } catch {
        qe = !1
    }
    return qe ? Kn : void 0
}
var Qa = "datad0g.com",
    nu = "dd0g-gov.com",
    Xt = "datadoghq.com",
    au = "datadoghq.eu",
    iu = "ddog-gov.com",
    ou = "pci.browser-intake-datadoghq.com",
    su = ["ddsource", "ddtags"];

function Ie(t, e, n) {
    var r = uu(t, e);
    return {
        build: function(i, o) {
            var a = du(t, e, n, i, o);
            return r(a)
        },
        urlPrefix: r(""),
        trackType: e
    }
}

function uu(t, e) {
    var n = "/api/v2/".concat(e),
        r = t.proxy;
    if ("string" == typeof r) {
        var i = wn(r);
        return function(t) {
            return "".concat(i, "?ddforward=").concat(encodeURIComponent("".concat(n, "?").concat(t)))
        }
    }
    if ("function" == typeof r) return function(t) {
        return r({
            path: n,
            parameters: t
        })
    };
    var o = cu(e, t);
    return function(t) {
        return "https://".concat(o).concat(n, "?").concat(t)
    }
}

function cu(t, e) {
    var n = e.site,
        r = void 0 === n ? Xt : n,
        i = e.internalAnalyticsSubdomain;
    if ("logs" === t && e.usePciIntake && r === Xt) return ou;
    if (i && r === Xt) return "".concat(i, ".").concat(Xt);
    if (r === nu) return "http-intake.logs.".concat(r);
    var o = r.split("."),
        a = o.pop();
    return "browser-intake-".concat(o.join("-"), ".").concat(a)
}

function du(t, e, n, r, i) {
    var o = t.clientToken,
        a = t.internalAnalyticsSubdomain,
        s = i.retry,
        u = i.encoding,
        c = ["sdk_version:".concat("5.35.1"), "api:".concat(r)].concat(n);
    s && c.push("retry_count:".concat(s.count), "retry_after:".concat(s.lastFailureStatus));
    var l = ["ddsource=browser", "ddtags=".concat(encodeURIComponent(c.join(","))), "dd-api-key=".concat(o), "dd-evp-origin-version=".concat(encodeURIComponent("5.35.1")), "dd-evp-origin=browser", "dd-request-id=".concat(K())];
    return u && l.push("dd-evp-encoding=".concat(u)), "rum" === e && l.push("batch_time=".concat(D())), a && l.reverse(), l.join("&")
}
var lu = 200;

function fu(t) {
    var e = t.env,
        n = t.service,
        r = t.version,
        i = t.datacenter,
        o = [];
    return e && o.push(Xe("env", e)), n && o.push(Xe("service", n)), r && o.push(Xe("version", r)), i && o.push(Xe("datacenter", i)), o
}

function Xe(t, e) {
    var n = lu - t.length - 1;
    (e.length > n || vu(e)) && A.warn("".concat(t, " value doesn't meet tag requirements and will be sanitized. ").concat(mr, " ").concat(hr, "/getting_started/tagging/#defining-tags"));
    var r = e.replace(/,/g, "_");
    return "".concat(t, ":").concat(r)
}

function vu(t) {
    return !!pu() && new RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(t)
}

function pu() {
    try {
        return new RegExp("[\\p{Ll}]", "u"), !0
    } catch {
        return !1
    }
}

function hu(t) {
    var e = t.site || Xt,
        n = fu(t),
        r = mu(t, n);
    return S({
        replica: gu(t, n),
        site: e
    }, r)
}

function mu(t, e) {
    return {
        logsEndpointBuilder: Ie(t, "logs", e),
        rumEndpointBuilder: Ie(t, "rum", e),
        sessionReplayEndpointBuilder: Ie(t, "replay", e)
    }
}

function gu(t, e) {
    if (t.replica) {
        var n = S({}, t, {
                site: Xt,
                clientToken: t.replica.clientToken
            }),
            r = {
                logsEndpointBuilder: Ie(n, "logs", e),
                rumEndpointBuilder: Ie(n, "rum", e)
            };
        return S({
            applicationId: t.replica.applicationId
        }, r)
    }
}

function ti(t) {
    return su.every(function(e) {
        return q(t, e)
    })
}
var Ae = {
        ALLOW: "allow",
        MASK: "mask",
        MASK_USER_INPUT: "mask-user-input"
    },
    dn = {
        ALL: "all",
        SAMPLED: "sampled"
    };

function jr(t, e) {
    return null == t || "string" == typeof t || (A.error("".concat(e, " must be defined as a string")), !1)
}

function _u(t) {
    return !(t && "string" == typeof t && !/(datadog|ddog|datad0g|dd0g)/.test(t)) || (A.error("Site should be a valid Datadog site. ".concat(mr, " ").concat(hr, "/getting_started/site/.")), !1)
}

function oe(t, e) {
    return !(void 0 !== t && !as(t)) || (A.error("".concat(e, " Sample Rate should be a number between 0 and 100")), !1)
}

function ei(t) {
    var e, n, r, i, o;
    if (t && t.clientToken) return _u(t.site) && oe(t.sessionSampleRate, "Session") && oe(t.telemetrySampleRate, "Telemetry") && oe(t.telemetryConfigurationSampleRate, "Telemetry Configuration") && oe(t.telemetryUsageSampleRate, "Telemetry Usage") && jr(t.version, "Version") && jr(t.env, "Env") && jr(t.service, "Service") ? void 0 === t.trackingConsent || or(cn, t.trackingConsent) ? S({
        beforeSend: t.beforeSend && Ma(t.beforeSend, "beforeSend threw an error:"),
        sessionStoreStrategyType: Zs(t),
        sessionSampleRate: null !== (e = t.sessionSampleRate) && void 0 !== e ? e : 100,
        telemetrySampleRate: null !== (n = t.telemetrySampleRate) && void 0 !== n ? n : 20,
        telemetryConfigurationSampleRate: null !== (r = t.telemetryConfigurationSampleRate) && void 0 !== r ? r : 5,
        telemetryUsageSampleRate: null !== (i = t.telemetryUsageSampleRate) && void 0 !== i ? i : 5,
        service: t.service || void 0,
        silentMultipleInit: !!t.silentMultipleInit,
        allowUntrustedEvents: !!t.allowUntrustedEvents,
        trackingConsent: null !== (o = t.trackingConsent) && void 0 !== o ? o : cn.GRANTED,
        storeContextsAcrossPages: !!t.storeContextsAcrossPages,
        batchBytesLimit: 16 * Et,
        eventRateLimiterThreshold: 3e3,
        maxTelemetryEventsPerPage: 15,
        flushTimeout: 30 * j,
        batchMessagesLimit: 50,
        messageBytesLimit: 256 * Et
    }, hu(t)) : void A.error('Tracking Consent should be either "granted" or "not-granted"') : void 0;
    A.error("Client Token is not configured, we will not send any data.")
}

function ri(t) {
    return {
        session_sample_rate: t.sessionSampleRate,
        telemetry_sample_rate: t.telemetrySampleRate,
        telemetry_configuration_sample_rate: t.telemetryConfigurationSampleRate,
        telemetry_usage_sample_rate: t.telemetryUsageSampleRate,
        use_before_send: !!t.beforeSend,
        use_cross_site_session_cookie: t.useCrossSiteSessionCookie,
        use_partitioned_cross_site_session_cookie: t.usePartitionedCrossSiteSessionCookie,
        use_secure_session_cookie: t.useSecureSessionCookie,
        use_proxy: !!t.proxy,
        silent_multiple_init: t.silentMultipleInit,
        track_session_across_subdomains: t.trackSessionAcrossSubdomains,
        session_persistence: t.sessionPersistence,
        allow_fallback_to_local_storage: !!t.allowFallbackToLocalStorage,
        store_contexts_across_pages: !!t.storeContextsAcrossPages,
        allow_untrusted_events: !!t.allowUntrustedEvents,
        tracking_consent: t.trackingConsent
    }
}
var ze = "?";

function _t(t) {
    var e = [],
        n = Kr(t, "stack"),
        r = String(t);
    return n && Ve(n, r) && (n = n.slice(r.length)), n && n.split("\n").forEach(function(t) {
        var n = Su(t) || wu(t) || Cu(t) || Ru(t);
        n && (!n.func && n.line && (n.func = ze), e.push(n))
    }), {
        message: Kr(t, "message"),
        name: Kr(t, "name"),
        stack: e
    }
}
var ni = "((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
    de = "(?::(\\d+))",
    bu = new RegExp("^\\s*at (.*?) ?\\(".concat(ni).concat(de, "?").concat(de, "?\\)?\\s*$"), "i"),
    yu = new RegExp("\\((\\S*)".concat(de).concat(de, "\\)"));

function Su(t) {
    var e = bu.exec(t);
    if (e) {
        var n = e[2] && 0 === e[2].indexOf("native"),
            r = e[2] && 0 === e[2].indexOf("eval"),
            i = yu.exec(e[2]);
        return r && i && (e[2] = i[1], e[3] = i[2], e[4] = i[3]), {
            args: n ? [e[2]] : [],
            column: e[4] ? +e[4] : void 0,
            func: e[1] || ze,
            line: e[3] ? +e[3] : void 0,
            url: n ? void 0 : e[2]
        }
    }
}
var Eu = new RegExp("^\\s*at ?".concat(ni).concat(de, "?").concat(de, "??\\s*$"), "i");

function wu(t) {
    var e = Eu.exec(t);
    if (e) return {
        args: [],
        column: e[3] ? +e[3] : void 0,
        func: ze,
        line: e[2] ? +e[2] : void 0,
        url: e[1]
    }
}
var Tu = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function Cu(t) {
    var e = Tu.exec(t);
    if (e) return {
        args: [],
        column: e[4] ? +e[4] : void 0,
        func: e[1] || ze,
        line: +e[3],
        url: e[2]
    }
}
var Iu = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
    Au = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

function Ru(t) {
    var e = Iu.exec(t);
    if (e) {
        var n = e[3] && e[3].indexOf(" > eval") > -1,
            r = Au.exec(e[3]);
        return n && r && (e[3] = r[1], e[4] = r[2], e[5] = void 0), {
            args: e[2] ? e[2].split(",") : [],
            column: e[5] ? +e[5] : void 0,
            func: e[1] || ze,
            line: e[4] ? +e[4] : void 0,
            url: e[3]
        }
    }
}

function Kr(t, e) {
    if ("object" == typeof t && t && e in t) {
        var n = t[e];
        return "string" == typeof n ? n : void 0
    }
}

function xu(t, e, n, r) {
    var i = [{
            url: e,
            column: r,
            line: n
        }],
        o = Ou(t);
    return {
        name: o.name,
        message: o.message,
        stack: i
    }
}
var ku = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;

function Ou(t) {
    var e, n, r;
    return "[object String]" === {}.toString.call(t) && (n = (e = ku.exec(t))[1], r = e[2]), {
        name: n,
        message: r
    }
}

function le() {
    var t, e = new Error;
    if (!e.stack) try {
        throw e
    } catch {}
    return $t(function() {
        var n = _t(e);
        n.stack = n.stack.slice(2), t = ee(n)
    }), t
}

function ee(t) {
    var e = ai(t);
    return t.stack.forEach(function(t) {
        var n = "?" === t.func ? "<anonymous>" : t.func,
            r = t.args && t.args.length > 0 ? "(".concat(t.args.join(", "), ")") : "",
            i = t.line ? ":".concat(t.line) : "",
            o = t.line && t.column ? ":".concat(t.column) : "";
        e += "\n  at ".concat(n).concat(r, " @ ").concat(t.url).concat(i).concat(o)
    }), e
}

function ai(t) {
    return "".concat(t.name || "Error", ": ").concat(t.message)
}

function J(t, e, n, r) {
    var i = (void 0 === r ? {} : r).computeHandlingStack,
        o = t[e];
    if ("function" != typeof o) {
        if (!(e in t) || !Ve(e, "on")) return {
            stop: I
        };
        o = I
    }
    var a = !1,
        s = function() {
            if (a) return o.apply(this, arguments);
            var t, e = br(arguments);
            $t(n, null, [{
                target: this,
                parameters: e,
                onPostCall: function(e) {
                    t = e
                },
                handlingStack: i ? le() : void 0
            }]);
            var r = o.apply(this, e);
            return t && $t(t, null, [r]), r
        };
    return t[e] = s, {
        stop: function() {
            a = !0, t[e] === s && (t[e] = o)
        }
    }
}

function Se(t, e, n) {
    var r = Object.getOwnPropertyDescriptor(t, e);
    if (!r || !r.set || !r.configurable) return {
        stop: I
    };
    var i = I,
        o = function(t, e) {
            B(function() {
                o !== i && n(t, e)
            }, 0)
        },
        a = function(t) {
            r.set.call(this, t), o(this, t)
        };
    return Object.defineProperty(t, e, {
        set: a
    }), {
        stop: function() {
            var n;
            (null === (n = Object.getOwnPropertyDescriptor(t, e)) || void 0 === n ? void 0 : n.set) === a && Object.defineProperty(t, e, r), o = i
        }
    }
}
var Lu = 220 * Et,
    Nu = "$",
    Mu = 3;

function O(t, e) {
    void 0 === e && (e = Lu);
    var n = ie(Object.prototype),
        r = ie(Array.prototype),
        i = [],
        o = new WeakMap,
        a = Wr(t, Nu, void 0, i, o),
        s = JSON.stringify(a),
        u = s ? s.length : 0;
    if (!(u > e)) {
        for (; i.length > 0 && u < e;) {
            var c = i.shift(),
                l = 0;
            if (Array.isArray(c.source))
                for (var d = 0; d < c.source.length; d++) {
                    if (u += void 0 !== (f = Wr(c.source[d], c.path, d, i, o)) ? JSON.stringify(f).length : 4, u += l, l = 1, u > e) {
                        Yr(e, "truncated", t);
                        break
                    }
                    c.target[d] = f
                } else
                    for (var d in c.source)
                        if (Object.prototype.hasOwnProperty.call(c.source, d)) {
                            var f;
                            if (void 0 !== (f = Wr(c.source[d], c.path, d, i, o)) && (u += JSON.stringify(f).length + l + d.length + Mu, l = 1), u > e) {
                                Yr(e, "truncated", t);
                                break
                            }
                            c.target[d] = f
                        }
        }
        return n(), r(), a
    }
    Yr(e, "discarded", t)
}

function Wr(t, e, n, r, i) {
    var o = Uu(t);
    if (!o || "object" != typeof o) return Du(o);
    var a = Pu(o);
    if ("[Object]" !== a && "[Array]" !== a && "[Error]" !== a) return a;
    var s = t;
    if (i.has(s)) return "[Reference seen at ".concat(i.get(s), "]");
    var u = void 0 !== n ? "".concat(e, ".").concat(n) : e,
        c = Array.isArray(o) ? [] : {};
    return i.set(s, u), r.push({
        source: o,
        target: c,
        path: u
    }), c
}

function Du(t) {
    return "bigint" == typeof t ? "[BigInt] ".concat(t.toString()) : "function" == typeof t ? "[Function] ".concat(t.name || "unknown") : "symbol" == typeof t ? "[Symbol] ".concat(t.description || t.toString()) : t
}

function Pu(t) {
    try {
        if (t instanceof Event) return {
            isTrusted: t.isTrusted
        };
        var e = Object.prototype.toString.call(t).match(/\[object (.*)\]/);
        if (e && e[1]) return "[".concat(e[1], "]")
    } catch {}
    return "[Unserializable]"
}

function Uu(t) {
    var e = t;
    if (e && "function" == typeof e.toJSON) try {
        return e.toJSON()
    } catch {}
    return t
}

function Yr(t, e, n) {
    A.warn("The data provided has been ".concat(e, " as it is over the limit of ").concat(t, " characters:"), n)
}
var ii = "No stack, consider using an instance of Error";

function Tn(t) {
    var e = t.stackTrace,
        n = t.originalError,
        r = t.handlingStack,
        i = t.startClocks,
        o = t.nonErrorPrefix,
        a = t.source,
        s = t.handling,
        u = It(n),
        c = Vu(e, u, o, n),
        l = Bu(u, e) ? ee(e) : ii,
        d = u ? si(n, a) : void 0;
    return {
        startClocks: i,
        source: a,
        handling: s,
        handlingStack: r,
        originalError: n,
        type: e ? e.name : void 0,
        message: c,
        stack: l,
        causes: d,
        fingerprint: oi(n)
    }
}

function Vu(t, e, n, r) {
    return t ? .message && t ? .name ? t.message : e ? "Empty message" : "".concat(n, " ").concat(te(O(r)))
}

function Bu(t, e) {
    return void 0 !== e && (!!t || e.stack.length > 0 && (e.stack.length > 1 || void 0 !== e.stack[0].url))
}

function oi(t) {
    return It(t) && "dd_fingerprint" in t ? String(t.dd_fingerprint) : void 0
}

function zu(t) {
    var e;
    return null === (e = /@ (.+)/.exec(t)) || void 0 === e ? void 0 : e[1]
}

function It(t) {
    return t instanceof Error || "[object Error]" === Object.prototype.toString.call(t)
}

function si(t, e) {
    for (var n = t, r = []; It(n ? .cause) && r.length < 10;) {
        var i = _t(n.cause);
        r.push({
            message: n.cause.message,
            source: e,
            type: i ? .name,
            stack: i && ee(i)
        }), n = n.cause
    }
    return r.length ? r : void 0
}
var Q = {
    AGENT: "agent",
    CONSOLE: "console",
    CUSTOM: "custom",
    LOGGER: "logger",
    NETWORK: "network",
    SOURCE: "source",
    REPORT: "report"
};

function ui(t) {
    var e = function(e, n) {
            var r = Tn({
                stackTrace: e,
                originalError: n,
                startClocks: H(),
                nonErrorPrefix: "Uncaught",
                source: Q.SOURCE,
                handling: "unhandled"
            });
            t.notify(r)
        },
        n = Fu(e).stop,
        r = Gu(e).stop;
    return {
        stop: function() {
            n(), r()
        }
    }
}

function Fu(t) {
    return J(window, "onerror", function(e) {
        var n, r = e.parameters,
            i = r[0],
            o = r[1],
            a = r[2],
            s = r[3],
            u = r[4];
        n = It(u) ? _t(u) : xu(i, o, a, s), t(n, u ? ? i)
    })
}

function Gu(t) {
    return J(window, "onunhandledrejection", function(e) {
        var n = e.parameters[0].reason || "Empty reason",
            r = _t(n);
        t(r, n)
    })
}

function ci(t) {
    var e = S({
        version: "5.35.1",
        onReady: function(t) {
            t()
        }
    }, t);
    return Object.defineProperty(e, "_setDebug", {
        get: function() {
            return bs
        },
        enumerable: !1
    }), e
}

function di(t, e, n) {
    var r = t[e];
    r && !r.q && r.version && A.warn("SDK is loaded more than once. This is unsupported and might have unexpected behavior."), t[e] = n, r && r.q && r.q.forEach(function(t) {
        return Ma(t, "onReady callback threw an error:")()
    })
}

function Er(t, e) {
    e.silentMultipleInit || A.error("".concat(t, " is already initialized."))
}

function L(t, e, n, r, i) {
    return $(t, e, [n], r, i)
}

function $(t, e, n, r, i) {
    var o = void 0 === i ? {} : i,
        a = o.once,
        s = o.capture,
        u = o.passive,
        c = y(function(e) {
            !e.isTrusted && !e.__ddIsTrusted && !t.allowUntrustedEvents || (a && p(), r(e))
        }),
        l = u ? {
            capture: s,
            passive: u
        } : s,
        d = window.EventTarget && e instanceof EventTarget ? window.EventTarget.prototype : e,
        f = Dt(d, "addEventListener");

    function p() {
        var t = Dt(d, "removeEventListener");
        n.forEach(function(n) {
            return t.call(e, n, c, l)
        })
    }
    return n.forEach(function(t) {
        return f.call(e, t, c, l)
    }), {
        stop: p
    }
}
var fe = {
    intervention: "intervention",
    deprecation: "deprecation",
    cspViolation: "csp_violation"
};

function li(t, e) {
    var n = [];
    q(e, fe.cspViolation) && n.push(ju(t));
    var r = e.filter(function(t) {
        return t !== fe.cspViolation
    });
    return r.length && n.push(Hu(r)), za.apply(void 0, n)
}

function Hu(t) {
    return new R(function(e) {
        if (window.ReportingObserver) {
            var n = y(function(t, n) {
                    return t.forEach(function(t) {
                        return e.notify(Ku(t))
                    })
                }),
                r = new window.ReportingObserver(n, {
                    types: t,
                    buffered: !0
                });
            return r.observe(),
                function() {
                    r.disconnect()
                }
        }
    })
}

function ju(t) {
    return new R(function(e) {
        return L(t, document, "securitypolicyviolation", function(t) {
            e.notify(Wu(t))
        }).stop
    })
}

function Ku(t) {
    var e = t.type,
        n = t.body;
    return fi({
        type: n.id,
        message: "".concat(e, ": ").concat(n.message),
        originalError: t,
        stack: vi(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
    })
}

function Wu(t) {
    var e = "'".concat(t.blockedURI, "' blocked by '").concat(t.effectiveDirective, "' directive");
    return fi({
        type: t.effectiveDirective,
        message: "".concat(fe.cspViolation, ": ").concat(e),
        originalError: t,
        csp: {
            disposition: t.disposition
        },
        stack: vi(t.effectiveDirective, t.originalPolicy ? "".concat(e, ' of the policy "').concat(Fa(t.originalPolicy, 100, "..."), '"') : "no policy", t.sourceFile, t.lineNumber, t.columnNumber)
    })
}

function fi(t) {
    return S({
        startClocks: H(),
        source: Q.REPORT,
        handling: "unhandled"
    }, t)
}

function vi(t, e, n, r, i) {
    return n ? ee({
        name: t,
        message: e,
        stack: [{
            func: "?",
            url: n,
            line: r ? ? void 0,
            column: i ? ? void 0
        }]
    }) : void 0
}

function wr(t, e) {
    var n = window.__ddBrowserSdkExtensionCallback;
    n && n({
        type: t,
        payload: e
    })
}

function lr(t, e, n) {
    if (void 0 === n && (n = Yu()), void 0 === e) return t;
    if ("object" != typeof e || null === e) return e;
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) {
        var r = e.flags || [e.global ? "g" : "", e.ignoreCase ? "i" : "", e.multiline ? "m" : "", e.sticky ? "y" : "", e.unicode ? "u" : ""].join("");
        return new RegExp(e.source, r)
    }
    if (!n.hasAlreadyBeenSeen(e)) {
        if (Array.isArray(e)) {
            for (var i = Array.isArray(t) ? t : [], o = 0; o < e.length; ++o) i[o] = lr(i[o], e[o], n);
            return i
        }
        var a = "object" === Ut(t) ? t : {};
        for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (a[s] = lr(a[s], e[s], n));
        return a
    }
}

function Tr(t) {
    return lr(void 0, t)
}

function et() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        null != o && (n = lr(n, o))
    }
    return n
}

function Yu() {
    if (typeof WeakSet < "u") {
        var t = new WeakSet;
        return {
            hasAlreadyBeenSeen: function(e) {
                var n = t.has(e);
                return n || t.add(e), n
            }
        }
    }
    var e = [];
    return {
        hasAlreadyBeenSeen: function(t) {
            var n = e.indexOf(t) >= 0;
            return n || e.push(t), n
        }
    }
}

function pi() {
    var t, e = window.navigator;
    return {
        status: e.onLine ? "connected" : "not_connected",
        interfaces: e.connection && e.connection.type ? [e.connection.type] : void 0,
        effective_type: null === (t = e.connection) || void 0 === t ? void 0 : t.effectiveType
    }
}

function qu(t) {
    var e = new Set;
    return t.forEach(function(t) {
        return e.add(t)
    }), br(e)
}

function hi(t, e) {
    var n = t.indexOf(e);
    n >= 0 && t.splice(n, 1)
}
var Xu = 500;

function Cn() {
    var t = [];
    return {
        add: function(e) {
            t.push(e) > Xu && t.splice(0, 1)
        },
        remove: function(e) {
            hi(t, e)
        },
        drain: function(e) {
            t.forEach(function(t) {
                return t(e)
            }), t.length = 0
        }
    }
}
var Jt = {
        log: "log",
        configuration: "configuration",
        usage: "usage"
    },
    Ju = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "https://d3uc069fcn7uxw.cloudfront.net", "https://d20xtzwzcl0ceb.cloudfront.net", "http://localhost", "<anonymous>"],
    $u = [iu],
    mi = Cn(),
    ge = function(t) {
        mi.add(function() {
            return ge(t)
        })
    };

function gi(t, e) {
    var n, r, i = new R,
        o = new Set,
        a = !q($u, e.site) && Lt(e.telemetrySampleRate),
        s = ((n = {})[Jt.log] = a, n[Jt.configuration] = a && Lt(e.telemetryConfigurationSampleRate), n[Jt.usage] = a && Lt(e.telemetryUsageSampleRate), n),
        u = Zu();
    return ge = function(n) {
        var a = te(n);
        if (s[n.type] && o.size < e.maxTelemetryEventsPerPage && !o.has(a)) {
            var c = function(t, e, n) {
                return et({
                    type: "telemetry",
                    date: D(),
                    service: t,
                    version: "5.35.1",
                    source: "browser",
                    _dd: {
                        format_version: 2
                    },
                    telemetry: et(e, {
                        runtime_env: n,
                        connectivity: pi(),
                        sdk_setup: "npm"
                    }),
                    experimental_features: br(As())
                }, void 0 !== r ? r() : {})
            }(t, n, u);
            i.notify(c), wr("telemetry", c), o.add(a)
        }
    }, _s(fr), {
        setContextProvider: function(t) {
            r = t
        },
        observable: i,
        enabled: a
    }
}

function Zu() {
    return {
        is_local_file: "file:" === window.location.protocol,
        is_worker: "WorkerGlobalScope" in self
    }
}

function _i() {
    mi.drain()
}

function bi(t) {
    return t.site === Qa
}

function Vt(t, e) {
    un(P.debug, t, e), ge(S({
        type: Jt.log,
        message: t,
        status: "debug"
    }, e))
}

function fr(t, e) {
    ge(S({
        type: Jt.log,
        status: "error"
    }, Qu(t), e))
}

function yi(t) {
    ge({
        type: Jt.configuration,
        configuration: t
    })
}

function W(t) {
    ge({
        type: Jt.usage,
        usage: t
    })
}

function Qu(t) {
    if (It(t)) {
        var e = _t(t);
        return {
            error: {
                kind: e.name,
                stack: ee(tc(e))
            },
            message: e.message
        }
    }
    return {
        error: {
            stack: ii
        },
        message: "".concat("Uncaught", " ").concat(te(t))
    }
}

function tc(t) {
    return t.stack = t.stack.filter(function(t) {
        return !t.url || Ju.some(function(e) {
            return Ve(t.url, e)
        })
    }), t
}
var Je = 1 / 0,
    ec = Z;

function _e(t) {
    var e = t.expireDelay,
        n = t.maxEntries,
        r = [],
        i = he(function() {
            return function() {
                for (var t = it() - e; r.length > 0 && r[r.length - 1].endTime < t;) r.pop()
            }()
        }, ec);
    return {
        add: function(t, e) {
            var i = {
                value: t,
                startTime: e,
                endTime: Je,
                remove: function() {
                    hi(r, i)
                },
                close: function(t) {
                    i.endTime = t
                }
            };
            return n && r.length >= n && r.pop(), r.unshift(i), i
        },
        find: function(t, e) {
            void 0 === t && (t = Je), void 0 === e && (e = {
                returnInactive: !1
            });
            for (var n = 0, i = r; n < i.length; n++) {
                var o = i[n];
                if (o.startTime <= t) {
                    if (e.returnInactive || t <= o.endTime) return o.value;
                    break
                }
            }
        },
        closeActive: function(t) {
            var e = r[0];
            e && e.endTime === Je && e.close(t)
        },
        findAll: function(t, e) {
            void 0 === t && (t = Je), void 0 === e && (e = 0);
            var n = pe(t, e);
            return r.filter(function(e) {
                return e.startTime <= n && t <= e.endTime
            }).map(function(t) {
                return t.value
            })
        },
        reset: function() {
            r = []
        },
        stop: function() {
            yr(i)
        }
    }
}
var rc = Z,
    nc = Qt;

function Si(t, e, n, r) {
    var i = new R,
        o = new R,
        a = Qs(t.sessionStoreStrategyType, e, n),
        s = _e({
            expireDelay: nc
        });

    function u() {
        return {
            id: a.getSession().id,
            trackingType: a.getSession()[e],
            isReplayForced: !!a.getSession().forcedReplay,
            anonymousId: a.getSession().anonymousId
        }
    }
    return a.renewObservable.subscribe(function() {
        s.add(u(), it()), i.notify()
    }), a.expireObservable.subscribe(function() {
        o.notify(), s.closeActive(it())
    }), a.expandOrRenewSession(), s.add(u(), Ua().relative), r.observable.subscribe(function() {
        r.isGranted() ? a.expandOrRenewSession() : a.expire()
    }), ac(t, function() {
        r.isGranted() && a.expandOrRenewSession()
    }), ic(t, function() {
        return a.expandSession()
    }), oc(t, function() {
        return a.restartSession()
    }), {
        findSession: function(t, e) {
            return s.find(t, e)
        },
        renewObservable: i,
        expireObservable: o,
        sessionStateUpdateObservable: a.sessionStateUpdateObservable,
        expire: a.expire,
        updateSessionState: a.updateSessionState
    }
}

function ac(t, e) {
    $(t, window, ["click", "touchstart", "keydown", "scroll"], e, {
        capture: !0,
        passive: !0
    }).stop
}

function ic(t, e) {
    var n = function() {
        "visible" === document.visibilityState && e()
    };
    L(t, document, "visibilitychange", n).stop, he(n, rc)
}

function oc(t, e) {
    L(t, window, "resume", e, {
        capture: !0
    }).stop
}

function Ei(t) {
    return t >= 500
}

function wi(t) {
    try {
        return t.clone()
    } catch {
        return
    }
}
var sc = 80 * Et,
    uc = 32,
    Ti = 3 * Va,
    cc = Z,
    Ci = j;

function Ii(t, e, n, r, i) {
    0 === e.transportStatus && 0 === e.queuedPayloads.size() && e.bandwidthMonitor.canHandle(t) ? Ri(t, e, n, {
        onSuccess: function() {
            return xi(0, e, n, r, i)
        },
        onFailure: function() {
            e.queuedPayloads.enqueue(t), Ai(e, n, r, i)
        }
    }) : e.queuedPayloads.enqueue(t)
}

function Ai(t, e, n, r) {
    2 === t.transportStatus && B(function() {
        Ri(t.queuedPayloads.first(), t, e, {
            onSuccess: function() {
                t.queuedPayloads.dequeue(), t.currentBackoffTime = Ci, xi(1, t, e, n, r)
            },
            onFailure: function() {
                t.currentBackoffTime = Math.min(cc, 2 * t.currentBackoffTime), Ai(t, e, n, r)
            }
        })
    }, t.currentBackoffTime)
}

function Ri(t, e, n, r) {
    var i = r.onSuccess,
        o = r.onFailure;
    e.bandwidthMonitor.add(t), n(t, function(n) {
        e.bandwidthMonitor.remove(t), dc(n) ? (e.transportStatus = e.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, t.retry = {
            count: t.retry ? t.retry.count + 1 : 1,
            lastFailureStatus: n.status
        }, o()) : (e.transportStatus = 0, i())
    })
}

function xi(t, e, n, r, i) {
    0 === t && e.queuedPayloads.isFull() && !e.queueFullReported && (i({
        message: "Reached max ".concat(r, " events size queued for upload: ").concat(Ti / Va, "MiB"),
        source: Q.AGENT,
        startClocks: H()
    }), e.queueFullReported = !0);
    var o = e.queuedPayloads;
    for (e.queuedPayloads = ki(); o.size() > 0;) Ii(o.dequeue(), e, n, r, i)
}

function dc(t) {
    return "opaque" !== t.type && (0 === t.status && !navigator.onLine || 408 === t.status || 429 === t.status || Ei(t.status))
}

function lc() {
    return {
        transportStatus: 0,
        currentBackoffTime: Ci,
        bandwidthMonitor: fc(),
        queuedPayloads: ki(),
        queueFullReported: !1
    }
}

function ki() {
    var t = [];
    return {
        bytesCount: 0,
        enqueue: function(e) {
            this.isFull() || (t.push(e), this.bytesCount += e.bytesCount)
        },
        first: function() {
            return t[0]
        },
        dequeue: function() {
            var e = t.shift();
            return e && (this.bytesCount -= e.bytesCount), e
        },
        size: function() {
            return t.length
        },
        isFull: function() {
            return this.bytesCount >= Ti
        }
    }
}

function fc() {
    return {
        ongoingRequestCount: 0,
        ongoingByteCount: 0,
        canHandle: function(t) {
            return 0 === this.ongoingRequestCount || this.ongoingByteCount + t.bytesCount <= sc && this.ongoingRequestCount < uc
        },
        add: function(t) {
            this.ongoingRequestCount += 1, this.ongoingByteCount += t.bytesCount
        },
        remove: function(t) {
            this.ongoingRequestCount -= 1, this.ongoingByteCount -= t.bytesCount
        }
    }
}

function Oi(t, e, n) {
    var r = lc(),
        i = function(n, r) {
            return hc(t, e, n, r)
        };
    return {
        send: function(e) {
            Ii(e, r, i, t.trackType, n)
        },
        sendOnExit: function(n) {
            vc(t, e, n)
        }
    }
}

function vc(t, e, n) {
    if (!!navigator.sendBeacon && n.bytesCount < e) try {
        var r = t.build("beacon", n);
        if (navigator.sendBeacon(r, n.data)) return
    } catch (t) {
        pc(t)
    }
    ln(t.build("xhr", n), n.data)
}
var Wn = !1;

function pc(t) {
    Wn || (Wn = !0, fr(t))
}

function hc(t, e, n, r) {
    if (mc() && n.bytesCount < e) {
        var i = t.build("fetch", n);
        fetch(i, {
            method: "POST",
            body: n.data,
            keepalive: !0,
            mode: "cors"
        }).then(y(function(t) {
            return r ? .({
                status: t.status,
                type: t.type
            })
        }), y(function() {
            ln(t.build("xhr", n), n.data, r)
        }))
    } else {
        ln(t.build("xhr", n), n.data, r)
    }
}

function mc() {
    try {
        return window.Request && "keepalive" in new Request("http://a")
    } catch {
        return !1
    }
}

function ln(t, e, n) {
    var r = new XMLHttpRequest;
    r.open("POST", t, !0), e instanceof Blob && r.setRequestHeader("Content-Type", e.type), L({
        allowUntrustedEvents: !0
    }, r, "loadend", function() {
        n ? .({
            status: r.status
        })
    }, {
        once: !0
    }), r.send(e)
}

function Bt() {
    var t = gc();
    if (t) return {
        getCapabilities: function() {
            var e;
            return JSON.parse((null === (e = t.getCapabilities) || void 0 === e ? void 0 : e.call(t)) || "[]")
        },
        getPrivacyLevel: function() {
            var e;
            return null === (e = t.getPrivacyLevel) || void 0 === e ? void 0 : e.call(t)
        },
        getAllowedWebViewHosts: function() {
            return JSON.parse(t.getAllowedWebViewHosts())
        },
        send: function(e, n, r) {
            var i = r ? {
                id: r
            } : void 0;
            t.send(JSON.stringify({
                eventType: e,
                event: n,
                view: i
            }))
        }
    }
}

function Li(t) {
    var e = Bt();
    return !!e && q(e.getCapabilities(), t)
}

function ft(t) {
    var e;
    void 0 === t && (t = null === (e = Tt().location) || void 0 === e ? void 0 : e.hostname);
    var n = Bt();
    return !!n && n.getAllowedWebViewHosts().some(function(e) {
        return t === e || hs(t, ".".concat(e))
    })
}

function gc() {
    return Tt().DatadogEventBridge
}
var ce = {
    HIDDEN: "visibility_hidden",
    UNLOADING: "before_unload",
    PAGEHIDE: "page_hide",
    FROZEN: "page_frozen"
};

function Ni(t) {
    return new R(function(e) {
        var n = $(t, window, ["visibilitychange", "freeze"], function(t) {
                "visibilitychange" === t.type && "hidden" === document.visibilityState ? e.notify({
                    reason: ce.HIDDEN
                }) : "freeze" === t.type && e.notify({
                    reason: ce.FROZEN
                })
            }, {
                capture: !0
            }).stop,
            r = L(t, window, "beforeunload", function() {
                e.notify({
                    reason: ce.UNLOADING
                })
            }).stop;
        return function() {
            n(), r()
        }
    })
}

function Mi(t) {
    return q(ir(ce), t)
}

function _c(t) {
    var e = t.encoder,
        n = t.request,
        r = t.flushController,
        i = t.messageBytesLimit,
        o = {},
        a = r.flushObservable.subscribe(function(t) {
            return function(t) {
                var r = ir(o).join("\n");
                o = {};
                var i = Mi(t.reason),
                    a = i ? n.sendOnExit : n.send;
                if (i && e.isAsync) {
                    var s = e.finishSync();
                    s.outputBytesCount && a(Yn(s));
                    var u = [s.pendingData, r].filter(Boolean).join("\n");
                    u && a({
                        data: u,
                        bytesCount: mn(u)
                    })
                } else r && e.write(e.isEmpty ? r : "\n".concat(r)), e.finish(function(t) {
                    a(Yn(t))
                })
            }(t)
        });

    function s(t, n) {
        var a = te(t),
            s = e.estimateEncodedBytesCount(a);
        s >= i ? A.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(i, "KB. ").concat(mr, " ").concat(Na, "/#technical-limitations")) : (function(t) {
            return void 0 !== t && void 0 !== o[t]
        }(n) && function(t) {
            var n = o[t];
            delete o[t];
            var i = e.estimateEncodedBytesCount(n);
            r.notifyAfterRemoveMessage(i)
        }(n), function(t, n, i) {
            r.notifyBeforeAddMessage(n), void 0 !== i ? (o[i] = t, r.notifyAfterAddMessage()) : e.write(e.isEmpty ? t : "\n".concat(t), function(t) {
                r.notifyAfterAddMessage(t - n)
            })
        }(a, s, n))
    }
    return {
        flushController: r,
        add: s,
        upsert: s,
        stop: a.unsubscribe
    }
}

function Yn(t) {
    return {
        data: "string" == typeof t.output ? t.output : new Blob([t.output], {
            type: "text/plain"
        }),
        bytesCount: t.outputBytesCount,
        encoding: t.encoding
    }
}

function bc(t) {
    var e, n = t.messagesLimit,
        r = t.bytesLimit,
        i = t.durationLimit,
        o = t.pageExitObservable,
        a = t.sessionExpireObservable,
        s = o.subscribe(function(t) {
            return f(t.reason)
        }),
        u = a.subscribe(function() {
            return f("session_expire")
        }),
        c = new R(function() {
            return function() {
                s.unsubscribe(), u.unsubscribe()
            }
        }),
        l = 0,
        d = 0;

    function f(t) {
        if (0 !== d) {
            var e = d,
                n = l;
            d = 0, l = 0, p(), c.notify({
                reason: t,
                messagesCount: e,
                bytesCount: n
            })
        }
    }

    function p() {
        tt(e), e = void 0
    }
    return {
        flushObservable: c,
        get messagesCount() {
            return d
        },
        notifyBeforeAddMessage: function(t) {
            l + t >= r && f("bytes_limit"), d += 1, l += t, void 0 === e && (e = B(function() {
                f("duration_limit")
            }, i))
        },
        notifyAfterAddMessage: function(t) {
            void 0 === t && (t = 0), l += t, d >= n ? f("messages_limit") : l >= r && f("bytes_limit")
        },
        notifyAfterRemoveMessage: function(t) {
            l -= t, 0 === (d -= 1) && p()
        }
    }
}

function In(t, e, n, r, i, o, a) {
    void 0 === a && (a = _c);
    var s = c(t, e),
        u = n && c(t, n);

    function c(t, e) {
        var n = e.endpoint,
            s = e.encoder;
        return a({
            encoder: s,
            request: Oi(n, t.batchBytesLimit, r),
            flushController: bc({
                messagesLimit: t.batchMessagesLimit,
                bytesLimit: t.batchBytesLimit,
                durationLimit: t.flushTimeout,
                pageExitObservable: i,
                sessionExpireObservable: o
            }),
            messageBytesLimit: t.messageBytesLimit
        })
    }
    return {
        flushObservable: s.flushController.flushObservable,
        add: function(t, e) {
            void 0 === e && (e = !0), s.add(t), u && e && u.add(n.transformMessage ? n.transformMessage(t) : t)
        },
        upsert: function(t, e) {
            s.upsert(t, e), u && u.upsert(n.transformMessage ? n.transformMessage(t) : t, e)
        },
        stop: function() {
            s.stop(), u && u.stop()
        }
    }
}

function Le() {
    var t = "",
        e = 0;
    return {
        isAsync: !1,
        get isEmpty() {
            return !t
        },
        write: function(n, r) {
            var i = mn(n);
            e += i, t += n, r && r(i)
        },
        finish: function(t) {
            t(this.finishSync())
        },
        finishSync: function() {
            var n = {
                output: t,
                outputBytesCount: e,
                rawBytesCount: e,
                pendingData: ""
            };
            return t = "", e = 0, n
        },
        estimateEncodedBytesCount: function(t) {
            return t.length
        }
    }
}
var Di = function() {
    function t() {
        this.callbacks = {}
    }
    return t.prototype.notify = function(t, e) {
        var n = this.callbacks[t];
        n && n.forEach(function(t) {
            return t(e)
        })
    }, t.prototype.subscribe = function(t, e) {
        var n = this;
        return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), {
            unsubscribe: function() {
                n.callbacks[t] = n.callbacks[t].filter(function(t) {
                    return e !== t
                })
            }
        }
    }, t
}();

function er(t, e, n) {
    var r = 0,
        i = !1;
    return {
        isLimitReached: function() {
            if (0 === r && B(function() {
                    r = 0
                }, Z), (r += 1) <= e || i) return i = !1, !1;
            if (r === e + 1) {
                i = !0;
                try {
                    n({
                        message: "Reached max number of ".concat(t, "s by minute: ").concat(e),
                        source: Q.AGENT,
                        startClocks: H()
                    })
                } finally {
                    i = !1
                }
            }
            return !0
        }
    }
}

function An(t, e, n) {
    return document.readyState === e || "complete" === document.readyState ? (n(), {
        stop: I
    }) : L(t, window, "complete" === e ? "load" : "DOMContentLoaded", n, {
        once: !0
    })
}
var qr, Xr, Rn = new WeakMap;

function Pi(t) {
    return qr || (qr = yc(t)), qr
}

function yc(t) {
    return new R(function(e) {
        var n = J(XMLHttpRequest.prototype, "open", Sc).stop,
            r = J(XMLHttpRequest.prototype, "send", function(n) {
                Ec(n, t, e)
            }, {
                computeHandlingStack: !0
            }).stop,
            i = J(XMLHttpRequest.prototype, "abort", wc).stop;
        return function() {
            n(), r(), i()
        }
    })
}

function Sc(t) {
    var e = t.target,
        n = t.parameters,
        r = n[0],
        i = n[1];
    Rn.set(e, {
        state: "open",
        method: String(r).toUpperCase(),
        url: wn(String(i))
    })
}

function Ec(t, e, n) {
    var r = t.target,
        i = t.handlingStack,
        o = Rn.get(r);
    if (o) {
        var a = o;
        a.state = "start", a.startClocks = H(), a.isAborted = !1, a.xhr = r, a.handlingStack = i;
        var s = !1,
            u = J(r, "onreadystatechange", function() {
                r.readyState === XMLHttpRequest.DONE && c()
            }).stop,
            c = function() {
                if (l(), u(), !s) {
                    s = !0;
                    var t = o;
                    t.state = "complete", t.duration = z(a.startClocks.timeStamp, D()), t.status = r.status, n.notify(xe(t))
                }
            },
            l = L(e, r, "loadend", c).stop;
        n.notify(a)
    }
}

function wc(t) {
    var e = t.target,
        n = Rn.get(e);
    n && (n.isAborted = !0)
}

function Cr() {
    return Xr || (Xr = Tc()), Xr
}

function Tc() {
    return new R(function(t) {
        if (window.fetch) return J(window, "fetch", function(e) {
            return Cc(e, t)
        }, {
            computeHandlingStack: !0
        }).stop
    })
}

function Cc(t, e) {
    var n = t.parameters,
        r = t.onPostCall,
        i = t.handlingStack,
        o = n[0],
        a = n[1],
        s = a && a.method;
    void 0 === s && o instanceof Request && (s = o.method);
    var u = void 0 !== s ? String(s).toUpperCase() : "GET",
        c = o instanceof Request ? o.url : wn(String(o)),
        l = {
            state: "start",
            init: a,
            input: o,
            method: u,
            startClocks: H(),
            url: c,
            handlingStack: i
        };
    e.notify(l), n[0] = l.input, n[1] = l.init, r(function(t) {
        return Ic(e, t, l)
    })
}

function Ic(t, e, n) {
    var r = n;

    function i(e) {
        r.state = "resolve", S(r, e), t.notify(r)
    }
    e.then(y(function(t) {
        i({
            response: t,
            responseType: t.type,
            status: t.status,
            isAborted: !1
        })
    }), y(function(t) {
        var e, n;
        i({
            status: 0,
            isAborted: (null === (n = null === (e = r.init) || void 0 === e ? void 0 : e.signal) || void 0 === n ? void 0 : n.aborted) || t instanceof DOMException && t.code === DOMException.ABORT_ERR,
            error: t
        })
    }))
}

function Ui(t, e) {
    if (window.requestIdleCallback && window.cancelIdleCallback) {
        var n = window.requestIdleCallback(y(t), e);
        return function() {
            return window.cancelIdleCallback(n)
        }
    }
    return Rc(t)
}
var Ac = 50;

function Rc(t) {
    var e = at(),
        n = B(function() {
            t({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, Ac - (at() - e))
                }
            })
        }, 0);
    return function() {
        return tt(n)
    }
}
var xc = j,
    kc = 30;

function Oc() {
    var t = [];

    function e(e) {
        var r;
        if (e.didTimeout) {
            var i = performance.now();
            r = function() {
                return kc - (performance.now() - i)
            }
        } else r = e.timeRemaining.bind(e);
        for (; r() > 0 && t.length;) t.shift()();
        t.length && n()
    }

    function n() {
        Ui(e, {
            timeout: xc
        })
    }
    return {
        push: function(e) {
            1 === t.push(e) && n()
        }
    }
}
var Jr = {};

function Vi(t) {
    var e = t.map(function(t) {
        return Jr[t] || (Jr[t] = Lc(t)), Jr[t]
    });
    return za.apply(void 0, e)
}

function Lc(t) {
    return new R(function(e) {
        var n = pt[t];
        return pt[t] = function() {
                for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                n.apply(console, r);
                var o = le();
                $t(function() {
                    e.notify(Nc(r, t, o))
                })
            },
            function() {
                pt[t] = n
            }
    })
}

function Nc(t, e, n) {
    var r, i = t.map(function(t) {
        return Mc(t)
    }).join(" ");
    if (e === P.error) {
        var o = Nt(t, It);
        r = {
            stack: o ? ee(_t(o)) : void 0,
            fingerprint: oi(o),
            causes: o ? si(o, "console") : void 0,
            startClocks: H(),
            message: i,
            source: Q.CONSOLE,
            handling: "handled",
            handlingStack: n
        }
    }
    return {
        api: e,
        message: i,
        error: r,
        handlingStack: n
    }
}

function Mc(t) {
    return "string" == typeof t ? O(t) : It(t) ? ai(_t(t)) : te(O(t), void 0, 2)
}

function ve(t) {
    var e = {},
        n = new R,
        r = {
            getContext: function() {
                return Tr(e)
            },
            setContext: function(i) {
                "object" === Ut(i) ? (e = O(i), t ? .updateCustomerData(e)) : r.clearContext(), n.notify()
            },
            setContextProperty: function(r, i) {
                e[r] = O(i), t ? .updateCustomerData(e), n.notify()
            },
            removeContextProperty: function(r) {
                delete e[r], t ? .updateCustomerData(e), n.notify()
            },
            clearContext: function() {
                e = {}, t ? .resetCustomerData(), n.notify()
            },
            changeObservable: n
        };
    return r
}
var Dc = "_dd_c",
    Pc = [];

function vr(t, e, n, r) {
    var i = Uc(n, r);

    function o() {
        var t = localStorage.getItem(i);
        return null !== t ? JSON.parse(t) : {}
    }
    Pc.push(L(t, window, "storage", function(t) {
        var n = t.key;
        i === n && e.setContext(o())
    })), e.changeObservable.subscribe(function() {
        localStorage.setItem(i, JSON.stringify(e.getContext()))
    }), e.setContext(et(o(), e.getContext()))
}

function Uc(t, e) {
    return "".concat(Dc, "_").concat(t, "_").concat(e)
}
var Vc = 3 * Et,
    Bc = 16 * Et,
    zc = 200;

function Bi(t) {
    void 0 === t && (t = 2);
    var e = new Map,
        n = !1;

    function r(r) {
        if (void 0 === r && (r = 0), !n && 0 !== t) {
            var i = 2 === t ? Vc : Bc,
                o = r;
            e.forEach(function(t) {
                o += t.getBytesCount()
            }), o > i && (Fc(i), n = !0)
        }
    }
    return {
        createDetachedTracker: function() {
            var t = qn(function() {
                return r(t.getBytesCount())
            });
            return t
        },
        getOrCreateTracker: function(t) {
            return e.has(t) || e.set(t, qn(r)), e.get(t)
        },
        setCompressionStatus: function(e) {
            0 === t && (t = e, r())
        },
        getCompressionStatus: function() {
            return t
        },
        stop: function() {
            e.forEach(function(t) {
                return t.stop()
            }), e.clear()
        }
    }
}

function qn(t) {
    var e = 0,
        n = Ct(function(n) {
            e = mn(te(n)), t()
        }, zc),
        r = n.throttled,
        i = n.cancel,
        o = function() {
            i(), e = 0
        };
    return {
        updateCustomerData: function(t) {
            Mt(t) ? o() : r(t)
        },
        resetCustomerData: o,
        getBytesCount: function() {
            return e
        },
        stop: function() {
            i()
        }
    }
}

function Fc(t) {
    A.warn("Customer data exceeds the recommended ".concat(t / Et, "KiB threshold. ").concat(mr, " ").concat(Na, "/#customer-data-exceeds-the-recommended-threshold-warning"))
}

function zi(t, e, n) {
    var r = t.getReader(),
        i = [],
        o = 0;

    function a() {
        var t, a;
        if (r.cancel().catch(I), n.collectStreamBody) {
            var s;
            if (1 === i.length) s = i[0];
            else {
                s = new Uint8Array(o);
                var u = 0;
                i.forEach(function(t) {
                    s.set(t, u), u += t.length
                })
            }
            t = s.slice(0, n.bytesLimit), a = s.length > n.bytesLimit
        }
        e(void 0, t, a)
    }! function t() {
        r.read().then(y(function(e) {
            e.done ? a() : (n.collectStreamBody && i.push(e.value), (o += e.value.length) > n.bytesLimit ? a() : t())
        }), y(function(t) {
            return e(t)
        }))
    }()
}
var st, Gc = "datadog-synthetics-public-id",
    Hc = "datadog-synthetics-result-id",
    jc = "datadog-synthetics-injects-rum";

function Ir() {
    return !(!window._DATADOG_SYNTHETICS_INJECTS_RUM && !kt(jc))
}

function Fi() {
    var t = window._DATADOG_SYNTHETICS_PUBLIC_ID || kt(Gc);
    return "string" == typeof t ? t : void 0
}

function Gi() {
    var t = window._DATADOG_SYNTHETICS_RESULT_ID || kt(Hc);
    return "string" == typeof t ? t : void 0
}

function xn(t) {
    var e = Ut(t);
    return "string" === e || "function" === e || t instanceof RegExp
}

function Hi(t, e, n) {
    return void 0 === n && (n = !1), t.some(function(t) {
        try {
            if ("function" == typeof t) return t(e);
            if (t instanceof RegExp) return t.test(e);
            if ("string" == typeof t) return n ? Ve(e, t) : t === e
        } catch (t) {
            A.error(t)
        }
        return !1
    })
}

function pr(t, e, n) {
    var r = n.getHandler(),
        i = Array.isArray(r) ? r : [r];
    return Xn[t] >= Xn[n.getLevel()] && q(i, e)
}
var w = {
        ok: "ok",
        debug: "debug",
        info: "info",
        notice: "notice",
        warn: "warn",
        error: "error",
        critical: "critical",
        alert: "alert",
        emerg: "emerg"
    },
    Xn = ((st = {})[w.ok] = 0, st[w.debug] = 1, st[w.info] = 2, st[w.notice] = 4, st[w.warn] = 5, st[w.error] = 6, st[w.critical] = 7, st[w.alert] = 8, st[w.emerg] = 9, st);

function Ar(t, e) {
    var n = (void 0 === e ? {} : e).includeMessage,
        r = void 0 !== n && n;
    return {
        stack: t.stack,
        kind: t.type,
        message: r ? t.message : void 0,
        causes: t.causes,
        fingerprint: t.fingerprint,
        handling: t.handling
    }
}
var Kc = function(t, e, n, r) {
        var i, o = arguments.length,
            a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
        else
            for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
        return o > 3 && a && Object.defineProperty(e, n, a), a
    },
    Ne = {
        console: "console",
        http: "http"
    },
    Wc = Object.keys(w),
    vt = function() {
        function t(t, e, n, r, i, o) {
            void 0 === r && (r = Ne.http), void 0 === i && (i = w.debug), void 0 === o && (o = {}), this.handleLogStrategy = t, this.handlerType = r, this.level = i, this.contextManager = ve(e), this.contextManager.setContext(o), n && this.contextManager.setContextProperty("logger", {
                name: n
            })
        }
        return t.prototype.logImplementation = function(t, e, n, r, i) {
            void 0 === n && (n = w.info);
            var o, a = O(e);
            null != r ? o = et({
                error: Ar(Tn({
                    stackTrace: It(r) ? _t(r) : void 0,
                    originalError: r,
                    nonErrorPrefix: "Provided",
                    source: Q.LOGGER,
                    handling: "handled",
                    startClocks: H()
                }), {
                    includeMessage: !0
                })
            }, a) : o = a;
            this.handleLogStrategy({
                message: O(t),
                context: o,
                status: n
            }, this, i)
        }, t.prototype.log = function(t, e, n, r) {
            var i;
            void 0 === n && (n = w.info), pr(n, Ne.http, this) && (i = le()), this.logImplementation(t, e, n, r, i)
        }, t.prototype.setContext = function(t) {
            this.contextManager.setContext(t)
        }, t.prototype.getContext = function() {
            return this.contextManager.getContext()
        }, t.prototype.setContextProperty = function(t, e) {
            this.contextManager.setContextProperty(t, e)
        }, t.prototype.removeContextProperty = function(t) {
            this.contextManager.removeContextProperty(t)
        }, t.prototype.clearContext = function() {
            this.contextManager.clearContext()
        }, t.prototype.setHandler = function(t) {
            this.handlerType = t
        }, t.prototype.getHandler = function() {
            return this.handlerType
        }, t.prototype.setLevel = function(t) {
            this.level = t
        }, t.prototype.getLevel = function() {
            return this.level
        }, Kc([ys], t.prototype, "logImplementation", null), t
    }();

function At(t) {
    return function(e, n, r) {
        var i;
        pr(t, Ne.http, this) && (i = le()), this.logImplementation(e, n, t, r, i)
    }
}

function Yc(t, e) {
    return {
        view: {
            referrer: document.referrer,
            url: window.location.href
        },
        context: t.getContext(),
        user: e.getContext()
    }
}
vt.prototype.ok = At(w.ok), vt.prototype.debug = At(w.debug), vt.prototype.info = At(w.info), vt.prototype.notice = At(w.notice), vt.prototype.warn = At(w.warn), vt.prototype.error = At(w.error), vt.prototype.critical = At(w.critical), vt.prototype.alert = At(w.alert), vt.prototype.emerg = At(w.emerg);
var qc = 32 * Et;

function Xc(t) {
    !0 === t.usePciIntake && t.site && "datadoghq.com" !== t.site && A.warn("PCI compliance for Logs is only available for Datadog organizations in the US1 site. Default intake will be used.");
    var e = ei(t),
        n = Jn(t.forwardConsoleLogs, ir(P), "Forward Console Logs"),
        r = Jn(t.forwardReports, ir(fe), "Forward Reports");
    if (e && n && r) return t.forwardErrorsToLogs && !q(n, P.error) && n.push(P.error), S({
        forwardErrorsToLogs: !1 !== t.forwardErrorsToLogs,
        forwardConsoleLogs: n,
        forwardReports: r,
        requestErrorResponseLengthLimit: qc,
        sendLogsAfterSessionExpiration: !!t.sendLogsAfterSessionExpiration
    }, e)
}

function Jn(t, e, n) {
    return void 0 === t ? [] : "all" === t || Array.isArray(t) && t.every(function(t) {
        return q(e, t)
    }) ? "all" === t ? e : qu(t) : void A.error("".concat(n, ' should be "all" or an array with allowed values "').concat(e.join('", "'), '"'))
}

function Jc(t) {
    var e = ri(t);
    return S({
        forward_errors_to_logs: t.forwardErrorsToLogs,
        forward_console_logs: t.forwardConsoleLogs,
        forward_reports: t.forwardReports,
        use_pci_intake: t.usePciIntake,
        send_logs_after_session_expiration: t.sendLogsAfterSessionExpiration
    }, e)
}

function $c(t, e, n) {
    var r, i, o = Cn(),
        a = e.observable.subscribe(s);

    function s() {
        if (i && r && e.isGranted()) {
            a.unsubscribe();
            var t = n(r, i);
            o.drain(t)
        }
    }
    return {
        init: function(t) {
            if (t)
                if (Ga(t.enableExperimentalFeatures), ft() && (t = Zc(t)), r = t, i) Er("DD_LOGS", t);
                else {
                    var n = Xc(t);
                    n && (i = n, Cr().subscribe(I), e.tryToInit(n.trackingConsent), s())
                }
            else A.error("Missing configuration")
        },
        get initConfiguration() {
            return r
        },
        getInternalContext: I,
        handleLog: function(e, n, r, i, a) {
            void 0 === i && (i = t()), void 0 === a && (a = D()), o.add(function(t) {
                return t.handleLog(e, n, r, i, a)
            })
        }
    }
}

function Zc(t) {
    return S({}, t, {
        clientToken: "empty"
    })
}
var $n = "logs";

function Qc(t) {
    var e = Bi(),
        n = ve(e.getOrCreateTracker(2)),
        r = ve(e.getOrCreateTracker(1)),
        i = Za();

    function o() {
        return Yc(n, r)
    }
    var a = $c(o, i, function(e, s) {
            e.storeContextsAcrossPages && (vr(s, n, $n, 2), vr(s, r, $n, 1));
            var u = t(e, s, o, i);
            return a = td(e, u), u
        }),
        s = {},
        u = new vt(function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return a.handleLog.apply(a, t)
        }, e.createDetachedTracker());
    return ci({
        logger: u,
        init: y(function(t) {
            return a.init(t)
        }),
        setTrackingConsent: y(function(t) {
            i.update(t), W({
                feature: "set-tracking-consent",
                tracking_consent: t
            })
        }),
        getGlobalContext: y(function() {
            return n.getContext()
        }),
        setGlobalContext: y(function(t) {
            return n.setContext(t)
        }),
        setGlobalContextProperty: y(function(t, e) {
            return n.setContextProperty(t, e)
        }),
        removeGlobalContextProperty: y(function(t) {
            return n.removeContextProperty(t)
        }),
        clearGlobalContext: y(function() {
            return n.clearContext()
        }),
        createLogger: y(function(t, n) {
            return void 0 === n && (n = {}), s[t] = new vt(function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return a.handleLog.apply(a, t)
            }, e.createDetachedTracker(), O(t), n.handler, n.level, O(n.context)), s[t]
        }),
        getLogger: y(function(t) {
            return s[t]
        }),
        getInitConfiguration: y(function() {
            return Tr(a.initConfiguration)
        }),
        getInternalContext: y(function(t) {
            return a.getInternalContext(t)
        }),
        setUser: y(function(t) {
            ja(t) && r.setContext(cr(t))
        }),
        getUser: y(function() {
            return r.getContext()
        }),
        setUserProperty: y(function(t, e) {
            var n, i = cr((n = {}, n[t] = e, n))[t];
            r.setContextProperty(t, i)
        }),
        removeUserProperty: y(function(t) {
            return r.removeContextProperty(t)
        }),
        clearUser: y(function() {
            return r.clearContext()
        })
    })
}

function td(t, e) {
    return S({
        init: function(t) {
            Er("DD_LOGS", t)
        },
        initConfiguration: t
    }, e)
}
var ed = "logs";

function rd(t, e) {
    var n = Si(t, ed, function(e) {
        return ad(t, e)
    }, e);
    return {
        findTrackedSession: function(t, e) {
            void 0 === e && (e = {
                returnInactive: !1
            });
            var r = n.findSession(t, e);
            return r && "1" === r.trackingType ? {
                id: r.id
            } : void 0
        },
        expireObservable: n.expireObservable
    }
}

function nd(t) {
    var e = "1" === ji(t) ? {} : void 0;
    return {
        findTrackedSession: function() {
            return e
        },
        expireObservable: new R
    }
}

function ji(t) {
    return Lt(t.sessionSampleRate) ? "1" : "0"
}

function ad(t, e) {
    var n = id(e) ? e : ji(t);
    return {
        trackingType: n,
        isTracked: "1" === n
    }
}

function id(t) {
    return "0" === t || "1" === t
}
var Zn = !1;

function rr(t) {
    var e = window;
    if (Ir()) {
        var n = r(e.DD_RUM_SYNTHETICS);
        return !n && !Zn && (Zn = !0, Vt("Logs sent before RUM is injected by the synthetics worker", {
            testId: Fi(),
            resultId: Gi()
        })), n
    }
    return r(e.DD_RUM);

    function r(e) {
        if (e && e.getInternalContext) return e.getInternalContext(t)
    }
}

function od(t, e, n, r, i) {
    var o = Wc.concat(["custom"]),
        a = {};
    o.forEach(function(t) {
        a[t] = er(t, e.eventRateLimiterThreshold, i)
    }), n.subscribe(0, function(i) {
        var o, s, u = i.rawLogsEvent,
            c = i.messageContext,
            l = void 0 === c ? void 0 : c,
            d = i.savedCommonContext,
            f = void 0 === d ? void 0 : d,
            p = i.domainContext,
            v = _r(u.date),
            h = t.findTrackedSession(v);
        if (h || e.sendLogsAfterSessionExpiration && t.findTrackedSession(v, {
                returnInactive: !0
            })) {
            var g = f || r(),
                m = et({
                    service: e.service,
                    session_id: h ? h.id : void 0,
                    session: h ? {
                        id: h.id
                    } : void 0,
                    usr: Mt(g.user) ? void 0 : g.user,
                    view: g.view
                }, g.context, rr(v), u, l);
            !1 === (null === (o = e.beforeSend) || void 0 === o ? void 0 : o.call(e, m, p)) || m.origin !== Q.AGENT && (null !== (s = a[m.status]) && void 0 !== s ? s : a.custom).isLimitReached() || n.notify(1, m)
        }
    })
}
var Ht, sd = ((Ht = {})[P.log] = w.info, Ht[P.debug] = w.debug, Ht[P.info] = w.info, Ht[P.warn] = w.warn, Ht[P.error] = w.error, Ht);

function ud(t, e) {
    var n = Vi(t.forwardConsoleLogs).subscribe(function(t) {
        var n = {
            rawLogsEvent: {
                date: D(),
                message: t.message,
                origin: Q.CONSOLE,
                error: t.error && Ar(t.error),
                status: sd[t.api]
            },
            domainContext: {
                handlingStack: t.handlingStack
            }
        };
        e.notify(0, n)
    });
    return {
        stop: function() {
            n.unsubscribe()
        }
    }
}

function cd(t, e) {
    var n = li(t, t.forwardReports).subscribe(function(t) {
        var n, r = t.message,
            i = "deprecation" === t.originalError.type ? w.warn : w.error;
        i === w.error ? n = Ar(t) : t.stack && (r += " Found in ".concat(zu(t.stack))), e.notify(0, {
            rawLogsEvent: {
                date: D(),
                message: r,
                origin: Q.REPORT,
                error: n,
                status: i
            }
        })
    });
    return {
        stop: function() {
            n.unsubscribe()
        }
    }
}

function dd(t, e) {
    if (!t.forwardErrorsToLogs) return {
        stop: I
    };
    var n = Pi(t).subscribe(function(t) {
            "complete" === t.state && i("xhr", t)
        }),
        r = Cr().subscribe(function(t) {
            "resolve" === t.state && i("fetch", t)
        });

    function i(n, r) {
        function i(t) {
            var i = {
                isAborted: r.isAborted,
                handlingStack: r.handlingStack
            };
            e.notify(0, {
                rawLogsEvent: {
                    message: "".concat(hd(n), " error ").concat(r.method, " ").concat(r.url),
                    date: r.startClocks.timeStamp,
                    error: {
                        stack: t || "Failed to load",
                        handling: void 0
                    },
                    http: {
                        method: r.method,
                        status_code: r.status,
                        url: r.url
                    },
                    status: w.error,
                    origin: Q.NETWORK
                },
                domainContext: i
            })
        }!ti(r.url) && (pd(r) || Ei(r.status)) && ("xhr" in r ? ld(r.xhr, t, i) : r.response ? vd(r.response, t, i) : r.error && fd(r.error, t, i))
    }
    return {
        stop: function() {
            n.unsubscribe(), r.unsubscribe()
        }
    }
}

function ld(t, e, n) {
    "string" == typeof t.response ? n(kn(t.response, e)) : n(t.response)
}

function fd(t, e, n) {
    n(kn(ee(_t(t)), e))
}

function vd(t, e, n) {
    var r = wi(t);
    r && r.body ? window.TextDecoder ? md(r.body, e.requestErrorResponseLengthLimit, function(t, e) {
        n(t ? "Unable to retrieve response: ".concat(t) : e)
    }) : r.text().then(y(function(t) {
        return n(kn(t, e))
    }), y(function(t) {
        return n("Unable to retrieve response: ".concat(t))
    })) : n()
}

function pd(t) {
    return 0 === t.status && "opaque" !== t.responseType
}

function kn(t, e) {
    return t.length > e.requestErrorResponseLengthLimit ? "".concat(t.substring(0, e.requestErrorResponseLengthLimit), "...") : t
}

function hd(t) {
    return "xhr" === t ? "XHR" : "Fetch"
}

function md(t, e, n) {
    zi(t, function(t, e, r) {
        if (t) n(t);
        else {
            var i = (new TextDecoder).decode(e);
            r && (i += "..."), n(void 0, i)
        }
    }, {
        bytesLimit: e,
        collectStreamBody: !0
    })
}

function gd(t, e) {
    if (!t.forwardErrorsToLogs) return {
        stop: I
    };
    var n = new R,
        r = ui(n).stop,
        i = n.subscribe(function(t) {
            e.notify(0, {
                rawLogsEvent: {
                    message: t.message,
                    date: t.startClocks.timeStamp,
                    error: Ar(t),
                    origin: Q.SOURCE,
                    status: w.error
                }
            })
        });
    return {
        stop: function() {
            r(), i.unsubscribe()
        }
    }
}
var ut, _d = Di;

function bd(t) {
    return {
        handleLog: function(e, n, r, i, o) {
            var a = et(n.getContext(), e.context);
            if (pr(e.status, Ne.console, n) && Sd(e, a), pr(e.status, Ne.http, n)) {
                var s = {
                    rawLogsEvent: {
                        date: o || D(),
                        message: e.message,
                        status: e.status,
                        origin: Q.LOGGER
                    },
                    messageContext: a,
                    savedCommonContext: i
                };
                r && (s.domainContext = {
                    handlingStack: r
                }), t.notify(0, s)
            }
        }
    }
}
var yd = ((ut = {})[w.ok] = P.debug, ut[w.debug] = P.debug, ut[w.info] = P.info, ut[w.notice] = P.info, ut[w.warn] = P.warn, ut[w.error] = P.error, ut[w.critical] = P.error, ut[w.alert] = P.error, ut[w.emerg] = P.error, ut);

function Sd(t, e) {
    var n = t.status,
        r = t.message;
    Wt[yd[n]].call(pt, r, e)
}

function Ed(t, e, n, r, i) {
    var o = In(t, {
        endpoint: t.logsEndpointBuilder,
        encoder: Le()
    }, t.replica && {
        endpoint: t.replica.logsEndpointBuilder,
        encoder: Le()
    }, n, r, i.expireObservable);
    return e.subscribe(1, function(t) {
        o.add(t)
    }), o
}

function wd(t) {
    var e = Bt();
    t.subscribe(1, function(t) {
        e.send("log", t)
    })
}

function Td(t) {
    return {
        get: function(e) {
            var n = t.findTrackedSession(e);
            if (n) return {
                session_id: n.id
            }
        }
    }
}

function Cd(t) {
    return function(e) {
        t.notify(0, {
            rawLogsEvent: {
                message: e.message,
                date: e.startClocks.timeStamp,
                origin: Q.AGENT,
                status: w.error
            }
        }), Vt("Error reported to customer", {
            "error.message": e.message
        })
    }
}

function Id(t, e, n, r, i) {
    var o = gi("browser-logs-sdk", e);
    o.setContextProvider(function() {
        var t, e, n, r, o, a;
        return {
            application: {
                id: null === (t = rr()) || void 0 === t ? void 0 : t.application_id
            },
            session: {
                id: null === (e = i.findTrackedSession()) || void 0 === e ? void 0 : e.id
            },
            view: {
                id: null === (r = null === (n = rr()) || void 0 === n ? void 0 : n.view) || void 0 === r ? void 0 : r.id
            },
            action: {
                id: null === (a = null === (o = rr()) || void 0 === o ? void 0 : o.user_action) || void 0 === a ? void 0 : a.id
            }
        }
    });
    var a = [];
    if (ft()) {
        var s = Bt(),
            u = o.observable.subscribe(function(t) {
                return s.send("internal_telemetry", t)
            });
        a.push(function() {
            return u.unsubscribe()
        })
    } else {
        var c = In(e, {
            endpoint: e.rumEndpointBuilder,
            encoder: Le()
        }, e.replica && {
            endpoint: e.replica.rumEndpointBuilder,
            encoder: Le()
        }, n, r, i.expireObservable);
        a.push(function() {
            return c.stop()
        });
        var l = o.observable.subscribe(function(t) {
            return c.add(t, bi(e))
        });
        a.push(function() {
            return l.unsubscribe()
        })
    }
    return _i(), yi(Jc(t)), {
        telemetry: o,
        stop: function() {
            a.forEach(function(t) {
                return t()
            })
        }
    }
}

function Ad(t, e, n, r) {
    var i = new _d,
        o = [];
    i.subscribe(1, function(t) {
        return wr("logs", t)
    });
    var a = Cd(i),
        s = Ni(e),
        u = !e.sessionStoreStrategyType || ft() || Ir() ? nd(e) : rd(e, r),
        c = Id(t, e, a, s, u).stop;
    o.push(function() {
        return c()
    }), dd(e, i), gd(e, i), ud(e, i), cd(e, i);
    var l = bd(i).handleLog;
    if (od(u, e, i, n, a), ft()) wd(i);
    else {
        var d = Ed(e, i, a, s, u).stop;
        o.push(function() {
            return d()
        })
    }
    return {
        handleLog: l,
        getInternalContext: Td(u).get,
        stop: function() {
            o.forEach(function(t) {
                return t()
            })
        }
    }
}
var $r, fn = Qc(Ad);

function Rd(t, e, n) {
    return {
        context: t.getContext(),
        user: e.getContext(),
        hasReplay: !!n.isRecording() || void 0
    }
}

function xd() {
    return {
        vitalsByName: new Map,
        vitalsByReference: new WeakMap
    }
}

function kd(t, e, n) {
    function r(n) {
        (function(t) {
            return !e.wasInPageStateDuringPeriod("frozen", t.startClocks.relative, t.duration)
        })(n) && t.notify(12, Ld(n))
    }
    return {
        addDurationVital: r,
        startDurationVital: function(t, e) {
            return void 0 === e && (e = {}), Ki(n, t, e)
        },
        stopDurationVital: function(t, e) {
            void 0 === e && (e = {}), Wi(r, n, t, e)
        }
    }
}

function Ki(t, e, n) {
    var r = t.vitalsByName,
        i = t.vitalsByReference;
    void 0 === n && (n = {});
    var o = {
            name: e,
            startClocks: H(),
            context: n.context,
            description: n.description
        },
        a = {
            __dd_vital_reference: !0
        };
    return r.set(e, o), i.set(a, o), a
}

function Wi(t, e, n, r) {
    var i = e.vitalsByName,
        o = e.vitalsByReference;
    void 0 === r && (r = {});
    var a = "string" == typeof n ? i.get(n) : o.get(n);
    a && (t(Od(a, a.startClocks, r, H())), "string" == typeof n ? i.delete(n) : o.delete(n))
}

function Od(t, e, n, r) {
    var i;
    return {
        name: t.name,
        type: "duration",
        startClocks: e,
        duration: z(e.timeStamp, r.timeStamp),
        context: et(t.context, n.context),
        description: null !== (i = n.description) && void 0 !== i ? i : t.description
    }
}

function Ld(t, e) {
    var n = {
        date: t.startClocks.timeStamp,
        vital: {
            id: K(),
            type: t.type,
            name: t.name,
            duration: T(t.duration),
            description: t.description
        },
        type: "vital",
        _dd: {
            vital: {
                computed_value: !0
            }
        }
    };
    return {
        rawRumEvent: n,
        startTime: t.startClocks.relative,
        customerContext: t.context,
        domainContext: {}
    }
}

function Yi() {
    return window.crypto || window.msCrypto
}

function Nd() {
    return Xi(64)
}

function qi() {
    return Xi(63)
}

function Xi(t) {
    return $r || ($r = wt(ot.CONSISTENT_TRACE_SAMPLING) && Md() ? Dd : Pd), $r(t)
}

function Md() {
    try {
        return crypto.getRandomValues(new BigUint64Array(1)), !0
    } catch {
        return !1
    }
}

function Dd(t) {
    var e = crypto.getRandomValues(new BigUint64Array(1))[0];
    return 63 === t && (e >>= BigInt("1")), e
}

function Pd(t) {
    var e = Yi().getRandomValues(new Uint32Array(2));
    return 63 === t && (e[e.length - 1] >>>= 1), {
        toString: function(t) {
            void 0 === t && (t = 10);
            var n = e[1],
                r = e[0],
                i = "";
            do {
                var o = n % t * 4294967296 + r;
                n = Math.floor(n / t), r = Math.floor(o / t), i = (o % t).toString(t) + i
            } while (n || r);
            return i
        }
    }
}

function re(t) {
    var e = t.toString(16);
    return Array(17 - e.length).join("0") + e
}

function Ud(t, e) {
    if (100 === e) return !0;
    if (0 === e) return !1;
    if ("bigint" != typeof t) return Lt(e);
    var n = BigInt("1111111111111111111"),
        r = BigInt("0x10000000000000000");
    return Number(t * n % r) <= e / 100 * Number(r)
}

function Vd(t) {
    var e = t;
    return "object" === Ut(e) && xn(e.match) && Array.isArray(e.propagatorTypes)
}

function Bd(t) {
    0 === t.status && !t.isAborted && (t.traceId = void 0, t.spanId = void 0, t.traceSampled = void 0)
}

function zd(t, e) {
    return {
        clearTracingIfNeeded: Bd,
        traceFetch: function(n) {
            return Qn(t, n, e, function(t) {
                var e;
                if (n.input instanceof Request && (null === (e = n.init) || void 0 === e || !e.headers)) n.input = new Request(n.input), Object.keys(t).forEach(function(e) {
                    n.input.headers.append(e, t[e])
                });
                else {
                    n.init = xe(n.init);
                    var r = [];
                    n.init.headers instanceof Headers ? n.init.headers.forEach(function(t, e) {
                        r.push([e, t])
                    }) : Array.isArray(n.init.headers) ? n.init.headers.forEach(function(t) {
                        r.push(t)
                    }) : n.init.headers && Object.keys(n.init.headers).forEach(function(t) {
                        r.push([t, n.init.headers[t]])
                    }), n.init.headers = r.concat(gn(t))
                }
            })
        },
        traceXhr: function(n, r) {
            return Qn(t, n, e, function(t) {
                Object.keys(t).forEach(function(e) {
                    r.setRequestHeader(e, t[e])
                })
            })
        }
    }
}

function Qn(t, e, n, r) {
    if (Fd() && n.findTrackedSession()) {
        var i = Nt(t.allowedTracingUrls, function(t) {
            return Hi([t.match], e.url, !0)
        });
        if (i) {
            var o = Nd();
            e.traceSampled = Ud(o, t.traceSampleRate), (e.traceSampled || t.traceContextInjection === dn.ALL) && (e.traceId = o, e.spanId = qi(), r(Gd(e.traceId, e.spanId, e.traceSampled, i.propagatorTypes)))
        }
    }
}

function Fd() {
    return void 0 !== Yi()
}

function Gd(t, e, n, r) {
    var i = {};
    return r.forEach(function(r) {
        switch (r) {
            case "datadog":
                S(i, {
                    "x-datadog-origin": "rum",
                    "x-datadog-parent-id": e.toString(),
                    "x-datadog-sampling-priority": n ? "1" : "0",
                    "x-datadog-trace-id": t.toString()
                });
                break;
            case "tracecontext":
                S(i, {
                    traceparent: "00-0000000000000000".concat(re(t), "-").concat(re(e), "-0").concat(n ? "1" : "0")
                });
                break;
            case "b3":
                S(i, {
                    b3: "".concat(re(t), "-").concat(re(e), "-").concat(n ? "1" : "0")
                });
                break;
            case "b3multi":
                S(i, {
                    "X-B3-TraceId": re(t),
                    "X-B3-SpanId": re(e),
                    "X-B3-Sampled": n ? "1" : "0"
                })
        }
    }), i
}
di(Tt(), "DD_LOGS", fn);
var Ji = ["tracecontext", "datadog"];

function Hd(t) {
    var e, n, r;
    if (t.applicationId) {
        if (oe(t.sessionReplaySampleRate, "Session Replay") && oe(t.traceSampleRate, "Trace")) {
            if (void 0 !== t.excludedActivityUrls && !Array.isArray(t.excludedActivityUrls)) return void A.error("Excluded Activity Urls should be an array");
            var i = jd(t);
            if (i) {
                var o = ei(t);
                if (o) {
                    var a = null !== (e = t.sessionReplaySampleRate) && void 0 !== e ? e : 0;
                    return S({
                        applicationId: t.applicationId,
                        version: t.version || void 0,
                        actionNameAttribute: t.actionNameAttribute,
                        sessionReplaySampleRate: a,
                        startSessionReplayRecordingManually: void 0 !== t.startSessionReplayRecordingManually ? !!t.startSessionReplayRecordingManually : 0 === a,
                        traceSampleRate: null !== (n = t.traceSampleRate) && void 0 !== n ? n : 100,
                        rulePsr: Pe(t.traceSampleRate) ? t.traceSampleRate / 100 : void 0,
                        allowedTracingUrls: i,
                        excludedActivityUrls: null !== (r = t.excludedActivityUrls) && void 0 !== r ? r : [],
                        workerUrl: t.workerUrl,
                        compressIntakeRequests: !!t.compressIntakeRequests,
                        trackUserInteractions: !!t.trackUserInteractions,
                        trackViewsManually: !!t.trackViewsManually,
                        trackResources: !!t.trackResources,
                        trackLongTasks: !!t.trackLongTasks,
                        subdomain: t.subdomain,
                        defaultPrivacyLevel: or(Ae, t.defaultPrivacyLevel) ? t.defaultPrivacyLevel : Ae.MASK,
                        enablePrivacyForActionName: !!t.enablePrivacyForActionName,
                        customerDataTelemetrySampleRate: 1,
                        traceContextInjection: or(dn, t.traceContextInjection) ? t.traceContextInjection : dn.ALL,
                        plugins: t.plugins || []
                    }, o)
                }
            }
        }
    } else A.error("Application ID is not configured, no RUM data will be collected.")
}

function jd(t) {
    if (void 0 === t.allowedTracingUrls) return [];
    if (Array.isArray(t.allowedTracingUrls)) {
        if (0 === t.allowedTracingUrls.length || void 0 !== t.service) {
            var e = [];
            return t.allowedTracingUrls.forEach(function(t) {
                xn(t) ? e.push({
                    match: t,
                    propagatorTypes: Ji
                }) : Vd(t) ? e.push(t) : A.warn("Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter", t)
            }), e
        }
        A.error("Service needs to be configured when tracing is enabled")
    } else A.error("Allowed Tracing URLs should be an array")
}

function Kd(t) {
    var e = new Set;
    return Array.isArray(t.allowedTracingUrls) && t.allowedTracingUrls.length > 0 && t.allowedTracingUrls.forEach(function(t) {
        xn(t) ? Ji.forEach(function(t) {
            return e.add(t)
        }) : "object" === Ut(t) && Array.isArray(t.propagatorTypes) && t.propagatorTypes.forEach(function(t) {
            return e.add(t)
        })
    }), br(e)
}

function Wd(t) {
    var e, n = ri(t);
    return S({
        session_replay_sample_rate: t.sessionReplaySampleRate,
        start_session_replay_recording_manually: t.startSessionReplayRecordingManually,
        trace_sample_rate: t.traceSampleRate,
        trace_context_injection: t.traceContextInjection,
        action_name_attribute: t.actionNameAttribute,
        use_allowed_tracing_urls: Array.isArray(t.allowedTracingUrls) && t.allowedTracingUrls.length > 0,
        selected_tracing_propagators: Kd(t),
        default_privacy_level: t.defaultPrivacyLevel,
        enable_privacy_for_action_name: t.enablePrivacyForActionName,
        use_excluded_activity_urls: Array.isArray(t.excludedActivityUrls) && t.excludedActivityUrls.length > 0,
        use_worker_url: !!t.workerUrl,
        compress_intake_requests: t.compressIntakeRequests,
        track_views_manually: t.trackViewsManually,
        track_user_interactions: t.trackUserInteractions,
        track_resources: t.trackResources,
        track_long_task: t.trackLongTasks,
        plugins: null === (e = t.plugins) || void 0 === e ? void 0 : e.map(function(t) {
            var e;
            return S({
                name: t.name
            }, null === (e = t.getConfigurationTelemetry) || void 0 === e ? void 0 : e.call(t))
        })
    }, n)
}
var Yd = "https://d3uc069fcn7uxw.cloudfront.net/configuration";

function qd(t, e) {
    Jd(t, function(n) {
        e(Xd(t, n))
    })
}

function Xd(t, e) {
    return S({}, t, e)
}

function Jd(t, e) {
    var n = new XMLHttpRequest;
    L(t, n, "load", function() {
        200 === n.status ? e(JSON.parse(n.responseText)) : ta()
    }), L(t, n, "error", function() {
        ta()
    }), n.open("GET", "".concat(Yd, "/").concat(encodeURIComponent(t.remoteConfigurationId), ".json")), n.send()
}

function ta() {
    A.error("Error fetching the remote configuration.")
}

function $d(t, e, n) {
    if (t)
        for (var r = 0, i = t; r < i.length; r++) {
            var o = i[r][e];
            o && o(n)
        }
}

function Zd(t, e, n, r, i) {
    var o, a, s, u, c = t.ignoreInitIfSyntheticsWillInjectRum,
        l = t.startDeflateWorker,
        d = Cn(),
        f = n.observable.subscribe(p);

    function p() {
        if (s && u && n.isGranted()) {
            var t;
            if (f.unsubscribe(), u.trackViewsManually) {
                if (!o) return;
                d.remove(o.callback), t = o.options
            }
            var e = i(u, a, t);
            d.drain(e)
        }
    }

    function v(t) {
        var e = ft();
        if (e && (t = Qd(t)), s = t, yi(Wd(t)), u) Er("DD_RUM", t);
        else {
            var r = Hd(t);
            if (r) {
                if (!e && !r.sessionStoreStrategyType) return void A.warn("No storage available for session. We will not send any data.");
                r.compressIntakeRequests && !e && l && !(a = l(r, "Datadog RUM", I)) || (u = r, Cr().subscribe(I), n.tryToInit(r.trackingConsent), p())
            }
        }
    }
    var h = function(t) {
        d.add(function(e) {
            return e.addDurationVital(t)
        })
    };
    return {
        init: function(t, e) {
            t ? (Ga(t.enableExperimentalFeatures), s = t, (!c || !Ir()) && ($d(t.plugins, "onInit", {
                initConfiguration: t,
                publicApi: e
            }), t.remoteConfigurationId && wt(ot.REMOTE_CONFIGURATION) ? qd(t, v) : v(t))) : A.error("Missing configuration")
        },
        get initConfiguration() {
            return s
        },
        getInternalContext: I,
        stopSession: I,
        addTiming: function(t, e) {
            void 0 === e && (e = D()), d.add(function(n) {
                return n.addTiming(t, e)
            })
        },
        startView: function(t, e) {
            void 0 === e && (e = H());
            var n = function(n) {
                n.startView(t, e)
            };
            d.add(n), o || (o = {
                options: t,
                callback: n
            }, p())
        },
        setViewName: function(t) {
            d.add(function(e) {
                return e.setViewName(t)
            })
        },
        setViewContext: function(t) {
            d.add(function(e) {
                return e.setViewContext(t)
            })
        },
        setViewContextProperty: function(t, e) {
            d.add(function(n) {
                return n.setViewContextProperty(t, e)
            })
        },
        addAction: function(t, n) {
            void 0 === n && (n = e()), d.add(function(e) {
                return e.addAction(t, n)
            })
        },
        addError: function(t, n) {
            void 0 === n && (n = e()), d.add(function(e) {
                return e.addError(t, n)
            })
        },
        addFeatureFlagEvaluation: function(t, e) {
            d.add(function(n) {
                return n.addFeatureFlagEvaluation(t, e)
            })
        },
        startDurationVital: function(t, e) {
            return Ki(r, t, e)
        },
        stopDurationVital: function(t, e) {
            Wi(h, r, t, e)
        },
        addDurationVital: h
    }
}

function Qd(t) {
    var e, n;
    return S({}, t, {
        applicationId: "00000000-aaaa-0000-aaaa-000000000000",
        clientToken: "empty",
        sessionSampleRate: 100,
        defaultPrivacyLevel: null !== (e = t.defaultPrivacyLevel) && void 0 !== e ? e : null === (n = Bt()) || void 0 === n ? void 0 : n.getPrivacyLevel()
    })
}
var ea = "rum";

function tl(t, e, n) {
    void 0 === n && (n = {});
    var r = Bi(0),
        i = ve(r.getOrCreateTracker(2)),
        o = ve(r.getOrCreateTracker(1)),
        a = Za(),
        s = xd();

    function u() {
        return Rd(i, o, e)
    }
    var c = Zd(n, u, a, s, function(l, d, f) {
            l.storeContextsAcrossPages && (vr(l, i, ea, 2), vr(l, o, ea, 1)), r.setCompressionStatus(d ? 1 : 2);
            var p = t(l, e, r, u, f, d && n.createDeflateEncoder ? function(t) {
                return n.createDeflateEncoder(l, d, t)
            } : Le, a, s);
            return e.onRumStart(p.lifeCycle, l, p.session, p.viewHistory, d), c = el(c, p), p
        }),
        l = y(function(t) {
            var e = "object" == typeof t ? t : {
                name: t
            };
            e.context && r.getOrCreateTracker(3).updateCustomerData(e.context), c.startView(e), W({
                feature: "start-view"
            })
        }),
        d = ci({
            init: y(function(t) {
                c.init(t, d)
            }),
            setTrackingConsent: y(function(t) {
                a.update(t), W({
                    feature: "set-tracking-consent",
                    tracking_consent: t
                })
            }),
            setViewName: y(function(t) {
                c.setViewName(t)
            }),
            setViewContext: y(function(t) {
                c.setViewContext(t)
            }),
            setViewContextProperty: y(function(t, e) {
                c.setViewContextProperty(t, e)
            }),
            setGlobalContext: y(function(t) {
                i.setContext(t), W({
                    feature: "set-global-context"
                })
            }),
            getGlobalContext: y(function() {
                return i.getContext()
            }),
            setGlobalContextProperty: y(function(t, e) {
                i.setContextProperty(t, e), W({
                    feature: "set-global-context"
                })
            }),
            removeGlobalContextProperty: y(function(t) {
                return i.removeContextProperty(t)
            }),
            clearGlobalContext: y(function() {
                return i.clearContext()
            }),
            getInternalContext: y(function(t) {
                return c.getInternalContext(t)
            }),
            getInitConfiguration: y(function() {
                return Tr(c.initConfiguration)
            }),
            addAction: function(t, e) {
                var n = le();
                $t(function() {
                    c.addAction({
                        name: O(t),
                        context: O(e),
                        startClocks: H(),
                        type: "custom",
                        handlingStack: n
                    }), W({
                        feature: "add-action"
                    })
                })
            },
            addError: function(t, e) {
                var n = le();
                $t(function() {
                    c.addError({
                        error: t,
                        handlingStack: n,
                        context: O(e),
                        startClocks: H()
                    }), W({
                        feature: "add-error"
                    })
                })
            },
            addTiming: y(function(t, e) {
                c.addTiming(O(t), e)
            }),
            setUser: y(function(t) {
                ja(t) && o.setContext(cr(t)), W({
                    feature: "set-user"
                })
            }),
            getUser: y(function() {
                return o.getContext()
            }),
            setUserProperty: y(function(t, e) {
                var n, r = cr((n = {}, n[t] = e, n))[t];
                o.setContextProperty(t, r), W({
                    feature: "set-user"
                })
            }),
            removeUserProperty: y(function(t) {
                return o.removeContextProperty(t)
            }),
            clearUser: y(function() {
                return o.clearContext()
            }),
            startView: l,
            stopSession: y(function() {
                c.stopSession(), W({
                    feature: "stop-session"
                })
            }),
            addFeatureFlagEvaluation: y(function(t, e) {
                c.addFeatureFlagEvaluation(O(t), O(e)), W({
                    feature: "add-feature-flag-evaluation"
                })
            }),
            getSessionReplayLink: y(function() {
                return e.getSessionReplayLink()
            }),
            startSessionReplayRecording: y(function(t) {
                e.start(t), W({
                    feature: "start-session-replay-recording",
                    force: t && t.force
                })
            }),
            stopSessionReplayRecording: y(function() {
                return e.stop()
            }),
            addDurationVital: y(function(t, e) {
                W({
                    feature: "add-duration-vital"
                }), c.addDurationVital({
                    name: O(t),
                    type: "duration",
                    startClocks: os(e.startTime),
                    duration: e.duration,
                    context: O(e && e.context),
                    description: O(e && e.description)
                })
            }),
            startDurationVital: y(function(t, e) {
                return W({
                    feature: "start-duration-vital"
                }), c.startDurationVital(O(t), {
                    context: O(e && e.context),
                    description: O(e && e.description)
                })
            }),
            stopDurationVital: y(function(t, e) {
                W({
                    feature: "stop-duration-vital"
                }), c.stopDurationVital("string" == typeof t ? O(t) : t, {
                    context: O(e && e.context),
                    description: O(e && e.description)
                })
            })
        });
    return d
}

function el(t, e) {
    return S({
        init: function(t) {
            Er("DD_RUM", t)
        },
        initConfiguration: t.initConfiguration
    }, e)
}

function rl() {
    var t = $i();
    return new R(function(e) {
        if (t) {
            var n = new t(y(function() {
                return e.notify()
            }));
            return n.observe(document, {
                    attributes: !0,
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                }),
                function() {
                    return n.disconnect()
                }
        }
    })
}

function $i() {
    var t, e = window;
    if (e.Zone && (t = Dt(e, "MutationObserver"), e.MutationObserver && t === e.MutationObserver)) {
        var n = Dt(new e.MutationObserver(I), "originalInstance");
        t = n && n.constructor
    }
    return t || (t = e.MutationObserver), t
}

function nl() {
    var t = new R,
        e = J(window, "open", function() {
            return t.notify()
        }).stop;
    return {
        observable: t,
        stop: e
    }
}

function al() {
    var t = Fi(),
        e = Gi();
    if (t && e) return {
        test_id: t,
        result_id: e,
        injected: Ir()
    }
}

function il(t, e, n) {
    var r = Tr(t),
        i = n(r);
    return gn(e).forEach(function(e) {
        var n = e[0],
            i = e[1],
            o = ol(r, n),
            a = Ut(o);
        a === i ? ra(t, n, O(o)) : "object" === i && ("undefined" === a || "null" === a) && ra(t, n, {})
    }), i
}

function ol(t, e) {
    for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
        var o = i[r];
        if (!sl(n, o)) return;
        n = n[o]
    }
    return n
}

function ra(t, e, n) {
    for (var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
        var a = i[o];
        if (!Zi(r)) return;
        o !== i.length - 1 ? r = r[a] : r[a] = n
    }
}

function Zi(t) {
    return "object" === Ut(t)
}

function sl(t, e) {
    return Zi(t) && Object.prototype.hasOwnProperty.call(t, e)
}
var Qi, ne = {
        "view.name": "string",
        "view.url": "string",
        "view.referrer": "string"
    },
    ae = {
        context: "object"
    },
    Zr = {
        service: "string",
        version: "string"
    };

function ul(t, e, n, r, i, o, a, s, u, c) {
    var l, d;
    (l = {}).view = S({}, ae, ne), l.error = S({
        "error.message": "string",
        "error.stack": "string",
        "error.resource.url": "string",
        "error.fingerprint": "string"
    }, ae, ne, Zr), l.resource = S({
        "resource.url": "string"
    }, wt(ot.WRITABLE_RESOURCE_GRAPHQL) ? {
        "resource.graphql": "object"
    } : {}, ae, ne, Zr), l.action = S({
        "action.target.name": "string"
    }, ae, ne, Zr), l.long_task = S({}, ae, ne), l.vital = S({}, ae, ne), Qi = l;
    var f = ((d = {}).error = er("error", t.eventRateLimiterThreshold, c), d.action = er("action", t.eventRateLimiterThreshold, c), d.vital = er("vital", t.eventRateLimiterThreshold, c), d),
        p = al();
    e.subscribe(12, function(c) {
        var l = c.startTime,
            d = c.rawRumEvent,
            v = c.domainContext,
            h = c.savedCommonContext,
            g = c.customerContext,
            m = r.findView(l),
            y = i.findUrl(l),
            _ = n.findTrackedSession(l);
        if (_ && m && y) {
            var b = h || u(),
                w = o.findActionId(l),
                S = et({
                    _dd: {
                        format_version: 2,
                        drift: us(),
                        configuration: {
                            session_sample_rate: ar(t.sessionSampleRate, 3),
                            session_replay_sample_rate: ar(t.sessionReplaySampleRate, 3)
                        },
                        browser_sdk_version: ft() ? "5.35.1" : void 0
                    },
                    application: {
                        id: t.applicationId
                    },
                    date: D(),
                    service: m.service || t.service,
                    version: m.version || t.version,
                    source: "browser",
                    session: {
                        id: _.id,
                        type: p ? "synthetics" : s.get() ? "ci_test" : "user"
                    },
                    view: {
                        id: m.id,
                        name: m.name,
                        url: y.url,
                        referrer: y.referrer
                    },
                    action: dl(d) && w ? {
                        id: w
                    } : void 0,
                    synthetics: p,
                    ci_test: s.get(),
                    display: a.get(),
                    connectivity: pi()
                }, d);
            S.context = et(b.context, m.context, g), "has_replay" in S.session || (S.session.has_replay = b.hasReplay), "view" === S.type && (S.session.sampled_for_replay = 1 === _.sessionReplay), wt(ot.ANONYMOUS_USER_TRACKING) && !b.user.anonymous_id && (b.user.anonymous_id = _.anonymousId), Mt(b.user) || (S.usr = b.user), cl(S, t.beforeSend, v, f) && (Mt(S.context) && delete S.context, e.notify(13, S))
        }
    })
}

function cl(t, e, n, r) {
    var i;
    if (e) {
        var o = il(t, Qi[t.type], function(t) {
            return e(t, n)
        });
        if (!1 === o && "view" !== t.type) return !1;
        !1 === o && A.warn("Can't dismiss view events using beforeSend!")
    }
    return !(null === (i = r[t.type]) || void 0 === i ? void 0 : i.isLimitReached())
}

function dl(t) {
    return -1 !== ["error", "resource", "long_task"].indexOf(t.type)
}

function ll(t, e, n, r, i) {
    return {
        get: function(o) {
            var a = n.findView(o),
                s = i.findUrl(o),
                u = e.findTrackedSession(o);
            if (u && a && s) {
                var c = r.findActionId(o);
                return {
                    application_id: t,
                    session_id: u.id,
                    user_action: c ? {
                        id: c
                    } : void 0,
                    view: {
                        id: a.id,
                        name: a.name,
                        referrer: s.referrer,
                        url: s.url
                    }
                }
            }
        }
    }
}
var fl = Di,
    vl = Qt;

function pl(t) {
    var e = _e({
        expireDelay: vl
    });
    return t.subscribe(1, function(t) {
        e.add(function(t) {
            return {
                service: t.service,
                version: t.version,
                context: t.context,
                id: t.id,
                name: t.name,
                startClocks: t.startClocks
            }
        }(t), t.startClocks.relative)
    }), t.subscribe(6, function(t) {
        var n = t.endClocks;
        e.closeActive(n.relative)
    }), t.subscribe(3, function(t) {
        var n = e.find(t.startClocks.relative);
        n && t.name && (n.name = t.name), n && t.context && (n.context = t.context)
    }), t.subscribe(10, function() {
        e.reset()
    }), {
        findView: function(t) {
            return e.find(t)
        },
        stop: function() {
            e.stop()
        }
    }
}
var to = "initial_document",
    hl = [
        ["document", function(t) {
            return to === t
        }],
        ["xhr", function(t) {
            return "xmlhttprequest" === t
        }],
        ["fetch", function(t) {
            return "fetch" === t
        }],
        ["beacon", function(t) {
            return "beacon" === t
        }],
        ["css", function(t, e) {
            return /\.css$/i.test(e)
        }],
        ["js", function(t, e) {
            return /\.js$/i.test(e)
        }],
        ["image", function(t, e) {
            return q(["image", "img", "icon"], t) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
        }],
        ["font", function(t, e) {
            return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)
        }],
        ["media", function(t, e) {
            return q(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e)
        }]
    ];

function ml(t) {
    var e = t.name;
    if (!tu(e)) return Vt('Failed to construct URL for "'.concat(t.name, '"')), "other";
    for (var n = eu(e), r = 0, i = hl; r < i.length; r++) {
        var o = i[r],
            a = o[0];
        if ((0, o[1])(t.initiatorType, n)) return a
    }
    return "other"
}

function na() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = 1; n < t.length; n += 1)
        if (t[n - 1] > t[n]) return !1;
    return !0
}

function gl(t) {
    return "xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType
}

function _l(t) {
    var e = t.duration,
        n = t.startTime,
        r = t.responseEnd;
    return T(0 === e && n < r ? z(n, r) : e)
}

function bl(t) {
    if (ro(t)) {
        var e = t.startTime,
            n = t.fetchStart,
            r = t.workerStart,
            i = t.redirectStart,
            o = t.redirectEnd,
            a = t.domainLookupStart,
            s = t.domainLookupEnd,
            u = t.connectStart,
            c = t.secureConnectionStart,
            l = t.connectEnd,
            d = t.requestStart,
            f = t.responseStart,
            p = {
                download: jt(e, f, t.responseEnd),
                first_byte: jt(e, d, f)
            };
        return 0 < r && r < n && (p.worker = jt(e, r, n)), n < l && (p.connect = jt(e, u, l), u <= c && c <= l && (p.ssl = jt(e, c, l))), n < s && (p.dns = jt(e, a, s)), e < o && (p.redirect = jt(e, i, o)), p
    }
}

function eo(t) {
    return t.duration >= 0
}

function ro(t) {
    var e = na(t.startTime, t.fetchStart, t.domainLookupStart, t.domainLookupEnd, t.connectStart, t.connectEnd, t.requestStart, t.responseStart, t.responseEnd),
        n = !yl(t) || na(t.startTime, t.redirectStart, t.redirectEnd, t.fetchStart);
    return e && n
}

function yl(t) {
    return t.redirectEnd > t.startTime
}

function jt(t, e, n) {
    if (t <= e && e <= n) return {
        duration: T(z(e, n)),
        start: T(z(t, e))
    }
}

function no(t) {
    return "" === t.nextHopProtocol ? void 0 : t.nextHopProtocol
}

function ao(t) {
    return "" === t.deliveryType ? "other" : t.deliveryType
}

function Sl(t) {
    if (t.startTime < t.responseStart) {
        var e = t.encodedBodySize,
            n = t.decodedBodySize;
        return {
            size: n,
            encoded_body_size: e,
            decoded_body_size: n,
            transfer_size: t.transferSize
        }
    }
    return {
        size: void 0,
        encoded_body_size: void 0,
        decoded_body_size: void 0,
        transfer_size: void 0
    }
}

function On(t) {
    return t && !ti(t)
}
var El = /data:(.+)?(;base64)?,/g,
    aa = 24e3;

function io(t) {
    return !(t.length <= aa) && ("data:" === t.substring(0, 5) && (t = t.substring(0, aa), !0))
}

function oo(t) {
    return "".concat(t.match(El)[0], "[...]")
}
var k, Ee, ia = 1;

function wl(t, e, n) {
    var r = zd(e, n);
    Tl(t, e, r), Cl(t, r)
}

function Tl(t, e, n) {
    var r = Pi(e).subscribe(function(e) {
        var r = e;
        if (On(r.url)) switch (r.state) {
            case "start":
                n.traceXhr(r, r.xhr), r.requestIndex = so(), t.notify(7, {
                    requestIndex: r.requestIndex,
                    url: r.url
                });
                break;
            case "complete":
                n.clearTracingIfNeeded(r), t.notify(8, {
                    duration: r.duration,
                    method: r.method,
                    requestIndex: r.requestIndex,
                    spanId: r.spanId,
                    startClocks: r.startClocks,
                    status: r.status,
                    traceId: r.traceId,
                    traceSampled: r.traceSampled,
                    type: "xhr",
                    url: r.url,
                    xhr: r.xhr,
                    isAborted: r.isAborted,
                    handlingStack: r.handlingStack
                })
        }
    });
    return {
        stop: function() {
            return r.unsubscribe()
        }
    }
}

function Cl(t, e) {
    var n = Cr().subscribe(function(n) {
        var r = n;
        if (On(r.url)) switch (r.state) {
            case "start":
                e.traceFetch(r), r.requestIndex = so(), t.notify(7, {
                    requestIndex: r.requestIndex,
                    url: r.url
                });
                break;
            case "resolve":
                Il(r, function(n) {
                    e.clearTracingIfNeeded(r), t.notify(8, {
                        duration: n,
                        method: r.method,
                        requestIndex: r.requestIndex,
                        responseType: r.responseType,
                        spanId: r.spanId,
                        startClocks: r.startClocks,
                        status: r.status,
                        traceId: r.traceId,
                        traceSampled: r.traceSampled,
                        type: "fetch",
                        url: r.url,
                        response: r.response,
                        init: r.init,
                        input: r.input,
                        isAborted: r.isAborted,
                        handlingStack: r.handlingStack
                    })
                })
        }
    });
    return {
        stop: function() {
            return n.unsubscribe()
        }
    }
}

function so() {
    var t = ia;
    return ia += 1, t
}

function Il(t, e) {
    var n = t.response && wi(t.response);
    n && n.body ? zi(n.body, function() {
        e(z(t.startClocks.timeStamp, D()))
    }, {
        bytesLimit: Number.POSITIVE_INFINITY,
        collectStreamBody: !1
    }) : e(z(t.startClocks.timeStamp, D()))
}

function uo(t) {
    return Pe(t) && t < 0 ? void 0 : t
}

function co(t) {
    var e = t.lifeCycle,
        n = t.isChildEvent,
        r = t.onChange,
        i = void 0 === r ? I : r,
        o = {
            errorCount: 0,
            longTaskCount: 0,
            resourceCount: 0,
            actionCount: 0,
            frustrationCount: 0
        },
        a = e.subscribe(13, function(t) {
            var e;
            if ("view" !== t.type && "vital" !== t.type && n(t)) switch (t.type) {
                case "error":
                    o.errorCount += 1, i();
                    break;
                case "action":
                    o.actionCount += 1, t.action.frustration && (o.frustrationCount += t.action.frustration.type.length), i();
                    break;
                case "long_task":
                    o.longTaskCount += 1, i();
                    break;
                case "resource":
                    null !== (e = t._dd) && void 0 !== e && e.discarded || (o.resourceCount += 1, i())
            }
        });
    return {
        stop: function() {
            a.unsubscribe()
        },
        eventCounts: o
    }
}

function Al(t, e) {
    var n = at(),
        r = !1,
        i = $(t, window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], function(e) {
            if (e.cancelable) {
                var n = {
                    entryType: "first-input",
                    processingStart: it(),
                    processingEnd: it(),
                    startTime: e.timeStamp,
                    duration: 0,
                    name: "",
                    cancelable: !1,
                    target: null,
                    toJSON: function() {
                        return {}
                    }
                };
                "pointerdown" === e.type ? function(t, e) {
                    $(t, window, ["pointerup", "pointercancel"], function(t) {
                        "pointerup" === t.type && o(e)
                    }, {
                        once: !0
                    })
                }(t, n) : o(n)
            }
        }, {
            passive: !0,
            capture: !0
        }).stop;
    return {
        stop: i
    };

    function o(t) {
        if (!r) {
            r = !0, i();
            var o = t.processingStart - t.startTime;
            o >= 0 && o < at() - n && e(t)
        }
    }
}

function gt(t, e) {
    return new R(function(n) {
        if (window.PerformanceObserver) {
            var r, i, o = function(t) {
                    var e = kl(t);
                    e.length > 0 && n.notify(e)
                },
                a = !0,
                s = new PerformanceObserver(y(function(t) {
                    a ? r = B(function() {
                        return o(t.getEntries())
                    }) : o(t.getEntries())
                }));
            try {
                s.observe(e)
            } catch {
                if (q([k.RESOURCE, k.NAVIGATION, k.LONG_TASK, k.PAINT], e.type)) {
                    e.buffered && (r = B(function() {
                        return o(performance.getEntriesByType(e.type))
                    }));
                    try {
                        s.observe({
                            entryTypes: [e.type]
                        })
                    } catch {
                        return
                    }
                }
            }
            return a = !1, Rl(t), !Rr(k.FIRST_INPUT) && e.type === k.FIRST_INPUT && (i = Al(t, function(t) {
                    o([t])
                }).stop),
                function() {
                    s.disconnect(), i && i(), tt(r)
                }
        }
    })
}

function Rl(t) {
    return !Ee && xl() && "addEventListener" in performance && (Ee = L(t, performance, "resourcetimingbufferfull", function() {
            performance.clearResourceTimings()
        })),
        function() {
            Ee ? .stop()
        }
}

function xl() {
    return void 0 !== window.performance && "getEntries" in performance
}

function Rr(t) {
    return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)
}

function kl(t) {
    return t.filter(function(t) {
        return !Ol(t)
    })
}

function Ol(t) {
    return !(t.entryType !== k.RESOURCE || On(t.name) && eo(t))
}! function(t) {
    t.EVENT = "event", t.FIRST_INPUT = "first-input", t.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint", t.LAYOUT_SHIFT = "layout-shift", t.LONG_TASK = "longtask", t.LONG_ANIMATION_FRAME = "long-animation-frame", t.NAVIGATION = "navigation", t.PAINT = "paint", t.RESOURCE = "resource"
}(k || (k = {}));
var lo = 100,
    Ll = 100;

function Ln(t, e, n, r, i, o) {
    return Nl(Ml(t, e, n, r), i, o)
}

function Nl(t, e, n) {
    var r, i = !1,
        o = B(y(function() {
            return c({
                hadActivity: !1
            })
        }), lo),
        a = void 0 !== n ? B(y(function() {
            return c({
                hadActivity: !0,
                end: D()
            })
        }), n) : void 0,
        s = t.subscribe(function(t) {
            var e = t.isBusy;
            tt(o), tt(r);
            var n = D();
            e || (r = B(y(function() {
                return c({
                    hadActivity: !0,
                    end: n
                })
            }), Ll))
        }),
        u = function() {
            i = !0, tt(o), tt(r), tt(a), s.unsubscribe()
        };

    function c(t) {
        i || (u(), e(t))
    }
    return {
        stop: u
    }
}

function Ml(t, e, n, r) {
    return new R(function(i) {
        var o, a = [],
            s = 0;
        return a.push(e.subscribe(u), n.subscribe(u), gt(r, {
                type: k.RESOURCE
            }).subscribe(function(t) {
                t.some(function(t) {
                    return !Qr(r, t.name)
                }) && u()
            }), t.subscribe(7, function(t) {
                Qr(r, t.url) || (void 0 === o && (o = t.requestIndex), s += 1, u())
            }), t.subscribe(8, function(t) {
                Qr(r, t.url) || void 0 === o || t.requestIndex < o || (s -= 1, u())
            })),
            function() {
                a.forEach(function(t) {
                    return t.unsubscribe()
                })
            };

        function u() {
            i.notify({
                isBusy: s > 0
            })
        }
    })
}

function Qr(t, e) {
    return Hi(t.excludedActivityUrls, e)
}

function Pt(t) {
    return window.CSS && window.CSS.escape ? window.CSS.escape(t) : t.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
        return e ? "\0" === t ? "�" : "".concat(t.slice(0, -1), "\\").concat(t.charCodeAt(t.length - 1).toString(16), " ") : "\\".concat(t)
    })
}

function se(t, e) {
    return t.matches ? t.matches(e) : !!t.msMatchesSelector && t.msMatchesSelector(e)
}

function Fe(t) {
    if (t.parentElement) return t.parentElement;
    for (; t.parentNode;) {
        if (t.parentNode.nodeType === Node.ELEMENT_NODE) return t.parentNode;
        t = t.parentNode
    }
    return null
}

function Dl(t) {
    if (t.classList) return t.classList;
    var e = (t.getAttribute("class") || "").trim();
    return e ? e.split(/\s+/) : []
}
var oa = 1,
    Pl = function() {
        function t(t) {
            var e = this;
            this.map = new WeakMap, t && t.forEach(function(t) {
                return e.map.set(t, oa)
            })
        }
        return t.prototype.add = function(t) {
            return this.map.set(t, oa), this
        }, t.prototype.delete = function(t) {
            return this.map.delete(t)
        }, t.prototype.has = function(t) {
            return this.map.has(t)
        }, t
    }();

function fo(t) {
    return t.nodeType === Node.TEXT_NODE
}

function Ul(t) {
    return t.nodeType === Node.COMMENT_NODE
}

function be(t) {
    return t.nodeType === Node.ELEMENT_NODE
}

function xr(t) {
    return be(t) && !!t.shadowRoot
}

function Nn(t) {
    var e = t;
    return !!e.host && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && be(e.host)
}

function Vl(t) {
    return t.childNodes.length > 0 || xr(t)
}

function vo(t, e) {
    for (var n = t.firstChild; n;) e(n), n = n.nextSibling;
    xr(t) && e(t.shadowRoot)
}

function kr(t) {
    return Nn(t) ? t.host : t.parentNode
}
var E = {
        IGNORE: "ignore",
        HIDDEN: "hidden",
        ALLOW: Ae.ALLOW,
        MASK: Ae.MASK,
        MASK_USER_INPUT: Ae.MASK_USER_INPUT
    },
    Mn = "data-dd-privacy",
    Bl = "hidden",
    zl = "dd-privacy-",
    Ot = "***",
    sa = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    Fl = {
        INPUT: !0,
        OUTPUT: !0,
        TEXTAREA: !0,
        SELECT: !0,
        OPTION: !0,
        DATALIST: !0,
        OPTGROUP: !0
    },
    Gl = "x";

function bt(t, e, n) {
    if (n && n.has(t)) return n.get(t);
    var r = kr(t),
        i = r ? bt(r, e, n) : e,
        o = po(ho(t), i);
    return n && n.set(t, o), o
}

function po(t, e) {
    switch (e) {
        case E.HIDDEN:
        case E.IGNORE:
            return e
    }
    switch (t) {
        case E.ALLOW:
        case E.MASK:
        case E.MASK_USER_INPUT:
        case E.HIDDEN:
        case E.IGNORE:
            return t;
        default:
            return e
    }
}

function ho(t) {
    if (be(t)) {
        if ("BASE" === t.tagName) return E.ALLOW;
        if ("INPUT" === t.tagName) {
            var e = t;
            if ("password" === e.type || "email" === e.type || "tel" === e.type || "hidden" === e.type) return E.MASK;
            var n = e.getAttribute("autocomplete");
            if (n && (n.startsWith("cc-") || n.endsWith("-password"))) return E.MASK
        }
        if (se(t, ue(E.HIDDEN))) return E.HIDDEN;
        if (se(t, ue(E.MASK))) return E.MASK;
        if (se(t, ue(E.MASK_USER_INPUT))) return E.MASK_USER_INPUT;
        if (se(t, ue(E.ALLOW))) return E.ALLOW;
        if (jl(t)) return E.IGNORE
    }
}

function Or(t, e) {
    switch (e) {
        case E.MASK:
        case E.HIDDEN:
        case E.IGNORE:
            return !0;
        case E.MASK_USER_INPUT:
            return fo(t) ? ua(t.parentNode) : ua(t);
        default:
            return !1
    }
}

function ua(t) {
    if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
    var e = t;
    if ("INPUT" === e.tagName) switch (e.type) {
        case "button":
        case "color":
        case "reset":
        case "submit":
            return !1
    }
    return !!Fl[e.tagName]
}
var Hl = function(t) {
    return t.replace(/\S/g, Gl)
};

function mo(t, e, n) {
    var r, i = null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName,
        o = t.textContent || "";
    if (!e || o.trim()) {
        var a = n;
        if ("SCRIPT" === i) o = Ot;
        else if (a === E.HIDDEN) o = Ot;
        else if (Or(t, a))
            if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
                if (!o.trim()) return
            } else o = "OPTION" === i ? Ot : Hl(o);
        return o
    }
}

function jl(t) {
    if ("SCRIPT" === t.nodeName) return !0;
    if ("LINK" === t.nodeName) {
        var e = i("rel");
        return /preload|prefetch/i.test(e) && "script" === i("as") || "shortcut icon" === e || "icon" === e
    }
    if ("META" === t.nodeName) {
        var n = i("name"),
            r = (e = i("rel"), i("property"));
        return /^msapplication-tile(image|color)$/.test(n) || "application-name" === n || "icon" === e || "apple-touch-icon" === e || "shortcut icon" === e || "keywords" === n || "description" === n || /^(og|twitter|fb):/.test(r) || /^(og|twitter):/.test(n) || "pinterest" === n || "robots" === n || "googlebot" === n || "bingbot" === n || t.hasAttribute("http-equiv") || "author" === n || "generator" === n || "framework" === n || "publisher" === n || "progid" === n || /^article:/.test(r) || /^product:/.test(r) || "google-site-verification" === n || "yandex-verification" === n || "csrf-token" === n || "p:domain_verify" === n || "verify-v1" === n || "verification" === n || "shopify-checkout-api-token" === n
    }

    function i(e) {
        return (t.getAttribute(e) || "").toLowerCase()
    }
    return !1
}

function ue(t) {
    return "[".concat(Mn, '="').concat(t, '"], .').concat(zl).concat(t)
}
var Dn = "data-dd-action-name",
    Kl = "Masked Element";

function Wl(t, e, n) {
    var r = e.enablePrivacyForActionName,
        i = e.actionNameAttribute,
        o = ca(t, Dn) || i && ca(t, i);
    return o ? {
        name: o,
        nameSource: "custom_attribute"
    } : n === E.MASK ? {
        name: Kl,
        nameSource: "mask_placeholder"
    } : da(t, i, Yl, r) || da(t, i, ql, r) || {
        name: "",
        nameSource: "blank"
    }
}

function ca(t, e) {
    var n;
    if (Ql()) n = t.closest("[".concat(e, "]"));
    else
        for (var r = t; r;) {
            if (r.hasAttribute(e)) {
                n = r;
                break
            }
            r = Fe(r)
        }
    if (n) return _o(go(n.getAttribute(e).trim()))
}
var tn, en, Yl = [function(t, e, n) {
        if (Zl()) {
            if ("labels" in t && t.labels && t.labels.length > 0) return Ce(t.labels[0], e)
        } else if (t.id) {
            var r = t.ownerDocument && Nt(t.ownerDocument.querySelectorAll("label"), function(e) {
                return e.htmlFor === t.id
            });
            return r && Ce(r, e, n)
        }
    }, function(t) {
        if ("INPUT" === t.nodeName) {
            var e = t,
                n = e.getAttribute("type");
            if ("button" === n || "submit" === n || "reset" === n) return {
                name: e.value,
                nameSource: "text_content"
            }
        }
    }, function(t, e, n) {
        if ("BUTTON" === t.nodeName || "LABEL" === t.nodeName || "button" === t.getAttribute("role")) return Ce(t, e, n)
    }, function(t) {
        return we(t, "aria-label")
    }, function(t, e, n) {
        var r = t.getAttribute("aria-labelledby");
        if (r) return {
            name: r.split(/\s+/).map(function(e) {
                return Jl(t, e)
            }).filter(function(t) {
                return !!t
            }).map(function(t) {
                return bo(t, e, n)
            }).join(" "),
            nameSource: "text_content"
        }
    }, function(t) {
        return we(t, "alt")
    }, function(t) {
        return we(t, "name")
    }, function(t) {
        return we(t, "title")
    }, function(t) {
        return we(t, "placeholder")
    }, function(t, e) {
        if ("options" in t && t.options.length > 0) return Ce(t.options[0], e)
    }],
    ql = [function(t, e, n) {
        return Ce(t, e, n)
    }],
    Xl = 10;

function da(t, e, n, r) {
    for (var i = t, o = 0; o <= Xl && i && "BODY" !== i.nodeName && "HTML" !== i.nodeName && "HEAD" !== i.nodeName;) {
        for (var a = 0, s = n; a < s.length; a++) {
            var u = (0, s[a])(i, e, r);
            if (u) {
                var c = u.name,
                    l = u.nameSource,
                    d = c && c.trim();
                if (d) return {
                    name: _o(go(d)),
                    nameSource: l
                }
            }
        }
        if ("FORM" === i.nodeName) break;
        i = Fe(i), o += 1
    }
}

function go(t) {
    return t.replace(/\s+/g, " ")
}

function _o(t) {
    return t.length > 100 ? "".concat(Fa(t, 100), " [...]") : t
}

function Jl(t, e) {
    return t.ownerDocument ? t.ownerDocument.getElementById(e) : null
}

function we(t, e) {
    return {
        name: t.getAttribute(e) || "",
        nameSource: "standard_attribute"
    }
}

function Ce(t, e, n) {
    return {
        name: bo(t, e, n) || "",
        nameSource: "text_content"
    }
}

function bo(t, e, n) {
    if (!t.isContentEditable) {
        if ("innerText" in t) {
            var r = t.innerText,
                i = function(e) {
                    for (var n = t.querySelectorAll(e), i = 0; i < n.length; i += 1) {
                        var o = n[i];
                        if ("innerText" in o) {
                            var a = o.innerText;
                            a && a.trim().length > 0 && (r = r.replace(a, ""))
                        }
                    }
                };
            return $l() || i("script, style"), i("[".concat(Dn, "]")), e && i("[".concat(e, "]")), n && i("".concat(ue(E.HIDDEN), ", ").concat(ue(E.MASK))), r
        }
        return t.textContent
    }
}

function $l() {
    return !Es()
}

function Zl() {
    return void 0 === tn && (tn = "labels" in HTMLInputElement.prototype), tn
}

function Ql() {
    return void 0 === en && (en = "closest" in HTMLElement.prototype), en
}
var $e, yo = [Dn, "data-testid", "data-test", "data-qa", "data-cy", "data-test-id", "data-qa-id", "data-testing", "data-component", "data-element", "data-source-file"],
    tf = [Eo, rf],
    ef = [Eo, nf, af];

function Ge(t, e) {
    if (df(t)) {
        for (var n, r = t; r && "HTML" !== r.nodeName;) {
            var i = la(r, tf, sf, e, n);
            if (i) return i;
            n = la(r, ef, uf, e, n) || Me( of (r), n), r = Fe(r)
        }
        return n
    }
}

function So(t) {
    return /[0-9]/.test(t)
}

function rf(t) {
    if (t.id && !So(t.id)) return "#".concat(Pt(t.id))
}

function nf(t) {
    if ("BODY" !== t.tagName)
        for (var e = Dl(t), n = 0; n < e.length; n += 1) {
            var r = e[n];
            if (!So(r)) return "".concat(Pt(t.tagName), ".").concat(Pt(r))
        }
}

function af(t) {
    return Pt(t.tagName)
}

function Eo(t, e) {
    if (e && (i = o(e))) return i;
    for (var n = 0, r = yo; n < r.length; n++) {
        var i;
        if (i = o(r[n])) return i
    }

    function o(e) {
        if (t.hasAttribute(e)) return "".concat(Pt(t.tagName), "[").concat(e, '="').concat(Pt(t.getAttribute(e)), '"]')
    }
}

function of (t) {
    for (var e = Fe(t).firstElementChild, n = 1; e && e !== t;) e.tagName === t.tagName && (n += 1), e = e.nextElementSibling;
    return "".concat(Pt(t.tagName), ":nth-of-type(").concat(n, ")")
}

function la(t, e, n, r, i) {
    for (var o = 0, a = e; o < a.length; o++) {
        var s = (0, a[o])(t, r);
        if (s && n(t, s, i)) return Me(s, i)
    }
}

function sf(t, e, n) {
    return 1 === t.ownerDocument.querySelectorAll(Me(e, n)).length
}

function uf(t, e, n) {
    var r;
    if (void 0 === n) r = function(t) {
        return se(t, e)
    };
    else {
        var i = cf() ? Me("".concat(e, ":scope"), n) : Me(e, n);
        r = function(t) {
            return null !== t.querySelector(i)
        }
    }
    for (var o = Fe(t).firstElementChild; o;) {
        if (o !== t && r(o)) return !1;
        o = o.nextElementSibling
    }
    return !0
}

function Me(t, e) {
    return e ? "".concat(t, ">").concat(e) : t
}

function cf() {
    if (void 0 === $e) try {
        document.querySelector(":scope"), $e = !0
    } catch {
        $e = !1
    }
    return $e
}

function df(t) {
    return "isConnected" in t ? t.isConnected : t.ownerDocument.documentElement.contains(t)
}
var wo = j,
    lf = 100;

function ff(t, e) {
    var n, r = [],
        i = 0;

    function o(t) {
        t.stopObservable.subscribe(a), r.push(t), tt(n), n = B(s, wo)
    }

    function a() {
        1 === i && r.every(function(t) {
            return t.isStopped()
        }) && (i = 2, e(r))
    }

    function s() {
        tt(n), 0 === i && (i = 1, a())
    }
    return o(t), {
        tryAppend: function(t) {
            return 0 === i && (r.length > 0 && !vf(r[r.length - 1].event, t.event) ? (s(), !1) : (o(t), !0))
        },
        stop: function() {
            s()
        }
    }
}

function vf(t, e) {
    return t.target === e.target && pf(t, e) <= lf && t.timeStamp - e.timeStamp <= wo
}

function pf(t, e) {
    return Math.sqrt(Math.pow(t.clientX - e.clientX, 2) + Math.pow(t.clientY - e.clientY, 2))
}

function hf(t, e) {
    var n, r, i = e.onPointerDown,
        o = e.onPointerUp,
        a = {
            selection: !1,
            input: !1,
            scroll: !1
        },
        s = [L(t, window, "pointerdown", function(t) {
            va(t) && (n = fa(), a = {
                selection: !1,
                input: !1,
                scroll: !1
            }, r = i(t))
        }, {
            capture: !0
        }), L(t, window, "selectionchange", function() {
            (!n || !fa()) && (a.selection = !0)
        }, {
            capture: !0
        }), L(t, window, "scroll", function() {
            a.scroll = !0
        }, {
            capture: !0,
            passive: !0
        }), L(t, window, "pointerup", function(t) {
            if (va(t) && r) {
                var e = a;
                o(r, t, function() {
                    return e
                }), r = void 0
            }
        }, {
            capture: !0
        }), L(t, window, "input", function() {
            a.input = !0
        }, {
            capture: !0
        })];
    return {
        stop: function() {
            s.forEach(function(t) {
                return t.stop()
            })
        }
    }
}

function fa() {
    var t = window.getSelection();
    return !t || t.isCollapsed
}

function va(t) {
    return t.target instanceof Element && !1 !== t.isPrimary
}
var pa = 3;

function mf(t, e) {
    if (gf(t)) return e.addFrustration("rage_click"), t.some(ha) && e.addFrustration("dead_click"), e.hasError && e.addFrustration("error_click"), {
        isRage: !0
    };
    var n = t.some(function(t) {
        return t.getUserActivity().selection
    });
    return t.forEach(function(t) {
        t.hasError && t.addFrustration("error_click"), ha(t) && !n && t.addFrustration("dead_click")
    }), {
        isRage: !1
    }
}

function gf(t) {
    if (t.some(function(t) {
            return t.getUserActivity().selection || t.getUserActivity().scroll
        })) return !1;
    for (var e = 0; e < t.length - (pa - 1); e += 1)
        if (t[e + pa - 1].event.timeStamp - t[e].event.timeStamp <= j) return !0;
    return !1
}
var _f = 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *';

function ha(t) {
    return !(t.hasPageActivity || t.getUserActivity().input || t.getUserActivity().scroll) && !se(t.event.target, _f)
}
var To = 10 * j,
    Re = new Map;

function bf(t) {
    var e = Re.get(t);
    return Re.delete(t), e
}

function Co(t, e) {
    Re.set(t, e), Re.forEach(function(t, e) {
        z(e, it()) > To && Re.delete(e)
    })
}
var yf = 5 * Z;

function Sf(t, e, n, r) {
    var i, o = _e({
            expireDelay: yf
        }),
        a = new R;
    t.subscribe(10, function() {
        o.reset()
    }), t.subscribe(5, c);
    var s = hf(r, {
        onPointerDown: function(i) {
            return Ef(r, t, e, i, n)
        },
        onPointerUp: function(i, s, c) {
            var l = i.clickActionBase,
                d = i.hadActivityOnPointerDown;
            wf(r, t, e, n, o, a, u, l, s, c, d)
        }
    }).stop;
    return {
        stop: function() {
            c(), a.notify(), s()
        },
        actionContexts: {
            findActionId: function(t) {
                return o.findAll(t)
            }
        }
    };

    function u(t) {
        if (!i || !i.tryAppend(t)) {
            var e = t.clone();
            i = ff(t, function(t) {
                Cf(t, e)
            })
        }
    }

    function c() {
        i && i.stop()
    }
}

function Ef(t, e, n, r, i) {
    var o = t.enablePrivacyForActionName ? bt(r.target, t.defaultPrivacyLevel) : E.ALLOW;
    if (o !== E.HIDDEN) {
        var a = Tf(r, o, t),
            s = !1;
        return Ln(e, n, i, t, function(t) {
            s = t.hadActivity
        }, lo), {
            clickActionBase: a,
            hadActivityOnPointerDown: function() {
                return s
            }
        }
    }
}

function wf(t, e, n, r, i, o, a, s, u, c, l) {
    var d, f = Io(e, i, c, s, u);
    a(f);
    var p = null === (d = s ? .target) || void 0 === d ? void 0 : d.selector;
    p && Co(u.timeStamp, p);
    var v = Ln(e, n, r, t, function(t) {
            t.hadActivity && t.end < f.startClocks.timeStamp ? f.discard() : t.hadActivity ? f.stop(t.end) : l() ? f.stop(f.startClocks.timeStamp) : f.stop()
        }, To).stop,
        h = e.subscribe(5, function(t) {
            var e = t.endClocks;
            f.stop(e.timeStamp)
        }),
        g = o.subscribe(function() {
            f.stop()
        });
    f.stopObservable.subscribe(function() {
        h.unsubscribe(), v(), g.unsubscribe()
    })
}

function Tf(t, e, n) {
    var r = t.target.getBoundingClientRect(),
        i = Ge(t.target, n.actionNameAttribute);
    i && Co(t.timeStamp, i);
    var o = Wl(t.target, n, e);
    return {
        type: "click",
        target: {
            width: Math.round(r.width),
            height: Math.round(r.height),
            selector: i
        },
        position: {
            x: Math.round(t.clientX - r.left),
            y: Math.round(t.clientY - r.top)
        },
        name: o.name,
        nameSource: o.nameSource
    }
}

function Io(t, e, n, r, i) {
    var o, a = K(),
        s = H(),
        u = e.add(a, s.relative),
        c = co({
            lifeCycle: t,
            isChildEvent: function(t) {
                return void 0 !== t.action && (Array.isArray(t.action.id) ? q(t.action.id, a) : t.action.id === a)
            }
        }),
        l = 0,
        d = [],
        f = new R;

    function p(t) {
        0 === l && (l = 1, (o = t) ? u.close(_r(o)) : u.remove(), c.stop(), f.notify())
    }
    return {
        event: i,
        stop: p,
        stopObservable: f,
        get hasError() {
            return c.eventCounts.errorCount > 0
        },
        get hasPageActivity() {
            return void 0 !== o
        },
        getUserActivity: n,
        addFrustration: function(t) {
            d.push(t)
        },
        startClocks: s,
        isStopped: function() {
            return 1 === l || 2 === l
        },
        clone: function() {
            return Io(t, e, n, r, i)
        },
        validate: function(e) {
            if (p(), 1 === l) {
                var n = c.eventCounts,
                    u = n.resourceCount,
                    f = n.errorCount,
                    v = n.longTaskCount,
                    h = S({
                        type: "click",
                        duration: o && z(s.timeStamp, o),
                        startClocks: s,
                        id: a,
                        frustrationTypes: d,
                        counts: {
                            resourceCount: u,
                            errorCount: f,
                            longTaskCount: v
                        },
                        events: e ? ? [i],
                        event: i
                    }, r);
                t.notify(0, h), l = 2
            }
        },
        discard: function() {
            p(), l = 2
        }
    }
}

function Cf(t, e) {
    mf(t, e).isRage ? (t.forEach(function(t) {
        return t.discard()
    }), e.stop(D()), e.validate(t.map(function(t) {
        return t.event
    }))) : (e.discard(), t.forEach(function(t) {
        return t.validate()
    }))
}

function If(t, e, n, r, i) {
    var o;
    t.subscribe(0, function(e) {
        return t.notify(12, ma(e, i))
    });
    var a = {
            findActionId: I
        },
        s = I;
    return r.trackUserInteractions && (a = (o = Sf(t, e, n, r)).actionContexts, s = o.stop), {
        addAction: function(e, n) {
            t.notify(12, S({
                savedCommonContext: n
            }, ma(e, i)))
        },
        actionContexts: a,
        stop: s
    }
}

function ma(t, e) {
    var n = Ze(t) ? {
            action: {
                id: t.id,
                loading_time: uo(T(t.duration)),
                frustration: {
                    type: t.frustrationTypes
                },
                error: {
                    count: t.counts.errorCount
                },
                long_task: {
                    count: t.counts.longTaskCount
                },
                resource: {
                    count: t.counts.resourceCount
                }
            },
            _dd: {
                action: {
                    target: t.target,
                    position: t.position,
                    name_source: wt(ot.ACTION_NAME_MASKING) ? t.nameSource : void 0
                }
            }
        } : void 0,
        r = Ze(t) ? void 0 : t.context,
        i = et({
            action: {
                id: K(),
                target: {
                    name: t.name
                },
                type: t.type
            },
            date: t.startClocks.timeStamp,
            type: "action",
            view: {
                in_foreground: e.wasInPageStateAt("active", t.startClocks.relative)
            }
        }, n),
        o = Ze(t) ? {
            events: t.events
        } : {};
    return !Ze(t) && t.handlingStack && (o.handlingStack = t.handlingStack), {
        customerContext: r,
        rawRumEvent: i,
        startTime: t.startClocks.relative,
        domainContext: o
    }
}

function Ze(t) {
    return "custom" !== t.type
}

function Af(t) {
    var e = Vi([P.error]).subscribe(function(e) {
        return t.notify(e.error)
    });
    return {
        stop: function() {
            e.unsubscribe()
        }
    }
}

function Rf(t, e) {
    var n = li(t, [fe.cspViolation, fe.intervention]).subscribe(function(t) {
        return e.notify(t)
    });
    return {
        stop: function() {
            n.unsubscribe()
        }
    }
}

function xf(t, e, n, r) {
    var i = new R;
    return Af(i), ui(i), Rf(e, i), i.subscribe(function(e) {
        return t.notify(14, {
            error: e
        })
    }), kf(t, n, r)
}

function kf(t, e, n) {
    return t.subscribe(14, function(r) {
        var i = r.error,
            o = r.customerContext,
            a = r.savedCommonContext;
        t.notify(12, S({
            customerContext: o,
            savedCommonContext: a
        }, Of(i, e, n)))
    }), {
        addError: function(e, n) {
            var r = e.error,
                i = e.handlingStack,
                o = e.startClocks,
                a = e.context,
                s = Tn({
                    stackTrace: It(r) ? _t(r) : void 0,
                    originalError: r,
                    handlingStack: i,
                    startClocks: o,
                    nonErrorPrefix: "Provided",
                    source: Q.CUSTOM,
                    handling: "handled"
                });
            t.notify(14, {
                customerContext: a,
                savedCommonContext: n,
                error: s
            })
        }
    }
}

function Of(t, e, n) {
    var r = {
            date: t.startClocks.timeStamp,
            error: {
                id: K(),
                message: t.message,
                source: t.source,
                stack: t.stack,
                handling_stack: t.handlingStack,
                type: t.type,
                handling: t.handling,
                causes: t.causes,
                source_type: "browser",
                fingerprint: t.fingerprint,
                csp: t.csp
            },
            type: "error",
            view: {
                in_foreground: e.wasInPageStateAt("active", t.startClocks.relative)
            }
        },
        i = n.findFeatureFlagEvaluations(t.startClocks.relative);
    i && !Mt(i) && (r.feature_flags = i);
    var o = {
        error: t.originalError,
        handlingStack: t.handlingStack
    };
    return {
        rawRumEvent: r,
        startTime: t.startClocks.relative,
        domainContext: o
    }
}

function Lf(t, e) {
    var n = gt(e, {
        type: k.LONG_TASK,
        buffered: !0
    }).subscribe(function(n) {
        for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r];
            if (o.entryType !== k.LONG_TASK || !e.trackLongTasks) break;
            var a = gr(o.startTime),
                s = {
                    date: a.timeStamp,
                    long_task: {
                        id: K(),
                        entry_type: "long-task",
                        duration: T(o.duration)
                    },
                    type: "long_task",
                    _dd: {
                        discarded: !1
                    }
                };
            t.notify(12, {
                rawRumEvent: s,
                startTime: a.relative,
                domainContext: {
                    performanceEntry: o
                }
            })
        }
    });
    return {
        stop: function() {
            n.unsubscribe()
        }
    }
}
var ga = new Pl;

function Nf(t) {
    if (performance && "getEntriesByName" in performance) {
        var e = performance.getEntriesByName(t.url, "resource");
        if (e.length && "toJSON" in e[0]) {
            var n = e.filter(function(t) {
                return !ga.has(t)
            }).filter(function(t) {
                return eo(t) && ro(t)
            }).filter(function(e) {
                return Mf(e, t.startClocks.relative, Ao({
                    startTime: t.startClocks.relative,
                    duration: t.duration
                }))
            });
            if (1 === n.length) return ga.add(n[0]), n[0].toJSON()
        }
    }
}

function Ao(t) {
    return pe(t.startTime, t.duration)
}

function Mf(t, e, n) {
    return t.startTime >= e - 1 && Ao(t) <= pe(n, 1)
}
var Df = 2 * Z;

function Pf(t) {
    var e = Uf(t) || Vf(t);
    if (e && !(e.traceTime <= at() - Df)) return e.traceId
}

function Uf(t) {
    var e = t.querySelector("meta[name=dd-trace-id]"),
        n = t.querySelector("meta[name=dd-trace-time]");
    return Ro(e && e.content, n && n.content)
}

function Vf(t) {
    var e = Bf(t);
    if (e) return Ro(ke(e, "trace-id"), ke(e, "trace-time"))
}

function Ro(t, e) {
    var n = e && Number(e);
    if (t && n) return {
        traceId: t,
        traceTime: n
    }
}

function Bf(t) {
    for (var e = 0; e < t.childNodes.length; e += 1) {
        if (n = _a(t.childNodes[e])) return n
    }
    if (t.body)
        for (e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
            var n, r = t.body.childNodes[e];
            if (n = _a(r)) return n;
            if (!fo(r)) break
        }
}

function _a(t) {
    if (t && Ul(t)) {
        var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
        if (e) return e[1]
    }
}

function xo() {
    if (Rr(k.NAVIGATION)) {
        var t = performance.getEntriesByType(k.NAVIGATION)[0];
        if (t) return t
    }
    var e = zf(),
        n = S({
            entryType: k.NAVIGATION,
            initiatorType: "navigation",
            name: window.location.href,
            startTime: 0,
            duration: e.responseEnd,
            decodedBodySize: 0,
            encodedBodySize: 0,
            transferSize: 0,
            workerStart: 0,
            toJSON: function() {
                return S({}, n, {
                    toJSON: void 0
                })
            }
        }, e);
    return n
}

function zf() {
    var t = {},
        e = performance.timing;
    for (var n in e)
        if (Pe(e[n])) {
            var r = n,
                i = e[r];
            t[r] = 0 === i ? 0 : _r(i)
        }
    return t
}

function Ff(t, e) {
    An(t, "interactive", function() {
        var t = S(xo().toJSON(), {
            entryType: k.RESOURCE,
            initiatorType: to,
            traceId: Pf(document),
            toJSON: function() {
                return S({}, t, {
                    toJSON: void 0
                })
            }
        });
        e(t)
    })
}

function Gf(t, e, n, r, i) {
    void 0 === r && (r = Oc()), void 0 === i && (i = Ff), t.subscribe(8, function(t) {
        a(function() {
            return Hf(t, e, n)
        })
    });
    var o = gt(e, {
        type: k.RESOURCE,
        buffered: !0
    }).subscribe(function(t) {
        for (var n = function(t) {
                gl(t) || a(function() {
                    return ba(t, e)
                })
            }, r = 0, i = t; r < i.length; r++) {
            n(i[r])
        }
    });

    function a(e) {
        r.push(function() {
            var n = e();
            n && t.notify(12, n)
        })
    }
    return i(e, function(t) {
        a(function() {
            return ba(t, e)
        })
    }), {
        stop: function() {
            o.unsubscribe()
        }
    }
}

function Hf(t, e, n) {
    var r = Nf(t),
        i = r ? gr(r.startTime) : t.startClocks,
        o = jf(t, e);
    if (e.trackResources || o) {
        var a = "xhr" === t.type ? "xhr" : "fetch",
            s = r ? ko(r) : void 0,
            u = Wf(n, i, t.duration),
            c = et({
                date: i.timeStamp,
                resource: {
                    id: K(),
                    type: a,
                    duration: u,
                    method: t.method,
                    status_code: t.status,
                    protocol: r && no(r),
                    url: io(t.url) ? oo(t.url) : t.url,
                    delivery_type: r && ao(r)
                },
                type: "resource",
                _dd: {
                    discarded: !e.trackResources
                }
            }, o, s);
        return {
            startTime: i.relative,
            rawRumEvent: c,
            domainContext: {
                performanceEntry: r,
                xhr: t.xhr,
                response: t.response,
                requestInput: t.input,
                requestInit: t.init,
                error: t.error,
                isAborted: t.isAborted,
                handlingStack: t.handlingStack
            }
        }
    }
}

function ba(t, e) {
    var n = gr(t.startTime),
        r = Kf(t, e);
    if (e.trackResources || r) {
        var i = ml(t),
            o = ko(t),
            a = et({
                date: n.timeStamp,
                resource: {
                    id: K(),
                    type: i,
                    url: t.name,
                    status_code: Yf(t.responseStatus),
                    protocol: no(t),
                    delivery_type: ao(t)
                },
                type: "resource",
                _dd: {
                    discarded: !e.trackResources
                }
            }, r, o);
        return {
            startTime: n.relative,
            rawRumEvent: a,
            domainContext: {
                performanceEntry: t
            }
        }
    }
}

function ko(t) {
    var e = t.renderBlockingStatus;
    return {
        resource: S({
            duration: _l(t),
            render_blocking_status: e
        }, Sl(t), bl(t))
    }
}

function jf(t, e) {
    if (t.traceSampled && t.traceId && t.spanId) return {
        _dd: {
            span_id: t.spanId.toString(),
            trace_id: t.traceId.toString(),
            rule_psr: e.rulePsr
        }
    }
}

function Kf(t, e) {
    if (t.traceId) return {
        _dd: {
            trace_id: t.traceId,
            span_id: qi().toString(),
            rule_psr: e.rulePsr
        }
    }
}

function Wf(t, e, n) {
    return t.wasInPageStateDuringPeriod("frozen", e.relative, n) ? void 0 : T(n)
}

function Yf(t) {
    return 0 === t ? void 0 : t
}

function qf(t, e, n) {
    var r = co({
        lifeCycle: t,
        isChildEvent: function(t) {
            return t.view.id === e
        },
        onChange: n
    });
    return {
        stop: r.stop,
        eventCounts: r.eventCounts
    }
}
var Xf = 10 * Z;

function Jf(t, e, n) {
    return {
        stop: gt(t, {
            type: k.PAINT,
            buffered: !0
        }).subscribe(function(t) {
            var r = Nt(t, function(t) {
                return "first-contentful-paint" === t.name && t.startTime < e.timeStamp && t.startTime < Xf
            });
            r && n(r.startTime)
        }).unsubscribe
    }
}

function $f(t, e, n) {
    var r = gt(t, {
        type: k.FIRST_INPUT,
        buffered: !0
    }).subscribe(function(r) {
        var i = Nt(r, function(t) {
            return t.startTime < e.timeStamp
        });
        if (i) {
            var o = z(i.startTime, i.processingStart),
                a = void 0;
            i.target && be(i.target) && (a = Ge(i.target, t.actionNameAttribute)), n({
                delay: o >= 0 ? o : 0,
                time: i.startTime,
                targetSelector: a
            })
        }
    });
    return {
        stop: function() {
            r.unsubscribe()
        }
    }
}

function Zf(t, e, n) {
    return void 0 === n && (n = xo), ev(t, function() {
        var t = n();
        tv(t) || e(Qf(t))
    })
}

function Qf(t) {
    return {
        domComplete: t.domComplete,
        domContentLoaded: t.domContentLoadedEventEnd,
        domInteractive: t.domInteractive,
        loadEvent: t.loadEventEnd,
        firstByte: t.responseStart >= 0 && t.responseStart <= it() ? t.responseStart : void 0
    }
}

function tv(t) {
    return t.loadEventEnd <= 0
}

function ev(t, e) {
    var n, r = An(t, "complete", function() {
        n = B(function() {
            return e()
        })
    }).stop;
    return {
        stop: function() {
            r(), tt(n)
        }
    }
}
var rv = 10 * Z;

function nv(t, e, n, r) {
    var i = 1 / 0,
        o = $(t, n, ["pointerdown", "keydown"], function(t) {
            i = t.timeStamp
        }, {
            capture: !0,
            once: !0
        }).stop,
        a = 0,
        s = gt(t, {
            type: k.LARGEST_CONTENTFUL_PAINT,
            buffered: !0
        }).subscribe(function(n) {
            var o = vs(n, function(t) {
                return t.entryType === k.LARGEST_CONTENTFUL_PAINT && t.startTime < i && t.startTime < e.timeStamp && t.startTime < rv && t.size > a
            });
            if (o) {
                var s = void 0;
                o.element && (s = Ge(o.element, t.actionNameAttribute)), r({
                    value: o.startTime,
                    targetSelector: s
                }), a = o.size
            }
        });
    return {
        stop: function() {
            o(), s.unsubscribe()
        }
    }
}

function Oo(t, e) {
    var n, r;
    return void 0 === e && (e = window), "hidden" === document.visibilityState ? n = 0 : (n = 1 / 0, r = $(t, e, ["pagehide", "visibilitychange"], function(t) {
        ("pagehide" === t.type || "hidden" === document.visibilityState) && (n = t.timeStamp, r())
    }, {
        capture: !0
    }).stop), {
        get timeStamp() {
            return n
        },
        stop: function() {
            r ? .()
        }
    }
}

function av(t, e, n) {
    var r = {},
        i = Zf(t, function(t) {
            e(t.loadEvent), r.navigationTimings = t, n()
        }).stop,
        o = Oo(t),
        a = Jf(t, o, function(t) {
            r.firstContentfulPaint = t, n()
        }).stop,
        s = nv(t, o, window, function(t) {
            r.largestContentfulPaint = t, n()
        }).stop,
        u = $f(t, o, function(t) {
            r.firstInput = t, n()
        }).stop;
    return {
        stop: function() {
            i(), a(), s(), u(), o.stop()
        },
        initialViewMetrics: r
    }
}

function iv(t, e, n) {
    if (!dv()) return {
        stop: I
    };
    var r, i, o = 0;
    n({
        value: 0
    });
    var a = cv(),
        s = gt(t, {
            type: k.LAYOUT_SHIFT,
            buffered: !0
        }).subscribe(function(s) {
            for (var u = 0, c = s; u < c.length; u++) {
                var l = c[u];
                if (!(l.hadRecentInput || l.startTime < e)) {
                    var d = a.update(l),
                        f = d.cumulatedValue;
                    if (d.isMaxValue) {
                        var p = ov(l.sources);
                        r = p ? new WeakRef(p) : void 0, i = z(e, l.startTime)
                    }
                    if (f > o) {
                        o = f;
                        p = r ? .deref();
                        n({
                            value: ar(o, 4),
                            targetSelector: p && Ge(p, t.actionNameAttribute),
                            time: i
                        })
                    }
                }
            }
        });
    return {
        stop: function() {
            s.unsubscribe()
        }
    }
}

function ov(t) {
    var e;
    if (t) return null === (e = Nt(t, function(t) {
        return !!t.node && be(t.node)
    })) || void 0 === e ? void 0 : e.node
}
var sv = 5 * j,
    uv = j;

function cv() {
    var t, e, n = 0,
        r = 0;
    return {
        update: function(i) {
            var o;
            return void 0 === t || i.startTime - e >= uv || i.startTime - t >= sv ? (t = e = i.startTime, r = n = i.value, o = !0) : (n += i.value, e = i.startTime, (o = i.value > r) && (r = i.value)), {
                cumulatedValue: n,
                isMaxValue: o
            }
        }
    }
}

function dv() {
    return Rr(k.LAYOUT_SHIFT) && "WeakRef" in window
}
var nr, Lo = 0,
    rn = 1 / 0,
    nn = 0;

function lv() {
    "interactionCount" in performance || nr || (nr = new window.PerformanceObserver(y(function(t) {
        t.getEntries().forEach(function(t) {
            var e = t;
            e.interactionId && (rn = Math.min(rn, e.interactionId), nn = Math.max(nn, e.interactionId), Lo = (nn - rn) / 7 + 1)
        })
    }))).observe({
        type: "event",
        buffered: !0,
        durationThreshold: 0
    })
}
var an, ya = function() {
        return nr ? Lo : window.performance.interactionCount || 0
    },
    Sa = 10,
    fv = 1 * Z;

function vv(t, e, n) {
    if (!mv()) return {
        getInteractionToNextPaint: function() {},
        setViewEnd: I,
        stop: I
    };
    var r, i, o = hv(n),
        a = o.getViewInteractionCount,
        s = o.stopViewInteractionCount,
        u = 1 / 0,
        c = pv(a),
        l = -1;

    function d(n) {
        for (var o = 0, a = n; o < a.length; o++) {
            var s = a[o];
            s.interactionId && s.startTime >= e && s.startTime <= u && c.process(s)
        }
        var d = c.estimateP98Interaction();
        d && d.duration !== l && (l = d.duration, i = z(e, d.startTime), !(r = bf(d.startTime)) && d.target && be(d.target) && (r = Ge(d.target, t.actionNameAttribute)))
    }
    var f = gt(t, {
            type: k.FIRST_INPUT,
            buffered: !0
        }).subscribe(d),
        p = gt(t, {
            type: k.EVENT,
            durationThreshold: 40,
            buffered: !0
        }).subscribe(d);
    return {
        getInteractionToNextPaint: function() {
            return l >= 0 ? {
                value: Math.min(l, fv),
                targetSelector: r,
                time: i
            } : a() ? {
                value: 0
            } : void 0
        },
        setViewEnd: function(t) {
            u = t, s()
        },
        stop: function() {
            p.unsubscribe(), f.unsubscribe()
        }
    }
}

function pv(t) {
    var e = [];

    function n() {
        e.sort(function(t, e) {
            return e.duration - t.duration
        }).splice(Sa)
    }
    return {
        process: function(t) {
            var r = e.findIndex(function(e) {
                    return t.interactionId === e.interactionId
                }),
                i = e[e.length - 1]; - 1 !== r ? t.duration > e[r].duration && (e[r] = t, n()) : (e.length < Sa || t.duration > i.duration) && (e.push(t), n())
        },
        estimateP98Interaction: function() {
            var n = Math.min(e.length - 1, Math.floor(t() / 50));
            return e[n]
        }
    }
}

function hv(t) {
    lv();
    var e = "initial_load" === t ? 0 : ya(),
        n = {
            stopped: !1
        };

    function r() {
        return ya() - e
    }
    return {
        getViewInteractionCount: function() {
            return n.stopped ? n.interactionCount : r()
        },
        stopViewInteractionCount: function() {
            n = {
                stopped: !0,
                interactionCount: r()
            }
        }
    }
}

function mv() {
    return Rr(k.EVENT) && window.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype
}

function gv(t, e, n, r, i, o, a) {
    var s = "initial_load" === i,
        u = !0,
        c = [],
        l = Oo(r);

    function d() {
        if (!u && !s && c.length > 0) {
            var t = Math.max.apply(Math, c);
            t < l.timeStamp && a(t)
        }
    }
    var f = Ln(t, e, n, r, function(t) {
        u && (u = !1, t.hadActivity && c.push(z(o.timeStamp, t.end)), d())
    }).stop;
    return {
        stop: function() {
            f(), l.stop()
        },
        setLoadEvent: function(t) {
            s && (s = !1, c.push(t), d())
        }
    }
}

function No() {
    var t, e = window.visualViewport;
    return t = e ? e.pageLeft - e.offsetLeft : void 0 !== window.scrollX ? window.scrollX : window.pageXOffset || 0, Math.round(t)
}

function Pn() {
    var t, e = window.visualViewport;
    return t = e ? e.pageTop - e.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0, Math.round(t)
}

function Mo(t) {
    return an || (an = _v(t)), an
}

function _v(t) {
    return new R(function(e) {
        var n = Ct(function() {
            e.notify(De())
        }, 200).throttled;
        return L(t, window, "resize", n, {
            capture: !0,
            passive: !0
        }).stop
    })
}

function De() {
    var t = window.visualViewport;
    return t ? {
        width: Number(t.width * t.scale),
        height: Number(t.height * t.scale)
    } : {
        width: Number(window.innerWidth || 0),
        height: Number(window.innerHeight || 0)
    }
}
var bv = j;

function yv(t, e, n, r) {
    void 0 === r && (r = Ev(t));
    var i = 0,
        o = 0,
        a = 0,
        s = r.subscribe(function(t) {
            var r = t.scrollDepth,
                s = t.scrollTop,
                u = t.scrollHeight,
                c = !1;
            if (r > i && (i = r, c = !0), u > o) {
                o = u;
                var l = it();
                a = z(e.relative, l), c = !0
            }
            c && n({
                maxDepth: Math.min(i, o),
                maxDepthScrollTop: s,
                maxScrollHeight: o,
                maxScrollHeightTime: a
            })
        });
    return {
        stop: function() {
            return s.unsubscribe()
        }
    }
}

function Sv() {
    var t = Pn(),
        e = De().height;
    return {
        scrollHeight: Math.round((document.scrollingElement || document.documentElement).scrollHeight),
        scrollDepth: Math.round(e + t),
        scrollTop: t
    }
}

function Ev(t, e) {
    return void 0 === e && (e = bv), new R(function(n) {
        if (window.ResizeObserver) {
            var r = Ct(function() {
                    n.notify(Sv())
                }, e, {
                    leading: !1,
                    trailing: !0
                }),
                i = document.scrollingElement || document.documentElement,
                o = new ResizeObserver(y(r.throttled));
            i && o.observe(i);
            var a = L(t, window, "scroll", r.throttled, {
                passive: !0
            });
            return function() {
                r.cancel(), o.disconnect(), a.stop()
            }
        }
    })
}

function wv(t, e, n, r, i, o, a) {
    var s = {},
        u = gv(t, e, n, r, o, a, function(t) {
            s.loadingTime = t, i()
        }),
        c = u.stop,
        l = u.setLoadEvent,
        d = yv(r, a, function(t) {
            s.scroll = t
        }).stop,
        f = iv(r, a.relative, function(t) {
            s.cumulativeLayoutShift = t, i()
        }).stop,
        p = vv(r, a.relative, o),
        v = p.stop,
        h = p.getInteractionToNextPaint;
    return {
        stop: function() {
            c(), f(), d()
        },
        stopINPTracking: v,
        setLoadEvent: l,
        setViewEnd: p.setViewEnd,
        getCommonViewMetrics: function() {
            return s.interactionToNextPaint = h(), s
        }
    }
}
var Tv = 3e3,
    Cv = 5 * Z,
    Iv = 5 * Z;

function Av(t, e, n, r, i, o, a, s) {
    var u, c = new Set,
        l = d("initial_load", Ua(), s);

    function d(o, a, s) {
        var u = Rv(e, n, r, i, t, o, a, s);
        return c.add(u), u.stopObservable.subscribe(function() {
            c.delete(u)
        }), u
    }
    return e.subscribe(10, function() {
        l = d("route_change", void 0, {
            name: l.name,
            service: l.service,
            version: l.version,
            context: l.contextManager.getContext()
        })
    }), e.subscribe(9, function() {
        l.end({
            sessionIsActive: !1
        })
    }), e.subscribe(11, function(t) {
        t.reason === ce.UNLOADING && l.end()
    }), a && (u = o.subscribe(function(t) {
        kv(t.oldLocation, t.newLocation) && (l.end(), l = d("route_change"))
    })), {
        addTiming: function(t, e) {
            void 0 === e && (e = D()), l.addTiming(t, e)
        },
        startView: function(t, e) {
            l.end({
                endClocks: e
            }), l = d("route_change", e, t)
        },
        setViewContext: function(t) {
            l.contextManager.setContext(t)
        },
        setViewContextProperty: function(t, e) {
            l.contextManager.setContextProperty(t, e)
        },
        setViewName: function(t) {
            l.setViewName(t)
        },
        stop: function() {
            u && u.unsubscribe(), l.end(), c.forEach(function(t) {
                return t.stop()
            })
        }
    }
}

function Rv(t, e, n, r, i, o, a, s) {
    void 0 === a && (a = H());
    var u, c, l, d, f, p = K(),
        v = new R,
        h = {},
        g = 0,
        m = xe(i),
        y = ve(),
        _ = !0;
    s && (c = s.name, l = s.service || void 0, d = s.version || void 0, s.context && (f = s.context, y.setContext(f)));
    var b = {
        id: p,
        name: c,
        startClocks: a,
        service: l,
        version: d,
        context: f
    };
    t.notify(1, b), t.notify(2, b);
    var w = Ct(q, Tv, {
            leading: !1
        }),
        S = w.throttled,
        k = w.cancel,
        C = wv(t, e, n, r, S, o, a),
        x = C.setLoadEvent,
        T = C.setViewEnd,
        E = C.stop,
        A = C.stopINPTracking,
        O = C.getCommonViewMetrics,
        N = "initial_load" === o ? av(r, x, S) : {
            stop: I,
            initialViewMetrics: {}
        },
        L = N.stop,
        M = N.initialViewMetrics,
        P = qf(t, p, S),
        U = P.stop,
        V = P.eventCounts,
        F = he(q, Cv);

    function q() {
        k(), g += 1;
        var e = void 0 === u ? D() : u.timeStamp;
        t.notify(4, {
            customTimings: h,
            documentVersion: g,
            id: p,
            name: c,
            service: l,
            version: d,
            context: y.getContext(),
            loadingType: o,
            location: m,
            startClocks: a,
            commonViewMetrics: O(),
            initialViewMetrics: M,
            duration: z(a.timeStamp, e),
            isActive: void 0 === u,
            sessionIsActive: _,
            eventCounts: V
        })
    }
    return q(), y.changeObservable.subscribe(function() {
        t.notify(3, {
            id: p,
            name: c,
            context: y.getContext(),
            startClocks: a
        }), S()
    }), {
        get name() {
            return c
        },
        service: l,
        version: d,
        contextManager: y,
        stopObservable: v,
        end: function(e) {
            var n, r, i = this;
            void 0 === e && (e = {}), !u && (u = null !== (n = e.endClocks) && void 0 !== n ? n : H(), _ = null === (r = e.sessionIsActive) || void 0 === r || r, t.notify(5, {
                endClocks: u
            }), t.notify(6, {
                endClocks: u
            }), yr(F), T(u.relative), E(), q(), B(function() {
                i.stop()
            }, Iv))
        },
        stop: function() {
            L(), U(), A(), v.notify()
        },
        addTiming: function(t, e) {
            if (!u) {
                var n = ds(e) ? e : z(a.timeStamp, e);
                h[xv(t)] = n, S()
            }
        },
        setViewName: function(t) {
            c = t, q()
        }
    }
}

function xv(t) {
    var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
    return e !== t && A.warn("Invalid timing name: ".concat(t, ", sanitized to: ").concat(e)), e
}

function kv(t, e) {
    return t.pathname !== e.pathname || !Ov(e.hash) && Ea(e.hash) !== Ea(t.hash)
}

function Ov(t) {
    var e = t.substring(1);
    return "" !== e && !!document.getElementById(e)
}

function Ea(t) {
    var e = t.indexOf("?");
    return e < 0 ? t : t.slice(0, e)
}

function Lv(t, e, n, r, i, o, a, s, u, c) {
    return t.subscribe(4, function(n) {
        return t.notify(12, Nv(n, e, a, u, s))
    }), Av(n, t, r, i, e, o, !e.trackViewsManually, c)
}

function Nv(t, e, n, r, i) {
    var o, a, s, u, c, l, d, f, p, v, h, g, m, y, _, b, w = r.getReplayStats(t.id),
        S = n.findFeatureFlagEvaluations(t.startClocks.relative),
        k = i.findAll(t.startClocks.relative, t.duration),
        C = {
            _dd: {
                document_version: t.documentVersion,
                replay_stats: w,
                page_states: k,
                configuration: {
                    start_session_replay_recording_manually: e.startSessionReplayRecordingManually
                }
            },
            date: t.startClocks.timeStamp,
            type: "view",
            view: {
                action: {
                    count: t.eventCounts.actionCount
                },
                frustration: {
                    count: t.eventCounts.frustrationCount
                },
                cumulative_layout_shift: null === (o = t.commonViewMetrics.cumulativeLayoutShift) || void 0 === o ? void 0 : o.value,
                cumulative_layout_shift_time: T(null === (a = t.commonViewMetrics.cumulativeLayoutShift) || void 0 === a ? void 0 : a.time),
                cumulative_layout_shift_target_selector: null === (s = t.commonViewMetrics.cumulativeLayoutShift) || void 0 === s ? void 0 : s.targetSelector,
                first_byte: T(null === (u = t.initialViewMetrics.navigationTimings) || void 0 === u ? void 0 : u.firstByte),
                dom_complete: T(null === (c = t.initialViewMetrics.navigationTimings) || void 0 === c ? void 0 : c.domComplete),
                dom_content_loaded: T(null === (l = t.initialViewMetrics.navigationTimings) || void 0 === l ? void 0 : l.domContentLoaded),
                dom_interactive: T(null === (d = t.initialViewMetrics.navigationTimings) || void 0 === d ? void 0 : d.domInteractive),
                error: {
                    count: t.eventCounts.errorCount
                },
                first_contentful_paint: T(t.initialViewMetrics.firstContentfulPaint),
                first_input_delay: T(null === (f = t.initialViewMetrics.firstInput) || void 0 === f ? void 0 : f.delay),
                first_input_time: T(null === (p = t.initialViewMetrics.firstInput) || void 0 === p ? void 0 : p.time),
                first_input_target_selector: null === (v = t.initialViewMetrics.firstInput) || void 0 === v ? void 0 : v.targetSelector,
                interaction_to_next_paint: T(null === (h = t.commonViewMetrics.interactionToNextPaint) || void 0 === h ? void 0 : h.value),
                interaction_to_next_paint_time: T(null === (g = t.commonViewMetrics.interactionToNextPaint) || void 0 === g ? void 0 : g.time),
                interaction_to_next_paint_target_selector: null === (m = t.commonViewMetrics.interactionToNextPaint) || void 0 === m ? void 0 : m.targetSelector,
                is_active: t.isActive,
                name: t.name,
                largest_contentful_paint: T(null === (y = t.initialViewMetrics.largestContentfulPaint) || void 0 === y ? void 0 : y.value),
                largest_contentful_paint_target_selector: null === (_ = t.initialViewMetrics.largestContentfulPaint) || void 0 === _ ? void 0 : _.targetSelector,
                load_event: T(null === (b = t.initialViewMetrics.navigationTimings) || void 0 === b ? void 0 : b.loadEvent),
                loading_time: uo(T(t.commonViewMetrics.loadingTime)),
                loading_type: t.loadingType,
                long_task: {
                    count: t.eventCounts.longTaskCount
                },
                resource: {
                    count: t.eventCounts.resourceCount
                },
                time_spent: T(t.duration)
            },
            feature_flags: S && !Mt(S) ? S : void 0,
            display: t.commonViewMetrics.scroll ? {
                scroll: {
                    max_depth: t.commonViewMetrics.scroll.maxDepth,
                    max_depth_scroll_top: t.commonViewMetrics.scroll.maxDepthScrollTop,
                    max_scroll_height: t.commonViewMetrics.scroll.maxScrollHeight,
                    max_scroll_height_time: T(t.commonViewMetrics.scroll.maxScrollHeightTime)
                }
            } : void 0,
            session: {
                has_replay: !!w || void 0,
                is_active: !!t.sessionIsActive && void 0
            },
            privacy: {
                replay_level: e.defaultPrivacyLevel
            }
        };
    return Mt(t.customTimings) || (C.view.custom_timings = ms(t.customTimings, T)), {
        rawRumEvent: C,
        startTime: t.startClocks.relative,
        domainContext: {
            location: t.location
        }
    }
}
var Mv = "rum";

function Dv(t, e, n) {
    var r = Si(t, Mv, function(e) {
        return Uv(t, e)
    }, n);
    return r.expireObservable.subscribe(function() {
        e.notify(9)
    }), r.renewObservable.subscribe(function() {
        e.notify(10)
    }), r.sessionStateUpdateObservable.subscribe(function(t) {
        var e = t.previousState,
            n = t.newState;
        if (!e.forcedReplay && n.forcedReplay) {
            var i = r.findSession();
            i && (i.isReplayForced = !0)
        }
    }), {
        findTrackedSession: function(t) {
            var e = r.findSession(t);
            if (e && Do(e.trackingType)) return {
                id: e.id,
                sessionReplay: "1" === e.trackingType ? 1 : e.isReplayForced ? 2 : 0,
                anonymousId: e.anonymousId
            }
        },
        expire: r.expire,
        expireObservable: r.expireObservable,
        setForcedReplay: function() {
            return r.updateSessionState({
                forcedReplay: "1"
            })
        }
    }
}

function Pv() {
    var t = {
        id: "00000000-aaaa-0000-aaaa-000000000000",
        sessionReplay: Li("records") ? 1 : 0
    };
    return {
        findTrackedSession: function() {
            return t
        },
        expire: I,
        expireObservable: new R,
        setForcedReplay: I
    }
}

function Uv(t, e) {
    var n;
    return {
        trackingType: n = Vv(e) ? e : Lt(t.sessionSampleRate) ? Lt(t.sessionReplaySampleRate) ? "1" : "2" : "0",
        isTracked: Do(n)
    }
}

function Vv(t) {
    return "0" === t || "1" === t || "2" === t
}

function Do(t) {
    return "2" === t || "1" === t
}

function Bv(t, e, n, r, i, o, a) {
    var s = t.replica,
        u = In(t, {
            endpoint: t.rumEndpointBuilder,
            encoder: a(2)
        }, s && {
            endpoint: s.rumEndpointBuilder,
            transformMessage: function(t) {
                return et(t, {
                    application: {
                        id: s.applicationId
                    }
                })
            },
            encoder: a(3)
        }, r, i, o);
    return e.subscribe(13, function(t) {
        "view" === t.type ? u.upsert(t, t.view.id) : u.add(t)
    }), n.subscribe(function(e) {
        return u.add(e, bi(t))
    }), u
}

function zv(t) {
    var e = Bt();
    t.subscribe(13, function(t) {
        e.send("rum", t)
    })
}
var Fv = Qt;

function Gv(t, e, n) {
    var r, i = _e({
        expireDelay: Fv
    });
    t.subscribe(1, function(t) {
        var e = t.startClocks,
            o = n.href;
        i.add(a({
            url: o,
            referrer: r || document.referrer
        }), e.relative), r = o
    }), t.subscribe(6, function(t) {
        var e = t.endClocks;
        i.closeActive(e.relative)
    });
    var o = e.subscribe(function(t) {
        var e = t.newLocation,
            n = i.find();
        if (n) {
            var r = it();
            i.closeActive(r), i.add(a({
                url: e.href,
                referrer: n.referrer
            }), r)
        }
    });

    function a(t) {
        return {
            url: t.url,
            referrer: t.referrer
        }
    }
    return {
        findUrl: function(t) {
            return i.find(t)
        },
        stop: function() {
            o.unsubscribe(), i.stop()
        }
    }
}

function Hv(t, e) {
    var n = xe(e);
    return new R(function(r) {
        var i = jv(t, a).stop,
            o = Kv(t, a).stop;

        function a() {
            if (n.href !== e.href) {
                var t = xe(e);
                r.notify({
                    newLocation: t,
                    oldLocation: n
                }), n = t
            }
        }
        return function() {
            i(), o()
        }
    })
}

function jv(t, e) {
    var n = J(wa("pushState"), "pushState", function(t) {
            (0, t.onPostCall)(e)
        }).stop,
        r = J(wa("replaceState"), "replaceState", function(t) {
            (0, t.onPostCall)(e)
        }).stop,
        i = L(t, window, "popstate", e).stop;
    return {
        stop: function() {
            n(), r(), i()
        }
    }
}

function Kv(t, e) {
    return L(t, window, "hashchange", e)
}

function wa(t) {
    return Object.prototype.hasOwnProperty.call(history, t) ? history : History.prototype
}
var Wv = Qt;

function Yv(t, e) {
    var n = _e({
        expireDelay: Wv
    });
    return t.subscribe(1, function(t) {
        var r = t.startClocks;
        n.add({}, r.relative), e.resetCustomerData()
    }), t.subscribe(6, function(t) {
        var e = t.endClocks;
        n.closeActive(e.relative)
    }), {
        findFeatureFlagEvaluations: function(t) {
            return n.find(t)
        },
        addFeatureFlagEvaluation: function(t, r) {
            var i = n.find();
            i && (i[t] = r, e.updateCustomerData(i))
        },
        stop: function() {
            return e.stop()
        }
    }
}
var St, Kt, vn, qv = 10 * j;

function Xv(t, e, n, r, i) {
    e.enabled && Lt(t.customerDataTelemetrySampleRate) && (Po(), Ta(), n.subscribe(13, function(t) {
        vn = !0, Te(Kt.globalContextBytes, r.getOrCreateTracker(2).getBytesCount()), Te(Kt.userContextBytes, r.getOrCreateTracker(1).getBytesCount()), Te(Kt.featureFlagBytes, q(["view", "error"], t.type) ? r.getOrCreateTracker(0).getBytesCount() : 0)
    }), i.subscribe(function(t) {
        var e = t.bytesCount,
            n = t.messagesCount;
        vn && (St.batchCount += 1, Te(St.batchBytesCount, e), Te(St.batchMessagesCount, n), on(St.globalContextBytes, Kt.globalContextBytes), on(St.userContextBytes, Kt.userContextBytes), on(St.featureFlagBytes, Kt.featureFlagBytes), Ta())
    }), he(Jv, qv))
}

function Jv() {
    0 !== St.batchCount && (Vt("Customer data measures", St), Po())
}

function xt() {
    return {
        min: 1 / 0,
        max: 0,
        sum: 0
    }
}

function Te(t, e) {
    t.sum += e, t.min = Math.min(t.min, e), t.max = Math.max(t.max, e)
}

function on(t, e) {
    t.sum += e.sum, t.min = Math.min(t.min, e.min), t.max = Math.max(t.max, e.max)
}

function Po() {
    St = {
        batchCount: 0,
        batchBytesCount: xt(),
        batchMessagesCount: xt(),
        globalContextBytes: xt(),
        userContextBytes: xt(),
        featureFlagBytes: xt()
    }
}

function Ta() {
    vn = !1, Kt = {
        globalContextBytes: xt(),
        userContextBytes: xt(),
        featureFlagBytes: xt()
    }
}
var $v = 4e3,
    Zv = 500,
    Qv = Qt;

function tp(t, e) {
    void 0 === e && (e = Zv);
    var n, r = _e({
        expireDelay: Qv,
        maxEntries: $v
    });
    o(Uo(), it());
    var i = $(t, window, ["pageshow", "focus", "blur", "visibilitychange", "resume", "freeze", "pagehide"], function(t) {
        o(ep(t), t.timeStamp)
    }, {
        capture: !0
    }).stop;

    function o(t, e) {
        void 0 === e && (e = it()), t !== n && (n = t, r.closeActive(e), r.add({
            state: n,
            startTime: e
        }, e))
    }
    var a = {
        findAll: function(t, n) {
            var i = r.findAll(t, n);
            if (0 !== i.length) {
                for (var o = [], a = Math.max(0, i.length - e), s = i.length - 1; s >= a; s--) {
                    var u = i[s],
                        c = z(t, u.startTime);
                    o.push({
                        state: u.state,
                        start: T(c)
                    })
                }
                return o
            }
        },
        wasInPageStateAt: function(t, e) {
            return a.wasInPageStateDuringPeriod(t, e, 0)
        },
        wasInPageStateDuringPeriod: function(t, e, n) {
            return r.findAll(e, n).some(function(e) {
                return e.state === t
            })
        },
        addPageState: o,
        stop: function() {
            i(), r.stop()
        }
    };
    return a
}

function ep(t) {
    return "freeze" === t.type ? "frozen" : "pagehide" === t.type ? t.persisted ? "frozen" : "terminated" : Uo()
}

function Uo() {
    return "hidden" === document.visibilityState ? "hidden" : document.hasFocus() ? "active" : "passive"
}

function rp(t) {
    var e, n;
    wt(ot.DELAY_VIEWPORT_COLLECTION) ? n = requestAnimationFrame(function() {
        e = De()
    }) : e = De();
    var r = Mo(t).subscribe(function(t) {
        e = t
    }).unsubscribe;
    return {
        get: function() {
            return e ? {
                viewport: e
            } : void 0
        },
        stop: function() {
            r(), n && cancelAnimationFrame(n)
        }
    }
}

function np(t, e) {
    var n = window.cookieStore ? ap(t) : op;
    return new R(function(t) {
        return n(e, function(e) {
            return t.notify(e)
        })
    })
}

function ap(t) {
    return function(e, n) {
        return L(t, window.cookieStore, "change", function(t) {
            var r = Nt(t.changed, function(t) {
                return t.name === e
            }) || Nt(t.deleted, function(t) {
                return t.name === e
            });
            r && n(r.value)
        }).stop
    }
}
var ip = j;

function op(t, e) {
    var n = ke(document.cookie, t),
        r = he(function() {
            var r = ke(document.cookie, t);
            r !== n && e(r)
        }, ip);
    return function() {
        yr(r)
    }
}
var Ca = "datadog-ci-visibility-test-execution-id";

function sp(t, e) {
    var n;
    void 0 === e && (e = np(t, Ca));
    var r = kt(Ca) || (null === (n = window.Cypress) || void 0 === n ? void 0 : n.env("traceId")),
        i = e.subscribe(function(t) {
            r = t
        });
    return {
        get: function() {
            if ("string" == typeof r) return {
                test_execution_id: r
            }
        },
        stop: function() {
            return i.unsubscribe()
        }
    }
}

function up(t, e) {
    var n = gt(e, {
        type: k.LONG_ANIMATION_FRAME,
        buffered: !0
    }).subscribe(function(e) {
        for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n],
                o = gr(i.startTime),
                a = {
                    date: o.timeStamp,
                    long_task: {
                        id: K(),
                        entry_type: "long-animation-frame",
                        duration: T(i.duration),
                        blocking_duration: T(i.blockingDuration),
                        first_ui_event_timestamp: T(i.firstUIEventTimestamp),
                        render_start: T(i.renderStart),
                        style_and_layout_start: T(i.styleAndLayoutStart),
                        start_time: T(i.startTime),
                        scripts: i.scripts.map(function(t) {
                            return {
                                duration: T(t.duration),
                                pause_duration: T(t.pauseDuration),
                                forced_style_and_layout_duration: T(t.forcedStyleAndLayoutDuration),
                                start_time: T(t.startTime),
                                execution_start: T(t.executionStart),
                                source_url: t.sourceURL,
                                source_function_name: t.sourceFunctionName,
                                source_char_position: t.sourceCharPosition,
                                invoker: t.invoker,
                                invoker_type: t.invokerType,
                                window_attribution: t.windowAttribution
                            }
                        })
                    },
                    type: "long_task",
                    _dd: {
                        discarded: !1
                    }
                };
            t.notify(12, {
                rawRumEvent: a,
                startTime: o.relative,
                domainContext: {
                    performanceEntry: i
                }
            })
        }
    });
    return {
        stop: function() {
            return n.unsubscribe()
        }
    }
}

function cp(t, e, n, r, i, o, a, s) {
    var u = [],
        c = new fl;
    c.subscribe(13, function(t) {
        return wr("rum", t)
    });
    var l = dp(t);
    l.setContextProvider(function() {
        var e, n;
        return {
            application: {
                id: t.applicationId
            },
            session: {
                id: null === (e = h.findTrackedSession()) || void 0 === e ? void 0 : e.id
            },
            view: {
                id: null === (n = C.findView()) || void 0 === n ? void 0 : n.id
            },
            action: {
                id: T.findActionId()
            }
        }
    });
    var d = function(t) {
            c.notify(14, {
                error: t
            }), Vt("Error reported to customer", {
                "error.message": t.message
            })
        },
        f = Yv(c, n.getOrCreateTracker(0)),
        p = Ni(t),
        v = p.subscribe(function(t) {
            c.notify(11, t)
        });
    u.push(function() {
        return v.unsubscribe()
    });
    var h = ft() ? Pv() : Dv(t, c, a);
    if (ft()) zv(c);
    else {
        var g = Bv(t, c, l.observable, d, p, h.expireObservable, o);
        u.push(function() {
            return g.stop()
        }), Xv(t, l, c, n, g.flushObservable)
    }
    var m = rl(),
        y = Hv(t, location),
        _ = tp(t),
        b = nl(),
        w = b.observable,
        S = b.stop;
    u.push(S);
    var k = lp(c, t, location, h, _, y, m, w, r, d),
        C = k.viewHistory,
        x = k.urlContexts,
        T = k.actionContexts,
        E = k.addAction,
        A = k.stop;
    u.push(A), _i();
    var R = Lv(c, t, location, m, w, y, f, _, e, i),
        I = R.addTiming,
        O = R.startView,
        N = R.setViewName,
        L = R.setViewContext,
        D = R.setViewContextProperty,
        M = R.stop;
    u.push(M);
    var P = Gf(c, t, _).stop;
    if (u.push(P), wt(ot.LONG_ANIMATION_FRAME)) {
        if (t.trackLongTasks) {
            var U = up(c, t).stop;
            u.push(U)
        }
    } else Lf(c, t);
    var z = xf(c, t, _, f).addError;
    wl(c, t, h);
    var B = kd(c, _, s),
        V = ll(t.applicationId, h, C, T, x);
    return {
        addAction: E,
        addError: z,
        addTiming: I,
        addFeatureFlagEvaluation: f.addFeatureFlagEvaluation,
        startView: O,
        setViewContext: L,
        setViewContextProperty: D,
        setViewName: N,
        lifeCycle: c,
        viewHistory: C,
        session: h,
        stopSession: function() {
            return h.expire()
        },
        getInternalContext: V.get,
        startDurationVital: B.startDurationVital,
        stopDurationVital: B.stopDurationVital,
        addDurationVital: B.addDurationVital,
        stop: function() {
            u.forEach(function(t) {
                return t()
            })
        }
    }
}

function dp(t) {
    var e = gi("browser-rum-sdk", t);
    if (ft()) {
        var n = Bt();
        e.observable.subscribe(function(t) {
            return n.send("internal_telemetry", t)
        })
    }
    return e
}

function lp(t, e, n, r, i, o, a, s, u, c) {
    var l = pl(t),
        d = Gv(t, o, n),
        f = If(t, a, s, e, i),
        p = rp(e),
        v = sp(e);
    return ul(e, t, r, l, d, f.actionContexts, p, v, u, c), {
        viewHistory: l,
        pageStateHistory: i,
        urlContexts: d,
        addAction: f.addAction,
        actionContexts: f.actionContexts,
        stop: function() {
            f.stop(), v.stop(), p.stop(), d.stop(), l.stop(), i.stop()
        }
    }
}

function fp(t, e) {
    var n = e.session,
        r = e.viewContext,
        i = e.errorType,
        o = n ? n.id : "no-session-id",
        a = [];
    void 0 !== i && a.push("error-type=".concat(i)), r && (a.push("seed=".concat(r.id)), a.push("from=".concat(r.startClocks.timeStamp)));
    var s = vp(t),
        u = "/rum/replay/sessions/".concat(o);
    return "".concat(s).concat(u, "?").concat(a.join("&"))
}

function vp(t) {
    var e = t.site,
        n = t.subdomain || pp(t);
    return "https://".concat(n ? "".concat(n, ".") : "").concat(e)
}

function pp(t) {
    switch (t.site) {
        case Xt:
        case au:
            return "app";
        case Qa:
            return "dd";
        default:
            return
    }
}
var Y, hp = 10;

function mp(t) {
    return Lr(t).segments_count
}

function gp(t) {
    Lr(t).segments_count += 1
}

function _p(t) {
    Lr(t).records_count += 1
}

function bp(t, e) {
    Lr(t).segments_total_raw_size += e
}

function yp(t) {
    return Y ? .get(t)
}

function Lr(t) {
    var e;
    return Y || (Y = new Map), Y.has(t) ? e = Y.get(t) : (e = {
        records_count: 0,
        segments_count: 0,
        segments_total_raw_size: 0
    }, Y.set(t, e), Y.size > hp && Sp()), e
}

function Sp() {
    if (Y)
        if (Y.keys) {
            var t = Y.keys().next().value;
            t && Y.delete(t)
        } else {
            var e = !0;
            Y.forEach(function(t, n) {
                e && (Y.delete(n), e = !1)
            })
        }
}
var Un = new WeakMap;

function mt(t) {
    return Un.has(t)
}

function Ep(t) {
    for (var e = t; e;) {
        if (!mt(e) && !Nn(e)) return !1;
        e = kr(e)
    }
    return !0
}

function X(t) {
    return Un.get(t)
}

function wp(t, e) {
    Un.set(t, e)
}

function Vn(t, e) {
    var n = t.tagName,
        r = t.value;
    if (Or(t, e)) {
        var i = t.type;
        return "INPUT" !== n || "button" !== i && "submit" !== i && "reset" !== i ? r && "OPTION" !== n ? Ot : void 0 : r
    }
    return "OPTION" === n || "SELECT" === n ? t.value : "INPUT" === n || "TEXTAREA" === n ? r : void 0
}
var Tp = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm,
    Cp = /^[A-Za-z]+:|^\/\//,
    Ip = /^data:.*,/i;

function Ap(t, e) {
    return t.replace(Tp, function(t, n, r, i, o, a) {
        var s = r || o || a;
        if (!e || !s || Cp.test(s) || Ip.test(s)) return t;
        var u = n || i || "";
        return "url(".concat(u).concat(Rp(s, e)).concat(u, ")")
    })
}

function Rp(t, e) {
    try {
        return Sr(t, e).href
    } catch {
        return t
    }
}
var xp = /[^a-z1-6-_]/;

function Vo(t) {
    var e = t.toLowerCase().trim();
    return xp.test(e) ? "div" : e
}

function Ia(t, e) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='".concat(t, "' height='").concat(e, "' style='background-color:silver'%3E%3C/svg%3E")
}
var ht = {
        FullSnapshot: 2,
        IncrementalSnapshot: 3,
        Meta: 4,
        Focus: 6,
        ViewEnd: 7,
        VisualViewport: 8,
        FrustrationRecord: 9
    },
    Zt = {
        Document: 0,
        DocumentType: 1,
        Element: 2,
        Text: 3,
        CDATA: 4,
        DocumentFragment: 11
    },
    nt = {
        Mutation: 0,
        MouseMove: 1,
        MouseInteraction: 2,
        Scroll: 3,
        ViewportResize: 4,
        Input: 5,
        TouchMove: 6,
        MediaInteraction: 7,
        StyleSheetRule: 8
    },
    dt = {
        MouseUp: 0,
        MouseDown: 1,
        Click: 2,
        ContextMenu: 3,
        DblClick: 4,
        Focus: 5,
        Blur: 6,
        TouchStart: 7,
        TouchEnd: 9
    },
    Aa = {
        Play: 0,
        Pause: 1
    };

function Bo(t) {
    if (void 0 !== t && 0 !== t.length) return t.map(function(t) {
        var e = t.cssRules || t.rules;
        return {
            cssRules: Array.from(e, function(t) {
                return t.cssText
            }),
            disabled: t.disabled || void 0,
            media: t.media.length > 0 ? Array.from(t.media) : void 0
        }
    })
}

function zo(t, e, n, r) {
    if (e === E.HIDDEN) return null;
    var i = t.getAttribute(n);
    if (e === E.MASK && n !== Mn && !yo.includes(n) && n !== r.actionNameAttribute) {
        var o = t.tagName;
        switch (n) {
            case "title":
            case "alt":
            case "placeholder":
                return Ot
        }
        if ("IMG" === o && ("src" === n || "srcset" === n)) {
            var a = t;
            if (a.naturalWidth > 0) return Ia(a.naturalWidth, a.naturalHeight);
            var s = t.getBoundingClientRect(),
                u = s.width,
                c = s.height;
            return u > 0 || c > 0 ? Ia(u, c) : sa
        }
        if ("SOURCE" === o && ("src" === n || "srcset" === n)) return sa;
        if ("A" === o && "href" === n || i && Ve(n, "data-") || "IFRAME" === o && "srcdoc" === n) return Ot
    }
    return i && "string" == typeof i && io(i) ? oo(i) : i
}

function kp(t, e, n) {
    var r;
    if (e === E.HIDDEN) return {};
    for (var i = {}, o = Vo(t.tagName), a = t.ownerDocument, s = 0; s < t.attributes.length; s += 1) {
        var u = t.attributes.item(s).name,
            c = zo(t, e, u, n.configuration);
        null !== c && (i[u] = c)
    }
    if (t.value && ("textarea" === o || "select" === o || "option" === o || "input" === o)) {
        var l = Vn(t, e);
        void 0 !== l && (i.value = l)
    }
    if ("option" === o && e === E.ALLOW) {
        var d = t;
        d.selected && (i.selected = d.selected)
    }
    if ("link" === o) {
        var f, p = Array.from(a.styleSheets).find(function(e) {
            return e.href === t.href
        });
        (f = pn(p)) && p && (i._cssText = f)
    }
    "style" === o && t.sheet && ((f = pn(t.sheet)) && (i._cssText = f));
    var v = t;
    if ("input" === o && ("radio" === v.type || "checkbox" === v.type) && (e === E.ALLOW ? i.checked = !!v.checked : Or(v, e) && delete i.checked), "audio" === o || "video" === o) {
        var h = t;
        i.rr_mediaState = h.paused ? "paused" : "played"
    }
    var g, m, y = n.serializationContext;
    switch (y.status) {
        case 0:
            g = Math.round(t.scrollTop), m = Math.round(t.scrollLeft), (g || m) && y.elementsScrollPositions.set(t, {
                scrollTop: g,
                scrollLeft: m
            });
            break;
        case 1:
            y.elementsScrollPositions.has(t) && (g = (r = y.elementsScrollPositions.get(t)).scrollTop, m = r.scrollLeft)
    }
    return m && (i.rr_scrollLeft = m), g && (i.rr_scrollTop = g), i
}

function pn(t) {
    if (!t) return null;
    var e;
    try {
        e = t.rules || t.cssRules
    } catch {}
    return e ? Ap(Array.from(e, Ts() ? Op : Fo).join(""), t.href) : null
}

function Op(t) {
    if (Np(t) && t.selectorText.includes(":")) {
        return t.cssText.replace(/(\[[\w-]+[^\\])(:[^\]]+\])/g, "$1\\$2")
    }
    return Fo(t)
}

function Fo(t) {
    return Lp(t) && pn(t.styleSheet) || t.cssText
}

function Lp(t) {
    return "styleSheet" in t
}

function Np(t) {
    return "selectorText" in t
}

function Bn(t, e) {
    var n = Pp(t, e);
    if (!n) return null;
    var r = X(t) || Dp(),
        i = n;
    return i.id = r, wp(t, r), e.serializedNodeIds && e.serializedNodeIds.add(r), i
}
var Mp = 1;

function Dp() {
    return Mp++
}

function zn(t, e) {
    var n = [];
    return vo(t, function(t) {
        var r = Bn(t, e);
        r && n.push(r)
    }), n
}

function Pp(t, e) {
    switch (t.nodeType) {
        case t.DOCUMENT_NODE:
            return Up(t, e);
        case t.DOCUMENT_FRAGMENT_NODE:
            return Vp(t, e);
        case t.DOCUMENT_TYPE_NODE:
            return Bp(t);
        case t.ELEMENT_NODE:
            return zp(t, e);
        case t.TEXT_NODE:
            return Gp(t, e);
        case t.CDATA_SECTION_NODE:
            return Hp()
    }
}

function Up(t, e) {
    return {
        type: Zt.Document,
        childNodes: zn(t, e),
        adoptedStyleSheets: Bo(t.adoptedStyleSheets)
    }
}

function Vp(t, e) {
    var n = Nn(t);
    return n && e.serializationContext.shadowRootsController.addShadowRoot(t), {
        type: Zt.DocumentFragment,
        childNodes: zn(t, e),
        isShadowRoot: n,
        adoptedStyleSheets: n ? Bo(t.adoptedStyleSheets) : void 0
    }
}

function Bp(t) {
    return {
        type: Zt.DocumentType,
        name: t.name,
        publicId: t.publicId,
        systemId: t.systemId
    }
}

function zp(t, e) {
    var n, r = Vo(t.tagName),
        i = Fp(t) || void 0,
        o = po(ho(t), e.parentNodePrivacyLevel);
    if (o === E.HIDDEN) {
        var a = t.getBoundingClientRect(),
            s = a.width,
            u = a.height;
        return {
            type: Zt.Element,
            tagName: r,
            attributes: (n = {
                rr_width: "".concat(s, "px"),
                rr_height: "".concat(u, "px")
            }, n[Mn] = Bl, n),
            childNodes: [],
            isSVG: i
        }
    }
    if (o !== E.IGNORE) {
        var c = kp(t, o, e),
            l = [];
        if (Vl(t) && "style" !== r) {
            l = zn(t, e.parentNodePrivacyLevel === o && e.ignoreWhiteSpace === ("head" === r) ? e : S({}, e, {
                parentNodePrivacyLevel: o,
                ignoreWhiteSpace: "head" === r
            }))
        }
        return {
            type: Zt.Element,
            tagName: r,
            attributes: c,
            childNodes: l,
            isSVG: i
        }
    }
}

function Fp(t) {
    return "svg" === t.tagName || t instanceof SVGElement
}

function Gp(t, e) {
    var n = mo(t, e.ignoreWhiteSpace || !1, e.parentNodePrivacyLevel);
    if (void 0 !== n) return {
        type: Zt.Text,
        textContent: n
    }
}

function Hp() {
    return {
        type: Zt.CDATA,
        textContent: ""
    }
}

function jp(t, e, n) {
    return Bn(t, {
        serializationContext: n,
        parentNodePrivacyLevel: e.defaultPrivacyLevel,
        configuration: e
    })
}

function Go(t) {
    return !!t.changedTouches
}

function He(t) {
    return !0 === t.composed && xr(t.target) ? t.composedPath()[0] : t.target
}
var Ra = 25;

function Kp(t) {
    return Math.abs(t.pageTop - t.offsetTop - window.scrollY) > Ra || Math.abs(t.pageLeft - t.offsetLeft - window.scrollX) > Ra
}
var Wp = function(t, e) {
        var n = window.visualViewport,
            r = {
                layoutViewportX: t,
                layoutViewportY: e,
                visualViewportX: t,
                visualViewportY: e
            };
        return n ? (Kp(n) ? (r.layoutViewportX = Math.round(t + n.offsetLeft), r.layoutViewportY = Math.round(e + n.offsetTop)) : (r.visualViewportX = Math.round(t - n.offsetLeft), r.visualViewportY = Math.round(e - n.offsetTop)), r) : r
    },
    Ho = function(t) {
        return {
            scale: t.scale,
            offsetLeft: t.offsetLeft,
            offsetTop: t.offsetTop,
            pageLeft: t.pageLeft,
            pageTop: t.pageTop,
            height: t.height,
            width: t.width
        }
    };

function lt(t, e) {
    return {
        data: S({
            source: t
        }, e),
        type: ht.IncrementalSnapshot,
        timestamp: D()
    }
}
var Yp = 50;

function qp(t, e) {
    var n = Ct(function(t) {
            var n = He(t);
            if (mt(n)) {
                var r = jo(t);
                if (!r) return;
                var i = {
                    id: X(n),
                    timeOffset: 0,
                    x: r.x,
                    y: r.y
                };
                e(lt(Go(t) ? nt.TouchMove : nt.MouseMove, {
                    positions: [i]
                }))
            }
        }, Yp, {
            trailing: !1
        }),
        r = n.throttled,
        i = n.cancel,
        o = $(t, document, ["mousemove", "touchmove"], r, {
            capture: !0,
            passive: !0
        }).stop;
    return {
        stop: function() {
            o(), i()
        }
    }
}

function jo(t) {
    var e = Go(t) ? t.changedTouches[0] : t,
        n = e.clientX,
        r = e.clientY;
    if (window.visualViewport) {
        var i = Wp(n, r);
        n = i.visualViewportX, r = i.visualViewportY
    }
    if (Number.isFinite(n) && Number.isFinite(r)) return {
        x: n,
        y: r
    };
    t.isTrusted && Vt("mouse/touch event without x/y")
}
var ct, xa = ((ct = {}).pointerup = dt.MouseUp, ct.mousedown = dt.MouseDown, ct.click = dt.Click, ct.contextmenu = dt.ContextMenu, ct.dblclick = dt.DblClick, ct.focus = dt.Focus, ct.blur = dt.Blur, ct.touchstart = dt.TouchStart, ct.touchend = dt.TouchEnd, ct);

function Xp(t, e, n) {
    return $(t, document, Object.keys(xa), function(r) {
        var i = He(r);
        if (bt(i, t.defaultPrivacyLevel) !== E.HIDDEN && mt(i)) {
            var o, a = X(i),
                s = xa[r.type];
            if (s !== dt.Blur && s !== dt.Focus) {
                var u = jo(r);
                if (!u) return;
                o = {
                    id: a,
                    type: s,
                    x: u.x,
                    y: u.y
                }
            } else o = {
                id: a,
                type: s
            };
            var c = S({
                id: n.getIdForEvent(r)
            }, lt(nt.MouseInteraction, o));
            e(c)
        }
    }, {
        capture: !0,
        passive: !0
    })
}
var Jp = 100;

function Ko(t, e, n, r) {
    void 0 === r && (r = document);
    var i = Ct(function(r) {
            var i = He(r);
            if (i && bt(i, t.defaultPrivacyLevel) !== E.HIDDEN && mt(i)) {
                var o = X(i),
                    a = i === document ? {
                        scrollTop: Pn(),
                        scrollLeft: No()
                    } : {
                        scrollTop: Math.round(i.scrollTop),
                        scrollLeft: Math.round(i.scrollLeft)
                    };
                n.set(i, a), e(lt(nt.Scroll, {
                    id: o,
                    x: a.scrollLeft,
                    y: a.scrollTop
                }))
            }
        }, Jp),
        o = i.throttled,
        a = i.cancel,
        s = L(t, r, "scroll", o, {
            capture: !0,
            passive: !0
        }).stop;
    return {
        stop: function() {
            s(), a()
        }
    }
}
var $p = 200;

function Zp(t, e) {
    var n = Mo(t).subscribe(function(t) {
        e(lt(nt.ViewportResize, t))
    });
    return {
        stop: function() {
            n.unsubscribe()
        }
    }
}

function Qp(t, e) {
    var n = window.visualViewport;
    if (!n) return {
        stop: I
    };
    var r = Ct(function() {
            e({
                data: Ho(n),
                type: ht.VisualViewport,
                timestamp: D()
            })
        }, $p, {
            trailing: !1
        }),
        i = r.throttled,
        o = r.cancel,
        a = $(t, n, ["resize", "scroll"], i, {
            capture: !0,
            passive: !0
        }).stop;
    return {
        stop: function() {
            a(), o()
        }
    }
}

function th(t, e) {
    return $(t, document, ["play", "pause"], function(n) {
        var r = He(n);
        !r || bt(r, t.defaultPrivacyLevel) === E.HIDDEN || !mt(r) || e(lt(nt.MediaInteraction, {
            id: X(r),
            type: "play" === n.type ? Aa.Play : Aa.Pause
        }))
    }, {
        capture: !0,
        passive: !0
    })
}

function eh(t) {
    function e(t, e) {
        t && mt(t.ownerNode) && e(X(t.ownerNode))
    }
    var n = [J(CSSStyleSheet.prototype, "insertRule", function(n) {
        var r = n.target,
            i = n.parameters,
            o = i[0],
            a = i[1];
        e(r, function(e) {
            return t(lt(nt.StyleSheetRule, {
                id: e,
                adds: [{
                    rule: o,
                    index: a
                }]
            }))
        })
    }), J(CSSStyleSheet.prototype, "deleteRule", function(n) {
        var r = n.target,
            i = n.parameters[0];
        e(r, function(e) {
            return t(lt(nt.StyleSheetRule, {
                id: e,
                removes: [{
                    index: i
                }]
            }))
        })
    })];

    function r(r) {
        n.push(J(r.prototype, "insertRule", function(n) {
            var r = n.target,
                i = n.parameters,
                o = i[0],
                a = i[1];
            e(r.parentStyleSheet, function(e) {
                var n = ka(r);
                n && (n.push(a || 0), t(lt(nt.StyleSheetRule, {
                    id: e,
                    adds: [{
                        rule: o,
                        index: n
                    }]
                })))
            })
        }), J(r.prototype, "deleteRule", function(n) {
            var r = n.target,
                i = n.parameters[0];
            e(r.parentStyleSheet, function(e) {
                var n = ka(r);
                n && (n.push(i), t(lt(nt.StyleSheetRule, {
                    id: e,
                    removes: [{
                        index: n
                    }]
                })))
            })
        }))
    }
    return typeof CSSGroupingRule < "u" ? r(CSSGroupingRule) : (r(CSSMediaRule), r(CSSSupportsRule)), {
        stop: function() {
            n.forEach(function(t) {
                return t.stop()
            })
        }
    }
}

function ka(t) {
    for (var e = [], n = t; n.parentRule;) {
        var r = Array.from(n.parentRule.cssRules).indexOf(n);
        e.unshift(r), n = n.parentRule
    }
    if (n.parentStyleSheet) {
        var i = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
        return e.unshift(i), e
    }
}

function rh(t, e) {
    return $(t, window, ["focus", "blur"], function() {
        e({
            data: {
                has_focus: document.hasFocus()
            },
            type: ht.Focus,
            timestamp: D()
        })
    })
}

function nh(t, e, n) {
    var r = t.subscribe(12, function(t) {
        var r, i;
        "action" === t.rawRumEvent.type && "click" === t.rawRumEvent.action.type && null !== (i = null === (r = t.rawRumEvent.action.frustration) || void 0 === r ? void 0 : r.type) && void 0 !== i && i.length && "events" in t.domainContext && t.domainContext.events && t.domainContext.events.length && e({
            timestamp: t.rawRumEvent.date,
            type: ht.FrustrationRecord,
            data: {
                frustrationTypes: t.rawRumEvent.action.frustration.type,
                recordIds: t.domainContext.events.map(function(t) {
                    return n.getIdForEvent(t)
                })
            }
        })
    });
    return {
        stop: function() {
            r.unsubscribe()
        }
    }
}

function ah(t, e) {
    var n = t.subscribe(5, function() {
        e({
            timestamp: D(),
            type: ht.ViewEnd
        })
    });
    return {
        stop: function() {
            n.unsubscribe()
        }
    }
}

function Wo(t, e, n) {
    void 0 === n && (n = document);
    var r, i = t.defaultPrivacyLevel,
        o = new WeakMap,
        a = n !== document,
        s = $(t, n, a ? ["change"] : ["input", "change"], function(t) {
            var e = He(t);
            (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement) && c(e)
        }, {
            capture: !0,
            passive: !0
        }).stop;
    if (a) r = I;
    else {
        var u = [Se(HTMLInputElement.prototype, "value", c), Se(HTMLInputElement.prototype, "checked", c), Se(HTMLSelectElement.prototype, "value", c), Se(HTMLTextAreaElement.prototype, "value", c), Se(HTMLSelectElement.prototype, "selectedIndex", c)];
        r = function() {
            u.forEach(function(t) {
                return t.stop()
            })
        }
    }
    return {
        stop: function() {
            r(), s()
        }
    };

    function c(t) {
        var e = bt(t, i);
        if (e !== E.HIDDEN) {
            var n, r = t.type;
            if ("radio" === r || "checkbox" === r) {
                if (Or(t, e)) return;
                n = {
                    isChecked: t.checked
                }
            } else {
                var o = Vn(t, e);
                if (void 0 === o) return;
                n = {
                    text: o
                }
            }
            l(t, n);
            var a = t.name;
            "radio" === r && a && t.checked && ps(document.querySelectorAll('input[type="radio"][name="'.concat(Pt(a), '"]')), function(e) {
                e !== t && l(e, {
                    isChecked: !1
                })
            })
        }
    }

    function l(t, n) {
        if (mt(t)) {
            var r = o.get(t);
            (!r || r.text !== n.text || r.isChecked !== n.isChecked) && (o.set(t, n), e(lt(nt.Input, S({
                id: X(t)
            }, n))))
        }
    }
}
var ih = 100,
    oh = 16;

function sh(t) {
    var e = I,
        n = [];

    function r() {
        e(), t(n), n = []
    }
    var i = Ct(r, oh, {
            leading: !1
        }),
        o = i.throttled,
        a = i.cancel;
    return {
        addMutations: function(t) {
            0 === n.length && (e = Ui(o, {
                timeout: ih
            })), n.push.apply(n, t)
        },
        flush: r,
        stop: function() {
            e(), a()
        }
    }
}

function Yo(t, e, n, r) {
    var i = $i();
    if (!i) return {
        stop: I,
        flush: I
    };
    var o = sh(function(r) {
            uh(r.concat(a.takeRecords()), t, e, n)
        }),
        a = new i(y(o.addMutations));
    return a.observe(r, {
        attributeOldValue: !0,
        attributes: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
    }), {
        stop: function() {
            a.disconnect(), o.stop()
        },
        flush: function() {
            o.flush()
        }
    }
}

function uh(t, e, n, r) {
    var i = new Map;
    t.filter(function(t) {
        return "childList" === t.type
    }).forEach(function(t) {
        t.removedNodes.forEach(function(t) {
            qo(t, r.removeShadowRoot)
        })
    });
    var o = t.filter(function(t) {
            return t.target.isConnected && Ep(t.target) && bt(t.target, n.defaultPrivacyLevel, i) !== E.HIDDEN
        }),
        a = ch(o.filter(function(t) {
            return "childList" === t.type
        }), n, r, i),
        s = a.adds,
        u = a.removes,
        c = a.hasBeenSerialized,
        l = dh(o.filter(function(t) {
            return "characterData" === t.type && !c(t.target)
        }), n, i),
        d = lh(o.filter(function(t) {
            return "attributes" === t.type && !c(t.target)
        }), n, i);
    !l.length && !d.length && !u.length && !s.length || e(lt(nt.Mutation, {
        adds: s,
        removes: u,
        texts: l,
        attributes: d
    }))
}

function ch(t, e, n, r) {
    for (var i = new Set, o = new Map, a = function(t) {
            t.addedNodes.forEach(function(t) {
                i.add(t)
            }), t.removedNodes.forEach(function(e) {
                i.has(e) || o.set(e, t.target), i.delete(e)
            })
        }, s = 0, u = t; s < u.length; s++) {
        a(u[s])
    }
    var c = Array.from(i);
    fh(c);
    for (var l = new Set, d = [], f = 0, p = c; f < p.length; f++) {
        var v = p[f];
        if (!_(v)) {
            var h = bt(v.parentNode, e.defaultPrivacyLevel, r);
            if (h !== E.HIDDEN && h !== E.IGNORE) {
                var g = Bn(v, {
                    serializedNodeIds: l,
                    parentNodePrivacyLevel: h,
                    serializationContext: {
                        status: 2,
                        shadowRootsController: n
                    },
                    configuration: e
                });
                if (g) {
                    var m = kr(v);
                    d.push({
                        nextId: b(v),
                        parentId: X(m),
                        node: g
                    })
                }
            }
        }
    }
    var y = [];
    return o.forEach(function(t, e) {
        mt(e) && y.push({
            parentId: X(t),
            id: X(e)
        })
    }), {
        adds: d,
        removes: y,
        hasBeenSerialized: _
    };

    function _(t) {
        return mt(t) && l.has(X(t))
    }

    function b(t) {
        for (var e = t.nextSibling; e;) {
            if (mt(e)) return X(e);
            e = e.nextSibling
        }
        return null
    }
}

function dh(t, e, n) {
    for (var r, i = [], o = new Set, a = 0, s = t.filter(function(t) {
            return !o.has(t.target) && (o.add(t.target), !0)
        }); a < s.length; a++) {
        var u = s[a];
        if (u.target.textContent !== u.oldValue) {
            var c = bt(kr(u.target), e.defaultPrivacyLevel, n);
            c === E.HIDDEN || c === E.IGNORE || i.push({
                id: X(u.target),
                value: null !== (r = mo(u.target, !1, c)) && void 0 !== r ? r : null
            })
        }
    }
    return i
}

function lh(t, e, n) {
    for (var r = [], i = new Map, o = t.filter(function(t) {
            var e = i.get(t.target);
            return (!e || !e.has(t.attributeName)) && (e ? e.add(t.attributeName) : i.set(t.target, new Set([t.attributeName])), !0)
        }), a = new Map, s = 0, u = o; s < u.length; s++) {
        var c = u[s];
        if (c.target.getAttribute(c.attributeName) !== c.oldValue) {
            var l = bt(c.target, e.defaultPrivacyLevel, n),
                d = zo(c.target, l, c.attributeName, e),
                f = void 0;
            if ("value" === c.attributeName) {
                var p = Vn(c.target, l);
                if (void 0 === p) continue;
                f = p
            } else f = "string" == typeof d ? d : null;
            var v = a.get(c.target);
            v || (v = {
                id: X(c.target),
                attributes: {}
            }, r.push(v), a.set(c.target, v)), v.attributes[c.attributeName] = f
        }
    }
    return r
}

function fh(t) {
    t.sort(function(t, e) {
        var n = t.compareDocumentPosition(e);
        return n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_CONTAINS || n & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : n & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
    })
}

function qo(t, e) {
    xr(t) && e(t.shadowRoot), vo(t, function(t) {
        return qo(t, e)
    })
}

function vh() {
    var t = new WeakMap;
    return {
        set: function(e, n) {
            e === document && !document.scrollingElement || t.set(e === document ? document.scrollingElement : e, n)
        },
        get: function(e) {
            return t.get(e)
        },
        has: function(e) {
            return t.has(e)
        }
    }
}
var ph = function(t, e, n) {
    var r = new Map,
        i = {
            addShadowRoot: function(o) {
                if (!r.has(o)) {
                    var a = Yo(e, t, i, o),
                        s = Wo(t, e, o),
                        u = Ko(t, e, n, o);
                    r.set(o, {
                        flush: function() {
                            return a.flush()
                        },
                        stop: function() {
                            a.stop(), s.stop(), u.stop()
                        }
                    })
                }
            },
            removeShadowRoot: function(t) {
                var e = r.get(t);
                e && (e.stop(), r.delete(t))
            },
            stop: function() {
                r.forEach(function(t) {
                    return (0, t.stop)()
                })
            },
            flush: function() {
                r.forEach(function(t) {
                    return (0, t.flush)()
                })
            }
        };
    return i
};

function hh(t, e, n, r, i, o) {
    var a = function(n, i) {
        void 0 === n && (n = D()), void 0 === i && (i = {
            status: 0,
            elementsScrollPositions: t,
            shadowRootsController: e
        });
        var o = De(),
            a = o.width,
            s = [{
                data: {
                    height: o.height,
                    href: window.location.href,
                    width: a
                },
                type: ht.Meta,
                timestamp: n
            }, {
                data: {
                    has_focus: document.hasFocus()
                },
                type: ht.Focus,
                timestamp: n
            }, {
                data: {
                    node: jp(document, r, i),
                    initialOffset: {
                        left: No(),
                        top: Pn()
                    }
                },
                type: ht.FullSnapshot,
                timestamp: n
            }];
        return window.visualViewport && s.push({
            data: Ho(window.visualViewport),
            type: ht.VisualViewport,
            timestamp: n
        }), s
    };
    return o(a()), {
        stop: n.subscribe(2, function(n) {
            i(), o(a(n.startClocks.timeStamp, {
                shadowRootsController: e,
                status: 1,
                elementsScrollPositions: t
            }))
        }).unsubscribe
    }
}

function mh() {
    var t = new WeakMap,
        e = 1;
    return {
        getIdForEvent: function(n) {
            return t.has(n) || t.set(n, e++), t.get(n)
        }
    }
}

function gh(t) {
    var e = t.emit,
        n = t.configuration,
        r = t.lifeCycle;
    if (!e) throw new Error("emit function is required");
    var i = function(n) {
            e(n), wr("record", {
                record: n
            }), _p(t.viewHistory.findView().id)
        },
        o = vh(),
        a = ph(n, i, o),
        s = hh(o, a, r, n, u, function(t) {
            return t.forEach(function(t) {
                return i(t)
            })
        }).stop;

    function u() {
        a.flush(), l.flush()
    }
    var c = mh(),
        l = Yo(i, n, a, document),
        d = [l, qp(n, i), Xp(n, i, c), Ko(n, i, o, document), Zp(n, i), Wo(n, i), th(n, i), eh(i), rh(n, i), Qp(n, i), nh(r, i, c), ah(r, function(t) {
            u(), i(t)
        })];
    return {
        stop: function() {
            a.stop(), d.forEach(function(t) {
                return t.stop()
            }), s()
        },
        flushMutations: u,
        shadowRootsController: a
    }
}

function _h(t, e, n) {
    var r = new FormData;
    r.append("segment", new Blob([t], {
        type: "application/octet-stream"
    }), "".concat(e.session.id, "-").concat(e.start));
    var i = S({
            raw_segment_size: n,
            compressed_segment_size: t.byteLength
        }, e),
        o = JSON.stringify(i);
    return r.append("event", new Blob([o], {
        type: "application/json"
    })), {
        data: r,
        bytesCount: t.byteLength
    }
}

function bh(t) {
    var e = t.context,
        n = t.creationReason,
        r = t.encoder,
        i = 0,
        o = e.view.id,
        a = S({
            start: 1 / 0,
            end: -1 / 0,
            creation_reason: n,
            records_count: 0,
            has_full_snapshot: !1,
            index_in_view: mp(o),
            source: "browser"
        }, e);
    return gp(o), {
        addRecord: function(t, e) {
            a.start = Math.min(a.start, t.timestamp), a.end = Math.max(a.end, t.timestamp), a.records_count += 1, a.has_full_snapshot || (a.has_full_snapshot = t.type === ht.FullSnapshot);
            var n = r.isEmpty ? '{"records":[' : ",";
            r.write(n + JSON.stringify(t), function(t) {
                e(i += t)
            })
        },
        flush: function(t) {
            if (r.isEmpty) throw new Error("Empty segment flushed");
            r.write("],".concat(JSON.stringify(a).slice(1), "\n")), r.finish(function(e) {
                bp(a.view.id, e.rawBytesCount), t(a, e)
            })
        }
    }
}
var yh = 5 * j,
    Xo = 6e4;

function Sh(t, e, n, r, i, o) {
    return Eh(t, function() {
        return wh(e.applicationId, n, r)
    }, i, o)
}

function Eh(t, e, n, r) {
    var i = {
            status: 0,
            nextSegmentCreationReason: "init"
        },
        o = t.subscribe(2, function() {
            s("view_change")
        }).unsubscribe,
        a = t.subscribe(11, function(t) {
            s(t.reason)
        }).unsubscribe;

    function s(t) {
        1 === i.status && (i.segment.flush(function(e, r) {
            var i = _h(r.output, e, r.rawBytesCount);
            Mi(t) ? n.sendOnExit(i) : n.send(i)
        }), tt(i.expirationTimeoutId)), i = "stop" !== t ? {
            status: 0,
            nextSegmentCreationReason: t
        } : {
            status: 2
        }
    }
    return {
        addRecord: function(t) {
            if (2 !== i.status) {
                if (0 === i.status) {
                    var n = e();
                    if (!n) return;
                    i = {
                        status: 1,
                        segment: bh({
                            encoder: r,
                            context: n,
                            creationReason: i.nextSegmentCreationReason
                        }),
                        expirationTimeoutId: B(function() {
                            s("segment_duration_limit")
                        }, yh)
                    }
                }
                i.segment.addRecord(t, function(t) {
                    t > Xo && s("segment_bytes_limit")
                })
            }
        },
        stop: function() {
            s("stop"), o(), a()
        }
    }
}

function wh(t, e, n) {
    var r = e.findTrackedSession(),
        i = n.findView();
    if (r && i) return {
        application: {
            id: t
        },
        session: {
            id: r.id
        },
        view: {
            id: i.id
        }
    }
}

function Th(t) {
    var e = Bt();
    return {
        addRecord: function(n) {
            var r = t.findView();
            e.send("record", n, r.id)
        }
    }
}

function Ch(t, e, n, r, i, o) {
    var a, s = [],
        u = o || Oi(e.sessionReplayEndpointBuilder, Xo, function(e) {
            t.notify(14, {
                error: e
            }), Vt("Error reported to customer", {
                "error.message": e.message
            })
        });
    if (ft()) a = Th(r).addRecord;
    else {
        var c = Sh(t, e, n, r, u, i);
        a = c.addRecord, s.push(c.stop)
    }
    var l = gh({
        emit: a,
        configuration: e,
        lifeCycle: t,
        viewHistory: r
    }).stop;
    return s.push(l), {
        stop: function() {
            s.forEach(function(t) {
                return t()
            })
        }
    }
}

function Jo(t, e, n) {
    var r, i = 0,
        o = [],
        a = 0,
        s = [],
        u = L(t, e, "message", function(t) {
            var e = t.data;
            if ("wrote" === e.type && e.streamId === n) {
                i += e.additionalBytesCount, o.push(e.result), r = e.trailer;
                var a = s.shift();
                a && a.id === e.id ? a.writeCallback ? a.writeCallback(e.result.byteLength) : a.finishCallback && a.finishCallback() : (u(), Vt("Worker responses received out of order."))
            }
        }).stop;

    function c() {
        var t = 0 === o.length ? new Uint8Array(0) : fs(o.concat(r)),
            e = {
                rawBytesCount: i,
                output: t,
                outputBytesCount: t.byteLength,
                encoding: "deflate"
            };
        return i = 0, o = [], e
    }

    function l() {
        a > 0 && (e.postMessage({
            action: "reset",
            streamId: n
        }), a = 0)
    }
    return {
        isAsync: !0,
        get isEmpty() {
            return 0 === a
        },
        write: function(t, r) {
            e.postMessage({
                action: "write",
                id: a,
                data: t,
                streamId: n
            }), s.push({
                id: a,
                writeCallback: r,
                data: t
            }), a += 1
        },
        finish: function(t) {
            l(), s.length ? (s.forEach(function(t) {
                delete t.writeCallback
            }), s[s.length - 1].finishCallback = function() {
                return t(c())
            }) : t(c())
        },
        finishSync: function() {
            l();
            var t = s.map(function(t) {
                return delete t.writeCallback, delete t.finishCallback, t.data
            }).join("");
            return S(c(), {
                pendingData: t
            })
        },
        estimateEncodedBytesCount: function(t) {
            return t.length / 8
        },
        stop: function() {
            u()
        }
    }
}
var Ih = 30 * j;

function $o(t) {
    return new Worker(t.workerUrl || URL.createObjectURL(new Blob(['!function(){"use strict";function t(t){for(var e=t.reduce((function(t,e){return t+e.length}),0),a=new Uint8Array(e),n=0,r=0,i=t;r<i.length;r++){var s=i[r];a.set(s,n),n+=s.length}return a}function e(t){for(var e=t.length;--e>=0;)t[e]=0}var a=256,n=286,r=30,i=15,s=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),h=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),l=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),_=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=new Array(576);e(o);var d=new Array(60);e(d);var u=new Array(512);e(u);var f=new Array(256);e(f);var c=new Array(29);e(c);var p,g,w,v=new Array(r);function b(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function m(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(v);var y=function(t){return t<256?u[t]:u[256+(t>>>7)]},k=function(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},z=function(t,e,a){t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,k(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},x=function(t,e,a){z(t,a[2*e],a[2*e+1])},A=function(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},U=function(t,e,a){var n,r,s=new Array(16),h=0;for(n=1;n<=i;n++)s[n]=h=h+a[n-1]<<1;for(r=0;r<=e;r++){var l=t[2*r+1];0!==l&&(t[2*r]=A(s[l]++,l))}},I=function(t){var e;for(e=0;e<n;e++)t.dyn_ltree[2*e]=0;for(e=0;e<r;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},B=function(t){t.bi_valid>8?k(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},E=function(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]},S=function(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&E(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!E(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n},C=function(t,e,n){var r,i,l,_,o=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],i=t.pending_buf[t.l_buf+o],o++,0===r?x(t,i,e):(l=f[i],x(t,l+a+1,e),0!==(_=s[l])&&(i-=c[l],z(t,i,_)),r--,l=y(r),x(t,l,n),0!==(_=h[l])&&(r-=v[l],z(t,r,_)))}while(o<t.last_lit);x(t,256,e)},D=function(t,e){var a,n,r,s=e.dyn_tree,h=e.stat_desc.static_tree,l=e.stat_desc.has_stree,_=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=573,a=0;a<_;a++)0!==s[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):s[2*a+1]=0;for(;t.heap_len<2;)s[2*(r=t.heap[++t.heap_len]=o<2?++o:0)]=1,t.depth[r]=0,t.opt_len--,l&&(t.static_len-=h[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;a>=1;a--)S(t,s,a);r=_;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],S(t,s,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,s[2*r]=s[2*a]+s[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,s[2*a+1]=s[2*n+1]=r,t.heap[1]=r++,S(t,s,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,n,r,s,h,l,_=e.dyn_tree,o=e.max_code,d=e.stat_desc.static_tree,u=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(s=0;s<=i;s++)t.bl_count[s]=0;for(_[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<573;a++)(s=_[2*_[2*(n=t.heap[a])+1]+1]+1)>p&&(s=p,g++),_[2*n+1]=s,n>o||(t.bl_count[s]++,h=0,n>=c&&(h=f[n-c]),l=_[2*n],t.opt_len+=l*(s+h),u&&(t.static_len+=l*(d[2*n+1]+h)));if(0!==g){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(s=p;0!==s;s--)for(n=t.bl_count[s];0!==n;)(r=t.heap[--a])>o||(_[2*r+1]!==s&&(t.opt_len+=(s-_[2*r+1])*_[2*r],_[2*r+1]=s),n--)}}(t,e),U(s,o,t.bl_count)},j=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(h<_?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[32]++):h<=10?t.bl_tree[34]++:t.bl_tree[36]++,h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4))},M=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++h<l&&r===s)){if(h<_)do{x(t,r,t.bl_tree)}while(0!=--h);else 0!==r?(r!==i&&(x(t,r,t.bl_tree),h--),x(t,16,t.bl_tree),z(t,h-3,2)):h<=10?(x(t,17,t.bl_tree),z(t,h-3,3)):(x(t,18,t.bl_tree),z(t,h-11,7));h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4)}},L=!1,T=function(t,e,a,n){z(t,0+(n?1:0),3),function(t,e,a,n){B(t),n&&(k(t,a),k(t,~a)),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a}(t,e,a,!0)},H=function(t,e,n,r){var i,s,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),D(t,t.l_desc),D(t,t.d_desc),h=function(t){var e;for(j(t,t.dyn_ltree,t.l_desc.max_code),j(t,t.dyn_dtree,t.d_desc.max_code),D(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*_[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=i&&(i=s)):i=s=n+5,n+4<=i&&-1!==e?T(t,e,n,r):4===t.strategy||s===i?(z(t,2+(r?1:0),3),C(t,o,d)):(z(t,4+(r?1:0),3),function(t,e,a,n){var r;for(z(t,e-257,5),z(t,a-1,5),z(t,n-4,4),r=0;r<n;r++)z(t,t.bl_tree[2*_[r]+1],3);M(t,t.dyn_ltree,e-1),M(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),C(t,t.dyn_ltree,t.dyn_dtree)),I(t),r&&B(t)},R={_tr_init:function(t){L||(!function(){var t,e,a,_,m,y=new Array(16);for(a=0,_=0;_<28;_++)for(c[_]=a,t=0;t<1<<s[_];t++)f[a++]=_;for(f[a-1]=_,m=0,_=0;_<16;_++)for(v[_]=m,t=0;t<1<<h[_];t++)u[m++]=_;for(m>>=7;_<r;_++)for(v[_]=m<<7,t=0;t<1<<h[_]-7;t++)u[256+m++]=_;for(e=0;e<=i;e++)y[e]=0;for(t=0;t<=143;)o[2*t+1]=8,t++,y[8]++;for(;t<=255;)o[2*t+1]=9,t++,y[9]++;for(;t<=279;)o[2*t+1]=7,t++,y[7]++;for(;t<=287;)o[2*t+1]=8,t++,y[8]++;for(U(o,287,y),t=0;t<r;t++)d[2*t+1]=5,d[2*t]=A(t,5);p=new b(o,s,257,n,i),g=new b(d,h,0,r,i),w=new b(new Array(0),l,0,19,7)}(),L=!0),t.l_desc=new m(t.dyn_ltree,p),t.d_desc=new m(t.dyn_dtree,g),t.bl_desc=new m(t.bl_tree,w),t.bi_buf=0,t.bi_valid=0,I(t)},_tr_stored_block:T,_tr_flush_block:H,_tr_tally:function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(f[n]+a+1)]++,t.dyn_dtree[2*y(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){z(t,2,3),x(t,256,o),function(t){16===t.bi_valid?(k(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},K=function(t,e,a,n){for(var r=65535&t,i=t>>>16&65535,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16},N=new Uint32Array(function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}()),O=function(t,e,a,n){var r=N,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return~t},q={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},F=0,G=2,J=3,P=4,Q=0,V=1,W=-1,X=0,Y=8,Z=R._tr_init,$=R._tr_stored_block,tt=R._tr_flush_block,et=R._tr_tally,at=R._tr_align,nt=F,rt=1,it=J,st=P,ht=5,lt=Q,_t=V,ot=-2,dt=-3,ut=-5,ft=W,ct=1,pt=2,gt=3,wt=4,vt=X,bt=2,mt=Y,yt=258,kt=262,zt=103,xt=113,At=666,Ut=function(t,e){return t.msg=q[e],e},It=function(t){return(t<<1)-(t>4?9:0)},Bt=function(t){for(var e=t.length;--e>=0;)t[e]=0},Et=function(t,e,a){return(e<<t.hash_shift^a)&t.hash_mask},St=function(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},Ct=function(t,e){tt(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,St(t.strm)},Dt=function(t,e){t.pending_buf[t.pending++]=e},jt=function(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},Mt=function(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-kt?t.strstart-(t.w_size-kt):0,_=t.window,o=t.w_mask,d=t.prev,u=t.strstart+yt,f=_[i+s-1],c=_[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do{if(_[(a=e)+s]===c&&_[a+s-1]===f&&_[a]===_[i]&&_[++a]===_[i+1]){i+=2,a++;do{}while(_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&i<u);if(n=yt-(u-i),i=u-yt,n>s){if(t.match_start=e,s=n,n>=h)break;f=_[i+s-1],c=_[i+s]}}}while((e=d[e&o])>l&&0!=--r);return s<=t.lookahead?s:t.lookahead},Lt=function(t){var e,a,n,r,i,s,h,l,_,o,d=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=d+(d-kt)){t.window.set(t.window.subarray(d,d+d),0),t.match_start-=d,t.strstart-=d,t.block_start-=d,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=d?n-d:0}while(--a);e=a=d;do{n=t.prev[--e],t.prev[e]=n>=d?n-d:0}while(--a);r+=d}if(0===t.strm.avail_in)break;if(s=t.strm,h=t.window,l=t.strstart+t.lookahead,_=r,o=void 0,(o=s.avail_in)>_&&(o=_),a=0===o?0:(s.avail_in-=o,h.set(s.input.subarray(s.next_in,s.next_in+o),l),1===s.state.wrap?s.adler=K(s.adler,h,o,l):2===s.state.wrap&&(s.adler=O(s.adler,h,o,l)),s.next_in+=o,s.total_in+=o,o),t.lookahead+=a,t.lookahead+t.insert>=3)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=Et(t,t.ins_h,t.window[i+1]);t.insert&&(t.ins_h=Et(t,t.ins_h,t.window[i+3-1]),t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<kt&&0!==t.strm.avail_in)},Tt=function(t,e){for(var a,n;;){if(t.lookahead<kt){if(Lt(t),t.lookahead<kt&&e===nt)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-kt&&(t.match_length=Mt(t,a)),t.match_length>=3)if(n=et(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=Et(t,t.ins_h,t.window[t.strstart+1]);else n=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2},Ht=function(t,e){for(var a,n,r;;){if(t.lookahead<kt){if(Lt(t),t.lookahead<kt&&e===nt)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-kt&&(t.match_length=Mt(t,a),t.match_length<=5&&(t.strategy===ct||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,n=et(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,n&&(Ct(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((n=et(t,0,t.window[t.strstart-1]))&&Ct(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=et(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2};function Rt(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}var Kt=[new Rt(0,0,0,0,(function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Lt(t),0===t.lookahead&&e===nt)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,Ct(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-kt&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(Ct(t,!1),t.strm.avail_out),1)})),new Rt(4,4,8,4,Tt),new Rt(4,5,16,8,Tt),new Rt(4,6,32,32,Tt),new Rt(4,4,16,16,Ht),new Rt(8,16,32,32,Ht),new Rt(8,16,128,128,Ht),new Rt(8,32,128,256,Ht),new Rt(32,128,258,1024,Ht),new Rt(32,258,258,4096,Ht)];function Nt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=mt,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),Bt(this.dyn_ltree),Bt(this.dyn_dtree),Bt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),Bt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),Bt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}var Ot=function(t){if(!t||!t.state)return Ut(t,ot);t.total_in=t.total_out=0,t.data_type=bt;var e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:xt,t.adler=2===e.wrap?0:1,e.last_flush=nt,Z(e),lt},qt=function(t){var e,a=Ot(t);return a===lt&&((e=t.state).window_size=2*e.w_size,Bt(e.head),e.max_lazy_match=Kt[e.level].max_lazy,e.good_match=Kt[e.level].good_length,e.nice_match=Kt[e.level].nice_length,e.max_chain_length=Kt[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),a},Ft=function(t,e,a,n,r,i){if(!t)return ot;var s=1;if(e===ft&&(e=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),r<1||r>9||a!==mt||n<8||n>15||e<0||e>9||i<0||i>wt)return Ut(t,ot);8===n&&(n=9);var h=new Nt;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=n,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=r+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+3-1)/3),h.window=new Uint8Array(2*h.w_size),h.head=new Uint16Array(h.hash_size),h.prev=new Uint16Array(h.w_size),h.lit_bufsize=1<<r+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new Uint8Array(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=i,h.method=a,qt(t)},Gt={deflateInit:function(t,e){return Ft(t,e,mt,15,8,vt)},deflateInit2:Ft,deflateReset:qt,deflateResetKeep:Ot,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?ot:(t.state.gzhead=e,lt):ot},deflate:function(t,e){var a,n;if(!t||!t.state||e>ht||e<0)return t?Ut(t,ot):ot;var r=t.state;if(!t.output||!t.input&&0!==t.avail_in||r.status===At&&e!==st)return Ut(t,0===t.avail_out?ut:ot);r.strm=t;var i=r.last_flush;if(r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,Dt(r,31),Dt(r,139),Dt(r,8),r.gzhead?(Dt(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),Dt(r,255&r.gzhead.time),Dt(r,r.gzhead.time>>8&255),Dt(r,r.gzhead.time>>16&255),Dt(r,r.gzhead.time>>24&255),Dt(r,9===r.level?2:r.strategy>=pt||r.level<2?4:0),Dt(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(Dt(r,255&r.gzhead.extra.length),Dt(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=O(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,9===r.level?2:r.strategy>=pt||r.level<2?4:0),Dt(r,3),r.status=xt);else{var s=mt+(r.w_bits-8<<4)<<8;s|=(r.strategy>=pt||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(s|=32),s+=31-s%31,r.status=xt,jt(r,s),0!==r.strstart&&(jt(r,t.adler>>>16),jt(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending!==r.pending_buf_size));)Dt(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,Dt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,Dt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.status=zt)}else r.status=zt;if(r.status===zt&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&St(t),r.pending+2<=r.pending_buf_size&&(Dt(r,255&t.adler),Dt(r,t.adler>>8&255),t.adler=0,r.status=xt)):r.status=xt),0!==r.pending){if(St(t),0===t.avail_out)return r.last_flush=-1,lt}else if(0===t.avail_in&&It(e)<=It(i)&&e!==st)return Ut(t,ut);if(r.status===At&&0!==t.avail_in)return Ut(t,ut);if(0!==t.avail_in||0!==r.lookahead||e!==nt&&r.status!==At){var h=r.strategy===pt?function(t,e){for(var a;;){if(0===t.lookahead&&(Lt(t),0===t.lookahead)){if(e===nt)return 1;break}if(t.match_length=0,a=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2}(r,e):r.strategy===gt?function(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=yt){if(Lt(t),t.lookahead<=yt&&e===nt)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=s[r=t.strstart-1])===s[++r]&&n===s[++r]&&n===s[++r]){i=t.strstart+yt;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=yt-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=et(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2}(r,e):Kt[r.level].func(r,e);if(3!==h&&4!==h||(r.status=At),1===h||3===h)return 0===t.avail_out&&(r.last_flush=-1),lt;if(2===h&&(e===rt?at(r):e!==ht&&($(r,0,0,!1),e===it&&(Bt(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),St(t),0===t.avail_out))return r.last_flush=-1,lt}return e!==st?lt:r.wrap<=0?_t:(2===r.wrap?(Dt(r,255&t.adler),Dt(r,t.adler>>8&255),Dt(r,t.adler>>16&255),Dt(r,t.adler>>24&255),Dt(r,255&t.total_in),Dt(r,t.total_in>>8&255),Dt(r,t.total_in>>16&255),Dt(r,t.total_in>>24&255)):(jt(r,t.adler>>>16),jt(r,65535&t.adler)),St(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?lt:_t)},deflateEnd:function(t){if(!t||!t.state)return ot;var e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==zt&&e!==xt&&e!==At?Ut(t,ot):(t.state=null,e===xt?Ut(t,dt):lt)},deflateSetDictionary:function(t,e){var a=e.length;if(!t||!t.state)return ot;var n=t.state,r=n.wrap;if(2===r||1===r&&42!==n.status||n.lookahead)return ot;if(1===r&&(t.adler=K(t.adler,e,a,0)),n.wrap=0,a>=n.w_size){0===r&&(Bt(n.head),n.strstart=0,n.block_start=0,n.insert=0);var i=new Uint8Array(n.w_size);i.set(e.subarray(a-n.w_size,a),0),e=i,a=n.w_size}var s=t.avail_in,h=t.next_in,l=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Lt(n);n.lookahead>=3;){var _=n.strstart,o=n.lookahead-2;do{n.ins_h=Et(n,n.ins_h,n.window[_+3-1]),n.prev[_&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=_,_++}while(--o);n.strstart=_,n.lookahead=2,Lt(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=h,t.input=l,t.avail_in=s,n.wrap=r,lt},deflateInfo:"pako deflate (from Nodeca project)"};for(var Jt=new Uint8Array(256),Pt=0;Pt<256;Pt++)Jt[Pt]=Pt>=252?6:Pt>=248?5:Pt>=240?4:Pt>=224?3:Pt>=192?2:1;Jt[254]=Jt[254]=1;var Qt=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},Vt=Object.prototype.toString,Wt=F,Xt=G,Yt=J,Zt=P,$t=Q,te=V,ee=W,ae=X,ne=Y;function re(){this.options={level:ee,method:ne,chunkSize:16384,windowBits:15,memLevel:8,strategy:ae};var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Qt,this.strm.avail_out=0;var e=Gt.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==$t)throw new Error(q[e]);if(t.header&&Gt.deflateSetHeader(this.strm,t.header),t.dictionary){var a;if(a="[object ArrayBuffer]"===Vt.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(e=Gt.deflateSetDictionary(this.strm,a))!==$t)throw new Error(q[e]);this._dict_set=!0}}function ie(t,e,a){try{t.postMessage({type:"errored",error:e,streamId:a})}catch(n){t.postMessage({type:"errored",error:String(e),streamId:a})}}function se(t){var e=t.strm.adler;return new Uint8Array([3,0,e>>>24&255,e>>>16&255,e>>>8&255,255&e])}re.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;for(n=e===~~e?e:!0===e?Zt:Wt,"[object ArrayBuffer]"===Vt.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;;)if(0===r.avail_out&&(r.output=new Uint8Array(i),r.next_out=0,r.avail_out=i),(n===Xt||n===Yt)&&r.avail_out<=6)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else{if((a=Gt.deflate(r,n))===te)return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),a=Gt.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===$t;if(0!==r.avail_out){if(n>0&&r.next_out>0)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else if(0===r.avail_in)break}else this.onData(r.output)}return!0},re.prototype.onData=function(t){this.chunks.push(t)},re.prototype.onEnd=function(t){t===$t&&(this.result=function(t){for(var e=0,a=0,n=t.length;a<n;a++)e+=t[a].length;for(var r=new Uint8Array(e),i=0,s=0,h=t.length;i<h;i++){var l=t[i];r.set(l,s),s+=l.length}return r}(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},function(e){void 0===e&&(e=self);try{var a=new Map;e.addEventListener("message",(function(n){try{var r=function(e,a){switch(a.action){case"init":return{type:"initialized",version:"5.35.1"};case"write":var n=e.get(a.streamId);n||(n=new re,e.set(a.streamId,n));var r=n.chunks.length,i=function(t){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);var e,a,n,r,i,s=t.length,h=0;for(r=0;r<s;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),h+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(h),i=0,r=0;i<h;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),a<128?e[i++]=a:a<2048?(e[i++]=192|a>>>6,e[i++]=128|63&a):a<65536?(e[i++]=224|a>>>12,e[i++]=128|a>>>6&63,e[i++]=128|63&a):(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63,e[i++]=128|a>>>6&63,e[i++]=128|63&a);return e}(a.data);return n.push(i,G),{type:"wrote",id:a.id,streamId:a.streamId,result:t(n.chunks.slice(r)),trailer:se(n),additionalBytesCount:i.length};case"reset":e.delete(a.streamId)}}(a,n.data);r&&e.postMessage(r)}catch(t){ie(e,t,n.data&&"streamId"in n.data?n.data.streamId:void 0)}}))}catch(t){ie(e,t)}}()}();'])))
}
var U = {
    status: 0
};

function Zo(t, e, n, r) {
    switch (void 0 === r && (r = $o), 0 === U.status && Ah(t, e, r), U.status) {
        case 1:
            return U.initializationFailureCallbacks.push(n), U.worker;
        case 3:
            return U.worker
    }
}

function Oa() {
    return U.status
}

function Ah(t, e, n) {
    void 0 === n && (n = $o);
    try {
        var r = n(t),
            i = L(t, r, "error", function(n) {
                sn(t, e, n)
            }).stop,
            o = L(t, r, "message", function(n) {
                var r = n.data;
                "errored" === r.type ? sn(t, e, r.error, r.streamId) : "initialized" === r.type && xh(r.version)
            }).stop;
        r.postMessage({
            action: "init"
        }), B(function() {
            return Rh(e)
        }, Ih);
        U = {
            status: 1,
            worker: r,
            stop: function() {
                i(), o()
            },
            initializationFailureCallbacks: []
        }
    } catch (n) {
        sn(t, e, n)
    }
}

function Rh(t) {
    1 === U.status && (A.error("".concat(t, " failed to start: a timeout occurred while initializing the Worker")), U.initializationFailureCallbacks.forEach(function(t) {
        return t()
    }), U = {
        status: 2
    })
}

function xh(t) {
    1 === U.status && (U = {
        status: 3,
        worker: U.worker,
        stop: U.stop,
        version: t
    })
}

function sn(t, e, n, r) {
    if (1 === U.status || 0 === U.status) {
        if (A.error("".concat(e, " failed to start: an error occurred while creating the Worker:"), n), n instanceof Event || n instanceof Error && kh(n.message)) {
            var i = void 0;
            i = t.workerUrl ? "Please make sure the Worker URL ".concat(t.workerUrl, " is correct and CSP is correctly configured.") : "Please make sure CSP is correctly configured.", A.error("".concat(i, " See documentation at ").concat(hr, "/integrations/content_security_policy_logs/#use-csp-with-real-user-monitoring-and-session-replay"))
        } else fr(n);
        1 === U.status && U.initializationFailureCallbacks.forEach(function(t) {
            return t()
        }), U = {
            status: 2
        }
    } else fr(n, {
        worker_version: 3 === U.status && U.version,
        stream_id: r
    })
}

function kh(t) {
    return q(t, "Content Security Policy") || q(t, "requires 'TrustedScriptURL'")
}

function Qo() {
    return "function" == typeof Array.from && "function" == typeof CSSSupportsRule && "function" == typeof URL.createObjectURL && "forEach" in NodeList.prototype
}

function Oh(t, e, n, r) {
    var i = e.findTrackedSession(),
        o = Lh(i, r);
    return fp(t, {
        viewContext: n.findView(),
        errorType: o,
        session: i
    })
}

function Lh(t, e) {
    return Qo() ? t ? 0 === t.sessionReplay ? "incorrect-session-plan" : e ? void 0 : "replay-not-started" : "rum-not-tracked" : "browser-not-supported"
}

function Nh(t, e, n, r, i, o) {
    var a, s = 0;

    function u(u) {
        var c = n.findTrackedSession();
        Mh(c, u) ? s = 1 : Dh(s) || (s = 2, An(t, "interactive", function() {
            if (2 === s) {
                var u = o();
                if (!u) return void(s = 0);
                a = i(e, t, n, r, u).stop, s = 3
            }
        }), Ph(c, u) && n.setForcedReplay())
    }

    function c() {
        0 !== s && 3 === s && a ? .(), s = 0
    }
    return e.subscribe(9, function() {
        (2 === s || 3 === s) && (c(), s = 1)
    }), e.subscribe(11, function(t) {
        t.reason === ce.UNLOADING && c()
    }), e.subscribe(10, function() {
        1 === s && u()
    }), {
        start: u,
        stop: c,
        getSessionReplayLink: function() {
            return Oh(t, n, r, 0 !== s)
        },
        isRecording: function() {
            return 3 === s
        }
    }
}

function Mh(t, e) {
    return !t || 0 === t.sessionReplay && (!e || !e.force)
}

function Dh(t) {
    return 2 === t || 3 === t
}

function Ph(t, e) {
    return e && e.force && 0 === t.sessionReplay
}

function Uh() {
    var t = 0;
    return {
        strategy: {
            start: function() {
                t = 1
            },
            stop: function() {
                t = 2
            },
            isRecording: function() {
                return !1
            },
            getSessionReplayLink: I
        },
        shouldStartImmediately: function(e) {
            return 1 === t || 0 === t && !e.startSessionReplayRecordingManually
        }
    }
}

function Vh(t, e) {
    if (ft() && !Li("records") || !Qo()) return {
        start: I,
        stop: I,
        getReplayStats: function() {},
        onRumStart: I,
        isRecording: function() {
            return !1
        },
        getSessionReplayLink: function() {}
    };
    var n = Uh(),
        r = n.strategy,
        i = n.shouldStartImmediately;
    return {
        start: function(t) {
            return r.start(t)
        },
        stop: function() {
            return r.stop()
        },
        getSessionReplayLink: function() {
            return r.getSessionReplayLink()
        },
        onRumStart: function(n, o, a, s, u) {
            var c;
            r = Nh(o, n, a, s, t, function() {
                return c || (u ? ? (u = Zo(o, "Datadog Session Replay", function() {
                    r.stop()
                }, e)), u && (c = Jo(o, u, 1))), c
            }), i(o) && r.start()
        },
        isRecording: function() {
            return 3 === Oa() && r.isRecording()
        },
        getReplayStats: function(t) {
            return 3 === Oa() ? yp(t) : void 0
        }
    }
}
var Bh = Vh(Ch),
    hn = tl(cp, Bh, {
        startDeflateWorker: Zo,
        createDeflateEncoder: Jo
    });
di(Tt(), "DD_RUM", hn);
const zh = t => {
        if (!t.isEnabled || !t.clientToken) return;
        const e = es();
        if (!e) return;
        const n = () => ns(e).analytics ? "granted" : "not-granted",
            r = n(),
            i = window;
        return i.__datadogConsentInitialized || (t.applicationId && hn.init({
            service: t.service,
            applicationId: t.applicationId,
            clientToken: t.clientToken,
            site: t.site,
            env: t.env,
            sessionSampleRate: t.isDebug ? 100 : 25,
            sessionReplaySampleRate: t.isDebug ? 100 : 10,
            trackUserInteractions: !0,
            trackResources: !0,
            trackLongTasks: !0,
            defaultPrivacyLevel: "mask-user-input",
            trackingConsent: r
        }), fn.init({
            service: t.service,
            clientToken: t.clientToken,
            site: t.site,
            env: t.env,
            forwardErrorsToLogs: !0,
            forwardConsoleLogs: "all",
            forwardReports: "all",
            sessionSampleRate: t.isDebug ? 100 : 25,
            trackingConsent: r
        }), i.__datadogConsentInitialized = !0, i.__datadogLastTrackingConsent = r), rs(e, () => {
            const e = n();
            e !== i.__datadogLastTrackingConsent && (t.applicationId && hn.setTrackingConsent(e), fn.setTrackingConsent(e), i.__datadogLastTrackingConsent = e)
        })
    },
    La = ts("datadog-config");
La && zh(La);