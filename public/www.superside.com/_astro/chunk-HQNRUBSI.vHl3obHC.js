import {
    r as A,
    a as ot
} from "./index.CtKCFvq0.js";
import {
    j as C
} from "./jsx-runtime.u17CrQMm.js";
const it = {
        "images.ctfassets.net": "contentful",
        "cdn.builder.io": "builder.io",
        "images.prismic.io": "imgix",
        "www.datocms-assets.com": "imgix",
        "cdn.sanity.io": "imgix",
        "images.unsplash.com": "imgix",
        "cdn.shopify.com": "shopify",
        "s7d1.scene7.com": "scene7",
        "ip.keycdn.com": "keycdn",
        "assets.caisy.io": "bunny",
        "images.contentstack.io": "contentstack",
        "ucarecdn.com": "uploadcare",
        "imagedelivery.net": "cloudflare_images"
    },
    ct = {
        "imgix.net": "imgix",
        "files.wordpress.com": "wordpress",
        "b-cdn.net": "bunny",
        "storyblok.com": "storyblok",
        "kc-usercontent.com": "kontent.ai",
        "cloudinary.com": "cloudinary",
        "kxcdn.com": "keycdn",
        "imgeng.in": "imageengine",
        "imagekit.io": "imagekit",
        "cloudimg.io": "cloudimage",
        "ucarecdn.com": "uploadcare",
        "supabase.co": "supabase",
        "graphassets.com": "hygraph"
    },
    ut = {
        "/cdn-cgi/image/": "cloudflare",
        "/cdn-cgi/imagedelivery/": "cloudflare_images",
        "/_next/image": "nextjs",
        "/_next/static": "nextjs",
        "/_vercel/image": "vercel",
        "/is/image": "scene7",
        "/_ipx/": "ipx",
        "/_image": "astro",
        "/.netlify/images": "netlify",
        "/storage/v1/object/public/": "supabase",
        "/storage/v1/render/image/public/": "supabase"
    },
    x = t => {
        if (!t) return t;
        const r = Number(t);
        return isNaN(r) ? t : Math.round(r)
    },
    u = (t, r, e, a, i) => {
        e ? (i && (e = x(e)), t.searchParams.set(r, e.toString())) : a && t.searchParams.delete(r)
    },
    g = (t, r, e) => {
        t.searchParams.has(r) || t.searchParams.set(r, e.toString())
    },
    v = (t, r) => {
        const e = Number(t.searchParams.get(r));
        return isNaN(e) ? void 0 : e
    },
    M = t => {
        const {
            pathname: r,
            search: e
        } = t;
        return `${r}${e}`
    },
    I = t => "n" === t.hostname ? M(t) : t.toString(),
    m = (t, r) => "string" == typeof t ? new URL(t, r ? ? "http://n/") : t,
    k = new Map(Object.entries(it)),
    ft = Object.entries(ct);

function mt(t) {
    return D(t) || lt(t)
}

function D(t) {
    if ("string" == typeof t && !t.startsWith("https://")) return !1;
    const {
        hostname: r
    } = m(t);
    if (k.has(r)) return k.get(r);
    for (const [t, e] of ft)
        if (r.endsWith(`.${t}`)) return e;
    return !1
}

