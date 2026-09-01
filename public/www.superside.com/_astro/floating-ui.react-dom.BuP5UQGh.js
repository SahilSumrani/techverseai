import {
    r as L
} from "./index.CtKCFvq0.js";
import {
    e as Zt
} from "./index.BwDjtkKo.js";
const Nt = ["top", "right", "bottom", "left"],
    Ct = ["start", "end"],
    Pt = Nt.reduce((t, e) => t.concat(e, e + "-" + Ct[0], e + "-" + Ct[1]), []),
    K = Math.min,
    W = Math.max,
    st = Math.round,
    it = Math.floor,
    j = t => ({
        x: t,
        y: t
    }),
    te = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

function xt(t, e, n) {
    return W(t, K(e, n))
}

function X(t, e) {
    return "function" == typeof t ? t(e) : t
}

function N(t) {
    return t.split("-")[0]
}

function _(t) {
    return t.split("-")[1]
}

function vt(t) {
    return "x" === t ? "y" : "x"
}

function bt(t) {
    return "y" === t ? "height" : "width"
}

function I(t) {
    const e = t[0];
    return "t" === e || "b" === e ? "y" : "x"
}

function Rt(t) {
    return vt(I(t))
}

function Ht(t, e, n) {
    void 0 === n && (n = !1);
    const o = _(t),
        r = Rt(t),
        i = bt(r);
    let l = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
    return e.reference[i] > e.floating[i] && (l = lt(l)), [l, lt(l)]
}

function ee(t) {
    const e = lt(t);
    return [ct(t), e, ct(e)]
}

function ct(t) {
    return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start")
}
const Et = ["left", "right"],
    Lt = ["right", "left"],
    ne = ["top", "bottom"],
    oe = ["bottom", "top"];

function ie(t, e, n) {
    switch (t) {
        case "top":
        case "bottom":
            return n ? e ? Lt : Et : e ? Et : Lt;
        case "left":
        case "right":
            return e ? ne : oe;
        default:
            return []
    }
}

function re(t, e, n, o) {
    const r = _(t);
    let i = ie(N(t), "start" === n, o);
    return r && (i = i.map(t => t + "-" + r), e && (i = i.concat(i.map(ct)))), i
}

function lt(t) {
    const e = N(t);
    return te[e] + t.slice(e.length)
}

function se(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}

