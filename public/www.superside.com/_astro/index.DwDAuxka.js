const __vite__mapDeps = (e, t = __vite__mapDeps, a = t.f || (t.f = ["_astro/WistiaPlayerWrapper-USWXOBBT.C3K2qWcH.js", "_astro/preload-helper.CVfkMyKi.js", "_astro/index.CtKCFvq0.js", "_astro/jsx-runtime.u17CrQMm.js"])) => e.map(e => a[e]);
import {
    j as n
} from "./jsx-runtime.u17CrQMm.js";
import {
    S as N
} from "./index.CeN7Y3go.js";
import {
    i as R,
    c as h,
    d as I,
    j as me,
    a as ue,
    T as pe
} from "./index.BwDjtkKo.js";
import {
    r
} from "./index.CtKCFvq0.js";
import {
    useScreenSize as fe
} from "./ScreenSizeProvider.i-8ZMHs-.js";
import {
    a as be,
    m as he,
    s as z,
    V as ye
} from "./VideoAsset.ZXCa1LyB.js";
import {
    e as we,
    c as O,
    d as ge
} from "./image.njRmqV4O.js";
import {
    _ as xe
} from "./preload-helper.CVfkMyKi.js";
import {
    c as Ae,
    a as D
} from "./constants.B1nA__9a.js";
import {
    r as F,
    s as ve,
    g as Ce
} from "./config.CPkfl8rD.js";
import {
    w as je
} from "./SSRBase.es.Dbavvudo.js";
import {
    r as Ne
} from "./bannerOpenRequest.g6_ZLIwN.js";

function ke(e, t) {
    const {
        fallback: a
    } = t ? ? {}, {
        currentBreakpoint: s
    } = fe();
    if (!s || !e) return e || a;
    if ("object" != typeof e || !R.some(t => t in e)) return e;
    for (let t = R.indexOf(s); t >= 0; t -= 1) {
        const a = R[t],
            s = e[a];
        if (s) return s
    }
    return a
}
const Be = e => "object" == typeof e && null !== e && "_type" in e && "richString" === e._type,
    Ee = [{
        name: "sm",
        value: ""
    }, {
        name: "md",
        value: "md"
    }, {
        name: "lg",
        value: "lg"
    }, {
        name: "xl",
        value: "xl"
    }],
    T = e => {
        const t = Ee.filter(t => !!e[t.name]);
        return e => {
            const a = t.findIndex(({
                    name: t
                }) => t === e),
                s = t[a + 1];
            return h(0 !== a && "display-none", s && `${s.value}:display-none`, a && [t[a].value, "display-block"].filter(Boolean).join(":"))
        }
    },
    Ze = e => {
        const {
            imageAsset: t,
            className: a,
            style: s,
            layout: i = "fit",
            width: l,
            children: r,
            ...o
        } = e;
        if (!t) return null;
        const {
            image: c,
            alt: d
        } = t;
        if (!c || !c[I.SM] || !Object.values(c).length) return null;
        const m = "fit" === i,
            u = "fill" === i,
            {
                className: p,
                style: f
            } = be(he(c, ge)),
            w = h(p, u && "h-full w-full", a),
            b = h("min-h-0", u && "h-full w-full object-cover", m && "block h-auto max-h-full w-full object-contain"),
            y = c[I.SM],
            x = we(y);
        return n.jsxs("picture", {
            "data-ui": "ImageAsset",
            ...o,
            className: w,
            style: { ...f,
                ...s
            },
            children: [z(c).reverse().map(([e, t], a) => {
                const s = 0 === a,
                    i = me[e],
                    r = null == l ? s ? void 0 : i : Math.min(l, i);
                return n.jsx("source", {
                    srcSet: O(t, {
                        width: r
                    }),
                    media: `(min-width: ${i}px)`
                }, e)
            }), n.jsx("img", {
                alt: d,
                loading: "lazy",
                className: b,
                src: O(y, {
                    width: l ? ? x ? .width
                }),
                width: x ? .width,
                height: x ? .height
            }), r]
        })
    };
