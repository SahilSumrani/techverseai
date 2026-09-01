import {
    r as s
} from "./index.CtKCFvq0.js";
const h = e => {
        if (!e) return {
            hasOverflowLeft: !1,
            hasOverflowRight: !1
        };
        return {
            hasOverflowLeft: !(0 === e.scrollLeft),
            hasOverflowRight: !(e.scrollLeft + e.clientWidth >= e.scrollWidth)
        }
    },
    v = () => {
        const [e, r] = s.useState({
            hasOverflowLeft: !1,
            hasOverflowRight: !1
        }), t = s.useRef(null), l = s.useCallback(e => {
            const {
                hasOverflowLeft: t,
                hasOverflowRight: s
            } = h(e);
            r({
                hasOverflowLeft: t,
                hasOverflowRight: s
            })
        }, []), f = s.useCallback(e => {
            const {
                hasOverflowLeft: t,
                hasOverflowRight: s
            } = h(e.currentTarget);
            r({
                hasOverflowLeft: t,
                hasOverflowRight: s
            })
        }, []);
        return s.useEffect(() => {
            const e = () => l(t.current);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, [l]), {
            hasOverflowLeft: e.hasOverflowLeft,
            hasOverflowRight: e.hasOverflowRight,
            scrollContainerRef: t,
            handleScroll: f
        }
    };
export {
    v as u
};