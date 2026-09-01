import {
    j as h
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as f
} from "./index.CtKCFvq0.js";
import {
    c as b
} from "./index.BwDjtkKo.js";
import {
    M as S
} from "./Marquee.EiXXesq1.js";
import {
    s as N,
    g as R
} from "./VideoAsset.ZXCa1LyB.js";
const q = (e, r) => {
        if (r <= 0) throw new Error("Size must be greater than 0");
        if (0 === e.length) return Array(r).fill([]);
        if (r >= e.length) return e.map(e => [e]).concat(Array(r - e.length).fill([]));
        const t = Math.floor(e.length / r),
            s = e.length % r,
            n = [];
        let a = 0;
        for (let o = 0; o < r; o++) {
            const r = t + (o < s ? 1 : 0);
            n.push(e.slice(a, a + r)), a += r
        }
        return n
    },
    O = 4,
    B = e => {
        const {
            items: r,
            renderItem: t,
            className: s,
            containerClassName: n,
            reverse: a = !1,
            rows: o = {
                sm: 1
            },
            itemClassName: l,
            minItemsPerRow: m = O,
            marqueeProps: i = {},
            rowClassName: c,
            hideOnEmpty: u = !0
        } = e, p = f.useMemo(() => {
            const e = r.length;
            return e < m ? 1 : Math.floor(e / m)
        }, [r.length, m]), d = f.useMemo(() => {
            if (!o || "object" != typeof o) return {
                sm: 1
            };
            const e = { ...o,
                sm: o.sm ? ? 1
            };
            return Object.fromEntries(N(e).map(([e, r]) => {
                const t = Number.isFinite(r) ? Math.floor(r) : 1;
                return [e, Math.max(1, Math.min(p, t))]
            }))
        }, [o, p]), j = f.useMemo(() => d && "object" == typeof d ? Math.max(...Object.values(d).filter(Number)) : 1, [d]), M = f.useMemo(() => {
            const e = r.map((e, r) => r),
                t = [...new Set(N(d).map(([, e]) => e))];
            return new Map(t.map(r => [r, q(e, r)]))
        }, [r, d]), x = e => "function" == typeof l ? l(e) : l || "", y = e => a ? e % 2 == 0 ? "rtl" : "ltr" : e % 2 != 0 ? "ltr" : "rtl";
        return !u || r && 0 !== r.length ? h.jsx("div", {
            className: b("flex flex-col overflow-hidden", s, n),
            children: new Array(j).fill(null).map((e, s) => {
                const {
                    className: n,
                    style: a
                } = R(d, e => ({
                    className: "display-" + (s + 1 <= e ? "block" : "none")
                }));
                return h.jsx("div", {
                    "aria-hidden": 0 !== s,
                    style: a,
                    className: b(n, c),
                    children: h.jsx(S, {
                        direction: y(s),
                        baseVelocity: .3,
                        repeat: 3,
                        ...i,
                        children: r.map((e, r) => h.jsx("div", { ...R(d, e => {
                                const t = (M.get(e) ? ? [])[s] ? .includes(r) ? ? !1;
                                return {
                                    className: b(x(r), t ? "block" : "hidden")
                                }
                            }),
                            children: t(e, r)
                        }, r))
                    })
                }, s)
            })
        }) : null
    };
export {
    B as A
};