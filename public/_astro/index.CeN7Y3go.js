import {
    r as l,
    a as E
} from "./index.CtKCFvq0.js";
import {
    c as b
} from "./index.qiExTYtY.js";
import {
    j as p
} from "./jsx-runtime.u17CrQMm.js";
var g = Symbol.for("react.lazy"),
    u = E[" use ".trim().toString()];

function _(n) {
    return "object" == typeof n && null !== n && "then" in n
}

function d(n) {
    return null != n && "object" == typeof n && "$$typeof" in n && n.$$typeof === g && "_payload" in n && _(n._payload)
}

function C(n) {
    const e = x(n),
        t = l.forwardRef((n, t) => {
            let {
                children: r,
                ...o
            } = n;
            d(r) && "function" == typeof u && (r = u(r._payload));
            const i = l.Children.toArray(r),
                a = i.find(j);
            if (a) {
                const n = a.props.children,
                    r = i.map(e => e === a ? l.Children.count(n) > 1 ? l.Children.only(null) : l.isValidElement(n) ? n.props.children : null : e);
                return p.jsx(e, { ...o,
                    ref: t,
                    children: l.isValidElement(n) ? l.cloneElement(n, void 0, r) : null
                })
            }
            return p.jsx(e, { ...o,
                ref: t,
                children: r
            })
        });
    return t.displayName = `${n}.Slot`, t
}
var V = C("Slot");

function x(n) {
    const e = l.forwardRef((n, e) => {
        let {
            children: t,
            ...r
        } = n;
        if (d(t) && "function" == typeof u && (t = u(t._payload)), l.isValidElement(t)) {
            const n = P(t),
                o = h(r, t.props);
            return t.type !== l.Fragment && (o.ref = e ? b(e, n) : n), l.cloneElement(t, o)
        }
        return l.Children.count(t) > 1 ? l.Children.only(null) : null
    });
    return e.displayName = `${n}.SlotClone`, e
}
var m = Symbol("radix.slottable");

function R(n) {
    const e = ({
        children: n
    }) => p.jsx(p.Fragment, {
        children: n
    });
    return e.displayName = `${n}.Slottable`, e.__radixId = m, e
}
var v = R("Slottable");

function j(n) {
    return l.isValidElement(n) && "function" == typeof n.type && "__radixId" in n.type && n.type.__radixId === m
}

function h(n, e) {
    const t = { ...e
    };
    for (const r in e) {
        const l = n[r],
            o = e[r];
        /^on[A-Z]/.test(r) ? l && o ? t[r] = (...n) => {
            const e = o(...n);
            return l(...n), e
        } : l && (t[r] = l) : "style" === r ? t[r] = { ...l,
            ...o
        } : "className" === r && (t[r] = [l, o].filter(Boolean).join(" "))
    }
    return { ...n,
        ...t
    }
}

function P(n) {
    let e = Object.getOwnPropertyDescriptor(n.props, "ref") ? .get,
        t = e && "isReactWarning" in e && e.isReactWarning;
    return t ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref") ? .get, t = e && "isReactWarning" in e && e.isReactWarning, t ? n.props.ref : n.props.ref || n.ref)
}
export {
    V as S, v as a
};