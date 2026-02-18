function L() {
}
function Le(t) {
  return t();
}
function Ie() {
  return /* @__PURE__ */ Object.create(null);
}
function te(t) {
  t.forEach(Le);
}
function Te(t) {
  return typeof t == "function";
}
function J(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function it(t) {
  return Object.keys(t).length === 0;
}
function y(t, e) {
  t.appendChild(e);
}
function b(t, e, r) {
  t.insertBefore(e, r || null);
}
function k(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function fe(t, e) {
  for (let r = 0; r < t.length; r += 1)
    t[r] && t[r].d(e);
}
function _(t) {
  return document.createElement(t);
}
function F(t) {
  return document.createTextNode(t);
}
function x() {
  return F(" ");
}
function ut() {
  return F("");
}
function se(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function C(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function ke(t, e, r) {
  e in t ? t[e] = typeof t[e] == "boolean" && r === "" ? !0 : r : C(t, e, r);
}
function at(t) {
  return Array.from(t.childNodes);
}
function W(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Me(t, e) {
  for (let r = 0; r < t.options.length; r += 1) {
    const n = t.options[r];
    if (n.__value === e) {
      n.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function he(t, e, r) {
  t.classList[r ? "add" : "remove"](e);
}
function dt(t, e, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  const l = document.createEvent("CustomEvent");
  return l.initCustomEvent(t, r, n, e), l;
}
function Z(t) {
  const e = {};
  for (const r of t)
    e[r.name] = r.value;
  return e;
}
let pe;
function ge(t) {
  pe = t;
}
function ft() {
  if (!pe)
    throw new Error("Function called outside component initialization");
  return pe;
}
function Ze() {
  const t = ft();
  return (e, r, { cancelable: n = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const o = dt(e, r, { cancelable: n });
      return l.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function be(t, e) {
  const r = t.$$.callbacks[e.type];
  r && r.slice().forEach((n) => n.call(this, e));
}
const de = [], Ae = [], ve = [], Oe = [], ht = Promise.resolve();
let De = !1;
function mt() {
  De || (De = !0, ht.then($));
}
function xe(t) {
  ve.push(t);
}
const we = /* @__PURE__ */ new Set();
let ae = 0;
function $() {
  if (ae !== 0)
    return;
  const t = pe;
  do {
    try {
      for (; ae < de.length; ) {
        const e = de[ae];
        ae++, ge(e), gt(e.$$);
      }
    } catch (e) {
      throw de.length = 0, ae = 0, e;
    }
    for (ge(null), de.length = 0, ae = 0; Ae.length; )
      Ae.pop()();
    for (let e = 0; e < ve.length; e += 1) {
      const r = ve[e];
      we.has(r) || (we.add(r), r());
    }
    ve.length = 0;
  } while (de.length);
  for (; Oe.length; )
    Oe.pop()();
  De = !1, we.clear(), ge(t);
}
function gt(t) {
  if (t.fragment !== null) {
    t.update(), te(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(xe);
  }
}
const $e = /* @__PURE__ */ new Set();
let le;
function _e() {
  le = {
    r: 0,
    c: [],
    p: le
    // parent group
  };
}
function ye() {
  le.r || te(le.c), le = le.p;
}
function S(t, e) {
  t && t.i && ($e.delete(t), t.i(e));
}
function M(t, e, r, n) {
  if (t && t.o) {
    if ($e.has(t))
      return;
    $e.add(t), le.c.push(() => {
      $e.delete(t), n && (r && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function Y(t) {
  t && t.c();
}
function z(t, e, r, n) {
  const { fragment: l, after_update: o } = t.$$;
  l && l.m(e, r), n || xe(() => {
    const s = t.$$.on_mount.map(Le).filter(Te);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : te(s), t.$$.on_mount = [];
  }), o.forEach(xe);
}
function V(t, e) {
  const r = t.$$;
  r.fragment !== null && (te(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function pt(t, e) {
  t.$$.dirty[0] === -1 && (de.push(t), mt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(t, e, r, n, l, o, s, i = [-1]) {
  const c = pe;
  ge(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: L,
    not_equal: l,
    bound: Ie(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Ie(),
    dirty: i,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  s && s(u.root);
  let a = !1;
  if (u.ctx = r ? r(t, e.props || {}, (g, p, ...m) => {
    const h = m.length ? m[0] : p;
    return u.ctx && l(u.ctx[g], u.ctx[g] = h) && (!u.skip_bound && u.bound[g] && u.bound[g](h), a && pt(t, g)), p;
  }) : [], u.update(), a = !0, te(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = at(e.target);
      u.fragment && u.fragment.l(g), g.forEach(k);
    } else
      u.fragment && u.fragment.c();
    e.intro && S(t.$$.fragment), z(t, e.target, e.anchor, e.customElement), $();
  }
  ge(c);
}
let X;
typeof HTMLElement == "function" && (X = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(Le).filter(Te);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, r) {
    this[t] = r;
  }
  disconnectedCallback() {
    te(this.$$.on_disconnect);
  }
  $destroy() {
    V(this, 1), this.$destroy = L;
  }
  $on(t, e) {
    if (!Te(e))
      return L;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(e), () => {
      const n = r.indexOf(e);
      n !== -1 && r.splice(n, 1);
    };
  }
  $set(t) {
    this.$$set && !it(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
const bt = `dedupe{--header-hight: 146px;height:calc(100vh - var(--header-hight));display:block;padding:1rem;overflow:hidden}dedupe main{height:100%;overflow:hidden}dedupe layout{display:grid;grid-template-columns:minmax(100px,150px) 1fr;height:100%}dedupe sidebar{border-right:black thin solid;padding-right:1rem;height:100%;overflow:auto}
`, P = class {
  constructor(t) {
    this.root = t;
  }
  searchGSEs(t) {
    return this.searchElement(P.SelectorGSE, ["ldInst", "cbName"], t);
  }
  searchIEDs(t) {
    return this.searchElement(P.SelectorIED, ["name"], t);
  }
  searchGSEControls(t) {
    return this.searchElement(
      P.SelectorGSEControl,
      ["name", "datSet"],
      t
    );
  }
  searchInputs(t) {
    return this.searchElement(P.SelectorInput, [], t);
  }
  searchExtRef(t) {
    return this.searchElement(
      P.SelectorExtRef,
      [
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
      ],
      t
    );
  }
  searchDataSetByName(t, e) {
    const r = `${P.SelectorDataSet}[name="${t}"]`, n = this.searchElement(
      r,
      ["name"],
      e
    );
    if (n.length !== 1) {
      console.log({ level: "error", msg: "we found not exactly one element", length: n.length });
      return;
    }
    return n[0];
  }
  searchElementsLDParent(t) {
    const e = t.closest(P.SelectorLD);
    if (!e) {
      console.log({ level: "error", msg: "could not find LD parent", element: t });
      return;
    }
    return Se(e, ["inst"]);
  }
  searchGSE(t, e, r) {
    const n = `${P.SelectorGSEElement}[ldInst='${t}'][cbName='${e}']`, l = this.searchElement(n, ["cbName", "ldInst"], r);
    if (l.length !== 1) {
      console.error({
        level: "error",
        msg: "we did not found exaclty one GSE element",
        length: l.length,
        ldInst: t,
        cbName: e,
        selector: n,
        root: this.root,
        options: r
      });
      return;
    }
    return l[0];
  }
  searchElementsParentSubnetwork(t) {
    const e = t.closest(P.SelectorSubNetwork);
    if (!e) {
      console.error({ level: "error", msg: "could not find SubNetwork parent", element: t });
      return;
    }
    return Se(e, ["name"]);
  }
  searchDOTypes(t) {
    return this.searchElement(P.DOType, ["id"], t);
  }
  searchDOsByType(t, e) {
    const r = `${P.DO}[type='${t}']`;
    return this.searchElement(r, ["name", "type"], e);
  }
  searchLNodeTypes(t) {
    return this.searchElement(P.LNodeType, ["id", "lnClass"], t);
  }
  // 
  // Privates
  // 
  searchElement(t, e, r) {
    const n = this.determineRoot(r);
    return Array.from(n.querySelectorAll(t)).map((s) => Se(s, e));
  }
  determineRoot(t) {
    return t != null && t.root ? t.root : this.root;
  }
};
let q = P;
q.SelectorGSE = "GSE";
q.SelectorIED = "IED";
q.SelectorGSEControl = "GSEControl";
q.SelectorInput = "Inputs";
q.SelectorExtRef = "ExtRef";
q.SelectorDataSet = "DataSet";
q.SelectorLD = "LDevice";
q.SelectorGSEElement = "GSE";
q.SelectorSubNetwork = "SubNetwork";
q.DOType = "DOType";
q.DO = "DO";
q.LNodeType = "LNodeType";
function Se(t, e) {
  const r = { element: t };
  for (const n of e) {
    const l = n;
    r[l] = t.getAttribute(l) ?? "";
  }
  return r;
}
function _t(t) {
  let e, r;
  const n = {};
  for (const l of Array.from(t.children).filter((o) => o.tagName === "EnumVal").sort((o, s) => {
    let i, c;
    return parseInt((i = o.getAttribute("ord")) !== null && i !== void 0 ? i : "", 10) - parseInt((c = s.getAttribute("ord")) !== null && c !== void 0 ? c : "", 10);
  }))
    n[(e = l.getAttribute("ord")) !== null && e !== void 0 ? e : ""] = (r = l.textContent) !== null && r !== void 0 ? r : "";
  return { vals: n };
}
function yt(t) {
  let e;
  const r = {};
  for (const n of Array.from(t.children).filter((l) => l.tagName === "BDA").sort((l, o) => l.outerHTML.localeCompare(o.outerHTML))) {
    const [l, o, s, i, c] = [
      "bType",
      "type",
      "dchg",
      "dupd",
      "qchg"
    ].map((u) => n.getAttribute(u));
    r[(e = n.getAttribute("name")) !== null && e !== void 0 ? e : ""] = { bType: l, type: o, dchg: s, dupd: i, qchg: c };
  }
  return { bdas: r };
}
function kt(t) {
  const e = {};
  for (const n of Array.from(t.children).filter((l) => l.tagName === "SDO").sort((l, o) => l.outerHTML.localeCompare(o.outerHTML))) {
    const [l, o, s] = ["name", "type", "transient"].map((i) => n.getAttribute(i));
    e[l ?? ""] = { type: o, transient: s };
  }
  const r = {};
  for (const n of Array.from(t.children).filter((l) => l.tagName === "DA").sort((l, o) => l.outerHTML.localeCompare(o.outerHTML))) {
    const [l, o, s, i, c, u, a] = [
      "name",
      "fc",
      "bType",
      "type",
      "dchg",
      "dupd",
      "qchg"
    ].map((g) => n.getAttribute(g));
    r[l ?? ""] = {
      fc: o,
      bType: s,
      type: i,
      dchg: c,
      dupd: u,
      qchg: a
    };
  }
  return {
    sdos: e,
    das: r,
    cdc: t.getAttribute("cdc")
  };
}
function vt(t) {
  const e = {};
  for (const r of Array.from(t.children).filter((n) => n.tagName === "DO").sort((n, l) => n.outerHTML.localeCompare(l.outerHTML))) {
    const [n, l, o] = ["name", "type", "transient"].map((s) => r.getAttribute(s));
    e[n ?? ""] = { type: l, transient: o };
  }
  return {
    dos: e,
    lnClass: t.getAttribute("lnClass")
  };
}
const He = {
  EnumType: _t,
  DAType: yt,
  DOType: kt,
  LNodeType: vt
};
function $t(t) {
  let e, r;
  return (r = (e = He[t.tagName]) === null || e === void 0 ? void 0 : e.call(He, t)) !== null && r !== void 0 ? r : { xml: t.outerHTML };
}
function Et(t) {
  const e = $t(t);
  return wt(JSON.stringify(e));
}
async function wt(t) {
  const e = new TextEncoder().encode(t), r = await crypto.subtle.digest("SHA-256", e);
  return Array.from(new Uint8Array(r)).map((o) => o.toString(16).padStart(2, "0")).join("");
}
class St {
  constructor(e) {
    this.scdQueries = e;
  }
  async findDuplicateObjectTypes() {
    const e = this.scdQueries.searchDOTypes(), r = await Promise.all(
      e.map(this.createHashedDot.bind(this))
    ), n = this.groupByHash(r);
    return Object.values(n).filter((o) => o.length > 1);
  }
  findUsageOfDOT(e) {
    return this.scdQueries.searchDOsByType(e);
  }
  async createHashedDot(e) {
    const r = await Et(e.element), n = this.findUsageOfDOT(e.id);
    return {
      element: e,
      hash: r,
      usages: n
    };
  }
  groupByHash(e) {
    const r = {};
    for (const n of e)
      r[n.hash] || (r[n.hash] = []), r[n.hash].push(n);
    return r;
  }
}
const Tt = `counter{display:inline;background:var(--color-blue-dark);color:var(--color-white-dark);padding:0 .25rem;border-radius:2rem;line-height:18px;min-width:20px}
`;
function At(t) {
  let e = (
    /*max*/
    t[1] - 1 + ""
  ), r, n;
  return {
    c() {
      r = F(e), n = F("+");
    },
    m(l, o) {
      b(l, r, o), b(l, n, o);
    },
    p(l, o) {
      o & /*max*/
      2 && e !== (e = /*max*/
      l[1] - 1 + "") && W(r, e);
    },
    d(l) {
      l && k(r), l && k(n);
    }
  };
}
function Dt(t) {
  let e;
  return {
    c() {
      e = F(
        /*count*/
        t[0]
      );
    },
    m(r, n) {
      b(r, e, n);
    },
    p(r, n) {
      n & /*count*/
      1 && W(
        e,
        /*count*/
        r[0]
      );
    },
    d(r) {
      r && k(e);
    }
  };
}
function xt(t) {
  let e, r, n;
  function l(i, c) {
    return (
      /*count*/
      i[0] <= /*max*/
      i[1] ? Dt : At
    );
  }
  let o = l(t), s = o(t);
  return {
    c() {
      e = _("counter"), s.c(), r = x(), n = _("style"), this.c = L;
    },
    m(i, c) {
      b(i, e, c), s.m(e, null), b(i, r, c), b(i, n, c), n.innerHTML = Tt;
    },
    p(i, [c]) {
      o === (o = l(i)) && s ? s.p(i, c) : (s.d(1), s = o(i), s && (s.c(), s.m(e, null)));
    },
    i: L,
    o: L,
    d(i) {
      i && k(e), s.d(), i && k(r), i && k(n);
    }
  };
}
function Ct(t, e, r) {
  let { count: n } = e, { max: l = 100 } = e;
  return t.$$set = (o) => {
    "count" in o && r(0, n = o.count), "max" in o && r(1, l = o.max);
  }, [n, l];
}
class et extends X {
  constructor(e) {
    super(), ee(
      this,
      {
        target: this.shadowRoot,
        props: Z(this.attributes),
        customElement: !0
      },
      Ct,
      xt,
      J,
      { count: 0, max: 1 },
      null
    ), e && (e.target && b(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
  }
  static get observedAttributes() {
    return ["count", "max"];
  }
  get count() {
    return this.$$.ctx[0];
  }
  set count(e) {
    this.$$set({ count: e }), $();
  }
  get max() {
    return this.$$.ctx[1];
  }
  set max(e) {
    this.$$set({ max: e }), $();
  }
}
customElements.define("tscd-counter", et);
const Lt = `group-card{display:inline-grid;border:var(--color-black) 1px solid;cursor:pointer;height:80px;padding:0rem;grid-template-columns:1fr 25px}group-card.selected{background:var(--color-blue-dark);color:var(--color-yellow)}group-card:hover:not(.selected){background:var(--color-blue-light)}group-card .left{padding:1rem;overflow:hidden}group-card .right{padding:.3rem}group-card ul{padding:0;margin:0}group-card li{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
`;
function Ge(t, e, r) {
  const n = t.slice();
  return n[7] = e[r], n;
}
function Re(t) {
  let e, r = (
    /*item*/
    t[7] + ""
  ), n;
  return {
    c() {
      e = _("li"), n = F(r);
    },
    m(l, o) {
      b(l, e, o), y(e, n);
    },
    p(l, o) {
      o & /*displayedItems*/
      16 && r !== (r = /*item*/
      l[7] + "") && W(n, r);
    },
    d(l) {
      l && k(e);
    }
  };
}
function Nt(t) {
  let e, r, n, l, o, s, i, c, u, a, g, p = (
    /*displayedItems*/
    t[4]
  ), m = [];
  for (let h = 0; h < p.length; h += 1)
    m[h] = Re(Ge(t, p, h));
  return s = new et({
    props: { count: (
      /*items*/
      t[0].length
    ) }
  }), {
    c() {
      e = _("group-card"), r = _("div"), n = _("ul");
      for (let h = 0; h < m.length; h += 1)
        m[h].c();
      l = x(), o = _("div"), Y(s.$$.fragment), i = x(), c = _("style"), this.c = L, C(r, "class", "left"), C(o, "class", "right"), ke(
        e,
        "data-testid",
        /*dataTestid*/
        t[1]
      ), ke(
        e,
        "title",
        /*titleText*/
        t[3]
      ), he(
        e,
        "selected",
        /*selected*/
        t[2]
      );
    },
    m(h, w) {
      b(h, e, w), y(e, r), y(r, n);
      for (let G = 0; G < m.length; G += 1)
        m[G].m(n, null);
      y(e, l), y(e, o), z(s, o, null), b(h, i, w), b(h, c, w), c.innerHTML = Lt, u = !0, a || (g = [
        se(
          e,
          "click",
          /*click_handler*/
          t[5]
        ),
        se(
          e,
          "keypress",
          /*keypress_handler*/
          t[6]
        )
      ], a = !0);
    },
    p(h, [w]) {
      if (w & /*displayedItems*/
      16) {
        p = /*displayedItems*/
        h[4];
        let I;
        for (I = 0; I < p.length; I += 1) {
          const E = Ge(h, p, I);
          m[I] ? m[I].p(E, w) : (m[I] = Re(E), m[I].c(), m[I].m(n, null));
        }
        for (; I < m.length; I += 1)
          m[I].d(1);
        m.length = p.length;
      }
      const G = {};
      w & /*items*/
      1 && (G.count = /*items*/
      h[0].length), s.$set(G), (!u || w & /*dataTestid*/
      2) && ke(
        e,
        "data-testid",
        /*dataTestid*/
        h[1]
      ), (!u || w & /*titleText*/
      8) && ke(
        e,
        "title",
        /*titleText*/
        h[3]
      ), (!u || w & /*selected*/
      4) && he(
        e,
        "selected",
        /*selected*/
        h[2]
      );
    },
    i(h) {
      u || (S(s.$$.fragment, h), u = !0);
    },
    o(h) {
      M(s.$$.fragment, h), u = !1;
    },
    d(h) {
      h && k(e), fe(m, h), V(s), h && k(i), h && k(c), a = !1, te(g);
    }
  };
}
const It = 3;
function Mt(t, e, r) {
  let n, l, { items: o = [] } = e, { dataTestid: s = "" } = e, { selected: i = !1 } = e;
  function c(a) {
    be.call(this, t, a);
  }
  function u(a) {
    be.call(this, t, a);
  }
  return t.$$set = (a) => {
    "items" in a && r(0, o = a.items), "dataTestid" in a && r(1, s = a.dataTestid), "selected" in a && r(2, i = a.selected);
  }, t.$$.update = () => {
    t.$$.dirty & /*items*/
    1 && r(4, n = o.slice(0, It)), t.$$.dirty & /*items*/
    1 && r(3, l = o.join(`
`));
  }, [
    o,
    s,
    i,
    l,
    n,
    c,
    u
  ];
}
class tt extends X {
  constructor(e) {
    super(), ee(
      this,
      {
        target: this.shadowRoot,
        props: Z(this.attributes),
        customElement: !0
      },
      Mt,
      Nt,
      J,
      { items: 0, dataTestid: 1, selected: 2 },
      null
    ), e && (e.target && b(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
  }
  static get observedAttributes() {
    return ["items", "dataTestid", "selected"];
  }
  get items() {
    return this.$$.ctx[0];
  }
  set items(e) {
    this.$$set({ items: e }), $();
  }
  get dataTestid() {
    return this.$$.ctx[1];
  }
  set dataTestid(e) {
    this.$$set({ dataTestid: e }), $();
  }
  get selected() {
    return this.$$.ctx[2];
  }
  set selected(e) {
    this.$$set({ selected: e }), $();
  }
}
customElements.define("tscd-group-card", tt);
const Ot = `group-card-list{display:flex;flex-direction:column;gap:1rem}
`;
function je(t, e, r) {
  const n = t.slice();
  return n[5] = e[r], n[7] = r, n;
}
function Be(t) {
  let e, r;
  function n() {
    return (
      /*click_handler*/
      t[3](
        /*ii*/
        t[7]
      )
    );
  }
  return e = new tt({
    props: {
      items: (
        /*itemSet*/
        t[5]
      ),
      dataTestid: `card_${/*ii*/
      t[7]}`,
      selected: (
        /*selectedIndex*/
        t[1] === /*ii*/
        t[7]
      )
    }
  }), e.$on("click", n), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), r = !0;
    },
    p(l, o) {
      t = l;
      const s = {};
      o & /*itemSets*/
      1 && (s.items = /*itemSet*/
      t[5]), o & /*selectedIndex*/
      2 && (s.selected = /*selectedIndex*/
      t[1] === /*ii*/
      t[7]), e.$set(s);
    },
    i(l) {
      r || (S(e.$$.fragment, l), r = !0);
    },
    o(l) {
      M(e.$$.fragment, l), r = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Ht(t) {
  let e, r, n, l, o = (
    /*itemSets*/
    t[0]
  ), s = [];
  for (let c = 0; c < o.length; c += 1)
    s[c] = Be(je(t, o, c));
  const i = (c) => M(s[c], 1, 1, () => {
    s[c] = null;
  });
  return {
    c() {
      e = _("group-card-list");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      r = x(), n = _("style"), this.c = L;
    },
    m(c, u) {
      b(c, e, u);
      for (let a = 0; a < s.length; a += 1)
        s[a].m(e, null);
      b(c, r, u), b(c, n, u), n.innerHTML = Ot, l = !0;
    },
    p(c, [u]) {
      if (u & /*itemSets, selectedIndex, handleClick*/
      7) {
        o = /*itemSets*/
        c[0];
        let a;
        for (a = 0; a < o.length; a += 1) {
          const g = je(c, o, a);
          s[a] ? (s[a].p(g, u), S(s[a], 1)) : (s[a] = Be(g), s[a].c(), S(s[a], 1), s[a].m(e, null));
        }
        for (_e(), a = o.length; a < s.length; a += 1)
          i(a);
        ye();
      }
    },
    i(c) {
      if (!l) {
        for (let u = 0; u < o.length; u += 1)
          S(s[u]);
        l = !0;
      }
    },
    o(c) {
      s = s.filter(Boolean);
      for (let u = 0; u < s.length; u += 1)
        M(s[u]);
      l = !1;
    },
    d(c) {
      c && k(e), fe(s, c), c && k(r), c && k(n);
    }
  };
}
function Gt(t, e, r) {
  let { itemSets: n = [] } = e, { selectedIndex: l = -1 } = e;
  const o = Ze();
  function s(c) {
    o("select", { index: c });
  }
  const i = (c) => s(c);
  return t.$$set = (c) => {
    "itemSets" in c && r(0, n = c.itemSets), "selectedIndex" in c && r(1, l = c.selectedIndex);
  }, [n, l, s, i];
}
class rt extends X {
  constructor(e) {
    super(), ee(
      this,
      {
        target: this.shadowRoot,
        props: Z(this.attributes),
        customElement: !0
      },
      Gt,
      Ht,
      J,
      { itemSets: 0, selectedIndex: 1 },
      null
    ), e && (e.target && b(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
  }
  static get observedAttributes() {
    return ["itemSets", "selectedIndex"];
  }
  get itemSets() {
    return this.$$.ctx[0];
  }
  set itemSets(e) {
    this.$$set({ itemSets: e }), $();
  }
  get selectedIndex() {
    return this.$$.ctx[1];
  }
  set selectedIndex(e) {
    this.$$set({ selectedIndex: e }), $();
  }
}
customElements.define("tscd-group-card-list", rt);
const Rt = `button{--padding: .5rem;display:inline-flex;place-items:center;padding:var(--padding) calc(var(--padding) * 2);font-family:inherit;gap:.5rem;justify-content:center;letter-spacing:2%;line-height:100%}button{background-color:#000;color:#fff;border-radius:4px;border:none;cursor:pointer;transition:all .1s ease-in-out}button:hover{background-color:gray;color:#000}button.block{width:100%}button.dangerous{color:red}button.primary{background-color:var(--color-blue-dark);color:var(--color-white);border:var(--color-blue-dark) thin solid}button.primary:hover{background-color:var(--color-blue);color:var(--color-yellow)}button.primary:disabled,button.primary:disabled:hover{background-color:var(--color-gray);color:var(--color-white)}button.primary:active{background-color:var(--color-blue-light);color:var(--color-black)}button.secondary{background-color:var(--color-white);color:var(--color-blue);border:black thin solid}button.secondary:hover{background-color:var(--color-blue-light)}button.dangerous:hover{background-color:red;color:#fff}
`;
function jt(t) {
  let e, r, n, l, o, s;
  return {
    c() {
      e = _("button"), r = F(
        /*label*/
        t[2]
      ), n = x(), l = _("style"), this.c = L, C(
        e,
        "class",
        /*type*/
        t[5]
      ), e.disabled = /*disabled*/
      t[4], C(
        e,
        "data-testid",
        /*testid*/
        t[3]
      ), he(
        e,
        "block",
        /*block*/
        t[0]
      ), he(
        e,
        "dangerous",
        /*dangerous*/
        t[1]
      );
    },
    m(i, c) {
      b(i, e, c), y(e, r), b(i, n, c), b(i, l, c), l.innerHTML = Rt, o || (s = se(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), o = !0);
    },
    p(i, [c]) {
      c & /*label*/
      4 && W(
        r,
        /*label*/
        i[2]
      ), c & /*type*/
      32 && C(
        e,
        "class",
        /*type*/
        i[5]
      ), c & /*disabled*/
      16 && (e.disabled = /*disabled*/
      i[4]), c & /*testid*/
      8 && C(
        e,
        "data-testid",
        /*testid*/
        i[3]
      ), c & /*type, block*/
      33 && he(
        e,
        "block",
        /*block*/
        i[0]
      ), c & /*type, dangerous*/
      34 && he(
        e,
        "dangerous",
        /*dangerous*/
        i[1]
      );
    },
    i: L,
    o: L,
    d(i) {
      i && k(e), i && k(n), i && k(l), o = !1, s();
    }
  };
}
function Bt(t, e, r) {
  let { block: n = !1 } = e, { dangerous: l = !1 } = e, { label: o } = e, { testid: s = "" } = e, { disabled: i = !1 } = e, { type: c = "primary" } = e;
  function u(a) {
    be.call(this, t, a);
  }
  return t.$$set = (a) => {
    "block" in a && r(0, n = a.block), "dangerous" in a && r(1, l = a.dangerous), "label" in a && r(2, o = a.label), "testid" in a && r(3, s = a.testid), "disabled" in a && r(4, i = a.disabled), "type" in a && r(5, c = a.type);
  }, [n, l, o, s, i, c, u];
}
class Ce extends X {
  constructor(e) {
    super(), ee(
      this,
      {
        target: this.shadowRoot,
        props: Z(this.attributes),
        customElement: !0
      },
      Bt,
      jt,
      J,
      {
        block: 0,
        dangerous: 1,
        label: 2,
        testid: 3,
        disabled: 4,
        type: 5
      },
      null
    ), e && (e.target && b(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
  }
  static get observedAttributes() {
    return ["block", "dangerous", "label", "testid", "disabled", "type"];
  }
  get block() {
    return this.$$.ctx[0];
  }
  set block(e) {
    this.$$set({ block: e }), $();
  }
  get dangerous() {
    return this.$$.ctx[1];
  }
  set dangerous(e) {
    this.$$set({ dangerous: e }), $();
  }
  get label() {
    return this.$$.ctx[2];
  }
  set label(e) {
    this.$$set({ label: e }), $();
  }
  get testid() {
    return this.$$.ctx[3];
  }
  set testid(e) {
    this.$$set({ testid: e }), $();
  }
  get disabled() {
    return this.$$.ctx[4];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), $();
  }
  get type() {
    return this.$$.ctx[5];
  }
  set type(e) {
    this.$$set({ type: e }), $();
  }
}
customElements.define("tscd-button", Ce);
const Ft = `checkbox label{display:flex;align-items:center;gap:.5rem}
`;
function Pt(t) {
  let e, r, n, l, o, s, i, c, u, a;
  return {
    c() {
      e = _("checkbox"), r = _("label"), n = _("input"), l = x(), o = _("span"), s = F(
        /*label*/
        t[1]
      ), i = x(), c = _("style"), this.c = L, C(n, "type", "checkbox"), C(
        e,
        "data-testid",
        /*testid*/
        t[2]
      );
    },
    m(g, p) {
      b(g, e, p), y(e, r), y(r, n), n.checked = /*checked*/
      t[0], y(r, l), y(r, o), y(o, s), b(g, i, p), b(g, c, p), c.innerHTML = Ft, u || (a = [
        se(
          n,
          "change",
          /*change_handler*/
          t[3]
        ),
        se(
          n,
          "input",
          /*input_handler*/
          t[4]
        ),
        se(
          n,
          "change",
          /*input_change_handler*/
          t[5]
        )
      ], u = !0);
    },
    p(g, [p]) {
      p & /*checked*/
      1 && (n.checked = /*checked*/
      g[0]), p & /*label*/
      2 && W(
        s,
        /*label*/
        g[1]
      ), p & /*testid*/
      4 && C(
        e,
        "data-testid",
        /*testid*/
        g[2]
      );
    },
    i: L,
    o: L,
    d(g) {
      g && k(e), g && k(i), g && k(c), u = !1, te(a);
    }
  };
}
function qt(t, e, r) {
  let { checked: n = !1 } = e, { label: l } = e, { testid: o = "" } = e;
  function s(u) {
    be.call(this, t, u);
  }
  function i(u) {
    be.call(this, t, u);
  }
  function c() {
    n = this.checked, r(0, n);
  }
  return t.$$set = (u) => {
    "checked" in u && r(0, n = u.checked), "label" in u && r(1, l = u.label), "testid" in u && r(2, o = u.testid);
  }, [n, l, o, s, i, c];
}
class nt extends X {
  constructor(e) {
    super(), ee(
      this,
      {
        target: this.shadowRoot,
        props: Z(this.attributes),
        customElement: !0
      },
      qt,
      Pt,
      J,
      { checked: 0, label: 1, testid: 2 },
      null
    ), e && (e.target && b(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
  }
  static get observedAttributes() {
    return ["checked", "label", "testid"];
  }
  get checked() {
    return this.$$.ctx[0];
  }
  set checked(e) {
    this.$$set({ checked: e }), $();
  }
  get label() {
    return this.$$.ctx[1];
  }
  set label(e) {
    this.$$set({ label: e }), $();
  }
  get testid() {
    return this.$$.ctx[2];
  }
  set testid(e) {
    this.$$set({ testid: e }), $();
  }
}
customElements.define("tscd-checkbox", nt);
const Qt = `merger{display:grid;height:100%;grid-template-rows:2fr auto;grid-template-columns:repeat(2,auto) 1fr;text-align:left;gap:.5rem}merger ul{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:.5rem}merger .action{grid-column:3/4;justify-self:left;padding:2rem}merger .structure{border-right:var(--color-black) thin solid;display:grid;grid-template-rows:auto 1fr}merger .structure ul{height:100%;overflow:auto}merger .list-container{border-right:var(--color-black) thin solid;display:grid;height:100%;grid-template-rows:auto auto 1fr}merger .list-container ul{height:100%;overflow:auto}merger .list{display:flex;flex-direction:column;gap:.5rem}merger>div{padding:.5rem}merger .select-all-container{margin-bottom:1rem;display:flex;justify-content:end}merger .action{display:flex;flex-direction:row;gap:.5rem;height:40px}merger .usage{height:100%;overflow:hidden;display:grid;grid-template-rows:1fr auto}merger .usage ul{height:100%;overflow:auto}
`;
function Fe(t, e, r) {
  const n = t.slice();
  return n[15] = e[r], n[17] = r, n;
}
function Pe(t, e, r) {
  const n = t.slice();
  return n[18] = e[r], n;
}
function qe(t, e, r) {
  const n = t.slice();
  return n[15] = e[r], n[17] = r, n;
}
function Qe(t, e, r) {
  const n = t.slice();
  return n[15] = e[r], n;
}
function Ue(t) {
  let e, r = (
    /*item*/
    t[15] + ""
  ), n;
  return {
    c() {
      e = _("li"), n = F(r);
    },
    m(l, o) {
      b(l, e, o), y(e, n);
    },
    p(l, o) {
      o & /*structure*/
      2 && r !== (r = /*item*/
      l[15] + "") && W(n, r);
    },
    d(l) {
      l && k(e);
    }
  };
}
function ze(t) {
  let e, r, n, l;
  function o(...s) {
    return (
      /*change_handler*/
      t[12](
        /*ii*/
        t[17],
        ...s
      )
    );
  }
  return r = new nt({
    props: {
      checked: (
        /*checkedIndexes*/
        t[2].has(
          /*ii*/
          t[17]
        )
      ),
      label: (
        /*item*/
        t[15].label
      ),
      testid: `merger_checkbox-${/*ii*/
      t[17]}`
    }
  }), r.$on("change", o), {
    c() {
      e = _("li"), Y(r.$$.fragment), n = x();
    },
    m(s, i) {
      b(s, e, i), z(r, e, null), y(e, n), l = !0;
    },
    p(s, i) {
      t = s;
      const c = {};
      i & /*checkedIndexes*/
      4 && (c.checked = /*checkedIndexes*/
      t[2].has(
        /*ii*/
        t[17]
      )), i & /*items*/
      1 && (c.label = /*item*/
      t[15].label), r.$set(c);
    },
    i(s) {
      l || (S(r.$$.fragment, s), l = !0);
    },
    o(s) {
      M(r.$$.fragment, s), l = !1;
    },
    d(s) {
      s && k(e), V(r);
    }
  };
}
function Ve(t) {
  let e, r = (
    /*lnType*/
    t[18].ln + ""
  ), n, l, o = (
    /*lnType*/
    t[18].dot + ""
  ), s, i;
  return {
    c() {
      e = _("li"), n = F(r), l = F(" ("), s = F(o), i = F(")");
    },
    m(c, u) {
      b(c, e, u), y(e, n), y(e, l), y(e, s), y(e, i);
    },
    p(c, u) {
      u & /*affectedLNTypes*/
      16 && r !== (r = /*lnType*/
      c[18].ln + "") && W(n, r), u & /*affectedLNTypes*/
      16 && o !== (o = /*lnType*/
      c[18].dot + "") && W(s, o);
    },
    d(c) {
      c && k(e);
    }
  };
}
function Je(t) {
  let e, r = (
    /*item*/
    t[15].label + ""
  ), n;
  return {
    c() {
      e = _("option"), n = F(r), e.__value = /*ii*/
      t[17], e.value = e.__value;
    },
    m(l, o) {
      b(l, e, o), y(e, n);
    },
    p(l, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      l[15].label + "") && W(n, r);
    },
    d(l) {
      l && k(e);
    }
  };
}
function Ut(t) {
  let e, r, n, l, o, s, i, c, u, a, g, p, m, h, w, G, I, E, v, A, T, H, re, Q, K, oe, me, Ee, Ne, ce = (
    /*structure*/
    t[1]
  ), R = [];
  for (let d = 0; d < ce.length; d += 1)
    R[d] = Ue(Qe(t, ce, d));
  g = new Ce({
    props: {
      label: "Select All",
      testid: "merger_select-all",
      type: "secondary"
    }
  }), g.$on(
    "click",
    /*handleSelectAll*/
    t[9]
  );
  let ne = (
    /*items*/
    t[0]
  ), N = [];
  for (let d = 0; d < ne.length; d += 1)
    N[d] = ze(qe(t, ne, d));
  const ct = (d) => M(N[d], 1, 1, () => {
    N[d] = null;
  });
  let ie = (
    /*affectedLNTypes*/
    t[4]
  ), j = [];
  for (let d = 0; d < ie.length; d += 1)
    j[d] = Ve(Pe(t, ie, d));
  let ue = (
    /*items*/
    t[0]
  ), B = [];
  for (let d = 0; d < ue.length; d += 1)
    B[d] = Je(Fe(t, ue, d));
  return Q = new Ce({
    props: {
      label: "Merge",
      block: !0,
      testid: "merger_button-merge",
      disabled: !/*isMergePossible*/
      t[5]
    }
  }), Q.$on(
    "click",
    /*handleMergeClick*/
    t[7]
  ), {
    c() {
      e = _("merger"), r = _("div"), n = _("h3"), n.textContent = "Structure", l = x(), o = _("ul");
      for (let d = 0; d < R.length; d += 1)
        R[d].c();
      s = x(), i = _("div"), c = _("h3"), c.textContent = "Duplicate DOTypes", u = x(), a = _("div"), Y(g.$$.fragment), p = x(), m = _("ul");
      for (let d = 0; d < N.length; d += 1)
        N[d].c();
      h = x(), w = _("div"), G = _("h3"), G.textContent = "Affected LN Types", I = x(), E = _("ul");
      for (let d = 0; d < j.length; d += 1)
        j[d].c();
      v = x(), A = _("div"), T = _("select"), H = _("option"), H.textContent = "Select a merge target";
      for (let d = 0; d < B.length; d += 1)
        B[d].c();
      re = x(), Y(Q.$$.fragment), K = x(), oe = _("style"), this.c = L, C(o, "class", "structure-list"), C(r, "class", "structure"), C(a, "class", "select-all-container"), C(m, "class", "list"), C(i, "class", "list-container"), C(w, "class", "usage"), H.__value = -1, H.value = H.__value, H.disabled = !0, H.selected = !0, C(T, "data-testid", "merger_merge-target"), C(A, "class", "action");
    },
    m(d, D) {
      b(d, e, D), y(e, r), y(r, n), y(r, l), y(r, o);
      for (let O = 0; O < R.length; O += 1)
        R[O].m(o, null);
      y(e, s), y(e, i), y(i, c), y(i, u), y(i, a), z(g, a, null), y(i, p), y(i, m);
      for (let O = 0; O < N.length; O += 1)
        N[O].m(m, null);
      y(e, h), y(e, w), y(w, G), y(w, I), y(w, E);
      for (let O = 0; O < j.length; O += 1)
        j[O].m(E, null);
      y(e, v), y(e, A), y(A, T), y(T, H);
      for (let O = 0; O < B.length; O += 1)
        B[O].m(T, null);
      Me(
        T,
        /*selectedMergeTargetIndex*/
        t[3]
      ), y(A, re), z(Q, A, null), b(d, K, D), b(d, oe, D), oe.innerHTML = Qt, me = !0, Ee || (Ne = se(
        T,
        "change",
        /*handleTargetInputChange*/
        t[8]
      ), Ee = !0);
    },
    p(d, [D]) {
      if (D & /*structure*/
      2) {
        ce = /*structure*/
        d[1];
        let f;
        for (f = 0; f < ce.length; f += 1) {
          const U = Qe(d, ce, f);
          R[f] ? R[f].p(U, D) : (R[f] = Ue(U), R[f].c(), R[f].m(o, null));
        }
        for (; f < R.length; f += 1)
          R[f].d(1);
        R.length = ce.length;
      }
      if (D & /*checkedIndexes, items, handleChange*/
      69) {
        ne = /*items*/
        d[0];
        let f;
        for (f = 0; f < ne.length; f += 1) {
          const U = qe(d, ne, f);
          N[f] ? (N[f].p(U, D), S(N[f], 1)) : (N[f] = ze(U), N[f].c(), S(N[f], 1), N[f].m(m, null));
        }
        for (_e(), f = ne.length; f < N.length; f += 1)
          ct(f);
        ye();
      }
      if (D & /*affectedLNTypes*/
      16) {
        ie = /*affectedLNTypes*/
        d[4];
        let f;
        for (f = 0; f < ie.length; f += 1) {
          const U = Pe(d, ie, f);
          j[f] ? j[f].p(U, D) : (j[f] = Ve(U), j[f].c(), j[f].m(E, null));
        }
        for (; f < j.length; f += 1)
          j[f].d(1);
        j.length = ie.length;
      }
      if (D & /*items*/
      1) {
        ue = /*items*/
        d[0];
        let f;
        for (f = 0; f < ue.length; f += 1) {
          const U = Fe(d, ue, f);
          B[f] ? B[f].p(U, D) : (B[f] = Je(U), B[f].c(), B[f].m(T, null));
        }
        for (; f < B.length; f += 1)
          B[f].d(1);
        B.length = ue.length;
      }
      (!me || D & /*selectedMergeTargetIndex*/
      8) && Me(
        T,
        /*selectedMergeTargetIndex*/
        d[3]
      );
      const O = {};
      D & /*isMergePossible*/
      32 && (O.disabled = !/*isMergePossible*/
      d[5]), Q.$set(O);
    },
    i(d) {
      if (!me) {
        S(g.$$.fragment, d);
        for (let D = 0; D < ne.length; D += 1)
          S(N[D]);
        S(Q.$$.fragment, d), me = !0;
      }
    },
    o(d) {
      M(g.$$.fragment, d), N = N.filter(Boolean);
      for (let D = 0; D < N.length; D += 1)
        M(N[D]);
      M(Q.$$.fragment, d), me = !1;
    },
    d(d) {
      d && k(e), fe(R, d), V(g), fe(N, d), fe(j, d), fe(B, d), V(Q), d && k(K), d && k(oe), Ee = !1, Ne();
    }
  };
}
function zt(t, e, r) {
  let n, l, o, { items: s = [] } = e, { structure: i = [] } = e;
  const c = Ze();
  let u = /* @__PURE__ */ new Set(), a = [];
  function g(E, v) {
    v.target.checked ? u.add(E) : u.delete(E), r(2, u);
  }
  function p(E) {
    const v = [];
    for (const A of E) {
      const T = s[A], H = T.usages;
      for (const re of H)
        v.push({ ln: re, dot: T.label });
    }
    return v;
  }
  function m(E) {
    const v = [...Array.from(u.values())];
    n && c("merge", {
      selectedIndexes: v,
      selectedMergeTargetIndex: h
    });
  }
  let h = -1;
  function w(E) {
    const A = E.target.value, T = parseInt(A);
    r(3, h = T);
  }
  function G(E) {
    E.target.checked, s.forEach((v, A) => u.add(A)), r(2, u);
  }
  const I = (E, v) => g(E, v);
  return t.$$set = (E) => {
    "items" in E && r(0, s = E.items), "structure" in E && r(1, i = E.structure);
  }, t.$$.update = () => {
    t.$$.dirty & /*checkedIndexes*/
    4 && r(4, a = p([...u.values()])), t.$$.dirty & /*checkedIndexes*/
    4 && r(10, o = u.size > 0), t.$$.dirty & /*selectedMergeTargetIndex*/
    8 && r(11, l = h > -1), t.$$.dirty & /*isSomeDuplicateSelected, isTargetSelected*/
    3072 && r(5, n = o && l);
  }, [
    s,
    i,
    u,
    h,
    a,
    n,
    g,
    m,
    w,
    G,
    o,
    l,
    I
  ];
}
class lt extends X {
  constructor(e) {
    super(), ee(
      this,
      {
        target: this.shadowRoot,
        props: Z(this.attributes),
        customElement: !0
      },
      zt,
      Ut,
      J,
      { items: 0, structure: 1 },
      null
    ), e && (e.target && b(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
  }
  static get observedAttributes() {
    return ["items", "structure"];
  }
  get items() {
    return this.$$.ctx[0];
  }
  set items(e) {
    this.$$set({ items: e }), $();
  }
  get structure() {
    return this.$$.ctx[1];
  }
  set structure(e) {
    this.$$set({ structure: e }), $();
  }
}
customElements.define("tscd-merger", lt);
const Vt = `:root,:host{--color-white: #FFFFFF;--color-white-dark: #f2f2f2;--color-yellow: #D9D800;--color-blue: #004552;--color-blue-dark: #14343e;--color-blue-1: #3253A8;--color-blue-light: #e5ecee;--color-torques: #007D80;--color-green: #288409;--color-black: #000000;--color-beige-1: burlywood;--color-beige-2: blanchedalmond;--color-pink: #C73C61;--color-grey-1: #626262;--color-grey-2: #808080;--color-grey-3: #bdbdbd;--color-primary: var(--color-yellow);--color-secondary: var(--color-blue);--color-text: var(--color-white);--color-text-disabled-1: rgba(0, 0, 0, .4);--border-radius: 4px;--letter-spacing: .2px;--font-family: "Avenir Next", sans-serif;--color-ied-focus: var(--color-beige-1);--color-ied-focus-hover: var(--color-beige-2);--color-button-group-default: #5F6E75;--color-button-group-selected: #004552;--color-message-goose: var(--color-green);--color-message-mms: var(--color-blue-1);--color-message-sampledvalues: var(--color-pink);--sidebar-width: 400px}:root,:host{font-family:var(--font-family);letter-spacing:var(--letter-spacing)}
`;
function Jt(t) {
  let e;
  return {
    c() {
      e = _("style"), this.c = L;
    },
    m(r, n) {
      b(r, e, n), e.innerHTML = Vt;
    },
    p: L,
    i: L,
    o: L,
    d(r) {
      r && k(e);
    }
  };
}
class st extends X {
  constructor(e) {
    super(), ee(
      this,
      {
        target: this.shadowRoot,
        props: Z(this.attributes),
        customElement: !0
      },
      null,
      Jt,
      J,
      {},
      null
    ), e && e.target && b(e.target, this, e.anchor);
  }
}
customElements.define("tscd-theme", st);
function Xe(t) {
  let e = (
    /*selectedGroupIndex*/
    t[0]
  ), r, n, l = Ke(t);
  return {
    c() {
      l.c(), r = ut();
    },
    m(o, s) {
      l.m(o, s), b(o, r, s), n = !0;
    },
    p(o, s) {
      s & /*selectedGroupIndex*/
      1 && J(e, e = /*selectedGroupIndex*/
      o[0]) ? (_e(), M(l, 1, 1, L), ye(), l = Ke(o), l.c(), S(l, 1), l.m(r.parentNode, r)) : l.p(o, s);
    },
    i(o) {
      n || (S(l), n = !0);
    },
    o(o) {
      M(l), n = !1;
    },
    d(o) {
      o && k(r), l.d(o);
    }
  };
}
function Ke(t) {
  let e, r;
  return e = new lt({
    props: {
      items: (
        /*itemSets*/
        t[2][
          /*selectedGroupIndex*/
          t[0]
        ]
      ),
      structure: (
        /*structure*/
        t[3]
      )
    }
  }), e.$on(
    "merge",
    /*handleMerge*/
    t[5]
  ), {
    c() {
      Y(e.$$.fragment);
    },
    m(n, l) {
      z(e, n, l), r = !0;
    },
    p(n, l) {
      const o = {};
      l & /*itemSets, selectedGroupIndex*/
      5 && (o.items = /*itemSets*/
      n[2][
        /*selectedGroupIndex*/
        n[0]
      ]), l & /*structure*/
      8 && (o.structure = /*structure*/
      n[3]), e.$set(o);
    },
    i(n) {
      r || (S(e.$$.fragment, n), r = !0);
    },
    o(n) {
      M(e.$$.fragment, n), r = !1;
    },
    d(n) {
      V(e, n);
    }
  };
}
function Xt(t) {
  let e, r, n, l, o, s, i, c, u, a, g;
  e = new st({}), s = new rt({
    props: {
      itemSets: (
        /*itemSets*/
        t[2].map(We)
      ),
      selectedIndex: (
        /*selectedGroupIndex*/
        t[0]
      )
    }
  }), s.$on(
    "select",
    /*handleGroupSelect*/
    t[4]
  );
  let p = (
    /*selectedGroupIndex*/
    t[0] > -1 && Xe(t)
  );
  return {
    c() {
      Y(e.$$.fragment), r = x(), n = _("dedupe"), l = _("layout"), o = _("sidebar"), Y(s.$$.fragment), i = x(), c = _("main"), p && p.c(), u = x(), a = _("style"), this.c = L;
    },
    m(m, h) {
      z(e, m, h), b(m, r, h), b(m, n, h), y(n, l), y(l, o), z(s, o, null), y(l, i), y(l, c), p && p.m(c, null), t[8](n), b(m, u, h), b(m, a, h), a.innerHTML = bt, g = !0;
    },
    p(m, [h]) {
      const w = {};
      h & /*itemSets*/
      4 && (w.itemSets = /*itemSets*/
      m[2].map(We)), h & /*selectedGroupIndex*/
      1 && (w.selectedIndex = /*selectedGroupIndex*/
      m[0]), s.$set(w), /*selectedGroupIndex*/
      m[0] > -1 ? p ? (p.p(m, h), h & /*selectedGroupIndex*/
      1 && S(p, 1)) : (p = Xe(m), p.c(), S(p, 1), p.m(c, null)) : p && (_e(), M(p, 1, 1, () => {
        p = null;
      }), ye());
    },
    i(m) {
      g || (S(e.$$.fragment, m), S(s.$$.fragment, m), S(p), g = !0);
    },
    o(m) {
      M(e.$$.fragment, m), M(s.$$.fragment, m), M(p), g = !1;
    },
    d(m) {
      V(e, m), m && k(r), m && k(n), V(s), p && p.d(), t[8](null), m && k(u), m && k(a);
    }
  };
}
function Kt(t) {
  const e = "_", r = t.element.parentElement;
  return r ? r.getAttribute("id") ?? e : e;
}
function Wt(t, e) {
  const r = { old: t, new: e };
  return new CustomEvent("editor-action", { detail: r });
}
const We = (t) => t.map((e) => e.label);
function Yt(t, e, r) {
  let { doc: n } = e, l, o, s;
  function i(v) {
    v && (l = new q(v), o = new St(l), u());
  }
  let c;
  async function u() {
    r(7, c = await o.findDuplicateObjectTypes());
  }
  let a = [];
  function g(v) {
    v && r(2, a = v.map((A) => A.map((T) => ({
      label: T.element.id,
      usages: T.usages.map(Kt)
    }))));
  }
  let p = -1;
  function m(v) {
    r(0, p = v.detail.index);
  }
  let h = [];
  function w(v, A) {
    if (A < 0)
      return;
    const H = v[A][0], Q = Array.from(H.element.element.children).map((K) => K.getAttribute("name") ?? "");
    r(3, h = Q.filter(Boolean));
  }
  function G(v) {
    const { selectedIndexes: A, selectedMergeTargetIndex: T } = v.detail, H = c[p], re = A.map((K) => H[K]), Q = H[T];
    re.forEach((K) => {
      K.usages.forEach((oe) => {
        I(oe, Q.element);
      });
    });
  }
  function I(v, A) {
    const T = v.element.cloneNode(!0);
    v.element.getAttribute("type"), T.setAttribute("type", A.id), v.element.getAttribute("type");
    const H = Wt(v.element, T);
    s.dispatchEvent(H);
  }
  function E(v) {
    Ae[v ? "unshift" : "push"](() => {
      s = v, r(1, s);
    });
  }
  return t.$$set = (v) => {
    "doc" in v && r(6, n = v.doc);
  }, t.$$.update = () => {
    t.$$.dirty & /*doc*/
    64 && i(n), t.$$.dirty & /*duplicateGroups*/
    128 && g(c), t.$$.dirty & /*duplicateGroups, selectedGroupIndex*/
    129 && w(c, p);
  }, [
    p,
    s,
    a,
    h,
    m,
    G,
    n,
    c,
    E
  ];
}
class ot extends X {
  constructor(e) {
    super(), ee(
      this,
      {
        target: this.shadowRoot,
        props: Z(this.attributes),
        customElement: !0
      },
      Yt,
      Xt,
      J,
      { doc: 6 },
      null
    ), e && (e.target && b(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
  }
  static get observedAttributes() {
    return ["doc"];
  }
  get doc() {
    return this.$$.ctx[6];
  }
  set doc(e) {
    this.$$set({ doc: e }), $();
  }
}
customElements.define("tscd-dedupe", ot);
const Zt = "@oscd-plugins/dedupe", er = "0.0.3";
function Ye(t) {
  var n;
  let e, r;
  return e = new ot({
    props: { doc: (
      /*doc*/
      (n = t[0]) == null ? void 0 : n.documentElement
    ) }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, o) {
      z(e, l, o), r = !0;
    },
    p(l, o) {
      var i;
      const s = {};
      o & /*doc*/
      1 && (s.doc = /*doc*/
      (i = l[0]) == null ? void 0 : i.documentElement), e.$set(s);
    },
    i(l) {
      r || (S(e.$$.fragment, l), r = !0);
    },
    o(l) {
      M(e.$$.fragment, l), r = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function tr(t) {
  let e, r, n, l, o, s = (
    /*doc*/
    t[0] && Ye(t)
  );
  return {
    c() {
      s && s.c(), e = x(), r = _("input"), n = x(), l = _("input"), this.c = L, C(r, "type", "hidden"), C(r, "name", "package-name"), r.value = Zt, C(l, "type", "hidden"), C(l, "name", "package-version"), l.value = er;
    },
    m(i, c) {
      s && s.m(i, c), b(i, e, c), b(i, r, c), b(i, n, c), b(i, l, c), o = !0;
    },
    p(i, [c]) {
      /*doc*/
      i[0] ? s ? (s.p(i, c), c & /*doc*/
      1 && S(s, 1)) : (s = Ye(i), s.c(), S(s, 1), s.m(e.parentNode, e)) : s && (_e(), M(s, 1, 1, () => {
        s = null;
      }), ye());
    },
    i(i) {
      o || (S(s), o = !0);
    },
    o(i) {
      M(s), o = !1;
    },
    d(i) {
      s && s.d(i), i && k(e), i && k(r), i && k(n), i && k(l);
    }
  };
}
function rr(t, e, r) {
  let { doc: n } = e;
  return t.$$set = (l) => {
    "doc" in l && r(0, n = l.doc);
  }, [n];
}
class nr extends X {
  constructor(e) {
    super(), ee(
      this,
      {
        target: this.shadowRoot,
        props: Z(this.attributes),
        customElement: !0
      },
      rr,
      tr,
      J,
      { doc: 0 },
      null
    ), e && (e.target && b(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
  }
  static get observedAttributes() {
    return ["doc"];
  }
  get doc() {
    return this.$$.ctx[0];
  }
  set doc(e) {
    this.$$set({ doc: e }), $();
  }
}
export {
  nr as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVAMy41NS4xL25vZGVfbW9kdWxlcy9zdmVsdGUvaW50ZXJuYWwvaW5kZXgubWpzIiwiLi4vLi4vLi4vY29yZS9zcmMvc2NkL3NjZC1xdWVyeS50cyIsIi4uLy4uLy4uL2NvcmUvc3JjL3htbC9kZXNjcmliZXJzLnRzIiwiLi4vLi4vLi4vY29yZS9zcmMveG1sL2hhc2gudHMiLCIuLi8uLi8uLi9jb3JlL3NyYy91c2UtY2FzZXMvdWMtdHlwZS1kZWR1cGUudHMiLCIuLi8uLi8uLi91aWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLnN2ZWx0ZSIsIi4uLy4uLy4uL3VpbGliL3NyYy9saWIvcGx1Z2lucy9kZWR1cGUvZ3JvdXAtY2FyZC9ncm91cC1jYXJkLnN2ZWx0ZSIsIi4uLy4uLy4uL3VpbGliL3NyYy9saWIvcGx1Z2lucy9kZWR1cGUvZ3JvdXAtY2FyZC1saXN0L2dyb3VwLWNhcmQtbGlzdC5zdmVsdGUiLCIuLi8uLi8uLi91aWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5zdmVsdGUiLCIuLi8uLi8uLi91aWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guc3ZlbHRlIiwiLi4vLi4vLi4vdWlsaWIvc3JjL2xpYi9wbHVnaW5zL2RlZHVwZS9tZXJnZXIvbWVyZ2VyLnN2ZWx0ZSIsIi4uLy4uLy4uL3VpbGliL3NyYy9saWIvc3R5bGUvdGhlbWUuc3ZlbHRlIiwiLi4vLi4vLi4vdWlsaWIvc3JjL2xpYi9wbHVnaW5zL2RlZHVwZS9kZWR1cGUuc3ZlbHRlIiwiLi4vc3JjL3BsdWdpbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9MSUNFTlNFXG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGFkZF9sb2NhdGlvbihlbGVtZW50LCBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIpIHtcbiAgICBlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG4gICAgICAgIGxvYzogeyBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIgfVxuICAgIH07XG59XG5mdW5jdGlvbiBydW4oZm4pIHtcbiAgICByZXR1cm4gZm4oKTtcbn1cbmZ1bmN0aW9uIGJsYW5rX29iamVjdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cbmZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG4gICAgZm5zLmZvckVhY2gocnVuKTtcbn1cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIHNhZmVfbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5sZXQgc3JjX3VybF9lcXVhbF9hbmNob3I7XG5mdW5jdGlvbiBzcmNfdXJsX2VxdWFsKGVsZW1lbnRfc3JjLCB1cmwpIHtcbiAgICBpZiAoIXNyY191cmxfZXF1YWxfYW5jaG9yKSB7XG4gICAgICAgIHNyY191cmxfZXF1YWxfYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIH1cbiAgICBzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmID0gdXJsO1xuICAgIHJldHVybiBlbGVtZW50X3NyYyA9PT0gc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZjtcbn1cbmZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5mdW5jdGlvbiBpc19lbXB0eShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuICAgIGlmIChzdG9yZSAhPSBudWxsICYmIHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgaXMgbm90IGEgc3RvcmUgd2l0aCBhICdzdWJzY3JpYmUnIG1ldGhvZGApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgaWYgKHN0b3JlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfVxuICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG4gICAgcmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuZnVuY3Rpb24gZ2V0X3N0b3JlX3ZhbHVlKHN0b3JlKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHN1YnNjcmliZShzdG9yZSwgXyA9PiB2YWx1ZSA9IF8pKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xufVxuZnVuY3Rpb24gY3JlYXRlX3Nsb3QoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY3R4ID0gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKTtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25bMF0oc2xvdF9jdHgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIHJldHVybiBkZWZpbml0aW9uWzFdICYmIGZuXG4gICAgICAgID8gYXNzaWduKCQkc2NvcGUuY3R4LnNsaWNlKCksIGRlZmluaXRpb25bMV0oZm4oY3R4KSkpXG4gICAgICAgIDogJCRzY29wZS5jdHg7XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uWzJdICYmIGZuKSB7XG4gICAgICAgIGNvbnN0IGxldHMgPSBkZWZpbml0aW9uWzJdKGZuKGRpcnR5KSk7XG4gICAgICAgIGlmICgkJHNjb3BlLmRpcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBsZXRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgoJCRzY29wZS5kaXJ0eS5sZW5ndGgsIGxldHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRbaV0gPSAkJHNjb3BlLmRpcnR5W2ldIHwgbGV0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQkc2NvcGUuZGlydHkgfCBsZXRzO1xuICAgIH1cbiAgICByZXR1cm4gJCRzY29wZS5kaXJ0eTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90X2Jhc2Uoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIHNsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGlmIChzbG90X2NoYW5nZXMpIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jb250ZXh0ID0gZ2V0X3Nsb3RfY29udGV4dChzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG4gICAgICAgIHNsb3QucChzbG90X2NvbnRleHQsIHNsb3RfY2hhbmdlcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX3Nsb3Qoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuLCBnZXRfc2xvdF9jb250ZXh0X2ZuKSB7XG4gICAgY29uc3Qgc2xvdF9jaGFuZ2VzID0gZ2V0X3Nsb3RfY2hhbmdlcyhzbG90X2RlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuKTtcbiAgICB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pO1xufVxuZnVuY3Rpb24gZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlKCQkc2NvcGUpIHtcbiAgICBpZiAoJCRzY29wZS5jdHgubGVuZ3RoID4gMzIpIHtcbiAgICAgICAgY29uc3QgZGlydHkgPSBbXTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gJCRzY29wZS5jdHgubGVuZ3RoIC8gMzI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRpcnR5W2ldID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBleGNsdWRlX2ludGVybmFsX3Byb3BzKHByb3BzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoa1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdWx0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfcmVzdF9wcm9wcyhwcm9wcywga2V5cykge1xuICAgIGNvbnN0IHJlc3QgPSB7fTtcbiAgICBrZXlzID0gbmV3IFNldChrZXlzKTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmICgha2V5cy5oYXMoaykgJiYga1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9zbG90cyhzbG90cykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNsb3RzKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBsZXQgcmFuID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmIChyYW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJhbiA9IHRydWU7XG4gICAgICAgIGZuLmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG51bGxfdG9fZW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfc3RvcmVfdmFsdWUoc3RvcmUsIHJldCwgdmFsdWUpIHtcbiAgICBzdG9yZS5zZXQodmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG59XG5jb25zdCBoYXNfcHJvcCA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xuZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG4gICAgcmV0dXJuIGFjdGlvbl9yZXN1bHQgJiYgaXNfZnVuY3Rpb24oYWN0aW9uX3Jlc3VsdC5kZXN0cm95KSA/IGFjdGlvbl9yZXN1bHQuZGVzdHJveSA6IG5vb3A7XG59XG5cbmNvbnN0IGlzX2NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xubGV0IG5vdyA9IGlzX2NsaWVudFxuICAgID8gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xubGV0IHJhZiA9IGlzX2NsaWVudCA/IGNiID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgOiBub29wO1xuLy8gdXNlZCBpbnRlcm5hbGx5IGZvciB0ZXN0aW5nXG5mdW5jdGlvbiBzZXRfbm93KGZuKSB7XG4gICAgbm93ID0gZm47XG59XG5mdW5jdGlvbiBzZXRfcmFmKGZuKSB7XG4gICAgcmFmID0gZm47XG59XG5cbmNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gcnVuX3Rhc2tzKG5vdykge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICghdGFzay5jKG5vdykpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRhc2suZigpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tzLnNpemUgIT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xufVxuLyoqXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5IVxuICovXG5mdW5jdGlvbiBjbGVhcl9sb29wcygpIHtcbiAgICB0YXNrcy5jbGVhcigpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHRhc2sgdGhhdCBydW5zIG9uIGVhY2ggcmFmIGZyYW1lXG4gKiB1bnRpbCBpdCByZXR1cm5zIGEgZmFsc3kgdmFsdWUgb3IgaXMgYWJvcnRlZFxuICovXG5mdW5jdGlvbiBsb29wKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKHRhc2tzLnNpemUgPT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bGZpbGwgPT4ge1xuICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyBUcmFjayB3aGljaCBub2RlcyBhcmUgY2xhaW1lZCBkdXJpbmcgaHlkcmF0aW9uLiBVbmNsYWltZWQgbm9kZXMgY2FuIHRoZW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET01cbi8vIGF0IHRoZSBlbmQgb2YgaHlkcmF0aW9uIHdpdGhvdXQgdG91Y2hpbmcgdGhlIHJlbWFpbmluZyBub2Rlcy5cbmxldCBpc19oeWRyYXRpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHN0YXJ0X2h5ZHJhdGluZygpIHtcbiAgICBpc19oeWRyYXRpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5kX2h5ZHJhdGluZygpIHtcbiAgICBpc19oeWRyYXRpbmcgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIHVwcGVyX2JvdW5kKGxvdywgaGlnaCwga2V5LCB2YWx1ZSkge1xuICAgIC8vIFJldHVybiBmaXJzdCBpbmRleCBvZiB2YWx1ZSBsYXJnZXIgdGhhbiBpbnB1dCB2YWx1ZSBpbiB0aGUgcmFuZ2UgW2xvdywgaGlnaClcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgICBjb25zdCBtaWQgPSBsb3cgKyAoKGhpZ2ggLSBsb3cpID4+IDEpO1xuICAgICAgICBpZiAoa2V5KG1pZCkgPD0gdmFsdWUpIHtcbiAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoaWdoID0gbWlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG59XG5mdW5jdGlvbiBpbml0X2h5ZHJhdGUodGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldC5oeWRyYXRlX2luaXQpXG4gICAgICAgIHJldHVybjtcbiAgICB0YXJnZXQuaHlkcmF0ZV9pbml0ID0gdHJ1ZTtcbiAgICAvLyBXZSBrbm93IHRoYXQgYWxsIGNoaWxkcmVuIGhhdmUgY2xhaW1fb3JkZXIgdmFsdWVzIHNpbmNlIHRoZSB1bmNsYWltZWQgaGF2ZSBiZWVuIGRldGFjaGVkIGlmIHRhcmdldCBpcyBub3QgPGhlYWQ+XG4gICAgbGV0IGNoaWxkcmVuID0gdGFyZ2V0LmNoaWxkTm9kZXM7XG4gICAgLy8gSWYgdGFyZ2V0IGlzIDxoZWFkPiwgdGhlcmUgbWF5IGJlIGNoaWxkcmVuIHdpdGhvdXQgY2xhaW1fb3JkZXJcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSEVBRCcpIHtcbiAgICAgICAgY29uc3QgbXlDaGlsZHJlbiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbXlDaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuID0gbXlDaGlsZHJlbjtcbiAgICB9XG4gICAgLypcbiAgICAqIFJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkuXG4gICAgKiBXZSBjYW4gcmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseSBieSBmaW5kaW5nIHRoZSBsb25nZXN0IHN1YnNlcXVlbmNlIG9mXG4gICAgKiBub2RlcyB0aGF0IGFyZSBhbHJlYWR5IGNsYWltZWQgaW4gb3JkZXIgYW5kIG9ubHkgbW92aW5nIHRoZSByZXN0LiBUaGUgbG9uZ2VzdFxuICAgICogc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgdGhhdCBhcmUgY2xhaW1lZCBpbiBvcmRlciBjYW4gYmUgZm91bmQgYnlcbiAgICAqIGNvbXB1dGluZyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIC5jbGFpbV9vcmRlciB2YWx1ZXMuXG4gICAgKlxuICAgICogVGhpcyBhbGdvcml0aG0gaXMgb3B0aW1hbCBpbiBnZW5lcmF0aW5nIHRoZSBsZWFzdCBhbW91bnQgb2YgcmVvcmRlciBvcGVyYXRpb25zXG4gICAgKiBwb3NzaWJsZS5cbiAgICAqXG4gICAgKiBQcm9vZjpcbiAgICAqIFdlIGtub3cgdGhhdCwgZ2l2ZW4gYSBzZXQgb2YgcmVvcmRlcmluZyBvcGVyYXRpb25zLCB0aGUgbm9kZXMgdGhhdCBkbyBub3QgbW92ZVxuICAgICogYWx3YXlzIGZvcm0gYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSwgc2luY2UgdGhleSBkbyBub3QgbW92ZSBhbW9uZyBlYWNoIG90aGVyXG4gICAgKiBtZWFuaW5nIHRoYXQgdGhleSBtdXN0IGJlIGFscmVhZHkgb3JkZXJlZCBhbW9uZyBlYWNoIG90aGVyLiBUaHVzLCB0aGUgbWF4aW1hbFxuICAgICogc2V0IG9mIG5vZGVzIHRoYXQgZG8gbm90IG1vdmUgZm9ybSBhIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZS5cbiAgICAqL1xuICAgIC8vIENvbXB1dGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG4gICAgLy8gbTogc3Vic2VxdWVuY2UgbGVuZ3RoIGogPT4gaW5kZXggayBvZiBzbWFsbGVzdCB2YWx1ZSB0aGF0IGVuZHMgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBsZW5ndGggalxuICAgIGNvbnN0IG0gPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAvLyBQcmVkZWNlc3NvciBpbmRpY2VzICsgMVxuICAgIGNvbnN0IHAgPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGgpO1xuICAgIG1bMF0gPSAtMTtcbiAgICBsZXQgbG9uZ2VzdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gY2hpbGRyZW5baV0uY2xhaW1fb3JkZXI7XG4gICAgICAgIC8vIEZpbmQgdGhlIGxhcmdlc3Qgc3Vic2VxdWVuY2UgbGVuZ3RoIHN1Y2ggdGhhdCBpdCBlbmRzIGluIGEgdmFsdWUgbGVzcyB0aGFuIG91ciBjdXJyZW50IHZhbHVlXG4gICAgICAgIC8vIHVwcGVyX2JvdW5kIHJldHVybnMgZmlyc3QgZ3JlYXRlciB2YWx1ZSwgc28gd2Ugc3VidHJhY3Qgb25lXG4gICAgICAgIC8vIHdpdGggZmFzdCBwYXRoIGZvciB3aGVuIHdlIGFyZSBvbiB0aGUgY3VycmVudCBsb25nZXN0IHN1YnNlcXVlbmNlXG4gICAgICAgIGNvbnN0IHNlcUxlbiA9ICgobG9uZ2VzdCA+IDAgJiYgY2hpbGRyZW5bbVtsb25nZXN0XV0uY2xhaW1fb3JkZXIgPD0gY3VycmVudCkgPyBsb25nZXN0ICsgMSA6IHVwcGVyX2JvdW5kKDEsIGxvbmdlc3QsIGlkeCA9PiBjaGlsZHJlblttW2lkeF1dLmNsYWltX29yZGVyLCBjdXJyZW50KSkgLSAxO1xuICAgICAgICBwW2ldID0gbVtzZXFMZW5dICsgMTtcbiAgICAgICAgY29uc3QgbmV3TGVuID0gc2VxTGVuICsgMTtcbiAgICAgICAgLy8gV2UgY2FuIGd1YXJhbnRlZSB0aGF0IGN1cnJlbnQgaXMgdGhlIHNtYWxsZXN0IHZhbHVlLiBPdGhlcndpc2UsIHdlIHdvdWxkIGhhdmUgZ2VuZXJhdGVkIGEgbG9uZ2VyIHNlcXVlbmNlLlxuICAgICAgICBtW25ld0xlbl0gPSBpO1xuICAgICAgICBsb25nZXN0ID0gTWF0aC5tYXgobmV3TGVuLCBsb25nZXN0KTtcbiAgICB9XG4gICAgLy8gVGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBub2RlcyAoaW5pdGlhbGx5IHJldmVyc2VkKVxuICAgIGNvbnN0IGxpcyA9IFtdO1xuICAgIC8vIFRoZSByZXN0IG9mIHRoZSBub2Rlcywgbm9kZXMgdGhhdCB3aWxsIGJlIG1vdmVkXG4gICAgY29uc3QgdG9Nb3ZlID0gW107XG4gICAgbGV0IGxhc3QgPSBjaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIGZvciAobGV0IGN1ciA9IG1bbG9uZ2VzdF0gKyAxOyBjdXIgIT0gMDsgY3VyID0gcFtjdXIgLSAxXSkge1xuICAgICAgICBsaXMucHVzaChjaGlsZHJlbltjdXIgLSAxXSk7XG4gICAgICAgIGZvciAoOyBsYXN0ID49IGN1cjsgbGFzdC0tKSB7XG4gICAgICAgICAgICB0b01vdmUucHVzaChjaGlsZHJlbltsYXN0XSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdC0tO1xuICAgIH1cbiAgICBmb3IgKDsgbGFzdCA+PSAwOyBsYXN0LS0pIHtcbiAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgIH1cbiAgICBsaXMucmV2ZXJzZSgpO1xuICAgIC8vIFdlIHNvcnQgdGhlIG5vZGVzIGJlaW5nIG1vdmVkIHRvIGd1YXJhbnRlZSB0aGF0IHRoZWlyIGluc2VydGlvbiBvcmRlciBtYXRjaGVzIHRoZSBjbGFpbSBvcmRlclxuICAgIHRvTW92ZS5zb3J0KChhLCBiKSA9PiBhLmNsYWltX29yZGVyIC0gYi5jbGFpbV9vcmRlcik7XG4gICAgLy8gRmluYWxseSwgd2UgbW92ZSB0aGUgbm9kZXNcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0b01vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd2hpbGUgKGogPCBsaXMubGVuZ3RoICYmIHRvTW92ZVtpXS5jbGFpbV9vcmRlciA+PSBsaXNbal0uY2xhaW1fb3JkZXIpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbmNob3IgPSBqIDwgbGlzLmxlbmd0aCA/IGxpc1tqXSA6IG51bGw7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUodG9Nb3ZlW2ldLCBhbmNob3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfc3R5bGVzKHRhcmdldCwgc3R5bGVfc2hlZXRfaWQsIHN0eWxlcykge1xuICAgIGNvbnN0IGFwcGVuZF9zdHlsZXNfdG8gPSBnZXRfcm9vdF9mb3Jfc3R5bGUodGFyZ2V0KTtcbiAgICBpZiAoIWFwcGVuZF9zdHlsZXNfdG8uZ2V0RWxlbWVudEJ5SWQoc3R5bGVfc2hlZXRfaWQpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUuaWQgPSBzdHlsZV9zaGVldF9pZDtcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZXM7XG4gICAgICAgIGFwcGVuZF9zdHlsZXNoZWV0KGFwcGVuZF9zdHlsZXNfdG8sIHN0eWxlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSkge1xuICAgIGlmICghbm9kZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlID8gbm9kZS5nZXRSb290Tm9kZSgpIDogbm9kZS5vd25lckRvY3VtZW50O1xuICAgIGlmIChyb290ICYmIHJvb3QuaG9zdCkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZV9lbGVtZW50ID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICBhcHBlbmRfc3R5bGVzaGVldChnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSksIHN0eWxlX2VsZW1lbnQpO1xuICAgIHJldHVybiBzdHlsZV9lbGVtZW50LnNoZWV0O1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlc2hlZXQobm9kZSwgc3R5bGUpIHtcbiAgICBhcHBlbmQobm9kZS5oZWFkIHx8IG5vZGUsIHN0eWxlKTtcbiAgICByZXR1cm4gc3R5bGUuc2hlZXQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuICAgIGlmIChpc19oeWRyYXRpbmcpIHtcbiAgICAgICAgaW5pdF9oeWRyYXRlKHRhcmdldCk7XG4gICAgICAgIGlmICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCkgfHwgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudE5vZGUgIT09IHRhcmdldCkpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG4gICAgICAgIHdoaWxlICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5jbGFpbV9vcmRlciA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSAhPT0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpIHtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgaW5zZXJ0IGlmIHRoZSBvcmRlcmluZyBvZiB0aGlzIG5vZGUgc2hvdWxkIGJlIG1vZGlmaWVkIG9yIHRoZSBwYXJlbnQgbm9kZSBpcyBub3QgdGFyZ2V0XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkIHx8IG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZyAmJiAhYW5jaG9yKSB7XG4gICAgICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoaGFzX3Byb3Aob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZWxmKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJ1c3RlZChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQuaXNUcnVzdGVkKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwKG5vZGUsIGRhdGFfbWFwKSB7XG4gICAgT2JqZWN0LmtleXMoZGF0YV9tYXApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YShub2RlLCBrZXksIGRhdGFfbWFwW2tleV0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgIHZhbHVlLmRlbGV0ZShfX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG4gICAgaWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzTm9kZSwgY3JlYXRlTm9kZSwgZG9udFVwZGF0ZUxhc3RJbmRleCA9IGZhbHNlKSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSAoKCkgPT4ge1xuICAgICAgICAvLyBXZSBmaXJzdCB0cnkgdG8gZmluZCBhbiBlbGVtZW50IGFmdGVyIHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSB0cnkgdG8gZmluZCBvbmUgYmVmb3JlXG4gICAgICAgIC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIHNwbGljZWQgYmVmb3JlIHRoZSBsYXN0X2luZGV4LCB3ZSBkZWNyZWFzZSBpdFxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICByZXR1cm4gY3JlYXRlTm9kZSgpO1xuICAgIH0pKCk7XG4gICAgcmVzdWx0Tm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmUuZm9yRWFjaCh2ID0+IG5vZGUucmVtb3ZlQXR0cmlidXRlKHYpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCAoKSA9PiBjcmVhdGVfZWxlbWVudChuYW1lKSk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Z19lbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSAnJyArIGRhdGE7XG4gICAgICAgIGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhU3RyKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFTdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGFTdHI7XG4gICAgICAgIH1cbiAgICB9LCAoKSA9PiB0ZXh0KGRhdGEpLCB0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuICAgICk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gZmluZF9jb21tZW50KG5vZGVzLCB0ZXh0LCBzdGFydCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoO1xufVxuZnVuY3Rpb24gY2xhaW1faHRtbF90YWcobm9kZXMsIGlzX3N2Zykge1xuICAgIC8vIGZpbmQgaHRtbCBvcGVuaW5nIHRhZ1xuICAgIGNvbnN0IHN0YXJ0X2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfU1RBUlQnLCAwKTtcbiAgICBjb25zdCBlbmRfaW5kZXggPSBmaW5kX2NvbW1lbnQobm9kZXMsICdIVE1MX1RBR19FTkQnLCBzdGFydF9pbmRleCk7XG4gICAgaWYgKHN0YXJ0X2luZGV4ID09PSBlbmRfaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKHVuZGVmaW5lZCwgaXNfc3ZnKTtcbiAgICB9XG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCBodG1sX3RhZ19ub2RlcyA9IG5vZGVzLnNwbGljZShzdGFydF9pbmRleCwgZW5kX2luZGV4IC0gc3RhcnRfaW5kZXggKyAxKTtcbiAgICBkZXRhY2goaHRtbF90YWdfbm9kZXNbMF0pO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1todG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxXSk7XG4gICAgY29uc3QgY2xhaW1lZF9ub2RlcyA9IGh0bWxfdGFnX25vZGVzLnNsaWNlKDEsIGh0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDEpO1xuICAgIGZvciAoY29uc3QgbiBvZiBjbGFpbWVkX25vZGVzKSB7XG4gICAgICAgIG4uY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgICAgIG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oY2xhaW1lZF9ub2RlcywgaXNfc3ZnKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuICAgIGNvbnN0IGNvbXB1dGVkX3N0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ICcgK1xuICAgICAgICAnb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwOyBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3Rlbih3aW5kb3csICdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdylcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFwcGVuZChub2RlLCBpZnJhbWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXRhY2goaWZyYW1lKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBidWJibGVzID0gZmFsc2UsIGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgYnViYmxlcywgY2FuY2VsYWJsZSwgZGV0YWlsKTtcbiAgICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIHF1ZXJ5X3NlbGVjdG9yX2FsbChzZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5mdW5jdGlvbiBoZWFkX3NlbGVjdG9yKG5vZGVJZCwgaGVhZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBzdGFydGVkID0gMDtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaGVhZC5jaGlsZE5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLykge1xuICAgICAgICAgICAgY29uc3QgY29tbWVudCA9IG5vZGUudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgaWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9FTkRgKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRlZCAtPSAxO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWVudCA9PT0gYEhFQURfJHtub2RlSWR9X1NUQVJUYCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydGVkID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmNsYXNzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGlzX3N2ZyA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNfc3ZnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNfc3ZnID0gaXNfc3ZnO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgIH1cbiAgICBtKGh0bWwsIHRhcmdldCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNfc3ZnKVxuICAgICAgICAgICAgICAgIHRoaXMuZSA9IHN2Z19lbGVtZW50KHRhcmdldC5ub2RlTmFtZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5lID0gZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jKGh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaShhbmNob3IpO1xuICAgIH1cbiAgICBoKGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHAoaHRtbCkge1xuICAgICAgICB0aGlzLmQoKTtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgICAgICB0aGlzLmkodGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5jbGFzcyBIdG1sVGFnSHlkcmF0aW9uIGV4dGVuZHMgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoY2xhaW1lZF9ub2RlcywgaXNfc3ZnID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoaXNfc3ZnKTtcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICAgICAgdGhpcy5sID0gY2xhaW1lZF9ub2RlcztcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIGlmICh0aGlzLmwpIHtcbiAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLmMoaHRtbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaShhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydF9oeWRyYXRpb24odGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVfdG9fb2JqZWN0KGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJlc3VsdFthdHRyaWJ1dGUubmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzKGVsZW1lbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBlbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICByZXN1bHRbbm9kZS5zbG90IHx8ICdkZWZhdWx0J10gPSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb25zdHJ1Y3Rfc3ZlbHRlX2NvbXBvbmVudChjb21wb25lbnQsIHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBjb21wb25lbnQocHJvcHMpO1xufVxuXG4vLyB3ZSBuZWVkIHRvIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiBmb3IgbXVsdGlwbGUgZG9jdW1lbnRzIGJlY2F1c2UgYSBTdmVsdGUgYXBwbGljYXRpb24gY291bGQgYWxzbyBjb250YWluIGlmcmFtZXNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzM2MjRcbmNvbnN0IG1hbmFnZWRfc3R5bGVzID0gbmV3IE1hcCgpO1xubGV0IGFjdGl2ZSA9IDA7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBoYXNoID4+PiAwO1xufVxuZnVuY3Rpb24gY3JlYXRlX3N0eWxlX2luZm9ybWF0aW9uKGRvYywgbm9kZSkge1xuICAgIGNvbnN0IGluZm8gPSB7IHN0eWxlc2hlZXQ6IGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpLCBydWxlczoge30gfTtcbiAgICBtYW5hZ2VkX3N0eWxlcy5zZXQoZG9jLCBpbmZvKTtcbiAgICByZXR1cm4gaW5mbztcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcbiAgICBjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG4gICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcbiAgICAgICAgY29uc3QgdCA9IGEgKyAoYiAtIGEpICogZWFzZShwKTtcbiAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICB9XG4gICAgY29uc3QgcnVsZSA9IGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIsIDEgLSBiKX19XFxufWA7XG4gICAgY29uc3QgbmFtZSA9IGBfX3N2ZWx0ZV8ke2hhc2gocnVsZSl9XyR7dWlkfWA7XG4gICAgY29uc3QgZG9jID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHsgc3R5bGVzaGVldCwgcnVsZXMgfSA9IG1hbmFnZWRfc3R5bGVzLmdldChkb2MpIHx8IGNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbihkb2MsIG5vZGUpO1xuICAgIGlmICghcnVsZXNbbmFtZV0pIHtcbiAgICAgICAgcnVsZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICBzdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcbiAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IGAke2FuaW1hdGlvbiA/IGAke2FuaW1hdGlvbn0sIGAgOiAnJ30ke25hbWV9ICR7ZHVyYXRpb259bXMgbGluZWFyICR7ZGVsYXl9bXMgMSBib3RoYDtcbiAgICBhY3RpdmUgKz0gMTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICBjb25zdCBwcmV2aW91cyA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgbmV4dCA9IHByZXZpb3VzLmZpbHRlcihuYW1lXG4gICAgICAgID8gYW5pbSA9PiBhbmltLmluZGV4T2YobmFtZSkgPCAwIC8vIHJlbW92ZSBzcGVjaWZpYyBhbmltYXRpb25cbiAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX19zdmVsdGUnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgICk7XG4gICAgY29uc3QgZGVsZXRlZCA9IHByZXZpb3VzLmxlbmd0aCAtIG5leHQubGVuZ3RoO1xuICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbmV4dC5qb2luKCcsICcpO1xuICAgICAgICBhY3RpdmUgLT0gZGVsZXRlZDtcbiAgICAgICAgaWYgKCFhY3RpdmUpXG4gICAgICAgICAgICBjbGVhcl9ydWxlcygpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG1hbmFnZWRfc3R5bGVzLmZvckVhY2goaW5mbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IG93bmVyTm9kZSB9ID0gaW5mby5zdHlsZXNoZWV0O1xuICAgICAgICAgICAgLy8gdGhlcmUgaXMgbm8gb3duZXJOb2RlIGlmIGl0IHJ1bnMgb24ganNkb20uXG4gICAgICAgICAgICBpZiAob3duZXJOb2RlKVxuICAgICAgICAgICAgICAgIGRldGFjaChvd25lck5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWFuYWdlZF9zdHlsZXMuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2FuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFmcm9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogc2hvdWxkIHRoaXMgYmUgc2VwYXJhdGVkIGZyb20gZGVzdHJ1Y3R1cmluZz8gT3Igc3RhcnQvZW5kIGFkZGVkIHRvIHB1YmxpYyBhcGkgYW5kIGRvY3VtZW50YXRpb24/XG4gICAgc3RhcnQ6IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbicpO1xuICAgIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgYWZ0ZXIgYW55IHN0YXRlIGNoYW5nZS5cbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgcnVucyB3aWxsIGJlIGJlZm9yZSB0aGUgaW5pdGlhbCBgb25Nb3VudGBcbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtYmVmb3JldXBkYXRlXG4gKi9cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG4vKipcbiAqIFRoZSBgb25Nb3VudGAgZnVuY3Rpb24gc2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGFzIHNvb24gYXMgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET00uXG4gKiBJdCBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIGluaXRpYWxpc2F0aW9uIChidXQgZG9lc24ndCBuZWVkIHRvIGxpdmUgKmluc2lkZSogdGhlIGNvbXBvbmVudDtcbiAqIGl0IGNhbiBiZSBjYWxsZWQgZnJvbSBhbiBleHRlcm5hbCBtb2R1bGUpLlxuICpcbiAqIGBvbk1vdW50YCBkb2VzIG5vdCBydW4gaW5zaWRlIGEgW3NlcnZlci1zaWRlIGNvbXBvbmVudF0oL2RvY3MjcnVuLXRpbWUtc2VydmVyLXNpZGUtY29tcG9uZW50LWFwaSkuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLW9ubW91bnRcbiAqL1xuZnVuY3Rpb24gb25Nb3VudChmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiB1cGRhdGVkLlxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBydW5zIHdpbGwgYmUgYWZ0ZXIgdGhlIGluaXRpYWwgYG9uTW91bnRgXG4gKi9cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxuICpcbiAqIE91dCBvZiBgb25Nb3VudGAsIGBiZWZvcmVVcGRhdGVgLCBgYWZ0ZXJVcGRhdGVgIGFuZCBgb25EZXN0cm95YCwgdGhpcyBpcyB0aGVcbiAqIG9ubHkgb25lIHRoYXQgcnVucyBpbnNpZGUgYSBzZXJ2ZXItc2lkZSBjb21wb25lbnQuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLW9uZGVzdHJveVxuICovXG5mdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9kZXN0cm95LnB1c2goZm4pO1xufVxuLyoqXG4gKiBDcmVhdGVzIGFuIGV2ZW50IGRpc3BhdGNoZXIgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwYXRjaCBbY29tcG9uZW50IGV2ZW50c10oL2RvY3MjdGVtcGxhdGUtc3ludGF4LWNvbXBvbmVudC1kaXJlY3RpdmVzLW9uLWV2ZW50bmFtZSkuXG4gKiBFdmVudCBkaXNwYXRjaGVycyBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgdHdvIGFyZ3VtZW50czogYG5hbWVgIGFuZCBgZGV0YWlsYC5cbiAqXG4gKiBDb21wb25lbnQgZXZlbnRzIGNyZWF0ZWQgd2l0aCBgY3JlYXRlRXZlbnREaXNwYXRjaGVyYCBjcmVhdGUgYVxuICogW0N1c3RvbUV2ZW50XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQpLlxuICogVGhlc2UgZXZlbnRzIGRvIG5vdCBbYnViYmxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0phdmFTY3JpcHQvQnVpbGRpbmdfYmxvY2tzL0V2ZW50cyNFdmVudF9idWJibGluZ19hbmRfY2FwdHVyZSkuXG4gKiBUaGUgYGRldGFpbGAgYXJndW1lbnQgY29ycmVzcG9uZHMgdG8gdGhlIFtDdXN0b21FdmVudC5kZXRhaWxdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9kZXRhaWwpXG4gKiBwcm9wZXJ0eSBhbmQgY2FuIGNvbnRhaW4gYW55IHR5cGUgb2YgZGF0YS5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtY3JlYXRlZXZlbnRkaXNwYXRjaGVyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICByZXR1cm4gKHR5cGUsIGRldGFpbCwgeyBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbdHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgIC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBjYW5jZWxhYmxlIH0pO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICFldmVudC5kZWZhdWx0UHJldmVudGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG4vKipcbiAqIEFzc29jaWF0ZXMgYW4gYXJiaXRyYXJ5IGBjb250ZXh0YCBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCBjb21wb25lbnQgYW5kIHRoZSBzcGVjaWZpZWQgYGtleWBcbiAqIGFuZCByZXR1cm5zIHRoYXQgb2JqZWN0LiBUaGUgY29udGV4dCBpcyB0aGVuIGF2YWlsYWJsZSB0byBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50XG4gKiAoaW5jbHVkaW5nIHNsb3R0ZWQgY29udGVudCkgd2l0aCBgZ2V0Q29udGV4dGAuXG4gKlxuICogTGlrZSBsaWZlY3ljbGUgZnVuY3Rpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLXNldGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LnNldChrZXksIGNvbnRleHQpO1xuICAgIHJldHVybiBjb250ZXh0O1xufVxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGNvbnRleHQgdGhhdCBiZWxvbmdzIHRvIHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGBrZXlgLlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtZ2V0Y29udGV4dFxuICovXG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHdob2xlIGNvbnRleHQgbWFwIHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi4gVXNlZnVsLCBmb3IgZXhhbXBsZSwgaWYgeW91XG4gKiBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZSBhIGNvbXBvbmVudCBhbmQgd2FudCB0byBwYXNzIHRoZSBleGlzdGluZyBjb250ZXh0IHRvIGl0LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1nZXRhbGxjb250ZXh0c1xuICovXG5mdW5jdGlvbiBnZXRBbGxDb250ZXh0cygpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dDtcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBnaXZlbiBga2V5YCBoYXMgYmVlbiBzZXQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtaGFzY29udGV4dFxuICovXG5mdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmhhcyhrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbi5jYWxsKHRoaXMsIGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG4vLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuLy8gMS4gQWxsIGJlZm9yZVVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlblxuLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbi8vICAgIGZvciBhZnRlclVwZGF0ZXMgY2FsbGVkIGR1cmluZyB0aGUgaW5pdGlhbCBvbk1vdW50LCB3aGljaCBhcmUgY2FsbGVkIGluXG4vLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4vLyBjYWxsIHRvIGZsdXNoKCksIHRoZSBmb2xsb3dpbmcgc3RlcHMgZ3VhcmQgYWdhaW5zdCB0aGlzOlxuLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2Vcbi8vICAgIHRoZSBmbHVzaCBpbmRleCBpcyBrZXB0IG91dHNpZGUgdGhlIGZ1bmN0aW9uLCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbCBwaWNrXG4vLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbi8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4vLyAgICBub3QgaW50ZXJmZXJlIHdpdGggdGhlIFwicGFyZW50XCIgZmx1c2goKSBjYWxsLlxuLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbi8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4vLyAgICBjYWxsYmFjayBjYWxsZWQgYSBzZWNvbmQgdGltZTsgdGhlIHNlZW5fY2FsbGJhY2tzIHNldCwgb3V0c2lkZSB0aGUgZmx1c2goKVxuLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xubGV0IGZsdXNoaWR4ID0gMDsgLy8gRG8gKm5vdCogbW92ZSB0aGlzIGluc2lkZSB0aGUgZmx1c2goKSBmdW5jdGlvblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgLy8gRG8gbm90IHJlZW50ZXIgZmx1c2ggd2hpbGUgZGlydHkgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgYXMgdGhpcyBjYW5cbiAgICAvLyByZXN1bHQgaW4gYW4gaW5maW5pdGUgbG9vcC4gSW5zdGVhZCwgbGV0IHRoZSBpbm5lciBmbHVzaCBoYW5kbGUgaXQuXG4gICAgLy8gUmVlbnRyYW5jeSBpcyBvayBhZnRlcndhcmRzIGZvciBiaW5kaW5ncyBldGMuXG4gICAgaWYgKGZsdXNoaWR4ICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2hpbGUgKGZsdXNoaWR4IDwgZGlydHlfY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzW2ZsdXNoaWR4XTtcbiAgICAgICAgICAgICAgICBmbHVzaGlkeCsrO1xuICAgICAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyByZXNldCBkaXJ0eSBzdGF0ZSB0byBub3QgZW5kIHVwIGluIGEgZGVhZGxvY2tlZCBzdGF0ZSBhbmQgdGhlbiByZXRocm93XG4gICAgICAgICAgICBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBmbHVzaGlkeCA9IDA7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICBmbHVzaGlkeCA9IDA7XG4gICAgICAgIHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICBiaW5kaW5nX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICAvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcbiAgICAgICAgLy8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuICAgICAgICAvLyBzdWJzZXF1ZW50IHVwZGF0ZXMuLi5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG4gICAgICAgICAgICBpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAvLyAuLi5zbyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGxvb3BzXG4gICAgICAgICAgICAgICAgc2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICB9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG4gICAgd2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgfVxuICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChzYXZlZF9jb21wb25lbnQpO1xufVxuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICAgICBjb25zdCBkaXJ0eSA9ICQkLmRpcnR5O1xuICAgICAgICAkJC5kaXJ0eSA9IFstMV07XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LnAoJCQuY3R4LCBkaXJ0eSk7XG4gICAgICAgICQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgIH1cbn1cblxubGV0IHByb21pc2U7XG5mdW5jdGlvbiB3YWl0KCkge1xuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xufVxuY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG5sZXQgb3V0cm9zO1xuZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuICAgIG91dHJvcyA9IHtcbiAgICAgICAgcjogMCxcbiAgICAgICAgYzogW10sXG4gICAgICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcbiAgICB9O1xufVxuZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICAgIGlmICghb3V0cm9zLnIpIHtcbiAgICAgICAgcnVuX2FsbChvdXRyb3MuYyk7XG4gICAgfVxuICAgIG91dHJvcyA9IG91dHJvcy5wO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICBibG9jay5pKGxvY2FsKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2subykge1xuICAgICAgICBpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgb3V0cm9pbmcuYWRkKGJsb2NrKTtcbiAgICAgICAgb3V0cm9zLmMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFjaClcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZCgxKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYmxvY2subyhsb2NhbCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxufVxuY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuZnVuY3Rpb24gY3JlYXRlX2luX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IGRpcmVjdGlvbjogJ2luJyB9O1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCB1aWQgPSAwO1xuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcbiAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGFzaylcbiAgICAgICAgICAgIHRhc2suYWJvcnQoKTtcbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdvdXQnIH07XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBjb25zdCBncm91cCA9IG91dHJvcztcbiAgICBncm91cC5yICs9IDE7XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcbiAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghLS1ncm91cC5yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBjbGVhbiB1cCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKGdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEgLSB0LCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZyhvcHRpb25zKTtcbiAgICAgICAgICAgIGdvKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ28oKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW5kKHJlc2V0KSB7XG4gICAgICAgICAgICBpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcbiAgICAgICAgICAgICAgICBjb25maWcudGljaygxLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdib3RoJyB9O1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuICAgIGxldCB0ID0gaW50cm8gPyAwIDogMTtcbiAgICBsZXQgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWUgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGNsZWFyX2FuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KHByb2dyYW0sIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGQgPSAocHJvZ3JhbS5iIC0gdCk7XG4gICAgICAgIGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogdCxcbiAgICAgICAgICAgIGI6IHByb2dyYW0uYixcbiAgICAgICAgICAgIGQsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHN0YXJ0OiBwcm9ncmFtLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBwcm9ncmFtLnN0YXJ0ICsgZHVyYXRpb24sXG4gICAgICAgICAgICBncm91cDogcHJvZ3JhbS5ncm91cFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbyhiKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB7XG4gICAgICAgICAgICBzdGFydDogbm93KCkgKyBkZWxheSxcbiAgICAgICAgICAgIGJcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgcHJvZ3JhbS5ncm91cCA9IG91dHJvcztcbiAgICAgICAgICAgIG91dHJvcy5yICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIpXG4gICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBiLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdfcHJvZ3JhbSAmJiBub3cgPiBwZW5kaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgcnVubmluZ19wcm9ncmFtLmIsIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbiwgMCwgZWFzaW5nLCBjb25maWcuY3NzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0ID0gcnVubmluZ19wcm9ncmFtLmIsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtLmIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50cm8g4oCUIHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3V0cm8g4oCUIG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHJ1bm5pbmdfcHJvZ3JhbS5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBydW5uaW5nX3Byb2dyYW0uYSArIHJ1bm5pbmdfcHJvZ3JhbS5kICogZWFzaW5nKHAgLyBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuKGIpIHtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX3Byb21pc2UocHJvbWlzZSwgaW5mbykge1xuICAgIGNvbnN0IHRva2VuID0gaW5mby50b2tlbiA9IHt9O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZSh0eXBlLCBpbmRleCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaW5mby50b2tlbiAhPT0gdG9rZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSB2YWx1ZTtcbiAgICAgICAgbGV0IGNoaWxkX2N0eCA9IGluZm8uY3R4O1xuICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoaWxkX2N0eCA9IGNoaWxkX2N0eC5zbGljZSgpO1xuICAgICAgICAgICAgY2hpbGRfY3R4W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBibG9jayA9IHR5cGUgJiYgKGluZm8uY3VycmVudCA9IHR5cGUpKGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBuZWVkc19mbHVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAoaW5mby5ibG9jaykge1xuICAgICAgICAgICAgaWYgKGluZm8uYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGluZGV4ICYmIGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8uYmxvY2tzW2ldID09PSBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrc1tpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9jay5kKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgICAgICBibG9jay5tKGluZm8ubW91bnQoKSwgaW5mby5hbmNob3IpO1xuICAgICAgICAgICAgbmVlZHNfZmx1c2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8uYmxvY2sgPSBibG9jaztcbiAgICAgICAgaWYgKGluZm8uYmxvY2tzKVxuICAgICAgICAgICAgaW5mby5ibG9ja3NbaW5kZXhdID0gYmxvY2s7XG4gICAgICAgIGlmIChuZWVkc19mbHVzaCkge1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNfcHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50X2NvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgICAgICBwcm9taXNlLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLmNhdGNoLCAyLCBpbmZvLmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgICAgICBpZiAoIWluZm8uaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmIHdlIHByZXZpb3VzbHkgaGFkIGEgdGhlbi9jYXRjaCBibG9jaywgZGVzdHJveSBpdFxuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnBlbmRpbmcpIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnBlbmRpbmcsIDApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8udGhlbikge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLnJlc29sdmVkID0gcHJvbWlzZTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoKGluZm8sIGN0eCwgZGlydHkpIHtcbiAgICBjb25zdCBjaGlsZF9jdHggPSBjdHguc2xpY2UoKTtcbiAgICBjb25zdCB7IHJlc29sdmVkIH0gPSBpbmZvO1xuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8udGhlbikge1xuICAgICAgICBjaGlsZF9jdHhbaW5mby52YWx1ZV0gPSByZXNvbHZlZDtcbiAgICB9XG4gICAgaWYgKGluZm8uY3VycmVudCA9PT0gaW5mby5jYXRjaCkge1xuICAgICAgICBjaGlsZF9jdHhbaW5mby5lcnJvcl0gPSByZXNvbHZlZDtcbiAgICB9XG4gICAgaW5mby5ibG9jay5wKGNoaWxkX2N0eCwgZGlydHkpO1xufVxuXG5jb25zdCBnbG9iYWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyB3aW5kb3dcbiAgICA6IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IGdsb2JhbFRoaXNcbiAgICAgICAgOiBnbG9iYWwpO1xuXG5mdW5jdGlvbiBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5kKDEpO1xuICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbn1cbmZ1bmN0aW9uIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gdXBkYXRlX2tleWVkX2VhY2gob2xkX2Jsb2NrcywgZGlydHksIGdldF9rZXksIGR5bmFtaWMsIGN0eCwgbGlzdCwgbG9va3VwLCBub2RlLCBkZXN0cm95LCBjcmVhdGVfZWFjaF9ibG9jaywgbmV4dCwgZ2V0X2NvbnRleHQpIHtcbiAgICBsZXQgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuICAgIGxldCBuID0gbGlzdC5sZW5ndGg7XG4gICAgbGV0IGkgPSBvO1xuICAgIGNvbnN0IG9sZF9pbmRleGVzID0ge307XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcbiAgICBjb25zdCBuZXdfYmxvY2tzID0gW107XG4gICAgY29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBkZWx0YXMgPSBuZXcgTWFwKCk7XG4gICAgaSA9IG47XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBjaGlsZF9jdHggPSBnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpO1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBibG9jayA9IGxvb2t1cC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhrZXksIGNoaWxkX2N0eCk7XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHluYW1pYykge1xuICAgICAgICAgICAgYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdfbG9va3VwLnNldChrZXksIG5ld19ibG9ja3NbaV0gPSBibG9jayk7XG4gICAgICAgIGlmIChrZXkgaW4gb2xkX2luZGV4ZXMpXG4gICAgICAgICAgICBkZWx0YXMuc2V0KGtleSwgTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pKTtcbiAgICB9XG4gICAgY29uc3Qgd2lsbF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IGRpZF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgYmxvY2subShub2RlLCBuZXh0KTtcbiAgICAgICAgbG9va3VwLnNldChibG9jay5rZXksIGJsb2NrKTtcbiAgICAgICAgbmV4dCA9IGJsb2NrLmZpcnN0O1xuICAgICAgICBuLS07XG4gICAgfVxuICAgIHdoaWxlIChvICYmIG4pIHtcbiAgICAgICAgY29uc3QgbmV3X2Jsb2NrID0gbmV3X2Jsb2Nrc1tuIC0gMV07XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuICAgICAgICBjb25zdCBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcbiAgICAgICAgY29uc3Qgb2xkX2tleSA9IG9sZF9ibG9jay5rZXk7XG4gICAgICAgIGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgbmV4dCA9IG5ld19ibG9jay5maXJzdDtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgYmxvY2tcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFsb29rdXAuaGFzKG5ld19rZXkpIHx8IHdpbGxfbW92ZS5oYXMobmV3X2tleSkpIHtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpZF9tb3ZlLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlbHRhcy5nZXQobmV3X2tleSkgPiBkZWx0YXMuZ2V0KG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBkaWRfbW92ZS5hZGQobmV3X2tleSk7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpbGxfbW92ZS5hZGQob2xkX2tleSk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUgKG8tLSkge1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuICAgICAgICBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9ibG9jay5rZXkpKVxuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgfVxuICAgIHdoaWxlIChuKVxuICAgICAgICBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuICAgIHJldHVybiBuZXdfYmxvY2tzO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9rZXlzKGN0eCwgbGlzdCwgZ2V0X2NvbnRleHQsIGdldF9rZXkpIHtcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSkpO1xuICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaGF2ZSBkdXBsaWNhdGUga2V5cyBpbiBhIGtleWVkIGVhY2gnKTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0X3NwcmVhZF91cGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG4gICAgY29uc3QgdXBkYXRlID0ge307XG4gICAgY29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcbiAgICBjb25zdCBhY2NvdW50ZWRfZm9yID0geyAkJHNjb3BlOiAxIH07XG4gICAgbGV0IGkgPSBsZXZlbHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgbyA9IGxldmVsc1tpXTtcbiAgICAgICAgY29uc3QgbiA9IHVwZGF0ZXNbaV07XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG4pKVxuICAgICAgICAgICAgICAgICAgICB0b19udWxsX291dFtrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVba2V5XSA9IG5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbHNbaV0gPSBuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHVwZGF0ZSkpXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cbmZ1bmN0aW9uIGdldF9zcHJlYWRfb2JqZWN0KHNwcmVhZF9wcm9wcykge1xuICAgIHJldHVybiB0eXBlb2Ygc3ByZWFkX3Byb3BzID09PSAnb2JqZWN0JyAmJiBzcHJlYWRfcHJvcHMgIT09IG51bGwgPyBzcHJlYWRfcHJvcHMgOiB7fTtcbn1cblxuLy8gc291cmNlOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmRpY2VzLmh0bWxcbmNvbnN0IGJvb2xlYW5fYXR0cmlidXRlcyA9IG5ldyBTZXQoW1xuICAgICdhbGxvd2Z1bGxzY3JlZW4nLFxuICAgICdhbGxvd3BheW1lbnRyZXF1ZXN0JyxcbiAgICAnYXN5bmMnLFxuICAgICdhdXRvZm9jdXMnLFxuICAgICdhdXRvcGxheScsXG4gICAgJ2NoZWNrZWQnLFxuICAgICdjb250cm9scycsXG4gICAgJ2RlZmF1bHQnLFxuICAgICdkZWZlcicsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZm9ybW5vdmFsaWRhdGUnLFxuICAgICdoaWRkZW4nLFxuICAgICdpbmVydCcsXG4gICAgJ2lzbWFwJyxcbiAgICAnaXRlbXNjb3BlJyxcbiAgICAnbG9vcCcsXG4gICAgJ211bHRpcGxlJyxcbiAgICAnbXV0ZWQnLFxuICAgICdub21vZHVsZScsXG4gICAgJ25vdmFsaWRhdGUnLFxuICAgICdvcGVuJyxcbiAgICAncGxheXNpbmxpbmUnLFxuICAgICdyZWFkb25seScsXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAncmV2ZXJzZWQnLFxuICAgICdzZWxlY3RlZCdcbl0pO1xuXG4vKiogcmVnZXggb2YgYWxsIGh0bWwgdm9pZCBlbGVtZW50IG5hbWVzICovXG5jb25zdCB2b2lkX2VsZW1lbnRfbmFtZXMgPSAvXig/OmFyZWF8YmFzZXxicnxjb2x8Y29tbWFuZHxlbWJlZHxocnxpbWd8aW5wdXR8a2V5Z2VufGxpbmt8bWV0YXxwYXJhbXxzb3VyY2V8dHJhY2t8d2JyKSQvO1xuZnVuY3Rpb24gaXNfdm9pZChuYW1lKSB7XG4gICAgcmV0dXJuIHZvaWRfZWxlbWVudF9uYW1lcy50ZXN0KG5hbWUpIHx8IG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJyFkb2N0eXBlJztcbn1cblxuY29uc3QgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIgPSAvW1xccydcIj4vPVxcdXtGREQwfS1cXHV7RkRFRn1cXHV7RkZGRX1cXHV7RkZGRn1cXHV7MUZGRkV9XFx1ezFGRkZGfVxcdXsyRkZGRX1cXHV7MkZGRkZ9XFx1ezNGRkZFfVxcdXszRkZGRn1cXHV7NEZGRkV9XFx1ezRGRkZGfVxcdXs1RkZGRX1cXHV7NUZGRkZ9XFx1ezZGRkZFfVxcdXs2RkZGRn1cXHV7N0ZGRkV9XFx1ezdGRkZGfVxcdXs4RkZGRX1cXHV7OEZGRkZ9XFx1ezlGRkZFfVxcdXs5RkZGRn1cXHV7QUZGRkV9XFx1e0FGRkZGfVxcdXtCRkZGRX1cXHV7QkZGRkZ9XFx1e0NGRkZFfVxcdXtDRkZGRn1cXHV7REZGRkV9XFx1e0RGRkZGfVxcdXtFRkZGRX1cXHV7RUZGRkZ9XFx1e0ZGRkZFfVxcdXtGRkZGRn1cXHV7MTBGRkZFfVxcdXsxMEZGRkZ9XS91O1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jbm9uY2hhcmFjdGVyXG5mdW5jdGlvbiBzcHJlYWQoYXJncywgYXR0cnNfdG9fYWRkKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmFyZ3MpO1xuICAgIGlmIChhdHRyc190b19hZGQpIHtcbiAgICAgICAgY29uc3QgY2xhc3Nlc190b19hZGQgPSBhdHRyc190b19hZGQuY2xhc3NlcztcbiAgICAgICAgY29uc3Qgc3R5bGVzX3RvX2FkZCA9IGF0dHJzX3RvX2FkZC5zdHlsZXM7XG4gICAgICAgIGlmIChjbGFzc2VzX3RvX2FkZCkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuY2xhc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgPSBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgKz0gJyAnICsgY2xhc3Nlc190b19hZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlc190b19hZGQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnN0eWxlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnN0eWxlID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZXNfdG9fYWRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKG1lcmdlX3Nzcl9zdHlsZXMoYXR0cmlidXRlcy5zdHlsZSwgc3R5bGVzX3RvX2FkZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAoaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIudGVzdChuYW1lKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpXG4gICAgICAgICAgICBzdHIgKz0gJyAnICsgbmFtZTtcbiAgICAgICAgZWxzZSBpZiAoYm9vbGVhbl9hdHRyaWJ1dGVzLmhhcyhuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICAgICAgc3RyICs9ICcgJyArIG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3RyICs9IGAgJHtuYW1lfT1cIiR7dmFsdWV9XCJgO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn1cbmZ1bmN0aW9uIG1lcmdlX3Nzcl9zdHlsZXMoc3R5bGVfYXR0cmlidXRlLCBzdHlsZV9kaXJlY3RpdmUpIHtcbiAgICBjb25zdCBzdHlsZV9vYmplY3QgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGluZGl2aWR1YWxfc3R5bGUgb2Ygc3R5bGVfYXR0cmlidXRlLnNwbGl0KCc7JykpIHtcbiAgICAgICAgY29uc3QgY29sb25faW5kZXggPSBpbmRpdmlkdWFsX3N0eWxlLmluZGV4T2YoJzonKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGluZGl2aWR1YWxfc3R5bGUuc2xpY2UoMCwgY29sb25faW5kZXgpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbmRpdmlkdWFsX3N0eWxlLnNsaWNlKGNvbG9uX2luZGV4ICsgMSkudHJpbSgpO1xuICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgc3R5bGVfb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZV9kaXJlY3RpdmUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZV9kaXJlY3RpdmVbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgc3R5bGVfb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgc3R5bGVfb2JqZWN0W25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZV9vYmplY3Q7XG59XG5jb25zdCBBVFRSX1JFR0VYID0gL1smXCJdL2c7XG5jb25zdCBDT05URU5UX1JFR0VYID0gL1smPF0vZztcbi8qKlxuICogTm90ZTogdGhpcyBtZXRob2QgaXMgcGVyZm9ybWFuY2Ugc2Vuc2l0aXZlIGFuZCBoYXMgYmVlbiBvcHRpbWl6ZWRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvcHVsbC81NzAxXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZSh2YWx1ZSwgaXNfYXR0ciA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc3RyID0gU3RyaW5nKHZhbHVlKTtcbiAgICBjb25zdCBwYXR0ZXJuID0gaXNfYXR0ciA/IEFUVFJfUkVHRVggOiBDT05URU5UX1JFR0VYO1xuICAgIHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgICBsZXQgZXNjYXBlZCA9ICcnO1xuICAgIGxldCBsYXN0ID0gMDtcbiAgICB3aGlsZSAocGF0dGVybi50ZXN0KHN0cikpIHtcbiAgICAgICAgY29uc3QgaSA9IHBhdHRlcm4ubGFzdEluZGV4IC0gMTtcbiAgICAgICAgY29uc3QgY2ggPSBzdHJbaV07XG4gICAgICAgIGVzY2FwZWQgKz0gc3RyLnN1YnN0cmluZyhsYXN0LCBpKSArIChjaCA9PT0gJyYnID8gJyZhbXA7JyA6IChjaCA9PT0gJ1wiJyA/ICcmcXVvdDsnIDogJyZsdDsnKSk7XG4gICAgICAgIGxhc3QgPSBpICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIGVzY2FwZWQgKyBzdHIuc3Vic3RyaW5nKGxhc3QpO1xufVxuZnVuY3Rpb24gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSh2YWx1ZSkge1xuICAgIC8vIGtlZXAgYm9vbGVhbnMsIG51bGwsIGFuZCB1bmRlZmluZWQgZm9yIHRoZSBzYWtlIG9mIGBzcHJlYWRgXG4gICAgY29uc3Qgc2hvdWxkX2VzY2FwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpO1xuICAgIHJldHVybiBzaG91bGRfZXNjYXBlID8gZXNjYXBlKHZhbHVlLCB0cnVlKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZXNjYXBlX29iamVjdChvYmopIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKG9ialtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGZuKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGZuKGl0ZW1zW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IG1pc3NpbmdfY29tcG9uZW50ID0ge1xuICAgICQkcmVuZGVyOiAoKSA9PiAnJ1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlX2NvbXBvbmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LiQkcmVuZGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnc3ZlbHRlOmNvbXBvbmVudCcpXG4gICAgICAgICAgICBuYW1lICs9ICcgdGhpcz17Li4ufSc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXMuIE90aGVyd2lzZSB5b3UgbWF5IG5lZWQgdG8gZml4IGEgPCR7bmFtZX0+LmApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZGVidWcoZmlsZSwgbGluZSwgY29sdW1uLCB2YWx1ZXMpIHtcbiAgICBjb25zb2xlLmxvZyhge0BkZWJ1Z30gJHtmaWxlID8gZmlsZSArICcgJyA6ICcnfSgke2xpbmV9OiR7Y29sdW1ufSlgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2codmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgcmV0dXJuICcnO1xufVxubGV0IG9uX2Rlc3Ryb3k7XG5mdW5jdGlvbiBjcmVhdGVfc3NyX2NvbXBvbmVudChmbikge1xuICAgIGZ1bmN0aW9uICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cywgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIGNvbnN0ICQkID0ge1xuICAgICAgICAgICAgb25fZGVzdHJveSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBNYXAoY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG4gICAgICAgICAgICAvLyB0aGVzZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGRpc2NhcmRlZFxuICAgICAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKVxuICAgICAgICB9O1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoeyAkJCB9KTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGZuKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cyk7XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlcjogKHByb3BzID0ge30sIHsgJCRzbG90cyA9IHt9LCBjb250ZXh0ID0gbmV3IE1hcCgpIH0gPSB7fSkgPT4ge1xuICAgICAgICAgICAgb25fZGVzdHJveSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geyB0aXRsZTogJycsIGhlYWQ6ICcnLCBjc3M6IG5ldyBTZXQoKSB9O1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9ICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIHt9LCAkJHNsb3RzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHJ1bl9hbGwob25fZGVzdHJveSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IEFycmF5LmZyb20ocmVzdWx0LmNzcykubWFwKGNzcyA9PiBjc3MuY29kZSkuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbnVsbCAvLyBUT0RPXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkOiByZXN1bHQudGl0bGUgKyByZXN1bHQuaGVhZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgJCRyZW5kZXJcbiAgICB9O1xufVxuZnVuY3Rpb24gYWRkX2F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IChib29sZWFuICYmICF2YWx1ZSkpXG4gICAgICAgIHJldHVybiAnJztcbiAgICBjb25zdCBhc3NpZ25tZW50ID0gKGJvb2xlYW4gJiYgdmFsdWUgPT09IHRydWUpID8gJycgOiBgPVwiJHtlc2NhcGUodmFsdWUsIHRydWUpfVwiYDtcbiAgICByZXR1cm4gYCAke25hbWV9JHthc3NpZ25tZW50fWA7XG59XG5mdW5jdGlvbiBhZGRfY2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMgPyBgIGNsYXNzPVwiJHtjbGFzc2VzfVwiYCA6ICcnO1xufVxuZnVuY3Rpb24gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVfb2JqZWN0KVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBzdHlsZV9vYmplY3Rba2V5XSlcbiAgICAgICAgLm1hcChrZXkgPT4gYCR7a2V5fTogJHtlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKHN0eWxlX29iamVjdFtrZXldKX07YClcbiAgICAgICAgLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIGFkZF9zdHlsZXMoc3R5bGVfb2JqZWN0KSB7XG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpO1xuICAgIHJldHVybiBzdHlsZXMgPyBgIHN0eWxlPVwiJHtzdHlsZXN9XCJgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGJpbmQoY29tcG9uZW50LCBuYW1lLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGluZGV4ID0gY29tcG9uZW50LiQkLnByb3BzW25hbWVdO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBvbmVudC4kJC5ib3VuZFtpbmRleF0gPSBjYWxsYmFjaztcbiAgICAgICAgY2FsbGJhY2soY29tcG9uZW50LiQkLmN0eFtpbmRleF0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcbiAgICBibG9jayAmJiBibG9jay5jKCk7XG59XG5mdW5jdGlvbiBjbGFpbV9jb21wb25lbnQoYmxvY2ssIHBhcmVudF9ub2Rlcykge1xuICAgIGJsb2NrICYmIGJsb2NrLmwocGFyZW50X25vZGVzKTtcbn1cbmZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yLCBjdXN0b21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBmcmFnbWVudCwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgaWYgKCFjdXN0b21FbGVtZW50KSB7XG4gICAgICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IGNvbXBvbmVudC4kJC5vbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAvLyBpdCB3aWxsIHVwZGF0ZSB0aGUgYCQkLm9uX2Rlc3Ryb3lgIHJlZmVyZW5jZSB0byBgbnVsbGAuXG4gICAgICAgICAgICAvLyB0aGUgZGVzdHJ1Y3R1cmVkIG9uX2Rlc3Ryb3kgbWF5IHN0aWxsIHJlZmVyZW5jZSB0byB0aGUgb2xkIGFycmF5XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAgICAgICAgIC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcbiAgICAgICAgICAgICAgICBydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG4gICAgICAgIC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cbiAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICAkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgICAkJC5jdHggPSBbXTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuICAgIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC4kJC5kaXJ0eVsoaSAvIDMxKSB8IDBdIHw9ICgxIDw8IChpICUgMzEpKTtcbn1cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BzLCBhcHBlbmRfc3R5bGVzLCBkaXJ0eSA9IFstMV0pIHtcbiAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQgPSB7XG4gICAgICAgIGZyYWdtZW50OiBudWxsLFxuICAgICAgICBjdHg6IFtdLFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICBwcm9wcyxcbiAgICAgICAgdXBkYXRlOiBub29wLFxuICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgIGJvdW5kOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgLy8gbGlmZWN5Y2xlXG4gICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgIG9uX2Rpc2Nvbm5lY3Q6IFtdLFxuICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgY29udGV4dDogbmV3IE1hcChvcHRpb25zLmNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHksXG4gICAgICAgIHNraXBfYm91bmQ6IGZhbHNlLFxuICAgICAgICByb290OiBvcHRpb25zLnRhcmdldCB8fCBwYXJlbnRfY29tcG9uZW50LiQkLnJvb3RcbiAgICB9O1xuICAgIGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAkJC5jdHggPSBpbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSlcbiAgICAgICAgOiBbXTtcbiAgICAkJC51cGRhdGUoKTtcbiAgICByZWFkeSA9IHRydWU7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcbiAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIHN0YXJ0X2h5ZHJhdGluZygpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IsIG9wdGlvbnMuY3VzdG9tRWxlbWVudCk7XG4gICAgICAgIGVuZF9oeWRyYXRpbmcoKTtcbiAgICAgICAgZmx1c2goKTtcbiAgICB9XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgU3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb25fbW91bnQgfSA9IHRoaXMuJCQ7XG4gICAgICAgICAgICB0aGlzLiQkLm9uX2Rpc2Nvbm5lY3QgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCQuc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodGhpcy4kJC5vbl9kaXNjb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGRlbGVnYXRlIHRvIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICBpZiAoIWlzX2Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnQge1xuICAgICRkZXN0cm95KCkge1xuICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgfVxuICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWlzX2Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hfZGV2KHR5cGUsIGRldGFpbCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KHR5cGUsIE9iamVjdC5hc3NpZ24oeyB2ZXJzaW9uOiAnMy41NS4xJyB9LCBkZXRhaWwpLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZCh0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uX2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9kZXYobm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlJywgeyBub2RlIH0pO1xuICAgIGRldGFjaChub2RlKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9iZXR3ZWVuX2RldihiZWZvcmUsIGFmdGVyKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYmVmb3JlX2RldihhZnRlcikge1xuICAgIHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9hZnRlcl9kZXYoYmVmb3JlKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGlzdGVuX2Rldihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucywgaGFzX3ByZXZlbnRfZGVmYXVsdCwgaGFzX3N0b3BfcHJvcGFnYXRpb24pIHtcbiAgICBjb25zdCBtb2RpZmllcnMgPSBvcHRpb25zID09PSB0cnVlID8gWydjYXB0dXJlJ10gOiBvcHRpb25zID8gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvcHRpb25zKSkgOiBbXTtcbiAgICBpZiAoaGFzX3ByZXZlbnRfZGVmYXVsdClcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3ByZXZlbnREZWZhdWx0Jyk7XG4gICAgaWYgKGhhc19zdG9wX3Byb3BhZ2F0aW9uKVxuICAgICAgICBtb2RpZmllcnMucHVzaCgnc3RvcFByb3BhZ2F0aW9uJyk7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01BZGRFdmVudExpc3RlbmVyJywgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyX2Rldihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmVBdHRyaWJ1dGUnLCB7IG5vZGUsIGF0dHJpYnV0ZSB9KTtcbiAgICBlbHNlXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0QXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gcHJvcF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldFByb3BlcnR5JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBkYXRhc2V0X2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlLmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhc2V0JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9kZXYodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQud2hvbGVUZXh0ID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhJywgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50KGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnc3RyaW5nJyAmJiAhKGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBhcmcpKSB7XG4gICAgICAgIGxldCBtc2cgPSAneyNlYWNofSBvbmx5IGl0ZXJhdGVzIG92ZXIgYXJyYXktbGlrZSBvYmplY3RzLic7XG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIGFyZyAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gYXJnKSB7XG4gICAgICAgICAgICBtc2cgKz0gJyBZb3UgY2FuIHVzZSBhIHNwcmVhZCB0byBjb252ZXJ0IHRoaXMgaXRlcmFibGUgaW50byBhbiBhcnJheS4nO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3Nsb3RzKG5hbWUsIHNsb3QsIGtleXMpIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Rfa2V5IG9mIE9iamVjdC5rZXlzKHNsb3QpKSB7XG4gICAgICAgIGlmICghfmtleXMuaW5kZXhPZihzbG90X2tleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgPCR7bmFtZX0+IHJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgc2xvdCBcIiR7c2xvdF9rZXl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9keW5hbWljX2VsZW1lbnQodGFnKSB7XG4gICAgY29uc3QgaXNfc3RyaW5nID0gdHlwZW9mIHRhZyA9PT0gJ3N0cmluZyc7XG4gICAgaWYgKHRhZyAmJiAhaXNfc3RyaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignPHN2ZWx0ZTplbGVtZW50PiBleHBlY3RzIFwidGhpc1wiIGF0dHJpYnV0ZSB0byBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV92b2lkX2R5bmFtaWNfZWxlbWVudCh0YWcpIHtcbiAgICBpZiAodGFnICYmIGlzX3ZvaWQodGFnKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYDxzdmVsdGU6ZWxlbWVudCB0aGlzPVwiJHt0YWd9XCI+IGlzIHNlbGYtY2xvc2luZyBhbmQgY2Fubm90IGhhdmUgY29udGVudC5gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb25zdHJ1Y3Rfc3ZlbHRlX2NvbXBvbmVudF9kZXYoY29tcG9uZW50LCBwcm9wcykge1xuICAgIGNvbnN0IGVycm9yX21lc3NhZ2UgPSAndGhpcz17Li4ufSBvZiA8c3ZlbHRlOmNvbXBvbmVudD4gc2hvdWxkIHNwZWNpZnkgYSBTdmVsdGUgY29tcG9uZW50Lic7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgY29tcG9uZW50KHByb3BzKTtcbiAgICAgICAgaWYgKCFpbnN0YW5jZS4kJCB8fCAhaW5zdGFuY2UuJHNldCB8fCAhaW5zdGFuY2UuJG9uIHx8ICFpbnN0YW5jZS4kZGVzdHJveSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yX21lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGVycjtcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJyAmJiBtZXNzYWdlLmluZGV4T2YoJ2lzIG5vdCBhIGNvbnN0cnVjdG9yJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzIHdpdGggc29tZSBtaW5vciBkZXYtZW5oYW5jZW1lbnRzLiBVc2VkIHdoZW4gZGV2PXRydWUuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudERldiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKCFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy4kJGlubGluZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIid0YXJnZXQnIGlzIGEgcmVxdWlyZWQgb3B0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBzdXBlci4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9O1xuICAgIH1cbiAgICAkY2FwdHVyZV9zdGF0ZSgpIHsgfVxuICAgICRpbmplY3Rfc3RhdGUoKSB7IH1cbn1cbi8qKlxuICogQmFzZSBjbGFzcyB0byBjcmVhdGUgc3Ryb25nbHkgdHlwZWQgU3ZlbHRlIGNvbXBvbmVudHMuXG4gKiBUaGlzIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXMgYW5kIHNob3VsZCBiZSB1c2VkIGluIGAuZC50c2AgZmlsZXMuXG4gKlxuICogIyMjIEV4YW1wbGU6XG4gKlxuICogWW91IGhhdmUgY29tcG9uZW50IGxpYnJhcnkgb24gbnBtIGNhbGxlZCBgY29tcG9uZW50LWxpYnJhcnlgLCBmcm9tIHdoaWNoXG4gKiB5b3UgZXhwb3J0IGEgY29tcG9uZW50IGNhbGxlZCBgTXlDb21wb25lbnRgLiBGb3IgU3ZlbHRlK1R5cGVTY3JpcHQgdXNlcnMsXG4gKiB5b3Ugd2FudCB0byBwcm92aWRlIHR5cGluZ3MuIFRoZXJlZm9yZSB5b3UgY3JlYXRlIGEgYGluZGV4LmQudHNgOlxuICogYGBgdHNcbiAqIGltcG9ydCB7IFN2ZWx0ZUNvbXBvbmVudFR5cGVkIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICogZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50VHlwZWQ8e2Zvbzogc3RyaW5nfT4ge31cbiAqIGBgYFxuICogVHlwaW5nIHRoaXMgbWFrZXMgaXQgcG9zc2libGUgZm9yIElERXMgbGlrZSBWUyBDb2RlIHdpdGggdGhlIFN2ZWx0ZSBleHRlbnNpb25cbiAqIHRvIHByb3ZpZGUgaW50ZWxsaXNlbnNlIGFuZCB0byB1c2UgdGhlIGNvbXBvbmVudCBsaWtlIHRoaXMgaW4gYSBTdmVsdGUgZmlsZVxuICogd2l0aCBUeXBlU2NyaXB0OlxuICogYGBgc3ZlbHRlXG4gKiA8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICogXHRpbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCJjb21wb25lbnQtbGlicmFyeVwiO1xuICogPC9zY3JpcHQ+XG4gKiA8TXlDb21wb25lbnQgZm9vPXsnYmFyJ30gLz5cbiAqIGBgYFxuICpcbiAqICMjIyMgV2h5IG5vdCBtYWtlIHRoaXMgcGFydCBvZiBgU3ZlbHRlQ29tcG9uZW50KERldilgP1xuICogQmVjYXVzZVxuICogYGBgdHNcbiAqIGNsYXNzIEFTdWJjbGFzc09mU3ZlbHRlQ29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50PHtmb286IHN0cmluZ30+IHt9XG4gKiBjb25zdCBjb21wb25lbnQ6IHR5cGVvZiBTdmVsdGVDb21wb25lbnQgPSBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudDtcbiAqIGBgYFxuICogd2lsbCB0aHJvdyBhIHR5cGUgZXJyb3IsIHNvIHdlIG5lZWQgdG8gc2VwYXJhdGUgdGhlIG1vcmUgc3RyaWN0bHkgdHlwZWQgY2xhc3MuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50RGV2IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvb3BfZ3VhcmQodGltZW91dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBIdG1sVGFnLCBIdG1sVGFnSHlkcmF0aW9uLCBTdmVsdGVDb21wb25lbnQsIFN2ZWx0ZUNvbXBvbmVudERldiwgU3ZlbHRlQ29tcG9uZW50VHlwZWQsIFN2ZWx0ZUVsZW1lbnQsIGFjdGlvbl9kZXN0cm95ZXIsIGFkZF9hdHRyaWJ1dGUsIGFkZF9jbGFzc2VzLCBhZGRfZmx1c2hfY2FsbGJhY2ssIGFkZF9sb2NhdGlvbiwgYWRkX3JlbmRlcl9jYWxsYmFjaywgYWRkX3Jlc2l6ZV9saXN0ZW5lciwgYWRkX3N0eWxlcywgYWRkX3RyYW5zZm9ybSwgYWZ0ZXJVcGRhdGUsIGFwcGVuZCwgYXBwZW5kX2RldiwgYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQsIGFwcGVuZF9oeWRyYXRpb24sIGFwcGVuZF9oeWRyYXRpb25fZGV2LCBhcHBlbmRfc3R5bGVzLCBhc3NpZ24sIGF0dHIsIGF0dHJfZGV2LCBhdHRyaWJ1dGVfdG9fb2JqZWN0LCBiZWZvcmVVcGRhdGUsIGJpbmQsIGJpbmRpbmdfY2FsbGJhY2tzLCBibGFua19vYmplY3QsIGJ1YmJsZSwgY2hlY2tfb3V0cm9zLCBjaGlsZHJlbiwgY2xhaW1fY29tcG9uZW50LCBjbGFpbV9lbGVtZW50LCBjbGFpbV9odG1sX3RhZywgY2xhaW1fc3BhY2UsIGNsYWltX3N2Z19lbGVtZW50LCBjbGFpbV90ZXh0LCBjbGVhcl9sb29wcywgY29tcG9uZW50X3N1YnNjcmliZSwgY29tcHV0ZV9yZXN0X3Byb3BzLCBjb21wdXRlX3Nsb3RzLCBjb25zdHJ1Y3Rfc3ZlbHRlX2NvbXBvbmVudCwgY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnRfZGV2LCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGNyZWF0ZV9hbmltYXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIGNyZWF0ZV9jb21wb25lbnQsIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9zbG90LCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgY3VycmVudF9jb21wb25lbnQsIGN1c3RvbV9ldmVudCwgZGF0YXNldF9kZXYsIGRlYnVnLCBkZXN0cm95X2Jsb2NrLCBkZXN0cm95X2NvbXBvbmVudCwgZGVzdHJveV9lYWNoLCBkZXRhY2gsIGRldGFjaF9hZnRlcl9kZXYsIGRldGFjaF9iZWZvcmVfZGV2LCBkZXRhY2hfYmV0d2Vlbl9kZXYsIGRldGFjaF9kZXYsIGRpcnR5X2NvbXBvbmVudHMsIGRpc3BhdGNoX2RldiwgZWFjaCwgZWxlbWVudCwgZWxlbWVudF9pcywgZW1wdHksIGVuZF9oeWRyYXRpbmcsIGVzY2FwZSwgZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSwgZXNjYXBlX29iamVjdCwgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgZml4X2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfcG9zaXRpb24sIGZsdXNoLCBnZXRBbGxDb250ZXh0cywgZ2V0Q29udGV4dCwgZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlLCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzLCBnZXRfcm9vdF9mb3Jfc3R5bGUsIGdldF9zbG90X2NoYW5nZXMsIGdldF9zcHJlYWRfb2JqZWN0LCBnZXRfc3ByZWFkX3VwZGF0ZSwgZ2V0X3N0b3JlX3ZhbHVlLCBnbG9iYWxzLCBncm91cF9vdXRyb3MsIGhhbmRsZV9wcm9taXNlLCBoYXNDb250ZXh0LCBoYXNfcHJvcCwgaGVhZF9zZWxlY3RvciwgaWRlbnRpdHksIGluaXQsIGluc2VydCwgaW5zZXJ0X2RldiwgaW5zZXJ0X2h5ZHJhdGlvbiwgaW5zZXJ0X2h5ZHJhdGlvbl9kZXYsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfY3Jvc3NvcmlnaW4sIGlzX2VtcHR5LCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgaXNfdm9pZCwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBsb29wX2d1YXJkLCBtZXJnZV9zc3Jfc3R5bGVzLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcXVlcnlfc2VsZWN0b3JfYWxsLCByYWYsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwLCBzZXRfZGF0YSwgc2V0X2RhdGFfZGV2LCBzZXRfaW5wdXRfdHlwZSwgc2V0X2lucHV0X3ZhbHVlLCBzZXRfbm93LCBzZXRfcmFmLCBzZXRfc3RvcmVfdmFsdWUsIHNldF9zdHlsZSwgc2V0X3N2Z19hdHRyaWJ1dGVzLCBzcGFjZSwgc3ByZWFkLCBzcmNfdXJsX2VxdWFsLCBzdGFydF9oeWRyYXRpbmcsIHN0b3BfcHJvcGFnYXRpb24sIHN1YnNjcmliZSwgc3ZnX2VsZW1lbnQsIHRleHQsIHRpY2ssIHRpbWVfcmFuZ2VzX3RvX2FycmF5LCB0b19udW1iZXIsIHRvZ2dsZV9jbGFzcywgdHJhbnNpdGlvbl9pbiwgdHJhbnNpdGlvbl9vdXQsIHRydXN0ZWQsIHVwZGF0ZV9hd2FpdF9ibG9ja19icmFuY2gsIHVwZGF0ZV9rZXllZF9lYWNoLCB1cGRhdGVfc2xvdCwgdXBkYXRlX3Nsb3RfYmFzZSwgdmFsaWRhdGVfY29tcG9uZW50LCB2YWxpZGF0ZV9keW5hbWljX2VsZW1lbnQsIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQsIHZhbGlkYXRlX2VhY2hfa2V5cywgdmFsaWRhdGVfc2xvdHMsIHZhbGlkYXRlX3N0b3JlLCB2YWxpZGF0ZV92b2lkX2R5bmFtaWNfZWxlbWVudCwgeGxpbmtfYXR0ciB9O1xuIiwiXG5leHBvcnQgY2xhc3MgU0NEUXVlcmllcyB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgcm9vdDogRWxlbWVudCxcblx0KXt9XG5cblx0XG5cdHB1YmxpYyBzdGF0aWMgU2VsZWN0b3JHU0UgPSBcIkdTRVwiXG5cdHB1YmxpYyBzZWFyY2hHU0VzKG9wdGlvbnM/OkNvbW1vbk9wdGlvbnMpOiBHU0VFbGVtZW50W117XG5cdFx0cmV0dXJuIHRoaXMuc2VhcmNoRWxlbWVudDxHU0VFbGVtZW50PihTQ0RRdWVyaWVzLlNlbGVjdG9yR1NFLCBbXCJsZEluc3RcIiwgXCJjYk5hbWVcIl0sIG9wdGlvbnMpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIFNlbGVjdG9ySUVEID0gXCJJRURcIlxuXHRwdWJsaWMgc2VhcmNoSUVEcyhvcHRpb25zPzpDb21tb25PcHRpb25zKTogSUVERWxlbWVudFtde1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaEVsZW1lbnQ8SUVERWxlbWVudD4oU0NEUXVlcmllcy5TZWxlY3RvcklFRCwgW1wibmFtZVwiXSwgb3B0aW9ucylcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgU2VsZWN0b3JHU0VDb250cm9sID0gXCJHU0VDb250cm9sXCJcblx0cHVibGljIHNlYXJjaEdTRUNvbnRyb2xzKG9wdGlvbnM/OkNvbW1vbk9wdGlvbnMpOiBHU0VDb250cm9sRWxlbWVudFtdIHtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hFbGVtZW50PEdTRUNvbnRyb2xFbGVtZW50Pihcblx0XHRcdFNDRFF1ZXJpZXMuU2VsZWN0b3JHU0VDb250cm9sLFxuXHRcdFx0W1wibmFtZVwiLCBcImRhdFNldFwiXSxcblx0XHRcdG9wdGlvbnMsXG5cdFx0KVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBTZWxlY3RvcklucHV0ID0gXCJJbnB1dHNcIlxuXHRwdWJsaWMgc2VhcmNoSW5wdXRzKG9wdGlvbnM/OiBDb21tb25PcHRpb25zKTogSW5wdXRFbGVtZW50W10ge1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaEVsZW1lbnQ8SW5wdXRFbGVtZW50PihTQ0RRdWVyaWVzLlNlbGVjdG9ySW5wdXQsW10sb3B0aW9ucylcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgU2VsZWN0b3JFeHRSZWYgPSBcIkV4dFJlZlwiXG5cdHB1YmxpYyBzZWFyY2hFeHRSZWYob3B0aW9ucz86IENvbW1vbk9wdGlvbnMpOiBJbnB1dEV4dFJlZkVsZW1lbnRbXXtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hFbGVtZW50PElucHV0RXh0UmVmRWxlbWVudD4oXG5cdFx0XHRTQ0RRdWVyaWVzLlNlbGVjdG9yRXh0UmVmLCBcblx0XHRcdFtcblx0XHRcdFx0XCJpZWROYW1lXCIsXG5cdFx0XHRcdFwic2VydmljZVR5cGVcIixcblx0XHRcdFx0Ly8gXCJsZEluc3RcIixcblx0XHRcdFx0Ly8gXCJsbkNsYXNzXCIsXG5cdFx0XHRcdC8vIFwibG5JbnN0XCIsXG5cdFx0XHRcdC8vIFwicHJlZml4XCIsXG5cdFx0XHRcdC8vIFwiZG9OYW1lXCIsXG5cdFx0XHRcdC8vIFwiZGFOYW1lXCIsXG5cdFx0XHRcdC8vIFwic3JjTERJbnN0XCIsXG5cdFx0XHRcdC8vIFwic3JjUHJlZml4XCIsXG5cdFx0XHRcdFwic3JjQ0JOYW1lXCIsXG5cdFx0XHRdLFxuXHRcdFx0b3B0aW9ucyxcblx0XHQpXG5cdH1cblx0XG5cdHB1YmxpYyBzdGF0aWMgU2VsZWN0b3JEYXRhU2V0ID0gXCJEYXRhU2V0XCJcblx0cHVibGljIHNlYXJjaERhdGFTZXRCeU5hbWUobmFtZTpzdHJpbmcsIG9wdGlvbnM/OkNvbW1vbk9wdGlvbnMpOiBPcHRpb25hbDxEYXRhU2V0RWxlbWVudD57XG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBgJHtTQ0RRdWVyaWVzLlNlbGVjdG9yRGF0YVNldH1bbmFtZT1cIiR7bmFtZX1cIl1gXG5cdFx0Y29uc3QgZWxlbWVudHMgPSB0aGlzLnNlYXJjaEVsZW1lbnQ8RGF0YVNldEVsZW1lbnQ+KFxuXHRcdFx0c2VsZWN0b3IsXG5cdFx0XHRbXCJuYW1lXCJdLFxuXHRcdFx0b3B0aW9ucyxcblx0XHQpXG5cdFx0aWYoZWxlbWVudHMubGVuZ3RoICE9PSAxKXtcblx0XHRcdGNvbnNvbGUubG9nKHtsZXZlbDogXCJlcnJvclwiLCBtc2c6IFwid2UgZm91bmQgbm90IGV4YWN0bHkgb25lIGVsZW1lbnRcIiwgbGVuZ3RoOiBlbGVtZW50cy5sZW5ndGh9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdHJldHVybiBlbGVtZW50c1swXVxuXHR9XG5cblx0Ly8gcHVibGljIHNlYXJjaFN1Yk5ldHdvcmtCeUdPT1NFKCBpZWROYW1lOiBzdHJpbmcsIGxkSW5zdDogc3RyaW5nLCBnc2VDb250cm9sTmFtZTogc3RyaW5nKXtcblxuXHQvLyB9XG5cblx0Ly8gV2UgZG9uJ3QgdXNlIHRoZSB0aGUgc3RhbmRhcmQgZnVuY3Rpb25zIGJlY2F1c2Ugd2UgbG9vayBmb3IgcGFyZW50IGVsZW1lbnRzXG5cdHB1YmxpYyBzdGF0aWMgU2VsZWN0b3JMRCA9IFwiTERldmljZVwiXG5cdHB1YmxpYyBzZWFyY2hFbGVtZW50c0xEUGFyZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBPcHRpb25hbDxMRGV2aWNlRWxlbWVudD57XG5cdFx0Y29uc3QgZWwgPSBlbGVtZW50LmNsb3Nlc3QoU0NEUXVlcmllcy5TZWxlY3RvckxEKVxuXHRcdGlmKCFlbCl7XG5cdFx0XHRjb25zb2xlLmxvZyh7bGV2ZWw6IFwiZXJyb3JcIiwgbXNnOiBcImNvdWxkIG5vdCBmaW5kIExEIHBhcmVudFwiLCBlbGVtZW50fSlcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRjb25zdCBsZCA9IGNyZWF0ZUVsZW1lbnQ8TERldmljZUVsZW1lbnQ+KGVsLFtcImluc3RcIl0pXG5cdFx0cmV0dXJuIGxkXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIFNlbGVjdG9yR1NFRWxlbWVudCA9IFwiR1NFXCJcblx0cHVibGljIHNlYXJjaEdTRShsZEluc3Q6c3RyaW5nLCBjYk5hbWU6c3RyaW5nLCBvcHRpb25zPzpDb21tb25PcHRpb25zKTogT3B0aW9uYWw8R1NFRWxlbWVudD57XG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBgJHtTQ0RRdWVyaWVzLlNlbGVjdG9yR1NFRWxlbWVudH1bbGRJbnN0PScke2xkSW5zdH0nXVtjYk5hbWU9JyR7Y2JOYW1lfSddYFxuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5zZWFyY2hFbGVtZW50PEdTRUVsZW1lbnQ+KHNlbGVjdG9yLFtcImNiTmFtZVwiLFwibGRJbnN0XCJdLCBvcHRpb25zKVxuXHRcdGlmKGVsZW1lbnRzLmxlbmd0aCAhPT0gMSl7XG5cdFx0XHRjb25zb2xlLmVycm9yKHtcblx0XHRcdFx0bGV2ZWw6ICBcImVycm9yXCIsIFxuXHRcdFx0XHRtc2c6ICAgIFwid2UgZGlkIG5vdCBmb3VuZCBleGFjbHR5IG9uZSBHU0UgZWxlbWVudFwiLCBcblx0XHRcdFx0bGVuZ3RoOiBlbGVtZW50cy5sZW5ndGgsIFxuXHRcdFx0XHRsZEluc3QsXG5cdFx0XHRcdGNiTmFtZSxcblx0XHRcdFx0c2VsZWN0b3IsXG5cdFx0XHRcdHJvb3Q6ICAgdGhpcy5yb290LFxuXHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0fSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50c1swXVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBTZWxlY3RvclN1Yk5ldHdvcmsgPSBcIlN1Yk5ldHdvcmtcIlxuXHRwdWJsaWMgc2VhcmNoRWxlbWVudHNQYXJlbnRTdWJuZXR3b3JrKGVsZW1lbnQ6IEVsZW1lbnQpOiBPcHRpb25hbDxTdWJOZXR3b3JrRWxlbWVudD57XG5cdFx0Y29uc3QgZWwgPSBlbGVtZW50LmNsb3Nlc3QoU0NEUXVlcmllcy5TZWxlY3RvclN1Yk5ldHdvcmspXG5cdFx0aWYoIWVsKXtcblx0XHRcdGNvbnNvbGUuZXJyb3Ioe2xldmVsOiBcImVycm9yXCIsIG1zZzogXCJjb3VsZCBub3QgZmluZCBTdWJOZXR3b3JrIHBhcmVudFwiLCBlbGVtZW50fSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IHN1Yk5ldG93ayA9IGNyZWF0ZUVsZW1lbnQ8U3ViTmV0d29ya0VsZW1lbnQ+KGVsLCBbXCJuYW1lXCJdKVxuXHRcdHJldHVybiBzdWJOZXRvd2tcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgRE9UeXBlID0gXCJET1R5cGVcIlxuXHRwdWJsaWMgc2VhcmNoRE9UeXBlcyhvcHRpb25zPzpDb21tb25PcHRpb25zKTogRE9UeXBlRWxlbWVudFtde1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaEVsZW1lbnQ8RE9UeXBlRWxlbWVudD4oU0NEUXVlcmllcy5ET1R5cGUsIFtcImlkXCJdLCBvcHRpb25zKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBETyA9IFwiRE9cIlxuXHRwdWJsaWMgc2VhcmNoRE9zQnlUeXBlKHR5cGU6IHN0cmluZywgb3B0aW9ucz86Q29tbW9uT3B0aW9ucyk6IERPRWxlbWVudFtde1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gYCR7U0NEUXVlcmllcy5ET31bdHlwZT0nJHt0eXBlfSddYFxuXHRcdHJldHVybiB0aGlzLnNlYXJjaEVsZW1lbnQ8RE9FbGVtZW50PihzZWxlY3RvciwgW1wibmFtZVwiLCBcInR5cGVcIl0sIG9wdGlvbnMpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIExOb2RlVHlwZSA9IFwiTE5vZGVUeXBlXCJcblx0cHVibGljIHNlYXJjaExOb2RlVHlwZXMob3B0aW9ucz86Q29tbW9uT3B0aW9ucyk6IExOb2RlVHlwZUVsZW1lbnRbXXtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hFbGVtZW50PExOb2RlVHlwZUVsZW1lbnQ+KFNDRFF1ZXJpZXMuTE5vZGVUeXBlLCBbXCJpZFwiLCBcImxuQ2xhc3NcIl0sIG9wdGlvbnMpXG5cdH1cblxuXHRcblx0Ly8gXG5cdC8vIFByaXZhdGVzXG5cdC8vIFxuXHRwcml2YXRlIHNlYXJjaEVsZW1lbnQ8VCBleHRlbmRzIFNDREVsZW1lbnQ+KHNlbGVjdG9yOiBzdHJpbmcsIGF0dHJpYnV0ZUxpc3Q6IEF0dHJpYnV0ZUxpc3Q8VD5bXSwgb3B0aW9ucz86Q29tbW9uT3B0aW9ucyk6IFRbXXtcblx0XHRjb25zdCByb290ID0gdGhpcy5kZXRlcm1pbmVSb290KG9wdGlvbnMpXG5cdFx0Y29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKCByb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpICkgXG5cdFx0Y29uc3QgZWxzID0gZWxlbWVudHMubWFwKCBlbCA9PiBjcmVhdGVFbGVtZW50PFQ+KGVsLCBhdHRyaWJ1dGVMaXN0KSApXG5cdFx0cmV0dXJuIGVsc1xuXHR9XG5cblx0cHJpdmF0ZSBkZXRlcm1pbmVSb290KG9wdGlvbnM/OiBDb21tb25PcHRpb25zKTogRWxlbWVudCB7XG5cdFx0aWYoIW9wdGlvbnM/LnJvb3QpeyBcblx0XHRcdHJldHVybiB0aGlzLnJvb3QgXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9wdGlvbnMucm9vdFxuXHR9XG59XG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlRWxlbWVudDxUIGV4dGVuZHMgU0NERWxlbWVudD4oZWw6IEVsZW1lbnQsIGF0dHJpYnV0ZUxpc3Q6IChrZXlvZiBUKVtdKTogVHtcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQ8VCBleHRlbmRzIFNDREVsZW1lbnQ+KGVsOiBFbGVtZW50LCBhdHRyaWJ1dGVMaXN0OiBBdHRyaWJ1dGVMaXN0PFQ+W10pOiBUe1xuXHRjb25zdCBvYmo6IHtba2V5OiBzdHJpbmddOiB1bmtub3dufSA9IHsgZWxlbWVudDogZWwgfVxuXHRmb3IoY29uc3QgYXR0ciBvZiBhdHRyaWJ1dGVMaXN0KXtcblx0XHRjb25zdCBrZXkgPSBhdHRyIGFzIHN0cmluZ1xuXHRcdG9ialtrZXldID0gZWwuZ2V0QXR0cmlidXRlKGtleSkgPz8gXCJcIlxuXHR9XG5cblx0cmV0dXJuIG9iaiBhcyBUXG59XG5cbmV4cG9ydCB0eXBlIERPVHlwZUVsZW1lbnQgPSBTQ0RFbGVtZW50ICYge1xuXHRpZDogc3RyaW5nXG5cdGNkYzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIERPRWxlbWVudCA9IFNDREVsZW1lbnQgJiB7XG5cdG5hbWU6IHN0cmluZ1xuXHR0eXBlOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTE5vZGVUeXBlRWxlbWVudCA9IFNDREVsZW1lbnQgJiB7XG5cdGlkOiBzdHJpbmdcblx0bG5DbGFzczogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIENvbW1vbk9wdGlvbnMgPSB7XG5cdHJvb3Q/OiBFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIFNDREVsZW1lbnQgPSB7XG5cdGVsZW1lbnQ6IEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgR1NFRWxlbWVudCA9IFNDREVsZW1lbnQgJiB7XG5cdGxkSW5zdDogc3RyaW5nXG5cdGNiTmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIElFREVsZW1lbnQgPSBTQ0RFbGVtZW50ICYge1xuXHRuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgR1NFQ29udHJvbEVsZW1lbnQgPSBTQ0RFbGVtZW50ICYge1xuXHRuYW1lOiBzdHJpbmdcblx0ZGF0U2V0OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgRGF0YVNldEVsZW1lbnQgPSBTQ0RFbGVtZW50ICYge1xuXHRuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTERldmljZUVsZW1lbnQgPSBTQ0RFbGVtZW50ICYge1xuXHRpbnN0OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgU3ViTmV0d29ya0VsZW1lbnQgPSBTQ0RFbGVtZW50ICYge1xuXHRuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgSW5wdXRFbGVtZW50ID0gU0NERWxlbWVudFxuXG5leHBvcnQgdHlwZSBJbnB1dEV4dFJlZkVsZW1lbnQgPSBTQ0RFbGVtZW50ICYge1x0XG5cdGllZE5hbWU6IFx0IHN0cmluZyxcblx0c2VydmljZVR5cGU6IHN0cmluZyxcblx0bGRJbnN0OiBcdCBzdHJpbmcsXG5cdGxuQ2xhc3M6IFx0IHN0cmluZyxcblx0bG5JbnN0OiAgXHQgc3RyaW5nLFxuXHRwcmVmaXg6ICBcdCBzdHJpbmcsXG5cdGRvTmFtZTogIFx0IHN0cmluZyxcblx0ZGFOYW1lOiAgXHQgc3RyaW5nLFxuXHRzcmNMREluc3Q6IFx0IHN0cmluZyxcblx0c3JjUHJlZml4OiBcdCBzdHJpbmcsXG5cdHNyY0NCTmFtZTogXHQgc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBPcHRpb25hbDxUPiA9IFQgfCB1bmRlZmluZWRcbmV4cG9ydCB0eXBlIEF0dHJpYnV0ZUxpc3Q8VCBleHRlbmRzIFNDREVsZW1lbnQ+ID0gRXhjbHVkZTxrZXlvZiBULCBrZXlvZiBTQ0RFbGVtZW50PiIsIi8qKlxuICogU291cmNlIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9jYS1kL29zY2QtdGVtcGxhdGUtZ2VuZXJhdG9yL2Jsb2IvbWFpbi9nZW5lcmF0ZS10ZW1wbGF0ZXMuanNcbiAqL1xuXG5mdW5jdGlvbiBkZXNjcmliZUVudW1UeXBlKGVsZW1lbnQ6IEVsZW1lbnQpIHtcblx0bGV0IF9hLCBfYlxuXHRjb25zdCB2YWxzID0ge31cblxuXHRmb3IgKGNvbnN0IHZhbCBvZiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pXG5cdFx0LmZpbHRlcihjaGlsZCA9PiBjaGlsZC50YWdOYW1lID09PSBcIkVudW1WYWxcIilcblx0XHQuc29ydCgodjEsIHYyKSA9PiB7XG5cdFx0XHRsZXQgX2EsIF9iXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoKF9hID0gdjEuZ2V0QXR0cmlidXRlKFwib3JkXCIpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcIlwiLCAxMCkgLVxuICAgICAgICAgICAgcGFyc2VJbnQoKF9iID0gdjIuZ2V0QXR0cmlidXRlKFwib3JkXCIpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiLCAxMClcblx0XHR9KSlcblx0XHR2YWxzWyhfYSA9IHZhbC5nZXRBdHRyaWJ1dGUoXCJvcmRcIikpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiXCJdID0gKF9iID0gdmFsLnRleHRDb250ZW50KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiXG5cdFxuXHRyZXR1cm4geyB2YWxzIH1cbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVEQVR5cGUoZWxlbWVudDogRWxlbWVudCkge1xuXHRsZXQgX2Fcblx0Y29uc3QgYmRhcyA9IHt9XG5cdGZvciAoY29uc3QgYmRhIG9mIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbilcblx0XHQuZmlsdGVyKGNoaWxkID0+IGNoaWxkLnRhZ05hbWUgPT09IFwiQkRBXCIpXG5cdFx0LnNvcnQoKGMxLCBjMikgPT4gYzEub3V0ZXJIVE1MLmxvY2FsZUNvbXBhcmUoYzIub3V0ZXJIVE1MKSkpIHtcblx0XHRjb25zdCBbYlR5cGUsIHR5cGUsIGRjaGcsIGR1cGQsIHFjaGddID0gW1xuXHRcdFx0XCJiVHlwZVwiLFxuXHRcdFx0XCJ0eXBlXCIsXG5cdFx0XHRcImRjaGdcIixcblx0XHRcdFwiZHVwZFwiLFxuXHRcdFx0XCJxY2hnXCIsXG5cdFx0XS5tYXAoYXR0ciA9PiBiZGEuZ2V0QXR0cmlidXRlKGF0dHIpKVxuXHRcdGJkYXNbKF9hID0gYmRhLmdldEF0dHJpYnV0ZShcIm5hbWVcIikpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiXCJdID0geyBiVHlwZSwgdHlwZSwgZGNoZywgZHVwZCwgcWNoZyB9XG5cdH1cblx0cmV0dXJuIHsgYmRhcyB9XG59XG5mdW5jdGlvbiBkZXNjcmliZURPVHlwZShlbGVtZW50OiBFbGVtZW50KSB7XG5cdGNvbnN0IHNkb3MgPSB7fVxuXHRmb3IgKGNvbnN0IHNkbyBvZiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pXG5cdFx0LmZpbHRlcihjaGlsZCA9PiBjaGlsZC50YWdOYW1lID09PSBcIlNET1wiKVxuXHRcdC5zb3J0KChjMSwgYzIpID0+IGMxLm91dGVySFRNTC5sb2NhbGVDb21wYXJlKGMyLm91dGVySFRNTCkpKSB7XG5cdFx0Y29uc3QgW25hbWUsIHR5cGUsIHRyYW5zaWVudF0gPSBbXCJuYW1lXCIsIFwidHlwZVwiLCBcInRyYW5zaWVudFwiXS5tYXAoYXR0ciA9PiBzZG8uZ2V0QXR0cmlidXRlKGF0dHIpKVxuXHRcdHNkb3NbbmFtZSAhPT0gbnVsbCAmJiBuYW1lICE9PSB2b2lkIDAgPyBuYW1lIDogXCJcIl0gPSB7IHR5cGUsIHRyYW5zaWVudCB9XG5cdH1cblx0Y29uc3QgZGFzID0ge31cblx0Zm9yIChjb25zdCBkYSBvZiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pXG5cdFx0LmZpbHRlcihjaGlsZCA9PiBjaGlsZC50YWdOYW1lID09PSBcIkRBXCIpXG5cdFx0LnNvcnQoKGMxLCBjMikgPT4gYzEub3V0ZXJIVE1MLmxvY2FsZUNvbXBhcmUoYzIub3V0ZXJIVE1MKSkpIHtcblx0XHRjb25zdCBbbmFtZSwgZmMsIGJUeXBlLCB0eXBlLCBkY2hnLCBkdXBkLCBxY2hnXSA9IFtcblx0XHRcdFwibmFtZVwiLFxuXHRcdFx0XCJmY1wiLFxuXHRcdFx0XCJiVHlwZVwiLFxuXHRcdFx0XCJ0eXBlXCIsXG5cdFx0XHRcImRjaGdcIixcblx0XHRcdFwiZHVwZFwiLFxuXHRcdFx0XCJxY2hnXCIsXG5cdFx0XS5tYXAoYXR0ciA9PiBkYS5nZXRBdHRyaWJ1dGUoYXR0cikpXG5cdFx0ZGFzW25hbWUgIT09IG51bGwgJiYgbmFtZSAhPT0gdm9pZCAwID8gbmFtZSA6IFwiXCJdID0ge1xuXHRcdFx0ZmMsXG5cdFx0XHRiVHlwZSxcblx0XHRcdHR5cGUsXG5cdFx0XHRkY2hnLFxuXHRcdFx0ZHVwZCxcblx0XHRcdHFjaGcsXG5cdFx0fVxuXHR9XG5cdHJldHVybiB7XG5cdFx0c2Rvcyxcblx0XHRkYXMsXG5cdFx0Y2RjOiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImNkY1wiKSxcblx0fVxufVxuZnVuY3Rpb24gZGVzY3JpYmVMTm9kZVR5cGUoZWxlbWVudDogRWxlbWVudCl7XG5cdGNvbnN0IGRvcyA9IHt9XG5cdGZvciAoY29uc3QgZG9FbGVtZW50IG9mIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbilcblx0XHQuZmlsdGVyKGNoaWxkID0+IGNoaWxkLnRhZ05hbWUgPT09IFwiRE9cIilcblx0XHQuc29ydCgoYzEsIGMyKSA9PiBjMS5vdXRlckhUTUwubG9jYWxlQ29tcGFyZShjMi5vdXRlckhUTUwpKSkge1xuXHRcdGNvbnN0IFtuYW1lLCB0eXBlLCB0cmFuc2llbnRdID0gW1wibmFtZVwiLCBcInR5cGVcIiwgXCJ0cmFuc2llbnRcIl0ubWFwKGF0dHIgPT4gZG9FbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSlcblx0XHRkb3NbbmFtZSAhPT0gbnVsbCAmJiBuYW1lICE9PSB2b2lkIDAgPyBuYW1lIDogXCJcIl0gPSB7IHR5cGUsIHRyYW5zaWVudCB9XG5cdH1cblx0cmV0dXJuIHtcblx0XHRkb3MsXG5cdFx0bG5DbGFzczogZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJsbkNsYXNzXCIpLFxuXHR9XG59XG5cbnR5cGUgRGVzY3JpYmVyRm4gPSAoZWxlbWVudDogRWxlbWVudCkgPT4gYW55XG5jb25zdCB0eXBlRGVzY3JpcHRpb25zOiB7W2tleTogc3RyaW5nXTogRGVzY3JpYmVyRm4gfSA9IHtcblx0RW51bVR5cGU6ICBkZXNjcmliZUVudW1UeXBlLFxuXHREQVR5cGU6ICAgIGRlc2NyaWJlREFUeXBlLFxuXHRET1R5cGU6ICAgIGRlc2NyaWJlRE9UeXBlLFxuXHRMTm9kZVR5cGU6IGRlc2NyaWJlTE5vZGVUeXBlLFxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NyaWJlRWxlbWVudChlbGVtZW50OiBFbGVtZW50KSB7XG5cdGxldCBfYSwgX2Jcblx0cmV0dXJuICgoX2IgPSAoX2EgPSB0eXBlRGVzY3JpcHRpb25zW2VsZW1lbnQudGFnTmFtZV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHR5cGVEZXNjcmlwdGlvbnMsIGVsZW1lbnQpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB7IHhtbDogZWxlbWVudC5vdXRlckhUTUwgfSlcbn1cbiIsImltcG9ydCB7IGRlc2NyaWJlRWxlbWVudCB9IGZyb20gXCIuL2Rlc2NyaWJlcnNcIlxuXG5leHBvcnQgZnVuY3Rpb24gaGFzaEVsZW1lbnQoZWw6IEVsZW1lbnQpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRjb25zdCBkZXNjID0gZGVzY3JpYmVFbGVtZW50KGVsKVxuXHRcblx0cmV0dXJuIGhhc2goSlNPTi5zdHJpbmdpZnkoZGVzYykpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoKHN0cjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0Y29uc3QgYnVmZmVyID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHN0cilcblx0Y29uc3QgaGFzaEJ1ZmZlciA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KFwiU0hBLTI1NlwiLCBidWZmZXIpXG5cdGNvbnN0IGhhc2hBcnJheSA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpXG5cdGNvbnN0IGhhc2hIZXggPSBoYXNoQXJyYXkubWFwKGIgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKS5qb2luKFwiXCIpXG5cdHJldHVybiBoYXNoSGV4XG59IiwiaW1wb3J0IHsgRE9FbGVtZW50LCBET1R5cGVFbGVtZW50LCBMTm9kZVR5cGVFbGVtZW50LCBTQ0RRdWVyaWVzIH0gZnJvbSBcIi4uL3NjZC9zY2QtcXVlcnlcIlxuaW1wb3J0IHsgaGFzaEVsZW1lbnQgfSBmcm9tIFwiLi4veG1sL2hhc2hcIlxuXG4vKiogXG4gKiBUaGUgbmFtZSBpcyB0ZW1wb3JhcnksIHJlbmFtZSBpdCBpZiB5b3UgaGF2ZSBhIGJldHRlciBvbmVcbiAqIFVDID0gVXNlIENhc2VcbiAqL1xuZXhwb3J0IGNsYXNzIFVDVHlwZURlZHVwZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBzY2RRdWVyaWVzOiBTQ0RRdWVyaWVzLFxuXHQpe31cblxuXHRwdWJsaWMgYXN5bmMgZmluZER1cGxpY2F0ZU9iamVjdFR5cGVzKCk6IFByb21pc2U8SGFzaGVkRE9UW11bXT4ge1xuXHRcdGNvbnN0IGRvdHMgPSB0aGlzLnNjZFF1ZXJpZXMuc2VhcmNoRE9UeXBlcygpXG5cdFx0XG5cdFx0Y29uc3QgaGFzaGVkRG90czogSGFzaGVkRE9UW10gPSBhd2FpdCBQcm9taXNlLmFsbChcblx0XHRcdGRvdHMubWFwKHRoaXMuY3JlYXRlSGFzaGVkRG90LmJpbmQodGhpcykpLFxuXHRcdClcblx0XHRjb25zdCBncm91cGVkID0gdGhpcy5ncm91cEJ5SGFzaChoYXNoZWREb3RzKVxuXHRcdGNvbnN0IGR1cGxpY2F0ZXMgPSBPYmplY3QudmFsdWVzKGdyb3VwZWQpLmZpbHRlcihncm91cCA9PiBncm91cC5sZW5ndGggPiAxKVxuXHRcdFxuXHRcdHJldHVybiBkdXBsaWNhdGVzXG5cdH1cblxuXHRwdWJsaWMgZmluZFVzYWdlT2ZET1QoZG90SWQ6IHN0cmluZyk6IERPRWxlbWVudFtdIHtcblx0XHRjb25zdCBkb3MgPSB0aGlzLnNjZFF1ZXJpZXMuc2VhcmNoRE9zQnlUeXBlKGRvdElkKVxuXHRcdHJldHVybiBkb3Ncblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgY3JlYXRlSGFzaGVkRG90KGRvdDogRE9UeXBlRWxlbWVudCk6IFByb21pc2U8SGFzaGVkRE9UPntcblx0XHRjb25zdCBoYXNoID0gYXdhaXQgaGFzaEVsZW1lbnQoZG90LmVsZW1lbnQpXG5cdFx0Y29uc3QgdXNhZ2VzID0gdGhpcy5maW5kVXNhZ2VPZkRPVChkb3QuaWQpXG5cdFx0cmV0dXJuIHtcblx0XHRcdGVsZW1lbnQ6IGRvdCxcblx0XHRcdGhhc2gsXG5cdFx0XHR1c2FnZXMsXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBncm91cEJ5SGFzaChkb3RzOiBIYXNoZWRET1RbXSk6IEdyb3VwZWRIYXNoZWRET1Qge1xuXHRcdGNvbnN0IGdyb3VwZWQ6IEdyb3VwZWRIYXNoZWRET1QgPSB7fVxuXHRcdGZvciAoY29uc3QgZG90IG9mIGRvdHMpIHtcblx0XHRcdGlmICghZ3JvdXBlZFtkb3QuaGFzaF0pIHtcblx0XHRcdFx0Z3JvdXBlZFtkb3QuaGFzaF0gPSBbXVxuXHRcdFx0fVxuXHRcdFx0Z3JvdXBlZFtkb3QuaGFzaF0ucHVzaChkb3QpXG5cdFx0fVxuXHRcdHJldHVybiBncm91cGVkXG5cdH1cblxuXHRcbn1cblxuZXhwb3J0IHR5cGUgSGFzaGVkRE9UID0ge1xuXHRlbGVtZW50OiBET1R5cGVFbGVtZW50LFxuXHRoYXNoOiBzdHJpbmdcblx0dXNhZ2VzOiBET0VsZW1lbnRbXVxufVxuXG50eXBlIEdyb3VwZWRIYXNoZWRET1QgPSB7XG5cdFtoYXNoOiBzdHJpbmddOiBIYXNoZWRET1RbXVxufSIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJ0c2NkLWNvdW50ZXJcIiAvPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuXHRpbXBvcnQgY3NzIGZyb20gXCIuL2NvdW50ZXIuc2Nzcz9pbmxpbmVcIlxuXG5cdGV4cG9ydCBsZXQgY291bnQ6IG51bWJlclxuXHRleHBvcnQgbGV0IG1heCA9IDEwMFxuXG48L3NjcmlwdD5cblxuPGNvdW50ZXI+XG5cdHsjaWYgY291bnQgPD0gbWF4fVxuXHRcdHtjb3VudH1cblx0ezplbHNlfVxuXHRcdHttYXgtMX0rXG5cdHsvaWZ9XG48L2NvdW50ZXI+XG5cbjxzdmVsdGU6ZWxlbWVudCB0aGlzPVwic3R5bGVcIj57QGh0bWwgY3NzfTwvc3ZlbHRlOmVsZW1lbnQ+IiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cInRzY2QtZ3JvdXAtY2FyZFwiIC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5cdGltcG9ydCB7IENvdW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb3VudGVyXCJcblx0aW1wb3J0IGNzcyBmcm9tIFwiLi9ncm91cC1jYXJkLnNjc3M/aW5saW5lXCJcblxuXHQvLyBJbnB1dFxuXHRleHBvcnQgbGV0IGl0ZW1zOiBzdHJpbmdbXSA9IFtdXG5cdGV4cG9ydCBsZXQgZGF0YVRlc3RpZCA9IFwiXCJcblx0ZXhwb3J0IGxldCBzZWxlY3RlZCA9IGZhbHNlXG5cblx0Ly8gQ29uZmlnXG5cdGNvbnN0IE1BWF9OUl9PRl9JVEVNUyA9IDNcblx0JDogZGlzcGxheWVkSXRlbXMgPSBpdGVtcy5zbGljZSgwLCBNQVhfTlJfT0ZfSVRFTVMpXG5cdCQ6IHRpdGxlVGV4dCA9IGl0ZW1zLmpvaW4oXCJcXG5cIilcblxuXG48L3NjcmlwdD5cblxuPGdyb3VwLWNhcmQgXG5cdG9uOmNsaWNrIFxuXHRvbjprZXlwcmVzcyBcblx0ZGF0YS10ZXN0aWQ9e2RhdGFUZXN0aWR9IFxuXHRjbGFzczpzZWxlY3RlZCBcblx0dGl0bGU9e3RpdGxlVGV4dH1cbj5cblx0PGRpdiBjbGFzcz1cImxlZnRcIj5cblx0PHVsPlxuXHRcdHsjZWFjaCBkaXNwbGF5ZWRJdGVtcyBhcyBpdGVtfVxuXHRcdFx0PGxpPntpdGVtfTwvbGk+XG5cdFx0ey9lYWNofVxuXHQ8L3VsPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cInJpZ2h0XCI+XG5cdFx0PENvdW50ZXIgY291bnQ9e2l0ZW1zLmxlbmd0aH0gLz5cblx0PC9kaXY+XG48L2dyb3VwLWNhcmQ+XG5cbjxzdmVsdGU6ZWxlbWVudCB0aGlzPVwic3R5bGVcIj57QGh0bWwgY3NzfTwvc3ZlbHRlOmVsZW1lbnQ+IiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cInRzY2QtZ3JvdXAtY2FyZC1saXN0XCIgLz5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cblx0aW1wb3J0IHsgR3JvdXBDYXJkIH0gZnJvbSBcIi4uL2dyb3VwLWNhcmQvXCJcblx0aW1wb3J0IGNzcyBmcm9tIFwiLi9ncm91cC1jYXJkLWxpc3Quc2Nzcz9pbmxpbmVcIlxuXHRpbXBvcnQge2NyZWF0ZUV2ZW50RGlzcGF0Y2hlcn0gZnJvbSBcInN2ZWx0ZVwiXG5cblx0Ly8gSW5wdXRcblx0ZXhwb3J0IGxldCBpdGVtU2V0czogc3RyaW5nW11bXSA9IFtdXG5cdGV4cG9ydCBsZXQgc2VsZWN0ZWRJbmRleCA9IC0xXG5cblx0Ly8gQ29uZmlnXG5cdGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKClcblxuXHRmdW5jdGlvbiBoYW5kbGVDbGljayhpbmRleDogbnVtYmVyKXtcblx0XHRkaXNwYXRjaChcInNlbGVjdFwiLCB7aW5kZXh9KVxuXHR9XG5cbjwvc2NyaXB0PlxuXG48Z3JvdXAtY2FyZC1saXN0PlxuXHR7I2VhY2ggaXRlbVNldHMgYXMgaXRlbVNldCwgaWkgfVxuXHRcdDxHcm91cENhcmQgXG5cdFx0XHRpdGVtcz17aXRlbVNldH0gXG5cdFx0XHRvbjpjbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaWkpfVxuXHRcdFx0ZGF0YVRlc3RpZD17YGNhcmRfJHtpaX1gfVxuXHRcdFx0c2VsZWN0ZWQ9e3NlbGVjdGVkSW5kZXggPT09IGlpfVxuXHRcdC8+XG5cdHsvZWFjaH1cbjwvZ3JvdXAtY2FyZC1saXN0PlxuXG48c3ZlbHRlOmVsZW1lbnQgdGhpcz1cInN0eWxlXCI+e0BodG1sIGNzc308L3N2ZWx0ZTplbGVtZW50PlxuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cInRzY2QtYnV0dG9uXCIgLz5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5cblx0aW1wb3J0IGNzcyBmcm9tIFwiLi9idXR0b24uc2Nzcz9pbmxpbmVcIlxuXG5cdC8vIElucHV0XG5cdGV4cG9ydCBsZXQgYmxvY2sgPSBmYWxzZVxuXHRleHBvcnQgbGV0IGRhbmdlcm91cyA9IGZhbHNlXG5cdGV4cG9ydCBsZXQgbGFiZWw6IHN0cmluZ1xuXHRleHBvcnQgbGV0IHRlc3RpZCA9IFwiXCJcblx0ZXhwb3J0IGxldCBkaXNhYmxlZCA9IGZhbHNlXG5cdGV4cG9ydCBsZXQgdHlwZTogXCJwcmltYXJ5XCIgfCBcInNlY29uZGFyeVwiIHwgXCJ0ZXJ0aWFyeVwiID0gXCJwcmltYXJ5XCJcblxuPC9zY3JpcHQ+XG5cbjxidXR0b24gXG5cdGNsYXNzOmJsb2NrXG5cdGNsYXNzOmRhbmdlcm91c1xuXHRjbGFzcz17dHlwZX1cblx0e2Rpc2FibGVkfVxuXHRvbjpjbGlja1xuXHRkYXRhLXRlc3RpZD17dGVzdGlkfVxuPlxuXHR7bGFiZWx9XG48L2J1dHRvbj5cblxuPHN2ZWx0ZTplbGVtZW50IHRoaXM9XCJzdHlsZVwiPntAaHRtbCBjc3N9PC9zdmVsdGU6ZWxlbWVudD4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwidHNjZC1jaGVja2JveFwiIC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5cdGltcG9ydCBjc3MgZnJvbSBcIi4vY2hlY2tib3guc2Nzcz9pbmxpbmVcIlxuXG5cdGV4cG9ydCBsZXQgY2hlY2tlZCA9IGZhbHNlXG5cdGV4cG9ydCBsZXQgbGFiZWw6IHN0cmluZ1xuXHRleHBvcnQgbGV0IHRlc3RpZCA9IFwiXCJcblxuPC9zY3JpcHQ+XG5cbjxjaGVja2JveCBkYXRhLXRlc3RpZD17dGVzdGlkfT5cblx0PGxhYmVsPlxuXHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbjpjaGFuZ2Ugb246aW5wdXQgYmluZDpjaGVja2VkPXtjaGVja2VkfSAgLz5cblx0XHQ8c3Bhbj57bGFiZWx9PC9zcGFuPlxuXHQ8L2xhYmVsPlxuPC9jaGVja2JveD5cblxuPHN2ZWx0ZTplbGVtZW50IHRoaXM9XCJzdHlsZVwiPntAaHRtbCBjc3N9PC9zdmVsdGU6ZWxlbWVudD4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwidHNjZC1tZXJnZXJcIiAvPlxuPHNjcmlwdCBsYW5nPVwidHNcIj5cblxuXHRpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25cIlxuXHRpbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guc3ZlbHRlXCJcblx0aW1wb3J0IHR5cGUgeyBNZXJnYWJsZUl0ZW0gfSBmcm9tIFwiLi9tZXJnYWJsZS1pdGVtc1wiXG5cdGltcG9ydCBjc3MgZnJvbSBcIi4vbWVyZ2VyLnNjc3M/aW5saW5lXCJcblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSBcInN2ZWx0ZVwiXG5cblx0Ly8gSW5wdXRcblx0ZXhwb3J0IGxldCBpdGVtczogTWVyZ2FibGVJdGVtW10gPSBbXVxuXHRleHBvcnQgbGV0IHN0cnVjdHVyZTogc3RyaW5nW10gPSBbXVxuXHQvLyBTZXR1cFxuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpXG5cblx0Ly8gQWN0aW9uc1xuXHRsZXQgY2hlY2tlZEluZGV4ZXM6IFNldDxudW1iZXI+ID0gbmV3IFNldCgpXG5cdGxldCBhZmZlY3RlZExOVHlwZXM6IHtsbjogc3RyaW5nLCBkb3Q6IHN0cmluZ31bXSA9IFtdXG5cdC8vIGxldCBjaGVja2VkSW5kZXhlcyA9IG5ldyBNYXA8bnVtYmVyLCBib29sZWFuPigpXG5cdGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShpbmRleDogbnVtYmVyLCBlOiBFdmVudCkge1xuXHRcdGNvbnN0IGlucHV0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxuXHRcdGlmKGlucHV0LmNoZWNrZWQpe1xuXHRcdFx0Y2hlY2tlZEluZGV4ZXMuYWRkKGluZGV4KVxuXHRcdH1lbHNlIHtcblx0XHRcdGNoZWNrZWRJbmRleGVzLmRlbGV0ZShpbmRleClcblx0XHR9XG5cdFx0Ly8gY2hlY2tlZEluZGV4ZXMuc2V0KGluZGV4LCBpbnB1dC5jaGVja2VkKVxuXHRcdGNoZWNrZWRJbmRleGVzID0gY2hlY2tlZEluZGV4ZXNcblx0fVxuXG5cdGZ1bmN0aW9uIGdlbmVyYXRlQWZmZWN0ZWRMTlR5cGVzKGluZGV4ZXM6IG51bWJlcltdKXtcblx0XHRjb25zdCBuZXdBZmZlY3RlZExOVHlwZXMgPSBbXVxuXHRcdGZvcihjb25zdCBpbmRleCBvZiBpbmRleGVzKXtcblx0XHRcdGNvbnN0IGl0ZW0gPSBpdGVtc1tpbmRleF1cblx0XHRcdGNvbnN0IHVzYWdlcyA9IGl0ZW0udXNhZ2VzXG5cdFx0XHRmb3IoIGNvbnN0IGxuIG9mIHVzYWdlcyl7XG5cdFx0XHRcdG5ld0FmZmVjdGVkTE5UeXBlcy5wdXNoKHtsbiwgZG90OiBpdGVtLmxhYmVsfSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5ld0FmZmVjdGVkTE5UeXBlc1xuXHR9XG5cdCQ6IGFmZmVjdGVkTE5UeXBlcyA9IGdlbmVyYXRlQWZmZWN0ZWRMTlR5cGVzKFsuLi5jaGVja2VkSW5kZXhlcy52YWx1ZXMoKV0pXG5cblxuXHQkOiBpc01lcmdlUG9zc2libGUgPSBpc1NvbWVEdXBsaWNhdGVTZWxlY3RlZCAmJiBpc1RhcmdldFNlbGVjdGVkXG5cdGZ1bmN0aW9uIGhhbmRsZU1lcmdlQ2xpY2soZTogTW91c2VFdmVudCl7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJbmRleGVzID0gWy4uLkFycmF5LmZyb20oIGNoZWNrZWRJbmRleGVzLnZhbHVlcygpICldXG5cdFx0aWYoIWlzTWVyZ2VQb3NzaWJsZSl7IHJldHVybiB9XG5cdFx0ZGlzcGF0Y2goXCJtZXJnZVwiLCB7c2VsZWN0ZWRJbmRleGVzLCBzZWxlY3RlZE1lcmdlVGFyZ2V0SW5kZXh9KVxuXHR9XG5cblx0bGV0IHNlbGVjdGVkTWVyZ2VUYXJnZXRJbmRleCA9IC0xXG5cdGZ1bmN0aW9uIGhhbmRsZVRhcmdldElucHV0Q2hhbmdlKGU6IEV2ZW50KXtcblx0XHRjb25zdCBpbnB1dCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcblx0XHRjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlXG5cdFx0Y29uc3QgaW5kZXggPSBwYXJzZUludCh2YWx1ZSlcblxuXHRcdHNlbGVjdGVkTWVyZ2VUYXJnZXRJbmRleCA9IGluZGV4XG5cdH1cblx0JDogaXNUYXJnZXRTZWxlY3RlZCA9IHNlbGVjdGVkTWVyZ2VUYXJnZXRJbmRleCA+IC0xXG5cblx0Ly8gJDogaXNTb21lRHVwbGljYXRlU2VsZWN0ZWQgPSBbLi4uY2hlY2tlZEluZGV4ZXMudmFsdWVzKCldLnNvbWUoQm9vbGVhbilcblx0JDogaXNTb21lRHVwbGljYXRlU2VsZWN0ZWQgPSBjaGVja2VkSW5kZXhlcy5zaXplID4gMFxuXHRmdW5jdGlvbiBoYW5kbGVTZWxlY3RBbGwoZTogRXZlbnQpe1xuXHRcdGNvbnN0IGNoZWNrZWQgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZFxuXHRcdGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiBjaGVja2VkSW5kZXhlcy5hZGQoaW5kZXgpKVxuXHRcdGNoZWNrZWRJbmRleGVzID0gY2hlY2tlZEluZGV4ZXNcblx0fVxuXG48L3NjcmlwdD5cblxuPG1lcmdlcj5cblxuXHQ8ZGl2IGNsYXNzPVwic3RydWN0dXJlXCI+XG5cdFx0PGgzPlN0cnVjdHVyZTwvaDM+XG5cdFx0PHVsIGNsYXNzPVwic3RydWN0dXJlLWxpc3RcIj5cblx0XHRcdHsjZWFjaCBzdHJ1Y3R1cmUgYXMgaXRlbX1cblx0XHRcdFx0PGxpPntpdGVtfTwvbGk+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC91bD5cblx0PC9kaXY+XG5cblx0PGRpdiBjbGFzcz1cImxpc3QtY29udGFpbmVyXCI+XG5cdFx0PGgzPkR1cGxpY2F0ZSBET1R5cGVzPC9oMz5cblx0XHQ8ZGl2IGNsYXNzPVwic2VsZWN0LWFsbC1jb250YWluZXJcIj5cblx0XHRcdDxCdXR0b24gXG5cdFx0XHRcdGxhYmVsPVwiU2VsZWN0IEFsbFwiIFxuXHRcdFx0XHR0ZXN0aWQ9XCJtZXJnZXJfc2VsZWN0LWFsbFwiXG5cdFx0XHRcdHR5cGU9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRvbjpjbGljaz17aGFuZGxlU2VsZWN0QWxsfSBcblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cblx0XHQ8dWwgY2xhc3M9XCJsaXN0XCI+XG5cdFx0XHR7I2VhY2ggaXRlbXMgYXMgaXRlbSwgaWl9XG5cdFx0XHRcdDxsaT5cblx0XHRcdFx0XHQ8Q2hlY2tib3ggXG5cdFx0XHRcdFx0XHRjaGVja2VkPXtjaGVja2VkSW5kZXhlcy5oYXMoaWkpfSBcblx0XHRcdFx0XHRcdGxhYmVsPXtpdGVtLmxhYmVsfSBcblx0XHRcdFx0XHRcdG9uOmNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoaWksIGUpfVxuXHRcdFx0XHRcdFx0dGVzdGlkPXtgbWVyZ2VyX2NoZWNrYm94LSR7aWl9YH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0ey9lYWNofVxuXHRcdDwvdWw+XG5cdDwvZGl2PlxuXG5cdDxkaXYgY2xhc3M9XCJ1c2FnZVwiPlxuXHRcdDxoMz5BZmZlY3RlZCBMTiBUeXBlczwvaDM+XG5cdFx0PHVsPlxuXHRcdFx0eyNlYWNoIGFmZmVjdGVkTE5UeXBlcyBhcyBsblR5cGV9XG5cdFx0XHRcdDxsaT57bG5UeXBlLmxufSAoe2xuVHlwZS5kb3R9KTwvbGk+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC91bD5cblx0PC9kaXY+XG5cblx0PGRpdiBjbGFzcz1cImFjdGlvblwiPlxuXHRcdDxzZWxlY3QgXG5cdFx0XHRvbjpjaGFuZ2U9e2hhbmRsZVRhcmdldElucHV0Q2hhbmdlfSBcblx0XHRcdHZhbHVlPXtzZWxlY3RlZE1lcmdlVGFyZ2V0SW5kZXh9IFxuXHRcdFx0ZGF0YS10ZXN0aWQ9XCJtZXJnZXJfbWVyZ2UtdGFyZ2V0XCJcblx0XHQ+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXstMX0gZGlzYWJsZWQgc2VsZWN0ZWQ+U2VsZWN0IGEgbWVyZ2UgdGFyZ2V0PC9vcHRpb24+XG5cdFx0XHR7I2VhY2ggaXRlbXMgYXMgaXRlbSwgaWl9XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9e2lpfT57aXRlbS5sYWJlbH08L29wdGlvbj5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L3NlbGVjdD5cblx0XHQ8QnV0dG9uIFxuXHRcdFx0bGFiZWw9XCJNZXJnZVwiIFxuXHRcdFx0YmxvY2s9e3RydWV9XG5cdFx0XHR0ZXN0aWQ9XCJtZXJnZXJfYnV0dG9uLW1lcmdlXCIgXG5cdFx0XHRkaXNhYmxlZD17IWlzTWVyZ2VQb3NzaWJsZX1cblx0XHRcdG9uOmNsaWNrPXtoYW5kbGVNZXJnZUNsaWNrfSBcblx0XHQvPlxuXHQ8L2Rpdj5cblxuPC9tZXJnZXI+XG5cbjxzdmVsdGU6ZWxlbWVudCB0aGlzPVwic3R5bGVcIj57QGh0bWwgY3NzfTwvc3ZlbHRlOmVsZW1lbnQ+IiwiPHNjcmlwdCBsYW5nPVwidHNcIj5cblxuXHRpbXBvcnQgY3NzIGZyb20gXCIuL3RoZW1lLmNzcz9pbmxpbmVcIlxuXG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpvcHRpb25zIHRhZz1cInRzY2QtdGhlbWVcIiAvPlxuPHN2ZWx0ZTplbGVtZW50IHRoaXM9XCJzdHlsZVwiPntAaHRtbCBjc3N9PC9zdmVsdGU6ZWxlbWVudD5cblxuPCEtLSA8c3BhbiBjbGFzcz1cInRzY2QtdGhlbWVcIj48L3NwYW4+IC0tPlxuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cInRzY2QtZGVkdXBlXCIgLz5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cblx0aW1wb3J0IGNzcyBmcm9tIFwiLi9kZWR1cGUuc2Nzcz9pbmxpbmVcIlxuXHRpbXBvcnQgeyBVQ1R5cGVEZWR1cGUsIFNDRFF1ZXJpZXMsIHR5cGUgSGFzaGVkRE9ULCB0eXBlIERPRWxlbWVudCwgdHlwZSBET1R5cGVFbGVtZW50IH0gZnJvbSBcIkBvc2NkLXBsdWdpbnMvY29yZVwiXG5cdGltcG9ydCBHcm91cENhcmRMaXN0IGZyb20gXCIuL2dyb3VwLWNhcmQtbGlzdC9ncm91cC1jYXJkLWxpc3Quc3ZlbHRlXCJcblx0aW1wb3J0IE1lcmdlciBmcm9tIFwiLi9tZXJnZXIvbWVyZ2VyLnN2ZWx0ZVwiXG5cdGltcG9ydCB0eXBlIHsgTWVyZ2FibGVJdGVtIH0gZnJvbSBcIi4vbWVyZ2VyL21lcmdhYmxlLWl0ZW1zXCJcbmltcG9ydCBUaGVtZSBmcm9tIFwiLi4vLi4vc3R5bGUvdGhlbWUuc3ZlbHRlXCJcblxuXHQvLyBJbnB1dFxuXHRleHBvcnQgbGV0IGRvYzogRWxlbWVudFxuXHRcblx0Ly8gQ29uZmlnXG5cdGxldCBzY2RRdWVyaWVzOiBTQ0RRdWVyaWVzXG5cdGxldCBkZWR1cGVyOiBVQ1R5cGVEZWR1cGVcblx0bGV0IHJvb3Q6IEhUTUxFbGVtZW50XG5cblxuXHQvLyBcblx0Ly8gR3JvdXBzXG5cdC8vIFxuXHQkOiBpbml0KGRvYylcblx0ZnVuY3Rpb24gaW5pdChkb2N1bWVudDogRWxlbWVudCl7XG5cdFx0aWYoIWRvY3VtZW50KXsgcmV0dXJuIH1cblx0XHRzY2RRdWVyaWVzICA9IG5ldyBTQ0RRdWVyaWVzKGRvY3VtZW50KVxuXHRcdGRlZHVwZXIgPSBuZXcgVUNUeXBlRGVkdXBlKHNjZFF1ZXJpZXMpXG5cdFx0bG9hZER1cGxpY2F0ZXMoKVxuXHR9XG5cblx0bGV0IGR1cGxpY2F0ZUdyb3VwczogSGFzaGVkRE9UW11bXVxuXHRhc3luYyBmdW5jdGlvbiBsb2FkRHVwbGljYXRlcygpe1xuXHRcdGR1cGxpY2F0ZUdyb3VwcyA9IGF3YWl0IGRlZHVwZXIuZmluZER1cGxpY2F0ZU9iamVjdFR5cGVzKClcblx0fVxuXHRcblx0bGV0IGl0ZW1TZXRzOiBNZXJnYWJsZUl0ZW1bXVtdID0gW11cblx0JDogY29udmVydER1cGxpY2F0ZXNUb0l0ZW1zKGR1cGxpY2F0ZUdyb3Vwcylcblx0ZnVuY3Rpb24gY29udmVydER1cGxpY2F0ZXNUb0l0ZW1zKGdyb3Vwcz86IEhhc2hlZERPVFtdW10pe1xuXHRcdGlmKCFncm91cHMpeyByZXR1cm4gfVxuXG5cdFx0aXRlbVNldHMgPSBncm91cHMubWFwKChncm91cCkgPT4ge1xuXHRcdFx0cmV0dXJuIGdyb3VwLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGxhYmVsOiAgaXRlbS5lbGVtZW50LmlkLFxuXHRcdFx0XHRcdHVzYWdlczogaXRlbS51c2FnZXMubWFwKGdldFBhcmVudElkKSxcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0UGFyZW50SWQoZG9FbDogRE9FbGVtZW50KTogc3RyaW5nIHtcblx0XHRjb25zdCBub3RGb3VuZElkID0gXCJfXCJcblx0XHRjb25zdCBwYXJlbnQgPSBkb0VsLmVsZW1lbnQucGFyZW50RWxlbWVudFxuXHRcdGlmKCFwYXJlbnQpeyByZXR1cm4gbm90Rm91bmRJZCB9XG5cblx0XHRyZXR1cm4gcGFyZW50LmdldEF0dHJpYnV0ZShcImlkXCIpPz9ub3RGb3VuZElkXG5cdH1cdFxuXHRcblx0bGV0IHNlbGVjdGVkR3JvdXBJbmRleCA9IC0xXG5cdGZ1bmN0aW9uIGhhbmRsZUdyb3VwU2VsZWN0KGU6IEN1c3RvbUV2ZW50PHtpbmRleDpudW1iZXJ9Pil7XG5cdFx0c2VsZWN0ZWRHcm91cEluZGV4ID0gZS5kZXRhaWwuaW5kZXhcblx0fVxuXHRcblxuXHQvLyBcblx0Ly8gTWVyZ2VyXG5cdC8vIFxuXHRsZXQgc3RydWN0dXJlOiBzdHJpbmdbXSA9IFtdXG5cdCQ6IGxvYWRTdHJ1Y3R1cmVPZkZpcnN0RWxlbWVudChkdXBsaWNhdGVHcm91cHMsIHNlbGVjdGVkR3JvdXBJbmRleClcblx0ZnVuY3Rpb24gbG9hZFN0cnVjdHVyZU9mRmlyc3RFbGVtZW50KGdyb3VwczogSGFzaGVkRE9UW11bXSwgaW5kZXg6IG51bWJlcil7XG5cdFx0aWYoaW5kZXggPCAwKXsgcmV0dXJuIH1cblx0XHRjb25zdCBzZWxlY3RlZEdyb3VwID0gZ3JvdXBzW2luZGV4XVxuXHRcdGNvbnN0IGZpcnN0RWxlbWVudCA9IHNlbGVjdGVkR3JvdXBbMF1cblx0XHRjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20oZmlyc3RFbGVtZW50LmVsZW1lbnQuZWxlbWVudC5jaGlsZHJlbilcblx0XHRjb25zdCBuYW1lcyA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLmdldEF0dHJpYnV0ZShcIm5hbWVcIik/P1wiXCIpXG5cdFx0c3RydWN0dXJlID0gbmFtZXMuZmlsdGVyKEJvb2xlYW4pXG5cdH1cblx0XG5cblx0ZnVuY3Rpb24gaGFuZGxlTWVyZ2UoZTogQ3VzdG9tRXZlbnQ8e3NlbGVjdGVkSW5kZXhlczogbnVtYmVyW10sIHNlbGVjdGVkTWVyZ2VUYXJnZXRJbmRleDpudW1iZXJ9Pil7XG5cdFx0Y29uc3Qge3NlbGVjdGVkSW5kZXhlcywgc2VsZWN0ZWRNZXJnZVRhcmdldEluZGV4fSA9IGUuZGV0YWlsXG5cdFx0Y29uc3Qgc2VsZWN0ZWRHcm91cCA9IGR1cGxpY2F0ZUdyb3Vwc1tzZWxlY3RlZEdyb3VwSW5kZXhdXG5cdFx0Y29uc3QgbWVyZ2VTb3VyY2VzID0gc2VsZWN0ZWRJbmRleGVzLm1hcCggKGluZGV4KSA9PiBzZWxlY3RlZEdyb3VwW2luZGV4XSlcblx0XHRjb25zdCBtZXJnZVRhcmdldCA9IHNlbGVjdGVkR3JvdXBbc2VsZWN0ZWRNZXJnZVRhcmdldEluZGV4XVxuXG5cdFx0bWVyZ2VTb3VyY2VzLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuXHRcdFx0c291cmNlLnVzYWdlcy5mb3JFYWNoKChkb0VsKSA9PiB7XG5cdFx0XHRcdHJlbGlua1R5cGUoZG9FbCwgbWVyZ2VUYXJnZXQuZWxlbWVudClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbGlua1R5cGUoZG9FbDogRE9FbGVtZW50LCBkb3Q6IERPVHlwZUVsZW1lbnQpe1xuXHRcdGNvbnN0IG1vZGlmaWVkRWwgPSBkb0VsLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnRcblx0XHRjb25zdCBpZEJlZm9yZSA9IGRvRWwuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpXG5cdFx0bW9kaWZpZWRFbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGRvdC5pZClcblx0XHRjb25zdCBpZEFmdGVyID0gZG9FbC5lbGVtZW50LmdldEF0dHJpYnV0ZShcInR5cGVcIilcblxuXHRcdGNvbnN0IGV2ZW50ID0gY3JlYXRlRWRpdEV2ZW50KGRvRWwuZWxlbWVudCwgbW9kaWZpZWRFbClcblx0XHRyb290LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUVkaXRFdmVudChvbGRFbDogRWxlbWVudCwgbmV3RWw6IEVsZW1lbnQpe1xuXHRcdGNvbnN0IGRldGFpbCA9IHtcblx0XHRcdG9sZDogb2xkRWwsXG5cdFx0XHRuZXc6IG5ld0VsLFxuXHRcdH1cblx0XHRjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChcImVkaXRvci1hY3Rpb25cIiwge2RldGFpbH0pXG5cdFx0cmV0dXJuIGV2ZW50XG5cdH1cblxuXG48L3NjcmlwdD5cblxuPFRoZW1lIC8+XG48ZGVkdXBlIGJpbmQ6dGhpcz17cm9vdH0+XG5cdDxsYXlvdXQ+XG5cdFx0XG5cdFx0PHNpZGViYXI+XG5cdFx0XHQ8R3JvdXBDYXJkTGlzdCBcblx0XHRcdFx0aXRlbVNldHM9e2l0ZW1TZXRzLm1hcCgoaXRlbVNldCkgPT4gaXRlbVNldC5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpICl9IFxuXHRcdFx0XHRvbjpzZWxlY3Q9e2hhbmRsZUdyb3VwU2VsZWN0fSBcblx0XHRcdFx0c2VsZWN0ZWRJbmRleD17c2VsZWN0ZWRHcm91cEluZGV4fVxuXHRcdFx0Lz5cblx0XHQ8L3NpZGViYXI+XG5cdFx0XG5cdFx0PG1haW4+XG5cdFx0XHR7I2lmIHNlbGVjdGVkR3JvdXBJbmRleCA+IC0xfVxuXHRcdFx0eyNrZXkgc2VsZWN0ZWRHcm91cEluZGV4fVxuXHRcdFx0XHQ8TWVyZ2VyIFxuXHRcdFx0XHRcdGl0ZW1zPXtpdGVtU2V0c1tzZWxlY3RlZEdyb3VwSW5kZXhdfSBcblx0XHRcdFx0XHRzdHJ1Y3R1cmU9e3N0cnVjdHVyZX1cblx0XHRcdFx0XHRvbjptZXJnZT17aGFuZGxlTWVyZ2V9XG5cdFx0XHRcdC8+XG5cdFx0XHR7L2tleX1cblx0XHRcdHsvaWZ9XG5cdFx0PC9tYWluPlxuXHQ8L2xheW91dD5cbjwvZGVkdXBlPlxuXG48c3ZlbHRlOmVsZW1lbnQgdGhpcz1cInN0eWxlXCI+e0BodG1sIGNzc308L3N2ZWx0ZTplbGVtZW50PlxuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz17bnVsbH0gLz5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgRGVkdXBlIH0gZnJvbSBcIkBvc2NkLXBsdWdpbnMvdWlsaWIvc3JjL2xpYi9wbHVnaW5zL2RlZHVwZVwiO1xuICBpbXBvcnQgKiBhcyBwY2tnIGZyb20gXCIuLi9wYWNrYWdlLmpzb25cIjtcblxuICAvLyBJbnB1dHNcbiAgZXhwb3J0IGxldCBkb2M6IFhNTERvY3VtZW50O1xuPC9zY3JpcHQ+XG5cbnsjaWYgZG9jfVxuICA8RGVkdXBlIGRvYz17ZG9jPy5kb2N1bWVudEVsZW1lbnR9IC8+XG57L2lmfVxuXG48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwYWNrYWdlLW5hbWVcIiB2YWx1ZT17cGNrZy5uYW1lfSAvPlxuPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicGFja2FnZS12ZXJzaW9uXCIgdmFsdWU9e3Bja2cudmVyc2lvbn0gLz5cbiJdLCJuYW1lcyI6WyJub29wIiwicnVuIiwiZm4iLCJibGFua19vYmplY3QiLCJydW5fYWxsIiwiZm5zIiwiaXNfZnVuY3Rpb24iLCJ0aGluZyIsInNhZmVfbm90X2VxdWFsIiwiYSIsImIiLCJpc19lbXB0eSIsIm9iaiIsImFwcGVuZCIsInRhcmdldCIsIm5vZGUiLCJpbnNlcnQiLCJhbmNob3IiLCJkZXRhY2giLCJkZXN0cm95X2VhY2giLCJpdGVyYXRpb25zIiwiZGV0YWNoaW5nIiwiaSIsImVsZW1lbnQiLCJuYW1lIiwidGV4dCIsImRhdGEiLCJzcGFjZSIsImVtcHR5IiwibGlzdGVuIiwiZXZlbnQiLCJoYW5kbGVyIiwib3B0aW9ucyIsImF0dHIiLCJhdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldF9jdXN0b21fZWxlbWVudF9kYXRhIiwicHJvcCIsImNoaWxkcmVuIiwic2V0X2RhdGEiLCJzZWxlY3Rfb3B0aW9uIiwic2VsZWN0Iiwib3B0aW9uIiwidG9nZ2xlX2NsYXNzIiwidG9nZ2xlIiwiY3VzdG9tX2V2ZW50IiwidHlwZSIsImRldGFpbCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZSIsImF0dHJpYnV0ZV90b19vYmplY3QiLCJhdHRyaWJ1dGVzIiwicmVzdWx0IiwiY3VycmVudF9jb21wb25lbnQiLCJzZXRfY3VycmVudF9jb21wb25lbnQiLCJjb21wb25lbnQiLCJnZXRfY3VycmVudF9jb21wb25lbnQiLCJjcmVhdGVFdmVudERpc3BhdGNoZXIiLCJjYWxsYmFja3MiLCJidWJibGUiLCJkaXJ0eV9jb21wb25lbnRzIiwiYmluZGluZ19jYWxsYmFja3MiLCJyZW5kZXJfY2FsbGJhY2tzIiwiZmx1c2hfY2FsbGJhY2tzIiwicmVzb2x2ZWRfcHJvbWlzZSIsInVwZGF0ZV9zY2hlZHVsZWQiLCJzY2hlZHVsZV91cGRhdGUiLCJmbHVzaCIsImFkZF9yZW5kZXJfY2FsbGJhY2siLCJzZWVuX2NhbGxiYWNrcyIsImZsdXNoaWR4Iiwic2F2ZWRfY29tcG9uZW50IiwidXBkYXRlIiwiY2FsbGJhY2siLCIkJCIsImRpcnR5Iiwib3V0cm9pbmciLCJvdXRyb3MiLCJncm91cF9vdXRyb3MiLCJjaGVja19vdXRyb3MiLCJ0cmFuc2l0aW9uX2luIiwiYmxvY2siLCJsb2NhbCIsInRyYW5zaXRpb25fb3V0IiwiY3JlYXRlX2NvbXBvbmVudCIsIm1vdW50X2NvbXBvbmVudCIsImN1c3RvbUVsZW1lbnQiLCJmcmFnbWVudCIsImFmdGVyX3VwZGF0ZSIsIm5ld19vbl9kZXN0cm95IiwiZGVzdHJveV9jb21wb25lbnQiLCJtYWtlX2RpcnR5IiwiaW5pdCIsImluc3RhbmNlIiwiY3JlYXRlX2ZyYWdtZW50Iiwibm90X2VxdWFsIiwicHJvcHMiLCJhcHBlbmRfc3R5bGVzIiwicGFyZW50X2NvbXBvbmVudCIsInJlYWR5IiwicmV0IiwicmVzdCIsIm5vZGVzIiwiU3ZlbHRlRWxlbWVudCIsIm9uX21vdW50Iiwia2V5IiwiX29sZFZhbHVlIiwibmV3VmFsdWUiLCJpbmRleCIsIiQkcHJvcHMiLCJfU0NEUXVlcmllcyIsInJvb3QiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwibGRJbnN0IiwiY2JOYW1lIiwiYXR0cmlidXRlTGlzdCIsIlNDRFF1ZXJpZXMiLCJkZXNjcmliZUVudW1UeXBlIiwiX2EiLCJfYiIsInZhbHMiLCJ2YWwiLCJjaGlsZCIsInYxIiwidjIiLCJkZXNjcmliZURBVHlwZSIsImJkYXMiLCJiZGEiLCJjMSIsImMyIiwiYlR5cGUiLCJkY2hnIiwiZHVwZCIsInFjaGciLCJkZXNjcmliZURPVHlwZSIsInNkb3MiLCJzZG8iLCJ0cmFuc2llbnQiLCJkYXMiLCJkYSIsImZjIiwiZGVzY3JpYmVMTm9kZVR5cGUiLCJkb3MiLCJkb0VsZW1lbnQiLCJ0eXBlRGVzY3JpcHRpb25zIiwiZGVzY3JpYmVFbGVtZW50IiwiaGFzaEVsZW1lbnQiLCJkZXNjIiwiaGFzaCIsInN0ciIsImJ1ZmZlciIsImhhc2hCdWZmZXIiLCJVQ1R5cGVEZWR1cGUiLCJzY2RRdWVyaWVzIiwiZG90cyIsImhhc2hlZERvdHMiLCJncm91cGVkIiwiZ3JvdXAiLCJkb3RJZCIsImRvdCIsInVzYWdlcyIsInQwX3ZhbHVlIiwiY3R4IiwidDAiLCJjcmVhdGVfaWZfYmxvY2siLCJjb3VudGVyIiwic3R5bGUiLCJjc3MiLCJjb3VudCIsIm1heCIsImxpIiwidCIsInRfdmFsdWUiLCJncm91cF9jYXJkIiwiZGl2MCIsInVsIiwiZGl2MSIsImNvdW50ZXJfY2hhbmdlcyIsIk1BWF9OUl9PRl9JVEVNUyIsIml0ZW1zIiwiZGF0YVRlc3RpZCIsInNlbGVjdGVkIiwiJCRpbnZhbGlkYXRlIiwiZGlzcGxheWVkSXRlbXMiLCJ0aXRsZVRleHQiLCJncm91cGNhcmRfY2hhbmdlcyIsImdyb3VwX2NhcmRfbGlzdCIsImVhY2hfYmxvY2tzIiwiaXRlbVNldHMiLCJzZWxlY3RlZEluZGV4IiwiZGlzcGF0Y2giLCJoYW5kbGVDbGljayIsImNsaWNrX2hhbmRsZXIiLCJpaSIsImJ1dHRvbiIsImRhbmdlcm91cyIsImxhYmVsIiwidGVzdGlkIiwiZGlzYWJsZWQiLCJjaGVja2JveCIsImxhYmVsXzEiLCJpbnB1dCIsInNwYW4iLCJjaGVja2VkIiwiY2hlY2tib3hfY2hhbmdlcyIsInQyX3ZhbHVlIiwidDIiLCJtZXJnZXIiLCJoMzAiLCJ1bDAiLCJkaXYyIiwiaDMxIiwidWwxIiwiZGl2MyIsImgzMiIsInVsMiIsImRpdjQiLCJlYWNoX2Jsb2Nrc18yIiwic3RydWN0dXJlIiwiY2hlY2tlZEluZGV4ZXMiLCJhZmZlY3RlZExOVHlwZXMiLCJoYW5kbGVDaGFuZ2UiLCJnZW5lcmF0ZUFmZmVjdGVkTE5UeXBlcyIsImluZGV4ZXMiLCJuZXdBZmZlY3RlZExOVHlwZXMiLCJpdGVtIiwibG4iLCJoYW5kbGVNZXJnZUNsaWNrIiwic2VsZWN0ZWRJbmRleGVzIiwiaXNNZXJnZVBvc3NpYmxlIiwic2VsZWN0ZWRNZXJnZVRhcmdldEluZGV4IiwiaGFuZGxlVGFyZ2V0SW5wdXRDaGFuZ2UiLCJoYW5kbGVTZWxlY3RBbGwiLCJjaGFuZ2VfaGFuZGxlciIsImlzU29tZUR1cGxpY2F0ZVNlbGVjdGVkIiwiaXNUYXJnZXRTZWxlY3RlZCIsIm1lcmdlcl9jaGFuZ2VzIiwiZnVuYyIsImlmX2Jsb2NrIiwiZGVkdXBlIiwibGF5b3V0Iiwic2lkZWJhciIsIm1haW4iLCJncm91cGNhcmRsaXN0X2NoYW5nZXMiLCJnZXRQYXJlbnRJZCIsImRvRWwiLCJub3RGb3VuZElkIiwicGFyZW50IiwiY3JlYXRlRWRpdEV2ZW50Iiwib2xkRWwiLCJuZXdFbCIsIml0ZW1TZXQiLCJkb2MiLCJkZWR1cGVyIiwiZG9jdW1lbnQiLCJsb2FkRHVwbGljYXRlcyIsImR1cGxpY2F0ZUdyb3VwcyIsImNvbnZlcnREdXBsaWNhdGVzVG9JdGVtcyIsImdyb3VwcyIsInNlbGVjdGVkR3JvdXBJbmRleCIsImhhbmRsZUdyb3VwU2VsZWN0IiwibG9hZFN0cnVjdHVyZU9mRmlyc3RFbGVtZW50IiwiZmlyc3RFbGVtZW50IiwibmFtZXMiLCJoYW5kbGVNZXJnZSIsInNlbGVjdGVkR3JvdXAiLCJtZXJnZVNvdXJjZXMiLCJtZXJnZVRhcmdldCIsInNvdXJjZSIsInJlbGlua1R5cGUiLCJtb2RpZmllZEVsIiwiJCR2YWx1ZSIsImRlZHVwZV9jaGFuZ2VzIiwiaW5wdXQwIiwicGNrZy5uYW1lIiwiaW5wdXQxIiwicGNrZy52ZXJzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxJQUFPO0FBQUc7QUFrQm5CLFNBQVNDLEdBQUlDLEdBQUk7QUFDYixTQUFPQSxFQUFFO0FBQ2I7QUFDQSxTQUFTQyxLQUFlO0FBQ3BCLFNBQU8sdUJBQU8s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QlQsRUFBZ0JHLENBQWtCLEdBQ2xETyxLQUFldEMsRUFBZ0IsSUFBTSxDQUFBM0gsTUFBVWdLLEVBQWNoSyxDQUFLLENBQUEsR0FDbEVrSyxJQUFjRixFQUFjbkMsQ0FBd0I7QUFFMUQsSUFBQW9DLEdBQWEsUUFBUyxDQUFBRSxNQUFBO0FBQ3JCLE1BQUFBLEVBQU8sT0FBTyxRQUFTLENBQUF2QixPQUFBO0FBQ3RCLFFBQUF3QixFQUFXeEIsSUFBTXNCLEVBQVksT0FBTztBQUFBOzs7V0FLOUJFLEVBQVd4QixHQUFpQnRGLEdBQUE7QUFDOUIsVUFBQStHLElBQWF6QixFQUFLLFFBQVEsVUFBVSxFQUFJO0FBQzdCLElBQUFBLEVBQUssUUFBUSxhQUFhLE1BQU0sR0FDakR5QixFQUFXLGFBQWEsUUFBUS9HLEVBQUksRUFBRSxHQUN0QnNGLEVBQUssUUFBUSxhQUFhLE1BQU07QUFFMUMsVUFBQTNOLElBQVE4TixHQUFnQkgsRUFBSyxTQUFTeUIsQ0FBVTtBQUN0RCxJQUFBbEssRUFBSyxjQUFjbEYsQ0FBSztBQUFBOzs7QUFtQlAsTUFBQWtGLElBQUltSzs7Ozs7OztVQWhHbkJ0TCxFQUFLbUssQ0FBRztXQWNSSyxFQUF5QkQsQ0FBZTtXQWdDeENLLEVBQTRCTCxHQUFpQkcsQ0FBa0I7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QVpsRW5FLE1BQUE3STs7O0lhV2UsT0FBQSxFQUFBO0FBQUE7QUFBQSxPQUFBQSxJQUFBNEMsU0FBQSxnQkFBQTVDLEVBQUs7QUFBQSxNQUFlO0FBQUE7Ozs7Ozs7O0FiWG5DLFVBQUFBOztBYVdlLE1BQUE5QztBQUFBLE1BQUEsTUFBQXdNLEVBQUE7QUFBQSxPQUFBMUosSUFBQTRDLFNBQUEsZ0JBQUE1QyxFQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0lBRGY0QyxFQUFHLENBQUEsS0FBQUUsR0FBQUYsQ0FBQTtBQUFBOzs7c0lBSXdDK0csRUFBQSxRQUFBQyw2REFDR0MsRUFBQSxRQUFBQztBQUFBQTs7a0NBRG5EeFEsRUFBNERGLEdBQUF1USxHQUFBcFEsQ0FBQSxlQUM1REQsRUFBa0VGLEdBQUF5USxHQUFBdFEsQ0FBQTs7OztNQUw3RHFKLEVBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFMSyxLQUFBMEYsRUFBQSxJQUFBbEo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
