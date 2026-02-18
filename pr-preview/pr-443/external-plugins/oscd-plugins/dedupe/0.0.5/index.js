function D() {
}
function Le(t) {
  return t();
}
function Ie() {
  return /* @__PURE__ */ Object.create(null);
}
function re(t) {
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
function p(t, e, r) {
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
function B(t) {
  return document.createTextNode(t);
}
function T() {
  return B(" ");
}
function ut() {
  return B("");
}
function oe(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function A(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function ke(t, e, r) {
  e in t ? t[e] = typeof t[e] == "boolean" && r === "" ? !0 : r : A(t, e, r);
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
function be(t) {
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
      const s = dt(e, r, { cancelable: n });
      return l.slice().forEach((o) => {
        o.call(t, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function _e(t, e) {
  const r = t.$$.callbacks[e.type];
  r && r.slice().forEach((n) => n.call(this, e));
}
const de = [], Ae = [], $e = [], Oe = [], ht = Promise.resolve();
let De = !1;
function mt() {
  De || (De = !0, ht.then($));
}
function xe(t) {
  $e.push(t);
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
        ae++, be(e), gt(e.$$);
      }
    } catch (e) {
      throw de.length = 0, ae = 0, e;
    }
    for (be(null), de.length = 0, ae = 0; Ae.length; )
      Ae.pop()();
    for (let e = 0; e < $e.length; e += 1) {
      const r = $e[e];
      we.has(r) || (we.add(r), r());
    }
    $e.length = 0;
  } while (de.length);
  for (; Oe.length; )
    Oe.pop()();
  De = !1, we.clear(), be(t);
}
function gt(t) {
  if (t.fragment !== null) {
    t.update(), re(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(xe);
  }
}
const Ee = /* @__PURE__ */ new Set();
let le;
function ye() {
  le = {
    r: 0,
    c: [],
    p: le
    // parent group
  };
}
function ve() {
  le.r || re(le.c), le = le.p;
}
function w(t, e) {
  t && t.i && (Ee.delete(t), t.i(e));
}
function M(t, e, r, n) {
  if (t && t.o) {
    if (Ee.has(t))
      return;
    Ee.add(t), le.c.push(() => {
      Ee.delete(t), n && (r && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function Y(t) {
  t && t.c();
}
function U(t, e, r, n) {
  const { fragment: l, after_update: s } = t.$$;
  l && l.m(e, r), n || xe(() => {
    const o = t.$$.on_mount.map(Le).filter(Te);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : re(o), t.$$.on_mount = [];
  }), s.forEach(xe);
}
function V(t, e) {
  const r = t.$$;
  r.fragment !== null && (re(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function bt(t, e) {
  t.$$.dirty[0] === -1 && (de.push(t), mt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(t, e, r, n, l, s, o, u = [-1]) {
  const c = pe;
  be(t);
  const i = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: D,
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
    dirty: u,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  o && o(i.root);
  let a = !1;
  if (i.ctx = r ? r(t, e.props || {}, (g, b, ...m) => {
    const h = m.length ? m[0] : b;
    return i.ctx && l(i.ctx[g], i.ctx[g] = h) && (!i.skip_bound && i.bound[g] && i.bound[g](h), a && bt(t, g)), b;
  }) : [], i.update(), a = !0, re(i.before_update), i.fragment = n ? n(i.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = at(e.target);
      i.fragment && i.fragment.l(g), g.forEach(k);
    } else
      i.fragment && i.fragment.c();
    e.intro && w(t.$$.fragment), U(t, e.target, e.anchor, e.customElement), $();
  }
  be(c);
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
    re(this.$$.on_disconnect);
  }
  $destroy() {
    V(this, 1), this.$destroy = D;
  }
  $on(t, e) {
    if (!Te(e))
      return D;
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
const pt = `dedupe{--header-hight: 146px;height:calc(100vh - var(--header-hight));display:block;padding:1rem;overflow:hidden}dedupe main{height:100%;overflow:hidden}dedupe layout{display:grid;grid-template-columns:minmax(100px,150px) 1fr;height:100%}dedupe sidebar{border-right:black thin solid;padding-right:1rem;height:100%;overflow:auto}header.mdc-top-app-bar{background-color:#000}
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
    return Array.from(n.querySelectorAll(t)).map((o) => Se(o, e));
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
  for (const l of Array.from(t.children).filter((s) => s.tagName === "EnumVal").sort((s, o) => {
    let u, c;
    return parseInt((u = s.getAttribute("ord")) !== null && u !== void 0 ? u : "", 10) - parseInt((c = o.getAttribute("ord")) !== null && c !== void 0 ? c : "", 10);
  }))
    n[(e = l.getAttribute("ord")) !== null && e !== void 0 ? e : ""] = (r = l.textContent) !== null && r !== void 0 ? r : "";
  return { vals: n };
}
function yt(t) {
  let e;
  const r = {};
  for (const n of Array.from(t.children).filter((l) => l.tagName === "BDA").sort((l, s) => l.outerHTML.localeCompare(s.outerHTML))) {
    const [l, s, o, u, c] = [
      "bType",
      "type",
      "dchg",
      "dupd",
      "qchg"
    ].map((i) => n.getAttribute(i));
    r[(e = n.getAttribute("name")) !== null && e !== void 0 ? e : ""] = { bType: l, type: s, dchg: o, dupd: u, qchg: c };
  }
  return { bdas: r };
}
function vt(t) {
  const e = {};
  for (const n of Array.from(t.children).filter((l) => l.tagName === "SDO").sort((l, s) => l.outerHTML.localeCompare(s.outerHTML))) {
    const [l, s, o] = ["name", "type", "transient"].map((u) => n.getAttribute(u));
    e[l ?? ""] = { type: s, transient: o };
  }
  const r = {};
  for (const n of Array.from(t.children).filter((l) => l.tagName === "DA").sort((l, s) => l.outerHTML.localeCompare(s.outerHTML))) {
    const [l, s, o, u, c, i, a] = [
      "name",
      "fc",
      "bType",
      "type",
      "dchg",
      "dupd",
      "qchg"
    ].map((g) => n.getAttribute(g));
    r[l ?? ""] = {
      fc: s,
      bType: o,
      type: u,
      dchg: c,
      dupd: i,
      qchg: a
    };
  }
  return {
    sdos: e,
    das: r,
    cdc: t.getAttribute("cdc")
  };
}
function kt(t) {
  const e = {};
  for (const r of Array.from(t.children).filter((n) => n.tagName === "DO").sort((n, l) => n.outerHTML.localeCompare(l.outerHTML))) {
    const [n, l, s] = ["name", "type", "transient"].map((o) => r.getAttribute(o));
    e[n ?? ""] = { type: l, transient: s };
  }
  return {
    dos: e,
    lnClass: t.getAttribute("lnClass")
  };
}
const He = {
  EnumType: _t,
  DAType: yt,
  DOType: vt,
  LNodeType: kt
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
  return Array.from(new Uint8Array(r)).map((s) => s.toString(16).padStart(2, "0")).join("");
}
class St {
  constructor(e) {
    this.scdQueries = e;
  }
  async findDuplicateObjectTypes() {
    const e = this.scdQueries.searchDOTypes(), r = await Promise.all(
      e.map(this.createHashedDot.bind(this))
    ), n = this.groupByHash(r);
    return Object.values(n).filter((s) => s.length > 1);
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
      r = B(e), n = B("+");
    },
    m(l, s) {
      p(l, r, s), p(l, n, s);
    },
    p(l, s) {
      s & /*max*/
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
      e = B(
        /*count*/
        t[0]
      );
    },
    m(r, n) {
      p(r, e, n);
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
  function l(u, c) {
    return (
      /*count*/
      u[0] <= /*max*/
      u[1] ? Dt : At
    );
  }
  let s = l(t), o = s(t);
  return {
    c() {
      e = _("counter"), o.c(), r = T(), n = _("style"), this.c = D;
    },
    m(u, c) {
      p(u, e, c), o.m(e, null), p(u, r, c), p(u, n, c), n.innerHTML = Tt;
    },
    p(u, [c]) {
      s === (s = l(u)) && o ? o.p(u, c) : (o.d(1), o = s(u), o && (o.c(), o.m(e, null)));
    },
    i: D,
    o: D,
    d(u) {
      u && k(e), o.d(), u && k(r), u && k(n);
    }
  };
}
function Ct(t, e, r) {
  let { count: n } = e, { max: l = 100 } = e;
  return t.$$set = (s) => {
    "count" in s && r(0, n = s.count), "max" in s && r(1, l = s.max);
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
    ), e && (e.target && p(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
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
const Lt = `group-card{display:inline-grid;border:var(--color-black) 1px solid;cursor:pointer;height:80px;padding:0rem;grid-template-columns:1fr 25px}group-card.selected{background:var(--color-blue-dark);color:var(--color-yellow)}group-card:hover:not(.selected){background:var(--color-blue-light)}group-card .left{--padding: 1rem;padding:var(--padding) 0 var(--padding) var(--padding);overflow:hidden}group-card .right{padding:.3rem}group-card ul{padding:0;margin:0}group-card li{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
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
      e = _("li"), n = B(r);
    },
    m(l, s) {
      p(l, e, s), y(e, n);
    },
    p(l, s) {
      s & /*displayedItems*/
      16 && r !== (r = /*item*/
      l[7] + "") && W(n, r);
    },
    d(l) {
      l && k(e);
    }
  };
}
function Nt(t) {
  let e, r, n, l, s, o, u, c, i, a, g, b = (
    /*displayedItems*/
    t[4]
  ), m = [];
  for (let h = 0; h < b.length; h += 1)
    m[h] = Re(Ge(t, b, h));
  return o = new et({
    props: { count: (
      /*items*/
      t[0].length
    ) }
  }), {
    c() {
      e = _("group-card"), r = _("div"), n = _("ul");
      for (let h = 0; h < m.length; h += 1)
        m[h].c();
      l = T(), s = _("div"), Y(o.$$.fragment), u = T(), c = _("style"), this.c = D, A(r, "class", "left"), A(s, "class", "right"), ke(
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
    m(h, E) {
      p(h, e, E), y(e, r), y(r, n);
      for (let H = 0; H < m.length; H += 1)
        m[H].m(n, null);
      y(e, l), y(e, s), U(o, s, null), p(h, u, E), p(h, c, E), c.innerHTML = Lt, i = !0, a || (g = [
        oe(
          e,
          "click",
          /*click_handler*/
          t[5]
        ),
        oe(
          e,
          "keypress",
          /*keypress_handler*/
          t[6]
        )
      ], a = !0);
    },
    p(h, [E]) {
      if (E & /*displayedItems*/
      16) {
        b = /*displayedItems*/
        h[4];
        let L;
        for (L = 0; L < b.length; L += 1) {
          const v = Ge(h, b, L);
          m[L] ? m[L].p(v, E) : (m[L] = Re(v), m[L].c(), m[L].m(n, null));
        }
        for (; L < m.length; L += 1)
          m[L].d(1);
        m.length = b.length;
      }
      const H = {};
      E & /*items*/
      1 && (H.count = /*items*/
      h[0].length), o.$set(H), (!i || E & /*dataTestid*/
      2) && ke(
        e,
        "data-testid",
        /*dataTestid*/
        h[1]
      ), (!i || E & /*titleText*/
      8) && ke(
        e,
        "title",
        /*titleText*/
        h[3]
      ), (!i || E & /*selected*/
      4) && he(
        e,
        "selected",
        /*selected*/
        h[2]
      );
    },
    i(h) {
      i || (w(o.$$.fragment, h), i = !0);
    },
    o(h) {
      M(o.$$.fragment, h), i = !1;
    },
    d(h) {
      h && k(e), fe(m, h), V(o), h && k(u), h && k(c), a = !1, re(g);
    }
  };
}
const It = 3;
function Mt(t, e, r) {
  let n, l, { items: s = [] } = e, { dataTestid: o = "" } = e, { selected: u = !1 } = e;
  function c(a) {
    _e.call(this, t, a);
  }
  function i(a) {
    _e.call(this, t, a);
  }
  return t.$$set = (a) => {
    "items" in a && r(0, s = a.items), "dataTestid" in a && r(1, o = a.dataTestid), "selected" in a && r(2, u = a.selected);
  }, t.$$.update = () => {
    t.$$.dirty & /*items*/
    1 && r(4, n = s.slice(0, It)), t.$$.dirty & /*items*/
    1 && r(3, l = s.join(`
`));
  }, [
    s,
    o,
    u,
    l,
    n,
    c,
    i
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
    ), e && (e.target && p(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
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
    m(l, s) {
      U(e, l, s), r = !0;
    },
    p(l, s) {
      t = l;
      const o = {};
      s & /*itemSets*/
      1 && (o.items = /*itemSet*/
      t[5]), s & /*selectedIndex*/
      2 && (o.selected = /*selectedIndex*/
      t[1] === /*ii*/
      t[7]), e.$set(o);
    },
    i(l) {
      r || (w(e.$$.fragment, l), r = !0);
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
  let e, r, n, l, s = (
    /*itemSets*/
    t[0]
  ), o = [];
  for (let c = 0; c < s.length; c += 1)
    o[c] = Be(je(t, s, c));
  const u = (c) => M(o[c], 1, 1, () => {
    o[c] = null;
  });
  return {
    c() {
      e = _("group-card-list");
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      r = T(), n = _("style"), this.c = D;
    },
    m(c, i) {
      p(c, e, i);
      for (let a = 0; a < o.length; a += 1)
        o[a].m(e, null);
      p(c, r, i), p(c, n, i), n.innerHTML = Ot, l = !0;
    },
    p(c, [i]) {
      if (i & /*itemSets, selectedIndex, handleClick*/
      7) {
        s = /*itemSets*/
        c[0];
        let a;
        for (a = 0; a < s.length; a += 1) {
          const g = je(c, s, a);
          o[a] ? (o[a].p(g, i), w(o[a], 1)) : (o[a] = Be(g), o[a].c(), w(o[a], 1), o[a].m(e, null));
        }
        for (ye(), a = s.length; a < o.length; a += 1)
          u(a);
        ve();
      }
    },
    i(c) {
      if (!l) {
        for (let i = 0; i < s.length; i += 1)
          w(o[i]);
        l = !0;
      }
    },
    o(c) {
      o = o.filter(Boolean);
      for (let i = 0; i < o.length; i += 1)
        M(o[i]);
      l = !1;
    },
    d(c) {
      c && k(e), fe(o, c), c && k(r), c && k(n);
    }
  };
}
function Gt(t, e, r) {
  let { itemSets: n = [] } = e, { selectedIndex: l = -1 } = e;
  const s = Ze();
  function o(c) {
    s("select", { index: c });
  }
  const u = (c) => o(c);
  return t.$$set = (c) => {
    "itemSets" in c && r(0, n = c.itemSets), "selectedIndex" in c && r(1, l = c.selectedIndex);
  }, [n, l, o, u];
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
    ), e && (e.target && p(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
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
const Rt = `button.tscd-button{--padding: .5rem;display:inline-flex;place-items:center;padding:var(--padding) calc(var(--padding) * 2);font-family:inherit;gap:.5rem;justify-content:center;letter-spacing:2%;line-height:100%;background-color:#000;color:#fff;border-radius:4px;border:none;cursor:pointer;transition:all .1s ease-in-out}button.tscd-button:hover{background-color:var(--color-gray-1);color:#000}button.tscd-button.block{width:100%}button.tscd-button.primary.dangerous,button.tscd-button.secondary.dangerous,button.tscd-button.tertiary.dangerous{color:var(--color-pink)}button.tscd-button.primary.dangerous:hover,button.tscd-button.secondary.dangerous:hover,button.tscd-button.tertiary.dangerous:hover{background-color:var(--color-pink);color:var(--color-white)}button.tscd-button.primary:disabled,button.tscd-button.primary:disabled:hover,button.tscd-button.secondary:disabled,button.tscd-button.secondary:disabled:hover,button.tscd-button.tertiary:disabled,button.tscd-button.tertiary:disabled:hover{background-color:var(--color-grey-3);color:var(--color-grey-1)}button.tscd-button.primary{background-color:var(--color-blue-dark);color:var(--color-white);border:var(--color-blue-dark) thin solid}button.tscd-button.primary:hover{background-color:var(--color-blue);color:var(--color-yellow)}button.tscd-button.primary:active{background-color:var(--color-blue-light);color:var(--color-black)}button.tscd-button.secondary{background-color:var(--color-white);color:var(--color-blue);border:black thin solid}button.tscd-button.secondary:hover{background-color:var(--color-blue-light)}button.tscd-button.secondary:active{background-color:var(--color-blue-dark);color:var(--color-yellow)}button.tscd-button.tertiary{background:none;border:none;color:var(--color-blue)}button.tscd-button.tertiary:hover{background:var(--color-blue-light)}button.tscd-button.tertiary:active{background:var(--color-blue);color:var(--color-white)}button.tscd-button.tertiary:disabled,button.tscd-button.tertiary:disabled:hover{background:none}
`;
function jt(t) {
  let e, r, n, l, s, o, u;
  return {
    c() {
      e = _("button"), r = B(
        /*label*/
        t[2]
      ), l = T(), s = _("style"), this.c = D, A(e, "class", n = `tscd-button ${/*type*/
      t[5]}`), e.disabled = /*disabled*/
      t[4], A(
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
    m(c, i) {
      p(c, e, i), y(e, r), p(c, l, i), p(c, s, i), s.innerHTML = Rt, o || (u = oe(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), o = !0);
    },
    p(c, [i]) {
      i & /*label*/
      4 && W(
        r,
        /*label*/
        c[2]
      ), i & /*type*/
      32 && n !== (n = `tscd-button ${/*type*/
      c[5]}`) && A(e, "class", n), i & /*disabled*/
      16 && (e.disabled = /*disabled*/
      c[4]), i & /*testid*/
      8 && A(
        e,
        "data-testid",
        /*testid*/
        c[3]
      ), i & /*type, block*/
      33 && he(
        e,
        "block",
        /*block*/
        c[0]
      ), i & /*type, dangerous*/
      34 && he(
        e,
        "dangerous",
        /*dangerous*/
        c[1]
      );
    },
    i: D,
    o: D,
    d(c) {
      c && k(e), c && k(l), c && k(s), o = !1, u();
    }
  };
}
function Bt(t, e, r) {
  let { block: n = !1 } = e, { dangerous: l = !1 } = e, { label: s } = e, { testid: o = "" } = e, { disabled: u = !1 } = e, { type: c = "primary" } = e;
  function i(a) {
    _e.call(this, t, a);
  }
  return t.$$set = (a) => {
    "block" in a && r(0, n = a.block), "dangerous" in a && r(1, l = a.dangerous), "label" in a && r(2, s = a.label), "testid" in a && r(3, o = a.testid), "disabled" in a && r(4, u = a.disabled), "type" in a && r(5, c = a.type);
  }, [n, l, s, o, u, c, i];
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
    ), e && (e.target && p(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
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
  let e, r, n, l, s, o, u, c, i, a;
  return {
    c() {
      e = _("checkbox"), r = _("label"), n = _("input"), l = T(), s = _("span"), o = B(
        /*label*/
        t[1]
      ), u = T(), c = _("style"), this.c = D, A(n, "type", "checkbox"), A(
        e,
        "data-testid",
        /*testid*/
        t[2]
      );
    },
    m(g, b) {
      p(g, e, b), y(e, r), y(r, n), n.checked = /*checked*/
      t[0], y(r, l), y(r, s), y(s, o), p(g, u, b), p(g, c, b), c.innerHTML = Ft, i || (a = [
        oe(
          n,
          "change",
          /*change_handler*/
          t[3]
        ),
        oe(
          n,
          "input",
          /*input_handler*/
          t[4]
        ),
        oe(
          n,
          "change",
          /*input_change_handler*/
          t[5]
        )
      ], i = !0);
    },
    p(g, [b]) {
      b & /*checked*/
      1 && (n.checked = /*checked*/
      g[0]), b & /*label*/
      2 && W(
        o,
        /*label*/
        g[1]
      ), b & /*testid*/
      4 && A(
        e,
        "data-testid",
        /*testid*/
        g[2]
      );
    },
    i: D,
    o: D,
    d(g) {
      g && k(e), g && k(u), g && k(c), i = !1, re(a);
    }
  };
}
function qt(t, e, r) {
  let { checked: n = !1 } = e, { label: l } = e, { testid: s = "" } = e;
  function o(i) {
    _e.call(this, t, i);
  }
  function u(i) {
    _e.call(this, t, i);
  }
  function c() {
    n = this.checked, r(0, n);
  }
  return t.$$set = (i) => {
    "checked" in i && r(0, n = i.checked), "label" in i && r(1, l = i.label), "testid" in i && r(2, s = i.testid);
  }, [n, l, s, o, u, c];
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
    ), e && (e.target && p(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
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
const Qt = `merger{display:grid;height:100%;grid-template-rows:2fr auto;grid-template-columns:repeat(2,auto) 1fr;text-align:left;gap:.5rem}merger ul{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:.5rem}merger .action{grid-column:3/4;justify-self:left;padding:2rem}merger .structure{border-right:var(--color-black) thin solid;display:grid;grid-template-rows:auto 1fr;height:100%;overflow:hidden}merger .structure ul{height:100%;overflow:auto}merger .list-container{border-right:var(--color-black) thin solid;display:grid;height:100%;grid-template-rows:auto auto 1fr}merger .list-container ul{height:100%;overflow:auto}merger .list{display:flex;flex-direction:column;gap:.5rem}merger>div{padding:.5rem}merger .select-all-container{margin-bottom:1rem;display:flex;justify-content:end}merger .action{display:flex;flex-direction:row;gap:.5rem;height:40px}merger .usage{height:100%;overflow:hidden;display:grid;grid-template-rows:auto 1fr}merger .usage ul{height:100%;overflow:auto}
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
function ze(t) {
  let e, r = (
    /*item*/
    t[15] + ""
  ), n;
  return {
    c() {
      e = _("li"), n = B(r);
    },
    m(l, s) {
      p(l, e, s), y(e, n);
    },
    p(l, s) {
      s & /*structure*/
      2 && r !== (r = /*item*/
      l[15] + "") && W(n, r);
    },
    d(l) {
      l && k(e);
    }
  };
}
function Ue(t) {
  let e, r, n, l;
  function s(...o) {
    return (
      /*change_handler*/
      t[12](
        /*ii*/
        t[17],
        ...o
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
  }), r.$on("change", s), {
    c() {
      e = _("li"), Y(r.$$.fragment), n = T();
    },
    m(o, u) {
      p(o, e, u), U(r, e, null), y(e, n), l = !0;
    },
    p(o, u) {
      t = o;
      const c = {};
      u & /*checkedIndexes*/
      4 && (c.checked = /*checkedIndexes*/
      t[2].has(
        /*ii*/
        t[17]
      )), u & /*items*/
      1 && (c.label = /*item*/
      t[15].label), r.$set(c);
    },
    i(o) {
      l || (w(r.$$.fragment, o), l = !0);
    },
    o(o) {
      M(r.$$.fragment, o), l = !1;
    },
    d(o) {
      o && k(e), V(r);
    }
  };
}
function Ve(t) {
  let e, r = (
    /*lnType*/
    t[18].ln + ""
  ), n, l, s = (
    /*lnType*/
    t[18].dot + ""
  ), o, u;
  return {
    c() {
      e = _("li"), n = B(r), l = B(" ("), o = B(s), u = B(")");
    },
    m(c, i) {
      p(c, e, i), y(e, n), y(e, l), y(e, o), y(e, u);
    },
    p(c, i) {
      i & /*affectedLNTypes*/
      16 && r !== (r = /*lnType*/
      c[18].ln + "") && W(n, r), i & /*affectedLNTypes*/
      16 && s !== (s = /*lnType*/
      c[18].dot + "") && W(o, s);
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
      e = _("option"), n = B(r), e.__value = /*ii*/
      t[17], e.value = e.__value;
    },
    m(l, s) {
      p(l, e, s), y(e, n);
    },
    p(l, s) {
      s & /*items*/
      1 && r !== (r = /*item*/
      l[15].label + "") && W(n, r);
    },
    d(l) {
      l && k(e);
    }
  };
}
function zt(t) {
  let e, r, n, l, s, o, u, c, i, a, g, b, m, h, E, H, L, v, C, N, I, F, te, Q, me, se, K, ge, Ne, ce = (
    /*structure*/
    t[1]
  ), G = [];
  for (let d = 0; d < ce.length; d += 1)
    G[d] = ze(Qe(t, ce, d));
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
  ), x = [];
  for (let d = 0; d < ne.length; d += 1)
    x[d] = Ue(qe(t, ne, d));
  const ct = (d) => M(x[d], 1, 1, () => {
    x[d] = null;
  });
  let ie = (
    /*affectedLNTypes*/
    t[4]
  ), R = [];
  for (let d = 0; d < ie.length; d += 1)
    R[d] = Ve(Pe(t, ie, d));
  let ue = (
    /*items*/
    t[0]
  ), j = [];
  for (let d = 0; d < ue.length; d += 1)
    j[d] = Je(Fe(t, ue, d));
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
      e = _("merger"), r = _("div"), n = _("h3"), n.textContent = "Structure", l = T(), s = _("ul");
      for (let d = 0; d < G.length; d += 1)
        G[d].c();
      o = T(), u = _("div"), c = _("h3"), c.textContent = "Duplicate DOTypes", i = T(), a = _("div"), Y(g.$$.fragment), b = T(), m = _("ul");
      for (let d = 0; d < x.length; d += 1)
        x[d].c();
      h = T(), E = _("div"), H = _("h3"), H.textContent = "Affected LN Types", L = T(), v = _("ul");
      for (let d = 0; d < R.length; d += 1)
        R[d].c();
      C = T(), N = _("div"), I = _("select"), F = _("option"), F.textContent = "Select a merge target";
      for (let d = 0; d < j.length; d += 1)
        j[d].c();
      te = T(), Y(Q.$$.fragment), me = T(), se = _("style"), this.c = D, A(s, "class", "structure-list"), A(r, "class", "structure"), A(a, "class", "select-all-container"), A(m, "class", "list"), A(u, "class", "list-container"), A(E, "class", "usage"), F.__value = -1, F.value = F.__value, F.disabled = !0, F.selected = !0, A(I, "data-testid", "merger_merge-target"), A(N, "class", "action");
    },
    m(d, S) {
      p(d, e, S), y(e, r), y(r, n), y(r, l), y(r, s);
      for (let O = 0; O < G.length; O += 1)
        G[O].m(s, null);
      y(e, o), y(e, u), y(u, c), y(u, i), y(u, a), U(g, a, null), y(u, b), y(u, m);
      for (let O = 0; O < x.length; O += 1)
        x[O].m(m, null);
      y(e, h), y(e, E), y(E, H), y(E, L), y(E, v);
      for (let O = 0; O < R.length; O += 1)
        R[O].m(v, null);
      y(e, C), y(e, N), y(N, I), y(I, F);
      for (let O = 0; O < j.length; O += 1)
        j[O].m(I, null);
      Me(
        I,
        /*selectedMergeTargetIndex*/
        t[3]
      ), y(N, te), U(Q, N, null), p(d, me, S), p(d, se, S), se.innerHTML = Qt, K = !0, ge || (Ne = oe(
        I,
        "change",
        /*handleTargetInputChange*/
        t[8]
      ), ge = !0);
    },
    p(d, [S]) {
      if (S & /*structure*/
      2) {
        ce = /*structure*/
        d[1];
        let f;
        for (f = 0; f < ce.length; f += 1) {
          const z = Qe(d, ce, f);
          G[f] ? G[f].p(z, S) : (G[f] = ze(z), G[f].c(), G[f].m(s, null));
        }
        for (; f < G.length; f += 1)
          G[f].d(1);
        G.length = ce.length;
      }
      if (S & /*checkedIndexes, items, handleChange*/
      69) {
        ne = /*items*/
        d[0];
        let f;
        for (f = 0; f < ne.length; f += 1) {
          const z = qe(d, ne, f);
          x[f] ? (x[f].p(z, S), w(x[f], 1)) : (x[f] = Ue(z), x[f].c(), w(x[f], 1), x[f].m(m, null));
        }
        for (ye(), f = ne.length; f < x.length; f += 1)
          ct(f);
        ve();
      }
      if (S & /*affectedLNTypes*/
      16) {
        ie = /*affectedLNTypes*/
        d[4];
        let f;
        for (f = 0; f < ie.length; f += 1) {
          const z = Pe(d, ie, f);
          R[f] ? R[f].p(z, S) : (R[f] = Ve(z), R[f].c(), R[f].m(v, null));
        }
        for (; f < R.length; f += 1)
          R[f].d(1);
        R.length = ie.length;
      }
      if (S & /*items*/
      1) {
        ue = /*items*/
        d[0];
        let f;
        for (f = 0; f < ue.length; f += 1) {
          const z = Fe(d, ue, f);
          j[f] ? j[f].p(z, S) : (j[f] = Je(z), j[f].c(), j[f].m(I, null));
        }
        for (; f < j.length; f += 1)
          j[f].d(1);
        j.length = ue.length;
      }
      (!K || S & /*selectedMergeTargetIndex*/
      8) && Me(
        I,
        /*selectedMergeTargetIndex*/
        d[3]
      );
      const O = {};
      S & /*isMergePossible*/
      32 && (O.disabled = !/*isMergePossible*/
      d[5]), Q.$set(O);
    },
    i(d) {
      if (!K) {
        w(g.$$.fragment, d);
        for (let S = 0; S < ne.length; S += 1)
          w(x[S]);
        w(Q.$$.fragment, d), K = !0;
      }
    },
    o(d) {
      M(g.$$.fragment, d), x = x.filter(Boolean);
      for (let S = 0; S < x.length; S += 1)
        M(x[S]);
      M(Q.$$.fragment, d), K = !1;
    },
    d(d) {
      d && k(e), fe(G, d), V(g), fe(x, d), fe(R, d), fe(j, d), V(Q), d && k(me), d && k(se), ge = !1, Ne();
    }
  };
}
function Ut(t, e, r) {
  let n, l, s, { items: o = [] } = e, { structure: u = [] } = e;
  const c = Ze();
  let i = /* @__PURE__ */ new Set(), a = [];
  function g(v, C) {
    C.target.checked ? i.add(v) : i.delete(v), r(2, i);
  }
  function b(v) {
    const C = [];
    for (const N of v) {
      const I = o[N], F = I.usages;
      for (const te of F)
        C.push({ ln: te, dot: I.label });
    }
    return C;
  }
  function m(v) {
    const C = [...Array.from(i.values())];
    n && c("merge", {
      selectedIndexes: C,
      selectedMergeTargetIndex: h
    });
  }
  let h = -1;
  function E(v) {
    const N = v.target.value, I = parseInt(N);
    r(3, h = I);
  }
  function H(v) {
    v.target.checked, o.forEach((C, N) => i.add(N)), r(2, i);
  }
  const L = (v, C) => g(v, C);
  return t.$$set = (v) => {
    "items" in v && r(0, o = v.items), "structure" in v && r(1, u = v.structure);
  }, t.$$.update = () => {
    t.$$.dirty & /*checkedIndexes*/
    4 && r(4, a = b([...i.values()])), t.$$.dirty & /*checkedIndexes*/
    4 && r(10, s = i.size > 0), t.$$.dirty & /*selectedMergeTargetIndex*/
    8 && r(11, l = h > -1), t.$$.dirty & /*isSomeDuplicateSelected, isTargetSelected*/
    3072 && r(5, n = s && l);
  }, [
    o,
    u,
    i,
    h,
    a,
    n,
    g,
    m,
    E,
    H,
    s,
    l,
    L
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
      Ut,
      zt,
      J,
      { items: 0, structure: 1 },
      null
    ), e && (e.target && p(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
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
const Vt = `:root,:host{--color-white: #FFFFFF;--color-white-dark: #f2f2f2;--color-yellow: #D9D800;--color-blue: #004552;--color-blue-dark: #14343e;--color-blue-1: #3253A8;--color-blue-light: #e5ecee;--color-torques: #007D80;--color-green: #288409;--color-black: #000000;--color-beige-1: burlywood;--color-beige-2: blanchedalmond;--color-pink: #C73C61;--color-grey-1: #626262;--color-grey-2: #808080;--color-grey-3: #bdbdbd;--color-primary: var(--color-yellow);--color-secondary: var(--color-blue);--color-text: var(--color-white);--color-text-disabled-1: rgba(0, 0, 0, .4);--border-radius: 4px;--font-family: "Avenir Next", sans-serif;--letter-spacing: .2px;--font-size: 12px;--color-ied-focus: var(--color-beige-1);--color-ied-focus-hover: var(--color-beige-2);--color-button-group-default: #5F6E75;--color-button-group-selected: #004552;--color-message-goose: var(--color-green);--color-message-mms: var(--color-blue-1);--color-message-sampledvalues: var(--color-pink);--sidebar-width: 400px}:root,:host{font-family:var(--font-family);letter-spacing:var(--letter-spacing);font-size:var(--font-size)}
`;
function Jt(t) {
  let e;
  return {
    c() {
      e = _("style"), this.c = D;
    },
    m(r, n) {
      p(r, e, n), e.innerHTML = Vt;
    },
    p: D,
    i: D,
    o: D,
    d(r) {
      r && k(e);
    }
  };
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
      null,
      Jt,
      J,
      {},
      null
    ), e && e.target && p(e.target, this, e.anchor);
  }
}
customElements.define("tscd-theme", ot);
function Xe(t) {
  let e = (
    /*selectedGroupIndex*/
    t[0]
  ), r, n, l = Ke(t);
  return {
    c() {
      l.c(), r = ut();
    },
    m(s, o) {
      l.m(s, o), p(s, r, o), n = !0;
    },
    p(s, o) {
      o & /*selectedGroupIndex*/
      1 && J(e, e = /*selectedGroupIndex*/
      s[0]) ? (ye(), M(l, 1, 1, D), ve(), l = Ke(s), l.c(), w(l, 1), l.m(r.parentNode, r)) : l.p(s, o);
    },
    i(s) {
      n || (w(l), n = !0);
    },
    o(s) {
      M(l), n = !1;
    },
    d(s) {
      s && k(r), l.d(s);
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
      U(e, n, l), r = !0;
    },
    p(n, l) {
      const s = {};
      l & /*itemSets, selectedGroupIndex*/
      5 && (s.items = /*itemSets*/
      n[2][
        /*selectedGroupIndex*/
        n[0]
      ]), l & /*structure*/
      8 && (s.structure = /*structure*/
      n[3]), e.$set(s);
    },
    i(n) {
      r || (w(e.$$.fragment, n), r = !0);
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
  let e, r, n, l, s, o, u, c, i, a, g;
  e = new ot({}), o = new rt({
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
  }), o.$on(
    "select",
    /*handleGroupSelect*/
    t[4]
  );
  let b = (
    /*selectedGroupIndex*/
    t[0] > -1 && Xe(t)
  );
  return {
    c() {
      Y(e.$$.fragment), r = T(), n = _("dedupe"), l = _("layout"), s = _("sidebar"), Y(o.$$.fragment), u = T(), c = _("main"), b && b.c(), i = T(), a = _("style"), this.c = D;
    },
    m(m, h) {
      U(e, m, h), p(m, r, h), p(m, n, h), y(n, l), y(l, s), U(o, s, null), y(l, u), y(l, c), b && b.m(c, null), t[8](n), p(m, i, h), p(m, a, h), a.innerHTML = pt, g = !0;
    },
    p(m, [h]) {
      const E = {};
      h & /*itemSets*/
      4 && (E.itemSets = /*itemSets*/
      m[2].map(We)), h & /*selectedGroupIndex*/
      1 && (E.selectedIndex = /*selectedGroupIndex*/
      m[0]), o.$set(E), /*selectedGroupIndex*/
      m[0] > -1 ? b ? (b.p(m, h), h & /*selectedGroupIndex*/
      1 && w(b, 1)) : (b = Xe(m), b.c(), w(b, 1), b.m(c, null)) : b && (ye(), M(b, 1, 1, () => {
        b = null;
      }), ve());
    },
    i(m) {
      g || (w(e.$$.fragment, m), w(o.$$.fragment, m), w(b), g = !0);
    },
    o(m) {
      M(e.$$.fragment, m), M(o.$$.fragment, m), M(b), g = !1;
    },
    d(m) {
      V(e, m), m && k(r), m && k(n), V(o), b && b.d(), t[8](null), m && k(i), m && k(a);
    }
  };
}
function Kt(t) {
  const e = "_", r = t.element.parentElement;
  return r ? r.getAttribute("id") ?? e : e;
}
function Wt(t, e) {
  const r = t.element.cloneNode(!0);
  return r.setAttribute("type", e.id), Yt(t.element, r);
}
function Yt(t, e) {
  return {
    old: { element: t },
    new: { element: e }
  };
}
const We = (t) => t.map((e) => e.label);
function Zt(t, e, r) {
  let { doc: n } = e, l, s, o;
  function u(v) {
    v && (l = new q(v), s = new St(l), i());
  }
  let c;
  async function i() {
    r(7, c = await s.findDuplicateObjectTypes());
  }
  let a = [];
  function g(v) {
    v && r(2, a = v.map((C) => C.map((N) => ({
      label: N.element.id,
      usages: N.usages.map(Kt)
    }))));
  }
  let b = -1;
  function m(v) {
    r(0, b = v.detail.index);
  }
  let h = [];
  function E(v, C) {
    if (C < 0)
      return;
    const I = v[C][0], te = Array.from(I.element.element.children).map((Q) => Q.getAttribute("name") ?? "");
    r(3, h = te.filter(Boolean));
  }
  function H(v) {
    const { selectedIndexes: C, selectedMergeTargetIndex: N } = v.detail, I = c[b], F = C.map((K) => I[K]), te = I[N], me = { action: { actions: F.map((K) => K.usages.map((ge) => Wt(ge, te.element))).flat() } }, se = new CustomEvent("editor-action", { detail: me, composed: !0, bubbles: !0 });
    o.dispatchEvent(se);
  }
  function L(v) {
    Ae[v ? "unshift" : "push"](() => {
      o = v, r(1, o);
    });
  }
  return t.$$set = (v) => {
    "doc" in v && r(6, n = v.doc);
  }, t.$$.update = () => {
    t.$$.dirty & /*doc*/
    64 && u(n), t.$$.dirty & /*duplicateGroups*/
    128 && g(c), t.$$.dirty & /*duplicateGroups, selectedGroupIndex*/
    129 && E(c, b);
  }, [
    b,
    o,
    a,
    h,
    m,
    H,
    n,
    c,
    L
  ];
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
      Zt,
      Xt,
      J,
      { doc: 6 },
      null
    ), e && (e.target && p(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
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
customElements.define("tscd-dedupe", st);
const er = "@oscd-plugins/dedupe", tr = "0.0.5";
function Ye(t) {
  var n;
  let e, r;
  return e = new st({
    props: { doc: (
      /*doc*/
      (n = t[0]) == null ? void 0 : n.documentElement
    ) }
  }), {
    c() {
      Y(e.$$.fragment);
    },
    m(l, s) {
      U(e, l, s), r = !0;
    },
    p(l, s) {
      var u;
      const o = {};
      s & /*doc*/
      1 && (o.doc = /*doc*/
      (u = l[0]) == null ? void 0 : u.documentElement), e.$set(o);
    },
    i(l) {
      r || (w(e.$$.fragment, l), r = !0);
    },
    o(l) {
      M(e.$$.fragment, l), r = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function rr(t) {
  let e, r, n, l, s, o = (
    /*doc*/
    t[0] && Ye(t)
  );
  return {
    c() {
      o && o.c(), e = T(), r = _("input"), n = T(), l = _("input"), this.c = D, A(r, "type", "hidden"), A(r, "name", "package-name"), r.value = er, A(l, "type", "hidden"), A(l, "name", "package-version"), l.value = tr;
    },
    m(u, c) {
      o && o.m(u, c), p(u, e, c), p(u, r, c), p(u, n, c), p(u, l, c), s = !0;
    },
    p(u, [c]) {
      /*doc*/
      u[0] ? o ? (o.p(u, c), c & /*doc*/
      1 && w(o, 1)) : (o = Ye(u), o.c(), w(o, 1), o.m(e.parentNode, e)) : o && (ye(), M(o, 1, 1, () => {
        o = null;
      }), ve());
    },
    i(u) {
      s || (w(o), s = !0);
    },
    o(u) {
      M(o), s = !1;
    },
    d(u) {
      o && o.d(u), u && k(e), u && k(r), u && k(n), u && k(l);
    }
  };
}
function nr(t, e, r) {
  let { doc: n } = e;
  return t.$$set = (l) => {
    "doc" in l && r(0, n = l.doc);
  }, [n];
}
class lr extends X {
  constructor(e) {
    super(), ee(
      this,
      {
        target: this.shadowRoot,
        props: Z(this.attributes),
        customElement: !0
      },
      nr,
      rr,
      J,
      { doc: 0 },
      null
    ), e && (e.target && p(e.target, this, e.anchor), e.props && (this.$set(e.props), $()));
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
  lr as default
};
