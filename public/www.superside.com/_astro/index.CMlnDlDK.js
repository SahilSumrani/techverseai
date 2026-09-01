import {
    j as t
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as x
} from "./index.CtKCFvq0.js";
import {
    a as f
} from "./index.BwDjtkKo.js";
import {
    M as j
} from "./Modal.C_1sndJe.js";
import {
    H as h
} from "./HiddenButton.BOrEy_ZK.js";
const B = ({
        label: e,
        loggedInLabel: n
    }) => n ? t.jsxs(t.Fragment, {
        children: [t.jsx("span", {
            "data-personalized-button-label": "default",
            children: e
        }), t.jsx("span", {
            "data-personalized-button-label": "logged-in",
            children: n
        })]
    }) : e,
    H = e => {
        const {
            children: n,
            buttonProps: s,
            modalProps: o,
            onOpen: l
        } = e, [a, r] = x.useState(!1), {
            isHiddenButton: d,
            label: i,
            loggedInLabel: m,
            ...p
        } = s || {}, b = t.jsx(B, {
            label: i,
            loggedInLabel: m
        }), g = "string" == typeof i ? i : "Get started", c = () => {
            l ? .(), r(!0)
        };
        return t.jsxs(t.Fragment, {
            children: [d ? t.jsx(h, {
                label: g,
                onClick: c
            }) : t.jsx(f, { ...p,
                label: b,
                onClick: c
            }), t.jsx(j, { ...o,
                open: a,
                onClose: () => r(!1),
                children: n
            })]
        })
    };
export {
    H as M, B as P
};