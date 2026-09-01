import {
    r as P
} from "./index.CtKCFvq0.js";
import {
    j as Me
} from "./jsx-runtime.u17CrQMm.js";
const Hs = P.createContext({});

function Co(t) {
    const e = P.useRef(null);
    return null === e.current && (e.current = t()), e.current
}
const Mo = typeof window < "u",
    Do = Mo ? P.useLayoutEffect : P.useEffect,
    ae = P.createContext(null);

function Qe(t, e) {
    -1 === t.indexOf(e) && t.push(e)
}

function Zt(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
const Q = (t, e, n) => n > e ? e : n < t ? t : n;
let tn = () => {};
const st = {},
    Gs = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    $s = t => "object" == typeof t && null !== t,
    zs = t => /^0[^.\s]+$/u.test(t);

function _s(t) {
    let e;
    return () => (void 0 === e && (e = t()), e)
}
const G = t => t,
    It = (...t) => t.reduce((t, e) => n => e(t(n))),
    Et = (t, e, n) => {
        const i = e - t;
        return i ? (n - t) / i : 1
    };
class en {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Qe(this.subscriptions, t), () => Zt(this.subscriptions, t)
    }
    notify(t, e, n) {
        const i = this.subscriptions.length;
        if (i)
            if (1 === i) this.subscriptions[0](t, e, n);
            else
                for (let s = 0; s < i; s++) {
                    const i = this.subscriptions[s];
                    i && i(t, e, n)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const W = t => 1e3 * t,
    H = t => t / 1e3,
    Xs = (t, e) => e ? t * (1e3 / e) : 0,
    Ys = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    Eo = 1e-7,
    Ro = 12;

function Lo(t, e, n, i, s) {
    let o, r, a = 0;
    do {
        r = e + (n - e) / 2, o = Ys(r, i, s) - t, o > 0 ? n = r : e = r
    } while (Math.abs(o) > Eo && ++a < 12);
    return r
}

function Ft(t, e, n, i) {
    if (t === e && n === i) return G;
    return s => 0 === s || 1 === s ? s : Ys((e => Lo(e, 0, 1, t, n))(s), e, i)
}
const qs = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    Zs = t => e => 1 - t(1 - e),
    Js = Ft(.33, 1.53, .69, .99),
    nn = Zs(Js),
    Qs = qs(nn),
    ti = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * nn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    sn = t => 1 - Math.sin(Math.acos(t)),
    ei = Zs(sn),
    ni = qs(sn),
    ko = Ft(.42, 0, 1, 1),
    Bo = Ft(0, 0, .58, 1),
    si = Ft(.42, 0, .58, 1),
    Io = t => Array.isArray(t) && "number" != typeof t[0],
    ii = t => Array.isArray(t) && "number" == typeof t[0],
    Fo = {
        linear: G,
        easeIn: ko,
        easeInOut: si,
        easeOut: Bo,
        circIn: sn,
        circInOut: ni,
        circOut: ei,
        backIn: nn,
        backInOut: Qs,
        backOut: Js,
        anticipate: ti
    },
    Oo = t => "string" == typeof t,
    Mn = t => {
        if (ii(t)) {
            tn(4 === t.length);
            const [e, n, i, s] = t;
            return Ft(e, n, i, s)
        }
        return Oo(t) ? Fo[t] : t
    },
    Nt = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function jo(t) {
    let e = new Set,
        n = new Set,
        i = !1,
        s = !1;
    const o = new WeakSet;
    let r = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function a(e) {
        o.has(e) && (l.schedule(e), t()), e(r)
    }
    const l = {
        schedule: (t, s = !1, r = !1) => {
            const a = r && i ? e : n;
            return s && o.add(t), a.add(t), t
        },
        cancel: t => {
            n.delete(t), o.delete(t)
        },
        process: t => {
            if (r = t, i) return void(s = !0);
            i = !0;
            const o = e;
            e = n, n = o, e.forEach(a), e.clear(), i = !1, s && (s = !1, l.process(t))
        }
    };
    return l
}
const No = 40;

function oi(t, e) {
    let n = !1,
        i = !0;
    const s = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = () => n = !0,
        r = Nt.reduce((t, e) => (t[e] = jo(o), t), {}),
        {
            setup: a,
            read: l,
            resolveKeyframes: u,
            preUpdate: h,
            update: c,
            preRender: d,
            render: p,
            postRender: m
        } = r,
        f = () => {
            const o = st.useManualTiming,
                r = o ? s.timestamp : performance.now();
            n = !1, o || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(r - s.timestamp, 40), 1)), s.timestamp = r, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), h.process(s), c.process(s), d.process(s), p.process(s), m.process(s), s.isProcessing = !1, n && e && (i = !1, t(f))
        };
    return {
        schedule: Nt.reduce((e, o) => {
            const a = r[o];
            return e[o] = (e, o = !1, r = !1) => (n || (n = !0, i = !0, s.isProcessing || t(f)), a.schedule(e, o, r)), e
        }, {}),
        cancel: t => {
            for (let e = 0; e < Nt.length; e++) r[Nt[e]].cancel(t)
        },
        state: s,
        steps: r
    }
}
const {
    schedule: M,
    cancel: it,
    state: F,
    steps: fe
} = oi(typeof requestAnimationFrame < "u" ? requestAnimationFrame : G, !0);
let Ht;

function Uo() {
    Ht = void 0
}
const j = {
        now: () => (void 0 === Ht && j.set(F.isProcessing || st.useManualTiming ? F.timestamp : performance.now()), Ht),
        set: t => {
            Ht = t, queueMicrotask(Uo)
        }
    },
    ri = t => e => "string" == typeof e && e.startsWith(t),
    on = ri("--"),
    Wo = ri("var(--"),
    rn = t => !!Wo(t) && Ko.test(t.split("/*")[0].trim()),
    Ko = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function Dn(t) {
    return "string" == typeof t && t.split("/*")[0].includes("var(--")
}
const wt = {
        test: t => "number" == typeof t,
        parse: parseFloat,
        transform: t => t
    },
    Rt = { ...wt,
        transform: t => Q(0, 1, t)
    },
    Ut = { ...wt,
        default: 1
    },
    Vt = t => Math.round(1e5 * t) / 1e5,
    an = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Ho(t) {
    return null == t
}
const Go = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    ln = (t, e) => n => !!("string" == typeof n && Go.test(n) && n.startsWith(t) || e && !Ho(n) && Object.prototype.hasOwnProperty.call(n, e)),
    ai = (t, e, n) => i => {
        if ("string" != typeof i) return i;
        const [s, o, r, a] = i.match(an);
        return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [n]: parseFloat(r),
            alpha: void 0 !== a ? parseFloat(a) : 1
        }
    },
    $o = t => Q(0, 255, t),
    de = { ...wt,
        transform: t => Math.round($o(t))
    },
    ct = {
        test: ln("rgb", "red"),
        parse: ai("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: i = 1
        }) => "rgba(" + de.transform(t) + ", " + de.transform(e) + ", " + de.transform(n) + ", " + Vt(Rt.transform(i)) + ")"
    };

function zo(t) {
    let e = "",
        n = "",
        i = "",
        s = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(i, 16),
        alpha: s ? parseInt(s, 16) / 255 : 1
    }
}
const De = {
        test: ln("#"),
        parse: zo,
        transform: ct.transform
    },
    Ot = t => ({
        test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    et = Ot("deg"),
    J = Ot("%"),
    T = Ot("px"),
    _o = Ot("vh"),
    Xo = Ot("vw"),
    En = { ...J,
        parse: t => J.parse(t) / 100,
        transform: t => J.transform(100 * t)
    },
    gt = {
        test: ln("hsl", "hue"),
        parse: ai("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: i = 1
        }) => "hsla(" + Math.round(t) + ", " + J.transform(Vt(e)) + ", " + J.transform(Vt(n)) + ", " + Vt(Rt.transform(i)) + ")"
    },
    L = {
        test: t => ct.test(t) || De.test(t) || gt.test(t),
        parse: t => ct.test(t) ? ct.parse(t) : gt.test(t) ? gt.parse(t) : De.parse(t),
        transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? ct.transform(t) : gt.transform(t),
        getAnimatableNone: t => {
            const e = L.parse(t);
            return e.alpha = 0, L.transform(e)
        }
    },
    Yo = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function qo(t) {
    return isNaN(t) && "string" == typeof t && (t.match(an) ? .length || 0) + (t.match(Yo) ? .length || 0) > 0
}
const li = "number",
    ui = "color",
    Zo = "var",
    Jo = "var(",
    Rn = "${}",
    Qo = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function xt(t) {
    const e = t.toString(),
        n = [],
        i = {
            color: [],
            number: [],
            var: []
        },
        s = [];
    let o = 0;
    const r = e.replace(Qo, t => (L.test(t) ? (i.color.push(o), s.push(ui), n.push(L.parse(t))) : t.startsWith(Jo) ? (i.var.push(o), s.push(Zo), n.push(t)) : (i.number.push(o), s.push(li), n.push(parseFloat(t))), ++o, Rn)).split(Rn);
    return {
        values: n,
        split: r,
        indexes: i,
        types: s
    }
}

function tr(t) {
    return xt(t).values
}

function ci({
    split: t,
    types: e
}) {
    const n = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < n; o++)
            if (s += t[o], void 0 !== i[o]) {
                const t = e[o];
                s += t === li ? Vt(i[o]) : t === ui ? L.transform(i[o]) : i[o]
            }
        return s
    }
}

function er(t) {
    return ci(xt(t))
}
const nr = t => "number" == typeof t ? 0 : L.test(t) ? L.getAnimatableNone(t) : t,
    sr = (t, e) => "number" == typeof t ? e ? .trim().endsWith("/") ? t : 0 : nr(t);

function ir(t) {
    const e = xt(t);
    return ci(e)(e.values.map((t, n) => sr(t, e.split[n])))
}
const _ = {
    test: qo,
    parse: tr,
    createTransformer: er,
    getAnimatableNone: ir
};

function pe(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function or({
    hue: t,
    saturation: e,
    lightness: n,
    alpha: i
}) {
    t /= 360, n /= 100;
    let s = 0,
        o = 0,
        r = 0;
    if (e /= 100) {
        const i = n < .5 ? n * (1 + e) : n + e - n * e,
            a = 2 * n - i;
        s = pe(a, i, t + 1 / 3), o = pe(a, i, t), r = pe(a, i, t - 1 / 3)
    } else s = o = r = n;
    return {
        red: Math.round(255 * s),
        green: Math.round(255 * o),
        blue: Math.round(255 * r),
        alpha: i
    }
}

function Jt(t, e) {
    return n => n > 0 ? e : t
}
const C = (t, e, n) => t + (e - t) * n,
    me = (t, e, n) => {
        const i = t * t,
            s = n * (e * e - i) + i;
        return s < 0 ? 0 : Math.sqrt(s)
    },
    rr = [De, ct, gt],
    ar = t => rr.find(e => e.test(t));

function Ln(t) {
    const e = ar(t);
    if (!e) return !1;
    let n = e.parse(t);
    return e === gt && (n = or(n)), n
}
const kn = (t, e) => {
        const n = Ln(t),
            i = Ln(e);
        if (!n || !i) return Jt(t, e);
        const s = { ...n
        };
        return t => (s.red = me(n.red, i.red, t), s.green = me(n.green, i.green, t), s.blue = me(n.blue, i.blue, t), s.alpha = C(n.alpha, i.alpha, t), ct.transform(s))
    },
    Ee = new Set(["none", "hidden"]);

function lr(t, e) {
    return Ee.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function ur(t, e) {
    return n => C(t, e, n)
}

function un(t) {
    return "number" == typeof t ? ur : "string" == typeof t ? rn(t) ? Jt : L.test(t) ? kn : fr : Array.isArray(t) ? hi : "object" == typeof t ? L.test(t) ? kn : cr : Jt
}

function hi(t, e) {
    const n = [...t],
        i = n.length,
        s = t.map((t, n) => un(t)(t, e[n]));
    return t => {
        for (let e = 0; e < i; e++) n[e] = s[e](t);
        return n
    }
}

function cr(t, e) {
    const n = { ...t,
            ...e
        },
        i = {};
    for (const s in n) void 0 !== t[s] && void 0 !== e[s] && (i[s] = un(t[s])(t[s], e[s]));
    return t => {
        for (const e in i) n[e] = i[e](t);
        return n
    }
}

function hr(t, e) {
    const n = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let s = 0; s < e.values.length; s++) {
        const o = e.types[s],
            r = t.indexes[o][i[o]],
            a = t.values[r] ? ? 0;
        n[s] = a, i[o]++
    }
    return n
}
const fr = (t, e) => {
    const n = _.createTransformer(e),
        i = xt(t),
        s = xt(e);
    return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Ee.has(t) && !s.values.length || Ee.has(e) && !i.values.length ? lr(t, e) : It(hi(hr(i, s), s.values), n) : Jt(t, e)
};

function fi(t, e, n) {
    return "number" == typeof t && "number" == typeof e && "number" == typeof n ? C(t, e, n) : un(t)(t, e)
}
const dr = t => {
        const e = ({
            timestamp: e
        }) => t(e);
        return {
            start: (t = !0) => M.update(e, t),
            stop: () => it(e),
            now: () => F.isProcessing ? F.timestamp : j.now()
        }
    },
    di = (t, e, n = 10) => {
        let i = "";
        const s = Math.max(Math.round(e / n), 2);
        for (let e = 0; e < s; e++) i += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
        return `linear(${i.substring(0,i.length-2)})`
    },
    Qt = 2e4;

function cn(t) {
    let e = 0;
    let n = t.next(e);
    for (; !n.done && e < Qt;) e += 50, n = t.next(e);
    return e >= Qt ? 1 / 0 : e
}

function pr(t, e = 100, n) {
    const i = n({ ...t,
            keyframes: [0, e]
        }),
        s = Math.min(cn(i), Qt);
    return {
        type: "keyframes",
        ease: t => i.next(s * t).value / e,
        duration: H(s)
    }
}
const E = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};

