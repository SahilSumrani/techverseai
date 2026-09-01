import {
    r as c
} from "./index.CtKCFvq0.js";
const R = () => {
    const [e, o] = c.useState({
        overflowLeft: !1,
        overflowRight: !1,
        overflowTop: !1,
        overflowBottom: !1,
        overflowX: !1,
        overflowY: !1,
        isOverflowing: !1
    }), r = c.useRef(null);
    return c.useEffect(() => {
        const e = r.current;
        if (!e) return;
        const t = () => {
            const {
                scrollLeft: r,
                scrollTop: t,
                scrollWidth: l,
                scrollHeight: s,
                clientWidth: n,
                clientHeight: c
            } = e, i = l - n > 1, f = s - c > 1, v = i && r > 1, u = i && r + n < l - 1, w = f && t > 1, a = f && t + c < s - 1;
            o({
                overflowLeft: v,
                overflowRight: u,
                overflowTop: w,
                overflowBottom: a,
                overflowX: v && u,
                overflowY: w && a,
                isOverflowing: i || f
            })
        };
        t();
        const l = new ResizeObserver(() => t());
        r.current && l.observe(r.current), e.addEventListener("scroll", t, {
            passive: !0
        });
        let s = null;
        return new MutationObserver(() => {
            null == s && (s = window.requestAnimationFrame(() => {
                s = null, t()
            }))
        }).observe(e, {
            subtree: !0,
            childList: !0,
            characterData: !0,
            attributes: !0
        }), () => {
            e.removeEventListener("scroll", t), l.disconnect()
        }
    }, []), {
        ref: r,
        ...e
    }
};
export {
    R as u
};