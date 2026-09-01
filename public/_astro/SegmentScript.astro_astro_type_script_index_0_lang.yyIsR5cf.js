import {
    r as l
} from "./shared.C2Q9Xc0Z.js";
import {
    w as u
} from "./consentUtils.CpMKxhTx.js";
const d = l("segment-config");

function p(o) {
    var r = "analytics",
        e = window[r] = window[r] || [];
    if (!e.initialize) {
        if (e.invoked) {
            window.console && console.error && console.error("Segment snippet included twice.");
            return
        }
        e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "screen", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware", "register"], e.factory = function(n) {
            return function() {
                if (window[r].initialized) return window[r][n].apply(window[r], arguments);
                var a = Array.prototype.slice.call(arguments);
                if (["track", "screen", "alias", "group", "page", "identify"].indexOf(n) > -1) {
                    var t = document.querySelector("link[rel='canonical']");
                    a.push({
                        __t: "bpc",
                        c: t && t.getAttribute("href") || void 0,
                        p: location.pathname,
                        u: location.href,
                        s: location.search,
                        t: document.title,
                        r: document.referrer
                    })
                }
                return a.unshift(n), e.push(a), e
            }
        };
        for (var i = 0; i < e.methods.length; i++) {
            var c = e.methods[i];
            e[c] = e.factory(c)
        }
        e.load = function(n, a) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.async = !0, t.setAttribute("data-global-segment-analytics-key", r), t.src = o.apiUrl + n;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(t, s), e._loadOptions = a
        }, e._writeKey = "Fo1gLUkJWOh0AZjBdlmokRQZRXi0wjnh", e.SNIPPET_VERSION = "5.2.0", e.load(o.apiKey), e.page()
    }
}
u("analytics", () => d && p(d));