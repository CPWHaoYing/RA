(function(n, i) {
	function t(a, b, d) {
		if (d === i && a.nodeType === 1) if (d = a.getAttribute("data-" + b), typeof d === "string") {
				try {
					d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : !c.isNaN(d) ? parseFloat(d) : X.test(d) ? c.parseJSON(d) : d
				} catch (f) {}
				c.data(a, b, d)
			} else d = i;
		return d
	}
	function e() {
		return !1
	}
	function p() {
		return !0
	}
	function z(a, b, d) {
		d[0].type = a;
		return c.event.handle.apply(b, d)
	}
	function y(a) {
		var b, d, f, g, h, m, j, e, i, k, l, p = [];
		g = [];
		h = c.data(this, this.nodeType ? "events" : "__events__");
		if (typeof h === "function") h = h.events;
		if (!(a.liveFired ===
			this || !h || !h.live || a.button && a.type === "click")) {
			a.namespace && (l = RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
			a.liveFired = this;
			var n = h.live.slice(0);
			for (j = 0; j < n.length; j++) h = n[j], h.origType.replace(s, "") === a.type ? g.push(h.selector) : n.splice(j--, 1);
			g = c(a.target).closest(g, a.currentTarget);
			e = 0;
			for (i = g.length; e < i; e++) {
				k = g[e];
				for (j = 0; j < n.length; j++) if (h = n[j], k.selector === h.selector && (!l || l.test(h.namespace))) {
						m = k.elem;
						f = null;
						if (h.preType === "mouseenter" || h.preType === "mouseleave") a.type =
								h.preType, f = c(a.relatedTarget).closest(h.selector)[0];
						(!f || f !== m) && p.push({
							elem: m,
							handleObj: h,
							level: k.level
						})
					}
			}
			e = 0;
			for (i = p.length; e < i; e++) {
				g = p[e];
				if (d && g.level > d) break;
				a.currentTarget = g.elem;
				a.data = g.handleObj.data;
				a.handleObj = g.handleObj;
				l = g.handleObj.origHandler.apply(g.elem, arguments);
				if (l === !1 || a.isPropagationStopped()) if (d = g.level, l === !1 && (b = !1), a.isImmediatePropagationStopped()) break
			}
			return b
		}
	}
	function r(a, b) {
		return (a && a !== "*" ? a + "." : "") + b.replace(v, "`").replace(I, "&")
	}
	function w(a, b, d) {
		if (c.isFunction(b)) return c.grep(a, function(a, c) {
				return !!b.call(a, c, a) === d
			});
		else if (b.nodeType) return c.grep(a, function(a) {
				return a === b === d
			});
		else if (typeof b === "string") {
			var f = c.grep(a, function(a) {
				return a.nodeType === 1
			});
			if (za.test(b)) return c.filter(b, f, !d);
			else b = c.filter(b, f)
		}
		return c.grep(a, function(a) {
			return c.inArray(a, b) >= 0 === d
		})
	}
	function B(a, b) {
		var d = 0;
		b.each(function() {
			if (this.nodeName === (a[d] && a[d].nodeName)) {
				var b = c.data(a[d++]),
					g = c.data(this, b);
				if (b = b && b.events) for (var h in delete g.handle, g.events = {}, b) for (var m in b[h]) c.event.add(this,
								h, b[h][m], b[h][m].data)
			}
		})
	}
	function F(a, b) {
		b.src ? c.ajax({
			url: b.src,
			async: !1,
			dataType: "script"
		}) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
		b.parentNode && b.parentNode.removeChild(b)
	}
	function A(a, b, d) {
		var f = b === "width" ? a.offsetWidth : a.offsetHeight;
		if (d === "border") return f;
		c.each(b === "width" ? Aa : Ba, function() {
			d || (f -= parseFloat(c.css(a, "padding" + this)) || 0);
			d === "margin" ? f += parseFloat(c.css(a, "margin" + this)) || 0 : f -= parseFloat(c.css(a, "border" + this + "Width")) || 0
		});
		return f
	}
	function x(a, b, d, f) {
		c.isArray(b) &&
			b.length ? c.each(b, function(b, h) {
			d || Ca.test(a) ? f(a, h) : x(a + "[" + (typeof h === "object" || c.isArray(h) ? b : "") + "]", h, d, f)
		}) : !d && b != null && typeof b === "object" ? c.isEmptyObject(b) ? f(a, "") : c.each(b, function(b, c) {
			x(a + "[" + b + "]", c, d, f)
		}) : f(a, b)
	}
	function G(a, b) {
		var d = {};
		c.each(ga.concat.apply([], ga.slice(0, b)), function() {
			d[this] = a
		});
		return d
	}
	function O(a) {
		if (!da[a]) {
			var b = c("<" + a + ">").appendTo("body"),
				d = b.css("display");
			b.remove();
			if (d === "none" || d === "") d = "block";
			da[a] = d
		}
		return da[a]
	}
	function E(a) {
		return c.isWindow(a) ?
			a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
	}
	var k = n.document,
		c = function() {
			function a() {
				if (!b.isReady) {
					try {
						k.documentElement.doScroll("left")
					} catch (c) {
						setTimeout(a, 1);
						return
					}
					b.ready()
				}
			}
			var b = function(a, c) {
				return new b.fn.init(a, c)
			}, c = n.jQuery,
				f = n.$,
				g, h = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
				m = /\S/,
				j = /^\s+/,
				e = /\s+$/,
				s = /\W/,
				l = /\d/,
				p = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				v = /^[\],:{}\s]*$/,
				o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				r = /(?:^|:|,)(?:\s*\[)+/g,
				z = /(webkit)[ \/]([\w.]+)/,
				u = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				C = /(msie) ([\w.]+)/,
				Da = /(mozilla)(?:.*? rv:([\w.]+))?/,
				P = navigator.userAgent,
				ha = !1,
				Q = [],
				J, Ea = Object.prototype.toString,
				ea = Object.prototype.hasOwnProperty,
				y = Array.prototype.push,
				w = Array.prototype.slice,
				t = String.prototype.trim,
				ia = Array.prototype.indexOf,
				I = {};
			b.fn = b.prototype = {
				init: function(a, c) {
					var d, f, u;
					if (!a) return this;
					if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
					if (a === "body" && !c && k.body) return this.context = k, this[0] =
							k.body, this.selector = "body", this.length = 1, this;
					if (typeof a === "string") if ((d = h.exec(a)) && (d[1] || !c)) if (d[1]) return u = c ? c.ownerDocument || c : k, (f = p.exec(a)) ? b.isPlainObject(c) ? (a = [k.createElement(f[1])], b.fn.attr.call(a, c, !0)) : a = [u.createElement(f[1])] : (f = b.buildFragment([d[1]], [u]), a = (f.cacheable ? f.fragment.cloneNode(!0) : f.fragment).childNodes), b.merge(this, a);
							else {
								if ((f = k.getElementById(d[2])) && f.parentNode) {
									if (f.id !== d[2]) return g.find(a);
									this.length = 1;
									this[0] = f
								}
								this.context = k;
								this.selector = a;
								return this
							} else return !c && !s.test(a) ? (this.selector = a, this.context = k, a = k.getElementsByTagName(a), b.merge(this, a)) : !c || c.jquery ? (c || g).find(a) : b(c).find(a);
							else
					if (b.isFunction(a)) return g.ready(a);
					if (a.selector !== i) this.selector = a.selector, this.context = a.context;
					return b.makeArray(a, this)
				},
				selector: "",
				jquery: "1.4.4",
				length: 0,
				size: function() {
					return this.length
				},
				toArray: function() {
					return w.call(this, 0)
				},
				get: function(a) {
					return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a]
				},
				pushStack: function(a, c, d) {
					var f = b();
					b.isArray(a) ?
						y.apply(f, a) : b.merge(f, a);
					f.prevObject = this;
					f.context = this.context;
					if (c === "find") f.selector = this.selector + (this.selector ? " " : "") + d;
					else if (c) f.selector = this.selector + "." + c + "(" + d + ")";
					return f
				},
				each: function(a, c) {
					return b.each(this, a, c)
				},
				ready: function(a) {
					b.bindReady();
					b.isReady ? a.call(k, b) : Q && Q.push(a);
					return this
				},
				eq: function(a) {
					return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				slice: function() {
					return this.pushStack(w.apply(this,
						arguments), "slice", w.call(arguments).join(","))
				},
				map: function(a) {
					return this.pushStack(b.map(this, function(b, c) {
						return a.call(b, c, b)
					}))
				},
				end: function() {
					return this.prevObject || b(null)
				},
				push: y,
				sort: [].sort,
				splice: [].splice
			};
			b.fn.init.prototype = b.fn;
			b.extend = b.fn.extend = function() {
				var a, c, d, f, g, u = arguments[0] || {}, h = 1,
					C = arguments.length,
					j = !1;
				typeof u === "boolean" && (j = u, u = arguments[1] || {}, h = 2);
				typeof u !== "object" && !b.isFunction(u) && (u = {});
				C === h && (u = this, --h);
				for (; h < C; h++) if ((a = arguments[h]) != null) for (c in a) d =
								u[c], f = a[c], u !== f && (j && f && (b.isPlainObject(f) || (g = b.isArray(f))) ? (g ? (g = !1, d = d && b.isArray(d) ? d : []) : d = d && b.isPlainObject(d) ? d : {}, u[c] = b.extend(j, d, f)) : f !== i && (u[c] = f));
				return u
			};
			b.extend({
				noConflict: function(a) {
					n.$ = f;
					if (a) n.jQuery = c;
					return b
				},
				isReady: !1,
				readyWait: 1,
				ready: function(a) {
					a === !0 && b.readyWait--;
					if (!b.readyWait || a !== !0 && !b.isReady) {
						if (!k.body) return setTimeout(b.ready, 1);
						b.isReady = !0;
						if (!(a !== !0 && --b.readyWait > 0) && Q) {
							var c = 0,
								d = Q;
							for (Q = null; a = d[c++];) a.call(k, b);
							b.fn.trigger && b(k).trigger("ready").unbind("ready")
						}
					}
				},
				bindReady: function() {
					if (!ha) {
						ha = !0;
						if (k.readyState === "complete") return setTimeout(b.ready, 1);
						if (k.addEventListener) k.addEventListener("DOMContentLoaded", J, !1), n.addEventListener("load", b.ready, !1);
						else if (k.attachEvent) {
							k.attachEvent("onreadystatechange", J);
							n.attachEvent("onload", b.ready);
							var c = !1;
							try {
								c = n.frameElement == null
							} catch (d) {}
							k.documentElement.doScroll && c && a()
						}
					}
				},
				isFunction: function(a) {
					return b.type(a) === "function"
				},
				isArray: Array.isArray || function(a) {
					return b.type(a) === "array"
				},
				isWindow: function(a) {
					return a &&
						typeof a === "object" && "setInterval" in a
				},
				isNaN: function(a) {
					return a == null || !l.test(a) || isNaN(a)
				},
				type: function(a) {
					return a == null ? String(a) : I[Ea.call(a)] || "object"
				},
				isPlainObject: function(a) {
					if (!a || b.type(a) !== "object" || a.nodeType || b.isWindow(a)) return !1;
					if (a.constructor && !ea.call(a, "constructor") && !ea.call(a.constructor.prototype, "isPrototypeOf")) return !1;
					for (var c in a);
					return c === i || ea.call(a, c)
				},
				isEmptyObject: function(a) {
					for (var b in a) return !1;
					return !0
				},
				error: function(a) {
					throw a;
				},
				parseJSON: function(a) {
					if (typeof a !==
						"string" || !a) return null;
					a = b.trim(a);
					if (v.test(a.replace(o, "@").replace(q, "]").replace(r, ""))) return n.JSON && n.JSON.parse ? n.JSON.parse(a) : (new Function("return " + a))();
					else b.error("Invalid JSON: " + a)
				},
				noop: function() {},
				globalEval: function(a) {
					if (a && m.test(a)) {
						var c = k.getElementsByTagName("head")[0] || k.documentElement,
							d = k.createElement("script");
						d.type = "text/javascript";
						b.support.scriptEval ? d.appendChild(k.createTextNode(a)) : d.text = a;
						c.insertBefore(d, c.firstChild);
						c.removeChild(d)
					}
				},
				nodeName: function(a,
					b) {
					return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
				},
				each: function(a, c, d) {
					var f, u = 0,
						g = a.length,
						h = g === i || b.isFunction(a);
					if (d) if (h) for (f in a) {
								if (c.apply(a[f], d) === !1) break
						} else for (; u < g;) {
								if (c.apply(a[u++], d) === !1) break
						} else
					if (h) for (f in a) {
							if (c.call(a[f], f, a[f]) === !1) break
					} else for (d = a[0]; u < g && c.call(d, u, d) !== !1; d = a[++u]);
					return a
				},
				trim: t ? function(a) {
					return a == null ? "" : t.call(a)
				} : function(a) {
					return a == null ? "" : a.toString().replace(j, "").replace(e, "")
				},
				makeArray: function(a, c) {
					var d = c ||
						[];
					if (a != null) {
						var f = b.type(a);
						a.length == null || f === "string" || f === "function" || f === "regexp" || b.isWindow(a) ? y.call(d, a) : b.merge(d, a)
					}
					return d
				},
				inArray: function(a, b) {
					if (b.indexOf) return b.indexOf(a);
					for (var c = 0, d = b.length; c < d; c++) if (b[c] === a) return c;
					return -1
				},
				merge: function(a, b) {
					var c = a.length,
						d = 0;
					if (typeof b.length === "number") for (var f = b.length; d < f; d++) a[c++] = b[d];
					else for (; b[d] !== i;) a[c++] = b[d++];
					a.length = c;
					return a
				},
				grep: function(a, b, c) {
					for (var d = [], f, c = !! c, u = 0, g = a.length; u < g; u++) f = !! b(a[u], u), c !==
							f && d.push(a[u]);
					return d
				},
				map: function(a, b, c) {
					for (var d = [], f, u = 0, g = a.length; u < g; u++) f = b(a[u], u, c), f != null && (d[d.length] = f);
					return d.concat.apply([], d)
				},
				guid: 1,
				proxy: function(a, c, d) {
					arguments.length === 2 && (typeof c === "string" ? (d = a, a = d[c], c = i) : c && !b.isFunction(c) && (d = c, c = i));
					!c && a && (c = function() {
						return a.apply(d || this, arguments)
					});
					if (a) c.guid = a.guid = a.guid || c.guid || b.guid++;
					return c
				},
				access: function(a, c, d, f, u, g) {
					var h = a.length;
					if (typeof c === "object") {
						for (var C in c) b.access(a, C, c[C], f, u, d);
						return a
					}
					if (d !==
						i) {
						f = !g && f && b.isFunction(d);
						for (C = 0; C < h; C++) u(a[C], c, f ? d.call(a[C], C, u(a[C], c)) : d, g);
						return a
					}
					return h ? u(a[0], c) : i
				},
				now: function() {
					return (new Date).getTime()
				},
				uaMatch: function(a) {
					a = a.toLowerCase();
					a = z.exec(a) || u.exec(a) || C.exec(a) || a.indexOf("compatible") < 0 && Da.exec(a) || [];
					return {
						browser: a[1] || "",
						version: a[2] || "0"
					}
				},
				browser: {}
			});
			b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
				I["[object " + b + "]"] = b.toLowerCase()
			});
			P = b.uaMatch(P);
			if (P.browser) b.browser[P.browser] = !0, b.browser.version = P.version;
			if (b.browser.webkit) b.browser.safari = !0;
			if (ia) b.inArray = function(a, b) {
					return ia.call(b, a)
			};
			/\s/.test("\u00a0") || (j = /^[\s\xA0]+/, e = /[\s\xA0]+$/);
			g = b(k);
			k.addEventListener ? J = function() {
				k.removeEventListener("DOMContentLoaded", J, !1);
				b.ready()
			} : k.attachEvent && (J = function() {
				k.readyState === "complete" && (k.detachEvent("onreadystatechange", J), b.ready())
			});
			return n.jQuery = n.$ = b
		}();
	(function() {
		c.support = {};
		var a = k.documentElement,
			b = k.createElement("script"),
			d = k.createElement("div"),
			f = "script" + c.now();
		d.style.display = "none";
		d.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		var g = d.getElementsByTagName("*"),
			h = d.getElementsByTagName("a")[0],
			m = k.createElement("select"),
			j = m.appendChild(k.createElement("option"));
		if (g && g.length && h) {
			c.support = {
				leadingWhitespace: d.firstChild.nodeType === 3,
				tbody: !d.getElementsByTagName("tbody").length,
				htmlSerialize: !! d.getElementsByTagName("link").length,
				style: /red/.test(h.getAttribute("style")),
				hrefNormalized: h.getAttribute("href") === "/a",
				opacity: /^0.55$/.test(h.style.opacity),
				cssFloat: !! h.style.cssFloat,
				checkOn: d.getElementsByTagName("input")[0].value === "on",
				optSelected: j.selected,
				deleteExpando: !0,
				optDisabled: !1,
				checkClone: !1,
				scriptEval: !1,
				noCloneEvent: !0,
				boxModel: null,
				inlineBlockNeedsLayout: !1,
				shrinkWrapBlocks: !1,
				reliableHiddenOffsets: !0
			};
			m.disabled = !0;
			c.support.optDisabled = !j.disabled;
			b.type = "text/javascript";
			try {
				b.appendChild(k.createTextNode("window." + f + "=1;"))
			} catch (e) {}
			a.insertBefore(b,
				a.firstChild);
			if (n[f]) c.support.scriptEval = !0, delete n[f];
			try {
				delete b.test
			} catch (i) {
				c.support.deleteExpando = !1
			}
			a.removeChild(b);
			d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function ya() {
				c.support.noCloneEvent = !1;
				d.detachEvent("onclick", ya)
			}), d.cloneNode(!0).fireEvent("onclick"));
			d = k.createElement("div");
			d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
			a = k.createDocumentFragment();
			a.appendChild(d.firstChild);
			c.support.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
			c(function() {
				var a = k.createElement("div");
				a.style.width = a.style.paddingLeft = "1px";
				k.body.appendChild(a);
				c.boxModel = c.support.boxModel = a.offsetWidth === 2;
				if ("zoom" in a.style) a.style.display = "inline", a.style.zoom = 1, c.support.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", c.support.shrinkWrapBlocks = a.offsetWidth !== 2;
				a.innerHTML = "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
				var b = a.getElementsByTagName("td");
				c.support.reliableHiddenOffsets =
					b[0].offsetHeight === 0;
				b[0].style.display = "";
				b[1].style.display = "none";
				c.support.reliableHiddenOffsets = c.support.reliableHiddenOffsets && b[0].offsetHeight === 0;
				a.innerHTML = "";
				k.body.removeChild(a).style.display = "none"
			});
			a = function(a) {
				var b = k.createElement("div"),
					a = "on" + a,
					c = a in b;
				c || (b.setAttribute(a, "return;"), c = typeof b[a] === "function");
				return c
			};
			c.support.submitBubbles = a("submit");
			c.support.changeBubbles = a("change");
			a = b = d = g = h = null
		}
	})();
	var o = {}, X = /^(?:\{.*\}|\[.*\])$/;
	c.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + c.now(),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		data: function(a, b, d) {
			if (c.acceptData(a)) {
				var a = a == n ? o : a,
					f = a.nodeType,
					g = f ? a[c.expando] : null,
					h = c.cache;
				if (!f || g || !(typeof b === "string" && d === i)) return f ? g || (a[c.expando] = g = ++c.uuid) : h = a, typeof b === "object" ? f ? h[g] = c.extend(h[g], b) : c.extend(h, b) : f && !h[g] && (h[g] = {}), a = f ? h[g] : h, d !== i && (a[b] = d), typeof b === "string" ? a[b] : a
			}
		},
		removeData: function(a, b) {
			if (c.acceptData(a)) {
				var a = a == n ? o : a,
					d = a.nodeType,
					f = d ? a[c.expando] : a,
					g = c.cache,
					h = d ? g[f] : f;
				if (b) h && (delete h[b], d && c.isEmptyObject(h) && c.removeData(a));
				else if (d && c.support.deleteExpando) delete a[c.expando];
				else if (a.removeAttribute) a.removeAttribute(c.expando);
				else if (d) delete g[f];
				else for (var m in a) delete a[m]
			}
		},
		acceptData: function(a) {
			if (a.nodeName) {
				var b = c.noData[a.nodeName.toLowerCase()];
				if (b) return !(b === !0 || a.getAttribute("classid") !== b)
			}
			return !0
		}
	});
	c.fn.extend({
		data: function(a, b) {
			var d = null;
			if (typeof a === "undefined") {
				if (this.length) for (var f = this[0].attributes, g, d = c.data(this[0]),
							h = 0, m = f.length; h < m; h++) g = f[h].name, g.indexOf("data-") === 0 && (g = g.substr(5), t(this[0], g, d[g]));
				return d
			} else if (typeof a === "object") return this.each(function() {
					c.data(this, a)
				});
			var j = a.split(".");
			j[1] = j[1] ? "." + j[1] : "";
			return b === i ? (d = this.triggerHandler("getData" + j[1] + "!", [j[0]]), d === i && this.length && (d = c.data(this[0], a), d = t(this[0], a, d)), d === i && j[1] ? this.data(j[0]) : d) : this.each(function() {
				var d = c(this),
					f = [j[0], b];
				d.triggerHandler("setData" + j[1] + "!", f);
				c.data(this, a, b);
				d.triggerHandler("changeData" +
					j[1] + "!", f)
			})
		},
		removeData: function(a) {
			return this.each(function() {
				c.removeData(this, a)
			})
		}
	});
	c.extend({
		queue: function(a, b, d) {
			if (a) {
				var b = (b || "fx") + "queue",
					f = c.data(a, b);
				if (!d) return f || [];
				!f || c.isArray(d) ? f = c.data(a, b, c.makeArray(d)) : f.push(d);
				return f
			}
		},
		dequeue: function(a, b) {
			var b = b || "fx",
				d = c.queue(a, b),
				f = d.shift();
			f === "inprogress" && (f = d.shift());
			f && (b === "fx" && d.unshift("inprogress"), f.call(a, function() {
				c.dequeue(a, b)
			}))
		}
	});
	c.fn.extend({
		queue: function(a, b) {
			typeof a !== "string" && (b = a, a = "fx");
			if (b ===
				i) return c.queue(this[0], a);
			return this.each(function() {
				var d = c.queue(this, a, b);
				a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				c.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			a = c.fx ? c.fx.speeds[a] || a : a;
			b = b || "fx";
			return this.queue(b, function() {
				var d = this;
				setTimeout(function() {
					c.dequeue(d, b)
				}, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		}
	});
	var R = /[\n\t]/g,
		K = /\s+/,
		L = /\r/g,
		Y = /^(?:href|src|style)$/,
		S = /^(?:button|input)$/i,
		T = /^(?:button|input|object|select|textarea)$/i,
		U = /^a(?:rea)?$/i,
		M = /^(?:radio|checkbox)$/i;
	c.props = {
		"for": "htmlFor",
		"class": "className",
		readonly: "readOnly",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		rowspan: "rowSpan",
		colspan: "colSpan",
		tabindex: "tabIndex",
		usemap: "useMap",
		frameborder: "frameBorder"
	};
	c.fn.extend({
		attr: function(a, b) {
			return c.access(this, a, b, !0, c.attr)
		},
		removeAttr: function(a) {
			return this.each(function() {
				c.attr(this, a, "");
				this.nodeType === 1 && this.removeAttribute(a)
			})
		},
		addClass: function(a) {
			if (c.isFunction(a)) return this.each(function(b) {
					var d =
						c(this);
					d.addClass(a.call(this, b, d.attr("class")))
				});
			if (a && typeof a === "string") for (var b = (a || "").split(K), d = 0, f = this.length; d < f; d++) {
					var g = this[d];
					if (g.nodeType === 1) if (g.className) {
							for (var h = " " + g.className + " ", m = g.className, j = 0, e = b.length; j < e; j++) h.indexOf(" " + b[j] + " ") < 0 && (m += " " + b[j]);
							g.className = c.trim(m)
						} else g.className = a
			}
			return this
		},
		removeClass: function(a) {
			if (c.isFunction(a)) return this.each(function(b) {
					var d = c(this);
					d.removeClass(a.call(this, b, d.attr("class")))
				});
			if (a && typeof a === "string" ||
				a === i) for (var b = (a || "").split(K), d = 0, f = this.length; d < f; d++) {
					var g = this[d];
					if (g.nodeType === 1 && g.className) if (a) {
							for (var h = (" " + g.className + " ").replace(R, " "), m = 0, j = b.length; m < j; m++) h = h.replace(" " + b[m] + " ", " ");
							g.className = c.trim(h)
						} else g.className = ""
			}
			return this
		},
		toggleClass: function(a, b) {
			var d = typeof a,
				f = typeof b === "boolean";
			if (c.isFunction(a)) return this.each(function(d) {
					var f = c(this);
					f.toggleClass(a.call(this, d, f.attr("class"), b), b)
				});
			return this.each(function() {
				if (d === "string") for (var g, h = 0,
							m = c(this), j = b, e = a.split(K); g = e[h++];) j = f ? j : !m.hasClass(g), m[j ? "addClass" : "removeClass"](g);
				else if (d === "undefined" || d === "boolean") this.className && c.data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : c.data(this, "__className__") || ""
			})
		},
		hasClass: function(a) {
			for (var a = " " + a + " ", b = 0, c = this.length; b < c; b++) if ((" " + this[b].className + " ").replace(R, " ").indexOf(a) > -1) return !0;
			return !1
		},
		val: function(a) {
			if (!arguments.length) {
				var b = this[0];
				if (b) {
					if (c.nodeName(b, "option")) {
						var d =
							b.attributes.value;
						return !d || d.specified ? b.value : b.text
					}
					if (c.nodeName(b, "select")) {
						var f = b.selectedIndex,
							d = [],
							g = b.options,
							b = b.type === "select-one";
						if (f < 0) return null;
						for (var h = b ? f : 0, f = b ? f + 1 : g.length; h < f; h++) {
							var m = g[h];
							if (m.selected && (c.support.optDisabled ? !m.disabled : m.getAttribute("disabled") === null) && (!m.parentNode.disabled || !c.nodeName(m.parentNode, "optgroup"))) {
								a = c(m).val();
								if (b) return a;
								d.push(a)
							}
						}
						return d
					}
					if (M.test(b.type) && !c.support.checkOn) return b.getAttribute("value") === null ? "on" : b.value;
					return (b.value || "").replace(L, "")
				}
				return i
			}
			var j = c.isFunction(a);
			return this.each(function(b) {
				var d = c(this),
					f = a;
				if (this.nodeType === 1) if (j && (f = a.call(this, b, d.val())), f == null ? f = "" : typeof f === "number" ? f += "" : c.isArray(f) && (f = c.map(f, function(a) {
						return a == null ? "" : a + ""
					})), c.isArray(f) && M.test(this.type)) this.checked = c.inArray(d.val(), f) >= 0;
					else
				if (c.nodeName(this, "select")) {
					var g = c.makeArray(f);
					c("option", this).each(function() {
						this.selected = c.inArray(c(this).val(), g) >= 0
					});
					if (!g.length) this.selectedIndex = -1
				} else this.value = f
			})
		}
	});
	c.extend({
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(a, b, d, f) {
			if (!a || a.nodeType === 3 || a.nodeType === 8) return i;
			if (f && b in c.attrFn) return c(a)[b](d);
			var f = a.nodeType !== 1 || !c.isXMLDoc(a),
				g = d !== i,
				b = f && c.props[b] || b,
				h = Y.test(b);
			if ((b in a || a[b] !== i) && f && !h) {
				g && (b === "type" && S.test(a.nodeName) && a.parentNode && c.error("type property can't be changed"), d === null ? a.nodeType === 1 && a.removeAttribute(b) : a[b] = d);
				if (c.nodeName(a, "form") && a.getAttributeNode(b)) return a.getAttributeNode(b).nodeValue;
				if (b === "tabIndex") return (b = a.getAttributeNode("tabIndex")) && b.specified ? b.value : T.test(a.nodeName) || U.test(a.nodeName) && a.href ? 0 : i;
				return a[b]
			}
			if (!c.support.style && f && b === "style") {
				if (g) a.style.cssText = "" + d;
				return a.style.cssText
			}
			g && a.setAttribute(b, "" + d);
			if (!a.attributes[b] && a.hasAttribute && !a.hasAttribute(b)) return i;
			a = !c.support.hrefNormalized && f && h ? a.getAttribute(b, 2) : a.getAttribute(b);
			return a === null ? i : a
		}
	});
	var s = /\.(.*)$/,
		l = /^(?:textarea|input|select)$/i,
		v = /\./g,
		I = / /g,
		Fa = /[^\w\s.|`]/g,
		Ga = function(a) {
			return a.replace(Fa,
				"\\$&")
		}, ja = {
			focusin: 0,
			focusout: 0
		};
	c.event = {
		add: function(a, b, d, f) {
			if (!(a.nodeType === 3 || a.nodeType === 8)) {
				c.isWindow(a) && a !== n && !a.frameElement && (a = n);
				if (d === !1) d = e;
				else if (!d) return;
				var g, h;
				if (d.handler) g = d, d = g.handler;
				if (!d.guid) d.guid = c.guid++;
				if (h = c.data(a)) {
					var m = a.nodeType ? "events" : "__events__",
						j = h[m],
						H = h.handle;
					if (typeof j === "function") H = j.handle, j = j.events;
					else if (!j) a.nodeType || (h[m] = h = function() {}), h.events = j = {};
					if (!H) h.handle = H = function() {
							return typeof c !== "undefined" && !c.event.triggered ?
								c.event.handle.apply(H.elem, arguments) : i
					};
					H.elem = a;
					for (var b = b.split(" "), s = 0, l; m = b[s++];) {
						h = g ? c.extend({}, g) : {
							handler: d,
							data: f
						};
						m.indexOf(".") > -1 ? (l = m.split("."), m = l.shift(), h.namespace = l.slice(0).sort().join(".")) : (l = [], h.namespace = "");
						h.type = m;
						if (!h.guid) h.guid = d.guid;
						var k = j[m],
							p = c.event.special[m] || {};
						if (!k && (k = j[m] = [], !p.setup || p.setup.call(a, f, l, H) === !1)) a.addEventListener ? a.addEventListener(m, H, !1) : a.attachEvent && a.attachEvent("on" + m, H);
						if (p.add && (p.add.call(a, h), !h.handler.guid)) h.handler.guid =
								d.guid;
						k.push(h);
						c.event.global[m] = !0
					}
					a = null
				}
			}
		},
		global: {},
		remove: function(a, b, d, f) {
			if (!(a.nodeType === 3 || a.nodeType === 8)) {
				d === !1 && (d = e);
				var g, h, m = 0,
					j, i, s, l, k, p, n = a.nodeType ? "events" : "__events__",
					q = c.data(a),
					v = q && q[n];
				if (q && v) {
					if (typeof v === "function") q = v, v = v.events;
					if (b && b.type) d = b.handler, b = b.type;
					if (!b || typeof b === "string" && b.charAt(0) === ".") for (g in b = b || "", v) c.event.remove(a, g + b);
					else {
						for (b = b.split(" "); g = b[m++];) if (l = g, j = g.indexOf(".") < 0, i = [], j || (i = g.split("."), g = i.shift(), s = RegExp("(^|\\.)" +
								c.map(i.slice(0).sort(), Ga).join("\\.(?:.*\\.)?") + "(\\.|$)")), k = v[g]) if (d) {
									l = c.event.special[g] || {};
									for (h = f || 0; h < k.length; h++) if (p = k[h], d.guid === p.guid) {
											if (j || s.test(p.namespace)) f == null && k.splice(h--, 1), l.remove && l.remove.call(a, p);
											if (f != null) break
										}
									if (k.length === 0 || f != null && k.length === 1)(!l.teardown || l.teardown.call(a, i) === !1) && c.removeEvent(a, g, q.handle), delete v[g]
								} else for (h = 0; h < k.length; h++) if (p = k[h], j || s.test(p.namespace)) c.event.remove(a, l, p.handler, h), k.splice(h--, 1);
						if (c.isEmptyObject(v)) {
							if (b =
								q.handle) b.elem = null;
							delete q.events;
							delete q.handle;
							typeof q === "function" ? c.removeData(a, n) : c.isEmptyObject(q) && c.removeData(a)
						}
					}
				}
			}
		},
		trigger: function(a, b, d, f) {
			var g = a.type || a;
			if (!f) {
				a = typeof a === "object" ? a[c.expando] ? a : c.extend(c.Event(g), a) : c.Event(g);
				if (g.indexOf("!") >= 0) a.type = g = g.slice(0, -1), a.exclusive = !0;
				d || (a.stopPropagation(), c.event.global[g] && c.each(c.cache, function() {
					this.events && this.events[g] && c.event.trigger(a, b, this.handle.elem)
				}));
				if (!d || d.nodeType === 3 || d.nodeType === 8) return i;
				a.result =
					i;
				a.target = d;
				b = c.makeArray(b);
				b.unshift(a)
			}
			a.currentTarget = d;
			(f = d.nodeType ? c.data(d, "handle") : (c.data(d, "__events__") || {}).handle) && f.apply(d, b);
			f = d.parentNode || d.ownerDocument;
			try {
				if ((!d || !d.nodeName || !c.noData[d.nodeName.toLowerCase()]) && d["on" + g] && d["on" + g].apply(d, b) === !1) a.result = !1, a.preventDefault()
			} catch (h) {}
			if (!a.isPropagationStopped() && f) c.event.trigger(a, b, f, !0);
			else if (!a.isDefaultPrevented()) {
				var m, f = a.target,
					j = g.replace(s, ""),
					e = c.nodeName(f, "a") && j === "click",
					l = c.event.special[j] || {};
				if ((!l._default || l._default.call(d, a) === !1) && !e && (!f || !f.nodeName || !c.noData[f.nodeName.toLowerCase()])) {
					try {
						if (f[j]) {
							if (m = f["on" + j]) f["on" + j] = null;
							c.event.triggered = !0;
							f[j]()
						}
					} catch (k) {}
					m && (f["on" + j] = m);
					c.event.triggered = !1
				}
			}
		},
		handle: function(a) {
			var b, d, f, g;
			d = [];
			var h = c.makeArray(arguments),
				a = h[0] = c.event.fix(a || n.event);
			a.currentTarget = this;
			b = a.type.indexOf(".") < 0 && !a.exclusive;
			if (!b) f = a.type.split("."), a.type = f.shift(), d = f.slice(0).sort(), f = RegExp("(^|\\.)" + d.join("\\.(?:.*\\.)?") + "(\\.|$)");
			a.namespace =
				a.namespace || d.join(".");
			g = c.data(this, this.nodeType ? "events" : "__events__");
			if (typeof g === "function") g = g.events;
			d = (g || {})[a.type];
			if (g && d) {
				d = d.slice(0);
				g = 0;
				for (var m = d.length; g < m; g++) {
					var j = d[g];
					if (b || f.test(j.namespace)) {
						a.handler = j.handler;
						a.data = j.data;
						a.handleObj = j;
						j = j.handler.apply(this, h);
						if (j !== i) a.result = j, j === !1 && (a.preventDefault(), a.stopPropagation());
						if (a.isImmediatePropagationStopped()) break
					}
				}
			}
			return a.result
		},
		props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
		fix: function(a) {
			if (a[c.expando]) return a;
			for (var b = a, a = c.Event(b), d = this.props.length, f; d;) f = this.props[--d], a[f] = b[f];
			if (!a.target) a.target = a.srcElement || k;
			if (a.target.nodeType === 3) a.target = a.target.parentNode;
			if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
			if (a.pageX == null && a.clientX != null) b = k.documentElement, d = k.body, a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0), a.pageY = a.clientY + (b && b.scrollTop ||
					d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0);
			if (a.which == null && (a.charCode != null || a.keyCode != null)) a.which = a.charCode != null ? a.charCode : a.keyCode;
			if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
			if (!a.which && a.button !== i) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
			return a
		},
		guid: 1E8,
		proxy: c.proxy,
		special: {
			ready: {
				setup: c.bindReady,
				teardown: c.noop
			},
			live: {
				add: function(a) {
					c.event.add(this, r(a.origType, a.selector), c.extend({}, a, {
						handler: y,
						guid: a.handler.guid
					}))
				},
				remove: function(a) {
					c.event.remove(this,
						r(a.origType, a.selector), a)
				}
			},
			beforeunload: {
				setup: function(a, b, d) {
					if (c.isWindow(this)) this.onbeforeunload = d
				},
				teardown: function(a, b) {
					if (this.onbeforeunload === b) this.onbeforeunload = null
				}
			}
		}
	};
	c.removeEvent = k.removeEventListener ? function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function(a, b, c) {
		a.detachEvent && a.detachEvent("on" + b, c)
	};
	c.Event = function(a) {
		if (!this.preventDefault) return new c.Event(a);
		a && a.type ? (this.originalEvent = a, this.type = a.type) : this.type = a;
		this.timeStamp = c.now();
		this[c.expando] = !0
	};
	c.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = p;
			var a = this.originalEvent;
			if (a) a.preventDefault ? a.preventDefault() : a.returnValue = !1
		},
		stopPropagation: function() {
			this.isPropagationStopped = p;
			var a = this.originalEvent;
			if (a) a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = p;
			this.stopPropagation()
		},
		isDefaultPrevented: e,
		isPropagationStopped: e,
		isImmediatePropagationStopped: e
	};
	var ka = function(a) {
		var b =
			a.relatedTarget;
		try {
			for (; b && b !== this;) b = b.parentNode;
			if (b !== this) a.type = a.data, c.event.handle.apply(this, arguments)
		} catch (d) {}
	}, la = function(a) {
			a.type = a.data;
			c.event.handle.apply(this, arguments)
		};
	c.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		c.event.special[a] = {
			setup: function(d) {
				c.event.add(this, b, d && d.selector ? la : ka, a)
			},
			teardown: function(a) {
				c.event.remove(this, b, a && a.selector ? la : ka)
			}
		}
	});
	if (!c.support.submitBubbles) c.event.special.submit = {
			setup: function() {
				if (this.nodeName.toLowerCase() !==
					"form") c.event.add(this, "click.specialSubmit", function(a) {
						var b = a.target,
							d = b.type;
						if ((d === "submit" || d === "image") && c(b).closest("form").length) return a.liveFired = i, z("submit", this, arguments)
					}), c.event.add(this, "keypress.specialSubmit", function(a) {
						var b = a.target,
							d = b.type;
						if ((d === "text" || d === "password") && c(b).closest("form").length && a.keyCode === 13) return a.liveFired = i, z("submit", this, arguments)
					});
				else return !1
			},
			teardown: function() {
				c.event.remove(this, ".specialSubmit")
			}
	};
	if (!c.support.changeBubbles) {
		var V,
			ma = function(a) {
				var b = a.type,
					d = a.value;
				if (b === "radio" || b === "checkbox") d = a.checked;
				else if (b === "select-multiple") d = a.selectedIndex > -1 ? c.map(a.options, function(a) {
						return a.selected
					}).join("-") : "";
				else if (a.nodeName.toLowerCase() === "select") d = a.selectedIndex;
				return d
			}, Z = function(a, b) {
				var d = a.target,
					f, g;
				if (l.test(d.nodeName) && !d.readOnly && (f = c.data(d, "_change_data"), g = ma(d), (a.type !== "focusout" || d.type !== "radio") && c.data(d, "_change_data", g), !(f === i || g === f))) if (f != null || g) return a.type = "change", a.liveFired =
							i, c.event.trigger(a, b, d)
			};
		c.event.special.change = {
			filters: {
				focusout: Z,
				beforedeactivate: Z,
				click: function(a) {
					var b = a.target,
						c = b.type;
					if (c === "radio" || c === "checkbox" || b.nodeName.toLowerCase() === "select") return Z.call(this, a)
				},
				keydown: function(a) {
					var b = a.target,
						c = b.type;
					if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") return Z.call(this, a)
				},
				beforeactivate: function(a) {
					a = a.target;
					c.data(a, "_change_data", ma(a))
				}
			},
			setup: function() {
				if (this.type ===
					"file") return !1;
				for (var a in V) c.event.add(this, a + ".specialChange", V[a]);
				return l.test(this.nodeName)
			},
			teardown: function() {
				c.event.remove(this, ".specialChange");
				return l.test(this.nodeName)
			}
		};
		V = c.event.special.change.filters;
		V.focus = V.beforeactivate
	}
	k.addEventListener && c.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		function d(a) {
			a = c.event.fix(a);
			a.type = b;
			return c.event.trigger(a, null, a.target)
		}
		c.event.special[b] = {
			setup: function() {
				ja[b]++ === 0 && k.addEventListener(a, d, !0)
			},
			teardown: function() {
				--ja[b] ===
					0 && k.removeEventListener(a, d, !0)
			}
		}
	});
	c.each(["bind", "one"], function(a, b) {
		c.fn[b] = function(a, f, g) {
			if (typeof a === "object") {
				for (var h in a) this[b](h, f, a[h], g);
				return this
			}
			if (c.isFunction(f) || f === !1) g = f, f = i;
			var m = b === "one" ? c.proxy(g, function(a) {
				c(this).unbind(a, m);
				return g.apply(this, arguments)
			}) : g;
			if (a === "unload" && b !== "one") this.one(a, f, g);
			else {
				h = 0;
				for (var j = this.length; h < j; h++) c.event.add(this[h], a, m, f)
			}
			return this
		}
	});
	c.fn.extend({
		unbind: function(a, b) {
			if (typeof a === "object" && !a.preventDefault) for (var d in a) this.unbind(d,
						a[d]);
			else {
				d = 0;
				for (var f = this.length; d < f; d++) c.event.remove(this[d], a, b)
			}
			return this
		},
		delegate: function(a, b, c, f) {
			return this.live(b, c, f, a)
		},
		undelegate: function(a, b, c) {
			return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
		},
		trigger: function(a, b) {
			return this.each(function() {
				c.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) {
				var d = c.Event(a);
				d.preventDefault();
				d.stopPropagation();
				c.event.trigger(d, b, this[0]);
				return d.result
			}
		},
		toggle: function(a) {
			for (var b = arguments, d =
					1; d < b.length;) c.proxy(a, b[d++]);
			return this.click(c.proxy(a, function(f) {
				var g = (c.data(this, "lastToggle" + a.guid) || 0) % d;
				c.data(this, "lastToggle" + a.guid, g + 1);
				f.preventDefault();
				return b[g].apply(this, arguments) || !1
			}))
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var na = {
		focus: "focusin",
		blur: "focusout",
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	c.each(["live", "die"], function(a, b) {
		c.fn[b] = function(a, f, g, h) {
			var m, j = 0,
				e, l, k = h || this.selector,
				h = h ? this : c(this.context);
			if (typeof a ===
				"object" && !a.preventDefault) {
				for (m in a) h[b](m, f, a[m], k);
				return this
			}
			c.isFunction(f) && (g = f, f = i);
			for (a = (a || "").split(" ");
			(m = a[j++]) != null;) if (e = s.exec(m), l = "", e && (l = e[0], m = m.replace(s, "")), m === "hover") a.push("mouseenter" + l, "mouseleave" + l);
				else
			if (e = m, m === "focus" || m === "blur" ? (a.push(na[m] + l), m += l) : m = (na[m] || m) + l, b === "live") {
				l = 0;
				for (var p = h.length; l < p; l++) c.event.add(h[l], "live." + r(m, k), {
						data: f,
						selector: k,
						handler: g,
						origType: m,
						origHandler: g,
						preType: e
					})
			} else h.unbind("live." + r(m, k), g);
			return this
		}
	});
	c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
		c.fn[b] = function(a, c) {
			c == null && (c = a, a = null);
			return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
		};
		c.attrFn && (c.attrFn[b] = !0)
	});
	n.attachEvent && !n.addEventListener && c(n).bind("unload", function() {
		for (var a in c.cache) if (c.cache[a].handle) try {
					c.event.remove(c.cache[a].handle.elem)
			} catch (b) {}
	});
	(function() {
		function a(a, b, c, d, f, g) {
			for (var f = 0, h = d.length; f < h; f++) {
				var e = d[f];
				if (e) {
					for (var j = !1, e = e[a]; e;) {
						if (e.sizcache === c) {
							j = d[e.sizset];
							break
						}
						if (e.nodeType === 1 && !g) e.sizcache = c, e.sizset = f;
						if (e.nodeName.toLowerCase() === b) {
							j = e;
							break
						}
						e = e[a]
					}
					d[f] = j
				}
			}
		}
		function b(a, b, c, d, f, g) {
			for (var f = 0, h = d.length; f < h; f++) {
				var e = d[f];
				if (e) {
					for (var m = !1, e = e[a]; e;) {
						if (e.sizcache === c) {
							m = d[e.sizset];
							break
						}
						if (e.nodeType === 1) {
							if (!g) e.sizcache = c, e.sizset = f;
							if (typeof b !== "string") {
								if (e === b) {
									m = !0;
									break
								}
							} else if (j.filter(b, [e]).length > 0) {
								m = e;
								break
							}
						}
						e = e[a]
					}
					d[f] = m
				}
			}
		}
		var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			f = 0,
			g = Object.prototype.toString,
			h = !1,
			e = !0;
		[0, 0].sort(function() {
			e = !1;
			return 0
		});
		var j = function(a, b, c, f) {
			var c = c || [],
				h = b = b || k;
			if (b.nodeType !== 1 && b.nodeType !== 9) return [];
			if (!a || typeof a !== "string") return c;
			var e, m, i, p, n, q = !0,
				r = j.isXML(b),
				o = [],
				y = a;
			do if (d.exec(""), e = d.exec(y)) if (y = e[3], o.push(e[1]), e[2]) {
						p = e[3];
						break
					} while (e);
			if (o.length > 1 && s.exec(a)) if (o.length === 2 && l.relative[o[0]]) m = z(o[0] + o[1], b);
				else for (m = l.relative[o[0]] ? [b] : j(o.shift(), b); o.length;) a = o.shift(), l.relative[a] && (a += o.shift()), m = z(a, m);
				else
			if (!f && o.length > 1 && b.nodeType === 9 && !r && l.match.ID.test(o[0]) && !l.match.ID.test(o[o.length - 1]) && (e = j.find(o.shift(), b, r), b = e.expr ? j.filter(e.expr, e.set)[0] : e.set[0]), b) {
				e = f ? {
					expr: o.pop(),
					set: v(f)
				} : j.find(o.pop(), o.length === 1 && (o[0] === "~" || o[0] === "+") && b.parentNode ? b.parentNode : b, r);
				m = e.expr ? j.filter(e.expr, e.set) :
					e.set;
				for (o.length > 0 ? i = v(m) : q = !1; o.length;) e = n = o.pop(), l.relative[n] ? e = o.pop() : n = "", e == null && (e = b), l.relative[n](i, e, r)
			} else i = [];
			i || (i = m);
			i || j.error(n || a);
			if (g.call(i) === "[object Array]") if (q) if (b && b.nodeType === 1) for (a = 0; i[a] != null; a++) i[a] && (i[a] === !0 || i[a].nodeType === 1 && j.contains(b, i[a])) && c.push(m[a]);
					else for (a = 0; i[a] != null; a++) i[a] && i[a].nodeType === 1 && c.push(m[a]);
					else c.push.apply(c, i);
					else v(i, c);
			p && (j(p, h, c, f), j.uniqueSort(c));
			return c
		};
		j.uniqueSort = function(a) {
			if (q && (h = e, a.sort(q), h)) for (var b =
					1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
			return a
		};
		j.matches = function(a, b) {
			return j(a, null, null, b)
		};
		j.matchesSelector = function(a, b) {
			return j(b, null, null, [a]).length > 0
		};
		j.find = function(a, b, c) {
			var d;
			if (!a) return [];
			for (var f = 0, g = l.order.length; f < g; f++) {
				var h, e = l.order[f];
				if (h = l.leftMatch[e].exec(a)) {
					var m = h[1];
					h.splice(1, 1);
					if (m.substr(m.length - 1) !== "\\" && (h[1] = (h[1] || "").replace(/\\/g, ""), d = l.find[e](h, b, c), d != null)) {
						a = a.replace(l.match[e], "");
						break
					}
				}
			}
			d || (d = b.getElementsByTagName("*"));
			return {
				set: d,
				expr: a
			}
		};
		j.filter = function(a, b, c, d) {
			for (var f, g, h = a, e = [], m = b, k = b && b[0] && j.isXML(b[0]); a && b.length;) {
				for (var s in l.filter) if ((f = l.leftMatch[s].exec(a)) != null && f[2]) {
						var p, o, n = l.filter[s];
						o = f[1];
						g = !1;
						f.splice(1, 1);
						if (o.substr(o.length - 1) !== "\\") {
							m === e && (e = []);
							if (l.preFilter[s]) if (f = l.preFilter[s](f, m, c, e, d, k)) {
									if (f === !0) continue
								} else g = p = !0;
							if (f) for (var v = 0;
								(o = m[v]) != null; v++) if (o) {
										p = n(o, f, v, m);
										var q = d ^ !! p;
										c && p != null ? q ? g = !0 : m[v] = !1 : q && (e.push(o), g = !0)
									}
							if (p !== i) {
								c || (m = e);
								a = a.replace(l.match[s], "");
								if (!g) return [];
								break
							}
						}
					}
				if (a === h) if (g == null) j.error(a);
					else break;
				h = a
			}
			return m
		};
		j.error = function(a) {
			throw "Syntax error, unrecognized expression: " + a;
		};
		var l = j.selectors = {
			order: ["ID", "NAME", "TAG"],
			match: {
				ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
				ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
				TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
				CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
				POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
				PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
			},
			leftMatch: {},
			attrMap: {
				"class": "className",
				"for": "htmlFor"
			},
			attrHandle: {
				href: function(a) {
					return a.getAttribute("href")
				}
			},
			relative: {
				"+": function(a, b) {
					var c = typeof b === "string",
						d = c && !/\W/.test(b),
						c = c && !d;
					d && (b = b.toLowerCase());
					for (var d = 0, f = a.length, g; d < f; d++) if (g = a[d]) {
							for (;
							(g = g.previousSibling) && g.nodeType !== 1;);
							a[d] = c || g && g.nodeName.toLowerCase() ===
								b ? g || !1 : g === b
						}
					c && j.filter(b, a, !0)
				},
				">": function(a, b) {
					var c, d = typeof b === "string",
						f = 0,
						g = a.length;
					if (d && !/\W/.test(b)) for (b = b.toLowerCase(); f < g; f++) {
							if (c = a[f]) c = c.parentNode, a[f] = c.nodeName.toLowerCase() === b ? c : !1
					} else {
						for (; f < g; f++) if (c = a[f]) a[f] = d ? c.parentNode : c.parentNode === b;
						d && j.filter(b, a, !0)
					}
				},
				"": function(c, d, g) {
					var h, e = f++,
						m = b;
					typeof d === "string" && !/\W/.test(d) && (h = d = d.toLowerCase(), m = a);
					m("parentNode", d, e, c, h, g)
				},
				"~": function(c, d, g) {
					var h, e = f++,
						m = b;
					typeof d === "string" && !/\W/.test(d) && (h = d = d.toLowerCase(),
						m = a);
					m("previousSibling", d, e, c, h, g)
				}
			},
			find: {
				ID: function(a, b, c) {
					if (typeof b.getElementById !== "undefined" && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
				},
				NAME: function(a, b) {
					if (typeof b.getElementsByName !== "undefined") {
						for (var c = [], d = b.getElementsByName(a[1]), f = 0, g = d.length; f < g; f++) d[f].getAttribute("name") === a[1] && c.push(d[f]);
						return c.length === 0 ? null : c
					}
				},
				TAG: function(a, b) {
					return b.getElementsByTagName(a[1])
				}
			},
			preFilter: {
				CLASS: function(a, b, c, d, f, g) {
					a = " " + a[1].replace(/\\/g, "") + " ";
					if (g) return a;
					for (var g = 0, h;
					(h = b[g]) != null; g++) h && (f ^ (h.className && (" " + h.className + " ").replace(/[\t\n]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
					return !1
				},
				ID: function(a) {
					return a[1].replace(/\\/g, "")
				},
				TAG: function(a) {
					return a[1].toLowerCase()
				},
				CHILD: function(a) {
					if (a[1] === "nth") {
						var b = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
						a[2] = b[1] + (b[2] || 1) - 0;
						a[3] = b[3] - 0
					}
					a[0] = f++;
					return a
				},
				ATTR: function(a, b, c, d, f, g) {
					b = a[1].replace(/\\/g, "");
					!g && l.attrMap[b] &&
						(a[1] = l.attrMap[b]);
					a[2] === "~=" && (a[4] = " " + a[4] + " ");
					return a
				},
				PSEUDO: function(a, b, c, f, g) {
					if (a[1] === "not") if ((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) a[3] = j(a[3], null, null, b);
						else return a = j.filter(a[3], b, c, 1 ^ g), c || f.push.apply(f, a), !1;
						else
					if (l.match.POS.test(a[0]) || l.match.CHILD.test(a[0])) return !0;
					return a
				},
				POS: function(a) {
					a.unshift(!0);
					return a
				}
			},
			filters: {
				enabled: function(a) {
					return a.disabled === !1 && a.type !== "hidden"
				},
				disabled: function(a) {
					return a.disabled === !0
				},
				checked: function(a) {
					return a.checked === !0
				},
				selected: function(a) {
					return a.selected === !0
				},
				parent: function(a) {
					return !!a.firstChild
				},
				empty: function(a) {
					return !a.firstChild
				},
				has: function(a, b, c) {
					return !!j(c[3], a).length
				},
				header: function(a) {
					return /h\d/i.test(a.nodeName)
				},
				text: function(a) {
					return "text" === a.type
				},
				radio: function(a) {
					return "radio" === a.type
				},
				checkbox: function(a) {
					return "checkbox" === a.type
				},
				file: function(a) {
					return "file" === a.type
				},
				password: function(a) {
					return "password" === a.type
				},
				submit: function(a) {
					return "submit" === a.type
				},
				image: function(a) {
					return "image" ===
						a.type
				},
				reset: function(a) {
					return "reset" === a.type
				},
				button: function(a) {
					return "button" === a.type || a.nodeName.toLowerCase() === "button"
				},
				input: function(a) {
					return /input|select|textarea|button/i.test(a.nodeName)
				}
			},
			setFilters: {
				first: function(a, b) {
					return b === 0
				},
				last: function(a, b, c, d) {
					return b === d.length - 1
				},
				even: function(a, b) {
					return b % 2 === 0
				},
				odd: function(a, b) {
					return b % 2 === 1
				},
				lt: function(a, b, c) {
					return b < c[3] - 0
				},
				gt: function(a, b, c) {
					return b > c[3] - 0
				},
				nth: function(a, b, c) {
					return c[3] - 0 === b
				},
				eq: function(a, b, c) {
					return c[3] -
						0 === b
				}
			},
			filter: {
				PSEUDO: function(a, b, c, d) {
					var f = b[1],
						g = l.filters[f];
					if (g) return g(a, c, b, d);
					else if (f === "contains") return (a.textContent || a.innerText || j.getText([a]) || "").indexOf(b[3]) >= 0;
					else if (f === "not") {
						b = b[3];
						c = 0;
						for (d = b.length; c < d; c++) if (b[c] === a) return !1;
						return !0
					} else j.error("Syntax error, unrecognized expression: " + f)
				},
				CHILD: function(a, b) {
					var c = b[1],
						d = a;
					switch (c) {
						case "only":
						case "first":
							for (; d = d.previousSibling;) if (d.nodeType === 1) return !1;
							if (c === "first") return !0;
							d = a;
						case "last":
							for (; d = d.nextSibling;) if (d.nodeType ===
									1) return !1;
							return !0;
						case "nth":
							var c = b[2],
								f = b[3];
							if (c === 1 && f === 0) return !0;
							var g = b[0],
								h = a.parentNode;
							if (h && (h.sizcache !== g || !a.nodeIndex)) {
								for (var e = 0, d = h.firstChild; d; d = d.nextSibling) if (d.nodeType === 1) d.nodeIndex = ++e;
								h.sizcache = g
							}
							d = a.nodeIndex - f;
							return c === 0 ? d === 0 : d % c === 0 && d / c >= 0
					}
				},
				ID: function(a, b) {
					return a.nodeType === 1 && a.getAttribute("id") === b
				},
				TAG: function(a, b) {
					return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
				},
				CLASS: function(a, b) {
					return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
				},
				ATTR: function(a, b) {
					var c = b[1],
						c = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
						d = c + "",
						f = b[2],
						g = b[4];
					return c == null ? f === "!=" : f === "=" ? d === g : f === "*=" ? d.indexOf(g) >= 0 : f === "~=" ? (" " + d + " ").indexOf(g) >= 0 : !g ? d && c !== !1 : f === "!=" ? d !== g : f === "^=" ? d.indexOf(g) === 0 : f === "$=" ? d.substr(d.length - g.length) === g : f === "|=" ? d === g || d.substr(0, g.length + 1) === g + "-" : !1
				},
				POS: function(a, b, c, d) {
					var f = l.setFilters[b[2]];
					if (f) return f(a, c, b, d)
				}
			}
		}, s = l.match.POS,
			p = function(a, b) {
				return "\\" + (b - 0 + 1)
			}, n;
		for (n in l.match) l.match[n] =
				RegExp(l.match[n].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[n] = RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[n].source.replace(/\\(\d+)/g, p));
		var v = function(a, b) {
			a = Array.prototype.slice.call(a, 0);
			if (b) return b.push.apply(b, a), b;
			return a
		};
		try {
			Array.prototype.slice.call(k.documentElement.childNodes, 0)
		} catch (o) {
			v = function(a, b) {
				var c = 0,
					d = b || [];
				if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
				else if (typeof a.length === "number") for (var f = a.length; c < f; c++) d.push(a[c]);
				else for (; a[c]; c++) d.push(a[c]);
				return d
			}
		}
		var q, r;
		k.documentElement.compareDocumentPosition ? q = function(a, b) {
			if (a === b) return h = !0, 0;
			if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
			return a.compareDocumentPosition(b) & 4 ? -1 : 1
		} : (q = function(a, b) {
			var c, d, f = [],
				g = [];
			c = a.parentNode;
			d = b.parentNode;
			var e = c;
			if (a === b) return h = !0, 0;
			else if (c === d) return r(a, b);
			else if (c) {
				if (!d) return 1
			} else return -1;
			for (; e;) f.unshift(e), e = e.parentNode;
			for (e = d; e;) g.unshift(e), e = e.parentNode;
			c = f.length;
			d = g.length;
			for (e =
				0; e < c && e < d; e++) if (f[e] !== g[e]) return r(f[e], g[e]);
			return e === c ? r(a, g[e], -1) : r(f[e], b, 1)
		}, r = function(a, b, c) {
			if (a === b) return c;
			for (a = a.nextSibling; a;) {
				if (a === b) return -1;
				a = a.nextSibling
			}
			return 1
		});
		j.getText = function(a) {
			for (var b = "", c, d = 0; a[d]; d++) c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += j.getText(c.childNodes));
			return b
		};
		(function() {
			var a = k.createElement("div"),
				b = "script" + (new Date).getTime(),
				c = k.documentElement;
			a.innerHTML = "<a name='" + b + "'/>";
			c.insertBefore(a, c.firstChild);
			if (k.getElementById(b)) l.find.ID = function(a, b, c) {
					if (typeof b.getElementById !== "undefined" && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id").nodeValue === a[1] ? [b] : i : []
			}, l.filter.ID = function(a, b) {
				var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
				return a.nodeType === 1 && c && c.nodeValue === b
			};
			c.removeChild(a);
			c = a = null
		})();
		(function() {
			var a = k.createElement("div");
			a.appendChild(k.createComment(""));
			if (a.getElementsByTagName("*").length >
				0) l.find.TAG = function(a, b) {
					var c = b.getElementsByTagName(a[1]);
					if (a[1] === "*") {
						for (var d = [], f = 0; c[f]; f++) c[f].nodeType === 1 && d.push(c[f]);
						c = d
					}
					return c
			};
			a.innerHTML = "<a href='#'></a>";
			if (a.firstChild && typeof a.firstChild.getAttribute !== "undefined" && a.firstChild.getAttribute("href") !== "#") l.attrHandle.href = function(a) {
					return a.getAttribute("href", 2)
			};
			a = null
		})();
		k.querySelectorAll && function() {
			var a = j,
				b = k.createElement("div");
			b.innerHTML = "<p class='TEST'></p>";
			if (!(b.querySelectorAll && b.querySelectorAll(".TEST").length ===
				0)) {
				j = function(b, c, d, f) {
					c = c || k;
					b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!f && !j.isXML(c)) if (c.nodeType === 9) try {
								return v(c.querySelectorAll(b), d)
						} catch (g) {} else if (c.nodeType === 1 && c.nodeName.toLowerCase() !== "object") {
						var h = c.getAttribute("id"),
							e = h || "__sizzle__";
						h || c.setAttribute("id", e);
						try {
							return v(c.querySelectorAll("#" + e + " " + b), d)
						} catch (m) {} finally {
							h || c.removeAttribute("id")
						}
					}
					return a(b, c, d, f)
				};
				for (var c in a) j[c] = a[c];
				b = null
			}
		}();
		(function() {
			var a = k.documentElement,
				b = a.matchesSelector || a.mozMatchesSelector ||
					a.webkitMatchesSelector || a.msMatchesSelector,
				c = !1;
			try {
				b.call(k.documentElement, "[test!='']:sizzle")
			} catch (d) {
				c = !0
			}
			if (b) j.matchesSelector = function(a, d) {
					d = d.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!j.isXML(a)) try {
							if (c || !l.match.PSEUDO.test(d) && !/!=/.test(d)) return b.call(a, d)
					} catch (f) {}
					return j(d, null, null, [a]).length > 0
			}
		})();
		(function() {
			var a = k.createElement("div");
			a.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if (a.getElementsByClassName && a.getElementsByClassName("e").length !==
				0 && (a.lastChild.className = "e", a.getElementsByClassName("e").length !== 1)) l.order.splice(1, 0, "CLASS"), l.find.CLASS = function(a, b, c) {
					if (typeof b.getElementsByClassName !== "undefined" && !c) return b.getElementsByClassName(a[1])
			}, a = null
		})();
		j.contains = k.documentElement.contains ? function(a, b) {
			return a !== b && (a.contains ? a.contains(b) : !0)
		} : k.documentElement.compareDocumentPosition ? function(a, b) {
			return !!(a.compareDocumentPosition(b) & 16)
		} : function() {
			return !1
		};
		j.isXML = function(a) {
			return (a = (a ? a.ownerDocument || a : 0).documentElement) ?
				a.nodeName !== "HTML" : !1
		};
		var z = function(a, b) {
			for (var c, d = [], f = "", g = b.nodeType ? [b] : b; c = l.match.PSEUDO.exec(a);) f += c[0], a = a.replace(l.match.PSEUDO, "");
			a = l.relative[a] ? a + "*" : a;
			c = 0;
			for (var h = g.length; c < h; c++) j(a, g[c], d);
			return j.filter(f, d)
		};
		c.find = j;
		c.expr = j.selectors;
		c.expr[":"] = c.expr.filters;
		c.unique = j.uniqueSort;
		c.text = j.getText;
		c.isXMLDoc = j.isXML;
		c.contains = j.contains
	})();
	var Ha = /Until$/,
		Ia = /^(?:parents|prevUntil|prevAll)/,
		Ja = /,/,
		za = /^.[^:#\[\.,]*$/,
		Ka = Array.prototype.slice,
		La = c.expr.match.POS;
	c.fn.extend({
		find: function(a) {
			for (var b =
				this.pushStack("", "find", a), d = 0, f = 0, g = this.length; f < g; f++) if (d = b.length, c.find(a, this[f], b), f > 0) for (var h = d; h < b.length; h++) for (var e = 0; e < d; e++) if (b[e] === b[h]) {
								b.splice(h--, 1);
								break
							}
			return b
		},
		has: function(a) {
			var b = c(a);
			return this.filter(function() {
				for (var a = 0, f = b.length; a < f; a++) if (c.contains(this, b[a])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(w(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(w(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !!a && c.filter(a, this).length > 0
		},
		closest: function(a,
			b) {
			var d = [],
				f, g, h = this[0];
			if (c.isArray(a)) {
				var e, j = {}, l = 1;
				if (h && a.length) {
					f = 0;
					for (g = a.length; f < g; f++) e = a[f], j[e] || (j[e] = c.expr.match.POS.test(e) ? c(e, b || this.context) : e);
					for (; h && h.ownerDocument && h !== b;) {
						for (e in j) f = j[e], (f.jquery ? f.index(h) > -1 : c(h).is(f)) && d.push({
								selector: e,
								elem: h,
								level: l
							});
						h = h.parentNode;
						l++
					}
				}
				return d
			}
			e = La.test(a) ? c(a, b || this.context) : null;
			f = 0;
			for (g = this.length; f < g; f++) for (h = this[f]; h;) if (e ? e.index(h) > -1 : c.find.matchesSelector(h, a)) {
						d.push(h);
						break
					} else
			if (h = h.parentNode, !h || !h.ownerDocument ||
				h === b) break;
			d = d.length > 1 ? c.unique(d) : d;
			return this.pushStack(d, "closest", a)
		},
		index: function(a) {
			if (!a || typeof a === "string") return c.inArray(this[0], a ? c(a) : this.parent().children());
			return c.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(a, b) {
			var d = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a),
				f = c.merge(this.get(), d);
			return this.pushStack(!d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 || !f[0] || !f[0].parentNode || f[0].parentNode.nodeType === 11 ? f : c.unique(f))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	});
	c.each({
		parent: function(a) {
			return (a = a.parentNode) && a.nodeType !== 11 ? a : null
		},
		parents: function(a) {
			return c.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, d) {
			return c.dir(a, "parentNode", d)
		},
		next: function(a) {
			return c.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return c.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return c.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return c.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, d) {
			return c.dir(a, "nextSibling", d)
		},
		prevUntil: function(a, b, d) {
			return c.dir(a, "previousSibling",
				d)
		},
		siblings: function(a) {
			return c.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return c.sibling(a.firstChild)
		},
		contents: function(a) {
			return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
		}
	}, function(a, b) {
		c.fn[a] = function(d, f) {
			var g = c.map(this, b, d);
			Ha.test(a) || (f = d);
			f && typeof f === "string" && (g = c.filter(f, g));
			g = this.length > 1 ? c.unique(g) : g;
			if ((this.length > 1 || Ja.test(f)) && Ia.test(a)) g = g.reverse();
			return this.pushStack(g, a, Ka.call(arguments).join(","))
		}
	});
	c.extend({
		filter: function(a, b, d) {
			d && (a = ":not(" + a + ")");
			return b.length === 1 ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
		},
		dir: function(a, b, d) {
			for (var f = [], a = a[b]; a && a.nodeType !== 9 && (d === i || a.nodeType !== 1 || !c(a).is(d));) a.nodeType === 1 && f.push(a), a = a[b];
			return f
		},
		nth: function(a, b, c) {
			for (var b = b || 1, f = 0; a; a = a[c]) if (a.nodeType === 1 && ++f === b) break;
			return a
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
			return c
		}
	});
	var oa = / jQuery\d+="(?:\d+|null)"/g,
		aa = /^\s+/,
		pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		qa = /<([\w:]+)/,
		Ma = /<tbody/i,
		Na = /<|&#?\w+;/,
		ra = /<(?:script|object|embed|option|style)/i,
		sa = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Oa = /\=([^="'>\s]+\/)>/g,
		D = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		};
	D.optgroup = D.option;
	D.tbody = D.tfoot = D.colgroup = D.caption = D.thead;
	D.th = D.td;
	if (!c.support.htmlSerialize) D._default = [1, "div<div>", "</div>"];
	c.fn.extend({
		text: function(a) {
			if (c.isFunction(a)) return this.each(function(b) {
					var d = c(this);
					d.text(a.call(this, b, d.text()))
				});
			if (typeof a !== "object" && a !== i) return this.empty().append((this[0] && this[0].ownerDocument || k).createTextNode(a));
			return c.text(this)
		},
		wrapAll: function(a) {
			if (c.isFunction(a)) return this.each(function(b) {
					c(this).wrapAll(a.call(this,
						b))
				});
			if (this[0]) {
				var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]);
				b.map(function() {
					for (var a = this; a.firstChild && a.firstChild.nodeType === 1;) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			if (c.isFunction(a)) return this.each(function(b) {
					c(this).wrapInner(a.call(this, b))
				});
			return this.each(function() {
				var b = c(this),
					d = b.contents();
				d.length ? d.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			return this.each(function() {
				c(this).wrapAll(a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this)
				});
			else if (arguments.length) {
				var a =
					c(arguments[0]);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this.nextSibling)
				});
			else if (arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, c(arguments[0]).toArray());
				return a
			}
		},
		remove: function(a, b) {
			for (var d = 0, f;
			(f = this[d]) != null; d++) if (!a || c.filter(a, [f]).length)!b && f.nodeType === 1 && (c.cleanData(f.getElementsByTagName("*")),
				c.cleanData([f])), f.parentNode && f.parentNode.removeChild(f);
			return this
		},
		empty: function() {
			for (var a = 0, b;
			(b = this[a]) != null; a++) for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
			return this
		},
		clone: function(a) {
			var b = this.map(function() {
				if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
					var a = this.outerHTML,
						b = this.ownerDocument;
					if (!a) a = b.createElement("div"), a.appendChild(this.cloneNode(!0)), a = a.innerHTML;
					return c.clean([a.replace(oa, "").replace(Oa, '="$1">').replace(aa,
							"")], b)[0]
				} else return this.cloneNode(!0)
			});
			a === !0 && (B(this, b), B(this.find("*"), b.find("*")));
			return b
		},
		html: function(a) {
			if (a === i) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(oa, "") : null;
			else if (typeof a === "string" && !ra.test(a) && (c.support.leadingWhitespace || !aa.test(a)) && !D[(qa.exec(a) || ["", ""])[1].toLowerCase()]) {
				a = a.replace(pa, "<$1></$2>");
				try {
					for (var b = 0, d = this.length; b < d; b++) if (this[b].nodeType === 1) c.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a
				} catch (f) {
					this.empty().append(a)
				}
			} else c.isFunction(a) ?
					this.each(function(b) {
					var d = c(this);
					d.html(a.call(this, b, d.html()))
				}) : this.empty().append(a);
			return this
		},
		replaceWith: function(a) {
			if (this[0] && this[0].parentNode) {
				if (c.isFunction(a)) return this.each(function(b) {
						var d = c(this),
							f = d.html();
						d.replaceWith(a.call(this, b, f))
					});
				typeof a !== "string" && (a = c(a).detach());
				return this.each(function() {
					var b = this.nextSibling,
						d = this.parentNode;
					c(this).remove();
					b ? c(b).before(a) : c(d).append(a)
				})
			} else return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, b, d) {
			var f, g, h, e = a[0],
				j = [];
			if (!c.support.checkClone && arguments.length === 3 && typeof e === "string" && sa.test(e)) return this.each(function() {
					c(this).domManip(a, b, d, !0)
				});
			if (c.isFunction(e)) return this.each(function(f) {
					var g = c(this);
					a[0] = e.call(this, f, b ? g.html() : i);
					g.domManip(a, b, d)
				});
			if (this[0]) {
				f = e && e.parentNode;
				f = c.support.parentNode && f && f.nodeType === 11 && f.childNodes.length === this.length ? {
					fragment: f
				} : c.buildFragment(a, this, j);
				h = f.fragment;
				if (g = h.childNodes.length === 1 ? h = h.firstChild :
					h.firstChild) {
					b = b && c.nodeName(g, "tr");
					g = 0;
					for (var l = this.length; g < l; g++) d.call(b ? c.nodeName(this[g], "table") ? this[g].getElementsByTagName("tbody")[0] || this[g].appendChild(this[g].ownerDocument.createElement("tbody")) : this[g] : this[g], g > 0 || f.cacheable || this.length > 1 ? h.cloneNode(!0) : h)
				}
				j.length && c.each(j, F)
			}
			return this
		}
	});
	c.buildFragment = function(a, b, d) {
		var f, g, h, b = b && b[0] ? b[0].ownerDocument || b[0] : k;
		if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && b === k && !ra.test(a[0]) && (c.support.checkClone || !sa.test(a[0]))) if (g = !0, h = c.fragments[a[0]]) h !== 1 && (f = h);
		f || (f = b.createDocumentFragment(), c.clean(a, b, f, d));
		g && (c.fragments[a[0]] = h ? f : 1);
		return {
			fragment: f,
			cacheable: g
		}
	};
	c.fragments = {};
	c.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		c.fn[a] = function(d) {
			var f = [],
				d = c(d),
				g = this.length === 1 && this[0].parentNode;
			if (g && g.nodeType === 11 && g.childNodes.length === 1 && d.length === 1) return d[b](this[0]), this;
			else {
				for (var g = 0, h = d.length; g <
					h; g++) {
					var e = (g > 0 ? this.clone(!0) : this).get();
					c(d[g])[b](e);
					f = f.concat(e)
				}
				return this.pushStack(f, a, d.selector)
			}
		}
	});
	c.extend({
		clean: function(a, b, d, f) {
			b = b || k;
			typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || k);
			for (var g = [], h = 0, e;
			(e = a[h]) != null; h++) if (typeof e === "number" && (e += ""), e) {
					if (typeof e === "string" && !Na.test(e)) e = b.createTextNode(e);
					else if (typeof e === "string") {
						e = e.replace(pa, "<$1></$2>");
						var j = (qa.exec(e) || ["", ""])[1].toLowerCase(),
							l = D[j] || D._default,
							i = l[0],
							s = b.createElement("div");
						for (s.innerHTML = l[1] + e + l[2]; i--;) s = s.lastChild;
						if (!c.support.tbody) {
							i = Ma.test(e);
							j = j === "table" && !i ? s.firstChild && s.firstChild.childNodes : l[1] === "<table>" && !i ? s.childNodes : [];
							for (l = j.length - 1; l >= 0; --l) c.nodeName(j[l], "tbody") && !j[l].childNodes.length && j[l].parentNode.removeChild(j[l])
						}!c.support.leadingWhitespace && aa.test(e) && s.insertBefore(b.createTextNode(aa.exec(e)[0]), s.firstChild);
						e = s.childNodes
					}
					e.nodeType ? g.push(e) : g = c.merge(g, e)
				}
			if (d) for (h = 0; g[h]; h++) f && c.nodeName(g[h],
						"script") && (!g[h].type || g[h].type.toLowerCase() === "text/javascript") ? f.push(g[h].parentNode ? g[h].parentNode.removeChild(g[h]) : g[h]) : (g[h].nodeType === 1 && g.splice.apply(g, [h + 1, 0].concat(c.makeArray(g[h].getElementsByTagName("script")))), d.appendChild(g[h]));
			return g
		},
		cleanData: function(a) {
			for (var b, d, f = c.cache, g = c.event.special, e = c.support.deleteExpando, l = 0, j;
			(j = a[l]) != null; l++) if (!j.nodeName || !c.noData[j.nodeName.toLowerCase()]) if (d = j[c.expando]) {
						if ((b = f[d]) && b.events) for (var i in b.events) g[i] ? c.event.remove(j,
									i) : c.removeEvent(j, i, b.handle);
						e ? delete j[c.expando] : j.removeAttribute && j.removeAttribute(c.expando);
						delete f[d]
					}
		}
	});
	var ta = /alpha\([^)]*\)/i,
		Pa = /opacity=([^)]*)/,
		Qa = /-([a-z])/ig,
		Ra = /([A-Z])/g,
		ua = /^-?\d+(?:px)?$/i,
		Sa = /^-?\d/,
		Ta = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}, Aa = ["Left", "Right"],
		Ba = ["Top", "Bottom"],
		W, va, ba, Ua = function(a, b) {
			return b.toUpperCase()
		};
	c.fn.css = function(a, b) {
		if (arguments.length === 2 && b === i) return this;
		return c.access(this, a, b, !0, function(a, b, g) {
			return g !== i ? c.style(a,
				b, g) : c.css(a, b)
		})
	};
	c.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = W(a, "opacity", "opacity");
						return c === "" ? "1" : c
					} else return a.style.opacity
				}
			}
		},
		cssNumber: {
			zIndex: !0,
			fontWeight: !0,
			opacity: !0,
			zoom: !0,
			lineHeight: !0
		},
		cssProps: {
			"float": c.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, b, d, f) {
			if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
				var g, e = c.camelCase(b),
					l = a.style,
					j = c.cssHooks[e],
					b = c.cssProps[e] || e;
				if (d !== i) {
					if (!(typeof d === "number" && isNaN(d) || d == null)) if (typeof d === "number" && !c.cssNumber[e] && (d += "px"), !j || !("set" in j) || (d = j.set(a, d)) !== i) try {
								l[b] = d
						} catch (s) {}
				} else {
					if (j && "get" in j && (g = j.get(a, !1, f)) !== i) return g;
					return l[b]
				}
			}
		},
		css: function(a, b, d) {
			var f, g = c.camelCase(b),
				e = c.cssHooks[g],
				b = c.cssProps[g] || g;
			if (e && "get" in e && (f = e.get(a, !0, d)) !== i) return f;
			else if (W) return W(a, b, g)
		},
		swap: function(a, b, c) {
			var f = {}, g;
			for (g in b) f[g] = a.style[g], a.style[g] = b[g];
			c.call(a);
			for (g in b) a.style[g] = f[g]
		},
		camelCase: function(a) {
			return a.replace(Qa, Ua)
		}
	});
	c.curCSS = c.css;
	c.each(["height",
			"width"
	], function(a, b) {
		c.cssHooks[b] = {
			get: function(a, f, g) {
				var e;
				if (f) {
					a.offsetWidth !== 0 ? e = A(a, b, g) : c.swap(a, Ta, function() {
						e = A(a, b, g)
					});
					if (e <= 0 && (e = W(a, b, b), e === "0px" && ba && (e = ba(a, b, b)), e != null)) return e === "" || e === "auto" ? "0px" : e;
					if (e < 0 || e == null) return e = a.style[b], e === "" || e === "auto" ? "0px" : e;
					return typeof e === "string" ? e : e + "px"
				}
			},
			set: function(a, b) {
				if (ua.test(b)) {
					if (b = parseFloat(b), b >= 0) return b + "px"
				} else return b
			}
		}
	});
	if (!c.support.opacity) c.cssHooks.opacity = {
			get: function(a, b) {
				return Pa.test((b && a.currentStyle ?
					a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
			},
			set: function(a, b) {
				var d = a.style;
				d.zoom = 1;
				var f = c.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
					g = d.filter || "";
				d.filter = ta.test(g) ? g.replace(ta, f) : d.filter + " " + f
			}
	};
	k.defaultView && k.defaultView.getComputedStyle && (va = function(a, b, d) {
		var f, d = d.replace(Ra, "-$1").toLowerCase();
		if (!(b = a.ownerDocument.defaultView)) return i;
		if (b = b.getComputedStyle(a, null)) f = b.getPropertyValue(d), f === "" && !c.contains(a.ownerDocument.documentElement, a) &&
				(f = c.style(a, d));
		return f
	});
	k.documentElement.currentStyle && (ba = function(a, b) {
		var c, f, g = a.currentStyle && a.currentStyle[b],
			e = a.style;
		if (!ua.test(g) && Sa.test(g)) c = e.left, f = a.runtimeStyle.left, a.runtimeStyle.left = a.currentStyle.left, e.left = b === "fontSize" ? "1em" : g || 0, g = e.pixelLeft + "px", e.left = c, a.runtimeStyle.left = f;
		return g === "" ? "auto" : g
	});
	W = va || ba;
	if (c.expr && c.expr.filters) c.expr.filters.hidden = function(a) {
			var b = a.offsetHeight;
			return a.offsetWidth === 0 && b === 0 || !c.support.reliableHiddenOffsets && (a.style.display ||
				c.css(a, "display")) === "none"
	}, c.expr.filters.visible = function(a) {
		return !c.expr.filters.hidden(a)
	};
	var Va = c.now(),
		Wa = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Xa = /^(?:select|textarea)/i,
		Ya = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Za = /^(?:GET|HEAD)$/,
		Ca = /\[\]$/,
		N = /\=\?(&|$)/,
		fa = /\?/,
		$a = /([?&])_=[^&]*/,
		ab = /^(\w+:)?\/\/([^\/?#]+)/,
		bb = /%20/g,
		cb = /#.*$/,
		wa = c.fn.load;
	c.fn.extend({
		load: function(a, b, d) {
			if (typeof a !== "string" && wa) return wa.apply(this,
					arguments);
			else if (!this.length) return this;
			var f = a.indexOf(" ");
			if (f >= 0) var g = a.slice(f, a.length),
			a = a.slice(0, f);
			f = "GET";
			b && (c.isFunction(b) ? (d = b, b = null) : typeof b === "object" && (b = c.param(b, c.ajaxSettings.traditional), f = "POST"));
			var e = this;
			c.ajax({
				url: a,
				type: f,
				dataType: "html",
				data: b,
				complete: function(a, b) {
					if (b === "success" || b === "notmodified") e.html(g ? c("<div>").append(a.responseText.replace(Wa, "")).find(g) : a.responseText);
					d && e.each(d, [a.responseText, b, a])
				}
			});
			return this
		},
		serialize: function() {
			return c.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? c.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Xa.test(this.nodeName) || Ya.test(this.type))
			}).map(function(a, b) {
				var d = c(this).val();
				return d == null ? null : c.isArray(d) ? c.map(d, function(a) {
					return {
						name: b.name,
						value: a
					}
				}) : {
					name: b.name,
					value: d
				}
			}).get()
		}
	});
	c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		c.fn[b] = function(a) {
			return this.bind(b,
				a)
		}
	});
	c.extend({
		get: function(a, b, d, f) {
			c.isFunction(b) && (f = f || d, d = b, b = null);
			return c.ajax({
				type: "GET",
				url: a,
				data: b,
				success: d,
				dataType: f
			})
		},
		getScript: function(a, b) {
			return c.get(a, null, b, "script")
		},
		getJSON: function(a, b, d) {
			return c.get(a, b, d, "json")
		},
		post: function(a, b, d, f) {
			c.isFunction(b) && (f = f || d, d = b, b = {});
			return c.ajax({
				type: "POST",
				url: a,
				data: b,
				success: d,
				dataType: f
			})
		},
		ajaxSetup: function(a) {
			c.extend(c.ajaxSettings, a)
		},
		ajaxSettings: {
			url: location.href,
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			xhr: function() {
				return new n.XMLHttpRequest
			},
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				script: "text/javascript, application/javascript",
				json: "application/json, text/javascript",
				text: "text/plain",
				_default: "*/*"
			}
		},
		ajax: function(a) {
			var b = c.extend(!0, {}, c.ajaxSettings, a),
				d, f, g, e = b.type.toUpperCase(),
				l = Za.test(e);
			b.url = b.url.replace(cb, "");
			b.context = a && a.context != null ? a.context : b;
			if (b.data && b.processData && typeof b.data !== "string") b.data = c.param(b.data, b.traditional);
			if (b.dataType === "jsonp") {
				if (e === "GET") N.test(b.url) || (b.url += (fa.test(b.url) ? "&" : "?") + (b.jsonp || "callback") + "=?");
				else if (!b.data || !N.test(b.data)) b.data = (b.data ? b.data + "&" : "") + (b.jsonp || "callback") + "=?";
				b.dataType = "json"
			}
			if (b.dataType === "json" && (b.data && N.test(b.data) || N.test(b.url))) {
				d = b.jsonpCallback || "jsonp" + Va++;
				if (b.data) b.data = (b.data + "").replace(N, "=" + d + "$1");
				b.url = b.url.replace(N, "=" + d + "$1");
				b.dataType = "script";
				var j = n[d];
				n[d] = function(a) {
					if (c.isFunction(j)) j(a);
					else {
						n[d] = i;
						try {
							delete n[d]
						} catch (e) {}
					}
					g =
						a;
					c.handleSuccess(b, q, f, g);
					c.handleComplete(b, q, f, g);
					o && o.removeChild(v)
				}
			}
			if (b.dataType === "script" && b.cache === null) b.cache = !1;
			if (b.cache === !1 && l) {
				var s = c.now(),
					p = b.url.replace($a, "$1_=" + s);
				b.url = p + (p === b.url ? (fa.test(b.url) ? "&" : "?") + "_=" + s : "")
			}
			b.data && l && (b.url += (fa.test(b.url) ? "&" : "?") + b.data);
			b.global && c.active++ === 0 && c.event.trigger("ajaxStart");
			s = (s = ab.exec(b.url)) && (s[1] && s[1].toLowerCase() !== location.protocol || s[2].toLowerCase() !== location.host);
			if (b.dataType === "script" && e === "GET" && s) {
				var o =
					k.getElementsByTagName("head")[0] || k.documentElement,
					v = k.createElement("script");
				if (b.scriptCharset) v.charset = b.scriptCharset;
				v.src = b.url;
				if (!d) {
					var r = !1;
					v.onload = v.onreadystatechange = function() {
						if (!r && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) r = !0, c.handleSuccess(b, q, f, g), c.handleComplete(b, q, f, g), v.onload = v.onreadystatechange = null, o && v.parentNode && o.removeChild(v)
					}
				}
				o.insertBefore(v, o.firstChild);
				return i
			}
			var z = !1,
				q = b.xhr();
			if (q) {
				b.username ? q.open(e, b.url, b.async,
					b.username, b.password) : q.open(e, b.url, b.async);
				try {
					(b.data != null && !l || a && a.contentType) && q.setRequestHeader("Content-Type", b.contentType), b.ifModified && (c.lastModified[b.url] && q.setRequestHeader("If-Modified-Since", c.lastModified[b.url]), c.etag[b.url] && q.setRequestHeader("If-None-Match", c.etag[b.url])), s || q.setRequestHeader("X-Requested-With", "XMLHttpRequest"), q.setRequestHeader("Accept", b.dataType && b.accepts[b.dataType] ? b.accepts[b.dataType] + ", */*; q=0.01" : b.accepts._default)
				} catch (y) {}
				if (b.beforeSend &&
					b.beforeSend.call(b.context, q, b) === !1) return b.global && c.active-- === 1 && c.event.trigger("ajaxStop"), q.abort(), !1;
				b.global && c.triggerGlobal(b, "ajaxSend", [q, b]);
				var w = q.onreadystatechange = function(a) {
					if (!q || q.readyState === 0 || a === "abort") {
						if (z || c.handleComplete(b, q, f, g), z = !0, q) q.onreadystatechange = c.noop
					} else if (!z && q && (q.readyState === 4 || a === "timeout")) {
						z = !0;
						q.onreadystatechange = c.noop;
						f = a === "timeout" ? "timeout" : !c.httpSuccess(q) ? "error" : b.ifModified && c.httpNotModified(q, b.url) ? "notmodified" : "success";
						var e;
						if (f === "success") try {
								g = c.httpData(q, b.dataType, b)
						} catch (h) {
							f = "parsererror", e = h
						}
						f === "success" || f === "notmodified" ? d || c.handleSuccess(b, q, f, g) : c.handleError(b, q, f, e);
						d || c.handleComplete(b, q, f, g);
						a === "timeout" && q.abort();
						b.async && (q = null)
					}
				};
				try {
					var u = q.abort;
					q.abort = function() {
						q && Function.prototype.call.call(u, q);
						w("abort")
					}
				} catch (t) {}
				b.async && b.timeout > 0 && setTimeout(function() {
					q && !z && w("timeout")
				}, b.timeout);
				try {
					q.send(l || b.data == null ? null : b.data)
				} catch (I) {
					c.handleError(b, q, null, I), c.handleComplete(b,
						q, f, g)
				}
				b.async || w();
				return q
			}
		},
		param: function(a, b) {
			var d = [],
				f = function(a, b) {
					b = c.isFunction(b) ? b() : b;
					d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
				};
			if (b === i) b = c.ajaxSettings.traditional;
			if (c.isArray(a) || a.jquery) c.each(a, function() {
					f(this.name, this.value)
				});
			else for (var g in a) x(g, a[g], b, f);
			return d.join("&").replace(bb, "+")
		}
	});
	c.extend({
		active: 0,
		lastModified: {},
		etag: {},
		handleError: function(a, b, d, f) {
			a.error && a.error.call(a.context, b, d, f);
			a.global && c.triggerGlobal(a, "ajaxError", [b, a, f])
		},
		handleSuccess: function(a, b, d, f) {
			a.success && a.success.call(a.context, f, d, b);
			a.global && c.triggerGlobal(a, "ajaxSuccess", [b, a])
		},
		handleComplete: function(a, b, d) {
			a.complete && a.complete.call(a.context, b, d);
			a.global && c.triggerGlobal(a, "ajaxComplete", [b, a]);
			a.global && c.active-- === 1 && c.event.trigger("ajaxStop")
		},
		triggerGlobal: function(a, b, d) {
			(a.context && a.context.url == null ? c(a.context) : c.event).trigger(b, d)
		},
		httpSuccess: function(a) {
			try {
				return !a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 ||
					a.status === 304 || a.status === 1223
			} catch (b) {}
			return !1
		},
		httpNotModified: function(a, b) {
			var d = a.getResponseHeader("Last-Modified"),
				f = a.getResponseHeader("Etag");
			d && (c.lastModified[b] = d);
			f && (c.etag[b] = f);
			return a.status === 304
		},
		httpData: function(a, b, d) {
			var f = a.getResponseHeader("content-type") || "",
				g = b === "xml" || !b && f.indexOf("xml") >= 0,
				a = g ? a.responseXML : a.responseText;
			g && a.documentElement.nodeName === "parsererror" && c.error("parsererror");
			d && d.dataFilter && (a = d.dataFilter(a, b));
			typeof a === "string" && (b === "json" || !b && f.indexOf("json") >= 0 ? a = c.parseJSON(a) : (b === "script" || !b && f.indexOf("javascript") >= 0) && c.globalEval(a));
			return a
		}
	});
	if (n.ActiveXObject) c.ajaxSettings.xhr = function() {
			if (n.location.protocol !== "file:") try {
					return new n.XMLHttpRequest
			} catch (a) {}
			try {
				return new n.ActiveXObject("Microsoft.XMLHTTP")
			} catch (b) {}
	};
	c.support.ajax = !! c.ajaxSettings.xhr();
	var da = {}, db = /^(?:toggle|show|hide)$/,
		eb = /^([+\-]=)?([\d+.\-]+)(.*)$/,
		ca, ga = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft",
					"marginRight", "paddingLeft", "paddingRight"
			],
			["opacity"]
		];
	c.fn.extend({
		show: function(a, b, d) {
			if (a || a === 0) return this.animate(G("show", 3), a, b, d);
			else {
				for (var d = 0, f = this.length; d < f; d++) {
					a = this[d];
					b = a.style.display;
					if (!c.data(a, "olddisplay") && b === "none") b = a.style.display = "";
					b === "" && c.css(a, "display") === "none" && c.data(a, "olddisplay", O(a.nodeName))
				}
				for (d = 0; d < f; d++) if (a = this[d], b = a.style.display, b === "" || b === "none") a.style.display = c.data(a, "olddisplay") || "";
				return this
			}
		},
		hide: function(a, b, d) {
			if (a || a === 0) return this.animate(G("hide",
					3), a, b, d);
			else {
				a = 0;
				for (b = this.length; a < b; a++) d = c.css(this[a], "display"), d !== "none" && c.data(this[a], "olddisplay", d);
				for (a = 0; a < b; a++) this[a].style.display = "none";
				return this
			}
		},
		_toggle: c.fn.toggle,
		toggle: function(a, b, d) {
			var f = typeof a === "boolean";
			c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || f ? this.each(function() {
				var b = f ? a : c(this).is(":hidden");
				c(this)[b ? "show" : "hide"]()
			}) : this.animate(G("toggle", 3), a, b, d);
			return this
		},
		fadeTo: function(a, b, c, f) {
			return this.filter(":hidden").css("opacity",
				0).show().end().animate({
				opacity: b
			}, a, c, f)
		},
		animate: function(a, b, d, f) {
			var g = c.speed(b, d, f);
			if (c.isEmptyObject(a)) return this.each(g.complete);
			return this[g.queue === !1 ? "each" : "queue"](function() {
				var b = c.extend({}, g),
					d, f = this.nodeType === 1,
					e = f && c(this).is(":hidden"),
					l = this;
				for (d in a) {
					var i = c.camelCase(d);
					d !== i && (a[i] = a[d], delete a[d], d = i);
					if (a[d] === "hide" && e || a[d] === "show" && !e) return b.complete.call(this);
					if (f && (d === "height" || d === "width")) if (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
							c.css(this, "display") === "inline" && c.css(this, "float") === "none") c.support.inlineBlockNeedsLayout ? O(this.nodeName) === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1) : this.style.display = "inline-block";
					if (c.isArray(a[d]))(b.specialEasing = b.specialEasing || {})[d] = a[d][1], a[d] = a[d][0]
				}
				if (b.overflow != null) this.style.overflow = "hidden";
				b.curAnim = c.extend({}, a);
				c.each(a, function(d, f) {
					var g = new c.fx(l, b, d);
					if (db.test(f)) g[f === "toggle" ? e ? "show" : "hide" : f](a);
					else {
						var j =
							eb.exec(f),
							i = g.cur() || 0;
						if (j) {
							var s = parseFloat(j[2]),
								m = j[3] || "px";
							m !== "px" && (c.style(l, d, (s || 1) + m), i *= (s || 1) / g.cur(), c.style(l, d, i + m));
							j[1] && (s = (j[1] === "-=" ? -1 : 1) * s + i);
							g.custom(i, s, m)
						} else g.custom(i, f, "")
					}
				});
				return !0
			})
		},
		stop: function(a, b) {
			var d = c.timers;
			a && this.queue([]);
			this.each(function() {
				for (var a = d.length - 1; a >= 0; a--) d[a].elem === this && (b && d[a](!0), d.splice(a, 1))
			});
			b || this.dequeue();
			return this
		}
	});
	c.each({
		slideDown: G("show", 1),
		slideUp: G("hide", 1),
		slideToggle: G("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		c.fn[a] = function(a, c, g) {
			return this.animate(b, a, c, g)
		}
	});
	c.extend({
		speed: function(a, b, d) {
			var f = a && typeof a === "object" ? c.extend({}, a) : {
				complete: d || !d && b || c.isFunction(a) && a,
				duration: a,
				easing: d && b || b && !c.isFunction(b) && b
			};
			f.duration = c.fx.off ? 0 : typeof f.duration === "number" ? f.duration : f.duration in c.fx.speeds ? c.fx.speeds[f.duration] : c.fx.speeds._default;
			f.old = f.complete;
			f.complete = function() {
				f.queue !== !1 && c(this).dequeue();
				c.isFunction(f.old) &&
					f.old.call(this)
			};
			return f
		},
		easing: {
			linear: function(a, b, c, f) {
				return c + f * a
			},
			swing: function(a, b, c, f) {
				return (-Math.cos(a * Math.PI) / 2 + 0.5) * f + c
			}
		},
		timers: [],
		fx: function(a, b, c) {
			this.options = b;
			this.elem = a;
			this.prop = c;
			if (!b.orig) b.orig = {}
		}
	});
	c.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this);
			(c.fx.step[this.prop] || c.fx.step._default)(this)
		},
		cur: function() {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
			var a = parseFloat(c.css(this.elem, this.prop));
			return a && a > -1E4 ? a : 0
		},
		custom: function(a, b, d) {
			function f(a) {
				return g.step(a)
			}
			var g = this,
				e = c.fx;
			this.startTime = c.now();
			this.start = a;
			this.end = b;
			this.unit = d || this.unit || "px";
			this.now = this.start;
			this.pos = this.state = 0;
			f.elem = this.elem;
			f() && c.timers.push(f) && !ca && (ca = setInterval(e.tick, e.interval))
		},
		show: function() {
			this.options.orig[this.prop] = c.style(this.elem, this.prop);
			this.options.show = !0;
			this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
			c(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = c.style(this.elem, this.prop);
			this.options.hide = !0;
			this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b = c.now(),
				d = !0;
			if (a || b >= this.options.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				this.options.curAnim[this.prop] = !0;
				for (var f in this.options.curAnim) this.options.curAnim[f] !== !0 && (d = !1);
				if (d) {
					if (this.options.overflow != null && !c.support.shrinkWrapBlocks) {
						var g = this.elem,
							e = this.options;
						c.each(["", "X", "Y"], function(a, b) {
							g.style["overflow" + b] = e.overflow[a]
						})
					}
					this.options.hide && c(this.elem).hide();
					if (this.options.hide || this.options.show) for (var l in this.options.curAnim) c.style(this.elem, l, this.options.orig[l]);
					this.options.complete.call(this.elem)
				}
				return !1
			} else a = b - this.startTime, this.state = a / this.options.duration, b = this.options.easing || (c.easing.swing ? "swing" : "linear"), this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || b](this.state, a, 0, 1, this.options.duration), this.now =
					this.start + (this.end - this.start) * this.pos, this.update();
			return !0
		}
	};
	c.extend(c.fx, {
		tick: function() {
			for (var a = c.timers, b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
			a.length || c.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(ca);
			ca = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				c.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] =
					a.now
			}
		}
	});
	if (c.expr && c.expr.filters) c.expr.filters.animated = function(a) {
			return c.grep(c.timers, function(b) {
				return a === b.elem
			}).length
	};
	var fb = /^t(?:able|d|h)$/i,
		xa = /^(?:body|html)$/i;
	c.fn.offset = "getBoundingClientRect" in k.documentElement ? function(a) {
		var b = this[0],
			d;
		if (a) return this.each(function(b) {
				c.offset.setOffset(this, a, b)
			});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
		try {
			d = b.getBoundingClientRect()
		} catch (f) {}
		var g = b.ownerDocument,
			e = g.documentElement;
		if (!d || !c.contains(e, b)) return d || {
				top: 0,
				left: 0
		};
		b = g.body;
		g = E(g);
		return {
			top: d.top + (g.pageYOffset || c.support.boxModel && e.scrollTop || b.scrollTop) - (e.clientTop || b.clientTop || 0),
			left: d.left + (g.pageXOffset || c.support.boxModel && e.scrollLeft || b.scrollLeft) - (e.clientLeft || b.clientLeft || 0)
		}
	} : function(a) {
		var b = this[0];
		if (a) return this.each(function(b) {
				c.offset.setOffset(this, a, b)
			});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
		c.offset.initialize();
		var d, f = b.offsetParent,
			e = b.ownerDocument,
			h = e.documentElement,
			l = e.body;
		d = (e = e.defaultView) ? e.getComputedStyle(b, null) : b.currentStyle;
		for (var j = b.offsetTop, i = b.offsetLeft;
		(b = b.parentNode) && b !== l && b !== h;) {
			if (c.offset.supportsFixedPosition && d.position === "fixed") break;
			d = e ? e.getComputedStyle(b, null) : b.currentStyle;
			j -= b.scrollTop;
			i -= b.scrollLeft;
			if (b === f) {
				j += b.offsetTop;
				i += b.offsetLeft;
				if (c.offset.doesNotAddBorder && (!c.offset.doesAddBorderForTableAndCells || !fb.test(b.nodeName))) j += parseFloat(d.borderTopWidth) || 0, i += parseFloat(d.borderLeftWidth) ||
						0;
				f = b.offsetParent
			}
			c.offset.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (j += parseFloat(d.borderTopWidth) || 0, i += parseFloat(d.borderLeftWidth) || 0)
		}
		if (d.position === "relative" || d.position === "static") j += l.offsetTop, i += l.offsetLeft;
		c.offset.supportsFixedPosition && d.position === "fixed" && (j += Math.max(h.scrollTop, l.scrollTop), i += Math.max(h.scrollLeft, l.scrollLeft));
		return {
			top: j,
			left: i
		}
	};
	c.offset = {
		initialize: function() {
			var a = k.body,
				b = k.createElement("div"),
				d, f, e, h = parseFloat(c.css(a, "marginTop")) ||
					0;
			c.extend(b.style, {
				position: "absolute",
				top: 0,
				left: 0,
				margin: 0,
				border: 0,
				width: "1px",
				height: "1px",
				visibility: "hidden"
			});
			b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			a.insertBefore(b, a.firstChild);
			d = b.firstChild;
			f = d.firstChild;
			e = d.nextSibling.firstChild.firstChild;
			this.doesNotAddBorder = f.offsetTop !== 5;
			this.doesAddBorderForTableAndCells = e.offsetTop === 5;
			f.style.position = "fixed";
			f.style.top = "20px";
			this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15;
			f.style.position = f.style.top = "";
			d.style.overflow = "hidden";
			d.style.position = "relative";
			this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5;
			this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== h;
			a.removeChild(b);
			c.offset.initialize = c.noop
		},
		bodyOffset: function(a) {
			var b = a.offsetTop,
				d = a.offsetLeft;
			c.offset.initialize();
			c.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(c.css(a, "marginTop")) || 0, d += parseFloat(c.css(a, "marginLeft")) || 0);
			return {
				top: b,
				left: d
			}
		},
		setOffset: function(a, b, d) {
			var f = c.css(a, "position");
			if (f === "static") a.style.position = "relative";
			var e = c(a),
				h = e.offset(),
				l = c.css(a, "top"),
				j = c.css(a, "left"),
				i = f === "absolute" && c.inArray("auto", [l, j]) > -1,
				f = {}, s = {};
			i && (s = e.position());
			l = i ? s.top : parseInt(l, 10) || 0;
			j = i ? s.left : parseInt(j, 10) || 0;
			c.isFunction(b) && (b = b.call(a, d, h));
			if (b.top != null) f.top = b.top - h.top +
					l;
			if (b.left != null) f.left = b.left - h.left + j;
			"using" in b ? b.using.call(a, f) : e.css(f)
		}
	};
	c.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var a = this[0],
				b = this.offsetParent(),
				d = this.offset(),
				f = xa.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			d.top -= parseFloat(c.css(a, "marginTop")) || 0;
			d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
			f.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
			f.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
			return {
				top: d.top - f.top,
				left: d.left - f.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a =
					this.offsetParent || k.body; a && !xa.test(a.nodeName) && c.css(a, "position") === "static";) a = a.offsetParent;
				return a
			})
		}
	});
	c.each(["Left", "Top"], function(a, b) {
		var d = "scroll" + b;
		c.fn[d] = function(b) {
			var e = this[0],
				h;
			if (!e) return null;
			return b !== i ? this.each(function() {
				(h = E(this)) ? h.scrollTo(!a ? b : c(h).scrollLeft(), a ? b : c(h).scrollTop()) : this[d] = b
			}) : (h = E(e)) ? "pageXOffset" in h ? h[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && h.document.documentElement[d] || h.document.body[d] : e[d]
		}
	});
	c.each(["Height", "Width"], function(a,
		b) {
		var d = b.toLowerCase();
		c.fn["inner" + b] = function() {
			return this[0] ? parseFloat(c.css(this[0], d, "padding")) : null
		};
		c.fn["outer" + b] = function(a) {
			return this[0] ? parseFloat(c.css(this[0], d, a ? "margin" : "border")) : null
		};
		c.fn[d] = function(a) {
			var e = this[0];
			if (!e) return a == null ? null : this;
			if (c.isFunction(a)) return this.each(function(b) {
					var e = c(this);
					e[d](a.call(this, b, e[d]()))
				});
			if (c.isWindow(e)) return e.document.compatMode === "CSS1Compat" && e.document.documentElement["client" + b] || e.document.body["client" + b];
			else if (e.nodeType ===
				9) return Math.max(e.documentElement["client" + b], e.body["scroll" + b], e.documentElement["scroll" + b], e.body["offset" + b], e.documentElement["offset" + b]);
			else if (a === i) {
				var e = c.css(e, d),
					h = parseFloat(e);
				return c.isNaN(h) ? e : h
			} else return this.css(d, typeof a === "string" ? a : a + "px")
		}
	})
})(window);
window.Modernizr = function(n, i, t) {
	function e() {
		r.input = function(c) {
			for (var e = 0, i = c.length; e < i; e++) R[c[e]] = !! (c[e] in x);
			return R
		}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
		r.inputtypes = function(c) {
			for (var e = 0, k, p, o, n = c.length; e < n; e++) x.setAttribute("type", p = c[e]), (k = x.type !== "text") && (x.value = G, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(p) && x.style.WebkitAppearance !== t ? (w.appendChild(x), o = i.defaultView, k = o.getComputedStyle &&
					o.getComputedStyle(x, null).WebkitAppearance !== "textfield" && x.offsetHeight !== 0, w.removeChild(x)) : /^(search|tel)$/.test(p) || (/^(url|email)$/.test(p) ? k = x.checkValidity && x.checkValidity() === !1 : /^color$/.test(p) ? (w.appendChild(x), k = x.value != G, w.removeChild(x)) : k = x.value != G)), X[c[e]] = !! k;
			return X
		}("search tel url email datetime date month week time datetime-local number range color".split(" "))
	}
	function p(c, e) {
		var i = c.charAt(0).toUpperCase() + c.substr(1),
			i = (c + " " + k.join(i + " ") + i).split(" ");
		return !!z(i,
			e)
	}
	function z(c, e) {
		for (var i in c) if (A[c[i]] !== t && (!e || e(c[i], F))) return !0
	}
	function y(c, e) {
		return typeof c === e
	}
	var r = {}, w = i.documentElement,
		B = i.head || i.getElementsByTagName("head")[0],
		F = i.createElement("modernizr"),
		A = F.style,
		x = i.createElement("input"),
		G = ":)",
		O = Object.prototype.toString,
		E = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
		k = "Webkit Moz O ms Khtml".split(" "),
		c = {
			svg: "http://www.w3.org/2000/svg"
		}, o = {}, X = {}, R = {}, K = [],
		L, Y = function(c) {
			var e = i.createElement("style"),
				k = i.createElement("div");
			e.textContent = c + "{#modernizr{height:3px}}";
			B.appendChild(e);
			k.id = "modernizr";
			w.appendChild(k);
			c = k.offsetHeight === 3;
			e.parentNode.removeChild(e);
			k.parentNode.removeChild(k);
			return !!c
		}, S = function() {
			var c = {
				select: "input",
				change: "input",
				submit: "form",
				reset: "form",
				error: "img",
				load: "img",
				abort: "img"
			};
			return function(e, k) {
				var k = k || i.createElement(c[e] || "div"),
					p = (e = "on" + e) in k;
				p || (k.setAttribute || (k = i.createElement("div")), k.setAttribute && k.removeAttribute && (k.setAttribute(e, ""), p = y(k[e], "function"), y(k[e],
					t) || (k[e] = t), k.removeAttribute(e)));
				return p
			}
		}(),
		T = {}.hasOwnProperty,
		U;
	y(T, t) || y(T.call, t) ? U = function(c, e) {
		return e in c && y(c.constructor.prototype[e], t)
	} : U = function(c, e) {
		return T.call(c, e)
	};
	o.flexbox = function() {
		var c = i.createElement("div"),
			e = i.createElement("div");
		(function(c, e, i, l) {
			e += ":";
			c.style.cssText = (e + E.join(i + ";" + e)).slice(0, -e.length) + (l || "")
		})(c, "display", "box", "width:42px;padding:0;");
		e.style.cssText = E.join("box-flex:1;") + "width:10px;";
		c.appendChild(e);
		w.appendChild(c);
		var k = e.offsetWidth ===
			42;
		c.removeChild(e);
		w.removeChild(c);
		return k
	};
	o.canvas = function() {
		var c = i.createElement("canvas");
		return c.getContext && c.getContext("2d")
	};
	o.canvastext = function() {
		return r.canvas && y(i.createElement("canvas").getContext("2d").fillText, "function")
	};
	o.webgl = function() {
		return !!n.WebGLRenderingContext
	};
	o.touch = function() {
		return "ontouchstart" in n || Y("@media (" + E.join("touch-enabled),(") + "modernizr)")
	};
	o.geolocation = function() {
		return !!navigator.geolocation
	};
	o.postmessage = function() {
		return !!n.postMessage
	};
	o.websqldatabase = function() {
		return !!n.openDatabase
	};
	o.indexedDB = function() {
		for (var c = -1, e = k.length; ++c < e;) {
			var i = k[c].toLowerCase();
			if (n[i + "_indexedDB"] || n[i + "IndexedDB"]) return !0
		}
		return !1
	};
	o.hashchange = function() {
		return S("hashchange", n) && (i.documentMode === t || i.documentMode > 7)
	};
	o.history = function() {
		return !(!n.history || !history.pushState)
	};
	o.draganddrop = function() {
		return S("dragstart") && S("drop")
	};
	o.websockets = function() {
		return "WebSocket" in n
	};
	o.rgba = function() {
		A.cssText = "background-color:rgba(150,255,150,.5)";
		return ("" + A.backgroundColor).indexOf("rgba") !== -1
	};
	o.hsla = function() {
		A.cssText = "background-color:hsla(120,40%,100%,.5)";
		return ("" + A.backgroundColor).indexOf("rgba") !== -1 || ("" + A.backgroundColor).indexOf("hsla") !== -1
	};
	o.multiplebgs = function() {
		A.cssText = "background:url(//:),url(//:),red url(//:)";
		return /(url\s*\(.*?){3}/.test(A.background)
	};
	o.backgroundsize = function() {
		return p("backgroundSize")
	};
	o.borderimage = function() {
		return p("borderImage")
	};
	o.borderradius = function() {
		return p("borderRadius", "", function(c) {
			return ("" +
				c).indexOf("orderRadius") !== -1
		})
	};
	o.boxshadow = function() {
		return p("boxShadow")
	};
	o.textshadow = function() {
		return i.createElement("div").style.textShadow === ""
	};
	o.opacity = function() {
		var c = E.join("opacity:.55;") + "";
		A.cssText = c;
		return /^0.55$/.test(A.opacity)
	};
	o.cssanimations = function() {
		return p("animationName")
	};
	o.csscolumns = function() {
		return p("columnCount")
	};
	o.cssgradients = function() {
		var c = ("background-image:" + E.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:") + E.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
		A.cssText = c;
		return ("" + A.backgroundImage).indexOf("gradient") !== -1
	};
	o.cssreflections = function() {
		return p("boxReflect")
	};
	o.csstransforms = function() {
		return !!z(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
	};
	o.csstransforms3d = function() {
		var c = !! z(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
		c && "webkitPerspective" in w.style && (c = Y("@media (" + E.join("transform-3d),(") + "modernizr)"));
		return c
	};
	o.csstransitions = function() {
		return p("transitionProperty")
	};
	o.fontface = function() {
		var c, e, k = B || w,
			p = i.createElement("style");
		e = i.implementation || {
			hasFeature: function() {
				return !1
			}
		};
		p.type = "text/css";
		k.insertBefore(p, k.firstChild);
		c = p.sheet || p.styleSheet;
		e = (e.hasFeature("CSS2", "") ? function(e) {
			if (!c || !e) return !1;
			var i = !1;
			try {
				c.insertRule(e, 0), i = /src/i.test(c.cssRules[0].cssText), c.deleteRule(c.cssRules.length - 1)
			} catch (l) {}
			return i
		} : function(e) {
			if (!c || !e) return !1;
			c.cssText = e;
			return c.cssText.length !== 0 && /src/i.test(c.cssText) && c.cssText.replace(/\r+|\n+/g, "").indexOf(e.split(" ")[0]) ===
				0
		})('@font-face { font-family: "font"; src: url(data:,); }');
		k.removeChild(p);
		return e
	};
	o.video = function() {
		var c = i.createElement("video"),
			e = !! c.canPlayType;
		if (e) e = new Boolean(e), e.ogg = c.canPlayType('video/ogg; codecs="theora"'), e.h264 = c.canPlayType('video/mp4; codecs="avc1.42E01E"') || c.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'), e.webm = c.canPlayType('video/webm; codecs="vp8, vorbis"');
		return e
	};
	o.audio = function() {
		var c = i.createElement("audio"),
			e = !! c.canPlayType;
		e && (e = new Boolean(e),
			e.ogg = c.canPlayType('audio/ogg; codecs="vorbis"'), e.mp3 = c.canPlayType("audio/mpeg;"), e.wav = c.canPlayType('audio/wav; codecs="1"'), e.m4a = c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/aac;"));
		return e
	};
	o.localstorage = function() {
		try {
			return !!localStorage.getItem
		} catch (c) {
			return !1
		}
	};
	o.sessionstorage = function() {
		try {
			return !!sessionStorage.getItem
		} catch (c) {
			return !1
		}
	};
	o.webWorkers = function() {
		return !!n.Worker
	};
	o.applicationcache = function() {
		return !!n.applicationCache
	};
	o.svg = function() {
		return !!i.createElementNS && !! i.createElementNS(c.svg, "svg").createSVGRect
	};
	o.inlinesvg = function() {
		var e = i.createElement("div");
		e.innerHTML = "<svg/>";
		return (e.firstChild && e.firstChild.namespaceURI) == c.svg
	};
	o.smil = function() {
		return !!i.createElementNS && /SVG/.test(O.call(i.createElementNS(c.svg, "animate")))
	};
	o.svgclippaths = function() {
		return !!i.createElementNS && /SVG/.test(O.call(i.createElementNS(c.svg, "clipPath")))
	};
	for (var M in o) U(o, M) && (L = M.toLowerCase(), r[L] = o[M](), K.push((r[L] ? "" : "no-") + L));
	r.input || e();
	r.crosswindowmessaging =
		r.postmessage;
	r.historymanagement = r.history;
	r.addTest = function(c, e) {
		c = c.toLowerCase();
		if (!r[c]) return e = !! e(), w.className += " " + (e ? "" : "no-") + c, r[c] = e, r
	};
	A.cssText = "";
	F = x = null;
	n.attachEvent && function() {
		var c = i.createElement("div");
		c.innerHTML = "<elem></elem>";
		return c.childNodes.length !== 1
	}() && function(c, e) {
		function i(c, e) {
			for (var k = -1, l = c.length, p, o = []; ++k < l;) p = c[k], (e = p.media || e) != "screen" && o.push(i(p.imports, e), p.cssText);
			return o.join("")
		}
		function k(c) {
			for (var e = -1; ++e < o;) c.createElement(p[e])
		}
		var p =
			"abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),
			o = p.length,
			n = RegExp("(^|\\s)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)", "gi"),
			r = RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)", "gi"),
			z = RegExp("(^|[^\\n]*?\\s)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)([^\\n]*)({[\\n\\w\\W]*?})",
				"gi"),
			y = e.createDocumentFragment(),
			w = e.documentElement,
			t = w.firstChild,
			x = e.createElement("body"),
			B = e.createElement("style"),
			A;
		k(e);
		k(y);
		t.insertBefore(B, t.firstChild);
		B.media = "print";
		c.attachEvent("onbeforeprint", function() {
			var c = -1,
				k = i(e.styleSheets, "all"),
				s = [],
				t;
			for (A = A || e.body;
			(t = z.exec(k)) != null;) s.push((t[1] + t[2] + t[3]).replace(n, "$1.iepp_$2") + t[4]);
			for (B.styleSheet.cssText = s.join("\n"); ++c < o;) {
				k = e.getElementsByTagName(p[c]);
				s = k.length;
				for (t = -1; ++t < s;) k[t].className.indexOf("iepp_") < 0 && (k[t].className +=
						" iepp_" + p[c])
			}
			y.appendChild(A);
			w.appendChild(x);
			x.className = A.className;
			x.innerHTML = A.innerHTML.replace(r, "<$1font")
		});
		c.attachEvent("onafterprint", function() {
			x.innerHTML = "";
			w.removeChild(x);
			w.appendChild(A);
			B.styleSheet.cssText = ""
		})
	}(n, i);
	r._enableHTML5 = !0;
	r._version = "1.7";
	w.className = w.className.replace(/\bno-js\b/, "") + " js " + K.join(" ");
	return r
}(this, this.document);
if (!Array.prototype.indexOf) Array.prototype.indexOf = function(n, i) {
		var t = this.length >>> 0,
			e = Number(i) || 0,
			e = e < 0 ? Math.ceil(e) : Math.floor(e);
		for (e < 0 && (e += t); e < t; e++) if (e in this && this[e] === n) return e;
		return -1
};
(function(n) {
	Ticker = function() {
		throw "Ticker cannot be instantiated.";
	};
	Ticker._listeners = [];
	Ticker._pauseable = [];
	Ticker._paused = !1;
	Ticker._inited = !1;
	Ticker._startTime = 0;
	Ticker._pausedTime = 0;
	Ticker._ticks = 0;
	Ticker._pausedTickers = 0;
	Ticker._interval = 50;
	Ticker._intervalID = null;
	Ticker._lastTime = 0;
	Ticker._times = [];
	Ticker.addListener = function(i, n) {
		if (!Ticker._inited) Ticker._inited = !0, Ticker.setInterval(Ticker._interval);
		this.removeListener(i);
		Ticker._pauseable[Ticker._listeners.length] = n == null ? !0 : n;
		Ticker._listeners.push(i)
	};
	Ticker.removeListener = function(i) {
		Ticker._listeners != null && (i = Ticker._listeners.indexOf(i), i != -1 && (Ticker._listeners.splice(i, 1), Ticker._pauseable.splice(i, 1)))
	};
	Ticker.removeAllListeners = function() {
		Ticker._listeners = [];
		Ticker._pauseable = []
	};
	Ticker.setInterval = function(i) {
		Ticker._intervalID != null && clearInterval(Ticker._intervalID);
		Ticker._lastTime = Ticker._getTime();
		Ticker._interval = i;
		Ticker._intervalID = setInterval(Ticker._tick, i)
	};
	Ticker.getInterval = function() {
		return Ticker._interval
	};
	Ticker.getFPS = function() {
		return 1E3 / Ticker._interval
	};
	Ticker.setFPS = function(i) {
		Ticker.setInterval(1E3 / i)
	};
	Ticker.getMeasuredFPS = function(i) {
		if (Ticker._times.length < 2) return -1;
		i == null && (i = Ticker.getFPS() >> 1);
		i = Math.min(Ticker._times.length - 1, i);
		return 1E3 / ((Ticker._times[0] - Ticker._times[i]) / i)
	};
	Ticker.setPaused = function(i) {
		Ticker._paused = i
	};
	Ticker.getPaused = function() {
		return Ticker._paused
	};
	Ticker.getTime = function(i) {
		return Ticker._getTime() - Ticker._startTime - (i ? Ticker._pausedTime : 0)
	};
	Ticker.getTicks = function(i) {
		return Ticker._ticks -
			(i ? Ticker._pausedTickers : 0)
	};
	Ticker._tick = function() {
		Ticker._ticks++;
		var i = Ticker.getTime(!1),
			n = i - Ticker._lastTime,
			e = Ticker._paused;
		e && (Ticker._pausedTickers++, Ticker._pausedTime += n);
		Ticker._lastTime = i;
		for (var p = Ticker._pauseable, z = Ticker._listeners, y = z ? z.length : 0, r = 0; r < y; r++) {
			var w = p[r],
				B = z[r];
			B == null || e && w || B.tick == null || B.tick(n)
		}
		Ticker._times.unshift(i);
		Ticker._times.length > 100 && Ticker._times.pop()
	};
	Ticker._getTime = function() {
		return (new Date).getTime()
	};
	Ticker._startTime = Ticker._getTime();
	n.Ticker =
		Ticker
})(window);
var gu = gu || {};
(function() {
	gu.ImageSlider = function(n, i, t) {
		var e = {};
		e.init = function() {
			e.container = n;
			e.beforeUrl = i;
			e.afterUrl = t;
			e.width = e.container.width();
			e.height = e.container.height();
			e.renderHtml();
			e.loadImages()
		};
		e.renderHtml = function() {
			var i = document.createDocumentFragment(),
				n = document.createElement("div");
			n.className = "imageMask";
			n.style.position = "absolute";
			n.style.overflow = "hidden";
			n.style.width = e.width + "px";
			n.style.height = e.height + "px";
			n.style.webkitBackfaceVisibility = "hidden";
			var y = document.createElement("div");
			y.style.position =
				"absolute";
			y.style.webkitBackfaceVisibility = "hidden";
			y.id = "before";
			var r = document.createElement("div");
			r.style.position = "absolute";
			r.style.webkitBackfaceVisibility = "hidden";
			r.id = "after";
			var w = document.createElement("div");
			w.className = "slider";
			w.style.position = "absolute";
			w.style.webkitBackfaceVisibility = "hidden";
			var t = document.createElement("div");
			t.style.left = "-50px";
			t.style.top = "-95px";
			t.style.width = "91px";
			t.style.position = "absolute";
			t.style.height = e.height + "px";
			t.style.backgroundColor = "transparent";
			// t.style.boxShadow = "0 0 10px rgba(0, 0, 0, 1)";
			// t.style.webkitBoxShadow = "0 0 10px rgba(0, 0, 0, 1)";
			// t.style.MozBoxShadow = "0 0 10px rgba(0, 0, 0, 1)";
			// t.style.color = "#FFF";
			// t.innerHTML = t.innerHTML + 'After';
			// t.innerHTML = t.innerHTML + 'Before';
			t.innerHTML="<img src='" + templateUrl + "/img/divider.png'/>";

			var F = document.createElement("div");
			F.style.position = "absolute";
			F.style.width = e.width + "px";
			F.style.height = e.height + "px";

			n.appendChild(r);
			w.appendChild(t);
			i.appendChild(y);
			i.appendChild(n);
			i.appendChild(w);
			i.appendChild(F);
			e.container[0].style.position = "relative";
			e.container[0].style.overflow = "hidden";
			e.container.append(i.cloneNode(!0));
			e.preloader = e.container.children(".preloader");
			e.preloader[0].style.position =
				"absolute";
			e.preloader[0].style.top = (e.height - e.preloader.css("height").replace("px", "")) * 0.5 + "px";
			e.preloader[0].style.left = (e.width - e.preloader.css("width").replace("px", "")) * 0.5 + "px";
			e.handle = e.container.children(".slider");
			e.handleDisplay = e.handle.children();
			e.handleDisplay.hide();
			e.mask = e.container.children(".imageMask");
			e.before = e.container.children("#before");
			e.after = e.mask.children("#after")
		};
		e.loadImages = function() {
			e.imagesToLoad = 0;
			e.imagesLoaded = 0;
			e.loadImage(e.before, e.beforeUrl);
			e.loadImage(e.after,
				e.afterUrl)
		};
		e.loadImage = function(i, n) {
			e.imagesToLoad++;
			var t = new Image;
			$(t).load(function() {
				$(this).hide();
				$(i).removeClass("loading").append(this);
				e.imageLoaded()
			}).error(function() {}).attr("src", n)
		};
		e.imageLoaded = function() {
			e.imagesLoaded++;
			e.imagesLoaded >= e.imagesToLoad && e.allReady()
		};
		e.allReady = function() {
			e.setPosition(0, !0);
			e.before.children().fadeIn(500);
			e.after.children().fadeIn(500, e.finalise)
		};
		e.finalise = function() {
			e.dragging = !1;
			e.candrag = !0;
			e.lastXPos = 0;
			e.velocity = 0;
			Modernizr.touch && (document.addEventListener("touchstart",
				e.touchHandler, !0), document.addEventListener("touchmove", e.touchHandler, !0), document.addEventListener("touchend", e.touchHandler, !0), document.addEventListener("touchcancel", e.touchHandler, !0));
			e.container.mousedown(e.mouseDownHandler);
			e.container.mouseup(e.mouseUpHandler);
			e.container.mousemove(e.mouseMoveHandler);
			e.handleDisplay.fadeIn(250);
			e.preloader.remove();
			//e.preloader.hide();
			e.setPosition(e.width * 0.5, !1);
			Ticker.setFPS(30);
			Ticker.addListener(e)
		};
		e.tick = function() {
			if (e.dragging) e.lastXPos = e.handle.position().left;
			else if (e.velocity != 0) if (Math.abs(e.velocity) < 0.2) e.velocity = 0;
				else {
					e.velocity *= 0.9;
					var i = e.handle.position().left + e.velocity;
					if (i >= e.width) i = e.width, e.velocity = -e.velocity * 0.5;
					else if (i <= 0) i = 0, e.velocity = -e.velocity * 0.5;
					e.setPosition(i, !0)
				}
		};
		e.mouseDownHandler = function(i) {
			e.canDrag = !0;
			e.velocity = 0;
			e.setPosition(i.pageX - $(i.target).offset().left, !1);
			e.lastXPos = i.pageX - $(i.target).offset().left;
			i.preventDefault()
		};
		e.mouseUpHandler = function(i) {
			e.dragging ? (e.velocity = (e.handle.position().left - e.lastXPos) *
				0.5, e.dragging = !1) : e.setPosition(i.pageX - $(i.target).offset().left, !1);
			e.canDrag = !1;
			i.preventDefault()
		};
		e.mouseMoveHandler = function(i) {
			if (e.canDrag) e.dragging = !0, e.setPosition(i.pageX - $(i.target).offset().left, !0);
			i.preventDefault()
		};
		e.setPosition = function(i, n) {
			var t = i - e.mask.width(),
				r = n ? 0 : 0.5;
			Modernizr.csstransforms && Modernizr.csstransitions ? (e.applyTransition(e.handle[0].style, "all " + r + "s ease-out 0s"), e.applyTransition(e.mask[0].style, "all " + r + "s ease-out 0s"), e.applyTransition(e.after[0].style,
				"all " + r + "s ease-out 0s"), / AppleWebKit\//.test(navigator.userAgent) ? (e.applyTransform(e.handle[0].style, "matrix(1,0,0,1," + i + ",0)"), e.applyTransform(e.mask[0].style, "matrix(1,0,0,1," + t + ",0)"), e.applyTransform(e.after[0].style, "matrix(1,0,0,1," + -t + ",0)")) : (e.applyTransform(e.handle[0].style, "matrix(1,0,0,1," + i + "px ,0)"), e.applyTransform(e.mask[0].style, "matrix(1,0,0,1," + t + "px ,0)"), e.applyTransform(e.after[0].style, "matrix(1,0,0,1," + -t + "px ,0)"))) : (e.mask.stop(), e.mask.animate({
				width: i
			}, r * 1E3), e.handle.stop(),
				e.handle.animate({
				left: i
			}, r * 1E3))
		};
		e.applyTransform = function(e, i) {
			e.transform = e.msTransform = e.OTransform = e.MozTransform = e.webkitTransform = i
		};
		e.applyTransition = function(e, i) {
			e.transition = e.msTransition = e.OTransition = e.MozTransition = e.webkitTransition = i
		};
		e.touchHandler = function(e) {
			var i = e.changedTouches[0],
				n = "";
			switch (e.type) {
				case "touchstart":
					n = "mousedown";
					break;
				case "touchmove":
					n = "mousemove";
					break;
				case "touchend":
					n = "mouseup";
					break;
				default:
					return
			}
			var r = document.createEvent("MouseEvent");
			r.initMouseEvent(n, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null);
			i.target.dispatchEvent(r);
			e.preventDefault()
		};
		e.init();
		return {}
	}
})(gu);