var Pe = e => null === e,
    Se = e => void 0 === e,
    Re = e => Pe(e) || Se(e),
    w = e => !Re(e),
    U = e => "string" == typeof e,
    Oe = e => "number" == typeof e,
    dt = e => w(e) && "function" == typeof e,
    Ve = e => w(e) && "boolean" == typeof e,
    L = e => Oe(e) || U(e) || Ve(e),
    _e = (e, t, a) => {
        let s = a;
        return typeof window > "u" || (w(window.wistiaOptions ? ._all) && w(window.wistiaOptions._all[t]) && L(window.wistiaOptions._all[t]) && (s = window.wistiaOptions._all[t]), w(window.wistiaOptions ? .[e]) && w(window.wistiaOptions[e]) && L(window.wistiaOptions[e][t]) && (s = window.wistiaOptions[e][t])), s
    },
    W = e => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (0 !== t ? "-" : "") + e.toLowerCase()),
    $e = async e => {
        const t = new Image;
        return t.src = e, await t.decode(), t
    },
    H = (e, t) => `https://${t}/embed/medias/${e}/swatch`,
    mt = async (e, t = "fast.wistia.com") => {
        const a = await $e(H(e, t)),
            {
                naturalHeight: s,
                naturalWidth: n
            } = a;
        return n / s
    },
    Me = ({
        mediaId: e,
        embedHost: t = "fast.wistia.com",
        aspect: a = 1.7,
        shouldLoadSwatch: s = !0,
        roundedPlayer: n = 0
    }) => {
        const i = {
            background: s ? `center / contain no-repeat url(${H(e,t)})` : void 0,
            borderRadius: `${n}px`,
            display: "block",
            filter: "blur(5px)",
            paddingTop: 100 / a + "%"
        };
        return `\n    wistia-player[media-id='${e}']:not(:defined) {\n      ${Object.entries(i).map(([e,t])=>`${W(e)}: ${t};`).join("\r\n")}\n    }\n\n    wistia-player[media-id='${e}']:state(--initializing) {\n      ${Object.entries(i).map(([e,t])=>`${W(e)}: ${t};`).join("\r\n")}\n    }\n  `
    },
    Ie = r.lazy(async () => xe(() =>
        import ("./WistiaPlayerWrapper-USWXOBBT.C3K2qWcH.js"), __vite__mapDeps([0, 1, 2, 3])).then(e => ({
        default: e.WistiaPlayerWrapper
    }))),
    De = r.forwardRef((e, t) => {
        const {
            aspect: a,
            children: s,
            embedHost: i,
            mediaId: l,
            swatch: o,
            style: c
        } = e, d = _e(l, "embedHost", i ? ? void 0), m = U(d) ? d : "fast.wistia.com", u = void 0 !== a, p = Me({
            mediaId: l,
            embedHost: m,
            aspect: a,
            shouldLoadSwatch: o
        });
        return n.jsx(r.Suspense, {
            fallback: u ? n.jsxs(r.Fragment, {
                children: [n.jsx("style", {
                    children: p
                }), n.jsx("wistia-player", {
                    "media-id": l,
                    style: c,
                    children: s
                })]
            }) : null,
            children: n.jsx(Ie, {
                ref: t,
                ...e
            })
        })
    });
