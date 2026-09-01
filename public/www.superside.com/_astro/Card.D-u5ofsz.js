import {
    j as e
} from "./jsx-runtime.u17CrQMm.js";
import {
    c as o
} from "./index.BwDjtkKo.js";
import "./index.CtKCFvq0.js";
import {
    D as s
} from "./Document.Bap7vwYV.js";
const m = t => {
    const {
        document: l,
        className: r
    } = t;
    return e.jsx(s.provider, {
        document: l,
        children: e.jsxs(s.wrapper, {
            mood: "dark",
            className: o("relative h-[200px] overflow-hidden rounded-lg bg-transparent lg:aspect-[0.68] lg:h-auto", r),
            children: [e.jsx(s.asset, {
                hoverEffects: ["zoom-in"],
                className: "absolute inset-0 -z-2 h-full w-full",
                width: 600
            }), e.jsx(s.logo, {
                className: "absolute top-0 left-0 -z-1 flex w-full scale-[0.8] items-center justify-center pt-4 pb-10 lg:scale-[0.9] lg:pt-6"
            }), e.jsx(s.clickHandler, {
                clickArea: !0,
                underline: !1,
                hideIcon: !0
            })]
        })
    })
};
export {
    m as C
};