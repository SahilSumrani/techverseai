import {
    r as d
} from "./index.CtKCFvq0.js";
import {
    f as h,
    O as A,
    Q as D,
    R as X,
    T as Y,
    C as R,
    U as Z,
    d as q,
    w as ee,
    W as te,
    X as F,
    Y as se,
    Z as ne,
    u as v,
    b as U,
    _ as W,
    $ as j,
    K as w,
    M as re,
    a0 as S
} from "./react.BJ61_sDN.js";

function K(e, t) {
    let n;
    const r = () => {
        const {
            currentTime: r
        } = t, o = (null === r ? 0 : r.value) / 100;
        n !== o && e(o), n = o
    };
    return h.preUpdate(r, !0), () => A(r)
}

function ce(...e) {
    const t = !Array.isArray(e[0]),
        n = t ? 0 : -1,
        r = e[0 + n],
        o = e[1 + n],
        s = e[2 + n],
        i = e[3 + n],
        c = D(o, s, i);
    return t ? c(r) : c
}

function L(e) {
    return !(typeof window > "u") && (e ? X() : Y())
}
const le = 50,
    C = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }),
    oe = () => ({
        time: 0,
        x: C(),
        y: C()
    }),
    ie = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };

function H(e, t, n, r) {
    const o = n[t],
        {
            length: s,
            position: i
        } = ie[t],
        c = o.current,
        a = n.time;
    o.current = Math.abs(e[`scroll${i}`]), o.scrollLength = e[`scroll${s}`] - e[`client${s}`], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = R(0, o.scrollLength, o.current);
    const f = r - a;
    o.velocity = f > 50 ? 0 : Z(o.current - c, f)
}

function fe(e, t, n) {
    H(e, "x", t, n), H(e, "y", t, n), t.time = n
}

function ue(e, t) {
    const n = {
        x: 0,
        y: 0
    };
    let r = e;
    for (; r && r !== t;)
        if (q(r)) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
        else if ("svg" === r.tagName) {
        const e = r.getBoundingClientRect();
        r = r.parentElement;
        const t = r.getBoundingClientRect();
        n.x += e.left - t.left, n.y += e.top - t.top
    } else {
        if (!(r instanceof SVGGraphicsElement)) break; {
            const {
                x: e,
                y: t
            } = r.getBBox();
            n.x += e, n.y += t;
            let o = null,
                s = r.parentNode;
            for (; !o;) "svg" === s.tagName && (o = s), s = r.parentNode;
            r = o
        }
    }
    return n
}
const k = {
    start: 0,
    center: .5,
    end: 1
};

function b(e, t, n = 0) {
    let r = 0;
    if (e in k && (e = k[e]), "string" == typeof e) {
        const t = parseFloat(e);
        e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
    }
    return "number" == typeof e && (r = t * e), n + r
}
const ae = [0, 0];

function de(e, t, n, r) {
    let o = Array.isArray(e) ? e : ae,
        s = 0,
        i = 0;
    return "number" == typeof e ? o = [e, e] : "string" == typeof e && (o = (e = e.trim()).includes(" ") ? e.split(" ") : [e, k[e] ? e : "0"]), s = b(o[0], n, r), i = b(o[1], t), s - i
}
const x = {
        Enter: [
            [0, 1],
            [1, 1]
        ],
        Exit: [
            [0, 0],
            [1, 0]
        ],
        Any: [
            [1, 0],
            [0, 1]
        ],
        All: [
            [0, 0],
            [1, 1]
        ]
    },
    ge = {
        x: 0,
        y: 0
    };

function he(e) {
    return "getBBox" in e && "svg" !== e.tagName ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}

function me(e, t, n) {
    const {
        offset: r = x.All
    } = n, {
        target: o = e,
        axis: s = "y"
    } = n, i = "y" === s ? "height" : "width", c = o !== e ? ue(o, e) : ge, a = o === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : he(o), f = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[s].offset.length = 0;
    let l = !t[s].interpolate;
    const u = r.length;
    for (let e = 0; e < u; e++) {
        const n = de(r[e], f[i], a[i], c[s]);
        !l && n !== t[s].interpolatorOffsets[e] && (l = !0), t[s].offset[e] = n
    }
    l && (t[s].interpolate = D(t[s].offset, ee(r), {
        clamp: !1
    }), t[s].interpolatorOffsets = [...t[s].offset]), t[s].progress = te(0, 1, t[s].interpolate(t[s].current))
}

function ye(e, t = e, n) {
    if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
        let r = t;
        for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
}

