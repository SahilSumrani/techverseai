const __vite__mapDeps = (e, s = __vite__mapDeps, r = s.f || (s.f = ["_astro/ChilipiperLoaderContent.C69fSM_k.js", "_astro/jsx-runtime.u17CrQMm.js", "_astro/react.BJ61_sDN.js", "_astro/index.CtKCFvq0.js", "_astro/index.BwDjtkKo.js", "_astro/index.yFPT4ZM_.js", "_astro/preload-helper.CVfkMyKi.js", "_astro/use-transform.DAUCFMwx.js", "_astro/use-in-view._CitLEGI.js"])) => e.map(e => r[e]);
import {
    _ as a
} from "./preload-helper.CVfkMyKi.js";
import {
    j as e
} from "./jsx-runtime.u17CrQMm.js";
import {
    r
} from "./index.CtKCFvq0.js";
import {
    u as s
} from "./atom.DydmvXa7.js";
import {
    c as n
} from "./chilipiperLoaderAtom.COAjogfy.js";
const p = r.lazy(() => a(() =>
        import ("./ChilipiperLoaderContent.C69fSM_k.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])).then(e => ({
        default: e.ChilipiperLoaderContent
    }))),
    m = () => e.jsx("div", {
        className: "fixed inset-0 z-100 flex h-full w-full flex-col items-center justify-center px-8",
        children: e.jsx("div", {
            className: "inset-2 flex h-fit max-h-[min(891px,90%)] w-full max-w-[1000px] flex-col items-center justify-center rounded-lg bg-[#f6f7f5] p-8 md:h-full"
        })
    }),
    h = () => {
        const t = s(n),
            {
                enabled: i,
                name: a,
                company: o
            } = t || {};
        return i ? e.jsx(r.Suspense, {
            fallback: e.jsx(m, {}),
            children: e.jsx(p, {
                name: a,
                company: o
            })
        }) : null
    };
export {
    h as ChilipiperLoader
};