function Vt(t) {
    return "number" != typeof t ? se(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}

function ft(t) {
    const {
        x: e,
        y: n,
        width: o,
        height: r
    } = t;
    return {
        width: o,
        height: r,
        top: n,
        left: e,
        right: e + o,
        bottom: n + r,
        x: e,
        y: n
    }
}

function Dt(t, e, n) {
    let {
        reference: o,
        floating: r
    } = t;
    const i = I(e),
        l = Rt(e),
        s = bt(l),
        c = N(e),
        a = "y" === i,
        f = o.x + o.width / 2 - r.width / 2,
        u = o.y + o.height / 2 - r.height / 2,
        d = o[s] / 2 - r[s] / 2;
    let m;
    switch (c) {
        case "top":
            m = {
                x: f,
                y: o.y - r.height
            };
            break;
        case "bottom":
            m = {
                x: f,
                y: o.y + o.height
            };
            break;
        case "right":
            m = {
                x: o.x + o.width,
                y: u
            };
            break;
        case "left":
            m = {
                x: o.x - r.width,
                y: u
            };
            break;
        default:
            m = {
                x: o.x,
                y: o.y
            }
    }
    switch (_(e)) {
        case "start":
            m[l] -= d * (n && a ? -1 : 1);
            break;
        case "end":
            m[l] += d * (n && a ? -1 : 1)
    }
    return m
}
async function zt(t, e) {
    var n;
    void 0 === e && (e = {});
    const {
        x: o,
        y: r,
        platform: i,
        rects: l,
        elements: s,
        strategy: c
    } = t, {
        boundary: a = "clippingAncestors",
        rootBoundary: f = "viewport",
        elementContext: u = "floating",
        altBoundary: d = !1,
        padding: m = 0
    } = X(e, t), p = Vt(m), h = s[d ? "floating" === u ? "reference" : "floating" : u], g = ft(await i.getClippingRect({
        element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
        boundary: a,
        rootBoundary: f,
        strategy: c
    })), y = "floating" === u ? {
        x: o,
        y: r,
        width: l.floating.width,
        height: l.floating.height
    } : l.reference, w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), x = await (null == i.isElement ? void 0 : i.isElement(w)) && await (null == i.getScale ? void 0 : i.getScale(w)) || {
        x: 1,
        y: 1
    }, v = ft(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: y,
        offsetParent: w,
        strategy: c
    }) : y);
    return {
        top: (g.top - v.top + p.top) / x.y,
        bottom: (v.bottom - g.bottom + p.bottom) / x.y,
        left: (g.left - v.left + p.left) / x.x,
        right: (v.right - g.right + p.right) / x.x
    }
}
const ce = 50,
    le = async (t, e, n) => {
        const {
            placement: o = "bottom",
            strategy: r = "absolute",
            middleware: i = [],
            platform: l
        } = n, s = l.detectOverflow ? l : { ...l,
            detectOverflow: zt
        }, c = await (null == l.isRTL ? void 0 : l.isRTL(e));
        let a = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
            }),
            {
                x: f,
                y: u
            } = Dt(a, o, c),
            d = o,
            m = 0;
        const p = {};
        for (let n = 0; n < i.length; n++) {
            const h = i[n];
            if (!h) continue;
            const {
                name: g,
                fn: y
            } = h, {
                x: w,
                y: x,
                data: v,
                reset: b
            } = await y({
                x: f,
                y: u,
                initialPlacement: o,
                placement: d,
                strategy: r,
                middlewareData: p,
                rects: a,
                platform: s,
                elements: {
                    reference: t,
                    floating: e
                }
            });
            f = w ? ? f, u = x ? ? u, p[g] = { ...p[g],
                ...v
            }, b && m < 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (a = !0 === b.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: r
            }) : b.rects), ({
                x: f,
                y: u
            } = Dt(a, d, c))), n = -1)
        }
        return {
            x: f,
            y: u,
            placement: d,
            strategy: r,
            middlewareData: p
        }
    },
    fe = t => ({
        name: "arrow",
        options: t,
        async fn(e) {
            const {
                x: n,
                y: o,
                placement: r,
                rects: i,
                platform: l,
                elements: s,
                middlewareData: c
            } = e, {
                element: a,
                padding: f = 0
            } = X(t, e) || {};
            if (null == a) return {};
            const u = Vt(f),
                d = {
                    x: n,
                    y: o
                },
                m = Rt(r),
                p = bt(m),
                h = await l.getDimensions(a),
                g = "y" === m,
                y = g ? "top" : "left",
                w = g ? "bottom" : "right",
                x = g ? "clientHeight" : "clientWidth",
                v = i.reference[p] + i.reference[m] - d[m] - i.floating[p],
                b = d[m] - i.reference[m],
                L = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(a));
            let R = L ? L[x] : 0;
            (!R || !await (null == l.isElement ? void 0 : l.isElement(L))) && (R = s.floating[x] || i.floating[p]);
            const A = v / 2 - b / 2,
                O = R / 2 - h[p] / 2 - 1,
                T = K(u[y], O),
                S = K(u[w], O),
                D = T,
                E = R - h[p] - S,
                P = R / 2 - h[p] / 2 + A,
                H = xt(D, P, E),
                W = !c.arrow && null != _(r) && P !== H && i.reference[p] / 2 - (P < D ? T : S) - h[p] / 2 < 0,
                C = W ? P < D ? P - D : P - E : 0;
            return {
                [m]: d[m] + C,
                data: {
                    [m]: H,
                    centerOffset: P - H - C,
                    ...W && {
                        alignmentOffset: C
                    }
                },
                reset: W
            }
        }
    });