function pe(e, t, n, r = {}) {
    return {
        measure: t => {
            ye(e, r.target, n), fe(e, n, t), (r.offset || r.target) && me(e, n, r)
        },
        notify: () => t(n)
    }
}
const g = new WeakMap,
    M = new WeakMap,
    T = new WeakMap,
    B = new WeakMap,
    E = new WeakMap,
    O = e => e === document.scrollingElement ? window : e;

function G(e, {
    container: t = document.scrollingElement,
    trackContentSize: n = !1,
    ...r
} = {}) {
    if (!t) return F;
    let o = T.get(t);
    o || (o = new Set, T.set(t, o));
    const s = oe(),
        i = pe(t, e, s, r);
    if (o.add(i), !g.has(t)) {
        const e = () => {
                for (const e of o) e.measure(ne.timestamp);
                h.preUpdate(n)
            },
            n = () => {
                for (const e of o) e.notify()
            },
            r = () => h.read(e);
        g.set(t, r);
        const s = O(t);
        window.addEventListener("resize", r), t !== document.documentElement && M.set(t, se(t, r)), s.addEventListener("scroll", r), r()
    }
    if (n && !E.has(t)) {
        const e = g.get(t),
            n = {
                width: t.scrollWidth,
                height: t.scrollHeight
            };
        B.set(t, n);
        const r = () => {
                const r = t.scrollWidth,
                    o = t.scrollHeight;
                (n.width !== r || n.height !== o) && (e(), n.width = r, n.height = o)
            },
            o = h.read(r, !0);
        E.set(t, o)
    }
    const c = g.get(t);
    return h.read(c, !1, !0), () => {
        A(c);
        const e = T.get(t);
        if (!e || (e.delete(i), e.size)) return;
        const n = g.get(t);
        g.delete(t), n && (O(t).removeEventListener("scroll", n), M.get(t) ? .(), window.removeEventListener("resize", n));
        const r = E.get(t);
        r && (A(r), E.delete(t)), B.delete(t)
    }
}
const we = [
        [x.Enter, "entry"],
        [x.Exit, "exit"],
        [x.Any, "cover"],
        [x.All, "contain"]
    ],
    V = {
        start: 0,
        end: 1
    };

function xe(e) {
    const t = e.trim().split(/\s+/);
    if (2 !== t.length) return;
    const n = V[t[0]],
        r = V[t[1]];
    return void 0 !== n && void 0 !== r ? [n, r] : void 0
}

function ve(e) {
    if (2 !== e.length) return;
    const t = [];
    for (const n of e)
        if (Array.isArray(n)) t.push(n);
        else {
            if ("string" != typeof n) return; {
                const e = xe(n);
                if (!e) return;
                t.push(e)
            }
        }
    return t
}

function Ee(e, t) {
    const n = ve(e);
    if (!n) return !1;
    for (let e = 0; e < 2; e++) {
        const r = n[e],
            o = t[e];
        if (r[0] !== o[0] || r[1] !== o[1]) return !1
    }
    return !0
}

function P(e) {
    if (!e) return {
        rangeStart: "contain 0%",
        rangeEnd: "contain 100%"
    };
    for (const [t, n] of we)
        if (Ee(e, t)) return {
            rangeStart: `${n} 0%`,
            rangeEnd: `${n} 100%`
        }
}
const z = new Map;

function I(e) {
    const t = {
            value: 0
        },
        n = G(n => {
            t.value = 100 * n[e.axis].progress
        }, e);
    return {
        currentTime: t,
        cancel: n
    }
}

function _({
    source: e,
    container: t,
    ...n
}) {
    const {
        axis: r
    } = n;
    e && (t = e);
    let o = z.get(t);
    o || (o = new Map, z.set(t, o));
    const s = n.target ? ? "self";
    let i = o.get(s);
    i || (i = {}, o.set(s, i));
    const c = r + (n.offset ? ? []).join(",");
    return i[c] || (n.target && L(n.target) ? P(n.offset) ? i[c] = new ViewTimeline({
        subject: n.target,
        axis: r
    }) : i[c] = I({
        container: t,
        ...n
    }) : L() ? i[c] = new ScrollTimeline({
        source: t,
        axis: r
    }) : i[c] = I({
        container: t,
        ...n
    })), i[c]
}

function Ae(e, t) {
    const n = _(t),
        r = t.target ? P(t.offset) : void 0,
        o = t.target ? L(t.target) && !!r : L();
    return e.attachTimeline({
        timeline: o ? n : void 0,
        ...r && o && {
            rangeStart: r.rangeStart,
            rangeEnd: r.rangeEnd
        },
        observe: e => (e.pause(), K(t => {
            e.time = e.iterationDuration * t
        }, n))
    })
}

