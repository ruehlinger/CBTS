/*!
 * Globalize
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function (n, t) {
	var i,
	ut,
	it,
	g,
	tt,
	u,
	c,
	d,
	a,
	nt,
	w,
	e,
	r,
	k,
	s,
	l,
	v,
	y,
	rt,
	p,
	o,
	h,
	b,
	f;
	i = function (n) {
		return new i.prototype.init(n)
	},
	typeof require != "undefined" && typeof exports != "undefined" && typeof module != "undefined" ? module.exports = i : n.Globalize = i,
	i.cultures = {},
	i.prototype = {
		constructor : i,
		init : function (n) {
			return this.cultures = i.cultures,
			this.cultureSelector = n,
			this
		}
	},
	i.prototype.init.prototype = i.prototype,
	i.cultures["default"] = {
		name : "en",
		englishName : "English",
		nativeName : "English",
		isRTL : !1,
		language : "en",
		numberFormat : {
			pattern : ["-n"],
			decimals : 2,
			"," : ",",
			"." : ".",
			groupSizes : [3],
			"+" : "+",
			"-" : "-",
			NaN : "NaN",
			negativeInfinity : "-Infinity",
			positiveInfinity : "Infinity",
			percent : {
				pattern : ["-n %", "n %"],
				decimals : 2,
				groupSizes : [3],
				"," : ",",
				"." : ".",
				symbol : "%"
			},
			currency : {
				pattern : ["($n)", "$n"],
				decimals : 2,
				groupSizes : [3],
				"," : ",",
				"." : ".",
				symbol : "$"
			}
		},
		calendars : {
			standard : {
				name : "Gregorian_USEnglish",
				"/" : "/",
				":" : ":",
				firstDay : 0,
				days : {
					names : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					namesAbbr : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					namesShort : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
				},
				months : {
					names : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
					namesAbbr : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
				},
				AM : ["AM", "am", "AM"],
				PM : ["PM", "pm", "PM"],
				eras : [{
						name : "A.D.",
						start : null,
						offset : 0
					}
				],
				twoDigitYearMax : 2029,
				patterns : {
					d : "M/d/yyyy",
					D : "dddd, MMMM dd, yyyy",
					t : "h:mm tt",
					T : "h:mm:ss tt",
					f : "dddd, MMMM dd, yyyy h:mm tt",
					F : "dddd, MMMM dd, yyyy h:mm:ss tt",
					M : "MMMM dd",
					Y : "yyyy MMMM",
					S : "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
				}
			}
		},
		messages : {}

	},
	i.cultures["default"].calendar = i.cultures["default"].calendars.standard,
	i.cultures.en = i.cultures["default"],
	i.cultureSelector = "en",
	ut = /^0x[a-f0-9]+$/i,
	it = /^[+\-]?infinity$/i,
	g = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,
	tt = /^\s+|\s+$/g,
	u = function (n, t) {
		if (n.indexOf)
			return n.indexOf(t);
		for (var i = 0, r = n.length; i < r; i++)
			if (n[i] === t)
				return i;
		return -1
	},
	c = function (n, t) {
		return n.substr(n.length - t.length) === t
	},
	d = function () {
		var o,
		u,
		r,
		i,
		s,
		h,
		n = arguments[0] || {},
		f = 1,
		c = arguments.length,
		e = !1;
		for (typeof n == "boolean" && (e = n, n = arguments[1] || {}, f = 2), typeof n == "object" || nt(n) || (n = {}); f < c; f++)
			if ((o = arguments[f]) != null)
				for (u in o)
					(r = n[u], i = o[u], n !== i) && (e && i && (w(i) || (s = a(i))) ? (s ? (s = !1, h = r && a(r) ? r : []) : h = r && w(r) ? r : {}, n[u] = d(e, h, i)) : i !== t && (n[u] = i));
		return n
	},
	a = Array.isArray || function (n) {
		return Object.prototype.toString.call(n) === "[object Array]"
	},
	nt = function (n) {
		return Object.prototype.toString.call(n) === "[object Function]"
	},
	w = function (n) {
		return Object.prototype.toString.call(n) === "[object Object]"
	},
	e = function (n, t) {
		return n.indexOf(t) === 0
	},
	r = function (n) {
		return (n + "").replace(tt, "")
	},
	k = function (n) {
		return isNaN(n) ? NaN : Math[n < 0 ? "ceil" : "floor"](n)
	},
	s = function (n, t, i) {
		for (var r = n.length; r < t; r += 1)
			n = i ? "0" + n : n + "0";
		return n
	},
	l = function (n, t) {
		for (var f = 0, i = !1, u, r = 0, e = n.length; r < e; r++) {
			u = n.charAt(r);
			switch (u) {
			case "'":
				i ? t.push("'") : f++,
				i = !1;
				break;
			case "\\":
				i && t.push("\\"),
				i = !i;
				break;
			default:
				t.push(u),
				i = !1
			}
		}
		return f
	},
	v = function (n, t) {
		t = t || "F";
		var i,
		u = n.patterns,
		r = t.length;
		if (r === 1) {
			if (i = u[t], !i)
				throw "Invalid date format string '" + t + "'.";
			t = i
		} else
			r === 2 && t.charAt(0) === "%" && (t = t.charAt(1));
		return t
	},
	y = function (n, t, i) {
		function e(n, t) {
			var i,
			r = n + "";
			return t > 1 && r.length < t ? (i = lt[t - 2] + r, i.substr(i.length - t, t)) : i = r
		}
		function ct() {
			return b || rt ? b : (b = ht.test(t), rt = !0, b)
		}
		function nt(n, t) {
			if (w)
				return w[t];
			switch (t) {
			case 0:
				return n.getFullYear();
			case 1:
				return n.getMonth();
			case 2:
				return n.getDate();
			default:
				throw "Invalid part value " + t;
			}
		}
		var u = i.calendar,
		d = u.convert,
		r,
		g,
		ft,
		tt,
		it,
		k,
		f,
		ut,
		c;
		if (!t || !t.length || t === "i")
			return i && i.name.length ? d ? r = y(n, u.patterns.F, i) : (g = new Date(n.getTime()), ft = o(n, u.eras), g.setFullYear(h(n, u, ft)), r = g.toLocaleString()) : r = n.toString(), r;
		tt = u.eras,
		it = t === "s",
		t = v(u, t),
		r = [];
		var s,
		lt = ["0", "00", "000"],
		b,
		rt,
		ht = /([^d]|^)(d|dd)([^d]|$)/g,
		et = 0,
		ot = p(),
		w;
		for (!it && d && (w = d.fromGregorian(n)); ; ) {
			var st = ot.lastIndex,
			a = ot.exec(t),
			at = t.slice(st, a ? a.index : t.length);
			if (et += l(at, r), !a)
				break;
			if (et % 2) {
				r.push(a[0]);
				continue
			}
			k = a[0],
			f = k.length;
			switch (k) {
			case "ddd":
			case "dddd":
				ut = f === 3 ? u.days.namesAbbr : u.days.names,
				r.push(ut[n.getDay()]);
				break;
			case "d":
			case "dd":
				b = !0,
				r.push(e(nt(n, 2), f));
				break;
			case "MMM":
			case "MMMM":
				c = nt(n, 1),
				r.push(u.monthsGenitive && ct() ? u.monthsGenitive[f === 3 ? "namesAbbr" : "names"][c] : u.months[f === 3 ? "namesAbbr" : "names"][c]);
				break;
			case "M":
			case "MM":
				r.push(e(nt(n, 1) + 1, f));
				break;
			case "y":
			case "yy":
			case "yyyy":
				c = w ? w[0] : h(n, u, o(n, tt), it),
				f < 4 && (c = c % 100),
				r.push(e(c, f));
				break;
			case "h":
			case "hh":
				s = n.getHours() % 12,
				s === 0 && (s = 12),
				r.push(e(s, f));
				break;
			case "H":
			case "HH":
				r.push(e(n.getHours(), f));
				break;
			case "m":
			case "mm":
				r.push(e(n.getMinutes(), f));
				break;
			case "s":
			case "ss":
				r.push(e(n.getSeconds(), f));
				break;
			case "t":
			case "tt":
				c = n.getHours() < 12 ? u.AM ? u.AM[0] : " " : u.PM ? u.PM[0] : " ",
				r.push(f === 1 ? c.charAt(0) : c);
				break;
			case "f":
			case "ff":
			case "fff":
				r.push(e(n.getMilliseconds(), 3).substr(0, f));
				break;
			case "z":
			case "zz":
				s = n.getTimezoneOffset() / 60,
				r.push((s <= 0 ? "+" : "-") + e(Math.floor(Math.abs(s)), f));
				break;
			case "zzz":
				s = n.getTimezoneOffset() / 60,
				r.push((s <= 0 ? "+" : "-") + e(Math.floor(Math.abs(s)), 2) + ":" + e(Math.abs(n.getTimezoneOffset() % 60), 2));
				break;
			case "g":
			case "gg":
				u.eras && r.push(u.eras[o(n, tt)].name);
				break;
			case "/":
				r.push(u["/"]);
				break;
			default:
				throw "Invalid date format pattern '" + k + "'.";
			}
		}
		return r.join("")
	},
	function () {
		var n;
		n = function (n, t, i) {
			var l = i.groupSizes,
			c = l[0],
			y = 1,
			p = Math.pow(10, t),
			v = Math.round(n * p) / p,
			w;
			isFinite(v) || (v = n),
			n = v;
			var u = n + "",
			r = "",
			o = u.split(/e/i),
			f = o.length > 1 ? parseInt(o[1], 10) : 0;
			u = o[0],
			o = u.split("."),
			u = o[0],
			r = o.length > 1 ? o[1] : "",
			f > 0 ? (r = s(r, f, !1), u += r.slice(0, f), r = r.substr(f)) : f < 0 && (f = -f, u = s(u, f + 1, !0), r = u.slice(-f, u.length) + r, u = u.slice(0, -f)),
			r = t > 0 ? i["."] + (r.length > t ? r.slice(0, t) : s(r, t)) : "";
			for (var e = u.length - 1, a = i[","], h = ""; e >= 0; ) {
				if (c === 0 || c > e)
					return u.slice(0, e + 1) + (h.length ? a + h + r : r);
				h = u.slice(e - c + 1, e + 1) + (h.length ? a + h : ""),
				e -= c,
				y < l.length && (c = l[y], y++)
			}
			return u.slice(0, e + 1) + a + h + r
		},
		rt = function (t, i, r) {
			var a,
			f,
			v,
			e,
			y,
			c;
			if (!isFinite(t))
				return t === Infinity ? r.numberFormat.positiveInfinity : t === -Infinity ? r.numberFormat.negativeInfinity : r.numberFormat.NaN;
			if (!i || i === "i")
				return r.name.length ? t.toLocaleString() : t.toString();
			i = i || "D";
			var o = r.numberFormat,
			u = Math.abs(t),
			h = -1,
			l;
			i.length > 1 && (h = parseInt(i.slice(1), 10)),
			a = i.charAt(0).toUpperCase();
			switch (a) {
			case "D":
				l = "n",
				u = k(u),
				h !== -1 && (u = s("" + u, h, !0)),
				t < 0 && (u = "-" + u);
				break;
			case "N":
				f = o;
			case "C":
				f = f || o.currency;
			case "P":
				f = f || o.percent,
				l = t < 0 ? f.pattern[0] : f.pattern[1] || "n",
				h === -1 && (h = f.decimals),
				u = n(u * (a === "P" ? 100 : 1), h, f);
				break;
			default:
				throw "Bad number format specifier: " + a;
			}
			for (v = /n|\$|-|%/g, e = ""; ; ) {
				if (y = v.lastIndex, c = v.exec(l), e += l.slice(y, c ? c.index : l.length), !c)
					break;
				switch (c[0]) {
				case "n":
					e += u;
					break;
				case "$":
					e += o.currency.symbol;
					break;
				case "-":
					/[1-9]/.test(u) && (e += o["-"]);
					break;
				case "%":
					e += o.percent.symbol
				}
			}
			return e
		}
	}
	(),
	p = function () {
		return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
	},
	o = function (n, t) {
		var r,
		f,
		i,
		u;
		if (!t)
			return 0;
		for (f = n.getTime(), i = 0, u = t.length; i < u; i++)
			if (r = t[i].start, r === null || f >= r)
				return i;
		return 0
	},
	h = function (n, t, i, r) {
		var u = n.getFullYear();
		return !r && t.eras && (u -= t.eras[i].offset),
		u
	},
	function () {
		var f,
		s,
		c,
		a,
		n,
		i,
		t;
		f = function (n, t) {
			if (t < 100) {
				var r = new Date,
				f = o(r),
				u = h(r, n, f),
				i = n.twoDigitYearMax;
				i = typeof i == "string" ? (new Date).getFullYear() % 100 + parseInt(i, 10) : i,
				t += u - u % 100,
				t > i && (t -= 100)
			}
			return t
		},
		s = function (n, r, f) {
			var o,
			s = n.days,
			e = n._upperDays;
			return e || (n._upperDays = e = [t(s.names), t(s.namesAbbr), t(s.namesShort)]),
			r = i(r),
			f ? (o = u(e[1], r), o === -1 && (o = u(e[2], r))) : o = u(e[0], r),
			o
		},
		c = function (n, r, f) {
			var h = n.months,
			c = n.monthsGenitive || n.months,
			e = n._upperMonths,
			s = n._upperMonthsGen,
			o;
			return e || (n._upperMonths = e = [t(h.names), t(h.namesAbbr)], n._upperMonthsGen = s = [t(c.names), t(c.namesAbbr)]),
			r = i(r),
			o = u(f ? e[1] : e[0], r),
			o < 0 && (o = u(f ? s[1] : s[0], r)),
			o
		},
		a = function (n, t) {
			var e = n._parseRegExp,
			o,
			k,
			f,
			a,
			i,
			y,
			c;
			if (e) {
				if (o = e[t], o)
					return o
			} else
				n._parseRegExp = e = {};
			for (var h = v(n, t).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), r = ["^"], b = [], s = 0, w = 0, d = p(), u; (u = d.exec(h)) !== null; ) {
				if (k = h.slice(s, u.index), s = d.lastIndex, w += l(k, r), w % 2) {
					r.push(u[0]);
					continue
				}
				f = u[0],
				a = f.length;
				switch (f) {
				case "dddd":
				case "ddd":
				case "MMMM":
				case "MMM":
				case "gg":
				case "g":
					i = "(\\D+)";
					break;
				case "tt":
				case "t":
					i = "(\\D*)";
					break;
				case "yyyy":
				case "fff":
				case "ff":
				case "f":
					i = "(\\d{" + a + "})";
					break;
				case "dd":
				case "d":
				case "MM":
				case "M":
				case "yy":
				case "y":
				case "HH":
				case "H":
				case "hh":
				case "h":
				case "mm":
				case "m":
				case "ss":
				case "s":
					i = "(\\d\\d?)";
					break;
				case "zzz":
					i = "([+-]?\\d\\d?:\\d{2})";
					break;
				case "zz":
				case "z":
					i = "([+-]?\\d\\d?)";
					break;
				case "/":
					i = "(\\/)";
					break;
				default:
					throw "Invalid date format pattern '" + f + "'.";
				}
				i && r.push(i),
				b.push(u[0])
			}
			return l(h.slice(s), r),
			r.push("$"),
			y = r.join("").replace(/\s+/g, "\\s+"),
			c = {
				regExp : y,
				groups : b
			},
			e[t] = c
		},
		n = function (n, t, i) {
			return n < t || n > i
		},
		i = function (n) {
			return n.split("\u00a0").join(" ").toUpperCase()
		},
		t = function (n) {
			for (var u = [], t = 0, r = n.length; t < r; t++)
				u[t] = i(n[t]);
			return u
		},
		b = function (t, i, u) {
			var d,
			bt,
			l,
			ft,
			ut,
			nt,
			g,
			dt,
			h,
			vt,
			tt,
			ot;
			t = r(t);
			var o = u.calendar,
			yt = a(o, i),
			pt = new RegExp(yt.regExp).exec(t);
			if (pt === null)
				return null;
			var wt = yt.groups,
			ct = null,
			b = null,
			p = null,
			w = null,
			rt = null,
			y = 0,
			k,
			lt = 0,
			ht = 0,
			st = 0,
			et = null,
			at = !1;
			for (d = 0, bt = wt.length; d < bt; d++)
				if (l = pt[d + 1], l) {
					var kt = wt[d],
					it = kt.length,
					v = parseInt(l, 10);
					switch (kt) {
					case "dd":
					case "d":
						if (w = v, n(w, 1, 31))
							return null;
						break;
					case "MMM":
					case "MMMM":
						if (p = c(o, l, it === 3), n(p, 0, 11))
							return null;
						break;
					case "M":
					case "MM":
						if (p = v - 1, n(p, 0, 11))
							return null;
						break;
					case "y":
					case "yy":
					case "yyyy":
						if (b = it < 4 ? f(o, v) : v, n(b, 0, 9999))
							return null;
						break;
					case "h":
					case "hh":
						if (y = v, y === 12 && (y = 0), n(y, 0, 11))
							return null;
						break;
					case "H":
					case "HH":
						if (y = v, n(y, 0, 23))
							return null;
						break;
					case "m":
					case "mm":
						if (lt = v, n(lt, 0, 59))
							return null;
						break;
					case "s":
					case "ss":
						if (ht = v, n(ht, 0, 59))
							return null;
						break;
					case "tt":
					case "t":
						if (at = o.PM && (l === o.PM[0] || l === o.PM[1] || l === o.PM[2]), !at && (!o.AM || l !== o.AM[0] && l !== o.AM[1] && l !== o.AM[2]))
							return null;
						break;
					case "f":
					case "ff":
					case "fff":
						if (st = v * Math.pow(10, 3 - it), n(st, 0, 999))
							return null;
						break;
					case "ddd":
					case "dddd":
						if (rt = s(o, l, it === 3), n(rt, 0, 6))
							return null;
						break;
					case "zzz":
						if ((ft = l.split(/:/), ft.length !== 2) || (k = parseInt(ft[0], 10), n(k, -12, 13)) || (ut = parseInt(ft[1], 10), n(ut, 0, 59)))
							return null;
						et = k * 60 + (e(l, "-") ? -ut : ut);
						break;
					case "z":
					case "zz":
						if (k = v, n(k, -12, 13))
							return null;
						et = k * 60;
						break;
					case "g":
					case "gg":
						if (nt = l, !nt || !o.eras)
							return null;
						for (nt = r(nt.toLowerCase()), g = 0, dt = o.eras.length; g < dt; g++)
							if (nt === o.eras[g].name.toLowerCase()) {
								ct = g;
								break
							}
						if (ct === null)
							return null
					}
				}
			if (h = new Date, tt = o.convert, vt = tt ? tt.fromGregorian(h)[0] : h.getFullYear(), b === null ? b = vt : o.eras && (b += o.eras[ct || 0].offset), p === null && (p = 0), w === null && (w = 1), tt) {
				if (h = tt.toGregorian(b, p, w), h === null)
					return null
			} else if ((h.setFullYear(b, p, w), h.getDate() !== w) || rt !== null && h.getDay() !== rt)
				return null;
			return at && y < 12 && (y += 12),
			h.setHours(y, lt, ht, st),
			et !== null && (ot = h.getMinutes() - (et + h.getTimezoneOffset()), h.setHours(h.getHours() + parseInt(ot / 60, 10), ot % 60)),
			h
		}
	}
	(),
	f = function (n, t, i) {
		var u = t["-"],
		r = t["+"],
		f;
		switch (i) {
		case "n -":
			u = " " + u,
			r = " " + r;
		case "n-":
			c(n, u) ? f = ["-", n.substr(0, n.length - u.length)] : c(n, r) && (f = ["+", n.substr(0, n.length - r.length)]);
			break;
		case "- n":
			u += " ",
			r += " ";
		case "-n":
			e(n, u) ? f = ["-", n.substr(u.length)] : e(n, r) && (f = ["+", n.substr(r.length)]);
			break;
		case "(n)":
			e(n, "(") && c(n, ")") && (f = ["-", n.substr(1, n.length - 2)])
		}
		return f || ["", n]
	},
	i.prototype.findClosestCulture = function (n) {
		return i.findClosestCulture.call(this, n)
	},
	i.prototype.format = function (n, t, r) {
		return i.format.call(this, n, t, r)
	},
	i.prototype.localize = function (n, t) {
		return i.localize.call(this, n, t)
	},
	i.prototype.parseInt = function (n, t, r) {
		return i.parseInt.call(this, n, t, r)
	},
	i.prototype.parseFloat = function (n, t, r) {
		return i.parseFloat.call(this, n, t, r)
	},
	i.prototype.culture = function (n) {
		return i.culture.call(this, n)
	},
	i.addCultureInfo = function (n, t, i) {
		var r = {},
		u = !1;
		typeof n != "string" ? (i = n, n = this.culture().name, r = this.cultures[n]) : typeof t != "string" ? (i = t, u = this.cultures[n] == null, r = this.cultures[n] || this.cultures["default"]) : (u = !0, r = this.cultures[t]),
		this.cultures[n] = d(!0, {}, r, i),
		u && (this.cultures[n].calendar = this.cultures[n].calendars.standard)
	},
	i.findClosestCulture = function (n) {
		var f,
		u,
		o,
		l,
		y,
		c;
		if (!n)
			return this.findClosestCulture(this.cultureSelector) || this.cultures["default"];
		if (typeof n == "string" && (n = n.split(",")), a(n)) {
			for (var i, s = this.cultures, v = n, h = v.length, e = [], t = 0; t < h; t++)
				n = r(v[t]), o = n.split(";"), i = r(o[0]), o.length === 1 ? u = 1 : (n = r(o[1]), n.indexOf("q=") === 0 ? (n = n.substr(2), u = parseFloat(n), u = isNaN(u) ? 0 : u) : u = 1), e.push({
					lang : i,
					pri : u
				});
			for (e.sort(function (n, t) {
					return n.pri < t.pri ? 1 : n.pri > t.pri ? -1 : 0
				}), t = 0; t < h; t++)
				if (i = e[t].lang, f = s[i], f)
					return f;
			for (t = 0; t < h; t++) {
				i = e[t].lang;
				do {
					if (l = i.lastIndexOf("-"), l === -1)
						break;
					if (i = i.substr(0, l), f = s[i], f)
						return f
				} while (1)
			}
			for (t = 0; t < h; t++) {
				i = e[t].lang;
				for (y in s)
					if (c = s[y], c.language == i)
						return c
			}
		} else if (typeof n == "object")
			return n;
		return f || null
	},
	i.format = function (n, t, i) {
		var r = this.findClosestCulture(i);
		return n instanceof Date ? n = y(n, t, r) : typeof n == "number" && (n = rt(n, t, r)),
		n
	},
	i.localize = function (n, t) {
		return this.findClosestCulture(t).messages[n] || this.cultures["default"].messages[n]
	},
	i.parseDate = function (n, t, i) {
		var r,
		o,
		f,
		u,
		s,
		e;
		if (i = this.findClosestCulture(i), t) {
			if (typeof t == "string" && (t = [t]), t.length)
				for (u = 0, s = t.length; u < s; u++)
					if (e = t[u], e && (r = b(n, e, i), r))
						break
		} else {
			f = i.calendar.patterns;
			for (o in f)
				if (r = b(n, f[o], i), r)
					break
		}
		return r || null
	},
	i.parseInt = function (n, t, r) {
		return k(i.parseFloat(n, t, r))
	},
	i.parseFloat = function (n, t, i) {
		var k,
		c,
		l,
		s,
		b,
		nt,
		y,
		p,
		tt,
		v,
		d;
		typeof t != "number" && (i = t, t = 10);
		var a = this.findClosestCulture(i),
		w = NaN,
		u = a.numberFormat;
		if (n.indexOf(a.numberFormat.currency.symbol) > -1 && (n = n.replace(a.numberFormat.currency.symbol, ""), n = n.replace(a.numberFormat.currency["."], a.numberFormat["."])), n = r(n), it.test(n))
			w = parseFloat(n);
		else if (!t && ut.test(n))
			w = parseInt(n, 16);
		else {
			var e = f(n, u, u.pattern[0]),
			o = e[0],
			h = e[1];
			o === "" && u.pattern[0] !== "(n)" && (e = f(n, u, "(n)"), o = e[0], h = e[1]),
			o === "" && u.pattern[0] !== "-n" && (e = f(n, u, "-n"), o = e[0], h = e[1]),
			o = o || "+",
			l = h.indexOf("e"),
			l < 0 && (l = h.indexOf("E")),
			l < 0 ? (c = h, k = null) : (c = h.substr(0, l), k = h.substr(l + 1)),
			nt = u["."],
			y = c.indexOf(nt),
			y < 0 ? (s = c, b = null) : (s = c.substr(0, y), b = c.substr(y + nt.length)),
			p = u[","],
			s = s.split(p).join(""),
			tt = p.replace(/\u00A0/g, " "),
			p !== tt && (s = s.split(tt).join("")),
			v = o + s,
			b !== null && (v += "." + b),
			k !== null && (d = f(k, u, "-n"), v += "e" + (d[0] || "+") + d[1]),
			g.test(v) && (w = parseFloat(v))
		}
		return w
	},
	i.culture = function (n) {
		return typeof n != "undefined" && (this.cultureSelector = n),
		this.findClosestCulture(n) || this.cultures["default"]
	}
})(this)
