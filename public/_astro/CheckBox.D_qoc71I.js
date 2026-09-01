import {
    j as e
} from "./jsx-runtime.u17CrQMm.js";
import {
    c as t,
    t as h
} from "./index.BwDjtkKo.js";
import "./index.CtKCFvq0.js";
const u = r => {
        const {
            className: a,
            variant: s,
            size: l,
            hasError: o = !1,
            value: c,
            ...n
        } = r;
        return e.jsx("input", {
            className: t(h({
                variant: s,
                size: l,
                hasError: o,
                hasValue: !!c
            }), a),
            value: c,
            ...n,
            type: "tel"
        })
    },
    k = r => {
        const {
            label: a,
            id: s,
            value: l,
            disabled: o = !1,
            name: c = "checkbox",
            ...n
        } = r, i = s || c, d = o ? "cursor-not-allowed" : "cursor-pointer";
        return e.jsxs("div", {
            className: t("inline-flex items-center", o && "opacity-50"),
            children: [e.jsxs("label", {
                className: t("relative flex items-center", d),
                htmlFor: i,
                children: [e.jsx("input", { ...n,
                    checked: l,
                    type: "checkbox",
                    className: t("dark:border-white-200 border-white-600 checked:border-black-500 checked:bg-black-500 peer h-5 w-5 appearance-none rounded border transition-all dark:checked:border-green-500 dark:checked:bg-green-500", d),
                    id: i,
                    disabled: o
                }), e.jsx("span", {
                    className: "dark:text-black-500 text-white-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 peer-checked:opacity-100",
                    children: e.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-3.5 w-3.5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        children: e.jsx("path", {
                            fillRule: "evenodd",
                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                            clipRule: "evenodd"
                        })
                    })
                })]
            }), a ? e.jsx("label", {
                className: t("text-foreground/50 select-none pl-3 text-sm font-normal", d),
                htmlFor: i,
                children: a
            }) : null]
        })
    };
export {
    k as C, u as P
};