import {
    r as u
} from "./index.CtKCFvq0.js";
import {
    j as E
} from "./js.cookie.CbilILek.js";
import {
    C as g,
    a as d
} from "./constants.B1nA__9a.js";
import {
    C as h
} from "./constants.C-KOj0Qy.js";
const p = (n, e, s) => {
        if (!n) return {
            canDisplay: !0,
            hasConsentDecision: !0,
            remainingDelayMs: 0
        };
        if (!E.get(e)) return {
            canDisplay: !1,
            hasConsentDecision: !1,
            remainingDelayMs: 0
        };
        if (s <= 0) return {
            canDisplay: !0,
            hasConsentDecision: !0,
            remainingDelayMs: 0
        };
        const i = Number(E.get(h) || 0);
        if (i <= 0) return {
            canDisplay: !0,
            hasConsentDecision: !0,
            remainingDelayMs: 0
        };
        const a = Date.now() - i,
            o = Math.max(s - a, 0);
        return {
            canDisplay: 0 === o,
            hasConsentDecision: !0,
            remainingDelayMs: o
        }
    },
    w = (n = {}) => {
        const {
            enabled: e = !1,
            preferencesCookieName: s = g,
            delayMs: i = 0,
            onCookieBannerClose: a
        } = n, [o, t] = u.useState(() => p(e, s, i)), r = u.useCallback(() => {
            const n = p(e, s, i);
            return t(e => e.canDisplay === n.canDisplay && e.hasConsentDecision === n.hasConsentDecision && e.remainingDelayMs === n.remainingDelayMs ? e : n), n
        }, [i, e, s]);
        return u.useEffect(() => {
            let n;
            const s = () => {
                    void 0 !== n && (window.clearTimeout(n), n = void 0)
                },
                i = e => {
                    e <= 0 || (n = window.setTimeout(() => {
                        const n = r();
                        n.remainingDelayMs > 0 && i(n.remainingDelayMs)
                    }, e))
                },
                o = r();
            o.remainingDelayMs > 0 && i(o.remainingDelayMs);
            const t = () => {
                s();
                const n = r();
                e && n.hasConsentDecision && a ? .(), n.remainingDelayMs > 0 && i(n.remainingDelayMs)
            };
            return window.addEventListener(d, t), () => {
                s(), window.removeEventListener(d, t)
            }
        }, [e, a, r]), {
            canDisplay: o.canDisplay,
            hasConsentDecision: o.hasConsentDecision
        }
    };
export {
    w as u
};