function Re(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const mr = 12;

function gr(t, e, n) {
    let i = n;
    for (let n = 1; n < 12; n++) i -= t(i) / e(i);
    return i
}
const ge = .001;

function yr({
    duration: t = E.duration,
    bounce: e = E.bounce,
    velocity: n = E.velocity,
    mass: i = E.mass
}) {
    let s, o, r = 1 - e;
    r = Q(E.minDamping, E.maxDamping, r), t = Q(E.minDuration, E.maxDuration, H(t)), r < 1 ? (s = e => {
        const i = e * r,
            s = i * t,
            o = i - n,
            a = Re(e, r),
            l = Math.exp(-s);
        return ge - o / a * l
    }, o = e => {
        const i = e * r * t,
            o = i * n + n,
            a = Math.pow(r, 2) * Math.pow(e, 2) * t,
            l = Math.exp(-i),
            u = Re(Math.pow(e, 2), r);
        return (-s(e) + ge > 0 ? -1 : 1) * ((o - a) * l) / u
    }) : (s = e => Math.exp(-e * t) * ((e - n) * t + 1) - ge, o = e => Math.exp(-e * t) * (t * t * (n - e)));
    const a = gr(s, o, 5 / t);
    if (t = W(t), isNaN(a)) return {
        stiffness: E.stiffness,
        damping: E.damping,
        duration: t
    }; {
        const e = Math.pow(a, 2) * i;
        return {
            stiffness: e,
            damping: 2 * r * Math.sqrt(i * e),
            duration: t
        }
    }
}
const vr = ["duration", "bounce"],
    xr = ["stiffness", "damping", "mass"];

function Bn(t, e) {
    return e.some(e => void 0 !== t[e])
}

function Tr(t) {
    let e = {
        velocity: E.velocity,
        stiffness: E.stiffness,
        damping: E.damping,
        mass: E.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Bn(t, xr) && Bn(t, vr))
        if (e.velocity = 0, t.visualDuration) {
            const n = t.visualDuration,
                i = 2 * Math.PI / (1.2 * n),
                s = i * i,
                o = 2 * Q(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
            e = { ...e,
                mass: E.mass,
                stiffness: s,
                damping: o
            }
        } else {
            const n = yr({ ...t,
                velocity: 0
            });
            e = { ...e,
                ...n,
                mass: E.mass
            }, e.isResolvedFromDuration = !0
        }
    return e
}

function te(t = E.visualDuration, e = E.bounce) {
    const n = "object" != typeof t ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {
        restSpeed: i,
        restDelta: s
    } = n;
    const o = n.keyframes[0],
        r = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: o
        },
        {
            stiffness: l,
            damping: u,
            mass: h,
            duration: c,
            velocity: d,
            isResolvedFromDuration: p
        } = Tr({ ...n,
            velocity: -H(n.velocity || 0)
        }),
        m = d || 0,
        f = u / (2 * Math.sqrt(l * h)),
        y = r - o,
        g = H(Math.sqrt(l / h)),
        v = Math.abs(y) < 5;
    let x, T, w, P, S, b;
    if (i || (i = v ? E.restSpeed.granular : E.restSpeed.default), s || (s = v ? E.restDelta.granular : E.restDelta.default), f < 1) w = Re(g, f), P = (m + f * g * y) / w, x = t => {
        const e = Math.exp(-f * g * t);
        return r - e * (P * Math.sin(w * t) + y * Math.cos(w * t))
    }, S = f * g * P + y * w, b = f * g * y - P * w, T = t => Math.exp(-f * g * t) * (S * Math.sin(w * t) + b * Math.cos(w * t));
    else if (1 === f) {
        x = t => r - Math.exp(-g * t) * (y + (m + g * y) * t);
        const t = m + g * y;
        T = e => Math.exp(-g * e) * (g * t * e - m)
    } else {
        const t = g * Math.sqrt(f * f - 1);
        x = e => {
            const n = Math.exp(-f * g * e),
                i = Math.min(t * e, 300);
            return r - n * ((m + f * g * y) * Math.sinh(i) + t * y * Math.cosh(i)) / t
        };
        const e = (m + f * g * y) / t,
            n = f * g * e - y * t,
            i = f * g * y - e * t;
        T = e => {
            const s = Math.exp(-f * g * e),
                o = Math.min(t * e, 300);
            return s * (n * Math.sinh(o) + i * Math.cosh(o))
        }
    }
    const M = {
        calculatedDuration: p && c || null,
        velocity: t => W(T(t)),
        next: t => {
            if (!p && f < 1) {
                const e = Math.exp(-f * g * t),
                    n = Math.sin(w * t),
                    o = Math.cos(w * t),
                    l = r - e * (P * n + y * o),
                    u = W(e * (S * n + b * o));
                return a.done = Math.abs(u) <= i && Math.abs(r - l) <= s, a.value = a.done ? r : l, a
            }
            const e = x(t);
            if (p) a.done = t >= c;
            else {
                const n = W(T(t));
                a.done = Math.abs(n) <= i && Math.abs(r - e) <= s
            }
            return a.value = a.done ? r : e, a
        },
        toString: () => {
            const t = Math.min(cn(M), Qt),
                e = di(e => M.next(t * e).value, t, 30);
            return t + "ms " + e
        },
        toTransition: () => {}
    };
    return M
}
te.applyToOptions = t => {
    const e = pr(t, 100, te);
    return t.ease = e.ease, t.duration = W(e.duration), t.type = "keyframes", t
};
const wr = 5;

function pi(t, e, n) {
    const i = Math.max(e - 5, 0);
    return Xs(n - t(i), e - i)
}

function Le({
    keyframes: t,
    velocity: e = 0,
    power: n = .8,
    timeConstant: i = 325,
    bounceDamping: s = 10,
    bounceStiffness: o = 500,
    modifyTarget: r,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: h
}) {
    const c = t[0],
        d = {
            done: !1,
            value: c
        },
        p = t => void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l;
    let m = n * e;
    const f = c + m,
        y = void 0 === r ? f : r(f);
    y !== f && (m = y - c);
    const g = t => -m * Math.exp(-t / i),
        v = t => y + g(t),
        x = t => {
            const e = g(t),
                n = v(t);
            d.done = Math.abs(e) <= u, d.value = d.done ? y : n
        };
    let T, w;
    const P = t => {
        (t => void 0 !== a && t < a || void 0 !== l && t > l)(d.value) && (T = t, w = te({
            keyframes: [d.value, p(d.value)],
            velocity: pi(v, t, d.value),
            damping: s,
            stiffness: o,
            restDelta: u,
            restSpeed: h
        }))
    };
    return P(0), {
        calculatedDuration: null,
        next: t => {
            let e = !1;
            return !w && void 0 === T && (e = !0, x(t), P(t)), void 0 !== T && t >= T ? w.next(t - T) : (!e && x(t), d)
        }
    }
}

function Pr(t, e, n) {
    const i = [],
        s = n || st.mix || fi,
        o = t.length - 1;
    for (let n = 0; n < o; n++) {
        let o = s(t[n], t[n + 1]);
        if (e) {
            const t = Array.isArray(e) ? e[n] || G : e;
            o = It(t, o)
        }
        i.push(o)
    }
    return i
}

function Sr(t, e, {
    clamp: n = !0,
    ease: i,
    mixer: s
} = {}) {
    const o = t.length;
    if (tn(o === e.length), 1 === o) return () => e[0];
    if (2 === o && e[0] === e[1]) return () => e[1];
    const r = t[0] === t[1];
    t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const a = Pr(e, i, s),
        l = a.length,
        u = n => {
            if (r && n < t[0]) return e[0];
            let i = 0;
            if (l > 1)
                for (; i < t.length - 2 && !(n < t[i + 1]); i++);
            const s = Et(t[i], t[i + 1], n);
            return a[i](s)
        };
    return n ? e => u(Q(t[0], t[o - 1], e)) : u
}

function br(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const s = Et(0, e, i);
        t.push(C(n, 1, s))
    }
}

function Ar(t) {
    const e = [0];
    return br(e, t.length - 1), e
}

function Vr(t, e) {
    return t.map(t => t * e)
}

function Cr(t, e) {
    return t.map(() => e || si).splice(0, t.length - 1)
}

function Ct({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: i = "easeInOut"
}) {
    const s = Io(i) ? i.map(Mn) : Mn(i),
        o = {
            done: !1,
            value: e[0]
        },
        r = Sr(Vr(n && n.length === e.length ? n : Ar(e), t), e, {
            ease: Array.isArray(s) ? s : Cr(e, s)
        });
    return {
        calculatedDuration: t,
        next: e => (o.value = r(e), o.done = e >= t, o)
    }
}
const Mr = t => null !== t;

function le(t, {
    repeat: e,
    repeatType: n = "loop"
}, i, s = 1) {
    const o = t.filter(Mr),
        r = s < 0 || e && "loop" !== n && e % 2 == 1 ? 0 : o.length - 1;
    return r && void 0 !== i ? i : o[r]
}
const Dr = {
    decay: Le,
    inertia: Le,
    tween: Ct,
    keyframes: Ct,
    spring: te
};

function mi(t) {
    "string" == typeof t.type && (t.type = Dr[t.type])
}
class hn {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, e) {
        return this.finished.then(t, e)
    }
}
const Er = t => t / 100;
class ee extends hn {
    constructor(t) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
            done: !1,
            value: void 0
        }, this.stop = () => {
            const {
                motionValue: t
            } = this.options;
            t && t.updatedAt !== j.now() && this.tick(j.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop ? .())
        }, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
    }
    initAnimation() {
        const {
            options: t
        } = this;
        mi(t);
        const {
            type: e = Ct,
            repeat: n = 0,
            repeatDelay: i = 0,
            repeatType: s,
            velocity: o = 0
        } = t;
        let {
            keyframes: r
        } = t;
        const a = e || Ct;
        a !== Ct && "number" != typeof r[0] && (this.mixKeyframes = It(Er, fi(r[0], r[1])), r = [0, 100]);
        const l = a({ ...t,
            keyframes: r
        });
        "mirror" === s && (this.mirroredGenerator = a({ ...t,
            keyframes: [...r].reverse(),
            velocity: -o
        })), null === l.calculatedDuration && (l.calculatedDuration = cn(l));
        const {
            calculatedDuration: u
        } = l;
        this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (n + 1) - i, this.generator = l
    }
    updateTime(t) {
        const e = Math.round(t - this.startTime) * this.playbackSpeed;
        null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
    }
    tick(t, e = !1) {
        const {
            generator: n,
            totalDuration: i,
            mixKeyframes: s,
            mirroredGenerator: o,
            resolvedDuration: r,
            calculatedDuration: a
        } = this;
        if (null === this.startTime) return n.next(0);
        const {
            delay: l = 0,
            keyframes: u,
            repeat: h,
            repeatType: c,
            repeatDelay: d,
            type: p,
            onUpdate: m,
            finalKeyframe: f
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
        const y = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            g = this.playbackSpeed >= 0 ? y < 0 : y > i;
        this.currentTime = Math.max(y, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = i);
        let v, x = this.currentTime,
            T = n;
        if (h) {
            const t = Math.min(this.currentTime, i) / r;
            let e = Math.floor(t),
                n = t % 1;
            !n && t >= 1 && (n = 1), 1 === n && e--, e = Math.min(e, h + 1), e % 2 && ("reverse" === c ? (n = 1 - n, d && (n -= d / r)) : "mirror" === c && (T = o)), x = Q(0, 1, n) * r
        }
        g ? (this.delayState.value = u[0], v = this.delayState) : v = T.next(x), s && !g && (v.value = s(v.value));
        let {
            done: w
        } = v;
        !g && null !== a && (w = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const P = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
        return P && p !== Le && (v.value = le(u, this.options, f, this.speed)), m && m(v.value), P && this.finish(), v
    }
    then(t, e) {
        return this.finished.then(t, e)
    }
    get duration() {
        return H(this.calculatedDuration)
    }
    get iterationDuration() {
        const {
            delay: t = 0
        } = this.options || {};
        return this.duration + H(t)
    }
    get time() {
        return H(this.currentTime)
    }
    set time(t) {
        t = W(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t))
    }
    getGeneratorVelocity() {
        const t = this.currentTime;
        if (t <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(t);
        return pi(t => this.generator.next(t).value, t, this.generator.next(t).value)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const e = this.playbackSpeed !== t;
        e && this.driver && this.updateTime(j.now()), this.playbackSpeed = t, e && this.driver && (this.time = H(this.currentTime))
    }
    play() {
        if (this.isStopped) return;
        const {
            driver: t = dr,
            startTime: e
        } = this.options;
        this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay ? .();
        const n = this.driver.now();
        "finished" === this.state ? (this.updateFinished(), this.startTime = n) : null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = e ? ? n), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(j.now()), this.holdTime = this.currentTime
    }
    complete() {
        "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
    }
    cancel() {
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
    attachTimeline(t) {
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), t.observe(this)
    }
}

function Rr(t) {
    for (let e = 1; e < t.length; e++) t[e] ? ? (t[e] = t[e - 1])
}
const ht = t => 180 * t / Math.PI,
    ke = t => {
        const e = ht(Math.atan2(t[1], t[0]));
        return Be(e)
    },
    Lr = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
        rotate: ke,
        rotateZ: ke,
        skewX: t => ht(Math.atan(t[1])),
        skewY: t => ht(Math.atan(t[2])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
    },
    Be = t => ((t %= 360) < 0 && (t += 360), t),
    In = ke,
    Fn = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
    On = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
    kr = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Fn,
        scaleY: On,
        scale: t => (Fn(t) + On(t)) / 2,
        rotateX: t => Be(ht(Math.atan2(t[6], t[5]))),
        rotateY: t => Be(ht(Math.atan2(-t[2], t[0]))),
        rotateZ: ke,
        rotate: ke,
        skewX: t => ht(Math.atan(t[4])),
        skewY: t => ht(Math.atan(t[1])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
    };

function Ie(t) {
    return t.includes("scale") ? 1 : 0
}

function Fe(t, e) {
    if (!t || "none" === t) return Ie(e);
    const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let i, s;
    if (n) i = kr, s = n;
    else {
        const e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        i = Lr, s = e
    }
    if (!s) return Ie(e);
    const o = i[e],
        r = s[1].split(",").map(Ir);
    return "function" == typeof o ? o(r) : r[o]
}
const Br = (t, e) => {
    const {
        transform: n = "none"
    } = getComputedStyle(t);
    return Fe(n, e)
};

function Ir(t) {
    return parseFloat(t.trim())
}
const Pt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    St = new Set([...Pt, "pathRotation"]),
    jn = t => t === wt || t === T,
    Fr = new Set(["x", "y", "z"]),
    Or = Pt.filter(t => !Fr.has(t));

function jr(t) {
    const e = [];
    return Or.forEach(n => {
        const i = t.getValue(n);
        void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
    }), e
}
const nt = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: n = "0",
        boxSizing: i
    }) => {
        const s = t.max - t.min;
        return "border-box" === i ? s : s - parseFloat(e) - parseFloat(n)
    },
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: n = "0",
        boxSizing: i
    }) => {
        const s = t.max - t.min;
        return "border-box" === i ? s : s - parseFloat(e) - parseFloat(n)
    },
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: (t, {
        transform: e
    }) => Fe(e, "x"),
    y: (t, {
        transform: e
    }) => Fe(e, "y")
};
nt.translateX = nt.x, nt.translateY = nt.y;
const ft = new Set;
let Oe = !1,
    je = !1,
    Ne = !1;

function gi() {
    if (je) {
        const t = Array.from(ft).filter(t => t.needsMeasurement),
            e = new Set(t.map(t => t.element)),
            n = new Map;
        e.forEach(t => {
            const e = jr(t);
            e.length && (n.set(t, e), t.render())
        }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
            t.render();
            const e = n.get(t);
            e && e.forEach(([e, n]) => {
                t.getValue(e) ? .set(n)
            })
        }), t.forEach(t => t.measureEndState()), t.forEach(t => {
            void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
        })
    }
    je = !1, Oe = !1, ft.forEach(t => t.complete(Ne)), ft.clear()
}

function yi() {
    ft.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (je = !0)
    })
}

function Nr() {
    Ne = !0, yi(), gi(), Ne = !1
}
class fn {
    constructor(t, e, n, i, s, o = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = n, this.motionValue = i, this.element = s, this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (ft.add(this), Oe || (Oe = !0, M.read(yi), M.resolveKeyframes(gi))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: i
        } = this;
        if (null === t[0]) {
            const s = i ? .get(),
                o = t[t.length - 1];
            if (void 0 !== s) t[0] = s;
            else if (n && e) {
                const i = n.readValue(e, o);
                null != i && (t[0] = i)
            }
            void 0 === t[0] && (t[0] = o), i && void 0 === s && i.set(t[0])
        }
        Rr(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), ft.delete(this)
    }
    cancel() {
        "scheduled" === this.state && (ft.delete(this), this.state = "pending")
    }
    resume() {
        "pending" === this.state && this.scheduleResolve()
    }
}
const Ur = t => t.startsWith("--");

function vi(t, e, n) {
    Ur(e) ? t.style.setProperty(e, n) : t.style[e] = n
}
const Wr = {};

