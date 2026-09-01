import {
    r as d
} from "./index.CtKCFvq0.js";
import {
    a as u,
    u as m,
    b as l
} from "./atom.DydmvXa7.js";
import {
    g as w,
    d as o
} from "./index.BwDjtkKo.js";
import "./jsx-runtime.u17CrQMm.js";
const s = () => {
        const e = typeof window < "u" ? window.innerWidth : 0,
            n = typeof window < "u" ? window.innerHeight : 0,
            i = w(e),
            t = i === o.SM,
            r = i === o.MD;
        return {
            isMobile: t,
            isTablet: r,
            isDesktop: i === o.LG || i === o.XL,
            isCompact: t || r,
            currentBreakpoint: i,
            screenWidth: e,
            screenHeight: n
        }
    },
    a = u(s()),
    g = () => {
        const e = l(a);
        return d.useLayoutEffect(() => {
            let n = null;
            const i = () => {
                null === n && (n = window.requestAnimationFrame(() => {
                    e(s), n = null
                }))
            };
            return i(), window.addEventListener("resize", i), () => {
                null !== n && window.cancelAnimationFrame(n), window.removeEventListener("resize", i)
            }
        }, []), null
    },
    L = () => m(a);
export {
    g as ScreenSizeProvider, L as useScreenSize
};