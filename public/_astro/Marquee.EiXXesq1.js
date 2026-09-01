import {
    j as O
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as t,
    R as je
} from "./index.CtKCFvq0.js";
import {
    m as ye
} from "./react.BJ61_sDN.js";
import {
    i as He
} from "./isChromatic.zJLyRbR3.js";
import {
    m as Se,
    c as me
} from "./index.BwDjtkKo.js";
import {
    u as Ce
} from "./use-velocity.BucTRkn2.js";
import {
    u as J,
    a as Pe,
    b as Ee
} from "./use-transform.DAUCFMwx.js";
import {
    u as le
} from "./use-spring.DXQtKWIb.js";
import {
    u as ke
} from "./use-reduced-motion.BTvKrXPX.js";
const De = e => {
        const r = Ce(e),
            n = J(0),
            i = t.useRef(!0);
        return t.useEffect(() => {
            const e = r.on("change", e => {
                i.current ? i.current = !1 : n.set(e)
            });
            return () => e()
        }, [r]), n
    },
    Be = ({
        containerRef: e,
        contentRef: r,
        repeat: n = 0
    }) => {
        const [i, o] = t.useState(0), s = t.useCallback(() => {
            const t = e ? .current,
                i = r ? .current;
            if (!t || !i) return void o(0);
            const s = t.clientWidth,
                c = i.scrollWidth * (n + 1);
            o(c <= s ? 0 : (c - s) / c * 100)
        }, [o, n]);
        return t.useEffect(() => {
            const e = () => {
                s()
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), t.useEffect(() => {
            s()
        }), i
    },
    We = ({
        contentRef: e,
        isHorizontal: r,
        children: n
    }) => {
        const [i, o] = t.useState(1);
        return t.useEffect(() => {
            const t = e ? .current;
            if (!t) return;
            const n = {
                width: t.offsetWidth,
                height: t.offsetHeight
            };
            o(1e4 / ((r ? n.width : n.height) || 1))
        }, [n, r, e]), i
    },
    Le = ({
        itemCount: e,
        isHorizontal: r
    }) => {
        const n = t.useRef([]),
            i = t.useRef(0),
            o = t.useRef(0),
            s = t.useRef(0),
            c = t.useRef(new Set),
            a = t.useRef(new Map),
            l = t.useRef(null),
            [u, f] = t.useState(!1),
            [d, h] = t.useState([]),
            [m, g] = t.useState(0),
            [p, v] = t.useState(0),
            [y, w] = t.useState(0),
            b = t.useRef(r);
        if (n.current.length !== e || b.current !== r) {
            const t = new Array(e).fill(null).map(() => ({
                width: 0,
                height: 0
            }));
            n.current = t, c.current.clear(), i.current = 0, o.current = 0, s.current = 0, b.current = r
        }
        const x = t.useCallback((t, a) => {
            const l = a.offsetWidth,
                d = a.offsetHeight,
                m = {
                    width: l,
                    height: d
                },
                p = n.current[t] || {
                    width: 0,
                    height: 0
                },
                y = r ? p.width : p.height,
                b = r ? l : d;
            if (p.width !== l || p.height !== d) {
                if (n.current[t] = m, i.current = i.current - y + b, c.current.size === e) {
                    const e = n.current.map(e => e.height || 0),
                        t = n.current.map(e => e.width || 0),
                        r = Math.max(...e),
                        i = Math.max(...t);
                    o.current = r, s.current = i
                } else o.current = Math.max(o.current, d), s.current = Math.max(s.current, l);
                h([...n.current]), g(i.current), v(o.current), w(s.current)
            }
            c.current.add(t), c.current.size === e && !u && (f(!0), h([...n.current]), g(i.current), v(o.current), w(s.current))
        }, [e, r, u]);
        t.useEffect(() => {
            let t = !0;
            return l.current = new ResizeObserver(r => {
                t && requestAnimationFrame(() => {
                    t && r.forEach(t => {
                        const r = t.target,
                            n = parseInt(r.dataset.measureIndex || "-1", 10);
                        n >= 0 && n < e && x(n, r)
                    })
                })
            }), a.current.forEach((t, r) => {
                l.current && r < e && l.current.observe(t)
            }), () => {
                t = !1, l.current && (l.current.disconnect(), l.current = null)
            }
        }, [e, x]);
        const M = t.useCallback(e => t => {
                t ? (a.current.set(e, t), t.dataset.measureIndex = e.toString(), x(e, t), l.current && l.current.observe(t)) : a.current.delete(e)
            }, [x]),
            R = t.useCallback(() => {
                a.current.forEach((e, t) => {
                    x(t, e)
                })
            }, [x]);
        return {
            measureRef: M,
            sizes: d,
            totalSize: m,
            maxHeight: p,
            maxWidth: y,
            isMeasured: u,
            sizesRef: {
                current: n.current
            },
            totalSizeRef: {
                current: i.current
            },
            forceRemeasure: R
        }
    },
    $e = (e, t) => e < 0 ? -1 : e > 0 ? 1 : t,
    Fe = ({
        baseVelocity: e,
        delta: t,
        directionFactor: r,
        hoverFactor: n,
        motionFactor: i = 1,
        scrollAwareDirection: o = !0,
        scrollVelocityFactor: s,
        useScrollVelocity: c = !0,
        velocityMultiplier: a = 1
    }) => {
        let l = r * e * (t / 1e3) * a * n;
        l *= i;
        return l += r * l * (c ? s : 0), {
            directionFactor: o && c ? $e(s, r) : r,
            moveBy: l
        }
    };

function Te(e, t) {
    return 0 === t ? 0 : (e % t + t) % t
}

function Ve({
    offset: e,
    containerSize: t,
    itemSizes: r,
    totalSize: n,
    isHorizontal: i,
    buffer: o = 1
}) {
    if (0 === n || 0 === r.length || 0 === t) return [];
    const s = e => i ? r[e].width : r[e].height,
        c = Te(e, n),
        a = Math.floor(e / n) * r.length,
        l = r.length * Math.max(3, Math.ceil(t / n) + 3),
        u = [];
    let f = -c,
        d = 0,
        h = 0;
    for (; f + s(d) < 0 && h < 2 * r.length;) f += s(d), d = (d + 1) % r.length, h++;
    for (let e = 0; e < o && h > 0; e++) h--, d = (d - 1 + r.length) % r.length, f -= s(d);
    let m = 0;
    for (; m < o || f < t;) {
        const e = a + h;
        if (u.push({
                index: d,
                position: f,
                key: `item-${e}`
            }), f += s(d), d = (d + 1) % r.length, h++, f >= t && m++, u.length > l) break
    }
    return u
}
const ze = (e, t, r) => {
        const n = t - e;
        return ((r - e) % n + n) % n + e
    },
    qe = ({
        children: e,
        className: r,
        direction: n = "rtl",
        baseVelocity: i = 1,
        enableInitialAnimation: o = !0,
        slowdownOnHover: s = !0,
        slowDownFactor: c = .3,
        slowDownSpringConfig: a = {
            damping: 50,
            stiffness: 400
        },
        useScrollVelocity: l = !0,
        scrollAwareDirection: u = !0,
        scrollSpringConfig: f = {
            damping: 50,
            stiffness: 400
        },
        scrollContainer: d,
        scrollable: h = !0,
        draggable: m = !0,
        dragSensitivity: g = .01,
        dragVelocityDecay: p = .96,
        dragAwareDirection: v = !1,
        dragAngle: y = ("rtl" === n || "ltr" === n ? 0 : 90),
        dragVelocitySpringConfig: w = {
            damping: 50,
            stiffness: 1e3
        }
    }) => {
        const b = je.Children.toArray(e),
            x = "rtl" === n || "ltr" === n,
            M = h,
            R = m,
            S = t.useRef(!1),
            z = J(1),
            E = le(z, a),
            {
                scrollY: C
            } = Pe({
                container: d && "object" == typeof d ? d : void 0
            }),
            D = De(C),
            j = le(D, f),
            V = t.useRef(!1),
            P = t.useRef(!1),
            F = t.useRef({
                x: 0,
                y: 0
            }),
            H = J(0),
            A = le(H, w),
            k = t.useRef(1),
            [X, I] = t.useState(!1);
        t.useEffect(() => {
            I(!0)
        }, []);
        const {
            maxHeight: B,
            isMeasured: L,
            measureRef: Y,
            sizes: W,
            totalSize: $,
            sizesRef: N,
            totalSizeRef: T,
            forceRemeasure: q
        } = Le({
            itemCount: b.length,
            isHorizontal: x
        }), K = J(0), [U, Q] = t.useState([]), _ = t.useRef(null), [G, Z] = t.useState(0), ee = t.useRef(x);
        t.useEffect(() => {
            ee.current !== x && (Z(0), Q([]), K.set(0), ee.current = x)
        }, [x, K]);
        const te = t.useCallback(() => {
                const e = _.current;
                if (!e) return 0;
                if (x) {
                    const t = e.offsetWidth || e.clientWidth || e.getBoundingClientRect().width;
                    return t > 0 ? t : window.innerWidth
                }
                const t = e.offsetHeight || e.clientHeight || e.getBoundingClientRect().height;
                return t > 0 ? t : window.innerHeight
            }, [x]),
            re = t.useCallback(e => {
                e <= 0 || Z(t => t === e ? t : e)
            }, []);
        t.useEffect(() => {
            const e = _.current;
            if (!e) return;
            let t = !0;
            const r = te();
            re(r);
            const n = new ResizeObserver(e => {
                if (!t) return;
                const r = e[0];
                r && requestAnimationFrame(() => {
                    if (!t) return;
                    const e = x ? r.contentRect.width : r.contentRect.height;
                    re(e)
                })
            });
            return n.observe(e), () => {
                t = !1, n.disconnect()
            }
        }, [te, x, re]), t.useEffect(() => {
            !L || 0 === $ || 0 === G || Q(Ve({
                offset: K.get(),
                containerSize: G,
                itemSizes: W,
                totalSize: $,
                isHorizontal: x,
                buffer: 1
            }))
        }, [G, x, L, K, W, $]);
        const ne = "rtl" === n || "btt" === n ? i : -i;
        Se((e, t) => {
            const r = N.current,
                n = T.current;
            if (!L || 0 === n) return;
            if (V.current && R) {
                const e = K.get() - A.get();
                K.set(e);
                const t = Ve({
                    offset: e,
                    containerSize: G,
                    itemSizes: r,
                    totalSize: n,
                    isHorizontal: x,
                    buffer: 1
                });
                return void Q(t)
            }
            z.set(S.current && s ? c : 1);
            const i = j.get() / 1e3 * 5,
                {
                    directionFactor: o,
                    moveBy: a
                } = Fe({
                    baseVelocity: ne,
                    delta: t,
                    directionFactor: k.current,
                    hoverFactor: E.get(),
                    scrollAwareDirection: u,
                    scrollVelocityFactor: i,
                    useScrollVelocity: l,
                    velocityMultiplier: 100
                });
            let f = a;
            if (k.current = o, R) {
                const e = H.get();
                0 !== e && (f -= e, v && Math.abs(A.get()) > .1 && (k.current = -Math.sign(A.get())), !V.current && Math.abs(e) > .01 ? H.set(e * p) : V.current || H.set(0))
            }
            const d = K.get() + f;
            K.set(d);
            const h = Ve({
                offset: d,
                containerSize: G,
                itemSizes: r,
                totalSize: n,
                isHorizontal: x,
                buffer: 1
            });
            Q(h)
        }), t.useEffect(() => {}, [X, L, G]), t.useEffect(() => {
            _.current && L && x && B > 0 && (_.current.style.height = `${B}px`)
        }, [B, x, L]), t.useEffect(() => {
            if (!X) return;
            let e;
            const t = () => {
                clearTimeout(e), e = setTimeout(() => {
                    re(te()), q()
                }, 100)
            };
            return window.addEventListener("resize", t), window.visualViewport ? .addEventListener("resize", t), () => {
                window.removeEventListener("resize", t), window.visualViewport ? .removeEventListener("resize", t), clearTimeout(e)
            }
        }, [q, te, X, re]);
        const ie = t.useRef(null);
        ie.current = e => {
            if (!M) return;
            (x && Math.abs(e.deltaX) > Math.abs(e.deltaY) || !x && Math.abs(e.deltaY) > Math.abs(e.deltaX)) && e.preventDefault();
            const t = -e.deltaX / 2,
                r = -e.deltaY / 2,
                n = y * Math.PI / 180,
                i = t * Math.cos(n) + r * Math.sin(n);
            H.set(i * g * 100 * 2)
        }, t.useEffect(() => {
            const e = _.current;
            if (!e) return;
            const t = e => ie.current ? .(e);
            return e.addEventListener("wheel", t, {
                passive: !1
            }), () => e.removeEventListener("wheel", t)
        }, [X, L, G]);
        if (0 === b.length) return null;
        if (!X || !L || 0 === G) return O.jsx("div", {
            ref: _,
            className: me("relative flex", x ? "flex-row" : "flex-col", r),
            style: {
                opacity: 0,
                pointerEvents: "none"
            },
            children: b.map((e, t) => O.jsx("div", {
                ref: Y(t),
                children: e
            }, t))
        });
        const oe = e => {
            R && (P.current && (e.target.releasePointerCapture(e.pointerId), e.target.style.cursor = ""), V.current = !1)
        };
        return O.jsxs(ye.div, {
            ref: _,
            className: me("relative", r),
            style: { ...x && B > 0 ? {
                    height: `${B}px`
                } : {}
            },
            onHoverStart: () => S.current = !0,
            onHoverEnd: () => S.current = !1,
            onPointerDown: e => {
                R && (V.current = !0, P.current = !1, F.current = {
                    x: e.clientX,
                    y: e.clientY
                }, H.set(0), e.preventDefault(), e.stopPropagation())
            },
            onPointerMove: e => {
                if (!R || !V.current) return;
                P.current || (P.current = !0, e.target.setPointerCapture(e.pointerId), e.target.style.cursor = "grabbing");
                const t = {
                        x: e.clientX,
                        y: e.clientY
                    },
                    r = t.x - F.current.x,
                    n = t.y - F.current.y;
                F.current = t;
                const i = y * Math.PI / 180,
                    o = r * Math.cos(i) + n * Math.sin(i);
                H.set(o * g * 100)
            },
            onPointerUp: oe,
            onPointerCancel: oe,
            onMouseEnter: () => {
                document.documentElement.style.overscrollBehaviorX = "none"
            },
            onMouseLeave: () => {
                document.documentElement.style.overscrollBehaviorX = ""
            },
            onClick: e => {
                P.current && (e.preventDefault(), e.stopPropagation(), P.current = !1)
            },
            ...o && {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: .3
                }
            },
            children: [O.jsx("div", {
                className: me("pointer-events-none absolute -z-10 flex overflow-hidden", x ? "flex-row" : "inset-0 flex-col"),
                style: { ...x ? {
                        left: "-9999px",
                        top: 0
                    } : {},
                    opacity: .01
                },
                "aria-hidden": "true",
                children: b.map((e, t) => O.jsx("div", {
                    ref: Y(t),
                    children: e
                }, t))
            }), U.map(({
                index: e,
                position: t,
                key: r
            }) => O.jsx(ye.div, {
                className: "absolute will-change-transform",
                style: {
                    [x ? "left" : "top"]: 0,
                    [x ? "height" : "width"]: "100%",
                    transform: x ? `translateX(${t}px)` : `translateY(${t}px)`
                },
                children: b[e]
            }, r))]
        })
    },
    Ae = ({
        children: e,
        className: r,
        direction: n = "rtl",
        baseVelocity: i = 1,
        slowdownOnHover: o = !0,
        slowDownFactor: s = .3,
        slowDownSpringConfig: c = {
            damping: 50,
            stiffness: 400
        },
        useScrollVelocity: a = !0,
        scrollAwareDirection: l = !0,
        scrollSpringConfig: u = {
            damping: 50,
            stiffness: 400
        },
        scrollContainer: f,
        repeat: d = 2,
        scrollable: h = !0,
        draggable: m = !0,
        dragSensitivity: g = .01,
        dragVelocityDecay: p = .96,
        dragAwareDirection: v = !1,
        dragAngle: y = ("rtl" === n || "ltr" === n ? 0 : 90),
        dragVelocitySpringConfig: w = {
            damping: 50,
            stiffness: 1e3
        },
        easing: b,
        enableInitialAnimation: x = !0,
        ...M
    }) => {
        const R = "rtl" === n || "ltr" === n,
            S = d > 0,
            z = t.useRef(!1),
            E = t.useRef(null),
            C = t.useRef(null),
            D = Be({
                containerRef: E,
                contentRef: C,
                repeat: d
            }),
            j = h && R && D > 0,
            V = m && (!R || D > 0),
            P = S ? "rtl" === n || "btt" === n ? -i : i : 0,
            F = J(0),
            H = J(0),
            A = e => {
                S ? F.set(e) : F.set(Math.min(0, Math.max(-D, e)))
            },
            k = e => {
                S ? H.set(e) : H.set(Math.min(0, Math.max(-100, e)))
            },
            X = Ee(F, e => {
                if (S) {
                    const t = ze(0, -100, e);
                    return `${b?-100*b(t/-100):t}%`
                }
                const t = Math.min(0, Math.max(-D, e));
                return `${b?b(t/-D)*-D:t}%`
            }),
            I = Ee(H, e => {
                if (S) {
                    const t = ze(0, -100, e);
                    return `${b?-100*b(t/-100):t}%`
                }
                const t = Math.min(0, Math.max(-100, e));
                return `${b?-100*b(t/-100):t}%`
            }),
            {
                scrollY: B
            } = Pe({
                container: f && "object" == typeof f ? f : void 0
            }),
            L = De(B),
            Y = le(L, u),
            W = J(1),
            $ = J(1),
            N = t.useRef(!1),
            T = t.useRef(!1),
            q = J(0),
            K = le(q, w),
            U = le(W, c),
            Q = Ee(a ? Y : $, [0, 1e3], [0, 5], {
                clamp: !1
            }),
            _ = We({
                contentRef: C,
                isHorizontal: R,
                children: e
            }),
            G = t.useRef(1),
            Z = t.useCallback(e => {
                V && (N.current = !0, T.current = !1, ne.current = {
                    x: e.clientX,
                    y: e.clientY
                }, q.set(0), e.preventDefault(), e.stopPropagation())
            }, [V]),
            ee = t.useCallback(e => {
                if (!V || !N.current) return;
                T.current || (T.current = !0, e.target.setPointerCapture(e.pointerId), e.target.style.cursor = "grabbing");
                const t = {
                        x: e.clientX,
                        y: e.clientY
                    },
                    r = t.x - ne.current.x,
                    n = t.y - ne.current.y;
                ne.current = t;
                const i = y * Math.PI / 180,
                    o = r * Math.cos(i) + n * Math.sin(i);
                q.set(o * g * _)
            }, [V, y, g, _]),
            te = t.useCallback(e => {
                V && (T.current && (e.target.releasePointerCapture(e.pointerId), e.target.style.cursor = ""), N.current = !1)
            }, [V]),
            re = t.useRef(null);
        re.current = e => {
            if (!j) return;
            (R && Math.abs(e.deltaX) > Math.abs(e.deltaY) || !R && Math.abs(e.deltaY) > Math.abs(e.deltaX)) && e.preventDefault();
            const t = -e.deltaX / 2,
                r = -e.deltaY / 2,
                n = y * Math.PI / 180,
                i = t * Math.cos(n) + r * Math.sin(n);
            q.set(i * g * _)
        }, t.useEffect(() => {
            const e = E.current;
            if (!e) return;
            const t = e => re.current ? .(e);
            return e.addEventListener("wheel", t, {
                passive: !1
            }), () => e.removeEventListener("wheel", t)
        }, []), Se((e, t) => {
            if (N.current && V) return void(R ? A(F.get() + K.get()) : k(H.get() + K.get()));
            W.set(z.current && o ? s : 1);
            const {
                directionFactor: r,
                moveBy: n
            } = Fe({
                baseVelocity: P,
                delta: t,
                directionFactor: G.current,
                hoverFactor: U.get(),
                motionFactor: _,
                scrollAwareDirection: l,
                scrollVelocityFactor: Q.get(),
                useScrollVelocity: a
            });
            let i = n;
            if (l && !N.current && (G.current = r), V || j) {
                const e = q.get();
                0 !== e && (i += e, v && Math.abs(K.get()) > .1 && (G.current = -Math.sign(K.get())), !N.current && Math.abs(e) > .01 ? q.set(e * p) : N.current || q.set(0))
            }
            R ? A(F.get() + i) : k(H.get() + i)
        });
        const ne = t.useRef({
            x: 0,
            y: 0
        });
        return O.jsx(ye.div, {
            className: me("flex", R ? "flex-row" : "flex-col", 0 === D && "justify-center", r),
            onHoverStart: () => z.current = !0,
            onHoverEnd: () => z.current = !1,
            onPointerDown: Z,
            onPointerMove: ee,
            onPointerUp: te,
            onPointerCancel: te,
            onMouseEnter: () => {
                document.documentElement.style.overscrollBehaviorX = "none"
            },
            onMouseLeave: () => {
                document.documentElement.style.overscrollBehaviorX = ""
            },
            onClick: e => {
                T.current && (e.preventDefault(), e.stopPropagation(), T.current = !1)
            },
            ref: E,
            ...M,
            children: Array.from({
                length: d + 1
            }, (e, t) => t).map(t => O.jsx(ye.div, {
                className: me("shrink-0 will-change-transform", R && "flex"),
                style: R ? {
                    x: X
                } : {
                    y: I
                },
                "aria-hidden": t > 0,
                ref: C,
                ...x && {
                    transition: {
                        duration: 1
                    },
                    initial: {
                        opacity: 0,
                        filter: "blur(5px)"
                    },
                    animate: {
                        opacity: 1,
                        filter: "blur(0)"
                    }
                },
                children: e
            }, t))
        })
    },
    et = ({
        virtualized: e = !0,
        repeat: t = 2,
        baseVelocity: r,
        enableInitialAnimation: n,
        ...i
    }) => {
        const o = ke(),
            s = He() || o,
            c = s ? 0 : r,
            a = !s && n;
        return e && t > 0 ? O.jsx(qe, { ...i,
            baseVelocity: c,
            enableInitialAnimation: a
        }) : O.jsx(Ae, {
            repeat: t,
            ...i,
            baseVelocity: c,
            enableInitialAnimation: a
        })
    };
export {
    et as M, qe as V
};