function dn(t, e) {
    const n = _s(t);
    return () => Wr[e] ? ? n()
}
const Kr = dn(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
    Cc = dn(() => void 0 !== window.ViewTimeline, "viewTimeline"),
    xi = dn(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    At = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
    Nn = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: At([0, .65, .55, 1]),
        circOut: At([.55, 0, 1, .45]),
        backIn: At([.31, .01, .66, -.59]),
        backOut: At([.33, 1.53, .69, .99])
    };

function Ti(t, e) {
    if (t) return "function" == typeof t ? xi() ? di(t, e) : "ease-out" : ii(t) ? At(t) : Array.isArray(t) ? t.map(t => Ti(t, e) || Nn.easeOut) : Nn[t]
}

function Hr(t, e, n, {
    delay: i = 0,
    duration: s = 300,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a = "easeOut",
    times: l
} = {}, u = void 0) {
    const h = {
        [e]: n
    };
    l && (h.offset = l);
    const c = Ti(a, s);
    Array.isArray(c) && (h.easing = c);
    const d = {
        delay: i,
        duration: s,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: "reverse" === r ? "alternate" : "normal"
    };
    return u && (d.pseudoElement = u), t.animate(h, d)
}

function wi(t) {
    return "function" == typeof t && "applyToOptions" in t
}

function Gr({
    type: t,
    ...e
}) {
    return wi(t) && xi() ? t.applyToOptions(e) : (e.duration ? ? (e.duration = 300), e.ease ? ? (e.ease = "easeOut"), e)
}
class Pi extends hn {
    constructor(t) {
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
        const {
            element: e,
            name: n,
            keyframes: i,
            pseudoElement: s,
            allowFlatten: o = !1,
            finalKeyframe: r,
            onComplete: a
        } = t;
        this.isPseudoElement = !!s, this.allowFlatten = o, this.options = t, tn("string" != typeof t.type);
        const l = Gr(t);
        this.animation = Hr(e, n, i, l, s), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !s) {
                const t = le(i, this.options, r, this.speed);
                this.updateMotionValue && this.updateMotionValue(t), vi(e, n, t), this.animation.cancel()
            }
            a ? .(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish ? .()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: t
        } = this;
        "idle" === t || "finished" === t || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        const t = this.options ? .element;
        !this.isPseudoElement && t ? .isConnected && this.animation.commitStyles ? .()
    }
    get duration() {
        const t = this.animation.effect ? .getComputedTiming ? .().duration || 0;
        return H(Number(t))
    }
    get iterationDuration() {
        const {
            delay: t = 0
        } = this.options || {};
        return this.duration + H(t)
    }
    get time() {
        return H(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        const e = null !== this.finishedTime;
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = W(t), e && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
    }
    get state() {
        return null !== this.finishedTime ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ? ? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({
        timeline: t,
        rangeStart: e,
        rangeEnd: n,
        observe: i
    }) {
        return this.allowFlatten && this.animation.effect ? .updateTiming({
            easing: "linear"
        }), this.animation.onfinish = null, t && Kr() ? (this.animation.timeline = t, e && (this.animation.rangeStart = e), n && (this.animation.rangeEnd = n), G) : i(this)
    }
}
const Si = {
    anticipate: ti,
    backInOut: Qs,
    circInOut: ni
};

function $r(t) {
    return t in Si
}

function zr(t) {
    "string" == typeof t.ease && $r(t.ease) && (t.ease = Si[t.ease])
}
const ye = 10;
class _r extends Pi {
    constructor(t) {
        zr(t), mi(t), super(t), void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime), this.options = t
    }
    updateMotionValue(t) {
        const {
            motionValue: e,
            onUpdate: n,
            onComplete: i,
            element: s,
            ...o
        } = this.options;
        if (!e) return;
        if (void 0 !== t) return void e.set(t);
        const r = new ee({ ...o,
                autoplay: !1
            }),
            a = Math.max(10, j.now() - this.startTime),
            l = Q(0, 10, a - 10),
            u = r.sample(a).value,
            {
                name: h
            } = this.options;
        s && h && vi(s, h, u), e.setWithVelocity(r.sample(Math.max(0, a - l)).value, u, l), r.stop()
    }
}
const Un = (t, e) => "zIndex" !== e && !("number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !_.test(t) && "0" !== t || t.startsWith("url(")));

function Xr(t) {
    const e = t[0];
    if (1 === t.length) return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e) return !0
}

function Yr(t, e, n, i) {
    const s = t[0];
    if (null === s) return !1;
    if ("display" === e || "visibility" === e) return !0;
    const o = t[t.length - 1],
        r = Un(s, e),
        a = Un(o, e);
    return !(!r || !a) && (Xr(t) || ("spring" === n || wi(n)) && i)
}

function Ue(t) {
    t.duration = 0, t.type = "keyframes"
}
const bi = new Set(["opacity", "clipPath", "filter", "transform"]),
    qr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;

function Zr(t) {
    for (let e = 0; e < t.length; e++)
        if ("string" == typeof t[e] && qr.test(t[e])) return !0;
    return !1
}
const Jr = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
    Qr = _s(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function ta(t) {
    const {
        motionValue: e,
        name: n,
        repeatDelay: i,
        repeatType: s,
        damping: o,
        type: r,
        keyframes: a
    } = t;
    if (!(e ? .owner ? .current instanceof HTMLElement)) return !1;
    const {
        onUpdate: l,
        transformTemplate: u
    } = e.owner.getProps();
    return Qr() && n && (bi.has(n) || Jr.has(n) && Zr(a)) && ("transform" !== n || !u) && !l && !i && "mirror" !== s && 0 !== o && "inertia" !== r
}
const ea = 40;
class na extends hn {
    constructor({
        autoplay: t = !0,
        delay: e = 0,
        type: n = "keyframes",
        repeat: i = 0,
        repeatDelay: s = 0,
        repeatType: o = "loop",
        keyframes: r,
        name: a,
        motionValue: l,
        element: u,
        ...h
    }) {
        super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
        }, this.createdAt = j.now();
        const c = {
                autoplay: t,
                delay: e,
                type: n,
                repeat: i,
                repeatDelay: s,
                repeatType: o,
                name: a,
                motionValue: l,
                element: u,
                ...h
            },
            d = u ? .KeyframeResolver || fn;
        this.keyframeResolver = new d(r, (t, e, n) => this.onKeyframesResolved(t, e, c, !n), a, l, u), this.keyframeResolver ? .scheduleResolve()
    }
    onKeyframesResolved(t, e, n, i) {
        this.keyframeResolver = void 0;
        const {
            name: s,
            type: o,
            velocity: r,
            delay: a,
            isHandoff: l,
            onUpdate: u
        } = n;
        this.resolvedAt = j.now();
        let h = !0;
        Yr(t, s, o, r) || (h = !1, (st.instantAnimations || !a) && u ? .(le(t, n, e)), t[0] = t[t.length - 1], Ue(n), n.repeat = 0);
        const c = {
                startTime: i ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                finalKeyframe: e,
                ...n,
                keyframes: t
            },
            d = h && !l && ta(c),
            p = c.motionValue ? .owner ? .current;
        let m;
        if (d) try {
            m = new _r({ ...c,
                element: p
            })
        } catch {
            m = new ee(c)
        } else m = new ee(c);
        m.finished.then(() => {
            this.notifyFinished()
        }).catch(G), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, e) {
        return this.finished.finally(t).then(() => {})
    }
    get animation() {
        return this._animation || (this.keyframeResolver ? .resume(), Nr()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
    }
}

function Ai(t, e, n, i = 0, s = 1) {
    const o = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
        r = t.size,
        a = (r - 1) * i;
    return "function" == typeof n ? n(o, r) : 1 === s ? o * i : a - o * i
}
const Wn = 30,
    sa = t => !isNaN(parseFloat(t)),
    Kn = {
        current: void 0
    };
class ia {
    constructor(t, e = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
            const e = j.now();
            if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                for (const t of this.dependents) t.dirty()
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = j.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = sa(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, e) {
        this.events[t] || (this.events[t] = new en);
        const n = this.events[t].add(e);
        return "change" === t ? () => {
            n(), M.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : n
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, e) {
        this.passiveEffect = t, this.stopPassiveEffect = e
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, e, n) {
        this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n
    }
    jump(t, e = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change ? .notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set), this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return Kn.current && Kn.current.push(this), this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = j.now();
        if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
        const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return Xs(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
    }
    start(t) {
        return this.stop(), new Promise(e => {
            this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Tt(t, e) {
    return new ia(t, e)
}

function Vi(t, e) {
    if (t ? .inherit && e) {
        const {
            inherit: n,
            ...i
        } = t;
        return { ...e,
            ...i
        }
    }
    return t
}

function pn(t, e) {
    const n = t ? .[e] ? ? t ? .default ? ? t;
    return n !== t ? Vi(n, t) : n
}
const oa = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    ra = t => ({
        type: "spring",
        stiffness: 550,
        damping: 0 === t ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    aa = {
        type: "keyframes",
        duration: .8
    },
    la = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    ua = (t, {
        keyframes: e
    }) => e.length > 2 ? aa : St.has(t) ? t.startsWith("scale") ? ra(e[1]) : oa : la,
    ca = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

function ha(t) {
    for (const e in t)
        if (!ca.has(e)) return !0;
    return !1
}
const mn = (t, e, n, i = {}, s, o) => r => {
        const a = pn(i, t) || {},
            l = a.delay || i.delay || 0;
        let {
            elapsed: u = 0
        } = i;
        u -= W(l);
        const h = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: t => {
                e.set(t), a.onUpdate && a.onUpdate(t)
            },
            onComplete: () => {
                r(), a.onComplete && a.onComplete()
            },
            name: t,
            motionValue: e,
            element: o ? void 0 : s
        };
        ha(a) || Object.assign(h, ua(t, h)), h.duration && (h.duration = W(h.duration)), h.repeatDelay && (h.repeatDelay = W(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
        let c = !1;
        if ((!1 === h.type || 0 === h.duration && !h.repeatDelay) && (Ue(h), 0 === h.delay && (c = !0)), (st.instantAnimations || st.skipAnimations || s ? .shouldSkipAnimations || a.skipAnimations) && (c = !0, Ue(h), h.delay = 0), h.allowFlatten = !a.type && !a.ease, c && !o && void 0 !== e.get()) {
            const t = le(h.keyframes, a);
            if (void 0 !== t) return void M.update(() => {
                h.onUpdate(t), h.onComplete()
            })
        }
        return a.isSync ? new ee(h) : new na(h)
    },
    fa = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function da(t) {
    const e = fa.exec(t);
    if (!e) return [, ];
    const [, n, i, s] = e;
    return [`--${n??i}`, s]
}

function Ci(t, e, n = 1) {
    const [i, s] = da(t);
    if (!i) return;
    const o = window.getComputedStyle(e).getPropertyValue(i);
    if (o) {
        const t = o.trim();
        return Gs(t) ? parseFloat(t) : t
    }
    return rn(s) ? Ci(s, e, n + 1) : s
}

function Hn(t) {
    const e = [{}, {}];
    return t ? .values.forEach((t, n) => {
        e[0][n] = t.get(), e[1][n] = t.getVelocity()
    }), e
}

function gn(t, e, n, i) {
    if ("function" == typeof e) {
        const [s, o] = Hn(i);
        e = e(void 0 !== n ? n : t.custom, s, o)
    }
    if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
        const [s, o] = Hn(i);
        e = e(void 0 !== n ? n : t.custom, s, o)
    }
    return e
}

function dt(t, e, n) {
    const i = t.getProps();
    return gn(i, e, void 0 !== n ? n : i.custom, t)
}
const Mi = new Set(["width", "height", "top", "left", "right", "bottom", ...Pt]),
    We = t => Array.isArray(t);

function pa(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Tt(n))
}

function ma(t) {
    return We(t) ? t[t.length - 1] || 0 : t
}

function ga(t, e) {
    const n = dt(t, e);
    let {
        transitionEnd: i = {},
        transition: s = {},
        ...o
    } = n || {};
    o = { ...o,
        ...i
    };
    for (const e in o) {
        pa(t, e, ma(o[e]))
    }
}
const O = t => !(!t || !t.getVelocity);

function ya(t) {
    return !(!O(t) || !t.add)
}

function Ke(t, e) {
    const n = t.getValue("willChange");
    if (ya(n)) return n.add(e);
    if (!n && st.WillChange) {
        const n = new st.WillChange("auto");
        t.addValue("willChange", n), n.add(e)
    }
}

function yn(t) {
    return t.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const va = "framerAppearId",
    Di = "data-" + yn(va);

function Ei(t) {
    return t.props[Di]
}

function xa({
    protectedKeys: t,
    needsAnimating: e
}, n) {
    const i = t.hasOwnProperty(n) && !0 !== e[n];
    return e[n] = !1, i
}

function Ri(t, e, {
    delay: n = 0,
    transitionOverride: i,
    type: s
} = {}) {
    let {
        transition: o,
        transitionEnd: r,
        ...a
    } = e;
    const l = t.getDefaultTransition();
    o = o ? Vi(o, l) : l;
    const u = o ? .reduceMotion,
        h = o ? .skipAnimations;
    i && (o = i);
    const c = [],
        d = s && t.animationState && t.animationState.getState()[s],
        p = o ? .path;
    p && p.animateVisualElement(t, a, o, n, c);
    for (const e in a) {
        const i = t.getValue(e, t.latestValues[e] ? ? null),
            s = a[e];
        if (void 0 === s || d && xa(d, e)) continue;
        const r = {
            delay: n,
            ...pn(o || {}, e)
        };
        h && (r.skipAnimations = !0);
        const l = i.get();
        if (void 0 !== l && !i.isAnimating() && !Array.isArray(s) && s === l && !r.velocity) {
            M.update(() => i.set(s));
            continue
        }
        let p = !1;
        if (window.MotionHandoffAnimation) {
            const n = Ei(t);
            if (n) {
                const t = window.MotionHandoffAnimation(n, e, M);
                null !== t && (r.startTime = t, p = !0)
            }
        }
        Ke(t, e);
        const m = u ? ? t.shouldReduceMotion;
        i.start(mn(e, i, s, m && Mi.has(e) ? {
            type: !1
        } : r, t, p));
        const f = i.animation;
        f && c.push(f)
    }
    if (r) {
        const e = () => M.update(() => {
            r && ga(t, r)
        });
        c.length ? Promise.all(c).then(e) : e()
    }
    return c
}

function He(t, e, n = {}) {
    const i = dt(t, e, "exit" === n.type ? t.presenceContext ? .custom : void 0);
    let {
        transition: s = t.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (s = n.transitionOverride);
    const o = i ? () => Promise.all(Ri(t, i, n)) : () => Promise.resolve(),
        r = t.variantChildren && t.variantChildren.size ? (i = 0) => {
            const {
                delayChildren: o = 0,
                staggerChildren: r,
                staggerDirection: a
            } = s;
            return Ta(t, e, i, o, r, a, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = s;
    if (a) {
        const [t, e] = "beforeChildren" === a ? [o, r] : [r, o];
        return t().then(() => e())
    }
    return Promise.all([o(), r(n.delay)])
}

function Ta(t, e, n = 0, i = 0, s = 0, o = 1, r) {
    const a = [];
    for (const l of t.variantChildren) l.notify("AnimationStart", e), a.push(He(l, e, { ...r,
        delay: n + ("function" == typeof i ? 0 : i) + Ai(t.variantChildren, l, i, s, o)
    }).then(() => l.notify("AnimationComplete", e)));
    return Promise.all(a)
}

function wa(t, e, n = {}) {
    let i;
    if (t.notify("AnimationStart", e), Array.isArray(e)) {
        const s = e.map(e => He(t, e, n));
        i = Promise.all(s)
    } else if ("string" == typeof e) i = He(t, e, n);
    else {
        const s = "function" == typeof e ? dt(t, e, n.custom) : e;
        i = Promise.all(Ri(t, s, n))
    }
    return i.then(() => {
        t.notify("AnimationComplete", e)
    })
}
const Pa = {
        test: t => "auto" === t,
        parse: t => t
    },
    Li = t => e => e.test(t),
    ki = [wt, T, J, et, Xo, _o, Pa],
    Gn = t => ki.find(Li(t));

function Sa(t) {
    return "number" == typeof t ? 0 === t : null === t || ("none" === t || "0" === t || zs(t))
}
const ba = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Aa(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if ("drop-shadow" === e) return t;
    const [i] = n.match(an) || [];
    if (!i) return t;
    const s = n.replace(i, "");
    let o = ba.has(e) ? 1 : 0;
    return i !== n && (o *= 100), e + "(" + o + s + ")"
}
const Va = /\b([a-z-]*)\(.*?\)/gu,
    Ge = { ..._,
        getAnimatableNone: t => {
            const e = t.match(Va);
            return e ? e.map(Aa).join(" ") : t
        }
    },
    $e = { ..._,
        getAnimatableNone: t => {
            const e = _.parse(t);
            return _.createTransformer(t)(e.map(t => "number" == typeof t ? 0 : "object" == typeof t ? { ...t,
                alpha: 1
            } : t))
        }
    },
    $n = { ...wt,
        transform: Math.round
    },
    Ca = {
        rotate: et,
        pathRotation: et,
        rotateX: et,
        rotateY: et,
        rotateZ: et,
        scale: Ut,
        scaleX: Ut,
        scaleY: Ut,
        scaleZ: Ut,
        skew: et,
        skewX: et,
        skewY: et,
        distance: T,
        translateX: T,
        translateY: T,
        translateZ: T,
        x: T,
        y: T,
        z: T,
        perspective: T,
        transformPerspective: T,
        opacity: Rt,
        originX: En,
        originY: En,
        originZ: T
    },
    ne = {
        borderWidth: T,
        borderTopWidth: T,
        borderRightWidth: T,
        borderBottomWidth: T,
        borderLeftWidth: T,
        borderRadius: T,
        borderTopLeftRadius: T,
        borderTopRightRadius: T,
        borderBottomRightRadius: T,
        borderBottomLeftRadius: T,
        width: T,
        maxWidth: T,
        height: T,
        maxHeight: T,
        top: T,
        right: T,
        bottom: T,
        left: T,
        inset: T,
        insetBlock: T,
        insetBlockStart: T,
        insetBlockEnd: T,
        insetInline: T,
        insetInlineStart: T,
        insetInlineEnd: T,
        padding: T,
        paddingTop: T,
        paddingRight: T,
        paddingBottom: T,
        paddingLeft: T,
        paddingBlock: T,
        paddingBlockStart: T,
        paddingBlockEnd: T,
        paddingInline: T,
        paddingInlineStart: T,
        paddingInlineEnd: T,
        margin: T,
        marginTop: T,
        marginRight: T,
        marginBottom: T,
        marginLeft: T,
        marginBlock: T,
        marginBlockStart: T,
        marginBlockEnd: T,
        marginInline: T,
        marginInlineStart: T,
        marginInlineEnd: T,
        fontSize: T,
        backgroundPositionX: T,
        backgroundPositionY: T,
        ...Ca,
        zIndex: $n,
        fillOpacity: Rt,
        strokeOpacity: Rt,
        numOctaves: $n
    },
    Ma = { ...ne,
        color: L,
        backgroundColor: L,
        outlineColor: L,
        fill: L,
        stroke: L,
        borderColor: L,
        borderTopColor: L,
        borderRightColor: L,
        borderBottomColor: L,
        borderLeftColor: L,
        filter: Ge,
        WebkitFilter: Ge,
        mask: $e,
        WebkitMask: $e
    },
    Bi = t => Ma[t],
    Da = new Set([Ge, $e]);

function Ii(t, e) {
    let n = Bi(t);
    return Da.has(n) || (n = _), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const Ea = new Set(["auto", "none", "0"]);

function Ra(t, e, n) {
    let i, s = 0;
    for (; s < t.length && !i;) {
        const e = t[s];
        "string" == typeof e && !Ea.has(e) && xt(e).values.length && (i = t[s]), s++
    }
    if (i && n)
        for (const s of e) t[s] = Ii(n, i)
}
class La extends fn {
    constructor(t, e, n, i, s) {
        super(t, e, n, i, s, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: e,
            name: n
        } = this;
        if (!e || !e.current) return;
        super.readKeyframes();
        for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if ("string" == typeof i && (i = i.trim(), rn(i))) {
                const s = Ci(i, e.current);
                void 0 !== s && (t[n] = s), n === t.length - 1 && (this.finalKeyframe = i)
            }
        }
        if (this.resolveNoneKeyframes(), !Mi.has(n) || 2 !== t.length) return;
        const [i, s] = t, o = Gn(i), r = Gn(s);
        if (Dn(i) !== Dn(s) && nt[n]) this.needsMeasurement = !0;
        else if (o !== r)
            if (jn(o) && jn(r))
                for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    "string" == typeof n && (t[e] = parseFloat(n))
                } else nt[n] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: e
        } = this, n = [];
        for (let e = 0; e < t.length; e++)(null === t[e] || Sa(t[e])) && n.push(e);
        n.length && Ra(t, n, e)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: e,
            name: n
        } = this;
        if (!t || !t.current) return;
        "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = nt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
        const i = e[e.length - 1];
        void 0 !== i && t.getValue(n, i).jump(i, !1)
    }
    measureEndState() {
        const {
            element: t,
            name: e,
            unresolvedKeyframes: n
        } = this;
        if (!t || !t.current) return;
        const i = t.getValue(e);
        i && i.jump(this.measuredOrigin, !1);
        const s = n.length - 1,
            o = n[s];
        n[s] = nt[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), this.removedTransforms ? .length && this.removedTransforms.forEach(([e, n]) => {
            t.getValue(e).set(n)
        }), this.resolveNoneKeyframes()
    }
}
const vn = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];

function Fi(t, e, n) {
    if (null == t) return [];
    if (t instanceof EventTarget) return [t];
    if ("string" == typeof t) {
        let i = document;
        e && (i = e.current);
        const s = n ? .[t] ? ? i.querySelectorAll(t);
        return s ? Array.from(s) : []
    }
    return Array.from(t).filter(t => null != t)
}
const ze = (t, e) => e && "number" == typeof t ? e.transform(t) : t;

function ka(t) {
    return $s(t) && "offsetHeight" in t && !("ownerSVGElement" in t)
}
const {
    schedule: xn,
    cancel: Mc
} = oi(queueMicrotask, !1), z = {
    x: !1,
    y: !1
};

function Oi() {
    return z.x || z.y
}

function Ba(t) {
    return "x" === t || "y" === t ? z[t] ? null : (z[t] = !0, () => {
        z[t] = !1
    }) : z.x || z.y ? null : (z.x = z.y = !0, () => {
        z.x = z.y = !1
    })
}

function ji(t, e) {
    const n = Fi(t),
        i = new AbortController;
    return [n, {
        passive: !0,
        ...e,
        signal: i.signal
    }, () => i.abort()]
}

function Ia(t) {
    return !("touch" === t.pointerType || Oi())
}

function Fa(t, e, n = {}) {
    const [i, s, o] = ji(t, n);
    return i.forEach(t => {
        let n, i = !1,
            o = !1;
        const r = e => {
                n && (n(e), n = void 0), t.removeEventListener("pointerleave", l)
            },
            a = t => {
                i = !1, window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), o && (o = !1, r(t))
            },
            l = t => {
                if ("touch" !== t.pointerType) {
                    if (i) return void(o = !0);
                    r(t)
                }
            };
        t.addEventListener("pointerenter", i => {
            if (!Ia(i)) return;
            o = !1;
            const r = e(t, i);
            "function" == typeof r && (n = r, t.addEventListener("pointerleave", l, s))
        }, s), t.addEventListener("pointerdown", () => {
            i = !0, window.addEventListener("pointerup", a, s), window.addEventListener("pointercancel", a, s)
        }, s)
    }), o
}
const Ni = (t, e) => !!e && (t === e || Ni(t, e.parentElement)),
    Tn = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary,
    Oa = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function ja(t) {
    return Oa.has(t.tagName) || !0 === t.isContentEditable
}
const Na = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function Ua(t) {
    return Na.has(t.tagName) || !0 === t.isContentEditable
}
const Gt = new WeakSet;

function zn(t) {
    return e => {
        "Enter" === e.key && t(e)
    }
}

function ve(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const Wa = (t, e) => {
    const n = t.currentTarget;
    if (!n) return;
    const i = zn(() => {
        if (Gt.has(n)) return;
        ve(n, "down");
        const t = zn(() => {
            ve(n, "up")
        });
        n.addEventListener("keyup", t, e), n.addEventListener("blur", () => ve(n, "cancel"), e)
    });
    n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
};

function _n(t) {
    return Tn(t) && !Oi()
}
const Xn = new WeakSet;

function Ka(t, e, n = {}) {
    const [i, s, o] = ji(t, n), r = t => {
        const i = t.currentTarget;
        if (!_n(t) || Xn.has(t)) return;
        Gt.add(i), n.stopPropagation && Xn.add(t);
        const o = e(i, t),
            r = { ...s,
                capture: !0
            },
            a = (t, e) => {
                window.removeEventListener("pointerup", l, r), window.removeEventListener("pointercancel", u, r), Gt.has(i) && Gt.delete(i), _n(t) && "function" == typeof o && o(t, {
                    success: e
                })
            },
            l = t => {
                a(t, i === window || i === document || n.useGlobalTarget || Ni(i, t.target))
            },
            u = t => {
                a(t, !1)
            };
        window.addEventListener("pointerup", l, r), window.addEventListener("pointercancel", u, r)
    };
    return i.forEach(t => {
        (n.useGlobalTarget ? window : t).addEventListener("pointerdown", r, s), ka(t) && (t.addEventListener("focus", t => Wa(t, s)), !ja(t) && !t.hasAttribute("tabindex") && (t.tabIndex = 0))
    }), o
}

function wn(t) {
    return $s(t) && "ownerSVGElement" in t
}
const $t = new WeakMap;
let zt;
const Ui = (t, e, n) => (i, s) => s && s[0] ? s[0][t + "Size"] : wn(i) && "getBBox" in i ? i.getBBox()[e] : i[n],
    Ha = Ui("inline", "width", "offsetWidth"),
    Ga = Ui("block", "height", "offsetHeight");

function $a({
    target: t,
    borderBoxSize: e
}) {
    $t.get(t) ? .forEach(n => {
        n(t, {
            get width() {
                return Ha(t, e)
            },
            get height() {
                return Ga(t, e)
            }
        })
    })
}

function za(t) {
    t.forEach($a)
}

function _a() {
    typeof ResizeObserver > "u" || (zt = new ResizeObserver(za))
}

function Xa(t, e) {
    zt || _a();
    const n = Fi(t);
    return n.forEach(t => {
        let n = $t.get(t);
        n || (n = new Set, $t.set(t, n)), n.add(e), zt ? .observe(t)
    }), () => {
        n.forEach(t => {
            const n = $t.get(t);
            n ? .delete(e), n ? .size || zt ? .unobserve(t)
        })
    }
}
const _t = new Set;
let yt;

function Ya() {
    yt = () => {
        const t = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        _t.forEach(e => e(t))
    }, window.addEventListener("resize", yt)
}

function qa(t) {
    return _t.add(t), yt || Ya(), () => {
        _t.delete(t), !_t.size && "function" == typeof yt && (window.removeEventListener("resize", yt), yt = void 0)
    }
}

function Yn(t, e) {
    return "function" == typeof t ? qa(t) : Xa(t, e)
}

function Za(t) {
    return wn(t) && "svg" === t.tagName
}
const Ja = [...ki, L, _],
    Qa = t => Ja.find(Li(t)),
    qn = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    vt = () => ({
        x: qn(),
        y: qn()
    }),
    Zn = () => ({
        min: 0,
        max: 0
    }),
    k = () => ({
        x: Zn(),
        y: Zn()
    }),
    tl = new WeakMap;

function ue(t) {
    return null !== t && "object" == typeof t && "function" == typeof t.start
}

function Lt(t) {
    return "string" == typeof t || Array.isArray(t)
}
const Pn = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Sn = ["initial", ...Pn];

function ce(t) {
    return ue(t.animate) || Sn.some(e => Lt(t[e]))
}

function Wi(t) {
    return !(!ce(t) && !t.variants)
}

function el(t, e, n) {
    for (const i in e) {
        const s = e[i],
            o = n[i];
        if (O(s)) t.addValue(i, s);
        else if (O(o)) t.addValue(i, Tt(s, {
            owner: t
        }));
        else if (o !== s)
            if (t.hasValue(i)) {
                const e = t.getValue(i);
                !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s)
            } else {
                const e = t.getStaticValue(i);
                t.addValue(i, Tt(void 0 !== e ? e : s, {
                    owner: t
                }))
            }
    }
    for (const i in n) void 0 === e[i] && t.removeValue(i);
    return e
}
const _e = {
        current: null
    },
    Ki = {
        current: !1
    },
    nl = typeof window < "u";

function sl() {
    if (Ki.current = !0, nl)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => _e.current = t.matches;
            t.addEventListener("change", e), e()
        } else _e.current = !1
}
const Jn = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let se = {};

function Hi(t) {
    se = t
}

function il() {
    return se
}
class ol {
    scrapeMotionValuesFromProps(t, e, n) {
        return {}
    }
    constructor({
        parent: t,
        props: e,
        presenceContext: n,
        reducedMotionConfig: i,
        skipAnimations: s,
        blockInitialAnimation: o,
        visualState: r
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = fn, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const t = j.now();
            this.renderScheduledAt < t && (this.renderScheduledAt = t, M.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u
        } = r;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = e.initial ? { ...l
        } : {}, this.renderState = u, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = ce(e), this.isVariantNode = Wi(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !(!t || !t.current);
        const {
            willChange: h,
            ...c
        } = this.scrapeMotionValuesFromProps(e, {}, this);
        for (const t in c) {
            const e = c[t];
            void 0 !== l[t] && O(e) && e.set(l[t])
        }
    }
    mount(t) {
        if (this.hasBeenMounted)
            for (const t in this.initialValues) this.values.get(t) ? .jump(this.initialValues[t]), this.latestValues[t] = this.initialValues[t];
        this.current = t, tl.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (Ki.current || sl(), this.shouldReduceMotion = _e.current), this.shouldSkipAnimations = this.skipAnimationsConfig ? ? !1, this.parent ? .addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
    }
    unmount() {
        this.projection && this.projection.unmount(), it(this.notifyUpdate), it(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ? .removeChild(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const e = this.features[t];
            e && (e.unmount(), e.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t), this.enteringChildren ? ? (this.enteringChildren = new Set), this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, e) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && bi.has(t) && this.current instanceof HTMLElement) {
            const {
                factory: n,
                keyframes: i,
                times: s,
                ease: o,
                duration: r
            } = e.accelerate, a = new Pi({
                element: this.current,
                name: t,
                keyframes: i,
                times: s,
                ease: o,
                duration: W(r)
            }), l = n(a);
            return void this.valueSubscriptions.set(t, () => {
                l(), a.cancel()
            })
        }
        const n = St.has(t);
        n && this.onBindTransform && this.onBindTransform();
        const i = e.on("change", e => {
            this.latestValues[t] = e, this.props.onUpdate && M.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let s;
        typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
            i(), s && s()
        })
    }
    sortNodePosition(t) {
        return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
    }
    updateFeatures() {
        let t = "animation";
        for (t in se) {
            const e = se[t];
            if (!e) continue;
            const {
                isEnabled: n,
                Feature: i
            } = e;
            if (!this.features[t] && i && n(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const e = this.features[t];
                e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : k()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, e) {
        this.latestValues[t] = e
    }
    update(t, e) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
        for (let e = 0; e < Jn.length; e++) {
            const n = Jn[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
        }
        this.prevMotionValues = el(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const e = this.getClosestVariantNode();
        if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
    }
    addValue(t, e) {
        const n = this.values.get(t);
        e !== n && (n && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const e = this.valueSubscriptions.get(t);
        e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, e) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let n = this.values.get(t);
        return void 0 === n && void 0 !== e && (n = Tt(null === e ? void 0 : e, {
            owner: this
        }), this.addValue(t, n)), n
    }
    readValue(t, e) {
        let n = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ? ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
        return null != n && ("string" == typeof n && (Gs(n) || zs(n)) ? n = parseFloat(n) : !Qa(n) && _.test(e) && (n = Ii(t, e)), this.setBaseTarget(t, O(n) ? n.get() : n)), O(n) ? n.get() : n
    }
    setBaseTarget(t, e) {
        this.baseTarget[t] = e
    }
    getBaseTarget(t) {
        const {
            initial: e
        } = this.props;
        let n;
        if ("string" == typeof e || "object" == typeof e) {
            const i = gn(this.props, e, this.presenceContext ? .custom);
            i && (n = i[t])
        }
        if (e && void 0 !== n) return n;
        const i = this.getBaseTargetFromProps(this.props, t);
        return void 0 === i || O(i) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : i
    }
    on(t, e) {
        return this.events[t] || (this.events[t] = new en), this.events[t].add(e)
    }
    notify(t, ...e) {
        this.events[t] && this.events[t].notify(...e)
    }
    scheduleRenderMicrotask() {
        xn.render(this.render)
    }
}
class Gi extends ol {
    constructor() {
        super(...arguments), this.KeyframeResolver = La
    }
    sortInstanceNodePosition(t, e) {
        return 2 & t.compareDocumentPosition(e) ? 1 : -1
    }
    getBaseTargetFromProps(t, e) {
        const n = t.style;
        return n ? n[e] : void 0
    }
    removeValueFromRenderState(t, {
        vars: e,
        style: n
    }) {
        delete e[t], delete n[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        O(t) && (this.childSubscription = t.on("change", t => {
            this.current && (this.current.textContent = `${t}`)
        }))
    }
}
class ot {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}

function $i({
    top: t,
    left: e,
    right: n,
    bottom: i
}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: i
        }
    }
}

function rl({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function al(t, e) {
    if (!e) return t;
    const n = e({
            x: t.left,
            y: t.top
        }),
        i = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: i.y,
        right: i.x
    }
}

function xe(t) {
    return void 0 === t || 1 === t
}

function Xe({
    scale: t,
    scaleX: e,
    scaleY: n
}) {
    return !xe(t) || !xe(e) || !xe(n)
}

function ut(t) {
    return Xe(t) || zi(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function zi(t) {
    return Qn(t.x) || Qn(t.y)
}

function Qn(t) {
    return t && "0%" !== t
}

function ie(t, e, n) {
    return n + e * (t - n)
}

function ts(t, e, n, i, s) {
    return void 0 !== s && (t = ie(t, s, i)), ie(t, n, i) + e
}

function Ye(t, e = 0, n = 1, i, s) {
    t.min = ts(t.min, e, n, i, s), t.max = ts(t.max, e, n, i, s)
}

function _i(t, {
    x: e,
    y: n
}) {
    Ye(t.x, e.translate, e.scale, e.originPoint), Ye(t.y, n.translate, n.scale, n.originPoint)
}
const es = .999999999999,
    ns = 1.0000000000001;

function ll(t, e, n, i = !1) {
    const s = n.length;
    if (!s) return;
    let o, r;
    e.x = e.y = 1;
    for (let a = 0; a < s; a++) {
        o = n[a], r = o.projectionDelta;
        const {
            visualElement: s
        } = o.options;
        s && s.props.style && "contents" === s.props.style.display || (i && o.options.layoutScroll && o.scroll && o !== o.root && (Z(t.x, -o.scroll.offset.x), Z(t.y, -o.scroll.offset.y)), r && (e.x *= r.x.scale, e.y *= r.y.scale, _i(t, r)), i && ut(o.latestValues) && Xt(t, o.latestValues, o.layout ? .layoutBox))
    }
    e.x < ns && e.x > es && (e.x = 1), e.y < ns && e.y > es && (e.y = 1)
}

function Z(t, e) {
    t.min += e, t.max += e
}

function ss(t, e, n, i, s = .5) {
    Ye(t, e, n, C(t.min, t.max, s), i)
}

function is(t, e) {
    return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t
}

function Xt(t, e, n) {
    const i = n ? ? t;
    ss(t.x, is(e.x, i.x), e.scaleX, e.scale, e.originX), ss(t.y, is(e.y, i.y), e.scaleY, e.scale, e.originY)
}

function Xi(t, e) {
    return $i(al(t.getBoundingClientRect(), e))
}

function ul(t, e, n) {
    const i = Xi(t, n),
        {
            scroll: s
        } = e;
    return s && (Z(i.x, s.offset.x), Z(i.y, s.offset.y)), i
}
const cl = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    hl = Pt.length;

function fl(t, e, n) {
    let i = "",
        s = !0;
    for (let o = 0; o < hl; o++) {
        const r = Pt[o],
            a = t[r];
        if (void 0 === a) continue;
        let l = !0;
        if ("number" == typeof a) l = a === (r.startsWith("scale") ? 1 : 0);
        else {
            const t = parseFloat(a);
            l = r.startsWith("scale") ? 1 === t : 0 === t
        }
        if (!l || n) {
            const t = ze(a, ne[r]);
            if (!l) {
                s = !1;
                i += `${cl[r]||r}(${t}) `
            }
            n && (e[r] = t)
        }
    }
    const o = t.pathRotation;
    return o && (s = !1, i += `rotate(${ze(o,ne.pathRotation)}) `), i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i
}

function bn(t, e, n) {
    const {
        style: i,
        vars: s,
        transformOrigin: o
    } = t;
    let r = !1,
        a = !1;
    for (const t in e) {
        const n = e[t];
        if (St.has(t)) r = !0;
        else if (on(t)) s[t] = n;
        else {
            const e = ze(n, ne[t]);
            t.startsWith("origin") ? (a = !0, o[t] = e) : i[t] = e
        }
    }
    if (e.transform || (r || n ? i.transform = fl(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
        const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
        } = o;
        i.transformOrigin = `${t} ${e} ${n}`
    }
}

function Yi(t, {
    style: e,
    vars: n
}, i, s) {
    const o = t.style;
    let r;
    for (r in e) o[r] = e[r];
    for (r in s ? .applyProjectionStyles(o, i), n) o.setProperty(r, n[r])
}

function os(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const bt = {
        correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
                if (!T.test(t)) return t;
                t = parseFloat(t)
            }
            return `${os(t,e.target.x)}% ${os(t,e.target.y)}%`
        }
    },
    dl = {
        correct: (t, {
            treeScale: e,
            projectionDelta: n
        }) => {
            const i = t,
                s = _.parse(t);
            if (s.length > 5) return i;
            const o = _.createTransformer(t),
                r = "number" != typeof s[0] ? 1 : 0,
                a = n.x.scale * e.x,
                l = n.y.scale * e.y;
            s[0 + r] /= a, s[1 + r] /= l;
            const u = C(a, l, .5);
            return "number" == typeof s[2 + r] && (s[2 + r] /= u), "number" == typeof s[3 + r] && (s[3 + r] /= u), o(s)
        }
    },
    kt = {
        borderRadius: { ...bt,
            applyTo: [...vn]
        },
        borderTopLeftRadius: bt,
        borderTopRightRadius: bt,
        borderBottomLeftRadius: bt,
        borderBottomRightRadius: bt,
        boxShadow: dl
    };

function Dc(t) {
    for (const e in t) kt[e] = t[e], on(e) && (kt[e].isCSSVariable = !0)
}

function qi(t, {
    layout: e,
    layoutId: n
}) {
    return St.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!kt[t] || "opacity" === t)
}

function An(t, e, n) {
    const i = t.style,
        s = e ? .style,
        o = {};
    if (!i) return o;
    for (const e in i)(O(i[e]) || s && O(s[e]) || qi(e, t) || void 0 !== n ? .getValue(e) ? .liveStyle) && (o[e] = i[e]);
    return o
}

function pl(t) {
    return window.getComputedStyle(t)
}
class ml extends Gi {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = Yi
    }
    readValueFromInstance(t, e) {
        if (St.has(e)) return this.projection ? .isProjecting ? Ie(e) : Br(t, e); {
            const n = pl(t),
                i = (on(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof i ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: e
    }) {
        return Xi(t, e)
    }
    build(t, e, n) {
        bn(t, e, n.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, e, n) {
        return An(t, e, n)
    }
}
const gl = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    yl = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function vl(t, e, n = 1, i = 0, s = !0) {
    t.pathLength = 1;
    const o = s ? gl : yl;
    t[o.offset] = "" + -i, t[o.array] = `${e} ${n}`
}
const xl = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function Zi(t, {
    attrX: e,
    attrY: n,
    attrScale: i,
    pathLength: s,
    pathSpacing: o = 1,
    pathOffset: r = 0,
    ...a
}, l, u, h) {
    if (bn(t, a, u), l) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
    t.attrs = t.style, t.style = {};
    const {
        attrs: c,
        style: d
    } = t;
    c.transform && (d.transform = c.transform, delete c.transform), (d.transform || c.transformOrigin) && (d.transformOrigin = c.transformOrigin ? ? "50% 50%", delete c.transformOrigin), d.transform && (d.transformBox = h ? .transformBox ? ? "fill-box", delete c.transformBox);
    for (const t of xl) void 0 !== c[t] && (d[t] = c[t], delete c[t]);
    void 0 !== e && (c.x = e), void 0 !== n && (c.y = n), void 0 !== i && (c.scale = i), void 0 !== s && vl(c, s, o, r, !1)
}
const Ji = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
    Qi = t => "string" == typeof t && "svg" === t.toLowerCase();

function Tl(t, e, n, i) {
    Yi(t, e, void 0, i);
    for (const n in e.attrs) t.setAttribute(Ji.has(n) ? n : yn(n), e.attrs[n])
}

function to(t, e, n) {
    const i = An(t, e, n);
    for (const n in t)
        if (O(t[n]) || O(e[n])) {
            i[-1 !== Pt.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]
        }
    return i
}
class wl extends Gi {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = k
    }
    getBaseTargetFromProps(t, e) {
        return t[e]
    }
    readValueFromInstance(t, e) {
        if (St.has(e)) {
            const t = Bi(e);
            return t && t.default || 0
        }
        return e = Ji.has(e) ? e : yn(e), t.getAttribute(e)
    }
    scrapeMotionValuesFromProps(t, e, n) {
        return to(t, e, n)
    }
    build(t, e, n) {
        Zi(t, e, this.isSVGTag, n.transformTemplate, n.style)
    }
    renderInstance(t, e, n, i) {
        Tl(t, e, n, i)
    }
    mount(t) {
        this.isSVGTag = Qi(t.tagName), super.mount(t)
    }
}
const Pl = Sn.length;

function eo(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const e = t.parent && eo(t.parent) || {};
        return void 0 !== t.props.initial && (e.initial = t.props.initial), e
    }
    const e = {};
    for (let n = 0; n < Pl; n++) {
        const i = Sn[n],
            s = t.props[i];
        (Lt(s) || !1 === s) && (e[i] = s)
    }
    return e
}

function no(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let i = 0; i < n; i++)
        if (e[i] !== t[i]) return !1;
    return !0
}
const Sl = [...Pn].reverse(),
    bl = Pn.length;

function Al(t) {
    return e => Promise.all(e.map(({
        animation: e,
        options: n
    }) => wa(t, e, n)))
}

function Vl(t) {
    let e = Al(t),
        n = rs(),
        i = !0,
        s = !1;
    const o = e => (n, i) => {
        const s = dt(t, i, "exit" === e ? t.presenceContext ? .custom : void 0);
        if (s) {
            const {
                transition: t,
                transitionEnd: e,
                ...i
            } = s;
            n = { ...n,
                ...i,
                ...e
            }
        }
        return n
    };

    function r(r) {
        const {
            props: a
        } = t, l = eo(t.parent) || {}, u = [], h = new Set;
        let c = {},
            d = 1 / 0;
        for (let e = 0; e < bl; e++) {
            const p = Sl[e],
                m = n[p],
                f = void 0 !== a[p] ? a[p] : l[p],
                y = Lt(f),
                g = p === r ? m.isActive : null;
            !1 === g && (d = e);
            let v = f === l[p] && f !== a[p] && y;
            if (v && (i || s) && t.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...c
                }, !m.isActive && null === g || !f && !m.prevProp || ue(f) || "boolean" == typeof f) continue;
            if ("exit" === p && m.isActive && !0 !== g) {
                m.prevResolvedValues && (c = { ...c,
                    ...m.prevResolvedValues
                });
                continue
            }
            const x = Cl(m.prevProp, f);
            let T = x || p === r && m.isActive && !v && y || e > d && y,
                w = !1;
            const P = Array.isArray(f) ? f : [f];
            let S = P.reduce(o(p), {});
            !1 === g && (S = {});
            const {
                prevResolvedValues: b = {}
            } = m, E = { ...b,
                ...S
            }, M = e => {
                T = !0, h.has(e) && (w = !0, h.delete(e)), m.needsAnimating[e] = !0;
                const n = t.getValue(e);
                n && (n.liveStyle = !1)
            };
            for (const t in E) {
                const e = S[t],
                    n = b[t];
                if (c.hasOwnProperty(t)) continue;
                let i = !1;
                i = We(e) && We(n) ? !no(e, n) || x : e !== n, i ? null != e ? M(t) : h.add(t) : void 0 !== e && h.has(t) ? M(t) : m.protectedKeys[t] = !0
            }
            m.prevProp = f, m.prevResolvedValues = S, m.isActive && (c = { ...c,
                ...S
            }), (i || s) && t.blockInitialAnimation && (T = !1);
            const C = v && x;
            T && (!C || w) && u.push(...P.map(e => {
                const n = {
                    type: p
                };
                if ("string" == typeof e && (i || s) && !C && t.manuallyAnimateOnMount && t.parent) {
                    const {
                        parent: i
                    } = t, s = dt(i, e);
                    if (i.enteringChildren && s) {
                        const {
                            delayChildren: e
                        } = s.transition || {};
                        n.delay = Ai(i.enteringChildren, t, e)
                    }
                }
                return {
                    animation: e,
                    options: n
                }
            }))
        }
        if (h.size) {
            const e = {};
            if ("boolean" != typeof a.initial) {
                const n = dt(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
                n && n.transition && (e.transition = n.transition)
            }
            h.forEach(n => {
                const i = t.getBaseTarget(n),
                    s = t.getValue(n);
                s && (s.liveStyle = !0), e[n] = i ? ? null
            }), u.push({
                animation: e
            })
        }
        let p = !!u.length;
        return i && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (p = !1), i = !1, s = !1, p ? e(u) : Promise.resolve()
    }
    return {
        animateChanges: r,
        setActive: function(e, i) {
            if (n[e].isActive === i) return Promise.resolve();
            t.variantChildren ? .forEach(t => t.animationState ? .setActive(e, i)), n[e].isActive = i;
            const s = r(e);
            for (const t in n) n[t].protectedKeys = {};
            return s
        },
        setAnimateFunction: function(n) {
            e = n(t)
        },
        getState: () => n,
        reset: () => {
            n = rs(), s = !0
        }
    }
}

function Cl(t, e) {
    return "string" == typeof e ? e !== t : !!Array.isArray(e) && !no(e, t)
}

function lt(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function rs() {
    return {
        animate: lt(!0),
        whileInView: lt(),
        whileHover: lt(),
        whileTap: lt(),
        whileDrag: lt(),
        whileFocus: lt(),
        exit: lt()
    }
}

function qe(t, e) {
    t.min = e.min, t.max = e.max
}

function $(t, e) {
    qe(t.x, e.x), qe(t.y, e.y)
}

function as(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}
const so = 1e-4,
    Ml = 1 - so,
    Dl = 1 + so,
    io = .01,
    El = 0 - io,
    Rl = .01;

function N(t) {
    return t.max - t.min
}

function Ll(t, e, n) {
    return Math.abs(t - e) <= n
}

function ls(t, e, n, i = .5) {
    t.origin = i, t.originPoint = C(e.min, e.max, t.origin), t.scale = N(n) / N(e), t.translate = C(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Ml && t.scale <= Dl || isNaN(t.scale)) && (t.scale = 1), (t.translate >= El && t.translate <= Rl || isNaN(t.translate)) && (t.translate = 0)
}

function Mt(t, e, n, i) {
    ls(t.x, e.x, n.x, i ? i.originX : void 0), ls(t.y, e.y, n.y, i ? i.originY : void 0)
}

function us(t, e, n, i = 0) {
    const s = i ? C(n.min, n.max, i) : n.min;
    t.min = s + e.min, t.max = t.min + N(e)
}

function kl(t, e, n, i) {
    us(t.x, e.x, n.x, i ? .x), us(t.y, e.y, n.y, i ? .y)
}

function cs(t, e, n, i = 0) {
    const s = i ? C(n.min, n.max, i) : n.min;
    t.min = e.min - s, t.max = t.min + N(e)
}

function oe(t, e, n, i) {
    cs(t.x, e.x, n.x, i ? .x), cs(t.y, e.y, n.y, i ? .y)
}

function hs(t, e, n, i, s) {
    return t = ie(t -= e, 1 / n, i), void 0 !== s && (t = ie(t, 1 / s, i)), t
}

function Bl(t, e = 0, n = 1, i = .5, s, o = t, r = t) {
    if (J.test(e) && (e = parseFloat(e), e = C(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
    let a = C(o.min, o.max, i);
    t === o && (a -= e), t.min = hs(t.min, e, n, a, s), t.max = hs(t.max, e, n, a, s)
}

function fs(t, e, [n, i, s], o, r) {
    Bl(t, e[n], e[i], e[s], e.scale, o, r)
}
const Il = ["x", "scaleX", "originX"],
    Fl = ["y", "scaleY", "originY"];

function ds(t, e, n, i) {
    fs(t.x, e, Il, n ? n.x : void 0, i ? i.x : void 0), fs(t.y, e, Fl, n ? n.y : void 0, i ? i.y : void 0)
}

function ps(t) {
    return 0 === t.translate && 1 === t.scale
}

function oo(t) {
    return ps(t.x) && ps(t.y)
}

function ms(t, e) {
    return t.min === e.min && t.max === e.max
}

function Ol(t, e) {
    return ms(t.x, e.x) && ms(t.y, e.y)
}

function gs(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function ro(t, e) {
    return gs(t.x, e.x) && gs(t.y, e.y)
}

function ys(t) {
    return N(t.x) / N(t.y)
}

function vs(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}

function q(t) {
    return [t("x"), t("y")]
}

function jl(t, e, n) {
    let i = "";
    const s = t.x.translate / e.x,
        o = t.y.translate / e.y,
        r = n ? .z || 0;
    if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (1 !== e.x || 1 !== e.y) && (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
        const {
            transformPerspective: t,
            rotate: e,
            pathRotation: s,
            rotateX: o,
            rotateY: r,
            skewX: a,
            skewY: l
        } = n;
        t && (i = `perspective(${t}px) ${i}`), e && (i += `rotate(${e}deg) `), s && (i += `rotate(${s}deg) `), o && (i += `rotateX(${o}deg) `), r && (i += `rotateY(${r}deg) `), a && (i += `skewX(${a}deg) `), l && (i += `skewY(${l}deg) `)
    }
    const a = t.x.scale * e.x,
        l = t.y.scale * e.y;
    return (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`), i || "none"
}
const Nl = vn.length,
    xs = t => "string" == typeof t ? parseFloat(t) : t,
    Ts = t => "number" == typeof t || T.test(t);

function Ul(t, e, n, i, s, o) {
    s ? (t.opacity = C(0, n.opacity ? ? 1, Wl(i)), t.opacityExit = C(e.opacity ? ? 1, 0, Kl(i))) : o && (t.opacity = C(e.opacity ? ? 1, n.opacity ? ? 1, i));
    for (let s = 0; s < Nl; s++) {
        const o = vn[s];
        let r = ws(e, o),
            a = ws(n, o);
        void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || Ts(r) === Ts(a) ? (t[o] = Math.max(C(xs(r), xs(a), i), 0), (J.test(a) || J.test(r)) && (t[o] += "%")) : t[o] = a)
    }(e.rotate || n.rotate) && (t.rotate = C(e.rotate || 0, n.rotate || 0, i))
}

function ws(t, e) {
    return void 0 !== t[e] ? t[e] : t.borderRadius
}
const Wl = ao(0, .5, ei),
    Kl = ao(.5, .95, G);

function ao(t, e, n) {
    return i => i < t ? 0 : i > e ? 1 : n(Et(t, e, i))
}

function Hl(t, e, n) {
    const i = O(t) ? t : Tt(t);
    return i.start(mn("", i, e, n)), i.animation
}

function Bt(t, e, n, i = {
    passive: !0
}) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}
const Gl = (t, e) => t.depth - e.depth;
class $l {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        Qe(this.children, t), this.isDirty = !0
    }
    remove(t) {
        Zt(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Gl), this.isDirty = !1, this.children.forEach(t)
    }
}

function zl(t, e) {
    const n = j.now(),
        i = ({
            timestamp: s
        }) => {
            const o = s - n;
            o >= e && (it(i), t(o - e))
        };
    return M.setup(i, !0), () => it(i)
}

function Yt(t) {
    return O(t) ? t.get() : t
}
class _l {
    constructor() {
        this.members = []
    }
    add(t) {
        Qe(this.members, t);
        for (let e = this.members.length - 1; e >= 0; e--) {
            const n = this.members[e];
            if (n === t || n === this.lead || n === this.prevLead) continue;
            const i = n.instance;
            (!i || !1 === i.isConnected) && !n.snapshot && (Zt(this.members, n), n.unmount())
        }
        t.scheduleRender()
    }
    remove(t) {
        if (Zt(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
        }
    }
    relegate(t) {
        for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
            const t = this.members[e];
            if (!1 !== t.isPresent && !1 !== t.instance ? .isConnected) return this.promote(t), !0
        }
        return !1
    }
    promote(t, e) {
        const n = this.lead;
        if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
            n.updateSnapshot(), t.scheduleRender();
            const {
                layoutDependency: i
            } = n.options, {
                layoutDependency: s
            } = t.options;
            (void 0 === i || i !== s) && (t.resumeFrom = n, e && (n.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root ? .isUpdating && (t.isLayoutDirty = !0)), !1 === t.options.crossfade && n.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            t.options.onExitComplete ? .(), t.resumingFrom ? .options.onExitComplete ? .()
        })
    }
    scheduleRender() {
        this.members.forEach(t => t.instance && t.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        this.lead ? .snapshot && (this.lead.snapshot = void 0)
    }
}
const qt = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    Te = ["", "X", "Y", "Z"],
    Xl = 1e3;
let Yl = 0;

function we(t, e, n, i) {
    const {
        latestValues: s
    } = e;
    s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0))
}

function lo(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const n = Ei(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: e,
            layoutId: i
        } = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", M, !(e || i))
    }
    const {
        parent: i
    } = t;
    i && !i.hasCheckedOptimisedAppear && lo(i)
}

function uo({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: i,
    resetTransform: s
}) {
    return class {
        constructor(t = {}, n = e ? .()) {
            this.id = Yl++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(Jl), this.nodes.forEach(iu), this.nodes.forEach(ou), this.nodes.forEach(Ql)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new $l)
        }
        addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new en), this.eventHandlers.get(t).add(e)
        }
        notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            n && n.notify(...e)
        }
        hasListeners(t) {
            return this.eventHandlers.has(t)
        }
        mount(e) {
            if (this.instance) return;
            this.isSVG = wn(e) && !Za(e), this.instance = e;
            const {
                layoutId: n,
                layout: i,
                visualElement: s
            } = this.options;
            if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (i || n) && (this.isLayoutDirty = !0), t) {
                let n, i = 0;
                const s = () => this.root.updateBlockedByResize = !1;
                M.read(() => {
                    i = window.innerWidth
                }), t(e, () => {
                    const t = window.innerWidth;
                    t !== i && (i = t, this.root.updateBlockedByResize = !0, n && n(), n = zl(s, 250), qt.hasAnimatedSinceResize && (qt.hasAnimatedSinceResize = !1, this.nodes.forEach(bs)))
                })
            }
            n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || i) && this.addEventListener("didUpdate", ({
                delta: t,
                hasLayoutChanged: e,
                hasRelativeLayoutChanged: n,
                layout: i
            }) => {
                if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
                const o = this.options.transition || s.getDefaultTransition() || cu,
                    {
                        onLayoutAnimationStart: r,
                        onLayoutAnimationComplete: a
                    } = s.getProps(),
                    l = !this.targetLayout || !ro(this.targetLayout, i),
                    u = !e && n;
                if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const e = { ...pn(o, "layout"),
                        onPlay: r,
                        onComplete: a
                    };
                    (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, u, e.path)
                } else e || bs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = i
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const t = this.getStack();
            t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), it(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ru), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: t
            } = this.options;
            return t && t.getProps().transformTemplate
        }
        willUpdate(t = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && lo(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
                const e = this.path[t];
                e.shouldResetTransform = !0, ("string" == typeof e.latestValues.x || "string" == typeof e.latestValues.y) && (e.isLayoutDirty = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
            }
            const {
                layoutId: e,
                layout: n
            } = this.options;
            if (void 0 === e && !n) return;
            const i = this.getTransformTemplate();
            this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                const t = this.updateBlockedByResize;
                return this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), t && this.nodes.forEach(eu), void this.nodes.forEach(Ps)
            }
            if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(Ss);
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(nu), this.nodes.forEach(su), this.nodes.forEach(ql), this.nodes.forEach(Zl)) : this.nodes.forEach(Ss), this.clearAllSnapshots();
            const t = j.now();
            F.delta = Q(0, 1e3 / 60, t - F.timestamp), F.timestamp = t, F.isProcessing = !0, fe.update.process(F), fe.preRender.process(F), fe.render.process(F), F.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, xn.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(tu), this.sharedNodes.forEach(au)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, M.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            M.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !N(this.snapshot.measuredBox.x) && !N(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!(this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty))) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const t = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = k()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: e
            } = this.options;
            e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
        }
        updateScroll(t = "measure") {
            let e = !(!this.options.layoutScroll || !this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
                const e = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: t,
                    isRoot: e,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : e
                }
            }
        }
        resetTransform() {
            if (!s) return;
            const t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                e = this.projectionDelta && !oo(this.projectionDelta),
                n = this.getTransformTemplate(),
                i = n ? n(this.latestValues, "") : void 0,
                o = i !== this.prevTransformTemplateValue;
            t && this.instance && (e || ut(this.latestValues) || o) && (s(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            return t && (n = this.removeTransform(n)), hu(n), {
                animationId: this.root.animationId,
                measuredBox: e,
                layoutBox: n,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: t
            } = this.options;
            if (!t) return k();
            const e = t.measureViewportBox();
            if (!this.scroll ? .wasRoot && !this.path.some(fu)) {
                const {
                    scroll: t
                } = this.root;
                t && (Z(e.x, t.offset.x), Z(e.y, t.offset.y))
            }
            return e
        }
        removeElementScroll(t) {
            const e = k();
            if ($(e, t), this.scroll ? .wasRoot) return e;
            for (let n = 0; n < this.path.length; n++) {
                const i = this.path[n],
                    {
                        scroll: s,
                        options: o
                    } = i;
                i !== this.root && s && o.layoutScroll && (s.wasRoot && $(e, t), Z(e.x, s.offset.x), Z(e.y, s.offset.y))
            }
            return e
        }
        applyTransform(t, e = !1, n) {
            const i = n || k();
            $(i, t);
            for (let t = 0; t < this.path.length; t++) {
                const n = this.path[t];
                !e && n.options.layoutScroll && n.scroll && n !== n.root && (Z(i.x, -n.scroll.offset.x), Z(i.y, -n.scroll.offset.y)), ut(n.latestValues) && Xt(i, n.latestValues, n.layout ? .layoutBox)
            }
            return ut(this.latestValues) && Xt(i, this.latestValues, this.layout ? .layoutBox), i
        }
        removeTransform(t) {
            const e = k();
            $(e, t);
            for (let t = 0; t < this.path.length; t++) {
                const n = this.path[t];
                if (!ut(n.latestValues)) continue;
                let i;
                n.instance && (Xe(n.latestValues) && n.updateSnapshot(), i = k(), $(i, n.measurePageBox())), ds(e, n.latestValues, n.snapshot ? .layoutBox, i)
            }
            return ut(this.latestValues) && ds(e, this.latestValues), e
        }
        setTargetDelta(t) {
            this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(t) {
            this.options = { ...this.options,
                ...t,
                crossfade: void 0 === t.crossfade || t.crossfade
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(t = !1) {
            const e = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            const n = !!this.resumingFrom || this !== e;
            if (!(t || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: i,
                layoutId: s
            } = this.options;
            if (!this.layout || !i && !s) return;
            this.resolvedRelativeTargetAt = F.timestamp;
            const o = this.getClosestProjectingParent();
            o && this.linkedParentVersion !== o.layoutVersion && !o.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (!1 !== this.options.layoutAnchor && o && o.layout ? this.createRelativeTarget(o, this.layout.layoutBox, o.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = k(), this.targetWithTransforms = k()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), kl(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : $(this.target, this.layout.layoutBox), _i(this.target, this.targetDelta)) : $(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, !1 !== this.options.layoutAnchor && o && !!o.resumingFrom == !!this.resumingFrom && !o.options.layoutScroll && o.target && 1 !== this.animationProgress ? this.createRelativeTarget(o, this.target, o.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (this.parent && !Xe(this.parent.latestValues) && !zi(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !(!(this.relativeTarget || this.targetDelta || this.options.layoutRoot) || !this.layout)
        }
        createRelativeTarget(t, e, n) {
            this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = k(), this.relativeTargetOrigin = k(), oe(this.relativeTargetOrigin, e, n, this.options.layoutAnchor || void 0), $(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            const t = this.getLead(),
                e = !!this.resumingFrom || this !== t;
            let n = !0;
            if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (n = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === F.timestamp && (n = !1), n) return;
            const {
                layout: i,
                layoutId: s
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !s) return;
            $(this.layoutCorrected, this.layout.layoutBox);
            const o = this.treeScale.x,
                r = this.treeScale.y;
            ll(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = k());
            const {
                target: a
            } = t;
            a ? (this.projectionDelta && this.prevProjectionDelta ? (as(this.prevProjectionDelta.x, this.projectionDelta.x), as(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), Mt(this.projectionDelta, this.layoutCorrected, a, this.latestValues), (this.treeScale.x !== o || this.treeScale.y !== r || !vs(this.projectionDelta.x, this.prevProjectionDelta.x) || !vs(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a))) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(t = !0) {
            if (this.options.visualElement ? .scheduleRender(), t) {
                const t = this.getStack();
                t && t.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = vt(), this.projectionDelta = vt(), this.projectionDeltaWithTransform = vt()
        }
        setAnimationOrigin(t, e = !1, n) {
            const i = this.snapshot,
                s = i ? i.latestValues : {},
                o = { ...this.latestValues
                },
                r = vt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
            const a = k(),
                l = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
                u = this.getStack(),
                h = !u || u.members.length <= 1,
                c = !(!l || h || !0 !== this.options.crossfade || this.path.some(uu));
            let d;
            this.animationProgress = 0;
            const p = n ? .interpolateProjection(t);
            this.mixTargetDelta = e => {
                const n = e / 1e3,
                    i = p ? .(n);
                i ? (r.x.translate = i.x, r.x.scale = C(t.x.scale, 1, n), r.x.origin = t.x.origin, r.x.originPoint = t.x.originPoint, r.y.translate = i.y, r.y.scale = C(t.y.scale, 1, n), r.y.origin = t.y.origin, r.y.originPoint = t.y.originPoint) : (As(r.x, t.x, n), As(r.y, t.y, n)), this.setTargetDelta(r), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (oe(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), lu(this.relativeTarget, this.relativeTargetOrigin, a, n), d && Ol(this.relativeTarget, d) && (this.isProjectionDirty = !1), d || (d = k()), $(d, this.relativeTarget)), l && (this.animationValues = o, Ul(o, s, this.latestValues, n, c, h)), i && void 0 !== i.rotate && (this.animationValues || (this.animationValues = o), this.animationValues.pathRotation = i.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(t) {
            this.notifyListeners("animationStart"), this.currentAnimation ? .stop(), this.resumingFrom ? .currentAnimation ? .stop(), this.pendingAnimation && (it(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = M.update(() => {
                qt.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Tt(0)), this.motionValue.jump(0, !1), this.currentAnimation = Hl(this.motionValue, [0, 1e3], { ...t,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: e => {
                        this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                    },
                    onComplete: () => {
                        t.onComplete && t.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const t = this.getStack();
            t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Xl), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const t = this.getLead();
            let {
                targetWithTransforms: e,
                target: n,
                layout: i,
                latestValues: s
            } = t;
            if (e && n && i) {
                if (this !== t && this.layout && i && co(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                    n = this.target || k();
                    const e = N(this.layout.layoutBox.x);
                    n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                    const i = N(this.layout.layoutBox.y);
                    n.y.min = t.target.y.min, n.y.max = n.y.min + i
                }
                $(e, n), Xt(e, s), Mt(this.projectionDeltaWithTransform, this.layoutCorrected, e, s)
            }
        }
        registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new _l), this.sharedNodes.get(t).add(e);
            const n = e.options.initialPromotionConfig;
            e.promote({
                transition: n ? n.transition : void 0,
                preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
            })
        }
        isLead() {
            const t = this.getStack();
            return !t || t.lead === this
        }
        getLead() {
            const {
                layoutId: t
            } = this.options;
            return t && this.getStack() ? .lead || this
        }
        getPrevLead() {
            const {
                layoutId: t
            } = this.options;
            return t ? this.getStack() ? .prevLead : void 0
        }
        getStack() {
            const {
                layoutId: t
            } = this.options;
            if (t) return this.root.sharedNodes.get(t)
        }
        promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n
        } = {}) {
            const i = this.getStack();
            i && i.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                transition: e
            })
        }
        relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this)
        }
        resetSkewAndRotation() {
            const {
                visualElement: t
            } = this.options;
            if (!t) return;
            let e = !1;
            const {
                latestValues: n
            } = t;
            if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (e = !0), !e) return;
            const i = {};
            n.z && we("z", t, i, this.animationValues);
            for (let e = 0; e < Te.length; e++) we(`rotate${Te[e]}`, t, i, this.animationValues), we(`skew${Te[e]}`, t, i, this.animationValues);
            t.render();
            for (const e in i) t.setStaticValue(e, i[e]), this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender()
        }
        applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return void(t.visibility = "hidden");
            const n = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = Yt(e ? .pointerEvents) || "", void(t.transform = n ? n(this.latestValues, "") : "none");
            const i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = Yt(e ? .pointerEvents) || ""), void(this.hasProjected && !ut(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1));
            t.visibility = "";
            const s = i.animationValues || i.latestValues;
            this.applyTransformsToTarget();
            let o = jl(this.projectionDeltaWithTransform, this.treeScale, s);
            n && (o = n(s, o)), t.transform = o;
            const {
                x: r,
                y: a
            } = this.projectionDelta;
            t.transformOrigin = `${100*r.origin}% ${100*a.origin}% 0`, i.animationValues ? t.opacity = i === this ? s.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : t.opacity = i === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0;
            for (const e in kt) {
                if (void 0 === s[e]) continue;
                const {
                    correct: n,
                    applyTo: r,
                    isCSSVariable: a
                } = kt[e], l = "none" === o ? s[e] : n(s[e], i);
                if (r) {
                    const e = r.length;
                    for (let n = 0; n < e; n++) t[r[n]] = l
                } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
            }
            this.options.layoutId && (t.pointerEvents = i === this ? Yt(e ? .pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(t => t.currentAnimation ? .stop()), this.root.nodes.forEach(Ps), this.root.sharedNodes.clear()
        }
    }
}

function ql(t) {
    t.updateLayout()
}

function Zl(t) {
    const e = t.resumeFrom ? .snapshot || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
        const {
            layoutBox: n,
            measuredBox: i
        } = t.layout, {
            animationType: s
        } = t.options, o = e.source !== t.layout.source;
        if ("size" === s) q(t => {
            const i = o ? e.measuredBox[t] : e.layoutBox[t],
                s = N(i);
            i.min = n[t].min, i.max = i.min + s
        });
        else if ("x" === s || "y" === s) {
            const t = "x" === s ? "y" : "x";
            qe(o ? e.measuredBox[t] : e.layoutBox[t], n[t])
        } else co(s, e.layoutBox, n) && q(i => {
            const s = o ? e.measuredBox[i] : e.layoutBox[i],
                r = N(n[i]);
            s.max = s.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + r)
        });
        const r = vt();
        Mt(r, n, e.layoutBox);
        const a = vt();
        o ? Mt(a, t.applyTransform(i, !0), e.measuredBox) : Mt(a, n, e.layoutBox);
        const l = !oo(r);
        let u = !1;
        if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
                const {
                    snapshot: s,
                    layout: o
                } = i;
                if (s && o) {
                    const r = t.options.layoutAnchor || void 0,
                        a = k();
                    oe(a, e.layoutBox, s.layoutBox, r);
                    const l = k();
                    oe(l, n, o.layoutBox, r), ro(a, l) || (u = !0), i.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = i)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: e,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: e
        } = t.options;
        e && e()
    }
    t.options.transition = void 0
}

function Jl(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function Ql(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function tu(t) {
    t.clearSnapshot()
}

function Ps(t) {
    t.clearMeasurements()
}

function eu(t) {
    t.isLayoutDirty = !0, t.updateLayout()
}

function Ss(t) {
    t.isLayoutDirty = !1
}

function nu(t) {
    t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0)
}

function su(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function bs(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function iu(t) {
    t.resolveTargetDelta()
}

function ou(t) {
    t.calcProjection()
}

function ru(t) {
    t.resetSkewAndRotation()
}

function au(t) {
    t.removeLeadSnapshot()
}

function As(t, e, n) {
    t.translate = C(e.translate, 0, n), t.scale = C(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function Vs(t, e, n, i) {
    t.min = C(e.min, n.min, i), t.max = C(e.max, n.max, i)
}

function lu(t, e, n, i) {
    Vs(t.x, e.x, n.x, i), Vs(t.y, e.y, n.y, i)
}

function uu(t) {
    return t.animationValues && void 0 !== t.animationValues.opacityExit
}
const cu = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Cs = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    Ms = Cs("applewebkit/") && !Cs("chrome/") ? Math.round : G;

function Ds(t) {
    t.min = Ms(t.min), t.max = Ms(t.max)
}

function hu(t) {
    Ds(t.x), Ds(t.y)
}

function co(t, e, n) {
    return "position" === t || "preserve-aspect" === t && !Ll(ys(e), ys(n), .2)
}

function fu(t) {
    return t !== t.root && t.scroll ? .wasRoot
}
const du = uo({
        attachResizeListener: (t, e) => Bt(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body ? .scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body ? .scrollTop || 0
        }),
        checkIsScrollRoot: () => !0
    }),
    Pe = {
        current: void 0
    },
    ho = uo({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!Pe.current) {
                const t = new du({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), Pe.current = t
            }
            return Pe.current
        },
        resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
        },
        checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
    }),
    fo = P.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });

function pu(t = !0) {
    const e = P.useContext(ae);
    if (null === e) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: i,
        register: s
    } = e, o = P.useId();
    P.useEffect(() => {
        if (t) return s(o)
    }, [t]);
    const r = P.useCallback(() => t && i && i(o), [o, i, t]);
    return !n && i ? [!1, r] : [!0]
}

function Rc() {
    return mu(P.useContext(ae))
}

function mu(t) {
    return null === t || t.isPresent
}
const po = P.createContext({
        strict: !1
    }),
    Es = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    };
let Rs = !1;

function gu() {
    if (Rs) return;
    const t = {};
    for (const e in Es) t[e] = {
        isEnabled: t => Es[e].some(e => !!t[e])
    };
    Hi(t), Rs = !0
}

function mo() {
    return gu(), il()
}

function yu(t) {
    const e = mo();
    for (const n in t) e[n] = { ...e[n],
        ...t[n]
    };
    Hi(e)
}
const vu = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

function re(t) {
    return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || vu.has(t)
}
let go = t => !re(t);

function xu(t) {
    "function" == typeof t && (go = e => e.startsWith("on") ? !re(e) : t(e))
}
try {
    xu(require("@emotion/is-prop-valid").default)
} catch {}

function Tu(t, e, n) {
    const i = {};
    for (const s in t) "values" === s && "object" == typeof t.values || O(t[s]) || (go(s) || !0 === n && re(s) || !e && !re(s) || t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
    return i
}
const he = P.createContext({});

function wu(t, e) {
    if (ce(t)) {
        const {
            initial: e,
            animate: n
        } = t;
        return {
            initial: !1 === e || Lt(e) ? e : void 0,
            animate: Lt(n) ? n : void 0
        }
    }
    return !1 !== t.inherit ? e : {}
}

function Pu(t) {
    const {
        initial: e,
        animate: n
    } = wu(t, P.useContext(he));
    return P.useMemo(() => ({
        initial: e,
        animate: n
    }), [Ls(e), Ls(n)])
}

function Ls(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const Vn = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function yo(t, e, n) {
    for (const i in e) !O(e[i]) && !qi(i, n) && (t[i] = e[i])
}

function Su({
    transformTemplate: t
}, e) {
    return P.useMemo(() => {
        const n = Vn();
        return bn(n, e, t), Object.assign({}, n.vars, n.style)
    }, [e])
}

function bu(t, e) {
    const n = {};
    return yo(n, t.style || {}, t), Object.assign(n, Su(t, e)), n
}

function Au(t, e) {
    const n = {},
        i = bu(t, e);
    return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
}
const vo = () => ({ ...Vn(),
    attrs: {}
});

function Vu(t, e, n, i) {
    const s = P.useMemo(() => {
        const n = vo();
        return Zi(n, e, Qi(i), t.transformTemplate, t.style), { ...n.attrs,
            style: { ...n.style
            }
        }
    }, [e]);
    if (t.style) {
        const e = {};
        yo(e, t.style, t), s.style = { ...e,
            ...s.style
        }
    }
    return s
}
const Cu = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Cn(t) {
    return "string" == typeof t && !t.includes("-") && !!(Cu.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function Mu(t, e, n, {
    latestValues: i
}, s, o = !1, r) {
    const a = (r ? ? Cn(t) ? Vu : Au)(e, i, s, t),
        l = Tu(e, "string" == typeof t, o),
        u = t !== P.Fragment ? { ...l,
            ...a,
            ref: n
        } : {},
        {
            children: h
        } = e,
        c = P.useMemo(() => O(h) ? h.get() : h, [h]);
    return P.createElement(t, { ...u,
        children: c
    })
}

function Du({
    scrapeMotionValuesFromProps: t,
    createRenderState: e
}, n, i, s) {
    return {
        latestValues: Eu(n, i, s, t),
        renderState: e()
    }
}

function Eu(t, e, n, i) {
    const s = {},
        o = i(t, {});
    for (const t in o) s[t] = Yt(o[t]);
    let {
        initial: r,
        animate: a
    } = t;
    const l = ce(t),
        u = Wi(t);
    e && u && !l && !1 !== t.inherit && (void 0 === r && (r = e.initial), void 0 === a && (a = e.animate));
    let h = !!n && !1 === n.initial;
    h = h || !1 === r;
    const c = h ? a : r;
    if (c && "boolean" != typeof c && !ue(c)) {
        const e = Array.isArray(c) ? c : [c];
        for (let n = 0; n < e.length; n++) {
            const i = gn(t, e[n]);
            if (i) {
                const {
                    transitionEnd: t,
                    transition: e,
                    ...n
                } = i;
                for (const t in n) {
                    let e = n[t];
                    if (Array.isArray(e)) {
                        e = e[h ? e.length - 1 : 0]
                    }
                    null !== e && (s[t] = e)
                }
                for (const e in t) s[e] = t[e]
            }
        }
    }
    return s
}
const xo = t => (e, n) => {
        const i = P.useContext(he),
            s = P.useContext(ae),
            o = () => Du(t, e, i, s);
        return n ? o() : Co(o)
    },
    Ru = xo({
        scrapeMotionValuesFromProps: An,
        createRenderState: Vn
    }),
    Lu = xo({
        scrapeMotionValuesFromProps: to,
        createRenderState: vo
    }),
    ku = Symbol.for("motionComponentSymbol");

function Bu(t, e, n) {
    const i = P.useRef(n);
    P.useInsertionEffect(() => {
        i.current = n
    });
    const s = P.useRef(null);
    return P.useCallback(n => {
        n && t.onMount ? .(n), e && (n ? e.mount(n) : e.unmount());
        const o = i.current;
        if ("function" == typeof o)
            if (n) {
                const t = o(n);
                "function" == typeof t && (s.current = t)
            } else s.current ? (s.current(), s.current = null) : o(n);
        else o && (o.current = n)
    }, [e])
}
const To = P.createContext({});

function mt(t) {
    return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
}

function Iu(t, e, n, i, s, o) {
    const {
        visualElement: r
    } = P.useContext(he), a = P.useContext(po), l = P.useContext(ae), u = P.useContext(fo), h = u.reducedMotion, c = u.skipAnimations, d = P.useRef(null), p = P.useRef(!1);
    i = i || a.renderer, !d.current && i && (d.current = i(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: l,
        blockInitialAnimation: !!l && !1 === l.initial,
        reducedMotionConfig: h,
        skipAnimations: c,
        isSVG: o
    }), p.current && d.current && (d.current.manuallyAnimateOnMount = !0));
    const m = d.current,
        f = P.useContext(To);
    m && !m.projection && s && ("html" === m.type || "svg" === m.type) && Fu(d.current, n, s, f);
    const y = P.useRef(!1);
    P.useInsertionEffect(() => {
        m && y.current && m.update(n, l)
    });
    const g = n[Di],
        v = P.useRef(!!g && typeof window < "u" && !window.MotionHandoffIsComplete ? .(g) && window.MotionHasOptimisedAnimation ? .(g));
    return Do(() => {
        p.current = !0, m && (y.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges())
    }), P.useEffect(() => {
        m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete ? .(g)
        }), v.current = !1), m.enteringChildren = void 0)
    }), m
}

function Fu(t, e, n, i) {
    const {
        layoutId: s,
        layout: o,
        drag: r,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u,
        layoutAnchor: h,
        layoutCrossfade: c
    } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : wo(t.parent)), t.projection.setOptions({
        layoutId: s,
        layout: o,
        alwaysMeasureLayout: !!r || a && mt(a),
        visualElement: t,
        animationType: "string" == typeof o ? o : "both",
        initialPromotionConfig: i,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: u,
        layoutAnchor: h
    })
}

function wo(t) {
    if (t) return !1 !== t.options.allowProjection ? t.projection : wo(t.parent)
}

function Se(t, {
    forwardMotionProps: e = !1,
    type: n
} = {}, i, s) {
    i && yu(i);
    const o = n ? "svg" === n : Cn(t),
        r = o ? Lu : Ru;

    function a(n, i) {
        let a;
        const l = { ...P.useContext(fo),
                ...n,
                layoutId: Ou(n)
            },
            {
                isStatic: u
            } = l,
            h = Pu(n),
            c = r(n, u);
        if (!u && typeof window < "u") {
            ju();
            const e = Nu(l);
            a = e.MeasureLayout, h.visualElement = Iu(t, c, l, s, e.ProjectionNode, o)
        }
        return Me.jsxs(he.Provider, {
            value: h,
            children: [a && h.visualElement ? Me.jsx(a, {
                visualElement: h.visualElement,
                ...l
            }) : null, Mu(t, n, Bu(c, h.visualElement, i), c, u, e, o)]
        })
    }
    a.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
    const l = P.forwardRef(a);
    return l[ku] = t, l
}

function Ou({
    layoutId: t
}) {
    const e = P.useContext(Hs).id;
    return e && void 0 !== t ? e + "-" + t : t
}

function ju(t, e) {
    P.useContext(po).strict
}

function Nu(t) {
    const e = mo(),
        {
            drag: n,
            layout: i
        } = e;
    if (!n && !i) return {};
    const s = { ...n,
        ...i
    };
    return {
        MeasureLayout: n ? .isEnabled(t) || i ? .isEnabled(t) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}

function Uu(t, e) {
    if (typeof Proxy > "u") return Se;
    const n = new Map,
        i = (n, i) => Se(n, i, t, e);
    return new Proxy((t, e) => i(t, e), {
        get: (s, o) => "create" === o ? i : (n.has(o) || n.set(o, Se(o, void 0, t, e)), n.get(o))
    })
}
const Wu = (t, e) => e.isSVG ? ? Cn(t) ? new wl(e) : new ml(e, {
    allowProjection: t !== P.Fragment
});
class Ku extends ot {
    constructor(t) {
        super(t), t.animationState || (t.animationState = Vl(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        ue(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: e
        } = this.node.prevProps || {};
        t !== e && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(), this.unmountControls ? .()
    }
}
let Hu = 0;
class Gu extends ot {
    constructor() {
        super(...arguments), this.id = Hu++, this.isExitComplete = !1
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: e
        } = this.node.presenceContext, {
            isPresent: n
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === n) return;
        if (t && !1 === n) {
            if (this.isExitComplete) {
                const {
                    initial: t,
                    custom: e
                } = this.node.getProps();
                if ("string" == typeof t || "object" == typeof t && null !== t && !Array.isArray(t)) {
                    const n = dt(this.node, t, e);
                    if (n) {
                        const {
                            transition: t,
                            transitionEnd: e,
                            ...i
                        } = n;
                        for (const t in i) this.node.getValue(t) ? .jump(i[t])
                    }
                }
                this.node.animationState.reset(), this.node.animationState.animateChanges()
            } else this.node.animationState.setActive("exit", !1);
            return void(this.isExitComplete = !1)
        }
        const i = this.node.animationState.setActive("exit", !t);
        e && !t && i.then(() => {
            this.isExitComplete = !0, e(this.id)
        })
    }
    mount() {
        const {
            register: t,
            onExitComplete: e
        } = this.node.presenceContext || {};
        e && e(this.id), t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const $u = {
    animation: {
        Feature: Ku
    },
    exit: {
        Feature: Gu
    }
};

function jt(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const zu = t => e => Tn(e) && t(e, jt(e));

function Dt(t, e, n, i) {
    return Bt(t, e, zu(n), i)
}
const Po = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    ks = (t, e) => Math.abs(t - e);

function _u(t, e) {
    const n = ks(t.x, e.x),
        i = ks(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2)
}
const Bs = new Set(["auto", "scroll"]);
class So {
    constructor(t, e, {
        transformPagePoint: n,
        contextWindow: i = window,
        dragSnapToOrigin: s = !1,
        distanceThreshold: o = 3,
        element: r
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = t => {
                this.handleScroll(t.target)
            }, this.onWindowScroll = () => {
                this.handleScroll(window)
            }, this.updatePoint = () => {
                if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Wt(this.lastRawMoveEventInfo, this.transformPagePoint));
                const t = be(this.lastMoveEventInfo, this.history),
                    e = null !== this.startEvent,
                    n = _u(t.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!e && !n) return;
                const {
                    point: i
                } = t, {
                    timestamp: s
                } = F;
                this.history.push({ ...i,
                    timestamp: s
                });
                const {
                    onStart: o,
                    onMove: r
                } = this.handlers;
                e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
                this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = Wt(e, this.transformPagePoint), M.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
                this.end();
                const {
                    onEnd: n,
                    onSessionEnd: i,
                    resumeAnimation: s
                } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && s && s(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
                const o = be("pointercancel" === t.type ? this.lastMoveEventInfo : Wt(e, this.transformPagePoint), this.history);
                this.startEvent && n && n(t, o), i && i(t, o)
            }, !Tn(t)) return;
        this.dragSnapToOrigin = s, this.handlers = e, this.transformPagePoint = n, this.distanceThreshold = o, this.contextWindow = i || window;
        const a = Wt(jt(t), this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = F;
        this.history = [{ ...l,
            timestamp: u
        }];
        const {
            onSessionStart: h
        } = e;
        h && h(t, be(a, this.history));
        const c = {
            passive: !0,
            capture: !0
        };
        this.removeListeners = It(Dt(this.contextWindow, "pointermove", this.handlePointerMove, c), Dt(this.contextWindow, "pointerup", this.handlePointerUp, c), Dt(this.contextWindow, "pointercancel", this.handlePointerUp, c)), r && this.startScrollTracking(r)
    }
    startScrollTracking(t) {
        let e = t.parentElement;
        for (; e;) {
            const t = getComputedStyle(e);
            (Bs.has(t.overflowX) || Bs.has(t.overflowY)) && this.scrollPositions.set(e, {
                x: e.scrollLeft,
                y: e.scrollTop
            }), e = e.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const e = this.scrollPositions.get(t);
        if (!e) return;
        const n = t === window,
            i = n ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: t.scrollLeft,
                y: t.scrollTop
            },
            s = i.x - e.x,
            o = i.y - e.y;
        0 === s && 0 === o || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s, this.lastMoveEventInfo.point.y += o) : this.history.length > 0 && (this.history[0].x -= s, this.history[0].y -= o), this.scrollPositions.set(t, i), M.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), it(this.updatePoint)
    }
}

function Wt(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function Is(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function be({
    point: t
}, e) {
    return {
        point: t,
        delta: Is(t, bo(e)),
        offset: Is(t, Xu(e)),
        velocity: Yu(e, .1)
    }
}

function Xu(t) {
    return t[0]
}

function bo(t) {
    return t[t.length - 1]
}

function Yu(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let n = t.length - 1,
        i = null;
    const s = bo(t);
    for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > W(e)));) n--;
    if (!i) return {
        x: 0,
        y: 0
    };
    i === t[0] && t.length > 2 && s.timestamp - i.timestamp > 2 * W(e) && (i = t[1]);
    const o = H(s.timestamp - i.timestamp);
    if (0 === o) return {
        x: 0,
        y: 0
    };
    const r = {
        x: (s.x - i.x) / o,
        y: (s.y - i.y) / o
    };
    return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
}

function qu(t, {
    min: e,
    max: n
}, i) {
    return void 0 !== e && t < e ? t = i ? C(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? C(n, t, i.max) : Math.min(t, n)), t
}

function Fs(t, e, n) {
    return {
        min: void 0 !== e ? t.min + e : void 0,
        max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
    }
}

function Zu(t, {
    top: e,
    left: n,
    bottom: i,
    right: s
}) {
    return {
        x: Fs(t.x, n, s),
        y: Fs(t.y, e, i)
    }
}

function Os(t, e) {
    let n = e.min - t.min,
        i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
        min: n,
        max: i
    }
}

function Ju(t, e) {
    return {
        x: Os(t.x, e.x),
        y: Os(t.y, e.y)
    }
}

function Qu(t, e) {
    let n = .5;
    const i = N(t),
        s = N(e);
    return s > i ? n = Et(e.min, e.max - i, t.min) : i > s && (n = Et(t.min, t.max - s, e.min)), Q(0, 1, n)
}

function tc(t, e) {
    const n = {};
    return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
}
const Ze = .35;

function ec(t = Ze) {
    return !1 === t ? t = 0 : !0 === t && (t = Ze), {
        x: js(t, "left", "right"),
        y: js(t, "top", "bottom")
    }
}

function js(t, e, n) {
    return {
        min: Ns(t, e),
        max: Ns(t, n)
    }
}

function Ns(t, e) {
    return "number" == typeof t ? t : t[e] || 0
}
const nc = new WeakMap;
class sc {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = k(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
    }
    start(t, {
        snapToCursor: e = !1,
        distanceThreshold: n
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && !1 === i.isPresent) return;
        const {
            dragSnapToOrigin: s
        } = this.getProps();
        this.panSession = new So(t, {
            onSessionStart: t => {
                e && this.snapToCursor(jt(t).point), this.stopAnimation()
            },
            onStart: (t, e) => {
                const {
                    drag: n,
                    dragPropagation: i,
                    onDragStart: s
                } = this.getProps();
                if (n && !i && (this.openDragLock && this.openDragLock(), this.openDragLock = Ba(n), !this.openDragLock)) return;
                this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), q(t => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (J.test(e)) {
                        const {
                            projection: n
                        } = this.visualElement;
                        if (n && n.layout) {
                            const i = n.layout.layoutBox[t];
                            i && (e = N(i) * (parseFloat(e) / 100))
                        }
                    }
                    this.originPoint[t] = e
                }), s && M.update(() => s(t, e), !1, !0), Ke(this.visualElement, "transform");
                const {
                    animationState: o
                } = this.visualElement;
                o && o.setActive("whileDrag", !0)
            },
            onMove: (t, e) => {
                this.latestPointerEvent = t, this.latestPanInfo = e;
                const {
                    dragPropagation: n,
                    dragDirectionLock: i,
                    onDirectionLock: s,
                    onDrag: o
                } = this.getProps();
                if (!n && !this.openDragLock) return;
                const {
                    offset: r
                } = e;
                if (i && null === this.currentDirection) return this.currentDirection = oc(r), void(null !== this.currentDirection && s && s(this.currentDirection));
                this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), o && M.update(() => o(t, e), !1, !0)
            },
            onSessionEnd: (t, e) => {
                this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            resumeAnimation: () => {
                const {
                    dragSnapToOrigin: t
                } = this.getProps();
                (t || this.constraints) && this.startAnimation({
                    x: 0,
                    y: 0
                })
            }
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: s,
            distanceThreshold: n,
            contextWindow: Po(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, e) {
        const n = t || this.latestPointerEvent,
            i = e || this.latestPanInfo,
            s = this.isDragging;
        if (this.cancel(), !s || !i || !n) return;
        const {
            velocity: o
        } = i;
        this.startAnimation(o);
        const {
            onDragEnd: r
        } = this.getProps();
        r && M.postRender(() => r(n, i))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: e
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.endPanSession();
        const {
            dragPropagation: n
        } = this.getProps();
        !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(), this.panSession = void 0
    }
    updateAxis(t, e, n) {
        const {
            drag: i
        } = this.getProps();
        if (!n || !Kt(t, i, this.currentDirection)) return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + n[t];
        this.constraints && this.constraints[t] && (o = qu(o, this.constraints[t], this.elastic[t])), s.set(o)
    }
    resolveConstraints() {
        const {
            dragConstraints: t,
            dragElastic: e
        } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, i = this.constraints;
        t && mt(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && Zu(n.layoutBox, t), this.elastic = ec(e), i !== this.constraints && !mt(t) && n && this.constraints && !this.hasMutatedConstraints && q(t => {
            !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = tc(n.layoutBox[t], this.constraints[t]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: e
        } = this.getProps();
        if (!t || !mt(t)) return !1;
        const n = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        i.root && (i.root.scroll = void 0, i.root.updateScroll());
        const s = ul(n, i.root, this.visualElement.getTransformPagePoint());
        let o = Ju(i.layout.layoutBox, s);
        if (e) {
            const t = e(rl(o));
            this.hasMutatedConstraints = !!t, t && (o = $i(t))
        }
        return o
    }
    startAnimation(t) {
        const {
            drag: e,
            dragMomentum: n,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: r
        } = this.getProps(), a = this.constraints || {}, l = q(r => {
            if (!Kt(r, e, this.currentDirection)) return;
            let l = a && a[r] || {};
            (!0 === o || o === r) && (l = {
                min: 0,
                max: 0
            });
            const u = i ? 200 : 1e6,
                h = i ? 40 : 1e7,
                c = {
                    type: "inertia",
                    velocity: n ? t[r] : 0,
                    bounceStiffness: u,
                    bounceDamping: h,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...l
                };
            return this.startAxisValueAnimation(r, c)
        });
        return Promise.all(l).then(r)
    }
    startAxisValueAnimation(t, e) {
        const n = this.getAxisMotionValue(t);
        return Ke(this.visualElement, t), n.start(mn(t, n, 0, e, this.visualElement, !1))
    }
    stopAnimation() {
        q(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const e = `_drag${t.toUpperCase()}`;
        return this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ? ? 0)
    }
    snapToCursor(t) {
        q(e => {
            const {
                drag: n
            } = this.getProps();
            if (!Kt(e, n, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, s = this.getAxisMotionValue(e);
            if (i && i.layout) {
                const {
                    min: n,
                    max: o
                } = i.layout.layoutBox[e], r = s.get() || 0;
                s.set(t[e] - C(n, o, .5) + r)
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: e
        } = this.getProps(), {
            projection: n
        } = this.visualElement;
        if (!mt(e) || !n || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        q(t => {
            const e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
                const n = e.get();
                i[t] = Qu({
                    min: n,
                    max: n
                }, this.constraints[t])
            }
        });
        const {
            transformTemplate: s
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), q(e => {
            if (!Kt(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
                {
                    min: s,
                    max: o
                } = this.constraints[e];
            n.set(C(s, o, i[e]))
        }), this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current) return;
        nc.set(this.visualElement, this);
        const t = this.visualElement.current,
            e = Dt(t, "pointerdown", e => {
                const {
                    drag: n,
                    dragListener: i = !0
                } = this.getProps(), s = e.target, o = s !== t && Ua(s);
                n && i && !o && this.start(e)
            });
        let n;
        const i = () => {
                const {
                    dragConstraints: e
                } = this.getProps();
                mt(e) && e.current && (this.constraints = this.resolveRefConstraints(), n || (n = ic(t, e.current, () => this.scalePositionWithinConstraints())))
            },
            {
                projection: s
            } = this.visualElement,
            o = s.addEventListener("measure", i);
        s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), M.read(i);
        const r = Bt(window, "resize", () => this.scalePositionWithinConstraints()),
            a = s.addEventListener("didUpdate", ({
                delta: t,
                hasLayoutChanged: e
            }) => {
                this.isDragging && e && (q(e => {
                    const n = this.getAxisMotionValue(e);
                    n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                }), this.visualElement.render())
            });
        return () => {
            r(), e(), o(), a && a(), n && n()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: e = !1,
                dragDirectionLock: n = !1,
                dragPropagation: i = !1,
                dragConstraints: s = !1,
                dragElastic: o = Ze,
                dragMomentum: r = !0
            } = t;
        return { ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: r
        }
    }
}

function Us(t) {
    let e = !0;
    return () => {
        e ? e = !1 : t()
    }
}

function ic(t, e, n) {
    const i = Yn(t, Us(n)),
        s = Yn(e, Us(n));
    return () => {
        i(), s()
    }
}

function Kt(t, e, n) {
    return !(!0 !== e && e !== t || null !== n && n !== t)
}

function oc(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class rc extends ot {
    constructor(t) {
        super(t), this.removeGroupControls = G, this.removeListeners = G, this.controls = new sc(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || G
    }
    update() {
        const {
            dragControls: t
        } = this.node.getProps(), {
            dragControls: e
        } = this.node.prevProps || {};
        t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
    }
}
const Ae = t => (e, n) => {
    t && M.update(() => t(e, n), !1, !0)
};
class ac extends ot {
    constructor() {
        super(...arguments), this.removePointerDownListener = G
    }
    onPointerDown(t) {
        this.session = new So(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Po(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: n,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: Ae(t),
            onStart: Ae(e),
            onMove: Ae(n),
            onEnd: (t, e) => {
                delete this.session, i && M.postRender(() => i(t, e))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Dt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
let Ve = !1;
class lc extends P.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: i
        } = this.props, {
            projection: s
        } = t;
        s && (e.group && e.group.add(s), n && n.register && i && n.register(s), Ve && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), s.setOptions({ ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })), qt.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: e,
            visualElement: n,
            drag: i,
            isPresent: s
        } = this.props, {
            projection: o
        } = n;
        return o && (o.isPresent = s, t.layoutDependency !== e && o.setOptions({ ...o.options,
            layoutDependency: e
        }), Ve = !0, i || t.layoutDependency !== e || void 0 === e || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || M.postRender(() => {
            const t = o.getStack();
            (!t || !t.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            visualElement: t,
            layoutAnchor: e
        } = this.props, {
            projection: n
        } = t;
        n && (n.options.layoutAnchor = e, n.root.didUpdate(), xn.postRender(() => {
            !n.currentAnimation && n.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n
        } = this.props, {
            projection: i
        } = t;
        Ve = !0, i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), n && n.deregister && n.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function Ao(t) {
    const [e, n] = pu(), i = P.useContext(Hs);
    return Me.jsx(lc, { ...t,
        layoutGroup: i,
        switchLayoutGroup: P.useContext(To),
        isPresent: e,
        safeToRemove: n
    })
}
const uc = {
    pan: {
        Feature: ac
    },
    drag: {
        Feature: rc,
        ProjectionNode: ho,
        MeasureLayout: Ao
    }
};

function Ws(t, e, n) {
    const {
        props: i
    } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", "Start" === n);
    const s = i["onHover" + n];
    s && M.postRender(() => s(e, jt(e)))
}
class cc extends ot {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = Fa(t, (t, e) => (Ws(this.node, e, "Start"), t => Ws(this.node, t, "End"))))
    }
    unmount() {}
}
class hc extends ot {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = It(Bt(this.node.current, "focus", () => this.onFocus()), Bt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Ks(t, e, n) {
    const {
        props: i
    } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", "Start" === n);
    const s = i["onTap" + ("End" === n ? "" : n)];
    s && M.postRender(() => s(e, jt(e)))
}
class fc extends ot {
    mount() {
        const {
            current: t
        } = this.node;
        if (!t) return;
        const {
            globalTapTarget: e,
            propagate: n
        } = this.node.props;
        this.unmount = Ka(t, (t, e) => (Ks(this.node, e, "Start"), (t, {
            success: e
        }) => Ks(this.node, t, e ? "End" : "Cancel")), {
            useGlobalTarget: e,
            stopPropagation: !1 === n ? .tap
        })
    }
    unmount() {}
}
const Je = new WeakMap,
    Ce = new WeakMap,
    dc = t => {
        const e = Je.get(t.target);
        e && e(t)
    },
    pc = t => {
        t.forEach(dc)
    };

function mc({
    root: t,
    ...e
}) {
    const n = t || document;
    Ce.has(n) || Ce.set(n, {});
    const i = Ce.get(n),
        s = JSON.stringify(e);
    return i[s] || (i[s] = new IntersectionObserver(pc, {
        root: t,
        ...e
    })), i[s]
}

function gc(t, e, n) {
    const i = mc(e);
    return Je.set(t, n), i.observe(t), () => {
        Je.delete(t), i.unobserve(t)
    }
}
const yc = {
    some: 0,
    all: 1
};
class vc extends ot {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.stopObserver ? .();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: e,
            margin: n,
            amount: i = "some",
            once: s
        } = t, o = {
            root: e ? e.current : void 0,
            rootMargin: n,
            threshold: "number" == typeof i ? i : yc[i]
        };
        this.stopObserver = gc(this.node.current, o, t => {
            const {
                isIntersecting: e
            } = t;
            if (this.isInView === e || (this.isInView = e, s && !e && this.hasEnteredView)) return;
            e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
            const {
                onViewportEnter: n,
                onViewportLeave: i
            } = this.node.getProps(), o = e ? n : i;
            o && o(t)
        })
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: e
        } = this.node;
        ["amount", "margin", "root"].some(xc(t, e)) && this.startObserver()
    }
    unmount() {
        this.stopObserver ? .(), this.hasEnteredView = !1, this.isInView = !1
    }
}

function xc({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return n => t[n] !== e[n]
}
const Tc = {
        inView: {
            Feature: vc
        },
        tap: {
            Feature: fc
        },
        focus: {
            Feature: hc
        },
        hover: {
            Feature: cc
        }
    },
    wc = {
        layout: {
            ProjectionNode: ho,
            MeasureLayout: Ao
        }
    },
    Pc = { ...$u,
        ...Tc,
        ...uc,
        ...wc
    },
    Sc = Uu(Pc, Wu),
    Lc = Sc;
export {
    Mc as $, wi as A, W as B, Et as C, wn as D, Za as E, tl as F, Hl as G, ml as H, Ri as I, ee as J, Tt as K, Hs as L, fo as M, te as N, it as O, ae as P, Sr as Q, Cc as R, wl as S, Kr as T, Xs as U, ol as V, Q as W, G as X, Yn as Y, F as Z, xn as _, wa as a, Kn as a0, Do as b, O as c, ka as d, pu as e, M as f, Dc as g, Ki as h, sl as i, Rc as j, Bo as k, xu as l, Lc as m, Io as n, k as o, _e as p, Fi as q, Vi as r, ga as s, C as t, Co as u, Zt as v, Ar as w, pr as x, br as y, Zs as z
};