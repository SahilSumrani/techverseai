import {
    j as l
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as n
} from "./index.CtKCFvq0.js";
import {
    b as m,
    f as y,
    L as c,
    l as M,
    M as i,
    r as R,
    u as L
} from "./react.BJ61_sDN.js";
const v = n => !n.isLayoutDirty && n.willUpdate(!1);

function d() {
    const n = new Set,
        t = new WeakMap,
        e = () => n.forEach(v);
    return {
        add: r => {
            n.add(r), t.set(r, r.addEventListener("willUpdate", e))
        },
        remove: r => {
            n.delete(r);
            const s = t.get(r);
            s && (s(), t.delete(r)), e()
        },
        dirty: e
    }
}
const G = n.createContext(null);

function I() {
    const t = n.useRef(!1);
    return m(() => (t.current = !0, () => {
        t.current = !1
    }), []), t
}

function b() {
    const t = I(),
        [e, r] = n.useState(0),
        s = n.useCallback(() => {
            t.current && r(e + 1)
        }, [e]);
    return [n.useCallback(() => y.postRender(s), [s]), e]
}
const p = n => !0 === n,
    h = n => p(!0 === n) || "id" === n,
    j = ({
        children: t,
        id: e,
        inherit: r = !0
    }) => {
        const s = n.useContext(c),
            i = n.useContext(G),
            [o, a] = b(),
            u = n.useRef(null),
            m = s.id || i;
        null === u.current && (h(r) && m && (e = e ? m + "-" + e : m), u.current = {
            id: e,
            group: p(r) && s.group || d()
        });
        const f = n.useMemo(() => ({ ...u.current,
            forceRender: o
        }), [a]);
        return l.jsx(c.Provider, {
            value: f,
            children: t
        })
    };

function w({
    children: t,
    isValidProp: e,
    ...r
}) {
    e && M(e);
    const s = n.useContext(i);
    (r = { ...s,
        ...r
    }).transition = R(r.transition, s.transition), r.isStatic = L(() => r.isStatic);
    const o = n.useMemo(() => r, [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion, r.skipAnimations]);
    return l.jsx(i.Provider, {
        value: o,
        children: t
    })
}
export {
    j as L, w as M
};