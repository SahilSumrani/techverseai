import {
    j as t
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as j
} from "./index.CtKCFvq0.js";
import {
    c as n,
    b as l,
    n as w,
    a as k
} from "./index.BwDjtkKo.js";
import {
    X as m
} from "./X.esm.ClQ3KrmU.js";
const y = ({
        seconds: e = 5,
        onClick: s,
        className: a
    }) => {
        const r = 32 * Math.PI;
        return t.jsx("div", {
            className: "cursor-pointer",
            onClick: s,
            "data-testid": "countdown-timer",
            children: t.jsxs("div", {
                className: "relative m-auto flex h-8 w-8 items-center justify-center",
                children: [t.jsx(m, {
                    weight: "bold",
                    className: n("text-dark dark:text-light max-[1024px]:text-light", a)
                }), t.jsx("svg", {
                    className: "absolute top-0 left-0 h-full w-full overflow-visible",
                    style: {
                        transform: "rotateY(-180deg) rotateZ(-90deg)"
                    },
                    children: t.jsx("circle", {
                        strokeDasharray: r,
                        r: 16,
                        cx: 16,
                        cy: 16,
                        fill: "none",
                        strokeLinecap: "round",
                        strokeWidth: 2,
                        className: "dark:stroke-white-100 stroke-black-500 max-[1024px]:stroke-white-100",
                        onAnimationEnd: s,
                        style: {
                            animation: `countdownAnimation ${e}s linear forwards`
                        }
                    })
                })]
            })
        })
    },
    N = l(["bg-bor-tertiary relative flex h-full w-full items-center justify-between rounded-lg font-normal max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:gap-2"], {
        variants: {
            type: {
                success: "bg-bor-success-400",
                error: "bg-bor-error-500 dark",
                assetInternal: "bg-bor-tertiary dark",
                assetExternal: "bg-bor-tertiary dark"
            }
        }
    }),
    C = l(["cursor-pointer"], {
        variants: {
            type: {
                success: "text-dark",
                error: "text-light",
                assetInternal: "text-light",
                assetExternal: "text-light"
            }
        }
    }),
    u = l("flex-shrink-1 text-base", {
        variants: {
            type: {
                success: "text-dark",
                error: "text-light max-w-[80%]",
                assetInternal: "text-light max-w-[700px]",
                assetExternal: "text-light max-w-[700px]"
            }
        }
    }),
    B = e => {
        const {
            toastId: s,
            config: a
        } = e, {
            asset: r,
            ctaText: l,
            onAssetClose: i,
            onCtaClick: o,
            renderCta: x,
            text: c,
            type: d,
            countDownDuration: p = 5
        } = a, h = "success" === d || "error" === d, f = "assetExternal" === d && !!r, b = "assetInternal" === d && !!r, g = j.useCallback(() => w.remove(s), [s]);
        return t.jsxs("div", {
            className: "relative flex w-full items-center gap-6 md:w-auto",
            children: [f && t.jsx("div", {
                className: "absolute -left-[12%] h-18 w-18 max-[1024px]:hidden",
                "data-testid": "external-asset",
                children: r
            }), t.jsxs("div", {
                className: n(N({
                    type: d
                })),
                children: [t.jsx(E, {
                    asset: r,
                    isExternal: f,
                    isInternal: b
                }), t.jsxs("div", {
                    className: "flex w-full flex-col items-start justify-between gap-2 p-3 max-[1024px]:pr-10 md:flex-row md:items-center md:gap-8",
                    children: [t.jsx("div", {
                        "data-testid": "body-text",
                        className: n(u({
                            type: d
                        })),
                        children: c
                    }), t.jsxs("div", {
                        className: "flex items-center gap-8",
                        children: [t.jsx(I, {
                            type: d,
                            ctaText: l,
                            onCtaClick: o,
                            renderCta: x
                        }), t.jsx("div", {
                            className: "flex max-[1024px]:absolute max-[1024px]:top-1 max-[1024px]:right-1",
                            children: h ? t.jsx(y, {
                                className: n(C({
                                    type: d
                                })),
                                onClick: g,
                                seconds: p,
                                type: d
                            }) : t.jsx(k, {
                                onClick: () => {
                                    i ? .(), g()
                                },
                                variant: "iconGhost",
                                size: "base",
                                icon: t.jsx(m, {
                                    weight: "bold"
                                }),
                                "data-testid": "close-button"
                            })
                        })]
                    })]
                })]
            })]
        })
    },
    E = ({
        asset: e,
        isExternal: s,
        isInternal: a
    }) => s ? t.jsx("div", {
        className: "bg-bor-tertiary dark absolute top-[50%] left-[-10px] h-4 w-4 origin-top-left -rotate-45 rounded max-[1024px]:hidden",
        "data-testid": "external-asset-arrow"
    }) : a ? t.jsx("div", {
        className: "max-h-full object-contain max-[1024px]:hidden",
        "data-testid": "internal-asset",
        children: e
    }) : null,
    I = ({
        ctaText: e,
        onCtaClick: s,
        renderCta: a,
        type: r
    }) => a || e ? a ? a() : t.jsx("span", {
        className: n(u({
            type: r,
            className: "cursor-pointer font-semibold"
        })),
        onClick: s,
        "data-testid": "cta-text",
        children: e
    }) : null;
export {
    B as T
};