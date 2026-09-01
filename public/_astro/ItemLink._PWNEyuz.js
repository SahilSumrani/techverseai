import {
    j as s
} from "./jsx-runtime.u17CrQMm.js";
import {
    I as x,
    r as L,
    c as u
} from "./index.BwDjtkKo.js";
import {
    r as b,
    R as n
} from "./index.CtKCFvq0.js";
var i = new Map;
i.set("bold", function(e) {
    return n.createElement(n.Fragment, null, n.createElement("line", {
        x1: "64",
        y1: "192",
        x2: "192",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), n.createElement("polyline", {
        points: "88 64 192 64 192 168",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }))
}), i.set("duotone", function(e) {
    return n.createElement(n.Fragment, null, n.createElement("line", {
        x1: "64",
        y1: "192",
        x2: "192",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), n.createElement("polyline", {
        points: "88 64 192 64 192 168",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
}), i.set("fill", function() {
    return n.createElement(n.Fragment, null, n.createElement("path", {
        d: "M200,64V168a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3L140,127.3,69.7,197.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L128.7,116,82.3,69.7a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"
    }))
}), i.set("light", function(e) {
    return n.createElement(n.Fragment, null, n.createElement("line", {
        x1: "64",
        y1: "192",
        x2: "192",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), n.createElement("polyline", {
        points: "88 64 192 64 192 168",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }))
}), i.set("thin", function(e) {
    return n.createElement(n.Fragment, null, n.createElement("line", {
        x1: "64",
        y1: "192",
        x2: "192",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), n.createElement("polyline", {
        points: "88 64 192 64 192 168",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }))
}), i.set("regular", function(e) {
    return n.createElement(n.Fragment, null, n.createElement("line", {
        x1: "64",
        y1: "192",
        x2: "192",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), n.createElement("polyline", {
        points: "88 64 192 64 192 168",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
});
var y = function(e, n) {
        return L(e, n, i)
    },
    m = b.forwardRef(function(e, t) {
        return n.createElement(x, Object.assign({
            ref: t
        }, e, {
            renderPath: y
        }))
    });

function N(e, n, t) {
    var r = -1,
        o = e.length;
    n < 0 && (n = -n > o ? 0 : o + n), (t = t > o ? o : t) < 0 && (t += o), o = n > t ? 0 : t - n >>> 0, n >>>= 0;
    for (var i = Array(o); ++r < o;) i[r] = e[r + n];
    return i
}
m.displayName = "ArrowUpRight";
const E = e => {
        const {
            className: n,
            ...t
        } = e;
        return s.jsxs("span", {
            "aria-hidden": "true",
            className: u("relative inline-block", n),
            ...t,
            children: [s.jsx(m, {
                size: "100%",
                className: "animate-top-right-center group-hover/link:animate-move-top-right absolute top-0 inline"
            }), s.jsx(m, {
                size: "100%",
                className: "animate-move-bottom-left group-hover/link:animate-bottom-left-center absolute top-0 right-0"
            })]
        })
    },
    A = e => {
        const {
            text: n,
            url: t,
            className: r,
            clickArea: o,
            arrowClassName: i,
            hideIcon: l,
            underline: a = !0,
            underlineOffset: c = "1.1em",
            level: m = 1,
            children: d,
            ...k
        } = e;
        if (!t && !n && !d) return null;
        const p = t ? "a" : "span";
        return s.jsxs(p, {
            href: t || void 0,
            className: u("group/link", r, t ? o ? `before:content-empty cursor-pointer before:absolute before:inset-0 before:z-${m}` : `relative z-${m}` : void 0),
            ...k,
            children: [a ? s.jsx("span", {
                style: {
                    "--bg-y-position": c
                },
                className: u("bg-linear-to-b from-current to-current bg-size-[0_1px] bg-[0%_var(--bg-y-position)] bg-no-repeat transition-all duration-500", a && "group-hover/link:bg-size-[100%_1px]"),
                children: n || d
            }) : n || d, " ", l ? null : s.jsx(E, {
                className: u("size-4 align-middle", i)
            })]
        })
    };
export {
    E as A, A as I, m as a, N as b
};