function Le(e) {
    return e && (e.target || e.offset)
}

function Se(e) {
    return 2 === e.length
}

function Te(e, t) {
    return Se(e) || Le(t) ? G(n => {
        e(n[t.axis].progress, n)
    }, t) : K(e, _(t))
}

function J(e, {
    axis: t = "y",
    container: n = document.scrollingElement,
    ...r
} = {}) {
    if (!n) return F;
    const o = {
        axis: t,
        container: n,
        ...r
    };
    return "function" == typeof e ? Te(e, o) : Ae(e, o)
}
const We = () => ({
        scrollX: w(0),
        scrollY: w(0),
        scrollXProgress: w(0),
        scrollYProgress: w(0)
    }),
    m = e => !!e && !e.current;

function N(e, t, n, r) {
    return {
        factory: o => {
            let s;
            const i = () => {
                m(n) || m(r) ? W.read(i) : s = J(o, { ...t,
                    axis: e,
                    container: n ? .current || void 0,
                    target: r ? .current || void 0
                })
            };
            return W.read(i), () => {
                j(i), s ? .()
            }
        },
        times: [0, 1],
        keyframes: [0, 1],
        ease: e => e,
        duration: 1
    }
}

function ke(e, t) {
    return !(typeof window > "u") && (e ? X() && !!P(t) : Y())
}

function Oe({
    container: e,
    target: t,
    ...n
} = {}) {
    const r = v(We);
    ke(t, n.offset) && (r.scrollXProgress.accelerate = N("x", n, e, t), r.scrollYProgress.accelerate = N("y", n, e, t));
    const o = d.useRef(null),
        s = d.useRef(!1),
        i = d.useCallback(() => (o.current = J((e, {
            x: t,
            y: n
        }) => {
            r.scrollX.set(t.current), r.scrollXProgress.set(t.progress), r.scrollY.set(n.current), r.scrollYProgress.set(n.progress)
        }, { ...n,
            container: e ? .current || void 0,
            target: t ? .current || void 0
        }), () => {
            o.current ? .()
        }), [e, t, JSON.stringify(n.offset)]);
    return U(() => (s.current = !1, m(e) || m(t) ? void(s.current = !0) : i()), [i]), d.useEffect(() => {
        if (!s.current) return;
        let n;
        const r = () => {
            const r = m(e),
                o = m(t);
            !r && !o && (n = i())
        };
        return W.read(r), () => {
            j(r), n ? .()
        }
    }, [i]), r
}

function Pe(e) {
    const t = v(() => w(e)),
        {
            isStatic: n
        } = d.useContext(re);
    if (n) {
        const [, n] = d.useState(e);
        d.useEffect(() => t.on("change", n), [])
    }
    return t
}

function Q(e, t) {
    const n = Pe(t()),
        r = () => n.set(t());
    return r(), U(() => {
        const t = () => h.preRender(r, !1, !0),
            n = e.map(e => e.on("change", t));
        return () => {
            n.forEach(e => e()), A(r)
        }
    }), n
}

function Ce(e) {
    S.current = [], e();
    const t = Q(S.current, e);
    return S.current = void 0, t
}

function He(e, t, n, r) {
    if ("function" == typeof e) return Ce(e);
    if (void 0 !== n && !Array.isArray(n) && "function" != typeof t) return be(e, t, n, r);
    const o = "function" == typeof t ? t : ce(t, n, r),
        s = Array.isArray(e) ? $(e, o) : $([e], ([e]) => o(e)),
        i = Array.isArray(e) ? void 0 : e.accelerate;
    return i && !i.isTransformed && "function" != typeof t && Array.isArray(n) && !1 !== r ? .clamp && (s.accelerate = { ...i,
        times: t,
        keyframes: n,
        isTransformed: !0,
        ...r ? .ease ? {
            ease: r.ease
        } : {}
    }), s
}

function $(e, t) {
    const n = v(() => []);
    return Q(e, () => {
        n.length = 0;
        const r = e.length;
        for (let t = 0; t < r; t++) n[t] = e[t].get();
        return t(n)
    })
}

function be(e, t, n, r) {
    const o = v(() => Object.keys(n)),
        s = v(() => ({}));
    for (const i of o) s[i] = He(e, t, n[i], r);
    return s
}
export {
    Oe as a, He as b, Pe as u
};