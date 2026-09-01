const __vite__mapDeps = (t, e = __vite__mapDeps, r = e.f || (e.f = ["_astro/browser.B2gmZDgW.js", "_astro/index.CtKCFvq0.js"])) => t.map(t => r[t]);
import {
    g as oi
} from "./index.CtKCFvq0.js";
import {
    _ as vr
} from "./preload-helper.CVfkMyKi.js";
import {
    a6 as Nt,
    a5 as Q,
    a7 as J,
    a8 as X,
    a9 as ai,
    aa as wr,
    ab as he,
    ac as ui,
    ad as ci
} from "./index.BwDjtkKo.js";
const li = ({
        cache: t,
        cacheKey: e,
        factory: r,
        debugEnabled: n = !1,
        debugContext: i = "Cache"
    }) => {
        const s = t => {
                n && console.log(`[${i}] ${t}`)
            },
            o = t.get(e);
        if (o) return s("✅ CACHE HIT — returning cached result"), o;
        s("❌ CACHE MISS — fetching new data");
        const a = r();
        return t.set(e, a), a
    },
    br = !(typeof navigator > "u") && "ReactNative" === navigator.product,
    _r = {
        timeout: br ? 6e4 : 12e4
    },
    hi = function(t) {
        const e = { ..._r,
            ..."string" == typeof t ? {
                url: t
            } : t
        };
        if (e.timeout = Er(e.timeout), e.query) {
            const {
                url: t,
                searchParams: r
            } = function(t) {
                const e = t.indexOf("?");
                if (-1 === e) return {
                    url: t,
                    searchParams: new URLSearchParams
                };
                const r = t.slice(0, e),
                    n = t.slice(e + 1);
                if (!br) return {
                    url: r,
                    searchParams: new URLSearchParams(n)
                };
                if ("function" != typeof decodeURIComponent) throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
                const i = new URLSearchParams;
                for (const t of n.split("&")) {
                    const [e, r] = t.split("=");
                    e && i.append(Ue(e), Ue(r || ""))
                }
                return {
                    url: r,
                    searchParams: i
                }
            }(e.url);
            for (const [n, i] of Object.entries(e.query)) {
                if (void 0 !== i)
                    if (Array.isArray(i))
                        for (const t of i) r.append(n, t);
                    else r.append(n, i);
                const s = r.toString();
                s && (e.url = `${t}?${s}`)
            }
        }
        return e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase(), e
    };

function Ue(t) {
    return decodeURIComponent(t.replace(/\+/g, " "))
}

function Er(t) {
    if (!1 === t || 0 === t) return !1;
    if (t.connect || t.socket) return t;
    const e = Number(t);
    return isNaN(e) ? Er(_r.timeout) : {
        connect: e,
        socket: e
    }
}
const di = /^https?:\/\//i,
    fi = function(t) {
        if (!di.test(t.url)) throw new Error(`"${t.url}" is not a valid URL`)
    };

function Sr(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
const pi = ["request", "response", "progress", "error", "abort"],
    Me = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];

function Ir(t, e) {
    const r = [],
        n = Me.reduce((t, e) => (t[e] = t[e] || [], t), {
            processOptions: [hi],
            validateOptions: [fi]
        });

    function i(t) {
        const r = pi.reduce((t, e) => (t[e] = function() {
                const t = Object.create(null);
                let e = 0;
                return {
                    publish: function(e) {
                        for (const r in t) t[r](e)
                    },
                    subscribe: function(r) {
                        const n = e++;
                        return t[n] = r,
                            function() {
                                delete t[n]
                            }
                    }
                }
            }(), t), {}),
            i = (o = n, function(t, e, ...r) {
                const n = "onError" === t;
                let i = e;
                for (let e = 0; e < o[t].length && (i = (0, o[t][e])(i, ...r), !n || i); e++);
                return i
            }),
            s = i("processOptions", t);
        var o;
        i("validateOptions", s);
        const a = {
            options: s,
            channels: r,
            applyMiddleware: i
        };
        let u;
        const c = r.request.subscribe(t => {
            u = e(t, (e, n) => ((t, e, n) => {
                let s = t,
                    o = e;
                if (!s) try {
                    o = i("onResponse", e, n)
                } catch (t) {
                    o = null, s = t
                }
                s = s && i("onError", s, n), s ? r.error.publish(s) : o && r.response.publish(o)
            })(e, n, t))
        });
        r.abort.subscribe(() => {
            c(), u && u.abort()
        });
        const h = i("onReturn", r, a);
        return h === r && r.request.publish(a), h
    }
    return i.use = function(t) {
        if (!t) throw new Error("Tried to add middleware that resolved to falsey value");
        if ("function" == typeof t) throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        if (t.onReturn && n.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        return Me.forEach(e => {
            t[e] && n[e].push(t[e])
        }), r.push(t), i
    }, i.clone = () => Ir(r, e), t.forEach(i.use), i
}
var qe, Le, gi = Sr(function() {
    if (Le) return qe;
    Le = 1;
    var t = function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        e = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        };
    return qe = function(r) {
        if (!r) return {};
        for (var n = Object.create(null), i = t(r).split("\n"), s = 0; s < i.length; s++) {
            var o = i[s],
                a = o.indexOf(":"),
                u = t(o.slice(0, a)).toLowerCase(),
                c = t(o.slice(a + 1));
            typeof n[u] > "u" ? n[u] = c : e(n[u]) ? n[u].push(c) : n[u] = [n[u], c]
        }
        return n
    }
}());
let we = class {
    onabort;
    onerror;
    onreadystatechange;
    ontimeout;
    readyState = 0;
    response;
    responseText = "";
    responseType = "";
    status;
    statusText;
    withCredentials;#
    t;#
    e;#
    r;#
    n = {};#
    i;#
    s = {};#
    o;
    open(t, e, r) {
        this.#t = t, this.#e = e, this.#r = "", this.readyState = 1, this.onreadystatechange ? .(), this.#i = void 0
    }
    abort() {
        this.#i && this.#i.abort()
    }
    getAllResponseHeaders() {
        return this.#r
    }
    setRequestHeader(t, e) {
        this.#n[t] = e
    }
    setInit(t, e = !0) {
        this.#s = t, this.#o = e
    }
    send(t) {
        const e = "arraybuffer" !== this.responseType,
            r = { ...this.#s,
                method: this.#t,
                headers: this.#n,
                body: t
            };
        "function" == typeof AbortController && this.#o && (this.#i = new AbortController, typeof EventTarget < "u" && this.#i.signal instanceof EventTarget && (r.signal = this.#i.signal)), typeof document < "u" && (r.credentials = this.withCredentials ? "include" : "omit"), fetch(this.#e, r).then(t => (t.headers.forEach((t, e) => {
            this.#r += `${e}: ${t}\r\n`
        }), this.status = t.status, this.statusText = t.statusText, this.readyState = 3, this.onreadystatechange ? .(), e ? t.text() : t.arrayBuffer())).then(t => {
            "string" == typeof t ? this.responseText = t : this.response = t, this.readyState = 4, this.onreadystatechange ? .()
        }).catch(t => {
            "AbortError" !== t.name ? this.onerror ? .(t) : this.onabort ? .()
        })
    }
};
const be = "function" == typeof XMLHttpRequest ? "xhr" : "fetch",
    mi = "xhr" === be ? XMLHttpRequest : we,
    yi = (t, e) => {
        const r = t.options,
            n = t.applyMiddleware("finalizeOptions", r),
            i = {},
            s = t.applyMiddleware("interceptRequest", void 0, {
                adapter: be,
                context: t
            });
        if (s) {
            const t = setTimeout(e, 0, null, s);
            return {
                abort: () => clearTimeout(t)
            }
        }
        let o = new mi;
        o instanceof we && "object" == typeof n.fetch && o.setInit(n.fetch, n.useAbortSignal ? ? !0);
        const a = n.headers,
            u = n.timeout;
        let c = !1,
            h = !1,
            l = !1;
        if (o.onerror = t => {
                p(o instanceof we ? t instanceof Error ? t : new Error(`Request error while attempting to reach is ${n.url}`, {
                    cause: t
                }) : new Error(`Request error while attempting to reach is ${n.url}${t.lengthComputable?`(${t.loaded} of ${t.total} bytes transferred)`:""}`))
            }, o.ontimeout = t => {
                p(new Error(`Request timeout while attempting to reach ${n.url}${t.lengthComputable?`(${t.loaded} of ${t.total} bytes transferred)`:""}`))
            }, o.onabort = () => {
                f(!0), c = !0
            }, o.onreadystatechange = function() {
                u && (f(), i.socket = setTimeout(() => d("ESOCKETTIMEDOUT"), u.socket)), !c && o && 4 === o.readyState && 0 !== o.status && function() {
                    if (!(c || h || l)) {
                        if (0 === o.status) return void p(new Error("Unknown XHR error"));
                        f(), h = !0, e(null, {
                            body: o.response || ("" === o.responseType || "text" === o.responseType ? o.responseText : ""),
                            url: n.url,
                            method: n.method,
                            headers: gi(o.getAllResponseHeaders()),
                            statusCode: o.status,
                            statusMessage: o.statusText
                        })
                    }
                }()
            }, o.open(n.method, n.url, !0), o.withCredentials = !!n.withCredentials, a && o.setRequestHeader)
            for (const t in a) a.hasOwnProperty(t) && o.setRequestHeader(t, a[t]);
        return n.rawBody && (o.responseType = "arraybuffer"), t.applyMiddleware("onRequest", {
            options: n,
            adapter: be,
            request: o,
            context: t
        }), o.send(n.body || null), u && (i.connect = setTimeout(() => d("ETIMEDOUT"), u.connect)), {
            abort: function() {
                c = !0, o && o.abort()
            }
        };

        function d(e) {
            l = !0, o.abort();
            const r = new Error("ESOCKETTIMEDOUT" === e ? `Socket timed out on request to ${n.url}` : `Connection timed out on request to ${n.url}`);
            r.code = e, t.channels.error.publish(r)
        }

        function f(t) {
            (t || c || o && o.readyState >= 2 && i.connect) && clearTimeout(i.connect), i.socket && clearTimeout(i.socket)
        }

        function p(t) {
            if (h) return;
            f(!0), h = !0, o = null;
            const r = t || new Error(`Network error while attempting to reach ${n.url}`);
            r.isNetworkError = !0, r.request = n, e(r)
        }
    },
    vi = (t = [], e = yi) => Ir(t, e);
var ke, ze, Ve, Ne, We, wi = {},
    de = {
        exports: {}
    };
We || (We = 1, function(t, e) {
    e.formatArgs = function(e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
        const r = "color: " + this.color;
        e.splice(1, 0, r, "color: inherit");
        let n = 0,
            i = 0;
        e[0].replace(/%[a-zA-Z%]/g, t => {
            "%%" !== t && (n++, "%c" === t && (i = n))
        }), e.splice(i, 0, r)
    }, e.save = function(t) {
        try {
            t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug")
        } catch {}
    }, e.load = function() {
        let t;
        try {
            t = e.storage.getItem("debug") || e.storage.getItem("DEBUG")
        } catch {}
        return !t && typeof process < "u" && "env" in process && (t = wi.DEBUG), t
    }, e.useColors = function() {
        if (typeof window < "u" && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
        if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        let t;
        return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }, e.storage = function() {
        try {
            return localStorage
        } catch {}
    }(), e.destroy = (() => {
        let t = !1;
        return () => {
            t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    })(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.log = console.debug || console.log || (() => {}), t.exports = (Ne ? Ve : (Ne = 1, Ve = function(t) {
        function e(t) {
            let n, i, s, o = null;

            function a(...t) {
                if (!a.enabled) return;
                const r = a,
                    i = Number(new Date),
                    s = i - (n || i);
                r.diff = s, r.prev = n, r.curr = i, n = i, t[0] = e.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
                let o = 0;
                t[0] = t[0].replace(/%([a-zA-Z%])/g, (n, i) => {
                    if ("%%" === n) return "%";
                    o++;
                    const s = e.formatters[i];
                    if ("function" == typeof s) {
                        const e = t[o];
                        n = s.call(r, e), t.splice(o, 1), o--
                    }
                    return n
                }), e.formatArgs.call(r, t), (r.log || e.log).apply(r, t)
            }
            return a.namespace = t, a.useColors = e.useColors(), a.color = e.selectColor(t), a.extend = r, a.destroy = e.destroy, Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => null !== o ? o : (i !== e.namespaces && (i = e.namespaces, s = e.enabled(t)), s),
                set: t => {
                    o = t
                }
            }), "function" == typeof e.init && e.init(a), a
        }

        function r(t, r) {
            const n = e(this.namespace + (typeof r > "u" ? ":" : r) + t);
            return n.log = this.log, n
        }

        function n(t, e) {
            let r = 0,
                n = 0,
                i = -1,
                s = 0;
            for (; r < t.length;)
                if (n < e.length && (e[n] === t[r] || "*" === e[n])) "*" === e[n] ? (i = n, s = r, n++) : (r++, n++);
                else {
                    if (-1 === i) return !1;
                    n = i + 1, s++, r = s
                }
            for (; n < e.length && "*" === e[n];) n++;
            return n === e.length
        }
        return e.debug = e, e.default = e, e.coerce = function(t) {
            return t instanceof Error ? t.stack || t.message : t
        }, e.disable = function() {
            const t = [...e.names, ...e.skips.map(t => "-" + t)].join(",");
            return e.enable(""), t
        }, e.enable = function(t) {
            e.save(t), e.namespaces = t, e.names = [], e.skips = [];
            const r = ("string" == typeof t ? t : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
            for (const t of r) "-" === t[0] ? e.skips.push(t.slice(1)) : e.names.push(t)
        }, e.enabled = function(t) {
            for (const r of e.skips)
                if (n(t, r)) return !1;
            for (const r of e.names)
                if (n(t, r)) return !0;
            return !1
        }, e.humanize = function() {
            if (ze) return ke;
            ze = 1;
            var t = 1e3,
                e = 60 * t,
                r = 60 * e,
                n = 24 * r,
                i = 7 * n;

            function s(t, e, r, n) {
                var i = e >= 1.5 * r;
                return Math.round(t / r) + " " + n + (i ? "s" : "")
            }
            return ke = function(o, a) {
                a = a || {};
                var u, c, h, l, d = typeof o;
                if ("string" === d && o.length > 0) return function(s) {
                    if (!((s = String(s)).length > 100)) {
                        var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(s);
                        if (o) {
                            var a = parseFloat(o[1]);
                            switch ((o[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * a;
                                case "weeks":
                                case "week":
                                case "w":
                                    return a * i;
                                case "days":
                                case "day":
                                case "d":
                                    return a * n;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return a * r;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return a * e;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return a * t;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return a;
                                default:
                                    return
                            }
                        }
                    }
                }(o);
                if ("number" === d && isFinite(o)) return a.long ? (u = o, (c = Math.abs(u)) >= n ? s(u, c, n, "day") : c >= r ? s(u, c, r, "hour") : c >= e ? s(u, c, e, "minute") : c >= t ? s(u, c, t, "second") : u + " ms") : (h = o, (l = Math.abs(h)) >= n ? Math.round(h / n) + "d" : l >= r ? Math.round(h / r) + "h" : l >= e ? Math.round(h / e) + "m" : l >= t ? Math.round(h / t) + "s" : h + "ms");
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(o))
            }
        }(), e.destroy = function() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }, Object.keys(t).forEach(r => {
            e[r] = t[r]
        }), e.names = [], e.skips = [], e.formatters = {}, e.selectColor = function(t) {
            let r = 0;
            for (let e = 0; e < t.length; e++) r = (r << 5) - r + t.charCodeAt(e), r |= 0;
            return e.colors[Math.abs(r) % e.colors.length]
        }, e.enable(e.load()), e
    }))(e);
    const {
        formatters: r
    } = t.exports;
    r.j = function(t) {
        try {
            return JSON.stringify(t)
        } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message
        }
    }
}(de, de.exports)), de.exports;
const bi = typeof Buffer > "u" ? () => !1 : t => Buffer.isBuffer(t);

function He(t) {
    return "[object Object]" === Object.prototype.toString.call(t)
}

function _i(t) {
    if (!1 === He(t)) return !1;
    const e = t.constructor;
    if (void 0 === e) return !0;
    const r = e.prototype;
    return !(!1 === He(r) || !1 === r.hasOwnProperty("isPrototypeOf"))
}
const Ei = ["boolean", "string", "number"];

function Si() {
    return {
        processOptions: t => {
            const e = t.body;
            return !e || "function" == typeof e.pipe || bi(e) || -1 === Ei.indexOf(typeof e) && !Array.isArray(e) && !_i(e) ? t : Object.assign({}, t, {
                body: JSON.stringify(t.body),
                headers: Object.assign({}, t.headers, {
                    "Content-Type": "application/json"
                })
            })
        }
    }
}

function Ii(t) {
    return {
        onResponse: r => {
            const n = r.headers["content-type"] || "",
                i = t && t.force || -1 !== n.indexOf("application/json");
            return r.body && n && i ? Object.assign({}, r, {
                body: e(r.body)
            }) : r
        },
        processOptions: t => Object.assign({}, t, {
            headers: Object.assign({
                Accept: "application/json"
            }, t.headers)
        })
    };

    function e(t) {
        try {
            return JSON.parse(t)
        } catch (t) {
            throw t.message = `Failed to parsed response body as JSON: ${t.message}`, t
        }
    }
}
let Ct = {};
typeof globalThis < "u" ? Ct = globalThis : typeof window < "u" ? Ct = window : typeof global < "u" ? Ct = global : typeof self < "u" && (Ct = self);
var Ai = Ct;

function Ci(t = {}) {
    const e = t.implementation || Ai.Observable;
    if (!e) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
    return {
        onReturn: (t, r) => new e(e => (t.error.subscribe(t => e.error(t)), t.progress.subscribe(t => e.next(Object.assign({
            type: "progress"
        }, t))), t.response.subscribe(t => {
            e.next(Object.assign({
                type: "response"
            }, t)), e.complete()
        }), t.request.publish(r), () => t.abort.publish()))
    }
}

function xi() {
    return {
        onRequest: t => {
            if ("xhr" !== t.adapter) return;
            const e = t.request,
                r = t.context;

            function n(t) {
                return e => {
                    const n = e.lengthComputable ? e.loaded / e.total * 100 : -1;
                    r.channels.progress.publish({
                        stage: t,
                        percent: n,
                        total: e.total,
                        loaded: e.loaded,
                        lengthComputable: e.lengthComputable
                    })
                }
            }
            "upload" in e && "onprogress" in e.upload && (e.upload.onprogress = n("upload")), "onprogress" in e && (e.onprogress = n("download"))
        }
    }
}
var Ar = (t, e, r) => ("GET" === r.method || "HEAD" === r.method) && (t.isNetworkError || !1);

function Ti(t) {
    return 100 * Math.pow(2, t) + 100 * Math.random()
}
const Ee = (t = {}) => (t => {
    const e = t.maxRetries || 5,
        r = t.retryDelay || Ti,
        n = t.shouldRetry;
    return {
        onError: (t, i) => {
            const s = i.options,
                o = s.maxRetries || e,
                a = s.retryDelay || r,
                u = s.shouldRetry || n,
                c = s.attemptNumber || 0;
            if (null !== (h = s.body) && "object" == typeof h && "function" == typeof h.pipe || !u(t, c, s) || c >= o) return t;
            var h;
            const l = Object.assign({}, i, {
                options: Object.assign({}, s, {
                    attemptNumber: c + 1
                })
            });
            return setTimeout(() => i.channels.request.publish(l), a(c)), null
        }
    }
})({
    shouldRetry: Ar,
    ...t
});

function O(t) {
    return "function" == typeof t
}

function Se(t) {
    var e = t(function(t) {
        Error.call(t), t.stack = (new Error).stack
    });
    return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e
}
Ee.shouldRetry = Ar;
var fe = Se(function(t) {
    return function(e) {
        t(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map(function(t, e) {
            return e + 1 + ") " + t.toString()
        }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e
    }
});

function Wt(t, e) {
    if (t) {
        var r = t.indexOf(e);
        0 <= r && t.splice(r, 1)
    }
}
var Ft = function() {
        function t(t) {
            this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null
        }
        return t.prototype.unsubscribe = function() {
            var t, e, r, n, i;
            if (!this.closed) {
                this.closed = !0;
                var s = this._parentage;
                if (s)
                    if (this._parentage = null, Array.isArray(s)) try {
                        for (var o = Nt(s), a = o.next(); !a.done; a = o.next()) {
                            a.value.remove(this)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (e = o.return) && e.call(o)
                        } finally {
                            if (t) throw t.error
                        }
                    } else s.remove(this);
                var u = this.initialTeardown;
                if (O(u)) try {
                    u()
                } catch (t) {
                    i = t instanceof fe ? t.errors : [t]
                }
                var c = this._finalizers;
                if (c) {
                    this._finalizers = null;
                    try {
                        for (var h = Nt(c), l = h.next(); !l.done; l = h.next()) {
                            var d = l.value;
                            try {
                                Ge(d)
                            } catch (t) {
                                i = i ? ? [], t instanceof fe ? i = Q(Q([], J(i)), J(t.errors)) : i.push(t)
                            }
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            l && !l.done && (n = h.return) && n.call(h)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                }
                if (i) throw new fe(i)
            }
        }, t.prototype.add = function(e) {
            var r;
            if (e && e !== this)
                if (this.closed) Ge(e);
                else {
                    if (e instanceof t) {
                        if (e.closed || e._hasParent(this)) return;
                        e._addParent(this)
                    }(this._finalizers = null !== (r = this._finalizers) && void 0 !== r ? r : []).push(e)
                }
        }, t.prototype._hasParent = function(t) {
            var e = this._parentage;
            return e === t || Array.isArray(e) && e.includes(t)
        }, t.prototype._addParent = function(t) {
            var e = this._parentage;
            this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t
        }, t.prototype._removeParent = function(t) {
            var e = this._parentage;
            e === t ? this._parentage = null : Array.isArray(e) && Wt(e, t)
        }, t.prototype.remove = function(e) {
            var r = this._finalizers;
            r && Wt(r, e), e instanceof t && e._removeParent(this)
        }, t.EMPTY = ((e = new t).closed = !0, e), t;
        var e
    }(),
    Cr = Ft.EMPTY;

function xr(t) {
    return t instanceof Ft || t && "closed" in t && O(t.remove) && O(t.add) && O(t.unsubscribe)
}

function Ge(t) {
    O(t) ? t() : t.unsubscribe()
}
var $i = {
        Promise: void 0
    },
    Oi = {
        setTimeout: function(t, e) {
            for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
            return setTimeout.apply(void 0, Q([t, e], J(r)))
        },
        clearTimeout: function(t) {
            return clearTimeout(t)
        },
        delegate: void 0
    };

function Tr(t) {
    Oi.setTimeout(function() {
        throw t
    })
}

function Be() {}

function kt(t) {
    t()
}
var Ie = function(t) {
        function e(e) {
            var r = t.call(this) || this;
            return r.isStopped = !1, e ? (r.destination = e, xr(e) && e.add(r)) : r.destination = Fi, r
        }
        return X(e, t), e.create = function(t, e, r) {
            return new yt(t, e, r)
        }, e.prototype.next = function(t) {
            this.isStopped || this._next(t)
        }, e.prototype.error = function(t) {
            this.isStopped || (this.isStopped = !0, this._error(t))
        }, e.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0, this._complete())
        }, e.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null)
        }, e.prototype._next = function(t) {
            this.destination.next(t)
        }, e.prototype._error = function(t) {
            try {
                this.destination.error(t)
            } finally {
                this.unsubscribe()
            }
        }, e.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }, e
    }(Ft),
    Ri = function() {
        function t(t) {
            this.partialObserver = t
        }
        return t.prototype.next = function(t) {
            var e = this.partialObserver;
            if (e.next) try {
                e.next(t)
            } catch (t) {
                Lt(t)
            }
        }, t.prototype.error = function(t) {
            var e = this.partialObserver;
            if (e.error) try {
                e.error(t)
            } catch (t) {
                Lt(t)
            } else Lt(t)
        }, t.prototype.complete = function() {
            var t = this.partialObserver;
            if (t.complete) try {
                t.complete()
            } catch (t) {
                Lt(t)
            }
        }, t
    }(),
    yt = function(t) {
        function e(e, r, n) {
            var i, s = t.call(this) || this;
            return i = O(e) || !e ? {
                next: e ? ? void 0,
                error: r ? ? void 0,
                complete: n ? ? void 0
            } : e, s.destination = new Ri(i), s
        }
        return X(e, t), e
    }(Ie);

