const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["_astro/ClickIllustration.DUuvfeOs.js", "_astro/jsx-runtime.u17CrQMm.js", "_astro/index.CtKCFvq0.js", "_astro/react.BJ61_sDN.js", "_astro/use-transform.DAUCFMwx.js", "_astro/ClockIllustration.DhQAZKXE.js", "_astro/BrushIllustration.CgsUHZDg.js", "_astro/SearchingAstronautIllustration.DdOyqDF-.js", "_astro/HandsTouchingIllustration.Cw0sYfMe.js", "_astro/HandsUpIllustration.Dyv7valG.js"]))) => i.map(i => d[i]);
import {
    j as U
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as S,
    R as N,
    g as Hr,
    b as Nt
} from "./index.CtKCFvq0.js";
import {
    r as In
} from "./index.yFPT4ZM_.js";
import {
    M as Cn,
    f as jn,
    O as zn,
    m as yt
} from "./react.BJ61_sDN.js";
import {
    _ as qe
} from "./preload-helper.CVfkMyKi.js";
import {
    u as Xr,
    a as Mn,
    b as rr
} from "./use-transform.DAUCFMwx.js";
import {
    u as Pn,
    a as Wn
} from "./use-in-view._CitLEGI.js";

function $n(e) {
    const t = S.useRef(0),
        {
            isStatic: r
        } = S.useContext(Cn);
    S.useEffect(() => {
        if (r) return;
        const n = ({
            timestamp: o,
            delta: i
        }) => {
            t.current || (t.current = o), e(o - t.current, i)
        };
        return jn.update(n, !0), () => zn(n)
    }, [e])
}

function Un() {
    const e = Xr(0);
    return $n(t => e.set(t)), e
}

function Yr(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (r = Yr(e[t])) && (n && (n += " "), n += r);
        else
            for (t in e) e[t] && (n && (n += " "), n += t);
    return n
}

