function M(n, o, i) {
    var e, t = i || {},
        a = t.noTrailing,
        d = void 0 !== a && a,
        r = t.noLeading,
        u = void 0 !== r && r,
        v = t.debounceMode,
        c = void 0 === v ? void 0 : v,
        f = !1,
        l = 0;

    function g() {
        e && clearTimeout(e)
    }

    function h() {
        for (var i = arguments.length, t = new Array(i), a = 0; a < i; a++) t[a] = arguments[a];
        var r = this,
            v = Date.now() - l;

        function h() {
            l = Date.now(), o.apply(r, t)
        }

        function m() {
            e = void 0
        }
        f || (!u && c && !e && h(), g(), void 0 === c && v > n ? u ? (l = Date.now(), d || (e = setTimeout(c ? m : h, n))) : h() : !0 !== d && (e = setTimeout(c ? m : h, void 0 === c ? n - v : n)))
    }
    return h.cancel = function(n) {
        var o = (n || {}).upcomingOnly,
            i = void 0 !== o && o;
        g(), f = !i
    }, h
}

function h(n, o, i) {
    var e = {}.atBegin;
    return M(n, o, {
        debounceMode: !1 !== (void 0 !== e && e)
    })
}
export {
    h as d
};