function Lt(t) {
    Tr(t)
}

function Pi(t) {
    throw t
}
var Fi = {
        closed: !0,
        next: Be,
        error: Pi,
        complete: Be
    },
    Ae = "function" == typeof Symbol && Symbol.observable || "@@observable";

function te(t) {
    return t
}

function ji() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return $r(t)
}

function $r(t) {
    return 0 === t.length ? te : 1 === t.length ? t[0] : function(e) {
        return t.reduce(function(t, e) {
            return e(t)
        }, e)
    }
}
var F = function() {
    function t(t) {
        t && (this._subscribe = t)
    }
    return t.prototype.lift = function(e) {
        var r = new t;
        return r.source = this, r.operator = e, r
    }, t.prototype.subscribe = function(t, e, r) {
        var n = this,
            i = Ui(t) ? t : new yt(t, e, r);
        return kt(function() {
            var t = n,
                e = t.operator,
                r = t.source;
            i.add(e ? e.call(i, r) : r ? n._subscribe(i) : n._trySubscribe(i))
        }), i
    }, t.prototype._trySubscribe = function(t) {
        try {
            return this._subscribe(t)
        } catch (e) {
            t.error(e)
        }
    }, t.prototype.forEach = function(t, e) {
        var r = this;
        return new(e = Ye(e))(function(e, n) {
            var i = new yt({
                next: function(e) {
                    try {
                        t(e)
                    } catch (t) {
                        n(t), i.unsubscribe()
                    }
                },
                error: n,
                complete: e
            });
            r.subscribe(i)
        })
    }, t.prototype._subscribe = function(t) {
        var e;
        return null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(t)
    }, t.prototype[Ae] = function() {
        return this
    }, t.prototype.pipe = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return $r(t)(this)
    }, t.prototype.toPromise = function(t) {
        var e = this;
        return new(t = Ye(t))(function(t, r) {
            var n;
            e.subscribe(function(t) {
                return n = t
            }, function(t) {
                return r(t)
            }, function() {
                return t(n)
            })
        })
    }, t.create = function(e) {
        return new t(e)
    }, t
}();

function Ye(t) {
    var e;
    return null !== (e = t ? ? $i.Promise) && void 0 !== e ? e : Promise
}

function Di(t) {
    return t && O(t.next) && O(t.error) && O(t.complete)
}

function Ui(t) {
    return t && t instanceof Ie || Di(t) && xr(t)
}

function Mi(t) {
    return O(t ? .lift)
}

function G(t) {
    return function(e) {
        if (Mi(e)) return e.lift(function(e) {
            try {
                return t(e, this)
            } catch (t) {
                this.error(t)
            }
        });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}

function rt(t, e, r, n, i) {
    return new qi(t, e, r, n, i)
}
var qi = function(t) {
        function e(e, r, n, i, s, o) {
            var a = t.call(this, e) || this;
            return a.onFinalize = s, a.shouldUnsubscribe = o, a._next = r ? function(t) {
                try {
                    r(t)
                } catch (t) {
                    e.error(t)
                }
            } : t.prototype._next, a._error = i ? function(t) {
                try {
                    i(t)
                } catch (t) {
                    e.error(t)
                } finally {
                    this.unsubscribe()
                }
            } : t.prototype._error, a._complete = n ? function() {
                try {
                    n()
                } catch (t) {
                    e.error(t)
                } finally {
                    this.unsubscribe()
                }
            } : t.prototype._complete, a
        }
        return X(e, t), e.prototype.unsubscribe = function() {
            var e;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var r = this.closed;
                t.prototype.unsubscribe.call(this), !r && (null === (e = this.onFinalize) || void 0 === e || e.call(this))
            }
        }, e
    }(Ie),
    Li = Se(function(t) {
        return function() {
            t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
        }
    }),
    Ce = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
        }
        return X(e, t), e.prototype.lift = function(t) {
            var e = new Qe(this, this);
            return e.operator = t, e
        }, e.prototype._throwIfClosed = function() {
            if (this.closed) throw new Li
        }, e.prototype.next = function(t) {
            var e = this;
            kt(function() {
                var r, n;
                if (e._throwIfClosed(), !e.isStopped) {
                    e.currentObservers || (e.currentObservers = Array.from(e.observers));
                    try {
                        for (var i = Nt(e.currentObservers), s = i.next(); !s.done; s = i.next()) {
                            s.value.next(t)
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            s && !s.done && (n = i.return) && n.call(i)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                }
            })
        }, e.prototype.error = function(t) {
            var e = this;
            kt(function() {
                if (e._throwIfClosed(), !e.isStopped) {
                    e.hasError = e.isStopped = !0, e.thrownError = t;
                    for (var r = e.observers; r.length;) r.shift().error(t)
                }
            })
        }, e.prototype.complete = function() {
            var t = this;
            kt(function() {
                if (t._throwIfClosed(), !t.isStopped) {
                    t.isStopped = !0;
                    for (var e = t.observers; e.length;) e.shift().complete()
                }
            })
        }, e.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
        }, Object.defineProperty(e.prototype, "observed", {
            get: function() {
                var t;
                return (null === (t = this.observers) || void 0 === t ? void 0 : t.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype._trySubscribe = function(e) {
            return this._throwIfClosed(), t.prototype._trySubscribe.call(this, e)
        }, e.prototype._subscribe = function(t) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t)
        }, e.prototype._innerSubscribe = function(t) {
            var e = this,
                r = this,
                n = r.hasError,
                i = r.isStopped,
                s = r.observers;
            return n || i ? Cr : (this.currentObservers = null, s.push(t), new Ft(function() {
                e.currentObservers = null, Wt(s, t)
            }))
        }, e.prototype._checkFinalizedStatuses = function(t) {
            var e = this,
                r = e.hasError,
                n = e.thrownError,
                i = e.isStopped;
            r ? t.error(n) : i && t.complete()
        }, e.prototype.asObservable = function() {
            var t = new F;
            return t.source = this, t
        }, e.create = function(t, e) {
            return new Qe(t, e)
        }, e
    }(F),
    Qe = function(t) {
        function e(e, r) {
            var n = t.call(this) || this;
            return n.destination = e, n.source = r, n
        }
        return X(e, t), e.prototype.next = function(t) {
            var e, r;
            null === (r = null === (e = this.destination) || void 0 === e ? void 0 : e.next) || void 0 === r || r.call(e, t)
        }, e.prototype.error = function(t) {
            var e, r;
            null === (r = null === (e = this.destination) || void 0 === e ? void 0 : e.error) || void 0 === r || r.call(e, t)
        }, e.prototype.complete = function() {
            var t, e;
            null === (e = null === (t = this.destination) || void 0 === t ? void 0 : t.complete) || void 0 === e || e.call(t)
        }, e.prototype._subscribe = function(t) {
            var e, r;
            return null !== (r = null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(t)) && void 0 !== r ? r : Cr
        }, e
    }(Ce),
    xe = {
        now: function() {
            return (xe.delegate || Date).now()
        },
        delegate: void 0
    },
    ki = function(t) {
        function e(e, r, n) {
            void 0 === e && (e = 1 / 0), void 0 === r && (r = 1 / 0), void 0 === n && (n = xe);
            var i = t.call(this) || this;
            return i._bufferSize = e, i._windowTime = r, i._timestampProvider = n, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = r === 1 / 0, i._bufferSize = Math.max(1, e), i._windowTime = Math.max(1, r), i
        }
        return X(e, t), e.prototype.next = function(e) {
            var r = this,
                n = r.isStopped,
                i = r._buffer,
                s = r._infiniteTimeWindow,
                o = r._timestampProvider,
                a = r._windowTime;
            n || (i.push(e), !s && i.push(o.now() + a)), this._trimBuffer(), t.prototype.next.call(this, e)
        }, e.prototype._subscribe = function(t) {
            this._throwIfClosed(), this._trimBuffer();
            for (var e = this._innerSubscribe(t), r = this._infiniteTimeWindow, n = this._buffer.slice(), i = 0; i < n.length && !t.closed; i += r ? 1 : 2) t.next(n[i]);
            return this._checkFinalizedStatuses(t), e
        }, e.prototype._trimBuffer = function() {
            var t = this,
                e = t._bufferSize,
                r = t._timestampProvider,
                n = t._buffer,
                i = t._infiniteTimeWindow,
                s = (i ? 1 : 2) * e;
            if (e < 1 / 0 && s < n.length && n.splice(0, n.length - s), !i) {
                for (var o = r.now(), a = 0, u = 1; u < n.length && n[u] <= o; u += 2) a = u;
                a && n.splice(0, a + 1)
            }
        }, e
    }(Ce),
    zi = function(t) {
        function e(e, r) {
            return t.call(this) || this
        }
        return X(e, t), e.prototype.schedule = function(t, e) {
            return this
        }, e
    }(Ft),
    Je = {
        setInterval: function(t, e) {
            for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
            return setInterval.apply(void 0, Q([t, e], J(r)))
        },
        clearInterval: function(t) {
            return clearInterval(t)
        },
        delegate: void 0
    },
    Vi = function(t) {
        function e(e, r) {
            var n = t.call(this, e, r) || this;
            return n.scheduler = e, n.work = r, n.pending = !1, n
        }
        return X(e, t), e.prototype.schedule = function(t, e) {
            var r;
            if (void 0 === e && (e = 0), this.closed) return this;
            this.state = t;
            var n = this.id,
                i = this.scheduler;
            return null != n && (this.id = this.recycleAsyncId(i, n, e)), this.pending = !0, this.delay = e, this.id = null !== (r = this.id) && void 0 !== r ? r : this.requestAsyncId(i, this.id, e), this
        }, e.prototype.requestAsyncId = function(t, e, r) {
            return void 0 === r && (r = 0), Je.setInterval(t.flush.bind(t, this), r)
        }, e.prototype.recycleAsyncId = function(t, e, r) {
            if (void 0 === r && (r = 0), null != r && this.delay === r && !1 === this.pending) return e;
            null != e && Je.clearInterval(e)
        }, e.prototype.execute = function(t, e) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var r = this._execute(t, e);
            if (r) return r;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, e.prototype._execute = function(t, e) {
            var r, n = !1;
            try {
                this.work(t)
            } catch (t) {
                n = !0, r = t || new Error("Scheduled action threw falsy error")
            }
            if (n) return this.unsubscribe(), r
        }, e.prototype.unsubscribe = function() {
            if (!this.closed) {
                var e = this.id,
                    r = this.scheduler,
                    n = r.actions;
                this.work = this.state = this.scheduler = null, this.pending = !1, Wt(n, this), null != e && (this.id = this.recycleAsyncId(r, e, null)), this.delay = null, t.prototype.unsubscribe.call(this)
            }
        }, e
    }(zi),
    Xe = function() {
        function t(e, r) {
            void 0 === r && (r = t.now), this.schedulerActionCtor = e, this.now = r
        }
        return t.prototype.schedule = function(t, e, r) {
            return void 0 === e && (e = 0), new this.schedulerActionCtor(this, t).schedule(r, e)
        }, t.now = xe.now, t
    }(),
    Ni = function(t) {
        function e(e, r) {
            void 0 === r && (r = Xe.now);
            var n = t.call(this, e, r) || this;
            return n.actions = [], n._active = !1, n
        }
        return X(e, t), e.prototype.flush = function(t) {
            var e = this.actions;
            if (this._active) e.push(t);
            else {
                var r;
                this._active = !0;
                do {
                    if (r = t.execute(t.state, t.delay)) break
                } while (t = e.shift());
                if (this._active = !1, r) {
                    for (; t = e.shift();) t.unsubscribe();
                    throw r
                }
            }
        }, e
    }(Xe),
    Wi = new Ni(Vi),
    Hi = Wi,
    Gi = new F(function(t) {
        return t.complete()
    });

function Bi(t) {
    return t && O(t.schedule)
}

function Te(t) {
    return t[t.length - 1]
}

function Yi(t) {
    return O(Te(t)) ? t.pop() : void 0
}

function $e(t) {
    return Bi(Te(t)) ? t.pop() : void 0
}

function Qi(t, e) {
    return "number" == typeof Te(t) ? t.pop() : e
}
var Or = function(t) {
    return t && "number" == typeof t.length && "function" != typeof t
};

function Rr(t) {
    return O(t ? .then)
}

function Pr(t) {
    return O(t[Ae])
}

function Fr(t) {
    return Symbol.asyncIterator && O(t ? .[Symbol.asyncIterator])
}

function jr(t) {
    return new TypeError("You provided " + (null !== t && "object" == typeof t ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
}

function Ji() {
    return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
}
var Dr = Ji();

function Ur(t) {
    return O(t ? .[Dr])
}

function Mr(t) {
    return ai(this, arguments, function() {
        var e, r, n;
        return wr(this, function(i) {
            switch (i.label) {
                case 0:
                    e = t.getReader(), i.label = 1;
                case 1:
                    i.trys.push([1, , 9, 10]), i.label = 2;
                case 2:
                    return [4, he(e.read())];
                case 3:
                    return r = i.sent(), n = r.value, r.done ? [4, he(void 0)] : [3, 5];
                case 4:
                    return [2, i.sent()];
                case 5:
                    return [4, he(n)];
                case 6:
                    return [4, i.sent()];
                case 7:
                    return i.sent(), [3, 2];
                case 8:
                    return [3, 10];
                case 9:
                    return e.releaseLock(), [7];
                case 10:
                    return [2]
            }
        })
    })
}

function qr(t) {
    return O(t ? .getReader)
}

function B(t) {
    if (t instanceof F) return t;
    if (null != t) {
        if (Pr(t)) return Xi(t);
        if (Or(t)) return Zi(t);
        if (Rr(t)) return Ki(t);
        if (Fr(t)) return Lr(t);
        if (Ur(t)) return ts(t);
        if (qr(t)) return es(t)
    }
    throw jr(t)
}

function Xi(t) {
    return new F(function(e) {
        var r = t[Ae]();
        if (O(r.subscribe)) return r.subscribe(e);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    })
}

function Zi(t) {
    return new F(function(e) {
        for (var r = 0; r < t.length && !e.closed; r++) e.next(t[r]);
        e.complete()
    })
}

function Ki(t) {
    return new F(function(e) {
        t.then(function(t) {
            e.closed || (e.next(t), e.complete())
        }, function(t) {
            return e.error(t)
        }).then(null, Tr)
    })
}

function ts(t) {
    return new F(function(e) {
        var r, n;
        try {
            for (var i = Nt(t), s = i.next(); !s.done; s = i.next()) {
                var o = s.value;
                if (e.next(o), e.closed) return
            }
        } catch (t) {
            r = {
                error: t
            }
        } finally {
            try {
                s && !s.done && (n = i.return) && n.call(i)
            } finally {
                if (r) throw r.error
            }
        }
        e.complete()
    })
}

function Lr(t) {
    return new F(function(e) {
        rs(t, e).catch(function(t) {
            return e.error(t)
        })
    })
}

function es(t) {
    return Lr(Mr(t))
}

function rs(t, e) {
    var r, n, i, s;
    return ui(this, void 0, void 0, function() {
        var o, a;
        return wr(this, function(u) {
            switch (u.label) {
                case 0:
                    u.trys.push([0, 5, 6, 11]), r = ci(t), u.label = 1;
                case 1:
                    return [4, r.next()];
                case 2:
                    if ((n = u.sent()).done) return [3, 4];
                    if (o = n.value, e.next(o), e.closed) return [2];
                    u.label = 3;
                case 3:
                    return [3, 1];
                case 4:
                    return [3, 11];
                case 5:
                    return a = u.sent(), i = {
                        error: a
                    }, [3, 11];
                case 6:
                    return u.trys.push([6, , 9, 10]), n && !n.done && (s = r.return) ? [4, s.call(r)] : [3, 8];
                case 7:
                    u.sent(), u.label = 8;
                case 8:
                    return [3, 10];
                case 9:
                    if (i) throw i.error;
                    return [7];
                case 10:
                    return [7];
                case 11:
                    return e.complete(), [2]
            }
        })
    })
}

function at(t, e, r, n, i) {
    void 0 === n && (n = 0), void 0 === i && (i = !1);
    var s = e.schedule(function() {
        r(), i ? t.add(this.schedule(null, n)) : this.unsubscribe()
    }, n);
    if (t.add(s), !i) return s
}

function kr(t, e) {
    return void 0 === e && (e = 0), G(function(r, n) {
        r.subscribe(rt(n, function(r) {
            return at(n, t, function() {
                return n.next(r)
            }, e)
        }, function() {
            return at(n, t, function() {
                return n.complete()
            }, e)
        }, function(r) {
            return at(n, t, function() {
                return n.error(r)
            }, e)
        }))
    })
}

function zr(t, e) {
    return void 0 === e && (e = 0), G(function(r, n) {
        n.add(t.schedule(function() {
            return r.subscribe(n)
        }, e))
    })
}

function ns(t, e) {
    return B(t).pipe(zr(e), kr(e))
}

function is(t, e) {
    return B(t).pipe(zr(e), kr(e))
}

function ss(t, e) {
    return new F(function(r) {
        var n = 0;
        return e.schedule(function() {
            n === t.length ? r.complete() : (r.next(t[n++]), r.closed || this.schedule())
        })
    })
}

function os(t, e) {
    return new F(function(r) {
        var n;
        return at(r, e, function() {
                n = t[Dr](), at(r, e, function() {
                    var t, e, i;
                    try {
                        e = (t = n.next()).value, i = t.done
                    } catch (t) {
                        return void r.error(t)
                    }
                    i ? r.complete() : r.next(e)
                }, 0, !0)
            }),
            function() {
                return O(n ? .return) && n.return()
            }
    })
}

function Vr(t, e) {
    if (!t) throw new Error("Iterable cannot be null");
    return new F(function(r) {
        at(r, e, function() {
            var n = t[Symbol.asyncIterator]();
            at(r, e, function() {
                n.next().then(function(t) {
                    t.done ? r.complete() : r.next(t.value)
                })
            }, 0, !0)
        })
    })
}

function as(t, e) {
    return Vr(Mr(t), e)
}

function us(t, e) {
    if (null != t) {
        if (Pr(t)) return ns(t, e);
        if (Or(t)) return ss(t, e);
        if (Rr(t)) return is(t, e);
        if (Fr(t)) return Vr(t, e);
        if (Ur(t)) return os(t, e);
        if (qr(t)) return as(t, e)
    }
    throw jr(t)
}

function jt(t, e) {
    return e ? us(t, e) : B(t)
}

function ft() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return jt(t, $e(t))
}

function Nr(t, e) {
    var r = O(t) ? t : function() {
        return t
    };
    return new F(function(t) {
        return t.error(r())
    })
}

function cs(t) {
    return !!t && (t instanceof F || O(t.lift) && O(t.subscribe))
}
var Wr = Se(function(t) {
    return function() {
        t(this), this.name = "EmptyError", this.message = "no elements in sequence"
    }
});

function C(t, e) {
    return new Promise(function(e, r) {
        var n, i = !1;
        t.subscribe({
            next: function(t) {
                n = t, i = !0
            },
            error: r,
            complete: function() {
                i ? e(n) : r(new Wr)
            }
        })
    })
}

function pe(t, e) {
    return new Promise(function(e, r) {
        var n = new yt({
            next: function(t) {
                e(t), n.unsubscribe()
            },
            error: r,
            complete: function() {
                r(new Wr)
            }
        });
        t.subscribe(n)
    })
}

function ls(t) {
    return t instanceof Date && !isNaN(t)
}

function U(t, e) {
    return G(function(r, n) {
        var i = 0;
        r.subscribe(rt(n, function(r) {
            n.next(t.call(e, r, i++))
        }))
    })
}
var hs = Array.isArray;

function ds(t, e) {
    return hs(e) ? t.apply(void 0, Q([], J(e))) : t(e)
}

function fs(t) {
    return U(function(e) {
        return ds(t, e)
    })
}

function ps(t, e, r) {
    return void 0 === r && (r = te),
        function(n) {
            Ze(e, function() {
                for (var i = t.length, s = new Array(i), o = i, a = i, u = function(i) {
                        Ze(e, function() {
                            var u = jt(t[i], e),
                                c = !1;
                            u.subscribe(rt(n, function(t) {
                                s[i] = t, c || (c = !0, a--), a || n.next(r(s.slice()))
                            }, function() {
                                --o || n.complete()
                            }))
                        }, n)
                    }, c = 0; c < i; c++) u(c)
            })
        }
}

function Ze(t, e, r) {
    e()
}

function gs(t, e, r, n, i, s, o, a) {
    var u = [],
        c = 0,
        h = 0,
        l = !1,
        d = function() {
            l && !u.length && !c && e.complete()
        },
        f = function(t) {
            c++;
            var i = !1;
            B(r(t, h++)).subscribe(rt(e, function(t) {
                e.next(t)
            }, function() {
                i = !0
            }, void 0, function() {
                if (i) try {
                    c--;
                    for (var t = function() {
                            var t = u.shift();
                            o || f(t)
                        }; u.length && c < n;) t();
                    d()
                } catch (t) {
                    e.error(t)
                }
            }))
        };
    return t.subscribe(rt(e, function(t) {
            return c < n ? f(t) : u.push(t)
        }, function() {
            l = !0, d()
        })),
        function() {}
}

function ut(t, e, r) {
    return void 0 === r && (r = 1 / 0), O(e) ? ut(function(r, n) {
        return U(function(t, i) {
            return e(r, t, n, i)
        })(B(t(r, n)))
    }, r) : ("number" == typeof e && (r = e), G(function(e, n) {
        return gs(e, n, t, r)
    }))
}

function Hr(t) {
    return void 0 === t && (t = 1 / 0), ut(te, t)
}

function ms() {
    return Hr(1)
}

function ys() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return ms()(jt(t, $e(t)))
}

function Gr(t) {
    return new F(function(e) {
        B(t()).subscribe(e)
    })
}

function vs(t, e, r) {
    return void 0 === r && (r = Hi), new F(function(e) {
        var n = ls(t) ? +t - r.now() : t;
        n < 0 && (n = 0);
        var i = 0;
        return r.schedule(function() {
            e.closed || (e.next(i++), e.complete())
        }, n)
    })
}

function ws() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var r = $e(t),
        n = Qi(t, 1 / 0),
        i = t;
    return i.length ? 1 === i.length ? B(i[0]) : Hr(n)(jt(i, r)) : Gi
}
var bs = Array.isArray;

function _s(t) {
    return 1 === t.length && bs(t[0]) ? t[0] : t
}

function St(t, e) {
    return G(function(r, n) {
        var i = 0;
        r.subscribe(rt(n, function(r) {
            return t.call(e, r, i++) && n.next(r)
        }))
    })
}

function Ht(t) {
    return G(function(e, r) {
        var n, i = null,
            s = !1;
        i = e.subscribe(rt(r, void 0, void 0, function(o) {
            n = B(t(o, Ht(t)(e))), i ? (i.unsubscribe(), i = null, n.subscribe(r)) : s = !0
        })), s && (i.unsubscribe(), i = null, n.subscribe(r))
    })
}

function Br() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var r = Yi(t);
    return r ? ji(Br.apply(void 0, Q([], J(t))), fs(r)) : G(function(e, r) {
        ps(Q([e], J(_s(t))))(r)
    })
}