function Fn() {
    for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = Yr(e)) && (n && (n += " "), n += t);
    return n
}
const nr = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e,
    Ft = Fn,
    rt = (e, t) => r => {
        var n;
        if (t ? .variants == null) return Ft(e, r ? .class, r ? .className);
        const {
            variants: o,
            defaultVariants: i
        } = t, l = Object.keys(o).map(u => {
            const f = r ? .[u],
                d = i ? .[u];
            if (f === null) return null;
            const c = nr(f) || nr(d);
            return o[u][c]
        }), m = r && Object.entries(r).reduce((u, f) => {
            let [d, c] = f;
            return c === void 0 || (u[d] = c), u
        }, {}), h = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, f) => {
            let {
                class: d,
                className: c,
                ...g
            } = f;
            return Object.entries(g).every(b => {
                let [x, w] = b;
                return Array.isArray(w) ? w.includes({ ...i,
                    ...m
                }[x]) : { ...i,
                    ...m
                }[x] === w
            }) ? [...u, d, c] : u
        }, []);
        return Ft(e, l, h, r ? .class, r ? .className)
    },
    Gn = (e, t) => {
        const r = new Array(e.length + t.length);
        for (let n = 0; n < e.length; n++) r[n] = e[n];
        for (let n = 0; n < t.length; n++) r[e.length + n] = t[n];
        return r
    },
    Vn = (e, t) => ({
        classGroupId: e,
        validator: t
    }),
    Zr = (e = new Map, t = null, r) => ({
        nextPart: e,
        validators: t,
        classGroupId: r
    }),
    wt = "-",
    or = [],
    qn = "arbitrary..",
    Bn = e => {
        const t = Xn(e),
            {
                conflictingClassGroups: r,
                conflictingClassGroupModifiers: n
            } = e;
        return {
            getClassGroupId: l => {
                if (l.startsWith("[") && l.endsWith("]")) return Hn(l);
                const m = l.split(wt),
                    h = m[0] === "" && m.length > 1 ? 1 : 0;
                return Qr(m, h, t)
            },
            getConflictingClassGroupIds: (l, m) => {
                if (m) {
                    const h = n[l],
                        u = r[l];
                    return h ? u ? Gn(u, h) : h : u || or
                }
                return r[l] || or
            }
        }
    },
    Qr = (e, t, r) => {
        if (e.length - t === 0) return r.classGroupId;
        const o = e[t],
            i = r.nextPart.get(o);
        if (i) {
            const u = Qr(e, t + 1, i);
            if (u) return u
        }
        const l = r.validators;
        if (l === null) return;
        const m = t === 0 ? e.join(wt) : e.slice(t).join(wt),
            h = l.length;
        for (let u = 0; u < h; u++) {
            const f = l[u];
            if (f.validator(m)) return f.classGroupId
        }
    },
    Hn = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const t = e.slice(1, -1),
            r = t.indexOf(":"),
            n = t.slice(0, r);
        return n ? qn + n : void 0
    })(),
    Xn = e => {
        const {
            theme: t,
            classGroups: r
        } = e;
        return Yn(r, t)
    },
    Yn = (e, t) => {
        const r = Zr();
        for (const n in e) {
            const o = e[n];
            Yt(o, r, n, t)
        }
        return r
    },
    Yt = (e, t, r, n) => {
        const o = e.length;
        for (let i = 0; i < o; i++) {
            const l = e[i];
            Zn(l, t, r, n)
        }
    },
    Zn = (e, t, r, n) => {
        if (typeof e == "string") {
            Qn(e, t, r);
            return
        }
        if (typeof e == "function") {
            Kn(e, t, r, n);
            return
        }
        Jn(e, t, r, n)
    },
    Qn = (e, t, r) => {
        const n = e === "" ? t : Kr(t, e);
        n.classGroupId = r
    },
    Kn = (e, t, r, n) => {
        if (eo(e)) {
            Yt(e(n), t, r, n);
            return
        }
        t.validators === null && (t.validators = []), t.validators.push(Vn(r, e))
    },
    Jn = (e, t, r, n) => {
        const o = Object.entries(e),
            i = o.length;
        for (let l = 0; l < i; l++) {
            const [m, h] = o[l];
            Yt(h, Kr(t, m), r, n)
        }
    },
    Kr = (e, t) => {
        let r = e;
        const n = t.split(wt),
            o = n.length;
        for (let i = 0; i < o; i++) {
            const l = n[i];
            let m = r.nextPart.get(l);
            m || (m = Zr(), r.nextPart.set(l, m)), r = m
        }
        return r
    },
    eo = e => "isThemeGetter" in e && e.isThemeGetter === !0,
    to = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            r = Object.create(null),
            n = Object.create(null);
        const o = (i, l) => {
            r[i] = l, t++, t > e && (t = 0, n = r, r = Object.create(null))
        };
        return {
            get(i) {
                let l = r[i];
                if (l !== void 0) return l;
                if ((l = n[i]) !== void 0) return o(i, l), l
            },
            set(i, l) {
                i in r ? r[i] = l : o(i, l)
            }
        }
    },
    Gt = "!",
    ir = ":",
    ro = [],
    ar = (e, t, r, n, o) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: r,
        maybePostfixModifierPosition: n,
        isExternal: o
    }),
    no = e => {
        const {
            prefix: t,
            experimentalParseClassName: r
        } = e;
        let n = o => {
            const i = [];
            let l = 0,
                m = 0,
                h = 0,
                u;
            const f = o.length;
            for (let x = 0; x < f; x++) {
                const w = o[x];
                if (l === 0 && m === 0) {
                    if (w === ir) {
                        i.push(o.slice(h, x)), h = x + 1;
                        continue
                    }
                    if (w === "/") {
                        u = x;
                        continue
                    }
                }
                w === "[" ? l++ : w === "]" ? l-- : w === "(" ? m++ : w === ")" && m--
            }
            const d = i.length === 0 ? o : o.slice(h);
            let c = d,
                g = !1;
            d.endsWith(Gt) ? (c = d.slice(0, -1), g = !0) : d.startsWith(Gt) && (c = d.slice(1), g = !0);
            const b = u && u > h ? u - h : void 0;
            return ar(i, g, c, b)
        };
        if (t) {
            const o = t + ir,
                i = n;
            n = l => l.startsWith(o) ? i(l.slice(o.length)) : ar(ro, !1, l, void 0, !0)
        }
        if (r) {
            const o = n;
            n = i => r({
                className: i,
                parseClassName: o
            })
        }
        return n
    },
    oo = e => {
        const t = new Map;
        return e.orderSensitiveModifiers.forEach((r, n) => {
            t.set(r, 1e6 + n)
        }), r => {
            const n = [];
            let o = [];
            for (let i = 0; i < r.length; i++) {
                const l = r[i],
                    m = l[0] === "[",
                    h = t.has(l);
                m || h ? (o.length > 0 && (o.sort(), n.push(...o), o = []), n.push(l)) : o.push(l)
            }
            return o.length > 0 && (o.sort(), n.push(...o)), n
        }
    },
    io = e => ({
        cache: to(e.cacheSize),
        parseClassName: no(e),
        sortModifiers: oo(e),
        ...Bn(e)
    }),
    ao = /\s+/,
    so = (e, t) => {
        const {
            parseClassName: r,
            getClassGroupId: n,
            getConflictingClassGroupIds: o,
            sortModifiers: i
        } = t, l = [], m = e.trim().split(ao);
        let h = "";
        for (let u = m.length - 1; u >= 0; u -= 1) {
            const f = m[u],
                {
                    isExternal: d,
                    modifiers: c,
                    hasImportantModifier: g,
                    baseClassName: b,
                    maybePostfixModifierPosition: x
                } = r(f);
            if (d) {
                h = f + (h.length > 0 ? " " + h : h);
                continue
            }
            let w = !!x,
                k = n(w ? b.substring(0, x) : b);
            if (!k) {
                if (!w) {
                    h = f + (h.length > 0 ? " " + h : h);
                    continue
                }
                if (k = n(b), !k) {
                    h = f + (h.length > 0 ? " " + h : h);
                    continue
                }
                w = !1
            }
            const A = c.length === 0 ? "" : c.length === 1 ? c[0] : i(c).join(":"),
                _ = g ? A + Gt : A,
                C = _ + k;
            if (l.indexOf(C) > -1) continue;
            l.push(C);
            const $ = o(k, w);
            for (let V = 0; V < $.length; ++V) {
                const B = $[V];
                l.push(_ + B)
            }
            h = f + (h.length > 0 ? " " + h : h)
        }
        return h
    },
    lo = (...e) => {
        let t = 0,
            r, n, o = "";
        for (; t < e.length;)(r = e[t++]) && (n = Jr(r)) && (o && (o += " "), o += n);
        return o
    },
    Jr = e => {
        if (typeof e == "string") return e;
        let t, r = "";
        for (let n = 0; n < e.length; n++) e[n] && (t = Jr(e[n])) && (r && (r += " "), r += t);
        return r
    },
    sr = (e, ...t) => {
        let r, n, o, i;
        const l = h => {
                const u = t.reduce((f, d) => d(f), e());
                return r = io(u), n = r.cache.get, o = r.cache.set, i = m, m(h)
            },
            m = h => {
                const u = n(h);
                if (u) return u;
                const f = so(h, r);
                return o(h, f), f
            };
        return i = l, (...h) => i(lo(...h))
    },
    co = [],
    ae = e => {
        const t = r => r[e] || co;
        return t.isThemeGetter = !0, t
    },
    en = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    tn = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    uo = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    fo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    po = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    mo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    ho = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    go = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Oe = e => uo.test(e),
    q = e => !!e && !Number.isNaN(Number(e)),
    Le = e => !!e && Number.isInteger(Number(e)),
    Rt = e => e.endsWith("%") && q(e.slice(0, -1)),
    _e = e => fo.test(e),
    rn = () => !0,
    vo = e => po.test(e) && !mo.test(e),
    Zt = () => !1,
    bo = e => ho.test(e),
    yo = e => go.test(e),
    xo = e => !L(e) && !D(e),
    wo = e => Ie(e, an, Zt),
    L = e => en.test(e),
    je = e => Ie(e, sn, vo),
    lr = e => Ie(e, Oo, q),
    ko = e => Ie(e, cn, rn),
    Eo = e => Ie(e, ln, Zt),
    cr = e => Ie(e, nn, Zt),
    No = e => Ie(e, on, yo),
    st = e => Ie(e, un, bo),
    D = e => tn.test(e),
    Ye = e => Me(e, sn),
    _o = e => Me(e, ln),
    ur = e => Me(e, nn),
    So = e => Me(e, an),
    To = e => Me(e, on),
    lt = e => Me(e, un, !0),
    Ao = e => Me(e, cn, !0),
    Ie = (e, t, r) => {
        const n = en.exec(e);
        return n ? n[1] ? t(n[1]) : r(n[2]) : !1
    },
    Me = (e, t, r = !1) => {
        const n = tn.exec(e);
        return n ? n[1] ? t(n[1]) : r : !1
    },
    nn = e => e === "position" || e === "percentage",
    on = e => e === "image" || e === "url",
    an = e => e === "length" || e === "size" || e === "bg-size",
    sn = e => e === "length",
    Oo = e => e === "number",
    ln = e => e === "family-name",
    cn = e => e === "number" || e === "weight",
    un = e => e === "shadow",
    dr = () => {
        const e = ae("color"),
            t = ae("font"),
            r = ae("text"),
            n = ae("font-weight"),
            o = ae("tracking"),
            i = ae("leading"),
            l = ae("breakpoint"),
            m = ae("container"),
            h = ae("spacing"),
            u = ae("radius"),
            f = ae("shadow"),
            d = ae("inset-shadow"),
            c = ae("text-shadow"),
            g = ae("drop-shadow"),
            b = ae("blur"),
            x = ae("perspective"),
            w = ae("aspect"),
            k = ae("ease"),
            A = ae("animate"),
            _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            C = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            $ = () => [...C(), D, L],
            V = () => ["auto", "hidden", "clip", "visible", "scroll"],
            B = () => ["auto", "contain", "none"],
            v = () => [D, L, h],
            E = () => [Oe, "full", "auto", ...v()],
            R = () => [Le, "none", "subgrid", D, L],
            P = () => ["auto", {
                span: ["full", Le, D, L]
            }, Le, D, L],
            j = () => [Le, "auto", D, L],
            F = () => ["auto", "min", "max", "fr", D, L],
            z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            I = () => ["auto", ...v()],
            W = () => [Oe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...v()],
            M = () => [Oe, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...v()],
            Q = () => [Oe, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...v()],
            T = () => [e, D, L],
            ie = () => [...C(), ur, cr, {
                position: [D, L]
            }],
            xe = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            re = () => ["auto", "cover", "contain", So, wo, {
                size: [D, L]
            }],
            H = () => [Rt, Ye, je],
            X = () => ["", "none", "full", u, D, L],
            Y = () => ["", q, Ye, je],
            J = () => ["solid", "dashed", "dotted", "double"],
            ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            Z = () => [q, Rt, ur, cr],
            ve = () => ["", "none", b, D, L],
            ge = () => ["none", q, D, L],
            ye = () => ["none", q, D, L],
            ee = () => [q, D, L],
            ue = () => [Oe, "full", ...v()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [_e],
                breakpoint: [_e],
                color: [rn],
                container: [_e],
                "drop-shadow": [_e],
                ease: ["in", "out", "in-out"],
                font: [xo],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [_e],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [_e],
                shadow: [_e],
                spacing: ["px", q],
                text: [_e],
                "text-shadow": [_e],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", Oe, L, D, w]
                }],
                container: ["container"],
                columns: [{
                    columns: [q, L, D, m]
                }],
                "break-after": [{
                    "break-after": _()
                }],
                "break-before": [{
                    "break-before": _()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: $()
                }],
                overflow: [{
                    overflow: V()
                }],
                "overflow-x": [{
                    "overflow-x": V()
                }],
                "overflow-y": [{
                    "overflow-y": V()
                }],
                overscroll: [{
                    overscroll: B()
                }],
                "overscroll-x": [{
                    "overscroll-x": B()
                }],
                "overscroll-y": [{
                    "overscroll-y": B()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: E()
                }],
                "inset-x": [{
                    "inset-x": E()
                }],
                "inset-y": [{
                    "inset-y": E()
                }],
                start: [{
                    "inset-s": E(),
                    start: E()
                }],
                end: [{
                    "inset-e": E(),
                    end: E()
                }],
                "inset-bs": [{
                    "inset-bs": E()
                }],
                "inset-be": [{
                    "inset-be": E()
                }],
                top: [{
                    top: E()
                }],
                right: [{
                    right: E()
                }],
                bottom: [{
                    bottom: E()
                }],
                left: [{
                    left: E()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [Le, "auto", D, L]
                }],
                basis: [{
                    basis: [Oe, "full", "auto", m, ...v()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [q, Oe, "auto", "initial", "none", L]
                }],
                grow: [{
                    grow: ["", q, D, L]
                }],
                shrink: [{
                    shrink: ["", q, D, L]
                }],
                order: [{
                    order: [Le, "first", "last", "none", D, L]
                }],
                "grid-cols": [{
                    "grid-cols": R()
                }],
                "col-start-end": [{
                    col: P()
                }],
                "col-start": [{
                    "col-start": j()
                }],
                "col-end": [{
                    "col-end": j()
                }],
                "grid-rows": [{
                    "grid-rows": R()
                }],
                "row-start-end": [{
                    row: P()
                }],
                "row-start": [{
                    "row-start": j()
                }],
                "row-end": [{
                    "row-end": j()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": F()
                }],
                "auto-rows": [{
                    "auto-rows": F()
                }],
                gap: [{
                    gap: v()
                }],
                "gap-x": [{
                    "gap-x": v()
                }],
                "gap-y": [{
                    "gap-y": v()
                }],
                "justify-content": [{
                    justify: [...z(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...G(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...G()]
                }],
                "align-content": [{
                    content: ["normal", ...z()]
                }],
                "align-items": [{
                    items: [...G(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...G(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": z()
                }],
                "place-items": [{
                    "place-items": [...G(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...G()]
                }],
                p: [{
                    p: v()
                }],
                px: [{
                    px: v()
                }],
                py: [{
                    py: v()
                }],
                ps: [{
                    ps: v()
                }],
                pe: [{
                    pe: v()
                }],
                pbs: [{
                    pbs: v()
                }],
                pbe: [{
                    pbe: v()
                }],
                pt: [{
                    pt: v()
                }],
                pr: [{
                    pr: v()
                }],
                pb: [{
                    pb: v()
                }],
                pl: [{
                    pl: v()
                }],
                m: [{
                    m: I()
                }],
                mx: [{
                    mx: I()
                }],
                my: [{
                    my: I()
                }],
                ms: [{
                    ms: I()
                }],
                me: [{
                    me: I()
                }],
                mbs: [{
                    mbs: I()
                }],
                mbe: [{
                    mbe: I()
                }],
                mt: [{
                    mt: I()
                }],
                mr: [{
                    mr: I()
                }],
                mb: [{
                    mb: I()
                }],
                ml: [{
                    ml: I()
                }],
                "space-x": [{
                    "space-x": v()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": v()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: W()
                }],
                "inline-size": [{
                    inline: ["auto", ...M()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...M()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...M()]
                }],
                "block-size": [{
                    block: ["auto", ...Q()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...Q()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...Q()]
                }],
                w: [{
                    w: [m, "screen", ...W()]
                }],
                "min-w": [{
                    "min-w": [m, "screen", "none", ...W()]
                }],
                "max-w": [{
                    "max-w": [m, "screen", "none", "prose", {
                        screen: [l]
                    }, ...W()]
                }],
                h: [{
                    h: ["screen", "lh", ...W()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...W()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...W()]
                }],
                "font-size": [{
                    text: ["base", r, Ye, je]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [n, Ao, ko]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Rt, L]
                }],
                "font-family": [{
                    font: [_o, Eo, t]
                }],
                "font-features": [{
                    "font-features": [L]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [o, D, L]
                }],
                "line-clamp": [{
                    "line-clamp": [q, "none", D, lr]
                }],
                leading: [{
                    leading: [i, ...v()]
                }],
                "list-image": [{
                    "list-image": ["none", D, L]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", D, L]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: T()
                }],
                "text-color": [{
                    text: T()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...J(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [q, "from-font", "auto", D, je]
                }],
                "text-decoration-color": [{
                    decoration: T()
                }],
                "underline-offset": [{
                    "underline-offset": [q, "auto", D, L]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: v()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D, L]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", D, L]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: ie()
                }],
                "bg-repeat": [{
                    bg: xe()
                }],
                "bg-size": [{
                    bg: re()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, Le, D, L],
                        radial: ["", D, L],
                        conic: [Le, D, L]
                    }, To, No]
                }],
                "bg-color": [{
                    bg: T()
                }],
                "gradient-from-pos": [{
                    from: H()
                }],
                "gradient-via-pos": [{
                    via: H()
                }],
                "gradient-to-pos": [{
                    to: H()
                }],
                "gradient-from": [{
                    from: T()
                }],
                "gradient-via": [{
                    via: T()
                }],
                "gradient-to": [{
                    to: T()
                }],
                rounded: [{
                    rounded: X()
                }],
                "rounded-s": [{
                    "rounded-s": X()
                }],
                "rounded-e": [{
                    "rounded-e": X()
                }],
                "rounded-t": [{
                    "rounded-t": X()
                }],
                "rounded-r": [{
                    "rounded-r": X()
                }],
                "rounded-b": [{
                    "rounded-b": X()
                }],
                "rounded-l": [{
                    "rounded-l": X()
                }],
                "rounded-ss": [{
                    "rounded-ss": X()
                }],
                "rounded-se": [{
                    "rounded-se": X()
                }],
                "rounded-ee": [{
                    "rounded-ee": X()
                }],
                "rounded-es": [{
                    "rounded-es": X()
                }],
                "rounded-tl": [{
                    "rounded-tl": X()
                }],
                "rounded-tr": [{
                    "rounded-tr": X()
                }],
                "rounded-br": [{
                    "rounded-br": X()
                }],
                "rounded-bl": [{
                    "rounded-bl": X()
                }],
                "border-w": [{
                    border: Y()
                }],
                "border-w-x": [{
                    "border-x": Y()
                }],
                "border-w-y": [{
                    "border-y": Y()
                }],
                "border-w-s": [{
                    "border-s": Y()
                }],
                "border-w-e": [{
                    "border-e": Y()
                }],
                "border-w-bs": [{
                    "border-bs": Y()
                }],
                "border-w-be": [{
                    "border-be": Y()
                }],
                "border-w-t": [{
                    "border-t": Y()
                }],
                "border-w-r": [{
                    "border-r": Y()
                }],
                "border-w-b": [{
                    "border-b": Y()
                }],
                "border-w-l": [{
                    "border-l": Y()
                }],
                "divide-x": [{
                    "divide-x": Y()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": Y()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...J(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...J(), "hidden", "none"]
                }],
                "border-color": [{
                    border: T()
                }],
                "border-color-x": [{
                    "border-x": T()
                }],
                "border-color-y": [{
                    "border-y": T()
                }],
                "border-color-s": [{
                    "border-s": T()
                }],
                "border-color-e": [{
                    "border-e": T()
                }],
                "border-color-bs": [{
                    "border-bs": T()
                }],
                "border-color-be": [{
                    "border-be": T()
                }],
                "border-color-t": [{
                    "border-t": T()
                }],
                "border-color-r": [{
                    "border-r": T()
                }],
                "border-color-b": [{
                    "border-b": T()
                }],
                "border-color-l": [{
                    "border-l": T()
                }],
                "divide-color": [{
                    divide: T()
                }],
                "outline-style": [{
                    outline: [...J(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [q, D, L]
                }],
                "outline-w": [{
                    outline: ["", q, Ye, je]
                }],
                "outline-color": [{
                    outline: T()
                }],
                shadow: [{
                    shadow: ["", "none", f, lt, st]
                }],
                "shadow-color": [{
                    shadow: T()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", d, lt, st]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": T()
                }],
                "ring-w": [{
                    ring: Y()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: T()
                }],
                "ring-offset-w": [{
                    "ring-offset": [q, je]
                }],
                "ring-offset-color": [{
                    "ring-offset": T()
                }],
                "inset-ring-w": [{
                    "inset-ring": Y()
                }],
                "inset-ring-color": [{
                    "inset-ring": T()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", c, lt, st]
                }],
                "text-shadow-color": [{
                    "text-shadow": T()
                }],
                opacity: [{
                    opacity: [q, D, L]
                }],
                "mix-blend": [{
                    "mix-blend": [...ne(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": ne()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [q]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": Z()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": Z()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": T()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": T()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": Z()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": Z()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": T()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": T()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": Z()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": Z()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": T()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": T()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": Z()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": Z()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": T()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": T()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": Z()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": Z()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": T()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": T()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": Z()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": Z()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": T()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": T()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": Z()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": Z()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": T()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": T()
                }],
                "mask-image-radial": [{
                    "mask-radial": [D, L]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": Z()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": Z()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": T()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": T()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": C()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [q]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": Z()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": Z()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": T()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": T()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: ie()
                }],
                "mask-repeat": [{
                    mask: xe()
                }],
                "mask-size": [{
                    mask: re()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", D, L]
                }],
                filter: [{
                    filter: ["", "none", D, L]
                }],
                blur: [{
                    blur: ve()
                }],
                brightness: [{
                    brightness: [q, D, L]
                }],
                contrast: [{
                    contrast: [q, D, L]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", g, lt, st]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": T()
                }],
                grayscale: [{
                    grayscale: ["", q, D, L]
                }],
                "hue-rotate": [{
                    "hue-rotate": [q, D, L]
                }],
                invert: [{
                    invert: ["", q, D, L]
                }],
                saturate: [{
                    saturate: [q, D, L]
                }],
                sepia: [{
                    sepia: ["", q, D, L]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", D, L]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": ve()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [q, D, L]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [q, D, L]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", q, D, L]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [q, D, L]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", q, D, L]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [q, D, L]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [q, D, L]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", q, D, L]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": v()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": v()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": v()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", D, L]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [q, "initial", D, L]
                }],
                ease: [{
                    ease: ["linear", "initial", k, D, L]
                }],
                delay: [{
                    delay: [q, D, L]
                }],
                animate: [{
                    animate: ["none", A, D, L]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [x, D, L]
                }],
                "perspective-origin": [{
                    "perspective-origin": $()
                }],
                rotate: [{
                    rotate: ge()
                }],
                "rotate-x": [{
                    "rotate-x": ge()
                }],
                "rotate-y": [{
                    "rotate-y": ge()
                }],
                "rotate-z": [{
                    "rotate-z": ge()
                }],
                scale: [{
                    scale: ye()
                }],
                "scale-x": [{
                    "scale-x": ye()
                }],
                "scale-y": [{
                    "scale-y": ye()
                }],
                "scale-z": [{
                    "scale-z": ye()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: ee()
                }],
                "skew-x": [{
                    "skew-x": ee()
                }],
                "skew-y": [{
                    "skew-y": ee()
                }],
                transform: [{
                    transform: [D, L, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: $()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: ue()
                }],
                "translate-x": [{
                    "translate-x": ue()
                }],
                "translate-y": [{
                    "translate-y": ue()
                }],
                "translate-z": [{
                    "translate-z": ue()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: T()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: T()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D, L]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": v()
                }],
                "scroll-mx": [{
                    "scroll-mx": v()
                }],
                "scroll-my": [{
                    "scroll-my": v()
                }],
                "scroll-ms": [{
                    "scroll-ms": v()
                }],
                "scroll-me": [{
                    "scroll-me": v()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": v()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": v()
                }],
                "scroll-mt": [{
                    "scroll-mt": v()
                }],
                "scroll-mr": [{
                    "scroll-mr": v()
                }],
                "scroll-mb": [{
                    "scroll-mb": v()
                }],
                "scroll-ml": [{
                    "scroll-ml": v()
                }],
                "scroll-p": [{
                    "scroll-p": v()
                }],
                "scroll-px": [{
                    "scroll-px": v()
                }],
                "scroll-py": [{
                    "scroll-py": v()
                }],
                "scroll-ps": [{
                    "scroll-ps": v()
                }],
                "scroll-pe": [{
                    "scroll-pe": v()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": v()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": v()
                }],
                "scroll-pt": [{
                    "scroll-pt": v()
                }],
                "scroll-pr": [{
                    "scroll-pr": v()
                }],
                "scroll-pb": [{
                    "scroll-pb": v()
                }],
                "scroll-pl": [{
                    "scroll-pl": v()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", D, L]
                }],
                fill: [{
                    fill: ["none", ...T()]
                }],
                "stroke-w": [{
                    stroke: [q, Ye, je, lr]
                }],
                stroke: [{
                    stroke: ["none", ...T()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    Lo = (e, {
        cacheSize: t,
        prefix: r,
        experimentalParseClassName: n,
        extend: o = {},
        override: i = {}
    }) => (et(e, "cacheSize", t), et(e, "prefix", r), et(e, "experimentalParseClassName", n), ct(e.theme, i.theme), ct(e.classGroups, i.classGroups), ct(e.conflictingClassGroups, i.conflictingClassGroups), ct(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), et(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), ut(e.theme, o.theme), ut(e.classGroups, o.classGroups), ut(e.conflictingClassGroups, o.conflictingClassGroups), ut(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), dn(e, o, "orderSensitiveModifiers"), e),
    et = (e, t, r) => {
        r !== void 0 && (e[t] = r)
    },
    ct = (e, t) => {
        if (t)
            for (const r in t) et(e, r, t[r])
    },
    ut = (e, t) => {
        if (t)
            for (const r in t) dn(e, t, r)
    },
    dn = (e, t, r) => {
        const n = t[r];
        n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n)
    },
    Ro = (e, ...t) => typeof e == "function" ? sr(dr, e, ...t) : sr(() => Lo(dr(), e), ...t),
    Do = Ro({
        extend: {
            classGroups: {
                shadow: [{
                    shadow: ["glow"]
                }],
                "font-size": [{
                    "text-bor": ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl", "10xl", "11xl"]
                }],
                "border-w": ["border-surface"]
            }
        }
    });

function de(...e) {
    return Do(Ft(...e))
}
const fn = S.forwardRef((e, t) => {
    const {
        children: r,
        className: n,
        mood: o,
        as: i = "div",
        ...l
    } = e, m = o && yn[o] ? .isDark || !1;
    return U.jsx(i, {
        ref: t,
        className: de("flex max-w-full flex-[0_0_auto] flex-col", o && ["bg-background text-foreground", m ? "dark" : "light"], n),
        ...o && {
            "data-mood": o
        },
        ...l,
        children: r
    })
});
fn.displayName = "Box";
const Io = ({
        disabledMobile: e = !1,
        disabled: t,
        initialRotation: r
    }) => {
        const n = S.useRef(null),
            o = "perspective-[1000px]";
        return S.useEffect(() => {
            const i = n.current;
            if (!i) return;
            const l = h => {
                    if (e && window.innerWidth <= 768 || t) return;
                    const u = i.getBoundingClientRect(),
                        f = u.width,
                        d = u.height,
                        c = u.left + f / 2,
                        g = u.top + d / 2,
                        b = h.clientX - c,
                        w = (1 * (h.clientY - g) / (d / 2)).toFixed(2),
                        k = (-1 * b / (f / 2)).toFixed(2);
                    i.style.transition = "all 0.2s cubic-bezier(0.25,0.59,0.91,0.41)", i.style.transform = `perspective(1000px) rotateX(${w}deg) rotateY(${k}deg)`
                },
                m = () => {
                    i.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)", r && (i.style.transform = `rotate(${r}deg)`)
                };
            return i.addEventListener("mousemove", l), i.addEventListener("mouseleave", m), () => {
                i.removeEventListener("mousemove", l), i.removeEventListener("mouseleave", m)
            }
        }, [e, t, r]), {
            cardRef: n,
            wrapperClassName: o
        }
    },
    dt = {
        LARGE: "lg",
        MEDIUM: "md",
        SMALL: "sm",
        NONE: "none"
    },
    Co = rt("", {
        variants: {
            variant: {
                [dt.LARGE]: "w-auto lg:max-w-[656px]",
                [dt.MEDIUM]: "w-auto lg:max-w-[430px]",
                [dt.SMALL]: "w-auto lg:max-w-[352px]",
                [dt.NONE]: ""
            }
        }
    }),
    ja = e => {
        const {
            variant: t = "none",
            className: r,
            disabledMobile: n = !1,
            children: o
        } = e, {
            cardRef: i,
            wrapperClassName: l
        } = Io({
            disabledMobile: n
        });
        return U.jsx("div", {
            className: `${l} h-full w-full flex-1`,
            children: U.jsx(fn, {
                ref: i,
                className: Co({
                    variant: t,
                    className: r
                }),
                children: o
            })
        })
    },
    jo = rt("", {
        variants: {
            size: {
                lg: "text-bor-lg md:text-bor-xl lg:text-bor-2xl",
                base: "text-bor-base md:text-bor-base lg:text-bor-lg",
                sm: "text-bor-sm md:text-bor-sm lg:text-bor-base",
                xs: "text-bor-xs md:text-bor-xs lg:text-bor-sm",
                inherit: ""
            },
            underline: {
                true: "underline",
                false: "",
                undefined: "",
                animated: "bg-[linear-gradient(currentColor,currentColor)] bg-bottom-left bg-no-repeat transition-[background] duration-(--underline-speed) group-hover:bg-size-[100%_var(--underline-height)]! hover:bg-size-[100%_var(--underline-height)]!"
            }
        },
        defaultVariants: {
            size: "base",
            underline: !1
        }
    }),
    zo = "1.3px",
    Mo = "500ms",
    pn = e => {
        const {
            className: t,
            underline: r,
            size: n = "base",
            as: o = "span",
            ...i
        } = e, {
            style: l,
            height: m = zo,
            speed: h = Mo
        } = typeof r == "object" ? r : {
            style: r
        };
        return U.jsx(o, {
            className: de(jo({
                underline: l,
                size: n
            }), t),
            style: { ...r && {
                    "--underline-height": m,
                    "--underline-speed": h
                },
                ...l === "animated" && {
                    backgroundSize: "0% var(--underline-height)"
                }
            },
            ...i
        })
    },
    Po = e => {
        const {
            className: t,
            size: r = "sm",
            ...n
        } = e;
        return U.jsx(pn, {
            className: de("tracking-15 elysia:font-normal font-semibold uppercase", t),
            size: r,
            ...n
        })
    },
    Wo = rt("font-heading box-border tracking-[0.1px]", {
        variants: {
            size: {
                responsive: "",
                sm: "",
                md: "",
                lg: "",
                xl: ""
            },
            level: {
                giga: "",
                mega: "",
                epic: "",
                h1: "",
                h2: "",
                h3: "",
                h4: "",
                h5: "superads:font-normal",
                h6: "superads:font-normal"
            }
        },
        compoundVariants: [{
            size: "responsive",
            level: "giga",
            className: "text-bor-9xl md:text-bor-11xl lg:text-bor-12xl xl:text-bor-13xl"
        }, {
            size: "responsive",
            level: "mega",
            className: "text-bor-8xl md:text-bor-10xl lg:text-bor-11xl xl:text-bor-12xl"
        }, {
            size: "responsive",
            level: "epic",
            className: "text-bor-6xl md:text-bor-9xl lg:text-bor-10xl xl:text-bor-11xl"
        }, {
            size: "responsive",
            level: "h1",
            className: "text-bor-5xl md:text-bor-8xl lg:text-bor-9xl xl:text-bor-10xl"
        }, {
            size: "responsive",
            level: "h2",
            className: "text-bor-4xl md:text-bor-7xl lg:text-bor-8xl xl:text-bor-9xl"
        }, {
            size: "responsive",
            level: "h3",
            className: "text-bor-3xl md:text-bor-6xl lg:text-bor-7xl xl:text-bor-8xl"
        }, {
            size: "responsive",
            level: "h4",
            className: "text-bor-2xl md:text-bor-4xl lg:text-bor-4xl xl:text-bor-7xl"
        }, {
            size: "responsive",
            level: "h5",
            className: "text-bor-1.5xl md:text-bor-3xl lg:text-bor-3xl xl:text-bor-4xl"
        }, {
            size: "responsive",
            level: "h6",
            className: "text-bor-xl md:text-bor-2xl lg:text-bor-2xl xl:text-bor-2xl"
        }, {
            size: "sm",
            level: "giga",
            className: "text-bor-9xl"
        }, {
            size: "sm",
            level: "mega",
            className: "text-bor-8xl"
        }, {
            size: "sm",
            level: "epic",
            className: "text-bor-6xl"
        }, {
            size: "sm",
            level: "h1",
            className: "text-bor-5xl"
        }, {
            size: "sm",
            level: "h2",
            className: "text-bor-4xl"
        }, {
            size: "sm",
            level: "h3",
            className: "text-bor-3xl"
        }, {
            size: "sm",
            level: "h4",
            className: "text-bor-2xl"
        }, {
            size: "sm",
            level: "h5",
            className: "text-bor-1.5xl"
        }, {
            size: "sm",
            level: "h6",
            className: "text-bor-xl"
        }, {
            size: "md",
            level: "giga",
            className: "text-bor-11xl"
        }, {
            size: "md",
            level: "mega",
            className: "text-bor-10xl"
        }, {
            size: "md",
            level: "epic",
            className: "text-bor-9xl"
        }, {
            size: "md",
            level: "h1",
            className: "text-bor-8xl"
        }, {
            size: "md",
            level: "h2",
            className: "text-bor-7xl"
        }, {
            size: "md",
            level: "h3",
            className: "text-bor-6xl"
        }, {
            size: "md",
            level: "h4",
            className: "text-bor-4xl"
        }, {
            size: "md",
            level: "h5",
            className: "text-bor-3xl"
        }, {
            size: "md",
            level: "h6",
            className: "text-bor-2xl"
        }, {
            size: "lg",
            level: "giga",
            className: "text-bor-12xl"
        }, {
            size: "lg",
            level: "mega",
            className: "text-bor-11xl"
        }, {
            size: "lg",
            level: "epic",
            className: "text-bor-10xl"
        }, {
            size: "lg",
            level: "h1",
            className: "text-bor-9xl"
        }, {
            size: "lg",
            level: "h2",
            className: "text-bor-8xl"
        }, {
            size: "lg",
            level: "h3",
            className: "text-bor-7xl"
        }, {
            size: "lg",
            level: "h4",
            className: "text-bor-4xl"
        }, {
            size: "lg",
            level: "h5",
            className: "text-bor-3xl"
        }, {
            size: "lg",
            level: "h6",
            className: "text-bor-2xl"
        }, {
            size: "xl",
            level: "giga",
            className: "text-bor-13xl"
        }, {
            size: "xl",
            level: "mega",
            className: "text-bor-12xl"
        }, {
            size: "xl",
            level: "epic",
            className: "text-bor-11xl"
        }, {
            size: "xl",
            level: "h1",
            className: "text-bor-10xl"
        }, {
            size: "xl",
            level: "h2",
            className: "text-bor-9xl"
        }, {
            size: "xl",
            level: "h3",
            className: "text-bor-8xl"
        }, {
            size: "xl",
            level: "h4",
            className: "text-bor-7xl"
        }, {
            size: "xl",
            level: "h5",
            className: "text-bor-4xl"
        }, {
            size: "xl",
            level: "h6",
            className: "text-bor-2xl"
        }],
        defaultVariants: {
            size: "responsive",
            level: "h1"
        }
    }),
    $o = new Set(["giga", "mega", "epic"]),
    Qt = S.forwardRef((e, t) => {
        const {
            type: r = "h1",
            level: n = r,
            as: o = n,
            size: i = "responsive",
            className: l,
            underline: m,
            children: h,
            ...u
        } = e, f = o === "mega" || o === "epic" || o === "giga" ? "h1" : o, d = $o.has(n);
        return U.jsx(f, {
            ref: t,
            className: de(Wo({
                level: n,
                size: i
            }), d && "leading-none", l),
            "data-testid": "heading",
            ...u,
            children: m ? U.jsx(pn, {
                underline: m,
                size: "inherit",
                children: h
            }) : h
        })
    });
Qt.displayName = "Heading";
const Uo = ["h1", "h2", "h3", "h4", "h5", "h6"],
    za = ["giga", "mega", "epic", ...Uo],
    Ma = ["sm", "md", "lg", "xl", "responsive"];
var Be = {},
    Dt = {},
    fr;

function Fo() {
    return fr || (fr = 1, Dt.entityMap = {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'",
        Agrave: "À",
        Aacute: "Á",
        Acirc: "Â",
        Atilde: "Ã",
        Auml: "Ä",
        Aring: "Å",
        AElig: "Æ",
        Ccedil: "Ç",
        Egrave: "È",
        Eacute: "É",
        Ecirc: "Ê",
        Euml: "Ë",
        Igrave: "Ì",
        Iacute: "Í",
        Icirc: "Î",
        Iuml: "Ï",
        ETH: "Ð",
        Ntilde: "Ñ",
        Ograve: "Ò",
        Oacute: "Ó",
        Ocirc: "Ô",
        Otilde: "Õ",
        Ouml: "Ö",
        Oslash: "Ø",
        Ugrave: "Ù",
        Uacute: "Ú",
        Ucirc: "Û",
        Uuml: "Ü",
        Yacute: "Ý",
        THORN: "Þ",
        szlig: "ß",
        agrave: "à",
        aacute: "á",
        acirc: "â",
        atilde: "ã",
        auml: "ä",
        aring: "å",
        aelig: "æ",
        ccedil: "ç",
        egrave: "è",
        eacute: "é",
        ecirc: "ê",
        euml: "ë",
        igrave: "ì",
        iacute: "í",
        icirc: "î",
        iuml: "ï",
        eth: "ð",
        ntilde: "ñ",
        ograve: "ò",
        oacute: "ó",
        ocirc: "ô",
        otilde: "õ",
        ouml: "ö",
        oslash: "ø",
        ugrave: "ù",
        uacute: "ú",
        ucirc: "û",
        uuml: "ü",
        yacute: "ý",
        thorn: "þ",
        yuml: "ÿ",
        nbsp: " ",
        iexcl: "¡",
        cent: "¢",
        pound: "£",
        curren: "¤",
        yen: "¥",
        brvbar: "¦",
        sect: "§",
        uml: "¨",
        copy: "©",
        ordf: "ª",
        laquo: "«",
        not: "¬",
        shy: "­­",
        reg: "®",
        macr: "¯",
        deg: "°",
        plusmn: "±",
        sup2: "²",
        sup3: "³",
        acute: "´",
        micro: "µ",
        para: "¶",
        middot: "·",
        cedil: "¸",
        sup1: "¹",
        ordm: "º",
        raquo: "»",
        frac14: "¼",
        frac12: "½",
        frac34: "¾",
        iquest: "¿",
        times: "×",
        divide: "÷",
        forall: "∀",
        part: "∂",
        exist: "∃",
        empty: "∅",
        nabla: "∇",
        isin: "∈",
        notin: "∉",
        ni: "∋",
        prod: "∏",
        sum: "∑",
        minus: "−",
        lowast: "∗",
        radic: "√",
        prop: "∝",
        infin: "∞",
        ang: "∠",
        and: "∧",
        or: "∨",
        cap: "∩",
        cup: "∪",
        int: "∫",
        there4: "∴",
        sim: "∼",
        cong: "≅",
        asymp: "≈",
        ne: "≠",
        equiv: "≡",
        le: "≤",
        ge: "≥",
        sub: "⊂",
        sup: "⊃",
        nsub: "⊄",
        sube: "⊆",
        supe: "⊇",
        oplus: "⊕",
        otimes: "⊗",
        perp: "⊥",
        sdot: "⋅",
        Alpha: "Α",
        Beta: "Β",
        Gamma: "Γ",
        Delta: "Δ",
        Epsilon: "Ε",
        Zeta: "Ζ",
        Eta: "Η",
        Theta: "Θ",
        Iota: "Ι",
        Kappa: "Κ",
        Lambda: "Λ",
        Mu: "Μ",
        Nu: "Ν",
        Xi: "Ξ",
        Omicron: "Ο",
        Pi: "Π",
        Rho: "Ρ",
        Sigma: "Σ",
        Tau: "Τ",
        Upsilon: "Υ",
        Phi: "Φ",
        Chi: "Χ",
        Psi: "Ψ",
        Omega: "Ω",
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ε",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        omicron: "ο",
        pi: "π",
        rho: "ρ",
        sigmaf: "ς",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "φ",
        chi: "χ",
        psi: "ψ",
        omega: "ω",
        thetasym: "ϑ",
        upsih: "ϒ",
        piv: "ϖ",
        OElig: "Œ",
        oelig: "œ",
        Scaron: "Š",
        scaron: "š",
        Yuml: "Ÿ",
        fnof: "ƒ",
        circ: "ˆ",
        tilde: "˜",
        ensp: " ",
        emsp: " ",
        thinsp: " ",
        zwnj: "‌",
        zwj: "‍",
        lrm: "‎",
        rlm: "‏",
        ndash: "–",
        mdash: "—",
        lsquo: "‘",
        rsquo: "’",
        sbquo: "‚",
        ldquo: "“",
        rdquo: "”",
        bdquo: "„",
        dagger: "†",
        Dagger: "‡",
        bull: "•",
        hellip: "…",
        permil: "‰",
        prime: "′",
        Prime: "″",
        lsaquo: "‹",
        rsaquo: "›",
        oline: "‾",
        euro: "€",
        trade: "™",
        larr: "←",
        uarr: "↑",
        rarr: "→",
        darr: "↓",
        harr: "↔",
        crarr: "↵",
        lceil: "⌈",
        rceil: "⌉",
        lfloor: "⌊",
        rfloor: "⌋",
        loz: "◊",
        spades: "♠",
        clubs: "♣",
        hearts: "♥",
        diams: "♦"
    }), Dt
}
var ft = {},
    pr;

function Go() {
    if (pr) return ft;
    pr = 1;
    var e = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        t = new RegExp("[\\-\\.0-9" + e.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
        r = new RegExp("^" + e.source + t.source + "*(?::" + e.source + t.source + "*)?$"),
        n = 0,
        o = 1,
        i = 2,
        l = 3,
        m = 4,
        h = 5,
        u = 6,
        f = 7;

    function d(v, E) {
        this.message = v, this.locator = E, Error.captureStackTrace && Error.captureStackTrace(this, d)
    }
    d.prototype = new Error, d.prototype.name = d.name;

    function c() {}
    c.prototype = {
        parse: function(v, E, R) {
            var P = this.domBuilder;
            P.startDocument(), _(E, E = {}), g(v, E, R, P, this.errorHandler), P.endDocument()
        }
    };

    function g(v, E, R, P, j) {
        function F(te) {
            if (te > 65535) {
                te -= 65536;
                var fe = 55296 + (te >> 10),
                    at = 56320 + (te & 1023);
                return String.fromCharCode(fe, at)
            } else return String.fromCharCode(te)
        }

        function z(te) {
            var fe = te.slice(1, -1);
            return fe in R ? R[fe] : fe.charAt(0) === "#" ? F(parseInt(fe.substr(1).replace("x", "0x"))) : (j.error("entity not found:" + te), te)
        }

        function G(te) {
            if (te > re) {
                var fe = v.substring(re, te).replace(/&#?\w+;/g, z);
                T && I(re), P.characters(fe, 0, te - re), re = te
            }
        }

        function I(te, fe) {
            for (; te >= M && (fe = Q.exec(v));) W = fe.index, M = W + fe[0].length, T.lineNumber++;
            T.columnNumber = te - W + 1
        }
        for (var W = 0, M = 0, Q = /.*(?:\r\n?|\n)|.*$/g, T = P.locator, ie = [{
                currentNSMap: E
            }], xe = {}, re = 0;;) {
            try {
                var H = v.indexOf("<", re);
                if (H < 0) {
                    if (!v.substr(re).match(/^\s*$/)) {
                        var X = P.doc,
                            Y = X.createTextNode(v.substr(re));
                        X.appendChild(Y), P.currentElement = Y
                    }
                    return
                }
                switch (H > re && G(H), v.charAt(H + 1)) {
                    case "/":
                        var oe = v.indexOf(">", H + 3),
                            J = v.substring(H + 2, oe),
                            ne = ie.pop();
                        oe < 0 ? (J = v.substring(H + 2).replace(/[\s<].*/, ""), j.error("end tag name: " + J + " is not complete:" + ne.tagName), oe = H + 1 + J.length) : J.match(/\s</) && (J = J.replace(/[\s<].*/, ""), j.error("end tag name: " + J + " maybe not complete"), oe = H + 1 + J.length);
                        var Z = ne.localNSMap,
                            ve = ne.tagName == J,
                            ge = ve || ne.tagName && ne.tagName.toLowerCase() == J.toLowerCase();
                        if (ge) {
                            if (P.endElement(ne.uri, ne.localName, J), Z)
                                for (var ye in Z) P.endPrefixMapping(ye);
                            ve || j.fatalError("end tag name: " + J + " is not match the current start tagName:" + ne.tagName)
                        } else ie.push(ne);
                        oe++;
                        break;
                    case "?":
                        T && I(H), oe = $(v, H, P);
                        break;
                    case "!":
                        T && I(H), oe = C(v, H, P, j);
                        break;
                    default:
                        T && I(H);
                        var ee = new V,
                            ue = ie[ie.length - 1].currentNSMap,
                            oe = x(v, H, ee, ue, z, j),
                            Ae = ee.length;
                        if (!ee.closed && A(v, oe, ee.tagName, xe) && (ee.closed = !0, R.nbsp || j.warning("unclosed xml attribute")), T && Ae) {
                            for (var it = b(T, {}), Ue = 0; Ue < Ae; Ue++) {
                                var Ee = ee[Ue];
                                I(Ee.offset), Ee.locator = b(T, {})
                            }
                            P.locator = it, w(ee, P, ue) && ie.push(ee), P.locator = T
                        } else w(ee, P, ue) && ie.push(ee);
                        ee.uri === "http://www.w3.org/1999/xhtml" && !ee.closed ? oe = k(v, oe, ee.tagName, z, P) : oe++
                }
            } catch (te) {
                if (te instanceof d) throw te;
                j.error("element parse error: " + te), oe = -1
            }
            oe > re ? re = oe : G(Math.max(H, re) + 1)
        }
    }

    function b(v, E) {
        return E.lineNumber = v.lineNumber, E.columnNumber = v.columnNumber, E
    }

    function x(v, E, R, P, j, F) {
        function z(T, ie, xe) {
            T in R.attributeNames && F.fatalError("Attribute " + T + " redefined"), R.addValue(T, ie, xe)
        }
        for (var G, I, W = ++E, M = n;;) {
            var Q = v.charAt(W);
            switch (Q) {
                case "=":
                    if (M === o) G = v.slice(E, W), M = l;
                    else if (M === i) M = l;
                    else throw new Error("attribute equal must after attrName");
                    break;
                case "'":
                case '"':
                    if (M === l || M === o)
                        if (M === o && (F.warning('attribute value must after "="'), G = v.slice(E, W)), E = W + 1, W = v.indexOf(Q, E), W > 0) I = v.slice(E, W).replace(/&#?\w+;/g, j), z(G, I, E - 1), M = h;
                        else throw new Error("attribute value no end '" + Q + "' match");
                    else if (M == m) I = v.slice(E, W).replace(/&#?\w+;/g, j), z(G, I, E), F.warning('attribute "' + G + '" missed start quot(' + Q + ")!!"), E = W + 1, M = h;
                    else throw new Error('attribute value must after "="');
                    break;
                case "/":
                    switch (M) {
                        case n:
                            R.setTagName(v.slice(E, W));
                        case h:
                        case u:
                        case f:
                            M = f, R.closed = !0;
                        case m:
                        case o:
                        case i:
                            break;
                        default:
                            throw new Error("attribute invalid close char('/')")
                    }
                    break;
                case "":
                    return F.error("unexpected end of input"), M == n && R.setTagName(v.slice(E, W)), W;
                case ">":
                    switch (M) {
                        case n:
                            R.setTagName(v.slice(E, W));
                        case h:
                        case u:
                        case f:
                            break;
                        case m:
                        case o:
                            I = v.slice(E, W), I.slice(-1) === "/" && (R.closed = !0, I = I.slice(0, -1));
                        case i:
                            M === i && (I = G), M == m ? (F.warning('attribute "' + I + '" missed quot(")!'), z(G, I.replace(/&#?\w+;/g, j), E)) : ((P[""] !== "http://www.w3.org/1999/xhtml" || !I.match(/^(?:disabled|checked|selected)$/i)) && F.warning('attribute "' + I + '" missed value!! "' + I + '" instead!!'), z(I, I, E));
                            break;
                        case l:
                            throw new Error("attribute value missed!!")
                    }
                    return W;
                case "":
                    Q = " ";
                default:
                    if (Q <= " ") switch (M) {
                        case n:
                            R.setTagName(v.slice(E, W)), M = u;
                            break;
                        case o:
                            G = v.slice(E, W), M = i;
                            break;
                        case m:
                            var I = v.slice(E, W).replace(/&#?\w+;/g, j);
                            F.warning('attribute "' + I + '" missed quot(")!!'), z(G, I, E);
                        case h:
                            M = u;
                            break
                    } else switch (M) {
                        case i:
                            R.tagName, (P[""] !== "http://www.w3.org/1999/xhtml" || !G.match(/^(?:disabled|checked|selected)$/i)) && F.warning('attribute "' + G + '" missed value!! "' + G + '" instead2!!'), z(G, G, E), E = W, M = o;
                            break;
                        case h:
                            F.warning('attribute space is required"' + G + '"!!');
                        case u:
                            M = o, E = W;
                            break;
                        case l:
                            M = m, E = W;
                            break;
                        case f:
                            throw new Error("elements closed character '/' and '>' must be connected to")
                    }
            }
            W++
        }
    }

    function w(v, E, R) {
        for (var P = v.tagName, j = null, Q = v.length; Q--;) {
            var F = v[Q],
                z = F.qName,
                G = F.value,
                T = z.indexOf(":");
            if (T > 0) var I = F.prefix = z.slice(0, T),
                W = z.slice(T + 1),
                M = I === "xmlns" && W;
            else W = z, I = null, M = z === "xmlns" && "";
            F.localName = W, M !== !1 && (j == null && (j = {}, _(R, R = {})), R[M] = j[M] = G, F.uri = "http://www.w3.org/2000/xmlns/", E.startPrefixMapping(M, G))
        }
        for (var Q = v.length; Q--;) {
            F = v[Q];
            var I = F.prefix;
            I && (I === "xml" && (F.uri = "http://www.w3.org/XML/1998/namespace"), I !== "xmlns" && (F.uri = R[I || ""]))
        }
        var T = P.indexOf(":");
        T > 0 ? (I = v.prefix = P.slice(0, T), W = v.localName = P.slice(T + 1)) : (I = null, W = v.localName = P);
        var ie = v.uri = R[I || ""];
        if (E.startElement(ie, W, P, v), v.closed) {
            if (E.endElement(ie, W, P), j)
                for (I in j) E.endPrefixMapping(I)
        } else return v.currentNSMap = R, v.localNSMap = j, !0
    }

    function k(v, E, R, P, j) {
        if (/^(?:script|textarea)$/i.test(R)) {
            var F = v.indexOf("</" + R + ">", E),
                z = v.substring(E + 1, F);
            if (/[&<]/.test(z)) return /^script$/i.test(R) ? (j.characters(z, 0, z.length), F) : (z = z.replace(/&#?\w+;/g, P), j.characters(z, 0, z.length), F)
        }
        return E + 1
    }

    function A(v, E, R, P) {
        var j = P[R];
        return j == null && (j = v.lastIndexOf("</" + R + ">"), j < E && (j = v.lastIndexOf("</" + R)), P[R] = j), j < E
    }

    function _(v, E) {
        for (var R in v) E[R] = v[R]
    }

    function C(v, E, R, P) {
        var j = v.charAt(E + 2);
        switch (j) {
            case "-":
                if (v.charAt(E + 3) === "-") {
                    var F = v.indexOf("-->", E + 4);
                    return F > E ? (R.comment(v, E + 4, F - E - 4), F + 3) : (P.error("Unclosed comment"), -1)
                } else return -1;
            default:
                if (v.substr(E + 3, 6) == "CDATA[") {
                    var F = v.indexOf("]]>", E + 9);
                    return R.startCDATA(), R.characters(v, E + 9, F - E - 9), R.endCDATA(), F + 3
                }
                var z = B(v, E),
                    G = z.length;
                if (G > 1 && /!doctype/i.test(z[0][0])) {
                    var I = z[1][0],
                        W = !1,
                        M = !1;
                    G > 3 && (/^public$/i.test(z[2][0]) ? (W = z[3][0], M = G > 4 && z[4][0]) : /^system$/i.test(z[2][0]) && (M = z[3][0]));
                    var Q = z[G - 1];
                    return R.startDTD(I, W, M), R.endDTD(), Q.index + Q[0].length
                }
        }
        return -1
    }

    function $(v, E, R) {
        var P = v.indexOf("?>", E);
        if (P) {
            var j = v.substring(E, P).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
            return j ? (j[0].length, R.processingInstruction(j[1], j[2]), P + 2) : -1
        }
        return -1
    }

    function V() {
        this.attributeNames = {}
    }
    V.prototype = {
        setTagName: function(v) {
            if (!r.test(v)) throw new Error("invalid tagName:" + v);
            this.tagName = v
        },
        addValue: function(v, E, R) {
            if (!r.test(v)) throw new Error("invalid attribute:" + v);
            this.attributeNames[v] = this.length, this[this.length++] = {
                qName: v,
                value: E,
                offset: R
            }
        },
        length: 0,
        getLocalName: function(v) {
            return this[v].localName
        },
        getLocator: function(v) {
            return this[v].locator
        },
        getQName: function(v) {
            return this[v].qName
        },
        getURI: function(v) {
            return this[v].uri
        },
        getValue: function(v) {
            return this[v].value
        }
    };

    function B(v, E) {
        var R, P = [],
            j = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
        for (j.lastIndex = E, j.exec(v); R = j.exec(v);)
            if (P.push(R), R[1]) return P
    }
    return ft.XMLReader = c, ft.ParseError = d, ft
}
var He = {},
    mr;

function hr() {
    if (mr) return He;
    mr = 1;

    function e(a, s) {
        for (var p in a) s[p] = a[p]
    }

    function t(a, s) {
        var p = a.prototype;
        if (!(p instanceof s)) {
            let y = function() {};
            y.prototype = s.prototype, y = new y, e(p, y), a.prototype = p = y
        }
        p.constructor != a && (typeof a != "function" && console.error("unknow Class:" + a), p.constructor = a)
    }
    var r = "http://www.w3.org/1999/xhtml",
        n = {},
        o = n.ELEMENT_NODE = 1,
        i = n.ATTRIBUTE_NODE = 2,
        l = n.TEXT_NODE = 3,
        m = n.CDATA_SECTION_NODE = 4,
        h = n.ENTITY_REFERENCE_NODE = 5,
        u = n.ENTITY_NODE = 6,
        f = n.PROCESSING_INSTRUCTION_NODE = 7,
        d = n.COMMENT_NODE = 8,
        c = n.DOCUMENT_NODE = 9,
        g = n.DOCUMENT_TYPE_NODE = 10,
        b = n.DOCUMENT_FRAGMENT_NODE = 11,
        x = n.NOTATION_NODE = 12,
        w = {},
        k = {};
    w.INDEX_SIZE_ERR = (k[1] = "Index size error", 1), w.DOMSTRING_SIZE_ERR = (k[2] = "DOMString size error", 2);
    var A = w.HIERARCHY_REQUEST_ERR = (k[3] = "Hierarchy request error", 3);
    w.WRONG_DOCUMENT_ERR = (k[4] = "Wrong document", 4), w.INVALID_CHARACTER_ERR = (k[5] = "Invalid character", 5), w.NO_DATA_ALLOWED_ERR = (k[6] = "No data allowed", 6), w.NO_MODIFICATION_ALLOWED_ERR = (k[7] = "No modification allowed", 7);
    var _ = w.NOT_FOUND_ERR = (k[8] = "Not found", 8);
    w.NOT_SUPPORTED_ERR = (k[9] = "Not supported", 9);
    var C = w.INUSE_ATTRIBUTE_ERR = (k[10] = "Attribute in use", 10);
    w.INVALID_STATE_ERR = (k[11] = "Invalid state", 11), w.SYNTAX_ERR = (k[12] = "Syntax error", 12), w.INVALID_MODIFICATION_ERR = (k[13] = "Invalid modification", 13), w.NAMESPACE_ERR = (k[14] = "Invalid namespace", 14), w.INVALID_ACCESS_ERR = (k[15] = "Invalid access", 15);

    function $(a, s) {
        if (s instanceof Error) var p = s;
        else p = this, Error.call(this, k[a]), this.message = k[a], Error.captureStackTrace && Error.captureStackTrace(this, $);
        return p.code = a, s && (this.message = this.message + ": " + s), p
    }
    $.prototype = Error.prototype, e(w, $);

    function V() {}
    V.prototype = {
        length: 0,
        item: function(a) {
            return this[a] || null
        },
        toString: function(a, s) {
            for (var p = [], y = 0; y < this.length; y++) Ee(this[y], p, a, s);
            return p.join("")
        }
    };

    function B(a, s) {
        this._node = a, this._refresh = s, v(this)
    }

    function v(a) {
        var s = a._node._inc || a._node.ownerDocument._inc;
        if (a._inc != s) {
            var p = a._refresh(a._node);
            at(a, "length", p.length), e(p, a), a._inc = s
        }
    }
    B.prototype.item = function(a) {
        return v(this), this[a]
    }, t(B, V);

    function E() {}

    function R(a, s) {
        for (var p = a.length; p--;)
            if (a[p] === s) return p
    }

    function P(a, s, p, y) {
        if (y ? s[R(s, y)] = p : s[s.length++] = p, a) {
            p.ownerElement = a;
            var O = a.ownerDocument;
            O && (y && Q(O, a, y), M(O, a, p))
        }
    }

    function j(a, s, p) {
        var y = R(s, p);
        if (y >= 0) {
            for (var O = s.length - 1; y < O;) s[y] = s[++y];
            if (s.length = O, a) {
                var K = a.ownerDocument;
                K && (Q(K, a, p), p.ownerElement = null)
            }
        } else throw $(_, new Error(a.tagName + "@" + p))
    }
    E.prototype = {
        length: 0,
        item: V.prototype.item,
        getNamedItem: function(a) {
            for (var s = this.length; s--;) {
                var p = this[s];
                if (p.nodeName == a) return p
            }
        },
        setNamedItem: function(a) {
            var s = a.ownerElement;
            if (s && s != this._ownerElement) throw new $(C);
            var p = this.getNamedItem(a.nodeName);
            return P(this._ownerElement, this, a, p), p
        },
        setNamedItemNS: function(a) {
            var s = a.ownerElement,
                p;
            if (s && s != this._ownerElement) throw new $(C);
            return p = this.getNamedItemNS(a.namespaceURI, a.localName), P(this._ownerElement, this, a, p), p
        },
        removeNamedItem: function(a) {
            var s = this.getNamedItem(a);
            return j(this._ownerElement, this, s), s
        },
        removeNamedItemNS: function(a, s) {
            var p = this.getNamedItemNS(a, s);
            return j(this._ownerElement, this, p), p
        },
        getNamedItemNS: function(a, s) {
            for (var p = this.length; p--;) {
                var y = this[p];
                if (y.localName == s && y.namespaceURI == a) return y
            }
            return null
        }
    };

    function F(a) {
        if (this._features = {}, a)
            for (var s in a) this._features = a[s]
    }
    F.prototype = {
        hasFeature: function(a, s) {
            var p = this._features[a.toLowerCase()];
            return !!(p && (!s || s in p))
        },
        createDocument: function(a, s, p) {
            var y = new W;
            if (y.implementation = this, y.childNodes = new V, y.doctype = p, p && y.appendChild(p), s) {
                var O = y.createElementNS(a, s);
                y.appendChild(O)
            }
            return y
        },
        createDocumentType: function(a, s, p) {
            var y = new ve;
            return y.name = a, y.nodeName = a, y.publicId = s, y.systemId = p, y
        }
    };

    function z() {}
    z.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        insertBefore: function(a, s) {
            return xe(this, a, s)
        },
        replaceChild: function(a, s) {
            this.insertBefore(a, s), s && this.removeChild(s)
        },
        removeChild: function(a) {
            return ie(this, a)
        },
        appendChild: function(a) {
            return this.insertBefore(a, null)
        },
        hasChildNodes: function() {
            return this.firstChild != null
        },
        cloneNode: function(a) {
            return fe(this.ownerDocument || this, this, a)
        },
        normalize: function() {
            for (var a = this.firstChild; a;) {
                var s = a.nextSibling;
                s && s.nodeType == l && a.nodeType == l ? (this.removeChild(s), a.appendData(s.data)) : (a.normalize(), a = s)
            }
        },
        isSupported: function(a, s) {
            return this.ownerDocument.implementation.hasFeature(a, s)
        },
        hasAttributes: function() {
            return this.attributes.length > 0
        },
        lookupPrefix: function(a) {
            for (var s = this; s;) {
                var p = s._nsMap;
                if (p) {
                    for (var y in p)
                        if (p[y] == a) return y
                }
                s = s.nodeType == i ? s.ownerDocument : s.parentNode
            }
            return null
        },
        lookupNamespaceURI: function(a) {
            for (var s = this; s;) {
                var p = s._nsMap;
                if (p && a in p) return p[a];
                s = s.nodeType == i ? s.ownerDocument : s.parentNode
            }
            return null
        },
        isDefaultNamespace: function(a) {
            var s = this.lookupPrefix(a);
            return s == null
        }
    };

    function G(a) {
        return a == "<" && "&lt;" || a == ">" && "&gt;" || a == "&" && "&amp;" || a == '"' && "&quot;" || "&#" + a.charCodeAt() + ";"
    }
    e(n, z), e(n, z.prototype);

    function I(a, s) {
        if (s(a)) return !0;
        if (a = a.firstChild)
            do
                if (I(a, s)) return !0; while (a = a.nextSibling)
    }

    function W() {}

    function M(a, s, p) {
        a && a._inc++;
        var y = p.namespaceURI;
        y == "http://www.w3.org/2000/xmlns/" && (s._nsMap[p.prefix ? p.localName : ""] = p.value)
    }

    function Q(a, s, p, y) {
        a && a._inc++;
        var O = p.namespaceURI;
        O == "http://www.w3.org/2000/xmlns/" && delete s._nsMap[p.prefix ? p.localName : ""]
    }

    function T(a, s, p) {
        if (a && a._inc) {
            a._inc++;
            var y = s.childNodes;
            if (p) y[y.length++] = p;
            else {
                for (var O = s.firstChild, K = 0; O;) y[K++] = O, O = O.nextSibling;
                y.length = K
            }
        }
    }

    function ie(a, s) {
        var p = s.previousSibling,
            y = s.nextSibling;
        return p ? p.nextSibling = y : a.firstChild = y, y ? y.previousSibling = p : a.lastChild = p, T(a.ownerDocument, a), s
    }

    function xe(a, s, p) {
        var y = s.parentNode;
        if (y && y.removeChild(s), s.nodeType === b) {
            var O = s.firstChild;
            if (O == null) return s;
            var K = s.lastChild
        } else O = K = s;
        var me = p ? p.previousSibling : a.lastChild;
        O.previousSibling = me, K.nextSibling = p, me ? me.nextSibling = O : a.firstChild = O, p == null ? a.lastChild = K : p.previousSibling = K;
        do O.parentNode = a; while (O !== K && (O = O.nextSibling));
        return T(a.ownerDocument || a, a), s.nodeType == b && (s.firstChild = s.lastChild = null), s
    }

    function re(a, s) {
        var p = s.parentNode;
        if (p) {
            var y = a.lastChild;
            p.removeChild(s);
            var y = a.lastChild
        }
        var y = a.lastChild;
        return s.parentNode = a, s.previousSibling = y, s.nextSibling = null, y ? y.nextSibling = s : a.firstChild = s, a.lastChild = s, T(a.ownerDocument, a, s), s
    }
    W.prototype = {
        nodeName: "#document",
        nodeType: c,
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function(a, s) {
            if (a.nodeType == b) {
                for (var p = a.firstChild; p;) {
                    var y = p.nextSibling;
                    this.insertBefore(p, s), p = y
                }
                return a
            }
            return this.documentElement == null && a.nodeType == o && (this.documentElement = a), xe(this, a, s), a.ownerDocument = this, a
        },
        removeChild: function(a) {
            return this.documentElement == a && (this.documentElement = null), ie(this, a)
        },
        importNode: function(a, s) {
            return te(this, a, s)
        },
        getElementById: function(a) {
            var s = null;
            return I(this.documentElement, function(p) {
                if (p.nodeType == o && p.getAttribute("id") == a) return s = p, !0
            }), s
        },
        getElementsByClassName: function(a) {
            var s = new RegExp("(^|\\s)" + a + "(\\s|$)");
            return new B(this, function(p) {
                var y = [];
                return I(p.documentElement, function(O) {
                    O !== p && O.nodeType == o && s.test(O.getAttribute("class")) && y.push(O)
                }), y
            })
        },
        createElement: function(a) {
            var s = new H;
            s.ownerDocument = this, s.nodeName = a, s.tagName = a, s.childNodes = new V;
            var p = s.attributes = new E;
            return p._ownerElement = s, s
        },
        createDocumentFragment: function() {
            var a = new ue;
            return a.ownerDocument = this, a.childNodes = new V, a
        },
        createTextNode: function(a) {
            var s = new J;
            return s.ownerDocument = this, s.appendData(a), s
        },
        createComment: function(a) {
            var s = new ne;
            return s.ownerDocument = this, s.appendData(a), s
        },
        createCDATASection: function(a) {
            var s = new Z;
            return s.ownerDocument = this, s.appendData(a), s
        },
        createProcessingInstruction: function(a, s) {
            var p = new oe;
            return p.ownerDocument = this, p.tagName = p.target = a, p.nodeValue = p.data = s, p
        },
        createAttribute: function(a) {
            var s = new X;
            return s.ownerDocument = this, s.name = a, s.nodeName = a, s.localName = a, s.specified = !0, s
        },
        createEntityReference: function(a) {
            var s = new ee;
            return s.ownerDocument = this, s.nodeName = a, s
        },
        createElementNS: function(a, s) {
            var p = new H,
                y = s.split(":"),
                O = p.attributes = new E;
            return p.childNodes = new V, p.ownerDocument = this, p.nodeName = s, p.tagName = s, p.namespaceURI = a, y.length == 2 ? (p.prefix = y[0], p.localName = y[1]) : p.localName = s, O._ownerElement = p, p
        },
        createAttributeNS: function(a, s) {
            var p = new X,
                y = s.split(":");
            return p.ownerDocument = this, p.nodeName = s, p.name = s, p.namespaceURI = a, p.specified = !0, y.length == 2 ? (p.prefix = y[0], p.localName = y[1]) : p.localName = s, p
        }
    }, t(W, z);

    function H() {
        this._nsMap = {}
    }
    H.prototype = {
        nodeType: o,
        hasAttribute: function(a) {
            return this.getAttributeNode(a) != null
        },
        getAttribute: function(a) {
            var s = this.getAttributeNode(a);
            return s && s.value || ""
        },
        getAttributeNode: function(a) {
            return this.attributes.getNamedItem(a)
        },
        setAttribute: function(a, s) {
            var p = this.ownerDocument.createAttribute(a);
            p.value = p.nodeValue = "" + s, this.setAttributeNode(p)
        },
        removeAttribute: function(a) {
            var s = this.getAttributeNode(a);
            s && this.removeAttributeNode(s)
        },
        appendChild: function(a) {
            return a.nodeType === b ? this.insertBefore(a, null) : re(this, a)
        },
        setAttributeNode: function(a) {
            return this.attributes.setNamedItem(a)
        },
        setAttributeNodeNS: function(a) {
            return this.attributes.setNamedItemNS(a)
        },
        removeAttributeNode: function(a) {
            return this.attributes.removeNamedItem(a.nodeName)
        },
        removeAttributeNS: function(a, s) {
            var p = this.getAttributeNodeNS(a, s);
            p && this.removeAttributeNode(p)
        },
        hasAttributeNS: function(a, s) {
            return this.getAttributeNodeNS(a, s) != null
        },
        getAttributeNS: function(a, s) {
            var p = this.getAttributeNodeNS(a, s);
            return p && p.value || ""
        },
        setAttributeNS: function(a, s, p) {
            var y = this.ownerDocument.createAttributeNS(a, s);
            y.value = y.nodeValue = "" + p, this.setAttributeNode(y)
        },
        getAttributeNodeNS: function(a, s) {
            return this.attributes.getNamedItemNS(a, s)
        },
        getElementsByTagName: function(a) {
            return new B(this, function(s) {
                var p = [];
                return I(s, function(y) {
                    y !== s && y.nodeType == o && (a === "*" || y.tagName == a) && p.push(y)
                }), p
            })
        },
        getElementsByTagNameNS: function(a, s) {
            return new B(this, function(p) {
                var y = [];
                return I(p, function(O) {
                    O !== p && O.nodeType === o && (a === "*" || O.namespaceURI === a) && (s === "*" || O.localName == s) && y.push(O)
                }), y
            })
        }
    }, W.prototype.getElementsByTagName = H.prototype.getElementsByTagName, W.prototype.getElementsByTagNameNS = H.prototype.getElementsByTagNameNS, t(H, z);

    function X() {}
    X.prototype.nodeType = i, t(X, z);

    function Y() {}
    Y.prototype = {
        data: "",
        substringData: function(a, s) {
            return this.data.substring(a, a + s)
        },
        appendData: function(a) {
            a = this.data + a, this.nodeValue = this.data = a, this.length = a.length
        },
        insertData: function(a, s) {
            this.replaceData(a, 0, s)
        },
        appendChild: function(a) {
            throw new Error(k[A])
        },
        deleteData: function(a, s) {
            this.replaceData(a, s, "")
        },
        replaceData: function(a, s, p) {
            var y = this.data.substring(0, a),
                O = this.data.substring(a + s);
            p = y + p + O, this.nodeValue = this.data = p, this.length = p.length
        }
    }, t(Y, z);

    function J() {}
    J.prototype = {
        nodeName: "#text",
        nodeType: l,
        splitText: function(a) {
            var s = this.data,
                p = s.substring(a);
            s = s.substring(0, a), this.data = this.nodeValue = s, this.length = s.length;
            var y = this.ownerDocument.createTextNode(p);
            return this.parentNode && this.parentNode.insertBefore(y, this.nextSibling), y
        }
    }, t(J, Y);

    function ne() {}
    ne.prototype = {
        nodeName: "#comment",
        nodeType: d
    }, t(ne, Y);

    function Z() {}
    Z.prototype = {
        nodeName: "#cdata-section",
        nodeType: m
    }, t(Z, Y);

    function ve() {}
    ve.prototype.nodeType = g, t(ve, z);

    function ge() {}
    ge.prototype.nodeType = x, t(ge, z);

    function ye() {}
    ye.prototype.nodeType = u, t(ye, z);

    function ee() {}
    ee.prototype.nodeType = h, t(ee, z);

    function ue() {}
    ue.prototype.nodeName = "#document-fragment", ue.prototype.nodeType = b, t(ue, z);

    function oe() {}
    oe.prototype.nodeType = f, t(oe, z);

    function Ae() {}
    Ae.prototype.serializeToString = function(a, s, p) {
        return it.call(a, s, p)
    }, z.prototype.toString = it;

    function it(a, s) {
        var p = [],
            y = this.nodeType == 9 && this.documentElement || this,
            O = y.prefix,
            K = y.namespaceURI;
        if (K && O == null) {
            var O = y.lookupPrefix(K);
            if (O == null) var me = [{
                namespace: K,
                prefix: null
            }]
        }
        return Ee(this, p, a, s, me), p.join("")
    }

    function Ue(a, s, p) {
        var y = a.prefix || "",
            O = a.namespaceURI;
        if (!y && !O || y === "xml" && O === "http://www.w3.org/XML/1998/namespace" || O == "http://www.w3.org/2000/xmlns/") return !1;
        for (var K = p.length; K--;) {
            var me = p[K];
            if (me.prefix == y) return me.namespace != O
        }
        return !0
    }

    function Ee(a, s, p, y, O) {
        if (y)
            if (a = y(a), a) {
                if (typeof a == "string") {
                    s.push(a);
                    return
                }
            } else return;
        switch (a.nodeType) {
            case o:
                O || (O = []), O.length;
                var K = a.attributes,
                    me = K.length,
                    pe = a.firstChild,
                    Fe = a.tagName;
                p = r === a.namespaceURI || p, s.push("<", Fe);
                for (var Ne = 0; Ne < me; Ne++) {
                    var he = K.item(Ne);
                    he.prefix == "xmlns" ? O.push({
                        prefix: he.localName,
                        namespace: he.value
                    }) : he.nodeName == "xmlns" && O.push({
                        prefix: "",
                        namespace: he.value
                    })
                }
                for (var Ne = 0; Ne < me; Ne++) {
                    var he = K.item(Ne);
                    if (Ue(he, p, O)) {
                        var be = he.prefix || "",
                            Ge = he.namespaceURI,
                            Lt = be ? " xmlns:" + be : " xmlns";
                        s.push(Lt, '="', Ge, '"'), O.push({
                            prefix: be,
                            namespace: Ge
                        })
                    }
                    Ee(he, s, p, y, O)
                }
                if (Ue(a, p, O)) {
                    var be = a.prefix || "",
                        Ge = a.namespaceURI;
                    if (Ge) {
                        var Lt = be ? " xmlns:" + be : " xmlns";
                        s.push(Lt, '="', Ge, '"'), O.push({
                            prefix: be,
                            namespace: Ge
                        })
                    }
                }
                if (pe || p && !/^(?:meta|link|img|br|hr|input)$/i.test(Fe)) {
                    if (s.push(">"), p && /^script$/i.test(Fe))
                        for (; pe;) pe.data ? s.push(pe.data) : Ee(pe, s, p, y, O), pe = pe.nextSibling;
                    else
                        for (; pe;) Ee(pe, s, p, y, O), pe = pe.nextSibling;
                    s.push("</", Fe, ">")
                } else s.push("/>");
                return;
            case c:
            case b:
                for (var pe = a.firstChild; pe;) Ee(pe, s, p, y, O), pe = pe.nextSibling;
                return;
            case i:
                return s.push(" ", a.name, '="', a.value.replace(/[<&"]/g, G), '"');
            case l:
                return s.push(a.data.replace(/[<&]/g, G).replace(/]]>/g, "]]&gt;"));
            case m:
                return s.push("<![CDATA[", a.data, "]]>");
            case d:
                return s.push("<!--", a.data, "-->");
            case g:
                var er = a.publicId,
                    Ve = a.systemId;
                if (s.push("<!DOCTYPE ", a.name), er) s.push(" PUBLIC ", er), Ve && Ve != "." && s.push(" ", Ve), s.push(">");
                else if (Ve && Ve != ".") s.push(" SYSTEM ", Ve, ">");
                else {
                    var tr = a.internalSubset;
                    tr && s.push(" [", tr, "]"), s.push(">")
                }
                return;
            case f:
                return s.push("<?", a.target, " ", a.data, "?>");
            case h:
                return s.push("&", a.nodeName, ";");
            default:
                s.push("??", a.nodeName)
        }
    }

    function te(a, s, p) {
        var y;
        switch (s.nodeType) {
            case o:
                y = s.cloneNode(!1), y.ownerDocument = a;
            case b:
                break;
            case i:
                p = !0;
                break
        }
        if (y || (y = s.cloneNode(!1)), y.ownerDocument = a, y.parentNode = null, p)
            for (var O = s.firstChild; O;) y.appendChild(te(a, O, p)), O = O.nextSibling;
        return y
    }

    function fe(a, s, p) {
        var y = new s.constructor;
        for (var O in s) {
            var K = s[O];
            typeof K != "object" && K != y[O] && (y[O] = K)
        }
        switch (s.childNodes && (y.childNodes = new V), y.ownerDocument = a, y.nodeType) {
            case o:
                var me = s.attributes,
                    Fe = y.attributes = new E,
                    Ne = me.length;
                Fe._ownerElement = y;
                for (var he = 0; he < Ne; he++) y.setAttributeNode(fe(a, me.item(he), !0));
                break;
            case i:
                p = !0
        }
        if (p)
            for (var be = s.firstChild; be;) y.appendChild(fe(a, be, p)), be = be.nextSibling;
        return y
    }

    function at(a, s, p) {
        a[s] = p
    }
    try {
        if (Object.defineProperty) {
            let a = function(s) {
                switch (s.nodeType) {
                    case o:
                    case b:
                        var p = [];
                        for (s = s.firstChild; s;) s.nodeType !== 7 && s.nodeType !== 8 && p.push(a(s)), s = s.nextSibling;
                        return p.join("");
                    default:
                        return s.nodeValue
                }
            };
            Object.defineProperty(B.prototype, "length", {
                get: function() {
                    return v(this), this.$$length
                }
            }), Object.defineProperty(z.prototype, "textContent", {
                get: function() {
                    return a(this)
                },
                set: function(s) {
                    switch (this.nodeType) {
                        case o:
                        case b:
                            for (; this.firstChild;) this.removeChild(this.firstChild);
                            (s || String(s)) && this.appendChild(this.ownerDocument.createTextNode(s));
                            break;
                        default:
                            this.data = s, this.value = s, this.nodeValue = s
                    }
                }
            }), at = function(s, p, y) {
                s["$$" + p] = y
            }
        }
    } catch {}
    return He.Node = z, He.DOMException = $, He.DOMImplementation = F, He.XMLSerializer = Ae, He
}
var gr;

function Vo() {
    if (gr) return Be;
    gr = 1;

    function e(c) {
        this.options = c || {
            locator: {}
        }
    }
    e.prototype.parseFromString = function(c, g) {
        var b = this.options,
            x = new u,
            w = b.domBuilder || new r,
            k = b.errorHandler,
            A = b.locator,
            _ = b.xmlns || {},
            C = /\/x?html?$/.test(g),
            $ = C ? m.entityMap : {
                lt: "<",
                gt: ">",
                amp: "&",
                quot: '"',
                apos: "'"
            };
        return A && w.setDocumentLocator(A), x.errorHandler = t(k, w, A), x.domBuilder = b.domBuilder || w, C && (_[""] = "http://www.w3.org/1999/xhtml"), _.xml = _.xml || "http://www.w3.org/XML/1998/namespace", c && typeof c == "string" ? x.parse(c, _, $) : x.errorHandler.error("invalid doc source"), w.doc
    };

    function t(c, g, b) {
        if (!c) {
            if (g instanceof r) return g;
            c = g
        }
        var x = {},
            w = c instanceof Function;
        b = b || {};

        function k(A) {
            var _ = c[A];
            !_ && w && (_ = c.length == 2 ? function(C) {
                c(A, C)
            } : c), x[A] = _ && function(C) {
                _("[xmldom " + A + "]	" + C + o(b))
            } || function() {}
        }
        return k("warning"), k("error"), k("fatalError"), x
    }

    function r() {
        this.cdata = !1
    }

    function n(c, g) {
        g.lineNumber = c.lineNumber, g.columnNumber = c.columnNumber
    }
    r.prototype = {
        startDocument: function() {
            this.doc = new d().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId)
        },
        startElement: function(c, g, b, x) {
            var w = this.doc,
                k = w.createElementNS(c, b || g),
                A = x.length;
            l(this, k), this.currentElement = k, this.locator && n(this.locator, k);
            for (var _ = 0; _ < A; _++) {
                var c = x.getURI(_),
                    C = x.getValue(_),
                    b = x.getQName(_),
                    $ = w.createAttributeNS(c, b);
                this.locator && n(x.getLocator(_), $), $.value = $.nodeValue = C, k.setAttributeNode($)
            }
        },
        endElement: function(c, g, b) {
            var x = this.currentElement;
            x.tagName, this.currentElement = x.parentNode
        },
        startPrefixMapping: function(c, g) {},
        endPrefixMapping: function(c) {},
        processingInstruction: function(c, g) {
            var b = this.doc.createProcessingInstruction(c, g);
            this.locator && n(this.locator, b), l(this, b)
        },
        ignorableWhitespace: function(c, g, b) {},
        characters: function(c, g, b) {
            if (c = i.apply(this, arguments), c) {
                if (this.cdata) var x = this.doc.createCDATASection(c);
                else var x = this.doc.createTextNode(c);
                this.currentElement ? this.currentElement.appendChild(x) : /^\s*$/.test(c) && this.doc.appendChild(x), this.locator && n(this.locator, x)
            }
        },
        skippedEntity: function(c) {},
        endDocument: function() {
            this.doc.normalize()
        },
        setDocumentLocator: function(c) {
            (this.locator = c) && (c.lineNumber = 0)
        },
        comment: function(c, g, b) {
            c = i.apply(this, arguments);
            var x = this.doc.createComment(c);
            this.locator && n(this.locator, x), l(this, x)
        },
        startCDATA: function() {
            this.cdata = !0
        },
        endCDATA: function() {
            this.cdata = !1
        },
        startDTD: function(c, g, b) {
            var x = this.doc.implementation;
            if (x && x.createDocumentType) {
                var w = x.createDocumentType(c, g, b);
                this.locator && n(this.locator, w), l(this, w)
            }
        },
        warning: function(c) {
            console.warn("[xmldom warning]	" + c, o(this.locator))
        },
        error: function(c) {
            console.error("[xmldom error]	" + c, o(this.locator))
        },
        fatalError: function(c) {
            throw new f(c, this.locator)
        }
    };

    function o(c) {
        if (c) return `
@` + (c.systemId || "") + "#[line:" + c.lineNumber + ",col:" + c.columnNumber + "]"
    }

    function i(c, g, b) {
        return typeof c == "string" ? c.substr(g, b) : c.length >= g + b || g ? new java.lang.String(c, g, b) + "" : c
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(c) {
        r.prototype[c] = function() {
            return null
        }
    });

    function l(c, g) {
        c.currentElement ? c.currentElement.appendChild(g) : c.doc.appendChild(g)
    }
    var m = Fo(),
        h = Go(),
        u = h.XMLReader,
        f = h.ParseError,
        d = Be.DOMImplementation = hr().DOMImplementation;
    return Be.XMLSerializer = hr().XMLSerializer, Be.DOMParser = e, Be.__DOMHandler = r, Be
}
var Pa = Vo();
const mn = e => {
        if (!e) return "";
        const t = n => typeof n == "string" || typeof n == "number" ? n.toString() : S.isValidElement(n) ? mn(n.props.node ? .children) : "";
        return S.Children.toArray(e).map(t).join("")
    },
    qo = () => {
        const [e, t] = S.useState(0);
        S.useEffect(() => {
            if (typeof window < "u") {
                t(window.innerWidth);
                const u = () => {
                    t(window.innerWidth)
                };
                return window.addEventListener("resize", u), u(), () => window.removeEventListener("resize", u)
            }
        }, []);
        const r = S.useMemo(() => Object.keys(ze).sort((u, f) => ze[f] - ze[u]), []),
            n = S.useMemo(() => r.find(u => e >= ze[u]) || "xs", [e]),
            o = S.useMemo(() => Object.keys(ze).reduce((u, f) => (u[f] = e >= ze[f], u), {}), [e]),
            i = S.useMemo(() => [tt.SM].includes(n), [n]),
            l = S.useMemo(() => [tt.MD].includes(n), [n]),
            m = S.useMemo(() => i || l, [n]),
            h = S.useMemo(() => [tt.LG, tt.XL].includes(n), [n]);
        return {
            windowWidth: e,
            isMobile: i,
            isTablet: l,
            isDesktop: h,
            isCompact: m,
            currentBreakpoint: n,
            breakpoints: o
        }
    };

function vr(e) {
    return e !== null && typeof e == "object"
}
const br = (e, t) => {
        const {
            defaultValue: r,
            isEnabled: n = !0
        } = t || {};
        if (!n) return vr(e) ? r : e;
        const {
            breakpoints: o
        } = qo();
        return S.useMemo(() => {
            if (!vr(e)) return e;
            const l = Object.keys(o).reverse().find(m => o[m] && e[m] !== void 0);
            return (l && e[l]) ? ? r
        }, [e, o, r])
    },
    Bo = S.forwardRef((e, t) => {
        const {
            type: r = "h4",
            level: n = r,
            as: o = n,
            size: i = "responsive",
            characterLimits: l,
            children: m,
            ...h
        } = e, u = br(n, {
            defaultValue: r
        }), f = typeof o == "string" ? o : u, d = S.useMemo(() => mn(m).length, [m]), c = br(l, {
            defaultValue: {}
        }), g = S.useMemo(() => {
            if (!c) return i;
            let b = i;
            const x = Object.entries(c).map(([w, k]) => [Number(w), k]).sort((w, k) => w[0] - k[0]);
            for (const [w, k] of x) d >= w && (b = k);
            return b
        }, [d, c, i]);
        return U.jsx(Qt, {
            ref: t,
            level: u,
            as: f,
            size: g,
            ...h,
            children: m
        })
    });
Bo.displayName = "AdaptiveHeading";
var Ho = S.createContext({
        color: "currentColor",
        size: "1em",
        weight: "regular",
        mirrored: !1
    }),
    Kt = function(t, r, n) {
        var o = n.get(t);
        return o ? o(r) : (console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), null)
    };

function yr(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        o, i;
    for (i = 0; i < n.length; i++) o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}
var _t = S.forwardRef(function(e, t) {
    var r = e.alt,
        n = e.color,
        o = e.size,
        i = e.weight,
        l = e.mirrored,
        m = e.children,
        h = e.renderPath,
        u = yr(e, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]),
        f = S.useContext(Ho),
        d = f.color,
        c = d === void 0 ? "currentColor" : d,
        g = f.size,
        b = f.weight,
        x = b === void 0 ? "regular" : b,
        w = f.mirrored,
        k = w === void 0 ? !1 : w,
        A = yr(f, ["color", "size", "weight", "mirrored"]);
    return N.createElement("svg", Object.assign({
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: o ? ? g,
        height: o ? ? g,
        fill: n ? ? c,
        viewBox: "0 0 256 256",
        transform: l || k ? "scale(-1, 1)" : void 0
    }, A, u), !!r && N.createElement("title", null, r), m, N.createElement("rect", {
        width: "256",
        height: "256",
        fill: "none"
    }), h(i ? ? x, n ? ? c))
});
_t.displayName = "IconBase";
var Pe = new Map;
Pe.set("bold", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("polyline", {
        points: "160 208 80 128 160 48",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }))
});
Pe.set("duotone", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("polygon", {
        points: "160 208 80 128 160 48 160 208",
        opacity: "0.2"
    }), N.createElement("polygon", {
        points: "160 208 80 128 160 48 160 208",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
});
Pe.set("fill", function() {
    return N.createElement(N.Fragment, null, N.createElement("path", {
        d: "M163.1,40.6a8.4,8.4,0,0,0-8.8,1.7l-80,80a8.1,8.1,0,0,0,0,11.4l80,80A8.3,8.3,0,0,0,160,216a8.5,8.5,0,0,0,3.1-.6A8,8,0,0,0,168,208V48A8,8,0,0,0,163.1,40.6Z"
    }))
});
Pe.set("light", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("polyline", {
        points: "160 208 80 128 160 48",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }))
});
Pe.set("thin", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("polyline", {
        points: "160 208 80 128 160 48",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }))
});
Pe.set("regular", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("polyline", {
        points: "160 208 80 128 160 48",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
});
var Xo = function(t, r) {
        return Kt(t, r, Pe)
    },
    hn = S.forwardRef(function(e, t) {
        return N.createElement(_t, Object.assign({
            ref: t
        }, e, {
            renderPath: Xo
        }))
    });
hn.displayName = "CaretLeft";
var We = new Map;
We.set("bold", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("polyline", {
        points: "96 48 176 128 96 208",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }))
});
We.set("duotone", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("polygon", {
        points: "96 48 176 128 96 208 96 48",
        opacity: "0.2"
    }), N.createElement("polygon", {
        points: "96 48 176 128 96 208 96 48",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
});
We.set("fill", function() {
    return N.createElement(N.Fragment, null, N.createElement("path", {
        d: "M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"
    }))
});
We.set("light", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("polyline", {
        points: "96 48 176 128 96 208",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }))
});
We.set("thin", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("polyline", {
        points: "96 48 176 128 96 208",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }))
});
We.set("regular", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("polyline", {
        points: "96 48 176 128 96 208",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
});
var Yo = function(t, r) {
        return Kt(t, r, We)
    },
    gn = S.forwardRef(function(e, t) {
        return N.createElement(_t, Object.assign({
            ref: t
        }, e, {
            renderPath: Yo
        }))
    });
gn.displayName = "CaretRight";
var $e = new Map;
$e.set("bold", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("line", {
        x1: "128",
        y1: "32",
        x2: "128",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), N.createElement("line", {
        x1: "195.9",
        y1: "60.1",
        x2: "173.3",
        y2: "82.7",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), N.createElement("line", {
        x1: "224",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), N.createElement("line", {
        x1: "195.9",
        y1: "195.9",
        x2: "173.3",
        y2: "173.3",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), N.createElement("line", {
        x1: "128",
        y1: "224",
        x2: "128",
        y2: "192",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), N.createElement("line", {
        x1: "60.1",
        y1: "195.9",
        x2: "82.7",
        y2: "173.3",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), N.createElement("line", {
        x1: "32",
        y1: "128",
        x2: "64",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), N.createElement("line", {
        x1: "60.1",
        y1: "60.1",
        x2: "82.7",
        y2: "82.7",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }))
});
$e.set("duotone", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("line", {
        x1: "128",
        y1: "32",
        x2: "128",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "195.9",
        y1: "60.1",
        x2: "173.3",
        y2: "82.7",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "224",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "195.9",
        y1: "195.9",
        x2: "173.3",
        y2: "173.3",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "128",
        y1: "224",
        x2: "128",
        y2: "192",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "60.1",
        y1: "195.9",
        x2: "82.7",
        y2: "173.3",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "32",
        y1: "128",
        x2: "64",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "60.1",
        y1: "60.1",
        x2: "82.7",
        y2: "82.7",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
});
$e.set("fill", function() {
    return N.createElement(N.Fragment, null, N.createElement("path", {
        d: "M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.3,58.7a7.8,7.8,0,0,0,5.6-2.3l22.6-22.6a8,8,0,1,0-11.3-11.3L167.6,77.1a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,173.3,90.7ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"
    }))
});
$e.set("light", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("line", {
        x1: "128",
        y1: "32",
        x2: "128",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), N.createElement("line", {
        x1: "195.9",
        y1: "60.1",
        x2: "173.3",
        y2: "82.7",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), N.createElement("line", {
        x1: "224",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), N.createElement("line", {
        x1: "195.9",
        y1: "195.9",
        x2: "173.3",
        y2: "173.3",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), N.createElement("line", {
        x1: "128",
        y1: "224",
        x2: "128",
        y2: "192",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), N.createElement("line", {
        x1: "60.1",
        y1: "195.9",
        x2: "82.7",
        y2: "173.3",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), N.createElement("line", {
        x1: "32",
        y1: "128",
        x2: "64",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), N.createElement("line", {
        x1: "60.1",
        y1: "60.1",
        x2: "82.7",
        y2: "82.7",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }))
});
$e.set("thin", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("line", {
        x1: "128",
        y1: "32",
        x2: "128",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), N.createElement("line", {
        x1: "195.9",
        y1: "60.1",
        x2: "173.3",
        y2: "82.7",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), N.createElement("line", {
        x1: "224",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), N.createElement("line", {
        x1: "195.9",
        y1: "195.9",
        x2: "173.3",
        y2: "173.3",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), N.createElement("line", {
        x1: "128",
        y1: "224",
        x2: "128",
        y2: "192",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), N.createElement("line", {
        x1: "60.1",
        y1: "195.9",
        x2: "82.7",
        y2: "173.3",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), N.createElement("line", {
        x1: "32",
        y1: "128",
        x2: "64",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), N.createElement("line", {
        x1: "60.1",
        y1: "60.1",
        x2: "82.7",
        y2: "82.7",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }))
});
$e.set("regular", function(e) {
    return N.createElement(N.Fragment, null, N.createElement("line", {
        x1: "128",
        y1: "32",
        x2: "128",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "195.9",
        y1: "60.1",
        x2: "173.3",
        y2: "82.7",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "224",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "195.9",
        y1: "195.9",
        x2: "173.3",
        y2: "173.3",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "128",
        y1: "224",
        x2: "128",
        y2: "192",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "60.1",
        y1: "195.9",
        x2: "82.7",
        y2: "173.3",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "32",
        y1: "128",
        x2: "64",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), N.createElement("line", {
        x1: "60.1",
        y1: "60.1",
        x2: "82.7",
        y2: "82.7",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
});
var Zo = function(t, r) {
        return Kt(t, r, $e)
    },
    vn = S.forwardRef(function(e, t) {
        return N.createElement(_t, Object.assign({
            ref: t
        }, e, {
            renderPath: Zo
        }))
    });
vn.displayName = "Spinner";
var Qo = In();
const Wa = Hr(Qo),
    Ko = "group/button overflow-hidden rounded-surface font-semibold text-center inline-block",
    nt = "disabled:cursor-not-allowed disabled:dark:hover:shadow-none disabled:after",
    Jo = de("bg-bor-primary text-foreground-inverted text-sm leading-5 transition-shadow", nt),
    ei = de("text-foreground bg-bor-secondary-100 hover:bg-bor-secondary-200 dark:bg-bor-light/20 dark:hover:bg-bor-light/30 text-sm", nt),
    ti = de("text-foreground relative flex flex-row items-center gap-1 py-2 pr-3 pl-4 text-sm transition-all disabled:cursor-not-allowed", nt),
    xr = de(["text-foreground rounded-surface border-surface bg-transparent text-center text-sm leading-5 transition-colors duration-200", nt]),
    ri = "hover:bg-bor-dark hover:text-bor-light dark:hover:text-dark dark:hover:border-bor-primary dark:hover:bg-bor-primary disabled:bg-transparent disabled:dark:bg-transparent",
    wr = "flex items-center justify-center",
    ni = de("dark:hover:shadow-blurry text-dark bg-bor-tertiary-100 hover:bg-bor-tertiary-200 dark:bg-bor-primary dark:hover:bg-bor-primary-400 transition-colors duration-200", nt),
    oi = "dark:hover:bg-bor-light/20 text-foreground bg-transparent transition-colors duration-200 hover:bg-bor-tertiary-100/50 disabled:cursor-not-allowed",
    It = "px-6 py-4",
    Ze = "px-6 py-2",
    Qe = "px-4 py-2",
    Ke = "px-2 py-1",
    ii = "px-6 py-3.5",
    kr = "p-4 text-4xl",
    Er = "p-4 text-2xl",
    Nr = "p-2 text-base",
    _r = "p-2 text-xs",
    ai = rt(Ko, {
        variants: {
            variant: {
                primary: `${Jo}`,
                outline: `${xr}`,
                isolated: `${xr} ${ri}`,
                secondary: `${ei}`,
                ghost: `${ti}`,
                iconFill: `${wr} ${ni}`,
                iconGhost: `${wr} ${oi}`,
                secondaryGhost: "text-foreground w-fit"
            },
            size: {
                lg: "",
                md: "",
                base: "",
                sm: ""
            },
            clickArea: {
                true: "before:content-empty static cursor-pointer break-words no-underline before:absolute before:inset-0",
                false: ""
            }
        },
        compoundVariants: [{
            variant: "primary",
            size: "lg",
            className: `${It}`
        }, {
            variant: "primary",
            size: "md",
            className: `${Ze}`
        }, {
            variant: "primary",
            size: "base",
            className: `${Qe}`
        }, {
            variant: "primary",
            size: "sm",
            className: `${Ke}`
        }, {
            variant: "outline",
            size: "lg",
            className: `${ii}`
        }, {
            variant: "outline",
            size: "md",
            className: `${Ze}`
        }, {
            variant: "outline",
            size: "base",
            className: `${Qe}`
        }, {
            variant: "outline",
            size: "sm",
            className: `${Ke}`
        }, {
            variant: "isolated",
            size: "lg",
            className: `${It}`
        }, {
            variant: "isolated",
            size: "md",
            className: `${Ze}`
        }, {
            variant: "isolated",
            size: "base",
            className: `${Qe}`
        }, {
            variant: "isolated",
            size: "sm",
            className: `${Ke}`
        }, {
            variant: "secondary",
            size: "lg",
            className: `${It}`
        }, {
            variant: "secondary",
            size: "md",
            className: `${Ze}`
        }, {
            variant: "secondary",
            size: "base",
            className: `${Qe}`
        }, {
            variant: "secondary",
            size: "sm",
            className: `${Ke}`
        }, {
            variant: "ghost",
            size: "md",
            className: `${Ze}`
        }, {
            variant: "ghost",
            size: "base",
            className: `${Qe}`
        }, {
            variant: "ghost",
            size: "sm",
            className: `${Ke}`
        }, {
            variant: "iconFill",
            size: "lg",
            className: `${kr}`
        }, {
            variant: "iconFill",
            size: "md",
            className: `${Er}`
        }, {
            variant: "iconFill",
            size: "base",
            className: `${Nr}`
        }, {
            variant: "iconFill",
            size: "sm",
            className: `${_r}`
        }, {
            variant: "iconGhost",
            size: "lg",
            className: `${kr}`
        }, {
            variant: "iconGhost",
            size: "md",
            className: `${Er}`
        }, {
            variant: "iconGhost",
            size: "base",
            className: `${Nr}`
        }, {
            variant: "iconGhost",
            size: "sm",
            className: `${_r}`
        }],
        defaultVariants: {
            variant: "primary",
            size: "lg"
        }
    }),
    Sr = e => {
        const {
            children: t,
            className: r,
            disableAnimation: n,
            ...o
        } = e;
        return n ? U.jsx(yt.span, {
            className: r,
            ...o,
            children: t
        }) : U.jsxs("div", {
            className: "relative",
            children: [U.jsx(yt.span, {
                variants: {
                    initial: {
                        y: 0
                    },
                    hover: {
                        y: "-200%"
                    }
                },
                transition: {
                    ease: "circOut",
                    duration: .4
                },
                className: de("block", r),
                ...o,
                children: t
            }), U.jsx(yt.span, {
                variants: {
                    initial: {
                        y: "200%"
                    },
                    hover: {
                        y: 0
                    }
                },
                transition: {
                    ease: "circOut",
                    duration: .4
                },
                className: de("absolute inset-0", r),
                "aria-hidden": !0,
                ...o,
                children: t
            })]
        })
    },
    si = S.forwardRef((e, t) => {
        const {
            children: r
        } = e;
        return U.jsx("span", {
            ref: t,
            style: {
                clip: "rect(0, 0, 0, 0)"
            },
            className: "absolute -m-px h-px w-px overflow-hidden border-0 p-0 whitespace-nowrap",
            children: r
        })
    });
si.displayName = "VisuallyHiddenSpan";
const li = U.jsx(gn, {
        weight: "bold"
    }),
    ci = U.jsx(hn, {
        weight: "bold"
    }),
    ui = e => {
        const {
            variant: t,
            reverse: r,
            icon: n = r ? ci : li,
            children: o,
            disabled: i
        } = e;
        switch (t) {
            case "secondary":
            case "ghost":
                return U.jsxs("span", {
                    className: de("flex items-center justify-center gap-2", r && "flex-row-reverse"),
                    children: [U.jsx(Sr, {
                        disableAnimation: t === "ghost",
                        "aria-disabled": i,
                        children: o
                    }), U.jsx("span", {
                        className: de("transition-transform duration-300 group-hover/button:transition-transform group-hover/button:duration-300", r ? "group-hover/button:-translate-x-1" : "group-hover/button:translate-x-1"),
                        children: n
                    })]
                });
            case "iconFill":
            case "iconGhost":
                return n;
            default:
                return U.jsx(Sr, {
                    disableAnimation: t === "secondaryGhost",
                    "aria-disabled": i,
                    children: o
                })
        }
    },
    di = S.forwardRef(({
        variant: e = "primary",
        size: t = "lg",
        className: r,
        children: n,
        label: o,
        icon: i,
        loading: l,
        reverse: m,
        disabled: h,
        clickArea: u,
        ...f
    }, d) => U.jsx(yt.button, {
        ref: d,
        className: de(ai({
            variant: e,
            size: t,
            clickArea: u
        }), r),
        disabled: !!(l || h),
        initial: "initial",
        whileHover: "hover",
        ...f,
        children: U.jsx(ui, {
            variant: e,
            icon: i,
            reverse: m,
            disabled: !!(l || h),
            children: l ? U.jsxs("span", {
                className: "mx-auto flex items-center justify-center gap-4 text-center",
                children: [U.jsx(vn, {
                    weight: "fill",
                    className: "animate-spin",
                    size: 20
                }), U.jsx("span", {
                    children: "Loading...."
                })]
            }) : n || o
        })
    }));
di.displayName = "Button";
const bn = rt("elysia:font-normal block w-full border font-semibold outline-none transition-all", {
        variants: {
            size: {
                xl: "px-8 py-9 text-xl",
                lg: "px-6 py-5 text-base",
                md: "px-6 py-4 text-base",
                sm: "px-6 py-3 text-base",
                xs: "px-4 py-2 text-sm"
            },
            variant: {
                fill: "border-foreground/0 text-foreground placeholder:text-foreground/50 bg-foreground/10 [&:not(:disabled)]:hover:bg-foreground/15 [&:not(:disabled)]:focus:bg-foreground/15 [&:not(:disabled)]:hover:border-foreground [&:not(:disabled)]:focus:border-foreground rounded-surface",
                outline: "border-foreground [&:not(:disabled)]:hover:border-foreground-strong [&:not(:disabled)]:focus:border-foreground-strong placeholder:text-foreground/50 text-foreground rounded-surface bg-transparent",
                ghost: "placeholder:text-foreground/50 text-foreground border-transparent bg-transparent p-0"
            },
            hasError: {
                true: "!border-bor-error",
                false: ""
            },
            hasValue: {
                true: "text-foreground",
                false: "text-foreground/50"
            }
        },
        defaultVariants: {
            size: "md",
            variant: "fill",
            hasError: !1,
            hasValue: !1
        }
    }),
    fi = S.forwardRef((e, t) => {
        const {
            className: r,
            variant: n = "fill",
            size: o = "md",
            placeholder: i = "Please type...",
            hasError: l = !1,
            value: m,
            ...h
        } = e;
        return U.jsx("input", {
            ref: t,
            className: de(bn({
                variant: n,
                size: o,
                hasError: l,
                hasValue: !!m
            }), r),
            placeholder: i,
            value: m,
            ...h
        })
    });
fi.displayName = "TextInput";

function Vt(e, t) {
    return Vt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
        return r.__proto__ = n, r
    }, Vt(e, t)
}

function pi(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vt(e, t)
}
const mi = S.forwardRef((e, t) => {
    const {
        className: r,
        variant: n = "fill",
        size: o = "md",
        hasError: i = !1,
        value: l,
        ...m
    } = e;
    return U.jsx("textarea", {
        ref: t,
        ...m,
        value: l,
        className: de(bn({
            variant: n,
            size: o,
            hasError: i,
            hasValue: !!l
        }), r)
    })
});
mi.displayName = "TextArea";
var qt = function(e, t) {
    return qt = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o])
    }, qt(e, t)
};

function $a(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    qt(e, t);

    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}
var Tr = function() {
    return Tr = Object.assign || function(t) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, Tr.apply(this, arguments)
};

function Ua(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
}

function Fa(e, t, r, n) {
    function o(i) {
        return i instanceof r ? i : new r(function(l) {
            l(i)
        })
    }
    return new(r || (r = Promise))(function(i, l) {
        function m(f) {
            try {
                u(n.next(f))
            } catch (d) {
                l(d)
            }
        }

        function h(f) {
            try {
                u(n.throw(f))
            } catch (d) {
                l(d)
            }
        }

        function u(f) {
            f.done ? i(f.value) : o(f.value).then(m, h)
        }
        u((n = n.apply(e, t || [])).next())
    })
}

function Ga(e, t) {
    var r = {
            label: 0,
            sent: function() {
                if (i[0] & 1) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        },
        n, o, i, l = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return l.next = m(0), l.throw = m(1), l.return = m(2), typeof Symbol == "function" && (l[Symbol.iterator] = function() {
        return this
    }), l;

    function m(u) {
        return function(f) {
            return h([u, f])
        }
    }

    function h(u) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; l && (l = 0, u[0] && (r = 0)), r;) try {
            if (n = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done) return i;
            switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
                case 0:
                case 1:
                    i = u;
                    break;
                case 4:
                    return r.label++, {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    r.label++, o = u[1], u = [0];
                    continue;
                case 7:
                    u = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                        r.label = u[1];
                        break
                    }
                    if (u[0] === 6 && r.label < i[1]) {
                        r.label = i[1], i = u;
                        break
                    }
                    if (i && r.label < i[2]) {
                        r.label = i[2], r.ops.push(u);
                        break
                    }
                    i[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            u = t.call(e, r)
        } catch (f) {
            u = [6, f], o = 0
        } finally {
            n = i = 0
        }
        if (u[0] & 5) throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}

function Ar(e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        r = t && e[t],
        n = 0;
    if (r) return r.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && n >= e.length && (e = void 0), {
                value: e && e[n++],
                done: !e
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Va(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r) return e;
    var n = r.call(e),
        o, i = [],
        l;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(o = n.next()).done;) i.push(o.value)
    } catch (m) {
        l = {
            error: m
        }
    } finally {
        try {
            o && !o.done && (r = n.return) && r.call(n)
        } finally {
            if (l) throw l.error
        }
    }
    return i
}

function Ct(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, o = t.length, i; n < o; n++)(i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
    return e.concat(i || Array.prototype.slice.call(t))
}

function Bt(e) {
    return this instanceof Bt ? (this.v = e, this) : new Bt(e)
}

function qa(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(e, t || []),
        o, i = [];
    return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), m("next"), m("throw"), m("return", l), o[Symbol.asyncIterator] = function() {
        return this
    }, o;

    function l(g) {
        return function(b) {
            return Promise.resolve(b).then(g, d)
        }
    }

    function m(g, b) {
        n[g] && (o[g] = function(x) {
            return new Promise(function(w, k) {
                i.push([g, x, w, k]) > 1 || h(g, x)
            })
        }, b && (o[g] = b(o[g])))
    }

    function h(g, b) {
        try {
            u(n[g](b))
        } catch (x) {
            c(i[0][3], x)
        }
    }

    function u(g) {
        g.value instanceof Bt ? Promise.resolve(g.value.v).then(f, d) : c(i[0][2], g)
    }

    function f(g) {
        h("next", g)
    }

    function d(g) {
        h("throw", g)
    }

    function c(g, b) {
        g(b), i.shift(), i.length && h(i[0][0], i[0][1])
    }
}

function Ba(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator],
        r;
    return t ? t.call(e) : (e = typeof Ar == "function" ? Ar(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
        return this
    }, r);

    function n(i) {
        r[i] = e[i] && function(l) {
            return new Promise(function(m, h) {
                l = e[i](l), o(m, h, l.done, l.value)
            })
        }
    }

    function o(i, l, m, h) {
        Promise.resolve(h).then(function(u) {
            i({
                value: u,
                done: m
            })
        }, l)
    }
}
const Ha = {
        elysia: "elysia",
        superads: "superads",
        DEFAULT: "elysia"
    },
    hi = {
        elysia: {
            title: "Elysia",
            darkMode: !1,
            fontFamiliesQuery: "family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600;700"
        },
        superads: {
            title: "Superads",
            darkMode: !1,
            fontFamiliesQuery: "family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600;700"
        }
    },
    Xa = Object.entries(hi).filter(([e, t]) => !t.deprecated).map(([e, t]) => ({
        title: t.title,
        value: e
    })),
    gi = {
        none: "url()",
        topographic: "url(/images/topographic-background.svg)"
    },
    Ya = Object.entries(gi).filter(([e]) => e !== "none").map(([e, t]) => ({
        title: e[0].toUpperCase() + e.slice(1),
        value: t
    })),
    Za = {
        light: "light",
        dark: "dark",
        spark: "spark",
        mint: "mint",
        "minty-leaf": "minty-leaf",
        leaf: "leaf",
        cloudy: "cloudy",
        sea: "sea",
        stone: "stone",
        sky: "sky",
        earth: "earth",
        lavender: "lavender",
        peach: "peach",
        "dark-spark": "dark-spark",
        "light-spark": "light-spark"
    },
    yn = {
        light: {
            title: "Light",
            isDark: !1
        },
        dark: {
            title: "Dark",
            isDark: !0
        },
        spark: {
            title: "Spark",
            isDark: !1
        },
        mint: {
            title: "Mint",
            isDark: !0
        },
        "minty-leaf": {
            title: "Minty leaf",
            isDark: !0
        },
        leaf: {
            title: "Leaf",
            isDark: !0
        },
        cloudy: {
            title: "Cloudy",
            isDark: !1
        },
        sea: {
            title: "Sea",
            isDark: !0
        },
        stone: {
            title: "Stone",
            isDark: !1
        },
        sky: {
            title: "Sky",
            isDark: !1
        },
        earth: {
            title: "Earth",
            isDark: !0
        },
        lavender: {
            title: "Lavender",
            isDark: !0
        },
        peach: {
            title: "Peach",
            isDark: !0
        },
        "dark-spark": {
            title: "Dark Spark",
            isDark: !0
        },
        "light-spark": {
            title: "Light Spark",
            isDark: !0
        }
    },
    Qa = Object.entries(yn).map(([e, t]) => ({
        title: t.title,
        value: e
    }));

function vi(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1) continue;
            r[n] = e[n]
        }
    return r
}

function kt() {
    return kt = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, kt.apply(null, arguments)
}
var pt = {};
var Or;

function bi() {
    if (Or) return pt;
    Or = 1;
    var e = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
        t = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,
        r = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
        n = /\\([\u000b\u0020-\u00ff])/g,
        o = /([\\"])/g,
        i = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    pt.format = l, pt.parse = m;

    function l(d) {
        if (!d || typeof d != "object") throw new TypeError("argument obj is required");
        var c = d.parameters,
            g = d.type;
        if (!g || !i.test(g)) throw new TypeError("invalid type");
        var b = g;
        if (c && typeof c == "object")
            for (var x, w = Object.keys(c).sort(), k = 0; k < w.length; k++) {
                if (x = w[k], !r.test(x)) throw new TypeError("invalid parameter name");
                b += "; " + x + "=" + u(c[x])
            }
        return b
    }

    function m(d) {
        if (!d) throw new TypeError("argument string is required");
        var c = typeof d == "object" ? h(d) : d;
        if (typeof c != "string") throw new TypeError("argument string is required to be a string");
        var g = c.indexOf(";"),
            b = g !== -1 ? c.slice(0, g).trim() : c.trim();
        if (!i.test(b)) throw new TypeError("invalid media type");
        var x = new f(b.toLowerCase());
        if (g !== -1) {
            var w, k, A;
            for (e.lastIndex = g; k = e.exec(c);) {
                if (k.index !== g) throw new TypeError("invalid parameter format");
                g += k[0].length, w = k[1].toLowerCase(), A = k[2], A.charCodeAt(0) === 34 && (A = A.slice(1, -1), A.indexOf("\\") !== -1 && (A = A.replace(n, "$1"))), x.parameters[w] = A
            }
            if (g !== c.length) throw new TypeError("invalid parameter format")
        }
        return x
    }

    function h(d) {
        var c;
        if (typeof d.getHeader == "function" ? c = d.getHeader("content-type") : typeof d.headers == "object" && (c = d.headers && d.headers["content-type"]), typeof c != "string") throw new TypeError("content-type header is missing from object");
        return c
    }

    function u(d) {
        var c = String(d);
        if (r.test(c)) return c;
        if (c.length > 0 && !t.test(c)) throw new TypeError("invalid parameter value");
        return '"' + c.replace(o, "\\$1") + '"'
    }

    function f(d) {
        this.parameters = Object.create(null), this.type = d
    }
    return pt
}
var yi = bi(),
    Xe = new Map,
    xn = function(t) {
        return t.cloneNode(!0)
    },
    Lr = function() {
        return window.location.protocol === "file:"
    },
    wn = function(t, r, n) {
        var o = new XMLHttpRequest;
        o.onreadystatechange = function() {
            try {
                if (!/\.svg/i.test(t) && o.readyState === 2) {
                    var i = o.getResponseHeader("Content-Type");
                    if (!i) throw new Error("Content type not found");
                    var l = yi.parse(i).type;
                    if (!(l === "image/svg+xml" || l === "text/plain")) throw new Error("Invalid content type: ".concat(l))
                }
                if (o.readyState === 4) {
                    if (o.status === 404 || o.responseXML === null) throw new Error(Lr() ? "Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver." : "Unable to load SVG file: " + t);
                    if (o.status === 200 || Lr() && o.status === 0) n(null, o);
                    else throw new Error("There was a problem injecting the SVG: " + o.status + " " + o.statusText)
                }
            } catch (m) {
                if (o.abort(), m instanceof Error) n(m, o);
                else throw m
            }
        }, o.open("GET", t), o.withCredentials = r, o.overrideMimeType && o.overrideMimeType("text/xml"), o.send()
    },
    Re = {},
    Rr = function(t, r) {
        Re[t] = Re[t] || [], Re[t].push(r)
    },
    xi = function(t) {
        for (var r = function(l, m) {
                setTimeout(function() {
                    if (Array.isArray(Re[t])) {
                        var h = Xe.get(t),
                            u = Re[t][l];
                        h instanceof SVGSVGElement && u(null, xn(h)), h instanceof Error && u(h), l === Re[t].length - 1 && delete Re[t]
                    }
                }, 0)
            }, n = 0, o = Re[t].length; n < o; n++) r(n)
    },
    wi = function(t, r, n) {
        if (Xe.has(t)) {
            var o = Xe.get(t);
            if (o === void 0) {
                Rr(t, n);
                return
            }
            if (o instanceof SVGSVGElement) {
                n(null, xn(o));
                return
            }
        }
        Xe.set(t, void 0), Rr(t, n), wn(t, r, function(i, l) {
            var m;
            i ? Xe.set(t, i) : ((m = l.responseXML) === null || m === void 0 ? void 0 : m.documentElement) instanceof SVGSVGElement && Xe.set(t, l.responseXML.documentElement), xi(t)
        })
    },
    ki = function(t, r, n) {
        wn(t, r, function(o, i) {
            var l;
            o ? n(o) : ((l = i.responseXML) === null || l === void 0 ? void 0 : l.documentElement) instanceof SVGSVGElement && n(null, i.responseXML.documentElement)
        })
    },
    Ei = 0,
    Ni = function() {
        return ++Ei
    },
    we = [],
    Dr = {},
    _i = "http://www.w3.org/2000/svg",
    jt = "http://www.w3.org/1999/xlink",
    Ir = function(t, r, n, o, i, l, m) {
        var h = t.getAttribute("data-src") || t.getAttribute("src");
        if (!h) {
            m(new Error("Invalid data-src or src attribute"));
            return
        }
        if (we.indexOf(t) !== -1) {
            we.splice(we.indexOf(t), 1), t = null;
            return
        }
        we.push(t), t.setAttribute("src", "");
        var u = o ? wi : ki;
        u(h, i, function(f, d) {
            if (!d) {
                we.splice(we.indexOf(t), 1), t = null, m(f);
                return
            }
            var c = t.getAttribute("id");
            c && d.setAttribute("id", c);
            var g = t.getAttribute("title");
            g && d.setAttribute("title", g);
            var b = t.getAttribute("width");
            b && d.setAttribute("width", b);
            var x = t.getAttribute("height");
            x && d.setAttribute("height", x);
            var w = Array.from(new Set(Ct(Ct(Ct([], (d.getAttribute("class") || "").split(" "), !0), ["injected-svg"], !1), (t.getAttribute("class") || "").split(" "), !0))).join(" ").trim();
            d.setAttribute("class", w);
            var k = t.getAttribute("style");
            k && d.setAttribute("style", k), d.setAttribute("data-src", h);
            var A = [].filter.call(t.attributes, function(M) {
                return /^data-\w[\w-]*$/.test(M.name)
            });
            if (Array.prototype.forEach.call(A, function(M) {
                    M.name && M.value && d.setAttribute(M.name, M.value)
                }), n) {
                var _ = {
                        clipPath: ["clip-path"],
                        "color-profile": ["color-profile"],
                        cursor: ["cursor"],
                        filter: ["filter"],
                        linearGradient: ["fill", "stroke"],
                        marker: ["marker", "marker-start", "marker-mid", "marker-end"],
                        mask: ["mask"],
                        path: [],
                        pattern: ["fill", "stroke"],
                        radialGradient: ["fill", "stroke"]
                    },
                    C, $, V, B, v;
                Object.keys(_).forEach(function(M) {
                    C = M, V = _[M], $ = d.querySelectorAll(C + "[id]");
                    for (var Q = function(re, H) {
                            B = $[re].id, v = B + "-" + Ni();
                            var X;
                            Array.prototype.forEach.call(V, function(ee) {
                                X = d.querySelectorAll("[" + ee + '*="' + B + '"]');
                                for (var ue = 0, oe = X.length; ue < oe; ue++) {
                                    var Ae = X[ue].getAttribute(ee);
                                    Ae && !Ae.match(new RegExp('url\\("?#' + B + '"?\\)')) || X[ue].setAttribute(ee, "url(#" + v + ")")
                                }
                            });
                            for (var Y = d.querySelectorAll("[*|href]"), J = [], ne = 0, Z = Y.length; ne < Z; ne++) {
                                var ve = Y[ne].getAttributeNS(jt, "href");
                                ve && ve.toString() === "#" + $[re].id && J.push(Y[ne])
                            }
                            for (var ge = 0, ye = J.length; ge < ye; ge++) J[ge].setAttributeNS(jt, "href", "#" + v);
                            $[re].id = v
                        }, T = 0, ie = $.length; T < ie; T++) Q(T)
                })
            }
            d.removeAttribute("xmlns:a");
            for (var E = d.querySelectorAll("script"), R = [], P, j, F = 0, z = E.length; F < z; F++) j = E[F].getAttribute("type"), (!j || j === "application/ecmascript" || j === "application/javascript" || j === "text/javascript") && (P = E[F].innerText || E[F].textContent, P && R.push(P), d.removeChild(E[F]));
            if (R.length > 0 && (r === "always" || r === "once" && !Dr[h])) {
                for (var G = 0, I = R.length; G < I; G++) new Function(R[G])(window);
                Dr[h] = !0
            }
            var W = d.querySelectorAll("style");
            if (Array.prototype.forEach.call(W, function(M) {
                    M.textContent += ""
                }), d.setAttribute("xmlns", _i), d.setAttribute("xmlns:xlink", jt), l(d), !t.parentNode) {
                we.splice(we.indexOf(t), 1), t = null, m(new Error("Parent node is null"));
                return
            }
            t.parentNode.replaceChild(d, t), we.splice(we.indexOf(t), 1), t = null, m(null, d)
        })
    },
    Si = function(t, r) {
        var n = r === void 0 ? {} : r,
            o = n.afterAll,
            i = o === void 0 ? function() {} : o,
            l = n.afterEach,
            m = l === void 0 ? function() {} : l,
            h = n.beforeEach,
            u = h === void 0 ? function() {} : h,
            f = n.cacheRequests,
            d = f === void 0 ? !0 : f,
            c = n.evalScripts,
            g = c === void 0 ? "never" : c,
            b = n.httpRequestWithCredentials,
            x = b === void 0 ? !1 : b,
            w = n.renumerateIRIElements,
            k = w === void 0 ? !0 : w;
        if (t && "length" in t)
            for (var A = 0, _ = 0, C = t.length; _ < C; _++) Ir(t[_], g, k, d, x, u, function($, V) {
                m($, V), t && "length" in t && t.length === ++A && i(A)
            });
        else t ? Ir(t, g, k, d, x, u, function($, V) {
            m($, V), i(1), t = null
        }) : i(0)
    },
    zt = {
        exports: {}
    },
    Mt, Cr;

function Ti() {
    if (Cr) return Mt;
    Cr = 1;
    var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return Mt = e, Mt
}
var Pt, jr;

function Ai() {
    if (jr) return Pt;
    jr = 1;
    var e = Ti();

    function t() {}

    function r() {}
    return r.resetWarningCache = t, Pt = function() {
        function n(l, m, h, u, f, d) {
            if (d !== e) {
                var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw c.name = "Invariant Violation", c
            }
        }
        n.isRequired = n;

        function o() {
            return n
        }
        var i = {
            array: n,
            bigint: n,
            bool: n,
            func: n,
            number: n,
            object: n,
            string: n,
            symbol: n,
            any: n,
            arrayOf: o,
            element: n,
            elementType: n,
            instanceOf: o,
            node: n,
            objectOf: o,
            oneOf: o,
            oneOfType: o,
            shape: o,
            exact: o,
            checkPropTypes: r,
            resetWarningCache: t
        };
        return i.PropTypes = i, i
    }, Pt
}
var zr;

function Oi() {
    return zr || (zr = 1, zt.exports = Ai()()), zt.exports
}
var se = Oi(),
    Li = function(t) {
        var r = t ? .ownerDocument || document;
        return r.defaultView || window
    },
    Ri = function(t, r) {
        for (var n in t)
            if (!(n in r)) return !0;
        for (var o in r)
            if (t[o] !== r[o]) return !0;
        return !1
    },
    Di = ["afterInjection", "beforeInjection", "desc", "evalScripts", "fallback", "httpRequestWithCredentials", "loading", "renumerateIRIElements", "src", "title", "useRequestCache", "wrapper"],
    mt = "http://www.w3.org/2000/svg",
    Mr = "http://www.w3.org/1999/xlink",
    kn = (function(e) {
        function t() {
            for (var n, o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
            return n = e.call.apply(e, [this].concat(i)) || this, n.initialState = {
                hasError: !1,
                isLoading: !0
            }, n.state = n.initialState, n._isMounted = !1, n.reactWrapper = void 0, n.nonReactWrapper = void 0, n.refCallback = function(m) {
                n.reactWrapper = m
            }, n
        }
        pi(t, e);
        var r = t.prototype;
        return r.renderSVG = function() {
            var o = this;
            if (this.reactWrapper instanceof Li(this.reactWrapper).Node) {
                var i = this.props,
                    l = i.desc,
                    m = i.evalScripts,
                    h = i.httpRequestWithCredentials,
                    u = i.renumerateIRIElements,
                    f = i.src,
                    d = i.title,
                    c = i.useRequestCache,
                    g = this.props.onError,
                    b = this.props.beforeInjection,
                    x = this.props.afterInjection,
                    w = this.props.wrapper,
                    k, A;
                w === "svg" ? (k = document.createElementNS(mt, w), k.setAttribute("xmlns", mt), k.setAttribute("xmlns:xlink", Mr), A = document.createElementNS(mt, w)) : (k = document.createElement(w), A = document.createElement(w)), k.appendChild(A), A.dataset.src = f, this.nonReactWrapper = this.reactWrapper.appendChild(k);
                var _ = function(B) {
                        if (o.removeSVG(), !o._isMounted) {
                            g(B);
                            return
                        }
                        o.setState(function() {
                            return {
                                hasError: !0,
                                isLoading: !1
                            }
                        }, function() {
                            g(B)
                        })
                    },
                    C = function(B, v) {
                        if (B) {
                            _(B);
                            return
                        }
                        o._isMounted && o.setState(function() {
                            return {
                                isLoading: !1
                            }
                        }, function() {
                            try {
                                x(v)
                            } catch (E) {
                                _(E)
                            }
                        })
                    },
                    $ = function(B) {
                        if (B.setAttribute("role", "img"), l) {
                            var v = B.querySelector(":scope > desc");
                            v && B.removeChild(v);
                            var E = document.createElement("desc");
                            E.innerHTML = l, B.prepend(E)
                        }
                        if (d) {
                            var R = B.querySelector(":scope > title");
                            R && B.removeChild(R);
                            var P = document.createElement("title");
                            P.innerHTML = d, B.prepend(P)
                        }
                        try {
                            b(B)
                        } catch (j) {
                            _(j)
                        }
                    };
                Si(A, {
                    afterEach: C,
                    beforeEach: $,
                    cacheRequests: c,
                    evalScripts: m,
                    httpRequestWithCredentials: h,
                    renumerateIRIElements: u
                })
            }
        }, r.removeSVG = function() {
            var o;
            (o = this.nonReactWrapper) != null && o.parentNode && (this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper), this.nonReactWrapper = null)
        }, r.componentDidMount = function() {
            this._isMounted = !0, this.renderSVG()
        }, r.componentDidUpdate = function(o) {
            var i = this;
            Ri(kt({}, o), this.props) && this.setState(function() {
                return i.initialState
            }, function() {
                i.removeSVG(), i.renderSVG()
            })
        }, r.componentWillUnmount = function() {
            this._isMounted = !1, this.removeSVG()
        }, r.render = function() {
            var o = this.props;
            o.afterInjection, o.beforeInjection, o.desc, o.evalScripts;
            var i = o.fallback;
            o.httpRequestWithCredentials;
            var l = o.loading;
            o.renumerateIRIElements, o.src, o.title, o.useRequestCache;
            var m = o.wrapper,
                h = vi(o, Di),
                u = m;
            return S.createElement(u, kt({}, h, {
                ref: this.refCallback
            }, m === "svg" ? {
                xmlns: mt,
                xmlnsXlink: Mr
            } : {}), this.state.isLoading && l && S.createElement(l, null), this.state.hasError && i && S.createElement(i, null))
        }, t
    })(S.Component);
kn.defaultProps = {
    afterInjection: function() {},
    beforeInjection: function() {},
    desc: "",
    evalScripts: "never",
    fallback: null,
    httpRequestWithCredentials: !1,
    loading: null,
    onError: function() {},
    renumerateIRIElements: !0,
    title: "",
    useRequestCache: !0,
    wrapper: "div"
};
kn.propTypes = {
    afterInjection: se.func,
    beforeInjection: se.func,
    desc: se.string,
    evalScripts: se.oneOf(["always", "once", "never"]),
    fallback: se.oneOfType([se.func, se.object, se.string]),
    httpRequestWithCredentials: se.bool,
    loading: se.oneOfType([se.func, se.object, se.string]),
    onError: se.func,
    renumerateIRIElements: se.bool,
    src: se.string.isRequired,
    title: se.string,
    useRequestCache: se.bool,
    wrapper: se.oneOf(["div", "span", "svg"])
};
const Wt = {
        hands_touching: "hands_touching",
        hands_up: "hands_up",
        searching_astronaut: "searching_astronaut",
        clock: "clock",
        click: "click",
        brush: "brush"
    },
    Ka = {
        hands_touching: "hands_touching",
        hands_up: "hands_up",
        searching_astronaut: "searching_astronaut",
        clock: "clock",
        click: "click",
        brush: "brush"
    },
    Ii = {
        click: S.lazy(() => qe(() =>
            import ("./ClickIllustration.DUuvfeOs.js"), __vite__mapDeps([0, 1, 2, 3, 4])).then(e => ({
            default: e.ClickIllustration
        }))),
        clock: S.lazy(() => qe(() =>
            import ("./ClockIllustration.DhQAZKXE.js"), __vite__mapDeps([5, 1, 2, 3, 4])).then(e => ({
            default: e.ClockIllustration
        }))),
        brush: S.lazy(() => qe(() =>
            import ("./BrushIllustration.CgsUHZDg.js"), __vite__mapDeps([6, 1, 2, 3, 4])).then(e => ({
            default: e.BrushIllustration
        }))),
        searching_astronaut: S.lazy(() => qe(() =>
            import ("./SearchingAstronautIllustration.DdOyqDF-.js"), __vite__mapDeps([7, 1, 2, 3, 4])).then(e => ({
            default: e.SearchingAstronautIllustration
        }))),
        hands_touching: S.lazy(() => qe(() =>
            import ("./HandsTouchingIllustration.Cw0sYfMe.js"), __vite__mapDeps([8, 1, 2, 3, 4])).then(e => ({
            default: e.HandsTouchingIllustration
        }))),
        hands_up: S.lazy(() => qe(() =>
            import ("./HandsUpIllustration.Dyv7valG.js"), __vite__mapDeps([9, 1, 2, 3, 4])).then(e => ({
            default: e.HandsUpIllustration
        })))
    },
    Ci = e => {
        const {
            variant: t,
            trigger: r = "scroll",
            duration: n = 2.5,
            ...o
        } = e, [i, l] = S.useState(null), m = S.useCallback(C => l(C), []), h = S.useMemo(() => ({
            current: i
        }), [i]), u = Mn({
            target: i ? h : void 0,
            offset: ["start end", "start start"]
        }), f = Pn(h, {
            amount: .1
        }), d = Xr(0), c = Un(), g = rr(c, C => C % (n * 2e3) / (n * 1e3)), b = rr(g, [0, 1, 2], [0, 1, 0], {
            ease: C => C < .5 ? 2 * C * C : 1 - Math.pow(-2 * C + 2, 2) / 2
        }), x = r === "scroll" ? u.scrollYProgress : void 0, w = r === "reveal" ? f : !1;
        S.useEffect(() => {
            if (r !== "reveal") return;
            if (!w) {
                d.set(0);
                return
            }
            const C = Wn(d, 1, {
                duration: n,
                ease: [.25, .1, .4, 1]
            });
            return () => C.stop()
        }, [r, w, n, d]);
        const k = Ii[t],
            _ = {
                scroll: x,
                reveal: d,
                infinite: b,
                none: void 0
            }[r];
        return k && U.jsx(S.Suspense, {
            fallback: null,
            children: U.jsx(k, {
                ref: m,
                progress: _,
                ...o
            })
        })
    };
var tt = (e => (e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e))(tt || {});
const Ja = ["sm", "md", "lg", "xl"],
    ze = {
        sm: 360,
        md: 768,
        lg: 1280,
        xl: 1650
    },
    ji = Object.entries(ze).sort(([, e], [, t]) => t - e),
    es = e => ji.find(([, t]) => e >= t) ? .[0] ? ? null;
let zi = {
        data: ""
    },
    Mi = e => {
        if (typeof window == "object") {
            let t = (e ? e.querySelector("#_goober") : window._goober) || Object.assign(document.createElement("style"), {
                innerHTML: " ",
                id: "_goober"
            });
            return t.nonce = window.__nonce__, t.parentNode || (e || document.head).appendChild(t), t.firstChild
        }
        return e || zi
    },
    Pi = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    Wi = /\/\*[^]*?\*\/|  +/g,
    Pr = /\n+/g,
    De = (e, t) => {
        let r = "",
            n = "",
            o = "";
        for (let i in e) {
            let l = e[i];
            i[0] == "@" ? i[1] == "i" ? r = i + " " + l + ";" : n += i[1] == "f" ? De(l, i) : i + "{" + De(l, i[1] == "k" ? "" : t) + "}" : typeof l == "object" ? n += De(l, t ? t.replace(/([^,])+/g, m => i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, h => /&/.test(h) ? h.replace(/&/g, m) : m ? m + " " + h : h)) : i) : l != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), o += De.p ? De.p(i, l) : i + ":" + l + ";")
        }
        return r + (t && o ? t + "{" + o + "}" : o) + n
    },
    Se = {},
    En = e => {
        if (typeof e == "object") {
            let t = "";
            for (let r in e) t += r + En(e[r]);
            return t
        }
        return e
    },
    $i = (e, t, r, n, o) => {
        let i = En(e),
            l = Se[i] || (Se[i] = (h => {
                let u = 0,
                    f = 11;
                for (; u < h.length;) f = 101 * f + h.charCodeAt(u++) >>> 0;
                return "go" + f
            })(i));
        if (!Se[l]) {
            let h = i !== e ? e : (u => {
                let f, d, c = [{}];
                for (; f = Pi.exec(u.replace(Wi, ""));) f[4] ? c.shift() : f[3] ? (d = f[3].replace(Pr, " ").trim(), c.unshift(c[0][d] = c[0][d] || {})) : c[0][f[1]] = f[2].replace(Pr, " ").trim();
                return c[0]
            })(e);
            Se[l] = De(o ? {
                ["@keyframes " + l]: h
            } : h, r ? "" : "." + l)
        }
        let m = r && Se.g ? Se.g : null;
        return r && (Se.g = Se[l]), ((h, u, f, d) => {
            d ? u.data = u.data.replace(d, h) : u.data.indexOf(h) === -1 && (u.data = f ? h + u.data : u.data + h)
        })(Se[l], t, n, m), l
    },
    Ui = (e, t, r) => e.reduce((n, o, i) => {
        let l = t[i];
        if (l && l.call) {
            let m = l(r),
                h = m && m.props && m.props.className || /^go/.test(m) && m;
            l = h ? "." + h : m && typeof m == "object" ? m.props ? "" : De(m, "") : m === !1 ? "" : m
        }
        return n + o + (l ? ? "")
    }, "");

function St(e) {
    let t = this || {},
        r = e.call ? e(t.p) : e;
    return $i(r.unshift ? r.raw ? Ui(r, [].slice.call(arguments, 1), t.p) : r.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {}) : r, Mi(t.target), t.g, t.o, t.k)
}
let Nn, Ht, Xt;
St.bind({
    g: 1
});
let Te = St.bind({
    k: 1
});

function Fi(e, t, r, n) {
    De.p = t, Nn = e, Ht = r, Xt = n
}

function Ce(e, t) {
    let r = this || {};
    return function() {
        let n = arguments;

        function o(i, l) {
            let m = Object.assign({}, i),
                h = m.className || o.className;
            r.p = Object.assign({
                theme: Ht && Ht()
            }, m), r.o = / *go\d+/.test(h), m.className = St.apply(r, n) + (h ? " " + h : "");
            let u = e;
            return e[0] && (u = m.as || e, delete m.as), Xt && u[0] && Xt(m), Nn(u, m)
        }
        return o
    }
}
var Gi = e => typeof e == "function",
    Et = (e, t) => Gi(e) ? e(t) : e,
    Vi = (() => {
        let e = 0;
        return () => (++e).toString()
    })(),
    _n = (() => {
        let e;
        return () => {
            if (e === void 0 && typeof window < "u") {
                let t = matchMedia("(prefers-reduced-motion: reduce)");
                e = !t || t.matches
            }
            return e
        }
    })(),
    qi = 20,
    Jt = "default",
    Sn = (e, t) => {
        let {
            toastLimit: r
        } = e.settings;
        switch (t.type) {
            case 0:
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, r)
                };
            case 1:
                return { ...e,
                    toasts: e.toasts.map(l => l.id === t.toast.id ? { ...l,
                        ...t.toast
                    } : l)
                };
            case 2:
                let {
                    toast: n
                } = t;
                return Sn(e, {
                    type: e.toasts.find(l => l.id === n.id) ? 1 : 0,
                    toast: n
                });
            case 3:
                let {
                    toastId: o
                } = t;
                return { ...e,
                    toasts: e.toasts.map(l => l.id === o || o === void 0 ? { ...l,
                        dismissed: !0,
                        visible: !1
                    } : l)
                };
            case 4:
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(l => l.id !== t.toastId)
                };
            case 5:
                return { ...e,
                    pausedAt: t.time
                };
            case 6:
                let i = t.time - (e.pausedAt || 0);
                return { ...e,
                    pausedAt: void 0,
                    toasts: e.toasts.map(l => ({ ...l,
                        pauseDuration: l.pauseDuration + i
                    }))
                }
        }
    },
    xt = [],
    Tn = {
        toasts: [],
        pausedAt: void 0,
        settings: {
            toastLimit: qi
        }
    },
    ke = {},
    An = (e, t = Jt) => {
        ke[t] = Sn(ke[t] || Tn, e), xt.forEach(([r, n]) => {
            r === t && n(ke[t])
        })
    },
    On = e => Object.keys(ke).forEach(t => An(e, t)),
    Bi = e => Object.keys(ke).find(t => ke[t].toasts.some(r => r.id === e)),
    Tt = (e = Jt) => t => {
        An(t, e)
    },
    Hi = {
        blank: 4e3,
        error: 4e3,
        success: 2e3,
        loading: 1 / 0,
        custom: 4e3
    },
    Xi = (e = {}, t = Jt) => {
        let [r, n] = S.useState(ke[t] || Tn), o = S.useRef(ke[t]);
        S.useEffect(() => (o.current !== ke[t] && n(ke[t]), xt.push([t, n]), () => {
            let l = xt.findIndex(([m]) => m === t);
            l > -1 && xt.splice(l, 1)
        }), [t]);
        let i = r.toasts.map(l => {
            var m, h, u;
            return { ...e,
                ...e[l.type],
                ...l,
                removeDelay: l.removeDelay || ((m = e[l.type]) == null ? void 0 : m.removeDelay) || e ? .removeDelay,
                duration: l.duration || ((h = e[l.type]) == null ? void 0 : h.duration) || e ? .duration || Hi[l.type],
                style: { ...e.style,
                    ...(u = e[l.type]) == null ? void 0 : u.style,
                    ...l.style
                }
            }
        });
        return { ...r,
            toasts: i
        }
    },
    Yi = (e, t = "blank", r) => ({
        createdAt: Date.now(),
        visible: !0,
        dismissed: !1,
        type: t,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: e,
        pauseDuration: 0,
        ...r,
        id: r ? .id || Vi()
    }),
    ot = e => (t, r) => {
        let n = Yi(t, e, r);
        return Tt(n.toasterId || Bi(n.id))({
            type: 2,
            toast: n
        }), n.id
    },
    ce = (e, t) => ot("blank")(e, t);
ce.error = ot("error");
ce.success = ot("success");
ce.loading = ot("loading");
ce.custom = ot("custom");
ce.dismiss = (e, t) => {
    let r = {
        type: 3,
        toastId: e
    };
    t ? Tt(t)(r) : On(r)
};
ce.dismissAll = e => ce.dismiss(void 0, e);
ce.remove = (e, t) => {
    let r = {
        type: 4,
        toastId: e
    };
    t ? Tt(t)(r) : On(r)
};
ce.removeAll = e => ce.remove(void 0, e);
ce.promise = (e, t, r) => {
    let n = ce.loading(t.loading, { ...r,
        ...r ? .loading
    });
    return typeof e == "function" && (e = e()), e.then(o => {
        let i = t.success ? Et(t.success, o) : void 0;
        return i ? ce.success(i, {
            id: n,
            ...r,
            ...r ? .success
        }) : ce.dismiss(n), o
    }).catch(o => {
        let i = t.error ? Et(t.error, o) : void 0;
        i ? ce.error(i, {
            id: n,
            ...r,
            ...r ? .error
        }) : ce.dismiss(n)
    }), e
};
var Zi = 1e3,
    Qi = (e, t = "default") => {
        let {
            toasts: r,
            pausedAt: n
        } = Xi(e, t), o = S.useRef(new Map).current, i = S.useCallback((d, c = Zi) => {
            if (o.has(d)) return;
            let g = setTimeout(() => {
                o.delete(d), l({
                    type: 4,
                    toastId: d
                })
            }, c);
            o.set(d, g)
        }, []);
        S.useEffect(() => {
            if (n) return;
            let d = Date.now(),
                c = r.map(g => {
                    if (g.duration === 1 / 0) return;
                    let b = (g.duration || 0) + g.pauseDuration - (d - g.createdAt);
                    if (b < 0) {
                        g.visible && ce.dismiss(g.id);
                        return
                    }
                    return setTimeout(() => ce.dismiss(g.id, t), b)
                });
            return () => {
                c.forEach(g => g && clearTimeout(g))
            }
        }, [r, n, t]);
        let l = S.useCallback(Tt(t), [t]),
            m = S.useCallback(() => {
                l({
                    type: 5,
                    time: Date.now()
                })
            }, [l]),
            h = S.useCallback((d, c) => {
                l({
                    type: 1,
                    toast: {
                        id: d,
                        height: c
                    }
                })
            }, [l]),
            u = S.useCallback(() => {
                n && l({
                    type: 6,
                    time: Date.now()
                })
            }, [n, l]),
            f = S.useCallback((d, c) => {
                let {
                    reverseOrder: g = !1,
                    gutter: b = 8,
                    defaultPosition: x
                } = c || {}, w = r.filter(_ => (_.position || x) === (d.position || x) && _.height), k = w.findIndex(_ => _.id === d.id), A = w.filter((_, C) => C < k && _.visible).length;
                return w.filter(_ => _.visible).slice(...g ? [A + 1] : [0, A]).reduce((_, C) => _ + (C.height || 0) + b, 0)
            }, [r]);
        return S.useEffect(() => {
            r.forEach(d => {
                if (d.dismissed) i(d.id, d.removeDelay);
                else {
                    let c = o.get(d.id);
                    c && (clearTimeout(c), o.delete(d.id))
                }
            })
        }, [r, i]), {
            toasts: r,
            handlers: {
                updateHeight: h,
                startPause: m,
                endPause: u,
                calculateOffset: f
            }
        }
    },
    Ki = Te `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    Ji = Te `
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    ea = Te `
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    ta = Ce("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ki} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ji} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ea} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, ra = Te `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, na = Ce("div")
`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ra} 1s linear infinite;
`, oa = Te `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, ia = Te `
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, aa = Ce("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oa} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ia} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, sa = Ce("div")
`
  position: absolute;
`, la = Ce("div")
`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, ca = Te `
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, ua = Ce("div")
`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ca} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, da = ({
    toast: e
}) => {
    let {
        icon: t,
        type: r,
        iconTheme: n
    } = e;
    return t !== void 0 ? typeof t == "string" ? S.createElement(ua, null, t) : t : r === "blank" ? null : S.createElement(la, null, S.createElement(na, { ...n
    }), r !== "loading" && S.createElement(sa, null, r === "error" ? S.createElement(ta, { ...n
    }) : S.createElement(aa, { ...n
    })))
}, fa = e => `
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, pa = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`, ma = "0%{opacity:0;} 100%{opacity:1;}", ha = "0%{opacity:1;} 100%{opacity:0;}", ga = Ce("div")
`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, va = Ce("div")
`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, ba = (e, t) => {
    let r = e.includes("top") ? 1 : -1,
        [n, o] = _n() ? [ma, ha] : [fa(r), pa(r)];
    return {
        animation: t ? `${Te(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Te(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
}, ya = S.memo(({
    toast: e,
    position: t,
    style: r,
    children: n
}) => {
    let o = e.height ? ba(e.position || t || "top-center", e.visible) : {
            opacity: 0
        },
        i = S.createElement(da, {
            toast: e
        }),
        l = S.createElement(va, { ...e.ariaProps
        }, Et(e.message, e));
    return S.createElement(ga, {
        className: e.className,
        style: { ...o,
            ...r,
            ...e.style
        }
    }, typeof n == "function" ? n({
        icon: i,
        message: l
    }) : S.createElement(S.Fragment, null, i, l))
});
Fi(S.createElement);
var xa = ({
        id: e,
        className: t,
        style: r,
        onHeightUpdate: n,
        children: o
    }) => {
        let i = S.useCallback(l => {
            if (l) {
                let m = () => {
                    let h = l.getBoundingClientRect().height;
                    n(e, h)
                };
                m(), new MutationObserver(m).observe(l, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                })
            }
        }, [e, n]);
        return S.createElement("div", {
            ref: i,
            className: t,
            style: r
        }, o)
    },
    wa = (e, t) => {
        let r = e.includes("top"),
            n = r ? {
                top: 0
            } : {
                bottom: 0
            },
            o = e.includes("center") ? {
                justifyContent: "center"
            } : e.includes("right") ? {
                justifyContent: "flex-end"
            } : {};
        return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: _n() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t*(r?1:-1)}px)`,
            ...n,
            ...o
        }
    },
    ka = St `
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    ht = 16,
    ts = ({
        reverseOrder: e,
        position: t = "top-center",
        toastOptions: r,
        gutter: n,
        children: o,
        toasterId: i,
        containerStyle: l,
        containerClassName: m
    }) => {
        let {
            toasts: h,
            handlers: u
        } = Qi(r, i);
        return S.createElement("div", {
            "data-rht-toaster": i || "",
            style: {
                position: "fixed",
                zIndex: 9999,
                top: ht,
                left: ht,
                right: ht,
                bottom: ht,
                pointerEvents: "none",
                ...l
            },
            className: m,
            onMouseEnter: u.startPause,
            onMouseLeave: u.endPause
        }, h.map(f => {
            let d = f.position || t,
                c = u.calculateOffset(f, {
                    reverseOrder: e,
                    gutter: n,
                    defaultPosition: t
                }),
                g = wa(d, c);
            return S.createElement(xa, {
                id: f.id,
                key: f.id,
                onHeightUpdate: u.updateHeight,
                className: f.visible ? ka : "",
                style: g
            }, f.type === "custom" ? Et(f.message, f) : o ? o(f) : S.createElement(ya, {
                toast: f,
                position: d
            }))
        }))
    },
    rs = ce;
const Wr = [{
        illustration: Wt.hands_touching,
        text: ({
            name: e
        }) => `Hang in there${e?`, ${e}`:""}`
    }, {
        illustration: Wt.hands_up,
        text: ({
            companyName: e
        }) => `Finding available slots for ${e?`${e}`:"you"}`
    }, {
        illustration: Wt.searching_astronaut,
        text: () => "Going all the way to Mars and back..."
    }],
    ns = e => {
        const [t, r] = S.useState(0);
        return S.useEffect(() => {
            const o = setInterval(() => {
                r(i => (i + 1) % 3)
            }, 3e3);
            return () => clearInterval(o)
        }, []), U.jsxs("div", {
            className: "flex h-full w-full flex-col items-center justify-center",
            children: [U.jsx("div", {
                className: "relative grid aspect-square max-h-full w-[400px] max-w-full overflow-hidden",
                children: Wr.map(({
                    illustration: n
                }, o) => {
                    const i = o === t;
                    return U.jsx("div", {
                        className: de("inset-0 col-start-1 row-start-1 grid size-full align-bottom transition-all", i ? "opacity-100" : "opacity-0"),
                        children: U.jsx(Ci, {
                            variant: n,
                            trigger: "infinite",
                            className: "mt-auto size-full max-h-full max-w-full",
                            width: 400,
                            height: 400,
                            duration: 3
                        })
                    }, o)
                })
            }), U.jsxs("div", {
                className: "flex w-full flex-col items-center",
                children: [U.jsx(Po, {
                    children: "One final step"
                }), U.jsx("div", {
                    className: "relative grid w-full max-w-[468px] min-w-[min(468px,100%)]",
                    children: Wr.map(({
                        text: n
                    }, o) => {
                        const i = o === t;
                        return U.jsx(Qt, {
                            level: "h4",
                            className: de("inset-0 col-start-1 row-start-1 size-full text-center transition-all", i ? "animate-slide-down-appearing opacity-100" : "opacity-0"),
                            children: n(e)
                        }, o)
                    })
                })]
            })]
        })
    },
    os = ({
        content: e,
        children: t
    }) => {
        const [r, n] = S.useState(!1), o = S.useRef(null), i = S.useRef(null), l = S.useRef(null), m = S.useRef(null), h = S.useRef(null), u = 300, f = () => {
            o.current = setTimeout(() => {
                n(!0)
            }, u)
        }, d = () => {
            o.current && (clearTimeout(o.current), o.current = null), n(!1)
        }, c = () => {
            if (i.current && h.current && l.current && m.current) {
                const g = i.current.getBoundingClientRect(),
                    {
                        top: b,
                        left: x,
                        right: w
                    } = g,
                    k = 40;
                if (x < 0 + k) i.current.style.left = "0px";
                else if (w + k > window.innerWidth) {
                    const A = w + k - window.innerWidth;
                    i.current.style.right = `${A}px`
                }
                b < 0 && (h.current.style.top = "unset", h.current.style.bottom = "0", h.current.style.transform = "translateY(calc(100%))", m.current.style.display = "none", l.current.style.display = "block")
            }
        };
        return S.useEffect(() => {
            const g = () => {
                r && c()
            };
            return g(), window.addEventListener("resize", g), () => {
                window.removeEventListener("resize", g)
            }
        }, [r]), U.jsxs("div", {
            onMouseEnter: f,
            onMouseLeave: d,
            className: "relative inline-flex w-full flex-col items-center",
            children: [r ? U.jsx("div", {
                ref: h,
                className: "absolute top-0 left-0 z-999999 mx-auto flex w-full [transform:translateY(calc(-100%))] items-center justify-center gap-0",
                children: U.jsxs("div", {
                    className: "text-black-500 mx-auto flex w-full flex-col items-center justify-center",
                    children: [U.jsx(Rn, {
                        ref: l,
                        style: {
                            marginBottom: "-7px",
                            display: "none",
                            color: "white"
                        }
                    }), U.jsx("div", {
                        ref: i,
                        className: "bg-white-100 text-black-500 relative max-w-[580px] rounded-md p-6 text-base font-normal",
                        children: e
                    }), U.jsx(Ln, {
                        ref: m,
                        style: {
                            marginTop: "-7px",
                            color: "white"
                        }
                    })]
                })
            }) : null, t]
        })
    },
    Ln = S.forwardRef((e, t) => U.jsx("svg", {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        ...e,
        children: U.jsxs("g", {
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            children: [U.jsx("path", {
                d: "M0 0h24v24H0z"
            }), U.jsx("path", {
                fill: "currentColor",
                d: "M20.118 3H3.893A2.914 2.914 0 0 0 1.39 7.371L9.506 20.92a2.917 2.917 0 0 0 4.987.005l8.11-13.539A2.914 2.914 0 0 0 20.117 3z"
            })]
        })
    }));
Ln.displayName = "TriangleInvertedFilled";
const Rn = S.forwardRef((e, t) => U.jsx("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...e,
    children: U.jsxs("g", {
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        children: [U.jsx("path", {
            d: "M0 0h24v24H0z"
        }), U.jsx("path", {
            fill: "currentColor",
            d: "M12 1.67a2.914 2.914 0 0 0-2.492 1.403L1.398 16.61a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503-4.371L14.494 3.078A2.917 2.917 0 0 0 12 1.67"
        })]
    })
}));
Rn.displayName = "TriangleFilled";
var $t = {},
    gt = {},
    Ut = {
        exports: {}
    };
var $r;

function At() {
    return $r || ($r = 1, (function(e) {
        (function() {
            var t = !!(typeof window < "u" && window.document && window.document.createElement),
                r = {
                    canUseDOM: t,
                    canUseWorkers: typeof Worker < "u",
                    canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
                    canUseViewport: t && !!window.screen
                };
            e.exports ? e.exports = r : window.ExecutionEnvironment = r
        })()
    })(Ut)), Ut.exports
}
var Je = {},
    le = {},
    Ur;

function Ot() {
    if (Ur) return le;
    Ur = 1, Object.defineProperty(le, "__esModule", {
        value: !0
    }), le.pipe = le.listenerOptions = void 0, le.preventTouchMove = t, le.allowTouchMove = r, le.preventInertiaScroll = n, le.isTouchDevice = o, le.camelToKebab = i, le.parse = l, le.getPadding = h, le.getWindowHeight = u, le.getDocumentHeight = f, le.makeStyleTag = d, le.injectStyles = c, le.insertStyleTag = g;
    var e = At();
    le.listenerOptions = {
        capture: !1,
        passive: !1
    };

    function t(b) {
        return b.preventDefault(), !1
    }

    function r(b) {
        var x = b.currentTarget;
        return x.scrollHeight > x.clientHeight ? (b.stopPropagation(), !0) : (b.preventDefault(), !1)
    }

    function n() {
        var b = this.scrollTop,
            x = this.scrollHeight,
            w = b + this.offsetHeight;
        b === 0 ? this.scrollTop = 1 : w === x && (this.scrollTop = b - 1)
    }

    function o() {
        return e.canUseDOM ? "ontouchstart" in window || navigator.maxTouchPoints : !1
    }

    function i(b) {
        return b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }

    function l(b) {
        return isNaN(b) ? b : b + "px"
    }
    var m = function(x, w) {
        return function() {
            return w(x.apply(void 0, arguments))
        }
    };
    le.pipe = function() {
        for (var x = arguments.length, w = Array(x), k = 0; k < x; k++) w[k] = arguments[k];
        return w.reduce(m)
    };

    function h() {
        if (!e.canUseDOM) return 0;
        var b = parseInt(window.getComputedStyle(document.body).paddingRight, 10),
            x = window.innerWidth - document.documentElement.clientWidth;
        return b + x
    }

    function u() {
        var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        if (e.canUseDOM) return window.innerHeight * b
    }

    function f() {
        if (e.canUseDOM) return document.body.clientHeight
    }

    function d() {
        if (e.canUseDOM) {
            var b = document.createElement("style");
            return b.type = "text/css", b.setAttribute("data-react-scrolllock", ""), b
        }
    }

    function c(b, x) {
        e.canUseDOM && (b.styleSheet ? b.styleSheet.cssText = x : b.appendChild(document.createTextNode(x)))
    }

    function g(b) {
        if (e.canUseDOM) {
            var x = document.head || document.getElementsByTagName("head")[0];
            x.appendChild(b)
        }
    }
    return le
}
var Fr;

function Dn() {
    if (Fr) return Je;
    Fr = 1, Object.defineProperty(Je, "__esModule", {
        value: !0
    }), Je.TouchScrollable = void 0;
    var e = Object.assign || function(u) {
            for (var f = 1; f < arguments.length; f++) {
                var d = arguments[f];
                for (var c in d) Object.prototype.hasOwnProperty.call(d, c) && (u[c] = d[c])
            }
            return u
        },
        t = (function() {
            function u(f, d) {
                for (var c = 0; c < d.length; c++) {
                    var g = d[c];
                    g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(f, g.key, g)
                }
            }
            return function(f, d, c) {
                return d && u(f.prototype, d), c && u(f, c), f
            }
        })(),
        r = Nt(),
        n = At(),
        o = Ot();

    function i(u, f) {
        var d = {};
        for (var c in u) f.indexOf(c) >= 0 || Object.prototype.hasOwnProperty.call(u, c) && (d[c] = u[c]);
        return d
    }

    function l(u, f) {
        if (!(u instanceof f)) throw new TypeError("Cannot call a class as a function")
    }

    function m(u, f) {
        if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return f && (typeof f == "object" || typeof f == "function") ? f : u
    }

    function h(u, f) {
        if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof f);
        u.prototype = Object.create(f && f.prototype, {
            constructor: {
                value: u,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(u, f) : u.__proto__ = f)
    }
    return Je.TouchScrollable = (function(u) {
        h(f, u);

        function f() {
            var d, c, g, b;
            l(this, f);
            for (var x = arguments.length, w = Array(x), k = 0; k < x; k++) w[k] = arguments[k];
            return b = (c = (g = m(this, (d = f.__proto__ || Object.getPrototypeOf(f)).call.apply(d, [this].concat(w))), g), g.getScrollableArea = function(A) {
                g.scrollableArea = A
            }, c), m(g, b)
        }
        return t(f, [{
            key: "componentDidMount",
            value: function() {
                n.canUseEventListeners && (this.scrollableArea.addEventListener("touchstart", o.preventInertiaScroll, o.listenerOptions), this.scrollableArea.addEventListener("touchmove", o.allowTouchMove, o.listenerOptions))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                n.canUseEventListeners && (this.scrollableArea.removeEventListener("touchstart", o.preventInertiaScroll, o.listenerOptions), this.scrollableArea.removeEventListener("touchmove", o.allowTouchMove, o.listenerOptions))
            }
        }, {
            key: "render",
            value: function() {
                var c = this.props,
                    g = c.children,
                    b = i(c, ["children"]);
                return typeof g == "function" ? g(this.getScrollableArea) : (0, r.cloneElement)(g, e({
                    ref: this.getScrollableArea
                }, b))
            }
        }]), f
    })(r.PureComponent), Je
}
var vt = {},
    Gr;

function Ea() {
    if (Gr) return vt;
    Gr = 1, Object.defineProperty(vt, "__esModule", {
        value: !0
    });
    var e = (function() {
        function u(f, d) {
            for (var c = 0; c < d.length; c++) {
                var g = d[c];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(f, g.key, g)
            }
        }
        return function(f, d, c) {
            return d && u(f.prototype, d), c && u(f, c), f
        }
    })();
    vt.default = h;
    var t = Nt(),
        r = o(t),
        n = Ot();

    function o(u) {
        return u && u.__esModule ? u : {
            default: u
        }
    }

    function i(u, f) {
        if (!(u instanceof f)) throw new TypeError("Cannot call a class as a function")
    }

    function l(u, f) {
        if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return f && (typeof f == "object" || typeof f == "function") ? f : u
    }

    function m(u, f) {
        if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof f);
        u.prototype = Object.create(f && f.prototype, {
            constructor: {
                value: u,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(u, f) : u.__proto__ = f)
    }

    function h(u) {
        return (function(f) {
            m(d, f);

            function d() {
                var c, g, b, x;
                i(this, d);
                for (var w = arguments.length, k = Array(w), A = 0; A < w; A++) k[A] = arguments[A];
                return x = (g = (b = l(this, (c = d.__proto__ || Object.getPrototypeOf(d)).call.apply(c, [this].concat(k))), b), b.addSheet = function() {
                    var _ = b.getStyles(),
                        C = (0, n.makeStyleTag)();
                    C && ((0, n.injectStyles)(C, _), (0, n.insertStyleTag)(C), b.sheet = C)
                }, b.getStyles = function() {
                    var _ = b.props.accountForScrollbars,
                        C = (0, n.getDocumentHeight)(),
                        $ = _ ? (0, n.getPadding)() : null,
                        V = `body {
        box-sizing: border-box !important;
        overflow: hidden !important;
        position: relative !important;
        ` + (C ? "height: " + C + "px !important;" : "") + `
        ` + ($ ? "padding-right: " + $ + "px !important;" : "") + `
      }`;
                    return V
                }, g), l(b, x)
            }
            return e(d, [{
                key: "componentDidMount",
                value: function() {
                    this.addSheet()
                }
            }, {
                key: "removeSheet",
                value: function() {
                    this.sheet && (this.sheet.parentNode.removeChild(this.sheet), this.sheet = null)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.removeSheet()
                }
            }, {
                key: "render",
                value: function() {
                    return r.default.createElement(u, this.props)
                }
            }]), d
        })(t.PureComponent)
    }
    return vt
}
var bt = {},
    Vr;

function Na() {
    if (Vr) return bt;
    Vr = 1, Object.defineProperty(bt, "__esModule", {
        value: !0
    });
    var e = (function() {
        function f(d, c) {
            for (var g = 0; g < c.length; g++) {
                var b = c[g];
                b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(d, b.key, b)
            }
        }
        return function(d, c, g) {
            return c && f(d.prototype, c), g && f(d, g), d
        }
    })();
    bt.default = u;
    var t = Nt(),
        r = i(t),
        n = At(),
        o = Ot();

    function i(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }

    function l(f, d) {
        if (!(f instanceof d)) throw new TypeError("Cannot call a class as a function")
    }

    function m(f, d) {
        if (!f) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return d && (typeof d == "object" || typeof d == "function") ? d : f
    }

    function h(f, d) {
        if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
        f.prototype = Object.create(d && d.prototype, {
            constructor: {
                value: f,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), d && (Object.setPrototypeOf ? Object.setPrototypeOf(f, d) : f.__proto__ = d)
    }

    function u(f) {
        return (function(d) {
            h(c, d);

            function c() {
                return l(this, c), m(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments))
            }
            return e(c, [{
                key: "componentDidMount",
                value: function() {
                    !n.canUseDOM || !(0, o.isTouchDevice)() || document.addEventListener("touchmove", o.preventTouchMove, o.listenerOptions)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    !n.canUseDOM || !(0, o.isTouchDevice)() || document.removeEventListener("touchmove", o.preventTouchMove, o.listenerOptions)
                }
            }, {
                key: "render",
                value: function() {
                    return r.default.createElement(f, this.props)
                }
            }]), c
        })(t.PureComponent)
    }
    return bt
}
var qr;

function _a() {
    if (qr) return gt;
    qr = 1, Object.defineProperty(gt, "__esModule", {
        value: !0
    });
    var e = (function() {
            function A(_, C) {
                for (var $ = 0; $ < C.length; $++) {
                    var V = C[$];
                    V.enumerable = V.enumerable || !1, V.configurable = !0, "value" in V && (V.writable = !0), Object.defineProperty(_, V.key, V)
                }
            }
            return function(_, C, $) {
                return C && A(_.prototype, C), $ && A(_, $), _
            }
        })(),
        t = Nt(),
        r = f(t),
        n = At(),
        o = Dn(),
        i = Ea(),
        l = f(i),
        m = Na(),
        h = f(m),
        u = Ot();

    function f(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

    function d(A, _) {
        if (!(A instanceof _)) throw new TypeError("Cannot call a class as a function")
    }

    function c(A, _) {
        if (!A) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _ && (typeof _ == "object" || typeof _ == "function") ? _ : A
    }

    function g(A, _) {
        if (typeof _ != "function" && _ !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof _);
        A.prototype = Object.create(_ && _.prototype, {
            constructor: {
                value: A,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(A, _) : A.__proto__ = _)
    }
    var b = (function(A) {
            g(_, A);

            function _() {
                return d(this, _), c(this, (_.__proto__ || Object.getPrototypeOf(_)).apply(this, arguments))
            }
            return e(_, [{
                key: "componentDidMount",
                value: function() {
                    n.canUseDOM && (this.initialHeight = window.innerHeight)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var $ = window.innerHeight - this.initialHeight;
                    $ && window.scrollTo(0, window.pageYOffset + $), this.initialHeight = window.innerHeight
                }
            }, {
                key: "render",
                value: function() {
                    var $ = this.props.children;
                    return $ ? r.default.createElement(o.TouchScrollable, null, $) : null
                }
            }]), _
        })(t.PureComponent),
        x = (0, u.pipe)(h.default, l.default),
        w = x(b),
        k = function(_) {
            return _.isActive ? r.default.createElement(w, _) : _.children
        };
    return k.defaultProps = {
        accountForScrollbars: !0,
        children: null,
        isActive: !0
    }, gt.default = k, gt
}
var Br;

function Sa() {
    return Br || (Br = 1, (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = _a();
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return n(t).default
            }
        });
        var r = Dn();
        Object.defineProperty(e, "TouchScrollable", {
            enumerable: !0,
            get: function() {
                return r.TouchScrollable
            }
        });

        function n(o) {
            return o && o.__esModule ? o : {
                default: o
            }
        }
    })($t)), $t
}
var Ta = Sa();
const is = Hr(Ta);
export {
    dt as $, Ci as A, fn as B, gn as C, Ka as D, ja as E, ts as F, za as G, Qt as H, _t as I, Ma as J, Uo as K, Za as L, yn as M, Sr as N, Ya as O, gi as P, mi as Q, kn as R, Po as S, pn as T, Xa as U, si as V, Ha as W, hi as X, os as Y, Ta as Z, pi as _, di as a, Co as a0, Io as a1, Wa as a2, Tr as a3, Ua as a4, Ct as a5, Ar as a6, Va as a7, $a as a8, qa as a9, Ga as aa, Bt as ab, Fa as ac, Ba as ad, Oi as ae, rt as b, de as c, tt as d, Qo as e, Pa as f, es as g, is as h, Ja as i, ze as j, ns as k, Wt as l, $n as m, ce as n, vn as o, ui as p, ai as q, Kt as r, fi as s, bn as t, qo as u, Bo as v, kt as w, vi as x, Qa as y, rs as z
};