function number_format(e, t, i, n) {
    e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
    var o = isFinite(+e) ? +e : 0,
        s = isFinite(+t) ? Math.abs(t) : 0,
        r = "undefined" == typeof n ? "," : n,
        a = "undefined" == typeof i ? "." : i,
        l = "",
        c = function(e, t) {
            var i = Math.pow(10, t);
            return "" + (Math.round(e * i) / i).toFixed(t)
        };
    return l = (s ? c(o, s) : "" + Math.round(o)).split("."), l[0].length > 3 && (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, r)), (l[1] || "").length < s && (l[1] = l[1] || "", l[1] += new Array(s - l[1].length + 1).join("0")), l.join(a)
}

function stripslashes(e) {
    return (e + "").replace(/\\(.?)/g, function(e, t) {
        switch (t) {
            case "\\":
                return "\\";
            case "0":
                return "\0";
            case "":
                return "";
            default:
                return t
        }
    })
}

function getCookie(e) {
    var t = "; " + document.cookie,
        i = t.split("; " + e + "=");
    return 2 == i.length ? (retCookie = JSON.parse(decodeURIComponent(i.pop().split(";").shift())), retCookie) : ""
}

function displayPopup(e) {
    isModal = $(e).data("modal"), closeButton = $(e).data("closebutton"), null == closeButton && (closeButton = !1), closeClick = isModal
}

function displayTabPopup(e) {
    isModal = !1, $.fancybox.open(e, {
        padding: 0,
        closeBtn: !0,
        wrapCSS: "popup-tab-wrapper",
        helpers: {
            overlay: {
                closeClick: !0,
                speedOut: 200,
                css: {
                    background: "rgba(0,0,0,0.8)"
                },
                locked: !0
            }
        },
        modal: isModal
    })
}

function getCurrentBrowser() {
    var e = navigator.userAgent.indexOf("Chrome") > -1,
        t = navigator.userAgent.indexOf("MSIE") > -1,
        i = navigator.userAgent.indexOf("Firefox") > -1,
        n = navigator.userAgent.indexOf("Safari") > -1,
        o = navigator.userAgent.indexOf("Camino") > -1,
        s = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    return e && n && (n = !1), e && s && (e = !1), n ? "safari" : t ? "explorer" : e ? "chrome" : i ? "firefox" : o ? "camino" : s ? "opera" : null
}

function enableOverlay(e) {
    jQuery(e).each(function() {
        $(this).on("click", toggleOverlay), $(this).addClass("new-overlay-element")
    })
}

function getType(e) {
    return null === e ? "[object Null]" : Object.prototype.toString.call(e)
}

function loadOverlay(e, t) {
    var i, n, o = ".new-overlay",
        s = ".new-overlay-wrapper";
    if (n = $(e).attr("href"), "undefined" != typeof n) {
        if (isValidSelector(n)) {
            var r = n;
            console.log("Appending", r), i = $('<div class="new-overlay-inner">'), $(r).css({
                display: "block"
            }), $(r).appendTo(i)
        } else isUriImage(n) && (i = '<div class="new-overlay-inner"><img style="width: 100%" src="' + n + '"></div>');
        $(s).html(i), $(".new-overlay-inner").children().each(function() {
            parentWidth = $(this).width(), $(this).width() > 0 ? parentWidth = $(this).width() : parentWidth = "auto", $(this).height() > 0 ? parentHeight = $(this).height() : parentHeight = "auto", $(this).parent().css({
                height: parentHeight,
                width: parentWidth
            });
            var e = 30,
                t = $(window).height() - 2 * e;
            $(this).parent().css({
                "max-height": t,
                overflow: "auto"
            })
        }).css({
            "max-height": "none",
            "max-width": "100%"
        }), $(".new-overlay-inner").find("#popup-demo").length > 0 && $(".new-overlay-inner").css("height", "auto")
    }
    $(o).addClass(t)
}

function isValidSelector(e) {
    if ("string" != typeof e) return !1;
    try {
        $(e)
    } catch (t) {
        return !1
    }
    return !0
}

function getHyperlink(e) {
    console.log("getHyperlink", e);
    var t = null;
    if ("undefined" == typeof e.path) return e.currentTarget;
    for (var i = e.path, n = i.length, o = 0; o < n; o++) currentElement = $(i[o]), console.log(currentElement), currentElement.is("a") && (t = currentElement);
    return t
}

function toggleOverlay(e) {
    overlay = document.querySelector(".new-overlay");
    var t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        },
        i = t[Modernizr.prefixed("transition")],
        n = {
            transitions: Modernizr.csstransitions
        };
    if (classie.has(overlay, "open")) {
        if (e.target !== this) return;
        e.stopPropagation(), $(".new-overlay-inner").children().first().css({
            display: "none"
        }).appendTo($("#new-overlay-storage")), $(".new-overlay-wrapper").html(""), classie.remove(overlay, "open");
        var o = function(e) {
            if (n.transitions) {
                if ("visibility" !== e.propertyName) return;
                this.removeEventListener(i, o)
            }
        };
        n.transitions ? overlay.addEventListener(i, o) : o()
    } else e.preventDefault(), e.stopPropagation(), eventHyperlink = getHyperlink(e), loadOverlay(eventHyperlink, "open")
}

function open_career_description(e) {
    var t = $(e).closest(".box");
    t.siblings(".box").removeClass("open").find(".collapse-block").stop().slideUp().promise().done(function() {
        t.addClass("open").find(".collapse-block").css({
            width: $(".info-accordion").width() - 2 * parseInt(t.css("padding-left")),
            "margin-left": $(".info-accordion").offset().left - t.offset().left
        }).stop().slideDown()
    }), $(".btn-prev").removeClass("disabled"), $(".info-accordion .box:first-child").find(".btn-prev").addClass("disabled"), $(".info-accordion .box:last-child").find(".btn-next").addClass("disabled")
}
jQuery.fn.textPlaceholder = function() {
    return this.each(function() {
        var e = this;
        if (!(e.placeholder && "placeholder" in document.createElement(e.tagName))) {
            var t = e.getAttribute("placeholder"),
                i = jQuery(e);
            "" !== e.value && e.value != t || (i.addClass("text-placeholder"), e.value = t), i.focus(function() {
                i.hasClass("text-placeholder") && (this.value = "", i.removeClass("text-placeholder"))
            }), i.blur(function() {
                "" === this.value ? (i.addClass("text-placeholder"), this.value = t) : i.removeClass("text-placeholder")
            }), e.form && jQuery(e.form).submit(function() {
                i.hasClass("text-placeholder") && (e.value = "")
            })
        }
    })
}, $(document).ready(function() {
    $("[placeholder]").textPlaceholder()
}), appear = function() {
    "use strict";

    function e() {
        var e = window.scrollY || window.pageYOffset;
        null != i && (o.velocity = e - i, o.delta = o.velocity >= 0 ? o.velocity : -1 * o.velocity), i = e, n && clearTimeout(n), n = setTimeout(function() {
            i = null
        }, 30)
    }

    function t(e, t) {
        var i = e.getBoundingClientRect();
        return i.top + i.height >= 0 && i.left + i.width >= 0 && i.bottom - i.height <= (window.innerHeight || document.documentElement.clientHeight) + t && i.right - i.width <= (window.innerWidth || document.documentElement.clientWidth) + t
    }
    var i = null,
        n = 0,
        o = {};
    return addEventListener("scroll", e),
        function(e) {
            return function(e) {
                function i(e, t) {
                    return function() {
                        var i = this,
                            n = arguments;
                        clearTimeout(u), u = setTimeout(function() {
                            e.apply(i, n)
                        }, t)
                    }
                }

                function n() {
                    o.delta < b.delta.speed && (h || (h = !0, l(), setTimeout(function() {
                        h = !1
                    }, b.delta.timeout))), i(function() {
                        l()
                    }, b.debounce)()
                }

                function s() {
                    l(), addEventListener("scroll", n), addEventListener("resize", n)
                }

                function r() {
                    m = [], u && clearTimeout(u), a()
                }

                function a() {
                    removeEventListener("scroll", n), removeEventListener("resize", n)
                }

                function l() {
                    p || (m.forEach(function(e, i) {
                        e && t(e, b.bounds) ? g[i] && (g[i] = !1, v++, b.appear && b.appear(e), b.disappear || b.reappear || (m[i] = null)) : (g[i] === !1 && (b.disappear && b.disappear(e), y++, b.reappear || (m[i] = null)), g[i] = !0)
                    }), b.reappear || b.appear && (!b.appear || v !== d) || b.disappear && (!b.disappear || y !== d) || (p = !0, a(), b.done && b.done()))
                }

                function c() {
                    if (!f) {
                        f = !0, b.init && b.init();
                        var e;
                        if (e = "function" == typeof b.elements ? b.elements() : b.elements) {
                            d = e.length;
                            for (var t = 0; t < d; t += 1) m.push(e[t]), g.push(!0);
                            s()
                        }
                    }
                }
                var d, u, h, p, f = !1,
                    m = [],
                    g = [],
                    v = 0,
                    y = 0,
                    b = {};
                return function(e) {
                    return e = e || {}, b = {
                        init: e.init,
                        elements: e.elements,
                        appear: e.appear,
                        disappear: e.disappear,
                        done: e.done,
                        reappear: e.reappear,
                        bounds: e.bounds || 0,
                        debounce: e.debounce || 50,
                        delta: {
                            speed: e.deltaSpeed || 50,
                            timeout: e.deltaTimeout || 500
                        }
                    }, addEventListener("DOMContentLoaded", c), "complete" === document.readyState && c(), {
                        trigger: function() {
                            l()
                        },
                        pause: function() {
                            a()
                        },
                        resume: function() {
                            s()
                        },
                        destroy: function() {
                            r()
                        }
                    }
                }
            }()(e)
        }
}();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                var n = function(e) {
                        var t, i = [],
                            n = e.length;
                        for (t = 0; t !== n; i.push(e[t++]));
                        return i
                    },
                    o = function(e, t, i) {
                        var n, o, s = e.cycle;
                        for (n in s) o = s[n], e[n] = "function" == typeof o ? o(i, t[i]) : o[i % o.length];
                        delete e.cycle
                    },
                    s = function(e, t, n) {
                        i.call(this, e, t, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    r = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    c = a.isArray,
                    d = s.prototype = i.to({}, .1, {}),
                    u = [];
                s.version = "1.20.2", d.constructor = s, d.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, d.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, d.updateTo = function(e, t) {
                    var n, o = this.ratio,
                        s = this.vars.immediateRender || e.immediateRender;
                    t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in e) this.vars[n] = e[n];
                    if (this._initted || s)
                        if (t) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var r = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(r, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || s)
                        for (var a, l = 1 / (1 - o), c = this._firstPT; c;) a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next;
                    return this
                }, d.render = function(e, t, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var o, s, l, c, d, u, h, p, f, m = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._time,
                        v = this._totalTime,
                        y = this._cycle,
                        b = this._duration,
                        x = this._rawPrevTime;
                    if (e >= m - 1e-7 && e >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = b, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (o = !0, s = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === b && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 > x || 0 >= e && e >= -1e-7 || x === r && "isPause" !== this.data) && x !== e && (n = !0, x > r && (s = "onReverseComplete")), this._rawPrevTime = p = !t || e || x === e ? e : r)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === b && x > 0) && (s = "onReverseComplete", o = this._reversed), 0 > e && (this._active = !1, 0 === b && (this._initted || !this.vars.lazy || n) && (x >= 0 && (n = !0), this._rawPrevTime = p = !t || e || x === e ? e : r)), this._initted || (n = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (c = b + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && e >= v && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = b - this._time, f = this._yoyoEase || this.vars.yoyoEase, f && (this._yoyoEase || (f !== !0 || this._initted ? this._yoyoEase = f = f === !0 ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)), this.ratio = f ? 1 - f.getRatio((b - this._time) / b) : 0)), this._time > b ? this._time = b : this._time < 0 && (this._time = 0)), this._easeType && !f ? (d = this._time / b, u = this._easeType, h = this._easePower, (1 === u || 3 === u && d >= .5) && (d = 1 - d), 3 === u && (d *= 2), 1 === h ? d *= d : 2 === h ? d *= d * d : 3 === h ? d *= d * d * d : 4 === h && (d *= d * d * d * d), 1 === u ? this.ratio = 1 - d : 2 === u ? this.ratio = d : this._time / b < .5 ? this.ratio = d / 2 : this.ratio = 1 - d / 2) : f || (this.ratio = this._ease.getRatio(this._time / b))), g === this._time && !n && y === this._cycle) return void(v !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = v, this._rawPrevTime = x, this._cycle = y, a.lazyTweens.push(this), void(this._lazy = [e, t]);
                        !this._time || o || f ? o && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / b)
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== g && e >= 0 && (this._active = !0), 0 === v && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === b) && (t || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || (this._totalTime !== v || s) && this._callback("onUpdate")), this._cycle !== y && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s), 0 === b && this._rawPrevTime === r && p !== r && (this._rawPrevTime = 0))
                }, s.to = function(e, t, i) {
                    return new s(e, t, i)
                }, s.from = function(e, t, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(e, t, i)
                }, s.fromTo = function(e, t, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(e, t, n)
                }, s.staggerTo = s.allTo = function(e, t, r, a, d, h, p) {
                    a = a || 0;
                    var f, m, g, v, y = 0,
                        b = [],
                        x = function() {
                            r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), d.apply(p || r.callbackScope || this, h || u)
                        },
                        _ = r.cycle,
                        w = r.startAt && r.startAt.cycle;
                    for (c(e) || ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = n(e))), e = e || [], 0 > a && (e = n(e), e.reverse(), a *= -1), f = e.length - 1, g = 0; f >= g; g++) {
                        m = {};
                        for (v in r) m[v] = r[v];
                        if (_ && (o(m, e, g), null != m.duration && (t = m.duration, delete m.duration)), w) {
                            w = m.startAt = {};
                            for (v in r.startAt) w[v] = r.startAt[v];
                            o(m.startAt, e, g)
                        }
                        m.delay = y + (m.delay || 0), g === f && d && (m.onComplete = x), b[g] = new s(e[g], t, m), y += a
                    }
                    return b
                }, s.staggerFrom = s.allFrom = function(e, t, i, n, o, r, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(e, t, i, n, o, r, a)
                }, s.staggerFromTo = s.allFromTo = function(e, t, i, n, o, r, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(e, t, n, o, r, a, l)
                }, s.delayedCall = function(e, t, i, n, o) {
                    return new s(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: o,
                        overwrite: 0
                    })
                }, s.set = function(e, t) {
                    return new s(e, 0, t)
                }, s.isTweening = function(e) {
                    return i.getTweensOf(e, !0).length > 0
                };
                var h = function(e, t) {
                        for (var n = [], o = 0, s = e._first; s;) s instanceof i ? n[o++] = s : (t && (n[o++] = s), n = n.concat(h(s, t)), o = n.length), s = s._next;
                        return n
                    },
                    p = s.getAllTweens = function(t) {
                        return h(e._rootTimeline, t).concat(h(e._rootFramesTimeline, t))
                    };
                s.killAll = function(e, i, n, o) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, r, a, l = p(0 != o),
                        c = l.length,
                        d = i && n && o;
                    for (a = 0; c > a; a++) r = l[a], (d || r instanceof t || (s = r.target === r.vars.onComplete) && n || i && !s) && (e ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
                }, s.killChildTweensOf = function(e, t) {
                    if (null != e) {
                        var o, r, d, u, h, p = a.tweenLookup;
                        if ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = n(e)), c(e))
                            for (u = e.length; --u > -1;) s.killChildTweensOf(e[u], t);
                        else {
                            o = [];
                            for (d in p)
                                for (r = p[d].target.parentNode; r;) r === e && (o = o.concat(p[d].tweens)), r = r.parentNode;
                            for (h = o.length, u = 0; h > u; u++) t && o[u].totalTime(o[u].totalDuration()), o[u]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(e, i, n, o) {
                    i = i !== !1, n = n !== !1, o = o !== !1;
                    for (var s, r, a = p(o), l = i && n && o, c = a.length; --c > -1;) r = a[c], (l || r instanceof t || (s = r.target === r.vars.onComplete) && n || i && !s) && r.paused(e)
                };
                return s.pauseAll = function(e, t, i) {
                    f(!0, e, t, i)
                }, s.resumeAll = function(e, t, i) {
                    f(!1, e, t, i)
                }, s.globalTimeScale = function(t) {
                    var n = e._rootTimeline,
                        o = i.ticker.time;
                    return arguments.length ? (t = t || r, n._startTime = o - (o - n._startTime) * n._timeScale / t, n = e._rootFramesTimeline, o = i.ticker.frame, n._startTime = o - (o - n._startTime) * n._timeScale / t, n._timeScale = e._rootTimeline._timeScale = t, t) : n._timeScale
                }, d.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, d.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, d.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, d.duration = function(t) {
                    return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                }, d.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, d.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, d.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, d.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                var n = function(e) {
                        t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, o = this.vars;
                        for (n in o) i = o[n], l(i) && -1 !== i.join("").indexOf("{self}") && (o[n] = this._swapSelfInParams(i));
                        l(o.tweens) && this.add(o.tweens, 0, o.align, o.stagger)
                    },
                    o = 1e-10,
                    s = i._internals,
                    r = n._internals = {},
                    a = s.isSelector,
                    l = s.isArray,
                    c = s.lazyTweens,
                    d = s.lazyRender,
                    u = _gsScope._gsDefine.globals,
                    h = function(e) {
                        var t, i = {};
                        for (t in e) i[t] = e[t];
                        return i
                    },
                    p = function(e, t, i) {
                        var n, o, s = e.cycle;
                        for (n in s) o = s[n], e[n] = "function" == typeof o ? o(i, t[i]) : o[i % o.length];
                        delete e.cycle
                    },
                    f = r.pauseCallback = function() {},
                    m = function(e) {
                        var t, i = [],
                            n = e.length;
                        for (t = 0; t !== n; i.push(e[t++]));
                        return i
                    },
                    g = n.prototype = new t;
                return n.version = "1.20.2", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(e, t, n, o) {
                    var s = n.repeat && u.TweenMax || i;
                    return t ? this.add(new s(e, t, n), o) : this.set(e, n, o)
                }, g.from = function(e, t, n, o) {
                    return this.add((n.repeat && u.TweenMax || i).from(e, t, n), o)
                }, g.fromTo = function(e, t, n, o, s) {
                    var r = o.repeat && u.TweenMax || i;
                    return t ? this.add(r.fromTo(e, t, n, o), s) : this.set(e, o, s)
                }, g.staggerTo = function(e, t, o, s, r, l, c, d) {
                    var u, f, g = new n({
                            onComplete: l,
                            onCompleteParams: c,
                            callbackScope: d,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        v = o.cycle;
                    for ("string" == typeof e && (e = i.selector(e) || e), e = e || [], a(e) && (e = m(e)), s = s || 0, 0 > s && (e = m(e), e.reverse(), s *= -1), f = 0; f < e.length; f++) u = h(o), u.startAt && (u.startAt = h(u.startAt), u.startAt.cycle && p(u.startAt, e, f)), v && (p(u, e, f), null != u.duration && (t = u.duration, delete u.duration)), g.to(e[f], t, u, f * s);
                    return this.add(g, r)
                }, g.staggerFrom = function(e, t, i, n, o, s, r, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, n, o, s, r, a)
                }, g.staggerFromTo = function(e, t, i, n, o, s, r, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, n, o, s, r, a, l)
                }, g.call = function(e, t, n, o) {
                    return this.add(i.delayedCall(0, e, t, n), o)
                }, g.set = function(e, t, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == t.immediateRender && (t.immediateRender = n === this._time && !this._paused), this.add(new i(e, 0, t), n)
                }, n.exportRoot = function(e, t) {
                    e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                    var o, s, r = new n(e),
                        a = r._timeline;
                    for (null == t && (t = !0), a._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = a._time, o = a._first; o;) s = o._next, t && o instanceof i && o.target === o.vars.onComplete || r.add(o, o._startTime - o._delay), o = s;
                    return a.add(r, 0), r
                }, g.add = function(o, s, r, a) {
                    var c, d, u, h, p, f;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, o)), !(o instanceof e)) {
                        if (o instanceof Array || o && o.push && l(o)) {
                            for (r = r || "normal", a = a || 0, c = s, d = o.length, u = 0; d > u; u++) l(h = o[u]) && (h = new n({
                                tweens: h
                            })), this.add(h, c), "string" != typeof h && "function" != typeof h && ("sequence" === r ? c = h._startTime + h.totalDuration() / h._timeScale : "start" === r && (h._startTime -= h.delay())), c += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof o) return this.addLabel(o, s);
                        if ("function" != typeof o) throw "Cannot add " + o + " into the timeline; it is not a tween, timeline, function, or string.";
                        o = i.delayedCall(0, o)
                    }
                    if (t.prototype.add.call(this, o, s), o._time && o.render((this.rawTime() - o._startTime) * o._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, f = p.rawTime() > o._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, g.remove = function(t) {
                    if (t instanceof e) {
                        this._remove(t, !1);
                        var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                        return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                    }
                    if (t instanceof Array || t && t.push && l(t)) {
                        for (var n = t.length; --n > -1;) this.remove(t[n]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, g._remove = function(e, i) {
                    t.prototype._remove.call(this, e, i);
                    var n = this._last;
                    return n ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, g.insert = g.insertMultiple = function(e, t, i, n) {
                    return this.add(e, t || 0, i, n)
                }, g.appendMultiple = function(e, t, i, n) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
                }, g.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, g.addPause = function(e, t, n, o) {
                    var s = i.delayedCall(0, f, n, o || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = t, s.data = "isPause", this._hasPause = !0, this.add(s, e)
                }, g.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, g.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, g._parseTimeOrLabel = function(t, i, n, o) {
                    var s, r;
                    if (o instanceof e && o.timeline === this) this.remove(o);
                    else if (o && (o instanceof Array || o.push && l(o)))
                        for (r = o.length; --r > -1;) o[r] instanceof e && o[r].timeline === this && this.remove(o[r]);
                    if (s = this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - s : 0, n);
                    if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = s);
                    else {
                        if (r = t.indexOf("="), -1 === r) return null == this._labels[t] ? n ? this._labels[t] = s + i : i : this._labels[t] + i;
                        i = parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1)), t = r > 1 ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, n) : s
                    }
                    return Number(t) + i
                }, g.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, g.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, g.render = function(e, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, r, a, l, u, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        m = this._startTime,
                        g = this._timeScale,
                        v = this._paused;
                    if (e >= p - 1e-7 && e >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === o) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > o && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : o, e = p + 1e-4;
                    else if (1e-7 > e)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== o && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : o, 0 === e && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            e = 0, this._initted || (l = !0)
                        } else {
                        if (this._hasPause && !this._forcingPlayhead && !t) {
                            if (e >= f)
                                for (n = this._first; n && n._startTime <= e && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= e && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                            u && (this._time = e = u._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = e
                    }
                    if (this._time !== f && this._first || i || l || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && e > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), h = this._time, h >= f)
                            for (n = this._first; n && (r = n._next, h === this._time && (!this._paused || v));)(n._active || n._startTime <= h && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = r;
                        else
                            for (n = this._last; n && (r = n._prev, h === this._time && (!this._paused || v));) {
                                if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                    if (u === n) {
                                        for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (e - u._startTime) * u._timeScale : (e - u._startTime) * u._timeScale, t, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                                }
                                n = r
                            }
                        this._onUpdate && (t || (c.length && d(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (c.length && d(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this._callback(a)))
                    }
                }, g._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof n && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, g.getChildren = function(e, t, n, o) {
                    o = o || -9999999999;
                    for (var s = [], r = this._first, a = 0; r;) r._startTime < o || (r instanceof i ? t !== !1 && (s[a++] = r) : (n !== !1 && (s[a++] = r), e !== !1 && (s = s.concat(r.getChildren(!0, t, n)), a = s.length))), r = r._next;
                    return s
                }, g.getTweensOf = function(e, t) {
                    var n, o, s = this._gc,
                        r = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), n = i.getTweensOf(e), o = n.length; --o > -1;)(n[o].timeline === this || t && this._contains(n[o])) && (r[a++] = n[o]);
                    return s && this._enabled(!1, !0), r
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, g.shiftChildren = function(e, t, i) {
                    i = i || 0;
                    for (var n, o = this._first, s = this._labels; o;) o._startTime >= i && (o._startTime += e), o = o._next;
                    if (t)
                        for (n in s) s[n] >= i && (s[n] += e);
                    return this._uncache(!0)
                }, g._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, o = !1; --n > -1;) i[n]._kill(e, t) && (o = !0);
                    return o
                }, g.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        i = t.length;
                    for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                    return e !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return e.prototype.invalidate.call(this)
                }, g._enabled = function(e, i) {
                    if (e === this._gc)
                        for (var n = this._first; n;) n._enabled(e, !0), n = n._next;
                    return t.prototype._enabled.call(this, e, i)
                }, g.totalTime = function(t, i, n) {
                    this._forcingPlayhead = !0;
                    var o = e.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, o
                }, g.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, i, n = 0, o = this._last, s = 999999999999; o;) t = o._prev, o._dirty && o.totalDuration(), o._startTime > s && this._sortChildren && !o._paused ? this.add(o, o._startTime - o._delay) : s = o._startTime, o._startTime < 0 && !o._paused && (n -= o._startTime, this._timeline.smoothChildTiming && (this._startTime += o._startTime / this._timeScale), this.shiftChildren(-o._startTime, !1, -9999999999), s = 0), i = o._startTime + o._totalDuration / o._timeScale, i > n && (n = i), o = t;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
                }, g.paused = function(t) {
                    if (!t)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return e.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === e._rootFramesTimeline
                }, g.rawTime = function(e) {
                    return e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
                var n = function(t) {
                        e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    o = 1e-10,
                    s = t._internals,
                    r = s.lazyTweens,
                    a = s.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    c = new i(null, null, 1, 0),
                    d = n.prototype = new e;
                return d.constructor = n, d.kill()._gc = !1, n.version = "1.20.2", d.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                }, d.addCallback = function(e, i, n, o) {
                    return this.add(t.delayedCall(0, e, n, o), i)
                }, d.removeCallback = function(e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var i = this.getTweensOf(e, !1), n = i.length, o = this._parseTimeOrLabel(t); --n > -1;) i[n]._startTime === o && i[n]._enabled(!1, !1);
                    return this
                }, d.removePause = function(t) {
                    return this.removeCallback(e._internals.pauseCallback, t)
                }, d.tweenTo = function(e, i) {
                    i = i || {};
                    var n, o, s, r = {
                            ease: c,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        a = i.repeat && l.TweenMax || t;
                    for (o in i) r[o] = i[o];
                    return r.time = this._parseTimeOrLabel(e), n = Math.abs(Number(r.time) - this._time) / this._timeScale || .001, s = new a(this, n, r), r.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || [])
                    }, s
                }, d.tweenFromTo = function(e, t, i) {
                    i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(t, i);
                    return n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
                }, d.render = function(e, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, l, c, d, u, h, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        g = this._time,
                        v = this._totalTime,
                        y = this._startTime,
                        b = this._timeScale,
                        x = this._rawPrevTime,
                        _ = this._paused,
                        w = this._cycle;
                    if (e >= f - 1e-7 && e >= 0) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, c = "onComplete", d = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || 0 > x || x === o) && x !== e && this._first && (d = !0, x > o && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : o, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = m, e = m + 1e-4);
                    else if (1e-7 > e)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && x !== o && (x > 0 || 0 > e && x >= 0) && !this._locked) && (c = "onReverseComplete", s = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (d = s = !0, c = "onReverseComplete") : x >= 0 && this._first && (d = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = m || !t || e || this._rawPrevTime === e ? e : o, 0 === e && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            e = 0, this._initted || (d = !0)
                        } else if (0 === m && 0 > x && (d = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && e >= v && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, e = m + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                        if (e = this._time, e >= g || this._repeat && w !== this._cycle)
                            for (n = this._first; n && n._startTime <= e && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n),
                                n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= e && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                        h && h._startTime < m && (this._time = e = h._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & w),
                            S = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            C = this._totalTime,
                            k = this._cycle,
                            $ = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = w * m, this._cycle < w ? T = !T : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? x - 1e-4 : x, this._cycle = w, this._locked = !0, g = T ? 0 : m, this.render(g, t, 0 === m), t || this._gc || this.vars.onRepeat && (this._cycle = k, this._locked = !1, this._callback("onRepeat")), g !== this._time) return;
                        if (S && (this._cycle = w, this._locked = !0, g = T ? m + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !_) return;
                        this._time = P, this._totalTime = C, this._cycle = k, this._rawPrevTime = $
                    }
                    if (!(this._time !== g && this._first || i || d || h)) return void(v !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && e > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), p = this._time, p >= g)
                        for (n = this._first; n && (l = n._next, p === this._time && (!this._paused || _));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, p === this._time && (!this._paused || _));) {
                            if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                                if (h === n) {
                                    for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (e - h._startTime) * h._timeScale : (e - h._startTime) * h._timeScale, t, i), h = h._prev;
                                    h = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                            }
                            n = l
                        }
                    this._onUpdate && (t || (r.length && a(), this._callback("onUpdate"))), c && (this._locked || this._gc || (y === this._startTime || b !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (r.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[c] && this._callback(c)))
                }, d.getActive = function(e, t, i) {
                    null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
                    var n, o, s = [],
                        r = this.getChildren(e, t, i),
                        a = 0,
                        l = r.length;
                    for (n = 0; l > n; n++) o = r[n], o.isActive() && (s[a++] = o);
                    return s
                }, d.getLabelAfter = function(e) {
                    e || 0 !== e && (e = this._time);
                    var t, i = this.getLabelsArray(),
                        n = i.length;
                    for (t = 0; n > t; t++)
                        if (i[t].time > e) return i[t].name;
                    return null
                }, d.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
                        if (t[i].time < e) return t[i].name;
                    return null
                }, d.getLabelsArray = function() {
                    var e, t = [],
                        i = 0;
                    for (e in this._labels) t[i++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function(e, t) {
                        return e.time - t.time
                    }), t
                }, d.invalidate = function() {
                    return this._locked = !1, e.prototype.invalidate.call(this)
                }, d.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
                }, d.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
                }, d.totalDuration = function(t) {
                    return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, d.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, d.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, d.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, d.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, d.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var e = 180 / Math.PI,
                    t = [],
                    i = [],
                    n = [],
                    o = {},
                    s = _gsScope._gsDefine.globals,
                    r = function(e, t, i, n) {
                        i === n && (i = n - (n - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = n, this.da = n - e, this.ca = i - e, this.ba = t - e
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(e, t, i, n) {
                        var o = {
                                a: e
                            },
                            s = {},
                            r = {},
                            a = {
                                c: n
                            },
                            l = (e + t) / 2,
                            c = (t + i) / 2,
                            d = (i + n) / 2,
                            u = (l + c) / 2,
                            h = (c + d) / 2,
                            p = (h - u) / 8;
                        return o.b = l + (e - l) / 4, s.b = u + p, o.c = s.a = (o.b + s.b) / 2, s.c = r.a = (u + h) / 2, r.b = h - p, a.b = d + (n - d) / 4, r.c = a.a = (r.b + a.b) / 2, [o, s, r, a]
                    },
                    c = function(e, o, s, r, a) {
                        var c, d, u, h, p, f, m, g, v, y, b, x, _, w = e.length - 1,
                            T = 0,
                            S = e[0].a;
                        for (c = 0; w > c; c++) p = e[T], d = p.a, u = p.d, h = e[T + 1].d, a ? (b = t[c], x = i[c], _ = (x + b) * o * .25 / (r ? .5 : n[c] || .5), f = u - (u - d) * (r ? .5 * o : 0 !== b ? _ / b : 0), m = u + (h - u) * (r ? .5 * o : 0 !== x ? _ / x : 0), g = u - (f + ((m - f) * (3 * b / (b + x) + .5) / 4 || 0))) : (f = u - (u - d) * o * .5, m = u + (h - u) * o * .5, g = u - (f + m) / 2), f += g, m += g, p.c = v = f, 0 !== c ? p.b = S : p.b = S = p.a + .6 * (p.c - p.a), p.da = u - d, p.ca = v - d, p.ba = S - d, s ? (y = l(d, S, v, u), e.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, S = m;
                        p = e[T], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, s && (y = l(p.a, S, p.c, p.d), e.splice(T, 1, y[0], y[1], y[2], y[3]))
                    },
                    d = function(e, n, o, s) {
                        var a, l, c, d, u, h, p = [];
                        if (s)
                            for (e = [s].concat(e), l = e.length; --l > -1;) "string" == typeof(h = e[l][n]) && "=" === h.charAt(1) && (e[l][n] = s[n] + Number(h.charAt(0) + h.substr(2)));
                        if (a = e.length - 2, 0 > a) return p[0] = new r(e[0][n], 0, 0, e[0][n]), p;
                        for (l = 0; a > l; l++) c = e[l][n], d = e[l + 1][n], p[l] = new r(c, 0, 0, d), o && (u = e[l + 2][n], t[l] = (t[l] || 0) + (d - c) * (d - c), i[l] = (i[l] || 0) + (u - d) * (u - d));
                        return p[l] = new r(e[l][n], 0, 0, e[l + 1][n]), p
                    },
                    u = function(e, s, r, l, u, h) {
                        var p, f, m, g, v, y, b, x, _ = {},
                            w = [],
                            T = h || e[0];
                        u = "string" == typeof u ? "," + u + "," : a, null == s && (s = 1);
                        for (f in e[0]) w.push(f);
                        if (e.length > 1) {
                            for (x = e[e.length - 1], b = !0, p = w.length; --p > -1;)
                                if (f = w[p], Math.abs(T[f] - x[f]) > .05) {
                                    b = !1;
                                    break
                                }
                            b && (e = e.concat(), h && e.unshift(h), e.push(e[1]), h = e[e.length - 3])
                        }
                        for (t.length = i.length = n.length = 0, p = w.length; --p > -1;) f = w[p], o[f] = -1 !== u.indexOf("," + f + ","), _[f] = d(e, f, o[f], h);
                        for (p = t.length; --p > -1;) t[p] = Math.sqrt(t[p]), i[p] = Math.sqrt(i[p]);
                        if (!l) {
                            for (p = w.length; --p > -1;)
                                if (o[f])
                                    for (m = _[w[p]], y = m.length - 1, g = 0; y > g; g++) v = m[g + 1].da / i[g] + m[g].da / t[g] || 0, n[g] = (n[g] || 0) + v * v;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = w.length, g = r ? 4 : 1; --p > -1;) f = w[p], m = _[f], c(m, s, r, l, o[f]), b && (m.splice(0, g), m.splice(m.length - g, g));
                        return _
                    },
                    h = function(e, t, i) {
                        t = t || "soft";
                        var n, o, s, a, l, c, d, u, h, p, f, m = {},
                            g = "cubic" === t ? 3 : 2,
                            v = "soft" === t,
                            y = [];
                        if (v && i && (e = [i].concat(e)), null == e || e.length < g + 1) throw "invalid Bezier data";
                        for (h in e[0]) y.push(h);
                        for (c = y.length; --c > -1;) {
                            for (h = y[c], m[h] = l = [], p = 0, u = e.length, d = 0; u > d; d++) n = null == i ? e[d][h] : "string" == typeof(f = e[d][h]) && "=" === f.charAt(1) ? i[h] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && d > 1 && u - 1 > d && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (u = p - g + 1, p = 0, d = 0; u > d; d += g) n = l[d], o = l[d + 1], s = l[d + 2], a = 2 === g ? 0 : l[d + 3], l[p++] = f = 3 === g ? new r(n, o, s, a) : new r(n, (2 * o + n) / 3, (2 * o + s) / 3, s);
                            l.length = p
                        }
                        return m
                    },
                    p = function(e, t, i) {
                        for (var n, o, s, r, a, l, c, d, u, h, p, f = 1 / i, m = e.length; --m > -1;)
                            for (h = e[m], s = h.a, r = h.d - s, a = h.c - s, l = h.b - s, n = o = 0, d = 1; i >= d; d++) c = f * d, u = 1 - c, n = o - (o = (c * c * r + 3 * u * (c * a + u * l)) * c), p = m * i + d - 1, t[p] = (t[p] || 0) + n * n
                    },
                    f = function(e, t) {
                        t = t >> 0 || 6;
                        var i, n, o, s, r = [],
                            a = [],
                            l = 0,
                            c = 0,
                            d = t - 1,
                            u = [],
                            h = [];
                        for (i in e) p(e[i], r, t);
                        for (o = r.length, n = 0; o > n; n++) l += Math.sqrt(r[n]), s = n % t, h[s] = l, s === d && (c += l, s = n / t >> 0, u[s] = h, a[s] = c, l = 0, h = []);
                        return {
                            length: c,
                            lengths: a,
                            segments: u
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function(e, t, i) {
                            this._target = e, t instanceof Array && (t = {
                                values: t
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var n, o, s, r, a, l = t.values || [],
                                c = {},
                                d = l[0],
                                p = t.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                            ] : null;
                            for (n in d) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), o = this._func[n] = "function" == typeof e[n], c[n] = o ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), a || c[n] !== l[0][n] && (a = c);
                            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? u(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : h(l, t.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                                    for (r = 0; 3 > r; r++) n = p[s][r], this._func[n] = "function" == typeof e[n] && e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = p[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(t) {
                            var i, n, o, s, r, a, l, c, d, u, h = this._segCount,
                                p = this._func,
                                f = this._target,
                                m = t !== this._startRatio;
                            if (this._timeRes) {
                                if (d = this._lengths, u = this._curSeg, t *= this._length, o = this._li, t > this._l2 && h - 1 > o) {
                                    for (c = h - 1; c > o && (this._l2 = d[++o]) <= t;);
                                    this._l1 = d[o - 1], this._li = o, this._curSeg = u = this._segments[o], this._s2 = u[this._s1 = this._si = 0]
                                } else if (t < this._l1 && o > 0) {
                                    for (; o > 0 && (this._l1 = d[--o]) >= t;);
                                    0 === o && t < this._l1 ? this._l1 = 0 : o++, this._l2 = d[o], this._li = o, this._curSeg = u = this._segments[o], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = o, t -= this._l1, o = this._si, t > this._s2 && o < u.length - 1) {
                                    for (c = u.length - 1; c > o && (this._s2 = u[++o]) <= t;);
                                    this._s1 = u[o - 1], this._si = o
                                } else if (t < this._s1 && o > 0) {
                                    for (; o > 0 && (this._s1 = u[--o]) >= t;);
                                    0 === o && t < this._s1 ? this._s1 = 0 : o++, this._s2 = u[o], this._si = o
                                }
                                a = (o + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else i = 0 > t ? 0 : t >= 1 ? h - 1 : h * t >> 0, a = (t - i * (1 / h)) * h;
                            for (n = 1 - a, o = this._props.length; --o > -1;) s = this._props[o], r = this._beziers[s][i], l = (a * a * r.da + 3 * n * (a * r.ca + n * r.ba)) * a + r.a, this._mod[s] && (l = this._mod[s](l, f)), p[s] ? f[s](l) : f[s] = l;
                            if (this._autoRotate) {
                                var g, v, y, b, x, _, w, T = this._autoRotate;
                                for (o = T.length; --o > -1;) s = T[o][2], _ = T[o][3] || 0, w = T[o][4] === !0 ? 1 : e, r = this._beziers[T[o][0]], g = this._beziers[T[o][1]], r && g && (r = r[i], g = g[i], v = r.a + (r.b - r.a) * a, b = r.b + (r.c - r.b) * a, v += (b - v) * a, b += (r.c + (r.d - r.c) * a - b) * a, y = g.a + (g.b - g.a) * a, x = g.b + (g.c - g.b) * a, y += (x - y) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = m ? Math.atan2(x - y, b - v) * w + _ : this._initialRotations[o], this._mod[s] && (l = this._mod[s](l, f)), p[s] ? f[s](l) : f[s] = l)
                            }
                        }
                    }),
                    g = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(e, t, i) {
                    return new r(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
                }, m._cssRegister = function() {
                    var e = s.CSSPlugin;
                    if (e) {
                        var t = e._internals,
                            i = t._parseToProxy,
                            n = t._setPluginRatio,
                            o = t.CSSPropTween;
                        t._registerComplexSpecialProp("bezier", {
                            parser: function(e, t, s, r, a, l) {
                                t instanceof Array && (t = {
                                    values: t
                                }), l = new m;
                                var c, d, u, h = t.values,
                                    p = h.length - 1,
                                    f = [],
                                    g = {};
                                if (0 > p) return a;
                                for (c = 0; p >= c; c++) u = i(e, h[c], r, a, l, p !== c), f[c] = u.end;
                                for (d in t) g[d] = t[d];
                                return g.values = f, a = new o(e, "bezier", 0, 0, u.pt, 2), a.data = u, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (c = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", c, !1]
                                ] : null != u.end.x && [
                                    ["x", "y", "rotation", c, !1]
                                ]), g.autoRotate && (r._transform || r._enableTransforms(!1), u.autoRotate = r._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, r._overwriteProps.push("rotation")), l._onInitTween(u.proxy, g, r._tween), a
                            }
                        })
                    }
                }, g._mod = function(e) {
                    for (var t, i = this._overwriteProps, n = i.length; --n > -1;) t = e[i[n]], t && "function" == typeof t && (this._mod[i[n]] = t)
                }, g._kill = function(e) {
                    var t, i, n = this._props;
                    for (t in this._beziers)
                        if (t in e)
                            for (delete this._beziers[t], delete this._func[t], i = n.length; --i > -1;) n[i] === t && n.splice(i, 1);
                    if (n = this._autoRotate)
                        for (i = n.length; --i > -1;) e[n[i][2]] && n.splice(i, 1);
                    return this._super._kill.call(this, e)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
                var i, n, o, s, r = function() {
                        e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = r.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    c = r.prototype = new e("css");
                c.constructor = r, r.version = "1.20.0", r.API = 2, r.defaultTransformPerspective = 0, r.defaultSkewType = "compensated", r.defaultSmoothOrigin = !0, c = "px", r.suffixMap = {
                    top: c,
                    right: c,
                    bottom: c,
                    left: c,
                    width: c,
                    height: c,
                    fontSize: c,
                    padding: c,
                    margin: c,
                    perspective: c,
                    lineHeight: ""
                };
                var d, u, h, p, f, m, g, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/i,
                    S = /opacity:([^;]*)/i,
                    C = /alpha\(opacity *=.+?\)/i,
                    k = /^(rgb|hsl)/,
                    $ = /([A-Z])/g,
                    P = /-([a-z])/gi,
                    E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(e, t) {
                        return t.toUpperCase()
                    },
                    M = /(?:Left|Right|Width)/i,
                    F = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    L = /,(?=[^\)]*(?:\(|$))/gi,
                    R = /[\s,\(]/i,
                    D = Math.PI / 180,
                    I = 180 / Math.PI,
                    z = {},
                    N = {
                        style: {}
                    },
                    B = _gsScope.document || {
                        createElement: function() {
                            return N
                        }
                    },
                    H = function(e, t) {
                        return B.createElementNS ? B.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : B.createElement(e)
                    },
                    j = H("div"),
                    W = H("img"),
                    q = r._internals = {
                        _specialProps: l
                    },
                    X = (_gsScope.navigator || {}).userAgent || "",
                    U = function() {
                        var e = X.indexOf("Android"),
                            t = H("a");
                        return h = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === e || parseFloat(X.substr(e + 8, 2)) > 3), f = h && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6, p = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (m = parseFloat(RegExp.$1)), !!t && (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity))
                    }(),
                    Y = function(e) {
                        return T.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    Z = function(e) {
                        _gsScope.console && console.log(e)
                    },
                    V = "",
                    G = "",
                    Q = function(e, t) {
                        t = t || j;
                        var i, n, o = t.style;
                        if (void 0 !== o[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === o[i[n] + e];);
                        return n >= 0 ? (G = 3 === n ? "ms" : i[n], V = "-" + G.toLowerCase() + "-", G + e) : null
                    },
                    K = B.defaultView ? B.defaultView.getComputedStyle : function() {},
                    J = r.getStyle = function(e, t, i, n, o) {
                        var s;
                        return U || "opacity" !== t ? (!n && e.style[t] ? s = e.style[t] : (i = i || K(e)) ? s = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace($, "-$1").toLowerCase()) : e.currentStyle && (s = e.currentStyle[t]), null == o || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : o) : Y(e)
                    },
                    ee = q.convertToPixels = function(e, i, n, o, s) {
                        if ("px" === o || !o && "lineHeight" !== i) return n;
                        if ("auto" === o || !n) return 0;
                        var a, l, c, d = M.test(i),
                            u = e,
                            h = j.style,
                            p = 0 > n,
                            f = 1 === n;
                        if (p && (n = -n), f && (n *= 100), "lineHeight" !== i || o)
                            if ("%" === o && -1 !== i.indexOf("border")) a = n / 100 * (d ? e.clientWidth : e.clientHeight);
                            else {
                                if (h.cssText = "border:0 solid red;position:" + J(e, "position") + ";line-height:0;", "%" !== o && u.appendChild && "v" !== o.charAt(0) && "rem" !== o) h[d ? "borderLeftWidth" : "borderTopWidth"] = n + o;
                                else {
                                    if (u = e.parentNode || B.body, -1 !== J(u, "display").indexOf("flex") && (h.position = "absolute"), l = u._gsCache, c = t.ticker.frame, l && d && l.time === c) return l.width * n / 100;
                                    h[d ? "width" : "height"] = n + o
                                }
                                u.appendChild(j), a = parseFloat(j[d ? "offsetWidth" : "offsetHeight"]), u.removeChild(j), d && "%" === o && r.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = c, l.width = a / n * 100), 0 !== a || s || (a = ee(e, i, n, o, !0))
                            } else l = K(e).lineHeight, e.style.lineHeight = n, a = parseFloat(K(e).lineHeight), e.style.lineHeight = l;
                        return f && (a /= 100), p ? -a : a
                    },
                    te = q.calculateOffset = function(e, t, i) {
                        if ("absolute" !== J(e, "position", i)) return 0;
                        var n = "left" === t ? "Left" : "Top",
                            o = J(e, "margin" + n, i);
                        return e["offset" + n] - (ee(e, t, parseFloat(o), o.replace(w, "")) || 0)
                    },
                    ie = function(e, t) {
                        var i, n, o, s = {};
                        if (t = t || K(e, null))
                            if (i = t.length)
                                for (; --i > -1;) o = t[i], (-1 === o.indexOf("-transform") || Ee === o) && (s[o.replace(P, A)] = t.getPropertyValue(o));
                            else
                                for (i in t)(-1 === i.indexOf("Transform") || Pe === i) && (s[i] = t[i]);
                        else if (t = e.currentStyle || e.style)
                            for (i in t) "string" == typeof i && void 0 === s[i] && (s[i.replace(P, A)] = t[i]);
                        return U || (s.opacity = Y(e)), n = We(e, t, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Me && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    ne = function(e, t, i, n, o) {
                        var s, r, a, l = {},
                            c = e.style;
                        for (r in i) "cssText" !== r && "length" !== r && isNaN(r) && (t[r] !== (s = i[r]) || o && o[r]) && -1 === r.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[r] = "auto" !== s || "left" !== r && "top" !== r ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[r] || "" === t[r].replace(_, "") ? s : 0 : te(e, r), void 0 !== c[r] && (a = new ye(c, r, c[r], a)));
                        if (n)
                            for (r in n) "className" !== r && (l[r] = n[r]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    oe = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    se = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    re = function(e, t, i) {
                        if ("svg" === (e.nodeName + "").toLowerCase()) return (i || K(e))[t] || 0;
                        if (e.getCTM && Be(e)) return e.getBBox()[t] || 0;
                        var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            o = oe[t],
                            s = o.length;
                        for (i = i || K(e, null); --s > -1;) n -= parseFloat(J(e, "padding" + o[s], i, !0)) || 0, n -= parseFloat(J(e, "border" + o[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    ae = function(e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                        (null == e || "" === e) && (e = "0 0");
                        var i, n = e.split(" "),
                            o = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                            s = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !t) {
                            for (n = e.split(", ").join(",").split(","), e = [], i = 0; i < n.length; i++) e.push(ae(n[i]));
                            return e.join(",")
                        }
                        return null == s ? s = "center" === o ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === o || isNaN(parseFloat(o)) && -1 === (o + "").indexOf("=")) && (o = "50%"), e = o + " " + s + (n.length > 2 ? " " + n[2] : ""), t && (t.oxp = -1 !== o.indexOf("%"), t.oyp = -1 !== s.indexOf("%"), t.oxr = "=" === o.charAt(1), t.oyr = "=" === s.charAt(1), t.ox = parseFloat(o.replace(_, "")), t.oy = parseFloat(s.replace(_, "")), t.v = e), t || e
                    },
                    le = function(e, t) {
                        return "function" == typeof e && (e = e(v, g)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                    },
                    ce = function(e, t) {
                        return "function" == typeof e && (e = e(v, g)), null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                    },
                    de = function(e, t, i, n) {
                        var o, s, r, a, l, c = 1e-6;
                        return "function" == typeof e && (e = e(v, g)), null == e ? a = t : "number" == typeof e ? a = e : (o = 360, s = e.split("_"), l = "=" === e.charAt(1), r = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === e.indexOf("rad") ? 1 : I) - (l ? 0 : t), s.length && (n && (n[i] = t + r), -1 !== e.indexOf("short") && (r %= o, r !== r % (o / 2) && (r = 0 > r ? r + o : r - o)), -1 !== e.indexOf("_cw") && 0 > r ? r = (r + 9999999999 * o) % o - (r / o | 0) * o : -1 !== e.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * o) % o - (r / o | 0) * o)), a = t + r), c > a && a > -c && (a = 0), a
                    },
                    ue = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    he = function(e, t, i) {
                        return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 255 * (1 > 6 * e ? t + (i - t) * e * 6 : .5 > e ? i : 2 > 3 * e ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                    },
                    pe = r.parseColor = function(e, t) {
                        var i, n, o, s, r, a, l, c, d, u, h;
                        if (e)
                            if ("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e];
                            else {
                                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), ue[e]) i = ue[e];
                                else if ("#" === e.charAt(0)) 4 === e.length && (n = e.charAt(1), o = e.charAt(2), s = e.charAt(3), e = "#" + n + n + o + o + s + s), e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & 255, 255 & e];
                                else if ("hsl" === e.substr(0, 3))
                                    if (i = h = e.match(y), t) {
                                        if (-1 !== e.indexOf("=")) return e.match(b)
                                    } else r = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, o = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - o, i.length > 3 && (i[3] = Number(e[3])), i[0] = he(r + 1 / 3, n, o), i[1] = he(r, n, o), i[2] = he(r - 1 / 3, n, o);
                                else i = e.match(y) || ue.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            } else i = ue.black;
                        return t && !h && (n = i[0] / 255, o = i[1] / 255, s = i[2] / 255, c = Math.max(n, o, s), d = Math.min(n, o, s), l = (c + d) / 2, c === d ? r = a = 0 : (u = c - d, a = l > .5 ? u / (2 - c - d) : u / (c + d), r = c === n ? (o - s) / u + (s > o ? 6 : 0) : c === o ? (s - n) / u + 2 : (n - o) / u + 4, r *= 60), i[0] = r + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    fe = function(e, t) {
                        var i, n, o, s = e.match(me) || [],
                            r = 0,
                            a = "";
                        if (!s.length) return e;
                        for (i = 0; i < s.length; i++) n = s[i], o = e.substr(r, e.indexOf(n, r) - r), r += o.length + n.length, n = pe(n, t), 3 === n.length && n.push(1), a += o + (t ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a + e.substr(r)
                    },
                    me = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (c in ue) me += "|" + c + "\\b";
                me = new RegExp(me + ")", "gi"), r.colorStringFilter = function(e) {
                    var t, i = e[0] + " " + e[1];
                    me.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = fe(e[0], t), e[1] = fe(e[1], t)), me.lastIndex = 0
                }, t.defaultStringFilter || (t.defaultStringFilter = r.colorStringFilter);
                var ge = function(e, t, i, n) {
                        if (null == e) return function(e) {
                            return e
                        };
                        var o, s = t ? (e.match(me) || [""])[0] : "",
                            r = e.split(s).join("").match(x) || [],
                            a = e.substr(0, e.indexOf(r[0])),
                            l = ")" === e.charAt(e.length - 1) ? ")" : "",
                            c = -1 !== e.indexOf(" ") ? " " : ",",
                            d = r.length,
                            u = d > 0 ? r[0].replace(y, "") : "";
                        return d ? o = t ? function(e) {
                            var t, h, p, f;
                            if ("number" == typeof e) e += u;
                            else if (n && L.test(e)) {
                                for (f = e.replace(L, "|").split("|"), p = 0; p < f.length; p++) f[p] = o(f[p]);
                                return f.join(",")
                            }
                            if (t = (e.match(me) || [s])[0], h = e.split(t).join("").match(x) || [], p = h.length, d > p--)
                                for (; ++p < d;) h[p] = i ? h[(p - 1) / 2 | 0] : r[p];
                            return a + h.join(c) + c + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                        } : function(e) {
                            var t, s, h;
                            if ("number" == typeof e) e += u;
                            else if (n && L.test(e)) {
                                for (s = e.replace(L, "|").split("|"), h = 0; h < s.length; h++) s[h] = o(s[h]);
                                return s.join(",")
                            }
                            if (t = e.match(x) || [], h = t.length, d > h--)
                                for (; ++h < d;) t[h] = i ? t[(h - 1) / 2 | 0] : r[h];
                            return a + t.join(c) + l
                        } : function(e) {
                            return e
                        }
                    },
                    ve = function(e) {
                        return e = e.split(","),
                            function(t, i, n, o, s, r, a) {
                                var l, c = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[e[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                return o.parse(t, a, s, r)
                            }
                    },
                    ye = (q._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t, i, n, o, s, r = this.data, a = r.proxy, l = r.firstMPT, c = 1e-6; l;) t = a[l.v], l.r ? t = Math.round(t) : c > t && t > -c && (t = 0), l.t[l.p] = t, l = l._next;
                        if (r.autoRotate && (r.autoRotate.rotation = r.mod ? r.mod(a.rotation, this.t) : a.rotation), 1 === e || 0 === e)
                            for (l = r.firstMPT, s = 1 === e ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (o = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) o += i["xn" + n] + i["xs" + (n + 1)];
                                        i[s] = o
                                    }
                                } else i[s] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(e, t, i, n, o) {
                        this.t = e, this.p = t, this.v = i, this.r = o, n && (n._prev = this, this._next = n)
                    }),
                    be = (q._parseToProxy = function(e, t, i, n, o, s) {
                        var r, a, l, c, d, u = n,
                            h = {},
                            p = {},
                            f = i._transform,
                            m = z;
                        for (i._transform = null, z = t, n = d = i.parse(e, t, n, o), z = m, s && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                            if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, h[a] = n.s, s || (c = new ye(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                                for (r = n.l; --r > 0;) l = "xn" + r, a = n.p + "_" + l, p[a] = n.data[l], h[a] = n[l], s || (c = new ye(n, l, a, c, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: h,
                            end: p,
                            firstMPT: c,
                            pt: d
                        }
                    }, q.CSSPropTween = function(e, t, n, o, r, a, l, c, d, u, h) {
                        this.t = e, this.p = t, this.s = n, this.c = o, this.n = l || t, e instanceof be || s.push(this.n), this.r = c, this.type = a || 0, d && (this.pr = d, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === h ? n + o : h, r && (this._next = r, r._prev = this)
                    }),
                    xe = function(e, t, i, n, o, s) {
                        var r = new be(e, t, i, n - i, o, (-1), s);
                        return r.b = i, r.e = r.xs0 = n, r
                    },
                    _e = r.parseComplex = function(e, t, i, n, o, s, a, l, c, u) {
                        i = i || s || "", "function" == typeof n && (n = n(v, g)), a = new be(e, t, 0, 0, a, u ? 2 : 1, null, (!1), l, i, n), n += "", o && me.test(n + i) && (n = [i, n], r.colorStringFilter(n), i = n[0], n = n[1]);
                        var h, p, f, m, x, _, w, T, S, C, k, $, P, E = i.split(", ").join(",").split(" "),
                            A = n.split(", ").join(",").split(" "),
                            M = E.length,
                            F = d !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (E = E.join(" ").replace(L, ", ").split(" "), A = A.join(" ").replace(L, ", ").split(" "), M = E.length), M !== A.length && (E = (s || "").split(" "), M = E.length), a.plugin = c, a.setRatio = u, me.lastIndex = 0, h = 0; M > h; h++)
                            if (m = E[h], x = A[h], T = parseFloat(m), T || 0 === T) a.appendXtra("", T, le(x, T), x.replace(b, ""), F && -1 !== x.indexOf("px"), !0);
                            else if (o && me.test(m)) $ = x.indexOf(")") + 1, $ = ")" + ($ ? x.substr($) : ""), P = -1 !== x.indexOf("hsl") && U, C = x, m = pe(m, P), x = pe(x, P), S = m.length + x.length > 6, S && !U && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(A[h]).join("transparent")) : (U || (S = !1), P ? a.appendXtra(C.substr(0, C.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], le(x[0], m[0]), ",", !1, !0).appendXtra("", m[1], le(x[1], m[1]), "%,", !1).appendXtra("", m[2], le(x[2], m[2]), S ? "%," : "%" + $, !1) : a.appendXtra(C.substr(0, C.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], x[0] - m[0], ",", !0, !0).appendXtra("", m[1], x[1] - m[1], ",", !0).appendXtra("", m[2], x[2] - m[2], S ? "," : $, !0), S && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (x.length < 4 ? 1 : x[3]) - m, $, !1))), me.lastIndex = 0;
                        else if (_ = m.match(y)) {
                            if (w = x.match(b), !w || w.length !== _.length) return a;
                            for (f = 0, p = 0; p < _.length; p++) k = _[p], C = m.indexOf(k, f), a.appendXtra(m.substr(f, C - f), Number(k), le(w[p], k), "", F && "px" === m.substr(C + k.length, 2), 0 === p), f = C + k.length;
                            a["xs" + a.l] += m.substr(f)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for ($ = a.xs0 + a.data.s, h = 1; h < a.l; h++) $ += a["xs" + h] + a.data["xn" + h];
                            a.e = $ + a["xs" + h]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    we = 9;
                for (c = be.prototype, c.l = c.pr = 0; --we > 0;) c["xn" + we] = 0, c["xs" + we] = "";
                c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(e, t, i, n, o, s) {
                    var r = this,
                        a = r.l;
                    return r["xs" + a] += s && (a || r["xs" + a]) ? " " + e : e || "", i || 0 === a || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = n || "", a > 0 ? (r.data["xn" + a] = t + i, r.rxp["xn" + a] = o, r["xn" + a] = t, r.plugin || (r.xfirst = new be(r, "xn" + a, t, i, r.xfirst || r, 0, r.n, o, r.pr), r.xfirst.xs0 = 0), r) : (r.data = {
                        s: t + i
                    }, r.rxp = {}, r.s = t, r.c = i, r.r = o, r)) : (r["xs" + a] += t + (n || ""), r)
                };
                var Te = function(e, t) {
                        t = t || {}, this.p = t.prefix ? Q(e) || e : e, l[e] = l[this.p] = this, this.format = t.formatter || ge(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    Se = q._registerComplexSpecialProp = function(e, t, i) {
                        "object" != typeof t && (t = {
                            parser: i
                        });
                        var n, o, s = e.split(","),
                            r = t.defaultValue;
                        for (i = i || [r], n = 0; n < s.length; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = i[n] || r, o = new Te(s[n], t)
                    },
                    Ce = q._registerPluginProp = function(e) {
                        if (!l[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            Se(e, {
                                parser: function(e, i, n, o, s, r, c) {
                                    var d = a.com.greensock.plugins[t];
                                    return d ? (d._cssRegister(), l[n].parse(e, i, n, o, s, r, c)) : (Z("Error: " + t + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                c = Te.prototype, c.parseComplex = function(e, t, i, n, o, s) {
                    var r, a, l, c, d, u, h = this.keyword;
                    if (this.multi && (L.test(i) || L.test(t) ? (a = t.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : h && (a = [t], l = [i])), l) {
                        for (c = l.length > a.length ? l.length : a.length, r = 0; c > r; r++) t = a[r] = a[r] || this.dflt, i = l[r] = l[r] || this.dflt, h && (d = t.indexOf(h), u = i.indexOf(h), d !== u && (-1 === u ? a[r] = a[r].split(h).join("") : -1 === d && (a[r] += " " + h)));
                        t = a.join(", "), i = l.join(", ")
                    }
                    return _e(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, o, s)
                }, c.parse = function(e, t, i, n, s, r, a) {
                    return this.parseComplex(e.style, this.format(J(e, this.p, o, !1, this.dflt)), this.format(t), s, r)
                }, r.registerSpecialProp = function(e, t, i) {
                    Se(e, {
                        parser: function(e, n, o, s, r, a, l) {
                            var c = new be(e, o, 0, 0, r, 2, o, (!1), i);
                            return c.plugin = a, c.setRatio = t(e, n, s._tween, o), c
                        },
                        priority: i
                    })
                }, r.useSVGTransformAttr = !0;
                var ke, $e = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Pe = Q("transform"),
                    Ee = V + "transform",
                    Ae = Q("transformOrigin"),
                    Me = null !== Q("perspective"),
                    Fe = q.Transform = function() {
                        this.perspective = parseFloat(r.defaultTransformPerspective) || 0, this.force3D = !(r.defaultForce3D === !1 || !Me) && (r.defaultForce3D || "auto")
                    },
                    Oe = _gsScope.SVGElement,
                    Le = function(e, t, i) {
                        var n, o = B.createElementNS("http://www.w3.org/2000/svg", e),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) o.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return t.appendChild(o), o
                    },
                    Re = B.documentElement || {},
                    De = function() {
                        var e, t, i, n = m || /Android/i.test(X) && !_gsScope.chrome;
                        return B.createElementNS && !n && (e = Le("svg", Re), t = Le("rect", e, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = t.getBoundingClientRect().width, t.style[Ae] = "50% 50%", t.style[Pe] = "scaleX(0.5)", n = i === t.getBoundingClientRect().width && !(p && Me), Re.removeChild(e)), n
                    }(),
                    Ie = function(e, t, i, n, o, s) {
                        var a, l, c, d, u, h, p, f, m, g, v, y, b, x, _ = e._gsTransform,
                            w = je(e, !0);
                        _ && (b = _.xOrigin, x = _.yOrigin), (!n || (a = n.split(" ")).length < 2) && (p = e.getBBox(), 0 === p.x && 0 === p.y && p.width + p.height === 0 && (p = {
                            x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                            y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), t = ae(t).split(" "), a = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * p.width : parseFloat(t[0])) + p.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * p.height : parseFloat(t[1])) + p.y]), i.xOrigin = d = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), n && w !== He && (h = w[0], p = w[1], f = w[2], m = w[3], g = w[4], v = w[5], y = h * m - p * f, y && (l = d * (m / y) + u * (-f / y) + (f * v - m * g) / y, c = d * (-p / y) + u * (h / y) - (h * v - p * g) / y, d = i.xOrigin = a[0] = l, u = i.yOrigin = a[1] = c)), _ && (s && (i.xOffset = _.xOffset, i.yOffset = _.yOffset, _ = i), o || o !== !1 && r.defaultSmoothOrigin !== !1 ? (l = d - b, c = u - x, _.xOffset += l * w[0] + c * w[2] - l, _.yOffset += l * w[1] + c * w[3] - c) : _.xOffset = _.yOffset = 0), s || e.setAttribute("data-svg-origin", a.join(" "))
                    },
                    ze = function(e) {
                        var t, i = H("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            o = this.nextSibling,
                            s = this.style.cssText;
                        if (Re.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
                            t = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = ze
                        } catch (r) {} else this._originalGetBBox && (t = this._originalGetBBox());
                        return o ? n.insertBefore(this, o) : n.appendChild(this), Re.removeChild(i), this.style.cssText = s, t
                    },
                    Ne = function(e) {
                        try {
                            return e.getBBox()
                        } catch (t) {
                            return ze.call(e, !0)
                        }
                    },
                    Be = function(e) {
                        return !(!(Oe && e.getCTM && Ne(e)) || e.parentNode && !e.ownerSVGElement)
                    },
                    He = [1, 0, 0, 1, 0, 0],
                    je = function(e, t) {
                        var i, n, o, s, r, a, l = e._gsTransform || new Fe,
                            c = 1e5,
                            d = e.style;
                        if (Pe ? n = J(e, Ee, null, !0) : e.currentStyle && (n = e.currentStyle.filter.match(F), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Pe || !(a = "none" === K(e).display) && e.parentNode || (a && (s = d.display, d.display = "block"), e.parentNode || (r = 1, Re.appendChild(e)), n = J(e, Ee, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? d.display = s : a && Ye(d, "display"), r && Re.removeChild(e)), (l.svg || e.getCTM && Be(e)) && (i && -1 !== (d[Pe] + "").indexOf("matrix") && (n = d[Pe], i = 0), o = e.getAttribute("transform"), i && o && (-1 !== o.indexOf("matrix") ? (n = o, i = 0) : -1 !== o.indexOf("translate") && (n = "matrix(1,0,0,1," + o.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return He;
                        for (o = (n || "").match(y) || [], we = o.length; --we > -1;) s = Number(o[we]), o[we] = (r = s - (s |= 0)) ? (r * c + (0 > r ? -.5 : .5) | 0) / c + s : s;
                        return t && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o
                    },
                    We = q.getTransform = function(e, i, n, o) {
                        if (e._gsTransform && n && !o) return e._gsTransform;
                        var s, a, l, c, d, u, h = n ? e._gsTransform || new Fe : new Fe,
                            p = h.scaleX < 0,
                            f = 2e-5,
                            m = 1e5,
                            g = Me ? parseFloat(J(e, Ae, i, !1, "0 0 0").split(" ")[2]) || h.zOrigin || 0 : 0,
                            v = parseFloat(r.defaultTransformPerspective) || 0;
                        if (h.svg = !(!e.getCTM || !Be(e)), h.svg && (Ie(e, J(e, Ae, i, !1, "50% 50%") + "", h, e.getAttribute("data-svg-origin")), ke = r.useSVGTransformAttr || De), s = je(e), s !== He) {
                            if (16 === s.length) {
                                var y, b, x, _, w, T = s[0],
                                    S = s[1],
                                    C = s[2],
                                    k = s[3],
                                    $ = s[4],
                                    P = s[5],
                                    E = s[6],
                                    A = s[7],
                                    M = s[8],
                                    F = s[9],
                                    O = s[10],
                                    L = s[12],
                                    R = s[13],
                                    D = s[14],
                                    z = s[11],
                                    N = Math.atan2(E, O);
                                h.zOrigin && (D = -h.zOrigin, L = M * D - s[12], R = F * D - s[13], D = O * D + h.zOrigin - s[14]), h.rotationX = N * I, N && (_ = Math.cos(-N),
                                    w = Math.sin(-N), y = $ * _ + M * w, b = P * _ + F * w, x = E * _ + O * w, M = $ * -w + M * _, F = P * -w + F * _, O = E * -w + O * _, z = A * -w + z * _, $ = y, P = b, E = x), N = Math.atan2(-C, O), h.rotationY = N * I, N && (_ = Math.cos(-N), w = Math.sin(-N), y = T * _ - M * w, b = S * _ - F * w, x = C * _ - O * w, F = S * w + F * _, O = C * w + O * _, z = k * w + z * _, T = y, S = b, C = x), N = Math.atan2(S, T), h.rotation = N * I, N && (_ = Math.cos(N), w = Math.sin(N), y = T * _ + S * w, b = $ * _ + P * w, x = M * _ + F * w, S = S * _ - T * w, P = P * _ - $ * w, F = F * _ - M * w, T = y, $ = b, M = x), h.rotationX && Math.abs(h.rotationX) + Math.abs(h.rotation) > 359.9 && (h.rotationX = h.rotation = 0, h.rotationY = 180 - h.rotationY), N = Math.atan2($, P), h.scaleX = (Math.sqrt(T * T + S * S + C * C) * m + .5 | 0) / m, h.scaleY = (Math.sqrt(P * P + E * E) * m + .5 | 0) / m, h.scaleZ = (Math.sqrt(M * M + F * F + O * O) * m + .5 | 0) / m, T /= h.scaleX, $ /= h.scaleY, S /= h.scaleX, P /= h.scaleY, Math.abs(N) > f ? (h.skewX = N * I, $ = 0, "simple" !== h.skewType && (h.scaleY *= 1 / Math.cos(N))) : h.skewX = 0, h.perspective = z ? 1 / (0 > z ? -z : z) : 0, h.x = L, h.y = R, h.z = D, h.svg && (h.x -= h.xOrigin - (h.xOrigin * T - h.yOrigin * $), h.y -= h.yOrigin - (h.yOrigin * S - h.xOrigin * P))
                            } else if (!Me || o || !s.length || h.x !== s[4] || h.y !== s[5] || !h.rotationX && !h.rotationY) {
                                var B = s.length >= 6,
                                    H = B ? s[0] : 1,
                                    j = s[1] || 0,
                                    W = s[2] || 0,
                                    q = B ? s[3] : 1;
                                h.x = s[4] || 0, h.y = s[5] || 0, l = Math.sqrt(H * H + j * j), c = Math.sqrt(q * q + W * W), d = H || j ? Math.atan2(j, H) * I : h.rotation || 0, u = W || q ? Math.atan2(W, q) * I + d : h.skewX || 0, h.scaleX = l, h.scaleY = c, h.rotation = d, h.skewX = u, Me && (h.rotationX = h.rotationY = h.z = 0, h.perspective = v, h.scaleZ = 1), h.svg && (h.x -= h.xOrigin - (h.xOrigin * H + h.yOrigin * W), h.y -= h.yOrigin - (h.xOrigin * j + h.yOrigin * q))
                            }
                            Math.abs(h.skewX) > 90 && Math.abs(h.skewX) < 270 && (p ? (h.scaleX *= -1, h.skewX += h.rotation <= 0 ? 180 : -180, h.rotation += h.rotation <= 0 ? 180 : -180) : (h.scaleY *= -1, h.skewX += h.skewX <= 0 ? 180 : -180)), h.zOrigin = g;
                            for (a in h) h[a] < f && h[a] > -f && (h[a] = 0)
                        }
                        return n && (e._gsTransform = h, h.svg && (ke && e.style[Pe] ? t.delayedCall(.001, function() {
                            Ye(e.style, Pe)
                        }) : !ke && e.getAttribute("transform") && t.delayedCall(.001, function() {
                            e.removeAttribute("transform")
                        }))), h
                    },
                    qe = function(e) {
                        var t, i, n = this.data,
                            o = -n.rotation * D,
                            s = o + n.skewX * D,
                            r = 1e5,
                            a = (Math.cos(o) * n.scaleX * r | 0) / r,
                            l = (Math.sin(o) * n.scaleX * r | 0) / r,
                            c = (Math.sin(s) * -n.scaleY * r | 0) / r,
                            d = (Math.cos(s) * n.scaleY * r | 0) / r,
                            u = this.t.style,
                            h = this.t.currentStyle;
                        if (h) {
                            i = l, l = -c, c = -i, t = h.filter, u.filter = "";
                            var p, f, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== h.position,
                                b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + d,
                                x = n.x + g * n.xPercent / 100,
                                _ = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, f = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, x += p - (p * a + f * l), _ += f - (p * c + f * d)), y ? (p = g / 2, f = v / 2, b += ", Dx=" + (p - (p * a + f * l) + x) + ", Dy=" + (f - (p * c + f * d) + _) + ")") : b += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = t.replace(O, b) : u.filter = b + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === c && 1 === d && (y && -1 === b.indexOf("Dx=0, Dy=0") || T.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && u.removeAttribute("filter")), !y) {
                                var S, C, k, $ = 8 > m ? 1 : -1;
                                for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + x), n.ieOffsetY = Math.round((v - ((0 > d ? -d : d) * v + (0 > c ? -c : c) * g)) / 2 + _), we = 0; 4 > we; we++) C = se[we], S = h[C], i = -1 !== S.indexOf("px") ? parseFloat(S) : ee(this.t, C, parseFloat(S), S.replace(w, "")) || 0, k = i !== n[C] ? 2 > we ? -n.ieOffsetX : -n.ieOffsetY : 2 > we ? p - n.ieOffsetX : f - n.ieOffsetY, u[C] = (n[C] = Math.round(i - k * (0 === we || 2 === we ? 1 : $))) + "px"
                            }
                        }
                    },
                    Xe = q.set3DTransformRatio = q.setTransformRatio = function(e) {
                        var t, i, n, o, s, r, a, l, c, d, u, h, f, m, g, v, y, b, x, _, w, T, S, C = this.data,
                            k = this.t.style,
                            $ = C.rotation,
                            P = C.rotationX,
                            E = C.rotationY,
                            A = C.scaleX,
                            M = C.scaleY,
                            F = C.scaleZ,
                            O = C.x,
                            L = C.y,
                            R = C.z,
                            I = C.svg,
                            z = C.perspective,
                            N = C.force3D,
                            B = C.skewY,
                            H = C.skewX;
                        if (B && (H += B, $ += B), ((1 === e || 0 === e) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !R && !z && !E && !P && 1 === F || ke && I || !Me) return void($ || H || I ? ($ *= D, T = H * D, S = 1e5, i = Math.cos($) * A, s = Math.sin($) * A, n = Math.sin($ - T) * -M, r = Math.cos($ - T) * M, T && "simple" === C.skewType && (t = Math.tan(T - B * D), t = Math.sqrt(1 + t * t), n *= t, r *= t, B && (t = Math.tan(B * D), t = Math.sqrt(1 + t * t), i *= t, s *= t)), I && (O += C.xOrigin - (C.xOrigin * i + C.yOrigin * n) + C.xOffset, L += C.yOrigin - (C.xOrigin * s + C.yOrigin * r) + C.yOffset, ke && (C.xPercent || C.yPercent) && (g = this.t.getBBox(), O += .01 * C.xPercent * g.width, L += .01 * C.yPercent * g.height), g = 1e-6, g > O && O > -g && (O = 0), g > L && L > -g && (L = 0)), x = (i * S | 0) / S + "," + (s * S | 0) / S + "," + (n * S | 0) / S + "," + (r * S | 0) / S + "," + O + "," + L + ")", I && ke ? this.t.setAttribute("transform", "matrix(" + x) : k[Pe] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + x) : k[Pe] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + M + "," + O + "," + L + ")");
                        if (p && (g = 1e-4, g > A && A > -g && (A = F = 2e-5), g > M && M > -g && (M = F = 2e-5), !z || C.z || C.rotationX || C.rotationY || (z = 0)), $ || H) $ *= D, v = i = Math.cos($), y = s = Math.sin($), H && ($ -= H * D, v = Math.cos($), y = Math.sin($), "simple" === C.skewType && (t = Math.tan((H - B) * D), t = Math.sqrt(1 + t * t), v *= t, y *= t, C.skewY && (t = Math.tan(B * D), t = Math.sqrt(1 + t * t), i *= t, s *= t))), n = -y, r = v;
                        else {
                            if (!(E || P || 1 !== F || z || I)) return void(k[Pe] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + L + "px," + R + "px)" + (1 !== A || 1 !== M ? " scale(" + A + "," + M + ")" : ""));
                            i = r = 1, n = s = 0
                        }
                        d = 1, o = a = l = c = u = h = 0, f = z ? -1 / z : 0, m = C.zOrigin, g = 1e-6, _ = ",", w = "0", $ = E * D, $ && (v = Math.cos($), y = Math.sin($), l = -y, u = f * -y, o = i * y, a = s * y, d = v, f *= v, i *= v, s *= v), $ = P * D, $ && (v = Math.cos($), y = Math.sin($), t = n * v + o * y, b = r * v + a * y, c = d * y, h = f * y, o = n * -y + o * v, a = r * -y + a * v, d *= v, f *= v, n = t, r = b), 1 !== F && (o *= F, a *= F, d *= F, f *= F), 1 !== M && (n *= M, r *= M, c *= M, h *= M), 1 !== A && (i *= A, s *= A, l *= A, u *= A), (m || I) && (m && (O += o * -m, L += a * -m, R += d * -m + m), I && (O += C.xOrigin - (C.xOrigin * i + C.yOrigin * n) + C.xOffset, L += C.yOrigin - (C.xOrigin * s + C.yOrigin * r) + C.yOffset), g > O && O > -g && (O = w), g > L && L > -g && (L = w), g > R && R > -g && (R = 0)), x = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", x += (g > i && i > -g ? w : i) + _ + (g > s && s > -g ? w : s) + _ + (g > l && l > -g ? w : l), x += _ + (g > u && u > -g ? w : u) + _ + (g > n && n > -g ? w : n) + _ + (g > r && r > -g ? w : r), P || E || 1 !== F ? (x += _ + (g > c && c > -g ? w : c) + _ + (g > h && h > -g ? w : h) + _ + (g > o && o > -g ? w : o), x += _ + (g > a && a > -g ? w : a) + _ + (g > d && d > -g ? w : d) + _ + (g > f && f > -g ? w : f) + _) : x += ",0,0,0,0,1,0,", x += O + _ + L + _ + R + _ + (z ? 1 + -R / z : 1) + ")", k[Pe] = x
                    };
                c = Fe.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, Se("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(e, t, i, n, s, a, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var c, d = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (c = l[i], l[i] = t), d && (l.scale = d(v, e));
                        var u, h, p, f, m, y, b, x, _, w = e._gsTransform,
                            T = e.style,
                            S = 1e-6,
                            C = $e.length,
                            k = l,
                            $ = {},
                            P = "transformOrigin",
                            E = We(e, o, !0, k.parseTransform),
                            A = k.transform && ("function" == typeof k.transform ? k.transform(v, g) : k.transform);
                        if (E.skewType = k.skewType || E.skewType || r.defaultSkewType, n._transform = E, A && "string" == typeof A && Pe) h = j.style, h[Pe] = A, h.display = "block", h.position = "absolute", B.body.appendChild(j), u = We(j, null, !1), "simple" === E.skewType && (u.scaleY *= Math.cos(u.skewX * D)), E.svg && (y = E.xOrigin, b = E.yOrigin, u.x -= E.xOffset, u.y -= E.yOffset, (k.transformOrigin || k.svgOrigin) && (A = {}, Ie(e, ae(k.transformOrigin), A, k.svgOrigin, k.smoothOrigin, !0), y = A.xOrigin, b = A.yOrigin, u.x -= A.xOffset - E.xOffset, u.y -= A.yOffset - E.yOffset), (y || b) && (x = je(j, !0), u.x -= y - (y * x[0] + b * x[2]), u.y -= b - (y * x[1] + b * x[3]))), B.body.removeChild(j), u.perspective || (u.perspective = E.perspective), null != k.xPercent && (u.xPercent = ce(k.xPercent, E.xPercent)), null != k.yPercent && (u.yPercent = ce(k.yPercent, E.yPercent));
                        else if ("object" == typeof k) {
                            if (u = {
                                    scaleX: ce(null != k.scaleX ? k.scaleX : k.scale, E.scaleX),
                                    scaleY: ce(null != k.scaleY ? k.scaleY : k.scale, E.scaleY),
                                    scaleZ: ce(k.scaleZ, E.scaleZ),
                                    x: ce(k.x, E.x),
                                    y: ce(k.y, E.y),
                                    z: ce(k.z, E.z),
                                    xPercent: ce(k.xPercent, E.xPercent),
                                    yPercent: ce(k.yPercent, E.yPercent),
                                    perspective: ce(k.transformPerspective, E.perspective)
                                }, m = k.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (h in m) k[h] = m[h];
                                else k.rotation = m;
                                "string" == typeof k.x && -1 !== k.x.indexOf("%") && (u.x = 0, u.xPercent = ce(k.x, E.xPercent)), "string" == typeof k.y && -1 !== k.y.indexOf("%") && (u.y = 0, u.yPercent = ce(k.y, E.yPercent)), u.rotation = de("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : E.rotation, E.rotation, "rotation", $), Me && (u.rotationX = de("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", $), u.rotationY = de("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", $)), u.skewX = de(k.skewX, E.skewX), u.skewY = de(k.skewY, E.skewY)
                        }
                        for (Me && null != k.force3D && (E.force3D = k.force3D, f = !0), p = E.force3D || E.z || E.rotationX || E.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == k.scale || (u.scaleZ = 1); --C > -1;) _ = $e[C], A = u[_] - E[_], (A > S || -S > A || null != k[_] || null != z[_]) && (f = !0, s = new be(E, _, E[_], A, s), _ in $ && (s.e = $[_]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return A = k.transformOrigin, E.svg && (A || k.svgOrigin) && (y = E.xOffset, b = E.yOffset, Ie(e, ae(A), u, k.svgOrigin, k.smoothOrigin), s = xe(E, "xOrigin", (w ? E : u).xOrigin, u.xOrigin, s, P), s = xe(E, "yOrigin", (w ? E : u).yOrigin, u.yOrigin, s, P), (y !== E.xOffset || b !== E.yOffset) && (s = xe(E, "xOffset", w ? y : E.xOffset, E.xOffset, s, P), s = xe(E, "yOffset", w ? b : E.yOffset, E.yOffset, s, P)), A = "0px 0px"), (A || Me && p && E.zOrigin) && (Pe ? (f = !0, _ = Ae, A = (A || J(e, _, o, !1, "50% 50%")) + "", s = new be(T, _, 0, 0, s, (-1), P), s.b = T[_], s.plugin = a, Me ? (h = E.zOrigin, A = A.split(" "), E.zOrigin = (A.length > 2 && (0 === h || "0px" !== A[2]) ? parseFloat(A[2]) : h) || 0, s.xs0 = s.e = A[0] + " " + (A[1] || "50%") + " 0px", s = new be(E, "zOrigin", 0, 0, s, (-1), s.n), s.b = h, s.xs0 = s.e = E.zOrigin) : s.xs0 = s.e = A) : ae(A + "", E)), f && (n._transformType = E.svg && ke || !p && 3 !== this._transformType ? 2 : 3), c && (l[i] = c), d && (l.scale = d), s
                    },
                    prefix: !0
                }), Se("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Se("borderRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, i, s, r, a) {
                        t = this.format(t);
                        var l, c, d, u, h, p, f, m, g, v, y, b, x, _, w, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = e.style;
                        for (g = parseFloat(e.offsetWidth), v = parseFloat(e.offsetHeight), l = t.split(" "), c = 0; c < S.length; c++) this.p.indexOf("border") && (S[c] = Q(S[c])), h = u = J(e, S[c], o, !1, "0px"), -1 !== h.indexOf(" ") && (u = h.split(" "), h = u[0], u = u[1]), p = d = l[c], f = parseFloat(h), b = h.substr((f + "").length), x = "=" === p.charAt(1), x ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), y = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p), y = p.substr((m + "").length)), "" === y && (y = n[i] || b), y !== b && (_ = ee(e, "borderLeft", f, b), w = ee(e, "borderTop", f, b), "%" === y ? (h = _ / g * 100 + "%", u = w / v * 100 + "%") : "em" === y ? (T = ee(e, "borderLeft", 1, "em"), h = _ / T + "em", u = w / T + "em") : (h = _ + "px", u = w + "px"), x && (p = parseFloat(h) + m + y, d = parseFloat(u) + m + y)), r = _e(C, S[c], h + " " + u, p + " " + d, !1, "0px", r);
                        return r
                    },
                    prefix: !0,
                    formatter: ge("0px 0px 0px 0px", !1, !0)
                }), Se("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, i, n, s, r) {
                        return _e(e.style, i, this.format(J(e, i, o, !1, "0px 0px")), this.format(t), !1, "0px", s)
                    },
                    prefix: !0,
                    formatter: ge("0px 0px", !1, !0)
                }), Se("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(e, t, i, n, s, r) {
                        var a, l, c, d, u, h, p = "background-position",
                            f = o || K(e, null),
                            g = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(t);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (h = J(e, "backgroundImage").replace(E, ""), h && "none" !== h)) {
                            for (a = g.split(" "), l = v.split(" "), W.setAttribute("src", h), c = 2; --c > -1;) g = a[c], d = -1 !== g.indexOf("%"), d !== (-1 !== l[c].indexOf("%")) && (u = 0 === c ? e.offsetWidth - W.width : e.offsetHeight - W.height, a[c] = d ? parseFloat(g) / 100 * u + "px" : parseFloat(g) / u * 100 + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(e.style, g, v, s, r)
                    },
                    formatter: ae
                }), Se("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(e) {
                        return e += "", ae(-1 === e.indexOf(" ") ? e + " " + e : e)
                    }
                }), Se("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Se("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Se("transformStyle", {
                    prefix: !0
                }), Se("backfaceVisibility", {
                    prefix: !0
                }), Se("userSelect", {
                    prefix: !0
                }), Se("margin", {
                    parser: ve("marginTop,marginRight,marginBottom,marginLeft")
                }), Se("padding", {
                    parser: ve("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Se("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(e, t, i, n, s, r) {
                        var a, l, c;
                        return 9 > m ? (l = e.currentStyle, c = 8 > m ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", t = this.format(t).split(",").join(c)) : (a = this.format(J(e, this.p, o, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, a, t, s, r)
                    }
                }), Se("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Se("autoRound,strictUnits", {
                    parser: function(e, t, i, n, o) {
                        return o
                    }
                }), Se("border", {
                    defaultValue: "0px solid #000",
                    parser: function(e, t, i, n, s, r) {
                        var a = J(e, "borderTopWidth", o, !1, "0px"),
                            l = this.format(t).split(" "),
                            c = l[0].replace(w, "");
                        return "px" !== c && (a = parseFloat(a) / ee(e, "borderTopWidth", 1, c) + c), this.parseComplex(e.style, this.format(a + " " + J(e, "borderTopStyle", o, !1, "solid") + " " + J(e, "borderTopColor", o, !1, "#000")), l.join(" "), s, r)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(me) || ["#000"])[0]
                    }
                }), Se("borderWidth", {
                    parser: ve("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Se("float,cssFloat,styleFloat", {
                    parser: function(e, t, i, n, o, s) {
                        var r = e.style,
                            a = "cssFloat" in r ? "cssFloat" : "styleFloat";
                        return new be(r, a, 0, 0, o, (-1), i, (!1), 0, r[a], t)
                    }
                });
                var Ue = function(e) {
                    var t, i = this.t,
                        n = i.filter || J(this.data, "filter") || "",
                        o = this.s + this.c * e | 0;
                    100 === o && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), t = !J(this.data, "filter")) : (i.filter = n.replace(C, ""), t = !0)), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + o + ")"), -1 === n.indexOf("pacity") ? 0 === o && this.xn1 || (i.filter = n + " alpha(opacity=" + o + ")") : i.filter = n.replace(T, "opacity=" + o))
                };
                Se("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(e, t, i, n, s, r) {
                        var a = parseFloat(J(e, "opacity", o, !1, "1")),
                            l = e.style,
                            c = "autoAlpha" === i;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), c && 1 === a && "hidden" === J(e, "visibility", o) && 0 !== t && (a = 0), U ? s = new be(l, "opacity", a, t - a, s) : (s = new be(l, "opacity", 100 * a, 100 * (t - a), s), s.xn1 = c ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = r, s.setRatio = Ue), c && (s = new be(l, "visibility", 0, 0, s, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var Ye = function(e, t) {
                        t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace($, "-$1").toLowerCase())) : e.removeAttribute(t))
                    },
                    Ze = function(e) {
                        if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.setAttribute("class", 0 === e ? this.b : this.e);
                            for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ye(i, t.p), t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Se("className", {
                    parser: function(e, t, n, s, r, a, l) {
                        var c, d, u, h, p, f = e.getAttribute("class") || "",
                            m = e.style.cssText;
                        if (r = s._classNamePT = new be(e, n, 0, 0, r, 2), r.setRatio = Ze, r.pr = -11, i = !0, r.b = f, d = ie(e, o), u = e._gsClassPT) {
                            for (h = {}, p = u.data; p;) h[p.p] = 1, p = p._next;
                            u.setRatio(1)
                        }
                        return e._gsClassPT = r, r.e = "=" !== t.charAt(1) ? t : f.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", r.e), c = ne(e, d, ie(e), l, h), e.setAttribute("class", f), r.data = c.firstMPT, e.style.cssText = m, r = r.xfirst = s.parse(e, c.difs, r, a)
                    }
                });
                var Ve = function(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, i, n, o, s, r = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) r.cssText = "", o = !0;
                        else
                            for (t = this.e.split(" ").join("").split(","), n = t.length; --n > -1;) i = t[n], l[i] && (l[i].parse === a ? o = !0 : i = "transformOrigin" === i ? Ae : l[i].p), Ye(r, i);
                        o && (Ye(r, Pe), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Se("clearProps", {
                        parser: function(e, t, n, o, s) {
                            return s = new be(e, n, 0, 0, s, 2), s.setRatio = Ve, s.e = t, s.pr = -10, s.data = o._tween, i = !0, s
                        }
                    }), c = "bezier,throwProps,physicsProps,physics2D".split(","), we = c.length; we--;) Ce(c[we]);
                c = r.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(e, t, a, c) {
                    if (!e.nodeType) return !1;
                    this._target = g = e, this._tween = a, this._vars = t, v = c, d = t.autoRound, i = !1, n = t.suffixMap || r.suffixMap, o = K(e, ""), s = this._overwriteProps;
                    var p, m, y, b, x, _, w, T, C, k = e.style;
                    if (u && "" === k.zIndex && (p = J(e, "zIndex", o), ("auto" === p || "" === p) && this._addLazySet(k, "zIndex", 0)), "string" == typeof t && (b = k.cssText, p = ie(e, o), k.cssText = b + ";" + t, p = ne(e, p, ie(e)).difs, !U && S.test(t) && (p.opacity = parseFloat(RegExp.$1)), t = p, k.cssText = b), t.className ? this._firstPT = m = l.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = m = this.parse(e, t, null), this._transformType) {
                        for (C = 3 === this._transformType, Pe ? h && (u = !0, "" === k.zIndex && (w = J(e, "zIndex", o), ("auto" === w || "" === w) && this._addLazySet(k, "zIndex", 0)), f && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : k.zoom = 1, y = m; y && y._next;) y = y._next;
                        T = new be(e, "transform", 0, 0, null, 2), this._linkCSSP(T, null, y), T.setRatio = Pe ? Xe : qe, T.data = this._transform || We(e, o, !0), T.tween = a, T.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; m;) {
                            for (_ = m._next, y = b; y && y.pr > m.pr;) y = y._next;
                            (m._prev = y ? y._prev : x) ? m._prev._next = m: b = m, (m._next = y) ? y._prev = m : x = m, m = _
                        }
                        this._firstPT = b
                    }
                    return !0
                }, c.parse = function(e, t, i, s) {
                    var r, a, c, u, h, p, f, m, y, b, x = e.style;
                    for (r in t) {
                        if (p = t[r], "function" == typeof p && (p = p(v, g)), a = l[r]) i = a.parse(e, p, r, this, i, s, t);
                        else {
                            if ("--" === r.substr(0, 2)) {
                                this._tween._propLookup[r] = this._addTween.call(this._tween, e.style, "setProperty", K(e).getPropertyValue(r) + "", p + "", r, !1, r);
                                continue
                            }
                            h = J(e, r, o) + "", y = "string" == typeof p, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || y && k.test(p) ? (y || (p = pe(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = _e(x, r, h, p, !0, "transparent", i, 0, s)) : y && R.test(p) ? i = _e(x, r, h, p, !0, null, i, 0, s) : (c = parseFloat(h), f = c || 0 === c ? h.substr((c + "").length) : "", ("" === h || "auto" === h) && ("width" === r || "height" === r ? (c = re(e, r, o), f = "px") : "left" === r || "top" === r ? (c = te(e, r, o), f = "px") : (c = "opacity" !== r ? 0 : 1, f = "")), b = y && "=" === p.charAt(1), b ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(w, "")) : (u = parseFloat(p), m = y ? p.replace(w, "") : ""), "" === m && (m = r in n ? n[r] : f), p = u || 0 === u ? (b ? u + c : u) + m : t[r], f !== m && ("" !== m || "lineHeight" === r) && (u || 0 === u) && c && (c = ee(e, r, c, f), "%" === m ? (c /= ee(e, r, 100, "%") / 100, t.strictUnits !== !0 && (h = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= ee(e, r, 1, m) : "px" !== m && (u = ee(e, r, u, m), m = "px"), b && (u || 0 === u) && (p = u + c + m)), b && (u += c), !c && 0 !== c || !u && 0 !== u ? void 0 !== x[r] && (p || p + "" != "NaN" && null != p) ? (i = new be(x, r, u || c || 0, 0, i, (-1), r, (!1), 0, h, p), i.xs0 = "none" !== p || "display" !== r && -1 === r.indexOf("Style") ? p : h) : Z("invalid " + r + " tween value: " + t[r]) : (i = new be(x, r, c, u - c, i, 0, r, d !== !1 && ("px" === m || "zIndex" === r), 0, h, p), i.xs0 = m))
                        }
                        s && i && !i.plugin && (i.plugin = s)
                    }
                    return i
                }, c.setRatio = function(e) {
                    var t, i, n, o = this._firstPT,
                        s = 1e-6;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; o;) {
                                if (t = o.c * e + o.s, o.r ? t = Math.round(t) : s > t && t > -s && (t = 0), o.type)
                                    if (1 === o.type)
                                        if (n = o.l, 2 === n) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2;
                                        else if (3 === n) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3;
                                else if (4 === n) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4;
                                else if (5 === n) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4 + o.xn4 + o.xs5;
                                else {
                                    for (i = o.xs0 + t + o.xs1, n = 1; n < o.l; n++) i += o["xn" + n] + o["xs" + (n + 1)];
                                    o.t[o.p] = i
                                } else -1 === o.type ? o.t[o.p] = o.xs0 : o.setRatio && o.setRatio(e);
                                else o.t[o.p] = t + o.xs0;
                                o = o._next
                            } else
                                for (; o;) 2 !== o.type ? o.t[o.p] = o.b : o.setRatio(e), o = o._next;
                        else
                            for (; o;) {
                                if (2 !== o.type)
                                    if (o.r && -1 !== o.type)
                                        if (t = Math.round(o.s + o.c), o.type) {
                                            if (1 === o.type) {
                                                for (n = o.l, i = o.xs0 + t + o.xs1, n = 1; n < o.l; n++) i += o["xn" + n] + o["xs" + (n + 1)];
                                                o.t[o.p] = i
                                            }
                                        } else o.t[o.p] = t + o.xs0;
                                else o.t[o.p] = o.e;
                                else o.setRatio(e);
                                o = o._next
                            }
                }, c._enableTransforms = function(e) {
                    this._transform = this._transform || We(this._target, o, !0), this._transformType = this._transform.svg && ke || !e && 3 !== this._transformType ? 2 : 3
                };
                var Ge = function(e) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                c._addLazySet = function(e, t, i) {
                    var n = this._firstPT = new be(e, t, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Ge, n.data = this
                }, c._linkCSSP = function(e, t, i, n) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
                }, c._mod = function(e) {
                    for (var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next
                }, c._kill = function(t) {
                    var i, n, o, s = t;
                    if (t.autoAlpha || t.alpha) {
                        s = {};
                        for (n in t) s[n] = t[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    for (t.className && (i = this._classNamePT) && (o = i.xfirst, o && o._prev ? this._linkCSSP(o._prev, i._next, o._prev._prev) : o === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, o._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(t), n = i.plugin), i = i._next;
                    return e.prototype._kill.call(this, s)
                };
                var Qe = function(e, t, i) {
                    var n, o, s, r;
                    if (e.slice)
                        for (o = e.length; --o > -1;) Qe(e[o], t, i);
                    else
                        for (n = e.childNodes, o = n.length; --o > -1;) s = n[o], r = s.type, s.style && (t.push(ie(s)), i && i.push(s)), 1 !== r && 9 !== r && 11 !== r || !s.childNodes.length || Qe(s, t, i)
                };
                return r.cascadeTo = function(e, i, n) {
                    var o, s, r, a, l = t.to(e, i, n),
                        c = [l],
                        d = [],
                        u = [],
                        h = [],
                        p = t._internals.reservedProps;
                    for (e = l._targets || l.target, Qe(e, d, h), l.render(i, !0, !0), Qe(e, u), l.render(0, !0, !0), l._enabled(!0), o = h.length; --o > -1;)
                        if (s = ne(h[o], d[o], u[o]), s.firstMPT) {
                            s = s.difs;
                            for (r in n) p[r] && (s[r] = n[r]);
                            a = {};
                            for (r in s) a[r] = d[o][r];
                            c.push(t.fromTo(h[o], i, a, s))
                        }
                    return c
                }, e.activate([r]), r
            }, !0),
            function() {
                var e = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(e, t, i) {
                            return this._tween = i, !0
                        }
                    }),
                    t = function(e) {
                        for (; e;) e.f || e.blob || (e.m = Math.round), e = e._next
                    },
                    i = e.prototype;
                i._onInitAllProps = function() {
                    for (var e, i, n, o = this._tween, s = o.vars.roundProps.join ? o.vars.roundProps : o.vars.roundProps.split(","), r = s.length, a = {}, l = o._propLookup.roundProps; --r > -1;) a[s[r]] = Math.round;
                    for (r = s.length; --r > -1;)
                        for (e = s[r], i = o._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : o._firstPT === i && (o._firstPT = n), i._next = i._prev = null, o._propLookup[e] = l)), i = n;
                    return !1
                }, i._add = function(e, t, i, n) {
                    this._addTween(e, t, i, i + n, t, Math.round), this._overwriteProps.push(t)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(e, t, i, n) {
                        var o, s;
                        if ("function" != typeof e.setAttribute) return !1;
                        for (o in t) s = t[o], "function" == typeof s && (s = s(n, e)), this._addTween(e, "setAttribute", e.getAttribute(o) + "", s + "", o, !1, o), this._overwriteProps.push(o);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(e, t, i, n) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var o, s, r, a, l, c, d = t.useRadians === !0 ? 2 * Math.PI : 360,
                        u = 1e-6;
                    for (o in t) "useRadians" !== o && (a = t[o], "function" == typeof a && (a = a(n, e)), c = (a + "").split("_"), s = c[0], r = parseFloat("function" != typeof e[o] ? e[o] : e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]()), a = this.finals[o] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, l = a - r, c.length && (s = c.join("_"), -1 !== s.indexOf("short") && (l %= d, l !== l % (d / 2) && (l = 0 > l ? l + d : l - d)), -1 !== s.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * d) % d - (l / d | 0) * d : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * d) % d - (l / d | 0) * d)), (l > u || -u > l) && (this._addTween(e, o, r, r + l, o), this._overwriteProps.push(o)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
                var t, i, n, o = _gsScope.GreenSockGlobals || _gsScope,
                    s = o.com.greensock,
                    r = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    c = function(t, i) {
                        var n = l("easing." + t, function() {}, !0),
                            o = n.prototype = new e;
                        return o.constructor = n, o.getRatio = i, n
                    },
                    d = e.register || function() {},
                    u = function(e, t, i, n, o) {
                        var s = l("easing." + e, {
                            easeOut: new t,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return d(s, e), s
                    },
                    h = function(e, t, i) {
                        this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                    },
                    p = function(t, i) {
                        var n = l("easing." + t, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            o = n.prototype = new e;
                        return o.constructor = n, o.getRatio = i, o.config = function(e) {
                            return new n(e)
                        }, n
                    },
                    f = u("Back", p("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), p("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), p("BackInOut", function(e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(e, t, i) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new e;
                return g.constructor = m, g.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, m.ease = new m(.7, .7), g.config = m.config = function(e, t, i) {
                    return new m(e, t, i)
                }, t = l("easing.SteppedEase", function(e, t) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
                }, !0), g = t.prototype = new e, g.constructor = t, g.getRatio = function(e) {
                    return 0 > e ? e = 0 : e >= 1 && (e = .999999999), ((this._p2 * e | 0) + this._p3) * this._p1
                }, g.config = t.config = function(e, i) {
                    return new t(e, i)
                }, i = l("easing.RoughEase", function(t) {
                    t = t || {};
                    for (var i, n, o, s, r, a, l = t.taper || "none", c = [], d = 0, u = 0 | (t.points || 20), p = u, f = t.randomize !== !1, m = t.clamp === !0, g = t.template instanceof e ? t.template : null, v = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, n = g ? g.getRatio(i) : i, "none" === l ? o = v : "out" === l ? (s = 1 - i, o = s * s * v) : "in" === l ? o = i * i * v : .5 > i ? (s = 2 * i, o = s * s * .5 * v) : (s = 2 * (1 - i), o = s * s * .5 * v), f ? n += Math.random() * o - .5 * o : p % 2 ? n += .5 * o : n -= .5 * o, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[d++] = {
                        x: i,
                        y: n
                    };
                    for (c.sort(function(e, t) {
                            return e.x - t.x
                        }), a = new h(1, 1, null), p = u; --p > -1;) r = c[p], a = new h(r.x, r.y, a);
                    this._prev = new h(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new e, g.constructor = i, g.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, g.config = function(e) {
                    return new i(e)
                }, i.ease = new i, u("Bounce", c("BounceOut", function(e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), c("BounceIn", function(e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), c("BounceInOut", function(e) {
                    var t = .5 > e;
                    return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), u("Circ", c("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), c("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), c("CircInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), n = function(t, i, n) {
                    var o = l("easing." + t, function(e, t) {
                            this._p1 = e >= 1 ? e : 1, this._p2 = (t || n) / (1 > e ? e : 1), this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0), this._p2 = r / this._p2
                        }, !0),
                        s = o.prototype = new e;
                    return s.constructor = o, s.getRatio = i, s.config = function(e, t) {
                        return new o(e, t)
                    }, o
                }, u("Elastic", n("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(e) {
                    return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
                }, .45)), u("Expo", c("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), c("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), c("ExpoInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), u("Sine", c("SineOut", function(e) {
                    return Math.sin(e * a)
                }), c("SineIn", function(e) {
                    return -Math.cos(e * a) + 1
                }), c("SineInOut", function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), l("easing.EaseLookup", {
                    find: function(t) {
                        return e.map[t]
                    }
                }, !0), d(o.SlowMo, "SlowMo", "ease,"), d(i, "RoughEase", "ease,"), d(t, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e, t) {
        "use strict";
        var i = {},
            n = e.document,
            o = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!o.TweenLite) {
            var s, r, a, l, c, d = function(e) {
                    var t, i = e.split("."),
                        n = o;
                    for (t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
                    return n
                },
                u = d("com.greensock"),
                h = 1e-10,
                p = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                f = function() {},
                m = function() {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
                    }
                }(),
                g = {},
                v = function(n, s, r, a) {
                    this.sc = g[n] ? g[n].sc : [], g[n] = this, this.gsClass = null, this.func = r;
                    var l = [];
                    this.check = function(c) {
                        for (var u, h, p, f, m = s.length, y = m; --m > -1;)(u = g[s[m]] || new v(s[m], [])).gsClass ? (l[m] = u.gsClass, y--) : c && u.sc.push(this);
                        if (0 === y && r) {
                            if (h = ("com.greensock." + n).split("."), p = h.pop(), f = d(h.join("."))[p] = this.gsClass = r.apply(r, l), a)
                                if (o[p] = i[p] = f, "undefined" != typeof module && module.exports)
                                    if (n === t) {
                                        module.exports = i[t] = f;
                                        for (m in i) f[m] = i[m]
                                    } else i[t] && (i[t][p] = f);
                            else "function" == typeof define && define.amd && define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                return f
                            });
                            for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                        }
                    }, this.check(!0)
                },
                y = e._gsDefine = function(e, t, i, n) {
                    return new v(e, t, i, n)
                },
                b = u._class = function(e, t, i) {
                    return t = t || function() {}, y(e, [], function() {
                        return t
                    }, i), t
                };
            y.globals = o;
            var x = [0, 0, 1, 1],
                _ = b("easing.Ease", function(e, t, i, n) {
                    this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? x.concat(t) : x
                }, !0),
                w = _.map = {},
                T = _.register = function(e, t, i, n) {
                    for (var o, s, r, a, l = t.split(","), c = l.length, d = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (s = l[c], o = n ? b("easing." + s, null, !0) : u.easing[s] || {}, r = d.length; --r > -1;) a = d[r], w[s + "." + a] = w[a + s] = o[a] = e.getRatio ? e : e[a] || new e
                };
            for (a = _.prototype, a._calcEnd = !1, a.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        n = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : .5 > e ? n / 2 : 1 - n / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) a = s[r] + ",Power" + r, T(new _(null, null, 1, r), a, "easeOut", !0), T(new _(null, null, 2, r), a, "easeIn" + (0 === r ? ",easeNone" : "")), T(new _(null, null, 3, r), a, "easeInOut");
            w.linear = u.easing.Linear.easeIn, w.swing = u.easing.Quad.easeInOut;
            var S = b("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            a = S.prototype, a.addEventListener = function(e, t, i, n, o) {
                o = o || 0;
                var s, r, a = this._listeners[e],
                    d = 0;
                for (this !== l || c || l.wake(), null == a && (this._listeners[e] = a = []), r = a.length; --r > -1;) s = a[r], s.c === t && s.s === i ? a.splice(r, 1) : 0 === d && s.pr < o && (d = r + 1);
                a.splice(d, 0, {
                    c: t,
                    s: i,
                    up: n,
                    pr: o
                })
            }, a.removeEventListener = function(e, t) {
                var i, n = this._listeners[e];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === t) return void n.splice(i, 1)
            }, a.dispatchEvent = function(e) {
                var t, i, n, o = this._listeners[e];
                if (o)
                    for (t = o.length, t > 1 && (o = o.slice(0)), i = this._eventTarget; --t > -1;) n = o[t], n && (n.up ? n.c.call(n.s || i, {
                        type: e,
                        target: i
                    }) : n.c.call(n.s || i));
            };
            var C = e.requestAnimationFrame,
                k = e.cancelAnimationFrame,
                $ = Date.now || function() {
                    return (new Date).getTime()
                },
                P = $();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !C;) C = e[s[r] + "RequestAnimationFrame"], k = e[s[r] + "CancelAnimationFrame"] || e[s[r] + "CancelRequestAnimationFrame"];
            b("Ticker", function(e, t) {
                var i, o, s, r, a, d = this,
                    u = $(),
                    p = !(t === !1 || !C) && "auto",
                    m = 500,
                    g = 33,
                    v = "tick",
                    y = function(e) {
                        var t, n, l = $() - P;
                        l > m && (u += l - g), P += l, d.time = (P - u) / 1e3, t = d.time - a, (!i || t > 0 || e === !0) && (d.frame++, a += t + (t >= r ? .004 : r - t), n = !0), e !== !0 && (s = o(y)), n && d.dispatchEvent(v)
                    };
                S.call(d), d.time = d.frame = 0, d.tick = function() {
                    y(!0)
                }, d.lagSmoothing = function(e, t) {
                    m = e || 1 / h, g = Math.min(t, m, 0)
                }, d.sleep = function() {
                    null != s && (p && k ? k(s) : clearTimeout(s), o = f, s = null, d === l && (c = !1))
                }, d.wake = function(e) {
                    null !== s ? d.sleep() : e ? u += -P + (P = $()) : d.frame > 10 && (P = $() - m + 5), o = 0 === i ? f : p && C ? C : function(e) {
                        return setTimeout(e, 1e3 * (a - d.time) + 1 | 0)
                    }, d === l && (c = !0), y(2)
                }, d.fps = function(e) {
                    return arguments.length ? (i = e, r = 1 / (i || 60), a = this.time + r, void d.wake()) : i
                }, d.useRAF = function(e) {
                    return arguments.length ? (d.sleep(), p = e, void d.fps(i)) : p
                }, d.fps(e), setTimeout(function() {
                    "auto" === p && d.frame < 5 && "hidden" !== n.visibilityState && d.useRAF(!1)
                }, 1500)
            }), a = u.Ticker.prototype = new u.events.EventDispatcher, a.constructor = u.Ticker;
            var E = b("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, V) {
                    c || l.wake();
                    var i = this.vars.useFrames ? Z : V;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            l = E.ticker = new u.Ticker, a = E.prototype, a._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
            var A = function() {
                c && $() - P > 2e3 && "hidden" !== n.visibilityState && l.wake();
                var e = setTimeout(A, 2e3);
                e.unref && e.unref()
            };
            A(), a.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, a.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, a.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, a.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, a.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, a.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, a.render = function(e, t, i) {}, a.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, a.isActive = function() {
                var e, t = this._timeline,
                    i = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= i && e < i + this.totalDuration() / this._timeScale - 1e-7
            }, a._enabled = function(e, t) {
                return c || l.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, a._kill = function(e, t) {
                return this._enabled(!1, !1)
            }, a.kill = function(e, t) {
                return this._kill(e, t), this
            }, a._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, a._swapSelfInParams = function(e) {
                for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
                return i
            }, a._callback = function(e) {
                var t = this.vars,
                    i = t[e],
                    n = t[e + "Params"],
                    o = t[e + "Scope"] || t.callbackScope || this,
                    s = n ? n.length : 0;
                switch (s) {
                    case 0:
                        i.call(o);
                        break;
                    case 1:
                        i.call(o, n[0]);
                        break;
                    case 2:
                        i.call(o, n[0], n[1]);
                        break;
                    default:
                        i.apply(o, n)
                }
            }, a.eventCallback = function(e, t, i, n) {
                if ("on" === (e || "").substr(0, 2)) {
                    var o = this.vars;
                    if (1 === arguments.length) return o[e];
                    null == t ? delete o[e] : (o[e] = t, o[e + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, o[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, a.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, a.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, a.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, a.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, a.totalTime = function(e, t, i) {
                if (c || l.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            o = this._timeline;
                        if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : o._time) - (this._reversed ? n - e : e) / this._timeScale, o._dirty || this._uncache(!1), o._timeline)
                            for (; o._timeline;) o._timeline._time !== (o._startTime + o._totalTime) / o._timeScale && o.totalTime(o._totalTime, !0), o = o._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (R.length && Q(), this.render(e, t, !1), R.length && Q())
                }
                return this
            }, a.progress = a.totalProgress = function(e, t) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
            }, a.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, a.endTime = function(e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, a.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || h, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, a.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, a.paused = function(e) {
                if (!arguments.length) return this._paused;
                var t, i, n = this._timeline;
                return e != this._paused && n && (c || e || l.wake(), t = n.rawTime(), i = t - this._pauseTime, !e && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
            };
            var M = b("core.SimpleTimeline", function(e) {
                E.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            a = M.prototype = new E, a.constructor = M, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(e, t, i, n) {
                var o, s;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), o = this._last, this._sortChildren)
                    for (s = e._startTime; o && o._startTime > s;) o = o._prev;
                return o ? (e._next = o._next, o._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = o, this._recent = e, this._timeline && this._uncache(!0), this
            }, a._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, a.render = function(e, t, i) {
                var n, o = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; o;) n = o._next, (o._active || e >= o._startTime && !o._paused && !o._gc) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)), o = n
            }, a.rawTime = function() {
                return c || l.wake(), this._totalTime
            };
            var F = b("TweenLite", function(t, i, n) {
                    if (E.call(this, i, n), this.render = F.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : F.selector(t) || t;
                    var o, s, r, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? Y[F.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l], (a || t instanceof Array || t.push && m(t)) && "number" != typeof t[0])
                        for (this._targets = r = p(t), this._propLookup = [], this._siblings = [], o = 0; o < r.length; o++) s = r[o], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (r.splice(o--, 1), this._targets = r = r.concat(p(s))) : (this._siblings[o] = K(s, this, !1), 1 === l && this._siblings[o].length > 1 && ee(s, this, null, 1, this._siblings[o])) : (s = r[o--] = F.selector(s), "string" == typeof s && r.splice(o + 1, 1)) : r.splice(o--, 1);
                    else this._propLookup = {}, this._siblings = K(t, this, !1), 1 === l && this._siblings.length > 1 && ee(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(Math.min(0, -this._delay)))
                }, !0),
                O = function(t) {
                    return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                },
                L = function(e, t) {
                    var i, n = {};
                    for (i in e) U[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                    e.css = n
                };
            a = F.prototype = new E, a.constructor = F, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, F.version = "1.20.2", F.defaultEase = a._ease = new _(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = l, F.autoSleep = 120, F.lagSmoothing = function(e, t) {
                l.lagSmoothing(e, t)
            }, F.selector = e.$ || e.jQuery || function(t) {
                var i = e.$ || e.jQuery;
                return i ? (F.selector = i, i(t)) : "undefined" == typeof n ? t : n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var R = [],
                D = {},
                I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                z = /[\+-]=-?[\.\d]/,
                N = function(e) {
                    for (var t, i = this._firstPT, n = 1e-6; i;) t = i.blob ? 1 === e && this.end ? this.end : e ? this.join("") : this.start : i.c * e + i.s, i.m ? t = i.m(t, this._target || i.t) : n > t && t > -n && !i.blob && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
                },
                B = function(e, t, i, n) {
                    var o, s, r, a, l, c, d, u = [],
                        h = 0,
                        p = "",
                        f = 0;
                    for (u.start = e, u.end = t, e = u[0] = e + "", t = u[1] = t + "", i && (i(u), e = u[0], t = u[1]), u.length = 0, o = e.match(I) || [], s = t.match(I) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), l = s.length, a = 0; l > a; a++) d = s[a], c = t.substr(h, t.indexOf(d, h) - h), p += c || !a ? c : ",", h += c.length, f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1), d === o[a] || o.length <= a ? p += d : (p && (u.push(p), p = ""), r = parseFloat(o[a]), u.push(r), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: r,
                        c: ("=" === d.charAt(1) ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - r) || 0,
                        f: 0,
                        m: f && 4 > f ? Math.round : 0
                    }), h += d.length;
                    return p += t.substr(h), p && u.push(p), u.setRatio = N, z.test(t) && (u.end = 0), u
                },
                H = function(e, t, i, n, o, s, r, a, l) {
                    "function" == typeof n && (n = n(l || 0, e));
                    var c, d = typeof e[t],
                        u = "function" !== d ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                        h = "get" !== i ? i : u ? r ? e[u](r) : e[u]() : e[t],
                        p = "string" == typeof n && "=" === n.charAt(1),
                        f = {
                            t: e,
                            p: t,
                            s: h,
                            f: "function" === d,
                            pg: 0,
                            n: o || t,
                            m: s ? "function" == typeof s ? s : Math.round : 0,
                            pr: 0,
                            c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                        };
                    return ("number" != typeof h || "number" != typeof n && !p) && (r || isNaN(h) || !p && isNaN(n) || "boolean" == typeof h || "boolean" == typeof n ? (f.fp = r, c = B(h, p ? parseFloat(f.s) + f.c : n, a || F.defaultStringFilter, f), f = {
                        t: c,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: o || t,
                        pr: 0,
                        m: 0
                    }) : (f.s = parseFloat(h), p || (f.c = parseFloat(n) - f.s || 0))), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
                },
                j = F._internals = {
                    isArray: m,
                    isSelector: O,
                    lazyTweens: R,
                    blobDif: B
                },
                W = F._plugins = {},
                q = j.tweenLookup = {},
                X = 0,
                U = j.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                Z = E._rootFramesTimeline = new M,
                V = E._rootTimeline = new M,
                G = 30,
                Q = j.lazyRender = function() {
                    var e, t = R.length;
                    for (D = {}; --t > -1;) e = R[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    R.length = 0
                };
            V._startTime = l.time, Z._startTime = l.frame, V._active = Z._active = !0, setTimeout(Q, 1), E._updateRoot = F.render = function() {
                var e, t, i;
                if (R.length && Q(), V.render((l.time - V._startTime) * V._timeScale, !1, !1), Z.render((l.frame - Z._startTime) * Z._timeScale, !1, !1), R.length && Q(), l.frame >= G) {
                    G = l.frame + (parseInt(F.autoSleep, 10) || 120);
                    for (i in q) {
                        for (t = q[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete q[i]
                    }
                    if (i = V._first, (!i || i._paused) && F.autoSleep && !Z._first && 1 === l._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || l.sleep()
                    }
                }
            }, l.addEventListener("tick", E._updateRoot);
            var K = function(e, t, i) {
                    var n, o, s = e._gsTweenID;
                    if (q[s || (e._gsTweenID = s = "t" + X++)] || (q[s] = {
                            target: e,
                            tweens: []
                        }), t && (n = q[s].tweens, n[o = n.length] = t, i))
                        for (; --o > -1;) n[o] === t && n.splice(o, 1);
                    return q[s].tweens
                },
                J = function(e, t, i, n) {
                    var o, s, r = e.vars.onOverwrite;
                    return r && (o = r(e, t, i, n)), r = F.onOverwrite, r && (s = r(e, t, i, n)), o !== !1 && s !== !1
                },
                ee = function(e, t, i, n, o) {
                    var s, r, a, l;
                    if (1 === n || n >= 4) {
                        for (l = o.length, s = 0; l > s; s++)
                            if ((a = o[s]) !== t) a._gc || a._kill(null, e, t) && (r = !0);
                            else if (5 === n) break;
                        return r
                    }
                    var c, d = t._startTime + h,
                        u = [],
                        p = 0,
                        f = 0 === t._duration;
                    for (s = o.length; --s > -1;)(a = o[s]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (c = c || te(t, 0, f), 0 === te(a, c, f) && (u[p++] = a)) : a._startTime <= d && a._startTime + a.totalDuration() / a._timeScale > d && ((f || !a._initted) && d - a._startTime <= 2e-10 || (u[p++] = a)));
                    for (s = p; --s > -1;)
                        if (a = u[s], 2 === n && a._kill(i, e, t) && (r = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !J(a, t)) continue;
                            a._enabled(!1, !1) && (r = !0)
                        }
                    return r
                },
                te = function(e, t, i) {
                    for (var n = e._timeline, o = n._timeScale, s = e._startTime; n._timeline;) {
                        if (s += n._startTime, o *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= o, s > t ? s - t : i && s === t || !e._initted && 2 * h > s - t ? h : (s += e.totalDuration() / e._timeScale / o) > t + h ? 0 : s - t - h
                };
            a._init = function() {
                var e, t, i, n, o, s, r = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    c = !!r.immediateRender,
                    d = r.ease;
                if (r.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), o = {};
                    for (n in r.startAt) o[n] = r.startAt[n];
                    if (o.overwrite = !1, o.immediateRender = !0, o.lazy = c && r.lazy !== !1, o.startAt = o.delay = null, o.onUpdate = r.onUpdate, o.onUpdateScope = r.onUpdateScope || r.callbackScope || this, this._startAt = F.to(this.target, 0, o), c)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (r.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (c = !1), i = {};
                        for (n in r) U[n] && "autoCSS" !== n || (i[n] = r[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && r.lazy !== !1, i.immediateRender = c, this._startAt = F.to(this.target, 0, i), c) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = d = d ? d instanceof _ ? d : "function" == typeof d ? new _(d, r.easeParams) : w[d] || F.defaultEase : F.defaultEase, r.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (s = this._targets.length, e = 0; s > e; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null, e) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (t && F._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, a._initProps = function(t, i, n, o, s) {
                var r, a, l, c, d, u;
                if (null == t) return !1;
                D[t._gsTweenID] && Q(), this.vars.css || t.style && t !== e && t.nodeType && W.css && this.vars.autoCSS !== !1 && L(this.vars, t);
                for (r in this.vars)
                    if (u = this.vars[r], U[r]) u && (u instanceof Array || u.push && m(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[r] = u = this._swapSelfInParams(u, this));
                    else if (W[r] && (c = new W[r])._onInitTween(t, this.vars[r], this, s)) {
                    for (this._firstPT = d = {
                            _next: this._firstPT,
                            t: c,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: r,
                            pg: 1,
                            pr: c._priority,
                            m: 0
                        }, a = c._overwriteProps.length; --a > -1;) i[c._overwriteProps[a]] = this._firstPT;
                    (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), d._next && (d._next._prev = d)
                } else i[r] = H.call(this, t, r, "get", u, r, 0, null, this.vars.stringFilter, s);
                return o && this._kill(o, t) ? this._initProps(t, i, n, o, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && ee(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, o, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (D[t._gsTweenID] = !0), l)
            }, a.render = function(e, t, i) {
                var n, o, s, r, a = this._time,
                    l = this._duration,
                    c = this._rawPrevTime;
                if (e >= l - 1e-7 && e >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > c || 0 >= e && e >= -1e-7 || c === h && "isPause" !== this.data) && c !== e && (i = !0, c > h && (o = "onReverseComplete")), this._rawPrevTime = r = !t || e || c === e ? e : h);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (o = "onReverseComplete", n = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = r = !t || e || c === e ? e : h)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var d = e / l,
                        u = this._easeType,
                        p = this._easePower;
                    (1 === u || 3 === u && d >= .5) && (d = 1 - d), 3 === u && (d *= 2), 1 === p ? d *= d : 2 === p ? d *= d * d : 3 === p ? d *= d * d * d : 4 === p && (d *= d * d * d * d), 1 === u ? this.ratio = 1 - d : 2 === u ? this.ratio = d : .5 > e / l ? this.ratio = d / 2 : this.ratio = 1 - d / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, R.push(this), void(this._lazy = [e, t]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && e >= 0 && (this._active = !0), 0 === a && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, i), t || (this._time !== a || n || i) && this._callback("onUpdate")), o && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this._callback(o), 0 === l && this._rawPrevTime === h && r !== h && (this._rawPrevTime = 0))
                }
            }, a._kill = function(e, t, i) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : F.selector(t) || t;
                var n, o, s, r, a, l, c, d, u, h = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((m(t) || O(t)) && "number" != typeof t[0])
                    for (n = t.length; --n > -1;) this._kill(e, t[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (t === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], o = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, o = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (c = e || a, d = e !== o && "all" !== o && e !== a && ("object" != typeof e || !e._tempKill), i && (F.onOverwrite || this.vars.onOverwrite)) {
                            for (s in c) a[s] && (u || (u = []), u.push(s));
                            if ((u || !e) && !J(this, i, t, u)) return !1
                        }
                        for (s in c)(r = a[s]) && (h && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s, l = !0), r.pg && r.t._kill(c) && (l = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[s]), d && (o[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, a.invalidate = function() {
                return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(Math.min(0, -this._delay))), this
            }, a._enabled = function(e, t) {
                if (c || l.wake(), e && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = K(n[i], this, !0);
                    else this._siblings = K(this.target, this, !0)
                }
                return E.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
            }, F.to = function(e, t, i) {
                return new F(e, t, i)
            }, F.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new F(e, t, i)
            }, F.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new F(e, t, n)
            }, F.delayedCall = function(e, t, i, n, o) {
                return new F(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: o,
                    overwrite: 0
                })
            }, F.set = function(e, t) {
                return new F(e, 0, t)
            }, F.getTweensOf = function(e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : F.selector(e) || e;
                var i, n, o, s;
                if ((m(e) || O(e)) && "number" != typeof e[0]) {
                    for (i = e.length, n = []; --i > -1;) n = n.concat(F.getTweensOf(e[i], t));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], o = i; --o > -1;) s === n[o] && n.splice(i, 1)
                } else if (e._gsTweenID)
                    for (n = K(e).concat(), i = n.length; --i > -1;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
                return n || []
            }, F.killTweensOf = F.killDelayedCallsTo = function(e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var n = F.getTweensOf(e, t), o = n.length; --o > -1;) n[o]._kill(i, e)
            };
            var ie = b("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ie.prototype
            }, !0);
            if (a = ie.prototype, ie.version = "1.19.0", ie.API = 2, a._firstPT = null, a._addTween = H, a.setRatio = N, a._kill = function(e) {
                    var t, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                    for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, a._mod = a._roundProps = function(e) {
                    for (var t, i = this._firstPT; i;) t = e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")], t && "function" == typeof t && (2 === i.f ? i.t._applyPT.m = t : i.m = t), i = i._next
                }, F._onPluginEvent = function(e, t) {
                    var i, n, o, s, r, a = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; a;) {
                            for (r = a._next, n = o; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: o = a, (a._next = n) ? n._prev = a : s = a, a = r
                        }
                        a = t._firstPT = o
                    }
                    for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (i = !0), a = a._next;
                    return i
                }, ie.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === ie.API && (W[(new e[t])._propName] = e[t]);
                    return !0
                }, y.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, i = e.propName,
                        n = e.priority || 0,
                        o = e.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        r = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            ie.call(this, i, n), this._overwriteProps = o || []
                        }, e.global === !0),
                        a = r.prototype = new ie(i);
                    a.constructor = r, r.API = e.API;
                    for (t in s) "function" == typeof e[t] && (a[s[t]] = e[t]);
                    return r.version = e.version, ie.activate([r]), r
                }, s = e._gsQueue) {
                for (r = 0; r < s.length; r++) s[r]();
                for (a in g) g[a].func || e.console.log("GSAP encountered missing dependency: " + a)
            }
            c = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
    }(this, function() {
        "use strict";
        var e = function() {
            o.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
        };
        e.version = "2.0.3", window.addEventListener("mousewheel", function() {});
        var t = "data-scrollmagic-pin-spacer";
        e.Controller = function(n) {
            var s, r, a = "ScrollMagic.Controller",
                l = {
                    f: "FORWARD",
                    r: "REVERSE",
                    p: "PAUSED"
                },
                c = i.defaults,
                d = this,
                u = o.extend({}, c, n),
                h = [],
                p = !1,
                f = 0,
                m = l.p,
                g = !0,
                v = 0,
                y = !0,
                b = function() {
                    for (var t in u) c.hasOwnProperty(t) || (P(2, 'WARNING: Unknown option "' + t + '"'), delete u[t]);
                    if (u.container = o.get.elements(u.container)[0], !u.container) throw P(1, "ERROR creating object " + a + ": No valid scroll container supplied"), a + " init failed.";
                    g = u.container === window || u.container === document.body || !document.body.contains(u.container), g && (u.container = window), v = w(), u.container.addEventListener("resize", k), u.container.addEventListener("scroll", k), u.refreshInterval = parseInt(u.refreshInterval) || c.refreshInterval, x(), P(3, "added new " + a + " controller (v" + e.version + ")")
                },
                x = function() {
                    u.refreshInterval > 0 && (r = window.setTimeout($, u.refreshInterval))
                },
                _ = function() {
                    return u.vertical ? o.get.scrollTop(u.container) : o.get.scrollLeft(u.container)
                },
                w = function() {
                    return u.vertical ? o.get.height(u.container) : o.get.width(u.container)
                },
                T = this._setScrollPos = function(e) {
                    u.vertical ? g ? window.scrollTo(o.get.scrollLeft(), e) : u.container.scrollTop = e : g ? window.scrollTo(e, o.get.scrollTop()) : u.container.scrollLeft = e
                },
                S = function() {
                    if (y && p) {
                        var e = o.type.Array(p) ? p : h.slice(0);
                        p = !1;
                        var t = f;
                        f = d.scrollPos();
                        var i = f - t;
                        0 !== i && (m = i > 0 ? l.f : l.r), m === l.r && e.reverse(), e.forEach(function(t, i) {
                            P(3, "updating Scene " + (i + 1) + "/" + e.length + " (" + h.length + " total)"), t.update(!0)
                        }), 0 === e.length && u.loglevel >= 3 && P(3, "updating 0 Scenes (nothing added to controller)")
                    }
                },
                C = function() {
                    s = o.rAF(S)
                },
                k = function(e) {
                    P(3, "event fired causing an update:", e.type), "resize" == e.type && (v = w(), m = l.p), p !== !0 && (p = !0, C())
                },
                $ = function() {
                    if (!g && v != w()) {
                        var e;
                        try {
                            e = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (t) {
                            e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
                        }
                        u.container.dispatchEvent(e)
                    }
                    h.forEach(function(e, t) {
                        e.refresh()
                    }), x()
                },
                P = this._log = function(e, t) {
                    u.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), o.log.apply(window, arguments))
                };
            this._options = u;
            var E = function(e) {
                if (e.length <= 1) return e;
                var t = e.slice(0);
                return t.sort(function(e, t) {
                    return e.scrollOffset() > t.scrollOffset() ? 1 : -1
                }), t
            };
            return this.addScene = function(t) {
                if (o.type.Array(t)) t.forEach(function(e, t) {
                    d.addScene(e)
                });
                else if (t instanceof e.Scene) {
                    if (t.controller() !== d) t.addTo(d);
                    else if (h.indexOf(t) < 0) {
                        h.push(t), h = E(h), t.on("shift.controller_sort", function() {
                            h = E(h)
                        });
                        for (var i in u.globalSceneOptions) t[i] && t[i].call(t, u.globalSceneOptions[i]);
                        P(3, "adding Scene (now " + h.length + " total)")
                    }
                } else P(1, "ERROR: invalid argument supplied for '.addScene()'");
                return d
            }, this.removeScene = function(e) {
                if (o.type.Array(e)) e.forEach(function(e, t) {
                    d.removeScene(e)
                });
                else {
                    var t = h.indexOf(e);
                    t > -1 && (e.off("shift.controller_sort"), h.splice(t, 1), P(3, "removing Scene (now " + h.length + " left)"), e.remove())
                }
                return d
            }, this.updateScene = function(t, i) {
                return o.type.Array(t) ? t.forEach(function(e, t) {
                    d.updateScene(e, i)
                }) : i ? t.update(!0) : p !== !0 && t instanceof e.Scene && (p = p || [], p.indexOf(t) == -1 && p.push(t), p = E(p), C()), d
            }, this.update = function(e) {
                return k({
                    type: "resize"
                }), e && S(), d
            }, this.scrollTo = function(i, n) {
                if (o.type.Number(i)) T.call(u.container, i, n);
                else if (i instanceof e.Scene) i.controller() === d ? d.scrollTo(i.scrollOffset(), n) : P(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", i);
                else if (o.type.Function(i)) T = i;
                else {
                    var s = o.get.elements(i)[0];
                    if (s) {
                        for (; s.parentNode.hasAttribute(t);) s = s.parentNode;
                        var r = u.vertical ? "top" : "left",
                            a = o.get.offset(u.container),
                            l = o.get.offset(s);
                        g || (a[r] -= d.scrollPos()), d.scrollTo(l[r] - a[r], n)
                    } else P(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", i)
                }
                return d
            }, this.scrollPos = function(e) {
                return arguments.length ? (o.type.Function(e) ? _ = e : P(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), d) : _.call(d)
            }, this.info = function(e) {
                var t = {
                    size: v,
                    vertical: u.vertical,
                    scrollPos: f,
                    scrollDirection: m,
                    container: u.container,
                    isDocument: g
                };
                return arguments.length ? void 0 !== t[e] ? t[e] : void P(1, 'ERROR: option "' + e + '" is not available') : t
            }, this.loglevel = function(e) {
                return arguments.length ? (u.loglevel != e && (u.loglevel = e), d) : u.loglevel
            }, this.enabled = function(e) {
                return arguments.length ? (y != e && (y = !!e, d.updateScene(h, !0)), d) : y
            }, this.destroy = function(e) {
                window.clearTimeout(r);
                for (var t = h.length; t--;) h[t].destroy(e);
                return u.container.removeEventListener("resize", k), u.container.removeEventListener("scroll", k), o.cAF(s), P(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"), null
            }, b(), d
        };
        var i = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        e.Controller.addOption = function(e, t) {
            i.defaults[e] = t
        }, e.Controller.extend = function(t) {
            var i = this;
            e.Controller = function() {
                return i.apply(this, arguments), this.$super = o.extend({}, this), t.apply(this, arguments) || this
            }, o.extend(e.Controller, i), e.Controller.prototype = i.prototype, e.Controller.prototype.constructor = e.Controller
        }, e.Scene = function(i) {
            var s, r, a = "ScrollMagic.Scene",
                l = n.defaults,
                c = this,
                d = o.extend({}, l, i),
                u = "BEFORE",
                h = 0,
                p = {
                    start: 0,
                    end: 0
                },
                f = 0,
                m = !0,
                g = function() {
                    for (var e in d) l.hasOwnProperty(e) || (v(2, 'WARNING: Unknown option "' + e + '"'), delete d[e]);
                    for (var t in l) C(t);
                    T(), c.on("change.internal", function(e) {
                        "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? x() : "reverse" === e.what && c.update())
                    }).on("shift.internal", function(e) {
                        y(), c.update()
                    })
                },
                v = this._log = function(e, t) {
                    d.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), o.log.apply(window, arguments))
                };
            this.addTo = function(t) {
                return t instanceof e.Controller ? r != t && (r && r.removeScene(c), r = t, T(), b(!0), x(!0), y(), r.info("container").addEventListener("resize", _), t.addScene(c), c.trigger("add", {
                    controller: r
                }), v(3, "added " + a + " to controller"), c.update()) : v(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), c
            }, this.enabled = function(e) {
                return arguments.length ? (m != e && (m = !!e, c.update(!0)), c) : m
            }, this.remove = function() {
                if (r) {
                    r.info("container").removeEventListener("resize", _);
                    var e = r;
                    r = void 0, e.removeScene(c), c.trigger("remove"), v(3, "removed " + a + " from controller")
                }
                return c
            }, this.destroy = function(e) {
                return c.trigger("destroy", {
                    reset: e
                }), c.remove(), c.off("*.*"), v(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"), null
            }, this.update = function(e) {
                if (r)
                    if (e)
                        if (r.enabled() && m) {
                            var t, i = r.info("scrollPos");
                            t = d.duration > 0 ? (i - p.start) / (p.end - p.start) : i >= p.start ? 1 : 0, c.trigger("update", {
                                startPos: p.start,
                                endPos: p.end,
                                scrollPos: i
                            }), c.progress(t)
                        } else $ && "DURING" === u && E(!0);
                else r.updateScene(c, !1);
                return c
            }, this.refresh = function() {
                return b(), x(), c
            }, this.progress = function(e) {
                if (arguments.length) {
                    var t = !1,
                        i = u,
                        n = r ? r.info("scrollDirection") : "PAUSED",
                        o = d.reverse || e >= h;
                    if (0 === d.duration ? (t = h != e, h = e < 1 && o ? 0 : 1, u = 0 === h ? "BEFORE" : "DURING") : e <= 0 && "BEFORE" !== u && o ? (h = 0, u = "BEFORE", t = !0) : e > 0 && e < 1 && o ? (h = e, u = "DURING", t = !0) : e >= 1 && "AFTER" !== u ? (h = 1, u = "AFTER", t = !0) : "DURING" !== u || o || E(), t) {
                        var s = {
                                progress: h,
                                state: u,
                                scrollDirection: n
                            },
                            a = u != i,
                            l = function(e) {
                                c.trigger(e, s)
                            };
                        a && "DURING" !== i && (l("enter"), l("BEFORE" === i ? "start" : "end")), l("progress"), a && "DURING" !== u && (l("BEFORE" === u ? "start" : "end"), l("leave"))
                    }
                    return c
                }
                return h
            };
            var y = function() {
                    p = {
                        start: f + d.offset
                    }, r && d.triggerElement && (p.start -= r.info("size") * d.triggerHook), p.end = p.start + d.duration
                },
                b = function(e) {
                    if (s) {
                        var t = "duration";
                        S(t, s.call(c)) && !e && (c.trigger("change", {
                            what: t,
                            newval: d[t]
                        }), c.trigger("shift", {
                            reason: t
                        }))
                    }
                },
                x = function(e) {
                    var i = 0,
                        n = d.triggerElement;
                    if (r && n) {
                        for (var s = r.info(), a = o.get.offset(s.container), l = s.vertical ? "top" : "left"; n.parentNode.hasAttribute(t);) n = n.parentNode;
                        var u = o.get.offset(n);
                        s.isDocument || (a[l] -= r.scrollPos()), i = u[l] - a[l]
                    }
                    var h = i != f;
                    f = i, h && !e && c.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                _ = function(e) {
                    d.triggerHook > 0 && c.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                w = o.extend(n.validate, {
                    duration: function(e) {
                        if (o.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                            var t = parseFloat(e) / 100;
                            e = function() {
                                return r ? r.info("size") * t : 0
                            }
                        }
                        if (o.type.Function(e)) {
                            s = e;
                            try {
                                e = parseFloat(s())
                            } catch (i) {
                                e = -1
                            }
                        }
                        if (e = parseFloat(e), !o.type.Number(e) || e < 0) throw s ? (s = void 0, ['Invalid return value of supplied function for option "duration":', e]) : ['Invalid value for option "duration":', e];
                        return e
                    }
                }),
                T = function(e) {
                    e = arguments.length ? [e] : Object.keys(w), e.forEach(function(e, t) {
                        var i;
                        if (w[e]) try {
                            i = w[e](d[e])
                        } catch (n) {
                            i = l[e];
                            var s = o.type.String(n) ? [n] : n;
                            o.type.Array(s) ? (s[0] = "ERROR: " + s[0], s.unshift(1), v.apply(this, s)) : v(1, "ERROR: Problem executing validation callback for option '" + e + "':", n.message)
                        } finally {
                            d[e] = i
                        }
                    })
                },
                S = function(e, t) {
                    var i = !1,
                        n = d[e];
                    return d[e] != t && (d[e] = t, T(e), i = n != d[e]), i
                },
                C = function(e) {
                    c[e] || (c[e] = function(t) {
                        return arguments.length ? ("duration" === e && (s = void 0), S(e, t) && (c.trigger("change", {
                            what: e,
                            newval: d[e]
                        }), n.shifts.indexOf(e) > -1 && c.trigger("shift", {
                            reason: e
                        })), c) : d[e]
                    })
                };
            this.controller = function() {
                return r
            }, this.state = function() {
                return u
            }, this.scrollOffset = function() {
                return p.start
            }, this.triggerPosition = function() {
                var e = d.offset;
                return r && (e += d.triggerElement ? f : r.info("size") * c.triggerHook()), e
            };
            var k = {};
            this.on = function(e, t) {
                return o.type.Function(t) ? (e = e.trim().split(" "), e.forEach(function(e) {
                    var i = e.split("."),
                        n = i[0],
                        o = i[1];
                    "*" != n && (k[n] || (k[n] = []), k[n].push({
                        namespace: o || "",
                        callback: t
                    }))
                })) : v(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"), c
            }, this.off = function(e, t) {
                return e ? (e = e.trim().split(" "), e.forEach(function(e, i) {
                    var n = e.split("."),
                        o = n[0],
                        s = n[1] || "",
                        r = "*" === o ? Object.keys(k) : [o];
                    r.forEach(function(e) {
                        for (var i = k[e] || [], n = i.length; n--;) {
                            var o = i[n];
                            !o || s !== o.namespace && "*" !== s || t && t != o.callback || i.splice(n, 1)
                        }
                        i.length || delete k[e]
                    })
                }), c) : (v(1, "ERROR: Invalid event name supplied."), c)
            }, this.trigger = function(t, i) {
                if (t) {
                    var n = t.trim().split("."),
                        o = n[0],
                        s = n[1],
                        r = k[o];
                    v(3, "event fired:", o, i ? "->" : "", i || ""), r && r.forEach(function(t, n) {
                        s && s !== t.namespace || t.callback.call(c, new e.Event(o, t.namespace, c, i))
                    })
                } else v(1, "ERROR: Invalid event name supplied.");
                return c
            };
            var $, P;
            c.on("shift.internal", function(e) {
                var t = "duration" === e.reason;
                ("AFTER" === u && t || "DURING" === u && 0 === d.duration) && E(), t && A()
            }).on("progress.internal", function(e) {
                E()
            }).on("add.internal", function(e) {
                A()
            }).on("destroy.internal", function(e) {
                c.removePin(e.reset)
            });
            var E = function(e) {
                    if ($ && r) {
                        var t = r.info();
                        if (e || "DURING" !== u) {
                            var i = {
                                    position: P.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                n = o.css($, "position") != i.position;
                            P.pushFollowers ? d.duration > 0 && ("AFTER" === u && 0 === parseFloat(o.css(P.spacer, "padding-top")) ? n = !0 : "BEFORE" === u && 0 === parseFloat(o.css(P.spacer, "padding-bottom")) && (n = !0)) : i[t.vertical ? "top" : "left"] = d.duration * h, o.css($, i), n && A()
                        } else {
                            "fixed" != o.css($, "position") && (o.css($, {
                                position: "fixed"
                            }), A());
                            var s = o.get.offset(P.spacer, !0),
                                a = d.reverse || 0 === d.duration ? t.scrollPos - p.start : Math.round(h * d.duration * 10) / 10;
                            s[t.vertical ? "top" : "left"] += a, o.css($, {
                                top: s.top,
                                left: s.left
                            })
                        }
                    }
                },
                A = function() {
                    if ($ && r && P.inFlow) {
                        var e = "DURING" === u,
                            t = r.info("vertical"),
                            i = P.spacer.children[0],
                            n = o.isMarginCollapseType(o.css(P.spacer, "display")),
                            s = {};
                        P.relSize.width || P.relSize.autoFullWidth ? e ? o.css($, {
                            width: o.get.width(P.spacer)
                        }) : o.css($, {
                            width: "100%"
                        }) : (s["min-width"] = o.get.width(t ? $ : i, !0, !0), s.width = e ? s["min-width"] : "auto"), P.relSize.height ? e ? o.css($, {
                            height: o.get.height(P.spacer) - (P.pushFollowers ? d.duration : 0)
                        }) : o.css($, {
                            height: "100%"
                        }) : (s["min-height"] = o.get.height(t ? i : $, !0, !n), s.height = e ? s["min-height"] : "auto"), P.pushFollowers && (s["padding" + (t ? "Top" : "Left")] = d.duration * h, s["padding" + (t ? "Bottom" : "Right")] = d.duration * (1 - h)), o.css(P.spacer, s)
                    }
                },
                M = function() {
                    r && $ && "DURING" === u && !r.info("isDocument") && E()
                },
                F = function() {
                    r && $ && "DURING" === u && ((P.relSize.width || P.relSize.autoFullWidth) && o.get.width(window) != o.get.width(P.spacer.parentNode) || P.relSize.height && o.get.height(window) != o.get.height(P.spacer.parentNode)) && A()
                },
                O = function(e) {
                    r && $ && "DURING" === u && !r.info("isDocument") && (e.preventDefault(), r._setScrollPos(r.info("scrollPos") - ((e.wheelDelta || e[r.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
                };
            this.setPin = function(e, i) {
                var n = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (i = o.extend({}, n, i), e = o.get.elements(e)[0], !e) return v(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), c;
                if ("fixed" === o.css(e, "position")) return v(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), c;
                if ($) {
                    if ($ === e) return c;
                    c.removePin()
                }
                $ = e;
                var s = $.parentNode.style.display,
                    r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                $.parentNode.style.display = "none";
                var a = "absolute" != o.css($, "position"),
                    l = o.css($, r.concat(["display"])),
                    u = o.css($, ["width", "height"]);
                $.parentNode.style.display = s, !a && i.pushFollowers && (v(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), i.pushFollowers = !1), window.setTimeout(function() {
                    $ && 0 === d.duration && i.pushFollowers && v(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                }, 0);
                var h = $.parentNode.insertBefore(document.createElement("div"), $),
                    p = o.extend(l, {
                        position: a ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (a || o.extend(p, o.css($, ["width", "height"])), o.css(h, p), h.setAttribute(t, ""), o.addClass(h, i.spacerClass), P = {
                        spacer: h,
                        relSize: {
                            width: "%" === u.width.slice(-1),
                            height: "%" === u.height.slice(-1),
                            autoFullWidth: "auto" === u.width && a && o.isMarginCollapseType(l.display)
                        },
                        pushFollowers: i.pushFollowers,
                        inFlow: a
                    }, !$.___origStyle) {
                    $.___origStyle = {};
                    var f = $.style,
                        m = r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                    m.forEach(function(e) {
                        $.___origStyle[e] = f[e] || ""
                    })
                }
                return P.relSize.width && o.css(h, {
                    width: u.width
                }), P.relSize.height && o.css(h, {
                    height: u.height
                }), h.appendChild($), o.css($, {
                    position: a ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (P.relSize.width || P.relSize.autoFullWidth) && o.css($, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", M), window.addEventListener("resize", M), window.addEventListener("resize", F), $.addEventListener("mousewheel", O), $.addEventListener("DOMMouseScroll", O), v(3, "added pin"), E(), c
            }, this.removePin = function(e) {
                if ($) {
                    if ("DURING" === u && E(!0), e || !r) {
                        var i = P.spacer.children[0];
                        if (i.hasAttribute(t)) {
                            var n = P.spacer.style,
                                s = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {}, s.forEach(function(e) {
                                margins[e] = n[e] || ""
                            }), o.css(i, margins)
                        }
                        P.spacer.parentNode.insertBefore(i, P.spacer), P.spacer.parentNode.removeChild(P.spacer), $.parentNode.hasAttribute(t) || (o.css($, $.___origStyle), delete $.___origStyle)
                    }
                    window.removeEventListener("scroll", M), window.removeEventListener("resize", M), window.removeEventListener("resize", F), $.removeEventListener("mousewheel", O), $.removeEventListener("DOMMouseScroll", O), $ = void 0, v(3, "removed pin (reset: " + (e ? "true" : "false") + ")")
                }
                return c
            };
            var L, R = [];
            return c.on("destroy.internal", function(e) {
                c.removeClassToggle(e.reset)
            }), this.setClassToggle = function(e, t) {
                var i = o.get.elements(e);
                return 0 !== i.length && o.type.String(t) ? (R.length > 0 && c.removeClassToggle(), L = t, R = i, c.on("enter.internal_class leave.internal_class", function(e) {
                    var t = "enter" === e.type ? o.addClass : o.removeClass;
                    R.forEach(function(e, i) {
                        t(e, L)
                    })
                }), c) : (v(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === i.length ? "element" : "classes") + " supplied."), c)
            }, this.removeClassToggle = function(e) {
                return e && R.forEach(function(e, t) {
                    o.removeClass(e, L)
                }), c.off("start.internal_class end.internal_class"), L = void 0, R = [], c
            }, g(), c
        };
        var n = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(e) {
                    if (e = parseFloat(e), !o.type.Number(e)) throw ['Invalid value for option "offset":', e];
                    return e
                },
                triggerElement: function(e) {
                    if (e = e || void 0) {
                        var t = o.get.elements(e)[0];
                        if (!t) throw ['Element defined in option "triggerElement" was not found:', e];
                        e = t
                    }
                    return e
                },
                triggerHook: function(e) {
                    var t = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (o.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                    else {
                        if (!(e in t)) throw ['Invalid value for option "triggerHook": ', e];
                        e = t[e]
                    }
                    return e
                },
                reverse: function(e) {
                    return !!e
                },
                loglevel: function(e) {
                    if (e = parseInt(e), !o.type.Number(e) || e < 0 || e > 3) throw ['Invalid value for option "loglevel":', e];
                    return e
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        e.Scene.addOption = function(t, i, o, s) {
            t in n.defaults ? e._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + t + "', because it already exists.") : (n.defaults[t] = i, n.validate[t] = o, s && n.shifts.push(t))
        }, e.Scene.extend = function(t) {
            var i = this;
            e.Scene = function() {
                return i.apply(this, arguments), this.$super = o.extend({}, this), t.apply(this, arguments) || this
            }, o.extend(e.Scene, i), e.Scene.prototype = i.prototype, e.Scene.prototype.constructor = e.Scene
        }, e.Event = function(e, t, i, n) {
            n = n || {};
            for (var o in n) this[o] = n[o];
            return this.type = e, this.target = this.currentTarget = i, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var o = e._util = function(e) {
            var t, i = {},
                n = function(e) {
                    return parseFloat(e) || 0
                },
                o = function(t) {
                    return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
                },
                s = function(t, i, s, r) {
                    if (i = i === document ? e : i, i === e) r = !1;
                    else if (!f.DomElement(i)) return 0;
                    t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                    var a = (s ? i["offset" + t] || i["outer" + t] : i["client" + t] || i["inner" + t]) || 0;
                    if (s && r) {
                        var l = o(i);
                        a += "Height" === t ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                    }
                    return a
                },
                r = function(e) {
                    return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                        return e[1].toUpperCase()
                    })
                };
            i.extend = function(e) {
                for (e = e || {}, t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
                return e
            }, i.isMarginCollapseType = function(e) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
            };
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                c = e.requestAnimationFrame,
                d = e.cancelAnimationFrame;
            for (t = 0; !c && t < l.length; ++t) c = e[l[t] + "RequestAnimationFrame"], d = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
            c || (c = function(t) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - a)),
                    o = e.setTimeout(function() {
                        t(i + n)
                    }, n);
                return a = i + n, o
            }), d || (d = function(t) {
                e.clearTimeout(t)
            }), i.rAF = c.bind(e), i.cAF = d.bind(e);
            var u = ["error", "warn", "log"],
                h = e.console || {};
            for (h.log = h.log || function() {}, t = 0; t < u.length; t++) {
                var p = u[t];
                h[p] || (h[p] = h.log)
            }
            i.log = function(e) {
                (e > u.length || e <= 0) && (e = u.length);
                var t = new Date,
                    i = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3),
                    n = u[e - 1],
                    o = Array.prototype.splice.call(arguments, 1),
                    s = Function.prototype.bind.call(h[n], h);
                o.unshift(i), s.apply(h, o)
            };
            var f = i.type = function(e) {
                return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            f.String = function(e) {
                return "string" === f(e)
            }, f.Function = function(e) {
                return "function" === f(e)
            }, f.Array = function(e) {
                return Array.isArray(e)
            }, f.Number = function(e) {
                return !f.Array(e) && e - parseFloat(e) + 1 >= 0
            }, f.DomElement = function(e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
            };
            var m = i.get = {};
            return m.elements = function(t) {
                var i = [];
                if (f.String(t)) try {
                    t = document.querySelectorAll(t)
                } catch (n) {
                    return i
                }
                if ("nodelist" === f(t) || f.Array(t))
                    for (var o = 0, s = i.length = t.length; o < s; o++) {
                        var r = t[o];
                        i[o] = f.DomElement(r) ? r : m.elements(r)
                    } else(f.DomElement(t) || t === document || t === e) && (i = [t]);
                return i
            }, m.scrollTop = function(t) {
                return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
            }, m.scrollLeft = function(t) {
                return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
            }, m.width = function(e, t, i) {
                return s("width", e, t, i)
            }, m.height = function(e, t, i) {
                return s("height", e, t, i)
            }, m.offset = function(e, t) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (e && e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect();
                    i.top = n.top, i.left = n.left, t || (i.top += m.scrollTop(), i.left += m.scrollLeft())
                }
                return i
            }, i.addClass = function(e, t) {
                t && (e.classList ? e.classList.add(t) : e.className += " " + t)
            }, i.removeClass = function(e, t) {
                t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, i.css = function(e, t) {
                if (f.String(t)) return o(e)[r(t)];
                if (f.Array(t)) {
                    var i = {},
                        n = o(e);
                    return t.forEach(function(e, t) {
                        i[e] = n[r(e)]
                    }), i
                }
                for (var s in t) {
                    var a = t[s];
                    a == parseFloat(a) && (a += "px"), e.style[r(s)] = a
                }
            }, i
        }(window || {});
        return e.Scene.prototype.addIndicators = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, e.Scene.prototype.removeIndicators = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, e.Scene.prototype.setTween = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, e.Scene.prototype.removeTween = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, e.Scene.prototype.setVelocity = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, e.Scene.prototype.removeVelocity = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, e
    }), ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        e.extend(e.fn, {
            validate: function(t) {
                if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var i = e.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"), i = new e.validator(t, this[0]), e.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                    i.settings.submitHandler && (i.submitButton = t.target), e(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.on("submit.validate", function(t) {
                    function n() {
                        var n, o;
                        return !i.settings.submitHandler || (i.submitButton && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)), o = i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && n.remove(), void 0 !== o && o)
                    }
                    return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
                })), i)
            },
            valid: function() {
                var t, i, n;
                return e(this[0]).is("form") ? t = this.validate().form() : (n = [], t = !0, i = e(this[0].form).validate(), this.each(function() {
                    t = i.element(this) && t, n = n.concat(i.errorList)
                }), i.errorList = n), t
            },
            rules: function(t, i) {
                var n, o, s, r, a, l, c = this[0];
                if (t) switch (n = e.data(c.form, "validator").settings, o = n.rules, s = e.validator.staticRules(c), t) {
                    case "add":
                        e.extend(s, e.validator.normalizeRule(i)), delete s.messages, o[c.name] = s, i.messages && (n.messages[c.name] = e.extend(n.messages[c.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {}, e.each(i.split(/\s/), function(t, i) {
                            l[i] = s[i], delete s[i], "required" === i && e(c).removeAttr("aria-required")
                        }), l) : (delete o[c.name], s)
                }
                return r = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c), r.required && (a = r.required, delete r.required, r = e.extend({
                    required: a
                }, r), e(c).attr("aria-required", "true")), r.remote && (a = r.remote, delete r.remote, r = e.extend(r, {
                    remote: a
                })), r
            }
        }), e.extend(e.expr[":"], {
            blank: function(t) {
                return !e.trim("" + e(t).val())
            },
            filled: function(t) {
                return !!e.trim("" + e(t).val())
            },
            unchecked: function(t) {
                return !e(t).prop("checked")
            }
        }), e.validator = function(t, i) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = i, this.init()
        }, e.validator.format = function(t, i) {
            return 1 === arguments.length ? function() {
                var i = e.makeArray(arguments);
                return i.unshift(t), e.validator.format.apply(this, i)
            } : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), e.each(i, function(e, i) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                    return i
                })
            }), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(e) {
                    this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
                },
                onfocusout: function(e) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function(t, i) {
                    var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === i.which && "" === this.elementValue(t) || -1 !== e.inArray(i.keyCode, n) || (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function(e) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function(t, i, n) {
                    "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
                },
                unhighlight: function(t, i, n) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
                }
            },
            setDefaults: function(t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function t(t) {
                        var i = e.data(this.form, "validator"),
                            n = "on" + t.type.replace(/^validate/, ""),
                            o = i.settings;
                        o[n] && !e(this).is(o.ignore) && o[n].call(i, this, t)
                    }
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var i, n = this.groups = {};
                    e.each(this.settings.groups, function(t, i) {
                        "string" == typeof i && (i = i.split(/\s/)), e.each(i, function(e, i) {
                            n[i] = t
                        })
                    }), i = this.settings.rules, e.each(i, function(t, n) {
                        i[t] = e.validator.normalizeRule(n)
                    }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function(t) {
                    var i = this.clean(t),
                        n = this.validationTargetFor(i),
                        o = !0;
                    return this.lastElement = n, void 0 === n ? delete this.invalid[i.name] : (this.prepareElement(n), this.currentElements = e(n), o = this.check(n) !== !1, o ? delete this.invalid[n.name] : this.invalid[n.name] = !0), e(t).attr("aria-invalid", !o), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), o
                },
                showErrors: function(t) {
                    if (t) {
                        e.extend(this.errorMap, t), this.errorList = [];
                        for (var i in t) this.errorList.push({
                            message: t[i],
                            element: this.findByName(i)[0]
                        });
                        this.successList = e.grep(this.successList, function(e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                    var t, i = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    if (this.settings.unhighlight)
                        for (t = 0; i[t]; t++) this.settings.unhighlight.call(this, i[t], this.settings.errorClass, "");
                    else i.removeClass(this.settings.errorClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(e) {
                    var t, i = 0;
                    for (t in e) i++;
                    return i
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(e) {
                    e.not(this.containers).text(""), this.addWrapper(e).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && 1 === e.grep(this.errorList, function(e) {
                        return e.element.name === t.name
                    }).length && t
                },
                elements: function() {
                    var t = this,
                        i = {};
                    return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !t.objectLength(e(this).rules())) && (i[this.name] = !0, !0)
                    })
                },
                clean: function(t) {
                    return e(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function(t) {
                    var i, n = e(t),
                        o = t.type;
                    return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && "undefined" != typeof t.validity ? !t.validity.badInput && n.val() : (i = n.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
                },
                check: function(t) {
                    t = this.validationTargetFor(this.clean(t));
                    var i, n, o, s = e(t).rules(),
                        r = e.map(s, function(e, t) {
                            return t
                        }).length,
                        a = !1,
                        l = this.elementValue(t);
                    for (n in s) {
                        o = {
                            method: n,
                            parameters: s[n]
                        };
                        try {
                            if (i = e.validator.methods[n].call(this, l, t, o.parameters), "dependency-mismatch" === i && 1 === r) {
                                a = !0;
                                continue
                            }
                            if (a = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!i) return this.formatAndAdd(t, o), !1
                        } catch (c) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method.", c), c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method."), c
                        }
                    }
                    if (!a) return this.objectLength(s) && this.successList.push(t), !0
                },
                customDataMessage: function(t, i) {
                    return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
                },
                customMessage: function(e, t) {
                    var i = this.settings.messages[e];
                    return i && (i.constructor === String ? i : i[t])
                },
                findDefined: function() {
                    for (var e = 0; e < arguments.length; e++)
                        if (void 0 !== arguments[e]) return arguments[e]
                },
                defaultMessage: function(t, i) {
                    return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "</strong>")
                },
                formatAndAdd: function(t, i) {
                    var n = this.defaultMessage(t, i.method),
                        o = /\$?\{(\d+)\}/g;
                    "function" == typeof n ? n = n.call(this, i.parameters, t) : o.test(n) && (n = e.validator.format(n.replace(o, "{$1}"), i.parameters)), this.errorList.push({
                        message: n,
                        element: t,
                        method: i.method
                    }), this.errorMap[t.name] = n, this.submitted[t.name] = n
                },
                addWrapper: function(e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function() {
                    var e, t, i;
                    for (e = 0; this.errorList[e]; e++) i = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return e(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, i) {
                    var n, o, s, r = this.errorsFor(t),
                        a = this.idOrName(t),
                        l = e(t).attr("aria-describedby");
                    r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = e("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(i || ""), n = r, this.settings.wrapper && (n = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, e(t)) : n.insertAfter(t), r.is("label") ? r.attr("for", a) : 0 === r.parents("label[for='" + a + "']").length && (s = r.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), l ? l.match(new RegExp("\\b" + s + "\\b")) || (l += " " + s) : l = s, e(t).attr("aria-describedby", l), o = this.groups[t.name], o && e.each(this.groups, function(t, i) {
                        i === o && e("[name='" + t + "']", this.currentForm).attr("aria-describedby", r.attr("id"))
                    }))), !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
                },
                errorsFor: function(t) {
                    var i = this.idOrName(t),
                        n = e(t).attr("aria-describedby"),
                        o = "label[for='" + i + "'], label[for='" + i + "'] *";
                    return n && (o = o + ", #" + n.replace(/\s+/g, ", #")), this.errors().filter(o)
                },
                idOrName: function(e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function(t) {
                    return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
                },
                checkable: function(e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function(t) {
                    return e(this.currentForm).find("[name='" + t + "']")
                },
                getLength: function(t, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(e, t) {
                    return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
                },
                dependTypes: {
                    "boolean": function(e) {
                        return e
                    },
                    string: function(t, i) {
                        return !!e(t, i.form).length
                    },
                    "function": function(e, t) {
                        return e(t)
                    }
                },
                optional: function(t) {
                    var i = this.elementValue(t);
                    return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
                },
                startRequest: function(e) {
                    this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
                },
                stopRequest: function(t, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t) {
                    return e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                },
                destroy: function() {
                    this.resetForm(), e(this.currentForm).off(".validate").removeData("validator")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, i) {
                t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var i = {},
                    n = e(t).attr("class");
                return n && e.each(n.split(" "), function() {
                    this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
                }), i
            },
            normalizeAttributeRule: function(e, t, i, n) {
                /min|max/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
            },
            attributeRules: function(t) {
                var i, n, o = {},
                    s = e(t),
                    r = t.getAttribute("type");
                for (i in e.validator.methods) "required" === i ? (n = t.getAttribute(i), "" === n && (n = !0), n = !!n) : n = s.attr(i), this.normalizeAttributeRule(o, r, i, n);
                return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o
            },
            dataRules: function(t) {
                var i, n, o = {},
                    s = e(t),
                    r = t.getAttribute("type");
                for (i in e.validator.methods) n = s.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(o, r, i, n);
                return o
            },
            staticRules: function(t) {
                var i = {},
                    n = e.data(t.form, "validator");
                return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}), i
            },
            normalizeRules: function(t, i) {
                return e.each(t, function(n, o) {
                        if (o === !1) return void delete t[n];
                        if (o.param || o.depends) {
                            var s = !0;
                            switch (typeof o.depends) {
                                case "string":
                                    s = !!e(o.depends, i.form).length;
                                    break;
                                case "function":
                                    s = o.depends.call(i, i)
                            }
                            s ? t[n] = void 0 === o.param || o.param : delete t[n]
                        }
                    }), e.each(t, function(n, o) {
                        t[n] = e.isFunction(o) ? o(i) : o
                    }), e.each(["minlength", "maxlength"], function() {
                        t[this] && (t[this] = Number(t[this]))
                    }), e.each(["rangelength", "range"], function() {
                        var i;
                        t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
                    }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)),
                    t
            },
            normalizeRule: function(t) {
                if ("string" == typeof t) {
                    var i = {};
                    e.each(t.split(/\s/), function() {
                        i[this] = !0
                    }), t = i
                }
                return t
            },
            addMethod: function(t, i, n) {
                e.validator.methods[t] = i, e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t], i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, i, n) {
                    if (!this.depend(n, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var o = e(i).val();
                        return o && o.length > 0
                    }
                    return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
                },
                email: function(e, t) {
                    return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
                },
                url: function(e, t) {
                    return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
                },
                date: function(e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
                },
                dateISO: function(e, t) {
                    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
                },
                number: function(e, t) {
                    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function(e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                creditcard: function(e, t) {
                    if (this.optional(t)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(e)) return !1;
                    var i, n, o = 0,
                        s = 0,
                        r = !1;
                    if (e = e.replace(/\D/g, ""), e.length < 13 || e.length > 19) return !1;
                    for (i = e.length - 1; i >= 0; i--) n = e.charAt(i), s = parseInt(n, 10), r && (s *= 2) > 9 && (s -= 9), o += s, r = !r;
                    return o % 10 === 0
                },
                minlength: function(t, i, n) {
                    var o = e.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || o >= n
                },
                maxlength: function(t, i, n) {
                    var o = e.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || n >= o
                },
                rangelength: function(t, i, n) {
                    var o = e.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || o >= n[0] && o <= n[1]
                },
                min: function(e, t, i) {
                    return this.optional(t) || e >= i
                },
                max: function(e, t, i) {
                    return this.optional(t) || i >= e
                },
                range: function(e, t, i) {
                    return this.optional(t) || e >= i[0] && e <= i[1]
                },
                equalTo: function(t, i, n) {
                    var o = e(n);
                    return this.settings.onfocusout && o.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                        e(i).valid()
                    }), t === o.val()
                },
                remote: function(t, i, n) {
                    if (this.optional(i)) return "dependency-mismatch";
                    var o, s, r = this.previousValue(i);
                    return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, n = "string" == typeof n && {
                        url: n
                    } || n, r.old === t ? r.valid : (r.old = t, o = this, this.startRequest(i), s = {}, s[i.name] = t, e.ajax(e.extend(!0, {
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: s,
                        context: o.currentForm,
                        success: function(n) {
                            var s, a, l, c = n === !0 || "true" === n;
                            o.settings.messages[i.name].remote = r.originalMessage, c ? (l = o.formSubmitted, o.prepareElement(i), o.formSubmitted = l, o.successList.push(i), delete o.invalid[i.name], o.showErrors()) : (s = {}, a = n || o.defaultMessage(i, "remote"), s[i.name] = r.message = e.isFunction(a) ? a(t) : a, o.invalid[i.name] = !0, o.showErrors(s)), r.valid = c, o.stopRequest(i, c)
                        }
                    }, n)), "pending")
                }
            }
        });
        var t, i = {};
        e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, n) {
            var o = e.port;
            "abort" === e.mode && (i[o] && i[o].abort(), i[o] = n)
        }) : (t = e.ajax, e.ajax = function(n) {
            var o = ("mode" in n ? n : e.ajaxSettings).mode,
                s = ("port" in n ? n : e.ajaxSettings).port;
            return "abort" === o ? (i[s] && i[s].abort(), i[s] = t.apply(this, arguments), i[s]) : t.apply(this, arguments)
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate"], e) : e(jQuery)
    }(function(e) {
        ! function() {
            function t(e) {
                return e.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-â€œâ€â€™]*/g, "")
            }
            e.validator.addMethod("maxWords", function(e, i, n) {
                return this.optional(i) || t(e).match(/\b\w+\b/g).length <= n
            }, e.validator.format("Please enter {0} words or less.")), e.validator.addMethod("minWords", function(e, i, n) {
                return this.optional(i) || t(e).match(/\b\w+\b/g).length >= n
            }, e.validator.format("Please enter at least {0} words.")), e.validator.addMethod("rangeWords", function(e, i, n) {
                var o = t(e),
                    s = /\b\w+\b/g;
                return this.optional(i) || o.match(s).length >= n[0] && o.match(s).length <= n[1]
            }, e.validator.format("Please enter between {0} and {1} words."))
        }(), e.validator.addMethod("accept", function(t, i, n) {
            var o, s, r = "string" == typeof n ? n.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
                a = this.optional(i);
            if (a) return a;
            if ("file" === e(i).attr("type") && (r = r.replace(/\*/g, ".*"), i.files && i.files.length))
                for (o = 0; o < i.files.length; o++)
                    if (s = i.files[o], !s.type.match(new RegExp("\\.?(" + r + ")$", "i"))) return !1;
            return !0
        }, e.validator.format("Please enter a value with a valid mimetype.")), e.validator.addMethod("alphanumeric", function(e, t) {
            return this.optional(t) || /^\w+$/i.test(e)
        }, "Letters, numbers, and underscores only please"), e.validator.addMethod("bankaccountNL", function(e, t) {
            if (this.optional(t)) return !0;
            if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(e)) return !1;
            var i, n, o, s = e.replace(/ /g, ""),
                r = 0,
                a = s.length;
            for (i = 0; i < a; i++) n = a - i, o = s.substring(i, i + 1), r += n * o;
            return r % 11 === 0
        }, "Please specify a valid bank account number"), e.validator.addMethod("bankorgiroaccountNL", function(t, i) {
            return this.optional(i) || e.validator.methods.bankaccountNL.call(this, t, i) || e.validator.methods.giroaccountNL.call(this, t, i)
        }, "Please specify a valid bank or giro account number"), e.validator.addMethod("bic", function(e, t) {
            return this.optional(t) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(e)
        }, "Please specify a valid BIC code"), e.validator.addMethod("cifES", function(e) {
            "use strict";
            var t, i, n, o, s, r, a = [];
            if (e = e.toUpperCase(), !e.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")) return !1;
            for (n = 0; n < 9; n++) a[n] = parseInt(e.charAt(n), 10);
            for (i = a[2] + a[4] + a[6], o = 1; o < 8; o += 2) s = (2 * a[o]).toString(), r = s.charAt(1), i += parseInt(s.charAt(0), 10) + ("" === r ? 0 : parseInt(r, 10));
            return !!/^[ABCDEFGHJNPQRSUVW]{1}/.test(e) && (i += "", t = 10 - parseInt(i.charAt(i.length - 1), 10), e += t, a[8].toString() === String.fromCharCode(64 + t) || a[8].toString() === e.charAt(e.length - 1))
        }, "Please specify a valid CIF number."), e.validator.addMethod("cpfBR", function(e) {
            if (e = e.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, ""), 11 !== e.length) return !1;
            var t, i, n, o, s = 0;
            if (t = parseInt(e.substring(9, 10), 10), i = parseInt(e.substring(10, 11), 10), n = function(e, t) {
                    var i = 10 * e % 11;
                    return 10 !== i && 11 !== i || (i = 0), i === t
                }, "" === e || "00000000000" === e || "11111111111" === e || "22222222222" === e || "33333333333" === e || "44444444444" === e || "55555555555" === e || "66666666666" === e || "77777777777" === e || "88888888888" === e || "99999999999" === e) return !1;
            for (o = 1; o <= 9; o++) s += parseInt(e.substring(o - 1, o), 10) * (11 - o);
            if (n(s, t)) {
                for (s = 0, o = 1; o <= 10; o++) s += parseInt(e.substring(o - 1, o), 10) * (12 - o);
                return n(s, i)
            }
            return !1
        }, "Please specify a valid CPF number"), e.validator.addMethod("creditcardtypes", function(e, t, i) {
            if (/[^0-9\-]+/.test(e)) return !1;
            e = e.replace(/\D/g, "");
            var n = 0;
            return i.mastercard && (n |= 1), i.visa && (n |= 2), i.amex && (n |= 4), i.dinersclub && (n |= 8), i.enroute && (n |= 16), i.discover && (n |= 32), i.jcb && (n |= 64), i.unknown && (n |= 128), i.all && (n = 255), 1 & n && /^(5[12345])/.test(e) ? 16 === e.length : 2 & n && /^(4)/.test(e) ? 16 === e.length : 4 & n && /^(3[47])/.test(e) ? 15 === e.length : 8 & n && /^(3(0[012345]|[68]))/.test(e) ? 14 === e.length : 16 & n && /^(2(014|149))/.test(e) ? 15 === e.length : 32 & n && /^(6011)/.test(e) ? 16 === e.length : 64 & n && /^(3)/.test(e) ? 16 === e.length : 64 & n && /^(2131|1800)/.test(e) ? 15 === e.length : !!(128 & n)
        }, "Please enter a valid credit card number."), e.validator.addMethod("currency", function(e, t, i) {
            var n, o = "string" == typeof i,
                s = o ? i : i[0],
                r = !!o || i[1];
            return s = s.replace(/,/g, ""), s = r ? s + "]" : s + "]?", n = "^[" + s + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", n = new RegExp(n), this.optional(t) || n.test(e)
        }, "Please specify a valid currency"), e.validator.addMethod("dateFA", function(e, t) {
            return this.optional(t) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(e)
        }, e.validator.messages.date), e.validator.addMethod("dateITA", function(e, t) {
            var i, n, o, s, r, a = !1,
                l = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
            return l.test(e) ? (i = e.split("/"), n = parseInt(i[0], 10), o = parseInt(i[1], 10), s = parseInt(i[2], 10), r = new Date(Date.UTC(s, o - 1, n, 12, 0, 0, 0)), a = r.getUTCFullYear() === s && r.getUTCMonth() === o - 1 && r.getUTCDate() === n) : a = !1, this.optional(t) || a
        }, e.validator.messages.date), e.validator.addMethod("dateNL", function(e, t) {
            return this.optional(t) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(e)
        }, e.validator.messages.date), e.validator.addMethod("extension", function(e, t, i) {
            return i = "string" == typeof i ? i.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || e.match(new RegExp("\\.(" + i + ")$", "i"))
        }, e.validator.format("Please enter a value with a valid extension.")), e.validator.addMethod("giroaccountNL", function(e, t) {
            return this.optional(t) || /^[0-9]{1,7}$/.test(e)
        }, "Please specify a valid giro account number"), e.validator.addMethod("iban", function(e, t) {
            if (this.optional(t)) return !0;
            var i, n, o, s, r, a, l, c, d, u = e.replace(/ /g, "").toUpperCase(),
                h = "",
                p = !0,
                f = "",
                m = "";
            if (i = u.substring(0, 2), a = {
                    AL: "\\d{8}[\\dA-Z]{16}",
                    AD: "\\d{8}[\\dA-Z]{12}",
                    AT: "\\d{16}",
                    AZ: "[\\dA-Z]{4}\\d{20}",
                    BE: "\\d{12}",
                    BH: "[A-Z]{4}[\\dA-Z]{14}",
                    BA: "\\d{16}",
                    BR: "\\d{23}[A-Z][\\dA-Z]",
                    BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
                    CR: "\\d{17}",
                    HR: "\\d{17}",
                    CY: "\\d{8}[\\dA-Z]{16}",
                    CZ: "\\d{20}",
                    DK: "\\d{14}",
                    DO: "[A-Z]{4}\\d{20}",
                    EE: "\\d{16}",
                    FO: "\\d{14}",
                    FI: "\\d{14}",
                    FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
                    GE: "[\\dA-Z]{2}\\d{16}",
                    DE: "\\d{18}",
                    GI: "[A-Z]{4}[\\dA-Z]{15}",
                    GR: "\\d{7}[\\dA-Z]{16}",
                    GL: "\\d{14}",
                    GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
                    HU: "\\d{24}",
                    IS: "\\d{22}",
                    IE: "[\\dA-Z]{4}\\d{14}",
                    IL: "\\d{19}",
                    IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
                    KZ: "\\d{3}[\\dA-Z]{13}",
                    KW: "[A-Z]{4}[\\dA-Z]{22}",
                    LV: "[A-Z]{4}[\\dA-Z]{13}",
                    LB: "\\d{4}[\\dA-Z]{20}",
                    LI: "\\d{5}[\\dA-Z]{12}",
                    LT: "\\d{16}",
                    LU: "\\d{3}[\\dA-Z]{13}",
                    MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
                    MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
                    MR: "\\d{23}",
                    MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
                    MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
                    MD: "[\\dA-Z]{2}\\d{18}",
                    ME: "\\d{18}",
                    NL: "[A-Z]{4}\\d{10}",
                    NO: "\\d{11}",
                    PK: "[\\dA-Z]{4}\\d{16}",
                    PS: "[\\dA-Z]{4}\\d{21}",
                    PL: "\\d{24}",
                    PT: "\\d{21}",
                    RO: "[A-Z]{4}[\\dA-Z]{16}",
                    SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
                    SA: "\\d{2}[\\dA-Z]{18}",
                    RS: "\\d{18}",
                    SK: "\\d{20}",
                    SI: "\\d{15}",
                    ES: "\\d{20}",
                    SE: "\\d{20}",
                    CH: "\\d{5}[\\dA-Z]{12}",
                    TN: "\\d{20}",
                    TR: "\\d{5}[\\dA-Z]{17}",
                    AE: "\\d{3}\\d{16}",
                    GB: "[A-Z]{4}\\d{14}",
                    VG: "[\\dA-Z]{4}\\d{16}"
                }, r = a[i], "undefined" != typeof r && (l = new RegExp("^[A-Z]{2}\\d{2}" + r + "$", ""), !l.test(u))) return !1;
            for (n = u.substring(4, u.length) + u.substring(0, 4), c = 0; c < n.length; c++) o = n.charAt(c), "0" !== o && (p = !1), p || (h += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(o));
            for (d = 0; d < h.length; d++) s = h.charAt(d), m = "" + f + s, f = m % 97;
            return 1 === f
        }, "Please specify a valid IBAN"), e.validator.addMethod("integer", function(e, t) {
            return this.optional(t) || /^-?\d+$/.test(e)
        }, "A positive or negative non-decimal number please"), e.validator.addMethod("ipv4", function(e, t) {
            return this.optional(t) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e)
        }, "Please enter a valid IP v4 address."), e.validator.addMethod("ipv6", function(e, t) {
            return this.optional(t) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e)
        }, "Please enter a valid IP v6 address."), e.validator.addMethod("lettersonly", function(e, t) {
            return this.optional(t) || /^[a-z]+$/i.test(e)
        }, "Letters only please"), e.validator.addMethod("letterswithbasicpunc", function(e, t) {
            return this.optional(t) || /^[a-z\-.,()'"\s]+$/i.test(e)
        }, "Letters or punctuation only please"), e.validator.addMethod("mobileNL", function(e, t) {
            return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(e)
        }, "Please specify a valid mobile number"), e.validator.addMethod("mobileUK", function(e, t) {
            return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
        }, "Please specify a valid mobile number"), e.validator.addMethod("nieES", function(e) {
            "use strict";
            return e = e.toUpperCase(), !!e.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[T]{1}/.test(e) ? e[8] === /^[T]{1}[A-Z0-9]{8}$/.test(e) : !!/^[XYZ]{1}/.test(e) && e[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(e.replace("X", "0").replace("Y", "1").replace("Z", "2").substring(0, 8) % 23))
        }, "Please specify a valid NIE number."), e.validator.addMethod("nifES", function(e) {
            "use strict";
            return e = e.toUpperCase(), !!e.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[0-9]{8}[A-Z]{1}$/.test(e) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(e.substring(8, 0) % 23) === e.charAt(8) : !!/^[KLM]{1}/.test(e) && e[8] === String.fromCharCode(64))
        }, "Please specify a valid NIF number."), jQuery.validator.addMethod("notEqualTo", function(t, i, n) {
            return this.optional(i) || !e.validator.methods.equalTo.call(this, t, i, n)
        }, "Please enter a different value, values must not be the same."), e.validator.addMethod("nowhitespace", function(e, t) {
            return this.optional(t) || /^\S+$/i.test(e)
        }, "No white space please"), e.validator.addMethod("pattern", function(e, t, i) {
            return !!this.optional(t) || ("string" == typeof i && (i = new RegExp("^(?:" + i + ")$")), i.test(e))
        }, "Invalid format."), e.validator.addMethod("phoneNL", function(e, t) {
            return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(e)
        }, "Please specify a valid phone number."), e.validator.addMethod("phoneUK", function(e, t) {
            return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
        }, "Please specify a valid phone number"), e.validator.addMethod("phoneUS", function(e, t) {
            return e = e.replace(/\s+/g, ""), this.optional(t) || e.length > 9 && e.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
        }, "Please specify a valid phone number"), e.validator.addMethod("phonesUK", function(e, t) {
            return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
        }, "Please specify a valid uk phone number"), e.validator.addMethod("postalCodeCA", function(e, t) {
            return this.optional(t) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(e)
        }, "Please specify a valid postal code"), e.validator.addMethod("postalcodeBR", function(e, t) {
            return this.optional(t) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(e)
        }, "Informe um CEP vÃ¡lido."), e.validator.addMethod("postalcodeIT", function(e, t) {
            return this.optional(t) || /^\d{5}$/.test(e)
        }, "Please specify a valid postal code"), e.validator.addMethod("postalcodeNL", function(e, t) {
            return this.optional(t) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(e)
        }, "Please specify a valid postal code"), e.validator.addMethod("postcodeUK", function(e, t) {
            return this.optional(t) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(e)
        }, "Please specify a valid UK postcode"), e.validator.addMethod("require_from_group", function(t, i, n) {
            var o = e(n[1], i.form),
                s = o.eq(0),
                r = s.data("valid_req_grp") ? s.data("valid_req_grp") : e.extend({}, this),
                a = o.filter(function() {
                    return r.elementValue(this)
                }).length >= n[0];
            return s.data("valid_req_grp", r), e(i).data("being_validated") || (o.data("being_validated", !0), o.each(function() {
                r.element(this)
            }), o.data("being_validated", !1)), a
        }, e.validator.format("Please fill at least {0} of these fields.")), e.validator.addMethod("skip_or_fill_minimum", function(t, i, n) {
            var o = e(n[1], i.form),
                s = o.eq(0),
                r = s.data("valid_skip") ? s.data("valid_skip") : e.extend({}, this),
                a = o.filter(function() {
                    return r.elementValue(this)
                }).length,
                l = 0 === a || a >= n[0];
            return s.data("valid_skip", r), e(i).data("being_validated") || (o.data("being_validated", !0), o.each(function() {
                r.element(this)
            }), o.data("being_validated", !1)), l
        }, e.validator.format("Please either skip these fields or fill at least {0} of them.")), e.validator.addMethod("stateUS", function(e, t, i) {
            var n, o = "undefined" == typeof i,
                s = !o && "undefined" != typeof i.caseSensitive && i.caseSensitive,
                r = !o && "undefined" != typeof i.includeTerritories && i.includeTerritories,
                a = !o && "undefined" != typeof i.includeMilitary && i.includeMilitary;
            return n = r || a ? r && a ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : r ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", n = s ? new RegExp(n) : new RegExp(n, "i"), this.optional(t) || n.test(e)
        }, "Please specify a valid state"), e.validator.addMethod("strippedminlength", function(t, i, n) {
            return e(t).text().length >= n
        }, e.validator.format("Please enter at least {0} characters")), e.validator.addMethod("time", function(e, t) {
            return this.optional(t) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(e)
        }, "Please enter a valid time, between 00:00 and 23:59"), e.validator.addMethod("time12h", function(e, t) {
            return this.optional(t) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(e)
        }, "Please enter a valid time in 12-hour am/pm format"), e.validator.addMethod("url2", function(e, t) {
            return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
        }, e.validator.messages.url), e.validator.addMethod("vinUS", function(e) {
            if (17 !== e.length) return !1;
            var t, i, n, o, s, r, a = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                l = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
                c = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
                d = 0;
            for (t = 0; t < 17; t++) {
                if (o = c[t], n = e.slice(t, t + 1), 8 === t && (r = n), isNaN(n)) {
                    for (i = 0; i < a.length; i++)
                        if (n.toUpperCase() === a[i]) {
                            n = l[i], n *= o, isNaN(r) && 8 === i && (r = a[i]);
                            break
                        }
                } else n *= o;
                d += n
            }
            return s = d % 11, 10 === s && (s = "X"), s === r
        }, "The specified vehicle identification number (VIN) is invalid."), e.validator.addMethod("zipcodeUS", function(e, t) {
            return this.optional(t) || /^\d{5}(-\d{4})?$/.test(e)
        }, "The specified US ZIP Code is invalid"), e.validator.addMethod("ziprange", function(e, t) {
            return this.optional(t) || /^90[2-5]\d\{2\}-\d{4}$/.test(e)
        }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")
    }), ! function(e, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"), t(require("scrollmagic"), TweenMax, TimelineMax)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
    }(this, function(e, t, i) {
        "use strict";
        e.Scene.addOption("tweenChanges", !1, function(e) {
            return !!e
        }), e.Scene.extend(function() {
            var e, n = this;
            n.on("progress.plugin_gsap", function() {
                o()
            }), n.on("destroy.plugin_gsap", function(e) {
                n.removeTween(e.reset)
            });
            var o = function() {
                if (e) {
                    var t = n.progress(),
                        i = n.state();
                    e.repeat && -1 === e.repeat() ? "DURING" === i && e.paused() ? e.play() : "DURING" === i || e.paused() || e.pause() : t != e.progress() && (0 === n.duration() ? t > 0 ? e.play() : e.reverse() : n.tweenChanges() && e.tweenTo ? e.tweenTo(t * e.duration()) : e.progress(t).pause())
                }
            };
            n.setTween = function(s, r, a) {
                var l;
                arguments.length > 1 && (arguments.length < 3 && (a = r, r = 1), s = t.to(s, r, a));
                try {
                    l = i ? new i({
                        smoothChildTiming: !0
                    }).add(s) : s, l.pause()
                } catch (c) {
                    return n
                }
                return e && n.removeTween(), e = l, s.repeat && -1 === s.repeat() && (e.repeat(-1), e.yoyo(s.yoyo())), o(), n
            }, n.removeTween = function(t) {
                return e && (t && e.progress(0).pause(), e.kill(), e = void 0), n
            }
        })
    }), customForm = {
        baseOptions: {
            useNativeDropOnMobileDevices: !1,
            unselectableClass: "customForm-unselectable",
            labelActiveClass: "customForm-label-active",
            labelDisabledClass: "customForm-label-disabled",
            classPrefix: "customForm-class-",
            hiddenClass: "customForm-hidden",
            focusClass: "customForm-focus",
            wrapperTag: "div"
        },
        customForms: {
            setOptions: function(e) {
                for (var t in e) e.hasOwnProperty(t) && "object" == typeof e[t] && customForm.lib.extend(customForm.modules[t].prototype.defaultOptions, e[t])
            },
            replaceAll: function() {
                for (var e in customForm.modules)
                    for (var t = customForm.lib.queryBySelector(customForm.modules[e].prototype.selector), i = 0; i < t.length; i++) t[i].customForm ? t[i].customForm.refreshState() : !customForm.lib.hasClass(t[i], "default") && customForm.modules[e].prototype.checkElement(t[i]) && new customForm.modules[e]({
                        replaces: t[i]
                    })
            },
            refreshElement: function(e) {
                e && e.customForm && e.customForm.refreshState()
            },
            refreshAll: function() {
                for (var e in customForm.modules)
                    for (var t = customForm.lib.queryBySelector(customForm.modules[e].prototype.selector), i = 0; i < t.length; i++) t[i].customForm && t[i].customForm.refreshState()
            },
            destroyAll: function() {
                for (var e in customForm.modules)
                    for (var t = customForm.lib.queryBySelector(customForm.modules[e].prototype.selector), i = 0; i < t.length; i++) t[i].customForm && t[i].customForm.destroy()
            }
        },
        isTouchDevice: function() {
            try {
                return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
            } catch (e) {
                return !1
            }
        }(),
        setBaseModule: function(e) {
            customForm.customControl = function(e) {
                this.options = customForm.lib.extend({}, customForm.baseOptions, this.defaultOptions, e), this.init()
            };
            for (var t in e) customForm.customControl.prototype[t] = e[t]
        },
        init: function() {
            return this.eventPress = this.isTouchDevice ? "touchstart" : "mousedown", this.eventMove = this.isTouchDevice ? "touchmove" : "mousemove", this.eventRelease = this.isTouchDevice ? "touchend" : "mouseup", this
        },
        initStyles: function() {
            var e = document.getElementsByTagName("head")[0],
                t = document.createTextNode("." + customForm.baseOptions.unselectableClass + "{-moz-user-select:none;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-user-select:none;user-select:none;}"),
                i = document.createElement("style");
            i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = t.nodeValue : i.appendChild(t), e.appendChild(i)
        },
        modules: {},
        plugins: {},
        addModule: function(e) {
            if (e.name) {
                customForm.modules[e.name] = function() {
                    customForm.modules[e.name].superclass.constructor.apply(this, arguments)
                }, customForm.lib.inherit(customForm.modules[e.name], customForm.customControl);
                for (var t in e) customForm.modules[e.name].prototype[t] = e[t];
                customForm.modules[e.name].prototype.onCreateModule();
                for (var i in customForm.modules) customForm.modules[i] != customForm.modules[e.name] && customForm.modules[i].prototype.onModuleAdded(customForm.modules[e.name])
            }
        },
        addPlugin: function(e) {
            if (e && e.name) {
                customForm.plugins[e.name] = function() {
                    this.init.apply(this, arguments)
                };
                for (var t in e) customForm.plugins[e.name].prototype[t] = e[t]
            }
        }
    }.init(), customForm.setBaseModule({
        init: function() {
            this.options.replaces && (this.realElement = this.options.replaces, this.realElement.customForm = this, this.replaceObject())
        },
        defaultOptions: {},
        checkElement: function(e) {
            return !0
        },
        replaceObject: function() {
            this.createWrapper(), this.attachEvents(), this.fixStyles(), this.setupWrapper()
        },
        createWrapper: function() {
            this.fakeElement = customForm.lib.createElement(this.options.wrapperTag), this.labelFor = customForm.lib.getLabelFor(this.realElement), customForm.lib.disableTextSelection(this.fakeElement), customForm.lib.addClass(this.fakeElement, customForm.lib.getAllClasses(this.realElement.className, this.options.classPrefix)), customForm.lib.addClass(this.realElement, customForm.baseOptions.hiddenClass)
        },
        attachEvents: function() {
            customForm.lib.event.add(this.realElement, "focus", this.onFocusHandler, this), customForm.lib.event.add(this.realElement, "blur", this.onBlurHandler, this), customForm.lib.event.add(this.fakeElement, "click", this.onFakeClick, this), customForm.lib.event.add(this.fakeElement, customForm.eventPress, this.onFakePressed, this), customForm.lib.event.add(this.fakeElement, customForm.eventRelease, this.onFakeReleased, this), this.labelFor && (this.labelFor.customForm = this, customForm.lib.event.add(this.labelFor, "click", this.onFakeClick, this), customForm.lib.event.add(this.labelFor, customForm.eventPress, this.onFakePressed, this), customForm.lib.event.add(this.labelFor, customForm.eventRelease, this.onFakeReleased, this))
        },
        fixStyles: function() {
            if (customForm.isTouchDevice) {
                var e = "rgba(255,255,255,0)";
                this.realElement.style.webkitTapHighlightColor = e, this.fakeElement.style.webkitTapHighlightColor = e, this.labelFor && (this.labelFor.style.webkitTapHighlightColor = e)
            }
        },
        setupWrapper: function() {},
        refreshState: function() {},
        destroy: function() {
            this.fakeElement && this.fakeElement.parentNode && this.fakeElement.parentNode.removeChild(this.fakeElement), customForm.lib.removeClass(this.realElement, customForm.baseOptions.hiddenClass), this.realElement.customForm = null
        },
        onFocus: function() {
            customForm.lib.addClass(this.fakeElement, this.options.focusClass)
        },
        onBlur: function(e) {
            customForm.lib.removeClass(this.fakeElement, this.options.focusClass)
        },
        onFocusHandler: function() {
            this.focused || (this.focused = !0, customForm.isTouchDevice && (customForm.focusedInstance && customForm.focusedInstance.realElement != this.realElement && (customForm.focusedInstance.onBlur(), customForm.focusedInstance.realElement.blur()), customForm.focusedInstance = this), this.onFocus.apply(this, arguments))
        },
        onBlurHandler: function() {
            this.pressedFlag || (this.focused = !1, this.onBlur.apply(this, arguments))
        },
        onFakeClick: function() {
            customForm.isTouchDevice ? this.onFocus() : this.realElement.disabled || this.realElement.focus()
        },
        onFakePressed: function(e) {
            this.pressedFlag = !0
        },
        onFakeReleased: function() {
            this.pressedFlag = !1
        },
        onCreateModule: function() {},
        onModuleAdded: function(e) {},
        onControlReady: function() {}
    }), customForm.lib = {
        bind: function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        browser: function() {
            var e = navigator.userAgent.toLowerCase(),
                t = {},
                i = /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e) || [];
            return t[i[1]] = !0, t.version = i[2] || "0", t.safariMac = e.indexOf("mac") != -1 && e.indexOf("safari") != -1, t
        }(),
        getOffset: function(e) {
            if (e.getBoundingClientRect) {
                var t = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                    i = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                    n = document.documentElement.clientLeft || document.body.clientLeft || 0,
                    o = document.documentElement.clientTop || document.body.clientTop || 0;
                return {
                    top: Math.round(e.getBoundingClientRect().top + i - o),
                    left: Math.round(e.getBoundingClientRect().left + t - n)
                }
            }
            for (var s = 0, r = 0; e.offsetParent;) s += e.offsetLeft, r += e.offsetTop, e = e.offsetParent;
            return {
                top: r,
                left: s
            }
        },
        getScrollTop: function() {
            return window.pageYOffset || document.documentElement.scrollTop
        },
        getScrollLeft: function() {
            return window.pageXOffset || document.documentElement.scrollLeft
        },
        getWindowWidth: function() {
            return "CSS1Compat" == document.compatMode ? document.documentElement.clientWidth : document.body.clientWidth
        },
        getWindowHeight: function() {
            return "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight
        },
        getStyle: function(e, t) {
            return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, null)[t] : e.currentStyle ? e.currentStyle[t] : e.style[t]
        },
        getParent: function(e, t) {
            for (; e.parentNode && e.parentNode != document.body;) {
                if (e.parentNode.tagName.toLowerCase() == t.toLowerCase()) return e.parentNode;
                e = e.parentNode
            }
            return !1
        },
        isParent: function(e, t) {
            for (; e.parentNode;) {
                if (e.parentNode === t) return !0;
                e = e.parentNode
            }
            return !1
        },
        getLabelFor: function(e) {
            return customForm.lib.getParent(e, "label") ? e.parentNode : e.id ? customForm.lib.queryBySelector('label[for="' + e.id + '"]')[0] : void 0
        },
        disableTextSelection: function(e) {
            "undefined" != typeof e.onselectstart ? e.onselectstart = function() {
                return !1
            } : window.opera ? e.setAttribute("unselectable", "on") : customForm.lib.addClass(e, customForm.baseOptions.unselectableClass)
        },
        enableTextSelection: function(e) {
            "undefined" != typeof e.onselectstart ? e.onselectstart = null : window.opera ? e.removeAttribute("unselectable") : customForm.lib.removeClass(e, customForm.baseOptions.unselectableClass)
        },
        queryBySelector: function(e, t) {
            return this.getElementsBySelector(e, t)
        },
        prevSibling: function(e) {
            for (;
                (e = e.previousSibling) && 1 != e.nodeType;);
            return e
        },
        nextSibling: function(e) {
            for (;
                (e = e.nextSibling) && 1 != e.nodeType;);
            return e
        },
        fireEvent: function(e, t) {
            if (document.createEvent) {
                var i = document.createEvent("HTMLEvents");
                return i.initEvent(t, !0, !0), !e.dispatchEvent(i)
            }
            var i = document.createEventObject();
            return e.fireEvent("on" + t, i)
        },
        isParent: function(e, t) {
            for (; t.parentNode;) {
                if (e == t) return !0;
                t = t.parentNode
            }
            return !1
        },
        inherit: function(e, t) {
            var i = function() {};
            i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e, e.superclass = t.prototype
        },
        extend: function(e) {
            for (var t = 1; t < arguments.length; t++)
                for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
            return e
        },
        hasClass: function(e, t) {
            return !!e.className && e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
        },
        addClass: function(e, t) {
            this.hasClass(e, t) || (e.className += (e.className.length && " " !== e.className.charAt(e.className.length - 1) ? " " : "") + t)
        },
        removeClass: function(e, t) {
            this.hasClass(e, t) && (e.className = e.className.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), " ").replace(/\s+$/, ""))
        },
        toggleClass: function(e, t, i) {
            i ? this.addClass(e, t) : this.removeClass(e, t)
        },
        createElement: function(e, t) {
            var i = document.createElement(e);
            for (var n in t)
                if (t.hasOwnProperty(n)) switch (n) {
                    case "class":
                        i.className = t[n];
                        break;
                    case "html":
                        i.innerHTML = t[n];
                        break;
                    case "style":
                        this.setStyles(i, t[n]);
                        break;
                    default:
                        i.setAttribute(n, t[n])
                }
                return i
        },
        setStyles: function(e, t) {
            for (var i in t)
                if (t.hasOwnProperty(i)) switch (i) {
                    case "float":
                        e.style.cssFloat = t[i];
                        break;
                    case "opacity":
                        e.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * t[i] + ")", e.style.opacity = t[i];
                        break;
                    default:
                        e.style[i] = ("undefined" == typeof t[i] ? 0 : t[i]) + ("number" == typeof t[i] ? "px" : "")
                }
                return e
        },
        getInnerWidth: function(e) {
            return e.offsetWidth - (parseInt(this.getStyle(e, "paddingLeft")) || 0) - (parseInt(this.getStyle(e, "paddingRight")) || 0)
        },
        getInnerHeight: function(e) {
            return e.offsetHeight - (parseInt(this.getStyle(e, "paddingTop")) || 0) - (parseInt(this.getStyle(e, "paddingBottom")) || 0)
        },
        getAllClasses: function(e, t, i) {
            return i || (i = ""), t || (t = ""), e ? e.replace(new RegExp("(\\s|^)" + i + "(\\s|$)"), " ").replace(/[\s]*([\S]+)+[\s]*/gi, t + "$1 ") : ""
        },
        getElementsBySelector: function(e, t) {
            if ("function" == typeof document.querySelectorAll) return (t || document).querySelectorAll(e);
            for (var i = e.split(","), n = [], o = 0; o < i.length; o++) {
                for (var s = [t || document], r = i[o].replace(/^\s+/, "").replace(/\s+$/, "").split(" "), a = 0; a < r.length; a++)
                    if (token = r[a].replace(/^\s+/, "").replace(/\s+$/, ""), token.indexOf("#") > -1) {
                        var l = token.split("#"),
                            c = l[0],
                            d = l[1],
                            u = document.getElementById(d);
                        if (c && u.nodeName.toLowerCase() != c) return [];
                        s = [u]
                    } else if (token.indexOf(".") > -1) {
                    for (var l = token.split("."), c = l[0] || "*", h = l[1], p = [], f = 0, m = 0; m < s.length; m++) {
                        var g;
                        g = "*" == c ? s[m].getElementsByTagName("*") : s[m].getElementsByTagName(c);
                        for (var v = 0; v < g.length; v++) p[f++] = g[v]
                    }
                    s = [];
                    for (var y = 0, b = 0; b < p.length; b++) p[b].className && p[b].className.match(new RegExp("(\\s|^)" + h + "(\\s|$)")) && (s[y++] = p[b])
                } else if (token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
                    var c = RegExp.$1 || "*",
                        x = RegExp.$2,
                        _ = RegExp.$3,
                        w = RegExp.$4;
                    "for" == x.toLowerCase() && this.browser.msie && this.browser.version < 8 && (x = "htmlFor");
                    for (var p = [], f = 0, m = 0; m < s.length; m++) {
                        var g;
                        g = "*" == c ? s[m].getElementsByTagName("*") : s[m].getElementsByTagName(c);
                        for (var v = 0; g[v]; v++) p[f++] = g[v]
                    }
                    s = [];
                    var T, y = 0;
                    switch (_) {
                        case "=":
                            T = function(e) {
                                return e.getAttribute(x) == w
                            };
                            break;
                        case "~":
                            T = function(e) {
                                return e.getAttribute(x).match(new RegExp("(\\s|^)" + w + "(\\s|$)"))
                            };
                            break;
                        case "|":
                            T = function(e) {
                                return e.getAttribute(x).match(new RegExp("^" + w + "-?"))
                            };
                            break;
                        case "^":
                            T = function(e) {
                                return 0 == e.getAttribute(x).indexOf(w)
                            };
                            break;
                        case "$":
                            T = function(e) {
                                return e.getAttribute(x).lastIndexOf(w) == e.getAttribute(x).length - w.length
                            };
                            break;
                        case "*":
                            T = function(e) {
                                return e.getAttribute(x).indexOf(w) > -1
                            };
                            break;
                        default:
                            T = function(e) {
                                return e.getAttribute(x)
                            }
                    }
                    s = [];
                    for (var y = 0, b = 0; b < p.length; b++) T(p[b]) && (s[y++] = p[b])
                } else {
                    c = token;
                    for (var p = [], f = 0, m = 0; m < s.length; m++)
                        for (var g = s[m].getElementsByTagName(c), v = 0; v < g.length; v++) p[f++] = g[v];
                    s = p
                }
                n = [].concat(n, s)
            }
            return n
        },
        scrollSize: function() {
            function e() {
                o && t(), n = document.createElement("div"), o = document.createElement("div"), o.style.cssText = "position:absolute;overflow:hidden;width:100px;height:100px", o.appendChild(n), document.body.appendChild(o)
            }

            function t() {
                document.body.removeChild(o), o = null
            }

            function i(i) {
                return e(), n.style.cssText = "height:" + (i ? "100%" : "200px"), s = i ? n.offsetHeight : n.offsetWidth, o.style.overflow = "scroll", n.innerHTML = 1, r = i ? n.offsetHeight : n.offsetWidth, i && o.clientHeight && (r = o.clientHeight), t(), s - r
            }
            var n, o, s, r;
            return {
                getWidth: function() {
                    return i(!1)
                },
                getHeight: function() {
                    return i(!0)
                }
            }
        }(),
        domReady: function(e) {
            function t() {
                n || (n = !0, e())
            }

            function i() {
                if (!n && document.body) try {
                    document.documentElement.doScroll("left"), t()
                } catch (e) {
                    setTimeout(i, 0)
                }
            }
            var n = !1;
            document.addEventListener ? document.addEventListener("DOMContentLoaded", t, !1) : document.attachEvent && (document.documentElement.doScroll && window == window.top && i(), document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && t()
            })), window.addEventListener ? window.addEventListener("load", t, !1) : window.attachEvent && window.attachEvent("onload", t)
        },
        event: function() {
            function e(e) {
                if (e = e || window.event, e.isFixed) return e;
                if (e.isFixed = !0, e.preventDefault = e.preventDefault || function() {
                        this.returnValue = !1
                    }, e.stopPropagation = e.stopPropagaton || function() {
                        this.cancelBubble = !0
                    }, e.target || (e.target = e.srcElement), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement == e.target ? e.toElement : e.fromElement), null == e.pageX && null != e.clientX) {
                    var t = document.documentElement,
                        i = document.body;
                    e.pageX = e.clientX + (t && t.scrollLeft || i && i.scrollLeft || 0) - (t.clientLeft || 0), e.pageY = e.clientY + (t && t.scrollTop || i && i.scrollTop || 0) - (t.clientTop || 0)
                }
                return !e.which && e.button && (e.which = 1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0), "DOMMouseScroll" !== e.type && "mousewheel" !== e.type || (e.mWheelDelta = 0, e.wheelDelta ? e.mWheelDelta = e.wheelDelta / 120 : e.detail && (e.mWheelDelta = -e.detail / 3)), e
            }

            function t(t, i) {
                t = e(t);
                var n = this.events[t.type];
                for (var o in n) {
                    var s = n[o],
                        r = s.call(i || this, t);
                    r === !1 && (t.preventDefault(), t.stopPropagation())
                }
            }
            var i = 0,
                n = {
                    add: function(e, o, s, r) {
                        e.setInterval && e != window && !e.frameElement && (e = window), s.guid || (s.guid = ++i), e.events || (e.events = {}, e.handle = function(i) {
                            return t.call(e, i)
                        }), e.events[o] || (e.events[o] = {}, e.addEventListener ? e.addEventListener(o, e.handle, !1) : e.attachEvent && e.attachEvent("on" + o, e.handle), "mousewheel" === o && n.add(e, "DOMMouseScroll", s, r));
                        var a = customForm.lib.bind(s, r);
                        a.guid = s.guid, e.events[o][s.guid] = r ? a : s
                    },
                    remove: function(e, t, i) {
                        var o = e.events && e.events[t];
                        if (o) {
                            delete o[i.guid];
                            for (var s in o) return;
                            e.removeEventListener ? e.removeEventListener(t, e.handle, !1) : e.detachEvent && e.detachEvent("on" + t, e.handle), delete e.events[t];
                            for (var s in e.events) return;
                            try {
                                delete e.handle, delete e.events
                            } catch (r) {
                                e.removeAttribute && (e.removeAttribute("handle"), e.removeAttribute("events"))
                            }
                            "mousewheel" === t && n.remove(e, "DOMMouseScroll", i)
                        }
                    }
                };
            return n
        }()
    }, customForm.lib.domReady(function() {
        customForm.initStyles()
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic"], t) : t("object" == typeof exports ? require("scrollmagic") : e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic)
    }(this, function(e) {
        "use strict";
        var t = "debug.addIndicators",
            i = window.console || {},
            n = Function.prototype.bind.call(i.error || i.log || function() {}, i);
        e || n("(" + t + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
        var o = "0.85em",
            s = "9999",
            r = 15,
            a = e._util,
            l = 0;
        e.Scene.extend(function() {
            var e, t = this;
            t.addIndicators = function(i) {
                if (!e) {
                    var n = {
                        name: "",
                        indent: 0,
                        parent: void 0,
                        colorStart: "green",
                        colorEnd: "red",
                        colorTrigger: "blue"
                    };
                    i = a.extend({}, n, i), l++, e = new c(t, i), t.on("add.plugin_addIndicators", e.add), t.on("remove.plugin_addIndicators", e.remove), t.on("destroy.plugin_addIndicators", t.removeIndicators), t.controller() && e.add()
                }
                return t
            }, t.removeIndicators = function() {
                return e && (e.remove(), this.off("*.plugin_addIndicators"), e = void 0), t
            }
        }), e.Controller.addOption("addIndicators", !1), e.Controller.extend(function() {
            var i = this,
                n = i.info(),
                o = n.container,
                s = n.isDocument,
                l = n.vertical,
                c = {
                    groups: []
                },
                d = function() {
                    i._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + t + ")", "->"), i._log.apply(this, arguments))
                };
            i._indicators && d(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."), this._indicators = c;
            var u = function() {
                    c.updateBoundsPositions()
                },
                h = function() {
                    c.updateTriggerGroupPositions()
                };
            return o.addEventListener("resize", h), s || (window.addEventListener("resize", h), window.addEventListener("scroll", h)), o.addEventListener("resize", u), o.addEventListener("scroll", u), this._indicators.updateBoundsPositions = function(e) {
                for (var t, i, n, s = e ? [a.extend({}, e.triggerGroup, {
                        members: [e]
                    })] : c.groups, d = s.length, u = {}, h = l ? "left" : "top", p = l ? "width" : "height", f = l ? a.get.scrollLeft(o) + a.get.width(o) - r : a.get.scrollTop(o) + a.get.height(o) - r; d--;)
                    for (n = s[d], t = n.members.length, i = a.get[p](n.element.firstChild); t--;) u[h] = f - i, a.css(n.members[t].bounds, u)
            }, this._indicators.updateTriggerGroupPositions = function(e) {
                for (var t, n, d, u, h, p = e ? [e] : c.groups, f = p.length, m = s ? document.body : o, g = s ? {
                        top: 0,
                        left: 0
                    } : a.get.offset(m, !0), v = l ? a.get.width(o) - r : a.get.height(o) - r, y = l ? "width" : "height", b = l ? "Y" : "X"; f--;) t = p[f], n = t.element, d = t.triggerHook * i.info("size"), u = a.get[y](n.firstChild.firstChild), h = d > u ? "translate" + b + "(-100%)" : "", a.css(n, {
                    top: g.top + (l ? d : v - t.members[0].options.indent),
                    left: g.left + (l ? v - t.members[0].options.indent : d)
                }), a.css(n.firstChild.firstChild, {
                    "-ms-transform": h,
                    "-webkit-transform": h,
                    transform: h
                })
            }, this._indicators.updateTriggerGroupLabel = function(e) {
                var t = "trigger" + (e.members.length > 1 ? "" : " " + e.members[0].options.name),
                    i = e.element.firstChild.firstChild,
                    n = i.textContent !== t;
                n && (i.textContent = t, l && c.updateBoundsPositions())
            }, this.addScene = function(t) {
                this._options.addIndicators && t instanceof e.Scene && t.controller() === i && t.addIndicators(), this.$super.addScene.apply(this, arguments)
            }, this.destroy = function() {
                o.removeEventListener("resize", h), s || (window.removeEventListener("resize", h), window.removeEventListener("scroll", h)), o.removeEventListener("resize", u), o.removeEventListener("scroll", u), this.$super.destroy.apply(this, arguments)
            }, i
        });
        var c = function(e, i) {
                var n, o, s = this,
                    r = d.bounds(),
                    c = d.start(i.colorStart),
                    u = d.end(i.colorEnd),
                    h = i.parent && a.get.elements(i.parent)[0],
                    p = function() {
                        e._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + t + ")", "->"), e._log.apply(this, arguments))
                    };
                i.name = i.name || l, c.firstChild.textContent += " " + i.name, u.textContent += " " + i.name, r.appendChild(c), r.appendChild(u), s.options = i, s.bounds = r, s.triggerGroup = void 0, this.add = function() {
                    o = e.controller(), n = o.info("vertical");
                    var t = o.info("isDocument");
                    h || (h = t ? document.body : o.info("container")), t || "static" !== a.css(h, "position") || a.css(h, {
                        position: "relative"
                    }), e.on("change.plugin_addIndicators", m), e.on("shift.plugin_addIndicators", f), _(), y(), setTimeout(function() {
                        o._indicators.updateBoundsPositions(s)
                    }, 0), p(3, "added indicators")
                }, this.remove = function() {
                    if (s.triggerGroup) {
                        if (e.off("change.plugin_addIndicators", m), e.off("shift.plugin_addIndicators", f), s.triggerGroup.members.length > 1) {
                            var t = s.triggerGroup;
                            t.members.splice(t.members.indexOf(s), 1), o._indicators.updateTriggerGroupLabel(t), o._indicators.updateTriggerGroupPositions(t), s.triggerGroup = void 0
                        } else x();
                        v(), p(3, "removed indicators")
                    }
                };
                var f = function() {
                        y()
                    },
                    m = function(e) {
                        "triggerHook" === e.what && _()
                    },
                    g = function() {
                        var e = o.info("vertical");
                        a.css(c.firstChild, {
                            "border-bottom-width": e ? 1 : 0,
                            "border-right-width": e ? 0 : 1,
                            bottom: e ? -1 : i.indent,
                            right: e ? i.indent : -1,
                            padding: e ? "0 8px" : "2px 4px"
                        }), a.css(u, {
                            "border-top-width": e ? 1 : 0,
                            "border-left-width": e ? 0 : 1,
                            top: e ? "100%" : "",
                            right: e ? i.indent : "",
                            bottom: e ? "" : i.indent,
                            left: e ? "" : "100%",
                            padding: e ? "0 8px" : "2px 4px"
                        }), h.appendChild(r)
                    },
                    v = function() {
                        r.parentNode.removeChild(r)
                    },
                    y = function() {
                        r.parentNode !== h && g();
                        var t = {};
                        t[n ? "top" : "left"] = e.triggerPosition(), t[n ? "height" : "width"] = e.duration(), a.css(r, t), a.css(u, {
                            display: e.duration() > 0 ? "" : "none"
                        })
                    },
                    b = function() {
                        var t = d.trigger(i.colorTrigger),
                            r = {};
                        r[n ? "right" : "bottom"] = 0, r[n ? "border-top-width" : "border-left-width"] = 1, a.css(t.firstChild, r), a.css(t.firstChild.firstChild, {
                            padding: n ? "0 8px 3px 8px" : "3px 4px"
                        }), document.body.appendChild(t);
                        var l = {
                            triggerHook: e.triggerHook(),
                            element: t,
                            members: [s]
                        };
                        o._indicators.groups.push(l), s.triggerGroup = l, o._indicators.updateTriggerGroupLabel(l), o._indicators.updateTriggerGroupPositions(l)
                    },
                    x = function() {
                        o._indicators.groups.splice(o._indicators.groups.indexOf(s.triggerGroup), 1), s.triggerGroup.element.parentNode.removeChild(s.triggerGroup.element), s.triggerGroup = void 0
                    },
                    _ = function() {
                        var t = e.triggerHook(),
                            i = 1e-4;
                        if (!(s.triggerGroup && Math.abs(s.triggerGroup.triggerHook - t) < i)) {
                            for (var n, r = o._indicators.groups, a = r.length; a--;)
                                if (n = r[a], Math.abs(n.triggerHook - t) < i) return s.triggerGroup && (1 === s.triggerGroup.members.length ? x() : (s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1), o._indicators.updateTriggerGroupLabel(s.triggerGroup), o._indicators.updateTriggerGroupPositions(s.triggerGroup))), n.members.push(s), s.triggerGroup = n, void o._indicators.updateTriggerGroupLabel(n);
                            if (s.triggerGroup) {
                                if (1 === s.triggerGroup.members.length) return s.triggerGroup.triggerHook = t, void o._indicators.updateTriggerGroupPositions(s.triggerGroup);
                                s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1), o._indicators.updateTriggerGroupLabel(s.triggerGroup), o._indicators.updateTriggerGroupPositions(s.triggerGroup), s.triggerGroup = void 0
                            }
                            b()
                        }
                    }
            },
            d = {
                start: function(e) {
                    var t = document.createElement("div");
                    t.textContent = "start", a.css(t, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: e,
                        "border-color": e
                    });
                    var i = document.createElement("div");
                    return a.css(i, {
                        position: "absolute",
                        overflow: "visible",
                        width: 0,
                        height: 0
                    }), i.appendChild(t), i
                },
                end: function(e) {
                    var t = document.createElement("div");
                    return t.textContent = "end", a.css(t, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: e,
                        "border-color": e
                    }), t
                },
                bounds: function() {
                    var e = document.createElement("div");
                    return a.css(e, {
                        position: "absolute",
                        overflow: "visible",
                        "white-space": "nowrap",
                        "pointer-events": "none",
                        "font-size": o
                    }), e.style.zIndex = s, e
                },
                trigger: function(e) {
                    var t = document.createElement("div");
                    t.textContent = "trigger", a.css(t, {
                        position: "relative"
                    });
                    var i = document.createElement("div");
                    a.css(i, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: e,
                        "border-color": e
                    }), i.appendChild(t);
                    var n = document.createElement("div");
                    return a.css(n, {
                        position: "fixed",
                        overflow: "visible",
                        "white-space": "nowrap",
                        "pointer-events": "none",
                        "font-size": o
                    }), n.style.zIndex = s, n.appendChild(i), n
                }
            }
    }),
    function() {
        function e() {}

        function t(e, t) {
            for (var i = e.length; i--;)
                if (e[i].listener === t) return i;
            return -1
        }

        function i(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }
        var n = e.prototype,
            o = this,
            s = o.EventEmitter;
        n.getListeners = function(e) {
            var t, i, n = this._getEvents();
            if ("object" == typeof e) {
                t = {};
                for (i in n) n.hasOwnProperty(i) && e.test(i) && (t[i] = n[i])
            } else t = n[e] || (n[e] = []);
            return t
        }, n.flattenListeners = function(e) {
            var t, i = [];
            for (t = 0; e.length > t; t += 1) i.push(e[t].listener);
            return i
        }, n.getListenersAsObject = function(e) {
            var t, i = this.getListeners(e);
            return i instanceof Array && (t = {}, t[e] = i), t || i
        }, n.addListener = function(e, i) {
            var n, o = this.getListenersAsObject(e),
                s = "object" == typeof i;
            for (n in o) o.hasOwnProperty(n) && -1 === t(o[n], i) && o[n].push(s ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(e) {
            return this.getListeners(e), this
        }, n.defineEvents = function(e) {
            for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
            return this
        }, n.removeListener = function(e, i) {
            var n, o, s = this.getListenersAsObject(e);
            for (o in s) s.hasOwnProperty(o) && (n = t(s[o], i), -1 !== n && s[o].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, n.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, n.manipulateListeners = function(e, t, i) {
            var n, o, s = e ? this.removeListener : this.addListener,
                r = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (n = i.length; n--;) s.call(this, t, i[n]);
            else
                for (n in t) t.hasOwnProperty(n) && (o = t[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
            return this
        }, n.removeEvent = function(e) {
            var t, i = typeof e,
                n = this._getEvents();
            if ("string" === i) delete n[e];
            else if ("object" === i)
                for (t in n) n.hasOwnProperty(t) && e.test(t) && delete n[t];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(e, t) {
            var i, n, o, s, r = this.getListenersAsObject(e);
            for (o in r)
                if (r.hasOwnProperty(o))
                    for (n = r[o].length; n--;) i = r[o][n], i.once === !0 && this.removeListener(e, i.listener), s = i.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, n.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, n._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, e.noConflict = function() {
            return o.EventEmitter = s, e
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
    }.call(this),
    function(e) {
        function t(t) {
            var i = e.event;
            return i.target = i.target || i.srcElement || t, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(e, t, i) {
            e.addEventListener(t, i, !1)
        } : i.attachEvent && (n = function(e, i, n) {
            e[i + n] = n.handleEvent ? function() {
                var i = t(e);
                n.handleEvent.call(n, i)
            } : function() {
                var i = t(e);
                n.call(e, i)
            }, e.attachEvent("on" + i, e[i + n])
        });
        var o = function() {};
        i.removeEventListener ? o = function(e, t, i) {
            e.removeEventListener(t, i, !1)
        } : i.detachEvent && (o = function(e, t, i) {
            e.detachEvent("on" + t, e[t + i]);
            try {
                delete e[t + i]
            } catch (n) {
                e[t + i] = void 0
            }
        });
        var s = {
            bind: n,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return t(e, i, n)
        }) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(this, function(e, t, i) {
        function n(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }

        function o(e) {
            return "[object Array]" === h.call(e)
        }

        function s(e) {
            var t = [];
            if (o(e)) t = e;
            else if ("number" == typeof e.length)
                for (var i = 0, n = e.length; n > i; i++) t.push(e[i]);
            else t.push(e);
            return t
        }

        function r(e, t, i) {
            if (!(this instanceof r)) return new r(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = n({}, this.options), "function" == typeof t ? i = t : n(this.options, t), i && this.on("always", i), this.getImages(), c && (this.jqDeferred = new c.Deferred);
            var o = this;
            setTimeout(function() {
                o.check()
            })
        }

        function a(e) {
            this.img = e
        }

        function l(e) {
            this.src = e, p[e] = this
        }
        var c = e.jQuery,
            d = e.console,
            u = void 0 !== d,
            h = Object.prototype.toString;
        r.prototype = new t, r.prototype.options = {}, r.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var i = this.elements[e];
                "IMG" === i.nodeName && this.addImage(i);
                for (var n = i.querySelectorAll("img"), o = 0, s = n.length; s > o; o++) {
                    var r = n[o];
                    this.addImage(r)
                }
            }
        }, r.prototype.addImage = function(e) {
            var t = new a(e);
            this.images.push(t)
        }, r.prototype.check = function() {
            function e(e, o) {
                return t.options.debug && u && d.log("confirm", e, o), t.progress(e), i++, i === n && t.complete(), !0
            }
            var t = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var o = 0; n > o; o++) {
                var s = this.images[o];
                s.on("confirm", e), s.check()
            }
        }, r.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, r.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var i = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[i](t)
                }
            })
        }, c && (c.fn.imagesLoaded = function(e, t) {
            var i = new r(this, e, t);
            return i.jqDeferred.promise(c(this))
        }), a.prototype = new t, a.prototype.check = function() {
            var e = p[this.img.src] || new l(this.img.src);
            if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var t = this;
            e.on("confirm", function(e, i) {
                return t.confirm(e.isLoaded, i), !0
            }), e.check()
        }, a.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var p = {};
        return l.prototype = new t, l.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                i.bind(e, "load", this), i.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, l.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, l.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, l.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, l.prototype.unbindProxyEvents = function(e) {
            i.unbind(e.target, "load", this), i.unbind(e.target, "error", this)
        }, r
    }),
    function(e) {
        var t = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            slideZIndex: 50,
            wrapperClass: "bx-wrapper",
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            ariaLive: !0,
            ariaHidden: !0,
            keyboardEnabled: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            stopAutoOnClick: !1,
            autoHover: !1,
            autoDelay: 0,
            autoSlideForOnePage: !1,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            shrinkItems: !1,
            onSliderLoad: function() {
                return !0
            },
            onSlideBefore: function() {
                return !0
            },
            onSlideAfter: function() {
                return !0
            },
            onSlideNext: function() {
                return !0
            },
            onSlidePrev: function() {
                return !0
            },
            onSliderResize: function() {
                return !0
            }
        };
        e.fn.bxSlider = function(n) {
            if (0 === this.length) return this;
            if (this.length > 1) return this.each(function() {
                e(this).bxSlider(n)
            }), this;
            var o = {},
                s = this,
                r = e(window).width(),
                a = e(window).height();
            if (!e(s).data("bxSlider")) {
                var l = function() {
                        e(s).data("bxSlider") || (o.settings = e.extend({}, t, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = s.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                            index: o.settings.startSlide
                        }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" === o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" !== o.settings.mode && function() {
                            for (var e = document.createElement("div"), t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < t.length; i++)
                                if (void 0 !== e.style[t[i]]) return o.cssPrefix = t[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                            return !1
                        }(), "vertical" === o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), s.data("origStyle", s.attr("style")), s.children(o.settings.slideSelector).each(function() {
                            e(this).data("origStyle", e(this).attr("style"))
                        }), c())
                    },
                    c = function() {
                        var t = o.children.eq(o.settings.startSlide);
                        s.wrap('<div class="' + o.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), o.viewport = s.parent(), o.settings.ariaLive && !o.settings.ticker && o.viewport.attr("aria-live", "polite"), o.loader = e('<div class="bx-loading" />'), o.viewport.prepend(o.loader), s.css({
                            width: "horizontal" === o.settings.mode ? 1e3 * o.children.length + 215 + "%" : "auto",
                            position: "relative"
                        }), o.usingCSS && o.settings.easing ? s.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), o.viewport.css({
                            width: "100%",
                            overflow: "hidden",
                            position: "relative"
                        }), o.viewport.parent().css({
                            maxWidth: p()
                        }), o.children.css({
                            "float": "horizontal" === o.settings.mode ? "left" : "none",
                            listStyle: "none",
                            position: "relative"
                        }), o.children.css("width", f()), "horizontal" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" === o.settings.mode && (o.children.css({
                            position: "absolute",
                            zIndex: 0,
                            display: "none"
                        }), o.children.eq(o.settings.startSlide).css({
                            zIndex: o.settings.slideZIndex,
                            display: "block"
                        })), o.controls.el = e('<div class="bx-controls" />'), o.settings.captions && S(), o.active.last = o.settings.startSlide === g() - 1, o.settings.video && s.fitVids(), ("all" === o.settings.preloadImages || o.settings.ticker) && (t = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.controls && w(), o.settings.auto && o.settings.autoControls && T(), o.settings.pager && _(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), d(t, u)
                    },
                    d = function(t, i) {
                        var n = t.find('img:not([src=""]), iframe').length,
                            o = 0;
                        return 0 === n ? void i() : void t.find('img:not([src=""]), iframe').each(function() {
                            e(this).one("load error", function() {
                                ++o === n && i()
                            }).each(function() {
                                this.complete && e(this).trigger("load")
                            })
                        })
                    },
                    u = function() {
                        if (o.settings.infiniteLoop && "fade" !== o.settings.mode && !o.settings.ticker) {
                            var t = "vertical" === o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                                i = o.children.slice(0, t).clone(!0).addClass("bx-clone"),
                                n = o.children.slice(-t).clone(!0).addClass("bx-clone");
                            o.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), s.append(i).prepend(n)
                        }
                        o.loader.remove(), y(), "vertical" === o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(h()), s.redrawSlider(), o.settings.onSliderLoad.call(s, o.active.index), o.initialized = !0, o.settings.responsive && e(window).bind("resize", q), o.settings.auto && o.settings.autoStart && (g() > 1 || o.settings.autoSlideForOnePage) && L(), o.settings.ticker && R(), o.settings.pager && A(o.settings.startSlide), o.settings.controls && O(), o.settings.touchEnabled && !o.settings.ticker && N(), o.settings.keyboardEnabled && !o.settings.ticker && e(document).keydown(z)
                    },
                    h = function() {
                        var t = 0,
                            n = e();
                        if ("vertical" === o.settings.mode || o.settings.adaptiveHeight)
                            if (o.carousel) {
                                var s = 1 === o.settings.moveSlides ? o.active.index : o.active.index * v();
                                for (n = o.children.eq(s), i = 1; i <= o.settings.maxSlides - 1; i++) n = s + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(s + i))
                            } else n = o.children.eq(o.active.index);
                        else n = o.children;
                        return "vertical" === o.settings.mode ? (n.each(function(i) {
                            t += e(this).outerHeight()
                        }), o.settings.slideMargin > 0 && (t += o.settings.slideMargin * (o.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function() {
                            return e(this).outerHeight(!1)
                        }).get()), "border-box" === o.viewport.css("box-sizing") ? t += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom")) + parseFloat(o.viewport.css("border-top-width")) + parseFloat(o.viewport.css("border-bottom-width")) : "padding-box" === o.viewport.css("box-sizing") && (t += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom"))), t
                    },
                    p = function() {
                        var e = "100%";
                        return o.settings.slideWidth > 0 && (e = "horizontal" === o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), e
                    },
                    f = function() {
                        var e = o.settings.slideWidth,
                            t = o.viewport.width();
                        if (0 === o.settings.slideWidth || o.settings.slideWidth > t && !o.carousel || "vertical" === o.settings.mode) e = t;
                        else if (o.settings.maxSlides > 1 && "horizontal" === o.settings.mode) {
                            if (t > o.maxThreshold) return e;
                            t < o.minThreshold ? e = (t - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides : o.settings.shrinkItems && (e = Math.floor((t + o.settings.slideMargin) / Math.ceil((t + o.settings.slideMargin) / (e + o.settings.slideMargin)) - o.settings.slideMargin))
                        }
                        return e
                    },
                    m = function() {
                        var e = 1,
                            t = null;
                        return "horizontal" === o.settings.mode && o.settings.slideWidth > 0 ? o.viewport.width() < o.minThreshold ? e = o.settings.minSlides : o.viewport.width() > o.maxThreshold ? e = o.settings.maxSlides : (t = o.children.first().width() + o.settings.slideMargin, e = Math.floor((o.viewport.width() + o.settings.slideMargin) / t)) : "vertical" === o.settings.mode && (e = o.settings.minSlides), e
                    },
                    g = function() {
                        var e = 0,
                            t = 0,
                            i = 0;
                        if (o.settings.moveSlides > 0)
                            if (o.settings.infiniteLoop) e = Math.ceil(o.children.length / v());
                            else
                                for (; t < o.children.length;) ++e, t = i + m(), i += o.settings.moveSlides <= m() ? o.settings.moveSlides : m();
                        else e = Math.ceil(o.children.length / m());
                        return e
                    },
                    v = function() {
                        return o.settings.moveSlides > 0 && o.settings.moveSlides <= m() ? o.settings.moveSlides : m()
                    },
                    y = function() {
                        var e, t, i;
                        o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop ? "horizontal" === o.settings.mode ? (t = o.children.last(), e = t.position(), b(-(e.left - (o.viewport.width() - t.outerWidth())), "reset", 0)) : "vertical" === o.settings.mode && (i = o.children.length - o.settings.minSlides, e = o.children.eq(i).position(), b(-e.top, "reset", 0)) : (e = o.children.eq(o.active.index * v()).position(), o.active.index === g() - 1 && (o.active.last = !0), void 0 !== e && ("horizontal" === o.settings.mode ? b(-e.left, "reset", 0) : "vertical" === o.settings.mode && b(-e.top, "reset", 0)))
                    },
                    b = function(t, i, n, r) {
                        var a, l;
                        o.usingCSS ? (l = "vertical" === o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)", s.css("-" + o.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (s.css(o.animProp, l), 0 !== n ? s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(t) {
                            e(t.target).is(s) && (s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), M())
                        }) : M()) : "reset" === i ? s.css(o.animProp, l) : "ticker" === i && (s.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), s.css(o.animProp, l), 0 !== n ? s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(t) {
                            e(t.target).is(s) && (s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(r.resetValue, "reset", 0), D())
                        }) : (b(r.resetValue, "reset", 0), D()))) : (a = {}, a[o.animProp] = t, "slide" === i ? s.animate(a, n, o.settings.easing, function() {
                            M()
                        }) : "reset" === i ? s.css(o.animProp, t) : "ticker" === i && s.animate(a, n, "linear", function() {
                            b(r.resetValue, "reset", 0), D()
                        }))
                    },
                    x = function() {
                        for (var t = "", i = "", n = g(), s = 0; s < n; s++) i = "", o.settings.buildPager && e.isFunction(o.settings.buildPager) || o.settings.pagerCustom ? (i = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (i = s + 1, o.pagerEl.addClass("bx-default-pager")), t += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + i + "</a></div>";
                        o.pagerEl.html(t)
                    },
                    _ = function() {
                        o.settings.pagerCustom ? o.pagerEl = e(o.settings.pagerCustom) : (o.pagerEl = e('<div class="bx-pager" />'), o.settings.pagerSelector ? e(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), x()), o.pagerEl.on("click touchend", "a", E)
                    },
                    w = function() {
                        o.controls.next = e('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = e('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click touchend", C), o.controls.prev.bind("click touchend", k), o.settings.nextSelector && e(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && e(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = e('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
                    },
                    T = function() {
                        o.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = e('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", $), o.controls.autoEl.on("click", ".bx-stop", P), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? e(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), F(o.settings.autoStart ? "stop" : "start")
                    },
                    S = function() {
                        o.children.each(function(t) {
                            var i = e(this).find("img:first").attr("title");
                            void 0 !== i && ("" + i).length && e(this).append('<div class="bx-caption"><span>' + i + "</span></div>")
                        })
                    },
                    C = function(e) {
                        e.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), s.goToNextSlide())
                    },
                    k = function(e) {
                        e.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(),
                            s.goToPrevSlide())
                    },
                    $ = function(e) {
                        s.startAuto(), e.preventDefault()
                    },
                    P = function(e) {
                        s.stopAuto(), e.preventDefault()
                    },
                    E = function(t) {
                        var i, n;
                        t.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), i = e(t.currentTarget), void 0 !== i.attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index")), n !== o.active.index && s.goToSlide(n)))
                    },
                    A = function(t) {
                        var i = o.children.length;
                        return "short" === o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(t + 1 + o.settings.pagerShortSeparator + i)) : (o.pagerEl.find("a").removeClass("active"), void o.pagerEl.each(function(i, n) {
                            e(n).find("a").eq(t).addClass("active")
                        }))
                    },
                    M = function() {
                        if (o.settings.infiniteLoop) {
                            var e = "";
                            0 === o.active.index ? e = o.children.eq(0).position() : o.active.index === g() - 1 && o.carousel ? e = o.children.eq((g() - 1) * v()).position() : o.active.index === o.children.length - 1 && (e = o.children.eq(o.children.length - 1).position()), e && ("horizontal" === o.settings.mode ? b(-e.left, "reset", 0) : "vertical" === o.settings.mode && b(-e.top, "reset", 0))
                        }
                        o.working = !1, o.settings.onSlideAfter.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index)
                    },
                    F = function(e) {
                        o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[e]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
                    },
                    O = function() {
                        1 === g() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 === o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index === g() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
                    },
                    L = function() {
                        if (o.settings.autoDelay > 0) {
                            setTimeout(s.startAuto, o.settings.autoDelay)
                        } else s.startAuto(), e(window).focus(function() {
                            s.startAuto()
                        }).blur(function() {
                            s.stopAuto()
                        });
                        o.settings.autoHover && s.hover(function() {
                            o.interval && (s.stopAuto(!0), o.autoPaused = !0)
                        }, function() {
                            o.autoPaused && (s.startAuto(!0), o.autoPaused = null)
                        })
                    },
                    R = function() {
                        var t, i, n, r, a, l, c, d, u = 0;
                        "next" === o.settings.autoDirection ? s.append(o.children.clone().addClass("bx-clone")) : (s.prepend(o.children.clone().addClass("bx-clone")), t = o.children.first().position(), u = "horizontal" === o.settings.mode ? -t.left : -t.top), b(u, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && (o.usingCSS ? (r = "horizontal" === o.settings.mode ? 4 : 5, o.viewport.hover(function() {
                            i = s.css("-" + o.cssPrefix + "-transform"), n = parseFloat(i.split(",")[r]), b(n, "reset", 0)
                        }, function() {
                            d = 0, o.children.each(function(t) {
                                d += "horizontal" === o.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                            }), a = o.settings.speed / d, l = "horizontal" === o.settings.mode ? "left" : "top", c = a * (d - Math.abs(parseInt(n))), D(c)
                        })) : o.viewport.hover(function() {
                            s.stop()
                        }, function() {
                            d = 0, o.children.each(function(t) {
                                d += "horizontal" === o.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                            }), a = o.settings.speed / d, l = "horizontal" === o.settings.mode ? "left" : "top", c = a * (d - Math.abs(parseInt(s.css(l)))), D(c)
                        })), D()
                    },
                    D = function(e) {
                        var t, i, n, r = e ? e : o.settings.speed,
                            a = {
                                left: 0,
                                top: 0
                            },
                            l = {
                                left: 0,
                                top: 0
                            };
                        "next" === o.settings.autoDirection ? a = s.find(".bx-clone").first().position() : l = o.children.first().position(), t = "horizontal" === o.settings.mode ? -a.left : -a.top, i = "horizontal" === o.settings.mode ? -l.left : -l.top, n = {
                            resetValue: i
                        }, b(t, "ticker", r, n)
                    },
                    I = function(t) {
                        var i = e(window),
                            n = {
                                top: i.scrollTop(),
                                left: i.scrollLeft()
                            },
                            o = t.offset();
                        return n.right = n.left + i.width(), n.bottom = n.top + i.height(), o.right = o.left + t.outerWidth(), o.bottom = o.top + t.outerHeight(), !(n.right < o.left || n.left > o.right || n.bottom < o.top || n.top > o.bottom)
                    },
                    z = function(e) {
                        var t = document.activeElement.tagName.toLowerCase(),
                            i = "input|textarea",
                            n = new RegExp(t, ["i"]),
                            o = n.exec(i);
                        if (null == o && I(s)) {
                            if (39 === e.keyCode) return C(e), !1;
                            if (37 === e.keyCode) return k(e), !1
                        }
                    },
                    N = function() {
                        o.touch = {
                            start: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 0
                            }
                        }, o.viewport.bind("touchstart MSPointerDown pointerdown", B), o.viewport.on("click", ".bxslider a", function(e) {
                            o.viewport.hasClass("click-disabled") && (e.preventDefault(), o.viewport.removeClass("click-disabled"))
                        })
                    },
                    B = function(e) {
                        if (o.controls.el.addClass("disabled"), o.working) e.preventDefault(), o.controls.el.removeClass("disabled");
                        else {
                            o.touch.originalPos = s.position();
                            var t = e.originalEvent,
                                i = "undefined" != typeof t.changedTouches ? t.changedTouches : [t];
                            o.touch.start.x = i[0].pageX, o.touch.start.y = i[0].pageY, o.viewport.get(0).setPointerCapture && (o.pointerId = t.pointerId, o.viewport.get(0).setPointerCapture(o.pointerId)), o.viewport.bind("touchmove MSPointerMove pointermove", j), o.viewport.bind("touchend MSPointerUp pointerup", W), o.viewport.bind("MSPointerCancel pointercancel", H)
                        }
                    },
                    H = function(e) {
                        b(o.touch.originalPos.left, "reset", 0), o.controls.el.removeClass("disabled"), o.viewport.unbind("MSPointerCancel pointercancel", H), o.viewport.unbind("touchmove MSPointerMove pointermove", j), o.viewport.unbind("touchend MSPointerUp pointerup", W), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId)
                    },
                    j = function(e) {
                        var t = e.originalEvent,
                            i = "undefined" != typeof t.changedTouches ? t.changedTouches : [t],
                            n = Math.abs(i[0].pageX - o.touch.start.x),
                            s = Math.abs(i[0].pageY - o.touch.start.y),
                            r = 0,
                            a = 0;
                        3 * n > s && o.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * s > n && o.settings.preventDefaultSwipeY && e.preventDefault(), "fade" !== o.settings.mode && o.settings.oneToOneTouch && ("horizontal" === o.settings.mode ? (a = i[0].pageX - o.touch.start.x, r = o.touch.originalPos.left + a) : (a = i[0].pageY - o.touch.start.y, r = o.touch.originalPos.top + a), b(r, "reset", 0))
                    },
                    W = function(e) {
                        o.viewport.unbind("touchmove MSPointerMove pointermove", j), o.controls.el.removeClass("disabled");
                        var t = e.originalEvent,
                            i = "undefined" != typeof t.changedTouches ? t.changedTouches : [t],
                            n = 0,
                            r = 0;
                        o.touch.end.x = i[0].pageX, o.touch.end.y = i[0].pageY, "fade" === o.settings.mode ? (r = Math.abs(o.touch.start.x - o.touch.end.x), r >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? s.goToNextSlide() : s.goToPrevSlide(), s.stopAuto())) : ("horizontal" === o.settings.mode ? (r = o.touch.end.x - o.touch.start.x, n = o.touch.originalPos.left) : (r = o.touch.end.y - o.touch.start.y, n = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 === o.active.index && r > 0 || o.active.last && r < 0) ? b(n, "reset", 200) : Math.abs(r) >= o.settings.swipeThreshold ? (r < 0 ? s.goToNextSlide() : s.goToPrevSlide(), s.stopAuto()) : b(n, "reset", 200)), o.viewport.unbind("touchend MSPointerUp pointerup", W), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId)
                    },
                    q = function(t) {
                        if (o.initialized)
                            if (o.working) window.setTimeout(q, 10);
                            else {
                                var i = e(window).width(),
                                    n = e(window).height();
                                r === i && a === n || (r = i, a = n, s.redrawSlider(), o.settings.onSliderResize.call(s, o.active.index))
                            }
                    },
                    X = function(e) {
                        var t = m();
                        o.settings.ariaHidden && !o.settings.ticker && (o.children.attr("aria-hidden", "true"), o.children.slice(e, e + t).attr("aria-hidden", "false"))
                    },
                    U = function(e) {
                        return e < 0 ? o.settings.infiniteLoop ? g() - 1 : o.active.index : e >= g() ? o.settings.infiniteLoop ? 0 : o.active.index : e
                    };
                return s.goToSlide = function(t, i) {
                    var n, r, a, l, c = !0,
                        d = 0,
                        u = {
                            left: 0,
                            top: 0
                        },
                        p = null;
                    if (o.oldIndex = o.active.index, o.active.index = U(t), !o.working && o.active.index !== o.oldIndex) {
                        if (o.working = !0, c = o.settings.onSlideBefore.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index), "undefined" != typeof c && !c) return o.active.index = o.oldIndex, void(o.working = !1);
                        "next" === i ? o.settings.onSlideNext.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1) : "prev" === i && (o.settings.onSlidePrev.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1)), o.active.last = o.active.index >= g() - 1, (o.settings.pager || o.settings.pagerCustom) && A(o.active.index), o.settings.controls && O(), "fade" === o.settings.mode ? (o.settings.adaptiveHeight && o.viewport.height() !== h() && o.viewport.animate({
                            height: h()
                        }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                            zIndex: 0
                        }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
                            e(this).css("zIndex", o.settings.slideZIndex), M()
                        })) : (o.settings.adaptiveHeight && o.viewport.height() !== h() && o.viewport.animate({
                            height: h()
                        }, o.settings.adaptiveHeightSpeed), !o.settings.infiniteLoop && o.carousel && o.active.last ? "horizontal" === o.settings.mode ? (p = o.children.eq(o.children.length - 1), u = p.position(), d = o.viewport.width() - p.outerWidth()) : (n = o.children.length - o.settings.minSlides, u = o.children.eq(n).position()) : o.carousel && o.active.last && "prev" === i ? (r = 1 === o.settings.moveSlides ? o.settings.maxSlides - v() : (g() - 1) * v() - (o.children.length - o.settings.maxSlides), p = s.children(".bx-clone").eq(r), u = p.position()) : "next" === i && 0 === o.active.index ? (u = s.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1) : t >= 0 && (l = t * parseInt(v()), u = o.children.eq(l).position()), "undefined" != typeof u ? (a = "horizontal" === o.settings.mode ? -(u.left - d) : -u.top, b(a, "slide", o.settings.speed)) : o.working = !1), o.settings.ariaHidden && X(o.active.index * v())
                    }
                }, s.goToNextSlide = function() {
                    if (o.settings.infiniteLoop || !o.active.last) {
                        var e = parseInt(o.active.index) + 1;
                        s.goToSlide(e, "next")
                    }
                }, s.goToPrevSlide = function() {
                    if (o.settings.infiniteLoop || 0 !== o.active.index) {
                        var e = parseInt(o.active.index) - 1;
                        s.goToSlide(e, "prev")
                    }
                }, s.startAuto = function(e) {
                    o.interval || (o.interval = setInterval(function() {
                        "next" === o.settings.autoDirection ? s.goToNextSlide() : s.goToPrevSlide()
                    }, o.settings.pause), o.settings.autoControls && e !== !0 && F("stop"))
                }, s.stopAuto = function(e) {
                    o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && e !== !0 && F("start"))
                }, s.getCurrentSlide = function() {
                    return o.active.index
                }, s.getCurrentSlideElement = function() {
                    return o.children.eq(o.active.index)
                }, s.getSlideElement = function(e) {
                    return o.children.eq(e)
                }, s.getSlideCount = function() {
                    return o.children.length
                }, s.isWorking = function() {
                    return o.working
                }, s.redrawSlider = function() {
                    o.children.add(s.find(".bx-clone")).outerWidth(f()), o.viewport.css("height", h()), o.settings.ticker || y(), o.active.last && (o.active.index = g() - 1), o.active.index >= g() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (x(), A(o.active.index)), o.settings.ariaHidden && X(o.active.index * v())
                }, s.destroySlider = function() {
                    o.initialized && (o.initialized = !1, e(".bx-clone", this).remove(), o.children.each(function() {
                        void 0 !== e(this).data("origStyle") ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style")
                    }), void 0 !== e(this).data("origStyle") ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && !o.settings.pagerCustom && o.pagerEl.remove(), e(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && e(window).unbind("resize", q), o.settings.keyboardEnabled && e(document).unbind("keydown", z), e(this).removeData("bxSlider"))
                }, s.reloadSlider = function(t) {
                    void 0 !== t && (n = t), s.destroySlider(), l(), e(s).data("bxSlider", this)
                }, l(), e(s).data("bxSlider", this), this
            }
        }
    }(jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        function t(e, t) {
            return e.toFixed(t.decimals)
        }
        var i = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, this.dataOptions(), n), this.init()
        };
        i.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: t,
            onUpdate: null,
            onComplete: null
        }, i.prototype.init = function() {
            this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
        }, i.prototype.dataOptions = function() {
            var e = {
                    from: this.$element.data("from"),
                    to: this.$element.data("to"),
                    speed: this.$element.data("speed"),
                    refreshInterval: this.$element.data("refresh-interval"),
                    decimals: this.$element.data("decimals")
                },
                t = Object.keys(e);
            for (var i in t) {
                var n = t[i];
                "undefined" == typeof e[n] && delete e[n]
            }
            return e
        }, i.prototype.update = function() {
            this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
        }, i.prototype.render = function() {
            var e = this.options.formatter.call(this.$element, this.value, this.options);
            this.$element.text(e)
        }, i.prototype.restart = function() {
            this.stop(), this.init(), this.start()
        }, i.prototype.start = function() {
            this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
        }, i.prototype.stop = function() {
            this.interval && clearInterval(this.interval)
        }, i.prototype.toggle = function() {
            this.interval ? this.stop() : this.start()
        }, e.fn.countTo = function(t) {
            return this.each(function() {
                var n = e(this),
                    o = n.data("countTo"),
                    s = !o || "object" == typeof t,
                    r = "object" == typeof t ? t : {},
                    a = "string" == typeof t ? t : "start";
                s && (o && o.stop(), n.data("countTo", o = new i(this, r))), o[a].call(o)
            })
        }
    }), ! function(e, t, i, n) {
        "use strict";

        function o(e) {
            var t = e.currentTarget,
                n = e.data ? e.data.options : {},
                o = n.selector ? i(n.selector) : e.data ? e.data.items : [],
                s = i(t).attr("data-fancybox") || "",
                r = 0,
                a = i.fancybox.getInstance();
            e.preventDefault(), e.stopPropagation(), a && a.current.opts.$orig.is(t) || (s ? (o = o.length ? o.filter('[data-fancybox="' + s + '"]') : i('[data-fancybox="' + s + '"]'), r = o.index(t), r < 0 && (r = 0)) : o = [t], i.fancybox.open(o, n, r))
        }
        if (i) {
            if (i.fn.fancybox) return void i.error("fancyBox already initialized");
            var s = {
                    loop: !1,
                    margin: [44, 0],
                    gutter: 50,
                    keyboard: !0,
                    arrows: !0,
                    infobar: !1,
                    toolbar: !0,
                    buttons: ["slideShow", "fullScreen", "thumbs", "close"],
                    idleTime: 4,
                    smallBtn: "auto",
                    protect: !1,
                    modal: !1,
                    image: {
                        preload: "auto"
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: {
                            scrolling: "auto"
                        }
                    },
                    animationEffect: "zoom",
                    animationDuration: 366,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                    btnTpl: {
                        slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
                        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
                        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
                        smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
                    },
                    parentEl: "body",
                    autoFocus: !0,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: {
                        autoStart: !1
                    },
                    touch: {
                        vertical: !0,
                        momentum: !0
                    },
                    hash: null,
                    media: {},
                    slideShow: {
                        autoStart: !1,
                        speed: 4e3
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0
                    },
                    onInit: i.noop,
                    beforeLoad: i.noop,
                    afterLoad: i.noop,
                    beforeShow: i.noop,
                    afterShow: i.noop,
                    beforeClose: i.noop,
                    afterClose: i.noop,
                    onActivate: i.noop,
                    onDeactivate: i.noop,
                    clickContent: function(e, t) {
                        return "image" === e.type && "zoom"
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        clickContent: function(e, t) {
                            return "image" === e.type && "toggleControls"
                        },
                        clickSlide: function(e, t) {
                            return "image" === e.type ? "toggleControls" : "close"
                        },
                        dblclickContent: function(e, t) {
                            return "image" === e.type && "zoom"
                        },
                        dblclickSlide: function(e, t) {
                            return "image" === e.type && "zoom"
                        }
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails"
                        },
                        de: {
                            CLOSE: "Schliessen",
                            NEXT: "Weiter",
                            PREV: "Zurück",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder"
                        }
                    }
                },
                r = i(e),
                a = i(t),
                l = 0,
                c = function(e) {
                    return e && e.hasOwnProperty && e instanceof i
                },
                d = function() {
                    return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                        return e.setTimeout(t, 1e3 / 60)
                    }
                }(),
                u = function() {
                    var e, i = t.createElement("fakeelement"),
                        o = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (e in o)
                        if (i.style[e] !== n) return o[e]
                }(),
                h = function(e) {
                    return e && e.length && e[0].offsetHeight
                },
                p = function(e, n, o) {
                    var r = this;
                    r.opts = i.extend(!0, {
                        index: o
                    }, s, n || {}), n && i.isArray(n.buttons) && (r.opts.buttons = n.buttons), r.id = r.opts.id || ++l, r.group = [], r.currIndex = parseInt(r.opts.index, 10) || 0, r.prevIndex = null, r.prevPos = null, r.currPos = 0, r.firstRun = null, r.createGroup(e), r.group.length && (r.$lastFocus = i(t.activeElement).blur(), r.slides = {}, r.init(e))
                };
            i.extend(p.prototype, {
                init: function() {
                    var e, t, n, o = this,
                        s = o.group[o.currIndex].opts;
                    o.scrollTop = a.scrollTop(), o.scrollLeft = a.scrollLeft(), i.fancybox.getInstance() || i.fancybox.isMobile || "hidden" === i("body").css("overflow") || (e = i("body").width(), i("html").addClass("fancybox-enabled"), e = i("body").width() - e, e > 1 && i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + e + "px; }</style>")), n = "", i.each(s.buttons, function(e, t) {
                        n += s.btnTpl[t] || ""
                    }), t = i(o.translate(o, s.baseTpl.replace("{{BUTTONS}}", n))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + o.id).addClass(s.baseClass).data("FancyBox", o).prependTo(s.parentEl), o.$refs = {
                        container: t
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function(e) {
                        o.$refs[e] = t.find(".fancybox-" + e)
                    }), (!s.arrows || o.group.length < 2) && t.find(".fancybox-navigation").remove(), s.infobar || o.$refs.infobar.remove(), s.toolbar || o.$refs.toolbar.remove(), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
                },
                translate: function(e, t) {
                    var i = e.opts.i18n[e.opts.lang];
                    return t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
                        var o = i[t];
                        return o === n ? e : o
                    })
                },
                createGroup: function(e) {
                    var t = this,
                        o = i.makeArray(e);
                    i.each(o, function(e, o) {
                        var s, r, a, l, c = {},
                            d = {},
                            u = [];
                        i.isPlainObject(o) ? (c = o, d = o.opts || o) : "object" === i.type(o) && i(o).length ? (s = i(o), u = s.data(), d = "options" in u ? u.options : {}, d = "object" === i.type(d) ? d : {}, c.src = "src" in u ? u.src : d.src || s.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function(e) {
                            e in u && (d[e] = u[e])
                        }), "srcset" in u && (d.image = {
                            srcset: u.srcset
                        }), d.$orig = s, c.type || c.src || (c.type = "inline", c.src = o)) : c = {
                            type: "html",
                            src: o + ""
                        }, c.opts = i.extend(!0, {}, t.opts, d), i.fancybox.isMobile && (c.opts = i.extend(!0, {}, c.opts, c.opts.mobile)), r = c.type || c.opts.type, a = c.src || "", !r && a && (a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? r = "pdf" : "#" === a.charAt(0) && (r = "inline")), c.type = r, c.index = t.group.length, c.opts.$orig && !c.opts.$orig.length && delete c.opts.$orig, !c.opts.$thumb && c.opts.$orig && (c.opts.$thumb = c.opts.$orig.find("img:first")), c.opts.$thumb && !c.opts.$thumb.length && delete c.opts.$thumb, "function" === i.type(c.opts.caption) ? c.opts.caption = c.opts.caption.apply(o, [t, c]) : "caption" in u && (c.opts.caption = u.caption), c.opts.caption = c.opts.caption === n ? "" : c.opts.caption + "", "ajax" === r && (l = a.split(/\s+/, 2), l.length > 1 && (c.src = l.shift(), c.opts.filter = l.shift())), "auto" == c.opts.smallBtn && (i.inArray(r, ["html", "inline", "ajax"]) > -1 ? (c.opts.toolbar = !1, c.opts.smallBtn = !0) : c.opts.smallBtn = !1), "pdf" === r && (c.type = "iframe", c.opts.iframe.preload = !1), c.opts.modal && (c.opts = i.extend(!0, c.opts, {
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), t.group.push(c)
                    })
                },
                addEvents: function() {
                    var n = this;
                    n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                        e.stopPropagation(), e.preventDefault(), n.close(e)
                    }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(e) {
                        e.stopPropagation(), e.preventDefault(), n.previous()
                    }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(e) {
                        e.stopPropagation(), e.preventDefault(), n.next()
                    }), r.on("orientationchange.fb resize.fb", function(e) {
                        e && e.originalEvent && "resize" === e.originalEvent.type ? d(function() {
                            n.update()
                        }) : (n.$refs.stage.hide(), setTimeout(function() {
                            n.$refs.stage.show(), n.update()
                        }, 500))
                    }), a.on("focusin.fb", function(e) {
                        var o = i.fancybox ? i.fancybox.getInstance() : null;
                        o.isClosing || !o.current || !o.current.opts.trapFocus || i(e.target).hasClass("fancybox-container") || i(e.target).is(t) || o && "fixed" !== i(e.target).css("position") && !o.$refs.container.has(e.target).length && (e.stopPropagation(), o.focus(), r.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft))
                    }), a.on("keydown.fb", function(e) {
                        var t = n.current,
                            o = e.keyCode || e.which;
                        if (t && t.opts.keyboard && !i(e.target).is("input") && !i(e.target).is("textarea")) return 8 === o || 27 === o ? (e.preventDefault(), void n.close(e)) : 37 === o || 38 === o ? (e.preventDefault(), void n.previous()) : 39 === o || 40 === o ? (e.preventDefault(), void n.next()) : void n.trigger("afterKeydown", e, o)
                    }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                        n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1
                    }), n.idleInterval = e.setInterval(function() {
                        n.idleSecondsCounter++, n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && (n.isIdle = !0, n.idleSecondsCounter = 0, n.hideControls())
                    }, 1e3))
                },
                removeEvents: function() {
                    var t = this;
                    r.off("orientationchange.fb resize.fb"), a.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), t.idleInterval && (e.clearInterval(t.idleInterval), t.idleInterval = null)
                },
                previous: function(e) {
                    return this.jumpTo(this.currPos - 1, e)
                },
                next: function(e) {
                    return this.jumpTo(this.currPos + 1, e)
                },
                jumpTo: function(e, t, o) {
                    var s, r, a, l, c, d, u, p = this,
                        f = p.group.length;
                    if (!(p.isSliding || p.isClosing || p.isAnimating && p.firstRun)) {
                        if (e = parseInt(e, 10), r = p.current ? p.current.opts.loop : p.opts.loop, !r && (e < 0 || e >= f)) return !1;
                        if (s = p.firstRun = null === p.firstRun, !(f < 2 && !s && p.isSliding)) {
                            if (l = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, a = p.createSlide(e), f > 1 && ((r || a.index > 0) && p.createSlide(e - 1), (r || a.index < f - 1) && p.createSlide(e + 1)), p.current = a, p.currIndex = a.index, p.currPos = a.pos, p.trigger("beforeShow", s), p.updateControls(), d = i.fancybox.getTranslate(a.$slide), a.isMoved = (0 !== d.left || 0 !== d.top) && !a.$slide.hasClass("fancybox-animated"), a.forcedDuration = n, i.isNumeric(t) ? a.forcedDuration = t : t = a.opts[s ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), s) return a.opts.animationEffect && t && p.$refs.container.css("transition-duration", t + "ms"), p.$refs.container.removeClass("fancybox-is-hidden"), h(p.$refs.container), p.$refs.container.addClass("fancybox-is-open"), a.$slide.addClass("fancybox-slide--current"), p.loadSlide(a), void p.preload();
                            i.each(p.slides, function(e, t) {
                                i.fancybox.stop(t.$slide)
                            }), a.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), a.isMoved ? (c = Math.round(a.$slide.width()), i.each(p.slides, function(e, n) {
                                var o = n.pos - a.pos;
                                i.fancybox.animate(n.$slide, {
                                    top: 0,
                                    left: o * c + o * n.opts.gutter
                                }, t, function() {
                                    n.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === p.currPos && (a.isMoved = !1, p.complete())
                                })
                            })) : p.$refs.stage.children().removeAttr("style"), a.isLoaded ? p.revealContent(a) : p.loadSlide(a), p.preload(), l.pos !== a.pos && (u = "fancybox-slide--" + (l.pos > a.pos ? "next" : "previous"), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), l.isComplete = !1, t && (a.isMoved || a.opts.transitionEffect) && (a.isMoved ? l.$slide.addClass(u) : (u = "fancybox-animated " + u + " fancybox-fx-" + a.opts.transitionEffect, i.fancybox.animate(l.$slide, u, t, function() {
                                l.$slide.removeClass(u).removeAttr("style")
                            }))))
                        }
                    }
                },
                createSlide: function(e) {
                    var t, n, o = this;
                    return n = e % o.group.length, n = n < 0 ? o.group.length + n : n, !o.slides[e] && o.group[n] && (t = i('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[e] = i.extend(!0, {}, o.group[n], {
                        pos: e,
                        $slide: t,
                        isLoaded: !1
                    }), o.updateSlide(o.slides[e])), o.slides[e]
                },
                scaleToActual: function(e, t, o) {
                    var s, r, a, l, c, d = this,
                        u = d.current,
                        h = u.$content,
                        p = parseInt(u.$slide.width(), 10),
                        f = parseInt(u.$slide.height(), 10),
                        m = u.width,
                        g = u.height;
                    "image" != u.type || u.hasError || !h || d.isAnimating || (i.fancybox.stop(h), d.isAnimating = !0, e = e === n ? .5 * p : e, t = t === n ? .5 * f : t, s = i.fancybox.getTranslate(h), l = m / s.width, c = g / s.height, r = .5 * p - .5 * m, a = .5 * f - .5 * g, m > p && (r = s.left * l - (e * l - e), r > 0 && (r = 0), r < p - m && (r = p - m)), g > f && (a = s.top * c - (t * c - t), a > 0 && (a = 0), a < f - g && (a = f - g)), d.updateCursor(m, g), i.fancybox.animate(h, {
                        top: a,
                        left: r,
                        scaleX: l,
                        scaleY: c
                    }, o || 330, function() {
                        d.isAnimating = !1
                    }), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
                },
                scaleToFit: function(e) {
                    var t, n = this,
                        o = n.current,
                        s = o.$content;
                    "image" != o.type || o.hasError || !s || n.isAnimating || (i.fancybox.stop(s), n.isAnimating = !0, t = n.getFitPos(o), n.updateCursor(t.width, t.height), i.fancybox.animate(s, {
                        top: t.top,
                        left: t.left,
                        scaleX: t.width / s.width(),
                        scaleY: t.height / s.height()
                    }, e || 330, function() {
                        n.isAnimating = !1
                    }))
                },
                getFitPos: function(e) {
                    var t, n, o, s, a, l = this,
                        c = e.$content,
                        d = e.width,
                        u = e.height,
                        h = e.opts.margin;
                    return !(!c || !c.length || !d && !u) && ("number" === i.type(h) && (h = [h, h]), 2 == h.length && (h = [h[0], h[1], h[0], h[1]]), r.width() < 800 && (h = [0, 0, 0, 0]), t = parseInt(l.$refs.stage.width(), 10) - (h[1] + h[3]), n = parseInt(l.$refs.stage.height(), 10) - (h[0] + h[2]), o = Math.min(1, t / d, n / u), s = Math.floor(o * d), a = Math.floor(o * u), {
                        top: Math.floor(.5 * (n - a)) + h[0],
                        left: Math.floor(.5 * (t - s)) + h[3],
                        width: s,
                        height: a
                    })
                },
                update: function() {
                    var e = this;
                    i.each(e.slides, function(t, i) {
                        e.updateSlide(i)
                    })
                },
                updateSlide: function(e) {
                    var t = this,
                        n = e.$content;
                    n && (e.width || e.height) && (i.fancybox.stop(n), i.fancybox.setTranslate(n, t.getFitPos(e)), e.pos === t.currPos && t.updateCursor()), e.$slide.trigger("refresh"), t.trigger("onUpdate", e)
                },
                updateCursor: function(e, t) {
                    var i, o = this,
                        s = o.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                    o.current && !o.isClosing && (o.isZoomable() ? (s.addClass("fancybox-is-zoomable"), i = e !== n && t !== n ? e < o.current.width && t < o.current.height : o.isScaledDown(), i ? s.addClass("fancybox-can-zoomIn") : o.current.opts.touch ? s.addClass("fancybox-can-drag") : s.addClass("fancybox-can-zoomOut")) : o.current.opts.touch && s.addClass("fancybox-can-drag"))
                },
                isZoomable: function() {
                    var e, t = this,
                        n = t.current;
                    if (n && !t.isClosing) return !!("image" === n.type && n.isLoaded && !n.hasError && ("zoom" === n.opts.clickContent || i.isFunction(n.opts.clickContent) && "zoom" === n.opts.clickContent(n)) && (e = t.getFitPos(n), n.width > e.width || n.height > e.height))
                },
                isScaledDown: function() {
                    var e = this,
                        t = e.current,
                        n = t.$content,
                        o = !1;
                    return n && (o = i.fancybox.getTranslate(n), o = o.width < t.width || o.height < t.height), o
                },
                canPan: function() {
                    var e = this,
                        t = e.current,
                        i = t.$content,
                        n = !1;
                    return i && (n = e.getFitPos(t), n = Math.abs(i.width() - n.width) > 1 || Math.abs(i.height() - n.height) > 1), n
                },
                loadSlide: function(e) {
                    var t, n, o, s = this;
                    if (!e.isLoading && !e.isLoaded) {
                        switch (e.isLoading = !0, s.trigger("beforeLoad", e), t = e.type, n = e.$slide, n.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(e.opts.slideClass), t) {
                            case "image":
                                s.setImage(e);
                                break;
                            case "iframe":
                                s.setIframe(e);
                                break;
                            case "html":
                                s.setContent(e, e.src || e.content);
                                break;
                            case "inline":
                                i(e.src).length ? s.setContent(e, i(e.src)) : s.setError(e);
                                break;
                            case "ajax":
                                s.showLoading(e), o = i.ajax(i.extend({}, e.opts.ajax.settings, {
                                    url: e.src,
                                    success: function(t, i) {
                                        "success" === i && s.setContent(e, t)
                                    },
                                    error: function(t, i) {
                                        t && "abort" !== i && s.setError(e)
                                    }
                                })), n.one("onReset", function() {
                                    o.abort()
                                });
                                break;
                            default:
                                s.setError(e)
                        }
                        return !0
                    }
                },
                setImage: function(t) {
                    var n, o, s, r, a = this,
                        l = t.opts.image.srcset;
                    if (l) {
                        s = e.devicePixelRatio || 1, r = e.innerWidth * s, o = l.split(",").map(function(e) {
                            var t = {};
                            return e.trim().split(/\s+/).forEach(function(e, i) {
                                var n = parseInt(e.substring(0, e.length - 1), 10);
                                return 0 === i ? t.url = e : void(n && (t.value = n, t.postfix = e[e.length - 1]))
                            }), t
                        }), o.sort(function(e, t) {
                            return e.value - t.value
                        });
                        for (var c = 0; c < o.length; c++) {
                            var d = o[c];
                            if ("w" === d.postfix && d.value >= r || "x" === d.postfix && d.value >= s) {
                                n = d;
                                break
                            }
                        }!n && o.length && (n = o[o.length - 1]), n && (t.src = n.url, t.width && t.height && "w" == n.postfix && (t.height = t.width / t.height * n.value, t.width = n.value))
                    }
                    t.$content = i('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), t.opts.preload !== !1 && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = i("<img />").one("error", function() {
                        i(this).remove(), t.$ghost = null, a.setBigImage(t)
                    }).one("load", function() {
                        a.afterLoad(t), a.setBigImage(t)
                    }).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : a.setBigImage(t)
                },
                setBigImage: function(e) {
                    var t = this,
                        n = i("<img />");
                    e.$image = n.one("error", function() {
                        t.setError(e)
                    }).one("load", function() {
                        clearTimeout(e.timouts), e.timouts = null, t.isClosing || (e.width = this.naturalWidth, e.height = this.naturalHeight, e.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", e.opts.image.srcset), t.hideLoading(e), e.$ghost ? e.timouts = setTimeout(function() {
                            e.timouts = null, e.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, e.height / 1600))) : t.afterLoad(e))
                    }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), n[0].complete ? n.trigger("load") : n[0].error ? n.trigger("error") : e.timouts = setTimeout(function() {
                        n[0].complete || e.hasError || t.showLoading(e)
                    }, 100)
                },
                setIframe: function(e) {
                    var t, o = this,
                        s = e.opts.iframe,
                        r = e.$slide;
                    e.$content = i('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(r), t = i(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(e.$content), s.preload ? (o.showLoading(e), t.on("load.fb error.fb", function(t) {
                        this.isReady = 1, e.$slide.trigger("refresh"), o.afterLoad(e)
                    }), r.on("refresh.fb", function() {
                        var e, i, o, r, a, l = c.$content;
                        if (1 === t[0].isReady) {
                            try {
                                e = t.contents(), i = e.find("body")
                            } catch (c) {}
                            i && i.length && (s.css.width === n || s.css.height === n) && (o = t[0].contentWindow.document.documentElement.scrollWidth, r = Math.ceil(i.outerWidth(!0) + (l.width() - o)), a = Math.ceil(i.outerHeight(!0)), l.css({
                                width: s.css.width === n ? r + (l.outerWidth() - l.innerWidth()) : s.css.width,
                                height: s.css.height === n ? a + (l.outerHeight() - l.innerHeight()) : s.css.height
                            })), l.removeClass("fancybox-is-hidden")
                        }
                    })) : this.afterLoad(e), t.attr("src", e.src), e.opts.smallBtn === !0 && e.$content.prepend(o.translate(e, e.opts.btnTpl.smallBtn)), r.one("onReset", function() {
                        try {
                            i(this).find("iframe").hide().attr("src", "//about:blank")
                        } catch (e) {}
                        i(this).empty(), e.isLoaded = !1
                    })
                },
                setContent: function(e, t) {
                    var n = this;
                    n.isClosing || (n.hideLoading(e), e.$slide.empty(),
                        c(t) && t.parent().length ? (t.parent(".fancybox-slide--inline").trigger("onReset"), e.$placeholder = i("<div></div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === i.type(t) && (t = i("<div>").append(i.trim(t)).contents(), 3 === t[0].nodeType && (t = i("<div>").html(t))), e.opts.filter && (t = i("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function() {
                            e.$placeholder && (e.$placeholder.after(t.hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (i(this).empty(), e.isLoaded = !1)
                        }), e.$content = i(t).appendTo(e.$slide), e.opts.smallBtn && !e.$smallBtn && (e.$smallBtn = i(n.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), this.afterLoad(e))
                },
                setError: function(e) {
                    e.hasError = !0, e.$slide.removeClass("fancybox-slide--" + e.type), this.setContent(e, this.translate(e, e.opts.errorTpl))
                },
                showLoading: function(e) {
                    var t = this;
                    e = e || t.current, e && !e.$spinner && (e.$spinner = i(t.opts.spinnerTpl).appendTo(e.$slide))
                },
                hideLoading: function(e) {
                    var t = this;
                    e = e || t.current, e && e.$spinner && (e.$spinner.remove(), delete e.$spinner)
                },
                afterLoad: function(e) {
                    var t = this;
                    t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function(e) {
                        return 2 == e.button && e.preventDefault(), !0
                    }), "image" === e.type && i('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.revealContent(e))
                },
                revealContent: function(e) {
                    var t, o, s, r, a, l = this,
                        c = e.$slide,
                        d = !1;
                    return t = e.opts[l.firstRun ? "animationEffect" : "transitionEffect"], s = e.opts[l.firstRun ? "animationDuration" : "transitionDuration"], s = parseInt(e.forcedDuration === n ? s : e.forcedDuration, 10), !e.isMoved && e.pos === l.currPos && s || (t = !1), "zoom" !== t || e.pos === l.currPos && s && "image" === e.type && !e.hasError && (d = l.getThumbPos(e)) || (t = "fade"), "zoom" === t ? (a = l.getFitPos(e), a.scaleX = a.width / d.width, a.scaleY = a.height / d.height, delete a.width, delete a.height, r = e.opts.zoomOpacity, "auto" == r && (r = Math.abs(e.width / e.height - d.width / d.height) > .1), r && (d.opacity = .1, a.opacity = 1), i.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), d), h(e.$content), void i.fancybox.animate(e.$content, a, s, function() {
                        l.complete()
                    })) : (l.updateSlide(e), t ? (i.fancybox.stop(c), o = "fancybox-animated fancybox-slide--" + (e.pos > l.prevPos ? "next" : "previous") + " fancybox-fx-" + t, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(o), e.$content.removeClass("fancybox-is-hidden"), h(c), void i.fancybox.animate(c, "fancybox-slide--current", s, function(t) {
                        c.removeClass(o).removeAttr("style"), e.pos === l.currPos && l.complete()
                    }, !0)) : (h(c), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === l.currPos && l.complete())))
                },
                getThumbPos: function(n) {
                    var o, s = this,
                        r = !1,
                        a = function(t) {
                            for (var n, o = t[0], s = o.getBoundingClientRect(), r = []; null !== o.parentElement;) "hidden" !== i(o.parentElement).css("overflow") && "auto" !== i(o.parentElement).css("overflow") || r.push(o.parentElement.getBoundingClientRect()), o = o.parentElement;
                            return n = r.every(function(e) {
                                var t = Math.min(s.right, e.right) - Math.max(s.left, e.left),
                                    i = Math.min(s.bottom, e.bottom) - Math.max(s.top, e.top);
                                return t > 0 && i > 0
                            }), n && s.bottom > 0 && s.right > 0 && s.left < i(e).width() && s.top < i(e).height()
                        },
                        l = n.opts.$thumb,
                        c = l ? l.offset() : 0;
                    return c && l[0].ownerDocument === t && a(l) && (o = s.$refs.stage.offset(), r = {
                        top: c.top - o.top + parseFloat(l.css("border-top-width") || 0),
                        left: c.left - o.left + parseFloat(l.css("border-left-width") || 0),
                        width: l.width(),
                        height: l.height(),
                        scaleX: 1,
                        scaleY: 1
                    }), r
                },
                complete: function() {
                    var e = this,
                        n = e.current,
                        o = {};
                    n.isMoved || !n.isLoaded || n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), h(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, function(t, n) {
                        n.pos >= e.currPos - 1 && n.pos <= e.currPos + 1 ? o[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.unbind().remove())
                    }), e.slides = o, e.updateCursor(), e.trigger("afterShow"), (i(t.activeElement).is("[disabled]") || n.opts.autoFocus && "image" != n.type && "iframe" !== n.type) && e.focus())
                },
                preload: function() {
                    var e, t, i = this;
                    i.group.length < 2 || (e = i.slides[i.currPos + 1], t = i.slides[i.currPos - 1], e && "image" === e.type && i.loadSlide(e), t && "image" === t.type && i.loadSlide(t))
                },
                focus: function() {
                    var e, t = this.current;
                    this.isClosing || (e = t && t.isComplete ? t.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first") : null, e = e && e.length ? e : this.$refs.container, e.focus())
                },
                activate: function() {
                    var e = this;
                    i(".fancybox-container").each(function() {
                        var t = i(this).data("FancyBox");
                        t && t.uid !== e.uid && !t.isClosing && t.trigger("onDeactivate")
                    }), e.current && (e.$refs.container.index() > 0 && e.$refs.container.prependTo(t.body), e.updateControls()), e.trigger("onActivate"), e.addEvents()
                },
                close: function(e, t) {
                    var n, o, s, r, a, l, c = this,
                        h = c.current,
                        p = function() {
                            c.cleanUp(e)
                        };
                    return !(c.isClosing || (c.isClosing = !0, c.trigger("beforeClose", e) === !1 ? (c.isClosing = !1, d(function() {
                        c.update()
                    }), 1) : (c.removeEvents(), h.timouts && clearTimeout(h.timouts), s = h.$content, n = h.opts.animationEffect, o = i.isNumeric(t) ? t : n ? h.opts.animationDuration : 0, h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), h.$slide.siblings().trigger("onReset").remove(), o && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), c.hideLoading(h), c.hideControls(), c.updateCursor(), "zoom" !== n || e !== !0 && s && o && "image" === h.type && !h.hasError && (l = c.getThumbPos(h)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(s), a = i.fancybox.getTranslate(s), a.width = a.width * a.scaleX, a.height = a.height * a.scaleY, r = h.opts.zoomOpacity, "auto" == r && (r = Math.abs(h.width / h.height - l.width / l.height) > .1), r && (l.opacity = 0), a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, a.width = l.width, a.height = l.height, i.fancybox.setTranslate(h.$content, a), i.fancybox.animate(h.$content, l, o, p), 0) : (n && o ? e === !0 ? setTimeout(p, o) : i.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + n, o, p) : p(), 0))))
                },
                cleanUp: function(e) {
                    var t, n = this;
                    n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", e), n.$lastFocus && n.current.opts.backFocus && n.$lastFocus.focus(), n.current = null, t = i.fancybox.getInstance(), t ? t.activate() : (r.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft), i("html").removeClass("fancybox-enabled"), i("#fancybox-style-noscroll").remove())
                },
                trigger: function(e, t) {
                    var n, o = Array.prototype.slice.call(arguments, 1),
                        s = this,
                        r = t && t.opts ? t : s.current;
                    return r ? o.unshift(r) : r = s, o.unshift(s), i.isFunction(r.opts[e]) && (n = r.opts[e].apply(r, o)), n === !1 ? n : void("afterClose" === e ? a.trigger(e + ".fb", o) : s.$refs.container.trigger(e + ".fb", o))
                },
                updateControls: function(e) {
                    var t = this,
                        n = t.current,
                        o = n.index,
                        s = n.opts,
                        r = s.caption,
                        a = t.$refs.caption;
                    n.$slide.trigger("refresh"), t.$caption = r && r.length ? a.html(r) : null, t.isHiddenControls || t.showControls(), i("[data-fancybox-count]").html(t.group.length), i("[data-fancybox-index]").html(o + 1), i("[data-fancybox-prev]").prop("disabled", !s.loop && o <= 0), i("[data-fancybox-next]").prop("disabled", !s.loop && o >= t.group.length - 1)
                },
                hideControls: function() {
                    this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
                },
                showControls: function() {
                    var e = this,
                        t = e.current ? e.current.opts : e.opts,
                        i = e.$refs.container;
                    e.isHiddenControls = !1, e.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && e.group.length > 1)).toggleClass("fancybox-show-nav", !!(t.arrows && e.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal), e.$caption ? i.addClass("fancybox-show-caption ") : i.removeClass("fancybox-show-caption")
                },
                toggleControls: function() {
                    this.isHiddenControls ? this.showControls() : this.hideControls()
                }
            }), i.fancybox = {
                version: "3.1.24",
                defaults: s,
                getInstance: function(e) {
                    var t = i('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
                        n = Array.prototype.slice.call(arguments, 1);
                    return t instanceof p && ("string" === i.type(e) ? t[e].apply(t, n) : "function" === i.type(e) && e.apply(t, n), t)
                },
                open: function(e, t, i) {
                    return new p(e, t, i)
                },
                close: function(e) {
                    var t = this.getInstance();
                    t && (t.close(), e === !0 && this.close())
                },
                destroy: function() {
                    this.close(!0), a.off("click.fb-start")
                },
                isMobile: t.createTouch !== n && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
                use3d: function() {
                    var i = t.createElement("div");
                    return e.getComputedStyle && e.getComputedStyle(i).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
                }(),
                getTranslate: function(e) {
                    var t;
                    if (!e || !e.length) return !1;
                    if (t = e.eq(0).css("transform"), t && t.indexOf("matrix") !== -1 ? (t = t.split("(")[1], t = t.split(")")[0], t = t.split(",")) : t = [], t.length) t = t.length > 10 ? [t[13], t[12], t[0], t[5]] : [t[5], t[4], t[0], t[3]], t = t.map(parseFloat);
                    else {
                        t = [0, 0, 1, 1];
                        var i = /\.*translate\((.*)px,(.*)px\)/i,
                            n = i.exec(e.eq(0).attr("style"));
                        n && (t[0] = parseFloat(n[2]), t[1] = parseFloat(n[1]))
                    }
                    return {
                        top: t[0],
                        left: t[1],
                        scaleX: t[2],
                        scaleY: t[3],
                        opacity: parseFloat(e.css("opacity")),
                        width: e.width(),
                        height: e.height()
                    }
                },
                setTranslate: function(e, t) {
                    var i = "",
                        o = {};
                    if (e && t) return t.left === n && t.top === n || (i = (t.left === n ? e.position().left : t.left) + "px, " + (t.top === n ? e.position().top : t.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), t.scaleX !== n && t.scaleY !== n && (i = (i.length ? i + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"), i.length && (o.transform = i), t.opacity !== n && (o.opacity = t.opacity), t.width !== n && (o.width = t.width), t.height !== n && (o.height = t.height), e.css(o)
                },
                animate: function(e, t, o, s, r) {
                    var a = u || "transitionend";
                    i.isFunction(o) && (s = o, o = null), i.isPlainObject(t) || e.removeAttr("style"), e.on(a, function(o) {
                        (!o || !o.originalEvent || e.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (e.off(a), i.isPlainObject(t) ? t.scaleX !== n && t.scaleY !== n && (e.css("transition-duration", "0ms"), t.width = Math.round(e.width() * t.scaleX), t.height = Math.round(e.height() * t.scaleY), t.scaleX = 1, t.scaleY = 1, i.fancybox.setTranslate(e, t)) : r !== !0 && e.removeClass(t), i.isFunction(s) && s(o))
                    }), i.isNumeric(o) && e.css("transition-duration", o + "ms"), i.isPlainObject(t) ? i.fancybox.setTranslate(e, t) : e.addClass(t), e.data("timer", setTimeout(function() {
                        e.trigger("transitionend")
                    }, o + 16))
                },
                stop: function(e) {
                    clearTimeout(e.data("timer")), e.off(u)
                }
            }, i.fn.fancybox = function(e) {
                var t;
                return e = e || {}, t = e.selector || !1, t ? i("body").off("click.fb-start", t).on("click.fb-start", t, {
                    options: e
                }, o) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: e
                }, o), this
            }, a.on("click.fb-start", "[data-fancybox]", o)
        }
    }(window, document, window.jQuery),
    function(e) {
        "use strict";
        var t = function(t, i, n) {
                if (t) return n = n || "", "object" === e.type(n) && (n = e.param(n, !0)), e.each(i, function(e, i) {
                    t = t.replace("$" + e, i || "")
                }), n.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + n), t
            },
            i = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1
                    },
                    paramPlace: 8,
                    type: "iframe",
                    url: "//www.youtube.com/embed/$4",
                    thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1,
                        api: 1
                    },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2"
                },
                metacafe: {
                    matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                    type: "iframe",
                    url: "//www.metacafe.com/embed/$1/?ap=1"
                },
                dailymotion: {
                    matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                    params: {
                        additionalInfos: 0,
                        autoStart: 1
                    },
                    type: "iframe",
                    url: "//www.dailymotion.com/embed/video/$1"
                },
                vine: {
                    matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                    type: "iframe",
                    url: "//vine.co/v/$1/embed/simple"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function(e) {
                        return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12]) + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function(e) {
                        return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                    }
                }
            };
        e(document).on("onInit.fb", function(n, o) {
            e.each(o.group, function(n, o) {
                var s, r, a, l, c, d, u, h = o.src || "",
                    p = !1;
                o.type || (s = e.extend(!0, {}, i, o.opts.media), e.each(s, function(i, n) {
                    if (a = h.match(n.matcher), d = {}, u = i, a) {
                        if (p = n.type, n.paramPlace && a[n.paramPlace]) {
                            c = a[n.paramPlace], "?" == c[0] && (c = c.substring(1)), c = c.split("&");
                            for (var s = 0; s < c.length; ++s) {
                                var f = c[s].split("=", 2);
                                2 == f.length && (d[f[0]] = decodeURIComponent(f[1].replace(/\+/g, " ")))
                            }
                        }
                        return l = e.extend(!0, {}, n.params, o.opts[i], d), h = "function" === e.type(n.url) ? n.url.call(this, a, l, o) : t(n.url, a, l), r = "function" === e.type(n.thumb) ? n.thumb.call(this, a, l, o) : t(n.thumb, a), "vimeo" === u && (h = h.replace("&%23", "#")), !1
                    }
                }), p ? (o.src = h, o.type = p, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), "iframe" === p && (e.extend(!0, o.opts, {
                    iframe: {
                        preload: !1,
                        attr: {
                            scrolling: "no"
                        }
                    }
                }), o.contentProvider = u, o.opts.slideClass += " fancybox-slide--" + ("gmap_place" == u || "gmap_search" == u ? "map" : "video"))) : o.type = "image")
            })
        })
    }(window.jQuery),
    function(e, t, i) {
        "use strict";
        var n = function() {
                return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                    return e.setTimeout(t, 1e3 / 60)
                }
            }(),
            o = function() {
                return e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
                    e.clearTimeout(t)
                }
            }(),
            s = function(t) {
                var i = [];
                t = t.originalEvent || t || e.e, t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
                for (var n in t) t[n].pageX ? i.push({
                    x: t[n].pageX,
                    y: t[n].pageY
                }) : t[n].clientX && i.push({
                    x: t[n].clientX,
                    y: t[n].clientY
                });
                return i
            },
            r = function(e, t, i) {
                return t && e ? "x" === i ? e.x - t.x : "y" === i ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
            },
            a = function(e) {
                if (e.is("a,button,input,select,textarea") || i.isFunction(e.get(0).onclick)) return !0;
                for (var t = 0, n = e[0].attributes, o = n.length; t < o; t++)
                    if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return !0;
                return !1
            },
            l = function(t) {
                var i = e.getComputedStyle(t)["overflow-y"],
                    n = e.getComputedStyle(t)["overflow-x"],
                    o = ("scroll" === i || "auto" === i) && t.scrollHeight > t.clientHeight,
                    s = ("scroll" === n || "auto" === n) && t.scrollWidth > t.clientWidth;
                return o || s
            },
            c = function(e) {
                for (var t = !1; !(t = l(e.get(0))) && (e = e.parent(), e.length && !e.hasClass("fancybox-stage") && !e.is("body")););
                return t
            },
            d = function(e) {
                var t = this;
                t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(t, "ontouchstart"))
            };
        d.prototype.destroy = function() {
            this.$container.off(".fb.touch")
        }, d.prototype.ontouchstart = function(n) {
            var o = this,
                l = i(n.target),
                d = o.instance,
                u = d.current,
                h = u.$content,
                p = "touchstart" == n.type;
            if (p && o.$container.off("mousedown.fb.touch"), !u || o.instance.isAnimating || o.instance.isClosing) return n.stopPropagation(), void n.preventDefault();
            if ((!n.originalEvent || 2 != n.originalEvent.button) && l.length && !a(l) && !a(l.parent()) && !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left) && (o.startPoints = s(n), o.startPoints && !(o.startPoints.length > 1 && d.isSliding))) {
                if (o.$target = l, o.$content = h, o.canTap = !0, i(t).off(".fb.touch"), i(t).on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(o, "ontouchend")), i(t).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(o, "ontouchmove")), n.stopPropagation(), !d.current.opts.touch && !d.canPan() || !l.is(o.$stage) && !o.$stage.find(l).length) return void(l.is("img") && n.preventDefault());
                i.fancybox.isMobile && (c(o.$target) || c(o.$target.parent())) || n.preventDefault(), o.canvasWidth = Math.round(u.$slide[0].clientWidth), o.canvasHeight = Math.round(u.$slide[0].clientHeight), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.sliderStartPos = o.sliderLastPos || {
                    top: 0,
                    left: 0
                }, o.contentStartPos = i.fancybox.getTranslate(o.$content), o.contentLastPos = null, 1 !== o.startPoints.length || o.isZooming || (o.canTap = !d.isSliding, "image" === u.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (i.fancybox.stop(o.$content), o.$content.css("transition-duration", "0ms"), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-controls--isGrabbing")), 2 !== o.startPoints.length || d.isAnimating || u.hasError || "image" !== u.type || !u.isLoaded && !u.$ghost || (o.isZooming = !0, o.isSwiping = !1, o.isPanning = !1, i.fancybox.stop(o.$content), o.$content.css("transition-duration", "0ms"), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - i(e).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - i(e).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = r(o.startPoints[0], o.startPoints[1]))
            }
        }, d.prototype.ontouchmove = function(e) {
            var t = this;
            if (t.newPoints = s(e), i.fancybox.isMobile && (c(t.$target) || c(t.$target.parent()))) return e.stopPropagation(), void(t.canTap = !1);
            if ((t.instance.current.opts.touch || t.instance.canPan()) && t.newPoints && t.newPoints.length && (t.distanceX = r(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = r(t.newPoints[0], t.startPoints[0], "y"), t.distance = r(t.newPoints[0], t.startPoints[0]), t.distance > 0)) {
                if (!t.$target.is(t.$stage) && !t.$stage.find(t.$target).length) return;
                e.stopPropagation(), e.preventDefault(), t.isSwiping ? t.onSwipe() : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()
            }
        }, d.prototype.onSwipe = function() {
            var t, s = this,
                r = s.isSwiping,
                a = s.sliderStartPos.left || 0;
            r === !0 ? Math.abs(s.distance) > 10 && (s.canTap = !1, s.instance.group.length < 2 && s.instance.opts.touch.vertical ? s.isSwiping = "y" : s.instance.isSliding || s.instance.opts.touch.vertical === !1 || "auto" === s.instance.opts.touch.vertical && i(e).width() > 800 ? s.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = t > 45 && t < 135 ? "y" : "x"), s.instance.isSliding = s.isSwiping, s.startPoints = s.newPoints, i.each(s.instance.slides, function(e, t) {
                i.fancybox.stop(t.$slide), t.$slide.css("transition-duration", "0ms"), t.inTransition = !1, t.pos === s.instance.current.pos && (s.sliderStartPos.left = i.fancybox.getTranslate(t.$slide).left)
            }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()) : ("x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? a += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? a -= Math.pow(-s.distanceX, .8) : a += s.distanceX), s.sliderLastPos = {
                top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
                left: a
            }, s.requestId && (o(s.requestId), s.requestId = null), s.requestId = n(function() {
                s.sliderLastPos && (i.each(s.instance.slides, function(e, t) {
                    var n = t.pos - s.instance.currPos;
                    i.fancybox.setTranslate(t.$slide, {
                        top: s.sliderLastPos.top,
                        left: s.sliderLastPos.left + n * s.canvasWidth + n * t.opts.gutter
                    })
                }), s.$container.addClass("fancybox-is-sliding"))
            }))
        }, d.prototype.onPan = function() {
            var e, t, s, r = this;
            r.canTap = !1, e = r.contentStartPos.width > r.canvasWidth ? r.contentStartPos.left + r.distanceX : r.contentStartPos.left, t = r.contentStartPos.top + r.distanceY, s = r.limitMovement(e, t, r.contentStartPos.width, r.contentStartPos.height), s.scaleX = r.contentStartPos.scaleX, s.scaleY = r.contentStartPos.scaleY, r.contentLastPos = s, r.requestId && (o(r.requestId), r.requestId = null), r.requestId = n(function() {
                i.fancybox.setTranslate(r.$content, r.contentLastPos)
            })
        }, d.prototype.limitMovement = function(e, t, i, n) {
            var o, s, r, a, l = this,
                c = l.canvasWidth,
                d = l.canvasHeight,
                u = l.contentStartPos.left,
                h = l.contentStartPos.top,
                p = l.distanceX,
                f = l.distanceY;
            return o = Math.max(0, .5 * c - .5 * i), s = Math.max(0, .5 * d - .5 * n), r = Math.min(c - i, .5 * c - .5 * i), a = Math.min(d - n, .5 * d - .5 * n), i > c && (p > 0 && e > o && (e = o - 1 + Math.pow(-o + u + p, .8) || 0), p < 0 && e < r && (e = r + 1 - Math.pow(r - u - p, .8) || 0)), n > d && (f > 0 && t > s && (t = s - 1 + Math.pow(-s + h + f, .8) || 0), f < 0 && t < a && (t = a + 1 - Math.pow(a - h - f, .8) || 0)), {
                top: t,
                left: e
            }
        }, d.prototype.limitPosition = function(e, t, i, n) {
            var o = this,
                s = o.canvasWidth,
                r = o.canvasHeight;
            return i > s ? (e = e > 0 ? 0 : e, e = e < s - i ? s - i : e) : e = Math.max(0, s / 2 - i / 2), n > r ? (t = t > 0 ? 0 : t, t = t < r - n ? r - n : t) : t = Math.max(0, r / 2 - n / 2), {
                top: t,
                left: e
            }
        }, d.prototype.onZoom = function() {
            var t = this,
                s = t.contentStartPos.width,
                a = t.contentStartPos.height,
                l = t.contentStartPos.left,
                c = t.contentStartPos.top,
                d = r(t.newPoints[0], t.newPoints[1]),
                u = d / t.startDistanceBetweenFingers,
                h = Math.floor(s * u),
                p = Math.floor(a * u),
                f = (s - h) * t.percentageOfImageAtPinchPointX,
                m = (a - p) * t.percentageOfImageAtPinchPointY,
                g = (t.newPoints[0].x + t.newPoints[1].x) / 2 - i(e).scrollLeft(),
                v = (t.newPoints[0].y + t.newPoints[1].y) / 2 - i(e).scrollTop(),
                y = g - t.centerPointStartX,
                b = v - t.centerPointStartY,
                x = l + (f + y),
                _ = c + (m + b),
                w = {
                    top: _,
                    left: x,
                    scaleX: t.contentStartPos.scaleX * u,
                    scaleY: t.contentStartPos.scaleY * u
                };
            t.canTap = !1, t.newWidth = h, t.newHeight = p, t.contentLastPos = w, t.requestId && (o(t.requestId), t.requestId = null), t.requestId = n(function() {
                i.fancybox.setTranslate(t.$content, t.contentLastPos)
            })
        }, d.prototype.ontouchend = function(e) {
            var n = this,
                r = Math.max((new Date).getTime() - n.startTime, 1),
                a = n.isSwiping,
                l = n.isPanning,
                c = n.isZooming;
            return n.endPoints = s(e), n.$container.removeClass("fancybox-controls--isGrabbing"), i(t).off(".fb.touch"), n.requestId && (o(n.requestId), n.requestId = null), n.isSwiping = !1, n.isPanning = !1, n.isZooming = !1, n.canTap ? n.onTap(e) : (n.speed = 366, n.velocityX = n.distanceX / r * .5, n.velocityY = n.distanceY / r * .5, n.speedX = Math.max(.5 * n.speed, Math.min(1.5 * n.speed, 1 / Math.abs(n.velocityX) * n.speed)), void(l ? n.endPanning() : c ? n.endZooming() : n.endSwiping(a)))
        }, d.prototype.endSwiping = function(e) {
            var t = this,
                n = !1;
            t.instance.isSliding = !1, t.sliderLastPos = null, "y" == e && Math.abs(t.distanceY) > 50 ? (i.fancybox.animate(t.instance.current.$slide, {
                top: t.sliderStartPos.top + t.distanceY + 150 * t.velocityY,
                opacity: 0
            }, 150), n = t.instance.close(!0, 300)) : "x" == e && t.distanceX > 50 && t.instance.group.length > 1 ? n = t.instance.previous(t.speedX) : "x" == e && t.distanceX < -50 && t.instance.group.length > 1 && (n = t.instance.next(t.speedX)), n !== !1 || "x" != e && "y" != e || t.instance.jumpTo(t.instance.current.index, 150), t.$container.removeClass("fancybox-is-sliding")
        }, d.prototype.endPanning = function() {
            var e, t, n, o = this;
            o.contentLastPos && (o.instance.current.opts.touch.momentum === !1 ? (e = o.contentLastPos.left, t = o.contentLastPos.top) : (e = o.contentLastPos.left + o.velocityX * o.speed, t = o.contentLastPos.top + o.velocityY * o.speed), n = o.limitPosition(e, t, o.contentStartPos.width, o.contentStartPos.height), n.width = o.contentStartPos.width, n.height = o.contentStartPos.height, i.fancybox.animate(o.$content, n, 330))
        }, d.prototype.endZooming = function() {
            var e, t, n, o, s = this,
                r = s.instance.current,
                a = s.newWidth,
                l = s.newHeight;
            s.contentLastPos && (e = s.contentLastPos.left, t = s.contentLastPos.top, o = {
                top: t,
                left: e,
                width: a,
                height: l,
                scaleX: 1,
                scaleY: 1
            }, i.fancybox.setTranslate(s.$content, o), a < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : a > r.width || l > r.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (n = s.limitPosition(e, t, a, l), i.fancybox.setTranslate(s.content, i.fancybox.getTranslate(s.$content)), i.fancybox.animate(s.$content, n, 150)))
        }, d.prototype.onTap = function(e) {
            var t, n = this,
                o = i(e.target),
                r = n.instance,
                a = r.current,
                l = e && s(e) || n.startPoints,
                c = l[0] ? l[0].x - n.$stage.offset().left : 0,
                d = l[0] ? l[0].y - n.$stage.offset().top : 0,
                u = function(t) {
                    var o = a.opts[t];
                    if (i.isFunction(o) && (o = o.apply(r, [a, e])), o) switch (o) {
                        case "close":
                            r.close(n.startEvent);
                            break;
                        case "toggleControls":
                            r.toggleControls(!0);
                            break;
                        case "next":
                            r.next();
                            break;
                        case "nextOrClose":
                            r.group.length > 1 ? r.next() : r.close(n.startEvent);
                            break;
                        case "zoom":
                            "image" == a.type && (a.isLoaded || a.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, d) : r.group.length < 2 && r.close(n.startEvent))
                    }
                };
            if (!(e.originalEvent && 2 == e.originalEvent.button || r.isSliding || c > o[0].clientWidth + o.offset().left)) {
                if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside";
                else if (o.is(".fancybox-slide")) t = "Slide";
                else {
                    if (!r.current.$content || !r.current.$content.has(e.target).length) return;
                    t = "Content"
                }
                if (n.tapped) {
                    if (clearTimeout(n.tapped), n.tapped = null, Math.abs(c - n.tapX) > 50 || Math.abs(d - n.tapY) > 50 || r.isSliding) return this;
                    u("dblclick" + t)
                } else n.tapX = c, n.tapY = d, a.opts["dblclick" + t] && a.opts["dblclick" + t] !== a.opts["click" + t] ? n.tapped = setTimeout(function() {
                    n.tapped = null, u("click" + t)
                }, 300) : u("click" + t);
                return this
            }
        }, i(t).on("onActivate.fb", function(e, t) {
            t && !t.Guestures && (t.Guestures = new d(t))
        }), i(t).on("beforeClose.fb", function(e, t) {
            t && t.Guestures && t.Guestures.destroy()
        })
    }(window, document, window.jQuery),
    function(e, t) {
        "use strict";
        var i = function(e) {
            this.instance = e, this.init()
        };
        t.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            speed: 3e3,
            init: function() {
                var e = this;
                e.$button = e.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                    e.toggle()
                }), (e.instance.group.length < 2 || !e.instance.group[e.instance.currIndex].opts.slideShow) && e.$button.hide()
            },
            set: function() {
                var e = this;
                e.instance && e.instance.current && (e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
                    e.instance.next()
                }, e.instance.current.opts.slideShow.speed || e.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
            },
            clear: function() {
                var e = this;
                clearTimeout(e.timer), e.timer = null
            },
            start: function() {
                var e = this,
                    t = e.instance.current;
                e.instance && t && (t.opts.loop || t.index < e.instance.group.length - 1) && (e.isActive = !0, e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), t.isComplete && e.set())
            },
            stop: function() {
                var e = this,
                    t = e.instance.current;
                e.clear(), e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), e.isActive = !1
            },
            toggle: function() {
                var e = this;
                e.isActive ? e.stop() : e.start()
            }
        }), t(e).on({
            "onInit.fb": function(e, t) {
                t && !t.SlideShow && (t.SlideShow = new i(t))
            },
            "beforeShow.fb": function(e, t, i, n) {
                var o = t && t.SlideShow;
                n ? o && i.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
            },
            "afterShow.fb": function(e, t, i) {
                var n = t && t.SlideShow;
                n && n.isActive && n.set()
            },
            "afterKeydown.fb": function(i, n, o, s, r) {
                var a = n && n.SlideShow;
                !a || !o.opts.slideShow || 80 !== r && 32 !== r || t(e.activeElement).is("button,a,input") || (s.preventDefault(), a.toggle())
            },
            "beforeClose.fb onDeactivate.fb": function(e, t) {
                var i = t && t.SlideShow;
                i && i.stop()
            }
        }), t(e).on("visibilitychange", function() {
            var i = t.fancybox.getInstance(),
                n = i && i.SlideShow;
            n && n.isActive && (e.hidden ? n.clear() : n.set())
        })
    }(document, window.jQuery),
    function(e, t) {
        "use strict";
        var i = function() {
            var t, i, n, o = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ],
                s = {};
            for (i = 0; i < o.length; i++)
                if (t = o[i], t && t[1] in e) {
                    for (n = 0; n < t.length; n++) s[o[0][n]] = t[n];
                    return s
                }
            return !1
        }();
        if (!i) return void(t.fancybox.defaults.btnTpl.fullScreen = !1);
        var n = {
            request: function(t) {
                t = t || e.documentElement, t[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                e[i.exitFullscreen]()
            },
            toggle: function(t) {
                t = t || e.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function() {
                return Boolean(e[i.fullscreenElement])
            },
            enabled: function() {
                return Boolean(e[i.fullscreenEnabled])
            }
        };
        t(e).on({
            "onInit.fb": function(e, t) {
                var i, o = t.$refs.toolbar.find("[data-fancybox-fullscreen]");
                t && !t.FullScreen && t.group[t.currIndex].opts.fullScreen ? (i = t.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                    e.stopPropagation(), e.preventDefault(), n.toggle(i[0])
                }), t.opts.fullScreen && t.opts.fullScreen.autoStart === !0 && n.request(i[0]), t.FullScreen = n) : o.hide()
            },
            "afterKeydown.fb": function(e, t, i, n, o) {
                t && t.FullScreen && 70 === o && (n.preventDefault(), t.FullScreen.toggle(t.$refs.container[0]))
            },
            "beforeClose.fb": function(e) {
                e && e.FullScreen && n.exit()
            }
        }), t(e).on(i.fullscreenchange, function() {
            var e = t.fancybox.getInstance();
            e.current && "image" === e.current.type && e.isAnimating && (e.current.$content.css("transition", "none"), e.isAnimating = !1, e.update(!0, !0, 0))
        })
    }(document, window.jQuery),
    function(e, t) {
        "use strict";
        var i = function(e) {
            this.instance = e, this.init()
        };
        t.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            init: function() {
                var e = this,
                    t = e.instance.group[0],
                    i = e.instance.group[1];
                e.$button = e.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), e.instance.group.length > 1 && e.instance.group[e.instance.currIndex].opts.thumbs && ("image" == t.type || t.opts.thumb || t.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (e.$button.on("click", function() {
                    e.toggle()
                }), e.isActive = !0) : (e.$button.hide(), e.isActive = !1)
            },
            create: function() {
                var e, i, n = this.instance;
                this.$grid = t('<div class="fancybox-thumbs"></div>').appendTo(n.$refs.container), e = "<ul>", t.each(n.group, function(t, n) {
                    i = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null), i || "image" !== n.type || (i = n.src), i && i.length && (e += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
                }), e += "</ul>", this.$list = t(e).appendTo(this.$grid).on("click", "li", function() {
                    n.jumpTo(t(this).data("index"))
                }), this.$list.find("img").hide().one("load", function() {
                    var e, i, n, o, s = t(this).parent().removeClass("fancybox-thumbs-loading"),
                        r = s.outerWidth(),
                        a = s.outerHeight();
                    e = this.naturalWidth || this.width, i = this.naturalHeight || this.height, n = e / r, o = i / a, n >= 1 && o >= 1 && (n > o ? (e /= o, i = a) : (e = r, i /= n)), t(this).css({
                        width: Math.floor(e),
                        height: Math.floor(i),
                        "margin-top": Math.min(0, Math.floor(.3 * a - .3 * i)),
                        "margin-left": Math.min(0, Math.floor(.5 * r - .5 * e))
                    }).show()
                }).each(function() {
                    this.src = t(this).data("src")
                })
            },
            focus: function() {
                this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
            },
            close: function() {
                this.$grid.hide()
            },
            update: function() {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
            },
            hide: function() {
                this.isVisible = !1, this.update()
            },
            show: function() {
                this.isVisible = !0, this.update()
            },
            toggle: function() {
                this.isVisible = !this.isVisible, this.update()
            }
        }), t(e).on({
            "onInit.fb": function(e, t) {
                t && !t.Thumbs && (t.Thumbs = new i(t))
            },
            "beforeShow.fb": function(e, t, i, n) {
                var o = t && t.Thumbs;
                if (o && o.isActive) {
                    if (i.modal) return o.$button.hide(), void o.hide();
                    n && t.opts.thumbs.autoStart === !0 && o.show(), o.isVisible && o.focus()
                }
            },
            "afterKeydown.fb": function(e, t, i, n, o) {
                var s = t && t.Thumbs;
                s && s.isActive && 71 === o && (n.preventDefault(), s.toggle())
            },
            "beforeClose.fb": function(e, t) {
                var i = t && t.Thumbs;
                i && i.isVisible && t.opts.thumbs.hideOnClose !== !1 && i.close()
            }
        })
    }(document, window.jQuery),
    function(e, t, i) {
        "use strict";

        function n() {
            var e = t.location.hash.substr(1),
                i = e.split("-"),
                n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) ? parseInt(i.pop(-1), 10) || 1 : 1,
                o = i.join("-");
            return n < 1 && (n = 1), {
                hash: e,
                index: n,
                gallery: o
            }
        }

        function o(e) {
            var t;
            "" !== e.gallery && (t = i("[data-fancybox='" + i.escapeSelector(e.gallery) + "']").eq(e.index - 1), t.length || (t = i("#" + i.escapeSelector(e.gallery))), t.length && (r = !1, t.trigger("click")))
        }

        function s(e) {
            var t;
            return !!e && (t = e.current ? e.current.opts : e.opts, t.$orig ? t.$orig.data("fancybox") : t.hash || "");
        }
        i.escapeSelector || (i.escapeSelector = function(e) {
            var t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                i = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                };
            return (e + "").replace(t, i)
        });
        var r = !0,
            a = null,
            l = null;
        i(function() {
            setTimeout(function() {
                i.fancybox.defaults.hash !== !1 && (i(e).on({
                    "onInit.fb": function(e, t) {
                        var i, o;
                        t.group[t.currIndex].opts.hash !== !1 && (i = n(), o = s(t), o && i.gallery && o == i.gallery && (t.currIndex = i.index - 1))
                    },
                    "beforeShow.fb": function(i, n, o) {
                        var c;
                        o.opts.hash !== !1 && (c = s(n), c && "" !== c && (t.location.hash.indexOf(c) < 0 && (n.opts.origHash = t.location.hash), a = c + (n.group.length > 1 ? "-" + (o.index + 1) : ""), "replaceState" in t.history ? (l && clearTimeout(l), l = setTimeout(function() {
                            t.history[r ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + a), l = null, r = !1
                        }, 300)) : t.location.hash = a))
                    },
                    "beforeClose.fb": function(n, o, r) {
                        var c, d;
                        l && clearTimeout(l), r.opts.hash !== !1 && (c = s(o), d = o && o.opts.origHash ? o.opts.origHash : "", c && "" !== c && ("replaceState" in history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + d) : (t.location.hash = d, i(t).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))), a = null)
                    }
                }), i(t).on("hashchange.fb", function() {
                    var e = n();
                    i.fancybox.getInstance() ? !a || a === e.gallery + "-" + e.index || 1 === e.index && a == e.gallery || (a = null, i.fancybox.close(), r = !0) : "" !== e.gallery && o(e)
                }), o(n()))
            }, 50)
        })
    }(document, window, window.jQuery), ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }(function(e) {
        function t(t) {
            var r = t || window.event,
                a = l.call(arguments, 1),
                c = 0,
                u = 0,
                h = 0,
                p = 0,
                f = 0,
                m = 0;
            if (t = e.event.fix(r), t.type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * h, h = 0), c = 0 === h ? u : h, "deltaY" in r && (h = -1 * r.deltaY, c = h), "deltaX" in r && (u = r.deltaX, 0 === h && (c = -1 * u)), 0 !== h || 0 !== u) {
                if (1 === r.deltaMode) {
                    var g = e.data(this, "mousewheel-line-height");
                    c *= g, h *= g, u *= g
                } else if (2 === r.deltaMode) {
                    var v = e.data(this, "mousewheel-page-height");
                    c *= v, h *= v, u *= v
                }
                if (p = Math.max(Math.abs(h), Math.abs(u)), (!s || s > p) && (s = p, n(r, p) && (s /= 40)), n(r, p) && (c /= 40, u /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), h = Math[h >= 1 ? "floor" : "ceil"](h / s), d.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    f = t.clientX - y.left, m = t.clientY - y.top
                }
                return t.deltaX = u, t.deltaY = h, t.deltaFactor = s, t.offsetX = f, t.offsetY = m, t.deltaMode = 0, a.unshift(t, c, u, h), o && clearTimeout(o), o = setTimeout(i, 200), (e.event.dispatch || e.event.handle).apply(this, a)
            }
        }

        function i() {
            s = null
        }

        function n(e, t) {
            return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
        }
        var o, s, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var c = r.length; c;) e.event.fixHooks[r[--c]] = e.event.mouseHooks;
        var d = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var i = a.length; i;) this.addEventListener(a[--i], t, !1);
                else this.onmousewheel = t;
                e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var i = a.length; i;) this.removeEventListener(a[--i], t, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var i = e(t),
                    n = i["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }), ! function(e) {
        "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
    }(function(e) {
        ! function(t) {
            var i = "function" == typeof define && define.amd,
                n = "undefined" != typeof module && module.exports,
                o = "https:" == document.location.protocol ? "https:" : "http:",
                s = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
            i || (n ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + o + "//" + s + "%3E%3C/script%3E"))), t()
        }(function() {
            var t, i = "mCustomScrollbar",
                n = "mCS",
                o = ".mCustomScrollbar",
                s = {
                    setTop: 0,
                    setLeft: 0,
                    axis: "y",
                    scrollbarPosition: "inside",
                    scrollInertia: 950,
                    autoDraggerLength: !0,
                    alwaysShowScrollbar: 0,
                    snapOffset: 0,
                    mouseWheel: {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        deltaFactor: "auto",
                        disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                    },
                    scrollButtons: {
                        scrollType: "stepless",
                        scrollAmount: "auto"
                    },
                    keyboard: {
                        enable: !0,
                        scrollType: "stepless",
                        scrollAmount: "auto"
                    },
                    contentTouchScroll: 25,
                    advanced: {
                        autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                        updateOnContentResize: !0,
                        updateOnImageLoad: !0,
                        autoUpdateTimeout: 60
                    },
                    theme: "light",
                    callbacks: {
                        onTotalScrollOffset: 0,
                        onTotalScrollBackOffset: 0,
                        alwaysTriggerOffsets: !0
                    }
                },
                r = 0,
                a = {},
                l = window.attachEvent && !window.addEventListener ? 1 : 0,
                c = !1,
                d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                u = {
                    init: function(t) {
                        var t = e.extend(!0, {}, s, t),
                            i = h.call(this);
                        if (t.live) {
                            var l = t.liveSelector || this.selector || o,
                                c = e(l);
                            if ("off" === t.live) return void f(l);
                            a[l] = setTimeout(function() {
                                c.mCustomScrollbar(t), "once" === t.live && c.length && f(l)
                            }, 500)
                        } else f(l);
                        return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : m(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: !1,
                            deltaFactor: "auto",
                            normalizeDelta: !1,
                            invert: !1
                        }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), p(t), e(i).each(function() {
                            var i = e(this);
                            if (!i.data(n)) {
                                i.data(n, {
                                    idx: ++r,
                                    opt: t,
                                    scrollRatio: {
                                        y: null,
                                        x: null
                                    },
                                    overflowed: null,
                                    contentReset: {
                                        y: null,
                                        x: null
                                    },
                                    bindEvents: !1,
                                    tweenRunning: !1,
                                    sequential: {},
                                    langDir: i.css("direction"),
                                    cbOffsets: null,
                                    trigger: null
                                });
                                var o = i.data(n),
                                    s = o.opt,
                                    a = i.data("mcs-axis"),
                                    l = i.data("mcs-scrollbar-position"),
                                    c = i.data("mcs-theme");
                                a && (s.axis = a), l && (s.scrollbarPosition = l), c && (s.theme = c, p(s)), v.call(this), e("#mCSB_" + o.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, i)
                            }
                        })
                    },
                    update: function(t, i) {
                        var o = t || h.call(this);
                        return e(o).each(function() {
                            var t = e(this);
                            if (t.data(n)) {
                                var o = t.data(n),
                                    s = o.opt,
                                    r = e("#mCSB_" + o.idx + "_container"),
                                    a = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                                if (!r.length) return;
                                o.tweenRunning && Y(t), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), _.call(this), b.call(this), "y" === s.axis || s.advanced.autoExpandHorizontalScroll || r.css("width", y(r.children())), o.overflowed = C.call(this), E.call(this), s.autoDraggerLength && w.call(this), T.call(this), $.call(this);
                                var l = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                                "x" !== s.axis && (o.overflowed[0] ? a[0].height() > a[0].parent().height() ? k.call(this) : (Z(t, l[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }), o.contentReset.y = null) : (k.call(this), "y" === s.axis ? P.call(this) : "yx" === s.axis && o.overflowed[1] && Z(t, l[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }))), "y" !== s.axis && (o.overflowed[1] ? a[1].width() > a[1].parent().width() ? k.call(this) : (Z(t, l[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }), o.contentReset.x = null) : (k.call(this), "x" === s.axis ? P.call(this) : "yx" === s.axis && o.overflowed[0] && Z(t, l[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }))), i && o && (2 === i && s.callbacks.onImageLoad && "function" == typeof s.callbacks.onImageLoad ? s.callbacks.onImageLoad.call(this) : 3 === i && s.callbacks.onSelectorChange && "function" == typeof s.callbacks.onSelectorChange ? s.callbacks.onSelectorChange.call(this) : s.callbacks.onUpdate && "function" == typeof s.callbacks.onUpdate && s.callbacks.onUpdate.call(this)), X.call(this)
                            }
                        })
                    },
                    scrollTo: function(t, i) {
                        if ("undefined" != typeof t && null != t) {
                            var o = h.call(this);
                            return e(o).each(function() {
                                var o = e(this);
                                if (o.data(n)) {
                                    var s = o.data(n),
                                        r = s.opt,
                                        a = {
                                            trigger: "external",
                                            scrollInertia: r.scrollInertia,
                                            scrollEasing: "mcsEaseInOut",
                                            moveDragger: !1,
                                            timeout: 60,
                                            callbacks: !0,
                                            onStart: !0,
                                            onUpdate: !0,
                                            onComplete: !0
                                        },
                                        l = e.extend(!0, {}, a, i),
                                        c = W.call(this, t),
                                        d = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                    c[0] = q.call(this, c[0], "y"), c[1] = q.call(this, c[1], "x"), l.moveDragger && (c[0] *= s.scrollRatio.y, c[1] *= s.scrollRatio.x), l.dur = d, setTimeout(function() {
                                        null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && s.overflowed[0] && (l.dir = "y", l.overwrite = "all", Z(o, c[0].toString(), l)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && s.overflowed[1] && (l.dir = "x", l.overwrite = "none", Z(o, c[1].toString(), l))
                                    }, l.timeout)
                                }
                            })
                        }
                    },
                    stop: function() {
                        var t = h.call(this);
                        return e(t).each(function() {
                            var t = e(this);
                            t.data(n) && Y(t)
                        })
                    },
                    disable: function(t) {
                        var i = h.call(this);
                        return e(i).each(function() {
                            var i = e(this);
                            i.data(n) && (i.data(n), X.call(this, "remove"), P.call(this), t && k.call(this), E.call(this, !0), i.addClass(d[3]))
                        })
                    },
                    destroy: function() {
                        var t = h.call(this);
                        return e(t).each(function() {
                            var o = e(this);
                            if (o.data(n)) {
                                var s = o.data(n),
                                    r = s.opt,
                                    a = e("#mCSB_" + s.idx),
                                    l = e("#mCSB_" + s.idx + "_container"),
                                    c = e(".mCSB_" + s.idx + "_scrollbar");
                                r.live && f(r.liveSelector || e(t).selector), X.call(this, "remove"), P.call(this), k.call(this), o.removeData(n), K(this, "mcs"), c.remove(), l.find("img." + d[2]).removeClass(d[2]), a.replaceWith(l.contents()), o.removeClass(i + " _" + n + "_" + s.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                            }
                        })
                    }
                },
                h = function() {
                    return "object" != typeof e(this) || e(this).length < 1 ? o : this
                },
                p = function(t) {
                    var i = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                        n = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                        o = ["minimal", "minimal-dark"],
                        s = ["minimal", "minimal-dark"],
                        r = ["minimal", "minimal-dark"];
                    t.autoDraggerLength = !(e.inArray(t.theme, i) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, n) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, o) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, s) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
                },
                f = function(e) {
                    a[e] && (clearTimeout(a[e]), K(a, e))
                },
                m = function(e) {
                    return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
                },
                g = function(e) {
                    return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
                },
                v = function() {
                    var t = e(this),
                        o = t.data(n),
                        s = o.opt,
                        r = s.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                        a = ["<div id='mCSB_" + o.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + s.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + o.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + s.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                        l = "yx" === s.axis ? "mCSB_vertical_horizontal" : "x" === s.axis ? "mCSB_horizontal" : "mCSB_vertical",
                        c = "yx" === s.axis ? a[0] + a[1] : "x" === s.axis ? a[1] : a[0],
                        u = "yx" === s.axis ? "<div id='mCSB_" + o.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                        h = s.autoHideScrollbar ? " " + d[6] : "",
                        p = "x" !== s.axis && "rtl" === o.langDir ? " " + d[7] : "";
                    s.setWidth && t.css("width", s.setWidth), s.setHeight && t.css("height", s.setHeight), s.setLeft = "y" !== s.axis && "rtl" === o.langDir ? "989999px" : s.setLeft, t.addClass(i + " _" + n + "_" + o.idx + h + p).wrapInner("<div id='mCSB_" + o.idx + "' class='mCustomScrollBox mCS-" + s.theme + " " + l + "'><div id='mCSB_" + o.idx + "_container' class='mCSB_container' style='position:relative; top:" + s.setTop + "; left:" + s.setLeft + ";' dir=" + o.langDir + " /></div>");
                    var f = e("#mCSB_" + o.idx),
                        m = e("#mCSB_" + o.idx + "_container");
                    "y" === s.axis || s.advanced.autoExpandHorizontalScroll || m.css("width", y(m.children())), "outside" === s.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), f.addClass("mCSB_outside").after(c)) : (f.addClass("mCSB_inside").append(c), m.wrap(u)), x.call(this);
                    var g = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                    g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
                },
                y = function(t) {
                    return Math.max.apply(Math, t.map(function() {
                        return e(this).outerWidth(!0)
                    }).get())
                },
                b = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = i.opt,
                        s = e("#mCSB_" + i.idx + "_container");
                    o.advanced.autoExpandHorizontalScroll && "y" !== o.axis && s.css({
                        position: "absolute",
                        width: "auto"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(s[0].getBoundingClientRect().right + .4) - Math.floor(s[0].getBoundingClientRect().left),
                        position: "relative"
                    }).unwrap()
                },
                x = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = i.opt,
                        s = e(".mCSB_" + i.idx + "_scrollbar:first"),
                        r = te(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
                        a = ["<a href='#' class='" + d[13] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[14] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[15] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[16] + "' oncontextmenu='return false;' " + r + " />"],
                        l = ["x" === o.axis ? a[2] : a[0], "x" === o.axis ? a[3] : a[1], a[2], a[3]];
                    o.scrollButtons.enable && s.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
                },
                _ = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = e("#mCSB_" + i.idx),
                        s = t.css("max-height") || "none",
                        r = -1 !== s.indexOf("%"),
                        a = t.css("box-sizing");
                    if ("none" !== s) {
                        var l = r ? t.parent().height() * parseInt(s) / 100 : parseInt(s);
                        "border-box" === a && (l -= t.innerHeight() - t.height() + (t.outerHeight() - t.innerHeight())), o.css("max-height", Math.round(l))
                    }
                },
                w = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = e("#mCSB_" + i.idx),
                        s = e("#mCSB_" + i.idx + "_container"),
                        r = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")],
                        a = [o.height() / s.outerHeight(!1), o.width() / s.outerWidth(!1)],
                        c = [parseInt(r[0].css("min-height")), Math.round(a[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(a[1] * r[1].parent().width())],
                        d = l && c[1] < c[0] ? c[0] : c[1],
                        u = l && c[3] < c[2] ? c[2] : c[3];
                    r[0].css({
                        height: d,
                        "max-height": r[0].parent().height() - 10
                    }).find(".mCSB_dragger_bar").css({
                        "line-height": c[0] + "px"
                    }), r[1].css({
                        width: u,
                        "max-width": r[1].parent().width() - 10
                    })
                },
                T = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = e("#mCSB_" + i.idx),
                        s = e("#mCSB_" + i.idx + "_container"),
                        r = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")],
                        a = [s.outerHeight(!1) - o.height(), s.outerWidth(!1) - o.width()],
                        l = [a[0] / (r[0].parent().height() - r[0].height()), a[1] / (r[1].parent().width() - r[1].width())];
                    i.scrollRatio = {
                        y: l[0],
                        x: l[1]
                    }
                },
                S = function(e, t, i) {
                    var n = i ? d[0] + "_expanded" : "",
                        o = e.closest(".mCSB_scrollTools");
                    "active" === t ? (e.toggleClass(d[0] + " " + n), o.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), o.removeClass(d[1])) : (e.addClass(d[0]), o.addClass(d[1])))
                },
                C = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = e("#mCSB_" + i.idx),
                        s = e("#mCSB_" + i.idx + "_container"),
                        r = null == i.overflowed ? s.height() : s.outerHeight(!1),
                        a = null == i.overflowed ? s.width() : s.outerWidth(!1);
                    return [r > o.height(), a > o.width()]
                },
                k = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = i.opt,
                        s = e("#mCSB_" + i.idx),
                        r = e("#mCSB_" + i.idx + "_container"),
                        a = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
                    if (Y(t), ("x" !== o.axis && !i.overflowed[0] || "y" === o.axis && i.overflowed[0]) && (a[0].add(r).css("top", 0), Z(t, "_resetY")), "y" !== o.axis && !i.overflowed[1] || "x" === o.axis && i.overflowed[1]) {
                        var l = dx = 0;
                        "rtl" === i.langDir && (l = s.width() - r.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), r.css("left", l), a[1].css("left", dx), Z(t, "_resetX")
                    }
                },
                $ = function() {
                    function t() {
                        r = setTimeout(function() {
                            e.event.special.mousewheel ? (clearTimeout(r), L.call(i[0])) : t()
                        }, 100)
                    }
                    var i = e(this),
                        o = i.data(n),
                        s = o.opt;
                    if (!o.bindEvents) {
                        if (M.call(this), s.contentTouchScroll && F.call(this), O.call(this), s.mouseWheel.enable) {
                            var r;
                            t()
                        }
                        I.call(this), N.call(this), s.advanced.autoScrollOnFocus && z.call(this), s.scrollButtons.enable && B.call(this), s.keyboard.enable && H.call(this), o.bindEvents = !0
                    }
                },
                P = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = i.opt,
                        s = n + "_" + i.idx,
                        r = ".mCSB_" + i.idx + "_scrollbar",
                        a = e("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + r + ">a"),
                        l = e("#mCSB_" + i.idx + "_container");
                    o.advanced.releaseDraggableSelectors && a.add(e(o.advanced.releaseDraggableSelectors)), i.bindEvents && (e(document).unbind("." + s), a.each(function() {
                        e(this).unbind("." + s)
                    }), clearTimeout(t[0]._focusTimeout), K(t[0], "_focusTimeout"), clearTimeout(i.sequential.step), K(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), K(l[0], "onCompleteTimeout"), i.bindEvents = !1)
                },
                E = function(t) {
                    var i = e(this),
                        o = i.data(n),
                        s = o.opt,
                        r = e("#mCSB_" + o.idx + "_container_wrapper"),
                        a = r.length ? r : e("#mCSB_" + o.idx + "_container"),
                        l = [e("#mCSB_" + o.idx + "_scrollbar_vertical"), e("#mCSB_" + o.idx + "_scrollbar_horizontal")],
                        c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                    "x" !== s.axis && (o.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), a.removeClass(d[8] + " " + d[10])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && c[0].css("display", "none"), a.removeClass(d[10])) : (l[0].css("display", "none"), a.addClass(d[10])), a.addClass(d[8]))), "y" !== s.axis && (o.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), a.removeClass(d[9] + " " + d[11])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && c[1].css("display", "none"), a.removeClass(d[11])) : (l[1].css("display", "none"), a.addClass(d[11])), a.addClass(d[9]))), o.overflowed[0] || o.overflowed[1] ? i.removeClass(d[5]) : i.addClass(d[5])
                },
                A = function(e) {
                    var t = e.type;
                    switch (t) {
                        case "pointerdown":
                        case "MSPointerDown":
                        case "pointermove":
                        case "MSPointerMove":
                        case "pointerup":
                        case "MSPointerUp":
                            return e.target.ownerDocument !== document ? [e.originalEvent.screenY, e.originalEvent.screenX, !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                        case "touchstart":
                        case "touchmove":
                        case "touchend":
                            var i = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                                n = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                            return e.target.ownerDocument !== document ? [i.screenY, i.screenX, n > 1] : [i.pageY, i.pageX, n > 1];
                        default:
                            return [e.pageY, e.pageX, !1]
                    }
                },
                M = function() {
                    function t(e) {
                        var t = f.find("iframe");
                        if (t.length) {
                            var i = e ? "auto" : "none";
                            t.css("pointer-events", i)
                        }
                    }

                    function i(e, t, i, n) {
                        if (f[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, o.attr("id") === p[1]) var s = "x",
                            r = (o[0].offsetLeft - t + n) * d.scrollRatio.x;
                        else var s = "y",
                            r = (o[0].offsetTop - e + i) * d.scrollRatio.y;
                        Z(a, r.toString(), {
                            dir: s,
                            drag: !0
                        })
                    }
                    var o, s, r, a = e(this),
                        d = a.data(n),
                        u = d.opt,
                        h = n + "_" + d.idx,
                        p = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
                        f = e("#mCSB_" + d.idx + "_container"),
                        m = e("#" + p[0] + ",#" + p[1]),
                        g = u.advanced.releaseDraggableSelectors ? m.add(e(u.advanced.releaseDraggableSelectors)) : m;
                    m.bind("mousedown." + h + " touchstart." + h + " pointerdown." + h + " MSPointerDown." + h, function(i) {
                        if (i.stopImmediatePropagation(), i.preventDefault(), J(i)) {
                            c = !0, l && (document.onselectstart = function() {
                                return !1
                            }), t(!1), Y(a), o = e(this);
                            var n = o.offset(),
                                d = A(i)[0] - n.top,
                                h = A(i)[1] - n.left,
                                p = o.height() + n.top,
                                f = o.width() + n.left;
                            p > d && d > 0 && f > h && h > 0 && (s = d, r = h), S(o, "active", u.autoExpandScrollbar)
                        }
                    }).bind("touchmove." + h, function(e) {
                        e.stopImmediatePropagation(), e.preventDefault();
                        var t = o.offset(),
                            n = A(e)[0] - t.top,
                            a = A(e)[1] - t.left;
                        i(s, r, n, a)
                    }), e(document).bind("mousemove." + h + " pointermove." + h + " MSPointerMove." + h, function(e) {
                        if (o) {
                            var t = o.offset(),
                                n = A(e)[0] - t.top,
                                a = A(e)[1] - t.left;
                            if (s === n) return;
                            i(s, r, n, a)
                        }
                    }).add(g).bind("mouseup." + h + " touchend." + h + " pointerup." + h + " MSPointerUp." + h, function(e) {
                        o && (S(o, "active", u.autoExpandScrollbar), o = null), c = !1, l && (document.onselectstart = null), t(!0)
                    })
                },
                F = function() {
                    function i(e) {
                        if (!ee(e) || c || A(e)[2]) return void(t = 0);
                        t = 1, _ = 0, w = 0, T.removeClass("mCS_touch_action");
                        var i = P.offset();
                        d = A(e)[0] - i.top, u = A(e)[1] - i.left, D = [A(e)[0], A(e)[1]]
                    }

                    function o(e) {
                        if (ee(e) && !c && !A(e)[2] && (e.stopImmediatePropagation(), !w || _)) {
                            m = G();
                            var t = $.offset(),
                                i = A(e)[0] - t.top,
                                n = A(e)[1] - t.left,
                                o = "mcsLinearOut";
                            if (M.push(i), F.push(n), D[2] = Math.abs(A(e)[0] - D[0]), D[3] = Math.abs(A(e)[1] - D[1]), S.overflowed[0]) var s = E[0].parent().height() - E[0].height(),
                                r = d - i > 0 && i - d > -(s * S.scrollRatio.y) && (2 * D[3] < D[2] || "yx" === C.axis);
                            if (S.overflowed[1]) var a = E[1].parent().width() - E[1].width(),
                                h = u - n > 0 && n - u > -(a * S.scrollRatio.x) && (2 * D[2] < D[3] || "yx" === C.axis);
                            r || h ? (e.preventDefault(), _ = 1) : (w = 1, T.addClass("mCS_touch_action")), b = "yx" === C.axis ? [d - i, u - n] : "x" === C.axis ? [null, u - n] : [d - i, null], P[0].idleTimer = 250, S.overflowed[0] && l(b[0], O, o, "y", "all", !0), S.overflowed[1] && l(b[1], O, o, "x", L, !0)
                        }
                    }

                    function s(e) {
                        if (!ee(e) || c || A(e)[2]) return void(t = 0);
                        t = 1, e.stopImmediatePropagation(), Y(T), f = G();
                        var i = $.offset();
                        h = A(e)[0] - i.top, p = A(e)[1] - i.left, M = [], F = []
                    }

                    function r(e) {
                        if (ee(e) && !c && !A(e)[2]) {
                            e.stopImmediatePropagation(), _ = 0, w = 0, g = G();
                            var t = $.offset(),
                                i = A(e)[0] - t.top,
                                n = A(e)[1] - t.left;
                            if (!(g - m > 30)) {
                                y = 1e3 / (g - f);
                                var o = "mcsEaseOut",
                                    s = 2.5 > y,
                                    r = s ? [M[M.length - 2], F[F.length - 2]] : [0, 0];
                                v = s ? [i - r[0], n - r[1]] : [i - h, n - p];
                                var d = [Math.abs(v[0]), Math.abs(v[1])];
                                y = s ? [Math.abs(v[0] / 4), Math.abs(v[1] / 4)] : [y, y];
                                var u = [Math.abs(P[0].offsetTop) - v[0] * a(d[0] / y[0], y[0]), Math.abs(P[0].offsetLeft) - v[1] * a(d[1] / y[1], y[1])];
                                b = "yx" === C.axis ? [u[0], u[1]] : "x" === C.axis ? [null, u[1]] : [u[0], null], x = [4 * d[0] + C.scrollInertia, 4 * d[1] + C.scrollInertia];
                                var T = parseInt(C.contentTouchScroll) || 0;
                                b[0] = d[0] > T ? b[0] : 0, b[1] = d[1] > T ? b[1] : 0, S.overflowed[0] && l(b[0], x[0], o, "y", L, !1), S.overflowed[1] && l(b[1], x[1], o, "x", L, !1)
                            }
                        }
                    }

                    function a(e, t) {
                        var i = [1.5 * t, 2 * t, t / 1.5, t / 2];
                        return e > 90 ? t > 4 ? i[0] : i[3] : e > 60 ? t > 3 ? i[3] : i[2] : e > 30 ? t > 8 ? i[1] : t > 6 ? i[0] : t > 4 ? t : i[2] : t > 8 ? t : i[3]
                    }

                    function l(e, t, i, n, o, s) {
                        e && Z(T, e.toString(), {
                            dur: t,
                            scrollEasing: i,
                            dir: n,
                            overwrite: o,
                            drag: s
                        })
                    }
                    var d, u, h, p, f, m, g, v, y, b, x, _, w, T = e(this),
                        S = T.data(n),
                        C = S.opt,
                        k = n + "_" + S.idx,
                        $ = e("#mCSB_" + S.idx),
                        P = e("#mCSB_" + S.idx + "_container"),
                        E = [e("#mCSB_" + S.idx + "_dragger_vertical"), e("#mCSB_" + S.idx + "_dragger_horizontal")],
                        M = [],
                        F = [],
                        O = 0,
                        L = "yx" === C.axis ? "none" : "all",
                        D = [],
                        I = P.find("iframe"),
                        z = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k];
                    P.bind(z[0], function(e) {
                        i(e)
                    }).bind(z[1], function(e) {
                        o(e)
                    }), $.bind(z[0], function(e) {
                        s(e)
                    }).bind(z[2], function(e) {
                        r(e)
                    }), I.length && I.each(function() {
                        e(this).load(function() {
                            R(this) && e(this.contentDocument || this.contentWindow.document).bind(z[0], function(e) {
                                i(e), s(e)
                            }).bind(z[1], function(e) {
                                o(e)
                            }).bind(z[2], function(e) {
                                r(e)
                            })
                        })
                    })
                },
                O = function() {
                    function i() {
                        return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                    }

                    function o(e, t, i) {
                        d.type = i && s ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", i ? 60 : null)
                    }
                    var s, r = e(this),
                        a = r.data(n),
                        l = a.opt,
                        d = a.sequential,
                        u = n + "_" + a.idx,
                        h = e("#mCSB_" + a.idx + "_container"),
                        p = h.parent();
                    h.bind("mousedown." + u, function(e) {
                        t || s || (s = 1, c = !0)
                    }).add(document).bind("mousemove." + u, function(e) {
                        if (!t && s && i()) {
                            var n = h.offset(),
                                r = A(e)[0] - n.top + h[0].offsetTop,
                                c = A(e)[1] - n.left + h[0].offsetLeft;
                            r > 0 && r < p.height() && c > 0 && c < p.width() ? d.step && o("off", null, "stepped") : ("x" !== l.axis && a.overflowed[0] && (0 > r ? o("on", 38) : r > p.height() && o("on", 40)), "y" !== l.axis && a.overflowed[1] && (0 > c ? o("on", 37) : c > p.width() && o("on", 39)))
                        }
                    }).bind("mouseup." + u, function(e) {
                        t || (s && (s = 0, o("off", null)), c = !1)
                    })
                },
                L = function() {
                    function t(t, n) {
                        if (Y(i), !D(i, t.target)) {
                            var r = "auto" !== s.mouseWheel.deltaFactor ? parseInt(s.mouseWheel.deltaFactor) : l && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100;
                            if ("x" === s.axis || "x" === s.mouseWheel.axis) var d = "x",
                                u = [Math.round(r * o.scrollRatio.x), parseInt(s.mouseWheel.scrollAmount)],
                                h = "auto" !== s.mouseWheel.scrollAmount ? u[1] : u[0] >= a.width() ? .9 * a.width() : u[0],
                                p = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetLeft),
                                f = c[1][0].offsetLeft,
                                m = c[1].parent().width() - c[1].width(),
                                g = t.deltaX || t.deltaY || n;
                            else var d = "y",
                                u = [Math.round(r * o.scrollRatio.y), parseInt(s.mouseWheel.scrollAmount)],
                                h = "auto" !== s.mouseWheel.scrollAmount ? u[1] : u[0] >= a.height() ? .9 * a.height() : u[0],
                                p = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetTop),
                                f = c[0][0].offsetTop,
                                m = c[0].parent().height() - c[0].height(),
                                g = t.deltaY || n;
                            "y" === d && !o.overflowed[0] || "x" === d && !o.overflowed[1] || ((s.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (g = -g), s.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== f || 0 > g && f !== m || s.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), Z(i, (p - g * h).toString(), {
                                dir: d
                            }))
                        }
                    }
                    if (e(this).data(n)) {
                        var i = e(this),
                            o = i.data(n),
                            s = o.opt,
                            r = n + "_" + o.idx,
                            a = e("#mCSB_" + o.idx),
                            c = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                            d = e("#mCSB_" + o.idx + "_container").find("iframe");
                        d.length && d.each(function() {
                            e(this).load(function() {
                                R(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, i) {
                                    t(e, i)
                                })
                            })
                        }), a.bind("mousewheel." + r, function(e, i) {
                            t(e, i)
                        })
                    }
                },
                R = function(e) {
                    var t = null;
                    try {
                        var i = e.contentDocument || e.contentWindow.document;
                        t = i.body.innerHTML
                    } catch (n) {}
                    return null !== t
                },
                D = function(t, i) {
                    var o = i.nodeName.toLowerCase(),
                        s = t.data(n).opt.mouseWheel.disableOver,
                        r = ["select", "textarea"];
                    return e.inArray(o, s) > -1 && !(e.inArray(o, r) > -1 && !e(i).is(":focus"))
                },
                I = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = n + "_" + i.idx,
                        s = e("#mCSB_" + i.idx + "_container"),
                        r = s.parent(),
                        a = e(".mCSB_" + i.idx + "_scrollbar ." + d[12]);
                    a.bind("touchstart." + o + " pointerdown." + o + " MSPointerDown." + o, function(e) {
                        c = !0
                    }).bind("touchend." + o + " pointerup." + o + " MSPointerUp." + o, function(e) {
                        c = !1
                    }).bind("click." + o, function(n) {
                        if (e(n.target).hasClass(d[12]) || e(n.target).hasClass("mCSB_draggerRail")) {
                            Y(t);
                            var o = e(this),
                                a = o.find(".mCSB_dragger");
                            if (o.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                if (!i.overflowed[1]) return;
                                var l = "x",
                                    c = n.pageX > a.offset().left ? -1 : 1,
                                    u = Math.abs(s[0].offsetLeft) - .9 * c * r.width()
                            } else {
                                if (!i.overflowed[0]) return;
                                var l = "y",
                                    c = n.pageY > a.offset().top ? -1 : 1,
                                    u = Math.abs(s[0].offsetTop) - .9 * c * r.height()
                            }
                            Z(t, u.toString(), {
                                dir: l,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    })
                },
                z = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = i.opt,
                        s = n + "_" + i.idx,
                        r = e("#mCSB_" + i.idx + "_container"),
                        a = r.parent();
                    r.bind("focusin." + s, function(i) {
                        var n = e(document.activeElement),
                            s = r.find(".mCustomScrollBox").length,
                            l = 0;
                        n.is(o.advanced.autoScrollOnFocus) && (Y(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = s ? (l + 17) * s : 0, t[0]._focusTimeout = setTimeout(function() {
                            var e = [ie(n)[0], ie(n)[1]],
                                i = [r[0].offsetTop, r[0].offsetLeft],
                                s = [i[0] + e[0] >= 0 && i[0] + e[0] < a.height() - n.outerHeight(!1), i[1] + e[1] >= 0 && i[0] + e[1] < a.width() - n.outerWidth(!1)],
                                c = "yx" !== o.axis || s[0] || s[1] ? "all" : "none";
                            "x" === o.axis || s[0] || Z(t, e[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: c,
                                dur: l
                            }), "y" === o.axis || s[1] || Z(t, e[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: c,
                                dur: l
                            })
                        }, t[0]._focusTimer))
                    })
                },
                N = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = n + "_" + i.idx,
                        s = e("#mCSB_" + i.idx + "_container").parent();
                    s.bind("scroll." + o, function(t) {
                        (0 !== s.scrollTop() || 0 !== s.scrollLeft()) && e(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
                    })
                },
                B = function() {
                    var t = e(this),
                        i = t.data(n),
                        o = i.opt,
                        s = i.sequential,
                        r = n + "_" + i.idx,
                        a = ".mCSB_" + i.idx + "_scrollbar",
                        l = e(a + ">a");
                    l.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(n) {
                        function r(e, i) {
                            s.scrollAmount = o.snapAmount || o.scrollButtons.scrollAmount, j(t, e, i)
                        }
                        if (n.preventDefault(), J(n)) {
                            var a = e(this).attr("class");
                            switch (s.type = o.scrollButtons.scrollType, n.type) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                case "MSPointerDown":
                                    if ("stepped" === s.type) return;
                                    c = !0, i.tweenRunning = !1, r("on", a);
                                    break;
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                case "MSPointerUp":
                                case "mouseout":
                                case "pointerout":
                                case "MSPointerOut":
                                    if ("stepped" === s.type) return;
                                    c = !1, s.dir && r("off", a);
                                    break;
                                case "click":
                                    if ("stepped" !== s.type || i.tweenRunning) return;
                                    r("on", a)
                            }
                        }
                    })
                },
                H = function() {
                    function t(t) {
                        function n(e, t) {
                            r.type = s.keyboard.scrollType, r.scrollAmount = s.snapAmount || s.keyboard.scrollAmount, "stepped" === r.type && o.tweenRunning || j(i, e, t)
                        }
                        switch (t.type) {
                            case "blur":
                                o.tweenRunning && r.dir && n("off", null);
                                break;
                            case "keydown":
                            case "keyup":
                                var a = t.keyCode ? t.keyCode : t.which,
                                    l = "on";
                                if ("x" !== s.axis && (38 === a || 40 === a) || "y" !== s.axis && (37 === a || 39 === a)) {
                                    if ((38 === a || 40 === a) && !o.overflowed[0] || (37 === a || 39 === a) && !o.overflowed[1]) return;
                                    "keyup" === t.type && (l = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), n(l, a))
                                } else if (33 === a || 34 === a) {
                                    if ((o.overflowed[0] || o.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                        Y(i);
                                        var h = 34 === a ? -1 : 1;
                                        if ("x" === s.axis || "yx" === s.axis && o.overflowed[1] && !o.overflowed[0]) var p = "x",
                                            f = Math.abs(c[0].offsetLeft) - .9 * h * d.width();
                                        else var p = "y",
                                            f = Math.abs(c[0].offsetTop) - .9 * h * d.height();
                                        Z(i, f.toString(), {
                                            dir: p,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                                } else if ((35 === a || 36 === a) && !e(document.activeElement).is(u) && ((o.overflowed[0] || o.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                    if ("x" === s.axis || "yx" === s.axis && o.overflowed[1] && !o.overflowed[0]) var p = "x",
                                        f = 35 === a ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                    else var p = "y",
                                        f = 35 === a ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                    Z(i, f.toString(), {
                                        dir: p,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                        }
                    }
                    var i = e(this),
                        o = i.data(n),
                        s = o.opt,
                        r = o.sequential,
                        a = n + "_" + o.idx,
                        l = e("#mCSB_" + o.idx),
                        c = e("#mCSB_" + o.idx + "_container"),
                        d = c.parent(),
                        u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                        h = c.find("iframe"),
                        p = ["blur." + a + " keydown." + a + " keyup." + a];
                    h.length && h.each(function() {
                        e(this).load(function() {
                            R(this) && e(this.contentDocument || this.contentWindow.document).bind(p[0], function(e) {
                                t(e)
                            })
                        })
                    }), l.attr("tabindex", "0").bind(p[0], function(e) {
                        t(e)
                    })
                },
                j = function(t, i, o, s, r) {
                    function a(e) {
                        var i = "stepped" !== h.type,
                            n = r ? r : e ? i ? m / 1.5 : g : 1e3 / 60,
                            o = e ? i ? 7.5 : 40 : 2.5,
                            l = [Math.abs(p[0].offsetTop), Math.abs(p[0].offsetLeft)],
                            d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                            u = "x" === h.dir[0] ? l[1] + h.dir[1] * d[1] * o : l[0] + h.dir[1] * d[0] * o,
                            f = "x" === h.dir[0] ? l[1] + h.dir[1] * parseInt(h.scrollAmount) : l[0] + h.dir[1] * parseInt(h.scrollAmount),
                            v = "auto" !== h.scrollAmount ? f : u,
                            y = s ? s : e ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                            b = !!e;
                        return e && 17 > n && (v = "x" === h.dir[0] ? l[1] : l[0]), Z(t, v.toString(), {
                            dir: h.dir[0],
                            scrollEasing: y,
                            dur: n,
                            onComplete: b
                        }), e ? void(h.dir = !1) : (clearTimeout(h.step), void(h.step = setTimeout(function() {
                            a()
                        }, n)))
                    }

                    function l() {
                        clearTimeout(h.step), K(h, "step"), Y(t)
                    }
                    var c = t.data(n),
                        u = c.opt,
                        h = c.sequential,
                        p = e("#mCSB_" + c.idx + "_container"),
                        f = "stepped" === h.type,
                        m = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                        g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                    switch (i) {
                        case "on":
                            if (h.dir = [o === d[16] || o === d[15] || 39 === o || 37 === o ? "x" : "y", o === d[13] || o === d[15] || 38 === o || 37 === o ? -1 : 1], Y(t), te(o) && "stepped" === h.type) return;
                            a(f);
                            break;
                        case "off":
                            l(), (f || c.tweenRunning && h.dir) && a(!0)
                    }
                },
                W = function(t) {
                    var i = e(this).data(n).opt,
                        o = [];
                    return "function" == typeof t && (t = t()),
                        t instanceof Array ? o = t.length > 1 ? [t[0], t[1]] : "x" === i.axis ? [null, t[0]] : [t[0], null] : (o[0] = t.y ? t.y : t.x || "x" === i.axis ? null : t, o[1] = t.x ? t.x : t.y || "y" === i.axis ? null : t), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
                },
                q = function(t, i) {
                    if (null != t && "undefined" != typeof t) {
                        var o = e(this),
                            s = o.data(n),
                            r = s.opt,
                            a = e("#mCSB_" + s.idx + "_container"),
                            l = a.parent(),
                            c = typeof t;
                        i || (i = "x" === r.axis ? "x" : "y");
                        var d = "x" === i ? a.outerWidth(!1) : a.outerHeight(!1),
                            h = "x" === i ? a[0].offsetLeft : a[0].offsetTop,
                            p = "x" === i ? "left" : "top";
                        switch (c) {
                            case "function":
                                return t();
                            case "object":
                                var f = t.jquery ? t : e(t);
                                if (!f.length) return;
                                return "x" === i ? ie(f)[1] : ie(f)[0];
                            case "string":
                            case "number":
                                if (te(t)) return Math.abs(t);
                                if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                                if (-1 !== t.indexOf("-=")) return Math.abs(h - parseInt(t.split("-=")[1]));
                                if (-1 !== t.indexOf("+=")) {
                                    var m = h + parseInt(t.split("+=")[1]);
                                    return m >= 0 ? 0 : Math.abs(m)
                                }
                                if (-1 !== t.indexOf("px") && te(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                                if ("top" === t || "left" === t) return 0;
                                if ("bottom" === t) return Math.abs(l.height() - a.outerHeight(!1));
                                if ("right" === t) return Math.abs(l.width() - a.outerWidth(!1));
                                if ("first" === t || "last" === t) {
                                    var f = a.find(":" + t);
                                    return "x" === i ? ie(f)[1] : ie(f)[0]
                                }
                                return e(t).length ? "x" === i ? ie(e(t))[1] : ie(e(t))[0] : (a.css(p, t), void u.update.call(null, o[0]))
                        }
                    }
                },
                X = function(t) {
                    function i() {
                        return clearTimeout(p[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(p[0].autoUpdate = setTimeout(function() {
                            return h.advanced.updateOnSelectorChange && (f = r(), f !== x) ? (a(3), void(x = f)) : (h.advanced.updateOnContentResize && (m = [p.outerHeight(!1), p.outerWidth(!1), v.height(), v.width(), b()[0], b()[1]], (m[0] !== _[0] || m[1] !== _[1] || m[2] !== _[2] || m[3] !== _[3] || m[4] !== _[4] || m[5] !== _[5]) && (a(m[0] !== _[0] || m[1] !== _[1]), _ = m)), h.advanced.updateOnImageLoad && (g = o(), g !== w && (p.find("img").each(function() {
                                s(this)
                            }), w = g)), void((h.advanced.updateOnSelectorChange || h.advanced.updateOnContentResize || h.advanced.updateOnImageLoad) && i()))
                        }, h.advanced.autoUpdateTimeout))
                    }

                    function o() {
                        var e = 0;
                        return h.advanced.updateOnImageLoad && (e = p.find("img").length), e
                    }

                    function s(t) {
                        function i(e, t) {
                            return function() {
                                return t.apply(e, arguments)
                            }
                        }

                        function n() {
                            this.onload = null, e(t).addClass(d[2]), a(2)
                        }
                        if (e(t).hasClass(d[2])) return void a();
                        var o = new Image;
                        o.onload = i(o, n), o.src = t.src
                    }

                    function r() {
                        h.advanced.updateOnSelectorChange === !0 && (h.advanced.updateOnSelectorChange = "*");
                        var t = 0,
                            i = p.find(h.advanced.updateOnSelectorChange);
                        return h.advanced.updateOnSelectorChange && i.length > 0 && i.each(function() {
                            t += e(this).height() + e(this).width()
                        }), t
                    }

                    function a(e) {
                        clearTimeout(p[0].autoUpdate), u.update.call(null, l[0], e)
                    }
                    var l = e(this),
                        c = l.data(n),
                        h = c.opt,
                        p = e("#mCSB_" + c.idx + "_container");
                    if (t) return clearTimeout(p[0].autoUpdate), void K(p[0], "autoUpdate");
                    var f, m, g, v = p.parent(),
                        y = [e("#mCSB_" + c.idx + "_scrollbar_vertical"), e("#mCSB_" + c.idx + "_scrollbar_horizontal")],
                        b = function() {
                            return [y[0].is(":visible") ? y[0].outerHeight(!0) : 0, y[1].is(":visible") ? y[1].outerWidth(!0) : 0]
                        },
                        x = r(),
                        _ = [p.outerHeight(!1), p.outerWidth(!1), v.height(), v.width(), b()[0], b()[1]],
                        w = o();
                    i()
                },
                U = function(e, t, i) {
                    return Math.round(e / t) * t - i
                },
                Y = function(t) {
                    var i = t.data(n),
                        o = e("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
                    o.each(function() {
                        Q.call(this)
                    })
                },
                Z = function(t, i, o) {
                    function s(e) {
                        return l && c.callbacks[e] && "function" == typeof c.callbacks[e]
                    }

                    function r() {
                        return [c.callbacks.alwaysTriggerOffsets || b >= x[0] + w, c.callbacks.alwaysTriggerOffsets || -T >= b]
                    }

                    function a() {
                        var e = [p[0].offsetTop, p[0].offsetLeft],
                            i = [v[0].offsetTop, v[0].offsetLeft],
                            n = [p.outerHeight(!1), p.outerWidth(!1)],
                            s = [h.height(), h.width()];
                        t[0].mcs = {
                            content: p,
                            top: e[0],
                            left: e[1],
                            draggerTop: i[0],
                            draggerLeft: i[1],
                            topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(n[0]) - s[0])),
                            leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(n[1]) - s[1])),
                            direction: o.dir
                        }
                    }
                    var l = t.data(n),
                        c = l.opt,
                        d = {
                            trigger: "internal",
                            dir: "y",
                            scrollEasing: "mcsEaseOut",
                            drag: !1,
                            dur: c.scrollInertia,
                            overwrite: "all",
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0
                        },
                        o = e.extend(d, o),
                        u = [o.dur, o.drag ? 0 : o.dur],
                        h = e("#mCSB_" + l.idx),
                        p = e("#mCSB_" + l.idx + "_container"),
                        f = p.parent(),
                        m = c.callbacks.onTotalScrollOffset ? W.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                        g = c.callbacks.onTotalScrollBackOffset ? W.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                    if (l.trigger = o.trigger, (0 !== f.scrollTop() || 0 !== f.scrollLeft()) && (e(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), f.scrollTop(0).scrollLeft(0)), "_resetY" !== i || l.contentReset.y || (s("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), "_resetX" !== i || l.contentReset.x || (s("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                        switch (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (s("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (s("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), c.snapAmount && (i = U(i, c.snapAmount, c.snapOffset)), o.dir) {
                            case "x":
                                var v = e("#mCSB_" + l.idx + "_dragger_horizontal"),
                                    y = "left",
                                    b = p[0].offsetLeft,
                                    x = [h.width() - p.outerWidth(!1), v.parent().width() - v.width()],
                                    _ = [i, 0 === i ? 0 : i / l.scrollRatio.x],
                                    w = m[1],
                                    T = g[1],
                                    C = w > 0 ? w / l.scrollRatio.x : 0,
                                    k = T > 0 ? T / l.scrollRatio.x : 0;
                                break;
                            case "y":
                                var v = e("#mCSB_" + l.idx + "_dragger_vertical"),
                                    y = "top",
                                    b = p[0].offsetTop,
                                    x = [h.height() - p.outerHeight(!1), v.parent().height() - v.height()],
                                    _ = [i, 0 === i ? 0 : i / l.scrollRatio.y],
                                    w = m[0],
                                    T = g[0],
                                    C = w > 0 ? w / l.scrollRatio.y : 0,
                                    k = T > 0 ? T / l.scrollRatio.y : 0
                        }
                        _[1] < 0 || 0 === _[0] && 0 === _[1] ? _ = [0, 0] : _[1] >= x[1] ? _ = [x[0], x[1]] : _[0] = -_[0], t[0].mcs || (a(), s("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(p[0].onCompleteTimeout), (l.tweenRunning || !(0 === b && _[0] >= 0 || b === x[0] && _[0] <= x[0])) && (V(v[0], y, Math.round(_[1]), u[1], o.scrollEasing), V(p[0], y, Math.round(_[0]), u[0], o.scrollEasing, o.overwrite, {
                            onStart: function() {
                                o.callbacks && o.onStart && !l.tweenRunning && (s("onScrollStart") && (a(), c.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, S(v), l.cbOffsets = r())
                            },
                            onUpdate: function() {
                                o.callbacks && o.onUpdate && s("whileScrolling") && (a(), c.callbacks.whileScrolling.call(t[0]))
                            },
                            onComplete: function() {
                                if (o.callbacks && o.onComplete) {
                                    "yx" === c.axis && clearTimeout(p[0].onCompleteTimeout);
                                    var e = p[0].idleTimer || 0;
                                    p[0].onCompleteTimeout = setTimeout(function() {
                                        s("onScroll") && (a(), c.callbacks.onScroll.call(t[0])), s("onTotalScroll") && _[1] >= x[1] - C && l.cbOffsets[0] && (a(), c.callbacks.onTotalScroll.call(t[0])), s("onTotalScrollBack") && _[1] <= k && l.cbOffsets[1] && (a(), c.callbacks.onTotalScrollBack.call(t[0])), l.tweenRunning = !1, p[0].idleTimer = 0, S(v, "hide")
                                    }, e)
                                }
                            }
                        }))
                    }
                },
                V = function(e, t, i, n, o, s, r) {
                    function a() {
                        _.stop || (y || f.call(), y = G() - v, l(), y >= _.time && (_.time = y > _.time ? y + h - (y - _.time) : y + h - 1, _.time < y + 1 && (_.time = y + 1)), _.time < n ? _.id = p(a) : g.call())
                    }

                    function l() {
                        n > 0 ? (_.currVal = u(_.time, b, w, n, o), x[t] = Math.round(_.currVal) + "px") : x[t] = i + "px", m.call()
                    }

                    function c() {
                        h = 1e3 / 60, _.time = y + h, p = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                            return l(), setTimeout(e, .01)
                        }, _.id = p(a)
                    }

                    function d() {
                        null != _.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(_.id) : clearTimeout(_.id), _.id = null)
                    }

                    function u(e, t, i, n, o) {
                        switch (o) {
                            case "linear":
                            case "mcsLinear":
                                return i * e / n + t;
                            case "mcsLinearOut":
                                return e /= n, e--, i * Math.sqrt(1 - e * e) + t;
                            case "easeInOutSmooth":
                                return e /= n / 2, 1 > e ? i / 2 * e * e + t : (e--, -i / 2 * (e * (e - 2) - 1) + t);
                            case "easeInOutStrong":
                                return e /= n / 2, 1 > e ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, i / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                            case "easeInOut":
                            case "mcsEaseInOut":
                                return e /= n / 2, 1 > e ? i / 2 * e * e * e + t : (e -= 2, i / 2 * (e * e * e + 2) + t);
                            case "easeOutSmooth":
                                return e /= n, e--, -i * (e * e * e * e - 1) + t;
                            case "easeOutStrong":
                                return i * (-Math.pow(2, -10 * e / n) + 1) + t;
                            case "easeOut":
                            case "mcsEaseOut":
                            default:
                                var s = (e /= n) * e,
                                    r = s * e;
                                return t + i * (.499999999999997 * r * s + -2.5 * s * s + 5.5 * r + -6.5 * s + 4 * e)
                        }
                    }
                    e._mTween || (e._mTween = {
                        top: {},
                        left: {}
                    });
                    var h, p, r = r || {},
                        f = r.onStart || function() {},
                        m = r.onUpdate || function() {},
                        g = r.onComplete || function() {},
                        v = G(),
                        y = 0,
                        b = e.offsetTop,
                        x = e.style,
                        _ = e._mTween[t];
                    "left" === t && (b = e.offsetLeft);
                    var w = i - b;
                    _.stop = 0, "none" !== s && d(), c()
                },
                G = function() {
                    return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                },
                Q = function() {
                    var e = this;
                    e._mTween || (e._mTween = {
                        top: {},
                        left: {}
                    });
                    for (var t = ["top", "left"], i = 0; i < t.length; i++) {
                        var n = t[i];
                        e._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[n].id) : clearTimeout(e._mTween[n].id), e._mTween[n].id = null, e._mTween[n].stop = 1)
                    }
                },
                K = function(e, t) {
                    try {
                        delete e[t]
                    } catch (i) {
                        e[t] = null
                    }
                },
                J = function(e) {
                    return !(e.which && 1 !== e.which)
                },
                ee = function(e) {
                    var t = e.originalEvent.pointerType;
                    return !(t && "touch" !== t && 2 !== t)
                },
                te = function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                ie = function(e) {
                    var t = e.parents(".mCSB_container");
                    return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
                };
            e.fn[i] = function(t) {
                return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
            }, e[i] = function(t) {
                return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
            }, e[i].defaults = s, window[i] = !0, e(window).load(function() {
                e(o)[i](), e.extend(e.expr[":"], {
                    mcsInView: e.expr[":"].mcsInView || function(t) {
                        var i, n, o = e(t),
                            s = o.parents(".mCSB_container");
                        if (s.length) return i = s.parent(), n = [s[0].offsetTop, s[0].offsetLeft], n[0] + ie(o)[0] >= 0 && n[0] + ie(o)[0] < i.height() - o.outerHeight(!1) && n[1] + ie(o)[1] >= 0 && n[1] + ie(o)[1] < i.width() - o.outerWidth(!1)
                    },
                    mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                        var i = e(t).data(n);
                        if (i) return i.overflowed[0] || i.overflowed[1]
                    }
                })
            })
        })
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        var t = -1,
            i = -1,
            n = function(e) {
                return parseFloat(e) || 0
            },
            o = function(t) {
                var i = 1,
                    o = e(t),
                    s = null,
                    r = [];
                return o.each(function() {
                    var t = e(this),
                        o = t.offset().top - n(t.css("margin-top")),
                        a = r.length > 0 ? r[r.length - 1] : null;
                    null === a ? r.push(t) : Math.floor(Math.abs(s - o)) <= i ? r[r.length - 1] = a.add(t) : r.push(t), s = o
                }), r
            },
            s = function(t) {
                var i = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof t ? e.extend(i, t) : ("boolean" == typeof t ? i.byRow = t : "remove" === t && (i.remove = !0), i)
            },
            r = e.fn.matchHeight = function(t) {
                var i = s(t);
                if (i.remove) {
                    var n = this;
                    return this.css(i.property, ""), e.each(r._groups, function(e, t) {
                        t.elements = t.elements.not(n)
                    }), this
                }
                return this.length <= 1 && !i.target ? this : (r._groups.push({
                    elements: this,
                    options: i
                }), r._apply(this, i), this)
            };
        r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = o, r._parse = n, r._parseOptions = s, r._apply = function(t, i) {
            var a = s(i),
                l = e(t),
                c = [l],
                d = e(window).scrollTop(),
                u = e("html").outerHeight(!0),
                h = l.parents().filter(":hidden");
            return h.each(function() {
                var t = e(this);
                t.data("style-cache", t.attr("style"))
            }), h.css("display", "block"), a.byRow && !a.target && (l.each(function() {
                var t = e(this),
                    i = t.css("display");
                "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"), t.data("style-cache", t.attr("style")), t.css({
                    display: i,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), c = o(l), l.each(function() {
                var t = e(this);
                t.attr("style", t.data("style-cache") || "")
            })), e.each(c, function(t, i) {
                var o = e(i),
                    s = 0;
                if (a.target) s = a.target.outerHeight(!1);
                else {
                    if (a.byRow && o.length <= 1) return void o.css(a.property, "");
                    o.each(function() {
                        var t = e(this),
                            i = t.attr("style"),
                            n = t.css("display");
                        "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                        var o = {
                            display: n
                        };
                        o[a.property] = "", t.css(o), t.outerHeight(!1) > s && (s = t.outerHeight(!1)), i ? t.attr("style", i) : t.css("display", "")
                    })
                }
                o.each(function() {
                    var t = e(this),
                        i = 0;
                    a.target && t.is(a.target) || ("border-box" !== t.css("box-sizing") && (i += n(t.css("border-top-width")) + n(t.css("border-bottom-width")), i += n(t.css("padding-top")) + n(t.css("padding-bottom"))), t.css(a.property, s - i + "px"))
                })
            }), h.each(function() {
                var t = e(this);
                t.attr("style", t.data("style-cache") || null)
            }), r._maintainScroll && e(window).scrollTop(d / u * e("html").outerHeight(!0)), this
        }, r._applyDataApi = function() {
            var t = {};
            e("[data-match-height], [data-mh]").each(function() {
                var i = e(this),
                    n = i.attr("data-mh") || i.attr("data-match-height");
                n in t ? t[n] = t[n].add(i) : t[n] = i
            }), e.each(t, function() {
                this.matchHeight(!0)
            })
        };
        var a = function(t) {
            r._beforeUpdate && r._beforeUpdate(t, r._groups), e.each(r._groups, function() {
                r._apply(this.elements, this.options)
            }), r._afterUpdate && r._afterUpdate(t, r._groups)
        };
        r._update = function(n, o) {
            if (o && "resize" === o.type) {
                var s = e(window).width();
                if (s === t) return;
                t = s
            }
            n ? i === -1 && (i = setTimeout(function() {
                a(o), i = -1
            }, r._throttle)) : a(o)
        }, e(r._applyDataApi);
        var l = e.fn.on ? "on" : "bind";
        e(window)[l]("load", function(e) {
            r._update(!1, e)
        }), e(window)[l]("resize orientationchange", function(e) {
            r._update(!0, e)
        })
    }),
    function(e) {
        function t(t) {
            var i = e(this),
                n = null,
                o = [],
                s = null,
                r = null,
                a = e.extend({
                    rowSelector: "> li",
                    submenuSelector: "*",
                    submenuDirection: "right",
                    tolerance: 75,
                    enter: e.noop,
                    exit: e.noop,
                    activate: e.noop,
                    deactivate: e.noop,
                    exitMenu: e.noop
                }, t),
                l = 3,
                c = 300,
                d = function(e) {
                    o.push({
                        x: e.pageX,
                        y: e.pageY
                    }), o.length > l && o.shift()
                },
                u = function() {
                    r && clearTimeout(r), a.exitMenu(this) && (n && a.deactivate(n), n = null)
                },
                h = function() {
                    r && clearTimeout(r), a.enter(this), g(this)
                },
                p = function() {
                    a.exit(this)
                },
                f = function() {
                    m(this)
                },
                m = function(e) {
                    e != n && (n && a.deactivate(n), a.activate(e), n = e)
                },
                g = function(e) {
                    var t = v();
                    t ? r = setTimeout(function() {
                        g(e)
                    }, t) : m(e)
                },
                v = function() {
                    function t(e, t) {
                        return (t.y - e.y) / (t.x - e.x)
                    }
                    if (!n || !e(n).is(a.submenuSelector)) return 0;
                    var r = i.offset(),
                        l = {
                            x: r.left,
                            y: r.top - a.tolerance
                        },
                        d = {
                            x: r.left + i.outerWidth(),
                            y: l.y
                        },
                        u = {
                            x: r.left,
                            y: r.top + i.outerHeight() + a.tolerance
                        },
                        h = {
                            x: r.left + i.outerWidth(),
                            y: u.y
                        },
                        p = o[o.length - 1],
                        f = o[0];
                    if (!p) return 0;
                    if (f || (f = p), f.x < r.left || f.x > h.x || f.y < r.top || f.y > h.y) return 0;
                    if (s && p.x == s.x && p.y == s.y) return 0;
                    var m = d,
                        g = h;
                    "left" == a.submenuDirection ? (m = u, g = l) : "below" == a.submenuDirection ? (m = h, g = u) : "above" == a.submenuDirection && (m = l, g = d);
                    var v = t(p, m),
                        y = t(p, g),
                        b = t(f, m),
                        x = t(f, g);
                    return v < b && y > x ? (s = p, c) : (s = null, 0)
                };
            i.mouseleave(u).find(a.rowSelector).mouseenter(h).mouseleave(p).click(f), e(document).mousemove(d)
        }
        e.fn.menuAim = function(e) {
            return this.each(function() {
                t.call(this, e)
            }), this
        }
    }(jQuery),
    function(e) {
        function t(t) {
            var i = t || window.event,
                n = [].slice.call(arguments, 1),
                o = 0,
                s = 0,
                r = 0,
                t = e.event.fix(i);
            return t.type = "mousewheel", i.wheelDelta && (o = i.wheelDelta / 120), i.detail && (o = -i.detail / 3), r = o, void 0 !== i.axis && i.axis === i.HORIZONTAL_AXIS && (r = 0, s = -1 * o), void 0 !== i.wheelDeltaY && (r = i.wheelDeltaY / 120), void 0 !== i.wheelDeltaX && (s = -1 * i.wheelDeltaX / 120), n.unshift(t, o, s, r), (e.event.dispatch || e.event.handle).apply(this, n)
        }
        var i = ["DOMMouseScroll", "mousewheel"];
        if (e.event.fixHooks)
            for (var n = i.length; n;) e.event.fixHooks[i[--n]] = e.event.mouseHooks;
        e.event.special.mousewheel = {
            setup: function() {
                if (this.addEventListener)
                    for (var e = i.length; e;) this.addEventListener(i[--e], t, !1);
                else this.onmousewheel = t
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var e = i.length; e;) this.removeEventListener(i[--e], t, !1);
                else this.onmousewheel = null
            }
        }, e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }(jQuery),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";

        function t(t) {
            return !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) !== -1
        }

        function i(t) {
            return e.isFunction(t) || e.isPlainObject(t) ? t : {
                top: t,
                left: t
            }
        }
        var n = e.scrollTo = function(t, i, n) {
            return e(window).scrollTo(t, i, n)
        };
        return n.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        }, e.fn.scrollTo = function(o, s, r) {
            "object" == typeof s && (r = s, s = 0), "function" == typeof r && (r = {
                onAfter: r
            }), "max" === o && (o = 9e9), r = e.extend({}, n.defaults, r), s = s || r.duration;
            var a = r.queue && r.axis.length > 1;
            return a && (s /= 2), r.offset = i(r.offset), r.over = i(r.over), this.each(function() {
                function l(t) {
                    var i = e.extend({}, r, {
                        queue: !0,
                        duration: s,
                        complete: t && function() {
                            t.call(u, p, r)
                        }
                    });
                    h.animate(f, i)
                }
                if (null !== o) {
                    var c, d = t(this),
                        u = d ? this.contentWindow || window : this,
                        h = e(u),
                        p = o,
                        f = {};
                    switch (typeof p) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                                p = i(p);
                                break
                            }
                            p = d ? e(p) : e(p, u);
                        case "object":
                            if (0 === p.length) return;
                            (p.is || p.style) && (c = (p = e(p)).offset())
                    }
                    var m = e.isFunction(r.offset) && r.offset(u, p) || r.offset;
                    e.each(r.axis.split(""), function(e, t) {
                        var i = "x" === t ? "Left" : "Top",
                            o = i.toLowerCase(),
                            s = "scroll" + i,
                            g = h[s](),
                            v = n.max(u, t);
                        if (c) f[s] = c[o] + (d ? 0 : g - h.offset()[o]), r.margin && (f[s] -= parseInt(p.css("margin" + i), 10) || 0, f[s] -= parseInt(p.css("border" + i + "Width"), 10) || 0), f[s] += m[o] || 0, r.over[o] && (f[s] += p["x" === t ? "width" : "height"]() * r.over[o]);
                        else {
                            var y = p[o];
                            f[s] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y
                        }
                        r.limit && /^\d+$/.test(f[s]) && (f[s] = f[s] <= 0 ? 0 : Math.min(f[s], v)), !e && r.axis.length > 1 && (g === f[s] ? f = {} : a && (l(r.onAfterFirst), f = {}))
                    }), l(r.onAfter)
                }
            })
        }, n.max = function(i, n) {
            var o = "x" === n ? "Width" : "Height",
                s = "scroll" + o;
            if (!t(i)) return i[s] - e(i)[o.toLowerCase()]();
            var r = "client" + o,
                a = i.ownerDocument || i.document,
                l = a.documentElement,
                c = a.body;
            return Math.max(l[s], c[s]) - Math.min(l[r], c[r])
        }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
            get: function(t) {
                return e(t.elem)[t.prop]()
            },
            set: function(t) {
                var i = this.get(t);
                if (t.options.interrupt && t._last && t._last !== i) return e(t.elem).stop();
                var n = Math.round(t.now);
                i !== n && (e(t.elem)[t.prop](n), t._last = this.get(t))
            }
        }, n
    }),
    function(e) {
        jQuery.fn.extend({
            slimScroll: function(i) {
                var n = e.extend({
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                }, i);
                return this.each(function() {
                    function o(t) {
                        if (u) {
                            t = t || window.event;
                            var i = 0;
                            t.wheelDelta && (i = -t.wheelDelta / 120), t.detail && (i = t.detail / 3), e(t.target || t.srcTarget || t.srcElement).closest("." + n.wrapperClass).is(x.parent()) && s(i, !0), t.preventDefault && !b && t.preventDefault(), b || (t.returnValue = !1)
                        }
                    }

                    function s(e, t, i) {
                        b = !1;
                        var o = e,
                            s = x.outerHeight() - w.outerHeight();
                        t && (o = parseInt(w.css("top")) + e * parseInt(n.wheelStep) / 100 * w.outerHeight(), o = Math.min(Math.max(o, 0), s), o = 0 < e ? Math.ceil(o) : Math.floor(o), w.css({
                            top: o + "px"
                        })), v = parseInt(w.css("top")) / (x.outerHeight() - w.outerHeight()), o = v * (x[0].scrollHeight - x.outerHeight()), i && (o = e, e = o / x[0].scrollHeight * x.outerHeight(), e = Math.min(Math.max(e, 0), s), w.css({
                            top: e + "px"
                        })), x.scrollTop(o), x.trigger("slimscrolling", ~~o), c(), d()
                    }

                    function r() {
                        window.addEventListener ? (this.addEventListener("DOMMouseScroll", o, !1), this.addEventListener("mousewheel", o, !1)) : document.attachEvent("onmousewheel", o)
                    }

                    function a() {
                        window.removeEventListener ? (this.removeEventListener("DOMMouseScroll", o), this.removeEventListener("mousewheel", o)) : document.detachEvent("onmousewheel", o)
                    }

                    function l() {
                        g = Math.max(x.outerHeight() / x[0].scrollHeight * x.outerHeight(), 30), w.css({
                            height: g + "px"
                        });
                        var e = g == x.outerHeight() ? "none" : "block";
                        w.css({
                            display: e
                        })
                    }

                    function c() {
                        l(), clearTimeout(f), v == ~~v ? (b = n.allowPageScroll, y != v && x.trigger("slimscroll", 0 == ~~v ? "top" : "bottom")) : b = !1, y = v, g >= x.outerHeight() ? b = !0 : (w.stop(!0, !0).fadeIn("fast"), n.railVisible && T.stop(!0, !0).fadeIn("fast"))
                    }

                    function d() {
                        n.alwaysVisible || (f = setTimeout(function() {
                            n.disableFadeOut && u || h || p || (w.fadeOut("slow"), T.fadeOut("slow"))
                        }, 1e3))
                    }
                    var u, h, p, f, m, g, v, y, b = !1,
                        x = e(this);
                    if (x.parent().hasClass(n.wrapperClass)) {
                        var _ = x.scrollTop(),
                            w = x.parent().find("." + n.barClass),
                            T = x.parent().find("." + n.railClass);
                        if (l(), e.isPlainObject(i)) {
                            if ("height" in i && "auto" == i.height) {
                                x.parent().css("height", "auto"), x.css("height", "auto");
                                var S = x.parent().parent().height();
                                x.parent().css("height", S), x.css("height", S)
                            }
                            if ("scrollTo" in i) _ = parseInt(n.scrollTo);
                            else if ("scrollBy" in i) _ += parseInt(n.scrollBy);
                            else if ("destroy" in i) return a(), w.remove(), T.remove(), void x.unwrap();
                            s(_, !1, !0)
                        }
                    } else {
                        n.height = "auto" == i.height ? x.parent().height() : i.height, _ = e("<div></div>").addClass(n.wrapperClass).css({
                            position: "relative",
                            overflow: "hidden",
                            width: n.width,
                            height: n.height
                        }), x.css({
                            overflow: "hidden",
                            width: n.width,
                            height: n.height
                        });
                        var T = e("<div></div>").addClass(n.railClass).css({
                                width: n.size,
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                display: n.alwaysVisible && n.railVisible ? "block" : "none",
                                "border-radius": n.railBorderRadius,
                                background: n.railColor,
                                opacity: n.railOpacity,
                                zIndex: 90
                            }),
                            w = e("<div></div>").addClass(n.barClass).css({
                                background: n.color,
                                width: n.size,
                                position: "absolute",
                                top: 0,
                                opacity: n.opacity,
                                display: n.alwaysVisible ? "block" : "none",
                                "border-radius": n.borderRadius,
                                BorderRadius: n.borderRadius,
                                MozBorderRadius: n.borderRadius,
                                WebkitBorderRadius: n.borderRadius,
                                zIndex: 99
                            }),
                            S = "right" == n.position ? {
                                right: n.distance
                            } : {
                                left: n.distance
                            };
                        T.css(S), w.css(S), x.wrap(_), x.parent().append(w), x.parent().append(T), n.railDraggable && w.bind("mousedown", function(i) {
                            var n = e(document);
                            return p = !0, t = parseFloat(w.css("top")), pageY = i.pageY, n.bind("mousemove.slimscroll", function(e) {
                                currTop = t + e.pageY - pageY, w.css("top", currTop), s(0, w.position().top, !1)
                            }), n.bind("mouseup.slimscroll", function(e) {
                                p = !1, d(), n.unbind(".slimscroll")
                            }), !1
                        }).bind("selectstart.slimscroll", function(e) {
                            return e.stopPropagation(), e.preventDefault(), !1
                        }), T.hover(function() {
                            c()
                        }, function() {
                            d()
                        }), w.hover(function() {
                            h = !0
                        }, function() {
                            h = !1
                        }), x.hover(function() {
                            u = !0, c(), d()
                        }, function() {
                            u = !1, d()
                        }), x.bind("touchstart", function(e, t) {
                            e.originalEvent.touches.length && (m = e.originalEvent.touches[0].pageY)
                        }), x.bind("touchmove", function(e) {
                            b || e.originalEvent.preventDefault(), e.originalEvent.touches.length && (s((m - e.originalEvent.touches[0].pageY) / n.touchScrollStep, !0), m = e.originalEvent.touches[0].pageY)
                        }), l(), "bottom" === n.start ? (w.css({
                            top: x.outerHeight() - w.outerHeight()
                        }), s(0, !0)) : "top" !== n.start && (s(e(n.start).position().top, null, !0), n.alwaysVisible || w.hide()), r()
                    }
                }), this
            }
        }), jQuery.fn.extend({
            slimscroll: jQuery.fn.slimScroll
        })
    }(jQuery),
    function(e) {
        var t = {
                topSpacing: 0,
                bottomSpacing: 0,
                className: "is-sticky",
                wrapperClassName: "sticky-wrapper",
                center: !1,
                getWidthFrom: "",
                responsiveWidth: !1
            },
            i = e(window),
            n = e(document),
            o = [],
            s = i.height(),
            r = function() {
                for (var t = i.scrollTop(), r = n.height(), a = r - s, l = t > a ? a - t : 0, c = 0; c < o.length; c++) {
                    var d = o[c],
                        u = d.stickyWrapper.offset().top,
                        h = u - d.topSpacing - l;
                    if (t <= h) null !== d.currentTop && (d.stickyElement.css("width", "").css("position", "").css("top", ""), d.stickyElement.trigger("sticky-end", [d]).parent().removeClass(d.className), d.currentTop = null);
                    else {
                        var p = r - d.stickyElement.outerHeight() - d.topSpacing - d.bottomSpacing - t - l;
                        p < 0 ? p += d.topSpacing : p = d.topSpacing, d.currentTop != p && (d.stickyElement.css("width", d.stickyElement.width()).css("position", "fixed").css("top", p), "undefined" != typeof d.getWidthFrom && d.stickyElement.css("width", e(d.getWidthFrom).width()), d.stickyElement.trigger("sticky-start", [d]).parent().addClass(d.className), d.currentTop = p)
                    }
                }
            },
            a = function() {
                s = i.height();
                for (var t = 0; t < o.length; t++) {
                    var n = o[t];
                    "undefined" != typeof n.getWidthFrom && n.responsiveWidth === !0 && n.stickyElement.css("width", e(n.getWidthFrom).width())
                }
            },
            l = {
                init: function(i) {
                    var n = e.extend({}, t, i);
                    return this.each(function() {
                        var i = e(this),
                            s = i.attr("id"),
                            r = (s ? s + "-" + t.wrapperClassName : t.wrapperClassName, e("<div></div>").attr("id", s + "-sticky-wrapper").addClass(n.wrapperClassName));
                        i.wrapAll(r), n.center && i.parent().css({
                            width: i.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        }), "right" == i.css("float") && i.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        });
                        var a = i.parent();
                        a.css("height", i.outerHeight()), o.push({
                            topSpacing: n.topSpacing,
                            bottomSpacing: n.bottomSpacing,
                            stickyElement: i,
                            currentTop: null,
                            stickyWrapper: a,
                            className: n.className,
                            getWidthFrom: n.getWidthFrom,
                            responsiveWidth: n.responsiveWidth
                        })
                    })
                },
                update: r,
                unstick: function(t) {
                    return this.each(function() {
                        for (var t = e(this), i = -1, n = 0; n < o.length; n++) o[n].stickyElement.get(0) == t.get(0) && (i = n);
                        i != -1 && (o.splice(i, 1), t.unwrap(), t.removeAttr("style"))
                    })
                }
            };
        window.addEventListener ? (window.addEventListener("scroll", r, !1), window.addEventListener("resize", a, !1)) : window.attachEvent && (window.attachEvent("onscroll", r), window.attachEvent("onresize", a)), e.fn.sticky = function(t) {
            return l[t] ? l[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.sticky") : l.init.apply(this, arguments)
        }, e.fn.unstick = function(t) {
            return l[t] ? l[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.sticky") : l.unstick.apply(this, arguments)
        }, e(function() {
            setTimeout(r, 0)
        })
    }(jQuery), ! function(e) {
        var t = e(window);
        e.fn.visible = function(e, i, n) {
            if (!(this.length < 1)) {
                var o = this.length > 1 ? this.eq(0) : this,
                    s = o.get(0),
                    r = t.width(),
                    a = t.height(),
                    n = n ? n : "both",
                    l = i !== !0 || s.offsetWidth * s.offsetHeight;
                if ("function" == typeof s.getBoundingClientRect) {
                    var c = s.getBoundingClientRect(),
                        d = c.top >= 0 && c.top < a,
                        u = c.bottom > 0 && c.bottom <= a,
                        h = c.left >= 0 && c.left < r,
                        p = c.right > 0 && c.right <= r,
                        f = e ? d || u : d && u,
                        m = e ? h || p : h && p;
                    if ("both" === n) return l && f && m;
                    if ("vertical" === n) return l && f;
                    if ("horizontal" === n) return l && m
                } else {
                    var g = t.scrollTop(),
                        v = g + a,
                        y = t.scrollLeft(),
                        b = y + r,
                        x = o.offset(),
                        _ = x.top,
                        w = _ + o.height(),
                        T = x.left,
                        S = T + o.width(),
                        C = e === !0 ? w : _,
                        k = e === !0 ? _ : w,
                        $ = e === !0 ? S : T,
                        P = e === !0 ? T : S;
                    if ("both" === n) return !!l && v >= k && C >= g && b >= P && $ >= y;
                    if ("vertical" === n) return !!l && v >= k && C >= g;
                    if ("horizontal" === n) return !!l && b >= P && $ >= y
                }
            }
        }
    }(jQuery), ! function(e, t) {
        function i(t, i) {
            this.element = t, this.$element = e(this.element), this.options = e.extend({}, r, i), this._defaults = r, this._name = s, this.init()
        }

        function n() {
            return t.innerHeight ? t.innerHeight : e(t).height()
        }

        function o(t) {
            e(t).each(function() {
                var t = new Image;
                t.src = this, t.width > 0 && e("<img />").attr("src", this).addClass("litebox-preload").appendTo("body").hide()
            })
        }
        var s = "liteBox",
            r = {
                revealSpeed: 400,
                background: "rgba(0,0,0,.8)",
                overlayClose: !0,
                escKey: !0,
                navKey: !0,
                closeTip: "tip-l-fade",
                closeTipText: "Close",
                prevTip: "tip-t-fade",
                prevTipText: "Previous",
                nextTip: "tip-t-fade",
                nextTipText: "Next",
                callbackInit: function() {},
                callbackBeforeOpen: function() {},
                callbackAfterOpen: function() {},
                callbackBeforeClose: function() {},
                callbackAfterClose: function() {},
                callbackError: function() {},
                callbackPrev: function() {},
                callbackNext: function() {},
                errorMessage: "Error loading content."
            };
        i.prototype = {
            init: function() {
                var t = this;
                this.$element.on("click", function(e) {
                    e.preventDefault(), t.openLitebox()
                }), keyEsc = 27, keyLeft = 37, keyRight = 39, e("body").off("keyup").on("keyup", function(i) {
                    t.options.escKey && i.keyCode == keyEsc && t.closeLitebox(), t.options.navKey && i.keyCode == keyLeft && e(".litebox-prev").trigger("click"), t.options.navKey && i.keyCode == keyRight && e(".litebox-next").trigger("click")
                }), this.options.callbackInit.call(this)
            },
            openLitebox: function() {
                var t = this;
                this.options.callbackBeforeOpen.call(this), t.buildLitebox();
                var i = this.$element;
                if (t.populateLitebox(i), t.options.overlayClose && $litebox.on("click", function(i) {
                        (i.target === this || e(i.target).hasClass("litebox-container") || e(i.target).hasClass("litebox-error")) && t.closeLitebox()
                    }), $close.on("click", function() {
                        t.closeLitebox()
                    }), this.$element.attr("data-litebox-group")) {
                    var t = this,
                        n = this.$element.attr("data-litebox-group"),
                        s = e('[data-litebox-group="' + this.$element.attr("data-litebox-group") + '"]'),
                        r = [];
                    e('[data-litebox-group="' + n + '"]').each(function() {
                        var t = e(this).attr("href");
                        r.push(t)
                    }), o(r), e(".litebox-nav").show(), $prevNav.off("click").on("click", function() {
                        t.options.callbackPrev.call(this);
                        var n = s.index(i);
                        i = s.eq(n - 1), e(i).length || (i = s.last()), t.populateLitebox(i)
                    }), $nextNav.off("click").on("click", function() {
                        t.options.callbackNext.call(this);
                        var n = s.index(i);
                        i = s.eq(n + 1), e(i).length || (i = s.first()), t.populateLitebox(i)
                    })
                }
                this.options.callbackAfterOpen.call(this)
            },
            buildLitebox: function() {
                $litebox = e("<div>", {
                    "class": "litebox-overlay"
                }), $close = e("<div>", {
                    "class": "litebox-close " + this.options.closeTip,
                    "data-tooltip": this.options.closeTipText
                }), $text = e("<div>", {
                    "class": "litebox-text"
                }), $error = e('<div class="litebox-error"><span>' + this.options.errorMessage + "</span></div>"), $prevNav = e("<div>", {
                    "class": "litebox-nav litebox-prev " + this.options.prevTip,
                    "data-tooltip": this.options.prevTipText
                }), $nextNav = e("<div>", {
                    "class": "litebox-nav litebox-next " + this.options.nextTip,
                    "data-tooltip": this.options.nextTipText
                }), $container = e("<div>", {
                    "class": "litebox-container"
                }), $loader = e("<div>", {
                    "class": "litebox-loader"
                }), e("body").prepend($litebox.css({
                    "background-color": this.options.background
                })), $litebox.append($close, $text, $prevNav, $nextNav, $container), $litebox.fadeIn(this.options.revealSpeed)
            },
            populateLitebox: function(t) {
                var i = this,
                    n = t.attr("href"),
                    o = e(".litebox-content");
                $litebox.append($loader);
                var s = t.attr("data-litebox-text");
                if ("undefined" == typeof s || "" == s ? (e(".litebox-text").removeClass("active"), e(".litebox-text").html()) : (e(".litebox-text").html(s), e(".litebox-text").addClass("active")), null !== n.match(/\.(jpeg|jpg|gif|png|bmp)/i)) {
                    var r = e("<img>", {
                        src: n,
                        "class": "litebox-content"
                    });
                    i.transitionContent("image", o, r), e("img.litebox-content").imagesLoaded(function() {
                        $loader.remove()
                    }), r.error(function() {
                        i.liteboxError(), $loader.remove()
                    })
                } else if (videoURL = n.match(/(youtube|youtu|vimeo|dailymotion|kickstarter)\.(com|be)\/((watch\?v=([-\w]+))|(video\/([-\w]+))|(projects\/([-\w]+)\/([-\w]+))|([-\w]+))/)) {
                    var a = "";
                    if ("youtube" == videoURL[1] && (a = "http://www.youtube.com/v/" + videoURL[5]), "youtu" == videoURL[1] && (a = "http://www.youtube.com/v/" + videoURL[3]), "vimeo" == videoURL[1] && (a = "http://player.vimeo.com/video/" + videoURL[3]), "dailymotion" == videoURL[1] && (a = "https://www.dailymotion.com/embed/video/" + videoURL[7]), "kickstarter" == videoURL[1] && (a = "https://www.kickstarter.com/projects/" + videoURL[9] + "/" + videoURL[10] + "/widget/video.html"), a) {
                        var l = e("<iframe>", {
                            src: a,
                            frameborder: "0",
                            vspace: "0",
                            hspace: "0",
                            scrolling: "no",
                            allowfullscreen: "",
                            "class": "litebox-content",
                            style: "background: #000"
                        });
                        i.transitionContent("embed", o, l), l.load(function() {
                            $loader.remove()
                        })
                    }
                } else if ("#" == n.substring(0, 1)) e(n).length ? ($html = e("<div>", {
                    "class": "litebox-content litebox-inline-html"
                }), $html.append(e(n).clone()), i.transitionContent("inline", o, $html)) : i.liteboxError(), $loader.remove();
                else {
                    var l = e("<iframe>", {
                        src: n,
                        frameborder: "0",
                        vspace: "0",
                        hspace: "0",
                        scrolling: "auto",
                        "class": "litebox-content",
                        allowfullscreen: ""
                    });
                    i.transitionContent("iframe", o, l), l.load(function() {
                        $loader.remove()
                    })
                }
            },
            transitionContent: function(i, n, o) {
                var s = this;
                "inline" != i && $container.removeClass("litebox-scroll"), n.remove(), $container.append(o), "inline" == i && $container.addClass("litebox-scroll"), s.centerContent(), e(t).on("resize", function() {
                    s.centerContent()
                })
            },
            centerContent: function() {
                $litebox.css({
                    height: n()
                }), $container.css({
                    "line-height": $container.height() + "px"
                }), "undefined" != typeof $html && e(".litebox-inline-html").outerHeight() < $container.height() && e(".litebox-inline-html").css({
                    "margin-top": "-" + e(".litebox-inline-html").outerHeight() / 2 + "px",
                    top: "50%"
                })
            },
            closeLitebox: function() {
                this.options.callbackBeforeClose.call(this), $litebox.fadeOut(this.options.revealSpeed, function() {
                    e(".litebox-nav").hide(), $litebox.empty().remove(), e(".litebox-preload").remove()
                }), e(".tipsy").fadeOut(this.options.revealSpeed, function() {
                    e(this).remove()
                }), e(".litebox-prev").off("click"), e(".litebox-next").off("click"), this.options.callbackAfterClose.call(this)
            },
            liteboxError: function() {
                this.options.callbackError.call(this), $container.append($error)
            }
        }, e.fn[s] = function(t) {
            return this.each(function() {
                e.data(this, s) || e.data(this, s, new i(this, t))
            })
        }
    }(jQuery, window, document), + function(e) {
        "use strict";

        function t(i, n) {
            var o, s = e.proxy(this.process, this);
            this.$element = e(e(i).is("body") ? window : i), this.$body = e("body"), this.$scrollElement = this.$element.on("scroll.bs.scrollspy", s), this.options = e.extend({}, t.DEFAULTS, n),
                this.selector = (this.options.target || (o = e(i).attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(), this.process()
        }
        t.DEFAULTS = {
            offset: 10
        }, t.prototype.refresh = function() {
            var t = this.$element[0] == window ? "offset" : "position";
            this.offsets = e([]), this.targets = e([]);
            var i = this;
            this.$body.find(this.selector).map(function() {
                var n = e(this),
                    o = n.data("target") || n.attr("href"),
                    s = /^#./.test(o) && e(o);
                return s && s.length && s.is(":visible") && [
                    [s[t]().top + (!e.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), o]
                ] || null
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).each(function() {
                i.offsets.push(this[0]), i.targets.push(this[1])
            })
        }, t.prototype.process = function() {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight),
                n = i - this.$scrollElement.height(),
                o = this.offsets,
                s = this.targets,
                r = this.activeTarget;
            if (t >= n) return r != (e = s.last()[0]) && this.activate(e);
            if (r && t <= o[0]) return r != (e = s[0]) && this.activate(e);
            for (e = o.length; e--;) r != s[e] && t >= o[e] && (!o[e + 1] || t <= o[e + 1]) && this.activate(s[e])
        }, t.prototype.activate = function(t) {
            this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            var i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                n = e(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        };
        var i = e.fn.scrollspy;
        e.fn.scrollspy = function(i) {
            return this.each(function() {
                var n = e(this),
                    o = n.data("bs.scrollspy"),
                    s = "object" == typeof i && i;
                o || n.data("bs.scrollspy", o = new t(this, s)), "string" == typeof i && o[i]()
            })
        }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
            return e.fn.scrollspy = i, this
        }, e(window).on("load.bs.scrollspy.data-api", function() {
            e('[data-spy="scroll"]').each(function() {
                var t = e(this);
                t.scrollspy(t.data())
            })
        })
    }(jQuery), ! function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        t = function() {
            function t(t, n) {
                var o, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, t) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, o, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0), s.checkResponsive(!0)
            }
            var i = 0;
            return t
        }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (0 > i || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : n === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, i) {
            var n = {},
                o = this;
            o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    e = Math.ceil(e), o.options.vertical === !1 ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), n[o.animType] = o.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, t.prototype.asNavFor = function(t) {
            var i = this,
                n = i.options.asNavFor;
            n && null !== n && (n = e(n).not(i.$slider)), null !== n && "object" == typeof n && n.each(function() {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this;
            e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (0 === e.currentSlide - 1 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
        }, t.prototype.buildArrows = function() {
            var t = this;
            t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (i = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1) i += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
                i += "</ul>", n.$dots = e(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, i, n, o, s, r, a = this;
            if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; o > e; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = e * r + (t * a.options.slidesPerRow + i);
                            s.get(d) && c.appendChild(s.get(d))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.html(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, i) {
            var n, o, s, r = this,
                a = !1,
                l = r.$slider.width(),
                c = window.innerWidth || e(window).width();
            if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                o = null;
                for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (r.originalSettings.mobileFirst === !1 ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
                null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || a === !1 || r.$slider.trigger("breakpoint", [r, a])
            }
        }, t.prototype.changeSlide = function(t, i) {
            var n, o, s, r = this,
                a = e(t.target);
            switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = 0 !== r.slideCount % r.options.slidesToScroll, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i, n = this;
            if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var o in t) {
                    if (e < t[o]) {
                        e = i;
                        break
                    }
                    i = t[o]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.html(e))
        }, t.prototype.clickHandler = function(e) {
            var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.options.arrows === !0 && (i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove())), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            t.cssTransitions === !1 ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (e.options.infinite === !0)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (e.options.centerMode === !0) n = e.slideCount;
            else
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return n - 1
        }, t.prototype.getLeft = function(e) {
            var t, i, n, o = this,
                s = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = -1 * o.slideWidth * o.options.slidesToShow, s = -1 * i * o.options.slidesToShow), 0 !== o.slideCount % o.options.slidesToScroll && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = -1 * (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth, s = -1 * (o.options.slidesToShow - (e - o.slideCount)) * i) : (o.slideOffset = -1 * o.slideCount % o.options.slidesToScroll * o.slideWidth, s = -1 * o.slideCount % o.options.slidesToScroll * i))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? -1 * e * o.slideWidth + o.slideOffset : -1 * e * i + s, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = n[0] ? -1 * n[0].offsetLeft : 0, o.options.centerMode === !0 && (n = o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            var t = this;
            return t.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                o = [];
            for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, i, n, o = this;
            return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, s) {
                return s.offsetLeft - n + e(s).outerWidth() / 2 > -1 * o.swipeLeft ? (i = s, !1) : void 0
            }), t = Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        i = e(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            t.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, n.src = i
                })
            }
            var i, n, o, s, r = this;
            r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = o + r.options.slidesToShow, r.options.fade === !0 && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), t(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), t(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(n))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.paused = !1, e.autoPlay()
        }, t.prototype.postSlide = function(e) {
            var t = this;
            t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.initADA()
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function() {
            var t, i, n = this;
            t = e("img[data-lazy]", n.$slider).length, t > 0 && (i = e("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
                i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition()
            }).error(function() {
                i.removeAttr("data-lazy"), n.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function(t) {
            var i = this,
                n = i.currentSlide;
            i.destroy(!0), e.extend(i, i.initials, {
                currentSlide: n
            }), i.init(), t || i.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, i, n, o = this,
                s = o.options.responsive || null;
            if ("array" === e.type(s) && s.length) {
                o.respondTo = o.options.respondTo || "window";
                for (t in s)
                    if (n = o.breakpoints.length - 1, i = s[t].breakpoint, s.hasOwnProperty(t)) {
                        for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings
                    }
                o.breakpoints.sort(function(e, t) {
                    return o.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), t.options.autoplay === !0 && t.focusHandler()
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var n = this;
            return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e, !(n.slideCount < 1 || 0 > e || e > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, t.prototype.setCSS = function(e) {
            var t, i, n = this,
                o = {};
            n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, i = this;
            i.$slides.each(function(n, o) {
                t = -1 * i.slideWidth * n, i.options.rtl === !0 ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function(t, i, n) {
            var o, s, r = this;
            if ("responsive" === t && "array" === e.type(i))
                for (s in i)
                    if ("array" !== e.type(r.options.responsive)) r.options.responsive = [i[s]];
                    else {
                        for (o = r.options.responsive.length - 1; o >= 0;) r.options.responsive[o].breakpoint === i[s].breakpoint && r.options.responsive.splice(o, 1), o--;
                        r.options.responsive.push(i[s])
                    } else r.options[t] = i;
            n === !0 && (r.unload(), r.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function(e) {
            var t, i, n, o, s = this;
            i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), s.options.centerMode === !0 ? (t = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, i, n, o = this;
            if (o.options.fade === !0 && (o.options.centerMode = !1),
                o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; n > t; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.setPaused = function(e) {
            var t = this;
            t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(n.attr("data-slick-index"));
            return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
        }, t.prototype.slideHandler = function(e, t, i) {
            var n, o, s, r, a = null,
                l = this;
            return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), n = e, a = l.getLeft(n), r = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? r : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
                l.postSlide(n)
            }) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
                l.postSlide(n)
            }) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), o = 0 > n ? 0 !== l.slideCount % l.options.slidesToScroll ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? 0 !== l.slideCount % l.options.slidesToScroll ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), s = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? (l.fadeSlideOut(s), l.fadeSlide(o, function() {
                l.postSlide(o)
            })) : l.postSlide(o), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(a, function() {
                l.postSlide(o)
            }) : l.postSlide(o))))
        }, t.prototype.startLoad = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, i, n, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
        }, t.prototype.swipeEnd = function() {
            var e, t = this;
            if (t.dragging = !1, t.shouldClick = !(t.touchObject.swipeLength > 10), void 0 === t.touchObject.curX) return !1;
            if (t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
                case "left":
                    e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(e), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
                    break;
                case "right":
                    e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(e), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
            } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, i, n, o, s, r = this;
            return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), o = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.swipeLeft = r.options.vertical === !1 ? t + n * o : t + n * (r.$list.height() / r.listWidth) * o, r.options.verticalSwiping === !0 && (r.swipeLeft = t + n * o), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
        }, t.prototype.swipeStart = function(e) {
            var t, i = this;
            return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e, t = this;
            e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function() {
            var e = this;
            document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : e.options.autoplay === !0 && (e.paused = !1, e.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                e(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + t.instanceUid + i
                })
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
                e(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + i,
                    id: "slick-slide" + t.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, t.prototype.activateADA = function() {
            var e = this,
                t = e.$slider.find("*").is(":focus");
            e.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false",
                tabindex: "0"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            }), t && e.$slideTrack.find(".slick-active").focus()
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.on("focus.slick blur.slick", "*", function(i) {
                i.stopImmediatePropagation();
                var n = e(this);
                setTimeout(function() {
                    t.isPlay && (n.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
                }, 0)
            })
        }, e.fn.slick = function() {
            var e, i = this,
                n = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = i.length,
                r = 0;
            for (r; s > r; r++)
                if ("object" == typeof n || "undefined" == typeof n ? i[r].slick = new t(i[r], n) : e = i[r].slick[n].apply(i[r].slick, o), "undefined" != typeof e) return e;
            return i
        }
    }), $(document).ready(function() {
        $(".read-full-bio").click(function(e) {
            e.preventDefault();
            var t = ($("#executive-modal-window"), $("#modal-background"), $("#executive-modal-window .modal-body")),
                i = $(this).closest(".collapse-block").clone();
            t.html(i)
        }), $(".single-post-page").length > 0 && "yes" == $(".single-post-page").data("open-popup") && setTimeout(function() {
            $(".open-popup").trigger("click")
        }, 500), $(".utility-nav li:last-child a").addClass("open-search").append($("<span>Search</span>"))
    });
var disableBrowser = "safari";
$(document).ready(function() {
        function e(e, t) {
            var i = document.getElementById(e),
                n = document.getElementById(e + "_source");
            null != n && (i.muted = !0, n.src = t, i.load())
        }
        var t = getCurrentBrowser();
        if (console.log(t), t != disableBrowser) {
            var i, n, o = "",
                s = "home_video",
                r = [];
            $(".hidden_video_element").each(function(e, t) {
                var i = $(this).data("target"),
                    n = $(this).data("source");
                i == s && r.push(n)
            });
            var a = "single";
            r.length > 0 ? "single" == a ? (i = Math.floor(Math.random() * r.length) + 0, o = r[i], e(s, o), console.log("Setting BKG VIDEO to ", o)) : "cycle" == a && (n = 5e3, i = 0, setInterval(function() {
                o = r[i], e(s, o), console.log("Setting BKG VIDEO to ", o), i++, i > r.length - 1 && (i = 0)
            }, n)) : console.log("No BKG VIDEO")
        }
    }), $(document).ready(function() {
        function e(e, t) {
            var i = $(e);
            i.length > 0 && $(i).css("background-image", "url(" + t + ")")
        }
        var t = getCurrentBrowser();
        if (console.log(t), t == disableBrowser) {
            var i, n = "",
                o = "home_slider",
                s = [];
            $(".hidden_slider_element").each(function(e, t) {
                var i = $(this).data("target"),
                    n = $(this).data("source");
                console.log(i, n), i == o && s.push(n)
            }), s.length > 0 ? (interval = 5e3, n = s[0], e("#" + o, n), i = 1, setInterval(function() {
                n = s[i], e("#" + o, n), i++, i > s.length - 1 && (i = 0)
            }, interval)) : console.log("No BKG SLIDER")
        }
    }), $(document).ready(function() {
        function e() {
            $(".secondary-menu li.menu-item-has-children").each(function() {
                var e = $(this),
                    t = e.offset();
                e.children(".sub-menu").css("padding-left", t.left + "px")
            })
        }

        function t(e) {
            e ? $("#platform-nav-scroll").show() : $("#platform-nav-scroll").hide()
        }
        e(), window.onresize = function(t) {
            e()
        };
        var i = !0,
            n = 0,
            o = 5,
            s = 95,
            r = 0;
        $("#platform-nav-main").length && (r = $("#platform-nav-main").position().top), jQuery(window).scroll(function(e) {
            if ($(window).width() < 991) return $("#header").removeClass("hide-nav-bar"), !1;
            if (i) i = !1;
            else {
                var a = jQuery(this).scrollTop();
                if (Math.abs(n - a) <= o) return;
                r && (r = $("#platform-nav-main").position().top, t(a > r ? !0 : !1)), a < s ? $("#header").removeClass("hide-nav-bar") : ($("#header").removeClass("hide-nav-bar"), a > n ? $("#header").addClass("hide-nav-bar") : $("#header").removeClass("hide-nav-bar")), n = a
            }
        }), jQuery('a[href*="#"]:not([href="#"])').click(function() {
            if (jQuery(this).hasClass("new-overlay-element"));
            else if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = jQuery(this.hash),
                    t = 50;
                if (e = e.length ? e : jQuery("[name=" + this.hash.slice(1) + "]"), e.length) return jQuery("html, body").animate({
                    scrollTop: e.offset().top - t
                }, 1e3), !1
            }
        }), $(window).on("touchmove", function(e) {
            if ($("body").hasClass("push")) return !1
        }), $("#header .nav-bar").on("touchmove", function(e) {
            e.stopPropagation()
        })
    }), c3Cookie = {
        names: {
            demo_popup: "STYXKEY-c3-demo-request-popup"
        },
        create: function(e, t, i) {
            if (i) {
                var n = new Date;
                n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
                var o = "; expires=" + n.toGMTString()
            } else var o = "";
            document.cookie = e + "=" + t + o + "; path=/"
        },
        read: function(e) {
            for (var t = e + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
                for (var o = i[n];
                    " " == o.charAt(0);) o = o.substring(1, o.length);
                if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
            }
            return null
        },
        erase: function(e) {
            createCookie(e, "", -1)
        }
    }, customForm.addModule({
        name: "checkbox",
        selector: 'input[type="checkbox"]',
        defaultOptions: {
            wrapperClass: "chk-area",
            focusClass: "chk-focus",
            checkedClass: "chk-checked",
            labelActiveClass: "chk-label-active",
            uncheckedClass: "chk-unchecked",
            disabledClass: "chk-disabled",
            chkStructure: "<span></span>"
        },
        setupWrapper: function() {
            customForm.lib.addClass(this.fakeElement, this.options.wrapperClass), this.fakeElement.innerHTML = this.options.chkStructure, this.realElement.parentNode.insertBefore(this.fakeElement, this.realElement), customForm.lib.event.add(this.realElement, "click", this.onRealClick, this), this.refreshState()
        },
        onFakePressed: function() {
            customForm.modules[this.name].superclass.onFakePressed.apply(this, arguments), this.realElement.disabled || this.realElement.focus()
        },
        onFakeClick: function(e) {
            return customForm.modules[this.name].superclass.onFakeClick.apply(this, arguments), this.tmpTimer = setTimeout(customForm.lib.bind(function() {
                this.toggle()
            }, this), 10), !1
        },
        onRealClick: function(e) {
            setTimeout(customForm.lib.bind(function() {
                this.refreshState()
            }, this), 10), e.stopPropagation()
        },
        toggle: function(e) {
            return this.realElement.disabled || (this.realElement.checked ? this.realElement.checked = !1 : this.realElement.checked = !0, customForm.lib.fireEvent(this.realElement, "change")), this.refreshState(), !1
        },
        refreshState: function() {
            this.realElement.checked ? (customForm.lib.addClass(this.fakeElement, this.options.checkedClass), customForm.lib.removeClass(this.fakeElement, this.options.uncheckedClass), this.labelFor && customForm.lib.addClass(this.labelFor, this.options.labelActiveClass)) : (customForm.lib.removeClass(this.fakeElement, this.options.checkedClass), customForm.lib.addClass(this.fakeElement, this.options.uncheckedClass), this.labelFor && customForm.lib.removeClass(this.labelFor, this.options.labelActiveClass)), this.realElement.disabled ? (customForm.lib.addClass(this.fakeElement, this.options.disabledClass), this.labelFor && customForm.lib.addClass(this.labelFor, this.options.labelDisabledClass)) : (customForm.lib.removeClass(this.fakeElement, this.options.disabledClass), this.labelFor && customForm.lib.removeClass(this.labelFor, this.options.labelDisabledClass))
        }
    }), $(document).ready(function() {
        setTimeout(function() {
            $(".gform_button").removeAttr("onclick")
        }, 100), $("form .gfield_contains_required input, form .gfield_contains_required select").each(function() {
            var e = $(this);
            e.required = !0, e.prop("required", !0), e.addClass("required")
        }), $("form .ginput_container_phone input").each(function() {
            var e = $(this);
            e.addClass("phone-field"), e.intlTelInput({
                autoPlaceholder: !1,
                nationalMode: !0,
                utilsScript: "/wp-content/themes/c3-energy/public/intl-tel-input/js/utils.js"
            })
        }), $("form .ginput_container_email input").each(function() {
            var e = $(this);
            e.attr("type", "email"), e.addClass("email-field"), e.addClass("business-email")
        }), $("form .ginput_nonbusiness_email input").each(function() {
            var e = $(this);
            e.removeClass("business-email"), e.addClass("nonbusiness-email")
        }), $('form select option[value="optgroup-start"]').each(function() {
            var e = $(this);
            $(e).nextUntil('option[value^="optgroup-end"]').addBack().wrapAll('<optgroup label="' + e[0].label + '"></optgroup>'), $(e).remove()
        }), $('form select option[value="optgroup-end"]').remove(), $("form .column-start").each(function() {
            var e = $(this);
            $(e).nextUntil(".column-start").addBack().wrapAll('<div class="form-column"></div>')
        }), jQuery.validator.addClassRules("phone-field", {
            phone: !0
        }), jQuery.validator.addMethod("phone", function(e, t, i) {
            return /^[()0-9.\-_+ ]*$/i.test(e)
        }, jQuery.validator.format("Please enter a valid phone number")), jQuery.validator.addClassRules("business-email", {
            business_email: !0
        }), jQuery.validator.addMethod("business_email", function(e, t, i) {
            return wretVal = e.indexOf("@gmail.com") == -1 && e.indexOf("@hotmail.com") == -1 && e.indexOf("@yahoo.com") == -1 && e.indexOf("@aol.com") == -1 && e.indexOf("@mac.com") == -1, wretVal
        }, jQuery.validator.format("Please provide a valid business e-mail address")), $(".gform_button").click(function(e) {
            return parentForm = $(this).parents("form"), recaptchaItem = $(parentForm).find(".g-recaptcha"), recaptchaItem.length > 0 && ($("#recaptcha-error").remove(), "" == grecaptcha.getResponse()) ? ($(".g-recaptcha").after('<label id="recaptcha-error" class="error">This field is required.</label>'), !1) : ($("form .ginput_container_phone input").each(function() {
                var e = $(this),
                    t = e.intlTelInput("getNumber");
                e.val(t)
            }), parentForm.validate({
                submitHandler: function(e) {
                    e.submit()
                }
            }), isValid = parentForm.valid(), isValid || e.preventDefault(), isValid)
        }), $("#content-lead").validate({
            rules: {
                "entry[5]": {
                    phoneUS: !0
                }
            },
            submitHandler: function(e) {
                return $.post($(e).attr("action"), $(e).serialize(), function(e) {
                    "success" == e.status ? $.fancybox.close() : alert(e.message)
                }), !1
            }
        })
    }), $(document).bind("gform_post_render", function(e, t, i) {}), jQuery(function(e) {
        trySlick = setInterval(function() {
            return "undefined" == typeof e(".list-products").slick ? void console.log("slick not ready") : (e(".list-products").slick({
                arrows: !1,
                slide: "li",
                dots: !0,
                infinite: !1
            }), void clearInterval(trySlick))
        }, 100)
    }), jQuery(function(e) {
        var t = ".home-slider-section .bxslider";
        console.log("$.bxSlider is defined, loading the slider"), e(t).bxSlider({
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 0,
            pager: !0,
            nextText: "",
            prevText: "",
            startSlide: 0,
            auto: !0,
            autoHover: !0,
            moveSlides: 1
        })
    }), jQuery(function(e) {
        e('.link-grid:not(".no-match-height") div .top-container').matchHeight(), e(".link-grid > div").click(function(t) {
            var i = e(this).find(".bottom-container a.learn-more-link").first();
            console.log(i), i.click(function(e) {
                e.stopPropagation()
            }), i[0].click()
        })
    }), jQuery(document).ready(function(e) {
        e(".btn-load-more-ajax a").on("click", function() {
            var t = e(this),
                i = t.parent().data("target"),
                n = t.parent().data("append-to"),
                o = t.parent().data("load-more");
            return e.get(t.attr("href"), function(s) {
                e(n).append(e(s).find(i));
                var r = e(s).find(o).attr("href");
                r ? t.attr("href", r) : t.parent().hide()
            }), !1
        })
    }), window.Modernizr = function(e, t, i) {
        function n(e) {
            y.cssText = e
        }

        function o(e, t) {
            return typeof e === t
        }

        function s(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function r(e, t) {
            for (var n in e) {
                var o = e[n];
                if (!s(o, "-") && y[o] !== i) return "pfx" != t || o
            }
            return !1
        }

        function a(e, t, n) {
            for (var s in e) {
                var r = t[e[s]];
                if (r !== i) return n === !1 ? e[s] : o(r, "function") ? r.bind(n || t) : r
            }
            return !1
        }

        function l(e, t, i) {
            var n = e.charAt(0).toUpperCase() + e.slice(1),
                s = (e + " " + x.join(n + " ") + n).split(" ");
            return o(t, "string") || o(t, "undefined") ? r(s, t) : (s = (e + " " + _.join(n + " ") + n).split(" "), a(s, t, i))
        }
        var c, d, u, h = "2.7.1",
            p = {},
            f = !0,
            m = t.documentElement,
            g = "modernizr",
            v = t.createElement(g),
            y = v.style,
            b = ({}.toString, "Webkit Moz O ms"),
            x = b.split(" "),
            _ = b.toLowerCase().split(" "),
            w = {},
            T = [],
            S = T.slice,
            C = {}.hasOwnProperty;
        u = o(C, "undefined") || o(C.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return C.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var i = S.call(arguments, 1),
                n = function() {
                    if (this instanceof n) {
                        var o = function() {};
                        o.prototype = t.prototype;
                        var s = new o,
                            r = t.apply(s, i.concat(S.call(arguments)));
                        return Object(r) === r ? r : s
                    }
                    return t.apply(e, i.concat(S.call(arguments)))
                };
            return n
        }), w.csstransitions = function() {
            return l("transition")
        };
        for (var k in w) u(w, k) && (d = k.toLowerCase(), p[d] = w[k](), T.push((p[d] ? "" : "no-") + d));
        return p.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var n in e) u(e, n) && p.addTest(n, e[n]);
                else {
                    if (e = e.toLowerCase(), p[e] !== i) return p;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof f && f && (m.className += " " + (t ? "" : "no-") + e), p[e] = t
                }
                return p
            }, n(""), v = c = null,
            function(e, t) {
                function i(e, t) {
                    var i = e.createElement("p"),
                        n = e.getElementsByTagName("head")[0] || e.documentElement;
                    return i.innerHTML = "x<style>" + t + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function o(e) {
                    var t = v[e[m]];
                    return t || (t = {}, g++, e[m] = g, v[g] = t), t
                }

                function s(e, i, n) {
                    if (i || (i = t), d) return i.createElement(e);
                    n || (n = o(i));
                    var s;
                    return s = n.cache[e] ? n.cache[e].cloneNode() : f.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e), !s.canHaveChildren || p.test(e) || s.tagUrn ? s : n.frag.appendChild(s)
                }

                function r(e, i) {
                    if (e || (e = t), d) return e.createDocumentFragment();
                    i = i || o(e);
                    for (var s = i.frag.cloneNode(), r = 0, a = n(), l = a.length; r < l; r++) s.createElement(a[r]);
                    return s
                }

                function a(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(i) {
                        return y.shivMethods ? s(i, e, t) : t.createElem(i)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(y, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var n = o(e);
                    return y.shivCSS && !c && !n.hasCSS && (n.hasCSS = !!i(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || a(e, n), e
                }
                var c, d, u = "3.7.0",
                    h = e.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, d = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (i) {
                        c = !0, d = !0
                    }
                }();
                var y = {
                    elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: u,
                    shivCSS: h.shivCSS !== !1,
                    supportsUnknownElements: d,
                    shivMethods: h.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: s,
                    createDocumentFragment: r
                };
                e.html5 = y, l(t)
            }(this, t), p._version = h, p._domPrefixes = _, p._cssomPrefixes = x, p.testProp = function(e) {
                return r([e])
            }, p.testAllProps = l, p.prefixed = function(e, t, i) {
                return t ? l(e, t, i) : l(e, "pfx")
            }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + T.join(" ") : ""), p
    }(this, this.document),
    function(e, t, i) {
        function n(e) {
            return "[object Function]" == g.call(e)
        }

        function o(e) {
            return "string" == typeof e
        }

        function s() {}

        function r(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function a() {
            var e = v.shift();
            y = 1, e ? e.t ? f(function() {
                ("c" == e.t ? h.injectCss : h.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), a()) : y = 0
        }

        function l(e, i, n, o, s, l, c) {
            function d(t) {
                if (!p && r(u.readyState) && (b.r = p = 1, !y && a(), u.onload = u.onreadystatechange = null, t)) {
                    "img" != e && f(function() {
                        _.removeChild(u)
                    }, 50);
                    for (var n in k[i]) k[i].hasOwnProperty(n) && k[i][n].onload()
                }
            }
            var c = c || h.errorTimeout,
                u = t.createElement(e),
                p = 0,
                g = 0,
                b = {
                    t: n,
                    s: i,
                    e: s,
                    a: l,
                    x: c
                };
            1 === k[i] && (g = 1, k[i] = []), "object" == e ? u.data = i : (u.src = i, u.type = e), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function() {
                d.call(this, g)
            }, v.splice(o, 0, b), "img" != e && (g || 2 === k[i] ? (_.insertBefore(u, x ? null : m), f(d, c)) : k[i].push(u))
        }

        function c(e, t, i, n, s) {
            return y = 0, t = t || "j", o(e) ? l("c" == t ? T : w, e, t, this.i++, i, n, s) : (v.splice(this.i++, 0, e), 1 == v.length && a()), this
        }

        function d() {
            var e = h;
            return e.loader = {
                load: c,
                i: 0
            }, e
        }
        var u, h, p = t.documentElement,
            f = e.setTimeout,
            m = t.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in p.style,
            x = b && !!t.createRange().compareNode,
            _ = x ? p : m.parentNode,
            p = e.opera && "[object Opera]" == g.call(e.opera),
            p = !!t.attachEvent && !p,
            w = b ? "object" : p ? "script" : "img",
            T = p ? "script" : w,
            S = Array.isArray || function(e) {
                return "[object Array]" == g.call(e)
            },
            C = [],
            k = {},
            $ = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        h = function(e) {
            function t(e) {
                var t, i, n, e = e.split("!"),
                    o = C.length,
                    s = e.pop(),
                    r = e.length,
                    s = {
                        url: s,
                        origUrl: s,
                        prefixes: e
                    };
                for (i = 0; i < r; i++) n = e[i].split("="), (t = $[n.shift()]) && (s = t(s, n));
                for (i = 0; i < o; i++) s = C[i](s);
                return s
            }

            function r(e, o, s, r, a) {
                var l = t(e),
                    c = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = n(o) ? o : o[e] || o[r] || o[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, o, s, r, a) : (k[l.url] ? l.noexec = !0 : k[l.url] = 1, s.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(o) || n(c)) && s.load(function() {
                    d(), o && o(l.origUrl, a, r), c && c(l.origUrl, a, r), k[l.url] = 2
                })))
            }

            function a(e, t) {
                function i(e, i) {
                    if (e) {
                        if (o(e)) i || (u = function() {
                            var e = [].slice.call(arguments);
                            h.apply(this, e), p()
                        }), r(e, u, t, 0, c);
                        else if (Object(e) === e)
                            for (l in a = function() {
                                    var t, i = 0;
                                    for (t in e) e.hasOwnProperty(t) && i++;
                                    return i
                                }(), e) e.hasOwnProperty(l) && (!i && !--a && (n(u) ? u = function() {
                                var e = [].slice.call(arguments);
                                h.apply(this, e), p()
                            } : u[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(h[l])), r(e[l], u, t, l, c))
                    } else !i && p()
                }
                var a, l, c = !!e.test,
                    d = e.load || e.both,
                    u = e.callback || s,
                    h = u,
                    p = e.complete || s;
                i(c ? e.yep : e.nope, !!d), d && i(d)
            }
            var l, c, u = this.yepnope.loader;
            if (o(e)) r(e, 0, u, 0);
            else if (S(e))
                for (l = 0; l < e.length; l++) c = e[l], o(c) ? r(c, 0, u, 0) : S(c) ? h(c) : Object(c) === c && a(c, u);
            else Object(e) === e && a(e, u)
        }, h.addPrefix = function(e, t) {
            $[e] = t
        }, h.addFilter = function(e) {
            C.push(e)
        }, h.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", u = function() {
            t.removeEventListener("DOMContentLoaded", u, 0), t.readyState = "complete"
        }, 0)), e.yepnope = d(), e.yepnope.executeStack = a, e.yepnope.injectJs = function(e, i, n, o, l, c) {
            var d, u, p = t.createElement("script"),
                o = o || h.errorTimeout;
            p.src = e;
            for (u in n) p.setAttribute(u, n[u]);
            i = c ? a : i || s, p.onreadystatechange = p.onload = function() {
                !d && r(p.readyState) && (d = 1, i(), p.onload = p.onreadystatechange = null)
            }, f(function() {
                d || (d = 1, i(1))
            }, o), l ? p.onload() : m.parentNode.insertBefore(p, m)
        }, e.yepnope.injectCss = function(e, i, n, o, r, l) {
            var c, o = t.createElement("link"),
                i = l ? a : i || s;
            o.href = e, o.rel = "stylesheet", o.type = "text/css";
            for (c in n) o.setAttribute(c, n[c]);
            r || (m.parentNode.insertBefore(o, m), f(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, jQuery(document).ready(function() {
        overlay = document.querySelector(".new-overlay"), null != overlay && (enableOverlay(".new-overlay-close"), enableOverlay(".btn-holder .btn-close"), enableOverlay(".trigger-new-overlay"), enableOverlay(".new-overlay"), enableOverlay(".open-popup"), enableOverlay(".open-trial-offer-additional"), enableOverlay(".img-popup"), enableOverlay(".read-full-bio")), $(".video_popup_controller").on("click", function() {
            var e = "";
            e += '<div class="vimeo-video-wrapper">', e += '\t<div id="popup_video_container" data-playing="none">', e += '\t\t<iframe id="overlay_video_iframe" src="https://player.vimeo.com/video/%%video_id%%?autoplay=%%autoplay%%&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', e += "\t</div>", e += "</div>";
            var t = $.extend({}, $(this).data("video")),
                i = ".new-overlay-wrapper",
                n = i + " #popup_video_container",
                o = $(n).data("playing");
            video_id = t.video_vimeo_id, o != video_id ? (autoplay = 1, $(n).data("playing", video_id)) : autoplay = 0, t.vimeo_embed = e, t.vimeo_embed = t.vimeo_embed.replace("%%video_id%%", video_id), t.vimeo_embed = t.vimeo_embed.replace("%%autoplay%%", autoplay), $(i).html(t.vimeo_embed), $(".video_popup_controller").removeClass("active"), $(this).addClass("active")
        })
    }), "path" in Event.prototype || Object.defineProperty(Event.prototype, "path", {
        get: function() {
            for (var e = [], t = this.target; t;) e.push(t), t = t.parentElement;
            return e.indexOf(window) === -1 && e.indexOf(document) === -1 && e.push(document), e.indexOf(window) === -1 && e.push(window), e
        }
    });
var isUriImage = function(e) {
    e = e.split("?")[0];
    var t = e.split("."),
        i = t[t.length - 1],
        n = ["jpg", "jpeg", "tiff", "png", "gif", "bmp"];
    if (n.indexOf(i) !== -1) return !0
};
! function(e) {
    "use strict";

    function t(e) {
        return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
    }

    function i(e, t) {
        var i = n(e, t) ? s : o;
        i(e, t)
    }
    var n, o, s;
    "classList" in document.documentElement ? (n = function(e, t) {
        return e.classList.contains(t)
    }, o = function(e, t) {
        e.classList.add(t)
    }, s = function(e, t) {
        e.classList.remove(t)
    }) : (n = function(e, i) {
        return t(i).test(e.className)
    }, o = function(e, t) {
        n(e, t) || (e.className = e.className + " " + t)
    }, s = function(e, i) {
        e.className = e.className.replace(t(i), " ")
    });
    var r = {
        hasClass: n,
        addClass: o,
        removeClass: s,
        toggleClass: i,
        has: n,
        add: o,
        remove: s,
        toggle: i
    };
    "function" == typeof define && define.amd ? define(r) : e.classie = r
}(window),
function() {
    function e(e) {
        e = e.toLowerCase();
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            if (e.indexOf(n) != -1) return !1
        }
        return !0
    }
    var t = ["@163.", "@aol.", "@asdf.", "@comcast.", "@gmail.", "@hotmail.", "@live.", "@mac.", "@mail.", "@mailinator.", "@mailnator.", "@me.", "@msn.", "@outlook.", "@qq.", "@sbcglobal.", "@yahoo."];
    MktoForms2.whenReady(function(t) {
        t.onValidate(function() {
            var i = t.vals().Email;
            if (i)
                if (e(i)) t.submittable(!0);
                else {
                    t.submittable(!1);
                    var n = t.getFormElem().find("#Email");
                    t.showErrorMessage("Must be a business email account.", n)
                }
        })
    })
}(), $(".form_controller").click(function() {
        var e = $(this).data("target");
        $(this).parents(".options-box-wrapper").toggle(), $(e).fadeIn("slow")
    }), $(document).ready(function() {
        $(".video_controller").on("click", function() {
            var e = '<iframe src="https://player.vimeo.com/video/%%video_id%%?autoplay=%%autoplay%%&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                t = $(this).data("video"),
                i = $(this).data("target"),
                n = $(this).data("header");
            $(n).find("h5").html(t.video_title), $(n).find("p").html(t.video_tag_line);
            var o = $(i).data("playing");
            o != t.video_id ? (autoplay = 1, $(i).data("playing", t.video_id)) : autoplay = 0, t.vimeo_embed = e.replace("%%video_id%%", t.video_id), t.vimeo_embed = t.vimeo_embed.replace("%%autoplay%%", autoplay), $(i).html(t.vimeo_embed), $(".video_controller").removeClass("active"), $(this).addClass("active")
        })
    }), $(document).ready(function() {
        function e() {
            $(".careers-dashboard .cell .val").css("width", ""), $(".careers-dashboard .cell .val").each(function() {
                var e = $(this);
                e.css("width", e.innerWidth())
            })
        }

        function t() {
            var e = 0;
            $(".tabs-section .nav-tabs li a").each(function(t) {
                $(this).height() > e && (e = $(this).height())
            }), $(".tabs-section .nav-tabs li a").css("height", e)
        }

        function i() {
            $(".animations-block, .data-integrator, .slideshow-area").length && (l(), c(), d(), h(), u(), a(), n(), o(), s(), r())
        }

        function n() {
            var e = (window.innerHeight, $(".main-slideshow .container header")),
                t = new ScrollMagic.Controller,
                i = new TimelineMax;
            i.to(e, 15, {
                opacity: 1
            }).to(e, 15, {
                opacity: 0
            }), new ScrollMagic.Scene({
                triggerElement: $(".main-slideshow .container")[0],
                duration: "80%",
                offset: $("#header").outerHeight()
            }).setTween(i).addTo(t)
        }

        function o() {
            var e = (window.innerHeight, $(".main-slideshow footer")),
                t = new ScrollMagic.Controller,
                i = new TimelineMax;
            i.to(e, 1, {
                opacity: 0,
                display: "block",
                "background-color": "transparent"
            }).to(e, 1, {
                opacity: 1,
                display: "block",
                "background-color": "transparent"
            }), new ScrollMagic.Scene({
                triggerElement: $(".main-slideshow")[0],
                duration: "100%",
                offset: 0
            }).setTween(i).addTo(t)
        }

        function s() {
            var e = (window.innerHeight, $(".main-slideshow .slide .trans-bg")),
                t = new ScrollMagic.Controller,
                i = new TimelineMax;
            i.to(e, 20, {
                opacity: 0
            }).to(e, 20, {
                opacity: .8
            }), new ScrollMagic.Scene({
                triggerElement: $(".main-slideshow .container")[0],
                duration: "100%",
                offset: 0
            }).setTween(i).addTo(t)
        }

        function r() {
            var e = (window.innerHeight, $(".fade-arrow")),
                t = new ScrollMagic.Controller,
                i = new TimelineMax;
            i.to(e, 1, {
                opacity: 1
            }).to(e, 1, {
                opacity: 0
            }), new ScrollMagic.Scene({
                triggerElement: $(".main-slideshow .container")[0],
                duration: "80%",
                offset: $("#header").outerHeight()
            }).setTween(i).addTo(t)
        }

        function a() {
            var e = (window.innerHeight, $(".icons img")),
                t = new ScrollMagic.Controller,
                i = new TimelineMax;
            i.to(e, 20, {
                top: "250",
                left: "0"
            }), new ScrollMagic.Scene({
                triggerElement: $(".data-integrator")[0],
                duration: "2500",
                offset: 0
            }).setTween(i).addTo(t)
        }

        function l() {
            var e = $(".animations-block .cloud-1"),
                t = $(".animations-block .cloud-2"),
                i = $(".animations-block .cloud-3"),
                n = $(".animations-block .cloud-4"),
                o = $(".animations-block .cloud-5"),
                s = new TimelineMax({
                    repeat: -1,
                    onReverseComplete: x,
                    onReverseCompleteParams: ["{self}"]
                }),
                r = new TimelineMax({
                    repeat: -1,
                    onReverseComplete: x,
                    onReverseCompleteParams: ["{self}"]
                }),
                a = new TimelineMax({
                    repeat: -1,
                    onReverseComplete: x,
                    onReverseCompleteParams: ["{self}"]
                }),
                l = new TimelineMax({
                    repeat: -1,
                    onReverseComplete: x,
                    onReverseCompleteParams: ["{self}"]
                }),
                c = new TimelineMax({
                    repeat: -1,
                    onReverseComplete: x,
                    onReverseCompleteParams: ["{self}"]
                });
            s.to(e, 4, {
                left: "+=100",
                ease: Power0.easeOut
            }).to(e, 4, {
                left: "-=100",
                ease: Power0.easeOut
            }), r.to(t, 4, {
                left: "+=70",
                ease: Power0.easeOut
            }).to(t, 4, {
                left: "-=70",
                ease: Power0.easeOut
            }), a.to(i, 4, {
                left: "-=50",
                ease: Power0.easeOut
            }).to(i, 4, {
                left: "+=50",
                ease: Power0.easeOut
            }), l.to(n, 4, {
                left: "-=100",
                ease: Power0.easeOut
            }).to(n, 4, {
                left: "+=100",
                ease: Power0.easeOut
            }), c.to(o, 4, {
                left: "-=100",
                ease: Power0.easeOut
            }).to(o, 4, {
                left: "+=100",
                ease: Power0.easeOut
            })
        }

        function c() {}

        function d() {
            var e = $(".animations-block .signal-1, .animations-block .aircraft .signal, .animations-block .aircraft-2 .signal, .signal1"),
                t = $(".animations-block .signal-2, .animations-block .signal-8, .animations-block .signal-14, .signal-001"),
                i = $(".animations-block .signal-3, .animations-block .signal-9, .animations-block .signal-15, .signal-002"),
                n = $(".animations-block .signal-4, .animations-block .signal-16, .signal-003"),
                o = $(".animations-block .signal-5, .animations-block .signal-11, .animations-block .signal-17, .signal-004"),
                s = $(".animations-block .signal-6, .animations-block .signal-12, .animations-block .signal-18"),
                r = $(".animations-block .signal-7, .animations-block .signal-13, .animations-block .signal-19"),
                a = new TimelineMax({
                    repeat: -1
                }),
                l = new TimelineMax({
                    repeat: -1
                }),
                c = new TimelineMax({
                    repeat: -1
                }),
                d = new TimelineMax({
                    repeat: -1
                }),
                u = new TimelineMax({
                    repeat: -1
                }),
                h = new TimelineMax({
                    repeat: -1
                }),
                p = new TimelineMax({
                    repeat: -1
                });
            a.from(e, .5, {
                scale: 0,
                repeat: -1,
                repeatDelay: 1,
                yoyo: !0
            }, "+=1"), l.to(t, .5, {
                scale: 0,
                repeat: -1,
                repeatDelay: 2,
                yoyo: !0
            }, "+=2"), c.from(i, .5, {
                scale: 0,
                repeat: -1,
                repeatDelay: 3,
                yoyo: !0
            }, "+=1"), d.from(n, .5, {
                scale: 0,
                repeat: -1,
                repeatDelay: 2,
                yoyo: !0
            }, "+=2"), u.to(o, .5, {
                scale: 0,
                repeat: -1,
                repeatDelay: 2,
                yoyo: !0
            }, "+=3"), h.from(s, .5, {
                scale: 0,
                repeat: -1,
                repeatDelay: 3,
                yoyo: !0
            }, "+=1"), p.from(r, .5, {
                scale: 0,
                repeat: -1,
                repeatDelay: 2,
                yoyo: !0
            }, "+=3")
        }

        function u() {
            var e = $(".animations-block .oil-rocking .part-1"),
                t = $(".animations-block .oil-rocking .part-2"),
                i = ($(".animations-block .oil-rocking .part-3"), $(".animations-block .oil-rocking .part-3")),
                n = $(".animations-block .oil-rocking .part-4"),
                o = $(".animations-block .oil-rocking .part-5"),
                s = new TimelineMax({
                    repeat: -1
                }),
                r = new TimelineMax({
                    repeat: -1
                }),
                a = new TimelineMax({
                    repeat: -1,
                    onReverseComplete: x,
                    onReverseCompleteParams: ["{self}"]
                }),
                l = new TimelineMax({
                    repeat: -1,
                    onReverseComplete: x,
                    onReverseCompleteParams: ["{self}"]
                }),
                c = new TimelineMax({
                    repeat: -1,
                    onReverseComplete: x,
                    onReverseCompleteParams: ["{self}"]
                });
            s.to(e, 3, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 27,
                        y: 27
                    }, {
                        x: 0,
                        y: 54
                    }, {
                        x: -27,
                        y: 27
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), r.to(t, 3, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 27,
                        y: 27
                    }, {
                        x: 0,
                        y: 54
                    }, {
                        x: -27,
                        y: 27
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), c.to(i, 1.5, {
                rotation: "+=30deg",
                repeat: -1,
                yoyo: !0,
                ease: Linear.easeNone
            }, "+=0.3"), a.to(n, 1.5, {
                rotation: "-=40deg"
            }).to(n, 1.5, {
                rotation: "+=40deg"
            }), l.to(o, 1.5, {
                left: "+=3"
            }).to(o, 1.5, {
                left: "-=3"
            })
        }

        function h() {
            var e = $(".point.anim-1"),
                t = $(".point.anim-2"),
                i = $(".point.anim-3"),
                n = $(".point.anim-33"),
                o = $(".point.anim-4"),
                s = $(".point.anim-5"),
                r = $(".point.anim-44"),
                a = $(".point.anim-55"),
                l = $(".point.anim-555"),
                c = $(".point.anim-6"),
                d = $(".point.anim-7"),
                u = $(".point.anim-8"),
                h = $(".point.anim-88"),
                p = $(".point.anim-9"),
                f = $(".point.anim-10"),
                m = $(".point.anim-11"),
                g = $(".point.anim-12"),
                v = $(".point.anim-13"),
                y = $(".point.anim-14"),
                b = $(".point.anim-15"),
                x = $(".point.anim-16"),
                _ = $(".point.anim-17"),
                w = $(".point.anim-18"),
                T = $(".point.anim-19"),
                S = $(".point.anim-20"),
                C = $(".point.anim-21"),
                k = $(".point.anim-22"),
                P = $(".point.anim-23"),
                E = $(".point.anim-24"),
                A = $(".point.anim-25"),
                M = $(".point.anim-26"),
                F = $(".point.anim-27"),
                O = $(".point.anim-28"),
                L = $(".point.anim-29"),
                R = $(".point.anim-001"),
                D = $(".point.anim-002"),
                I = $(".point.anim-003"),
                z = $(".point.anim-004"),
                N = $(".point.anim-005"),
                B = $(".point.anim-006"),
                H = $(".point.anim-007"),
                j = $(".point.anim-008"),
                W = $(".point.anim-009"),
                q = $(".point.anim-2-1"),
                X = $(".point.anim-2-2"),
                U = $(".point.anim-2-3"),
                Y = $(".point.anim-2-4"),
                Z = $(".point.anim-2-5"),
                V = $(".point.anim-2-6"),
                G = $(".point.anim-2-7"),
                Q = $(".point.anim-2-8"),
                K = $(".point.anim-2-9"),
                J = $(".point.anim-2-10"),
                ee = $(".point.anim-3-1"),
                te = $(".point.anim-3-2"),
                ie = $(".point.anim-3-3"),
                ne = $(".point.anim-3-4"),
                oe = $(".point.anim-3-5"),
                se = $(".point.anim-3-6"),
                re = $(".point.anim-3-7"),
                ae = $(".point.anim-3-8"),
                le = $(".point.anim-3-9"),
                ce = $(".point.anim-3-10"),
                de = new TimelineMax({
                    repeat: -1
                }),
                ue = new TimelineMax({
                    repeat: -1
                }),
                he = new TimelineMax({
                    repeat: -1
                }),
                pe = new TimelineMax({
                    repeat: -1
                }),
                fe = new TimelineMax({
                    repeat: -1
                }),
                me = new TimelineMax({
                    repeat: -1
                }),
                ge = new TimelineMax({
                    repeat: -1
                }),
                ve = new TimelineMax({
                    repeat: -1
                }),
                ye = new TimelineMax({
                    repeat: -1
                }),
                be = new TimelineMax({
                    repeat: -1
                }),
                xe = new TimelineMax({
                    repeat: -1
                }),
                _e = new TimelineMax({
                    repeat: -1
                }),
                we = new TimelineMax({
                    repeat: -1
                }),
                Te = new TimelineMax({
                    repeat: -1
                }),
                Se = new TimelineMax({
                    repeat: -1
                }),
                Ce = new TimelineMax({
                    repeat: -1
                }),
                ke = new TimelineMax({
                    repeat: -1
                }),
                $e = new TimelineMax({
                    repeat: -1
                }),
                Pe = new TimelineMax({
                    repeat: -1
                }),
                Ee = new TimelineMax({
                    repeat: -1
                }),
                Ae = new TimelineMax({
                    repeat: -1
                }),
                Me = new TimelineMax({
                    repeat: -1
                }),
                Fe = new TimelineMax({
                    repeat: -1
                }),
                Oe = new TimelineMax({
                    repeat: -1
                }),
                Le = new TimelineMax({
                    repeat: -1
                }),
                Re = new TimelineMax({
                    repeat: -1
                }),
                De = new TimelineMax({
                    repeat: -1
                }),
                Ie = new TimelineMax({
                    repeat: -1
                }),
                ze = new TimelineMax({
                    repeat: -1
                }),
                Ne = new TimelineMax({
                    repeat: -1
                }),
                Be = new TimelineMax({
                    repeat: -1
                }),
                He = new TimelineMax({
                    repeat: -1
                }),
                je = new TimelineMax({
                    repeat: -1
                }),
                We = new TimelineMax({
                    repeat: -1
                }),
                qe = new TimelineMax({
                    repeat: -1
                }),
                Xe = new TimelineMax({
                    repeat: -1
                }),
                Ue = new TimelineMax({
                    repeat: -1
                }),
                Ye = new TimelineMax({
                    repeat: -1
                }),
                Ze = new TimelineMax({
                    repeat: -1
                });
            tl55 = new TimelineMax({
                repeat: -1
            }), tl555 = new TimelineMax({
                repeat: -1
            }), tl44 = new TimelineMax({
                repeat: -1
            }), tl33 = new TimelineMax({
                repeat: -1
            }), tl2_1 = new TimelineMax({
                repeat: -1
            }), tl2_2 = new TimelineMax({
                repeat: -1
            }), tl2_3 = new TimelineMax({
                repeat: -1
            }), tl2_4 = new TimelineMax({
                repeat: -1
            }), tl2_5 = new TimelineMax({
                repeat: -1
            }), tl2_6 = new TimelineMax({
                repeat: -1
            }), tl2_7 = new TimelineMax({
                repeat: -1
            }), tl2_8 = new TimelineMax({
                repeat: -1
            }), tl2_9 = new TimelineMax({
                repeat: -1
            }), tl2_10 = new TimelineMax({
                repeat: -1
            }), tl3_1 = new TimelineMax({
                repeat: -1
            }), tl3_2 = new TimelineMax({
                repeat: -1
            }), tl3_3 = new TimelineMax({
                repeat: -1
            }), tl3_4 = new TimelineMax({
                repeat: -1
            }), tl3_5 = new TimelineMax({
                repeat: -1
            }), tl3_6 = new TimelineMax({
                repeat: -1
            }), tl3_7 = new TimelineMax({
                repeat: -1
            }), tl3_8 = new TimelineMax({
                repeat: -1
            }), tl3_9 = new TimelineMax({
                repeat: -1
            }), tl3_10 = new TimelineMax({
                repeat: -1
            }), tl2_1.from(q, 9, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 338,
                        y: -338
                    }, {
                        x: 0,
                        y: -676
                    }, {
                        x: -338,
                        y: -338
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl2_2.from(X, 7, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 338,
                        y: -338
                    }, {
                        x: 0,
                        y: -676
                    }, {
                        x: -338,
                        y: -338
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl2_3.from(U, 10, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 422,
                        y: -391
                    }, {
                        x: 0,
                        y: -782
                    }, {
                        x: -422,
                        y: -391
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl2_4.from(Y, 8, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 422,
                        y: -391
                    }, {
                        x: 0,
                        y: -782
                    }, {
                        x: -422,
                        y: -391
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl2_5.from(Z, 12, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 433,
                        y: -380
                    }, {
                        x: 0,
                        y: -760
                    }, {
                        x: -433,
                        y: -380
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl2_6.from(V, 8, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 433,
                        y: -380
                    }, {
                        x: 0,
                        y: -760
                    }, {
                        x: -433,
                        y: -380
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl2_7.from(G, 13, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 457,
                        y: -457
                    }, {
                        x: 0,
                        y: -914
                    }, {
                        x: -457,
                        y: -457
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl2_8.from(Q, 9, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 457,
                        y: -457
                    }, {
                        x: 0,
                        y: -914
                    }, {
                        x: -457,
                        y: -457
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl2_9.to(K, 4, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 418,
                        y: -394
                    }, {
                        x: 0,
                        y: -788
                    }, {
                        x: -418,
                        y: -394
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl2_10.to(J, 6, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 418,
                        y: -394
                    }, {
                        x: 0,
                        y: -788
                    }, {
                        x: -418,
                        y: -394
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl3_1.from(ee, 3, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 338,
                        y: -338
                    }, {
                        x: 0,
                        y: -676
                    }, {
                        x: -338,
                        y: -338
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl3_2.from(te, 5, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 338,
                        y: -338
                    }, {
                        x: 0,
                        y: -676
                    }, {
                        x: -338,
                        y: -338
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl3_3.from(ie, 3, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 422,
                        y: -391
                    }, {
                        x: 0,
                        y: -782
                    }, {
                        x: -422,
                        y: -391
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl3_4.from(ne, 5, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 422,
                        y: -391
                    }, {
                        x: 0,
                        y: -782
                    }, {
                        x: -422,
                        y: -391
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl3_5.from(oe, 3, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 433,
                        y: -380
                    }, {
                        x: 0,
                        y: -760
                    }, {
                        x: -433,
                        y: -380
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl3_6.from(se, 5, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 433,
                        y: -380
                    }, {
                        x: 0,
                        y: -760
                    }, {
                        x: -433,
                        y: -380
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl3_7.from(re, 5, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 457,
                        y: -457
                    }, {
                        x: 0,
                        y: -914
                    }, {
                        x: -457,
                        y: -457
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl3_8.from(ae, 8, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 457,
                        y: -457
                    }, {
                        x: 0,
                        y: -914
                    }, {
                        x: -457,
                        y: -457
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl3_9.to(le, 8, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 418,
                        y: -394
                    }, {
                        x: 0,
                        y: -788
                    }, {
                        x: -418,
                        y: -394
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl3_10.to(ce, 10, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 418,
                        y: -394
                    }, {
                        x: 0,
                        y: -788
                    }, {
                        x: -418,
                        y: -394
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), de.from(h, 3, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 338,
                        y: 338
                    }, {
                        x: 0,
                        y: 676
                    }, {
                        x: -338,
                        y: 338
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), ue.to(e, 8, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 422,
                        y: 391
                    }, {
                        x: 0,
                        y: 782
                    }, {
                        x: -422,
                        y: 391
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), he.from(t, 10, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 422,
                        y: 391
                    }, {
                        x: 0,
                        y: 782
                    }, {
                        x: -422,
                        y: 391
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), pe.from(i, 13, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 422,
                        y: 391
                    }, {
                        x: 0,
                        y: 782
                    }, {
                        x: -422,
                        y: 391
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl33.to(n, 6, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 422,
                        y: 391
                    }, {
                        x: 0,
                        y: 782
                    }, {
                        x: -422,
                        y: 391
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), fe.to(o, 7, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 433,
                        y: 380
                    }, {
                        x: 0,
                        y: 760
                    }, {
                        x: -433,
                        y: 380
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), me.from(s, 10, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 433,
                        y: 380
                    }, {
                        x: 0,
                        y: 760
                    }, {
                        x: -433,
                        y: 380
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl44.to(r, 4, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 433,
                        y: 380
                    }, {
                        x: 0,
                        y: 760
                    }, {
                        x: -433,
                        y: 380
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl55.from(a, 13, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 433,
                        y: 380
                    }, {
                        x: 0,
                        y: 760
                    }, {
                        x: -433,
                        y: 380
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), tl555.from(l, 9, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 433,
                        y: 380
                    }, {
                        x: 0,
                        y: 760
                    }, {
                        x: -433,
                        y: 380
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), ge.to(c, 8, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 418,
                        y: 394
                    }, {
                        x: 0,
                        y: 788
                    }, {
                        x: -418,
                        y: 394
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), ve.from(d, 5, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 418,
                        y: 394
                    }, {
                        x: 0,
                        y: 788
                    }, {
                        x: -418,
                        y: 394
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), ye.from(u, 12, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 338,
                        y: 338
                    }, {
                        x: 0,
                        y: 676
                    }, {
                        x: -338,
                        y: 338
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), be.to(p, 12, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 262,
                        y: 240
                    }, {
                        x: 0,
                        y: 480
                    }, {
                        x: -262,
                        y: 240
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), xe.from(f, 8, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 262,
                        y: 240
                    }, {
                        x: 0,
                        y: 480
                    }, {
                        x: -262,
                        y: 240
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), _e.from(m, 8, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 287,
                        y: 267
                    }, {
                        x: 0,
                        y: 534
                    }, {
                        x: -287,
                        y: 267
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), we.to(g, 6, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 287,
                        y: 267
                    }, {
                        x: 0,
                        y: 534
                    }, {
                        x: -287,
                        y: 267
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Te.to(v, 5, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 266,
                        y: 255
                    }, {
                        x: 0,
                        y: 510
                    }, {
                        x: -266,
                        y: 255
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Se.from(y, 12, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 266,
                        y: 255
                    }, {
                        x: 0,
                        y: 510
                    }, {
                        x: -266,
                        y: 255
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Ce.from(b, 10, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 285,
                        y: 285
                    }, {
                        x: 0,
                        y: 570
                    }, {
                        x: -285,
                        y: 285
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), ke.from(x, 11, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 208,
                        y: 208
                    }, {
                        x: 0,
                        y: 416
                    }, {
                        x: -208,
                        y: 208
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), $e.from(_, 8, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 452,
                        y: 452
                    }, {
                        x: 0,
                        y: 904
                    }, {
                        x: -452,
                        y: 452
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Pe.to(w, 11, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 498,
                        y: 498
                    }, {
                        x: 0,
                        y: 996
                    }, {
                        x: -498,
                        y: 498
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Ee.from(T, 5, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 498,
                        y: 498
                    }, {
                        x: 0,
                        y: 996
                    }, {
                        x: -498,
                        y: 498
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Ae.to(S, 6, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 477,
                        y: 477
                    }, {
                        x: 0,
                        y: 954
                    }, {
                        x: -477,
                        y: 477
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Me.from(C, 10, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 477,
                        y: 477
                    }, {
                        x: 0,
                        y: 954
                    }, {
                        x: -477,
                        y: 477
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Fe.from(k, 8, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 477,
                        y: 477
                    }, {
                        x: 0,
                        y: 954
                    }, {
                        x: -477,
                        y: 477
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Oe.to(P, 12, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 477,
                        y: 477
                    }, {
                        x: 0,
                        y: 954
                    }, {
                        x: -477,
                        y: 477
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Le.to(E, 9, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 477,
                        y: 477
                    }, {
                        x: 0,
                        y: 954
                    }, {
                        x: -477,
                        y: 477
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Re.from(A, 5, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 477,
                        y: 477
                    }, {
                        x: 0,
                        y: 954
                    }, {
                        x: -477,
                        y: 477
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), De.from(M, 6, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 505,
                        y: 505
                    }, {
                        x: 0,
                        y: 1010
                    }, {
                        x: -505,
                        y: 505
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Ie.to(F, 9, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 477,
                        y: 477
                    }, {
                        x: 0,
                        y: 954
                    }, {
                        x: -477,
                        y: 477
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), ze.from(O, 17, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 477,
                        y: 477
                    }, {
                        x: 0,
                        y: 954
                    }, {
                        x: -477,
                        y: 477
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Ne.to(L, 4, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 498,
                        y: 498
                    }, {
                        x: 0,
                        y: 996
                    }, {
                        x: -498,
                        y: 498
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Be.to(R, 9, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 457,
                        y: 457
                    }, {
                        x: 0,
                        y: 914
                    }, {
                        x: -457,
                        y: 457
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), He.from(D, 5, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 457,
                        y: 457
                    }, {
                        x: 0,
                        y: 914
                    }, {
                        x: -457,
                        y: 457
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), je.to(I, 7, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 457,
                        y: 457
                    }, {
                        x: 0,
                        y: 914
                    }, {
                        x: -457,
                        y: 457
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), We.from(z, 11, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 457,
                        y: 457
                    }, {
                        x: 0,
                        y: 914
                    }, {
                        x: -457,
                        y: 457
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), qe.from(N, 6, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 338,
                        y: 338
                    }, {
                        x: 0,
                        y: 676
                    }, {
                        x: -338,
                        y: 338
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Ye.to(j, 9, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 338,
                        y: 338
                    }, {
                        x: 0,
                        y: 676
                    }, {
                        x: -338,
                        y: 338
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Xe.from(B, 5, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 422,
                        y: 391
                    }, {
                        x: 0,
                        y: 782
                    }, {
                        x: -422,
                        y: 391
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Ue.from(H, 7, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 418,
                        y: 394
                    }, {
                        x: 0,
                        y: 788
                    }, {
                        x: -418,
                        y: 394
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            }), Ze.to(W, 10, {
                bezier: {
                    curviness: 1.5,
                    values: [{
                        x: 418,
                        y: 394
                    }, {
                        x: 0,
                        y: 788
                    }, {
                        x: -418,
                        y: 394
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Linear.easeNone
            })
        }

        function p() {
            var e = $(window).width();
            return e <= 481 ? wret = 2 : e <= 768 ? wret = 1 : wret = 0, wret
        }

        function f() {
            var e, t = $("#secondary-nav").outerWidth(),
                i = $("#secondary-nav > .container").outerWidth();
            e = t > 0 && i > 0 && t - i > 0 ? (t - i) / 2 * -1 : 0, $("#secondary-nav .sub-menu").css("left", e + "px")
        }

        function m(e) {
            var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            return popupWidth = .8 * t, popupWidth > 1100 && (popupWidth = 1100), "height" == e ? retVal = .5625 * popupWidth : retVal = popupWidth, retVal
        }

        function g() {
            var e = $(".search-box");
            e.slideUp(300)
        }

        function v() {
            var e = _("section");
            "customer-engagement" == e && $(".nav-tabs li:last-child a").trigger("click");
            var t = _("box");
            t && ($("#" + t + " .opener").trigger("click"), $.scrollTo($("#" + t), 800, {
                offset: -250
            }))
        }

        function y() {
            _("print") && window.print()
        }
        $(document.body).on("mouseup touchend", function(e) {
            var t = $(".info-accordion .box.open"),
                i = $(".fancybox-opened"),
                n = $(".fancybox-overlay");
            t.is(e.target) || 0 !== t.has(e.target).length || i.is(e.target) || 0 !== i.has(e.target).length || n.is(e.target) || 0 !== n.has(e.target).length || t.find(".btn-close").trigger("click")
        }), t(), $(window).resize(function() {
            t()
        }), setTimeout(function() {
            e()
        }, 1e3), $(window).resize(function() {
            e()
        }), $(".counter").each(function(e) {
            var t = $(this),
                i = t.data("min"),
                n = t.data("max"),
                o = t.data("speed"),
                s = t.data("refresh-interval"),
                r = t.data("format");
            t.countTo({
                from: i,
                to: n,
                speed: o,
                refreshInterval: s,
                formatter: function(e, t) {
                    return e = e.toFixed(t.decimals), "comma" == r && (e = e.replace(/\B(?=(\d{3})+(?!\d))/g, ",")), "sqft" == r && (e += " sq ft"), e
                }
            })
        });
        var b = window.location.hash;
        b.indexOf("box-") > -1 && (b = b.replace("box", "link"), $("#header").addClass("hide-nav-bar"), open_career_description($(b))), $(".info-accordion .opener").click(function() {
            return open_career_description($(this)), !1
        }), $(window).resize(function() {
            $(".info-accordion .collapse-block").closest(".box")[0] && setTimeout(function() {
                $(".info-accordion .collapse-block").each(function() {
                    var e = $(this).closest(".box");
                    $(this).css({
                        width: $(".info-accordion").width() - 2 * parseInt(e.css("padding-left")),
                        "margin-left": $(".info-accordion").offset().left - e.offset().left
                    })
                })
            }, 100)
        }), $(".info-accordion .box:first").find(".btn-prev").addClass("disabled"), $(".info-accordion .box").last().find(".btn-next").addClass("disabled"), $(".screenshot-box .btn-next").click(function() {
            if (!$(this).hasClass("disabled")) {
                var e = $(this).closest(".box").next();
                e.siblings(".box").removeClass("open").find(".collapse-block").hide().promise().done(function() {
                    e.addClass("open").find(".collapse-block").css({
                        width: $(".info-accordion").width() - 2 * parseInt(e.css("padding-left")),
                        "margin-left": $(".info-accordion").offset().left - e.offset().left
                    }).stop().fadeIn()
                })
            }
            return $(".btn-prev").removeClass("disabled"), $(".info-accordion .box:first-child").find(".btn-prev").addClass("disabled"), $(".info-accordion .box:last-child").find(".btn-next").addClass("disabled"), !1
        }), $(".screenshot-box .btn-prev").click(function() {
            var e = $(this).closest(".box").prev();
            return e.siblings(".box").removeClass("open").find(".collapse-block").hide().promise().done(function() {
                e.addClass("open").find(".collapse-block").css({
                    width: $(".info-accordion").width() - 2 * parseInt(e.css("padding-left")),
                    "margin-left": $(".info-accordion").offset().left - e.offset().left
                }).stop().fadeIn()
            }), !1
        }), $(".info-accordion .collapse-block .btn-close").click(function() {
            return $(this).closest(".collapse-block").slideUp(), $(this).closest(".box").removeClass("open"), !1
        });
        var x = function(e) {
            e.reverse(0)
        };
        i(), appear({
                elements: function() {
                    return document.getElementsByClassName("appear")
                },
                appear: function(e) {
                    var t = $(e);
                    t.addClass("active")
                },
                bounds: 0,
                reappear: !0
            }), appear({
                elements: function() {
                    return document.getElementsByClassName("products-area")
                },
                appear: function(e) {
                    $(e);
                    $(".products-nav").addClass("visible")
                },
                disappear: function(e) {
                    $(e);
                    $(".products-nav").removeClass("visible")
                },
                bounds: -100,
                reappear: !0
            }), $(".products .section ul a, .products-list .nav-tabs a").each(function() {
                var e = $(this).text().split(" ").join("</span> <span>");
                e = "<span>" + e + "</span>", $(this).html(e)
            }), $(".products-list .nav-tabs li a").on("click", function() {
                var e = $(this).data("url");
                e && (window.location = e)
            }), $(".visual, .animations-block .bg, .visual-intro, .testimonial-block, .illustration").each(function(e) {
                var t = $(this).find("> img");
                t.length > 0 && ($(this).css("background-image", "url(" + t.attr("src") + ")"), t.hide())
            }), $(".visual-intro .video").each(function(e) {
                var t = $(this).find("> img");
                t.length > 0 && ($(this).css("background-image", "url(" + t.attr("src") + ")"), $(this).css("background-size", "cover"), t.hide())
            }), $(".platform-slider").slick({
                infinite: !1
            }), setTimeout(function() {
                $("[data-equal-height]").each(function() {
                    var e = $(this).data("equal-height");
                    $(this).find(e).matchHeight()
                })
            }, 200),
            function() {
                var e = $("#wrapper"),
                    t = $(".btn-menu");
                e.append('<span class="overlay"></span>'), t.click(function() {
                    return $(this).toggleClass("active"), $("body").toggleClass("push"), !1
                }), $(document).on("click", ".overlay", function() {
                    t.click()
                })
            }(), $(".job-slideshow").slick({
                dots: !0,
                infinite: !0,
                speed: 500,
                fade: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: !1,
                useCSS: !1,
                cssEase: "linear",
                slide: ".slide",
                pauseOnHover: !0,
                appendArrows: $(".job-slideshow .controls .arrows"),
                appendDots: $(".job-slideshow .controls .dots")
            }), $(".popup-tab").each(function(e) {
                var t = $(this).clone();
                $(t).addClass("cloned-tab"), $(t).css("display", "block"), $("#built-in-tools-slideshow").append(t)
            }), $(".cloned-tab").wrap("<div class='slide'></div>"), $("#built-in-tools-slideshow").append('<div class="controls"><div class="dots"></div></div><div class="arrows"></div>').on("init", function() {}).slick({
                dots: !0,
                infinite: !0,
                speed: 500,
                fade: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: !1,
                useCSS: !1,
                cssEase: "linear",
                slide: ".slide",
                pauseOnHover: !0,
                appendArrows: $("#built-in-tools-slideshow .arrows"),
                appendDots: $("#built-in-tools-slideshow .controls .dots")
            }), $(".news-section .news-image, .image-block").each(function(e) {
                var t = "url(" + $(this).find("> img").attr("src") + ")";
                $(this).find("> img").attr("src");
                $(this).find("> img").hide(), $(this).css("background-image", t)
            }), $(".info-section").each(function(e) {
                $('<span class="bg-el-image"></span>').appendTo($(this))
            }), setTimeout(function() {
                $(".logos-section .logos").bxSlider({
                    minSlides: 4,
                    maxSlides: 4,
                    slideWidth: 0,
                    ticker: !0,
                    speed: 1e5
                })
            }, 500), setTimeout(function() {
                $(".careers-videos .videos-list").bxSlider({
                    minSlides: 4,
                    maxSlides: 4,
                    slideWidth: 0,
                    pager: !0,
                    nextText: "",
                    prevText: "",
                    startSlide: p()
                })
            }, 500), $(".customer-section").each(function(e) {
                $('<span class="bg-el-image"></span>').appendTo($(this))
            }),
            function() {
                $(".tabs").find(".tab").hide();
                var e = $($(".tabs .tabnav .active > a").attr("target"));
                e.show(), $(".tabs .tabnav ul a").hover(function() {
                    var t = $(this),
                        i = t.parent();
                    return i.hasClass("active") || ($(".tabs .tabnav ul li").removeClass("active"), i.addClass("active"), e = $(t.attr("target")), e.show().siblings(".tab").hide()), !1
                })
            }(),
            function() {
                var e = ".case-studies-tab .tab-inner",
                    t = $($(e + ".active").attr("target"));
                t.addClass("active"), $(e).click(function() {
                    var i = $(this);
                    return i.hasClass("active") || ($(e).removeClass("active"), i.addClass("active"), t = $(i.attr("target")), t.addClass("active").siblings(".tab").removeClass("active")), !1
                })
            }(), $(".tools-section .tabs .tabnav .tab-select a").click(function() {
                return $(".tools-section .tabs .tabnav ul").fadeToggle(300), $(this).parent().toggleClass("active"), !1
            });
        var _ = function(e) {
                var t, i, n = decodeURIComponent(window.location.search.substring(1)),
                    o = n.split("&");
                for (i = 0; i < o.length; i++)
                    if (t = o[i].split("="), t[0] === e) return void 0 === t[1] || t[1];
                return ""
            },
            w = _("action");
        w && ($("*[data-hide]").each(function(e) {
            var t = $(this).data("hide").replace(/^\s\s*/, "").replace(/\s\s*$/, "").split(",");
            t.indexOf(w) > -1 && $(this).hide()
        }), $("*[data-show]").each(function(e) {
            var t = $(this).data("show").replace(/^\s\s*/, "").replace(/\s\s*$/, "").split(",");
            t.indexOf(w) > -1 && $(this).show()
        })), $("*[data-showonclick]").click(function(e) {
            var t = $(this).data("showonclick");
            $(t).show()
        }), $(".tools-section .tabs .tabnav ul a").hover(function() {
            if ($(window).width() <= 767) {
                var e = $(this).html(),
                    t = $(this).attr("class");
                $(".tools-section .tabs .tabnav .tab-select").removeClass("active").find("a").html(e).removeClass().addClass(t), $(".tools-section .tabs .tabnav ul").fadeOut(300)
            }
        }), $(".tabs-nav ul li a, .tabnav ul li a, .nav-tabs li a").on("click", function(e) {
            e.preventDefault()
        }), $("#secondary-nav ul li, .independent-nav ul li").on("click", function(e) {
            var t = $(this).children("a").first();
            t[0].click()
        }), $(".news-carousel").slick({
            dots: !1,
            arrows: !0,
            infinite: !0,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: !1,
            variableWidth: !0,
            useCSS: !1,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    variableWidth: !1,
                    slidesToShow: 2
                }
            }, {
                breakpoint: 991,
                settings: {
                    variableWidth: !1,
                    slidesToShow: 1
                }
            }]
        }), $(".news-article .news-image, .quote-slideshow figure, .photo-gallery li a, .intro-section .img").each(function(e) {
            var t = "url(" + $(this).find("> img").attr("src") + ")";
            $(this).find("> img").attr("src");
            $(this).find("> img").hide(), $(this).css("background-image", t)
        }), $(".careers-dashboard .cell").has("> .table-block").addClass("has-table"), $(".quote-slideshow").slick({
            dots: !0,
            arrows: !1,
            infinite: !0,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !1,
            useCSS: !1,
            fade: !0,
            autoplay: !0,
            autoplaySpeed: 7e3
        }), $(".litebox").liteBox();
        var T, S = $(".products-nav").find("a"),
            C = S.map(function() {
                var e = $($(this).attr("href"));
                if (e.length) return e
            });
        ! function() {
            S.click(function(e) {
                var t = $(this).attr("href"),
                    i = "#" === t ? 0 : $(t).offset().top - 50;
                $("html, body").stop().animate({
                    scrollTop: i
                }, 300), e.preventDefault()
            }), $(window).scroll(function() {
                var e = $(this).scrollTop() + 60,
                    t = C.map(function() {
                        if ($(this).offset().top < e) return this
                    });
                t = t[t.length - 1];
                var i = t && t.length ? t[0].id : "";
                T !== i && (T = i, S.parent().removeClass("active").end().filter('[href="#' + i + '"]').parent().addClass("active"))
            })
        }(), $(".visual-section").each(function(e) {
            var t = "url(" + $(this).find("> img").attr("src") + ")";
            $(this).find("> img").attr("src");
            $(this).find("> img").hide(), $(this).css("background-image", t)
        }), $(".tabs-block .tabs-nav a").hover(function() {
            return $($(this).attr("href")).addClass("active").siblings("div").removeClass("active"), !1
        }), customForm.lib.domReady(function() {
            customForm.customForms.replaceAll()
        }), $(".tabs-section .nav-tabs a").click(function() {
            return $(this).closest("li").toggleClass("active"), $(".tabs-section .nav-tabs li").not($(this).closest("li")).removeClass("active"), $($(this).attr("href")).addClass("active").siblings("div").not(".nav-tabs").removeClass("active"), !1
        }), $(".products-list .nav-tabs a").hover(function() {
            return $(this).closest("li").addClass("active"), $(".products-list .nav-tabs li").not($(this).closest("li")).removeClass("active"), $($(this).attr("href")).addClass("active").siblings("div").not(".nav-tabs").removeClass("active"), !1
        }), $(".data-nav a").on("click", function(e) {
            e.preventDefault();
            var t = $(this).attr("href"),
                i = "#" === t ? 0 : $(t).offset().top - 100;
            $("html, body").stop().animate({
                scrollTop: i
            }, 500)
        }), $(".sub-nav").sticky({
            topSpacing: 100
        }), setTimeout(function() {
            f()
        }, 500), $(window).resize(function() {
            f()
        }), $(".scrollto").on("click", function(e) {
            var t = $(this).attr("href"),
                i = "#" === t ? 0 : $(t).offset().top - 100;
            $("html, body").stop().animate({
                scrollTop: i
            }, 500), e.preventDefault()
        }), $(".iframe-popup").fancybox({
            type: "iframe",
            width: 1200,
            helpers: {
                title: {
                    type: "inside",
                    position: "top"
                }
            }
        }), $(".video-popup").fancybox({
            padding: 0,
            closeBtn: !0,
            wrapCSS: "cf-popup",
            helpers: {
                overlay: {
                    closeClick: !0,
                    speedOut: 200,
                    css: {
                        background: "rgba(0,0,0,0.8)"
                    },
                    locked: !0
                }
            },
            type: "iframe",
            width: m("width"),
            height: m("height")
        }), $(".div-popup").on("click", function(e) {
            e.preventDefault();
            var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            t > 1049 && ($("#built-in-tools-slideshow").css("position", "relative"), $("#built-in-tools-slideshow").css("visibility", "visible"), target = $(this).attr("target"), targetSlide = target.replace("#tab", ""), $("#built-in-tools-slideshow").slick("slickGoTo", targetSlide - 1, !1), displayTabPopup($(this)))
        }), $(".open-popup").on("click", function(e) {
            var t, i;
            e.preventDefault(), i = $(this).data("override-cookie"), formTarget = $(this).data("form-target"), i && (t = getCookie(i)), t ? window.open(t.redirect_url, formTarget) : displayPopup($(this))
        }), $(".popup .btn-close").on("click", function() {
            return $.fancybox.close(), !1
        }), $(".search-box").on("blur", g).on("click", function(e) {
            $(this).find('form input[name="s"]').focus()
        }), $(".open-search").on("click", function(e) {
            e.preventDefault();
            var t = $(".search-box");
            return t.is(":visible") ? t.blur() : t.slideDown(300, function() {
                $(this).find('form input[name="s"]').focus()
            }), !1
        }), $(".scroll-bar").mCustomScrollbar({
            theme: "minimal",
            scrollInertia: 300,
            alwaysShowScrollbar: 2
        });
        parseInt($(".news-item p").css("font-size")), parseInt($(".blog-area p").css("font-size"));
        $(".increase-font-size").on("click", function() {
            current_font_size = parseInt($(".blog-area p").css("font-size")), $(".blog-area p").css("font-size", current_font_size + 2).css("line-height", 1.33 * current_font_size + "px")
        }), $(".decrease-font-size").on("click", function() {
            current_font_size = parseInt($(".blog-area p").css("font-size")), $(".blog-area p").css("font-size", current_font_size - 2).css("line-height", 1.33 * current_font_size + "px")
        }), v(), y();
        var k = $("#back-to-top-button");
        k.length > 0 && $(k).click(function(e) {
            var t = $(this).attr("href"),
                i = "#" === t ? 0 : $(t).offset().top - 50;
            $("html, body").stop().animate({
                scrollTop: i
            }, 600), e.preventDefault()
        })
    }), $(window).scroll(function() {
        $(".products-nav").length && ($(window).scrollTop() > $(".products-nav").offset().top > 0 ? $("#wrapper").addClass("nav-is-fixed") : $("#wrapper").removeClass("nav-is-fixed"))
    }), $(document).on("scroll", function() {
        var e = $("#back-to-top-button");
        if (e.length > 0) {
            var t = $(e).data("height"),
                i = $(this).scrollTop();
            i >= t ? $(e).show() : $(e).hide()
        }
    }),
    function(e) {
        e.fn.tableResponsiveSlick = function(t) {
            function i(t) {
                e(window).width() < 768 ? n || (o.slick(t), n = 1) : n && (o.slick("unslick"), n = 0)
            }
            var n = 0,
                o = this;
            i(t), e(window).resize(function() {
                i(t)
            })
        }, e(".enable-slick").tableResponsiveSlick({
            focusOnSelect: !1
        })
    }(jQuery),
    function(e) {
        e.fn.subnavigationButtons = function() {
            var t = this;
            this.find("li a").each(function(t, i) {
                if (console.log("list"), e(this).next(".sub-menu").length > 0) {
                    var n = e(this).text();
                    e(this).html("<span>" + n + '<i class="arrow"></i></span>'), e(this).find(".arrow").css("cursor", "pointer")
                }
            }), e(document).on("click touch", "i.arrow", function(i) {
                i.preventDefault(), console.log("touched"), e(this).closest("li").hasClass("opened") ? e(this).closest("li").removeClass("opened") : (t.find("li").removeClass("opened"), e(this).closest("li").addClass("opened"))
            })
        }, e("nav#main-nav > ul").subnavigationButtons()
    }(jQuery),
    function(e) {
        function t() {
            var t = 0;
            e(".page-template-trial-offers-blade .trail-box .trail-box-inner").each(function() {
                e(this).height() > t && (t = e(this).height())
            }), e(".page-template-trial-offers-blade .trail-box .trail-box-inner").css("height", t)
        }
        e(document).ready(function() {
            t(), e(window).resize(function() {
                t()
            })
        })
    }(jQuery);