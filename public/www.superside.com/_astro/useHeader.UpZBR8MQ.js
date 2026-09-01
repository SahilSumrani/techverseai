import {
    r as e
} from "./index.CtKCFvq0.js";
const O = () => {
    const [t, s] = e.useState(null), [i, o] = e.useState(0), [r, a] = e.useState(null), [n, d] = e.useState(!1), u = e.useMemo(() => "fixed" === t, [t]), c = e.useMemo(() => "sticky" === t, [t]), h = e.useMemo(() => "static" === t, [t]), m = e.useMemo(() => n ? 0 : c || u ? i : 0, [c, u, i, n]);
    return e.useEffect(() => {
        const e = document.body,
            t = document.querySelector("header"),
            i = () => {
                t && o(t.offsetHeight)
            },
            r = () => {
                s(e.getAttribute("data-header-position"))
            },
            n = () => {
                t && d("true" === t.dataset.hideOnScroll)
            };
        a(t), i(), r(), n();
        const u = new MutationObserver(() => {
            r(), i(), n()
        });
        return u.observe(e, {
            attributes: !0,
            attributeFilter: ["data-header-position"]
        }), window.addEventListener("resize", i), () => {
            u.disconnect(), window.removeEventListener("resize", i)
        }
    }, []), {
        header: r,
        headerOffset: m,
        headerHeight: i,
        isHeaderPositionFixed: u,
        isHeaderPositionSticky: c,
        isHeaderPositionStatic: h
    }
};
export {
    O as u
};