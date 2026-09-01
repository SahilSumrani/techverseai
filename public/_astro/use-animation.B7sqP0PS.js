import {
    a as u,
    s as c,
    u as i,
    b as f
} from "./react.BJ61_sDN.js";

function h(r) {
    r.values.forEach(r => r.stop())
}

function e(r, t) {
    [...t].reverse().forEach(n => {
        const a = r.getVariant(n);
        a && c(r, a), r.variantChildren && r.variantChildren.forEach(r => {
            e(r, t)
        })
    })
}

function p(r, t) {
    return Array.isArray(t) ? e(r, t) : "string" == typeof t ? e(r, [t]) : void c(r, t)
}

function m() {
    const r = new Set,
        t = {
            subscribe: t => (r.add(t), () => {
                r.delete(t)
            }),
            start(t, n) {
                const a = [];
                return r.forEach(r => {
                    a.push(u(r, t, {
                        transitionOverride: n
                    }))
                }), Promise.all(a)
            },
            set: t => r.forEach(r => {
                p(r, t)
            }),
            stop() {
                r.forEach(r => {
                    h(r)
                })
            },
            mount: () => () => {
                t.stop()
            }
        };
    return t
}

function b() {
    const r = i(m);
    return f(r.mount, []), r
}
const C = b;
export {
    C as a, b as u
};