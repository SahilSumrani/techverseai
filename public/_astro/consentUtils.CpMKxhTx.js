import {
    r as i,
    s as a,
    g as c
} from "./config.CPkfl8rD.js";

function C(r, t) {
    const s = i();
    if (!s) return;
    let n = !1;
    const o = () => {
            n || !0 !== c(s)[r] || (n = !0, e ? .(), t())
        },
        e = a(s, o);
    return o(), e
}

function g(r) {
    return JSON.stringify(Object.entries(r).sort((r, t) => r[0].localeCompare(t[0])))
}
export {
    g as s, C as w
};