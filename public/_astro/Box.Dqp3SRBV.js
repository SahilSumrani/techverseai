import {
    j as l
} from "./jsx-runtime.u17CrQMm.js";
import {
    c as m,
    M as L
} from "./index.BwDjtkKo.js";
import {
    r as V
} from "./index.CtKCFvq0.js";
import {
    g as n,
    m as w,
    V as z
} from "./VideoAsset.ZXCa1LyB.js";
import {
    S as I
} from "./index.CeN7Y3go.js";
import {
    s as R
} from "./getSanityFileUrl.qZZEuEbn.js";
import {
    c as S
} from "./image.njRmqV4O.js";
const N = t => ({
        className: `zoom-${t}`
    }),
    M = t => "number" == typeof t ? N(t) : n(t, t => N(t)),
    A = {
        left: "left",
        center: "center",
        right: "right",
        top: "top",
        topLeft: "top-left",
        topRight: "top-right",
        bottom: "bottom",
        bottomLeft: "bottom-left",
        bottomRight: "bottom-right"
    },
    y = t => {
        const {
            position: e
        } = t;
        return {
            className: `bg-${A[e]}`
        }
    },
    B = (t = {
        _type: "backgroundPosition",
        position: "center"
    }) => t && "_type" in t ? y(t) : n(t, t => y(t)),
    D = {
        auto: "auto",
        cover: "cover",
        contain: "contain"
    },
    C = t => {
        const {
            size: e = "cover"
        } = t;
        return {
            className: `bg-${D[e]}`
        }
    },
    E = (t = {
        _type: "backgroundSize",
        size: "cover"
    }) => t && "_type" in t ? C(t) : n(t, t => C(t)),
    h = t => ({
        className: `bg-${t}`
    }),
    j = t => "string" == typeof t ? h(t) : n(t, t => h(t)),
    k = (t, {
        breakpoint: e
    } = {}) => {
        const o = ["--background-image", e].filter(Boolean).join("-");
        return {
            className: `bg-(image:${o})`,
            style: {
                [o]: `url(${R(t).auto("format").url()})`
            }
        }
    },
    O = t => t && "_type" in t ? k(t) : n(t, (t, e) => k(t, {
        breakpoint: e
    })),
    U = {
        repeat: "bg-repeat",
        space: "bg-repeat-space",
        round: "bg-repeat-round",
        "repeat-x": "bg-repeat-x",
        "repeat-y": "bg-repeat-y",
        "no-repeat": "bg-no-repeat"
    },
    $ = t => ({
        className: U[t]
    }),
    H = (t = "no-repeat") => "string" == typeof t ? $(t) : n(t, t => $(t)),
    P = {
        primary: "bor-primary",
        secondary: "bor-secondary",
        background: "background",
        tertiary: "bor-tertiary",
        foreground: "foreground",
        transparent: "transparent",
        black: "black-100",
        white: "white-100"
    },
    x = (t, e) => ({
        className: `bg-${P[t]}/${e||100}`
    }),
    _ = (t, e) => "string" == typeof t ? x(t, e) : n(t, t => x(t, e)),
    T = t => {
        const {
            color: e,
            image: o,
            position: a,
            repeat: s,
            size: r,
            attachment: n
        } = t;
        return Z(_(e), o && O(o), o && B(a), o && H(s), o && E(r), o && j(n))
    },
    Z = (...t) => {
        const e = [],
            o = {};
        for (const a of t) a && (a.className ? .trim() && e.push(a.className), Object.assign(o, a.style));
        return {
            className: m(e),
            style: o
        }
    },
    q = {
        top: "top",
        topLeft: "top-left",
        topRight: "top-right",
        bottom: "bottom",
        bottomLeft: "bottom-left",
        bottomRight: "bottom-right",
        center: "center",
        right: "right",
        left: "left"
    },
    v = t => ({
        className: `object-${q[t]}`
    }),
    F = t => "string" == typeof t ? v(t) : n(t, v),
    G = t => {
        const {
            background: e
        } = t, o = V.useCallback(t => {
            switch (t._type) {
                case "backgroundVideo":
                    {
                        const {
                            video: e,
                            attachment: o,
                            position: a
                        } = t,
                        {
                            className: s
                        } = n(o, t => ({
                            className: "fixed" === t ? "fixed" : "absolute"
                        })),
                        {
                            className: r
                        } = F(a);
                        return l.jsx(z, {
                            "data-testid": "video-asset-background",
                            layout: "fill",
                            videoAsset: {
                                _type: "videoAsset",
                                video: e
                            },
                            className: m(s, r)
                        })
                    }
                case "backgroundColor":
                    {
                        const {
                            color: e,
                            opacity: o
                        } = t,
                        {
                            className: a
                        } = _(e, o);
                        return l.jsx("div", {
                            "data-testid": "color-background",
                            className: m(a)
                        })
                    }
                case "backgroundImage":
                    {
                        const {
                            image: e,
                            position: o,
                            attachment: a
                        } = t,
                        {
                            className: s,
                            style: r
                        } = n(e, (t, e) => {
                            const o = ["--background-image", e].filter(Boolean).join("-");
                            return {
                                className: `bg-(image:${o})`,
                                style: {
                                    [o]: `url(${S(t)})`
                                }
                            }
                        }),
                        {
                            className: i
                        } = B(o ? w(o, t => t ? {
                            _type: "backgroundPosition",
                            position: t
                        } : void 0) : void 0),
                        {
                            className: c
                        } = j(a);
                        return l.jsx("div", {
                            "data-testid": "image-background",
                            style: r,
                            className: m("bg-cover bg-center bg-no-repeat", s, i, c)
                        })
                    }
                case "backgroundClassic":
                    {
                        const {
                            className: e,
                            style: o
                        } = T(t);
                        return l.jsx("div", {
                            "data-testid": "classic-background",
                            className: m(e),
                            style: o
                        })
                    }
                default:
                    return null
            }
        }, []);
        return e && e.length ? l.jsx("div", {
            "data-testid": "background",
            className: m("pointer-events-none absolute inset-0 -z-1 grid select-none [&>*]:col-span-full [&>*]:row-span-full"),
            style: {
                clipPath: "inset(0)"
            },
            children: e ? .map((t, e) => l.jsx(I, {
                className: "absolute inset-0 h-full w-full",
                style: {
                    zIndex: e + 1
                },
                children: o(t)
            }, e))
        }) : null
    },
    J = "div",
    st = t => {
        const {
            background: e,
            className: o,
            zoom: a,
            mood: s,
            as: r = J,
            children: n,
            dangerouslySetInnerHTML: i,
            ...c
        } = t, {
            className: g
        } = M(a) || {}, d = !(!s || !L[s] ? .isDark), p = !!e ? .length, b = m(s && "text-foreground", s && (d ? "dark" : "light"), g, !p && s && "bg-background", p && "relative", o);
        return i ? l.jsx(r, { ...c,
            dangerouslySetInnerHTML: i,
            "data-mood": s,
            className: b
        }) : l.jsxs(r, { ...c,
            "data-mood": s,
            className: b,
            children: [l.jsx(G, {
                background: e
            }), n]
        })
    };
export {
    st as B
};