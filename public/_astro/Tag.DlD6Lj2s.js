import {
    j as r
} from "./jsx-runtime.u17CrQMm.js";
import {
    b as l,
    B as p,
    c
} from "./index.BwDjtkKo.js";
import "./index.CtKCFvq0.js";
const y = l("text-foreground elysia:font-normal flex w-fit items-center justify-center gap-2 rounded-full border font-semibold", {
        variants: {
            size: {
                lg: "text-bor-xs sm:text-bor-sm px-4 py-2 lg:px-6 lg:py-4",
                md: "text-bor-xs sm:text-bor-sm px-4 py-2",
                sm: "text-bor-xs sm:text-bor-sm px-3 py-1",
                xs: "text-bor-xs px-2 py-0.5"
            },
            uppercase: {
                true: "tracking-15 uppercase",
                false: ""
            },
            reverse: {
                true: "flex-row-reverse",
                false: "flex-row"
            },
            color: {
                primary: "bg-bor-primary text-background border-bor-primary",
                secondary: "bg-bor-secondary text-background border-bor-secondary",
                tertiary: "bg-bor-tertiary text-background border-bor-tertiary",
                light: "bg-bor-light text-bor-dark border-bor-light",
                dark: "bg-bor-dark text-bor-light border-bor-dark",
                background: "bg-background text-foreground border-background",
                foreground: "bg-foreground text-background border-foreground",
                neutral: "bg-bor-neutral text-background border-bor-neutral",
                surface: "bg-bor-surface text-foreground border-bor-surface",
                success: "bg-bor-success text-bor-dark border-bor-success",
                error: "bg-bor-error text-bor-dark border-bor-error"
            },
            variant: {
                fill: "backdrop-blur-sm",
                outline: "text-foreground bg-transparent"
            }
        },
        defaultVariants: {
            color: "neutral",
            variant: "fill",
            size: "md"
        }
    }),
    v = l("text-bor-sm", {
        variants: {
            variant: {
                fill: "text-current",
                outline: ""
            },
            color: {
                primary: "",
                secondary: "",
                tertiary: "",
                light: "",
                dark: "",
                background: "",
                foreground: "",
                neutral: "",
                surface: "",
                success: "",
                error: ""
            }
        },
        compoundVariants: [{
            variant: "outline",
            color: "primary",
            className: "text-bor-primary"
        }, {
            variant: "outline",
            color: "secondary",
            className: "text-bor-secondary"
        }, {
            variant: "outline",
            color: "tertiary",
            className: "text-bor-tertiary"
        }, {
            variant: "outline",
            color: "light",
            className: "text-bor-light"
        }, {
            variant: "outline",
            color: "dark",
            className: "text-bor-dark"
        }, {
            variant: "outline",
            color: "background",
            className: "text-foreground"
        }, {
            variant: "outline",
            color: "foreground",
            className: "text-foreground"
        }, {
            variant: "outline",
            color: "neutral",
            className: "text-bor-neutral"
        }, {
            variant: "outline",
            color: "success",
            className: "text-bor-success"
        }, {
            variant: "outline",
            color: "error",
            className: "text-bor-error"
        }]
    }),
    k = ({
        href: e,
        children: o,
        target: t
    }) => e ? r.jsx("a", {
        href: e,
        target: t,
        children: o
    }) : r.jsx(r.Fragment, {
        children: o
    }),
    w = e => {
        const {
            label: o,
            size: t = "md",
            variant: a = "fill",
            color: s = "background",
            uppercase: n = !0,
            iconPick: l,
            reverse: i = !1,
            className: b,
            iconClassName: u,
            href: d,
            target: g,
            children: x,
            ...m
        } = e;
        return r.jsx(k, {
            href: d,
            target: g,
            children: r.jsxs(p, {
                className: c(y({
                    size: t,
                    variant: a,
                    uppercase: n,
                    reverse: i,
                    color: s
                }), b),
                ...m,
                children: [o || x, l ? .svg && r.jsx("span", {
                    className: c(v({
                        variant: a,
                        color: s
                    }), u),
                    dangerouslySetInnerHTML: {
                        __html: l.svg
                    }
                })]
            })
        })
    };
export {
    w as T
};