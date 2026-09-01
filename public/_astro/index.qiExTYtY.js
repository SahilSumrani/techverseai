import {
    r as l
} from "./index.CtKCFvq0.js";

function s(n, t) {
    if ("function" == typeof n) return n(t);
    null != n && (n.current = t)
}

function f(...n) {
    return t => {
        let r = !1;
        const f = n.map(n => {
            const f = s(n, t);
            return !r && "function" == typeof f && (r = !0), f
        });
        if (r) return () => {
            for (let t = 0; t < f.length; t++) {
                const r = f[t];
                "function" == typeof r ? r() : s(n[t], null)
            }
        }
    }
}

function r(...n) {
    return l.useCallback(f(...n), n)
}
export {
    f as c, r as u
};