function Es() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return Br.apply(void 0, Q([], J(t)))
}

function Yr(t) {
    return G(function(e, r) {
        try {
            e.subscribe(r)
        } finally {
            r.add(t)
        }
    })
}

function Qr(t) {
    void 0 === t && (t = {});
    var e = t.connector,
        r = void 0 === e ? function() {
            return new Ce
        } : e,
        n = t.resetOnError,
        i = void 0 === n || n,
        s = t.resetOnComplete,
        o = void 0 === s || s,
        a = t.resetOnRefCountZero,
        u = void 0 === a || a;
    return function(t) {
        var e, n, s, a = 0,
            c = !1,
            h = !1,
            l = function() {
                n ? .unsubscribe(), n = void 0
            },
            d = function() {
                l(), e = s = void 0, c = h = !1
            },
            f = function() {
                var t = e;
                d(), t ? .unsubscribe()
            };
        return G(function(t, p) {
            a++, !h && !c && l();
            var g = s = s ? ? r();
            p.add(function() {
                0 === --a && !h && !c && (n = ge(f, u))
            }), g.subscribe(p), !e && a > 0 && (e = new yt({
                next: function(t) {
                    return g.next(t)
                },
                error: function(t) {
                    h = !0, l(), n = ge(d, i, t), g.error(t)
                },
                complete: function() {
                    c = !0, l(), n = ge(d, o), g.complete()
                }
            }), B(t).subscribe(e))
        })(t)
    }
}

function ge(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    if (!0 !== e) {
        if (!1 !== e) {
            var i = new yt({
                next: function() {
                    i.unsubscribe(), t()
                }
            });
            return B(e.apply(void 0, Q([], J(r)))).subscribe(i)
        }
    } else t()
}

function Ss(t, e, r) {
    var n, i, s, o, a = !1;
    return t && "object" == typeof t ? (n = t.bufferSize, o = void 0 === n ? 1 / 0 : n, i = t.windowTime, e = void 0 === i ? 1 / 0 : i, a = void 0 !== (s = t.refCount) && s, r = t.scheduler) : o = t ? ? 1 / 0, Qr({
        connector: function() {
            return new ki(o, e, r)
        },
        resetOnError: !0,
        resetOnComplete: !1,
        resetOnRefCountZero: a
    })
}

function Is(t, e, r) {
    var n = O(t) || e || r ? {
        next: t,
        error: e,
        complete: r
    } : t;
    return n ? G(function(t, e) {
        var r;
        null === (r = n.subscribe) || void 0 === r || r.call(n);
        var i = !0;
        t.subscribe(rt(e, function(t) {
            var r;
            null === (r = n.next) || void 0 === r || r.call(n, t), e.next(t)
        }, function() {
            var t;
            i = !1, null === (t = n.complete) || void 0 === t || t.call(n), e.complete()
        }, function(t) {
            var r;
            i = !1, null === (r = n.error) || void 0 === r || r.call(n, t), e.error(t)
        }, function() {
            var t, e;
            i && (null === (t = n.unsubscribe) || void 0 === t || t.call(n)), null === (e = n.finalize) || void 0 === e || e.call(n)
        }))
    }) : te
}

function Jr(t) {
    return "object" == typeof t && null !== t && !Array.isArray(t)
}
var Xr = {
        0: 8203,
        1: 8204,
        2: 8205,
        3: 8290,
        4: 8291,
        5: 8288,
        6: 65279,
        7: 8289,
        8: 119155,
        9: 119156,
        a: 119157,
        b: 119158,
        c: 119159,
        d: 119160,
        e: 119161,
        f: 119162
    },
    xt = {
        0: 8203,
        1: 8204,
        2: 8205,
        3: 65279
    },
    Tt = {
        0: String.fromCodePoint(xt[0]),
        1: String.fromCodePoint(xt[1]),
        2: String.fromCodePoint(xt[2]),
        3: String.fromCodePoint(xt[3])
    },
    As = new Array(4).fill(String.fromCodePoint(xt[0])).join("");

function Cs(t) {
    let e = JSON.stringify(t),
        r = (new TextEncoder).encode(e),
        n = "";
    for (let t = 0; t < r.length; t++) {
        let e = r[t];
        n += Tt[e >> 6 & 3] + Tt[e >> 4 & 3] + Tt[e >> 2 & 3] + Tt[3 & e]
    }
    return As + n
}

function xs(t) {
    return !(!Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t)) && !!Date.parse(t)
}

function Ts(t) {
    try {
        new URL(t, t.startsWith("/") ? "https://acme.com" : void 0)
    } catch {
        return !1
    }
    return !0
}

function Ru(t, e, r = "auto") {
    return !0 === r || "auto" === r && (xs(t) || Ts(t)) ? t : `${t}${Cs(e)}`
}
Object.fromEntries(Object.entries(Tt).map(t => [t[1], +t[0]])), Object.fromEntries(Object.entries(Xr).map(t => t.reverse()));
var $s = `${Object.values(Xr).map(t=>`\\u{${t.toString(16)}}`).join("")}`,
    Ke = new RegExp(`[${$s}]{4,}`, "gu");

function Os(t) {
    var e;
    return {
        cleaned: t.replace(Ke, ""),
        encoded: (null == (e = t.match(Ke)) ? void 0 : e[0]) || ""
    }
}

function Rs(t) {
    return t && JSON.parse(Os(JSON.stringify(t)).cleaned)
}

function Ps(t) {
    return Rs(t)
}
const Fs = "drafts",
    js = "versions",
    vt = ".",
    Gt = `${Fs}${vt}`,
    Zr = `${js}${vt}`;

function ee(t) {
    return t.startsWith(Gt)
}

function re(t) {
    return t.startsWith(Zr)
}

function Kr(t) {
    if (re(t)) {
        const e = ne(t);
        return Gt + e
    }
    return ee(t) ? t : Gt + t
}

function Dt(t, e) {
    if ("drafts" === e || "published" === e) throw new Error('Version can not be "published" or "drafts"');
    return `${Zr}${e}${vt}${ne(t)}`
}

function tn(t) {
    if (!re(t)) return;
    const [e, r] = t.split(vt);
    return r
}

