import * as __SNOWPACK_ENV__ from '../../../../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

var Pl = Object.defineProperty;
var Rl = (t, e, n) => e in t ? Pl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Je = (t, e, n) => Rl(t, typeof e != "symbol" ? e + "" : e, n);
function Ce() {
}
function M(t, e) {
  for (const n in e) t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function rs(t) {
  return t();
}
function Hn() {
  return /* @__PURE__ */ Object.create(null);
}
function Ee(t) {
  t.forEach(rs);
}
function pe(t) {
  return typeof t == "function";
}
function oe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Dl(t) {
  return Object.keys(t).length === 0;
}
function nn(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return Ce;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Be(t) {
  let e;
  return nn(t, (n) => e = n)(), e;
}
function $e(t, e, n) {
  t.$$.on_destroy.push(nn(e, n));
}
function ie(t, e, n, i) {
  if (t) {
    const s = as(t, e, n, i);
    return t[0](s);
  }
}
function as(t, e, n, i) {
  return t[1] && i ? M(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function se(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const l = [], o = Math.max(e.dirty.length, s.length);
      for (let r = 0; r < o; r += 1)
        l[r] = e.dirty[r] | s[r];
      return l;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function le(t, e, n, i, s, l) {
  if (s) {
    const o = as(e, n, i, l);
    t.p(o, s);
  }
}
function re(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Ae(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Y(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function os(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function Xt(t, e, n) {
  return t.set(n), e;
}
function x(t) {
  return t && pe(t.destroy) ? t.destroy : Ce;
}
const Bl = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function J(t, e) {
  t.appendChild(e);
}
function ot(t, e, n) {
  const i = Ml(t);
  if (!i.getElementById(e)) {
    const s = j("style");
    s.id = e, s.textContent = n, Fl(i, s);
  }
}
function Ml(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Fl(t, e) {
  return J(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function D(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ft(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function j(t) {
  return document.createElement(t);
}
function at(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function De(t) {
  return document.createTextNode(t);
}
function Q() {
  return De(" ");
}
function we() {
  return De("");
}
function ge(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function U(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Nl = ["width", "height"];
function ne(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && Nl.indexOf(i) === -1 ? t[i] = e[i] : U(t, i, e[i]);
}
function xt(t, e) {
  for (const n in e)
    U(t, n, e[n]);
}
function Hl(t, e) {
  Object.keys(e).forEach((n) => {
    Kt(t, n, e[n]);
  });
}
function Kt(t, e, n) {
  const i = e.toLowerCase();
  i in t ? t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : U(t, e, n);
}
function en(t) {
  return /-/.test(t) ? Hl : ne;
}
function Ul(t) {
  return Array.from(t.childNodes);
}
function Qe(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Un(t, e) {
  t.value = e ?? "";
}
function jl(t, e, n, i) {
  t.style.setProperty(e, n, "");
}
function ql(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
function je(t, e) {
  return new t(e);
}
let Rt;
function wt(t) {
  Rt = t;
}
function ye() {
  if (!Rt) throw new Error("Function called outside component initialization");
  return Rt;
}
function nt(t) {
  ye().$$.on_mount.push(t);
}
function Nt(t) {
  ye().$$.on_destroy.push(t);
}
function Ue(t, e) {
  return ye().$$.context.set(t, e), e;
}
function Xe(t) {
  return ye().$$.context.get(t);
}
function Dt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const vt = [], ee = [];
let yt = [];
const bn = [], us = /* @__PURE__ */ Promise.resolve();
let _n = !1;
function cs() {
  _n || (_n = !0, us.then(y));
}
function zl() {
  return cs(), us;
}
function vn(t) {
  yt.push(t);
}
function xe(t) {
  bn.push(t);
}
const cn = /* @__PURE__ */ new Set();
let gt = 0;
function y() {
  if (gt !== 0)
    return;
  const t = Rt;
  do {
    try {
      for (; gt < vt.length; ) {
        const e = vt[gt];
        gt++, wt(e), Vl(e.$$);
      }
    } catch (e) {
      throw vt.length = 0, gt = 0, e;
    }
    for (wt(null), vt.length = 0, gt = 0; ee.length; ) ee.pop()();
    for (let e = 0; e < yt.length; e += 1) {
      const n = yt[e];
      cn.has(n) || (cn.add(n), n());
    }
    yt.length = 0;
  } while (vt.length);
  for (; bn.length; )
    bn.pop()();
  _n = !1, cn.clear(), wt(t);
}
function Vl(t) {
  if (t.fragment !== null) {
    t.update(), Ee(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(vn);
  }
}
function Gl(t) {
  const e = [], n = [];
  yt.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), yt = e;
}
const Jt = /* @__PURE__ */ new Set();
let ht;
function ce() {
  ht = {
    r: 0,
    c: [],
    p: ht
    // parent group
  };
}
function fe() {
  ht.r || Ee(ht.c), ht = ht.p;
}
function E(t, e) {
  t && t.i && (Jt.delete(t), t.i(e));
}
function C(t, e, n, i) {
  if (t && t.o) {
    if (Jt.has(t)) return;
    Jt.add(t), ht.c.push(() => {
      Jt.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else i && i();
}
function it(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function te(t, e) {
  const n = {}, i = {}, s = { $$scope: 1 };
  let l = t.length;
  for (; l--; ) {
    const o = t[l], r = e[l];
    if (r) {
      for (const a in o)
        a in r || (i[a] = 1);
      for (const a in r)
        s[a] || (n[a] = r[a], s[a] = 1);
      t[l] = r;
    } else
      for (const a in o)
        s[a] = 1;
  }
  for (const o in i)
    o in n || (n[o] = void 0);
  return n;
}
function ue(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function et(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function G(t) {
  t && t.c();
}
function z(t, e, n) {
  const { fragment: i, after_update: s } = t.$$;
  i && i.m(e, n), vn(() => {
    const l = t.$$.on_mount.map(rs).filter(pe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : Ee(l), t.$$.on_mount = [];
  }), s.forEach(vn);
}
function V(t, e) {
  const n = t.$$;
  n.fragment !== null && (Gl(n.after_update), Ee(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Zl(t, e) {
  t.$$.dirty[0] === -1 && (vt.push(t), cs(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function de(t, e, n, i, s, l, o = null, r = [-1]) {
  const a = Rt;
  wt(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Ce,
    not_equal: s,
    bound: Hn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Hn(),
    dirty: r,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(u.root);
  let f = !1;
  if (u.ctx = n ? n(t, e.props || {}, (c, d, ...m) => {
    const p = m.length ? m[0] : d;
    return u.ctx && s(u.ctx[c], u.ctx[c] = p) && (!u.skip_bound && u.bound[c] && u.bound[c](p), f && Zl(t, c)), d;
  }) : [], u.update(), f = !0, Ee(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Ul(e.target);
      u.fragment && u.fragment.l(c), c.forEach(R);
    } else
      u.fragment && u.fragment.c();
    e.intro && E(t.$$.fragment), z(t, e.target, e.anchor), y();
  }
  wt(a);
}
let fs;
typeof HTMLElement == "function" && (fs = class extends HTMLElement {
  constructor(e, n, i) {
    super();
    /** The Svelte component constructor */
    Je(this, "$$ctor");
    /** Slots */
    Je(this, "$$s");
    /** The Svelte component instance */
    Je(this, "$$c");
    /** Whether or not the custom element is connected */
    Je(this, "$$cn", !1);
    /** Component props data */
    Je(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Je(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Je(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    Je(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    Je(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const s = this.$$c.$on(e, n);
      this.$$l_u.set(n, s);
    }
    super.addEventListener(e, n, i);
  }
  removeEventListener(e, n, i) {
    if (super.removeEventListener(e, n, i), this.$$c) {
      const s = this.$$l_u.get(n);
      s && (s(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(l) {
        return () => {
          let o;
          return {
            c: function() {
              o = j("slot"), l !== "default" && U(o, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, f) {
              D(u, o, f);
            },
            d: function(u) {
              u && R(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = ql(this);
      for (const l of this.$$s)
        l in i && (n[l] = [e(l)]);
      for (const l of this.attributes) {
        const o = this.$$g_p(l.name);
        o in this.$$d || (this.$$d[o] = Yt(o, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const s = () => {
        this.$$r = !0;
        for (const l in this.$$p_d)
          if (this.$$d[l] = this.$$c.$$.ctx[this.$$c.$$.props[l]], this.$$p_d[l].reflect) {
            const o = Yt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(s), s();
      for (const l in this.$$l)
        for (const o of this.$$l[l]) {
          const r = this.$$c.$on(l, o);
          this.$$l_u.set(o, r);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, i) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Yt(e, i, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function Yt(t, e, n, i) {
  var l;
  const s = (l = n[t]) == null ? void 0 : l.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !n[t])
    return e;
  if (i === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function me(t, e, n, i, s, l) {
  let o = class extends fs {
    constructor() {
      super(t, n, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (r) => (e[r].attribute || r).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((r) => {
    Object.defineProperty(o.prototype, r, {
      get() {
        return this.$$c && r in this.$$c ? this.$$c[r] : this.$$d[r];
      },
      set(a) {
        var u;
        a = Yt(r, a, e), this.$$d[r] = a, (u = this.$$c) == null || u.$set({ [r]: a });
      }
    });
  }), i.forEach((r) => {
    Object.defineProperty(o.prototype, r, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[r];
      }
    });
  }), t.element = /** @type {any} */
  o, o;
}
class he {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Je(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Je(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    V(this, 1), this.$destroy = Ce;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!pe(n))
      return Ce;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const s = i.indexOf(n);
      s !== -1 && i.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Dl(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Wl = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Wl);
const Xl = {
  upload_file: "M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z",
  download: "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z",
  visibility: "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z",
  visibility_off: "m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z",
  close: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
  nearby: "M480-304 304-480l176-176 176 176-176 176Zm56 199q-11 11-26 17t-30 6q-15 0-30-6t-26-17L105-424q-11-11-17-26t-6-30q0-15 6-30t17-26l318-318q12-12 26.5-18t30.5-6q16 0 30.5 6t26.5 18l318 318q11 11 17 26t6 30q0 15-6 30t-17 26L536-105Zm-56-87 288-288-288-288-288 288 288 288Z",
  nearby_empty: "M536-105c-7.333 7.333-16 13-26 17s-20 6-30 6-20-2-30-6-18.667-9.667-26-17L105-424c-7.333-7.333-13-16-17-26s-6-20-6-30 2-20 6-30 9.667-18.667 17-26l318-318c8-8 16.833-14 26.5-18 9.667-4 19.833-6 30.5-6 10.667 0 20.833 2 30.5 6 9.667 4 18.5 10 26.5 18l318 318c7.333 7.333 13 16 17 26s6 20 6 30-2 20-6 30-9.667 18.667-17 26zm-56-87 288-288-288-288-288 288z",
  more_vert: "M480.34-95Q438-95 409-124.42t-29-70.74q0-42.14 29.07-71.99Q438.13-297 479.66-297 522-297 551-267.26t29 71.5q0 41.76-29.02 71.26Q521.97-95 480.34-95Zm0-285Q438-380 409-409.07q-29-29.06-29-70.59Q380-522 409.07-551q29.06-29 70.59-29Q522-580 551-550.98q29 29.01 29 70.64Q580-438 550.98-409q-29.01 29-70.64 29Zm0-283Q438-663 409-692.95q-29-29.94-29-72Q380-807 409.07-836q29.06-29 70.59-29Q522-865 551-835.98q29 29.01 29 70.86 0 42.25-29.02 72.19Q521.97-663 480.34-663Z",
  keyboard_arrow_down: "M480-305 200-586l95-94 185 185 186-185 95 94-281 281Z",
  keyboard_arrow_right: "M466-480 281-665l95-95 280 280-280 279-95-95 185-184Z",
  edit: "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z",
  delete: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z",
  content_copy: "M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z",
  add: "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
};
function Kl(t) {
  let e, n, i, s, l;
  return {
    c() {
      e = at("svg"), n = at("title"), i = De("icon "), s = De(
        /*icon*/
        t[1]
      ), l = at("path"), U(
        l,
        "d",
        /*draw*/
        t[3]
      ), U(
        e,
        "class",
        /*className*/
        t[2]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(
        e,
        "fill",
        /*fillColor*/
        t[0]
      );
    },
    m(o, r) {
      D(o, e, r), J(e, n), J(n, i), J(n, s), J(e, l);
    },
    p(o, [r]) {
      r & /*icon*/
      2 && Qe(
        s,
        /*icon*/
        o[1]
      ), r & /*draw*/
      8 && U(
        l,
        "d",
        /*draw*/
        o[3]
      ), r & /*className*/
      4 && U(
        e,
        "class",
        /*className*/
        o[2]
      ), r & /*fillColor*/
      1 && U(
        e,
        "fill",
        /*fillColor*/
        o[0]
      );
    },
    i: Ce,
    o: Ce,
    d(o) {
      o && R(e);
    }
  };
}
function Jl(t) {
  return t === "primary" ? "var(--mdc-theme-primary)" : t === "secondary" ? "var(--mdc-theme-secondary)" : t;
}
function Yl(t, e, n) {
  let i, { fillColor: s = "primary" } = e, { icon: l } = e, { class: o = "" } = e;
  function r(a) {
    return Xl[a];
  }
  return t.$$set = (a) => {
    "fillColor" in a && n(0, s = a.fillColor), "icon" in a && n(1, l = a.icon), "class" in a && n(2, o = a.class);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon*/
    2 && n(3, i = r(l)), t.$$.dirty & /*fillColor*/
    1 && n(0, s = Jl(s));
  }, [s, l, o, i];
}
class Ct extends he {
  constructor(e) {
    super(), de(this, e, Yl, Kl, oe, { fillColor: 0, icon: 1, class: 2 });
  }
  get fillColor() {
    return this.$$.ctx[0];
  }
  set fillColor(e) {
    this.$$set({ fillColor: e }), y();
  }
  get icon() {
    return this.$$.ctx[1];
  }
  set icon(e) {
    this.$$set({ icon: e }), y();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
}
me(Ct, { fillColor: {}, icon: {}, class: {} }, [], [], !0);
var yn = function(t, e) {
  return yn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
  }, yn(t, e);
};
function qe(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  yn(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var Pe = function() {
  return Pe = Object.assign || function(e) {
    for (var n, i = 1, s = arguments.length; i < s; i++) {
      n = arguments[i];
      for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
    }
    return e;
  }, Pe.apply(this, arguments);
};
function Ye(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], i = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $l(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var i = n.call(t), s, l = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; ) l.push(s.value);
  } catch (r) {
    o = { error: r };
  } finally {
    try {
      s && !s.done && (n = i.return) && n.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
}
function Ql(t, e, n) {
  if (n || arguments.length === 2) for (var i = 0, s = e.length, l; i < s; i++)
    (l || !(i in e)) && (l || (l = Array.prototype.slice.call(e, 0, i)), l[i] = e[i]);
  return t.concat(l || Array.prototype.slice.call(e));
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var st = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
  }()
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function xl(t) {
  return t === void 0 && (t = window), er(t) ? { passive: !0 } : !1;
}
function er(t) {
  t === void 0 && (t = window);
  var e = !1;
  try {
    var n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, i = function() {
    };
    t.document.addEventListener("test", i, n), t.document.removeEventListener("test", i, n);
  } catch {
    e = !1;
  }
  return e;
}
const ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: xl
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function tr(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (ms(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function ms(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function nr(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var i = n.scrollWidth;
  return document.documentElement.removeChild(n), i;
}
const ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: tr,
  estimateScrollWidth: nr,
  matches: ms
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var sr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, lr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, jn = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, zt;
function rr(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, i = zt;
  if (typeof zt == "boolean" && !e)
    return zt;
  var s = n && typeof n.supports == "function";
  if (!s)
    return !1;
  var l = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return i = l || o, e || (zt = i), i;
}
function ar(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var i = e.x, s = e.y, l = i + n.left, o = s + n.top, r, a;
  if (t.type === "touchstart") {
    var u = t;
    r = u.changedTouches[0].pageX - l, a = u.changedTouches[0].pageY - o;
  } else {
    var f = t;
    r = f.pageX - l, a = f.pageY - o;
  }
  return { x: r, y: a };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var qn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], zn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Vt = [], or = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var i = t.call(this, Pe(Pe({}, e.defaultAdapter), n)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(s) {
        i.activateImpl(s);
      }, i.deactivateHandler = function() {
        i.deactivateImpl();
      }, i.focusHandler = function() {
        i.handleFocus();
      }, i.blurHandler = function() {
        i.handleBlur();
      }, i.resizeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return sr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return lr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return jn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var s = e.cssClasses, l = s.ROOT, o = s.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(l), n.adapter.isUnbounded() && (n.adapter.addClass(o), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, s = i.ROOT, l = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(s), n.adapter.removeClass(l), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(n) {
      this.activateImpl(n);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(n) {
      var i = e.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(n) {
      var i, s;
      if (n) {
        try {
          for (var l = Ye(qn), o = l.next(); !o.done; o = l.next()) {
            var r = o.value;
            this.adapter.registerInteractionHandler(r, this.activateHandler);
          }
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            o && !o.done && (s = l.return) && s.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(n) {
      var i, s;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var l = Ye(zn), o = l.next(); !o.done; o = l.next()) {
            var r = o.value;
            this.adapter.registerDocumentInteractionHandler(r, this.deactivateHandler);
          }
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            o && !o.done && (s = l.return) && s.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, i;
      try {
        for (var s = Ye(qn), l = s.next(); !l.done; l = s.next()) {
          var o = l.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (r) {
        n = { error: r };
      } finally {
        try {
          l && !l.done && (i = s.return) && i.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var s = Ye(zn), l = s.next(); !l.done; l = s.next()) {
          var o = l.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (r) {
        n = { error: r };
      } finally {
        try {
          l && !l.done && (i = s.return) && i.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, i = e.strings, s = Object.keys(i);
      s.forEach(function(l) {
        l.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(i[l], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var s = this.activationState;
        if (!s.isActivated) {
          var l = this.previousActivationEvent, o = l && n !== void 0 && l.type !== n.type;
          if (!o) {
            s.isActivated = !0, s.isProgrammatic = n === void 0, s.activationEvent = n, s.wasActivatedByPointer = s.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var r = n !== void 0 && Vt.length > 0 && Vt.some(function(a) {
              return i.adapter.containsEventTarget(a);
            });
            if (r) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Vt.push(n.target), this.registerDeactivationHandlers(n)), s.wasElementMadeActive = this.checkElementMadeActive(n), s.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Vt = [], !s.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (s.wasElementMadeActive = i.checkElementMadeActive(n), s.wasElementMadeActive && i.animateActivation()), s.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, i = e.strings, s = i.VAR_FG_TRANSLATE_START, l = i.VAR_FG_TRANSLATE_END, o = e.cssClasses, r = o.FG_DEACTIVATION, a = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var f = "", c = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), m = d.startPoint, p = d.endPoint;
        f = m.x + "px, " + m.y + "px", c = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(s, f), this.adapter.updateCssVariable(l, c), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(a), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, i = n.activationEvent, s = n.wasActivatedByPointer, l;
      s ? l = ar(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : l = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, l = {
        x: l.x - this.initialSize / 2,
        y: l.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: l, endPoint: o };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, i = e.cssClasses.FG_DEACTIVATION, s = this.activationState, l = s.hasDeactivationUXRun, o = s.isActivated, r = l || !o;
      r && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(i);
      }, jn.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var n = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var n = this, i = this.activationState;
      if (i.isActivated) {
        var s = Pe({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(s);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(s), n.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(n) {
      var i = n.wasActivatedByPointer, s = n.wasElementMadeActive;
      (i || s) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), s = function() {
        var o = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : s();
      var l = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && l % 2 !== 0 ? this.initialSize = l - 1 : this.initialSize = l, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, i = n.VAR_FG_SIZE, s = n.VAR_LEFT, l = n.VAR_TOP, o = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(s, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(l, this.unboundedCoords.top + "px"));
    }, e;
  }(st)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Gt = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, lt = {
  ARIA_LABEL: "aria-label",
  ARIA_PRESSED: "aria-pressed",
  DATA_ARIA_LABEL_OFF: "data-aria-label-off",
  DATA_ARIA_LABEL_ON: "data-aria-label-on",
  CHANGE_EVENT: "MDCIconButtonToggle:change"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ur = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var i = t.call(this, Pe(Pe({}, e.defaultAdapter), n)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return lt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          notifyChange: function() {
          },
          removeClass: function() {
          },
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this.adapter.getAttr(lt.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(lt.DATA_ARIA_LABEL_OFF);
      if (n && i) {
        if (this.adapter.getAttr(lt.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(lt.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Gt.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Gt.ICON_BUTTON_ON) : this.adapter.removeClass(Gt.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = n ? this.adapter.getAttr(lt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(lt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(lt.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(lt.ARIA_PRESSED, "" + n);
    }, e;
  }(st)
);
function W(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Te(t, e, n, i = { bubbles: !0 }, s = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dipatch event without element.");
  const l = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: n }));
  if (t == null || t.dispatchEvent(l), s && e.startsWith("SMUI")) {
    const o = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, i), { detail: n }));
    t == null || t.dispatchEvent(o), o.defaultPrevented && l.preventDefault();
  }
  return l;
}
function ut(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let s = 0; s < n.length; s++) {
    const l = n[s], o = l.indexOf("$");
    o !== -1 && e.indexOf(l.substring(0, o + 1)) !== -1 || e.indexOf(l) === -1 && (i[l] = t[l]);
  }
  return i;
}
const Vn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, cr = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Ie(t) {
  let e, n = [];
  t.$on = (s, l) => {
    let o = s, r = () => {
    };
    return e ? r = e(o, l) : n.push([o, l]), o.match(Vn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', o), () => {
      r();
    };
  };
  function i(s) {
    const l = t.$$.callbacks[s.type];
    l && l.slice().forEach((o) => o.call(this, s));
  }
  return (s) => {
    const l = [], o = {};
    e = (r, a) => {
      let u = r, f = a, c = !1;
      const d = u.match(Vn), m = u.match(cr), p = d || m;
      if (u.match(/^SMUI:\w+:/)) {
        const _ = u.split(":");
        let v = "";
        for (let L = 0; L < _.length; L++)
          v += L === _.length - 1 ? ":" + _[L] : _[L].split("-").map((A) => A.slice(0, 1).toUpperCase() + A.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${v.split("$")[0]}.`), u = v;
      }
      if (p) {
        const _ = u.split(d ? ":" : "$");
        u = _[0];
        const v = _.slice(1).reduce((L, A) => (L[A] = !0, L), {});
        v.passive && (c = c || {}, c.passive = !0), v.nonpassive && (c = c || {}, c.passive = !1), v.capture && (c = c || {}, c.capture = !0), v.once && (c = c || {}, c.once = !0), v.preventDefault && (f = fr(f)), v.stopPropagation && (f = dr(f)), v.stopImmediatePropagation && (f = mr(f)), v.self && (f = hr(s, f)), v.trusted && (f = pr(f));
      }
      const g = Gn(s, u, f, c), b = () => {
        g();
        const _ = l.indexOf(b);
        _ > -1 && l.splice(_, 1);
      };
      return l.push(b), u in o || (o[u] = Gn(s, u, i)), b;
    };
    for (let r = 0; r < n.length; r++)
      e(n[r][0], n[r][1]);
    return {
      destroy: () => {
        for (let r = 0; r < l.length; r++)
          l[r]();
        for (let r of Object.entries(o))
          r[1]();
      }
    };
  };
}
function Gn(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function fr(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function dr(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function mr(t) {
  return function(e) {
    return e.stopImmediatePropagation(), t.call(this, e);
  };
}
function hr(t, e) {
  return function(n) {
    if (n.target === t)
      return e.call(this, n);
  };
}
function pr(t) {
  return function(e) {
    if (e.isTrusted)
      return t.call(this, e);
  };
}
function Me(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let s = 0; s < n.length; s++) {
    const l = n[s];
    l.substring(0, e.length) === e && (i[l.substring(e.length)] = t[l]);
  }
  return i;
}
function Se(t, e) {
  let n = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const s = e[i], l = Array.isArray(s) ? s[0] : s;
      Array.isArray(s) && s.length > 1 ? n.push(l(t, s[1])) : n.push(l(t));
    }
  return {
    update(i) {
      if ((i && i.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let s = 0; s < i.length; s++) {
          const l = n[s];
          if (l && l.update) {
            const o = i[s];
            Array.isArray(o) && o.length > 1 ? l.update(o[1]) : l.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < n.length; i++) {
        const s = n[i];
        s && s.destroy && s.destroy();
      }
    }
  };
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var fn = "mdc-dom-focus-sentinel", gr = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.root = e, this.options = n, this.elFocusedBeforeTrapFocus = null;
    }
    return t.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, t.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + fn)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, t.prototype.wrapTabFocus = function(e) {
      var n = this, i = this.createSentinel(), s = this.createSentinel();
      i.addEventListener("focus", function() {
        var l = n.getFocusableElements(e);
        l.length > 0 && l[l.length - 1].focus();
      }), s.addEventListener("focus", function() {
        var l = n.getFocusableElements(e);
        l.length > 0 && l[0].focus();
      }), e.insertBefore(i, e.children[0]), e.appendChild(s);
    }, t.prototype.focusInitialElement = function(e, n) {
      var i = 0;
      n && (i = Math.max(e.indexOf(n), 0)), e[i].focus();
    }, t.prototype.getFocusableElements = function(e) {
      var n = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return n.filter(function(i) {
        var s = i.getAttribute("aria-disabled") === "true" || i.getAttribute("disabled") != null || i.getAttribute("hidden") != null || i.getAttribute("aria-hidden") === "true", l = i.tabIndex >= 0 && i.getBoundingClientRect().width > 0 && !i.classList.contains(fn) && !s, o = !1;
        if (l) {
          var r = getComputedStyle(i);
          o = r.display === "none" || r.visibility === "hidden";
        }
        return l && !o;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(fn), e;
    }, t;
  }()
);
const br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: gr
}, Symbol.toStringTag, { value: "Module" })), { applyPassive: Zt } = ds, { matches: _r } = ir;
function tt(t, { ripple: e = !0, surface: n = !1, unbounded: i = !1, disabled: s = !1, color: l, active: o, rippleElement: r, eventTarget: a, activeTarget: u, addClass: f = (p) => t.classList.add(p), removeClass: c = (p) => t.classList.remove(p), addStyle: d = (p, g) => t.style.setProperty(p, g), initPromise: m = Promise.resolve() } = {}) {
  let p, g = Xe("SMUI:addLayoutListener"), b, _ = o, v = a, L = u;
  function A() {
    n ? (f("mdc-ripple-surface"), l === "primary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : l === "secondary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : (c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary"))) : (c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), p && _ !== o && (_ = o, o ? p.activate() : o === !1 && p.deactivate()), e && !p ? (p = new or({
      addClass: f,
      browserSupportsCssVars: () => rr(window),
      computeBoundingRect: () => (r || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, h) => document.documentElement.removeEventListener(T, h, Zt()),
      deregisterInteractionHandler: (T, h) => (a || t).removeEventListener(T, h, Zt()),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => o ?? _r(u || t, ":active"),
      isSurfaceDisabled: () => !!s,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (T, h) => document.documentElement.addEventListener(T, h, Zt()),
      registerInteractionHandler: (T, h) => (a || t).addEventListener(T, h, Zt()),
      registerResizeHandler: (T) => window.addEventListener("resize", T),
      removeClass: c,
      updateCssVariable: d
    }), m.then(() => {
      p && (p.init(), p.setUnbounded(i));
    })) : p && !e && m.then(() => {
      p && (p.destroy(), p = void 0);
    }), p && (v !== a || L !== u) && (v = a, L = u, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(i));
    })), !e && i && f("mdc-ripple-upgraded--unbounded");
  }
  A(), g && (b = g(I));
  function I() {
    p && p.layout();
  }
  return {
    update(T) {
      ({
        ripple: e,
        surface: n,
        unbounded: i,
        disabled: s,
        color: l,
        active: o,
        rippleElement: r,
        eventTarget: a,
        activeTarget: u,
        addClass: f,
        removeClass: c,
        addStyle: d,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (h) => t.classList.add(h), removeClass: (h) => t.classList.remove(h), addStyle: (h, k) => t.style.setProperty(h, k), initPromise: Promise.resolve() }, T)), A();
    },
    destroy() {
      p && (p.destroy(), p = void 0, c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), b && b();
    }
  };
}
function vr(t) {
  let e;
  const n = (
    /*#slots*/
    t[10].default
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l & /*$$scope*/
      4096) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[12],
        e ? se(
          n,
          /*$$scope*/
          s[12],
          l,
          null
        ) : re(
          /*$$scope*/
          s[12]
        ),
        null
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function yr(t) {
  let e, n, i;
  const s = [
    { tag: (
      /*tag*/
      t[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[5],
        .../*use*/
        t[0]
      ]
    },
    {
      class: W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-button__label": (
          /*context*/
          t[6] === "button"
        ),
        "mdc-fab__label": (
          /*context*/
          t[6] === "fab"
        ),
        "mdc-tab__text-label": (
          /*context*/
          t[6] === "tab"
        ),
        "mdc-image-list__label": (
          /*context*/
          t[6] === "image-list"
        ),
        "mdc-snackbar__label": (
          /*context*/
          t[6] === "snackbar"
        ),
        "mdc-banner__text": (
          /*context*/
          t[6] === "banner"
        ),
        "mdc-segmented-button__label": (
          /*context*/
          t[6] === "segmented-button"
        ),
        "mdc-data-table__pagination-rows-per-page-label": (
          /*context*/
          t[6] === "data-table:pagination"
        ),
        "mdc-data-table__header-cell-label": (
          /*context*/
          t[6] === "data-table:sortable-header-cell"
        )
      })
    },
    /*context*/
    t[6] === "snackbar" ? { "aria-atomic": "false" } : {},
    { tabindex: (
      /*tabindex*/
      t[7]
    ) },
    /*$$restProps*/
    t[8]
  ];
  var l = (
    /*component*/
    t[2]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [vr] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < s.length; f += 1)
      u = M(u, s[f]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = M(u, te(s, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        r[3]
      ) },
      a & /*forwardEvents, use*/
      33 && {
        use: [
          /*forwardEvents*/
          r[5],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, context*/
      66 && {
        class: W({
          [
            /*className*/
            r[1]
          ]: !0,
          "mdc-button__label": (
            /*context*/
            r[6] === "button"
          ),
          "mdc-fab__label": (
            /*context*/
            r[6] === "fab"
          ),
          "mdc-tab__text-label": (
            /*context*/
            r[6] === "tab"
          ),
          "mdc-image-list__label": (
            /*context*/
            r[6] === "image-list"
          ),
          "mdc-snackbar__label": (
            /*context*/
            r[6] === "snackbar"
          ),
          "mdc-banner__text": (
            /*context*/
            r[6] === "banner"
          ),
          "mdc-segmented-button__label": (
            /*context*/
            r[6] === "segmented-button"
          ),
          "mdc-data-table__pagination-rows-per-page-label": (
            /*context*/
            r[6] === "data-table:pagination"
          ),
          "mdc-data-table__header-cell-label": (
            /*context*/
            r[6] === "data-table:sortable-header-cell"
          )
        })
      },
      a & /*context*/
      64 && ue(
        /*context*/
        r[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      a & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        r[7]
      ) },
      a & /*$$restProps*/
      256 && ue(
        /*$$restProps*/
        r[8]
      )
    ]))), { props: u };
  }
  return l && (e = je(l, o(t)), t[11](e)), {
    c() {
      e && G(e.$$.fragment), n = we();
    },
    m(r, a) {
      e && z(e, r, a), D(r, n, a), i = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      4 && l !== (l = /*component*/
      r[2])) {
        if (e) {
          ce();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            V(u, 1);
          }), fe();
        }
        l ? (e = je(l, o(r, a)), r[11](e), G(e.$$.fragment), E(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (l) {
        const u = a & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? te(s, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          a & /*forwardEvents, use*/
          33 && {
            use: [
              /*forwardEvents*/
              r[5],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, context*/
          66 && {
            class: W({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-button__label": (
                /*context*/
                r[6] === "button"
              ),
              "mdc-fab__label": (
                /*context*/
                r[6] === "fab"
              ),
              "mdc-tab__text-label": (
                /*context*/
                r[6] === "tab"
              ),
              "mdc-image-list__label": (
                /*context*/
                r[6] === "image-list"
              ),
              "mdc-snackbar__label": (
                /*context*/
                r[6] === "snackbar"
              ),
              "mdc-banner__text": (
                /*context*/
                r[6] === "banner"
              ),
              "mdc-segmented-button__label": (
                /*context*/
                r[6] === "segmented-button"
              ),
              "mdc-data-table__pagination-rows-per-page-label": (
                /*context*/
                r[6] === "data-table:pagination"
              ),
              "mdc-data-table__header-cell-label": (
                /*context*/
                r[6] === "data-table:sortable-header-cell"
              )
            })
          },
          a & /*context*/
          64 && ue(
            /*context*/
            r[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          a & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            r[7]
          ) },
          a & /*$$restProps*/
          256 && ue(
            /*$$restProps*/
            r[8]
          )
        ]) : {};
        a & /*$$scope*/
        4096 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && E(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[11](null), e && V(e, r);
    }
  };
}
function Er(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, f, { component: c = Ve } = e, { tag: d = c === Ve ? "span" : void 0 } = e;
  const m = Xe("SMUI:label:context"), p = Xe("SMUI:label:tabindex");
  function g() {
    return f.getElement();
  }
  function b(_) {
    ee[_ ? "unshift" : "push"](() => {
      f = _, n(4, f);
    });
  }
  return t.$$set = (_) => {
    e = M(M({}, e), Ae(_)), n(8, s = Y(e, i)), "use" in _ && n(0, a = _.use), "class" in _ && n(1, u = _.class), "component" in _ && n(2, c = _.component), "tag" in _ && n(3, d = _.tag), "$$scope" in _ && n(12, o = _.$$scope);
  }, [
    a,
    u,
    c,
    d,
    f,
    r,
    m,
    p,
    s,
    g,
    l,
    b,
    o
  ];
}
class Ar extends he {
  constructor(e) {
    super(), de(this, e, Er, yr, oe, {
      use: 0,
      class: 1,
      component: 2,
      tag: 3,
      getElement: 9
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
me(Ar, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function Cr(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l & /*$$scope*/
      8192) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[13],
        e ? se(
          n,
          /*$$scope*/
          s[13],
          l,
          null
        ) : re(
          /*$$scope*/
          s[13]
        ),
        null
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Ir(t) {
  let e, n, i;
  const s = [
    { tag: (
      /*tag*/
      t[4]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[6],
        .../*use*/
        t[0]
      ]
    },
    {
      class: W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-button__icon": (
          /*context*/
          t[8] === "button"
        ),
        "mdc-fab__icon": (
          /*context*/
          t[8] === "fab"
        ),
        "mdc-icon-button__icon": (
          /*context*/
          t[8] === "icon-button"
        ),
        "mdc-icon-button__icon--on": (
          /*context*/
          t[8] === "icon-button" && /*on*/
          t[2]
        ),
        "mdc-tab__icon": (
          /*context*/
          t[8] === "tab"
        ),
        "mdc-banner__icon": (
          /*context*/
          t[8] === "banner"
        ),
        "mdc-segmented-button__icon": (
          /*context*/
          t[8] === "segmented-button"
        )
      })
    },
    { "aria-hidden": "true" },
    /*svg*/
    t[7] ? { focusable: "false", tabindex: "-1" } : {},
    /*$$restProps*/
    t[9]
  ];
  var l = (
    /*component*/
    t[3]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [Cr] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < s.length; f += 1)
      u = M(u, s[f]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983 && (u = M(u, te(s, [
      a & /*tag*/
      16 && { tag: (
        /*tag*/
        r[4]
      ) },
      a & /*forwardEvents, use*/
      65 && {
        use: [
          /*forwardEvents*/
          r[6],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, context, on*/
      262 && {
        class: W({
          [
            /*className*/
            r[1]
          ]: !0,
          "mdc-button__icon": (
            /*context*/
            r[8] === "button"
          ),
          "mdc-fab__icon": (
            /*context*/
            r[8] === "fab"
          ),
          "mdc-icon-button__icon": (
            /*context*/
            r[8] === "icon-button"
          ),
          "mdc-icon-button__icon--on": (
            /*context*/
            r[8] === "icon-button" && /*on*/
            r[2]
          ),
          "mdc-tab__icon": (
            /*context*/
            r[8] === "tab"
          ),
          "mdc-banner__icon": (
            /*context*/
            r[8] === "banner"
          ),
          "mdc-segmented-button__icon": (
            /*context*/
            r[8] === "segmented-button"
          )
        })
      },
      s[3],
      a & /*svg*/
      128 && ue(
        /*svg*/
        r[7] ? { focusable: "false", tabindex: "-1" } : {}
      ),
      a & /*$$restProps*/
      512 && ue(
        /*$$restProps*/
        r[9]
      )
    ]))), { props: u };
  }
  return l && (e = je(l, o(t)), t[12](e)), {
    c() {
      e && G(e.$$.fragment), n = we();
    },
    m(r, a) {
      e && z(e, r, a), D(r, n, a), i = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      8 && l !== (l = /*component*/
      r[3])) {
        if (e) {
          ce();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            V(u, 1);
          }), fe();
        }
        l ? (e = je(l, o(r, a)), r[12](e), G(e.$$.fragment), E(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (l) {
        const u = a & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
        983 ? te(s, [
          a & /*tag*/
          16 && { tag: (
            /*tag*/
            r[4]
          ) },
          a & /*forwardEvents, use*/
          65 && {
            use: [
              /*forwardEvents*/
              r[6],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, context, on*/
          262 && {
            class: W({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-button__icon": (
                /*context*/
                r[8] === "button"
              ),
              "mdc-fab__icon": (
                /*context*/
                r[8] === "fab"
              ),
              "mdc-icon-button__icon": (
                /*context*/
                r[8] === "icon-button"
              ),
              "mdc-icon-button__icon--on": (
                /*context*/
                r[8] === "icon-button" && /*on*/
                r[2]
              ),
              "mdc-tab__icon": (
                /*context*/
                r[8] === "tab"
              ),
              "mdc-banner__icon": (
                /*context*/
                r[8] === "banner"
              ),
              "mdc-segmented-button__icon": (
                /*context*/
                r[8] === "segmented-button"
              )
            })
          },
          s[3],
          a & /*svg*/
          128 && ue(
            /*svg*/
            r[7] ? { focusable: "false", tabindex: "-1" } : {}
          ),
          a & /*$$restProps*/
          512 && ue(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        a & /*$$scope*/
        8192 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && E(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[12](null), e && V(e, r);
    }
  };
}
function Sr(t, e, n) {
  const i = ["use", "class", "on", "component", "tag", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { on: f = !1 } = e, c, { component: d = Ve } = e, { tag: m = d === Ve ? "i" : void 0 } = e;
  const p = d === hs, g = Xe("SMUI:icon:context");
  function b() {
    return c.getElement();
  }
  function _(v) {
    ee[v ? "unshift" : "push"](() => {
      c = v, n(5, c);
    });
  }
  return t.$$set = (v) => {
    e = M(M({}, e), Ae(v)), n(9, s = Y(e, i)), "use" in v && n(0, a = v.use), "class" in v && n(1, u = v.class), "on" in v && n(2, f = v.on), "component" in v && n(3, d = v.component), "tag" in v && n(4, m = v.tag), "$$scope" in v && n(13, o = v.$$scope);
  }, [
    a,
    u,
    f,
    d,
    m,
    c,
    r,
    p,
    g,
    s,
    b,
    l,
    _,
    o
  ];
}
class Lr extends he {
  constructor(e) {
    super(), de(this, e, Sr, Ir, oe, {
      use: 0,
      class: 1,
      on: 2,
      component: 3,
      tag: 4,
      getElement: 10
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get on() {
    return this.$$.ctx[2];
  }
  set on(e) {
    this.$$set({ on: e }), y();
  }
  get component() {
    return this.$$.ctx[3];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[4];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
me(Lr, { use: {}, class: {}, on: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function Tr(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i, s = (
    /*tag*/
    t[1] && dn(t)
  );
  return {
    c() {
      s && s.c(), n = we();
    },
    m(l, o) {
      s && s.m(l, o), D(l, n, o), i = !0;
    },
    p(l, o) {
      /*tag*/
      l[1] ? e ? oe(
        e,
        /*tag*/
        l[1]
      ) ? (s.d(1), s = dn(l), e = /*tag*/
      l[1], s.c(), s.m(n.parentNode, n)) : s.p(l, o) : (s = dn(l), e = /*tag*/
      l[1], s.c(), s.m(n.parentNode, n)) : e && (s.d(1), s = null, e = /*tag*/
      l[1]);
    },
    i(l) {
      i || (E(s, l), i = !0);
    },
    o(l) {
      C(s, l), i = !1;
    },
    d(l) {
      l && R(n), s && s.d(l);
    }
  };
}
function kr(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i = (
    /*tag*/
    t[1] && mn(t)
  );
  return {
    c() {
      i && i.c(), n = we();
    },
    m(s, l) {
      i && i.m(s, l), D(s, n, l);
    },
    p(s, l) {
      /*tag*/
      s[1] ? e ? oe(
        e,
        /*tag*/
        s[1]
      ) ? (i.d(1), i = mn(s), e = /*tag*/
      s[1], i.c(), i.m(n.parentNode, n)) : i.p(s, l) : (i = mn(s), e = /*tag*/
      s[1], i.c(), i.m(n.parentNode, n)) : e && (i.d(1), i = null, e = /*tag*/
      s[1]);
    },
    i: Ce,
    o: Ce,
    d(s) {
      s && R(n), i && i.d(s);
    }
  };
}
function Or(t) {
  let e, n, i, s, l;
  const o = (
    /*#slots*/
    t[8].default
  ), r = ie(
    o,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let a = [
    /*$$restProps*/
    t[5]
  ], u = {};
  for (let f = 0; f < a.length; f += 1)
    u = M(u, a[f]);
  return {
    c() {
      e = at("svg"), r && r.c(), xt(e, u);
    },
    m(f, c) {
      D(f, e, c), r && r.m(e, null), t[9](e), i = !0, s || (l = [
        x(n = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], s = !0);
    },
    p(f, c) {
      r && r.p && (!i || c & /*$$scope*/
      128) && le(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        i ? se(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : re(
          /*$$scope*/
          f[7]
        ),
        null
      ), xt(e, u = te(a, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), n && pe(n.update) && c & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (E(r, f), i = !0);
    },
    o(f) {
      C(r, f), i = !1;
    },
    d(f) {
      f && R(e), r && r.d(f), t[9](null), s = !1, Ee(l);
    }
  };
}
function dn(t) {
  let e, n, i, s, l;
  const o = (
    /*#slots*/
    t[8].default
  ), r = ie(
    o,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let a = [
    /*$$restProps*/
    t[5]
  ], u = {};
  for (let f = 0; f < a.length; f += 1)
    u = M(u, a[f]);
  return {
    c() {
      e = j(
        /*tag*/
        t[1]
      ), r && r.c(), en(
        /*tag*/
        t[1]
      )(e, u);
    },
    m(f, c) {
      D(f, e, c), r && r.m(e, null), t[11](e), i = !0, s || (l = [
        x(n = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], s = !0);
    },
    p(f, c) {
      r && r.p && (!i || c & /*$$scope*/
      128) && le(
        r,
        o,
        f,
        /*$$scope*/
        f[7],
        i ? se(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : re(
          /*$$scope*/
          f[7]
        ),
        null
      ), en(
        /*tag*/
        f[1]
      )(e, u = te(a, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), n && pe(n.update) && c & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (E(r, f), i = !0);
    },
    o(f) {
      C(r, f), i = !1;
    },
    d(f) {
      f && R(e), r && r.d(f), t[11](null), s = !1, Ee(l);
    }
  };
}
function mn(t) {
  let e, n, i, s, l = [
    /*$$restProps*/
    t[5]
  ], o = {};
  for (let r = 0; r < l.length; r += 1)
    o = M(o, l[r]);
  return {
    c() {
      e = j(
        /*tag*/
        t[1]
      ), en(
        /*tag*/
        t[1]
      )(e, o);
    },
    m(r, a) {
      D(r, e, a), t[10](e), i || (s = [
        x(n = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], i = !0);
    },
    p(r, a) {
      en(
        /*tag*/
        r[1]
      )(e, o = te(l, [a & /*$$restProps*/
      32 && /*$$restProps*/
      r[5]])), n && pe(n.update) && a & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        r[0]
      );
    },
    d(r) {
      r && R(e), t[10](null), i = !1, Ee(s);
    }
  };
}
function wr(t) {
  let e, n, i, s;
  const l = [Or, kr, Tr], o = [];
  function r(a, u) {
    return (
      /*tag*/
      a[1] === "svg" ? 0 : (
        /*selfClosing*/
        a[3] ? 1 : 2
      )
    );
  }
  return e = r(t), n = o[e] = l[e](t), {
    c() {
      n.c(), i = we();
    },
    m(a, u) {
      o[e].m(a, u), D(a, i, u), s = !0;
    },
    p(a, [u]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (ce(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), fe(), n = o[e], n ? n.p(a, u) : (n = o[e] = l[e](a), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      s || (E(n), s = !0);
    },
    o(a) {
      C(n), s = !1;
    },
    d(a) {
      a && R(i), o[e].d(a);
    }
  };
}
function Pr(t, e, n) {
  let i;
  const s = ["use", "tag", "getElement"];
  let l = Y(e, s), { $$slots: o = {}, $$scope: r } = e, { use: a = [] } = e, { tag: u } = e;
  const f = Ie(ye());
  let c;
  function d() {
    return c;
  }
  function m(b) {
    ee[b ? "unshift" : "push"](() => {
      c = b, n(2, c);
    });
  }
  function p(b) {
    ee[b ? "unshift" : "push"](() => {
      c = b, n(2, c);
    });
  }
  function g(b) {
    ee[b ? "unshift" : "push"](() => {
      c = b, n(2, c);
    });
  }
  return t.$$set = (b) => {
    e = M(M({}, e), Ae(b)), n(5, l = Y(e, s)), "use" in b && n(0, a = b.use), "tag" in b && n(1, u = b.tag), "$$scope" in b && n(7, r = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*tag*/
    2 && n(3, i = [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ].indexOf(u) > -1);
  }, [
    a,
    u,
    c,
    i,
    f,
    l,
    d,
    r,
    o,
    m,
    p,
    g
  ];
}
class Ve extends he {
  constructor(e) {
    super(), de(this, e, Pr, wr, oe, { use: 0, tag: 1, getElement: 6 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get tag() {
    return this.$$.ctx[1];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
me(Ve, { use: {}, tag: {} }, ["default"], ["getElement"], !0);
function Rr(t) {
  let e, n, i, s, l;
  const o = (
    /*#slots*/
    t[6].default
  ), r = ie(
    o,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let a = [
    /*$$restProps*/
    t[3]
  ], u = {};
  for (let f = 0; f < a.length; f += 1)
    u = M(u, a[f]);
  return {
    c() {
      e = at("svg"), r && r.c(), xt(e, u);
    },
    m(f, c) {
      D(f, e, c), r && r.m(e, null), t[7](e), i = !0, s || (l = [
        x(n = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[2].call(null, e)
        )
      ], s = !0);
    },
    p(f, [c]) {
      r && r.p && (!i || c & /*$$scope*/
      32) && le(
        r,
        o,
        f,
        /*$$scope*/
        f[5],
        i ? se(
          o,
          /*$$scope*/
          f[5],
          c,
          null
        ) : re(
          /*$$scope*/
          f[5]
        ),
        null
      ), xt(e, u = te(a, [c & /*$$restProps*/
      8 && /*$$restProps*/
      f[3]])), n && pe(n.update) && c & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (E(r, f), i = !0);
    },
    o(f) {
      C(r, f), i = !1;
    },
    d(f) {
      f && R(e), r && r.d(f), t[7](null), s = !1, Ee(l);
    }
  };
}
function Dr(t, e, n) {
  const i = ["use", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let { use: r = [] } = e;
  const a = Ie(ye());
  let u;
  function f() {
    return u;
  }
  function c(d) {
    ee[d ? "unshift" : "push"](() => {
      u = d, n(1, u);
    });
  }
  return t.$$set = (d) => {
    e = M(M({}, e), Ae(d)), n(3, s = Y(e, i)), "use" in d && n(0, r = d.use), "$$scope" in d && n(5, o = d.$$scope);
  }, [
    r,
    u,
    a,
    s,
    f,
    o,
    l,
    c
  ];
}
class hs extends he {
  constructor(e) {
    super(), de(this, e, Dr, Rr, oe, { use: 0, getElement: 4 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
me(hs, { use: {} }, ["default"], ["getElement"], !0);
const bt = [];
function ps(t, e) {
  return {
    subscribe: Ke(t, e).subscribe
  };
}
function Ke(t, e = Ce) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function s(r) {
    if (oe(t, r) && (t = r, n)) {
      const a = !bt.length;
      for (const u of i)
        u[1](), bt.push(u, t);
      if (a) {
        for (let u = 0; u < bt.length; u += 2)
          bt[u][0](bt[u + 1]);
        bt.length = 0;
      }
    }
  }
  function l(r) {
    s(r(t));
  }
  function o(r, a = Ce) {
    const u = [r, a];
    return i.add(u), i.size === 1 && (n = e(s, l) || Ce), r(t), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: l, subscribe: o };
}
function Br(t, e, n) {
  const i = !Array.isArray(t), s = i ? [t] : t;
  if (!s.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const l = e.length < 2;
  return ps(n, (o, r) => {
    let a = !1;
    const u = [];
    let f = 0, c = Ce;
    const d = () => {
      if (f)
        return;
      c();
      const p = e(i ? u[0] : u, o, r);
      l ? o(p) : c = pe(p) ? p : Ce;
    }, m = s.map(
      (p, g) => nn(
        p,
        (b) => {
          u[g] = b, f &= ~(1 << g), a && d();
        },
        () => {
          f |= 1 << g;
        }
      )
    );
    return a = !0, d(), function() {
      Ee(m), c(), a = !1;
    };
  });
}
function Mr(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, [l]) {
      i && i.p && (!e || l & /*$$scope*/
      8) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? se(
          n,
          /*$$scope*/
          s[3],
          l,
          null
        ) : re(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Fr(t, e, n) {
  let i, { $$slots: s = {}, $$scope: l } = e, { key: o } = e, { value: r } = e;
  const a = Ke(r);
  return $e(t, a, (u) => n(5, i = u)), Ue(o, a), Nt(() => {
    a.set(void 0);
  }), t.$$set = (u) => {
    "key" in u && n(1, o = u.key), "value" in u && n(2, r = u.value), "$$scope" in u && n(3, l = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    4 && Xt(a, i = r, i);
  }, [a, o, r, l, s];
}
class Bt extends he {
  constructor(e) {
    super(), de(this, e, Fr, Mr, oe, { key: 1, value: 2 });
  }
  get key() {
    return this.$$.ctx[1];
  }
  set key(e) {
    this.$$set({ key: e }), y();
  }
  get value() {
    return this.$$.ctx[2];
  }
  set value(e) {
    this.$$set({ value: e }), y();
  }
}
me(Bt, { key: {}, value: {} }, ["default"], [], !0);
function Zn(t) {
  let e;
  return {
    c() {
      e = j("div"), U(e, "class", "mdc-icon-button__touch");
    },
    m(n, i) {
      D(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Nr(t) {
  let e, n, i, s;
  const l = (
    /*#slots*/
    t[33].default
  ), o = ie(
    l,
    t,
    /*$$scope*/
    t[37],
    null
  );
  let r = (
    /*touch*/
    t[8] && Zn()
  );
  return {
    c() {
      e = j("div"), n = Q(), o && o.c(), r && r.c(), i = we(), U(e, "class", "mdc-icon-button__ripple");
    },
    m(a, u) {
      D(a, e, u), D(a, n, u), o && o.m(a, u), r && r.m(a, u), D(a, i, u), s = !0;
    },
    p(a, u) {
      o && o.p && (!s || u[1] & /*$$scope*/
      64) && le(
        o,
        l,
        a,
        /*$$scope*/
        a[37],
        s ? se(
          l,
          /*$$scope*/
          a[37],
          u,
          null
        ) : re(
          /*$$scope*/
          a[37]
        ),
        null
      ), /*touch*/
      a[8] ? r || (r = Zn(), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    i(a) {
      s || (E(o, a), s = !0);
    },
    o(a) {
      C(o, a), s = !1;
    },
    d(a) {
      a && (R(e), R(n), R(i)), o && o.d(a), r && r.d(a);
    }
  };
}
function Hr(t) {
  let e, n, i;
  const s = [
    { tag: (
      /*tag*/
      t[14]
    ) },
    {
      use: [
        [
          tt,
          {
            ripple: (
              /*ripple*/
              t[4]
            ),
            unbounded: !0,
            color: (
              /*color*/
              t[5]
            ),
            disabled: !!/*$$restProps*/
            t[29].disabled,
            addClass: (
              /*addClass*/
              t[26]
            ),
            removeClass: (
              /*removeClass*/
              t[27]
            ),
            addStyle: (
              /*addStyle*/
              t[28]
            )
          }
        ],
        /*forwardEvents*/
        t[22],
        .../*use*/
        t[1]
      ]
    },
    {
      class: W({
        [
          /*className*/
          t[2]
        ]: !0,
        "mdc-icon-button": !0,
        "mdc-icon-button--on": !/*isUninitializedValue*/
        t[23](
          /*pressed*/
          t[0]
        ) && /*pressed*/
        t[0],
        "mdc-icon-button--touch": (
          /*touch*/
          t[8]
        ),
        "mdc-icon-button--display-flex": (
          /*displayFlex*/
          t[9]
        ),
        "smui-icon-button--size-button": (
          /*size*/
          t[10] === "button"
        ),
        "smui-icon-button--size-mini": (
          /*size*/
          t[10] === "mini"
        ),
        "mdc-icon-button--reduced-size": (
          /*size*/
          t[10] === "mini" || /*size*/
          t[10] === "button"
        ),
        "mdc-card__action": (
          /*context*/
          t[24] === "card:action"
        ),
        "mdc-card__action--icon": (
          /*context*/
          t[24] === "card:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          t[24] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          t[24] === "top-app-bar:action"
        ),
        "mdc-snackbar__dismiss": (
          /*context*/
          t[24] === "snackbar:actions"
        ),
        "mdc-data-table__pagination-button": (
          /*context*/
          t[24] === "data-table:pagination"
        ),
        "mdc-data-table__sort-icon-button": (
          /*context*/
          t[24] === "data-table:sortable-header-cell"
        ),
        "mdc-dialog__close": (
          /*context*/
          (t[24] === "dialog:header" || /*context*/
          t[24] === "dialog:sheet") && /*action*/
          t[12] === "close"
        ),
        .../*internalClasses*/
        t[18]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        t[19]
      ).map(hn).concat([
        /*style*/
        t[3]
      ]).join(" ")
    },
    {
      "aria-pressed": /*isUninitializedValue*/ t[23](
        /*pressed*/
        t[0]
      ) ? null : (
        /*pressed*/
        t[0] ? "true" : "false"
      )
    },
    {
      "aria-label": (
        /*pressed*/
        t[0] ? (
          /*ariaLabelOn*/
          t[6]
        ) : (
          /*ariaLabelOff*/
          t[7]
        )
      )
    },
    {
      "data-aria-label-on": (
        /*ariaLabelOn*/
        t[6]
      )
    },
    {
      "data-aria-label-off": (
        /*ariaLabelOff*/
        t[7]
      )
    },
    {
      "aria-describedby": (
        /*ariaDescribedby*/
        t[25]
      )
    },
    { href: (
      /*href*/
      t[11]
    ) },
    /*actionProp*/
    t[21],
    /*internalAttrs*/
    t[20],
    /*$$restProps*/
    t[29]
  ];
  var l = (
    /*component*/
    t[13]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [Nr] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < s.length; f += 1)
      u = M(u, s[f]);
    return a !== void 0 && a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = M(u, te(s, [
      a[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        r[14]
      ) },
      a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            tt,
            {
              ripple: (
                /*ripple*/
                r[4]
              ),
              unbounded: !0,
              color: (
                /*color*/
                r[5]
              ),
              disabled: !!/*$$restProps*/
              r[29].disabled,
              addClass: (
                /*addClass*/
                r[26]
              ),
              removeClass: (
                /*removeClass*/
                r[27]
              ),
              addStyle: (
                /*addStyle*/
                r[28]
              )
            }
          ],
          /*forwardEvents*/
          r[22],
          .../*use*/
          r[1]
        ]
      },
      a[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
      25433861 && {
        class: W({
          [
            /*className*/
            r[2]
          ]: !0,
          "mdc-icon-button": !0,
          "mdc-icon-button--on": !/*isUninitializedValue*/
          r[23](
            /*pressed*/
            r[0]
          ) && /*pressed*/
          r[0],
          "mdc-icon-button--touch": (
            /*touch*/
            r[8]
          ),
          "mdc-icon-button--display-flex": (
            /*displayFlex*/
            r[9]
          ),
          "smui-icon-button--size-button": (
            /*size*/
            r[10] === "button"
          ),
          "smui-icon-button--size-mini": (
            /*size*/
            r[10] === "mini"
          ),
          "mdc-icon-button--reduced-size": (
            /*size*/
            r[10] === "mini" || /*size*/
            r[10] === "button"
          ),
          "mdc-card__action": (
            /*context*/
            r[24] === "card:action"
          ),
          "mdc-card__action--icon": (
            /*context*/
            r[24] === "card:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            r[24] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            r[24] === "top-app-bar:action"
          ),
          "mdc-snackbar__dismiss": (
            /*context*/
            r[24] === "snackbar:actions"
          ),
          "mdc-data-table__pagination-button": (
            /*context*/
            r[24] === "data-table:pagination"
          ),
          "mdc-data-table__sort-icon-button": (
            /*context*/
            r[24] === "data-table:sortable-header-cell"
          ),
          "mdc-dialog__close": (
            /*context*/
            (r[24] === "dialog:header" || /*context*/
            r[24] === "dialog:sheet") && /*action*/
            r[12] === "close"
          ),
          .../*internalClasses*/
          r[18]
        })
      },
      a[0] & /*internalStyles, style*/
      524296 && {
        style: Object.entries(
          /*internalStyles*/
          r[19]
        ).map(hn).concat([
          /*style*/
          r[3]
        ]).join(" ")
      },
      a[0] & /*isUninitializedValue, pressed*/
      8388609 && {
        "aria-pressed": /*isUninitializedValue*/ r[23](
          /*pressed*/
          r[0]
        ) ? null : (
          /*pressed*/
          r[0] ? "true" : "false"
        )
      },
      a[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
      193 && {
        "aria-label": (
          /*pressed*/
          r[0] ? (
            /*ariaLabelOn*/
            r[6]
          ) : (
            /*ariaLabelOff*/
            r[7]
          )
        )
      },
      a[0] & /*ariaLabelOn*/
      64 && {
        "data-aria-label-on": (
          /*ariaLabelOn*/
          r[6]
        )
      },
      a[0] & /*ariaLabelOff*/
      128 && {
        "data-aria-label-off": (
          /*ariaLabelOff*/
          r[7]
        )
      },
      a[0] & /*ariaDescribedby*/
      33554432 && {
        "aria-describedby": (
          /*ariaDescribedby*/
          r[25]
        )
      },
      a[0] & /*href*/
      2048 && { href: (
        /*href*/
        r[11]
      ) },
      a[0] & /*actionProp*/
      2097152 && ue(
        /*actionProp*/
        r[21]
      ),
      a[0] & /*internalAttrs*/
      1048576 && ue(
        /*internalAttrs*/
        r[20]
      ),
      a[0] & /*$$restProps*/
      536870912 && ue(
        /*$$restProps*/
        r[29]
      )
    ]))), { props: u };
  }
  return l && (e = je(l, o(t)), t[34](e), e.$on(
    "click",
    /*click_handler*/
    t[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    t[36]
  )), {
    c() {
      e && G(e.$$.fragment), n = we();
    },
    m(r, a) {
      e && z(e, r, a), D(r, n, a), i = !0;
    },
    p(r, a) {
      if (a[0] & /*component*/
      8192 && l !== (l = /*component*/
      r[13])) {
        if (e) {
          ce();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            V(u, 1);
          }), fe();
        }
        l ? (e = je(l, o(r, a)), r[34](e), e.$on(
          "click",
          /*click_handler*/
          r[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          r[36]
        ), G(e.$$.fragment), E(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (l) {
        const u = a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? te(s, [
          a[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            r[14]
          ) },
          a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                tt,
                {
                  ripple: (
                    /*ripple*/
                    r[4]
                  ),
                  unbounded: !0,
                  color: (
                    /*color*/
                    r[5]
                  ),
                  disabled: !!/*$$restProps*/
                  r[29].disabled,
                  addClass: (
                    /*addClass*/
                    r[26]
                  ),
                  removeClass: (
                    /*removeClass*/
                    r[27]
                  ),
                  addStyle: (
                    /*addStyle*/
                    r[28]
                  )
                }
              ],
              /*forwardEvents*/
              r[22],
              .../*use*/
              r[1]
            ]
          },
          a[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
          25433861 && {
            class: W({
              [
                /*className*/
                r[2]
              ]: !0,
              "mdc-icon-button": !0,
              "mdc-icon-button--on": !/*isUninitializedValue*/
              r[23](
                /*pressed*/
                r[0]
              ) && /*pressed*/
              r[0],
              "mdc-icon-button--touch": (
                /*touch*/
                r[8]
              ),
              "mdc-icon-button--display-flex": (
                /*displayFlex*/
                r[9]
              ),
              "smui-icon-button--size-button": (
                /*size*/
                r[10] === "button"
              ),
              "smui-icon-button--size-mini": (
                /*size*/
                r[10] === "mini"
              ),
              "mdc-icon-button--reduced-size": (
                /*size*/
                r[10] === "mini" || /*size*/
                r[10] === "button"
              ),
              "mdc-card__action": (
                /*context*/
                r[24] === "card:action"
              ),
              "mdc-card__action--icon": (
                /*context*/
                r[24] === "card:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                r[24] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                r[24] === "top-app-bar:action"
              ),
              "mdc-snackbar__dismiss": (
                /*context*/
                r[24] === "snackbar:actions"
              ),
              "mdc-data-table__pagination-button": (
                /*context*/
                r[24] === "data-table:pagination"
              ),
              "mdc-data-table__sort-icon-button": (
                /*context*/
                r[24] === "data-table:sortable-header-cell"
              ),
              "mdc-dialog__close": (
                /*context*/
                (r[24] === "dialog:header" || /*context*/
                r[24] === "dialog:sheet") && /*action*/
                r[12] === "close"
              ),
              .../*internalClasses*/
              r[18]
            })
          },
          a[0] & /*internalStyles, style*/
          524296 && {
            style: Object.entries(
              /*internalStyles*/
              r[19]
            ).map(hn).concat([
              /*style*/
              r[3]
            ]).join(" ")
          },
          a[0] & /*isUninitializedValue, pressed*/
          8388609 && {
            "aria-pressed": /*isUninitializedValue*/ r[23](
              /*pressed*/
              r[0]
            ) ? null : (
              /*pressed*/
              r[0] ? "true" : "false"
            )
          },
          a[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
          193 && {
            "aria-label": (
              /*pressed*/
              r[0] ? (
                /*ariaLabelOn*/
                r[6]
              ) : (
                /*ariaLabelOff*/
                r[7]
              )
            )
          },
          a[0] & /*ariaLabelOn*/
          64 && {
            "data-aria-label-on": (
              /*ariaLabelOn*/
              r[6]
            )
          },
          a[0] & /*ariaLabelOff*/
          128 && {
            "data-aria-label-off": (
              /*ariaLabelOff*/
              r[7]
            )
          },
          a[0] & /*ariaDescribedby*/
          33554432 && {
            "aria-describedby": (
              /*ariaDescribedby*/
              r[25]
            )
          },
          a[0] & /*href*/
          2048 && { href: (
            /*href*/
            r[11]
          ) },
          a[0] & /*actionProp*/
          2097152 && ue(
            /*actionProp*/
            r[21]
          ),
          a[0] & /*internalAttrs*/
          1048576 && ue(
            /*internalAttrs*/
            r[20]
          ),
          a[0] & /*$$restProps*/
          536870912 && ue(
            /*$$restProps*/
            r[29]
          )
        ]) : {};
        a[0] & /*touch*/
        256 | a[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && E(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[34](null), e && V(e, r);
    }
  };
}
const hn = ([t, e]) => `${t}: ${e};`;
function Ur(t, e, n) {
  let i;
  const s = [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "tag",
    "getElement"
  ];
  let l = Y(e, s), { $$slots: o = {}, $$scope: r } = e;
  const a = Ie(ye());
  let u = () => {
  };
  function f(q) {
    return q === u;
  }
  let { use: c = [] } = e, { class: d = "" } = e, { style: m = "" } = e, { ripple: p = !0 } = e, { color: g = void 0 } = e, { toggle: b = !1 } = e, { pressed: _ = u } = e, { ariaLabelOn: v = void 0 } = e, { ariaLabelOff: L = void 0 } = e, { touch: A = !1 } = e, { displayFlex: I = !0 } = e, { size: T = "normal" } = e, { href: h = void 0 } = e, { action: k = void 0 } = e, X, Z, P = {}, $ = {}, O = {}, H = Xe("SMUI:icon-button:context"), ve = Xe("SMUI:icon-button:aria-describedby"), { component: be = Ve } = e, { tag: _e = be === Ve ? h == null ? "button" : "a" : void 0 } = e, F = l.disabled;
  Ue("SMUI:icon:context", "icon-button");
  let w = null;
  Nt(() => {
    Z && Z.destroy();
  });
  function K(q) {
    return q in P ? P[q] : Ge().classList.contains(q);
  }
  function Le(q) {
    P[q] || n(18, P[q] = !0, P);
  }
  function ke(q) {
    (!(q in P) || P[q]) && n(18, P[q] = !1, P);
  }
  function Fe(q, Ze) {
    $[q] != Ze && (Ze === "" || Ze == null ? (delete $[q], n(19, $)) : n(19, $[q] = Ze, $));
  }
  function B(q) {
    var Ze;
    return q in O ? (Ze = O[q]) !== null && Ze !== void 0 ? Ze : null : Ge().getAttribute(q);
  }
  function ae(q, Ze) {
    O[q] !== Ze && n(20, O[q] = Ze, O);
  }
  function ze(q) {
    n(0, _ = q.isOn);
  }
  function Ge() {
    return X.getElement();
  }
  function St(q) {
    ee[q ? "unshift" : "push"](() => {
      X = q, n(16, X);
    });
  }
  const ft = () => Z && Z.handleClick(), Ut = () => H === "top-app-bar:navigation" && Te(Ge(), "SMUITopAppBarIconButton:nav");
  return t.$$set = (q) => {
    e = M(M({}, e), Ae(q)), n(29, l = Y(e, s)), "use" in q && n(1, c = q.use), "class" in q && n(2, d = q.class), "style" in q && n(3, m = q.style), "ripple" in q && n(4, p = q.ripple), "color" in q && n(5, g = q.color), "toggle" in q && n(30, b = q.toggle), "pressed" in q && n(0, _ = q.pressed), "ariaLabelOn" in q && n(6, v = q.ariaLabelOn), "ariaLabelOff" in q && n(7, L = q.ariaLabelOff), "touch" in q && n(8, A = q.touch), "displayFlex" in q && n(9, I = q.displayFlex), "size" in q && n(10, T = q.size), "href" in q && n(11, h = q.href), "action" in q && n(12, k = q.action), "component" in q && n(13, be = q.component), "tag" in q && n(14, _e = q.tag), "$$scope" in q && n(37, r = q.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*action*/
    4096 && n(21, i = (() => {
      if (H === "data-table:pagination")
        switch (k) {
          case "first-page":
            return { "data-first-page": "true" };
          case "prev-page":
            return { "data-prev-page": "true" };
          case "next-page":
            return { "data-next-page": "true" };
          case "last-page":
            return { "data-last-page": "true" };
          default:
            return { "data-action": "true" };
        }
      else return H === "dialog:header" || H === "dialog:sheet" ? { "data-mdc-dialog-action": k } : { action: k };
    })()), F !== l.disabled) {
      if (X) {
        const q = Ge();
        "blur" in q && q.blur();
      }
      n(31, F = l.disabled);
    }
    t.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | t.$$.dirty[1] & /*oldToggle*/
    2 && X && Ge() && b !== w && (b && !Z ? (n(17, Z = new ur({
      addClass: Le,
      hasClass: K,
      notifyChange: (q) => {
        ze(q), Te(Ge(), "SMUIIconButtonToggle:change", q, void 0, !0);
      },
      removeClass: ke,
      getAttr: B,
      setAttr: ae
    })), Z.init()) : !b && Z && (Z.destroy(), n(17, Z = void 0), n(18, P = {}), n(20, O = {})), n(32, w = b)), t.$$.dirty[0] & /*instance, pressed*/
    131073 && Z && !f(_) && Z.isOn() !== _ && Z.toggle(_);
  }, [
    _,
    c,
    d,
    m,
    p,
    g,
    v,
    L,
    A,
    I,
    T,
    h,
    k,
    be,
    _e,
    Ge,
    X,
    Z,
    P,
    $,
    O,
    i,
    a,
    f,
    H,
    ve,
    Le,
    ke,
    Fe,
    l,
    b,
    F,
    w,
    o,
    St,
    ft,
    Ut,
    r
  ];
}
class gs extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      Ur,
      Hr,
      oe,
      {
        use: 1,
        class: 2,
        style: 3,
        ripple: 4,
        color: 5,
        toggle: 30,
        pressed: 0,
        ariaLabelOn: 6,
        ariaLabelOff: 7,
        touch: 8,
        displayFlex: 9,
        size: 10,
        href: 11,
        action: 12,
        component: 13,
        tag: 14,
        getElement: 15
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[1];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get ripple() {
    return this.$$.ctx[4];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), y();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get toggle() {
    return this.$$.ctx[30];
  }
  set toggle(e) {
    this.$$set({ toggle: e }), y();
  }
  get pressed() {
    return this.$$.ctx[0];
  }
  set pressed(e) {
    this.$$set({ pressed: e }), y();
  }
  get ariaLabelOn() {
    return this.$$.ctx[6];
  }
  set ariaLabelOn(e) {
    this.$$set({ ariaLabelOn: e }), y();
  }
  get ariaLabelOff() {
    return this.$$.ctx[7];
  }
  set ariaLabelOff(e) {
    this.$$set({ ariaLabelOff: e }), y();
  }
  get touch() {
    return this.$$.ctx[8];
  }
  set touch(e) {
    this.$$set({ touch: e }), y();
  }
  get displayFlex() {
    return this.$$.ctx[9];
  }
  set displayFlex(e) {
    this.$$set({ displayFlex: e }), y();
  }
  get size() {
    return this.$$.ctx[10];
  }
  set size(e) {
    this.$$set({ size: e }), y();
  }
  get href() {
    return this.$$.ctx[11];
  }
  set href(e) {
    this.$$set({ href: e }), y();
  }
  get action() {
    return this.$$.ctx[12];
  }
  set action(e) {
    this.$$set({ action: e }), y();
  }
  get component() {
    return this.$$.ctx[13];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[14];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[15];
  }
}
me(gs, { use: {}, class: {}, style: {}, ripple: { type: "Boolean" }, color: {}, toggle: { type: "Boolean" }, pressed: {}, ariaLabelOn: {}, ariaLabelOff: {}, touch: { type: "Boolean" }, displayFlex: { type: "Boolean" }, size: {}, href: {}, action: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function bs(t) {
  return Object.entries(t).map(([e, n]) => `--${e}:${n}`).join(";");
}
function jr(t) {
  ot(t, "svelte-4hwpwb", "svg.custom-icon-button-wrapper{padding:.25rem}.mdc-icon-button.smui-icon-button--size-button, .mdc-icon-button.smui-icon-button--size-button svg{width:var(--button-size)!important;height:var(--button-size)!important}");
}
function qr(t) {
  let e, n;
  return e = new Ct({
    props: {
      icon: (
        /*icon*/
        t[0]
      ),
      fillColor: (
        /*color*/
        t[1]
      ),
      class: "custom-icon-button-wrapper"
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*icon*/
      1 && (l.icon = /*icon*/
      i[0]), s & /*color*/
      2 && (l.fillColor = /*color*/
      i[1]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function zr(t) {
  let e, n;
  return e = new gs({
    props: {
      size: "button",
      style: (
        /*cssDynamicStyles*/
        t[3]
      ),
      class: (
        /*className*/
        t[2]
      ),
      $$slots: { default: [qr] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, [s]) {
      const l = {};
      s & /*cssDynamicStyles*/
      8 && (l.style = /*cssDynamicStyles*/
      i[3]), s & /*className*/
      4 && (l.class = /*className*/
      i[2]), s & /*$$scope, icon, color*/
      131 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Vr(t) {
  return t === "small" ? "42px" : t === "large" ? "56px" : "48px";
}
function Gr(t, e, n) {
  let i, { icon: s } = e, { size: l = "medium" } = e, { color: o = "primary" } = e, { class: r = "" } = e;
  const a = { "button-size": "" };
  function u(f) {
    Dt.call(this, t, f);
  }
  return t.$$set = (f) => {
    "icon" in f && n(0, s = f.icon), "size" in f && n(4, l = f.size), "color" in f && n(1, o = f.color), "class" in f && n(2, r = f.class);
  }, t.$$.update = () => {
    t.$$.dirty & /*size*/
    16 && n(5, a["button-size"] = Vr(l), a), t.$$.dirty & /*cssFixedStyles*/
    32 && n(3, i = bs(a));
  }, [s, o, r, i, l, a, u];
}
class Mt extends he {
  constructor(e) {
    super(), de(this, e, Gr, zr, oe, { icon: 0, size: 4, color: 1, class: 2 }, jr);
  }
  get icon() {
    return this.$$.ctx[0];
  }
  set icon(e) {
    this.$$set({ icon: e }), y();
  }
  get size() {
    return this.$$.ctx[4];
  }
  set size(e) {
    this.$$set({ size: e }), y();
  }
  get color() {
    return this.$$.ctx[1];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
}
me(Mt, { icon: {}, size: {}, color: {}, class: {} }, [], [], !0);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var We = {
  ANIMATE: "mdc-drawer--animate",
  CLOSING: "mdc-drawer--closing",
  DISMISSIBLE: "mdc-drawer--dismissible",
  MODAL: "mdc-drawer--modal",
  OPEN: "mdc-drawer--open",
  OPENING: "mdc-drawer--opening",
  ROOT: "mdc-drawer"
}, Zr = {
  APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
  CLOSE_EVENT: "MDCDrawer:closed",
  OPEN_EVENT: "MDCDrawer:opened",
  SCRIM_SELECTOR: ".mdc-drawer-scrim",
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  LIST_ITEM_ACTIVATED_SELECTOR: ".mdc-list-item--activated,.mdc-deprecated-list-item--activated"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _s = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var i = t.call(this, Pe(Pe({}, e.defaultAdapter), n)) || this;
      return i.animationFrame = 0, i.animationTimer = 0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Zr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return We;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          elementHasClass: function() {
            return !1;
          },
          notifyClose: function() {
          },
          notifyOpen: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          focusActiveNavigationItem: function() {
          },
          trapFocus: function() {
          },
          releaseFocus: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.animationFrame && cancelAnimationFrame(this.animationFrame), this.animationTimer && clearTimeout(this.animationTimer);
    }, e.prototype.open = function() {
      var n = this;
      this.isOpen() || this.isOpening() || this.isClosing() || (this.adapter.addClass(We.OPEN), this.adapter.addClass(We.ANIMATE), this.runNextAnimationFrame(function() {
        n.adapter.addClass(We.OPENING);
      }), this.adapter.saveFocus());
    }, e.prototype.close = function() {
      !this.isOpen() || this.isOpening() || this.isClosing() || this.adapter.addClass(We.CLOSING);
    }, e.prototype.isOpen = function() {
      return this.adapter.hasClass(We.OPEN);
    }, e.prototype.isOpening = function() {
      return this.adapter.hasClass(We.OPENING) || this.adapter.hasClass(We.ANIMATE);
    }, e.prototype.isClosing = function() {
      return this.adapter.hasClass(We.CLOSING);
    }, e.prototype.handleKeydown = function(n) {
      var i = n.keyCode, s = n.key, l = s === "Escape" || i === 27;
      l && this.close();
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = We.OPENING, s = We.CLOSING, l = We.OPEN, o = We.ANIMATE, r = We.ROOT, a = this.isElement(n.target) && this.adapter.elementHasClass(n.target, r);
      a && (this.isClosing() ? (this.adapter.removeClass(l), this.closed(), this.adapter.restoreFocus(), this.adapter.notifyClose()) : (this.adapter.focusActiveNavigationItem(), this.opened(), this.adapter.notifyOpen()), this.adapter.removeClass(o), this.adapter.removeClass(i), this.adapter.removeClass(s));
    }, e.prototype.opened = function() {
    }, e.prototype.closed = function() {
    }, e.prototype.runNextAnimationFrame = function(n) {
      var i = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        i.animationFrame = 0, clearTimeout(i.animationTimer), i.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.isElement = function(n) {
      return !!n.classList;
    }, e;
  }(st)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Wr = (
  /** @class */
  function(t) {
    qe(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.handleScrimClick = function() {
      this.close();
    }, e.prototype.opened = function() {
      this.adapter.trapFocus();
    }, e.prototype.closed = function() {
      this.adapter.releaseFocus();
    }, e;
  }(_s)
);
function Xr(t) {
  let e, n, i, s, l, o;
  const r = (
    /*#slots*/
    t[15].default
  ), a = ie(
    r,
    t,
    /*$$scope*/
    t[14],
    null
  );
  let u = [
    {
      class: n = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-drawer": !0,
        "mdc-drawer--dismissible": (
          /*variant*/
          t[2] === "dismissible"
        ),
        "mdc-drawer--modal": (
          /*variant*/
          t[2] === "modal"
        ),
        "smui-drawer__absolute": (
          /*variant*/
          t[2] === "modal" && !/*fixed*/
          t[3]
        ),
        .../*internalClasses*/
        t[6]
      })
    },
    /*$$restProps*/
    t[8]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = M(f, u[c]);
  return {
    c() {
      e = j("aside"), a && a.c(), ne(e, f);
    },
    m(c, d) {
      D(c, e, d), a && a.m(e, null), t[16](e), s = !0, l || (o = [
        x(i = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        ge(e, "keydown", function() {
          pe(
            /*instance*/
            t[4] && /*instance*/
            t[4].handleKeydown.bind(
              /*instance*/
              t[4]
            )
          ) && /*instance*/
          (t[4] && /*instance*/
          t[4].handleKeydown.bind(
            /*instance*/
            t[4]
          )).apply(this, arguments);
        }),
        ge(e, "transitionend", function() {
          pe(
            /*instance*/
            t[4] && /*instance*/
            t[4].handleTransitionEnd.bind(
              /*instance*/
              t[4]
            )
          ) && /*instance*/
          (t[4] && /*instance*/
          t[4].handleTransitionEnd.bind(
            /*instance*/
            t[4]
          )).apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, [d]) {
      t = c, a && a.p && (!s || d & /*$$scope*/
      16384) && le(
        a,
        r,
        t,
        /*$$scope*/
        t[14],
        s ? se(
          r,
          /*$$scope*/
          t[14],
          d,
          null
        ) : re(
          /*$$scope*/
          t[14]
        ),
        null
      ), ne(e, f = te(u, [
        (!s || d & /*className, variant, fixed, internalClasses*/
        78 && n !== (n = W({
          [
            /*className*/
            t[1]
          ]: !0,
          "mdc-drawer": !0,
          "mdc-drawer--dismissible": (
            /*variant*/
            t[2] === "dismissible"
          ),
          "mdc-drawer--modal": (
            /*variant*/
            t[2] === "modal"
          ),
          "smui-drawer__absolute": (
            /*variant*/
            t[2] === "modal" && !/*fixed*/
            t[3]
          ),
          .../*internalClasses*/
          t[6]
        }))) && { class: n },
        d & /*$$restProps*/
        256 && /*$$restProps*/
        t[8]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        t[0]
      );
    },
    i(c) {
      s || (E(a, c), s = !0);
    },
    o(c) {
      C(a, c), s = !1;
    },
    d(c) {
      c && R(e), a && a.d(c), t[16](null), l = !1, Ee(o);
    }
  };
}
function Kr(t, e, n) {
  const i = ["use", "class", "variant", "open", "fixed", "setOpen", "isOpen", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const { FocusTrap: r } = br, a = Ie(ye());
  let { use: u = [] } = e, { class: f = "" } = e, { variant: c = void 0 } = e, { open: d = !1 } = e, { fixed: m = !0 } = e, p, g, b = {}, _ = null, v, L = !1;
  Ue("SMUI:list:nav", !0), Ue("SMUI:list:item:nav", !0), Ue("SMUI:list:wrapFocus", !0);
  let A = c;
  nt(() => {
    v = new r(
      p,
      {
        // Component handles focusing on active nav item.
        skipInitialFocus: !0
      }
    ), n(4, g = I()), g && g.init();
  }), Nt(() => {
    g && g.destroy(), L && L.removeEventListener("SMUIDrawerScrim:click", X);
  });
  function I() {
    var H, ve;
    L && L.removeEventListener("SMUIDrawerScrim:click", X), c === "modal" && (L = (ve = (H = p.parentNode) === null || H === void 0 ? void 0 : H.querySelector(".mdc-drawer-scrim")) !== null && ve !== void 0 ? ve : !1, L && L.addEventListener("SMUIDrawerScrim:click", X));
    const be = c === "dismissible" ? _s : c === "modal" ? Wr : void 0;
    return be ? new be({
      addClass: h,
      removeClass: k,
      hasClass: T,
      elementHasClass: (_e, F) => _e.classList.contains(F),
      saveFocus: () => _ = document.activeElement,
      restoreFocus: () => {
        _ && "focus" in _ && p.contains(document.activeElement) && _.focus();
      },
      focusActiveNavigationItem: () => {
        const _e = p.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");
        _e && _e.focus();
      },
      notifyClose: () => {
        n(9, d = !1), Te(p, "SMUIDrawer:closed", void 0, void 0, !0);
      },
      notifyOpen: () => {
        n(9, d = !0), Te(p, "SMUIDrawer:opened", void 0, void 0, !0);
      },
      trapFocus: () => v.trapFocus(),
      releaseFocus: () => v.releaseFocus()
    }) : void 0;
  }
  function T(H) {
    return H in b ? b[H] : $().classList.contains(H);
  }
  function h(H) {
    b[H] || n(6, b[H] = !0, b);
  }
  function k(H) {
    (!(H in b) || b[H]) && n(6, b[H] = !1, b);
  }
  function X() {
    g && "handleScrimClick" in g && g.handleScrimClick();
  }
  function Z(H) {
    n(9, d = H);
  }
  function P() {
    return d;
  }
  function $() {
    return p;
  }
  function O(H) {
    ee[H ? "unshift" : "push"](() => {
      p = H, n(5, p);
    });
  }
  return t.$$set = (H) => {
    e = M(M({}, e), Ae(H)), n(8, s = Y(e, i)), "use" in H && n(0, u = H.use), "class" in H && n(1, f = H.class), "variant" in H && n(2, c = H.variant), "open" in H && n(9, d = H.open), "fixed" in H && n(3, m = H.fixed), "$$scope" in H && n(14, o = H.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldVariant, variant, instance*/
    8212 && A !== c && (n(13, A = c), g && g.destroy(), n(6, b = {}), n(4, g = I()), g && g.init()), t.$$.dirty & /*instance, open*/
    528 && g && g.isOpen() !== d && (d ? g.open() : g.close());
  }, [
    u,
    f,
    c,
    m,
    g,
    p,
    b,
    a,
    s,
    d,
    Z,
    P,
    $,
    A,
    o,
    l,
    O
  ];
}
class vs extends he {
  constructor(e) {
    super(), de(this, e, Kr, Xr, oe, {
      use: 0,
      class: 1,
      variant: 2,
      open: 9,
      fixed: 3,
      setOpen: 10,
      isOpen: 11,
      getElement: 12
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get variant() {
    return this.$$.ctx[2];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get open() {
    return this.$$.ctx[9];
  }
  set open(e) {
    this.$$set({ open: e }), y();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), y();
  }
  get setOpen() {
    return this.$$.ctx[10];
  }
  get isOpen() {
    return this.$$.ctx[11];
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
me(vs, { use: {}, class: {}, variant: {}, open: { type: "Boolean" }, fixed: { type: "Boolean" } }, ["default"], ["setOpen", "isOpen", "getElement"], !0);
function Jr(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l & /*$$scope*/
      8192) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[13],
        e ? se(
          n,
          /*$$scope*/
          s[13],
          l,
          null
        ) : re(
          /*$$scope*/
          s[13]
        ),
        null
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Yr(t) {
  let e, n, i;
  const s = [
    { tag: (
      /*tag*/
      t[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[8],
        .../*use*/
        t[0]
      ]
    },
    {
      class: W({
        [
          /*className*/
          t[1]
        ]: !0,
        [
          /*smuiClass*/
          t[6]
        ]: !0,
        .../*smuiClassMap*/
        t[5]
      })
    },
    /*props*/
    t[7],
    /*$$restProps*/
    t[9]
  ];
  var l = (
    /*component*/
    t[2]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [Jr] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < s.length; f += 1)
      u = M(u, s[f]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = M(u, te(s, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        r[3]
      ) },
      a & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          r[8],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: W({
          [
            /*className*/
            r[1]
          ]: !0,
          [
            /*smuiClass*/
            r[6]
          ]: !0,
          .../*smuiClassMap*/
          r[5]
        })
      },
      a & /*props*/
      128 && ue(
        /*props*/
        r[7]
      ),
      a & /*$$restProps*/
      512 && ue(
        /*$$restProps*/
        r[9]
      )
    ]))), { props: u };
  }
  return l && (e = je(l, o(t)), t[12](e)), {
    c() {
      e && G(e.$$.fragment), n = we();
    },
    m(r, a) {
      e && z(e, r, a), D(r, n, a), i = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      4 && l !== (l = /*component*/
      r[2])) {
        if (e) {
          ce();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            V(u, 1);
          }), fe();
        }
        l ? (e = je(l, o(r, a)), r[12](e), G(e.$$.fragment), E(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (l) {
        const u = a & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? te(s, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          a & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              r[8],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: W({
              [
                /*className*/
                r[1]
              ]: !0,
              [
                /*smuiClass*/
                r[6]
              ]: !0,
              .../*smuiClassMap*/
              r[5]
            })
          },
          a & /*props*/
          128 && ue(
            /*props*/
            r[7]
          ),
          a & /*$$restProps*/
          512 && ue(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        a & /*$$scope*/
        8192 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && E(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[12](null), e && V(e, r);
    }
  };
}
const rt = {
  component: Ve,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function $r(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e, { use: r = [] } = e, { class: a = "" } = e, u;
  const f = rt.class, c = {}, d = [], m = rt.contexts, p = rt.props;
  let { component: g = rt.component } = e, { tag: b = g === Ve ? rt.tag : void 0 } = e;
  Object.entries(rt.classMap).forEach(([A, I]) => {
    const T = Xe(I);
    T && "subscribe" in T && d.push(T.subscribe((h) => {
      n(5, c[A] = h, c);
    }));
  });
  const _ = Ie(ye());
  for (let A in m)
    m.hasOwnProperty(A) && Ue(A, m[A]);
  Nt(() => {
    for (const A of d)
      A();
  });
  function v() {
    return u.getElement();
  }
  function L(A) {
    ee[A ? "unshift" : "push"](() => {
      u = A, n(4, u);
    });
  }
  return t.$$set = (A) => {
    e = M(M({}, e), Ae(A)), n(9, s = Y(e, i)), "use" in A && n(0, r = A.use), "class" in A && n(1, a = A.class), "component" in A && n(2, g = A.component), "tag" in A && n(3, b = A.tag), "$$scope" in A && n(13, o = A.$$scope);
  }, [
    r,
    a,
    g,
    b,
    u,
    c,
    f,
    p,
    _,
    s,
    v,
    l,
    L,
    o
  ];
}
class ys extends he {
  constructor(e) {
    super(), de(this, e, $r, Yr, oe, {
      use: 0,
      class: 1,
      component: 2,
      tag: 3,
      getElement: 10
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
me(ys, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
const Wn = Object.assign({}, rt);
function Ne(t) {
  return new Proxy(ys, {
    construct: function(e, n) {
      return Object.assign(rt, Wn, t), new e(...n);
    },
    get: function(e, n) {
      return Object.assign(rt, Wn, t), e[n];
    }
  });
}
const Qr = Ne({
  class: "mdc-drawer-app-content",
  tag: "div"
}), xr = Ne({
  class: "mdc-drawer__content",
  tag: "div"
}), ea = Ne({
  class: "mdc-drawer__header",
  tag: "div"
}), ta = Ne({
  class: "mdc-drawer__title",
  tag: "h1"
}), na = Ne({
  class: "mdc-drawer__subtitle",
  tag: "h2"
});
function ia(t) {
  let e;
  const n = (
    /*#slots*/
    t[10].default
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l & /*$$scope*/
      4096) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[12],
        e ? se(
          n,
          /*$$scope*/
          s[12],
          l,
          null
        ) : re(
          /*$$scope*/
          s[12]
        ),
        null
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function sa(t) {
  let e, n, i;
  const s = [
    { tag: (
      /*tag*/
      t[4]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[6],
        .../*use*/
        t[0]
      ]
    },
    {
      class: W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-drawer-scrim": !0,
        "smui-drawer-scrim__absolute": !/*fixed*/
        t[2]
      })
    },
    /*$$restProps*/
    t[8]
  ];
  var l = (
    /*component*/
    t[3]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [ia] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < s.length; f += 1)
      u = M(u, s[f]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, fixed, $$restProps*/
    343 && (u = M(u, te(s, [
      a & /*tag*/
      16 && { tag: (
        /*tag*/
        r[4]
      ) },
      a & /*forwardEvents, use*/
      65 && {
        use: [
          /*forwardEvents*/
          r[6],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, fixed*/
      6 && {
        class: W({
          [
            /*className*/
            r[1]
          ]: !0,
          "mdc-drawer-scrim": !0,
          "smui-drawer-scrim__absolute": !/*fixed*/
          r[2]
        })
      },
      a & /*$$restProps*/
      256 && ue(
        /*$$restProps*/
        r[8]
      )
    ]))), { props: u };
  }
  return l && (e = je(l, o(t)), t[11](e), e.$on(
    "click",
    /*handleClick*/
    t[7]
  )), {
    c() {
      e && G(e.$$.fragment), n = we();
    },
    m(r, a) {
      e && z(e, r, a), D(r, n, a), i = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      8 && l !== (l = /*component*/
      r[3])) {
        if (e) {
          ce();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            V(u, 1);
          }), fe();
        }
        l ? (e = je(l, o(r, a)), r[11](e), e.$on(
          "click",
          /*handleClick*/
          r[7]
        ), G(e.$$.fragment), E(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (l) {
        const u = a & /*tag, forwardEvents, use, className, fixed, $$restProps*/
        343 ? te(s, [
          a & /*tag*/
          16 && { tag: (
            /*tag*/
            r[4]
          ) },
          a & /*forwardEvents, use*/
          65 && {
            use: [
              /*forwardEvents*/
              r[6],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, fixed*/
          6 && {
            class: W({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-drawer-scrim": !0,
              "smui-drawer-scrim__absolute": !/*fixed*/
              r[2]
            })
          },
          a & /*$$restProps*/
          256 && ue(
            /*$$restProps*/
            r[8]
          )
        ]) : {};
        a & /*$$scope*/
        4096 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && E(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[11](null), e && V(e, r);
    }
  };
}
function la(t, e, n) {
  const i = ["use", "class", "fixed", "component", "tag", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { fixed: f = !0 } = e, c, { component: d = Ve } = e, { tag: m = d === Ve ? "div" : void 0 } = e;
  function p(_) {
    Te(g(), "SMUIDrawerScrim:click", _);
  }
  function g() {
    return c.getElement();
  }
  function b(_) {
    ee[_ ? "unshift" : "push"](() => {
      c = _, n(5, c);
    });
  }
  return t.$$set = (_) => {
    e = M(M({}, e), Ae(_)), n(8, s = Y(e, i)), "use" in _ && n(0, a = _.use), "class" in _ && n(1, u = _.class), "fixed" in _ && n(2, f = _.fixed), "component" in _ && n(3, d = _.component), "tag" in _ && n(4, m = _.tag), "$$scope" in _ && n(12, o = _.$$scope);
  }, [
    a,
    u,
    f,
    d,
    m,
    c,
    r,
    p,
    s,
    g,
    l,
    b,
    o
  ];
}
class ra extends he {
  constructor(e) {
    super(), de(this, e, la, sa, oe, {
      use: 0,
      class: 1,
      fixed: 2,
      component: 3,
      tag: 4,
      getElement: 9
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get fixed() {
    return this.$$.ctx[2];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), y();
  }
  get component() {
    return this.$$.ctx[3];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[4];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
me(ra, { use: {}, class: {}, fixed: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
const Es = {
  isOpen: !1,
  title: "",
  description: "",
  component: void 0,
  componentProps: void 0
}, sn = Ke(Es);
function As({
  title: t,
  description: e,
  component: n,
  componentProps: i
}) {
  sn.update(() => ({
    isOpen: !0,
    title: t,
    description: e || "",
    component: n,
    componentProps: i
  }));
}
function Cs() {
  sn.update(() => Es);
}
function aa({
  title: t,
  description: e,
  component: n,
  componentProps: i
}) {
  Be(sn).isOpen ? Cs() : As({ title: t, description: e, component: n, componentProps: i });
}
const Pt = {
  //state
  drawer: sn,
  //actions
  handleOpenDrawer: As,
  handleCloseDrawer: Cs,
  handleSwitchDrawer: aa
};
function oa(t) {
  ot(t, "svelte-5syy2s", `#custom-drawer.svelte-5syy2s .mdc-drawer--dismissible{left:initial;right:0;border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid
	}#custom-drawer.svelte-5syy2s .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content{margin-right:256px;margin-left:0}#custom-drawer.svelte-5syy2s .mdc-drawer__content{overflow:hidden}#custom-drawer.svelte-5syy2s .mdc-drawer--animate{transform:translateX(100%)
	}#custom-drawer.svelte-5syy2s .mdc-drawer--opening{transform:translateX(0);transition-duration:250ms
	}#custom-drawer.svelte-5syy2s .mdc-drawer--closing{transform:translateX(100%)
	}#custom-drawer.svelte-5syy2s,#custom-drawer.svelte-5syy2s .app-content{height:100%}`);
}
function ua(t) {
  let e = (
    /*$drawer*/
    t[0].title + ""
  ), n;
  return {
    c() {
      n = De(e);
    },
    m(i, s) {
      D(i, n, s);
    },
    p(i, s) {
      s & /*$drawer*/
      1 && e !== (e = /*$drawer*/
      i[0].title + "") && Qe(n, e);
    },
    d(i) {
      i && R(n);
    }
  };
}
function ca(t) {
  let e = (
    /*$drawer*/
    t[0].description + ""
  ), n;
  return {
    c() {
      n = De(e);
    },
    m(i, s) {
      D(i, n, s);
    },
    p(i, s) {
      s & /*$drawer*/
      1 && e !== (e = /*$drawer*/
      i[0].description + "") && Qe(n, e);
    },
    d(i) {
      i && R(n);
    }
  };
}
function fa(t) {
  let e, n, i, s;
  return e = new ta({
    props: {
      $$slots: { default: [ua] },
      $$scope: { ctx: t }
    }
  }), i = new na({
    props: {
      $$slots: { default: [ca] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment), n = Q(), G(i.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), D(l, n, o), z(i, l, o), s = !0;
    },
    p(l, o) {
      const r = {};
      o & /*$$scope, $drawer*/
      33 && (r.$$scope = { dirty: o, ctx: l }), e.$set(r);
      const a = {};
      o & /*$$scope, $drawer*/
      33 && (a.$$scope = { dirty: o, ctx: l }), i.$set(a);
    },
    i(l) {
      s || (E(e.$$.fragment, l), E(i.$$.fragment, l), s = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(i.$$.fragment, l), s = !1;
    },
    d(l) {
      l && R(n), V(e, l), V(i, l);
    }
  };
}
function Xn(t) {
  let e, n, i;
  const s = [
    /*$drawer*/
    t[0].componentProps
  ];
  var l = (
    /*InnerComponent*/
    t[1]
  );
  function o(r, a) {
    let u = {};
    for (let f = 0; f < s.length; f += 1)
      u = M(u, s[f]);
    return a !== void 0 && a & /*$drawer*/
    1 && (u = M(u, te(s, [ue(
      /*$drawer*/
      r[0].componentProps
    )]))), { props: u };
  }
  return l && (e = je(l, o(t))), {
    c() {
      e && G(e.$$.fragment), n = we();
    },
    m(r, a) {
      e && z(e, r, a), D(r, n, a), i = !0;
    },
    p(r, a) {
      if (a & /*InnerComponent*/
      2 && l !== (l = /*InnerComponent*/
      r[1])) {
        if (e) {
          ce();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            V(u, 1);
          }), fe();
        }
        l ? (e = je(l, o(r, a)), G(e.$$.fragment), E(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (l) {
        const u = a & /*$drawer*/
        1 ? te(s, [ue(
          /*$drawer*/
          r[0].componentProps
        )]) : {};
        e.$set(u);
      }
    },
    i(r) {
      i || (e && E(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), e && V(e, r);
    }
  };
}
function da(t) {
  let e, n, i = (
    /*$drawer*/
    t[0].component && Xn(t)
  );
  return {
    c() {
      i && i.c(), e = we();
    },
    m(s, l) {
      i && i.m(s, l), D(s, e, l), n = !0;
    },
    p(s, l) {
      /*$drawer*/
      s[0].component ? i ? (i.p(s, l), l & /*$drawer*/
      1 && E(i, 1)) : (i = Xn(s), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (ce(), C(i, 1, 1, () => {
        i = null;
      }), fe());
    },
    i(s) {
      n || (E(i), n = !0);
    },
    o(s) {
      C(i), n = !1;
    },
    d(s) {
      s && R(e), i && i.d(s);
    }
  };
}
function ma(t) {
  let e, n, i, s;
  return e = new ea({
    props: {
      $$slots: { default: [fa] },
      $$scope: { ctx: t }
    }
  }), i = new xr({
    props: {
      $$slots: { default: [da] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment), n = Q(), G(i.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), D(l, n, o), z(i, l, o), s = !0;
    },
    p(l, o) {
      const r = {};
      o & /*$$scope, $drawer*/
      33 && (r.$$scope = { dirty: o, ctx: l }), e.$set(r);
      const a = {};
      o & /*$$scope, InnerComponent, $drawer*/
      35 && (a.$$scope = { dirty: o, ctx: l }), i.$set(a);
    },
    i(l) {
      s || (E(e.$$.fragment, l), E(i.$$.fragment, l), s = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(i.$$.fragment, l), s = !1;
    },
    d(l) {
      l && R(n), V(e, l), V(i, l);
    }
  };
}
function ha(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l & /*$$scope*/
      32) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? se(
          n,
          /*$$scope*/
          s[5],
          l,
          null
        ) : re(
          /*$$scope*/
          s[5]
        ),
        null
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function pa(t) {
  let e, n, i, s, l, o;
  function r(u) {
    t[4](u);
  }
  let a = {
    variant: "dismissible",
    $$slots: { default: [ma] },
    $$scope: { ctx: t }
  };
  return (
    /*$drawer*/
    t[0].isOpen !== void 0 && (a.open = /*$drawer*/
    t[0].isOpen), n = new vs({ props: a }), ee.push(() => et(n, "open", r)), l = new Qr({
      props: {
        class: "app-content",
        $$slots: { default: [ha] },
        $$scope: { ctx: t }
      }
    }), {
      c() {
        e = j("div"), G(n.$$.fragment), s = Q(), G(l.$$.fragment), U(e, "id", "custom-drawer"), U(e, "class", "svelte-5syy2s");
      },
      m(u, f) {
        D(u, e, f), z(n, e, null), J(e, s), z(l, e, null), o = !0;
      },
      p(u, [f]) {
        const c = {};
        f & /*$$scope, InnerComponent, $drawer*/
        35 && (c.$$scope = { dirty: f, ctx: u }), !i && f & /*$drawer*/
        1 && (i = !0, c.open = /*$drawer*/
        u[0].isOpen, xe(() => i = !1)), n.$set(c);
        const d = {};
        f & /*$$scope*/
        32 && (d.$$scope = { dirty: f, ctx: u }), l.$set(d);
      },
      i(u) {
        o || (E(n.$$.fragment, u), E(l.$$.fragment, u), o = !0);
      },
      o(u) {
        C(n.$$.fragment, u), C(l.$$.fragment, u), o = !1;
      },
      d(u) {
        u && R(e), V(n), V(l);
      }
    }
  );
}
function ga(t, e, n) {
  let i, s, { $$slots: l = {}, $$scope: o } = e;
  const { drawer: r } = Pt;
  $e(t, r, (u) => n(0, s = u));
  function a(u) {
    t.$$.not_equal(s.isOpen, u) && (s.isOpen = u, r.set(s));
  }
  return t.$$set = (u) => {
    "$$scope" in u && n(5, o = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*$drawer*/
    1 && n(1, i = s.component || null);
  }, [s, i, r, l, a, o];
}
class Is extends he {
  constructor(e) {
    super(), de(this, e, ga, pa, oe, {}, oa);
  }
}
me(Is, {}, ["default"], [], !0);
const ba = "/fonts.css", _a = "/theme.css", va = "/bare.css";
var N;
let Af = (N = class {
  constructor(e) {
    this.root = e;
  }
  searchGSEs(e) {
    return this.searchElement(
      N.SelectorGSE,
      ["ldInst", "cbName"],
      e
    );
  }
  searchIEDs(e) {
    return this.searchElement(
      N.SelectorIED,
      N.AttributeListIED,
      e
    );
  }
  searchLNodes(e) {
    return this.searchElement(
      "LNode",
      N.AttributeListLNode,
      e
    );
  }
  searchBays(e) {
    return this.searchElement(
      N.SelectorBay,
      N.AttributeListBay,
      e
    );
  }
  getBaysByIEDName(e) {
    const n = this.determineRoot(), i = `SCL Substation VoltageLevel Bay LNode[iedName='${e}']`, s = Array.from(n.querySelectorAll(i)), l = /* @__PURE__ */ new Set();
    for (const o of s)
      if (o != null) {
        const r = o.closest("Bay"), a = r == null ? void 0 : r.getAttribute("name");
        a != null && l.add(a);
      }
    return l;
  }
  getConnectedAPByIEDName(e) {
    const n = this.determineRoot(), i = `SCL > Communication > SubNetwork > ConnectedAP[iedName='${e}']`;
    return new Set(n.querySelectorAll(i));
  }
  getSubnetworksByIEDName(e) {
    const n = this.getConnectedAPByIEDName(e), i = /* @__PURE__ */ new Set();
    for (const s of n)
      if (s != null) {
        const l = s.closest("SubNetwork");
        l != null && i.add(l);
      }
    return i;
  }
  searchGSEControls(e) {
    return this.searchElement(
      N.SelectorGSEControl,
      ["name", "datSet"],
      e
    );
  }
  searchGSEControlByName(e, n) {
    return this.searchElement(
      `${N.SelectorGSEControl}[name='${e}']`,
      ["name", "datSet"],
      n
    )[0];
  }
  searchInputs(e) {
    return this.searchElement(
      N.SelectorInput,
      [],
      e
    );
  }
  searchExtRef(e) {
    return this.searchElement(
      N.SelectorExtRef,
      N.AttributeListExtRef,
      e
    );
  }
  searchDataSetByName(e, n) {
    const i = `${N.SelectorDataSet}[name="${e}"]`, s = this.searchElement(
      i,
      ["name"],
      n
    );
    if (s.length !== 1) {
      console.log({
        level: "error",
        msg: "we found not exactly one element",
        length: s.length
      });
      return;
    }
    return s[0];
  }
  searchElementsLDParent(e) {
    const n = e.closest(N.SelectorLD);
    if (!n) {
      console.log({
        level: "error",
        msg: "could not find LD parent",
        element: e
      });
      return;
    }
    return Ot(n, ["inst"]);
  }
  searchGSE(e, n, i) {
    const s = `${N.SelectorGSEElement}[ldInst='${e}'][cbName='${n}']`, l = this.searchElement(
      s,
      ["cbName", "ldInst"],
      i
    );
    if (l.length !== 1) {
      console.error({
        level: "error",
        msg: "we did not found exaclty one GSE element",
        length: l.length,
        ldInst: e,
        cbName: n,
        selector: s,
        root: this.root,
        options: i
      });
      return;
    }
    return l[0];
  }
  searchElementsParentSubnetwork(e) {
    const n = e.closest(N.SelectorSubNetwork);
    if (!n) {
      console.error({
        level: "error",
        msg: "could not find SubNetwork parent",
        element: e
      });
      return;
    }
    return Ot(n, ["name"]);
  }
  searchDOTypes(e) {
    return this.searchElement(
      N.SelectorDOType,
      ["id"],
      e
    );
  }
  searchDATypes(e) {
    return this.searchElement(
      N.SelectorDAType,
      ["id"],
      e
    );
  }
  searchEnumTypes(e) {
    return this.searchElement(
      N.SelectorEnumType,
      ["id"],
      e
    );
  }
  searchDOsByType(e, n) {
    const i = `${N.SelectorDO}[type='${e}']`;
    return this.searchElement(
      i,
      ["name", "type"],
      n
    );
  }
  searchLNodeTypes(e) {
    return this.searchElement(
      N.SelectorLNodeType,
      ["id", "lnClass"],
      e
    );
  }
  searchReportControls(e) {
    return this.searchElement(
      N.SelectorReportControl,
      ["rptID", "name", "datSet"],
      e
    );
  }
  searchElementsParentIED(e) {
    const n = N.SelectorIED;
    return this.searchElementParent(
      e,
      n,
      N.AttributeListIED
    );
  }
  searcClientLNs(e) {
    return this.searchElement(
      N.SelectorClientLN,
      ["iedName"],
      e
    );
  }
  searchElementsByTypeAttr(e, n) {
    const i = `[type='${e}']`;
    return this.searchElement(i, [], n);
  }
  searchElementsByLnTypeAttr(e, n) {
    const i = `[lnType='${e}']`;
    return this.searchElement(i, [], n);
  }
  searchConnectedAPs(e) {
    return this.searchElement(
      N.SelectorConnectedAP,
      N.AttributeListConnectedAP,
      e
    );
  }
  searchConnectedAPIP(e) {
    return this.searchElement(
      N.SelectorIP,
      N.AttributeListIP,
      e
    )[0];
  }
  searchConnectedAPIPSubnet(e) {
    return this.searchElement(
      N.SelectorIPSubnet,
      N.AttributeListIPSubnet,
      e
    )[0];
  }
  searchConnectedAPIPGateway(e) {
    return this.searchElement(
      N.SelectorIPGateway,
      N.AttributeListIPGateway,
      e
    )[0];
  }
  searchConnectedAPCables(e) {
    return this.searchElement(
      N.SelectorCable,
      N.AttributeListCable,
      e
    );
  }
  searchConnectedAPGooseAddresses(e) {
    return this.searchElement(
      N.SelectorGooseAddress,
      N.AttributeListGooseAddress,
      e
    );
  }
  searchConnectedAPSampledValuesAddresses(e) {
    return this.searchElement(
      N.SelectorSampledValuesAddress,
      N.AttributeListSampledValuesAddress,
      e
    );
  }
  searchAddressVLanId(e) {
    return this.searchSingleElement(
      N.SelectorAddressVLanId,
      N.AttributeListVLanId,
      e
    );
  }
  searchAddressMacAddress(e) {
    return this.searchSingleElement(
      N.SelectorAddressMacAddress,
      N.AttributeListMacAddress,
      e
    );
  }
  seachConnectedPhysConnections(e) {
    return this.searchElement(
      N.SelectorPhysConnection,
      N.AttributeListPhysConnection,
      e
    );
  }
  seachPhysConnectionCable(e) {
    return this.searchSingleElement(
      N.SelectorPhysConnectionCable,
      N.AttributeListCable,
      e
    );
  }
  seachPhysConnectionPort(e) {
    return this.searchSingleElement(
      N.SelectorPhysConnectionPort,
      N.AttributeListPort,
      e
    );
  }
  seachPhysConnectionType(e) {
    return this.searchSingleElement(
      N.SelectorPhysConnectionType,
      N.AttributeListType,
      e
    );
  }
  seachPhysConnectionPlug(e) {
    return this.searchSingleElement(
      N.SelectorPhysConnectionPlug,
      N.AttributeListPlug,
      e
    );
  }
  //
  // Privates
  //
  searchElement(e, n, i) {
    const s = this.determineRoot(i);
    return Array.from(s.querySelectorAll(e)).map((r) => Ot(r, n));
  }
  determineRoot(e) {
    return e != null && e.root ? e.root : this.root;
  }
  searchElementParent(e, n, i) {
    const s = e.closest(n);
    if (s)
      return Ot(s, i);
  }
  searchSingleElement(e, n, i) {
    const l = this.determineRoot(i).querySelector(e);
    return l === null ? null : Ot(l, n);
  }
}, N.SelectorGSE = "GSE", N.SelectorIED = "IED", N.AttributeListIED = ["name"], N.SelectorLNode = "LNode", N.AttributeListLNode = [
  "iedName",
  "ldInst",
  "lnClass",
  "lnInst",
  "lnType",
  "prefix"
], N.SelectorBay = "Bay", N.AttributeListBay = ["name"], N.SelectorGSEControl = "GSEControl", N.SelectorInput = "Inputs", N.SelectorExtRef = "ExtRef", N.AttributeListExtRef = [
  "iedName",
  "serviceType",
  // "ldInst",
  // "lnClass",
  // "lnInst",
  // "prefix",
  // "doName",
  // "daName",
  // "srcLDInst",
  // "srcPrefix",
  "srcCBName"
], N.SelectorDataSet = "DataSet", N.SelectorLD = "LDevice", N.SelectorGSEElement = "GSE", N.SelectorSubNetwork = "SubNetwork", N.SelectorDOType = "DOType", N.SelectorDAType = "DAType", N.SelectorEnumType = "EnumType", N.SelectorDO = "DO", N.SelectorLNodeType = "LNodeType", N.SelectorReportControl = "ReportControl", N.SelectorClientLN = "ClientLN", N.SelectorConnectedAP = "ConnectedAP", N.AttributeListConnectedAP = ["apName", "iedName", "redProt"], N.SelectorIP = "Address > P[type='IP']", N.AttributeListIP = [], N.SelectorIPSubnet = "Address > P[type='IP-SUBNET']", N.AttributeListIPSubnet = [], N.SelectorIPGateway = "Address > P[type='IP-GATEWAY']", N.AttributeListIPGateway = [], N.SelectorCable = "PhysConn[type='Connection'] P[type='Cable']", N.AttributeListCable = [], N.SelectorGooseAddress = "GSE > Address", N.AttributeListGooseAddress = [], N.SelectorSampledValuesAddress = "SMV > Address", N.AttributeListSampledValuesAddress = [], N.SelectorAddressVLanId = "P[type='VLAN-ID']", N.AttributeListVLanId = [], N.SelectorAddressMacAddress = "P[type='MAC-Address']", N.AttributeListMacAddress = [], N.SelectorPhysConnection = "PhysConn[type='Connection']", N.AttributeListPhysConnection = [], N.SelectorPhysConnectionCable = "P[type='Cable']", N.SelectorPhysConnectionPort = "P[type='Port']", N.AttributeListPort = [], N.SelectorPhysConnectionType = "P[type='Type']", N.AttributeListType = [], N.SelectorPhysConnectionPlug = "P[type='Plug']", N.AttributeListPlug = [], N);
function Ot(t, e) {
  const n = { element: t };
  for (const i of e) {
    const s = i;
    n[s] = t.getAttribute(s) ?? "";
  }
  return n;
}
class ya {
  constructor(e) {
    this.root = e;
  }
  //
  // Privates
  //
  determineRoot(e) {
    return (e == null ? void 0 : e.root) || this.root;
  }
  searchElements(e, n, i) {
    const s = this.determineRoot(i);
    return Array.from(s.querySelectorAll(e)).map(
      (r) => this.createElement(r, n)
    );
  }
  searchElementsWithChildren({
    selector: e,
    childrenKey: n,
    attributeList: i,
    options: s
  }) {
    const l = this.determineRoot(s);
    return Array.from(l.querySelectorAll(e)).map((a) => ({
      ...this.createElement(a, i),
      [n]: Array.from(a.children).map(
        (u) => this.createElement(u)
      )
    }));
  }
  searchSingleElement(e, n, i) {
    const l = this.determineRoot(i).querySelector(e);
    return l === null ? null : this.createElement(l, n);
  }
  searchElementParent(e, n, i) {
    const s = e.closest(n);
    if (s)
      return this.createElement(s, i);
  }
  createElement(e, n) {
    const i = { element: e };
    if (n)
      for (const s of n) {
        const l = s;
        i[l] = e.getAttribute(l) ?? "";
      }
    else
      for (const s of e.attributes)
        i[s.name] = s.value;
    return i;
  }
}
const _t = ["id", "name", "desc"], Oe = {
  substation: {
    element: {
      tag: "Substation",
      name: "Substation",
      standardAttributes: [..._t],
      customAttributes: []
    },
    type: {
      tag: "td:SubstationType",
      baseName: "SubstationType_",
      baseId: "substation-type-",
      insertBefore: "voltageLevelTypes"
    },
    typeRef: {
      tag: void 0,
      to: void 0,
      from: "voltageLevel"
    }
  },
  voltageLevel: {
    element: {
      tag: "VoltageLevel",
      name: "Voltage Level",
      standardAttributes: [
        ..._t,
        "nomFreq",
        "numPhases"
      ],
      customAttributes: []
    },
    type: {
      tag: "td:VoltageLevelType",
      baseName: "VoltageLevelType_",
      baseId: "voltage-level-type-",
      insertBefore: "bayTypes"
    },
    typeRef: {
      tag: "td:VoltageLevelTypeRef",
      to: "substation",
      from: "bay"
    }
  },
  bay: {
    element: {
      tag: "Bay",
      name: "Bay",
      standardAttributes: [..._t],
      customAttributes: []
    },
    type: {
      tag: "td:BayType",
      baseName: "BayType_",
      baseId: "bay-type-",
      insertBefore: "iedTypes"
    },
    typeRef: {
      tag: "td:BayTypeRef",
      to: "voltageLevel",
      from: "ied"
    }
  },
  ied: {
    element: {
      tag: "IED",
      name: "IED",
      standardAttributes: [
        ..._t,
        "originalSclRevision",
        "originalSclVersion",
        "configVersion",
        "owner",
        "manufacturer",
        "type"
      ],
      customAttributes: []
    },
    type: {
      tag: "td:IEDType",
      baseName: "IEDType_",
      baseId: "ied-type-",
      insertBefore: "lDeviceTypes"
    },
    typeRef: {
      tag: "td:IEDTypeRef",
      to: "bay",
      from: "lDevice"
    }
  },
  lDevice: {
    element: {
      tag: "LDevice",
      name: "Logical Device",
      standardAttributes: [..._t, "inst"],
      customAttributes: []
    },
    type: {
      tag: "td:LDeviceType",
      baseName: "LDeviceType_",
      baseId: "ldevice-type-",
      insertBefore: void 0
    },
    typeRef: {
      tag: "td:LDeviceTypeRef",
      to: "ied",
      from: "lNode"
    }
  },
  lNode: {
    element: {
      tag: "LNode",
      name: "Logical Node",
      standardAttributes: [..._t, "lnClass"],
      customAttributes: []
    },
    type: {
      tag: "LNodeType",
      baseName: "LNodeType_",
      baseId: "lnode-type-",
      insertBefore: void 0
    },
    typeRef: {
      tag: "td:LNodeTypeRef",
      to: "lDevice",
      from: void 0
    }
  }
}, He = class He extends ya {
  searchDataTypeTemplates() {
    return this.searchSingleElement(
      He.SelectorDataTypeTemplates,
      []
    );
  }
  searchPrivateElement(e, n) {
    return this.searchElements(e, [], n)[0] || null;
  }
  searchSubstationTypeElements(e) {
    return this.searchElementsWithChildren({
      selector: He.SelectorSubstationType,
      childrenKey: "typeRefs",
      attributeList: [
        ...Oe.substation.element.standardAttributes
      ],
      options: e
    });
  }
  searchVoltageLevelTypeElements(e) {
    return this.searchElementsWithChildren({
      selector: He.SelectorVoltageLevelType,
      childrenKey: "typeRefs",
      attributeList: [
        ...Oe.voltageLevel.element.standardAttributes
      ],
      options: e
    });
  }
  searchBayTypeElements(e) {
    return this.searchElementsWithChildren({
      selector: He.SelectorBayType,
      childrenKey: "typeRefs",
      attributeList: [...Oe.bay.element.standardAttributes],
      options: e
    });
  }
  searchIEDTypeElements(e) {
    return this.searchElementsWithChildren({
      selector: He.SelectorIEDType,
      childrenKey: "typeRefs",
      attributeList: [...Oe.ied.element.standardAttributes],
      options: e
    });
  }
  searchLDeviceTypeElements(e) {
    return this.searchElementsWithChildren({
      selector: He.SelectorLDeviceType,
      childrenKey: "typeRefs",
      attributeList: [...Oe.lDevice.element.standardAttributes],
      options: e
    });
  }
  searchLNodeTypeElements(e) {
    return this.searchElements(
      He.SelectorLNodeType,
      [...Oe.lNode.element.standardAttributes],
      e
    ).map((n) => ({
      ...n,
      typeRefs: void 0
    }));
  }
};
He.SelectorDataTypeTemplates = "DataTypeTemplates", He.SelectorSubstationType = "SubstationType", He.SelectorVoltageLevelType = "VoltageLevelType", He.SelectorBayType = "BayType", He.SelectorIEDType = "IEDType", He.SelectorLDeviceType = "LDeviceType", He.SelectorLNodeType = "LNodeType";
let En = He;
class Ea {
  constructor(e) {
    this.root = e, this.dataTypeTemplatesQueries = new En(this.root);
  }
  findDataTypesElement() {
    return this.dataTypeTemplatesQueries.searchDataTypeTemplates();
  }
  findPrivateElement(e, n) {
    return this.dataTypeTemplatesQueries.searchPrivateElement(
      e,
      n
    );
  }
  findTypeElements(e) {
    return {
      substationTypes: this.dataTypeTemplatesQueries.searchSubstationTypeElements(
        e
      ),
      voltageLevelTypes: this.dataTypeTemplatesQueries.searchVoltageLevelTypeElements(
        e
      ),
      bayTypes: this.dataTypeTemplatesQueries.searchBayTypeElements(e),
      iedTypes: this.dataTypeTemplatesQueries.searchIEDTypeElements(e),
      lDeviceTypes: this.dataTypeTemplatesQueries.searchLDeviceTypeElements(
        e
      ),
      lNodeTypes: this.dataTypeTemplatesQueries.searchLNodeTypeElements()
    };
  }
}
function Aa(t) {
  const n = new XMLSerializer().serializeToString(t);
  return n.startsWith("<?xml") ? n : (
    // biome-ignore lint/style/useTemplate: using templates literal would make the code less readable
    '<?xml version="1.0" encoding="UTF-8"?>' + `
` + n
  );
}
function Ca({
  xmlDocument: t,
  namespace: e,
  tag: n,
  attributes: i
}) {
  let s;
  const l = e || t.documentElement.namespaceURI;
  return s = t.createElementNS(l, n), i && (s = Ia(s, i)), s;
}
function Ia(t, e) {
  const n = Object.entries(e).filter(
    ([i, s]) => s !== null
  );
  for (const [i, s] of n)
    t.setAttribute(i, s);
  return t;
}
function Sa(t) {
  var e, n;
  return t.old === void 0 && ((e = t.new) == null ? void 0 : e.parent) !== void 0 && ((n = t.new) == null ? void 0 : n.element) !== void 0;
}
function La(t) {
  var e, n;
  return ((e = t.old) == null ? void 0 : e.parent) !== void 0 && ((n = t.old) == null ? void 0 : n.element) !== void 0 && t.new === void 0;
}
function Ta(t) {
  var e, n, i, s;
  return ((e = t.old) == null ? void 0 : e.parent) !== void 0 && ((n = t.old) == null ? void 0 : n.element) !== void 0 && ((i = t.new) == null ? void 0 : i.parent) !== void 0 && ((s = t.new) == null ? void 0 : s.element) == null;
}
function ka(t) {
  var e, n, i, s;
  return ((e = t.old) == null ? void 0 : e.parent) === void 0 && ((n = t.old) == null ? void 0 : n.element) !== void 0 && ((i = t.new) == null ? void 0 : i.parent) === void 0 && ((s = t.new) == null ? void 0 : s.element) !== void 0;
}
function Oa(t) {
  return t.old === void 0 && t.new === void 0 && t.element !== void 0 && t.newAttributes !== void 0 && t.oldAttributes !== void 0;
}
function Ln(t, e = "user", n) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...n,
    detail: { action: t, initiator: e, ...n == null ? void 0 : n.detail }
  });
}
function wa(t, e, n) {
  return new CustomEvent("open-doc", {
    bubbles: !0,
    composed: !0,
    ...n,
    detail: { doc: t, docName: e, ...n == null ? void 0 : n.detail }
  });
}
function Pa(t) {
  function e() {
    return Reflect.construct(HTMLElement, [], new.target);
  }
  return e.prototype = Object.create(HTMLElement.prototype), e.prototype.pluginInstance = void 0, e.prototype.localDoc = void 0, e.prototype.localDocName = void 0, e.prototype.localEditCount = -1, Object.defineProperty(e.prototype, "doc", {
    get: function() {
      return this.localDoc;
    },
    set: function(i) {
      this.localDoc = i, this.pluginInstance && this.pluginInstance.$set({ xmlDocument: i });
    }
  }), Object.defineProperty(e.prototype, "docName", {
    get: function() {
      return this.localDocName;
    },
    set: function(i) {
      this.localDocName = i;
    }
  }), Object.defineProperty(e.prototype, "editCount", {
    get: function() {
      return this.localEditCount;
    },
    set: function(i) {
      this.localEditCount = i, this.pluginInstance && this.pluginInstance.$set({ editCount: i });
    }
  }), e.prototype.connectedCallback = function() {
    this.pluginInstance = new t({
      target: this.attachShadow({ mode: "open" }),
      props: {
        xmlDocument: this.localDoc,
        pluginHostElement: this,
        editCount: this.localEditCount
      }
    });
  }, e;
}
function Ra(t) {
  function e() {
    return Reflect.construct(HTMLElement, [], new.target);
  }
  return e.prototype = Object.create(HTMLElement.prototype), e.prototype.pluginInstance = void 0, e.prototype.run = function() {
    return this.pluginInstance.run();
  }, e.prototype.connectedCallback = function() {
    this.pluginInstance = new t({
      target: this.attachShadow({ mode: "open" })
    });
  }, e;
}
function Da(t) {
  function e() {
    return Reflect.construct(HTMLElement, [], this.constructor);
  }
  return e.prototype = Object.create(HTMLElement.prototype), e.prototype.pluginInstance = null, e.prototype.connectedCallback = function() {
    this.pluginInstance = new t({
      target: this.attachShadow({ mode: "open" })
    });
  }, e;
}
function Ba(t) {
  console.warn("TODO onCreate", t);
}
function Ma(t) {
  t.new.parent.insertBefore(
    t.new.element,
    t.new.reference ?? null
  );
}
function Fa(t) {
  t.old.reference || (t.old.reference = t.old.element.nextSibling), t.old.element.parentNode === t.old.parent && t.old.parent.removeChild(t.old.element);
}
function Na(t) {
  console.warn("TODO onReplace", t);
}
function Ha(t) {
  for (const e of t.element.attributes)
    t.element.removeAttributeNode(e);
  for (const [e, n] of Object.entries(t.newAttributes))
    t.element.setAttribute(e, n ?? "");
}
function Ua(t, e) {
  t.doc = e.detail.doc, t.docName = e.detail.docName;
}
function ja(t) {
  if (!t.doc) return;
  const e = Aa(t.doc), n = new Blob([e], { type: "application/xml" }), i = URL.createObjectURL(n), s = document.createElement("a");
  s.href = i, s.download = t.docName || "file.xml", document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(i);
}
function qa(t, e) {
  const { action: n } = e.detail;
  Ta(n) && Ba(n), Sa(n) && Ma(n), La(n) && Fa(n), ka(n) && Na(n), Oa(n) && Ha(n), t.editCount++;
}
function za(t, e) {
  customElements.define("stand-alone-plugin", t);
  const n = document.createElement("stand-alone-plugin");
  document.body.appendChild(n), e === "editor" && Va(
    n
  );
}
function Va(t) {
  document.addEventListener(
    "open-doc",
    (e) => Ua(t, e)
  ), document.addEventListener("save-doc", () => ja(t)), document.addEventListener(
    "editor-action",
    (e) => qa(t, e)
  );
}
function Ga({
  pluginType: t,
  isStandAlone: e,
  pluginComponent: n
}) {
  const i = {
    editor: Pa(n),
    menu: Ra(n),
    validator: Da(n)
    // TODO
  };
  return e ? za(i[t], t) : i[t];
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var pt = {
  FIXED_CLASS: "mdc-top-app-bar--fixed",
  FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
  SHORT_CLASS: "mdc-top-app-bar--short",
  SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
  SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
}, $t = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
}, Za = {
  ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
  NAVIGATION_EVENT: "MDCTopAppBar:nav",
  NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
  ROOT_SELECTOR: ".mdc-top-app-bar",
  TITLE_SELECTOR: ".mdc-top-app-bar__title"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Tn = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      return t.call(this, Pe(Pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Za;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return pt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return $t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          getTopAppBarHeight: function() {
            return 0;
          },
          notifyNavigationIconClicked: function() {
          },
          getViewportScrollY: function() {
            return 0;
          },
          getTotalActionItems: function() {
            return 0;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.handleTargetScroll = function() {
    }, e.prototype.handleWindowResize = function() {
    }, e.prototype.handleNavigationClick = function() {
      this.adapter.notifyNavigationIconClicked();
    }, e;
  }(st)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Wt = 0, An = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var i = t.call(this, n) || this;
      return i.wasDocked = !0, i.isDockedShowing = !0, i.currentAppBarOffsetTop = 0, i.isCurrentlyBeingResized = !1, i.resizeThrottleId = Wt, i.resizeDebounceId = Wt, i.lastScrollPosition = i.adapter.getViewportScrollY(), i.topAppBarHeight = i.adapter.getTopAppBarHeight(), i;
    }
    return e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.adapter.setStyle("top", "");
    }, e.prototype.handleTargetScroll = function() {
      var n = Math.max(this.adapter.getViewportScrollY(), 0), i = n - this.lastScrollPosition;
      this.lastScrollPosition = n, this.isCurrentlyBeingResized || (this.currentAppBarOffsetTop -= i, this.currentAppBarOffsetTop > 0 ? this.currentAppBarOffsetTop = 0 : Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight && (this.currentAppBarOffsetTop = -this.topAppBarHeight), this.moveTopAppBar());
    }, e.prototype.handleWindowResize = function() {
      var n = this;
      this.resizeThrottleId || (this.resizeThrottleId = setTimeout(function() {
        n.resizeThrottleId = Wt, n.throttledResizeHandler();
      }, $t.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)), this.isCurrentlyBeingResized = !0, this.resizeDebounceId && clearTimeout(this.resizeDebounceId), this.resizeDebounceId = setTimeout(function() {
        n.handleTargetScroll(), n.isCurrentlyBeingResized = !1, n.resizeDebounceId = Wt;
      }, $t.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }, e.prototype.checkForUpdate = function() {
      var n = -this.topAppBarHeight, i = this.currentAppBarOffsetTop < 0, s = this.currentAppBarOffsetTop > n, l = i && s;
      if (l)
        this.wasDocked = !1;
      else if (this.wasDocked) {
        if (this.isDockedShowing !== s)
          return this.isDockedShowing = s, !0;
      } else return this.wasDocked = !0, !0;
      return l;
    }, e.prototype.moveTopAppBar = function() {
      if (this.checkForUpdate()) {
        var n = this.currentAppBarOffsetTop;
        Math.abs(n) >= this.topAppBarHeight && (n = -$t.MAX_TOP_APP_BAR_HEIGHT), this.adapter.setStyle("top", n + "px");
      }
    }, e.prototype.throttledResizeHandler = function() {
      var n = this.adapter.getTopAppBarHeight();
      this.topAppBarHeight !== n && (this.wasDocked = !1, this.currentAppBarOffsetTop -= this.topAppBarHeight - n, this.topAppBarHeight = n), this.handleTargetScroll();
    }, e;
  }(Tn)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Wa = (
  /** @class */
  function(t) {
    qe(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.wasScrolled = !1, n;
    }
    return e.prototype.handleTargetScroll = function() {
      var n = this.adapter.getViewportScrollY();
      n <= 0 ? this.wasScrolled && (this.adapter.removeClass(pt.FIXED_SCROLLED_CLASS), this.wasScrolled = !1) : this.wasScrolled || (this.adapter.addClass(pt.FIXED_SCROLLED_CLASS), this.wasScrolled = !0);
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Xa = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var i = t.call(this, n) || this;
      return i.collapsed = !1, i.isAlwaysCollapsed = !1, i;
    }
    return Object.defineProperty(e.prototype, "isCollapsed", {
      // Public visibility for backward compatibility.
      get: function() {
        return this.collapsed;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      t.prototype.init.call(this), this.adapter.getTotalActionItems() > 0 && this.adapter.addClass(pt.SHORT_HAS_ACTION_ITEM_CLASS), this.setAlwaysCollapsed(this.adapter.hasClass(pt.SHORT_COLLAPSED_CLASS));
    }, e.prototype.setAlwaysCollapsed = function(n) {
      this.isAlwaysCollapsed = !!n, this.isAlwaysCollapsed ? this.collapse() : this.maybeCollapseBar();
    }, e.prototype.getAlwaysCollapsed = function() {
      return this.isAlwaysCollapsed;
    }, e.prototype.handleTargetScroll = function() {
      this.maybeCollapseBar();
    }, e.prototype.maybeCollapseBar = function() {
      if (!this.isAlwaysCollapsed) {
        var n = this.adapter.getViewportScrollY();
        n <= 0 ? this.collapsed && this.uncollapse() : this.collapsed || this.collapse();
      }
    }, e.prototype.uncollapse = function() {
      this.adapter.removeClass(pt.SHORT_COLLAPSED_CLASS), this.collapsed = !1;
    }, e.prototype.collapse = function() {
      this.adapter.addClass(pt.SHORT_COLLAPSED_CLASS), this.collapsed = !0;
    }, e;
  }(Tn)
);
const { window: Kn } = Bl;
function Ka(t) {
  let e, n, i, s, l, o, r;
  const a = (
    /*#slots*/
    t[22].default
  ), u = ie(
    a,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let f = [
    {
      class: n = W({
        [
          /*className*/
          t[2]
        ]: !0,
        "mdc-top-app-bar": !0,
        "mdc-top-app-bar--short": (
          /*variant*/
          t[4] === "short"
        ),
        "mdc-top-app-bar--short-collapsed": (
          /*collapsed*/
          t[0]
        ),
        "mdc-top-app-bar--fixed": (
          /*variant*/
          t[4] === "fixed"
        ),
        "smui-top-app-bar--static": (
          /*variant*/
          t[4] === "static"
        ),
        "smui-top-app-bar--color-secondary": (
          /*color*/
          t[5] === "secondary"
        ),
        "mdc-top-app-bar--prominent": (
          /*prominent*/
          t[6]
        ),
        "mdc-top-app-bar--dense": (
          /*dense*/
          t[7]
        ),
        .../*internalClasses*/
        t[11]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[12]
      ).map(Jn).concat([
        /*style*/
        t[3]
      ]).join(" ")
    },
    /*$$restProps*/
    t[15]
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = M(c, f[d]);
  return {
    c() {
      e = j("header"), u && u.c(), ne(e, c);
    },
    m(d, m) {
      D(d, e, m), u && u.m(e, null), t[25](e), l = !0, o || (r = [
        ge(
          Kn,
          "resize",
          /*resize_handler*/
          t[23]
        ),
        ge(
          Kn,
          "scroll",
          /*scroll_handler*/
          t[24]
        ),
        x(s = Se.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        x(
          /*forwardEvents*/
          t[13].call(null, e)
        ),
        ge(
          e,
          "SMUITopAppBarIconButton:nav",
          /*SMUITopAppBarIconButton_nav_handler*/
          t[26]
        )
      ], o = !0);
    },
    p(d, m) {
      u && u.p && (!l || m[0] & /*$$scope*/
      2097152) && le(
        u,
        a,
        d,
        /*$$scope*/
        d[21],
        l ? se(
          a,
          /*$$scope*/
          d[21],
          m,
          null
        ) : re(
          /*$$scope*/
          d[21]
        ),
        null
      ), ne(e, c = te(f, [
        (!l || m[0] & /*className, variant, collapsed, color, prominent, dense, internalClasses*/
        2293 && n !== (n = W({
          [
            /*className*/
            d[2]
          ]: !0,
          "mdc-top-app-bar": !0,
          "mdc-top-app-bar--short": (
            /*variant*/
            d[4] === "short"
          ),
          "mdc-top-app-bar--short-collapsed": (
            /*collapsed*/
            d[0]
          ),
          "mdc-top-app-bar--fixed": (
            /*variant*/
            d[4] === "fixed"
          ),
          "smui-top-app-bar--static": (
            /*variant*/
            d[4] === "static"
          ),
          "smui-top-app-bar--color-secondary": (
            /*color*/
            d[5] === "secondary"
          ),
          "mdc-top-app-bar--prominent": (
            /*prominent*/
            d[6]
          ),
          "mdc-top-app-bar--dense": (
            /*dense*/
            d[7]
          ),
          .../*internalClasses*/
          d[11]
        }))) && { class: n },
        (!l || m[0] & /*internalStyles, style*/
        4104 && i !== (i = Object.entries(
          /*internalStyles*/
          d[12]
        ).map(Jn).concat([
          /*style*/
          d[3]
        ]).join(" "))) && { style: i },
        m[0] & /*$$restProps*/
        32768 && /*$$restProps*/
        d[15]
      ])), s && pe(s.update) && m[0] & /*use*/
      2 && s.update.call(
        null,
        /*use*/
        d[1]
      );
    },
    i(d) {
      l || (E(u, d), l = !0);
    },
    o(d) {
      C(u, d), l = !1;
    },
    d(d) {
      d && R(e), u && u.d(d), t[25](null), o = !1, Ee(r);
    }
  };
}
const Jn = ([t, e]) => `${t}: ${e};`;
function Ja(t, e, n) {
  const i = [
    "use",
    "class",
    "style",
    "variant",
    "color",
    "collapsed",
    "prominent",
    "dense",
    "scrollTarget",
    "getPropStore",
    "getElement"
  ];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let a = () => {
  };
  function u(B) {
    return B === a;
  }
  let { use: f = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { variant: m = "standard" } = e, { color: p = "primary" } = e, { collapsed: g = a } = e;
  const b = !u(g) && !!g;
  u(g) && (g = !1);
  let { prominent: _ = !1 } = e, { dense: v = !1 } = e, { scrollTarget: L = void 0 } = e, A, I, T = {}, h = {}, k, X = ps({ variant: m, prominent: _, dense: v }, (B) => {
    n(18, k = B);
  }), Z, P = m;
  nt(() => (n(9, I = $()), I.init(), () => {
    I.destroy();
  }));
  function $() {
    const B = {
      static: Tn,
      short: Xa,
      fixed: Wa,
      standard: An
    }[m] || An;
    return new B({
      hasClass: O,
      addClass: H,
      removeClass: ve,
      setStyle: be,
      getTopAppBarHeight: () => A.clientHeight,
      notifyNavigationIconClicked: () => Te(A, "SMUITopAppBar:nav", void 0, void 0, !0),
      getViewportScrollY: () => L == null ? window.pageYOffset : L.scrollTop,
      getTotalActionItems: () => A.querySelectorAll(".mdc-top-app-bar__action-item").length
    });
  }
  function O(B) {
    return B in T ? T[B] : w().classList.contains(B);
  }
  function H(B) {
    T[B] || n(11, T[B] = !0, T);
  }
  function ve(B) {
    (!(B in T) || T[B]) && n(11, T[B] = !1, T);
  }
  function be(B, ae) {
    h[B] != ae && (ae === "" || ae == null ? (delete h[B], n(12, h), n(20, P), n(4, m), n(9, I)) : n(12, h[B] = ae, h));
  }
  function _e() {
    I && (I.handleTargetScroll(), m === "short" && n(0, g = "isCollapsed" in I && I.isCollapsed));
  }
  function F() {
    return X;
  }
  function w() {
    return A;
  }
  const K = () => m !== "short" && m !== "fixed" && I && I.handleWindowResize(), Le = () => L == null && _e();
  function ke(B) {
    ee[B ? "unshift" : "push"](() => {
      A = B, n(10, A);
    });
  }
  const Fe = () => I && I.handleNavigationClick();
  return t.$$set = (B) => {
    e = M(M({}, e), Ae(B)), n(15, s = Y(e, i)), "use" in B && n(1, f = B.use), "class" in B && n(2, c = B.class), "style" in B && n(3, d = B.style), "variant" in B && n(4, m = B.variant), "color" in B && n(5, p = B.color), "collapsed" in B && n(0, g = B.collapsed), "prominent" in B && n(6, _ = B.prominent), "dense" in B && n(7, v = B.dense), "scrollTarget" in B && n(8, L = B.scrollTarget), "$$scope" in B && n(21, o = B.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*propStoreSet, variant, prominent, dense*/
    262352 && k && k({ variant: m, prominent: _, dense: v }), t.$$.dirty[0] & /*oldVariant, variant, instance*/
    1049104 && P !== m && I && (n(20, P = m), I.destroy(), n(11, T = {}), n(12, h = {}), n(9, I = $()), I.init()), t.$$.dirty[0] & /*instance, variant*/
    528 && I && m === "short" && "setAlwaysCollapsed" in I && I.setAlwaysCollapsed(b), t.$$.dirty[0] & /*oldScrollTarget, scrollTarget*/
    524544 && Z !== L && (Z && Z.removeEventListener("scroll", _e), L && L.addEventListener("scroll", _e), n(19, Z = L));
  }, [
    g,
    f,
    c,
    d,
    m,
    p,
    _,
    v,
    L,
    I,
    A,
    T,
    h,
    r,
    _e,
    s,
    F,
    w,
    k,
    Z,
    P,
    o,
    l,
    K,
    Le,
    ke,
    Fe
  ];
}
class Ss extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      Ja,
      Ka,
      oe,
      {
        use: 1,
        class: 2,
        style: 3,
        variant: 4,
        color: 5,
        collapsed: 0,
        prominent: 6,
        dense: 7,
        scrollTarget: 8,
        getPropStore: 16,
        getElement: 17
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[1];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get variant() {
    return this.$$.ctx[4];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get collapsed() {
    return this.$$.ctx[0];
  }
  set collapsed(e) {
    this.$$set({ collapsed: e }), y();
  }
  get prominent() {
    return this.$$.ctx[6];
  }
  set prominent(e) {
    this.$$set({ prominent: e }), y();
  }
  get dense() {
    return this.$$.ctx[7];
  }
  set dense(e) {
    this.$$set({ dense: e }), y();
  }
  get scrollTarget() {
    return this.$$.ctx[8];
  }
  set scrollTarget(e) {
    this.$$set({ scrollTarget: e }), y();
  }
  get getPropStore() {
    return this.$$.ctx[16];
  }
  get getElement() {
    return this.$$.ctx[17];
  }
}
me(Ss, { use: {}, class: {}, style: {}, variant: {}, color: {}, collapsed: {}, prominent: { type: "Boolean" }, dense: { type: "Boolean" }, scrollTarget: {} }, ["default"], ["getPropStore", "getElement"], !0);
const Ya = Ne({
  class: "mdc-top-app-bar__row",
  tag: "div"
});
function $a(t) {
  let e, n, i, s, l, o;
  const r = (
    /*#slots*/
    t[9].default
  ), a = ie(
    r,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    {
      class: n = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-top-app-bar__section": !0,
        "mdc-top-app-bar__section--align-start": (
          /*align*/
          t[2] === "start"
        ),
        "mdc-top-app-bar__section--align-end": (
          /*align*/
          t[2] === "end"
        )
      })
    },
    /*toolbar*/
    t[3] ? { role: "toolbar" } : {},
    /*$$restProps*/
    t[6]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = M(f, u[c]);
  return {
    c() {
      e = j("section"), a && a.c(), ne(e, f);
    },
    m(c, d) {
      D(c, e, d), a && a.m(e, null), t[10](e), s = !0, l || (o = [
        x(i = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[5].call(null, e)
        )
      ], l = !0);
    },
    p(c, [d]) {
      a && a.p && (!s || d & /*$$scope*/
      256) && le(
        a,
        r,
        c,
        /*$$scope*/
        c[8],
        s ? se(
          r,
          /*$$scope*/
          c[8],
          d,
          null
        ) : re(
          /*$$scope*/
          c[8]
        ),
        null
      ), ne(e, f = te(u, [
        (!s || d & /*className, align*/
        6 && n !== (n = W({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-top-app-bar__section": !0,
          "mdc-top-app-bar__section--align-start": (
            /*align*/
            c[2] === "start"
          ),
          "mdc-top-app-bar__section--align-end": (
            /*align*/
            c[2] === "end"
          )
        }))) && { class: n },
        d & /*toolbar*/
        8 && /*toolbar*/
        (c[3] ? { role: "toolbar" } : {}),
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (E(a, c), s = !0);
    },
    o(c) {
      C(a, c), s = !1;
    },
    d(c) {
      c && R(e), a && a.d(c), t[10](null), l = !1, Ee(o);
    }
  };
}
function Qa(t, e, n) {
  const i = ["use", "class", "align", "toolbar", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { align: f = "start" } = e, { toolbar: c = !1 } = e, d;
  Ue("SMUI:icon-button:context", c ? "top-app-bar:action" : "top-app-bar:navigation"), Ue("SMUI:button:context", c ? "top-app-bar:action" : "top-app-bar:navigation");
  function m() {
    return d;
  }
  function p(g) {
    ee[g ? "unshift" : "push"](() => {
      d = g, n(4, d);
    });
  }
  return t.$$set = (g) => {
    e = M(M({}, e), Ae(g)), n(6, s = Y(e, i)), "use" in g && n(0, a = g.use), "class" in g && n(1, u = g.class), "align" in g && n(2, f = g.align), "toolbar" in g && n(3, c = g.toolbar), "$$scope" in g && n(8, o = g.$$scope);
  }, [
    a,
    u,
    f,
    c,
    d,
    r,
    s,
    m,
    o,
    l,
    p
  ];
}
class Cn extends he {
  constructor(e) {
    super(), de(this, e, Qa, $a, oe, {
      use: 0,
      class: 1,
      align: 2,
      toolbar: 3,
      getElement: 7
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get align() {
    return this.$$.ctx[2];
  }
  set align(e) {
    this.$$set({ align: e }), y();
  }
  get toolbar() {
    return this.$$.ctx[3];
  }
  set toolbar(e) {
    this.$$set({ toolbar: e }), y();
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
me(Cn, { use: {}, class: {}, align: {}, toolbar: { type: "Boolean" } }, ["default"], ["getElement"], !0);
const xa = Ne({
  class: "mdc-top-app-bar__title",
  tag: "span"
});
function eo(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].default
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l & /*$$scope*/
      16384) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[14],
        e ? se(
          n,
          /*$$scope*/
          s[14],
          l,
          null
        ) : re(
          /*$$scope*/
          s[14]
        ),
        null
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function to(t) {
  let e, n, i;
  const s = [
    { tag: (
      /*tag*/
      t[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[7],
        .../*use*/
        t[0]
      ]
    },
    {
      class: W({
        [
          /*className*/
          t[1]
        ]: !0,
        [
          /*adjustClass*/
          t[6]
        ]: !0
      })
    },
    /*$$restProps*/
    t[8]
  ];
  var l = (
    /*component*/
    t[2]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [eo] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < s.length; f += 1)
      u = M(u, s[f]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, adjustClass, $$restProps*/
    459 && (u = M(u, te(s, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        r[3]
      ) },
      a & /*forwardEvents, use*/
      129 && {
        use: [
          /*forwardEvents*/
          r[7],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, adjustClass*/
      66 && {
        class: W({
          [
            /*className*/
            r[1]
          ]: !0,
          [
            /*adjustClass*/
            r[6]
          ]: !0
        })
      },
      a & /*$$restProps*/
      256 && ue(
        /*$$restProps*/
        r[8]
      )
    ]))), { props: u };
  }
  return l && (e = je(l, o(t)), t[13](e)), {
    c() {
      e && G(e.$$.fragment), n = we();
    },
    m(r, a) {
      e && z(e, r, a), D(r, n, a), i = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      4 && l !== (l = /*component*/
      r[2])) {
        if (e) {
          ce();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            V(u, 1);
          }), fe();
        }
        l ? (e = je(l, o(r, a)), r[13](e), G(e.$$.fragment), E(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (l) {
        const u = a & /*tag, forwardEvents, use, className, adjustClass, $$restProps*/
        459 ? te(s, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          a & /*forwardEvents, use*/
          129 && {
            use: [
              /*forwardEvents*/
              r[7],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, adjustClass*/
          66 && {
            class: W({
              [
                /*className*/
                r[1]
              ]: !0,
              [
                /*adjustClass*/
                r[6]
              ]: !0
            })
          },
          a & /*$$restProps*/
          256 && ue(
            /*$$restProps*/
            r[8]
          )
        ]) : {};
        a & /*$$scope*/
        16384 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && E(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[13](null), e && V(e, r);
    }
  };
}
function no(t, e, n) {
  let i, s;
  const l = ["use", "class", "topAppBar", "component", "tag", "getElement"];
  let o = Y(e, l), r, a = Ce, u = () => (a(), a = nn(i, (I) => n(11, r = I)), i);
  t.$$.on_destroy.push(() => a());
  let { $$slots: f = {}, $$scope: c } = e;
  const d = Ie(ye());
  let { use: m = [] } = e, { class: p = "" } = e, { topAppBar: g } = e, b, { component: _ = Ve } = e, { tag: v = _ === Ve ? "main" : void 0 } = e;
  function L() {
    return b.getElement();
  }
  function A(I) {
    ee[I ? "unshift" : "push"](() => {
      b = I, n(5, b);
    });
  }
  return t.$$set = (I) => {
    e = M(M({}, e), Ae(I)), n(8, o = Y(e, l)), "use" in I && n(0, m = I.use), "class" in I && n(1, p = I.class), "topAppBar" in I && n(9, g = I.topAppBar), "component" in I && n(2, _ = I.component), "tag" in I && n(3, v = I.tag), "$$scope" in I && n(14, c = I.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*topAppBar*/
    512 && u(n(4, i = g && g.getPropStore())), t.$$.dirty & /*propStore, $propStore*/
    2064 && n(6, s = !i || r.variant === "static" ? "" : r.variant === "short" ? "mdc-top-app-bar--short-fixed-adjust" : r.prominent && r.dense ? "mdc-top-app-bar--dense-prominent-fixed-adjust" : r.prominent ? "mdc-top-app-bar--prominent-fixed-adjust" : r.dense ? "mdc-top-app-bar--dense-fixed-adjust" : "mdc-top-app-bar--fixed-adjust");
  }, [
    m,
    p,
    _,
    v,
    i,
    b,
    s,
    d,
    o,
    g,
    L,
    r,
    f,
    A,
    c
  ];
}
class io extends he {
  constructor(e) {
    super(), de(this, e, no, to, oe, {
      use: 0,
      class: 1,
      topAppBar: 9,
      component: 2,
      tag: 3,
      getElement: 10
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get topAppBar() {
    return this.$$.ctx[9];
  }
  set topAppBar(e) {
    this.$$set({ topAppBar: e }), y();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
me(io, { use: {}, class: {}, topAppBar: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function so(t) {
  ot(t, "svelte-a9zr3a", ".editor-buttons.svelte-a9zr3a{display:flex;gap:.5rem}");
}
function lo(t) {
  let e;
  return {
    c() {
      e = De("Dev Menu Bar");
    },
    m(n, i) {
      D(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function ro(t) {
  let e, n;
  return e = new xa({
    props: {
      $$slots: { default: [lo] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*$$scope*/
      32 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Yn(t) {
  let e, n, i, s, l, o, r, a, u;
  return n = new Mt({
    props: { icon: "upload_file", color: "white" }
  }), n.$on(
    "click",
    /*handleUpload*/
    t[2]
  ), o = new Mt({
    props: { icon: "download", color: "white" }
  }), o.$on("click", fo), {
    c() {
      e = j("div"), G(n.$$.fragment), i = Q(), s = j("input"), l = Q(), G(o.$$.fragment), U(s, "type", "file"), jl(s, "display", "none"), U(s, "accept", ".scd"), U(s, "name", "xmlDocument"), U(e, "class", "editor-buttons svelte-a9zr3a");
    },
    m(f, c) {
      D(f, e, c), z(n, e, null), J(e, i), J(e, s), t[4](s), J(e, l), z(o, e, null), r = !0, a || (u = ge(
        s,
        "change",
        /*handleFileChange*/
        t[3]
      ), a = !0);
    },
    p: Ce,
    i(f) {
      r || (E(n.$$.fragment, f), E(o.$$.fragment, f), r = !0);
    },
    o(f) {
      C(n.$$.fragment, f), C(o.$$.fragment, f), r = !1;
    },
    d(f) {
      f && R(e), V(n), t[4](null), V(o), a = !1, u();
    }
  };
}
function ao(t) {
  let e, n, i = (
    /*pluginType*/
    t[0] && /*pluginType*/
    t[0] === "editor" && Yn(t)
  );
  return {
    c() {
      i && i.c(), e = we();
    },
    m(s, l) {
      i && i.m(s, l), D(s, e, l), n = !0;
    },
    p(s, l) {
      /*pluginType*/
      s[0] && /*pluginType*/
      s[0] === "editor" ? i ? (i.p(s, l), l & /*pluginType*/
      1 && E(i, 1)) : (i = Yn(s), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (ce(), C(i, 1, 1, () => {
        i = null;
      }), fe());
    },
    i(s) {
      n || (E(i), n = !0);
    },
    o(s) {
      C(i), n = !1;
    },
    d(s) {
      s && R(e), i && i.d(s);
    }
  };
}
function oo(t) {
  let e, n, i, s;
  return e = new Cn({
    props: {
      $$slots: { default: [ro] },
      $$scope: { ctx: t }
    }
  }), i = new Cn({
    props: {
      align: "end",
      toolbar: !0,
      $$slots: { default: [ao] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment), n = Q(), G(i.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), D(l, n, o), z(i, l, o), s = !0;
    },
    p(l, o) {
      const r = {};
      o & /*$$scope*/
      32 && (r.$$scope = { dirty: o, ctx: l }), e.$set(r);
      const a = {};
      o & /*$$scope, fileInput, pluginType*/
      35 && (a.$$scope = { dirty: o, ctx: l }), i.$set(a);
    },
    i(l) {
      s || (E(e.$$.fragment, l), E(i.$$.fragment, l), s = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(i.$$.fragment, l), s = !1;
    },
    d(l) {
      l && R(n), V(e, l), V(i, l);
    }
  };
}
function uo(t) {
  let e, n;
  return e = new Ya({
    props: {
      $$slots: { default: [oo] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*$$scope, fileInput, pluginType*/
      35 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function co(t) {
  let e, n;
  return e = new Ss({
    props: {
      variant: "static",
      color: "primary",
      $$slots: { default: [uo] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, [s]) {
      const l = {};
      s & /*$$scope, fileInput, pluginType*/
      35 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function fo() {
  document.dispatchEvent(new Event("save-doc"));
}
function mo(t, e, n) {
  let { pluginType: i = void 0 } = e, s;
  function l() {
    s.click();
  }
  async function o(a) {
    var p;
    const f = (p = a.target.files) == null ? void 0 : p[0];
    if (!f) return;
    const c = await f.text(), d = f.name, m = new DOMParser().parseFromString(c, "application/xml");
    document.dispatchEvent(wa(m, d));
  }
  function r(a) {
    ee[a ? "unshift" : "push"](() => {
      s = a, n(1, s);
    });
  }
  return t.$$set = (a) => {
    "pluginType" in a && n(0, i = a.pluginType);
  }, [i, s, l, o, r];
}
class Ls extends he {
  constructor(e) {
    super(), de(this, e, mo, co, oe, { pluginType: 0 }, so);
  }
  get pluginType() {
    return this.$$.ctx[0];
  }
  set pluginType(e) {
    this.$$set({ pluginType: e }), y();
  }
}
me(Ls, { pluginType: {} }, [], [], !0);
function ho(t) {
  ot(t, "svelte-v32xo8", 'tscd-theme.svelte-v32xo8{font-family:"Roboto", sans-serif;height:var(--global-height);display:block;position:relative;background-color:var(--global-background-color)}');
}
function $n(t) {
  let e, n;
  return e = new Ls({
    props: { pluginType: (
      /*pluginType*/
      t[0]
    ) }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*pluginType*/
      1 && (l.pluginType = /*pluginType*/
      i[0]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function po(t) {
  let e, n, i, s, l, o, r, a, u, f = (
    /*mode*/
    t[1].isStandAlone && $n(t)
  );
  const c = (
    /*#slots*/
    t[8].default
  ), d = ie(
    c,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = j("link"), n = Q(), i = j("link"), s = Q(), l = j("link"), o = Q(), f && f.c(), r = Q(), a = j("tscd-theme"), d && d.c(), U(e, "rel", "stylesheet"), U(
        e,
        "href",
        /*fontCss*/
        t[3]
      ), U(i, "rel", "stylesheet"), U(
        i,
        "href",
        /*themeCss*/
        t[4]
      ), U(l, "rel", "stylesheet"), U(
        l,
        "href",
        /*svelteMaterialUiCss*/
        t[5]
      ), Kt(
        a,
        "style",
        /*cssDynamicStyles*/
        t[2]
      ), Kt(a, "class", "svelte-v32xo8");
    },
    m(m, p) {
      D(m, e, p), D(m, n, p), D(m, i, p), D(m, s, p), D(m, l, p), D(m, o, p), f && f.m(m, p), D(m, r, p), D(m, a, p), d && d.m(a, null), u = !0;
    },
    p(m, [p]) {
      /*mode*/
      m[1].isStandAlone ? f ? (f.p(m, p), p & /*mode*/
      2 && E(f, 1)) : (f = $n(m), f.c(), E(f, 1), f.m(r.parentNode, r)) : f && (ce(), C(f, 1, 1, () => {
        f = null;
      }), fe()), d && d.p && (!u || p & /*$$scope*/
      128) && le(
        d,
        c,
        m,
        /*$$scope*/
        m[7],
        u ? se(
          c,
          /*$$scope*/
          m[7],
          p,
          null
        ) : re(
          /*$$scope*/
          m[7]
        ),
        null
      ), (!u || p & /*cssDynamicStyles*/
      4) && Kt(
        a,
        "style",
        /*cssDynamicStyles*/
        m[2]
      );
    },
    i(m) {
      u || (E(f), E(d, m), u = !0);
    },
    o(m) {
      C(f), C(d, m), u = !1;
    },
    d(m) {
      m && (R(e), R(n), R(i), R(s), R(l), R(o), R(r), R(a)), f && f.d(m), d && d.d(m);
    }
  };
}
function go(t) {
  return t.isStorybook ? "inherit" : "calc(100vh - var(--header-height))";
}
function bo(t) {
  return t.isStorybook ? "0px" : t.isStandAlone ? "64px" : "112px";
}
function _o(t) {
  return t.isStorybook ? "inherit" : "var(--mdc-theme-surface)";
}
function vo(t, e, n) {
  let i, s, { $$slots: l = {}, $$scope: o } = e, { pluginType: r = void 0 } = e;
  const a = new URL(import.meta.url), u = new URL(ba, a).href, f = new URL(_a, a).href, c = new URL(va, a).href, d = {
    "header-height": "",
    "global-height": "",
    "global-background-color": ""
  };
  return t.$$set = (m) => {
    "pluginType" in m && n(0, r = m.pluginType), "$$scope" in m && n(7, o = m.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*mode*/
    2 && i.isStandAlone && Promise.resolve({              }), t.$$.dirty & /*mode*/
    2 && n(6, d["header-height"] = bo(i), d), t.$$.dirty & /*mode*/
    2 && n(6, d["global-height"] = go(i), d), t.$$.dirty & /*mode*/
    2 && n(6, d["global-background-color"] = _o(i), d), t.$$.dirty & /*cssFixedStyles*/
    64 && n(2, s = bs(d));
  }, n(1, i = {
    isStandAlone: !1,
    isStorybook: !1
  }), [
    r,
    i,
    s,
    u,
    f,
    c,
    d,
    o,
    l
  ];
}
class Ts extends he {
  constructor(e) {
    super(), de(this, e, vo, po, oe, { pluginType: 0 }, ho);
  }
  get pluginType() {
    return this.$$.ctx[0];
  }
  set pluginType(e) {
    this.$$set({ pluginType: e }), y();
  }
}
me(Ts, { pluginType: {} }, ["default"], [], !0);
function yo(t) {
  let e, n, i, s, l, o;
  const r = (
    /*#slots*/
    t[12].default
  ), a = ie(
    r,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let u = [
    {
      class: n = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "smui-paper": !0,
        "smui-paper--raised": (
          /*variant*/
          t[2] === "raised"
        ),
        "smui-paper--unelevated": (
          /*variant*/
          t[2] === "unelevated"
        ),
        "smui-paper--outlined": (
          /*variant*/
          t[2] === "outlined"
        ),
        ["smui-paper--elevation-z" + /*elevation*/
        t[5]]: (
          /*elevation*/
          t[5] !== 0 && /*variant*/
          t[2] === "raised"
        ),
        "smui-paper--rounded": !/*square*/
        t[3],
        ["smui-paper--color-" + /*color*/
        t[4]]: (
          /*color*/
          t[4] !== "default"
        ),
        "smui-paper-transition": (
          /*transition*/
          t[6]
        )
      })
    },
    /*$$restProps*/
    t[9]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = M(f, u[c]);
  return {
    c() {
      e = j("div"), a && a.c(), ne(e, f);
    },
    m(c, d) {
      D(c, e, d), a && a.m(e, null), t[13](e), s = !0, l || (o = [
        x(i = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[8].call(null, e)
        )
      ], l = !0);
    },
    p(c, [d]) {
      a && a.p && (!s || d & /*$$scope*/
      2048) && le(
        a,
        r,
        c,
        /*$$scope*/
        c[11],
        s ? se(
          r,
          /*$$scope*/
          c[11],
          d,
          null
        ) : re(
          /*$$scope*/
          c[11]
        ),
        null
      ), ne(e, f = te(u, [
        (!s || d & /*className, variant, elevation, square, color, transition*/
        126 && n !== (n = W({
          [
            /*className*/
            c[1]
          ]: !0,
          "smui-paper": !0,
          "smui-paper--raised": (
            /*variant*/
            c[2] === "raised"
          ),
          "smui-paper--unelevated": (
            /*variant*/
            c[2] === "unelevated"
          ),
          "smui-paper--outlined": (
            /*variant*/
            c[2] === "outlined"
          ),
          ["smui-paper--elevation-z" + /*elevation*/
          c[5]]: (
            /*elevation*/
            c[5] !== 0 && /*variant*/
            c[2] === "raised"
          ),
          "smui-paper--rounded": !/*square*/
          c[3],
          ["smui-paper--color-" + /*color*/
          c[4]]: (
            /*color*/
            c[4] !== "default"
          ),
          "smui-paper-transition": (
            /*transition*/
            c[6]
          )
        }))) && { class: n },
        d & /*$$restProps*/
        512 && /*$$restProps*/
        c[9]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (E(a, c), s = !0);
    },
    o(c) {
      C(a, c), s = !1;
    },
    d(c) {
      c && R(e), a && a.d(c), t[13](null), l = !1, Ee(o);
    }
  };
}
function Eo(t, e, n) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { variant: f = "raised" } = e, { square: c = !1 } = e, { color: d = "default" } = e, { elevation: m = 1 } = e, { transition: p = !1 } = e, g;
  function b() {
    return g;
  }
  function _(v) {
    ee[v ? "unshift" : "push"](() => {
      g = v, n(7, g);
    });
  }
  return t.$$set = (v) => {
    e = M(M({}, e), Ae(v)), n(9, s = Y(e, i)), "use" in v && n(0, a = v.use), "class" in v && n(1, u = v.class), "variant" in v && n(2, f = v.variant), "square" in v && n(3, c = v.square), "color" in v && n(4, d = v.color), "elevation" in v && n(5, m = v.elevation), "transition" in v && n(6, p = v.transition), "$$scope" in v && n(11, o = v.$$scope);
  }, [
    a,
    u,
    f,
    c,
    d,
    m,
    p,
    g,
    r,
    s,
    b,
    o,
    l,
    _
  ];
}
class kn extends he {
  constructor(e) {
    super(), de(this, e, Eo, yo, oe, {
      use: 0,
      class: 1,
      variant: 2,
      square: 3,
      color: 4,
      elevation: 5,
      transition: 6,
      getElement: 10
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get variant() {
    return this.$$.ctx[2];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get square() {
    return this.$$.ctx[3];
  }
  set square(e) {
    this.$$set({ square: e }), y();
  }
  get color() {
    return this.$$.ctx[4];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get elevation() {
    return this.$$.ctx[5];
  }
  set elevation(e) {
    this.$$set({ elevation: e }), y();
  }
  get transition() {
    return this.$$.ctx[6];
  }
  set transition(e) {
    this.$$set({ transition: e }), y();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
me(kn, { use: {}, class: {}, variant: {}, square: { type: "Boolean" }, color: {}, elevation: {}, transition: { type: "Boolean" } }, ["default"], ["getElement"], !0);
const ks = Ne({
  class: "smui-paper__content",
  tag: "div"
});
Ne({
  class: "smui-paper__title",
  tag: "h5"
});
Ne({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function Qn(t) {
  let e;
  return {
    c() {
      e = j("div"), U(e, "class", "mdc-button__touch");
    },
    m(n, i) {
      D(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Ao(t) {
  let e, n, i, s;
  const l = (
    /*#slots*/
    t[28].default
  ), o = ie(
    l,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let r = (
    /*touch*/
    t[6] && Qn()
  );
  return {
    c() {
      e = j("div"), n = Q(), o && o.c(), r && r.c(), i = we(), U(e, "class", "mdc-button__ripple");
    },
    m(a, u) {
      D(a, e, u), D(a, n, u), o && o.m(a, u), r && r.m(a, u), D(a, i, u), s = !0;
    },
    p(a, u) {
      o && o.p && (!s || u[0] & /*$$scope*/
      1073741824) && le(
        o,
        l,
        a,
        /*$$scope*/
        a[30],
        s ? se(
          l,
          /*$$scope*/
          a[30],
          u,
          null
        ) : re(
          /*$$scope*/
          a[30]
        ),
        null
      ), /*touch*/
      a[6] ? r || (r = Qn(), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    i(a) {
      s || (E(o, a), s = !0);
    },
    o(a) {
      C(o, a), s = !1;
    },
    d(a) {
      a && (R(e), R(n), R(i)), o && o.d(a), r && r.d(a);
    }
  };
}
function Co(t) {
  let e, n, i;
  const s = [
    { tag: (
      /*tag*/
      t[10]
    ) },
    {
      use: [
        [
          tt,
          {
            ripple: (
              /*ripple*/
              t[3]
            ),
            unbounded: !1,
            color: (
              /*color*/
              t[4]
            ),
            disabled: !!/*$$restProps*/
            t[23].disabled,
            addClass: (
              /*addClass*/
              t[19]
            ),
            removeClass: (
              /*removeClass*/
              t[20]
            ),
            addStyle: (
              /*addStyle*/
              t[21]
            )
          }
        ],
        /*forwardEvents*/
        t[17],
        .../*use*/
        t[0]
      ]
    },
    {
      class: W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-button": !0,
        "mdc-button--raised": (
          /*variant*/
          t[5] === "raised"
        ),
        "mdc-button--unelevated": (
          /*variant*/
          t[5] === "unelevated"
        ),
        "mdc-button--outlined": (
          /*variant*/
          t[5] === "outlined"
        ),
        "smui-button--color-secondary": (
          /*color*/
          t[4] === "secondary"
        ),
        "mdc-button--touch": (
          /*touch*/
          t[6]
        ),
        "mdc-card__action": (
          /*context*/
          t[18] === "card:action"
        ),
        "mdc-card__action--button": (
          /*context*/
          t[18] === "card:action"
        ),
        "mdc-dialog__button": (
          /*context*/
          t[18] === "dialog:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          t[18] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          t[18] === "top-app-bar:action"
        ),
        "mdc-snackbar__action": (
          /*context*/
          t[18] === "snackbar:actions"
        ),
        "mdc-banner__secondary-action": (
          /*context*/
          t[18] === "banner" && /*secondary*/
          t[8]
        ),
        "mdc-banner__primary-action": (
          /*context*/
          t[18] === "banner" && !/*secondary*/
          t[8]
        ),
        "mdc-tooltip__action": (
          /*context*/
          t[18] === "tooltip:rich-actions"
        ),
        .../*internalClasses*/
        t[12]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        t[13]
      ).map(pn).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    /*actionProp*/
    t[16],
    /*defaultProp*/
    t[15],
    /*secondaryProp*/
    t[14],
    { href: (
      /*href*/
      t[7]
    ) },
    /*$$restProps*/
    t[23]
  ];
  var l = (
    /*component*/
    t[9]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [Ao] },
      $$scope: { ctx: r }
    };
    for (let f = 0; f < s.length; f += 1)
      u = M(u, s[f]);
    return a !== void 0 && a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = M(u, te(s, [
      a[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        r[10]
      ) },
      a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            tt,
            {
              ripple: (
                /*ripple*/
                r[3]
              ),
              unbounded: !1,
              color: (
                /*color*/
                r[4]
              ),
              disabled: !!/*$$restProps*/
              r[23].disabled,
              addClass: (
                /*addClass*/
                r[19]
              ),
              removeClass: (
                /*removeClass*/
                r[20]
              ),
              addStyle: (
                /*addStyle*/
                r[21]
              )
            }
          ],
          /*forwardEvents*/
          r[17],
          .../*use*/
          r[0]
        ]
      },
      a[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: W({
          [
            /*className*/
            r[1]
          ]: !0,
          "mdc-button": !0,
          "mdc-button--raised": (
            /*variant*/
            r[5] === "raised"
          ),
          "mdc-button--unelevated": (
            /*variant*/
            r[5] === "unelevated"
          ),
          "mdc-button--outlined": (
            /*variant*/
            r[5] === "outlined"
          ),
          "smui-button--color-secondary": (
            /*color*/
            r[4] === "secondary"
          ),
          "mdc-button--touch": (
            /*touch*/
            r[6]
          ),
          "mdc-card__action": (
            /*context*/
            r[18] === "card:action"
          ),
          "mdc-card__action--button": (
            /*context*/
            r[18] === "card:action"
          ),
          "mdc-dialog__button": (
            /*context*/
            r[18] === "dialog:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            r[18] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            r[18] === "top-app-bar:action"
          ),
          "mdc-snackbar__action": (
            /*context*/
            r[18] === "snackbar:actions"
          ),
          "mdc-banner__secondary-action": (
            /*context*/
            r[18] === "banner" && /*secondary*/
            r[8]
          ),
          "mdc-banner__primary-action": (
            /*context*/
            r[18] === "banner" && !/*secondary*/
            r[8]
          ),
          "mdc-tooltip__action": (
            /*context*/
            r[18] === "tooltip:rich-actions"
          ),
          .../*internalClasses*/
          r[12]
        })
      },
      a[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          r[13]
        ).map(pn).concat([
          /*style*/
          r[2]
        ]).join(" ")
      },
      a[0] & /*actionProp*/
      65536 && ue(
        /*actionProp*/
        r[16]
      ),
      a[0] & /*defaultProp*/
      32768 && ue(
        /*defaultProp*/
        r[15]
      ),
      a[0] & /*secondaryProp*/
      16384 && ue(
        /*secondaryProp*/
        r[14]
      ),
      a[0] & /*href*/
      128 && { href: (
        /*href*/
        r[7]
      ) },
      a[0] & /*$$restProps*/
      8388608 && ue(
        /*$$restProps*/
        r[23]
      )
    ]))), { props: u };
  }
  return l && (e = je(l, o(t)), t[29](e), e.$on(
    "click",
    /*handleClick*/
    t[22]
  )), {
    c() {
      e && G(e.$$.fragment), n = we();
    },
    m(r, a) {
      e && z(e, r, a), D(r, n, a), i = !0;
    },
    p(r, a) {
      if (a[0] & /*component*/
      512 && l !== (l = /*component*/
      r[9])) {
        if (e) {
          ce();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            V(u, 1);
          }), fe();
        }
        l ? (e = je(l, o(r, a)), r[29](e), e.$on(
          "click",
          /*handleClick*/
          r[22]
        ), G(e.$$.fragment), E(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (l) {
        const u = a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? te(s, [
          a[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            r[10]
          ) },
          a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                tt,
                {
                  ripple: (
                    /*ripple*/
                    r[3]
                  ),
                  unbounded: !1,
                  color: (
                    /*color*/
                    r[4]
                  ),
                  disabled: !!/*$$restProps*/
                  r[23].disabled,
                  addClass: (
                    /*addClass*/
                    r[19]
                  ),
                  removeClass: (
                    /*removeClass*/
                    r[20]
                  ),
                  addStyle: (
                    /*addStyle*/
                    r[21]
                  )
                }
              ],
              /*forwardEvents*/
              r[17],
              .../*use*/
              r[0]
            ]
          },
          a[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: W({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-button": !0,
              "mdc-button--raised": (
                /*variant*/
                r[5] === "raised"
              ),
              "mdc-button--unelevated": (
                /*variant*/
                r[5] === "unelevated"
              ),
              "mdc-button--outlined": (
                /*variant*/
                r[5] === "outlined"
              ),
              "smui-button--color-secondary": (
                /*color*/
                r[4] === "secondary"
              ),
              "mdc-button--touch": (
                /*touch*/
                r[6]
              ),
              "mdc-card__action": (
                /*context*/
                r[18] === "card:action"
              ),
              "mdc-card__action--button": (
                /*context*/
                r[18] === "card:action"
              ),
              "mdc-dialog__button": (
                /*context*/
                r[18] === "dialog:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                r[18] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                r[18] === "top-app-bar:action"
              ),
              "mdc-snackbar__action": (
                /*context*/
                r[18] === "snackbar:actions"
              ),
              "mdc-banner__secondary-action": (
                /*context*/
                r[18] === "banner" && /*secondary*/
                r[8]
              ),
              "mdc-banner__primary-action": (
                /*context*/
                r[18] === "banner" && !/*secondary*/
                r[8]
              ),
              "mdc-tooltip__action": (
                /*context*/
                r[18] === "tooltip:rich-actions"
              ),
              .../*internalClasses*/
              r[12]
            })
          },
          a[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              r[13]
            ).map(pn).concat([
              /*style*/
              r[2]
            ]).join(" ")
          },
          a[0] & /*actionProp*/
          65536 && ue(
            /*actionProp*/
            r[16]
          ),
          a[0] & /*defaultProp*/
          32768 && ue(
            /*defaultProp*/
            r[15]
          ),
          a[0] & /*secondaryProp*/
          16384 && ue(
            /*secondaryProp*/
            r[14]
          ),
          a[0] & /*href*/
          128 && { href: (
            /*href*/
            r[7]
          ) },
          a[0] & /*$$restProps*/
          8388608 && ue(
            /*$$restProps*/
            r[23]
          )
        ]) : {};
        a[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && E(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[29](null), e && V(e, r);
    }
  };
}
const pn = ([t, e]) => `${t}: ${e};`;
function Io(t, e, n) {
  let i, s, l;
  const o = [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "getElement"
  ];
  let r = Y(e, o), { $$slots: a = {}, $$scope: u } = e;
  const f = Ie(ye());
  let { use: c = [] } = e, { class: d = "" } = e, { style: m = "" } = e, { ripple: p = !0 } = e, { color: g = "primary" } = e, { variant: b = "text" } = e, { touch: _ = !1 } = e, { href: v = void 0 } = e, { action: L = "close" } = e, { defaultAction: A = !1 } = e, { secondary: I = !1 } = e, T, h = {}, k = {}, X = Xe("SMUI:button:context"), { component: Z = Ve } = e, { tag: P = Z === Ve ? v == null ? "button" : "a" : void 0 } = e, $ = r.disabled;
  Ue("SMUI:label:context", "button"), Ue("SMUI:icon:context", "button");
  function O(w) {
    h[w] || n(12, h[w] = !0, h);
  }
  function H(w) {
    (!(w in h) || h[w]) && n(12, h[w] = !1, h);
  }
  function ve(w, K) {
    k[w] != K && (K === "" || K == null ? (delete k[w], n(13, k)) : n(13, k[w] = K, k));
  }
  function be() {
    X === "banner" && Te(_e(), I ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function _e() {
    return T.getElement();
  }
  function F(w) {
    ee[w ? "unshift" : "push"](() => {
      T = w, n(11, T);
    });
  }
  return t.$$set = (w) => {
    n(31, e = M(M({}, e), Ae(w))), n(23, r = Y(e, o)), "use" in w && n(0, c = w.use), "class" in w && n(1, d = w.class), "style" in w && n(2, m = w.style), "ripple" in w && n(3, p = w.ripple), "color" in w && n(4, g = w.color), "variant" in w && n(5, b = w.variant), "touch" in w && n(6, _ = w.touch), "href" in w && n(7, v = w.href), "action" in w && n(24, L = w.action), "defaultAction" in w && n(25, A = w.defaultAction), "secondary" in w && n(8, I = w.secondary), "component" in w && n(9, Z = w.component), "tag" in w && n(10, P = w.tag), "$$scope" in w && n(30, u = w.$$scope);
  }, t.$$.update = () => {
    if (n(16, i = X === "dialog:action" && L != null ? { "data-mdc-dialog-action": L } : { action: e.action }), n(15, s = X === "dialog:action" && A ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), n(14, l = X === "banner" ? {} : { secondary: e.secondary }), $ !== r.disabled) {
      if (T) {
        const w = _e();
        "blur" in w && w.blur();
      }
      n(27, $ = r.disabled);
    }
  }, e = Ae(e), [
    c,
    d,
    m,
    p,
    g,
    b,
    _,
    v,
    I,
    Z,
    P,
    T,
    h,
    k,
    l,
    s,
    i,
    f,
    X,
    O,
    H,
    ve,
    be,
    r,
    L,
    A,
    _e,
    $,
    a,
    F,
    u
  ];
}
class On extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      Io,
      Co,
      oe,
      {
        use: 0,
        class: 1,
        style: 2,
        ripple: 3,
        color: 4,
        variant: 5,
        touch: 6,
        href: 7,
        action: 24,
        defaultAction: 25,
        secondary: 8,
        component: 9,
        tag: 10,
        getElement: 26
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get ripple() {
    return this.$$.ctx[3];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), y();
  }
  get color() {
    return this.$$.ctx[4];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get variant() {
    return this.$$.ctx[5];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get touch() {
    return this.$$.ctx[6];
  }
  set touch(e) {
    this.$$set({ touch: e }), y();
  }
  get href() {
    return this.$$.ctx[7];
  }
  set href(e) {
    this.$$set({ href: e }), y();
  }
  get action() {
    return this.$$.ctx[24];
  }
  set action(e) {
    this.$$set({ action: e }), y();
  }
  get defaultAction() {
    return this.$$.ctx[25];
  }
  set defaultAction(e) {
    this.$$set({ defaultAction: e }), y();
  }
  get secondary() {
    return this.$$.ctx[8];
  }
  set secondary(e) {
    this.$$set({ secondary: e }), y();
  }
  get component() {
    return this.$$.ctx[9];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[10];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[26];
  }
}
me(On, { use: {}, class: {}, style: {}, ripple: { type: "Boolean" }, color: {}, variant: {}, touch: { type: "Boolean" }, href: {}, action: {}, defaultAction: { type: "Boolean" }, secondary: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function So(t) {
  let e, n, i, s, l, o;
  const r = (
    /*#slots*/
    t[8].default
  ), a = ie(
    r,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let u = [
    {
      class: n = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "smui-button__group": !0,
        "smui-button__group--raised": (
          /*variant*/
          t[2] === "raised"
        )
      })
    },
    /*$$restProps*/
    t[5]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = M(f, u[c]);
  return {
    c() {
      e = j("div"), a && a.c(), ne(e, f);
    },
    m(c, d) {
      D(c, e, d), a && a.m(e, null), t[9](e), s = !0, l || (o = [
        x(i = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], l = !0);
    },
    p(c, [d]) {
      a && a.p && (!s || d & /*$$scope*/
      128) && le(
        a,
        r,
        c,
        /*$$scope*/
        c[7],
        s ? se(
          r,
          /*$$scope*/
          c[7],
          d,
          null
        ) : re(
          /*$$scope*/
          c[7]
        ),
        null
      ), ne(e, f = te(u, [
        (!s || d & /*className, variant*/
        6 && n !== (n = W({
          [
            /*className*/
            c[1]
          ]: !0,
          "smui-button__group": !0,
          "smui-button__group--raised": (
            /*variant*/
            c[2] === "raised"
          )
        }))) && { class: n },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        c[5]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (E(a, c), s = !0);
    },
    o(c) {
      C(a, c), s = !1;
    },
    d(c) {
      c && R(e), a && a.d(c), t[9](null), l = !1, Ee(o);
    }
  };
}
function Lo(t, e, n) {
  const i = ["use", "class", "variant", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { variant: f = "text" } = e, c;
  function d() {
    return c;
  }
  function m(p) {
    ee[p ? "unshift" : "push"](() => {
      c = p, n(3, c);
    });
  }
  return t.$$set = (p) => {
    e = M(M({}, e), Ae(p)), n(5, s = Y(e, i)), "use" in p && n(0, a = p.use), "class" in p && n(1, u = p.class), "variant" in p && n(2, f = p.variant), "$$scope" in p && n(7, o = p.$$scope);
  }, [
    a,
    u,
    f,
    c,
    r,
    s,
    d,
    o,
    l,
    m
  ];
}
class To extends he {
  constructor(e) {
    super(), de(this, e, Lo, So, oe, {
      use: 0,
      class: 1,
      variant: 2,
      getElement: 6
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get variant() {
    return this.$$.ctx[2];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
me(To, { use: {}, class: {}, variant: {} }, ["default"], ["getElement"], !0);
function ko(t) {
  let e, n, i, s, l, o;
  const r = (
    /*#slots*/
    t[13].default
  ), a = ie(
    r,
    t,
    /*$$scope*/
    t[12],
    null
  );
  let u = [
    {
      class: n = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "smui-accordion": !0,
        "smui-accordion--multiple": (
          /*multiple*/
          t[2]
        ),
        "smui-accordion--with-open-dialog": (
          /*withOpenDialog*/
          t[4]
        )
      })
    },
    /*$$restProps*/
    t[10]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = M(f, u[c]);
  return {
    c() {
      e = j("div"), a && a.c(), ne(e, f);
    },
    m(c, d) {
      D(c, e, d), a && a.m(e, null), t[14](e), s = !0, l || (o = [
        x(i = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[5].call(null, e)
        ),
        ge(
          e,
          "SMUIAccordionPanel:mount",
          /*handlePanelMount*/
          t[6]
        ),
        ge(
          e,
          "SMUIAccordionPanel:unmount",
          /*handlePanelUnmount*/
          t[7]
        ),
        ge(
          e,
          "SMUIAccordionPanel:activate",
          /*handlePanelActivate*/
          t[8]
        ),
        ge(
          e,
          "SMUIAccordionPanel:opening",
          /*handlePanelOpening*/
          t[9]
        ),
        ge(
          e,
          "SMUIDialog:opening",
          /*SMUIDialog_opening_handler*/
          t[15],
          !0
        ),
        ge(
          e,
          "SMUIDialog:closed",
          /*SMUIDialog_closed_handler*/
          t[16],
          !0
        )
      ], l = !0);
    },
    p(c, [d]) {
      a && a.p && (!s || d & /*$$scope*/
      4096) && le(
        a,
        r,
        c,
        /*$$scope*/
        c[12],
        s ? se(
          r,
          /*$$scope*/
          c[12],
          d,
          null
        ) : re(
          /*$$scope*/
          c[12]
        ),
        null
      ), ne(e, f = te(u, [
        (!s || d & /*className, multiple, withOpenDialog*/
        22 && n !== (n = W({
          [
            /*className*/
            c[1]
          ]: !0,
          "smui-accordion": !0,
          "smui-accordion--multiple": (
            /*multiple*/
            c[2]
          ),
          "smui-accordion--with-open-dialog": (
            /*withOpenDialog*/
            c[4]
          )
        }))) && { class: n },
        d & /*$$restProps*/
        1024 && /*$$restProps*/
        c[10]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (E(a, c), s = !0);
    },
    o(c) {
      C(a, c), s = !1;
    },
    d(c) {
      c && R(e), a && a.d(c), t[14](null), l = !1, Ee(o);
    }
  };
}
function Oo(t, e, n) {
  const i = ["use", "class", "multiple", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { multiple: f = !1 } = e, c, d = /* @__PURE__ */ new Set(), m = !1;
  function p(T) {
    const h = T.detail;
    if (T.stopPropagation(), !f && h.open) {
      const k = Array.from(d).find((X) => X.open);
      k && k.setOpen(!1);
    }
    d.add(h);
  }
  function g(T) {
    const h = T.detail;
    d.has(h) && (T.stopPropagation(), d.delete(h));
  }
  function b(T) {
    const { accessor: h } = T.detail;
    if (d.has(h)) {
      if (!f && !h.open) {
        const k = Array.from(d).find((X) => X.open);
        k && k.setOpen(!1);
      }
      h.setOpen(!h.open);
    }
  }
  function _(T) {
    const { accessor: h } = T.detail;
    d.has(h) && (f || Array.from(d).filter((X) => X !== h && X.open).forEach((X) => X.setOpen(!1)));
  }
  function v() {
    return c;
  }
  function L(T) {
    ee[T ? "unshift" : "push"](() => {
      c = T, n(3, c);
    });
  }
  const A = () => n(4, m = !0), I = () => n(4, m = !1);
  return t.$$set = (T) => {
    e = M(M({}, e), Ae(T)), n(10, s = Y(e, i)), "use" in T && n(0, a = T.use), "class" in T && n(1, u = T.class), "multiple" in T && n(2, f = T.multiple), "$$scope" in T && n(12, o = T.$$scope);
  }, [
    a,
    u,
    f,
    c,
    m,
    r,
    p,
    g,
    b,
    _,
    s,
    v,
    o,
    l,
    L,
    A,
    I
  ];
}
class Os extends he {
  constructor(e) {
    super(), de(this, e, Oo, ko, oe, {
      use: 0,
      class: 1,
      multiple: 2,
      getElement: 11
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get multiple() {
    return this.$$.ctx[2];
  }
  set multiple(e) {
    this.$$set({ multiple: e }), y();
  }
  get getElement() {
    return this.$$.ctx[11];
  }
}
me(Os, { use: {}, class: {}, multiple: { type: "Boolean" } }, ["default"], ["getElement"], !0);
function wo(t) {
  let e;
  const n = (
    /*#slots*/
    t[23].default
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[25],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l & /*$$scope*/
      33554432) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[25],
        e ? se(
          n,
          /*$$scope*/
          s[25],
          l,
          null
        ) : re(
          /*$$scope*/
          s[25]
        ),
        null
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Po(t) {
  let e, n;
  const i = [
    { use: (
      /*usePass*/
      t[11]
    ) },
    {
      class: W({
        [
          /*className*/
          t[1]
        ]: !0,
        "smui-accordion__panel": !0,
        "smui-accordion__panel--open": (
          /*open*/
          t[0]
        ),
        "smui-accordion__panel--opened": (
          /*opened*/
          t[10]
        ),
        "smui-accordion__panel--disabled": (
          /*disabled*/
          t[5]
        ),
        "smui-accordion__panel--non-interactive": (
          /*nonInteractive*/
          t[6]
        ),
        "smui-accordion__panel--raised": (
          /*variant*/
          t[2] === "raised"
        ),
        "smui-accordion__panel--extend": (
          /*extend*/
          t[7]
        ),
        ["smui-accordion__panel--elevation-z" + /*extend*/
        (t[7] && /*open*/
        t[0] ? (
          /*extendedElevation*/
          t[8]
        ) : (
          /*elevation*/
          t[4]
        ))]: (
          /*elevation*/
          t[4] !== 0 && /*variant*/
          t[2] === "raised" || /*extendedElevation*/
          t[8] !== 0 && /*variant*/
          t[2] === "raised" && /*extend*/
          t[7] && /*open*/
          t[0]
        )
      })
    },
    { color: (
      /*color*/
      t[3]
    ) },
    {
      variant: (
        /*variant*/
        t[2] === "raised" ? "unelevated" : (
          /*variant*/
          t[2]
        )
      )
    },
    /*$$restProps*/
    t[16]
  ];
  let s = {
    $$slots: { default: [wo] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < i.length; l += 1)
    s = M(s, i[l]);
  return e = new kn({ props: s }), t[24](e), e.$on(
    "SMUIAccordionHeader:activate",
    /*handleHeaderActivate*/
    t[15]
  ), {
    c() {
      G(e.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), n = !0;
    },
    p(l, [o]) {
      const r = o & /*usePass, className, open, opened, disabled, nonInteractive, variant, extend, extendedElevation, elevation, color, $$restProps*/
      69119 ? te(i, [
        o & /*usePass*/
        2048 && { use: (
          /*usePass*/
          l[11]
        ) },
        o & /*className, open, opened, disabled, nonInteractive, variant, extend, extendedElevation, elevation*/
        1527 && {
          class: W({
            [
              /*className*/
              l[1]
            ]: !0,
            "smui-accordion__panel": !0,
            "smui-accordion__panel--open": (
              /*open*/
              l[0]
            ),
            "smui-accordion__panel--opened": (
              /*opened*/
              l[10]
            ),
            "smui-accordion__panel--disabled": (
              /*disabled*/
              l[5]
            ),
            "smui-accordion__panel--non-interactive": (
              /*nonInteractive*/
              l[6]
            ),
            "smui-accordion__panel--raised": (
              /*variant*/
              l[2] === "raised"
            ),
            "smui-accordion__panel--extend": (
              /*extend*/
              l[7]
            ),
            ["smui-accordion__panel--elevation-z" + /*extend*/
            (l[7] && /*open*/
            l[0] ? (
              /*extendedElevation*/
              l[8]
            ) : (
              /*elevation*/
              l[4]
            ))]: (
              /*elevation*/
              l[4] !== 0 && /*variant*/
              l[2] === "raised" || /*extendedElevation*/
              l[8] !== 0 && /*variant*/
              l[2] === "raised" && /*extend*/
              l[7] && /*open*/
              l[0]
            )
          })
        },
        o & /*color*/
        8 && { color: (
          /*color*/
          l[3]
        ) },
        o & /*variant*/
        4 && {
          variant: (
            /*variant*/
            l[2] === "raised" ? "unelevated" : (
              /*variant*/
              l[2]
            )
          )
        },
        o & /*$$restProps*/
        65536 && ue(
          /*$$restProps*/
          l[16]
        )
      ]) : {};
      o & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      t[24](null), V(e, l);
    }
  };
}
function Ro(t, e, n) {
  let i;
  const s = [
    "use",
    "class",
    "variant",
    "color",
    "elevation",
    "open",
    "disabled",
    "nonInteractive",
    "extend",
    "extendedElevation",
    "isOpen",
    "setOpen",
    "getElement"
  ];
  let l = Y(e, s), o, r, a, { $$slots: u = {}, $$scope: f } = e;
  const c = Ie(ye());
  let { use: d = [] } = e, { class: m = "" } = e, { variant: p = "raised" } = e, { color: g = "default" } = e, { elevation: b = 1 } = e, { open: _ = !1 } = e, { disabled: v = !1 } = e, { nonInteractive: L = !1 } = e, { extend: A = !1 } = e, { extendedElevation: I = 3 } = e, T, h, k = _;
  const X = Ke(v);
  $e(t, X, (F) => n(28, a = F)), Ue("SMUI:accordion:panel:disabled", X);
  const Z = Ke(L);
  $e(t, Z, (F) => n(27, r = F)), Ue("SMUI:accordion:panel:nonInteractive", Z);
  const P = Ke(_);
  $e(t, P, (F) => n(26, o = F)), Ue("SMUI:accordion:panel:open", P);
  let $ = _;
  nt(() => (n(21, h = {
    get open() {
      return _;
    },
    setOpen: ve
  }), Array.from(be().children).forEach((F) => {
    F.classList.contains("smui-paper__content") && F.setAttribute("aria-hidden", _ ? "false" : "true");
  }), Te(be(), "SMUIAccordionPanel:mount", h), () => {
    Te(be(), "SMUIAccordionPanel:unmount", h);
  }));
  function O(F) {
    F.stopPropagation(), !(v || L) && Te(be(), "SMUIAccordionPanel:activate", { accessor: h, event: F });
  }
  function H() {
    return _;
  }
  function ve(F) {
    n(0, _ = F);
  }
  function be() {
    return T.getElement();
  }
  function _e(F) {
    ee[F ? "unshift" : "push"](() => {
      T = F, n(9, T);
    });
  }
  return t.$$set = (F) => {
    e = M(M({}, e), Ae(F)), n(16, l = Y(e, s)), "use" in F && n(17, d = F.use), "class" in F && n(1, m = F.class), "variant" in F && n(2, p = F.variant), "color" in F && n(3, g = F.color), "elevation" in F && n(4, b = F.elevation), "open" in F && n(0, _ = F.open), "disabled" in F && n(5, v = F.disabled), "nonInteractive" in F && n(6, L = F.nonInteractive), "extend" in F && n(7, A = F.extend), "extendedElevation" in F && n(8, I = F.extendedElevation), "$$scope" in F && n(25, f = F.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*use*/
    131072 && n(11, i = [c, ...d]), t.$$.dirty & /*disabled*/
    32 && Xt(X, a = v, a), t.$$.dirty & /*nonInteractive*/
    64 && Xt(Z, r = L, r), t.$$.dirty & /*open*/
    1 && Xt(P, o = _, o), t.$$.dirty & /*previousOpen, open, accessor*/
    6291457 && $ !== _ && (n(22, $ = _), Array.from(be().children).forEach((F) => {
      if (F.classList.contains("smui-paper__content")) {
        const w = F;
        if (_) {
          w.classList.add("smui-accordion__content--no-transition"), w.classList.add("smui-accordion__content--force-open");
          const { height: K } = w.getBoundingClientRect();
          w.classList.remove("smui-accordion__content--force-open"), w.getBoundingClientRect(), w.classList.remove("smui-accordion__content--no-transition"), w.style.height = K + "px", w.addEventListener(
            "transitionend",
            () => {
              w && (w.style.height = ""), n(10, k = _), Te(be(), "SMUIAccordionPanel:opened", { accessor: h });
            },
            { once: !0 }
          );
        } else
          w.style.height = w.getBoundingClientRect().height + "px", w.getBoundingClientRect(), requestAnimationFrame(() => {
            w && (w.style.height = ""), Te(be(), "SMUIAccordionPanel:closed", { accessor: h });
          }), n(10, k = !1);
        w.setAttribute("aria-hidden", _ ? "false" : "true");
      }
    }), Te(
      be(),
      _ ? "SMUIAccordionPanel:opening" : "SMUIAccordionPanel:closing",
      { accessor: h }
    ));
  }, [
    _,
    m,
    p,
    g,
    b,
    v,
    L,
    A,
    I,
    T,
    k,
    i,
    X,
    Z,
    P,
    O,
    l,
    d,
    H,
    ve,
    be,
    h,
    $,
    u,
    _e,
    f
  ];
}
class wn extends he {
  constructor(e) {
    super(), de(this, e, Ro, Po, oe, {
      use: 17,
      class: 1,
      variant: 2,
      color: 3,
      elevation: 4,
      open: 0,
      disabled: 5,
      nonInteractive: 6,
      extend: 7,
      extendedElevation: 8,
      isOpen: 18,
      setOpen: 19,
      getElement: 20
    });
  }
  get use() {
    return this.$$.ctx[17];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get variant() {
    return this.$$.ctx[2];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get color() {
    return this.$$.ctx[3];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get elevation() {
    return this.$$.ctx[4];
  }
  set elevation(e) {
    this.$$set({ elevation: e }), y();
  }
  get open() {
    return this.$$.ctx[0];
  }
  set open(e) {
    this.$$set({ open: e }), y();
  }
  get disabled() {
    return this.$$.ctx[5];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), y();
  }
  get nonInteractive() {
    return this.$$.ctx[6];
  }
  set nonInteractive(e) {
    this.$$set({ nonInteractive: e }), y();
  }
  get extend() {
    return this.$$.ctx[7];
  }
  set extend(e) {
    this.$$set({ extend: e }), y();
  }
  get extendedElevation() {
    return this.$$.ctx[8];
  }
  set extendedElevation(e) {
    this.$$set({ extendedElevation: e }), y();
  }
  get isOpen() {
    return this.$$.ctx[18];
  }
  get setOpen() {
    return this.$$.ctx[19];
  }
  get getElement() {
    return this.$$.ctx[20];
  }
}
me(wn, { use: {}, class: {}, variant: {}, color: {}, elevation: {}, open: { type: "Boolean" }, disabled: { type: "Boolean" }, nonInteractive: { type: "Boolean" }, extend: { type: "Boolean" }, extendedElevation: {} }, ["default"], ["isOpen", "setOpen", "getElement"], !0);
const Do = (t) => ({}), xn = (t) => ({}), Bo = (t) => ({}), ei = (t) => ({});
function ti(t) {
  let e;
  return {
    c() {
      e = j("div"), U(e, "class", "smui-accordion__header__ripple");
    },
    m(n, i) {
      D(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function ni(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[23].description
  ), s = ie(
    i,
    t,
    /*$$scope*/
    t[22],
    ei
  );
  return {
    c() {
      e = j("div"), s && s.c(), U(e, "class", "smui-accordion__header__description");
    },
    m(l, o) {
      D(l, e, o), s && s.m(e, null), n = !0;
    },
    p(l, o) {
      s && s.p && (!n || o & /*$$scope*/
      4194304) && le(
        s,
        i,
        l,
        /*$$scope*/
        l[22],
        n ? se(
          i,
          /*$$scope*/
          l[22],
          o,
          Bo
        ) : re(
          /*$$scope*/
          l[22]
        ),
        ei
      );
    },
    i(l) {
      n || (E(s, l), n = !0);
    },
    o(l) {
      C(s, l), n = !1;
    },
    d(l) {
      l && R(e), s && s.d(l);
    }
  };
}
function ii(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[23].icon
  ), s = ie(
    i,
    t,
    /*$$scope*/
    t[22],
    xn
  );
  return {
    c() {
      e = j("div"), s && s.c(), U(e, "class", "smui-accordion__header__icon");
    },
    m(l, o) {
      D(l, e, o), s && s.m(e, null), n = !0;
    },
    p(l, o) {
      s && s.p && (!n || o & /*$$scope*/
      4194304) && le(
        s,
        i,
        l,
        /*$$scope*/
        l[22],
        n ? se(
          i,
          /*$$scope*/
          l[22],
          o,
          Do
        ) : re(
          /*$$scope*/
          l[22]
        ),
        xn
      );
    },
    i(l) {
      n || (E(s, l), n = !0);
    },
    o(l) {
      C(s, l), n = !1;
    },
    d(l) {
      l && R(e), s && s.d(l);
    }
  };
}
function Mo(t) {
  let e, n, i, s, l, o, r, a, u, f, c, d, m, p, g, b = (
    /*ripple*/
    t[3] && ti()
  );
  const _ = (
    /*#slots*/
    t[23].default
  ), v = ie(
    _,
    t,
    /*$$scope*/
    t[22],
    null
  );
  let L = (
    /*$$slots*/
    t[20].description && ni(t)
  ), A = (
    /*$$slots*/
    t[20].icon && ii(t)
  ), I = [
    {
      class: r = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "smui-accordion__header": !0,
        .../*internalClasses*/
        t[5]
      })
    },
    {
      style: a = Object.entries(
        /*internalStyles*/
        t[6]
      ).map(si).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    { role: "button" },
    {
      tabindex: u = /*$nonInteractive*/
      t[7] ? -1 : 0
    },
    {
      "aria-expanded": f = /*$open*/
      t[9] ? "true" : "false"
    },
    /*$$restProps*/
    t[19]
  ], T = {};
  for (let h = 0; h < I.length; h += 1)
    T = M(T, I[h]);
  return {
    c() {
      e = j("div"), b && b.c(), n = Q(), i = j("div"), v && v.c(), l = Q(), L && L.c(), o = Q(), A && A.c(), U(i, "class", s = W({
        "smui-accordion__header__title": !0,
        "smui-accordion__header__title--with-description": (
          /*$$slots*/
          t[20].description
        )
      })), ne(e, T);
    },
    m(h, k) {
      D(h, e, k), b && b.m(e, null), J(e, n), J(e, i), v && v.m(i, null), J(e, l), L && L.m(e, null), J(e, o), A && A.m(e, null), t[24](e), m = !0, p || (g = [
        x(c = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[10].call(null, e)
        ),
        x(d = tt.call(null, e, {
          ripple: (
            /*ripple*/
            t[3]
          ),
          unbounded: !1,
          surface: !/*$nonInteractive*/
          t[7],
          disabled: (
            /*$disabled*/
            t[8] || /*$nonInteractive*/
            t[7]
          ),
          addClass: (
            /*addClass*/
            t[16]
          ),
          removeClass: (
            /*removeClass*/
            t[17]
          ),
          addStyle: (
            /*addStyle*/
            t[18]
          )
        })),
        ge(
          e,
          "click",
          /*handleClick*/
          t[14]
        ),
        ge(
          e,
          "keydown",
          /*handleKeyDown*/
          t[15]
        )
      ], p = !0);
    },
    p(h, [k]) {
      /*ripple*/
      h[3] ? b || (b = ti(), b.c(), b.m(e, n)) : b && (b.d(1), b = null), v && v.p && (!m || k & /*$$scope*/
      4194304) && le(
        v,
        _,
        h,
        /*$$scope*/
        h[22],
        m ? se(
          _,
          /*$$scope*/
          h[22],
          k,
          null
        ) : re(
          /*$$scope*/
          h[22]
        ),
        null
      ), (!m || k & /*$$slots*/
      1048576 && s !== (s = W({
        "smui-accordion__header__title": !0,
        "smui-accordion__header__title--with-description": (
          /*$$slots*/
          h[20].description
        )
      }))) && U(i, "class", s), /*$$slots*/
      h[20].description ? L ? (L.p(h, k), k & /*$$slots*/
      1048576 && E(L, 1)) : (L = ni(h), L.c(), E(L, 1), L.m(e, o)) : L && (ce(), C(L, 1, 1, () => {
        L = null;
      }), fe()), /*$$slots*/
      h[20].icon ? A ? (A.p(h, k), k & /*$$slots*/
      1048576 && E(A, 1)) : (A = ii(h), A.c(), E(A, 1), A.m(e, null)) : A && (ce(), C(A, 1, 1, () => {
        A = null;
      }), fe()), ne(e, T = te(I, [
        (!m || k & /*className, internalClasses*/
        34 && r !== (r = W({
          [
            /*className*/
            h[1]
          ]: !0,
          "smui-accordion__header": !0,
          .../*internalClasses*/
          h[5]
        }))) && { class: r },
        (!m || k & /*internalStyles, style*/
        68 && a !== (a = Object.entries(
          /*internalStyles*/
          h[6]
        ).map(si).concat([
          /*style*/
          h[2]
        ]).join(" "))) && { style: a },
        { role: "button" },
        (!m || k & /*$nonInteractive*/
        128 && u !== (u = /*$nonInteractive*/
        h[7] ? -1 : 0)) && { tabindex: u },
        (!m || k & /*$open*/
        512 && f !== (f = /*$open*/
        h[9] ? "true" : "false")) && {
          "aria-expanded": f
        },
        k & /*$$restProps*/
        524288 && /*$$restProps*/
        h[19]
      ])), c && pe(c.update) && k & /*use*/
      1 && c.update.call(
        null,
        /*use*/
        h[0]
      ), d && pe(d.update) && k & /*ripple, $nonInteractive, $disabled*/
      392 && d.update.call(null, {
        ripple: (
          /*ripple*/
          h[3]
        ),
        unbounded: !1,
        surface: !/*$nonInteractive*/
        h[7],
        disabled: (
          /*$disabled*/
          h[8] || /*$nonInteractive*/
          h[7]
        ),
        addClass: (
          /*addClass*/
          h[16]
        ),
        removeClass: (
          /*removeClass*/
          h[17]
        ),
        addStyle: (
          /*addStyle*/
          h[18]
        )
      });
    },
    i(h) {
      m || (E(v, h), E(L), E(A), m = !0);
    },
    o(h) {
      C(v, h), C(L), C(A), m = !1;
    },
    d(h) {
      h && R(e), b && b.d(), v && v.d(h), L && L.d(), A && A.d(), t[24](null), p = !1, Ee(g);
    }
  };
}
const si = ([t, e]) => `${t}: ${e};`;
function Fo(t, e, n) {
  const i = ["use", "class", "style", "ripple", "getElement"];
  let s = Y(e, i), l, o, r, { $$slots: a = {}, $$scope: u } = e;
  const f = os(a), c = Ie(ye());
  let { use: d = [] } = e, { class: m = "" } = e, { style: p = "" } = e, { ripple: g = !0 } = e, b, _ = {}, v = {};
  const L = Xe("SMUI:accordion:panel:disabled");
  $e(t, L, (O) => n(8, o = O));
  const A = Xe("SMUI:accordion:panel:nonInteractive");
  $e(t, A, (O) => n(7, l = O));
  const I = Xe("SMUI:accordion:panel:open");
  $e(t, I, (O) => n(9, r = O));
  function T(O) {
    O = O, O.button === 0 && Te(P(), "SMUIAccordionHeader:activate", { event: O });
  }
  function h(O) {
    O = O, O.key === "Enter" && Te(P(), "SMUIAccordionHeader:activate", { event: O });
  }
  function k(O) {
    _[O] || n(5, _[O] = !0, _);
  }
  function X(O) {
    (!(O in _) || _[O]) && n(5, _[O] = !1, _);
  }
  function Z(O, H) {
    v[O] != H && (H === "" || H == null ? (delete v[O], n(6, v)) : n(6, v[O] = H, v));
  }
  function P() {
    return b;
  }
  function $(O) {
    ee[O ? "unshift" : "push"](() => {
      b = O, n(4, b);
    });
  }
  return t.$$set = (O) => {
    e = M(M({}, e), Ae(O)), n(19, s = Y(e, i)), "use" in O && n(0, d = O.use), "class" in O && n(1, m = O.class), "style" in O && n(2, p = O.style), "ripple" in O && n(3, g = O.ripple), "$$scope" in O && n(22, u = O.$$scope);
  }, [
    d,
    m,
    p,
    g,
    b,
    _,
    v,
    l,
    o,
    r,
    c,
    L,
    A,
    I,
    T,
    h,
    k,
    X,
    Z,
    s,
    f,
    P,
    u,
    a,
    $
  ];
}
class Pn extends he {
  constructor(e) {
    super(), de(this, e, Fo, Mo, oe, {
      use: 0,
      class: 1,
      style: 2,
      ripple: 3,
      getElement: 21
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get ripple() {
    return this.$$.ctx[3];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), y();
  }
  get getElement() {
    return this.$$.ctx[21];
  }
}
me(Pn, { use: {}, class: {}, style: {}, ripple: { type: "Boolean" } }, ["default", "description", "icon"], ["getElement"], !0);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var No = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ho = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var i = t.call(this, Pe(Pe({}, e.defaultAdapter), n)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return No;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(n) {
      var i = e.cssClasses.LABEL_SHAKE;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.float = function(n) {
      var i = e.cssClasses, s = i.LABEL_FLOAT_ABOVE, l = i.LABEL_SHAKE;
      n ? this.adapter.addClass(s) : (this.adapter.removeClass(s), this.adapter.removeClass(l));
    }, e.prototype.setRequired = function(n) {
      var i = e.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var n = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, e;
  }(st)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var dt = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Uo = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var i = t.call(this, Pe(Pe({}, e.defaultAdapter), n)) || this;
      return i.transitionEndHandler = function(s) {
        i.handleTransitionEnd(s);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(dt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(dt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(dt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this.adapter.hasClass(dt.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && i && (this.adapter.removeClass(dt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(dt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(st)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var jo = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, li = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, qo = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var zo = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      return t.call(this, Pe(Pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return jo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return li;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(n) {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      n > 0 && (n += li.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(st)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var gn = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, Vo = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
}, ri = {
  LABEL_SCALE: 0.75
}, Go = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Zo = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ai = ["mousedown", "touchstart"], oi = ["click", "keydown"], Wo = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n, i) {
      i === void 0 && (i = {});
      var s = t.call(this, Pe(Pe({}, e.defaultAdapter), n)) || this;
      return s.isFocused = !1, s.receivedUserInput = !1, s.valid = !0, s.useNativeValidation = !0, s.validateOnValueChange = !0, s.helperText = i.helperText, s.characterCounter = i.characterCounter, s.leadingIcon = i.leadingIcon, s.trailingIcon = i.trailingIcon, s.inputFocusHandler = function() {
        s.activateFocus();
      }, s.inputBlurHandler = function() {
        s.deactivateFocus();
      }, s.inputInputHandler = function() {
        s.handleInput();
      }, s.setPointerXOffset = function(l) {
        s.setTransformOrigin(l);
      }, s.textFieldInteractionHandler = function() {
        s.handleTextFieldInteraction();
      }, s.validationAttributeChangeHandler = function(l) {
        s.handleValidationAttributeChange(l);
      }, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return gn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ri;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Zo.indexOf(n) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n, i, s, l;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Ye(ai), r = o.next(); !r.done; r = o.next()) {
          var a = r.value;
          this.adapter.registerInputInteractionHandler(a, this.setPointerXOffset);
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          r && !r.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Ye(oi), f = u.next(); !f.done; f = u.next()) {
          var a = f.value;
          this.adapter.registerTextFieldInteractionHandler(a, this.textFieldInteractionHandler);
        }
      } catch (c) {
        s = { error: c };
      } finally {
        try {
          f && !f.done && (l = u.return) && l.call(u);
        } finally {
          if (s) throw s.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, i, s, l;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Ye(ai), r = o.next(); !r.done; r = o.next()) {
          var a = r.value;
          this.adapter.deregisterInputInteractionHandler(a, this.setPointerXOffset);
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          r && !r.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Ye(oi), f = u.next(); !f.done; f = u.next()) {
          var a = f.value;
          this.adapter.deregisterTextFieldInteractionHandler(a, this.textFieldInteractionHandler);
        }
      } catch (c) {
        s = { error: c };
      } finally {
        try {
          f && !f.done && (l = u.return) && l.call(u);
        } finally {
          if (s) throw s.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var n = this.adapter.getNativeInput();
      n && n.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(n) {
      var i = this;
      n.some(function(s) {
        return Go.indexOf(s) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var i = this.adapter.getLabelWidth() * ri.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = n.touches, s = i ? i[0] : n, l = s.target.getBoundingClientRect(), o = s.clientX - l.left;
        this.adapter.setLineRippleTransformOrigin(o);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var n = this.isValid();
      this.styleValidity(n), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(n) {
      if (this.getValue() !== n && (this.getNativeInput().value = n), this.setcharacterCounter(n.length), this.validateOnValueChange) {
        var i = this.isValid();
        this.styleValidity(i);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(n) {
      this.valid = n, this.styleValidity(n);
      var i = !n && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(i);
    }, e.prototype.setValidateOnValueChange = function(n) {
      this.validateOnValueChange = n;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(n) {
      this.useNativeValidation = n;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(n) {
      this.getNativeInput().disabled = n, this.styleDisabled(n);
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.setTrailingIconAriaLabel = function(n) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(n);
    }, e.prototype.setTrailingIconContent = function(n) {
      this.trailingIcon && this.trailingIcon.setContent(n);
    }, e.prototype.setcharacterCounter = function(n) {
      if (this.characterCounter) {
        var i = this.getNativeInput().maxLength;
        if (i === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(n, i);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(n) {
      var i = e.cssClasses.INVALID;
      if (n ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText) {
        this.helperText.setValidity(n);
        var s = this.helperText.isValidation();
        if (!s)
          return;
        var l = this.helperText.isVisible(), o = this.helperText.getId();
        l && o ? this.adapter.setInputAttr(gn.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(gn.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(n) {
      var i = e.cssClasses.FOCUSED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.styleDisabled = function(n) {
      var i = e.cssClasses, s = i.DISABLED, l = i.INVALID;
      n ? (this.adapter.addClass(s), this.adapter.removeClass(l)) : this.adapter.removeClass(s), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
    }, e.prototype.styleFloating = function(n) {
      var i = e.cssClasses.LABEL_FLOATING;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.getNativeInput = function() {
      var n = this.adapter ? this.adapter.getNativeInput() : null;
      return n || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, e;
  }(st)
);
function Xo(t) {
  let e, n, i, s, l, o, r, a;
  const u = (
    /*#slots*/
    t[22].default
  ), f = ie(
    u,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let c = [
    {
      class: n = W({
        [
          /*className*/
          t[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          t[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          t[1]
        ),
        .../*internalClasses*/
        t[8]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[9]
      ).map(ci).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    {
      for: s = /*forId*/
      t[5] || /*inputProps*/
      (t[11] ? (
        /*inputProps*/
        t[11].id
      ) : void 0)
    },
    /*$$restProps*/
    t[12]
  ], d = {};
  for (let m = 0; m < c.length; m += 1)
    d = M(d, c[m]);
  return {
    c() {
      e = j("label"), f && f.c(), ne(e, d);
    },
    m(m, p) {
      D(m, e, p), f && f.m(e, null), t[24](e), o = !0, r || (a = [
        x(l = Se.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        x(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], r = !0);
    },
    p(m, p) {
      f && f.p && (!o || p & /*$$scope*/
      2097152) && le(
        f,
        u,
        m,
        /*$$scope*/
        m[21],
        o ? se(
          u,
          /*$$scope*/
          m[21],
          p,
          null
        ) : re(
          /*$$scope*/
          m[21]
        ),
        null
      ), ne(e, d = te(c, [
        (!o || p & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = W({
          [
            /*className*/
            m[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            m[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            m[1]
          ),
          .../*internalClasses*/
          m[8]
        }))) && { class: n },
        (!o || p & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          m[9]
        ).map(ci).concat([
          /*style*/
          m[4]
        ]).join(" "))) && { style: i },
        (!o || p & /*forId*/
        32 && s !== (s = /*forId*/
        m[5] || /*inputProps*/
        (m[11] ? (
          /*inputProps*/
          m[11].id
        ) : void 0))) && { for: s },
        p & /*$$restProps*/
        4096 && /*$$restProps*/
        m[12]
      ])), l && pe(l.update) && p & /*use*/
      4 && l.update.call(
        null,
        /*use*/
        m[2]
      );
    },
    i(m) {
      o || (E(f, m), o = !0);
    },
    o(m) {
      C(f, m), o = !1;
    },
    d(m) {
      m && R(e), f && f.d(m), t[24](null), r = !1, Ee(a);
    }
  };
}
function Ko(t) {
  let e, n, i, s, l, o, r;
  const a = (
    /*#slots*/
    t[22].default
  ), u = ie(
    a,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let f = [
    {
      class: n = W({
        [
          /*className*/
          t[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          t[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          t[1]
        ),
        .../*internalClasses*/
        t[8]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[9]
      ).map(ui).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = M(c, f[d]);
  return {
    c() {
      e = j("span"), u && u.c(), ne(e, c);
    },
    m(d, m) {
      D(d, e, m), u && u.m(e, null), t[23](e), l = !0, o || (r = [
        x(s = Se.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        x(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], o = !0);
    },
    p(d, m) {
      u && u.p && (!l || m & /*$$scope*/
      2097152) && le(
        u,
        a,
        d,
        /*$$scope*/
        d[21],
        l ? se(
          a,
          /*$$scope*/
          d[21],
          m,
          null
        ) : re(
          /*$$scope*/
          d[21]
        ),
        null
      ), ne(e, c = te(f, [
        (!l || m & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = W({
          [
            /*className*/
            d[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            d[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            d[1]
          ),
          .../*internalClasses*/
          d[8]
        }))) && { class: n },
        (!l || m & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(ui).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: i },
        m & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), s && pe(s.update) && m & /*use*/
      4 && s.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      l || (E(u, d), l = !0);
    },
    o(d) {
      C(u, d), l = !1;
    },
    d(d) {
      d && R(e), u && u.d(d), t[23](null), o = !1, Ee(r);
    }
  };
}
function Jo(t) {
  let e, n, i, s;
  const l = [Ko, Xo], o = [];
  function r(a, u) {
    return (
      /*wrapped*/
      a[6] ? 0 : 1
    );
  }
  return e = r(t), n = o[e] = l[e](t), {
    c() {
      n.c(), i = we();
    },
    m(a, u) {
      o[e].m(a, u), D(a, i, u), s = !0;
    },
    p(a, [u]) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (ce(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), fe(), n = o[e], n ? n.p(a, u) : (n = o[e] = l[e](a), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      s || (E(n), s = !0);
    },
    o(a) {
      C(n), s = !1;
    },
    d(a) {
      a && R(i), o[e].d(a);
    }
  };
}
const ui = ([t, e]) => `${t}: ${e};`, ci = ([t, e]) => `${t}: ${e};`;
function Yo(t, e, n) {
  const i = [
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "shake",
    "float",
    "setRequired",
    "getWidth",
    "getElement"
  ];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  var r;
  const a = Ie(ye());
  let { use: u = [] } = e, { class: f = "" } = e, { style: c = "" } = e, { for: d = void 0 } = e, { floatAbove: m = !1 } = e, { required: p = !1 } = e, { wrapped: g = !1 } = e, b, _, v = {}, L = {}, A = (r = Xe("SMUI:generic:input:props")) !== null && r !== void 0 ? r : {}, I = m, T = p;
  nt(() => {
    n(18, _ = new Ho({
      addClass: h,
      removeClass: k,
      getWidth: () => {
        var w, K;
        const Le = ve(), ke = Le.cloneNode(!0);
        (w = Le.parentNode) === null || w === void 0 || w.appendChild(ke), ke.classList.add("smui-floating-label--remove-transition"), ke.classList.add("smui-floating-label--force-size"), ke.classList.remove("mdc-floating-label--float-above");
        const Fe = ke.scrollWidth;
        return (K = Le.parentNode) === null || K === void 0 || K.removeChild(ke), Fe;
      },
      registerInteractionHandler: (w, K) => ve().addEventListener(w, K),
      deregisterInteractionHandler: (w, K) => ve().removeEventListener(w, K)
    }));
    const F = {
      get element() {
        return ve();
      },
      addStyle: X,
      removeStyle: Z
    };
    return Te(b, "SMUIFloatingLabel:mount", F), _.init(), () => {
      Te(b, "SMUIFloatingLabel:unmount", F), _.destroy();
    };
  });
  function h(F) {
    v[F] || n(8, v[F] = !0, v);
  }
  function k(F) {
    (!(F in v) || v[F]) && n(8, v[F] = !1, v);
  }
  function X(F, w) {
    L[F] != w && (w === "" || w == null ? (delete L[F], n(9, L)) : n(9, L[F] = w, L));
  }
  function Z(F) {
    F in L && (delete L[F], n(9, L));
  }
  function P(F) {
    _.shake(F);
  }
  function $(F) {
    n(0, m = F);
  }
  function O(F) {
    n(1, p = F);
  }
  function H() {
    return _.getWidth();
  }
  function ve() {
    return b;
  }
  function be(F) {
    ee[F ? "unshift" : "push"](() => {
      b = F, n(7, b);
    });
  }
  function _e(F) {
    ee[F ? "unshift" : "push"](() => {
      b = F, n(7, b);
    });
  }
  return t.$$set = (F) => {
    e = M(M({}, e), Ae(F)), n(12, s = Y(e, i)), "use" in F && n(2, u = F.use), "class" in F && n(3, f = F.class), "style" in F && n(4, c = F.style), "for" in F && n(5, d = F.for), "floatAbove" in F && n(0, m = F.floatAbove), "required" in F && n(1, p = F.required), "wrapped" in F && n(6, g = F.wrapped), "$$scope" in F && n(21, o = F.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && _ && I !== m && (n(19, I = m), _.float(m)), t.$$.dirty & /*instance, previousRequired, required*/
    1310722 && _ && T !== p && (n(20, T = p), _.setRequired(p));
  }, [
    m,
    p,
    u,
    f,
    c,
    d,
    g,
    b,
    v,
    L,
    a,
    A,
    s,
    P,
    $,
    O,
    H,
    ve,
    _,
    I,
    T,
    o,
    l,
    be,
    _e
  ];
}
class Rn extends he {
  constructor(e) {
    super(), de(this, e, Yo, Jo, oe, {
      use: 2,
      class: 3,
      style: 4,
      for: 5,
      floatAbove: 0,
      required: 1,
      wrapped: 6,
      shake: 13,
      float: 14,
      setRequired: 15,
      getWidth: 16,
      getElement: 17
    });
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get for() {
    return this.$$.ctx[5];
  }
  set for(e) {
    this.$$set({ for: e }), y();
  }
  get floatAbove() {
    return this.$$.ctx[0];
  }
  set floatAbove(e) {
    this.$$set({ floatAbove: e }), y();
  }
  get required() {
    return this.$$.ctx[1];
  }
  set required(e) {
    this.$$set({ required: e }), y();
  }
  get wrapped() {
    return this.$$.ctx[6];
  }
  set wrapped(e) {
    this.$$set({ wrapped: e }), y();
  }
  get shake() {
    return this.$$.ctx[13];
  }
  get float() {
    return this.$$.ctx[14];
  }
  get setRequired() {
    return this.$$.ctx[15];
  }
  get getWidth() {
    return this.$$.ctx[16];
  }
  get getElement() {
    return this.$$.ctx[17];
  }
}
me(Rn, { use: {}, class: {}, style: {}, for: {}, floatAbove: { type: "Boolean" }, required: { type: "Boolean" }, wrapped: { type: "Boolean" } }, ["default"], ["shake", "float", "setRequired", "getWidth", "getElement"], !0);
function $o(t) {
  let e, n, i, s, l, o, r = [
    {
      class: n = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-line-ripple": !0,
        "mdc-line-ripple--active": (
          /*active*/
          t[3]
        ),
        .../*internalClasses*/
        t[5]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[6]
      ).map(fi).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    /*$$restProps*/
    t[8]
  ], a = {};
  for (let u = 0; u < r.length; u += 1)
    a = M(a, r[u]);
  return {
    c() {
      e = j("div"), ne(e, a);
    },
    m(u, f) {
      D(u, e, f), t[13](e), l || (o = [
        x(s = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[7].call(null, e)
        )
      ], l = !0);
    },
    p(u, [f]) {
      ne(e, a = te(r, [
        f & /*className, active, internalClasses*/
        42 && n !== (n = W({
          [
            /*className*/
            u[1]
          ]: !0,
          "mdc-line-ripple": !0,
          "mdc-line-ripple--active": (
            /*active*/
            u[3]
          ),
          .../*internalClasses*/
          u[5]
        })) && { class: n },
        f & /*internalStyles, style*/
        68 && i !== (i = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(fi).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        f & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), s && pe(s.update) && f & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: Ce,
    o: Ce,
    d(u) {
      u && R(e), t[13](null), l = !1, Ee(o);
    }
  };
}
const fi = ([t, e]) => `${t}: ${e};`;
function Qo(t, e, n) {
  const i = [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ];
  let s = Y(e, i);
  const l = Ie(ye());
  let { use: o = [] } = e, { class: r = "" } = e, { style: a = "" } = e, { active: u = !1 } = e, f, c, d = {}, m = {};
  nt(() => (c = new Uo({
    addClass: g,
    removeClass: b,
    hasClass: p,
    setStyle: _,
    registerEventHandler: (h, k) => I().addEventListener(h, k),
    deregisterEventHandler: (h, k) => I().removeEventListener(h, k)
  }), c.init(), () => {
    c.destroy();
  }));
  function p(h) {
    return h in d ? d[h] : I().classList.contains(h);
  }
  function g(h) {
    d[h] || n(5, d[h] = !0, d);
  }
  function b(h) {
    (!(h in d) || d[h]) && n(5, d[h] = !1, d);
  }
  function _(h, k) {
    m[h] != k && (k === "" || k == null ? (delete m[h], n(6, m)) : n(6, m[h] = k, m));
  }
  function v() {
    c.activate();
  }
  function L() {
    c.deactivate();
  }
  function A(h) {
    c.setRippleCenter(h);
  }
  function I() {
    return f;
  }
  function T(h) {
    ee[h ? "unshift" : "push"](() => {
      f = h, n(4, f);
    });
  }
  return t.$$set = (h) => {
    e = M(M({}, e), Ae(h)), n(8, s = Y(e, i)), "use" in h && n(0, o = h.use), "class" in h && n(1, r = h.class), "style" in h && n(2, a = h.style), "active" in h && n(3, u = h.active);
  }, [
    o,
    r,
    a,
    u,
    f,
    d,
    m,
    l,
    s,
    v,
    L,
    A,
    I,
    T
  ];
}
class ws extends he {
  constructor(e) {
    super(), de(this, e, Qo, $o, oe, {
      use: 0,
      class: 1,
      style: 2,
      active: 3,
      activate: 9,
      deactivate: 10,
      setRippleCenter: 11,
      getElement: 12
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get active() {
    return this.$$.ctx[3];
  }
  set active(e) {
    this.$$set({ active: e }), y();
  }
  get activate() {
    return this.$$.ctx[9];
  }
  get deactivate() {
    return this.$$.ctx[10];
  }
  get setRippleCenter() {
    return this.$$.ctx[11];
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
me(ws, { use: {}, class: {}, style: {}, active: { type: "Boolean" } }, [], ["activate", "deactivate", "setRippleCenter", "getElement"], !0);
function di(t) {
  let e, n, i;
  const s = (
    /*#slots*/
    t[15].default
  ), l = ie(
    s,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      e = j("div"), l && l.c(), U(e, "class", "mdc-notched-outline__notch"), U(e, "style", n = Object.entries(
        /*notchStyles*/
        t[7]
      ).map(mi).join(" "));
    },
    m(o, r) {
      D(o, e, r), l && l.m(e, null), i = !0;
    },
    p(o, r) {
      l && l.p && (!i || r & /*$$scope*/
      16384) && le(
        l,
        s,
        o,
        /*$$scope*/
        o[14],
        i ? se(
          s,
          /*$$scope*/
          o[14],
          r,
          null
        ) : re(
          /*$$scope*/
          o[14]
        ),
        null
      ), (!i || r & /*notchStyles*/
      128 && n !== (n = Object.entries(
        /*notchStyles*/
        o[7]
      ).map(mi).join(" "))) && U(e, "style", n);
    },
    i(o) {
      i || (E(l, o), i = !0);
    },
    o(o) {
      C(l, o), i = !1;
    },
    d(o) {
      o && R(e), l && l.d(o);
    }
  };
}
function xo(t) {
  let e, n, i, s, l, o, r, a, u, f, c = !/*noLabel*/
  t[3] && di(t), d = [
    {
      class: o = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-notched-outline": !0,
        "mdc-notched-outline--notched": (
          /*notched*/
          t[2]
        ),
        "mdc-notched-outline--no-label": (
          /*noLabel*/
          t[3]
        ),
        .../*internalClasses*/
        t[6]
      })
    },
    /*$$restProps*/
    t[10]
  ], m = {};
  for (let p = 0; p < d.length; p += 1)
    m = M(m, d[p]);
  return {
    c() {
      e = j("div"), n = j("div"), i = Q(), c && c.c(), s = Q(), l = j("div"), U(n, "class", "mdc-notched-outline__leading"), U(l, "class", "mdc-notched-outline__trailing"), ne(e, m);
    },
    m(p, g) {
      D(p, e, g), J(e, n), J(e, i), c && c.m(e, null), J(e, s), J(e, l), t[16](e), a = !0, u || (f = [
        x(r = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[8].call(null, e)
        ),
        ge(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          t[9]
        ),
        ge(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          t[17]
        )
      ], u = !0);
    },
    p(p, [g]) {
      /*noLabel*/
      p[3] ? c && (ce(), C(c, 1, 1, () => {
        c = null;
      }), fe()) : c ? (c.p(p, g), g & /*noLabel*/
      8 && E(c, 1)) : (c = di(p), c.c(), E(c, 1), c.m(e, s)), ne(e, m = te(d, [
        (!a || g & /*className, notched, noLabel, internalClasses*/
        78 && o !== (o = W({
          [
            /*className*/
            p[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            p[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            p[3]
          ),
          .../*internalClasses*/
          p[6]
        }))) && { class: o },
        g & /*$$restProps*/
        1024 && /*$$restProps*/
        p[10]
      ])), r && pe(r.update) && g & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      a || (E(c), a = !0);
    },
    o(p) {
      C(c), a = !1;
    },
    d(p) {
      p && R(e), c && c.d(), t[16](null), u = !1, Ee(f);
    }
  };
}
const mi = ([t, e]) => `${t}: ${e};`;
function eu(t, e, n) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { notched: f = !1 } = e, { noLabel: c = !1 } = e, d, m, p, g = {}, b = {};
  nt(() => (m = new zo({
    addClass: v,
    removeClass: L,
    setNotchWidthProperty: (P) => A("width", P + "px"),
    removeNotchWidthProperty: () => I("width")
  }), m.init(), () => {
    m.destroy();
  }));
  function _(P) {
    n(4, p = P.detail);
  }
  function v(P) {
    g[P] || n(6, g[P] = !0, g);
  }
  function L(P) {
    (!(P in g) || g[P]) && n(6, g[P] = !1, g);
  }
  function A(P, $) {
    b[P] != $ && ($ === "" || $ == null ? (delete b[P], n(7, b)) : n(7, b[P] = $, b));
  }
  function I(P) {
    P in b && (delete b[P], n(7, b));
  }
  function T(P) {
    m.notch(P);
  }
  function h() {
    m.closeNotch();
  }
  function k() {
    return d;
  }
  function X(P) {
    ee[P ? "unshift" : "push"](() => {
      d = P, n(5, d);
    });
  }
  const Z = () => n(4, p = void 0);
  return t.$$set = (P) => {
    e = M(M({}, e), Ae(P)), n(10, s = Y(e, i)), "use" in P && n(0, a = P.use), "class" in P && n(1, u = P.class), "notched" in P && n(2, f = P.notched), "noLabel" in P && n(3, c = P.noLabel), "$$scope" in P && n(14, o = P.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*floatingLabel*/
    16 && (p ? (p.addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      p && p.removeStyle("transition-duration");
    })) : L("mdc-notched-outline--upgraded"));
  }, [
    a,
    u,
    f,
    c,
    p,
    d,
    g,
    b,
    r,
    _,
    s,
    T,
    h,
    k,
    o,
    l,
    X,
    Z
  ];
}
class Ps extends he {
  constructor(e) {
    super(), de(this, e, eu, xo, oe, {
      use: 0,
      class: 1,
      notched: 2,
      noLabel: 3,
      notch: 11,
      closeNotch: 12,
      getElement: 13
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get notched() {
    return this.$$.ctx[2];
  }
  set notched(e) {
    this.$$set({ notched: e }), y();
  }
  get noLabel() {
    return this.$$.ctx[3];
  }
  set noLabel(e) {
    this.$$set({ noLabel: e }), y();
  }
  get notch() {
    return this.$$.ctx[11];
  }
  get closeNotch() {
    return this.$$.ctx[12];
  }
  get getElement() {
    return this.$$.ctx[13];
  }
}
me(Ps, { use: {}, class: {}, notched: { type: "Boolean" }, noLabel: { type: "Boolean" } }, ["default"], ["notch", "closeNotch", "getElement"], !0);
const tu = Ne({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), nu = Ne({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), iu = Ne({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function su(t) {
  let e, n, i, s, l, o = [
    {
      class: n = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    { type: (
      /*type*/
      t[2]
    ) },
    { placeholder: (
      /*placeholder*/
      t[3]
    ) },
    /*valueProp*/
    t[4],
    /*internalAttrs*/
    t[6],
    /*$$restProps*/
    t[10]
  ], r = {};
  for (let a = 0; a < o.length; a += 1)
    r = M(r, o[a]);
  return {
    c() {
      e = j("input"), ne(e, r);
    },
    m(a, u) {
      D(a, e, u), e.autofocus && e.focus(), t[26](e), s || (l = [
        x(i = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        ge(
          e,
          "input",
          /*input_handler*/
          t[27]
        ),
        ge(
          e,
          "change",
          /*changeHandler*/
          t[9]
        ),
        ge(
          e,
          "blur",
          /*blur_handler*/
          t[24]
        ),
        ge(
          e,
          "focus",
          /*focus_handler*/
          t[25]
        )
      ], s = !0);
    },
    p(a, [u]) {
      ne(e, r = te(o, [
        u & /*className*/
        2 && n !== (n = W({
          [
            /*className*/
            a[1]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: n },
        u & /*type*/
        4 && { type: (
          /*type*/
          a[2]
        ) },
        u & /*placeholder*/
        8 && { placeholder: (
          /*placeholder*/
          a[3]
        ) },
        u & /*valueProp*/
        16 && /*valueProp*/
        a[4],
        u & /*internalAttrs*/
        64 && /*internalAttrs*/
        a[6],
        u & /*$$restProps*/
        1024 && /*$$restProps*/
        a[10]
      ])), i && pe(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    i: Ce,
    o: Ce,
    d(a) {
      a && R(e), t[26](null), s = !1, Ee(l);
    }
  };
}
function lu(t) {
  return t === "" ? Number.NaN : +t;
}
function ru(t, e, n) {
  const i = [
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "emptyValueNull",
    "emptyValueUndefined",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ];
  let s = Y(e, i);
  const l = Ie(ye());
  let o = () => {
  };
  function r(w) {
    return w === o;
  }
  let { use: a = [] } = e, { class: u = "" } = e, { type: f = "text" } = e, { placeholder: c = " " } = e, { value: d = o } = e;
  const m = r(d);
  m && (d = "");
  let { files: p = null } = e, { dirty: g = !1 } = e, { invalid: b = !1 } = e, { updateInvalid: _ = !0 } = e, { emptyValueNull: v = d === null } = e;
  m && v && (d = null);
  let { emptyValueUndefined: L = d === void 0 } = e;
  m && L && (d = void 0);
  let A, I = {}, T = {};
  nt(() => {
    _ && n(14, b = A.matches(":invalid"));
  });
  function h(w) {
    if (f === "file") {
      n(12, p = w.currentTarget.files);
      return;
    }
    if (w.currentTarget.value === "" && v) {
      n(11, d = null);
      return;
    }
    if (w.currentTarget.value === "" && L) {
      n(11, d = void 0);
      return;
    }
    switch (f) {
      case "number":
      case "range":
        n(11, d = lu(w.currentTarget.value));
        break;
      default:
        n(11, d = w.currentTarget.value);
        break;
    }
  }
  function k(w) {
    (f === "file" || f === "range") && h(w), n(13, g = !0), _ && n(14, b = A.matches(":invalid"));
  }
  function X(w) {
    var K;
    return w in I ? (K = I[w]) !== null && K !== void 0 ? K : null : H().getAttribute(w);
  }
  function Z(w, K) {
    I[w] !== K && n(6, I[w] = K, I);
  }
  function P(w) {
    (!(w in I) || I[w] != null) && n(6, I[w] = void 0, I);
  }
  function $() {
    H().focus();
  }
  function O() {
    H().blur();
  }
  function H() {
    return A;
  }
  function ve(w) {
    Dt.call(this, t, w);
  }
  function be(w) {
    Dt.call(this, t, w);
  }
  function _e(w) {
    ee[w ? "unshift" : "push"](() => {
      A = w, n(5, A);
    });
  }
  const F = (w) => f !== "file" && h(w);
  return t.$$set = (w) => {
    e = M(M({}, e), Ae(w)), n(10, s = Y(e, i)), "use" in w && n(0, a = w.use), "class" in w && n(1, u = w.class), "type" in w && n(2, f = w.type), "placeholder" in w && n(3, c = w.placeholder), "value" in w && n(11, d = w.value), "files" in w && n(12, p = w.files), "dirty" in w && n(13, g = w.dirty), "invalid" in w && n(14, b = w.invalid), "updateInvalid" in w && n(15, _ = w.updateInvalid), "emptyValueNull" in w && n(16, v = w.emptyValueNull), "emptyValueUndefined" in w && n(17, L = w.emptyValueUndefined);
  }, t.$$.update = () => {
    t.$$.dirty & /*type, valueProp, value*/
    2068 && (f === "file" ? (delete T.value, n(4, T), n(2, f), n(11, d)) : n(4, T.value = d ?? "", T));
  }, [
    a,
    u,
    f,
    c,
    T,
    A,
    I,
    l,
    h,
    k,
    s,
    d,
    p,
    g,
    b,
    _,
    v,
    L,
    X,
    Z,
    P,
    $,
    O,
    H,
    ve,
    be,
    _e,
    F
  ];
}
class Rs extends he {
  constructor(e) {
    super(), de(this, e, ru, su, oe, {
      use: 0,
      class: 1,
      type: 2,
      placeholder: 3,
      value: 11,
      files: 12,
      dirty: 13,
      invalid: 14,
      updateInvalid: 15,
      emptyValueNull: 16,
      emptyValueUndefined: 17,
      getAttr: 18,
      addAttr: 19,
      removeAttr: 20,
      focus: 21,
      blur: 22,
      getElement: 23
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get type() {
    return this.$$.ctx[2];
  }
  set type(e) {
    this.$$set({ type: e }), y();
  }
  get placeholder() {
    return this.$$.ctx[3];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), y();
  }
  get value() {
    return this.$$.ctx[11];
  }
  set value(e) {
    this.$$set({ value: e }), y();
  }
  get files() {
    return this.$$.ctx[12];
  }
  set files(e) {
    this.$$set({ files: e }), y();
  }
  get dirty() {
    return this.$$.ctx[13];
  }
  set dirty(e) {
    this.$$set({ dirty: e }), y();
  }
  get invalid() {
    return this.$$.ctx[14];
  }
  set invalid(e) {
    this.$$set({ invalid: e }), y();
  }
  get updateInvalid() {
    return this.$$.ctx[15];
  }
  set updateInvalid(e) {
    this.$$set({ updateInvalid: e }), y();
  }
  get emptyValueNull() {
    return this.$$.ctx[16];
  }
  set emptyValueNull(e) {
    this.$$set({ emptyValueNull: e }), y();
  }
  get emptyValueUndefined() {
    return this.$$.ctx[17];
  }
  set emptyValueUndefined(e) {
    this.$$set({ emptyValueUndefined: e }), y();
  }
  get getAttr() {
    return this.$$.ctx[18];
  }
  get addAttr() {
    return this.$$.ctx[19];
  }
  get removeAttr() {
    return this.$$.ctx[20];
  }
  get focus() {
    return this.$$.ctx[21];
  }
  get blur() {
    return this.$$.ctx[22];
  }
  get getElement() {
    return this.$$.ctx[23];
  }
}
me(Rs, { use: {}, class: {}, type: {}, placeholder: {}, value: {}, files: {}, dirty: { type: "Boolean" }, invalid: { type: "Boolean" }, updateInvalid: { type: "Boolean" }, emptyValueNull: {}, emptyValueUndefined: {} }, [], ["getAttr", "addAttr", "removeAttr", "focus", "blur", "getElement"], !0);
function au(t) {
  let e, n, i, s, l, o, r = [
    {
      class: n = W({
        [
          /*className*/
          t[2]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    {
      style: i = `${/*resizable*/
      t[4] ? "" : "resize: none; "}${/*style*/
      t[3]}`
    },
    /*internalAttrs*/
    t[6],
    /*$$restProps*/
    t[9]
  ], a = {};
  for (let u = 0; u < r.length; u += 1)
    a = M(a, r[u]);
  return {
    c() {
      e = j("textarea"), ne(e, a);
    },
    m(u, f) {
      D(u, e, f), e.autofocus && e.focus(), t[21](e), Un(
        e,
        /*value*/
        t[0]
      ), l || (o = [
        x(s = Se.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        x(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        ge(
          e,
          "change",
          /*changeHandler*/
          t[8]
        ),
        ge(
          e,
          "blur",
          /*blur_handler*/
          t[19]
        ),
        ge(
          e,
          "focus",
          /*focus_handler*/
          t[20]
        ),
        ge(
          e,
          "input",
          /*textarea_input_handler*/
          t[22]
        )
      ], l = !0);
    },
    p(u, [f]) {
      ne(e, a = te(r, [
        f & /*className*/
        4 && n !== (n = W({
          [
            /*className*/
            u[2]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: n },
        f & /*resizable, style*/
        24 && i !== (i = `${/*resizable*/
        u[4] ? "" : "resize: none; "}${/*style*/
        u[3]}`) && { style: i },
        f & /*internalAttrs*/
        64 && /*internalAttrs*/
        u[6],
        f & /*$$restProps*/
        512 && /*$$restProps*/
        u[9]
      ])), s && pe(s.update) && f & /*use*/
      2 && s.update.call(
        null,
        /*use*/
        u[1]
      ), f & /*value*/
      1 && Un(
        e,
        /*value*/
        u[0]
      );
    },
    i: Ce,
    o: Ce,
    d(u) {
      u && R(e), t[21](null), l = !1, Ee(o);
    }
  };
}
function ou(t, e, n) {
  const i = [
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "resizable",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ];
  let s = Y(e, i);
  const l = Ie(ye());
  let { use: o = [] } = e, { class: r = "" } = e, { style: a = "" } = e, { value: u = "" } = e, { dirty: f = !1 } = e, { invalid: c = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: m = !0 } = e, p, g = {};
  nt(() => {
    d && n(11, c = p.matches(":invalid"));
  });
  function b() {
    n(10, f = !0), d && n(11, c = p.matches(":invalid"));
  }
  function _(P) {
    var $;
    return P in g ? ($ = g[P]) !== null && $ !== void 0 ? $ : null : T().getAttribute(P);
  }
  function v(P, $) {
    g[P] !== $ && n(6, g[P] = $, g);
  }
  function L(P) {
    (!(P in g) || g[P] != null) && n(6, g[P] = void 0, g);
  }
  function A() {
    T().focus();
  }
  function I() {
    T().blur();
  }
  function T() {
    return p;
  }
  function h(P) {
    Dt.call(this, t, P);
  }
  function k(P) {
    Dt.call(this, t, P);
  }
  function X(P) {
    ee[P ? "unshift" : "push"](() => {
      p = P, n(5, p);
    });
  }
  function Z() {
    u = this.value, n(0, u);
  }
  return t.$$set = (P) => {
    e = M(M({}, e), Ae(P)), n(9, s = Y(e, i)), "use" in P && n(1, o = P.use), "class" in P && n(2, r = P.class), "style" in P && n(3, a = P.style), "value" in P && n(0, u = P.value), "dirty" in P && n(10, f = P.dirty), "invalid" in P && n(11, c = P.invalid), "updateInvalid" in P && n(12, d = P.updateInvalid), "resizable" in P && n(4, m = P.resizable);
  }, [
    u,
    o,
    r,
    a,
    m,
    p,
    g,
    l,
    b,
    s,
    f,
    c,
    d,
    _,
    v,
    L,
    A,
    I,
    T,
    h,
    k,
    X,
    Z
  ];
}
class Ds extends he {
  constructor(e) {
    super(), de(this, e, ou, au, oe, {
      use: 1,
      class: 2,
      style: 3,
      value: 0,
      dirty: 10,
      invalid: 11,
      updateInvalid: 12,
      resizable: 4,
      getAttr: 13,
      addAttr: 14,
      removeAttr: 15,
      focus: 16,
      blur: 17,
      getElement: 18
    });
  }
  get use() {
    return this.$$.ctx[1];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), y();
  }
  get dirty() {
    return this.$$.ctx[10];
  }
  set dirty(e) {
    this.$$set({ dirty: e }), y();
  }
  get invalid() {
    return this.$$.ctx[11];
  }
  set invalid(e) {
    this.$$set({ invalid: e }), y();
  }
  get updateInvalid() {
    return this.$$.ctx[12];
  }
  set updateInvalid(e) {
    this.$$set({ updateInvalid: e }), y();
  }
  get resizable() {
    return this.$$.ctx[4];
  }
  set resizable(e) {
    this.$$set({ resizable: e }), y();
  }
  get getAttr() {
    return this.$$.ctx[13];
  }
  get addAttr() {
    return this.$$.ctx[14];
  }
  get removeAttr() {
    return this.$$.ctx[15];
  }
  get focus() {
    return this.$$.ctx[16];
  }
  get blur() {
    return this.$$.ctx[17];
  }
  get getElement() {
    return this.$$.ctx[18];
  }
}
me(Ds, { use: {}, class: {}, style: {}, value: {}, dirty: { type: "Boolean" }, invalid: { type: "Boolean" }, updateInvalid: { type: "Boolean" }, resizable: { type: "Boolean" } }, [], ["getAttr", "addAttr", "removeAttr", "focus", "blur", "getElement"], !0);
const uu = (t) => ({}), hi = (t) => ({}), cu = (t) => ({}), pi = (t) => ({}), fu = (t) => ({}), gi = (t) => ({}), du = (t) => ({}), bi = (t) => ({}), mu = (t) => ({}), _i = (t) => ({}), hu = (t) => ({}), vi = (t) => ({}), pu = (t) => ({}), yi = (t) => ({}), gu = (t) => ({}), Ei = (t) => ({}), bu = (t) => ({}), Ai = (t) => ({}), _u = (t) => ({}), Ci = (t) => ({}), vu = (t) => ({}), Ii = (t) => ({}), yu = (t) => ({}), Si = (t) => ({});
function Eu(t) {
  let e, n, i, s, l, o, r, a, u, f, c, d, m, p;
  const g = (
    /*#slots*/
    t[56].label
  ), b = ie(
    g,
    t,
    /*$$scope*/
    t[87],
    _i
  );
  i = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Cu] },
      $$scope: { ctx: t }
    }
  });
  const _ = (
    /*#slots*/
    t[56].default
  ), v = ie(
    _,
    t,
    /*$$scope*/
    t[87],
    null
  );
  o = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Iu] },
      $$scope: { ctx: t }
    }
  });
  const L = (
    /*#slots*/
    t[56].ripple
  ), A = ie(
    L,
    t,
    /*$$scope*/
    t[87],
    pi
  );
  let I = [
    {
      class: a = W({
        [
          /*className*/
          t[9]
        ]: !0,
        "mdc-text-field": !0,
        "mdc-text-field--disabled": (
          /*disabled*/
          t[12]
        ),
        "mdc-text-field--textarea": (
          /*textarea*/
          t[14]
        ),
        "mdc-text-field--filled": (
          /*variant*/
          t[15] === "filled"
        ),
        "mdc-text-field--outlined": (
          /*variant*/
          t[15] === "outlined"
        ),
        "smui-text-field--standard": (
          /*variant*/
          t[15] === "standard" && !/*textarea*/
          t[14]
        ),
        "mdc-text-field--no-label": (
          /*noLabel*/
          t[16] || !/*$$slots*/
          t[47].label
        ),
        "mdc-text-field--with-leading-icon": (
          /*$$slots*/
          t[47].leadingIcon
        ),
        "mdc-text-field--with-trailing-icon": (
          /*$$slots*/
          t[47].trailingIcon
        ),
        "mdc-text-field--invalid": (
          /*invalid*/
          t[1]
        ),
        .../*internalClasses*/
        t[25]
      })
    },
    {
      style: u = Object.entries(
        /*internalStyles*/
        t[26]
      ).map(Fi).concat([
        /*style*/
        t[10]
      ]).join(" ")
    },
    ut(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], T = {};
  for (let h = 0; h < I.length; h += 1)
    T = M(T, I[h]);
  return {
    c() {
      e = j("div"), b && b.c(), n = Q(), G(i.$$.fragment), s = Q(), v && v.c(), l = Q(), G(o.$$.fragment), r = Q(), A && A.c(), ne(e, T);
    },
    m(h, k) {
      D(h, e, k), b && b.m(e, null), J(e, n), z(i, e, null), J(e, s), v && v.m(e, null), J(e, l), z(o, e, null), J(e, r), A && A.m(e, null), t[82](e), d = !0, m || (p = [
        x(f = tt.call(null, e, {
          ripple: (
            /*ripple*/
            t[11]
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            t[43]
          ),
          removeClass: (
            /*removeClass*/
            t[44]
          ),
          addStyle: (
            /*addStyle*/
            t[45]
          )
        })),
        x(c = Se.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        x(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        ge(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        ge(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          t[83]
        ),
        ge(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        ge(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          t[84]
        )
      ], m = !0);
    },
    p(h, k) {
      b && b.p && (!d || k[2] & /*$$scope*/
      33554432) && le(
        b,
        g,
        h,
        /*$$scope*/
        h[87],
        d ? se(
          g,
          /*$$scope*/
          h[87],
          k,
          mu
        ) : re(
          /*$$scope*/
          h[87]
        ),
        _i
      );
      const X = {};
      k[2] & /*$$scope*/
      33554432 && (X.$$scope = { dirty: k, ctx: h }), i.$set(X), v && v.p && (!d || k[2] & /*$$scope*/
      33554432) && le(
        v,
        _,
        h,
        /*$$scope*/
        h[87],
        d ? se(
          _,
          /*$$scope*/
          h[87],
          k,
          null
        ) : re(
          /*$$scope*/
          h[87]
        ),
        null
      );
      const Z = {};
      k[2] & /*$$scope*/
      33554432 && (Z.$$scope = { dirty: k, ctx: h }), o.$set(Z), A && A.p && (!d || k[2] & /*$$scope*/
      33554432) && le(
        A,
        L,
        h,
        /*$$scope*/
        h[87],
        d ? se(
          L,
          /*$$scope*/
          h[87],
          k,
          cu
        ) : re(
          /*$$scope*/
          h[87]
        ),
        pi
      ), ne(e, T = te(I, [
        (!d || k[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | k[1] & /*$$slots*/
        65536 && a !== (a = W({
          [
            /*className*/
            h[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            h[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            h[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            h[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            h[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            h[15] === "standard" && !/*textarea*/
            h[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            h[16] || !/*$$slots*/
            h[47].label
          ),
          "mdc-text-field--with-leading-icon": (
            /*$$slots*/
            h[47].leadingIcon
          ),
          "mdc-text-field--with-trailing-icon": (
            /*$$slots*/
            h[47].trailingIcon
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            h[1]
          ),
          .../*internalClasses*/
          h[25]
        }))) && { class: a },
        (!d || k[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          h[26]
        ).map(Fi).concat([
          /*style*/
          h[10]
        ]).join(" "))) && { style: u },
        k[1] & /*$$restProps*/
        32768 && ut(
          /*$$restProps*/
          h[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), f && pe(f.update) && k[0] & /*ripple*/
      2048 && f.update.call(null, {
        ripple: (
          /*ripple*/
          h[11]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          h[43]
        ),
        removeClass: (
          /*removeClass*/
          h[44]
        ),
        addStyle: (
          /*addStyle*/
          h[45]
        )
      }), c && pe(c.update) && k[0] & /*use*/
      256 && c.update.call(
        null,
        /*use*/
        h[8]
      );
    },
    i(h) {
      d || (E(b, h), E(i.$$.fragment, h), E(v, h), E(o.$$.fragment, h), E(A, h), d = !0);
    },
    o(h) {
      C(b, h), C(i.$$.fragment, h), C(v, h), C(o.$$.fragment, h), C(A, h), d = !1;
    },
    d(h) {
      h && R(e), b && b.d(h), V(i), v && v.d(h), V(o), A && A.d(h), t[82](null), m = !1, Ee(p);
    }
  };
}
function Au(t) {
  let e, n, i, s, l, o, r, a, u, f, c, d, m, p, g, b, _, v, L = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && Li(t), A = (
    /*textarea*/
    (t[14] || /*variant*/
    t[15] === "outlined") && Oi(t)
  );
  s = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [ku] },
      $$scope: { ctx: t }
    }
  });
  const I = (
    /*#slots*/
    t[56].default
  ), T = ie(
    I,
    t,
    /*$$scope*/
    t[87],
    null
  ), h = [wu, Ou], k = [];
  function X(O, H) {
    return (
      /*textarea*/
      O[14] && typeof /*value*/
      O[0] == "string" ? 0 : 1
    );
  }
  r = X(t), a = k[r] = h[r](t), f = new Bt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Du] },
      $$scope: { ctx: t }
    }
  });
  let Z = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && /*ripple*/
  t[11] && Di(t), P = [
    {
      class: d = W({
        [
          /*className*/
          t[9]
        ]: !0,
        "mdc-text-field": !0,
        "mdc-text-field--disabled": (
          /*disabled*/
          t[12]
        ),
        "mdc-text-field--textarea": (
          /*textarea*/
          t[14]
        ),
        "mdc-text-field--filled": (
          /*variant*/
          t[15] === "filled"
        ),
        "mdc-text-field--outlined": (
          /*variant*/
          t[15] === "outlined"
        ),
        "smui-text-field--standard": (
          /*variant*/
          t[15] === "standard" && !/*textarea*/
          t[14]
        ),
        "mdc-text-field--no-label": (
          /*noLabel*/
          t[16] || /*label*/
          t[17] == null && !/*$$slots*/
          t[47].label
        ),
        "mdc-text-field--label-floating": (
          /*focused*/
          t[28] || /*value*/
          t[0] != null && /*value*/
          t[0] !== ""
        ),
        "mdc-text-field--with-leading-icon": (
          /*isUninitializedValue*/
          t[35](
            /*withLeadingIcon*/
            t[22]
          ) ? (
            /*$$slots*/
            t[47].leadingIcon
          ) : (
            /*withLeadingIcon*/
            t[22]
          )
        ),
        "mdc-text-field--with-trailing-icon": (
          /*isUninitializedValue*/
          t[35](
            /*withTrailingIcon*/
            t[23]
          ) ? (
            /*$$slots*/
            t[47].trailingIcon
          ) : (
            /*withTrailingIcon*/
            t[23]
          )
        ),
        "mdc-text-field--with-internal-counter": (
          /*textarea*/
          t[14] && /*$$slots*/
          t[47].internalCounter
        ),
        "mdc-text-field--invalid": (
          /*invalid*/
          t[1]
        ),
        .../*internalClasses*/
        t[25]
      })
    },
    {
      style: m = Object.entries(
        /*internalStyles*/
        t[26]
      ).map(Mi).concat([
        /*style*/
        t[10]
      ]).join(" ")
    },
    {
      for: (
        /* suppress a11y warning, since this is wrapped */
        void 0
      )
    },
    ut(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], $ = {};
  for (let O = 0; O < P.length; O += 1)
    $ = M($, P[O]);
  return {
    c() {
      e = j("label"), L && L.c(), n = Q(), A && A.c(), i = Q(), G(s.$$.fragment), l = Q(), T && T.c(), o = Q(), a.c(), u = Q(), G(f.$$.fragment), c = Q(), Z && Z.c(), ne(e, $);
    },
    m(O, H) {
      D(O, e, H), L && L.m(e, null), J(e, n), A && A.m(e, null), J(e, i), z(s, e, null), J(e, l), T && T.m(e, null), J(e, o), k[r].m(e, null), J(e, u), z(f, e, null), J(e, c), Z && Z.m(e, null), t[78](e), b = !0, _ || (v = [
        x(p = tt.call(null, e, {
          ripple: !/*textarea*/
          t[14] && /*variant*/
          t[15] === "filled",
          unbounded: !1,
          addClass: (
            /*addClass*/
            t[43]
          ),
          removeClass: (
            /*removeClass*/
            t[44]
          ),
          addStyle: (
            /*addStyle*/
            t[45]
          ),
          eventTarget: (
            /*inputElement*/
            t[33]
          ),
          activeTarget: (
            /*inputElement*/
            t[33]
          ),
          initPromise: (
            /*initPromise*/
            t[37]
          )
        })),
        x(g = Se.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        x(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        ge(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        ge(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          t[79]
        ),
        ge(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        ge(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          t[80]
        ),
        ge(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          t[40]
        ),
        ge(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          t[81]
        )
      ], _ = !0);
    },
    p(O, H) {
      !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" ? L ? (L.p(O, H), H[0] & /*textarea, variant*/
      49152 && E(L, 1)) : (L = Li(O), L.c(), E(L, 1), L.m(e, n)) : L && (ce(), C(L, 1, 1, () => {
        L = null;
      }), fe()), /*textarea*/
      O[14] || /*variant*/
      O[15] === "outlined" ? A ? (A.p(O, H), H[0] & /*textarea, variant*/
      49152 && E(A, 1)) : (A = Oi(O), A.c(), E(A, 1), A.m(e, i)) : A && (ce(), C(A, 1, 1, () => {
        A = null;
      }), fe());
      const ve = {};
      H[2] & /*$$scope*/
      33554432 && (ve.$$scope = { dirty: H, ctx: O }), s.$set(ve), T && T.p && (!b || H[2] & /*$$scope*/
      33554432) && le(
        T,
        I,
        O,
        /*$$scope*/
        O[87],
        b ? se(
          I,
          /*$$scope*/
          O[87],
          H,
          null
        ) : re(
          /*$$scope*/
          O[87]
        ),
        null
      );
      let be = r;
      r = X(O), r === be ? k[r].p(O, H) : (ce(), C(k[be], 1, 1, () => {
        k[be] = null;
      }), fe(), a = k[r], a ? a.p(O, H) : (a = k[r] = h[r](O), a.c()), E(a, 1), a.m(e, u));
      const _e = {};
      H[2] & /*$$scope*/
      33554432 && (_e.$$scope = { dirty: H, ctx: O }), f.$set(_e), !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" && /*ripple*/
      O[11] ? Z ? (Z.p(O, H), H[0] & /*textarea, variant, ripple*/
      51200 && E(Z, 1)) : (Z = Di(O), Z.c(), E(Z, 1), Z.m(e, null)) : Z && (ce(), C(Z, 1, 1, () => {
        Z = null;
      }), fe()), ne(e, $ = te(P, [
        (!b || H[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | H[1] & /*$$slots*/
        65536 && d !== (d = W({
          [
            /*className*/
            O[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            O[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            O[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            O[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            O[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            O[15] === "standard" && !/*textarea*/
            O[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            O[16] || /*label*/
            O[17] == null && !/*$$slots*/
            O[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            O[28] || /*value*/
            O[0] != null && /*value*/
            O[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            O[35](
              /*withLeadingIcon*/
              O[22]
            ) ? (
              /*$$slots*/
              O[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              O[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            O[35](
              /*withTrailingIcon*/
              O[23]
            ) ? (
              /*$$slots*/
              O[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              O[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            O[14] && /*$$slots*/
            O[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            O[1]
          ),
          .../*internalClasses*/
          O[25]
        }))) && { class: d },
        (!b || H[0] & /*internalStyles, style*/
        67109888 && m !== (m = Object.entries(
          /*internalStyles*/
          O[26]
        ).map(Mi).concat([
          /*style*/
          O[10]
        ]).join(" "))) && { style: m },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        H[1] & /*$$restProps*/
        32768 && ut(
          /*$$restProps*/
          O[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), p && pe(p.update) && H[0] & /*textarea, variant*/
      49152 | H[1] & /*inputElement*/
      4 && p.update.call(null, {
        ripple: !/*textarea*/
        O[14] && /*variant*/
        O[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          O[43]
        ),
        removeClass: (
          /*removeClass*/
          O[44]
        ),
        addStyle: (
          /*addStyle*/
          O[45]
        ),
        eventTarget: (
          /*inputElement*/
          O[33]
        ),
        activeTarget: (
          /*inputElement*/
          O[33]
        ),
        initPromise: (
          /*initPromise*/
          O[37]
        )
      }), g && pe(g.update) && H[0] & /*use*/
      256 && g.update.call(
        null,
        /*use*/
        O[8]
      );
    },
    i(O) {
      b || (E(L), E(A), E(s.$$.fragment, O), E(T, O), E(a), E(f.$$.fragment, O), E(Z), b = !0);
    },
    o(O) {
      C(L), C(A), C(s.$$.fragment, O), C(T, O), C(a), C(f.$$.fragment, O), C(Z), b = !1;
    },
    d(O) {
      O && R(e), L && L.d(), A && A.d(), V(s), T && T.d(O), k[r].d(), V(f), Z && Z.d(), t[78](null), _ = !1, Ee(v);
    }
  };
}
function Cu(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[87],
    bi
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[87],
        e ? se(
          n,
          /*$$scope*/
          s[87],
          l,
          du
        ) : re(
          /*$$scope*/
          s[87]
        ),
        bi
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Iu(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[87],
    gi
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[87],
        e ? se(
          n,
          /*$$scope*/
          s[87],
          l,
          fu
        ) : re(
          /*$$scope*/
          s[87]
        ),
        gi
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Li(t) {
  let e, n, i, s = (
    /*variant*/
    t[15] === "filled" && Ti()
  ), l = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && ki(t);
  return {
    c() {
      s && s.c(), e = Q(), l && l.c(), n = we();
    },
    m(o, r) {
      s && s.m(o, r), D(o, e, r), l && l.m(o, r), D(o, n, r), i = !0;
    },
    p(o, r) {
      /*variant*/
      o[15] === "filled" ? s || (s = Ti(), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), !/*noLabel*/
      o[16] && /*label*/
      (o[17] != null || /*$$slots*/
      o[47].label) ? l ? (l.p(o, r), r[0] & /*noLabel, label*/
      196608 | r[1] & /*$$slots*/
      65536 && E(l, 1)) : (l = ki(o), l.c(), E(l, 1), l.m(n.parentNode, n)) : l && (ce(), C(l, 1, 1, () => {
        l = null;
      }), fe());
    },
    i(o) {
      i || (E(l), i = !0);
    },
    o(o) {
      C(l), i = !1;
    },
    d(o) {
      o && (R(e), R(n)), s && s.d(o), l && l.d(o);
    }
  };
}
function Ti(t) {
  let e;
  return {
    c() {
      e = j("span"), U(e, "class", "mdc-text-field__ripple");
    },
    m(n, i) {
      D(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function ki(t) {
  let e, n;
  const i = [
    {
      floatAbove: (
        /*focused*/
        t[28] || /*value*/
        t[0] != null && /*value*/
        t[0] !== "" && (typeof /*value*/
        t[0] != "number" || !isNaN(
          /*value*/
          t[0]
        ))
      )
    },
    { required: (
      /*required*/
      t[13]
    ) },
    { wrapped: !0 },
    Me(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let s = {
    $$slots: { default: [Su] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < i.length; l += 1)
    s = M(s, i[l]);
  return e = new Rn({ props: s }), t[57](e), {
    c() {
      G(e.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), n = !0;
    },
    p(l, o) {
      const r = o[0] & /*focused, value, required*/
      268443649 | o[1] & /*$$restProps*/
      32768 ? te(i, [
        o[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            l[28] || /*value*/
            l[0] != null && /*value*/
            l[0] !== "" && (typeof /*value*/
            l[0] != "number" || !isNaN(
              /*value*/
              l[0]
            ))
          )
        },
        o[0] & /*required*/
        8192 && { required: (
          /*required*/
          l[13]
        ) },
        i[2],
        o[1] & /*$$restProps*/
        32768 && ue(Me(
          /*$$restProps*/
          l[46],
          "label$"
        ))
      ]) : {};
      o[0] & /*label*/
      131072 | o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      t[57](null), V(e, l);
    }
  };
}
function Su(t) {
  let e = (
    /*label*/
    (t[17] == null ? "" : (
      /*label*/
      t[17]
    )) + ""
  ), n, i;
  const s = (
    /*#slots*/
    t[56].label
  ), l = ie(
    s,
    t,
    /*$$scope*/
    t[87],
    Si
  );
  return {
    c() {
      n = De(e), l && l.c();
    },
    m(o, r) {
      D(o, n, r), l && l.m(o, r), i = !0;
    },
    p(o, r) {
      (!i || r[0] & /*label*/
      131072) && e !== (e = /*label*/
      (o[17] == null ? "" : (
        /*label*/
        o[17]
      )) + "") && Qe(n, e), l && l.p && (!i || r[2] & /*$$scope*/
      33554432) && le(
        l,
        s,
        o,
        /*$$scope*/
        o[87],
        i ? se(
          s,
          /*$$scope*/
          o[87],
          r,
          yu
        ) : re(
          /*$$scope*/
          o[87]
        ),
        Si
      );
    },
    i(o) {
      i || (E(l, o), i = !0);
    },
    o(o) {
      C(l, o), i = !1;
    },
    d(o) {
      o && R(n), l && l.d(o);
    }
  };
}
function Oi(t) {
  let e, n;
  const i = [
    {
      noLabel: (
        /*noLabel*/
        t[16] || /*label*/
        t[17] == null && !/*$$slots*/
        t[47].label
      )
    },
    Me(
      /*$$restProps*/
      t[46],
      "outline$"
    )
  ];
  let s = {
    $$slots: { default: [Tu] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < i.length; l += 1)
    s = M(s, i[l]);
  return e = new Ps({ props: s }), t[59](e), {
    c() {
      G(e.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), n = !0;
    },
    p(l, o) {
      const r = o[0] & /*noLabel, label*/
      196608 | o[1] & /*$$slots, $$restProps*/
      98304 ? te(i, [
        o[0] & /*noLabel, label*/
        196608 | o[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            l[16] || /*label*/
            l[17] == null && !/*$$slots*/
            l[47].label
          )
        },
        o[1] & /*$$restProps*/
        32768 && ue(Me(
          /*$$restProps*/
          l[46],
          "outline$"
        ))
      ]) : {};
      o[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | o[1] & /*$$restProps, $$slots*/
      98304 | o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      t[59](null), V(e, l);
    }
  };
}
function wi(t) {
  let e, n;
  const i = [
    {
      floatAbove: (
        /*focused*/
        t[28] || /*value*/
        t[0] != null && /*value*/
        t[0] !== "" && (typeof /*value*/
        t[0] != "number" || !isNaN(
          /*value*/
          t[0]
        ))
      )
    },
    { required: (
      /*required*/
      t[13]
    ) },
    { wrapped: !0 },
    Me(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let s = {
    $$slots: { default: [Lu] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < i.length; l += 1)
    s = M(s, i[l]);
  return e = new Rn({ props: s }), t[58](e), {
    c() {
      G(e.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), n = !0;
    },
    p(l, o) {
      const r = o[0] & /*focused, value, required*/
      268443649 | o[1] & /*$$restProps*/
      32768 ? te(i, [
        o[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            l[28] || /*value*/
            l[0] != null && /*value*/
            l[0] !== "" && (typeof /*value*/
            l[0] != "number" || !isNaN(
              /*value*/
              l[0]
            ))
          )
        },
        o[0] & /*required*/
        8192 && { required: (
          /*required*/
          l[13]
        ) },
        i[2],
        o[1] & /*$$restProps*/
        32768 && ue(Me(
          /*$$restProps*/
          l[46],
          "label$"
        ))
      ]) : {};
      o[0] & /*label*/
      131072 | o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      t[58](null), V(e, l);
    }
  };
}
function Lu(t) {
  let e = (
    /*label*/
    (t[17] == null ? "" : (
      /*label*/
      t[17]
    )) + ""
  ), n, i;
  const s = (
    /*#slots*/
    t[56].label
  ), l = ie(
    s,
    t,
    /*$$scope*/
    t[87],
    Ii
  );
  return {
    c() {
      n = De(e), l && l.c();
    },
    m(o, r) {
      D(o, n, r), l && l.m(o, r), i = !0;
    },
    p(o, r) {
      (!i || r[0] & /*label*/
      131072) && e !== (e = /*label*/
      (o[17] == null ? "" : (
        /*label*/
        o[17]
      )) + "") && Qe(n, e), l && l.p && (!i || r[2] & /*$$scope*/
      33554432) && le(
        l,
        s,
        o,
        /*$$scope*/
        o[87],
        i ? se(
          s,
          /*$$scope*/
          o[87],
          r,
          vu
        ) : re(
          /*$$scope*/
          o[87]
        ),
        Ii
      );
    },
    i(o) {
      i || (E(l, o), i = !0);
    },
    o(o) {
      C(l, o), i = !1;
    },
    d(o) {
      o && R(n), l && l.d(o);
    }
  };
}
function Tu(t) {
  let e, n, i = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && wi(t);
  return {
    c() {
      i && i.c(), e = we();
    },
    m(s, l) {
      i && i.m(s, l), D(s, e, l), n = !0;
    },
    p(s, l) {
      !/*noLabel*/
      s[16] && /*label*/
      (s[17] != null || /*$$slots*/
      s[47].label) ? i ? (i.p(s, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && E(i, 1)) : (i = wi(s), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (ce(), C(i, 1, 1, () => {
        i = null;
      }), fe());
    },
    i(s) {
      n || (E(i), n = !0);
    },
    o(s) {
      C(i), n = !1;
    },
    d(s) {
      s && R(e), i && i.d(s);
    }
  };
}
function ku(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[87],
    Ci
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[87],
        e ? se(
          n,
          /*$$scope*/
          s[87],
          l,
          _u
        ) : re(
          /*$$scope*/
          s[87]
        ),
        Ci
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Ou(t) {
  let e, n, i, s, l, o, r, a, u, f;
  const c = (
    /*#slots*/
    t[56].prefix
  ), d = ie(
    c,
    t,
    /*$$scope*/
    t[87],
    Ei
  );
  let m = (
    /*prefix*/
    t[20] != null && Pi(t)
  );
  const p = [
    { type: (
      /*type*/
      t[18]
    ) },
    { disabled: (
      /*disabled*/
      t[12]
    ) },
    { required: (
      /*required*/
      t[13]
    ) },
    { updateInvalid: (
      /*updateInvalid*/
      t[19]
    ) },
    { "aria-controls": (
      /*helperId*/
      t[27]
    ) },
    { "aria-describedby": (
      /*helperId*/
      t[27]
    ) },
    /*noLabel*/
    t[16] && /*label*/
    t[17] != null ? { placeholder: (
      /*label*/
      t[17]
    ) } : {},
    Me(
      /*$$restProps*/
      t[46],
      "input$"
    )
  ];
  function g(h) {
    t[69](h);
  }
  function b(h) {
    t[70](h);
  }
  function _(h) {
    t[71](h);
  }
  function v(h) {
    t[72](h);
  }
  let L = {};
  for (let h = 0; h < p.length; h += 1)
    L = M(L, p[h]);
  /*value*/
  t[0] !== void 0 && (L.value = /*value*/
  t[0]), /*files*/
  t[3] !== void 0 && (L.files = /*files*/
  t[3]), /*dirty*/
  t[4] !== void 0 && (L.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (L.invalid = /*invalid*/
  t[1]), i = new Rs({ props: L }), t[68](i), ee.push(() => et(i, "value", g)), ee.push(() => et(i, "files", b)), ee.push(() => et(i, "dirty", _)), ee.push(() => et(i, "invalid", v)), i.$on(
    "blur",
    /*blur_handler_2*/
    t[73]
  ), i.$on(
    "focus",
    /*focus_handler_2*/
    t[74]
  ), i.$on(
    "blur",
    /*blur_handler_3*/
    t[75]
  ), i.$on(
    "focus",
    /*focus_handler_3*/
    t[76]
  );
  let A = (
    /*suffix*/
    t[21] != null && Ri(t)
  );
  const I = (
    /*#slots*/
    t[56].suffix
  ), T = ie(
    I,
    t,
    /*$$scope*/
    t[87],
    yi
  );
  return {
    c() {
      d && d.c(), e = Q(), m && m.c(), n = Q(), G(i.$$.fragment), a = Q(), A && A.c(), u = Q(), T && T.c();
    },
    m(h, k) {
      d && d.m(h, k), D(h, e, k), m && m.m(h, k), D(h, n, k), z(i, h, k), D(h, a, k), A && A.m(h, k), D(h, u, k), T && T.m(h, k), f = !0;
    },
    p(h, k) {
      d && d.p && (!f || k[2] & /*$$scope*/
      33554432) && le(
        d,
        c,
        h,
        /*$$scope*/
        h[87],
        f ? se(
          c,
          /*$$scope*/
          h[87],
          k,
          gu
        ) : re(
          /*$$scope*/
          h[87]
        ),
        Ei
      ), /*prefix*/
      h[20] != null ? m ? (m.p(h, k), k[0] & /*prefix*/
      1048576 && E(m, 1)) : (m = Pi(h), m.c(), E(m, 1), m.m(n.parentNode, n)) : m && (ce(), C(m, 1, 1, () => {
        m = null;
      }), fe());
      const X = k[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | k[1] & /*$$restProps*/
      32768 ? te(p, [
        k[0] & /*type*/
        262144 && { type: (
          /*type*/
          h[18]
        ) },
        k[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          h[12]
        ) },
        k[0] & /*required*/
        8192 && { required: (
          /*required*/
          h[13]
        ) },
        k[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          h[19]
        ) },
        k[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          h[27]
        ) },
        k[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          h[27]
        ) },
        k[0] & /*noLabel, label*/
        196608 && ue(
          /*noLabel*/
          h[16] && /*label*/
          h[17] != null ? { placeholder: (
            /*label*/
            h[17]
          ) } : {}
        ),
        k[1] & /*$$restProps*/
        32768 && ue(Me(
          /*$$restProps*/
          h[46],
          "input$"
        ))
      ]) : {};
      !s && k[0] & /*value*/
      1 && (s = !0, X.value = /*value*/
      h[0], xe(() => s = !1)), !l && k[0] & /*files*/
      8 && (l = !0, X.files = /*files*/
      h[3], xe(() => l = !1)), !o && k[0] & /*dirty*/
      16 && (o = !0, X.dirty = /*dirty*/
      h[4], xe(() => o = !1)), !r && k[0] & /*invalid*/
      2 && (r = !0, X.invalid = /*invalid*/
      h[1], xe(() => r = !1)), i.$set(X), /*suffix*/
      h[21] != null ? A ? (A.p(h, k), k[0] & /*suffix*/
      2097152 && E(A, 1)) : (A = Ri(h), A.c(), E(A, 1), A.m(u.parentNode, u)) : A && (ce(), C(A, 1, 1, () => {
        A = null;
      }), fe()), T && T.p && (!f || k[2] & /*$$scope*/
      33554432) && le(
        T,
        I,
        h,
        /*$$scope*/
        h[87],
        f ? se(
          I,
          /*$$scope*/
          h[87],
          k,
          pu
        ) : re(
          /*$$scope*/
          h[87]
        ),
        yi
      );
    },
    i(h) {
      f || (E(d, h), E(m), E(i.$$.fragment, h), E(A), E(T, h), f = !0);
    },
    o(h) {
      C(d, h), C(m), C(i.$$.fragment, h), C(A), C(T, h), f = !1;
    },
    d(h) {
      h && (R(e), R(n), R(a), R(u)), d && d.d(h), m && m.d(h), t[68](null), V(i, h), A && A.d(h), T && T.d(h);
    }
  };
}
function wu(t) {
  let e, n, i, s, l, o, r, a;
  const u = [
    { disabled: (
      /*disabled*/
      t[12]
    ) },
    { required: (
      /*required*/
      t[13]
    ) },
    { updateInvalid: (
      /*updateInvalid*/
      t[19]
    ) },
    { "aria-controls": (
      /*helperId*/
      t[27]
    ) },
    { "aria-describedby": (
      /*helperId*/
      t[27]
    ) },
    Me(
      /*$$restProps*/
      t[46],
      "input$"
    )
  ];
  function f(b) {
    t[61](b);
  }
  function c(b) {
    t[62](b);
  }
  function d(b) {
    t[63](b);
  }
  let m = {};
  for (let b = 0; b < u.length; b += 1)
    m = M(m, u[b]);
  /*value*/
  t[0] !== void 0 && (m.value = /*value*/
  t[0]), /*dirty*/
  t[4] !== void 0 && (m.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (m.invalid = /*invalid*/
  t[1]), n = new Ds({ props: m }), t[60](n), ee.push(() => et(n, "value", f)), ee.push(() => et(n, "dirty", c)), ee.push(() => et(n, "invalid", d)), n.$on(
    "blur",
    /*blur_handler*/
    t[64]
  ), n.$on(
    "focus",
    /*focus_handler*/
    t[65]
  ), n.$on(
    "blur",
    /*blur_handler_1*/
    t[66]
  ), n.$on(
    "focus",
    /*focus_handler_1*/
    t[67]
  );
  const p = (
    /*#slots*/
    t[56].internalCounter
  ), g = ie(
    p,
    t,
    /*$$scope*/
    t[87],
    Ai
  );
  return {
    c() {
      e = j("span"), G(n.$$.fragment), o = Q(), g && g.c(), U(e, "class", r = W({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        t[46]) || /*$$restProps*/
        t[46].input$resizable
      }));
    },
    m(b, _) {
      D(b, e, _), z(n, e, null), J(e, o), g && g.m(e, null), a = !0;
    },
    p(b, _) {
      const v = _[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | _[1] & /*$$restProps*/
      32768 ? te(u, [
        _[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          b[12]
        ) },
        _[0] & /*required*/
        8192 && { required: (
          /*required*/
          b[13]
        ) },
        _[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          b[19]
        ) },
        _[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          b[27]
        ) },
        _[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          b[27]
        ) },
        _[1] & /*$$restProps*/
        32768 && ue(Me(
          /*$$restProps*/
          b[46],
          "input$"
        ))
      ]) : {};
      !i && _[0] & /*value*/
      1 && (i = !0, v.value = /*value*/
      b[0], xe(() => i = !1)), !s && _[0] & /*dirty*/
      16 && (s = !0, v.dirty = /*dirty*/
      b[4], xe(() => s = !1)), !l && _[0] & /*invalid*/
      2 && (l = !0, v.invalid = /*invalid*/
      b[1], xe(() => l = !1)), n.$set(v), g && g.p && (!a || _[2] & /*$$scope*/
      33554432) && le(
        g,
        p,
        b,
        /*$$scope*/
        b[87],
        a ? se(
          p,
          /*$$scope*/
          b[87],
          _,
          bu
        ) : re(
          /*$$scope*/
          b[87]
        ),
        Ai
      ), (!a || _[1] & /*$$restProps*/
      32768 && r !== (r = W({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        b[46]) || /*$$restProps*/
        b[46].input$resizable
      }))) && U(e, "class", r);
    },
    i(b) {
      a || (E(n.$$.fragment, b), E(g, b), a = !0);
    },
    o(b) {
      C(n.$$.fragment, b), C(g, b), a = !1;
    },
    d(b) {
      b && R(e), t[60](null), V(n), g && g.d(b);
    }
  };
}
function Pi(t) {
  let e, n;
  return e = new nu({
    props: {
      $$slots: { default: [Pu] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s[0] & /*prefix*/
      1048576 | s[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Pu(t) {
  let e;
  return {
    c() {
      e = De(
        /*prefix*/
        t[20]
      );
    },
    m(n, i) {
      D(n, e, i);
    },
    p(n, i) {
      i[0] & /*prefix*/
      1048576 && Qe(
        e,
        /*prefix*/
        n[20]
      );
    },
    d(n) {
      n && R(e);
    }
  };
}
function Ri(t) {
  let e, n;
  return e = new iu({
    props: {
      $$slots: { default: [Ru] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s[0] & /*suffix*/
      2097152 | s[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Ru(t) {
  let e;
  return {
    c() {
      e = De(
        /*suffix*/
        t[21]
      );
    },
    m(n, i) {
      D(n, e, i);
    },
    p(n, i) {
      i[0] & /*suffix*/
      2097152 && Qe(
        e,
        /*suffix*/
        n[21]
      );
    },
    d(n) {
      n && R(e);
    }
  };
}
function Du(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[87],
    vi
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[87],
        e ? se(
          n,
          /*$$scope*/
          s[87],
          l,
          hu
        ) : re(
          /*$$scope*/
          s[87]
        ),
        vi
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Di(t) {
  let e, n;
  const i = [Me(
    /*$$restProps*/
    t[46],
    "ripple$"
  )];
  let s = {};
  for (let l = 0; l < i.length; l += 1)
    s = M(s, i[l]);
  return e = new ws({ props: s }), t[77](e), {
    c() {
      G(e.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), n = !0;
    },
    p(l, o) {
      const r = o[1] & /*$$restProps*/
      32768 ? te(i, [ue(Me(
        /*$$restProps*/
        l[46],
        "ripple$"
      ))]) : {};
      e.$set(r);
    },
    i(l) {
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      t[77](null), V(e, l);
    }
  };
}
function Bi(t) {
  let e, n;
  const i = [Me(
    /*$$restProps*/
    t[46],
    "helperLine$"
  )];
  let s = {
    $$slots: { default: [Bu] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < i.length; l += 1)
    s = M(s, i[l]);
  return e = new tu({ props: s }), e.$on(
    "SMUITextfieldHelperText:id",
    /*handleHelperTextId*/
    t[41]
  ), e.$on(
    "SMUITextfieldHelperText:mount",
    /*handleHelperTextMount*/
    t[42]
  ), e.$on(
    "SMUITextfieldHelperText:unmount",
    /*SMUITextfieldHelperText_unmount_handler*/
    t[85]
  ), e.$on(
    "SMUITextfieldCharacterCounter:mount",
    /*handleCharacterCounterMount*/
    t[40]
  ), e.$on(
    "SMUITextfieldCharacterCounter:unmount",
    /*SMUITextfieldCharacterCounter_unmount_handler_1*/
    t[86]
  ), {
    c() {
      G(e.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), n = !0;
    },
    p(l, o) {
      const r = o[1] & /*$$restProps*/
      32768 ? te(i, [ue(Me(
        /*$$restProps*/
        l[46],
        "helperLine$"
      ))]) : {};
      o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: l }), e.$set(r);
    },
    i(l) {
      n || (E(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Bu(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].helper
  ), i = ie(
    n,
    t,
    /*$$scope*/
    t[87],
    hi
  );
  return {
    c() {
      i && i.c();
    },
    m(s, l) {
      i && i.m(s, l), e = !0;
    },
    p(s, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && le(
        i,
        n,
        s,
        /*$$scope*/
        s[87],
        e ? se(
          n,
          /*$$scope*/
          s[87],
          l,
          uu
        ) : re(
          /*$$scope*/
          s[87]
        ),
        hi
      );
    },
    i(s) {
      e || (E(i, s), e = !0);
    },
    o(s) {
      C(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Mu(t) {
  let e, n, i, s, l;
  const o = [Au, Eu], r = [];
  function a(f, c) {
    return (
      /*valued*/
      f[36] ? 0 : 1
    );
  }
  e = a(t), n = r[e] = o[e](t);
  let u = (
    /*$$slots*/
    t[47].helper && Bi(t)
  );
  return {
    c() {
      n.c(), i = Q(), u && u.c(), s = we();
    },
    m(f, c) {
      r[e].m(f, c), D(f, i, c), u && u.m(f, c), D(f, s, c), l = !0;
    },
    p(f, c) {
      n.p(f, c), /*$$slots*/
      f[47].helper ? u ? (u.p(f, c), c[1] & /*$$slots*/
      65536 && E(u, 1)) : (u = Bi(f), u.c(), E(u, 1), u.m(s.parentNode, s)) : u && (ce(), C(u, 1, 1, () => {
        u = null;
      }), fe());
    },
    i(f) {
      l || (E(n), E(u), l = !0);
    },
    o(f) {
      C(n), C(u), l = !1;
    },
    d(f) {
      f && (R(i), R(s)), r[e].d(f), u && u.d(f);
    }
  };
}
const Mi = ([t, e]) => `${t}: ${e};`, Fi = ([t, e]) => `${t}: ${e};`;
function Fu(t, e, n) {
  let i;
  const s = [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "focus",
    "blur",
    "layout",
    "getElement"
  ];
  let l = Y(e, s), { $$slots: o = {}, $$scope: r } = e;
  const a = os(o), { applyPassive: u } = ds, f = Ie(ye());
  let c = () => {
  };
  function d(S) {
    return S === c;
  }
  let { use: m = [] } = e, { class: p = "" } = e, { style: g = "" } = e, { ripple: b = !0 } = e, { disabled: _ = !1 } = e, { required: v = !1 } = e, { textarea: L = !1 } = e, { variant: A = L ? "outlined" : "standard" } = e, { noLabel: I = !1 } = e, { label: T = void 0 } = e, { type: h = "text" } = e, { value: k = l.input$emptyValueUndefined ? void 0 : c } = e, { files: X = c } = e;
  const Z = !d(k) || !d(X);
  d(k) && (k = void 0), d(X) && (X = null);
  let { invalid: P = c } = e, { updateInvalid: $ = d(P) } = e;
  d(P) && (P = !1);
  let { dirty: O = !1 } = e, { prefix: H = void 0 } = e, { suffix: ve = void 0 } = e, { validateOnValueChange: be = $ } = e, { useNativeValidation: _e = $ } = e, { withLeadingIcon: F = c } = e, { withTrailingIcon: w = c } = e, { input: K = void 0 } = e, { floatingLabel: Le = void 0 } = e, { lineRipple: ke = void 0 } = e, { notchedOutline: Fe = void 0 } = e, B, ae, ze = {}, Ge = {}, St, ft = !1, Ut = Xe("SMUI:addLayoutListener"), q, Ze, Gs = new Promise((S) => Ze = S), Lt, Tt, jt, kt, an = k;
  Ut && (q = Ut(Fn)), nt(() => {
    if (n(54, ae = new Wo(
      {
        // getRootAdapterMethods_
        addClass: Bn,
        removeClass: Mn,
        hasClass: Ys,
        registerTextFieldInteractionHandler: (S, Re) => qt().addEventListener(S, Re),
        deregisterTextFieldInteractionHandler: (S, Re) => qt().removeEventListener(S, Re),
        registerValidationAttributeChangeHandler: (S) => {
          const Re = (on) => on.map((un) => un.attributeName).filter((un) => un), Nn = new MutationObserver((on) => {
            _e && S(Re(on));
          }), wl = { attributes: !0 };
          return K && Nn.observe(K.getElement(), wl), Nn;
        },
        deregisterValidationAttributeChangeHandler: (S) => {
          S.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var S;
          return (S = K == null ? void 0 : K.getElement()) !== null && S !== void 0 ? S : null;
        },
        setInputAttr: (S, Re) => {
          K == null || K.addAttr(S, Re);
        },
        removeInputAttr: (S) => {
          K == null || K.removeAttr(S);
        },
        isFocused: () => document.activeElement === (K == null ? void 0 : K.getElement()),
        registerInputInteractionHandler: (S, Re) => {
          K == null || K.getElement().addEventListener(S, Re, u());
        },
        deregisterInputInteractionHandler: (S, Re) => {
          K == null || K.getElement().removeEventListener(S, Re, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (S) => Le && Le.float(S),
        getLabelWidth: () => Le ? Le.getWidth() : 0,
        hasLabel: () => !!Le,
        shakeLabel: (S) => Le && Le.shake(S),
        setLabelRequired: (S) => Le && Le.setRequired(S),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => ke && ke.activate(),
        deactivateLineRipple: () => ke && ke.deactivate(),
        setLineRippleTransformOrigin: (S) => ke && ke.setRippleCenter(S),
        // getOutlineAdapterMethods_
        closeOutline: () => Fe && Fe.closeNotch(),
        hasOutline: () => !!Fe,
        notchOutline: (S) => Fe && Fe.notch(S)
      },
      {
        get helperText() {
          return jt;
        },
        get characterCounter() {
          return kt;
        },
        get leadingIcon() {
          return Lt;
        },
        get trailingIcon() {
          return Tt;
        }
      }
    )), Z) {
      if (K == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      ae.init();
    } else
      zl().then(() => {
        if (K == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        ae.init();
      });
    return Ze(), () => {
      ae.destroy();
    };
  }), Nt(() => {
    q && q();
  });
  function Zs(S) {
    n(29, Lt = S.detail);
  }
  function Ws(S) {
    n(30, Tt = S.detail);
  }
  function Xs(S) {
    n(32, kt = S.detail);
  }
  function Ks(S) {
    n(27, St = S.detail);
  }
  function Js(S) {
    n(31, jt = S.detail);
  }
  function Ys(S) {
    var Re;
    return S in ze ? (Re = ze[S]) !== null && Re !== void 0 ? Re : null : qt().classList.contains(S);
  }
  function Bn(S) {
    ze[S] || n(25, ze[S] = !0, ze);
  }
  function Mn(S) {
    (!(S in ze) || ze[S]) && n(25, ze[S] = !1, ze);
  }
  function $s(S, Re) {
    Ge[S] != Re && (Re === "" || Re == null ? (delete Ge[S], n(26, Ge)) : n(26, Ge[S] = Re, Ge));
  }
  function Qs() {
    K == null || K.focus();
  }
  function xs() {
    K == null || K.blur();
  }
  function Fn() {
    if (ae) {
      const S = ae.shouldFloat;
      ae.notchOutline(S);
    }
  }
  function qt() {
    return B;
  }
  function el(S) {
    ee[S ? "unshift" : "push"](() => {
      Le = S, n(5, Le);
    });
  }
  function tl(S) {
    ee[S ? "unshift" : "push"](() => {
      Le = S, n(5, Le);
    });
  }
  function nl(S) {
    ee[S ? "unshift" : "push"](() => {
      Fe = S, n(7, Fe);
    });
  }
  function il(S) {
    ee[S ? "unshift" : "push"](() => {
      K = S, n(2, K);
    });
  }
  function sl(S) {
    k = S, n(0, k);
  }
  function ll(S) {
    O = S, n(4, O);
  }
  function rl(S) {
    P = S, n(1, P), n(54, ae), n(19, $);
  }
  const al = () => n(28, ft = !1), ol = () => n(28, ft = !0), ul = (S) => Te(B, "blur", S), cl = (S) => Te(B, "focus", S);
  function fl(S) {
    ee[S ? "unshift" : "push"](() => {
      K = S, n(2, K);
    });
  }
  function dl(S) {
    k = S, n(0, k);
  }
  function ml(S) {
    X = S, n(3, X);
  }
  function hl(S) {
    O = S, n(4, O);
  }
  function pl(S) {
    P = S, n(1, P), n(54, ae), n(19, $);
  }
  const gl = () => n(28, ft = !1), bl = () => n(28, ft = !0), _l = (S) => Te(B, "blur", S), vl = (S) => Te(B, "focus", S);
  function yl(S) {
    ee[S ? "unshift" : "push"](() => {
      ke = S, n(6, ke);
    });
  }
  function El(S) {
    ee[S ? "unshift" : "push"](() => {
      B = S, n(24, B);
    });
  }
  const Al = () => n(29, Lt = void 0), Cl = () => n(30, Tt = void 0), Il = () => n(32, kt = void 0);
  function Sl(S) {
    ee[S ? "unshift" : "push"](() => {
      B = S, n(24, B);
    });
  }
  const Ll = () => n(29, Lt = void 0), Tl = () => n(30, Tt = void 0), kl = () => {
    n(27, St = void 0), n(31, jt = void 0);
  }, Ol = () => n(32, kt = void 0);
  return t.$$set = (S) => {
    e = M(M({}, e), Ae(S)), n(46, l = Y(e, s)), "use" in S && n(8, m = S.use), "class" in S && n(9, p = S.class), "style" in S && n(10, g = S.style), "ripple" in S && n(11, b = S.ripple), "disabled" in S && n(12, _ = S.disabled), "required" in S && n(13, v = S.required), "textarea" in S && n(14, L = S.textarea), "variant" in S && n(15, A = S.variant), "noLabel" in S && n(16, I = S.noLabel), "label" in S && n(17, T = S.label), "type" in S && n(18, h = S.type), "value" in S && n(0, k = S.value), "files" in S && n(3, X = S.files), "invalid" in S && n(1, P = S.invalid), "updateInvalid" in S && n(19, $ = S.updateInvalid), "dirty" in S && n(4, O = S.dirty), "prefix" in S && n(20, H = S.prefix), "suffix" in S && n(21, ve = S.suffix), "validateOnValueChange" in S && n(48, be = S.validateOnValueChange), "useNativeValidation" in S && n(49, _e = S.useNativeValidation), "withLeadingIcon" in S && n(22, F = S.withLeadingIcon), "withTrailingIcon" in S && n(23, w = S.withTrailingIcon), "input" in S && n(2, K = S.input), "floatingLabel" in S && n(5, Le = S.floatingLabel), "lineRipple" in S && n(6, ke = S.lineRipple), "notchedOutline" in S && n(7, Fe = S.notchedOutline), "$$scope" in S && n(87, r = S.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*input*/
    4 && n(33, i = K && K.getElement()), t.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | t.$$.dirty[1] & /*instance*/
    8388608 && ae && ae.isValid() !== !P && ($ ? n(1, P = !ae.isValid()) : ae.setValid(!P)), t.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && ae && ae.getValidateOnValueChange() !== be && ae.setValidateOnValueChange(d(be) ? !1 : be), t.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && ae && ae.setUseNativeValidation(d(_e) ? !0 : _e), t.$$.dirty[0] & /*disabled*/
    4096 | t.$$.dirty[1] & /*instance*/
    8388608 && ae && ae.setDisabled(_), t.$$.dirty[0] & /*value*/
    1 | t.$$.dirty[1] & /*instance, previousValue*/
    25165824 && ae && Z && an !== k) {
      n(55, an = k);
      const S = `${k}`;
      ae.getValue() !== S && ae.setValue(S);
    }
  }, [
    k,
    P,
    K,
    X,
    O,
    Le,
    ke,
    Fe,
    m,
    p,
    g,
    b,
    _,
    v,
    L,
    A,
    I,
    T,
    h,
    $,
    H,
    ve,
    F,
    w,
    B,
    ze,
    Ge,
    St,
    ft,
    Lt,
    Tt,
    jt,
    kt,
    i,
    f,
    d,
    Z,
    Gs,
    Zs,
    Ws,
    Xs,
    Ks,
    Js,
    Bn,
    Mn,
    $s,
    l,
    a,
    be,
    _e,
    Qs,
    xs,
    Fn,
    qt,
    ae,
    an,
    o,
    el,
    tl,
    nl,
    il,
    sl,
    ll,
    rl,
    al,
    ol,
    ul,
    cl,
    fl,
    dl,
    ml,
    hl,
    pl,
    gl,
    bl,
    _l,
    vl,
    yl,
    El,
    Al,
    Cl,
    Il,
    Sl,
    Ll,
    Tl,
    kl,
    Ol,
    r
  ];
}
class Bs extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      Fu,
      Mu,
      oe,
      {
        use: 8,
        class: 9,
        style: 10,
        ripple: 11,
        disabled: 12,
        required: 13,
        textarea: 14,
        variant: 15,
        noLabel: 16,
        label: 17,
        type: 18,
        value: 0,
        files: 3,
        invalid: 1,
        updateInvalid: 19,
        dirty: 4,
        prefix: 20,
        suffix: 21,
        validateOnValueChange: 48,
        useNativeValidation: 49,
        withLeadingIcon: 22,
        withTrailingIcon: 23,
        input: 2,
        floatingLabel: 5,
        lineRipple: 6,
        notchedOutline: 7,
        focus: 50,
        blur: 51,
        layout: 52,
        getElement: 53
      },
      null,
      [-1, -1, -1, -1]
    );
  }
  get use() {
    return this.$$.ctx[8];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[9];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[10];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get ripple() {
    return this.$$.ctx[11];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), y();
  }
  get disabled() {
    return this.$$.ctx[12];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), y();
  }
  get required() {
    return this.$$.ctx[13];
  }
  set required(e) {
    this.$$set({ required: e }), y();
  }
  get textarea() {
    return this.$$.ctx[14];
  }
  set textarea(e) {
    this.$$set({ textarea: e }), y();
  }
  get variant() {
    return this.$$.ctx[15];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get noLabel() {
    return this.$$.ctx[16];
  }
  set noLabel(e) {
    this.$$set({ noLabel: e }), y();
  }
  get label() {
    return this.$$.ctx[17];
  }
  set label(e) {
    this.$$set({ label: e }), y();
  }
  get type() {
    return this.$$.ctx[18];
  }
  set type(e) {
    this.$$set({ type: e }), y();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), y();
  }
  get files() {
    return this.$$.ctx[3];
  }
  set files(e) {
    this.$$set({ files: e }), y();
  }
  get invalid() {
    return this.$$.ctx[1];
  }
  set invalid(e) {
    this.$$set({ invalid: e }), y();
  }
  get updateInvalid() {
    return this.$$.ctx[19];
  }
  set updateInvalid(e) {
    this.$$set({ updateInvalid: e }), y();
  }
  get dirty() {
    return this.$$.ctx[4];
  }
  set dirty(e) {
    this.$$set({ dirty: e }), y();
  }
  get prefix() {
    return this.$$.ctx[20];
  }
  set prefix(e) {
    this.$$set({ prefix: e }), y();
  }
  get suffix() {
    return this.$$.ctx[21];
  }
  set suffix(e) {
    this.$$set({ suffix: e }), y();
  }
  get validateOnValueChange() {
    return this.$$.ctx[48];
  }
  set validateOnValueChange(e) {
    this.$$set({ validateOnValueChange: e }), y();
  }
  get useNativeValidation() {
    return this.$$.ctx[49];
  }
  set useNativeValidation(e) {
    this.$$set({ useNativeValidation: e }), y();
  }
  get withLeadingIcon() {
    return this.$$.ctx[22];
  }
  set withLeadingIcon(e) {
    this.$$set({ withLeadingIcon: e }), y();
  }
  get withTrailingIcon() {
    return this.$$.ctx[23];
  }
  set withTrailingIcon(e) {
    this.$$set({ withTrailingIcon: e }), y();
  }
  get input() {
    return this.$$.ctx[2];
  }
  set input(e) {
    this.$$set({ input: e }), y();
  }
  get floatingLabel() {
    return this.$$.ctx[5];
  }
  set floatingLabel(e) {
    this.$$set({ floatingLabel: e }), y();
  }
  get lineRipple() {
    return this.$$.ctx[6];
  }
  set lineRipple(e) {
    this.$$set({ lineRipple: e }), y();
  }
  get notchedOutline() {
    return this.$$.ctx[7];
  }
  set notchedOutline(e) {
    this.$$set({ notchedOutline: e }), y();
  }
  get focus() {
    return this.$$.ctx[50];
  }
  get blur() {
    return this.$$.ctx[51];
  }
  get layout() {
    return this.$$.ctx[52];
  }
  get getElement() {
    return this.$$.ctx[53];
  }
}
me(
  Bs,
  { use: {}, class: {}, style: {}, ripple: { type: "Boolean" }, disabled: { type: "Boolean" }, required: { type: "Boolean" }, textarea: { type: "Boolean" }, variant: {}, noLabel: { type: "Boolean" }, label: {}, type: {}, value: {}, files: {}, invalid: {}, updateInvalid: {}, dirty: { type: "Boolean" }, prefix: {}, suffix: {}, validateOnValueChange: {}, useNativeValidation: {}, withLeadingIcon: {}, withTrailingIcon: {}, input: {}, floatingLabel: {}, lineRipple: {}, notchedOutline: {} },
  [
    "label",
    "leadingIcon",
    "default",
    "internalCounter",
    "prefix",
    "suffix",
    "trailingIcon",
    "ripple",
    "helper"
  ],
  ["focus", "blur", "layout", "getElement"],
  !0
);
/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var mt;
(function(t) {
  t.PROCESSING = "mdc-switch--processing", t.SELECTED = "mdc-switch--selected", t.UNSELECTED = "mdc-switch--unselected";
})(mt || (mt = {}));
var Ni;
(function(t) {
  t.RIPPLE = ".mdc-switch__ripple";
})(Ni || (Ni = {}));
/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Nu(t, e, n) {
  var i = Hu(t, e), s = i.getObservers(e);
  return s.push(n), function() {
    s.splice(s.indexOf(n), 1);
  };
}
var Qt = /* @__PURE__ */ new WeakMap();
function Hu(t, e) {
  var n = /* @__PURE__ */ new Map();
  Qt.has(t) || Qt.set(t, {
    isEnabled: !0,
    getObservers: function(u) {
      var f = n.get(u) || [];
      return n.has(u) || n.set(u, f), f;
    },
    installedProperties: /* @__PURE__ */ new Set()
  });
  var i = Qt.get(t);
  if (i.installedProperties.has(e))
    return i;
  var s = Uu(t, e) || {
    configurable: !0,
    enumerable: !0,
    value: t[e],
    writable: !0
  }, l = Pe({}, s), o = s.get, r = s.set;
  if ("value" in s) {
    delete l.value, delete l.writable;
    var a = s.value;
    o = function() {
      return a;
    }, s.writable && (r = function(u) {
      a = u;
    });
  }
  return o && (l.get = function() {
    return o.call(this);
  }), r && (l.set = function(u) {
    var f, c, d = o ? o.call(this) : u;
    if (r.call(this, u), i.isEnabled && (!o || u !== d))
      try {
        for (var m = Ye(i.getObservers(e)), p = m.next(); !p.done; p = m.next()) {
          var g = p.value;
          g(u, d);
        }
      } catch (b) {
        f = { error: b };
      } finally {
        try {
          p && !p.done && (c = m.return) && c.call(m);
        } finally {
          if (f) throw f.error;
        }
      }
  }), i.installedProperties.add(e), Object.defineProperty(t, e, l), i;
}
function Uu(t, e) {
  for (var n = t, i; n && (i = Object.getOwnPropertyDescriptor(n, e), !i); )
    n = Object.getPrototypeOf(n);
  return i;
}
function ju(t, e) {
  var n = Qt.get(t);
  n && (n.isEnabled = e);
}
/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var qu = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var i = t.call(this, n) || this;
      return i.unobserves = /* @__PURE__ */ new Set(), i;
    }
    return e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.unobserve();
    }, e.prototype.observe = function(n, i) {
      var s, l, o = this, r = [];
      try {
        for (var a = Ye(Object.keys(i)), u = a.next(); !u.done; u = a.next()) {
          var f = u.value, c = i[f].bind(this);
          r.push(this.observeProperty(n, f, c));
        }
      } catch (m) {
        s = { error: m };
      } finally {
        try {
          u && !u.done && (l = a.return) && l.call(a);
        } finally {
          if (s) throw s.error;
        }
      }
      var d = function() {
        var m, p;
        try {
          for (var g = Ye(r), b = g.next(); !b.done; b = g.next()) {
            var _ = b.value;
            _();
          }
        } catch (v) {
          m = { error: v };
        } finally {
          try {
            b && !b.done && (p = g.return) && p.call(g);
          } finally {
            if (m) throw m.error;
          }
        }
        o.unobserves.delete(d);
      };
      return this.unobserves.add(d), d;
    }, e.prototype.observeProperty = function(n, i, s) {
      return Nu(n, i, s);
    }, e.prototype.setObserversEnabled = function(n, i) {
      ju(n, i);
    }, e.prototype.unobserve = function() {
      var n, i;
      try {
        for (var s = Ye(Ql([], $l(this.unobserves))), l = s.next(); !l.done; l = s.next()) {
          var o = l.value;
          o();
        }
      } catch (r) {
        n = { error: r };
      } finally {
        try {
          l && !l.done && (i = s.return) && i.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e;
  }(st)
);
/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var zu = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var i = t.call(this, n) || this;
      return i.handleClick = i.handleClick.bind(i), i;
    }
    return e.prototype.init = function() {
      this.observe(this.adapter.state, {
        disabled: this.stopProcessingIfDisabled,
        processing: this.stopProcessingIfDisabled
      });
    }, e.prototype.handleClick = function() {
      this.adapter.state.disabled || (this.adapter.state.selected = !this.adapter.state.selected);
    }, e.prototype.stopProcessingIfDisabled = function() {
      this.adapter.state.disabled && (this.adapter.state.processing = !1);
    }, e;
  }(qu)
), Vu = (
  /** @class */
  function(t) {
    qe(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.init = function() {
      t.prototype.init.call(this), this.observe(this.adapter.state, {
        disabled: this.onDisabledChange,
        processing: this.onProcessingChange,
        selected: this.onSelectedChange
      });
    }, e.prototype.initFromDOM = function() {
      this.setObserversEnabled(this.adapter.state, !1), this.adapter.state.selected = this.adapter.hasClass(mt.SELECTED), this.onSelectedChange(), this.adapter.state.disabled = this.adapter.isDisabled(), this.adapter.state.processing = this.adapter.hasClass(mt.PROCESSING), this.setObserversEnabled(this.adapter.state, !0), this.stopProcessingIfDisabled();
    }, e.prototype.onDisabledChange = function() {
      this.adapter.setDisabled(this.adapter.state.disabled);
    }, e.prototype.onProcessingChange = function() {
      this.toggleClass(this.adapter.state.processing, mt.PROCESSING);
    }, e.prototype.onSelectedChange = function() {
      this.adapter.setAriaChecked(String(this.adapter.state.selected)), this.toggleClass(this.adapter.state.selected, mt.SELECTED), this.toggleClass(!this.adapter.state.selected, mt.UNSELECTED);
    }, e.prototype.toggleClass = function(n, i) {
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e;
  }(zu)
);
function Hi(t) {
  let e, n, i, s, l, o, r, a, u, f, c = [
    {
      class: r = W({
        [
          /*icons$class*/
          t[8]
        ]: !0,
        "mdc-switch__icons": !0
      })
    },
    Me(
      /*$$restProps*/
      t[19],
      "icons$"
    )
  ], d = {};
  for (let m = 0; m < c.length; m += 1)
    d = M(d, c[m]);
  return {
    c() {
      e = j("div"), n = at("svg"), i = at("path"), s = Q(), l = at("svg"), o = at("path"), U(i, "d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"), U(n, "class", "mdc-switch__icon mdc-switch__icon--on"), U(n, "viewBox", "0 0 24 24"), U(o, "d", "M20 13H4v-2h16v2z"), U(l, "class", "mdc-switch__icon mdc-switch__icon--off"), U(l, "viewBox", "0 0 24 24"), ne(e, d);
    },
    m(m, p) {
      D(m, e, p), J(e, n), J(n, i), J(e, s), J(e, l), J(l, o), u || (f = x(a = Se.call(
        null,
        e,
        /*icons$use*/
        t[7]
      )), u = !0);
    },
    p(m, p) {
      ne(e, d = te(c, [
        p[0] & /*icons$class*/
        256 && r !== (r = W({
          [
            /*icons$class*/
            m[8]
          ]: !0,
          "mdc-switch__icons": !0
        })) && { class: r },
        p[0] & /*$$restProps*/
        524288 && Me(
          /*$$restProps*/
          m[19],
          "icons$"
        )
      ])), a && pe(a.update) && p[0] & /*icons$use*/
      128 && a.update.call(
        null,
        /*icons$use*/
        m[7]
      );
    },
    d(m) {
      m && R(e), u = !1, f();
    }
  };
}
function Ui(t) {
  let e;
  return {
    c() {
      e = j("div"), e.innerHTML = '<div class="mdc-switch__focus-ring"></div>', U(e, "class", "mdc-switch__focus-ring-wrapper");
    },
    m(n, i) {
      D(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Gu(t) {
  let e, n, i, s, l, o, r, a, u, f, c, d, m, p, g, b, _ = (
    /*icons*/
    t[6] && Hi(t)
  ), v = (
    /*focusRing*/
    t[4] && Ui()
  ), L = [
    {
      class: c = W({
        [
          /*className*/
          t[3]
        ]: !0,
        "mdc-switch": !0,
        "mdc-switch--unselected": !/*selected*/
        t[10],
        "mdc-switch--selected": (
          /*selected*/
          t[10]
        ),
        "mdc-switch--processing": (
          /*processing*/
          t[1]
        ),
        "smui-switch--color-secondary": (
          /*color*/
          t[5] === "secondary"
        ),
        .../*internalClasses*/
        t[12]
      })
    },
    { type: "button" },
    { role: "switch" },
    {
      "aria-checked": d = /*selected*/
      t[10] ? "true" : "false"
    },
    { disabled: (
      /*disabled*/
      t[0]
    ) },
    /*inputProps*/
    t[16],
    ut(
      /*$$restProps*/
      t[19],
      ["icons$"]
    )
  ], A = {};
  for (let I = 0; I < L.length; I += 1)
    A = M(A, L[I]);
  return {
    c() {
      e = j("button"), n = j("div"), i = Q(), s = j("div"), l = j("div"), o = j("div"), o.innerHTML = '<div class="mdc-elevation-overlay"></div>', r = Q(), a = j("div"), u = Q(), _ && _.c(), f = Q(), v && v.c(), U(n, "class", "mdc-switch__track"), U(o, "class", "mdc-switch__shadow"), U(a, "class", "mdc-switch__ripple"), U(l, "class", "mdc-switch__handle"), U(s, "class", "mdc-switch__handle-track"), ne(e, A);
    },
    m(I, T) {
      D(I, e, T), J(e, n), J(e, i), J(e, s), J(s, l), J(l, o), J(l, r), J(l, a), t[28](a), J(l, u), _ && _.m(l, null), J(e, f), v && v.m(e, null), e.autofocus && e.focus(), t[29](e), g || (b = [
        x(m = Se.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        x(
          /*forwardEvents*/
          t[15].call(null, e)
        ),
        x(p = tt.call(null, e, {
          unbounded: !0,
          color: (
            /*color*/
            t[5]
          ),
          active: (
            /*rippleActive*/
            t[14]
          ),
          rippleElement: (
            /*rippleElement*/
            t[13]
          ),
          disabled: (
            /*disabled*/
            t[0]
          ),
          addClass: (
            /*addClass*/
            t[17]
          ),
          removeClass: (
            /*removeClass*/
            t[18]
          )
        })),
        ge(
          e,
          "click",
          /*click_handler*/
          t[30]
        )
      ], g = !0);
    },
    p(I, T) {
      /*icons*/
      I[6] ? _ ? _.p(I, T) : (_ = Hi(I), _.c(), _.m(l, null)) : _ && (_.d(1), _ = null), /*focusRing*/
      I[4] ? v || (v = Ui(), v.c(), v.m(e, null)) : v && (v.d(1), v = null), ne(e, A = te(L, [
        T[0] & /*className, selected, processing, color, internalClasses*/
        5162 && c !== (c = W({
          [
            /*className*/
            I[3]
          ]: !0,
          "mdc-switch": !0,
          "mdc-switch--unselected": !/*selected*/
          I[10],
          "mdc-switch--selected": (
            /*selected*/
            I[10]
          ),
          "mdc-switch--processing": (
            /*processing*/
            I[1]
          ),
          "smui-switch--color-secondary": (
            /*color*/
            I[5] === "secondary"
          ),
          .../*internalClasses*/
          I[12]
        })) && { class: c },
        { type: "button" },
        { role: "switch" },
        T[0] & /*selected*/
        1024 && d !== (d = /*selected*/
        I[10] ? "true" : "false") && {
          "aria-checked": d
        },
        T[0] & /*disabled*/
        1 && { disabled: (
          /*disabled*/
          I[0]
        ) },
        /*inputProps*/
        I[16],
        T[0] & /*$$restProps*/
        524288 && ut(
          /*$$restProps*/
          I[19],
          ["icons$"]
        )
      ])), m && pe(m.update) && T[0] & /*use*/
      4 && m.update.call(
        null,
        /*use*/
        I[2]
      ), p && pe(p.update) && T[0] & /*color, rippleActive, rippleElement, disabled*/
      24609 && p.update.call(null, {
        unbounded: !0,
        color: (
          /*color*/
          I[5]
        ),
        active: (
          /*rippleActive*/
          I[14]
        ),
        rippleElement: (
          /*rippleElement*/
          I[13]
        ),
        disabled: (
          /*disabled*/
          I[0]
        ),
        addClass: (
          /*addClass*/
          I[17]
        ),
        removeClass: (
          /*removeClass*/
          I[18]
        )
      });
    },
    i: Ce,
    o: Ce,
    d(I) {
      I && R(e), t[28](null), _ && _.d(), v && v.d(), t[29](null), g = !1, Ee(b);
    }
  };
}
function Zu(t, e, n) {
  const i = [
    "use",
    "class",
    "disabled",
    "focusRing",
    "color",
    "group",
    "checked",
    "value",
    "processing",
    "icons",
    "icons$use",
    "icons$class",
    "getId",
    "getElement"
  ];
  let s = Y(e, i);
  var l;
  const o = Ie(ye());
  let r = () => {
  };
  function a(B) {
    return B === r;
  }
  let { use: u = [] } = e, { class: f = "" } = e, { disabled: c = !1 } = e, { focusRing: d = !1 } = e, { color: m = "primary" } = e, { group: p = r } = e, { checked: g = r } = e, { value: b = null } = e, { processing: _ = !1 } = e, { icons: v = !0 } = e, { icons$use: L = [] } = e, { icons$class: A = "" } = e, I, T, h = {}, k, X = !1, Z = (l = Xe("SMUI:generic:input:props")) !== null && l !== void 0 ? l : {}, P = a(p) ? a(g) ? !1 : g : p.indexOf(b) !== -1, $ = {
    get disabled() {
      return c;
    },
    set disabled(B) {
      n(0, c = B);
    },
    get processing() {
      return _;
    },
    set processing(B) {
      n(1, _ = B);
    },
    get selected() {
      return P;
    },
    set selected(B) {
      n(10, P = B);
    }
  }, O = g, H = a(p) ? [] : [...p], ve = P;
  nt(() => {
    n(11, T = new Vu({
      addClass: _e,
      hasClass: be,
      isDisabled: () => c,
      removeClass: F,
      setAriaChecked: () => {
      },
      // Handled automatically.
      setDisabled: (ae) => {
        n(0, c = ae);
      },
      state: $
    }));
    const B = {
      get element() {
        return K();
      },
      get checked() {
        return P;
      },
      set checked(ae) {
        P !== ae && ($.selected = ae, I && Te(I, "SMUISwitch:change", { selected: ae, value: b }));
      },
      activateRipple() {
        c || n(14, X = !0);
      },
      deactivateRipple() {
        n(14, X = !1);
      }
    };
    return Te(I, "SMUIGenericInput:mount", B), T.init(), T.initFromDOM(), () => {
      Te(I, "SMUIGenericInput:unmount", B), T.destroy();
    };
  });
  function be(B) {
    return B in h ? h[B] : K().classList.contains(B);
  }
  function _e(B) {
    h[B] || n(12, h[B] = !0, h);
  }
  function F(B) {
    (!(B in h) || h[B]) && n(12, h[B] = !1, h);
  }
  function w() {
    return Z && Z.id;
  }
  function K() {
    return I;
  }
  function Le(B) {
    ee[B ? "unshift" : "push"](() => {
      k = B, n(13, k);
    });
  }
  function ke(B) {
    ee[B ? "unshift" : "push"](() => {
      I = B, n(9, I);
    });
  }
  const Fe = () => T && T.handleClick();
  return t.$$set = (B) => {
    e = M(M({}, e), Ae(B)), n(19, s = Y(e, i)), "use" in B && n(2, u = B.use), "class" in B && n(3, f = B.class), "disabled" in B && n(0, c = B.disabled), "focusRing" in B && n(4, d = B.focusRing), "color" in B && n(5, m = B.color), "group" in B && n(20, p = B.group), "checked" in B && n(21, g = B.checked), "value" in B && n(22, b = B.value), "processing" in B && n(1, _ = B.processing), "icons" in B && n(6, v = B.icons), "icons$use" in B && n(7, L = B.icons$use), "icons$class" in B && n(8, A = B.icons$class);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*group, previousSelected, selected, value, previousGroup, checked, previousChecked, element*/
    242222592) {
      let B = !1;
      if (!a(p))
        if (ve !== P) {
          const ae = p.indexOf(b);
          P && ae === -1 ? (p.push(b), n(20, p), n(27, ve), n(10, P), n(22, b), n(26, H), n(21, g), n(25, O), n(9, I)) : !P && ae !== -1 && (p.splice(ae, 1), n(20, p), n(27, ve), n(10, P), n(22, b), n(26, H), n(21, g), n(25, O), n(9, I)), B = !0;
        } else {
          const ae = H.indexOf(b), ze = p.indexOf(b);
          ae > -1 && ze === -1 ? $.selected = !1 : ze > -1 && ae === -1 && ($.selected = !0);
        }
      a(g) ? ve !== P && (B = !0) : g !== P && (g === O ? (n(21, g = P), B = !0) : $.selected = g), n(25, O = g), n(26, H = a(p) ? [] : [...p]), n(27, ve = P), B && I && Te(I, "SMUISwitch:change", { selected: P, value: b });
    }
  }, [
    c,
    _,
    u,
    f,
    d,
    m,
    v,
    L,
    A,
    I,
    P,
    T,
    h,
    k,
    X,
    o,
    Z,
    _e,
    F,
    s,
    p,
    g,
    b,
    w,
    K,
    O,
    H,
    ve,
    Le,
    ke,
    Fe
  ];
}
class Ms extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      Zu,
      Gu,
      oe,
      {
        use: 2,
        class: 3,
        disabled: 0,
        focusRing: 4,
        color: 5,
        group: 20,
        checked: 21,
        value: 22,
        processing: 1,
        icons: 6,
        icons$use: 7,
        icons$class: 8,
        getId: 23,
        getElement: 24
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get disabled() {
    return this.$$.ctx[0];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), y();
  }
  get focusRing() {
    return this.$$.ctx[4];
  }
  set focusRing(e) {
    this.$$set({ focusRing: e }), y();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get group() {
    return this.$$.ctx[20];
  }
  set group(e) {
    this.$$set({ group: e }), y();
  }
  get checked() {
    return this.$$.ctx[21];
  }
  set checked(e) {
    this.$$set({ checked: e }), y();
  }
  get value() {
    return this.$$.ctx[22];
  }
  set value(e) {
    this.$$set({ value: e }), y();
  }
  get processing() {
    return this.$$.ctx[1];
  }
  set processing(e) {
    this.$$set({ processing: e }), y();
  }
  get icons() {
    return this.$$.ctx[6];
  }
  set icons(e) {
    this.$$set({ icons: e }), y();
  }
  get icons$use() {
    return this.$$.ctx[7];
  }
  set icons$use(e) {
    this.$$set({ icons$use: e }), y();
  }
  get icons$class() {
    return this.$$.ctx[8];
  }
  set icons$class(e) {
    this.$$set({ icons$class: e }), y();
  }
  get getId() {
    return this.$$.ctx[23];
  }
  get getElement() {
    return this.$$.ctx[24];
  }
}
me(Ms, { use: {}, class: {}, disabled: { type: "Boolean" }, focusRing: { type: "Boolean" }, color: {}, group: {}, checked: {}, value: {}, processing: { type: "Boolean" }, icons: { type: "Boolean" }, icons$use: {}, icons$class: {} }, [], ["getId", "getElement"], !0);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Wu = {
  ROOT: "mdc-form-field"
}, Xu = {
  LABEL_SELECTOR: ".mdc-form-field > label"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ku = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var i = t.call(this, Pe(Pe({}, e.defaultAdapter), n)) || this;
      return i.click = function() {
        i.handleClick();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Wu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          activateInputRipple: function() {
          },
          deactivateInputRipple: function() {
          },
          deregisterInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("click", this.click);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("click", this.click);
    }, e.prototype.handleClick = function() {
      var n = this;
      this.adapter.activateInputRipple(), requestAnimationFrame(function() {
        n.adapter.deactivateInputRipple();
      });
    }, e;
  }(st)
);
const Ju = (t) => ({}), ji = (t) => ({});
function Yu(t) {
  let e, n, i, s, l, o, r, a, u;
  const f = (
    /*#slots*/
    t[14].default
  ), c = ie(
    f,
    t,
    /*$$scope*/
    t[13],
    null
  ), d = (
    /*#slots*/
    t[14].label
  ), m = ie(
    d,
    t,
    /*$$scope*/
    t[13],
    ji
  );
  let p = [{ for: (
    /*inputId*/
    t[4]
  ) }, Me(
    /*$$restProps*/
    t[11],
    "label$"
  )], g = {};
  for (let v = 0; v < p.length; v += 1)
    g = M(g, p[v]);
  let b = [
    {
      class: l = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-form-field": !0,
        "mdc-form-field--align-end": (
          /*align*/
          t[2] === "end"
        ),
        "mdc-form-field--nowrap": (
          /*noWrap*/
          t[3]
        )
      })
    },
    ut(
      /*$$restProps*/
      t[11],
      ["label$"]
    )
  ], _ = {};
  for (let v = 0; v < b.length; v += 1)
    _ = M(_, b[v]);
  return {
    c() {
      e = j("div"), c && c.c(), n = Q(), i = j("label"), m && m.c(), ne(i, g), ne(e, _);
    },
    m(v, L) {
      D(v, e, L), c && c.m(e, null), J(e, n), J(e, i), m && m.m(i, null), t[15](i), t[16](e), r = !0, a || (u = [
        x(s = Se.call(
          null,
          i,
          /*label$use*/
          t[5]
        )),
        x(o = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[9].call(null, e)
        ),
        ge(
          e,
          "SMUIGenericInput:mount",
          /*handleInputMount*/
          t[10]
        ),
        ge(
          e,
          "SMUIGenericInput:unmount",
          /*SMUIGenericInput_unmount_handler*/
          t[17]
        )
      ], a = !0);
    },
    p(v, [L]) {
      c && c.p && (!r || L & /*$$scope*/
      8192) && le(
        c,
        f,
        v,
        /*$$scope*/
        v[13],
        r ? se(
          f,
          /*$$scope*/
          v[13],
          L,
          null
        ) : re(
          /*$$scope*/
          v[13]
        ),
        null
      ), m && m.p && (!r || L & /*$$scope*/
      8192) && le(
        m,
        d,
        v,
        /*$$scope*/
        v[13],
        r ? se(
          d,
          /*$$scope*/
          v[13],
          L,
          Ju
        ) : re(
          /*$$scope*/
          v[13]
        ),
        ji
      ), ne(i, g = te(p, [
        (!r || L & /*inputId*/
        16) && { for: (
          /*inputId*/
          v[4]
        ) },
        L & /*$$restProps*/
        2048 && Me(
          /*$$restProps*/
          v[11],
          "label$"
        )
      ])), s && pe(s.update) && L & /*label$use*/
      32 && s.update.call(
        null,
        /*label$use*/
        v[5]
      ), ne(e, _ = te(b, [
        (!r || L & /*className, align, noWrap*/
        14 && l !== (l = W({
          [
            /*className*/
            v[1]
          ]: !0,
          "mdc-form-field": !0,
          "mdc-form-field--align-end": (
            /*align*/
            v[2] === "end"
          ),
          "mdc-form-field--nowrap": (
            /*noWrap*/
            v[3]
          )
        }))) && { class: l },
        L & /*$$restProps*/
        2048 && ut(
          /*$$restProps*/
          v[11],
          ["label$"]
        )
      ])), o && pe(o.update) && L & /*use*/
      1 && o.update.call(
        null,
        /*use*/
        v[0]
      );
    },
    i(v) {
      r || (E(c, v), E(m, v), r = !0);
    },
    o(v) {
      C(c, v), C(m, v), r = !1;
    },
    d(v) {
      v && R(e), c && c.d(v), m && m.d(v), t[15](null), t[16](null), a = !1, Ee(u);
    }
  };
}
let $u = 0;
function Qu(t, e, n) {
  const i = ["use", "class", "align", "noWrap", "inputId", "label$use", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { align: f = "start" } = e, { noWrap: c = !1 } = e, { inputId: d = "SMUI-form-field-" + $u++ } = e, { label$use: m = [] } = e, p, g, b, _;
  Ue("SMUI:generic:input:props", { id: d }), nt(() => (g = new Ku({
    activateInputRipple: () => {
      _ && _.activateRipple();
    },
    deactivateInputRipple: () => {
      _ && _.deactivateRipple();
    },
    deregisterInteractionHandler: (h, k) => {
      b.removeEventListener(h, k);
    },
    registerInteractionHandler: (h, k) => {
      b.addEventListener(h, k);
    }
  }), g.init(), () => {
    g.destroy();
  }));
  function v(h) {
    n(8, _ = h.detail);
  }
  function L() {
    return p;
  }
  function A(h) {
    ee[h ? "unshift" : "push"](() => {
      b = h, n(7, b);
    });
  }
  function I(h) {
    ee[h ? "unshift" : "push"](() => {
      p = h, n(6, p);
    });
  }
  const T = () => n(8, _ = void 0);
  return t.$$set = (h) => {
    e = M(M({}, e), Ae(h)), n(11, s = Y(e, i)), "use" in h && n(0, a = h.use), "class" in h && n(1, u = h.class), "align" in h && n(2, f = h.align), "noWrap" in h && n(3, c = h.noWrap), "inputId" in h && n(4, d = h.inputId), "label$use" in h && n(5, m = h.label$use), "$$scope" in h && n(13, o = h.$$scope);
  }, [
    a,
    u,
    f,
    c,
    d,
    m,
    p,
    b,
    _,
    r,
    v,
    s,
    L,
    o,
    l,
    A,
    I,
    T
  ];
}
class Fs extends he {
  constructor(e) {
    super(), de(this, e, Qu, Yu, oe, {
      use: 0,
      class: 1,
      align: 2,
      noWrap: 3,
      inputId: 4,
      label$use: 5,
      getElement: 12
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get align() {
    return this.$$.ctx[2];
  }
  set align(e) {
    this.$$set({ align: e }), y();
  }
  get noWrap() {
    return this.$$.ctx[3];
  }
  set noWrap(e) {
    this.$$set({ noWrap: e }), y();
  }
  get inputId() {
    return this.$$.ctx[4];
  }
  set inputId(e) {
    this.$$set({ inputId: e }), y();
  }
  get label$use() {
    return this.$$.ctx[5];
  }
  set label$use(e) {
    this.$$set({ label$use: e }), y();
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
me(Fs, { use: {}, class: {}, align: {}, noWrap: { type: "Boolean" }, inputId: {}, label$use: {} }, ["default", "label"], ["getElement"], !0);
const Dn = Ke(void 0), Ht = Ke();
function Ns({
  parent: t,
  element: e,
  reference: n
}) {
  const i = Ln({
    new: {
      parent: t,
      element: e,
      reference: n
    }
  });
  Be(Ht).dispatchEvent(i);
}
function xu({
  element: t,
  oldAttributes: e,
  newAttributes: n
}) {
  const i = Ln({
    element: t,
    oldAttributes: e,
    newAttributes: n
  });
  Be(Ht).dispatchEvent(i);
}
function ec({
  parent: t,
  element: e,
  reference: n
}) {
  const i = Ln({
    old: {
      parent: t,
      element: e,
      reference: n
    }
  });
  Be(Ht).dispatchEvent(i);
}
function tc({
  parentElement: t,
  namespace: e,
  newElementTagName: n,
  elementAttributes: i,
  insertBefore: s
}) {
  const l = Be(Dn);
  if (!l) throw new Error("Xml document is not set");
  const o = {
    xmlDocument: l,
    tag: n,
    ...i && { attributes: i },
    ...e && { namespace: e }
  }, r = Ca(o);
  return Ns({
    parent: t,
    element: r,
    reference: s
  }), r;
}
async function nc({
  newXmlDocument: t,
  newPluginHostElement: e
}) {
  Dn.set(t), Ht.set(e);
}
const ct = {
  //state
  xmlDocument: Dn,
  pluginHostElement: Ht,
  //actions
  addElementToXmlDocument: tc,
  createAndDispatchCreateActionEvent: Ns,
  createAndDispatchUpdateActionEvent: xu,
  createAndDispatchRemoveActionEvent: ec,
  init: nc
}, ic = {
  substationTypes: [],
  voltageLevelTypes: [],
  bayTypes: [],
  iedTypes: [],
  lDeviceTypes: [],
  lNodeTypes: []
}, ln = Ke(), It = Ke(null), Et = Ke(null), tn = Ke(
  ic
), In = Ke(!1);
function sc(t) {
  ln.set(
    new Ea(t.documentElement)
  );
}
function lc() {
  const t = Be(ln).findDataTypesElement();
  It.set(t);
}
function rc() {
  const t = Be(It);
  if (!t) return Et.set(null);
  const e = Be(ln).findPrivateElement(
    '[type="type-designer-plugin"]',
    {
      root: t.element
    }
  );
  Et.set(e);
}
function ac() {
  const t = Be(Et), e = Be(ln).findTypeElements({
    root: t == null ? void 0 : t.element
  });
  tn.set(e);
}
function oc() {
  var n;
  const t = (n = Be(
    ct.xmlDocument
  )) == null ? void 0 : n.documentElement;
  if (!t)
    return console.error("No XML document found");
  const e = ct.addElementToXmlDocument({
    parentElement: t,
    newElementTagName: "DataTypeTemplates"
  });
  It.set({
    element: e
  });
}
function uc() {
  var n;
  const t = (n = Be(It)) == null ? void 0 : n.element;
  if (!t)
    return console.error("No Root DataTypeTemplates element found");
  const e = ct.addElementToXmlDocument({
    parentElement: t,
    newElementTagName: "Private",
    elementAttributes: {
      type: "type-designer-plugin"
    }
  });
  Et.set({
    element: e,
    type: "type-designer-plugin"
  });
}
function cc() {
  Be(In) || (Be(It) || oc(), Be(Et) || uc(), In.set(!0));
}
function fc(t) {
  var r, a;
  cc();
  const e = (r = Be(Et)) == null ? void 0 : r.element;
  if (!e)
    return console.error("No Private element found in DataTypeTemplates");
  const n = Be(tn)[`${t}Types`].length + 1, i = `${Oe[t].type.baseId}${n}`, s = `${Oe[t].type.baseName}${n}`, l = Oe[t].type.insertBefore, o = l ? (a = Be(tn)[l][0]) == null ? void 0 : a.element : void 0;
  ct.addElementToXmlDocument({
    parentElement: e,
    newElementTagName: Oe[t].type.tag,
    namespace: "td",
    elementAttributes: {
      id: i,
      name: s
    },
    insertBefore: o
  });
}
function dc({
  columnKey: t,
  typeElement: e,
  refElement: n,
  insertBeforeTypeRefElement: i
}) {
  ct.addElementToXmlDocument({
    parentElement: e,
    newElementTagName: Oe[t].typeRef.tag,
    namespace: "td",
    elementAttributes: {
      type: n.getAttribute("id")
    },
    insertBefore: i
  });
}
function mc({
  currentType: t,
  currentTypeElementId: e
}) {
  var i;
  const n = (i = t.typeRefs) == null ? void 0 : i.find(
    (s) => s.type === e
  );
  n && ct.createAndDispatchRemoveActionEvent({
    parent: t.element,
    element: n.element
  });
}
function hc(t) {
  t && (sc(t), lc(), rc(), ac(), In.set(!1));
}
const At = {
  //state
  dataTypeTemplatesRootElement: It,
  dataTypeTemplatesSubElements: tn,
  //actions
  init: hc,
  addNewType: fc,
  addNewTypeRef: dc,
  deleteTypeRef: mc
}, Hs = Ke({
  substation: !0,
  voltageLevel: !0,
  bay: !0,
  ied: !0,
  lDevice: !0,
  lNode: !0
}), pc = Br(
  [At.dataTypeTemplatesSubElements, Hs],
  ([t, e]) => ({
    substation: {
      name: Oe.substation.element.name,
      visible: e.substation,
      types: t.substationTypes
    },
    voltageLevel: {
      name: Oe.voltageLevel.element.name,
      visible: e.voltageLevel,
      types: t.voltageLevelTypes
    },
    bay: {
      name: Oe.bay.element.name,
      visible: e.bay,
      types: t.bayTypes
    },
    ied: {
      name: Oe.ied.element.name,
      visible: e.ied,
      types: t.iedTypes
    },
    lDevice: {
      name: Oe.lDevice.element.name,
      visible: e.lDevice,
      types: t.lDeviceTypes
    },
    lNode: {
      name: Oe.lNode.element.name,
      visible: e.lNode,
      types: t.lNodeTypes
    }
  })
);
function gc(t) {
  Hs.update((e) => ({
    ...e,
    [t]: !e[t]
  }));
}
const Sn = {
  columns: pc,
  toggleColumnVisibility: gc
};
function bc(t) {
  ot(t, "svelte-119d49p", "#type-designer-drawer.svelte-119d49p{display:flex;height:100%}.drawer-content.svelte-119d49p{display:flex;flex-direction:column;padding:1rem}.form.svelte-119d49p{flex:1;overflow-y:auto}.type-ref.svelte-119d49p{display:flex;flex-direction:column;margin-bottom:2rem}#type-designer-drawer.svelte-119d49p .textField{width:100%;margin:1rem 0}#type-designer-drawer.svelte-119d49p .button{color:var(--mdc-theme-secondary);margin-top:0.75rem}");
}
function qi(t, e, n) {
  const i = t.slice();
  return i[17] = e[n], i[18] = e, i[19] = n, i;
}
function zi(t, e, n) {
  const i = t.slice();
  return i[20] = e[n], i[21] = e, i[22] = n, i;
}
function Vi(t) {
  let e, n, i;
  function s(o) {
    t[11](
      o,
      /*attribute*/
      t[20]
    );
  }
  let l = {
    class: "textField",
    variant: "outlined",
    label: (
      /*attribute*/
      t[20]
    )
  };
  return (
    /*localAttributes*/
    t[1][
      /*attribute*/
      t[20]
    ] !== void 0 && (l.value = /*localAttributes*/
    t[1][
      /*attribute*/
      t[20]
    ]), e = new Bs({ props: l }), ee.push(() => et(e, "value", s)), e.$on(
      "blur",
      /*updateTypeElement*/
      t[5]
    ), {
      c() {
        G(e.$$.fragment);
      },
      m(o, r) {
        z(e, o, r), i = !0;
      },
      p(o, r) {
        t = o;
        const a = {};
        r & /*standardAttributes*/
        8 && (a.label = /*attribute*/
        t[20]), !n && r & /*localAttributes, standardAttributes*/
        10 && (n = !0, a.value = /*localAttributes*/
        t[1][
          /*attribute*/
          t[20]
        ], xe(() => n = !1)), e.$set(a);
      },
      i(o) {
        i || (E(e.$$.fragment, o), i = !0);
      },
      o(o) {
        C(e.$$.fragment, o), i = !1;
      },
      d(o) {
        V(e, o);
      }
    }
  );
}
function Gi(t) {
  let e, n, i = (
    /*attribute*/
    t[20] !== "id" && /*localAttributes*/
    t[1][
      /*attribute*/
      t[20]
    ] !== void 0 && Vi(t)
  );
  return {
    c() {
      i && i.c(), e = we();
    },
    m(s, l) {
      i && i.m(s, l), D(s, e, l), n = !0;
    },
    p(s, l) {
      /*attribute*/
      s[20] !== "id" && /*localAttributes*/
      s[1][
        /*attribute*/
        s[20]
      ] !== void 0 ? i ? (i.p(s, l), l & /*standardAttributes, localAttributes*/
      10 && E(i, 1)) : (i = Vi(s), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (ce(), C(i, 1, 1, () => {
        i = null;
      }), fe());
    },
    i(s) {
      n || (E(i), n = !0);
    },
    o(s) {
      C(i), n = !1;
    },
    d(s) {
      s && R(e), i && i.d(s);
    }
  };
}
function Zi(t) {
  let e, n, i, s, l = it(
    /*currentParentTypeElements*/
    t[2]
  ), o = [];
  for (let a = 0; a < l.length; a += 1)
    o[a] = Wi(qi(t, l, a));
  const r = (a) => C(o[a], 1, 1, () => {
    o[a] = null;
  });
  return {
    c() {
      e = j("p"), e.textContent = "Add current type as ref to these types :", n = Q(), i = j("div");
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
      U(i, "class", "type-ref svelte-119d49p");
    },
    m(a, u) {
      D(a, e, u), D(a, n, u), D(a, i, u);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(i, null);
      s = !0;
    },
    p(a, u) {
      if (u & /*currentParentTypeElements, handleTypeRef*/
      68) {
        l = it(
          /*currentParentTypeElements*/
          a[2]
        );
        let f;
        for (f = 0; f < l.length; f += 1) {
          const c = qi(a, l, f);
          o[f] ? (o[f].p(c, u), E(o[f], 1)) : (o[f] = Wi(c), o[f].c(), E(o[f], 1), o[f].m(i, null));
        }
        for (ce(), f = l.length; f < o.length; f += 1)
          r(f);
        fe();
      }
    },
    i(a) {
      if (!s) {
        for (let u = 0; u < l.length; u += 1)
          E(o[u]);
        s = !0;
      }
    },
    o(a) {
      o = o.filter(Boolean);
      for (let u = 0; u < o.length; u += 1)
        C(o[u]);
      s = !1;
    },
    d(a) {
      a && (R(e), R(n), R(i)), Ft(o, a);
    }
  };
}
function _c(t) {
  let e, n, i, s, l = (
    /*parentTypeElement*/
    t[17].type.name + ""
  ), o, r, a;
  function u(d) {
    t[12](
      d,
      /*parentTypeElement*/
      t[17]
    );
  }
  function f() {
    return (
      /*click_handler*/
      t[13](
        /*parentTypeElement*/
        t[17]
      )
    );
  }
  let c = { icons: !1 };
  return (
    /*parentTypeElement*/
    t[17].isAlreadyTypeRefToThisParent !== void 0 && (c.checked = /*parentTypeElement*/
    t[17].isAlreadyTypeRefToThisParent), e = new Ms({ props: c }), ee.push(() => et(e, "checked", u)), e.$on("click", f), {
      c() {
        G(e.$$.fragment), i = Q(), s = j("span"), o = De(l), r = Q();
      },
      m(d, m) {
        z(e, d, m), D(d, i, m), D(d, s, m), J(s, o), D(d, r, m), a = !0;
      },
      p(d, m) {
        t = d;
        const p = {};
        !n && m & /*currentParentTypeElements*/
        4 && (n = !0, p.checked = /*parentTypeElement*/
        t[17].isAlreadyTypeRefToThisParent, xe(() => n = !1)), e.$set(p), (!a || m & /*currentParentTypeElements*/
        4) && l !== (l = /*parentTypeElement*/
        t[17].type.name + "") && Qe(o, l);
      },
      i(d) {
        a || (E(e.$$.fragment, d), a = !0);
      },
      o(d) {
        C(e.$$.fragment, d), a = !1;
      },
      d(d) {
        d && (R(i), R(s), R(r)), V(e, d);
      }
    }
  );
}
function Wi(t) {
  let e, n;
  return e = new Fs({
    props: {
      $$slots: { default: [_c] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*$$scope, currentParentTypeElements*/
      8388612 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function vc(t) {
  let e;
  return {
    c() {
      e = De("Cancel");
    },
    m(n, i) {
      D(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function yc(t) {
  var d;
  let e, n, i, s, l, o, r, a = it(
    /*standardAttributes*/
    t[3]
  ), u = [];
  for (let m = 0; m < a.length; m += 1)
    u[m] = Gi(zi(t, a, m));
  const f = (m) => C(u[m], 1, 1, () => {
    u[m] = null;
  });
  let c = (
    /*currentParentTypeElements*/
    ((d = t[2]) == null ? void 0 : d.length) && /*currentColumnKey*/
    t[0] !== "substation" && Zi(t)
  );
  return o = new On({
    props: {
      class: "button",
      $$slots: { default: [vc] },
      $$scope: { ctx: t }
    }
  }), o.$on("click", Pt.handleCloseDrawer), {
    c() {
      e = j("div"), n = j("div"), i = j("div");
      for (let m = 0; m < u.length; m += 1)
        u[m].c();
      s = Q(), c && c.c(), l = Q(), G(o.$$.fragment), U(i, "class", "form svelte-119d49p"), U(n, "class", "drawer-content svelte-119d49p"), U(e, "id", "type-designer-drawer"), U(e, "class", "svelte-119d49p");
    },
    m(m, p) {
      D(m, e, p), J(e, n), J(n, i);
      for (let g = 0; g < u.length; g += 1)
        u[g] && u[g].m(i, null);
      J(i, s), c && c.m(i, null), J(n, l), z(o, n, null), r = !0;
    },
    p(m, [p]) {
      var b;
      if (p & /*standardAttributes, localAttributes, updateTypeElement, undefined*/
      42) {
        a = it(
          /*standardAttributes*/
          m[3]
        );
        let _;
        for (_ = 0; _ < a.length; _ += 1) {
          const v = zi(m, a, _);
          u[_] ? (u[_].p(v, p), E(u[_], 1)) : (u[_] = Gi(v), u[_].c(), E(u[_], 1), u[_].m(i, s));
        }
        for (ce(), _ = a.length; _ < u.length; _ += 1)
          f(_);
        fe();
      }
      /*currentParentTypeElements*/
      (b = m[2]) != null && b.length && /*currentColumnKey*/
      m[0] !== "substation" ? c ? (c.p(m, p), p & /*currentParentTypeElements, currentColumnKey*/
      5 && E(c, 1)) : (c = Zi(m), c.c(), E(c, 1), c.m(i, null)) : c && (ce(), C(c, 1, 1, () => {
        c = null;
      }), fe());
      const g = {};
      p & /*$$scope*/
      8388608 && (g.$$scope = { dirty: p, ctx: m }), o.$set(g);
    },
    i(m) {
      if (!r) {
        for (let p = 0; p < a.length; p += 1)
          E(u[p]);
        E(c), E(o.$$.fragment, m), r = !0;
      }
    },
    o(m) {
      u = u.filter(Boolean);
      for (let p = 0; p < u.length; p += 1)
        C(u[p]);
      C(c), C(o.$$.fragment, m), r = !1;
    },
    d(m) {
      m && R(e), Ft(u, m), c && c.d(), V(o);
    }
  };
}
function Ec(t, e, n) {
  let i, s, l, o, r, a, { currentTypeElement: u } = e, { currentColumnKey: f } = e, c, d;
  const { columns: m } = Sn;
  $e(t, m, (A) => n(10, a = A));
  function p() {
    ct.createAndDispatchUpdateActionEvent({
      element: i,
      oldAttributes: l,
      newAttributes: c
    });
  }
  function g(A) {
    n(1, c = A);
  }
  function b({ type: A, isAlreadyTypeRefToThisParent: I }) {
    I ? At.deleteTypeRef({
      currentType: A,
      currentTypeElementId: u.id
    }) : At.addNewTypeRef({
      columnKey: f,
      typeElement: A.element,
      refElement: i
    });
  }
  function _(A, I) {
    t.$$.not_equal(c[I], A) && (c[I] = A, n(1, c));
  }
  function v(A, I) {
    t.$$.not_equal(I.isAlreadyTypeRefToThisParent, A) && (I.isAlreadyTypeRefToThisParent = A, n(2, d), n(9, r), n(10, a), n(7, u), n(0, f));
  }
  const L = (A) => b(A);
  return t.$$set = (A) => {
    "currentTypeElement" in A && n(7, u = A.currentTypeElement), "currentColumnKey" in A && n(0, f = A.currentColumnKey);
  }, t.$$.update = () => {
    var A, I;
    t.$$.dirty & /*currentTypeElement*/
    128 && n(8, { element: i, typeRefs: s, ...l } = u, l), t.$$.dirty & /*currentColumnKey*/
    1 && n(3, o = (A = Oe[f]) == null ? void 0 : A.element.standardAttributes), t.$$.dirty & /*attributes*/
    256 && g(l), t.$$.dirty & /*currentColumnKey*/
    1 && n(9, r = (I = Oe[f]) == null ? void 0 : I.typeRef.to), t.$$.dirty & /*currentTypeCanBeRefTo, $columns, currentTypeElement*/
    1664 && r && n(2, d = a[r].types.map((T) => ({
      type: T,
      isAlreadyTypeRefToThisParent: T.typeRefs.some((h) => h.type === u.id)
    })));
  }, [
    f,
    c,
    d,
    o,
    m,
    p,
    b,
    u,
    l,
    r,
    a,
    _,
    v,
    L
  ];
}
class Us extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      Ec,
      yc,
      oe,
      {
        currentTypeElement: 7,
        currentColumnKey: 0
      },
      bc
    );
  }
  get currentTypeElement() {
    return this.$$.ctx[7];
  }
  set currentTypeElement(e) {
    this.$$set({ currentTypeElement: e }), y();
  }
  get currentColumnKey() {
    return this.$$.ctx[0];
  }
  set currentColumnKey(e) {
    this.$$set({ currentColumnKey: e }), y();
  }
}
me(Us, { currentTypeElement: {}, currentColumnKey: {} }, [], [], !0);
function Ac(t) {
  let e, n, i, s, l, o;
  const r = (
    /*#slots*/
    t[9].default
  ), a = ie(
    r,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    {
      class: n = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-card": !0,
        "mdc-card--outlined": (
          /*variant*/
          t[2] === "outlined"
        ),
        "smui-card--padded": (
          /*padded*/
          t[3]
        )
      })
    },
    /*$$restProps*/
    t[6]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = M(f, u[c]);
  return {
    c() {
      e = j("div"), a && a.c(), ne(e, f);
    },
    m(c, d) {
      D(c, e, d), a && a.m(e, null), t[10](e), s = !0, l || (o = [
        x(i = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[5].call(null, e)
        )
      ], l = !0);
    },
    p(c, [d]) {
      a && a.p && (!s || d & /*$$scope*/
      256) && le(
        a,
        r,
        c,
        /*$$scope*/
        c[8],
        s ? se(
          r,
          /*$$scope*/
          c[8],
          d,
          null
        ) : re(
          /*$$scope*/
          c[8]
        ),
        null
      ), ne(e, f = te(u, [
        (!s || d & /*className, variant, padded*/
        14 && n !== (n = W({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-card": !0,
          "mdc-card--outlined": (
            /*variant*/
            c[2] === "outlined"
          ),
          "smui-card--padded": (
            /*padded*/
            c[3]
          )
        }))) && { class: n },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (E(a, c), s = !0);
    },
    o(c) {
      C(a, c), s = !1;
    },
    d(c) {
      c && R(e), a && a.d(c), t[10](null), l = !1, Ee(o);
    }
  };
}
function Cc(t, e, n) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { variant: f = "raised" } = e, { padded: c = !1 } = e, d;
  function m() {
    return d;
  }
  function p(g) {
    ee[g ? "unshift" : "push"](() => {
      d = g, n(4, d);
    });
  }
  return t.$$set = (g) => {
    e = M(M({}, e), Ae(g)), n(6, s = Y(e, i)), "use" in g && n(0, a = g.use), "class" in g && n(1, u = g.class), "variant" in g && n(2, f = g.variant), "padded" in g && n(3, c = g.padded), "$$scope" in g && n(8, o = g.$$scope);
  }, [
    a,
    u,
    f,
    c,
    d,
    r,
    s,
    m,
    o,
    l,
    p
  ];
}
class js extends he {
  constructor(e) {
    super(), de(this, e, Cc, Ac, oe, {
      use: 0,
      class: 1,
      variant: 2,
      padded: 3,
      getElement: 7
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get variant() {
    return this.$$.ctx[2];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get padded() {
    return this.$$.ctx[3];
  }
  set padded(e) {
    this.$$set({ padded: e }), y();
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
me(js, { use: {}, class: {}, variant: {}, padded: { type: "Boolean" } }, ["default"], ["getElement"], !0);
Ne({
  class: "smui-card__content",
  tag: "div"
});
function Ic(t) {
  let e, n, i, s, l, o, r, a, u, f;
  const c = (
    /*#slots*/
    t[17].default
  ), d = ie(
    c,
    t,
    /*$$scope*/
    t[16],
    null
  );
  let m = [
    {
      class: s = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-card__primary-action": !0,
        "smui-card__primary-action--padded": (
          /*padded*/
          t[5]
        ),
        .../*internalClasses*/
        t[8]
      })
    },
    {
      style: l = Object.entries(
        /*internalStyles*/
        t[9]
      ).map(Xi).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    { tabindex: (
      /*tabindex*/
      t[6]
    ) },
    { role: "button" },
    /*$$restProps*/
    t[14]
  ], p = {};
  for (let g = 0; g < m.length; g += 1)
    p = M(p, m[g]);
  return {
    c() {
      e = j("div"), n = j("div"), i = Q(), d && d.c(), U(n, "class", "mdc-card__ripple"), ne(e, p);
    },
    m(g, b) {
      D(g, e, b), J(e, n), J(e, i), d && d.m(e, null), t[18](e), a = !0, u || (f = [
        x(o = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[10].call(null, e)
        ),
        x(r = tt.call(null, e, {
          ripple: (
            /*ripple*/
            t[3]
          ),
          unbounded: !1,
          color: (
            /*color*/
            t[4]
          ),
          addClass: (
            /*addClass*/
            t[11]
          ),
          removeClass: (
            /*removeClass*/
            t[12]
          ),
          addStyle: (
            /*addStyle*/
            t[13]
          )
        }))
      ], u = !0);
    },
    p(g, [b]) {
      d && d.p && (!a || b & /*$$scope*/
      65536) && le(
        d,
        c,
        g,
        /*$$scope*/
        g[16],
        a ? se(
          c,
          /*$$scope*/
          g[16],
          b,
          null
        ) : re(
          /*$$scope*/
          g[16]
        ),
        null
      ), ne(e, p = te(m, [
        (!a || b & /*className, padded, internalClasses*/
        290 && s !== (s = W({
          [
            /*className*/
            g[1]
          ]: !0,
          "mdc-card__primary-action": !0,
          "smui-card__primary-action--padded": (
            /*padded*/
            g[5]
          ),
          .../*internalClasses*/
          g[8]
        }))) && { class: s },
        (!a || b & /*internalStyles, style*/
        516 && l !== (l = Object.entries(
          /*internalStyles*/
          g[9]
        ).map(Xi).concat([
          /*style*/
          g[2]
        ]).join(" "))) && { style: l },
        (!a || b & /*tabindex*/
        64) && { tabindex: (
          /*tabindex*/
          g[6]
        ) },
        { role: "button" },
        b & /*$$restProps*/
        16384 && /*$$restProps*/
        g[14]
      ])), o && pe(o.update) && b & /*use*/
      1 && o.update.call(
        null,
        /*use*/
        g[0]
      ), r && pe(r.update) && b & /*ripple, color*/
      24 && r.update.call(null, {
        ripple: (
          /*ripple*/
          g[3]
        ),
        unbounded: !1,
        color: (
          /*color*/
          g[4]
        ),
        addClass: (
          /*addClass*/
          g[11]
        ),
        removeClass: (
          /*removeClass*/
          g[12]
        ),
        addStyle: (
          /*addStyle*/
          g[13]
        )
      });
    },
    i(g) {
      a || (E(d, g), a = !0);
    },
    o(g) {
      C(d, g), a = !1;
    },
    d(g) {
      g && R(e), d && d.d(g), t[18](null), u = !1, Ee(f);
    }
  };
}
const Xi = ([t, e]) => `${t}: ${e};`;
function Sc(t, e, n) {
  const i = ["use", "class", "style", "ripple", "color", "padded", "tabindex", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { style: f = "" } = e, { ripple: c = !0 } = e, { color: d = void 0 } = e, { padded: m = !1 } = e, { tabindex: p = 0 } = e, g, b = {}, _ = {};
  function v(h) {
    b[h] || n(8, b[h] = !0, b);
  }
  function L(h) {
    (!(h in b) || b[h]) && n(8, b[h] = !1, b);
  }
  function A(h, k) {
    _[h] != k && (k === "" || k == null ? (delete _[h], n(9, _)) : n(9, _[h] = k, _));
  }
  function I() {
    return g;
  }
  function T(h) {
    ee[h ? "unshift" : "push"](() => {
      g = h, n(7, g);
    });
  }
  return t.$$set = (h) => {
    e = M(M({}, e), Ae(h)), n(14, s = Y(e, i)), "use" in h && n(0, a = h.use), "class" in h && n(1, u = h.class), "style" in h && n(2, f = h.style), "ripple" in h && n(3, c = h.ripple), "color" in h && n(4, d = h.color), "padded" in h && n(5, m = h.padded), "tabindex" in h && n(6, p = h.tabindex), "$$scope" in h && n(16, o = h.$$scope);
  }, [
    a,
    u,
    f,
    c,
    d,
    m,
    p,
    g,
    b,
    _,
    r,
    v,
    L,
    A,
    s,
    I,
    o,
    l,
    T
  ];
}
class Lc extends he {
  constructor(e) {
    super(), de(this, e, Sc, Ic, oe, {
      use: 0,
      class: 1,
      style: 2,
      ripple: 3,
      color: 4,
      padded: 5,
      tabindex: 6,
      getElement: 15
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get ripple() {
    return this.$$.ctx[3];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), y();
  }
  get color() {
    return this.$$.ctx[4];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get padded() {
    return this.$$.ctx[5];
  }
  set padded(e) {
    this.$$set({ padded: e }), y();
  }
  get tabindex() {
    return this.$$.ctx[6];
  }
  set tabindex(e) {
    this.$$set({ tabindex: e }), y();
  }
  get getElement() {
    return this.$$.ctx[15];
  }
}
me(Lc, { use: {}, class: {}, style: {}, ripple: { type: "Boolean" }, color: {}, padded: { type: "Boolean" }, tabindex: {} }, ["default"], ["getElement"], !0);
function Tc(t) {
  let e, n, i, s, l, o;
  const r = (
    /*#slots*/
    t[8].default
  ), a = ie(
    r,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let u = [
    {
      class: n = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-card__media": !0,
        "mdc-card__media--square": (
          /*aspectRatio*/
          t[2] === "square"
        ),
        "mdc-card__media--16-9": (
          /*aspectRatio*/
          t[2] === "16x9"
        )
      })
    },
    /*$$restProps*/
    t[5]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = M(f, u[c]);
  return {
    c() {
      e = j("div"), a && a.c(), ne(e, f);
    },
    m(c, d) {
      D(c, e, d), a && a.m(e, null), t[9](e), s = !0, l || (o = [
        x(i = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], l = !0);
    },
    p(c, [d]) {
      a && a.p && (!s || d & /*$$scope*/
      128) && le(
        a,
        r,
        c,
        /*$$scope*/
        c[7],
        s ? se(
          r,
          /*$$scope*/
          c[7],
          d,
          null
        ) : re(
          /*$$scope*/
          c[7]
        ),
        null
      ), ne(e, f = te(u, [
        (!s || d & /*className, aspectRatio*/
        6 && n !== (n = W({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-card__media": !0,
          "mdc-card__media--square": (
            /*aspectRatio*/
            c[2] === "square"
          ),
          "mdc-card__media--16-9": (
            /*aspectRatio*/
            c[2] === "16x9"
          )
        }))) && { class: n },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        c[5]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (E(a, c), s = !0);
    },
    o(c) {
      C(a, c), s = !1;
    },
    d(c) {
      c && R(e), a && a.d(c), t[9](null), l = !1, Ee(o);
    }
  };
}
function kc(t, e, n) {
  const i = ["use", "class", "aspectRatio", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { aspectRatio: f = void 0 } = e, c;
  function d() {
    return c;
  }
  function m(p) {
    ee[p ? "unshift" : "push"](() => {
      c = p, n(3, c);
    });
  }
  return t.$$set = (p) => {
    e = M(M({}, e), Ae(p)), n(5, s = Y(e, i)), "use" in p && n(0, a = p.use), "class" in p && n(1, u = p.class), "aspectRatio" in p && n(2, f = p.aspectRatio), "$$scope" in p && n(7, o = p.$$scope);
  }, [
    a,
    u,
    f,
    c,
    r,
    s,
    d,
    o,
    l,
    m
  ];
}
class Oc extends he {
  constructor(e) {
    super(), de(this, e, kc, Tc, oe, {
      use: 0,
      class: 1,
      aspectRatio: 2,
      getElement: 6
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get aspectRatio() {
    return this.$$.ctx[2];
  }
  set aspectRatio(e) {
    this.$$set({ aspectRatio: e }), y();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
me(Oc, { use: {}, class: {}, aspectRatio: {} }, ["default"], ["getElement"], !0);
Ne({
  class: "mdc-card__media-content",
  tag: "div"
});
function wc(t) {
  let e, n, i, s, l, o;
  const r = (
    /*#slots*/
    t[8].default
  ), a = ie(
    r,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let u = [
    {
      class: n = W({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-card__actions": !0,
        "mdc-card__actions--full-bleed": (
          /*fullBleed*/
          t[2]
        )
      })
    },
    /*$$restProps*/
    t[5]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = M(f, u[c]);
  return {
    c() {
      e = j("div"), a && a.c(), ne(e, f);
    },
    m(c, d) {
      D(c, e, d), a && a.m(e, null), t[9](e), s = !0, l || (o = [
        x(i = Se.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        x(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], l = !0);
    },
    p(c, [d]) {
      a && a.p && (!s || d & /*$$scope*/
      128) && le(
        a,
        r,
        c,
        /*$$scope*/
        c[7],
        s ? se(
          r,
          /*$$scope*/
          c[7],
          d,
          null
        ) : re(
          /*$$scope*/
          c[7]
        ),
        null
      ), ne(e, f = te(u, [
        (!s || d & /*className, fullBleed*/
        6 && n !== (n = W({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-card__actions": !0,
          "mdc-card__actions--full-bleed": (
            /*fullBleed*/
            c[2]
          )
        }))) && { class: n },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        c[5]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (E(a, c), s = !0);
    },
    o(c) {
      C(a, c), s = !1;
    },
    d(c) {
      c && R(e), a && a.d(c), t[9](null), l = !1, Ee(o);
    }
  };
}
function Pc(t, e, n) {
  const i = ["use", "class", "fullBleed", "getElement"];
  let s = Y(e, i), { $$slots: l = {}, $$scope: o } = e;
  const r = Ie(ye());
  let { use: a = [] } = e, { class: u = "" } = e, { fullBleed: f = !1 } = e, c;
  Ue("SMUI:button:context", "card:action"), Ue("SMUI:icon-button:context", "card:action");
  function d() {
    return c;
  }
  function m(p) {
    ee[p ? "unshift" : "push"](() => {
      c = p, n(3, c);
    });
  }
  return t.$$set = (p) => {
    e = M(M({}, e), Ae(p)), n(5, s = Y(e, i)), "use" in p && n(0, a = p.use), "class" in p && n(1, u = p.class), "fullBleed" in p && n(2, f = p.fullBleed), "$$scope" in p && n(7, o = p.$$scope);
  }, [
    a,
    u,
    f,
    c,
    r,
    s,
    d,
    o,
    l,
    m
  ];
}
class Rc extends he {
  constructor(e) {
    super(), de(this, e, Pc, wc, oe, {
      use: 0,
      class: 1,
      fullBleed: 2,
      getElement: 6
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get fullBleed() {
    return this.$$.ctx[2];
  }
  set fullBleed(e) {
    this.$$set({ fullBleed: e }), y();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
me(Rc, { use: {}, class: {}, fullBleed: { type: "Boolean" } }, ["default"], ["getElement"], !0);
Ne({
  class: "mdc-card__action-buttons",
  tag: "div"
});
Ne({
  class: "mdc-card__action-icons",
  tag: "div"
});
function Dc(t) {
  ot(t, "svelte-1favk4a", "#type-designer-type-element.svelte-1favk4a .card{padding:1rem;border-radius:4px;flex-shrink:0;border:1px solid #ccc;cursor:pointer}.card-title.svelte-1favk4a{display:flex;align-items:center}#type-designer-type-element.svelte-1favk4a .card-title__arrow--hidden{opacity:.2}.card-title__name.svelte-1favk4a{margin-left:1rem;display:flex;flex-direction:column}.card-title__ref.svelte-1favk4a{font-size:0.8rem;color:#666}");
}
function Bc(t) {
  let e, n;
  return e = new Ct({
    props: {
      icon: "nearby_empty",
      fillColor: "primary"
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p: Ce,
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Mc(t) {
  let e, n, i, s, l;
  const o = [Nc, Fc], r = [];
  function a(u, f) {
    return (
      /*isOpen*/
      u[2] ? 0 : 1
    );
  }
  return e = a(t), n = r[e] = o[e](t), s = new Ct({
    props: { icon: "nearby", fillColor: "primary" }
  }), {
    c() {
      n.c(), i = Q(), G(s.$$.fragment);
    },
    m(u, f) {
      r[e].m(u, f), D(u, i, f), z(s, u, f), l = !0;
    },
    p(u, f) {
      let c = e;
      e = a(u), e === c ? r[e].p(u, f) : (ce(), C(r[c], 1, 1, () => {
        r[c] = null;
      }), fe(), n = r[e], n ? n.p(u, f) : (n = r[e] = o[e](u), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(u) {
      l || (E(n), E(s.$$.fragment, u), l = !0);
    },
    o(u) {
      C(n), C(s.$$.fragment, u), l = !1;
    },
    d(u) {
      u && R(i), r[e].d(u), V(s, u);
    }
  };
}
function Fc(t) {
  let e, n;
  return e = new Ct({
    props: {
      icon: "keyboard_arrow_right",
      fillColor: "#666",
      class: (
        /*displayArrow*/
        t[3] ? "" : "card-title__arrow--hidden"
      )
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*displayArrow*/
      8 && (l.class = /*displayArrow*/
      i[3] ? "" : "card-title__arrow--hidden"), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Nc(t) {
  let e, n;
  return e = new Ct({
    props: {
      icon: "keyboard_arrow_down",
      fillColor: "#666"
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p: Ce,
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Ki(t) {
  let e;
  return {
    c() {
      e = j("i"), e.textContent = "#Ref", U(e, "class", "card-title__ref svelte-1favk4a");
    },
    m(n, i) {
      D(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Hc(t) {
  let e, n, i, s, l, o, r, a, u;
  const f = [Mc, Bc], c = [];
  function d(p, g) {
    return (
      /*isRoot*/
      p[0] ? 0 : 1
    );
  }
  n = d(t), i = c[n] = f[n](t);
  let m = !/*isRoot*/
  t[0] && Ki();
  return {
    c() {
      e = j("div"), i.c(), s = Q(), l = j("div"), m && m.c(), o = Q(), r = j("span"), a = De(
        /*typeName*/
        t[1]
      ), U(l, "class", "card-title__name svelte-1favk4a"), U(e, "class", "card-title svelte-1favk4a");
    },
    m(p, g) {
      D(p, e, g), c[n].m(e, null), J(e, s), J(e, l), m && m.m(l, null), J(l, o), J(l, r), J(r, a), u = !0;
    },
    p(p, g) {
      let b = n;
      n = d(p), n === b ? c[n].p(p, g) : (ce(), C(c[b], 1, 1, () => {
        c[b] = null;
      }), fe(), i = c[n], i ? i.p(p, g) : (i = c[n] = f[n](p), i.c()), E(i, 1), i.m(e, s)), /*isRoot*/
      p[0] ? m && (m.d(1), m = null) : m || (m = Ki(), m.c(), m.m(l, o)), (!u || g & /*typeName*/
      2) && Qe(
        a,
        /*typeName*/
        p[1]
      );
    },
    i(p) {
      u || (E(i), u = !0);
    },
    o(p) {
      C(i), u = !1;
    },
    d(p) {
      p && R(e), c[n].d(), m && m.d();
    }
  };
}
function Uc(t) {
  let e, n, i, s;
  return n = new js({
    props: {
      class: "card",
      $$slots: { default: [Hc] },
      $$scope: { ctx: t }
    }
  }), n.$on("click", function() {
    pe(
      /*clickCallback*/
      t[4]
    ) && t[4].apply(this, arguments);
  }), {
    c() {
      e = j("div"), G(n.$$.fragment), U(e, "id", "type-designer-type-element"), U(e, "style", i = /*isRoot*/
      t[0] ? "" : "width: 80%;"), U(e, "class", "svelte-1favk4a");
    },
    m(l, o) {
      D(l, e, o), z(n, e, null), s = !0;
    },
    p(l, [o]) {
      t = l;
      const r = {};
      o & /*$$scope, typeName, isRoot, isOpen, displayArrow*/
      47 && (r.$$scope = { dirty: o, ctx: t }), n.$set(r), (!s || o & /*isRoot*/
      1 && i !== (i = /*isRoot*/
      t[0] ? "" : "width: 80%;")) && U(e, "style", i);
    },
    i(l) {
      s || (E(n.$$.fragment, l), s = !0);
    },
    o(l) {
      C(n.$$.fragment, l), s = !1;
    },
    d(l) {
      l && R(e), V(n);
    }
  };
}
function jc(t, e, n) {
  let { isRoot: i } = e, { typeName: s } = e, { isOpen: l = void 0 } = e, { displayArrow: o = !0 } = e, { clickCallback: r } = e;
  return t.$$set = (a) => {
    "isRoot" in a && n(0, i = a.isRoot), "typeName" in a && n(1, s = a.typeName), "isOpen" in a && n(2, l = a.isOpen), "displayArrow" in a && n(3, o = a.displayArrow), "clickCallback" in a && n(4, r = a.clickCallback);
  }, [i, s, l, o, r];
}
class rn extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      jc,
      Uc,
      oe,
      {
        isRoot: 0,
        typeName: 1,
        isOpen: 2,
        displayArrow: 3,
        clickCallback: 4
      },
      Dc
    );
  }
  get isRoot() {
    return this.$$.ctx[0];
  }
  set isRoot(e) {
    this.$$set({ isRoot: e }), y();
  }
  get typeName() {
    return this.$$.ctx[1];
  }
  set typeName(e) {
    this.$$set({ typeName: e }), y();
  }
  get isOpen() {
    return this.$$.ctx[2];
  }
  set isOpen(e) {
    this.$$set({ isOpen: e }), y();
  }
  get displayArrow() {
    return this.$$.ctx[3];
  }
  set displayArrow(e) {
    this.$$set({ displayArrow: e }), y();
  }
  get clickCallback() {
    return this.$$.ctx[4];
  }
  set clickCallback(e) {
    this.$$set({ clickCallback: e }), y();
  }
}
me(rn, { isRoot: {}, typeName: {}, isOpen: {}, displayArrow: { type: "Boolean" }, clickCallback: {} }, [], [], !0);
function qc(t) {
  ot(t, "svelte-n3a6x0", "#type-designer-card.svelte-n3a6x0 .accordion{padding:revert;padding-bottom:.25rem}#type-designer-card.svelte-n3a6x0 .smui-accordion__panel--elevation-z1::before{box-shadow:revert}#type-designer-card.svelte-n3a6x0 .smui-accordion__panel--open > .smui-paper__content{gap:.25rem;padding:0.25rem 0 1rem 0}#type-designer-card.svelte-n3a6x0 .panel-content{display:flex;flex-direction:column;align-items:end}#type-designer-card.svelte-n3a6x0 .smui-accordion__header__title{padding:revert}");
}
function Ji(t, e, n) {
  const i = t.slice();
  return i[14] = e[n], i;
}
function zc(t) {
  let e, n;
  return e = new wn({
    props: {
      nonInteractive: !0,
      $$slots: { default: [Zc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*$$scope, typeElement*/
      131073 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Vc(t) {
  let e, n, i;
  function s(o) {
    t[9](o);
  }
  let l = {
    $$slots: { default: [Kc] },
    $$scope: { ctx: t }
  };
  return (
    /*isCurrentPanelOpen*/
    t[1] !== void 0 && (l.open = /*isCurrentPanelOpen*/
    t[1]), e = new wn({ props: l }), ee.push(() => et(e, "open", s)), {
      c() {
        G(e.$$.fragment);
      },
      m(o, r) {
        z(e, o, r), i = !0;
      },
      p(o, r) {
        const a = {};
        r & /*$$scope, typeElement, isCurrentPanelOpen*/
        131075 && (a.$$scope = { dirty: r, ctx: o }), !n && r & /*isCurrentPanelOpen*/
        2 && (n = !0, a.open = /*isCurrentPanelOpen*/
        o[1], xe(() => n = !1)), e.$set(a);
      },
      i(o) {
        i || (E(e.$$.fragment, o), i = !0);
      },
      o(o) {
        C(e.$$.fragment, o), i = !1;
      },
      d(o) {
        V(e, o);
      }
    }
  );
}
function Gc(t) {
  let e, n;
  return e = new rn({
    props: {
      isRoot: !0,
      typeName: (
        /*getTypeOrRefName*/
        t[5](
          /*typeElement*/
          t[0]
        )
      ),
      displayArrow: !1,
      clickCallback: (
        /*func_2*/
        t[10]
      )
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*typeElement*/
      1 && (l.typeName = /*getTypeOrRefName*/
      i[5](
        /*typeElement*/
        i[0]
      )), s & /*typeElement*/
      1 && (l.clickCallback = /*func_2*/
      i[10]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Zc(t) {
  let e, n;
  return e = new Pn({
    props: {
      ripple: !1,
      $$slots: { default: [Gc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*$$scope, typeElement*/
      131073 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Wc(t) {
  let e, n;
  return e = new rn({
    props: {
      isRoot: !0,
      typeName: (
        /*getTypeOrRefName*/
        t[5](
          /*typeElement*/
          t[0]
        )
      ),
      isOpen: (
        /*isCurrentPanelOpen*/
        t[1]
      ),
      clickCallback: (
        /*func*/
        t[7]
      )
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*typeElement*/
      1 && (l.typeName = /*getTypeOrRefName*/
      i[5](
        /*typeElement*/
        i[0]
      )), s & /*isCurrentPanelOpen*/
      2 && (l.isOpen = /*isCurrentPanelOpen*/
      i[1]), s & /*typeElement*/
      1 && (l.clickCallback = /*func*/
      i[7]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function Yi(t) {
  let e, n;
  function i() {
    return (
      /*func_1*/
      t[8](
        /*typeRef*/
        t[14]
      )
    );
  }
  return e = new rn({
    props: {
      isRoot: !1,
      typeName: (
        /*getTypeOrRefName*/
        t[5](
          /*typeRef*/
          t[14]
        )
      ),
      clickCallback: i
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(s, l) {
      z(e, s, l), n = !0;
    },
    p(s, l) {
      t = s;
      const o = {};
      l & /*typeElement*/
      1 && (o.typeName = /*getTypeOrRefName*/
      t[5](
        /*typeRef*/
        t[14]
      )), l & /*typeElement*/
      1 && (o.clickCallback = i), e.$set(o);
    },
    i(s) {
      n || (E(e.$$.fragment, s), n = !0);
    },
    o(s) {
      C(e.$$.fragment, s), n = !1;
    },
    d(s) {
      V(e, s);
    }
  };
}
function Xc(t) {
  let e, n, i = it(
    /*typeElement*/
    t[0].typeRefs
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Yi(Ji(t, i, o));
  const l = (o) => C(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      e = we();
    },
    m(o, r) {
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(o, r);
      D(o, e, r), n = !0;
    },
    p(o, r) {
      if (r & /*getTypeOrRefName, typeElement, handleCardClick*/
      49) {
        i = it(
          /*typeElement*/
          o[0].typeRefs
        );
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = Ji(o, i, a);
          s[a] ? (s[a].p(u, r), E(s[a], 1)) : (s[a] = Yi(u), s[a].c(), E(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (ce(), a = i.length; a < s.length; a += 1)
          l(a);
        fe();
      }
    },
    i(o) {
      if (!n) {
        for (let r = 0; r < i.length; r += 1)
          E(s[r]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        C(s[r]);
      n = !1;
    },
    d(o) {
      o && R(e), Ft(s, o);
    }
  };
}
function Kc(t) {
  let e, n, i, s;
  return e = new Pn({
    props: {
      $$slots: { default: [Wc] },
      $$scope: { ctx: t }
    }
  }), i = new ks({
    props: {
      class: "panel-content",
      $$slots: { default: [Xc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment), n = Q(), G(i.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), D(l, n, o), z(i, l, o), s = !0;
    },
    p(l, o) {
      const r = {};
      o & /*$$scope, typeElement, isCurrentPanelOpen*/
      131075 && (r.$$scope = { dirty: o, ctx: l }), e.$set(r);
      const a = {};
      o & /*$$scope, typeElement*/
      131073 && (a.$$scope = { dirty: o, ctx: l }), i.$set(a);
    },
    i(l) {
      s || (E(e.$$.fragment, l), E(i.$$.fragment, l), s = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(i.$$.fragment, l), s = !1;
    },
    d(l) {
      l && R(n), V(e, l), V(i, l);
    }
  };
}
function Jc(t) {
  let e, n, i, s;
  const l = [Vc, zc], o = [];
  function r(a, u) {
    var f;
    return (
      /*typeElement*/
      (f = a[0].typeRefs) != null && f.length ? 0 : 1
    );
  }
  return e = r(t), n = o[e] = l[e](t), {
    c() {
      n.c(), i = we();
    },
    m(a, u) {
      o[e].m(a, u), D(a, i, u), s = !0;
    },
    p(a, u) {
      let f = e;
      e = r(a), e === f ? o[e].p(a, u) : (ce(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), fe(), n = o[e], n ? n.p(a, u) : (n = o[e] = l[e](a), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      s || (E(n), s = !0);
    },
    o(a) {
      C(n), s = !1;
    },
    d(a) {
      a && R(i), o[e].d(a);
    }
  };
}
function Yc(t) {
  let e, n, i;
  return n = new Os({
    props: {
      class: "accordion",
      $$slots: { default: [Jc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = j("section"), G(n.$$.fragment), U(e, "id", "type-designer-card"), U(e, "class", "svelte-n3a6x0");
    },
    m(s, l) {
      D(s, e, l), z(n, e, null), i = !0;
    },
    p(s, [l]) {
      const o = {};
      l & /*$$scope, isCurrentPanelOpen, typeElement*/
      131075 && (o.$$scope = { dirty: l, ctx: s }), n.$set(o);
    },
    i(s) {
      i || (E(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && R(e), V(n);
    }
  };
}
function $c(t) {
  return t.name !== void 0;
}
function Qc(t, e, n) {
  let i, s, { typeElement: l } = e, { columnKey: o } = e;
  const { drawer: r } = Pt;
  $e(t, r, (_) => n(12, s = _));
  const { dataTypeTemplatesSubElements: a } = At;
  $e(t, a, (_) => n(11, i = _));
  let u = !1;
  function f(_) {
    var I, T;
    const { currentColumnKey: v, currentTypeElement: L } = c(_);
    console.log(v, L);
    const A = {
      title: `Edit ${Oe[v].element.name} type`,
      description: `#${L.id}`,
      component: Us,
      componentProps: { currentTypeElement: L, currentColumnKey: v }
    };
    return (I = s.componentProps) != null && I.currentTypeElement.id && ((T = s.componentProps) == null ? void 0 : T.currentTypeElement.id) !== L.id ? Pt.handleOpenDrawer(A) : Pt.handleSwitchDrawer(A);
  }
  function c(_) {
    if ($c(_)) return {
      currentColumnKey: o,
      currentTypeElement: _
    };
    const v = Oe[o].typeRef.from;
    if (!v) throw new Error("TypeRef column not found");
    const L = i[`${v}Types`].find((A) => A.id === _.type);
    if (!L) throw new Error("Type element not found");
    return {
      currentColumnKey: v,
      currentTypeElement: L
    };
  }
  function d(_) {
    const { currentTypeElement: v } = c(_);
    return v.name || v.id;
  }
  const m = () => f(l), p = (_) => f(_);
  function g(_) {
    u = _, n(1, u);
  }
  const b = () => f(l);
  return t.$$set = (_) => {
    "typeElement" in _ && n(0, l = _.typeElement), "columnKey" in _ && n(6, o = _.columnKey);
  }, [
    l,
    u,
    r,
    a,
    f,
    d,
    o,
    m,
    p,
    g,
    b
  ];
}
class qs extends he {
  constructor(e) {
    super(), de(this, e, Qc, Yc, oe, { typeElement: 0, columnKey: 6 }, qc);
  }
  get typeElement() {
    return this.$$.ctx[0];
  }
  set typeElement(e) {
    this.$$set({ typeElement: e }), y();
  }
  get columnKey() {
    return this.$$.ctx[6];
  }
  set columnKey(e) {
    this.$$set({ columnKey: e }), y();
  }
}
me(qs, { typeElement: {}, columnKey: {} }, [], [], !0);
function xc(t) {
  ot(t, "svelte-la1ubw", ".columns-container.svelte-la1ubw.svelte-la1ubw{display:flex;gap:1rem;padding:2rem 1rem;height:100%;box-sizing:border-box}#type-designer-columns.svelte-la1ubw .column-container{padding:0;border:1px solid rgb(81, 159, 152);transition:all 0.3s ease-in-out}#type-designer-columns.svelte-la1ubw .column-container--expanded{flex:1 1 0}#type-designer-columns.svelte-la1ubw .column-container--collapsed{padding:0.5rem}.column.svelte-la1ubw.svelte-la1ubw{display:flex;flex-direction:column;height:100%}#type-designer-columns.svelte-la1ubw .column-header{display:flex;justify-content:space-between;align-items:center;padding:0 1rem}#type-designer-columns.svelte-la1ubw .column-container--collapsed .column-header{padding:revert;position:relative;height:100%;flex-direction:column}.column-container--collapsed .column-header.svelte-la1ubw h1.svelte-la1ubw{width:max-content}#type-designer-columns.svelte-la1ubw .column-container--collapsed h1{transform-origin:0 0;transform:rotate(-90deg);position:absolute;bottom:-1.25rem;left:.75rem;margin:0}#type-designer-columns.svelte-la1ubw .icon-visibility{margin-top:.25rem}#type-designer-columns.svelte-la1ubw .content{display:flex;flex-direction:column;overflow:hidden}#type-designer-columns.svelte-la1ubw .visibility-button{margin-right:-0.5rem}#type-designer-columns.svelte-la1ubw .column-container--collapsed .visibility-button{margin-right:revert}.element-types.svelte-la1ubw.svelte-la1ubw{overflow-y:auto;padding:0.5rem}.add-button-container.svelte-la1ubw.svelte-la1ubw{background-color:var(--mdc-theme-surface);margin-top:auto;width:100%}#type-designer-columns.svelte-la1ubw .add-button{width:100%;padding:0.5rem;font-size:1rem;text-transform:none;height:44px}@media(max-width: 768px){.columns-container.svelte-la1ubw.svelte-la1ubw{flex-direction:column;height:auto}#type-designer-columns.svelte-la1ubw .column{max-width:none;height:auto}#type-designer-columns.svelte-la1ubw .column-container--collapsed{padding:revert}#type-designer-columns.svelte-la1ubw .column-container--collapsed .column-header{padding:inherit;flex-direction:row;align-items:center;justify-content:space-between;padding:0 1rem}#type-designer-columns.svelte-la1ubw .column-container--collapsed h1{transform:rotate(0deg);position:revert;margin:revert}#type-designer-columns.svelte-la1ubw .icon-visibility{margin-top:revert}}");
}
function $i(t, e, n) {
  const i = t.slice();
  return i[5] = e[n][0], i[6] = e[n][1], i;
}
function Qi(t, e, n) {
  const i = t.slice();
  return i[9] = e[n], i;
}
function xi(t) {
  let e, n, i = it(
    /*columnsEntries*/
    t[1]
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = is($i(t, i, o));
  const l = (o) => C(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      e = we();
    },
    m(o, r) {
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(o, r);
      D(o, e, r), n = !0;
    },
    p(o, r) {
      if (r & /*columnsEntries*/
      2) {
        i = it(
          /*columnsEntries*/
          o[1]
        );
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = $i(o, i, a);
          s[a] ? (s[a].p(u, r), E(s[a], 1)) : (s[a] = is(u), s[a].c(), E(s[a], 1), s[a].m(e.parentNode, e));
        }
        for (ce(), a = i.length; a < s.length; a += 1)
          l(a);
        fe();
      }
    },
    i(o) {
      if (!n) {
        for (let r = 0; r < i.length; r += 1)
          E(s[r]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        C(s[r]);
      n = !1;
    },
    d(o) {
      o && R(e), Ft(s, o);
    }
  };
}
function ef(t) {
  let e, n = (
    /*column*/
    t[6].name + ""
  ), i, s;
  return {
    c() {
      e = j("h1"), i = De(n), s = De(" (hidden)"), U(e, "class", "svelte-la1ubw");
    },
    m(l, o) {
      D(l, e, o), J(e, i), J(e, s);
    },
    p(l, o) {
      o & /*columnsEntries*/
      2 && n !== (n = /*column*/
      l[6].name + "") && Qe(i, n);
    },
    d(l) {
      l && R(e);
    }
  };
}
function tf(t) {
  let e, n = (
    /*column*/
    t[6].name + ""
  ), i;
  return {
    c() {
      e = j("h1"), i = De(n), U(e, "class", "svelte-la1ubw");
    },
    m(s, l) {
      D(s, e, l), J(e, i);
    },
    p(s, l) {
      l & /*columnsEntries*/
      2 && n !== (n = /*column*/
      s[6].name + "") && Qe(i, n);
    },
    d(s) {
      s && R(e);
    }
  };
}
function es(t) {
  let e, n;
  return e = new ks({
    props: {
      class: "content",
      $$slots: { default: [nf] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*$$scope, columnsEntries*/
      4098 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function ts(t) {
  let e, n;
  return e = new qs({
    props: {
      columnKey: (
        /*key*/
        t[5]
      ),
      typeElement: (
        /*typeElement*/
        t[9]
      )
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*columnsEntries*/
      2 && (l.columnKey = /*key*/
      i[5]), s & /*columnsEntries*/
      2 && (l.typeElement = /*typeElement*/
      i[9]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function nf(t) {
  let e, n, i = it(
    /*column*/
    t[6].types
  ), s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = ts(Qi(t, i, o));
  const l = (o) => C(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = j("div");
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      U(e, "class", "element-types svelte-la1ubw");
    },
    m(o, r) {
      D(o, e, r);
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(e, null);
      n = !0;
    },
    p(o, r) {
      if (r & /*columnsEntries*/
      2) {
        i = it(
          /*column*/
          o[6].types
        );
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = Qi(o, i, a);
          s[a] ? (s[a].p(u, r), E(s[a], 1)) : (s[a] = ts(u), s[a].c(), E(s[a], 1), s[a].m(e, null));
        }
        for (ce(), a = i.length; a < s.length; a += 1)
          l(a);
        fe();
      }
    },
    i(o) {
      if (!n) {
        for (let r = 0; r < i.length; r += 1)
          E(s[r]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        C(s[r]);
      n = !1;
    },
    d(o) {
      o && R(e), Ft(s, o);
    }
  };
}
function ns(t) {
  let e, n, i;
  function s() {
    return (
      /*click_handler_1*/
      t[4](
        /*key*/
        t[5]
      )
    );
  }
  return n = new On({
    props: {
      class: "add-button",
      $$slots: { default: [sf] },
      $$scope: { ctx: t }
    }
  }), n.$on("click", s), {
    c() {
      e = j("div"), G(n.$$.fragment), U(e, "class", "add-button-container svelte-la1ubw");
    },
    m(l, o) {
      D(l, e, o), z(n, e, null), i = !0;
    },
    p(l, o) {
      t = l;
      const r = {};
      o & /*$$scope, columnsEntries*/
      4098 && (r.$$scope = { dirty: o, ctx: t }), n.$set(r);
    },
    i(l) {
      i || (E(n.$$.fragment, l), i = !0);
    },
    o(l) {
      C(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && R(e), V(n);
    }
  };
}
function sf(t) {
  let e, n = (
    /*column*/
    t[6].name + ""
  ), i;
  return {
    c() {
      e = De("New "), i = De(n);
    },
    m(s, l) {
      D(s, e, l), D(s, i, l);
    },
    p(s, l) {
      l & /*columnsEntries*/
      2 && n !== (n = /*column*/
      s[6].name + "") && Qe(i, n);
    },
    d(s) {
      s && (R(e), R(i));
    }
  };
}
function lf(t) {
  let e, n, i, s, l, o, r, a;
  function u(g, b) {
    return (
      /*column*/
      g[6].visible ? tf : ef
    );
  }
  let f = u(t), c = f(t);
  function d() {
    return (
      /*click_handler*/
      t[3](
        /*key*/
        t[5]
      )
    );
  }
  s = new Mt({
    props: {
      class: "visibility-button",
      icon: (
        /*column*/
        t[6].visible ? "visibility" : "visibility_off"
      )
    }
  }), s.$on("click", d);
  let m = (
    /*column*/
    t[6].visible && es(t)
  ), p = (
    /*column*/
    t[6].visible && /*column*/
    t[6].name !== Oe.lNode.element.name && ns(t)
  );
  return {
    c() {
      e = j("article"), n = j("div"), c.c(), i = Q(), G(s.$$.fragment), l = Q(), m && m.c(), o = Q(), p && p.c(), r = Q(), U(n, "class", "column-header svelte-la1ubw"), U(e, "class", "column svelte-la1ubw");
    },
    m(g, b) {
      D(g, e, b), J(e, n), c.m(n, null), J(n, i), z(s, n, null), J(e, l), m && m.m(e, null), J(e, o), p && p.m(e, null), D(g, r, b), a = !0;
    },
    p(g, b) {
      t = g, f === (f = u(t)) && c ? c.p(t, b) : (c.d(1), c = f(t), c && (c.c(), c.m(n, i)));
      const _ = {};
      b & /*columnsEntries*/
      2 && (_.icon = /*column*/
      t[6].visible ? "visibility" : "visibility_off"), s.$set(_), /*column*/
      t[6].visible ? m ? (m.p(t, b), b & /*columnsEntries*/
      2 && E(m, 1)) : (m = es(t), m.c(), E(m, 1), m.m(e, o)) : m && (ce(), C(m, 1, 1, () => {
        m = null;
      }), fe()), /*column*/
      t[6].visible && /*column*/
      t[6].name !== Oe.lNode.element.name ? p ? (p.p(t, b), b & /*columnsEntries*/
      2 && E(p, 1)) : (p = ns(t), p.c(), E(p, 1), p.m(e, null)) : p && (ce(), C(p, 1, 1, () => {
        p = null;
      }), fe());
    },
    i(g) {
      a || (E(s.$$.fragment, g), E(m), E(p), a = !0);
    },
    o(g) {
      C(s.$$.fragment, g), C(m), C(p), a = !1;
    },
    d(g) {
      g && (R(e), R(r)), c.d(), V(s), m && m.d(), p && p.d();
    }
  };
}
function is(t) {
  let e, n;
  return e = new kn({
    props: {
      class: `column-container column-container--${/*column*/
      t[6].visible ? "expanded" : "collapsed"}`,
      $$slots: { default: [lf] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*columnsEntries*/
      2 && (l.class = `column-container column-container--${/*column*/
      i[6].visible ? "expanded" : "collapsed"}`), s & /*$$scope, columnsEntries*/
      4098 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function rf(t) {
  let e, n, i = (
    /*$columns*/
    t[0] && xi(t)
  );
  return {
    c() {
      e = j("div"), i && i.c(), U(e, "class", "columns-container svelte-la1ubw"), U(e, "id", "type-designer-columns");
    },
    m(s, l) {
      D(s, e, l), i && i.m(e, null), n = !0;
    },
    p(s, [l]) {
      /*$columns*/
      s[0] ? i ? (i.p(s, l), l & /*$columns*/
      1 && E(i, 1)) : (i = xi(s), i.c(), E(i, 1), i.m(e, null)) : i && (ce(), C(i, 1, 1, () => {
        i = null;
      }), fe());
    },
    i(s) {
      n || (E(i), n = !0);
    },
    o(s) {
      C(i), n = !1;
    },
    d(s) {
      s && R(e), i && i.d();
    }
  };
}
function af(t, e, n) {
  let i, s;
  const { columns: l } = Sn;
  $e(t, l, (a) => n(0, s = a));
  const o = (a) => Sn.toggleColumnVisibility(a), r = (a) => At.addNewType(a);
  return t.$$.update = () => {
    t.$$.dirty & /*$columns*/
    1 && n(1, i = Object.entries(s));
  }, [s, i, l, o, r];
}
class zs extends he {
  constructor(e) {
    super(), de(this, e, af, rf, oe, {}, xc);
  }
}
me(zs, {}, [], [], !0);
const of = "@oscd-plugins/type-designer", uf = "1.0.0", cf = "module", ff = {
  dev: "vite --mode STAND_ALONE",
  build: "vite build",
  "_build:watch": "NODE_ENV=development vite build --watch",
  "build:watch": "concurrently 'npm:_build:watch' 'npm:preview'",
  preview: "vite preview --port 55908",
  check: "svelte-check --tsconfig ./tsconfig.json",
  "check:watch": "npm run check -- --watch",
  version: "echo $npm_package_version"
}, df = {
  "@oscd-plugins/core": "workspace:^",
  "@oscd-plugins/ui": "workspace:^",
  "@oscd-plugins/uilib": "workspace:^",
  "@smui-extra/accordion": "7.0.0",
  "@smui/button": "7.0.0",
  "@smui/card": "7.0.0",
  "@smui/form-field": "7.0.0",
  "@smui/icon-button": "7.0.0",
  "@smui/layout-grid": "7.0.0",
  "@smui/paper": "7.0.0",
  "@smui/switch": "7.0.0",
  "@smui/textfield": "7.0.0"
}, mf = {
  "@sveltejs/vite-plugin-svelte": "^3.1.1",
  "@tsconfig/svelte": "^5.0.4",
  concurrently: "^7.6.0",
  sass: "^1.61.0",
  svelte: "^4.2.18",
  "svelte-check": "^3.8.5",
  tslib: "^2.6.3",
  typescript: "^5.5.3",
  vite: "^5.4.1",
  "vite-plugin-css-injected-by-js": "^3.1.1"
}, ss = {
  name: of,
  private: !0,
  version: uf,
  type: cf,
  scripts: ff,
  dependencies: df,
  devDependencies: mf
};
function hf(t) {
  ot(t, "svelte-10rk1wk", ".no-content.svelte-10rk1wk{display:flex;justify-content:center;align-items:center;height:100%}.banner.svelte-10rk1wk{align-items:center;justify-content:space-between;padding:.25rem 2rem;width:100%;background-color:var(--mdc-theme-error);color:white;position:fixed;top:var(--header-height);box-sizing:border-box;z-index:50}");
}
function pf(t) {
  let e;
  return {
    c() {
      e = j("div"), e.innerHTML = "<p>No xml document loaded</p>", U(e, "class", "no-content svelte-10rk1wk");
    },
    m(n, i) {
      D(n, e, i);
    },
    p: Ce,
    i: Ce,
    o: Ce,
    d(n) {
      n && R(e);
    }
  };
}
function gf(t) {
  let e, n;
  return e = new Is({
    props: {
      $$slots: { default: [bf] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      G(e.$$.fragment);
    },
    m(i, s) {
      z(e, i, s), n = !0;
    },
    p(i, s) {
      const l = {};
      s & /*$$scope, showBanner*/
      132 && (l.$$scope = { dirty: s, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      V(e, i);
    }
  };
}
function ls(t) {
  let e, n, i, s, l;
  return i = new Mt({ props: { icon: "close", color: "white" } }), i.$on(
    "click",
    /*click_handler*/
    t[5]
  ), {
    c() {
      e = j("div"), n = De(`This plugin is in test phase and not suitable for production use.
						`), G(i.$$.fragment), U(e, "class", "banner svelte-10rk1wk"), U(e, "style", s = /*showBanner*/
      t[2] ? "display:flex;" : "display:none;");
    },
    m(o, r) {
      D(o, e, r), J(e, n), z(i, e, null), l = !0;
    },
    p(o, r) {
      (!l || r & /*showBanner*/
      4 && s !== (s = /*showBanner*/
      o[2] ? "display:flex;" : "display:none;")) && U(e, "style", s);
    },
    i(o) {
      l || (E(i.$$.fragment, o), l = !0);
    },
    o(o) {
      C(i.$$.fragment, o), l = !1;
    },
    d(o) {
      o && R(e), V(i);
    }
  };
}
function bf(t) {
  let e, n, i, s = (
    /*showBanner*/
    t[2] && !0 && ls(t)
  );
  return n = new zs({}), {
    c() {
      s && s.c(), e = Q(), G(n.$$.fragment);
    },
    m(l, o) {
      s && s.m(l, o), D(l, e, o), z(n, l, o), i = !0;
    },
    p(l, o) {
      /*showBanner*/
      l[2] ? s ? (s.p(l, o), o & /*showBanner*/
      4 && E(s, 1)) : (s = ls(l), s.c(), E(s, 1), s.m(e.parentNode, e)) : s && (ce(), C(s, 1, 1, () => {
        s = null;
      }), fe());
    },
    i(l) {
      i || (E(s), E(n.$$.fragment, l), i = !0);
    },
    o(l) {
      C(s), C(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && R(e), s && s.d(l), V(n, l);
    }
  };
}
function _f(t) {
  let e, n, i, s;
  const l = [gf, pf], o = [];
  function r(a, u) {
    return (
      /*xmlDocument*/
      a[0] ? 0 : 1
    );
  }
  return n = r(t), i = o[n] = l[n](t), {
    c() {
      e = j("type-designer"), i.c();
    },
    m(a, u) {
      D(a, e, u), o[n].m(e, null), s = !0;
    },
    p(a, u) {
      let f = n;
      n = r(a), n === f ? o[n].p(a, u) : (ce(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), fe(), i = o[n], i ? i.p(a, u) : (i = o[n] = l[n](a), i.c()), E(i, 1), i.m(e, null));
    },
    i(a) {
      s || (E(i), s = !0);
    },
    o(a) {
      C(i), s = !1;
    },
    d(a) {
      a && R(e), o[n].d();
    }
  };
}
function vf(t) {
  let e, n, i, s, l, o;
  return l = new Ts({
    props: {
      pluginType: (
        /*pluginType*/
        t[1]
      ),
      $$slots: { default: [_f] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = j("input"), n = Q(), i = j("input"), s = Q(), G(l.$$.fragment), U(e, "type", "hidden"), U(e, "name", "package-name"), e.value = ss.name, U(i, "type", "hidden"), U(i, "name", "package-version"), i.value = ss.version;
    },
    m(r, a) {
      D(r, e, a), D(r, n, a), D(r, i, a), D(r, s, a), z(l, r, a), o = !0;
    },
    p(r, [a]) {
      const u = {};
      a & /*pluginType*/
      2 && (u.pluginType = /*pluginType*/
      r[1]), a & /*$$scope, showBanner, xmlDocument*/
      133 && (u.$$scope = { dirty: a, ctx: r }), l.$set(u);
    },
    i(r) {
      o || (E(l.$$.fragment, r), o = !0);
    },
    o(r) {
      C(l.$$.fragment, r), o = !1;
    },
    d(r) {
      r && (R(e), R(n), R(i), R(s)), V(l, r);
    }
  };
}
function yf(t, e, n) {
  let { xmlDocument: i = void 0 } = e, { pluginHostElement: s } = e, { pluginType: l = "editor" } = e, { editCount: o } = e, r = !0;
  async function a({
    updateTrigger: f,
    // is not used but should be passed to the function to trigger reactivity
    newXmlDocument: c,
    newPluginHostElement: d
  }) {
    await ct.init({ newXmlDocument: c, newPluginHostElement: d }), At.init(i);
  }
  const u = () => n(2, r = !r);
  return t.$$set = (f) => {
    "xmlDocument" in f && n(0, i = f.xmlDocument), "pluginHostElement" in f && n(3, s = f.pluginHostElement), "pluginType" in f && n(1, l = f.pluginType), "editCount" in f && n(4, o = f.editCount);
  }, t.$$.update = () => {
    t.$$.dirty & /*editCount, xmlDocument, pluginHostElement*/
    25 && a({
      updateTrigger: o,
      newXmlDocument: i,
      newPluginHostElement: s
    });
  }, [
    i,
    l,
    r,
    s,
    o,
    u
  ];
}
class Vs extends he {
  constructor(e) {
    super(), de(
      this,
      e,
      yf,
      vf,
      oe,
      {
        xmlDocument: 0,
        pluginHostElement: 3,
        pluginType: 1,
        editCount: 4
      },
      hf
    );
  }
  get xmlDocument() {
    return this.$$.ctx[0];
  }
  set xmlDocument(e) {
    this.$$set({ xmlDocument: e }), y();
  }
  get pluginHostElement() {
    return this.$$.ctx[3];
  }
  set pluginHostElement(e) {
    this.$$set({ pluginHostElement: e }), y();
  }
  get pluginType() {
    return this.$$.ctx[1];
  }
  set pluginType(e) {
    this.$$set({ pluginType: e }), y();
  }
  get editCount() {
    return this.$$.ctx[4];
  }
  set editCount(e) {
    this.$$set({ editCount: e }), y();
  }
}
me(Vs, { xmlDocument: {}, pluginHostElement: {}, pluginType: {}, editCount: {} }, [], [], !0);
const Cf = Ga({
  pluginType: "editor",
  isStandAlone: !1,
  pluginComponent: Vs
});
export {
  Cf as default
};