function lt(t) {
    const {
        pathname: r
    } = m(t);
    for (const [t, e] of Object.entries(ut))
        if (r.startsWith(t)) return e;
    return !1
}
const dt = ({
        url: t,
        width: r,
        height: e,
        format: a
    }) => {
        const i = m(t);
        return r && r > 4e3 && (e && (e = Math.round(4e3 * e / r)), r = 4e3), e && e > 4e3 && (r && (r = Math.round(4e3 * r / e)), e = 4e3), u(i, "w", r, !0, !0), u(i, "h", e, !0, !0), u(i, "fm", a), g(i, "fit", "fill"), i
    },
    pt = ({
        url: t,
        width: r,
        height: e,
        format: a
    }) => {
        const i = m(t);
        return u(i, "width", r, !0, !0), u(i, "height", e, !0, !0), u(i, "format", a), r && e && (g(i, "fit", "cover"), g(i, "sharp", "true")), i
    },
    gt = ({
        url: t,
        width: r,
        height: e,
        format: a
    }) => {
        const i = m(t);
        if (u(i, "w", r, !0, !0), u(i, "h", e, !0, !0), g(i, "fit", "min"), a) {
            i.searchParams.set("fm", a);
            const t = i.searchParams.get("auto");
            "format" === t ? i.searchParams.delete("auto") : t ? .includes("format") && i.searchParams.set("auto", t.split(",").filter(t => "format" !== t).join(","))
        } else i.searchParams.delete("fm"), i.searchParams.get("auto") ? .includes("format") || i.searchParams.append("auto", "format");
        return i
    },
    ht = /(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/,
    bt = t => {
        const r = m(t),
            e = r.pathname.match(ht);
        if (!e) throw new Error("Invalid Shopify URL");
        const [, a, i, s, n, o, h, c] = e;
        r.pathname = `${a}${h}`;
        const u = s || r.searchParams.get("width"),
            d = n || r.searchParams.get("height");
        return r.searchParams.delete("width"), r.searchParams.delete("height"), {
            base: r.toString(),
            width: Number(u) || void 0,
            height: Number(d) || void 0,
            format: c ? c.slice(1) : void 0,
            params: {
                crop: o,
                size: i
            },
            cdn: "shopify"
        }
    },
    $t = ({
        base: t,
        width: r,
        height: e,
        format: a,
        params: i
    }) => {
        const s = m(t);
        return u(s, "width", r, !0, !0), u(s, "height", e, !0, !0), u(s, "crop", i ? .crop), u(s, "format", a), s
    },
    yt = ({
        url: t,
        width: r,
        height: e
    }) => {
        const a = bt(t);
        if (!a) return;
        const i = { ...a,
            width: r,
            height: e
        };
        return $t(i)
    },
    xt = ({
        url: t,
        width: r,
        height: e
    }) => {
        const a = m(t);
        return u(a, "w", r, !0, !0), u(a, "h", e, !0, !0), g(a, "crop", "1"), a
    },
    wt = ({
        url: t,
        width: r,
        height: e
    }) => {
        const a = m(t);
        return u(a, "w", r, !0, !0), u(a, "h", e, !0, !0), u(a, "q", v(a, "q"), !0), a
    },
    St = /https?:\/\/(?<host>[^\/]+)\/(?<cloudName>[^\/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<idAndFormat>[^\s]+)$/g,
    vt = t => t ? Object.fromEntries(t.split(",").map(t => t.split("_"))) : {},
    B = ({
        host: t,
        cloudName: r,
        assetType: e,
        deliveryType: a,
        signature: i,
        transformations: s = {},
        version: n,
        id: o,
        format: h
    }) => {
        h && (s.f = h);
        return `https://${[t,r,e,a,i,Object.entries(s).map(([t,r])=>`${t}_${r}`).join(","),n,o].filter(Boolean).join("/")}`
    },
    H = t => {
        const r = [...m(t).toString().matchAll(St)];
        if (!r.length) throw new Error("Invalid Cloudinary URL");
        const e = r[0].groups || {},
            {
                transformations: a = "",
                idAndFormat: i,
                ...s
            } = e;
        delete e.idAndFormat;
        const n = i.lastIndexOf("."),
            o = n < 0 ? i : i.slice(0, n),
            h = n < 0 ? void 0 : i.slice(n + 1),
            {
                w: c,
                h: u,
                f: d,
                ...l
            } = vt(a),
            f = d && "auto" !== d ? d : h;
        return {
            base: B({ ...s,
                id: o,
                transformations: l
            }),
            width: Number(c) || void 0,
            height: Number(u) || void 0,
            format: f,
            cdn: "cloudinary",
            params: { ...e,
                id: "fetch" === e.deliveryType ? i : o,
                format: f,
                transformations: l
            }
        }
    },
    Pt = ({
        base: t,
        width: r,
        height: e,
        format: a,
        params: i
    }) => {
        const s = {
            transformations: {},
            ...H(t.toString()).params,
            ...i,
            format: a || "auto"
        };
        return r && (s.transformations.w = x(r).toString()), e && (s.transformations.h = x(e).toString()), s.transformations.c || = "lfill", B(s)
    },
    _t = ({
        url: t,
        width: r,
        height: e,
        format: a = "auto"
    }) => {
        const i = H(t);
        if (!i) throw new Error("Invalid Cloudinary URL");
        if ("image" !== i.params ? .assetType) throw new Error("Cloudinary transformer only supports images");
        if (i.params ? .signature) throw new Error("Cloudinary transformer does not support signed URLs");
        const s = { ...i,
            width: r,
            height: e,
            format: a
        };
        return Pt(s)
    },
    jt = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/image\/(?<transformations>[^\/]+)?\/(?<path>.*)$/g,
    Ut = t => Object.fromEntries(t.split(",").map(t => t.split("="))),
    K = ({
        host: t,
        transformations: r = {},
        path: e
    }) => `https://${[t,"cdn-cgi","image",Object.entries(r).map(([t,r])=>`${t}=${r}`).join(","),e].join("/")}`,
    V = t => {
        const r = m(t),
            e = [...r.toString().matchAll(jt)];
        if (!e.length) throw new Error("Invalid Cloudflare URL");
        const a = e[0].groups || {},
            {
                transformations: i,
                ...s
            } = a,
            {
                width: n,
                height: o,
                f: h,
                ...c
            } = Ut(i);
        return K({ ...s,
            transformations: c
        }), {
            base: r.toString(),
            width: Number(n) || void 0,
            height: Number(o) || void 0,
            format: h,
            cdn: "cloudflare",
            params: { ...a,
                transformations: c
            }
        }
    },
    Rt = ({
        base: t,
        width: r,
        height: e,
        format: a,
        params: i
    }) => {
        const s = {
            transformations: {},
            ...V(t.toString()).params,
            ...i
        };
        return r && (s.transformations.width = r ? .toString()), e && (s.transformations.height = e ? .toString()), a && (s.transformations.f = "jpg" === a ? "jpeg" : a), s.transformations.fit || = "cover", new URL(K(s))
    },
    It = ({
        url: t,
        width: r,
        height: e,
        format: a = "auto"
    }) => {
        const i = V(t);
        if (!i) throw new Error("Invalid Cloudflare URL");
        const s = { ...i,
            width: r,
            height: e,
            format: a
        };
        return Rt(s)
    },
    Ot = ({
        url: t,
        width: r,
        height: e
    }) => {
        const a = m(t);
        return u(a, "width", r, !0, !0), r && e && g(a, "aspect_ratio", `${r}:${e}`), a
    },
    Et = /(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/g,
    Nt = /^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/g,
    zt = t => t ? Object.fromEntries(t.split(":").map(t => {
        if (!t) return [];
        const [r, e] = t.split("(");
        return [r, e.replace(")", "")]
    })) : {},
    kt = t => {
        if (!t) return;
        const r = Object.entries(t).map(([t, r]) => `${t}(${r??""})`);
        return 0 !== r.length ? `filters:${r.join(":")}` : void 0
    },
    Lt = t => {
        const r = m(t),
            e = "img2.storyblok.com" === r.hostname ? Nt : Et,
            [a] = r.pathname.matchAll(e);
        if (!a || !a.groups) throw new Error("Invalid Storyblok URL");
        const {
            id: i,
            crop: s,
            width: n,
            height: o,
            filters: h,
            flipx: c,
            flipy: u
        } = a.groups, {
            format: d,
            ...l
        } = zt(h);
        return "img2.storyblok.com" === r.hostname && (r.hostname = "a.storyblok.com"), {
            base: r.origin + i,
            width: Number(n) || void 0,
            height: Number(o) || void 0,
            format: d,
            params: {
                crop: s,
                filters: l,
                flipx: c,
                flipy: u
            },
            cdn: "storyblok"
        }
    },
    Wt = ({
        base: t,
        width: r = 0,
        height: e = 0,
        format: a,
        params: i = {}
    }) => {
        const {
            crop: s,
            filters: n,
            flipx: o = "",
            flipy: h = ""
        } = i;
        return new URL([t, "m", s, `${o}${r}x${h}${e}`, kt(n), a].filter(Boolean).join("/"))
    },
    qt = ({
        url: t,
        width: r,
        height: e,
        format: a
    }) => {
        const i = Lt(t);
        if (i) return a && (i.params || (i.params = {
            filters: {}
        }), i.params.filters || (i.params.filters = {}), i.params.filters.format = a), Wt({ ...i,
            width: r,
            height: e
        })
    },
    Tt = ({
        url: t,
        width: r,
        height: e,
        format: a
    }) => {
        const i = m(t);
        return u(i, "w", r, !0, !0), u(i, "h", e, !0, !0), u(i, "fm", a, !0), r && e && g(i, "fit", "crop"), i
    },
    L = t => {
        const r = m(t).searchParams.get("url");
        if (!r || !r.startsWith("http")) return !1;
        const e = D(r);
        return !!e && {
            cdn: e,
            url: r
        }
    },
    Ft = ({
        base: t,
        width: r,
        params: {
            quality: e = 75,
            root: a = "_vercel"
        } = {}
    }) => {
        const i = new URL("http://n");
        return i.pathname = `/${a}/image`, i.searchParams.set("url", t.toString()), u(i, "w", r, !1, !0), g(i, "q", e), M(i)
    },
    X = ({
        url: t,
        width: r,
        cdn: e
    }) => {
        const a = m(t),
            i = a.pathname.startsWith("/_next/image") || a.pathname.startsWith("/_vercel/image"),
            s = i ? a.searchParams.get("url") : t.toString();
        if (s) return u(a, "w", r, !0, !0), i ? I(a) : Ft({
            base: s,
            width: r,
            params: {
                root: "nextjs" === e ? "_next" : "_vercel"
            }
        })
    },
    At = t => X({ ...t,
        cdn: "nextjs"
    }),
    Ct = ({
        url: t,
        width: r,
        height: e,
        format: a
    }) => {
        const i = m(t);
        return u(i, "wid", r, !0, !0), u(i, "hei", e, !0, !0), u(i, "fmt", a, !0), u(i, "qlt", v(i, "qlt"), !0), u(i, "scl", v(i, "scl"), !0), g(i, "fit", "crop"), !r && !e && g(i, "scl", 1), i
    },
    Mt = ({
        url: t,
        width: r,
        height: e,
        format: a
    }) => {
        const i = m(t);
        return u(i, "width", r, !0, !0), u(i, "height", e, !0, !0), u(i, "format", a, !0), u(i, "quality", v(i, "quality"), !0), g(i, "enlarge", 0), i
    },
    Dt = ({
        url: t,
        width: r,
        height: e,
        format: a
    }) => {
        const i = m(t);
        return u(i, "width", r, !0, !0), u(i, "height", e, !0, !0), u(i, "format", a), u(i, "quality", v(i, "quality"), !0), i
    },
    R = {
        width: "w",
        height: "h",
        autoWidthWithFallback: "w_auto",
        auto_width_fallback: "w_auto",
        scaleToScreenWidth: "pc",
        scale_to_screen_width: "pc",
        crop: "cr",
        outputFormat: "f",
        format: "f",
        fit: "m",
        fitMethod: "m",
        compression: "cmpr",
        sharpness: "s",
        rotate: "r",
        inline: "in",
        keepMeta: "meta",
        keep_meta: "meta",
        noOptimization: "pass",
        no_optimization: "pass",
        force_download: "dl",
        max_device_pixel_ratio: "maxdpr",
        maxDevicePixelRatio: "maxdpr"
    };

function Bt(t) {
    return Object.keys(R).find(r => R[r] === t) || ""
}

function Ht(t) {
    let r = t.toString(),
        e = [];
    if (r) {
        let t = r.split("imgeng=");
        t.length > 1 && (e = t[1].split("/"))
    }
    return e
}

function Kt(t) {
    let r = t.toString(),
        e = "";
    if (r) {
        let t = r.split("imgeng=");
        e = t.length > 1 ? t[0].slice(0, -1) : r
    }
    return e
}
const Vt = ({
    url: t,
    width: r,
    height: e,
    format: a
}) => {
    const i = m(t),
        s = Kt(i);
    let n = {};
    const o = i.toString() === s ? [] : Ht(i);
    o.length && (n = Jt(o)), r && (n.width = r), e && (n.height = e), a && (n.format = a), n.hasOwnProperty("fit") || (n = { ...n,
        fit: "cropbox"
    });
    let h = Zt(Xt(n)),
        c = "" === h ? "" : s.includes("?") ? "&" : "?";
    return `${s}${c}${h}`
};

function Xt(t) {
    return Object.entries(t).reduce((t, [r, e]) => t + Gt(r, e), "")
}

function Zt(t) {
    return t && "" !== t ? `imgeng=${t}` : ""
}

function Gt(t, r) {
    let e = R[t];
    return e && (r || 0 === r) ? `/${e}_${r}` : ""
}

function Jt(t) {
    let r = {};
    return t.forEach(t => {
        let e = t.split("_");
        if (e.length > 1) {
            let t = e[0],
                a = e[1],
                i = Bt(t);
            i && (r[i] = a)
        }
    }), r
}
const Qt = ({
        url: t,
        width: r,
        height: e,
        format: a
    }) => {
        const i = m(t);
        return u(i, "width", r, !0, !0), u(i, "height", e, !0, !0), u(i, "format", a), i.searchParams.has("format") || g(i, "auto", "webp"), r && e && g(i, "fit", "crop"), i
    },
    Yt = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g,
    tr = /https?:\/\/(?<host>imagedelivery.net)\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g,
    rr = t => Object.fromEntries(t ? .split(",") ? .map(t => t.split("=")) ? ? []),
    er = ({
        host: t,
        accountHash: r,
        transformations: e = {},
        imageId: a
    }) => `https://${[..."imagedelivery.net"===t?[t]:[t,"cdn-cgi","imagedelivery"],r,a,Object.entries(e).filter(([t,r])=>!!t&&void 0!==r).map(([t,r])=>`${t}=${r}`).join(",")].join("/")}`,
    Z = t => {
        const r = m(t),
            e = [...r.toString().matchAll(Yt), ...r.toString().matchAll(tr)];
        if (!e.length) throw new Error("Invalid Cloudflare Images URL");
        const a = e[0].groups || {},
            {
                transformations: i,
                ...s
            } = a,
            {
                w: n,
                h: o,
                f: h,
                ...c
            } = rr(i);
        return {
            base: r.toString(),
            width: Number(n) || void 0,
            height: Number(o) || void 0,
            format: h,
            cdn: "cloudflare_images",
            params: { ...s,
                transformations: c
            }
        }
    },
    nr = ({
        base: t,
        width: r,
        height: e,
        format: a,
        params: i
    }) => {
        const s = {
            transformations: {},
            ...Z(t.toString()).params,
            ...i
        };
        return r && (s.transformations.w = r ? .toString()), e && (s.transformations.h = e ? .toString()), a && (s.transformations.f = a), s.transformations.fit || = "cover", new URL(er(s))
    },
    sr = ({
        url: t,
        width: r,
        height: e,
        format: a = "auto"
    }) => {
        const i = Z(t);
        if (!i) throw new Error("Invalid Cloudflare Images URL");
        const s = { ...i,
            width: r,
            height: e,
            format: a
        };
        return nr(s)
    },
    ar = t => {
        const r = m(t),
            [e, ...a] = r.pathname.split("/").slice(1),
            i = Object.fromEntries(e.split(",").map(t => {
                const [r, e] = t.split("_");
                return [r, e]
            }));
        if (i.s) {
            const [t, r] = i.s.split("x");
            i.w || = t, i.h || = r
        }
        return {
            base: a.join("/"),
            width: Number(i.w) || void 0,
            height: Number(i.h) || void 0,
            quality: Number(i.q) || void 0,
            format: i.f || "auto",
            params: i,
            cdn: "ipx"
        }
    },
    W = ({
        base: t,
        width: r,
        height: e,
        format: a,
        params: i
    }) => {
        const s = i ? .modifiers ? ? {};
        r && e ? s.s = `${r}x${e}` : r ? s.w = `${r}` : e && (s.h = `${e}`), a && (s.f = a);
        const n = i ? .base.endsWith("/") ? i ? .base : `${i?.base}/`,
            o = Object.entries(s).map(([t, r]) => `${t}_${r}`).join(","),
            h = t.toString();
        return `${n}${o}/${h.startsWith("/")?h.slice(1):h}`
    },
    or = t => {
        const r = String(t.url),
            e = m(r),
            a = e.pathname.startsWith("/_ipx") && "n" !== e.hostname ? `${e.origin}/_ipx` : "/_ipx",
            i = t.cdnOptions ? .ipx ? .base ? ? a;
        if (i && "/" !== i && r.startsWith(i)) {
            const e = ar(r.replace(i, ""));
            return W({ ...e,
                ...t,
                params: { ...t.cdnOptions ? .ipx,
                    base : i
                }
            })
        }
        return W({ ...t,
            base: r,
            params: { ...t.cdnOptions ? .ipx,
                base : i
            }
        })
    },
    ir = ({
        url: t,
        width: r,
        height: e,
        format: a,
        cdnOptions: i
    }) => {
        const s = m(t),
            n = I(new URL(s.pathname, s.origin)),
            o = {
                searchParams: new URLSearchParams
            };
        return u(o, "href", n, !0, !0), u(o, "w", r, !0, !0), u(o, "h", e, !0, !0), u(o, "f", a), g(o, "fit", "cover"), `${i?.astro?.endpoint??"/_image"}?${o.searchParams.toString()}`
    },
    cr = new Set(["w", "h", "q", "fm", "url", "width", "height", "quality"]),
    ur = t => {
        const r = m(t),
            e = Number(r.searchParams.get("w") ? ? r.searchParams.get("width")) ? ? void 0,
            a = Number(r.searchParams.get("h") ? ? r.searchParams.get("height")) ? ? void 0,
            i = Number(r.searchParams.get("q") ? ? r.searchParams.get("quality")) || void 0,
            s = r.searchParams.get("fm") || void 0,
            n = r.searchParams.get("url") || "",
            o = {
                quality: i
            };
        return r.searchParams.forEach((t, r) => {
            cr.has(r) || (o[r] = t)
        }), r.search = "", {
            base: n,
            width: e,
            height: a,
            format: s,
            params: o,
            cdn: "netlify"
        }
    },
    q = ({
        base: t,
        width: r,
        height: e,
        format: a,
        params: {
            site: i,
            quality: s,
            ...n
        } = {}
    }) => {
        const o = m("/.netlify/images", i);
        return Object.entries(n).forEach(([t, r]) => u(o, t, r)), u(o, "q", s, !0, !0), u(o, "w", r, !0, !0), u(o, "h", e, !0, !0), u(o, "fm", a), g(o, "fit", "cover"), o.searchParams.set("url", t.toString()), I(o)
    },
    fr = t => {
        const r = m(t.url);
        if (r.pathname.startsWith("/.netlify/images")) {
            const {
                params: e,
                base: a,
                format: i
            } = ur(r);
            return q({
                base: a,
                format: i,
                ...t,
                params: { ...e,
                    site: "n" === r.hostname ? void 0 : r.origin
                }
            })
        }
        return q({ ...t,
            base: t.url,
            params: {
                site: t.cdnOptions ? .netlify ? .site
            }
        })
    },
    mr = t => (t.searchParams.get("tr") || "").split(",").reduce((t, r) => {
        const [e, a] = r.split("-");
        return t[e] = a, t
    }, {}),
    lr = ({
        url: t,
        width: r,
        height: e,
        format: a
    }) => {
        const i = m(t),
            s = mr(i);
        s.w = r && Math.round(r), s.h = e && Math.round(e), s.f || (s.f = "auto"), a && (s.f = a);
        const n = Object.keys(s).map(t => {
            const r = s[t];
            if (r) return `${t}-${r}`
        }).filter(t => t).join(",");
        return i.searchParams.set("tr", n), i
    },
    dr = /^https?:\/\/(?<host>[^\/]+)\/(?<uuid>[^\/]+)/g;

function G(t) {
    const r = new URL(t),
        e = r.pathname + r.search + r.hash,
        a = e.lastIndexOf("http"),
        i = e.lastIndexOf("/");
    let s = "";
    return a >= 0 ? s = e.slice(a) : i >= 0 && (s = e.slice(i + 1)), s
}

function pr(t) {
    return t.startsWith("http")
}

function gr(t) {
    const r = new URL(t);
    return {
        pathname: r.origin + r.pathname || "",
        search: r.search || "",
        hash: r.hash || ""
    }
}

function hr(t) {
    const r = new URL(t),
        e = G(t),
        a = pr(e) ? gr(e).pathname : e;
    return r.pathname = r.pathname.replace(a, ""), r.search = "", r.hash = "", r.toString()
}
const br = t => {
    if ("string" != typeof t || !t) return "";
    let r = t.trim();
    return r.startsWith("-/") ? r = r.slice(2) : r.startsWith("/") && (r = r.slice(1)), r.endsWith("/") && (r = r.slice(0, r.length - 1)), r
};

function $r(t) {
    const r = hr(t),
        e = new URL(r),
        a = e.pathname.indexOf("/-/");
    return -1 === a ? [] : e.pathname.substring(a).split("/-/").filter(Boolean).map(t => br(t))
}
const yr = t => t.length ? t.reduce((t, r) => {
        const [e, a] = r.split("/");
        return { ...t,
            [e]: a
        }
    }, {}) : {},
    J = ({
        host: t,
        uuid: r,
        operations: e = {},
        filename: a
    }) => {
        const i = Object.entries(e).map(([t, r]) => `${t}/${r}`).join("/-/");
        return `https://${[t,r,i?`-/${i}`:"",a].join("/")}`
    },
    Q = t => {
        const r = m(t),
            e = [...r.toString().matchAll(dr)];
        if (!e.length) throw new Error("Invalid Uploadcare URL");
        const a = e[0].groups || {},
            { ...i
            } = a,
            s = G(r.toString()),
            {
                format: n,
                ...o
            } = yr($r(r.toString())),
            h = n && "auto" !== n ? n : "auto";
        return {
            base: J({ ...i,
                filename: s || void 0,
                operations: { ...o,
                    format: h
                }
            }),
            cdn: "uploadcare",
            params: { ...a,
                filename: s || void 0,
                operations: { ...o,
                    format: h
                }
            }
        }
    },
    xr = ({
        base: t,
        width: r,
        height: e,
        params: a
    }) => {
        const i = t.toString(),
            s = {
                operations: {},
                ...Q(i.endsWith("/") ? i : `${i}/`).params,
                ...a
            };
        return r && e ? s.operations = { ...s.operations,
            resize: `${r}x${e}`
        } : (r && (s.operations = { ...s.operations,
            resize: `${r}x`
        }), e && (s.operations = { ...s.operations,
            resize: `x${e}`
        })), J(s)
    },
    wr = ({
        url: t,
        width: r,
        height: e
    }) => {
        const a = Q(t);
        if (!a) throw new Error("Invalid Uploadcare URL");
        const i = { ...a,
            width: r,
            height: e
        };
        return xr(i)
    },
    Sr = ["origin"],
    Y = "/storage/v1/object/public/",
    O = "/storage/v1/render/image/public/",
    vr = t => t.pathname.startsWith(O),
    tt = t => {
        const r = m(t);
        if (!vr(r)) return {
            cdn: "supabase",
            base: r.origin + r.pathname
        };
        const e = r.pathname.replace(O, ""),
            a = r.searchParams.has("quality") ? Number(r.searchParams.get("quality")) : void 0,
            i = r.searchParams.has("width") ? Number(r.searchParams.get("width")) : void 0,
            s = r.searchParams.has("height") ? Number(r.searchParams.get("height")) : void 0,
            n = r.searchParams.has("format") ? r.searchParams.get("format") : void 0,
            o = r.searchParams.has("resize") ? r.searchParams.get("resize") : void 0;
        return {
            cdn: "supabase",
            base: r.origin + Y + e,
            width: i,
            height: s,
            format: n,
            params: {
                quality: a,
                resize: o
            }
        }
    },
    Pr = ({
        base: t,
        width: r,
        height: e,
        format: a,
        params: i
    }) => {
        const s = tt(t.toString());
        t = s.base, r = r || s.width, e = e || s.height, a = a || s.format, i = { ...s.params,
            ...i
        };
        const n = new URLSearchParams;
        return r && n.set("width", x(r).toString()), e && n.set("height", x(e).toString()), a && Sr.includes(a) && n.set("format", a), i ? .quality && n.set("quality", x(i.quality).toString()), i ? .resize && n.set("resize", i.resize), "" === n.toString() ? t : s.base.replace(Y, O) + "?" + n.toString()
    },
    _r = ({
        url: t,
        width: r,
        height: e,
        format: a,
        cdnOptions: i
    }) => {
        const s = tt(t);
        return Pr({
            base: s.base,
            width: r || s.width,
            height: e || s.height,
            format: a || s.format,
            params: i ? .supabase || s.params
        })
    },
    jr = /https:\/\/(?<region>[a-z0-9-]+)\.graphassets\.com\/(?<envId>[a-z0-9]+)(?:\/(?<transformations>.*?))?\/(?<handle>[a-z0-9]+)$/,
    rt = t => {
        const r = t.toString(),
            e = r.match(jr);
        if (!e ? .length) throw new Error("Invalid Hygraph URL");
        const a = e.groups || {},
            {
                transformations: i,
                ...s
            } = a,
            n = Ir(i || "");
        return {
            base: r,
            width: Number(n.resize ? .width) || void 0,
            height: Number(n.resize ? .height) || void 0,
            format: n.auto_image ? "auto" : n.output ? .format ? .toString() || void 0,
            params: {
                transformations: n,
                ...s
            },
            cdn: "hygraph"
        }
    },
    Ur = ({
        base: t,
        width: r,
        height: e,
        format: a,
        params: i
    }) => {
        const s = {
            transformations: {},
            ...rt(t.toString()).params,
            ...i
        };
        (r || e) && (s.transformations.resize || = {}), r && e && (s.transformations.resize.fit || = "crop"), r && (s.transformations.resize.width = r), e && (s.transformations.resize.height = e), "auto" === a ? s.transformations.auto_image = {} : a && (s.transformations.output || = {}, s.transformations.output.format = a);
        const n = new URL(t);
        return n.pathname = `/${s.envId}/${Or(s.transformations)}/${s.handle}`, n.toString()
    },
    Rr = ({
        url: t,
        width: r,
        height: e,
        format: a = "auto"
    }) => {
        const i = rt(t);
        if (!i) throw new Error("Invalid Hygraph URL");
        const s = { ...i,
            width: r,
            height: e,
            format: a
        };
        return Ur(s)
    },
    Ir = t => t ? t.split("/").reduce((t, r) => {
        const [e, a] = r.split("=");
        return t[e] = a ? a.split(",").reduce((t, r) => {
            const [e, a] = r.split(":");
            return t[e] = isNaN(Number(a)) ? a : Number(a), t
        }, {}) : {}, t
    }, {}) : {},
    Or = t => Object.entries(t).filter(([t, r]) => !!t && void 0 !== r).map(([t, r]) => 0 === Object.keys(r).length ? t : `${t}=${Object.entries(r).map(([t,r])=>`${t}:${r}`).join(",")}`).join("/"),
    T = {
        vercel: L,
        nextjs: L
    };

function Er(t, r) {
    if (!(r in T)) return !1;
    const e = T[r];
    return !!e && e(t)
}

function _(t, r) {
    const e = mt(t) || r;
    if (!e) return !1;
    return Er(t, e) || {
        cdn: e,
        url: t
    }
}
const j = t => ({
    imgix: gt,
    contentful: dt,
    "builder.io": pt,
    shopify: yt,
    wordpress: xt,
    cloudimage: wt,
    cloudinary: _t,
    bunny: Ot,
    storyblok: qt,
    cloudflare: It,
    vercel: X,
    nextjs: At,
    scene7: Ct,
    "kontent.ai": Tt,
    keycdn: Mt,
    directus: Dt,
    imageengine: Vt,
    contentstack: Qt,
    cloudflare_images: sr,
    ipx: or,
    astro: ir,
    netlify: fr,
    imagekit: lr,
    uploadcare: wr,
    supabase: _r,
    hygraph: Rr
}[t]);
var et = (t, r) => {
        if (t && r) switch (r) {
            case "constrained":
                return `(min-width: ${t}px) ${t}px, 100vw`;
            case "fixed":
                return `${t}px`;
            case "fullWidth":
                return "100vw";
            default:
                return
        }
    },
    S = t => t || 0 === t ? `${t}px` : void 0,
    Nr = ({
        width: t,
        height: r,
        aspectRatio: e,
        layout: a,
        objectFit: i = "cover",
        background: s
    }) => {
        const n = [
            ["object-fit", i]
        ];
        return s ? .startsWith("https:") || s ? .startsWith("http:") || s ? .startsWith("data:") || s ? .startsWith("/") ? (n.push(["background-image", `url(${s})`]), n.push(["background-size", "cover"]), n.push(["background-repeat", "no-repeat"])) : n.push(["background", s]), "fixed" === a && (n.push(["width", S(t)]), n.push(["height", S(r)])), "constrained" === a && (n.push(["max-width", S(t)]), n.push(["max-height", S(r)]), n.push(["aspect-ratio", e ? `${e}` : void 0]), n.push(["width", "100%"])), "fullWidth" === a && (n.push(["width", "100%"]), n.push(["aspect-ratio", e ? `${e}` : void 0]), n.push(["height", S(r)])), Object.fromEntries(n.filter(([, t]) => t))
    },
    zr = [6016, 5120, 4480, 3840, 3200, 2560, 2048, 1920, 1668, 1280, 1080, 960, 828, 750, 640],
    F = 24,
    kr = ({
        width: t,
        layout: r,
        resolutions: e = zr
    }) => {
        if ("fullWidth" === r) return e;
        if (!t) return [];
        const a = 2 * t;
        return "fixed" === r ? [t, a] : "constrained" === r ? [t, a, ...e.filter(t => t < a)] : []
    },
    Lr = ({
        src: t,
        width: r,
        layout: e = "constrained",
        height: a,
        aspectRatio: i,
        breakpoints: s,
        cdn: n,
        transformer: o,
        format: h,
        cdnOptions: c
    }) => {
        const m = _(t, n);
        return m && !o && (o = j(m.cdn)), o ? (s || = kr({
            width: r,
            layout: e
        }), s.sort((t, r) => t - r).map(r => {
            let e;
            return a && i && (e = Math.round(r / i)), {
                url: m ? m.url : t,
                width: r,
                height: e,
                format: h,
                cdnOptions: c
            }
        })) : []
    },
    nt = t => {
        let {
            src: r,
            cdn: e,
            transformer: a
        } = t;
        const i = _(r, e);
        return i && !a && (a = j(i.cdn)), a ? Lr({ ...t,
            transformer: a
        }).map(t => `${a(t)?.toString()} ${t.width}w`).join(",\n") : ""
    };

function st({
    width: t,
    height: r,
    priority: e,
    layout: a = "constrained",
    aspectRatio: i,
    ...s
}) {
    return t = t && Number(t) || void 0, r = r && Number(r) || void 0, e ? (s.loading || = "eager", s.fetchpriority || = "high") : (s.loading || = "lazy", s.decoding || = "async"), "" === s.alt && (s.role || = "presentation"), i ? t ? r || (r = Math.round(t / i)) : r && (t = Math.round(r * i)) : t && r && (i = t / r), {
        width: t,
        height: r,
        aspectRatio: i,
        layout: a,
        ...s
    }
}

function Wr(t) {
    let {
        src: r,
        cdn: e,
        transformer: a,
        background: i,
        layout: s,
        objectFit: n,
        breakpoints: o,
        width: h,
        height: c,
        aspectRatio: m,
        unstyled: u,
        cdnOptions: d,
        ...l
    } = st(t);
    const f = r ? _(r, e) : void 0;
    let p = r;
    if (f && (p = f.url, a || = j(f.cdn)), a && "auto" === i) {
        const t = m ? Math.round(F / m) : void 0,
            r = a({
                url: p,
                width: F,
                height: t,
                cdnOptions: d
            });
        r && (i = r.toString())
    }
    const g = {
        width: h,
        height: c,
        aspectRatio: m,
        layout: s,
        objectFit: n,
        background: i
    };
    if (l.sizes || = et(h, s), u || (l.style = { ...Nr(g),
            ...l.style
        }), a) {
        l.srcset = nt({
            src: p,
            width: h,
            height: c,
            aspectRatio: m,
            layout: s,
            breakpoints: o,
            transformer: a,
            cdn: e,
            cdnOptions: d
        });
        const t = a({
            url: p,
            width: h,
            height: c,
            cdnOptions: d
        });
        t && (p = t), ("fullWidth" === s || "constrained" === s) && (h = void 0, c = void 0)
    }
    return { ...l,
        src: p ? .toString(),
        width: h,
        height: c
    }
}

function qr(t) {
    return t ? t.startsWith("image/") ? {
        format: t.slice(6),
        mimeType: t
    } : {
        format: t,
        mimeType: `image/${"jpg"===t?"jpeg":t}`
    } : {}
}

function Tr({
    media: t,
    type: r,
    ...e
}) {
    let {
        src: a,
        cdn: i,
        transformer: s,
        layout: n,
        breakpoints: o,
        width: h,
        height: c,
        aspectRatio: m,
        sizes: u,
        loading: d,
        decoding: l,
        cdnOptions: f,
        ...p
    } = st(e);
    const g = a ? _(a, i) : void 0;
    let w = a;
    if (g && (w = g.url, s || = j(g.cdn)), !s) return {};
    const {
        format: b,
        mimeType: y
    } = qr(r);
    u || = et(h, n);
    const v = nt({
            src: w,
            width: h,
            height: c,
            aspectRatio: m,
            layout: n,
            breakpoints: o,
            transformer: s,
            cdn: i,
            format: b,
            cdnOptions: f
        }),
        x = s({
            url: w,
            width: h,
            height: c,
            cdnOptions: f
        });
    x && (w = x);
    const $ = { ...p,
        sizes: u,
        srcset: v
    };
    return t && ($.media = t), y && ($.type = y), $
}
var Fr = new Set(["style"]),
    Ar = "use" in ot,
    Cr = {
        srcset: "srcSet",
        fetchpriority: Ar ? "fetchPriority" : "fetchpriority"
    },
    Mr = t => t.startsWith("data-") || t.startsWith("aria-") ? t : Cr[t] || t.replace(/-./g, t => t[1].toUpperCase());

function E(t) {
    return Object.fromEntries(Object.entries(t).map(([t, r]) => [Mr(t), Fr.has(t) && r && "string" != typeof r ? E(r) : r]))
}
var Hr = A.forwardRef(function(t, r) {
    const e = E(Wr(t));
    return C.jsx("img", { ...e,
        ref: r
    })
});
A.forwardRef(function(t, r) {
    const e = E(Tr(t));
    return C.jsx("source", { ...e,
        ref: r
    })
});
export {
    Hr as I
};