import {
    s as _,
    b as w,
    a as F
} from "./getSanityFileUrl.qZZEuEbn.js";
var o = (e => (e.FILE = "s3File", e.IMAGE = "s3Image", e.VIDEO = "s3Video", e))(o || {}),
    y = /^s3File-([a-zA-Z0-9_-]+)-([a-z0-9]+)$/,
    E = /^s3Image-([a-zA-Z0-9_-]+)-(\d+)x(\d+)-([a-z0-9]+)$/,
    b = /^s3Video-([a-zA-Z0-9_-]+)-(\d+)x(\d+)-([a-z0-9]+)$/,
    z = /^([a-zA-Z0-9_-]+)\.([a-z0-9]+)$/i,
    h = /^([a-zA-Z0-9_-]+)-(\d+)x(\d+)\.([a-z0-9]+)$/i,
    V = /^([a-zA-Z0-9_-]+)-(\d+)x(\d+)\.([a-z0-9]+)$/i,
    A = /^([a-zA-Z0-9_-]+)(?:-(\d+)x(\d+))?\.([a-z0-9]+)$/i,
    v = new RegExp(`^(?:${o.IMAGE}-[a-zA-Z0-9_-]+-\\d+x\\d+-[a-z0-9]+|${o.VIDEO}-[a-zA-Z0-9_-]+-\\d+x\\d+-[a-z0-9]+|${o.FILE}-[a-zA-Z0-9_-]+-[a-z0-9]+)$`),
    D = "upload-in-progress-placeholder",
    U = "tmp",
    L = new Set(["mp4", "webm", "mov", "m4v", "avi", "mkv", "wmv", "flv", "mpeg", "mpg", "3gp", "ogv"]),
    f = class extends Error {
        unresolvable = !0;
        input;
        constructor(e, t = "Failed to resolve asset ID from source") {
            super(t), this.input = e
        }
    };

function R(e) {
    const t = e;
    return !(!t.unresolvable || !("input" in t))
}

function x(e) {
    return (...t) => {
        try {
            return e(...t)
        } catch (e) {
            if (R(e)) return;
            throw e
        }
    }
}

function p(e) {
    return null !== e && !Array.isArray(e) && "object" == typeof e
}

function M(e) {
    return p(e) && "string" == typeof e._ref
}

function Z(e) {
    const t = e;
    return p(t) && !!t.asset && "object" == typeof t.asset
}

function c(e) {
    const t = e;
    return p(t) && !!t._upload && !("asset" in t)
}

function G(e) {
    return "s3FileAsset" === e._type
}

function j(e) {
    return "s3ImageAsset" === e._type
}

function B(e) {
    return "s3VideoAsset" === e._type
}

function l(e) {
    if (!e) return "";
    let t = e;
    if (/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(t)) try {
        t = new URL(t).pathname
    } catch {}
    const [n = ""] = t.split("?"), [r = ""] = n.split("#"), s = r.replace(/^\/+/, "").split("/").filter(Boolean);
    return s[s.length - 1] ? ? ""
}

function I(e) {
    const t = y.exec(e);
    if (!t) throw new Error(`Malformed file asset ID '${e}'.`);
    const [, n, r] = t;
    return {
        type: o.FILE,
        assetId: n,
        extension: r
    }
}

function d(e) {
    const t = E.exec(e);
    if (!t) throw new Error(`Malformed asset ID '${e}'.`);
    const [, n, r, s, i] = t, a = Number(r), f = Number(s);
    if (!(a > 0 && f > 0)) throw new Error(`Malformed asset ID '${e}'.`);
    return {
        type: o.IMAGE,
        assetId: n,
        width: a,
        height: f,
        extension: i
    }
}

function m(e) {
    const t = b.exec(e);
    if (!t) throw new Error(`Malformed asset ID '${e}'.`);
    const [, n, r, s, i] = t, a = Number(r), f = Number(s);
    if (!(a > 0 && f > 0)) throw new Error(`Malformed asset ID '${e}'.`);
    return {
        type: o.VIDEO,
        assetId: n,
        width: a,
        height: f,
        extension: i
    }
}

function N(e) {
    if (e.startsWith(`${o.FILE}-`)) return I(e);
    if (e.startsWith(`${o.IMAGE}-`)) return d(e);
    if (e.startsWith(`${o.VIDEO}-`)) return m(e);
    throw new Error(`Invalid S3 asset ID '${e}'.`)
}

function C(e) {
    const t = l(e),
        n = z.exec(t);
    if (!n || h.test(t)) throw new Error(`Malformed file asset filename '${e}'.`);
    const [, r, s] = n;
    return I(`${o.FILE}-${r}-${s.toLowerCase()}`)
}

function P(e) {
    const t = l(e),
        n = h.exec(t);
    if (!n) throw new Error(`Malformed image asset filename '${e}'.`);
    const [, r, s, i, a] = n;
    return d(`${o.IMAGE}-${r}-${s}x${i}-${a.toLowerCase()}`)
}