function ae(t, e, n) {
    return (t ? [...n.filter(e => _(e) === t), ...n.filter(e => _(e) !== t)] : n.filter(t => N(t) === t)).filter(n => !t || (_(n) === t || !!e && ct(n) !== n))
}
const ue = function(t) {
        return void 0 === t && (t = {}), {
            name: "autoPlacement",
            options: t,
            async fn(e) {
                var n, o, r;
                const {
                    rects: i,
                    middlewareData: l,
                    placement: s,
                    platform: c,
                    elements: a
                } = e, {
                    crossAxis: f = !1,
                    alignment: u,
                    allowedPlacements: d = Pt,
                    autoAlignment: m = !0,
                    ...p
                } = X(t, e), h = void 0 !== u || d === Pt ? ae(u || null, m, d) : d, g = await c.detectOverflow(e, p), y = (null == (n = l.autoPlacement) ? void 0 : n.index) || 0, w = h[y];
                if (null == w) return {};
                const x = Ht(w, i, await (null == c.isRTL ? void 0 : c.isRTL(a.floating)));
                if (s !== w) return {
                    reset: {
                        placement: h[0]
                    }
                };
                const v = [g[N(w)], g[x[0]], g[x[1]]],
                    b = [...(null == (o = l.autoPlacement) ? void 0 : o.overflows) || [], {
                        placement: w,
                        overflows: v
                    }],
                    L = h[y + 1];
                if (L) return {
                    data: {
                        index: y + 1,
                        overflows: b
                    },
                    reset: {
                        placement: L
                    }
                };
                const R = b.map(t => {
                        const e = _(t.placement);
                        return [t.placement, e && f ? t.overflows.slice(0, 2).reduce((t, e) => t + e, 0) : t.overflows[0], t.overflows]
                    }).sort((t, e) => t[1] - e[1]),
                    A = (null == (r = R.filter(t => t[2].slice(0, _(t[0]) ? 2 : 3).every(t => t <= 0))[0]) ? void 0 : r[0]) || R[0][0];
                return A !== s ? {
                    data: {
                        index: y + 1,
                        overflows: b
                    },
                    reset: {
                        placement: A
                    }
                } : {}
            }
        }
    },
    de = function(t) {
        return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
                var n, o;
                const {
                    placement: r,
                    middlewareData: i,
                    rects: l,
                    initialPlacement: s,
                    platform: c,
                    elements: a
                } = e, {
                    mainAxis: f = !0,
                    crossAxis: u = !0,
                    fallbackPlacements: d,
                    fallbackStrategy: m = "bestFit",
                    fallbackAxisSideDirection: p = "none",
                    flipAlignment: h = !0,
                    ...g
                } = X(t, e);
                if (null != (n = i.arrow) && n.alignmentOffset) return {};
                const y = N(r),
                    w = I(s),
                    x = N(s) === s,
                    v = await (null == c.isRTL ? void 0 : c.isRTL(a.floating)),
                    b = d || (x || !h ? [lt(s)] : ee(s)),
                    L = "none" !== p;
                !d && L && b.push(...re(s, h, p, v));
                const R = [s, ...b],
                    A = await c.detectOverflow(e, g),
                    O = [];
                let T = (null == (o = i.flip) ? void 0 : o.overflows) || [];
                if (f && O.push(A[y]), u) {
                    const t = Ht(r, l, v);
                    O.push(A[t[0]], A[t[1]])
                }
                if (T = [...T, {
                        placement: r,
                        overflows: O
                    }], !O.every(t => t <= 0)) {
                    var S, D;
                    const t = ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1,
                        e = R[t];
                    if (e && ("alignment" !== u || w === I(e) || T.every(t => I(t.placement) !== w || t.overflows[0] > 0))) return {
                        data: {
                            index: t,
                            overflows: T
                        },
                        reset: {
                            placement: e
                        }
                    };
                    let n = null == (D = T.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : D.placement;
                    if (!n) switch (m) {
                        case "bestFit":
                            {
                                var E;
                                const t = null == (E = T.filter(t => {
                                    if (L) {
                                        const e = I(t.placement);
                                        return e === w || "y" === e
                                    }
                                    return !0
                                }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : E[0];t && (n = t);
                                break
                            }
                        case "initialPlacement":
                            n = s
                    }
                    if (r !== n) return {
                        reset: {
                            placement: n
                        }
                    }
                }
                return {}
            }
        }
    };

function Tt(t, e) {
    return {
        top: t.top - e.height,
        right: t.right - e.width,
        bottom: t.bottom - e.height,
        left: t.left - e.width
    }
}

function Mt(t) {
    return Nt.some(e => t[e] >= 0)
}
const me = function(t) {
        return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
                const {
                    rects: n,
                    platform: o
                } = e, {
                    strategy: r = "referenceHidden",
                    ...i
                } = X(t, e);
                switch (r) {
                    case "referenceHidden":
                        {
                            const t = Tt(await o.detectOverflow(e, { ...i,
                                elementContext: "reference"
                            }), n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: t,
                                    referenceHidden: Mt(t)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const t = Tt(await o.detectOverflow(e, { ...i,
                                altBoundary: !0
                            }), n.floating);
                            return {
                                data: {
                                    escapedOffsets: t,
                                    escaped: Mt(t)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    It = new Set(["left", "top"]);
async function he(t, e) {
    const {
        placement: n,
        platform: o,
        elements: r
    } = t, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), l = N(n), s = _(n), c = "y" === I(n), a = It.has(l) ? -1 : 1, f = i && c ? -1 : 1, u = X(e, t);
    let {
        mainAxis: d,
        crossAxis: m,
        alignmentAxis: p
    } = "number" == typeof u ? {
        mainAxis: u,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: u.mainAxis || 0,
        crossAxis: u.crossAxis || 0,
        alignmentAxis: u.alignmentAxis
    };
    return s && "number" == typeof p && (m = "end" === s ? -1 * p : p), c ? {
        x: m * f,
        y: d * a
    } : {
        x: d * a,
        y: m * f
    }
}
const ge = function(t) {
        return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
                var n, o;
                const {
                    x: r,
                    y: i,
                    placement: l,
                    middlewareData: s
                } = e, c = await he(e, t);
                return l === (null == (n = s.offset) ? void 0 : n.placement) && null != (o = s.arrow) && o.alignmentOffset ? {} : {
                    x: r + c.x,
                    y: i + c.y,
                    data: { ...c,
                        placement: l
                    }
                }
            }
        }
    },
    pe = function(t) {
        return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
                const {
                    x: n,
                    y: o,
                    placement: r,
                    platform: i
                } = e, {
                    mainAxis: l = !0,
                    crossAxis: s = !1,
                    limiter: c = {
                        fn: t => {
                            let {
                                x: e,
                                y: n
                            } = t;
                            return {
                                x: e,
                                y: n
                            }
                        }
                    },
                    ...a
                } = X(t, e), f = {
                    x: n,
                    y: o
                }, u = await i.detectOverflow(e, a), d = I(N(r)), m = vt(d);
                let p = f[m],
                    h = f[d];
                if (l) {
                    const t = "y" === m ? "bottom" : "right";
                    p = xt(p + u["y" === m ? "top" : "left"], p, p - u[t])
                }
                if (s) {
                    const t = "y" === d ? "bottom" : "right";
                    h = xt(h + u["y" === d ? "top" : "left"], h, h - u[t])
                }
                const g = c.fn({ ...e,
                    [m]: p,
                    [d]: h
                });
                return { ...g,
                    data: {
                        x: g.x - n,
                        y: g.y - o,
                        enabled: {
                            [m]: l,
                            [d]: s
                        }
                    }
                }
            }
        }
    },
    we = function(t) {
        return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
                const {
                    x: n,
                    y: o,
                    placement: r,
                    rects: i,
                    middlewareData: l
                } = e, {
                    offset: s = 0,
                    mainAxis: c = !0,
                    crossAxis: a = !0
                } = X(t, e), f = {
                    x: n,
                    y: o
                }, u = I(r), d = vt(u);
                let m = f[d],
                    p = f[u];
                const h = X(s, e),
                    g = "number" == typeof h ? {
                        mainAxis: h,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...h
                    };
                if (c) {
                    const t = "y" === d ? "height" : "width",
                        e = i.reference[d] - i.floating[t] + g.mainAxis,
                        n = i.reference[d] + i.reference[t] - g.mainAxis;
                    m < e ? m = e : m > n && (m = n)
                }
                if (a) {
                    var y, w;
                    const t = "y" === d ? "width" : "height",
                        e = It.has(N(r)),
                        n = i.reference[u] - i.floating[t] + (e && (null == (y = l.offset) ? void 0 : y[u]) || 0) + (e ? 0 : g.crossAxis),
                        o = i.reference[u] + i.reference[t] + (e ? 0 : (null == (w = l.offset) ? void 0 : w[u]) || 0) - (e ? g.crossAxis : 0);
                    p < n ? p = n : p > o && (p = o)
                }
                return {
                    [d]: m,
                    [u]: p
                }
            }
        }
    },
    xe = function(t) {
        return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
                var n, o;
                const {
                    placement: r,
                    rects: i,
                    platform: l,
                    elements: s
                } = e, {
                    apply: c = () => {},
                    ...a
                } = X(t, e), f = await l.detectOverflow(e, a), u = N(r), d = _(r), m = "y" === I(r), {
                    width: p,
                    height: h
                } = i.floating;
                let g, y;
                "top" === u || "bottom" === u ? (g = u, y = d === (await (null == l.isRTL ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = u, g = "end" === d ? "top" : "bottom");
                const w = h - f.top - f.bottom,
                    x = p - f.left - f.right,
                    v = K(h - f[g], w),
                    b = K(p - f[y], x),
                    L = !e.middlewareData.shift;
                let R = v,
                    A = b;
                if (null != (n = e.middlewareData.shift) && n.enabled.x && (A = x), null != (o = e.middlewareData.shift) && o.enabled.y && (R = w), L && !d) {
                    const t = W(f.left, 0),
                        e = W(f.right, 0),
                        n = W(f.top, 0),
                        o = W(f.bottom, 0);
                    m ? A = p - 2 * (0 !== t || 0 !== e ? t + e : W(f.left, f.right)) : R = h - 2 * (0 !== n || 0 !== o ? n + o : W(f.top, f.bottom))
                }
                await c({ ...e,
                    availableWidth: A,
                    availableHeight: R
                });
                const O = await l.getDimensions(s.floating);
                return p !== O.width || h !== O.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function ut() {
    return typeof window < "u"
}

function et(t) {
    return jt(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function B(t) {
    var e;
    return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
}

function Y(t) {
    var e;
    return null == (e = (jt(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
}

function jt(t) {
    return !!ut() && (t instanceof Node || t instanceof B(t).Node)
}

function H(t) {
    return !!ut() && (t instanceof Element || t instanceof B(t).Element)
}

function q(t) {
    return !!ut() && (t instanceof HTMLElement || t instanceof B(t).HTMLElement)
}

function Ft(t) {
    return !(!ut() || typeof ShadowRoot > "u") && (t instanceof ShadowRoot || t instanceof B(t).ShadowRoot)
}

function ot(t) {
    const {
        overflow: e,
        overflowX: n,
        overflowY: o,
        display: r
    } = V(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && "inline" !== r && "contents" !== r
}

function ye(t) {
    return /^(table|td|th)$/.test(et(t))
}

function dt(t) {
    try {
        if (t.matches(":popover-open")) return !0
    } catch {}
    try {
        return t.matches(":modal")
    } catch {
        return !1
    }
}
const ve = /transform|translate|scale|rotate|perspective|filter/,
    be = /paint|layout|strict|content/,
    J = t => !!t && "none" !== t;
let gt;

function Ot(t) {
    const e = H(t) ? V(t) : t;
    return J(e.transform) || J(e.translate) || J(e.scale) || J(e.rotate) || J(e.perspective) || !At() && (J(e.backdropFilter) || J(e.filter)) || ve.test(e.willChange || "") || be.test(e.contain || "")
}

function Re(t) {
    let e = G(t);
    for (; q(e) && !tt(e);) {
        if (Ot(e)) return e;
        if (dt(e)) return null;
        e = G(e)
    }
    return null
}

function At() {
    return null == gt && (gt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), gt
}

function tt(t) {
    return /^(html|body|#document)$/.test(et(t))
}

function V(t) {
    return B(t).getComputedStyle(t)
}

function mt(t) {
    return H(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}

function G(t) {
    if ("html" === et(t)) return t;
    const e = t.assignedSlot || t.parentNode || Ft(t) && t.host || Y(t);
    return Ft(e) ? e.host : e
}

function Xt(t) {
    const e = G(t);
    return tt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : q(e) && ot(e) ? e : Xt(e)
}

function nt(t, e, n) {
    var o;
    void 0 === e && (e = []), void 0 === n && (n = !0);
    const r = Xt(t),
        i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
        l = B(r);
    if (i) {
        const t = yt(l);
        return e.concat(l, l.visualViewport || [], ot(r) ? r : [], t && n ? nt(t) : [])
    }
    return e.concat(r, nt(r, [], n))
}

function yt(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}

function Yt(t) {
    const e = V(t);
    let n = parseFloat(e.width) || 0,
        o = parseFloat(e.height) || 0;
    const r = q(t),
        i = r ? t.offsetWidth : n,
        l = r ? t.offsetHeight : o,
        s = st(n) !== i || st(o) !== l;
    return s && (n = i, o = l), {
        width: n,
        height: o,
        $: s
    }
}

function St(t) {
    return H(t) ? t : t.contextElement
}

function Z(t) {
    const e = St(t);
    if (!q(e)) return j(1);
    const n = e.getBoundingClientRect(),
        {
            width: o,
            height: r,
            $: i
        } = Yt(e);
    let l = (i ? st(n.width) : n.width) / o,
        s = (i ? st(n.height) : n.height) / r;
    return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
        x: l,
        y: s
    }
}
const Oe = j(0);

function qt(t) {
    const e = B(t);
    return At() && e.visualViewport ? {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    } : Oe
}

function Ae(t, e, n) {
    return void 0 === e && (e = !1), !(!n || e && n !== B(t)) && e
}

function Q(t, e, n, o) {
    void 0 === e && (e = !1), void 0 === n && (n = !1);
    const r = t.getBoundingClientRect(),
        i = St(t);
    let l = j(1);
    e && (o ? H(o) && (l = Z(o)) : l = Z(t));
    const s = Ae(i, n, o) ? qt(i) : j(0);
    let c = (r.left + s.x) / l.x,
        a = (r.top + s.y) / l.y,
        f = r.width / l.x,
        u = r.height / l.y;
    if (i) {
        const t = B(i),
            e = o && H(o) ? B(o) : o;
        let n = t,
            r = yt(n);
        for (; r && o && e !== n;) {
            const t = Z(r),
                e = r.getBoundingClientRect(),
                o = V(r),
                i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
                l = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
            c *= t.x, a *= t.y, f *= t.x, u *= t.y, c += i, a += l, n = B(r), r = yt(n)
        }
    }
    return ft({
        width: f,
        height: u,
        x: c,
        y: a
    })
}

function ht(t, e) {
    const n = mt(t).scrollLeft;
    return e ? e.left + n : Q(Y(t)).left + n
}

function Ut(t, e) {
    const n = t.getBoundingClientRect();
    return {
        x: n.left + e.scrollLeft - ht(t, n),
        y: n.top + e.scrollTop
    }
}

function Se(t) {
    let {
        elements: e,
        rect: n,
        offsetParent: o,
        strategy: r
    } = t;
    const i = "fixed" === r,
        l = Y(o),
        s = !!e && dt(e.floating);
    if (o === l || s && i) return n;
    let c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        a = j(1);
    const f = j(0),
        u = q(o);
    if ((u || !u && !i) && (("body" !== et(o) || ot(l)) && (c = mt(o)), u)) {
        const t = Q(o);
        a = Z(o), f.x = t.x + o.clientLeft, f.y = t.y + o.clientTop
    }
    const d = !l || u || i ? j(0) : Ut(l, c);
    return {
        width: n.width * a.x,
        height: n.height * a.y,
        x: n.x * a.x - c.scrollLeft * a.x + f.x + d.x,
        y: n.y * a.y - c.scrollTop * a.y + f.y + d.y
    }
}

function Ce(t) {
    return Array.from(t.getClientRects())
}

function Pe(t) {
    const e = Y(t),
        n = mt(t),
        o = t.ownerDocument.body,
        r = W(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
        i = W(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
    let l = -n.scrollLeft + ht(t);
    const s = -n.scrollTop;
    return "rtl" === V(o).direction && (l += W(e.clientWidth, o.clientWidth) - r), {
        width: r,
        height: i,
        x: l,
        y: s
    }
}
const $t = 25;

function Ee(t, e) {
    const n = B(t),
        o = Y(t),
        r = n.visualViewport;
    let i = o.clientWidth,
        l = o.clientHeight,
        s = 0,
        c = 0;
    if (r) {
        i = r.width, l = r.height;
        const t = At();
        (!t || t && "fixed" === e) && (s = r.offsetLeft, c = r.offsetTop)
    }
    const a = ht(o);
    if (a <= 0) {
        const t = o.ownerDocument,
            e = t.body,
            n = getComputedStyle(e),
            r = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
            l = Math.abs(o.clientWidth - e.clientWidth - r);
        l <= 25 && (i -= l)
    } else a <= 25 && (i += a);
    return {
        width: i,
        height: l,
        x: s,
        y: c
    }
}

function Le(t, e) {
    const n = Q(t, !0, "fixed" === e),
        o = n.top + t.clientTop,
        r = n.left + t.clientLeft,
        i = q(t) ? Z(t) : j(1);
    return {
        width: t.clientWidth * i.x,
        height: t.clientHeight * i.y,
        x: r * i.x,
        y: o * i.y
    }
}

function kt(t, e, n) {
    let o;
    if ("viewport" === e) o = Ee(t, n);
    else if ("document" === e) o = Pe(Y(t));
    else if (H(e)) o = Le(e, n);
    else {
        const n = qt(t);
        o = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
        }
    }
    return ft(o)
}

function Kt(t, e) {
    const n = G(t);
    return !(n === e || !H(n) || tt(n)) && ("fixed" === V(n).position || Kt(n, e))
}

function De(t, e) {
    const n = e.get(t);
    if (n) return n;
    let o = nt(t, [], !1).filter(t => H(t) && "body" !== et(t)),
        r = null;
    const i = "fixed" === V(t).position;
    let l = i ? G(t) : t;
    for (; H(l) && !tt(l);) {
        const e = V(l),
            n = Ot(l);
        !n && "fixed" === e.position && (r = null), (i ? !n && !r : !n && "static" === e.position && r && ("absolute" === r.position || "fixed" === r.position) || ot(l) && !n && Kt(t, l)) ? o = o.filter(t => t !== l) : r = e, l = G(l)
    }
    return e.set(t, o), o
}

function Te(t) {
    let {
        element: e,
        boundary: n,
        rootBoundary: o,
        strategy: r
    } = t;
    const i = [..."clippingAncestors" === n ? dt(e) ? [] : De(e, this._c) : [].concat(n), o],
        l = kt(e, i[0], r);
    let s = l.top,
        c = l.right,
        a = l.bottom,
        f = l.left;
    for (let t = 1; t < i.length; t++) {
        const n = kt(e, i[t], r);
        s = W(n.top, s), c = K(n.right, c), a = K(n.bottom, a), f = W(n.left, f)
    }
    return {
        width: c - f,
        height: a - s,
        x: f,
        y: s
    }
}

function Me(t) {
    const {
        width: e,
        height: n
    } = Yt(t);
    return {
        width: e,
        height: n
    }
}

function Fe(t, e, n) {
    const o = q(e),
        r = Y(e),
        i = "fixed" === n,
        l = Q(t, !0, i, e);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = j(0);

    function a() {
        c.x = ht(r)
    }
    if (o || !o && !i)
        if (("body" !== et(e) || ot(r)) && (s = mt(e)), o) {
            const t = Q(e, !0, i, e);
            c.x = t.x + e.clientLeft, c.y = t.y + e.clientTop
        } else r && a();
    i && !o && r && a();
    const f = !r || o || i ? j(0) : Ut(r, s);
    return {
        x: l.left + s.scrollLeft - c.x - f.x,
        y: l.top + s.scrollTop - c.y - f.y,
        width: l.width,
        height: l.height
    }
}

function pt(t) {
    return "static" === V(t).position
}

function Wt(t, e) {
    if (!q(t) || "fixed" === V(t).position) return null;
    if (e) return e(t);
    let n = t.offsetParent;
    return Y(t) === n && (n = n.ownerDocument.body), n
}

function Gt(t, e) {
    const n = B(t);
    if (dt(t)) return n;
    if (!q(t)) {
        let e = G(t);
        for (; e && !tt(e);) {
            if (H(e) && !pt(e)) return e;
            e = G(e)
        }
        return n
    }
    let o = Wt(t, e);
    for (; o && ye(o) && pt(o);) o = Wt(o, e);
    return o && tt(o) && pt(o) && !Ot(o) ? n : o || Re(t) || n
}
const $e = async function(t) {
    const e = this.getOffsetParent || Gt,
        n = this.getDimensions,
        o = await n(t.floating);
    return {
        reference: Fe(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: o.width,
            height: o.height
        }
    }
};

function ke(t) {
    return "rtl" === V(t).direction
}
const We = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Se,
    getDocumentElement: Y,
    getClippingRect: Te,
    getOffsetParent: Gt,
    getElementRects: $e,
    getClientRects: Ce,
    getDimensions: Me,
    getScale: Z,
    isElement: H,
    isRTL: ke
};

function Jt(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
}

function Be(t, e) {
    let n, o = null;
    const r = Y(t);

    function i() {
        var t;
        clearTimeout(n), null == (t = o) || t.disconnect(), o = null
    }
    return function l(s, c) {
        void 0 === s && (s = !1), void 0 === c && (c = 1), i();
        const a = t.getBoundingClientRect(),
            {
                left: f,
                top: u,
                width: d,
                height: m
            } = a;
        if (s || e(), !d || !m) return;
        const p = {
            rootMargin: -it(u) + "px " + -it(r.clientWidth - (f + d)) + "px " + -it(r.clientHeight - (u + m)) + "px " + -it(f) + "px",
            threshold: W(0, K(1, c)) || 1
        };
        let h = !0;

        function g(e) {
            const o = e[0].intersectionRatio;
            if (o !== c) {
                if (!h) return l();
                o ? l(!1, o) : n = setTimeout(() => {
                    l(!1, 1e-7)
                }, 1e3)
            }
            1 === o && !Jt(a, t.getBoundingClientRect()) && l(), h = !1
        }
        try {
            o = new IntersectionObserver(g, { ...p,
                root: r.ownerDocument
            })
        } catch {
            o = new IntersectionObserver(g, p)
        }
        o.observe(t)
    }(!0), i
}

function Je(t, e, n, o) {
    void 0 === o && (o = {});
    const {
        ancestorScroll: r = !0,
        ancestorResize: i = !0,
        elementResize: l = "function" == typeof ResizeObserver,
        layoutShift: s = "function" == typeof IntersectionObserver,
        animationFrame: c = !1
    } = o, a = St(t), f = r || i ? [...a ? nt(a) : [], ...e ? nt(e) : []] : [];
    f.forEach(t => {
        r && t.addEventListener("scroll", n, {
            passive: !0
        }), i && t.addEventListener("resize", n)
    });
    const u = a && s ? Be(a, n) : null;
    let d = -1,
        m = null;
    l && (m = new ResizeObserver(t => {
        let [o] = t;
        o && o.target === a && m && e && (m.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
            var t;
            null == (t = m) || t.observe(e)
        })), n()
    }), a && !c && m.observe(a), e && m.observe(e));
    let p, h = c ? Q(t) : null;
    return c && function e() {
        const o = Q(t);
        h && !Jt(h, o) && n(), h = o, p = requestAnimationFrame(e)
    }(), n(), () => {
        var t;
        f.forEach(t => {
            r && t.removeEventListener("scroll", n), i && t.removeEventListener("resize", n)
        }), u ? .(), null == (t = m) || t.disconnect(), m = null, c && cancelAnimationFrame(p)
    }
}
const Qe = zt,
    _e = ge,
    Ne = ue,
    He = pe,
    Ve = de,
    ze = xe,
    Ie = me,
    Bt = fe,
    je = we,
    Xe = (t, e, n) => {
        const o = new Map,
            r = {
                platform: We,
                ...n
            },
            i = { ...r.platform,
                _c: o
            };
        return le(t, e, { ...r,
            platform: i
        })
    };
var Ye = typeof document < "u",
    qe = function() {},
    rt = Ye ? L.useLayoutEffect : qe;

function at(t, e) {
    if (t === e) return !0;
    if (typeof t != typeof e) return !1;
    if ("function" == typeof t && t.toString() === e.toString()) return !0;
    let n, o, r;
    if (t && e && "object" == typeof t) {
        if (Array.isArray(t)) {
            if (n = t.length, n !== e.length) return !1;
            for (o = n; 0 !== o--;)
                if (!at(t[o], e[o])) return !1;
            return !0
        }
        if (r = Object.keys(t), n = r.length, n !== Object.keys(e).length) return !1;
        for (o = n; 0 !== o--;)
            if (!{}.hasOwnProperty.call(e, r[o])) return !1;
        for (o = n; 0 !== o--;) {
            const n = r[o];
            if (!("_owner" === n && t.$$typeof || at(t[n], e[n]))) return !1
        }
        return !0
    }
    return t != t && e != e
}

function Qt(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function _t(t, e) {
    const n = Qt(t);
    return Math.round(e * n) / n
}

function wt(t) {
    const e = L.useRef(t);
    return rt(() => {
        e.current = t
    }), e
}

function Ze(t) {
    void 0 === t && (t = {});
    const {
        placement: e = "bottom",
        strategy: n = "absolute",
        middleware: o = [],
        platform: r,
        elements: {
            reference: i,
            floating: l
        } = {},
        transform: s = !0,
        whileElementsMounted: c,
        open: a
    } = t, [f, u] = L.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: e,
        middlewareData: {},
        isPositioned: !1
    }), [d, m] = L.useState(o);
    at(d, o) || m(o);
    const [p, h] = L.useState(null), [g, y] = L.useState(null), w = L.useCallback(t => {
        t !== R.current && (R.current = t, h(t))
    }, []), x = L.useCallback(t => {
        t !== A.current && (A.current = t, y(t))
    }, []), v = i || p, b = l || g, R = L.useRef(null), A = L.useRef(null), O = L.useRef(f), T = null != c, S = wt(c), D = wt(r), E = wt(a), P = L.useCallback(() => {
        if (!R.current || !A.current) return;
        const t = {
            placement: e,
            strategy: n,
            middleware: d
        };
        D.current && (t.platform = D.current), Xe(R.current, A.current, t).then(t => {
            const e = { ...t,
                isPositioned: !1 !== E.current
            };
            H.current && !at(O.current, e) && (O.current = e, Zt.flushSync(() => {
                u(e)
            }))
        })
    }, [d, e, n, D, E]);
    rt(() => {
        !1 === a && O.current.isPositioned && (O.current.isPositioned = !1, u(t => ({ ...t,
            isPositioned: !1
        })))
    }, [a]);
    const H = L.useRef(!1);
    rt(() => (H.current = !0, () => {
        H.current = !1
    }), []), rt(() => {
        if (v && (R.current = v), b && (A.current = b), v && b) {
            if (S.current) return S.current(v, b, P);
            P()
        }
    }, [v, b, P, S, T]);
    const W = L.useMemo(() => ({
            reference: R,
            floating: A,
            setReference: w,
            setFloating: x
        }), [w, x]),
        C = L.useMemo(() => ({
            reference: v,
            floating: b
        }), [v, b]),
        B = L.useMemo(() => {
            const t = {
                position: n,
                left: 0,
                top: 0
            };
            if (!C.floating) return t;
            const e = _t(C.floating, f.x),
                o = _t(C.floating, f.y);
            return s ? { ...t,
                transform: "translate(" + e + "px, " + o + "px)",
                ...Qt(C.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: e,
                top: o
            }
        }, [n, s, C.floating, f.x, f.y]);
    return L.useMemo(() => ({ ...f,
        update: P,
        refs: W,
        elements: C,
        floatingStyles: B
    }), [f, P, W, C, B])
}
const Ue = t => ({
        name: "arrow",
        options: t,
        fn(e) {
            const {
                element: n,
                padding: o
            } = "function" == typeof t ? t(e) : t;
            return n && function(t) {
                return {}.hasOwnProperty.call(t, "current")
            }(n) ? null != n.current ? Bt({
                element: n.current,
                padding: o
            }).fn(e) : {} : n ? Bt({
                element: n,
                padding: o
            }).fn(e) : {}
        }
    }),
    tn = (t, e) => {
        const n = _e(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    en = (t, e) => {
        const n = He(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    nn = (t, e) => ({
        fn: je(t).fn,
        options: [t, e]
    }),
    on = (t, e) => {
        const n = Ve(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    rn = (t, e) => {
        const n = ze(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    sn = (t, e) => {
        const n = Ne(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    cn = (t, e) => {
        const n = Ie(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    ln = (t, e) => {
        const n = Ue(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    };
export {
    rn as a, ln as b, Je as c, sn as d, Qe as e, on as f, cn as h, nn as l, tn as o, en as s, Ze as u
};