const Fe = e => {
        const {
            wistiaVideo: t,
            style: a,
            className: s,
            ...i
        } = e, {
            hashedId: l,
            aspectRatio: r
        } = t;
        return n.jsx(De, {
            swatch: !1,
            ...i,
            style: { ...a,
                "--aspect-ratio": r
            },
            mediaId: l,
            className: h("block aspect-(--aspect-ratio) w-full", s)
        })
    },
    Le = e => {
        const {
            layout: t = "fit",
            className: a,
            wistiaAsset: s,
            width: i,
            style: l,
            autoplay: r,
            muted: o = r,
            endVideoBehavior: c = (r ? "loop" : void 0),
            silentAutoplay: d,
            disableControls: m,
            disableBigPlayButton: u,
            disablePlayBarControl: p,
            disableQualityControl: f,
            disableVolumeControl: w,
            disableSettingsControl: b,
            disablePlayPauseControl: y,
            disableFullscreenControl: x,
            disablePlayPauseNotifier: g,
            disablePlaybackRateControl: j,
            ...v
        } = e;
        if (!s) return null;
        const {
            wistiaVideo: A,
            thumbnail: C
        } = s;
        if (!A) return null;
        const Z = !!m,
            _ = u ? ? Z,
            k = f ? ? Z,
            M = p ? ? Z,
            V = b ? ? Z,
            S = y ? ? Z,
            $ = x ? ? Z,
            P = g ? ? Z,
            B = j ? ? Z,
            E = w ? ? Z,
            I = d ? ? Z,
            R = T(A),
            W = "fill" === t,
            F = "fit" === t,
            L = W ? "div" : N;
        return z(A).map(([e, t], s) => {
            const {
                aspectRatio: d,
                hashedId: m
            } = t, u = C ? .[e], p = O(u, {
                width: i
            }), f = p || `https://fast.wistia.com/embed/medias/${m}/swatch`, w = "--background-image";
            return n.jsx(L, {
                className: h(W && "grid h-full w-full overflow-hidden", Z && "pointer-events-none select-none", a),
                style: { ...l,
                    [w]: `url(${f})`,
                    "--aspect-ratio": d
                },
                children: n.jsx(Fe, {
                    swatch: !1,
                    wistiaVideo: t,
                    "aria-hidden": s > 0,
                    ...v,
                    "data-ui": "WistiaAsset",
                    muted: o,
                    autoplay: r,
                    poster: p,
                    endVideoBehavior: c,
                    silentAutoplay: I,
                    bigPlayButton: !_,
                    volumeControl: !E,
                    playBarControl: !M,
                    qualityControl: !k,
                    settingsControl: !V,
                    playPauseControl: !S,
                    playPauseNotifier: !P,
                    fullscreenControl: !$,
                    playbackRateControl: !B,
                    style: {
                        [w]: `url(${f})`
                    },
                    className: h("block aspect-(--aspect-ratio) w-full overflow-hidden", `bg-(image:${w})`, "bg-transparent bg-contain bg-center bg-no-repeat", W && "table h-auto min-h-full w-auto max-w-none min-w-full self-center justify-self-center", F && "h-full max-h-fit w-auto max-w-full min-w-0", a, R(e))
                })
            }, e)
        })
    },
    We = new Map([
        ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
            d: "M167.31,160.69a16,16,0,1,1-22.62,0A16,16,0,0,1,167.31,160.69Zm-86.62-8a16,16,0,1,0,22.62,0A16,16,0,0,0,80.69,152.69Zm14.62-33.38a16,16,0,1,0-22.62,0A16,16,0,0,0,95.31,119.31Zm48-6.62a16,16,0,1,0,0,22.62A16,16,0,0,0,143.31,112.69ZM236,128A108,108,0,1,1,128,20a12,12,0,0,1,12,12,36,36,0,0,0,36,36,12,12,0,0,1,12,12,36,36,0,0,0,36,36A12,12,0,0,1,236,128Zm-24.67,10.65A60.17,60.17,0,0,1,165,91a60.17,60.17,0,0,1-47.66-46.32,84,84,0,1,0,94,94Z"
        }))],
        ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
            d: "M224,128a96,96,0,1,1-96-96,48,48,0,0,0,48,48A48,48,0,0,0,224,128Z",
            opacity: "0.2"
        }), r.createElement("path", {
            d: "M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z"
        }))],
        ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
            d: "M224,120a40,40,0,0,1-40-40,8,8,0,0,0-8-8,40,40,0,0,1-40-40,8,8,0,0,0-8-8A104,104,0,1,0,232,128,8,8,0,0,0,224,120ZM75.51,99.51a12,12,0,1,1,0,17A12,12,0,0,1,75.51,99.51Zm25,73a12,12,0,1,1,0-17A12,12,0,0,1,100.49,172.49Zm23-40a12,12,0,1,1,17,0A12,12,0,0,1,123.51,132.49Zm41,48a12,12,0,1,1,0-17A12,12,0,0,1,164.49,180.49Z"
        }))],
        ["light", r.createElement(r.Fragment, null, r.createElement("path", {
            d: "M163.07,164.93a10,10,0,1,1-14.14,0A10,10,0,0,1,163.07,164.93Zm-78.14-8a10,10,0,1,0,14.14,0A10,10,0,0,0,84.93,156.93Zm6.14-41.86a10,10,0,1,0-14.14,0A10,10,0,0,0,91.07,115.07Zm33.86,1.86a10,10,0,1,0,14.14,0A10,10,0,0,0,124.93,116.93ZM230,128A102,102,0,1,1,128,26a6,6,0,0,1,6,6,42,42,0,0,0,42,42,6,6,0,0,1,6,6,42,42,0,0,0,42,42A6,6,0,0,1,230,128Zm-12.18,5.65A54.09,54.09,0,0,1,170.3,85.7a54.09,54.09,0,0,1-48-47.53,90,90,0,1,0,95.47,95.48Z"
        }))],
        ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
            d: "M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z"
        }))],
        ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
            d: "M161.66,166.34a8,8,0,1,1-11.32,0A8,8,0,0,1,161.66,166.34Zm-75.32-8a8,8,0,1,0,11.32,0A8,8,0,0,0,86.34,158.34Zm3.32-56a8,8,0,1,0,0,11.32A8,8,0,0,0,89.66,102.34Zm36.68,16a8,8,0,1,0,11.32,0A8,8,0,0,0,126.34,118.34ZM228,128A100,100,0,1,1,128,28a4,4,0,0,1,4,4,44.05,44.05,0,0,0,44,44,4,4,0,0,1,4,4,44.05,44.05,0,0,0,44,44A4,4,0,0,1,228,128Zm-8.08,3.84a52.08,52.08,0,0,1-47.78-48,52.08,52.08,0,0,1-48-47.78,92,92,0,1,0,95.76,95.76Z"
        }))]
    ]),
    V = r.forwardRef((e, t) => r.createElement(je, {
        ref: t,
        ...e,
        weights: We
    }));
