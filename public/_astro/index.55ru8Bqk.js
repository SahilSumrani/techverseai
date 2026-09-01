import {
    j as l
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as p
} from "./index.CtKCFvq0.js";
import {
    B as d,
    c as n
} from "./index.BwDjtkKo.js";
import {
    M as f
} from "./Marquee.EiXXesq1.js";
import {
    C as h
} from "./Card.D-u5ofsz.js";
import {
    useScreenSize as g
} from "./ScreenSizeProvider.i-8ZMHs-.js";
import {
    D as t
} from "./Document.Bap7vwYV.js";
const w = (l, e) => {
        if (e <= 0) return [];
        if (1 === e) return [l];
        if (0 === l.length) return Array(e).fill([]);
        const s = l.length,
            a = Math.floor(s / e),
            r = s % e,
            t = Array(e).fill(a).map((l, e) => e < r ? l + 1 : l),
            i = [];
        let n = 0;
        return t.forEach(e => {
            i.push(l.slice(n, n + e)), n += e
        }), i
    },
    j = (l, e) => l.cardShape ? ? (e % 2 == 0 ? "square" : "tall"),
    M = e => {
        const {
            items: s
        } = e, {
            isDesktop: a
        } = g(), r = p.useMemo(() => s ? w(s, a ? 3 : 2) : [], [s, a]);
        return l.jsx("div", {
            className: "-mx-container-overflow lg:absolute lg:top-0 lg:right-0 lg:ml-0 lg:h-full lg:w-1/2 lg:pr-8 xl:pr-10",
            children: l.jsx(d, {
                className: n("md:gradient-mask-horizontal-60 lg:gradient-mask-vertical-50 gap-4 lg:h-full lg:w-full lg:flex-row"),
                children: r.map((e, s) => l.jsx(f, {
                    repeat: 1,
                    baseVelocity: .25,
                    direction: s % 2 == 0 ? a ? "ttb" : "rtl" : a ? "btt" : "ltr",
                    className: "lg:flex-1",
                    children: e.map((e, s) => {
                        const a = j(e, s);
                        return l.jsx("div", {
                            className: "w-[156px] pr-4 lg:w-full lg:pr-0 lg:pb-4",
                            children: l.jsx(h, {
                                document: e,
                                className: n("square" === a && "lg:aspect-[0.9067]")
                            })
                        }, s)
                    })
                }, `${a?"desktop":"not-desktop"}-${s}`))
            })
        })
    },
    N = e => {
        const {
            document: s,
            className: a
        } = e;
        return l.jsx(t.provider, {
            document: s,
            children: l.jsxs(t.wrapper, {
                className: n("flex w-full flex-col gap-4", a),
                children: [l.jsx(t.logo, {
                    className: "order-3 md:order-[unset]"
                }), l.jsxs("div", {
                    className: "relative",
                    children: [l.jsx(t.asset, {
                        className: "aspect-[0.88] h-auto overflow-hidden"
                    }), l.jsx(t.icon, {
                        className: "absolute top-1/2 left-1/2 size-8 -translate-1/2 md:size-10"
                    })]
                }), l.jsxs("div", {
                    className: "flex flex-col gap-1",
                    children: [l.jsxs("div", {
                        className: "flex flex-row items-center gap-3",
                        children: [l.jsx(t.title, {
                            level: "h6",
                            plainClassName: "font-serif",
                            children: ({
                                title: e
                            }) => l.jsx(t.clickHandler, {
                                clickArea: !0,
                                hideIcon: !0,
                                children: e
                            })
                        }), l.jsx(t.socialLinks, {
                            className: "basis-0",
                            linkClassName: "size-6"
                        })]
                    }), l.jsx(t.subtitle, {
                        className: "opacity-50",
                        size: "xs"
                    })]
                })]
            })
        })
    },
    A = e => {
        const {
            items: s,
            useStaticPeopleLayout: a = !1
        } = e, r = s.length > 4, t = () => s.map((e, t) => l.jsx(d, {
            className: n("w-full max-w-[160px] px-2 xl:max-w-[180px]", a && "lg:max-w-[160px] lg:px-0 xl:px-2", !r && "[&_div]:w-full!", 1 === s.length && "max-w-[320px]! md:mt-0!", 2 === s.length && "md:max-w-[270px] xl:max-w-[320px]", 3 === s.length && "md:mt-18 md:max-w-[218px] lg:max-w-[178px] xl:max-w-[240px]", t % 2 == 0 ? 3 === s.length ? "md:mt-0" : "md:mt-18" : ""),
            children: l.jsx(N, {
                document: e
            })
        }, e._id));
        return l.jsxs(l.Fragment, {
            children: [a ? l.jsx("div", {
                className: "hidden w-[688px] max-w-full flex-row items-start gap-4 lg:flex xl:hidden",
                children: t()
            }) : null, r ? l.jsx(f, {
                repeat: r ? 2 : 0,
                className: n("flex w-full max-w-full will-change-transform", r ? "lg:gradient-mask-horizontal-60 w-full" : "flex-col", a && "lg:hidden xl:flex"),
                children: r ? t() : l.jsx("div", {
                    className: n("flex w-full max-w-full will-change-transform", !r && "justify-center"),
                    children: t()
                })
            }) : l.jsx("div", {
                className: n("hide-scrollbar flex overflow-scroll md:justify-center", a && "lg:hidden xl:flex"),
                children: l.jsx("div", {
                    className: n("flex w-full flex-row md:justify-center", s.length < 3 && "justify-center"),
                    children: t()
                })
            })]
        })
    };
export {
    A as HorizontalCarousel, M as VerticalCarousel
};