import {
    s as t,
    g as i
} from "./consentManager.FtzWk7BX.js";
const s = "cookie-consent-config",
    c = e => {
        if (!e || typeof e != "object" || Array.isArray(e)) return;
        const {
            isRequired: r,
            preferencesCookieName: n
        } = e;
        if (typeof r != "boolean") return;
        if (n === void 0) return {
            isRequired: r
        };
        if (typeof n != "string") return;
        const o = n.trim();
        if (o) return {
            isRequired: r,
            preferencesCookieName: o
        }
    },
    C = () => {
        if (typeof document > "u") return;
        const e = document.getElementById(s);
        if (e instanceof HTMLScriptElement) try {
            return c(JSON.parse(e.textContent || ""))
        } catch {
            return
        }
    },
    a = e => i(e.isRequired, e.preferencesCookieName),
    u = (e, r) => {
        if (e.isRequired) return t(r, e.preferencesCookieName)
    };
export {
    a as g, C as r, u as s
};