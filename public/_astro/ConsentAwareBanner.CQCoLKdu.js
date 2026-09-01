import {
    j as m
} from "./jsx-runtime.u17CrQMm.js";
import {
    B as p
} from "./Banner.Rx93I__K.js";
import {
    u as B
} from "./useCookieBannerGate.Ctshc65E.js";
const E = 5e3,
    D = e => {
        const {
            floatingBanner: n,
            isVisible: i = !0,
            isConsentRequired: r = !1,
            preferencesCookieName: s,
            eventDelayMs: a = E,
            clickableLink: o,
            children: t
        } = e, l = "event" === n.type ? a : 0, {
            canDisplay: c
        } = B({
            enabled: r,
            preferencesCookieName: s,
            delayMs: l
        });
        return m.jsx(p, {
            controlled: !0,
            isVisible: i && c,
            floatingBanner: n,
            clickableLink: o,
            children: t
        }, n._id)
    };
export {
    D as ConsentAwareBanner
};