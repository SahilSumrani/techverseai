import {
    r as d,
    s as i,
    g
} from "./config.CPkfl8rD.js";
import {
    s as c
} from "./consentUtils.CpMKxhTx.js";
const m = t => ({
        ad_personalization: t.advertisement ? "granted" : "denied",
        ad_storage: t.advertisement ? "granted" : "denied",
        ad_user_data: t.advertisement ? "granted" : "denied",
        analytics_storage: t.analytics ? "granted" : "denied"
    }),
    C = () => {
        const t = d();
        if (!t) return;
        const e = window,
            a = () => {
                const a = g(t),
                    n = m(a),
                    s = c(n);
                s !== e.__gtmLastGoogleConsentState && (e.dataLayer = e.dataLayer || [], e.gtag = e.gtag || ((...t) => {
                    e.dataLayer ? .push(t)
                }), e.gtag("consent", "update", n), e.dataLayer.push({
                    event: "cookie_consent_update",
                    ...n
                }), e.__gtmLastGoogleConsentState = s)
            };
        return a(), i(t, a)
    };
C();