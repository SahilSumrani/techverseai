import {
    j as n
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as t
} from "./index.CtKCFvq0.js";
import {
    M as N,
    j as P,
    m as w,
    g as B,
    k as K
} from "./react.BJ61_sDN.js";
import {
    a as O,
    u as G
} from "./use-in-view._CitLEGI.js";
import {
    L as X,
    M as U
} from "./index.C_2lq9sc.js";
import {
    A as E
} from "./index.DxFyLVPS.js";

function S(e) {
    const {
        width: t,
        fontSize: n
    } = getComputedStyle(e);
    return parseFloat(t) / parseFloat(n) + "em"
}
const L = new WeakMap,
    W = (e, {
        locales: t,
        format: n
    }, i, r) => {
        const a = new Intl.NumberFormat(t, n).formatToParts(Number(e));
        i && a.unshift({
            type: "prefix",
            value: i
        }), r && a.push({
            type: "suffix",
            value: r
        });
        const s = [],
            l = [],
            o = [],
            c = [],
            u = {},
            p = e => `${e}:${u[e]=(u[e]??-1)+1}`;
        let f = "",
            d = !1,
            y = !1;
        for (const e of a) {
            f += e.value;
            const t = "minusSign" === e.type || "plusSign" === e.type ? "sign" : e.type;
            switch (t) {
                case "integer":
                    d = !0, l.push(...e.value.split("").map(e => ({
                        type: t,
                        value: parseInt(e)
                    })));
                    break;
                case "group":
                    l.push({
                        type: t,
                        value: e.value
                    });
                    break;
                case "decimal":
                    y = !0, o.push({
                        type: t,
                        value: e.value,
                        key: p(t)
                    });
                    break;
                case "fraction":
                    o.push(...e.value.split("").map(e => ({
                        type: t,
                        value: parseInt(e),
                        key: p(t)
                    })));
                    break;
                default:
                    (d || y ? c : s).push({
                        type: t,
                        value: e.value,
                        key: p(t)
                    })
            }
        }
        const h = [];
        for (let e = l.length - 1; e >= 0; e--) h.unshift({ ...l[e],
            key: p(l[e].type)
        });
        return {
            pre: s,
            integer: h,
            fraction: o,
            post: c,
            formatted: f
        }
    },
    T = () => {
        const e = t.useRef(!0);
        return t.useEffect(() => {
            e.current = !1
        }, []), e.current
    },
    V = t.createContext({
        justify: "left"
    }),
    Y = V.Provider,
    q = () => t.useContext(V),
    h = "var(--mask-height, 0.15em)",
    M = "var(--mask-width, 0.5em)",
    $ = `calc(${M} / var(--invert-x, 1))`,
    I = "#000 0, transparent 71%",
    J = `linear-gradient(to right, transparent 0, #000 ${$}, #000 calc(100% - ${$}), transparent),linear-gradient(to bottom, transparent 0, #000 ${h}, #000 calc(100% - ${h}), transparent 100%),radial-gradient(at bottom right, ${I}),radial-gradient(at bottom left, ${I}), radial-gradient(at top left, ${I}), radial-gradient(at top right, ${I})`,
    Q = `100% calc(100% - ${h} * 2),calc(100% - ${$} * 2) 100%,${$} ${h},${$} ${h},${$} ${h},${$} ${h}`,
    Z = e => {
        const {
            value: i,
            initialValue: r = i,
            ref: a,
            ...s
        } = e, {
            transition: l
        } = t.useContext(N), o = t.useRef(r).current, c = T(), u = t.useRef(null), p = t.useRef(null);
        t.useImperativeHandle(a, () => p.current, []);
        const f = t.useRef(new Array(10)),
            d = P(),
            y = d ? i : 0;
        t.useLayoutEffect(() => {
            !u.current || !f.current[o] || (u.current.style.width = S(f.current[o]))
        }, []);
        const m = t.useRef(r);
        t.useLayoutEffect(() => {
            if (!u.current || y === m.current) return;
            const e = u.current.getBoundingClientRect(),
                t = p.current ? .getBoundingClientRect(),
                n = e.height * (y - m.current) + (e.top - (t ? t.top || 0 : e.top));
            return O(u.current, {
                y: [n, 0]
            }, l), () => {
                m.current = y
            }
        }, [y]);
        const [x, g] = t.useState();
        t.useEffect(() => {
            if (c && o === y || !f.current[y]) return;
            const e = S(f.current[y]);
            p.current && L.set(p.current, e), g(e)
        }, [y]);
        const j = e => n.jsx("span", {
            style: {
                display: "inline-block",
                padding: `calc(${h}/2) 0`
            },
            ref: t => {
                f.current[e] = t
            },
            children: e
        }, e);
        return n.jsx(w.span, { ...s,
            ref: p,
            layout: "position",
            "data-state": d ? void 0 : "exiting",
            style: {
                display: "inline-flex",
                justifyContent: "center",
                width: x
            },
            children: n.jsxs("span", {
                ref: u,
                style: {
                    display: "inline-flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative"
                },
                children: [0 !== y && n.jsx("span", {
                    style: { ...A,
                        bottom: "100%",
                        left: 0
                    },
                    children: new Array(y).fill(null).map((e, t) => j(t))
                }), j(y), 9 !== y && n.jsx("span", {
                    style: { ...A,
                        top: "100%",
                        left: 0
                    },
                    children: new Array(9 - y).fill(null).map((e, t) => j(y + t + 1))
                })]
            })
        })
    },
    A = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        width: "100%"
    },
    ee = e => {
        const {
            partKey: t,
            type: i,
            children: r,
            ref: a,
            ...s
        } = e, l = P(), {
            justify: o
        } = q();
        return n.jsx(w.span, { ...s,
            "data-state": l ? void 0 : "exiting",
            style: {
                display: "inline-flex",
                justifyContent: o,
                padding: `calc(${h}/2) 0`,
                position: "relative"
            },
            layout: "position",
            ref: a,
            children: n.jsx(E, {
                mode: "popLayout",
                anchorX: o,
                initial: !1,
                children: n.jsx(w.span, {
                    layout: "right" === o && "position",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: [null, 1]
                    },
                    exit: {
                        opacity: [null, 0]
                    },
                    style: {
                        display: "inline-block",
                        whiteSpace: "pre"
                    },
                    children: r
                }, r)
            })
        })
    },
    R = e => {
        const {
            parts: i,
            justify: r = "left",
            mode: a,
            style: s,
            name: l,
            ref: o,
            ...c
        } = e, u = t.useRef(null);
        t.useImperativeHandle(o, () => u.current, []);
        const p = t.useMemo(() => ({
                justify: r
            }), [r]),
            f = t.useRef(null),
            d = T(),
            [y, h] = t.useState();
        return t.useEffect(() => {
            if (!f.current) return;
            if (d) return void(u.current && (u.current.style.width = S(f.current)));
            const e = Array.from(f.current.children).map(e => {
                if (!(e instanceof HTMLElement)) return;
                if ("exiting" === e.dataset.state) {
                    const t = e.nextSibling;
                    return e.remove(), () => {
                        f.current && f.current.insertBefore(e, t)
                    }
                }
                const t = L.get(e);
                if (!t) return;
                const n = e.style.width;
                return e.style.width = t, () => {
                    e.style.width = n
                }
            });
            h(S(f.current));
            for (let t = e.length - 1; t >= 0; t--) {
                const n = e[t];
                n && n()
            }
        }, [i.map(e => e.value).join("")]), n.jsx(Y, {
            value: p,
            children: n.jsx(w.span, { ...c,
                ref: u,
                className: `number-section-${l}`,
                style: { ...s,
                    display: "inline-flex",
                    justifyContent: r,
                    width: y
                },
                children: n.jsxs("span", {
                    ref: f,
                    style: {
                        display: "inline-flex",
                        justifyContent: "inherit",
                        position: "relative"
                    },
                    children: ["​", n.jsx(E, {
                        mode: a,
                        anchorX: r,
                        initial: !1,
                        children: i.map(e => "integer" === e.type || "fraction" === e.type ? n.jsx(Z, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            value: e.value,
                            initialValue: d ? void 0 : 0
                        }, e.key) : n.jsx(ee, {
                            type: e.type,
                            partKey: e.key,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            children: e.value
                        }, "literal" === e.type ? `${e.key}:${e.value}` : e.key))
                    })]
                })
            })
        })
    };

