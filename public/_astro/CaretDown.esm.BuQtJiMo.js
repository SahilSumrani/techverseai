import {
    r as l,
    R as e
} from "./index.CtKCFvq0.js";
import {
    I as a,
    r as i
} from "./index.BwDjtkKo.js";
var t = new Map;
t.set("bold", function(t) {
    return e.createElement(e.Fragment, null, e.createElement("polyline", {
        points: "208 96 128 176 48 96",
        fill: "none",
        stroke: t,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }))
}), t.set("duotone", function(t) {
    return e.createElement(e.Fragment, null, e.createElement("polygon", {
        points: "208 96 128 176 48 96 208 96",
        opacity: "0.2"
    }), e.createElement("polygon", {
        points: "208 96 128 176 48 96 208 96",
        fill: "none",
        stroke: t,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
}), t.set("fill", function() {
    return e.createElement(e.Fragment, null, e.createElement("path", {
        d: "M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"
    }))
}), t.set("light", function(t) {
    return e.createElement(e.Fragment, null, e.createElement("polyline", {
        points: "208 96 128 176 48 96",
        fill: "none",
        stroke: t,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }))
}), t.set("thin", function(t) {
    return e.createElement(e.Fragment, null, e.createElement("polyline", {
        points: "208 96 128 176 48 96",
        fill: "none",
        stroke: t,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }))
}), t.set("regular", function(t) {
    return e.createElement(e.Fragment, null, e.createElement("polyline", {
        points: "208 96 128 176 48 96",
        fill: "none",
        stroke: t,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }))
});
var s = function(e, n) {
        return i(e, n, t)
    },
    u = l.forwardRef(function(t, n) {
        return e.createElement(a, Object.assign({
            ref: n
        }, t, {
            renderPath: s
        }))
    });
u.displayName = "CaretDown";
export {
    u as C
};