function ne(t) {
    return re(t) ? t.split(vt).slice(2).join(vt) : ee(t) ? t.slice(Gt.length) : t
}
let Ds = t => crypto.getRandomValues(new Uint8Array(t)),
    Us = (t, e, r) => {
        let n = (2 << Math.log(t.length - 1) / Math.LN2) - 1,
            i = -~(1.6 * n * e / t.length);
        return (s = e) => {
            let o = "";
            for (;;) {
                let e = r(i),
                    a = 0 | i;
                for (; a--;)
                    if (o += t[e[a] & n] || "", o.length === s) return o
            }
        }
    },
    Ms = (t, e = 21) => Us(t, e, Ds),
    Pu = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((t, e) => t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_", "");
const tr = /\r\n|[\n\r\u2028\u2029]/;

function qs(t, e, r) {
    const n = t.split(tr),
        i = {
            start: er(e.start, n),
            end: e.end ? er(e.end, n) : void 0
        },
        {
            start: s,
            end: o,
            markerLines: a
        } = Ls(i, n),
        u = `${o}`.length;
    return t.split(tr, o).slice(s, o).map((t, e) => {
        const n = s + 1 + e,
            i = ` ${` ${n}`.slice(-u)} |`,
            o = a[n],
            c = !a[n + 1];
        if (!o) return ` ${i}${t.length>0?` ${t}`:""}`;
        let h = "";
        if (Array.isArray(o)) {
            const e = t.slice(0, Math.max(o[0] - 1, 0)).replace(/[^\t]/g, " "),
                n = o[1] || 1;
            h = ["\n ", i.replace(/\d/g, " "), " ", e, "^".repeat(n)].join(""), c && r && (h += " " + r)
        }
        return [">", i, t.length > 0 ? ` ${t}` : "", h].join("")
    }).join("\n")
}

function Ls(t, e) {
    const r = { ...t.start
        },
        n = { ...r,
            ...t.end
        },
        i = r.line ? ? -1,
        s = r.column ? ? 0,
        o = n.line,
        a = n.column;
    let u = Math.max(i - 3, 0),
        c = Math.min(e.length, o + 3); - 1 === i && (u = 0), -1 === o && (c = e.length);
    const h = o - i,
        l = {};
    if (h)
        for (let t = 0; t <= h; t++) {
            const r = t + i;
            if (s)
                if (0 === t) {
                    const t = e[r - 1].length;
                    l[r] = [s, t - s + 1]
                } else if (t === h) l[r] = [0, a];
            else {
                const n = e[r - t].length;
                l[r] = [0, n]
            } else l[r] = !0
        } else l[i] = s === a ? !s || [s, 0] : [s, a - s];
    return {
        start: u,
        end: c,
        markerLines: l
    }
}

function er(t, e) {
    let r = 0;
    for (let n = 0; n < e.length; n++) {
        const i = e[n].length + 1;
        if (r + i > t) return {
            line: n + 1,
            column: t - r
        };
        r += i
    }
    return {
        line: e.length,
        column: e[e.length - 1] ? .length ? ? 0
    }
}
const me = 5;
class ks extends Error {
    response;
    statusCode = 400;
    responseBody;
    traceId;
    details;
    constructor(t, e) {
        const r = en(t, e);
        super(r.message), Object.assign(this, r)
    }
}
class zs extends Error {
    response;
    statusCode = 500;
    responseBody;
    traceId;
    details;
    constructor(t) {
        const e = en(t);
        super(e.message), Object.assign(this, e)
    }
}

function en(t, e) {
    const r = t.body,
        n = {
            response: t,
            statusCode: t.statusCode,
            responseBody: Hs(r, t),
            traceId: Ws(t),
            message: "",
            details: void 0
        };
    if (!Jr(r)) return n.message = `${ye(t,r)}${K(n.traceId)}`, n;
    const i = r.error;
    if ("string" == typeof i && "string" == typeof r.message) return n.message = `${i} - ${r.message}${K(n.traceId)}`, n;
    if ("object" != typeof i || null === i) return "string" == typeof i ? n.message = `${i}${K(n.traceId)}` : "string" == typeof r.message ? n.message = `${r.message}${K(n.traceId)}` : n.message = `${ye(t,r)}${K(n.traceId)}`, n;
    if (Vs(i) || Ns(i)) {
        const t = i.items || [],
            e = t.slice(0, 5).map(t => t.error ? .description).filter(Boolean);
        let s = e.length ? `:\n- ${e.join("\n- ")}` : "";
        return t.length > 5 && (s += `\n...and ${t.length-5} more`), n.message = `${i.description}${K(n.traceId)}${s}`, n.details = r.error, n
    }
    if (rn(i)) {
        const t = e ? .options ? .query ? .tag;
        return n.message = nn(i, t, n.traceId), n.details = r.error, n
    }
    return "description" in i && "string" == typeof i.description ? (n.message = `${i.description}${K(n.traceId)}`, n.details = i, n) : (n.message = `${ye(t,r)}${K(n.traceId)}`, n)
}

function Vs(t) {
    return "type" in t && "mutationError" === t.type && "description" in t && "string" == typeof t.description
}

function Ns(t) {
    return "type" in t && "actionError" === t.type && "description" in t && "string" == typeof t.description
}

function rn(t) {
    return Jr(t) && "queryParseError" === t.type && "string" == typeof t.query && "number" == typeof t.start && "number" == typeof t.end
}

function nn(t, e, r) {
    const {
        query: n,
        start: i,
        end: s,
        description: o
    } = t, a = r ? `\n(traceId: ${r})` : "";
    if (!n || typeof i > "u") return `GROQ query parse error: ${o}${a}`;
    const u = e ? `\n\nTag: ${e}` : "";
    return `GROQ query parse error:\n${qs(n,{start:i,end:s},o)}${u}${a}`
}

function ye(t, e) {
    const r = "string" == typeof e ? ` (${Gs(e,100)})` : "",
        n = t.statusMessage ? ` ${t.statusMessage}` : "";
    return `${t.method}-request to ${t.url} resulted in HTTP ${t.statusCode}${n}${r}`
}

function Ws(t) {
    const e = t ? .headers ? .traceparent;
    if (e) return e.split("-")[1]
}

function Hs(t, e) {
    return -1 !== (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? JSON.stringify(t, null, 2) : t
}

function K(t) {
    return t ? ` (traceId: ${t})` : ""
}

function Gs(t, e) {
    return t.length > e ? `${t.slice(0,e)}…` : t
}
class Bs extends Error {
    projectId;
    addOriginUrl;
    constructor({
        projectId: t
    }) {
        super("CorsOriginError"), this.name = "CorsOriginError", this.projectId = t;
        const e = new URL(`https://sanity.io/manage/project/${t}/api`);
        if (typeof location < "u") {
            const {
                origin: t
            } = location;
            e.searchParams.set("cors", "add"), e.searchParams.set("origin", t), this.addOriginUrl = e, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${e}`
        } else this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${e}`
    }
}
const Ys = {
    onResponse: (t, e) => {
        if (t.statusCode >= 500) throw new zs(t);
        if (t.statusCode >= 400) throw new ks(t, e);
        return t
    }
};

function Qs(t = {}) {
    const e = {},
        r = e => void 0 !== t.ignoreWarnings && (Array.isArray(t.ignoreWarnings) ? t.ignoreWarnings : [t.ignoreWarnings]).some(t => "string" == typeof t ? e.includes(t) : t instanceof RegExp && t.test(e));
    return {
        onResponse: t => {
            const n = t.headers["x-sanity-warning"],
                i = Array.isArray(n) ? n : [n];
            for (const t of i) !t || e[t] || r(t) || (e[t] = !0, console.warn(t));
            return t
        }
    }
}

function rr(t, e = {}) {
    return vi([Ee({
        shouldRetry: Js
    }), ...t, Qs(e), Si(), Ii(), xi(), Ys, Ci({
        implementation: F
    })])
}

function Js(t, e, r) {
    if (0 === r.maxRetries) return !1;
    const n = "GET" === r.method || "HEAD" === r.method,
        i = (r.uri || r.url).startsWith("/data/query"),
        s = t.response && (429 === t.response.statusCode || 502 === t.response.statusCode || 503 === t.response.statusCode);
    return !(!n && !i || !s) || Ee.shouldRetry(t, e, r)
}
const Xs = "https://www.sanity.io/help/";

function Oe(t) {
    return Xs + t
}
const nr = ["image", "file"],
    ir = ["before", "after", "replace"],
    wt = t => {
        if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(t)) throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")
    },
    Zs = t => {
        if (!/^[-a-z0-9]+$/i.test(t)) throw new Error("`projectId` can only contain only a-z, 0-9 and dashes")
    },
    Ks = t => {
        if (-1 === nr.indexOf(t)) throw new Error(`Invalid asset type: ${t}. Must be one of ${nr.join(", ")}`)
    },
    Ot = (t, e) => {
        if (null === e || "object" != typeof e || Array.isArray(e)) throw new Error(`${t}() takes an object of properties`)
    },
    Bt = (t, e) => {
        if ("string" != typeof e || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(e) || e.includes("..")) throw new Error(`${t}(): "${e}" is not a valid document ID`)
    },
    bt = (t, e) => {
        if (!e._id) throw new Error(`${t}() requires that the document contains an ID ("_id" property)`);
        Bt(t, e._id)
    },
    to = (t, e) => {
        if ("string" != typeof e) throw new Error(`\`${t}()\`: \`${e}\` is not a valid document type`)
    },
    sn = (t, e) => {
        if (!e._type) throw new Error(`\`${t}()\` requires that the document contains a type (\`_type\` property)`);
        to(t, e._type)
    },
    eo = (t, e) => {
        if (e._id && e._id !== t) throw new Error(`The provided document ID (\`${e._id}\`) does not match the generated version ID (\`${t}\`)`)
    },
    ro = (t, e, r) => {
        const n = "insert(at, selector, items)";
        if (-1 === ir.indexOf(t)) {
            const t = ir.map(t => `"${t}"`).join(", ");
            throw new Error(`${n} takes an "at"-argument which is one of: ${t}`)
        }
        if ("string" != typeof e) throw new Error(`${n} takes a "selector"-argument which must be a string`);
        if (!Array.isArray(r)) throw new Error(`${n} takes an "items"-argument which must be an array`)
    },
    lt = t => {
        if (t.dataset) return t.dataset;
        const e = t.resource;
        if (e && "dataset" === e.type) {
            const t = e.id.split(".");
            if (2 !== t.length) throw new Error('Dataset resource ID must be in the format "project.dataset"');
            return t[1]
        }
        throw new Error("`dataset` must be provided to perform queries")
    },
    on = t => {
        if ("string" != typeof t || !/^[a-z0-9._-]{1,75}$/i.test(t)) throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
        return t
    },
    an = t => {
        const e = t.resource;
        if (!e) throw new Error("`resource` must be provided to perform resource queries");
        const {
            type: r,
            id: n
        } = e;
        switch (r) {
            case "dataset":
                if (2 !== n.split(".").length) throw new Error('Dataset resource ID must be in the format "project.dataset"');
                return;
            case "dashboard":
            case "media-library":
            case "canvas":
                return;
            default:
                throw new Error(`Unsupported resource type: ${r.toString()}`)
        }
    },
    H = (t, e) => {
        if (e.resource) throw new Error(`\`${t}\` does not support resource-based operations`)
    };

function no(t) {
    let e, r = !1;
    return (...n) => (r || (e = t(...n), r = !0), e)
}
const Z = t => no((...e) => console.warn(t.join(" "), ...e)),
    io = Z(["Because you set `withCredentials` to true, we will override your `useCdn`", "setting to be false since (cookie-based) credentials are never set on the CDN"]),
    so = Z(["Since you haven't set a value for `useCdn`, we will deliver content using our", "global, edge-cached API-CDN. If you wish to have content delivered faster, set", "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."]),
    oo = Z(["The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]),
    ao = Z(["The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"]),
    uo = Z(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${Oe("js-client-browser-token")} for more information and how to hide this warning.`]),
    co = Z(["You have configured Sanity client to use a token, but also provided `withCredentials: true`.", "This is no longer supported - only token will be used - remove `withCredentials: true`."]),
    lo = Z(["Using the Sanity client without specifying an API version is deprecated.", `See ${Oe("js-client-api-version")}`]),
    ho = Z(["You have called `createVersion()` with a defined `document`. The recommended approach is to provide a `baseId` and `releaseId` instead."]),
    fo = Z(["The `~experimental_resource` configuration property has been renamed to `resource`.", "Please update your client configuration to use `resource` instead. Support for `~experimental_resource` will be removed in a future version."]),
    po = "apicdn.sanity.io",
    Rt = {
        apiHost: "https://api.sanity.io",
        apiVersion: "1",
        useProjectHostname: !0,
        stega: {
            enabled: !1
        }
    },
    go = ["localhost", "127.0.0.1", "0.0.0.0"],
    mo = t => -1 !== go.indexOf(t);

function yo(t) {
    if ("1" === t || "X" === t) return;
    const e = new Date(t);
    if (!(/^\d{4}-\d{2}-\d{2}$/.test(t) && e instanceof Date && e.getTime() > 0)) throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")
}

function un(t) {
    if (Array.isArray(t) && t.length > 1 && t.includes("raw")) throw new TypeError('Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives')
}
const cn = (t, e) => {
    const r = { ...e,
        ...t,
        stega: { ..."boolean" == typeof e.stega ? {
                enabled: e.stega
            } : e.stega || Rt.stega,
            ..."boolean" == typeof t.stega ? {
                enabled: t.stega
            } : t.stega || {}
        }
    };
    r.apiVersion || lo();
    const n = { ...Rt,
        ...r
    };
    n["~experimental_resource"] && !n.resource && (fo(), n.resource = n["~experimental_resource"]);
    const i = n.resource,
        s = n.useProjectHostname && !i;
    if (typeof Promise > "u") {
        const t = Oe("js-client-promise-polyfill");
        throw new Error(`No native Promise-implementation found, polyfill needed - see ${t}`)
    }
    if (s && !n.projectId) throw new Error("Configuration must contain `projectId`");
    if (i && an(n), typeof n.perspective < "u" && un(n.perspective), "encodeSourceMap" in n) throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
    if ("encodeSourceMapAtPath" in n) throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
    if ("boolean" != typeof n.stega.enabled) throw new Error(`stega.enabled must be a boolean, received ${n.stega.enabled}`);
    if (n.stega.enabled && void 0 === n.stega.studioUrl) throw new Error("stega.studioUrl must be defined when stega.enabled is true");
    if (n.stega.enabled && "string" != typeof n.stega.studioUrl && "function" != typeof n.stega.studioUrl) throw new Error(`stega.studioUrl must be a string or a function, received ${n.stega.studioUrl}`);
    const o = typeof window < "u" && window.location && window.location.hostname,
        a = o && mo(window.location.hostname),
        u = !!n.token;
    n.withCredentials && u && (co(), n.withCredentials = !1), o && a && u && !0 !== n.ignoreBrowserTokenWarning ? uo() : typeof n.useCdn > "u" && so(), s && Zs(n.projectId), n.dataset && wt(n.dataset), "requestTagPrefix" in n && (n.requestTagPrefix = n.requestTagPrefix ? on(n.requestTagPrefix).replace(/\.+$/, "") : void 0), n.apiVersion = `${n.apiVersion}`.replace(/^v/, ""), n.isDefaultApi = n.apiHost === Rt.apiHost, !0 === n.useCdn && n.withCredentials && io(), n.useCdn = !1 !== n.useCdn && !n.withCredentials, yo(n.apiVersion);
    const c = n.apiHost.split("://", 2),
        h = c[0],
        l = c[1],
        d = n.isDefaultApi ? po : l;
    return s ? (n.url = `${h}://${n.projectId}.${l}/v${n.apiVersion}`, n.cdnUrl = `${h}://${n.projectId}.${d}/v${n.apiVersion}`) : (n.url = `${n.apiHost}/v${n.apiVersion}`, n.cdnUrl = n.url), n
};
class ln extends Error {
    name = "ConnectionFailedError"
}
class vo extends Error {
    name = "DisconnectError";
    reason;
    constructor(t, e, r = {}) {
        super(t, r), this.reason = e
    }
}
class wo extends Error {
    name = "ChannelError";
    data;
    constructor(t, e) {
        super(t), this.data = e
    }
}
class bo extends Error {
    name = "MessageError";
    data;
    constructor(t, e, r = {}) {
        super(t, r), this.data = e
    }
}
class sr extends Error {
    name = "MessageParseError"
}
const _o = ["channelError", "disconnect"];

function hn(t, e) {
    return Gr(() => {
        const e = t();
        return cs(e) ? e : ft(e)
    }).pipe(ut(t => Eo(t, e)))
}

function Eo(t, e) {
    return new F(r => {
        const n = e.includes("open"),
            i = e.includes("reconnect");

        function s(e) {
            if ("data" in e) {
                const [t, n] = or(e);
                return void r.error(t ? new sr("Unable to parse EventSource error message", {
                    cause: n
                }) : new bo((n ? .data).message, n))
            }
            t.readyState === t.CLOSED ? r.error(new ln("EventSource connection failed")) : i && r.next({
                type: "reconnect"
            })
        }

        function o() {
            r.next({
                type: "open"
            })
        }

        function a(e) {
            const [n, i] = or(e);
            if (n) r.error(new sr("Unable to parse EventSource message", {
                cause: n
            }));
            else {
                if ("channelError" === e.type) {
                    const e = new URL(t.url).searchParams.get("tag");
                    return void r.error(new wo(So(i ? .data, e), i.data))
                }
                "disconnect" !== e.type ? r.next({
                    type: e.type,
                    id: e.lastEventId,
                    ...i.data ? {
                        data: i.data
                    } : {}
                }) : r.error(new vo(`Server disconnected client: ${i.data?.reason||"unknown error"}`))
            }
        }
        t.addEventListener("error", s), n && t.addEventListener("open", o);
        const u = [...new Set([..._o, ...e])].filter(t => "error" !== t && "open" !== t && "reconnect" !== t);
        return u.forEach(e => t.addEventListener(e, a)), () => {
            t.removeEventListener("error", s), n && t.removeEventListener("open", o), u.forEach(e => t.removeEventListener(e, a)), t.close()
        }
    })
}

function or(t) {
    try {
        const e = "string" == typeof t.data && JSON.parse(t.data);
        return [null, {
            type: t.type,
            id: t.lastEventId,
            ...Io(e) ? {} : {
                data: e
            }
        }]
    } catch (t) {
        return [t, null]
    }
}

function So(t, e) {
    const r = t.error;
    return r ? rn(r) ? nn(r, e) : r.description ? r.description : "string" == typeof r ? r : JSON.stringify(r, null, 2) : t.message || "Unknown listener error"
}

function Io(t) {
    for (const e in t) return !1;
    return !0
}

function dn(t) {
    if ("string" == typeof t) return {
        id: t
    };
    if (Array.isArray(t)) return {
        query: "*[_id in $ids]",
        params: {
            ids: t
        }
    };
    if ("object" == typeof t && null !== t && "query" in t && "string" == typeof t.query) return "params" in t && "object" == typeof t.params && null !== t.params ? {
        query: t.query,
        params: t.params
    } : {
        query: t.query
    };
    const e = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join("\n");
    throw new Error(`Unknown selection - must be one of:\n\n${e}`)
}
class fn {
    selection;
    operations;
    constructor(t, e = {}) {
        this.selection = t, this.operations = e
    }
    set(t) {
        return this._assign("set", t)
    }
    setIfMissing(t) {
        return this._assign("setIfMissing", t)
    }
    diffMatchPatch(t) {
        return Ot("diffMatchPatch", t), this._assign("diffMatchPatch", t)
    }
    unset(t) {
        if (!Array.isArray(t)) throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        return this.operations = Object.assign({}, this.operations, {
            unset: t
        }), this
    }
    inc(t) {
        return this._assign("inc", t)
    }
    dec(t) {
        return this._assign("dec", t)
    }
    insert(t, e, r) {
        return ro(t, e, r), this._assign("insert", {
            [t]: e,
            items: r
        })
    }
    append(t, e) {
        return this.insert("after", `${t}[-1]`, e)
    }
    prepend(t, e) {
        return this.insert("before", `${t}[0]`, e)
    }
    splice(t, e, r, n) {
        const i = e < 0 ? e - 1 : e,
            s = typeof r > "u" || -1 === r ? -1 : Math.max(0, e + r),
            o = `${t}[${i}:${i<0&&s>=0?"":s}]`;
        return this.insert("replace", o, n || [])
    }
    ifRevisionId(t) {
        return this.operations.ifRevisionID = t, this
    }
    serialize() {
        return { ...dn(this.selection),
            ...this.operations
        }
    }
    toJSON() {
        return this.serialize()
    }
    reset() {
        return this.operations = {}, this
    }
    _assign(t, e, r = !0) {
        return Ot(t, e), this.operations = Object.assign({}, this.operations, {
            [t]: Object.assign({}, r && this.operations[t] || {}, e)
        }), this
    }
    _set(t, e) {
        return this._assign(t, e, !1)
    }
}
class ct extends fn {#
    t;
    constructor(t, e, r) {
        super(t, e), this.#t = r
    }
    clone() {
        return new ct(this.selection, { ...this.operations
        }, this.#t)
    }
    commit(t) {
        if (!this.#t) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        const e = "string" == typeof this.selection,
            r = Object.assign({
                returnFirst: e,
                returnDocuments: !0
            }, t);
        return this.#t.mutate({
            patch: this.serialize()
        }, r)
    }
}
class et extends fn {#
    t;
    constructor(t, e, r) {
        super(t, e), this.#t = r
    }
    clone() {
        return new et(this.selection, { ...this.operations
        }, this.#t)
    }
    commit(t) {
        if (!this.#t) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        const e = "string" == typeof this.selection,
            r = Object.assign({
                returnFirst: e,
                returnDocuments: !0
            }, t);
        return this.#t.mutate({
            patch: this.serialize()
        }, r)
    }
}
const pn = {
    returnDocuments: !1
};
class gn {
    operations;
    trxId;
    constructor(t = [], e) {
        this.operations = t, this.trxId = e
    }
    create(t) {
        return Ot("create", t), this._add({
            create: t
        })
    }
    createIfNotExists(t) {
        const e = "createIfNotExists";
        return Ot(e, t), bt(e, t), this._add({
            [e]: t
        })
    }
    createOrReplace(t) {
        const e = "createOrReplace";
        return Ot(e, t), bt(e, t), this._add({
            [e]: t
        })
    }
    delete(t) {
        return Bt("delete", t), this._add({
            delete: {
                id: t
            }
        })
    }
    transactionId(t) {
        return t ? (this.trxId = t, this) : this.trxId
    }
    serialize() {
        return [...this.operations]
    }
    toJSON() {
        return this.serialize()
    }
    reset() {
        return this.operations = [], this
    }
    _add(t) {
        return this.operations.push(t), this
    }
}
class ie extends gn {#
    t;
    constructor(t, e, r) {
        super(t, r), this.#t = e
    }
    clone() {
        return new ie([...this.operations], this.#t, this.trxId)
    }
    commit(t) {
        if (!this.#t) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        return this.#t.mutate(this.serialize(), Object.assign({
            transactionId: this.trxId
        }, pn, t || {}))
    }
    patch(t, e) {
        const r = "function" == typeof e,
            n = "object" == typeof t && ("query" in t || "id" in t);
        if ("string" != typeof t && t instanceof et) return this._add({
            patch: t.serialize()
        });
        if (r) {
            const r = e(new et(t, {}, this.#t));
            if (!(r instanceof et)) throw new Error("function passed to `patch()` must return the patch");
            return this._add({
                patch: r.serialize()
            })
        }
        if (n) {
            const r = new et(t, e || {}, this.#t);
            return this._add({
                patch: r.serialize()
            })
        }
        return this._add({
            patch: {
                id: t,
                ...e
            }
        })
    }
}
class se extends gn {#
    t;
    constructor(t, e, r) {
        super(t, r), this.#t = e
    }
    clone() {
        return new se([...this.operations], this.#t, this.trxId)
    }
    commit(t) {
        if (!this.#t) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        return this.#t.mutate(this.serialize(), Object.assign({
            transactionId: this.trxId
        }, pn, t || {}))
    }
    patch(t, e) {
        const r = "function" == typeof e;
        if ("string" != typeof t && t instanceof ct) return this._add({
            patch: t.serialize()
        });
        if (r) {
            const r = e(new ct(t, {}, this.#t));
            if (!(r instanceof ct)) throw new Error("function passed to `patch()` must return the patch");
            return this._add({
                patch: r.serialize()
            })
        }
        return this._add({
            patch: {
                id: t,
                ...e
            }
        })
    }
}
const Ao = "X-Sanity-Project-ID";

function Co(t, e = {}) {
    const r = {};
    t.headers && Object.assign(r, t.headers);
    const n = e.token || t.token;
    n && (r.Authorization = `Bearer ${n}`), !e.useGlobalApi && !t.useProjectHostname && t.projectId && (r[Ao] = t.projectId);
    const i = !!(typeof e.withCredentials > "u" ? t.withCredentials : e.withCredentials),
        s = typeof e.timeout > "u" ? t.timeout : e.timeout;
    return Object.assign({}, e, {
        headers: Object.assign({}, r, e.headers || {}),
        timeout: typeof s > "u" ? 3e5 : s,
        proxy: e.proxy || t.proxy,
        json: !0,
        withCredentials: i,
        fetch: "object" == typeof e.fetch && "object" == typeof t.fetch ? { ...t.fetch,
            ...e.fetch
        } : e.fetch || t.fetch
    })
}
const mn = ({
        query: t,
        params: e = {},
        options: r = {}
    }) => {
        const n = new URLSearchParams,
            {
                tag: i,
                includeMutations: s,
                returnQuery: o,
                ...a
            } = r;
        i && n.append("tag", i), n.append("query", t);
        for (const [t, r] of Object.entries(e)) void 0 !== r && n.append(`$${t}`, JSON.stringify(r));
        for (const [t, e] of Object.entries(a)) e && n.append(t, `${e}`);
        return !1 === o && n.append("returnQuery", "false"), !1 === s && n.append("includeMutations", "false"), `?${n}`
    },
    xo = (t, e) => !1 === t ? void 0 : typeof t > "u" ? e : t,
    To = (t = {}) => ({
        dryRun: t.dryRun,
        returnIds: !0,
        returnDocuments: xo(t.returnDocuments, !0),
        visibility: t.visibility || "sync",
        autoGenerateArrayKeys: t.autoGenerateArrayKeys,
        skipCrossDatasetReferenceValidation: t.skipCrossDatasetReferenceValidation
    }),
    Re = t => "response" === t.type,
    $o = t => t.body,
    Oo = (t, e) => t.reduce((t, r) => (t[e(r)] = r, t), Object.create(null)),
    Ro = 11264;

function yn(t, e, r, n, i = {}, s = {}) {
    const o = "stega" in s ? { ...r || {},
            ..."boolean" == typeof s.stega ? {
                enabled: s.stega
            } : s.stega || {}
        } : r,
        a = o.enabled ? Ps(i) : i,
        u = !1 === s.filterResponse ? t => t : t => t.result,
        {
            cache: c,
            next: h,
            ...l
        } = {
            useAbortSignal: typeof s.signal < "u",
            resultSourceMap: o.enabled ? "withKeyArraySelector" : s.resultSourceMap,
            ...s,
            returnQuery: !1 === s.filterResponse && !1 !== s.returnQuery
        },
        d = ht(t, e, "query", {
            query: n,
            params: a
        }, typeof c < "u" || typeof h < "u" ? { ...l,
            fetch: {
                cache: c,
                next: h
            }
        } : l);
    return o.enabled ? d.pipe(Es(jt(vr(() =>
        import ("./stegaEncodeSourceMap.GX-gZh2g.js"), []).then(function(t) {
        return t.stegaEncodeSourceMap$1
    }).then(({
        stegaEncodeSourceMap: t
    }) => t))), U(([t, e]) => {
        const r = e(t.result, t.resultSourceMap, o);
        return u({ ...t,
            result: r
        })
    })) : d.pipe(U(u))
}

function _t(t, e, r, n = {}) {
    return Mt(t, e, {
        uri: L(t, "doc", (() => {
            if (!n.releaseId) return r;
            const t = tn(r);
            if (!t) {
                if (ee(r)) throw new Error(`The document ID (\`${r}\`) is a draft, but \`options.releaseId\` is set as \`${n.releaseId}\``);
                return Dt(r, n.releaseId)
            }
            if (t !== n.releaseId) throw new Error(`The document ID (\`${r}\`) is already a version of \`${t}\` release, but this does not match the provided \`options.releaseId\` (\`${n.releaseId}\`)`);
            return r
        })()),
        json: !0,
        tag: n.tag,
        signal: n.signal,
        query: void 0 !== n.includeAllVersions ? {
            includeAllVersions: n.includeAllVersions
        } : void 0
    }).pipe(St(Re), U(t => {
        const e = t.body.documents;
        return e ? n.includeAllVersions ? e : e[0] : n.includeAllVersions ? [] : void 0
    }))
}

function vn(t, e, r, n = {}) {
    return Mt(t, e, {
        uri: L(t, "doc", r.join(",")),
        json: !0,
        tag: n.tag,
        signal: n.signal
    }).pipe(St(Re), U(t => {
        const e = Oo(t.body.documents || [], t => t._id);
        return r.map(t => e[t] || null)
    }))
}

function wn(t, e, r, n = {}) {
    return ht(t, e, "query", {
        query: "*[sanity::partOfRelease($releaseId)]",
        params: {
            releaseId: r
        }
    }, n)
}

function bn(t, e, r, n) {
    return bt("createIfNotExists", r), oe(t, e, r, "createIfNotExists", n)
}

function _n(t, e, r, n) {
    return bt("createOrReplace", r), oe(t, e, r, "createOrReplace", n)
}

function En(t, e, r, n, i) {
    return bt("createVersion", r), sn("createVersion", r), ho(), R(t, e, {
        actionType: "sanity.action.document.version.create",
        publishedId: n,
        document: r
    }, i)
}

function Sn(t, e, r, n, i, s, o) {
    if (!n) throw new Error("`createVersion()` requires `baseId` when no `document` is provided");
    if (!r) throw new Error("`createVersion()` requires `publishedId` when `baseId` is provided");
    Bt("createVersion", n), Bt("createVersion", r);
    return R(t, e, {
        actionType: "sanity.action.document.version.create",
        publishedId: r,
        baseId: n,
        versionId: i ? Dt(r, i) : Kr(r),
        ifBaseRevisionId: s
    }, o)
}

function In(t, e, r, n) {
    return ht(t, e, "mutate", {
        mutations: [{
            delete: dn(r)
        }]
    }, n)
}

function An(t, e, r, n = !1, i) {
    return R(t, e, {
        actionType: "sanity.action.document.version.discard",
        versionId: r,
        purge: n
    }, i)
}

function Cn(t, e, r, n) {
    return bt("replaceVersion", r), sn("replaceVersion", r), R(t, e, {
        actionType: "sanity.action.document.version.replace",
        document: r
    }, n)
}

function xn(t, e, r, n, i) {
    return R(t, e, {
        actionType: "sanity.action.document.version.unpublish",
        versionId: r,
        publishedId: n
    }, i)
}

function Tn(t, e, r, n) {
    let i;
    i = r instanceof et || r instanceof ct ? {
        patch: r.serialize()
    } : r instanceof ie || r instanceof se ? r.serialize() : r;
    return ht(t, e, "mutate", {
        mutations: Array.isArray(i) ? i : [i],
        transactionId: n && n.transactionId || void 0
    }, n)
}

function R(t, e, r, n) {
    return ht(t, e, "actions", {
        actions: Array.isArray(r) ? r : [r],
        transactionId: n && n.transactionId || void 0,
        skipCrossDatasetReferenceValidation: n && n.skipCrossDatasetReferenceValidation || void 0,
        dryRun: n && n.dryRun || void 0
    }, n)
}

function ht(t, e, r, n, i = {}) {
    const s = "mutate" === r,
        o = "actions" === r,
        a = "query" === r,
        u = s || o ? "" : mn(n),
        c = !s && !o && u.length < Ro,
        h = c ? u : "",
        l = i.returnFirst,
        {
            timeout: d,
            token: f,
            tag: p,
            headers: g,
            returnQuery: y,
            lastLiveEventId: m,
            cacheMode: v
        } = i;
    return Mt(t, e, {
        method: c ? "GET" : "POST",
        uri: L(t, r, h),
        json: !0,
        body: c ? void 0 : n,
        query: s && To(i),
        timeout: d,
        headers: g,
        token: f,
        tag: p,
        returnQuery: y,
        perspective: i.perspective,
        resultSourceMap: i.resultSourceMap,
        lastLiveEventId: Array.isArray(m) ? m[0] : m,
        cacheMode: v,
        canUseCdn: a,
        signal: i.signal,
        fetch: i.fetch,
        useAbortSignal: i.useAbortSignal,
        useCdn: i.useCdn
    }).pipe(St(Re), U($o), U(t => {
        if (!s) return t;
        const e = t.results || [];
        if (i.returnDocuments) return l ? e[0] && e[0].document : e.map(t => t.document);
        const r = l ? "documentId" : "documentIds",
            n = l ? e[0] && e[0].id : e.map(t => t.id);
        return {
            transactionId: t.transactionId,
            results: e,
            [r]: n
        }
    }))
}

function oe(t, e, r, n, i = {}) {
    return ht(t, e, "mutate", {
        mutations: [{
            [n]: r
        }]
    }, Object.assign({
        returnFirst: !0,
        returnDocuments: !0
    }, i))
}
const Ut = t => {
        const e = t.config();
        return void 0 !== e.dataset && void 0 !== e.projectId || void 0 !== e.resource
    },
    $n = (t, e) => Ut(t) && e.startsWith(L(t, "query")),
    Po = (t, e) => Ut(t) && e.startsWith(L(t, "mutate")),
    Fo = (t, e) => Ut(t) && e.startsWith(L(t, "doc", "")),
    jo = (t, e) => Ut(t) && e.startsWith(L(t, "listen")),
    Do = (t, e) => Ut(t) && e.startsWith(L(t, "history", "")),
    Uo = (t, e) => e.startsWith("/data/") || $n(t, e) || Po(t, e) || Fo(t, e) || jo(t, e) || Do(t, e);

function Mt(t, e, r) {
    const n = r.url || r.uri,
        i = t.config(),
        s = typeof r.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 && Uo(t, n) : r.canUseCdn;
    let o = (r.useCdn ? ? i.useCdn) && s;
    const a = r.tag && i.requestTagPrefix ? [i.requestTagPrefix, r.tag].join(".") : r.tag || i.requestTagPrefix;
    if (a && null !== r.tag && (r.query = {
            tag: on(a),
            ...r.query
        }), ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 && $n(t, n)) {
        const t = r.resultSourceMap ? ? i.resultSourceMap;
        void 0 !== t && !1 !== t && (r.query = {
            resultSourceMap: t,
            ...r.query
        });
        const e = r.perspective || i.perspective;
        typeof e < "u" && ("previewDrafts" === e && ao(), un(e), r.query = {
            perspective: Array.isArray(e) ? e.join(",") : e,
            ...r.query
        }, (Array.isArray(e) && e.length > 0 || "previewDrafts" === e || "drafts" === e) && o && (o = !1, oo())), r.lastLiveEventId && (r.query = { ...r.query,
            lastLiveEventId: r.lastLiveEventId
        }), !1 === r.returnQuery && (r.query = {
            returnQuery: "false",
            ...r.query
        }), o && "noStale" == r.cacheMode && (r.query = {
            cacheMode: "noStale",
            ...r.query
        })
    }
    const u = Co(i, Object.assign({}, r, {
            url: Pe(t, n, o)
        })),
        c = new F(t => e(u, i.requester).subscribe(t));
    return r.signal ? c.pipe(Mo(r.signal)) : c
}

function j(t, e, r) {
    return Mt(t, e, r).pipe(St(t => "response" === t.type), U(t => t.body))
}

function L(t, e, r) {
    const n = t.config();
    if (n.resource) {
        an(n);
        return `${ko(n)}/${void 0!==r?`${e}/${r}`:e}`.replace(/\/($|\?)/, "$1")
    }
    const i = `/${e}/${lt(n)}`;
    return `/data${void 0!==r?`${i}/${r}`:i}`.replace(/\/($|\?)/, "$1")
}

function Pe(t, e, r = !1) {
    const {
        url: n,
        cdnUrl: i
    } = t.config();
    return `${r?i:n}/${e.replace(/^\//,"")}`
}

function Mo(t) {
    return e => new F(r => {
        const n = () => r.error(Lo(t));
        if (t && t.aborted) return void n();
        const i = e.subscribe(r);
        return t.addEventListener("abort", n), () => {
            t.removeEventListener("abort", n), i.unsubscribe()
        }
    })
}
const qo = !!globalThis.DOMException;

function Lo(t) {
    if (qo) return new DOMException(t ? .reason ? ? "The operation was aborted.", "AbortError");
    const e = new Error(t ? .reason ? ? "The operation was aborted.");
    return e.name = "AbortError", e
}
const ko = t => {
    const e = t.resource;
    if (!e) throw new Error("`resource` must be provided to perform resource queries");
    const {
        type: r,
        id: n
    } = e;
    switch (r) {
        case "dataset":
            {
                const t = n.split(".");
                if (2 !== t.length) throw new Error('Dataset ID must be in the format "project.dataset"');
                return `/projects/${t[0]}/datasets/${t[1]}`
            }
        case "canvas":
            return `/canvases/${n}`;
        case "media-library":
            return `/media-libraries/${n}`;
        case "dashboard":
            return `/dashboards/${n}`;
        default:
            throw new Error(`Unsupported resource type: ${r.toString()}`)
    }
};

function On(t, e, r) {
    const n = lt(t.config());
    return j(t, e, {
        method: "POST",
        uri: `/agent/action/generate/${n}`,
        body: r
    })
}

function zo(t, e, r) {
    const n = lt(t.config());
    return j(t, e, {
        method: "POST",
        uri: `/agent/action/patch/${n}`,
        body: r
    })
}

function Vo(t, e, r) {
    const n = lt(t.config());
    return j(t, e, {
        method: "POST",
        uri: `/agent/action/prompt/${n}`,
        body: r
    })
}

function Rn(t, e, r) {
    const n = lt(t.config());
    return j(t, e, {
        method: "POST",
        uri: `/agent/action/transform/${n}`,
        body: r
    })
}

function Pn(t, e, r) {
    const n = lt(t.config());
    return j(t, e, {
        method: "POST",
        uri: `/agent/action/translate/${n}`,
        body: r
    })
}
class No {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    generate(t) {
        return On(this.#t, this.#e, t)
    }
    transform(t) {
        return Rn(this.#t, this.#e, t)
    }
    translate(t) {
        return Pn(this.#t, this.#e, t)
    }
}
class Wo {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    generate(t) {
        return C(On(this.#t, this.#e, t))
    }
    transform(t) {
        return C(Rn(this.#t, this.#e, t))
    }
    translate(t) {
        return C(Pn(this.#t, this.#e, t))
    }
    prompt(t) {
        return C(Vo(this.#t, this.#e, t))
    }
    patch(t) {
        return C(zo(this.#t, this.#e, t))
    }
}
class Ho {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    upload(t, e, r) {
        return Fn(this.#t, this.#e, t, e, r)
    }
}
class Go {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    upload(t, e, r) {
        return C(Fn(this.#t, this.#e, t, e, r).pipe(St(t => "response" === t.type), U(t => t.body.document)))
    }
}

function Fn(t, e, r, n, i = {}) {
    Ks(r);
    let s = i.extract || void 0;
    s && !s.length && (s = ["none"]);
    const o = t.config(),
        a = Yo(i, n),
        {
            tag: u,
            label: c,
            title: h,
            description: l,
            creditLine: d,
            filename: f,
            source: p
        } = a,
        g = "media-library" === o.resource ? .type,
        y = g ? {
            title: h,
            filename: f
        } : {
            label: c,
            title: h,
            description: l,
            filename: f,
            meta: s,
            creditLine: d
        };
    return p && !g && (y.sourceId = p.id, y.sourceName = p.name, y.sourceUrl = p.url), Mt(t, e, {
        tag: u,
        method: "POST",
        timeout: a.timeout || 0,
        uri: Bo(o, r),
        headers: a.contentType ? {
            "Content-Type": a.contentType
        } : {},
        query: y,
        body: n
    })
}

function Bo(t, e) {
    const r = "image" === e ? "images" : "files",
        n = t.resource;
    if (n) {
        const {
            type: t,
            id: e
        } = n;
        switch (t) {
            case "dataset":
                throw new Error("Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.");
            case "canvas":
                return `/canvases/${e}/assets/${r}`;
            case "media-library":
                return `/media-libraries/${e}/upload`;
            case "dashboard":
                return `/dashboards/${e}/assets/${r}`;
            default:
                throw new Error(`Unsupported resource type: ${t.toString()}`)
        }
    }
    return `assets/${r}/${lt(t)}`
}

function Yo(t, e) {
    return typeof File > "u" || !(e instanceof File) ? t : Object.assign({
        filename: !1 === t.preserveFilename ? void 0 : e.name,
        contentType: e.type
    }, t)
}
var Qo = (t, e) => Object.keys(e).concat(Object.keys(t)).reduce((r, n) => (r[n] = typeof t[n] > "u" ? e[n] : t[n], r), {});
const Jo = (t, e) => e.reduce((e, r) => (typeof t[r] > "u" || (e[r] = t[r]), e), {}),
    jn = Gr(() => vr(() =>
        import ("./browser.B2gmZDgW.js").then(t => t.b), __vite__mapDeps([0, 1]))).pipe(U(({
        default: t
    }) => t), Ss(1));

function Dn() {
    return function(t) {
        return t.pipe(Ht((t, e) => t instanceof ln ? ys(ft({
            type: "reconnect"
        }), vs(1e3).pipe(ut(() => e))) : Nr(() => t)))
    }
}
const Xo = 14800,
    Zo = ["includePreviousRevision", "includeResult", "includeMutations", "includeAllVersions", "visibility", "effectFormat", "enableResume", "tag"],
    Ko = {
        includeResult: !0
    };

function Un(t, e, r = {}) {
    const {
        url: n,
        token: i,
        withCredentials: s,
        requestTagPrefix: o,
        headers: a
    } = this.config(), u = r.tag && o ? [o, r.tag].join(".") : r.tag, c = { ...Qo(r, Ko),
        tag: u
    }, h = Jo(c, Zo), l = `${n}${L(this,"listen",mn({query:t,params:e,options:{tag:u,...h}}))}`;
    if (l.length > Xo) return Nr(() => new Error("Query too large for listener"));
    const d = c.events ? c.events : ["mutation"],
        f = {};
    return s && (f.withCredentials = !0), (i || a) && (f.headers = {}, i && (f.headers.Authorization = `Bearer ${i}`), a && Object.assign(f.headers, a)), hn(() => (typeof EventSource > "u" || f.headers ? jn : ft(EventSource)).pipe(U(t => new t(l, f))), d).pipe(Dn(), St(t => d.includes(t.type)), U(t => ({
        type: t.type,
        ..."data" in t ? t.data : {}
    })))
}

function ta(t, e) {
    return ea("function" == typeof t ? {
        predicate: t,
        ...e
    } : t)
}

function ea(t) {
    return e => {
        let r, n = !1;
        const {
            predicate: i,
            ...s
        } = t;
        return ws(e.pipe(Is(e => {
            t.predicate(e) && (n = !0, r = e)
        }), Yr(() => {
            n = !1, r = void 0
        }), Qr(s)), new F(t => {
            n && t.next(r), t.complete()
        }))
    }
}
const ar = "2021-03-25";
class Mn {#
    t;
    constructor(t) {
        this.#t = t
    }
    events({
        includeDrafts: t = !1,
        tag: e,
        waitFor: r
    } = {}) {
        const {
            projectId: n,
            apiVersion: i,
            token: s,
            withCredentials: o,
            requestTagPrefix: a,
            headers: u
        } = this.#t.config(), c = i.replace(/^v/, "");
        if ("X" !== c && c < ar) throw new Error(`The live events API requires API version ${ar} or later. The current API version is ${c}. Please update your API version to use this feature.`);
        if (t && !s && !o) throw new Error("The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.");
        const h = L(this.#t, "live/events"),
            l = new URL(this.#t.getUrl(h, !1)),
            d = e && a ? [a, e].join(".") : e;
        d && l.searchParams.set("tag", d), t && l.searchParams.set("includeDrafts", "true"), r && l.searchParams.set("waitFor", r);
        const f = {};
        t && o && (f.withCredentials = !0), (t && s || u) && (f.headers = {}, t && s && (f.headers.Authorization = `Bearer ${s}`), u && Object.assign(f.headers, u));
        const p = `${l.href}::${JSON.stringify(f)}`,
            g = ve.get(p);
        if (g) return g;
        const y = hn(() => (typeof EventSource > "u" || f.headers ? jn : ft(EventSource)).pipe(U(t => new t(l.href, f))), ["message", "restart", "welcome", "reconnect", "goaway"]),
            m = ra(l, {
                method: "OPTIONS",
                mode: "cors",
                credentials: f.withCredentials ? "include" : "omit",
                headers: f.headers
            }).pipe(Ht(() => {
                throw new Bs({
                    projectId: n
                })
            })),
            v = y.pipe(Dn(), ut(t => "reconnect" === t.type ? m.pipe(ut(() => ft(t))) : ft(t)), Ht(t => m.pipe(ut(() => {
                throw t
            }))), U(t => {
                if ("message" === t.type) {
                    const {
                        data: e,
                        ...r
                    } = t;
                    return { ...r,
                        tags: e.tags
                    }
                }
                return t
            })).pipe(Yr(() => ve.delete(p)), ta({
                predicate: t => "welcome" === t.type
            }));
        return ve.set(p, v), v
    }
}

function ra(t, e) {
    return new F(r => {
        const n = new AbortController,
            i = n.signal;
        return fetch(t, { ...e,
            signal: n.signal
        }).then(t => {
            r.next(t), r.complete()
        }, t => {
            i.aborted || r.error(t)
        }), () => n.abort()
    })
}
const ve = new Map;
class na {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    create(t, e) {
        return pt(this.#t, this.#e, "PUT", t, e)
    }
    edit(t, e) {
        return pt(this.#t, this.#e, "PATCH", t, e)
    }
    delete(t) {
        return pt(this.#t, this.#e, "DELETE", t)
    }
    list() {
        H("dataset", this.#t.config());
        const t = this.#t.config(),
            e = t.projectId;
        let r = "/datasets";
        return !1 === t.useProjectHostname && (r = `/projects/${e}/datasets`), j(this.#t, this.#e, {
            uri: r,
            tag: null
        })
    }
    getEmbeddingsSettings(t) {
        return H("dataset", this.#t.config()), wt(t), j(this.#t, this.#e, {
            uri: Yt(this.#t, t),
            tag: null
        })
    }
    editEmbeddingsSettings(t, e) {
        return H("dataset", this.#t.config()), wt(t), j(this.#t, this.#e, {
            method: "PUT",
            uri: Yt(this.#t, t),
            body: e,
            tag: null
        })
    }
}
class ia {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    create(t, e) {
        return H("dataset", this.#t.config()), C(pt(this.#t, this.#e, "PUT", t, e))
    }
    edit(t, e) {
        return H("dataset", this.#t.config()), C(pt(this.#t, this.#e, "PATCH", t, e))
    }
    delete(t) {
        return H("dataset", this.#t.config()), C(pt(this.#t, this.#e, "DELETE", t))
    }
    list() {
        H("dataset", this.#t.config());
        const t = this.#t.config(),
            e = t.projectId;
        let r = "/datasets";
        return !1 === t.useProjectHostname && (r = `/projects/${e}/datasets`), C(j(this.#t, this.#e, {
            uri: r,
            tag: null
        }))
    }
    getEmbeddingsSettings(t) {
        return H("dataset", this.#t.config()), wt(t), C(j(this.#t, this.#e, {
            uri: Yt(this.#t, t),
            tag: null
        }))
    }
    editEmbeddingsSettings(t, e) {
        return H("dataset", this.#t.config()), wt(t), C(j(this.#t, this.#e, {
            method: "PUT",
            uri: Yt(this.#t, t),
            body: e,
            tag: null
        }))
    }
}

function Yt(t, e) {
    const r = t.config();
    return !1 === r.useProjectHostname ? `/projects/${r.projectId}/datasets/${e}/settings/embeddings` : `/datasets/${e}/settings/embeddings`
}

function pt(t, e, r, n, i) {
    return H("dataset", t.config()), wt(n), j(t, e, {
        method: r,
        uri: `/datasets/${n}`,
        body: i,
        tag: null
    })
}
class qn {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    getPlaybackInfo(t, e = {}) {
        const r = this.#t.config(),
            n = (r.resource || r["~experimental_resource"]) ? .id,
            {
                instanceId: i,
                libraryId: s
            } = ua(t),
            o = s || n;
        if (!o) throw new Error("Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR");
        const a = ca(i, o),
            u = la(e);
        return j(this.#t, this.#e, {
            method: "GET",
            uri: a,
            query: u
        })
    }
}
class sa {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    getPlaybackInfo(t, e = {}) {
        return C(new qn(this.#t.observable, this.#e).getPlaybackInfo(t, e))
    }
}
const oa = /^media-library:(ml[^:]+):([^:]+)$/;

function aa(t) {
    return "object" == typeof t && "_ref" in t
}

function ua(t) {
    const e = aa(t) ? t._ref : t,
        r = oa.exec(e);
    if (r) {
        const [, t, e] = r;
        return {
            libraryId: t,
            instanceId: e
        }
    }
    if ("string" == typeof t && t.startsWith("video-")) return {
        instanceId: t
    };
    throw new Error(`Invalid video asset instance identifier "${e}": must be a valid video instance id or a Global Dataset Reference (GDR) to the video asset in the Media Library`)
}

function ca(t, e) {
    return `/media-libraries/${e}/video/${t}/playback-info`
}

function la(t) {
    const e = {};
    if (t.transformations) {
        const {
            thumbnail: r,
            animated: n,
            storyboard: i
        } = t.transformations;
        r && (r.width && (e.thumbnailWidth = r.width), r.height && (e.thumbnailHeight = r.height), void 0 !== r.time && (e.thumbnailTime = r.time), r.fit && (e.thumbnailFit = r.fit), r.format && (e.thumbnailFormat = r.format)), n && (n.width && (e.animatedWidth = n.width), n.height && (e.animatedHeight = n.height), void 0 !== n.start && (e.animatedStart = n.start), void 0 !== n.end && (e.animatedEnd = n.end), n.fps && (e.animatedFps = n.fps), n.format && (e.animatedFormat = n.format)), i && i.format && (e.storyboardFormat = i.format)
    }
    return t.expiration && (e.expiration = t.expiration), e
}
class ha {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    list(t) {
        const e = {};
        return !1 === t ? .includeMembers && (e.includeMembers = "false"), !1 === t ? .includeFeatures && (e.includeFeatures = "false"), t ? .organizationId && (e.organizationId = t.organizationId), t ? .onlyExplicitMembership && (e.onlyExplicitMembership = "true"), j(this.#t, this.#e, {
            uri: "/projects",
            query: e
        })
    }
    getById(t) {
        return j(this.#t, this.#e, {
            uri: `/projects/${t}`
        })
    }
}
class da {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    list(t) {
        const e = {};
        return !1 === t ? .includeMembers && (e.includeMembers = "false"), !1 === t ? .includeFeatures && (e.includeFeatures = "false"), t ? .organizationId && (e.organizationId = t.organizationId), t ? .onlyExplicitMembership && (e.onlyExplicitMembership = "true"), C(j(this.#t, this.#e, {
            uri: "/projects",
            query: e
        }))
    }
    getById(t) {
        return C(j(this.#t, this.#e, {
            uri: `/projects/${t}`
        }))
    }
}
const ur = Ms("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8),
    Qt = (t, e) => e ? Dt(t, e) : Kr(t);

function Jt(t, {
    releaseId: e,
    publishedId: r,
    document: n
}) {
    if (r && n._id) {
        const t = Qt(r, e);
        return eo(t, n), t
    }
    if (n._id) {
        const r = ee(n._id),
            i = re(n._id);
        if (!r && !i) throw new Error(`\`${t}()\` requires a document with an \`_id\` that is a version or draft ID`);
        if (e) {
            if (r) throw new Error(`\`${t}()\` was called with a document ID (\`${n._id}\`) that is a draft ID, but a release ID (\`${e}\`) was also provided.`);
            const i = tn(n._id);
            if (i !== e) throw new Error(`\`${t}()\` was called with a document ID (\`${n._id}\`) that is a version ID, but the release ID (\`${e}\`) does not match the document's version ID (\`${i}\`).`)
        }
        return n._id
    }
    if (r) return Qt(r, e);
    throw new Error(`\`${t}()\` requires either a publishedId or a document with an \`_id\``)
}
const fa = (t, e) => {
        if ("object" == typeof t && null !== t && ("releaseId" in t || "metadata" in t)) {
            const {
                releaseId: r = ur(),
                metadata: n = {}
            } = t;
            return [r, n, e]
        }
        return [ur(), {}, t]
    },
    Ln = (t, e) => {
        const [r, n, i] = fa(t, e);
        return {
            action: {
                actionType: "sanity.action.release.create",
                releaseId: r,
                metadata: { ...n,
                    releaseType: n.releaseType || "undecided"
                }
            },
            options: i
        }
    };
class pa {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    get({
        releaseId: t
    }, e) {
        return _t(this.#t, this.#e, `_.releases.${t}`, e)
    }
    create(t, e) {
        const {
            action: r,
            options: n
        } = Ln(t, e), {
            releaseId: i,
            metadata: s
        } = r;
        return R(this.#t, this.#e, r, n).pipe(U(t => ({ ...t,
            releaseId: i,
            metadata: s
        })))
    }
    edit({
        releaseId: t,
        patch: e
    }, r) {
        const n = {
            actionType: "sanity.action.release.edit",
            releaseId: t,
            patch: e
        };
        return R(this.#t, this.#e, n, r)
    }
    publish({
        releaseId: t
    }, e) {
        const r = {
            actionType: "sanity.action.release.publish",
            releaseId: t
        };
        return R(this.#t, this.#e, r, e)
    }
    archive({
        releaseId: t
    }, e) {
        const r = {
            actionType: "sanity.action.release.archive",
            releaseId: t
        };
        return R(this.#t, this.#e, r, e)
    }
    unarchive({
        releaseId: t
    }, e) {
        const r = {
            actionType: "sanity.action.release.unarchive",
            releaseId: t
        };
        return R(this.#t, this.#e, r, e)
    }
    schedule({
        releaseId: t,
        publishAt: e
    }, r) {
        const n = {
            actionType: "sanity.action.release.schedule",
            releaseId: t,
            publishAt: e
        };
        return R(this.#t, this.#e, n, r)
    }
    unschedule({
        releaseId: t
    }, e) {
        const r = {
            actionType: "sanity.action.release.unschedule",
            releaseId: t
        };
        return R(this.#t, this.#e, r, e)
    }
    delete({
        releaseId: t
    }, e) {
        const r = {
            actionType: "sanity.action.release.delete",
            releaseId: t
        };
        return R(this.#t, this.#e, r, e)
    }
    fetchDocuments({
        releaseId: t
    }, e) {
        return wn(this.#t, this.#e, t, e)
    }
}
class ga {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    get({
        releaseId: t
    }, e) {
        return C(_t(this.#t, this.#e, `_.releases.${t}`, e))
    }
    async create(t, e) {
        const {
            action: r,
            options: n
        } = Ln(t, e), {
            releaseId: i,
            metadata: s
        } = r;
        return { ...await C(R(this.#t, this.#e, r, n)),
            releaseId: i,
            metadata: s
        }
    }
    edit({
        releaseId: t,
        patch: e
    }, r) {
        const n = {
            actionType: "sanity.action.release.edit",
            releaseId: t,
            patch: e
        };
        return C(R(this.#t, this.#e, n, r))
    }
    publish({
        releaseId: t
    }, e) {
        const r = {
            actionType: "sanity.action.release.publish",
            releaseId: t
        };
        return C(R(this.#t, this.#e, r, e))
    }
    archive({
        releaseId: t
    }, e) {
        const r = {
            actionType: "sanity.action.release.archive",
            releaseId: t
        };
        return C(R(this.#t, this.#e, r, e))
    }
    unarchive({
        releaseId: t
    }, e) {
        const r = {
            actionType: "sanity.action.release.unarchive",
            releaseId: t
        };
        return C(R(this.#t, this.#e, r, e))
    }
    schedule({
        releaseId: t,
        publishAt: e
    }, r) {
        const n = {
            actionType: "sanity.action.release.schedule",
            releaseId: t,
            publishAt: e
        };
        return C(R(this.#t, this.#e, n, r))
    }
    unschedule({
        releaseId: t
    }, e) {
        const r = {
            actionType: "sanity.action.release.unschedule",
            releaseId: t
        };
        return C(R(this.#t, this.#e, r, e))
    }
    delete({
        releaseId: t
    }, e) {
        const r = {
            actionType: "sanity.action.release.delete",
            releaseId: t
        };
        return C(R(this.#t, this.#e, r, e))
    }
    fetchDocuments({
        releaseId: t
    }, e) {
        return C(wn(this.#t, this.#e, t, e))
    }
}
class ma {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    getById(t) {
        return j(this.#t, this.#e, {
            uri: `/users/${t}`
        })
    }
}
class ya {#
    t;#
    e;
    constructor(t, e) {
        this.#t = t, this.#e = e
    }
    getById(t) {
        return C(j(this.#t, this.#e, {
            uri: `/users/${t}`
        }))
    }
}
class Xt {
    assets;
    datasets;
    live;
    mediaLibrary;
    projects;
    users;
    agent;
    releases;#
    t;#
    e;#
    r;
    listen = Un;
    constructor(t, e = Rt) {
        this.config(e), this.#e = t;
        const r = e._requestHandler;
        this.#r = r ? (() => {
            let n;
            return (i, s) => {
                const o = i;
                return n || (n = new gt(t, { ...e,
                    _requestHandler: void 0
                })), r(o, e => t(e, s), n)
            }
        })() : t, this.assets = new Ho(this, this.#r), this.datasets = new na(this, this.#r), this.live = new Mn(this), this.mediaLibrary = {
            video: new qn(this, this.#r)
        }, this.projects = new ha(this, this.#r), this.users = new ma(this, this.#r), this.agent = {
            action: new No(this, this.#r)
        }, this.releases = new pa(this, this.#r)
    }
    clone() {
        return new Xt(this.#e, this.config())
    }
    config(t) {
        if (void 0 === t) return { ...this.#t
        };
        if (this.#t && !1 === this.#t.allowReconfigure) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        return this.#t = cn(t, this.#t || {}), this
    }
    withConfig(t) {
        const e = this.config();
        return new Xt(this.#e, { ...e,
            ...t,
            stega: { ...e.stega || {},
                ..."boolean" == typeof t ? .stega ? {
                    enabled: t.stega
                } : t ? .stega || {}
            }
        })
    }
    fetch(t, e, r) {
        return yn(this, this.#r, this.#t.stega, t, e, r)
    }
    getDocument(t, e) {
        if (!0 === e ? .includeAllVersions) return _t(this, this.#r, t, { ...e,
            includeAllVersions: !0
        });
        const r = {
            signal: e ? .signal,
            tag: e ? .tag,
            releaseId: e ? .releaseId,
            ...e && "includeAllVersions" in e ? {
                includeAllVersions: !1
            } : {}
        };
        return _t(this, this.#r, t, r)
    }
    getDocuments(t, e) {
        return vn(this, this.#r, t, e)
    }
    create(t, e) {
        return oe(this, this.#r, t, "create", e)
    }
    createIfNotExists(t, e) {
        return bn(this, this.#r, t, e)
    }
    createOrReplace(t, e) {
        return _n(this, this.#r, t, e)
    }
    createVersion({
        document: t,
        publishedId: e,
        releaseId: r,
        baseId: n,
        ifBaseRevisionId: i
    }, s) {
        if (!t) return Sn(this, this.#r, e, n, r, i, s);
        const o = Jt("createVersion", {
                document: t,
                publishedId: e,
                releaseId: r
            }),
            a = { ...t,
                _id: o
            },
            u = e || ne(t._id);
        return En(this, this.#r, a, u, s)
    }
    delete(t, e) {
        return In(this, this.#r, t, e)
    }
    discardVersion({
        releaseId: t,
        publishedId: e
    }, r, n) {
        const i = Qt(e, t);
        return An(this, this.#r, i, r, n)
    }
    replaceVersion({
        document: t,
        publishedId: e,
        releaseId: r
    }, n) {
        const i = Jt("replaceVersion", {
                document: t,
                publishedId: e,
                releaseId: r
            }),
            s = { ...t,
                _id: i
            };
        return Cn(this, this.#r, s, n)
    }
    unpublishVersion({
        releaseId: t,
        publishedId: e
    }, r) {
        const n = Dt(e, t);
        return xn(this, this.#r, n, e, r)
    }
    mutate(t, e) {
        return Tn(this, this.#r, t, e)
    }
    patch(t, e) {
        return new ct(t, e, this)
    }
    transaction(t) {
        return new se(t, this)
    }
    action(t, e) {
        return R(this, this.#r, t, e)
    }
    request(t) {
        return j(this, this.#r, t)
    }
    getUrl(t, e) {
        return Pe(this, t, e)
    }
    getDataUrl(t, e) {
        return L(this, t, e)
    }
}
class gt {
    assets;
    datasets;
    live;
    mediaLibrary;
    projects;
    users;
    agent;
    releases;
    observable;#
    t;#
    e;#
    r;
    listen = Un;
    constructor(t, e = Rt) {
        this.config(e), this.#e = t;
        const r = e._requestHandler;
        this.#r = r ? (() => {
            let n;
            return (i, s) => {
                const o = i;
                return n || (n = new gt(t, { ...e,
                    _requestHandler: void 0
                })), r(o, e => t(e, s), n)
            }
        })() : t, this.assets = new Go(this, this.#r), this.datasets = new ia(this, this.#r), this.live = new Mn(this), this.mediaLibrary = {
            video: new sa(this, this.#r)
        }, this.projects = new da(this, this.#r), this.users = new ya(this, this.#r), this.agent = {
            action: new Wo(this, this.#r)
        }, this.releases = new ga(this, this.#r), this.observable = new Xt(t, e)
    }
    clone() {
        return new gt(this.#e, this.config())
    }
    config(t) {
        if (void 0 === t) return { ...this.#t
        };
        if (this.#t && !1 === this.#t.allowReconfigure) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        return this.observable && this.observable.config(t), this.#t = cn(t, this.#t || {}), this
    }
    withConfig(t) {
        const e = this.config();
        return new gt(this.#e, { ...e,
            ...t,
            stega: { ...e.stega || {},
                ..."boolean" == typeof t ? .stega ? {
                    enabled: t.stega
                } : t ? .stega || {}
            }
        })
    }
    fetch(t, e, r) {
        return C(yn(this, this.#r, this.#t.stega, t, e, r))
    }
    getDocument(t, e) {
        if (!0 === e ? .includeAllVersions) return C(_t(this, this.#r, t, { ...e,
            includeAllVersions: !0
        }));
        const r = {
            signal: e ? .signal,
            tag: e ? .tag,
            releaseId: e ? .releaseId,
            ...e && "includeAllVersions" in e ? {
                includeAllVersions: !1
            } : {}
        };
        return C(_t(this, this.#r, t, r))
    }
    getDocuments(t, e) {
        return C(vn(this, this.#r, t, e))
    }
    create(t, e) {
        return C(oe(this, this.#r, t, "create", e))
    }
    createIfNotExists(t, e) {
        return C(bn(this, this.#r, t, e))
    }
    createOrReplace(t, e) {
        return C(_n(this, this.#r, t, e))
    }
    createVersion({
        document: t,
        publishedId: e,
        releaseId: r,
        baseId: n,
        ifBaseRevisionId: i
    }, s) {
        if (!t) return pe(Sn(this, this.#r, e, n, r, i, s));
        const o = Jt("createVersion", {
                document: t,
                publishedId: e,
                releaseId: r
            }),
            a = { ...t,
                _id: o
            },
            u = e || ne(t._id);
        return pe(En(this, this.#r, a, u, s))
    }
    delete(t, e) {
        return C(In(this, this.#r, t, e))
    }
    discardVersion({
        releaseId: t,
        publishedId: e
    }, r, n) {
        const i = Qt(e, t);
        return C(An(this, this.#r, i, r, n))
    }
    replaceVersion({
        document: t,
        publishedId: e,
        releaseId: r
    }, n) {
        const i = Jt("replaceVersion", {
                document: t,
                publishedId: e,
                releaseId: r
            }),
            s = { ...t,
                _id: i
            };
        return pe(Cn(this, this.#r, s, n))
    }
    unpublishVersion({
        releaseId: t,
        publishedId: e
    }, r) {
        const n = Dt(e, t);
        return C(xn(this, this.#r, n, e, r))
    }
    mutate(t, e) {
        return C(Tn(this, this.#r, t, e))
    }
    patch(t, e) {
        return new et(t, e, this)
    }
    transaction(t) {
        return new ie(t, this)
    }
    action(t, e) {
        return C(R(this, this.#r, t, e))
    }
    request(t) {
        return C(j(this, this.#r, t))
    }
    dataRequest(t, e, r) {
        return C(ht(this, this.#r, t, e, r))
    }
    getUrl(t, e) {
        return Pe(this, t, e)
    }
    getDataUrl(t, e) {
        return L(this, t, e)
    }
}

function va(t, e) {
    return {
        requester: rr(t),
        createClient: r => {
            const n = rr(t, {
                ignoreWarnings: r.ignoreWarnings
            });
            return new e((t, e) => (e || n)({
                maxRedirects: 0,
                maxRetries: r.maxRetries,
                retryDelay: r.retryDelay,
                lineage: r.lineage,
                ...t
            }), r)
        }
    }
}
var wa = [];
const ba = va(wa, gt),
    _a = ba.createClient,
    Ea = {
        PUBLIC_SANITY_DATASET: "production",
        PUBLIC_SANITY_PROJECT_ID: "k0dlbavy"
    };
var Sa = {};
const Et = Ea ? ? Sa ? ? {},
    Ia = Et.SANITY_PROJECT_ID || Et.PUBLIC_SANITY_PROJECT_ID,
    _e = Et.SANITY_DATASET || Et.PUBLIC_SANITY_DATASET,
    Aa = Et.SANITY_PREVIEW_SECRET,
    cr = Et.SANITY_STUDIO_URL,
    Zt = _a({
        projectId: Ia,
        dataset: _e,
        apiVersion: "2025-02-19",
        useCdn: !0,
        withCredentials: !1
    });
var Ca = {
        hasSubscribers: !1
    },
    xa = Ca,
    Ta = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
    kn = new Set,
    lr = "object" == typeof process && process ? process : {},
    $a = (t, e, r, n) => {
        "function" == typeof lr.emitWarning ? lr.emitWarning(t, e, r, n) : console.error(`[${r}] ${e}: ${t}`)
    },
    Oa = t => !kn.has(t),
    tt = t => !!t && t === Math.floor(t) && t > 0 && isFinite(t),
    zn = t => tt(t) ? t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? zt : null : null,
    zt = class extends Array {
        constructor(t) {
            super(t), this.fill(0)
        }
    },
    Ra = class t {
        heap;
        length;
        static# t = !1;
        static create(e) {
            let r = zn(e);
            if (!r) return [];
            t.#t = !0;
            let n = new t(e, r);
            return t.#t = !1, n
        }
        constructor(e, r) {
            if (!t.#t) throw new TypeError("instantiate Stack using Stack.create(n)");
            this.heap = new r(e), this.length = 0
        }
        push(t) {
            this.heap[this.length++] = t
        }
        pop() {
            return this.heap[--this.length]
        }
    },
    Pa = class t {#
        t;#
        e;#
        r;#
        n;#
        i;#
        s;#
        o;#
        a;
        get perf() {
            return this.#a
        }
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;#
        u;#
        c;#
        h;#
        l;#
        d;#
        f;#
        p;#
        g;#
        y;#
        m;#
        v;#
        w;#
        b;#
        I;#
        _;#
        C;#
        E;#
        x;#
        S;
        static unsafeExposeInternals(t) {
            return {
                starts: t.#b,
                ttls: t.#I,
                autopurgeTimers: t.#_,
                sizes: t.#w,
                keyMap: t.#h,
                keyList: t.#l,
                valList: t.#d,
                next: t.#f,
                prev: t.#p,
                get head() {
                    return t.#g
                },
                get tail() {
                    return t.#y
                },
                free: t.#m,
                isBackgroundFetch: e => t.#O(e),
                backgroundFetch: (e, r, n, i) => t.#$(e, r, n, i),
                moveToTail: e => t.#A(e),
                indexes: e => t.#T(e),
                rindexes: e => t.#j(e),
                isStale: e => t.#F(e)
            }
        }
        get max() {
            return this.#t
        }
        get maxSize() {
            return this.#e
        }
        get calculatedSize() {
            return this.#c
        }
        get size() {
            return this.#u
        }
        get fetchMethod() {
            return this.#s
        }
        get memoMethod() {
            return this.#o
        }
        get dispose() {
            return this.#r
        }
        get onInsert() {
            return this.#n
        }
        get disposeAfter() {
            return this.#i
        }
        constructor(e) {
            let {
                max: r = 0,
                ttl: n,
                ttlResolution: i = 1,
                ttlAutopurge: s,
                updateAgeOnGet: o,
                updateAgeOnHas: a,
                allowStale: u,
                dispose: c,
                onInsert: h,
                disposeAfter: l,
                noDisposeOnSet: d,
                noUpdateTTL: f,
                maxSize: p = 0,
                maxEntrySize: g = 0,
                sizeCalculation: y,
                fetchMethod: m,
                memoMethod: v,
                noDeleteOnFetchRejection: w,
                noDeleteOnStaleGet: b,
                allowStaleOnFetchRejection: I,
                allowStaleOnFetchAbort: _,
                ignoreFetchAbort: C,
                perf: E
            } = e;
            if (void 0 !== E && "function" != typeof E ? .now) throw new TypeError("perf option must have a now() method if specified");
            if (this.#a = E ? ? Ta, 0 !== r && !tt(r)) throw new TypeError("max option must be a nonnegative integer");
            let x = r ? zn(r) : Array;
            if (!x) throw new Error("invalid max value: " + r);
            if (this.#t = r, this.#e = p, this.maxEntrySize = g || this.#e, this.sizeCalculation = y, this.sizeCalculation) {
                if (!this.#e && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
                if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
            }
            if (void 0 !== v && "function" != typeof v) throw new TypeError("memoMethod must be a function if defined");
            if (this.#o = v, void 0 !== m && "function" != typeof m) throw new TypeError("fetchMethod must be a function if specified");
            if (this.#s = m, this.#E = !!m, this.#h = new Map, this.#l = Array.from({
                    length: r
                }).fill(void 0), this.#d = Array.from({
                    length: r
                }).fill(void 0), this.#f = new x(r), this.#p = new x(r), this.#g = 0, this.#y = 0, this.#m = Ra.create(r), this.#u = 0, this.#c = 0, "function" == typeof c && (this.#r = c), "function" == typeof h && (this.#n = h), "function" == typeof l ? (this.#i = l, this.#v = []) : (this.#i = void 0, this.#v = void 0), this.#C = !!this.#r, this.#S = !!this.#n, this.#x = !!this.#i, this.noDisposeOnSet = !!d, this.noUpdateTTL = !!f, this.noDeleteOnFetchRejection = !!w, this.allowStaleOnFetchRejection = !!I, this.allowStaleOnFetchAbort = !!_, this.ignoreFetchAbort = !!C, 0 !== this.maxEntrySize) {
                if (0 !== this.#e && !tt(this.#e)) throw new TypeError("maxSize must be a positive integer if specified");
                if (!tt(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
                this.#R()
            }
            if (this.allowStale = !!u, this.noDeleteOnStaleGet = !!b, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!a, this.ttlResolution = tt(i) || 0 === i ? i : 1, this.ttlAutopurge = !!s, this.ttl = n || 0, this.ttl) {
                if (!tt(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
                this.#D()
            }
            if (0 === this.#t && 0 === this.ttl && 0 === this.#e) throw new TypeError("At least one of max, maxSize, or ttl is required");
            if (!this.ttlAutopurge && !this.#t && !this.#e) {
                let e = "LRU_CACHE_UNBOUNDED";
                Oa(e) && (kn.add(e), $a("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, t))
            }
        }
        getRemainingTTL(t) {
            return this.#h.has(t) ? 1 / 0 : 0
        }#
        D() {
            let t = new zt(this.#t),
                e = new zt(this.#t);
            this.#I = t, this.#b = e;
            let r = this.ttlAutopurge ? Array.from({
                length: this.#t
            }) : void 0;
            this.#_ = r, this.#P = (r, i, s = this.#a.now()) => {
                e[r] = 0 !== i ? s : 0, t[r] = i, n(r, i)
            }, this.#M = r => {
                e[r] = 0 !== t[r] ? this.#a.now() : 0, n(r, t[r])
            };
            let n = this.ttlAutopurge ? (t, e) => {
                if (r ? .[t] && (clearTimeout(r[t]), r[t] = void 0), e && 0 !== e && r) {
                    let n = setTimeout(() => {
                        this.#F(t) && this.#z(this.#l[t], "expire")
                    }, e + 1);
                    n.unref && n.unref(), r[t] = n
                }
            } : () => {};
            this.#U = (r, n) => {
                if (t[n]) {
                    let o = t[n],
                        a = e[n];
                    if (!o || !a) return;
                    r.ttl = o, r.start = a, r.now = i || s();
                    let u = r.now - a;
                    r.remainingTTL = o - u
                }
            };
            let i = 0,
                s = () => {
                    let t = this.#a.now();
                    if (this.ttlResolution > 0) {
                        i = t;
                        let e = setTimeout(() => i = 0, this.ttlResolution);
                        e.unref && e.unref()
                    }
                    return t
                };
            this.getRemainingTTL = r => {
                let n = this.#h.get(r);
                if (void 0 === n) return 0;
                let o = t[n],
                    a = e[n];
                return o && a ? o - ((i || s()) - a) : 1 / 0
            }, this.#F = r => {
                let n = e[r],
                    o = t[r];
                return !!o && !!n && (i || s()) - n > o
            }
        }#
        M = () => {};#
        U = () => {};#
        P = () => {};#
        F = () => !1;#
        R() {
            let t = new zt(this.#t);
            this.#c = 0, this.#w = t, this.#q = e => {
                this.#c -= t[e], t[e] = 0
            }, this.#k = (t, e, r, n) => {
                if (this.#O(e)) return 0;
                if (!tt(r)) {
                    if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                    if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
                    if (r = n(e, t), !tt(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
                }
                return r
            }, this.#L = (e, r, n) => {
                if (t[e] = r, this.#e) {
                    let r = this.#e - t[e];
                    for (; this.#c > r;) this.#N(!0)
                }
                this.#c += t[e], n && (n.entrySize = r, n.totalCalculatedSize = this.#c)
            }
        }#
        q = t => {};#
        L = (t, e, r) => {};#
        k = (t, e, r, n) => {
            if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            return 0
        };* #T({
            allowStale: t = this.allowStale
        } = {}) {
            if (this.#u)
                for (let e = this.#y; this.#W(e) && ((t || !this.#F(e)) && (yield e), e !== this.#g);) e = this.#p[e]
        }* #j({
            allowStale: t = this.allowStale
        } = {}) {
            if (this.#u)
                for (let e = this.#g; this.#W(e) && ((t || !this.#F(e)) && (yield e), e !== this.#y);) e = this.#f[e]
        }#
        W(t) {
            return void 0 !== t && this.#h.get(this.#l[t]) === t
        }* entries() {
            for (let t of this.#T()) void 0 !== this.#d[t] && void 0 !== this.#l[t] && !this.#O(this.#d[t]) && (yield [this.#l[t], this.#d[t]])
        }* rentries() {
            for (let t of this.#j()) void 0 !== this.#d[t] && void 0 !== this.#l[t] && !this.#O(this.#d[t]) && (yield [this.#l[t], this.#d[t]])
        }* keys() {
            for (let t of this.#T()) {
                let e = this.#l[t];
                void 0 !== e && !this.#O(this.#d[t]) && (yield e)
            }
        }* rkeys() {
            for (let t of this.#j()) {
                let e = this.#l[t];
                void 0 !== e && !this.#O(this.#d[t]) && (yield e)
            }
        }* values() {
            for (let t of this.#T()) void 0 !== this.#d[t] && !this.#O(this.#d[t]) && (yield this.#d[t])
        }* rvalues() {
            for (let t of this.#j()) void 0 !== this.#d[t] && !this.#O(this.#d[t]) && (yield this.#d[t])
        }[Symbol.iterator]() {
            return this.entries()
        }[Symbol.toStringTag] = "LRUCache";
        find(t, e = {}) {
            for (let r of this.#T()) {
                let n = this.#d[r],
                    i = this.#O(n) ? n.__staleWhileFetching : n;
                if (void 0 !== i && t(i, this.#l[r], this)) return this.#H(this.#l[r], e)
            }
        }
        forEach(t, e = this) {
            for (let r of this.#T()) {
                let n = this.#d[r],
                    i = this.#O(n) ? n.__staleWhileFetching : n;
                void 0 !== i && t.call(e, i, this.#l[r], this)
            }
        }
        rforEach(t, e = this) {
            for (let r of this.#j()) {
                let n = this.#d[r],
                    i = this.#O(n) ? n.__staleWhileFetching : n;
                void 0 !== i && t.call(e, i, this.#l[r], this)
            }
        }
        purgeStale() {
            let t = !1;
            for (let e of this.#j({
                    allowStale: !0
                })) this.#F(e) && (this.#z(this.#l[e], "expire"), t = !0);
            return t
        }
        info(t) {
            let e = this.#h.get(t);
            if (void 0 === e) return;
            let r = this.#d[e],
                n = this.#O(r) ? r.__staleWhileFetching : r;
            if (void 0 === n) return;
            let i = {
                value: n
            };
            if (this.#I && this.#b) {
                let t = this.#I[e],
                    r = this.#b[e];
                if (t && r) {
                    let e = t - (this.#a.now() - r);
                    i.ttl = e, i.start = Date.now()
                }
            }
            return this.#w && (i.size = this.#w[e]), i
        }
        dump() {
            let t = [];
            for (let e of this.#T({
                    allowStale: !0
                })) {
                let r = this.#l[e],
                    n = this.#d[e],
                    i = this.#O(n) ? n.__staleWhileFetching : n;
                if (void 0 === i || void 0 === r) continue;
                let s = {
                    value: i
                };
                if (this.#I && this.#b) {
                    s.ttl = this.#I[e];
                    let t = this.#a.now() - this.#b[e];
                    s.start = Math.floor(Date.now() - t)
                }
                this.#w && (s.size = this.#w[e]), t.unshift([r, s])
            }
            return t
        }
        load(t) {
            this.clear();
            for (let [e, r] of t) {
                if (r.start) {
                    let t = Date.now() - r.start;
                    r.start = this.#a.now() - t
                }
                this.#G(e, r.value, r)
            }
        }
        set(t, e, r = {}) {
            let {
                status: n
            } = r;
            return r.status = n, n && (n.op = "set", n.key = t, void 0 !== e && (n.value = e)), this.#G(t, e, r)
        }#
        G(t, e, r = {}) {
            let {
                ttl: n = this.ttl,
                start: i,
                noDisposeOnSet: s = this.noDisposeOnSet,
                sizeCalculation: o = this.sizeCalculation,
                status: a
            } = r;
            if (void 0 === e) return a && (a.set = "deleted"), this.delete(t), this;
            let {
                noUpdateTTL: u = this.noUpdateTTL
            } = r;
            a && !this.#O(e) && (a.value = e);
            let c = this.#k(t, e, r.size || 0, o, a);
            if (this.maxEntrySize && c > this.maxEntrySize) return this.#z(t, "set"), a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this;
            let h = 0 === this.#u ? void 0 : this.#h.get(t);
            if (void 0 === h) h = 0 === this.#u ? this.#y : 0 !== this.#m.length ? this.#m.pop() : this.#u === this.#t ? this.#N(!1) : this.#u, this.#l[h] = t, this.#d[h] = e, this.#h.set(t, h), this.#f[this.#y] = h, this.#p[h] = this.#y, this.#y = h, this.#u++, this.#L(h, c, a), a && (a.set = "add"), u = !1, this.#S && this.#n ? .(e, t, "add");
            else {
                this.#A(h);
                let r = this.#d[h];
                if (e !== r) {
                    if (this.#E && this.#O(r)) {
                        r.__abortController.abort(new Error("replaced"));
                        let {
                            __staleWhileFetching: e
                        } = r;
                        void 0 !== e && !s && (this.#C && this.#r ? .(e, t, "set"), this.#x && this.#v ? .push([e, t, "set"]))
                    } else s || (this.#C && this.#r ? .(r, t, "set"), this.#x && this.#v ? .push([r, t, "set"]));
                    if (this.#q(h), this.#L(h, c, a), this.#d[h] = e, a) {
                        a.set = "replace";
                        let t = r && this.#O(r) ? r.__staleWhileFetching : r;
                        void 0 !== t && (a.oldValue = t)
                    }
                } else a && (a.set = "update");
                this.#S && this.onInsert ? .(e, t, e === r ? "update" : "replace")
            }
            if (0 !== n && !this.#I && this.#D(), this.#I && (u || this.#P(h, n, i), a && this.#U(a, h)), !s && this.#x && this.#v) {
                let t, e = this.#v;
                for (; t = e ? .shift();) this.#i ? .(...t)
            }
            return this
        }
        pop() {
            try {
                for (; this.#u;) {
                    let t = this.#d[this.#g];
                    if (this.#N(!0), this.#O(t)) {
                        if (t.__staleWhileFetching) return t.__staleWhileFetching
                    } else if (void 0 !== t) return t
                }
            } finally {
                if (this.#x && this.#v) {
                    let t, e = this.#v;
                    for (; t = e ? .shift();) this.#i ? .(...t)
                }
            }
        }#
        N(t) {
            let e = this.#g,
                r = this.#l[e],
                n = this.#d[e];
            return this.#E && this.#O(n) ? n.__abortController.abort(new Error("evicted")) : (this.#C || this.#x) && (this.#C && this.#r ? .(n, r, "evict"), this.#x && this.#v ? .push([n, r, "evict"])), this.#q(e), this.#_ ? .[e] && (clearTimeout(this.#_[e]), this.#_[e] = void 0), t && (this.#l[e] = void 0, this.#d[e] = void 0, this.#m.push(e)), 1 === this.#u ? (this.#g = this.#y = 0, this.#m.length = 0) : this.#g = this.#f[e], this.#h.delete(r), this.#u--, e
        }
        has(t, e = {}) {
            let {
                status: r
            } = e;
            return e.status = r, r && (r.op = "has", r.key = t), this.#B(t, e)
        }#
        B(t, e = {}) {
            let {
                updateAgeOnHas: r = this.updateAgeOnHas,
                status: n
            } = e, i = this.#h.get(t);
            if (void 0 !== i) {
                let t = this.#d[i];
                if (this.#O(t) && void 0 === t.__staleWhileFetching) return !1;
                if (!this.#F(i)) return r && this.#M(i), n && (n.has = "hit", this.#U(n, i)), !0;
                n && (n.has = "stale", this.#U(n, i))
            } else n && (n.has = "miss");
            return !1
        }
        peek(t, e = {}) {
            let {
                status: r
            } = e;
            return r && (r.op = "peek", r.key = t), e.status = r, this.#V(t, e)
        }#
        V(t, e) {
            let {
                status: r,
                allowStale: n = this.allowStale
            } = e, i = this.#h.get(t);
            if (void 0 === i || !n && this.#F(i)) return void(r && (r.peek = void 0 === i ? "miss" : "stale"));
            let s = this.#d[i],
                o = this.#O(s) ? s.__staleWhileFetching : s;
            return r && (void 0 !== o ? (r.peek = "hit", r.value = o) : r.peek = "miss"), o
        }#
        $(t, e, r, n) {
            let i = void 0 === e ? void 0 : this.#d[e];
            if (this.#O(i)) return i;
            let s = new AbortController,
                {
                    signal: o
                } = r;
            o ? .addEventListener("abort", () => s.abort(o.reason), {
                signal: s.signal
            });
            let a = {
                    signal: s.signal,
                    options: r,
                    context: n
                },
                u = (n, i = !1) => {
                    let {
                        aborted: o
                    } = s.signal, u = r.ignoreFetchAbort && void 0 !== n, l = r.ignoreFetchAbort || !(!r.allowStaleOnFetchAbort || void 0 === n);
                    if (r.status && (o && !i ? (r.status.fetchAborted = !0, r.status.fetchError = s.signal.reason, u && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), o && !u && !i) return c(s.signal.reason, l);
                    let d = h,
                        f = this.#d[e];
                    return (f === h || void 0 === f && u && i) && (void 0 === n ? void 0 !== d.__staleWhileFetching ? this.#d[e] = d.__staleWhileFetching : this.#z(t, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.#G(t, n, a.options))), n
                },
                c = (n, i) => {
                    let {
                        aborted: o
                    } = s.signal, a = o && r.allowStaleOnFetchAbort, u = a || r.allowStaleOnFetchRejection, c = u || r.noDeleteOnFetchRejection, l = h;
                    if (this.#d[e] === h && (!c || !i && void 0 === l.__staleWhileFetching ? this.#z(t, "fetch") : a || (this.#d[e] = l.__staleWhileFetching)), u) return r.status && void 0 !== l.__staleWhileFetching && (r.status.returnedStale = !0), l.__staleWhileFetching;
                    if (l.__returned === l) throw n
                };
            r.status && (r.status.fetchDispatched = !0);
            let h = new Promise((e, n) => {
                    let o = this.#s ? .(t, i, a);
                    o && o instanceof Promise && o.then(t => e(void 0 === t ? void 0 : t), n), s.signal.addEventListener("abort", () => {
                        (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (e(void 0), r.allowStaleOnFetchAbort && (e = t => u(t, !0)))
                    })
                }).then(u, t => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = t), c(t, !1))),
                l = Object.assign(h, {
                    __abortController: s,
                    __staleWhileFetching: i,
                    __returned: void 0
                });
            return void 0 === e ? (this.#G(t, l, { ...a.options,
                status: void 0
            }), e = this.#h.get(t)) : this.#d[e] = l, l
        }#
        O(t) {
            if (!this.#E) return !1;
            let e = t;
            return !!e && e instanceof Promise && e.hasOwnProperty("__staleWhileFetching") && e.__abortController instanceof AbortController
        }
        fetch(t, e = {}) {
            let {
                status: r
            } = e;
            return e.status = r, r && e.context && (r.context = e.context), this.#J(t, e)
        }
        async# J(t, e = {}) {
            let {
                allowStale: r = this.allowStale,
                updateAgeOnGet: n = this.updateAgeOnGet,
                noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
                ttl: s = this.ttl,
                noDisposeOnSet: o = this.noDisposeOnSet,
                size: a = 0,
                sizeCalculation: u = this.sizeCalculation,
                noUpdateTTL: c = this.noUpdateTTL,
                noDeleteOnFetchRejection: h = this.noDeleteOnFetchRejection,
                allowStaleOnFetchRejection: l = this.allowStaleOnFetchRejection,
                ignoreFetchAbort: d = this.ignoreFetchAbort,
                allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort,
                context: p,
                forceRefresh: g = !1,
                status: y,
                signal: m
            } = e;
            if (y && (y.op = "fetch", y.key = t, g && (y.forceRefresh = !0)), !this.#E) return y && (y.fetch = "get"), this.#H(t, {
                allowStale: r,
                updateAgeOnGet: n,
                noDeleteOnStaleGet: i,
                status: y
            });
            let v = {
                    allowStale: r,
                    updateAgeOnGet: n,
                    noDeleteOnStaleGet: i,
                    ttl: s,
                    noDisposeOnSet: o,
                    size: a,
                    sizeCalculation: u,
                    noUpdateTTL: c,
                    noDeleteOnFetchRejection: h,
                    allowStaleOnFetchRejection: l,
                    allowStaleOnFetchAbort: f,
                    ignoreFetchAbort: d,
                    status: y,
                    signal: m
                },
                w = this.#h.get(t);
            if (void 0 === w) {
                y && (y.fetch = "miss");
                let e = this.#$(t, w, v, p);
                return e.__returned = e
            } {
                let e = this.#d[w];
                if (this.#O(e)) {
                    let t = r && void 0 !== e.__staleWhileFetching;
                    return y && (y.fetch = "inflight", t && (y.returnedStale = !0)), t ? e.__staleWhileFetching : e.__returned = e
                }
                let i = this.#F(w);
                if (!g && !i) return y && (y.fetch = "hit"), this.#A(w), n && this.#M(w), y && this.#U(y, w), e;
                let s = this.#$(t, w, v, p),
                    o = void 0 !== s.__staleWhileFetching && r;
                return y && (y.fetch = i ? "stale" : "refresh", o && i && (y.returnedStale = !0)), o ? s.__staleWhileFetching : s.__returned = s
            }
        }
        forceFetch(t, e = {}) {
            let {
                status: r
            } = e;
            return e.status = r, r && e.context && (r.context = e.context), this.#Z(t, e)
        }
        async# Z(t, e = {}) {
            let r = await this.#J(t, e);
            if (void 0 === r) throw new Error("fetch() returned undefined");
            return r
        }
        memo(t, e = {}) {
            let {
                status: r
            } = e;
            e.status = r, r && (r.op = "memo", r.key = t, e.context && (r.context = e.context));
            let n = this.#Y(t, e);
            return r && (r.value = n), n
        }#
        Y(t, e = {}) {
            let r = this.#o;
            if (!r) throw new Error("no memoMethod provided to constructor");
            let {
                context: n,
                status: i,
                forceRefresh: s,
                ...o
            } = e;
            i && s && (i.forceRefresh = !0);
            let a = this.#H(t, o),
                u = s || void 0 === a;
            if (i && (i.memo = u ? "miss" : "hit", u || (i.value = a)), !u) return a;
            let c = r(t, a, {
                options: o,
                context: n
            });
            return i && (i.value = c), this.#G(t, c, o), c
        }
        get(t, e = {}) {
            let {
                status: r
            } = e;
            e.status = r, r && (r.op = "get", r.key = t);
            let n = this.#H(t, e);
            return r && (void 0 !== n && (r.value = n), xa.hasSubscribers), n
        }#
        H(t, e = {}) {
            let {
                allowStale: r = this.allowStale,
                updateAgeOnGet: n = this.updateAgeOnGet,
                noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
                status: s
            } = e, o = this.#h.get(t);
            if (void 0 === o) return void(s && (s.get = "miss"));
            let a = this.#d[o],
                u = this.#O(a);
            return s && this.#U(s, o), this.#F(o) ? u ? (s && (s.get = "stale-fetching"), r && void 0 !== a.__staleWhileFetching ? (s && (s.returnedStale = !0), a.__staleWhileFetching) : void 0) : (i || this.#z(t, "expire"), s && (s.get = "stale"), r ? (s && (s.returnedStale = !0), a) : void 0) : (s && (s.get = u ? "fetching" : "hit"), this.#A(o), n && this.#M(o), u ? a.__staleWhileFetching : a)
        }#
        Q(t, e) {
            this.#p[e] = t, this.#f[t] = e
        }#
        A(t) {
            t !== this.#y && (t === this.#g ? this.#g = this.#f[t] : this.#Q(this.#p[t], this.#f[t]), this.#Q(this.#y, t), this.#y = t)
        }
        delete(t) {
            return this.#z(t, "delete")
        }#
        z(t, e) {
            let r = !1;
            if (0 !== this.#u) {
                let n = this.#h.get(t);
                if (void 0 !== n)
                    if (this.#_ ? .[n] && (clearTimeout(this.#_ ? .[n]), this.#_[n] = void 0), r = !0, 1 === this.#u) this.#K(e);
                    else {
                        this.#q(n);
                        let r = this.#d[n];
                        if (this.#O(r) ? r.__abortController.abort(new Error("deleted")) : (this.#C || this.#x) && (this.#C && this.#r ? .(r, t, e), this.#x && this.#v ? .push([r, t, e])), this.#h.delete(t), this.#l[n] = void 0, this.#d[n] = void 0, n === this.#y) this.#y = this.#p[n];
                        else if (n === this.#g) this.#g = this.#f[n];
                        else {
                            let t = this.#p[n];
                            this.#f[t] = this.#f[n];
                            let e = this.#f[n];
                            this.#p[e] = this.#p[n]
                        }
                        this.#u--, this.#m.push(n)
                    }
            }
            if (this.#x && this.#v ? .length) {
                let t, e = this.#v;
                for (; t = e ? .shift();) this.#i ? .(...t)
            }
            return r
        }
        clear() {
            return this.#K("delete")
        }#
        K(t) {
            for (let e of this.#j({
                    allowStale: !0
                })) {
                let r = this.#d[e];
                if (this.#O(r)) r.__abortController.abort(new Error("deleted"));
                else {
                    let n = this.#l[e];
                    this.#C && this.#r ? .(r, n, t), this.#x && this.#v ? .push([r, n, t])
                }
            }
            if (this.#h.clear(), this.#d.fill(void 0), this.#l.fill(void 0), this.#I && this.#b) {
                this.#I.fill(0), this.#b.fill(0);
                for (let t of this.#_ ? ? []) void 0 !== t && clearTimeout(t);
                this.#_ ? .fill(void 0)
            }
            if (this.#w && this.#w.fill(0), this.#g = 0, this.#y = 0, this.#m.length = 0, this.#c = 0, this.#u = 0, this.#x && this.#v) {
                let t, e = this.#v;
                for (; t = e ? .shift();) this.#i ? .(...t)
            }
        }
    };
const hr = typeof window > "u",
    dr = {
        isPreviewMode: !1,
        isEditMode: !1,
        isRevalidateMode: !1,
        requestId: null
    },
    Fa = () => ({ ...dr,
        isServer: hr
    }),
    ja = {
        production: "superside",
        talent: "careers",
        superads: "super-ads"
    },
    fr = _e && cr ? `${cr}/${ja[_e]}` : null,
    Da = ["hashedId", "height", "width", "aspectRatio", "duration", "orders", "filters", "columns", "maxHeight", "maxWidth", "columnGap", "rowGap", "mood", "colorMood", "paddingBottom", "paddingTop", "contentWidth", "layoutType", "imageLayout", "mobileImageLayout", "bannerBackgroundMood", "imageAlignment", "maxWidth", "isFullBleed", "grid", "gridType", "displayAsGroups", "heightSettings", "videoType", "textAlignment", "alignment", "assetType", "letterCase", "containerType", "skin", "layout", "position", "assetPosition", "assetPositionMobileFlip", "carouselDirection", "query", "field", "_key", "_rev", "_type", "_ref", "_id", "hashId", "direction"],
    Ua = ["schemaType", "dynamicRouteSegment", "staticRouteSegment", "config"],
    Ma = t => {
        const {
            sourcePath: e,
            sourceDocument: r
        } = t, {
            _type: n
        } = r;
        return !Ua.includes(n) && !e.some(t => "string" == typeof t && Da.includes(t)) && t.filterDefault(t)
    };
var Nn = {};
const qa = "true" === Nn.SANITY_CACHE_DEBUG,
    La = Number(Nn.SANITY_CACHE_TTL_MIN) || 15,
    ka = 60 * La * 1e3,
    za = ({
        dataset: t,
        isEditMode: e,
        isPreviewMode: r,
        isRevalidateMode: n
    }) => {
        const i = [t, e ? "edit" : void 0, r ? "preview" : void 0, n ? "revalidate" : void 0].filter(Boolean);
        return i.length ? i.join(".") : void 0
    },
    Va = new Pa({
        max: 1e3,
        ttl: ka,
        updateAgeOnGet: !1,
        updateAgeOnHas: !1,
        ttlAutopurge: !0
    });
async function Na({
    query: t,
    params: e,
    tag: r,
    useCdn: n,
    perspective: i
}) {
    const {
        isPreviewMode: s,
        isEditMode: o,
        isRevalidateMode: a,
        requestId: u,
        isServer: c
    } = Fa(), h = s || o, l = i ? ? (h ? "drafts" : "published"), {
        dataset: d
    } = Zt.config(), f = za({
        dataset: d,
        isEditMode: o,
        isPreviewMode: s,
        isRevalidateMode: a
    }), p = Zt.withConfig({
        perspective: l,
        requestTagPrefix: f,
        useCdn: !h && !a && n,
        token: o || s ? Aa : void 0,
        stega: {
            enabled: o && !!fr,
            studioUrl: fr,
            filter: Ma
        }
    });
    if (!c) {
        const s = new URL("/api/sanity/data", window.location.origin);
        return s.searchParams.set("query", t), e && s.searchParams.set("params", JSON.stringify(e)), r && s.searchParams.set("tag", r), void 0 !== n && s.searchParams.set("useCdn", String(n)), void 0 !== i && s.searchParams.set("perspective", i), await (await fetch(s.toString())).json()
    }
    const g = p.config(),
        y = {
            query: t,
            params: e || {},
            config: g,
            tag: r
        };
    (s || o || a) && u && (y.requestId = u);
    const m = JSON.stringify(y);
    return li({
        cache: Va,
        cacheKey: m,
        factory: () => p.fetch(t, e, {
            filterResponse: !0,
            tag: r
        }),
        debugEnabled: qa,
        debugContext: "Sanity Cache"
    })
}

function Wa(t) {
    return e => {
        const {
            tag: r,
            useCdn: n,
            ...i
        } = e || {}, s = Object.keys(i).length > 0;
        return Na({
            query: t,
            ...s ? {
                params: i
            } : {},
            ...r ? {
                tag: r
            } : {},
            ...void 0 !== n ? {
                useCdn: n
            } : {}
        })
    }
}
const D = t => t.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
D('*[_type == \'quote\' && _id == $id][0]{\n    ...,\n    author->{\n      ...,\n      company->\n    },\n    "source": source->{\n      _type,\n      "title": coalesce(title.plain, title),\n       svg,\n       "link": "/blog/" + slug.current,\n       customer->{name},\n       "openGraphImage": routeSettings.seo.openGraph.image\n    }\n  }'), D("*[_type == 'company' && _id == $id][0]{\n    ...,\n    tags[]->,\n    industry->\n  }"), D("*[_type == 'person' && _id == $id][0] {\n    ...,\n    company-> {\n      ...,\n    }\n  }"), D("*[\n    _type == 'floatingBanner' &&\n    !(_id in path('drafts.**')) &&\n    ((displaySettings.displayScope == 'global' && !(defined(displaySettings.excludePages) && $pageId in displaySettings.excludePages[]._ref)) ||\n      (displaySettings.displayScope == 'page' && $pageId in displaySettings.targetPages[]._ref) ||\n      (displaySettings.displayScope == 'type' && $pageType in displaySettings.targetTypes)\n    )\n  ]"), D('*[_id == $currentPostId][0] {\n  "relatedPostsIds": *[_type == "post" && _id != ^._id] | score(\n    boost(category._ref == ^.category._ref, 40),\n    boost(array::intersects(tags[]._ref, ^.tags[]._ref), 20),\n    boost(array::intersects(authors[]._ref, ^.authors[]._ref), 15)\n  ) | order(_score desc) [0...4]._id\n}.relatedPostsIds'), D("*[_type == 'progressiveForm' && _id == $id][0]{\n  ...,\n  scheduler{\n    ...,\n    router->\n  },\n  trackingEvents {\n    ...,\n    form->,\n    form_type->,\n    item->\n  }\n}"), D('*[_type == "schemaType"]'), D('*[_type == "dynamicRouteSegment"]'), D('*[_type == "staticRouteSegment"]'), D('*[_type == "config" && _id == "globalConfig"][0]'), D('*[_type == "exitIntentPopup" && _id == $id][0]{\n    ...,\n    promoEvents {\n      "creativeName": creativeName->.creativeName,\n      "creativeSlot": creativeSlot->.creativeSlot,\n      "promotionName": promotionName->.promotionName,\n      "promotionType": promotionType->.promotionType,\n      ecommerceItems[] {\n        itemName,\n        itemIndex\n      }\n    }\n  }'), D("*[defined(slug.segment) && slug.segment._ref in $dynamicSegmentsIds && slug.current == $slug][0]"), D("*[_type in $types && routeSettings.seo.indexable == true && defined(slug.segment)]{_updatedAt, _id, slug}"), D("*[_id == $id][0]"), D("*[_type == $type]");
const Ha = D("*[_id == $id][0]"),
    Ga = Wa(Ha);
D("*[_id in $ids]");
const Fu = ({
    reference: t,
    tag: e
}) => t ? Ga({
    id: t._ref,
    tag: e
}) : null;
D("*[_type == 'banner' && _id == $id][0]{\n  ...,\n  \"companies\": collection->{\n    items[]->\n  }.items \n}"), D('*[_type == \'richTextBannerDocument\' && _id == $id][0]{\n  ...,\n  promoEvents {\n    "creativeName": creativeName->.creativeName,\n    "creativeSlot": creativeSlot->.creativeSlot,\n    "promotionName": promotionName->.promotionName,\n    "promotionType": promotionType->.promotionType,\n    ecommerceItems[] {\n      itemName,\n      itemIndex\n    }\n  }\n}'), D("*[_type == 'customer' && $industryId in industries[]._ref]{\n    ...,\n    company->,\n    industries[]->,\n    size->\n  }");
var pr, Vt = {
        exports: {}
    },
    Ba = Vt.exports;

function Ya() {
    return pr || (pr = 1, Vt.exports = function() {
        function t() {
            return t = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
            }, t.apply(this, arguments)
        }

        function e(t, e) {
            if (t) {
                if ("string" == typeof t) return r(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
            }
        }

        function r(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n
        }

        function n(t) {
            var r = 0;
            if (typeof Symbol > "u" || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = e(t))) return function() {
                    return r >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[r++]
                    }
                };
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (r = t[Symbol.iterator]()).next.bind(r)
        }
        var i = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

        function s(t) {
            var e = t.split("-"),
                r = e[1],
                n = e[2],
                s = e[3];
            if (!r || !n || !s) throw new Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + i + '".');
            var o = n.split("x"),
                a = +o[0],
                u = +o[1];
            if (!isFinite(a) || !isFinite(u)) throw new Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + i + '".');
            return {
                id: r,
                width: a,
                height: u,
                format: s
            }
        }
        var o = function(t) {
                return !!t && "string" == typeof t._ref
            },
            a = function(t) {
                return !!t && "string" == typeof t._id
            },
            u = function(t) {
                var e = t;
                return !(!e || !e.asset) && "string" == typeof e.asset.url
            };

        function c(t) {
            if (!t) return null;
            var e;
            if ("string" == typeof t && h(t)) e = {
                asset: {
                    _ref: l(t)
                }
            };
            else if ("string" == typeof t) e = {
                asset: {
                    _ref: t
                }
            };
            else if (o(t)) e = {
                asset: t
            };
            else if (a(t)) e = {
                asset: {
                    _ref: t._id || ""
                }
            };
            else if (u(t)) e = {
                asset: {
                    _ref: l(t.asset.url)
                }
            };
            else {
                if ("object" != typeof t.asset) return null;
                e = t
            }
            var r = t;
            return r.crop && (e.crop = r.crop), r.hotspot && (e.hotspot = r.hotspot), d(e)
        }

        function h(t) {
            return /^https?:\/\//.test("" + t)
        }

        function l(t) {
            return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
        }

        function d(e) {
            if (e.crop && e.hotspot) return e;
            var r = t({}, e);
            return r.crop || (r.crop = {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            }), r.hotspot || (r.hotspot = {
                x: .5,
                y: .5,
                height: 1,
                width: 1
            }), r
        }
        var f = [
            ["width", "w"],
            ["height", "h"],
            ["format", "fm"],
            ["download", "dl"],
            ["blur", "blur"],
            ["sharpen", "sharp"],
            ["invert", "invert"],
            ["orientation", "or"],
            ["minHeight", "min-h"],
            ["maxHeight", "max-h"],
            ["minWidth", "min-w"],
            ["maxWidth", "max-w"],
            ["quality", "q"],
            ["fit", "fit"],
            ["crop", "crop"],
            ["saturation", "sat"],
            ["auto", "auto"],
            ["dpr", "dpr"],
            ["pad", "pad"]
        ];

        function p(e) {
            var r = t({}, e || {}),
                n = r.source;
            delete r.source;
            var i = c(n);
            if (!i) return null;
            var o = s(i.asset._ref || i.asset._id || ""),
                a = Math.round(i.crop.left * o.width),
                u = Math.round(i.crop.top * o.height),
                h = {
                    left: a,
                    top: u,
                    width: Math.round(o.width - i.crop.right * o.width - a),
                    height: Math.round(o.height - i.crop.bottom * o.height - u)
                },
                l = i.hotspot.height * o.height / 2,
                d = i.hotspot.width * o.width / 2,
                f = i.hotspot.x * o.width,
                p = i.hotspot.y * o.height,
                m = {
                    left: f - d,
                    top: p - l,
                    right: f + d,
                    bottom: p + l
                };
            return r.rect || r.focalPoint || r.ignoreImageParams || r.crop || (r = t(t({}, r), y({
                crop: h,
                hotspot: m
            }, r))), g(t(t({}, r), {}, {
                asset: o
            }))
        }

        function g(t) {
            var e = t.baseUrl || "https://cdn.sanity.io",
                r = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format,
                n = e + "/images/" + t.projectId + "/" + t.dataset + "/" + r,
                i = [];
            if (t.rect) {
                var s = t.rect,
                    o = s.left,
                    a = s.top,
                    u = s.width,
                    c = s.height;
                (0 !== o || 0 !== a || c !== t.asset.height || u !== t.asset.width) && i.push("rect=" + o + "," + a + "," + u + "," + c)
            }
            t.bg && i.push("bg=" + t.bg), t.focalPoint && (i.push("fp-x=" + t.focalPoint.x), i.push("fp-y=" + t.focalPoint.y));
            var h = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
            return h && i.push("flip=" + h), f.forEach(function(e) {
                var r = e[0],
                    n = e[1];
                typeof t[r] < "u" ? i.push(n + "=" + encodeURIComponent(t[r])) : typeof t[n] < "u" && i.push(n + "=" + encodeURIComponent(t[n]))
            }), 0 === i.length ? n : n + "?" + i.join("&")
        }

        function y(t, e) {
            var r, n = e.width,
                i = e.height;
            if (!n || !i) return {
                width: n,
                height: i,
                rect: t.crop
            };
            var s = t.crop,
                o = t.hotspot,
                a = n / i;
            if (s.width / s.height > a) {
                var u = s.height,
                    c = u * a,
                    h = s.top,
                    l = (o.right - o.left) / 2 + o.left - c / 2;
                l < s.left ? l = s.left : l + c > s.left + s.width && (l = s.left + s.width - c), r = {
                    left: Math.round(l),
                    top: Math.round(h),
                    width: Math.round(c),
                    height: Math.round(u)
                }
            } else {
                var d = s.width,
                    f = d / a,
                    p = s.left,
                    g = (o.bottom - o.top) / 2 + o.top - f / 2;
                g < s.top ? g = s.top : g + f > s.top + s.height && (g = s.top + s.height - f), r = {
                    left: Math.max(0, Math.floor(p)),
                    top: Math.max(0, Math.floor(g)),
                    width: Math.round(d),
                    height: Math.round(f)
                }
            }
            return {
                width: n,
                height: i,
                rect: r
            }
        }
        var m = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            v = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            w = ["format"];

        function b(t) {
            return !!t && "object" == typeof t.clientConfig
        }

        function I(t) {
            for (var e, r = n(f); !(e = r()).done;) {
                var i = e.value,
                    s = i[0],
                    o = i[1];
                if (t === s || t === o) return s
            }
            return t
        }

        function _(t) {
            var e = t;
            if (b(e)) {
                var r = e.clientConfig,
                    n = r.apiHost,
                    i = r.projectId,
                    s = r.dataset;
                return new C(null, {
                    baseUrl: (n || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: i,
                    dataset: s
                })
            }
            return new C(null, t)
        }
        var C = function() {
            function e(e, r) {
                this.options = t(e ? t({}, e.options || {}) : {}, r || {})
            }
            var r = e.prototype;
            return r.withOptions = function(r) {
                var n = r.baseUrl || this.options.baseUrl,
                    i = {
                        baseUrl: n
                    };
                for (var s in r) r.hasOwnProperty(s) && (i[I(s)] = r[s]);
                return new e(this, t({
                    baseUrl: n
                }, i))
            }, r.image = function(t) {
                return this.withOptions({
                    source: t
                })
            }, r.dataset = function(t) {
                return this.withOptions({
                    dataset: t
                })
            }, r.projectId = function(t) {
                return this.withOptions({
                    projectId: t
                })
            }, r.bg = function(t) {
                return this.withOptions({
                    bg: t
                })
            }, r.dpr = function(t) {
                return this.withOptions({
                    dpr: t
                })
            }, r.width = function(t) {
                return this.withOptions({
                    width: t
                })
            }, r.height = function(t) {
                return this.withOptions({
                    height: t
                })
            }, r.focalPoint = function(t, e) {
                return this.withOptions({
                    focalPoint: {
                        x: t,
                        y: e
                    }
                })
            }, r.maxWidth = function(t) {
                return this.withOptions({
                    maxWidth: t
                })
            }, r.minWidth = function(t) {
                return this.withOptions({
                    minWidth: t
                })
            }, r.maxHeight = function(t) {
                return this.withOptions({
                    maxHeight: t
                })
            }, r.minHeight = function(t) {
                return this.withOptions({
                    minHeight: t
                })
            }, r.size = function(t, e) {
                return this.withOptions({
                    width: t,
                    height: e
                })
            }, r.blur = function(t) {
                return this.withOptions({
                    blur: t
                })
            }, r.sharpen = function(t) {
                return this.withOptions({
                    sharpen: t
                })
            }, r.rect = function(t, e, r, n) {
                return this.withOptions({
                    rect: {
                        left: t,
                        top: e,
                        width: r,
                        height: n
                    }
                })
            }, r.format = function(t) {
                return this.withOptions({
                    format: t
                })
            }, r.invert = function(t) {
                return this.withOptions({
                    invert: t
                })
            }, r.orientation = function(t) {
                return this.withOptions({
                    orientation: t
                })
            }, r.quality = function(t) {
                return this.withOptions({
                    quality: t
                })
            }, r.forceDownload = function(t) {
                return this.withOptions({
                    download: t
                })
            }, r.flipHorizontal = function() {
                return this.withOptions({
                    flipHorizontal: !0
                })
            }, r.flipVertical = function() {
                return this.withOptions({
                    flipVertical: !0
                })
            }, r.ignoreImageParams = function() {
                return this.withOptions({
                    ignoreImageParams: !0
                })
            }, r.fit = function(t) {
                if (-1 === m.indexOf(t)) throw new Error('Invalid fit mode "' + t + '"');
                return this.withOptions({
                    fit: t
                })
            }, r.crop = function(t) {
                if (-1 === v.indexOf(t)) throw new Error('Invalid crop mode "' + t + '"');
                return this.withOptions({
                    crop: t
                })
            }, r.saturation = function(t) {
                return this.withOptions({
                    saturation: t
                })
            }, r.auto = function(t) {
                if (-1 === w.indexOf(t)) throw new Error('Invalid auto mode "' + t + '"');
                return this.withOptions({
                    auto: t
                })
            }, r.pad = function(t) {
                return this.withOptions({
                    pad: t
                })
            }, r.url = function() {
                return p(this.options)
            }, r.toString = function() {
                return this.url()
            }, e
        }();
        return _
    }()), Vt.exports
}
var Qa = Ya();
const Ja = oi(Qa),
    ju = t => {
        const {
            projectId: e,
            dataset: r
        } = Zt.config();
        return Ja({
            projectId: e,
            dataset: r
        }).image(t)
    },
    mt = "https://cdn.sanity.io",
    Xa = /^https:\/\/cdn\.sanity\./,
    Za = /^https:\/\/cdn\.[^/]+\/(images|files)\/[^/]+\/.*?[a-zA-Z0-9_]{24,40}.*$/,
    Ka = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+\.[a-z0-9]+$/,
    tu = /^file-([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+$/,
    eu = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})-\d+x\d+\.[a-z0-9]+$/,
    ae = /^(images|files)\/([a-z0-9]+)\/([a-z0-9][-\w]*)\//,
    Wn = /^(?:image-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-\d+x\d+-[a-z0-9]+|file-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+)$/,
    ru = "sanity.imageAsset",
    Hn = "sanity.fileAsset",
    gr = {
        projectId: "a",
        dataset: "b"
    },
    ue = "upload-in-progress-placeholder",
    Fe = "upload-in-progress",
    ce = "tmp";
class Pt extends Error {
    constructor(t, e = "Failed to resolve asset ID from source") {
        super(e), this.unresolvable = !0, this.input = t
    }
}

function nu(t) {
    const e = t;
    return !(!e.unresolvable || !("input" in e))
}

function je(t) {
    return (...e) => {
        try {
            return t(...e)
        } catch (t) {
            if (nu(t)) return;
            throw t
        }
    }
}

function nt(t) {
    return null !== t && !Array.isArray(t) && "object" == typeof t
}

function Gn(t) {
    return nt(t) && "string" == typeof t._ref
}

function iu(t) {
    return nt(t) && "string" == typeof t._id
}

function Bn(t) {
    return nt(t) && "string" == typeof t.path
}

function Yn(t) {
    return nt(t) && "string" == typeof t.url
}

function su(t) {
    return nt(t) && "sanity.fileAsset" === t._type
}

function ou(t) {
    return nt(t) && "sanity.imageAsset" === t._type
}

function Qn(t) {
    const e = t;
    return nt(e) && !!e.asset && "object" == typeof e.asset
}

function It(t) {
    const e = t;
    return nt(e) && !!e._upload && !("asset" in e)
}

function Jn(t) {
    return Xa.test(t) || Za.test(t)
}
const au = Object.freeze({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    }),
    uu = Object.freeze({
        x: .5,
        y: .5,
        height: 1,
        width: 1
    }),
    mr = () => ({ ...au
    }),
    yr = () => ({ ...uu
    });

function Xn(t, e) {
    const r = e ? .projectId || t.projectId,
        n = e ? .dataset || t.dataset;
    if (!r || !n) throw new Error("Project details (projectId and dataset) required to resolve path for image");
    const i = "metadata" in t ? t.metadata.dimensions : {
            width: t.width,
            height: t.height
        },
        s = "originalFilename" in t ? t.originalFilename : void 0,
        {
            assetId: o,
            extension: a,
            vanityFilename: u
        } = t,
        {
            width: c,
            height: h
        } = i;
    return `images/${r}/${n}/${o}-${c}x${h}.${a}${ti(s,u,e)}`
}

function cu(t, e) {
    return `${e?.baseUrl||mt}/${Xn(t,e)}`
}

function Zn(t, e) {
    const r = e ? .projectId || t.projectId,
        n = e ? .dataset || t.dataset;
    if (!r || !n) throw new Error("Project details (projectId and dataset) required to resolve path for file");
    const i = "originalFilename" in t ? t.originalFilename : void 0,
        {
            assetId: s,
            extension: o,
            vanityFilename: a
        } = t;
    return `files/${r}/${n}/${s}.${o}${ti(i,a,e)}`
}

function lu(t, e) {
    return `${e?.baseUrl||mt}/${Zn(t,e)}`
}

function hu(t) {
    return ae.test(du(t) || "")
}

function Kn(t) {
    if (Qn(t)) return Kn(t.asset);
    if (!Gn(t)) {
        if ("string" == typeof t) return hu(t) ? Kt(t) : void 0;
        if (Bn(t)) return t.path;
        if (Yn(t)) return Kt(t.url)
    }
}

function Kt(t) {
    if (ae.test(t)) return t;
    if (!Jn(t)) throw new Pt(`Failed to resolve path from URL "${t}"`);
    return new URL(t).pathname.replace(/^\/+/, "")
}
const du = je(Kt);

function ti(t, e, r) {
    const n = e || t;
    return !1 !== r ? .useVanityName && n ? `/${n}` : ""
}
const fu = "file-027401f31c3ac1e6d78c5d539ccd1beff72b9b11-pdf",
    pu = "image-027401f31c3ac1e6d78c5d539ccd1beff72b9b11-2000x3000-jpg";

function gu(t) {
    if (!tu.test(t)) throw new Error(`Malformed file asset ID '${t}'. Expected an id like "${fu}"`);
    const [, e, r] = t.split("-");
    return {
        type: "file",
        assetId: e,
        extension: r
    }
}

function ei(t) {
    const [, e, r, n] = t.split("-"), [i, s] = (r || "").split("x").map(Number);
    if (!(e && r && n && i > 0 && s > 0)) throw new Error(`Malformed asset ID '${t}'. Expected an id like "${pu}".`);
    return {
        type: "image",
        assetId: e,
        width: i,
        height: s,
        extension: n
    }
}

function Du(t) {
    if (It(t)) return {
        width: 0,
        height: 0,
        aspectRatio: 0
    };
    const e = le(t),
        {
            width: r,
            height: n
        } = ei(e);
    return {
        width: r,
        height: n,
        aspectRatio: r / n
    }
}

function mu(t) {
    return It(t) ? ce : Iu(t) ? wu(t, gr).asset.extension : yu(t, gr).asset.extension
}

function yu(t, e) {
    if (It(t)) return {
        asset: {
            _id: ue,
            _type: ru,
            assetId: Fe,
            extension: ce,
            url: "",
            path: "",
            metadata: {
                dimensions: {
                    width: 1,
                    height: 1,
                    aspectRatio: 1
                }
            }
        },
        crop: mr(),
        hotspot: yr()
    };
    const r = t;
    return {
        asset: vu(t, e || ni(t)),
        crop: r.crop || mr(),
        hotspot: r.hotspot || yr()
    }
}

function vu(t, e) {
    const r = { ...e || De(t),
            useVanityName: !1
        },
        n = le(t),
        i = (t.asset || t).metadata || {},
        {
            assetId: s,
            width: o,
            height: a,
            extension: u
        } = ei(n),
        c = o / a,
        h = { ...ou(t) ? t : {},
            _id: n,
            _type: "sanity.imageAsset",
            assetId: s,
            extension: u,
            metadata: { ...i,
                dimensions: {
                    width: o,
                    height: a,
                    aspectRatio: c
                }
            },
            url: "",
            path: ""
        };
    return { ...h,
        path: Xn(h, r),
        url: cu(h, r)
    }
}

function wu(t, e) {
    if (It(t)) return {
        asset: {
            _id: ue,
            _type: Hn,
            assetId: Fe,
            extension: ce,
            url: "",
            path: "",
            metadata: {}
        }
    };
    return {
        asset: ri(t, e || ni(t))
    }
}

function ri(t, e) {
    if (It(t)) return {
        assetId: Fe,
        _id: ue,
        _type: Hn,
        extension: ce,
        metadata: {},
        url: "",
        path: ""
    };
    const r = { ...e || De(t),
            useVanityName: !1
        },
        n = le(t),
        i = t.asset || t,
        {
            assetId: s,
            extension: o
        } = gu(n),
        a = { ...su(t) ? t : {},
            _id: n,
            _type: "sanity.fileAsset",
            assetId: s,
            extension: o,
            metadata: i.metadata || {},
            url: "",
            path: ""
        };
    return { ...a,
        path: Zn(a, r),
        url: lu(a, r)
    }
}

function le(t) {
    if (It(t)) return ue;
    const e = Qn(t) ? t.asset : t;
    let r = "";
    if ("string" == typeof e ? r = _u(e) : Gn(e) ? r = e._ref : iu(e) ? r = e._id : Bn(e) ? r = dt(`${mt}/${e.path}`) : Yn(e) && (r = dt(e.url)), !r || !Wn.test(r)) throw new Pt(t);
    return r
}
const bu = je(le);

function _u(t) {
    if (Wn.test(t)) return t;
    const e = Jn(t) ? new URL(t).pathname : t;
    if (0 === e.indexOf("/images") || 0 === e.indexOf("/files")) return dt(t);
    if (ae.test(t)) return dt(`${mt}/${t}`);
    if (Su(t)) return dt(`${mt}/files/a/b/${t}`);
    if (Eu(t)) return dt(`${mt}/images/a/b/${t}`);
    throw new Pt(t)
}

function dt(t) {
    const e = Kt(t),
        [r, , , n] = e.split("/");
    return `${r.replace(/s$/,"")}-${n.replace(/\./g,"-")}`
}

function De(t) {
    const e = Kn(t);
    if (!e) throw new Pt(t, "Failed to resolve project ID and dataset from source");
    const [, , r, n] = e.match(ae) || [];
    if (!r || !n) throw new Pt(t, "Failed to resolve project ID and dataset from source");
    return {
        projectId: r,
        dataset: n
    }
}
const ni = je(De);

function Eu(t) {
    return eu.test(t)
}

function Su(t) {
    return Ka.test(t)
}

function Iu(t) {
    const e = bu(t);
    return !!e && e.startsWith("file-")
}
const {
    projectId: Au,
    dataset: Cu
} = Zt.config(), Uu = t => t ? ri(t, {
    projectId: Au,
    dataset: Cu
}).url : null, Mu = t => t ? mu(t) : null;
export {
    Vi as A, ws as B, Ss as C, kr as D, Gi as E, Zt as F, F as O, ki as R, Ce as S, Mu as a, Du as b, ne as c, Fa as d, Ni as e, Fu as f, Uu as g, Or as h, Jr as i, ut as j, B as k, Na as l, fs as m, Pu as n, O as o, G as p, rt as q, Wt as r, ju as s, Be as t, U as u, ji as v, St as w, Gr as x, Ru as y, Qr as z
};