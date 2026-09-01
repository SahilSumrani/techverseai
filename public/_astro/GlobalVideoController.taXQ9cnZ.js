import {
    r as l
} from "./index.CtKCFvq0.js";
import {
    i as B
} from "./isChromatic.zJLyRbR3.js";
import {
    i as S,
    j as n
} from "./index.BwDjtkKo.js";
import "./jsx-runtime.u17CrQMm.js";
import {
    useScreenSize as h
} from "./ScreenSizeProvider.i-8ZMHs-.js";
import {
    k as v
} from "./keyBy.CJDoTgza.js";
const C = () => {
    const {
        currentBreakpoint: r
    } = h(), e = l.useRef(null);
    return l.useEffect(() => {
        if (!r || B()) return;
        const t = e.current;
        if (e.current = r, !t || t === r) return;
        const o = Array.from(document.querySelectorAll("video"));
        for (const e of o) {
            const t = Array.from(e.querySelectorAll("source[data-breakpoint]"));
            if (t.length <= 1) continue;
            const o = v(t, r => r.dataset.breakpoint),
                s = [...S].sort((r, e) => n[e] - n[r]);
            let a;
            for (const e of s)
                if (n[e] <= n[r] && o[e]) {
                    a = o[e];
                    break
                }
            if (!a && t.length > 0 && (a = t.reduce((r, e) => (n[r.dataset.breakpoint] || 1 / 0) < (n[e.dataset.breakpoint] || 1 / 0) ? r : e)), !a || !a.src) continue;
            const i = e.currentSrc,
                c = a.src,
                l = a.dataset.poster;
            if (l && (e.poster = l), i !== c) {
                const r = !e.paused;
                e.src = c, e.load(), r && e.play().catch(r => {
                    console.warn("Failed to resume video playback:", r)
                })
            }
        }
    }, [r]), null
};
export {
    C as GlobalVideoController
};