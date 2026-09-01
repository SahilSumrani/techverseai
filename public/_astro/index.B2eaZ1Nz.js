import {
    r as c,
    a as M
} from "./index.CtKCFvq0.js";
var _ = new Map,
    A = new WeakMap,
    w = 0,
    $;

function j(e) {
    return e ? (A.has(e) || (w += 1, A.set(e, w.toString())), A.get(e)) : "0"
}

function z(e) {
    return Object.keys(e).sort().filter(r => e[r] !== void 0).map(r => `${r}_${r==="root"?j(e.root):e[r]}`).toString()
}

function L(e) {
    const r = z(e);
    let n = _.get(r);
    if (!n) {
        const i = new Map;
        let v;
        const o = new IntersectionObserver(s => {
            s.forEach(t => {
                var f;
                const a = t.isIntersecting && v.some(u => t.intersectionRatio >= u);
                e.trackVisibility && typeof t.isVisible > "u" && (t.isVisible = a), [...(f = i.get(t.target)) != null ? f : []].forEach(u => {
                    u(a, t)
                })
            })
        }, e);
        v = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
            id: r,
            observer: o,
            elements: i
        }, _.set(r, n)
    }
    return n
}

function B(e, r, n = {}, i = $) {
    if (typeof window.IntersectionObserver > "u" && i !== void 0) {
        const f = e.getBoundingClientRect();
        return r(i, {
            isIntersecting: i,
            target: e,
            intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
            time: 0,
            boundingClientRect: f,
            intersectionRect: f,
            rootBounds: f
        }), () => {}
    }
    const {
        id: v,
        observer: o,
        elements: s
    } = L(n), t = s.get(e) || [];
    return s.has(e) || s.set(e, t), t.push(r), o.observe(e),
        function() {
            t.splice(t.indexOf(r), 1), t.length === 0 && (s.delete(e), o.unobserve(e)), s.size === 0 && (o.disconnect(), _.delete(v))
        }
}

function D({
    threshold: e,
    delay: r,
    trackVisibility: n,
    rootMargin: i,
    root: v,
    triggerOnce: o,
    skip: s,
    initialInView: t,
    fallbackInView: f,
    onChange: a
} = {}) {
    var u;
    const [R, g] = c.useState(null), E = c.useRef(a), b = c.useRef(t), [y, I] = c.useState({
        inView: !!t,
        entry: void 0
    });
    E.current = a, c.useEffect(() => {
        if (b.current === void 0 && (b.current = t), s || !R) return;
        let p;
        return p = B(R, (h, O) => {
            const C = b.current;
            b.current = h, !(C === void 0 && !h) && (I({
                inView: h,
                entry: O
            }), E.current && E.current(h, O), O.isIntersecting && o && p && (p(), p = void 0))
        }, {
            root: v,
            rootMargin: i,
            threshold: e,
            trackVisibility: n,
            delay: r
        }, f), () => {
            p && p()
        }
    }, [Array.isArray(e) ? e.toString() : e, R, v, i, o, s, n, f, r]);
    const d = (u = y.entry) == null ? void 0 : u.target,
        S = c.useRef(void 0);
    !R && d && !o && !s && S.current !== d && (S.current = d, I({
        inView: !!t,
        entry: void 0
    }), b.current = t);
    const l = [g, y.inView, y.entry];
    return l.ref = l[0], l.inView = l[1], l.entry = l[2], l
}
var x, T, W = (T = (x = "useInsertionEffect" in M ? c.useInsertionEffect : void 0) != null ? x : c.useLayoutEffect) != null ? T : c.useEffect,
    F = (e, {
        threshold: r,
        root: n,
        rootMargin: i,
        trackVisibility: v,
        delay: o,
        triggerOnce: s,
        skip: t
    } = {}) => {
        const f = c.useRef(e),
            a = c.useRef(null),
            u = c.useRef(void 0),
            R = c.useRef(void 0);
        return W(() => {
            f.current = e
        }, [e]), c.useCallback(g => {
            const E = () => {
                if (u.current) {
                    const d = u.current;
                    u.current = void 0, d()
                }
            };
            if (g === a.current) return u.current;
            if (!g || t) {
                E(), a.current = null, R.current = void 0;
                return
            }
            E(), a.current = g;
            let b = !1;
            const y = B(g, (d, S) => {
                const l = R.current;
                R.current = d, !(l === void 0 && !d) && (f.current(d, S), s && d && I())
            }, {
                threshold: r,
                root: n,
                rootMargin: i,
                trackVisibility: v,
                delay: o
            });

            function I() {
                b || (b = !0, y(), a.current = null, u.current = void 0, R.current = void 0)
            }
            return u.current = I, u.current
        }, [Array.isArray(r) ? r.toString() : r, n, i, v, o, s, t])
    };
export {
    F as a, D as u
};