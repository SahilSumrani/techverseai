import {
    j as e
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as d
} from "./index.CtKCFvq0.js";
import {
    T as x,
    c as m,
    B as u
} from "./index.BwDjtkKo.js";
import {
    M as g,
    P as j
} from "./Plus.esm.D8cxmWgt.js";
const h = s => {
        const {
            item: t,
            isOpen: n,
            expandedIcon: l = g,
            collapsedIcon: a = j,
            onClick: i,
            className: c
        } = s, o = d.useRef(null);
        return e.jsx("div", {
            className: m("border-foreground/[0.15] overflow-hidden border-b last:border-b-0", "pb-4 md:pb-8", c),
            children: "object" != typeof t || "type" in t ? e.jsx(e.Fragment, {
                children: t
            }) : e.jsxs(e.Fragment, {
                children: [e.jsxs("button", {
                    onClick: i,
                    className: "flex w-full items-center justify-between gap-6 text-left lg:gap-12",
                    children: [e.jsx("span", {
                        className: "lg:text-bor-xl font-medium",
                        children: t.title
                    }), n ? e.jsx(l, {
                        className: "lg:size-6",
                        size: 16
                    }) : e.jsx(a, {
                        className: "lg:size-6",
                        size: 16
                    })]
                }), e.jsx("div", {
                    ref: o,
                    className: "overflow-hidden transition-all duration-300 ease-in-out",
                    style: {
                        height: n ? `${o.current?.scrollHeight}px` : "0",
                        opacity: n ? 1 : 0
                    },
                    children: e.jsx("div", {
                        className: "pt-2 md:pt-4",
                        children: "string" == typeof t.content ? e.jsx(x, {
                            children: t.content
                        }) : t.content
                    })
                })]
            })
        })
    },
    I = ({
        items: s,
        className: t,
        itemClassName: n,
        accordion: l = !1,
        expandedIcon: a,
        collapsedIcon: i
    }) => {
        const [c, o] = d.useState([]);
        return e.jsx(u, {
            className: m("flex flex-col gap-4 md:gap-8", t),
            children: s.map((s, t) => e.jsx(h, {
                item: s,
                expandedIcon: a,
                collapsedIcon: i,
                isOpen: c.includes(t),
                onClick: () => (e => {
                    l ? o(c.includes(e) ? [] : [e]) : c.includes(e) ? o(c.filter(s => s !== e)) : o([...c, e])
                })(t),
                className: n
            }, t))
        })
    };
export {
    I as C
};