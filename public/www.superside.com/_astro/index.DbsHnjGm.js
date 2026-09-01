import {
    j as w
} from "./jsx-runtime.u17CrQMm.js";
import {
    m as b
} from "./react.BJ61_sDN.js";
import {
    c as g
} from "./index.BwDjtkKo.js";
import {
    r as d
} from "./index.CtKCFvq0.js";
import {
    C as v
} from "./Container.Ce-IQkgp.js";
import {
    u as M
} from "./useHeader.UpZBR8MQ.js";
const S = 100,
    R = i => {
        const {
            threshold: e = .1,
            rootMargin: c
        } = {}, [a, l] = d.useState(!1), t = d.useRef(null), s = d.useRef(null);
        return d.useEffect(() => {
            let r, n;
            return t.current && s.current && typeof IntersectionObserver == "function" && (r = s.current, n = new IntersectionObserver(([o]) => {
                l(o.intersectionRatio < 1 && o.boundingClientRect.y < S)
            }, {
                threshold: e,
                rootMargin: c
            }), n.observe(r)), () => {
                r && n ? .unobserve(r)
            }
        }, [e, c]), {
            isPinned: a,
            helperRef: s,
            wrapperRef: t
        }
    },
    H = i => {
        const {
            initialMood: e,
            enabled: c = !1
        } = i, {
            header: a,
            headerHeight: l
        } = M(), [t, s] = d.useState(e), r = d.useCallback(() => {
            const n = Math.max(0, Math.min(window.innerHeight - 1, l + 1)),
                o = E(n);
            o && o !== t && s(o)
        }, [t]);
        return d.useEffect(() => {
            if (!c) return;
            const n = x(r),
                o = n,
                f = n;
            window.addEventListener("scroll", o, {
                passive: !0
            }), window.addEventListener("resize", f);
            const u = new ResizeObserver(n);
            return a && u.observe(a), r(), () => {
                window.removeEventListener("scroll", o), window.removeEventListener("resize", f), u.disconnect()
            }
        }, [c, r, a]), {
            currentSectionMood: t
        }
    },
    x = i => {
        let e = !1;
        return () => {
            e || (e = !0, requestAnimationFrame(() => {
                i(), e = !1
            }))
        }
    },
    E = i => {
        const e = Math.max(0, Math.min(window.innerWidth - 1, Math.floor(window.innerWidth / 2))),
            c = document.elementsFromPoint(e, Math.max(0, Math.min(window.innerHeight - 1, i)));
        if (!c.length) return;
        for (const l of c) {
            const t = l.closest ? .("section[data-mood]");
            if (!t) continue;
            const s = t.getBoundingClientRect(),
                r = s.left <= e && s.right >= e,
                n = s.top <= i && s.bottom >= i;
            if (r && n) {
                const o = t.getAttribute("data-mood");
                if (o) return o
            }
        }
        const a = document.querySelectorAll("section[data-mood]");
        for (const l of a) {
            const t = l.getBoundingClientRect(),
                s = t.left <= e && t.right >= e,
                r = t.top <= i && t.bottom >= i;
            if (s && r) {
                const n = l.getAttribute("data-mood");
                if (n) return n
            }
        }
    },
    k = (i = {}) => {
        const {
            enabled: e = !1,
            minScrollForHide: c = 80,
            scrollDeltaTolerance: a = 10
        } = i, [l, t] = d.useState(!1), [s, r] = d.useState("none"), n = d.useRef(0), o = d.useRef(!1);
        return d.useEffect(() => {
            if (typeof window > "u" || !e) {
                t(!1), r("none");
                return
            }
            n.current = window.scrollY, o.current = !1;
            const f = () => {
                const u = window.scrollY;
                if (!o.current) {
                    o.current = !0, n.current = u;
                    return
                }
                const m = n.current,
                    p = u - m;
                if (n.current = u, u <= 0) {
                    t(!1), r("none");
                    return
                }
                if (Math.abs(p) < a) return;
                const h = p > 0;
                r(h ? "down" : "up"), h && u > c ? t(!0) : t(!1)
            };
            return window.addEventListener("scroll", f, {
                passive: !0
            }), () => {
                window.removeEventListener("scroll", f)
            }
        }, [e, c, a]), {
            isHidden: l,
            scrollDirection: s
        }
    },
    C = b.create(v),
    j = i => {
        const {
            position: e = "sticky",
            mood: c,
            isMoodDetectionEnabled: a = !1,
            isHideOnScrollEnabled: l,
            children: t
        } = i, {
            isPinned: s,
            wrapperRef: r,
            helperRef: n
        } = R(), o = e === "fixed", f = e === "sticky", {
            currentSectionMood: u
        } = H({
            initialMood: c,
            enabled: a
        }), m = l && (f || o), {
            isHidden: p
        } = k({
            enabled: m
        });
        return w.jsxs(w.Fragment, {
            children: [w.jsx("div", {
                id: "top",
                ref: n
            }), w.jsx(C, {
                ref: r,
                paddingTop: "none",
                paddingBottom: "none",
                animate: {
                    y: p ? "-100%" : 0
                },
                mood: s ? u : c,
                as: "header",
                "data-hide-on-scroll": m,
                className: g("h-header-height bg-background z-header relative top-0 left-0 flex w-full overflow-visible transition-colors duration-200 ease-in-out", !s && o && "bg-transparent"),
                style: {
                    position: e === "static" ? "relative" : e
                },
                transition: {
                    duration: .4,
                    ease: [.16, 1, .3, 1]
                },
                contentClassName: "flex-row justify-between static h-full gap-2",
                children: t
            })]
        })
    },
    z = {},
    F = {};
export {
    z as HeaderDesktopNavigationMenu, F as HeaderMobileNavigationMenu, j as HeaderWrapper
};