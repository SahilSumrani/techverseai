import {
    j as f
} from "./jsx-runtime.u17CrQMm.js";
import {
    e as v
} from "./svg.DmmcXjWs.js";
import "./index.CtKCFvq0.js";
import {
    c as u
} from "./index.BwDjtkKo.js";
import {
    B as x
} from "./Box.Dqp3SRBV.js";
const r = 90,
    w = s => {
        const {
            aspectRatio: o
        } = v(s), t = 2600;
        let e, a;
        return o >= 2 ? (e = Math.sqrt(t * o), a = e / o) : o <= .5 ? (a = Math.sqrt(t / o), e = a * o) : (e = Math.sqrt(t * o), a = e / o, e > r && (e = r, a = e / o), a > r && (a = r, e = a * o)), {
            width: e,
            height: a
        }
    },
    $ = s => {
        const {
            company: o,
            className: t,
            zoom: r = {
                md: 90,
                sm: 80,
                lg: 100
            },
            isColored: e
        } = s, {
            title: a,
            logo: l
        } = o, {
            monochrome: m,
            colored: i
        } = l || {};
        if (!m && !i) return null;
        const g = e && i || m,
            {
                width: h,
                height: n
            } = w(g),
            c = g.replace(/<svg([^>]*)>/, (s, o) => `<svg ${o.replace(/\s*(id|style|class)="[^"]*"/g,"").trim()}>`).replace(/<\/svg>/g, "</svg>");
        return f.jsx(x, {
            as: "span",
            zoom: r,
            "aria-label": `${a} logo`,
            className: u("[&_svg]:h-[var(--logo-height)]! [&_svg]:max-h-full! [&_svg]:w-[var(--logo-width)]", t),
            style: {
                "--logo-width": `${h+2}px`,
                "--logo-height": `${n+2}px`
            },
            dangerouslySetInnerHTML: {
                __html: c
            }
        })
    };
export {
    $ as C
};