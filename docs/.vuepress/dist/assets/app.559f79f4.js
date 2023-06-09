const Qf = 'modulepreload',
  Zf = function (e) {
    return '/learn-webgis/' + e;
  },
  Zl = {},
  $ = function (t, n, r) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((o) => {
            if (((o = Zf(o)), o in Zl)) return;
            Zl[o] = !0;
            const i = o.endsWith('.css'),
              l = i ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${o}"]${l}`)) return;
            const a = document.createElement('link');
            if (
              ((a.rel = i ? 'stylesheet' : Qf),
              i || ((a.as = 'script'), (a.crossOrigin = '')),
              (a.href = o),
              document.head.appendChild(a),
              i)
            )
              return new Promise((s, c) => {
                a.addEventListener('load', s),
                  a.addEventListener('error', () =>
                    c(new Error(`Unable to preload CSS for ${o}`))
                  );
              });
          })
        ).then(() => t());
  },
  Xf = {
    'v-8daa1a0e': () =>
      $(() => import('./index.html.adfaf965.js'), []).then(({ data: e }) => e),
    'v-3d6ddeb7': () =>
      $(() => import('./index.html.b171372c.js'), []).then(({ data: e }) => e),
    'v-a213d2d2': () =>
      $(() => import('./cache.html.ab57e988.js'), []).then(({ data: e }) => e),
    'v-08421583': () =>
      $(() => import('./conversion.html.20bb7e24.js'), []).then(
        ({ data: e }) => e
      ),
    'v-24e1b800': () =>
      $(() => import('./index.html.7ced94a5.js'), []).then(({ data: e }) => e),
    'v-74458d05': () =>
      $(() => import('./index.html.22e32fa4.js'), []).then(({ data: e }) => e),
    'v-fffb8e28': () =>
      $(() => import('./index.html.0c5f404c.js'), []).then(({ data: e }) => e),
    'v-744738f7': () =>
      $(() => import('./index.html.48eab2c4.js'), []).then(({ data: e }) => e),
    'v-9323d598': () =>
      $(() => import('./ceshi.html.a669054b.js'), []).then(({ data: e }) => e),
    'v-2d0a9a6d': () =>
      $(() => import('./index.html.f0256a59.js'), []).then(({ data: e }) => e),
    'v-52c14c99': () =>
      $(() => import('./index.html.c68c325f.js'), []).then(({ data: e }) => e),
    'v-10c44358': () =>
      $(() => import('./cuttif.html.25498289.js'), []).then(({ data: e }) => e),
    'v-152bcb16': () =>
      $(() => import('./index.html.aaf9636c.js'), []).then(({ data: e }) => e),
    'v-d440f426': () =>
      $(() => import('./index.html.2cba64ea.js'), []).then(({ data: e }) => e),
    'v-cb29af62': () =>
      $(() => import('./index.html.03f11a9d.js'), []).then(({ data: e }) => e),
    'v-7cc14ffa': () =>
      $(() => import('./coordinate.html.03b8a259.js'), []).then(
        ({ data: e }) => e
      ),
    'v-d1b2bbd2': () =>
      $(() => import('./model.html.03e0bffa.js'), []).then(({ data: e }) => e),
    'v-a87e88b4': () =>
      $(() => import('./index.html.b3f7d845.js'), []).then(({ data: e }) => e),
    'v-2bc2d2ee': () =>
      $(() => import('./index.html.4ec41881.js'), []).then(({ data: e }) => e),
    'v-e1f1f660': () =>
      $(() => import('./desc.html.e2e686c9.js'), []).then(({ data: e }) => e),
    'v-5f8b6f8f': () =>
      $(() => import('./pore.html.a1516215.js'), []).then(({ data: e }) => e),
    'v-dbe2d262': () =>
      $(() => import('./start.html.77f16271.js'), []).then(({ data: e }) => e),
    'v-fa3aae8c': () =>
      $(() => import('./box.html.5e574c9f.js'), []).then(({ data: e }) => e),
    'v-1dd271de': () =>
      $(() => import('./select.html.8cb01263.js'), []).then(({ data: e }) => e),
    'v-ea113d1a': () =>
      $(() => import('./stacking.html.222b232d.js'), []).then(
        ({ data: e }) => e
      ),
    'v-d37c0208': () =>
      $(() => import('./flex.html.6c9dcf57.js'), []).then(({ data: e }) => e),
    'v-4b457bcf': () =>
      $(() => import('./grid.html.130671fe.js'), []).then(({ data: e }) => e),
    'v-cd20c196': () =>
      $(() => import('./resolution.html.5c338b52.js'), []).then(
        ({ data: e }) => e
      ),
    'v-c654dfb8': () =>
      $(() => import('./s3m.html.702e1e0f.js'), []).then(({ data: e }) => e),
    'v-658e3dcf': () =>
      $(() => import('./ortho.html.1203abdb.js'), []).then(({ data: e }) => e),
    'v-ab4aa9a8': () =>
      $(() => import('./satellite.html.ad8c345b.js'), []).then(
        ({ data: e }) => e
      ),
    'v-45e4fe64': () =>
      $(() => import('./tilt.html.38338968.js'), []).then(({ data: e }) => e),
    'v-72181280': () =>
      $(() => import('./3dtiles.html.1c8c63ba.js'), []).then(
        ({ data: e }) => e
      ),
    'v-7407d6da': () =>
      $(() => import('./kmlorkmz.html.7d3c26dc.js'), []).then(
        ({ data: e }) => e
      ),
    'v-0ce4deae': () =>
      $(() => import('./ogc.html.8b668288.js'), []).then(({ data: e }) => e),
    'v-ff68d6e6': () =>
      $(() => import('./wcs.html.e66fc965.js'), []).then(({ data: e }) => e),
    'v-dd6c35d2': () =>
      $(() => import('./wms.html.ef67b6e5.js'), []).then(({ data: e }) => e),
    'v-3f60af09': () =>
      $(() => import('./wmts.html.fbdc898c.js'), []).then(({ data: e }) => e),
    'v-2ffc96da': () =>
      $(() => import('./wps.html.29d54382.js'), []).then(({ data: e }) => e),
    'v-6fcb2b96': () =>
      $(() => import('./skybox.html.89a915ac.js'), []).then(({ data: e }) => e),
    'v-23a924a1': () =>
      $(() => import('./axis.html.194251f4.js'), []).then(({ data: e }) => e),
    'v-2070e3b1': () =>
      $(() => import('./desc.html.e1629961.js'), []).then(({ data: e }) => e),
    'v-7f3673da': () =>
      $(() => import('./light.html.b19d62e9.js'), []).then(({ data: e }) => e),
    'v-dabfd1e0': () =>
      $(() => import('./orbitControls.html.049ea966.js'), []).then(
        ({ data: e }) => e
      ),
    'v-6918925a': () =>
      $(() => import('./setup.html.53b02f48.js'), []).then(({ data: e }) => e),
    'v-2de0940e': () =>
      $(() => import('./start.html.26551325.js'), []).then(({ data: e }) => e),
    'v-d40f9c1e': () =>
      $(() => import('./stats.html.2d54cf04.js'), []).then(({ data: e }) => e),
    'v-7b32b4f2': () =>
      $(() => import('./codeverification.html.2e57f844.js'), []).then(
        ({ data: e }) => e
      ),
    'v-1696ab78': () =>
      $(() => import('./command.html.ca02253d.js'), []).then(
        ({ data: e }) => e
      ),
    'v-4f3a3e89': () =>
      $(() => import('./crlforlf.html.504d2d39.js'), []).then(
        ({ data: e }) => e
      ),
    'v-290c00d0': () =>
      $(() => import('./sshkey.html.6c3bdffb.js'), []).then(({ data: e }) => e),
    'v-6471236e': () =>
      $(() => import('./datgui.html.bde6d23a.js'), []).then(({ data: e }) => e),
    'v-a1606d4c': () =>
      $(() => import('./prettier.html.952eca7d.js'), []).then(
        ({ data: e }) => e
      ),
    'v-b560a2a4': () =>
      $(() => import('./unexpected.html.1420b1cc.js'), []).then(
        ({ data: e }) => e
      ),
    'v-3706649a': () =>
      $(() => import('./404.html.c3e557d0.js'), []).then(({ data: e }) => e)
  };
function nl(e, t) {
  const n = Object.create(null),
    r = e.split(',');
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function Dr(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = ke(r) ? rd(r) : Dr(r);
      if (o) for (const i in o) t[i] = o[i];
    }
    return t;
  } else {
    if (ke(e)) return e;
    if (Ie(e)) return e;
  }
}
const ed = /;(?![^(]*\))/g,
  td = /:([^]+)/,
  nd = /\/\*.*?\*\//gs;
function rd(e) {
  const t = {};
  return (
    e
      .replace(nd, '')
      .split(ed)
      .forEach((n) => {
        if (n) {
          const r = n.split(td);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function lt(e) {
  let t = '';
  if (ke(e)) t = e;
  else if (se(e))
    for (let n = 0; n < e.length; n++) {
      const r = lt(e[n]);
      r && (t += r + ' ');
    }
  else if (Ie(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const od =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  id = nl(od);
function nc(e) {
  return !!e || e === '';
}
const He = (e) =>
    ke(e)
      ? e
      : e == null
      ? ''
      : se(e) || (Ie(e) && (e.toString === lc || !de(e.toString)))
      ? JSON.stringify(e, rc, 2)
      : String(e),
  rc = (e, t) =>
    t && t.__v_isRef
      ? rc(e, t.value)
      : Dn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o]) => ((n[`${r} =>`] = o), n),
            {}
          )
        }
      : oc(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : Ie(t) && !se(t) && !ac(t)
      ? String(t)
      : t,
  Le = {},
  Fn = [],
  kt = () => {},
  ld = () => !1,
  ad = /^on[^a-z]/,
  Nr = (e) => ad.test(e),
  rl = (e) => e.startsWith('onUpdate:'),
  Ve = Object.assign,
  ol = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  sd = Object.prototype.hasOwnProperty,
  ye = (e, t) => sd.call(e, t),
  se = Array.isArray,
  Dn = (e) => Io(e) === '[object Map]',
  oc = (e) => Io(e) === '[object Set]',
  de = (e) => typeof e == 'function',
  ke = (e) => typeof e == 'string',
  il = (e) => typeof e == 'symbol',
  Ie = (e) => e !== null && typeof e == 'object',
  ic = (e) => Ie(e) && de(e.then) && de(e.catch),
  lc = Object.prototype.toString,
  Io = (e) => lc.call(e),
  cd = (e) => Io(e).slice(8, -1),
  ac = (e) => Io(e) === '[object Object]',
  ll = (e) =>
    ke(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  gr = nl(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  $o = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  ud = /-(\w)/g,
  It = $o((e) => e.replace(ud, (t, n) => (n ? n.toUpperCase() : ''))),
  fd = /\B([A-Z])/g,
  Pn = $o((e) => e.replace(fd, '-$1').toLowerCase()),
  Ro = $o((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Zo = $o((e) => (e ? `on${Ro(e)}` : '')),
  Pr = (e, t) => !Object.is(e, t),
  Xo = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  mo = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  al = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Xl;
const dd = () =>
  Xl ||
  (Xl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
let ft;
class hd {
  constructor(t = !1) {
    (this.detached = t),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ft),
      !t && ft && (this.index = (ft.scopes || (ft.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = ft;
      try {
        return (ft = this), t();
      } finally {
        ft = n;
      }
    }
  }
  on() {
    ft = this;
  }
  off() {
    ft = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this.active = !1);
    }
  }
}
function pd(e, t = ft) {
  t && t.active && t.effects.push(e);
}
function md() {
  return ft;
}
function gd(e) {
  ft && ft.cleanups.push(e);
}
const sl = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  sc = (e) => (e.w & tn) > 0,
  cc = (e) => (e.n & tn) > 0,
  vd = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= tn;
  },
  bd = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        sc(o) && !cc(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~tn),
          (o.n &= ~tn);
      }
      t.length = n;
    }
  },
  xi = new WeakMap();
let pr = 0,
  tn = 1;
const Ci = 30;
let Ct;
const Cn = Symbol(''),
  wi = Symbol('');
class cl {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      pd(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ct,
      n = Xt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Ct),
        (Ct = this),
        (Xt = !0),
        (tn = 1 << ++pr),
        pr <= Ci ? vd(this) : ea(this),
        this.fn()
      );
    } finally {
      pr <= Ci && bd(this),
        (tn = 1 << --pr),
        (Ct = this.parent),
        (Xt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ct === this
      ? (this.deferStop = !0)
      : this.active &&
        (ea(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function ea(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Xt = !0;
const uc = [];
function er() {
  uc.push(Xt), (Xt = !1);
}
function tr() {
  const e = uc.pop();
  Xt = e === void 0 ? !0 : e;
}
function pt(e, t, n) {
  if (Xt && Ct) {
    let r = xi.get(e);
    r || xi.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = sl())), fc(o);
  }
}
function fc(e, t) {
  let n = !1;
  pr <= Ci ? cc(e) || ((e.n |= tn), (n = !sc(e))) : (n = !e.has(Ct)),
    n && (e.add(Ct), Ct.deps.push(e));
}
function Ut(e, t, n, r, o, i) {
  const l = xi.get(e);
  if (!l) return;
  let a = [];
  if (t === 'clear') a = [...l.values()];
  else if (n === 'length' && se(e)) {
    const s = al(r);
    l.forEach((c, u) => {
      (u === 'length' || u >= s) && a.push(c);
    });
  } else
    switch ((n !== void 0 && a.push(l.get(n)), t)) {
      case 'add':
        se(e)
          ? ll(n) && a.push(l.get('length'))
          : (a.push(l.get(Cn)), Dn(e) && a.push(l.get(wi)));
        break;
      case 'delete':
        se(e) || (a.push(l.get(Cn)), Dn(e) && a.push(l.get(wi)));
        break;
      case 'set':
        Dn(e) && a.push(l.get(Cn));
        break;
    }
  if (a.length === 1) a[0] && ki(a[0]);
  else {
    const s = [];
    for (const c of a) c && s.push(...c);
    ki(sl(s));
  }
}
function ki(e, t) {
  const n = se(e) ? e : [...e];
  for (const r of n) r.computed && ta(r);
  for (const r of n) r.computed || ta(r);
}
function ta(e, t) {
  (e !== Ct || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const yd = nl('__proto__,__v_isRef,__isVue'),
  dc = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(il)
  ),
  _d = ul(),
  xd = ul(!1, !0),
  Cd = ul(!0),
  na = wd();
function wd() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = Ce(this);
        for (let i = 0, l = this.length; i < l; i++) pt(r, 'get', i + '');
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(Ce)) : o;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        er();
        const r = Ce(this)[t].apply(this, n);
        return tr(), r;
      };
    }),
    e
  );
}
function ul(e = !1, t = !1) {
  return function (r, o, i) {
    if (o === '__v_isReactive') return !e;
    if (o === '__v_isReadonly') return e;
    if (o === '__v_isShallow') return t;
    if (o === '__v_raw' && i === (e ? (t ? Nd : vc) : t ? gc : mc).get(r))
      return r;
    const l = se(r);
    if (!e && l && ye(na, o)) return Reflect.get(na, o, i);
    const a = Reflect.get(r, o, i);
    return (il(o) ? dc.has(o) : yd(o)) || (e || pt(r, 'get', o), t)
      ? a
      : Be(a)
      ? l && ll(o)
        ? a
        : a.value
      : Ie(a)
      ? e
        ? hl(a)
        : tt(a)
      : a;
  };
}
const kd = hc(),
  Ed = hc(!0);
function hc(e = !1) {
  return function (n, r, o, i) {
    let l = n[r];
    if (Vn(l) && Be(l) && !Be(o)) return !1;
    if (
      !e &&
      (!go(o) && !Vn(o) && ((l = Ce(l)), (o = Ce(o))),
      !se(n) && Be(l) && !Be(o))
    )
      return (l.value = o), !0;
    const a = se(n) && ll(r) ? Number(r) < n.length : ye(n, r),
      s = Reflect.set(n, r, o, i);
    return (
      n === Ce(i) && (a ? Pr(o, l) && Ut(n, 'set', r, o) : Ut(n, 'add', r, o)),
      s
    );
  };
}
function Od(e, t) {
  const n = ye(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && Ut(e, 'delete', t, void 0), r;
}
function Pd(e, t) {
  const n = Reflect.has(e, t);
  return (!il(t) || !dc.has(t)) && pt(e, 'has', t), n;
}
function Sd(e) {
  return pt(e, 'iterate', se(e) ? 'length' : Cn), Reflect.ownKeys(e);
}
const pc = { get: _d, set: kd, deleteProperty: Od, has: Pd, ownKeys: Sd },
  Td = {
    get: Cd,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    }
  },
  Ld = Ve({}, pc, { get: xd, set: Ed }),
  fl = (e) => e,
  jo = (e) => Reflect.getPrototypeOf(e);
function qr(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = Ce(e),
    i = Ce(t);
  n || (t !== i && pt(o, 'get', t), pt(o, 'get', i));
  const { has: l } = jo(o),
    a = r ? fl : n ? ml : Sr;
  if (l.call(o, t)) return a(e.get(t));
  if (l.call(o, i)) return a(e.get(i));
  e !== o && e.get(t);
}
function Gr(e, t = !1) {
  const n = this.__v_raw,
    r = Ce(n),
    o = Ce(e);
  return (
    t || (e !== o && pt(r, 'has', e), pt(r, 'has', o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function Kr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && pt(Ce(e), 'iterate', Cn), Reflect.get(e, 'size', e)
  );
}
function ra(e) {
  e = Ce(e);
  const t = Ce(this);
  return jo(t).has.call(t, e) || (t.add(e), Ut(t, 'add', e, e)), this;
}
function oa(e, t) {
  t = Ce(t);
  const n = Ce(this),
    { has: r, get: o } = jo(n);
  let i = r.call(n, e);
  i || ((e = Ce(e)), (i = r.call(n, e)));
  const l = o.call(n, e);
  return (
    n.set(e, t), i ? Pr(t, l) && Ut(n, 'set', e, t) : Ut(n, 'add', e, t), this
  );
}
function ia(e) {
  const t = Ce(this),
    { has: n, get: r } = jo(t);
  let o = n.call(t, e);
  o || ((e = Ce(e)), (o = n.call(t, e))), r && r.call(t, e);
  const i = t.delete(e);
  return o && Ut(t, 'delete', e, void 0), i;
}
function la() {
  const e = Ce(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ut(e, 'clear', void 0, void 0), n;
}
function Yr(e, t) {
  return function (r, o) {
    const i = this,
      l = i.__v_raw,
      a = Ce(l),
      s = t ? fl : e ? ml : Sr;
    return (
      !e && pt(a, 'iterate', Cn), l.forEach((c, u) => r.call(o, s(c), s(u), i))
    );
  };
}
function Jr(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      i = Ce(o),
      l = Dn(i),
      a = e === 'entries' || (e === Symbol.iterator && l),
      s = e === 'keys' && l,
      c = o[e](...r),
      u = n ? fl : t ? ml : Sr;
    return (
      !t && pt(i, 'iterate', s ? wi : Cn),
      {
        next() {
          const { value: f, done: d } = c.next();
          return d
            ? { value: f, done: d }
            : { value: a ? [u(f[0]), u(f[1])] : u(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        }
      }
    );
  };
}
function qt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this;
  };
}
function Ad() {
  const e = {
      get(i) {
        return qr(this, i);
      },
      get size() {
        return Kr(this);
      },
      has: Gr,
      add: ra,
      set: oa,
      delete: ia,
      clear: la,
      forEach: Yr(!1, !1)
    },
    t = {
      get(i) {
        return qr(this, i, !1, !0);
      },
      get size() {
        return Kr(this);
      },
      has: Gr,
      add: ra,
      set: oa,
      delete: ia,
      clear: la,
      forEach: Yr(!1, !0)
    },
    n = {
      get(i) {
        return qr(this, i, !0);
      },
      get size() {
        return Kr(this, !0);
      },
      has(i) {
        return Gr.call(this, i, !0);
      },
      add: qt('add'),
      set: qt('set'),
      delete: qt('delete'),
      clear: qt('clear'),
      forEach: Yr(!0, !1)
    },
    r = {
      get(i) {
        return qr(this, i, !0, !0);
      },
      get size() {
        return Kr(this, !0);
      },
      has(i) {
        return Gr.call(this, i, !0);
      },
      add: qt('add'),
      set: qt('set'),
      delete: qt('delete'),
      clear: qt('clear'),
      forEach: Yr(!0, !0)
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      (e[i] = Jr(i, !1, !1)),
        (n[i] = Jr(i, !0, !1)),
        (t[i] = Jr(i, !1, !0)),
        (r[i] = Jr(i, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Id, $d, Rd, jd] = Ad();
function dl(e, t) {
  const n = t ? (e ? jd : Rd) : e ? $d : Id;
  return (r, o, i) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
      ? e
      : o === '__v_raw'
      ? r
      : Reflect.get(ye(n, o) && o in r ? n : r, o, i);
}
const Md = { get: dl(!1, !1) },
  Fd = { get: dl(!1, !0) },
  Dd = { get: dl(!0, !1) },
  mc = new WeakMap(),
  gc = new WeakMap(),
  vc = new WeakMap(),
  Nd = new WeakMap();
function Hd(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function Bd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hd(cd(e));
}
function tt(e) {
  return Vn(e) ? e : pl(e, !1, pc, Md, mc);
}
function zd(e) {
  return pl(e, !1, Ld, Fd, gc);
}
function hl(e) {
  return pl(e, !0, Td, Dd, vc);
}
function pl(e, t, n, r, o) {
  if (!Ie(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = o.get(e);
  if (i) return i;
  const l = Bd(e);
  if (l === 0) return e;
  const a = new Proxy(e, l === 2 ? r : n);
  return o.set(e, a), a;
}
function Nn(e) {
  return Vn(e) ? Nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Vn(e) {
  return !!(e && e.__v_isReadonly);
}
function go(e) {
  return !!(e && e.__v_isShallow);
}
function bc(e) {
  return Nn(e) || Vn(e);
}
function Ce(e) {
  const t = e && e.__v_raw;
  return t ? Ce(t) : e;
}
function yc(e) {
  return mo(e, '__v_skip', !0), e;
}
const Sr = (e) => (Ie(e) ? tt(e) : e),
  ml = (e) => (Ie(e) ? hl(e) : e);
function _c(e) {
  Xt && Ct && ((e = Ce(e)), fc(e.dep || (e.dep = sl())));
}
function xc(e, t) {
  (e = Ce(e)), e.dep && ki(e.dep);
}
function Be(e) {
  return !!(e && e.__v_isRef === !0);
}
function fe(e) {
  return wc(e, !1);
}
function Cc(e) {
  return wc(e, !0);
}
function wc(e, t) {
  return Be(e) ? e : new Vd(e, t);
}
class Vd {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Ce(t)),
      (this._value = n ? t : Sr(t));
  }
  get value() {
    return _c(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || go(t) || Vn(t);
    (t = n ? t : Ce(t)),
      Pr(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Sr(t)), xc(this));
  }
}
function z(e) {
  return Be(e) ? e.value : e;
}
const Ud = {
  get: (e, t, n) => z(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Be(o) && !Be(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  }
};
function kc(e) {
  return Nn(e) ? e : new Proxy(e, Ud);
}
function Mo(e) {
  const t = se(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = qd(e, n);
  return t;
}
class Wd {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function qd(e, t, n) {
  const r = e[t];
  return Be(r) ? r : new Wd(e, t, n);
}
var Ec;
class Gd {
  constructor(t, n, r, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Ec] = !1),
      (this._dirty = !0),
      (this.effect = new cl(t, () => {
        this._dirty || ((this._dirty = !0), xc(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = Ce(this);
    return (
      _c(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
Ec = '__v_isReadonly';
function Kd(e, t, n = !1) {
  let r, o;
  const i = de(e);
  return (
    i ? ((r = e), (o = kt)) : ((r = e.get), (o = e.set)),
    new Gd(r, o, i || !o, n)
  );
}
function en(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (i) {
    Hr(i, t, n);
  }
  return o;
}
function bt(e, t, n, r) {
  if (de(e)) {
    const i = en(e, t, n, r);
    return (
      i &&
        ic(i) &&
        i.catch((l) => {
          Hr(l, t, n);
        }),
      i
    );
  }
  const o = [];
  for (let i = 0; i < e.length; i++) o.push(bt(e[i], t, n, r));
  return o;
}
function Hr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const l = t.proxy,
      a = n;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, l, a) === !1) return;
      }
      i = i.parent;
    }
    const s = t.appContext.config.errorHandler;
    if (s) {
      en(s, null, 10, [e, l, a]);
      return;
    }
  }
  Yd(e, n, o, r);
}
function Yd(e, t, n, r = !0) {
  console.error(e);
}
let Tr = !1,
  Ei = !1;
const Ke = [];
let Tt = 0;
const Hn = [];
let Bt = null,
  pn = 0;
const Oc = Promise.resolve();
let gl = null;
function nr(e) {
  const t = gl || Oc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Jd(e) {
  let t = Tt + 1,
    n = Ke.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    Lr(Ke[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function Fo(e) {
  (!Ke.length || !Ke.includes(e, Tr && e.allowRecurse ? Tt + 1 : Tt)) &&
    (e.id == null ? Ke.push(e) : Ke.splice(Jd(e.id), 0, e), Pc());
}
function Pc() {
  !Tr && !Ei && ((Ei = !0), (gl = Oc.then(Sc)));
}
function Qd(e) {
  const t = Ke.indexOf(e);
  t > Tt && Ke.splice(t, 1);
}
function Zd(e) {
  se(e)
    ? Hn.push(...e)
    : (!Bt || !Bt.includes(e, e.allowRecurse ? pn + 1 : pn)) && Hn.push(e),
    Pc();
}
function aa(e, t = Tr ? Tt + 1 : 0) {
  for (; t < Ke.length; t++) {
    const n = Ke[t];
    n && n.pre && (Ke.splice(t, 1), t--, n());
  }
}
function vo(e) {
  if (Hn.length) {
    const t = [...new Set(Hn)];
    if (((Hn.length = 0), Bt)) {
      Bt.push(...t);
      return;
    }
    for (Bt = t, Bt.sort((n, r) => Lr(n) - Lr(r)), pn = 0; pn < Bt.length; pn++)
      Bt[pn]();
    (Bt = null), (pn = 0);
  }
}
const Lr = (e) => (e.id == null ? 1 / 0 : e.id),
  Xd = (e, t) => {
    const n = Lr(e) - Lr(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Sc(e) {
  (Ei = !1), (Tr = !0), Ke.sort(Xd);
  const t = kt;
  try {
    for (Tt = 0; Tt < Ke.length; Tt++) {
      const n = Ke[Tt];
      n && n.active !== !1 && en(n, null, 14);
    }
  } finally {
    (Tt = 0),
      (Ke.length = 0),
      vo(),
      (Tr = !1),
      (gl = null),
      (Ke.length || Hn.length) && Sc();
  }
}
function eh(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Le;
  let o = n;
  const i = t.startsWith('update:'),
    l = i && t.slice(7);
  if (l && l in r) {
    const u = `${l === 'modelValue' ? 'model' : l}Modifiers`,
      { number: f, trim: d } = r[u] || Le;
    d && (o = n.map((h) => (ke(h) ? h.trim() : h))), f && (o = n.map(al));
  }
  let a,
    s = r[(a = Zo(t))] || r[(a = Zo(It(t)))];
  !s && i && (s = r[(a = Zo(Pn(t)))]), s && bt(s, e, 6, o);
  const c = r[a + 'Once'];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), bt(c, e, 6, o);
  }
}
function Tc(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const i = e.emits;
  let l = {},
    a = !1;
  if (!de(e)) {
    const s = (c) => {
      const u = Tc(c, t, !0);
      u && ((a = !0), Ve(l, u));
    };
    !n && t.mixins.length && t.mixins.forEach(s),
      e.extends && s(e.extends),
      e.mixins && e.mixins.forEach(s);
  }
  return !i && !a
    ? (Ie(e) && r.set(e, null), null)
    : (se(i) ? i.forEach((s) => (l[s] = null)) : Ve(l, i),
      Ie(e) && r.set(e, l),
      l);
}
function Do(e, t) {
  return !e || !Nr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ye(e, t[0].toLowerCase() + t.slice(1)) || ye(e, Pn(t)) || ye(e, t));
}
let We = null,
  Lc = null;
function bo(e) {
  const t = We;
  return (We = e), (Lc = (e && e.type.__scopeId) || null), t;
}
function Ue(e, t = We, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && ba(-1);
    const i = bo(t);
    let l;
    try {
      l = e(...o);
    } finally {
      bo(i), r._d && ba(1);
    }
    return l;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function ei(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: i,
    propsOptions: [l],
    slots: a,
    attrs: s,
    emit: c,
    render: u,
    renderCache: f,
    data: d,
    setupState: h,
    ctx: m,
    inheritAttrs: x
  } = e;
  let w, g;
  const y = bo(e);
  try {
    if (n.shapeFlag & 4) {
      const A = o || r;
      (w = xt(u.call(A, A, f, i, h, d, m))), (g = s);
    } else {
      const A = t;
      (w = xt(
        A.length > 1 ? A(i, { attrs: s, slots: a, emit: c }) : A(i, null)
      )),
        (g = t.props ? s : th(s));
    }
  } catch (A) {
    (_r.length = 0), Hr(A, e, 1), (w = _(at));
  }
  let k = w;
  if (g && x !== !1) {
    const A = Object.keys(g),
      { shapeFlag: R } = k;
    A.length && R & 7 && (l && A.some(rl) && (g = nh(g, l)), (k = rn(k, g)));
  }
  return (
    n.dirs && ((k = rn(k)), (k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (k.transition = n.transition),
    (w = k),
    bo(y),
    w
  );
}
const th = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || Nr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  nh = (e, t) => {
    const n = {};
    for (const r in e) (!rl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function rh(e, t, n) {
  const { props: r, children: o, component: i } = e,
    { props: l, children: a, patchFlag: s } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && s >= 0) {
    if (s & 1024) return !0;
    if (s & 16) return r ? sa(r, l, c) : !!l;
    if (s & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (l[d] !== r[d] && !Do(c, d)) return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable)
      ? !0
      : r === l
      ? !1
      : r
      ? l
        ? sa(r, l, c)
        : !0
      : !!l;
  return !1;
}
function sa(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !Do(n, i)) return !0;
  }
  return !1;
}
function oh({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const ih = (e) => e.__isSuspense;
function Ac(e, t) {
  t && t.pendingBranch
    ? se(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Zd(e);
}
function et(e, t) {
  if (Ne) {
    let n = Ne.provides;
    const r = Ne.parent && Ne.parent.provides;
    r === n && (n = Ne.provides = Object.create(r)), (n[e] = t);
  }
}
function Ae(e, t, n = !1) {
  const r = Ne || We;
  if (r) {
    const o =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && de(t) ? t.call(r.proxy) : t;
  }
}
function No(e, t) {
  return vl(e, null, t);
}
const Qr = {};
function ze(e, t, n) {
  return vl(e, t, n);
}
function vl(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: l } = Le
) {
  const a = Ne;
  let s,
    c = !1,
    u = !1;
  if (
    (Be(e)
      ? ((s = () => e.value), (c = go(e)))
      : Nn(e)
      ? ((s = () => e), (r = !0))
      : se(e)
      ? ((u = !0),
        (c = e.some((k) => Nn(k) || go(k))),
        (s = () =>
          e.map((k) => {
            if (Be(k)) return k.value;
            if (Nn(k)) return yn(k);
            if (de(k)) return en(k, a, 2);
          })))
      : de(e)
      ? t
        ? (s = () => en(e, a, 2))
        : (s = () => {
            if (!(a && a.isUnmounted)) return f && f(), bt(e, a, 3, [d]);
          })
      : (s = kt),
    t && r)
  ) {
    const k = s;
    s = () => yn(k());
  }
  let f,
    d = (k) => {
      f = g.onStop = () => {
        en(k, a, 4);
      };
    },
    h;
  if (Wn)
    if (
      ((d = kt),
      t ? n && bt(t, a, 3, [s(), u ? [] : void 0, d]) : s(),
      o === 'sync')
    ) {
      const k = ep();
      h = k.__watcherHandles || (k.__watcherHandles = []);
    } else return kt;
  let m = u ? new Array(e.length).fill(Qr) : Qr;
  const x = () => {
    if (!!g.active)
      if (t) {
        const k = g.run();
        (r || c || (u ? k.some((A, R) => Pr(A, m[R])) : Pr(k, m))) &&
          (f && f(),
          bt(t, a, 3, [k, m === Qr ? void 0 : u && m[0] === Qr ? [] : m, d]),
          (m = k));
      } else g.run();
  };
  x.allowRecurse = !!t;
  let w;
  o === 'sync'
    ? (w = x)
    : o === 'post'
    ? (w = () => rt(x, a && a.suspense))
    : ((x.pre = !0), a && (x.id = a.uid), (w = () => Fo(x)));
  const g = new cl(s, w);
  t
    ? n
      ? x()
      : (m = g.run())
    : o === 'post'
    ? rt(g.run.bind(g), a && a.suspense)
    : g.run();
  const y = () => {
    g.stop(), a && a.scope && ol(a.scope.effects, g);
  };
  return h && h.push(y), y;
}
function lh(e, t, n) {
  const r = this.proxy,
    o = ke(e) ? (e.includes('.') ? Ic(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  de(t) ? (i = t) : ((i = t.handler), (n = t));
  const l = Ne;
  Un(this);
  const a = vl(o, i.bind(r), n);
  return l ? Un(l) : wn(), a;
}
function Ic(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function yn(e, t) {
  if (!Ie(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Be(e))) yn(e.value, t);
  else if (se(e)) for (let n = 0; n < e.length; n++) yn(e[n], t);
  else if (oc(e) || Dn(e))
    e.forEach((n) => {
      yn(n, t);
    });
  else if (ac(e)) for (const n in e) yn(e[n], t);
  return e;
}
function $c() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map()
  };
  return (
    De(() => {
      e.isMounted = !0;
    }),
    rr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const gt = [Function, Array],
  ah = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: gt,
      onEnter: gt,
      onAfterEnter: gt,
      onEnterCancelled: gt,
      onBeforeLeave: gt,
      onLeave: gt,
      onAfterLeave: gt,
      onLeaveCancelled: gt,
      onBeforeAppear: gt,
      onAppear: gt,
      onAfterAppear: gt,
      onAppearCancelled: gt
    },
    setup(e, { slots: t }) {
      const n = zo(),
        r = $c();
      let o;
      return () => {
        const i = t.default && bl(t.default(), !0);
        if (!i || !i.length) return;
        let l = i[0];
        if (i.length > 1) {
          for (const x of i)
            if (x.type !== at) {
              l = x;
              break;
            }
        }
        const a = Ce(e),
          { mode: s } = a;
        if (r.isLeaving) return ti(l);
        const c = ca(l);
        if (!c) return ti(l);
        const u = Ar(c, a, r, n);
        Ir(c, u);
        const f = n.subTree,
          d = f && ca(f);
        let h = !1;
        const { getTransitionKey: m } = c.type;
        if (m) {
          const x = m();
          o === void 0 ? (o = x) : x !== o && ((o = x), (h = !0));
        }
        if (d && d.type !== at && (!mn(c, d) || h)) {
          const x = Ar(d, a, r, n);
          if ((Ir(d, x), s === 'out-in'))
            return (
              (r.isLeaving = !0),
              (x.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              ti(l)
            );
          s === 'in-out' &&
            c.type !== at &&
            (x.delayLeave = (w, g, y) => {
              const k = jc(r, d);
              (k[String(d.key)] = d),
                (w._leaveCb = () => {
                  g(), (w._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = y);
            });
        }
        return l;
      };
    }
  },
  Rc = ah;
function jc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Ar(e, t, n, r) {
  const {
      appear: o,
      mode: i,
      persisted: l = !1,
      onBeforeEnter: a,
      onEnter: s,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: d,
      onAfterLeave: h,
      onLeaveCancelled: m,
      onBeforeAppear: x,
      onAppear: w,
      onAfterAppear: g,
      onAppearCancelled: y
    } = t,
    k = String(e.key),
    A = jc(n, e),
    R = (b, B) => {
      b && bt(b, r, 9, B);
    },
    V = (b, B) => {
      const q = B[1];
      R(b, B),
        se(b) ? b.every((Y) => Y.length <= 1) && q() : b.length <= 1 && q();
    },
    E = {
      mode: i,
      persisted: l,
      beforeEnter(b) {
        let B = a;
        if (!n.isMounted)
          if (o) B = x || a;
          else return;
        b._leaveCb && b._leaveCb(!0);
        const q = A[k];
        q && mn(e, q) && q.el._leaveCb && q.el._leaveCb(), R(B, [b]);
      },
      enter(b) {
        let B = s,
          q = c,
          Y = u;
        if (!n.isMounted)
          if (o) (B = w || s), (q = g || c), (Y = y || u);
          else return;
        let S = !1;
        const H = (b._enterCb = (N) => {
          S ||
            ((S = !0),
            N ? R(Y, [b]) : R(q, [b]),
            E.delayedLeave && E.delayedLeave(),
            (b._enterCb = void 0));
        });
        B ? V(B, [b, H]) : H();
      },
      leave(b, B) {
        const q = String(e.key);
        if ((b._enterCb && b._enterCb(!0), n.isUnmounting)) return B();
        R(f, [b]);
        let Y = !1;
        const S = (b._leaveCb = (H) => {
          Y ||
            ((Y = !0),
            B(),
            H ? R(m, [b]) : R(h, [b]),
            (b._leaveCb = void 0),
            A[q] === e && delete A[q]);
        });
        (A[q] = e), d ? V(d, [b, S]) : S();
      },
      clone(b) {
        return Ar(b, t, n, r);
      }
    };
  return E;
}
function ti(e) {
  if (Br(e)) return (e = rn(e)), (e.children = null), e;
}
function ca(e) {
  return Br(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Ir(e, t) {
  e.shapeFlag & 6 && e.component
    ? Ir(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function bl(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const a = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === we
      ? (l.patchFlag & 128 && o++, (r = r.concat(bl(l.children, t, a))))
      : (t || l.type !== at) && r.push(a != null ? rn(l, { key: a }) : l);
  }
  if (o > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
function oe(e) {
  return de(e) ? { setup: e, name: e.name } : e;
}
const Bn = (e) => !!e.type.__asyncLoader;
function re(e) {
  de(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: o = 200,
    timeout: i,
    suspensible: l = !0,
    onError: a
  } = e;
  let s = null,
    c,
    u = 0;
  const f = () => (u++, (s = null), d()),
    d = () => {
      let h;
      return (
        s ||
        (h = s =
          t()
            .catch((m) => {
              if (((m = m instanceof Error ? m : new Error(String(m))), a))
                return new Promise((x, w) => {
                  a(
                    m,
                    () => x(f()),
                    () => w(m),
                    u + 1
                  );
                });
              throw m;
            })
            .then((m) =>
              h !== s && s
                ? s
                : (m &&
                    (m.__esModule || m[Symbol.toStringTag] === 'Module') &&
                    (m = m.default),
                  (c = m),
                  m)
            ))
      );
    };
  return oe({
    name: 'AsyncComponentWrapper',
    __asyncLoader: d,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const h = Ne;
      if (c) return () => ni(c, h);
      const m = (y) => {
        (s = null), Hr(y, h, 13, !r);
      };
      if ((l && h.suspense) || Wn)
        return d()
          .then((y) => () => ni(y, h))
          .catch((y) => (m(y), () => (r ? _(r, { error: y }) : null)));
      const x = fe(!1),
        w = fe(),
        g = fe(!!o);
      return (
        o &&
          setTimeout(() => {
            g.value = !1;
          }, o),
        i != null &&
          setTimeout(() => {
            if (!x.value && !w.value) {
              const y = new Error(`Async component timed out after ${i}ms.`);
              m(y), (w.value = y);
            }
          }, i),
        d()
          .then(() => {
            (x.value = !0),
              h.parent && Br(h.parent.vnode) && Fo(h.parent.update);
          })
          .catch((y) => {
            m(y), (w.value = y);
          }),
        () => {
          if (x.value && c) return ni(c, h);
          if (w.value && r) return _(r, { error: w.value });
          if (n && !g.value) return _(n);
        }
      );
    }
  });
}
function ni(e, t) {
  const { ref: n, props: r, children: o, ce: i } = t.vnode,
    l = _(e, r, o);
  return (l.ref = n), (l.ce = i), delete t.vnode.ce, l;
}
const Br = (e) => e.type.__isKeepAlive;
function sh(e, t) {
  Mc(e, 'a', t);
}
function ch(e, t) {
  Mc(e, 'da', t);
}
function Mc(e, t, n = Ne) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((Ho(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      Br(o.parent.vnode) && uh(r, t, n, o), (o = o.parent);
  }
}
function uh(e, t, n, r) {
  const o = Ho(t, e, r, !0);
  zr(() => {
    ol(r[t], o);
  }, n);
}
function Ho(e, t, n = Ne, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...l) => {
          if (n.isUnmounted) return;
          er(), Un(n);
          const a = bt(t, n, e, l);
          return wn(), tr(), a;
        });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const Wt =
    (e) =>
    (t, n = Ne) =>
      (!Wn || e === 'sp') && Ho(e, (...r) => t(...r), n),
  fh = Wt('bm'),
  De = Wt('m'),
  dh = Wt('bu'),
  Fc = Wt('u'),
  rr = Wt('bum'),
  zr = Wt('um'),
  hh = Wt('sp'),
  ph = Wt('rtg'),
  mh = Wt('rtc');
function gh(e, t = Ne) {
  Ho('ec', e, t);
}
function yo(e, t) {
  const n = We;
  if (n === null) return e;
  const r = Vo(n) || n.proxy,
    o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [l, a, s, c = Le] = t[i];
    l &&
      (de(l) && (l = { mounted: l, updated: l }),
      l.deep && yn(a),
      o.push({
        dir: l,
        instance: r,
        value: a,
        oldValue: void 0,
        arg: s,
        modifiers: c
      }));
  }
  return e;
}
function St(e, t, n, r) {
  const o = e.dirs,
    i = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const a = o[l];
    i && (a.oldValue = i[l].value);
    let s = a.dir[r];
    s && (er(), bt(s, n, 8, [e.el, a, e, t]), tr());
  }
}
const Dc = 'components';
function $t(e, t) {
  return bh(Dc, e, !0, t) || e;
}
const vh = Symbol();
function bh(e, t, n = !0, r = !1) {
  const o = We || Ne;
  if (o) {
    const i = o.type;
    if (e === Dc) {
      const a = Qh(i, !1);
      if (a && (a === t || a === It(t) || a === Ro(It(t)))) return i;
    }
    const l = ua(o[e] || i[e], t) || ua(o.appContext[e], t);
    return !l && r ? i : l;
  }
}
function ua(e, t) {
  return e && (e[t] || e[It(t)] || e[Ro(It(t))]);
}
function nn(e, t, n, r) {
  let o;
  const i = n && n[r];
  if (se(e) || ke(e)) {
    o = new Array(e.length);
    for (let l = 0, a = e.length; l < a; l++)
      o[l] = t(e[l], l, void 0, i && i[l]);
  } else if (typeof e == 'number') {
    o = new Array(e);
    for (let l = 0; l < e; l++) o[l] = t(l + 1, l, void 0, i && i[l]);
  } else if (Ie(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (l, a) => t(l, a, void 0, i && i[a]));
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, s = l.length; a < s; a++) {
        const c = l[a];
        o[a] = t(e[c], c, a, i && i[a]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
function Se(e, t, n = {}, r, o) {
  if (We.isCE || (We.parent && Bn(We.parent) && We.parent.isCE))
    return t !== 'default' && (n.name = t), _('slot', n, r && r());
  let i = e[t];
  i && i._c && (i._d = !1), Z();
  const l = i && Nc(i(n)),
    a = Fe(
      we,
      { key: n.key || (l && l.key) || `_${t}` },
      l || (r ? r() : []),
      l && e._ === 1 ? 64 : -2
    );
  return (
    !o && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']),
    i && i._c && (i._d = !0),
    a
  );
}
function Nc(e) {
  return e.some((t) =>
    Co(t) ? !(t.type === at || (t.type === we && !Nc(t.children))) : !0
  )
    ? e
    : null;
}
const Oi = (e) => (e ? (Qc(e) ? Vo(e) || e.proxy : Oi(e.parent)) : null),
  vr = Ve(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Oi(e.parent),
    $root: (e) => Oi(e.root),
    $emit: (e) => e.emit,
    $options: (e) => yl(e),
    $forceUpdate: (e) => e.f || (e.f = () => Fo(e.update)),
    $nextTick: (e) => e.n || (e.n = nr.bind(e.proxy)),
    $watch: (e) => lh.bind(e)
  }),
  ri = (e, t) => e !== Le && !e.__isScriptSetup && ye(e, t),
  yh = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: i,
        accessCache: l,
        type: a,
        appContext: s
      } = e;
      let c;
      if (t[0] !== '$') {
        const h = l[t];
        if (h !== void 0)
          switch (h) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (ri(r, t)) return (l[t] = 1), r[t];
          if (o !== Le && ye(o, t)) return (l[t] = 2), o[t];
          if ((c = e.propsOptions[0]) && ye(c, t)) return (l[t] = 3), i[t];
          if (n !== Le && ye(n, t)) return (l[t] = 4), n[t];
          Pi && (l[t] = 0);
        }
      }
      const u = vr[t];
      let f, d;
      if (u) return t === '$attrs' && pt(e, 'get', t), u(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== Le && ye(n, t)) return (l[t] = 4), n[t];
      if (((d = s.config.globalProperties), ye(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: i } = e;
      return ri(o, t)
        ? ((o[t] = n), !0)
        : r !== Le && ye(r, t)
        ? ((r[t] = n), !0)
        : ye(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: i
        }
      },
      l
    ) {
      let a;
      return (
        !!n[l] ||
        (e !== Le && ye(e, l)) ||
        ri(t, l) ||
        ((a = i[0]) && ye(a, l)) ||
        ye(r, l) ||
        ye(vr, l) ||
        ye(o.config.globalProperties, l)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ye(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    }
  };
let Pi = !0;
function _h(e) {
  const t = yl(e),
    n = e.proxy,
    r = e.ctx;
  (Pi = !1), t.beforeCreate && fa(t.beforeCreate, e, 'bc');
  const {
    data: o,
    computed: i,
    methods: l,
    watch: a,
    provide: s,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: m,
    activated: x,
    deactivated: w,
    beforeDestroy: g,
    beforeUnmount: y,
    destroyed: k,
    unmounted: A,
    render: R,
    renderTracked: V,
    renderTriggered: E,
    errorCaptured: b,
    serverPrefetch: B,
    expose: q,
    inheritAttrs: Y,
    components: S,
    directives: H,
    filters: N
  } = t;
  if ((c && xh(c, r, null, e.appContext.config.unwrapInjectedRef), l))
    for (const P in l) {
      const M = l[P];
      de(M) && (r[P] = M.bind(n));
    }
  if (o) {
    const P = o.call(n, n);
    Ie(P) && (e.data = tt(P));
  }
  if (((Pi = !0), i))
    for (const P in i) {
      const M = i[P],
        X = de(M) ? M.bind(n, n) : de(M.get) ? M.get.bind(n, n) : kt,
        ne = !de(M) && de(M.set) ? M.set.bind(n) : kt,
        pe = F({ get: X, set: ne });
      Object.defineProperty(r, P, {
        enumerable: !0,
        configurable: !0,
        get: () => pe.value,
        set: (xe) => (pe.value = xe)
      });
    }
  if (a) for (const P in a) Hc(a[P], r, n, P);
  if (s) {
    const P = de(s) ? s.call(n) : s;
    Reflect.ownKeys(P).forEach((M) => {
      et(M, P[M]);
    });
  }
  u && fa(u, e, 'c');
  function C(P, M) {
    se(M) ? M.forEach((X) => P(X.bind(n))) : M && P(M.bind(n));
  }
  if (
    (C(fh, f),
    C(De, d),
    C(dh, h),
    C(Fc, m),
    C(sh, x),
    C(ch, w),
    C(gh, b),
    C(mh, V),
    C(ph, E),
    C(rr, y),
    C(zr, A),
    C(hh, B),
    se(q))
  )
    if (q.length) {
      const P = e.exposed || (e.exposed = {});
      q.forEach((M) => {
        Object.defineProperty(P, M, {
          get: () => n[M],
          set: (X) => (n[M] = X)
        });
      });
    } else e.exposed || (e.exposed = {});
  R && e.render === kt && (e.render = R),
    Y != null && (e.inheritAttrs = Y),
    S && (e.components = S),
    H && (e.directives = H);
}
function xh(e, t, n = kt, r = !1) {
  se(e) && (e = Si(e));
  for (const o in e) {
    const i = e[o];
    let l;
    Ie(i)
      ? 'default' in i
        ? (l = Ae(i.from || o, i.default, !0))
        : (l = Ae(i.from || o))
      : (l = Ae(i)),
      Be(l) && r
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => l.value,
            set: (a) => (l.value = a)
          })
        : (t[o] = l);
  }
}
function fa(e, t, n) {
  bt(se(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Hc(e, t, n, r) {
  const o = r.includes('.') ? Ic(n, r) : () => n[r];
  if (ke(e)) {
    const i = t[e];
    de(i) && ze(o, i);
  } else if (de(e)) ze(o, e.bind(n));
  else if (Ie(e))
    if (se(e)) e.forEach((i) => Hc(i, t, n, r));
    else {
      const i = de(e.handler) ? e.handler.bind(n) : t[e.handler];
      de(i) && ze(o, i, e);
    }
}
function yl(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: i,
      config: { optionMergeStrategies: l }
    } = e.appContext,
    a = i.get(t);
  let s;
  return (
    a
      ? (s = a)
      : !o.length && !n && !r
      ? (s = t)
      : ((s = {}), o.length && o.forEach((c) => _o(s, c, l, !0)), _o(s, t, l)),
    Ie(t) && i.set(t, s),
    s
  );
}
function _o(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && _o(e, i, n, !0), o && o.forEach((l) => _o(e, l, n, !0));
  for (const l in t)
    if (!(r && l === 'expose')) {
      const a = Ch[l] || (n && n[l]);
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const Ch = {
  data: da,
  props: fn,
  emits: fn,
  methods: fn,
  computed: fn,
  beforeCreate: Je,
  created: Je,
  beforeMount: Je,
  mounted: Je,
  beforeUpdate: Je,
  updated: Je,
  beforeDestroy: Je,
  beforeUnmount: Je,
  destroyed: Je,
  unmounted: Je,
  activated: Je,
  deactivated: Je,
  errorCaptured: Je,
  serverPrefetch: Je,
  components: fn,
  directives: fn,
  watch: kh,
  provide: da,
  inject: wh
};
function da(e, t) {
  return t
    ? e
      ? function () {
          return Ve(
            de(e) ? e.call(this, this) : e,
            de(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function wh(e, t) {
  return fn(Si(e), Si(t));
}
function Si(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function fn(e, t) {
  return e ? Ve(Ve(Object.create(null), e), t) : t;
}
function kh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ve(Object.create(null), e);
  for (const r in t) n[r] = Je(e[r], t[r]);
  return n;
}
function Eh(e, t, n, r = !1) {
  const o = {},
    i = {};
  mo(i, Bo, 1), (e.propsDefaults = Object.create(null)), Bc(e, t, o, i);
  for (const l in e.propsOptions[0]) l in o || (o[l] = void 0);
  n ? (e.props = r ? o : zd(o)) : e.type.props ? (e.props = o) : (e.props = i),
    (e.attrs = i);
}
function Oh(e, t, n, r) {
  const {
      props: o,
      attrs: i,
      vnode: { patchFlag: l }
    } = e,
    a = Ce(o),
    [s] = e.propsOptions;
  let c = !1;
  if ((r || l > 0) && !(l & 16)) {
    if (l & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (Do(e.emitsOptions, d)) continue;
        const h = t[d];
        if (s)
          if (ye(i, d)) h !== i[d] && ((i[d] = h), (c = !0));
          else {
            const m = It(d);
            o[m] = Ti(s, a, m, h, e, !1);
          }
        else h !== i[d] && ((i[d] = h), (c = !0));
      }
    }
  } else {
    Bc(e, t, o, i) && (c = !0);
    let u;
    for (const f in a)
      (!t || (!ye(t, f) && ((u = Pn(f)) === f || !ye(t, u)))) &&
        (s
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (o[f] = Ti(s, a, f, void 0, e, !0))
          : delete o[f]);
    if (i !== a)
      for (const f in i) (!t || (!ye(t, f) && !0)) && (delete i[f], (c = !0));
  }
  c && Ut(e, 'set', '$attrs');
}
function Bc(e, t, n, r) {
  const [o, i] = e.propsOptions;
  let l = !1,
    a;
  if (t)
    for (let s in t) {
      if (gr(s)) continue;
      const c = t[s];
      let u;
      o && ye(o, (u = It(s)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : Do(e.emitsOptions, s) ||
          ((!(s in r) || c !== r[s]) && ((r[s] = c), (l = !0)));
    }
  if (i) {
    const s = Ce(n),
      c = a || Le;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = Ti(o, s, f, c[f], e, !ye(c, f));
    }
  }
  return l;
}
function Ti(e, t, n, r, o, i) {
  const l = e[n];
  if (l != null) {
    const a = ye(l, 'default');
    if (a && r === void 0) {
      const s = l.default;
      if (l.type !== Function && de(s)) {
        const { propsDefaults: c } = o;
        n in c ? (r = c[n]) : (Un(o), (r = c[n] = s.call(null, t)), wn());
      } else r = s;
    }
    l[0] &&
      (i && !a ? (r = !1) : l[1] && (r === '' || r === Pn(n)) && (r = !0));
  }
  return r;
}
function zc(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const i = e.props,
    l = {},
    a = [];
  let s = !1;
  if (!de(e)) {
    const u = (f) => {
      s = !0;
      const [d, h] = zc(f, t, !0);
      Ve(l, d), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !s) return Ie(e) && r.set(e, Fn), Fn;
  if (se(i))
    for (let u = 0; u < i.length; u++) {
      const f = It(i[u]);
      ha(f) && (l[f] = Le);
    }
  else if (i)
    for (const u in i) {
      const f = It(u);
      if (ha(f)) {
        const d = i[u],
          h = (l[f] = se(d) || de(d) ? { type: d } : Object.assign({}, d));
        if (h) {
          const m = ga(Boolean, h.type),
            x = ga(String, h.type);
          (h[0] = m > -1),
            (h[1] = x < 0 || m < x),
            (m > -1 || ye(h, 'default')) && a.push(f);
        }
      }
    }
  const c = [l, a];
  return Ie(e) && r.set(e, c), c;
}
function ha(e) {
  return e[0] !== '$';
}
function pa(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? 'null' : '';
}
function ma(e, t) {
  return pa(e) === pa(t);
}
function ga(e, t) {
  return se(t) ? t.findIndex((n) => ma(n, e)) : de(t) && ma(t, e) ? 0 : -1;
}
const Vc = (e) => e[0] === '_' || e === '$stable',
  _l = (e) => (se(e) ? e.map(xt) : [xt(e)]),
  Ph = (e, t, n) => {
    if (t._n) return t;
    const r = Ue((...o) => _l(t(...o)), n);
    return (r._c = !1), r;
  },
  Uc = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Vc(o)) continue;
      const i = e[o];
      if (de(i)) t[o] = Ph(o, i, r);
      else if (i != null) {
        const l = _l(i);
        t[o] = () => l;
      }
    }
  },
  Wc = (e, t) => {
    const n = _l(t);
    e.slots.default = () => n;
  },
  Sh = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = Ce(t)), mo(t, '_', n)) : Uc(t, (e.slots = {}));
    } else (e.slots = {}), t && Wc(e, t);
    mo(e.slots, Bo, 1);
  },
  Th = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let i = !0,
      l = Le;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (i = !1)
          : (Ve(o, t), !n && a === 1 && delete o._)
        : ((i = !t.$stable), Uc(t, o)),
        (l = t);
    } else t && (Wc(e, t), (l = { default: 1 }));
    if (i) for (const a in o) !Vc(a) && !(a in l) && delete o[a];
  };
function qc() {
  return {
    app: null,
    config: {
      isNativeTag: ld,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
let Lh = 0;
function Ah(e, t) {
  return function (r, o = null) {
    de(r) || (r = Object.assign({}, r)), o != null && !Ie(o) && (o = null);
    const i = qc(),
      l = new Set();
    let a = !1;
    const s = (i.app = {
      _uid: Lh++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: tp,
      get config() {
        return i.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          l.has(c) ||
            (c && de(c.install)
              ? (l.add(c), c.install(s, ...u))
              : de(c) && (l.add(c), c(s, ...u))),
          s
        );
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), s;
      },
      component(c, u) {
        return u ? ((i.components[c] = u), s) : i.components[c];
      },
      directive(c, u) {
        return u ? ((i.directives[c] = u), s) : i.directives[c];
      },
      mount(c, u, f) {
        if (!a) {
          const d = _(r, o);
          return (
            (d.appContext = i),
            u && t ? t(d, c) : e(d, c, f),
            (a = !0),
            (s._container = c),
            (c.__vue_app__ = s),
            Vo(d.component) || d.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, s._container), delete s._container.__vue_app__);
      },
      provide(c, u) {
        return (i.provides[c] = u), s;
      }
    });
    return s;
  };
}
function xo(e, t, n, r, o = !1) {
  if (se(e)) {
    e.forEach((d, h) => xo(d, t && (se(t) ? t[h] : t), n, r, o));
    return;
  }
  if (Bn(r) && !o) return;
  const i = r.shapeFlag & 4 ? Vo(r.component) || r.component.proxy : r.el,
    l = o ? null : i,
    { i: a, r: s } = e,
    c = t && t.r,
    u = a.refs === Le ? (a.refs = {}) : a.refs,
    f = a.setupState;
  if (
    (c != null &&
      c !== s &&
      (ke(c)
        ? ((u[c] = null), ye(f, c) && (f[c] = null))
        : Be(c) && (c.value = null)),
    de(s))
  )
    en(s, a, 12, [l, u]);
  else {
    const d = ke(s),
      h = Be(s);
    if (d || h) {
      const m = () => {
        if (e.f) {
          const x = d ? (ye(f, s) ? f[s] : u[s]) : s.value;
          o
            ? se(x) && ol(x, i)
            : se(x)
            ? x.includes(i) || x.push(i)
            : d
            ? ((u[s] = [i]), ye(f, s) && (f[s] = u[s]))
            : ((s.value = [i]), e.k && (u[e.k] = s.value));
        } else
          d
            ? ((u[s] = l), ye(f, s) && (f[s] = l))
            : h && ((s.value = l), e.k && (u[e.k] = l));
      };
      l ? ((m.id = -1), rt(m, n)) : m();
    }
  }
}
let Gt = !1;
const Zr = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  Xr = (e) => e.nodeType === 8;
function Ih(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: o,
        nextSibling: i,
        parentNode: l,
        remove: a,
        insert: s,
        createComment: c
      }
    } = e,
    u = (g, y) => {
      if (!y.hasChildNodes()) {
        n(null, g, y), vo(), (y._vnode = g);
        return;
      }
      (Gt = !1),
        f(y.firstChild, g, null, null, null),
        vo(),
        (y._vnode = g),
        Gt && console.error('Hydration completed but contains mismatches.');
    },
    f = (g, y, k, A, R, V = !1) => {
      const E = Xr(g) && g.data === '[',
        b = () => x(g, y, k, A, R, E),
        { type: B, ref: q, shapeFlag: Y, patchFlag: S } = y;
      let H = g.nodeType;
      (y.el = g), S === -2 && ((V = !1), (y.dynamicChildren = null));
      let N = null;
      switch (B) {
        case kn:
          H !== 3
            ? y.children === ''
              ? (s((y.el = o('')), l(g), g), (N = g))
              : (N = b())
            : (g.data !== y.children && ((Gt = !0), (g.data = y.children)),
              (N = i(g)));
          break;
        case at:
          H !== 8 || E ? (N = b()) : (N = i(g));
          break;
        case yr:
          if ((E && ((g = i(g)), (H = g.nodeType)), H === 1 || H === 3)) {
            N = g;
            const I = !y.children.length;
            for (let C = 0; C < y.staticCount; C++)
              I && (y.children += N.nodeType === 1 ? N.outerHTML : N.data),
                C === y.staticCount - 1 && (y.anchor = N),
                (N = i(N));
            return E ? i(N) : N;
          } else b();
          break;
        case we:
          E ? (N = m(g, y, k, A, R, V)) : (N = b());
          break;
        default:
          if (Y & 1)
            H !== 1 || y.type.toLowerCase() !== g.tagName.toLowerCase()
              ? (N = b())
              : (N = d(g, y, k, A, R, V));
          else if (Y & 6) {
            y.slotScopeIds = R;
            const I = l(g);
            if (
              (t(y, I, null, k, A, Zr(I), V),
              (N = E ? w(g) : i(g)),
              N && Xr(N) && N.data === 'teleport end' && (N = i(N)),
              Bn(y))
            ) {
              let C;
              E
                ? ((C = _(we)),
                  (C.anchor = N ? N.previousSibling : I.lastChild))
                : (C = g.nodeType === 3 ? it('') : _('div')),
                (C.el = g),
                (y.component.subTree = C);
            }
          } else
            Y & 64
              ? H !== 8
                ? (N = b())
                : (N = y.type.hydrate(g, y, k, A, R, V, e, h))
              : Y & 128 &&
                (N = y.type.hydrate(g, y, k, A, Zr(l(g)), R, V, e, f));
      }
      return q != null && xo(q, null, A, y), N;
    },
    d = (g, y, k, A, R, V) => {
      V = V || !!y.dynamicChildren;
      const { type: E, props: b, patchFlag: B, shapeFlag: q, dirs: Y } = y,
        S = (E === 'input' && Y) || E === 'option';
      if (S || B !== -1) {
        if ((Y && St(y, null, k, 'created'), b))
          if (S || !V || B & 48)
            for (const N in b)
              ((S && N.endsWith('value')) || (Nr(N) && !gr(N))) &&
                r(g, N, null, b[N], !1, void 0, k);
          else b.onClick && r(g, 'onClick', null, b.onClick, !1, void 0, k);
        let H;
        if (
          ((H = b && b.onVnodeBeforeMount) && vt(H, k, y),
          Y && St(y, null, k, 'beforeMount'),
          ((H = b && b.onVnodeMounted) || Y) &&
            Ac(() => {
              H && vt(H, k, y), Y && St(y, null, k, 'mounted');
            }, A),
          q & 16 && !(b && (b.innerHTML || b.textContent)))
        ) {
          let N = h(g.firstChild, y, g, k, A, R, V);
          for (; N; ) {
            Gt = !0;
            const I = N;
            (N = N.nextSibling), a(I);
          }
        } else
          q & 8 &&
            g.textContent !== y.children &&
            ((Gt = !0), (g.textContent = y.children));
      }
      return g.nextSibling;
    },
    h = (g, y, k, A, R, V, E) => {
      E = E || !!y.dynamicChildren;
      const b = y.children,
        B = b.length;
      for (let q = 0; q < B; q++) {
        const Y = E ? b[q] : (b[q] = xt(b[q]));
        if (g) g = f(g, Y, A, R, V, E);
        else {
          if (Y.type === kn && !Y.children) continue;
          (Gt = !0), n(null, Y, k, null, A, R, Zr(k), V);
        }
      }
      return g;
    },
    m = (g, y, k, A, R, V) => {
      const { slotScopeIds: E } = y;
      E && (R = R ? R.concat(E) : E);
      const b = l(g),
        B = h(i(g), y, b, k, A, R, V);
      return B && Xr(B) && B.data === ']'
        ? i((y.anchor = B))
        : ((Gt = !0), s((y.anchor = c(']')), b, B), B);
    },
    x = (g, y, k, A, R, V) => {
      if (((Gt = !0), (y.el = null), V)) {
        const B = w(g);
        for (;;) {
          const q = i(g);
          if (q && q !== B) a(q);
          else break;
        }
      }
      const E = i(g),
        b = l(g);
      return a(g), n(null, y, b, E, k, A, Zr(b), R), E;
    },
    w = (g) => {
      let y = 0;
      for (; g; )
        if (
          ((g = i(g)), g && Xr(g) && (g.data === '[' && y++, g.data === ']'))
        ) {
          if (y === 0) return i(g);
          y--;
        }
      return g;
    };
  return [u, f];
}
const rt = Ac;
function $h(e) {
  return Gc(e);
}
function Rh(e) {
  return Gc(e, Ih);
}
function Gc(e, t) {
  const n = dd();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: i,
      createElement: l,
      createText: a,
      createComment: s,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: d,
      setScopeId: h = kt,
      insertStaticContent: m
    } = e,
    x = (
      p,
      v,
      O,
      L = null,
      j = null,
      U = null,
      Q = !1,
      W = null,
      K = !!v.dynamicChildren
    ) => {
      if (p === v) return;
      p && !mn(p, v) && ((L = J(p)), xe(p, j, U, !0), (p = null)),
        v.patchFlag === -2 && ((K = !1), (v.dynamicChildren = null));
      const { type: D, ref: ie, shapeFlag: ee } = v;
      switch (D) {
        case kn:
          w(p, v, O, L);
          break;
        case at:
          g(p, v, O, L);
          break;
        case yr:
          p == null && y(v, O, L, Q);
          break;
        case we:
          S(p, v, O, L, j, U, Q, W, K);
          break;
        default:
          ee & 1
            ? R(p, v, O, L, j, U, Q, W, K)
            : ee & 6
            ? H(p, v, O, L, j, U, Q, W, K)
            : (ee & 64 || ee & 128) && D.process(p, v, O, L, j, U, Q, W, K, ge);
      }
      ie != null && j && xo(ie, p && p.ref, U, v || p, !v);
    },
    w = (p, v, O, L) => {
      if (p == null) r((v.el = a(v.children)), O, L);
      else {
        const j = (v.el = p.el);
        v.children !== p.children && c(j, v.children);
      }
    },
    g = (p, v, O, L) => {
      p == null ? r((v.el = s(v.children || '')), O, L) : (v.el = p.el);
    },
    y = (p, v, O, L) => {
      [p.el, p.anchor] = m(p.children, v, O, L, p.el, p.anchor);
    },
    k = ({ el: p, anchor: v }, O, L) => {
      let j;
      for (; p && p !== v; ) (j = d(p)), r(p, O, L), (p = j);
      r(v, O, L);
    },
    A = ({ el: p, anchor: v }) => {
      let O;
      for (; p && p !== v; ) (O = d(p)), o(p), (p = O);
      o(v);
    },
    R = (p, v, O, L, j, U, Q, W, K) => {
      (Q = Q || v.type === 'svg'),
        p == null ? V(v, O, L, j, U, Q, W, K) : B(p, v, j, U, Q, W, K);
    },
    V = (p, v, O, L, j, U, Q, W) => {
      let K, D;
      const {
        type: ie,
        props: ee,
        shapeFlag: le,
        transition: ue,
        dirs: me
      } = p;
      if (
        ((K = p.el = l(p.type, U, ee && ee.is, ee)),
        le & 8
          ? u(K, p.children)
          : le & 16 &&
            b(p.children, K, null, L, j, U && ie !== 'foreignObject', Q, W),
        me && St(p, null, L, 'created'),
        ee)
      ) {
        for (const Oe in ee)
          Oe !== 'value' &&
            !gr(Oe) &&
            i(K, Oe, null, ee[Oe], U, p.children, L, j, G);
        'value' in ee && i(K, 'value', null, ee.value),
          (D = ee.onVnodeBeforeMount) && vt(D, L, p);
      }
      E(K, p, p.scopeId, Q, L), me && St(p, null, L, 'beforeMount');
      const Pe = (!j || (j && !j.pendingBranch)) && ue && !ue.persisted;
      Pe && ue.beforeEnter(K),
        r(K, v, O),
        ((D = ee && ee.onVnodeMounted) || Pe || me) &&
          rt(() => {
            D && vt(D, L, p),
              Pe && ue.enter(K),
              me && St(p, null, L, 'mounted');
          }, j);
    },
    E = (p, v, O, L, j) => {
      if ((O && h(p, O), L)) for (let U = 0; U < L.length; U++) h(p, L[U]);
      if (j) {
        let U = j.subTree;
        if (v === U) {
          const Q = j.vnode;
          E(p, Q, Q.scopeId, Q.slotScopeIds, j.parent);
        }
      }
    },
    b = (p, v, O, L, j, U, Q, W, K = 0) => {
      for (let D = K; D < p.length; D++) {
        const ie = (p[D] = W ? Jt(p[D]) : xt(p[D]));
        x(null, ie, v, O, L, j, U, Q, W);
      }
    },
    B = (p, v, O, L, j, U, Q) => {
      const W = (v.el = p.el);
      let { patchFlag: K, dynamicChildren: D, dirs: ie } = v;
      K |= p.patchFlag & 16;
      const ee = p.props || Le,
        le = v.props || Le;
      let ue;
      O && cn(O, !1),
        (ue = le.onVnodeBeforeUpdate) && vt(ue, O, v, p),
        ie && St(v, p, O, 'beforeUpdate'),
        O && cn(O, !0);
      const me = j && v.type !== 'foreignObject';
      if (
        (D
          ? q(p.dynamicChildren, D, W, O, L, me, U)
          : Q || M(p, v, W, null, O, L, me, U, !1),
        K > 0)
      ) {
        if (K & 16) Y(W, v, ee, le, O, L, j);
        else if (
          (K & 2 && ee.class !== le.class && i(W, 'class', null, le.class, j),
          K & 4 && i(W, 'style', ee.style, le.style, j),
          K & 8)
        ) {
          const Pe = v.dynamicProps;
          for (let Oe = 0; Oe < Pe.length; Oe++) {
            const Me = Pe[Oe],
              yt = ee[Me],
              In = le[Me];
            (In !== yt || Me === 'value') &&
              i(W, Me, yt, In, j, p.children, O, L, G);
          }
        }
        K & 1 && p.children !== v.children && u(W, v.children);
      } else !Q && D == null && Y(W, v, ee, le, O, L, j);
      ((ue = le.onVnodeUpdated) || ie) &&
        rt(() => {
          ue && vt(ue, O, v, p), ie && St(v, p, O, 'updated');
        }, L);
    },
    q = (p, v, O, L, j, U, Q) => {
      for (let W = 0; W < v.length; W++) {
        const K = p[W],
          D = v[W],
          ie =
            K.el && (K.type === we || !mn(K, D) || K.shapeFlag & 70)
              ? f(K.el)
              : O;
        x(K, D, ie, null, L, j, U, Q, !0);
      }
    },
    Y = (p, v, O, L, j, U, Q) => {
      if (O !== L) {
        if (O !== Le)
          for (const W in O)
            !gr(W) && !(W in L) && i(p, W, O[W], null, Q, v.children, j, U, G);
        for (const W in L) {
          if (gr(W)) continue;
          const K = L[W],
            D = O[W];
          K !== D && W !== 'value' && i(p, W, D, K, Q, v.children, j, U, G);
        }
        'value' in L && i(p, 'value', O.value, L.value);
      }
    },
    S = (p, v, O, L, j, U, Q, W, K) => {
      const D = (v.el = p ? p.el : a('')),
        ie = (v.anchor = p ? p.anchor : a(''));
      let { patchFlag: ee, dynamicChildren: le, slotScopeIds: ue } = v;
      ue && (W = W ? W.concat(ue) : ue),
        p == null
          ? (r(D, O, L), r(ie, O, L), b(v.children, O, ie, j, U, Q, W, K))
          : ee > 0 && ee & 64 && le && p.dynamicChildren
          ? (q(p.dynamicChildren, le, O, j, U, Q, W),
            (v.key != null || (j && v === j.subTree)) && xl(p, v, !0))
          : M(p, v, O, ie, j, U, Q, W, K);
    },
    H = (p, v, O, L, j, U, Q, W, K) => {
      (v.slotScopeIds = W),
        p == null
          ? v.shapeFlag & 512
            ? j.ctx.activate(v, O, L, Q, K)
            : N(v, O, L, j, U, Q, K)
          : I(p, v, K);
    },
    N = (p, v, O, L, j, U, Q) => {
      const W = (p.component = qh(p, L, j));
      if ((Br(p) && (W.ctx.renderer = ge), Gh(W), W.asyncDep)) {
        if ((j && j.registerDep(W, C), !p.el)) {
          const K = (W.subTree = _(at));
          g(null, K, v, O);
        }
        return;
      }
      C(W, p, v, O, j, U, Q);
    },
    I = (p, v, O) => {
      const L = (v.component = p.component);
      if (rh(p, v, O))
        if (L.asyncDep && !L.asyncResolved) {
          P(L, v, O);
          return;
        } else (L.next = v), Qd(L.update), L.update();
      else (v.el = p.el), (L.vnode = v);
    },
    C = (p, v, O, L, j, U, Q) => {
      const W = () => {
          if (p.isMounted) {
            let { next: ie, bu: ee, u: le, parent: ue, vnode: me } = p,
              Pe = ie,
              Oe;
            cn(p, !1),
              ie ? ((ie.el = me.el), P(p, ie, Q)) : (ie = me),
              ee && Xo(ee),
              (Oe = ie.props && ie.props.onVnodeBeforeUpdate) &&
                vt(Oe, ue, ie, me),
              cn(p, !0);
            const Me = ei(p),
              yt = p.subTree;
            (p.subTree = Me),
              x(yt, Me, f(yt.el), J(yt), p, j, U),
              (ie.el = Me.el),
              Pe === null && oh(p, Me.el),
              le && rt(le, j),
              (Oe = ie.props && ie.props.onVnodeUpdated) &&
                rt(() => vt(Oe, ue, ie, me), j);
          } else {
            let ie;
            const { el: ee, props: le } = v,
              { bm: ue, m: me, parent: Pe } = p,
              Oe = Bn(v);
            if (
              (cn(p, !1),
              ue && Xo(ue),
              !Oe && (ie = le && le.onVnodeBeforeMount) && vt(ie, Pe, v),
              cn(p, !0),
              ee && he)
            ) {
              const Me = () => {
                (p.subTree = ei(p)), he(ee, p.subTree, p, j, null);
              };
              Oe
                ? v.type.__asyncLoader().then(() => !p.isUnmounted && Me())
                : Me();
            } else {
              const Me = (p.subTree = ei(p));
              x(null, Me, O, L, p, j, U), (v.el = Me.el);
            }
            if ((me && rt(me, j), !Oe && (ie = le && le.onVnodeMounted))) {
              const Me = v;
              rt(() => vt(ie, Pe, Me), j);
            }
            (v.shapeFlag & 256 ||
              (Pe && Bn(Pe.vnode) && Pe.vnode.shapeFlag & 256)) &&
              p.a &&
              rt(p.a, j),
              (p.isMounted = !0),
              (v = O = L = null);
          }
        },
        K = (p.effect = new cl(W, () => Fo(D), p.scope)),
        D = (p.update = () => K.run());
      (D.id = p.uid), cn(p, !0), D();
    },
    P = (p, v, O) => {
      v.component = p;
      const L = p.vnode.props;
      (p.vnode = v),
        (p.next = null),
        Oh(p, v.props, L, O),
        Th(p, v.children, O),
        er(),
        aa(),
        tr();
    },
    M = (p, v, O, L, j, U, Q, W, K = !1) => {
      const D = p && p.children,
        ie = p ? p.shapeFlag : 0,
        ee = v.children,
        { patchFlag: le, shapeFlag: ue } = v;
      if (le > 0) {
        if (le & 128) {
          ne(D, ee, O, L, j, U, Q, W, K);
          return;
        } else if (le & 256) {
          X(D, ee, O, L, j, U, Q, W, K);
          return;
        }
      }
      ue & 8
        ? (ie & 16 && G(D, j, U), ee !== D && u(O, ee))
        : ie & 16
        ? ue & 16
          ? ne(D, ee, O, L, j, U, Q, W, K)
          : G(D, j, U, !0)
        : (ie & 8 && u(O, ''), ue & 16 && b(ee, O, L, j, U, Q, W, K));
    },
    X = (p, v, O, L, j, U, Q, W, K) => {
      (p = p || Fn), (v = v || Fn);
      const D = p.length,
        ie = v.length,
        ee = Math.min(D, ie);
      let le;
      for (le = 0; le < ee; le++) {
        const ue = (v[le] = K ? Jt(v[le]) : xt(v[le]));
        x(p[le], ue, O, null, j, U, Q, W, K);
      }
      D > ie ? G(p, j, U, !0, !1, ee) : b(v, O, L, j, U, Q, W, K, ee);
    },
    ne = (p, v, O, L, j, U, Q, W, K) => {
      let D = 0;
      const ie = v.length;
      let ee = p.length - 1,
        le = ie - 1;
      for (; D <= ee && D <= le; ) {
        const ue = p[D],
          me = (v[D] = K ? Jt(v[D]) : xt(v[D]));
        if (mn(ue, me)) x(ue, me, O, null, j, U, Q, W, K);
        else break;
        D++;
      }
      for (; D <= ee && D <= le; ) {
        const ue = p[ee],
          me = (v[le] = K ? Jt(v[le]) : xt(v[le]));
        if (mn(ue, me)) x(ue, me, O, null, j, U, Q, W, K);
        else break;
        ee--, le--;
      }
      if (D > ee) {
        if (D <= le) {
          const ue = le + 1,
            me = ue < ie ? v[ue].el : L;
          for (; D <= le; )
            x(null, (v[D] = K ? Jt(v[D]) : xt(v[D])), O, me, j, U, Q, W, K),
              D++;
        }
      } else if (D > le) for (; D <= ee; ) xe(p[D], j, U, !0), D++;
      else {
        const ue = D,
          me = D,
          Pe = new Map();
        for (D = me; D <= le; D++) {
          const st = (v[D] = K ? Jt(v[D]) : xt(v[D]));
          st.key != null && Pe.set(st.key, D);
        }
        let Oe,
          Me = 0;
        const yt = le - me + 1;
        let In = !1,
          Yl = 0;
        const ar = new Array(yt);
        for (D = 0; D < yt; D++) ar[D] = 0;
        for (D = ue; D <= ee; D++) {
          const st = p[D];
          if (Me >= yt) {
            xe(st, j, U, !0);
            continue;
          }
          let Ot;
          if (st.key != null) Ot = Pe.get(st.key);
          else
            for (Oe = me; Oe <= le; Oe++)
              if (ar[Oe - me] === 0 && mn(st, v[Oe])) {
                Ot = Oe;
                break;
              }
          Ot === void 0
            ? xe(st, j, U, !0)
            : ((ar[Ot - me] = D + 1),
              Ot >= Yl ? (Yl = Ot) : (In = !0),
              x(st, v[Ot], O, null, j, U, Q, W, K),
              Me++);
        }
        const Jl = In ? jh(ar) : Fn;
        for (Oe = Jl.length - 1, D = yt - 1; D >= 0; D--) {
          const st = me + D,
            Ot = v[st],
            Ql = st + 1 < ie ? v[st + 1].el : L;
          ar[D] === 0
            ? x(null, Ot, O, Ql, j, U, Q, W, K)
            : In && (Oe < 0 || D !== Jl[Oe] ? pe(Ot, O, Ql, 2) : Oe--);
        }
      }
    },
    pe = (p, v, O, L, j = null) => {
      const { el: U, type: Q, transition: W, children: K, shapeFlag: D } = p;
      if (D & 6) {
        pe(p.component.subTree, v, O, L);
        return;
      }
      if (D & 128) {
        p.suspense.move(v, O, L);
        return;
      }
      if (D & 64) {
        Q.move(p, v, O, ge);
        return;
      }
      if (Q === we) {
        r(U, v, O);
        for (let ee = 0; ee < K.length; ee++) pe(K[ee], v, O, L);
        r(p.anchor, v, O);
        return;
      }
      if (Q === yr) {
        k(p, v, O);
        return;
      }
      if (L !== 2 && D & 1 && W)
        if (L === 0) W.beforeEnter(U), r(U, v, O), rt(() => W.enter(U), j);
        else {
          const { leave: ee, delayLeave: le, afterLeave: ue } = W,
            me = () => r(U, v, O),
            Pe = () => {
              ee(U, () => {
                me(), ue && ue();
              });
            };
          le ? le(U, me, Pe) : Pe();
        }
      else r(U, v, O);
    },
    xe = (p, v, O, L = !1, j = !1) => {
      const {
        type: U,
        props: Q,
        ref: W,
        children: K,
        dynamicChildren: D,
        shapeFlag: ie,
        patchFlag: ee,
        dirs: le
      } = p;
      if ((W != null && xo(W, null, O, p, !0), ie & 256)) {
        v.ctx.deactivate(p);
        return;
      }
      const ue = ie & 1 && le,
        me = !Bn(p);
      let Pe;
      if ((me && (Pe = Q && Q.onVnodeBeforeUnmount) && vt(Pe, v, p), ie & 6))
        T(p.component, O, L);
      else {
        if (ie & 128) {
          p.suspense.unmount(O, L);
          return;
        }
        ue && St(p, null, v, 'beforeUnmount'),
          ie & 64
            ? p.type.remove(p, v, O, j, ge, L)
            : D && (U !== we || (ee > 0 && ee & 64))
            ? G(D, v, O, !1, !0)
            : ((U === we && ee & 384) || (!j && ie & 16)) && G(K, v, O),
          L && $e(p);
      }
      ((me && (Pe = Q && Q.onVnodeUnmounted)) || ue) &&
        rt(() => {
          Pe && vt(Pe, v, p), ue && St(p, null, v, 'unmounted');
        }, O);
    },
    $e = (p) => {
      const { type: v, el: O, anchor: L, transition: j } = p;
      if (v === we) {
        nt(O, L);
        return;
      }
      if (v === yr) {
        A(p);
        return;
      }
      const U = () => {
        o(O), j && !j.persisted && j.afterLeave && j.afterLeave();
      };
      if (p.shapeFlag & 1 && j && !j.persisted) {
        const { leave: Q, delayLeave: W } = j,
          K = () => Q(O, U);
        W ? W(p.el, U, K) : K();
      } else U();
    },
    nt = (p, v) => {
      let O;
      for (; p !== v; ) (O = d(p)), o(p), (p = O);
      o(v);
    },
    T = (p, v, O) => {
      const { bum: L, scope: j, update: U, subTree: Q, um: W } = p;
      L && Xo(L),
        j.stop(),
        U && ((U.active = !1), xe(Q, p, v, O)),
        W && rt(W, v),
        rt(() => {
          p.isUnmounted = !0;
        }, v),
        v &&
          v.pendingBranch &&
          !v.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === v.pendingId &&
          (v.deps--, v.deps === 0 && v.resolve());
    },
    G = (p, v, O, L = !1, j = !1, U = 0) => {
      for (let Q = U; Q < p.length; Q++) xe(p[Q], v, O, L, j);
    },
    J = (p) =>
      p.shapeFlag & 6
        ? J(p.component.subTree)
        : p.shapeFlag & 128
        ? p.suspense.next()
        : d(p.anchor || p.el),
    te = (p, v, O) => {
      p == null
        ? v._vnode && xe(v._vnode, null, null, !0)
        : x(v._vnode || null, p, v, null, null, null, O),
        aa(),
        vo(),
        (v._vnode = p);
    },
    ge = {
      p: x,
      um: xe,
      m: pe,
      r: $e,
      mt: N,
      mc: b,
      pc: M,
      pbc: q,
      n: J,
      o: e
    };
  let Te, he;
  return (
    t && ([Te, he] = t(ge)), { render: te, hydrate: Te, createApp: Ah(te, Te) }
  );
}
function cn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function xl(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (se(r) && se(o))
    for (let i = 0; i < r.length; i++) {
      const l = r[i];
      let a = o[i];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = o[i] = Jt(o[i])), (a.el = l.el)),
        n || xl(l, a)),
        a.type === kn && (a.el = l.el);
    }
}
function jh(e) {
  const t = e.slice(),
    n = [0];
  let r, o, i, l, a;
  const s = e.length;
  for (r = 0; r < s; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((o = n[n.length - 1]), e[o] < c)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        (a = (i + l) >> 1), e[n[a]] < c ? (i = a + 1) : (l = a);
      c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; ) (n[i] = l), (l = t[l]);
  return n;
}
const Mh = (e) => e.__isTeleport,
  br = (e) => e && (e.disabled || e.disabled === ''),
  va = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  Li = (e, t) => {
    const n = e && e.to;
    return ke(n) ? (t ? t(n) : null) : n;
  },
  Fh = {
    __isTeleport: !0,
    process(e, t, n, r, o, i, l, a, s, c) {
      const {
          mc: u,
          pc: f,
          pbc: d,
          o: { insert: h, querySelector: m, createText: x, createComment: w }
        } = c,
        g = br(t.props);
      let { shapeFlag: y, children: k, dynamicChildren: A } = t;
      if (e == null) {
        const R = (t.el = x('')),
          V = (t.anchor = x(''));
        h(R, n, r), h(V, n, r);
        const E = (t.target = Li(t.props, m)),
          b = (t.targetAnchor = x(''));
        E && (h(b, E), (l = l || va(E)));
        const B = (q, Y) => {
          y & 16 && u(k, q, Y, o, i, l, a, s);
        };
        g ? B(n, V) : E && B(E, b);
      } else {
        t.el = e.el;
        const R = (t.anchor = e.anchor),
          V = (t.target = e.target),
          E = (t.targetAnchor = e.targetAnchor),
          b = br(e.props),
          B = b ? n : V,
          q = b ? R : E;
        if (
          ((l = l || va(V)),
          A
            ? (d(e.dynamicChildren, A, B, o, i, l, a), xl(e, t, !0))
            : s || f(e, t, B, q, o, i, l, a, !1),
          g)
        )
          b || eo(t, n, R, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Y = (t.target = Li(t.props, m));
          Y && eo(t, Y, null, c, 0);
        } else b && eo(t, V, E, c, 1);
      }
      Kc(t);
    },
    remove(e, t, n, r, { um: o, o: { remove: i } }, l) {
      const {
        shapeFlag: a,
        children: s,
        anchor: c,
        targetAnchor: u,
        target: f,
        props: d
      } = e;
      if ((f && i(u), (l || !br(d)) && (i(c), a & 16)))
        for (let h = 0; h < s.length; h++) {
          const m = s[h];
          o(m, t, n, !0, !!m.dynamicChildren);
        }
    },
    move: eo,
    hydrate: Dh
  };
function eo(e, t, n, { o: { insert: r }, m: o }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: l, anchor: a, shapeFlag: s, children: c, props: u } = e,
    f = i === 2;
  if ((f && r(l, t, n), (!f || br(u)) && s & 16))
    for (let d = 0; d < c.length; d++) o(c[d], t, n, 2);
  f && r(a, t, n);
}
function Dh(
  e,
  t,
  n,
  r,
  o,
  i,
  { o: { nextSibling: l, parentNode: a, querySelector: s } },
  c
) {
  const u = (t.target = Li(t.props, s));
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (br(t.props))
        (t.anchor = c(l(e), t, a(e), n, r, o, i)), (t.targetAnchor = f);
      else {
        t.anchor = l(e);
        let d = f;
        for (; d; )
          if (
            ((d = l(d)), d && d.nodeType === 8 && d.data === 'teleport anchor')
          ) {
            (t.targetAnchor = d),
              (u._lpa = t.targetAnchor && l(t.targetAnchor));
            break;
          }
        c(f, t, u, n, r, o, i);
      }
    Kc(t);
  }
  return t.anchor && l(t.anchor);
}
const Nh = Fh;
function Kc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const we = Symbol(void 0),
  kn = Symbol(void 0),
  at = Symbol(void 0),
  yr = Symbol(void 0),
  _r = [];
let wt = null;
function Z(e = !1) {
  _r.push((wt = e ? null : []));
}
function Hh() {
  _r.pop(), (wt = _r[_r.length - 1] || null);
}
let $r = 1;
function ba(e) {
  $r += e;
}
function Yc(e) {
  return (
    (e.dynamicChildren = $r > 0 ? wt || Fn : null),
    Hh(),
    $r > 0 && wt && wt.push(e),
    e
  );
}
function ae(e, t, n, r, o, i) {
  return Yc(_e(e, t, n, r, o, i, !0));
}
function Fe(e, t, n, r, o) {
  return Yc(_(e, t, n, r, o, !0));
}
function Co(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function mn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Bo = '__vInternal',
  Jc = ({ key: e }) => (e != null ? e : null),
  so = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? ke(e) || Be(e) || de(e)
        ? { i: We, r: e, k: t, f: !!n }
        : e
      : null;
function _e(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  i = e === we ? 0 : 1,
  l = !1,
  a = !1
) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Jc(t),
    ref: t && so(t),
    scopeId: Lc,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: We
  };
  return (
    a
      ? (Cl(s, n), i & 128 && e.normalize(s))
      : n && (s.shapeFlag |= ke(n) ? 8 : 16),
    $r > 0 &&
      !l &&
      wt &&
      (s.patchFlag > 0 || i & 6) &&
      s.patchFlag !== 32 &&
      wt.push(s),
    s
  );
}
const _ = Bh;
function Bh(e, t = null, n = null, r = 0, o = null, i = !1) {
  if (((!e || e === vh) && (e = at), Co(e))) {
    const a = rn(e, t, !0);
    return (
      n && Cl(a, n),
      $r > 0 &&
        !i &&
        wt &&
        (a.shapeFlag & 6 ? (wt[wt.indexOf(e)] = a) : wt.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((Zh(e) && (e = e.__vccOpts), t)) {
    t = zh(t);
    let { class: a, style: s } = t;
    a && !ke(a) && (t.class = lt(a)),
      Ie(s) && (bc(s) && !se(s) && (s = Ve({}, s)), (t.style = Dr(s)));
  }
  const l = ke(e) ? 1 : ih(e) ? 128 : Mh(e) ? 64 : Ie(e) ? 4 : de(e) ? 2 : 0;
  return _e(e, t, n, r, o, l, i, !0);
}
function zh(e) {
  return e ? (bc(e) || Bo in e ? Ve({}, e) : e) : null;
}
function rn(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: l } = e,
    a = t ? Ai(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Jc(a),
    ref:
      t && t.ref
        ? n && o
          ? se(o)
            ? o.concat(so(t))
            : [o, so(t)]
          : so(t)
        : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== we ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && rn(e.ssContent),
    ssFallback: e.ssFallback && rn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function it(e = ' ', t = 0) {
  return _(kn, null, e, t);
}
function Vh(e, t) {
  const n = _(yr, null, e);
  return (n.staticCount = t), n;
}
function je(e = '', t = !1) {
  return t ? (Z(), Fe(at, null, e)) : _(at, null, e);
}
function xt(e) {
  return e == null || typeof e == 'boolean'
    ? _(at)
    : se(e)
    ? _(we, null, e.slice())
    : typeof e == 'object'
    ? Jt(e)
    : _(kn, null, String(e));
}
function Jt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : rn(e);
}
function Cl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (se(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Cl(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Bo in t)
        ? (t._ctx = We)
        : o === 3 &&
          We &&
          (We.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    de(t)
      ? ((t = { default: t, _ctx: We }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [it(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Ai(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === 'class')
        t.class !== r.class && (t.class = lt([t.class, r.class]));
      else if (o === 'style') t.style = Dr([t.style, r.style]);
      else if (Nr(o)) {
        const i = t[o],
          l = r[o];
        l &&
          i !== l &&
          !(se(i) && i.includes(l)) &&
          (t[o] = i ? [].concat(i, l) : l);
      } else o !== '' && (t[o] = r[o]);
  }
  return t;
}
function vt(e, t, n, r = null) {
  bt(e, t, 7, [n, r]);
}
const Uh = qc();
let Wh = 0;
function qh(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || Uh,
    i = {
      uid: Wh++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new hd(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: zc(r, o),
      emitsOptions: Tc(r, o),
      emit: null,
      emitted: null,
      propsDefaults: Le,
      inheritAttrs: r.inheritAttrs,
      ctx: Le,
      data: Le,
      props: Le,
      attrs: Le,
      slots: Le,
      refs: Le,
      setupState: Le,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = eh.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let Ne = null;
const zo = () => Ne || We,
  Un = (e) => {
    (Ne = e), e.scope.on();
  },
  wn = () => {
    Ne && Ne.scope.off(), (Ne = null);
  };
function Qc(e) {
  return e.vnode.shapeFlag & 4;
}
let Wn = !1;
function Gh(e, t = !1) {
  Wn = t;
  const { props: n, children: r } = e.vnode,
    o = Qc(e);
  Eh(e, n, o, t), Sh(e, r);
  const i = o ? Kh(e, t) : void 0;
  return (Wn = !1), i;
}
function Kh(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = yc(new Proxy(e.ctx, yh)));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? Jh(e) : null);
    Un(e), er();
    const i = en(r, e, 0, [e.props, o]);
    if ((tr(), wn(), ic(i))) {
      if ((i.then(wn, wn), t))
        return i
          .then((l) => {
            ya(e, l, t);
          })
          .catch((l) => {
            Hr(l, e, 0);
          });
      e.asyncDep = i;
    } else ya(e, i, t);
  } else Zc(e, t);
}
function ya(e, t, n) {
  de(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ie(t) && (e.setupState = kc(t)),
    Zc(e, n);
}
let _a;
function Zc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && _a && !r.render) {
      const o = r.template || yl(e).template;
      if (o) {
        const { isCustomElement: i, compilerOptions: l } = e.appContext.config,
          { delimiters: a, compilerOptions: s } = r,
          c = Ve(Ve({ isCustomElement: i, delimiters: a }, l), s);
        r.render = _a(o, c);
      }
    }
    e.render = r.render || kt;
  }
  Un(e), er(), _h(e), tr(), wn();
}
function Yh(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return pt(e, 'get', '$attrs'), t[n];
    }
  });
}
function Jh(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Yh(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Vo(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(kc(yc(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in vr) return vr[n](e);
        },
        has(t, n) {
          return n in t || n in vr;
        }
      }))
    );
}
function Qh(e, t = !0) {
  return de(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Zh(e) {
  return de(e) && '__vccOpts' in e;
}
const F = (e, t) => Kd(e, t, Wn);
function ve(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Ie(t) && !se(t)
      ? Co(t)
        ? _(e, null, [t])
        : _(e, t)
      : _(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Co(n) && (n = [n]),
      _(e, t, n));
}
const Xh = Symbol(''),
  ep = () => Ae(Xh),
  tp = '3.2.45',
  np = 'http://www.w3.org/2000/svg',
  gn = typeof document < 'u' ? document : null,
  xa = gn && gn.createElement('template'),
  rp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t
        ? gn.createElementNS(np, e)
        : gn.createElement(e, n ? { is: n } : void 0);
      return (
        e === 'select' &&
          r &&
          r.multiple != null &&
          o.setAttribute('multiple', r.multiple),
        o
      );
    },
    createText: (e) => gn.createTextNode(e),
    createComment: (e) => gn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => gn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, o, i) {
      const l = n ? n.previousSibling : t.lastChild;
      if (o && (o === i || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === i || !(o = o.nextSibling));

        );
      else {
        xa.innerHTML = r ? `<svg>${e}</svg>` : e;
        const a = xa.content;
        if (r) {
          const s = a.firstChild;
          for (; s.firstChild; ) a.appendChild(s.firstChild);
          a.removeChild(s);
        }
        t.insertBefore(a, n);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  };
function op(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t);
}
function ip(e, t, n) {
  const r = e.style,
    o = ke(n);
  if (n && !o) {
    for (const i in n) Ii(r, i, n[i]);
    if (t && !ke(t)) for (const i in t) n[i] == null && Ii(r, i, '');
  } else {
    const i = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (r.display = i);
  }
}
const Ca = /\s*!important$/;
function Ii(e, t, n) {
  if (se(n)) n.forEach((r) => Ii(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = lp(e, t);
    Ca.test(n)
      ? e.setProperty(Pn(r), n.replace(Ca, ''), 'important')
      : (e[r] = n);
  }
}
const wa = ['Webkit', 'Moz', 'ms'],
  oi = {};
function lp(e, t) {
  const n = oi[t];
  if (n) return n;
  let r = It(t);
  if (r !== 'filter' && r in e) return (oi[t] = r);
  r = Ro(r);
  for (let o = 0; o < wa.length; o++) {
    const i = wa[o] + r;
    if (i in e) return (oi[t] = i);
  }
  return t;
}
const ka = 'http://www.w3.org/1999/xlink';
function ap(e, t, n, r, o) {
  if (r && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(ka, t.slice(6, t.length))
      : e.setAttributeNS(ka, t, n);
  else {
    const i = id(t);
    n == null || (i && !nc(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : n);
  }
}
function sp(e, t, n, r, o, i, l) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && l(r, o, i), (e[t] = n == null ? '' : n);
    return;
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n;
    const s = n == null ? '' : n;
    (e.value !== s || e.tagName === 'OPTION') && (e.value = s),
      n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === '' || n == null) {
    const s = typeof e[t];
    s === 'boolean'
      ? (n = nc(n))
      : n == null && s === 'string'
      ? ((n = ''), (a = !0))
      : s === 'number' && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch {}
  a && e.removeAttribute(t);
}
function cp(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function up(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function fp(e, t, n, r, o = null) {
  const i = e._vei || (e._vei = {}),
    l = i[t];
  if (r && l) l.value = r;
  else {
    const [a, s] = dp(t);
    if (r) {
      const c = (i[t] = mp(r, o));
      cp(e, a, c, s);
    } else l && (up(e, a, l, s), (i[t] = void 0));
  }
}
const Ea = /(?:Once|Passive|Capture)$/;
function dp(e) {
  let t;
  if (Ea.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Ea)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : Pn(e.slice(2)), t];
}
let ii = 0;
const hp = Promise.resolve(),
  pp = () => ii || (hp.then(() => (ii = 0)), (ii = Date.now()));
function mp(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    bt(gp(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = pp()), n;
}
function gp(e, t) {
  if (se(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const Oa = /^on[a-z]/,
  vp = (e, t, n, r, o = !1, i, l, a, s) => {
    t === 'class'
      ? op(e, r, o)
      : t === 'style'
      ? ip(e, n, r)
      : Nr(t)
      ? rl(t) || fp(e, t, n, r, l)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : bp(e, t, r, o)
        )
      ? sp(e, t, r, i, l, a, s)
      : (t === 'true-value'
          ? (e._trueValue = r)
          : t === 'false-value' && (e._falseValue = r),
        ap(e, t, r, o));
  };
function bp(e, t, n, r) {
  return r
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && Oa.test(t) && de(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (Oa.test(t) && ke(n))
    ? !1
    : t in e;
}
const Kt = 'transition',
  sr = 'animation',
  Uo = (e, { slots: t }) => ve(Rc, eu(e), t);
Uo.displayName = 'Transition';
const Xc = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  yp = (Uo.props = Ve({}, Rc.props, Xc)),
  un = (e, t = []) => {
    se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Pa = (e) => (e ? (se(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function eu(e) {
  const t = {};
  for (const S in e) S in Xc || (t[S] = e[S]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: r,
      duration: o,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: l = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: s = i,
      appearActiveClass: c = l,
      appearToClass: u = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: h = `${n}-leave-to`
    } = e,
    m = _p(o),
    x = m && m[0],
    w = m && m[1],
    {
      onBeforeEnter: g,
      onEnter: y,
      onEnterCancelled: k,
      onLeave: A,
      onLeaveCancelled: R,
      onBeforeAppear: V = g,
      onAppear: E = y,
      onAppearCancelled: b = k
    } = t,
    B = (S, H, N) => {
      Yt(S, H ? u : a), Yt(S, H ? c : l), N && N();
    },
    q = (S, H) => {
      (S._isLeaving = !1), Yt(S, f), Yt(S, h), Yt(S, d), H && H();
    },
    Y = (S) => (H, N) => {
      const I = S ? E : y,
        C = () => B(H, S, N);
      un(I, [H, C]),
        Sa(() => {
          Yt(H, S ? s : i), Nt(H, S ? u : a), Pa(I) || Ta(H, r, x, C);
        });
    };
  return Ve(t, {
    onBeforeEnter(S) {
      un(g, [S]), Nt(S, i), Nt(S, l);
    },
    onBeforeAppear(S) {
      un(V, [S]), Nt(S, s), Nt(S, c);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(S, H) {
      S._isLeaving = !0;
      const N = () => q(S, H);
      Nt(S, f),
        nu(),
        Nt(S, d),
        Sa(() => {
          !S._isLeaving || (Yt(S, f), Nt(S, h), Pa(A) || Ta(S, r, w, N));
        }),
        un(A, [S, N]);
    },
    onEnterCancelled(S) {
      B(S, !1), un(k, [S]);
    },
    onAppearCancelled(S) {
      B(S, !0), un(b, [S]);
    },
    onLeaveCancelled(S) {
      q(S), un(R, [S]);
    }
  });
}
function _p(e) {
  if (e == null) return null;
  if (Ie(e)) return [li(e.enter), li(e.leave)];
  {
    const t = li(e);
    return [t, t];
  }
}
function li(e) {
  return al(e);
}
function Nt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Yt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Sa(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let xp = 0;
function Ta(e, t, n, r) {
  const o = (e._endId = ++xp),
    i = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(i, n);
  const { type: l, timeout: a, propCount: s } = tu(e, t);
  if (!l) return r();
  const c = l + 'end';
  let u = 0;
  const f = () => {
      e.removeEventListener(c, d), i();
    },
    d = (h) => {
      h.target === e && ++u >= s && f();
    };
  setTimeout(() => {
    u < s && f();
  }, a + 1),
    e.addEventListener(c, d);
}
function tu(e, t) {
  const n = window.getComputedStyle(e),
    r = (m) => (n[m] || '').split(', '),
    o = r(`${Kt}Delay`),
    i = r(`${Kt}Duration`),
    l = La(o, i),
    a = r(`${sr}Delay`),
    s = r(`${sr}Duration`),
    c = La(a, s);
  let u = null,
    f = 0,
    d = 0;
  t === Kt
    ? l > 0 && ((u = Kt), (f = l), (d = i.length))
    : t === sr
    ? c > 0 && ((u = sr), (f = c), (d = s.length))
    : ((f = Math.max(l, c)),
      (u = f > 0 ? (l > c ? Kt : sr) : null),
      (d = u ? (u === Kt ? i.length : s.length) : 0));
  const h =
    u === Kt && /\b(transform|all)(,|$)/.test(r(`${Kt}Property`).toString());
  return { type: u, timeout: f, propCount: d, hasTransform: h };
}
function La(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Aa(n) + Aa(e[r])));
}
function Aa(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function nu() {
  return document.body.offsetHeight;
}
const ru = new WeakMap(),
  ou = new WeakMap(),
  Cp = {
    name: 'TransitionGroup',
    props: Ve({}, yp, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = zo(),
        r = $c();
      let o, i;
      return (
        Fc(() => {
          if (!o.length) return;
          const l = e.moveClass || `${e.name || 'v'}-move`;
          if (!Pp(o[0].el, n.vnode.el, l)) return;
          o.forEach(kp), o.forEach(Ep);
          const a = o.filter(Op);
          nu(),
            a.forEach((s) => {
              const c = s.el,
                u = c.style;
              Nt(c, l),
                (u.transform = u.webkitTransform = u.transitionDuration = '');
              const f = (c._moveCb = (d) => {
                (d && d.target !== c) ||
                  ((!d || /transform$/.test(d.propertyName)) &&
                    (c.removeEventListener('transitionend', f),
                    (c._moveCb = null),
                    Yt(c, l)));
              });
              c.addEventListener('transitionend', f);
            });
        }),
        () => {
          const l = Ce(e),
            a = eu(l);
          let s = l.tag || we;
          (o = i), (i = t.default ? bl(t.default()) : []);
          for (let c = 0; c < i.length; c++) {
            const u = i[c];
            u.key != null && Ir(u, Ar(u, a, r, n));
          }
          if (o)
            for (let c = 0; c < o.length; c++) {
              const u = o[c];
              Ir(u, Ar(u, a, r, n)), ru.set(u, u.el.getBoundingClientRect());
            }
          return _(s, null, i);
        }
      );
    }
  },
  wp = Cp;
function kp(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function Ep(e) {
  ou.set(e, e.el.getBoundingClientRect());
}
function Op(e) {
  const t = ru.get(e),
    n = ou.get(e),
    r = t.left - n.left,
    o = t.top - n.top;
  if (r || o) {
    const i = e.el.style;
    return (
      (i.transform = i.webkitTransform = `translate(${r}px,${o}px)`),
      (i.transitionDuration = '0s'),
      e
    );
  }
}
function Pp(e, t, n) {
  const r = e.cloneNode();
  e._vtc &&
    e._vtc.forEach((l) => {
      l.split(/\s+/).forEach((a) => a && r.classList.remove(a));
    }),
    n.split(/\s+/).forEach((l) => l && r.classList.add(l)),
    (r.style.display = 'none');
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(r);
  const { hasTransform: i } = tu(r);
  return o.removeChild(r), i;
}
const Sp = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  Tp = (e, t) => (n) => {
    if (!('key' in n)) return;
    const r = Pn(n.key);
    if (t.some((o) => o === r || Sp[o] === r)) return e(n);
  },
  wo = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : cr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), cr(e, !0), r.enter(e))
            : r.leave(e, () => {
                cr(e, !1);
              })
          : cr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      cr(e, t);
    }
  };
function cr(e, t) {
  e.style.display = t ? e._vod : 'none';
}
const iu = Ve({ patchProp: vp }, rp);
let xr,
  Ia = !1;
function Lp() {
  return xr || (xr = $h(iu));
}
function Ap() {
  return (xr = Ia ? xr : Rh(iu)), (Ia = !0), xr;
}
const $a = (...e) => {
    Lp().render(...e);
  },
  Ip = (...e) => {
    const t = Ap().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const o = $p(r);
        if (o) return n(o, !0, o instanceof SVGElement);
      }),
      t
    );
  };
function $p(e) {
  return ke(e) ? document.querySelector(e) : e;
}
const Rp = JSON.parse(
  '{"base":"/learn-webgis/","lang":"zh-CN","title":"归乡博客","description":"个人学习记录,CSS,HTML,JS,WegGL,随笔,GIS","head":[["script",{"type":"text/javascript","src":"https://cloud-map.oss-cn-hangzhou.aliyuncs.com/cesium/v1.95/Cesium.js"}],["link",{"rel":"stylesheet","href":"https://cloud-map.oss-cn-hangzhou.aliyuncs.com/cesium/v1.95/Widgets/widgets.css"}]],"locales":{}}'
);
var jp = ([e, t, n]) =>
    e === 'meta' && t.name
      ? `${e}.${t.name}`
      : ['title', 'base'].includes(e)
      ? e
      : e === 'template' && t.id
      ? `${e}.${t.id}`
      : JSON.stringify([e, t, n]),
  Mp = (e) => {
    const t = new Set(),
      n = [];
    return (
      e.forEach((r) => {
        const o = jp(r);
        t.has(o) || (t.add(o), n.push(r));
      }),
      n
    );
  },
  Vr = (e) => /^(https?:)?\/\//.test(e),
  Fp = (e) => /^mailto:/.test(e),
  Dp = (e) => /^tel:/.test(e),
  wl = (e) => Object.prototype.toString.call(e) === '[object Object]',
  lu = (e) => e.replace(/\/$/, ''),
  au = (e) => e.replace(/^\//, ''),
  su = (e, t) => {
    const n = Object.keys(e).sort((r, o) => {
      const i = o.split('/').length - r.split('/').length;
      return i !== 0 ? i : o.length - r.length;
    });
    for (const r of n) if (t.startsWith(r)) return r;
    return '/';
  };
const cu = {
  'v-8daa1a0e': re(() => $(() => import('./index.html.8438e22e.js'), [])),
  'v-3d6ddeb7': re(() => $(() => import('./index.html.e301cbda.js'), [])),
  'v-a213d2d2': re(() => $(() => import('./cache.html.f064435d.js'), [])),
  'v-08421583': re(() => $(() => import('./conversion.html.97383bdf.js'), [])),
  'v-24e1b800': re(() => $(() => import('./index.html.d3b9bd6d.js'), [])),
  'v-74458d05': re(() => $(() => import('./index.html.dbde301c.js'), [])),
  'v-fffb8e28': re(() => $(() => import('./index.html.db20b0cc.js'), [])),
  'v-744738f7': re(() => $(() => import('./index.html.3d8a15be.js'), [])),
  'v-9323d598': re(() => $(() => import('./ceshi.html.15c232a7.js'), [])),
  'v-2d0a9a6d': re(() => $(() => import('./index.html.9966485c.js'), [])),
  'v-52c14c99': re(() => $(() => import('./index.html.c9c59b4b.js'), [])),
  'v-10c44358': re(() => $(() => import('./cuttif.html.f8128c5a.js'), [])),
  'v-152bcb16': re(() => $(() => import('./index.html.7f335c8e.js'), [])),
  'v-d440f426': re(() => $(() => import('./index.html.23fb5f64.js'), [])),
  'v-cb29af62': re(() => $(() => import('./index.html.b5a1abe5.js'), [])),
  'v-7cc14ffa': re(() => $(() => import('./coordinate.html.23e63987.js'), [])),
  'v-d1b2bbd2': re(() => $(() => import('./model.html.9df94b47.js'), [])),
  'v-a87e88b4': re(() => $(() => import('./index.html.39f1a99c.js'), [])),
  'v-2bc2d2ee': re(() => $(() => import('./index.html.bd7a2090.js'), [])),
  'v-e1f1f660': re(() => $(() => import('./desc.html.ba3aef96.js'), [])),
  'v-5f8b6f8f': re(() => $(() => import('./pore.html.09a11ded.js'), [])),
  'v-dbe2d262': re(() => $(() => import('./start.html.457b5df3.js'), [])),
  'v-fa3aae8c': re(() => $(() => import('./box.html.9c86894d.js'), [])),
  'v-1dd271de': re(() => $(() => import('./select.html.0f2a8226.js'), [])),
  'v-ea113d1a': re(() => $(() => import('./stacking.html.63f4792c.js'), [])),
  'v-d37c0208': re(() => $(() => import('./flex.html.272f70bf.js'), [])),
  'v-4b457bcf': re(() => $(() => import('./grid.html.6dd8afc0.js'), [])),
  'v-cd20c196': re(() => $(() => import('./resolution.html.8890e4f8.js'), [])),
  'v-c654dfb8': re(() => $(() => import('./s3m.html.6d260060.js'), [])),
  'v-658e3dcf': re(() => $(() => import('./ortho.html.3590c0f3.js'), [])),
  'v-ab4aa9a8': re(() => $(() => import('./satellite.html.ee77ec13.js'), [])),
  'v-45e4fe64': re(() => $(() => import('./tilt.html.f091c004.js'), [])),
  'v-72181280': re(() => $(() => import('./3dtiles.html.c143048b.js'), [])),
  'v-7407d6da': re(() => $(() => import('./kmlorkmz.html.5468f289.js'), [])),
  'v-0ce4deae': re(() => $(() => import('./ogc.html.f56ee0c1.js'), [])),
  'v-ff68d6e6': re(() => $(() => import('./wcs.html.f889e9a0.js'), [])),
  'v-dd6c35d2': re(() => $(() => import('./wms.html.93a83796.js'), [])),
  'v-3f60af09': re(() => $(() => import('./wmts.html.bd42a943.js'), [])),
  'v-2ffc96da': re(() => $(() => import('./wps.html.9dcdb0f3.js'), [])),
  'v-6fcb2b96': re(() => $(() => import('./skybox.html.54b7d21b.js'), [])),
  'v-23a924a1': re(() => $(() => import('./axis.html.df824501.js'), [])),
  'v-2070e3b1': re(() => $(() => import('./desc.html.a1fddd8d.js'), [])),
  'v-7f3673da': re(() => $(() => import('./light.html.58dd4906.js'), [])),
  'v-dabfd1e0': re(() =>
    $(() => import('./orbitControls.html.51d53da6.js'), [])
  ),
  'v-6918925a': re(() => $(() => import('./setup.html.94b309c2.js'), [])),
  'v-2de0940e': re(() => $(() => import('./start.html.4e2efb2f.js'), [])),
  'v-d40f9c1e': re(() => $(() => import('./stats.html.22b2022d.js'), [])),
  'v-7b32b4f2': re(() =>
    $(() => import('./codeverification.html.83a54154.js'), [])
  ),
  'v-1696ab78': re(() => $(() => import('./command.html.b9251f2d.js'), [])),
  'v-4f3a3e89': re(() => $(() => import('./crlforlf.html.0cd9d838.js'), [])),
  'v-290c00d0': re(() => $(() => import('./sshkey.html.7872400d.js'), [])),
  'v-6471236e': re(() => $(() => import('./datgui.html.960deb20.js'), [])),
  'v-a1606d4c': re(() => $(() => import('./prettier.html.16abc0a8.js'), [])),
  'v-b560a2a4': re(() => $(() => import('./unexpected.html.7c87238f.js'), [])),
  'v-3706649a': re(() => $(() => import('./404.html.83917723.js'), []))
};
var ln = (e = {}) => e;
function Np(e, t, n) {
  var r, o, i;
  t === void 0 && (t = 50), n === void 0 && (n = {});
  var l = (r = n.isImmediate) != null && r,
    a = (o = n.callback) != null && o,
    s = n.maxWait,
    c = Date.now(),
    u = [];
  function f() {
    if (s !== void 0) {
      var h = Date.now() - c;
      if (h + t >= s) return s - h;
    }
    return t;
  }
  var d = function () {
    var h = [].slice.call(arguments),
      m = this;
    return new Promise(function (x, w) {
      var g = l && i === void 0;
      if (
        (i !== void 0 && clearTimeout(i),
        (i = setTimeout(function () {
          if (((i = void 0), (c = Date.now()), !l)) {
            var k = e.apply(m, h);
            a && a(k),
              u.forEach(function (A) {
                return (0, A.resolve)(k);
              }),
              (u = []);
          }
        }, f())),
        g)
      ) {
        var y = e.apply(m, h);
        return a && a(y), x(y);
      }
      u.push({ resolve: x, reject: w });
    });
  };
  return (
    (d.cancel = function (h) {
      i !== void 0 && clearTimeout(i),
        u.forEach(function (m) {
          return (0, m.reject)(h);
        }),
        (u = []);
    }),
    d
  );
}
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const jn = typeof window < 'u';
function Hp(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module';
}
const Ee = Object.assign;
function ai(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Et(o) ? o.map(e) : e(o);
  }
  return n;
}
const Cr = () => {},
  Et = Array.isArray,
  Bp = /\/$/,
  zp = (e) => e.replace(Bp, '');
function si(e, t, n = '/') {
  let r,
    o = {},
    i = '',
    l = '';
  const a = t.indexOf('#');
  let s = t.indexOf('?');
  return (
    a < s && a >= 0 && (s = -1),
    s > -1 &&
      ((r = t.slice(0, s)),
      (i = t.slice(s + 1, a > -1 ? a : t.length)),
      (o = e(i))),
    a > -1 && ((r = r || t.slice(0, a)), (l = t.slice(a, t.length))),
    (r = qp(r != null ? r : t, n)),
    { fullPath: r + (i && '?') + i + l, path: r, query: o, hash: l }
  );
}
function Vp(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function Ra(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/';
}
function Up(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    qn(t.matched[r], n.matched[o]) &&
    uu(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function qn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function uu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Wp(e[n], t[n])) return !1;
  return !0;
}
function Wp(e, t) {
  return Et(e) ? ja(e, t) : Et(t) ? ja(t, e) : e === t;
}
function ja(e, t) {
  return Et(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function qp(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    r = e.split('/');
  let o = n.length - 1,
    i,
    l;
  for (i = 0; i < r.length; i++)
    if (((l = r[i]), l !== '.'))
      if (l === '..') o > 1 && o--;
      else break;
  return (
    n.slice(0, o).join('/') +
    '/' +
    r.slice(i - (i === r.length ? 1 : 0)).join('/')
  );
}
var Rr;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(Rr || (Rr = {}));
var wr;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(wr || (wr = {}));
function Gp(e) {
  if (!e)
    if (jn) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), zp(e);
}
const Kp = /^[^#]+#/;
function Yp(e, t) {
  return e.replace(Kp, '#') + t;
}
function Jp(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const Wo = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Qp(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      o =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = Jp(o, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Ma(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const $i = new Map();
function Zp(e, t) {
  $i.set(e, t);
}
function Xp(e) {
  const t = $i.get(e);
  return $i.delete(e), t;
}
let em = () => location.protocol + '//' + location.host;
function fu(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    i = e.indexOf('#');
  if (i > -1) {
    let a = o.includes(e.slice(i)) ? e.slice(i).length : 1,
      s = o.slice(a);
    return s[0] !== '/' && (s = '/' + s), Ra(s, '');
  }
  return Ra(n, e) + r + o;
}
function tm(e, t, n, r) {
  let o = [],
    i = [],
    l = null;
  const a = ({ state: d }) => {
    const h = fu(e, location),
      m = n.value,
      x = t.value;
    let w = 0;
    if (d) {
      if (((n.value = h), (t.value = d), l && l === m)) {
        l = null;
        return;
      }
      w = x ? d.position - x.position : 0;
    } else r(h);
    o.forEach((g) => {
      g(n.value, m, {
        delta: w,
        type: Rr.pop,
        direction: w ? (w > 0 ? wr.forward : wr.back) : wr.unknown
      });
    });
  };
  function s() {
    l = n.value;
  }
  function c(d) {
    o.push(d);
    const h = () => {
      const m = o.indexOf(d);
      m > -1 && o.splice(m, 1);
    };
    return i.push(h), h;
  }
  function u() {
    const { history: d } = window;
    !d.state || d.replaceState(Ee({}, d.state, { scroll: Wo() }), '');
  }
  function f() {
    for (const d of i) d();
    (i = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', u);
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', u),
    { pauseListeners: s, listen: c, destroy: f }
  );
}
function Fa(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? Wo() : null
  };
}
function nm(e) {
  const { history: t, location: n } = window,
    r = { value: fu(e, n) },
    o = { value: t.state };
  o.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    );
  function i(s, c, u) {
    const f = e.indexOf('#'),
      d =
        f > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(f)) + s
          : em() + e + s;
    try {
      t[u ? 'replaceState' : 'pushState'](c, '', d), (o.value = c);
    } catch (h) {
      console.error(h), n[u ? 'replace' : 'assign'](d);
    }
  }
  function l(s, c) {
    const u = Ee({}, t.state, Fa(o.value.back, s, o.value.forward, !0), c, {
      position: o.value.position
    });
    i(s, u, !0), (r.value = s);
  }
  function a(s, c) {
    const u = Ee({}, o.value, t.state, { forward: s, scroll: Wo() });
    i(u.current, u, !0);
    const f = Ee({}, Fa(r.value, s, null), { position: u.position + 1 }, c);
    i(s, f, !1), (r.value = s);
  }
  return { location: r, state: o, push: a, replace: l };
}
function rm(e) {
  e = Gp(e);
  const t = nm(e),
    n = tm(e, t.state, t.location, t.replace);
  function r(i, l = !0) {
    l || n.pauseListeners(), history.go(i);
  }
  const o = Ee(
    { location: '', base: e, go: r, createHref: Yp.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, 'location', {
      enumerable: !0,
      get: () => t.location.value
    }),
    Object.defineProperty(o, 'state', {
      enumerable: !0,
      get: () => t.state.value
    }),
    o
  );
}
function om(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function du(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const Ht = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  hu = Symbol('');
var Da;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(Da || (Da = {}));
function Gn(e, t) {
  return Ee(new Error(), { type: e, [hu]: !0 }, t);
}
function Mt(e, t) {
  return e instanceof Error && hu in e && (t == null || !!(e.type & t));
}
const Na = '[^/]+?',
  im = { sensitive: !1, strict: !1, start: !0, end: !0 },
  lm = /[.+*?^${}()[\]/\\]/g;
function am(e, t) {
  const n = Ee({}, im, t),
    r = [];
  let o = n.start ? '^' : '';
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (o += '/');
    for (let f = 0; f < c.length; f++) {
      const d = c[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (o += '/'), (o += d.value.replace(lm, '\\$&')), (h += 40);
      else if (d.type === 1) {
        const { value: m, repeatable: x, optional: w, regexp: g } = d;
        i.push({ name: m, repeatable: x, optional: w });
        const y = g || Na;
        if (y !== Na) {
          h += 10;
          try {
            new RegExp(`(${y})`);
          } catch (A) {
            throw new Error(
              `Invalid custom RegExp for param "${m}" (${y}): ` + A.message
            );
          }
        }
        let k = x ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        f || (k = w && c.length < 2 ? `(?:/${k})` : '/' + k),
          w && (k += '?'),
          (o += k),
          (h += 20),
          w && (h += -8),
          x && (h += -20),
          y === '.*' && (h += -50);
      }
      u.push(h);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && (o += '(?:/|$)');
  const l = new RegExp(o, n.sensitive ? '' : 'i');
  function a(c) {
    const u = c.match(l),
      f = {};
    if (!u) return null;
    for (let d = 1; d < u.length; d++) {
      const h = u[d] || '',
        m = i[d - 1];
      f[m.name] = h && m.repeatable ? h.split('/') : h;
    }
    return f;
  }
  function s(c) {
    let u = '',
      f = !1;
    for (const d of e) {
      (!f || !u.endsWith('/')) && (u += '/'), (f = !1);
      for (const h of d)
        if (h.type === 0) u += h.value;
        else if (h.type === 1) {
          const { value: m, repeatable: x, optional: w } = h,
            g = m in c ? c[m] : '';
          if (Et(g) && !x)
            throw new Error(
              `Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`
            );
          const y = Et(g) ? g.join('/') : g;
          if (!y)
            if (w)
              d.length < 2 &&
                (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${m}"`);
          u += y;
        }
    }
    return u || '/';
  }
  return { re: l, score: r, keys: i, parse: a, stringify: s };
}
function sm(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function cm(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const i = sm(r[n], o[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Ha(r)) return 1;
    if (Ha(o)) return -1;
  }
  return o.length - r.length;
}
function Ha(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const um = { type: 0, value: '' },
  fm = /[a-zA-Z0-9_]/;
function dm(e) {
  if (!e) return [[]];
  if (e === '/') return [[um]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let i;
  function l() {
    i && o.push(i), (i = []);
  }
  let a = 0,
    s,
    c = '',
    u = '';
  function f() {
    !c ||
      (n === 0
        ? i.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (s === '*' || s === '+') &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: s === '*' || s === '+',
            optional: s === '*' || s === '?'
          }))
        : t('Invalid state to consume buffer'),
      (c = ''));
  }
  function d() {
    c += s;
  }
  for (; a < e.length; ) {
    if (((s = e[a++]), s === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        s === '/' ? (c && f(), l()) : s === ':' ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = r);
        break;
      case 1:
        s === '('
          ? (n = 2)
          : fm.test(s)
          ? d()
          : (f(), (n = 0), s !== '*' && s !== '?' && s !== '+' && a--);
        break;
      case 2:
        s === ')'
          ? u[u.length - 1] == '\\'
            ? (u = u.slice(0, -1) + s)
            : (n = 3)
          : (u += s);
        break;
      case 3:
        f(), (n = 0), s !== '*' && s !== '?' && s !== '+' && a--, (u = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), l(), o;
}
function hm(e, t, n) {
  const r = am(dm(e.path), n),
    o = Ee(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function pm(e, t) {
  const n = [],
    r = new Map();
  t = Va({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(u) {
    return r.get(u);
  }
  function i(u, f, d) {
    const h = !d,
      m = mm(u);
    m.aliasOf = d && d.record;
    const x = Va(t, u),
      w = [m];
    if ('alias' in u) {
      const k = typeof u.alias == 'string' ? [u.alias] : u.alias;
      for (const A of k)
        w.push(
          Ee({}, m, {
            components: d ? d.record.components : m.components,
            path: A,
            aliasOf: d ? d.record : m
          })
        );
    }
    let g, y;
    for (const k of w) {
      const { path: A } = k;
      if (f && A[0] !== '/') {
        const R = f.record.path,
          V = R[R.length - 1] === '/' ? '' : '/';
        k.path = f.record.path + (A && V + A);
      }
      if (
        ((g = hm(k, f, x)),
        d
          ? d.alias.push(g)
          : ((y = y || g),
            y !== g && y.alias.push(g),
            h && u.name && !za(g) && l(u.name)),
        m.children)
      ) {
        const R = m.children;
        for (let V = 0; V < R.length; V++) i(R[V], g, d && d.children[V]);
      }
      (d = d || g),
        ((g.record.components && Object.keys(g.record.components).length) ||
          g.record.name ||
          g.record.redirect) &&
          s(g);
    }
    return y
      ? () => {
          l(y);
        }
      : Cr;
  }
  function l(u) {
    if (du(u)) {
      const f = r.get(u);
      f &&
        (r.delete(u),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(l),
        f.alias.forEach(l));
    } else {
      const f = n.indexOf(u);
      f > -1 &&
        (n.splice(f, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(l),
        u.alias.forEach(l));
    }
  }
  function a() {
    return n;
  }
  function s(u) {
    let f = 0;
    for (
      ;
      f < n.length &&
      cm(u, n[f]) >= 0 &&
      (u.record.path !== n[f].record.path || !pu(u, n[f]));

    )
      f++;
    n.splice(f, 0, u), u.record.name && !za(u) && r.set(u.record.name, u);
  }
  function c(u, f) {
    let d,
      h = {},
      m,
      x;
    if ('name' in u && u.name) {
      if (((d = r.get(u.name)), !d)) throw Gn(1, { location: u });
      (x = d.record.name),
        (h = Ee(
          Ba(
            f.params,
            d.keys.filter((y) => !y.optional).map((y) => y.name)
          ),
          u.params &&
            Ba(
              u.params,
              d.keys.map((y) => y.name)
            )
        )),
        (m = d.stringify(h));
    } else if ('path' in u)
      (m = u.path),
        (d = n.find((y) => y.re.test(m))),
        d && ((h = d.parse(m)), (x = d.record.name));
    else {
      if (((d = f.name ? r.get(f.name) : n.find((y) => y.re.test(f.path))), !d))
        throw Gn(1, { location: u, currentLocation: f });
      (x = d.record.name),
        (h = Ee({}, f.params, u.params)),
        (m = d.stringify(h));
    }
    const w = [];
    let g = d;
    for (; g; ) w.unshift(g.record), (g = g.parent);
    return { name: x, path: m, params: h, matched: w, meta: vm(w) };
  }
  return (
    e.forEach((u) => i(u)),
    {
      addRoute: i,
      resolve: c,
      removeRoute: l,
      getRoutes: a,
      getRecordMatcher: o
    }
  );
}
function Ba(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function mm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: gm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component }
  };
}
function gm(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'boolean' ? n : n[r];
  return t;
}
function za(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function vm(e) {
  return e.reduce((t, n) => Ee(t, n.meta), {});
}
function Va(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function pu(e, t) {
  return t.children.some((n) => n === e || pu(e, n));
}
const mu = /#/g,
  bm = /&/g,
  ym = /\//g,
  _m = /=/g,
  xm = /\?/g,
  gu = /\+/g,
  Cm = /%5B/g,
  wm = /%5D/g,
  vu = /%5E/g,
  km = /%60/g,
  bu = /%7B/g,
  Em = /%7C/g,
  yu = /%7D/g,
  Om = /%20/g;
function kl(e) {
  return encodeURI('' + e)
    .replace(Em, '|')
    .replace(Cm, '[')
    .replace(wm, ']');
}
function Pm(e) {
  return kl(e).replace(bu, '{').replace(yu, '}').replace(vu, '^');
}
function Ri(e) {
  return kl(e)
    .replace(gu, '%2B')
    .replace(Om, '+')
    .replace(mu, '%23')
    .replace(bm, '%26')
    .replace(km, '`')
    .replace(bu, '{')
    .replace(yu, '}')
    .replace(vu, '^');
}
function Sm(e) {
  return Ri(e).replace(_m, '%3D');
}
function Tm(e) {
  return kl(e).replace(mu, '%23').replace(xm, '%3F');
}
function Lm(e) {
  return e == null ? '' : Tm(e).replace(ym, '%2F');
}
function ko(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
function Am(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const r = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let o = 0; o < r.length; ++o) {
    const i = r[o].replace(gu, ' '),
      l = i.indexOf('='),
      a = ko(l < 0 ? i : i.slice(0, l)),
      s = l < 0 ? null : ko(i.slice(l + 1));
    if (a in t) {
      let c = t[a];
      Et(c) || (c = t[a] = [c]), c.push(s);
    } else t[a] = s;
  }
  return t;
}
function Ua(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = Sm(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (Et(r) ? r.map((i) => i && Ri(i)) : [r && Ri(r)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i));
    });
  }
  return t;
}
function Im(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Et(r)
        ? r.map((o) => (o == null ? null : '' + o))
        : r == null
        ? r
        : '' + r);
  }
  return t;
}
const $m = Symbol(''),
  Wa = Symbol(''),
  qo = Symbol(''),
  El = Symbol(''),
  ji = Symbol('');
function ur() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function Qt(e, t, n, r, o) {
  const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((l, a) => {
      const s = (f) => {
          f === !1
            ? a(Gn(4, { from: n, to: t }))
            : f instanceof Error
            ? a(f)
            : om(f)
            ? a(Gn(2, { from: t, to: f }))
            : (i &&
                r.enterCallbacks[o] === i &&
                typeof f == 'function' &&
                i.push(f),
              l());
        },
        c = e.call(r && r.instances[o], t, n, s);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(s)), u.catch((f) => a(f));
    });
}
function ci(e, t, n, r) {
  const o = [];
  for (const i of e)
    for (const l in i.components) {
      let a = i.components[l];
      if (!(t !== 'beforeRouteEnter' && !i.instances[l]))
        if (Rm(a)) {
          const c = (a.__vccOpts || a)[t];
          c && o.push(Qt(c, n, r, i, l));
        } else {
          let s = a();
          o.push(() =>
            s.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${l}" at "${i.path}"`)
                );
              const u = Hp(c) ? c.default : c;
              i.components[l] = u;
              const d = (u.__vccOpts || u)[t];
              return d && Qt(d, n, r, i, l)();
            })
          );
        }
    }
  return o;
}
function Rm(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  );
}
function qa(e) {
  const t = Ae(qo),
    n = Ae(El),
    r = F(() => t.resolve(z(e.to))),
    o = F(() => {
      const { matched: s } = r.value,
        { length: c } = s,
        u = s[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const d = f.findIndex(qn.bind(null, u));
      if (d > -1) return d;
      const h = Ga(s[c - 2]);
      return c > 1 && Ga(u) === h && f[f.length - 1].path !== h
        ? f.findIndex(qn.bind(null, s[c - 2]))
        : d;
    }),
    i = F(() => o.value > -1 && Dm(n.params, r.value.params)),
    l = F(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        uu(n.params, r.value.params)
    );
  function a(s = {}) {
    return Fm(s)
      ? t[z(e.replace) ? 'replace' : 'push'](z(e.to)).catch(Cr)
      : Promise.resolve();
  }
  return {
    route: r,
    href: F(() => r.value.href),
    isActive: i,
    isExactActive: l,
    navigate: a
  };
}
const jm = oe({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: qa,
    setup(e, { slots: t }) {
      const n = tt(qa(e)),
        { options: r } = Ae(qo),
        o = F(() => ({
          [Ka(e.activeClass, r.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [Ka(
            e.exactActiveClass,
            r.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive
        }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom
          ? i
          : ve(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
              },
              i
            );
      };
    }
  }),
  Mm = jm;
function Fm(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Dm(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == 'string') {
      if (r !== o) return !1;
    } else if (!Et(o) || o.length !== r.length || r.some((i, l) => i !== o[l]))
      return !1;
  }
  return !0;
}
function Ga(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Ka = (e, t, n) => (e != null ? e : t != null ? t : n),
  Nm = oe({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Ae(ji),
        o = F(() => e.route || r.value),
        i = Ae(Wa, 0),
        l = F(() => {
          let c = z(i);
          const { matched: u } = o.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = F(() => o.value.matched[l.value]);
      et(
        Wa,
        F(() => l.value + 1)
      ),
        et($m, a),
        et(ji, o);
      const s = fe();
      return (
        ze(
          () => [s.value, a.value, e.name],
          ([c, u, f], [d, h, m]) => {
            u &&
              ((u.instances[f] = c),
              h &&
                h !== u &&
                c &&
                c === d &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              c &&
                u &&
                (!h || !qn(u, h) || !d) &&
                (u.enterCallbacks[f] || []).forEach((x) => x(c));
          },
          { flush: 'post' }
        ),
        () => {
          const c = o.value,
            u = e.name,
            f = a.value,
            d = f && f.components[u];
          if (!d) return Ya(n.default, { Component: d, route: c });
          const h = f.props[u],
            m = h
              ? h === !0
                ? c.params
                : typeof h == 'function'
                ? h(c)
                : h
              : null,
            w = ve(
              d,
              Ee({}, m, t, {
                onVnodeUnmounted: (g) => {
                  g.component.isUnmounted && (f.instances[u] = null);
                },
                ref: s
              })
            );
          return Ya(n.default, { Component: w, route: c }) || w;
        }
      );
    }
  });
function Ya(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const _u = Nm;
function Hm(e) {
  const t = pm(e.routes, e),
    n = e.parseQuery || Am,
    r = e.stringifyQuery || Ua,
    o = e.history,
    i = ur(),
    l = ur(),
    a = ur(),
    s = Cc(Ht);
  let c = Ht;
  jn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const u = ai.bind(null, (T) => '' + T),
    f = ai.bind(null, Lm),
    d = ai.bind(null, ko);
  function h(T, G) {
    let J, te;
    return (
      du(T) ? ((J = t.getRecordMatcher(T)), (te = G)) : (te = T),
      t.addRoute(te, J)
    );
  }
  function m(T) {
    const G = t.getRecordMatcher(T);
    G && t.removeRoute(G);
  }
  function x() {
    return t.getRoutes().map((T) => T.record);
  }
  function w(T) {
    return !!t.getRecordMatcher(T);
  }
  function g(T, G) {
    if (((G = Ee({}, G || s.value)), typeof T == 'string')) {
      const p = si(n, T, G.path),
        v = t.resolve({ path: p.path }, G),
        O = o.createHref(p.fullPath);
      return Ee(p, v, {
        params: d(v.params),
        hash: ko(p.hash),
        redirectedFrom: void 0,
        href: O
      });
    }
    let J;
    if ('path' in T) J = Ee({}, T, { path: si(n, T.path, G.path).path });
    else {
      const p = Ee({}, T.params);
      for (const v in p) p[v] == null && delete p[v];
      (J = Ee({}, T, { params: f(T.params) })), (G.params = f(G.params));
    }
    const te = t.resolve(J, G),
      ge = T.hash || '';
    te.params = u(d(te.params));
    const Te = Vp(r, Ee({}, T, { hash: Pm(ge), path: te.path })),
      he = o.createHref(Te);
    return Ee(
      { fullPath: Te, hash: ge, query: r === Ua ? Im(T.query) : T.query || {} },
      te,
      { redirectedFrom: void 0, href: he }
    );
  }
  function y(T) {
    return typeof T == 'string' ? si(n, T, s.value.path) : Ee({}, T);
  }
  function k(T, G) {
    if (c !== T) return Gn(8, { from: G, to: T });
  }
  function A(T) {
    return E(T);
  }
  function R(T) {
    return A(Ee(y(T), { replace: !0 }));
  }
  function V(T) {
    const G = T.matched[T.matched.length - 1];
    if (G && G.redirect) {
      const { redirect: J } = G;
      let te = typeof J == 'function' ? J(T) : J;
      return (
        typeof te == 'string' &&
          ((te =
            te.includes('?') || te.includes('#') ? (te = y(te)) : { path: te }),
          (te.params = {})),
        Ee(
          {
            query: T.query,
            hash: T.hash,
            params: 'path' in te ? {} : T.params
          },
          te
        )
      );
    }
  }
  function E(T, G) {
    const J = (c = g(T)),
      te = s.value,
      ge = T.state,
      Te = T.force,
      he = T.replace === !0,
      p = V(J);
    if (p)
      return E(
        Ee(y(p), {
          state: typeof p == 'object' ? Ee({}, ge, p.state) : ge,
          force: Te,
          replace: he
        }),
        G || J
      );
    const v = J;
    v.redirectedFrom = G;
    let O;
    return (
      !Te &&
        Up(r, te, J) &&
        ((O = Gn(16, { to: v, from: te })), ne(te, te, !0, !1)),
      (O ? Promise.resolve(O) : B(v, te))
        .catch((L) => (Mt(L) ? (Mt(L, 2) ? L : X(L)) : P(L, v, te)))
        .then((L) => {
          if (L) {
            if (Mt(L, 2))
              return E(
                Ee({ replace: he }, y(L.to), {
                  state: typeof L.to == 'object' ? Ee({}, ge, L.to.state) : ge,
                  force: Te
                }),
                G || v
              );
          } else L = Y(v, te, !0, he, ge);
          return q(v, te, L), L;
        })
    );
  }
  function b(T, G) {
    const J = k(T, G);
    return J ? Promise.reject(J) : Promise.resolve();
  }
  function B(T, G) {
    let J;
    const [te, ge, Te] = Bm(T, G);
    J = ci(te.reverse(), 'beforeRouteLeave', T, G);
    for (const p of te)
      p.leaveGuards.forEach((v) => {
        J.push(Qt(v, T, G));
      });
    const he = b.bind(null, T, G);
    return (
      J.push(he),
      $n(J)
        .then(() => {
          J = [];
          for (const p of i.list()) J.push(Qt(p, T, G));
          return J.push(he), $n(J);
        })
        .then(() => {
          J = ci(ge, 'beforeRouteUpdate', T, G);
          for (const p of ge)
            p.updateGuards.forEach((v) => {
              J.push(Qt(v, T, G));
            });
          return J.push(he), $n(J);
        })
        .then(() => {
          J = [];
          for (const p of T.matched)
            if (p.beforeEnter && !G.matched.includes(p))
              if (Et(p.beforeEnter))
                for (const v of p.beforeEnter) J.push(Qt(v, T, G));
              else J.push(Qt(p.beforeEnter, T, G));
          return J.push(he), $n(J);
        })
        .then(
          () => (
            T.matched.forEach((p) => (p.enterCallbacks = {})),
            (J = ci(Te, 'beforeRouteEnter', T, G)),
            J.push(he),
            $n(J)
          )
        )
        .then(() => {
          J = [];
          for (const p of l.list()) J.push(Qt(p, T, G));
          return J.push(he), $n(J);
        })
        .catch((p) => (Mt(p, 8) ? p : Promise.reject(p)))
    );
  }
  function q(T, G, J) {
    for (const te of a.list()) te(T, G, J);
  }
  function Y(T, G, J, te, ge) {
    const Te = k(T, G);
    if (Te) return Te;
    const he = G === Ht,
      p = jn ? history.state : {};
    J &&
      (te || he
        ? o.replace(T.fullPath, Ee({ scroll: he && p && p.scroll }, ge))
        : o.push(T.fullPath, ge)),
      (s.value = T),
      ne(T, G, J, he),
      X();
  }
  let S;
  function H() {
    S ||
      (S = o.listen((T, G, J) => {
        if (!nt.listening) return;
        const te = g(T),
          ge = V(te);
        if (ge) {
          E(Ee(ge, { replace: !0 }), te).catch(Cr);
          return;
        }
        c = te;
        const Te = s.value;
        jn && Zp(Ma(Te.fullPath, J.delta), Wo()),
          B(te, Te)
            .catch((he) =>
              Mt(he, 12)
                ? he
                : Mt(he, 2)
                ? (E(he.to, te)
                    .then((p) => {
                      Mt(p, 20) &&
                        !J.delta &&
                        J.type === Rr.pop &&
                        o.go(-1, !1);
                    })
                    .catch(Cr),
                  Promise.reject())
                : (J.delta && o.go(-J.delta, !1), P(he, te, Te))
            )
            .then((he) => {
              (he = he || Y(te, Te, !1)),
                he &&
                  (J.delta && !Mt(he, 8)
                    ? o.go(-J.delta, !1)
                    : J.type === Rr.pop && Mt(he, 20) && o.go(-1, !1)),
                q(te, Te, he);
            })
            .catch(Cr);
      }));
  }
  let N = ur(),
    I = ur(),
    C;
  function P(T, G, J) {
    X(T);
    const te = I.list();
    return (
      te.length ? te.forEach((ge) => ge(T, G, J)) : console.error(T),
      Promise.reject(T)
    );
  }
  function M() {
    return C && s.value !== Ht
      ? Promise.resolve()
      : new Promise((T, G) => {
          N.add([T, G]);
        });
  }
  function X(T) {
    return (
      C ||
        ((C = !T),
        H(),
        N.list().forEach(([G, J]) => (T ? J(T) : G())),
        N.reset()),
      T
    );
  }
  function ne(T, G, J, te) {
    const { scrollBehavior: ge } = e;
    if (!jn || !ge) return Promise.resolve();
    const Te =
      (!J && Xp(Ma(T.fullPath, 0))) ||
      ((te || !J) && history.state && history.state.scroll) ||
      null;
    return nr()
      .then(() => ge(T, G, Te))
      .then((he) => he && Qp(he))
      .catch((he) => P(he, T, G));
  }
  const pe = (T) => o.go(T);
  let xe;
  const $e = new Set(),
    nt = {
      currentRoute: s,
      listening: !0,
      addRoute: h,
      removeRoute: m,
      hasRoute: w,
      getRoutes: x,
      resolve: g,
      options: e,
      push: A,
      replace: R,
      go: pe,
      back: () => pe(-1),
      forward: () => pe(1),
      beforeEach: i.add,
      beforeResolve: l.add,
      afterEach: a.add,
      onError: I.add,
      isReady: M,
      install(T) {
        const G = this;
        T.component('RouterLink', Mm),
          T.component('RouterView', _u),
          (T.config.globalProperties.$router = G),
          Object.defineProperty(T.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => z(s)
          }),
          jn &&
            !xe &&
            s.value === Ht &&
            ((xe = !0), A(o.location).catch((ge) => {}));
        const J = {};
        for (const ge in Ht) J[ge] = F(() => s.value[ge]);
        T.provide(qo, G), T.provide(El, tt(J)), T.provide(ji, s);
        const te = T.unmount;
        $e.add(T),
          (T.unmount = function () {
            $e.delete(T),
              $e.size < 1 &&
                ((c = Ht),
                S && S(),
                (S = null),
                (s.value = Ht),
                (xe = !1),
                (C = !1)),
              te();
          });
      }
    };
  return nt;
}
function $n(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function Bm(e, t) {
  const n = [],
    r = [],
    o = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let l = 0; l < i; l++) {
    const a = t.matched[l];
    a && (e.matched.find((c) => qn(c, a)) ? r.push(a) : n.push(a));
    const s = e.matched[l];
    s && (t.matched.find((c) => qn(c, s)) || o.push(s));
  }
  return [n, r, o];
}
function Sn() {
  return Ae(qo);
}
function an() {
  return Ae(El);
}
const zm = ({
    headerLinkSelector: e,
    headerAnchorSelector: t,
    delay: n,
    offset: r = 5
  }) => {
    const o = Sn(),
      l = Np(() => {
        var x, w, g, y;
        const a = Math.max(
          window.scrollY,
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
        if (Math.abs(a - 0) < r) {
          Ja(o, '');
          return;
        }
        const c = window.innerHeight + a,
          u = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
          ),
          f = Math.abs(u - c) < r,
          d = Array.from(document.querySelectorAll(e)),
          m = Array.from(document.querySelectorAll(t)).filter((k) =>
            d.some((A) => A.hash === k.hash)
          );
        for (let k = 0; k < m.length; k++) {
          const A = m[k],
            R = m[k + 1],
            V =
              a >=
              ((w = (x = A.parentElement) == null ? void 0 : x.offsetTop) !=
              null
                ? w
                : 0) -
                r,
            E =
              !R ||
              a <
                ((y = (g = R.parentElement) == null ? void 0 : g.offsetTop) !=
                null
                  ? y
                  : 0) -
                  r;
          if (!(V && E)) continue;
          const B = decodeURIComponent(o.currentRoute.value.hash),
            q = decodeURIComponent(A.hash);
          if (B === q) return;
          if (f) {
            for (let Y = k + 1; Y < m.length; Y++)
              if (B === decodeURIComponent(m[Y].hash)) return;
          }
          Ja(o, q);
          return;
        }
      }, n);
    De(() => {
      window.addEventListener('scroll', l);
    }),
      rr(() => {
        window.removeEventListener('scroll', l);
      });
  },
  Ja = async (e, t) => {
    const { scrollBehavior: n } = e.options;
    (e.options.scrollBehavior = void 0),
      await e
        .replace({ query: e.currentRoute.value.query, hash: t, force: !0 })
        .finally(() => (e.options.scrollBehavior = n));
  },
  Vm = 'a.sidebar-item',
  Um = '.header-anchor',
  Wm = 300,
  qm = 5,
  Gm = ln({
    setup() {
      zm({
        headerLinkSelector: Vm,
        headerAnchorSelector: Um,
        delay: Wm,
        offset: qm
      });
    }
  });
const Km = ve(
    'svg',
    {
      class: 'external-link-icon',
      xmlns: 'http://www.w3.org/2000/svg',
      'aria-hidden': 'true',
      focusable: 'false',
      x: '0px',
      y: '0px',
      viewBox: '0 0 100 100',
      width: '15',
      height: '15'
    },
    [
      ve('path', {
        fill: 'currentColor',
        d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z'
      }),
      ve('polygon', {
        fill: 'currentColor',
        points:
          '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9'
      })
    ]
  ),
  Ym = oe({
    name: 'ExternalLinkIcon',
    props: { locales: { type: Object, required: !1, default: () => ({}) } },
    setup(e) {
      const t = Wr(),
        n = F(() => {
          var r;
          return (r = e.locales[t.value]) != null
            ? r
            : { openInNewWindow: 'open in new window' };
        });
      return () =>
        ve('span', [
          Km,
          ve(
            'span',
            { class: 'external-link-icon-sr-only' },
            n.value.openInNewWindow
          )
        ]);
    }
  }),
  Jm = { '/': { openInNewWindow: 'open in new window' } },
  Qm = ln({
    enhance({ app: e }) {
      e.component('ExternalLinkIcon', ve(Ym, { locales: Jm }));
    }
  });
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */ var dn =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  to = function (t) {
    return t.tagName === 'IMG';
  },
  Zm = function (t) {
    return NodeList.prototype.isPrototypeOf(t);
  },
  co = function (t) {
    return t && t.nodeType === 1;
  },
  Qa = function (t) {
    var n = t.currentSrc || t.src;
    return n.substr(-4).toLowerCase() === '.svg';
  },
  Za = function (t) {
    try {
      return Array.isArray(t)
        ? t.filter(to)
        : Zm(t)
        ? [].slice.call(t).filter(to)
        : co(t)
        ? [t].filter(to)
        : typeof t == 'string'
        ? [].slice.call(document.querySelectorAll(t)).filter(to)
        : [];
    } catch {
      throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`);
    }
  },
  Xm = function (t) {
    var n = document.createElement('div');
    return n.classList.add('medium-zoom-overlay'), (n.style.background = t), n;
  },
  eg = function (t) {
    var n = t.getBoundingClientRect(),
      r = n.top,
      o = n.left,
      i = n.width,
      l = n.height,
      a = t.cloneNode(),
      s =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0,
      c =
        window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0;
    return (
      a.removeAttribute('id'),
      (a.style.position = 'absolute'),
      (a.style.top = r + s + 'px'),
      (a.style.left = o + c + 'px'),
      (a.style.width = i + 'px'),
      (a.style.height = l + 'px'),
      (a.style.transform = ''),
      a
    );
  },
  Rn = function (t, n) {
    var r = dn({ bubbles: !1, cancelable: !1, detail: void 0 }, n);
    if (typeof window.CustomEvent == 'function') return new CustomEvent(t, r);
    var o = document.createEvent('CustomEvent');
    return o.initCustomEvent(t, r.bubbles, r.cancelable, r.detail), o;
  },
  tg = function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r =
        window.Promise ||
        function (S) {
          function H() {}
          S(H, H);
        },
      o = function (S) {
        var H = S.target;
        if (H === B) {
          m();
          return;
        }
        k.indexOf(H) !== -1 && x({ target: H });
      },
      i = function () {
        if (!(R || !b.original)) {
          var S =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
          Math.abs(V - S) > E.scrollOffset && setTimeout(m, 150);
        }
      },
      l = function (S) {
        var H = S.key || S.keyCode;
        (H === 'Escape' || H === 'Esc' || H === 27) && m();
      },
      a = function () {
        var S =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          H = S;
        if (
          (S.background && (B.style.background = S.background),
          S.container &&
            S.container instanceof Object &&
            (H.container = dn({}, E.container, S.container)),
          S.template)
        ) {
          var N = co(S.template)
            ? S.template
            : document.querySelector(S.template);
          H.template = N;
        }
        return (
          (E = dn({}, E, H)),
          k.forEach(function (I) {
            I.dispatchEvent(Rn('medium-zoom:update', { detail: { zoom: q } }));
          }),
          q
        );
      },
      s = function () {
        var S =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return e(dn({}, E, S));
      },
      c = function () {
        for (var S = arguments.length, H = Array(S), N = 0; N < S; N++)
          H[N] = arguments[N];
        var I = H.reduce(function (C, P) {
          return [].concat(C, Za(P));
        }, []);
        return (
          I.filter(function (C) {
            return k.indexOf(C) === -1;
          }).forEach(function (C) {
            k.push(C), C.classList.add('medium-zoom-image');
          }),
          A.forEach(function (C) {
            var P = C.type,
              M = C.listener,
              X = C.options;
            I.forEach(function (ne) {
              ne.addEventListener(P, M, X);
            });
          }),
          q
        );
      },
      u = function () {
        for (var S = arguments.length, H = Array(S), N = 0; N < S; N++)
          H[N] = arguments[N];
        b.zoomed && m();
        var I =
          H.length > 0
            ? H.reduce(function (C, P) {
                return [].concat(C, Za(P));
              }, [])
            : k;
        return (
          I.forEach(function (C) {
            C.classList.remove('medium-zoom-image'),
              C.dispatchEvent(
                Rn('medium-zoom:detach', { detail: { zoom: q } })
              );
          }),
          (k = k.filter(function (C) {
            return I.indexOf(C) === -1;
          })),
          q
        );
      },
      f = function (S, H) {
        var N =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return (
          k.forEach(function (I) {
            I.addEventListener('medium-zoom:' + S, H, N);
          }),
          A.push({ type: 'medium-zoom:' + S, listener: H, options: N }),
          q
        );
      },
      d = function (S, H) {
        var N =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return (
          k.forEach(function (I) {
            I.removeEventListener('medium-zoom:' + S, H, N);
          }),
          (A = A.filter(function (I) {
            return !(
              I.type === 'medium-zoom:' + S &&
              I.listener.toString() === H.toString()
            );
          })),
          q
        );
      },
      h = function () {
        var S =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          H = S.target,
          N = function () {
            var C = {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              },
              P = void 0,
              M = void 0;
            if (E.container)
              if (E.container instanceof Object)
                (C = dn({}, C, E.container)),
                  (P = C.width - C.left - C.right - E.margin * 2),
                  (M = C.height - C.top - C.bottom - E.margin * 2);
              else {
                var X = co(E.container)
                    ? E.container
                    : document.querySelector(E.container),
                  ne = X.getBoundingClientRect(),
                  pe = ne.width,
                  xe = ne.height,
                  $e = ne.left,
                  nt = ne.top;
                C = dn({}, C, { width: pe, height: xe, left: $e, top: nt });
              }
            (P = P || C.width - E.margin * 2),
              (M = M || C.height - E.margin * 2);
            var T = b.zoomedHd || b.original,
              G = Qa(T) ? P : T.naturalWidth || P,
              J = Qa(T) ? M : T.naturalHeight || M,
              te = T.getBoundingClientRect(),
              ge = te.top,
              Te = te.left,
              he = te.width,
              p = te.height,
              v = Math.min(G, P) / he,
              O = Math.min(J, M) / p,
              L = Math.min(v, O),
              j = (-Te + (P - he) / 2 + E.margin + C.left) / L,
              U = (-ge + (M - p) / 2 + E.margin + C.top) / L,
              Q = 'scale(' + L + ') translate3d(' + j + 'px, ' + U + 'px, 0)';
            (b.zoomed.style.transform = Q),
              b.zoomedHd && (b.zoomedHd.style.transform = Q);
          };
        return new r(function (I) {
          if (H && k.indexOf(H) === -1) {
            I(q);
            return;
          }
          var C = function pe() {
            (R = !1),
              b.zoomed.removeEventListener('transitionend', pe),
              b.original.dispatchEvent(
                Rn('medium-zoom:opened', { detail: { zoom: q } })
              ),
              I(q);
          };
          if (b.zoomed) {
            I(q);
            return;
          }
          if (H) b.original = H;
          else if (k.length > 0) {
            var P = k;
            b.original = P[0];
          } else {
            I(q);
            return;
          }
          if (
            (b.original.dispatchEvent(
              Rn('medium-zoom:open', { detail: { zoom: q } })
            ),
            (V =
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0),
            (R = !0),
            (b.zoomed = eg(b.original)),
            document.body.appendChild(B),
            E.template)
          ) {
            var M = co(E.template)
              ? E.template
              : document.querySelector(E.template);
            (b.template = document.createElement('div')),
              b.template.appendChild(M.content.cloneNode(!0)),
              document.body.appendChild(b.template);
          }
          if (
            (document.body.appendChild(b.zoomed),
            window.requestAnimationFrame(function () {
              document.body.classList.add('medium-zoom--opened');
            }),
            b.original.classList.add('medium-zoom-image--hidden'),
            b.zoomed.classList.add('medium-zoom-image--opened'),
            b.zoomed.addEventListener('click', m),
            b.zoomed.addEventListener('transitionend', C),
            b.original.getAttribute('data-zoom-src'))
          ) {
            (b.zoomedHd = b.zoomed.cloneNode()),
              b.zoomedHd.removeAttribute('srcset'),
              b.zoomedHd.removeAttribute('sizes'),
              (b.zoomedHd.src = b.zoomed.getAttribute('data-zoom-src')),
              (b.zoomedHd.onerror = function () {
                clearInterval(X),
                  console.warn(
                    'Unable to reach the zoom image target ' + b.zoomedHd.src
                  ),
                  (b.zoomedHd = null),
                  N();
              });
            var X = setInterval(function () {
              b.zoomedHd.complete &&
                (clearInterval(X),
                b.zoomedHd.classList.add('medium-zoom-image--opened'),
                b.zoomedHd.addEventListener('click', m),
                document.body.appendChild(b.zoomedHd),
                N());
            }, 10);
          } else if (b.original.hasAttribute('srcset')) {
            (b.zoomedHd = b.zoomed.cloneNode()),
              b.zoomedHd.removeAttribute('sizes'),
              b.zoomedHd.removeAttribute('loading');
            var ne = b.zoomedHd.addEventListener('load', function () {
              b.zoomedHd.removeEventListener('load', ne),
                b.zoomedHd.classList.add('medium-zoom-image--opened'),
                b.zoomedHd.addEventListener('click', m),
                document.body.appendChild(b.zoomedHd),
                N();
            });
          } else N();
        });
      },
      m = function () {
        return new r(function (S) {
          if (R || !b.original) {
            S(q);
            return;
          }
          var H = function N() {
            b.original.classList.remove('medium-zoom-image--hidden'),
              document.body.removeChild(b.zoomed),
              b.zoomedHd && document.body.removeChild(b.zoomedHd),
              document.body.removeChild(B),
              b.zoomed.classList.remove('medium-zoom-image--opened'),
              b.template && document.body.removeChild(b.template),
              (R = !1),
              b.zoomed.removeEventListener('transitionend', N),
              b.original.dispatchEvent(
                Rn('medium-zoom:closed', { detail: { zoom: q } })
              ),
              (b.original = null),
              (b.zoomed = null),
              (b.zoomedHd = null),
              (b.template = null),
              S(q);
          };
          (R = !0),
            document.body.classList.remove('medium-zoom--opened'),
            (b.zoomed.style.transform = ''),
            b.zoomedHd && (b.zoomedHd.style.transform = ''),
            b.template &&
              ((b.template.style.transition = 'opacity 150ms'),
              (b.template.style.opacity = 0)),
            b.original.dispatchEvent(
              Rn('medium-zoom:close', { detail: { zoom: q } })
            ),
            b.zoomed.addEventListener('transitionend', H);
        });
      },
      x = function () {
        var S =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          H = S.target;
        return b.original ? m() : h({ target: H });
      },
      w = function () {
        return E;
      },
      g = function () {
        return k;
      },
      y = function () {
        return b.original;
      },
      k = [],
      A = [],
      R = !1,
      V = 0,
      E = n,
      b = { original: null, zoomed: null, zoomedHd: null, template: null };
    Object.prototype.toString.call(t) === '[object Object]'
      ? (E = t)
      : (t || typeof t == 'string') && c(t),
      (E = dn(
        {
          margin: 0,
          background: '#fff',
          scrollOffset: 40,
          container: null,
          template: null
        },
        E
      ));
    var B = Xm(E.background);
    document.addEventListener('click', o),
      document.addEventListener('keyup', l),
      document.addEventListener('scroll', i),
      window.addEventListener('resize', m);
    var q = {
      open: h,
      close: m,
      toggle: x,
      update: a,
      clone: s,
      attach: c,
      detach: u,
      on: f,
      off: d,
      getOptions: w,
      getImages: g,
      getZoomedImage: y
    };
    return q;
  };
function ng(e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (!(!e || typeof document > 'u')) {
    var r = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style');
    (o.type = 'text/css'),
      n === 'top' && r.firstChild
        ? r.insertBefore(o, r.firstChild)
        : r.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e));
  }
}
var rg =
  '.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}';
ng(rg);
const og = tg,
  ig = Symbol('mediumZoom');
const lg = '.theme-default-content > img, .theme-default-content :not(a) > img',
  ag = {},
  sg = 300,
  cg = ln({
    enhance({ app: e, router: t }) {
      const n = og(ag);
      (n.refresh = (r = lg) => {
        n.detach(), n.attach(r);
      }),
        e.provide(ig, n),
        t.afterEach(() => {
          setTimeout(() => n.refresh(), sg);
        });
    }
  });
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */ const be = {
    settings: {
      minimum: 0.08,
      easing: 'ease',
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      barSelector: '[role="bar"]',
      parent: 'body',
      template: '<div class="bar" role="bar"></div>'
    },
    status: null,
    set: (e) => {
      const t = be.isStarted();
      (e = ui(e, be.settings.minimum, 1)), (be.status = e === 1 ? null : e);
      const n = be.render(!t),
        r = n.querySelector(be.settings.barSelector),
        o = be.settings.speed,
        i = be.settings.easing;
      return (
        n.offsetWidth,
        ug((l) => {
          no(r, {
            transform: 'translate3d(' + Xa(e) + '%,0,0)',
            transition: 'all ' + o + 'ms ' + i
          }),
            e === 1
              ? (no(n, { transition: 'none', opacity: '1' }),
                n.offsetWidth,
                setTimeout(function () {
                  no(n, { transition: 'all ' + o + 'ms linear', opacity: '0' }),
                    setTimeout(function () {
                      be.remove(), l();
                    }, o);
                }, o))
              : setTimeout(() => l(), o);
        }),
        be
      );
    },
    isStarted: () => typeof be.status == 'number',
    start: () => {
      be.status || be.set(0);
      const e = () => {
        setTimeout(() => {
          !be.status || (be.trickle(), e());
        }, be.settings.trickleSpeed);
      };
      return be.settings.trickle && e(), be;
    },
    done: (e) =>
      !e && !be.status ? be : be.inc(0.3 + 0.5 * Math.random()).set(1),
    inc: (e) => {
      let t = be.status;
      return t
        ? (typeof e != 'number' &&
            (e = (1 - t) * ui(Math.random() * t, 0.1, 0.95)),
          (t = ui(t + e, 0, 0.994)),
          be.set(t))
        : be.start();
    },
    trickle: () => be.inc(Math.random() * be.settings.trickleRate),
    render: (e) => {
      if (be.isRendered()) return document.getElementById('nprogress');
      es(document.documentElement, 'nprogress-busy');
      const t = document.createElement('div');
      (t.id = 'nprogress'), (t.innerHTML = be.settings.template);
      const n = t.querySelector(be.settings.barSelector),
        r = e ? '-100' : Xa(be.status || 0),
        o = document.querySelector(be.settings.parent);
      return (
        no(n, {
          transition: 'all 0 linear',
          transform: 'translate3d(' + r + '%,0,0)'
        }),
        o !== document.body && es(o, 'nprogress-custom-parent'),
        o == null || o.appendChild(t),
        t
      );
    },
    remove: () => {
      ts(document.documentElement, 'nprogress-busy'),
        ts(
          document.querySelector(be.settings.parent),
          'nprogress-custom-parent'
        );
      const e = document.getElementById('nprogress');
      e && fg(e);
    },
    isRendered: () => !!document.getElementById('nprogress')
  },
  ui = (e, t, n) => (e < t ? t : e > n ? n : e),
  Xa = (e) => (-1 + e) * 100,
  ug = (function () {
    const e = [];
    function t() {
      const n = e.shift();
      n && n(t);
    }
    return function (n) {
      e.push(n), e.length === 1 && t();
    };
  })(),
  no = (function () {
    const e = ['Webkit', 'O', 'Moz', 'ms'],
      t = {};
    function n(l) {
      return l.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (a, s) {
        return s.toUpperCase();
      });
    }
    function r(l) {
      const a = document.body.style;
      if (l in a) return l;
      let s = e.length;
      const c = l.charAt(0).toUpperCase() + l.slice(1);
      let u;
      for (; s--; ) if (((u = e[s] + c), u in a)) return u;
      return l;
    }
    function o(l) {
      return (l = n(l)), t[l] || (t[l] = r(l));
    }
    function i(l, a, s) {
      (a = o(a)), (l.style[a] = s);
    }
    return function (l, a) {
      for (const s in a) {
        const c = a[s];
        c !== void 0 &&
          Object.prototype.hasOwnProperty.call(a, s) &&
          i(l, s, c);
      }
    };
  })(),
  xu = (e, t) => (typeof e == 'string' ? e : Ol(e)).indexOf(' ' + t + ' ') >= 0,
  es = (e, t) => {
    const n = Ol(e),
      r = n + t;
    xu(n, t) || (e.className = r.substring(1));
  },
  ts = (e, t) => {
    const n = Ol(e);
    if (!xu(e, t)) return;
    const r = n.replace(' ' + t + ' ', ' ');
    e.className = r.substring(1, r.length - 1);
  },
  Ol = (e) => (' ' + (e.className || '') + ' ').replace(/\s+/gi, ' '),
  fg = (e) => {
    e && e.parentNode && e.parentNode.removeChild(e);
  };
const dg = () => {
    De(() => {
      const e = Sn(),
        t = new Set();
      t.add(e.currentRoute.value.path),
        e.beforeEach((n) => {
          t.has(n.path) || be.start();
        }),
        e.afterEach((n) => {
          t.add(n.path), be.done();
        });
    });
  },
  hg = ln({
    setup() {
      dg();
    }
  }),
  pg = JSON.parse(
    '{"logo":"/icon/logo.jpg","colorModeSwitch":false,"notFound":["页面不存在"],"backToHome":"回到主页","navbar":[{"text":"首页","link":"/"},{"text":"GIS","link":"/gis/"},{"text":"WebGL","link":"/webgl/"},{"text":"CesiumJS","link":"/cesium/setup/desc.md"},{"text":"前端","children":[{"text":"浏览器","link":"/browser/"},{"text":"三剑客","children":[{"text":"CSS","link":"/css/"},{"text":"JS","link":"/js/"},{"text":"HTML","link":"/html/"}]}]},{"text":"WebGIS","children":[{"text":"基础理念","children":[{"text":"数据格式","link":"/webgis/module/3dtiles.md"},{"text":"地图类别","link":"/webgis/tilt/desc.md"}]},{"text":"软件操作","children":[{"text":"QGIS","link":"/qgis/"},{"text":"ArcGIS","link":"/arcgis/"}]},{"text":"地图引擎","children":[{"text":"Potree","link":"/potree/"}]}]},{"text":"工具","children":[{"text":"包管理工具","children":[{"text":"npm","link":"/tools/package/npm/unexpected.md"}]},{"text":"代码管理","children":[{"text":"Git","link":"/tools/git/command.md"}]},{"text":"其他工具集","link":"/tools/other/datgui.md"}]}],"sidebar":{"/css/":[{"text":"","children":[{"text":"介绍","link":"/css/"}]},{"text":"概念","children":[{"text":"选择器","link":"/css/concept/select.md"},{"text":"层叠上下文","link":"/css/concept/stacking.md"},{"text":"css盒模型","link":"/css/concept/box.md"}]},{"text":"属性","children":[{"text":"flex","link":"/css/props/flex.md"},{"text":"grid","link":"/css/props/grid.md"}]},{"text":"示例","children":[]}],"/tools/":[{"text":"包管理工具","children":[{"text":"npm","children":[{"text":"npm unexpected token .","link":"/tools/package/npm/unexpected.md"}]}]},{"text":"Git","children":[{"text":"配置 SSH Key","link":"/tools/git/sshkey.md"},{"text":"基础命令","link":"/tools/git/command.md"},{"text":"CRLF和LF","link":"/tools/git/crlforlf.md"},{"text":"husky + commitlint 实现代码校验","link":"/tools/git/codeverification.md"}]},{"text":"其他工具集","children":[{"text":"dat.gui","link":"/tools/other/datgui.md"},{"text":"Prettier","link":"/tools/other/prettier.md"}]}],"/potree/":[{"text":"","children":[{"text":"起步","link":"/potree/"}]},{"text":"基础","children":[{"text":"自定义天空盒","link":"/potree/basic/skybox.md"}]},{"text":"进阶","children":[]}],"/cesium/":[{"text":"快速上手","children":[{"text":"介绍","link":"/cesium/setup/desc.md"},{"text":"起步","link":"/cesium/setup/start.md"},{"text":"Primitive 与 Entity","link":"/cesium/setup/pore.md"}]},{"text":"基础","children":[{"text":"Cesium 常用坐标","link":"/cesium/basic/coordinate.md"}]},{"text":"实体 Entity","children":[{"text":"介绍","link":"/cesium/entity/index.md"}]},{"text":"图元 Primitive","children":[{"text":"介绍","link":"/cesium/primitive/index.md"}]},{"text":"进阶","children":[]},{"text":"案例","children":[]}],"/qgis/":[{"text":"介绍及安装","link":"/qgis/"},{"text":"矢量处理","children":[]},{"text":"栅格处理","children":[{"text":"根据矢量轮廓裁剪tif","link":"/qgis/cuttif.md"}]}],"/arcgis/":[{"text":"介绍及安装","link":"/arcgis/"},{"text":"点云处理","children":[]}],"/browser/":[{"text":"目录","link":"/browser/index.md"},{"text":"清除缓存的几种方法","link":"/browser/cache.md"},{"text":"URL字符转义","link":"/browser/conversion.md"}],"/webgl/":[{"text":"介绍","link":"/webgl/index.md"}],"/gis/":[{"text":"介绍","link":"/gis/index.md"},{"text":"基础概念","children":[{"text":"比例尺和分辨率","link":"/gis/basic/resolution.md"}]},{"text":"OGC标准","children":[{"text":"OGC 标准介绍","link":"/gis/ogc/ogc.md"},{"text":"KML和KMZ","link":"/gis/ogc/kmlorkmz.md"},{"text":"3D Tiles","link":"/gis/ogc/3dtiles.md"},{"text":"WMS","link":"/gis/ogc/wms.md"},{"text":"WMTS","link":"/gis/ogc/wmts.md"},{"text":"WPS","link":"/gis/ogc/wps.md"},{"text":"WCS","link":"/gis/ogc/wcs.md"}]},{"text":"gis数据","children":[{"text":"正射影像","link":"/gis/data/ortho.md"},{"text":"卫星影像","link":"/gis/data/satellite.md"},{"text":"倾斜摄影","link":"/gis/data/tilt.md"}]}]},"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}'
  ),
  mg = fe(pg),
  gg = () => mg,
  Cu = Symbol(''),
  wu = () => {
    const e = Ae(Cu);
    if (!e) throw new Error('useThemeLocaleData() is called without provider.');
    return e;
  },
  vg = (e, t) => {
    var n;
    return { ...e, ...((n = e.locales) == null ? void 0 : n[t]) };
  },
  bg = ln({
    enhance({ app: e }) {
      const t = gg(),
        n = e._context.provides[Gl],
        r = F(() => vg(t.value, n.value));
      e.provide(Cu, r),
        Object.defineProperties(e.config.globalProperties, {
          $theme: {
            get() {
              return t.value;
            }
          },
          $themeLocale: {
            get() {
              return r.value;
            }
          }
        });
    }
  }),
  yg = oe({
    __name: 'Badge',
    props: {
      type: { type: String, required: !1, default: 'tip' },
      text: { type: String, required: !1, default: '' },
      vertical: { type: String, required: !1, default: void 0 }
    },
    setup(e) {
      return (t, n) => (
        Z(),
        ae(
          'span',
          {
            class: lt(['badge', e.type]),
            style: Dr({ verticalAlign: e.vertical })
          },
          [Se(t.$slots, 'default', {}, () => [it(He(e.text), 1)])],
          6
        )
      );
    }
  }),
  Re = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  _g = Re(yg, [['__file', 'Badge.vue']]),
  xg = oe({
    name: 'CodeGroup',
    setup(e, { slots: t }) {
      const n = fe(-1),
        r = fe([]),
        o = (a = n.value) => {
          a < r.value.length - 1 ? (n.value = a + 1) : (n.value = 0),
            r.value[n.value].focus();
        },
        i = (a = n.value) => {
          a > 0 ? (n.value = a - 1) : (n.value = r.value.length - 1),
            r.value[n.value].focus();
        },
        l = (a, s) => {
          a.key === ' ' || a.key === 'Enter'
            ? (a.preventDefault(), (n.value = s))
            : a.key === 'ArrowRight'
            ? (a.preventDefault(), o(s))
            : a.key === 'ArrowLeft' && (a.preventDefault(), i(s));
        };
      return () => {
        var s;
        const a = (((s = t.default) == null ? void 0 : s.call(t)) || [])
          .filter((c) => c.type.name === 'CodeGroupItem')
          .map((c) => (c.props === null && (c.props = {}), c));
        return a.length === 0
          ? null
          : (n.value < 0 || n.value > a.length - 1
              ? ((n.value = a.findIndex(
                  (c) => c.props.active === '' || c.props.active === !0
                )),
                n.value === -1 && (n.value = 0))
              : a.forEach((c, u) => {
                  c.props.active = u === n.value;
                }),
            ve('div', { class: 'code-group' }, [
              ve(
                'div',
                { class: 'code-group__nav' },
                ve(
                  'ul',
                  { class: 'code-group__ul' },
                  a.map((c, u) => {
                    const f = u === n.value;
                    return ve(
                      'li',
                      { class: 'code-group__li' },
                      ve(
                        'button',
                        {
                          ref: (d) => {
                            d && (r.value[u] = d);
                          },
                          class: {
                            'code-group__nav-tab': !0,
                            'code-group__nav-tab-active': f
                          },
                          ariaPressed: f,
                          ariaExpanded: f,
                          onClick: () => (n.value = u),
                          onKeydown: (d) => l(d, u)
                        },
                        c.props.title
                      )
                    );
                  })
                )
              ),
              a
            ]));
      };
    }
  }),
  Cg = ['aria-selected'],
  wg = oe({ name: 'CodeGroupItem' }),
  kg = oe({
    ...wg,
    props: {
      title: { type: String, required: !0 },
      active: { type: Boolean, required: !1, default: !1 }
    },
    setup(e) {
      return (t, n) => (
        Z(),
        ae(
          'div',
          {
            class: lt([
              'code-group-item',
              { 'code-group-item__active': e.active }
            ]),
            'aria-selected': e.active
          },
          [Se(t.$slots, 'default')],
          10,
          Cg
        )
      );
    }
  }),
  Eg = Re(kg, [['__file', 'CodeGroupItem.vue']]);
var ns;
const Ur = typeof window < 'u',
  Og = (e) => typeof e == 'function',
  Pg = (e) => typeof e == 'string',
  Sg = () => {};
Ur &&
  ((ns = window == null ? void 0 : window.navigator) == null
    ? void 0
    : ns.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Eo(e) {
  return typeof e == 'function' ? e() : z(e);
}
function Tg(e, t) {
  function n(...r) {
    e(() => t.apply(this, r), { fn: t, thisArg: this, args: r });
  }
  return n;
}
const ku = (e) => e();
function Lg(e = ku) {
  const t = fe(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  return {
    isActive: t,
    pause: n,
    resume: r,
    eventFilter: (...i) => {
      t.value && e(...i);
    }
  };
}
function Ag(e) {
  return e;
}
function Eu(e) {
  return md() ? (gd(e), !0) : !1;
}
function Ig(e) {
  return typeof e == 'function' ? F(e) : fe(e);
}
function $g(e, t = !0) {
  zo() ? De(e) : t ? e() : nr(e);
}
function Rg(e = !1, t = {}) {
  const { truthyValue: n = !0, falsyValue: r = !1 } = t,
    o = Be(e),
    i = fe(e);
  function l(a) {
    if (arguments.length) return (i.value = a), i.value;
    {
      const s = Eo(n);
      return (i.value = i.value === s ? Eo(r) : s), i.value;
    }
  }
  return o ? l : [i, l];
}
var rs = Object.getOwnPropertySymbols,
  jg = Object.prototype.hasOwnProperty,
  Mg = Object.prototype.propertyIsEnumerable,
  Fg = (e, t) => {
    var n = {};
    for (var r in e) jg.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && rs)
      for (var r of rs(e)) t.indexOf(r) < 0 && Mg.call(e, r) && (n[r] = e[r]);
    return n;
  };
function Dg(e, t, n = {}) {
  const r = n,
    { eventFilter: o = ku } = r,
    i = Fg(r, ['eventFilter']);
  return ze(e, Tg(o, t), i);
}
var Ng = Object.defineProperty,
  Hg = Object.defineProperties,
  Bg = Object.getOwnPropertyDescriptors,
  Oo = Object.getOwnPropertySymbols,
  Ou = Object.prototype.hasOwnProperty,
  Pu = Object.prototype.propertyIsEnumerable,
  os = (e, t, n) =>
    t in e
      ? Ng(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  zg = (e, t) => {
    for (var n in t || (t = {})) Ou.call(t, n) && os(e, n, t[n]);
    if (Oo) for (var n of Oo(t)) Pu.call(t, n) && os(e, n, t[n]);
    return e;
  },
  Vg = (e, t) => Hg(e, Bg(t)),
  Ug = (e, t) => {
    var n = {};
    for (var r in e) Ou.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Oo)
      for (var r of Oo(e)) t.indexOf(r) < 0 && Pu.call(e, r) && (n[r] = e[r]);
    return n;
  };
function Wg(e, t, n = {}) {
  const r = n,
    { eventFilter: o } = r,
    i = Ug(r, ['eventFilter']),
    { eventFilter: l, pause: a, resume: s, isActive: c } = Lg(o);
  return {
    stop: Dg(e, t, Vg(zg({}, i), { eventFilter: l })),
    pause: a,
    resume: s,
    isActive: c
  };
}
function qg(e) {
  var t;
  const n = Eo(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Po = Ur ? window : void 0;
Ur && window.document;
Ur && window.navigator;
Ur && window.location;
function Gg(...e) {
  let t, n, r, o;
  if (
    (Pg(e[0]) || Array.isArray(e[0])
      ? (([n, r, o] = e), (t = Po))
      : ([t, n, r, o] = e),
    !t)
  )
    return Sg;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [],
    l = () => {
      i.forEach((u) => u()), (i.length = 0);
    },
    a = (u, f, d) => (
      u.addEventListener(f, d, o), () => u.removeEventListener(f, d, o)
    ),
    s = ze(
      () => qg(t),
      (u) => {
        l(), u && i.push(...n.flatMap((f) => r.map((d) => a(u, f, d))));
      },
      { immediate: !0, flush: 'post' }
    ),
    c = () => {
      s(), l();
    };
  return Eu(c), c;
}
function Kg(e, t = !1) {
  const n = fe(),
    r = () => (n.value = Boolean(e()));
  return r(), $g(r, t), n;
}
function Yg(e, t = {}) {
  const { window: n = Po } = t,
    r = Kg(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function');
  let o;
  const i = fe(!1),
    l = () => {
      !o ||
        ('removeEventListener' in o
          ? o.removeEventListener('change', a)
          : o.removeListener(a));
    },
    a = () => {
      !r.value ||
        (l(),
        (o = n.matchMedia(Ig(e).value)),
        (i.value = o.matches),
        'addEventListener' in o
          ? o.addEventListener('change', a)
          : o.addListener(a));
    };
  return No(a), Eu(() => l()), i;
}
const Mi =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  Fi = '__vueuse_ssr_handlers__';
Mi[Fi] = Mi[Fi] || {};
const Jg = Mi[Fi];
function Qg(e, t) {
  return Jg[e] || t;
}
function Zg(e) {
  return e == null
    ? 'any'
    : e instanceof Set
    ? 'set'
    : e instanceof Map
    ? 'map'
    : e instanceof Date
    ? 'date'
    : typeof e == 'boolean'
    ? 'boolean'
    : typeof e == 'string'
    ? 'string'
    : typeof e == 'object'
    ? 'object'
    : Number.isNaN(e)
    ? 'any'
    : 'number';
}
var Xg = Object.defineProperty,
  is = Object.getOwnPropertySymbols,
  ev = Object.prototype.hasOwnProperty,
  tv = Object.prototype.propertyIsEnumerable,
  ls = (e, t, n) =>
    t in e
      ? Xg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  as = (e, t) => {
    for (var n in t || (t = {})) ev.call(t, n) && ls(e, n, t[n]);
    if (is) for (var n of is(t)) tv.call(t, n) && ls(e, n, t[n]);
    return e;
  };
const nv = {
  boolean: { read: (e) => e === 'true', write: (e) => String(e) },
  object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
  number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
  any: { read: (e) => e, write: (e) => String(e) },
  string: { read: (e) => e, write: (e) => String(e) },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: { read: (e) => new Date(e), write: (e) => e.toISOString() }
};
function Su(e, t, n, r = {}) {
  var o;
  const {
      flush: i = 'pre',
      deep: l = !0,
      listenToStorageChanges: a = !0,
      writeDefaults: s = !0,
      mergeDefaults: c = !1,
      shallow: u,
      window: f = Po,
      eventFilter: d,
      onError: h = (E) => {
        console.error(E);
      }
    } = r,
    m = (u ? Cc : fe)(t);
  if (!n)
    try {
      n = Qg('getDefaultStorage', () => {
        var E;
        return (E = Po) == null ? void 0 : E.localStorage;
      })();
    } catch (E) {
      h(E);
    }
  if (!n) return m;
  const x = Eo(t),
    w = Zg(x),
    g = (o = r.serializer) != null ? o : nv[w],
    { pause: y, resume: k } = Wg(m, () => A(m.value), {
      flush: i,
      deep: l,
      eventFilter: d
    });
  return f && a && Gg(f, 'storage', V), V(), m;
  function A(E) {
    try {
      E == null ? n.removeItem(e) : n.setItem(e, g.write(E));
    } catch (b) {
      h(b);
    }
  }
  function R(E) {
    y();
    try {
      const b = E ? E.newValue : n.getItem(e);
      if (b == null) return s && x !== null && n.setItem(e, g.write(x)), x;
      if (!E && c) {
        const B = g.read(b);
        return Og(c)
          ? c(B, x)
          : w === 'object' && !Array.isArray(B)
          ? as(as({}, x), B)
          : B;
      } else return typeof b != 'string' ? b : g.read(b);
    } catch (b) {
      h(b);
    } finally {
      k();
    }
  }
  function V(E) {
    if (!(E && E.storageArea !== n)) {
      if (E && E.key === null) {
        m.value = x;
        return;
      }
      (E && E.key !== e) || (m.value = R(E));
    }
  }
}
function rv(e) {
  return Yg('(prefers-color-scheme: dark)', e);
}
var ss;
(function (e) {
  (e.UP = 'UP'),
    (e.RIGHT = 'RIGHT'),
    (e.DOWN = 'DOWN'),
    (e.LEFT = 'LEFT'),
    (e.NONE = 'NONE');
})(ss || (ss = {}));
var ov = Object.defineProperty,
  cs = Object.getOwnPropertySymbols,
  iv = Object.prototype.hasOwnProperty,
  lv = Object.prototype.propertyIsEnumerable,
  us = (e, t, n) =>
    t in e
      ? ov(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  av = (e, t) => {
    for (var n in t || (t = {})) iv.call(t, n) && us(e, n, t[n]);
    if (cs) for (var n of cs(t)) lv.call(t, n) && us(e, n, t[n]);
    return e;
  };
const sv = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
av({ linear: Ag }, sv);
const Xe = () => wu(),
  Tu = Symbol(''),
  Pl = () => {
    const e = Ae(Tu);
    if (!e) throw new Error('useDarkMode() is called without provider.');
    return e;
  },
  cv = () => {
    const e = Xe(),
      t = rv(),
      n = Su('vuepress-color-scheme', e.value.colorMode),
      r = F({
        get() {
          return e.value.colorModeSwitch
            ? n.value === 'auto'
              ? t.value
              : n.value === 'dark'
            : e.value.colorMode === 'dark';
        },
        set(o) {
          o === t.value ? (n.value = 'auto') : (n.value = o ? 'dark' : 'light');
        }
      });
    et(Tu, r), uv(r);
  },
  uv = (e) => {
    const t = (n = e.value) => {
      const r = window == null ? void 0 : window.document.querySelector('html');
      r == null || r.classList.toggle('dark', n);
    };
    De(() => {
      ze(e, t, { immediate: !0 });
    }),
      zr(() => t());
  },
  Lu = (...e) => {
    const n = Sn().resolve(...e),
      r = n.matched[n.matched.length - 1];
    if (!(r != null && r.redirect)) return n;
    const { redirect: o } = r,
      i = de(o) ? o(n) : o,
      l = ke(i) ? { path: i } : i;
    return Lu({ hash: n.hash, query: n.query, params: n.params, ...l });
  },
  Sl = (e) => {
    const t = Lu(encodeURI(e));
    return { text: t.meta.title || e, link: t.name === '404' ? e : t.fullPath };
  };
let fi = null,
  fr = null;
const fv = {
    wait: () => fi,
    pending: () => {
      fi = new Promise((e) => (fr = e));
    },
    resolve: () => {
      fr == null || fr(), (fi = null), (fr = null);
    }
  },
  Au = () => fv,
  Iu = Symbol('sidebarItems'),
  Tl = () => {
    const e = Ae(Iu);
    if (!e) throw new Error('useSidebarItems() is called without provider.');
    return e;
  },
  dv = () => {
    const e = Xe(),
      t = At(),
      n = F(() => hv(t.value, e.value));
    et(Iu, n);
  },
  hv = (e, t) => {
    var o, i, l, a;
    const n =
        (i = (o = e.sidebar) != null ? o : t.sidebar) != null ? i : 'auto',
      r =
        (a = (l = e.sidebarDepth) != null ? l : t.sidebarDepth) != null ? a : 2;
    return e.home || n === !1
      ? []
      : n === 'auto'
      ? mv(r)
      : se(n)
      ? $u(n, r)
      : wl(n)
      ? gv(n, r)
      : [];
  },
  pv = (e, t) => ({ text: e.title, link: e.link, children: Ll(e.children, t) }),
  Ll = (e, t) => (t > 0 ? e.map((n) => pv(n, t - 1)) : []),
  mv = (e) => {
    const t = Vt();
    return [{ text: t.value.title, children: Ll(t.value.headers, e) }];
  },
  $u = (e, t) => {
    const n = an(),
      r = Vt(),
      o = (i) => {
        var a;
        let l;
        if ((ke(i) ? (l = Sl(i)) : (l = i), l.children))
          return { ...l, children: l.children.map((s) => o(s)) };
        if (l.link === n.path) {
          const s =
            ((a = r.value.headers[0]) == null ? void 0 : a.level) === 1
              ? r.value.headers[0].children
              : r.value.headers;
          return { ...l, children: Ll(s, t) };
        }
        return l;
      };
    return e.map((i) => o(i));
  },
  gv = (e, t) => {
    var i;
    const n = an(),
      r = su(e, n.path),
      o = (i = e[r]) != null ? i : [];
    return $u(o, t);
  },
  vv = {},
  bv = { class: 'theme-default-content' };
function yv(e, t) {
  const n = $t('Content');
  return Z(), ae('div', bv, [_(n)]);
}
const _v = Re(vv, [
    ['render', yv],
    ['__file', 'HomeContent.vue']
  ]),
  xv = { key: 0, class: 'features' },
  Cv = oe({
    __name: 'HomeFeatures',
    setup(e) {
      const t = At(),
        n = F(() => (se(t.value.features) ? t.value.features : []));
      return (r, o) =>
        z(n).length
          ? (Z(),
            ae('div', xv, [
              (Z(!0),
              ae(
                we,
                null,
                nn(
                  z(n),
                  (i) => (
                    Z(),
                    ae('div', { key: i.title, class: 'feature' }, [
                      _e('h2', null, He(i.title), 1),
                      _e('p', null, He(i.details), 1)
                    ])
                  )
                ),
                128
              ))
            ]))
          : je('v-if', !0);
    }
  }),
  wv = Re(Cv, [['__file', 'HomeFeatures.vue']]),
  kv = ['innerHTML'],
  Ev = ['textContent'],
  Ov = oe({
    __name: 'HomeFooter',
    setup(e) {
      const t = At(),
        n = F(() => t.value.footer),
        r = F(() => t.value.footerHtml);
      return (o, i) =>
        z(n)
          ? (Z(),
            ae(
              we,
              { key: 0 },
              [
                je(' eslint-disable-next-line vue/no-v-html '),
                z(r)
                  ? (Z(),
                    ae(
                      'div',
                      { key: 0, class: 'footer', innerHTML: z(n) },
                      null,
                      8,
                      kv
                    ))
                  : (Z(),
                    ae(
                      'div',
                      { key: 1, class: 'footer', textContent: He(z(n)) },
                      null,
                      8,
                      Ev
                    ))
              ],
              64
            ))
          : je('v-if', !0);
    }
  }),
  Pv = Re(Ov, [['__file', 'HomeFooter.vue']]),
  Sv = ['href', 'rel', 'target', 'aria-label'],
  Tv = oe({ inheritAttrs: !1 }),
  Lv = oe({
    ...Tv,
    __name: 'AutoLink',
    props: { item: { type: Object, required: !0 } },
    setup(e) {
      const t = e,
        n = an(),
        r = Yf(),
        { item: o } = Mo(t),
        i = F(() => Vr(o.value.link)),
        l = F(() => Fp(o.value.link) || Dp(o.value.link)),
        a = F(() => {
          if (!l.value) {
            if (o.value.target) return o.value.target;
            if (i.value) return '_blank';
          }
        }),
        s = F(() => a.value === '_blank'),
        c = F(() => !i.value && !l.value && !s.value),
        u = F(() => {
          if (!l.value) {
            if (o.value.rel) return o.value.rel;
            if (s.value) return 'noopener noreferrer';
          }
        }),
        f = F(() => o.value.ariaLabel || o.value.text),
        d = F(() => {
          const x = Object.keys(r.value.locales);
          return x.length
            ? !x.some((w) => w === o.value.link)
            : o.value.link !== '/';
        }),
        h = F(() => (d.value ? n.path.startsWith(o.value.link) : !1)),
        m = F(() =>
          c.value
            ? o.value.activeMatch
              ? new RegExp(o.value.activeMatch).test(n.path)
              : h.value
            : !1
        );
      return (x, w) => {
        const g = $t('RouterLink'),
          y = $t('AutoLinkExternalIcon');
        return z(c)
          ? (Z(),
            Fe(
              g,
              Ai(
                {
                  key: 0,
                  class: { 'router-link-active': z(m) },
                  to: z(o).link,
                  'aria-label': z(f)
                },
                x.$attrs
              ),
              {
                default: Ue(() => [
                  Se(x.$slots, 'before'),
                  it(' ' + He(z(o).text) + ' ', 1),
                  Se(x.$slots, 'after')
                ]),
                _: 3
              },
              16,
              ['class', 'to', 'aria-label']
            ))
          : (Z(),
            ae(
              'a',
              Ai(
                {
                  key: 1,
                  class: 'external-link',
                  href: z(o).link,
                  rel: z(u),
                  target: z(a),
                  'aria-label': z(f)
                },
                x.$attrs
              ),
              [
                Se(x.$slots, 'before'),
                it(' ' + He(z(o).text) + ' ', 1),
                z(s) ? (Z(), Fe(y, { key: 0 })) : je('v-if', !0),
                Se(x.$slots, 'after')
              ],
              16,
              Sv
            ));
      };
    }
  }),
  zt = Re(Lv, [['__file', 'AutoLink.vue']]),
  Av = { class: 'hero' },
  Iv = { key: 0, id: 'main-title' },
  $v = { key: 1, class: 'description' },
  Rv = { key: 2, class: 'actions' },
  jv = oe({
    __name: 'HomeHero',
    setup(e) {
      const t = At(),
        n = Jo(),
        r = Pl(),
        o = F(() =>
          r.value && t.value.heroImageDark !== void 0
            ? t.value.heroImageDark
            : t.value.heroImage
        ),
        i = F(() => t.value.heroAlt || a.value || 'hero'),
        l = F(() => t.value.heroHeight || 280),
        a = F(() =>
          t.value.heroText === null
            ? null
            : t.value.heroText || n.value.title || 'Hello'
        ),
        s = F(() =>
          t.value.tagline === null
            ? null
            : t.value.tagline ||
              n.value.description ||
              'Welcome to your VuePress site'
        ),
        c = F(() =>
          se(t.value.actions)
            ? t.value.actions.map(
                ({ text: f, link: d, type: h = 'primary' }) => ({
                  text: f,
                  link: d,
                  type: h
                })
              )
            : []
        ),
        u = () => {
          if (!o.value) return null;
          const f = ve('img', {
            src: Qo(o.value),
            alt: i.value,
            height: l.value
          });
          return t.value.heroImageDark === void 0 ? f : ve(Kl, () => f);
        };
      return (f, d) => (
        Z(),
        ae('header', Av, [
          _(u),
          z(a) ? (Z(), ae('h1', Iv, He(z(a)), 1)) : je('v-if', !0),
          z(s) ? (Z(), ae('p', $v, He(z(s)), 1)) : je('v-if', !0),
          z(c).length
            ? (Z(),
              ae('p', Rv, [
                (Z(!0),
                ae(
                  we,
                  null,
                  nn(
                    z(c),
                    (h) => (
                      Z(),
                      Fe(
                        zt,
                        {
                          key: h.text,
                          class: lt(['action-button', [h.type]]),
                          item: h
                        },
                        null,
                        8,
                        ['class', 'item']
                      )
                    )
                  ),
                  128
                ))
              ]))
            : je('v-if', !0)
        ])
      );
    }
  }),
  Mv = Re(jv, [['__file', 'HomeHero.vue']]),
  Fv = { class: 'home' },
  Dv = oe({
    __name: 'Home',
    setup(e) {
      return (t, n) => (Z(), ae('main', Fv, [_(Mv), _(wv), _(_v), _(Pv)]));
    }
  }),
  Nv = Re(Dv, [['__file', 'Home.vue']]),
  Hv = oe({
    __name: 'NavbarBrand',
    setup(e) {
      const t = Wr(),
        n = Jo(),
        r = Xe(),
        o = Pl(),
        i = F(() => r.value.home || t.value),
        l = F(() => n.value.title),
        a = F(() =>
          o.value && r.value.logoDark !== void 0
            ? r.value.logoDark
            : r.value.logo
        ),
        s = () => {
          if (!a.value) return null;
          const c = ve('img', {
            class: 'logo',
            src: Qo(a.value),
            alt: l.value
          });
          return r.value.logoDark === void 0 ? c : ve(Kl, () => c);
        };
      return (c, u) => {
        const f = $t('RouterLink');
        return (
          Z(),
          Fe(
            f,
            { to: z(i) },
            {
              default: Ue(() => [
                _(s),
                z(l)
                  ? (Z(),
                    ae(
                      'span',
                      {
                        key: 0,
                        class: lt(['site-name', { 'can-hide': z(a) }])
                      },
                      He(z(l)),
                      3
                    ))
                  : je('v-if', !0)
              ]),
              _: 1
            },
            8,
            ['to']
          )
        );
      };
    }
  }),
  Ru = Re(Hv, [['__file', 'NavbarBrand.vue']]),
  Bv = oe({
    __name: 'DropdownTransition',
    setup(e) {
      const t = (r) => {
          r.style.height = r.scrollHeight + 'px';
        },
        n = (r) => {
          r.style.height = '';
        };
      return (r, o) => (
        Z(),
        Fe(
          Uo,
          { name: 'dropdown', onEnter: t, onAfterEnter: n, onBeforeLeave: t },
          { default: Ue(() => [Se(r.$slots, 'default')]), _: 3 }
        )
      );
    }
  }),
  ju = Re(Bv, [['__file', 'DropdownTransition.vue']]),
  zv = ['aria-label'],
  Vv = { class: 'title' },
  Uv = _e('span', { class: 'arrow down' }, null, -1),
  Wv = ['aria-label'],
  qv = { class: 'title' },
  Gv = { class: 'navbar-dropdown' },
  Kv = { class: 'navbar-dropdown-subtitle' },
  Yv = { key: 1 },
  Jv = { class: 'navbar-dropdown-subitem-wrapper' },
  Qv = oe({
    __name: 'NavbarDropdown',
    props: { item: { type: Object, required: !0 } },
    setup(e) {
      const t = e,
        { item: n } = Mo(t),
        r = F(() => n.value.ariaLabel || n.value.text),
        o = fe(!1),
        i = an();
      ze(
        () => i.path,
        () => {
          o.value = !1;
        }
      );
      const l = (s) => {
          s.detail === 0 ? (o.value = !o.value) : (o.value = !1);
        },
        a = (s, c) => c[c.length - 1] === s;
      return (s, c) => (
        Z(),
        ae(
          'div',
          { class: lt(['navbar-dropdown-wrapper', { open: o.value }]) },
          [
            _e(
              'button',
              {
                class: 'navbar-dropdown-title',
                type: 'button',
                'aria-label': z(r),
                onClick: l
              },
              [_e('span', Vv, He(z(n).text), 1), Uv],
              8,
              zv
            ),
            _e(
              'button',
              {
                class: 'navbar-dropdown-title-mobile',
                type: 'button',
                'aria-label': z(r),
                onClick: c[0] || (c[0] = (u) => (o.value = !o.value))
              },
              [
                _e('span', qv, He(z(n).text), 1),
                _e(
                  'span',
                  { class: lt(['arrow', o.value ? 'down' : 'right']) },
                  null,
                  2
                )
              ],
              8,
              Wv
            ),
            _(ju, null, {
              default: Ue(() => [
                yo(
                  _e(
                    'ul',
                    Gv,
                    [
                      (Z(!0),
                      ae(
                        we,
                        null,
                        nn(
                          z(n).children,
                          (u) => (
                            Z(),
                            ae(
                              'li',
                              { key: u.text, class: 'navbar-dropdown-item' },
                              [
                                u.children
                                  ? (Z(),
                                    ae(
                                      we,
                                      { key: 0 },
                                      [
                                        _e('h4', Kv, [
                                          u.link
                                            ? (Z(),
                                              Fe(
                                                zt,
                                                {
                                                  key: 0,
                                                  item: u,
                                                  onFocusout: (f) =>
                                                    a(u, z(n).children) &&
                                                    u.children.length === 0 &&
                                                    (o.value = !1)
                                                },
                                                null,
                                                8,
                                                ['item', 'onFocusout']
                                              ))
                                            : (Z(),
                                              ae('span', Yv, He(u.text), 1))
                                        ]),
                                        _e('ul', Jv, [
                                          (Z(!0),
                                          ae(
                                            we,
                                            null,
                                            nn(
                                              u.children,
                                              (f) => (
                                                Z(),
                                                ae(
                                                  'li',
                                                  {
                                                    key: f.link,
                                                    class:
                                                      'navbar-dropdown-subitem'
                                                  },
                                                  [
                                                    _(
                                                      zt,
                                                      {
                                                        item: f,
                                                        onFocusout: (d) =>
                                                          a(f, u.children) &&
                                                          a(u, z(n).children) &&
                                                          (o.value = !1)
                                                      },
                                                      null,
                                                      8,
                                                      ['item', 'onFocusout']
                                                    )
                                                  ]
                                                )
                                              )
                                            ),
                                            128
                                          ))
                                        ])
                                      ],
                                      64
                                    ))
                                  : (Z(),
                                    Fe(
                                      zt,
                                      {
                                        key: 1,
                                        item: u,
                                        onFocusout: (f) =>
                                          a(u, z(n).children) && (o.value = !1)
                                      },
                                      null,
                                      8,
                                      ['item', 'onFocusout']
                                    ))
                              ]
                            )
                          )
                        ),
                        128
                      ))
                    ],
                    512
                  ),
                  [[wo, o.value]]
                )
              ]),
              _: 1
            })
          ],
          2
        )
      );
    }
  }),
  Zv = Re(Qv, [['__file', 'NavbarDropdown.vue']]),
  fs = (e) =>
    decodeURI(e)
      .replace(/#.*$/, '')
      .replace(/(index)?\.(md|html)$/, ''),
  Xv = (e, t) => {
    if (t.hash === e) return !0;
    const n = fs(t.path),
      r = fs(e);
    return n === r;
  },
  Mu = (e, t) =>
    e.link && Xv(e.link, t)
      ? !0
      : e.children
      ? e.children.some((n) => Mu(n, t))
      : !1,
  Fu = (e) =>
    !Vr(e) || /github\.com/.test(e)
      ? 'GitHub'
      : /bitbucket\.org/.test(e)
      ? 'Bitbucket'
      : /gitlab\.com/.test(e)
      ? 'GitLab'
      : /gitee\.com/.test(e)
      ? 'Gitee'
      : null,
  e0 = {
    GitHub: ':repo/edit/:branch/:path',
    GitLab: ':repo/-/edit/:branch/:path',
    Gitee: ':repo/edit/:branch/:path',
    Bitbucket:
      ':repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default'
  },
  t0 = ({ docsRepo: e, editLinkPattern: t }) => {
    if (t) return t;
    const n = Fu(e);
    return n !== null ? e0[n] : null;
  },
  n0 = ({
    docsRepo: e,
    docsBranch: t,
    docsDir: n,
    filePathRelative: r,
    editLinkPattern: o
  }) => {
    if (!r) return null;
    const i = t0({ docsRepo: e, editLinkPattern: o });
    return i
      ? i
          .replace(/:repo/, Vr(e) ? e : `https://github.com/${e}`)
          .replace(/:branch/, t)
          .replace(/:path/, au(`${lu(n)}/${r}`))
      : null;
  },
  r0 = { key: 0, class: 'navbar-items' },
  o0 = oe({
    __name: 'NavbarItems',
    setup(e) {
      const t = () => {
          const u = Sn(),
            f = Wr(),
            d = Jo(),
            h = Xe();
          return F(() => {
            var k, A, R;
            const m = Object.keys(d.value.locales);
            if (m.length < 2) return [];
            const x = u.currentRoute.value.path,
              w = u.currentRoute.value.fullPath,
              g = u.currentRoute.value.hash;
            return [
              {
                text:
                  (k = h.value.selectLanguageText) != null
                    ? k
                    : 'unknown language',
                ariaLabel:
                  (R =
                    (A = h.value.selectLanguageAriaLabel) != null
                      ? A
                      : h.value.selectLanguageText) != null
                    ? R
                    : 'unknown language',
                children: m.map((V) => {
                  var S, H, N, I, C, P;
                  const E =
                      (H = (S = d.value.locales) == null ? void 0 : S[V]) !=
                      null
                        ? H
                        : {},
                    b =
                      (I = (N = h.value.locales) == null ? void 0 : N[V]) !=
                      null
                        ? I
                        : {},
                    B = `${E.lang}`,
                    q = (C = b.selectLanguageName) != null ? C : B;
                  let Y;
                  if (B === d.value.lang) Y = w;
                  else {
                    const M = x.replace(f.value, V);
                    u.getRoutes().some((X) => X.path === M)
                      ? (Y = `${M}${g}`)
                      : (Y = (P = b.home) != null ? P : V);
                  }
                  return { text: q, link: Y };
                })
              }
            ];
          });
        },
        n = () => {
          const u = Xe(),
            f = F(() => u.value.repo),
            d = F(() => (f.value ? Fu(f.value) : null)),
            h = F(() =>
              f.value && !Vr(f.value)
                ? `https://github.com/${f.value}`
                : f.value
            ),
            m = F(() =>
              h.value
                ? u.value.repoLabel
                  ? u.value.repoLabel
                  : d.value === null
                  ? 'Source'
                  : d.value
                : null
            );
          return F(() =>
            !h.value || !m.value ? [] : [{ text: m.value, link: h.value }]
          );
        },
        r = (u) =>
          ke(u)
            ? Sl(u)
            : u.children
            ? { ...u, children: u.children.map(r) }
            : u,
        o = () => {
          const u = Xe();
          return F(() => (u.value.navbar || []).map(r));
        },
        i = fe(!1),
        l = o(),
        a = t(),
        s = n(),
        c = F(() => [...l.value, ...a.value, ...s.value]);
      return (
        De(() => {
          const f = () => {
            window.innerWidth < 719 ? (i.value = !0) : (i.value = !1);
          };
          f(),
            window.addEventListener('resize', f, !1),
            window.addEventListener('orientationchange', f, !1);
        }),
        (u, f) =>
          z(c).length
            ? (Z(),
              ae('nav', r0, [
                (Z(!0),
                ae(
                  we,
                  null,
                  nn(
                    z(c),
                    (d) => (
                      Z(),
                      ae('div', { key: d.text, class: 'navbar-item' }, [
                        d.children
                          ? (Z(),
                            Fe(
                              Zv,
                              {
                                key: 0,
                                item: d,
                                class: lt(i.value ? 'mobile' : '')
                              },
                              null,
                              8,
                              ['item', 'class']
                            ))
                          : (Z(),
                            Fe(zt, { key: 1, item: d }, null, 8, ['item']))
                      ])
                    )
                  ),
                  128
                ))
              ]))
            : je('v-if', !0)
      );
    }
  }),
  Al = Re(o0, [['__file', 'NavbarItems.vue']]),
  i0 = ['title'],
  l0 = { class: 'icon', focusable: 'false', viewBox: '0 0 32 32' },
  a0 = Vh(
    '<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',
    9
  ),
  s0 = [a0],
  c0 = { class: 'icon', focusable: 'false', viewBox: '0 0 32 32' },
  u0 = _e(
    'path',
    {
      d: 'M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  f0 = [u0],
  d0 = oe({
    __name: 'ToggleColorModeButton',
    setup(e) {
      const t = Xe(),
        n = Pl(),
        r = () => {
          n.value = !n.value;
        };
      return (o, i) => (
        Z(),
        ae(
          'button',
          {
            class: 'toggle-color-mode-button',
            title: z(t).toggleColorMode,
            onClick: r
          },
          [
            yo((Z(), ae('svg', l0, s0, 512)), [[wo, !z(n)]]),
            yo((Z(), ae('svg', c0, f0, 512)), [[wo, z(n)]])
          ],
          8,
          i0
        )
      );
    }
  }),
  h0 = Re(d0, [['__file', 'ToggleColorModeButton.vue']]),
  p0 = ['title'],
  m0 = _e(
    'div',
    { class: 'icon', 'aria-hidden': 'true' },
    [_e('span'), _e('span'), _e('span')],
    -1
  ),
  g0 = [m0],
  v0 = oe({
    __name: 'ToggleSidebarButton',
    emits: ['toggle'],
    setup(e) {
      const t = Xe();
      return (n, r) => (
        Z(),
        ae(
          'div',
          {
            class: 'toggle-sidebar-button',
            title: z(t).toggleSidebar,
            'aria-expanded': 'false',
            role: 'button',
            tabindex: '0',
            onClick: r[0] || (r[0] = (o) => n.$emit('toggle'))
          },
          g0,
          8,
          p0
        )
      );
    }
  }),
  b0 = Re(v0, [['__file', 'ToggleSidebarButton.vue']]),
  y0 = oe({
    __name: 'Navbar',
    emits: ['toggle-sidebar'],
    setup(e) {
      const t = Xe(),
        n = fe(null),
        r = fe(null),
        o = fe(0),
        i = F(() => (o.value ? { maxWidth: o.value + 'px' } : {}));
      De(() => {
        const s = l(n.value, 'paddingLeft') + l(n.value, 'paddingRight'),
          c = () => {
            var u;
            window.innerWidth < 719
              ? (o.value = 0)
              : (o.value =
                  n.value.offsetWidth -
                  s -
                  (((u = r.value) == null ? void 0 : u.offsetWidth) || 0));
          };
        c(),
          window.addEventListener('resize', c, !1),
          window.addEventListener('orientationchange', c, !1);
      });
      function l(a, s) {
        var f, d, h;
        const c =
            (h =
              (d =
                (f = a == null ? void 0 : a.ownerDocument) == null
                  ? void 0
                  : f.defaultView) == null
                ? void 0
                : d.getComputedStyle(a, null)) == null
              ? void 0
              : h[s],
          u = Number.parseInt(c, 10);
        return Number.isNaN(u) ? 0 : u;
      }
      return (a, s) => {
        const c = $t('NavbarSearch');
        return (
          Z(),
          ae(
            'header',
            { ref_key: 'navbar', ref: n, class: 'navbar' },
            [
              _(b0, {
                onToggle: s[0] || (s[0] = (u) => a.$emit('toggle-sidebar'))
              }),
              _e('span', { ref_key: 'navbarBrand', ref: r }, [_(Ru)], 512),
              _e(
                'div',
                { class: 'navbar-items-wrapper', style: Dr(z(i)) },
                [
                  Se(a.$slots, 'before'),
                  _(Al, { class: 'can-hide' }),
                  Se(a.$slots, 'after'),
                  z(t).colorModeSwitch
                    ? (Z(), Fe(h0, { key: 0 }))
                    : je('v-if', !0),
                  _(c)
                ],
                4
              )
            ],
            512
          )
        );
      };
    }
  }),
  _0 = Re(y0, [['__file', 'Navbar.vue']]),
  x0 = { class: 'page-meta' },
  C0 = { key: 0, class: 'meta-item edit-link' },
  w0 = { key: 1, class: 'meta-item last-updated' },
  k0 = { class: 'meta-item-label' },
  E0 = { class: 'meta-item-info' },
  O0 = { key: 2, class: 'meta-item contributors' },
  P0 = { class: 'meta-item-label' },
  S0 = { class: 'meta-item-info' },
  T0 = ['title'],
  L0 = oe({
    __name: 'PageMeta',
    setup(e) {
      const t = () => {
          const s = Xe(),
            c = Vt(),
            u = At();
          return F(() => {
            var y, k, A;
            if (
              !((k = (y = u.value.editLink) != null ? y : s.value.editLink) !=
              null
                ? k
                : !0)
            )
              return null;
            const {
              repo: d,
              docsRepo: h = d,
              docsBranch: m = 'main',
              docsDir: x = '',
              editLinkText: w
            } = s.value;
            if (!h) return null;
            const g = n0({
              docsRepo: h,
              docsBranch: m,
              docsDir: x,
              filePathRelative: c.value.filePathRelative,
              editLinkPattern:
                (A = u.value.editLinkPattern) != null
                  ? A
                  : s.value.editLinkPattern
            });
            return g
              ? { text: w != null ? w : 'Edit this page', link: g }
              : null;
          });
        },
        n = () => {
          const s = Xe(),
            c = Vt(),
            u = At();
          return F(() => {
            var h, m, x, w;
            return !((m =
              (h = u.value.lastUpdated) != null ? h : s.value.lastUpdated) !=
            null
              ? m
              : !0) || !((x = c.value.git) != null && x.updatedTime)
              ? null
              : new Date(
                  (w = c.value.git) == null ? void 0 : w.updatedTime
                ).toLocaleString();
          });
        },
        r = () => {
          const s = Xe(),
            c = Vt(),
            u = At();
          return F(() => {
            var d, h, m, x;
            return ((h =
              (d = u.value.contributors) != null ? d : s.value.contributors) !=
            null
              ? h
              : !0) &&
              (x = (m = c.value.git) == null ? void 0 : m.contributors) != null
              ? x
              : null;
          });
        },
        o = Xe(),
        i = t(),
        l = n(),
        a = r();
      return (s, c) => {
        const u = $t('ClientOnly');
        return (
          Z(),
          ae('footer', x0, [
            z(i)
              ? (Z(),
                ae('div', C0, [
                  _(zt, { class: 'meta-item-label', item: z(i) }, null, 8, [
                    'item'
                  ])
                ]))
              : je('v-if', !0),
            z(l)
              ? (Z(),
                ae('div', w0, [
                  _e('span', k0, He(z(o).lastUpdatedText) + ': ', 1),
                  _(u, null, {
                    default: Ue(() => [_e('span', E0, He(z(l)), 1)]),
                    _: 1
                  })
                ]))
              : je('v-if', !0),
            z(a) && z(a).length
              ? (Z(),
                ae('div', O0, [
                  _e('span', P0, He(z(o).contributorsText) + ': ', 1),
                  _e('span', S0, [
                    (Z(!0),
                    ae(
                      we,
                      null,
                      nn(
                        z(a),
                        (f, d) => (
                          Z(),
                          ae(
                            we,
                            { key: d },
                            [
                              _e(
                                'span',
                                {
                                  class: 'contributor',
                                  title: `email: ${f.email}`
                                },
                                He(f.name),
                                9,
                                T0
                              ),
                              d !== z(a).length - 1
                                ? (Z(), ae(we, { key: 0 }, [it(', ')], 64))
                                : je('v-if', !0)
                            ],
                            64
                          )
                        )
                      ),
                      128
                    ))
                  ])
                ]))
              : je('v-if', !0)
          ])
        );
      };
    }
  }),
  A0 = Re(L0, [['__file', 'PageMeta.vue']]),
  I0 = { key: 0, class: 'page-nav' },
  $0 = { class: 'inner' },
  R0 = { key: 0, class: 'prev' },
  j0 = { key: 1, class: 'next' },
  M0 = oe({
    __name: 'PageNav',
    setup(e) {
      const t = (s) => (s === !1 ? null : ke(s) ? Sl(s) : wl(s) ? s : !1),
        n = (s, c, u) => {
          const f = s.findIndex((d) => d.link === c);
          if (f !== -1) {
            const d = s[f + u];
            return d != null && d.link ? d : null;
          }
          for (const d of s)
            if (d.children) {
              const h = n(d.children, c, u);
              if (h) return h;
            }
          return null;
        },
        r = At(),
        o = Tl(),
        i = an(),
        l = F(() => {
          const s = t(r.value.prev);
          return s !== !1 ? s : n(o.value, i.path, -1);
        }),
        a = F(() => {
          const s = t(r.value.next);
          return s !== !1 ? s : n(o.value, i.path, 1);
        });
      return (s, c) =>
        z(l) || z(a)
          ? (Z(),
            ae('nav', I0, [
              _e('p', $0, [
                z(l)
                  ? (Z(),
                    ae('span', R0, [_(zt, { item: z(l) }, null, 8, ['item'])]))
                  : je('v-if', !0),
                z(a)
                  ? (Z(),
                    ae('span', j0, [_(zt, { item: z(a) }, null, 8, ['item'])]))
                  : je('v-if', !0)
              ])
            ]))
          : je('v-if', !0);
    }
  }),
  F0 = Re(M0, [['__file', 'PageNav.vue']]),
  D0 = { class: 'page' },
  N0 = { class: 'theme-default-content' },
  H0 = oe({
    __name: 'Page',
    setup(e) {
      return (t, n) => {
        const r = $t('Content');
        return (
          Z(),
          ae('main', D0, [
            Se(t.$slots, 'top'),
            _e('div', N0, [
              Se(t.$slots, 'content-top'),
              _(r),
              Se(t.$slots, 'content-bottom')
            ]),
            _(A0),
            _(F0),
            Se(t.$slots, 'bottom')
          ])
        );
      };
    }
  }),
  Du = Re(H0, [['__file', 'Page.vue']]),
  B0 = ['onKeydown'],
  z0 = { class: 'sidebar-item-children' },
  V0 = oe({
    __name: 'SidebarItem',
    props: {
      item: { type: Object, required: !0 },
      depth: { type: Number, required: !1, default: 0 }
    },
    setup(e) {
      const t = e,
        { item: n, depth: r } = Mo(t),
        o = an(),
        i = Sn(),
        l = F(() => Mu(n.value, o)),
        a = F(() => ({
          'sidebar-item': !0,
          'sidebar-heading': r.value === 0,
          active: l.value,
          collapsible: n.value.collapsible
        })),
        s = F(() => (n.value.collapsible ? l.value : !0)),
        [c, u] = Rg(s.value),
        f = (h) => {
          n.value.collapsible && (h.preventDefault(), u());
        },
        d = i.afterEach((h) => {
          nr(() => {
            c.value = s.value;
          });
        });
      return (
        rr(() => {
          d();
        }),
        (h, m) => {
          var w;
          const x = $t('SidebarItem', !0);
          return (
            Z(),
            ae('li', null, [
              z(n).link
                ? (Z(),
                  Fe(zt, { key: 0, class: lt(z(a)), item: z(n) }, null, 8, [
                    'class',
                    'item'
                  ]))
                : (Z(),
                  ae(
                    'p',
                    {
                      key: 1,
                      tabindex: '0',
                      class: lt(z(a)),
                      onClick: f,
                      onKeydown: Tp(f, ['enter'])
                    },
                    [
                      it(He(z(n).text) + ' ', 1),
                      z(n).collapsible
                        ? (Z(),
                          ae(
                            'span',
                            {
                              key: 0,
                              class: lt(['arrow', z(c) ? 'down' : 'right'])
                            },
                            null,
                            2
                          ))
                        : je('v-if', !0)
                    ],
                    42,
                    B0
                  )),
              (w = z(n).children) != null && w.length
                ? (Z(),
                  Fe(
                    ju,
                    { key: 2 },
                    {
                      default: Ue(() => [
                        yo(
                          _e(
                            'ul',
                            z0,
                            [
                              (Z(!0),
                              ae(
                                we,
                                null,
                                nn(
                                  z(n).children,
                                  (g) => (
                                    Z(),
                                    Fe(
                                      x,
                                      {
                                        key: `${z(r)}${g.text}${g.link}`,
                                        item: g,
                                        depth: z(r) + 1
                                      },
                                      null,
                                      8,
                                      ['item', 'depth']
                                    )
                                  )
                                ),
                                128
                              ))
                            ],
                            512
                          ),
                          [[wo, z(c)]]
                        )
                      ]),
                      _: 1
                    }
                  ))
                : je('v-if', !0)
            ])
          );
        }
      );
    }
  }),
  U0 = Re(V0, [['__file', 'SidebarItem.vue']]),
  W0 = { key: 0, class: 'sidebar-items' },
  q0 = oe({
    __name: 'SidebarItems',
    setup(e) {
      const t = an(),
        n = Tl();
      return (
        De(() => {
          ze(
            () => t.hash,
            (r) => {
              const o = document.querySelector('.sidebar');
              if (!o) return;
              const i = document.querySelector(
                `.sidebar a.sidebar-item[href="${t.path}${r}"]`
              );
              if (!i) return;
              const { top: l, height: a } = o.getBoundingClientRect(),
                { top: s, height: c } = i.getBoundingClientRect();
              s < l
                ? i.scrollIntoView(!0)
                : s + c > l + a && i.scrollIntoView(!1);
            }
          );
        }),
        (r, o) =>
          z(n).length
            ? (Z(),
              ae('ul', W0, [
                (Z(!0),
                ae(
                  we,
                  null,
                  nn(
                    z(n),
                    (i) => (
                      Z(),
                      Fe(U0, { key: `${i.text}${i.link}`, item: i }, null, 8, [
                        'item'
                      ])
                    )
                  ),
                  128
                ))
              ]))
            : je('v-if', !0)
      );
    }
  }),
  G0 = Re(q0, [['__file', 'SidebarItems.vue']]),
  K0 = { class: 'sidebar' },
  Y0 = oe({
    __name: 'Sidebar',
    setup(e) {
      return (t, n) => (
        Z(),
        ae('aside', K0, [
          _(Al),
          Se(t.$slots, 'top'),
          _(G0),
          Se(t.$slots, 'bottom')
        ])
      );
    }
  }),
  Nu = Re(Y0, [['__file', 'Sidebar.vue']]),
  J0 = oe({
    __name: 'Layout',
    setup(e) {
      const t = Vt(),
        n = At(),
        r = Xe(),
        o = F(() => n.value.navbar !== !1 && r.value.navbar !== !1),
        i = Tl(),
        l = fe(!1),
        a = (w) => {
          l.value = typeof w == 'boolean' ? w : !l.value;
        },
        s = { x: 0, y: 0 },
        c = (w) => {
          (s.x = w.changedTouches[0].clientX),
            (s.y = w.changedTouches[0].clientY);
        },
        u = (w) => {
          const g = w.changedTouches[0].clientX - s.x,
            y = w.changedTouches[0].clientY - s.y;
          Math.abs(g) > Math.abs(y) &&
            Math.abs(g) > 40 &&
            (g > 0 && s.x <= 80 ? a(!0) : a(!1));
        },
        f = F(() => [
          {
            'no-navbar': !o.value,
            'no-sidebar': !i.value.length,
            'sidebar-open': l.value
          },
          n.value.pageClass
        ]);
      let d;
      De(() => {
        d = Sn().afterEach(() => {
          a(!1);
        });
      }),
        zr(() => {
          d();
        });
      const h = Au(),
        m = h.resolve,
        x = h.pending;
      return (w, g) => (
        Z(),
        ae(
          'div',
          {
            class: lt(['theme-container', z(f)]),
            onTouchstart: c,
            onTouchend: u
          },
          [
            Se(w.$slots, 'navbar', {}, () => [
              z(o)
                ? (Z(),
                  Fe(
                    _0,
                    { key: 0, onToggleSidebar: a },
                    {
                      before: Ue(() => [Se(w.$slots, 'navbar-before')]),
                      after: Ue(() => [Se(w.$slots, 'navbar-after')]),
                      _: 3
                    }
                  ))
                : je('v-if', !0)
            ]),
            _e('div', {
              class: 'sidebar-mask',
              onClick: g[0] || (g[0] = (y) => a(!1))
            }),
            Se(w.$slots, 'sidebar', {}, () => [
              _(Nu, null, {
                top: Ue(() => [Se(w.$slots, 'sidebar-top')]),
                bottom: Ue(() => [Se(w.$slots, 'sidebar-bottom')]),
                _: 3
              })
            ]),
            Se(w.$slots, 'page', {}, () => [
              z(n).home
                ? (Z(), Fe(Nv, { key: 0 }))
                : (Z(),
                  Fe(
                    Uo,
                    {
                      key: 1,
                      name: 'fade-slide-y',
                      mode: 'out-in',
                      onBeforeEnter: z(m),
                      onBeforeLeave: z(x)
                    },
                    {
                      default: Ue(() => [
                        (Z(),
                        Fe(
                          Du,
                          { key: z(t).path },
                          {
                            top: Ue(() => [Se(w.$slots, 'page-top')]),
                            'content-top': Ue(() => [
                              Se(w.$slots, 'page-content-top')
                            ]),
                            'content-bottom': Ue(() => [
                              Se(w.$slots, 'page-content-bottom')
                            ]),
                            bottom: Ue(() => [Se(w.$slots, 'page-bottom')]),
                            _: 3
                          }
                        ))
                      ]),
                      _: 3
                    },
                    8,
                    ['onBeforeEnter', 'onBeforeLeave']
                  ))
            ])
          ],
          34
        )
      );
    }
  }),
  Q0 = Re(J0, [['__file', 'Layout.vue']]),
  Z0 = { class: 'theme-container' },
  X0 = { class: 'page' },
  eb = { class: 'theme-default-content' },
  tb = _e('h1', null, '404', -1),
  nb = oe({
    __name: 'NotFound',
    setup(e) {
      var a, s, c;
      const t = Wr(),
        n = Xe(),
        r = (a = n.value.notFound) != null ? a : ['Not Found'],
        o = () => r[Math.floor(Math.random() * r.length)],
        i = (s = n.value.home) != null ? s : t.value,
        l = (c = n.value.backToHome) != null ? c : 'Back to home';
      return (u, f) => {
        const d = $t('RouterLink');
        return (
          Z(),
          ae('div', Z0, [
            _e('main', X0, [
              _e('div', eb, [
                tb,
                _e('blockquote', null, He(o()), 1),
                _(
                  d,
                  { to: z(i) },
                  { default: Ue(() => [it(He(z(l)), 1)]), _: 1 },
                  8,
                  ['to']
                )
              ])
            ])
          ])
        );
      };
    }
  }),
  rb = Re(nb, [['__file', 'NotFound.vue']]);
const ob = ln({
    enhance({ app: e, router: t }) {
      e.component('Badge', _g),
        e.component('CodeGroup', xg),
        e.component('CodeGroupItem', Eg),
        e.component('AutoLinkExternalIcon', () => {
          const r = e.component('ExternalLinkIcon');
          return r ? ve(r) : null;
        }),
        e.component('NavbarSearch', () => {
          const r = e.component('Docsearch') || e.component('SearchBox');
          return r ? ve(r) : null;
        });
      const n = t.options.scrollBehavior;
      t.options.scrollBehavior = async (...r) => (await Au().wait(), n(...r));
    },
    setup() {
      cv(), dv();
    },
    layouts: { Layout: Q0, NotFound: rb }
  }),
  ib = (e) =>
    e instanceof Element
      ? document.activeElement === e &&
        (['TEXTAREA', 'SELECT', 'INPUT'].includes(e.tagName) ||
          e.hasAttribute('contenteditable'))
      : !1,
  lb = (e, t) =>
    t.some((n) => {
      if (ke(n)) return n === e.key;
      const { key: r, ctrl: o = !1, shift: i = !1, alt: l = !1 } = n;
      return (
        r === e.key && o === e.ctrlKey && i === e.shiftKey && l === e.altKey
      );
    }),
  ab = /[^\x00-\x7F]/,
  sb = (e) =>
    e
      .split(/\s+/g)
      .map((t) => t.trim())
      .filter((t) => !!t),
  ds = (e) => e.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'),
  hs = (e, t) => {
    const n = t.join(' '),
      r = sb(e);
    if (ab.test(e)) return r.some((l) => n.toLowerCase().indexOf(l) > -1);
    const o = e.endsWith(' ');
    return new RegExp(
      r
        .map((l, a) =>
          r.length === a + 1 && !o
            ? `(?=.*\\b${ds(l)})`
            : `(?=.*\\b${ds(l)}\\b)`
        )
        .join('') + '.+',
      'gi'
    ).test(n);
  },
  cb = ({ input: e, hotKeys: t }) => {
    if (t.value.length === 0) return;
    const n = (r) => {
      !e.value ||
        (lb(r, t.value) &&
          !ib(r.target) &&
          (r.preventDefault(), e.value.focus()));
    };
    De(() => {
      document.addEventListener('keydown', n);
    }),
      rr(() => {
        document.removeEventListener('keydown', n);
      });
  },
  ub = [
    {
      title: 'ArcGIS',
      headers: [],
      path: '/arcgis/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '',
      headers: [
        {
          level: 2,
          title: '清除 HTML 页面不缓存的几种方式',
          slug: '清除-html-页面不缓存的几种方式',
          link: '#清除-html-页面不缓存的几种方式',
          children: [
            {
              level: 3,
              title: '通过在 <meta /> 标签清除缓存',
              slug: '通过在-meta-标签清除缓存',
              link: '#通过在-meta-标签清除缓存',
              children: []
            },
            {
              level: 3,
              title: '在 java 中添加如下代码',
              slug: '在-java-中添加如下代码',
              link: '#在-java-中添加如下代码',
              children: []
            },
            {
              level: 3,
              title: 'Firefox 火狐浏览器 web 开发调试开启强制刷新缓存模式',
              slug: 'firefox-火狐浏览器-web-开发调试开启强制刷新缓存模式',
              link: '#firefox-火狐浏览器-web-开发调试开启强制刷新缓存模式',
              children: []
            }
          ]
        }
      ],
      path: '/browser/cache.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '',
      headers: [
        {
          level: 2,
          title: 'URL 字符转义的几种方式',
          slug: 'url-字符转义的几种方式',
          link: '#url-字符转义的几种方式',
          children: []
        },
        {
          level: 2,
          title: '常用特殊字符',
          slug: '常用特殊字符',
          link: '#常用特殊字符',
          children: []
        },
        {
          level: 2,
          title: 'encodeURI() 和 decodeURI()',
          slug: 'encodeuri-和-decodeuri',
          link: '#encodeuri-和-decodeuri',
          children: []
        },
        {
          level: 2,
          title: 'encodeURIComponent() 和 decodeURIComponent()',
          slug: 'encodeuricomponent-和-decodeuricomponent',
          link: '#encodeuricomponent-和-decodeuricomponent',
          children: []
        },
        { level: 2, title: '总结', slug: '总结', link: '#总结', children: [] }
      ],
      path: '/browser/conversion.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '',
      headers: [],
      path: '/browser/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '介绍',
      headers: [],
      path: '/css/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '指南',
      headers: [],
      path: '/guide/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'GIS 地理信息系统',
      headers: [
        { level: 2, title: '起源', slug: '起源', link: '#起源', children: [] },
        {
          level: 2,
          title: '二维数据',
          slug: '二维数据',
          link: '#二维数据',
          children: [
            {
              level: 3,
              title: '栅格数据',
              slug: '栅格数据',
              link: '#栅格数据',
              children: []
            },
            {
              level: 3,
              title: '矢量数据',
              slug: '矢量数据',
              link: '#矢量数据',
              children: []
            }
          ]
        },
        {
          level: 2,
          title: '三维数据',
          slug: '三维数据',
          link: '#三维数据',
          children: [
            {
              level: 3,
              title: '实景三维(倾斜模型)',
              slug: '实景三维-倾斜模型',
              link: '#实景三维-倾斜模型',
              children: []
            },
            {
              level: 3,
              title: '点云模型',
              slug: '点云模型',
              link: '#点云模型',
              children: []
            },
            {
              level: 3,
              title: '地形数据',
              slug: '地形数据',
              link: '#地形数据',
              children: []
            },
            {
              level: 3,
              title: '手工模型',
              slug: '手工模型',
              link: '#手工模型',
              children: []
            }
          ]
        }
      ],
      path: '/gis/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '这是测试',
      headers: [],
      path: '/js/ceshi.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '这是 JS 相关',
      headers: [],
      path: '/js/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'Potree',
      headers: [
        {
          level: 2,
          title: '1. 下载 Potree',
          slug: '_1-下载-potree',
          link: '#_1-下载-potree',
          children: []
        },
        {
          level: 2,
          title: '2. 下载 PotreeDesktop',
          slug: '_2-下载-potreedesktop',
          link: '#_2-下载-potreedesktop',
          children: []
        },
        {
          level: 2,
          title: '3. PotreeDesktop 处理点云数据, Potree 展示',
          slug: '_3-potreedesktop-处理点云数据-potree-展示',
          link: '#_3-potreedesktop-处理点云数据-potree-展示',
          children: []
        }
      ],
      path: '/potree/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '根据矢量轮廓裁剪 tif',
      headers: [
        {
          level: 2,
          title: '添加 TIF 数据',
          slug: '添加-tif-数据',
          link: '#添加-tif-数据',
          children: []
        },
        {
          level: 2,
          title: '添加矢量数据',
          slug: '添加矢量数据',
          link: '#添加矢量数据',
          children: []
        },
        {
          level: 2,
          title: '进行数据处理',
          slug: '进行数据处理',
          link: '#进行数据处理',
          children: []
        }
      ],
      path: '/qgis/cuttif.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'QGIS',
      headers: [
        {
          level: 2,
          title: '如何安装',
          slug: '如何安装',
          link: '#如何安装',
          children: []
        }
      ],
      path: '/qgis/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '介绍',
      headers: [],
      path: '/tools/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'WebGL 介绍',
      headers: [
        {
          level: 2,
          title: 'WebGL 的起源',
          slug: 'webgl-的起源',
          link: '#webgl-的起源',
          children: []
        },
        {
          level: 2,
          title: 'WebGL 的支持度',
          slug: 'webgl-的支持度',
          link: '#webgl-的支持度',
          children: []
        },
        {
          level: 2,
          title: 'OpenGL、WebGL、GLSL 三者的关系',
          slug: 'opengl、webgl、glsl-三者的关系',
          link: '#opengl、webgl、glsl-三者的关系',
          children: [
            {
              level: 3,
              title: 'OpenGL',
              slug: 'opengl',
              link: '#opengl',
              children: []
            },
            {
              level: 3,
              title: 'WebGL',
              slug: 'webgl',
              link: '#webgl',
              children: []
            },
            {
              level: 3,
              title: 'GLSL',
              slug: 'glsl',
              link: '#glsl',
              children: []
            }
          ]
        }
      ],
      path: '/webgl/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'Ceisum 常用坐标',
      headers: [
        {
          level: 2,
          title: '常用坐标系',
          slug: '常用坐标系',
          link: '#常用坐标系',
          children: [
            {
              level: 3,
              title: '平面坐标系(屏幕坐标系)',
              slug: '平面坐标系-屏幕坐标系',
              link: '#平面坐标系-屏幕坐标系',
              children: []
            },
            {
              level: 3,
              title: '地理坐标系(经纬度)',
              slug: '地理坐标系-经纬度',
              link: '#地理坐标系-经纬度',
              children: []
            },
            {
              level: 3,
              title: '笛卡尔空间直角坐标系(世界坐标系)',
              slug: '笛卡尔空间直角坐标系-世界坐标系',
              link: '#笛卡尔空间直角坐标系-世界坐标系',
              children: []
            }
          ]
        },
        {
          level: 2,
          title: '坐标转换',
          slug: '坐标转换',
          link: '#坐标转换',
          children: []
        }
      ],
      path: '/cesium/basic/coordinate.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'Model',
      headers: [],
      path: '/cesium/basic/model.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'Entity 介绍',
      headers: [],
      path: '/cesium/entity/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'Primitive',
      headers: [],
      path: '/cesium/primitive/',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'Cesium',
      headers: [
        {
          level: 2,
          title: 'Cesium 能做什么',
          slug: 'cesium-能做什么',
          link: '#cesium-能做什么',
          children: []
        },
        {
          level: 2,
          title: 'Cesium 的依赖性',
          slug: 'cesium-的依赖性',
          link: '#cesium-的依赖性',
          children: []
        }
      ],
      path: '/cesium/setup/desc.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'Primitive 与 Entity',
      headers: [
        {
          level: 2,
          title: 'Primitive(图元)',
          slug: 'primitive-图元',
          link: '#primitive-图元',
          children: [
            {
              level: 3,
              title: 'Geometry',
              slug: 'geometry',
              link: '#geometry',
              children: []
            },
            {
              level: 3,
              title: 'Appearance',
              slug: 'appearance',
              link: '#appearance',
              children: []
            }
          ]
        },
        {
          level: 2,
          title: 'Entity(实体)',
          slug: 'entity-实体',
          link: '#entity-实体',
          children: []
        },
        {
          level: 2,
          title: '两者区别',
          slug: '两者区别',
          link: '#两者区别',
          children: []
        }
      ],
      path: '/cesium/setup/pore.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '快速上手',
      headers: [
        {
          level: 2,
          title: '下载以及安装 Cesium 源码',
          slug: '下载以及安装-cesium-源码',
          link: '#下载以及安装-cesium-源码',
          children: []
        },
        {
          level: 2,
          title: '启动源码库查看示例以及文档',
          slug: '启动源码库查看示例以及文档',
          link: '#启动源码库查看示例以及文档',
          children: []
        }
      ],
      path: '/cesium/setup/start.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'CSS 盒模型',
      headers: [],
      path: '/css/concept/box.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '选择器',
      headers: [
        {
          level: 2,
          title: '选择器的种类',
          slug: '选择器的种类',
          link: '#选择器的种类',
          children: [
            {
              level: 3,
              title: '基础选择器',
              slug: '基础选择器',
              link: '#基础选择器',
              children: []
            },
            {
              level: 3,
              title: '层次选择器',
              slug: '层次选择器',
              link: '#层次选择器',
              children: []
            },
            {
              level: 3,
              title: '集合选择器',
              slug: '集合选择器',
              link: '#集合选择器',
              children: []
            },
            {
              level: 3,
              title: '结构选择器',
              slug: '结构选择器',
              link: '#结构选择器',
              children: []
            }
          ]
        }
      ],
      path: '/css/concept/select.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '层叠上下文',
      headers: [
        {
          level: 2,
          title: '排列方式',
          slug: '排列方式',
          link: '#排列方式',
          children: [
            {
              level: 3,
              title: '页面文档流',
              slug: '页面文档流',
              link: '#页面文档流',
              children: []
            },
            {
              level: 3,
              title: '脱离文档流',
              slug: '脱离文档流',
              link: '#脱离文档流',
              children: []
            }
          ]
        },
        { level: 2, title: '层叠', slug: '层叠', link: '#层叠', children: [] }
      ],
      path: '/css/concept/stacking.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'flex',
      headers: [
        {
          level: 2,
          title: '基本概念',
          slug: '基本概念',
          link: '#基本概念',
          children: []
        },
        {
          level: 2,
          title: '容器的属性',
          slug: '容器的属性',
          link: '#容器的属性',
          children: [
            {
              level: 3,
              title: 'flex-direction',
              slug: 'flex-direction',
              link: '#flex-direction',
              children: []
            },
            {
              level: 3,
              title: 'flex-wrap',
              slug: 'flex-wrap',
              link: '#flex-wrap',
              children: []
            },
            {
              level: 3,
              title: 'flex-flow',
              slug: 'flex-flow',
              link: '#flex-flow',
              children: []
            },
            {
              level: 3,
              title: 'justify-content',
              slug: 'justify-content',
              link: '#justify-content',
              children: []
            },
            {
              level: 3,
              title: 'align-items',
              slug: 'align-items',
              link: '#align-items',
              children: []
            },
            {
              level: 3,
              title: 'align-content',
              slug: 'align-content',
              link: '#align-content',
              children: []
            }
          ]
        },
        {
          level: 2,
          title: '项目(成员)的属性',
          slug: '项目-成员-的属性',
          link: '#项目-成员-的属性',
          children: [
            {
              level: 3,
              title: 'order',
              slug: 'order',
              link: '#order',
              children: []
            },
            {
              level: 3,
              title: 'flex-grow',
              slug: 'flex-grow',
              link: '#flex-grow',
              children: []
            },
            {
              level: 3,
              title: 'flex-shrink',
              slug: 'flex-shrink',
              link: '#flex-shrink',
              children: []
            },
            {
              level: 3,
              title: 'flex-basis',
              slug: 'flex-basis',
              link: '#flex-basis',
              children: []
            },
            {
              level: 3,
              title: 'flex',
              slug: 'flex-1',
              link: '#flex-1',
              children: []
            },
            {
              level: 3,
              title: 'align-self',
              slug: 'align-self',
              link: '#align-self',
              children: []
            }
          ]
        }
      ],
      path: '/css/props/flex.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'grid',
      headers: [
        {
          level: 2,
          title: 'Flex 布局 和 Grid 布局的区别',
          slug: 'flex-布局-和-grid-布局的区别',
          link: '#flex-布局-和-grid-布局的区别',
          children: []
        },
        {
          level: 2,
          title: '基本概念',
          slug: '基本概念',
          link: '#基本概念',
          children: [
            {
              level: 3,
              title: '容器和项目',
              slug: '容器和项目',
              link: '#容器和项目',
              children: []
            },
            {
              level: 3,
              title: '行，列，单元格',
              slug: '行-列-单元格',
              link: '#行-列-单元格',
              children: []
            },
            {
              level: 3,
              title: '网格线',
              slug: '网格线',
              link: '#网格线',
              children: []
            }
          ]
        },
        {
          level: 2,
          title: '容器属性',
          slug: '容器属性',
          link: '#容器属性',
          children: [
            {
              level: 3,
              title: 'display: grid',
              slug: 'display-grid',
              link: '#display-grid',
              children: []
            },
            {
              level: 3,
              title: 'grid-template-columns，grid-template-rows',
              slug: 'grid-template-columns-grid-template-rows',
              link: '#grid-template-columns-grid-template-rows',
              children: []
            },
            {
              level: 3,
              title: 'grid-gap，grid-row-gap，grid-column-gap',
              slug: 'grid-gap-grid-row-gap-grid-column-gap',
              link: '#grid-gap-grid-row-gap-grid-column-gap',
              children: []
            },
            {
              level: 3,
              title: 'grid-template-areas，grid-area',
              slug: 'grid-template-areas-grid-area',
              link: '#grid-template-areas-grid-area',
              children: []
            },
            {
              level: 3,
              title: 'grid-auto-flow',
              slug: 'grid-auto-flow',
              link: '#grid-auto-flow',
              children: []
            },
            {
              level: 3,
              title: 'justify-items，align-items，place-items',
              slug: 'justify-items-align-items-place-items',
              link: '#justify-items-align-items-place-items',
              children: []
            },
            {
              level: 3,
              title: 'justify-content，align-content，place-content',
              slug: 'justify-content-align-content-place-content',
              link: '#justify-content-align-content-place-content',
              children: []
            },
            {
              level: 3,
              title: 'grid-auto-columns，grid-auto-rows',
              slug: 'grid-auto-columns-grid-auto-rows',
              link: '#grid-auto-columns-grid-auto-rows',
              children: []
            }
          ]
        },
        {
          level: 2,
          title: '项目属性',
          slug: '项目属性',
          link: '#项目属性',
          children: [
            {
              level: 3,
              title:
                'grid-column-start，grid-column-end，grid-column，grid-row-start，grid-row-end，grid-row',
              slug: 'grid-column-start-grid-column-end-grid-column-grid-row-start-grid-row-end-grid-row',
              link: '#grid-column-start-grid-column-end-grid-column-grid-row-start-grid-row-end-grid-row',
              children: []
            },
            {
              level: 3,
              title: 'grid-area',
              slug: 'grid-area',
              link: '#grid-area',
              children: []
            },
            {
              level: 3,
              title: 'justify-self，align-self，place-self',
              slug: 'justify-self-align-self-place-self',
              link: '#justify-self-align-self-place-self',
              children: []
            }
          ]
        }
      ],
      path: '/css/props/grid.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '比例尺和分辨率',
      headers: [
        {
          level: 2,
          title: '比例尺',
          slug: '比例尺',
          link: '#比例尺',
          children: []
        },
        {
          level: 2,
          title: '分辨率',
          slug: '分辨率',
          link: '#分辨率',
          children: [
            {
              level: 3,
              title: '像元',
              slug: '像元',
              link: '#像元',
              children: []
            }
          ]
        },
        {
          level: 2,
          title: '例子：计算 tif 的分辨率和比例尺',
          slug: '例子-计算-tif-的分辨率和比例尺',
          link: '#例子-计算-tif-的分辨率和比例尺',
          children: [
            {
              level: 3,
              title: '准备工作',
              slug: '准备工作',
              link: '#准备工作',
              children: []
            },
            {
              level: 3,
              title: '在 ArcGis 中展示数据',
              slug: '在-arcgis-中展示数据',
              link: '#在-arcgis-中展示数据',
              children: []
            },
            {
              level: 3,
              title: 'tif 图像投影转换',
              slug: 'tif-图像投影转换',
              link: '#tif-图像投影转换',
              children: []
            },
            {
              level: 3,
              title: '得出分辨率并计算比例尺',
              slug: '得出分辨率并计算比例尺',
              link: '#得出分辨率并计算比例尺',
              children: []
            }
          ]
        }
      ],
      path: '/gis/basic/resolution.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'S3M',
      headers: [
        {
          level: 2,
          title: 'S3M 与 OSGB',
          slug: 's3m-与-osgb',
          link: '#s3m-与-osgb',
          children: []
        },
        {
          level: 2,
          title: 'S3M 与 3D Tiles',
          slug: 's3m-与-3d-tiles',
          link: '#s3m-与-3d-tiles',
          children: []
        },
        {
          level: 2,
          title: 'S3M 的看法',
          slug: 's3m-的看法',
          link: '#s3m-的看法',
          children: []
        }
      ],
      path: '/gis/basic/s3m.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '正射影像',
      headers: [
        {
          level: 2,
          title: '正射影像的缺点',
          slug: '正射影像的缺点',
          link: '#正射影像的缺点',
          children: [
            {
              level: 3,
              title: '解决方式',
              slug: '解决方式',
              link: '#解决方式',
              children: []
            }
          ]
        }
      ],
      path: '/gis/data/ortho.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '卫星影像',
      headers: [
        {
          level: 2,
          title: '卫星影像数据格式',
          slug: '卫星影像数据格式',
          link: '#卫星影像数据格式',
          children: []
        },
        {
          level: 2,
          title: '卫星地图地分辨率',
          slug: '卫星地图地分辨率',
          link: '#卫星地图地分辨率',
          children: []
        }
      ],
      path: '/gis/data/satellite.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '倾斜摄影介绍',
      headers: [
        {
          level: 2,
          title: '倾斜摄影和传统影像有什么区别',
          slug: '倾斜摄影和传统影像有什么区别',
          link: '#倾斜摄影和传统影像有什么区别',
          children: []
        },
        {
          level: 2,
          title: '倾斜摄影技术特点',
          slug: '倾斜摄影技术特点',
          link: '#倾斜摄影技术特点',
          children: []
        },
        {
          level: 2,
          title: '倾斜摄影的技术本质',
          slug: '倾斜摄影的技术本质',
          link: '#倾斜摄影的技术本质',
          children: []
        },
        {
          level: 2,
          title: '倾斜摄影的“破洞”现象',
          slug: '倾斜摄影的-破洞-现象',
          link: '#倾斜摄影的-破洞-现象',
          children: []
        }
      ],
      path: '/gis/data/tilt.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '3dTiles 格式介绍',
      headers: [
        {
          level: 2,
          title: '3D Tiles 总览',
          slug: '_3d-tiles-总览',
          link: '#_3d-tiles-总览',
          children: []
        },
        {
          level: 2,
          title: 'tileset.json 文件结构',
          slug: 'tileset-json-文件结构',
          link: '#tileset-json-文件结构',
          children: [
            {
              level: 3,
              title: 'boundingVolume',
              slug: 'boundingvolume',
              link: '#boundingvolume',
              children: []
            },
            {
              level: 3,
              title: 'geometricError',
              slug: 'geometricerror',
              link: '#geometricerror',
              children: []
            },
            {
              level: 3,
              title: 'refine',
              slug: 'refine',
              link: '#refine',
              children: []
            },
            {
              level: 3,
              title: 'content',
              slug: 'content',
              link: '#content',
              children: []
            },
            {
              level: 3,
              title: 'children',
              slug: 'children',
              link: '#children',
              children: []
            }
          ]
        }
      ],
      path: '/gis/ogc/3dtiles.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'KML 文件解析',
      headers: [
        {
          level: 2,
          title: 'KML 概述',
          slug: 'kml-概述',
          link: '#kml-概述',
          children: []
        },
        {
          level: 2,
          title: 'KML 代码解析',
          slug: 'kml-代码解析',
          link: '#kml-代码解析',
          children: []
        },
        {
          level: 2,
          title: 'KML 和 KMZ 文件',
          slug: 'kml-和-kmz-文件',
          link: '#kml-和-kmz-文件',
          children: []
        },
        {
          level: 2,
          title: 'js 在线解析 KML 和 KMZ 文件',
          slug: 'js-在线解析-kml-和-kmz-文件',
          link: '#js-在线解析-kml-和-kmz-文件',
          children: [
            {
              level: 3,
              title: 'KML 文件',
              slug: 'kml-文件',
              link: '#kml-文件',
              children: []
            },
            {
              level: 3,
              title: 'KMZ 文件',
              slug: 'kmz-文件',
              link: '#kmz-文件',
              children: []
            }
          ]
        }
      ],
      path: '/gis/ogc/kmlorkmz.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'OGC',
      headers: [
        {
          level: 2,
          title: 'OGC 标准',
          slug: 'ogc-标准',
          link: '#ogc-标准',
          children: []
        }
      ],
      path: '/gis/ogc/ogc.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'WCS',
      headers: [],
      path: '/gis/ogc/wcs.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'WMS',
      headers: [
        {
          level: 2,
          title: '请求类型',
          slug: '请求类型',
          link: '#请求类型',
          children: [
            {
              level: 3,
              title: 'GetCapabilities',
              slug: 'getcapabilities',
              link: '#getcapabilities',
              children: []
            },
            {
              level: 3,
              title: 'GetMap',
              slug: 'getmap',
              link: '#getmap',
              children: []
            },
            {
              level: 3,
              title: 'GetFeatureInfo',
              slug: 'getfeatureinfo',
              link: '#getfeatureinfo',
              children: []
            }
          ]
        }
      ],
      path: '/gis/ogc/wms.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'WMTS',
      headers: [],
      path: '/gis/ogc/wmts.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'WPS',
      headers: [],
      path: '/gis/ogc/wps.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '',
      headers: [
        {
          level: 2,
          title: '自定义天空盒',
          slug: '自定义天空盒',
          link: '#自定义天空盒',
          children: [
            {
              level: 3,
              title: '准备天空盒图片',
              slug: '准备天空盒图片',
              link: '#准备天空盒图片',
              children: []
            },
            {
              level: 3,
              title: '加载天空盒',
              slug: '加载天空盒',
              link: '#加载天空盒',
              children: []
            },
            {
              level: 3,
              title: '解决加载顺序导致自定义失效问题',
              slug: '解决加载顺序导致自定义失效问题',
              link: '#解决加载顺序导致自定义失效问题',
              children: []
            }
          ]
        }
      ],
      path: '/potree/basic/skybox.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '坐标系',
      headers: [
        {
          level: 2,
          title: '创建四边形',
          slug: '创建四边形',
          link: '#创建四边形',
          children: []
        },
        {
          level: 2,
          title: '创建坐标轴',
          slug: '创建坐标轴',
          link: '#创建坐标轴',
          children: []
        },
        { level: 2, title: '示例', slug: '示例', link: '#示例', children: [] }
      ],
      path: '/three/start/axis.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'THREE.JS',
      headers: [],
      path: '/three/start/desc.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '光源',
      headers: [
        {
          level: 2,
          title: '受光照的影响的材质',
          slug: '受光照的影响的材质',
          link: '#受光照的影响的材质',
          children: []
        },
        {
          level: 2,
          title: '光源简介',
          slug: '光源简介',
          link: '#光源简介',
          children: []
        },
        { level: 2, title: '示例', slug: '示例', link: '#示例', children: [] }
      ],
      path: '/three/start/light.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '轨道控制器',
      headers: [
        {
          level: 2,
          title: '初始化控制器',
          slug: '初始化控制器',
          link: '#初始化控制器',
          children: []
        },
        {
          level: 2,
          title: '交互方式',
          slug: '交互方式',
          link: '#交互方式',
          children: []
        },
        {
          level: 2,
          title: '添加渲染器',
          slug: '添加渲染器',
          link: '#添加渲染器',
          children: []
        },
        { level: 2, title: '示例', slug: '示例', link: '#示例', children: [] }
      ],
      path: '/three/start/orbitControls.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '起步',
      headers: [
        {
          level: 2,
          title: '版本选择',
          slug: '版本选择',
          link: '#版本选择',
          children: []
        },
        {
          level: 2,
          title: '下载及启动',
          slug: '下载及启动',
          link: '#下载及启动',
          children: []
        }
      ],
      path: '/three/start/setup.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '3D 场景',
      headers: [
        {
          level: 2,
          title: '场景(Scene)',
          slug: '场景-scene',
          link: '#场景-scene',
          children: []
        },
        {
          level: 2,
          title: '相机(Camera)',
          slug: '相机-camera',
          link: '#相机-camera',
          children: []
        },
        {
          level: 2,
          title: '渲染器(Renderer)',
          slug: '渲染器-renderer',
          link: '#渲染器-renderer',
          children: []
        },
        { level: 2, title: '示例', slug: '示例', link: '#示例', children: [] }
      ],
      path: '/three/start/start.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '用 stats 查看渲染帧率',
      headers: [],
      path: '/three/start/stats.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '使用 husky + lint-staged + commitlint + commitizen 代码提交校验',
      headers: [
        { level: 2, title: '工具', slug: '工具', link: '#工具', children: [] },
        {
          level: 2,
          title: '流程',
          slug: '流程',
          link: '#流程',
          children: [
            {
              level: 3,
              title: '1.安装 husky',
              slug: '_1-安装-husky',
              link: '#_1-安装-husky',
              children: []
            },
            {
              level: 3,
              title: '2.安装 lint-staged 并添加好配置',
              slug: '_2-安装-lint-staged-并添加好配置',
              link: '#_2-安装-lint-staged-并添加好配置',
              children: []
            },
            {
              level: 3,
              title: '3.安装提交信息校验依赖 commitlint',
              slug: '_3-安装提交信息校验依赖-commitlint',
              link: '#_3-安装提交信息校验依赖-commitlint',
              children: []
            },
            {
              level: 3,
              title:
                '4.安装辅助提交依赖，以及自定义提交信息 commitzen + commitlint-config-cz + cz-customizable',
              slug: '_4-安装辅助提交依赖-以及自定义提交信息-commitzen-commitlint-config-cz-cz-customizable',
              link: '#_4-安装辅助提交依赖-以及自定义提交信息-commitzen-commitlint-config-cz-cz-customizable',
              children: []
            }
          ]
        },
        { level: 2, title: '总结', slug: '总结', link: '#总结', children: [] }
      ],
      path: '/tools/git/codeverification.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '基础命令',
      headers: [
        {
          level: 2,
          title: '创建仓库',
          slug: '创建仓库',
          link: '#创建仓库',
          children: []
        },
        {
          level: 2,
          title: '添加文件 add',
          slug: '添加文件-add',
          link: '#添加文件-add',
          children: []
        },
        {
          level: 2,
          title: '查看文件状态 status',
          slug: '查看文件状态-status',
          link: '#查看文件状态-status',
          children: []
        },
        {
          level: 2,
          title: '查看文件差异 diff',
          slug: '查看文件差异-diff',
          link: '#查看文件差异-diff',
          children: []
        },
        {
          level: 2,
          title: '提交更新 commit',
          slug: '提交更新-commit',
          link: '#提交更新-commit',
          children: []
        },
        {
          level: 2,
          title: '移除文件 rm',
          slug: '移除文件-rm',
          link: '#移除文件-rm',
          children: []
        },
        {
          level: 2,
          title: '查看提交历史 log',
          slug: '查看提交历史-log',
          link: '#查看提交历史-log',
          children: [
            {
              level: 3,
              title: '限制输出长度',
              slug: '限制输出长度',
              link: '#限制输出长度',
              children: []
            }
          ]
        },
        {
          level: 2,
          title: '撤销操作 restore',
          slug: '撤销操作-restore',
          link: '#撤销操作-restore',
          children: []
        },
        {
          level: 2,
          title: '标签 tag',
          slug: '标签-tag',
          link: '#标签-tag',
          children: []
        },
        {
          level: 2,
          title: '分支 branch',
          slug: '分支-branch',
          link: '#分支-branch',
          children: []
        },
        {
          level: 2,
          title: '操作远程仓库 remote',
          slug: '操作远程仓库-remote',
          link: '#操作远程仓库-remote',
          children: []
        },
        {
          level: 2,
          title: '回退 reset',
          slug: '回退-reset',
          link: '#回退-reset',
          children: []
        }
      ],
      path: '/tools/git/command.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'git 换行符 CRLF 和 LF',
      headers: [
        {
          level: 2,
          title: 'Git 全局配置',
          slug: 'git-全局配置',
          link: '#git-全局配置',
          children: []
        },
        {
          level: 2,
          title: 'Git 项目级文件配置',
          slug: 'git-项目级文件配置',
          link: '#git-项目级文件配置',
          children: []
        }
      ],
      path: '/tools/git/crlforlf.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '配置 SSH key',
      headers: [
        {
          level: 2,
          title: '配置全局 git 用户名和邮箱',
          slug: '配置全局-git-用户名和邮箱',
          link: '#配置全局-git-用户名和邮箱',
          children: []
        },
        {
          level: 2,
          title: '生成 ssh key',
          slug: '生成-ssh-key',
          link: '#生成-ssh-key',
          children: [
            {
              level: 3,
              title: '检查 ssh keys 是否存在',
              slug: '检查-ssh-keys-是否存在',
              link: '#检查-ssh-keys-是否存在',
              children: []
            },
            {
              level: 3,
              title: '生成新的 ssh key',
              slug: '生成新的-ssh-key',
              link: '#生成新的-ssh-key',
              children: []
            },
            {
              level: 3,
              title: '获取 ssh key',
              slug: '获取-ssh-key',
              link: '#获取-ssh-key',
              children: []
            }
          ]
        },
        {
          level: 2,
          title: '在 Gitee(码云) 和 Github 上的应用',
          slug: '在-gitee-码云-和-github-上的应用',
          link: '#在-gitee-码云-和-github-上的应用',
          children: [
            {
              level: 3,
              title: 'Gitee',
              slug: 'gitee',
              link: '#gitee',
              children: []
            },
            {
              level: 3,
              title: 'Github',
              slug: 'github',
              link: '#github',
              children: []
            }
          ]
        }
      ],
      path: '/tools/git/sshkey.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'dat.Gui',
      headers: [
        {
          level: 2,
          title: '下载及安装',
          slug: '下载及安装',
          link: '#下载及安装',
          children: []
        },
        {
          level: 2,
          title: '快速上手',
          slug: '快速上手',
          link: '#快速上手',
          children: [
            {
              level: 3,
              title: '参数以及函数',
              slug: '参数以及函数',
              link: '#参数以及函数',
              children: []
            },
            {
              level: 3,
              title: '数字类型',
              slug: '数字类型',
              link: '#数字类型',
              children: []
            },
            {
              level: 3,
              title: '颜色控件',
              slug: '颜色控件',
              link: '#颜色控件',
              children: []
            },
            {
              level: 3,
              title: '下拉框控件',
              slug: '下拉框控件',
              link: '#下拉框控件',
              children: []
            }
          ]
        },
        {
          level: 2,
          title: '参数',
          slug: '参数',
          link: '#参数',
          children: [
            {
              level: 3,
              title: 'gui.closeOnTop： Boolean',
              slug: 'gui-closeontop-boolean',
              link: '#gui-closeontop-boolean',
              children: []
            },
            {
              level: 3,
              title: 'gui.preset：String',
              slug: 'gui-preset-string',
              link: '#gui-preset-string',
              children: []
            },
            {
              level: 3,
              title: 'gui.width：Number',
              slug: 'gui-width-number',
              link: '#gui-width-number',
              children: []
            },
            {
              level: 3,
              title: 'gui.name：String',
              slug: 'gui-name-string',
              link: '#gui-name-string',
              children: []
            },
            {
              level: 3,
              title: 'gui.closed：Boolean',
              slug: 'gui-closed-boolean',
              link: '#gui-closed-boolean',
              children: []
            },
            {
              level: 3,
              title: 'gui.load：Object',
              slug: 'gui-load-object',
              link: '#gui-load-object',
              children: []
            },
            {
              level: 3,
              title: 'gui.useLocalStorage：Boolean',
              slug: 'gui-uselocalstorage-boolean',
              link: '#gui-uselocalstorage-boolean',
              children: []
            },
            {
              level: 3,
              title:
                'gui.add(object, property, [min], [max], [step]) ⇒ Controller',
              slug: 'gui-add-object-property-min-max-step-⇒-controller',
              link: '#gui-add-object-property-min-max-step-⇒-controller',
              children: []
            },
            {
              level: 3,
              title: 'gui.remove(Controller)',
              slug: 'gui-remove-controller',
              link: '#gui-remove-controller',
              children: []
            },
            {
              level: 3,
              title: 'gui.destroy()',
              slug: 'gui-destroy',
              link: '#gui-destroy',
              children: []
            },
            {
              level: 3,
              title: 'gui.addFolder(name) ⇒ dat.gui.GUI',
              slug: 'gui-addfolder-name-⇒-dat-gui-gui',
              link: '#gui-addfolder-name-⇒-dat-gui-gui',
              children: []
            },
            {
              level: 3,
              title: 'gui.removeFolder(FolderGUI)',
              slug: 'gui-removefolder-foldergui',
              link: '#gui-removefolder-foldergui',
              children: []
            },
            {
              level: 3,
              title: 'gui.open()',
              slug: 'gui-open',
              link: '#gui-open',
              children: []
            },
            {
              level: 3,
              title: 'gui.close()',
              slug: 'gui-close',
              link: '#gui-close',
              children: []
            }
          ]
        }
      ],
      path: '/tools/other/datgui.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'Prettier',
      headers: [
        { level: 2, title: '使用', slug: '使用', link: '#使用', children: [] },
        {
          level: 2,
          title: '规则说明',
          slug: '规则说明',
          link: '#规则说明',
          children: [
            {
              level: 3,
              title: 'Print Width',
              slug: 'print-width',
              link: '#print-width',
              children: []
            },
            {
              level: 3,
              title: 'Tab Width',
              slug: 'tab-width',
              link: '#tab-width',
              children: []
            },
            {
              level: 3,
              title: 'UseTabs',
              slug: 'usetabs',
              link: '#usetabs',
              children: []
            },
            {
              level: 3,
              title: 'Semi',
              slug: 'semi',
              link: '#semi',
              children: []
            },
            {
              level: 3,
              title: 'Quote',
              slug: 'quote',
              link: '#quote',
              children: []
            },
            {
              level: 3,
              title: 'Quote Props',
              slug: 'quote-props',
              link: '#quote-props',
              children: []
            },
            {
              level: 3,
              title: 'JSX Quotes',
              slug: 'jsx-quotes',
              link: '#jsx-quotes',
              children: []
            },
            {
              level: 3,
              title: 'Trailing Commas',
              slug: 'trailing-commas',
              link: '#trailing-commas',
              children: []
            },
            {
              level: 3,
              title: 'Bracket Spacing',
              slug: 'bracket-spacing',
              link: '#bracket-spacing',
              children: []
            },
            {
              level: 3,
              title: 'Bracket Line',
              slug: 'bracket-line',
              link: '#bracket-line',
              children: []
            },
            {
              level: 3,
              title: 'Arrow Function Parentheses',
              slug: 'arrow-function-parentheses',
              link: '#arrow-function-parentheses',
              children: []
            },
            {
              level: 3,
              title: 'Range',
              slug: 'range',
              link: '#range',
              children: []
            },
            {
              level: 3,
              title: 'Parser',
              slug: 'parser',
              link: '#parser',
              children: []
            },
            {
              level: 3,
              title: 'File Path',
              slug: 'file-path',
              link: '#file-path',
              children: []
            },
            {
              level: 3,
              title: 'Require Pragma',
              slug: 'require-pragma',
              link: '#require-pragma',
              children: []
            },
            {
              level: 3,
              title: 'Insert Pragma',
              slug: 'insert-pragma',
              link: '#insert-pragma',
              children: []
            },
            {
              level: 3,
              title: 'Prose Wrap',
              slug: 'prose-wrap',
              link: '#prose-wrap',
              children: []
            },
            {
              level: 3,
              title: 'HTML Whitespace Sensitivity',
              slug: 'html-whitespace-sensitivity',
              link: '#html-whitespace-sensitivity',
              children: []
            },
            {
              level: 3,
              title: 'Vue files script and style tags indentation',
              slug: 'vue-files-script-and-style-tags-indentation',
              link: '#vue-files-script-and-style-tags-indentation',
              children: []
            },
            {
              level: 3,
              title: 'End Of Line',
              slug: 'end-of-line',
              link: '#end-of-line',
              children: []
            },
            {
              level: 3,
              title: 'Embedded Language Formatting',
              slug: 'embedded-language-formatting',
              link: '#embedded-language-formatting',
              children: []
            },
            {
              level: 3,
              title: 'Single Attribute Per Line',
              slug: 'single-attribute-per-line',
              link: '#single-attribute-per-line',
              children: []
            }
          ]
        }
      ],
      path: '/tools/other/prettier.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: 'npm unexpected token .',
      headers: [
        {
          level: 2,
          title: '解决办法',
          slug: '解决办法',
          link: '#解决办法',
          children: [
            {
              level: 3,
              title: '降级版本',
              slug: '降级版本',
              link: '#降级版本',
              children: []
            },
            {
              level: 3,
              title: '更新 nvm 版本',
              slug: '更新-nvm-版本',
              link: '#更新-nvm-版本',
              children: []
            }
          ]
        }
      ],
      path: '/tools/package/npm/unexpected.html',
      pathLocale: '/',
      extraFields: []
    },
    {
      title: '',
      headers: [],
      path: '/404.html',
      pathLocale: '/',
      extraFields: []
    }
  ],
  fb = fe(ub),
  db = () => fb,
  hb = ({ searchIndex: e, routeLocale: t, query: n, maxSuggestions: r }) => {
    const o = F(() => e.value.filter((i) => i.pathLocale === t.value));
    return F(() => {
      const i = n.value.trim().toLowerCase();
      if (!i) return [];
      const l = [],
        a = (s, c) => {
          hs(i, [c.title]) &&
            l.push({
              link: `${s.path}#${c.slug}`,
              title: s.title,
              header: c.title
            });
          for (const u of c.children) {
            if (l.length >= r.value) return;
            a(s, u);
          }
        };
      for (const s of o.value) {
        if (l.length >= r.value) break;
        if (hs(i, [s.title, ...s.extraFields])) {
          l.push({ link: s.path, title: s.title });
          continue;
        }
        for (const c of s.headers) {
          if (l.length >= r.value) break;
          a(s, c);
        }
      }
      return l;
    });
  },
  pb = (e) => {
    const t = fe(0);
    return {
      focusIndex: t,
      focusNext: () => {
        t.value < e.value.length - 1 ? (t.value += 1) : (t.value = 0);
      },
      focusPrev: () => {
        t.value > 0 ? (t.value -= 1) : (t.value = e.value.length - 1);
      }
    };
  },
  mb = oe({
    name: 'SearchBox',
    props: {
      locales: { type: Object, required: !1, default: () => ({}) },
      hotKeys: { type: Array, required: !1, default: () => [] },
      maxSuggestions: { type: Number, required: !1, default: 5 }
    },
    setup(e) {
      const { locales: t, hotKeys: n, maxSuggestions: r } = Mo(e),
        o = Sn(),
        i = Wr(),
        l = db(),
        a = fe(null),
        s = fe(!1),
        c = fe(''),
        u = F(() => {
          var k;
          return (k = t.value[i.value]) != null ? k : {};
        }),
        f = hb({ searchIndex: l, routeLocale: i, query: c, maxSuggestions: r }),
        { focusIndex: d, focusNext: h, focusPrev: m } = pb(f);
      cb({ input: a, hotKeys: n });
      const x = F(() => s.value && !!f.value.length),
        w = () => {
          !x.value || m();
        },
        g = () => {
          !x.value || h();
        },
        y = (k) => {
          if (!x.value) return;
          const A = f.value[k];
          !A ||
            o.push(A.link).then(() => {
              (c.value = ''), (d.value = 0);
            });
        };
      return () =>
        ve('form', { class: 'search-box', role: 'search' }, [
          ve('input', {
            ref: a,
            type: 'search',
            placeholder: u.value.placeholder,
            autocomplete: 'off',
            spellcheck: !1,
            value: c.value,
            onFocus: () => (s.value = !0),
            onBlur: () => (s.value = !1),
            onInput: (k) => (c.value = k.target.value),
            onKeydown: (k) => {
              switch (k.key) {
                case 'ArrowUp': {
                  w();
                  break;
                }
                case 'ArrowDown': {
                  g();
                  break;
                }
                case 'Enter': {
                  k.preventDefault(), y(d.value);
                  break;
                }
              }
            }
          }),
          x.value &&
            ve(
              'ul',
              { class: 'suggestions', onMouseleave: () => (d.value = -1) },
              f.value.map(({ link: k, title: A, header: R }, V) =>
                ve(
                  'li',
                  {
                    class: ['suggestion', { focus: d.value === V }],
                    onMouseenter: () => (d.value = V),
                    onMousedown: () => y(V)
                  },
                  ve('a', { href: k, onClick: (E) => E.preventDefault() }, [
                    ve('span', { class: 'page-title' }, A),
                    R && ve('span', { class: 'page-header' }, `> ${R}`)
                  ])
                )
              )
            )
        ]);
    }
  });
const gb = {},
  vb = ['s', '/'],
  bb = 5,
  yb = ln({
    enhance({ app: e }) {
      e.component('SearchBox', (t) =>
        ve(mb, { locales: gb, hotKeys: vb, maxSuggestions: bb, ...t })
      );
    }
  });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function ps(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function _b(e) {
  var t, n;
  return ps(e) === !1
    ? !1
    : ((t = e.constructor),
      t === void 0
        ? !0
        : ((n = t.prototype),
          !(ps(n) === !1 || n.hasOwnProperty('isPrototypeOf') === !1)));
}
function kr() {
  return (
    (kr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kr.apply(this, arguments)
  );
}
function Hu(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = {},
    i = Object.keys(e);
  for (r = 0; r < i.length; r++) t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
  return o;
}
const xb = { silent: !1, logLevel: 'warn' },
  Cb = ['validator'],
  Bu = Object.prototype,
  zu = Bu.toString,
  wb = Bu.hasOwnProperty,
  Vu = /^\s*function (\w+)/;
function ms(e) {
  var t;
  const n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    const r = n.toString().match(Vu);
    return r ? r[1] : '';
  }
  return '';
}
const En = _b,
  kb = (e) => e;
let Ye = kb;
const Kn = (e, t) => wb.call(e, t),
  Eb =
    Number.isInteger ||
    function (e) {
      return typeof e == 'number' && isFinite(e) && Math.floor(e) === e;
    },
  Yn =
    Array.isArray ||
    function (e) {
      return zu.call(e) === '[object Array]';
    },
  Jn = (e) => zu.call(e) === '[object Function]',
  So = (e) => En(e) && Kn(e, '_vueTypes_name'),
  Uu = (e) =>
    En(e) &&
    (Kn(e, 'type') ||
      ['_vueTypes_name', 'validator', 'default', 'required'].some((t) =>
        Kn(e, t)
      ));
function Il(e, t) {
  return Object.defineProperty(e.bind(t), '__original', { value: e });
}
function Tn(e, t, n = !1) {
  let r,
    o = !0,
    i = '';
  r = En(e) ? e : { type: e };
  const l = So(r) ? r._vueTypes_name + ' - ' : '';
  if (Uu(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || (!r.required && t === void 0))
      return o;
    Yn(r.type)
      ? ((o = r.type.some((a) => Tn(a, t, !0) === !0)),
        (i = r.type.map((a) => ms(a)).join(' or ')))
      : ((i = ms(r)),
        (o =
          i === 'Array'
            ? Yn(t)
            : i === 'Object'
            ? En(t)
            : i === 'String' ||
              i === 'Number' ||
              i === 'Boolean' ||
              i === 'Function'
            ? (function (a) {
                if (a == null) return '';
                const s = a.constructor.toString().match(Vu);
                return s ? s[1] : '';
              })(t) === i
            : t instanceof r.type));
  }
  if (!o) {
    const a = `${l}value "${t}" should be of type "${i}"`;
    return n === !1 ? (Ye(a), !1) : a;
  }
  if (Kn(r, 'validator') && Jn(r.validator)) {
    const a = Ye,
      s = [];
    if (
      ((Ye = (c) => {
        s.push(c);
      }),
      (o = r.validator(t)),
      (Ye = a),
      !o)
    ) {
      const c =
        (s.length > 1 ? '* ' : '') +
        s.join(`
* `);
      return (s.length = 0), n === !1 ? (Ye(c), o) : c;
    }
  }
  return o;
}
function ht(e, t) {
  const n = Object.defineProperties(t, {
      _vueTypes_name: { value: e, writable: !0 },
      isRequired: {
        get() {
          return (this.required = !0), this;
        }
      },
      def: {
        value(o) {
          return o === void 0
            ? (Kn(this, 'default') && delete this.default, this)
            : Jn(o) || Tn(this, o, !0) === !0
            ? ((this.default = Yn(o)
                ? () => [...o]
                : En(o)
                ? () => Object.assign({}, o)
                : o),
              this)
            : (Ye(`${this._vueTypes_name} - invalid default value: "${o}"`),
              this);
        }
      }
    }),
    { validator: r } = n;
  return Jn(r) && (n.validator = Il(r, n)), n;
}
function Lt(e, t) {
  const n = ht(e, t);
  return Object.defineProperty(n, 'validate', {
    value(r) {
      return (
        Jn(this.validator) &&
          Ye(`${
            this._vueTypes_name
          } - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),
        (this.validator = Il(r, this)),
        this
      );
    }
  });
}
function gs(e, t, n) {
  const r = (function (s) {
    const c = {};
    return (
      Object.getOwnPropertyNames(s).forEach((u) => {
        c[u] = Object.getOwnPropertyDescriptor(s, u);
      }),
      Object.defineProperties({}, c)
    );
  })(t);
  if (((r._vueTypes_name = e), !En(n))) return r;
  const { validator: o } = n,
    i = Hu(n, Cb);
  if (Jn(o)) {
    let { validator: s } = r;
    s && (s = (a = (l = s).__original) !== null && a !== void 0 ? a : l),
      (r.validator = Il(
        s
          ? function (c) {
              return s.call(this, c) && o.call(this, c);
            }
          : o,
        r
      ));
  }
  var l, a;
  return Object.assign(r, i);
}
function Go(e) {
  return e.replace(/^(?!\s*$)/gm, '  ');
}
const Ob = () => Lt('any', {}),
  Pb = () => Lt('function', { type: Function }),
  Sb = () => Lt('boolean', { type: Boolean }),
  To = () => Lt('string', { type: String }),
  $l = () => Lt('number', { type: Number }),
  Tb = () => Lt('array', { type: Array }),
  Lb = () => Lt('object', { type: Object }),
  Ab = () => ht('integer', { type: Number, validator: (e) => Eb(e) }),
  Ib = () => ht('symbol', { validator: (e) => typeof e == 'symbol' });
function $b(e, t = 'custom validation failed') {
  if (typeof e != 'function')
    throw new TypeError(
      '[VueTypes error]: You must provide a function as argument'
    );
  return ht(e.name || '<<anonymous function>>', {
    type: null,
    validator(n) {
      const r = e(n);
      return r || Ye(`${this._vueTypes_name} - ${t}`), r;
    }
  });
}
function Rb(e) {
  if (!Yn(e))
    throw new TypeError(
      '[VueTypes error]: You must provide an array as argument.'
    );
  const t = `oneOf - value should be one of "${e.join('", "')}".`,
    n = e.reduce((r, o) => {
      if (o != null) {
        const i = o.constructor;
        r.indexOf(i) === -1 && r.push(i);
      }
      return r;
    }, []);
  return ht('oneOf', {
    type: n.length > 0 ? n : void 0,
    validator(r) {
      const o = e.indexOf(r) !== -1;
      return o || Ye(t), o;
    }
  });
}
function jb(e) {
  if (!Yn(e))
    throw new TypeError(
      '[VueTypes error]: You must provide an array as argument'
    );
  let t = !1,
    n = [];
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (Uu(i)) {
      if (So(i) && i._vueTypes_name === 'oneOf' && i.type) {
        n = n.concat(i.type);
        continue;
      }
      if ((Jn(i.validator) && (t = !0), i.type === !0 || !i.type)) {
        Ye('oneOfType - invalid usage of "true" or "null" as types.');
        continue;
      }
      n = n.concat(i.type);
    } else n.push(i);
  }
  n = n.filter((o, i) => n.indexOf(o) === i);
  const r = n.length > 0 ? n : null;
  return ht(
    'oneOfType',
    t
      ? {
          type: r,
          validator(o) {
            const i = [],
              l = e.some((a) => {
                const s = Tn(
                  So(a) && a._vueTypes_name === 'oneOf' ? a.type || null : a,
                  o,
                  !0
                );
                return typeof s == 'string' && i.push(s), s === !0;
              });
            return (
              l ||
                Ye(`oneOfType - provided value does not match any of the ${
                  i.length
                } passed-in validators:
${Go(
  i.join(`
`)
)}`),
              l
            );
          }
        }
      : { type: r }
  );
}
function Mb(e) {
  return ht('arrayOf', {
    type: Array,
    validator(t) {
      let n = '';
      const r = t.every((o) => ((n = Tn(e, o, !0)), n === !0));
      return (
        r ||
          Ye(`arrayOf - value validation error:
${Go(n)}`),
        r
      );
    }
  });
}
function Fb(e) {
  return ht('instanceOf', { type: e });
}
function Db(e) {
  return ht('objectOf', {
    type: Object,
    validator(t) {
      let n = '';
      const r = Object.keys(t).every((o) => ((n = Tn(e, t[o], !0)), n === !0));
      return (
        r ||
          Ye(`objectOf - value validation error:
${Go(n)}`),
        r
      );
    }
  });
}
function Nb(e) {
  const t = Object.keys(e),
    n = t.filter((o) => {
      var i;
      return !((i = e[o]) === null || i === void 0 || !i.required);
    }),
    r = ht('shape', {
      type: Object,
      validator(o) {
        if (!En(o)) return !1;
        const i = Object.keys(o);
        if (n.length > 0 && n.some((l) => i.indexOf(l) === -1)) {
          const l = n.filter((a) => i.indexOf(a) === -1);
          return (
            Ye(
              l.length === 1
                ? `shape - required property "${l[0]}" is not defined.`
                : `shape - required properties "${l.join(
                    '", "'
                  )}" are not defined.`
            ),
            !1
          );
        }
        return i.every((l) => {
          if (t.indexOf(l) === -1)
            return (
              this._vueTypes_isLoose === !0 ||
              (Ye(
                `shape - shape definition does not include a "${l}" property. Allowed keys: "${t.join(
                  '", "'
                )}".`
              ),
              !1)
            );
          const a = Tn(e[l], o[l], !0);
          return (
            typeof a == 'string' &&
              Ye(`shape - "${l}" property validation error:
 ${Go(a)}`),
            a === !0
          );
        });
      }
    });
  return (
    Object.defineProperty(r, '_vueTypes_isLoose', { writable: !0, value: !1 }),
    Object.defineProperty(r, 'loose', {
      get() {
        return (this._vueTypes_isLoose = !0), this;
      }
    }),
    r
  );
}
const Hb = ['name', 'validate', 'getter'],
  Bb = (() => {
    var e;
    return (
      ((e = class {
        static get any() {
          return Ob();
        }
        static get func() {
          return Pb().def(this.defaults.func);
        }
        static get bool() {
          return Sb().def(this.defaults.bool);
        }
        static get string() {
          return To().def(this.defaults.string);
        }
        static get number() {
          return $l().def(this.defaults.number);
        }
        static get array() {
          return Tb().def(this.defaults.array);
        }
        static get object() {
          return Lb().def(this.defaults.object);
        }
        static get integer() {
          return Ab().def(this.defaults.integer);
        }
        static get symbol() {
          return Ib();
        }
        static get nullable() {
          return { type: null };
        }
        static extend(t) {
          if (Yn(t)) return t.forEach((s) => this.extend(s)), this;
          const { name: n, validate: r = !1, getter: o = !1 } = t,
            i = Hu(t, Hb);
          if (Kn(this, n))
            throw new TypeError(
              `[VueTypes error]: Type "${n}" already defined`
            );
          const { type: l } = i;
          if (So(l))
            return (
              delete i.type,
              Object.defineProperty(
                this,
                n,
                o
                  ? { get: () => gs(n, l, i) }
                  : {
                      value(...s) {
                        const c = gs(n, l, i);
                        return (
                          c.validator &&
                            (c.validator = c.validator.bind(c, ...s)),
                          c
                        );
                      }
                    }
              )
            );
          let a;
          return (
            (a = o
              ? {
                  get() {
                    const s = Object.assign({}, i);
                    return r ? Lt(n, s) : ht(n, s);
                  },
                  enumerable: !0
                }
              : {
                  value(...s) {
                    const c = Object.assign({}, i);
                    let u;
                    return (
                      (u = r ? Lt(n, c) : ht(n, c)),
                      c.validator && (u.validator = c.validator.bind(u, ...s)),
                      u
                    );
                  },
                  enumerable: !0
                }),
            Object.defineProperty(this, n, a)
          );
        }
      }).defaults = {}),
      (e.sensibleDefaults = void 0),
      (e.config = xb),
      (e.custom = $b),
      (e.oneOf = Rb),
      (e.instanceOf = Fb),
      (e.oneOfType = jb),
      (e.arrayOf = Mb),
      (e.objectOf = Db),
      (e.shape = Nb),
      (e.utils = {
        validate: (t, n) => Tn(n, t, !0) === !0,
        toType: (t, n, r = !1) => (r ? Lt(t, n) : ht(t, n))
      }),
      e
    );
  })();
function zb(
  e = {
    func: () => {},
    bool: !0,
    string: '',
    number: 0,
    array: () => [],
    object: () => ({}),
    integer: 0
  }
) {
  var t;
  return (
    ((t = class extends Bb {
      static get sensibleDefaults() {
        return kr({}, this.defaults);
      }
      static set sensibleDefaults(n) {
        this.defaults = n !== !1 ? kr({}, n !== !0 ? n : e) : {};
      }
    }).defaults = kr({}, e)),
    t
  );
}
class Ux extends zb() {}
function qe(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function vs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vs(Object(n), !0).forEach(function (r) {
          qe(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vs(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function on() {
  return (
    (on = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    on.apply(this, arguments)
  );
}
function Di(e) {
  return (
    (Di =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Di(e)
  );
}
var Vb = Array.isArray,
  Ub = function (t) {
    return typeof t == 'string';
  },
  Wb = function (t) {
    return t !== null && Di(t) === 'object';
  };
function mr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == 'function' ? e(t) : e != null ? e : n;
}
function sn() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (!!n) {
      if (Ub(n)) e.push(n);
      else if (Vb(n))
        for (var r = 0; r < n.length; r++) {
          var o = sn(n[r]);
          o && e.push(o);
        }
      else if (Wb(n)) for (var i in n) n[i] && e.push(i);
    }
  }
  return e.join(' ');
}
function qb(e) {
  if (Array.isArray(e)) return e;
}
function Gb(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      o = !0,
      i = !1,
      l,
      a;
    try {
      for (
        n = n.call(e);
        !(o = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t));
        o = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function Ni(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Wu(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Ni(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ni(e, t);
  }
}
function Kb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bs(e, t) {
  return qb(e) || Gb(e, t) || Wu(e, t) || Kb();
}
function Yb(e) {
  if (Array.isArray(e)) return Ni(e);
}
function Jb(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function Qb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ys(e) {
  return Yb(e) || Jb(e) || Wu(e) || Qb();
}
var Zb = function (t, n) {
  var r = ce({}, t);
  return (
    Object.keys(n).forEach(function (o) {
      var i = r[o];
      if (i)
        i.type || i.default
          ? (i.default = n[o])
          : i.def
          ? i.def(n[o])
          : (r[o] = { type: i, default: n[o] });
      else throw new Error('not have '.concat(o, ' prop'));
    }),
    r
  );
};
const Xb = Zb;
function ey(e) {
  return (
    e &&
    (e.type === at ||
      (e.type === we && e.children.length === 0) ||
      (e.type === kn && e.children.trim() === ''))
  );
}
function qu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = [];
  return (
    e.forEach(function (n) {
      Array.isArray(n)
        ? t.push.apply(t, ys(n))
        : (n == null ? void 0 : n.type) === we
        ? t.push.apply(t, ys(qu(n.children)))
        : t.push(n);
    }),
    t.filter(function (n) {
      return !ey(n);
    })
  );
}
var Gu = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return n;
  },
  Ku = function (t) {
    var n = t;
    return (
      (n.install = function (r) {
        r.component(n.displayName || n.name, t);
      }),
      t
    );
  };
function ty(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ko(e, t) {
  if (e == null) return {};
  var n = ty(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
const ny = {
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
var ry = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: !0,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
const oy = ry;
var iy = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
const Yu = iy;
var ly = {
  lang: ce(
    {
      placeholder: 'Select date',
      yearPlaceholder: 'Select year',
      quarterPlaceholder: 'Select quarter',
      monthPlaceholder: 'Select month',
      weekPlaceholder: 'Select week',
      rangePlaceholder: ['Start date', 'End date'],
      rangeYearPlaceholder: ['Start year', 'End year'],
      rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
      rangeMonthPlaceholder: ['Start month', 'End month'],
      rangeWeekPlaceholder: ['Start week', 'End week']
    },
    oy
  ),
  timePickerLocale: ce({}, Yu)
};
const _s = ly;
var ct = '${label} is not a valid ${type}',
  ay = {
    locale: 'en',
    Pagination: ny,
    DatePicker: _s,
    TimePicker: Yu,
    Calendar: _s,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting'
    },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page'
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file'
    },
    Empty: { description: 'No Data' },
    Icon: { icon: 'icon' },
    Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
    PageHeader: { back: 'Back' },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date'
        },
        types: {
          string: ct,
          method: ct,
          array: ct,
          object: ct,
          number: ct,
          date: ct,
          boolean: ct,
          integer: ct,
          float: ct,
          regexp: ct,
          email: ct,
          url: ct,
          hex: ct
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters'
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}'
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}'
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' }
      }
    },
    Image: { preview: 'Preview' }
  };
const Hi = ay,
  Ju = oe({
    compatConfig: { MODE: 3 },
    name: 'LocaleReceiver',
    props: {
      componentName: String,
      defaultLocale: { type: [Object, Function] },
      children: { type: Function }
    },
    setup: function (t, n) {
      var r = n.slots,
        o = Ae('localeData', {}),
        i = F(function () {
          var a = t.componentName,
            s = a === void 0 ? 'global' : a,
            c = t.defaultLocale,
            u = c || Hi[s || 'global'],
            f = o.antLocale,
            d = s && f ? f[s] : {};
          return ce(ce({}, typeof u == 'function' ? u() : u), d || {});
        }),
        l = F(function () {
          var a = o.antLocale,
            s = a && a.locale;
          return a && a.exist && !s ? Hi.locale : s;
        });
      return function () {
        var a = t.children || r.default,
          s = o.antLocale;
        return a == null ? void 0 : a(i.value, l.value, s);
      };
    }
  });
var Qu = function () {
  var t = An('empty', {}),
    n = t.getPrefixCls,
    r = n('empty-img-default');
  return _(
    'svg',
    { class: r, width: '184', height: '152', viewBox: '0 0 184 152' },
    [
      _('g', { fill: 'none', 'fill-rule': 'evenodd' }, [
        _('g', { transform: 'translate(24 31.67)' }, [
          _(
            'ellipse',
            {
              class: ''.concat(r, '-ellipse'),
              cx: '67.797',
              cy: '106.89',
              rx: '67.797',
              ry: '12.668'
            },
            null
          ),
          _(
            'path',
            {
              class: ''.concat(r, '-path-1'),
              d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z'
            },
            null
          ),
          _(
            'path',
            {
              class: ''.concat(r, '-path-2'),
              d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
              transform: 'translate(13.56)'
            },
            null
          ),
          _(
            'path',
            {
              class: ''.concat(r, '-path-3'),
              d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z'
            },
            null
          ),
          _(
            'path',
            {
              class: ''.concat(r, '-path-4'),
              d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z'
            },
            null
          )
        ]),
        _(
          'path',
          {
            class: ''.concat(r, '-path-5'),
            d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z'
          },
          null
        ),
        _(
          'g',
          { class: ''.concat(r, '-g'), transform: 'translate(149.65 15.383)' },
          [
            _(
              'ellipse',
              { cx: '20.654', cy: '3.167', rx: '2.849', ry: '2.815' },
              null
            ),
            _(
              'path',
              { d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' },
              null
            )
          ]
        )
      ])
    ]
  );
};
Qu.PRESENTED_IMAGE_DEFAULT = !0;
const sy = Qu;
var Zu = function () {
  var t = An('empty', {}),
    n = t.getPrefixCls,
    r = n('empty-img-simple');
  return _(
    'svg',
    { class: r, width: '64', height: '41', viewBox: '0 0 64 41' },
    [
      _(
        'g',
        { transform: 'translate(0 1)', fill: 'none', 'fill-rule': 'evenodd' },
        [
          _(
            'ellipse',
            {
              class: ''.concat(r, '-ellipse'),
              fill: '#F5F5F5',
              cx: '32',
              cy: '33',
              rx: '32',
              ry: '7'
            },
            null
          ),
          _(
            'g',
            {
              class: ''.concat(r, '-g'),
              'fill-rule': 'nonzero',
              stroke: '#D9D9D9'
            },
            [
              _(
                'path',
                {
                  d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z'
                },
                null
              ),
              _(
                'path',
                {
                  d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
                  fill: '#FAFAFA',
                  class: ''.concat(r, '-path')
                },
                null
              )
            ]
          )
        ]
      )
    ]
  );
};
Zu.PRESENTED_IMAGE_SIMPLE = !0;
const cy = Zu;
function xs(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Xu(e, t, n) {
  return t && xs(e.prototype, t), n && xs(e, n), e;
}
function uo() {
  return (uo =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
function ef(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
function tf(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = {},
    i = Object.keys(e);
  for (r = 0; r < i.length; r++) t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
  return o;
}
function Cs(e) {
  return (
    ((t = e) != null && typeof t == 'object' && Array.isArray(t) === !1) == 1 &&
    Object.prototype.toString.call(e) === '[object Object]'
  );
  var t;
}
var nf = Object.prototype,
  rf = nf.toString,
  uy = nf.hasOwnProperty,
  of = /^\s*function (\w+)/;
function ws(e) {
  var t,
    n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(of);
    return r ? r[1] : '';
  }
  return '';
}
var On = function (e) {
    var t, n;
    return (
      Cs(e) !== !1 &&
      typeof (t = e.constructor) == 'function' &&
      Cs((n = t.prototype)) !== !1 &&
      n.hasOwnProperty('isPrototypeOf') !== !1
    );
  },
  fy = function (e) {
    return e;
  },
  Qe = fy,
  jr = function (e, t) {
    return uy.call(e, t);
  },
  dy =
    Number.isInteger ||
    function (e) {
      return typeof e == 'number' && isFinite(e) && Math.floor(e) === e;
    },
  Qn =
    Array.isArray ||
    function (e) {
      return rf.call(e) === '[object Array]';
    },
  Zn = function (e) {
    return rf.call(e) === '[object Function]';
  },
  Lo = function (e) {
    return On(e) && jr(e, '_vueTypes_name');
  },
  lf = function (e) {
    return (
      On(e) &&
      (jr(e, 'type') ||
        ['_vueTypes_name', 'validator', 'default', 'required'].some(function (
          t
        ) {
          return jr(e, t);
        }))
    );
  };
function Rl(e, t) {
  return Object.defineProperty(e.bind(t), '__original', { value: e });
}
function Ln(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var o = !0,
    i = '';
  r = On(e) ? e : { type: e };
  var l = Lo(r) ? r._vueTypes_name + ' - ' : '';
  if (lf(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || (!r.required && t === void 0))
      return o;
    Qn(r.type)
      ? ((o = r.type.some(function (f) {
          return Ln(f, t, !0) === !0;
        })),
        (i = r.type
          .map(function (f) {
            return ws(f);
          })
          .join(' or ')))
      : (o =
          (i = ws(r)) === 'Array'
            ? Qn(t)
            : i === 'Object'
            ? On(t)
            : i === 'String' ||
              i === 'Number' ||
              i === 'Boolean' ||
              i === 'Function'
            ? (function (f) {
                if (f == null) return '';
                var d = f.constructor.toString().match(of);
                return d ? d[1] : '';
              })(t) === i
            : t instanceof r.type);
  }
  if (!o) {
    var a = l + 'value "' + t + '" should be of type "' + i + '"';
    return n === !1 ? (Qe(a), !1) : a;
  }
  if (jr(r, 'validator') && Zn(r.validator)) {
    var s = Qe,
      c = [];
    if (
      ((Qe = function (f) {
        c.push(f);
      }),
      (o = r.validator(t)),
      (Qe = s),
      !o)
    ) {
      var u =
        (c.length > 1 ? '* ' : '') +
        c.join(`
* `);
      return (c.length = 0), n === !1 ? (Qe(u), o) : u;
    }
  }
  return o;
}
function mt(e, t) {
  var n = Object.defineProperties(t, {
      _vueTypes_name: { value: e, writable: !0 },
      isRequired: {
        get: function () {
          return (this.required = !0), this;
        }
      },
      def: {
        value: function (o) {
          return o !== void 0 || this.default
            ? Zn(o) || Ln(this, o, !0) === !0
              ? ((this.default = Qn(o)
                  ? function () {
                      return [].concat(o);
                    }
                  : On(o)
                  ? function () {
                      return Object.assign({}, o);
                    }
                  : o),
                this)
              : (Qe(
                  this._vueTypes_name + ' - invalid default value: "' + o + '"'
                ),
                this)
            : this;
        }
      }
    }),
    r = n.validator;
  return Zn(r) && (n.validator = Rl(r, n)), n;
}
function Rt(e, t) {
  var n = mt(e, t);
  return Object.defineProperty(n, 'validate', {
    value: function (r) {
      return (
        Zn(this.validator) &&
          Qe(
            this._vueTypes_name +
              ` - calling .validate() will overwrite the current custom validator function. Validator info:
` +
              JSON.stringify(this)
          ),
        (this.validator = Rl(r, this)),
        this
      );
    }
  });
}
function ks(e, t, n) {
  var r,
    o,
    i =
      ((r = t),
      (o = {}),
      Object.getOwnPropertyNames(r).forEach(function (f) {
        o[f] = Object.getOwnPropertyDescriptor(r, f);
      }),
      Object.defineProperties({}, o));
  if (((i._vueTypes_name = e), !On(n))) return i;
  var l,
    a,
    s = n.validator,
    c = tf(n, ['validator']);
  if (Zn(s)) {
    var u = i.validator;
    u && (u = (a = (l = u).__original) !== null && a !== void 0 ? a : l),
      (i.validator = Rl(
        u
          ? function (f) {
              return u.call(this, f) && s.call(this, f);
            }
          : s,
        i
      ));
  }
  return Object.assign(i, c);
}
function Yo(e) {
  return e.replace(/^(?!\s*$)/gm, '  ');
}
var hy = function () {
    return Rt('any', {});
  },
  py = function () {
    return Rt('function', { type: Function });
  },
  my = function () {
    return Rt('boolean', { type: Boolean });
  },
  gy = function () {
    return Rt('string', { type: String });
  },
  vy = function () {
    return Rt('number', { type: Number });
  },
  by = function () {
    return Rt('array', { type: Array });
  },
  yy = function () {
    return Rt('object', { type: Object });
  },
  _y = function () {
    return mt('integer', {
      type: Number,
      validator: function (e) {
        return dy(e);
      }
    });
  },
  xy = function () {
    return mt('symbol', {
      validator: function (e) {
        return typeof e == 'symbol';
      }
    });
  };
function Cy(e, t) {
  if (
    (t === void 0 && (t = 'custom validation failed'), typeof e != 'function')
  )
    throw new TypeError(
      '[VueTypes error]: You must provide a function as argument'
    );
  return mt(e.name || '<<anonymous function>>', {
    validator: function (n) {
      var r = e(n);
      return r || Qe(this._vueTypes_name + ' - ' + t), r;
    }
  });
}
function wy(e) {
  if (!Qn(e))
    throw new TypeError(
      '[VueTypes error]: You must provide an array as argument.'
    );
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".',
    n = e.reduce(function (r, o) {
      if (o != null) {
        var i = o.constructor;
        r.indexOf(i) === -1 && r.push(i);
      }
      return r;
    }, []);
  return mt('oneOf', {
    type: n.length > 0 ? n : void 0,
    validator: function (r) {
      var o = e.indexOf(r) !== -1;
      return o || Qe(t), o;
    }
  });
}
function ky(e) {
  if (!Qn(e))
    throw new TypeError(
      '[VueTypes error]: You must provide an array as argument'
    );
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (lf(o)) {
      if (Lo(o) && o._vueTypes_name === 'oneOf') {
        n = n.concat(o.type);
        continue;
      }
      if ((Zn(o.validator) && (t = !0), o.type !== !0 && o.type)) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return (
    (n = n.filter(function (i, l) {
      return n.indexOf(i) === l;
    })),
    mt(
      'oneOfType',
      t
        ? {
            type: n,
            validator: function (i) {
              var l = [],
                a = e.some(function (s) {
                  var c = Ln(
                    Lo(s) && s._vueTypes_name === 'oneOf' ? s.type || null : s,
                    i,
                    !0
                  );
                  return typeof c == 'string' && l.push(c), c === !0;
                });
              return (
                a ||
                  Qe(
                    'oneOfType - provided value does not match any of the ' +
                      l.length +
                      ` passed-in validators:
` +
                      Yo(
                        l.join(`
`)
                      )
                  ),
                a
              );
            }
          }
        : { type: n }
    )
  );
}
function Ey(e) {
  return mt('arrayOf', {
    type: Array,
    validator: function (t) {
      var n,
        r = t.every(function (o) {
          return (n = Ln(e, o, !0)) === !0;
        });
      return (
        r ||
          Qe(
            `arrayOf - value validation error:
` + Yo(n)
          ),
        r
      );
    }
  });
}
function Oy(e) {
  return mt('instanceOf', { type: e });
}
function Py(e) {
  return mt('objectOf', {
    type: Object,
    validator: function (t) {
      var n,
        r = Object.keys(t).every(function (o) {
          return (n = Ln(e, t[o], !0)) === !0;
        });
      return (
        r ||
          Qe(
            `objectOf - value validation error:
` + Yo(n)
          ),
        r
      );
    }
  });
}
function Sy(e) {
  var t = Object.keys(e),
    n = t.filter(function (o) {
      var i;
      return !!(!((i = e[o]) === null || i === void 0) && i.required);
    }),
    r = mt('shape', {
      type: Object,
      validator: function (o) {
        var i = this;
        if (!On(o)) return !1;
        var l = Object.keys(o);
        if (
          n.length > 0 &&
          n.some(function (s) {
            return l.indexOf(s) === -1;
          })
        ) {
          var a = n.filter(function (s) {
            return l.indexOf(s) === -1;
          });
          return (
            Qe(
              a.length === 1
                ? 'shape - required property "' + a[0] + '" is not defined.'
                : 'shape - required properties "' +
                    a.join('", "') +
                    '" are not defined.'
            ),
            !1
          );
        }
        return l.every(function (s) {
          if (t.indexOf(s) === -1)
            return (
              i._vueTypes_isLoose === !0 ||
              (Qe(
                'shape - shape definition does not include a "' +
                  s +
                  '" property. Allowed keys: "' +
                  t.join('", "') +
                  '".'
              ),
              !1)
            );
          var c = Ln(e[s], o[s], !0);
          return (
            typeof c == 'string' &&
              Qe(
                'shape - "' +
                  s +
                  `" property validation error:
 ` +
                  Yo(c)
              ),
            c === !0
          );
        });
      }
    });
  return (
    Object.defineProperty(r, '_vueTypes_isLoose', { writable: !0, value: !1 }),
    Object.defineProperty(r, 'loose', {
      get: function () {
        return (this._vueTypes_isLoose = !0), this;
      }
    }),
    r
  );
}
var Pt = (function () {
  function e() {}
  return (
    (e.extend = function (t) {
      var n = this;
      if (Qn(t))
        return (
          t.forEach(function (f) {
            return n.extend(f);
          }),
          this
        );
      var r = t.name,
        o = t.validate,
        i = o !== void 0 && o,
        l = t.getter,
        a = l !== void 0 && l,
        s = tf(t, ['name', 'validate', 'getter']);
      if (jr(this, r))
        throw new TypeError(
          '[VueTypes error]: Type "' + r + '" already defined'
        );
      var c,
        u = s.type;
      return Lo(u)
        ? (delete s.type,
          Object.defineProperty(
            this,
            r,
            a
              ? {
                  get: function () {
                    return ks(r, u, s);
                  }
                }
              : {
                  value: function () {
                    var f,
                      d = ks(r, u, s);
                    return (
                      d.validator &&
                        (d.validator = (f = d.validator).bind.apply(
                          f,
                          [d].concat([].slice.call(arguments))
                        )),
                      d
                    );
                  }
                }
          ))
        : ((c = a
            ? {
                get: function () {
                  var f = Object.assign({}, s);
                  return i ? Rt(r, f) : mt(r, f);
                },
                enumerable: !0
              }
            : {
                value: function () {
                  var f,
                    d,
                    h = Object.assign({}, s);
                  return (
                    (f = i ? Rt(r, h) : mt(r, h)),
                    h.validator &&
                      (f.validator = (d = h.validator).bind.apply(
                        d,
                        [f].concat([].slice.call(arguments))
                      )),
                    f
                  );
                },
                enumerable: !0
              }),
          Object.defineProperty(this, r, c));
    }),
    Xu(e, null, [
      {
        key: 'any',
        get: function () {
          return hy();
        }
      },
      {
        key: 'func',
        get: function () {
          return py().def(this.defaults.func);
        }
      },
      {
        key: 'bool',
        get: function () {
          return my().def(this.defaults.bool);
        }
      },
      {
        key: 'string',
        get: function () {
          return gy().def(this.defaults.string);
        }
      },
      {
        key: 'number',
        get: function () {
          return vy().def(this.defaults.number);
        }
      },
      {
        key: 'array',
        get: function () {
          return by().def(this.defaults.array);
        }
      },
      {
        key: 'object',
        get: function () {
          return yy().def(this.defaults.object);
        }
      },
      {
        key: 'integer',
        get: function () {
          return _y().def(this.defaults.integer);
        }
      },
      {
        key: 'symbol',
        get: function () {
          return xy();
        }
      }
    ]),
    e
  );
})();
function af(e) {
  var t;
  return (
    e === void 0 &&
      (e = {
        func: function () {},
        bool: !0,
        string: '',
        number: 0,
        array: function () {
          return [];
        },
        object: function () {
          return {};
        },
        integer: 0
      }),
    ((t = (function (n) {
      function r() {
        return n.apply(this, arguments) || this;
      }
      return (
        ef(r, n),
        Xu(r, null, [
          {
            key: 'sensibleDefaults',
            get: function () {
              return uo({}, this.defaults);
            },
            set: function (o) {
              this.defaults = o !== !1 ? uo({}, o !== !0 ? o : e) : {};
            }
          }
        ]),
        r
      );
    })(Pt)).defaults = uo({}, e)),
    t
  );
}
(Pt.defaults = {}),
  (Pt.custom = Cy),
  (Pt.oneOf = wy),
  (Pt.instanceOf = Oy),
  (Pt.oneOfType = ky),
  (Pt.arrayOf = Ey),
  (Pt.objectOf = Py),
  (Pt.shape = Sy),
  (Pt.utils = {
    validate: function (e, t) {
      return Ln(t, e, !0) === !0;
    },
    toType: function (e, t, n) {
      return n === void 0 && (n = !1), n ? Rt(e, t) : mt(e, t);
    }
  });
(function (e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return ef(t, e), t;
})(af());
var sf = af({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
sf.extend([
  { name: 'looseBool', getter: !0, type: Boolean, default: void 0 },
  { name: 'style', getter: !0, type: [String, Object], default: void 0 },
  { name: 'VueNode', getter: !0, type: null }
]);
const Xn = sf;
var Ty = ['image', 'description', 'imageStyle', 'class'],
  cf = _(sy, null, null),
  uf = _(cy, null, null),
  or = function (t, n) {
    var r,
      o = n.slots,
      i = o === void 0 ? {} : o,
      l = n.attrs,
      a = An('empty', t),
      s = a.direction,
      c = a.prefixCls,
      u = c.value,
      f = ce(ce({}, t), l),
      d = f.image,
      h = d === void 0 ? cf : d,
      m = f.description,
      x =
        m === void 0
          ? ((r = i.description) === null || r === void 0
              ? void 0
              : r.call(i)) || void 0
          : m,
      w = f.imageStyle,
      g = f.class,
      y = g === void 0 ? '' : g,
      k = Ko(f, Ty);
    return _(
      Ju,
      {
        componentName: 'Empty',
        children: function (R) {
          var V,
            E = typeof x < 'u' ? x : R.description,
            b = typeof E == 'string' ? E : 'empty',
            B = null;
          return (
            typeof h == 'string'
              ? (B = _('img', { alt: b, src: h }, null))
              : (B = h),
            _(
              'div',
              ce(
                {
                  class: sn(
                    u,
                    y,
                    ((V = {}),
                    qe(V, ''.concat(u, '-normal'), h === uf),
                    qe(V, ''.concat(u, '-rtl'), s.value === 'rtl'),
                    V)
                  )
                },
                k
              ),
              [
                _('div', { class: ''.concat(u, '-image'), style: w }, [B]),
                E && _('p', { class: ''.concat(u, '-description') }, [E]),
                i.default &&
                  _('div', { class: ''.concat(u, '-footer') }, [
                    qu(i.default())
                  ])
              ]
            )
          );
        }
      },
      null
    );
  };
or.displayName = 'AEmpty';
or.PRESENTED_IMAGE_DEFAULT = cf;
or.PRESENTED_IMAGE_SIMPLE = uf;
or.inheritAttrs = !1;
or.props = {
  prefixCls: String,
  image: Xn.any,
  description: Xn.any,
  imageStyle: { type: Object, default: void 0 }
};
const dr = Ku(or);
var Ly = function (t) {
  var n = An('empty', t),
    r = n.prefixCls,
    o = function (l) {
      switch (l) {
        case 'Table':
        case 'List':
          return _(dr, { image: dr.PRESENTED_IMAGE_SIMPLE }, null);
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return _(
            dr,
            {
              image: dr.PRESENTED_IMAGE_SIMPLE,
              class: ''.concat(r.value, '-small')
            },
            null
          );
        default:
          return _(dr, null, null);
      }
    };
  return o(t.componentName);
};
function ff(e) {
  return _(Ly, { componentName: e }, null);
}
var Es = {};
function Ay(e, t) {}
function Iy(e, t, n) {
  !t && !Es[n] && (e(!1, n), (Es[n] = !0));
}
function df(e, t) {
  Iy(Ay, e, t);
}
const $y = function (e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '';
  df(e, '[antdv: '.concat(t, '] ').concat(n));
};
var Bi = 'internalMark',
  fo = oe({
    compatConfig: { MODE: 3 },
    name: 'ALocaleProvider',
    props: { locale: { type: Object }, ANT_MARK__: String },
    setup: function (t, n) {
      var r = n.slots;
      $y(
        t.ANT_MARK__ === Bi,
        'LocaleProvider',
        '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead'
      );
      var o = tt({
        antLocale: ce(ce({}, t.locale), {}, { exist: !0 }),
        ANT_MARK__: Bi
      });
      return (
        et('localeData', o),
        ze(
          function () {
            return t.locale;
          },
          function () {
            o.antLocale = ce(ce({}, t.locale), {}, { exist: !0 });
          },
          { immediate: !0 }
        ),
        function () {
          var i;
          return (i = r.default) === null || i === void 0 ? void 0 : i.call(r);
        }
      );
    }
  });
fo.install = function (e) {
  return e.component(fo.name, fo), e;
};
const Ry = Ku(fo);
Gu('bottomLeft', 'bottomRight', 'topLeft', 'topRight');
var jy = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = ce(
      t
        ? {
            name: t,
            appear: !0,
            appearActiveClass: ''.concat(t),
            appearToClass: ''.concat(t, '-appear ').concat(t, '-appear-active'),
            enterFromClass: ''
              .concat(t, '-appear ')
              .concat(t, '-enter ')
              .concat(t, '-appear-prepare ')
              .concat(t, '-enter-prepare'),
            enterActiveClass: ''.concat(t),
            enterToClass: ''
              .concat(t, '-enter ')
              .concat(t, '-appear ')
              .concat(t, '-appear-active ')
              .concat(t, '-enter-active'),
            leaveActiveClass: ''.concat(t, ' ').concat(t, '-leave'),
            leaveToClass: ''.concat(t, '-leave-active')
          }
        : { css: !1 },
      n
    );
  return r;
};
const My = oe({
  name: 'Notice',
  inheritAttrs: !1,
  props: [
    'prefixCls',
    'duration',
    'updateMark',
    'noticeKey',
    'closeIcon',
    'closable',
    'props',
    'onClick',
    'onClose',
    'holder',
    'visible'
  ],
  setup: function (t, n) {
    var r = n.attrs,
      o = n.slots,
      i,
      l = F(function () {
        return t.duration === void 0 ? 1.5 : t.duration;
      }),
      a = function () {
        l.value &&
          (i = setTimeout(function () {
            c();
          }, l.value * 1e3));
      },
      s = function () {
        i && (clearTimeout(i), (i = null));
      },
      c = function (d) {
        d && d.stopPropagation(), s();
        var h = t.onClose,
          m = t.noticeKey;
        h && h(m);
      },
      u = function () {
        s(), a();
      };
    return (
      De(function () {
        a();
      }),
      zr(function () {
        s();
      }),
      ze(
        [
          l,
          function () {
            return t.updateMark;
          },
          function () {
            return t.visible;
          }
        ],
        function (f, d) {
          var h = bs(f, 3),
            m = h[0],
            x = h[1],
            w = h[2],
            g = bs(d, 3),
            y = g[0],
            k = g[1],
            A = g[2];
          (m !== y || x !== k || (w !== A && A)) && u();
        },
        { flush: 'post' }
      ),
      function () {
        var f,
          d,
          h = t.prefixCls,
          m = t.closable,
          x = t.closeIcon,
          w =
            x === void 0
              ? (f = o.closeIcon) === null || f === void 0
                ? void 0
                : f.call(o)
              : x,
          g = t.onClick,
          y = t.holder,
          k = r.class,
          A = r.style,
          R = ''.concat(h, '-notice'),
          V = Object.keys(r).reduce(function (b, B) {
            return (
              (B.substr(0, 5) === 'data-' ||
                B.substr(0, 5) === 'aria-' ||
                B === 'role') &&
                (b[B] = r[B]),
              b
            );
          }, {}),
          E = _(
            'div',
            ce(
              {
                class: sn(R, k, qe({}, ''.concat(R, '-closable'), m)),
                style: A,
                onMouseenter: s,
                onMouseleave: a,
                onClick: g
              },
              V
            ),
            [
              _('div', { class: ''.concat(R, '-content') }, [
                (d = o.default) === null || d === void 0 ? void 0 : d.call(o)
              ]),
              m
                ? _(
                    'a',
                    { tabindex: 0, onClick: c, class: ''.concat(R, '-close') },
                    [w || _('span', { class: ''.concat(R, '-close-x') }, null)]
                  )
                : null
            ]
          );
        return y
          ? _(
              Nh,
              { to: y },
              {
                default: function () {
                  return E;
                }
              }
            )
          : E;
      }
    );
  }
});
var Fy = [
    'name',
    'getContainer',
    'appContext',
    'prefixCls',
    'rootPrefixCls',
    'transitionName',
    'hasTransitionName'
  ],
  Os = 0,
  Dy = Date.now();
function Ps() {
  var e = Os;
  return (Os += 1), 'rcNotification_'.concat(Dy, '_').concat(e);
}
var zi = oe({
  name: 'Notification',
  inheritAttrs: !1,
  props: ['prefixCls', 'transitionName', 'animation', 'maxCount', 'closeIcon'],
  setup: function (t, n) {
    var r = n.attrs,
      o = n.expose,
      i = n.slots,
      l = new Map(),
      a = fe([]),
      s = F(function () {
        var f = t.prefixCls,
          d = t.animation,
          h = d === void 0 ? 'fade' : d,
          m = t.transitionName;
        return !m && h && (m = ''.concat(f, '-').concat(h)), jy(m);
      }),
      c = function (d, h) {
        var m = d.key || Ps(),
          x = ce(ce({}, d), {}, { key: m }),
          w = t.maxCount,
          g = a.value
            .map(function (k) {
              return k.notice.key;
            })
            .indexOf(m),
          y = a.value.concat();
        g !== -1
          ? y.splice(g, 1, { notice: x, holderCallback: h })
          : (w &&
              a.value.length >= w &&
              ((x.key = y[0].notice.key),
              (x.updateMark = Ps()),
              (x.userPassKey = m),
              y.shift()),
            y.push({ notice: x, holderCallback: h })),
          (a.value = y);
      },
      u = function (d) {
        a.value = a.value.filter(function (h) {
          var m = h.notice,
            x = m.key,
            w = m.userPassKey,
            g = w || x;
          return g !== d;
        });
      };
    return (
      o({ add: c, remove: u, notices: a }),
      function () {
        var f,
          d,
          h = t.prefixCls,
          m = t.closeIcon,
          x =
            m === void 0
              ? (f = i.closeIcon) === null || f === void 0
                ? void 0
                : f.call(i, { prefixCls: h })
              : m,
          w = a.value.map(function (y, k) {
            var A = y.notice,
              R = y.holderCallback,
              V = k === a.value.length - 1 ? A.updateMark : void 0,
              E = A.key,
              b = A.userPassKey,
              B = A.content,
              q = ce(
                ce(
                  ce(
                    {
                      prefixCls: h,
                      closeIcon:
                        typeof x == 'function' ? x({ prefixCls: h }) : x
                    },
                    A
                  ),
                  A.props
                ),
                {},
                {
                  key: E,
                  noticeKey: b || E,
                  updateMark: V,
                  onClose: function (S) {
                    var H;
                    u(S), (H = A.onClose) === null || H === void 0 || H.call(A);
                  },
                  onClick: A.onClick
                }
              );
            return R
              ? _(
                  'div',
                  {
                    key: E,
                    class: ''.concat(h, '-hook-holder'),
                    ref: function (S) {
                      typeof E > 'u' ||
                        (S ? (l.set(E, S), R(S, q)) : l.delete(E));
                    }
                  },
                  null
                )
              : _(My, q, {
                  default: function () {
                    return [typeof B == 'function' ? B({ prefixCls: h }) : B];
                  }
                });
          }),
          g = ((d = {}), qe(d, h, 1), qe(d, r.class, !!r.class), d);
        return _(
          'div',
          { class: g, style: r.style || { top: '65px', left: '50%' } },
          [
            _(wp, ce({ tag: 'div' }, s.value), {
              default: function () {
                return [w];
              }
            })
          ]
        );
      }
    );
  }
});
zi.newInstance = function (t, n) {
  var r = t || {},
    o = r.name,
    i = o === void 0 ? 'notification' : o,
    l = r.getContainer,
    a = r.appContext,
    s = r.prefixCls,
    c = r.rootPrefixCls,
    u = r.transitionName,
    f = r.hasTransitionName,
    d = Ko(r, Fy),
    h = document.createElement('div');
  if (l) {
    var m = l();
    m.appendChild(h);
  } else document.body.appendChild(h);
  var x = oe({
      compatConfig: { MODE: 3 },
      name: 'NotificationWrapper',
      setup: function (y, k) {
        var A = k.attrs,
          R = fe();
        return (
          De(function () {
            n({
              notice: function (E) {
                var b;
                (b = R.value) === null || b === void 0 || b.add(E);
              },
              removeNotice: function (E) {
                var b;
                (b = R.value) === null || b === void 0 || b.remove(E);
              },
              destroy: function () {
                $a(null, h), h.parentNode && h.parentNode.removeChild(h);
              },
              component: R
            });
          }),
          function () {
            var V = dt,
              E = V.getPrefixCls(i, s),
              b = V.getRootPrefixCls(c, E),
              B = f ? u : ''.concat(b, '-').concat(u);
            return _(
              Or,
              ce(ce({}, V), {}, { notUpdateGlobalConfig: !0, prefixCls: b }),
              {
                default: function () {
                  return [
                    _(
                      zi,
                      ce(
                        ce({ ref: R }, A),
                        {},
                        { prefixCls: E, transitionName: B }
                      ),
                      null
                    )
                  ];
                }
              }
            );
          }
        );
      }
    }),
    w = _(x, d);
  (w.appContext = a || w.appContext), $a(w, h);
};
const hf = zi;
var Ny = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z'
        }
      }
    ]
  },
  name: 'loading',
  theme: 'outlined'
};
const Hy = Ny;
function Ge(e, t) {
  By(e) && (e = '100%');
  var n = zy(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function ro(e) {
  return Math.min(1, Math.max(0, e));
}
function By(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function zy(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function pf(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function oo(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function _n(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function Vy(e, t, n) {
  return { r: Ge(e, 255) * 255, g: Ge(t, 255) * 255, b: Ge(n, 255) * 255 };
}
function Ss(e, t, n) {
  (e = Ge(e, 255)), (t = Ge(t, 255)), (n = Ge(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    l = 0,
    a = (r + o) / 2;
  if (r === o) (l = 0), (i = 0);
  else {
    var s = r - o;
    switch (((l = a > 0.5 ? s / (2 - r - o) : s / (r + o)), r)) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, l: a };
}
function di(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Uy(e, t, n) {
  var r, o, i;
  if (((e = Ge(e, 360)), (t = Ge(t, 100)), (n = Ge(n, 100)), t === 0))
    (o = n), (i = n), (r = n);
  else {
    var l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (r = di(a, l, e + 1 / 3)), (o = di(a, l, e)), (i = di(a, l, e - 1 / 3));
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function Vi(e, t, n) {
  (e = Ge(e, 255)), (t = Ge(t, 255)), (n = Ge(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    l = r,
    a = r - o,
    s = r === 0 ? 0 : a / r;
  if (r === o) i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / a + 2;
        break;
      case n:
        i = (e - t) / a + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: l };
}
function Wy(e, t, n) {
  (e = Ge(e, 360) * 6), (t = Ge(t, 100)), (n = Ge(n, 100));
  var r = Math.floor(e),
    o = e - r,
    i = n * (1 - t),
    l = n * (1 - o * t),
    a = n * (1 - (1 - o) * t),
    s = r % 6,
    c = [n, l, i, i, a, n][s],
    u = [a, n, n, l, i, i][s],
    f = [i, i, a, n, n, l][s];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function Ui(e, t, n, r) {
  var o = [
    _n(Math.round(e).toString(16)),
    _n(Math.round(t).toString(16)),
    _n(Math.round(n).toString(16))
  ];
  return r &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join('');
}
function qy(e, t, n, r, o) {
  var i = [
    _n(Math.round(e).toString(16)),
    _n(Math.round(t).toString(16)),
    _n(Math.round(n).toString(16)),
    _n(Gy(r))
  ];
  return o &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1)) &&
    i[3].startsWith(i[3].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
    : i.join('');
}
function Gy(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ts(e) {
  return ut(e) / 255;
}
function ut(e) {
  return parseInt(e, 16);
}
function Ky(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var Wi = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};
function Mn(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    o = null,
    i = null,
    l = !1,
    a = !1;
  return (
    typeof e == 'string' && (e = Qy(e)),
    typeof e == 'object' &&
      (Ft(e.r) && Ft(e.g) && Ft(e.b)
        ? ((t = Vy(e.r, e.g, e.b)),
          (l = !0),
          (a = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : Ft(e.h) && Ft(e.s) && Ft(e.v)
        ? ((r = oo(e.s)),
          (o = oo(e.v)),
          (t = Wy(e.h, r, o)),
          (l = !0),
          (a = 'hsv'))
        : Ft(e.h) &&
          Ft(e.s) &&
          Ft(e.l) &&
          ((r = oo(e.s)),
          (i = oo(e.l)),
          (t = Uy(e.h, r, i)),
          (l = !0),
          (a = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = pf(n)),
    {
      ok: l,
      format: e.format || a,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n
    }
  );
}
var Yy = '[-\\+]?\\d+%?',
  Jy = '[-\\+]?\\d*\\.\\d+%?',
  Zt = '(?:'.concat(Jy, ')|(?:').concat(Yy, ')'),
  hi = '[\\s|\\(]+('
    .concat(Zt, ')[,|\\s]+(')
    .concat(Zt, ')[,|\\s]+(')
    .concat(Zt, ')\\s*\\)?'),
  pi = '[\\s|\\(]+('
    .concat(Zt, ')[,|\\s]+(')
    .concat(Zt, ')[,|\\s]+(')
    .concat(Zt, ')[,|\\s]+(')
    .concat(Zt, ')\\s*\\)?'),
  _t = {
    CSS_UNIT: new RegExp(Zt),
    rgb: new RegExp('rgb' + hi),
    rgba: new RegExp('rgba' + pi),
    hsl: new RegExp('hsl' + hi),
    hsla: new RegExp('hsla' + pi),
    hsv: new RegExp('hsv' + hi),
    hsva: new RegExp('hsva' + pi),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
function Qy(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (Wi[e]) (e = Wi[e]), (t = !0);
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var n = _t.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = _t.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = _t.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = _t.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = _t.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = _t.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = _t.hex8.exec(e)),
                          n
                            ? {
                                r: ut(n[1]),
                                g: ut(n[2]),
                                b: ut(n[3]),
                                a: Ts(n[4]),
                                format: t ? 'name' : 'hex8'
                              }
                            : ((n = _t.hex6.exec(e)),
                              n
                                ? {
                                    r: ut(n[1]),
                                    g: ut(n[2]),
                                    b: ut(n[3]),
                                    format: t ? 'name' : 'hex'
                                  }
                                : ((n = _t.hex4.exec(e)),
                                  n
                                    ? {
                                        r: ut(n[1] + n[1]),
                                        g: ut(n[2] + n[2]),
                                        b: ut(n[3] + n[3]),
                                        a: Ts(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8'
                                      }
                                    : ((n = _t.hex3.exec(e)),
                                      n
                                        ? {
                                            r: ut(n[1] + n[1]),
                                            g: ut(n[2] + n[2]),
                                            b: ut(n[3] + n[3]),
                                            format: t ? 'name' : 'hex'
                                          }
                                        : !1)))))))));
}
function Ft(e) {
  return Boolean(_t.CSS_UNIT.exec(String(e)));
}
var mi = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {});
      var r;
      if (t instanceof e) return t;
      typeof t == 'number' && (t = Ky(t)), (this.originalInput = t);
      var o = Mn(t);
      (this.originalInput = t),
        (this.r = o.r),
        (this.g = o.g),
        (this.b = o.b),
        (this.a = o.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = o.ok);
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function () {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          o,
          i = t.r / 255,
          l = t.g / 255,
          a = t.b / 255;
        return (
          i <= 0.03928
            ? (n = i / 12.92)
            : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
          l <= 0.03928
            ? (r = l / 12.92)
            : (r = Math.pow((l + 0.055) / 1.055, 2.4)),
          a <= 0.03928
            ? (o = a / 12.92)
            : (o = Math.pow((a + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * o
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = pf(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.toHsv = function () {
        var t = Vi(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = Vi(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.v * 100);
        return this.a === 1
          ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
          : 'hsva('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHsl = function () {
        var t = Ss(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = Ss(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.l * 100);
        return this.a === 1
          ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
          : 'hsla('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), Ui(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), qy(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex8(t);
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(n, ', ')
              .concat(r, ', ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return ''.concat(Math.round(Ge(n, 255) * 100), '%');
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(Ge(n, 255) * 100);
        };
        return this.a === 1
          ? 'rgb('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%)')
          : 'rgba('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return 'transparent';
        if (this.a < 1) return !1;
        for (
          var t = '#' + Ui(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(Wi);
          n < r.length;
          n++
        ) {
          var o = r[n],
            i = o[0],
            l = o[1];
          if (t === l) return i;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var n = Boolean(t);
        t = t != null ? t : this.format;
        var r = !1,
          o = this.a < 1 && this.a >= 0,
          i = !n && o && (t.startsWith('hex') || t === 'name');
        return i
          ? t === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === 'rgb' && (r = this.toRgbString()),
            t === 'prgb' && (r = this.toPercentageRgbString()),
            (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
            t === 'hex3' && (r = this.toHexString(!0)),
            t === 'hex4' && (r = this.toHex8String(!0)),
            t === 'hex8' && (r = this.toHex8String()),
            t === 'name' && (r = this.toName()),
            t === 'hsl' && (r = this.toHslString()),
            t === 'hsv' && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function () {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = ro(n.l)), new e(n);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100)))
          )),
          new e(n)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = ro(n.l)), new e(n);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix('white', t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix('black', t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = ro(n.s)), new e(n);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = ro(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), new e(n);
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
          o = new e(t).toRgb(),
          i = n / 100,
          l = {
            r: (o.r - r.r) * i + r.r,
            g: (o.g - r.g) * i + r.g,
            b: (o.b - r.b) * i + r.b,
            a: (o.a - r.a) * i + r.a
          };
        return new e(l);
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
          o = 360 / n,
          i = [this];
        for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + o) % 360), i.push(new e(r));
        return i;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var n = this.toHsv(), r = n.h, o = n.s, i = n.v, l = [], a = 1 / t;
          t--;

        )
          l.push(new e({ h: r, s: o, v: i })), (i = (i + a) % 1);
        return l;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l })
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb();
        return new e({
          r: r.r + (n.r - r.r) * n.a,
          g: r.g + (n.g - r.g) * n.a,
          b: r.b + (n.b - r.b) * n.a
        });
      }),
      (e.prototype.triad = function () {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, l = 1;
          l < t;
          l++
        )
          o.push(new e({ h: (r + l * i) % 360, s: n.s, l: n.l }));
        return o;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  io = 2,
  Ls = 0.16,
  Zy = 0.05,
  Xy = 0.05,
  e_ = 0.15,
  mf = 5,
  gf = 4,
  t_ = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 }
  ];
function As(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    o = Vi(t, n, r);
  return { h: o.h * 360, s: o.s, v: o.v };
}
function lo(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return '#'.concat(Ui(t, n, r, !1));
}
function n_(e, t, n) {
  var r = n / 100,
    o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b
    };
  return o;
}
function Is(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - io * t : Math.round(e.h) + io * t)
      : (r = n ? Math.round(e.h) + io * t : Math.round(e.h) - io * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function $s(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - Ls * t) : t === gf ? (r = e.s + Ls) : (r = e.s + Zy * t),
    r > 1 && (r = 1),
    n && t === mf && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function Rs(e, t, n) {
  var r;
  return (
    n ? (r = e.v + Xy * t) : (r = e.v - e_ * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function Mr(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Mn(e),
      o = mf;
    o > 0;
    o -= 1
  ) {
    var i = As(r),
      l = lo(Mn({ h: Is(i, o, !0), s: $s(i, o, !0), v: Rs(i, o, !0) }));
    n.push(l);
  }
  n.push(lo(r));
  for (var a = 1; a <= gf; a += 1) {
    var s = As(r),
      c = lo(Mn({ h: Is(s, a), s: $s(s, a), v: Rs(s, a) }));
    n.push(c);
  }
  return t.theme === 'dark'
    ? t_.map(function (u) {
        var f = u.index,
          d = u.opacity,
          h = lo(n_(Mn(t.backgroundColor || '#141414'), Mn(n[f]), d * 100));
        return h;
      })
    : n;
}
var gi = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666'
  },
  vi = {},
  bi = {};
Object.keys(gi).forEach(function (e) {
  (vi[e] = Mr(gi[e])),
    (vi[e].primary = vi[e][5]),
    (bi[e] = Mr(gi[e], { theme: 'dark', backgroundColor: '#141414' })),
    (bi[e].primary = bi[e][5]);
});
var js = [],
  hr = [],
  r_ =
    'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';
function o_() {
  var e = document.createElement('style');
  return e.setAttribute('type', 'text/css'), e;
}
function i_(e, t) {
  if (((t = t || {}), e === void 0)) throw new Error(r_);
  var n = t.prepend === !0 ? 'prepend' : 'append',
    r = t.container !== void 0 ? t.container : document.querySelector('head'),
    o = js.indexOf(r);
  o === -1 && ((o = js.push(r) - 1), (hr[o] = {}));
  var i;
  return (
    hr[o] !== void 0 && hr[o][n] !== void 0
      ? (i = hr[o][n])
      : ((i = hr[o][n] = o_()),
        n === 'prepend'
          ? r.insertBefore(i, r.childNodes[0])
          : r.appendChild(i)),
    e.charCodeAt(0) === 65279 && (e = e.substr(1, e.length)),
    i.styleSheet ? (i.styleSheet.cssText += e) : (i.textContent += e),
    i
  );
}
function Ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        l_(e, o, n[o]);
      });
  }
  return e;
}
function l_(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function Fs(e) {
  return (
    typeof e == 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (typeof e.icon == 'object' || typeof e.icon == 'function')
  );
}
function qi(e, t, n) {
  return n
    ? ve(
        e.tag,
        Ms({ key: t }, n, e.attrs),
        (e.children || []).map(function (r, o) {
          return qi(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        })
      )
    : ve(
        e.tag,
        Ms({ key: t }, e.attrs),
        (e.children || []).map(function (r, o) {
          return qi(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        })
      );
}
function vf(e) {
  return Mr(e)[0];
}
function bf(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var a_ = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  Ds = !1,
  s_ = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a_;
    nr(function () {
      Ds ||
        (typeof window < 'u' &&
          window.document &&
          window.document.documentElement &&
          i_(t, { prepend: !0 }),
        (Ds = !0));
    });
  },
  c_ = ['icon', 'primaryColor', 'secondaryColor'];
function u_(e, t) {
  if (e == null) return {};
  var n = f_(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function f_(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function ho(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        d_(e, o, n[o]);
      });
  }
  return e;
}
function d_(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Er = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
function h_(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (Er.primaryColor = t),
    (Er.secondaryColor = n || vf(t)),
    (Er.calculated = !!n);
}
function p_() {
  return ho({}, Er);
}
var ir = function (t, n) {
  var r = ho({}, t, n.attrs),
    o = r.icon,
    i = r.primaryColor,
    l = r.secondaryColor,
    a = u_(r, c_),
    s = Er;
  if (
    (i && (s = { primaryColor: i, secondaryColor: l || vf(i) }),
    s_(),
    Fs(o),
    !Fs(o))
  )
    return null;
  var c = o;
  return (
    c &&
      typeof c.icon == 'function' &&
      (c = ho({}, c, { icon: c.icon(s.primaryColor, s.secondaryColor) })),
    qi(
      c.icon,
      'svg-'.concat(c.name),
      ho({}, a, {
        'data-icon': c.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true'
      })
    )
  );
};
ir.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ir.inheritAttrs = !1;
ir.displayName = 'IconBase';
ir.getTwoToneColors = p_;
ir.setTwoToneColors = h_;
const jl = ir;
function m_(e, t) {
  return y_(e) || b_(e, t) || v_(e, t) || g_();
}
function g_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v_(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Ns(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ns(e, t);
  }
}
function Ns(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function b_(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      o = !0,
      i = !1,
      l,
      a;
    try {
      for (
        n = n.call(e);
        !(o = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t));
        o = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function y_(e) {
  if (Array.isArray(e)) return e;
}
function yf(e) {
  var t = bf(e),
    n = m_(t, 2),
    r = n[0],
    o = n[1];
  return jl.setTwoToneColors({ primaryColor: r, secondaryColor: o });
}
function __() {
  var e = jl.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var x_ = [
  'class',
  'icon',
  'spin',
  'rotate',
  'tabindex',
  'twoToneColor',
  'onClick'
];
function C_(e, t) {
  return O_(e) || E_(e, t) || k_(e, t) || w_();
}
function w_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function k_(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Hs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Hs(e, t);
  }
}
function Hs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function E_(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      o = !0,
      i = !1,
      l,
      a;
    try {
      for (
        n = n.call(e);
        !(o = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t));
        o = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function O_(e) {
  if (Array.isArray(e)) return e;
}
function Bs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        Gi(e, o, n[o]);
      });
  }
  return e;
}
function Gi(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function P_(e, t) {
  if (e == null) return {};
  var n = S_(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function S_(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
yf('#1890ff');
var lr = function (t, n) {
  var r,
    o = Bs({}, t, n.attrs),
    i = o.class,
    l = o.icon,
    a = o.spin,
    s = o.rotate,
    c = o.tabindex,
    u = o.twoToneColor,
    f = o.onClick,
    d = P_(o, x_),
    h =
      ((r = { anticon: !0 }),
      Gi(r, 'anticon-'.concat(l.name), Boolean(l.name)),
      Gi(r, i, i),
      r),
    m = a === '' || !!a || l.name === 'loading' ? 'anticon-spin' : '',
    x = c;
  x === void 0 && f && ((x = -1), (d.tabindex = x));
  var w = s
      ? {
          msTransform: 'rotate('.concat(s, 'deg)'),
          transform: 'rotate('.concat(s, 'deg)')
        }
      : void 0,
    g = bf(u),
    y = C_(g, 2),
    k = y[0],
    A = y[1];
  return _(
    'span',
    Bs({ role: 'img', 'aria-label': l.name }, d, { onClick: f, class: h }),
    [
      _(
        jl,
        { class: m, icon: l, primaryColor: k, secondaryColor: A, style: w },
        null
      )
    ]
  );
};
lr.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
lr.displayName = 'AntdIcon';
lr.inheritAttrs = !1;
lr.getTwoToneColor = __;
lr.setTwoToneColor = yf;
const jt = lr;
function zs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        T_(e, o, n[o]);
      });
  }
  return e;
}
function T_(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Ml = function (t, n) {
  var r = zs({}, t, n.attrs);
  return _(jt, zs({}, r, { icon: Hy }), null);
};
Ml.displayName = 'LoadingOutlined';
Ml.inheritAttrs = !1;
const L_ = Ml;
var A_ = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z'
        }
      }
    ]
  },
  name: 'exclamation-circle',
  theme: 'filled'
};
const I_ = A_;
function Vs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        $_(e, o, n[o]);
      });
  }
  return e;
}
function $_(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Fl = function (t, n) {
  var r = Vs({}, t, n.attrs);
  return _(jt, Vs({}, r, { icon: I_ }), null);
};
Fl.displayName = 'ExclamationCircleFilled';
Fl.inheritAttrs = !1;
const R_ = Fl;
var j_ = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z'
        }
      }
    ]
  },
  name: 'close-circle',
  theme: 'filled'
};
const M_ = j_;
function Us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        F_(e, o, n[o]);
      });
  }
  return e;
}
function F_(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Dl = function (t, n) {
  var r = Us({}, t, n.attrs);
  return _(jt, Us({}, r, { icon: M_ }), null);
};
Dl.displayName = 'CloseCircleFilled';
Dl.inheritAttrs = !1;
const D_ = Dl;
var N_ = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z'
        }
      }
    ]
  },
  name: 'check-circle',
  theme: 'filled'
};
const H_ = N_;
function Ws(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        B_(e, o, n[o]);
      });
  }
  return e;
}
function B_(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Nl = function (t, n) {
  var r = Ws({}, t, n.attrs);
  return _(jt, Ws({}, r, { icon: H_ }), null);
};
Nl.displayName = 'CheckCircleFilled';
Nl.inheritAttrs = !1;
const z_ = Nl;
var V_ = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z'
        }
      }
    ]
  },
  name: 'info-circle',
  theme: 'filled'
};
const U_ = V_;
function qs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        W_(e, o, n[o]);
      });
  }
  return e;
}
function W_(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Hl = function (t, n) {
  var r = qs({}, t, n.attrs);
  return _(jt, qs({}, r, { icon: U_ }), null);
};
Hl.displayName = 'InfoCircleFilled';
Hl.inheritAttrs = !1;
const q_ = Hl;
var _f = 3,
  xf,
  Ze,
  G_ = 1,
  Cf = '',
  wf = 'move-up',
  kf = !1,
  Ef = function () {
    return document.body;
  },
  Of,
  Pf = !1;
function K_() {
  return G_++;
}
function Y_(e) {
  e.top !== void 0 && ((xf = e.top), (Ze = null)),
    e.duration !== void 0 && (_f = e.duration),
    e.prefixCls !== void 0 && (Cf = e.prefixCls),
    e.getContainer !== void 0 && ((Ef = e.getContainer), (Ze = null)),
    e.transitionName !== void 0 &&
      ((wf = e.transitionName), (Ze = null), (kf = !0)),
    e.maxCount !== void 0 && ((Of = e.maxCount), (Ze = null)),
    e.rtl !== void 0 && (Pf = e.rtl);
}
function J_(e, t) {
  if (Ze) {
    t(Ze);
    return;
  }
  hf.newInstance(
    {
      appContext: e.appContext,
      prefixCls: e.prefixCls || Cf,
      rootPrefixCls: e.rootPrefixCls,
      transitionName: wf,
      hasTransitionName: kf,
      style: { top: xf },
      getContainer: Ef || e.getPopupContainer,
      maxCount: Of,
      name: 'message'
    },
    function (n) {
      if (Ze) {
        t(Ze);
        return;
      }
      (Ze = n), t(n);
    }
  );
}
var Q_ = { info: q_, success: z_, error: D_, warning: R_, loading: L_ };
function Z_(e) {
  var t = e.duration !== void 0 ? e.duration : _f,
    n = e.key || K_(),
    r = new Promise(function (i) {
      var l = function () {
        return typeof e.onClose == 'function' && e.onClose(), i(!0);
      };
      J_(e, function (a) {
        a.notice({
          key: n,
          duration: t,
          style: e.style || {},
          class: e.class,
          content: function (c) {
            var u,
              f = c.prefixCls,
              d = Q_[e.type],
              h = d ? _(d, null, null) : '',
              m = sn(
                ''.concat(f, '-custom-content'),
                ((u = {}),
                qe(u, ''.concat(f, '-').concat(e.type), e.type),
                qe(u, ''.concat(f, '-rtl'), Pf === !0),
                u)
              );
            return _('div', { class: m }, [
              typeof e.icon == 'function' ? e.icon() : e.icon || h,
              _('span', null, [
                typeof e.content == 'function' ? e.content() : e.content
              ])
            ]);
          },
          onClose: l,
          onClick: e.onClick
        });
      });
    }),
    o = function () {
      Ze && Ze.removeNotice(n);
    };
  return (
    (o.then = function (i, l) {
      return r.then(i, l);
    }),
    (o.promise = r),
    o
  );
}
function X_(e) {
  return Object.prototype.toString.call(e) === '[object Object]' && !!e.content;
}
var Ao = {
  open: Z_,
  config: Y_,
  destroy: function (t) {
    if (Ze)
      if (t) {
        var n = Ze,
          r = n.removeNotice;
        r(t);
      } else {
        var o = Ze,
          i = o.destroy;
        i(), (Ze = null);
      }
  }
};
function e1(e, t) {
  e[t] = function (n, r, o) {
    return X_(n)
      ? e.open(ce(ce({}, n), {}, { type: t }))
      : (typeof r == 'function' && ((o = r), (r = void 0)),
        e.open({ content: n, duration: r, type: t, onClose: o }));
  };
}
['success', 'info', 'warning', 'error', 'loading'].forEach(function (e) {
  return e1(Ao, e);
});
Ao.warn = Ao.warning;
const t1 = Ao;
var Sf = { exports: {} },
  Tf = { exports: {} };
(function (e) {
  function t(n) {
    return (
      (e.exports = t =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (r) {
              return typeof r;
            }
          : function (r) {
              return r &&
                typeof Symbol == 'function' &&
                r.constructor === Symbol &&
                r !== Symbol.prototype
                ? 'symbol'
                : typeof r;
            }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports),
      t(n)
    );
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Tf);
(function (e) {
  var t = Tf.exports.default;
  function n() {
    (e.exports = n =
      function () {
        return r;
      }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
    var r = {},
      o = Object.prototype,
      i = o.hasOwnProperty,
      l =
        Object.defineProperty ||
        function (I, C, P) {
          I[C] = P.value;
        },
      a = typeof Symbol == 'function' ? Symbol : {},
      s = a.iterator || '@@iterator',
      c = a.asyncIterator || '@@asyncIterator',
      u = a.toStringTag || '@@toStringTag';
    function f(I, C, P) {
      return (
        Object.defineProperty(I, C, {
          value: P,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }),
        I[C]
      );
    }
    try {
      f({}, '');
    } catch {
      f = function (P, M, X) {
        return (P[M] = X);
      };
    }
    function d(I, C, P, M) {
      var X = C && C.prototype instanceof x ? C : x,
        ne = Object.create(X.prototype),
        pe = new S(M || []);
      return l(ne, '_invoke', { value: b(I, P, pe) }), ne;
    }
    function h(I, C, P) {
      try {
        return { type: 'normal', arg: I.call(C, P) };
      } catch (M) {
        return { type: 'throw', arg: M };
      }
    }
    r.wrap = d;
    var m = {};
    function x() {}
    function w() {}
    function g() {}
    var y = {};
    f(y, s, function () {
      return this;
    });
    var k = Object.getPrototypeOf,
      A = k && k(k(H([])));
    A && A !== o && i.call(A, s) && (y = A);
    var R = (g.prototype = x.prototype = Object.create(y));
    function V(I) {
      ['next', 'throw', 'return'].forEach(function (C) {
        f(I, C, function (P) {
          return this._invoke(C, P);
        });
      });
    }
    function E(I, C) {
      function P(X, ne, pe, xe) {
        var $e = h(I[X], I, ne);
        if ($e.type !== 'throw') {
          var nt = $e.arg,
            T = nt.value;
          return T && t(T) == 'object' && i.call(T, '__await')
            ? C.resolve(T.__await).then(
                function (G) {
                  P('next', G, pe, xe);
                },
                function (G) {
                  P('throw', G, pe, xe);
                }
              )
            : C.resolve(T).then(
                function (G) {
                  (nt.value = G), pe(nt);
                },
                function (G) {
                  return P('throw', G, pe, xe);
                }
              );
        }
        xe($e.arg);
      }
      var M;
      l(this, '_invoke', {
        value: function (ne, pe) {
          function xe() {
            return new C(function ($e, nt) {
              P(ne, pe, $e, nt);
            });
          }
          return (M = M ? M.then(xe, xe) : xe());
        }
      });
    }
    function b(I, C, P) {
      var M = 'suspendedStart';
      return function (X, ne) {
        if (M === 'executing') throw new Error('Generator is already running');
        if (M === 'completed') {
          if (X === 'throw') throw ne;
          return N();
        }
        for (P.method = X, P.arg = ne; ; ) {
          var pe = P.delegate;
          if (pe) {
            var xe = B(pe, P);
            if (xe) {
              if (xe === m) continue;
              return xe;
            }
          }
          if (P.method === 'next') P.sent = P._sent = P.arg;
          else if (P.method === 'throw') {
            if (M === 'suspendedStart') throw ((M = 'completed'), P.arg);
            P.dispatchException(P.arg);
          } else P.method === 'return' && P.abrupt('return', P.arg);
          M = 'executing';
          var $e = h(I, C, P);
          if ($e.type === 'normal') {
            if (((M = P.done ? 'completed' : 'suspendedYield'), $e.arg === m))
              continue;
            return { value: $e.arg, done: P.done };
          }
          $e.type === 'throw' &&
            ((M = 'completed'), (P.method = 'throw'), (P.arg = $e.arg));
        }
      };
    }
    function B(I, C) {
      var P = I.iterator[C.method];
      if (P === void 0) {
        if (((C.delegate = null), C.method === 'throw')) {
          if (
            I.iterator.return &&
            ((C.method = 'return'),
            (C.arg = void 0),
            B(I, C),
            C.method === 'throw')
          )
            return m;
          (C.method = 'throw'),
            (C.arg = new TypeError(
              "The iterator does not provide a 'throw' method"
            ));
        }
        return m;
      }
      var M = h(P, I.iterator, C.arg);
      if (M.type === 'throw')
        return (C.method = 'throw'), (C.arg = M.arg), (C.delegate = null), m;
      var X = M.arg;
      return X
        ? X.done
          ? ((C[I.resultName] = X.value),
            (C.next = I.nextLoc),
            C.method !== 'return' && ((C.method = 'next'), (C.arg = void 0)),
            (C.delegate = null),
            m)
          : X
        : ((C.method = 'throw'),
          (C.arg = new TypeError('iterator result is not an object')),
          (C.delegate = null),
          m);
    }
    function q(I) {
      var C = { tryLoc: I[0] };
      1 in I && (C.catchLoc = I[1]),
        2 in I && ((C.finallyLoc = I[2]), (C.afterLoc = I[3])),
        this.tryEntries.push(C);
    }
    function Y(I) {
      var C = I.completion || {};
      (C.type = 'normal'), delete C.arg, (I.completion = C);
    }
    function S(I) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        I.forEach(q, this),
        this.reset(!0);
    }
    function H(I) {
      if (I) {
        var C = I[s];
        if (C) return C.call(I);
        if (typeof I.next == 'function') return I;
        if (!isNaN(I.length)) {
          var P = -1,
            M = function X() {
              for (; ++P < I.length; )
                if (i.call(I, P)) return (X.value = I[P]), (X.done = !1), X;
              return (X.value = void 0), (X.done = !0), X;
            };
          return (M.next = M);
        }
      }
      return { next: N };
    }
    function N() {
      return { value: void 0, done: !0 };
    }
    return (
      (w.prototype = g),
      l(R, 'constructor', { value: g, configurable: !0 }),
      l(g, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = f(g, u, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (I) {
        var C = typeof I == 'function' && I.constructor;
        return (
          !!C && (C === w || (C.displayName || C.name) === 'GeneratorFunction')
        );
      }),
      (r.mark = function (I) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(I, g)
            : ((I.__proto__ = g), f(I, u, 'GeneratorFunction')),
          (I.prototype = Object.create(R)),
          I
        );
      }),
      (r.awrap = function (I) {
        return { __await: I };
      }),
      V(E.prototype),
      f(E.prototype, c, function () {
        return this;
      }),
      (r.AsyncIterator = E),
      (r.async = function (I, C, P, M, X) {
        X === void 0 && (X = Promise);
        var ne = new E(d(I, C, P, M), X);
        return r.isGeneratorFunction(C)
          ? ne
          : ne.next().then(function (pe) {
              return pe.done ? pe.value : ne.next();
            });
      }),
      V(R),
      f(R, u, 'Generator'),
      f(R, s, function () {
        return this;
      }),
      f(R, 'toString', function () {
        return '[object Generator]';
      }),
      (r.keys = function (I) {
        var C = Object(I),
          P = [];
        for (var M in C) P.push(M);
        return (
          P.reverse(),
          function X() {
            for (; P.length; ) {
              var ne = P.pop();
              if (ne in C) return (X.value = ne), (X.done = !1), X;
            }
            return (X.done = !0), X;
          }
        );
      }),
      (r.values = H),
      (S.prototype = {
        constructor: S,
        reset: function (C) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = void 0),
            this.tryEntries.forEach(Y),
            !C)
          )
            for (var P in this)
              P.charAt(0) === 't' &&
                i.call(this, P) &&
                !isNaN(+P.slice(1)) &&
                (this[P] = void 0);
        },
        stop: function () {
          this.done = !0;
          var C = this.tryEntries[0].completion;
          if (C.type === 'throw') throw C.arg;
          return this.rval;
        },
        dispatchException: function (C) {
          if (this.done) throw C;
          var P = this;
          function M(nt, T) {
            return (
              (pe.type = 'throw'),
              (pe.arg = C),
              (P.next = nt),
              T && ((P.method = 'next'), (P.arg = void 0)),
              !!T
            );
          }
          for (var X = this.tryEntries.length - 1; X >= 0; --X) {
            var ne = this.tryEntries[X],
              pe = ne.completion;
            if (ne.tryLoc === 'root') return M('end');
            if (ne.tryLoc <= this.prev) {
              var xe = i.call(ne, 'catchLoc'),
                $e = i.call(ne, 'finallyLoc');
              if (xe && $e) {
                if (this.prev < ne.catchLoc) return M(ne.catchLoc, !0);
                if (this.prev < ne.finallyLoc) return M(ne.finallyLoc);
              } else if (xe) {
                if (this.prev < ne.catchLoc) return M(ne.catchLoc, !0);
              } else {
                if (!$e)
                  throw new Error('try statement without catch or finally');
                if (this.prev < ne.finallyLoc) return M(ne.finallyLoc);
              }
            }
          }
        },
        abrupt: function (C, P) {
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var X = this.tryEntries[M];
            if (
              X.tryLoc <= this.prev &&
              i.call(X, 'finallyLoc') &&
              this.prev < X.finallyLoc
            ) {
              var ne = X;
              break;
            }
          }
          ne &&
            (C === 'break' || C === 'continue') &&
            ne.tryLoc <= P &&
            P <= ne.finallyLoc &&
            (ne = null);
          var pe = ne ? ne.completion : {};
          return (
            (pe.type = C),
            (pe.arg = P),
            ne
              ? ((this.method = 'next'), (this.next = ne.finallyLoc), m)
              : this.complete(pe)
          );
        },
        complete: function (C, P) {
          if (C.type === 'throw') throw C.arg;
          return (
            C.type === 'break' || C.type === 'continue'
              ? (this.next = C.arg)
              : C.type === 'return'
              ? ((this.rval = this.arg = C.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : C.type === 'normal' && P && (this.next = P),
            m
          );
        },
        finish: function (C) {
          for (var P = this.tryEntries.length - 1; P >= 0; --P) {
            var M = this.tryEntries[P];
            if (M.finallyLoc === C)
              return this.complete(M.completion, M.afterLoc), Y(M), m;
          }
        },
        catch: function (C) {
          for (var P = this.tryEntries.length - 1; P >= 0; --P) {
            var M = this.tryEntries[P];
            if (M.tryLoc === C) {
              var X = M.completion;
              if (X.type === 'throw') {
                var ne = X.arg;
                Y(M);
              }
              return ne;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (C, P, M) {
          return (
            (this.delegate = { iterator: H(C), resultName: P, nextLoc: M }),
            this.method === 'next' && (this.arg = void 0),
            m
          );
        }
      }),
      r
    );
  }
  (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Sf);
var yi = Sf.exports();
try {
  regeneratorRuntime = yi;
} catch {
  typeof globalThis == 'object'
    ? (globalThis.regeneratorRuntime = yi)
    : Function('r', 'regeneratorRuntime = r')(yi);
}
var n1 = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
        }
      }
    ]
  },
  name: 'check-circle',
  theme: 'outlined'
};
const r1 = n1;
function Gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        o1(e, o, n[o]);
      });
  }
  return e;
}
function o1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Bl = function (t, n) {
  var r = Gs({}, t, n.attrs);
  return _(jt, Gs({}, r, { icon: r1 }), null);
};
Bl.displayName = 'CheckCircleOutlined';
Bl.inheritAttrs = !1;
const i1 = Bl;
var l1 = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z'
        }
      }
    ]
  },
  name: 'info-circle',
  theme: 'outlined'
};
const a1 = l1;
function Ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        s1(e, o, n[o]);
      });
  }
  return e;
}
function s1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var zl = function (t, n) {
  var r = Ks({}, t, n.attrs);
  return _(jt, Ks({}, r, { icon: a1 }), null);
};
zl.displayName = 'InfoCircleOutlined';
zl.inheritAttrs = !1;
const c1 = zl;
var u1 = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
        }
      }
    ]
  },
  name: 'close-circle',
  theme: 'outlined'
};
const f1 = u1;
function Ys(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        d1(e, o, n[o]);
      });
  }
  return e;
}
function d1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Vl = function (t, n) {
  var r = Ys({}, t, n.attrs);
  return _(jt, Ys({}, r, { icon: f1 }), null);
};
Vl.displayName = 'CloseCircleOutlined';
Vl.inheritAttrs = !1;
const h1 = Vl;
var p1 = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'
        }
      }
    ]
  },
  name: 'exclamation-circle',
  theme: 'outlined'
};
const m1 = p1;
function Js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        g1(e, o, n[o]);
      });
  }
  return e;
}
function g1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Ul = function (t, n) {
  var r = Js({}, t, n.attrs);
  return _(jt, Js({}, r, { icon: m1 }), null);
};
Ul.displayName = 'ExclamationCircleOutlined';
Ul.inheritAttrs = !1;
const v1 = Ul;
var b1 = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'
        }
      }
    ]
  },
  name: 'close',
  theme: 'outlined'
};
const y1 = b1;
function Qs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function (o) {
        _1(e, o, n[o]);
      });
  }
  return e;
}
function _1(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Wl = function (t, n) {
  var r = Qs({}, t, n.attrs);
  return _(jt, Qs({}, r, { icon: y1 }), null);
};
Wl.displayName = 'CloseOutlined';
Wl.inheritAttrs = !1;
const x1 = Wl;
var vn = {},
  Lf = 4.5,
  Af = '24px',
  If = '24px',
  Ki = '',
  $f = 'topRight',
  Rf = function () {
    return document.body;
  },
  jf = null,
  Yi = !1,
  Mf;
function C1(e) {
  var t = e.duration,
    n = e.placement,
    r = e.bottom,
    o = e.top,
    i = e.getContainer,
    l = e.closeIcon,
    a = e.prefixCls;
  a !== void 0 && (Ki = a),
    t !== void 0 && (Lf = t),
    n !== void 0 && ($f = n),
    r !== void 0 && (If = typeof r == 'number' ? ''.concat(r, 'px') : r),
    o !== void 0 && (Af = typeof o == 'number' ? ''.concat(o, 'px') : o),
    i !== void 0 && (Rf = i),
    l !== void 0 && (jf = l),
    e.rtl !== void 0 && (Yi = e.rtl),
    e.maxCount !== void 0 && (Mf = e.maxCount);
}
function w1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Af,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : If,
    r;
  switch (e) {
    case 'topLeft':
      r = { left: '0px', top: t, bottom: 'auto' };
      break;
    case 'topRight':
      r = { right: '0px', top: t, bottom: 'auto' };
      break;
    case 'bottomLeft':
      r = { left: '0px', top: 'auto', bottom: n };
      break;
    default:
      r = { right: '0px', top: 'auto', bottom: n };
      break;
  }
  return r;
}
function k1(e, t) {
  var n = e.prefixCls,
    r = e.placement,
    o = r === void 0 ? $f : r,
    i = e.getContainer,
    l = i === void 0 ? Rf : i,
    a = e.top,
    s = e.bottom,
    c = e.closeIcon,
    u = c === void 0 ? jf : c,
    f = e.appContext,
    d = H1(),
    h = d.getPrefixCls,
    m = h('notification', n || Ki),
    x = ''.concat(m, '-').concat(o, '-').concat(Yi),
    w = vn[x];
  if (w) {
    Promise.resolve(w).then(function (y) {
      t(y);
    });
    return;
  }
  var g = sn(
    ''.concat(m, '-').concat(o),
    qe({}, ''.concat(m, '-rtl'), Yi === !0)
  );
  hf.newInstance(
    {
      name: 'notification',
      prefixCls: n || Ki,
      class: g,
      style: w1(o, a, s),
      appContext: f,
      getContainer: l,
      closeIcon: function (k) {
        var A = k.prefixCls,
          R = _('span', { class: ''.concat(A, '-close-x') }, [
            mr(u, {}, _(x1, { class: ''.concat(A, '-close-icon') }, null))
          ]);
        return R;
      },
      maxCount: Mf,
      hasTransitionName: !0
    },
    function (y) {
      (vn[x] = y), t(y);
    }
  );
}
var E1 = { success: i1, info: c1, error: h1, warning: v1 };
function O1(e) {
  var t = e.icon,
    n = e.type,
    r = e.description,
    o = e.message,
    i = e.btn,
    l = e.duration === void 0 ? Lf : e.duration;
  k1(e, function (a) {
    a.notice({
      content: function (c) {
        var u = c.prefixCls,
          f = ''.concat(u, '-notice'),
          d = null;
        if (t)
          d = function () {
            return _('span', { class: ''.concat(f, '-icon') }, [mr(t)]);
          };
        else if (n) {
          var h = E1[n];
          d = function () {
            return _(
              h,
              { class: ''.concat(f, '-icon ').concat(f, '-icon-').concat(n) },
              null
            );
          };
        }
        return _('div', { class: d ? ''.concat(f, '-with-icon') : '' }, [
          d && d(),
          _('div', { class: ''.concat(f, '-message') }, [
            !r && d
              ? _(
                  'span',
                  { class: ''.concat(f, '-message-single-line-auto-margin') },
                  null
                )
              : null,
            mr(o)
          ]),
          _('div', { class: ''.concat(f, '-description') }, [mr(r)]),
          i ? _('span', { class: ''.concat(f, '-btn') }, [mr(i)]) : null
        ]);
      },
      duration: l,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
var Fr = {
    open: O1,
    close: function (t) {
      Object.keys(vn).forEach(function (n) {
        return Promise.resolve(vn[n]).then(function (r) {
          r.removeNotice(t);
        });
      });
    },
    config: C1,
    destroy: function () {
      Object.keys(vn).forEach(function (t) {
        Promise.resolve(vn[t]).then(function (n) {
          n.destroy();
        }),
          delete vn[t];
      });
    }
  },
  P1 = ['success', 'info', 'warning', 'error'];
P1.forEach(function (e) {
  Fr[e] = function (t) {
    return Fr.open(ce(ce({}, t), {}, { type: e }));
  };
});
Fr.warn = Fr.warning;
const S1 = Fr;
function Ff() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
var T1 = 'vc-util-key';
function Df() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : T1;
}
function ql(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector('head');
  return t || document.body;
}
function Zs(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ff()) return null;
  var r = document.createElement('style');
  if ((t = n.csp) !== null && t !== void 0 && t.nonce) {
    var o;
    r.nonce = (o = n.csp) === null || o === void 0 ? void 0 : o.nonce;
  }
  r.innerHTML = e;
  var i = ql(n),
    l = i.firstChild;
  return (
    n.prepend && i.prepend
      ? i.prepend(r)
      : n.prepend && l
      ? i.insertBefore(r, l)
      : i.appendChild(r),
    r
  );
}
var Ji = new Map();
function L1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = ql(t);
  return Array.from(Ji.get(n).children).find(function (r) {
    return r.tagName === 'STYLE' && r.getAttribute(Df(t)) === e;
  });
}
function A1(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = ql(n);
  if (!Ji.has(r)) {
    var o = Zs('', n),
      i = o.parentNode;
    Ji.set(r, i), i.removeChild(o);
  }
  var l = L1(t, n);
  if (l) {
    var a, s;
    if (
      (a = n.csp) !== null &&
      a !== void 0 &&
      a.nonce &&
      l.nonce !== ((s = n.csp) === null || s === void 0 ? void 0 : s.nonce)
    ) {
      var c;
      l.nonce = (c = n.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return l.innerHTML !== e && (l.innerHTML = e), l;
  }
  var u = Zs(e, n);
  return u.setAttribute(Df(n), t), u;
}
const I1 = function (e, t, n) {
  df(e, '[ant-design-vue: '.concat(t, '] ').concat(n));
};
var $1 = '-ant-'.concat(Date.now(), '-').concat(Math.random());
function R1(e, t) {
  var n = {},
    r = function (u, f) {
      var d = u.clone();
      return (d = (f == null ? void 0 : f(d)) || d), d.toRgbString();
    },
    o = function (u, f) {
      var d = new mi(u),
        h = Mr(d.toRgbString());
      (n[''.concat(f, '-color')] = r(d)),
        (n[''.concat(f, '-color-disabled')] = h[1]),
        (n[''.concat(f, '-color-hover')] = h[4]),
        (n[''.concat(f, '-color-active')] = h[6]),
        (n[''.concat(f, '-color-outline')] = d
          .clone()
          .setAlpha(0.2)
          .toRgbString()),
        (n[''.concat(f, '-color-deprecated-bg')] = h[1]),
        (n[''.concat(f, '-color-deprecated-border')] = h[3]);
    };
  if (t.primaryColor) {
    o(t.primaryColor, 'primary');
    var i = new mi(t.primaryColor),
      l = Mr(i.toRgbString());
    l.forEach(function (c, u) {
      n['primary-'.concat(u + 1)] = c;
    }),
      (n['primary-color-deprecated-l-35'] = r(i, function (c) {
        return c.lighten(35);
      })),
      (n['primary-color-deprecated-l-20'] = r(i, function (c) {
        return c.lighten(20);
      })),
      (n['primary-color-deprecated-t-20'] = r(i, function (c) {
        return c.tint(20);
      })),
      (n['primary-color-deprecated-t-50'] = r(i, function (c) {
        return c.tint(50);
      })),
      (n['primary-color-deprecated-f-12'] = r(i, function (c) {
        return c.setAlpha(c.getAlpha() * 0.12);
      }));
    var a = new mi(l[0]);
    (n['primary-color-active-deprecated-f-30'] = r(a, function (c) {
      return c.setAlpha(c.getAlpha() * 0.3);
    })),
      (n['primary-color-active-deprecated-d-02'] = r(a, function (c) {
        return c.darken(2);
      }));
  }
  t.successColor && o(t.successColor, 'success'),
    t.warningColor && o(t.warningColor, 'warning'),
    t.errorColor && o(t.errorColor, 'error'),
    t.infoColor && o(t.infoColor, 'info');
  var s = Object.keys(n).map(function (c) {
    return '--'.concat(e, '-').concat(c, ': ').concat(n[c], ';');
  });
  Ff()
    ? A1(
        `
  :root {
    `.concat(
          s.join(`
`),
          `
  }
  `
        ),
        ''.concat($1, '-dynamic-theme')
      )
    : I1(
        !1,
        'ConfigProvider',
        'SSR do not support dynamic theme with css variables.'
      );
}
var j1 = Symbol('GlobalFormContextKey'),
  M1 = function (t) {
    et(j1, t);
  },
  F1 = function () {
    return {
      getTargetContainer: { type: Function },
      getPopupContainer: { type: Function },
      prefixCls: String,
      getPrefixCls: { type: Function },
      renderEmpty: { type: Function },
      transformCellText: { type: Function },
      csp: { type: Object, default: void 0 },
      input: { type: Object },
      autoInsertSpaceInButton: { type: Boolean, default: void 0 },
      locale: { type: Object, default: void 0 },
      pageHeader: { type: Object },
      componentSize: { type: String },
      direction: { type: String },
      space: { type: Object },
      virtual: { type: Boolean, default: void 0 },
      dropdownMatchSelectWidth: { type: [Number, Boolean], default: !0 },
      form: { type: Object, default: void 0 },
      notUpdateGlobalConfig: Boolean
    };
  },
  D1 = 'ant';
function zn() {
  return dt.prefixCls || D1;
}
var Qi = tt({}),
  Nf = tt({}),
  dt = tt({});
No(function () {
  on(dt, Qi, Nf),
    (dt.prefixCls = zn()),
    (dt.getPrefixCls = function (e, t) {
      return t || (e ? ''.concat(dt.prefixCls, '-').concat(e) : dt.prefixCls);
    }),
    (dt.getRootPrefixCls = function (e, t) {
      return (
        e ||
        (dt.prefixCls
          ? dt.prefixCls
          : t && t.includes('-')
          ? t.replace(/^(.*)-[^-]*$/, '$1')
          : zn())
      );
    });
});
var _i,
  N1 = function (t) {
    _i && _i(),
      (_i = No(function () {
        on(Nf, tt(t)), on(dt, tt(t));
      })),
      t.theme && R1(zn(), t.theme);
  },
  H1 = function () {
    return {
      getPrefixCls: function (n, r) {
        return r || (n ? ''.concat(zn(), '-').concat(n) : zn());
      },
      getRootPrefixCls: function (n, r) {
        return (
          n ||
          (dt.prefixCls
            ? dt.prefixCls
            : r && r.includes('-')
            ? r.replace(/^(.*)-[^-]*$/, '$1')
            : zn())
        );
      }
    };
  },
  Or = oe({
    compatConfig: { MODE: 3 },
    name: 'AConfigProvider',
    inheritAttrs: !1,
    props: F1(),
    setup: function (t, n) {
      var r = n.slots,
        o = function (f, d) {
          var h = t.prefixCls,
            m = h === void 0 ? 'ant' : h;
          return d || (f ? ''.concat(m, '-').concat(f) : m);
        },
        i = function (f) {
          var d = t.renderEmpty || r.renderEmpty || ff;
          return d(f);
        },
        l = function (f, d) {
          var h = t.prefixCls;
          if (d) return d;
          var m = h || o('');
          return f ? ''.concat(m, '-').concat(f) : m;
        },
        a = tt(ce(ce({}, t), {}, { getPrefixCls: l, renderEmpty: i }));
      Object.keys(t).forEach(function (u) {
        ze(
          function () {
            return t[u];
          },
          function () {
            a[u] = t[u];
          }
        );
      }),
        t.notUpdateGlobalConfig ||
          (on(Qi, a),
          ze(a, function () {
            on(Qi, a);
          }));
      var s = F(function () {
        var u = {};
        if (t.locale) {
          var f, d;
          u =
            ((f = t.locale.Form) === null || f === void 0
              ? void 0
              : f.defaultValidateMessages) ||
            ((d = Hi.Form) === null || d === void 0
              ? void 0
              : d.defaultValidateMessages) ||
            {};
        }
        return (
          t.form &&
            t.form.validateMessages &&
            (u = ce(ce({}, u), t.form.validateMessages)),
          u
        );
      });
      M1({ validateMessages: s }), et('configProvider', a);
      var c = function (f) {
        var d;
        return _(
          Ry,
          { locale: t.locale || f, ANT_MARK__: Bi },
          {
            default: function () {
              return [
                (d = r.default) === null || d === void 0 ? void 0 : d.call(r)
              ];
            }
          }
        );
      };
      return (
        No(function () {
          t.direction &&
            (t1.config({ rtl: t.direction === 'rtl' }),
            S1.config({ rtl: t.direction === 'rtl' }));
        }),
        function () {
          return _(
            Ju,
            {
              children: function (f, d, h) {
                return c(h);
              }
            },
            null
          );
        }
      );
    }
  }),
  B1 = tt({
    getPrefixCls: function (t, n) {
      return n || (t ? 'ant-'.concat(t) : 'ant');
    },
    renderEmpty: ff,
    direction: 'ltr'
  });
Or.config = N1;
Or.install = function (e) {
  e.component(Or.name, Or);
};
const An = function (e, t) {
  var n = Ae('configProvider', B1),
    r = F(function () {
      return n.getPrefixCls(e, t.prefixCls);
    }),
    o = F(function () {
      var y;
      return (y = t.direction) !== null && y !== void 0 ? y : n.direction;
    }),
    i = F(function () {
      return n.getPrefixCls();
    }),
    l = F(function () {
      return n.autoInsertSpaceInButton;
    }),
    a = F(function () {
      return n.renderEmpty;
    }),
    s = F(function () {
      return n.space;
    }),
    c = F(function () {
      return n.pageHeader;
    }),
    u = F(function () {
      return n.form;
    }),
    f = F(function () {
      return t.getTargetContainer || n.getTargetContainer;
    }),
    d = F(function () {
      return t.getPopupContainer || n.getPopupContainer;
    }),
    h = F(function () {
      var y;
      return (y = t.dropdownMatchSelectWidth) !== null && y !== void 0
        ? y
        : n.dropdownMatchSelectWidth;
    }),
    m = F(function () {
      return (
        (t.virtual === void 0 ? n.virtual !== !1 : t.virtual !== !1) &&
        h.value !== !1
      );
    }),
    x = F(function () {
      return t.size || n.componentSize;
    }),
    w = F(function () {
      var y;
      return (
        t.autocomplete ||
        ((y = n.input) === null || y === void 0 ? void 0 : y.autocomplete)
      );
    }),
    g = F(function () {
      return n.csp;
    });
  return {
    configProvider: n,
    prefixCls: r,
    direction: o,
    size: x,
    getTargetContainer: f,
    getPopupContainer: d,
    space: s,
    pageHeader: c,
    form: u,
    autoInsertSpaceInButton: l,
    renderEmpty: a,
    virtual: m,
    dropdownMatchSelectWidth: h,
    rootPrefixCls: i,
    getPrefixCls: n.getPrefixCls,
    autocomplete: w,
    csp: g
  };
};
function z1(e, t) {
  for (var n = on({}, e), r = 0; r < t.length; r += 1) {
    var o = t[r];
    delete n[o];
  }
  return n;
}
var Zi = Symbol('ContextProps'),
  Xi = Symbol('InternalContextProps'),
  el = {
    id: F(function () {}),
    onFieldBlur: function () {},
    onFieldChange: function () {},
    clearValidate: function () {}
  },
  tl = {
    addFormItemField: function () {},
    removeFormItemField: function () {}
  },
  Hf = function () {
    var t = Ae(Xi, tl),
      n = Symbol('FormItemFieldKey'),
      r = zo();
    return (
      t.addFormItemField(n, r.type),
      rr(function () {
        t.removeFormItemField(n);
      }),
      et(Xi, tl),
      et(Zi, el),
      Ae(Zi, el)
    );
  };
oe({
  compatConfig: { MODE: 3 },
  name: 'AFormItemRest',
  setup: function (t, n) {
    var r = n.slots;
    return (
      et(Xi, tl),
      et(Zi, el),
      function () {
        var o;
        return (o = r.default) === null || o === void 0 ? void 0 : o.call(r);
      }
    );
  }
});
var V1 = [
    'prefixCls',
    'name',
    'id',
    'type',
    'disabled',
    'readonly',
    'tabindex',
    'autofocus',
    'value',
    'required'
  ],
  U1 = {
    prefixCls: String,
    name: String,
    id: String,
    type: String,
    defaultChecked: { type: [Boolean, Number], default: void 0 },
    checked: { type: [Boolean, Number], default: void 0 },
    disabled: Boolean,
    tabindex: { type: [Number, String] },
    readonly: Boolean,
    autofocus: Boolean,
    value: Xn.any,
    required: Boolean
  };
const W1 = oe({
  compatConfig: { MODE: 3 },
  name: 'Checkbox',
  inheritAttrs: !1,
  props: Xb(U1, {
    prefixCls: 'rc-checkbox',
    type: 'checkbox',
    defaultChecked: !1
  }),
  emits: ['click', 'change'],
  setup: function (t, n) {
    var r = n.attrs,
      o = n.emit,
      i = n.expose,
      l = fe(t.checked === void 0 ? t.defaultChecked : t.checked),
      a = fe();
    ze(
      function () {
        return t.checked;
      },
      function () {
        l.value = t.checked;
      }
    ),
      i({
        focus: function () {
          var d;
          (d = a.value) === null || d === void 0 || d.focus();
        },
        blur: function () {
          var d;
          (d = a.value) === null || d === void 0 || d.blur();
        }
      });
    var s = fe(),
      c = function (d) {
        if (!t.disabled) {
          t.checked === void 0 && (l.value = d.target.checked),
            (d.shiftKey = s.value);
          var h = {
            target: ce(ce({}, t), {}, { checked: d.target.checked }),
            stopPropagation: function () {
              d.stopPropagation();
            },
            preventDefault: function () {
              d.preventDefault();
            },
            nativeEvent: d
          };
          t.checked !== void 0 && (a.value.checked = !!t.checked),
            o('change', h),
            (s.value = !1);
        }
      },
      u = function (d) {
        o('click', d), (s.value = d.shiftKey);
      };
    return function () {
      var f,
        d = t.prefixCls,
        h = t.name,
        m = t.id,
        x = t.type,
        w = t.disabled,
        g = t.readonly,
        y = t.tabindex,
        k = t.autofocus,
        A = t.value,
        R = t.required,
        V = Ko(t, V1),
        E = r.class,
        b = r.onFocus,
        B = r.onBlur,
        q = r.onKeydown,
        Y = r.onKeypress,
        S = r.onKeyup,
        H = ce(ce({}, V), r),
        N = Object.keys(H).reduce(function (P, M) {
          return (
            (M.substr(0, 5) === 'aria-' ||
              M.substr(0, 5) === 'data-' ||
              M === 'role') &&
              (P[M] = H[M]),
            P
          );
        }, {}),
        I = sn(
          d,
          E,
          ((f = {}),
          qe(f, ''.concat(d, '-checked'), l.value),
          qe(f, ''.concat(d, '-disabled'), w),
          f)
        ),
        C = ce(
          ce(
            {
              name: h,
              id: m,
              type: x,
              readonly: g,
              disabled: w,
              tabindex: y,
              class: ''.concat(d, '-input'),
              checked: !!l.value,
              autofocus: k,
              value: A
            },
            N
          ),
          {},
          {
            onChange: c,
            onClick: u,
            onFocus: b,
            onBlur: B,
            onKeydown: q,
            onKeypress: Y,
            onKeyup: S,
            required: R
          }
        );
      return _('span', { class: I }, [
        _('input', ce({ ref: a }, C), null),
        _('span', { class: ''.concat(d, '-inner') }, null)
      ]);
    };
  }
});
var q1 = ['prefixCls', 'id'],
  Bf = function () {
    return {
      prefixCls: String,
      checked: { type: Boolean, default: void 0 },
      disabled: { type: Boolean, default: void 0 },
      isGroup: { type: Boolean, default: void 0 },
      value: Xn.any,
      name: String,
      id: String,
      autofocus: { type: Boolean, default: void 0 },
      onChange: Function,
      onFocus: Function,
      onBlur: Function,
      onClick: Function,
      'onUpdate:checked': Function,
      'onUpdate:value': Function
    };
  };
const ot = oe({
  compatConfig: { MODE: 3 },
  name: 'ARadio',
  props: Bf(),
  setup: function (t, n) {
    var r = n.emit,
      o = n.expose,
      i = n.slots,
      l = Hf(),
      a = fe(),
      s = Ae('radioGroupContext', void 0),
      c = An('radio', t),
      u = c.prefixCls,
      f = c.direction,
      d = function () {
        a.value.focus();
      },
      h = function () {
        a.value.blur();
      };
    o({ focus: d, blur: h });
    var m = function (g) {
        var y = g.target.checked;
        r('update:checked', y),
          r('update:value', y),
          r('change', g),
          l.onFieldChange();
      },
      x = function (g) {
        r('change', g), s && s.onRadioChange && s.onRadioChange(g);
      };
    return function () {
      var w,
        g = s;
      t.prefixCls;
      var y = t.id,
        k = y === void 0 ? l.id.value : y,
        A = Ko(t, q1),
        R = ce(
          { prefixCls: u.value, id: k },
          z1(A, ['onUpdate:checked', 'onUpdate:value'])
        );
      g
        ? ((R.name = g.props.name),
          (R.onChange = x),
          (R.checked = t.value === g.stateValue.value),
          (R.disabled = t.disabled || g.props.disabled))
        : (R.onChange = m);
      var V = sn(
        ((w = {}),
        qe(w, ''.concat(u.value, '-wrapper'), !0),
        qe(w, ''.concat(u.value, '-wrapper-checked'), R.checked),
        qe(w, ''.concat(u.value, '-wrapper-disabled'), R.disabled),
        qe(w, ''.concat(u.value, '-wrapper-rtl'), f.value === 'rtl'),
        w)
      );
      return _('label', { class: V }, [
        _(W1, ce(ce({}, R), {}, { type: 'radio', ref: a }), null),
        i.default && _('span', null, [i.default()])
      ]);
    };
  }
});
var G1 = Gu('large', 'default', 'small'),
  K1 = function () {
    return {
      prefixCls: String,
      value: Xn.any,
      size: Xn.oneOf(G1),
      options: { type: Array },
      disabled: { type: Boolean, default: void 0 },
      name: String,
      buttonStyle: { type: String, default: 'outline' },
      id: String,
      optionType: { type: String, default: 'default' },
      onChange: Function,
      'onUpdate:value': Function
    };
  };
const zf = oe({
    compatConfig: { MODE: 3 },
    name: 'ARadioGroup',
    props: K1(),
    setup: function (t, n) {
      var r = n.slots,
        o = n.emit,
        i = Hf(),
        l = An('radio', t),
        a = l.prefixCls,
        s = l.direction,
        c = l.size,
        u = fe(t.value),
        f = fe(!1);
      ze(
        function () {
          return t.value;
        },
        function (h) {
          (u.value = h), (f.value = !1);
        }
      );
      var d = function (m) {
        var x = u.value,
          w = m.target.value;
        'value' in t || (u.value = w),
          !f.value &&
            w !== x &&
            ((f.value = !0),
            o('update:value', w),
            o('change', m),
            i.onFieldChange()),
          nr(function () {
            f.value = !1;
          });
      };
      return (
        et('radioGroupContext', { onRadioChange: d, stateValue: u, props: t }),
        function () {
          var h,
            m = t.options,
            x = t.optionType,
            w = t.buttonStyle,
            g = t.id,
            y = g === void 0 ? i.id.value : g,
            k = ''.concat(a.value, '-group'),
            A = sn(
              k,
              ''.concat(k, '-').concat(w),
              ((h = {}),
              qe(h, ''.concat(k, '-').concat(c.value), c.value),
              qe(h, ''.concat(k, '-rtl'), s.value === 'rtl'),
              h)
            ),
            R = null;
          if (m && m.length > 0) {
            var V = x === 'button' ? ''.concat(a.value, '-button') : a.value;
            R = m.map(function (b) {
              if (typeof b == 'string' || typeof b == 'number')
                return _(
                  ot,
                  {
                    key: b,
                    prefixCls: V,
                    disabled: t.disabled,
                    value: b,
                    checked: u.value === b
                  },
                  {
                    default: function () {
                      return [b];
                    }
                  }
                );
              var B = b.value,
                q = b.disabled,
                Y = b.label;
              return _(
                ot,
                {
                  key: 'radio-group-value-options-'.concat(B),
                  prefixCls: V,
                  disabled: q || t.disabled,
                  value: B,
                  checked: u.value === B
                },
                {
                  default: function () {
                    return [Y];
                  }
                }
              );
            });
          } else {
            var E;
            R = (E = r.default) === null || E === void 0 ? void 0 : E.call(r);
          }
          return _('div', { class: A, id: y }, [R]);
        }
      );
    }
  }),
  Y1 = oe({
    compatConfig: { MODE: 3 },
    name: 'ARadioButton',
    props: Bf(),
    setup: function (t, n) {
      var r = n.slots,
        o = An('radio-button', t),
        i = o.prefixCls,
        l = Ae('radioGroupContext', void 0);
      return function () {
        var a,
          s = ce(ce({}, t), {}, { prefixCls: i.value });
        return (
          l &&
            ((s.onChange = l.onRadioChange),
            (s.checked = s.value === l.stateValue.value),
            (s.disabled = s.disabled || l.props.disabled)),
          _(ot, s, {
            default: function () {
              return [
                (a = r.default) === null || a === void 0 ? void 0 : a.call(r)
              ];
            }
          })
        );
      };
    }
  });
ot.Group = zf;
ot.Button = Y1;
ot.install = function (e) {
  return (
    e.component(ot.name, ot),
    e.component(ot.Group.name, ot.Group),
    e.component(ot.Button.name, ot.Button),
    e
  );
};
const J1 = [
    '#ef342a',
    '#f68f26',
    '#4ba946',
    '#0376c2',
    '#c077af',
    '#f8d29d',
    '#b5a87f',
    '#d0e4a9',
    '#4dc7ec'
  ],
  Q1 = oe({
    props: { idx: $l() },
    setup(e) {
      return () =>
        _(
          'div',
          {
            style: {
              width: '50px',
              height: '50px',
              background: J1[e.idx],
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '26px'
            }
          },
          [e.idx + 1]
        );
    }
  }),
  Z1 = oe({
    setup() {
      const e = fe([1, 2, 3, 4, 5, 6, 7, 8, 9]),
        t = fe('grid'),
        n = F(() => ({
          margin: '10px',
          display: t.value,
          gridTemplateColumns: '50px 50px 50px',
          gridTemplateRows: '50px 50px 50px',
          gap: '2px'
        }));
      return () =>
        _(we, null, [
          _('div', { style: { display: 'flex', gap: '10px' } }, [
            it('display:'),
            _(
              zf,
              {
                onChange: (r) => {
                  t.value = r.target.value;
                },
                value: t.value,
                name: 'radioGroup'
              },
              {
                default: () => [
                  _(ot, { value: 'grid' }, { default: () => [it('grid')] }),
                  _(
                    ot,
                    { value: 'inline-grid' },
                    { default: () => [it('inline-grid')] }
                  )
                ]
              }
            )
          ]),
          _('div', null, [
            it('我是块级元素'),
            _('div', { style: n.value }, [
              e.value.map((r, o) => _(Q1, { idx: o }, null))
            ]),
            it('我是块级元素')
          ])
        ]);
    }
  }),
  X1 = oe({
    props: { type: To() },
    setup(e) {
      const t = tt({ display: _(Z1, null, null) }),
        n = F(() => t[e.type] || _('div', null, null));
      return () => n.value;
    }
  }),
  ex = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: X1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  tx = oe({
    setup(e, t) {
      const n = fe(null);
      return (
        De(() => {
          setTimeout(() => {
            const r =
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTdmZGExYi03NDg3LTRlYjMtOTNlNS1lN2Y2YjRhY2RmZmUiLCJpZCI6OTkwOTQsImlhdCI6MTY1NjI5NzY3Nn0.iJxZxodXPrQ28iXEw1_mLsCIummsV87-OLPChOoZgdo';
            Cesium.Ion.defaultAccessToken = r;
            const o = new Cesium.Viewer('cesiumContainer');
            o.entities.add({
              name: 'Blue box',
              position: Cesium.Cartesian3.fromDegrees(-114, 40, 3e5),
              box: {
                dimensions: new Cesium.Cartesian3(4e5, 3e5, 5e5),
                material: Cesium.Color.BLUE
              }
            }),
              o.entities.add({
                name: 'Red box with black outline',
                position: Cesium.Cartesian3.fromDegrees(-107, 40, 3e5),
                box: {
                  dimensions: new Cesium.Cartesian3(4e5, 3e5, 5e5),
                  material: Cesium.Color.RED.withAlpha(0.5),
                  outline: !0,
                  outlineColor: Cesium.Color.BLACK
                }
              }),
              o.entities.add({
                name: 'Yellow box outline',
                position: Cesium.Cartesian3.fromDegrees(-100, 40, 3e5),
                box: {
                  dimensions: new Cesium.Cartesian3(4e5, 3e5, 5e5),
                  fill: !1,
                  outline: !0,
                  outlineColor: Cesium.Color.YELLOW
                }
              }),
              o.zoomTo(o.entities);
          }, 1e3 * 1);
        }),
        ze(
          () => [],
          () => {
            console.log(3333);
          }
        ),
        () =>
          _(we, null, [
            _(
              'div',
              {
                id: 'cesiumContainer',
                style: { width: '100%', height: '500px', background: 'red' }
              },
              null
            ),
            _('div', { style: 'width:100%;' }, [
              _('h3', null, [it('JS')]),
              _('div', { class: 'language-javascript', 'data-ext': 'js' }, [
                _('pre', { class: 'language-javascript' }, [
                  _('code', { ref: n }, null)
                ])
              ])
            ])
          ])
      );
    }
  }),
  nx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  rx = (e) => {
    const t = Object.assign({ './css/props/CssPropGrid.tsx': ex }),
      n = Object.assign({ './cesium/entity/EntityGeometry.tsx': nx }),
      r = [...Object.entries(t), ...Object.entries(n)],
      o = new RegExp('.+/(.+)$'),
      i = r.reduce((l, a) => {
        const s = o.exec(a[0])[1].replace('.tsx', ''),
          c = a[1].default;
        return (l[s] = c), l;
      }, {});
    Object.entries(i).forEach(([l, a]) => {
      e.component(l, a);
    });
  },
  ox = '_btns_1qf84_1',
  Xs = { 'custom-container': '_custom-container_1qf84_1', btns: ox },
  ix = '_backtotop_17uvo_1',
  lx = { backtotop: ix };
const Vf = oe({
    props: { type: To(), size: $l().def(16), color: To() },
    setup(e) {
      const t = F(() => ({ fontSize: e.size + 'px', color: e.color }));
      return () =>
        _(
          'div',
          { class: ['iconfont', `icon-${e.type}`], style: t.value },
          null
        );
    }
  }),
  ec = () =>
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0,
  ax = () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  sx = oe({
    setup() {
      const e = fe(0);
      return (
        De(() => {
          (e.value = ec()),
            window.addEventListener('scroll', () => {
              e.value = ec();
            });
        }),
        () =>
          _(
            'div',
            {
              class: lx.backtotop,
              onClick: () => {
                ax();
              },
              style: { opacity: e.value > 500 ? 1 : 0 },
              title: '回到开始'
            },
            [_(Vf, { type: 'arrow-up', size: 20 }, null)]
          )
      );
    }
  }),
  cx = '_toggletheme_2p305_1',
  ux = { toggletheme: cx },
  fx = oe({
    setup() {
      let e, t;
      const n = fe('');
      return (
        De(() => {
          (e = window == null ? void 0 : window.document.querySelector('html')),
            (t = Su('vuepress-color-scheme', 'light')),
            (n.value = t.value),
            ze(
              () => n.value,
              () => {
                n.value, (t.value = n.value);
              },
              { immediate: !0 }
            );
        }),
        () =>
          _(
            'div',
            {
              class: ux.toggletheme,
              onClick: () => {
                const r = e == null ? void 0 : e.classList.toggle('dark');
                n.value = r ? 'drak' : 'light';
              },
              title: n.value === 'drak' ? '夜晚' : '白天'
            },
            [
              _(
                Vf,
                { type: n.value === 'drak' ? 'sun' : 'moon', size: 20 },
                null
              )
            ]
          )
      );
    }
  });
const Uf = oe({
    setup(e, t) {
      return () =>
        _('div', { class: ['nav-bar'] }, [
          _(Ru, null, null),
          _('div', { class: 'navbar-items-wrapper' }, [
            _($t('NavbarSearch'), null, null),
            _('div', { style: { width: '30px' } }, null),
            _(Al, { class: 'can-hide' }, null)
          ])
        ]);
    }
  }),
  dx = '_sidebarright_1yr0w_1',
  hx = '_active_1yr0w_36',
  ao = {
    sidebarright: dx,
    'sidebar-item': '_sidebar-item_1yr0w_15',
    active: hx,
    'level-2': '_level-2_1yr0w_43',
    'level-3': '_level-3_1yr0w_49',
    'level-4': '_level-4_1yr0w_54'
  },
  px = oe({
    setup() {
      const e = Vt(),
        t = fe('');
      function n(o) {
        let i = [];
        for (let l = 0; l < o.length; l++) {
          const a = o[l];
          i.push(a), a.children.length > 0 && i.push(...n(a.children));
        }
        return i;
      }
      const r = F(() => n(e.value.headers));
      return (
        De(() => {
          (t.value = window.location.hash),
            window.addEventListener('hashchange', () => {
              t.value = window.location.hash;
            });
        }),
        () =>
          _('div', { class: ao.sidebarright }, [
            r.value.map((o) =>
              _(
                'div',
                {
                  class: [
                    ao['sidebar-item'],
                    ao[`level-${o.level}`],
                    t.value === o.link ? ao.active : ''
                  ],
                  title: o.title
                },
                [_('a', { href: o.link }, [o.title])]
              )
            )
          ])
      );
    }
  }),
  mx = oe({
    setup() {
      return (
        De(() => {}),
        () =>
          _('div', { class: Xs['custom-container'] }, [
            _(Uf, null, null),
            _(Du, null, null),
            _(Nu, null, null),
            _(px, null, null),
            _('div', { class: Xs.btns }, [_(sx, null, null), _(fx, null, null)])
          ])
      );
    }
  }),
  gx = '_banner_1gkif_13',
  vx = '_hero_1gkif_31',
  bx = '_description_1gkif_40',
  yx = '_features_1gkif_47',
  _x = '_feature_1gkif_47',
  xx = '_downup_1gkif_1',
  Dt = {
    'custom-home': '_custom-home_1gkif_9',
    'home-wrapper': '_home-wrapper_1gkif_13',
    banner: gx,
    'banner-conent': '_banner-conent_1gkif_24',
    hero: vx,
    description: bx,
    features: yx,
    feature: _x,
    'feature-img': '_feature-img_1gkif_65',
    downup: xx,
    'main-wrapper': '_main-wrapper_1gkif_93'
  },
  Cx = oe({
    name: 'HomePage',
    setup(e, t) {
      const n = At();
      wu();
      const r = Jo(),
        o = F(() => r.value.base.slice(0, -1));
      return () =>
        _('div', { class: Dt['custom-home'] }, [
          _(Uf, null, null),
          _('div', { class: Dt['home-wrapper'] }, [
            _('div', { class: Dt.banner }, [
              _('div', { class: Dt['banner-conent'] }, [
                _('div', { class: Dt.hero }, [
                  _('h1', null, [n.value.heroText]),
                  _('p', { class: Dt.description }, [n.value.tagline])
                ]),
                _('div', { class: Dt.features }, [
                  n.value.features.map((i) =>
                    _('div', { class: Dt.feature }, [
                      _('a', { href: o.value + i.link }, [
                        _(
                          'img',
                          {
                            class: Dt['feature-img'],
                            src: Qo(i.imgUrl),
                            alt: ''
                          },
                          null
                        ),
                        _('h2', null, [i.title]),
                        _('p', null, [i.details])
                      ])
                    ])
                  )
                ])
              ])
            ])
          ])
        ]);
    }
  });
const wx = ln({
    layouts: { HomePage: Cx, Layout: mx },
    enhance({ app: e, router: t, siteData: n }) {
      rx(e),
        e.mixin({
          mounted() {
            const r =
                window == null ? void 0 : window.document.querySelector('html'),
              o = window.localStorage.getItem('vuepress-color-scheme');
            setTimeout(() => {
              o === 'drak' && (r == null || r.classList.toggle('dark'));
            }, 0);
          }
        });
    },
    setup() {},
    rootComponents: []
  }),
  po = [Gm, Qm, cg, hg, bg, ob, yb, wx];
var kx = fe(Xf),
  Wf = hl({
    key: '',
    path: '',
    title: '',
    lang: '',
    frontmatter: {},
    excerpt: '',
    headers: []
  }),
  bn = fe(Wf),
  Vt = () => bn,
  qf = Symbol(''),
  At = () => {
    const e = Ae(qf);
    if (!e) throw new Error('usePageFrontmatter() is called without provider.');
    return e;
  },
  Gf = Symbol(''),
  Ex = () => {
    const e = Ae(Gf);
    if (!e) throw new Error('usePageHead() is called without provider.');
    return e;
  },
  Ox = Symbol(''),
  Kf = Symbol(''),
  Px = () => {
    const e = Ae(Kf);
    if (!e) throw new Error('usePageLang() is called without provider.');
    return e;
  },
  Gl = Symbol(''),
  Wr = () => {
    const e = Ae(Gl);
    if (!e) throw new Error('useRouteLocale() is called without provider.');
    return e;
  },
  xn = fe(Rp),
  Yf = () => xn,
  Jf = Symbol(''),
  Jo = () => {
    const e = Ae(Jf);
    if (!e) throw new Error('useSiteLocaleData() is called without provider.');
    return e;
  },
  Sx = Symbol(''),
  hn = tt({
    resolvePageData: async (e) => {
      const t = kx.value[e],
        n = await (t == null ? void 0 : t());
      return n != null ? n : Wf;
    },
    resolvePageFrontmatter: (e) => e.frontmatter,
    resolvePageHead: (e, t, n) => {
      const r = ke(t.description) ? t.description : n.description,
        o = [
          ...(se(t.head) ? t.head : []),
          ...n.head,
          ['title', {}, e],
          ['meta', { name: 'description', content: r }]
        ];
      return Mp(o);
    },
    resolvePageHeadTitle: (e, t) =>
      `${e.title ? `${e.title}` : ''}${t.title ? ` | ${t.title}` : ''}`,
    resolvePageLang: (e) => e.lang || 'en',
    resolveRouteLocale: (e, t) => su(e, t),
    resolveSiteLocaleData: (e, t) => ({ ...e, ...e.locales[t] })
  }),
  Kl = oe({
    name: 'ClientOnly',
    setup(e, t) {
      const n = fe(!1);
      return (
        De(() => {
          n.value = !0;
        }),
        () => {
          var r, o;
          return n.value
            ? (o = (r = t.slots).default) == null
              ? void 0
              : o.call(r)
            : null;
        }
      );
    }
  }),
  Tx = oe({
    name: 'Content',
    props: { pageKey: { type: String, required: !1, default: '' } },
    setup(e) {
      const t = Vt(),
        n = F(() => cu[e.pageKey || t.value.key]);
      return () => (n.value ? ve(n.value) : ve('div', '404 Not Found'));
    }
  }),
  Lx = 'Layout',
  Ax = 'NotFound',
  Ix = po.reduce((e, t) => ({ ...e, ...t.layouts }), {}),
  tc = oe({
    name: 'Vuepress',
    setup() {
      const e = Vt(),
        t = F(() => {
          let n;
          if (e.value.path) {
            const r = e.value.frontmatter.layout;
            ke(r) ? (n = r) : (n = Lx);
          } else n = Ax;
          return Ix[n];
        });
      return () => ve(t.value);
    }
  }),
  Qo = (e) => (Vr(e) ? e : `${Yf().value.base}${au(e)}`);
const $x = [
  ['v-8daa1a0e', '/', { title: '' }, ['/index.html', '/index.md']],
  [
    'v-3d6ddeb7',
    '/arcgis/',
    { title: 'ArcGIS' },
    ['/arcgis/index.html', '/arcgis/index.md']
  ],
  [
    'v-a213d2d2',
    '/browser/cache.html',
    { title: '' },
    ['/browser/cache', '/browser/cache.md']
  ],
  [
    'v-08421583',
    '/browser/conversion.html',
    { title: '' },
    ['/browser/conversion', '/browser/conversion.md']
  ],
  [
    'v-24e1b800',
    '/browser/',
    { title: '' },
    ['/browser/index.html', '/browser/index.md']
  ],
  [
    'v-74458d05',
    '/css/',
    { title: '介绍' },
    ['/css/index.html', '/css/readme.md']
  ],
  [
    'v-fffb8e28',
    '/guide/',
    { title: '指南' },
    ['/guide/index.html', '/guide/readme.md']
  ],
  [
    'v-744738f7',
    '/gis/',
    { title: 'GIS 地理信息系统' },
    ['/gis/index.html', '/gis/index.md']
  ],
  [
    'v-9323d598',
    '/js/ceshi.html',
    { title: '这是测试' },
    ['/js/ceshi', '/js/ceshi.md']
  ],
  [
    'v-2d0a9a6d',
    '/js/',
    { title: '这是 JS 相关' },
    ['/js/index.html', '/js/readme.md']
  ],
  [
    'v-52c14c99',
    '/potree/',
    { title: 'Potree' },
    ['/potree/index.html', '/potree/index.md']
  ],
  [
    'v-10c44358',
    '/qgis/cuttif.html',
    { title: '根据矢量轮廓裁剪 tif' },
    ['/qgis/cuttif', '/qgis/cuttif.md']
  ],
  [
    'v-152bcb16',
    '/qgis/',
    { title: 'QGIS' },
    ['/qgis/index.html', '/qgis/index.md']
  ],
  [
    'v-d440f426',
    '/tools/',
    { title: '介绍' },
    ['/tools/index.html', '/tools/readme.md']
  ],
  [
    'v-cb29af62',
    '/webgl/',
    { title: 'WebGL 介绍' },
    ['/webgl/index.html', '/webgl/index.md']
  ],
  [
    'v-7cc14ffa',
    '/cesium/basic/coordinate.html',
    { title: 'Ceisum 常用坐标' },
    ['/cesium/basic/coordinate', '/cesium/basic/coordinate.md']
  ],
  [
    'v-d1b2bbd2',
    '/cesium/basic/model.html',
    { title: 'Model' },
    ['/cesium/basic/model', '/cesium/basic/model.md']
  ],
  [
    'v-a87e88b4',
    '/cesium/entity/',
    { title: 'Entity 介绍' },
    ['/cesium/entity/index.html', '/cesium/entity/index.md']
  ],
  [
    'v-2bc2d2ee',
    '/cesium/primitive/',
    { title: 'Primitive' },
    ['/cesium/primitive/index.html', '/cesium/primitive/index.md']
  ],
  [
    'v-e1f1f660',
    '/cesium/setup/desc.html',
    { title: 'Cesium' },
    ['/cesium/setup/desc', '/cesium/setup/desc.md']
  ],
  [
    'v-5f8b6f8f',
    '/cesium/setup/pore.html',
    { title: 'Primitive 与 Entity' },
    ['/cesium/setup/pore', '/cesium/setup/pore.md']
  ],
  [
    'v-dbe2d262',
    '/cesium/setup/start.html',
    { title: '快速上手' },
    ['/cesium/setup/start', '/cesium/setup/start.md']
  ],
  [
    'v-fa3aae8c',
    '/css/concept/box.html',
    { title: 'CSS 盒模型' },
    ['/css/concept/box', '/css/concept/box.md']
  ],
  [
    'v-1dd271de',
    '/css/concept/select.html',
    { title: '选择器' },
    ['/css/concept/select', '/css/concept/select.md']
  ],
  [
    'v-ea113d1a',
    '/css/concept/stacking.html',
    { title: '层叠上下文' },
    ['/css/concept/stacking', '/css/concept/stacking.md']
  ],
  [
    'v-d37c0208',
    '/css/props/flex.html',
    { title: 'flex' },
    ['/css/props/flex', '/css/props/flex.md']
  ],
  [
    'v-4b457bcf',
    '/css/props/grid.html',
    { title: 'grid' },
    ['/css/props/grid', '/css/props/grid.md']
  ],
  [
    'v-cd20c196',
    '/gis/basic/resolution.html',
    { title: '比例尺和分辨率' },
    ['/gis/basic/resolution', '/gis/basic/resolution.md']
  ],
  [
    'v-c654dfb8',
    '/gis/basic/s3m.html',
    { title: 'S3M' },
    ['/gis/basic/s3m', '/gis/basic/s3m.md']
  ],
  [
    'v-658e3dcf',
    '/gis/data/ortho.html',
    { title: '正射影像' },
    ['/gis/data/ortho', '/gis/data/ortho.md']
  ],
  [
    'v-ab4aa9a8',
    '/gis/data/satellite.html',
    { title: '卫星影像' },
    ['/gis/data/satellite', '/gis/data/satellite.md']
  ],
  [
    'v-45e4fe64',
    '/gis/data/tilt.html',
    { title: '倾斜摄影介绍' },
    ['/gis/data/tilt', '/gis/data/tilt.md']
  ],
  [
    'v-72181280',
    '/gis/ogc/3dtiles.html',
    { title: '3dTiles 格式介绍' },
    ['/gis/ogc/3dtiles', '/gis/ogc/3dtiles.md']
  ],
  [
    'v-7407d6da',
    '/gis/ogc/kmlorkmz.html',
    { title: 'KML 文件解析' },
    ['/gis/ogc/kmlorkmz', '/gis/ogc/kmlorkmz.md']
  ],
  [
    'v-0ce4deae',
    '/gis/ogc/ogc.html',
    { title: 'OGC' },
    ['/gis/ogc/ogc', '/gis/ogc/ogc.md']
  ],
  [
    'v-ff68d6e6',
    '/gis/ogc/wcs.html',
    { title: 'WCS' },
    ['/gis/ogc/wcs', '/gis/ogc/wcs.md']
  ],
  [
    'v-dd6c35d2',
    '/gis/ogc/wms.html',
    { title: 'WMS' },
    ['/gis/ogc/wms', '/gis/ogc/wms.md']
  ],
  [
    'v-3f60af09',
    '/gis/ogc/wmts.html',
    { title: 'WMTS' },
    ['/gis/ogc/wmts', '/gis/ogc/wmts.md']
  ],
  [
    'v-2ffc96da',
    '/gis/ogc/wps.html',
    { title: 'WPS' },
    ['/gis/ogc/wps', '/gis/ogc/wps.md']
  ],
  [
    'v-6fcb2b96',
    '/potree/basic/skybox.html',
    { title: '' },
    ['/potree/basic/skybox', '/potree/basic/skybox.md']
  ],
  [
    'v-23a924a1',
    '/three/start/axis.html',
    { title: '坐标系' },
    ['/three/start/axis', '/three/start/axis.md']
  ],
  [
    'v-2070e3b1',
    '/three/start/desc.html',
    { title: 'THREE.JS' },
    ['/three/start/desc', '/three/start/desc.md']
  ],
  [
    'v-7f3673da',
    '/three/start/light.html',
    { title: '光源' },
    ['/three/start/light', '/three/start/light.md']
  ],
  [
    'v-dabfd1e0',
    '/three/start/orbitControls.html',
    { title: '轨道控制器' },
    ['/three/start/orbitControls', '/three/start/orbitControls.md']
  ],
  [
    'v-6918925a',
    '/three/start/setup.html',
    { title: '起步' },
    ['/three/start/setup', '/three/start/setup.md']
  ],
  [
    'v-2de0940e',
    '/three/start/start.html',
    { title: '3D 场景' },
    ['/three/start/start', '/three/start/start.md']
  ],
  [
    'v-d40f9c1e',
    '/three/start/stats.html',
    { title: '用 stats 查看渲染帧率' },
    ['/three/start/stats', '/three/start/stats.md']
  ],
  [
    'v-7b32b4f2',
    '/tools/git/codeverification.html',
    {
      title: '使用 husky + lint-staged + commitlint + commitizen 代码提交校验'
    },
    ['/tools/git/codeverification', '/tools/git/codeverification.md']
  ],
  [
    'v-1696ab78',
    '/tools/git/command.html',
    { title: '基础命令' },
    ['/tools/git/command', '/tools/git/command.md']
  ],
  [
    'v-4f3a3e89',
    '/tools/git/crlforlf.html',
    { title: 'git 换行符 CRLF 和 LF' },
    ['/tools/git/crlforlf', '/tools/git/crlforlf.md']
  ],
  [
    'v-290c00d0',
    '/tools/git/sshkey.html',
    { title: '配置 SSH key' },
    ['/tools/git/sshkey', '/tools/git/sshkey.md']
  ],
  [
    'v-6471236e',
    '/tools/other/datgui.html',
    { title: 'dat.Gui' },
    ['/tools/other/datgui', '/tools/other/datgui.md']
  ],
  [
    'v-a1606d4c',
    '/tools/other/prettier.html',
    { title: 'Prettier' },
    ['/tools/other/prettier', '/tools/other/prettier.md']
  ],
  [
    'v-b560a2a4',
    '/tools/package/npm/unexpected.html',
    { title: 'npm unexpected token .' },
    ['/tools/package/npm/unexpected', '/tools/package/npm/unexpected.md']
  ],
  ['v-3706649a', '/404.html', { title: '' }, ['/404']]
];
var Rx = () =>
    $x.reduce(
      (e, [t, n, r, o]) => (
        e.push(
          { name: t, path: n, component: tc, meta: r },
          ...o.map((i) => ({ path: i, redirect: n }))
        ),
        e
      ),
      [{ name: '404', path: '/:catchAll(.*)', component: tc }]
    ),
  jx = rm,
  Mx = () => {
    const e = Hm({
      history: jx(lu(xn.value.base)),
      routes: Rx(),
      scrollBehavior: (t, n, r) => r || (t.hash ? { el: t.hash } : { top: 0 })
    });
    return (
      e.beforeResolve(async (t, n) => {
        var r;
        (t.path !== n.path || n === Ht) &&
          ([bn.value] = await Promise.all([
            hn.resolvePageData(t.name),
            (r = cu[t.name]) == null ? void 0 : r.__asyncLoader()
          ]));
      }),
      e
    );
  },
  Fx = (e) => {
    e.component('ClientOnly', Kl), e.component('Content', Tx);
  },
  Dx = (e, t) => {
    const n = F(() =>
        hn.resolveRouteLocale(xn.value.locales, t.currentRoute.value.path)
      ),
      r = F(() => hn.resolveSiteLocaleData(xn.value, n.value)),
      o = F(() => hn.resolvePageFrontmatter(bn.value)),
      i = F(() => hn.resolvePageHeadTitle(bn.value, r.value)),
      l = F(() => hn.resolvePageHead(i.value, o.value, r.value)),
      a = F(() => hn.resolvePageLang(bn.value));
    return (
      e.provide(Gl, n),
      e.provide(Jf, r),
      e.provide(qf, o),
      e.provide(Ox, i),
      e.provide(Gf, l),
      e.provide(Kf, a),
      Object.defineProperties(e.config.globalProperties, {
        $frontmatter: { get: () => o.value },
        $head: { get: () => l.value },
        $headTitle: { get: () => i.value },
        $lang: { get: () => a.value },
        $page: { get: () => bn.value },
        $routeLocale: { get: () => n.value },
        $site: { get: () => xn.value },
        $siteLocale: { get: () => r.value },
        $withBase: { get: () => Qo }
      }),
      {
        pageData: bn,
        pageFrontmatter: o,
        pageHead: l,
        pageHeadTitle: i,
        pageLang: a,
        routeLocale: n,
        siteData: xn,
        siteLocaleData: r
      }
    );
  },
  Nx = () => {
    const e = an(),
      t = Ex(),
      n = Px(),
      r = fe([]),
      o = () => {
        t.value.forEach((l) => {
          const a = Hx(l);
          a && r.value.push(a);
        });
      },
      i = () => {
        (document.documentElement.lang = n.value),
          r.value.forEach((l) => {
            l.parentNode === document.head && document.head.removeChild(l);
          }),
          r.value.splice(0, r.value.length),
          t.value.forEach((l) => {
            const a = Bx(l);
            a !== null && (document.head.appendChild(a), r.value.push(a));
          });
      };
    et(Sx, i),
      De(() => {
        o(),
          i(),
          ze(
            () => e.path,
            () => i()
          );
      });
  },
  Hx = ([e, t, n = '']) => {
    const r = Object.entries(t)
        .map(([a, s]) => (ke(s) ? `[${a}="${s}"]` : s === !0 ? `[${a}]` : ''))
        .join(''),
      o = `head > ${e}${r}`;
    return (
      Array.from(document.querySelectorAll(o)).find((a) => a.innerText === n) ||
      null
    );
  },
  Bx = ([e, t, n]) => {
    if (!ke(e)) return null;
    const r = document.createElement(e);
    return (
      wl(t) &&
        Object.entries(t).forEach(([o, i]) => {
          ke(i) ? r.setAttribute(o, i) : i === !0 && r.setAttribute(o, '');
        }),
      ke(n) && r.appendChild(document.createTextNode(n)),
      r
    );
  },
  zx = Ip,
  Vx = async () => {
    var n;
    const e = zx({
        name: 'VuepressApp',
        setup() {
          var r;
          Nx();
          for (const o of po) (r = o.setup) == null || r.call(o);
          return () => [
            ve(_u),
            ...po.flatMap(({ rootComponents: o = [] }) => o.map((i) => ve(i)))
          ];
        }
      }),
      t = Mx();
    Fx(e), Dx(e, t);
    for (const r of po)
      await ((n = r.enhance) == null
        ? void 0
        : n.call(r, { app: e, router: t, siteData: xn }));
    return e.use(t), { app: e, router: t };
  };
Vx().then(({ app: e, router: t }) => {
  t.isReady().then(() => {
    e.mount('#app');
  });
});
export {
  Re as _,
  _e as a,
  it as b,
  ae as c,
  Vx as createVueApp,
  Vh as d,
  _ as e,
  je as f,
  Z as o,
  $t as r,
  Ue as w
};
