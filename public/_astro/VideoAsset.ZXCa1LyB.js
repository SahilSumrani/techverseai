import {
    j as c
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as j
} from "./index.CtKCFvq0.js";
import {
    i as E,
    d as f,
    j as M,
    c as V
} from "./index.BwDjtkKo.js";
import {
    b as R,
    a as C,
    g as Y
} from "./video.DSn0FOh2.js";
import {
    c as p,
    e as Z
} from "./image.njRmqV4O.js";
import {
    b as ee,
    c as se,
    d as te
} from "./_baseForOwn.BCVnIoVi.js";

function ae(e, t) {
    var a = {};
    return t = ee(t), se(e, function(e, s, i) {
        te(a, s, t(e, s, i))
    }), a
}
const I = e => Object.entries(e).sort(([e], [t]) => E.indexOf(e) - E.indexOf(t)).filter(([, e]) => void 0 !== e),
    oe = [{
        name: "sm",
        value: ""
    }, {
        name: "md",
        value: "md"
    }, {
        name: "lg",
        value: "lg"
    }, {
        name: "xl",
        value: "xl"
    }],
    ne = (e, t) => {
        if (!e) return {
            className: void 0
        };
        const a = [],
            s = {};
        for (const i of oe) {
            const o = e[i.name];
            if (!o) continue;
            const {
                className: n,
                style: l
            } = t(o, i.value);
            n && n.split(" ").forEach(e => a.push([i.value, e].filter(Boolean).join(":"))), l && Object.assign(s, l)
        }
        return {
            className: a.join(" "),
            style: s
        }
    },
    O = (e, {
        breakpoint: t
    } = {}) => {
        const a = ["--aspect-ratio", t].filter(Boolean).join("-");
        return {
            className: `aspect-(${a})`,
            style: {
                [a]: String(e)
            }
        }
    },
    ie = e => "number" == typeof e ? O(e) : ne(e, (e, t) => O(e, {
        breakpoint: t
    })),
    le = e => !!p(e ? .thumbnail ? .[f.SM]),
    re = e => {
        const {
            isVisible: t,
            thumbnailByBreakpoint: a,
            width: s
        } = e, i = a[f.SM];
        if (!i) return null;
        const o = Z(i);
        return c.jsxs("picture", {
            "aria-hidden": "true",
            "data-testid": "video-asset-thumbnail",
            className: V("pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-200", t ? "opacity-100" : "opacity-0"),
            children: [I(a).reverse().map(([e, t], a) => {
                const i = 0 === a,
                    o = M[e],
                    n = null == s ? i ? void 0 : o : Math.min(s, o);
                return c.jsx("source", {
                    srcSet: p(t, {
                        width: n
                    }),
                    media: `(min-width: ${o}px)`
                }, e)
            }), c.jsx("img", {
                alt: "",
                loading: "lazy",
                className: "h-full w-full object-cover",
                src: p(i, {
                    width: s ? ? o ? .width
                }),
                width: o ? .width,
                height: o ? .height
            })]
        })
    },
    he = e => {
        const {
            layout: t = "fit",
            className: a,
            containerClassName: s,
            style: i,
            videoAsset: o,
            width: n,
            autoPlay: l = !0,
            playOnHover: r = !1,
            loop: u,
            muted: d,
            playsInline: m = !0,
            disableControls: h,
            onPause: v,
            onPlaying: y,
            ...b
        } = e, w = j.useRef(null), [x, g] = j.useState(!1), N = r && le(o);
        if (j.useEffect(() => {
                const e = w.current;
                g(!!(N && e && !e.paused && e.readyState >= e.HAVE_CURRENT_DATA))
            }, [N, o]), !o) return null;
        const {
            video: O,
            thumbnail: S
        } = o;
        if (!O ? .[f.SM]) return null;
        const B = O[f.SM],
            E = R(B),
            k = C(B),
            A = S ? .[f.SM],
            P = p(A, {
                width: n
            }),
            $ = l && !N,
            D = u ? ? ($ || N || "fill" === t),
            F = $ || N || (d ? ? "fill" === t),
            _ = h ? ? ($ || N),
            {
                className: q,
                style: H
            } = ie(ae(O, Y)),
            K = c.jsxs("video", {
                ref: w,
                "data-ui": "VideoAsset",
                "data-testid": "video-asset",
                ...b,
                "data-autoplay": $,
                "data-play-on-hover": N,
                poster: N ? void 0 : P,
                preload: "none",
                loop: D,
                muted: F,
                controls: !_,
                playsInline: m,
                onPause: e => {
                    N && g(!1), v ? .(e)
                },
                onPlaying: e => {
                    N && g(!0), y ? .(e)
                },
                style: { ...H,
                    ...i
                },
                className: V("object-contain", q, "fill" === t && "h-full w-full object-cover", "fit" === t && "h-auto max-h-full w-auto max-w-full", a),
                children: [I(O).reverse().map(([e, t]) => {
                    const a = S ? .[e],
                        s = R(t),
                        i = C(t);
                    return s && i ? c.jsx("source", {
                        "data-breakpoint": e,
                        "data-poster": !N && a ? p(a, n ? {
                            width: n
                        } : void 0) : void 0,
                        src: s,
                        type: `video/${i}`,
                        media: `(min-width: ${M[e]}px)`
                    }, e) : null
                }), c.jsx("source", {
                    src: E,
                    type: `video/${k}`
                })]
            });
        return N && S ? c.jsxs("div", {
            "data-testid": "video-asset-container",
            className: V("relative", "fill" === t && "h-full w-full", s),
            children: [K, c.jsx(re, {
                isVisible: !x,
                thumbnailByBreakpoint: S,
                width: n
            })]
        }) : K
    };
export {
    he as V, ie as a, le as c, ne as g, ae as m, I as s
};