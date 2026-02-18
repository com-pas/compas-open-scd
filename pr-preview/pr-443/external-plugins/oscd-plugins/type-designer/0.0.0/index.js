import * as __SNOWPACK_ENV__ from '../../../../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

var Pn = Object.defineProperty;
var $n = (n, e, t) => e in n ? Pn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ue = (n, e, t) => $n(n, typeof e != "symbol" ? e + "" : e, t);
function X() {
}
function P(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function sn(n) {
  return n();
}
function Ht() {
  return /* @__PURE__ */ Object.create(null);
}
function he(n) {
  n.forEach(sn);
}
function ve(n) {
  return typeof n == "function";
}
function G(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Dn(n) {
  return Object.keys(n).length === 0;
}
function It(n, ...e) {
  if (n == null) {
    for (const s of e)
      s(void 0);
    return X;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Ve(n) {
  let e;
  return It(n, (t) => e = t)(), e;
}
function rn(n, e, t) {
  n.$$.on_destroy.push(It(e, t));
}
function se(n, e, t, s) {
  if (n) {
    const r = on(n, e, t, s);
    return n[0](r);
  }
}
function on(n, e, t, s) {
  return n[1] && s ? P(t.ctx.slice(), n[1](s(e))) : t.ctx;
}
function ie(n, e, t, s) {
  if (n[2] && s) {
    const r = n[2](s(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const o = [], l = Math.max(e.dirty.length, r.length);
      for (let i = 0; i < l; i += 1)
        o[i] = e.dirty[i] | r[i];
      return o;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function re(n, e, t, s, r, o) {
  if (r) {
    const l = on(e, t, s, o);
    n.p(l, r);
  }
}
function oe(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let s = 0; s < t; s++)
      e[s] = -1;
    return e;
  }
  return -1;
}
function fe(n) {
  const e = {};
  for (const t in n) t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function z(n, e) {
  const t = {};
  e = new Set(e);
  for (const s in n) !e.has(s) && s[0] !== "$" && (t[s] = n[s]);
  return t;
}
function kn(n, e, t) {
  return n.set(t), e;
}
function ne(n) {
  return n && ve(n.destroy) ? n.destroy : X;
}
const Bn = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function Le(n, e) {
  n.appendChild(e);
}
function Rn(n, e, t) {
  const s = Mn(n);
  if (!s.getElementById(e)) {
    const r = U("style");
    r.id = e, r.textContent = t, Hn(s, r);
  }
}
function Mn(n) {
  if (!n) return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function Hn(n, e) {
  return Le(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function v(n, e, t) {
  n.insertBefore(e, t || null);
}
function y(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function an(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function U(n) {
  return document.createElement(n);
}
function Je(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function we(n) {
  return document.createTextNode(n);
}
function te() {
  return we(" ");
}
function ce() {
  return we("");
}
function Ke(n, e, t, s) {
  return n.addEventListener(e, t, s), () => n.removeEventListener(e, t, s);
}
function D(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Nn = ["width", "height"];
function Be(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const s in e)
    e[s] == null ? n.removeAttribute(s) : s === "style" ? n.style.cssText = e[s] : s === "__value" ? n.value = n[s] = e[s] : t[s] && t[s].set && Nn.indexOf(s) === -1 ? n[s] = e[s] : D(n, s, e[s]);
}
function ut(n, e) {
  for (const t in e)
    D(n, t, e[t]);
}
function Fn(n, e) {
  Object.keys(e).forEach((t) => {
    Un(n, t, e[t]);
  });
}
function Un(n, e, t) {
  const s = e.toLowerCase();
  s in n ? n[s] = typeof n[s] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : D(n, e, t);
}
function ft(n) {
  return /-/.test(n) ? Fn : Be;
}
function jn(n) {
  return Array.from(n.childNodes);
}
function zn(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Gn(n, e, t, s) {
  n.style.setProperty(e, t, "");
}
function Vn(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
function de(n, e) {
  return new n(e);
}
let Qe;
function Ye(n) {
  Qe = n;
}
function Q() {
  if (!Qe) throw new Error("Function called outside component initialization");
  return Qe;
}
function qn(n) {
  Q().$$.on_mount.push(n);
}
function Ot(n) {
  Q().$$.on_destroy.push(n);
}
function Re(n, e) {
  return Q().$$.context.set(n, e), e;
}
function Ie(n) {
  return Q().$$.context.get(n);
}
const Ue = [], Y = [];
let ze = [];
const Nt = [], Xn = /* @__PURE__ */ Promise.resolve();
let At = !1;
function Wn() {
  At || (At = !0, Xn.then(g));
}
function Et(n) {
  ze.push(n);
}
const gt = /* @__PURE__ */ new Set();
let Ne = 0;
function g() {
  if (Ne !== 0)
    return;
  const n = Qe;
  do {
    try {
      for (; Ne < Ue.length; ) {
        const e = Ue[Ne];
        Ne++, Ye(e), Zn(e.$$);
      }
    } catch (e) {
      throw Ue.length = 0, Ne = 0, e;
    }
    for (Ye(null), Ue.length = 0, Ne = 0; Y.length; ) Y.pop()();
    for (let e = 0; e < ze.length; e += 1) {
      const t = ze[e];
      gt.has(t) || (gt.add(t), t());
    }
    ze.length = 0;
  } while (Ue.length);
  for (; Nt.length; )
    Nt.pop()();
  At = !1, gt.clear(), Ye(n);
}
function Zn(n) {
  if (n.fragment !== null) {
    n.update(), he(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Et);
  }
}
function Jn(n) {
  const e = [], t = [];
  ze.forEach((s) => n.indexOf(s) === -1 ? e.push(s) : t.push(s)), t.forEach((s) => s()), ze = e;
}
const at = /* @__PURE__ */ new Set();
let De;
function me() {
  De = {
    r: 0,
    c: [],
    p: De
    // parent group
  };
}
function pe() {
  De.r || he(De.c), De = De.p;
}
function _(n, e) {
  n && n.i && (at.delete(n), n.i(e));
}
function A(n, e, t, s) {
  if (n && n.o) {
    if (at.has(n)) return;
    at.add(n), De.c.push(() => {
      at.delete(n), s && (t && n.d(1), s());
    }), n.o(e);
  } else s && s();
}
function dt(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function W(n, e) {
  const t = {}, s = {}, r = { $$scope: 1 };
  let o = n.length;
  for (; o--; ) {
    const l = n[o], i = e[o];
    if (i) {
      for (const a in l)
        a in i || (s[a] = 1);
      for (const a in i)
        r[a] || (t[a] = i[a], r[a] = 1);
      n[o] = i;
    } else
      for (const a in l)
        r[a] = 1;
  }
  for (const l in s)
    l in t || (t[l] = void 0);
  return t;
}
function R(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function N(n) {
  n && n.c();
}
function M(n, e, t) {
  const { fragment: s, after_update: r } = n.$$;
  s && s.m(e, t), Et(() => {
    const o = n.$$.on_mount.map(sn).filter(ve);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : he(o), n.$$.on_mount = [];
  }), r.forEach(Et);
}
function H(n, e) {
  const t = n.$$;
  t.fragment !== null && (Jn(t.after_update), he(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Kn(n, e) {
  n.$$.dirty[0] === -1 && (Ue.push(n), Wn(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Z(n, e, t, s, r, o, l = null, i = [-1]) {
  const a = Qe;
  Ye(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: X,
    not_equal: r,
    bound: Ht(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Ht(),
    dirty: i,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  l && l(c.root);
  let u = !1;
  if (c.ctx = t ? t(n, e.props || {}, (f, d, ...m) => {
    const h = m.length ? m[0] : d;
    return c.ctx && r(c.ctx[f], c.ctx[f] = h) && (!c.skip_bound && c.bound[f] && c.bound[f](h), u && Kn(n, f)), d;
  }) : [], c.update(), u = !0, he(c.before_update), c.fragment = s ? s(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = jn(e.target);
      c.fragment && c.fragment.l(f), f.forEach(y);
    } else
      c.fragment && c.fragment.c();
    e.intro && _(n.$$.fragment), M(n, e.target, e.anchor), g();
  }
  Ye(a);
}
let ln;
typeof HTMLElement == "function" && (ln = class extends HTMLElement {
  constructor(e, t, s) {
    super();
    /** The Svelte component constructor */
    ue(this, "$$ctor");
    /** Slots */
    ue(this, "$$s");
    /** The Svelte component instance */
    ue(this, "$$c");
    /** Whether or not the custom element is connected */
    ue(this, "$$cn", !1);
    /** Component props data */
    ue(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ue(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ue(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    ue(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    ue(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, s) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, s);
  }
  removeEventListener(e, t, s) {
    if (super.removeEventListener(e, t, s), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(o) {
        return () => {
          let l;
          return {
            c: function() {
              l = U("slot"), o !== "default" && D(l, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, u) {
              v(c, l, u);
            },
            d: function(c) {
              c && y(l);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, s = Vn(this);
      for (const o of this.$$s)
        o in s && (t[o] = [e(o)]);
      for (const o of this.attributes) {
        const l = this.$$g_p(o.name);
        l in this.$$d || (this.$$d[l] = lt(l, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$scope: {
            ctx: []
          }
        }
      });
      const r = () => {
        this.$$r = !0;
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const l = lt(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, l);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const o in this.$$l)
        for (const l of this.$$l[o]) {
          const i = this.$$c.$on(o, l);
          this.$$l_u.set(l, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, s) {
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = lt(e, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function lt(n, e, t, s) {
  var o;
  const r = (o = t[n]) == null ? void 0 : o.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !t[n])
    return e;
  if (s === "toAttribute")
    switch (r) {
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
    switch (r) {
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
function J(n, e, t, s, r, o) {
  let l = class extends ln {
    constructor() {
      super(n, t, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (i) => (e[i].attribute || i).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((i) => {
    Object.defineProperty(l.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(a) {
        var c;
        a = lt(i, a, e), this.$$d[i] = a, (c = this.$$c) == null || c.$set({ [i]: a });
      }
    });
  }), s.forEach((i) => {
    Object.defineProperty(l.prototype, i, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[i];
      }
    });
  }), n.element = /** @type {any} */
  l, l;
}
class K {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ue(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ue(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    H(this, 1), this.$destroy = X;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!ve(t))
      return X;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return s.push(t), () => {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Dn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Yn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Yn);
const Qn = {
  upload_file: "M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z",
  download: "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"
};
function xn(n) {
  let e, t, s, r;
  return {
    c() {
      e = Je("svg"), t = Je("title"), s = we("icon"), r = Je("path"), D(
        r,
        "d",
        /*draw*/
        n[1]
      ), D(e, "xmlns", "http://www.w3.org/2000/svg"), D(e, "height", "24px"), D(e, "viewBox", "0 -960 960 960"), D(e, "width", "24px"), D(
        e,
        "fill",
        /*fillColor*/
        n[0]
      );
    },
    m(o, l) {
      v(o, e, l), Le(e, t), Le(t, s), Le(e, r);
    },
    p(o, [l]) {
      l & /*draw*/
      2 && D(
        r,
        "d",
        /*draw*/
        o[1]
      ), l & /*fillColor*/
      1 && D(
        e,
        "fill",
        /*fillColor*/
        o[0]
      );
    },
    i: X,
    o: X,
    d(o) {
      o && y(e);
    }
  };
}
function es(n, e, t) {
  let { fillColor: s = "white" } = e, { icon: r } = e, o;
  function l(i) {
    return Qn[i];
  }
  return n.$$set = (i) => {
    "fillColor" in i && t(0, s = i.fillColor), "icon" in i && t(2, r = i.icon);
  }, n.$$.update = () => {
    n.$$.dirty & /*icon*/
    4 && t(1, o = l(r));
  }, [s, o, r];
}
class Pt extends K {
  constructor(e) {
    super(), Z(this, e, es, xn, G, { fillColor: 0, icon: 2 });
  }
  get fillColor() {
    return this.$$.ctx[0];
  }
  set fillColor(e) {
    this.$$set({ fillColor: e }), g();
  }
  get icon() {
    return this.$$.ctx[2];
  }
  set icon(e) {
    this.$$set({ icon: e }), g();
  }
}
J(Pt, { fillColor: {}, icon: {} }, [], [], !0);
const ts = "/fonts.css", ns = "/theme.css", ss = "/bare.css";
var p;
let lr = (p = class {
  constructor(e) {
    this.root = e;
  }
  searchGSEs(e) {
    return this.searchElement(
      p.SelectorGSE,
      ["ldInst", "cbName"],
      e
    );
  }
  searchIEDs(e) {
    return this.searchElement(
      p.SelectorIED,
      p.AttributeListIED,
      e
    );
  }
  searchLNodes(e) {
    return this.searchElement(
      "LNode",
      p.AttributeListLNode,
      e
    );
  }
  searchBays(e) {
    return this.searchElement(
      p.SelectorBay,
      p.AttributeListBay,
      e
    );
  }
  getBaysByIEDName(e) {
    const t = this.determineRoot(), s = `SCL Substation VoltageLevel Bay LNode[iedName='${e}']`, r = Array.from(t.querySelectorAll(s)), o = /* @__PURE__ */ new Set();
    for (const l of r)
      if (l != null) {
        const i = l.closest("Bay"), a = i == null ? void 0 : i.getAttribute("name");
        a != null && o.add(a);
      }
    return o;
  }
  getConnectedAPByIEDName(e) {
    const t = this.determineRoot(), s = `SCL > Communication > SubNetwork > ConnectedAP[iedName='${e}']`;
    return new Set(t.querySelectorAll(s));
  }
  getSubnetworksByIEDName(e) {
    const t = this.getConnectedAPByIEDName(e), s = /* @__PURE__ */ new Set();
    for (const r of t)
      if (r != null) {
        const o = r.closest("SubNetwork");
        o != null && s.add(o);
      }
    return s;
  }
  searchGSEControls(e) {
    return this.searchElement(
      p.SelectorGSEControl,
      ["name", "datSet"],
      e
    );
  }
  searchGSEControlByName(e, t) {
    return this.searchElement(
      `${p.SelectorGSEControl}[name='${e}']`,
      ["name", "datSet"],
      t
    )[0];
  }
  searchInputs(e) {
    return this.searchElement(
      p.SelectorInput,
      [],
      e
    );
  }
  searchExtRef(e) {
    return this.searchElement(
      p.SelectorExtRef,
      p.AttributeListExtRef,
      e
    );
  }
  searchDataSetByName(e, t) {
    const s = `${p.SelectorDataSet}[name="${e}"]`, r = this.searchElement(
      s,
      ["name"],
      t
    );
    if (r.length !== 1) {
      console.log({
        level: "error",
        msg: "we found not exactly one element",
        length: r.length
      });
      return;
    }
    return r[0];
  }
  searchElementsLDParent(e) {
    const t = e.closest(p.SelectorLD);
    if (!t) {
      console.log({
        level: "error",
        msg: "could not find LD parent",
        element: e
      });
      return;
    }
    return Ze(t, ["inst"]);
  }
  searchGSE(e, t, s) {
    const r = `${p.SelectorGSEElement}[ldInst='${e}'][cbName='${t}']`, o = this.searchElement(
      r,
      ["cbName", "ldInst"],
      s
    );
    if (o.length !== 1) {
      console.error({
        level: "error",
        msg: "we did not found exaclty one GSE element",
        length: o.length,
        ldInst: e,
        cbName: t,
        selector: r,
        root: this.root,
        options: s
      });
      return;
    }
    return o[0];
  }
  searchElementsParentSubnetwork(e) {
    const t = e.closest(p.SelectorSubNetwork);
    if (!t) {
      console.error({
        level: "error",
        msg: "could not find SubNetwork parent",
        element: e
      });
      return;
    }
    return Ze(t, ["name"]);
  }
  searchDOTypes(e) {
    return this.searchElement(
      p.SelectorDOType,
      ["id"],
      e
    );
  }
  searchDATypes(e) {
    return this.searchElement(
      p.SelectorDAType,
      ["id"],
      e
    );
  }
  searchEnumTypes(e) {
    return this.searchElement(
      p.SelectorEnumType,
      ["id"],
      e
    );
  }
  searchDOsByType(e, t) {
    const s = `${p.SelectorDO}[type='${e}']`;
    return this.searchElement(
      s,
      ["name", "type"],
      t
    );
  }
  searchLNodeTypes(e) {
    return this.searchElement(
      p.SelectorLNodeType,
      ["id", "lnClass"],
      e
    );
  }
  searchReportControls(e) {
    return this.searchElement(
      p.SelectorReportControl,
      ["rptID", "name", "datSet"],
      e
    );
  }
  searchElementsParentIED(e) {
    const t = p.SelectorIED;
    return this.searchElementParent(
      e,
      t,
      p.AttributeListIED
    );
  }
  searcClientLNs(e) {
    return this.searchElement(
      p.SelectorClientLN,
      ["iedName"],
      e
    );
  }
  searchElementsByTypeAttr(e, t) {
    const s = `[type='${e}']`;
    return this.searchElement(s, [], t);
  }
  searchElementsByLnTypeAttr(e, t) {
    const s = `[lnType='${e}']`;
    return this.searchElement(s, [], t);
  }
  searchConnectedAPs(e) {
    return this.searchElement(
      p.SelectorConnectedAP,
      p.AttributeListConnectedAP,
      e
    );
  }
  searchConnectedAPIP(e) {
    return this.searchElement(
      p.SelectorIP,
      p.AttributeListIP,
      e
    )[0];
  }
  searchConnectedAPIPSubnet(e) {
    return this.searchElement(
      p.SelectorIPSubnet,
      p.AttributeListIPSubnet,
      e
    )[0];
  }
  searchConnectedAPIPGateway(e) {
    return this.searchElement(
      p.SelectorIPGateway,
      p.AttributeListIPGateway,
      e
    )[0];
  }
  searchConnectedAPCables(e) {
    return this.searchElement(
      p.SelectorCable,
      p.AttributeListCable,
      e
    );
  }
  searchConnectedAPGooseAddresses(e) {
    return this.searchElement(
      p.SelectorGooseAddress,
      p.AttributeListGooseAddress,
      e
    );
  }
  searchConnectedAPSampledValuesAddresses(e) {
    return this.searchElement(
      p.SelectorSampledValuesAddress,
      p.AttributeListSampledValuesAddress,
      e
    );
  }
  searchAddressVLanId(e) {
    return this.searchSingleElement(
      p.SelectorAddressVLanId,
      p.AttributeListVLanId,
      e
    );
  }
  searchAddressMacAddress(e) {
    return this.searchSingleElement(
      p.SelectorAddressMacAddress,
      p.AttributeListMacAddress,
      e
    );
  }
  seachConnectedPhysConnections(e) {
    return this.searchElement(
      p.SelectorPhysConnection,
      p.AttributeListPhysConnection,
      e
    );
  }
  seachPhysConnectionCable(e) {
    return this.searchSingleElement(
      p.SelectorPhysConnectionCable,
      p.AttributeListCable,
      e
    );
  }
  seachPhysConnectionPort(e) {
    return this.searchSingleElement(
      p.SelectorPhysConnectionPort,
      p.AttributeListPort,
      e
    );
  }
  seachPhysConnectionType(e) {
    return this.searchSingleElement(
      p.SelectorPhysConnectionType,
      p.AttributeListType,
      e
    );
  }
  seachPhysConnectionPlug(e) {
    return this.searchSingleElement(
      p.SelectorPhysConnectionPlug,
      p.AttributeListPlug,
      e
    );
  }
  //
  // Privates
  //
  searchElement(e, t, s) {
    const r = this.determineRoot(s);
    return Array.from(r.querySelectorAll(e)).map((i) => Ze(i, t));
  }
  determineRoot(e) {
    return e != null && e.root ? e.root : this.root;
  }
  searchElementParent(e, t, s) {
    const r = e.closest(t);
    if (r)
      return Ze(r, s);
  }
  searchSingleElement(e, t, s) {
    const o = this.determineRoot(s).querySelector(e);
    return o === null ? null : Ze(o, t);
  }
}, p.SelectorGSE = "GSE", p.SelectorIED = "IED", p.AttributeListIED = ["name"], p.SelectorLNode = "LNode", p.AttributeListLNode = [
  "iedName",
  "ldInst",
  "lnClass",
  "lnInst",
  "lnType",
  "prefix"
], p.SelectorBay = "Bay", p.AttributeListBay = ["name"], p.SelectorGSEControl = "GSEControl", p.SelectorInput = "Inputs", p.SelectorExtRef = "ExtRef", p.AttributeListExtRef = [
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
], p.SelectorDataSet = "DataSet", p.SelectorLD = "LDevice", p.SelectorGSEElement = "GSE", p.SelectorSubNetwork = "SubNetwork", p.SelectorDOType = "DOType", p.SelectorDAType = "DAType", p.SelectorEnumType = "EnumType", p.SelectorDO = "DO", p.SelectorLNodeType = "LNodeType", p.SelectorReportControl = "ReportControl", p.SelectorClientLN = "ClientLN", p.SelectorConnectedAP = "ConnectedAP", p.AttributeListConnectedAP = ["apName", "iedName", "redProt"], p.SelectorIP = "Address > P[type='IP']", p.AttributeListIP = [], p.SelectorIPSubnet = "Address > P[type='IP-SUBNET']", p.AttributeListIPSubnet = [], p.SelectorIPGateway = "Address > P[type='IP-GATEWAY']", p.AttributeListIPGateway = [], p.SelectorCable = "PhysConn[type='Connection'] P[type='Cable']", p.AttributeListCable = [], p.SelectorGooseAddress = "GSE > Address", p.AttributeListGooseAddress = [], p.SelectorSampledValuesAddress = "SMV > Address", p.AttributeListSampledValuesAddress = [], p.SelectorAddressVLanId = "P[type='VLAN-ID']", p.AttributeListVLanId = [], p.SelectorAddressMacAddress = "P[type='MAC-Address']", p.AttributeListMacAddress = [], p.SelectorPhysConnection = "PhysConn[type='Connection']", p.AttributeListPhysConnection = [], p.SelectorPhysConnectionCable = "P[type='Cable']", p.SelectorPhysConnectionPort = "P[type='Port']", p.AttributeListPort = [], p.SelectorPhysConnectionType = "P[type='Type']", p.AttributeListType = [], p.SelectorPhysConnectionPlug = "P[type='Plug']", p.AttributeListPlug = [], p);
function Ze(n, e) {
  const t = { element: n };
  for (const s of e) {
    const r = s;
    t[r] = n.getAttribute(r) ?? "";
  }
  return t;
}
class is {
  constructor(e) {
    this.root = e;
  }
  //
  // Privates
  //
  determineRoot(e) {
    return (e == null ? void 0 : e.root) || this.root;
  }
  searchElements(e, t, s) {
    const r = this.determineRoot(s);
    return Array.from(r.querySelectorAll(e)).map(
      (i) => this.createElement(i, t)
    );
  }
  searchSingleElement(e, t, s) {
    const o = this.determineRoot(s).querySelector(e);
    return o === null ? null : this.createElement(o, t);
  }
  searchElementParent(e, t, s) {
    const r = e.closest(t);
    if (r)
      return this.createElement(r, s);
  }
  createElement(e, t) {
    const s = { element: e };
    for (const r of t) {
      const o = r;
      s[o] = e.getAttribute(o) ?? "";
    }
    return s;
  }
}
const je = {
  substation: "Substation",
  voltageLevel: "Voltage Level",
  bay: "Bay",
  ied: "IED",
  lDevice: "Logical Device"
}, ee = class ee extends is {
  constructor(e) {
    if (super(e), !je)
      throw new Error("ELEMENT_NAMES is not initialized");
  }
  searchDataTypeTemplates() {
    return this.searchSingleElement(
      ee.SelectorDataTypeTemplates,
      []
    );
  }
  searchLDeviceElements(e) {
    return this.searchElements(
      ee.SelectorLDeviceType,
      ["id", "desc", "inst"],
      e
    );
  }
  searchBayElements(e) {
    return this.searchElements(
      ee.SelectorBayType,
      ["id", "name", "desc"],
      e
    );
  }
  searchIEDElements(e) {
    return this.searchElements(
      ee.SelectorIEDType,
      [
        "id",
        "name",
        "desc",
        "originalSclRevision",
        "originalSclVersion",
        "configVersion",
        "owner",
        "manufacturer",
        "type"
      ],
      e
    );
  }
  searchVoltageLevelElements(e) {
    return this.searchElements(
      ee.SelectorVoltageLevelType,
      ["id", "name", "desc", "nomFreq", "numPhases"],
      e
    );
  }
  searchSubstationElements(e) {
    return this.searchElements(
      ee.SelectorSubstationType,
      ["id", "name", "desc"],
      e
    );
  }
};
ee.SelectorDataTypeTemplates = "DataTypeTemplates", ee.SelectorLDeviceType = "LDeviceType", ee.SelectorBayType = "BayType", ee.SelectorIEDType = "IEDType", ee.SelectorVoltageLevelType = "VoltageLevelType", ee.SelectorSubstationType = "SubstationType";
let St = ee;
class cn {
  constructor(e) {
    this.root = e, this.dataTypeTemplatesQueries = new St(this.root);
  }
  findDataTypesElement() {
    return this.dataTypeTemplatesQueries.searchDataTypeTemplates();
  }
  findTypeDesignerElements(e) {
    return {
      logicalDevices: this.dataTypeTemplatesQueries.searchLDeviceElements(e),
      bays: this.dataTypeTemplatesQueries.searchBayElements(e),
      ieds: this.dataTypeTemplatesQueries.searchIEDElements(e),
      voltageLevels: this.dataTypeTemplatesQueries.searchVoltageLevelElements(
        e
      ),
      substations: this.dataTypeTemplatesQueries.searchSubstationElements(e)
    };
  }
}
function un(n, e, t) {
  const s = n.createElementNS(n.documentElement.namespaceURI, e);
  return Object.entries(t).filter(([r, o]) => o !== null).forEach(([r, o]) => s.setAttribute(r, o)), s;
}
function rs(n) {
  const t = new XMLSerializer().serializeToString(n);
  return t.startsWith("<?xml") ? t : (
    // biome-ignore lint/style/useTemplate: using templates literal would make the code less readable
    '<?xml version="1.0" encoding="UTF-8"?>' + `
` + t
  );
}
function os(n, e = "user", t) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { action: n, initiator: e, ...t == null ? void 0 : t.detail }
  });
}
function as(n, e, t) {
  return new CustomEvent("open-doc", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { doc: n, docName: e, ...t == null ? void 0 : t.detail }
  });
}
function ls(n) {
  function e() {
    return Reflect.construct(HTMLElement, [], new.target);
  }
  return e.prototype = Object.create(HTMLElement.prototype), e.prototype.pluginInstance = void 0, e.prototype.localDoc = void 0, e.prototype.localDocName = void 0, Object.defineProperty(e.prototype, "doc", {
    get: function() {
      return this.localDoc;
    },
    set: function(s) {
      this.localDoc = s, this.pluginInstance && this.pluginInstance.$set({ xmlDocument: s });
    }
  }), Object.defineProperty(e.prototype, "docName", {
    get: function() {
      return this.localDocName;
    },
    set: function(s) {
      this.localDocName = s;
    }
  }), e.prototype.connectedCallback = function() {
    this.pluginInstance = new n({
      target: this.attachShadow({ mode: "open" }),
      props: {
        xmlDocument: this.localDoc,
        pluginHostElement: this
      }
    });
  }, e;
}
function cs(n) {
  function e() {
    return Reflect.construct(HTMLElement, [], new.target);
  }
  return e.prototype = Object.create(HTMLElement.prototype), e.prototype.pluginInstance = void 0, e.prototype.run = function() {
    return this.pluginInstance.run();
  }, e.prototype.connectedCallback = function() {
    this.pluginInstance = new n({
      target: this.attachShadow({ mode: "open" })
    });
  }, e;
}
function us(n) {
  function e() {
    return Reflect.construct(HTMLElement, [], this.constructor);
  }
  return e.prototype = Object.create(HTMLElement.prototype), e.prototype.pluginInstance = null, e.prototype.connectedCallback = function() {
    this.pluginInstance = new n({
      target: this.attachShadow({ mode: "open" })
    });
  }, e;
}
function fs(n, e) {
  customElements.define("stand-alone-plugin", n);
  const t = document.createElement("stand-alone-plugin");
  document.body.appendChild(t), e === "editor" && ds(
    t
  );
}
function ds(n) {
  document.addEventListener("open-doc", e), document.addEventListener("save-doc", t), document.addEventListener("editor-action", s);
  function e(r) {
    n.doc = r.detail.doc, n.docName = r.detail.docName;
  }
  function t() {
    if (!n.doc) return;
    const r = rs(n.doc), o = new Blob([r], { type: "application/xml" }), l = URL.createObjectURL(o), i = document.createElement("a");
    i.href = l, i.download = n.docName || "file.xml", document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(l);
  }
  function s(r) {
    const { action: o } = r.detail;
    o.new.parent.insertBefore(
      o.new.element,
      o.new.reference ?? null
    );
  }
}
function ms({
  pluginType: n,
  isStandAlone: e,
  pluginComponent: t
}) {
  const s = {
    editor: ls(t),
    menu: cs(t),
    validator: us(t)
    // TODO
  };
  return e ? fs(s[n], n) : s[n];
}
var Ct = function(n, e) {
  return Ct = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
    t.__proto__ = s;
  } || function(t, s) {
    for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
  }, Ct(n, e);
};
function qe(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ct(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ce = function() {
  return Ce = Object.assign || function(e) {
    for (var t, s = 1, r = arguments.length; s < r; s++) {
      t = arguments[s];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ce.apply(this, arguments);
};
function tt(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], s = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && s >= n.length && (n = void 0), { value: n && n[s++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var $t = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(n, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.init = function() {
    }, n.prototype.destroy = function() {
    }, n;
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
function ps(n) {
  return n === void 0 && (n = window), hs(n) ? { passive: !0 } : !1;
}
function hs(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, s = function() {
    };
    n.document.addEventListener("test", s, t), n.document.removeEventListener("test", s, t);
  } catch {
    e = !1;
  }
  return e;
}
const gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: ps
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
function bs(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (fn(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function fn(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function _s(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var s = t.scrollWidth;
  return document.documentElement.removeChild(t), s;
}
const ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: bs,
  estimateScrollWidth: _s,
  matches: fn
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
var vs = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, As = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ft = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, nt;
function Es(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, s = nt;
  if (typeof nt == "boolean" && !e)
    return nt;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var o = t.supports("--css-vars", "yes"), l = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return s = o || l, e || (nt = s), s;
}
function Ss(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var s = e.x, r = e.y, o = s + t.left, l = r + t.top, i, a;
  if (n.type === "touchstart") {
    var c = n;
    i = c.changedTouches[0].pageX - o, a = c.changedTouches[0].pageY - l;
  } else {
    var u = n;
    i = u.pageX - o, a = u.pageY - l;
  }
  return { x: i, y: a };
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
var Ut = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], jt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], st = [], Cs = (
  /** @class */
  function(n) {
    qe(e, n);
    function e(t) {
      var s = n.call(this, Ce(Ce({}, e.defaultAdapter), t)) || this;
      return s.activationAnimationHasEnded = !1, s.activationTimer = 0, s.fgDeactivationRemovalTimer = 0, s.fgScale = "0", s.frame = { width: 0, height: 0 }, s.initialSize = 0, s.layoutFrame = 0, s.maxRadius = 0, s.unboundedCoords = { left: 0, top: 0 }, s.activationState = s.defaultActivationState(), s.activationTimerCallback = function() {
        s.activationAnimationHasEnded = !0, s.runDeactivationUXLogicIfReady();
      }, s.activateHandler = function(r) {
        s.activateImpl(r);
      }, s.deactivateHandler = function() {
        s.deactivateImpl();
      }, s.focusHandler = function() {
        s.handleFocus();
      }, s.blurHandler = function() {
        s.handleBlur();
      }, s.resizeHandler = function() {
        s.layout();
      }, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return As;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ft;
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
      var t = this, s = this.supportsPressRipple();
      if (this.registerRootHandlers(s), s) {
        var r = e.cssClasses, o = r.ROOT, l = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(o), t.adapter.isUnbounded() && (t.adapter.addClass(l), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var s = e.cssClasses, r = s.ROOT, o = s.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(r), t.adapter.removeClass(o), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var s = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(s) : this.adapter.removeClass(s);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
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
    }, e.prototype.registerRootHandlers = function(t) {
      var s, r;
      if (t) {
        try {
          for (var o = tt(Ut), l = o.next(); !l.done; l = o.next()) {
            var i = l.value;
            this.adapter.registerInteractionHandler(i, this.activateHandler);
          }
        } catch (a) {
          s = { error: a };
        } finally {
          try {
            l && !l.done && (r = o.return) && r.call(o);
          } finally {
            if (s) throw s.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var s, r;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var o = tt(jt), l = o.next(); !l.done; l = o.next()) {
            var i = l.value;
            this.adapter.registerDocumentInteractionHandler(i, this.deactivateHandler);
          }
        } catch (a) {
          s = { error: a };
        } finally {
          try {
            l && !l.done && (r = o.return) && r.call(o);
          } finally {
            if (s) throw s.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, s;
      try {
        for (var r = tt(Ut), o = r.next(); !o.done; o = r.next()) {
          var l = o.value;
          this.adapter.deregisterInteractionHandler(l, this.activateHandler);
        }
      } catch (i) {
        t = { error: i };
      } finally {
        try {
          o && !o.done && (s = r.return) && s.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, s;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = tt(jt), o = r.next(); !o.done; o = r.next()) {
          var l = o.value;
          this.adapter.deregisterDocumentInteractionHandler(l, this.deactivateHandler);
        }
      } catch (i) {
        t = { error: i };
      } finally {
        try {
          o && !o.done && (s = r.return) && s.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, s = e.strings, r = Object.keys(s);
      r.forEach(function(o) {
        o.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(s[o], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var s = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var o = this.previousActivationEvent, l = o && t !== void 0 && o.type !== t.type;
          if (!l) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var i = t !== void 0 && st.length > 0 && st.some(function(a) {
              return s.adapter.containsEventTarget(a);
            });
            if (i) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (st.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              st = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = s.checkElementMadeActive(t), r.wasElementMadeActive && s.animateActivation()), r.wasElementMadeActive || (s.activationState = s.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, s = e.strings, r = s.VAR_FG_TRANSLATE_START, o = s.VAR_FG_TRANSLATE_END, l = e.cssClasses, i = l.FG_DEACTIVATION, a = l.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var u = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), m = d.startPoint, h = d.endPoint;
        u = m.x + "px, " + m.y + "px", f = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(r, u), this.adapter.updateCssVariable(o, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(i), this.adapter.computeBoundingRect(), this.adapter.addClass(a), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, s = t.activationEvent, r = t.wasActivatedByPointer, o;
      r ? o = Ss(s, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, o = {
        x: o.x - this.initialSize / 2,
        y: o.y - this.initialSize / 2
      };
      var l = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: o, endPoint: l };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, s = e.cssClasses.FG_DEACTIVATION, r = this.activationState, o = r.hasDeactivationUXRun, l = r.isActivated, i = o || !l;
      i && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(s), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(s);
      }, Ft.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, s = this.activationState;
      if (s.isActivated) {
        var r = Ce({}, s);
        s.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(r), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var s = t.wasActivatedByPointer, r = t.wasElementMadeActive;
      (s || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var s = Math.max(this.frame.height, this.frame.width), r = function() {
        var l = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return l + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? s : r();
      var o = Math.floor(s * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && o % 2 !== 0 ? this.initialSize = o - 1 : this.initialSize = o, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, s = t.VAR_FG_SIZE, r = t.VAR_LEFT, o = t.VAR_TOP, l = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(s, this.initialSize + "px"), this.adapter.updateCssVariable(l, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords.top + "px"));
    }, e;
  }($t)
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
var ke = {
  FIXED_CLASS: "mdc-top-app-bar--fixed",
  FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
  SHORT_CLASS: "mdc-top-app-bar--short",
  SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
  SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
}, ct = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
}, Ts = {
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
var Dt = (
  /** @class */
  function(n) {
    qe(e, n);
    function e(t) {
      return n.call(this, Ce(Ce({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ts;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ke;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ct;
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
  }($t)
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
var it = 0, Tt = (
  /** @class */
  function(n) {
    qe(e, n);
    function e(t) {
      var s = n.call(this, t) || this;
      return s.wasDocked = !0, s.isDockedShowing = !0, s.currentAppBarOffsetTop = 0, s.isCurrentlyBeingResized = !1, s.resizeThrottleId = it, s.resizeDebounceId = it, s.lastScrollPosition = s.adapter.getViewportScrollY(), s.topAppBarHeight = s.adapter.getTopAppBarHeight(), s;
    }
    return e.prototype.destroy = function() {
      n.prototype.destroy.call(this), this.adapter.setStyle("top", "");
    }, e.prototype.handleTargetScroll = function() {
      var t = Math.max(this.adapter.getViewportScrollY(), 0), s = t - this.lastScrollPosition;
      this.lastScrollPosition = t, this.isCurrentlyBeingResized || (this.currentAppBarOffsetTop -= s, this.currentAppBarOffsetTop > 0 ? this.currentAppBarOffsetTop = 0 : Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight && (this.currentAppBarOffsetTop = -this.topAppBarHeight), this.moveTopAppBar());
    }, e.prototype.handleWindowResize = function() {
      var t = this;
      this.resizeThrottleId || (this.resizeThrottleId = setTimeout(function() {
        t.resizeThrottleId = it, t.throttledResizeHandler();
      }, ct.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)), this.isCurrentlyBeingResized = !0, this.resizeDebounceId && clearTimeout(this.resizeDebounceId), this.resizeDebounceId = setTimeout(function() {
        t.handleTargetScroll(), t.isCurrentlyBeingResized = !1, t.resizeDebounceId = it;
      }, ct.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }, e.prototype.checkForUpdate = function() {
      var t = -this.topAppBarHeight, s = this.currentAppBarOffsetTop < 0, r = this.currentAppBarOffsetTop > t, o = s && r;
      if (o)
        this.wasDocked = !1;
      else if (this.wasDocked) {
        if (this.isDockedShowing !== r)
          return this.isDockedShowing = r, !0;
      } else return this.wasDocked = !0, !0;
      return o;
    }, e.prototype.moveTopAppBar = function() {
      if (this.checkForUpdate()) {
        var t = this.currentAppBarOffsetTop;
        Math.abs(t) >= this.topAppBarHeight && (t = -ct.MAX_TOP_APP_BAR_HEIGHT), this.adapter.setStyle("top", t + "px");
      }
    }, e.prototype.throttledResizeHandler = function() {
      var t = this.adapter.getTopAppBarHeight();
      this.topAppBarHeight !== t && (this.wasDocked = !1, this.currentAppBarOffsetTop -= this.topAppBarHeight - t, this.topAppBarHeight = t), this.handleTargetScroll();
    }, e;
  }(Dt)
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
var Ls = (
  /** @class */
  function(n) {
    qe(e, n);
    function e() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.wasScrolled = !1, t;
    }
    return e.prototype.handleTargetScroll = function() {
      var t = this.adapter.getViewportScrollY();
      t <= 0 ? this.wasScrolled && (this.adapter.removeClass(ke.FIXED_SCROLLED_CLASS), this.wasScrolled = !1) : this.wasScrolled || (this.adapter.addClass(ke.FIXED_SCROLLED_CLASS), this.wasScrolled = !0);
    }, e;
  }(Tt)
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
var ws = (
  /** @class */
  function(n) {
    qe(e, n);
    function e(t) {
      var s = n.call(this, t) || this;
      return s.collapsed = !1, s.isAlwaysCollapsed = !1, s;
    }
    return Object.defineProperty(e.prototype, "isCollapsed", {
      // Public visibility for backward compatibility.
      get: function() {
        return this.collapsed;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      n.prototype.init.call(this), this.adapter.getTotalActionItems() > 0 && this.adapter.addClass(ke.SHORT_HAS_ACTION_ITEM_CLASS), this.setAlwaysCollapsed(this.adapter.hasClass(ke.SHORT_COLLAPSED_CLASS));
    }, e.prototype.setAlwaysCollapsed = function(t) {
      this.isAlwaysCollapsed = !!t, this.isAlwaysCollapsed ? this.collapse() : this.maybeCollapseBar();
    }, e.prototype.getAlwaysCollapsed = function() {
      return this.isAlwaysCollapsed;
    }, e.prototype.handleTargetScroll = function() {
      this.maybeCollapseBar();
    }, e.prototype.maybeCollapseBar = function() {
      if (!this.isAlwaysCollapsed) {
        var t = this.adapter.getViewportScrollY();
        t <= 0 ? this.collapsed && this.uncollapse() : this.collapsed || this.collapse();
      }
    }, e.prototype.uncollapse = function() {
      this.adapter.removeClass(ke.SHORT_COLLAPSED_CLASS), this.collapsed = !1;
    }, e.prototype.collapse = function() {
      this.adapter.addClass(ke.SHORT_COLLAPSED_CLASS), this.collapsed = !0;
    }, e;
  }(Dt)
);
const Fe = [];
function Is(n, e) {
  return {
    subscribe: Xe(n, e).subscribe
  };
}
function Xe(n, e = X) {
  let t;
  const s = /* @__PURE__ */ new Set();
  function r(i) {
    if (G(n, i) && (n = i, t)) {
      const a = !Fe.length;
      for (const c of s)
        c[1](), Fe.push(c, n);
      if (a) {
        for (let c = 0; c < Fe.length; c += 2)
          Fe[c][0](Fe[c + 1]);
        Fe.length = 0;
      }
    }
  }
  function o(i) {
    r(i(n));
  }
  function l(i, a = X) {
    const c = [i, a];
    return s.add(c), s.size === 1 && (t = e(r, o) || X), i(n), () => {
      s.delete(c), s.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: o, subscribe: l };
}
function j(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function mt(n, e, t, s = { bubbles: !0 }, r = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const o = new CustomEvent(e, Object.assign(Object.assign({}, s), { detail: t }));
  if (n == null || n.dispatchEvent(o), r && e.startsWith("SMUI")) {
    const l = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, s), { detail: t }));
    n == null || n.dispatchEvent(l), l.defaultPrevented && o.preventDefault();
  }
  return o;
}
const zt = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Os = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function ye(n) {
  let e, t = [];
  n.$on = (r, o) => {
    let l = r, i = () => {
    };
    return e ? i = e(l, o) : t.push([l, o]), l.match(zt) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', l), () => {
      i();
    };
  };
  function s(r) {
    const o = n.$$.callbacks[r.type];
    o && o.slice().forEach((l) => l.call(this, r));
  }
  return (r) => {
    const o = [], l = {};
    e = (i, a) => {
      let c = i, u = a, f = !1;
      const d = c.match(zt), m = c.match(Os), h = d || m;
      if (c.match(/^SMUI:\w+:/)) {
        const S = c.split(":");
        let T = "";
        for (let B = 0; B < S.length; B++)
          T += B === S.length - 1 ? ":" + S[B] : S[B].split("-").map((I) => I.slice(0, 1).toUpperCase() + I.slice(1)).join("");
        console.warn(`The event ${c.split("$")[0]} has been renamed to ${T.split("$")[0]}.`), c = T;
      }
      if (h) {
        const S = c.split(d ? ":" : "$");
        c = S[0];
        const T = S.slice(1).reduce((B, I) => (B[I] = !0, B), {});
        T.passive && (f = f || {}, f.passive = !0), T.nonpassive && (f = f || {}, f.passive = !1), T.capture && (f = f || {}, f.capture = !0), T.once && (f = f || {}, f.once = !0), T.preventDefault && (u = Ps(u)), T.stopPropagation && (u = $s(u)), T.stopImmediatePropagation && (u = Ds(u)), T.self && (u = ks(r, u)), T.trusted && (u = Bs(u));
      }
      const C = Gt(r, c, u, f), w = () => {
        C();
        const S = o.indexOf(w);
        S > -1 && o.splice(S, 1);
      };
      return o.push(w), c in l || (l[c] = Gt(r, c, s)), w;
    };
    for (let i = 0; i < t.length; i++)
      e(t[i][0], t[i][1]);
    return {
      destroy: () => {
        for (let i = 0; i < o.length; i++)
          o[i]();
        for (let i of Object.entries(l))
          i[1]();
      }
    };
  };
}
function Gt(n, e, t, s) {
  return n.addEventListener(e, t, s), () => n.removeEventListener(e, t, s);
}
function Ps(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function $s(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Ds(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function ks(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function Bs(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Me(n, e) {
  let t = [];
  if (e)
    for (let s = 0; s < e.length; s++) {
      const r = e[s], o = Array.isArray(r) ? r[0] : r;
      Array.isArray(r) && r.length > 1 ? t.push(o(n, r[1])) : t.push(o(n));
    }
  return {
    update(s) {
      if ((s && s.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (s)
        for (let r = 0; r < s.length; r++) {
          const o = t[r];
          if (o && o.update) {
            const l = s[r];
            Array.isArray(l) && l.length > 1 ? o.update(l[1]) : o.update();
          }
        }
    },
    destroy() {
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        r && r.destroy && r.destroy();
      }
    }
  };
}
const { window: Vt } = Bn;
function Rs(n) {
  let e, t, s, r, o, l, i;
  const a = (
    /*#slots*/
    n[22].default
  ), c = se(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = j({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-top-app-bar": !0,
        "mdc-top-app-bar--short": (
          /*variant*/
          n[4] === "short"
        ),
        "mdc-top-app-bar--short-collapsed": (
          /*collapsed*/
          n[0]
        ),
        "mdc-top-app-bar--fixed": (
          /*variant*/
          n[4] === "fixed"
        ),
        "smui-top-app-bar--static": (
          /*variant*/
          n[4] === "static"
        ),
        "smui-top-app-bar--color-secondary": (
          /*color*/
          n[5] === "secondary"
        ),
        "mdc-top-app-bar--prominent": (
          /*prominent*/
          n[6]
        ),
        "mdc-top-app-bar--dense": (
          /*dense*/
          n[7]
        ),
        .../*internalClasses*/
        n[11]
      })
    },
    {
      style: s = Object.entries(
        /*internalStyles*/
        n[12]
      ).map(qt).concat([
        /*style*/
        n[3]
      ]).join(" ")
    },
    /*$$restProps*/
    n[15]
  ], f = {};
  for (let d = 0; d < u.length; d += 1)
    f = P(f, u[d]);
  return {
    c() {
      e = U("header"), c && c.c(), Be(e, f);
    },
    m(d, m) {
      v(d, e, m), c && c.m(e, null), n[25](e), o = !0, l || (i = [
        Ke(
          Vt,
          "resize",
          /*resize_handler*/
          n[23]
        ),
        Ke(
          Vt,
          "scroll",
          /*scroll_handler*/
          n[24]
        ),
        ne(r = Me.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        ne(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        Ke(
          e,
          "SMUITopAppBarIconButton:nav",
          /*SMUITopAppBarIconButton_nav_handler*/
          n[26]
        )
      ], l = !0);
    },
    p(d, m) {
      c && c.p && (!o || m[0] & /*$$scope*/
      2097152) && re(
        c,
        a,
        d,
        /*$$scope*/
        d[21],
        o ? ie(
          a,
          /*$$scope*/
          d[21],
          m,
          null
        ) : oe(
          /*$$scope*/
          d[21]
        ),
        null
      ), Be(e, f = W(u, [
        (!o || m[0] & /*className, variant, collapsed, color, prominent, dense, internalClasses*/
        2293 && t !== (t = j({
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
        }))) && { class: t },
        (!o || m[0] & /*internalStyles, style*/
        4104 && s !== (s = Object.entries(
          /*internalStyles*/
          d[12]
        ).map(qt).concat([
          /*style*/
          d[3]
        ]).join(" "))) && { style: s },
        m[0] & /*$$restProps*/
        32768 && /*$$restProps*/
        d[15]
      ])), r && ve(r.update) && m[0] & /*use*/
      2 && r.update.call(
        null,
        /*use*/
        d[1]
      );
    },
    i(d) {
      o || (_(c, d), o = !0);
    },
    o(d) {
      A(c, d), o = !1;
    },
    d(d) {
      d && y(e), c && c.d(d), n[25](null), l = !1, he(i);
    }
  };
}
const qt = ([n, e]) => `${n}: ${e};`;
function Ms(n, e, t) {
  const s = [
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
  let r = z(e, s), { $$slots: o = {}, $$scope: l } = e;
  const i = ye(Q());
  let a = () => {
  };
  function c(O) {
    return O === a;
  }
  let { use: u = [] } = e, { class: f = "" } = e, { style: d = "" } = e, { variant: m = "standard" } = e, { color: h = "primary" } = e, { collapsed: C = a } = e;
  const w = !c(C) && !!C;
  c(C) && (C = !1);
  let { prominent: S = !1 } = e, { dense: T = !1 } = e, { scrollTarget: B = void 0 } = e, I, L, $ = {}, k = {}, V, x = Is({ variant: m, prominent: S, dense: T }, (O) => {
    t(18, V = O);
  }), F, q = m;
  qn(() => (t(9, L = ae()), L.init(), () => {
    L.destroy();
  }));
  function ae() {
    const O = {
      static: Dt,
      short: ws,
      fixed: Ls,
      standard: Tt
    }[m] || Tt;
    return new O({
      hasClass: ge,
      addClass: Ae,
      removeClass: We,
      setStyle: Oe,
      getTopAppBarHeight: () => I.clientHeight,
      notifyNavigationIconClicked: () => mt(I, "SMUITopAppBar:nav", void 0, void 0, !0),
      getViewportScrollY: () => B == null ? window.pageYOffset : B.scrollTop,
      getTotalActionItems: () => I.querySelectorAll(".mdc-top-app-bar__action-item").length
    });
  }
  function ge(O) {
    return O in $ ? $[O] : E().classList.contains(O);
  }
  function Ae(O) {
    $[O] || t(11, $[O] = !0, $);
  }
  function We(O) {
    (!(O in $) || $[O]) && t(11, $[O] = !1, $);
  }
  function Oe(O, He) {
    k[O] != He && (He === "" || He == null ? (delete k[O], t(12, k), t(20, q), t(4, m), t(9, L)) : t(12, k[O] = He, k));
  }
  function be() {
    L && (L.handleTargetScroll(), m === "short" && t(0, C = "isCollapsed" in L && L.isCollapsed));
  }
  function Pe() {
    return x;
  }
  function E() {
    return I;
  }
  const Te = () => m !== "short" && m !== "fixed" && L && L.handleWindowResize(), xe = () => B == null && be();
  function et(O) {
    Y[O ? "unshift" : "push"](() => {
      I = O, t(10, I);
    });
  }
  const ht = () => L && L.handleNavigationClick();
  return n.$$set = (O) => {
    e = P(P({}, e), fe(O)), t(15, r = z(e, s)), "use" in O && t(1, u = O.use), "class" in O && t(2, f = O.class), "style" in O && t(3, d = O.style), "variant" in O && t(4, m = O.variant), "color" in O && t(5, h = O.color), "collapsed" in O && t(0, C = O.collapsed), "prominent" in O && t(6, S = O.prominent), "dense" in O && t(7, T = O.dense), "scrollTarget" in O && t(8, B = O.scrollTarget), "$$scope" in O && t(21, l = O.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*propStoreSet, variant, prominent, dense*/
    262352 && V && V({ variant: m, prominent: S, dense: T }), n.$$.dirty[0] & /*oldVariant, variant, instance*/
    1049104 && q !== m && L && (t(20, q = m), L.destroy(), t(11, $ = {}), t(12, k = {}), t(9, L = ae()), L.init()), n.$$.dirty[0] & /*instance, variant*/
    528 && L && m === "short" && "setAlwaysCollapsed" in L && L.setAlwaysCollapsed(w), n.$$.dirty[0] & /*oldScrollTarget, scrollTarget*/
    524544 && F !== B && (F && F.removeEventListener("scroll", be), B && B.addEventListener("scroll", be), t(19, F = B));
  }, [
    C,
    u,
    f,
    d,
    m,
    h,
    S,
    T,
    B,
    L,
    I,
    $,
    k,
    i,
    be,
    r,
    Pe,
    E,
    V,
    F,
    q,
    l,
    o,
    Te,
    xe,
    et,
    ht
  ];
}
class dn extends K {
  constructor(e) {
    super(), Z(
      this,
      e,
      Ms,
      Rs,
      G,
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
    this.$$set({ use: e }), g();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), g();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(e) {
    this.$$set({ style: e }), g();
  }
  get variant() {
    return this.$$.ctx[4];
  }
  set variant(e) {
    this.$$set({ variant: e }), g();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(e) {
    this.$$set({ color: e }), g();
  }
  get collapsed() {
    return this.$$.ctx[0];
  }
  set collapsed(e) {
    this.$$set({ collapsed: e }), g();
  }
  get prominent() {
    return this.$$.ctx[6];
  }
  set prominent(e) {
    this.$$set({ prominent: e }), g();
  }
  get dense() {
    return this.$$.ctx[7];
  }
  set dense(e) {
    this.$$set({ dense: e }), g();
  }
  get scrollTarget() {
    return this.$$.ctx[8];
  }
  set scrollTarget(e) {
    this.$$set({ scrollTarget: e }), g();
  }
  get getPropStore() {
    return this.$$.ctx[16];
  }
  get getElement() {
    return this.$$.ctx[17];
  }
}
J(dn, { use: {}, class: {}, style: {}, variant: {}, color: {}, collapsed: {}, prominent: { type: "Boolean" }, dense: { type: "Boolean" }, scrollTarget: {} }, ["default"], ["getPropStore", "getElement"], !0);
function Hs(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].default
  ), s = se(
    t,
    n,
    /*$$scope*/
    n[12],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(r, o) {
      s && s.m(r, o), e = !0;
    },
    p(r, o) {
      s && s.p && (!e || o & /*$$scope*/
      4096) && re(
        s,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? ie(
          t,
          /*$$scope*/
          r[12],
          o,
          null
        ) : oe(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (_(s, r), e = !0);
    },
    o(r) {
      A(s, r), e = !1;
    },
    d(r) {
      s && s.d(r);
    }
  };
}
function Ns(n) {
  let e, t, s;
  const r = [
    { tag: (
      /*tag*/
      n[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[5],
        .../*use*/
        n[0]
      ]
    },
    {
      class: j({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-button__label": (
          /*context*/
          n[6] === "button"
        ),
        "mdc-fab__label": (
          /*context*/
          n[6] === "fab"
        ),
        "mdc-tab__text-label": (
          /*context*/
          n[6] === "tab"
        ),
        "mdc-image-list__label": (
          /*context*/
          n[6] === "image-list"
        ),
        "mdc-snackbar__label": (
          /*context*/
          n[6] === "snackbar"
        ),
        "mdc-banner__text": (
          /*context*/
          n[6] === "banner"
        ),
        "mdc-segmented-button__label": (
          /*context*/
          n[6] === "segmented-button"
        ),
        "mdc-data-table__pagination-rows-per-page-label": (
          /*context*/
          n[6] === "data-table:pagination"
        ),
        "mdc-data-table__header-cell-label": (
          /*context*/
          n[6] === "data-table:sortable-header-cell"
        )
      })
    },
    /*context*/
    n[6] === "snackbar" ? { "aria-atomic": "false" } : {},
    { tabindex: (
      /*tabindex*/
      n[7]
    ) },
    /*$$restProps*/
    n[8]
  ];
  var o = (
    /*component*/
    n[2]
  );
  function l(i, a) {
    let c = {
      $$slots: { default: [Hs] },
      $$scope: { ctx: i }
    };
    for (let u = 0; u < r.length; u += 1)
      c = P(c, r[u]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (c = P(c, W(r, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        i[3]
      ) },
      a & /*forwardEvents, use*/
      33 && {
        use: [
          /*forwardEvents*/
          i[5],
          .../*use*/
          i[0]
        ]
      },
      a & /*className, context*/
      66 && {
        class: j({
          [
            /*className*/
            i[1]
          ]: !0,
          "mdc-button__label": (
            /*context*/
            i[6] === "button"
          ),
          "mdc-fab__label": (
            /*context*/
            i[6] === "fab"
          ),
          "mdc-tab__text-label": (
            /*context*/
            i[6] === "tab"
          ),
          "mdc-image-list__label": (
            /*context*/
            i[6] === "image-list"
          ),
          "mdc-snackbar__label": (
            /*context*/
            i[6] === "snackbar"
          ),
          "mdc-banner__text": (
            /*context*/
            i[6] === "banner"
          ),
          "mdc-segmented-button__label": (
            /*context*/
            i[6] === "segmented-button"
          ),
          "mdc-data-table__pagination-rows-per-page-label": (
            /*context*/
            i[6] === "data-table:pagination"
          ),
          "mdc-data-table__header-cell-label": (
            /*context*/
            i[6] === "data-table:sortable-header-cell"
          )
        })
      },
      a & /*context*/
      64 && R(
        /*context*/
        i[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      a & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        i[7]
      ) },
      a & /*$$restProps*/
      256 && R(
        /*$$restProps*/
        i[8]
      )
    ]))), { props: c };
  }
  return o && (e = de(o, l(n)), n[11](e)), {
    c() {
      e && N(e.$$.fragment), t = ce();
    },
    m(i, a) {
      e && M(e, i, a), v(i, t, a), s = !0;
    },
    p(i, [a]) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      i[2])) {
        if (e) {
          me();
          const c = e;
          A(c.$$.fragment, 1, 0, () => {
            H(c, 1);
          }), pe();
        }
        o ? (e = de(o, l(i, a)), i[11](e), N(e.$$.fragment), _(e.$$.fragment, 1), M(e, t.parentNode, t)) : e = null;
      } else if (o) {
        const c = a & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? W(r, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            i[3]
          ) },
          a & /*forwardEvents, use*/
          33 && {
            use: [
              /*forwardEvents*/
              i[5],
              .../*use*/
              i[0]
            ]
          },
          a & /*className, context*/
          66 && {
            class: j({
              [
                /*className*/
                i[1]
              ]: !0,
              "mdc-button__label": (
                /*context*/
                i[6] === "button"
              ),
              "mdc-fab__label": (
                /*context*/
                i[6] === "fab"
              ),
              "mdc-tab__text-label": (
                /*context*/
                i[6] === "tab"
              ),
              "mdc-image-list__label": (
                /*context*/
                i[6] === "image-list"
              ),
              "mdc-snackbar__label": (
                /*context*/
                i[6] === "snackbar"
              ),
              "mdc-banner__text": (
                /*context*/
                i[6] === "banner"
              ),
              "mdc-segmented-button__label": (
                /*context*/
                i[6] === "segmented-button"
              ),
              "mdc-data-table__pagination-rows-per-page-label": (
                /*context*/
                i[6] === "data-table:pagination"
              ),
              "mdc-data-table__header-cell-label": (
                /*context*/
                i[6] === "data-table:sortable-header-cell"
              )
            })
          },
          a & /*context*/
          64 && R(
            /*context*/
            i[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          a & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            i[7]
          ) },
          a & /*$$restProps*/
          256 && R(
            /*$$restProps*/
            i[8]
          )
        ]) : {};
        a & /*$$scope*/
        4096 && (c.$$scope = { dirty: a, ctx: i }), e.$set(c);
      }
    },
    i(i) {
      s || (e && _(e.$$.fragment, i), s = !0);
    },
    o(i) {
      e && A(e.$$.fragment, i), s = !1;
    },
    d(i) {
      i && y(t), n[11](null), e && H(e, i);
    }
  };
}
function Fs(n, e, t) {
  const s = ["use", "class", "component", "tag", "getElement"];
  let r = z(e, s), { $$slots: o = {}, $$scope: l } = e;
  const i = ye(Q());
  let { use: a = [] } = e, { class: c = "" } = e, u, { component: f = le } = e, { tag: d = f === le ? "span" : void 0 } = e;
  const m = Ie("SMUI:label:context"), h = Ie("SMUI:label:tabindex");
  function C() {
    return u.getElement();
  }
  function w(S) {
    Y[S ? "unshift" : "push"](() => {
      u = S, t(4, u);
    });
  }
  return n.$$set = (S) => {
    e = P(P({}, e), fe(S)), t(8, r = z(e, s)), "use" in S && t(0, a = S.use), "class" in S && t(1, c = S.class), "component" in S && t(2, f = S.component), "tag" in S && t(3, d = S.tag), "$$scope" in S && t(12, l = S.$$scope);
  }, [
    a,
    c,
    f,
    d,
    u,
    i,
    m,
    h,
    r,
    C,
    o,
    w,
    l
  ];
}
class Us extends K {
  constructor(e) {
    super(), Z(this, e, Fs, Ns, G, {
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
    this.$$set({ use: e }), g();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), g();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), g();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), g();
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
J(Us, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function js(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), s = se(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(r, o) {
      s && s.m(r, o), e = !0;
    },
    p(r, o) {
      s && s.p && (!e || o & /*$$scope*/
      8192) && re(
        s,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? ie(
          t,
          /*$$scope*/
          r[13],
          o,
          null
        ) : oe(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (_(s, r), e = !0);
    },
    o(r) {
      A(s, r), e = !1;
    },
    d(r) {
      s && s.d(r);
    }
  };
}
function zs(n) {
  let e, t, s;
  const r = [
    { tag: (
      /*tag*/
      n[4]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[6],
        .../*use*/
        n[0]
      ]
    },
    {
      class: j({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-button__icon": (
          /*context*/
          n[8] === "button"
        ),
        "mdc-fab__icon": (
          /*context*/
          n[8] === "fab"
        ),
        "mdc-icon-button__icon": (
          /*context*/
          n[8] === "icon-button"
        ),
        "mdc-icon-button__icon--on": (
          /*context*/
          n[8] === "icon-button" && /*on*/
          n[2]
        ),
        "mdc-tab__icon": (
          /*context*/
          n[8] === "tab"
        ),
        "mdc-banner__icon": (
          /*context*/
          n[8] === "banner"
        ),
        "mdc-segmented-button__icon": (
          /*context*/
          n[8] === "segmented-button"
        )
      })
    },
    { "aria-hidden": "true" },
    /*svg*/
    n[7] ? { focusable: "false", tabindex: "-1" } : {},
    /*$$restProps*/
    n[9]
  ];
  var o = (
    /*component*/
    n[3]
  );
  function l(i, a) {
    let c = {
      $$slots: { default: [js] },
      $$scope: { ctx: i }
    };
    for (let u = 0; u < r.length; u += 1)
      c = P(c, r[u]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983 && (c = P(c, W(r, [
      a & /*tag*/
      16 && { tag: (
        /*tag*/
        i[4]
      ) },
      a & /*forwardEvents, use*/
      65 && {
        use: [
          /*forwardEvents*/
          i[6],
          .../*use*/
          i[0]
        ]
      },
      a & /*className, context, on*/
      262 && {
        class: j({
          [
            /*className*/
            i[1]
          ]: !0,
          "mdc-button__icon": (
            /*context*/
            i[8] === "button"
          ),
          "mdc-fab__icon": (
            /*context*/
            i[8] === "fab"
          ),
          "mdc-icon-button__icon": (
            /*context*/
            i[8] === "icon-button"
          ),
          "mdc-icon-button__icon--on": (
            /*context*/
            i[8] === "icon-button" && /*on*/
            i[2]
          ),
          "mdc-tab__icon": (
            /*context*/
            i[8] === "tab"
          ),
          "mdc-banner__icon": (
            /*context*/
            i[8] === "banner"
          ),
          "mdc-segmented-button__icon": (
            /*context*/
            i[8] === "segmented-button"
          )
        })
      },
      r[3],
      a & /*svg*/
      128 && R(
        /*svg*/
        i[7] ? { focusable: "false", tabindex: "-1" } : {}
      ),
      a & /*$$restProps*/
      512 && R(
        /*$$restProps*/
        i[9]
      )
    ]))), { props: c };
  }
  return o && (e = de(o, l(n)), n[12](e)), {
    c() {
      e && N(e.$$.fragment), t = ce();
    },
    m(i, a) {
      e && M(e, i, a), v(i, t, a), s = !0;
    },
    p(i, [a]) {
      if (a & /*component*/
      8 && o !== (o = /*component*/
      i[3])) {
        if (e) {
          me();
          const c = e;
          A(c.$$.fragment, 1, 0, () => {
            H(c, 1);
          }), pe();
        }
        o ? (e = de(o, l(i, a)), i[12](e), N(e.$$.fragment), _(e.$$.fragment, 1), M(e, t.parentNode, t)) : e = null;
      } else if (o) {
        const c = a & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
        983 ? W(r, [
          a & /*tag*/
          16 && { tag: (
            /*tag*/
            i[4]
          ) },
          a & /*forwardEvents, use*/
          65 && {
            use: [
              /*forwardEvents*/
              i[6],
              .../*use*/
              i[0]
            ]
          },
          a & /*className, context, on*/
          262 && {
            class: j({
              [
                /*className*/
                i[1]
              ]: !0,
              "mdc-button__icon": (
                /*context*/
                i[8] === "button"
              ),
              "mdc-fab__icon": (
                /*context*/
                i[8] === "fab"
              ),
              "mdc-icon-button__icon": (
                /*context*/
                i[8] === "icon-button"
              ),
              "mdc-icon-button__icon--on": (
                /*context*/
                i[8] === "icon-button" && /*on*/
                i[2]
              ),
              "mdc-tab__icon": (
                /*context*/
                i[8] === "tab"
              ),
              "mdc-banner__icon": (
                /*context*/
                i[8] === "banner"
              ),
              "mdc-segmented-button__icon": (
                /*context*/
                i[8] === "segmented-button"
              )
            })
          },
          r[3],
          a & /*svg*/
          128 && R(
            /*svg*/
            i[7] ? { focusable: "false", tabindex: "-1" } : {}
          ),
          a & /*$$restProps*/
          512 && R(
            /*$$restProps*/
            i[9]
          )
        ]) : {};
        a & /*$$scope*/
        8192 && (c.$$scope = { dirty: a, ctx: i }), e.$set(c);
      }
    },
    i(i) {
      s || (e && _(e.$$.fragment, i), s = !0);
    },
    o(i) {
      e && A(e.$$.fragment, i), s = !1;
    },
    d(i) {
      i && y(t), n[12](null), e && H(e, i);
    }
  };
}
function Gs(n, e, t) {
  const s = ["use", "class", "on", "component", "tag", "getElement"];
  let r = z(e, s), { $$slots: o = {}, $$scope: l } = e;
  const i = ye(Q());
  let { use: a = [] } = e, { class: c = "" } = e, { on: u = !1 } = e, f, { component: d = le } = e, { tag: m = d === le ? "i" : void 0 } = e;
  const h = d === mn, C = Ie("SMUI:icon:context");
  function w() {
    return f.getElement();
  }
  function S(T) {
    Y[T ? "unshift" : "push"](() => {
      f = T, t(5, f);
    });
  }
  return n.$$set = (T) => {
    e = P(P({}, e), fe(T)), t(9, r = z(e, s)), "use" in T && t(0, a = T.use), "class" in T && t(1, c = T.class), "on" in T && t(2, u = T.on), "component" in T && t(3, d = T.component), "tag" in T && t(4, m = T.tag), "$$scope" in T && t(13, l = T.$$scope);
  }, [
    a,
    c,
    u,
    d,
    m,
    f,
    i,
    h,
    C,
    r,
    w,
    o,
    S,
    l
  ];
}
class Vs extends K {
  constructor(e) {
    super(), Z(this, e, Gs, zs, G, {
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
    this.$$set({ use: e }), g();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), g();
  }
  get on() {
    return this.$$.ctx[2];
  }
  set on(e) {
    this.$$set({ on: e }), g();
  }
  get component() {
    return this.$$.ctx[3];
  }
  set component(e) {
    this.$$set({ component: e }), g();
  }
  get tag() {
    return this.$$.ctx[4];
  }
  set tag(e) {
    this.$$set({ tag: e }), g();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
J(Vs, { use: {}, class: {}, on: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function qs(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, s, r = (
    /*tag*/
    n[1] && bt(n)
  );
  return {
    c() {
      r && r.c(), t = ce();
    },
    m(o, l) {
      r && r.m(o, l), v(o, t, l), s = !0;
    },
    p(o, l) {
      /*tag*/
      o[1] ? e ? G(
        e,
        /*tag*/
        o[1]
      ) ? (r.d(1), r = bt(o), e = /*tag*/
      o[1], r.c(), r.m(t.parentNode, t)) : r.p(o, l) : (r = bt(o), e = /*tag*/
      o[1], r.c(), r.m(t.parentNode, t)) : e && (r.d(1), r = null, e = /*tag*/
      o[1]);
    },
    i(o) {
      s || (_(r, o), s = !0);
    },
    o(o) {
      A(r, o), s = !1;
    },
    d(o) {
      o && y(t), r && r.d(o);
    }
  };
}
function Xs(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, s = (
    /*tag*/
    n[1] && _t(n)
  );
  return {
    c() {
      s && s.c(), t = ce();
    },
    m(r, o) {
      s && s.m(r, o), v(r, t, o);
    },
    p(r, o) {
      /*tag*/
      r[1] ? e ? G(
        e,
        /*tag*/
        r[1]
      ) ? (s.d(1), s = _t(r), e = /*tag*/
      r[1], s.c(), s.m(t.parentNode, t)) : s.p(r, o) : (s = _t(r), e = /*tag*/
      r[1], s.c(), s.m(t.parentNode, t)) : e && (s.d(1), s = null, e = /*tag*/
      r[1]);
    },
    i: X,
    o: X,
    d(r) {
      r && y(t), s && s.d(r);
    }
  };
}
function Ws(n) {
  let e, t, s, r, o;
  const l = (
    /*#slots*/
    n[8].default
  ), i = se(
    l,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let a = [
    /*$$restProps*/
    n[5]
  ], c = {};
  for (let u = 0; u < a.length; u += 1)
    c = P(c, a[u]);
  return {
    c() {
      e = Je("svg"), i && i.c(), ut(e, c);
    },
    m(u, f) {
      v(u, e, f), i && i.m(e, null), n[9](e), s = !0, r || (o = [
        ne(t = Me.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ne(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(u, f) {
      i && i.p && (!s || f & /*$$scope*/
      128) && re(
        i,
        l,
        u,
        /*$$scope*/
        u[7],
        s ? ie(
          l,
          /*$$scope*/
          u[7],
          f,
          null
        ) : oe(
          /*$$scope*/
          u[7]
        ),
        null
      ), ut(e, c = W(a, [f & /*$$restProps*/
      32 && /*$$restProps*/
      u[5]])), t && ve(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i(u) {
      s || (_(i, u), s = !0);
    },
    o(u) {
      A(i, u), s = !1;
    },
    d(u) {
      u && y(e), i && i.d(u), n[9](null), r = !1, he(o);
    }
  };
}
function bt(n) {
  let e, t, s, r, o;
  const l = (
    /*#slots*/
    n[8].default
  ), i = se(
    l,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let a = [
    /*$$restProps*/
    n[5]
  ], c = {};
  for (let u = 0; u < a.length; u += 1)
    c = P(c, a[u]);
  return {
    c() {
      e = U(
        /*tag*/
        n[1]
      ), i && i.c(), ft(
        /*tag*/
        n[1]
      )(e, c);
    },
    m(u, f) {
      v(u, e, f), i && i.m(e, null), n[11](e), s = !0, r || (o = [
        ne(t = Me.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ne(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(u, f) {
      i && i.p && (!s || f & /*$$scope*/
      128) && re(
        i,
        l,
        u,
        /*$$scope*/
        u[7],
        s ? ie(
          l,
          /*$$scope*/
          u[7],
          f,
          null
        ) : oe(
          /*$$scope*/
          u[7]
        ),
        null
      ), ft(
        /*tag*/
        u[1]
      )(e, c = W(a, [f & /*$$restProps*/
      32 && /*$$restProps*/
      u[5]])), t && ve(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i(u) {
      s || (_(i, u), s = !0);
    },
    o(u) {
      A(i, u), s = !1;
    },
    d(u) {
      u && y(e), i && i.d(u), n[11](null), r = !1, he(o);
    }
  };
}
function _t(n) {
  let e, t, s, r, o = [
    /*$$restProps*/
    n[5]
  ], l = {};
  for (let i = 0; i < o.length; i += 1)
    l = P(l, o[i]);
  return {
    c() {
      e = U(
        /*tag*/
        n[1]
      ), ft(
        /*tag*/
        n[1]
      )(e, l);
    },
    m(i, a) {
      v(i, e, a), n[10](e), s || (r = [
        ne(t = Me.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ne(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], s = !0);
    },
    p(i, a) {
      ft(
        /*tag*/
        i[1]
      )(e, l = W(o, [a & /*$$restProps*/
      32 && /*$$restProps*/
      i[5]])), t && ve(t.update) && a & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        i[0]
      );
    },
    d(i) {
      i && y(e), n[10](null), s = !1, he(r);
    }
  };
}
function Zs(n) {
  let e, t, s, r;
  const o = [Ws, Xs, qs], l = [];
  function i(a, c) {
    return (
      /*tag*/
      a[1] === "svg" ? 0 : (
        /*selfClosing*/
        a[3] ? 1 : 2
      )
    );
  }
  return e = i(n), t = l[e] = o[e](n), {
    c() {
      t.c(), s = ce();
    },
    m(a, c) {
      l[e].m(a, c), v(a, s, c), r = !0;
    },
    p(a, [c]) {
      let u = e;
      e = i(a), e === u ? l[e].p(a, c) : (me(), A(l[u], 1, 1, () => {
        l[u] = null;
      }), pe(), t = l[e], t ? t.p(a, c) : (t = l[e] = o[e](a), t.c()), _(t, 1), t.m(s.parentNode, s));
    },
    i(a) {
      r || (_(t), r = !0);
    },
    o(a) {
      A(t), r = !1;
    },
    d(a) {
      a && y(s), l[e].d(a);
    }
  };
}
function Js(n, e, t) {
  let s;
  const r = ["use", "tag", "getElement"];
  let o = z(e, r), { $$slots: l = {}, $$scope: i } = e, { use: a = [] } = e, { tag: c } = e;
  const u = ye(Q());
  let f;
  function d() {
    return f;
  }
  function m(w) {
    Y[w ? "unshift" : "push"](() => {
      f = w, t(2, f);
    });
  }
  function h(w) {
    Y[w ? "unshift" : "push"](() => {
      f = w, t(2, f);
    });
  }
  function C(w) {
    Y[w ? "unshift" : "push"](() => {
      f = w, t(2, f);
    });
  }
  return n.$$set = (w) => {
    e = P(P({}, e), fe(w)), t(5, o = z(e, r)), "use" in w && t(0, a = w.use), "tag" in w && t(1, c = w.tag), "$$scope" in w && t(7, i = w.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*tag*/
    2 && t(3, s = [
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
    ].indexOf(c) > -1);
  }, [
    a,
    c,
    f,
    s,
    u,
    o,
    d,
    i,
    l,
    m,
    h,
    C
  ];
}
class le extends K {
  constructor(e) {
    super(), Z(this, e, Js, Zs, G, { use: 0, tag: 1, getElement: 6 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), g();
  }
  get tag() {
    return this.$$.ctx[1];
  }
  set tag(e) {
    this.$$set({ tag: e }), g();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
J(le, { use: {}, tag: {} }, ["default"], ["getElement"], !0);
function Ks(n) {
  let e, t, s, r, o;
  const l = (
    /*#slots*/
    n[6].default
  ), i = se(
    l,
    n,
    /*$$scope*/
    n[5],
    null
  );
  let a = [
    /*$$restProps*/
    n[3]
  ], c = {};
  for (let u = 0; u < a.length; u += 1)
    c = P(c, a[u]);
  return {
    c() {
      e = Je("svg"), i && i.c(), ut(e, c);
    },
    m(u, f) {
      v(u, e, f), i && i.m(e, null), n[7](e), s = !0, r || (o = [
        ne(t = Me.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ne(
          /*forwardEvents*/
          n[2].call(null, e)
        )
      ], r = !0);
    },
    p(u, [f]) {
      i && i.p && (!s || f & /*$$scope*/
      32) && re(
        i,
        l,
        u,
        /*$$scope*/
        u[5],
        s ? ie(
          l,
          /*$$scope*/
          u[5],
          f,
          null
        ) : oe(
          /*$$scope*/
          u[5]
        ),
        null
      ), ut(e, c = W(a, [f & /*$$restProps*/
      8 && /*$$restProps*/
      u[3]])), t && ve(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i(u) {
      s || (_(i, u), s = !0);
    },
    o(u) {
      A(i, u), s = !1;
    },
    d(u) {
      u && y(e), i && i.d(u), n[7](null), r = !1, he(o);
    }
  };
}
function Ys(n, e, t) {
  const s = ["use", "getElement"];
  let r = z(e, s), { $$slots: o = {}, $$scope: l } = e;
  console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let { use: i = [] } = e;
  const a = ye(Q());
  let c;
  function u() {
    return c;
  }
  function f(d) {
    Y[d ? "unshift" : "push"](() => {
      c = d, t(1, c);
    });
  }
  return n.$$set = (d) => {
    e = P(P({}, e), fe(d)), t(3, r = z(e, s)), "use" in d && t(0, i = d.use), "$$scope" in d && t(5, l = d.$$scope);
  }, [
    i,
    c,
    a,
    r,
    u,
    l,
    o,
    f
  ];
}
class mn extends K {
  constructor(e) {
    super(), Z(this, e, Ys, Ks, G, { use: 0, getElement: 4 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), g();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
J(mn, { use: {} }, ["default"], ["getElement"], !0);
function Qs(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), s = se(
    t,
    n,
    /*$$scope*/
    n[3],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(r, o) {
      s && s.m(r, o), e = !0;
    },
    p(r, [o]) {
      s && s.p && (!e || o & /*$$scope*/
      8) && re(
        s,
        t,
        r,
        /*$$scope*/
        r[3],
        e ? ie(
          t,
          /*$$scope*/
          r[3],
          o,
          null
        ) : oe(
          /*$$scope*/
          r[3]
        ),
        null
      );
    },
    i(r) {
      e || (_(s, r), e = !0);
    },
    o(r) {
      A(s, r), e = !1;
    },
    d(r) {
      s && s.d(r);
    }
  };
}
function xs(n, e, t) {
  let s, { $$slots: r = {}, $$scope: o } = e, { key: l } = e, { value: i } = e;
  const a = Xe(i);
  return rn(n, a, (c) => t(5, s = c)), Re(l, a), Ot(() => {
    a.set(void 0);
  }), n.$$set = (c) => {
    "key" in c && t(1, l = c.key), "value" in c && t(2, i = c.value), "$$scope" in c && t(3, o = c.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && kn(a, s = i, s);
  }, [a, l, i, o, r];
}
class ei extends K {
  constructor(e) {
    super(), Z(this, e, xs, Qs, G, { key: 1, value: 2 });
  }
  get key() {
    return this.$$.ctx[1];
  }
  set key(e) {
    this.$$set({ key: e }), g();
  }
  get value() {
    return this.$$.ctx[2];
  }
  set value(e) {
    this.$$set({ value: e }), g();
  }
}
J(ei, { key: {}, value: {} }, ["default"], [], !0);
function ti(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), s = se(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(r, o) {
      s && s.m(r, o), e = !0;
    },
    p(r, o) {
      s && s.p && (!e || o & /*$$scope*/
      8192) && re(
        s,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? ie(
          t,
          /*$$scope*/
          r[13],
          o,
          null
        ) : oe(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (_(s, r), e = !0);
    },
    o(r) {
      A(s, r), e = !1;
    },
    d(r) {
      s && s.d(r);
    }
  };
}
function ni(n) {
  let e, t, s;
  const r = [
    { tag: (
      /*tag*/
      n[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[8],
        .../*use*/
        n[0]
      ]
    },
    {
      class: j({
        [
          /*className*/
          n[1]
        ]: !0,
        [
          /*smuiClass*/
          n[6]
        ]: !0,
        .../*smuiClassMap*/
        n[5]
      })
    },
    /*props*/
    n[7],
    /*$$restProps*/
    n[9]
  ];
  var o = (
    /*component*/
    n[2]
  );
  function l(i, a) {
    let c = {
      $$slots: { default: [ti] },
      $$scope: { ctx: i }
    };
    for (let u = 0; u < r.length; u += 1)
      c = P(c, r[u]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (c = P(c, W(r, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        i[3]
      ) },
      a & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          i[8],
          .../*use*/
          i[0]
        ]
      },
      a & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: j({
          [
            /*className*/
            i[1]
          ]: !0,
          [
            /*smuiClass*/
            i[6]
          ]: !0,
          .../*smuiClassMap*/
          i[5]
        })
      },
      a & /*props*/
      128 && R(
        /*props*/
        i[7]
      ),
      a & /*$$restProps*/
      512 && R(
        /*$$restProps*/
        i[9]
      )
    ]))), { props: c };
  }
  return o && (e = de(o, l(n)), n[12](e)), {
    c() {
      e && N(e.$$.fragment), t = ce();
    },
    m(i, a) {
      e && M(e, i, a), v(i, t, a), s = !0;
    },
    p(i, [a]) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      i[2])) {
        if (e) {
          me();
          const c = e;
          A(c.$$.fragment, 1, 0, () => {
            H(c, 1);
          }), pe();
        }
        o ? (e = de(o, l(i, a)), i[12](e), N(e.$$.fragment), _(e.$$.fragment, 1), M(e, t.parentNode, t)) : e = null;
      } else if (o) {
        const c = a & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? W(r, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            i[3]
          ) },
          a & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              i[8],
              .../*use*/
              i[0]
            ]
          },
          a & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: j({
              [
                /*className*/
                i[1]
              ]: !0,
              [
                /*smuiClass*/
                i[6]
              ]: !0,
              .../*smuiClassMap*/
              i[5]
            })
          },
          a & /*props*/
          128 && R(
            /*props*/
            i[7]
          ),
          a & /*$$restProps*/
          512 && R(
            /*$$restProps*/
            i[9]
          )
        ]) : {};
        a & /*$$scope*/
        8192 && (c.$$scope = { dirty: a, ctx: i }), e.$set(c);
      }
    },
    i(i) {
      s || (e && _(e.$$.fragment, i), s = !0);
    },
    o(i) {
      e && A(e.$$.fragment, i), s = !1;
    },
    d(i) {
      i && y(t), n[12](null), e && H(e, i);
    }
  };
}
const Se = {
  component: le,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function si(n, e, t) {
  const s = ["use", "class", "component", "tag", "getElement"];
  let r = z(e, s), { $$slots: o = {}, $$scope: l } = e, { use: i = [] } = e, { class: a = "" } = e, c;
  const u = Se.class, f = {}, d = [], m = Se.contexts, h = Se.props;
  let { component: C = Se.component } = e, { tag: w = C === le ? Se.tag : void 0 } = e;
  Object.entries(Se.classMap).forEach(([I, L]) => {
    const $ = Ie(L);
    $ && "subscribe" in $ && d.push($.subscribe((k) => {
      t(5, f[I] = k, f);
    }));
  });
  const S = ye(Q());
  for (let I in m)
    m.hasOwnProperty(I) && Re(I, m[I]);
  Ot(() => {
    for (const I of d)
      I();
  });
  function T() {
    return c.getElement();
  }
  function B(I) {
    Y[I ? "unshift" : "push"](() => {
      c = I, t(4, c);
    });
  }
  return n.$$set = (I) => {
    e = P(P({}, e), fe(I)), t(9, r = z(e, s)), "use" in I && t(0, i = I.use), "class" in I && t(1, a = I.class), "component" in I && t(2, C = I.component), "tag" in I && t(3, w = I.tag), "$$scope" in I && t(13, l = I.$$scope);
  }, [
    i,
    a,
    C,
    w,
    c,
    f,
    u,
    h,
    S,
    r,
    T,
    o,
    B,
    l
  ];
}
class pn extends K {
  constructor(e) {
    super(), Z(this, e, si, ni, G, {
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
    this.$$set({ use: e }), g();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), g();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), g();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), g();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
J(pn, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
const Xt = Object.assign({}, Se);
function hn(n) {
  return new Proxy(pn, {
    construct: function(e, t) {
      return Object.assign(Se, Xt, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(Se, Xt, n), e[t];
    }
  });
}
const ii = hn({
  class: "mdc-top-app-bar__row",
  tag: "div"
});
function ri(n) {
  let e, t, s, r, o, l;
  const i = (
    /*#slots*/
    n[9].default
  ), a = se(
    i,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let c = [
    {
      class: t = j({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-top-app-bar__section": !0,
        "mdc-top-app-bar__section--align-start": (
          /*align*/
          n[2] === "start"
        ),
        "mdc-top-app-bar__section--align-end": (
          /*align*/
          n[2] === "end"
        )
      })
    },
    /*toolbar*/
    n[3] ? { role: "toolbar" } : {},
    /*$$restProps*/
    n[6]
  ], u = {};
  for (let f = 0; f < c.length; f += 1)
    u = P(u, c[f]);
  return {
    c() {
      e = U("section"), a && a.c(), Be(e, u);
    },
    m(f, d) {
      v(f, e, d), a && a.m(e, null), n[10](e), r = !0, o || (l = [
        ne(s = Me.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ne(
          /*forwardEvents*/
          n[5].call(null, e)
        )
      ], o = !0);
    },
    p(f, [d]) {
      a && a.p && (!r || d & /*$$scope*/
      256) && re(
        a,
        i,
        f,
        /*$$scope*/
        f[8],
        r ? ie(
          i,
          /*$$scope*/
          f[8],
          d,
          null
        ) : oe(
          /*$$scope*/
          f[8]
        ),
        null
      ), Be(e, u = W(c, [
        (!r || d & /*className, align*/
        6 && t !== (t = j({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-top-app-bar__section": !0,
          "mdc-top-app-bar__section--align-start": (
            /*align*/
            f[2] === "start"
          ),
          "mdc-top-app-bar__section--align-end": (
            /*align*/
            f[2] === "end"
          )
        }))) && { class: t },
        d & /*toolbar*/
        8 && /*toolbar*/
        (f[3] ? { role: "toolbar" } : {}),
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), s && ve(s.update) && d & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (_(a, f), r = !0);
    },
    o(f) {
      A(a, f), r = !1;
    },
    d(f) {
      f && y(e), a && a.d(f), n[10](null), o = !1, he(l);
    }
  };
}
function oi(n, e, t) {
  const s = ["use", "class", "align", "toolbar", "getElement"];
  let r = z(e, s), { $$slots: o = {}, $$scope: l } = e;
  const i = ye(Q());
  let { use: a = [] } = e, { class: c = "" } = e, { align: u = "start" } = e, { toolbar: f = !1 } = e, d;
  Re("SMUI:icon-button:context", f ? "top-app-bar:action" : "top-app-bar:navigation"), Re("SMUI:button:context", f ? "top-app-bar:action" : "top-app-bar:navigation");
  function m() {
    return d;
  }
  function h(C) {
    Y[C ? "unshift" : "push"](() => {
      d = C, t(4, d);
    });
  }
  return n.$$set = (C) => {
    e = P(P({}, e), fe(C)), t(6, r = z(e, s)), "use" in C && t(0, a = C.use), "class" in C && t(1, c = C.class), "align" in C && t(2, u = C.align), "toolbar" in C && t(3, f = C.toolbar), "$$scope" in C && t(8, l = C.$$scope);
  }, [
    a,
    c,
    u,
    f,
    d,
    i,
    r,
    m,
    l,
    o,
    h
  ];
}
class Lt extends K {
  constructor(e) {
    super(), Z(this, e, oi, ri, G, {
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
    this.$$set({ use: e }), g();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), g();
  }
  get align() {
    return this.$$.ctx[2];
  }
  set align(e) {
    this.$$set({ align: e }), g();
  }
  get toolbar() {
    return this.$$.ctx[3];
  }
  set toolbar(e) {
    this.$$set({ toolbar: e }), g();
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
J(Lt, { use: {}, class: {}, align: {}, toolbar: { type: "Boolean" } }, ["default"], ["getElement"], !0);
const ai = hn({
  class: "mdc-top-app-bar__title",
  tag: "span"
});
function li(n) {
  let e;
  const t = (
    /*#slots*/
    n[12].default
  ), s = se(
    t,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(r, o) {
      s && s.m(r, o), e = !0;
    },
    p(r, o) {
      s && s.p && (!e || o & /*$$scope*/
      16384) && re(
        s,
        t,
        r,
        /*$$scope*/
        r[14],
        e ? ie(
          t,
          /*$$scope*/
          r[14],
          o,
          null
        ) : oe(
          /*$$scope*/
          r[14]
        ),
        null
      );
    },
    i(r) {
      e || (_(s, r), e = !0);
    },
    o(r) {
      A(s, r), e = !1;
    },
    d(r) {
      s && s.d(r);
    }
  };
}
function ci(n) {
  let e, t, s;
  const r = [
    { tag: (
      /*tag*/
      n[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[7],
        .../*use*/
        n[0]
      ]
    },
    {
      class: j({
        [
          /*className*/
          n[1]
        ]: !0,
        [
          /*adjustClass*/
          n[6]
        ]: !0
      })
    },
    /*$$restProps*/
    n[8]
  ];
  var o = (
    /*component*/
    n[2]
  );
  function l(i, a) {
    let c = {
      $$slots: { default: [li] },
      $$scope: { ctx: i }
    };
    for (let u = 0; u < r.length; u += 1)
      c = P(c, r[u]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, adjustClass, $$restProps*/
    459 && (c = P(c, W(r, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        i[3]
      ) },
      a & /*forwardEvents, use*/
      129 && {
        use: [
          /*forwardEvents*/
          i[7],
          .../*use*/
          i[0]
        ]
      },
      a & /*className, adjustClass*/
      66 && {
        class: j({
          [
            /*className*/
            i[1]
          ]: !0,
          [
            /*adjustClass*/
            i[6]
          ]: !0
        })
      },
      a & /*$$restProps*/
      256 && R(
        /*$$restProps*/
        i[8]
      )
    ]))), { props: c };
  }
  return o && (e = de(o, l(n)), n[13](e)), {
    c() {
      e && N(e.$$.fragment), t = ce();
    },
    m(i, a) {
      e && M(e, i, a), v(i, t, a), s = !0;
    },
    p(i, [a]) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      i[2])) {
        if (e) {
          me();
          const c = e;
          A(c.$$.fragment, 1, 0, () => {
            H(c, 1);
          }), pe();
        }
        o ? (e = de(o, l(i, a)), i[13](e), N(e.$$.fragment), _(e.$$.fragment, 1), M(e, t.parentNode, t)) : e = null;
      } else if (o) {
        const c = a & /*tag, forwardEvents, use, className, adjustClass, $$restProps*/
        459 ? W(r, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            i[3]
          ) },
          a & /*forwardEvents, use*/
          129 && {
            use: [
              /*forwardEvents*/
              i[7],
              .../*use*/
              i[0]
            ]
          },
          a & /*className, adjustClass*/
          66 && {
            class: j({
              [
                /*className*/
                i[1]
              ]: !0,
              [
                /*adjustClass*/
                i[6]
              ]: !0
            })
          },
          a & /*$$restProps*/
          256 && R(
            /*$$restProps*/
            i[8]
          )
        ]) : {};
        a & /*$$scope*/
        16384 && (c.$$scope = { dirty: a, ctx: i }), e.$set(c);
      }
    },
    i(i) {
      s || (e && _(e.$$.fragment, i), s = !0);
    },
    o(i) {
      e && A(e.$$.fragment, i), s = !1;
    },
    d(i) {
      i && y(t), n[13](null), e && H(e, i);
    }
  };
}
function ui(n, e, t) {
  let s, r;
  const o = ["use", "class", "topAppBar", "component", "tag", "getElement"];
  let l = z(e, o), i, a = X, c = () => (a(), a = It(s, (L) => t(11, i = L)), s);
  n.$$.on_destroy.push(() => a());
  let { $$slots: u = {}, $$scope: f } = e;
  const d = ye(Q());
  let { use: m = [] } = e, { class: h = "" } = e, { topAppBar: C } = e, w, { component: S = le } = e, { tag: T = S === le ? "main" : void 0 } = e;
  function B() {
    return w.getElement();
  }
  function I(L) {
    Y[L ? "unshift" : "push"](() => {
      w = L, t(5, w);
    });
  }
  return n.$$set = (L) => {
    e = P(P({}, e), fe(L)), t(8, l = z(e, o)), "use" in L && t(0, m = L.use), "class" in L && t(1, h = L.class), "topAppBar" in L && t(9, C = L.topAppBar), "component" in L && t(2, S = L.component), "tag" in L && t(3, T = L.tag), "$$scope" in L && t(14, f = L.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*topAppBar*/
    512 && c(t(4, s = C && C.getPropStore())), n.$$.dirty & /*propStore, $propStore*/
    2064 && t(6, r = !s || i.variant === "static" ? "" : i.variant === "short" ? "mdc-top-app-bar--short-fixed-adjust" : i.prominent && i.dense ? "mdc-top-app-bar--dense-prominent-fixed-adjust" : i.prominent ? "mdc-top-app-bar--prominent-fixed-adjust" : i.dense ? "mdc-top-app-bar--dense-fixed-adjust" : "mdc-top-app-bar--fixed-adjust");
  }, [
    m,
    h,
    S,
    T,
    s,
    w,
    r,
    d,
    l,
    C,
    B,
    i,
    u,
    I,
    f
  ];
}
class fi extends K {
  constructor(e) {
    super(), Z(this, e, ui, ci, G, {
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
    this.$$set({ use: e }), g();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), g();
  }
  get topAppBar() {
    return this.$$.ctx[9];
  }
  set topAppBar(e) {
    this.$$set({ topAppBar: e }), g();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), g();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), g();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
J(fi, { use: {}, class: {}, topAppBar: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
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
var rt = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Ee = {
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
var di = (
  /** @class */
  function(n) {
    qe(e, n);
    function e(t) {
      var s = n.call(this, Ce(Ce({}, e.defaultAdapter), t)) || this;
      return s.hasToggledAriaLabel = !1, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ee;
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
      var t = this.adapter.getAttr(Ee.DATA_ARIA_LABEL_ON), s = this.adapter.getAttr(Ee.DATA_ARIA_LABEL_OFF);
      if (t && s) {
        if (this.adapter.getAttr(Ee.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Ee.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(rt.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(t) {
      if (t === void 0 && (t = !this.isOn()), t ? this.adapter.addClass(rt.ICON_BUTTON_ON) : this.adapter.removeClass(rt.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var s = t ? this.adapter.getAttr(Ee.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Ee.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Ee.ARIA_LABEL, s || "");
      } else
        this.adapter.setAttr(Ee.ARIA_PRESSED, "" + t);
    }, e;
  }($t)
);
const { applyPassive: ot } = gs, { matches: mi } = ys;
function Ge(n, { ripple: e = !0, surface: t = !1, unbounded: s = !1, disabled: r = !1, color: o, active: l, rippleElement: i, eventTarget: a, activeTarget: c, addClass: u = (h) => n.classList.add(h), removeClass: f = (h) => n.classList.remove(h), addStyle: d = (h, C) => n.style.setProperty(h, C), initPromise: m = Promise.resolve() } = {}) {
  let h, C = Ie("SMUI:addLayoutListener"), w, S = l, T = a, B = c;
  function I() {
    t ? (u("mdc-ripple-surface"), o === "primary" ? (u("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : o === "secondary" ? (f("smui-ripple-surface--primary"), u("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), h && S !== l && (S = l, l ? h.activate() : l === !1 && h.deactivate()), e && !h ? (h = new Cs({
      addClass: u,
      browserSupportsCssVars: () => Es(window),
      computeBoundingRect: () => (i || n).getBoundingClientRect(),
      containsEventTarget: ($) => n.contains($),
      deregisterDocumentInteractionHandler: ($, k) => document.documentElement.removeEventListener($, k, ot()),
      deregisterInteractionHandler: ($, k) => (a || n).removeEventListener($, k, ot()),
      deregisterResizeHandler: ($) => window.removeEventListener("resize", $),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => l ?? mi(c || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!s,
      registerDocumentInteractionHandler: ($, k) => document.documentElement.addEventListener($, k, ot()),
      registerInteractionHandler: ($, k) => (a || n).addEventListener($, k, ot()),
      registerResizeHandler: ($) => window.addEventListener("resize", $),
      removeClass: f,
      updateCssVariable: d
    }), m.then(() => {
      h && (h.init(), h.setUnbounded(s));
    })) : h && !e && m.then(() => {
      h && (h.destroy(), h = void 0);
    }), h && (T !== a || B !== c) && (T = a, B = c, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(s));
    })), !e && s && u("mdc-ripple-upgraded--unbounded");
  }
  I(), C && (w = C(L));
  function L() {
    h && h.layout();
  }
  return {
    update($) {
      ({
        ripple: e,
        surface: t,
        unbounded: s,
        disabled: r,
        color: o,
        active: l,
        rippleElement: i,
        eventTarget: a,
        activeTarget: c,
        addClass: u,
        removeClass: f,
        addStyle: d,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (k) => n.classList.add(k), removeClass: (k) => n.classList.remove(k), addStyle: (k, V) => n.style.setProperty(k, V), initPromise: Promise.resolve() }, $)), I();
    },
    destroy() {
      h && (h.destroy(), h = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), w && w();
    }
  };
}
function Wt(n) {
  let e;
  return {
    c() {
      e = U("div"), D(e, "class", "mdc-icon-button__touch");
    },
    m(t, s) {
      v(t, e, s);
    },
    d(t) {
      t && y(e);
    }
  };
}
function pi(n) {
  let e, t, s, r;
  const o = (
    /*#slots*/
    n[33].default
  ), l = se(
    o,
    n,
    /*$$scope*/
    n[37],
    null
  );
  let i = (
    /*touch*/
    n[8] && Wt()
  );
  return {
    c() {
      e = U("div"), t = te(), l && l.c(), i && i.c(), s = ce(), D(e, "class", "mdc-icon-button__ripple");
    },
    m(a, c) {
      v(a, e, c), v(a, t, c), l && l.m(a, c), i && i.m(a, c), v(a, s, c), r = !0;
    },
    p(a, c) {
      l && l.p && (!r || c[1] & /*$$scope*/
      64) && re(
        l,
        o,
        a,
        /*$$scope*/
        a[37],
        r ? ie(
          o,
          /*$$scope*/
          a[37],
          c,
          null
        ) : oe(
          /*$$scope*/
          a[37]
        ),
        null
      ), /*touch*/
      a[8] ? i || (i = Wt(), i.c(), i.m(s.parentNode, s)) : i && (i.d(1), i = null);
    },
    i(a) {
      r || (_(l, a), r = !0);
    },
    o(a) {
      A(l, a), r = !1;
    },
    d(a) {
      a && (y(e), y(t), y(s)), l && l.d(a), i && i.d(a);
    }
  };
}
function hi(n) {
  let e, t, s;
  const r = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        [
          Ge,
          {
            ripple: (
              /*ripple*/
              n[4]
            ),
            unbounded: !0,
            color: (
              /*color*/
              n[5]
            ),
            disabled: !!/*$$restProps*/
            n[29].disabled,
            addClass: (
              /*addClass*/
              n[26]
            ),
            removeClass: (
              /*removeClass*/
              n[27]
            ),
            addStyle: (
              /*addStyle*/
              n[28]
            )
          }
        ],
        /*forwardEvents*/
        n[22],
        .../*use*/
        n[1]
      ]
    },
    {
      class: j({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-icon-button": !0,
        "mdc-icon-button--on": !/*isUninitializedValue*/
        n[23](
          /*pressed*/
          n[0]
        ) && /*pressed*/
        n[0],
        "mdc-icon-button--touch": (
          /*touch*/
          n[8]
        ),
        "mdc-icon-button--display-flex": (
          /*displayFlex*/
          n[9]
        ),
        "smui-icon-button--size-button": (
          /*size*/
          n[10] === "button"
        ),
        "smui-icon-button--size-mini": (
          /*size*/
          n[10] === "mini"
        ),
        "mdc-icon-button--reduced-size": (
          /*size*/
          n[10] === "mini" || /*size*/
          n[10] === "button"
        ),
        "mdc-card__action": (
          /*context*/
          n[24] === "card:action"
        ),
        "mdc-card__action--icon": (
          /*context*/
          n[24] === "card:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          n[24] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          n[24] === "top-app-bar:action"
        ),
        "mdc-snackbar__dismiss": (
          /*context*/
          n[24] === "snackbar:actions"
        ),
        "mdc-data-table__pagination-button": (
          /*context*/
          n[24] === "data-table:pagination"
        ),
        "mdc-data-table__sort-icon-button": (
          /*context*/
          n[24] === "data-table:sortable-header-cell"
        ),
        "mdc-dialog__close": (
          /*context*/
          (n[24] === "dialog:header" || /*context*/
          n[24] === "dialog:sheet") && /*action*/
          n[12] === "close"
        ),
        .../*internalClasses*/
        n[18]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[19]
      ).map(yt).concat([
        /*style*/
        n[3]
      ]).join(" ")
    },
    {
      "aria-pressed": /*isUninitializedValue*/ n[23](
        /*pressed*/
        n[0]
      ) ? null : (
        /*pressed*/
        n[0] ? "true" : "false"
      )
    },
    {
      "aria-label": (
        /*pressed*/
        n[0] ? (
          /*ariaLabelOn*/
          n[6]
        ) : (
          /*ariaLabelOff*/
          n[7]
        )
      )
    },
    {
      "data-aria-label-on": (
        /*ariaLabelOn*/
        n[6]
      )
    },
    {
      "data-aria-label-off": (
        /*ariaLabelOff*/
        n[7]
      )
    },
    {
      "aria-describedby": (
        /*ariaDescribedby*/
        n[25]
      )
    },
    { href: (
      /*href*/
      n[11]
    ) },
    /*actionProp*/
    n[21],
    /*internalAttrs*/
    n[20],
    /*$$restProps*/
    n[29]
  ];
  var o = (
    /*component*/
    n[13]
  );
  function l(i, a) {
    let c = {
      $$slots: { default: [pi] },
      $$scope: { ctx: i }
    };
    for (let u = 0; u < r.length; u += 1)
      c = P(c, r[u]);
    return a !== void 0 && a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (c = P(c, W(r, [
      a[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        i[14]
      ) },
      a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            Ge,
            {
              ripple: (
                /*ripple*/
                i[4]
              ),
              unbounded: !0,
              color: (
                /*color*/
                i[5]
              ),
              disabled: !!/*$$restProps*/
              i[29].disabled,
              addClass: (
                /*addClass*/
                i[26]
              ),
              removeClass: (
                /*removeClass*/
                i[27]
              ),
              addStyle: (
                /*addStyle*/
                i[28]
              )
            }
          ],
          /*forwardEvents*/
          i[22],
          .../*use*/
          i[1]
        ]
      },
      a[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
      25433861 && {
        class: j({
          [
            /*className*/
            i[2]
          ]: !0,
          "mdc-icon-button": !0,
          "mdc-icon-button--on": !/*isUninitializedValue*/
          i[23](
            /*pressed*/
            i[0]
          ) && /*pressed*/
          i[0],
          "mdc-icon-button--touch": (
            /*touch*/
            i[8]
          ),
          "mdc-icon-button--display-flex": (
            /*displayFlex*/
            i[9]
          ),
          "smui-icon-button--size-button": (
            /*size*/
            i[10] === "button"
          ),
          "smui-icon-button--size-mini": (
            /*size*/
            i[10] === "mini"
          ),
          "mdc-icon-button--reduced-size": (
            /*size*/
            i[10] === "mini" || /*size*/
            i[10] === "button"
          ),
          "mdc-card__action": (
            /*context*/
            i[24] === "card:action"
          ),
          "mdc-card__action--icon": (
            /*context*/
            i[24] === "card:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            i[24] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            i[24] === "top-app-bar:action"
          ),
          "mdc-snackbar__dismiss": (
            /*context*/
            i[24] === "snackbar:actions"
          ),
          "mdc-data-table__pagination-button": (
            /*context*/
            i[24] === "data-table:pagination"
          ),
          "mdc-data-table__sort-icon-button": (
            /*context*/
            i[24] === "data-table:sortable-header-cell"
          ),
          "mdc-dialog__close": (
            /*context*/
            (i[24] === "dialog:header" || /*context*/
            i[24] === "dialog:sheet") && /*action*/
            i[12] === "close"
          ),
          .../*internalClasses*/
          i[18]
        })
      },
      a[0] & /*internalStyles, style*/
      524296 && {
        style: Object.entries(
          /*internalStyles*/
          i[19]
        ).map(yt).concat([
          /*style*/
          i[3]
        ]).join(" ")
      },
      a[0] & /*isUninitializedValue, pressed*/
      8388609 && {
        "aria-pressed": /*isUninitializedValue*/ i[23](
          /*pressed*/
          i[0]
        ) ? null : (
          /*pressed*/
          i[0] ? "true" : "false"
        )
      },
      a[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
      193 && {
        "aria-label": (
          /*pressed*/
          i[0] ? (
            /*ariaLabelOn*/
            i[6]
          ) : (
            /*ariaLabelOff*/
            i[7]
          )
        )
      },
      a[0] & /*ariaLabelOn*/
      64 && {
        "data-aria-label-on": (
          /*ariaLabelOn*/
          i[6]
        )
      },
      a[0] & /*ariaLabelOff*/
      128 && {
        "data-aria-label-off": (
          /*ariaLabelOff*/
          i[7]
        )
      },
      a[0] & /*ariaDescribedby*/
      33554432 && {
        "aria-describedby": (
          /*ariaDescribedby*/
          i[25]
        )
      },
      a[0] & /*href*/
      2048 && { href: (
        /*href*/
        i[11]
      ) },
      a[0] & /*actionProp*/
      2097152 && R(
        /*actionProp*/
        i[21]
      ),
      a[0] & /*internalAttrs*/
      1048576 && R(
        /*internalAttrs*/
        i[20]
      ),
      a[0] & /*$$restProps*/
      536870912 && R(
        /*$$restProps*/
        i[29]
      )
    ]))), { props: c };
  }
  return o && (e = de(o, l(n)), n[34](e), e.$on(
    "click",
    /*click_handler*/
    n[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    n[36]
  )), {
    c() {
      e && N(e.$$.fragment), t = ce();
    },
    m(i, a) {
      e && M(e, i, a), v(i, t, a), s = !0;
    },
    p(i, a) {
      if (a[0] & /*component*/
      8192 && o !== (o = /*component*/
      i[13])) {
        if (e) {
          me();
          const c = e;
          A(c.$$.fragment, 1, 0, () => {
            H(c, 1);
          }), pe();
        }
        o ? (e = de(o, l(i, a)), i[34](e), e.$on(
          "click",
          /*click_handler*/
          i[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          i[36]
        ), N(e.$$.fragment), _(e.$$.fragment, 1), M(e, t.parentNode, t)) : e = null;
      } else if (o) {
        const c = a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? W(r, [
          a[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            i[14]
          ) },
          a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                Ge,
                {
                  ripple: (
                    /*ripple*/
                    i[4]
                  ),
                  unbounded: !0,
                  color: (
                    /*color*/
                    i[5]
                  ),
                  disabled: !!/*$$restProps*/
                  i[29].disabled,
                  addClass: (
                    /*addClass*/
                    i[26]
                  ),
                  removeClass: (
                    /*removeClass*/
                    i[27]
                  ),
                  addStyle: (
                    /*addStyle*/
                    i[28]
                  )
                }
              ],
              /*forwardEvents*/
              i[22],
              .../*use*/
              i[1]
            ]
          },
          a[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
          25433861 && {
            class: j({
              [
                /*className*/
                i[2]
              ]: !0,
              "mdc-icon-button": !0,
              "mdc-icon-button--on": !/*isUninitializedValue*/
              i[23](
                /*pressed*/
                i[0]
              ) && /*pressed*/
              i[0],
              "mdc-icon-button--touch": (
                /*touch*/
                i[8]
              ),
              "mdc-icon-button--display-flex": (
                /*displayFlex*/
                i[9]
              ),
              "smui-icon-button--size-button": (
                /*size*/
                i[10] === "button"
              ),
              "smui-icon-button--size-mini": (
                /*size*/
                i[10] === "mini"
              ),
              "mdc-icon-button--reduced-size": (
                /*size*/
                i[10] === "mini" || /*size*/
                i[10] === "button"
              ),
              "mdc-card__action": (
                /*context*/
                i[24] === "card:action"
              ),
              "mdc-card__action--icon": (
                /*context*/
                i[24] === "card:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                i[24] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                i[24] === "top-app-bar:action"
              ),
              "mdc-snackbar__dismiss": (
                /*context*/
                i[24] === "snackbar:actions"
              ),
              "mdc-data-table__pagination-button": (
                /*context*/
                i[24] === "data-table:pagination"
              ),
              "mdc-data-table__sort-icon-button": (
                /*context*/
                i[24] === "data-table:sortable-header-cell"
              ),
              "mdc-dialog__close": (
                /*context*/
                (i[24] === "dialog:header" || /*context*/
                i[24] === "dialog:sheet") && /*action*/
                i[12] === "close"
              ),
              .../*internalClasses*/
              i[18]
            })
          },
          a[0] & /*internalStyles, style*/
          524296 && {
            style: Object.entries(
              /*internalStyles*/
              i[19]
            ).map(yt).concat([
              /*style*/
              i[3]
            ]).join(" ")
          },
          a[0] & /*isUninitializedValue, pressed*/
          8388609 && {
            "aria-pressed": /*isUninitializedValue*/ i[23](
              /*pressed*/
              i[0]
            ) ? null : (
              /*pressed*/
              i[0] ? "true" : "false"
            )
          },
          a[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
          193 && {
            "aria-label": (
              /*pressed*/
              i[0] ? (
                /*ariaLabelOn*/
                i[6]
              ) : (
                /*ariaLabelOff*/
                i[7]
              )
            )
          },
          a[0] & /*ariaLabelOn*/
          64 && {
            "data-aria-label-on": (
              /*ariaLabelOn*/
              i[6]
            )
          },
          a[0] & /*ariaLabelOff*/
          128 && {
            "data-aria-label-off": (
              /*ariaLabelOff*/
              i[7]
            )
          },
          a[0] & /*ariaDescribedby*/
          33554432 && {
            "aria-describedby": (
              /*ariaDescribedby*/
              i[25]
            )
          },
          a[0] & /*href*/
          2048 && { href: (
            /*href*/
            i[11]
          ) },
          a[0] & /*actionProp*/
          2097152 && R(
            /*actionProp*/
            i[21]
          ),
          a[0] & /*internalAttrs*/
          1048576 && R(
            /*internalAttrs*/
            i[20]
          ),
          a[0] & /*$$restProps*/
          536870912 && R(
            /*$$restProps*/
            i[29]
          )
        ]) : {};
        a[0] & /*touch*/
        256 | a[1] & /*$$scope*/
        64 && (c.$$scope = { dirty: a, ctx: i }), e.$set(c);
      }
    },
    i(i) {
      s || (e && _(e.$$.fragment, i), s = !0);
    },
    o(i) {
      e && A(e.$$.fragment, i), s = !1;
    },
    d(i) {
      i && y(t), n[34](null), e && H(e, i);
    }
  };
}
const yt = ([n, e]) => `${n}: ${e};`;
function gi(n, e, t) {
  let s;
  const r = [
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
  let o = z(e, r), { $$slots: l = {}, $$scope: i } = e;
  const a = ye(Q());
  let c = () => {
  };
  function u(b) {
    return b === c;
  }
  let { use: f = [] } = e, { class: d = "" } = e, { style: m = "" } = e, { ripple: h = !0 } = e, { color: C = void 0 } = e, { toggle: w = !1 } = e, { pressed: S = c } = e, { ariaLabelOn: T = void 0 } = e, { ariaLabelOff: B = void 0 } = e, { touch: I = !1 } = e, { displayFlex: L = !0 } = e, { size: $ = "normal" } = e, { href: k = void 0 } = e, { action: V = void 0 } = e, x, F, q = {}, ae = {}, ge = {}, Ae = Ie("SMUI:icon-button:context"), We = Ie("SMUI:icon-button:aria-describedby"), { component: Oe = le } = e, { tag: be = Oe === le ? k == null ? "button" : "a" : void 0 } = e, Pe = o.disabled;
  Re("SMUI:icon:context", "icon-button");
  let E = null;
  Ot(() => {
    F && F.destroy();
  });
  function Te(b) {
    return b in q ? q[b] : $e().classList.contains(b);
  }
  function xe(b) {
    q[b] || t(18, q[b] = !0, q);
  }
  function et(b) {
    (!(b in q) || q[b]) && t(18, q[b] = !1, q);
  }
  function ht(b, _e) {
    ae[b] != _e && (_e === "" || _e == null ? (delete ae[b], t(19, ae)) : t(19, ae[b] = _e, ae));
  }
  function O(b) {
    var _e;
    return b in ge ? (_e = ge[b]) !== null && _e !== void 0 ? _e : null : $e().getAttribute(b);
  }
  function He(b, _e) {
    ge[b] !== _e && t(20, ge[b] = _e, ge);
  }
  function Ln(b) {
    t(0, S = b.isOn);
  }
  function $e() {
    return x.getElement();
  }
  function wn(b) {
    Y[b ? "unshift" : "push"](() => {
      x = b, t(16, x);
    });
  }
  const In = () => F && F.handleClick(), On = () => Ae === "top-app-bar:navigation" && mt($e(), "SMUITopAppBarIconButton:nav");
  return n.$$set = (b) => {
    e = P(P({}, e), fe(b)), t(29, o = z(e, r)), "use" in b && t(1, f = b.use), "class" in b && t(2, d = b.class), "style" in b && t(3, m = b.style), "ripple" in b && t(4, h = b.ripple), "color" in b && t(5, C = b.color), "toggle" in b && t(30, w = b.toggle), "pressed" in b && t(0, S = b.pressed), "ariaLabelOn" in b && t(6, T = b.ariaLabelOn), "ariaLabelOff" in b && t(7, B = b.ariaLabelOff), "touch" in b && t(8, I = b.touch), "displayFlex" in b && t(9, L = b.displayFlex), "size" in b && t(10, $ = b.size), "href" in b && t(11, k = b.href), "action" in b && t(12, V = b.action), "component" in b && t(13, Oe = b.component), "tag" in b && t(14, be = b.tag), "$$scope" in b && t(37, i = b.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*action*/
    4096 && t(21, s = (() => {
      if (Ae === "data-table:pagination")
        switch (V) {
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
      else return Ae === "dialog:header" || Ae === "dialog:sheet" ? { "data-mdc-dialog-action": V } : { action: V };
    })()), Pe !== o.disabled) {
      if (x) {
        const b = $e();
        "blur" in b && b.blur();
      }
      t(31, Pe = o.disabled);
    }
    n.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | n.$$.dirty[1] & /*oldToggle*/
    2 && x && $e() && w !== E && (w && !F ? (t(17, F = new di({
      addClass: xe,
      hasClass: Te,
      notifyChange: (b) => {
        Ln(b), mt($e(), "SMUIIconButtonToggle:change", b, void 0, !0);
      },
      removeClass: et,
      getAttr: O,
      setAttr: He
    })), F.init()) : !w && F && (F.destroy(), t(17, F = void 0), t(18, q = {}), t(20, ge = {})), t(32, E = w)), n.$$.dirty[0] & /*instance, pressed*/
    131073 && F && !u(S) && F.isOn() !== S && F.toggle(S);
  }, [
    S,
    f,
    d,
    m,
    h,
    C,
    T,
    B,
    I,
    L,
    $,
    k,
    V,
    Oe,
    be,
    $e,
    x,
    F,
    q,
    ae,
    ge,
    s,
    a,
    u,
    Ae,
    We,
    xe,
    et,
    ht,
    o,
    w,
    Pe,
    E,
    l,
    wn,
    In,
    On,
    i
  ];
}
class wt extends K {
  constructor(e) {
    super(), Z(
      this,
      e,
      gi,
      hi,
      G,
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
    this.$$set({ use: e }), g();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), g();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(e) {
    this.$$set({ style: e }), g();
  }
  get ripple() {
    return this.$$.ctx[4];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), g();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(e) {
    this.$$set({ color: e }), g();
  }
  get toggle() {
    return this.$$.ctx[30];
  }
  set toggle(e) {
    this.$$set({ toggle: e }), g();
  }
  get pressed() {
    return this.$$.ctx[0];
  }
  set pressed(e) {
    this.$$set({ pressed: e }), g();
  }
  get ariaLabelOn() {
    return this.$$.ctx[6];
  }
  set ariaLabelOn(e) {
    this.$$set({ ariaLabelOn: e }), g();
  }
  get ariaLabelOff() {
    return this.$$.ctx[7];
  }
  set ariaLabelOff(e) {
    this.$$set({ ariaLabelOff: e }), g();
  }
  get touch() {
    return this.$$.ctx[8];
  }
  set touch(e) {
    this.$$set({ touch: e }), g();
  }
  get displayFlex() {
    return this.$$.ctx[9];
  }
  set displayFlex(e) {
    this.$$set({ displayFlex: e }), g();
  }
  get size() {
    return this.$$.ctx[10];
  }
  set size(e) {
    this.$$set({ size: e }), g();
  }
  get href() {
    return this.$$.ctx[11];
  }
  set href(e) {
    this.$$set({ href: e }), g();
  }
  get action() {
    return this.$$.ctx[12];
  }
  set action(e) {
    this.$$set({ action: e }), g();
  }
  get component() {
    return this.$$.ctx[13];
  }
  set component(e) {
    this.$$set({ component: e }), g();
  }
  get tag() {
    return this.$$.ctx[14];
  }
  set tag(e) {
    this.$$set({ tag: e }), g();
  }
  get getElement() {
    return this.$$.ctx[15];
  }
}
J(wt, { use: {}, class: {}, style: {}, ripple: { type: "Boolean" }, color: {}, toggle: { type: "Boolean" }, pressed: {}, ariaLabelOn: {}, ariaLabelOff: {}, touch: { type: "Boolean" }, displayFlex: { type: "Boolean" }, size: {}, href: {}, action: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function bi(n) {
  let e;
  return {
    c() {
      e = we("Dev Menu Bar");
    },
    m(t, s) {
      v(t, e, s);
    },
    d(t) {
      t && y(e);
    }
  };
}
function _i(n) {
  let e, t;
  return e = new ai({
    props: {
      $$slots: { default: [bi] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(s, r) {
      M(e, s, r), t = !0;
    },
    p(s, r) {
      const o = {};
      r & /*$$scope*/
      32 && (o.$$scope = { dirty: r, ctx: s }), e.$set(o);
    },
    i(s) {
      t || (_(e.$$.fragment, s), t = !0);
    },
    o(s) {
      A(e.$$.fragment, s), t = !1;
    },
    d(s) {
      H(e, s);
    }
  };
}
function Zt(n) {
  let e, t, s, r;
  return e = new wt({
    props: {
      style: "margin-right: .5rem;",
      $$slots: { default: [yi] },
      $$scope: { ctx: n }
    }
  }), e.$on(
    "click",
    /*handleUpload*/
    n[2]
  ), s = new wt({
    props: {
      $$slots: { default: [vi] },
      $$scope: { ctx: n }
    }
  }), s.$on("click", Ti), {
    c() {
      N(e.$$.fragment), t = te(), N(s.$$.fragment);
    },
    m(o, l) {
      M(e, o, l), v(o, t, l), M(s, o, l), r = !0;
    },
    p(o, l) {
      const i = {};
      l & /*$$scope, fileInput*/
      34 && (i.$$scope = { dirty: l, ctx: o }), e.$set(i);
      const a = {};
      l & /*$$scope*/
      32 && (a.$$scope = { dirty: l, ctx: o }), s.$set(a);
    },
    i(o) {
      r || (_(e.$$.fragment, o), _(s.$$.fragment, o), r = !0);
    },
    o(o) {
      A(e.$$.fragment, o), A(s.$$.fragment, o), r = !1;
    },
    d(o) {
      o && y(t), H(e, o), H(s, o);
    }
  };
}
function yi(n) {
  let e, t, s, r, o, l;
  return e = new Pt({ props: { icon: "upload_file" } }), {
    c() {
      N(e.$$.fragment), t = te(), s = U("input"), D(s, "type", "file"), Gn(s, "display", "none"), D(s, "accept", ".scd"), D(s, "name", "xmlDocument");
    },
    m(i, a) {
      M(e, i, a), v(i, t, a), v(i, s, a), n[4](s), r = !0, o || (l = Ke(
        s,
        "change",
        /*handleFileChange*/
        n[3]
      ), o = !0);
    },
    p: X,
    i(i) {
      r || (_(e.$$.fragment, i), r = !0);
    },
    o(i) {
      A(e.$$.fragment, i), r = !1;
    },
    d(i) {
      i && (y(t), y(s)), H(e, i), n[4](null), o = !1, l();
    }
  };
}
function vi(n) {
  let e, t;
  return e = new Pt({ props: { icon: "download" } }), {
    c() {
      N(e.$$.fragment);
    },
    m(s, r) {
      M(e, s, r), t = !0;
    },
    p: X,
    i(s) {
      t || (_(e.$$.fragment, s), t = !0);
    },
    o(s) {
      A(e.$$.fragment, s), t = !1;
    },
    d(s) {
      H(e, s);
    }
  };
}
function Ai(n) {
  let e, t, s = (
    /*pluginType*/
    n[0] && /*pluginType*/
    n[0] === "editor" && Zt(n)
  );
  return {
    c() {
      s && s.c(), e = ce();
    },
    m(r, o) {
      s && s.m(r, o), v(r, e, o), t = !0;
    },
    p(r, o) {
      /*pluginType*/
      r[0] && /*pluginType*/
      r[0] === "editor" ? s ? (s.p(r, o), o & /*pluginType*/
      1 && _(s, 1)) : (s = Zt(r), s.c(), _(s, 1), s.m(e.parentNode, e)) : s && (me(), A(s, 1, 1, () => {
        s = null;
      }), pe());
    },
    i(r) {
      t || (_(s), t = !0);
    },
    o(r) {
      A(s), t = !1;
    },
    d(r) {
      r && y(e), s && s.d(r);
    }
  };
}
function Ei(n) {
  let e, t, s, r;
  return e = new Lt({
    props: {
      $$slots: { default: [_i] },
      $$scope: { ctx: n }
    }
  }), s = new Lt({
    props: {
      align: "end",
      toolbar: !0,
      $$slots: { default: [Ai] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      N(e.$$.fragment), t = te(), N(s.$$.fragment);
    },
    m(o, l) {
      M(e, o, l), v(o, t, l), M(s, o, l), r = !0;
    },
    p(o, l) {
      const i = {};
      l & /*$$scope*/
      32 && (i.$$scope = { dirty: l, ctx: o }), e.$set(i);
      const a = {};
      l & /*$$scope, fileInput, pluginType*/
      35 && (a.$$scope = { dirty: l, ctx: o }), s.$set(a);
    },
    i(o) {
      r || (_(e.$$.fragment, o), _(s.$$.fragment, o), r = !0);
    },
    o(o) {
      A(e.$$.fragment, o), A(s.$$.fragment, o), r = !1;
    },
    d(o) {
      o && y(t), H(e, o), H(s, o);
    }
  };
}
function Si(n) {
  let e, t;
  return e = new ii({
    props: {
      $$slots: { default: [Ei] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(s, r) {
      M(e, s, r), t = !0;
    },
    p(s, r) {
      const o = {};
      r & /*$$scope, fileInput, pluginType*/
      35 && (o.$$scope = { dirty: r, ctx: s }), e.$set(o);
    },
    i(s) {
      t || (_(e.$$.fragment, s), t = !0);
    },
    o(s) {
      A(e.$$.fragment, s), t = !1;
    },
    d(s) {
      H(e, s);
    }
  };
}
function Ci(n) {
  let e, t;
  return e = new dn({
    props: {
      variant: "static",
      color: "primary",
      $$slots: { default: [Si] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(s, r) {
      M(e, s, r), t = !0;
    },
    p(s, [r]) {
      const o = {};
      r & /*$$scope, fileInput, pluginType*/
      35 && (o.$$scope = { dirty: r, ctx: s }), e.$set(o);
    },
    i(s) {
      t || (_(e.$$.fragment, s), t = !0);
    },
    o(s) {
      A(e.$$.fragment, s), t = !1;
    },
    d(s) {
      H(e, s);
    }
  };
}
function Ti() {
  document.dispatchEvent(new Event("save-doc"));
}
function Li(n, e, t) {
  let { pluginType: s = void 0 } = e, r;
  function o() {
    r.click();
  }
  async function l(a) {
    var h;
    const u = (h = a.target.files) == null ? void 0 : h[0];
    if (!u) return;
    const f = await u.text(), d = u.name, m = new DOMParser().parseFromString(f, "application/xml");
    document.dispatchEvent(as(m, d));
  }
  function i(a) {
    Y[a ? "unshift" : "push"](() => {
      r = a, t(1, r);
    });
  }
  return n.$$set = (a) => {
    "pluginType" in a && t(0, s = a.pluginType);
  }, [s, r, o, l, i];
}
class gn extends K {
  constructor(e) {
    super(), Z(this, e, Li, Ci, G, { pluginType: 0 });
  }
  get pluginType() {
    return this.$$.ctx[0];
  }
  set pluginType(e) {
    this.$$set({ pluginType: e }), g();
  }
}
J(gn, { pluginType: {} }, [], [], !0);
function Jt(n) {
  let e, t;
  return e = new gn({
    props: { pluginType: (
      /*pluginType*/
      n[0]
    ) }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(s, r) {
      M(e, s, r), t = !0;
    },
    p(s, r) {
      const o = {};
      r & /*pluginType*/
      1 && (o.pluginType = /*pluginType*/
      s[0]), e.$set(o);
    },
    i(s) {
      t || (_(e.$$.fragment, s), t = !0);
    },
    o(s) {
      A(e.$$.fragment, s), t = !1;
    },
    d(s) {
      H(e, s);
    }
  };
}
function wi(n) {
  let e, t, s, r, o, l, i, a, c, u = (
    /*isStandAloneMode*/
    n[1] && Jt(n)
  );
  const f = (
    /*#slots*/
    n[6].default
  ), d = se(
    f,
    n,
    /*$$scope*/
    n[5],
    null
  );
  return {
    c() {
      e = U("link"), t = te(), s = U("link"), r = te(), o = U("link"), l = te(), u && u.c(), i = te(), a = U("tscd-theme"), d && d.c(), D(e, "rel", "stylesheet"), D(
        e,
        "href",
        /*fontCss*/
        n[2]
      ), D(s, "rel", "stylesheet"), D(
        s,
        "href",
        /*themeCss*/
        n[3]
      ), D(o, "rel", "stylesheet"), D(
        o,
        "href",
        /*svelteMaterialUiCss*/
        n[4]
      );
    },
    m(m, h) {
      v(m, e, h), v(m, t, h), v(m, s, h), v(m, r, h), v(m, o, h), v(m, l, h), u && u.m(m, h), v(m, i, h), v(m, a, h), d && d.m(a, null), c = !0;
    },
    p(m, [h]) {
      /*isStandAloneMode*/
      m[1] ? u ? (u.p(m, h), h & /*isStandAloneMode*/
      2 && _(u, 1)) : (u = Jt(m), u.c(), _(u, 1), u.m(i.parentNode, i)) : u && (me(), A(u, 1, 1, () => {
        u = null;
      }), pe()), d && d.p && (!c || h & /*$$scope*/
      32) && re(
        d,
        f,
        m,
        /*$$scope*/
        m[5],
        c ? ie(
          f,
          /*$$scope*/
          m[5],
          h,
          null
        ) : oe(
          /*$$scope*/
          m[5]
        ),
        null
      );
    },
    i(m) {
      c || (_(u), _(d, m), c = !0);
    },
    o(m) {
      A(u), A(d, m), c = !1;
    },
    d(m) {
      m && (y(e), y(t), y(s), y(r), y(o), y(l), y(i), y(a)), u && u.d(m), d && d.d(m);
    }
  };
}
function Ii(n, e, t) {
  let s, { $$slots: r = {}, $$scope: o } = e, { pluginType: l = void 0 } = e;
  const i = new URL(import.meta.url), a = new URL(ts, i).href, c = new URL(ns, i).href, u = new URL(ss, i).href;
  return n.$$set = (f) => {
    "pluginType" in f && t(0, l = f.pluginType), "$$scope" in f && t(5, o = f.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*isStandAloneMode*/
    2 && s && Promise.resolve({              });
  }, t(1, s = !1), [
    l,
    s,
    a,
    c,
    u,
    o,
    r
  ];
}
class bn extends K {
  constructor(e) {
    super(), Z(this, e, Ii, wi, G, { pluginType: 0 });
  }
  get pluginType() {
    return this.$$.ctx[0];
  }
  set pluginType(e) {
    this.$$set({ pluginType: e }), g();
  }
}
J(bn, { pluginType: {} }, ["default"], [], !0);
function Kt(n) {
  let e;
  return {
    c() {
      e = U("div"), D(e, "class", "mdc-button__touch");
    },
    m(t, s) {
      v(t, e, s);
    },
    d(t) {
      t && y(e);
    }
  };
}
function Oi(n) {
  let e, t, s, r;
  const o = (
    /*#slots*/
    n[28].default
  ), l = se(
    o,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let i = (
    /*touch*/
    n[6] && Kt()
  );
  return {
    c() {
      e = U("div"), t = te(), l && l.c(), i && i.c(), s = ce(), D(e, "class", "mdc-button__ripple");
    },
    m(a, c) {
      v(a, e, c), v(a, t, c), l && l.m(a, c), i && i.m(a, c), v(a, s, c), r = !0;
    },
    p(a, c) {
      l && l.p && (!r || c[0] & /*$$scope*/
      1073741824) && re(
        l,
        o,
        a,
        /*$$scope*/
        a[30],
        r ? ie(
          o,
          /*$$scope*/
          a[30],
          c,
          null
        ) : oe(
          /*$$scope*/
          a[30]
        ),
        null
      ), /*touch*/
      a[6] ? i || (i = Kt(), i.c(), i.m(s.parentNode, s)) : i && (i.d(1), i = null);
    },
    i(a) {
      r || (_(l, a), r = !0);
    },
    o(a) {
      A(l, a), r = !1;
    },
    d(a) {
      a && (y(e), y(t), y(s)), l && l.d(a), i && i.d(a);
    }
  };
}
function Pi(n) {
  let e, t, s;
  const r = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          Ge,
          {
            ripple: (
              /*ripple*/
              n[3]
            ),
            unbounded: !1,
            color: (
              /*color*/
              n[4]
            ),
            disabled: !!/*$$restProps*/
            n[23].disabled,
            addClass: (
              /*addClass*/
              n[19]
            ),
            removeClass: (
              /*removeClass*/
              n[20]
            ),
            addStyle: (
              /*addStyle*/
              n[21]
            )
          }
        ],
        /*forwardEvents*/
        n[17],
        .../*use*/
        n[0]
      ]
    },
    {
      class: j({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-button": !0,
        "mdc-button--raised": (
          /*variant*/
          n[5] === "raised"
        ),
        "mdc-button--unelevated": (
          /*variant*/
          n[5] === "unelevated"
        ),
        "mdc-button--outlined": (
          /*variant*/
          n[5] === "outlined"
        ),
        "smui-button--color-secondary": (
          /*color*/
          n[4] === "secondary"
        ),
        "mdc-button--touch": (
          /*touch*/
          n[6]
        ),
        "mdc-card__action": (
          /*context*/
          n[18] === "card:action"
        ),
        "mdc-card__action--button": (
          /*context*/
          n[18] === "card:action"
        ),
        "mdc-dialog__button": (
          /*context*/
          n[18] === "dialog:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          n[18] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          n[18] === "top-app-bar:action"
        ),
        "mdc-snackbar__action": (
          /*context*/
          n[18] === "snackbar:actions"
        ),
        "mdc-banner__secondary-action": (
          /*context*/
          n[18] === "banner" && /*secondary*/
          n[8]
        ),
        "mdc-banner__primary-action": (
          /*context*/
          n[18] === "banner" && !/*secondary*/
          n[8]
        ),
        "mdc-tooltip__action": (
          /*context*/
          n[18] === "tooltip:rich-actions"
        ),
        .../*internalClasses*/
        n[12]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[13]
      ).map(vt).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*actionProp*/
    n[16],
    /*defaultProp*/
    n[15],
    /*secondaryProp*/
    n[14],
    { href: (
      /*href*/
      n[7]
    ) },
    /*$$restProps*/
    n[23]
  ];
  var o = (
    /*component*/
    n[9]
  );
  function l(i, a) {
    let c = {
      $$slots: { default: [Oi] },
      $$scope: { ctx: i }
    };
    for (let u = 0; u < r.length; u += 1)
      c = P(c, r[u]);
    return a !== void 0 && a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (c = P(c, W(r, [
      a[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        i[10]
      ) },
      a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            Ge,
            {
              ripple: (
                /*ripple*/
                i[3]
              ),
              unbounded: !1,
              color: (
                /*color*/
                i[4]
              ),
              disabled: !!/*$$restProps*/
              i[23].disabled,
              addClass: (
                /*addClass*/
                i[19]
              ),
              removeClass: (
                /*removeClass*/
                i[20]
              ),
              addStyle: (
                /*addStyle*/
                i[21]
              )
            }
          ],
          /*forwardEvents*/
          i[17],
          .../*use*/
          i[0]
        ]
      },
      a[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: j({
          [
            /*className*/
            i[1]
          ]: !0,
          "mdc-button": !0,
          "mdc-button--raised": (
            /*variant*/
            i[5] === "raised"
          ),
          "mdc-button--unelevated": (
            /*variant*/
            i[5] === "unelevated"
          ),
          "mdc-button--outlined": (
            /*variant*/
            i[5] === "outlined"
          ),
          "smui-button--color-secondary": (
            /*color*/
            i[4] === "secondary"
          ),
          "mdc-button--touch": (
            /*touch*/
            i[6]
          ),
          "mdc-card__action": (
            /*context*/
            i[18] === "card:action"
          ),
          "mdc-card__action--button": (
            /*context*/
            i[18] === "card:action"
          ),
          "mdc-dialog__button": (
            /*context*/
            i[18] === "dialog:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            i[18] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            i[18] === "top-app-bar:action"
          ),
          "mdc-snackbar__action": (
            /*context*/
            i[18] === "snackbar:actions"
          ),
          "mdc-banner__secondary-action": (
            /*context*/
            i[18] === "banner" && /*secondary*/
            i[8]
          ),
          "mdc-banner__primary-action": (
            /*context*/
            i[18] === "banner" && !/*secondary*/
            i[8]
          ),
          "mdc-tooltip__action": (
            /*context*/
            i[18] === "tooltip:rich-actions"
          ),
          .../*internalClasses*/
          i[12]
        })
      },
      a[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          i[13]
        ).map(vt).concat([
          /*style*/
          i[2]
        ]).join(" ")
      },
      a[0] & /*actionProp*/
      65536 && R(
        /*actionProp*/
        i[16]
      ),
      a[0] & /*defaultProp*/
      32768 && R(
        /*defaultProp*/
        i[15]
      ),
      a[0] & /*secondaryProp*/
      16384 && R(
        /*secondaryProp*/
        i[14]
      ),
      a[0] & /*href*/
      128 && { href: (
        /*href*/
        i[7]
      ) },
      a[0] & /*$$restProps*/
      8388608 && R(
        /*$$restProps*/
        i[23]
      )
    ]))), { props: c };
  }
  return o && (e = de(o, l(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && N(e.$$.fragment), t = ce();
    },
    m(i, a) {
      e && M(e, i, a), v(i, t, a), s = !0;
    },
    p(i, a) {
      if (a[0] & /*component*/
      512 && o !== (o = /*component*/
      i[9])) {
        if (e) {
          me();
          const c = e;
          A(c.$$.fragment, 1, 0, () => {
            H(c, 1);
          }), pe();
        }
        o ? (e = de(o, l(i, a)), i[29](e), e.$on(
          "click",
          /*handleClick*/
          i[22]
        ), N(e.$$.fragment), _(e.$$.fragment, 1), M(e, t.parentNode, t)) : e = null;
      } else if (o) {
        const c = a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? W(r, [
          a[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            i[10]
          ) },
          a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                Ge,
                {
                  ripple: (
                    /*ripple*/
                    i[3]
                  ),
                  unbounded: !1,
                  color: (
                    /*color*/
                    i[4]
                  ),
                  disabled: !!/*$$restProps*/
                  i[23].disabled,
                  addClass: (
                    /*addClass*/
                    i[19]
                  ),
                  removeClass: (
                    /*removeClass*/
                    i[20]
                  ),
                  addStyle: (
                    /*addStyle*/
                    i[21]
                  )
                }
              ],
              /*forwardEvents*/
              i[17],
              .../*use*/
              i[0]
            ]
          },
          a[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: j({
              [
                /*className*/
                i[1]
              ]: !0,
              "mdc-button": !0,
              "mdc-button--raised": (
                /*variant*/
                i[5] === "raised"
              ),
              "mdc-button--unelevated": (
                /*variant*/
                i[5] === "unelevated"
              ),
              "mdc-button--outlined": (
                /*variant*/
                i[5] === "outlined"
              ),
              "smui-button--color-secondary": (
                /*color*/
                i[4] === "secondary"
              ),
              "mdc-button--touch": (
                /*touch*/
                i[6]
              ),
              "mdc-card__action": (
                /*context*/
                i[18] === "card:action"
              ),
              "mdc-card__action--button": (
                /*context*/
                i[18] === "card:action"
              ),
              "mdc-dialog__button": (
                /*context*/
                i[18] === "dialog:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                i[18] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                i[18] === "top-app-bar:action"
              ),
              "mdc-snackbar__action": (
                /*context*/
                i[18] === "snackbar:actions"
              ),
              "mdc-banner__secondary-action": (
                /*context*/
                i[18] === "banner" && /*secondary*/
                i[8]
              ),
              "mdc-banner__primary-action": (
                /*context*/
                i[18] === "banner" && !/*secondary*/
                i[8]
              ),
              "mdc-tooltip__action": (
                /*context*/
                i[18] === "tooltip:rich-actions"
              ),
              .../*internalClasses*/
              i[12]
            })
          },
          a[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              i[13]
            ).map(vt).concat([
              /*style*/
              i[2]
            ]).join(" ")
          },
          a[0] & /*actionProp*/
          65536 && R(
            /*actionProp*/
            i[16]
          ),
          a[0] & /*defaultProp*/
          32768 && R(
            /*defaultProp*/
            i[15]
          ),
          a[0] & /*secondaryProp*/
          16384 && R(
            /*secondaryProp*/
            i[14]
          ),
          a[0] & /*href*/
          128 && { href: (
            /*href*/
            i[7]
          ) },
          a[0] & /*$$restProps*/
          8388608 && R(
            /*$$restProps*/
            i[23]
          )
        ]) : {};
        a[0] & /*$$scope, touch*/
        1073741888 && (c.$$scope = { dirty: a, ctx: i }), e.$set(c);
      }
    },
    i(i) {
      s || (e && _(e.$$.fragment, i), s = !0);
    },
    o(i) {
      e && A(e.$$.fragment, i), s = !1;
    },
    d(i) {
      i && y(t), n[29](null), e && H(e, i);
    }
  };
}
const vt = ([n, e]) => `${n}: ${e};`;
function $i(n, e, t) {
  let s, r, o;
  const l = [
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
  let i = z(e, l), { $$slots: a = {}, $$scope: c } = e;
  const u = ye(Q());
  let { use: f = [] } = e, { class: d = "" } = e, { style: m = "" } = e, { ripple: h = !0 } = e, { color: C = "primary" } = e, { variant: w = "text" } = e, { touch: S = !1 } = e, { href: T = void 0 } = e, { action: B = "close" } = e, { defaultAction: I = !1 } = e, { secondary: L = !1 } = e, $, k = {}, V = {}, x = Ie("SMUI:button:context"), { component: F = le } = e, { tag: q = F === le ? T == null ? "button" : "a" : void 0 } = e, ae = i.disabled;
  Re("SMUI:label:context", "button"), Re("SMUI:icon:context", "button");
  function ge(E) {
    k[E] || t(12, k[E] = !0, k);
  }
  function Ae(E) {
    (!(E in k) || k[E]) && t(12, k[E] = !1, k);
  }
  function We(E, Te) {
    V[E] != Te && (Te === "" || Te == null ? (delete V[E], t(13, V)) : t(13, V[E] = Te, V));
  }
  function Oe() {
    x === "banner" && mt(be(), L ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function be() {
    return $.getElement();
  }
  function Pe(E) {
    Y[E ? "unshift" : "push"](() => {
      $ = E, t(11, $);
    });
  }
  return n.$$set = (E) => {
    t(31, e = P(P({}, e), fe(E))), t(23, i = z(e, l)), "use" in E && t(0, f = E.use), "class" in E && t(1, d = E.class), "style" in E && t(2, m = E.style), "ripple" in E && t(3, h = E.ripple), "color" in E && t(4, C = E.color), "variant" in E && t(5, w = E.variant), "touch" in E && t(6, S = E.touch), "href" in E && t(7, T = E.href), "action" in E && t(24, B = E.action), "defaultAction" in E && t(25, I = E.defaultAction), "secondary" in E && t(8, L = E.secondary), "component" in E && t(9, F = E.component), "tag" in E && t(10, q = E.tag), "$$scope" in E && t(30, c = E.$$scope);
  }, n.$$.update = () => {
    if (t(16, s = x === "dialog:action" && B != null ? { "data-mdc-dialog-action": B } : { action: e.action }), t(15, r = x === "dialog:action" && I ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, o = x === "banner" ? {} : { secondary: e.secondary }), ae !== i.disabled) {
      if ($) {
        const E = be();
        "blur" in E && E.blur();
      }
      t(27, ae = i.disabled);
    }
  }, e = fe(e), [
    f,
    d,
    m,
    h,
    C,
    w,
    S,
    T,
    L,
    F,
    q,
    $,
    k,
    V,
    o,
    r,
    s,
    u,
    x,
    ge,
    Ae,
    We,
    Oe,
    i,
    B,
    I,
    be,
    ae,
    a,
    Pe,
    c
  ];
}
class kt extends K {
  constructor(e) {
    super(), Z(
      this,
      e,
      $i,
      Pi,
      G,
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
    this.$$set({ use: e }), g();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), g();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(e) {
    this.$$set({ style: e }), g();
  }
  get ripple() {
    return this.$$.ctx[3];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), g();
  }
  get color() {
    return this.$$.ctx[4];
  }
  set color(e) {
    this.$$set({ color: e }), g();
  }
  get variant() {
    return this.$$.ctx[5];
  }
  set variant(e) {
    this.$$set({ variant: e }), g();
  }
  get touch() {
    return this.$$.ctx[6];
  }
  set touch(e) {
    this.$$set({ touch: e }), g();
  }
  get href() {
    return this.$$.ctx[7];
  }
  set href(e) {
    this.$$set({ href: e }), g();
  }
  get action() {
    return this.$$.ctx[24];
  }
  set action(e) {
    this.$$set({ action: e }), g();
  }
  get defaultAction() {
    return this.$$.ctx[25];
  }
  set defaultAction(e) {
    this.$$set({ defaultAction: e }), g();
  }
  get secondary() {
    return this.$$.ctx[8];
  }
  set secondary(e) {
    this.$$set({ secondary: e }), g();
  }
  get component() {
    return this.$$.ctx[9];
  }
  set component(e) {
    this.$$set({ component: e }), g();
  }
  get tag() {
    return this.$$.ctx[10];
  }
  set tag(e) {
    this.$$set({ tag: e }), g();
  }
  get getElement() {
    return this.$$.ctx[26];
  }
}
J(kt, { use: {}, class: {}, style: {}, ripple: { type: "Boolean" }, color: {}, variant: {}, touch: { type: "Boolean" }, href: {}, action: {}, defaultAction: { type: "Boolean" }, secondary: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function Di(n) {
  let e, t, s, r, o, l;
  const i = (
    /*#slots*/
    n[8].default
  ), a = se(
    i,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let c = [
    {
      class: t = j({
        [
          /*className*/
          n[1]
        ]: !0,
        "smui-button__group": !0,
        "smui-button__group--raised": (
          /*variant*/
          n[2] === "raised"
        )
      })
    },
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let f = 0; f < c.length; f += 1)
    u = P(u, c[f]);
  return {
    c() {
      e = U("div"), a && a.c(), Be(e, u);
    },
    m(f, d) {
      v(f, e, d), a && a.m(e, null), n[9](e), r = !0, o || (l = [
        ne(s = Me.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ne(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], o = !0);
    },
    p(f, [d]) {
      a && a.p && (!r || d & /*$$scope*/
      128) && re(
        a,
        i,
        f,
        /*$$scope*/
        f[7],
        r ? ie(
          i,
          /*$$scope*/
          f[7],
          d,
          null
        ) : oe(
          /*$$scope*/
          f[7]
        ),
        null
      ), Be(e, u = W(c, [
        (!r || d & /*className, variant*/
        6 && t !== (t = j({
          [
            /*className*/
            f[1]
          ]: !0,
          "smui-button__group": !0,
          "smui-button__group--raised": (
            /*variant*/
            f[2] === "raised"
          )
        }))) && { class: t },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        f[5]
      ])), s && ve(s.update) && d & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (_(a, f), r = !0);
    },
    o(f) {
      A(a, f), r = !1;
    },
    d(f) {
      f && y(e), a && a.d(f), n[9](null), o = !1, he(l);
    }
  };
}
function ki(n, e, t) {
  const s = ["use", "class", "variant", "getElement"];
  let r = z(e, s), { $$slots: o = {}, $$scope: l } = e;
  const i = ye(Q());
  let { use: a = [] } = e, { class: c = "" } = e, { variant: u = "text" } = e, f;
  function d() {
    return f;
  }
  function m(h) {
    Y[h ? "unshift" : "push"](() => {
      f = h, t(3, f);
    });
  }
  return n.$$set = (h) => {
    e = P(P({}, e), fe(h)), t(5, r = z(e, s)), "use" in h && t(0, a = h.use), "class" in h && t(1, c = h.class), "variant" in h && t(2, u = h.variant), "$$scope" in h && t(7, l = h.$$scope);
  }, [
    a,
    c,
    u,
    f,
    i,
    r,
    d,
    l,
    o,
    m
  ];
}
class Bi extends K {
  constructor(e) {
    super(), Z(this, e, ki, Di, G, {
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
    this.$$set({ use: e }), g();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), g();
  }
  get variant() {
    return this.$$.ctx[2];
  }
  set variant(e) {
    this.$$set({ variant: e }), g();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
J(Bi, { use: {}, class: {}, variant: {} }, ["default"], ["getElement"], !0);
const _n = Xe(void 0), yn = Xe();
function Ri({
  newXMLDocument: n,
  newPluginHostElement: e
}) {
  _n.set(n), yn.set(e);
}
const Bt = {
  //state
  xmlDocument: _n,
  pluginHostElement: yn,
  //initialization
  init: Ri
}, { xmlDocument: pt } = Bt;
function Mi(n, e) {
  var o;
  const { dataTypeTemplatesRootElement: t } = Mt, s = un(
    Ve(pt),
    n,
    e
  ), r = ((o = Ve(t)) == null ? void 0 : o.element) ?? Hi();
  return An.createAndDispatchActionEvent(r, s);
}
function Hi() {
  const n = un(
    Ve(pt),
    "DataTypeTemplates",
    {}
  );
  return Mt.dataTypeTemplatesRootElement.set({
    element: n
  }), An.createAndDispatchActionEvent(
    Ve(pt).documentElement,
    n
  ), n;
}
const vn = {
  //state
  xmlDocument: pt,
  //actions
  addElementToXmlDocument: Mi
}, { pluginHostElement: Ni } = Bt;
function Fi(n, e) {
  const t = os({
    new: {
      parent: n,
      element: e
    }
  });
  Ve(Ni).dispatchEvent(t);
}
const An = {
  //actions
  createAndDispatchActionEvent: Fi
}, Rt = Xe(null), En = Xe();
function Ui(n) {
  const t = new cn(n).findDataTypesElement();
  Rt.set(t);
}
function ji(n) {
  var s;
  const t = new cn(n).findTypeDesignerElements({
    root: (s = Ve(Rt)) == null ? void 0 : s.element
  });
  En.set(t);
}
function zi(n) {
  n && (Ui(n), ji(n));
}
const Mt = {
  //state
  dataTypeTemplatesRootElement: Rt,
  dataTypeTemplatesSubElements: En,
  //actions
  init: zi
};
function Gi(n) {
  Rn(n, "svelte-1ffwnct", ".container.svelte-1ffwnct{position:fixed;bottom:0;right:0;display:flex;flex-direction:column;align-items:flex-end;gap:8px;padding:16px}");
}
function Yt(n, e, t) {
  const s = n.slice();
  return s[10] = e[t].name, s[11] = e[t].onClick, s;
}
function Qt(n, e, t) {
  const s = n.slice();
  return s[14] = e[t], s;
}
function xt(n) {
  let e, t, s, r, o = dt(
    /*fieldsConfig*/
    n[3][
      /*currentFieldsToShow*/
      n[1]
    ]
  ), l = [];
  for (let i = 0; i < o.length; i += 1)
    l[i] = en(Qt(n, o, i));
  return s = new kt({
    props: {
      $$slots: { default: [Vi] },
      $$scope: { ctx: n }
    }
  }), s.$on(
    "click",
    /*addElement*/
    n[6]
  ), {
    c() {
      e = U("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = te(), N(s.$$.fragment), D(e, "class", "input-fields");
    },
    m(i, a) {
      v(i, e, a);
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(e, null);
      Le(e, t), M(s, e, null), r = !0;
    },
    p(i, a) {
      if (a & /*fieldsConfig, currentFieldsToShow, handleInputChange*/
      42) {
        o = dt(
          /*fieldsConfig*/
          i[3][
            /*currentFieldsToShow*/
            i[1]
          ]
        );
        let u;
        for (u = 0; u < o.length; u += 1) {
          const f = Qt(i, o, u);
          l[u] ? l[u].p(f, a) : (l[u] = en(f), l[u].c(), l[u].m(e, t));
        }
        for (; u < l.length; u += 1)
          l[u].d(1);
        l.length = o.length;
      }
      const c = {};
      a & /*$$scope*/
      131072 && (c.$$scope = { dirty: a, ctx: i }), s.$set(c);
    },
    i(i) {
      r || (_(s.$$.fragment, i), r = !0);
    },
    o(i) {
      A(s.$$.fragment, i), r = !1;
    },
    d(i) {
      i && y(e), an(l, i), H(s);
    }
  };
}
function en(n) {
  let e, t = (
    /*field*/
    n[14].label + ""
  ), s, r, o, l, i, a, c, u, f, d;
  return {
    c() {
      e = U("label"), s = we(t), r = we(":"), l = te(), i = U("input"), D(e, "for", o = /*field*/
      n[14].name), D(i, "type", a = /*field*/
      n[14].type), D(i, "id", c = /*field*/
      n[14].name), D(i, "name", u = /*field*/
      n[14].name);
    },
    m(m, h) {
      v(m, e, h), Le(e, s), Le(e, r), v(m, l, h), v(m, i, h), f || (d = Ke(
        i,
        "input",
        /*handleInputChange*/
        n[5]
      ), f = !0);
    },
    p(m, h) {
      h & /*currentFieldsToShow*/
      2 && t !== (t = /*field*/
      m[14].label + "") && zn(s, t), h & /*currentFieldsToShow*/
      2 && o !== (o = /*field*/
      m[14].name) && D(e, "for", o), h & /*currentFieldsToShow*/
      2 && a !== (a = /*field*/
      m[14].type) && D(i, "type", a), h & /*currentFieldsToShow*/
      2 && c !== (c = /*field*/
      m[14].name) && D(i, "id", c), h & /*currentFieldsToShow*/
      2 && u !== (u = /*field*/
      m[14].name) && D(i, "name", u);
    },
    d(m) {
      m && (y(e), y(l), y(i)), f = !1, d();
    }
  };
}
function Vi(n) {
  let e;
  return {
    c() {
      e = we("Create element");
    },
    m(t, s) {
      v(t, e, s);
    },
    d(t) {
      t && y(e);
    }
  };
}
function qi(n) {
  let e = (
    /*name*/
    n[10] + ""
  ), t;
  return {
    c() {
      t = we(e);
    },
    m(s, r) {
      v(s, t, r);
    },
    p: X,
    d(s) {
      s && y(t);
    }
  };
}
function tn(n) {
  let e, t;
  return e = new kt({
    props: {
      $$slots: { default: [qi] },
      $$scope: { ctx: n }
    }
  }), e.$on(
    "click",
    /*onClick*/
    n[11]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(s, r) {
      M(e, s, r), t = !0;
    },
    p(s, r) {
      const o = {};
      r & /*$$scope*/
      131072 && (o.$$scope = { dirty: r, ctx: s }), e.$set(o);
    },
    i(s) {
      t || (_(e.$$.fragment, s), t = !0);
    },
    o(s) {
      A(e.$$.fragment, s), t = !1;
    },
    d(s) {
      H(e, s);
    }
  };
}
function Xi(n) {
  let e, t, s, r = (
    /*showFields*/
    n[0] && xt(n)
  ), o = dt(
    /*buttons*/
    n[4]
  ), l = [];
  for (let a = 0; a < o.length; a += 1)
    l[a] = tn(Yt(n, o, a));
  const i = (a) => A(l[a], 1, 1, () => {
    l[a] = null;
  });
  return {
    c() {
      e = U("div"), r && r.c(), t = te();
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      D(e, "class", "container svelte-1ffwnct");
    },
    m(a, c) {
      v(a, e, c), r && r.m(e, null), Le(e, t);
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(e, null);
      n[7](e), s = !0;
    },
    p(a, [c]) {
      if (/*showFields*/
      a[0] ? r ? (r.p(a, c), c & /*showFields*/
      1 && _(r, 1)) : (r = xt(a), r.c(), _(r, 1), r.m(e, t)) : r && (me(), A(r, 1, 1, () => {
        r = null;
      }), pe()), c & /*buttons*/
      16) {
        o = dt(
          /*buttons*/
          a[4]
        );
        let u;
        for (u = 0; u < o.length; u += 1) {
          const f = Yt(a, o, u);
          l[u] ? (l[u].p(f, c), _(l[u], 1)) : (l[u] = tn(f), l[u].c(), _(l[u], 1), l[u].m(e, null));
        }
        for (me(), u = o.length; u < l.length; u += 1)
          i(u);
        pe();
      }
    },
    i(a) {
      if (!s) {
        _(r);
        for (let c = 0; c < o.length; c += 1)
          _(l[c]);
        s = !0;
      }
    },
    o(a) {
      A(r), l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        A(l[c]);
      s = !1;
    },
    d(a) {
      a && y(e), r && r.d(), an(l, a), n[7](null);
    }
  };
}
function Wi(n, e, t) {
  const s = {
    substation: [
      { name: "id", label: "ID", type: "text" },
      {
        name: "name",
        label: "Name",
        type: "text"
      },
      {
        name: "desc",
        label: "Description",
        type: "text"
      }
    ],
    voltageLevel: [
      { name: "id", label: "ID", type: "text" },
      {
        name: "name",
        label: "Name",
        type: "text"
      },
      {
        name: "desc",
        label: "Description",
        type: "text"
      },
      {
        name: "nomFreq",
        label: "Nominal Frequency",
        type: "text"
      },
      {
        name: "numPhases",
        label: "Number of Phases",
        type: "text"
      }
    ],
    bay: [
      { name: "id", label: "ID", type: "text" },
      {
        name: "name",
        label: "Name",
        type: "text"
      },
      {
        name: "desc",
        label: "Description",
        type: "text"
      }
    ],
    ied: [
      { name: "id", label: "ID", type: "text" },
      {
        name: "name",
        label: "Name",
        type: "text"
      },
      {
        name: "desc",
        label: "Description",
        type: "text"
      },
      {
        name: "manufacturer",
        label: "Manufacturer",
        type: "text"
      },
      {
        name: "type",
        label: "Type",
        type: "text"
      },
      {
        name: "originalSclRevision",
        label: "SclRevision",
        type: "text"
      },
      {
        name: "originalSclVersion",
        label: "SclVersion",
        type: "text"
      },
      {
        name: "owner",
        label: "Owner",
        type: "text"
      }
    ],
    lDevice: [
      { name: "id", label: "ID", type: "text" },
      {
        name: "desc",
        label: "Description",
        type: "text"
      },
      {
        name: "inst",
        label: "Instance",
        type: "text"
      }
    ]
  }, r = [
    {
      name: je.substation,
      onClick: () => c("substation")
    },
    {
      name: je.voltageLevel,
      onClick: () => c("voltageLevel")
    },
    {
      name: je.bay,
      onClick: () => c("bay")
    },
    {
      name: je.ied,
      onClick: () => c("ied")
    },
    {
      name: je.lDevice,
      onClick: () => c("lDevice")
    }
  ];
  let o = !1, l, i = {}, a;
  function c(m) {
    t(0, o = !0), t(1, l = m), i = {};
  }
  function u(m) {
    const h = m.target;
    i[h.name] = h.value;
  }
  function f() {
    vn.addElementToXmlDocument("SubstationType", i, a), t(0, o = !1);
  }
  function d(m) {
    Y[m ? "unshift" : "push"](() => {
      a = m, t(2, a);
    });
  }
  return [
    o,
    l,
    a,
    s,
    r,
    u,
    f,
    d
  ];
}
class Sn extends K {
  constructor(e) {
    super(), Z(this, e, Wi, Xi, G, {}, Gi);
  }
}
J(Sn, {}, [], [], !0);
function Zi(n) {
  let e;
  return {
    c() {
      e = U("p"), e.textContent = "No xml document loaded";
    },
    m(t, s) {
      v(t, e, s);
    },
    i: X,
    o: X,
    d(t) {
      t && y(e);
    }
  };
}
function Ji(n) {
  let e, t;
  return e = new Sn({}), {
    c() {
      N(e.$$.fragment);
    },
    m(s, r) {
      M(e, s, r), t = !0;
    },
    i(s) {
      t || (_(e.$$.fragment, s), t = !0);
    },
    o(s) {
      A(e.$$.fragment, s), t = !1;
    },
    d(s) {
      H(e, s);
    }
  };
}
function Ki(n) {
  let e, t, s, r;
  const o = [Ji, Zi], l = [];
  function i(a, c) {
    return (
      /*$xmlDocument*/
      a[0] ? 0 : 1
    );
  }
  return e = i(n), t = l[e] = o[e](n), {
    c() {
      t.c(), s = ce();
    },
    m(a, c) {
      l[e].m(a, c), v(a, s, c), r = !0;
    },
    p(a, [c]) {
      let u = e;
      e = i(a), e !== u && (me(), A(l[u], 1, 1, () => {
        l[u] = null;
      }), pe(), t = l[e], t || (t = l[e] = o[e](a), t.c()), _(t, 1), t.m(s.parentNode, s));
    },
    i(a) {
      r || (_(t), r = !0);
    },
    o(a) {
      A(t), r = !1;
    },
    d(a) {
      a && y(s), l[e].d(a);
    }
  };
}
function Yi(n, e, t) {
  let s;
  const { xmlDocument: r } = vn;
  return rn(n, r, (o) => t(0, s = o)), [s, r];
}
class Cn extends K {
  constructor(e) {
    super(), Z(this, e, Yi, Ki, G, {});
  }
}
J(Cn, {}, [], [], !0);
const Qi = "@oscd-plugins/type-designer", xi = "0.0.0", er = "module", tr = {
  dev: "vite --mode STAND_ALONE",
  build: "vite build",
  "_build:watch": "NODE_ENV=development vite build --watch",
  "build:watch": "concurrently 'npm:_build:watch' 'npm:preview'",
  preview: "vite preview --port 55908",
  check: "svelte-check --tsconfig ./tsconfig.json",
  "check:watch": "npm run check -- --watch",
  version: "echo $npm_package_version"
}, nr = {
  "@oscd-plugins/core": "workspace:^",
  "@oscd-plugins/ui": "workspace:^",
  "@oscd-plugins/uilib": "workspace:^",
  "@smui/button": "7.0.0",
  concurrently: "^7.6.0"
}, sr = {
  "@sveltejs/vite-plugin-svelte": "^3.1.1",
  "@tsconfig/svelte": "^5.0.4",
  sass: "^1.61.0",
  svelte: "^4.2.18",
  "svelte-check": "^3.8.5",
  tslib: "^2.6.3",
  typescript: "^5.5.3",
  vite: "^5.4.1",
  "vite-plugin-css-injected-by-js": "^3.1.1"
}, nn = {
  name: Qi,
  private: !0,
  version: xi,
  type: er,
  scripts: tr,
  dependencies: nr,
  devDependencies: sr
};
function ir(n) {
  let e, t, s;
  return t = new Cn({}), {
    c() {
      e = U("type-designer"), N(t.$$.fragment);
    },
    m(r, o) {
      v(r, e, o), M(t, e, null), s = !0;
    },
    p: X,
    i(r) {
      s || (_(t.$$.fragment, r), s = !0);
    },
    o(r) {
      A(t.$$.fragment, r), s = !1;
    },
    d(r) {
      r && y(e), H(t);
    }
  };
}
function rr(n) {
  let e, t, s, r, o, l;
  return o = new bn({
    props: {
      pluginType: (
        /*pluginType*/
        n[0]
      ),
      $$slots: { default: [ir] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = U("input"), t = te(), s = U("input"), r = te(), N(o.$$.fragment), D(e, "type", "hidden"), D(e, "name", "package-name"), e.value = nn.name, D(s, "type", "hidden"), D(s, "name", "package-version"), s.value = nn.version;
    },
    m(i, a) {
      v(i, e, a), v(i, t, a), v(i, s, a), v(i, r, a), M(o, i, a), l = !0;
    },
    p(i, [a]) {
      const c = {};
      a & /*pluginType*/
      1 && (c.pluginType = /*pluginType*/
      i[0]), a & /*$$scope*/
      8 && (c.$$scope = { dirty: a, ctx: i }), o.$set(c);
    },
    i(i) {
      l || (_(o.$$.fragment, i), l = !0);
    },
    o(i) {
      A(o.$$.fragment, i), l = !1;
    },
    d(i) {
      i && (y(e), y(t), y(s), y(r)), H(o, i);
    }
  };
}
function or(n, e, t) {
  let { xmlDocument: s = void 0 } = e, { pluginHostElement: r } = e, { pluginType: o = "editor" } = e;
  return n.$$set = (l) => {
    "xmlDocument" in l && t(1, s = l.xmlDocument), "pluginHostElement" in l && t(2, r = l.pluginHostElement), "pluginType" in l && t(0, o = l.pluginType);
  }, n.$$.update = () => {
    n.$$.dirty & /*xmlDocument, pluginHostElement*/
    6 && Bt.init({
      newXMLDocument: s,
      newPluginHostElement: r
    }), n.$$.dirty & /*xmlDocument*/
    2 && Mt.init(s == null ? void 0 : s.documentElement);
  }, [o, s, r];
}
class Tn extends K {
  constructor(e) {
    super(), Z(this, e, or, rr, G, {
      xmlDocument: 1,
      pluginHostElement: 2,
      pluginType: 0
    });
  }
  get xmlDocument() {
    return this.$$.ctx[1];
  }
  set xmlDocument(e) {
    this.$$set({ xmlDocument: e }), g();
  }
  get pluginHostElement() {
    return this.$$.ctx[2];
  }
  set pluginHostElement(e) {
    this.$$set({ pluginHostElement: e }), g();
  }
  get pluginType() {
    return this.$$.ctx[0];
  }
  set pluginType(e) {
    this.$$set({ pluginType: e }), g();
  }
}
J(Tn, { xmlDocument: {}, pluginHostElement: {}, pluginType: {} }, [], [], !0);
const cr = ms({
  pluginType: "editor",
  isStandAlone: !1,
  pluginComponent: Tn
});
export {
  cr as default
};
