!(function (t) {
  var o = {};
  function i(e) {
    if (o[e]) return o[e].exports;
    var n = (o[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = t),
    (i.c = o),
    (i.d = function (e, n, t) {
      i.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (n, e) {
      if ((1 & e && (n = i(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (i.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var o in n)
          i.d(
            t,
            o,
            function (e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (i.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(n, "a", n), n;
    }),
    (i.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.p = ""),
    i((i.s = 6));
})([
  function (e, n, t) {
    "use strict";
    t.d(n, "a", function () {
      return te;
    });
    t(2);
    function i(e) {
      var n = window.document.createElement("script");
      n.setAttribute("type", "text/javascript"),
        n.setAttribute("src", e),
        window.document.getElementsByTagName("head")[0].appendChild(n);
    }
    function a(e, n) {
      var t,
        o = e;
      for (t in n)
        n[t] &&
          (o.indexOf("?") < 0
            ? (o += "?" + t + "=" + n[t])
            : (o += "&" + t + "=" + n[t]));
      return o;
    }
    var r = "AlipayClient",
      c = "yssApp",
      u = "miniProgram",
      s = "ycsmy",
      o = { app: "hnymt", alipay: "hnymt-alipay", wechat: "hnymt-wechat" },
      l = { app: "yss", alipay: "yss-alipay", wechat: "yss-wechat" },
      f = "ycsmy-ios",
      d = "ycsmy-android";
    function p(o, i, r) {
      var a, c;
      return (
        1 === r ? (a = 0) : 2 === r && (c = null),
        function () {
          var e,
            n = this,
            t = arguments;
          1 === r
            ? ((e = Date.now()), i < e - a && (o.apply(n, t), (a = e)))
            : 2 === r &&
              (c =
                c ||
                setTimeout(function () {
                  (c = null), o.apply(n, t);
                }, i));
        }
      );
    }
    function h(e) {
      return -1 < window.navigator.userAgent.indexOf(e);
    }
    function g(e, n) {
      (n = n || window.location.href),
        (e = e.replace(/[\\[]/, "\\\\[").replace(/[\]]/, "\\\\]"));
      n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(n);
      return null == n ? null : n[1];
    }
    function y(e) {
      return e === o.app || e === l.app;
    }
    function w(e) {
      return e === d || e === f;
    }
    function m(e) {
      var n,
        t = [o.alipay, l.alipay];
      for (n in t) if (e === t[n]) return 1;
    }
    function v(e) {
      var n,
        t = [o.wechat, l.wechat];
      for (n in t) if (e === t[n]) return 1;
    }
    var b = {},
      A = !1;
    function C(t) {
      var o =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      return new Promise(function (e, n) {
        A ||
          ((A = !0),
          h(r) &&
            (window.my.onMessage = function (e) {
              b[e.action] && (b[e.action](e.data), delete b[e.action]);
            })),
          (b[t] = e);
        e = { data: { action: t, payload: o } };
        h(r) ? my.postMessage(e) : h(u);
      });
    }
    function O() {
      return new Promise(function (n, e) {
        (function e() {
          window.my
            ? n()
            : setTimeout(function () {
                e();
              }, 100);
        })();
      });
    }
    function S(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var T = 0,
      B = (function () {
        function n() {
          !(function (e) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this);
        }
        var e, t, o;
        return (
          (e = n),
          (t = [
            {
              key: "call",
              value: function (e) {
                var n =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  t = 2 < arguments.length ? arguments[2] : void 0;
                if ("faceCertification" === e) {
                  if (new Date().getTime() - T < 3e3) return;
                  T = new Date().getTime();
                }
                C(e, n).then(function (e) {
                  t && t(e);
                });
              },
            },
          ]) && S(e.prototype, t),
          o && S(e, o),
          n
        );
      })();
    function j(n, e) {
      var t,
        o = Object.keys(n);
      return (
        Object.getOwnPropertySymbols &&
          ((t = Object.getOwnPropertySymbols(n)),
          e &&
            (t = t.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
          o.push.apply(o, t)),
        o
      );
    }
    function x(o) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? j(Object(i), !0).forEach(function (e) {
              var n, t;
              (n = o),
                (e = i[(t = e)]),
                t in n
                  ? Object.defineProperty(n, t, {
                      value: e,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[t] = e);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
          : j(Object(i)).forEach(function (e) {
              Object.defineProperty(
                o,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return o;
    }
    function P(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function k() {
      return new Promise(function (n, e) {
        (function e() {
          window.wx
            ? n()
            : setTimeout(function () {
                e();
              }, 100);
        })();
      });
    }
    function J() {
      window.OnecodeJSBridge &&
        (window.OnecodeJSBridge.userAgent = function () {
          var e = null;
          return (
            w(g("source"))
              ? (e = g("source"))
              : h(c) || y(g("source"))
              ? (e = o.app)
              : h(r) || m(g("source"))
              ? (e = o.alipay)
              : (h(u) || v(g("source"))) && (e = o.hnymtWeixin),
            e
          );
        });
    }
    var H = 0,
      M = (function () {
        function n() {
          !(function (e) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this);
        }
        var e, t, o;
        return (
          (e = n),
          (t = [
            {
              key: "call",
              value: function (e) {
                var n =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  t = 2 < arguments.length ? arguments[2] : void 0,
                  o = 3 < arguments.length ? arguments[3] : void 0;
                switch (e) {
                  case "faceCertification":
                    if (new Date().getTime() - H < 3e3) return;
                    (H = new Date().getTime()), D(e, n, t, o);
                    break;
                  case "pushNewWindow":
                  case "exitApp":
                  case "logout":
                  case "login":
                  case "jumpCode":
                  case "jumpMine":
                  case "backToHome":
                  case "showMapRoute":
                  case "requestPay":
                    E(e, n, t, o);
                    break;
                  case "setEnterpriseInfo":
                    _(e, n, t, o);
                    break;
                  case "getUserTags":
                    R(t);
                    break;
                  default:
                    C(e, n)
                      .then(function (e) {
                        t && t(e);
                      })
                      .catch(function (e) {
                        o(e);
                      });
                }
              },
            },
          ]) && P(e.prototype, t),
          o && P(e, o),
          n
        );
      })(),
      _ = function (e, n, t, o) {
        wx.miniProgram.postMessage({ data: { action: e, payload: n } }),
          setTimeout(function () {
            E(e, n, t, o);
          }, 500);
      },
      D = function (e, n, t, o) {
        for (var i in n) n[i] = encodeURIComponent(n[i]);
        wx.miniProgram.navigateTo({
          url: a("/pages/verifyface/verifyface", n),
          success: function (e) {
            t(e);
          },
          fail: function (e) {
            o(e);
          },
        });
      },
      E = function (e, n, t, o) {
        var i = {};
        if (n) for (var r in n) i[r] = encodeURIComponent(n[r]);
        wx.miniProgram.navigateTo({
          url: a("/pages/wxdialog/wxdialog", x({ action: e }, i)),
          success: function (e) {
            t(e);
          },
          fail: function (e) {
            o(e);
          },
        });
      },
      R = function (e) {
        e({});
      };
    function z(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function I() {
      return new Promise(function (n, e) {
        (function e() {
          window.AlipayJSBridge
            ? n()
            : setTimeout(function () {
                e();
              }, 100);
        })();
      });
    }
    var N = 0,
      Y = (function () {
        function n() {
          !(function (e) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this);
        }
        var e, t, o;
        return (
          (e = n),
          (t = [
            {
              key: "call",
              value: function (e) {
                var n =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  t = 2 < arguments.length ? arguments[2] : void 0;
                if ("faceCertification" === e) {
                  if (new Date().getTime() - N < 3e3) return;
                  N = new Date().getTime();
                }
                "exitApp" === e
                  ? (window.AlipayJSBridge.call("popWindow", n, t),
                    window.AlipayJSBridge.call("exitApp", n, t))
                  : window.AlipayJSBridge.call(e, n, t);
              },
            },
          ]) && z(e.prototype, t),
          o && z(e, o),
          n
        );
      })();
    function L(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var W = (function () {
      function n() {
        !(function (e) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        })(this);
      }
      var e, t, o;
      return (
        (e = n),
        (t = [
          {
            key: "closeWindow",
            value: function (e) {
              this.call("exitApp");
            },
          },
          {
            key: "setTitle",
            value: function (n) {
              this.call("setTitle", { title: n.title }, function (e) {
                console.log("setTitle callback"),
                  n.onResponse && n.onResponse(e);
              });
            },
          },
        ]) && L(e.prototype, t),
        o && L(e, o),
        n
      );
    })();
    function q(e) {
      return (q =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function F(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function U(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function Z(e, n, t) {
      return n && U(e.prototype, n), t && U(e, t), e;
    }
    function G(e, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(n && n.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        n && K(e, n);
    }
    function K(e, n) {
      return (K =
        Object.setPrototypeOf ||
        function (e, n) {
          return (e.__proto__ = n), e;
        })(e, n);
    }
    function Q(t) {
      var o = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var e,
          n = V(t);
        return (
          (e = o
            ? ((e = V(this).constructor), Reflect.construct(n, arguments, e))
            : n.apply(this, arguments)),
          (n = this),
          !(e = e) || ("object" !== q(e) && "function" != typeof e)
            ? (function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(n)
            : e
        );
      };
    }
    function V(e) {
      return (V = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var X = 0;
    function $(e) {
      return (
        e.urlType || (e.urlType = "online"),
        !1 === e.requireLogin ? (e.requireLogin = !1) : (e.requireLogin = !0),
        e.ssoType || (e.ssoType = "hnymt"),
        (e.requireFace = !!e.requireFace),
        e.appUrlType && (e.appUrlType = e.urlType),
        e
      );
    }
    var ee = (function () {
      G(n, W);
      var e = Q(n);
      function n() {
        return F(this, n), e.apply(this, arguments);
      }
      return (
        Z(n, [
          {
            key: "call",
            value: function (e) {
              var n =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                t = 2 < arguments.length ? arguments[2] : void 0;
              if ("faceCertification" === e) {
                if (new Date().getTime() - X < 3e3) return;
                X = new Date().getTime();
              }
              ("pushNewWindow" !== e && "redirectWindow" !== e) ||
                ((n = $(n)), console.log("pushNewWindow", n)),
                "getAuthCode" === e && (n.ssoType = "hnymt"),
                "exitApp" === e
                  ? (window.AlipayJSBridge.call("popWindow", n, t),
                    window.AlipayJSBridge.call("exitApp", n, t))
                  : window.AlipayJSBridge.call(e, n, t);
            },
          },
        ]),
        n
      );
    })();
    function ne(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var te = (function () {
      function n(e) {
        !(function (e) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        })(this),
          (this.doc = window.document),
          (this.startPageY = 0),
          (this.endPageY = 0),
          (this.touceTime = 10),
          (this.timeFn = null),
          (this.showTime = 1e3),
          (this.isHideCode = !!e.isHideCode),
          this.initData();
      }
      var e, t, o;
      return (
        (e = n),
        (t = [
          {
            key: "htmlTplJoin",
            value: function () {
              !(function (e, n) {
                var t = document.createElement("div"),
                  o = null,
                  i = document.createDocumentFragment();
                t.innerHTML = e;
                for (var r = 0, a = (o = t.childNodes).length; r < a; r += 1)
                  i.appendChild(o[r].cloneNode(!0));
                n.appendChild(i), (i = o = null);
              })(
                '<div id="szhnOneCode" class="szhnHighCode">\n        <div class="szhnHighCode-fab" id="SZHN_FAB_ID">\n          <img class="szhnHighCode-fab__img" src="https://onecode-bucket.digitalhainan.com.cn/app/img-20200824105143532b8.png" alt="">\n        </div>\n      </div>\n    ',
                window.document.body
              );
            },
          },
          {
            key: "initData",
            value: function () {
              this.loadJsDepend(),
                this.isHideCode ||
                  (function (e) {
                    var n,
                      t = [l.app, l.alipay, l.wechat];
                    for (n in t) if (e === t[n]) return 1;
                  })(g("source", window.location.href)) ||
                  (this.htmlTplJoin(), this.bindHandle()),
                this.mountMethods().then(function () {
                  console.log("OnecodeJSBridge init end"),
                    setTimeout(function () {
                      document.dispatchEvent(new Event("onecode-ready"));
                    }, 50);
                });
            },
          },
          {
            key: "loadJsDepend",
            value: function () {
              h(r)
                ? i("https://appx/web-view.min.js")
                : h(u) && i("https://res.wx.qq.com/open/js/jweixin-1.6.0.js");
            },
          },
          {
            key: "appInitMethodMount",
            value: function (e) {
              console.log("wait AlipayJSBridge ready"),
                I().then(function () {
                  (window.OnecodeJSBridge = new Y()), J(), e();
                });
            },
          },
          {
            key: "alipayInitMethodMount",
            value: function (e) {
              console.log("start init OnecodeJSBridge"),
                O()
                  .then(function () {
                    console.log("check getSystemInfo"),
                      C("getSystemInfo", {}).then(function () {
                        (window.OnecodeJSBridge = new B()), J(), e();
                      });
                  })
                  .catch(function (e) {
                    console.log("OnecodeJSBridge鍒濆鍖栧け璐�", e);
                  });
            },
          },
          {
            key: "wechatInitMethodMount",
            value: function (e) {
              console.log("init WeixinMiniReady"),
                k()
                  .then(function () {
                    console.log("WeixinMiniReady 2"),
                      (window.OnecodeJSBridge = new M()),
                      J(),
                      e();
                  })
                  .catch(function (e) {
                    console.log("OnecodeJSBridge鍒濆鍖栧け璐�", e);
                  });
            },
          },
          {
            key: "mountMethods",
            value: function () {
              return (
                console.log("OnecodeJSBridge init begin... "),
                new Promise(function (e, n) {
                  h(s) || w(g("source"))
                    ? (console.log("wait ycsmy AlipayJSBridge ready"),
                      I().then(function () {
                        (window.YcsmyJSBridge = new ee()),
                          (window.OnecodeJSBridge = window.YcsmyJSBridge),
                          (window.eshimin = window.YcsmyJSBridge),
                          J(),
                          e();
                      }))
                    : h(c) || y(g("source"))
                    ? (console.log("wait app AlipayJSBridge ready"),
                      I().then(function () {
                        (window.OnecodeJSBridge = new Y()), J(), e();
                      }))
                    : h(r) || m(g("source"))
                    ? (console.log("start init OnecodeJSBridge"),
                      O()
                        .then(function () {
                          console.log("check getSystemInfo"),
                            C("getSystemInfo", {}).then(function () {
                              (window.OnecodeJSBridge = new B()), J(), e();
                            });
                        })
                        .catch(function (e) {
                          console.log("OnecodeJSBridge鍒濆鍖栧け璐�", e);
                        }))
                    : h(u) || v(g("source"))
                    ? (console.log("init WeixinMiniReady"),
                      k()
                        .then(function () {
                          console.log("WeixinMiniReady 2"),
                            (window.OnecodeJSBridge = new M()),
                            J(),
                            e();
                        })
                        .catch(function (e) {
                          console.log("OnecodeJSBridge鍒濆鍖栧け璐�", e);
                        }))
                    : (function (e) {
                        (e =
                          0 < arguments.length && void 0 !== e
                            ? e
                            : "璇峰湪鏀粯瀹濆皬绋嬪簭鎴栬€呮槸妞扮渷浜媋pp涓墦寮€"),
                          console.warn(e);
                      })(
                        "OnecodeJSBridge鍒濆鍖栧け璐�, 璇峰湪鐮佷笂鍔炰簨灏忕▼搴忔垨鑰呮槸app涓墦寮€"
                      );
                })
              );
            },
          },
          {
            key: "bindHandle",
            value: function () {
              var n = this,
                e = this.doc.querySelector("#SZHN_FAB_ID");
              this.wetherScroll(),
                e.addEventListener("click", function (e) {
                  e.preventDefault(), n.jumpCodePageHandle();
                });
            },
          },
          {
            key: "jumpCodePageHandle",
            value: function () {
              window.OnecodeJSBridge.call("backToHome", { index: 3 });
            },
          },
          {
            key: "wetherScroll",
            value: function () {
              var n = this,
                t = this;
              this.doc.addEventListener(
                "touchstart",
                p(
                  function (e) {
                    e = e.targetTouches[0];
                    n.startPageY = e.pageY;
                  },
                  t.touceTime,
                  1
                )
              ),
                this.doc.addEventListener(
                  "touchmove",
                  p(
                    function (e) {
                      e = e.targetTouches[0];
                      (t.endPageY = e.pageY), (t.showTime = 1e3);
                      e = Math.abs(t.endPageY - t.startPageY);
                      t.startPageY !== e &&
                        1 < e &&
                        (e = n.doc.querySelector("#SZHN_FAB_ID")) &&
                        (e.classList.contains("is-touch") ||
                          e.classList.add("is-touch"));
                    },
                    t.touceTime,
                    1
                  )
                ),
                this.doc.addEventListener("touchend", function () {
                  clearTimeout(n.timeFn),
                    (n.timeFn = setTimeout(function () {
                      var e = n.doc.querySelector("#SZHN_FAB_ID");
                      e &&
                        (e.classList.remove("is-touch"),
                        (n.startPageY = n.endPageY = 0));
                    }, n.showTime));
                });
            },
          },
        ]) && ne(e.prototype, t),
        o && ne(e, o),
        n
      );
    })();
  },
  function (e, n, t) {
    "use strict";
    e.exports = function (t) {
      var u = [];
      return (
        (u.toString = function () {
          return this.map(function (e) {
            var n = (function (e, n) {
              var t = e[1] || "",
                o = e[3];
              if (!o) return t;
              if (n && "function" == typeof btoa) {
                (e = (function (e) {
                  (e = btoa(unescape(encodeURIComponent(JSON.stringify(e))))),
                    (e =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        e
                      ));
                  return "/*# ".concat(e, " */");
                })(o)),
                  (n = o.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(o.sourceRoot || "")
                      .concat(e, " */");
                  }));
                return [t].concat(n).concat([e]).join("\n");
              }
              return [t].join("\n");
            })(e, t);
            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (u.i = function (e, n, t) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (t)
            for (var i = 0; i < this.length; i++) {
              var r = this[i][0];
              null != r && (o[r] = !0);
            }
          for (var a = 0; a < e.length; a++) {
            var c = [].concat(e[a]);
            (t && o[c[0]]) ||
              (n &&
                (c[2]
                  ? (c[2] = "".concat(n, " and ").concat(c[2]))
                  : (c[2] = n)),
              u.push(c));
          }
        }),
        u
      );
    };
  },
  function (e, n, t) {
    var o = t(3),
      i = t(4),
      t = { insert: "head", singleton: !1 };
    o(
      (i =
        "string" == typeof (i = i.__esModule ? i.default : i)
          ? [[e.i, i, ""]]
          : i),
      t
    );
    e.exports = i.locals || {};
  },
  function (e, n, i) {
    "use strict";
    var t,
      o,
      c = function () {
        return (t =
          void 0 === t
            ? Boolean(window && document && document.all && !window.atob)
            : t);
      },
      r =
        ((o = {}),
        function (e) {
          if (void 0 === o[e]) {
            var n = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            o[e] = n;
          }
          return o[e];
        }),
      s = [];
    function l(e) {
      for (var n = -1, t = 0; t < s.length; t++)
        if (s[t].identifier === e) {
          n = t;
          break;
        }
      return n;
    }
    function u(e, n) {
      for (var t = {}, o = [], i = 0; i < e.length; i++) {
        var r = e[i],
          a = n.base ? r[0] + n.base : r[0],
          c = t[a] || 0,
          u = "".concat(a, " ").concat(c);
        t[a] = c + 1;
        (c = l(u)), (r = { css: r[1], media: r[2], sourceMap: r[3] });
        -1 !== c
          ? (s[c].references++, s[c].updater(r))
          : s.push({
              identifier: u,
              updater: (function (n, e) {
                var t, o, i;
                {
                  var r;
                  i = e.singleton
                    ? ((r = g++),
                      (t = h = h || f(e)),
                      (o = p.bind(null, t, r, !1)),
                      p.bind(null, t, r, !0))
                    : ((t = f(e)),
                      (o = function (e, n, t) {
                        var o = t.css,
                          i = t.media,
                          t = t.sourceMap;
                        i
                          ? e.setAttribute("media", i)
                          : e.removeAttribute("media");
                        t &&
                          "undefined" != typeof btoa &&
                          (o +=
                            "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                              btoa(
                                unescape(encodeURIComponent(JSON.stringify(t)))
                              ),
                              " */"
                            ));
                        if (e.styleSheet) e.styleSheet.cssText = o;
                        else {
                          for (; e.firstChild; ) e.removeChild(e.firstChild);
                          e.appendChild(document.createTextNode(o));
                        }
                      }.bind(null, t, e)),
                      function () {
                        var e;
                        null !== (e = t).parentNode &&
                          e.parentNode.removeChild(e);
                      });
                }
                return (
                  o(n),
                  function (e) {
                    e
                      ? (e.css === n.css &&
                          e.media === n.media &&
                          e.sourceMap === n.sourceMap) ||
                        o((n = e))
                      : i();
                  }
                );
              })(r, n),
              references: 1,
            }),
          o.push(u);
      }
      return o;
    }
    function f(e) {
      var n,
        t = document.createElement("style"),
        o = e.attributes || {};
      if (
        (void 0 !== o.nonce || ((n = i.nc) && (o.nonce = n)),
        Object.keys(o).forEach(function (e) {
          t.setAttribute(e, o[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        e = r(e.insert || "head");
        if (!e)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        e.appendChild(t);
      }
      return t;
    }
    var a,
      d =
        ((a = []),
        function (e, n) {
          return (a[e] = n), a.filter(Boolean).join("\n");
        });
    function p(e, n, t, o) {
      t = t
        ? ""
        : o.media
        ? "@media ".concat(o.media, " {").concat(o.css, "}")
        : o.css;
      e.styleSheet
        ? (e.styleSheet.cssText = d(n, t))
        : ((o = document.createTextNode(t)),
          (t = e.childNodes)[n] && e.removeChild(t[n]),
          t.length ? e.insertBefore(o, t[n]) : e.appendChild(o));
    }
    var h = null,
      g = 0;
    e.exports = function (e, r) {
      (r = r || {}).singleton ||
        "boolean" == typeof r.singleton ||
        (r.singleton = c());
      var a = u((e = e || []), r);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var n = 0; n < a.length; n++) {
            var t = l(a[n]);
            s[t].references--;
          }
          for (var e = u(e, r), o = 0; o < a.length; o++) {
            var i = l(a[o]);
            0 === s[i].references && (s[i].updater(), s.splice(i, 1));
          }
          a = e;
        }
      };
    };
  },
  function (e, n, t) {
    "use strict";
    t.r(n);
    var o = t(1),
      o = t.n(o)()(!0);
    o.push([
      e.i,
      ".szhnHighCode .szhnHighCode-fab{position:fixed;right:0;bottom:14.93333vw;z-index:99;transition-duration:0.5s;transform:translate3d(0, 0, 0)}.szhnHighCode .szhnHighCode-fab.is-touch{transform:translate3d(8.8vw, 0, 0);transition-duration:0.5s}.szhnHighCode .szhnHighCode-fab .szhnHighCode-fab__img{width:17.6vw;height:17.6vw;background-size:contain}\n",
      "",
      {
        version: 3,
        sources: ["webpack://src/lib/highCode.scss"],
        names: [],
        mappings:
          "AAAA,gCAAgC,cAAc,CAAC,OAAO,CAAC,iBAAY,CAAC,UAAU,CAAC,wBAAwB,CAAC,8BAA8B,CAAC,yCAAyC,kCAAiC,CAAC,wBAAwB,CAAC,uDAAuD,YAAW,CAAC,aAAY,CAAC,uBAAuB",
        sourcesContent: [
          ".szhnHighCode .szhnHighCode-fab{position:fixed;right:0;bottom:112px;z-index:99;transition-duration:0.5s;transform:translate3d(0, 0, 0)}.szhnHighCode .szhnHighCode-fab.is-touch{transform:translate3d(66px, 0, 0);transition-duration:0.5s}.szhnHighCode .szhnHighCode-fab .szhnHighCode-fab__img{width:132px;height:132px;background-size:contain}\n",
        ],
        sourceRoot: "",
      },
    ]),
      (n.default = o);
  },
  ,
  function (e, n, t) {
    "use strict";
    t.r(n);
    t = t(0);
    new t.a({ isHideCode: !0 }), (window.HighCode = t.a);
  },
]);
