import {
    a as s,
    i as e
} from "./get.B5nxRGLq.js";
var f = /\s/;

function c(t) {
    for (var e = t.length; e-- && f.test(t.charAt(e)););
    return e
}
var o = /^\s+/;

function a(t) {
    return t && t.slice(0, c(t) + 1).replace(o, "")
}
var n = NaN,
    m = /^[-+]0x[0-9a-f]+$/i,
    p = /^0b[01]+$/i,
    b = /^0o[0-7]+$/i,
    y = parseInt;

function d(t) {
    if ("number" == typeof t) return t;
    if (s(t)) return n;
    if (e(t)) {
        var r = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = e(r) ? r + "" : r
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = a(t);
    var f = p.test(t);
    return f || b.test(t) ? y(t.slice(2), f ? 2 : 8) : m.test(t) ? n : +t
}
export {
    d as t
};