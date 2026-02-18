function f() {
}
function C(t) {
  return t();
}
function S() {
  return /* @__PURE__ */ Object.create(null);
}
function g(t) {
  t.forEach(C);
}
function E(t) {
  return typeof t == "function";
}
function B(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function J(t) {
  return Object.keys(t).length === 0;
}
function _(t, e) {
  t.appendChild(e);
}
function b(t, e, n) {
  t.insertBefore(e, n || null);
}
function j(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function p(t) {
  return document.createElement(t);
}
function K(t) {
  return document.createTextNode(t);
}
function O() {
  return K(" ");
}
function $(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Q(t) {
  return Array.from(t.childNodes);
}
function D(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let H;
function m(t) {
  H = t;
}
const h = [], R = [], y = [], P = [], U = Promise.resolve();
let v = !1;
function W() {
  v || (v = !0, U.then(I));
}
function k(t) {
  y.push(t);
}
const w = /* @__PURE__ */ new Set();
let d = 0;
function I() {
  if (d !== 0)
    return;
  const t = H;
  do {
    try {
      for (; d < h.length; ) {
        const e = h[d];
        d++, m(e), X(e.$$);
      }
    } catch (e) {
      throw h.length = 0, d = 0, e;
    }
    for (m(null), h.length = 0, d = 0; R.length; )
      R.pop()();
    for (let e = 0; e < y.length; e += 1) {
      const n = y[e];
      w.has(n) || (w.add(n), n());
    }
    y.length = 0;
  } while (h.length);
  for (; P.length; )
    P.pop()();
  v = !1, w.clear(), m(t);
}
function X(t) {
  if (t.fragment !== null) {
    t.update(), g(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(k);
  }
}
const x = /* @__PURE__ */ new Set();
let Y;
function V(t, e) {
  t && t.i && (x.delete(t), t.i(e));
}
function Z(t, e, n, i) {
  if (t && t.o) {
    if (x.has(t))
      return;
    x.add(t), Y.c.push(() => {
      x.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function tt(t) {
  t && t.c();
}
function q(t, e, n, i) {
  const { fragment: s, after_update: a } = t.$$;
  s && s.m(e, n), i || k(() => {
    const u = t.$$.on_mount.map(C).filter(E);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : g(u), t.$$.on_mount = [];
  }), a.forEach(k);
}
function z(t, e) {
  const n = t.$$;
  n.fragment !== null && (g(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function et(t, e) {
  t.$$.dirty[0] === -1 && (h.push(t), W(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function F(t, e, n, i, s, a, u, l = [-1]) {
  const o = H;
  m(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: f,
    not_equal: s,
    bound: S(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: S(),
    dirty: l,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  u && u(r.root);
  let T = !1;
  if (r.ctx = n ? n(t, e.props || {}, (c, A, ...L) => {
    const N = L.length ? L[0] : A;
    return r.ctx && s(r.ctx[c], r.ctx[c] = N) && (!r.skip_bound && r.bound[c] && r.bound[c](N), T && et(t, c)), A;
  }) : [], r.update(), T = !0, g(r.before_update), r.fragment = i ? i(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Q(e.target);
      r.fragment && r.fragment.l(c), c.forEach(j);
    } else
      r.fragment && r.fragment.c();
    e.intro && V(t.$$.fragment), q(t, e.target, e.anchor, e.customElement), I();
  }
  m(o);
}
let M;
typeof HTMLElement == "function" && (M = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(C).filter(E);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    g(this.$$.on_disconnect);
  }
  $destroy() {
    z(this, 1), this.$destroy = f;
  }
  $on(t, e) {
    if (!E(e))
      return f;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const i = n.indexOf(e);
      i !== -1 && n.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !J(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function nt(t) {
  let e;
  return {
    c() {
      e = p("diffing-tool"), e.innerHTML = '<h1 class="diffing-tool-h1">Hi there I am the diffing tool!!!</h1>', this.c = f;
    },
    m(n, i) {
      b(n, e, i);
    },
    p: f,
    i: f,
    o: f,
    d(n) {
      n && j(e);
    }
  };
}
class G extends M {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.diffing-tool-h1{text-decoration:underline}</style>", F(
      this,
      {
        target: this.shadowRoot,
        props: D(this.attributes),
        customElement: !0
      },
      null,
      nt,
      B,
      {},
      null
    ), e && e.target && b(e.target, this, e.anchor);
  }
}
customElements.define("tscd-diffing-tool", G);
const rt = "@oscd-plugins/diffing-tool", it = "0.0.5";
function ot(t) {
  let e, n, i, s, a, u, l;
  return n = new G({}), {
    c() {
      e = p("main"), tt(n.$$.fragment), i = O(), s = p("input"), a = O(), u = p("input"), this.c = f, $(s, "type", "hidden"), $(s, "name", "package-name"), s.value = rt, $(u, "type", "hidden"), $(u, "name", "package-version"), u.value = it;
    },
    m(o, r) {
      b(o, e, r), q(n, e, null), _(e, i), _(e, s), _(e, a), _(e, u), l = !0;
    },
    p: f,
    i(o) {
      l || (V(n.$$.fragment, o), l = !0);
    },
    o(o) {
      Z(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && j(e), z(n);
    }
  };
}
class st extends M {
  constructor(e) {
    super(), F(
      this,
      {
        target: this.shadowRoot,
        props: D(this.attributes),
        customElement: !0
      },
      null,
      ot,
      B,
      {},
      null
    ), e && e.target && b(e.target, this, e.anchor);
  }
}
export {
  st as default
};
