/**
 * @popperjs/core v2.9.2 - MIT License
 */

"use strict";
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports)
        : "function" == typeof define && define.amd
        ? define(["exports"], t)
        : t(
              ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).Popper = {})
          );
})(this, function (e) {
    function t(e) {
        return {
            width: (e = e.getBoundingClientRect()).width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top,
        };
    }
    function n(e) {
        return null == e
            ? window
            : "[object Window]" !== e.toString()
            ? ((e = e.ownerDocument) && e.defaultView) || window
            : e;
    }
    function o(e) {
        return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset };
    }
    function r(e) {
        return e instanceof n(e).Element || e instanceof Element;
    }
    function i(e) {
        return e instanceof n(e).HTMLElement || e instanceof HTMLElement;
    }
    function a(e) {
        return (
            "undefined" != typeof ShadowRoot &&
            (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot)
        );
    }
    function s(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function f(e) {
        return (
            (r(e) ? e.ownerDocument : e.document) || window.document
        ).documentElement;
    }
    function p(e) {
        return t(f(e)).left + o(e).scrollLeft;
    }
    function c(e) {
        return n(e).getComputedStyle(e);
    }
    function l(e) {
        return (
            (e = c(e)),
            /auto|scroll|overlay|hidden/.test(
                e.overflow + e.overflowY + e.overflowX
            )
        );
    }
    function u(e, r, a) {
        void 0 === a && (a = !1);
        var c = f(r);
        e = t(e);
        var u = i(r),
            d = { scrollLeft: 0, scrollTop: 0 },
            m = { x: 0, y: 0 };
        return (
            (u || (!u && !a)) &&
                (("body" !== s(r) || l(c)) &&
                    (d =
                        r !== n(r) && i(r)
                            ? {
                                  scrollLeft: r.scrollLeft,
                                  scrollTop: r.scrollTop,
                              }
                            : o(r)),
                i(r)
                    ? (((m = t(r)).x += r.clientLeft), (m.y += r.clientTop))
                    : c && (m.x = p(c))),
            {
                x: e.left + d.scrollLeft - m.x,
                y: e.top + d.scrollTop - m.y,
                width: e.width,
                height: e.height,
            }
        );
    }
    function d(e) {
        var n = t(e),
            o = e.offsetWidth,
            r = e.offsetHeight;
        return (
            1 >= Math.abs(n.width - o) && (o = n.width),
            1 >= Math.abs(n.height - r) && (r = n.height),
            { x: e.offsetLeft, y: e.offsetTop, width: o, height: r }
        );
    }
    function m(e) {
        return "html" === s(e)
            ? e
            : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e);
    }
    function h(e) {
        return 0 <= ["html", "body", "#document"].indexOf(s(e))
            ? e.ownerDocument.body
            : i(e) && l(e)
            ? e
            : h(m(e));
    }
    function v(e, t) {
        var o;
        void 0 === t && (t = []);
        var r = h(e);
        return (
            (e = r === (null == (o = e.ownerDocument) ? void 0 : o.body)),
            (o = n(r)),
            (r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r),
            (t = t.concat(r)),
            e ? t : t.concat(v(m(r)))
        );
    }
    function g(e) {
        return i(e) && "fixed" !== c(e).position ? e.offsetParent : null;
    }
    function y(e) {
        for (
            var t = n(e), o = g(e);
            o &&
            0 <= ["table", "td", "th"].indexOf(s(o)) &&
            "static" === c(o).position;

        )
            o = g(o);
        if (
            o &&
            ("html" === s(o) || ("body" === s(o) && "static" === c(o).position))
        )
            return t;
        if (!o)
            e: {
                if (
                    ((o =
                        -1 !==
                        navigator.userAgent.toLowerCase().indexOf("firefox")),
                    -1 === navigator.userAgent.indexOf("Trident") ||
                        !i(e) ||
                        "fixed" !== c(e).position)
                )
                    for (
                        e = m(e);
                        i(e) && 0 > ["html", "body"].indexOf(s(e));

                    ) {
                        var r = c(e);
                        if (
                            "none" !== r.transform ||
                            "none" !== r.perspective ||
                            "paint" === r.contain ||
                            -1 !==
                                ["transform", "perspective"].indexOf(
                                    r.willChange
                                ) ||
                            (o && "filter" === r.willChange) ||
                            (o && r.filter && "none" !== r.filter)
                        ) {
                            o = e;
                            break e;
                        }
                        e = e.parentNode;
                    }
                o = null;
            }
        return o || t;
    }
    function b(e) {
        function t(e) {
            o.add(e.name),
                []
                    .concat(e.requires || [], e.requiresIfExists || [])
                    .forEach(function (e) {
                        o.has(e) || ((e = n.get(e)) && t(e));
                    }),
                r.push(e);
        }
        var n = new Map(),
            o = new Set(),
            r = [];
        return (
            e.forEach(function (e) {
                n.set(e.name, e);
            }),
            e.forEach(function (e) {
                o.has(e.name) || t(e);
            }),
            r
        );
    }
    function w(e) {
        var t;
        return function () {
            return (
                t ||
                    (t = new Promise(function (n) {
                        Promise.resolve().then(function () {
                            (t = void 0), n(e());
                        });
                    })),
                t
            );
        };
    }
    function x(e) {
        return e.split("-")[0];
    }
    function O(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && a(n))
            do {
                if (t && e.isSameNode(t)) return !0;
                t = t.parentNode || t.host;
            } while (t);
        return !1;
    }
    function j(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
        });
    }
    function E(e, r) {
        if ("viewport" === r) {
            r = n(e);
            var a = f(e);
            r = r.visualViewport;
            var s = a.clientWidth;
            a = a.clientHeight;
            var l = 0,
                u = 0;
            r &&
                ((s = r.width),
                (a = r.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                    ((l = r.offsetLeft), (u = r.offsetTop))),
                (e = j((e = { width: s, height: a, x: l + p(e), y: u })));
        } else i(r) ? (((e = t(r)).top += r.clientTop), (e.left += r.clientLeft), (e.bottom = e.top + r.clientHeight), (e.right = e.left + r.clientWidth), (e.width = r.clientWidth), (e.height = r.clientHeight), (e.x = e.left), (e.y = e.top)) : ((u = f(e)), (e = f(u)), (s = o(u)), (r = null == (a = u.ownerDocument) ? void 0 : a.body), (a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0)), (l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0)), (u = -s.scrollLeft + p(u)), (s = -s.scrollTop), "rtl" === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), (e = j({ width: a, height: l, x: u, y: s })));
        return e;
    }
    function D(e, t, n) {
        return (
            (t =
                "clippingParents" === t
                    ? (function (e) {
                          var t = v(m(e)),
                              n =
                                  0 <=
                                      ["absolute", "fixed"].indexOf(
                                          c(e).position
                                      ) && i(e)
                                      ? y(e)
                                      : e;
                          return r(n)
                              ? t.filter(function (e) {
                                    return r(e) && O(e, n) && "body" !== s(e);
                                })
                              : [];
                      })(e)
                    : [].concat(t)),
            ((n = (n = [].concat(t, [n])).reduce(function (t, n) {
                return (
                    (n = E(e, n)),
                    (t.top = _(n.top, t.top)),
                    (t.right = U(n.right, t.right)),
                    (t.bottom = U(n.bottom, t.bottom)),
                    (t.left = _(n.left, t.left)),
                    t
                );
            }, E(e, n[0]))).width = n.right - n.left),
            (n.height = n.bottom - n.top),
            (n.x = n.left),
            (n.y = n.top),
            n
        );
    }
    function L(e) {
        return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
    }
    function P(e) {
        var t = e.reference,
            n = e.element,
            o = (e = e.placement) ? x(e) : null;
        e = e ? e.split("-")[1] : null;
        var r = t.x + t.width / 2 - n.width / 2,
            i = t.y + t.height / 2 - n.height / 2;
        switch (o) {
            case "top":
                r = { x: r, y: t.y - n.height };
                break;
            case "bottom":
                r = { x: r, y: t.y + t.height };
                break;
            case "right":
                r = { x: t.x + t.width, y: i };
                break;
            case "left":
                r = { x: t.x - n.width, y: i };
                break;
            default:
                r = { x: t.x, y: t.y };
        }
        if (null != (o = o ? L(o) : null))
            switch (((i = "y" === o ? "height" : "width"), e)) {
                case "start":
                    r[o] -= t[i] / 2 - n[i] / 2;
                    break;
                case "end":
                    r[o] += t[i] / 2 - n[i] / 2;
            }
        return r;
    }
    function M(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function k(e, t) {
        return t.reduce(function (t, n) {
            return (t[n] = e), t;
        }, {});
    }
    function A(e, n) {
        void 0 === n && (n = {});
        var o = n;
        n = void 0 === (n = o.placement) ? e.placement : n;
        var i = o.boundary,
            a = void 0 === i ? "clippingParents" : i,
            s = void 0 === (i = o.rootBoundary) ? "viewport" : i;
        i = void 0 === (i = o.elementContext) ? "popper" : i;
        var p = o.altBoundary,
            c = void 0 !== p && p;
        o = M(
            "number" != typeof (o = void 0 === (o = o.padding) ? 0 : o)
                ? o
                : k(o, C)
        );
        var l = e.elements.reference;
        (p = e.rects.popper),
            (a = D(
                r(
                    (c =
                        e.elements[
                            c ? ("popper" === i ? "reference" : "popper") : i
                        ])
                )
                    ? c
                    : c.contextElement || f(e.elements.popper),
                a,
                s
            )),
            (c = P({
                reference: (s = t(l)),
                element: p,
                strategy: "absolute",
                placement: n,
            })),
            (p = j(Object.assign({}, p, c))),
            (s = "popper" === i ? p : s);
        var u = {
            top: a.top - s.top + o.top,
            bottom: s.bottom - a.bottom + o.bottom,
            left: a.left - s.left + o.left,
            right: s.right - a.right + o.right,
        };
        if (((e = e.modifiersData.offset), "popper" === i && e)) {
            var d = e[n];
            Object.keys(u).forEach(function (e) {
                var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
                    n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
                u[e] += d[n] * t;
            });
        }
        return u;
    }
    function W() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
        });
    }
    function B(e) {
        void 0 === e && (e = {});
        var t = e.defaultModifiers,
            n = void 0 === t ? [] : t,
            o = void 0 === (e = e.defaultOptions) ? F : e;
        return function (e, t, i) {
            function a() {
                f.forEach(function (e) {
                    return e();
                }),
                    (f = []);
            }
            void 0 === i && (i = o);
            var s = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, F, o),
                    modifiersData: {},
                    elements: { reference: e, popper: t },
                    attributes: {},
                    styles: {},
                },
                f = [],
                p = !1,
                c = {
                    state: s,
                    setOptions: function (i) {
                        return (
                            a(),
                            (s.options = Object.assign({}, o, s.options, i)),
                            (s.scrollParents = {
                                reference: r(e)
                                    ? v(e)
                                    : e.contextElement
                                    ? v(e.contextElement)
                                    : [],
                                popper: v(t),
                            }),
                            (i = (function (e) {
                                var t = b(e);
                                return I.reduce(function (e, n) {
                                    return e.concat(
                                        t.filter(function (e) {
                                            return e.phase === n;
                                        })
                                    );
                                }, []);
                            })(
                                (function (e) {
                                    var t = e.reduce(function (e, t) {
                                        var n = e[t.name];
                                        return (
                                            (e[t.name] = n
                                                ? Object.assign({}, n, t, {
                                                      options: Object.assign(
                                                          {},
                                                          n.options,
                                                          t.options
                                                      ),
                                                      data: Object.assign(
                                                          {},
                                                          n.data,
                                                          t.data
                                                      ),
                                                  })
                                                : t),
                                            e
                                        );
                                    }, {});
                                    return Object.keys(t).map(function (e) {
                                        return t[e];
                                    });
                                })([].concat(n, s.options.modifiers))
                            )),
                            (s.orderedModifiers = i.filter(function (e) {
                                return e.enabled;
                            })),
                            s.orderedModifiers.forEach(function (e) {
                                var t = e.name,
                                    n = e.options;
                                (n = void 0 === n ? {} : n),
                                    "function" == typeof (e = e.effect) &&
                                        ((t = e({
                                            state: s,
                                            name: t,
                                            instance: c,
                                            options: n,
                                        })),
                                        f.push(t || function () {}));
                            }),
                            c.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!p) {
                            var e = s.elements,
                                t = e.reference;
                            if (W(t, (e = e.popper)))
                                for (
                                    s.rects = {
                                        reference: u(
                                            t,
                                            y(e),
                                            "fixed" === s.options.strategy
                                        ),
                                        popper: d(e),
                                    },
                                        s.reset = !1,
                                        s.placement = s.options.placement,
                                        s.orderedModifiers.forEach(function (
                                            e
                                        ) {
                                            return (s.modifiersData[e.name] =
                                                Object.assign({}, e.data));
                                        }),
                                        t = 0;
                                    t < s.orderedModifiers.length;
                                    t++
                                )
                                    if (!0 === s.reset)
                                        (s.reset = !1), (t = -1);
                                    else {
                                        var n = s.orderedModifiers[t];
                                        e = n.fn;
                                        var o = n.options;
                                        (o = void 0 === o ? {} : o),
                                            (n = n.name),
                                            "function" == typeof e &&
                                                (s =
                                                    e({
                                                        state: s,
                                                        options: o,
                                                        name: n,
                                                        instance: c,
                                                    }) || s);
                                    }
                        }
                    },
                    update: w(function () {
                        return new Promise(function (e) {
                            c.forceUpdate(), e(s);
                        });
                    }),
                    destroy: function () {
                        a(), (p = !0);
                    },
                };
            return W(e, t)
                ? (c.setOptions(i).then(function (e) {
                      !p && i.onFirstUpdate && i.onFirstUpdate(e);
                  }),
                  c)
                : c;
        };
    }
    function T(e) {
        var t,
            o = e.popper,
            r = e.popperRect,
            i = e.placement,
            a = e.offsets,
            s = e.position,
            p = e.gpuAcceleration,
            l = e.adaptive;
        if (!0 === (e = e.roundOffsets)) {
            e = a.y;
            var u = window.devicePixelRatio || 1;
            e = { x: z(z(a.x * u) / u) || 0, y: z(z(e * u) / u) || 0 };
        } else e = "function" == typeof e ? e(a) : a;
        (e = void 0 === (e = (u = e).x) ? 0 : e),
            (u = void 0 === (u = u.y) ? 0 : u);
        var d = a.hasOwnProperty("x");
        a = a.hasOwnProperty("y");
        var m,
            h = "left",
            v = "top",
            g = window;
        if (l) {
            var b = y(o),
                w = "clientHeight",
                x = "clientWidth";
            b === n(o) &&
                "static" !== c((b = f(o))).position &&
                ((w = "scrollHeight"), (x = "scrollWidth")),
                "top" === i &&
                    ((v = "bottom"), (u -= b[w] - r.height), (u *= p ? 1 : -1)),
                "left" === i &&
                    ((h = "right"), (e -= b[x] - r.width), (e *= p ? 1 : -1));
        }
        return (
            (o = Object.assign({ position: s }, l && J)),
            p
                ? Object.assign(
                      {},
                      o,
                      (((m = {})[v] = a ? "0" : ""),
                      (m[h] = d ? "0" : ""),
                      (m.transform =
                          2 > (g.devicePixelRatio || 1)
                              ? "translate(" + e + "px, " + u + "px)"
                              : "translate3d(" + e + "px, " + u + "px, 0)"),
                      m)
                  )
                : Object.assign(
                      {},
                      o,
                      (((t = {})[v] = a ? u + "px" : ""),
                      (t[h] = d ? e + "px" : ""),
                      (t.transform = ""),
                      t)
                  )
        );
    }
    function H(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
            return $[e];
        });
    }
    function R(e) {
        return e.replace(/start|end/g, function (e) {
            return ee[e];
        });
    }
    function S(e, t, n) {
        return (
            void 0 === n && (n = { x: 0, y: 0 }),
            {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x,
            }
        );
    }
    function q(e) {
        return ["top", "right", "bottom", "left"].some(function (t) {
            return 0 <= e[t];
        });
    }
    var C = ["top", "bottom", "right", "left"],
        N = C.reduce(function (e, t) {
            return e.concat([t + "-start", t + "-end"]);
        }, []),
        V = [].concat(C, ["auto"]).reduce(function (e, t) {
            return e.concat([t, t + "-start", t + "-end"]);
        }, []),
        I =
            "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(
                " "
            ),
        _ = Math.max,
        U = Math.min,
        z = Math.round,
        F = { placement: "bottom", modifiers: [], strategy: "absolute" },
        X = { passive: !0 },
        Y = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
                var t = e.state,
                    o = e.instance,
                    r = (e = e.options).scroll,
                    i = void 0 === r || r,
                    a = void 0 === (e = e.resize) || e,
                    s = n(t.elements.popper),
                    f = [].concat(
                        t.scrollParents.reference,
                        t.scrollParents.popper
                    );
                return (
                    i &&
                        f.forEach(function (e) {
                            e.addEventListener("scroll", o.update, X);
                        }),
                    a && s.addEventListener("resize", o.update, X),
                    function () {
                        i &&
                            f.forEach(function (e) {
                                e.removeEventListener("scroll", o.update, X);
                            }),
                            a && s.removeEventListener("resize", o.update, X);
                    }
                );
            },
            data: {},
        },
        G = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
                var t = e.state;
                t.modifiersData[e.name] = P({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement,
                });
            },
            data: {},
        },
        J = { top: "auto", right: "auto", bottom: "auto", left: "auto" },
        K = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
                var t = e.state,
                    n = e.options;
                e = void 0 === (e = n.gpuAcceleration) || e;
                var o = n.adaptive;
                (o = void 0 === o || o),
                    (n = void 0 === (n = n.roundOffsets) || n),
                    (e = {
                        placement: x(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: e,
                    }),
                    null != t.modifiersData.popperOffsets &&
                        (t.styles.popper = Object.assign(
                            {},
                            t.styles.popper,
                            T(
                                Object.assign({}, e, {
                                    offsets: t.modifiersData.popperOffsets,
                                    position: t.options.strategy,
                                    adaptive: o,
                                    roundOffsets: n,
                                })
                            )
                        )),
                    null != t.modifiersData.arrow &&
                        (t.styles.arrow = Object.assign(
                            {},
                            t.styles.arrow,
                            T(
                                Object.assign({}, e, {
                                    offsets: t.modifiersData.arrow,
                                    position: "absolute",
                                    adaptive: !1,
                                    roundOffsets: n,
                                })
                            )
                        )),
                    (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                            "data-popper-placement": t.placement,
                        }
                    ));
            },
            data: {},
        },
        Q = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach(function (e) {
                    var n = t.styles[e] || {},
                        o = t.attributes[e] || {},
                        r = t.elements[e];
                    i(r) &&
                        s(r) &&
                        (Object.assign(r.style, n),
                        Object.keys(o).forEach(function (e) {
                            var t = o[e];
                            !1 === t
                                ? r.removeAttribute(e)
                                : r.setAttribute(e, !0 === t ? "" : t);
                        }));
                });
            },
            effect: function (e) {
                var t = e.state,
                    n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0",
                        },
                        arrow: { position: "absolute" },
                        reference: {},
                    };
                return (
                    Object.assign(t.elements.popper.style, n.popper),
                    (t.styles = n),
                    t.elements.arrow &&
                        Object.assign(t.elements.arrow.style, n.arrow),
                    function () {
                        Object.keys(t.elements).forEach(function (e) {
                            var o = t.elements[e],
                                r = t.attributes[e] || {};
                            (e = Object.keys(
                                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                            ).reduce(function (e, t) {
                                return (e[t] = ""), e;
                            }, {})),
                                i(o) &&
                                    s(o) &&
                                    (Object.assign(o.style, e),
                                    Object.keys(r).forEach(function (e) {
                                        o.removeAttribute(e);
                                    }));
                        });
                    }
                );
            },
            requires: ["computeStyles"],
        },
        Z = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
                var t = e.state,
                    n = e.name,
                    o = void 0 === (e = e.options.offset) ? [0, 0] : e,
                    r = (e = V.reduce(function (e, n) {
                        var r = t.rects,
                            i = x(n),
                            a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
                            s =
                                "function" == typeof o
                                    ? o(Object.assign({}, r, { placement: n }))
                                    : o;
                        return (
                            (r = (r = s[0]) || 0),
                            (s = ((s = s[1]) || 0) * a),
                            (i =
                                0 <= ["left", "right"].indexOf(i)
                                    ? { x: s, y: r }
                                    : { x: r, y: s }),
                            (e[n] = i),
                            e
                        );
                    }, {}))[t.placement],
                    i = r.x;
                (r = r.y),
                    null != t.modifiersData.popperOffsets &&
                        ((t.modifiersData.popperOffsets.x += i),
                        (t.modifiersData.popperOffsets.y += r)),
                    (t.modifiersData[n] = e);
            },
        },
        $ = { left: "right", right: "left", bottom: "top", top: "bottom" },
        ee = { start: "end", end: "start" },
        te = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    n = e.options;
                if (((e = e.name), !t.modifiersData[e]._skip)) {
                    var o = n.mainAxis;
                    o = void 0 === o || o;
                    var r = n.altAxis;
                    r = void 0 === r || r;
                    var i = n.fallbackPlacements,
                        a = n.padding,
                        s = n.boundary,
                        f = n.rootBoundary,
                        p = n.altBoundary,
                        c = n.flipVariations,
                        l = void 0 === c || c,
                        u = n.allowedAutoPlacements;
                    (c = x((n = t.options.placement))),
                        (i =
                            i ||
                            (c !== n && l
                                ? (function (e) {
                                      if ("auto" === x(e)) return [];
                                      var t = H(e);
                                      return [R(e), t, R(t)];
                                  })(n)
                                : [H(n)]));
                    var d = [n].concat(i).reduce(function (e, n) {
                        return e.concat(
                            "auto" === x(n)
                                ? (function (e, t) {
                                      void 0 === t && (t = {});
                                      var n = t.boundary,
                                          o = t.rootBoundary,
                                          r = t.padding,
                                          i = t.flipVariations,
                                          a = t.allowedAutoPlacements,
                                          s = void 0 === a ? V : a,
                                          f = t.placement.split("-")[1];
                                      0 ===
                                          (i = (t = f
                                              ? i
                                                  ? N
                                                  : N.filter(function (e) {
                                                        return (
                                                            e.split("-")[1] ===
                                                            f
                                                        );
                                                    })
                                              : C).filter(function (e) {
                                              return 0 <= s.indexOf(e);
                                          })).length && (i = t);
                                      var p = i.reduce(function (t, i) {
                                          return (
                                              (t[i] = A(e, {
                                                  placement: i,
                                                  boundary: n,
                                                  rootBoundary: o,
                                                  padding: r,
                                              })[x(i)]),
                                              t
                                          );
                                      }, {});
                                      return Object.keys(p).sort(function (
                                          e,
                                          t
                                      ) {
                                          return p[e] - p[t];
                                      });
                                  })(t, {
                                      placement: n,
                                      boundary: s,
                                      rootBoundary: f,
                                      padding: a,
                                      flipVariations: l,
                                      allowedAutoPlacements: u,
                                  })
                                : n
                        );
                    }, []);
                    (n = t.rects.reference), (i = t.rects.popper);
                    var m = new Map();
                    c = !0;
                    for (var h = d[0], v = 0; v < d.length; v++) {
                        var g = d[v],
                            y = x(g),
                            b = "start" === g.split("-")[1],
                            w = 0 <= ["top", "bottom"].indexOf(y),
                            O = w ? "width" : "height",
                            j = A(t, {
                                placement: g,
                                boundary: s,
                                rootBoundary: f,
                                altBoundary: p,
                                padding: a,
                            });
                        if (
                            ((b = w
                                ? b
                                    ? "right"
                                    : "left"
                                : b
                                ? "bottom"
                                : "top"),
                            n[O] > i[O] && (b = H(b)),
                            (O = H(b)),
                            (w = []),
                            o && w.push(0 >= j[y]),
                            r && w.push(0 >= j[b], 0 >= j[O]),
                            w.every(function (e) {
                                return e;
                            }))
                        ) {
                            (h = g), (c = !1);
                            break;
                        }
                        m.set(g, w);
                    }
                    if (c)
                        for (
                            o = function (e) {
                                var t = d.find(function (t) {
                                    if ((t = m.get(t)))
                                        return t
                                            .slice(0, e)
                                            .every(function (e) {
                                                return e;
                                            });
                                });
                                if (t) return (h = t), "break";
                            },
                                r = l ? 3 : 1;
                            0 < r && "break" !== o(r);
                            r--
                        );
                    t.placement !== h &&
                        ((t.modifiersData[e]._skip = !0),
                        (t.placement = h),
                        (t.reset = !0));
                }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
        },
        ne = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    n = e.options;
                e = e.name;
                var o = n.mainAxis,
                    r = void 0 === o || o,
                    i = void 0 !== (o = n.altAxis) && o;
                o = void 0 === (o = n.tether) || o;
                var a = n.tetherOffset,
                    s = void 0 === a ? 0 : a,
                    f = A(t, {
                        boundary: n.boundary,
                        rootBoundary: n.rootBoundary,
                        padding: n.padding,
                        altBoundary: n.altBoundary,
                    });
                n = x(t.placement);
                var p = t.placement.split("-")[1],
                    c = !p,
                    l = L(n);
                (n = "x" === l ? "y" : "x"),
                    (a = t.modifiersData.popperOffsets);
                var u = t.rects.reference,
                    m = t.rects.popper,
                    h =
                        "function" == typeof s
                            ? s(
                                  Object.assign({}, t.rects, {
                                      placement: t.placement,
                                  })
                              )
                            : s;
                if (((s = { x: 0, y: 0 }), a)) {
                    if (r || i) {
                        var v = "y" === l ? "top" : "left",
                            g = "y" === l ? "bottom" : "right",
                            b = "y" === l ? "height" : "width",
                            w = a[l],
                            O = a[l] + f[v],
                            j = a[l] - f[g],
                            E = o ? -m[b] / 2 : 0,
                            D = "start" === p ? u[b] : m[b];
                        (p = "start" === p ? -m[b] : -u[b]),
                            (m = t.elements.arrow),
                            (m = o && m ? d(m) : { width: 0, height: 0 });
                        var P = t.modifiersData["arrow#persistent"]
                            ? t.modifiersData["arrow#persistent"].padding
                            : { top: 0, right: 0, bottom: 0, left: 0 };
                        (v = P[v]),
                            (g = P[g]),
                            (m = _(0, U(u[b], m[b]))),
                            (D = c ? u[b] / 2 - E - m - v - h : D - m - v - h),
                            (u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h),
                            (c = t.elements.arrow && y(t.elements.arrow)),
                            (h = t.modifiersData.offset
                                ? t.modifiersData.offset[t.placement][l]
                                : 0),
                            (c =
                                a[l] +
                                D -
                                h -
                                (c
                                    ? "y" === l
                                        ? c.clientTop || 0
                                        : c.clientLeft || 0
                                    : 0)),
                            (u = a[l] + u - h),
                            r &&
                                ((r = o ? U(O, c) : O),
                                (j = o ? _(j, u) : j),
                                (r = _(r, U(w, j))),
                                (a[l] = r),
                                (s[l] = r - w)),
                            i &&
                                ((r =
                                    (i = a[n]) + f["x" === l ? "top" : "left"]),
                                (f = i - f["x" === l ? "bottom" : "right"]),
                                (r = o ? U(r, c) : r),
                                (o = o ? _(f, u) : f),
                                (o = _(r, U(i, o))),
                                (a[n] = o),
                                (s[n] = o - i));
                    }
                    t.modifiersData[e] = s;
                }
            },
            requiresIfExists: ["offset"],
        },
        oe = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t,
                    n = e.state,
                    o = e.name,
                    r = e.options,
                    i = n.elements.arrow,
                    a = n.modifiersData.popperOffsets,
                    s = x(n.placement);
                if (
                    ((e = L(s)),
                    (s =
                        0 <= ["left", "right"].indexOf(s) ? "height" : "width"),
                    i && a)
                ) {
                    r = M(
                        "number" !=
                            typeof (r =
                                "function" == typeof (r = r.padding)
                                    ? r(
                                          Object.assign({}, n.rects, {
                                              placement: n.placement,
                                          })
                                      )
                                    : r)
                            ? r
                            : k(r, C)
                    );
                    var f = d(i),
                        p = "y" === e ? "top" : "left",
                        c = "y" === e ? "bottom" : "right",
                        l =
                            n.rects.reference[s] +
                            n.rects.reference[e] -
                            a[e] -
                            n.rects.popper[s];
                    (a = a[e] - n.rects.reference[e]),
                        (a =
                            (i = (i = y(i))
                                ? "y" === e
                                    ? i.clientHeight || 0
                                    : i.clientWidth || 0
                                : 0) /
                                2 -
                            f[s] / 2 +
                            (l / 2 - a / 2)),
                        (s = _(r[p], U(a, i - f[s] - r[c]))),
                        (n.modifiersData[o] =
                            (((t = {})[e] = s), (t.centerOffset = s - a), t));
                }
            },
            effect: function (e) {
                var t = e.state;
                if (
                    null !=
                    (e =
                        void 0 === (e = e.options.element)
                            ? "[data-popper-arrow]"
                            : e)
                ) {
                    if (
                        "string" == typeof e &&
                        !(e = t.elements.popper.querySelector(e))
                    )
                        return;
                    O(t.elements.popper, e) && (t.elements.arrow = e);
                }
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
        },
        re = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state;
                e = e.name;
                var n = t.rects.reference,
                    o = t.rects.popper,
                    r = t.modifiersData.preventOverflow,
                    i = A(t, { elementContext: "reference" }),
                    a = A(t, { altBoundary: !0 });
                (n = S(i, n)),
                    (o = S(a, o, r)),
                    (r = q(n)),
                    (a = q(o)),
                    (t.modifiersData[e] = {
                        referenceClippingOffsets: n,
                        popperEscapeOffsets: o,
                        isReferenceHidden: r,
                        hasPopperEscaped: a,
                    }),
                    (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                            "data-popper-reference-hidden": r,
                            "data-popper-escaped": a,
                        }
                    ));
            },
        },
        ie = B({ defaultModifiers: [Y, G, K, Q] }),
        ae = [Y, G, K, Q, Z, te, ne, oe, re],
        se = B({ defaultModifiers: ae });
    (e.applyStyles = Q),
        (e.arrow = oe),
        (e.computeStyles = K),
        (e.createPopper = se),
        (e.createPopperLite = ie),
        (e.defaultModifiers = ae),
        (e.detectOverflow = A),
        (e.eventListeners = Y),
        (e.flip = te),
        (e.hide = re),
        (e.offset = Z),
        (e.popperGenerator = B),
        (e.popperOffsets = G),
        (e.preventOverflow = ne),
        Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=popper.min.js.map

