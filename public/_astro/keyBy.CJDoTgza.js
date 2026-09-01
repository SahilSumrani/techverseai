import {
    i as u,
    c as g,
    b as i,
    d as b
} from "./_baseForOwn.BCVnIoVi.js";
import {
    b as h
} from "./get.B5nxRGLq.js";

function A(n, r, t, u) {
    for (var o = -1, i = null == n ? 0 : n.length; ++o < i;) {
        var a = n[o];
        r(u, a, t(a), n)
    }
    return u
}

function k(n, r) {
    return function(r, t) {
        if (null == r) return r;
        if (!u(r)) return n(r, t);
        for (var o = r.length, i = -1, a = Object(r); ++i < o && !1 !== t(a[i], i, a););
        return r
    }
}
var m = k(g);

function v(n, r, t, u) {
    return m(n, function(n, o, i) {
        r(u, n, t(n), i)
    }), u
}

function d(n, r) {
    return function(t, u) {
        var o = h(t) ? A : v,
            a = r ? r() : {};
        return o(t, n, i(u), a)
    }
}
var w = d(function(n, r, t) {
    b(n, t, r)
});
export {
    m as b, d as c, w as k
};