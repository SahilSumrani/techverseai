import {
    j as p
} from "./jsx-runtime.u17CrQMm.js";
import {
    c as t,
    b as x
} from "./index.BwDjtkKo.js";
import "./index.CtKCFvq0.js";
import {
    B as g
} from "./Box.Dqp3SRBV.js";
const s = x(["w-full transition-colors"], {
        variants: {
            paddingTop: {
                none: "pt-0",
                small: "pt-2 md:pt-2 lg:pt-4",
                medium: "pt-4 md:pt-4 lg:pt-6",
                large: "pt-6 md:pt-6 lg:pt-8",
                xlarge: "pt-8 md:pt-10 lg:pt-12",
                xxlarge: "pt-10 md:pt-12 lg:pt-16",
                xxxlarge: "pt-11 md:pt-14 lg:pt-[88px]",
                xxxxlarge: "pt-12 md:pt-16 lg:pt-24",
                xxxxxlarge: "pt-16 md:pt-20 lg:pt-32",
                xxxxxxlarge: "pt-20 md:pt-28 lg:pt-52"
            }
        },
        defaultVariants: {
            paddingTop: "xxxlarge"
        }
    }),
    i = x("", {
        variants: {
            paddingBottom: {
                none: "pb-0",
                small: "pb-2 md:pb-2 lg:pb-4",
                medium: "pb-4 md:pb-4 lg:pb-6",
                large: "pb-6 md:pb-6 lg:pb-8",
                xlarge: "pb-8 md:pb-10 lg:pb-12",
                xxlarge: "pb-10 md:pb-12 lg:pb-16",
                xxxlarge: "pb-11 md:pb-14 lg:pb-[88px]",
                xxxxlarge: "pb-12 md:pb-16 lg:pb-24",
                xxxxxlarge: "pb-16 md:pb-20 lg:pb-32",
                xxxxxxlarge: "pb-20 md:pb-28 lg:pb-52"
            }
        },
        defaultVariants: {
            paddingBottom: "xxxlarge"
        }
    }),
    v = x => {
        const {
            paddingBottom: l,
            paddingTop: a,
            className: d,
            contentClassName: e,
            children: m,
            fullBleed: r,
            ...o
        } = x;
        return p.jsx(g, { ...o,
            className: t("overflow-hidden", d),
            children: p.jsx("div", {
                className: t("h-full w-full", !r && "max-w-layout mx-auto"),
                children: p.jsx("div", {
                    className: t("flex flex-[0_0_auto] flex-col", s({
                        paddingTop: a
                    }), i({
                        paddingBottom: l
                    }), e, !r && "mx-container-overflow max-w-container"),
                    children: m
                })
            })
        })
    };
export {
    v as C
};