import {
    j as m
} from "./jsx-runtime.u17CrQMm.js";
import {
    r as C,
    R as y
} from "./index.CtKCFvq0.js";
import {
    b as N,
    c as T,
    _ as K
} from "./index.BwDjtkKo.js";
const O = N("grid", {
        variants: {
            mobileColumns: {
                1: "grid-cols-1",
                2: "grid-cols-2",
                3: "grid-cols-3",
                4: "grid-cols-4",
                5: "grid-cols-5",
                6: "grid-cols-6"
            },
            desktopColumns: {
                1: "lg:grid-cols-1",
                2: "lg:grid-cols-2",
                3: "lg:grid-cols-3",
                4: "lg:grid-cols-4",
                5: "lg:grid-cols-5",
                6: "lg:grid-cols-6"
            },
            size: {
                md: "gap-3",
                sm: "gap-2"
            }
        }
    }),
    A = N("overflow-hidden rounded text-left font-semibold transition-colors", {
        variants: {
            size: {
                md: "text-base",
                sm: "p-2 text-sm"
            },
            isSelected: {
                true: "text-background bg-bor-secondary-400 hover:bg-bor-secondary-300 dark:bg-bor-light/100 dark:hover:bg-bor-light/80",
                false: "text-foreground dark:bg-bor-light/10 hover:dark:bg-bor-light/20 bg-bor-secondary-100 hover:bg-bor-secondary-200"
            },
            hasImage: {
                true: "",
                false: ""
            }
        },
        compoundVariants: [{
            hasImage: !1,
            size: "md",
            className: "p-4"
        }, {
            hasImage: !0,
            size: "md",
            className: "p-3"
        }]
    }),
    B = ({
        value: e = "",
        isSelected: t = !1,
        onSelectValue: s = () => {},
        size: i = "md",
        children: n,
        title: o,
        iconPick: r,
        disabled: a
    }) => {
        const l = !!r ? .svg;
        return m.jsx("button", {
            className: A({
                size: i,
                isSelected: t,
                hasImage: !1
            }),
            onClick: t => {
                t.preventDefault(), s(e)
            },
            role: "option",
            "aria-selected": t,
            disabled: a,
            children: m.jsxs("div", {
                className: "flex items-center gap-2",
                children: [l && m.jsx("span", {
                    dangerouslySetInnerHTML: {
                        __html: r.svg
                    }
                }), n || o]
            })
        })
    },
    P = (e, t) => !(!e || !t) && (Array.isArray(t) ? t.some(t => t === e) : t === e),
    R = (e, t) => e ? t ? (Array.isArray(t) || (t = [t]), P(e, t) ? t.filter(t => t !== e) : [...t, e]) : [e] : t,
    F = e => {
        const {
            value: t,
            setValue: s,
            withMultiple: i = !1,
            size: n = "md",
            desktopColumns: o = 3,
            mobileColumns: r = o,
            options: a = [],
            disabled: l,
            onChange: p,
            ...u
        } = e, [c, h] = C.useState(t), d = t && s, g = d ? t : c, f = d ? s : h, v = e => {
            f(i ? t => R(e, t) : t => t === e ? void 0 : e)
        };
        return C.useEffect(() => {
            p ? .(g)
        }, [g]), m.jsx("div", {
            className: T(O({
                mobileColumns: r,
                desktopColumns: o,
                size: n
            })),
            ...u,
            children: a.map(e => m.jsx(B, {
                size: n,
                isSelected: P(e.value, g),
                onSelectValue: v,
                ...e,
                disabled: l || e.disabled
            }, e.value))
        })
    };

function w(e) {
    return e && e.stopPropagation && e.stopPropagation(), e && e.preventDefault && e.preventDefault(), !1
}

function D(e) {
    return null == e ? [] : Array.isArray(e) ? e.slice() : [e]
}

function k(e) {
    return null !== e && 1 === e.length ? e[0] : e.slice()
}

function S(e) {
    Object.keys(e).forEach(t => {
        typeof document < "u" && document.addEventListener(t, e[t], !1)
    })
}

