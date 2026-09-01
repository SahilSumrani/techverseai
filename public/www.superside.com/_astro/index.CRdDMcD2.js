import {
    r as d
} from "./index.CtKCFvq0.js";
import {
    j as m
} from "./js.cookie.CbilILek.js";
import "./index.BwDjtkKo.js";
import {
    u as w
} from "./useHeader.UpZBR8MQ.js";
import {
    useScreenSize as y
} from "./ScreenSizeProvider.i-8ZMHs-.js";
const L = {},
    P = {},
    j = e => {
        const {
            globalConfig: t
        } = e, {
            siteUrl: r
        } = t || {};
        return d.useEffect(() => {
            const e = new URLSearchParams(window.location.search);
            if (0 === e.size) return;
            const t = window.location.hostname;
            let o;
            if (!("localhost" === t || "127.0.0.1" === t))
                if (t.includes(".superside.dev")) {
                    const e = t.split(".");
                    o = e.length >= 2 ? e.slice(-2).join(".") : t
                } else if (r) try {
                o = new URL(r).hostname.replace(/^www\./, "")
            } catch (e) {
                console.error("[QueryToCookieBridge] Invalid siteUrl", r, e)
            }
            e.forEach((e, t) => {
                const r = m.get(t);
                if (void 0 === r || r !== e) {
                    const r = {
                        expires: 30
                    };
                    o && (r.domain = `.${o}`), "https:" === window.location.protocol ? (r.secure = !0, r.sameSite = "None") : r.sameSite = "Lax", m.set(t, e, r)
                }
            })
        }, [r]), null
    },
    C = () => {
        const {
            headerOffset: e
        } = w();
        return d.useEffect(() => {
            const t = t => {
                if (t.defaultPrevented || 0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
                const r = t.target ? .closest ? .('a[href*="#"]');
                if (!r) return;
                const o = r.getAttribute("href");
                if (!o) return;
                const s = new URL(o, window.location.href),
                    {
                        hash: i
                    } = s;
                if (s.pathname !== window.location.pathname || s.search !== window.location.search || !i || "#" === i) return;
                const n = document.querySelector(i);
                if (!n) return;
                t.preventDefault();
                const a = n.getBoundingClientRect().top + window.scrollY - e;
                window.scrollTo({
                    top: a,
                    behavior: "smooth"
                }), history.pushState(null, "", i)
            };
            return window.addEventListener("click", t, {
                capture: !0
            }), () => window.removeEventListener("click", t, {
                capture: !0
            })
        }, [e]), null
    },
    H = () => {
        const {
            headerOffset: e
        } = w(), {
            screenHeight: t,
            screenWidth: r,
            isDesktop: o
        } = y(), s = d.useCallback(async e => new Promise(t => {
            const r = document.createElement("script");
            r.src = e, r.async = !0, r.onload = () => t(), document.head.appendChild(r)
        }), []), i = d.useCallback(() => Array.from(document.querySelectorAll('[data-horizontal-scroll="true"]')).filter(e => 1 === e.querySelectorAll("[data-horizontal-scroll-track]").length), []), n = d.useCallback(() => {
            window.ScrollTrigger && window.ScrollTrigger.getAll().forEach(e => e.kill()), i().forEach(e => {
                e.style.removeProperty("height"), e.classList.remove("active")
            })
        }, [i]), a = d.useCallback(async () => {
            const t = i();
            if (!t.length || (await Promise.all([s("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"), s("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js")]), !window.gsap || !window.ScrollTrigger)) return;
            const {
                gsap: r,
                ScrollTrigger: o
            } = window;
            r.registerPlugin(o), t.forEach(t => {
                const s = t.querySelector("[data-horizontal-scroll-track]");
                if (!s || !s.children.length) return;
                t.style.height = `calc(100vh - ${e}px)`, t.classList.add("active");
                const i = () => Math.max(0, s.scrollWidth - t.clientWidth);
                o.getAll().filter(e => e.trigger === t).forEach(e => e.kill()), o.create({
                    trigger: t,
                    start: () => `top ${e}px`,
                    end: () => `+=${i()}`,
                    pin: !0,
                    pinSpacing: !0,
                    anticipatePin: 1,
                    invalidateOnRefresh: !0,
                    onUpdate: e => {
                        const t = -e.progress * i();
                        r.set(s, {
                            x: t
                        })
                    }
                })
            }), o.refresh()
        }, [e, s]);
        d.useEffect(() => (o && t < 1500 ? a() : n(), () => {
            n()
        }), [t, r, o, n])
    };
export {
    C as AnchorHashScrollScript, L as DatadogLogger, H as HorizontalScrollScript, P as Loader, j as QueryToCookieBridge
};