function p() {
}
function O(t) {
  return t();
}
function B() {
  return /* @__PURE__ */ Object.create(null);
}
function b(t) {
  t.forEach(O);
}
function N(t) {
  return typeof t == "function";
}
function z(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function U(t) {
  return Object.keys(t).length === 0;
}
function w(t, e) {
  t.appendChild(e);
}
function l(t, e, n) {
  t.insertBefore(e, n || null);
}
function d(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _(t) {
  return document.createElement(t);
}
function W(t) {
  return document.createTextNode(t);
}
function A() {
  return W(" ");
}
function E(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function X(t) {
  return Array.from(t.childNodes);
}
function F(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let P;
function x(t) {
  P = t;
}
const g = [], I = [], v = [], V = [], Y = Promise.resolve();
let S = !1;
function Z() {
  S || (S = !0, Y.then(y));
}
function H(t) {
  v.push(t);
}
const j = /* @__PURE__ */ new Set();
let $ = 0;
function y() {
  if ($ !== 0)
    return;
  const t = P;
  do {
    try {
      for (; $ < g.length; ) {
        const e = g[$];
        $++, x(e), tt(e.$$);
      }
    } catch (e) {
      throw g.length = 0, $ = 0, e;
    }
    for (x(null), g.length = 0, $ = 0; I.length; )
      I.pop()();
    for (let e = 0; e < v.length; e += 1) {
      const n = v[e];
      j.has(n) || (j.add(n), n());
    }
    v.length = 0;
  } while (g.length);
  for (; V.length; )
    V.pop()();
  S = !1, j.clear(), x(t);
}
function tt(t) {
  if (t.fragment !== null) {
    t.update(), b(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(H);
  }
}
const C = /* @__PURE__ */ new Set();
let h;
function et() {
  h = {
    r: 0,
    c: [],
    p: h
    // parent group
  };
}
function nt() {
  h.r || b(h.c), h = h.p;
}
function k(t, e) {
  t && t.i && (C.delete(t), t.i(e));
}
function M(t, e, n, r) {
  if (t && t.o) {
    if (C.has(t))
      return;
    C.add(t), h.c.push(() => {
      C.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function rt(t) {
  t && t.c();
}
function G(t, e, n, r) {
  const { fragment: o, after_update: f } = t.$$;
  o && o.m(e, n), r || H(() => {
    const i = t.$$.on_mount.map(O).filter(N);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : b(i), t.$$.on_mount = [];
  }), f.forEach(H);
}
function J(t, e) {
  const n = t.$$;
  n.fragment !== null && (b(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ot(t, e) {
  t.$$.dirty[0] === -1 && (g.push(t), Z(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function K(t, e, n, r, o, f, i, u = [-1]) {
  const s = P;
  x(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: f,
    update: p,
    not_equal: o,
    bound: B(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: B(),
    dirty: u,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  i && i(c.root);
  let m = !1;
  if (c.ctx = n ? n(t, e.props || {}, (a, D, ...L) => {
    const R = L.length ? L[0] : D;
    return c.ctx && o(c.ctx[a], c.ctx[a] = R) && (!c.skip_bound && c.bound[a] && c.bound[a](R), m && ot(t, a)), D;
  }) : [], c.update(), m = !0, b(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = X(e.target);
      c.fragment && c.fragment.l(a), a.forEach(d);
    } else
      c.fragment && c.fragment.c();
    e.intro && k(t.$$.fragment), G(t, e.target, e.anchor, e.customElement), y();
  }
  x(s);
}
let T;
typeof HTMLElement == "function" && (T = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(O).filter(N);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    b(this.$$.on_disconnect);
  }
  $destroy() {
    J(this, 1), this.$destroy = p;
  }
  $on(t, e) {
    if (!N(e))
      return p;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !U(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function it(t) {
  let e;
  return {
    c() {
      e = _("span"), e.textContent = "no";
    },
    m(n, r) {
      l(n, e, r);
    },
    d(n) {
      n && d(e);
    }
  };
}
function ut(t) {
  let e;
  return {
    c() {
      e = _("span"), e.textContent = "yes";
    },
    m(n, r) {
      l(n, e, r);
    },
    d(n) {
      n && d(e);
    }
  };
}
function ct(t) {
  let e, n, r, o, f;
  function i(c, m) {
    return (
      /*root*/
      c[0] ? ut : it
    );
  }
  let u = i(t), s = u(t);
  return {
    c() {
      e = _("network-explorer"), n = _("h1"), n.textContent = "Hi I am the Dedupe Plugin", r = A(), o = _("p"), o.textContent = "got document?", f = A(), s.c(), this.c = p;
    },
    m(c, m) {
      l(c, e, m), w(e, n), w(e, r), w(e, o), w(e, f), s.m(e, null);
    },
    p(c, [m]) {
      u !== (u = i(c)) && (s.d(1), s = u(c), s && (s.c(), s.m(e, null)));
    },
    i: p,
    o: p,
    d(c) {
      c && d(e), s.d();
    }
  };
}
function st(t, e, n) {
  let { root: r } = e;
  return t.$$set = (o) => {
    "root" in o && n(0, r = o.root);
  }, [r];
}
class Q extends T {
  constructor(e) {
    super(), K(
      this,
      {
        target: this.shadowRoot,
        props: F(this.attributes),
        customElement: !0
      },
      st,
      ct,
      z,
      { root: 0 },
      null
    ), e && (e.target && l(e.target, this, e.anchor), e.props && (this.$set(e.props), y()));
  }
  static get observedAttributes() {
    return ["root"];
  }
  get root() {
    return this.$$.ctx[0];
  }
  set root(e) {
    this.$$set({ root: e }), y();
  }
}
customElements.define("tscd-dedupe", Q);
const ft = "@oscd-plugins/dedupe", lt = "0.0.1";
function q(t) {
  var r;
  let e, n;
  return e = new Q({
    props: { root: (
      /*doc*/
      (r = t[0]) == null ? void 0 : r.documentElement
    ) }
  }), {
    c() {
      rt(e.$$.fragment);
    },
    m(o, f) {
      G(e, o, f), n = !0;
    },
    p(o, f) {
      var u;
      const i = {};
      f & /*doc*/
      1 && (i.root = /*doc*/
      (u = o[0]) == null ? void 0 : u.documentElement), e.$set(i);
    },
    i(o) {
      n || (k(e.$$.fragment, o), n = !0);
    },
    o(o) {
      M(e.$$.fragment, o), n = !1;
    },
    d(o) {
      J(e, o);
    }
  };
}
function at(t) {
  let e, n, r, o, f, i = (
    /*doc*/
    t[0] && q(t)
  );
  return {
    c() {
      i && i.c(), e = A(), n = _("input"), r = A(), o = _("input"), this.c = p, E(n, "type", "hidden"), E(n, "name", "package-name"), n.value = ft, E(o, "type", "hidden"), E(o, "name", "package-version"), o.value = lt;
    },
    m(u, s) {
      i && i.m(u, s), l(u, e, s), l(u, n, s), l(u, r, s), l(u, o, s), f = !0;
    },
    p(u, [s]) {
      /*doc*/
      u[0] ? i ? (i.p(u, s), s & /*doc*/
      1 && k(i, 1)) : (i = q(u), i.c(), k(i, 1), i.m(e.parentNode, e)) : i && (et(), M(i, 1, 1, () => {
        i = null;
      }), nt());
    },
    i(u) {
      f || (k(i), f = !0);
    },
    o(u) {
      M(i), f = !1;
    },
    d(u) {
      i && i.d(u), u && d(e), u && d(n), u && d(r), u && d(o);
    }
  };
}
function dt(t, e, n) {
  let { doc: r } = e;
  return t.$$set = (o) => {
    "doc" in o && n(0, r = o.doc);
  }, [r];
}
class ht extends T {
  constructor(e) {
    super(), K(
      this,
      {
        target: this.shadowRoot,
        props: F(this.attributes),
        customElement: !0
      },
      dt,
      at,
      z,
      { doc: 0 },
      null
    ), e && (e.target && l(e.target, this, e.anchor), e.props && (this.$set(e.props), y()));
  }
  static get observedAttributes() {
    return ["doc"];
  }
  get doc() {
    return this.$$.ctx[0];
  }
  set doc(e) {
    this.$$set({ doc: e }), y();
  }
}
export {
  ht as default
};
