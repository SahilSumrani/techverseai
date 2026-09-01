import {
    j as e
} from "./jsx-runtime.u17CrQMm.js";
import {
    c as a
} from "./index.BwDjtkKo.js";
import "./index.CtKCFvq0.js";
import {
    A as c
} from "./AnimatedMultiRowCarousel.D753SXxR.js";
import {
    C as d
} from "./CompanyLogo.CiEGVb1r.js";
const j = o => {
    const {
        reverse: s,
        logoZoom: r,
        className: m,
        companies: t,
        compact: i = !1,
        isColored: l = !1,
        rows: n,
        marqueeProps: p
    } = o;
    return e.jsx(c, {
        items: t,
        className: a("gradient-mask-horizontal-60 gap-8 md:gap-12", i && "gradient-mask-horizontal-96"),
        containerClassName: m,
        reverse: s,
        rows: n,
        marqueeProps: {
            slowdownOnHover: !1,
            ...p
        },
        renderItem: o => e.jsx("div", {
            className: a("flex h-full flex-row items-center gap-12 self-center px-6 md:gap-20 md:px-10 lg:gap-24 lg:px-12", i && "lg:gap-12 lg:px-6"),
            children: e.jsx(d, {
                company: o,
                zoom: r,
                isColored: l
            })
        }),
        itemClassName: "h-full",
        hideOnEmpty: !1
    })
};
export {
    j as AnimatedLogoSalad
};