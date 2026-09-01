var v, C = {
    exports: {}
};

function h() {
    return v || (v = 1, e = function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) t[n] = r[n]
            }
            return t
        }

        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function r(n) {
            function o() {}

            function i(t, r, i) {
                if (!(typeof document > "u")) {
                    "number" == typeof(i = e({
                        path: "/"
                    }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        var c = JSON.stringify(r);
                        /^[\{\[]/.test(c) && (r = c)
                    } catch {}
                    r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var u = "";
                    for (var a in i) i[a] && (u += "; " + a, !0 !== i[a] && (u += "=" + i[a].split(";")[0]));
                    return document.cookie = t + "=" + r + u
                }
            }

            function c(e, r) {
                if (!(typeof document > "u")) {
                    for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                        var u = i[c].split("="),
                            a = u.slice(1).join("=");
                        !r && '"' === a.charAt(0) && (a = a.slice(1, -1));
                        try {
                            var p = t(u[0]);
                            if (a = (n.read || n)(a, p) || t(a), r) try {
                                a = JSON.parse(a)
                            } catch {}
                            if (o[p] = a, e === p) break
                        } catch {}
                    }
                    return e ? o[e] : o
                }
            }
            return o.set = i, o.get = function(e) {
                return c(e, !1)
            }, o.getJSON = function(e) {
                return c(e, !0)
            }, o.remove = function(t, r) {
                i(t, "", e(r, {
                    expires: -1
                }))
            }, o.defaults = {}, o.withConverter = r, o
        }(function() {})
    }, C.exports = e()), C.exports;
    var e
}
var I = h();
export {
    I as j
};