!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t(require("@popperjs/core")))
        : "function" == typeof define && define.amd
        ? define(["@popperjs/core"], t)
        : ((e = e || self).tippy = t(e.Popper));
})(this, function (e) {
    "use strict";
    var t = { passive: !0, capture: !0 };
    function n(e, t, n) {
        if (Array.isArray(e)) {
            var r = e[t];
            return null == r ? (Array.isArray(n) ? n[t] : n) : r;
        }
        return e;
    }
    function r(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
    }
    function i(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
    }
    function o(e, t) {
        return 0 === t
            ? e
            : function (r) {
                  clearTimeout(n),
                      (n = setTimeout(function () {
                          e(r);
                      }, t));
              };
        var n;
    }
    function a(e, t) {
        var n = Object.assign({}, e);
        return (
            t.forEach(function (e) {
                delete n[e];
            }),
            n
        );
    }
    function s(e) {
        return [].concat(e);
    }
    function u(e, t) {
        -1 === e.indexOf(t) && e.push(t);
    }
    function c(e) {
        return e.split("-")[0];
    }
    function p(e) {
        return [].slice.call(e);
    }
    function f() {
        return document.createElement("div");
    }
    function l(e) {
        return ["Element", "Fragment"].some(function (t) {
            return r(e, t);
        });
    }
    function d(e) {
        return r(e, "MouseEvent");
    }
    function v(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
    }
    function m(e) {
        return l(e)
            ? [e]
            : (function (e) {
                  return r(e, "NodeList");
              })(e)
            ? p(e)
            : Array.isArray(e)
            ? e
            : p(document.querySelectorAll(e));
    }
    function g(e, t) {
        e.forEach(function (e) {
            e && (e.style.transitionDuration = t + "ms");
        });
    }
    function h(e, t) {
        e.forEach(function (e) {
            e && e.setAttribute("data-state", t);
        });
    }
    function b(e) {
        var t,
            n = s(e)[0];
        return (null == n || null == (t = n.ownerDocument) ? void 0 : t.body)
            ? n.ownerDocument
            : document;
    }
    function y(e, t, n) {
        var r = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
            e[r](t, n);
        });
    }
    var w = { isTouch: !1 },
        E = 0;
    function O() {
        w.isTouch ||
            ((w.isTouch = !0),
            window.performance && document.addEventListener("mousemove", T));
    }
    function T() {
        var e = performance.now();
        e - E < 20 &&
            ((w.isTouch = !1), document.removeEventListener("mousemove", T)),
            (E = e);
    }
    function C() {
        var e = document.activeElement;
        if (v(e)) {
            var t = e._tippy;
            e.blur && !t.state.isVisible && e.blur();
        }
    }
    var x =
            "undefined" != typeof window && "undefined" != typeof document
                ? navigator.userAgent
                : "",
        A = /MSIE |Trident\//.test(x),
        L = Object.assign(
            {
                appendTo: function () {
                    return document.body;
                },
                aria: { content: "auto", expanded: "auto" },
                delay: 0,
                duration: [300, 250],
                getReferenceClientRect: null,
                hideOnClick: !0,
                ignoreAttributes: !1,
                interactive: !1,
                interactiveBorder: 2,
                interactiveDebounce: 0,
                moveTransition: "",
                offset: [0, 10],
                onAfterUpdate: function () {},
                onBeforeUpdate: function () {},
                onCreate: function () {},
                onDestroy: function () {},
                onHidden: function () {},
                onHide: function () {},
                onMount: function () {},
                onShow: function () {},
                onShown: function () {},
                onTrigger: function () {},
                onUntrigger: function () {},
                onClickOutside: function () {},
                placement: "top",
                plugins: [],
                popperOptions: {},
                render: null,
                showOnCreate: !1,
                touch: !0,
                trigger: "mouseenter focus",
                triggerTarget: null,
            },
            {
                animateFill: !1,
                followCursor: !1,
                inlinePositioning: !1,
                sticky: !1,
            },
            {},
            {
                allowHTML: !1,
                animation: "fade",
                arrow: !0,
                content: "",
                inertia: !1,
                maxWidth: 350,
                role: "tooltip",
                theme: "",
                zIndex: 9999,
            }
        ),
        D = Object.keys(L);
    function k(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
            var r = n.name,
                i = n.defaultValue;
            return r && (t[r] = void 0 !== e[r] ? e[r] : i), t;
        }, {});
        return Object.assign({}, e, {}, t);
    }
    function R(e, t) {
        var n = Object.assign(
            {},
            t,
            { content: i(t.content, [e]) },
            t.ignoreAttributes
                ? {}
                : (function (e, t) {
                      return (
                          t
                              ? Object.keys(
                                    k(Object.assign({}, L, { plugins: t }))
                                )
                              : D
                      ).reduce(function (t, n) {
                          var r = (
                              e.getAttribute("data-tippy-" + n) || ""
                          ).trim();
                          if (!r) return t;
                          if ("content" === n) t[n] = r;
                          else
                              try {
                                  t[n] = JSON.parse(r);
                              } catch (e) {
                                  t[n] = r;
                              }
                          return t;
                      }, {});
                  })(e, t.plugins)
        );
        return (
            (n.aria = Object.assign({}, L.aria, {}, n.aria)),
            (n.aria = {
                expanded:
                    "auto" === n.aria.expanded
                        ? t.interactive
                        : n.aria.expanded,
                content:
                    "auto" === n.aria.content
                        ? t.interactive
                            ? null
                            : "describedby"
                        : n.aria.content,
            }),
            n
        );
    }
    function j(e, t) {
        e.innerHTML = t;
    }
    function M(e) {
        var t = f();
        return (
            !0 === e
                ? (t.className = "tippy-arrow")
                : ((t.className = "tippy-svg-arrow"),
                  l(e) ? t.appendChild(e) : j(t, e)),
            t
        );
    }
    function P(e, t) {
        l(t.content)
            ? (j(e, ""), e.appendChild(t.content))
            : "function" != typeof t.content &&
              (t.allowHTML ? j(e, t.content) : (e.textContent = t.content));
    }
    function V(e) {
        var t = e.firstElementChild,
            n = p(t.children);
        return {
            box: t,
            content: n.find(function (e) {
                return e.classList.contains("tippy-content");
            }),
            arrow: n.find(function (e) {
                return (
                    e.classList.contains("tippy-arrow") ||
                    e.classList.contains("tippy-svg-arrow")
                );
            }),
            backdrop: n.find(function (e) {
                return e.classList.contains("tippy-backdrop");
            }),
        };
    }
    function I(e) {
        var t = f(),
            n = f();
        (n.className = "tippy-box"),
            n.setAttribute("data-state", "hidden"),
            n.setAttribute("tabindex", "-1");
        var r = f();
        function i(n, r) {
            var i = V(t),
                o = i.box,
                a = i.content,
                s = i.arrow;
            r.theme
                ? o.setAttribute("data-theme", r.theme)
                : o.removeAttribute("data-theme"),
                "string" == typeof r.animation
                    ? o.setAttribute("data-animation", r.animation)
                    : o.removeAttribute("data-animation"),
                r.inertia
                    ? o.setAttribute("data-inertia", "")
                    : o.removeAttribute("data-inertia"),
                (o.style.maxWidth =
                    "number" == typeof r.maxWidth
                        ? r.maxWidth + "px"
                        : r.maxWidth),
                r.role
                    ? o.setAttribute("role", r.role)
                    : o.removeAttribute("role"),
                (n.content === r.content && n.allowHTML === r.allowHTML) ||
                    P(a, e.props),
                r.arrow
                    ? s
                        ? n.arrow !== r.arrow &&
                          (o.removeChild(s), o.appendChild(M(r.arrow)))
                        : o.appendChild(M(r.arrow))
                    : s && o.removeChild(s);
        }
        return (
            (r.className = "tippy-content"),
            r.setAttribute("data-state", "hidden"),
            P(r, e.props),
            t.appendChild(n),
            n.appendChild(r),
            i(e.props, e.props),
            { popper: t, onUpdate: i }
        );
    }
    I.$$tippy = !0;
    var S = 1,
        B = [],
        H = [];
    function N(r, a) {
        var l,
            v,
            m,
            E,
            O,
            T,
            C,
            x,
            D,
            j = R(
                r,
                Object.assign(
                    {},
                    L,
                    {},
                    k(
                        ((l = a),
                        Object.keys(l).reduce(function (e, t) {
                            return void 0 !== l[t] && (e[t] = l[t]), e;
                        }, {}))
                    )
                )
            ),
            M = !1,
            P = !1,
            I = !1,
            N = !1,
            U = [],
            _ = o(be, j.interactiveDebounce),
            F = S++,
            W = (D = j.plugins).filter(function (e, t) {
                return D.indexOf(e) === t;
            }),
            X = {
                id: F,
                reference: r,
                popper: f(),
                popperInstance: null,
                props: j,
                state: {
                    isEnabled: !0,
                    isVisible: !1,
                    isDestroyed: !1,
                    isMounted: !1,
                    isShown: !1,
                },
                plugins: W,
                clearDelayTimeouts: function () {
                    clearTimeout(v), clearTimeout(m), cancelAnimationFrame(E);
                },
                setProps: function (e) {
                    if (X.state.isDestroyed) return;
                    ie("onBeforeUpdate", [X, e]), ge();
                    var t = X.props,
                        n = R(
                            r,
                            Object.assign({}, X.props, {}, e, {
                                ignoreAttributes: !0,
                            })
                        );
                    (X.props = n),
                        me(),
                        t.interactiveDebounce !== n.interactiveDebounce &&
                            (se(), (_ = o(be, n.interactiveDebounce)));
                    t.triggerTarget && !n.triggerTarget
                        ? s(t.triggerTarget).forEach(function (e) {
                              e.removeAttribute("aria-expanded");
                          })
                        : n.triggerTarget && r.removeAttribute("aria-expanded");
                    ae(), re(), q && q(t, n);
                    X.popperInstance &&
                        (Oe(),
                        Ce().forEach(function (e) {
                            requestAnimationFrame(
                                e._tippy.popperInstance.forceUpdate
                            );
                        }));
                    ie("onAfterUpdate", [X, e]);
                },
                setContent: function (e) {
                    X.setProps({ content: e });
                },
                show: function () {
                    var e = X.state.isVisible,
                        t = X.state.isDestroyed,
                        r = !X.state.isEnabled,
                        o = w.isTouch && !X.props.touch,
                        a = n(X.props.duration, 0, L.duration);
                    if (e || t || r || o) return;
                    if (Z().hasAttribute("disabled")) return;
                    if ((ie("onShow", [X], !1), !1 === X.props.onShow(X)))
                        return;
                    (X.state.isVisible = !0),
                        Q() && ($.style.visibility = "visible");
                    re(),
                        fe(),
                        X.state.isMounted || ($.style.transition = "none");
                    if (Q()) {
                        var s = te(),
                            c = s.box,
                            p = s.content;
                        g([c, p], 0);
                    }
                    (C = function () {
                        var e;
                        if (X.state.isVisible && !N) {
                            if (
                                ((N = !0),
                                $.offsetHeight,
                                ($.style.transition = X.props.moveTransition),
                                Q() && X.props.animation)
                            ) {
                                var t = te(),
                                    n = t.box,
                                    r = t.content;
                                g([n, r], a), h([n, r], "visible");
                            }
                            oe(),
                                ae(),
                                u(H, X),
                                null == (e = X.popperInstance) ||
                                    e.forceUpdate(),
                                (X.state.isMounted = !0),
                                ie("onMount", [X]),
                                X.props.animation &&
                                    Q() &&
                                    (function (e, t) {
                                        de(e, t);
                                    })(a, function () {
                                        (X.state.isShown = !0),
                                            ie("onShown", [X]);
                                    });
                        }
                    }),
                        (function () {
                            var e,
                                t = X.props.appendTo,
                                n = Z();
                            e =
                                (X.props.interactive && t === L.appendTo) ||
                                "parent" === t
                                    ? n.parentNode
                                    : i(t, [n]);
                            e.contains($) || e.appendChild($);
                            Oe();
                        })();
                },
                hide: function () {
                    var e = !X.state.isVisible,
                        t = X.state.isDestroyed,
                        r = !X.state.isEnabled,
                        i = n(X.props.duration, 1, L.duration);
                    if (e || t || r) return;
                    if ((ie("onHide", [X], !1), !1 === X.props.onHide(X)))
                        return;
                    (X.state.isVisible = !1),
                        (X.state.isShown = !1),
                        (N = !1),
                        (M = !1),
                        Q() && ($.style.visibility = "hidden");
                    if ((se(), le(), re(), Q())) {
                        var o = te(),
                            a = o.box,
                            s = o.content;
                        X.props.animation &&
                            (g([a, s], i), h([a, s], "hidden"));
                    }
                    oe(),
                        ae(),
                        X.props.animation
                            ? Q() &&
                              (function (e, t) {
                                  de(e, function () {
                                      !X.state.isVisible &&
                                          $.parentNode &&
                                          $.parentNode.contains($) &&
                                          t();
                                  });
                              })(i, X.unmount)
                            : X.unmount();
                },
                hideWithInteractivity: function (e) {
                    ee().addEventListener("mousemove", _), u(B, _), _(e);
                },
                enable: function () {
                    X.state.isEnabled = !0;
                },
                disable: function () {
                    X.hide(), (X.state.isEnabled = !1);
                },
                unmount: function () {
                    X.state.isVisible && X.hide();
                    if (!X.state.isMounted) return;
                    Te(),
                        Ce().forEach(function (e) {
                            e._tippy.unmount();
                        }),
                        $.parentNode && $.parentNode.removeChild($);
                    (H = H.filter(function (e) {
                        return e !== X;
                    })),
                        (X.state.isMounted = !1),
                        ie("onHidden", [X]);
                },
                destroy: function () {
                    if (X.state.isDestroyed) return;
                    X.clearDelayTimeouts(),
                        X.unmount(),
                        ge(),
                        delete r._tippy,
                        (X.state.isDestroyed = !0),
                        ie("onDestroy", [X]);
                },
            };
        if (!j.render) return X;
        var Y = j.render(X),
            $ = Y.popper,
            q = Y.onUpdate;
        $.setAttribute("data-tippy-root", ""),
            ($.id = "tippy-" + X.id),
            (X.popper = $),
            (r._tippy = X),
            ($._tippy = X);
        var z = W.map(function (e) {
                return e.fn(X);
            }),
            J = r.hasAttribute("aria-expanded");
        return (
            me(),
            ae(),
            re(),
            ie("onCreate", [X]),
            j.showOnCreate && xe(),
            $.addEventListener("mouseenter", function () {
                X.props.interactive &&
                    X.state.isVisible &&
                    X.clearDelayTimeouts();
            }),
            $.addEventListener("mouseleave", function (e) {
                X.props.interactive &&
                    X.props.trigger.indexOf("mouseenter") >= 0 &&
                    (ee().addEventListener("mousemove", _), _(e));
            }),
            X
        );
        function G() {
            var e = X.props.touch;
            return Array.isArray(e) ? e : [e, 0];
        }
        function K() {
            return "hold" === G()[0];
        }
        function Q() {
            var e;
            return !!(null == (e = X.props.render) ? void 0 : e.$$tippy);
        }
        function Z() {
            return x || r;
        }
        function ee() {
            var e = Z().parentNode;
            return e ? b(e) : document;
        }
        function te() {
            return V($);
        }
        function ne(e) {
            return (X.state.isMounted && !X.state.isVisible) ||
                w.isTouch ||
                (O && "focus" === O.type)
                ? 0
                : n(X.props.delay, e ? 0 : 1, L.delay);
        }
        function re() {
            ($.style.pointerEvents =
                X.props.interactive && X.state.isVisible ? "" : "none"),
                ($.style.zIndex = "" + X.props.zIndex);
        }
        function ie(e, t, n) {
            var r;
            (void 0 === n && (n = !0),
            z.forEach(function (n) {
                n[e] && n[e].apply(void 0, t);
            }),
            n) && (r = X.props)[e].apply(r, t);
        }
        function oe() {
            var e = X.props.aria;
            if (e.content) {
                var t = "aria-" + e.content,
                    n = $.id;
                s(X.props.triggerTarget || r).forEach(function (e) {
                    var r = e.getAttribute(t);
                    if (X.state.isVisible)
                        e.setAttribute(t, r ? r + " " + n : n);
                    else {
                        var i = r && r.replace(n, "").trim();
                        i ? e.setAttribute(t, i) : e.removeAttribute(t);
                    }
                });
            }
        }
        function ae() {
            !J &&
                X.props.aria.expanded &&
                s(X.props.triggerTarget || r).forEach(function (e) {
                    X.props.interactive
                        ? e.setAttribute(
                              "aria-expanded",
                              X.state.isVisible && e === Z() ? "true" : "false"
                          )
                        : e.removeAttribute("aria-expanded");
                });
        }
        function se() {
            ee().removeEventListener("mousemove", _),
                (B = B.filter(function (e) {
                    return e !== _;
                }));
        }
        function ue(e) {
            if (
                !(
                    (w.isTouch && (I || "mousedown" === e.type)) ||
                    (X.props.interactive && $.contains(e.target))
                )
            ) {
                if (Z().contains(e.target)) {
                    if (w.isTouch) return;
                    if (
                        X.state.isVisible &&
                        X.props.trigger.indexOf("click") >= 0
                    )
                        return;
                } else ie("onClickOutside", [X, e]);
                !0 === X.props.hideOnClick &&
                    (X.clearDelayTimeouts(),
                    X.hide(),
                    (P = !0),
                    setTimeout(function () {
                        P = !1;
                    }),
                    X.state.isMounted || le());
            }
        }
        function ce() {
            I = !0;
        }
        function pe() {
            I = !1;
        }
        function fe() {
            var e = ee();
            e.addEventListener("mousedown", ue, !0),
                e.addEventListener("touchend", ue, t),
                e.addEventListener("touchstart", pe, t),
                e.addEventListener("touchmove", ce, t);
        }
        function le() {
            var e = ee();
            e.removeEventListener("mousedown", ue, !0),
                e.removeEventListener("touchend", ue, t),
                e.removeEventListener("touchstart", pe, t),
                e.removeEventListener("touchmove", ce, t);
        }
        function de(e, t) {
            var n = te().box;
            function r(e) {
                e.target === n && (y(n, "remove", r), t());
            }
            if (0 === e) return t();
            y(n, "remove", T), y(n, "add", r), (T = r);
        }
        function ve(e, t, n) {
            void 0 === n && (n = !1),
                s(X.props.triggerTarget || r).forEach(function (r) {
                    r.addEventListener(e, t, n),
                        U.push({
                            node: r,
                            eventType: e,
                            handler: t,
                            options: n,
                        });
                });
        }
        function me() {
            var e;
            K() &&
                (ve("touchstart", he, { passive: !0 }),
                ve("touchend", ye, { passive: !0 })),
                ((e = X.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(
                    function (e) {
                        if ("manual" !== e)
                            switch ((ve(e, he), e)) {
                                case "mouseenter":
                                    ve("mouseleave", ye);
                                    break;
                                case "focus":
                                    ve(A ? "focusout" : "blur", we);
                                    break;
                                case "focusin":
                                    ve("focusout", we);
                            }
                    }
                );
        }
        function ge() {
            U.forEach(function (e) {
                var t = e.node,
                    n = e.eventType,
                    r = e.handler,
                    i = e.options;
                t.removeEventListener(n, r, i);
            }),
                (U = []);
        }
        function he(e) {
            var t,
                n = !1;
            if (X.state.isEnabled && !Ee(e) && !P) {
                var r = "focus" === (null == (t = O) ? void 0 : t.type);
                (O = e),
                    (x = e.currentTarget),
                    ae(),
                    !X.state.isVisible &&
                        d(e) &&
                        B.forEach(function (t) {
                            return t(e);
                        }),
                    "click" === e.type &&
                    (X.props.trigger.indexOf("mouseenter") < 0 || M) &&
                    !1 !== X.props.hideOnClick &&
                    X.state.isVisible
                        ? (n = !0)
                        : xe(e),
                    "click" === e.type && (M = !n),
                    n && !r && Ae(e);
            }
        }
        function be(e) {
            var t = e.target,
                n = Z().contains(t) || $.contains(t);
            ("mousemove" === e.type && n) ||
                ((function (e, t) {
                    var n = t.clientX,
                        r = t.clientY;
                    return e.every(function (e) {
                        var t = e.popperRect,
                            i = e.popperState,
                            o = e.props.interactiveBorder,
                            a = c(i.placement),
                            s = i.modifiersData.offset;
                        if (!s) return !0;
                        var u = "bottom" === a ? s.top.y : 0,
                            p = "top" === a ? s.bottom.y : 0,
                            f = "right" === a ? s.left.x : 0,
                            l = "left" === a ? s.right.x : 0,
                            d = t.top - r + u > o,
                            v = r - t.bottom - p > o,
                            m = t.left - n + f > o,
                            g = n - t.right - l > o;
                        return d || v || m || g;
                    });
                })(
                    Ce()
                        .concat($)
                        .map(function (e) {
                            var t,
                                n =
                                    null == (t = e._tippy.popperInstance)
                                        ? void 0
                                        : t.state;
                            return n
                                ? {
                                      popperRect: e.getBoundingClientRect(),
                                      popperState: n,
                                      props: j,
                                  }
                                : null;
                        })
                        .filter(Boolean),
                    e
                ) &&
                    (se(), Ae(e)));
        }
        function ye(e) {
            Ee(e) ||
                (X.props.trigger.indexOf("click") >= 0 && M) ||
                (X.props.interactive ? X.hideWithInteractivity(e) : Ae(e));
        }
        function we(e) {
            (X.props.trigger.indexOf("focusin") < 0 && e.target !== Z()) ||
                (X.props.interactive &&
                    e.relatedTarget &&
                    $.contains(e.relatedTarget)) ||
                Ae(e);
        }
        function Ee(e) {
            return !!w.isTouch && K() !== e.type.indexOf("touch") >= 0;
        }
        function Oe() {
            Te();
            var t = X.props,
                n = t.popperOptions,
                i = t.placement,
                o = t.offset,
                a = t.getReferenceClientRect,
                s = t.moveTransition,
                u = Q() ? V($).arrow : null,
                c = a
                    ? {
                          getBoundingClientRect: a,
                          contextElement: a.contextElement || Z(),
                      }
                    : r,
                p = [
                    { name: "offset", options: { offset: o } },
                    {
                        name: "preventOverflow",
                        options: {
                            padding: { top: 2, bottom: 2, left: 5, right: 5 },
                        },
                    },
                    { name: "flip", options: { padding: 5 } },
                    { name: "computeStyles", options: { adaptive: !s } },
                    {
                        name: "$$tippy",
                        enabled: !0,
                        phase: "beforeWrite",
                        requires: ["computeStyles"],
                        fn: function (e) {
                            var t = e.state;
                            if (Q()) {
                                var n = te().box;
                                [
                                    "placement",
                                    "reference-hidden",
                                    "escaped",
                                ].forEach(function (e) {
                                    "placement" === e
                                        ? n.setAttribute(
                                              "data-placement",
                                              t.placement
                                          )
                                        : t.attributes.popper[
                                              "data-popper-" + e
                                          ]
                                        ? n.setAttribute("data-" + e, "")
                                        : n.removeAttribute("data-" + e);
                                }),
                                    (t.attributes.popper = {});
                            }
                        },
                    },
                ];
            Q() &&
                u &&
                p.push({ name: "arrow", options: { element: u, padding: 3 } }),
                p.push.apply(p, (null == n ? void 0 : n.modifiers) || []),
                (X.popperInstance = e.createPopper(
                    c,
                    $,
                    Object.assign({}, n, {
                        placement: i,
                        onFirstUpdate: C,
                        modifiers: p,
                    })
                ));
        }
        function Te() {
            X.popperInstance &&
                (X.popperInstance.destroy(), (X.popperInstance = null));
        }
        function Ce() {
            return p($.querySelectorAll("[data-tippy-root]"));
        }
        function xe(e) {
            X.clearDelayTimeouts(), e && ie("onTrigger", [X, e]), fe();
            var t = ne(!0),
                n = G(),
                r = n[0],
                i = n[1];
            w.isTouch && "hold" === r && i && (t = i),
                t
                    ? (v = setTimeout(function () {
                          X.show();
                      }, t))
                    : X.show();
        }
        function Ae(e) {
            if (
                (X.clearDelayTimeouts(),
                ie("onUntrigger", [X, e]),
                X.state.isVisible)
            ) {
                if (
                    !(
                        X.props.trigger.indexOf("mouseenter") >= 0 &&
                        X.props.trigger.indexOf("click") >= 0 &&
                        ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                        M
                    )
                ) {
                    var t = ne(!1);
                    t
                        ? (m = setTimeout(function () {
                              X.state.isVisible && X.hide();
                          }, t))
                        : (E = requestAnimationFrame(function () {
                              X.hide();
                          }));
                }
            } else le();
        }
    }
    function U(e, n) {
        void 0 === n && (n = {});
        var r = L.plugins.concat(n.plugins || []);
        document.addEventListener("touchstart", O, t),
            window.addEventListener("blur", C);
        var i = Object.assign({}, n, { plugins: r }),
            o = m(e).reduce(function (e, t) {
                var n = t && N(t, i);
                return n && e.push(n), e;
            }, []);
        return l(e) ? o[0] : o;
    }
    (U.defaultProps = L),
        (U.setDefaultProps = function (e) {
            Object.keys(e).forEach(function (t) {
                L[t] = e[t];
            });
        }),
        (U.currentInput = w);
    var _ = Object.assign({}, e.applyStyles, {
            effect: function (e) {
                var t = e.state,
                    n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0",
                        },
                        arrow: { position: "absolute" },
                        reference: {},
                    };
                Object.assign(t.elements.popper.style, n.popper),
                    (t.styles = n),
                    t.elements.arrow &&
                        Object.assign(t.elements.arrow.style, n.arrow);
            },
        }),
        F = { mouseover: "mouseenter", focusin: "focus", click: "click" };
    var W = {
        name: "animateFill",
        defaultValue: !1,
        fn: function (e) {
            var t;
            if (!(null == (t = e.props.render) ? void 0 : t.$$tippy)) return {};
            var n = V(e.popper),
                r = n.box,
                i = n.content,
                o = e.props.animateFill
                    ? (function () {
                          var e = f();
                          return (
                              (e.className = "tippy-backdrop"),
                              h([e], "hidden"),
                              e
                          );
                      })()
                    : null;
            return {
                onCreate: function () {
                    o &&
                        (r.insertBefore(o, r.firstElementChild),
                        r.setAttribute("data-animatefill", ""),
                        (r.style.overflow = "hidden"),
                        e.setProps({ arrow: !1, animation: "shift-away" }));
                },
                onMount: function () {
                    if (o) {
                        var e = r.style.transitionDuration,
                            t = Number(e.replace("ms", ""));
                        (i.style.transitionDelay = Math.round(t / 10) + "ms"),
                            (o.style.transitionDuration = e),
                            h([o], "visible");
                    }
                },
                onShow: function () {
                    o && (o.style.transitionDuration = "0ms");
                },
                onHide: function () {
                    o && h([o], "hidden");
                },
            };
        },
    };
    var X = { clientX: 0, clientY: 0 },
        Y = [];
    function $(e) {
        var t = e.clientX,
            n = e.clientY;
        X = { clientX: t, clientY: n };
    }
    var q = {
        name: "followCursor",
        defaultValue: !1,
        fn: function (e) {
            var t = e.reference,
                n = b(e.props.triggerTarget || t),
                r = !1,
                i = !1,
                o = !0,
                a = e.props;
            function s() {
                return "initial" === e.props.followCursor && e.state.isVisible;
            }
            function u() {
                n.addEventListener("mousemove", f);
            }
            function c() {
                n.removeEventListener("mousemove", f);
            }
            function p() {
                (r = !0),
                    e.setProps({ getReferenceClientRect: null }),
                    (r = !1);
            }
            function f(n) {
                var r = !n.target || t.contains(n.target),
                    i = e.props.followCursor,
                    o = n.clientX,
                    a = n.clientY,
                    s = t.getBoundingClientRect(),
                    u = o - s.left,
                    c = a - s.top;
                (!r && e.props.interactive) ||
                    e.setProps({
                        getReferenceClientRect: function () {
                            var e = t.getBoundingClientRect(),
                                n = o,
                                r = a;
                            "initial" === i &&
                                ((n = e.left + u), (r = e.top + c));
                            var s = "horizontal" === i ? e.top : r,
                                p = "vertical" === i ? e.right : n,
                                f = "horizontal" === i ? e.bottom : r,
                                l = "vertical" === i ? e.left : n;
                            return {
                                width: p - l,
                                height: f - s,
                                top: s,
                                right: p,
                                bottom: f,
                                left: l,
                            };
                        },
                    });
            }
            function l() {
                e.props.followCursor &&
                    (Y.push({ instance: e, doc: n }),
                    (function (e) {
                        e.addEventListener("mousemove", $);
                    })(n));
            }
            function v() {
                0 ===
                    (Y = Y.filter(function (t) {
                        return t.instance !== e;
                    })).filter(function (e) {
                        return e.doc === n;
                    }).length &&
                    (function (e) {
                        e.removeEventListener("mousemove", $);
                    })(n);
            }
            return {
                onCreate: l,
                onDestroy: v,
                onBeforeUpdate: function () {
                    a = e.props;
                },
                onAfterUpdate: function (t, n) {
                    var o = n.followCursor;
                    r ||
                        (void 0 !== o &&
                            a.followCursor !== o &&
                            (v(),
                            o
                                ? (l(), !e.state.isMounted || i || s() || u())
                                : (c(), p())));
                },
                onMount: function () {
                    e.props.followCursor &&
                        !i &&
                        (o && (f(X), (o = !1)), s() || u());
                },
                onTrigger: function (e, t) {
                    d(t) && (X = { clientX: t.clientX, clientY: t.clientY }),
                        (i = "focus" === t.type);
                },
                onHidden: function () {
                    e.props.followCursor && (p(), c(), (o = !0));
                },
            };
        },
    };
    var z = {
        name: "inlinePositioning",
        defaultValue: !1,
        fn: function (e) {
            var t,
                n = e.reference;
            var r = -1,
                i = !1,
                o = {
                    name: "tippyInlinePositioning",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: function (i) {
                        var o = i.state;
                        e.props.inlinePositioning &&
                            (t !== o.placement &&
                                e.setProps({
                                    getReferenceClientRect: function () {
                                        return (function (e) {
                                            return (function (e, t, n, r) {
                                                if (n.length < 2 || null === e)
                                                    return t;
                                                if (
                                                    2 === n.length &&
                                                    r >= 0 &&
                                                    n[0].left > n[1].right
                                                )
                                                    return n[r] || t;
                                                switch (e) {
                                                    case "top":
                                                    case "bottom":
                                                        var i = n[0],
                                                            o = n[n.length - 1],
                                                            a = "top" === e,
                                                            s = i.top,
                                                            u = o.bottom,
                                                            c = a
                                                                ? i.left
                                                                : o.left,
                                                            p = a
                                                                ? i.right
                                                                : o.right;
                                                        return {
                                                            top: s,
                                                            bottom: u,
                                                            left: c,
                                                            right: p,
                                                            width: p - c,
                                                            height: u - s,
                                                        };
                                                    case "left":
                                                    case "right":
                                                        var f = Math.min.apply(
                                                                Math,
                                                                n.map(function (
                                                                    e
                                                                ) {
                                                                    return e.left;
                                                                })
                                                            ),
                                                            l = Math.max.apply(
                                                                Math,
                                                                n.map(function (
                                                                    e
                                                                ) {
                                                                    return e.right;
                                                                })
                                                            ),
                                                            d = n.filter(
                                                                function (t) {
                                                                    return "left" ===
                                                                        e
                                                                        ? t.left ===
                                                                              f
                                                                        : t.right ===
                                                                              l;
                                                                }
                                                            ),
                                                            v = d[0].top,
                                                            m =
                                                                d[d.length - 1]
                                                                    .bottom;
                                                        return {
                                                            top: v,
                                                            bottom: m,
                                                            left: f,
                                                            right: l,
                                                            width: l - f,
                                                            height: m - v,
                                                        };
                                                    default:
                                                        return t;
                                                }
                                            })(
                                                c(e),
                                                n.getBoundingClientRect(),
                                                p(n.getClientRects()),
                                                r
                                            );
                                        })(o.placement);
                                    },
                                }),
                            (t = o.placement));
                    },
                };
            function a() {
                var t;
                i ||
                    ((t = (function (e, t) {
                        var n;
                        return {
                            popperOptions: Object.assign({}, e.popperOptions, {
                                modifiers: [].concat(
                                    (
                                        (null == (n = e.popperOptions)
                                            ? void 0
                                            : n.modifiers) || []
                                    ).filter(function (e) {
                                        return e.name !== t.name;
                                    }),
                                    [t]
                                ),
                            }),
                        };
                    })(e.props, o)),
                    (i = !0),
                    e.setProps(t),
                    (i = !1));
            }
            return {
                onCreate: a,
                onAfterUpdate: a,
                onTrigger: function (t, n) {
                    if (d(n)) {
                        var i = p(e.reference.getClientRects()),
                            o = i.find(function (e) {
                                return (
                                    e.left - 2 <= n.clientX &&
                                    e.right + 2 >= n.clientX &&
                                    e.top - 2 <= n.clientY &&
                                    e.bottom + 2 >= n.clientY
                                );
                            });
                        r = i.indexOf(o);
                    }
                },
                onUntrigger: function () {
                    r = -1;
                },
            };
        },
    };
    var J = {
        name: "sticky",
        defaultValue: !1,
        fn: function (e) {
            var t = e.reference,
                n = e.popper;
            function r(t) {
                return !0 === e.props.sticky || e.props.sticky === t;
            }
            var i = null,
                o = null;
            function a() {
                var s = r("reference")
                        ? (e.popperInstance
                              ? e.popperInstance.state.elements.reference
                              : t
                          ).getBoundingClientRect()
                        : null,
                    u = r("popper") ? n.getBoundingClientRect() : null;
                ((s && G(i, s)) || (u && G(o, u))) &&
                    e.popperInstance &&
                    e.popperInstance.update(),
                    (i = s),
                    (o = u),
                    e.state.isMounted && requestAnimationFrame(a);
            }
            return {
                onMount: function () {
                    e.props.sticky && a();
                },
            };
        },
    };
    function G(e, t) {
        return (
            !e ||
            !t ||
            e.top !== t.top ||
            e.right !== t.right ||
            e.bottom !== t.bottom ||
            e.left !== t.left
        );
    }
    return (
        U.setDefaultProps({ plugins: [W, q, z, J], render: I }),
        (U.createSingleton = function (e, t) {
            var n;
            void 0 === t && (t = {});
            var r,
                i = e,
                o = [],
                s = t.overrides,
                u = [],
                c = !1;
            function p() {
                o = i.map(function (e) {
                    return e.reference;
                });
            }
            function l(e) {
                i.forEach(function (t) {
                    e ? t.enable() : t.disable();
                });
            }
            function d(e) {
                return i.map(function (t) {
                    var n = t.setProps;
                    return (
                        (t.setProps = function (i) {
                            n(i), t.reference === r && e.setProps(i);
                        }),
                        function () {
                            t.setProps = n;
                        }
                    );
                });
            }
            function v(e, t) {
                var n = o.indexOf(t);
                if (t !== r) {
                    r = t;
                    var a = (s || []).concat("content").reduce(function (e, t) {
                        return (e[t] = i[n].props[t]), e;
                    }, {});
                    e.setProps(
                        Object.assign({}, a, {
                            getReferenceClientRect:
                                "function" == typeof a.getReferenceClientRect
                                    ? a.getReferenceClientRect
                                    : function () {
                                          return t.getBoundingClientRect();
                                      },
                        })
                    );
                }
            }
            l(!1), p();
            var m = {
                    fn: function () {
                        return {
                            onDestroy: function () {
                                l(!0);
                            },
                            onHidden: function () {
                                r = null;
                            },
                            onClickOutside: function (e) {
                                e.props.showOnCreate &&
                                    !c &&
                                    ((c = !0), (r = null));
                            },
                            onShow: function (e) {
                                e.props.showOnCreate &&
                                    !c &&
                                    ((c = !0), v(e, o[0]));
                            },
                            onTrigger: function (e, t) {
                                v(e, t.currentTarget);
                            },
                        };
                    },
                },
                g = U(
                    f(),
                    Object.assign({}, a(t, ["overrides"]), {
                        plugins: [m].concat(t.plugins || []),
                        triggerTarget: o,
                        popperOptions: Object.assign({}, t.popperOptions, {
                            modifiers: [].concat(
                                (null == (n = t.popperOptions)
                                    ? void 0
                                    : n.modifiers) || [],
                                [_]
                            ),
                        }),
                    })
                ),
                h = g.show;
            (g.show = function (e) {
                if ((h(), !r && null == e)) return v(g, o[0]);
                if (!r || null != e) {
                    if ("number" == typeof e) return o[e] && v(g, o[e]);
                    if (i.includes(e)) {
                        var t = e.reference;
                        return v(g, t);
                    }
                    return o.includes(e) ? v(g, e) : void 0;
                }
            }),
                (g.showNext = function () {
                    var e = o[0];
                    if (!r) return g.show(0);
                    var t = o.indexOf(r);
                    g.show(o[t + 1] || e);
                }),
                (g.showPrevious = function () {
                    var e = o[o.length - 1];
                    if (!r) return g.show(e);
                    var t = o.indexOf(r),
                        n = o[t - 1] || e;
                    g.show(n);
                });
            var b = g.setProps;
            return (
                (g.setProps = function (e) {
                    (s = e.overrides || s), b(e);
                }),
                (g.setInstances = function (e) {
                    l(!0),
                        u.forEach(function (e) {
                            return e();
                        }),
                        (i = e),
                        l(!1),
                        p(),
                        d(g),
                        g.setProps({ triggerTarget: o });
                }),
                (u = d(g)),
                g
            );
        }),
        (U.delegate = function (e, n) {
            var r = [],
                i = [],
                o = !1,
                u = n.target,
                c = a(n, ["target"]),
                p = Object.assign({}, c, { trigger: "manual", touch: !1 }),
                f = Object.assign({}, c, { showOnCreate: !0 }),
                l = U(e, p);
            function d(e) {
                if (e.target && !o) {
                    var t = e.target.closest(u);
                    if (t) {
                        var r =
                            t.getAttribute("data-tippy-trigger") ||
                            n.trigger ||
                            L.trigger;
                        if (
                            !t._tippy &&
                            !(
                                ("touchstart" === e.type &&
                                    "boolean" == typeof f.touch) ||
                                ("touchstart" !== e.type &&
                                    r.indexOf(F[e.type]) < 0)
                            )
                        ) {
                            var a = U(t, f);
                            a && (i = i.concat(a));
                        }
                    }
                }
            }
            function v(e, t, n, i) {
                void 0 === i && (i = !1),
                    e.addEventListener(t, n, i),
                    r.push({ node: e, eventType: t, handler: n, options: i });
            }
            return (
                s(l).forEach(function (e) {
                    var n = e.destroy,
                        a = e.enable,
                        s = e.disable;
                    (e.destroy = function (e) {
                        void 0 === e && (e = !0),
                            e &&
                                i.forEach(function (e) {
                                    e.destroy();
                                }),
                            (i = []),
                            r.forEach(function (e) {
                                var t = e.node,
                                    n = e.eventType,
                                    r = e.handler,
                                    i = e.options;
                                t.removeEventListener(n, r, i);
                            }),
                            (r = []),
                            n();
                    }),
                        (e.enable = function () {
                            a(),
                                i.forEach(function (e) {
                                    return e.enable();
                                }),
                                (o = !1);
                        }),
                        (e.disable = function () {
                            s(),
                                i.forEach(function (e) {
                                    return e.disable();
                                }),
                                (o = !0);
                        }),
                        (function (e) {
                            var n = e.reference;
                            v(n, "touchstart", d, t),
                                v(n, "mouseover", d),
                                v(n, "focusin", d),
                                v(n, "click", d);
                        })(e);
                }),
                l
            );
        }),
        (U.hideAll = function (e) {
            var t = void 0 === e ? {} : e,
                n = t.exclude,
                r = t.duration;
            H.forEach(function (e) {
                var t = !1;
                if (
                    (n &&
                        (t = v(n) ? e.reference === n : e.popper === n.popper),
                    !t)
                ) {
                    var i = e.props.duration;
                    e.setProps({ duration: r }),
                        e.hide(),
                        e.state.isDestroyed || e.setProps({ duration: i });
                }
            });
        }),
        (U.roundArrow =
            '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>'),
        U
    );
});
//# sourceMappingURL=tippy.umd.min.js.map
