import {
    r as n
} from "./index.CtKCFvq0.js";

function b(e) {
    const t = new Set;
    let n = e;
    return Object.freeze({
        get value() {
            return n
        },
        setValue: e => {
            const u = "function" == typeof e ? e(n) : e;
            n = u, t.forEach(e => e(u))
        },
        subscribe: e => {
            t.add(e)
        },
        unsubscribe: e => {
            t.delete(e)
        }
    })
}

function c(e) {
    const [t, u] = n.useState(e.value);
    return n.useEffect(() => (e.subscribe(u), u(e.value), () => {
        e.unsubscribe(u)
    }), [e]), [t, e.setValue]
}

function f(e) {
    return c(e)[0]
}

function i(e) {
    return c(e)[1]
}
export {
    b as a, i as b, f as u
};