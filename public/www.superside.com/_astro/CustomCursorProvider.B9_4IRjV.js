import {
    j as r
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as e
} from "./index.CtKCFvq0.js";
import {
    m as A
} from "./react.BJ61_sDN.js";
import {
    e as O,
    o as T,
    a as D,
    b as F,
    r as B
} from "./Plus.es.BTrB9SL6.js";
import {
    c as m,
    T as N,
    M as X
} from "./index.BwDjtkKo.js";
import {
    u as P,
    b as E,
    a as V
} from "./atom.DydmvXa7.js";
import {
    u as z
} from "./use-transform.DAUCFMwx.js";
const Y = ({
        onChange: u
    } = {}) => {
        const [t, i] = e.useState({
            x: 0,
            y: 0
        }), s = o => {
            const n = o.clientX,
                c = o.clientY;
            i({
                x: n,
                y: c
            }), u ? .({
                x: n,
                y: c
            })
        };
        return e.useEffect(() => (window.addEventListener("mousemove", s, {
            passive: !0
        }), () => window.removeEventListener("mousemove", s)), []), t
    },
    $ = {
        ArrowDownIcon: B,
        ArrowLeftIcon: F,
        ArrowRightIcon: D,
        ArrowUpIcon: T,
        PlusIcon: O
    },
    S = u => {
        const {
            mood: t,
            className: i,
            children: s,
            ...o
        } = u, n = !!(t && X[t] ? .isDark);
        return r.jsx(A.div, { ...o,
            "data-mood": t,
            className: m(t && "text-foreground", t && (n ? "dark" : "light"), t && "bg-background", i),
            children: s
        })
    },
    U = {
        type: "tween",
        ease: [.25, .1, .25, 1],
        duration: .3
    },
    _ = {
        type: "tween",
        ease: [.25, .1, .25, 1],
        duration: .22,
        delay: .03
    },
    L = V({
        default: {
            mood: "dark",
            opacity: 0,
            height: 0,
            width: 0
        }
    }),
    R = V(["default"]),
    tt = () => {
        const [u, t] = e.useState(!1), [i, s] = e.useState(!1), o = P(R), n = P(L), c = z(0), p = z(0);
        Y({
            onChange: ({
                x: f,
                y: j
            }) => {
                c.set(f), p.set(j)
            }
        });
        const x = e.useMemo(() => o[o.length - 1], [o]),
            a = e.useMemo(() => n[x], [n, x]),
            {
                className: l,
                backdropClassName: d,
                contentClassName: b,
                mood: g = "light",
                title: h,
                titleProps: k,
                icon: I,
                iconProps: M,
                hideNativeCursor: q,
                ...C
            } = a || {},
            v = I ? $[I] : null,
            w = {
                left: c,
                top: p,
                y: "-50%",
                x: "-50%",
                transformOrigin: "center"
            },
            y = e.useMemo(() => i && !d ? {
                duration: 0
            } : U, [d, i]);
        return e.useEffect(() => {
            t(!0)
        }, []), e.useEffect(() => {
            if (typeof navigator > "u") return;
            const f = navigator.userAgent,
                j = /Safari/i.test(f) && !/Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS|Android/i.test(f);
            s(j)
        }, []), u ? r.jsxs(r.Fragment, {
            children: [d ? r.jsx(S, {
                mood: g,
                "aria-hidden": !0,
                className: m("custom-cursor-root-blur pointer-events-none fixed top-0 left-0 z-[99999] hidden rounded-full bg-transparent p-2 text-sm transition-colors duration-100 ease-in-out lg:flex", l, d),
                variants: n,
                initial: !1,
                animate: C,
                transition: y,
                style: w
            }) : r.jsx(S, {
                mood: g,
                "aria-hidden": !0,
                className: m("custom-cursor-root-solid pointer-events-none fixed top-0 left-0 z-[99999] hidden rounded-full p-2 text-sm transition-colors duration-100 ease-in-out lg:flex", l),
                variants: n,
                initial: !1,
                animate: C,
                transition: y,
                style: w,
                children: r.jsxs("div", {
                    className: m("relative z-1 flex h-full w-full translate-z-0 flex-row items-center justify-center gap-1 will-change-transform", b),
                    children: [v ? r.jsx(v, { ...M
                    }) : null, h ? r.jsx(N, {
                        size: "xs",
                        ...k,
                        children: h
                    }) : null]
                })
            }), d ? r.jsx(S, {
                mood: g,
                "aria-hidden": !0,
                className: "custom-cursor-content-overlay pointer-events-none fixed top-0 left-0 z-[100000] hidden rounded-full bg-transparent p-2 text-sm lg:flex",
                variants: n,
                initial: !1,
                animate: C,
                transition: y,
                style: w,
                children: r.jsxs(A.div, {
                    className: m("custom-cursor-content-reveal relative z-1 flex h-full w-full translate-z-0 flex-row items-center justify-center gap-1 will-change-transform", b),
                    initial: {
                        opacity: 0,
                        scale: .85
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: _,
                    children: [v ? r.jsx(v, { ...M
                    }) : null, h ? r.jsx(N, {
                        size: "xs",
                        ...k,
                        children: h
                    }) : null]
                })
            }) : null]
        }) : null
    },
    et = u => {
        const t = E(R),
            i = E(L),
            s = e.useId(),
            o = e.useRef(!1),
            n = e.useCallback(() => {
                o.current || (o.current = !0, t(a => [...a, s]))
            }, [s, t]),
            c = e.useCallback(() => {
                o.current && (o.current = !1, t(a => a.filter(l => l !== s)))
            }, [s, t]),
            p = e.useCallback(() => {
                n()
            }, [n]),
            x = e.useCallback(() => {
                c()
            }, [c]);
        return e.useEffect(() => (i(a => ({ ...a,
            [s]: {
                opacity: 1,
                ...u
            }
        })), () => {
            i(a => {
                const {
                    [s]: l, ...d
                } = a;
                return d
            }), t(a => a.filter(l => l !== s))
        }), []), {
            onPointerEnter: p,
            onPointerLeave: x
        }
    };
export {
    tt as CustomCursorProvider, et as useCustomCursor
};