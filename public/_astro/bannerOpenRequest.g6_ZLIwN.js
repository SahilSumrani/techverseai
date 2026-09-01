const o = "cookie-banner:open",
    s = () => {
        if (!(typeof window > "u")) return window
    },
    r = e => !!e.__hasPendingCookieBannerOpenRequest && (e.__hasPendingCookieBannerOpenRequest = !1, !0),
    i = () => {
        const e = s();
        e && (e.__hasPendingCookieBannerOpenRequest = !0, e.dispatchEvent(new Event(o)))
    },
    a = e => {
        const n = s();
        if (!n) return () => {};
        const t = () => {
            r(n), e()
        };
        return n.addEventListener(o, t), r(n) && e(), () => {
            n.removeEventListener(o, t)
        }
    };
export {
    i as r, a as s
};