V.displayName = "CookieIcon";
const ut = V,
    ze = "/_astro/consent-placeholder-background.B6oRsQVW.webp",
    Te = e => {
        const {
            className: t,
            variant: a = "default"
        } = e, s = "decorative" === a;
        return n.jsxs("div", {
            "aria-hidden": s || void 0,
            className: h("not-prose dark bg-background @container/embed-consent relative aspect-video w-full overflow-hidden rounded-[10px]", t),
            "data-testid": "embed-consent-placeholder",
            "data-ui": "EmbedConsentPlaceholder",
            "data-variant": a,
            children: [n.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center",
                "data-testid": "embed-consent-background",
                style: {
                    backgroundImage: `url(${ze})`
                }
            }), n.jsx("div", {
                className: "bg-background/50 absolute inset-0"
            }), s ? null : n.jsx("div", {
                className: "text-foreground relative flex size-full items-center justify-center p-2 @min-[400px]/embed-consent:p-6 @min-[700px]/embed-consent:p-8",
                children: n.jsxs("div", {
                    className: "flex w-full max-w-[656px] flex-col items-center gap-2 text-center @min-[400px]/embed-consent:gap-3 @min-[700px]/embed-consent:gap-6",
                    children: [n.jsxs("div", {
                        className: "flex w-full flex-col items-center gap-1 @min-[700px]/embed-consent:pt-16",
                        children: [n.jsxs("div", {
                            className: "flex items-center justify-center gap-1",
                            children: [n.jsx(V, {
                                "aria-hidden": "true",
                                className: "size-4 shrink-0 @min-[400px]/embed-consent:size-5 @min-[700px]/embed-consent:size-6",
                                weight: "regular"
                            }), n.jsx("p", {
                                className: "text-bor-sm @min-[400px]/embed-consent:text-bor-base @min-[700px]/embed-consent:text-bor-xl font-medium",
                                children: "To view this content, please review our cookie policy."
                            })]
                        }), n.jsx("p", {
                            className: "text-bor-xs @min-[700px]/embed-consent:text-bor-sm opacity-60",
                            children: Ae
                        })]
                    }), n.jsx(ue, {
                        type: "button",
                        size: "base",
                        className: "bg-bor-primary text-foreground-inverted rounded-surface hover:bg-bor-primary-400 text-bor-xs @min-[700px]/embed-consent:text-bor-sm inline-flex h-9 min-w-[148px] items-center justify-center px-5 font-medium transition-colors @min-[700px]/embed-consent:h-[46px]",
                        onClick: Ne,
                        children: "Review cookie policy"
                    })]
                })
            })]
        })
    },
    Ue = () => "pending",
    He = e => {
        const {
            category: t,
            children: a,
            placeholderClassName: s,
            placeholderVariant: i = "default"
        } = e, l = r.useCallback(e => {
            const t = F();
            if (!t) return () => {};
            const a = ve(t, e);
            return window.addEventListener(D, e), () => {
                a ? .(), window.removeEventListener(D, e)
            }
        }, []), o = r.useCallback(() => {
            const e = F();
            return e && !0 === Ce(e)[t] ? "granted" : "denied"
        }, [t]), c = r.useSyncExternalStore(l, o, Ue);
        return "granted" === c ? a : n.jsx(Te, {
            className: s,
            variant: "pending" === c ? "decorative" : i
        })
    },
    Ye = e => {
        const {
            youtubeVideo: t,
            className: a,
            autoplay: s,
            disableControls: i,
            loop: l,
            mute: r,
            placeholderVariant: o,
            referrerPolicy: c = "strict-origin-when-cross-origin",
            ...d
        } = e, {
            videoId: m
        } = t, u = new URLSearchParams({
            autoplay: s ? "1" : "0",
            mute: s || r ? "1" : "0",
            controls: i ? "0" : "1",
            loop: l ? "1" : "0",
            rel: "0",
            modestbranding: "1",
            playsinline: "1"
        }), p = h("aspect-16/9", a);
        return n.jsx(He, {
            category: "advertisement",
            placeholderClassName: p,
            placeholderVariant: o,
            children: n.jsx("iframe", { ...d,
                className: h(p, "border-0", i && "pointer-events-none"),
                src: `https://www.youtube-nocookie.com/embed/${m}?${u.toString()}`,
                allowFullScreen: !0,
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                referrerPolicy: c
            })
        })
    },
    Qe = e => {
        const {
            className: t,
            youtubeAsset: a,
            layout: s = "fit",
            autoplay: i,
            disableControls: l,
            ...r
        } = e;
        if (!a) return null;
        const {
            youtubeVideo: o
        } = a;
        if (!o) return null;
        const c = "fill" === s,
            d = "fit" === s,
            m = T(o),
            u = c ? "div" : N;
        return Object.entries(o).map(([e, a]) => n.jsx(u, {
            className: h(c && "grid h-full w-full overflow-hidden", t),
            children: n.jsx(Ye, {
                youtubeVideo: a,
                ...r,
                "data-ui": "YoutubeAsset",
                autoplay: i ? ? c,
                disableControls: l ? ? c,
                placeholderVariant: c ? "decorative" : "default",
                className: h("aspect-16/9 w-full", c && "table h-auto min-h-full w-auto max-w-none min-w-full self-center justify-self-center", d && "h-auto max-h-full w-auto max-w-full", t, m(e))
            })
        }, e))
    },
    qe = e => {
        const {
            value: t,
            format: a = "html"
        } = e;
        return "string" == typeof t ? t : Be(t) ? "plain" === a ? t.plain : n.jsx("span", {
            dangerouslySetInnerHTML: {
                __html: t.html
            }
        }) : null
    },
    Ge = e => {
        const {
            className: t,
            withCaption: a,
            caption: s,
            layout: i,
            children: l
        } = e;
        return a && s ? n.jsxs("div", {
            className: h("flex h-full min-h-0 flex-col gap-2", "fit" === i && "items-center"),
            children: [n.jsx(N, {
                className: h(t, "flex-1"),
                children: l
            }), n.jsx(pe, {
                size: "xs",
                className: "line-clamp-1",
                children: n.jsx(qe, {
                    value: s
                })
            })]
        }) : n.jsx(N, {
            className: t,
            children: l
        })
    },
    Xe = e => {
        const {
            asset: t,
            className: a,
            layout: s = "fit",
            withCaption: i,
            width: l,
            wistiaAssetOptions: r,
            videoAssetOptions: o,
            youtubeAssetOptions: c
        } = e, {
            value: d,
            caption: m
        } = t, u = ke(s), p = d[0], h = "fill" === u, f = "imageAsset" === p._type ? n.jsx(Ze, {
            imageAsset: p,
            layout: u,
            width: l
        }) : "videoAsset" === p._type ? n.jsx(ye, {
            layout: u,
            width: l,
            ...o,
            videoAsset: p
        }) : "wistiaAsset" === p._type ? n.jsx(Le, {
            layout: u,
            width: l,
            disableControls: h || r ? .disableControls,
            autoplay: h || r ? .autoplay,
            ...r,
            wistiaAsset: p
        }) : "youtubeAsset" === p._type ? n.jsx(Qe, {
            layout: u,
            youtubeAsset: p,
            ...c
        }) : null;
        return n.jsx(Ge, {
            withCaption: i,
            caption: m,
            className: a,
            layout: u,
            children: f
        })
    },
    pt = e => {
        const {
            asset: t
        } = e;
        return t ? n.jsx(Xe, { ...e,
            asset: t
        }) : null
    };
export {
    pt as A, He as C, Te as E, Ze as I, qe as R, Le as W, Qe as Y, mt as a, L as b, W as c, dt as d, Ge as e, Fe as f, _e as g, Be as h, U as i, ut as j, V as k, ke as u, Me as w
};