import {
    j as l
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as d
} from "./index.CtKCFvq0.js";
import {
    S as N,
    a as k
} from "./index.CeN7Y3go.js";
import {
    T as A,
    c as B
} from "./index.BwDjtkKo.js";
import {
    g as m,
    V as b
} from "./VideoAsset.ZXCa1LyB.js";
import {
    I as C,
    W as S,
    Y as M,
    R as W
} from "./index.DwDAuxka.js";
const n = (s, {
        breakpoint: e
    } = {}) => {
        const a = ["--max-height", e].filter(Boolean).join("-");
        return {
            className: `max-h-(${a})`,
            style: {
                [a]: s
            }
        }
    },
    R = s => "string" == typeof s ? n(s) : m(s, (s, e) => n(s, {
        breakpoint: e
    })),
    c = (s, {
        breakpoint: e
    } = {}) => {
        const a = ["--max-width", e].filter(Boolean).join("-");
        return {
            className: `max-w-(${a})`,
            style: {
                [a]: s
            }
        }
    },
    V = s => "string" == typeof s ? c(s) : m(s, (s, e) => c(s, {
        breakpoint: e
    })),
    T = s => {
        const {
            assetBlock: e,
            className: a,
            ...t
        } = s, {
            block: o,
            maxWidth: i,
            maxHeight: m,
            layout: n = "fit",
            caption: r
        } = e, {
            className: c,
            style: x
        } = V(i), {
            className: p,
            style: j
        } = R(m), y = o[0], u = d.useMemo(() => "imageAssetBlock" === y._type ? l.jsx(C, { ...t,
            ...y,
            layout: n,
            className: a
        }) : "videoAssetBlock" === y._type ? l.jsx(b, { ...t,
            ...y,
            layout: n,
            className: a
        }) : "wistiaAssetBlock" === y._type ? l.jsx(S, { ...t,
            ...y,
            layout: n,
            className: a
        }) : "youtubeAssetBlock" === y._type ? l.jsx(M, { ...t,
            ...y,
            layout: n,
            className: a
        }) : void 0, [y, t, n, a]);
        return l.jsxs(N, {
            className: B(c, p, r && "flex flex-col gap-3"),
            style: { ...j,
                ...x
            },
            children: [l.jsx(k, {
                children: u
            }), r ? l.jsx(A, {
                size: "sm",
                className: "line-clamp-1 flex-none",
                children: l.jsx(W, {
                    value: r
                })
            }) : null]
        })
    };
export {
    T as A
};