import {
    j as t
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as o
} from "./index.CtKCFvq0.js";
import {
    m as e
} from "./react.BJ61_sDN.js";
import {
    c as i
} from "./index.BwDjtkKo.js";
import {
    A as d
} from "./index.DxFyLVPS.js";
import {
    C as m
} from "./Container.Ce-IQkgp.js";
const g = a => {
    const {
        className: n,
        children: r
    } = a, [s, l] = o.useState(!1), c = o.useCallback(() => l(e => !e), [l]);
    return t.jsxs("div", {
        className: n,
        children: [t.jsxs(e.button, {
            initial: "inactive",
            animate: s ? "active" : "inactive",
            onClick: c,
            className: i("relative flex h-6 w-6 flex-col items-center justify-center gap-1 px-1 duration-300 ease-in-out"),
            children: [t.jsx(e.span, {
                variants: {
                    active: {
                        top: "50%",
                        y: "-50%",
                        rotate: 45
                    },
                    inactive: {
                        top: "30%",
                        y: "-50%",
                        rotate: 0
                    }
                },
                transition: {
                    bounce: 0
                },
                className: i("bg-bor-primary absolute h-[2px] w-full rounded")
            }), t.jsx(e.span, {
                variants: {
                    active: {
                        top: "50%",
                        y: "-50%",
                        rotate: -45
                    },
                    inactive: {
                        top: "70%",
                        y: "-50%",
                        rotate: 0
                    }
                },
                transition: {
                    bounce: 0
                },
                className: i("bg-bor-primary absolute h-[2px] w-full rounded")
            })]
        }), t.jsx(d, {
            children: s ? t.jsx(e.div, {
                transition: {
                    type: "spring",
                    duration: .5,
                    bounce: .1
                },
                initial: "hidden",
                exit: "hidden",
                animate: s ? "visible" : "hidden",
                variants: {
                    hidden: {
                        opacity: 0,
                        y: -10,
                        pointerEvents: "none"
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        pointerEvents: "auto"
                    }
                },
                className: "bg-bor-neutral-100 light text-foreground top-header-height absolute left-0 z-3 h-[calc(100svh-var(--header-height))] w-full overflow-auto",
                children: t.jsx(m, {
                    paddingBottom: "large",
                    paddingTop: "xlarge",
                    contentClassName: "text-left gap-4",
                    children: r
                })
            }) : null
        })]
    })
};
export {
    g as HeaderHamburgerMenu
};