function W(e) {
    const t = l(e),
        n = V.exec(t);
    if (!n) throw new Error(`Malformed video asset filename '${e}'.`);
    const [, r, s, i, a] = n;
    return m(`${o.VIDEO}-${r}-${s}x${i}-${a.toLowerCase()}`)
}

function k(e) {
    const t = l(e);
    if (!A.test(t)) throw new Error(`Malformed asset filename '${e}'.`);
    const n = h.exec(t);
    if (n) {
        const e = n[4].toLowerCase();
        return L.has(e) ? W(t) : P(t)
    }
    return C(t)
}

function q(e) {
    return /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(e)
}

function H(e) {
    const {
        assetId: t,
        extension: n
    } = I(e);
    return `${t}.${n}`
}

function oe(e, t) {
    return `${t.baseUrl}/${H(e)}`
}

function Q(e) {
    const {
        assetId: t,
        width: n,
        height: r,
        extension: s
    } = d(e);
    return `${t}-${n}x${r}.${s}`
}

function Y(e, t) {
    return `${t.baseUrl}/${Q(e)}`
}

function J(e) {
    const {
        assetId: t,
        width: n,
        height: r,
        extension: s
    } = m(e);
    return `${t}-${n}x${r}.${s}`
}

function ae(e, t) {
    return `${t.baseUrl}/${J(e)}`
}

function K(e) {
    return !(!e || e.includes("/")) && A.test(e)
}

function X(e) {
    if ("string" != typeof e || !e.trim()) throw new f(e, "Failed to resolve path from URL/path");
    if (q(e)) {
        const t = new URL(e).pathname.replace(/^\/+/, "");
        if (!t) throw new f(e, "Failed to resolve path from URL/path");
        return t
    }
    const t = e.split("?")[0] ? .split("#")[0] ? .replace(/^\/+/, "") || e.replace(/^\/+/, "");
    if (!t) throw new f(e, "Failed to resolve path from URL/path");
    return t
}

function T(e) {
    const t = X(e).split("/").filter(Boolean),
        n = t[t.length - 1];
    if (!K(n)) throw new f(e, `Failed to resolve filename from URL/path '${e}'`);
    return n
}
var O = x(T);

function ee(e) {
    if (v.test(e)) return e;
    const t = O(e);
    if (!t) throw new f(e);
    const n = k(t);
    return n.type === o.FILE ? `${o.FILE}-${n.assetId}-${n.extension}` : `${n.type}-${n.assetId}-${n.width}x${n.height}-${n.extension}`
}

function $(e) {
    if (c(e)) return D;
    const t = Z(e) ? e.asset : e;
    let n = "";
    if ("string" == typeof t) n = ee(t);
    else if (M(t)) n = t._ref;
    else {
        const e = t;
        (G(e) || j(e) || B(e)) && (n = e._id)
    }
    if (!n || !v.test(n)) throw new f(e);
    return n
}

function S(e) {
    if (c(e)) return {
        width: 0,
        height: 0,
        aspectRatio: 0,
        _type: "s3ImageDimensions"
    };
    const t = $(e),
        {
            width: n,
            height: r
        } = d(t);
    return {
        width: n,
        height: r,
        aspectRatio: n / r,
        _type: "s3ImageDimensions"
    }
}

function te(e) {
    if (c(e)) return {
        width: 0,
        height: 0,
        aspectRatio: 0,
        _type: "s3VideoDimensions"
    };
    const t = $(e),
        {
            width: n,
            height: r
        } = m(t);
    return {
        width: n,
        height: r,
        aspectRatio: n / r,
        _type: "s3VideoDimensions"
    }
}
var se = x(te);

function ne(e) {
    if (c(e)) return U;
    return N($(e)).extension
}

function fe(e) {
    return se(e)
}
const re = "https://sanity-cdn.superside.com",
    g = e => "image" === e ? ._type ? e : e ? .value ? .[0],
    ue = (e, t) => {
        const n = g(e);
        if (!n) return;
        const {
            width: r,
            height: s
        } = t || {};
        if ("image" === n._type) {
            let e = _(n).auto("format").quality(95);
            return r && (e = e.width(r)), s && (e = e.height(s)), e.url() || void 0
        }
        return "s3Image" === n._type && n.asset ? ._ref && Y(n.asset._ref, {
            baseUrl: re
        }) || void 0
    },
    ce = e => {
        const t = g(e);
        return t ? "image" === t._type ? F(t) ? ? "jpg" : "s3Image" === t._type && t.asset ? ._ref ? ne(t.asset) ? ? "jpg" : "jpg" : "jpg"
    },
    le = e => {
        const t = g(e);
        if (t) {
            if ("s3Image" === t._type) return t.asset ? ._ref ? S(t) : void 0;
            if ("image" === t._type) return w(t)
        }
    },
    de = e => {
        const t = g(e);
        if (t) {
            if ("s3Image" === t._type) return t.asset ? ._ref ? S(t) ? .aspectRatio : void 0;
            if ("image" === t._type) return w(t) ? .aspectRatio
        }
    };
export {
    ae as a, oe as b, ue as c, de as d, le as e, ce as f, ne as g, fe as t
};