function te({
    children: e
}) {
    return n.jsx(w.span, {
        layout: !0,
        "aria-hidden": !0,
        style: {
            display: "inline-flex",
            "--invert-x": 1,
            margin: `0 calc(-1*${M})`,
            padding: `calc(${h}/2) ${M}`,
            position: "relative",
            zIndex: -1,
            overflow: "clip",
            WebkitMaskImage: J,
            WebkitMaskSize: Q,
            WebkitMaskPosition: "center, center, top left, top right, bottom right, bottom left",
            WebkitMaskRepeat: "no-repeat"
        },
        children: e
    })
}
B({
    "--invert-x": {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => n.x.scale * t.x
    }
});
const ne = {
        opacity: {
            duration: 1,
            ease: K
        },
        layout: {
            type: "spring",
            duration: 1,
            bounce: 0
        },
        y: {
            type: "spring",
            duration: 1,
            bounce: 0
        }
    },
    ce = e => {
        const {
            value: i,
            locales: r,
            format: a,
            transition: s,
            style: l,
            suffix: o,
            prefix: c,
            ref: u,
            animateOnView: p = !0,
            inline: f = !1,
            ...d
        } = e, y = t.useRef(null), m = G(y), x = t.useMemo(() => W(i, {
            locales: r,
            format: a
        }, c, o), [i, r, a, c, o]), g = t.useMemo(() => W(0, {
            locales: r,
            format: a
        }, c, o), [r, a, c, o]), j = p && !m ? g : x, {
            pre: v,
            integer: $,
            fraction: k,
            post: b,
            formatted: I
        } = j, S = t.useContext(N).transition, C = s ? ? S ? ? ne;
        return n.jsx(X, {
            children: n.jsx(U, {
                transition: C,
                children: n.jsxs(w.span, { ...d,
                    ref: e => {
                        y.current = e, "function" == typeof u ? u(e) : u && (u.current = e)
                    },
                    layout: !0,
                    style: {
                        lineHeight: 1,
                        ...l,
                        display: "inline-grid",
                        gridTemplateAreas: '"stack"',
                        justifyItems: "start",
                        alignItems: "baseline",
                        isolation: "isolate",
                        whiteSpace: "nowrap",
                        ...f ? {
                            "--mask-height": "0px"
                        } : null
                    },
                    children: [n.jsx("span", {
                        style: {
                            gridArea: "stack",
                            visibility: "hidden"
                        },
                        "aria-hidden": !0,
                        children: x.formatted
                    }), n.jsxs(w.span, {
                        layout: !0,
                        "aria-label": I,
                        style: {
                            gridArea: "stack",
                            ...f && {
                                justifySelf: x.pre.length ? "start" : "end"
                            },
                            display: "inline-flex",
                            direction: "ltr",
                            isolation: "isolate",
                            position: "relative",
                            zIndex: -1
                        },
                        children: [n.jsx(R, {
                            style: {
                                padding: `calc(${h}/2) 0`
                            },
                            "aria-hidden": !0,
                            justify: "right",
                            mode: "popLayout",
                            parts: v,
                            name: "pre"
                        }), n.jsxs(te, {
                            children: [n.jsx(R, {
                                justify: "right",
                                parts: $,
                                name: "integer"
                            }), n.jsx(R, {
                                layout: "position",
                                parts: k,
                                name: "fraction"
                            })]
                        }), n.jsx(R, {
                            style: {
                                padding: `calc(${h}/2) 0`
                            },
                            "aria-hidden": !0,
                            layout: "position",
                            mode: "popLayout",
                            parts: b,
                            name: "post"
                        })]
                    })]
                })
            })
        })
    };
export {
    ce as AnimateNumber
};