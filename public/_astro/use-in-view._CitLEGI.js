import {
    n as pe,
    V as he,
    o as de,
    q as re,
    t as ge,
    v as ae,
    c as oe,
    w as ye,
    x as Ae,
    y as Ee,
    z as Se,
    A as ve,
    B as Ve,
    C as be,
    D as Ie,
    E as Me,
    S as we,
    H as De,
    F as L,
    G as Oe,
    I as Te,
    K as xe,
    N as Fe
} from "./react.BJ61_sDN.js";
import {
    r as ee
} from "./index.CtKCFvq0.js";
const Ge = (e, t, n) => {
    const s = t - e;
    return ((n - e) % s + s) % s + e
};

function le(e, t) {
    return pe(e) ? e[Ge(0, e.length, t)] : e
}
class Ke {
    constructor(e) {
        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => e.finished))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, t) {
        for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
    }
    attachTimeline(e) {
        const t = this.animations.map(t => t.attachTimeline(e));
        return () => {
            t.forEach((e, t) => {
                e && e(), this.animations[t].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get state() {
        return this.getAll("state")
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        return te(this.animations, "duration")
    }
    get iterationDuration() {
        return te(this.animations, "iterationDuration")
    }
    runAll(e) {
        this.animations.forEach(t => t[e]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function te(e, t) {
    let n = 0;
    for (let s = 0; s < e.length; s++) {
        const r = e[s][t];
        null !== r && r > n && (n = r)
    }
    return n
}
class Ce extends Ke {
    then(e, t) {
        return this.finished.finally(e).then(() => {})
    }
}

function Be(e, t) {
    return e in t
}
class Ne extends he {
    constructor() {
        super(...arguments), this.type = "object"
    }
    readValueFromInstance(e, t) {
        if (Be(t, e)) {
            const n = e[t];
            if ("string" == typeof n || "number" == typeof n) return n
        }
    }
    getBaseTargetFromProps() {}
    removeValueFromRenderState(e, t) {
        delete t.output[e]
    }
    measureInstanceViewportBox() {
        return de()
    }
    build(e, t) {
        Object.assign(e.output, t)
    }
    renderInstance(e, {
        output: t
    }) {
        Object.assign(e, t)
    }
    sortInstanceNodePosition() {
        return 0
    }
}

function P(e) {
    return "object" == typeof e && !Array.isArray(e)
}

function ue(e, t, n, s) {
    return null == e ? [] : "string" == typeof e && P(t) ? re(e, n, s) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter(e => null != e) : [e]
}

function Le(e, t, n) {
    return e * (t + 1) + n * t
}

function ne(e, t, n, s) {
    return "number" == typeof t ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : s.get(t) ? ? e
}

function We(e, t, n) {
    for (let s = 0; s < e.length; s++) {
        const r = e[s];
        r.at > t && r.at < n && (ae(e, r), s--)
    }
}

function je(e, t, n, s, r, o) {
    We(e, r, o);
    for (let a = 0; a < t.length; a++) e.push({
        value: t[a],
        at: ge(r, o, s[a]),
        easing: le(n, a)
    })
}

function Pe(e, t, n = 0) {
    const s = t + 1 + t * n;
    for (let t = 0; t < e.length; t++) e[t] = e[t] / s
}

function Re(e, t) {
    return e.at === t.at ? null === e.value ? 1 : null === t.value ? -1 : 0 : e.at - t.at
}
const ke = "easeInOut",
    ze = 20;

function _e(e, {
    defaultTransition: t = {},
    ...n
} = {}, s, r) {
    const o = t.duration || .3,
        a = new Map,
        i = new Map,
        u = {},
        l = new Map;
    let c = 0,
        f = 0,
        h = 0;
    for (let n = 0; n < e.length; n++) {
        const a = e[n];
        if ("string" == typeof a) {
            l.set(a, f);
            continue
        }
        if (!Array.isArray(a)) {
            l.set(a.name, ne(f, a.at, c, l));
            continue
        }
        let [p, m, g = {}] = a;
        void 0 !== g.at && (f = ne(f, g.at, c, l));
        let y = 0;
        const d = (e, n, s, a = 0, i = 0) => {
            const u = qe(e),
                {
                    delay: l = 0,
                    times: c = ye(u),
                    type: p = t.type || "keyframes",
                    repeat: m,
                    repeatType: g,
                    repeatDelay: d = 0,
                    ...A
                } = n;
            let {
                ease: v = t.ease || "easeOut",
                duration: b
            } = n;
            const x = "function" == typeof l ? l(a, i) : l,
                M = u.length,
                w = ve(p) ? p : r ? .[p || "keyframes"];
            if (M <= 2 && w) {
                let e = 100;
                if (2 === M && Xe(u)) {
                    const t = u[1] - u[0];
                    e = Math.abs(t)
                }
                const n = { ...t,
                    ...A
                };
                void 0 !== b && (n.duration = Ve(b));
                const s = Ae(n, e, w);
                v = s.ease, b = s.duration
            }
            b ? ? (b = o);
            const E = f + x;
            1 === c.length && 0 === c[0] && (c[1] = 1);
            const I = c.length - u.length;
            if (I > 0 && Ee(c, I), 1 === u.length && u.unshift(null), m && m < 20) {
                const e = b > 0 ? d / b : 0;
                b = Le(b, m, d);
                const t = [...u],
                    n = [...c];
                v = Array.isArray(v) ? [...v] : [v];
                const s = [...v],
                    r = "reverse" === g || "mirror" === g;
                let o = t,
                    a = s;
                r && (o = [...t].reverse(), "reverse" === g && (a = [...s].reverse().map(e => "function" == typeof e ? Se(e) : e)));
                for (let i = 0; i < m; i++) {
                    const l = r && i % 2 == 0,
                        f = l ? o : t,
                        h = l ? a : s,
                        p = (i + 1) * (1 + e);
                    e > 0 && (u.push(u[u.length - 1]), c.push(p), v.push("linear")), u.push(...f);
                    for (let e = 0; e < f.length; e++) c.push(n[e] + p), v.push(0 === e ? "linear" : le(h, e - 1))
                }
                Pe(c, m, e)
            }
            const k = E + b;
            je(s, u, v, c, E, k), y = Math.max(x + b, y), h = Math.max(k, h)
        };
        if (oe(p)) {
            d(m, g, ie("default", se(p, i)))
        } else {
            const e = ue(p, m, s, u),
                t = e.length;
            for (let n = 0; n < t; n++) {
                const s = se(e[n], i);
                for (const e in m) d(m[e], He(g, e), ie(e, s), n, t)
            }
        }
        c = f, f += y
    }
    return i.forEach((e, s) => {
        for (const r in e) {
            const o = e[r];
            o.sort(Re);
            const i = [],
                u = [],
                l = [];
            for (let e = 0; e < o.length; e++) {
                const {
                    at: t,
                    value: n,
                    easing: s
                } = o[e];
                i.push(n), u.push(be(0, h, t)), l.push(s || "easeOut")
            }
            0 !== u[0] && (u.unshift(0), i.unshift(i[0]), l.unshift(ke)), 1 !== u[u.length - 1] && (u.push(1), i.push(null)), a.has(s) || a.set(s, {
                keyframes: {},
                transition: {}
            });
            const c = a.get(s);
            c.keyframes[r] = i;
            const {
                type: f,
                ...p
            } = t;
            c.transition[r] = { ...p,
                duration: h,
                ease: l,
                times: u,
                ...n
            }
        }
    }), a
}

function se(e, t) {
    return !t.has(e) && t.set(e, {}), t.get(e)
}

function ie(e, t) {
    return t[e] || (t[e] = []), t[e]
}

function qe(e) {
    return Array.isArray(e) ? e : [e]
}

function He(e, t) {
    return e && e[t] ? { ...e,
        ...e[t]
    } : { ...e
    }
}
const Ue = e => "number" == typeof e,
    Xe = e => e.every(Ue);

function Je(e) {
    const t = {
            presenceContext: null,
            props: {},
            visualState: {
                renderState: {
                    transform: {},
                    transformOrigin: {},
                    style: {},
                    vars: {},
                    attrs: {}
                },
                latestValues: {}
            }
        },
        n = Ie(e) && !Me(e) ? new we(t) : new De(t);
    n.mount(e), L.set(e, n)
}

function Qe(e) {
    const t = new Ne({
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {}
            },
            latestValues: {}
        }
    });
    t.mount(e), L.set(e, t)
}

function Ye(e, t) {
    return oe(e) || "number" == typeof e || "string" == typeof e && !P(t)
}

function ce(e, t, n, s) {
    const r = [];
    if (Ye(e, t)) r.push(Oe(e, P(t) && t.default || t, n && (n.default || n)));
    else {
        if (null == e) return r;
        const o = ue(e, t, s),
            a = o.length;
        for (let e = 0; e < a; e++) {
            const s = o[e],
                i = s instanceof Element ? Je : Qe;
            L.has(s) || i(s);
            const u = L.get(s),
                l = { ...n
                };
            "delay" in l && "function" == typeof l.delay && (l.delay = l.delay(e, a)), r.push(...Te(u, { ...t,
                transition: l
            }, {}))
        }
    }
    return r
}

function Ze(e, t, n) {
    const s = [];
    return _e(e.map(e => {
        if (Array.isArray(e) && "function" == typeof e[0]) {
            const t = e[0],
                n = xe(0);
            return n.on("change", t), 1 === e.length ? [n, [0, 1]] : 2 === e.length ? [n, [0, 1], e[1]] : [n, e[1], e[2]]
        }
        return e
    }), t, n, {
        spring: Fe
    }).forEach(({
        keyframes: e,
        transition: t
    }, n) => {
        s.push(...ce(n, e, t))
    }), s
}

function $e(e) {
    return Array.isArray(e) && e.some(Array.isArray)
}

function et(e = {}) {
    const {
        scope: t,
        reduceMotion: n,
        skipAnimations: s
    } = e;
    return function(e, r, o) {
        let a, i = [];
        const u = {};
        if (void 0 !== n && (u.reduceMotion = n), void 0 !== s && (u.skipAnimations = s), $e(e)) {
            const {
                onComplete: n,
                ...s
            } = r || {};
            "function" == typeof n && (a = n), i = Ze(e, { ...u,
                ...s
            }, t)
        } else {
            const {
                onComplete: n,
                ...s
            } = o || {};
            "function" == typeof n && (a = n), i = ce(e, r, { ...u,
                ...s
            }, t)
        }
        const l = new Ce(i);
        return a && l.finished.then(a), t && (t.animations.push(l), l.finished.then(() => {
            ae(t.animations, l)
        })), l
    }
}
const rt = et(),
    tt = {
        some: 0,
        all: 1
    };

function nt(e, t, {
    root: n,
    margin: s,
    amount: r = "some"
} = {}) {
    const o = re(e),
        a = new WeakMap,
        i = new IntersectionObserver(e => {
            e.forEach(e => {
                const n = a.get(e.target);
                if (e.isIntersecting !== !!n)
                    if (e.isIntersecting) {
                        const n = t(e.target, e);
                        "function" == typeof n ? a.set(e.target, n) : i.unobserve(e.target)
                    } else "function" == typeof n && (n(e), a.delete(e.target))
            })
        }, {
            root: n,
            rootMargin: s,
            threshold: "number" == typeof r ? r : tt[r]
        });
    return o.forEach(e => i.observe(e)), () => i.disconnect()
}

function at(e, {
    root: t,
    margin: n,
    amount: s,
    once: r = !1,
    initial: o = !1
} = {}) {
    const [a, i] = ee.useState(o);
    return ee.useEffect(() => {
        if (!e.current || r && a) return;
        const o = {
            root: t && t.current || void 0,
            margin: n,
            amount: s
        };
        return nt(e.current, () => (i(!0), r ? void 0 : () => i(!1)), o)
    }, [t, e, n, r, s]), a
}
export {
    rt as a, at as u
};