import {
    r as S,
    i as y
} from "./get.B5nxRGLq.js";
import {
    t as W
} from "./toNumber.D20f_QGL.js";
var x = function() {
        return S.Date.now()
    },
    _ = "Expected a function",
    p = Math.max,
    F = Math.min;

function N(n, t, i) {
    var r, e, o, a, u, f, c = 0,
        v = !1,
        m = !1,
        d = !0;
    if ("function" != typeof n) throw new TypeError(_);

    function l(t) {
        var i = r,
            o = e;
        return r = e = void 0, c = t, a = n.apply(o, i)
    }

    function s(n) {
        var i = n - f;
        return void 0 === f || i >= t || i < 0 || m && n - c >= o
    }

    function g() {
        var n = x();
        if (s(n)) return T(n);
        u = setTimeout(g, function(n) {
            var i = t - (n - f);
            return m ? F(i, o - (n - c)) : i
        }(n))
    }

    function T(n) {
        return u = void 0, d && r ? l(n) : (r = e = void 0, a)
    }

    function h() {
        var n = x(),
            i = s(n);
        if (r = arguments, e = this, f = n, i) {
            if (void 0 === u) return function(n) {
                return c = n, u = setTimeout(g, t), v ? l(n) : a
            }(f);
            if (m) return clearTimeout(u), u = setTimeout(g, t), l(f)
        }
        return void 0 === u && (u = setTimeout(g, t)), a
    }
    return t = W(t) || 0, y(i) && (v = !!i.leading, o = (m = "maxWait" in i) ? p(W(i.maxWait) || 0, t) : o, d = "trailing" in i ? !!i.trailing : d), h.cancel = function() {
        void 0 !== u && clearTimeout(u), c = 0, r = f = e = u = void 0
    }, h.flush = function() {
        return void 0 === u ? a : T(x())
    }, h
}
var O = "Expected a function";

function X(n, t, i) {
    var r = !0,
        e = !0;
    if ("function" != typeof n) throw new TypeError(O);
    return y(i) && (r = "leading" in i ? !!i.leading : r, e = "trailing" in i ? !!i.trailing : e), N(n, t, {
        leading: r,
        maxWait: t,
        trailing: e
    })
}
export {
    X as t
};