function x(e, t) {
    return z(function(e, t) {
        let s = e;
        return s <= t.min && (s = t.min), s >= t.max && (s = t.max), s
    }(e, t), t)
}

function z(e, t) {
    const s = (e - t.min) % t.step;
    let i = e - s;
    return 2 * Math.abs(s) >= t.step && (i += s > 0 ? t.step : -t.step), parseFloat(i.toFixed(5))
}
let E = function(e) {
    function t(t) {
        var s;
        (s = e.call(this, t) || this).onKeyUp = () => {
            s.onEnd()
        }, s.onMouseUp = () => {
            s.onEnd(s.getMouseEventMap())
        }, s.onTouchEnd = e => {
            e.preventDefault(), s.onEnd(s.getTouchEventMap())
        }, s.onBlur = () => {
            s.setState({
                index: -1
            }, s.onEnd(s.getKeyDownEventMap()))
        }, s.onMouseMove = e => {
            s.setState({
                pending: !0
            });
            const t = s.getMousePosition(e),
                i = s.getDiffPosition(t[0]),
                n = s.getValueFromPosition(i);
            s.move(n)
        }, s.onTouchMove = e => {
            if (e.touches.length > 1) return;
            s.setState({
                pending: !0
            });
            const t = s.getTouchPosition(e);
            if (void 0 === s.isScrolling) {
                const e = t[0] - s.startPosition[0],
                    i = t[1] - s.startPosition[1];
                s.isScrolling = Math.abs(i) > Math.abs(e)
            }
            if (s.isScrolling) return void s.setState({
                index: -1
            });
            const i = s.getDiffPosition(t[0]),
                n = s.getValueFromPosition(i);
            s.move(n)
        }, s.onKeyDown = e => {
            if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) switch (s.setState({
                pending: !0
            }), e.key) {
                case "ArrowLeft":
                case "ArrowDown":
                case "Left":
                case "Down":
                    e.preventDefault(), s.moveDownByStep();
                    break;
                case "ArrowRight":
                case "ArrowUp":
                case "Right":
                case "Up":
                    e.preventDefault(), s.moveUpByStep();
                    break;
                case "Home":
                    e.preventDefault(), s.move(s.props.min);
                    break;
                case "End":
                    e.preventDefault(), s.move(s.props.max);
                    break;
                case "PageDown":
                    e.preventDefault(), s.moveDownByStep(s.props.pageFn(s.props.step));
                    break;
                case "PageUp":
                    e.preventDefault(), s.moveUpByStep(s.props.pageFn(s.props.step))
            }
        }, s.onSliderMouseDown = e => {
            if (!s.props.disabled && 2 !== e.button) {
                if (s.setState({
                        pending: !0
                    }), !s.props.snapDragDisabled) {
                    const t = s.getMousePosition(e);
                    s.forceValueFromPosition(t[0], e => {
                        s.start(e, t[0]), S(s.getMouseEventMap())
                    })
                }
                w(e)
            }
        }, s.onSliderClick = e => {
            if (!s.props.disabled && s.props.onSliderClick && !s.hasMoved) {
                const t = s.getMousePosition(e),
                    i = x(s.calcValue(s.calcOffsetFromPosition(t[0])), s.props);
                s.props.onSliderClick(i)
            }
        }, s.createOnKeyDown = e => t => {
            s.props.disabled || (s.start(e), S(s.getKeyDownEventMap()), w(t))
        }, s.createOnMouseDown = e => t => {
            if (s.props.disabled || 2 === t.button) return;
            s.setState({
                pending: !0
            });
            const i = s.getMousePosition(t);
            s.start(e, i[0]), S(s.getMouseEventMap()), w(t)
        }, s.createOnTouchStart = e => t => {
            if (s.props.disabled || t.touches.length > 1) return;
            s.setState({
                pending: !0
            });
            const i = s.getTouchPosition(t);
            var n;
            s.startPosition = i, s.isScrolling = void 0, s.start(e, i[0]), S(s.getTouchEventMap()), (n = t).stopPropagation && n.stopPropagation()
        }, s.handleResize = () => {
            const e = window.setTimeout(() => {
                s.pendingResizeTimeouts.shift(), s.resize()
            }, 0);
            s.pendingResizeTimeouts.push(e)
        }, s.renderThumb = (e, t) => {
            const i = s.props.thumbClassName + " " + s.props.thumbClassName + "-" + t + " " + (s.state.index === t ? s.props.thumbActiveClassName : ""),
                n = {
                    ref: e => {
                        s["thumb" + t] = e
                    },
                    key: s.props.thumbClassName + "-" + t,
                    className: i,
                    style: e,
                    onMouseDown: s.createOnMouseDown(t),
                    onTouchStart: s.createOnTouchStart(t),
                    onFocus: s.createOnKeyDown(t),
                    tabIndex: 0,
                    role: "slider",
                    "aria-orientation": s.props.orientation,
                    "aria-valuenow": s.state.value[t],
                    "aria-valuemin": s.props.min,
                    "aria-valuemax": s.props.max,
                    "aria-label": Array.isArray(s.props.ariaLabel) ? s.props.ariaLabel[t] : s.props.ariaLabel,
                    "aria-labelledby": Array.isArray(s.props.ariaLabelledby) ? s.props.ariaLabelledby[t] : s.props.ariaLabelledby,
                    "aria-disabled": s.props.disabled
                },
                o = {
                    index: t,
                    value: k(s.state.value),
                    valueNow: s.state.value[t]
                };
            return s.props.ariaValuetext && (n["aria-valuetext"] = "string" == typeof s.props.ariaValuetext ? s.props.ariaValuetext : s.props.ariaValuetext(o)), s.props.renderThumb(n, o)
        }, s.renderTrack = (e, t, i) => {
            const n = {
                    key: s.props.trackClassName + "-" + e,
                    className: s.props.trackClassName + " " + s.props.trackClassName + "-" + e,
                    style: s.buildTrackStyle(t, s.state.upperBound - i)
                },
                o = {
                    index: e,
                    value: k(s.state.value)
                };
            return s.props.renderTrack(n, o)
        };
        let i = D(t.value);
        i.length || (i = D(t.defaultValue)), s.pendingResizeTimeouts = [];
        const n = [];
        for (let e = 0; e < i.length; e += 1) i[e] = x(i[e], t), n.push(e);
        return s.resizeObserver = null, s.resizeElementRef = y.createRef(), s.state = {
            index: -1,
            upperBound: 0,
            sliderLength: 0,
            value: i,
            zIndices: n
        }, s
    }
    K(t, e);
    var s = t.prototype;
    return s.componentDidMount = function() {
        typeof window < "u" && (this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this.resizeElementRef.current), this.resize())
    }, t.getDerivedStateFromProps = function(e, t) {
        const s = D(e.value);
        return s.length ? t.pending ? null : {
            value: s.map(t => x(t, e))
        } : null
    }, s.componentDidUpdate = function() {
        0 === this.state.upperBound && this.resize()
    }, s.componentWillUnmount = function() {
        this.clearPendingResizeTimeouts(), this.resizeObserver && this.resizeObserver.disconnect()
    }, s.onEnd = function(e) {
        var t;
        e && (t = e, Object.keys(t).forEach(e => {
            typeof document < "u" && document.removeEventListener(e, t[e], !1)
        })), this.hasMoved && this.fireChangeEvent("onAfterChange"), this.setState({
            pending: !1
        }), this.hasMoved = !1
    }, s.getValue = function() {
        return k(this.state.value)
    }, s.getClosestIndex = function(e) {
        let t = Number.MAX_VALUE,
            s = -1;
        const {
            value: i
        } = this.state, n = i.length;
        for (let o = 0; o < n; o += 1) {
            const n = this.calcOffset(i[o]),
                r = Math.abs(e - n);
            r < t && (t = r, s = o)
        }
        return s
    }, s.getMousePosition = function(e) {
        return [e["page" + this.axisKey()], e["page" + this.orthogonalAxisKey()]]
    }, s.getTouchPosition = function(e) {
        const t = e.touches[0];
        return [t["page" + this.axisKey()], t["page" + this.orthogonalAxisKey()]]
    }, s.getKeyDownEventMap = function() {
        return {
            keydown: this.onKeyDown,
            keyup: this.onKeyUp,
            focusout: this.onBlur
        }
    }, s.getMouseEventMap = function() {
        return {
            mousemove: this.onMouseMove,
            mouseup: this.onMouseUp
        }
    }, s.getTouchEventMap = function() {
        return {
            touchmove: this.onTouchMove,
            touchend: this.onTouchEnd
        }
    }, s.getValueFromPosition = function(e) {
        const t = e / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
        return x(this.state.startValue + t, this.props)
    }, s.getDiffPosition = function(e) {
        let t = e - this.state.startPosition;
        return this.props.invert && (t *= -1), t
    }, s.resize = function() {
        const {
            slider: e,
            thumb0: t
        } = this;
        if (!e || !t) return;
        const s = this.sizeKey(),
            i = e.getBoundingClientRect(),
            n = e[s],
            o = i[this.posMaxKey()],
            r = i[this.posMinKey()],
            a = t.getBoundingClientRect()[s.replace("client", "").toLowerCase()],
            l = n - a,
            p = Math.abs(o - r);
        this.state.upperBound === l && this.state.sliderLength === p && this.state.thumbSize === a || this.setState({
            upperBound: l,
            sliderLength: p,
            thumbSize: a
        })
    }, s.calcOffset = function(e) {
        const t = this.props.max - this.props.min;
        return 0 === t ? 0 : (e - this.props.min) / t * this.state.upperBound
    }, s.calcValue = function(e) {
        return e / this.state.upperBound * (this.props.max - this.props.min) + this.props.min
    }, s.calcOffsetFromPosition = function(e) {
        const {
            slider: t
        } = this, s = t.getBoundingClientRect(), i = s[this.posMaxKey()], n = s[this.posMinKey()];
        let o = e - (window["page" + this.axisKey() + "Offset"] + (this.props.invert ? i : n));
        return this.props.invert && (o = this.state.sliderLength - o), o -= this.state.thumbSize / 2, o
    }, s.forceValueFromPosition = function(e, t) {
        const s = this.calcOffsetFromPosition(e),
            i = this.getClosestIndex(s),
            n = x(this.calcValue(s), this.props),
            o = this.state.value.slice();
        o[i] = n;
        for (let e = 0; e < o.length - 1; e += 1)
            if (o[e + 1] - o[e] < this.props.minDistance) return;
        this.fireChangeEvent("onBeforeChange"), this.hasMoved = !0, this.setState({
            value: o
        }, () => {
            t(i), this.fireChangeEvent("onChange")
        })
    }, s.clearPendingResizeTimeouts = function() {
        do {
            const e = this.pendingResizeTimeouts.shift();
            clearTimeout(e)
        } while (this.pendingResizeTimeouts.length)
    }, s.start = function(e, t) {
        const s = this["thumb" + e];
        s && s.focus();
        const {
            zIndices: i
        } = this.state;
        i.splice(i.indexOf(e), 1), i.push(e), this.setState(s => ({
            startValue: s.value[e],
            startPosition: void 0 !== t ? t : s.startPosition,
            index: e,
            zIndices: i
        }))
    }, s.moveUpByStep = function(e) {
        void 0 === e && (e = this.props.step);
        const t = this.state.value[this.state.index],
            s = x(this.props.invert && "horizontal" === this.props.orientation ? t - e : t + e, this.props);
        this.move(Math.min(s, this.props.max))
    }, s.moveDownByStep = function(e) {
        void 0 === e && (e = this.props.step);
        const t = this.state.value[this.state.index],
            s = x(this.props.invert && "horizontal" === this.props.orientation ? t + e : t - e, this.props);
        this.move(Math.max(s, this.props.min))
    }, s.move = function(e) {
        const t = this.state.value.slice(),
            {
                index: s
            } = this.state,
            {
                length: i
            } = t,
            n = t[s];
        if (e === n) return;
        this.hasMoved || this.fireChangeEvent("onBeforeChange"), this.hasMoved = !0;
        const {
            pearling: o,
            max: r,
            min: a,
            minDistance: l
        } = this.props;
        if (!o) {
            if (s > 0) {
                const i = t[s - 1];
                e < i + l && (e = i + l)
            }
            if (s < i - 1) {
                const i = t[s + 1];
                e > i - l && (e = i - l)
            }
        }
        t[s] = e, o && i > 1 && (e > n ? (this.pushSucceeding(t, l, s), function(e, t, s, i) {
            for (let n = 0; n < e; n += 1) {
                const o = i - n * s;
                t[e - 1 - n] > o && (t[e - 1 - n] = o)
            }
        }(i, t, l, r)) : e < n && (this.pushPreceding(t, l, s), function(e, t, s, i) {
            for (let n = 0; n < e; n += 1) {
                const e = i + n * s;
                t[n] < e && (t[n] = e)
            }
        }(i, t, l, a))), this.setState({
            value: t
        }, this.fireChangeEvent.bind(this, "onChange"))
    }, s.pushSucceeding = function(e, t, s) {
        let i, n;
        for (i = s, n = e[i] + t; null !== e[i + 1] && n > e[i + 1]; i += 1, n = e[i] + t) e[i + 1] = z(n, this.props)
    }, s.pushPreceding = function(e, t, s) {
        for (let i = s, n = e[i] - t; null !== e[i - 1] && n < e[i - 1]; i -= 1, n = e[i] - t) e[i - 1] = z(n, this.props)
    }, s.axisKey = function() {
        return "vertical" === this.props.orientation ? "Y" : "X"
    }, s.orthogonalAxisKey = function() {
        return "vertical" === this.props.orientation ? "X" : "Y"
    }, s.posMinKey = function() {
        return "vertical" === this.props.orientation ? this.props.invert ? "bottom" : "top" : this.props.invert ? "right" : "left"
    }, s.posMaxKey = function() {
        return "vertical" === this.props.orientation ? this.props.invert ? "top" : "bottom" : this.props.invert ? "left" : "right"
    }, s.sizeKey = function() {
        return "vertical" === this.props.orientation ? "clientHeight" : "clientWidth"
    }, s.fireChangeEvent = function(e) {
        this.props[e] && this.props[e](k(this.state.value), this.state.index)
    }, s.buildThumbStyle = function(e, t) {
        const s = {
            position: "absolute",
            touchAction: "none",
            willChange: this.state.index >= 0 ? this.posMinKey() : void 0,
            zIndex: this.state.zIndices.indexOf(t) + 1
        };
        return s[this.posMinKey()] = e + "px", s
    }, s.buildTrackStyle = function(e, t) {
        const s = {
            position: "absolute",
            willChange: this.state.index >= 0 ? this.posMinKey() + "," + this.posMaxKey() : void 0
        };
        return s[this.posMinKey()] = e, s[this.posMaxKey()] = t, s
    }, s.buildMarkStyle = function(e) {
        var t;
        return (t = {
            position: "absolute"
        })[this.posMinKey()] = e, t
    }, s.renderThumbs = function(e) {
        const {
            length: t
        } = e, s = [];
        for (let i = 0; i < t; i += 1) s[i] = this.buildThumbStyle(e[i], i);
        const i = [];
        for (let e = 0; e < t; e += 1) i[e] = this.renderThumb(s[e], e);
        return i
    }, s.renderTracks = function(e) {
        const t = [],
            s = e.length - 1;
        t.push(this.renderTrack(0, 0, e[0]));
        for (let i = 0; i < s; i += 1) t.push(this.renderTrack(i + 1, e[i], e[i + 1]));
        return t.push(this.renderTrack(s + 1, e[s], this.state.upperBound)), t
    }, s.renderMarks = function() {
        let {
            marks: e
        } = this.props;
        const t = this.props.max - this.props.min + 1;
        return "boolean" == typeof e ? e = Array.from({
            length: t
        }).map((e, t) => t) : "number" == typeof e && (e = Array.from({
            length: t
        }).map((e, t) => t).filter(t => t % e == 0)), e.map(parseFloat).sort((e, t) => e - t).map(e => {
            const t = this.calcOffset(e),
                s = {
                    key: e,
                    className: this.props.markClassName,
                    style: this.buildMarkStyle(t)
                };
            return this.props.renderMark(s)
        })
    }, s.render = function() {
        const e = [],
            {
                value: t
            } = this.state,
            s = t.length;
        for (let i = 0; i < s; i += 1) e[i] = this.calcOffset(t[i], i);
        const i = this.props.withTracks ? this.renderTracks(e) : null,
            n = this.renderThumbs(e),
            o = this.props.marks ? this.renderMarks() : null;
        return y.createElement("div", {
            ref: e => {
                this.slider = e, this.resizeElementRef.current = e
            },
            style: {
                position: "relative"
            },
            className: this.props.className + (this.props.disabled ? " disabled" : ""),
            onMouseDown: this.onSliderMouseDown,
            onClick: this.onSliderClick
        }, i, n, o)
    }, t
}(y.Component);
E.displayName = "ReactSlider", E.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    pageFn: e => 10 * e,
    minDistance: 0,
    defaultValue: 0,
    orientation: "horizontal",
    className: "slider",
    thumbClassName: "thumb",
    thumbActiveClassName: "active",
    trackClassName: "track",
    markClassName: "mark",
    withTracks: !0,
    pearling: !1,
    disabled: !1,
    snapDragDisabled: !1,
    invert: !1,
    marks: [],
    renderThumb: e => y.createElement("div", e),
    renderTrack: e => y.createElement("div", e),
    renderMark: e => y.createElement("span", e)
};
var L = E;
const U = e => {
    const {
        min: t = 0,
        max: s = 100,
        step: i = 1,
        disabled: n = !1,
        value: o = (t + s) / 2,
        setValue: r,
        prefix: a = "-",
        suffix: l = "+",
        isPercentage: p = !1,
        onChange: u
    } = e, [c, h] = C.useState(o), d = !isNaN(o) && r, g = d ? o : c, f = d ? r : h;
    return C.useEffect(() => {
        u ? .(g)
    }, [g]), m.jsxs("div", {
        className: "bg-dark dark:bg-light mb-8 flex h-16 items-center gap-4 rounded-lg bg-opacity-10 p-4 dark:bg-opacity-10",
        children: [!!a && m.jsx("span", {
            className: "dark:text-light text-dark whitespace-nowrap text-2xl",
            children: a
        }), m.jsx(L, {
            className: "flex w-full items-center",
            trackClassName: "h-3 rounded-full",
            renderTrack: ({
                className: e,
                ...t
            }, {
                index: s
            }) => m.jsx("div", { ...t,
                className: T(e, 0 === s ? "bg-bor-secondary mr-2" : "bg-dark dark:bg-light bg-opacity-10 dark:bg-opacity-10")
            }),
            ariaLabel: "Value",
            renderThumb: (e, {
                valueNow: t
            }) => m.jsxs("div", {
                className: "relative flex items-center",
                children: [m.jsx("div", { ...e,
                    className: T("bg-light border-bor-secondary h-10 w-10 rounded-full border-8 focus:outline-none", !n && "cursor-pointer")
                }), m.jsx("div", {
                    style: e.style,
                    className: "pointer-events-none absolute top-10 flex w-10 justify-center",
                    children: m.jsx("span", {
                        className: "dark:text-light text-dark text-xl font-bold",
                        children: `${t}${p?"%":""}`
                    })
                })]
            }),
            pearling: !0,
            minDistance: 1,
            min: t,
            max: s,
            disabled: n,
            step: i,
            defaultValue: g,
            value: g,
            onChange: e => f(e),
            snapDragDisabled: n
        }), !!l && m.jsx("span", {
            className: "dark:text-light text-dark whitespace-nowrap text-2xl",
            children: l
        })]
    })
};
export {
    F as G, U as S
};