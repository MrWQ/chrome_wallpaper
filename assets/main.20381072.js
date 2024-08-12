var Rp = Object.defineProperty;
var Np = (e,t,n)=>t in e ? Rp(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var tn = (e,t,n)=>(Np(e, typeof t != "symbol" ? t + "" : t, n),
n);
function va(e, t) {
    const n = Object.create(null)
      , r = e.split(",");
    for (let o = 0; o < r.length; o++)
        n[r[o]] = !0;
    return t ? o=>!!n[o.toLowerCase()] : o=>!!n[o]
}
const Ye = {}
  , xr = []
  , vt = ()=>{}
  , Pp = ()=>!1
  , Lp = /^on[^a-z]/
  , ds = e=>Lp.test(e)
  , ga = e=>e.startsWith("onUpdate:")
  , nt = Object.assign
  , ya = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Mp = Object.prototype.hasOwnProperty
  , Re = (e,t)=>Mp.call(e, t)
  , ve = Array.isArray
  , Sr = e=>yo(e) === "[object Map]"
  , ps = e=>yo(e) === "[object Set]"
  , pl = e=>yo(e) === "[object Date]"
  , Ae = e=>typeof e == "function"
  , Ne = e=>typeof e == "string"
  , ro = e=>typeof e == "symbol"
  , Be = e=>e !== null && typeof e == "object"
  , Qo = e=>Be(e) && Ae(e.then) && Ae(e.catch)
  , Cu = Object.prototype.toString
  , yo = e=>Cu.call(e)
  , Dp = e=>yo(e).slice(8, -1)
  , Tu = e=>yo(e) === "[object Object]"
  , _a = e=>Ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , jo = va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , hs = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , Bp = /-(\w)/g
  , Qt = hs(e=>e.replace(Bp, (t,n)=>n ? n.toUpperCase() : ""))
  , Fp = /\B([A-Z])/g
  , fr = hs(e=>e.replace(Fp, "-$1").toLowerCase())
  , ms = hs(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , oi = hs(e=>e ? `on${ms(e)}` : "")
  , oo = (e,t)=>!Object.is(e, t)
  , Ho = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , Xo = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , Ii = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Up = e=>{
    const t = Ne(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let hl;
const Ai = ()=>hl || (hl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qe(e) {
    if (ve(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , o = Ne(r) ? Vp(r) : Qe(r);
            if (o)
                for (const s in o)
                    t[s] = o[s]
        }
        return t
    } else {
        if (Ne(e))
            return e;
        if (Be(e))
            return e
    }
}
const zp = /;(?![^(]*\))/g
  , jp = /:([^]+)/
  , Hp = /\/\*[^]*?\*\//g;
function Vp(e) {
    const t = {};
    return e.replace(Hp, "").split(zp).forEach(n=>{
        if (n) {
            const r = n.split(jp);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function pe(e) {
    let t = "";
    if (Ne(e))
        t = e;
    else if (ve(e))
        for (let n = 0; n < e.length; n++) {
            const r = pe(e[n]);
            r && (t += r + " ")
        }
    else if (Be(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Wp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Kp = va(Wp);
function $u(e) {
    return !!e || e === ""
}
function Yp(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = vs(e[r], t[r]);
    return n
}
function vs(e, t) {
    if (e === t)
        return !0;
    let n = pl(e)
      , r = pl(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = ro(e),
    r = ro(t),
    n || r)
        return e === t;
    if (n = ve(e),
    r = ve(t),
    n || r)
        return n && r ? Yp(e, t) : !1;
    if (n = Be(e),
    r = Be(t),
    n || r) {
        if (!n || !r)
            return !1;
        const o = Object.keys(e).length
          , s = Object.keys(t).length;
        if (o !== s)
            return !1;
        for (const i in e) {
            const a = e.hasOwnProperty(i)
              , l = t.hasOwnProperty(i);
            if (a && !l || !a && l || !vs(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
function Iu(e, t) {
    return e.findIndex(n=>vs(n, t))
}
const we = e=>Ne(e) ? e : e == null ? "" : ve(e) || Be(e) && (e.toString === Cu || !Ae(e.toString)) ? JSON.stringify(e, Au, 2) : String(e)
  , Au = (e,t)=>t && t.__v_isRef ? Au(e, t.value) : Sr(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`] = o,
    n), {})
} : ps(t) ? {
    [`Set(${t.size})`]: [...t.values()]
} : Be(t) && !ve(t) && !Tu(t) ? String(t) : t;
let Rt;
class Ou {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Rt,
        !t && Rt && (this.index = (Rt.scopes || (Rt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Rt;
            try {
                return Rt = this,
                t()
            } finally {
                Rt = n
            }
        }
    }
    on() {
        Rt = this
    }
    off() {
        Rt = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o,
                o.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function ku(e) {
    return new Ou(e)
}
function qp(e, t=Rt) {
    t && t.active && t.effects.push(e)
}
function gs() {
    return Rt
}
function ys(e) {
    Rt && Rt.cleanups.push(e)
}
const ba = e=>{
    const t = new Set(e);
    return t.w = 0,
    t.n = 0,
    t
}
  , Ru = e=>(e.w & Dn) > 0
  , Nu = e=>(e.n & Dn) > 0
  , Gp = ({deps: e})=>{
    if (e.length)
        for (let t = 0; t < e.length; t++)
            e[t].w |= Dn
}
  , Jp = e=>{
    const {deps: t} = e;
    if (t.length) {
        let n = 0;
        for (let r = 0; r < t.length; r++) {
            const o = t[r];
            Ru(o) && !Nu(o) ? o.delete(e) : t[n++] = o,
            o.w &= ~Dn,
            o.n &= ~Dn
        }
        t.length = n
    }
}
  , Zo = new WeakMap;
let Kr = 0
  , Dn = 1;
const Oi = 30;
let Gt;
const rr = Symbol("")
  , ki = Symbol("");
class wa {
    constructor(t, n=null, r) {
        this.fn = t,
        this.scheduler = n,
        this.active = !0,
        this.deps = [],
        this.parent = void 0,
        qp(this, r)
    }
    run() {
        if (!this.active)
            return this.fn();
        let t = Gt
          , n = Rn;
        for (; t; ) {
            if (t === this)
                return;
            t = t.parent
        }
        try {
            return this.parent = Gt,
            Gt = this,
            Rn = !0,
            Dn = 1 << ++Kr,
            Kr <= Oi ? Gp(this) : ml(this),
            this.fn()
        } finally {
            Kr <= Oi && Jp(this),
            Dn = 1 << --Kr,
            Gt = this.parent,
            Rn = n,
            this.parent = void 0,
            this.deferStop && this.stop()
        }
    }
    stop() {
        Gt === this ? this.deferStop = !0 : this.active && (ml(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function ml(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++)
            t[n].delete(e);
        t.length = 0
    }
}
let Rn = !0;
const Pu = [];
function Or() {
    Pu.push(Rn),
    Rn = !1
}
function kr() {
    const e = Pu.pop();
    Rn = e === void 0 ? !0 : e
}
function It(e, t, n) {
    if (Rn && Gt) {
        let r = Zo.get(e);
        r || Zo.set(e, r = new Map);
        let o = r.get(n);
        o || r.set(n, o = ba()),
        Lu(o)
    }
}
function Lu(e, t) {
    let n = !1;
    Kr <= Oi ? Nu(e) || (e.n |= Dn,
    n = !Ru(e)) : n = !e.has(Gt),
    n && (e.add(Gt),
    Gt.deps.push(e))
}
function hn(e, t, n, r, o, s) {
    const i = Zo.get(e);
    if (!i)
        return;
    let a = [];
    if (t === "clear")
        a = [...i.values()];
    else if (n === "length" && ve(e)) {
        const l = Number(r);
        i.forEach((c,f)=>{
            (f === "length" || f >= l) && a.push(c)
        }
        )
    } else
        switch (n !== void 0 && a.push(i.get(n)),
        t) {
        case "add":
            ve(e) ? _a(n) && a.push(i.get("length")) : (a.push(i.get(rr)),
            Sr(e) && a.push(i.get(ki)));
            break;
        case "delete":
            ve(e) || (a.push(i.get(rr)),
            Sr(e) && a.push(i.get(ki)));
            break;
        case "set":
            Sr(e) && a.push(i.get(rr));
            break
        }
    if (a.length === 1)
        a[0] && Ri(a[0]);
    else {
        const l = [];
        for (const c of a)
            c && l.push(...c);
        Ri(ba(l))
    }
}
function Ri(e, t) {
    const n = ve(e) ? e : [...e];
    for (const r of n)
        r.computed && vl(r);
    for (const r of n)
        r.computed || vl(r)
}
function vl(e, t) {
    (e !== Gt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function Qp(e, t) {
    var n;
    return (n = Zo.get(e)) == null ? void 0 : n.get(t)
}
const Xp = va("__proto__,__v_isRef,__isVue")
  , Mu = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(ro))
  , Zp = xa()
  , eh = xa(!1, !0)
  , th = xa(!0)
  , gl = nh();
function nh() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const r = ke(this);
            for (let s = 0, i = this.length; s < i; s++)
                It(r, "get", s + "");
            const o = r[t](...n);
            return o === -1 || o === !1 ? r[t](...n.map(ke)) : o
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            Or();
            const r = ke(this)[t].apply(this, n);
            return kr(),
            r
        }
    }
    ),
    e
}
function rh(e) {
    const t = ke(this);
    return It(t, "has", e),
    t.hasOwnProperty(e)
}
function xa(e=!1, t=!1) {
    return function(r, o, s) {
        if (o === "__v_isReactive")
            return !e;
        if (o === "__v_isReadonly")
            return e;
        if (o === "__v_isShallow")
            return t;
        if (o === "__v_raw" && s === (e ? t ? _h : zu : t ? Uu : Fu).get(r))
            return r;
        const i = ve(r);
        if (!e) {
            if (i && Re(gl, o))
                return Reflect.get(gl, o, s);
            if (o === "hasOwnProperty")
                return rh
        }
        const a = Reflect.get(r, o, s);
        return (ro(o) ? Mu.has(o) : Xp(o)) || (e || It(r, "get", o),
        t) ? a : Fe(a) ? i && _a(o) ? a : a.value : Be(a) ? e ? bs(a) : $t(a) : a
    }
}
const oh = Du()
  , sh = Du(!0);
function Du(e=!1) {
    return function(n, r, o, s) {
        let i = n[r];
        if (Tr(i) && Fe(i) && !Fe(o))
            return !1;
        if (!e && (!es(o) && !Tr(o) && (i = ke(i),
        o = ke(o)),
        !ve(n) && Fe(i) && !Fe(o)))
            return i.value = o,
            !0;
        const a = ve(n) && _a(r) ? Number(r) < n.length : Re(n, r)
          , l = Reflect.set(n, r, o, s);
        return n === ke(s) && (a ? oo(o, i) && hn(n, "set", r, o) : hn(n, "add", r, o)),
        l
    }
}
function ih(e, t) {
    const n = Re(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && hn(e, "delete", t, void 0),
    r
}
function ah(e, t) {
    const n = Reflect.has(e, t);
    return (!ro(t) || !Mu.has(t)) && It(e, "has", t),
    n
}
function lh(e) {
    return It(e, "iterate", ve(e) ? "length" : rr),
    Reflect.ownKeys(e)
}
const Bu = {
    get: Zp,
    set: oh,
    deleteProperty: ih,
    has: ah,
    ownKeys: lh
}
  , ch = {
    get: th,
    set(e, t) {
        return !0
    },
    deleteProperty(e, t) {
        return !0
    }
}
  , uh = nt({}, Bu, {
    get: eh,
    set: sh
})
  , Sa = e=>e
  , _s = e=>Reflect.getPrototypeOf(e);
function To(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const o = ke(e)
      , s = ke(t);
    n || (t !== s && It(o, "get", t),
    It(o, "get", s));
    const {has: i} = _s(o)
      , a = r ? Sa : n ? Ta : so;
    if (i.call(o, t))
        return a(e.get(t));
    if (i.call(o, s))
        return a(e.get(s));
    e !== o && e.get(t)
}
function $o(e, t=!1) {
    const n = this.__v_raw
      , r = ke(n)
      , o = ke(e);
    return t || (e !== o && It(r, "has", e),
    It(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
}
function Io(e, t=!1) {
    return e = e.__v_raw,
    !t && It(ke(e), "iterate", rr),
    Reflect.get(e, "size", e)
}
function yl(e) {
    e = ke(e);
    const t = ke(this);
    return _s(t).has.call(t, e) || (t.add(e),
    hn(t, "add", e, e)),
    this
}
function _l(e, t) {
    t = ke(t);
    const n = ke(this)
      , {has: r, get: o} = _s(n);
    let s = r.call(n, e);
    s || (e = ke(e),
    s = r.call(n, e));
    const i = o.call(n, e);
    return n.set(e, t),
    s ? oo(t, i) && hn(n, "set", e, t) : hn(n, "add", e, t),
    this
}
function bl(e) {
    const t = ke(this)
      , {has: n, get: r} = _s(t);
    let o = n.call(t, e);
    o || (e = ke(e),
    o = n.call(t, e)),
    r && r.call(t, e);
    const s = t.delete(e);
    return o && hn(t, "delete", e, void 0),
    s
}
function wl() {
    const e = ke(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && hn(e, "clear", void 0, void 0),
    n
}
function Ao(e, t) {
    return function(r, o) {
        const s = this
          , i = s.__v_raw
          , a = ke(i)
          , l = t ? Sa : e ? Ta : so;
        return !e && It(a, "iterate", rr),
        i.forEach((c,f)=>r.call(o, l(c), l(f), s))
    }
}
function Oo(e, t, n) {
    return function(...r) {
        const o = this.__v_raw
          , s = ke(o)
          , i = Sr(s)
          , a = e === "entries" || e === Symbol.iterator && i
          , l = e === "keys" && i
          , c = o[e](...r)
          , f = n ? Sa : t ? Ta : so;
        return !t && It(s, "iterate", l ? ki : rr),
        {
            next() {
                const {value: u, done: p} = c.next();
                return p ? {
                    value: u,
                    done: p
                } : {
                    value: a ? [f(u[0]), f(u[1])] : f(u),
                    done: p
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Sn(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}
function fh() {
    const e = {
        get(s) {
            return To(this, s)
        },
        get size() {
            return Io(this)
        },
        has: $o,
        add: yl,
        set: _l,
        delete: bl,
        clear: wl,
        forEach: Ao(!1, !1)
    }
      , t = {
        get(s) {
            return To(this, s, !1, !0)
        },
        get size() {
            return Io(this)
        },
        has: $o,
        add: yl,
        set: _l,
        delete: bl,
        clear: wl,
        forEach: Ao(!1, !0)
    }
      , n = {
        get(s) {
            return To(this, s, !0)
        },
        get size() {
            return Io(this, !0)
        },
        has(s) {
            return $o.call(this, s, !0)
        },
        add: Sn("add"),
        set: Sn("set"),
        delete: Sn("delete"),
        clear: Sn("clear"),
        forEach: Ao(!0, !1)
    }
      , r = {
        get(s) {
            return To(this, s, !0, !0)
        },
        get size() {
            return Io(this, !0)
        },
        has(s) {
            return $o.call(this, s, !0)
        },
        add: Sn("add"),
        set: Sn("set"),
        delete: Sn("delete"),
        clear: Sn("clear"),
        forEach: Ao(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(s=>{
        e[s] = Oo(s, !1, !1),
        n[s] = Oo(s, !0, !1),
        t[s] = Oo(s, !1, !0),
        r[s] = Oo(s, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [dh,ph,hh,mh] = fh();
function Ea(e, t) {
    const n = t ? e ? mh : hh : e ? ph : dh;
    return (r,o,s)=>o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(Re(n, o) && o in r ? n : r, o, s)
}
const vh = {
    get: Ea(!1, !1)
}
  , gh = {
    get: Ea(!1, !0)
}
  , yh = {
    get: Ea(!0, !1)
}
  , Fu = new WeakMap
  , Uu = new WeakMap
  , zu = new WeakMap
  , _h = new WeakMap;
function bh(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function wh(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : bh(Dp(e))
}
function $t(e) {
    return Tr(e) ? e : Ca(e, !1, Bu, vh, Fu)
}
function ju(e) {
    return Ca(e, !1, uh, gh, Uu)
}
function bs(e) {
    return Ca(e, !0, ch, yh, zu)
}
function Ca(e, t, n, r, o) {
    if (!Be(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const s = o.get(e);
    if (s)
        return s;
    const i = wh(e);
    if (i === 0)
        return e;
    const a = new Proxy(e,i === 2 ? r : n);
    return o.set(e, a),
    a
}
function Nn(e) {
    return Tr(e) ? Nn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Tr(e) {
    return !!(e && e.__v_isReadonly)
}
function es(e) {
    return !!(e && e.__v_isShallow)
}
function Hu(e) {
    return Nn(e) || Tr(e)
}
function ke(e) {
    const t = e && e.__v_raw;
    return t ? ke(t) : e
}
function ws(e) {
    return Xo(e, "__v_skip", !0),
    e
}
const so = e=>Be(e) ? $t(e) : e
  , Ta = e=>Be(e) ? bs(e) : e;
function $a(e) {
    Rn && Gt && (e = ke(e),
    Lu(e.dep || (e.dep = ba())))
}
function Ia(e, t) {
    e = ke(e);
    const n = e.dep;
    n && Ri(n)
}
function Fe(e) {
    return !!(e && e.__v_isRef === !0)
}
function q(e) {
    return Vu(e, !1)
}
function Gr(e) {
    return Vu(e, !0)
}
function Vu(e, t) {
    return Fe(e) ? e : new xh(e,t)
}
class xh {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : ke(t),
        this._value = n ? t : so(t)
    }
    get value() {
        return $a(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || es(t) || Tr(t);
        t = n ? t : ke(t),
        oo(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : so(t),
        Ia(this))
    }
}
function d(e) {
    return Fe(e) ? e.value : e
}
const Sh = {
    get: (e,t,n)=>d(Reflect.get(e, t, n)),
    set: (e,t,n,r)=>{
        const o = e[t];
        return Fe(o) && !Fe(n) ? (o.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Wu(e) {
    return Nn(e) ? e : new Proxy(e,Sh)
}
class Eh {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t(()=>$a(this), ()=>Ia(this));
        this._get = n,
        this._set = r
    }
    get value() {
        return this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function Ch(e) {
    return new Eh(e)
}
function Ku(e) {
    const t = ve(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Yu(e, n);
    return t
}
class Th {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Qp(ke(this._object), this._key)
    }
}
class $h {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function io(e, t, n) {
    return Fe(e) ? e : Ae(e) ? new $h(e) : Be(e) && arguments.length > 1 ? Yu(e, t, n) : q(e)
}
function Yu(e, t, n) {
    const r = e[t];
    return Fe(r) ? r : new Th(e,t,n)
}
class Ih {
    constructor(t, n, r, o) {
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this._dirty = !0,
        this.effect = new wa(t,()=>{
            this._dirty || (this._dirty = !0,
            Ia(this))
        }
        ),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !o,
        this.__v_isReadonly = r
    }
    get value() {
        const t = ke(this);
        return $a(t),
        (t._dirty || !t._cacheable) && (t._dirty = !1,
        t._value = t.effect.run()),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
}
function qu(e, t, n=!1) {
    let r, o;
    const s = Ae(e);
    return s ? (r = e,
    o = vt) : (r = e.get,
    o = e.set),
    new Ih(r,o,s || !o,n)
}
function Ah(e, ...t) {}
function Pn(e, t, n, r) {
    let o;
    try {
        o = r ? e(...r) : e()
    } catch (s) {
        xs(s, t, n)
    }
    return o
}
function Bt(e, t, n, r) {
    if (Ae(e)) {
        const s = Pn(e, t, n, r);
        return s && Qo(s) && s.catch(i=>{
            xs(i, t, n)
        }
        ),
        s
    }
    const o = [];
    for (let s = 0; s < e.length; s++)
        o.push(Bt(e[s], t, n, r));
    return o
}
function xs(e, t, n, r=!0) {
    const o = t ? t.vnode : null;
    if (t) {
        let s = t.parent;
        const i = t.proxy
          , a = n;
        for (; s; ) {
            const c = s.ec;
            if (c) {
                for (let f = 0; f < c.length; f++)
                    if (c[f](e, i, a) === !1)
                        return
            }
            s = s.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            Pn(l, null, 10, [e, i, a]);
            return
        }
    }
    Oh(e, n, o, r)
}
function Oh(e, t, n, r=!0) {
    console.error(e)
}
let ao = !1
  , Ni = !1;
const ht = [];
let on = 0;
const Er = [];
let dn = null
  , Jn = 0;
const Gu = Promise.resolve();
let Aa = null;
function ft(e) {
    const t = Aa || Gu;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function kh(e) {
    let t = on + 1
      , n = ht.length;
    for (; t < n; ) {
        const r = t + n >>> 1;
        lo(ht[r]) < e ? t = r + 1 : n = r
    }
    return t
}
function Oa(e) {
    (!ht.length || !ht.includes(e, ao && e.allowRecurse ? on + 1 : on)) && (e.id == null ? ht.push(e) : ht.splice(kh(e.id), 0, e),
    Ju())
}
function Ju() {
    !ao && !Ni && (Ni = !0,
    Aa = Gu.then(Xu))
}
function Rh(e) {
    const t = ht.indexOf(e);
    t > on && ht.splice(t, 1)
}
function Nh(e) {
    ve(e) ? Er.push(...e) : (!dn || !dn.includes(e, e.allowRecurse ? Jn + 1 : Jn)) && Er.push(e),
    Ju()
}
function xl(e, t=ao ? on + 1 : 0) {
    for (; t < ht.length; t++) {
        const n = ht[t];
        n && n.pre && (ht.splice(t, 1),
        t--,
        n())
    }
}
function Qu(e) {
    if (Er.length) {
        const t = [...new Set(Er)];
        if (Er.length = 0,
        dn) {
            dn.push(...t);
            return
        }
        for (dn = t,
        dn.sort((n,r)=>lo(n) - lo(r)),
        Jn = 0; Jn < dn.length; Jn++)
            dn[Jn]();
        dn = null,
        Jn = 0
    }
}
const lo = e=>e.id == null ? 1 / 0 : e.id
  , Ph = (e,t)=>{
    const n = lo(e) - lo(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Xu(e) {
    Ni = !1,
    ao = !0,
    ht.sort(Ph);
    const t = vt;
    try {
        for (on = 0; on < ht.length; on++) {
            const n = ht[on];
            n && n.active !== !1 && Pn(n, null, 14)
        }
    } finally {
        on = 0,
        ht.length = 0,
        Qu(),
        ao = !1,
        Aa = null,
        (ht.length || Er.length) && Xu()
    }
}
function Lh(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || Ye;
    let o = n;
    const s = t.startsWith("update:")
      , i = s && t.slice(7);
    if (i && i in r) {
        const f = `${i === "modelValue" ? "model" : i}Modifiers`
          , {number: u, trim: p} = r[f] || Ye;
        p && (o = n.map(h=>Ne(h) ? h.trim() : h)),
        u && (o = n.map(Ii))
    }
    let a, l = r[a = oi(t)] || r[a = oi(Qt(t))];
    !l && s && (l = r[a = oi(fr(t))]),
    l && Bt(l, e, 6, o);
    const c = r[a + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        Bt(c, e, 6, o)
    }
}
function Zu(e, t, n=!1) {
    const r = t.emitsCache
      , o = r.get(e);
    if (o !== void 0)
        return o;
    const s = e.emits;
    let i = {}
      , a = !1;
    if (!Ae(e)) {
        const l = c=>{
            const f = Zu(c, t, !0);
            f && (a = !0,
            nt(i, f))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !s && !a ? (Be(e) && r.set(e, null),
    null) : (ve(s) ? s.forEach(l=>i[l] = null) : nt(i, s),
    Be(e) && r.set(e, i),
    i)
}
function Ss(e, t) {
    return !e || !ds(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Re(e, t[0].toLowerCase() + t.slice(1)) || Re(e, fr(t)) || Re(e, t))
}
let ct = null
  , Es = null;
function ts(e) {
    const t = ct;
    return ct = e,
    Es = e && e.type.__scopeId || null,
    t
}
function Mh(e) {
    Es = e
}
function Dh() {
    Es = null
}
function Te(e, t=ct, n) {
    if (!t || e._n)
        return e;
    const r = (...o)=>{
        r._d && Ll(-1);
        const s = ts(t);
        let i;
        try {
            i = e(...o)
        } finally {
            ts(s),
            r._d && Ll(1)
        }
        return i
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function si(e) {
    const {type: t, vnode: n, proxy: r, withProxy: o, props: s, propsOptions: [i], slots: a, attrs: l, emit: c, render: f, renderCache: u, data: p, setupState: h, ctx: m, inheritAttrs: g} = e;
    let b, $;
    const D = ts(e);
    try {
        if (n.shapeFlag & 4) {
            const R = o || r;
            b = rn(f.call(R, R, u, s, h, p, m)),
            $ = l
        } else {
            const R = t;
            b = rn(R.length > 1 ? R(s, {
                attrs: l,
                slots: a,
                emit: c
            }) : R(s, null)),
            $ = t.props ? l : Bh(l)
        }
    } catch (R) {
        Zr.length = 0,
        xs(R, e, 1),
        b = de(Ft)
    }
    let U = b;
    if ($ && g !== !1) {
        const R = Object.keys($)
          , {shapeFlag: x} = U;
        R.length && x & 7 && (i && R.some(ga) && ($ = Fh($, i)),
        U = Bn(U, $))
    }
    return n.dirs && (U = Bn(U),
    U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs),
    n.transition && (U.transition = n.transition),
    b = U,
    ts(D),
    b
}
const Bh = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || ds(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , Fh = (e,t)=>{
    const n = {};
    for (const r in e)
        (!ga(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function Uh(e, t, n) {
    const {props: r, children: o, component: s} = e
      , {props: i, children: a, patchFlag: l} = t
      , c = s.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? Sl(r, i, c) : !!i;
        if (l & 8) {
            const f = t.dynamicProps;
            for (let u = 0; u < f.length; u++) {
                const p = f[u];
                if (i[p] !== r[p] && !Ss(c, p))
                    return !0
            }
        }
    } else
        return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Sl(r, i, c) : !0 : !!i;
    return !1
}
function Sl(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < r.length; o++) {
        const s = r[o];
        if (t[s] !== e[s] && !Ss(n, s))
            return !0
    }
    return !1
}
function zh({vnode: e, parent: t}, n) {
    for (; t && t.subTree === e; )
        (e = t.vnode).el = n,
        t = t.parent
}
const jh = e=>e.__isSuspense;
function Hh(e, t) {
    t && t.pendingBranch ? ve(e) ? t.effects.push(...e) : t.effects.push(e) : Nh(e)
}
function ka(e, t) {
    return Ra(e, null, t)
}
const ko = {};
function $e(e, t, n) {
    return Ra(e, t, n)
}
function Ra(e, t, {immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i}=Ye) {
    var a;
    const l = gs() === ((a = st) == null ? void 0 : a.scope) ? st : null;
    let c, f = !1, u = !1;
    if (Fe(e) ? (c = ()=>e.value,
    f = es(e)) : Nn(e) ? (c = ()=>e,
    r = !0) : ve(e) ? (u = !0,
    f = e.some(R=>Nn(R) || es(R)),
    c = ()=>e.map(R=>{
        if (Fe(R))
            return R.value;
        if (Nn(R))
            return er(R);
        if (Ae(R))
            return Pn(R, l, 2)
    }
    )) : Ae(e) ? t ? c = ()=>Pn(e, l, 2) : c = ()=>{
        if (!(l && l.isUnmounted))
            return p && p(),
            Bt(e, l, 3, [h])
    }
    : c = vt,
    t && r) {
        const R = c;
        c = ()=>er(R())
    }
    let p, h = R=>{
        p = D.onStop = ()=>{
            Pn(R, l, 4)
        }
    }
    , m;
    if (fo)
        if (h = vt,
        t ? n && Bt(t, l, 3, [c(), u ? [] : void 0, h]) : c(),
        o === "sync") {
            const R = Bm();
            m = R.__watcherHandles || (R.__watcherHandles = [])
        } else
            return vt;
    let g = u ? new Array(e.length).fill(ko) : ko;
    const b = ()=>{
        if (!!D.active)
            if (t) {
                const R = D.run();
                (r || f || (u ? R.some((x,B)=>oo(x, g[B])) : oo(R, g))) && (p && p(),
                Bt(t, l, 3, [R, g === ko ? void 0 : u && g[0] === ko ? [] : g, h]),
                g = R)
            } else
                D.run()
    }
    ;
    b.allowRecurse = !!t;
    let $;
    o === "sync" ? $ = b : o === "post" ? $ = ()=>Et(b, l && l.suspense) : (b.pre = !0,
    l && (b.id = l.uid),
    $ = ()=>Oa(b));
    const D = new wa(c,$);
    t ? n ? b() : g = D.run() : o === "post" ? Et(D.run.bind(D), l && l.suspense) : D.run();
    const U = ()=>{
        D.stop(),
        l && l.scope && ya(l.scope.effects, D)
    }
    ;
    return m && m.push(U),
    U
}
function Vh(e, t, n) {
    const r = this.proxy
      , o = Ne(e) ? e.includes(".") ? ef(r, e) : ()=>r[e] : e.bind(r, r);
    let s;
    Ae(t) ? s = t : (s = t.handler,
    n = t);
    const i = st;
    $r(this);
    const a = Ra(o, s.bind(r), n);
    return i ? $r(i) : sr(),
    a
}
function ef(e, t) {
    const n = t.split(".");
    return ()=>{
        let r = e;
        for (let o = 0; o < n.length && r; o++)
            r = r[n[o]];
        return r
    }
}
function er(e, t) {
    if (!Be(e) || e.__v_skip || (t = t || new Set,
    t.has(e)))
        return e;
    if (t.add(e),
    Fe(e))
        er(e.value, t);
    else if (ve(e))
        for (let n = 0; n < e.length; n++)
            er(e[n], t);
    else if (ps(e) || Sr(e))
        e.forEach(n=>{
            er(n, t)
        }
        );
    else if (Tu(e))
        for (const n in e)
            er(e[n], t);
    return e
}
function gt(e, t) {
    const n = ct;
    if (n === null)
        return e;
    const r = As(n) || n.proxy
      , o = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let[i,a,l,c=Ye] = t[s];
        i && (Ae(i) && (i = {
            mounted: i,
            updated: i
        }),
        i.deep && er(a),
        o.push({
            dir: i,
            instance: r,
            value: a,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return e
}
function Vn(e, t, n, r) {
    const o = e.dirs
      , s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
        const a = o[i];
        s && (a.oldValue = s[i].value);
        let l = a.dir[r];
        l && (Or(),
        Bt(l, n, 8, [e.el, a, e, t]),
        kr())
    }
}
function Wh() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Je(()=>{
        e.isMounted = !0
    }
    ),
    Rr(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const Dt = [Function, Array]
  , tf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Dt,
    onEnter: Dt,
    onAfterEnter: Dt,
    onEnterCancelled: Dt,
    onBeforeLeave: Dt,
    onLeave: Dt,
    onAfterLeave: Dt,
    onLeaveCancelled: Dt,
    onBeforeAppear: Dt,
    onAppear: Dt,
    onAfterAppear: Dt,
    onAppearCancelled: Dt
}
  , Kh = {
    name: "BaseTransition",
    props: tf,
    setup(e, {slots: t}) {
        const n = Ot()
          , r = Wh();
        let o;
        return ()=>{
            const s = t.default && rf(t.default(), !0);
            if (!s || !s.length)
                return;
            let i = s[0];
            if (s.length > 1) {
                for (const g of s)
                    if (g.type !== Ft) {
                        i = g;
                        break
                    }
            }
            const a = ke(e)
              , {mode: l} = a;
            if (r.isLeaving)
                return ii(i);
            const c = El(i);
            if (!c)
                return ii(i);
            const f = Pi(c, a, r, n);
            Li(c, f);
            const u = n.subTree
              , p = u && El(u);
            let h = !1;
            const {getTransitionKey: m} = c.type;
            if (m) {
                const g = m();
                o === void 0 ? o = g : g !== o && (o = g,
                h = !0)
            }
            if (p && p.type !== Ft && (!Qn(c, p) || h)) {
                const g = Pi(p, a, r, n);
                if (Li(p, g),
                l === "out-in")
                    return r.isLeaving = !0,
                    g.afterLeave = ()=>{
                        r.isLeaving = !1,
                        n.update.active !== !1 && n.update()
                    }
                    ,
                    ii(i);
                l === "in-out" && c.type !== Ft && (g.delayLeave = (b,$,D)=>{
                    const U = nf(r, p);
                    U[String(p.key)] = p,
                    b._leaveCb = ()=>{
                        $(),
                        b._leaveCb = void 0,
                        delete f.delayedLeave
                    }
                    ,
                    f.delayedLeave = D
                }
                )
            }
            return i
        }
    }
}
  , Yh = Kh;
function nf(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function Pi(e, t, n, r) {
    const {appear: o, mode: s, persisted: i=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: u, onLeave: p, onAfterLeave: h, onLeaveCancelled: m, onBeforeAppear: g, onAppear: b, onAfterAppear: $, onAppearCancelled: D} = t
      , U = String(e.key)
      , R = nf(n, e)
      , x = (S,k)=>{
        S && Bt(S, r, 9, k)
    }
      , B = (S,k)=>{
        const A = k[1];
        x(S, k),
        ve(S) ? S.every(te=>te.length <= 1) && A() : S.length <= 1 && A()
    }
      , L = {
        mode: s,
        persisted: i,
        beforeEnter(S) {
            let k = a;
            if (!n.isMounted)
                if (o)
                    k = g || a;
                else
                    return;
            S._leaveCb && S._leaveCb(!0);
            const A = R[U];
            A && Qn(e, A) && A.el._leaveCb && A.el._leaveCb(),
            x(k, [S])
        },
        enter(S) {
            let k = l
              , A = c
              , te = f;
            if (!n.isMounted)
                if (o)
                    k = b || l,
                    A = $ || c,
                    te = D || f;
                else
                    return;
            let z = !1;
            const ne = S._enterCb = W=>{
                z || (z = !0,
                W ? x(te, [S]) : x(A, [S]),
                L.delayedLeave && L.delayedLeave(),
                S._enterCb = void 0)
            }
            ;
            k ? B(k, [S, ne]) : ne()
        },
        leave(S, k) {
            const A = String(e.key);
            if (S._enterCb && S._enterCb(!0),
            n.isUnmounting)
                return k();
            x(u, [S]);
            let te = !1;
            const z = S._leaveCb = ne=>{
                te || (te = !0,
                k(),
                ne ? x(m, [S]) : x(h, [S]),
                S._leaveCb = void 0,
                R[A] === e && delete R[A])
            }
            ;
            R[A] = e,
            p ? B(p, [S, z]) : z()
        },
        clone(S) {
            return Pi(S, t, n, r)
        }
    };
    return L
}
function ii(e) {
    if (Cs(e))
        return e = Bn(e),
        e.children = null,
        e
}
function El(e) {
    return Cs(e) ? e.children ? e.children[0] : void 0 : e
}
function Li(e, t) {
    e.shapeFlag & 6 && e.component ? Li(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function rf(e, t=!1, n) {
    let r = []
      , o = 0;
    for (let s = 0; s < e.length; s++) {
        let i = e[s];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
        i.type === De ? (i.patchFlag & 128 && o++,
        r = r.concat(rf(i.children, t, a))) : (t || i.type !== Ft) && r.push(a != null ? Bn(i, {
            key: a
        }) : i)
    }
    if (o > 1)
        for (let s = 0; s < r.length; s++)
            r[s].patchFlag = -2;
    return r
}
function Ce(e, t) {
    return Ae(e) ? (()=>nt({
        name: e.name
    }, t, {
        setup: e
    }))() : e
}
const Jr = e=>!!e.type.__asyncLoader
  , Cs = e=>e.type.__isKeepAlive;
function qh(e, t) {
    of(e, "a", t)
}
function Gh(e, t) {
    of(e, "da", t)
}
function of(e, t, n=st) {
    const r = e.__wdc || (e.__wdc = ()=>{
        let o = n;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent
        }
        return e()
    }
    );
    if (Ts(t, r, n),
    n) {
        let o = n.parent;
        for (; o && o.parent; )
            Cs(o.parent.vnode) && Jh(r, t, n, o),
            o = o.parent
    }
}
function Jh(e, t, n, r) {
    const o = Ts(t, e, r, !0);
    Nr(()=>{
        ya(r[t], o)
    }
    , n)
}
function Ts(e, t, n=st, r=!1) {
    if (n) {
        const o = n[e] || (n[e] = [])
          , s = t.__weh || (t.__weh = (...i)=>{
            if (n.isUnmounted)
                return;
            Or(),
            $r(n);
            const a = Bt(t, n, e, i);
            return sr(),
            kr(),
            a
        }
        );
        return r ? o.unshift(s) : o.push(s),
        s
    }
}
const vn = e=>(t,n=st)=>(!fo || e === "sp") && Ts(e, (...r)=>t(...r), n)
  , Qh = vn("bm")
  , Je = vn("m")
  , Xh = vn("bu")
  , Zh = vn("u")
  , Rr = vn("bum")
  , Nr = vn("um")
  , em = vn("sp")
  , tm = vn("rtg")
  , nm = vn("rtc");
function rm(e, t=st) {
    Ts("ec", e, t)
}
const Na = "components";
function Yr(e, t) {
    return af(Na, e, !0, t) || e
}
const sf = Symbol.for("v-ndc");
function Ct(e) {
    return Ne(e) ? af(Na, e, !1) || e : e || sf
}
function af(e, t, n=!0, r=!1) {
    const o = ct || st;
    if (o) {
        const s = o.type;
        if (e === Na) {
            const a = Lm(s, !1);
            if (a && (a === t || a === Qt(t) || a === ms(Qt(t))))
                return s
        }
        const i = Cl(o[e] || s[e], t) || Cl(o.appContext[e], t);
        return !i && r ? s : i
    }
}
function Cl(e, t) {
    return e && (e[t] || e[Qt(t)] || e[ms(Qt(t))])
}
function Nt(e, t, n, r) {
    let o;
    const s = n && n[r];
    if (ve(e) || Ne(e)) {
        o = new Array(e.length);
        for (let i = 0, a = e.length; i < a; i++)
            o[i] = t(e[i], i, void 0, s && s[i])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let i = 0; i < e; i++)
            o[i] = t(i + 1, i, void 0, s && s[i])
    } else if (Be(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (i,a)=>t(i, a, void 0, s && s[a]));
        else {
            const i = Object.keys(e);
            o = new Array(i.length);
            for (let a = 0, l = i.length; a < l; a++) {
                const c = i[a];
                o[a] = t(e[c], c, a, s && s[a])
            }
        }
    else
        o = [];
    return n && (n[r] = o),
    o
}
function Ve(e, t, n={}, r, o) {
    if (ct.isCE || ct.parent && Jr(ct.parent) && ct.parent.isCE)
        return t !== "default" && (n.name = t),
        de("slot", n, r && r());
    let s = e[t];
    s && s._c && (s._d = !1),
    O();
    const i = s && lf(s(n))
      , a = Ie(De, {
        key: n.key || i && i.key || `_${t}`
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    a
}
function lf(e) {
    return e.some(t=>ar(t) ? !(t.type === Ft || t.type === De && !lf(t.children)) : !0) ? e : null
}
const Mi = e=>e ? bf(e) ? As(e) || e.proxy : Mi(e.parent) : null
  , Qr = nt(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>Mi(e.parent),
    $root: e=>Mi(e.root),
    $emit: e=>e.emit,
    $options: e=>Pa(e),
    $forceUpdate: e=>e.f || (e.f = ()=>Oa(e.update)),
    $nextTick: e=>e.n || (e.n = ft.bind(e.proxy)),
    $watch: e=>Vh.bind(e)
})
  , ai = (e,t)=>e !== Ye && !e.__isScriptSetup && Re(e, t)
  , om = {
    get({_: e}, t) {
        const {ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l} = e;
        let c;
        if (t[0] !== "$") {
            const h = i[t];
            if (h !== void 0)
                switch (h) {
                case 1:
                    return r[t];
                case 2:
                    return o[t];
                case 4:
                    return n[t];
                case 3:
                    return s[t]
                }
            else {
                if (ai(r, t))
                    return i[t] = 1,
                    r[t];
                if (o !== Ye && Re(o, t))
                    return i[t] = 2,
                    o[t];
                if ((c = e.propsOptions[0]) && Re(c, t))
                    return i[t] = 3,
                    s[t];
                if (n !== Ye && Re(n, t))
                    return i[t] = 4,
                    n[t];
                Di && (i[t] = 0)
            }
        }
        const f = Qr[t];
        let u, p;
        if (f)
            return t === "$attrs" && It(e, "get", t),
            f(e);
        if ((u = a.__cssModules) && (u = u[t]))
            return u;
        if (n !== Ye && Re(n, t))
            return i[t] = 4,
            n[t];
        if (p = l.config.globalProperties,
        Re(p, t))
            return p[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: o, ctx: s} = e;
        return ai(o, t) ? (o[t] = n,
        !0) : r !== Ye && Re(r, t) ? (r[t] = n,
        !0) : Re(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (s[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s}}, i) {
        let a;
        return !!n[i] || e !== Ye && Re(e, i) || ai(t, i) || (a = s[0]) && Re(a, i) || Re(r, i) || Re(Qr, i) || Re(o.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Re(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function $s() {
    return cf().slots
}
function sm() {
    return cf().attrs
}
function cf() {
    const e = Ot();
    return e.setupContext || (e.setupContext = xf(e))
}
function Tl(e) {
    return ve(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
let Di = !0;
function im(e) {
    const t = Pa(e)
      , n = e.proxy
      , r = e.ctx;
    Di = !1,
    t.beforeCreate && $l(t.beforeCreate, e, "bc");
    const {data: o, computed: s, methods: i, watch: a, provide: l, inject: c, created: f, beforeMount: u, mounted: p, beforeUpdate: h, updated: m, activated: g, deactivated: b, beforeDestroy: $, beforeUnmount: D, destroyed: U, unmounted: R, render: x, renderTracked: B, renderTriggered: L, errorCaptured: S, serverPrefetch: k, expose: A, inheritAttrs: te, components: z, directives: ne, filters: W} = t;
    if (c && am(c, r, null),
    i)
        for (const M in i) {
            const Q = i[M];
            Ae(Q) && (r[M] = Q.bind(n))
        }
    if (o) {
        const M = o.call(n, n);
        Be(M) && (e.data = $t(M))
    }
    if (Di = !0,
    s)
        for (const M in s) {
            const Q = s[M]
              , X = Ae(Q) ? Q.bind(n, n) : Ae(Q.get) ? Q.get.bind(n, n) : vt
              , ge = !Ae(Q) && Ae(Q.set) ? Q.set.bind(n) : vt
              , Se = Y({
                get: X,
                set: ge
            });
            Object.defineProperty(r, M, {
                enumerable: !0,
                configurable: !0,
                get: ()=>Se.value,
                set: xe=>Se.value = xe
            })
        }
    if (a)
        for (const M in a)
            uf(a[M], r, n, M);
    if (l) {
        const M = Ae(l) ? l.call(n) : l;
        Reflect.ownKeys(M).forEach(Q=>{
            _o(Q, M[Q])
        }
        )
    }
    f && $l(f, e, "c");
    function re(M, Q) {
        ve(Q) ? Q.forEach(X=>M(X.bind(n))) : Q && M(Q.bind(n))
    }
    if (re(Qh, u),
    re(Je, p),
    re(Xh, h),
    re(Zh, m),
    re(qh, g),
    re(Gh, b),
    re(rm, S),
    re(nm, B),
    re(tm, L),
    re(Rr, D),
    re(Nr, R),
    re(em, k),
    ve(A))
        if (A.length) {
            const M = e.exposed || (e.exposed = {});
            A.forEach(Q=>{
                Object.defineProperty(M, Q, {
                    get: ()=>n[Q],
                    set: X=>n[Q] = X
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    x && e.render === vt && (e.render = x),
    te != null && (e.inheritAttrs = te),
    z && (e.components = z),
    ne && (e.directives = ne)
}
function am(e, t, n=vt) {
    ve(e) && (e = Bi(e));
    for (const r in e) {
        const o = e[r];
        let s;
        Be(o) ? "default"in o ? s = Ge(o.from || r, o.default, !0) : s = Ge(o.from || r) : s = Ge(o),
        Fe(s) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: ()=>s.value,
            set: i=>s.value = i
        }) : t[r] = s
    }
}
function $l(e, t, n) {
    Bt(ve(e) ? e.map(r=>r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function uf(e, t, n, r) {
    const o = r.includes(".") ? ef(n, r) : ()=>n[r];
    if (Ne(e)) {
        const s = t[e];
        Ae(s) && $e(o, s)
    } else if (Ae(e))
        $e(o, e.bind(n));
    else if (Be(e))
        if (ve(e))
            e.forEach(s=>uf(s, t, n, r));
        else {
            const s = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
            Ae(s) && $e(o, s, e)
        }
}
function Pa(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: o, optionsCache: s, config: {optionMergeStrategies: i}} = e.appContext
      , a = s.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {},
    o.length && o.forEach(c=>ns(l, c, i, !0)),
    ns(l, t, i)),
    Be(t) && s.set(t, l),
    l
}
function ns(e, t, n, r=!1) {
    const {mixins: o, extends: s} = t;
    s && ns(e, s, n, !0),
    o && o.forEach(i=>ns(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const a = lm[i] || n && n[i];
            e[i] = a ? a(e[i], t[i]) : t[i]
        }
    return e
}
const lm = {
    data: Il,
    props: Al,
    emits: Al,
    methods: qr,
    computed: qr,
    beforeCreate: _t,
    created: _t,
    beforeMount: _t,
    mounted: _t,
    beforeUpdate: _t,
    updated: _t,
    beforeDestroy: _t,
    beforeUnmount: _t,
    destroyed: _t,
    unmounted: _t,
    activated: _t,
    deactivated: _t,
    errorCaptured: _t,
    serverPrefetch: _t,
    components: qr,
    directives: qr,
    watch: um,
    provide: Il,
    inject: cm
};
function Il(e, t) {
    return t ? e ? function() {
        return nt(Ae(e) ? e.call(this, this) : e, Ae(t) ? t.call(this, this) : t)
    }
    : t : e
}
function cm(e, t) {
    return qr(Bi(e), Bi(t))
}
function Bi(e) {
    if (ve(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function _t(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function qr(e, t) {
    return e ? nt(Object.create(null), e, t) : t
}
function Al(e, t) {
    return e ? ve(e) && ve(t) ? [...new Set([...e, ...t])] : nt(Object.create(null), Tl(e), Tl(t != null ? t : {})) : t
}
function um(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = nt(Object.create(null), e);
    for (const r in t)
        n[r] = _t(e[r], t[r]);
    return n
}
function ff() {
    return {
        app: null,
        config: {
            isNativeTag: Pp,
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
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let fm = 0;
function dm(e, t) {
    return function(r, o=null) {
        Ae(r) || (r = nt({}, r)),
        o != null && !Be(o) && (o = null);
        const s = ff()
          , i = new Set;
        let a = !1;
        const l = s.app = {
            _uid: fm++,
            _component: r,
            _props: o,
            _container: null,
            _context: s,
            _instance: null,
            version: Fm,
            get config() {
                return s.config
            },
            set config(c) {},
            use(c, ...f) {
                return i.has(c) || (c && Ae(c.install) ? (i.add(c),
                c.install(l, ...f)) : Ae(c) && (i.add(c),
                c(l, ...f))),
                l
            },
            mixin(c) {
                return s.mixins.includes(c) || s.mixins.push(c),
                l
            },
            component(c, f) {
                return f ? (s.components[c] = f,
                l) : s.components[c]
            },
            directive(c, f) {
                return f ? (s.directives[c] = f,
                l) : s.directives[c]
            },
            mount(c, f, u) {
                if (!a) {
                    const p = de(r, o);
                    return p.appContext = s,
                    f && t ? t(p, c) : e(p, c, u),
                    a = !0,
                    l._container = c,
                    c.__vue_app__ = l,
                    As(p.component) || p.component.proxy
                }
            },
            unmount() {
                a && (e(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(c, f) {
                return s.provides[c] = f,
                l
            },
            runWithContext(c) {
                co = l;
                try {
                    return c()
                } finally {
                    co = null
                }
            }
        };
        return l
    }
}
let co = null;
function _o(e, t) {
    if (st) {
        let n = st.provides;
        const r = st.parent && st.parent.provides;
        r === n && (n = st.provides = Object.create(r)),
        n[e] = t
    }
}
function Ge(e, t, n=!1) {
    const r = st || ct;
    if (r || co) {
        const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : co._context.provides;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return n && Ae(t) ? t.call(r && r.proxy) : t
    }
}
function pm() {
    return !!(st || ct || co)
}
function hm(e, t, n, r=!1) {
    const o = {}
      , s = {};
    Xo(s, Is, 1),
    e.propsDefaults = Object.create(null),
    df(e, t, o, s);
    for (const i in e.propsOptions[0])
        i in o || (o[i] = void 0);
    n ? e.props = r ? o : ju(o) : e.type.props ? e.props = o : e.props = s,
    e.attrs = s
}
function mm(e, t, n, r) {
    const {props: o, attrs: s, vnode: {patchFlag: i}} = e
      , a = ke(o)
      , [l] = e.propsOptions;
    let c = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const f = e.vnode.dynamicProps;
            for (let u = 0; u < f.length; u++) {
                let p = f[u];
                if (Ss(e.emitsOptions, p))
                    continue;
                const h = t[p];
                if (l)
                    if (Re(s, p))
                        h !== s[p] && (s[p] = h,
                        c = !0);
                    else {
                        const m = Qt(p);
                        o[m] = Fi(l, a, m, h, e, !1)
                    }
                else
                    h !== s[p] && (s[p] = h,
                    c = !0)
            }
        }
    } else {
        df(e, t, o, s) && (c = !0);
        let f;
        for (const u in a)
            (!t || !Re(t, u) && ((f = fr(u)) === u || !Re(t, f))) && (l ? n && (n[u] !== void 0 || n[f] !== void 0) && (o[u] = Fi(l, a, u, void 0, e, !0)) : delete o[u]);
        if (s !== a)
            for (const u in s)
                (!t || !Re(t, u) && !0) && (delete s[u],
                c = !0)
    }
    c && hn(e, "set", "$attrs")
}
function df(e, t, n, r) {
    const [o,s] = e.propsOptions;
    let i = !1, a;
    if (t)
        for (let l in t) {
            if (jo(l))
                continue;
            const c = t[l];
            let f;
            o && Re(o, f = Qt(l)) ? !s || !s.includes(f) ? n[f] = c : (a || (a = {}))[f] = c : Ss(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c,
            i = !0)
        }
    if (s) {
        const l = ke(n)
          , c = a || Ye;
        for (let f = 0; f < s.length; f++) {
            const u = s[f];
            n[u] = Fi(o, l, u, c[u], e, !Re(c, u))
        }
    }
    return i
}
function Fi(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
        const a = Re(i, "default");
        if (a && r === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && Ae(l)) {
                const {propsDefaults: c} = o;
                n in c ? r = c[n] : ($r(o),
                r = c[n] = l.call(null, t),
                sr())
            } else
                r = l
        }
        i[0] && (s && !a ? r = !1 : i[1] && (r === "" || r === fr(n)) && (r = !0))
    }
    return r
}
function pf(e, t, n=!1) {
    const r = t.propsCache
      , o = r.get(e);
    if (o)
        return o;
    const s = e.props
      , i = {}
      , a = [];
    let l = !1;
    if (!Ae(e)) {
        const f = u=>{
            l = !0;
            const [p,h] = pf(u, t, !0);
            nt(i, p),
            h && a.push(...h)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(f),
        e.extends && f(e.extends),
        e.mixins && e.mixins.forEach(f)
    }
    if (!s && !l)
        return Be(e) && r.set(e, xr),
        xr;
    if (ve(s))
        for (let f = 0; f < s.length; f++) {
            const u = Qt(s[f]);
            Ol(u) && (i[u] = Ye)
        }
    else if (s)
        for (const f in s) {
            const u = Qt(f);
            if (Ol(u)) {
                const p = s[f]
                  , h = i[u] = ve(p) || Ae(p) ? {
                    type: p
                } : nt({}, p);
                if (h) {
                    const m = Nl(Boolean, h.type)
                      , g = Nl(String, h.type);
                    h[0] = m > -1,
                    h[1] = g < 0 || m < g,
                    (m > -1 || Re(h, "default")) && a.push(u)
                }
            }
        }
    const c = [i, a];
    return Be(e) && r.set(e, c),
    c
}
function Ol(e) {
    return e[0] !== "$"
}
function kl(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}
function Rl(e, t) {
    return kl(e) === kl(t)
}
function Nl(e, t) {
    return ve(t) ? t.findIndex(n=>Rl(n, e)) : Ae(t) && Rl(t, e) ? 0 : -1
}
const hf = e=>e[0] === "_" || e === "$stable"
  , La = e=>ve(e) ? e.map(rn) : [rn(e)]
  , vm = (e,t,n)=>{
    if (t._n)
        return t;
    const r = Te((...o)=>La(t(...o)), n);
    return r._c = !1,
    r
}
  , mf = (e,t,n)=>{
    const r = e._ctx;
    for (const o in e) {
        if (hf(o))
            continue;
        const s = e[o];
        if (Ae(s))
            t[o] = vm(o, s, r);
        else if (s != null) {
            const i = La(s);
            t[o] = ()=>i
        }
    }
}
  , vf = (e,t)=>{
    const n = La(t);
    e.slots.default = ()=>n
}
  , gm = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = ke(t),
        Xo(t, "_", n)) : mf(t, e.slots = {})
    } else
        e.slots = {},
        t && vf(e, t);
    Xo(e.slots, Is, 1)
}
  , ym = (e,t,n)=>{
    const {vnode: r, slots: o} = e;
    let s = !0
      , i = Ye;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? s = !1 : (nt(o, t),
        !n && a === 1 && delete o._) : (s = !t.$stable,
        mf(t, o)),
        i = t
    } else
        t && (vf(e, t),
        i = {
            default: 1
        });
    if (s)
        for (const a in o)
            !hf(a) && !(a in i) && delete o[a]
}
;
function Ui(e, t, n, r, o=!1) {
    if (ve(e)) {
        e.forEach((p,h)=>Ui(p, t && (ve(t) ? t[h] : t), n, r, o));
        return
    }
    if (Jr(r) && !o)
        return;
    const s = r.shapeFlag & 4 ? As(r.component) || r.component.proxy : r.el
      , i = o ? null : s
      , {i: a, r: l} = e
      , c = t && t.r
      , f = a.refs === Ye ? a.refs = {} : a.refs
      , u = a.setupState;
    if (c != null && c !== l && (Ne(c) ? (f[c] = null,
    Re(u, c) && (u[c] = null)) : Fe(c) && (c.value = null)),
    Ae(l))
        Pn(l, a, 12, [i, f]);
    else {
        const p = Ne(l)
          , h = Fe(l);
        if (p || h) {
            const m = ()=>{
                if (e.f) {
                    const g = p ? Re(u, l) ? u[l] : f[l] : l.value;
                    o ? ve(g) && ya(g, s) : ve(g) ? g.includes(s) || g.push(s) : p ? (f[l] = [s],
                    Re(u, l) && (u[l] = f[l])) : (l.value = [s],
                    e.k && (f[e.k] = l.value))
                } else
                    p ? (f[l] = i,
                    Re(u, l) && (u[l] = i)) : h && (l.value = i,
                    e.k && (f[e.k] = i))
            }
            ;
            i ? (m.id = -1,
            Et(m, n)) : m()
        }
    }
}
const Et = Hh;
function _m(e) {
    return bm(e)
}
function bm(e, t) {
    const n = Ai();
    n.__VUE__ = !0;
    const {insert: r, remove: o, patchProp: s, createElement: i, createText: a, createComment: l, setText: c, setElementText: f, parentNode: u, nextSibling: p, setScopeId: h=vt, insertStaticContent: m} = e
      , g = (_,C,F,V=null,G=null,ae=null,ue=!1,oe=null,le=!!C.dynamicChildren)=>{
        if (_ === C)
            return;
        _ && !Qn(_, C) && (V = pt(_),
        xe(_, G, ae, !0),
        _ = null),
        C.patchFlag === -2 && (le = !1,
        C.dynamicChildren = null);
        const {type: Z, ref: be, shapeFlag: he} = C;
        switch (Z) {
        case bo:
            b(_, C, F, V);
            break;
        case Ft:
            $(_, C, F, V);
            break;
        case li:
            _ == null && D(C, F, V, ue);
            break;
        case De:
            z(_, C, F, V, G, ae, ue, oe, le);
            break;
        default:
            he & 1 ? x(_, C, F, V, G, ae, ue, oe, le) : he & 6 ? ne(_, C, F, V, G, ae, ue, oe, le) : (he & 64 || he & 128) && Z.process(_, C, F, V, G, ae, ue, oe, le, ze)
        }
        be != null && G && Ui(be, _ && _.ref, ae, C || _, !C)
    }
      , b = (_,C,F,V)=>{
        if (_ == null)
            r(C.el = a(C.children), F, V);
        else {
            const G = C.el = _.el;
            C.children !== _.children && c(G, C.children)
        }
    }
      , $ = (_,C,F,V)=>{
        _ == null ? r(C.el = l(C.children || ""), F, V) : C.el = _.el
    }
      , D = (_,C,F,V)=>{
        [_.el,_.anchor] = m(_.children, C, F, V, _.el, _.anchor)
    }
      , U = ({el: _, anchor: C},F,V)=>{
        let G;
        for (; _ && _ !== C; )
            G = p(_),
            r(_, F, V),
            _ = G;
        r(C, F, V)
    }
      , R = ({el: _, anchor: C})=>{
        let F;
        for (; _ && _ !== C; )
            F = p(_),
            o(_),
            _ = F;
        o(C)
    }
      , x = (_,C,F,V,G,ae,ue,oe,le)=>{
        ue = ue || C.type === "svg",
        _ == null ? B(C, F, V, G, ae, ue, oe, le) : k(_, C, G, ae, ue, oe, le)
    }
      , B = (_,C,F,V,G,ae,ue,oe)=>{
        let le, Z;
        const {type: be, props: he, shapeFlag: P, transition: fe, dirs: Ee} = _;
        if (le = _.el = i(_.type, ae, he && he.is, he),
        P & 8 ? f(le, _.children) : P & 16 && S(_.children, le, null, V, G, ae && be !== "foreignObject", ue, oe),
        Ee && Vn(_, null, V, "created"),
        L(le, _, _.scopeId, ue, V),
        he) {
            for (const Le in he)
                Le !== "value" && !jo(Le) && s(le, Le, null, he[Le], ae, _.children, V, G, Xe);
            "value"in he && s(le, "value", null, he.value),
            (Z = he.onVnodeBeforeMount) && nn(Z, V, _)
        }
        Ee && Vn(_, null, V, "beforeMount");
        const Pe = (!G || G && !G.pendingBranch) && fe && !fe.persisted;
        Pe && fe.beforeEnter(le),
        r(le, C, F),
        ((Z = he && he.onVnodeMounted) || Pe || Ee) && Et(()=>{
            Z && nn(Z, V, _),
            Pe && fe.enter(le),
            Ee && Vn(_, null, V, "mounted")
        }
        , G)
    }
      , L = (_,C,F,V,G)=>{
        if (F && h(_, F),
        V)
            for (let ae = 0; ae < V.length; ae++)
                h(_, V[ae]);
        if (G) {
            let ae = G.subTree;
            if (C === ae) {
                const ue = G.vnode;
                L(_, ue, ue.scopeId, ue.slotScopeIds, G.parent)
            }
        }
    }
      , S = (_,C,F,V,G,ae,ue,oe,le=0)=>{
        for (let Z = le; Z < _.length; Z++) {
            const be = _[Z] = oe ? On(_[Z]) : rn(_[Z]);
            g(null, be, C, F, V, G, ae, ue, oe)
        }
    }
      , k = (_,C,F,V,G,ae,ue)=>{
        const oe = C.el = _.el;
        let {patchFlag: le, dynamicChildren: Z, dirs: be} = C;
        le |= _.patchFlag & 16;
        const he = _.props || Ye
          , P = C.props || Ye;
        let fe;
        F && Wn(F, !1),
        (fe = P.onVnodeBeforeUpdate) && nn(fe, F, C, _),
        be && Vn(C, _, F, "beforeUpdate"),
        F && Wn(F, !0);
        const Ee = G && C.type !== "foreignObject";
        if (Z ? A(_.dynamicChildren, Z, oe, F, V, Ee, ae) : ue || Q(_, C, oe, null, F, V, Ee, ae, !1),
        le > 0) {
            if (le & 16)
                te(oe, C, he, P, F, V, G);
            else if (le & 2 && he.class !== P.class && s(oe, "class", null, P.class, G),
            le & 4 && s(oe, "style", he.style, P.style, G),
            le & 8) {
                const Pe = C.dynamicProps;
                for (let Le = 0; Le < Pe.length; Le++) {
                    const qe = Pe[Le]
                      , St = he[qe]
                      , un = P[qe];
                    (un !== St || qe === "value") && s(oe, qe, St, un, G, _.children, F, V, Xe)
                }
            }
            le & 1 && _.children !== C.children && f(oe, C.children)
        } else
            !ue && Z == null && te(oe, C, he, P, F, V, G);
        ((fe = P.onVnodeUpdated) || be) && Et(()=>{
            fe && nn(fe, F, C, _),
            be && Vn(C, _, F, "updated")
        }
        , V)
    }
      , A = (_,C,F,V,G,ae,ue)=>{
        for (let oe = 0; oe < C.length; oe++) {
            const le = _[oe]
              , Z = C[oe]
              , be = le.el && (le.type === De || !Qn(le, Z) || le.shapeFlag & 70) ? u(le.el) : F;
            g(le, Z, be, null, V, G, ae, ue, !0)
        }
    }
      , te = (_,C,F,V,G,ae,ue)=>{
        if (F !== V) {
            if (F !== Ye)
                for (const oe in F)
                    !jo(oe) && !(oe in V) && s(_, oe, F[oe], null, ue, C.children, G, ae, Xe);
            for (const oe in V) {
                if (jo(oe))
                    continue;
                const le = V[oe]
                  , Z = F[oe];
                le !== Z && oe !== "value" && s(_, oe, Z, le, ue, C.children, G, ae, Xe)
            }
            "value"in V && s(_, "value", F.value, V.value)
        }
    }
      , z = (_,C,F,V,G,ae,ue,oe,le)=>{
        const Z = C.el = _ ? _.el : a("")
          , be = C.anchor = _ ? _.anchor : a("");
        let {patchFlag: he, dynamicChildren: P, slotScopeIds: fe} = C;
        fe && (oe = oe ? oe.concat(fe) : fe),
        _ == null ? (r(Z, F, V),
        r(be, F, V),
        S(C.children, F, be, G, ae, ue, oe, le)) : he > 0 && he & 64 && P && _.dynamicChildren ? (A(_.dynamicChildren, P, F, G, ae, ue, oe),
        (C.key != null || G && C === G.subTree) && Ma(_, C, !0)) : Q(_, C, F, be, G, ae, ue, oe, le)
    }
      , ne = (_,C,F,V,G,ae,ue,oe,le)=>{
        C.slotScopeIds = oe,
        _ == null ? C.shapeFlag & 512 ? G.ctx.activate(C, F, V, ue, le) : W(C, F, V, G, ae, ue, le) : J(_, C, le)
    }
      , W = (_,C,F,V,G,ae,ue)=>{
        const oe = _.component = km(_, V, G);
        if (Cs(_) && (oe.ctx.renderer = ze),
        Rm(oe),
        oe.asyncDep) {
            if (G && G.registerDep(oe, re),
            !_.el) {
                const le = oe.subTree = de(Ft);
                $(null, le, C, F)
            }
            return
        }
        re(oe, _, C, F, G, ae, ue)
    }
      , J = (_,C,F)=>{
        const V = C.component = _.component;
        if (Uh(_, C, F))
            if (V.asyncDep && !V.asyncResolved) {
                M(V, C, F);
                return
            } else
                V.next = C,
                Rh(V.update),
                V.update();
        else
            C.el = _.el,
            V.vnode = C
    }
      , re = (_,C,F,V,G,ae,ue)=>{
        const oe = ()=>{
            if (_.isMounted) {
                let {next: be, bu: he, u: P, parent: fe, vnode: Ee} = _, Pe = be, Le;
                Wn(_, !1),
                be ? (be.el = Ee.el,
                M(_, be, ue)) : be = Ee,
                he && Ho(he),
                (Le = be.props && be.props.onVnodeBeforeUpdate) && nn(Le, fe, be, Ee),
                Wn(_, !0);
                const qe = si(_)
                  , St = _.subTree;
                _.subTree = qe,
                g(St, qe, u(St.el), pt(St), _, G, ae),
                be.el = qe.el,
                Pe === null && zh(_, qe.el),
                P && Et(P, G),
                (Le = be.props && be.props.onVnodeUpdated) && Et(()=>nn(Le, fe, be, Ee), G)
            } else {
                let be;
                const {el: he, props: P} = C
                  , {bm: fe, m: Ee, parent: Pe} = _
                  , Le = Jr(C);
                if (Wn(_, !1),
                fe && Ho(fe),
                !Le && (be = P && P.onVnodeBeforeMount) && nn(be, Pe, C),
                Wn(_, !0),
                he && xt) {
                    const qe = ()=>{
                        _.subTree = si(_),
                        xt(he, _.subTree, _, G, null)
                    }
                    ;
                    Le ? C.type.__asyncLoader().then(()=>!_.isUnmounted && qe()) : qe()
                } else {
                    const qe = _.subTree = si(_);
                    g(null, qe, F, V, _, G, ae),
                    C.el = qe.el
                }
                if (Ee && Et(Ee, G),
                !Le && (be = P && P.onVnodeMounted)) {
                    const qe = C;
                    Et(()=>nn(be, Pe, qe), G)
                }
                (C.shapeFlag & 256 || Pe && Jr(Pe.vnode) && Pe.vnode.shapeFlag & 256) && _.a && Et(_.a, G),
                _.isMounted = !0,
                C = F = V = null
            }
        }
          , le = _.effect = new wa(oe,()=>Oa(Z),_.scope)
          , Z = _.update = ()=>le.run();
        Z.id = _.uid,
        Wn(_, !0),
        Z()
    }
      , M = (_,C,F)=>{
        C.component = _;
        const V = _.vnode.props;
        _.vnode = C,
        _.next = null,
        mm(_, C.props, V, F),
        ym(_, C.children, F),
        Or(),
        xl(),
        kr()
    }
      , Q = (_,C,F,V,G,ae,ue,oe,le=!1)=>{
        const Z = _ && _.children
          , be = _ ? _.shapeFlag : 0
          , he = C.children
          , {patchFlag: P, shapeFlag: fe} = C;
        if (P > 0) {
            if (P & 128) {
                ge(Z, he, F, V, G, ae, ue, oe, le);
                return
            } else if (P & 256) {
                X(Z, he, F, V, G, ae, ue, oe, le);
                return
            }
        }
        fe & 8 ? (be & 16 && Xe(Z, G, ae),
        he !== Z && f(F, he)) : be & 16 ? fe & 16 ? ge(Z, he, F, V, G, ae, ue, oe, le) : Xe(Z, G, ae, !0) : (be & 8 && f(F, ""),
        fe & 16 && S(he, F, V, G, ae, ue, oe, le))
    }
      , X = (_,C,F,V,G,ae,ue,oe,le)=>{
        _ = _ || xr,
        C = C || xr;
        const Z = _.length
          , be = C.length
          , he = Math.min(Z, be);
        let P;
        for (P = 0; P < he; P++) {
            const fe = C[P] = le ? On(C[P]) : rn(C[P]);
            g(_[P], fe, F, null, G, ae, ue, oe, le)
        }
        Z > be ? Xe(_, G, ae, !0, !1, he) : S(C, F, V, G, ae, ue, oe, le, he)
    }
      , ge = (_,C,F,V,G,ae,ue,oe,le)=>{
        let Z = 0;
        const be = C.length;
        let he = _.length - 1
          , P = be - 1;
        for (; Z <= he && Z <= P; ) {
            const fe = _[Z]
              , Ee = C[Z] = le ? On(C[Z]) : rn(C[Z]);
            if (Qn(fe, Ee))
                g(fe, Ee, F, null, G, ae, ue, oe, le);
            else
                break;
            Z++
        }
        for (; Z <= he && Z <= P; ) {
            const fe = _[he]
              , Ee = C[P] = le ? On(C[P]) : rn(C[P]);
            if (Qn(fe, Ee))
                g(fe, Ee, F, null, G, ae, ue, oe, le);
            else
                break;
            he--,
            P--
        }
        if (Z > he) {
            if (Z <= P) {
                const fe = P + 1
                  , Ee = fe < be ? C[fe].el : V;
                for (; Z <= P; )
                    g(null, C[Z] = le ? On(C[Z]) : rn(C[Z]), F, Ee, G, ae, ue, oe, le),
                    Z++
            }
        } else if (Z > P)
            for (; Z <= he; )
                xe(_[Z], G, ae, !0),
                Z++;
        else {
            const fe = Z
              , Ee = Z
              , Pe = new Map;
            for (Z = Ee; Z <= P; Z++) {
                const yt = C[Z] = le ? On(C[Z]) : rn(C[Z]);
                yt.key != null && Pe.set(yt.key, Z)
            }
            let Le, qe = 0;
            const St = P - Ee + 1;
            let un = !1
              , Fr = 0;
            const wn = new Array(St);
            for (Z = 0; Z < St; Z++)
                wn[Z] = 0;
            for (Z = fe; Z <= he; Z++) {
                const yt = _[Z];
                if (qe >= St) {
                    xe(yt, G, ae, !0);
                    continue
                }
                let Lt;
                if (yt.key != null)
                    Lt = Pe.get(yt.key);
                else
                    for (Le = Ee; Le <= P; Le++)
                        if (wn[Le - Ee] === 0 && Qn(yt, C[Le])) {
                            Lt = Le;
                            break
                        }
                Lt === void 0 ? xe(yt, G, ae, !0) : (wn[Lt - Ee] = Z + 1,
                Lt >= Fr ? Fr = Lt : un = !0,
                g(yt, C[Lt], F, null, G, ae, ue, oe, le),
                qe++)
            }
            const hr = un ? wm(wn) : xr;
            for (Le = hr.length - 1,
            Z = St - 1; Z >= 0; Z--) {
                const yt = Ee + Z
                  , Lt = C[yt]
                  , mr = yt + 1 < be ? C[yt + 1].el : V;
                wn[Z] === 0 ? g(null, Lt, F, mr, G, ae, ue, oe, le) : un && (Le < 0 || Z !== hr[Le] ? Se(Lt, F, mr, 2) : Le--)
            }
        }
    }
      , Se = (_,C,F,V,G=null)=>{
        const {el: ae, type: ue, transition: oe, children: le, shapeFlag: Z} = _;
        if (Z & 6) {
            Se(_.component.subTree, C, F, V);
            return
        }
        if (Z & 128) {
            _.suspense.move(C, F, V);
            return
        }
        if (Z & 64) {
            ue.move(_, C, F, ze);
            return
        }
        if (ue === De) {
            r(ae, C, F);
            for (let he = 0; he < le.length; he++)
                Se(le[he], C, F, V);
            r(_.anchor, C, F);
            return
        }
        if (ue === li) {
            U(_, C, F);
            return
        }
        if (V !== 2 && Z & 1 && oe)
            if (V === 0)
                oe.beforeEnter(ae),
                r(ae, C, F),
                Et(()=>oe.enter(ae), G);
            else {
                const {leave: he, delayLeave: P, afterLeave: fe} = oe
                  , Ee = ()=>r(ae, C, F)
                  , Pe = ()=>{
                    he(ae, ()=>{
                        Ee(),
                        fe && fe()
                    }
                    )
                }
                ;
                P ? P(ae, Ee, Pe) : Pe()
            }
        else
            r(ae, C, F)
    }
      , xe = (_,C,F,V=!1,G=!1)=>{
        const {type: ae, props: ue, ref: oe, children: le, dynamicChildren: Z, shapeFlag: be, patchFlag: he, dirs: P} = _;
        if (oe != null && Ui(oe, null, F, _, !0),
        be & 256) {
            C.ctx.deactivate(_);
            return
        }
        const fe = be & 1 && P
          , Ee = !Jr(_);
        let Pe;
        if (Ee && (Pe = ue && ue.onVnodeBeforeUnmount) && nn(Pe, C, _),
        be & 6)
            We(_.component, F, V);
        else {
            if (be & 128) {
                _.suspense.unmount(F, V);
                return
            }
            fe && Vn(_, null, C, "beforeUnmount"),
            be & 64 ? _.type.remove(_, C, F, G, ze, V) : Z && (ae !== De || he > 0 && he & 64) ? Xe(Z, C, F, !1, !0) : (ae === De && he & 384 || !G && be & 16) && Xe(le, C, F),
            V && Ue(_)
        }
        (Ee && (Pe = ue && ue.onVnodeUnmounted) || fe) && Et(()=>{
            Pe && nn(Pe, C, _),
            fe && Vn(_, null, C, "unmounted")
        }
        , F)
    }
      , Ue = _=>{
        const {type: C, el: F, anchor: V, transition: G} = _;
        if (C === De) {
            at(F, V);
            return
        }
        if (C === li) {
            R(_);
            return
        }
        const ae = ()=>{
            o(F),
            G && !G.persisted && G.afterLeave && G.afterLeave()
        }
        ;
        if (_.shapeFlag & 1 && G && !G.persisted) {
            const {leave: ue, delayLeave: oe} = G
              , le = ()=>ue(F, ae);
            oe ? oe(_.el, ae, le) : le()
        } else
            ae()
    }
      , at = (_,C)=>{
        let F;
        for (; _ !== C; )
            F = p(_),
            o(_),
            _ = F;
        o(C)
    }
      , We = (_,C,F)=>{
        const {bum: V, scope: G, update: ae, subTree: ue, um: oe} = _;
        V && Ho(V),
        G.stop(),
        ae && (ae.active = !1,
        xe(ue, _, C, F)),
        oe && Et(oe, C),
        Et(()=>{
            _.isUnmounted = !0
        }
        , C),
        C && C.pendingBranch && !C.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === C.pendingId && (C.deps--,
        C.deps === 0 && C.resolve())
    }
      , Xe = (_,C,F,V=!1,G=!1,ae=0)=>{
        for (let ue = ae; ue < _.length; ue++)
            xe(_[ue], C, F, V, G)
    }
      , pt = _=>_.shapeFlag & 6 ? pt(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : p(_.anchor || _.el)
      , rt = (_,C,F)=>{
        _ == null ? C._vnode && xe(C._vnode, null, null, !0) : g(C._vnode || null, _, C, null, null, null, F),
        xl(),
        Qu(),
        C._vnode = _
    }
      , ze = {
        p: g,
        um: xe,
        m: Se,
        r: Ue,
        mt: W,
        mc: S,
        pc: Q,
        pbc: A,
        n: pt,
        o: e
    };
    let ot, xt;
    return t && ([ot,xt] = t(ze)),
    {
        render: rt,
        hydrate: ot,
        createApp: dm(rt, ot)
    }
}
function Wn({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Ma(e, t, n=!1) {
    const r = e.children
      , o = t.children;
    if (ve(r) && ve(o))
        for (let s = 0; s < r.length; s++) {
            const i = r[s];
            let a = o[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = On(o[s]),
            a.el = i.el),
            n || Ma(i, a)),
            a.type === bo && (a.el = i.el)
        }
}
function wm(e) {
    const t = e.slice()
      , n = [0];
    let r, o, s, i, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const c = e[r];
        if (c !== 0) {
            if (o = n[n.length - 1],
            e[o] < c) {
                t[r] = o,
                n.push(r);
                continue
            }
            for (s = 0,
            i = n.length - 1; s < i; )
                a = s + i >> 1,
                e[n[a]] < c ? s = a + 1 : i = a;
            c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]),
            n[s] = r)
        }
    }
    for (s = n.length,
    i = n[s - 1]; s-- > 0; )
        n[s] = i,
        i = t[i];
    return n
}
const xm = e=>e.__isTeleport
  , Xr = e=>e && (e.disabled || e.disabled === "")
  , Pl = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , zi = (e,t)=>{
    const n = e && e.to;
    return Ne(n) ? t ? t(n) : null : n
}
  , Sm = {
    __isTeleport: !0,
    process(e, t, n, r, o, s, i, a, l, c) {
        const {mc: f, pc: u, pbc: p, o: {insert: h, querySelector: m, createText: g, createComment: b}} = c
          , $ = Xr(t.props);
        let {shapeFlag: D, children: U, dynamicChildren: R} = t;
        if (e == null) {
            const x = t.el = g("")
              , B = t.anchor = g("");
            h(x, n, r),
            h(B, n, r);
            const L = t.target = zi(t.props, m)
              , S = t.targetAnchor = g("");
            L && (h(S, L),
            i = i || Pl(L));
            const k = (A,te)=>{
                D & 16 && f(U, A, te, o, s, i, a, l)
            }
            ;
            $ ? k(n, B) : L && k(L, S)
        } else {
            t.el = e.el;
            const x = t.anchor = e.anchor
              , B = t.target = e.target
              , L = t.targetAnchor = e.targetAnchor
              , S = Xr(e.props)
              , k = S ? n : B
              , A = S ? x : L;
            if (i = i || Pl(B),
            R ? (p(e.dynamicChildren, R, k, o, s, i, a),
            Ma(e, t, !0)) : l || u(e, t, k, A, o, s, i, a, !1),
            $)
                S || Ro(t, n, x, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const te = t.target = zi(t.props, m);
                te && Ro(t, te, null, c, 0)
            } else
                S && Ro(t, B, L, c, 1)
        }
        gf(t)
    },
    remove(e, t, n, r, {um: o, o: {remove: s}}, i) {
        const {shapeFlag: a, children: l, anchor: c, targetAnchor: f, target: u, props: p} = e;
        if (u && s(f),
        (i || !Xr(p)) && (s(c),
        a & 16))
            for (let h = 0; h < l.length; h++) {
                const m = l[h];
                o(m, t, n, !0, !!m.dynamicChildren)
            }
    },
    move: Ro,
    hydrate: Em
};
function Ro(e, t, n, {o: {insert: r}, m: o}, s=2) {
    s === 0 && r(e.targetAnchor, t, n);
    const {el: i, anchor: a, shapeFlag: l, children: c, props: f} = e
      , u = s === 2;
    if (u && r(i, t, n),
    (!u || Xr(f)) && l & 16)
        for (let p = 0; p < c.length; p++)
            o(c[p], t, n, 2);
    u && r(a, t, n)
}
function Em(e, t, n, r, o, s, {o: {nextSibling: i, parentNode: a, querySelector: l}}, c) {
    const f = t.target = zi(t.props, l);
    if (f) {
        const u = f._lpa || f.firstChild;
        if (t.shapeFlag & 16)
            if (Xr(t.props))
                t.anchor = c(i(e), t, a(e), n, r, o, s),
                t.targetAnchor = u;
            else {
                t.anchor = i(e);
                let p = u;
                for (; p; )
                    if (p = i(p),
                    p && p.nodeType === 8 && p.data === "teleport anchor") {
                        t.targetAnchor = p,
                        f._lpa = t.targetAnchor && i(t.targetAnchor);
                        break
                    }
                c(u, t, f, n, r, o, s)
            }
        gf(t)
    }
    return t.anchor && i(t.anchor)
}
const Cm = Sm;
function gf(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const De = Symbol.for("v-fgt")
  , bo = Symbol.for("v-txt")
  , Ft = Symbol.for("v-cmt")
  , li = Symbol.for("v-stc")
  , Zr = [];
let Jt = null;
function O(e=!1) {
    Zr.push(Jt = e ? null : [])
}
function Tm() {
    Zr.pop(),
    Jt = Zr[Zr.length - 1] || null
}
let uo = 1;
function Ll(e) {
    uo += e
}
function yf(e) {
    return e.dynamicChildren = uo > 0 ? Jt || xr : null,
    Tm(),
    uo > 0 && Jt && Jt.push(e),
    e
}
function K(e, t, n, r, o, s) {
    return yf(N(e, t, n, r, o, s, !0))
}
function Ie(e, t, n, r, o) {
    return yf(de(e, t, n, r, o, !0))
}
function ar(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function Qn(e, t) {
    return e.type === t.type && e.key === t.key
}
const Is = "__vInternal"
  , _f = ({key: e})=>e != null ? e : null
  , Vo = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? Ne(e) || Fe(e) || Ae(e) ? {
    i: ct,
    r: e,
    k: t,
    f: !!n
} : e : null);
function N(e, t=null, n=null, r=0, o=null, s=e === De ? 0 : 1, i=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && _f(t),
        ref: t && Vo(t),
        scopeId: Es,
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
        shapeFlag: s,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: ct
    };
    return a ? (Da(l, n),
    s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ne(n) ? 8 : 16),
    uo > 0 && !i && Jt && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Jt.push(l),
    l
}
const de = $m;
function $m(e, t=null, n=null, r=0, o=null, s=!1) {
    if ((!e || e === sf) && (e = Ft),
    ar(e)) {
        const a = Bn(e, t, !0);
        return n && Da(a, n),
        uo > 0 && !s && Jt && (a.shapeFlag & 6 ? Jt[Jt.indexOf(e)] = a : Jt.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (Mm(e) && (e = e.__vccOpts),
    t) {
        t = Im(t);
        let {class: a, style: l} = t;
        a && !Ne(a) && (t.class = pe(a)),
        Be(l) && (Hu(l) && !ve(l) && (l = nt({}, l)),
        t.style = Qe(l))
    }
    const i = Ne(e) ? 1 : jh(e) ? 128 : xm(e) ? 64 : Be(e) ? 4 : Ae(e) ? 2 : 0;
    return N(e, t, n, r, o, i, s, !0)
}
function Im(e) {
    return e ? Hu(e) || Is in e ? nt({}, e) : e : null
}
function Bn(e, t, n=!1) {
    const {props: r, ref: o, patchFlag: s, children: i} = e
      , a = t ? or(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && _f(a),
        ref: t && t.ref ? n && o ? ve(o) ? o.concat(Vo(t)) : [o, Vo(t)] : Vo(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== De ? s === -1 ? 16 : s | 16 : s,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Bn(e.ssContent),
        ssFallback: e.ssFallback && Bn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function Fn(e=" ", t=0) {
    return de(bo, null, e, t)
}
function ye(e="", t=!1) {
    return t ? (O(),
    Ie(Ft, null, e)) : de(Ft, null, e)
}
function rn(e) {
    return e == null || typeof e == "boolean" ? de(Ft) : ve(e) ? de(De, null, e.slice()) : typeof e == "object" ? On(e) : de(bo, null, String(e))
}
function On(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bn(e)
}
function Da(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (ve(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            Da(e, o()),
            o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !(Is in t) ? t._ctx = ct : o === 3 && ct && (ct.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        Ae(t) ? (t = {
            default: t,
            _ctx: ct
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Fn(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function or(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class")
                t.class !== r.class && (t.class = pe([t.class, r.class]));
            else if (o === "style")
                t.style = Qe([t.style, r.style]);
            else if (ds(o)) {
                const s = t[o]
                  , i = r[o];
                i && s !== i && !(ve(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i)
            } else
                o !== "" && (t[o] = r[o])
    }
    return t
}
function nn(e, t, n, r=null) {
    Bt(e, t, 7, [n, r])
}
const Am = ff();
let Om = 0;
function km(e, t, n) {
    const r = e.type
      , o = (t ? t.appContext : e.appContext) || Am
      , s = {
        uid: Om++,
        vnode: e,
        type: r,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Ou(!0),
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
        propsOptions: pf(r, o),
        emitsOptions: Zu(r, o),
        emit: null,
        emitted: null,
        propsDefaults: Ye,
        inheritAttrs: r.inheritAttrs,
        ctx: Ye,
        data: Ye,
        props: Ye,
        attrs: Ye,
        slots: Ye,
        refs: Ye,
        setupState: Ye,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
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
    return s.ctx = {
        _: s
    },
    s.root = t ? t.root : s,
    s.emit = Lh.bind(null, s),
    e.ce && e.ce(s),
    s
}
let st = null;
const Ot = ()=>st || ct;
let Ba, gr, Ml = "__VUE_INSTANCE_SETTERS__";
(gr = Ai()[Ml]) || (gr = Ai()[Ml] = []),
gr.push(e=>st = e),
Ba = e=>{
    gr.length > 1 ? gr.forEach(t=>t(e)) : gr[0](e)
}
;
const $r = e=>{
    Ba(e),
    e.scope.on()
}
  , sr = ()=>{
    st && st.scope.off(),
    Ba(null)
}
;
function bf(e) {
    return e.vnode.shapeFlag & 4
}
let fo = !1;
function Rm(e, t=!1) {
    fo = t;
    const {props: n, children: r} = e.vnode
      , o = bf(e);
    hm(e, n, o, t),
    gm(e, r);
    const s = o ? Nm(e, t) : void 0;
    return fo = !1,
    s
}
function Nm(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = ws(new Proxy(e.ctx,om));
    const {setup: r} = n;
    if (r) {
        const o = e.setupContext = r.length > 1 ? xf(e) : null;
        $r(e),
        Or();
        const s = Pn(r, e, 0, [e.props, o]);
        if (kr(),
        sr(),
        Qo(s)) {
            if (s.then(sr, sr),
            t)
                return s.then(i=>{
                    Dl(e, i, t)
                }
                ).catch(i=>{
                    xs(i, e, 0)
                }
                );
            e.asyncDep = s
        } else
            Dl(e, s, t)
    } else
        wf(e, t)
}
function Dl(e, t, n) {
    Ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Be(t) && (e.setupState = Wu(t)),
    wf(e, n)
}
let Bl;
function wf(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Bl && !r.render) {
            const o = r.template || Pa(e).template;
            if (o) {
                const {isCustomElement: s, compilerOptions: i} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , c = nt(nt({
                    isCustomElement: s,
                    delimiters: a
                }, i), l);
                r.render = Bl(o, c)
            }
        }
        e.render = r.render || vt
    }
    $r(e),
    Or(),
    im(e),
    kr(),
    sr()
}
function Pm(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return It(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function xf(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return Pm(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function As(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Wu(ws(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in Qr)
                    return Qr[n](e)
            },
            has(t, n) {
                return n in t || n in Qr
            }
        }))
}
function Lm(e, t=!0) {
    return Ae(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Mm(e) {
    return Ae(e) && "__vccOpts"in e
}
const Y = (e,t)=>qu(e, t, fo);
function Sf(e, t, n) {
    const r = arguments.length;
    return r === 2 ? Be(t) && !ve(t) ? ar(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ar(n) && (n = [n]),
    de(e, t, n))
}
const Dm = Symbol.for("v-scx")
  , Bm = ()=>Ge(Dm)
  , Fm = "3.3.4"
  , Um = "http://www.w3.org/2000/svg"
  , Xn = typeof document < "u" ? document : null
  , Fl = Xn && Xn.createElement("template")
  , zm = {
    insert: (e,t,n)=>{
        t.insertBefore(e, n || null)
    }
    ,
    remove: e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e,t,n,r)=>{
        const o = t ? Xn.createElementNS(Um, e) : Xn.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple),
        o
    }
    ,
    createText: e=>Xn.createTextNode(e),
    createComment: e=>Xn.createComment(e),
    setText: (e,t)=>{
        e.nodeValue = t
    }
    ,
    setElementText: (e,t)=>{
        e.textContent = t
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>Xn.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, o, s) {
        const i = n ? n.previousSibling : t.lastChild;
        if (o && (o === s || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling)); )
                ;
        else {
            Fl.innerHTML = r ? `<svg>${e}</svg>` : e;
            const a = Fl.content;
            if (r) {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            t.insertBefore(a, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
};
function jm(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
function Hm(e, t, n) {
    const r = e.style
      , o = Ne(n);
    if (n && !o) {
        if (t && !Ne(t))
            for (const s in t)
                n[s] == null && ji(r, s, "");
        for (const s in n)
            ji(r, s, n[s])
    } else {
        const s = r.display;
        o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
        "_vod"in e && (r.display = s)
    }
}
const Ul = /\s*!important$/;
function ji(e, t, n) {
    if (ve(n))
        n.forEach(r=>ji(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = Vm(e, t);
        Ul.test(n) ? e.setProperty(fr(r), n.replace(Ul, ""), "important") : e[r] = n
    }
}
const zl = ["Webkit", "Moz", "ms"]
  , ci = {};
function Vm(e, t) {
    const n = ci[t];
    if (n)
        return n;
    let r = Qt(t);
    if (r !== "filter" && r in e)
        return ci[t] = r;
    r = ms(r);
    for (let o = 0; o < zl.length; o++) {
        const s = zl[o] + r;
        if (s in e)
            return ci[t] = s
    }
    return t
}
const jl = "http://www.w3.org/1999/xlink";
function Wm(e, t, n, r, o) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(jl, t.slice(6, t.length)) : e.setAttributeNS(jl, t, n);
    else {
        const s = Kp(t);
        n == null || s && !$u(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n)
    }
}
function Km(e, t, n, r, o, s, i) {
    if (t === "innerHTML" || t === "textContent") {
        r && i(r, o, s),
        e[t] = n == null ? "" : n;
        return
    }
    const a = e.tagName;
    if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
        e._value = n;
        const c = a === "OPTION" ? e.getAttribute("value") : e.value
          , f = n == null ? "" : n;
        c !== f && (e.value = f),
        n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = $u(n) : n == null && c === "string" ? (n = "",
        l = !0) : c === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function Zn(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function Ym(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
function qm(e, t, n, r, o=null) {
    const s = e._vei || (e._vei = {})
      , i = s[t];
    if (r && i)
        i.value = r;
    else {
        const [a,l] = Gm(t);
        if (r) {
            const c = s[t] = Xm(r, o);
            Zn(e, a, c, l)
        } else
            i && (Ym(e, a, i, l),
            s[t] = void 0)
    }
}
const Hl = /(?:Once|Passive|Capture)$/;
function Gm(e) {
    let t;
    if (Hl.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Hl); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : fr(e.slice(2)), t]
}
let ui = 0;
const Jm = Promise.resolve()
  , Qm = ()=>ui || (Jm.then(()=>ui = 0),
ui = Date.now());
function Xm(e, t) {
    const n = r=>{
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        Bt(Zm(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = Qm(),
    n
}
function Zm(e, t) {
    if (ve(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = ()=>{
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r=>o=>!o._stopped && r && r(o))
    } else
        return t
}
const Vl = /^on[a-z]/
  , ev = (e,t,n,r,o=!1,s,i,a,l)=>{
    t === "class" ? jm(e, r, o) : t === "style" ? Hm(e, n, r) : ds(t) ? ga(t) || qm(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : tv(e, t, r, o)) ? Km(e, t, r, s, i, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    Wm(e, t, r, o))
}
;
function tv(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Vl.test(t) && Ae(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Vl.test(t) && Ne(n) ? !1 : t in e
}
const En = "transition"
  , jr = "animation"
  , lr = (e,{slots: t})=>Sf(Yh, nv(e), t);
lr.displayName = "Transition";
const Ef = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
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
};
lr.props = nt({}, tf, Ef);
const Kn = (e,t=[])=>{
    ve(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , Wl = e=>e ? ve(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function nv(e) {
    const t = {};
    for (const z in e)
        z in Ef || (t[z] = e[z]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: o, enterFromClass: s=`${n}-enter-from`, enterActiveClass: i=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=s, appearActiveClass: c=i, appearToClass: f=a, leaveFromClass: u=`${n}-leave-from`, leaveActiveClass: p=`${n}-leave-active`, leaveToClass: h=`${n}-leave-to`} = e
      , m = rv(o)
      , g = m && m[0]
      , b = m && m[1]
      , {onBeforeEnter: $, onEnter: D, onEnterCancelled: U, onLeave: R, onLeaveCancelled: x, onBeforeAppear: B=$, onAppear: L=D, onAppearCancelled: S=U} = t
      , k = (z,ne,W)=>{
        Yn(z, ne ? f : a),
        Yn(z, ne ? c : i),
        W && W()
    }
      , A = (z,ne)=>{
        z._isLeaving = !1,
        Yn(z, u),
        Yn(z, h),
        Yn(z, p),
        ne && ne()
    }
      , te = z=>(ne,W)=>{
        const J = z ? L : D
          , re = ()=>k(ne, z, W);
        Kn(J, [ne, re]),
        Kl(()=>{
            Yn(ne, z ? l : s),
            Cn(ne, z ? f : a),
            Wl(J) || Yl(ne, r, g, re)
        }
        )
    }
    ;
    return nt(t, {
        onBeforeEnter(z) {
            Kn($, [z]),
            Cn(z, s),
            Cn(z, i)
        },
        onBeforeAppear(z) {
            Kn(B, [z]),
            Cn(z, l),
            Cn(z, c)
        },
        onEnter: te(!1),
        onAppear: te(!0),
        onLeave(z, ne) {
            z._isLeaving = !0;
            const W = ()=>A(z, ne);
            Cn(z, u),
            iv(),
            Cn(z, p),
            Kl(()=>{
                !z._isLeaving || (Yn(z, u),
                Cn(z, h),
                Wl(R) || Yl(z, r, b, W))
            }
            ),
            Kn(R, [z, W])
        },
        onEnterCancelled(z) {
            k(z, !1),
            Kn(U, [z])
        },
        onAppearCancelled(z) {
            k(z, !0),
            Kn(S, [z])
        },
        onLeaveCancelled(z) {
            A(z),
            Kn(x, [z])
        }
    })
}
function rv(e) {
    if (e == null)
        return null;
    if (Be(e))
        return [fi(e.enter), fi(e.leave)];
    {
        const t = fi(e);
        return [t, t]
    }
}
function fi(e) {
    return Up(e)
}
function Cn(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set)).add(t)
}
function Yn(e, t) {
    t.split(/\s+/).forEach(r=>r && e.classList.remove(r));
    const {_vtc: n} = e;
    n && (n.delete(t),
    n.size || (e._vtc = void 0))
}
function Kl(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let ov = 0;
function Yl(e, t, n, r) {
    const o = e._endId = ++ov
      , s = ()=>{
        o === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(s, n);
    const {type: i, timeout: a, propCount: l} = sv(e, t);
    if (!i)
        return r();
    const c = i + "end";
    let f = 0;
    const u = ()=>{
        e.removeEventListener(c, p),
        s()
    }
      , p = h=>{
        h.target === e && ++f >= l && u()
    }
    ;
    setTimeout(()=>{
        f < l && u()
    }
    , a + 1),
    e.addEventListener(c, p)
}
function sv(e, t) {
    const n = window.getComputedStyle(e)
      , r = m=>(n[m] || "").split(", ")
      , o = r(`${En}Delay`)
      , s = r(`${En}Duration`)
      , i = ql(o, s)
      , a = r(`${jr}Delay`)
      , l = r(`${jr}Duration`)
      , c = ql(a, l);
    let f = null
      , u = 0
      , p = 0;
    t === En ? i > 0 && (f = En,
    u = i,
    p = s.length) : t === jr ? c > 0 && (f = jr,
    u = c,
    p = l.length) : (u = Math.max(i, c),
    f = u > 0 ? i > c ? En : jr : null,
    p = f ? f === En ? s.length : l.length : 0);
    const h = f === En && /\b(transform|all)(,|$)/.test(r(`${En}Property`).toString());
    return {
        type: f,
        timeout: u,
        propCount: p,
        hasTransform: h
    }
}
function ql(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,r)=>Gl(n) + Gl(e[r])))
}
function Gl(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function iv() {
    return document.body.offsetHeight
}
const rs = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return ve(t) ? n=>Ho(t, n) : t
}
;
function av(e) {
    e.target.composing = !0
}
function Jl(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Cf = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, o) {
        e._assign = rs(o);
        const s = r || o.props && o.props.type === "number";
        Zn(e, t ? "change" : "input", i=>{
            if (i.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            s && (a = Ii(a)),
            e._assign(a)
        }
        ),
        n && Zn(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (Zn(e, "compositionstart", av),
        Zn(e, "compositionend", Jl),
        Zn(e, "change", Jl))
    },
    mounted(e, {value: t}) {
        e.value = t == null ? "" : t
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: r, number: o}}, s) {
        if (e._assign = rs(s),
        e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (o || e.type === "number") && Ii(e.value) === t))
            return;
        const i = t == null ? "" : t;
        e.value !== i && (e.value = i)
    }
}
  , os = {
    deep: !0,
    created(e, t, n) {
        e._assign = rs(n),
        Zn(e, "change", ()=>{
            const r = e._modelValue
              , o = lv(e)
              , s = e.checked
              , i = e._assign;
            if (ve(r)) {
                const a = Iu(r, o)
                  , l = a !== -1;
                if (s && !l)
                    i(r.concat(o));
                else if (!s && l) {
                    const c = [...r];
                    c.splice(a, 1),
                    i(c)
                }
            } else if (ps(r)) {
                const a = new Set(r);
                s ? a.add(o) : a.delete(o),
                i(a)
            } else
                i(Tf(e, s))
        }
        )
    },
    mounted: Ql,
    beforeUpdate(e, t, n) {
        e._assign = rs(n),
        Ql(e, t, n)
    }
};
function Ql(e, {value: t, oldValue: n}, r) {
    e._modelValue = t,
    ve(t) ? e.checked = Iu(t, r.props.value) > -1 : ps(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = vs(t, Tf(e, !0)))
}
function lv(e) {
    return "_value"in e ? e._value : e.value
}
function Tf(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const cv = ["ctrl", "shift", "alt", "meta"]
  , uv = {
    stop: e=>e.stopPropagation(),
    prevent: e=>e.preventDefault(),
    self: e=>e.target !== e.currentTarget,
    ctrl: e=>!e.ctrlKey,
    shift: e=>!e.shiftKey,
    alt: e=>!e.altKey,
    meta: e=>!e.metaKey,
    left: e=>"button"in e && e.button !== 0,
    middle: e=>"button"in e && e.button !== 1,
    right: e=>"button"in e && e.button !== 2,
    exact: (e,t)=>cv.some(n=>e[`${n}Key`] && !t.includes(n))
}
  , lt = (e,t)=>(n,...r)=>{
    for (let o = 0; o < t.length; o++) {
        const s = uv[t[o]];
        if (s && s(n, t))
            return
    }
    return e(n, ...r)
}
  , fv = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , eo = (e,t)=>n=>{
    if (!("key"in n))
        return;
    const r = fr(n.key);
    if (t.some(o=>o === r || fv[o] === r))
        return e(n)
}
  , cr = {
    beforeMount(e, {value: t}, {transition: n}) {
        e._vod = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Hr(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Hr(e, !0),
        r.enter(e)) : r.leave(e, ()=>{
            Hr(e, !1)
        }
        ) : Hr(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Hr(e, t)
    }
};
function Hr(e, t) {
    e.style.display = t ? e._vod : "none"
}
const dv = nt({
    patchProp: ev
}, zm);
let Xl;
function pv() {
    return Xl || (Xl = _m(dv))
}
const hv = (...e)=>{
    const t = pv().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const o = mv(r);
        if (!o)
            return;
        const s = t._component;
        !Ae(s) && !s.render && !s.template && (s.template = o.innerHTML),
        o.innerHTML = "";
        const i = n(o, !1, o instanceof SVGElement);
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
;
function mv(e) {
    return Ne(e) ? document.querySelector(e) : e
}
var vv = !1;
/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let $f;
const Os = e=>$f = e
  , If = Symbol();
function Hi(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var to;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(to || (to = {}));
function gv() {
    const e = ku(!0)
      , t = e.run(()=>q({}));
    let n = []
      , r = [];
    const o = ws({
        install(s) {
            Os(o),
            o._a = s,
            s.provide(If, o),
            s.config.globalProperties.$pinia = o,
            r.forEach(i=>n.push(i)),
            r = []
        },
        use(s) {
            return !this._a && !vv ? r.push(s) : n.push(s),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return o
}
const Af = ()=>{}
;
function Zl(e, t, n, r=Af) {
    e.push(t);
    const o = ()=>{
        const s = e.indexOf(t);
        s > -1 && (e.splice(s, 1),
        r())
    }
    ;
    return !n && gs() && ys(o),
    o
}
function yr(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const yv = e=>e();
function Vi(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n,r)=>e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , o = e[n];
        Hi(o) && Hi(r) && e.hasOwnProperty(n) && !Fe(r) && !Nn(r) ? e[n] = Vi(o, r) : e[n] = r
    }
    return e
}
const _v = Symbol();
function bv(e) {
    return !Hi(e) || !e.hasOwnProperty(_v)
}
const {assign: In} = Object;
function wv(e) {
    return !!(Fe(e) && e.effect)
}
function xv(e, t, n, r) {
    const {state: o, actions: s, getters: i} = t
      , a = n.state.value[e];
    let l;
    function c() {
        a || (n.state.value[e] = o ? o() : {});
        const f = Ku(n.state.value[e]);
        return In(f, s, Object.keys(i || {}).reduce((u,p)=>(u[p] = ws(Y(()=>{
            Os(n);
            const h = n._s.get(e);
            return i[p].call(h, h)
        }
        )),
        u), {}))
    }
    return l = Of(e, c, t, n, r, !0),
    l
}
function Of(e, t, n={}, r, o, s) {
    let i;
    const a = In({
        actions: {}
    }, n)
      , l = {
        deep: !0
    };
    let c, f, u = [], p = [], h;
    const m = r.state.value[e];
    !s && !m && (r.state.value[e] = {}),
    q({});
    let g;
    function b(S) {
        let k;
        c = f = !1,
        typeof S == "function" ? (S(r.state.value[e]),
        k = {
            type: to.patchFunction,
            storeId: e,
            events: h
        }) : (Vi(r.state.value[e], S),
        k = {
            type: to.patchObject,
            payload: S,
            storeId: e,
            events: h
        });
        const A = g = Symbol();
        ft().then(()=>{
            g === A && (c = !0)
        }
        ),
        f = !0,
        yr(u, k, r.state.value[e])
    }
    const $ = s ? function() {
        const {state: k} = n
          , A = k ? k() : {};
        this.$patch(te=>{
            In(te, A)
        }
        )
    }
    : Af;
    function D() {
        i.stop(),
        u = [],
        p = [],
        r._s.delete(e)
    }
    function U(S, k) {
        return function() {
            Os(r);
            const A = Array.from(arguments)
              , te = []
              , z = [];
            function ne(re) {
                te.push(re)
            }
            function W(re) {
                z.push(re)
            }
            yr(p, {
                args: A,
                name: S,
                store: x,
                after: ne,
                onError: W
            });
            let J;
            try {
                J = k.apply(this && this.$id === e ? this : x, A)
            } catch (re) {
                throw yr(z, re),
                re
            }
            return J instanceof Promise ? J.then(re=>(yr(te, re),
            re)).catch(re=>(yr(z, re),
            Promise.reject(re))) : (yr(te, J),
            J)
        }
    }
    const R = {
        _p: r,
        $id: e,
        $onAction: Zl.bind(null, p),
        $patch: b,
        $reset: $,
        $subscribe(S, k={}) {
            const A = Zl(u, S, k.detached, ()=>te())
              , te = i.run(()=>$e(()=>r.state.value[e], z=>{
                (k.flush === "sync" ? f : c) && S({
                    storeId: e,
                    type: to.direct,
                    events: h
                }, z)
            }
            , In({}, l, k)));
            return A
        },
        $dispose: D
    }
      , x = $t(R);
    r._s.set(e, x);
    const B = r._a && r._a.runWithContext || yv
      , L = r._e.run(()=>(i = ku(),
    B(()=>i.run(t))));
    for (const S in L) {
        const k = L[S];
        if (Fe(k) && !wv(k) || Nn(k))
            s || (m && bv(k) && (Fe(k) ? k.value = m[S] : Vi(k, m[S])),
            r.state.value[e][S] = k);
        else if (typeof k == "function") {
            const A = U(S, k);
            L[S] = A,
            a.actions[S] = k
        }
    }
    return In(x, L),
    In(ke(x), L),
    Object.defineProperty(x, "$state", {
        get: ()=>r.state.value[e],
        set: S=>{
            b(k=>{
                In(k, S)
            }
            )
        }
    }),
    r._p.forEach(S=>{
        In(x, i.run(()=>S({
            store: x,
            app: r._a,
            pinia: r,
            options: a
        })))
    }
    ),
    m && s && n.hydrate && n.hydrate(x.$state, m),
    c = !0,
    f = !0,
    x
}
function ks(e, t, n) {
    let r, o;
    const s = typeof t == "function";
    typeof e == "string" ? (r = e,
    o = s ? n : t) : (o = e,
    r = e.id);
    function i(a, l) {
        const c = pm();
        return a = a || (c ? Ge(If, null) : null),
        a && Os(a),
        a = $f,
        a._s.has(r) || (s ? Of(r, t, o, a) : xv(r, o, a)),
        a._s.get(r)
    }
    return i.$id = r,
    i
}
function kf(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: Sv} = Object.prototype
  , {getPrototypeOf: Fa} = Object
  , Rs = (e=>t=>{
    const n = Sv.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , cn = e=>(e = e.toLowerCase(),
t=>Rs(t) === e)
  , Ns = e=>t=>typeof t === e
  , {isArray: Pr} = Array
  , po = Ns("undefined");
function Ev(e) {
    return e !== null && !po(e) && e.constructor !== null && !po(e.constructor) && Ut(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Rf = cn("ArrayBuffer");
function Cv(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Rf(e.buffer),
    t
}
const Tv = Ns("string")
  , Ut = Ns("function")
  , Nf = Ns("number")
  , Ps = e=>e !== null && typeof e == "object"
  , $v = e=>e === !0 || e === !1
  , Wo = e=>{
    if (Rs(e) !== "object")
        return !1;
    const t = Fa(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Iv = cn("Date")
  , Av = cn("File")
  , Ov = cn("Blob")
  , kv = cn("FileList")
  , Rv = e=>Ps(e) && Ut(e.pipe)
  , Nv = e=>{
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || Ut(e.append) && ((t = Rs(e)) === "formdata" || t === "object" && Ut(e.toString) && e.toString() === "[object FormData]"))
}
  , Pv = cn("URLSearchParams")
  , Lv = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wo(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, o;
    if (typeof e != "object" && (e = [e]),
    Pr(e))
        for (r = 0,
        o = e.length; r < o; r++)
            t.call(null, e[r], r, e);
    else {
        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , i = s.length;
        let a;
        for (r = 0; r < i; r++)
            a = s[r],
            t.call(null, e[a], a, e)
    }
}
function Pf(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, o;
    for (; r-- > 0; )
        if (o = n[r],
        t === o.toLowerCase())
            return o;
    return null
}
const Lf = (()=>typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)()
  , Mf = e=>!po(e) && e !== Lf;
function Wi() {
    const {caseless: e} = Mf(this) && this || {}
      , t = {}
      , n = (r,o)=>{
        const s = e && Pf(t, o) || o;
        Wo(t[s]) && Wo(r) ? t[s] = Wi(t[s], r) : Wo(r) ? t[s] = Wi({}, r) : Pr(r) ? t[s] = r.slice() : t[s] = r
    }
    ;
    for (let r = 0, o = arguments.length; r < o; r++)
        arguments[r] && wo(arguments[r], n);
    return t
}
const Mv = (e,t,n,{allOwnKeys: r}={})=>(wo(t, (o,s)=>{
    n && Ut(o) ? e[s] = kf(o, n) : e[s] = o
}
, {
    allOwnKeys: r
}),
e)
  , Dv = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , Bv = (e,t,n,r)=>{
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , Fv = (e,t,n,r)=>{
    let o, s, i;
    const a = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (o = Object.getOwnPropertyNames(e),
        s = o.length; s-- > 0; )
            i = o[s],
            (!r || r(i, e, t)) && !a[i] && (t[i] = e[i],
            a[i] = !0);
        e = n !== !1 && Fa(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , Uv = (e,t,n)=>{
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , zv = e=>{
    if (!e)
        return null;
    if (Pr(e))
        return e;
    let t = e.length;
    if (!Nf(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , jv = (e=>t=>e && t instanceof e)(typeof Uint8Array < "u" && Fa(Uint8Array))
  , Hv = (e,t)=>{
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
        const s = o.value;
        t.call(e, s[0], s[1])
    }
}
  , Vv = (e,t)=>{
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , Wv = cn("HTMLFormElement")
  , Kv = e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
    return r.toUpperCase() + o
})
  , ec = (({hasOwnProperty: e})=>(t,n)=>e.call(t, n))(Object.prototype)
  , Yv = cn("RegExp")
  , Df = (e,t)=>{
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    wo(n, (o,s)=>{
        t(o, s, e) !== !1 && (r[s] = o)
    }
    ),
    Object.defineProperties(e, r)
}
  , qv = e=>{
    Df(e, (t,n)=>{
        if (Ut(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (!!Ut(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = ()=>{
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , Gv = (e,t)=>{
    const n = {}
      , r = o=>{
        o.forEach(s=>{
            n[s] = !0
        }
        )
    }
    ;
    return Pr(e) ? r(e) : r(String(e).split(t)),
    n
}
  , Jv = ()=>{}
  , Qv = (e,t)=>(e = +e,
Number.isFinite(e) ? e : t)
  , di = "abcdefghijklmnopqrstuvwxyz"
  , tc = "0123456789"
  , Bf = {
    DIGIT: tc,
    ALPHA: di,
    ALPHA_DIGIT: di + di.toUpperCase() + tc
}
  , Xv = (e=16,t=Bf.ALPHA_DIGIT)=>{
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function Zv(e) {
    return !!(e && Ut(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const eg = e=>{
    const t = new Array(10)
      , n = (r,o)=>{
        if (Ps(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[o] = r;
                const s = Pr(r) ? [] : {};
                return wo(r, (i,a)=>{
                    const l = n(i, o + 1);
                    !po(l) && (s[a] = l)
                }
                ),
                t[o] = void 0,
                s
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , tg = cn("AsyncFunction")
  , ng = e=>e && (Ps(e) || Ut(e)) && Ut(e.then) && Ut(e.catch)
  , j = {
    isArray: Pr,
    isArrayBuffer: Rf,
    isBuffer: Ev,
    isFormData: Nv,
    isArrayBufferView: Cv,
    isString: Tv,
    isNumber: Nf,
    isBoolean: $v,
    isObject: Ps,
    isPlainObject: Wo,
    isUndefined: po,
    isDate: Iv,
    isFile: Av,
    isBlob: Ov,
    isRegExp: Yv,
    isFunction: Ut,
    isStream: Rv,
    isURLSearchParams: Pv,
    isTypedArray: jv,
    isFileList: kv,
    forEach: wo,
    merge: Wi,
    extend: Mv,
    trim: Lv,
    stripBOM: Dv,
    inherits: Bv,
    toFlatObject: Fv,
    kindOf: Rs,
    kindOfTest: cn,
    endsWith: Uv,
    toArray: zv,
    forEachEntry: Hv,
    matchAll: Vv,
    isHTMLForm: Wv,
    hasOwnProperty: ec,
    hasOwnProp: ec,
    reduceDescriptors: Df,
    freezeMethods: qv,
    toObjectSet: Gv,
    toCamelCase: Kv,
    noop: Jv,
    toFiniteNumber: Qv,
    findKey: Pf,
    global: Lf,
    isContextDefined: Mf,
    ALPHABET: Bf,
    generateString: Xv,
    isSpecCompliantForm: Zv,
    toJSONObject: eg,
    isAsyncFn: tg,
    isThenable: ng
};
function Me(e, t, n, r, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
j.inherits(Me, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: j.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Ff = Me.prototype
  , Uf = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
    Uf[e] = {
        value: e
    }
}
);
Object.defineProperties(Me, Uf);
Object.defineProperty(Ff, "isAxiosError", {
    value: !0
});
Me.from = (e,t,n,r,o,s)=>{
    const i = Object.create(Ff);
    return j.toFlatObject(e, i, function(l) {
        return l !== Error.prototype
    }, a=>a !== "isAxiosError"),
    Me.call(i, e.message, t, n, r, o),
    i.cause = e,
    i.name = e.name,
    s && Object.assign(i, s),
    i
}
;
const rg = null;
function Ki(e) {
    return j.isPlainObject(e) || j.isArray(e)
}
function zf(e) {
    return j.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function nc(e, t, n) {
    return e ? e.concat(t).map(function(o, s) {
        return o = zf(o),
        !n && s ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}
function og(e) {
    return j.isArray(e) && !e.some(Ki)
}
const sg = j.toFlatObject(j, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function Ls(e, t, n) {
    if (!j.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = j.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(g, b) {
        return !j.isUndefined(b[g])
    });
    const r = n.metaTokens
      , o = n.visitor || f
      , s = n.dots
      , i = n.indexes
      , l = (n.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(t);
    if (!j.isFunction(o))
        throw new TypeError("visitor must be a function");
    function c(m) {
        if (m === null)
            return "";
        if (j.isDate(m))
            return m.toISOString();
        if (!l && j.isBlob(m))
            throw new Me("Blob is not supported. Use a Buffer instead.");
        return j.isArrayBuffer(m) || j.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
    }
    function f(m, g, b) {
        let $ = m;
        if (m && !b && typeof m == "object") {
            if (j.endsWith(g, "{}"))
                g = r ? g : g.slice(0, -2),
                m = JSON.stringify(m);
            else if (j.isArray(m) && og(m) || (j.isFileList(m) || j.endsWith(g, "[]")) && ($ = j.toArray(m)))
                return g = zf(g),
                $.forEach(function(U, R) {
                    !(j.isUndefined(U) || U === null) && t.append(i === !0 ? nc([g], R, s) : i === null ? g : g + "[]", c(U))
                }),
                !1
        }
        return Ki(m) ? !0 : (t.append(nc(b, g, s), c(m)),
        !1)
    }
    const u = []
      , p = Object.assign(sg, {
        defaultVisitor: f,
        convertValue: c,
        isVisitable: Ki
    });
    function h(m, g) {
        if (!j.isUndefined(m)) {
            if (u.indexOf(m) !== -1)
                throw Error("Circular reference detected in " + g.join("."));
            u.push(m),
            j.forEach(m, function($, D) {
                (!(j.isUndefined($) || $ === null) && o.call(t, $, j.isString(D) ? D.trim() : D, g, p)) === !0 && h($, g ? g.concat(D) : [D])
            }),
            u.pop()
        }
    }
    if (!j.isObject(e))
        throw new TypeError("data must be an object");
    return h(e),
    t
}
function rc(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function Ua(e, t) {
    this._pairs = [],
    e && Ls(e, this, t)
}
const jf = Ua.prototype;
jf.append = function(t, n) {
    this._pairs.push([t, n])
}
;
jf.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, rc)
    }
    : rc;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
}
;
function ig(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Hf(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || ig
      , o = n && n.serialize;
    let s;
    if (o ? s = o(t, n) : s = j.isURLSearchParams(t) ? t.toString() : new Ua(t,n).toString(r),
    s) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + s
    }
    return e
}
class ag {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        j.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const oc = ag
  , Vf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , lg = typeof URLSearchParams < "u" ? URLSearchParams : Ua
  , cg = typeof FormData < "u" ? FormData : null
  , ug = typeof Blob < "u" ? Blob : null
  , fg = (()=>{
    let e;
    return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}
)()
  , dg = (()=>typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
  , sn = {
    isBrowser: !0,
    classes: {
        URLSearchParams: lg,
        FormData: cg,
        Blob: ug
    },
    isStandardBrowserEnv: fg,
    isStandardBrowserWebWorkerEnv: dg,
    protocols: ["http", "https", "file", "blob", "url", "data"]
};
function pg(e, t) {
    return Ls(e, new sn.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, o, s) {
            return sn.isNode && j.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function hg(e) {
    return j.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
}
function mg(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const o = n.length;
    let s;
    for (r = 0; r < o; r++)
        s = n[r],
        t[s] = e[s];
    return t
}
function Wf(e) {
    function t(n, r, o, s) {
        let i = n[s++];
        const a = Number.isFinite(+i)
          , l = s >= n.length;
        return i = !i && j.isArray(o) ? o.length : i,
        l ? (j.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r,
        !a) : ((!o[i] || !j.isObject(o[i])) && (o[i] = []),
        t(n, r, o[i], s) && j.isArray(o[i]) && (o[i] = mg(o[i])),
        !a)
    }
    if (j.isFormData(e) && j.isFunction(e.entries)) {
        const n = {};
        return j.forEachEntry(e, (r,o)=>{
            t(hg(r), o, n, 0)
        }
        ),
        n
    }
    return null
}
const vg = {
    "Content-Type": void 0
};
function gg(e, t, n) {
    if (j.isString(e))
        try {
            return (t || JSON.parse)(e),
            j.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const Ms = {
    transitional: Vf,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , o = r.indexOf("application/json") > -1
          , s = j.isObject(t);
        if (s && j.isHTMLForm(t) && (t = new FormData(t)),
        j.isFormData(t))
            return o && o ? JSON.stringify(Wf(t)) : t;
        if (j.isArrayBuffer(t) || j.isBuffer(t) || j.isStream(t) || j.isFile(t) || j.isBlob(t))
            return t;
        if (j.isArrayBufferView(t))
            return t.buffer;
        if (j.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let a;
        if (s) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return pg(t, this.formSerializer).toString();
            if ((a = j.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return Ls(a ? {
                    "files[]": t
                } : t, l && new l, this.formSerializer)
            }
        }
        return s || o ? (n.setContentType("application/json", !1),
        gg(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Ms.transitional
          , r = n && n.forcedJSONParsing
          , o = this.responseType === "json";
        if (t && j.isString(t) && (r && !this.responseType || o)) {
            const i = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (i)
                    throw a.name === "SyntaxError" ? Me.from(a, Me.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: sn.classes.FormData,
        Blob: sn.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
j.forEach(["delete", "get", "head"], function(t) {
    Ms.headers[t] = {}
});
j.forEach(["post", "put", "patch"], function(t) {
    Ms.headers[t] = j.merge(vg)
});
const za = Ms
  , yg = j.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , _g = e=>{
    const t = {};
    let n, r, o;
    return e && e.split(`
`).forEach(function(i) {
        o = i.indexOf(":"),
        n = i.substring(0, o).trim().toLowerCase(),
        r = i.substring(o + 1).trim(),
        !(!n || t[n] && yg[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , sc = Symbol("internals");
function Vr(e) {
    return e && String(e).trim().toLowerCase()
}
function Ko(e) {
    return e === !1 || e == null ? e : j.isArray(e) ? e.map(Ko) : String(e)
}
function bg(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const wg = e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pi(e, t, n, r, o) {
    if (j.isFunction(r))
        return r.call(this, t, n);
    if (o && (t = n),
    !!j.isString(t)) {
        if (j.isString(r))
            return t.indexOf(r) !== -1;
        if (j.isRegExp(r))
            return r.test(t)
    }
}
function xg(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,n,r)=>n.toUpperCase() + r)
}
function Sg(e, t) {
    const n = j.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r=>{
        Object.defineProperty(e, r + n, {
            value: function(o, s, i) {
                return this[r].call(this, t, o, s, i)
            },
            configurable: !0
        })
    }
    )
}
class Ds {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this;
        function s(a, l, c) {
            const f = Vr(l);
            if (!f)
                throw new Error("header name must be a non-empty string");
            const u = j.findKey(o, f);
            (!u || o[u] === void 0 || c === !0 || c === void 0 && o[u] !== !1) && (o[u || l] = Ko(a))
        }
        const i = (a,l)=>j.forEach(a, (c,f)=>s(c, f, l));
        return j.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : j.isString(t) && (t = t.trim()) && !wg(t) ? i(_g(t), n) : t != null && s(n, t, r),
        this
    }
    get(t, n) {
        if (t = Vr(t),
        t) {
            const r = j.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n)
                    return o;
                if (n === !0)
                    return bg(o);
                if (j.isFunction(n))
                    return n.call(this, o, r);
                if (j.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Vr(t),
        t) {
            const r = j.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || pi(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let o = !1;
        function s(i) {
            if (i = Vr(i),
            i) {
                const a = j.findKey(r, i);
                a && (!n || pi(r, r[a], a, n)) && (delete r[a],
                o = !0)
            }
        }
        return j.isArray(t) ? t.forEach(s) : s(t),
        o
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , o = !1;
        for (; r--; ) {
            const s = n[r];
            (!t || pi(this, this[s], s, t, !0)) && (delete this[s],
            o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this
          , r = {};
        return j.forEach(this, (o,s)=>{
            const i = j.findKey(r, s);
            if (i) {
                n[i] = Ko(o),
                delete n[s];
                return
            }
            const a = t ? xg(s) : String(s).trim();
            a !== s && delete n[s],
            n[a] = Ko(o),
            r[a] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return j.forEach(this, (r,o)=>{
            r != null && r !== !1 && (n[o] = t && j.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t,n])=>t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o=>r.set(o)),
        r
    }
    static accessor(t) {
        const r = (this[sc] = this[sc] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function s(i) {
            const a = Vr(i);
            r[a] || (Sg(o, i),
            r[a] = !0)
        }
        return j.isArray(t) ? t.forEach(s) : s(t),
        this
    }
}
Ds.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.freezeMethods(Ds.prototype);
j.freezeMethods(Ds);
const pn = Ds;
function hi(e, t) {
    const n = this || za
      , r = t || n
      , o = pn.from(r.headers);
    let s = r.data;
    return j.forEach(e, function(a) {
        s = a.call(n, s, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    s
}
function Kf(e) {
    return !!(e && e.__CANCEL__)
}
function xo(e, t, n) {
    Me.call(this, e == null ? "canceled" : e, Me.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
j.inherits(xo, Me, {
    __CANCEL__: !0
});
function Eg(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new Me("Request failed with status code " + n.status,[Me.ERR_BAD_REQUEST, Me.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
const Cg = sn.isStandardBrowserEnv ? function() {
    return {
        write: function(n, r, o, s, i, a) {
            const l = [];
            l.push(n + "=" + encodeURIComponent(r)),
            j.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()),
            j.isString(s) && l.push("path=" + s),
            j.isString(i) && l.push("domain=" + i),
            a === !0 && l.push("secure"),
            document.cookie = l.join("; ")
        },
        read: function(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();
function Tg(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function $g(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Yf(e, t) {
    return e && !Tg(t) ? $g(e, t) : t
}
const Ig = sn.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function o(s) {
        let i = s;
        return t && (n.setAttribute("href", i),
        i = n.href),
        n.setAttribute("href", i),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = o(window.location.href),
    function(i) {
        const a = j.isString(i) ? o(i) : i;
        return a.protocol === r.protocol && a.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}();
function Ag(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Og(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let o = 0, s = 0, i;
    return t = t !== void 0 ? t : 1e3,
    function(l) {
        const c = Date.now()
          , f = r[s];
        i || (i = c),
        n[o] = l,
        r[o] = c;
        let u = s
          , p = 0;
        for (; u !== o; )
            p += n[u++],
            u = u % e;
        if (o = (o + 1) % e,
        o === s && (s = (s + 1) % e),
        c - i < t)
            return;
        const h = f && c - f;
        return h ? Math.round(p * 1e3 / h) : void 0
    }
}
function ic(e, t) {
    let n = 0;
    const r = Og(50, 250);
    return o=>{
        const s = o.loaded
          , i = o.lengthComputable ? o.total : void 0
          , a = s - n
          , l = r(a)
          , c = s <= i;
        n = s;
        const f = {
            loaded: s,
            total: i,
            progress: i ? s / i : void 0,
            bytes: a,
            rate: l || void 0,
            estimated: l && i && c ? (i - s) / l : void 0,
            event: o
        };
        f[t ? "download" : "upload"] = !0,
        e(f)
    }
}
const kg = typeof XMLHttpRequest < "u"
  , Rg = kg && function(e) {}
  , Yo = {
    http: rg,
    xhr: Rg
};
j.forEach(Yo, (e,t)=>{
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Ng = {
    getAdapter: e=>{
        e = j.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        for (let o = 0; o < t && (n = e[o],
        !(r = j.isString(n) ? Yo[n.toLowerCase()] : n)); o++)
            ;
        if (!r)
            throw r === !1 ? new Me(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(j.hasOwnProp(Yo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!j.isFunction(r))
            throw new TypeError("adapter is not a function");
        return r
    }
    ,
    adapters: Yo
};
function mi(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new xo(null,e)
}
function ac(e) {
    return mi(e),
    e.headers = pn.from(e.headers),
    e.data = hi.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ng.getAdapter(e.adapter || za.adapter)(e).then(function(r) {
        return mi(e),
        r.data = hi.call(e, e.transformResponse, r),
        r.headers = pn.from(r.headers),
        r
    }, function(r) {
        return Kf(r) || (mi(e),
        r && r.response && (r.response.data = hi.call(e, e.transformResponse, r.response),
        r.response.headers = pn.from(r.response.headers))),
        Promise.reject(r)
    })
}
const lc = e=>e instanceof pn ? e.toJSON() : e;
function Ir(e, t) {
    t = t || {};
    const n = {};
    function r(c, f, u) {
        return j.isPlainObject(c) && j.isPlainObject(f) ? j.merge.call({
            caseless: u
        }, c, f) : j.isPlainObject(f) ? j.merge({}, f) : j.isArray(f) ? f.slice() : f
    }
    function o(c, f, u) {
        if (j.isUndefined(f)) {
            if (!j.isUndefined(c))
                return r(void 0, c, u)
        } else
            return r(c, f, u)
    }
    function s(c, f) {
        if (!j.isUndefined(f))
            return r(void 0, f)
    }
    function i(c, f) {
        if (j.isUndefined(f)) {
            if (!j.isUndefined(c))
                return r(void 0, c)
        } else
            return r(void 0, f)
    }
    function a(c, f, u) {
        if (u in t)
            return r(c, f);
        if (u in e)
            return r(void 0, c)
    }
    const l = {
        url: s,
        method: s,
        data: s,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: a,
        headers: (c,f)=>o(lc(c), lc(f), !0)
    };
    return j.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
        const u = l[f] || o
          , p = u(e[f], t[f], f);
        j.isUndefined(p) && u !== a || (n[f] = p)
    }),
    n
}
const qf = "1.4.0"
  , ja = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
    ja[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const cc = {};
ja.transitional = function(t, n, r) {
    function o(s, i) {
        return "[Axios v" + qf + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "")
    }
    return (s,i,a)=>{
        if (t === !1)
            throw new Me(o(i, " has been removed" + (n ? " in " + n : "")),Me.ERR_DEPRECATED);
        return n && !cc[i] && (cc[i] = !0,
        console.warn(o(i, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(s, i, a) : !0
    }
}
;
function Pg(e, t, n) {
    if (typeof e != "object")
        throw new Me("options must be an object",Me.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0; ) {
        const s = r[o]
          , i = t[s];
        if (i) {
            const a = e[s]
              , l = a === void 0 || i(a, s, e);
            if (l !== !0)
                throw new Me("option " + s + " must be " + l,Me.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new Me("Unknown option " + s,Me.ERR_BAD_OPTION)
    }
}
const Yi = {
    assertOptions: Pg,
    validators: ja
}
  , Tn = Yi.validators;
class ss {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new oc,
            response: new oc
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Ir(this.defaults, n);
        const {transitional: r, paramsSerializer: o, headers: s} = n;
        r !== void 0 && Yi.assertOptions(r, {
            silentJSONParsing: Tn.transitional(Tn.boolean),
            forcedJSONParsing: Tn.transitional(Tn.boolean),
            clarifyTimeoutError: Tn.transitional(Tn.boolean)
        }, !1),
        o != null && (j.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : Yi.assertOptions(o, {
            encode: Tn.function,
            serialize: Tn.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i;
        i = s && j.merge(s.common, s[n.method]),
        i && j.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m=>{
            delete s[m]
        }
        ),
        n.headers = pn.concat(i, s);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(g) {
            typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous,
            a.unshift(g.fulfilled, g.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(g) {
            c.push(g.fulfilled, g.rejected)
        });
        let f, u = 0, p;
        if (!l) {
            const m = [ac.bind(this), void 0];
            for (m.unshift.apply(m, a),
            m.push.apply(m, c),
            p = m.length,
            f = Promise.resolve(n); u < p; )
                f = f.then(m[u++], m[u++]);
            return f
        }
        p = a.length;
        let h = n;
        for (u = 0; u < p; ) {
            const m = a[u++]
              , g = a[u++];
            try {
                h = m(h)
            } catch (b) {
                g.call(this, b);
                break
            }
        }
        try {
            f = ac.call(this, h)
        } catch (m) {
            return Promise.reject(m)
        }
        for (u = 0,
        p = c.length; u < p; )
            f = f.then(c[u++], c[u++]);
        return f
    }
    getUri(t) {
        t = Ir(this.defaults, t);
        const n = Yf(t.baseURL, t.url);
        return Hf(n, t.params, t.paramsSerializer)
    }
}
j.forEach(["delete", "get", "head", "options"], function(t) {
    ss.prototype[t] = function(n, r) {
        return this.request(Ir(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
j.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(s, i, a) {
            return this.request(Ir(a || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: i
            }))
        }
    }
    ss.prototype[t] = n(),
    ss.prototype[t + "Form"] = n(!0)
});
const qo = ss;
class Ha {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(s) {
            n = s
        }
        );
        const r = this;
        this.promise.then(o=>{
            if (!r._listeners)
                return;
            let s = r._listeners.length;
            for (; s-- > 0; )
                r._listeners[s](o);
            r._listeners = null
        }
        ),
        this.promise.then = o=>{
            let s;
            const i = new Promise(a=>{
                r.subscribe(a),
                s = a
            }
            ).then(o);
            return i.cancel = function() {
                r.unsubscribe(s)
            }
            ,
            i
        }
        ,
        t(function(s, i, a) {
            r.reason || (r.reason = new xo(s,i,a),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Ha(function(o) {
                t = o
            }
            ),
            cancel: t
        }
    }
}
const Lg = Ha;
function Mg(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function Dg(e) {
    return j.isObject(e) && e.isAxiosError === !0
}
const qi = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(qi).forEach(([e,t])=>{
    qi[t] = e
}
);
const Bg = qi;
function Gf(e) {
    const t = new qo(e)
      , n = kf(qo.prototype.request, t);
    return j.extend(n, qo.prototype, t, {
        allOwnKeys: !0
    }),
    j.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(o) {
        return Gf(Ir(e, o))
    }
    ,
    n
}
const it = Gf(za);
it.Axios = qo;
it.CanceledError = xo;
it.CancelToken = Lg;
it.isCancel = Kf;
it.VERSION = qf;
it.toFormData = Ls;
it.AxiosError = Me;
it.Cancel = it.CanceledError;
it.all = function(t) {
    return Promise.all(t)
}
;
it.spread = Mg;
it.isAxiosError = Dg;
it.mergeConfig = Ir;
it.AxiosHeaders = pn;
it.formToJSON = e=>Wf(j.isHTMLForm(e) ? new FormData(e) : e);
it.HttpStatusCode = Bg;
it.default = it;
const Fg = it;
class Bs {
    constructor() {
        tn(this, "service", Fg.create({
            baseURL: "",
            timeout: 5e4
        }))
    }
}
function Ug(e) {
    return function(t, n, r) {
        const o = r.value
          , s = e(o);
        return r.value = s,
        r
    }
}
const jn = (e=t=>t)=>(t=n=>n.data)=>Ug(n=>function(...r) {
    try {
        const o = n.apply(this, r);
        return o instanceof Promise ? o.then(s=>[null, t.call(this, s)]).catch(s=>[e.call(this, s)]) : [null, t(o)]
    } catch (o) {
        return console.error("error", o),
        [e.call(this, o)]
    }
}
);
var zg = Object.defineProperty
  , jg = Object.getOwnPropertyDescriptor
  , Va = (e,t,n,r)=>{
    for (var o = r > 1 ? void 0 : r ? jg(t, n) : t, s = e.length - 1, i; s >= 0; s--)
        (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
    return r && o && zg(t, n, o),
    o
}
;
class Fs extends Bs {
    getConfig() {
        return this.service.get("/static/config.json")
    }
    getSearchEngine() {
        return this.service.get("https://api.mytab.me/config/searcher.json")
    }
    getWidgetList() {
        return this.service.get("https://api.mytab.me/config/icons.json")
    }
}
Va([jn()()], Fs.prototype, "getConfig", 1);
Va([jn()(e=>e.data.data.items)], Fs.prototype, "getSearchEngine", 1);
Va([jn()(e=>e.data.data.items)], Fs.prototype, "getWidgetList", 1);
const uc = new Fs
  , bt = ()=>{}
  , Wa = e=>chrome.i18n.getMessage(e.replaceAll(".", "_"));
var tr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function No(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Jf = {
    exports: {}
};
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(e, t) {
    (function(n) {
        e.exports = n()
    }
    )(function() {
        return function n(r, o, s) {
            function i(c, f) {
                if (!o[c]) {
                    if (!r[c]) {
                        var u = typeof No == "function" && No;
                        if (!f && u)
                            return u(c, !0);
                        if (a)
                            return a(c, !0);
                        var p = new Error("Cannot find module '" + c + "'");
                        throw p.code = "MODULE_NOT_FOUND",
                        p
                    }
                    var h = o[c] = {
                        exports: {}
                    };
                    r[c][0].call(h.exports, function(m) {
                        var g = r[c][1][m];
                        return i(g || m)
                    }, h, h.exports, n, r, o, s)
                }
                return o[c].exports
            }
            for (var a = typeof No == "function" && No, l = 0; l < s.length; l++)
                i(s[l]);
            return i
        }({
            1: [function(n, r, o) {
                (function(s) {
                    var i = s.MutationObserver || s.WebKitMutationObserver, a;
                    if (i) {
                        var l = 0
                          , c = new i(m)
                          , f = s.document.createTextNode("");
                        c.observe(f, {
                            characterData: !0
                        }),
                        a = function() {
                            f.data = l = ++l % 2
                        }
                    } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
                        var u = new s.MessageChannel;
                        u.port1.onmessage = m,
                        a = function() {
                            u.port2.postMessage(0)
                        }
                    } else
                        "document"in s && "onreadystatechange"in s.document.createElement("script") ? a = function() {
                            var b = s.document.createElement("script");
                            b.onreadystatechange = function() {
                                m(),
                                b.onreadystatechange = null,
                                b.parentNode.removeChild(b),
                                b = null
                            }
                            ,
                            s.document.documentElement.appendChild(b)
                        }
                        : a = function() {
                            setTimeout(m, 0)
                        }
                        ;
                    var p, h = [];
                    function m() {
                        p = !0;
                        for (var b, $, D = h.length; D; ) {
                            for ($ = h,
                            h = [],
                            b = -1; ++b < D; )
                                $[b]();
                            D = h.length
                        }
                        p = !1
                    }
                    r.exports = g;
                    function g(b) {
                        h.push(b) === 1 && !p && a()
                    }
                }
                ).call(this, typeof tr < "u" ? tr : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }
            , {}],
            2: [function(n, r, o) {
                var s = n(1);
                function i() {}
                var a = {}
                  , l = ["REJECTED"]
                  , c = ["FULFILLED"]
                  , f = ["PENDING"];
                r.exports = u;
                function u(x) {
                    if (typeof x != "function")
                        throw new TypeError("resolver must be a function");
                    this.state = f,
                    this.queue = [],
                    this.outcome = void 0,
                    x !== i && g(this, x)
                }
                u.prototype.catch = function(x) {
                    return this.then(null, x)
                }
                ,
                u.prototype.then = function(x, B) {
                    if (typeof x != "function" && this.state === c || typeof B != "function" && this.state === l)
                        return this;
                    var L = new this.constructor(i);
                    if (this.state !== f) {
                        var S = this.state === c ? x : B;
                        h(L, S, this.outcome)
                    } else
                        this.queue.push(new p(L,x,B));
                    return L
                }
                ;
                function p(x, B, L) {
                    this.promise = x,
                    typeof B == "function" && (this.onFulfilled = B,
                    this.callFulfilled = this.otherCallFulfilled),
                    typeof L == "function" && (this.onRejected = L,
                    this.callRejected = this.otherCallRejected)
                }
                p.prototype.callFulfilled = function(x) {
                    a.resolve(this.promise, x)
                }
                ,
                p.prototype.otherCallFulfilled = function(x) {
                    h(this.promise, this.onFulfilled, x)
                }
                ,
                p.prototype.callRejected = function(x) {
                    a.reject(this.promise, x)
                }
                ,
                p.prototype.otherCallRejected = function(x) {
                    h(this.promise, this.onRejected, x)
                }
                ;
                function h(x, B, L) {
                    s(function() {
                        var S;
                        try {
                            S = B(L)
                        } catch (k) {
                            return a.reject(x, k)
                        }
                        S === x ? a.reject(x, new TypeError("Cannot resolve promise with itself")) : a.resolve(x, S)
                    })
                }
                a.resolve = function(x, B) {
                    var L = b(m, B);
                    if (L.status === "error")
                        return a.reject(x, L.value);
                    var S = L.value;
                    if (S)
                        g(x, S);
                    else {
                        x.state = c,
                        x.outcome = B;
                        for (var k = -1, A = x.queue.length; ++k < A; )
                            x.queue[k].callFulfilled(B)
                    }
                    return x
                }
                ,
                a.reject = function(x, B) {
                    x.state = l,
                    x.outcome = B;
                    for (var L = -1, S = x.queue.length; ++L < S; )
                        x.queue[L].callRejected(B);
                    return x
                }
                ;
                function m(x) {
                    var B = x && x.then;
                    if (x && (typeof x == "object" || typeof x == "function") && typeof B == "function")
                        return function() {
                            B.apply(x, arguments)
                        }
                }
                function g(x, B) {
                    var L = !1;
                    function S(z) {
                        L || (L = !0,
                        a.reject(x, z))
                    }
                    function k(z) {
                        L || (L = !0,
                        a.resolve(x, z))
                    }
                    function A() {
                        B(k, S)
                    }
                    var te = b(A);
                    te.status === "error" && S(te.value)
                }
                function b(x, B) {
                    var L = {};
                    try {
                        L.value = x(B),
                        L.status = "success"
                    } catch (S) {
                        L.status = "error",
                        L.value = S
                    }
                    return L
                }
                u.resolve = $;
                function $(x) {
                    return x instanceof this ? x : a.resolve(new this(i), x)
                }
                u.reject = D;
                function D(x) {
                    var B = new this(i);
                    return a.reject(B, x)
                }
                u.all = U;
                function U(x) {
                    var B = this;
                    if (Object.prototype.toString.call(x) !== "[object Array]")
                        return this.reject(new TypeError("must be an array"));
                    var L = x.length
                      , S = !1;
                    if (!L)
                        return this.resolve([]);
                    for (var k = new Array(L), A = 0, te = -1, z = new this(i); ++te < L; )
                        ne(x[te], te);
                    return z;
                    function ne(W, J) {
                        B.resolve(W).then(re, function(M) {
                            S || (S = !0,
                            a.reject(z, M))
                        });
                        function re(M) {
                            k[J] = M,
                            ++A === L && !S && (S = !0,
                            a.resolve(z, k))
                        }
                    }
                }
                u.race = R;
                function R(x) {
                    var B = this;
                    if (Object.prototype.toString.call(x) !== "[object Array]")
                        return this.reject(new TypeError("must be an array"));
                    var L = x.length
                      , S = !1;
                    if (!L)
                        return this.resolve([]);
                    for (var k = -1, A = new this(i); ++k < L; )
                        te(x[k]);
                    return A;
                    function te(z) {
                        B.resolve(z).then(function(ne) {
                            S || (S = !0,
                            a.resolve(A, ne))
                        }, function(ne) {
                            S || (S = !0,
                            a.reject(A, ne))
                        })
                    }
                }
            }
            , {
                1: 1
            }],
            3: [function(n, r, o) {
                (function(s) {
                    typeof s.Promise != "function" && (s.Promise = n(2))
                }
                ).call(this, typeof tr < "u" ? tr : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }
            , {
                2: 2
            }],
            4: [function(n, r, o) {
                var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
                    return typeof v
                }
                : function(v) {
                    return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v
                }
                ;
                function i(v, w) {
                    if (!(v instanceof w))
                        throw new TypeError("Cannot call a class as a function")
                }
                function a() {
                    try {
                        if (typeof indexedDB < "u")
                            return indexedDB;
                        if (typeof webkitIndexedDB < "u")
                            return webkitIndexedDB;
                        if (typeof mozIndexedDB < "u")
                            return mozIndexedDB;
                        if (typeof OIndexedDB < "u")
                            return OIndexedDB;
                        if (typeof msIndexedDB < "u")
                            return msIndexedDB
                    } catch {
                        return
                    }
                }
                var l = a();
                function c() {
                    try {
                        if (!l || !l.open)
                            return !1;
                        var v = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform)
                          , w = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
                        return (!v || w) && typeof indexedDB < "u" && typeof IDBKeyRange < "u"
                    } catch {
                        return !1
                    }
                }
                function f(v, w) {
                    v = v || [],
                    w = w || {};
                    try {
                        return new Blob(v,w)
                    } catch (E) {
                        if (E.name !== "TypeError")
                            throw E;
                        for (var y = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, T = new y, I = 0; I < v.length; I += 1)
                            T.append(v[I]);
                        return T.getBlob(w.type)
                    }
                }
                typeof Promise > "u" && n(3);
                var u = Promise;
                function p(v, w) {
                    w && v.then(function(y) {
                        w(null, y)
                    }, function(y) {
                        w(y)
                    })
                }
                function h(v, w, y) {
                    typeof w == "function" && v.then(w),
                    typeof y == "function" && v.catch(y)
                }
                function m(v) {
                    return typeof v != "string" && (console.warn(v + " used as a key, but it is not a string."),
                    v = String(v)),
                    v
                }
                function g() {
                    if (arguments.length && typeof arguments[arguments.length - 1] == "function")
                        return arguments[arguments.length - 1]
                }
                var b = "local-forage-detect-blob-support"
                  , $ = void 0
                  , D = {}
                  , U = Object.prototype.toString
                  , R = "readonly"
                  , x = "readwrite";
                function B(v) {
                    for (var w = v.length, y = new ArrayBuffer(w), T = new Uint8Array(y), I = 0; I < w; I++)
                        T[I] = v.charCodeAt(I);
                    return y
                }
                function L(v) {
                    return new u(function(w) {
                        var y = v.transaction(b, x)
                          , T = f([""]);
                        y.objectStore(b).put(T, "key"),
                        y.onabort = function(I) {
                            I.preventDefault(),
                            I.stopPropagation(),
                            w(!1)
                        }
                        ,
                        y.oncomplete = function() {
                            var I = navigator.userAgent.match(/Chrome\/(\d+)/)
                              , E = navigator.userAgent.match(/Edge\//);
                            w(E || !I || parseInt(I[1], 10) >= 43)
                        }
                    }
                    ).catch(function() {
                        return !1
                    })
                }
                function S(v) {
                    return typeof $ == "boolean" ? u.resolve($) : L(v).then(function(w) {
                        return $ = w,
                        $
                    })
                }
                function k(v) {
                    var w = D[v.name]
                      , y = {};
                    y.promise = new u(function(T, I) {
                        y.resolve = T,
                        y.reject = I
                    }
                    ),
                    w.deferredOperations.push(y),
                    w.dbReady ? w.dbReady = w.dbReady.then(function() {
                        return y.promise
                    }) : w.dbReady = y.promise
                }
                function A(v) {
                    var w = D[v.name]
                      , y = w.deferredOperations.pop();
                    if (y)
                        return y.resolve(),
                        y.promise
                }
                function te(v, w) {
                    var y = D[v.name]
                      , T = y.deferredOperations.pop();
                    if (T)
                        return T.reject(w),
                        T.promise
                }
                function z(v, w) {
                    return new u(function(y, T) {
                        if (D[v.name] = D[v.name] || xe(),
                        v.db)
                            if (w)
                                k(v),
                                v.db.close();
                            else
                                return y(v.db);
                        var I = [v.name];
                        w && I.push(v.version);
                        var E = l.open.apply(l, I);
                        w && (E.onupgradeneeded = function(H) {
                            var ee = E.result;
                            try {
                                ee.createObjectStore(v.storeName),
                                H.oldVersion <= 1 && ee.createObjectStore(b)
                            } catch (se) {
                                if (se.name === "ConstraintError")
                                    console.warn('The database "' + v.name + '" has been upgraded from version ' + H.oldVersion + " to version " + H.newVersion + ', but the storage "' + v.storeName + '" already exists.');
                                else
                                    throw se
                            }
                        }
                        ),
                        E.onerror = function(H) {
                            H.preventDefault(),
                            T(E.error)
                        }
                        ,
                        E.onsuccess = function() {
                            var H = E.result;
                            H.onversionchange = function(ee) {
                                ee.target.close()
                            }
                            ,
                            y(H),
                            A(v)
                        }
                    }
                    )
                }
                function ne(v) {
                    return z(v, !1)
                }
                function W(v) {
                    return z(v, !0)
                }
                function J(v, w) {
                    if (!v.db)
                        return !0;
                    var y = !v.db.objectStoreNames.contains(v.storeName)
                      , T = v.version < v.db.version
                      , I = v.version > v.db.version;
                    if (T && (v.version !== w && console.warn('The database "' + v.name + `" can't be downgraded from version ` + v.db.version + " to version " + v.version + "."),
                    v.version = v.db.version),
                    I || y) {
                        if (y) {
                            var E = v.db.version + 1;
                            E > v.version && (v.version = E)
                        }
                        return !0
                    }
                    return !1
                }
                function re(v) {
                    return new u(function(w, y) {
                        var T = new FileReader;
                        T.onerror = y,
                        T.onloadend = function(I) {
                            var E = btoa(I.target.result || "");
                            w({
                                __local_forage_encoded_blob: !0,
                                data: E,
                                type: v.type
                            })
                        }
                        ,
                        T.readAsBinaryString(v)
                    }
                    )
                }
                function M(v) {
                    var w = B(atob(v.data));
                    return f([w], {
                        type: v.type
                    })
                }
                function Q(v) {
                    return v && v.__local_forage_encoded_blob
                }
                function X(v) {
                    var w = this
                      , y = w._initReady().then(function() {
                        var T = D[w._dbInfo.name];
                        if (T && T.dbReady)
                            return T.dbReady
                    });
                    return h(y, v, v),
                    y
                }
                function ge(v) {
                    k(v);
                    for (var w = D[v.name], y = w.forages, T = 0; T < y.length; T++) {
                        var I = y[T];
                        I._dbInfo.db && (I._dbInfo.db.close(),
                        I._dbInfo.db = null)
                    }
                    return v.db = null,
                    ne(v).then(function(E) {
                        return v.db = E,
                        J(v) ? W(v) : E
                    }).then(function(E) {
                        v.db = w.db = E;
                        for (var H = 0; H < y.length; H++)
                            y[H]._dbInfo.db = E
                    }).catch(function(E) {
                        throw te(v, E),
                        E
                    })
                }
                function Se(v, w, y, T) {
                    T === void 0 && (T = 1);
                    try {
                        var I = v.db.transaction(v.storeName, w);
                        y(null, I)
                    } catch (E) {
                        if (T > 0 && (!v.db || E.name === "InvalidStateError" || E.name === "NotFoundError"))
                            return u.resolve().then(function() {
                                if (!v.db || E.name === "NotFoundError" && !v.db.objectStoreNames.contains(v.storeName) && v.version <= v.db.version)
                                    return v.db && (v.version = v.db.version + 1),
                                    W(v)
                            }).then(function() {
                                return ge(v).then(function() {
                                    Se(v, w, y, T - 1)
                                })
                            }).catch(y);
                        y(E)
                    }
                }
                function xe() {
                    return {
                        forages: [],
                        db: null,
                        dbReady: null,
                        deferredOperations: []
                    }
                }
                function Ue(v) {
                    var w = this
                      , y = {
                        db: null
                    };
                    if (v)
                        for (var T in v)
                            y[T] = v[T];
                    var I = D[y.name];
                    I || (I = xe(),
                    D[y.name] = I),
                    I.forages.push(w),
                    w._initReady || (w._initReady = w.ready,
                    w.ready = X);
                    var E = [];
                    function H() {
                        return u.resolve()
                    }
                    for (var ee = 0; ee < I.forages.length; ee++) {
                        var se = I.forages[ee];
                        se !== w && E.push(se._initReady().catch(H))
                    }
                    var ie = I.forages.slice(0);
                    return u.all(E).then(function() {
                        return y.db = I.db,
                        ne(y)
                    }).then(function(ce) {
                        return y.db = ce,
                        J(y, w._defaultConfig.version) ? W(y) : ce
                    }).then(function(ce) {
                        y.db = I.db = ce,
                        w._dbInfo = y;
                        for (var _e = 0; _e < ie.length; _e++) {
                            var Oe = ie[_e];
                            Oe !== w && (Oe._dbInfo.db = y.db,
                            Oe._dbInfo.version = y.version)
                        }
                    })
                }
                function at(v, w) {
                    var y = this;
                    v = m(v);
                    var T = new u(function(I, E) {
                        y.ready().then(function() {
                            Se(y._dbInfo, R, function(H, ee) {
                                if (H)
                                    return E(H);
                                try {
                                    var se = ee.objectStore(y._dbInfo.storeName)
                                      , ie = se.get(v);
                                    ie.onsuccess = function() {
                                        var ce = ie.result;
                                        ce === void 0 && (ce = null),
                                        Q(ce) && (ce = M(ce)),
                                        I(ce)
                                    }
                                    ,
                                    ie.onerror = function() {
                                        E(ie.error)
                                    }
                                } catch (ce) {
                                    E(ce)
                                }
                            })
                        }).catch(E)
                    }
                    );
                    return p(T, w),
                    T
                }
                function We(v, w) {
                    var y = this
                      , T = new u(function(I, E) {
                        y.ready().then(function() {
                            Se(y._dbInfo, R, function(H, ee) {
                                if (H)
                                    return E(H);
                                try {
                                    var se = ee.objectStore(y._dbInfo.storeName)
                                      , ie = se.openCursor()
                                      , ce = 1;
                                    ie.onsuccess = function() {
                                        var _e = ie.result;
                                        if (_e) {
                                            var Oe = _e.value;
                                            Q(Oe) && (Oe = M(Oe));
                                            var je = v(Oe, _e.key, ce++);
                                            je !== void 0 ? I(je) : _e.continue()
                                        } else
                                            I()
                                    }
                                    ,
                                    ie.onerror = function() {
                                        E(ie.error)
                                    }
                                } catch (_e) {
                                    E(_e)
                                }
                            })
                        }).catch(E)
                    }
                    );
                    return p(T, w),
                    T
                }
                function Xe(v, w, y) {
                    var T = this;
                    v = m(v);
                    var I = new u(function(E, H) {
                        var ee;
                        T.ready().then(function() {
                            return ee = T._dbInfo,
                            U.call(w) === "[object Blob]" ? S(ee.db).then(function(se) {
                                return se ? w : re(w)
                            }) : w
                        }).then(function(se) {
                            Se(T._dbInfo, x, function(ie, ce) {
                                if (ie)
                                    return H(ie);
                                try {
                                    var _e = ce.objectStore(T._dbInfo.storeName);
                                    se === null && (se = void 0);
                                    var Oe = _e.put(se, v);
                                    ce.oncomplete = function() {
                                        se === void 0 && (se = null),
                                        E(se)
                                    }
                                    ,
                                    ce.onabort = ce.onerror = function() {
                                        var je = Oe.error ? Oe.error : Oe.transaction.error;
                                        H(je)
                                    }
                                } catch (je) {
                                    H(je)
                                }
                            })
                        }).catch(H)
                    }
                    );
                    return p(I, y),
                    I
                }
                function pt(v, w) {
                    var y = this;
                    v = m(v);
                    var T = new u(function(I, E) {
                        y.ready().then(function() {
                            Se(y._dbInfo, x, function(H, ee) {
                                if (H)
                                    return E(H);
                                try {
                                    var se = ee.objectStore(y._dbInfo.storeName)
                                      , ie = se.delete(v);
                                    ee.oncomplete = function() {
                                        I()
                                    }
                                    ,
                                    ee.onerror = function() {
                                        E(ie.error)
                                    }
                                    ,
                                    ee.onabort = function() {
                                        var ce = ie.error ? ie.error : ie.transaction.error;
                                        E(ce)
                                    }
                                } catch (ce) {
                                    E(ce)
                                }
                            })
                        }).catch(E)
                    }
                    );
                    return p(T, w),
                    T
                }
                function rt(v) {
                    var w = this
                      , y = new u(function(T, I) {
                        w.ready().then(function() {
                            Se(w._dbInfo, x, function(E, H) {
                                if (E)
                                    return I(E);
                                try {
                                    var ee = H.objectStore(w._dbInfo.storeName)
                                      , se = ee.clear();
                                    H.oncomplete = function() {
                                        T()
                                    }
                                    ,
                                    H.onabort = H.onerror = function() {
                                        var ie = se.error ? se.error : se.transaction.error;
                                        I(ie)
                                    }
                                } catch (ie) {
                                    I(ie)
                                }
                            })
                        }).catch(I)
                    }
                    );
                    return p(y, v),
                    y
                }
                function ze(v) {
                    var w = this
                      , y = new u(function(T, I) {
                        w.ready().then(function() {
                            Se(w._dbInfo, R, function(E, H) {
                                if (E)
                                    return I(E);
                                try {
                                    var ee = H.objectStore(w._dbInfo.storeName)
                                      , se = ee.count();
                                    se.onsuccess = function() {
                                        T(se.result)
                                    }
                                    ,
                                    se.onerror = function() {
                                        I(se.error)
                                    }
                                } catch (ie) {
                                    I(ie)
                                }
                            })
                        }).catch(I)
                    }
                    );
                    return p(y, v),
                    y
                }
                function ot(v, w) {
                    var y = this
                      , T = new u(function(I, E) {
                        if (v < 0) {
                            I(null);
                            return
                        }
                        y.ready().then(function() {
                            Se(y._dbInfo, R, function(H, ee) {
                                if (H)
                                    return E(H);
                                try {
                                    var se = ee.objectStore(y._dbInfo.storeName)
                                      , ie = !1
                                      , ce = se.openKeyCursor();
                                    ce.onsuccess = function() {
                                        var _e = ce.result;
                                        if (!_e) {
                                            I(null);
                                            return
                                        }
                                        v === 0 || ie ? I(_e.key) : (ie = !0,
                                        _e.advance(v))
                                    }
                                    ,
                                    ce.onerror = function() {
                                        E(ce.error)
                                    }
                                } catch (_e) {
                                    E(_e)
                                }
                            })
                        }).catch(E)
                    }
                    );
                    return p(T, w),
                    T
                }
                function xt(v) {
                    var w = this
                      , y = new u(function(T, I) {
                        w.ready().then(function() {
                            Se(w._dbInfo, R, function(E, H) {
                                if (E)
                                    return I(E);
                                try {
                                    var ee = H.objectStore(w._dbInfo.storeName)
                                      , se = ee.openKeyCursor()
                                      , ie = [];
                                    se.onsuccess = function() {
                                        var ce = se.result;
                                        if (!ce) {
                                            T(ie);
                                            return
                                        }
                                        ie.push(ce.key),
                                        ce.continue()
                                    }
                                    ,
                                    se.onerror = function() {
                                        I(se.error)
                                    }
                                } catch (ce) {
                                    I(ce)
                                }
                            })
                        }).catch(I)
                    }
                    );
                    return p(y, v),
                    y
                }
                function _(v, w) {
                    w = g.apply(this, arguments);
                    var y = this.config();
                    v = typeof v != "function" && v || {},
                    v.name || (v.name = v.name || y.name,
                    v.storeName = v.storeName || y.storeName);
                    var T = this, I;
                    if (!v.name)
                        I = u.reject("Invalid arguments");
                    else {
                        var E = v.name === y.name && T._dbInfo.db
                          , H = E ? u.resolve(T._dbInfo.db) : ne(v).then(function(ee) {
                            var se = D[v.name]
                              , ie = se.forages;
                            se.db = ee;
                            for (var ce = 0; ce < ie.length; ce++)
                                ie[ce]._dbInfo.db = ee;
                            return ee
                        });
                        v.storeName ? I = H.then(function(ee) {
                            if (!!ee.objectStoreNames.contains(v.storeName)) {
                                var se = ee.version + 1;
                                k(v);
                                var ie = D[v.name]
                                  , ce = ie.forages;
                                ee.close();
                                for (var _e = 0; _e < ce.length; _e++) {
                                    var Oe = ce[_e];
                                    Oe._dbInfo.db = null,
                                    Oe._dbInfo.version = se
                                }
                                var je = new u(function(He, tt) {
                                    var Ze = l.open(v.name, se);
                                    Ze.onerror = function(Mt) {
                                        var zr = Ze.result;
                                        zr.close(),
                                        tt(Mt)
                                    }
                                    ,
                                    Ze.onupgradeneeded = function() {
                                        var Mt = Ze.result;
                                        Mt.deleteObjectStore(v.storeName)
                                    }
                                    ,
                                    Ze.onsuccess = function() {
                                        var Mt = Ze.result;
                                        Mt.close(),
                                        He(Mt)
                                    }
                                }
                                );
                                return je.then(function(He) {
                                    ie.db = He;
                                    for (var tt = 0; tt < ce.length; tt++) {
                                        var Ze = ce[tt];
                                        Ze._dbInfo.db = He,
                                        A(Ze._dbInfo)
                                    }
                                }).catch(function(He) {
                                    throw (te(v, He) || u.resolve()).catch(function() {}),
                                    He
                                })
                            }
                        }) : I = H.then(function(ee) {
                            k(v);
                            var se = D[v.name]
                              , ie = se.forages;
                            ee.close();
                            for (var ce = 0; ce < ie.length; ce++) {
                                var _e = ie[ce];
                                _e._dbInfo.db = null
                            }
                            var Oe = new u(function(je, He) {
                                var tt = l.deleteDatabase(v.name);
                                tt.onerror = function() {
                                    var Ze = tt.result;
                                    Ze && Ze.close(),
                                    He(tt.error)
                                }
                                ,
                                tt.onblocked = function() {
                                    console.warn('dropInstance blocked for database "' + v.name + '" until all open connections are closed')
                                }
                                ,
                                tt.onsuccess = function() {
                                    var Ze = tt.result;
                                    Ze && Ze.close(),
                                    je(Ze)
                                }
                            }
                            );
                            return Oe.then(function(je) {
                                se.db = je;
                                for (var He = 0; He < ie.length; He++) {
                                    var tt = ie[He];
                                    A(tt._dbInfo)
                                }
                            }).catch(function(je) {
                                throw (te(v, je) || u.resolve()).catch(function() {}),
                                je
                            })
                        })
                    }
                    return p(I, w),
                    I
                }
                var C = {
                    _driver: "asyncStorage",
                    _initStorage: Ue,
                    _support: c(),
                    iterate: We,
                    getItem: at,
                    setItem: Xe,
                    removeItem: pt,
                    clear: rt,
                    length: ze,
                    key: ot,
                    keys: xt,
                    dropInstance: _
                };
                function F() {
                    return typeof openDatabase == "function"
                }
                var V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                  , G = "~~local_forage_type~"
                  , ae = /^~~local_forage_type~([^~]+)~/
                  , ue = "__lfsc__:"
                  , oe = ue.length
                  , le = "arbf"
                  , Z = "blob"
                  , be = "si08"
                  , he = "ui08"
                  , P = "uic8"
                  , fe = "si16"
                  , Ee = "si32"
                  , Pe = "ur16"
                  , Le = "ui32"
                  , qe = "fl32"
                  , St = "fl64"
                  , un = oe + le.length
                  , Fr = Object.prototype.toString;
                function wn(v) {
                    var w = v.length * .75, y = v.length, T, I = 0, E, H, ee, se;
                    v[v.length - 1] === "=" && (w--,
                    v[v.length - 2] === "=" && w--);
                    var ie = new ArrayBuffer(w)
                      , ce = new Uint8Array(ie);
                    for (T = 0; T < y; T += 4)
                        E = V.indexOf(v[T]),
                        H = V.indexOf(v[T + 1]),
                        ee = V.indexOf(v[T + 2]),
                        se = V.indexOf(v[T + 3]),
                        ce[I++] = E << 2 | H >> 4,
                        ce[I++] = (H & 15) << 4 | ee >> 2,
                        ce[I++] = (ee & 3) << 6 | se & 63;
                    return ie
                }
                function hr(v) {
                    var w = new Uint8Array(v), y = "", T;
                    for (T = 0; T < w.length; T += 3)
                        y += V[w[T] >> 2],
                        y += V[(w[T] & 3) << 4 | w[T + 1] >> 4],
                        y += V[(w[T + 1] & 15) << 2 | w[T + 2] >> 6],
                        y += V[w[T + 2] & 63];
                    return w.length % 3 === 2 ? y = y.substring(0, y.length - 1) + "=" : w.length % 3 === 1 && (y = y.substring(0, y.length - 2) + "=="),
                    y
                }
                function yt(v, w) {
                    var y = "";
                    if (v && (y = Fr.call(v)),
                    v && (y === "[object ArrayBuffer]" || v.buffer && Fr.call(v.buffer) === "[object ArrayBuffer]")) {
                        var T, I = ue;
                        v instanceof ArrayBuffer ? (T = v,
                        I += le) : (T = v.buffer,
                        y === "[object Int8Array]" ? I += be : y === "[object Uint8Array]" ? I += he : y === "[object Uint8ClampedArray]" ? I += P : y === "[object Int16Array]" ? I += fe : y === "[object Uint16Array]" ? I += Pe : y === "[object Int32Array]" ? I += Ee : y === "[object Uint32Array]" ? I += Le : y === "[object Float32Array]" ? I += qe : y === "[object Float64Array]" ? I += St : w(new Error("Failed to get type for BinaryArray"))),
                        w(I + hr(T))
                    } else if (y === "[object Blob]") {
                        var E = new FileReader;
                        E.onload = function() {
                            var H = G + v.type + "~" + hr(this.result);
                            w(ue + Z + H)
                        }
                        ,
                        E.readAsArrayBuffer(v)
                    } else
                        try {
                            w(JSON.stringify(v))
                        } catch (H) {
                            console.error("Couldn't convert value into a JSON string: ", v),
                            w(null, H)
                        }
                }
                function Lt(v) {
                    if (v.substring(0, oe) !== ue)
                        return JSON.parse(v);
                    var w = v.substring(un), y = v.substring(oe, un), T;
                    if (y === Z && ae.test(w)) {
                        var I = w.match(ae);
                        T = I[1],
                        w = w.substring(I[0].length)
                    }
                    var E = wn(w);
                    switch (y) {
                    case le:
                        return E;
                    case Z:
                        return f([E], {
                            type: T
                        });
                    case be:
                        return new Int8Array(E);
                    case he:
                        return new Uint8Array(E);
                    case P:
                        return new Uint8ClampedArray(E);
                    case fe:
                        return new Int16Array(E);
                    case Pe:
                        return new Uint16Array(E);
                    case Ee:
                        return new Int32Array(E);
                    case Le:
                        return new Uint32Array(E);
                    case qe:
                        return new Float32Array(E);
                    case St:
                        return new Float64Array(E);
                    default:
                        throw new Error("Unkown type: " + y)
                    }
                }
                var mr = {
                    serialize: yt,
                    deserialize: Lt,
                    stringToBuffer: wn,
                    bufferToString: hr
                };
                function al(v, w, y, T) {
                    v.executeSql("CREATE TABLE IF NOT EXISTS " + w.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], y, T)
                }
                function Jd(v) {
                    var w = this
                      , y = {
                        db: null
                    };
                    if (v)
                        for (var T in v)
                            y[T] = typeof v[T] != "string" ? v[T].toString() : v[T];
                    var I = new u(function(E, H) {
                        try {
                            y.db = openDatabase(y.name, String(y.version), y.description, y.size)
                        } catch (ee) {
                            return H(ee)
                        }
                        y.db.transaction(function(ee) {
                            al(ee, y, function() {
                                w._dbInfo = y,
                                E()
                            }, function(se, ie) {
                                H(ie)
                            })
                        }, H)
                    }
                    );
                    return y.serializer = mr,
                    I
                }
                function xn(v, w, y, T, I, E) {
                    v.executeSql(y, T, I, function(H, ee) {
                        ee.code === ee.SYNTAX_ERR ? H.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [w.storeName], function(se, ie) {
                            ie.rows.length ? E(se, ee) : al(se, w, function() {
                                se.executeSql(y, T, I, E)
                            }, E)
                        }, E) : E(H, ee)
                    }, E)
                }
                function Qd(v, w) {
                    var y = this;
                    v = m(v);
                    var T = new u(function(I, E) {
                        y.ready().then(function() {
                            var H = y._dbInfo;
                            H.db.transaction(function(ee) {
                                xn(ee, H, "SELECT * FROM " + H.storeName + " WHERE key = ? LIMIT 1", [v], function(se, ie) {
                                    var ce = ie.rows.length ? ie.rows.item(0).value : null;
                                    ce && (ce = H.serializer.deserialize(ce)),
                                    I(ce)
                                }, function(se, ie) {
                                    E(ie)
                                })
                            })
                        }).catch(E)
                    }
                    );
                    return p(T, w),
                    T
                }
                function Xd(v, w) {
                    var y = this
                      , T = new u(function(I, E) {
                        y.ready().then(function() {
                            var H = y._dbInfo;
                            H.db.transaction(function(ee) {
                                xn(ee, H, "SELECT * FROM " + H.storeName, [], function(se, ie) {
                                    for (var ce = ie.rows, _e = ce.length, Oe = 0; Oe < _e; Oe++) {
                                        var je = ce.item(Oe)
                                          , He = je.value;
                                        if (He && (He = H.serializer.deserialize(He)),
                                        He = v(He, je.key, Oe + 1),
                                        He !== void 0) {
                                            I(He);
                                            return
                                        }
                                    }
                                    I()
                                }, function(se, ie) {
                                    E(ie)
                                })
                            })
                        }).catch(E)
                    }
                    );
                    return p(T, w),
                    T
                }
                function ll(v, w, y, T) {
                    var I = this;
                    v = m(v);
                    var E = new u(function(H, ee) {
                        I.ready().then(function() {
                            w === void 0 && (w = null);
                            var se = w
                              , ie = I._dbInfo;
                            ie.serializer.serialize(w, function(ce, _e) {
                                _e ? ee(_e) : ie.db.transaction(function(Oe) {
                                    xn(Oe, ie, "INSERT OR REPLACE INTO " + ie.storeName + " (key, value) VALUES (?, ?)", [v, ce], function() {
                                        H(se)
                                    }, function(je, He) {
                                        ee(He)
                                    })
                                }, function(Oe) {
                                    if (Oe.code === Oe.QUOTA_ERR) {
                                        if (T > 0) {
                                            H(ll.apply(I, [v, se, y, T - 1]));
                                            return
                                        }
                                        ee(Oe)
                                    }
                                })
                            })
                        }).catch(ee)
                    }
                    );
                    return p(E, y),
                    E
                }
                function Zd(v, w, y) {
                    return ll.apply(this, [v, w, y, 1])
                }
                function ep(v, w) {
                    var y = this;
                    v = m(v);
                    var T = new u(function(I, E) {
                        y.ready().then(function() {
                            var H = y._dbInfo;
                            H.db.transaction(function(ee) {
                                xn(ee, H, "DELETE FROM " + H.storeName + " WHERE key = ?", [v], function() {
                                    I()
                                }, function(se, ie) {
                                    E(ie)
                                })
                            })
                        }).catch(E)
                    }
                    );
                    return p(T, w),
                    T
                }
                function tp(v) {
                    var w = this
                      , y = new u(function(T, I) {
                        w.ready().then(function() {
                            var E = w._dbInfo;
                            E.db.transaction(function(H) {
                                xn(H, E, "DELETE FROM " + E.storeName, [], function() {
                                    T()
                                }, function(ee, se) {
                                    I(se)
                                })
                            })
                        }).catch(I)
                    }
                    );
                    return p(y, v),
                    y
                }
                function np(v) {
                    var w = this
                      , y = new u(function(T, I) {
                        w.ready().then(function() {
                            var E = w._dbInfo;
                            E.db.transaction(function(H) {
                                xn(H, E, "SELECT COUNT(key) as c FROM " + E.storeName, [], function(ee, se) {
                                    var ie = se.rows.item(0).c;
                                    T(ie)
                                }, function(ee, se) {
                                    I(se)
                                })
                            })
                        }).catch(I)
                    }
                    );
                    return p(y, v),
                    y
                }
                function rp(v, w) {
                    var y = this
                      , T = new u(function(I, E) {
                        y.ready().then(function() {
                            var H = y._dbInfo;
                            H.db.transaction(function(ee) {
                                xn(ee, H, "SELECT key FROM " + H.storeName + " WHERE id = ? LIMIT 1", [v + 1], function(se, ie) {
                                    var ce = ie.rows.length ? ie.rows.item(0).key : null;
                                    I(ce)
                                }, function(se, ie) {
                                    E(ie)
                                })
                            })
                        }).catch(E)
                    }
                    );
                    return p(T, w),
                    T
                }
                function op(v) {
                    var w = this
                      , y = new u(function(T, I) {
                        w.ready().then(function() {
                            var E = w._dbInfo;
                            E.db.transaction(function(H) {
                                xn(H, E, "SELECT key FROM " + E.storeName, [], function(ee, se) {
                                    for (var ie = [], ce = 0; ce < se.rows.length; ce++)
                                        ie.push(se.rows.item(ce).key);
                                    T(ie)
                                }, function(ee, se) {
                                    I(se)
                                })
                            })
                        }).catch(I)
                    }
                    );
                    return p(y, v),
                    y
                }
                function sp(v) {
                    return new u(function(w, y) {
                        v.transaction(function(T) {
                            T.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(I, E) {
                                for (var H = [], ee = 0; ee < E.rows.length; ee++)
                                    H.push(E.rows.item(ee).name);
                                w({
                                    db: v,
                                    storeNames: H
                                })
                            }, function(I, E) {
                                y(E)
                            })
                        }, function(T) {
                            y(T)
                        })
                    }
                    )
                }
                function ip(v, w) {
                    w = g.apply(this, arguments);
                    var y = this.config();
                    v = typeof v != "function" && v || {},
                    v.name || (v.name = v.name || y.name,
                    v.storeName = v.storeName || y.storeName);
                    var T = this, I;
                    return v.name ? I = new u(function(E) {
                        var H;
                        v.name === y.name ? H = T._dbInfo.db : H = openDatabase(v.name, "", "", 0),
                        v.storeName ? E({
                            db: H,
                            storeNames: [v.storeName]
                        }) : E(sp(H))
                    }
                    ).then(function(E) {
                        return new u(function(H, ee) {
                            E.db.transaction(function(se) {
                                function ie(je) {
                                    return new u(function(He, tt) {
                                        se.executeSql("DROP TABLE IF EXISTS " + je, [], function() {
                                            He()
                                        }, function(Ze, Mt) {
                                            tt(Mt)
                                        })
                                    }
                                    )
                                }
                                for (var ce = [], _e = 0, Oe = E.storeNames.length; _e < Oe; _e++)
                                    ce.push(ie(E.storeNames[_e]));
                                u.all(ce).then(function() {
                                    H()
                                }).catch(function(je) {
                                    ee(je)
                                })
                            }, function(se) {
                                ee(se)
                            })
                        }
                        )
                    }) : I = u.reject("Invalid arguments"),
                    p(I, w),
                    I
                }
                var ap = {
                    _driver: "webSQLStorage",
                    _initStorage: Jd,
                    _support: F(),
                    iterate: Xd,
                    getItem: Qd,
                    setItem: Zd,
                    removeItem: ep,
                    clear: tp,
                    length: np,
                    key: rp,
                    keys: op,
                    dropInstance: ip
                };
                function lp() {
                    try {
                        return typeof localStorage < "u" && "setItem"in localStorage && !!localStorage.setItem
                    } catch {
                        return !1
                    }
                }
                function cl(v, w) {
                    var y = v.name + "/";
                    return v.storeName !== w.storeName && (y += v.storeName + "/"),
                    y
                }
                function cp() {
                    var v = "_localforage_support_test";
                    try {
                        return localStorage.setItem(v, !0),
                        localStorage.removeItem(v),
                        !1
                    } catch {
                        return !0
                    }
                }
                function up() {
                    return !cp() || localStorage.length > 0
                }
                function fp(v) {
                    var w = this
                      , y = {};
                    if (v)
                        for (var T in v)
                            y[T] = v[T];
                    return y.keyPrefix = cl(v, w._defaultConfig),
                    up() ? (w._dbInfo = y,
                    y.serializer = mr,
                    u.resolve()) : u.reject()
                }
                function dp(v) {
                    var w = this
                      , y = w.ready().then(function() {
                        for (var T = w._dbInfo.keyPrefix, I = localStorage.length - 1; I >= 0; I--) {
                            var E = localStorage.key(I);
                            E.indexOf(T) === 0 && localStorage.removeItem(E)
                        }
                    });
                    return p(y, v),
                    y
                }
                function pp(v, w) {
                    var y = this;
                    v = m(v);
                    var T = y.ready().then(function() {
                        var I = y._dbInfo
                          , E = localStorage.getItem(I.keyPrefix + v);
                        return E && (E = I.serializer.deserialize(E)),
                        E
                    });
                    return p(T, w),
                    T
                }
                function hp(v, w) {
                    var y = this
                      , T = y.ready().then(function() {
                        for (var I = y._dbInfo, E = I.keyPrefix, H = E.length, ee = localStorage.length, se = 1, ie = 0; ie < ee; ie++) {
                            var ce = localStorage.key(ie);
                            if (ce.indexOf(E) === 0) {
                                var _e = localStorage.getItem(ce);
                                if (_e && (_e = I.serializer.deserialize(_e)),
                                _e = v(_e, ce.substring(H), se++),
                                _e !== void 0)
                                    return _e
                            }
                        }
                    });
                    return p(T, w),
                    T
                }
                function mp(v, w) {
                    var y = this
                      , T = y.ready().then(function() {
                        var I = y._dbInfo, E;
                        try {
                            E = localStorage.key(v)
                        } catch {
                            E = null
                        }
                        return E && (E = E.substring(I.keyPrefix.length)),
                        E
                    });
                    return p(T, w),
                    T
                }
                function vp(v) {
                    var w = this
                      , y = w.ready().then(function() {
                        for (var T = w._dbInfo, I = localStorage.length, E = [], H = 0; H < I; H++) {
                            var ee = localStorage.key(H);
                            ee.indexOf(T.keyPrefix) === 0 && E.push(ee.substring(T.keyPrefix.length))
                        }
                        return E
                    });
                    return p(y, v),
                    y
                }
                function gp(v) {
                    var w = this
                      , y = w.keys().then(function(T) {
                        return T.length
                    });
                    return p(y, v),
                    y
                }
                function yp(v, w) {
                    var y = this;
                    v = m(v);
                    var T = y.ready().then(function() {
                        var I = y._dbInfo;
                        localStorage.removeItem(I.keyPrefix + v)
                    });
                    return p(T, w),
                    T
                }
                function _p(v, w, y) {
                    var T = this;
                    v = m(v);
                    var I = T.ready().then(function() {
                        w === void 0 && (w = null);
                        var E = w;
                        return new u(function(H, ee) {
                            var se = T._dbInfo;
                            se.serializer.serialize(w, function(ie, ce) {
                                if (ce)
                                    ee(ce);
                                else
                                    try {
                                        localStorage.setItem(se.keyPrefix + v, ie),
                                        H(E)
                                    } catch (_e) {
                                        (_e.name === "QuotaExceededError" || _e.name === "NS_ERROR_DOM_QUOTA_REACHED") && ee(_e),
                                        ee(_e)
                                    }
                            })
                        }
                        )
                    });
                    return p(I, y),
                    I
                }
                function bp(v, w) {
                    if (w = g.apply(this, arguments),
                    v = typeof v != "function" && v || {},
                    !v.name) {
                        var y = this.config();
                        v.name = v.name || y.name,
                        v.storeName = v.storeName || y.storeName
                    }
                    var T = this, I;
                    return v.name ? I = new u(function(E) {
                        v.storeName ? E(cl(v, T._defaultConfig)) : E(v.name + "/")
                    }
                    ).then(function(E) {
                        for (var H = localStorage.length - 1; H >= 0; H--) {
                            var ee = localStorage.key(H);
                            ee.indexOf(E) === 0 && localStorage.removeItem(ee)
                        }
                    }) : I = u.reject("Invalid arguments"),
                    p(I, w),
                    I
                }
                var wp = {
                    _driver: "localStorageWrapper",
                    _initStorage: fp,
                    _support: lp(),
                    iterate: hp,
                    getItem: pp,
                    setItem: _p,
                    removeItem: yp,
                    clear: dp,
                    length: gp,
                    key: mp,
                    keys: vp,
                    dropInstance: bp
                }
                  , xp = function(w, y) {
                    return w === y || typeof w == "number" && typeof y == "number" && isNaN(w) && isNaN(y)
                }
                  , Sp = function(w, y) {
                    for (var T = w.length, I = 0; I < T; ) {
                        if (xp(w[I], y))
                            return !0;
                        I++
                    }
                    return !1
                }
                  , ul = Array.isArray || function(v) {
                    return Object.prototype.toString.call(v) === "[object Array]"
                }
                  , Ur = {}
                  , fl = {}
                  , vr = {
                    INDEXEDDB: C,
                    WEBSQL: ap,
                    LOCALSTORAGE: wp
                }
                  , Ep = [vr.INDEXEDDB._driver, vr.WEBSQL._driver, vr.LOCALSTORAGE._driver]
                  , Co = ["dropInstance"]
                  , ei = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Co)
                  , Cp = {
                    description: "",
                    driver: Ep.slice(),
                    name: "localforage",
                    size: 4980736,
                    storeName: "keyvaluepairs",
                    version: 1
                };
                function Tp(v, w) {
                    v[w] = function() {
                        var y = arguments;
                        return v.ready().then(function() {
                            return v[w].apply(v, y)
                        })
                    }
                }
                function ti() {
                    for (var v = 1; v < arguments.length; v++) {
                        var w = arguments[v];
                        if (w)
                            for (var y in w)
                                w.hasOwnProperty(y) && (ul(w[y]) ? arguments[0][y] = w[y].slice() : arguments[0][y] = w[y])
                    }
                    return arguments[0]
                }
                var $p = function() {
                    function v(w) {
                        i(this, v);
                        for (var y in vr)
                            if (vr.hasOwnProperty(y)) {
                                var T = vr[y]
                                  , I = T._driver;
                                this[y] = I,
                                Ur[I] || this.defineDriver(T)
                            }
                        this._defaultConfig = ti({}, Cp),
                        this._config = ti({}, this._defaultConfig, w),
                        this._driverSet = null,
                        this._initDriver = null,
                        this._ready = !1,
                        this._dbInfo = null,
                        this._wrapLibraryMethodsWithReady(),
                        this.setDriver(this._config.driver).catch(function() {})
                    }
                    return v.prototype.config = function(y) {
                        if ((typeof y > "u" ? "undefined" : s(y)) === "object") {
                            if (this._ready)
                                return new Error("Can't call config() after localforage has been used.");
                            for (var T in y) {
                                if (T === "storeName" && (y[T] = y[T].replace(/\W/g, "_")),
                                T === "version" && typeof y[T] != "number")
                                    return new Error("Database version must be a number.");
                                this._config[T] = y[T]
                            }
                            return "driver"in y && y.driver ? this.setDriver(this._config.driver) : !0
                        } else
                            return typeof y == "string" ? this._config[y] : this._config
                    }
                    ,
                    v.prototype.defineDriver = function(y, T, I) {
                        var E = new u(function(H, ee) {
                            try {
                                var se = y._driver
                                  , ie = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                if (!y._driver) {
                                    ee(ie);
                                    return
                                }
                                for (var ce = ei.concat("_initStorage"), _e = 0, Oe = ce.length; _e < Oe; _e++) {
                                    var je = ce[_e]
                                      , He = !Sp(Co, je);
                                    if ((He || y[je]) && typeof y[je] != "function") {
                                        ee(ie);
                                        return
                                    }
                                }
                                var tt = function() {
                                    for (var zr = function(Op) {
                                        return function() {
                                            var kp = new Error("Method " + Op + " is not implemented by the current driver")
                                              , dl = u.reject(kp);
                                            return p(dl, arguments[arguments.length - 1]),
                                            dl
                                        }
                                    }, ni = 0, Ap = Co.length; ni < Ap; ni++) {
                                        var ri = Co[ni];
                                        y[ri] || (y[ri] = zr(ri))
                                    }
                                };
                                tt();
                                var Ze = function(zr) {
                                    Ur[se] && console.info("Redefining LocalForage driver: " + se),
                                    Ur[se] = y,
                                    fl[se] = zr,
                                    H()
                                };
                                "_support"in y ? y._support && typeof y._support == "function" ? y._support().then(Ze, ee) : Ze(!!y._support) : Ze(!0)
                            } catch (Mt) {
                                ee(Mt)
                            }
                        }
                        );
                        return h(E, T, I),
                        E
                    }
                    ,
                    v.prototype.driver = function() {
                        return this._driver || null
                    }
                    ,
                    v.prototype.getDriver = function(y, T, I) {
                        var E = Ur[y] ? u.resolve(Ur[y]) : u.reject(new Error("Driver not found."));
                        return h(E, T, I),
                        E
                    }
                    ,
                    v.prototype.getSerializer = function(y) {
                        var T = u.resolve(mr);
                        return h(T, y),
                        T
                    }
                    ,
                    v.prototype.ready = function(y) {
                        var T = this
                          , I = T._driverSet.then(function() {
                            return T._ready === null && (T._ready = T._initDriver()),
                            T._ready
                        });
                        return h(I, y, y),
                        I
                    }
                    ,
                    v.prototype.setDriver = function(y, T, I) {
                        var E = this;
                        ul(y) || (y = [y]);
                        var H = this._getSupportedDrivers(y);
                        function ee() {
                            E._config.driver = E.driver()
                        }
                        function se(_e) {
                            return E._extend(_e),
                            ee(),
                            E._ready = E._initStorage(E._config),
                            E._ready
                        }
                        function ie(_e) {
                            return function() {
                                var Oe = 0;
                                function je() {
                                    for (; Oe < _e.length; ) {
                                        var He = _e[Oe];
                                        return Oe++,
                                        E._dbInfo = null,
                                        E._ready = null,
                                        E.getDriver(He).then(se).catch(je)
                                    }
                                    ee();
                                    var tt = new Error("No available storage method found.");
                                    return E._driverSet = u.reject(tt),
                                    E._driverSet
                                }
                                return je()
                            }
                        }
                        var ce = this._driverSet !== null ? this._driverSet.catch(function() {
                            return u.resolve()
                        }) : u.resolve();
                        return this._driverSet = ce.then(function() {
                            var _e = H[0];
                            return E._dbInfo = null,
                            E._ready = null,
                            E.getDriver(_e).then(function(Oe) {
                                E._driver = Oe._driver,
                                ee(),
                                E._wrapLibraryMethodsWithReady(),
                                E._initDriver = ie(H)
                            })
                        }).catch(function() {
                            ee();
                            var _e = new Error("No available storage method found.");
                            return E._driverSet = u.reject(_e),
                            E._driverSet
                        }),
                        h(this._driverSet, T, I),
                        this._driverSet
                    }
                    ,
                    v.prototype.supports = function(y) {
                        return !!fl[y]
                    }
                    ,
                    v.prototype._extend = function(y) {
                        ti(this, y)
                    }
                    ,
                    v.prototype._getSupportedDrivers = function(y) {
                        for (var T = [], I = 0, E = y.length; I < E; I++) {
                            var H = y[I];
                            this.supports(H) && T.push(H)
                        }
                        return T
                    }
                    ,
                    v.prototype._wrapLibraryMethodsWithReady = function() {
                        for (var y = 0, T = ei.length; y < T; y++)
                            Tp(this, ei[y])
                    }
                    ,
                    v.prototype.createInstance = function(y) {
                        return new v(y)
                    }
                    ,
                    v
                }()
                  , Ip = new $p;
                r.exports = Ip
            }
            , {
                3: 3
            }]
        }, {}, [4])(4)
    })
}
)(Jf);
const fc = Jf.exports;
class Hg {
    constructor() {
        tn(this, "id", chrome.runtime.id)
    }
    async get(t) {
        const n = await fc.getItem(this.id + t);
        return JSON.parse(n)
    }
    async set(t, n) {
        await fc.setItem(this.id + t, JSON.stringify(n))
    }
}
const me = new Hg;
let vi;
const Xt = ks("config", {
    state: ()=>({
        name: config.name,
        description: config.description,
        promotionalImageUrl: config.promotionalImageUrl,
        wallpaperList: [],
        widgetList: [],
        currentWallpaperIndex: 0,
        themeId: chrome.runtime.id,
        searchRight: void 0,
        searchEngine: "",
        searchEngineList: []
    }),
    getters: {
        currentWallpaper(e) {
            return e.wallpaperList[e.currentWallpaperIndex]
        },
        likedWallpaperList(e) {
            return e.wallpaperList.filter(t=>t.like)
        }
    },
    actions: {
        async init() {
            me.get("currentWallpaperIndex").then(o=>{
                this.currentWallpaperIndex = o != null ? o : 0,
                setTimeout(()=>{
                    var s;
                    (s = document.querySelector("#wallpaper-puppet")) == null || s.remove()
                }
                , 600)
            }
            ),
            Promise.all([me.get("group.wallpaperChangeable"), me.get("config.wallpaperChangeBy"), me.get("config.wallpaperUpdateAt")]).then(([o,s,i])=>{}
            );
            const e = await me.get("config.widgetList") || config.widgetList
              , t = bt() === "zh-CN" ? "zh-CN" : "en";
            this.widgetList = e.filter(o=>o.title[t]);
            const n = await me.get("wallpaperList");
            this.wallpaperList = n != null ? n : config.wallpaperList.map(o=>({
                ...o,
                like: !0,
                url: "/" + o.url
            })),
            !n && me.set("wallpaperList", this.wallpaperList),
            this.searchEngine = await me.get("config.searchEngine") || settings.config.searchEngine;
            const r = await me.get("config.searchEngineList");
            this.searchEngineList = r || SEARCH_ENGINE_LIST,
            this.syncSearchEngineList(),
            this.syncWidgetList()
        },
        likeWallpaper(e, t) {
            this.wallpaperList.find(n=>n.id === e).like = t,
            me.set("wallpaperList", this.wallpaperList),
            window.BC.postMessage("sync-wallpaper-list", this.wallpaperList)
        },
        async selectWallpaper(e, t=Date.now()) {
            this.currentWallpaperIndex = e,
            await me.set("currentWallpaperIndex", e),
            await me.set("config.wallpaperUpdateAt", t)
        },
        async showNextWallpaper(e) {
            e || (e = settings.config.wallpaperChangeBy),
            this.currentWallpaperIndex = e === "order" ? (this.currentWallpaperIndex + 1) % this.wallpaperList.filter(t=>t.like).length : Math.floor(Math.random() * this.wallpaperList.filter(t=>t.like).length),
            me.set("currentWallpaperIndex", this.currentWallpaperIndex),
            me.set("config.wallpaperUpdateAt", Date.now())
        },
        clearWallpaperTimer() {
            clearTimeout(vi)
        },
        async startWallpaperTimer(e=Date.now()) {
            clearTimeout(vi);
            const t = settings.config.wallpaperChangeFrequency === "1h" ? 3 * 1e3 : 24 * 60 * 60 * 1e3;
            vi = setInterval(async()=>this.showNextWallpaper(settings.config.wallpaperChangeBy), t - (Date.now() - e))
        },
        async syncSearchEngineList() {
            const t = await me.get("config.searchEngineList.updateAt") || 0
              , r = 864e5 - (Date.now() - t);
            console.log("remainingTime", r),
            setTimeout(()=>{
                this.fetchSearchEngine(),
                setInterval(this.fetchSearchEngine, 864e5)
            }
            , r)
        },
        async syncWidgetList() {
            const t = await me.get("config.widgetList.updateAt") || 0
              , r = 864e5 - (Date.now() - t);
            setTimeout(()=>{
                this.fetchWidgetList(),
                setInterval(this.fetchWidgetList, 1e3 * 60 * 60 * 24)
            }
            , r)
        },
        async fetchWidgetList(e) {
            let t;
            if (e)
                t = e;
            else {
                const [r,o] = await uc.getWidgetList();
                if (r || !o || o.length === 0)
                    return;
                t = o
            }
            const n = bt() === "zh-CN" ? "zh-CN" : "en";
            this.widgetList = t.filter(r=>r.title[n]),
            me.set("config.widgetList", t),
            me.set("config.widgetList.updateAt", Date.now())
        },
        async fetchSearchEngine(e) {
            let t;
            if (e)
                t = e;
            else {
                const [r,o=[]] = await uc.getSearchEngine();
                if (r)
                    return;
                t = o
            }
            console.log(t, "data"),
            this.searchEngineList = t,
            await me.set("config.searchEngineList", t),
            await me.set("config.searchEngineList.updateAt", Date.now());
            const n = this.searchEngine.split("?")[0];
            this.searchEngineList.find(r=>r.url.includes(n)) || (this.searchEngine = this.searchEngineList[0].url,
            me.set("config.searchEngine", this.searchEngine))
        }
    }
})
  , Vg = {
    id: "wallpaper",
    class: "w-screen h-screen fixed -z-50"
}
  , Wg = ["src"]
  , Kg = Ce({
    __name: "wallpaper-shower",
    setup(e) {
        const t = Xt()
          , n = q(null)
          , r = q(!0);
        return Je(async()=>{
            n.value.onload = ()=>{
                r.value = !1
            }
        }
        ),
        (o,s)=>{
            var i;
            return O(),
            K("div", Vg, [gt(N("img", {
                ref_key: "wallpaperRef",
                ref: n,
                class: "w-full h-full object-cover",
                src: (i = d(t).currentWallpaper) == null ? void 0 : i.url,
                onDragstart: s[0] || (s[0] = lt(()=>{}
                , ["prevent"]))
            }, null, 40, Wg), [[cr, !d(r)]])])
        }
    }
})
  , Yg = {
    class: "fixed bottom-8 left-8 font-thin select-none flex gap-4 items-end"
}
  , qg = Ce({
    __name: "wallpaper-operator",
    setup(e) {
        return (t,n)=>(O(),
        K("div", Yg))
    }
});
var dc;
const At = typeof window < "u";
At && ((dc = window == null ? void 0 : window.navigator) == null ? void 0 : dc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Qf(e) {
    return typeof e == "function" ? e() : d(e)
}
function Gg(e) {
    return e
}
function Xf(e) {
    return gs() ? (ys(e),
    !0) : !1
}
function Jg(e, t=!0) {
    Ot() ? Je(e) : t ? e() : ft(e)
}
function pc(e, t, n={}) {
    const {immediate: r=!0} = n
      , o = q(!1);
    let s = null;
    function i() {
        s && (clearTimeout(s),
        s = null)
    }
    function a() {
        o.value = !1,
        i()
    }
    function l(...c) {
        i(),
        o.value = !0,
        s = setTimeout(()=>{
            o.value = !1,
            s = null,
            e(...c)
        }
        , Qf(t))
    }
    return r && (o.value = !0,
    At && l()),
    Xf(a),
    {
        isPending: bs(o),
        start: l,
        stop: a
    }
}
function Qg(e) {
    var t;
    const n = Qf(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Xg = At ? window : void 0;
At && window.document;
At && window.navigator;
At && window.location;
function Zg(e, t=!1) {
    const n = q()
      , r = ()=>n.value = Boolean(e());
    return r(),
    Jg(r, t),
    n
}
const Gi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Ji = "__vueuse_ssr_handlers__";
Gi[Ji] = Gi[Ji] || {};
Gi[Ji];
var hc = Object.getOwnPropertySymbols
  , e0 = Object.prototype.hasOwnProperty
  , t0 = Object.prototype.propertyIsEnumerable
  , n0 = (e,t)=>{
    var n = {};
    for (var r in e)
        e0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && hc)
        for (var r of hc(e))
            t.indexOf(r) < 0 && t0.call(e, r) && (n[r] = e[r]);
    return n
}
;
function Zf(e, t, n={}) {
    const r = n
      , {window: o=Xg} = r
      , s = n0(r, ["window"]);
    let i;
    const a = Zg(()=>o && "ResizeObserver"in o)
      , l = ()=>{
        i && (i.disconnect(),
        i = void 0)
    }
      , c = $e(()=>Qg(e), u=>{
        l(),
        a.value && o && u && (i = new ResizeObserver(t),
        i.observe(u, s))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , f = ()=>{
        l(),
        c()
    }
    ;
    return Xf(f),
    {
        isSupported: a,
        stop: f
    }
}
var mc;
(function(e) {
    e.UP = "UP",
    e.RIGHT = "RIGHT",
    e.DOWN = "DOWN",
    e.LEFT = "LEFT",
    e.NONE = "NONE"
}
)(mc || (mc = {}));
var r0 = Object.defineProperty
  , vc = Object.getOwnPropertySymbols
  , o0 = Object.prototype.hasOwnProperty
  , s0 = Object.prototype.propertyIsEnumerable
  , gc = (e,t,n)=>t in e ? r0(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , i0 = (e,t)=>{
    for (var n in t || (t = {}))
        o0.call(t, n) && gc(e, n, t[n]);
    if (vc)
        for (var n of vc(t))
            s0.call(t, n) && gc(e, n, t[n]);
    return e
}
;
const a0 = {
    easeInSine: [.12, 0, .39, 0],
    easeOutSine: [.61, 1, .88, 1],
    easeInOutSine: [.37, 0, .63, 1],
    easeInQuad: [.11, 0, .5, 0],
    easeOutQuad: [.5, 1, .89, 1],
    easeInOutQuad: [.45, 0, .55, 1],
    easeInCubic: [.32, 0, .67, 0],
    easeOutCubic: [.33, 1, .68, 1],
    easeInOutCubic: [.65, 0, .35, 1],
    easeInQuart: [.5, 0, .75, 0],
    easeOutQuart: [.25, 1, .5, 1],
    easeInOutQuart: [.76, 0, .24, 1],
    easeInQuint: [.64, 0, .78, 0],
    easeOutQuint: [.22, 1, .36, 1],
    easeInOutQuint: [.83, 0, .17, 1],
    easeInExpo: [.7, 0, .84, 0],
    easeOutExpo: [.16, 1, .3, 1],
    easeInOutExpo: [.87, 0, .13, 1],
    easeInCirc: [.55, 0, 1, .45],
    easeOutCirc: [0, .55, .45, 1],
    easeInOutCirc: [.85, 0, .15, 1],
    easeInBack: [.36, 0, .66, -.56],
    easeOutBack: [.34, 1.56, .64, 1],
    easeInOutBack: [.68, -.6, .32, 1.6]
};
i0({
    linear: Gg
}, a0);
const l0 = ()=>At && /firefox/i.test(window.navigator.userAgent);
var c0 = typeof global == "object" && global && global.Object === Object && global;
const ed = c0;
var u0 = typeof self == "object" && self && self.Object === Object && self
  , f0 = ed || u0 || Function("return this")();
const Zt = f0;
var d0 = Zt.Symbol;
const an = d0;
var td = Object.prototype
  , p0 = td.hasOwnProperty
  , h0 = td.toString
  , Wr = an ? an.toStringTag : void 0;
function m0(e) {
    var t = p0.call(e, Wr)
      , n = e[Wr];
    try {
        e[Wr] = void 0;
        var r = !0
    } catch {}
    var o = h0.call(e);
    return r && (t ? e[Wr] = n : delete e[Wr]),
    o
}
var v0 = Object.prototype
  , g0 = v0.toString;
function y0(e) {
    return g0.call(e)
}
var _0 = "[object Null]"
  , b0 = "[object Undefined]"
  , yc = an ? an.toStringTag : void 0;
function Lr(e) {
    return e == null ? e === void 0 ? b0 : _0 : yc && yc in Object(e) ? m0(e) : y0(e)
}
function Ar(e) {
    return e != null && typeof e == "object"
}
var w0 = "[object Symbol]";
function Us(e) {
    return typeof e == "symbol" || Ar(e) && Lr(e) == w0
}
function x0(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
        o[n] = t(e[n], n, e);
    return o
}
var S0 = Array.isArray;
const mn = S0;
var E0 = 1 / 0
  , _c = an ? an.prototype : void 0
  , bc = _c ? _c.toString : void 0;
function nd(e) {
    if (typeof e == "string")
        return e;
    if (mn(e))
        return x0(e, nd) + "";
    if (Us(e))
        return bc ? bc.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -E0 ? "-0" : t
}
var C0 = /\s/;
function T0(e) {
    for (var t = e.length; t-- && C0.test(e.charAt(t)); )
        ;
    return t
}
var $0 = /^\s+/;
function I0(e) {
    return e && e.slice(0, T0(e) + 1).replace($0, "")
}
function Un(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var wc = 0 / 0
  , A0 = /^[-+]0x[0-9a-f]+$/i
  , O0 = /^0b[01]+$/i
  , k0 = /^0o[0-7]+$/i
  , R0 = parseInt;
function is(e) {
    if (typeof e == "number")
        return e;
    if (Us(e))
        return wc;
    if (Un(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Un(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = I0(e);
    var n = O0.test(e);
    return n || k0.test(e) ? R0(e.slice(2), n ? 2 : 8) : A0.test(e) ? wc : +e
}
var xc = 1 / 0
  , N0 = 17976931348623157e292;
function P0(e) {
    if (!e)
        return e === 0 ? e : 0;
    if (e = is(e),
    e === xc || e === -xc) {
        var t = e < 0 ? -1 : 1;
        return t * N0
    }
    return e === e ? e : 0
}
function L0(e) {
    var t = P0(e)
      , n = t % 1;
    return t === t ? n ? t - n : t : 0
}
function M0(e) {
    return e
}
var D0 = "[object AsyncFunction]"
  , B0 = "[object Function]"
  , F0 = "[object GeneratorFunction]"
  , U0 = "[object Proxy]";
function rd(e) {
    if (!Un(e))
        return !1;
    var t = Lr(e);
    return t == B0 || t == F0 || t == D0 || t == U0
}
var z0 = Zt["__core-js_shared__"];
const gi = z0;
var Sc = function() {
    var e = /[^.]+$/.exec(gi && gi.keys && gi.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
}();
function j0(e) {
    return !!Sc && Sc in e
}
var H0 = Function.prototype
  , V0 = H0.toString;
function dr(e) {
    if (e != null) {
        try {
            return V0.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var W0 = /[\\^$.*+?()[\]{}|]/g
  , K0 = /^\[object .+?Constructor\]$/
  , Y0 = Function.prototype
  , q0 = Object.prototype
  , G0 = Y0.toString
  , J0 = q0.hasOwnProperty
  , Q0 = RegExp("^" + G0.call(J0).replace(W0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function X0(e) {
    if (!Un(e) || j0(e))
        return !1;
    var t = rd(e) ? Q0 : K0;
    return t.test(dr(e))
}
function Z0(e, t) {
    return e == null ? void 0 : e[t]
}
function pr(e, t) {
    var n = Z0(e, t);
    return X0(n) ? n : void 0
}
var ey = pr(Zt, "WeakMap");
const Qi = ey;
function ty(e, t, n) {
    switch (n.length) {
    case 0:
        return e.call(t);
    case 1:
        return e.call(t, n[0]);
    case 2:
        return e.call(t, n[0], n[1]);
    case 3:
        return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
}
var ny = 800
  , ry = 16
  , oy = Date.now;
function sy(e) {
    var t = 0
      , n = 0;
    return function() {
        var r = oy()
          , o = ry - (r - n);
        if (n = r,
        o > 0) {
            if (++t >= ny)
                return arguments[0]
        } else
            t = 0;
        return e.apply(void 0, arguments)
    }
}
function iy(e) {
    return function() {
        return e
    }
}
var ay = function() {
    try {
        var e = pr(Object, "defineProperty");
        return e({}, "", {}),
        e
    } catch {}
}();
const as = ay;
var ly = as ? function(e, t) {
    return as(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: iy(t),
        writable: !0
    })
}
: M0;
const cy = ly;
var uy = sy(cy);
const fy = uy;
var dy = 9007199254740991
  , py = /^(?:0|[1-9]\d*)$/;
function Ka(e, t) {
    var n = typeof e;
    return t = t == null ? dy : t,
    !!t && (n == "number" || n != "symbol" && py.test(e)) && e > -1 && e % 1 == 0 && e < t
}
function hy(e, t, n) {
    t == "__proto__" && as ? as(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
function Ya(e, t) {
    return e === t || e !== e && t !== t
}
var my = Object.prototype
  , vy = my.hasOwnProperty;
function gy(e, t, n) {
    var r = e[t];
    (!(vy.call(e, t) && Ya(r, n)) || n === void 0 && !(t in e)) && hy(e, t, n)
}
var Ec = Math.max;
function yy(e, t, n) {
    return t = Ec(t === void 0 ? e.length - 1 : t, 0),
    function() {
        for (var r = arguments, o = -1, s = Ec(r.length - t, 0), i = Array(s); ++o < s; )
            i[o] = r[t + o];
        o = -1;
        for (var a = Array(t + 1); ++o < t; )
            a[o] = r[o];
        return a[t] = n(i),
        ty(e, this, a)
    }
}
var _y = 9007199254740991;
function qa(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _y
}
function by(e) {
    return e != null && qa(e.length) && !rd(e)
}
var wy = Object.prototype;
function xy(e) {
    var t = e && e.constructor
      , n = typeof t == "function" && t.prototype || wy;
    return e === n
}
function Sy(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
        r[n] = t(n);
    return r
}
var Ey = "[object Arguments]";
function Cc(e) {
    return Ar(e) && Lr(e) == Ey
}
var od = Object.prototype
  , Cy = od.hasOwnProperty
  , Ty = od.propertyIsEnumerable
  , $y = Cc(function() {
    return arguments
}()) ? Cc : function(e) {
    return Ar(e) && Cy.call(e, "callee") && !Ty.call(e, "callee")
}
;
const Ga = $y;
function Iy() {
    return !1
}
var sd = typeof exports == "object" && exports && !exports.nodeType && exports
  , Tc = sd && typeof module == "object" && module && !module.nodeType && module
  , Ay = Tc && Tc.exports === sd
  , $c = Ay ? Zt.Buffer : void 0
  , Oy = $c ? $c.isBuffer : void 0
  , ky = Oy || Iy;
const Xi = ky;
var Ry = "[object Arguments]"
  , Ny = "[object Array]"
  , Py = "[object Boolean]"
  , Ly = "[object Date]"
  , My = "[object Error]"
  , Dy = "[object Function]"
  , By = "[object Map]"
  , Fy = "[object Number]"
  , Uy = "[object Object]"
  , zy = "[object RegExp]"
  , jy = "[object Set]"
  , Hy = "[object String]"
  , Vy = "[object WeakMap]"
  , Wy = "[object ArrayBuffer]"
  , Ky = "[object DataView]"
  , Yy = "[object Float32Array]"
  , qy = "[object Float64Array]"
  , Gy = "[object Int8Array]"
  , Jy = "[object Int16Array]"
  , Qy = "[object Int32Array]"
  , Xy = "[object Uint8Array]"
  , Zy = "[object Uint8ClampedArray]"
  , e_ = "[object Uint16Array]"
  , t_ = "[object Uint32Array]"
  , Ke = {};
Ke[Yy] = Ke[qy] = Ke[Gy] = Ke[Jy] = Ke[Qy] = Ke[Xy] = Ke[Zy] = Ke[e_] = Ke[t_] = !0;
Ke[Ry] = Ke[Ny] = Ke[Wy] = Ke[Py] = Ke[Ky] = Ke[Ly] = Ke[My] = Ke[Dy] = Ke[By] = Ke[Fy] = Ke[Uy] = Ke[zy] = Ke[jy] = Ke[Hy] = Ke[Vy] = !1;
function n_(e) {
    return Ar(e) && qa(e.length) && !!Ke[Lr(e)]
}
function r_(e) {
    return function(t) {
        return e(t)
    }
}
var id = typeof exports == "object" && exports && !exports.nodeType && exports
  , no = id && typeof module == "object" && module && !module.nodeType && module
  , o_ = no && no.exports === id
  , yi = o_ && ed.process
  , s_ = function() {
    try {
        var e = no && no.require && no.require("util").types;
        return e || yi && yi.binding && yi.binding("util")
    } catch {}
}();
const Ic = s_;
var Ac = Ic && Ic.isTypedArray
  , i_ = Ac ? r_(Ac) : n_;
const ad = i_;
var a_ = Object.prototype
  , l_ = a_.hasOwnProperty;
function c_(e, t) {
    var n = mn(e)
      , r = !n && Ga(e)
      , o = !n && !r && Xi(e)
      , s = !n && !r && !o && ad(e)
      , i = n || r || o || s
      , a = i ? Sy(e.length, String) : []
      , l = a.length;
    for (var c in e)
        (t || l_.call(e, c)) && !(i && (c == "length" || o && (c == "offset" || c == "parent") || s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Ka(c, l))) && a.push(c);
    return a
}
function u_(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var f_ = u_(Object.keys, Object);
const d_ = f_;
var p_ = Object.prototype
  , h_ = p_.hasOwnProperty;
function m_(e) {
    if (!xy(e))
        return d_(e);
    var t = [];
    for (var n in Object(e))
        h_.call(e, n) && n != "constructor" && t.push(n);
    return t
}
function v_(e) {
    return by(e) ? c_(e) : m_(e)
}
var g_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
  , y_ = /^\w*$/;
function __(e, t) {
    if (mn(e))
        return !1;
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || Us(e) ? !0 : y_.test(e) || !g_.test(e) || t != null && e in Object(t)
}
var b_ = pr(Object, "create");
const ho = b_;
function w_() {
    this.__data__ = ho ? ho(null) : {},
    this.size = 0
}
function x_(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0,
    t
}
var S_ = "__lodash_hash_undefined__"
  , E_ = Object.prototype
  , C_ = E_.hasOwnProperty;
function T_(e) {
    var t = this.__data__;
    if (ho) {
        var n = t[e];
        return n === S_ ? void 0 : n
    }
    return C_.call(t, e) ? t[e] : void 0
}
var $_ = Object.prototype
  , I_ = $_.hasOwnProperty;
function A_(e) {
    var t = this.__data__;
    return ho ? t[e] !== void 0 : I_.call(t, e)
}
var O_ = "__lodash_hash_undefined__";
function k_(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1,
    n[e] = ho && t === void 0 ? O_ : t,
    this
}
function ur(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
ur.prototype.clear = w_;
ur.prototype.delete = x_;
ur.prototype.get = T_;
ur.prototype.has = A_;
ur.prototype.set = k_;
function R_() {
    this.__data__ = [],
    this.size = 0
}
function zs(e, t) {
    for (var n = e.length; n--; )
        if (Ya(e[n][0], t))
            return n;
    return -1
}
var N_ = Array.prototype
  , P_ = N_.splice;
function L_(e) {
    var t = this.__data__
      , n = zs(t, e);
    if (n < 0)
        return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : P_.call(t, n, 1),
    --this.size,
    !0
}
function M_(e) {
    var t = this.__data__
      , n = zs(t, e);
    return n < 0 ? void 0 : t[n][1]
}
function D_(e) {
    return zs(this.__data__, e) > -1
}
function B_(e, t) {
    var n = this.__data__
      , r = zs(n, e);
    return r < 0 ? (++this.size,
    n.push([e, t])) : n[r][1] = t,
    this
}
function gn(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
gn.prototype.clear = R_;
gn.prototype.delete = L_;
gn.prototype.get = M_;
gn.prototype.has = D_;
gn.prototype.set = B_;
var F_ = pr(Zt, "Map");
const mo = F_;
function U_() {
    this.size = 0,
    this.__data__ = {
        hash: new ur,
        map: new (mo || gn),
        string: new ur
    }
}
function z_(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
function js(e, t) {
    var n = e.__data__;
    return z_(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}
function j_(e) {
    var t = js(this, e).delete(e);
    return this.size -= t ? 1 : 0,
    t
}
function H_(e) {
    return js(this, e).get(e)
}
function V_(e) {
    return js(this, e).has(e)
}
function W_(e, t) {
    var n = js(this, e)
      , r = n.size;
    return n.set(e, t),
    this.size += n.size == r ? 0 : 1,
    this
}
function yn(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
yn.prototype.clear = U_;
yn.prototype.delete = j_;
yn.prototype.get = H_;
yn.prototype.has = V_;
yn.prototype.set = W_;
var K_ = "Expected a function";
function Ja(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
        throw new TypeError(K_);
    var n = function() {
        var r = arguments
          , o = t ? t.apply(this, r) : r[0]
          , s = n.cache;
        if (s.has(o))
            return s.get(o);
        var i = e.apply(this, r);
        return n.cache = s.set(o, i) || s,
        i
    };
    return n.cache = new (Ja.Cache || yn),
    n
}
Ja.Cache = yn;
var Y_ = 500;
function q_(e) {
    var t = Ja(e, function(r) {
        return n.size === Y_ && n.clear(),
        r
    })
      , n = t.cache;
    return t
}
var G_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
  , J_ = /\\(\\)?/g
  , Q_ = q_(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""),
    e.replace(G_, function(n, r, o, s) {
        t.push(o ? s.replace(J_, "$1") : r || n)
    }),
    t
});
const X_ = Q_;
function Zi(e) {
    return e == null ? "" : nd(e)
}
function Hs(e, t) {
    return mn(e) ? e : __(e, t) ? [e] : X_(Zi(e))
}
var Z_ = 1 / 0;
function Qa(e) {
    if (typeof e == "string" || Us(e))
        return e;
    var t = e + "";
    return t == "0" && 1 / e == -Z_ ? "-0" : t
}
function ld(e, t) {
    t = Hs(t, e);
    for (var n = 0, r = t.length; e != null && n < r; )
        e = e[Qa(t[n++])];
    return n && n == r ? e : void 0
}
function eb(e, t, n) {
    var r = e == null ? void 0 : ld(e, t);
    return r === void 0 ? n : r
}
function cd(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; )
        e[o + n] = t[n];
    return e
}
var Oc = an ? an.isConcatSpreadable : void 0;
function tb(e) {
    return mn(e) || Ga(e) || !!(Oc && e && e[Oc])
}
function ud(e, t, n, r, o) {
    var s = -1
      , i = e.length;
    for (n || (n = tb),
    o || (o = []); ++s < i; ) {
        var a = e[s];
        t > 0 && n(a) ? t > 1 ? ud(a, t - 1, n, r, o) : cd(o, a) : r || (o[o.length] = a)
    }
    return o
}
function nb(e) {
    var t = e == null ? 0 : e.length;
    return t ? ud(e, 1) : []
}
function rb(e) {
    return fy(yy(e, void 0, nb), e + "")
}
var ob = Zt.isFinite
  , sb = Math.min;
function ib(e) {
    var t = Math[e];
    return function(n, r) {
        if (n = is(n),
        r = r == null ? 0 : sb(L0(r), 292),
        r && ob(n)) {
            var o = (Zi(n) + "e").split("e")
              , s = t(o[0] + "e" + (+o[1] + r));
            return o = (Zi(s) + "e").split("e"),
            +(o[0] + "e" + (+o[1] - r))
        }
        return t(n)
    }
}
function ab() {
    this.__data__ = new gn,
    this.size = 0
}
function lb(e) {
    var t = this.__data__
      , n = t.delete(e);
    return this.size = t.size,
    n
}
function cb(e) {
    return this.__data__.get(e)
}
function ub(e) {
    return this.__data__.has(e)
}
var fb = 200;
function db(e, t) {
    var n = this.__data__;
    if (n instanceof gn) {
        var r = n.__data__;
        if (!mo || r.length < fb - 1)
            return r.push([e, t]),
            this.size = ++n.size,
            this;
        n = this.__data__ = new yn(r)
    }
    return n.set(e, t),
    this.size = n.size,
    this
}
function Ln(e) {
    var t = this.__data__ = new gn(e);
    this.size = t.size
}
Ln.prototype.clear = ab;
Ln.prototype.delete = lb;
Ln.prototype.get = cb;
Ln.prototype.has = ub;
Ln.prototype.set = db;
function pb(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r; ) {
        var i = e[n];
        t(i, n, e) && (s[o++] = i)
    }
    return s
}
function hb() {
    return []
}
var mb = Object.prototype
  , vb = mb.propertyIsEnumerable
  , kc = Object.getOwnPropertySymbols
  , gb = kc ? function(e) {
    return e == null ? [] : (e = Object(e),
    pb(kc(e), function(t) {
        return vb.call(e, t)
    }))
}
: hb;
const yb = gb;
function _b(e, t, n) {
    var r = t(e);
    return mn(e) ? r : cd(r, n(e))
}
function Rc(e) {
    return _b(e, v_, yb)
}
var bb = pr(Zt, "DataView");
const ea = bb;
var wb = pr(Zt, "Promise");
const ta = wb;
var xb = pr(Zt, "Set");
const na = xb;
var Nc = "[object Map]"
  , Sb = "[object Object]"
  , Pc = "[object Promise]"
  , Lc = "[object Set]"
  , Mc = "[object WeakMap]"
  , Dc = "[object DataView]"
  , Eb = dr(ea)
  , Cb = dr(mo)
  , Tb = dr(ta)
  , $b = dr(na)
  , Ib = dr(Qi)
  , Gn = Lr;
(ea && Gn(new ea(new ArrayBuffer(1))) != Dc || mo && Gn(new mo) != Nc || ta && Gn(ta.resolve()) != Pc || na && Gn(new na) != Lc || Qi && Gn(new Qi) != Mc) && (Gn = function(e) {
    var t = Lr(e)
      , n = t == Sb ? e.constructor : void 0
      , r = n ? dr(n) : "";
    if (r)
        switch (r) {
        case Eb:
            return Dc;
        case Cb:
            return Nc;
        case Tb:
            return Pc;
        case $b:
            return Lc;
        case Ib:
            return Mc
        }
    return t
}
);
const Bc = Gn;
var Ab = Zt.Uint8Array;
const Fc = Ab;
var Ob = "__lodash_hash_undefined__";
function kb(e) {
    return this.__data__.set(e, Ob),
    this
}
function Rb(e) {
    return this.__data__.has(e)
}
function ls(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.__data__ = new yn; ++t < n; )
        this.add(e[t])
}
ls.prototype.add = ls.prototype.push = kb;
ls.prototype.has = Rb;
function Nb(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e))
            return !0;
    return !1
}
function Pb(e, t) {
    return e.has(t)
}
var Lb = 1
  , Mb = 2;
function fd(e, t, n, r, o, s) {
    var i = n & Lb
      , a = e.length
      , l = t.length;
    if (a != l && !(i && l > a))
        return !1;
    var c = s.get(e)
      , f = s.get(t);
    if (c && f)
        return c == t && f == e;
    var u = -1
      , p = !0
      , h = n & Mb ? new ls : void 0;
    for (s.set(e, t),
    s.set(t, e); ++u < a; ) {
        var m = e[u]
          , g = t[u];
        if (r)
            var b = i ? r(g, m, u, t, e, s) : r(m, g, u, e, t, s);
        if (b !== void 0) {
            if (b)
                continue;
            p = !1;
            break
        }
        if (h) {
            if (!Nb(t, function($, D) {
                if (!Pb(h, D) && (m === $ || o(m, $, n, r, s)))
                    return h.push(D)
            })) {
                p = !1;
                break
            }
        } else if (!(m === g || o(m, g, n, r, s))) {
            p = !1;
            break
        }
    }
    return s.delete(e),
    s.delete(t),
    p
}
function Db(e) {
    var t = -1
      , n = Array(e.size);
    return e.forEach(function(r, o) {
        n[++t] = [o, r]
    }),
    n
}
function Bb(e) {
    var t = -1
      , n = Array(e.size);
    return e.forEach(function(r) {
        n[++t] = r
    }),
    n
}
var Fb = 1
  , Ub = 2
  , zb = "[object Boolean]"
  , jb = "[object Date]"
  , Hb = "[object Error]"
  , Vb = "[object Map]"
  , Wb = "[object Number]"
  , Kb = "[object RegExp]"
  , Yb = "[object Set]"
  , qb = "[object String]"
  , Gb = "[object Symbol]"
  , Jb = "[object ArrayBuffer]"
  , Qb = "[object DataView]"
  , Uc = an ? an.prototype : void 0
  , _i = Uc ? Uc.valueOf : void 0;
function Xb(e, t, n, r, o, s, i) {
    switch (n) {
    case Qb:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
        e = e.buffer,
        t = t.buffer;
    case Jb:
        return !(e.byteLength != t.byteLength || !s(new Fc(e), new Fc(t)));
    case zb:
    case jb:
    case Wb:
        return Ya(+e, +t);
    case Hb:
        return e.name == t.name && e.message == t.message;
    case Kb:
    case qb:
        return e == t + "";
    case Vb:
        var a = Db;
    case Yb:
        var l = r & Fb;
        if (a || (a = Bb),
        e.size != t.size && !l)
            return !1;
        var c = i.get(e);
        if (c)
            return c == t;
        r |= Ub,
        i.set(e, t);
        var f = fd(a(e), a(t), r, o, s, i);
        return i.delete(e),
        f;
    case Gb:
        if (_i)
            return _i.call(e) == _i.call(t)
    }
    return !1
}
var Zb = 1
  , ew = Object.prototype
  , tw = ew.hasOwnProperty;
function nw(e, t, n, r, o, s) {
    var i = n & Zb
      , a = Rc(e)
      , l = a.length
      , c = Rc(t)
      , f = c.length;
    if (l != f && !i)
        return !1;
    for (var u = l; u--; ) {
        var p = a[u];
        if (!(i ? p in t : tw.call(t, p)))
            return !1
    }
    var h = s.get(e)
      , m = s.get(t);
    if (h && m)
        return h == t && m == e;
    var g = !0;
    s.set(e, t),
    s.set(t, e);
    for (var b = i; ++u < l; ) {
        p = a[u];
        var $ = e[p]
          , D = t[p];
        if (r)
            var U = i ? r(D, $, p, t, e, s) : r($, D, p, e, t, s);
        if (!(U === void 0 ? $ === D || o($, D, n, r, s) : U)) {
            g = !1;
            break
        }
        b || (b = p == "constructor")
    }
    if (g && !b) {
        var R = e.constructor
          , x = t.constructor;
        R != x && "constructor"in e && "constructor"in t && !(typeof R == "function" && R instanceof R && typeof x == "function" && x instanceof x) && (g = !1)
    }
    return s.delete(e),
    s.delete(t),
    g
}
var rw = 1
  , zc = "[object Arguments]"
  , jc = "[object Array]"
  , Po = "[object Object]"
  , ow = Object.prototype
  , Hc = ow.hasOwnProperty;
function sw(e, t, n, r, o, s) {
    var i = mn(e)
      , a = mn(t)
      , l = i ? jc : Bc(e)
      , c = a ? jc : Bc(t);
    l = l == zc ? Po : l,
    c = c == zc ? Po : c;
    var f = l == Po
      , u = c == Po
      , p = l == c;
    if (p && Xi(e)) {
        if (!Xi(t))
            return !1;
        i = !0,
        f = !1
    }
    if (p && !f)
        return s || (s = new Ln),
        i || ad(e) ? fd(e, t, n, r, o, s) : Xb(e, t, l, n, r, o, s);
    if (!(n & rw)) {
        var h = f && Hc.call(e, "__wrapped__")
          , m = u && Hc.call(t, "__wrapped__");
        if (h || m) {
            var g = h ? e.value() : e
              , b = m ? t.value() : t;
            return s || (s = new Ln),
            o(g, b, n, r, s)
        }
    }
    return p ? (s || (s = new Ln),
    nw(e, t, n, r, o, s)) : !1
}
function dd(e, t, n, r, o) {
    return e === t ? !0 : e == null || t == null || !Ar(e) && !Ar(t) ? e !== e && t !== t : sw(e, t, n, r, dd, o)
}
function iw(e, t) {
    return e != null && t in Object(e)
}
function aw(e, t, n) {
    t = Hs(t, e);
    for (var r = -1, o = t.length, s = !1; ++r < o; ) {
        var i = Qa(t[r]);
        if (!(s = e != null && n(e, i)))
            break;
        e = e[i]
    }
    return s || ++r != o ? s : (o = e == null ? 0 : e.length,
    !!o && qa(o) && Ka(i, o) && (mn(e) || Ga(e)))
}
function lw(e, t) {
    return e != null && aw(e, t, iw)
}
var cw = function() {
    return Zt.Date.now()
};
const bi = cw;
var uw = "Expected a function"
  , fw = Math.max
  , dw = Math.min;
function Vs(e, t, n) {
    var r, o, s, i, a, l, c = 0, f = !1, u = !1, p = !0;
    if (typeof e != "function")
        throw new TypeError(uw);
    t = is(t) || 0,
    Un(n) && (f = !!n.leading,
    u = "maxWait"in n,
    s = u ? fw(is(n.maxWait) || 0, t) : s,
    p = "trailing"in n ? !!n.trailing : p);
    function h(B) {
        var L = r
          , S = o;
        return r = o = void 0,
        c = B,
        i = e.apply(S, L),
        i
    }
    function m(B) {
        return c = B,
        a = setTimeout($, t),
        f ? h(B) : i
    }
    function g(B) {
        var L = B - l
          , S = B - c
          , k = t - L;
        return u ? dw(k, s - S) : k
    }
    function b(B) {
        var L = B - l
          , S = B - c;
        return l === void 0 || L >= t || L < 0 || u && S >= s
    }
    function $() {
        var B = bi();
        if (b(B))
            return D(B);
        a = setTimeout($, g(B))
    }
    function D(B) {
        return a = void 0,
        p && r ? h(B) : (r = o = void 0,
        i)
    }
    function U() {
        a !== void 0 && clearTimeout(a),
        c = 0,
        r = l = o = a = void 0
    }
    function R() {
        return a === void 0 ? i : D(bi())
    }
    function x() {
        var B = bi()
          , L = b(B);
        if (r = arguments,
        o = this,
        l = B,
        L) {
            if (a === void 0)
                return m(l);
            if (u)
                return clearTimeout(a),
                a = setTimeout($, t),
                h(l)
        }
        return a === void 0 && (a = setTimeout($, t)),
        i
    }
    return x.cancel = U,
    x.flush = R,
    x
}
function pd(e) {
    for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
        var o = e[t];
        r[o[0]] = o[1]
    }
    return r
}
function pw(e, t) {
    return dd(e, t)
}
function hd(e) {
    return e == null
}
function hw(e, t, n, r) {
    if (!Un(e))
        return e;
    t = Hs(t, e);
    for (var o = -1, s = t.length, i = s - 1, a = e; a != null && ++o < s; ) {
        var l = Qa(t[o])
          , c = n;
        if (l === "__proto__" || l === "constructor" || l === "prototype")
            return e;
        if (o != i) {
            var f = a[l];
            c = r ? r(f, l, a) : void 0,
            c === void 0 && (c = Un(f) ? f : Ka(t[o + 1]) ? [] : {})
        }
        gy(a, l, c),
        a = a[l]
    }
    return e
}
function mw(e, t, n) {
    for (var r = -1, o = t.length, s = {}; ++r < o; ) {
        var i = t[r]
          , a = ld(e, i);
        n(a, i) && hw(s, Hs(i, e), a)
    }
    return s
}
function vw(e, t) {
    return mw(e, t, function(n, r) {
        return lw(e, r)
    })
}
var gw = rb(function(e, t) {
    return e == null ? {} : vw(e, t)
});
const yw = gw;
var _w = ib("round");
const bw = _w;
var ww = "Expected a function";
function ra(e, t, n) {
    var r = !0
      , o = !0;
    if (typeof e != "function")
        throw new TypeError(ww);
    return Un(n) && (r = "leading"in n ? !!n.leading : r,
    o = "trailing"in n ? !!n.trailing : o),
    Vs(e, t, {
        leading: r,
        maxWait: t,
        trailing: o
    })
}
const vo = e=>e === void 0
  , Mn = e=>typeof e == "boolean"
  , zt = e=>typeof e == "number"
  , xw = e=>Ne(e) ? !Number.isNaN(Number(e)) : !1;
class Sw extends Error {
    constructor(t) {
        super(t),
        this.name = "ElementPlusError"
    }
}
function md(e, t) {
    throw new Sw(`[${e}] ${t}`)
}
const vd = (e="")=>e.split(" ").filter(t=>!!t.trim())
  , Vc = (e,t)=>{
    if (!e || !t)
        return !1;
    if (t.includes(" "))
        throw new Error("className should not contain space.");
    return e.classList.contains(t)
}
  , Ew = (e,t)=>{
    !e || !t.trim() || e.classList.add(...vd(t))
}
  , Cw = (e,t)=>{
    !e || !t.trim() || e.classList.remove(...vd(t))
}
  , Tw = (e,t)=>{
    var n;
    if (!At || !e || !t)
        return "";
    let r = Qt(t);
    r === "float" && (r = "cssFloat");
    try {
        const o = e.style[r];
        if (o)
            return o;
        const s = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
        return s ? s[r] : ""
    } catch {
        return e.style[r]
    }
}
;
function Mr(e, t="px") {
    if (!e)
        return "";
    if (zt(e) || xw(e))
        return `${e}${t}`;
    if (Ne(e))
        return e
}
let Lo;
const $w = e=>{
    var t;
    if (!At)
        return 0;
    if (Lo !== void 0)
        return Lo;
    const n = document.createElement("div");
    n.className = `${e}-scrollbar__wrap`,
    n.style.visibility = "hidden",
    n.style.width = "100px",
    n.style.position = "absolute",
    n.style.top = "-9999px",
    document.body.appendChild(n);
    const r = n.offsetWidth;
    n.style.overflow = "scroll";
    const o = document.createElement("div");
    o.style.width = "100%",
    n.appendChild(o);
    const s = o.offsetWidth;
    return (t = n.parentNode) == null || t.removeChild(n),
    Lo = r - s,
    Lo
}
;
/*! Element Plus Icons Vue v2.1.0 */
var Kt = (e,t)=>{
    let n = e.__vccOpts || e;
    for (let[r,o] of t)
        n[r] = o;
    return n
}
  , Iw = {
    name: "ArrowLeft"
}
  , Aw = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , Ow = N("path", {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1)
  , kw = [Ow];
function Rw(e, t, n, r, o, s) {
    return O(),
    K("svg", Aw, kw)
}
var Nw = Kt(Iw, [["render", Rw], ["__file", "arrow-left.vue"]])
  , Pw = {
    name: "ArrowRight"
}
  , Lw = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , Mw = N("path", {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1)
  , Dw = [Mw];
function Bw(e, t, n, r, o, s) {
    return O(),
    K("svg", Lw, Dw)
}
var Fw = Kt(Pw, [["render", Bw], ["__file", "arrow-right.vue"]])
  , Uw = {
    name: "CaretBottom"
}
  , zw = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , jw = N("path", {
    fill: "currentColor",
    d: "m192 384 320 384 320-384z"
}, null, -1)
  , Hw = [jw];
function Vw(e, t, n, r, o, s) {
    return O(),
    K("svg", zw, Hw)
}
var Wc = Kt(Uw, [["render", Vw], ["__file", "caret-bottom.vue"]])
  , Ww = {
    name: "CircleCheck"
}
  , Kw = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , Yw = N("path", {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1)
  , qw = N("path", {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1)
  , Gw = [Yw, qw];
function Jw(e, t, n, r, o, s) {
    return O(),
    K("svg", Kw, Gw)
}
var Qw = Kt(Ww, [["render", Jw], ["__file", "circle-check.vue"]])
  , Xw = {
    name: "CircleClose"
}
  , Zw = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , e1 = N("path", {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1)
  , t1 = N("path", {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1)
  , n1 = [e1, t1];
function r1(e, t, n, r, o, s) {
    return O(),
    K("svg", Zw, n1)
}
var gd = Kt(Xw, [["render", r1], ["__file", "circle-close.vue"]])
  , o1 = {
    name: "Close"
}
  , s1 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , i1 = N("path", {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1)
  , a1 = [i1];
function l1(e, t, n, r, o, s) {
    return O(),
    K("svg", s1, a1)
}
var Ws = Kt(o1, [["render", l1], ["__file", "close.vue"]])
  , c1 = {
    name: "Hide"
}
  , u1 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , f1 = N("path", {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
}, null, -1)
  , d1 = N("path", {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
}, null, -1)
  , p1 = [f1, d1];
function h1(e, t, n, r, o, s) {
    return O(),
    K("svg", u1, p1)
}
var m1 = Kt(c1, [["render", h1], ["__file", "hide.vue"]])
  , v1 = {
    name: "Loading"
}
  , g1 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , y1 = N("path", {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1)
  , _1 = [y1];
function b1(e, t, n, r, o, s) {
    return O(),
    K("svg", g1, _1)
}
var Xa = Kt(v1, [["render", b1], ["__file", "loading.vue"]])
  , w1 = {
    name: "Plus"
}
  , x1 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , S1 = N("path", {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1)
  , E1 = [S1];
function C1(e, t, n, r, o, s) {
    return O(),
    K("svg", x1, E1)
}
var T1 = Kt(w1, [["render", C1], ["__file", "plus.vue"]])
  , $1 = {
    name: "RefreshRight"
}
  , I1 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , A1 = N("path", {
    fill: "currentColor",
    d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1)
  , O1 = [A1];
function k1(e, t, n, r, o, s) {
    return O(),
    K("svg", I1, O1)
}
var R1 = Kt($1, [["render", k1], ["__file", "refresh-right.vue"]])
  , N1 = {
    name: "Search"
}
  , P1 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , L1 = N("path", {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1)
  , M1 = [L1];
function D1(e, t, n, r, o, s) {
    return O(),
    K("svg", P1, M1)
}
var B1 = Kt(N1, [["render", D1], ["__file", "search.vue"]])
  , F1 = {
    name: "View"
}
  , U1 = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024"
}
  , z1 = N("path", {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1)
  , j1 = [z1];
function H1(e, t, n, r, o, s) {
    return O(),
    K("svg", U1, j1)
}
var V1 = Kt(F1, [["render", H1], ["__file", "view.vue"]]);
const yd = "__epPropKey"
  , jt = e=>e
  , W1 = e=>Be(e) && !!e[yd]
  , _d = (e,t)=>{
    if (!Be(e) || W1(e))
        return e;
    const {values: n, required: r, default: o, type: s, validator: i} = e
      , l = {
        type: s,
        required: !!r,
        validator: n || i ? c=>{
            let f = !1
              , u = [];
            if (n && (u = Array.from(n),
            Re(e, "default") && u.push(o),
            f || (f = u.includes(c))),
            i && (f || (f = i(c))),
            !f && u.length > 0) {
                const p = [...new Set(u)].map(h=>JSON.stringify(h)).join(", ");
                Ah(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(c)}.`)
            }
            return f
        }
        : void 0,
        [yd]: !0
    };
    return Re(e, "default") && (l.default = o),
    l
}
  , Pt = e=>pd(Object.entries(e).map(([t,n])=>[t, _d(n, t)]))
  , zn = jt([String, Object, Function])
  , K1 = {
    validating: Xa,
    success: Qw,
    error: gd
}
  , _n = (e,t)=>{
    if (e.install = n=>{
        for (const r of [e, ...Object.values(t != null ? t : {})])
            n.component(r.name, r)
    }
    ,
    t)
        for (const [n,r] of Object.entries(t))
            e[n] = r;
    return e
}
  , Ks = e=>(e.install = vt,
e)
  , bd = {
    tab: "Tab",
    enter: "Enter",
    space: "Space",
    left: "ArrowLeft",
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
    esc: "Escape",
    delete: "Delete",
    backspace: "Backspace",
    numpadEnter: "NumpadEnter",
    pageUp: "PageUp",
    pageDown: "PageDown",
    home: "Home",
    end: "End"
}
  , Wt = "update:modelValue"
  , oa = "change"
  , sa = "input"
  , Za = ["", "default", "small", "large"]
  , Y1 = e=>["", ...Za].includes(e);
var Go = (e=>(e[e.TEXT = 1] = "TEXT",
e[e.CLASS = 2] = "CLASS",
e[e.STYLE = 4] = "STYLE",
e[e.PROPS = 8] = "PROPS",
e[e.FULL_PROPS = 16] = "FULL_PROPS",
e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS",
e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT",
e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT",
e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT",
e[e.NEED_PATCH = 512] = "NEED_PATCH",
e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS",
e[e.HOISTED = -1] = "HOISTED",
e[e.BAIL = -2] = "BAIL",
e))(Go || {});
const Jo = e=>{
    const t = ve(e) ? e : [e]
      , n = [];
    return t.forEach(r=>{
        var o;
        ve(r) ? n.push(...Jo(r)) : ar(r) && ve(r.children) ? n.push(...Jo(r.children)) : (n.push(r),
        ar(r) && ((o = r.component) == null ? void 0 : o.subTree) && n.push(...Jo(r.component.subTree)))
    }
    ),
    n
}
  , q1 = e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e)
  , G1 = e=>e
  , J1 = ["class", "style"]
  , Q1 = /^on[A-Z]/
  , X1 = (e={})=>{
    const {excludeListeners: t=!1, excludeKeys: n} = e
      , r = Y(()=>((n == null ? void 0 : n.value) || []).concat(J1))
      , o = Ot();
    return Y(o ? ()=>{
        var s;
        return pd(Object.entries((s = o.proxy) == null ? void 0 : s.$attrs).filter(([i])=>!r.value.includes(i) && !(t && Q1.test(i))))
    }
    : ()=>({}))
}
  , cs = ({from: e, replacement: t, scope: n, version: r, ref: o, type: s="API"},i)=>{
    $e(()=>d(i), a=>{}
    , {
        immediate: !0
    })
}
;
var Z1 = {
    name: "en",
    el: {
        colorpicker: {
            confirm: "OK",
            clear: "Clear",
            defaultLabel: "color picker",
            description: "current color is {color}. press enter to select a new color."
        },
        datepicker: {
            now: "Now",
            today: "Today",
            cancel: "Cancel",
            clear: "Clear",
            confirm: "OK",
            dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
            monthTablePrompt: "Use the arrow keys and enter to select the month",
            yearTablePrompt: "Use the arrow keys and enter to select the year",
            selectedDate: "Selected date",
            selectDate: "Select date",
            selectTime: "Select time",
            startDate: "Start Date",
            startTime: "Start Time",
            endDate: "End Date",
            endTime: "End Time",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            year: "",
            month1: "January",
            month2: "February",
            month3: "March",
            month4: "April",
            month5: "May",
            month6: "June",
            month7: "July",
            month8: "August",
            month9: "September",
            month10: "October",
            month11: "November",
            month12: "December",
            week: "week",
            weeks: {
                sun: "Sun",
                mon: "Mon",
                tue: "Tue",
                wed: "Wed",
                thu: "Thu",
                fri: "Fri",
                sat: "Sat"
            },
            weeksFull: {
                sun: "Sunday",
                mon: "Monday",
                tue: "Tuesday",
                wed: "Wednesday",
                thu: "Thursday",
                fri: "Friday",
                sat: "Saturday"
            },
            months: {
                jan: "Jan",
                feb: "Feb",
                mar: "Mar",
                apr: "Apr",
                may: "May",
                jun: "Jun",
                jul: "Jul",
                aug: "Aug",
                sep: "Sep",
                oct: "Oct",
                nov: "Nov",
                dec: "Dec"
            }
        },
        inputNumber: {
            decrease: "decrease number",
            increase: "increase number"
        },
        select: {
            loading: "Loading",
            noMatch: "No matching data",
            noData: "No data",
            placeholder: "Select"
        },
        dropdown: {
            toggleDropdown: "Toggle Dropdown"
        },
        cascader: {
            noMatch: "No matching data",
            loading: "Loading",
            placeholder: "Select",
            noData: "No data"
        },
        pagination: {
            goto: "Go to",
            pagesize: "/page",
            total: "Total {total}",
            pageClassifier: "",
            page: "Page",
            prev: "Go to previous page",
            next: "Go to next page",
            currentPage: "page {pager}",
            prevPages: "Previous {pager} pages",
            nextPages: "Next {pager} pages",
            deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
        },
        dialog: {
            close: "Close this dialog"
        },
        drawer: {
            close: "Close this dialog"
        },
        messagebox: {
            title: "Message",
            confirm: "OK",
            cancel: "Cancel",
            error: "Illegal input",
            close: "Close this dialog"
        },
        upload: {
            deleteTip: "press delete to remove",
            delete: "Delete",
            preview: "Preview",
            continue: "Continue"
        },
        slider: {
            defaultLabel: "slider between {min} and {max}",
            defaultRangeStartLabel: "pick start value",
            defaultRangeEndLabel: "pick end value"
        },
        table: {
            emptyText: "No Data",
            confirmFilter: "Confirm",
            resetFilter: "Reset",
            clearFilter: "All",
            sumText: "Sum"
        },
        tree: {
            emptyText: "No Data"
        },
        transfer: {
            noMatch: "No matching data",
            noData: "No data",
            titles: ["List 1", "List 2"],
            filterPlaceholder: "Enter keyword",
            noCheckedFormat: "{total} items",
            hasCheckedFormat: "{checked}/{total} checked"
        },
        image: {
            error: "FAILED"
        },
        pageHeader: {
            title: "Back"
        },
        popconfirm: {
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }
    }
};
const e2 = e=>(t,n)=>t2(t, n, d(e))
  , t2 = (e,t,n)=>eb(n, e, e).replace(/\{(\w+)\}/g, (r,o)=>{
    var s;
    return `${(s = t == null ? void 0 : t[o]) != null ? s : `{${o}}`}`
}
)
  , n2 = e=>{
    const t = Y(()=>d(e).name)
      , n = Fe(e) ? e : q(e);
    return {
        lang: t,
        locale: n,
        t: e2(e)
    }
}
  , r2 = Symbol("localeContextKey")
  , wd = e=>{
    const t = e || Ge(r2, q());
    return n2(Y(()=>t.value || Z1))
}
  , ia = "el"
  , o2 = "is-"
  , qn = (e,t,n,r,o)=>{
    let s = `${e}-${t}`;
    return n && (s += `-${n}`),
    r && (s += `__${r}`),
    o && (s += `--${o}`),
    s
}
  , s2 = Symbol("namespaceContextKey")
  , xd = e=>{
    const t = e || Ge(s2, q(ia));
    return Y(()=>d(t) || ia)
}
  , ut = (e,t)=>{
    const n = xd(t);
    return {
        namespace: n,
        b: (g="")=>qn(n.value, e, g, "", ""),
        e: g=>g ? qn(n.value, e, "", g, "") : "",
        m: g=>g ? qn(n.value, e, "", "", g) : "",
        be: (g,b)=>g && b ? qn(n.value, e, g, b, "") : "",
        em: (g,b)=>g && b ? qn(n.value, e, "", g, b) : "",
        bm: (g,b)=>g && b ? qn(n.value, e, g, "", b) : "",
        bem: (g,b,$)=>g && b && $ ? qn(n.value, e, g, b, $) : "",
        is: (g,...b)=>{
            const $ = b.length >= 1 ? b[0] : !0;
            return g && $ ? `${o2}${g}` : ""
        }
        ,
        cssVar: g=>{
            const b = {};
            for (const $ in g)
                g[$] && (b[`--${n.value}-${$}`] = g[$]);
            return b
        }
        ,
        cssVarName: g=>`--${n.value}-${g}`,
        cssVarBlock: g=>{
            const b = {};
            for (const $ in g)
                g[$] && (b[`--${n.value}-${e}-${$}`] = g[$]);
            return b
        }
        ,
        cssVarBlockName: g=>`--${n.value}-${e}-${g}`
    }
}
  , i2 = (e,t={})=>{
    Fe(e) || md("[useLockscreen]", "You need to pass a ref param to this function");
    const n = t.ns || ut("popup")
      , r = qu(()=>n.bm("parent", "hidden"));
    if (!At || Vc(document.body, r.value))
        return;
    let o = 0
      , s = !1
      , i = "0";
    const a = ()=>{
        setTimeout(()=>{
            Cw(document == null ? void 0 : document.body, r.value),
            s && document && (document.body.style.width = i)
        }
        , 200)
    }
    ;
    $e(e, l=>{
        if (!l) {
            a();
            return
        }
        s = !Vc(document.body, r.value),
        s && (i = document.body.style.width),
        o = $w(n.namespace.value);
        const c = document.documentElement.clientHeight < document.body.scrollHeight
          , f = Tw(document.body, "overflowY");
        o > 0 && (c || f === "scroll") && s && (document.body.style.width = `calc(100% - ${o}px)`),
        Ew(document.body, r.value)
    }
    ),
    ys(()=>a())
}
  , Sd = e=>{
    const t = Ot();
    return Y(()=>{
        var n, r;
        return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e]
    }
    )
}
  , a2 = e=>{
    if (!e)
        return {
            onClick: vt,
            onMousedown: vt,
            onMouseup: vt
        };
    let t = !1
      , n = !1;
    return {
        onClick: i=>{
            t && n && e(i),
            t = n = !1
        }
        ,
        onMousedown: i=>{
            t = i.target === i.currentTarget
        }
        ,
        onMouseup: i=>{
            n = i.target === i.currentTarget
        }
    }
}
  , Kc = {
    prefix: Math.floor(Math.random() * 1e4),
    current: 0
}
  , l2 = Symbol("elIdInjection")
  , c2 = ()=>Ot() ? Ge(l2, Kc) : Kc
  , us = e=>{
    const t = c2()
      , n = xd();
    return Y(()=>d(e) || `${n.value}-id-${t.prefix}-${t.current++}`)
}
;
let br = [];
const Yc = e=>{
    const t = e;
    t.key === bd.esc && br.forEach(n=>n(t))
}
  , u2 = e=>{
    Je(()=>{
        br.length === 0 && document.addEventListener("keydown", Yc),
        At && br.push(e)
    }
    ),
    Rr(()=>{
        br = br.filter(t=>t !== e),
        br.length === 0 && At && document.removeEventListener("keydown", Yc)
    }
    )
}
  , qc = q(0)
  , f2 = 2e3
  , d2 = Symbol("zIndexContextKey")
  , p2 = e=>{
    const t = e || Ge(d2, void 0)
      , n = Y(()=>{
        const s = d(t);
        return zt(s) ? s : f2
    }
    )
      , r = Y(()=>n.value + qc.value);
    return {
        initialZIndex: n,
        currentZIndex: r,
        nextZIndex: ()=>(qc.value++,
        r.value)
    }
}
;
function h2(e) {
    const t = q();
    function n() {
        if (e.value == null)
            return;
        const {selectionStart: o, selectionEnd: s, value: i} = e.value;
        if (o == null || s == null)
            return;
        const a = i.slice(0, Math.max(0, o))
          , l = i.slice(Math.max(0, s));
        t.value = {
            selectionStart: o,
            selectionEnd: s,
            value: i,
            beforeTxt: a,
            afterTxt: l
        }
    }
    function r() {
        if (e.value == null || t.value == null)
            return;
        const {value: o} = e.value
          , {beforeTxt: s, afterTxt: i, selectionStart: a} = t.value;
        if (s == null || i == null || a == null)
            return;
        let l = o.length;
        if (o.endsWith(i))
            l = o.length - i.length;
        else if (o.startsWith(s))
            l = s.length;
        else {
            const c = s[a - 1]
              , f = o.indexOf(c, a - 1);
            f !== -1 && (l = f + 1)
        }
        e.value.setSelectionRange(l, l)
    }
    return [n, r]
}
const m2 = (e,t,n)=>Jo(e.subTree).filter(s=>{
    var i;
    return ar(s) && ((i = s.type) == null ? void 0 : i.name) === t && !!s.component
}
).map(s=>s.component.uid).map(s=>n[s]).filter(s=>!!s)
  , v2 = (e,t)=>{
    const n = {}
      , r = Gr([]);
    return {
        children: r,
        addChild: i=>{
            n[i.uid] = i,
            r.value = m2(e, t, n)
        }
        ,
        removeChild: i=>{
            delete n[i],
            r.value = r.value.filter(a=>a.uid !== i)
        }
    }
}
  , Ys = _d({
    type: String,
    values: Za,
    required: !1
})
  , g2 = Symbol("size")
  , y2 = ()=>{
    const e = Ge(g2, {});
    return Y(()=>d(e.size) || "")
}
  , _2 = Symbol()
  , Gc = q();
function Ed(e, t=void 0) {
    const n = Ot() ? Ge(_2, Gc) : Gc;
    return e ? Y(()=>{
        var r, o;
        return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t
    }
    ) : n
}
var wt = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,o] of t)
        n[r] = o;
    return n
}
;
const b2 = Pt({
    size: {
        type: jt([Number, String])
    },
    color: {
        type: String
    }
})
  , w2 = Ce({
    name: "ElIcon",
    inheritAttrs: !1
})
  , x2 = Ce({
    ...w2,
    props: b2,
    setup(e) {
        const t = e
          , n = ut("icon")
          , r = Y(()=>{
            const {size: o, color: s} = t;
            return !o && !s ? {} : {
                fontSize: vo(o) ? void 0 : Mr(o),
                "--color": s
            }
        }
        );
        return (o,s)=>(O(),
        K("i", or({
            class: d(n).b(),
            style: d(r)
        }, o.$attrs), [Ve(o.$slots, "default")], 16))
    }
});
var S2 = wt(x2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const et = _n(S2)
  , el = Symbol("formContextKey")
  , Cd = Symbol("formItemContextKey")
  , go = (e,t={})=>{
    const n = q(void 0)
      , r = t.prop ? n : Sd("size")
      , o = t.global ? n : y2()
      , s = t.form ? {
        size: void 0
    } : Ge(el, void 0)
      , i = t.formItem ? {
        size: void 0
    } : Ge(Cd, void 0);
    return Y(()=>r.value || d(e) || (i == null ? void 0 : i.size) || (s == null ? void 0 : s.size) || o.value || "")
}
  , So = e=>{
    const t = Sd("disabled")
      , n = Ge(el, void 0);
    return Y(()=>t.value || d(e) || (n == null ? void 0 : n.disabled) || !1)
}
  , Dr = ()=>{
    const e = Ge(el, void 0)
      , t = Ge(Cd, void 0);
    return {
        form: e,
        formItem: t
    }
}
  , qs = (e,{formItemContext: t, disableIdGeneration: n, disableIdManagement: r})=>{
    n || (n = q(!1)),
    r || (r = q(!1));
    const o = q();
    let s;
    const i = Y(()=>{
        var a;
        return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1)
    }
    );
    return Je(()=>{
        s = $e([io(e, "id"), n], ([a,l])=>{
            const c = a != null ? a : l ? void 0 : us().value;
            c !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value),
            !(r != null && r.value) && !l && c && t.addInputId(c)),
            o.value = c)
        }
        , {
            immediate: !0
        })
    }
    ),
    Nr(()=>{
        s && s(),
        t != null && t.removeInputId && o.value && t.removeInputId(o.value)
    }
    ),
    {
        isLabeledByFormItem: i,
        inputId: o
    }
}
;
let Yt;
const E2 = `
  height:0 !important;
  visibility:hidden !important;
  ${l0() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`
  , C2 = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];
function T2(e) {
    const t = window.getComputedStyle(e)
      , n = t.getPropertyValue("box-sizing")
      , r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top"))
      , o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
    return {
        contextStyle: C2.map(i=>`${i}:${t.getPropertyValue(i)}`).join(";"),
        paddingSize: r,
        borderSize: o,
        boxSizing: n
    }
}
function Jc(e, t=1, n) {
    var r;
    Yt || (Yt = document.createElement("textarea"),
    document.body.appendChild(Yt));
    const {paddingSize: o, borderSize: s, boxSizing: i, contextStyle: a} = T2(e);
    Yt.setAttribute("style", `${a};${E2}`),
    Yt.value = e.value || e.placeholder || "";
    let l = Yt.scrollHeight;
    const c = {};
    i === "border-box" ? l = l + s : i === "content-box" && (l = l - o),
    Yt.value = "";
    const f = Yt.scrollHeight - o;
    if (zt(t)) {
        let u = f * t;
        i === "border-box" && (u = u + o + s),
        l = Math.max(u, l),
        c.minHeight = `${u}px`
    }
    if (zt(n)) {
        let u = f * n;
        i === "border-box" && (u = u + o + s),
        l = Math.min(u, l)
    }
    return c.height = `${l}px`,
    (r = Yt.parentNode) == null || r.removeChild(Yt),
    Yt = void 0,
    c
}
const $2 = Pt({
    id: {
        type: String,
        default: void 0
    },
    size: Ys,
    disabled: Boolean,
    modelValue: {
        type: jt([String, Number, Object]),
        default: ""
    },
    type: {
        type: String,
        default: "text"
    },
    resize: {
        type: String,
        values: ["none", "both", "horizontal", "vertical"]
    },
    autosize: {
        type: jt([Boolean, Object]),
        default: !1
    },
    autocomplete: {
        type: String,
        default: "off"
    },
    formatter: {
        type: Function
    },
    parser: {
        type: Function
    },
    placeholder: {
        type: String
    },
    form: {
        type: String
    },
    readonly: {
        type: Boolean,
        default: !1
    },
    clearable: {
        type: Boolean,
        default: !1
    },
    showPassword: {
        type: Boolean,
        default: !1
    },
    showWordLimit: {
        type: Boolean,
        default: !1
    },
    suffixIcon: {
        type: zn
    },
    prefixIcon: {
        type: zn
    },
    containerRole: {
        type: String,
        default: void 0
    },
    label: {
        type: String,
        default: void 0
    },
    tabindex: {
        type: [String, Number],
        default: 0
    },
    validateEvent: {
        type: Boolean,
        default: !0
    },
    inputStyle: {
        type: jt([Object, Array, String]),
        default: ()=>G1({})
    }
})
  , I2 = {
    [Wt]: e=>Ne(e),
    input: e=>Ne(e),
    change: e=>Ne(e),
    focus: e=>e instanceof FocusEvent,
    blur: e=>e instanceof FocusEvent,
    clear: ()=>!0,
    mouseleave: e=>e instanceof MouseEvent,
    mouseenter: e=>e instanceof MouseEvent,
    keydown: e=>e instanceof Event,
    compositionstart: e=>e instanceof CompositionEvent,
    compositionupdate: e=>e instanceof CompositionEvent,
    compositionend: e=>e instanceof CompositionEvent
}
  , A2 = ["role"]
  , O2 = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"]
  , k2 = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"]
  , R2 = Ce({
    name: "ElInput",
    inheritAttrs: !1
})
  , N2 = Ce({
    ...R2,
    props: $2,
    emits: I2,
    setup(e, {expose: t, emit: n}) {
        const r = e
          , o = sm()
          , s = $s()
          , i = Y(()=>{
            const P = {};
            return r.containerRole === "combobox" && (P["aria-haspopup"] = o["aria-haspopup"],
            P["aria-owns"] = o["aria-owns"],
            P["aria-expanded"] = o["aria-expanded"]),
            P
        }
        )
          , a = Y(()=>[r.type === "textarea" ? b.b() : g.b(), g.m(h.value), g.is("disabled", m.value), g.is("exceed", Se.value), {
            [g.b("group")]: s.prepend || s.append,
            [g.bm("group", "append")]: s.append,
            [g.bm("group", "prepend")]: s.prepend,
            [g.m("prefix")]: s.prefix || r.prefixIcon,
            [g.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
            [g.bm("suffix", "password-clear")]: M.value && Q.value
        }, o.class])
          , l = Y(()=>[g.e("wrapper"), g.is("focus", U.value)])
          , c = X1({
            excludeKeys: Y(()=>Object.keys(i.value))
        })
          , {form: f, formItem: u} = Dr()
          , {inputId: p} = qs(r, {
            formItemContext: u
        })
          , h = go()
          , m = So()
          , g = ut("input")
          , b = ut("textarea")
          , $ = Gr()
          , D = Gr()
          , U = q(!1)
          , R = q(!1)
          , x = q(!1)
          , B = q(!1)
          , L = q()
          , S = Gr(r.inputStyle)
          , k = Y(()=>$.value || D.value)
          , A = Y(()=>{
            var P;
            return (P = f == null ? void 0 : f.statusIcon) != null ? P : !1
        }
        )
          , te = Y(()=>(u == null ? void 0 : u.validateState) || "")
          , z = Y(()=>te.value && K1[te.value])
          , ne = Y(()=>B.value ? V1 : m1)
          , W = Y(()=>[o.style, r.inputStyle])
          , J = Y(()=>[r.inputStyle, S.value, {
            resize: r.resize
        }])
          , re = Y(()=>hd(r.modelValue) ? "" : String(r.modelValue))
          , M = Y(()=>r.clearable && !m.value && !r.readonly && !!re.value && (U.value || R.value))
          , Q = Y(()=>r.showPassword && !m.value && !r.readonly && !!re.value && (!!re.value || U.value))
          , X = Y(()=>r.showWordLimit && !!c.value.maxlength && (r.type === "text" || r.type === "textarea") && !m.value && !r.readonly && !r.showPassword)
          , ge = Y(()=>re.value.length)
          , Se = Y(()=>!!X.value && ge.value > Number(c.value.maxlength))
          , xe = Y(()=>!!s.suffix || !!r.suffixIcon || M.value || r.showPassword || X.value || !!te.value && A.value)
          , [Ue,at] = h2($);
        Zf(D, P=>{
            if (pt(),
            !X.value || r.resize !== "both")
                return;
            const fe = P[0]
              , {width: Ee} = fe.contentRect;
            L.value = {
                right: `calc(100% - ${Ee + 15 + 6}px)`
            }
        }
        );
        const We = ()=>{
            const {type: P, autosize: fe} = r;
            if (!(!At || P !== "textarea" || !D.value))
                if (fe) {
                    const Ee = Be(fe) ? fe.minRows : void 0
                      , Pe = Be(fe) ? fe.maxRows : void 0
                      , Le = Jc(D.value, Ee, Pe);
                    S.value = {
                        overflowY: "hidden",
                        ...Le
                    },
                    ft(()=>{
                        D.value.offsetHeight,
                        S.value = Le
                    }
                    )
                } else
                    S.value = {
                        minHeight: Jc(D.value).minHeight
                    }
        }
          , pt = (P=>{
            let fe = !1;
            return ()=>{
                var Ee;
                if (fe || !r.autosize)
                    return;
                ((Ee = D.value) == null ? void 0 : Ee.offsetParent) === null || (P(),
                fe = !0)
            }
        }
        )(We)
          , rt = ()=>{
            const P = k.value
              , fe = r.formatter ? r.formatter(re.value) : re.value;
            !P || P.value === fe || (P.value = fe)
        }
          , ze = async P=>{
            Ue();
            let {value: fe} = P.target;
            if (r.formatter && (fe = r.parser ? r.parser(fe) : fe),
            !x.value) {
                if (fe === re.value) {
                    rt();
                    return
                }
                n(Wt, fe),
                n("input", fe),
                await ft(),
                rt(),
                at()
            }
        }
          , ot = P=>{
            n("change", P.target.value)
        }
          , xt = P=>{
            n("compositionstart", P),
            x.value = !0
        }
          , _ = P=>{
            var fe;
            n("compositionupdate", P);
            const Ee = (fe = P.target) == null ? void 0 : fe.value
              , Pe = Ee[Ee.length - 1] || "";
            x.value = !q1(Pe)
        }
          , C = P=>{
            n("compositionend", P),
            x.value && (x.value = !1,
            ze(P))
        }
          , F = ()=>{
            B.value = !B.value,
            V()
        }
          , V = async()=>{
            var P;
            await ft(),
            (P = k.value) == null || P.focus()
        }
          , G = ()=>{
            var P;
            return (P = k.value) == null ? void 0 : P.blur()
        }
          , ae = P=>{
            U.value = !0,
            n("focus", P)
        }
          , ue = P=>{
            var fe;
            U.value = !1,
            n("blur", P),
            r.validateEvent && ((fe = u == null ? void 0 : u.validate) == null || fe.call(u, "blur").catch(Ee=>void 0))
        }
          , oe = P=>{
            R.value = !1,
            n("mouseleave", P)
        }
          , le = P=>{
            R.value = !0,
            n("mouseenter", P)
        }
          , Z = P=>{
            n("keydown", P)
        }
          , be = ()=>{
            var P;
            (P = k.value) == null || P.select()
        }
          , he = ()=>{
            n(Wt, ""),
            n("change", ""),
            n("clear"),
            n("input", "")
        }
        ;
        return $e(()=>r.modelValue, ()=>{
            var P;
            ft(()=>We()),
            r.validateEvent && ((P = u == null ? void 0 : u.validate) == null || P.call(u, "change").catch(fe=>void 0))
        }
        ),
        $e(re, ()=>rt()),
        $e(()=>r.type, async()=>{
            await ft(),
            rt(),
            We()
        }
        ),
        Je(()=>{
            !r.formatter && r.parser,
            rt(),
            ft(We)
        }
        ),
        t({
            input: $,
            textarea: D,
            ref: k,
            textareaStyle: J,
            autosize: io(r, "autosize"),
            focus: V,
            blur: G,
            select: be,
            clear: he,
            resizeTextarea: We
        }),
        (P,fe)=>gt((O(),
        K("div", or(d(i), {
            class: d(a),
            style: d(W),
            role: P.containerRole,
            onMouseenter: le,
            onMouseleave: oe
        }), [ye(" input "), P.type !== "textarea" ? (O(),
        K(De, {
            key: 0
        }, [ye(" prepend slot "), P.$slots.prepend ? (O(),
        K("div", {
            key: 0,
            class: pe(d(g).be("group", "prepend"))
        }, [Ve(P.$slots, "prepend")], 2)) : ye("v-if", !0), N("div", {
            class: pe(d(l))
        }, [ye(" prefix slot "), P.$slots.prefix || P.prefixIcon ? (O(),
        K("span", {
            key: 0,
            class: pe(d(g).e("prefix"))
        }, [N("span", {
            class: pe(d(g).e("prefix-inner")),
            onClick: V
        }, [Ve(P.$slots, "prefix"), P.prefixIcon ? (O(),
        Ie(d(et), {
            key: 0,
            class: pe(d(g).e("icon"))
        }, {
            default: Te(()=>[(O(),
            Ie(Ct(P.prefixIcon)))]),
            _: 1
        }, 8, ["class"])) : ye("v-if", !0)], 2)], 2)) : ye("v-if", !0), N("input", or({
            id: d(p),
            ref_key: "input",
            ref: $,
            class: d(g).e("inner")
        }, d(c), {
            type: P.showPassword ? B.value ? "text" : "password" : P.type,
            disabled: d(m),
            formatter: P.formatter,
            parser: P.parser,
            readonly: P.readonly,
            autocomplete: P.autocomplete,
            tabindex: P.tabindex,
            "aria-label": P.label,
            placeholder: P.placeholder,
            style: P.inputStyle,
            form: r.form,
            onCompositionstart: xt,
            onCompositionupdate: _,
            onCompositionend: C,
            onInput: ze,
            onFocus: ae,
            onBlur: ue,
            onChange: ot,
            onKeydown: Z
        }), null, 16, O2), ye(" suffix slot "), d(xe) ? (O(),
        K("span", {
            key: 1,
            class: pe(d(g).e("suffix"))
        }, [N("span", {
            class: pe(d(g).e("suffix-inner")),
            onClick: V
        }, [!d(M) || !d(Q) || !d(X) ? (O(),
        K(De, {
            key: 0
        }, [Ve(P.$slots, "suffix"), P.suffixIcon ? (O(),
        Ie(d(et), {
            key: 0,
            class: pe(d(g).e("icon"))
        }, {
            default: Te(()=>[(O(),
            Ie(Ct(P.suffixIcon)))]),
            _: 1
        }, 8, ["class"])) : ye("v-if", !0)], 64)) : ye("v-if", !0), d(M) ? (O(),
        Ie(d(et), {
            key: 1,
            class: pe([d(g).e("icon"), d(g).e("clear")]),
            onMousedown: lt(d(vt), ["prevent"]),
            onClick: he
        }, {
            default: Te(()=>[de(d(gd))]),
            _: 1
        }, 8, ["class", "onMousedown"])) : ye("v-if", !0), d(Q) ? (O(),
        Ie(d(et), {
            key: 2,
            class: pe([d(g).e("icon"), d(g).e("password")]),
            onClick: F
        }, {
            default: Te(()=>[(O(),
            Ie(Ct(d(ne))))]),
            _: 1
        }, 8, ["class"])) : ye("v-if", !0), d(X) ? (O(),
        K("span", {
            key: 3,
            class: pe(d(g).e("count"))
        }, [N("span", {
            class: pe(d(g).e("count-inner"))
        }, we(d(ge)) + " / " + we(d(c).maxlength), 3)], 2)) : ye("v-if", !0), d(te) && d(z) && d(A) ? (O(),
        Ie(d(et), {
            key: 4,
            class: pe([d(g).e("icon"), d(g).e("validateIcon"), d(g).is("loading", d(te) === "validating")])
        }, {
            default: Te(()=>[(O(),
            Ie(Ct(d(z))))]),
            _: 1
        }, 8, ["class"])) : ye("v-if", !0)], 2)], 2)) : ye("v-if", !0)], 2), ye(" append slot "), P.$slots.append ? (O(),
        K("div", {
            key: 1,
            class: pe(d(g).be("group", "append"))
        }, [Ve(P.$slots, "append")], 2)) : ye("v-if", !0)], 64)) : (O(),
        K(De, {
            key: 1
        }, [ye(" textarea "), N("textarea", or({
            id: d(p),
            ref_key: "textarea",
            ref: D,
            class: d(b).e("inner")
        }, d(c), {
            tabindex: P.tabindex,
            disabled: d(m),
            readonly: P.readonly,
            autocomplete: P.autocomplete,
            style: d(J),
            "aria-label": P.label,
            placeholder: P.placeholder,
            form: r.form,
            onCompositionstart: xt,
            onCompositionupdate: _,
            onCompositionend: C,
            onInput: ze,
            onFocus: ae,
            onBlur: ue,
            onChange: ot,
            onKeydown: Z
        }), null, 16, k2), d(X) ? (O(),
        K("span", {
            key: 0,
            style: Qe(L.value),
            class: pe(d(g).e("count"))
        }, we(d(ge)) + " / " + we(d(c).maxlength), 7)) : ye("v-if", !0)], 64))], 16, A2)), [[cr, P.type !== "hidden"]])
    }
});
var P2 = wt(N2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Td = _n(P2)
  , wi = "focus-trap.focus-after-trapped"
  , xi = "focus-trap.focus-after-released"
  , L2 = "focus-trap.focusout-prevented"
  , Qc = {
    cancelable: !0,
    bubbles: !1
}
  , M2 = {
    cancelable: !0,
    bubbles: !1
}
  , Xc = "focusAfterTrapped"
  , Zc = "focusAfterReleased"
  , D2 = Symbol("elFocusTrap")
  , tl = q()
  , Gs = q(0)
  , nl = q(0);
let Mo = 0;
const $d = e=>{
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r=>{
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
  , eu = (e,t)=>{
    for (const n of e)
        if (!B2(n, t))
            return n
}
  , B2 = (e,t)=>{
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
  , F2 = e=>{
    const t = $d(e)
      , n = eu(t, e)
      , r = eu(t.reverse(), e);
    return [n, r]
}
  , U2 = e=>e instanceof HTMLInputElement && "select"in e
  , An = (e,t)=>{
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        nl.value = window.performance.now(),
        e !== n && U2(e) && t && e.select()
    }
}
;
function tu(e, t) {
    const n = [...e]
      , r = e.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
const z2 = ()=>{
    let e = [];
    return {
        push: r=>{
            const o = e[0];
            o && r !== o && o.pause(),
            e = tu(e, r),
            e.unshift(r)
        }
        ,
        remove: r=>{
            var o, s;
            e = tu(e, r),
            (s = (o = e[0]) == null ? void 0 : o.resume) == null || s.call(o)
        }
    }
}
  , j2 = (e,t=!1)=>{
    const n = document.activeElement;
    for (const r of e)
        if (An(r, t),
        document.activeElement !== n)
            return
}
  , nu = z2()
  , H2 = ()=>Gs.value > nl.value
  , Do = ()=>{
    tl.value = "pointer",
    Gs.value = window.performance.now()
}
  , ru = ()=>{
    tl.value = "keyboard",
    Gs.value = window.performance.now()
}
  , V2 = ()=>(Je(()=>{
    Mo === 0 && (document.addEventListener("mousedown", Do),
    document.addEventListener("touchstart", Do),
    document.addEventListener("keydown", ru)),
    Mo++
}
),
Rr(()=>{
    Mo--,
    Mo <= 0 && (document.removeEventListener("mousedown", Do),
    document.removeEventListener("touchstart", Do),
    document.removeEventListener("keydown", ru))
}
),
{
    focusReason: tl,
    lastUserFocusTimestamp: Gs,
    lastAutomatedFocusTimestamp: nl
})
  , Bo = e=>new CustomEvent(L2,{
    ...M2,
    detail: e
})
  , W2 = Ce({
    name: "ElFocusTrap",
    inheritAttrs: !1,
    props: {
        loop: Boolean,
        trapped: Boolean,
        focusTrapEl: Object,
        focusStartEl: {
            type: [Object, String],
            default: "first"
        }
    },
    emits: [Xc, Zc, "focusin", "focusout", "focusout-prevented", "release-requested"],
    setup(e, {emit: t}) {
        const n = q();
        let r, o;
        const {focusReason: s} = V2();
        u2(m=>{
            e.trapped && !i.paused && t("release-requested", m)
        }
        );
        const i = {
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }
          , a = m=>{
            if (!e.loop && !e.trapped || i.paused)
                return;
            const {key: g, altKey: b, ctrlKey: $, metaKey: D, currentTarget: U, shiftKey: R} = m
              , {loop: x} = e
              , B = g === bd.tab && !b && !$ && !D
              , L = document.activeElement;
            if (B && L) {
                const S = U
                  , [k,A] = F2(S);
                if (k && A) {
                    if (!R && L === A) {
                        const z = Bo({
                            focusReason: s.value
                        });
                        t("focusout-prevented", z),
                        z.defaultPrevented || (m.preventDefault(),
                        x && An(k, !0))
                    } else if (R && [k, S].includes(L)) {
                        const z = Bo({
                            focusReason: s.value
                        });
                        t("focusout-prevented", z),
                        z.defaultPrevented || (m.preventDefault(),
                        x && An(A, !0))
                    }
                } else if (L === S) {
                    const z = Bo({
                        focusReason: s.value
                    });
                    t("focusout-prevented", z),
                    z.defaultPrevented || m.preventDefault()
                }
            }
        }
        ;
        _o(D2, {
            focusTrapRef: n,
            onKeydown: a
        }),
        $e(()=>e.focusTrapEl, m=>{
            m && (n.value = m)
        }
        , {
            immediate: !0
        }),
        $e([n], ([m],[g])=>{
            m && (m.addEventListener("keydown", a),
            m.addEventListener("focusin", f),
            m.addEventListener("focusout", u)),
            g && (g.removeEventListener("keydown", a),
            g.removeEventListener("focusin", f),
            g.removeEventListener("focusout", u))
        }
        );
        const l = m=>{
            t(Xc, m)
        }
          , c = m=>t(Zc, m)
          , f = m=>{
            const g = d(n);
            if (!g)
                return;
            const b = m.target
              , $ = m.relatedTarget
              , D = b && g.contains(b);
            e.trapped || $ && g.contains($) || (r = $),
            D && t("focusin", m),
            !i.paused && e.trapped && (D ? o = b : An(o, !0))
        }
          , u = m=>{
            const g = d(n);
            if (!(i.paused || !g))
                if (e.trapped) {
                    const b = m.relatedTarget;
                    !hd(b) && !g.contains(b) && setTimeout(()=>{
                        if (!i.paused && e.trapped) {
                            const $ = Bo({
                                focusReason: s.value
                            });
                            t("focusout-prevented", $),
                            $.defaultPrevented || An(o, !0)
                        }
                    }
                    , 0)
                } else {
                    const b = m.target;
                    b && g.contains(b) || t("focusout", m)
                }
        }
        ;
        async function p() {
            await ft();
            const m = d(n);
            if (m) {
                nu.push(i);
                const g = m.contains(document.activeElement) ? r : document.activeElement;
                if (r = g,
                !m.contains(g)) {
                    const $ = new Event(wi,Qc);
                    m.addEventListener(wi, l),
                    m.dispatchEvent($),
                    $.defaultPrevented || ft(()=>{
                        let D = e.focusStartEl;
                        Ne(D) || (An(D),
                        document.activeElement !== D && (D = "first")),
                        D === "first" && j2($d(m), !0),
                        (document.activeElement === g || D === "container") && An(m)
                    }
                    )
                }
            }
        }
        function h() {
            const m = d(n);
            if (m) {
                m.removeEventListener(wi, l);
                const g = new CustomEvent(xi,{
                    ...Qc,
                    detail: {
                        focusReason: s.value
                    }
                });
                m.addEventListener(xi, c),
                m.dispatchEvent(g),
                !g.defaultPrevented && (s.value == "keyboard" || !H2() || m.contains(document.activeElement)) && An(r != null ? r : document.body),
                m.removeEventListener(xi, l),
                nu.remove(i)
            }
        }
        return Je(()=>{
            e.trapped && p(),
            $e(()=>e.trapped, m=>{
                m ? p() : h()
            }
            )
        }
        ),
        Rr(()=>{
            e.trapped && h()
        }
        ),
        {
            onKeydown: a
        }
    }
});
function K2(e, t, n, r, o, s) {
    return Ve(e.$slots, "default", {
        handleKeydown: e.onKeydown
    })
}
var Y2 = wt(W2, [["render", K2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const q2 = Pt({
    size: {
        type: [Number, String],
        values: Za,
        default: "",
        validator: e=>zt(e)
    },
    shape: {
        type: String,
        values: ["circle", "square"],
        default: "circle"
    },
    icon: {
        type: zn
    },
    src: {
        type: String,
        default: ""
    },
    alt: String,
    srcSet: String,
    fit: {
        type: jt(String),
        default: "cover"
    }
})
  , G2 = {
    error: e=>e instanceof Event
}
  , J2 = ["src", "alt", "srcset"]
  , Q2 = Ce({
    name: "ElAvatar"
})
  , X2 = Ce({
    ...Q2,
    props: q2,
    emits: G2,
    setup(e, {emit: t}) {
        const n = e
          , r = ut("avatar")
          , o = q(!1)
          , s = Y(()=>{
            const {size: c, icon: f, shape: u} = n
              , p = [r.b()];
            return Ne(c) && p.push(r.m(c)),
            f && p.push(r.m("icon")),
            u && p.push(r.m(u)),
            p
        }
        )
          , i = Y(()=>{
            const {size: c} = n;
            return zt(c) ? r.cssVarBlock({
                size: Mr(c) || ""
            }) : void 0
        }
        )
          , a = Y(()=>({
            objectFit: n.fit
        }));
        $e(()=>n.src, ()=>o.value = !1);
        function l(c) {
            o.value = !0,
            t("error", c)
        }
        return (c,f)=>(O(),
        K("span", {
            class: pe(d(s)),
            style: Qe(d(i))
        }, [(c.src || c.srcSet) && !o.value ? (O(),
        K("img", {
            key: 0,
            src: c.src,
            alt: c.alt,
            srcset: c.srcSet,
            style: Qe(d(a)),
            onError: l
        }, null, 44, J2)) : c.icon ? (O(),
        Ie(d(et), {
            key: 1
        }, {
            default: Te(()=>[(O(),
            Ie(Ct(c.icon)))]),
            _: 1
        })) : Ve(c.$slots, "default", {
            key: 2
        })], 6))
    }
});
var Z2 = wt(X2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);
const ex = _n(Z2)
  , Id = Symbol("buttonGroupContextKey")
  , tx = (e,t)=>{
    cs({
        from: "type.text",
        replacement: "link",
        version: "3.0.0",
        scope: "props",
        ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
    }, Y(()=>e.type === "text"));
    const n = Ge(Id, void 0)
      , r = Ed("button")
      , {form: o} = Dr()
      , s = go(Y(()=>n == null ? void 0 : n.size))
      , i = So()
      , a = q()
      , l = $s()
      , c = Y(()=>e.type || (n == null ? void 0 : n.type) || "")
      , f = Y(()=>{
        var m, g, b;
        return (b = (g = e.autoInsertSpace) != null ? g : (m = r.value) == null ? void 0 : m.autoInsertSpace) != null ? b : !1
    }
    )
      , u = Y(()=>e.tag === "button" ? {
        ariaDisabled: i.value || e.loading,
        disabled: i.value || e.loading,
        autofocus: e.autofocus,
        type: e.nativeType
    } : {})
      , p = Y(()=>{
        var m;
        const g = (m = l.default) == null ? void 0 : m.call(l);
        if (f.value && (g == null ? void 0 : g.length) === 1) {
            const b = g[0];
            if ((b == null ? void 0 : b.type) === bo) {
                const $ = b.children;
                return /^\p{Unified_Ideograph}{2}$/u.test($.trim())
            }
        }
        return !1
    }
    );
    return {
        _disabled: i,
        _size: s,
        _type: c,
        _ref: a,
        _props: u,
        shouldAddSpace: p,
        handleClick: m=>{
            e.nativeType === "reset" && (o == null || o.resetFields()),
            t("click", m)
        }
    }
}
  , nx = ["default", "primary", "success", "warning", "info", "danger", "text", ""]
  , rx = ["button", "submit", "reset"]
  , aa = Pt({
    size: Ys,
    disabled: Boolean,
    type: {
        type: String,
        values: nx,
        default: ""
    },
    icon: {
        type: zn
    },
    nativeType: {
        type: String,
        values: rx,
        default: "button"
    },
    loading: Boolean,
    loadingIcon: {
        type: zn,
        default: ()=>Xa
    },
    plain: Boolean,
    text: Boolean,
    link: Boolean,
    bg: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    color: String,
    dark: Boolean,
    autoInsertSpace: {
        type: Boolean,
        default: void 0
    },
    tag: {
        type: jt([String, Object]),
        default: "button"
    }
})
  , ox = {
    click: e=>e instanceof MouseEvent
};
function dt(e, t) {
    sx(e) && (e = "100%");
    var n = ix(e);
    return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)),
    e)
}
function Fo(e) {
    return Math.min(1, Math.max(0, e))
}
function sx(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
}
function ix(e) {
    return typeof e == "string" && e.indexOf("%") !== -1
}
function Ad(e) {
    return e = parseFloat(e),
    (isNaN(e) || e < 0 || e > 1) && (e = 1),
    e
}
function Uo(e) {
    return e <= 1 ? "".concat(Number(e) * 100, "%") : e
}
function nr(e) {
    return e.length === 1 ? "0" + e : String(e)
}
function ax(e, t, n) {
    return {
        r: dt(e, 255) * 255,
        g: dt(t, 255) * 255,
        b: dt(n, 255) * 255
    }
}
function ou(e, t, n) {
    e = dt(e, 255),
    t = dt(t, 255),
    n = dt(n, 255);
    var r = Math.max(e, t, n)
      , o = Math.min(e, t, n)
      , s = 0
      , i = 0
      , a = (r + o) / 2;
    if (r === o)
        i = 0,
        s = 0;
    else {
        var l = r - o;
        switch (i = a > .5 ? l / (2 - r - o) : l / (r + o),
        r) {
        case e:
            s = (t - n) / l + (t < n ? 6 : 0);
            break;
        case t:
            s = (n - e) / l + 2;
            break;
        case n:
            s = (e - t) / l + 4;
            break
        }
        s /= 6
    }
    return {
        h: s,
        s: i,
        l: a
    }
}
function Si(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function lx(e, t, n) {
    var r, o, s;
    if (e = dt(e, 360),
    t = dt(t, 100),
    n = dt(n, 100),
    t === 0)
        o = n,
        s = n,
        r = n;
    else {
        var i = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - i;
        r = Si(a, i, e + 1 / 3),
        o = Si(a, i, e),
        s = Si(a, i, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: o * 255,
        b: s * 255
    }
}
function su(e, t, n) {
    e = dt(e, 255),
    t = dt(t, 255),
    n = dt(n, 255);
    var r = Math.max(e, t, n)
      , o = Math.min(e, t, n)
      , s = 0
      , i = r
      , a = r - o
      , l = r === 0 ? 0 : a / r;
    if (r === o)
        s = 0;
    else {
        switch (r) {
        case e:
            s = (t - n) / a + (t < n ? 6 : 0);
            break;
        case t:
            s = (n - e) / a + 2;
            break;
        case n:
            s = (e - t) / a + 4;
            break
        }
        s /= 6
    }
    return {
        h: s,
        s: l,
        v: i
    }
}
function cx(e, t, n) {
    e = dt(e, 360) * 6,
    t = dt(t, 100),
    n = dt(n, 100);
    var r = Math.floor(e)
      , o = e - r
      , s = n * (1 - t)
      , i = n * (1 - o * t)
      , a = n * (1 - (1 - o) * t)
      , l = r % 6
      , c = [n, i, s, s, a, n][l]
      , f = [a, n, n, i, s, s][l]
      , u = [s, s, a, n, n, i][l];
    return {
        r: c * 255,
        g: f * 255,
        b: u * 255
    }
}
function iu(e, t, n, r) {
    var o = [nr(Math.round(e).toString(16)), nr(Math.round(t).toString(16)), nr(Math.round(n).toString(16))];
    return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
}
function ux(e, t, n, r, o) {
    var s = [nr(Math.round(e).toString(16)), nr(Math.round(t).toString(16)), nr(Math.round(n).toString(16)), nr(fx(r))];
    return o && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("")
}
function fx(e) {
    return Math.round(parseFloat(e) * 255).toString(16)
}
function au(e) {
    return kt(e) / 255
}
function kt(e) {
    return parseInt(e, 16)
}
function dx(e) {
    return {
        r: e >> 16,
        g: (e & 65280) >> 8,
        b: e & 255
    }
}
var la = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};
function px(e) {
    var t = {
        r: 0,
        g: 0,
        b: 0
    }
      , n = 1
      , r = null
      , o = null
      , s = null
      , i = !1
      , a = !1;
    return typeof e == "string" && (e = vx(e)),
    typeof e == "object" && (fn(e.r) && fn(e.g) && fn(e.b) ? (t = ax(e.r, e.g, e.b),
    i = !0,
    a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : fn(e.h) && fn(e.s) && fn(e.v) ? (r = Uo(e.s),
    o = Uo(e.v),
    t = cx(e.h, r, o),
    i = !0,
    a = "hsv") : fn(e.h) && fn(e.s) && fn(e.l) && (r = Uo(e.s),
    s = Uo(e.l),
    t = lx(e.h, r, s),
    i = !0,
    a = "hsl"),
    Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
    n = Ad(n),
    {
        ok: i,
        format: e.format || a,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n
    }
}
var hx = "[-\\+]?\\d+%?"
  , mx = "[-\\+]?\\d*\\.\\d+%?"
  , kn = "(?:".concat(mx, ")|(?:").concat(hx, ")")
  , Ei = "[\\s|\\(]+(".concat(kn, ")[,|\\s]+(").concat(kn, ")[,|\\s]+(").concat(kn, ")\\s*\\)?")
  , Ci = "[\\s|\\(]+(".concat(kn, ")[,|\\s]+(").concat(kn, ")[,|\\s]+(").concat(kn, ")[,|\\s]+(").concat(kn, ")\\s*\\)?")
  , qt = {
    CSS_UNIT: new RegExp(kn),
    rgb: new RegExp("rgb" + Ei),
    rgba: new RegExp("rgba" + Ci),
    hsl: new RegExp("hsl" + Ei),
    hsla: new RegExp("hsla" + Ci),
    hsv: new RegExp("hsv" + Ei),
    hsva: new RegExp("hsva" + Ci),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function vx(e) {
    if (e = e.trim().toLowerCase(),
    e.length === 0)
        return !1;
    var t = !1;
    if (la[e])
        e = la[e],
        t = !0;
    else if (e === "transparent")
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
    var n = qt.rgb.exec(e);
    return n ? {
        r: n[1],
        g: n[2],
        b: n[3]
    } : (n = qt.rgba.exec(e),
    n ? {
        r: n[1],
        g: n[2],
        b: n[3],
        a: n[4]
    } : (n = qt.hsl.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        l: n[3]
    } : (n = qt.hsla.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        l: n[3],
        a: n[4]
    } : (n = qt.hsv.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        v: n[3]
    } : (n = qt.hsva.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        v: n[3],
        a: n[4]
    } : (n = qt.hex8.exec(e),
    n ? {
        r: kt(n[1]),
        g: kt(n[2]),
        b: kt(n[3]),
        a: au(n[4]),
        format: t ? "name" : "hex8"
    } : (n = qt.hex6.exec(e),
    n ? {
        r: kt(n[1]),
        g: kt(n[2]),
        b: kt(n[3]),
        format: t ? "name" : "hex"
    } : (n = qt.hex4.exec(e),
    n ? {
        r: kt(n[1] + n[1]),
        g: kt(n[2] + n[2]),
        b: kt(n[3] + n[3]),
        a: au(n[4] + n[4]),
        format: t ? "name" : "hex8"
    } : (n = qt.hex3.exec(e),
    n ? {
        r: kt(n[1] + n[1]),
        g: kt(n[2] + n[2]),
        b: kt(n[3] + n[3]),
        format: t ? "name" : "hex"
    } : !1)))))))))
}
function fn(e) {
    return Boolean(qt.CSS_UNIT.exec(String(e)))
}
var gx = function() {
    function e(t, n) {
        t === void 0 && (t = ""),
        n === void 0 && (n = {});
        var r;
        if (t instanceof e)
            return t;
        typeof t == "number" && (t = dx(t)),
        this.originalInput = t;
        var o = px(t);
        this.originalInput = t,
        this.r = o.r,
        this.g = o.g,
        this.b = o.b,
        this.a = o.a,
        this.roundA = Math.round(100 * this.a) / 100,
        this.format = (r = n.format) !== null && r !== void 0 ? r : o.format,
        this.gradientType = n.gradientType,
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        this.isValid = o.ok
    }
    return e.prototype.isDark = function() {
        return this.getBrightness() < 128
    }
    ,
    e.prototype.isLight = function() {
        return !this.isDark()
    }
    ,
    e.prototype.getBrightness = function() {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
    }
    ,
    e.prototype.getLuminance = function() {
        var t = this.toRgb(), n, r, o, s = t.r / 255, i = t.g / 255, a = t.b / 255;
        return s <= .03928 ? n = s / 12.92 : n = Math.pow((s + .055) / 1.055, 2.4),
        i <= .03928 ? r = i / 12.92 : r = Math.pow((i + .055) / 1.055, 2.4),
        a <= .03928 ? o = a / 12.92 : o = Math.pow((a + .055) / 1.055, 2.4),
        .2126 * n + .7152 * r + .0722 * o
    }
    ,
    e.prototype.getAlpha = function() {
        return this.a
    }
    ,
    e.prototype.setAlpha = function(t) {
        return this.a = Ad(t),
        this.roundA = Math.round(100 * this.a) / 100,
        this
    }
    ,
    e.prototype.isMonochrome = function() {
        var t = this.toHsl().s;
        return t === 0
    }
    ,
    e.prototype.toHsv = function() {
        var t = su(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            v: t.v,
            a: this.a
        }
    }
    ,
    e.prototype.toHsvString = function() {
        var t = su(this.r, this.g, this.b)
          , n = Math.round(t.h * 360)
          , r = Math.round(t.s * 100)
          , o = Math.round(t.v * 100);
        return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toHsl = function() {
        var t = ou(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            l: t.l,
            a: this.a
        }
    }
    ,
    e.prototype.toHslString = function() {
        var t = ou(this.r, this.g, this.b)
          , n = Math.round(t.h * 360)
          , r = Math.round(t.s * 100)
          , o = Math.round(t.l * 100);
        return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toHex = function(t) {
        return t === void 0 && (t = !1),
        iu(this.r, this.g, this.b, t)
    }
    ,
    e.prototype.toHexString = function(t) {
        return t === void 0 && (t = !1),
        "#" + this.toHex(t)
    }
    ,
    e.prototype.toHex8 = function(t) {
        return t === void 0 && (t = !1),
        ux(this.r, this.g, this.b, this.a, t)
    }
    ,
    e.prototype.toHex8String = function(t) {
        return t === void 0 && (t = !1),
        "#" + this.toHex8(t)
    }
    ,
    e.prototype.toHexShortString = function(t) {
        return t === void 0 && (t = !1),
        this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
    }
    ,
    e.prototype.toRgb = function() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
        }
    }
    ,
    e.prototype.toRgbString = function() {
        var t = Math.round(this.r)
          , n = Math.round(this.g)
          , r = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toPercentageRgb = function() {
        var t = function(n) {
            return "".concat(Math.round(dt(n, 255) * 100), "%")
        };
        return {
            r: t(this.r),
            g: t(this.g),
            b: t(this.b),
            a: this.a
        }
    }
    ,
    e.prototype.toPercentageRgbString = function() {
        var t = function(n) {
            return Math.round(dt(n, 255) * 100)
        };
        return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toName = function() {
        if (this.a === 0)
            return "transparent";
        if (this.a < 1)
            return !1;
        for (var t = "#" + iu(this.r, this.g, this.b, !1), n = 0, r = Object.entries(la); n < r.length; n++) {
            var o = r[n]
              , s = o[0]
              , i = o[1];
            if (t === i)
                return s
        }
        return !1
    }
    ,
    e.prototype.toString = function(t) {
        var n = Boolean(t);
        t = t != null ? t : this.format;
        var r = !1
          , o = this.a < 1 && this.a >= 0
          , s = !n && o && (t.startsWith("hex") || t === "name");
        return s ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()),
        t === "prgb" && (r = this.toPercentageRgbString()),
        (t === "hex" || t === "hex6") && (r = this.toHexString()),
        t === "hex3" && (r = this.toHexString(!0)),
        t === "hex4" && (r = this.toHex8String(!0)),
        t === "hex8" && (r = this.toHex8String()),
        t === "name" && (r = this.toName()),
        t === "hsl" && (r = this.toHslString()),
        t === "hsv" && (r = this.toHsvString()),
        r || this.toHexString())
    }
    ,
    e.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }
    ,
    e.prototype.clone = function() {
        return new e(this.toString())
    }
    ,
    e.prototype.lighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l += t / 100,
        n.l = Fo(n.l),
        new e(n)
    }
    ,
    e.prototype.brighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))),
        n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))),
        n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))),
        new e(n)
    }
    ,
    e.prototype.darken = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l -= t / 100,
        n.l = Fo(n.l),
        new e(n)
    }
    ,
    e.prototype.tint = function(t) {
        return t === void 0 && (t = 10),
        this.mix("white", t)
    }
    ,
    e.prototype.shade = function(t) {
        return t === void 0 && (t = 10),
        this.mix("black", t)
    }
    ,
    e.prototype.desaturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s -= t / 100,
        n.s = Fo(n.s),
        new e(n)
    }
    ,
    e.prototype.saturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s += t / 100,
        n.s = Fo(n.s),
        new e(n)
    }
    ,
    e.prototype.greyscale = function() {
        return this.desaturate(100)
    }
    ,
    e.prototype.spin = function(t) {
        var n = this.toHsl()
          , r = (n.h + t) % 360;
        return n.h = r < 0 ? 360 + r : r,
        new e(n)
    }
    ,
    e.prototype.mix = function(t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb()
          , o = new e(t).toRgb()
          , s = n / 100
          , i = {
            r: (o.r - r.r) * s + r.r,
            g: (o.g - r.g) * s + r.g,
            b: (o.b - r.b) * s + r.b,
            a: (o.a - r.a) * s + r.a
        };
        return new e(i)
    }
    ,
    e.prototype.analogous = function(t, n) {
        t === void 0 && (t = 6),
        n === void 0 && (n = 30);
        var r = this.toHsl()
          , o = 360 / n
          , s = [this];
        for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
            r.h = (r.h + o) % 360,
            s.push(new e(r));
        return s
    }
    ,
    e.prototype.complement = function() {
        var t = this.toHsl();
        return t.h = (t.h + 180) % 360,
        new e(t)
    }
    ,
    e.prototype.monochromatic = function(t) {
        t === void 0 && (t = 6);
        for (var n = this.toHsv(), r = n.h, o = n.s, s = n.v, i = [], a = 1 / t; t--; )
            i.push(new e({
                h: r,
                s: o,
                v: s
            })),
            s = (s + a) % 1;
        return i
    }
    ,
    e.prototype.splitcomplement = function() {
        var t = this.toHsl()
          , n = t.h;
        return [this, new e({
            h: (n + 72) % 360,
            s: t.s,
            l: t.l
        }), new e({
            h: (n + 216) % 360,
            s: t.s,
            l: t.l
        })]
    }
    ,
    e.prototype.onBackground = function(t) {
        var n = this.toRgb()
          , r = new e(t).toRgb()
          , o = n.a + r.a * (1 - n.a);
        return new e({
            r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
            g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
            b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
            a: o
        })
    }
    ,
    e.prototype.triad = function() {
        return this.polyad(3)
    }
    ,
    e.prototype.tetrad = function() {
        return this.polyad(4)
    }
    ,
    e.prototype.polyad = function(t) {
        for (var n = this.toHsl(), r = n.h, o = [this], s = 360 / t, i = 1; i < t; i++)
            o.push(new e({
                h: (r + i * s) % 360,
                s: n.s,
                l: n.l
            }));
        return o
    }
    ,
    e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString()
    }
    ,
    e
}();
function $n(e, t=20) {
    return e.mix("#141414", t).toString()
}
function yx(e) {
    const t = So()
      , n = ut("button");
    return Y(()=>{
        let r = {};
        const o = e.color;
        if (o) {
            const s = new gx(o)
              , i = e.dark ? s.tint(20).toString() : $n(s, 20);
            if (e.plain)
                r = n.cssVarBlock({
                    "bg-color": e.dark ? $n(s, 90) : s.tint(90).toString(),
                    "text-color": o,
                    "border-color": e.dark ? $n(s, 50) : s.tint(50).toString(),
                    "hover-text-color": `var(${n.cssVarName("color-white")})`,
                    "hover-bg-color": o,
                    "hover-border-color": o,
                    "active-bg-color": i,
                    "active-text-color": `var(${n.cssVarName("color-white")})`,
                    "active-border-color": i
                }),
                t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? $n(s, 90) : s.tint(90).toString(),
                r[n.cssVarBlockName("disabled-text-color")] = e.dark ? $n(s, 50) : s.tint(50).toString(),
                r[n.cssVarBlockName("disabled-border-color")] = e.dark ? $n(s, 80) : s.tint(80).toString());
            else {
                const a = e.dark ? $n(s, 30) : s.tint(30).toString()
                  , l = s.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
                if (r = n.cssVarBlock({
                    "bg-color": o,
                    "text-color": l,
                    "border-color": o,
                    "hover-bg-color": a,
                    "hover-text-color": l,
                    "hover-border-color": a,
                    "active-bg-color": i,
                    "active-border-color": i
                }),
                t.value) {
                    const c = e.dark ? $n(s, 50) : s.tint(50).toString();
                    r[n.cssVarBlockName("disabled-bg-color")] = c,
                    r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`,
                    r[n.cssVarBlockName("disabled-border-color")] = c
                }
            }
        }
        return r
    }
    )
}
const _x = Ce({
    name: "ElButton"
})
  , bx = Ce({
    ..._x,
    props: aa,
    emits: ox,
    setup(e, {expose: t, emit: n}) {
        const r = e
          , o = yx(r)
          , s = ut("button")
          , {_ref: i, _size: a, _type: l, _disabled: c, _props: f, shouldAddSpace: u, handleClick: p} = tx(r, n);
        return t({
            ref: i,
            size: a,
            type: l,
            disabled: c,
            shouldAddSpace: u
        }),
        (h,m)=>(O(),
        Ie(Ct(h.tag), or({
            ref_key: "_ref",
            ref: i
        }, d(f), {
            class: [d(s).b(), d(s).m(d(l)), d(s).m(d(a)), d(s).is("disabled", d(c)), d(s).is("loading", h.loading), d(s).is("plain", h.plain), d(s).is("round", h.round), d(s).is("circle", h.circle), d(s).is("text", h.text), d(s).is("link", h.link), d(s).is("has-bg", h.bg)],
            style: d(o),
            onClick: d(p)
        }), {
            default: Te(()=>[h.loading ? (O(),
            K(De, {
                key: 0
            }, [h.$slots.loading ? Ve(h.$slots, "loading", {
                key: 0
            }) : (O(),
            Ie(d(et), {
                key: 1,
                class: pe(d(s).is("loading"))
            }, {
                default: Te(()=>[(O(),
                Ie(Ct(h.loadingIcon)))]),
                _: 1
            }, 8, ["class"]))], 64)) : h.icon || h.$slots.icon ? (O(),
            Ie(d(et), {
                key: 1
            }, {
                default: Te(()=>[h.icon ? (O(),
                Ie(Ct(h.icon), {
                    key: 0
                })) : Ve(h.$slots, "icon", {
                    key: 1
                })]),
                _: 3
            })) : ye("v-if", !0), h.$slots.default ? (O(),
            K("span", {
                key: 2,
                class: pe({
                    [d(s).em("text", "expand")]: d(u)
                })
            }, [Ve(h.$slots, "default")], 2)) : ye("v-if", !0)]),
            _: 3
        }, 16, ["class", "style", "onClick"]))
    }
});
var wx = wt(bx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const xx = {
    size: aa.size,
    type: aa.type
}
  , Sx = Ce({
    name: "ElButtonGroup"
})
  , Ex = Ce({
    ...Sx,
    props: xx,
    setup(e) {
        const t = e;
        _o(Id, $t({
            size: io(t, "size"),
            type: io(t, "type")
        }));
        const n = ut("button");
        return (r,o)=>(O(),
        K("div", {
            class: pe(`${d(n).b("group")}`)
        }, [Ve(r.$slots, "default")], 2))
    }
});
var Od = wt(Ex, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Cx = _n(wx, {
    ButtonGroup: Od
});
Ks(Od);
var rl = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(tr, function() {
        var n = 1e3
          , r = 6e4
          , o = 36e5
          , s = "millisecond"
          , i = "second"
          , a = "minute"
          , l = "hour"
          , c = "day"
          , f = "week"
          , u = "month"
          , p = "quarter"
          , h = "year"
          , m = "date"
          , g = "Invalid Date"
          , b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
          , $ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , D = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(ne) {
                var W = ["th", "st", "nd", "rd"]
                  , J = ne % 100;
                return "[" + ne + (W[(J - 20) % 10] || W[J] || W[0]) + "]"
            }
        }
          , U = function(ne, W, J) {
            var re = String(ne);
            return !re || re.length >= W ? ne : "" + Array(W + 1 - re.length).join(J) + ne
        }
          , R = {
            s: U,
            z: function(ne) {
                var W = -ne.utcOffset()
                  , J = Math.abs(W)
                  , re = Math.floor(J / 60)
                  , M = J % 60;
                return (W <= 0 ? "+" : "-") + U(re, 2, "0") + ":" + U(M, 2, "0")
            },
            m: function ne(W, J) {
                if (W.date() < J.date())
                    return -ne(J, W);
                var re = 12 * (J.year() - W.year()) + (J.month() - W.month())
                  , M = W.clone().add(re, u)
                  , Q = J - M < 0
                  , X = W.clone().add(re + (Q ? -1 : 1), u);
                return +(-(re + (J - M) / (Q ? M - X : X - M)) || 0)
            },
            a: function(ne) {
                return ne < 0 ? Math.ceil(ne) || 0 : Math.floor(ne)
            },
            p: function(ne) {
                return {
                    M: u,
                    y: h,
                    w: f,
                    d: c,
                    D: m,
                    h: l,
                    m: a,
                    s: i,
                    ms: s,
                    Q: p
                }[ne] || String(ne || "").toLowerCase().replace(/s$/, "")
            },
            u: function(ne) {
                return ne === void 0
            }
        }
          , x = "en"
          , B = {};
        B[x] = D;
        var L = function(ne) {
            return ne instanceof te
        }
          , S = function ne(W, J, re) {
            var M;
            if (!W)
                return x;
            if (typeof W == "string") {
                var Q = W.toLowerCase();
                B[Q] && (M = Q),
                J && (B[Q] = J,
                M = Q);
                var X = W.split("-");
                if (!M && X.length > 1)
                    return ne(X[0])
            } else {
                var ge = W.name;
                B[ge] = W,
                M = ge
            }
            return !re && M && (x = M),
            M || !re && x
        }
          , k = function(ne, W) {
            if (L(ne))
                return ne.clone();
            var J = typeof W == "object" ? W : {};
            return J.date = ne,
            J.args = arguments,
            new te(J)
        }
          , A = R;
        A.l = S,
        A.i = L,
        A.w = function(ne, W) {
            return k(ne, {
                locale: W.$L,
                utc: W.$u,
                x: W.$x,
                $offset: W.$offset
            })
        }
        ;
        var te = function() {
            function ne(J) {
                this.$L = S(J.locale, null, !0),
                this.parse(J)
            }
            var W = ne.prototype;
            return W.parse = function(J) {
                this.$d = function(re) {
                    var M = re.date
                      , Q = re.utc;
                    if (M === null)
                        return new Date(NaN);
                    if (A.u(M))
                        return new Date;
                    if (M instanceof Date)
                        return new Date(M);
                    if (typeof M == "string" && !/Z$/i.test(M)) {
                        var X = M.match(b);
                        if (X) {
                            var ge = X[2] - 1 || 0
                              , Se = (X[7] || "0").substring(0, 3);
                            return Q ? new Date(Date.UTC(X[1], ge, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, Se)) : new Date(X[1],ge,X[3] || 1,X[4] || 0,X[5] || 0,X[6] || 0,Se)
                        }
                    }
                    return new Date(M)
                }(J),
                this.$x = J.x || {},
                this.init()
            }
            ,
            W.init = function() {
                var J = this.$d;
                this.$y = J.getFullYear(),
                this.$M = J.getMonth(),
                this.$D = J.getDate(),
                this.$W = J.getDay(),
                this.$H = J.getHours(),
                this.$m = J.getMinutes(),
                this.$s = J.getSeconds(),
                this.$ms = J.getMilliseconds()
            }
            ,
            W.$utils = function() {
                return A
            }
            ,
            W.isValid = function() {
                return this.$d.toString() !== g
            }
            ,
            W.isSame = function(J, re) {
                var M = k(J);
                return this.startOf(re) <= M && M <= this.endOf(re)
            }
            ,
            W.isAfter = function(J, re) {
                return k(J) < this.startOf(re)
            }
            ,
            W.isBefore = function(J, re) {
                return this.endOf(re) < k(J)
            }
            ,
            W.$g = function(J, re, M) {
                return A.u(J) ? this[re] : this.set(M, J)
            }
            ,
            W.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            W.valueOf = function() {
                return this.$d.getTime()
            }
            ,
            W.startOf = function(J, re) {
                var M = this
                  , Q = !!A.u(re) || re
                  , X = A.p(J)
                  , ge = function(rt, ze) {
                    var ot = A.w(M.$u ? Date.UTC(M.$y, ze, rt) : new Date(M.$y,ze,rt), M);
                    return Q ? ot : ot.endOf(c)
                }
                  , Se = function(rt, ze) {
                    return A.w(M.toDate()[rt].apply(M.toDate("s"), (Q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ze)), M)
                }
                  , xe = this.$W
                  , Ue = this.$M
                  , at = this.$D
                  , We = "set" + (this.$u ? "UTC" : "");
                switch (X) {
                case h:
                    return Q ? ge(1, 0) : ge(31, 11);
                case u:
                    return Q ? ge(1, Ue) : ge(0, Ue + 1);
                case f:
                    var Xe = this.$locale().weekStart || 0
                      , pt = (xe < Xe ? xe + 7 : xe) - Xe;
                    return ge(Q ? at - pt : at + (6 - pt), Ue);
                case c:
                case m:
                    return Se(We + "Hours", 0);
                case l:
                    return Se(We + "Minutes", 1);
                case a:
                    return Se(We + "Seconds", 2);
                case i:
                    return Se(We + "Milliseconds", 3);
                default:
                    return this.clone()
                }
            }
            ,
            W.endOf = function(J) {
                return this.startOf(J, !1)
            }
            ,
            W.$set = function(J, re) {
                var M, Q = A.p(J), X = "set" + (this.$u ? "UTC" : ""), ge = (M = {},
                M[c] = X + "Date",
                M[m] = X + "Date",
                M[u] = X + "Month",
                M[h] = X + "FullYear",
                M[l] = X + "Hours",
                M[a] = X + "Minutes",
                M[i] = X + "Seconds",
                M[s] = X + "Milliseconds",
                M)[Q], Se = Q === c ? this.$D + (re - this.$W) : re;
                if (Q === u || Q === h) {
                    var xe = this.clone().set(m, 1);
                    xe.$d[ge](Se),
                    xe.init(),
                    this.$d = xe.set(m, Math.min(this.$D, xe.daysInMonth())).$d
                } else
                    ge && this.$d[ge](Se);
                return this.init(),
                this
            }
            ,
            W.set = function(J, re) {
                return this.clone().$set(J, re)
            }
            ,
            W.get = function(J) {
                return this[A.p(J)]()
            }
            ,
            W.add = function(J, re) {
                var M, Q = this;
                J = Number(J);
                var X = A.p(re)
                  , ge = function(Ue) {
                    var at = k(Q);
                    return A.w(at.date(at.date() + Math.round(Ue * J)), Q)
                };
                if (X === u)
                    return this.set(u, this.$M + J);
                if (X === h)
                    return this.set(h, this.$y + J);
                if (X === c)
                    return ge(1);
                if (X === f)
                    return ge(7);
                var Se = (M = {},
                M[a] = r,
                M[l] = o,
                M[i] = n,
                M)[X] || 1
                  , xe = this.$d.getTime() + J * Se;
                return A.w(xe, this)
            }
            ,
            W.subtract = function(J, re) {
                return this.add(-1 * J, re)
            }
            ,
            W.format = function(J) {
                var re = this
                  , M = this.$locale();
                if (!this.isValid())
                    return M.invalidDate || g;
                var Q = J || "YYYY-MM-DDTHH:mm:ssZ"
                  , X = A.z(this)
                  , ge = this.$H
                  , Se = this.$m
                  , xe = this.$M
                  , Ue = M.weekdays
                  , at = M.months
                  , We = function(ze, ot, xt, _) {
                    return ze && (ze[ot] || ze(re, Q)) || xt[ot].slice(0, _)
                }
                  , Xe = function(ze) {
                    return A.s(ge % 12 || 12, ze, "0")
                }
                  , pt = M.meridiem || function(ze, ot, xt) {
                    var _ = ze < 12 ? "AM" : "PM";
                    return xt ? _.toLowerCase() : _
                }
                  , rt = {
                    YY: String(this.$y).slice(-2),
                    YYYY: A.s(this.$y, 4, "0"),
                    M: xe + 1,
                    MM: A.s(xe + 1, 2, "0"),
                    MMM: We(M.monthsShort, xe, at, 3),
                    MMMM: We(at, xe),
                    D: this.$D,
                    DD: A.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: We(M.weekdaysMin, this.$W, Ue, 2),
                    ddd: We(M.weekdaysShort, this.$W, Ue, 3),
                    dddd: Ue[this.$W],
                    H: String(ge),
                    HH: A.s(ge, 2, "0"),
                    h: Xe(1),
                    hh: Xe(2),
                    a: pt(ge, Se, !0),
                    A: pt(ge, Se, !1),
                    m: String(Se),
                    mm: A.s(Se, 2, "0"),
                    s: String(this.$s),
                    ss: A.s(this.$s, 2, "0"),
                    SSS: A.s(this.$ms, 3, "0"),
                    Z: X
                };
                return Q.replace($, function(ze, ot) {
                    return ot || rt[ze] || X.replace(":", "")
                })
            }
            ,
            W.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            W.diff = function(J, re, M) {
                var Q, X = A.p(re), ge = k(J), Se = (ge.utcOffset() - this.utcOffset()) * r, xe = this - ge, Ue = A.m(this, ge);
                return Ue = (Q = {},
                Q[h] = Ue / 12,
                Q[u] = Ue,
                Q[p] = Ue / 3,
                Q[f] = (xe - Se) / 6048e5,
                Q[c] = (xe - Se) / 864e5,
                Q[l] = xe / o,
                Q[a] = xe / r,
                Q[i] = xe / n,
                Q)[X] || xe,
                M ? Ue : A.a(Ue)
            }
            ,
            W.daysInMonth = function() {
                return this.endOf(u).$D
            }
            ,
            W.$locale = function() {
                return B[this.$L]
            }
            ,
            W.locale = function(J, re) {
                if (!J)
                    return this.$L;
                var M = this.clone()
                  , Q = S(J, re, !0);
                return Q && (M.$L = Q),
                M
            }
            ,
            W.clone = function() {
                return A.w(this.$d, this)
            }
            ,
            W.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            W.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            W.toISOString = function() {
                return this.$d.toISOString()
            }
            ,
            W.toString = function() {
                return this.$d.toUTCString()
            }
            ,
            ne
        }()
          , z = te.prototype;
        return k.prototype = z,
        [["$ms", s], ["$s", i], ["$m", a], ["$H", l], ["$W", c], ["$M", u], ["$y", h], ["$D", m]].forEach(function(ne) {
            z[ne[1]] = function(W) {
                return this.$g(W, ne[0], ne[1])
            }
        }),
        k.extend = function(ne, W) {
            return ne.$i || (ne(W, te, k),
            ne.$i = !0),
            k
        }
        ,
        k.locale = S,
        k.isDayjs = L,
        k.unix = function(ne) {
            return k(1e3 * ne)
        }
        ,
        k.en = B[x],
        k.Ls = B,
        k.p = {},
        k
    })
}
)(rl);
const kd = rl.exports
  , Tx = Pt({
    initialIndex: {
        type: Number,
        default: 0
    },
    height: {
        type: String,
        default: ""
    },
    trigger: {
        type: String,
        values: ["hover", "click"],
        default: "hover"
    },
    autoplay: {
        type: Boolean,
        default: !0
    },
    interval: {
        type: Number,
        default: 3e3
    },
    indicatorPosition: {
        type: String,
        values: ["", "none", "outside"],
        default: ""
    },
    arrow: {
        type: String,
        values: ["always", "hover", "never"],
        default: "hover"
    },
    type: {
        type: String,
        values: ["", "card"],
        default: ""
    },
    loop: {
        type: Boolean,
        default: !0
    },
    direction: {
        type: String,
        values: ["horizontal", "vertical"],
        default: "horizontal"
    },
    pauseOnHover: {
        type: Boolean,
        default: !0
    }
})
  , $x = {
    change: (e,t)=>[e, t].every(zt)
}
  , Rd = Symbol("carouselContextKey")
  , lu = 300
  , Ix = (e,t,n)=>{
    const {children: r, addChild: o, removeChild: s} = v2(Ot(), "ElCarouselItem")
      , i = q(-1)
      , a = q(null)
      , l = q(!1)
      , c = q()
      , f = q(0)
      , u = Y(()=>e.arrow !== "never" && !d(m))
      , p = Y(()=>r.value.some(X=>X.props.label.toString().length > 0))
      , h = Y(()=>e.type === "card")
      , m = Y(()=>e.direction === "vertical")
      , g = Y(()=>e.height !== "auto" ? {
        height: e.height
    } : {
        height: `${f.value}px`,
        overflow: "hidden"
    })
      , b = ra(X=>{
        x(X)
    }
    , lu, {
        trailing: !0
    })
      , $ = ra(X=>{
        ne(X)
    }
    , lu);
    function D() {
        a.value && (clearInterval(a.value),
        a.value = null)
    }
    function U() {
        e.interval <= 0 || !e.autoplay || a.value || (a.value = setInterval(()=>R(), e.interval))
    }
    const R = ()=>{
        i.value < r.value.length - 1 ? i.value = i.value + 1 : e.loop && (i.value = 0)
    }
    ;
    function x(X) {
        if (Ne(X)) {
            const xe = r.value.filter(Ue=>Ue.props.name === X);
            xe.length > 0 && (X = r.value.indexOf(xe[0]))
        }
        if (X = Number(X),
        Number.isNaN(X) || X !== Math.floor(X))
            return;
        const ge = r.value.length
          , Se = i.value;
        X < 0 ? i.value = e.loop ? ge - 1 : 0 : X >= ge ? i.value = e.loop ? 0 : ge - 1 : i.value = X,
        Se === i.value && B(Se),
        re()
    }
    function B(X) {
        r.value.forEach((ge,Se)=>{
            ge.translateItem(Se, i.value, X)
        }
        )
    }
    function L(X, ge) {
        var Se, xe, Ue, at;
        const We = d(r)
          , Xe = We.length;
        if (Xe === 0 || !X.states.inStage)
            return !1;
        const pt = ge + 1
          , rt = ge - 1
          , ze = Xe - 1
          , ot = We[ze].states.active
          , xt = We[0].states.active
          , _ = (xe = (Se = We[pt]) == null ? void 0 : Se.states) == null ? void 0 : xe.active
          , C = (at = (Ue = We[rt]) == null ? void 0 : Ue.states) == null ? void 0 : at.active;
        return ge === ze && xt || _ ? "left" : ge === 0 && ot || C ? "right" : !1
    }
    function S() {
        l.value = !0,
        e.pauseOnHover && D()
    }
    function k() {
        l.value = !1,
        U()
    }
    function A(X) {
        d(m) || r.value.forEach((ge,Se)=>{
            X === L(ge, Se) && (ge.states.hover = !0)
        }
        )
    }
    function te() {
        d(m) || r.value.forEach(X=>{
            X.states.hover = !1
        }
        )
    }
    function z(X) {
        i.value = X
    }
    function ne(X) {
        e.trigger === "hover" && X !== i.value && (i.value = X)
    }
    function W() {
        x(i.value - 1)
    }
    function J() {
        x(i.value + 1)
    }
    function re() {
        D(),
        U()
    }
    function M(X) {
        e.height === "auto" && (f.value = X)
    }
    $e(()=>i.value, (X,ge)=>{
        B(ge),
        ge > -1 && t("change", X, ge)
    }
    ),
    $e(()=>e.autoplay, X=>{
        X ? U() : D()
    }
    ),
    $e(()=>e.loop, ()=>{
        x(i.value)
    }
    ),
    $e(()=>e.interval, ()=>{
        re()
    }
    ),
    $e(()=>r.value, ()=>{
        r.value.length > 0 && x(e.initialIndex)
    }
    );
    const Q = Gr();
    return Je(()=>{
        Q.value = Zf(c.value, ()=>{
            B()
        }
        ),
        U()
    }
    ),
    Rr(()=>{
        D(),
        c.value && Q.value && Q.value.stop()
    }
    ),
    _o(Rd, {
        root: c,
        isCardType: h,
        isVertical: m,
        items: r,
        loop: e.loop,
        addItem: o,
        removeItem: s,
        setActiveItem: x,
        setContainerHeight: M
    }),
    {
        root: c,
        activeIndex: i,
        arrowDisplay: u,
        hasLabel: p,
        hover: l,
        isCardType: h,
        items: r,
        isVertical: m,
        containerStyle: g,
        handleButtonEnter: A,
        handleButtonLeave: te,
        handleIndicatorClick: z,
        handleMouseEnter: S,
        handleMouseLeave: k,
        setActiveItem: x,
        prev: W,
        next: J,
        throttledArrowClick: b,
        throttledIndicatorHover: $
    }
}
  , Ax = ["onMouseenter", "onClick"]
  , Ox = {
    key: 0
}
  , kx = "ElCarousel"
  , Rx = Ce({
    name: kx
})
  , Nx = Ce({
    ...Rx,
    props: Tx,
    emits: $x,
    setup(e, {expose: t, emit: n}) {
        const r = e
          , {root: o, activeIndex: s, arrowDisplay: i, hasLabel: a, hover: l, isCardType: c, items: f, isVertical: u, containerStyle: p, handleButtonEnter: h, handleButtonLeave: m, handleIndicatorClick: g, handleMouseEnter: b, handleMouseLeave: $, setActiveItem: D, prev: U, next: R, throttledArrowClick: x, throttledIndicatorHover: B} = Ix(r, n)
          , L = ut("carousel")
          , S = Y(()=>{
            const A = [L.b(), L.m(r.direction)];
            return d(c) && A.push(L.m("card")),
            A
        }
        )
          , k = Y(()=>{
            const A = [L.e("indicators"), L.em("indicators", r.direction)];
            return d(a) && A.push(L.em("indicators", "labels")),
            r.indicatorPosition === "outside" && A.push(L.em("indicators", "outside")),
            d(u) && A.push(L.em("indicators", "right")),
            A
        }
        );
        return t({
            setActiveItem: D,
            prev: U,
            next: R
        }),
        (A,te)=>(O(),
        K("div", {
            ref_key: "root",
            ref: o,
            class: pe(d(S)),
            onMouseenter: te[6] || (te[6] = lt((...z)=>d(b) && d(b)(...z), ["stop"])),
            onMouseleave: te[7] || (te[7] = lt((...z)=>d($) && d($)(...z), ["stop"]))
        }, [N("div", {
            class: pe(d(L).e("container")),
            style: Qe(d(p))
        }, [d(i) ? (O(),
        Ie(lr, {
            key: 0,
            name: "carousel-arrow-left",
            persisted: ""
        }, {
            default: Te(()=>[gt(N("button", {
                type: "button",
                class: pe([d(L).e("arrow"), d(L).em("arrow", "left")]),
                onMouseenter: te[0] || (te[0] = z=>d(h)("left")),
                onMouseleave: te[1] || (te[1] = (...z)=>d(m) && d(m)(...z)),
                onClick: te[2] || (te[2] = lt(z=>d(x)(d(s) - 1), ["stop"]))
            }, [de(d(et), null, {
                default: Te(()=>[de(d(Nw))]),
                _: 1
            })], 34), [[cr, (A.arrow === "always" || d(l)) && (r.loop || d(s) > 0)]])]),
            _: 1
        })) : ye("v-if", !0), d(i) ? (O(),
        Ie(lr, {
            key: 1,
            name: "carousel-arrow-right",
            persisted: ""
        }, {
            default: Te(()=>[gt(N("button", {
                type: "button",
                class: pe([d(L).e("arrow"), d(L).em("arrow", "right")]),
                onMouseenter: te[3] || (te[3] = z=>d(h)("right")),
                onMouseleave: te[4] || (te[4] = (...z)=>d(m) && d(m)(...z)),
                onClick: te[5] || (te[5] = lt(z=>d(x)(d(s) + 1), ["stop"]))
            }, [de(d(et), null, {
                default: Te(()=>[de(d(Fw))]),
                _: 1
            })], 34), [[cr, (A.arrow === "always" || d(l)) && (r.loop || d(s) < d(f).length - 1)]])]),
            _: 1
        })) : ye("v-if", !0), Ve(A.$slots, "default")], 6), A.indicatorPosition !== "none" ? (O(),
        K("ul", {
            key: 0,
            class: pe(d(k))
        }, [(O(!0),
        K(De, null, Nt(d(f), (z,ne)=>(O(),
        K("li", {
            key: ne,
            class: pe([d(L).e("indicator"), d(L).em("indicator", A.direction), d(L).is("active", ne === d(s))]),
            onMouseenter: W=>d(B)(ne),
            onClick: lt(W=>d(g)(ne), ["stop"])
        }, [N("button", {
            class: pe(d(L).e("button"))
        }, [d(a) ? (O(),
        K("span", Ox, we(z.props.label), 1)) : ye("v-if", !0)], 2)], 42, Ax))), 128))], 2)) : ye("v-if", !0)], 34))
    }
});
var Px = wt(Nx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);
const Lx = Pt({
    name: {
        type: String,
        default: ""
    },
    label: {
        type: [String, Number],
        default: ""
    }
})
  , Mx = (e,t)=>{
    const n = Ge(Rd)
      , r = Ot()
      , o = .83
      , s = q()
      , i = q(!1)
      , a = q(0)
      , l = q(1)
      , c = q(!1)
      , f = q(!1)
      , u = q(!1)
      , p = q(!1)
      , {isCardType: h, isVertical: m} = n;
    function g(R, x, B) {
        const L = B - 1
          , S = x - 1
          , k = x + 1
          , A = B / 2;
        return x === 0 && R === L ? -1 : x === L && R === 0 ? B : R < S && x - R >= A ? B + 1 : R > k && R - x >= A ? -2 : R
    }
    function b(R, x) {
        var B, L;
        const S = d(m) ? ((B = n.root.value) == null ? void 0 : B.offsetHeight) || 0 : ((L = n.root.value) == null ? void 0 : L.offsetWidth) || 0;
        return u.value ? S * ((2 - o) * (R - x) + 1) / 4 : R < x ? -(1 + o) * S / 4 : (3 + o) * S / 4
    }
    function $(R, x, B) {
        const L = n.root.value;
        return L ? ((B ? L.offsetHeight : L.offsetWidth) || 0) * (R - x) : 0
    }
    const D = (R,x,B)=>{
        var L;
        const S = d(h)
          , k = (L = n.items.value.length) != null ? L : Number.NaN
          , A = R === x;
        !S && !vo(B) && (p.value = A || R === B),
        !A && k > 2 && n.loop && (R = g(R, x, k));
        const te = d(m);
        c.value = A,
        S ? (u.value = Math.round(Math.abs(R - x)) <= 1,
        a.value = b(R, x),
        l.value = d(c) ? 1 : o) : a.value = $(R, x, te),
        f.value = !0,
        A && s.value && n.setContainerHeight(s.value.offsetHeight)
    }
    ;
    function U() {
        if (n && d(h)) {
            const R = n.items.value.findIndex(({uid: x})=>x === r.uid);
            n.setActiveItem(R)
        }
    }
    return Je(()=>{
        n.addItem({
            props: e,
            states: $t({
                hover: i,
                translate: a,
                scale: l,
                active: c,
                ready: f,
                inStage: u,
                animating: p
            }),
            uid: r.uid,
            translateItem: D
        })
    }
    ),
    Nr(()=>{
        n.removeItem(r.uid)
    }
    ),
    {
        carouselItemRef: s,
        active: c,
        animating: p,
        hover: i,
        inStage: u,
        isVertical: m,
        translate: a,
        isCardType: h,
        scale: l,
        ready: f,
        handleItemClick: U
    }
}
  , Dx = Ce({
    name: "ElCarouselItem"
})
  , Bx = Ce({
    ...Dx,
    props: Lx,
    setup(e) {
        const t = e
          , n = ut("carousel")
          , {carouselItemRef: r, active: o, animating: s, hover: i, inStage: a, isVertical: l, translate: c, isCardType: f, scale: u, ready: p, handleItemClick: h} = Mx(t)
          , m = Y(()=>{
            const b = `${`translate${d(l) ? "Y" : "X"}`}(${d(c)}px)`
              , $ = `scale(${d(u)})`;
            return {
                transform: [b, $].join(" ")
            }
        }
        );
        return (g,b)=>gt((O(),
        K("div", {
            ref_key: "carouselItemRef",
            ref: r,
            class: pe([d(n).e("item"), d(n).is("active", d(o)), d(n).is("in-stage", d(a)), d(n).is("hover", d(i)), d(n).is("animating", d(s)), {
                [d(n).em("item", "card")]: d(f),
                [d(n).em("item", "card-vertical")]: d(f) && d(l)
            }]),
            style: Qe(d(m)),
            onClick: b[0] || (b[0] = (...$)=>d(h) && d(h)(...$))
        }, [d(f) ? gt((O(),
        K("div", {
            key: 0,
            class: pe(d(n).e("mask"))
        }, null, 2)), [[cr, !d(o)]]) : ye("v-if", !0), Ve(g.$slots, "default")], 6)), [[cr, d(p)]])
    }
});
var Nd = wt(Bx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);
const Fx = _n(Px, {
    CarouselItem: Nd
})
  , Ux = Ks(Nd)
  , Pd = {
    modelValue: {
        type: [Number, String, Boolean],
        default: void 0
    },
    label: {
        type: [String, Boolean, Number, Object]
    },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: {
        type: String,
        default: void 0
    },
    trueLabel: {
        type: [String, Number],
        default: void 0
    },
    falseLabel: {
        type: [String, Number],
        default: void 0
    },
    id: {
        type: String,
        default: void 0
    },
    controls: {
        type: String,
        default: void 0
    },
    border: Boolean,
    size: Ys,
    tabindex: [String, Number],
    validateEvent: {
        type: Boolean,
        default: !0
    }
}
  , Ld = {
    [Wt]: e=>Ne(e) || zt(e) || Mn(e),
    change: e=>Ne(e) || zt(e) || Mn(e)
}
  , Br = Symbol("checkboxGroupContextKey")
  , zx = ({model: e, isChecked: t})=>{
    const n = Ge(Br, void 0)
      , r = Y(()=>{
        var s, i;
        const a = (s = n == null ? void 0 : n.max) == null ? void 0 : s.value
          , l = (i = n == null ? void 0 : n.min) == null ? void 0 : i.value;
        return !vo(a) && e.value.length >= a && !t.value || !vo(l) && e.value.length <= l && t.value
    }
    );
    return {
        isDisabled: So(Y(()=>(n == null ? void 0 : n.disabled.value) || r.value)),
        isLimitDisabled: r
    }
}
  , jx = (e,{model: t, isLimitExceeded: n, hasOwnLabel: r, isDisabled: o, isLabeledByFormItem: s})=>{
    const i = Ge(Br, void 0)
      , {formItem: a} = Dr()
      , {emit: l} = Ot();
    function c(m) {
        var g, b;
        return m === e.trueLabel || m === !0 ? (g = e.trueLabel) != null ? g : !0 : (b = e.falseLabel) != null ? b : !1
    }
    function f(m, g) {
        l("change", c(m), g)
    }
    function u(m) {
        if (n.value)
            return;
        const g = m.target;
        l("change", c(g.checked), m)
    }
    async function p(m) {
        n.value || !r.value && !o.value && s.value && (m.composedPath().some($=>$.tagName === "LABEL") || (t.value = c([!1, e.falseLabel].includes(t.value)),
        await ft(),
        f(t.value, m)))
    }
    const h = Y(()=>(i == null ? void 0 : i.validateEvent) || e.validateEvent);
    return $e(()=>e.modelValue, ()=>{
        h.value && (a == null || a.validate("change").catch(m=>void 0))
    }
    ),
    {
        handleChange: u,
        onClickRoot: p
    }
}
  , Hx = e=>{
    const t = q(!1)
      , {emit: n} = Ot()
      , r = Ge(Br, void 0)
      , o = Y(()=>vo(r) === !1)
      , s = q(!1);
    return {
        model: Y({
            get() {
                var a, l;
                return o.value ? (a = r == null ? void 0 : r.modelValue) == null ? void 0 : a.value : (l = e.modelValue) != null ? l : t.value
            },
            set(a) {
                var l, c;
                o.value && ve(a) ? (s.value = ((l = r == null ? void 0 : r.max) == null ? void 0 : l.value) !== void 0 && a.length > (r == null ? void 0 : r.max.value),
                s.value === !1 && ((c = r == null ? void 0 : r.changeEvent) == null || c.call(r, a))) : (n(Wt, a),
                t.value = a)
            }
        }),
        isGroup: o,
        isLimitExceeded: s
    }
}
  , Vx = (e,t,{model: n})=>{
    const r = Ge(Br, void 0)
      , o = q(!1)
      , s = Y(()=>{
        const c = n.value;
        return Mn(c) ? c : ve(c) ? Be(e.label) ? c.map(ke).some(f=>pw(f, e.label)) : c.map(ke).includes(e.label) : c != null ? c === e.trueLabel : !!c
    }
    )
      , i = go(Y(()=>{
        var c;
        return (c = r == null ? void 0 : r.size) == null ? void 0 : c.value
    }
    ), {
        prop: !0
    })
      , a = go(Y(()=>{
        var c;
        return (c = r == null ? void 0 : r.size) == null ? void 0 : c.value
    }
    ))
      , l = Y(()=>!!(t.default || e.label));
    return {
        checkboxButtonSize: i,
        isChecked: s,
        isFocused: o,
        checkboxSize: a,
        hasOwnLabel: l
    }
}
  , Wx = (e,{model: t})=>{
    function n() {
        ve(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0
    }
    e.checked && n()
}
  , Md = (e,t)=>{
    const {formItem: n} = Dr()
      , {model: r, isGroup: o, isLimitExceeded: s} = Hx(e)
      , {isFocused: i, isChecked: a, checkboxButtonSize: l, checkboxSize: c, hasOwnLabel: f} = Vx(e, t, {
        model: r
    })
      , {isDisabled: u} = zx({
        model: r,
        isChecked: a
    })
      , {inputId: p, isLabeledByFormItem: h} = qs(e, {
        formItemContext: n,
        disableIdGeneration: f,
        disableIdManagement: o
    })
      , {handleChange: m, onClickRoot: g} = jx(e, {
        model: r,
        isLimitExceeded: s,
        hasOwnLabel: f,
        isDisabled: u,
        isLabeledByFormItem: h
    });
    return Wx(e, {
        model: r
    }),
    {
        inputId: p,
        isLabeledByFormItem: h,
        isChecked: a,
        isDisabled: u,
        isFocused: i,
        checkboxButtonSize: l,
        checkboxSize: c,
        hasOwnLabel: f,
        model: r,
        handleChange: m,
        onClickRoot: g
    }
}
  , Kx = ["tabindex", "role", "aria-checked"]
  , Yx = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"]
  , qx = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"]
  , Gx = Ce({
    name: "ElCheckbox"
})
  , Jx = Ce({
    ...Gx,
    props: Pd,
    emits: Ld,
    setup(e) {
        const t = e
          , n = $s()
          , {inputId: r, isLabeledByFormItem: o, isChecked: s, isDisabled: i, isFocused: a, checkboxSize: l, hasOwnLabel: c, model: f, handleChange: u, onClickRoot: p} = Md(t, n)
          , h = ut("checkbox")
          , m = Y(()=>[h.b(), h.m(l.value), h.is("disabled", i.value), h.is("bordered", t.border), h.is("checked", s.value)])
          , g = Y(()=>[h.e("input"), h.is("disabled", i.value), h.is("checked", s.value), h.is("indeterminate", t.indeterminate), h.is("focus", a.value)]);
        return (b,$)=>(O(),
        Ie(Ct(!d(c) && d(o) ? "span" : "label"), {
            class: pe(d(m)),
            "aria-controls": b.indeterminate ? b.controls : null,
            onClick: d(p)
        }, {
            default: Te(()=>[N("span", {
                class: pe(d(g)),
                tabindex: b.indeterminate ? 0 : void 0,
                role: b.indeterminate ? "checkbox" : void 0,
                "aria-checked": b.indeterminate ? "mixed" : void 0
            }, [b.trueLabel || b.falseLabel ? gt((O(),
            K("input", {
                key: 0,
                id: d(r),
                "onUpdate:modelValue": $[0] || ($[0] = D=>Fe(f) ? f.value = D : null),
                class: pe(d(h).e("original")),
                type: "checkbox",
                "aria-hidden": b.indeterminate ? "true" : "false",
                name: b.name,
                tabindex: b.tabindex,
                disabled: d(i),
                "true-value": b.trueLabel,
                "false-value": b.falseLabel,
                onChange: $[1] || ($[1] = (...D)=>d(u) && d(u)(...D)),
                onFocus: $[2] || ($[2] = D=>a.value = !0),
                onBlur: $[3] || ($[3] = D=>a.value = !1)
            }, null, 42, Yx)), [[os, d(f)]]) : gt((O(),
            K("input", {
                key: 1,
                id: d(r),
                "onUpdate:modelValue": $[4] || ($[4] = D=>Fe(f) ? f.value = D : null),
                class: pe(d(h).e("original")),
                type: "checkbox",
                "aria-hidden": b.indeterminate ? "true" : "false",
                disabled: d(i),
                value: b.label,
                name: b.name,
                tabindex: b.tabindex,
                onChange: $[5] || ($[5] = (...D)=>d(u) && d(u)(...D)),
                onFocus: $[6] || ($[6] = D=>a.value = !0),
                onBlur: $[7] || ($[7] = D=>a.value = !1)
            }, null, 42, qx)), [[os, d(f)]]), N("span", {
                class: pe(d(h).e("inner"))
            }, null, 2)], 10, Kx), d(c) ? (O(),
            K("span", {
                key: 0,
                class: pe(d(h).e("label"))
            }, [Ve(b.$slots, "default"), b.$slots.default ? ye("v-if", !0) : (O(),
            K(De, {
                key: 0
            }, [Fn(we(b.label), 1)], 64))], 2)) : ye("v-if", !0)]),
            _: 3
        }, 8, ["class", "aria-controls", "onClick"]))
    }
});
var Qx = wt(Jx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const Xx = ["name", "tabindex", "disabled", "true-value", "false-value"]
  , Zx = ["name", "tabindex", "disabled", "value"]
  , eS = Ce({
    name: "ElCheckboxButton"
})
  , tS = Ce({
    ...eS,
    props: Pd,
    emits: Ld,
    setup(e) {
        const t = e
          , n = $s()
          , {isFocused: r, isChecked: o, isDisabled: s, checkboxButtonSize: i, model: a, handleChange: l} = Md(t, n)
          , c = Ge(Br, void 0)
          , f = ut("checkbox")
          , u = Y(()=>{
            var h, m, g, b;
            const $ = (m = (h = c == null ? void 0 : c.fill) == null ? void 0 : h.value) != null ? m : "";
            return {
                backgroundColor: $,
                borderColor: $,
                color: (b = (g = c == null ? void 0 : c.textColor) == null ? void 0 : g.value) != null ? b : "",
                boxShadow: $ ? `-1px 0 0 0 ${$}` : void 0
            }
        }
        )
          , p = Y(()=>[f.b("button"), f.bm("button", i.value), f.is("disabled", s.value), f.is("checked", o.value), f.is("focus", r.value)]);
        return (h,m)=>(O(),
        K("label", {
            class: pe(d(p))
        }, [h.trueLabel || h.falseLabel ? gt((O(),
        K("input", {
            key: 0,
            "onUpdate:modelValue": m[0] || (m[0] = g=>Fe(a) ? a.value = g : null),
            class: pe(d(f).be("button", "original")),
            type: "checkbox",
            name: h.name,
            tabindex: h.tabindex,
            disabled: d(s),
            "true-value": h.trueLabel,
            "false-value": h.falseLabel,
            onChange: m[1] || (m[1] = (...g)=>d(l) && d(l)(...g)),
            onFocus: m[2] || (m[2] = g=>r.value = !0),
            onBlur: m[3] || (m[3] = g=>r.value = !1)
        }, null, 42, Xx)), [[os, d(a)]]) : gt((O(),
        K("input", {
            key: 1,
            "onUpdate:modelValue": m[4] || (m[4] = g=>Fe(a) ? a.value = g : null),
            class: pe(d(f).be("button", "original")),
            type: "checkbox",
            name: h.name,
            tabindex: h.tabindex,
            disabled: d(s),
            value: h.label,
            onChange: m[5] || (m[5] = (...g)=>d(l) && d(l)(...g)),
            onFocus: m[6] || (m[6] = g=>r.value = !0),
            onBlur: m[7] || (m[7] = g=>r.value = !1)
        }, null, 42, Zx)), [[os, d(a)]]), h.$slots.default || h.label ? (O(),
        K("span", {
            key: 2,
            class: pe(d(f).be("button", "inner")),
            style: Qe(d(o) ? d(u) : void 0)
        }, [Ve(h.$slots, "default", {}, ()=>[Fn(we(h.label), 1)])], 6)) : ye("v-if", !0)], 2))
    }
});
var Dd = wt(tS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const nS = Pt({
    modelValue: {
        type: jt(Array),
        default: ()=>[]
    },
    disabled: Boolean,
    min: Number,
    max: Number,
    size: Ys,
    label: String,
    fill: String,
    textColor: String,
    tag: {
        type: String,
        default: "div"
    },
    validateEvent: {
        type: Boolean,
        default: !0
    }
})
  , rS = {
    [Wt]: e=>ve(e),
    change: e=>ve(e)
}
  , oS = Ce({
    name: "ElCheckboxGroup"
})
  , sS = Ce({
    ...oS,
    props: nS,
    emits: rS,
    setup(e, {emit: t}) {
        const n = e
          , r = ut("checkbox")
          , {formItem: o} = Dr()
          , {inputId: s, isLabeledByFormItem: i} = qs(n, {
            formItemContext: o
        })
          , a = async c=>{
            t(Wt, c),
            await ft(),
            t("change", c)
        }
          , l = Y({
            get() {
                return n.modelValue
            },
            set(c) {
                a(c)
            }
        });
        return _o(Br, {
            ...yw(Ku(n), ["size", "min", "max", "disabled", "validateEvent", "fill", "textColor"]),
            modelValue: l,
            changeEvent: a
        }),
        $e(()=>n.modelValue, ()=>{
            n.validateEvent && (o == null || o.validate("change").catch(c=>void 0))
        }
        ),
        (c,f)=>{
            var u;
            return O(),
            Ie(Ct(c.tag), {
                id: d(s),
                class: pe(d(r).b("group")),
                role: "group",
                "aria-label": d(i) ? void 0 : c.label || "checkbox-group",
                "aria-labelledby": d(i) ? (u = d(o)) == null ? void 0 : u.labelId : void 0
            }, {
                default: Te(()=>[Ve(c.$slots, "default")]),
                _: 3
            }, 8, ["id", "class", "aria-label", "aria-labelledby"])
        }
    }
});
var Bd = wt(sS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const iS = _n(Qx, {
    CheckboxButton: Dd,
    CheckboxGroup: Bd
});
Ks(Dd);
Ks(Bd);
const aS = Pt({
    mask: {
        type: Boolean,
        default: !0
    },
    customMaskEvent: {
        type: Boolean,
        default: !1
    },
    overlayClass: {
        type: jt([String, Array, Object])
    },
    zIndex: {
        type: jt([String, Number])
    }
})
  , lS = {
    click: e=>e instanceof MouseEvent
}
  , cS = "overlay";
var uS = Ce({
    name: "ElOverlay",
    props: aS,
    emits: lS,
    setup(e, {slots: t, emit: n}) {
        const r = ut(cS)
          , o = l=>{
            n("click", l)
        }
          , {onClick: s, onMousedown: i, onMouseup: a} = a2(e.customMaskEvent ? void 0 : o);
        return ()=>e.mask ? de("div", {
            class: [r.b(), e.overlayClass],
            style: {
                zIndex: e.zIndex
            },
            onClick: s,
            onMousedown: i,
            onMouseup: a
        }, [Ve(t, "default")], Go.STYLE | Go.CLASS | Go.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Sf("div", {
            class: e.overlayClass,
            style: {
                zIndex: e.zIndex,
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px"
            }
        }, [Ve(t, "default")])
    }
});
const fS = uS
  , dS = Pt({
    center: {
        type: Boolean,
        default: !1
    },
    alignCenter: {
        type: Boolean,
        default: !1
    },
    closeIcon: {
        type: zn
    },
    customClass: {
        type: String,
        default: ""
    },
    draggable: {
        type: Boolean,
        default: !1
    },
    fullscreen: {
        type: Boolean,
        default: !1
    },
    showClose: {
        type: Boolean,
        default: !0
    },
    title: {
        type: String,
        default: ""
    }
})
  , pS = Pt({
    ...dS,
    appendToBody: {
        type: Boolean,
        default: !1
    },
    beforeClose: {
        type: jt(Function)
    },
    destroyOnClose: {
        type: Boolean,
        default: !1
    },
    closeOnClickModal: {
        type: Boolean,
        default: !0
    },
    closeOnPressEscape: {
        type: Boolean,
        default: !0
    },
    lockScroll: {
        type: Boolean,
        default: !0
    },
    modal: {
        type: Boolean,
        default: !0
    },
    openDelay: {
        type: Number,
        default: 0
    },
    closeDelay: {
        type: Number,
        default: 0
    },
    top: {
        type: String
    },
    modelValue: {
        type: Boolean,
        default: !1
    },
    modalClass: String,
    width: {
        type: [String, Number]
    },
    zIndex: {
        type: Number
    },
    trapFocus: {
        type: Boolean,
        default: !1
    }
})
  , hS = {
    open: ()=>!0,
    opened: ()=>!0,
    close: ()=>!0,
    closed: ()=>!0,
    [Wt]: e=>Mn(e),
    openAutoFocus: ()=>!0,
    closeAutoFocus: ()=>!0
}
  , mS = (e,t)=>{
    const r = Ot().emit
      , {nextZIndex: o} = p2();
    let s = "";
    const i = us()
      , a = us()
      , l = q(!1)
      , c = q(!1)
      , f = q(!1)
      , u = q(e.zIndex || o());
    let p, h;
    const m = Ed("namespace", ia)
      , g = Y(()=>{
        const W = {}
          , J = `--${m.value}-dialog`;
        return e.fullscreen || (e.top && (W[`${J}-margin-top`] = e.top),
        e.width && (W[`${J}-width`] = Mr(e.width))),
        W
    }
    )
      , b = Y(()=>e.alignCenter ? {
        display: "flex"
    } : {});
    function $() {
        r("opened")
    }
    function D() {
        r("closed"),
        r(Wt, !1),
        e.destroyOnClose && (f.value = !1)
    }
    function U() {
        r("close")
    }
    function R() {
        h == null || h(),
        p == null || p(),
        e.openDelay && e.openDelay > 0 ? {stop: p} = pc(()=>S(), e.openDelay) : S()
    }
    function x() {
        p == null || p(),
        h == null || h(),
        e.closeDelay && e.closeDelay > 0 ? {stop: h} = pc(()=>k(), e.closeDelay) : k()
    }
    function B() {
        function W(J) {
            J || (c.value = !0,
            l.value = !1)
        }
        e.beforeClose ? e.beforeClose(W) : x()
    }
    function L() {
        e.closeOnClickModal && B()
    }
    function S() {
        !At || (l.value = !0)
    }
    function k() {
        l.value = !1
    }
    function A() {
        r("openAutoFocus")
    }
    function te() {
        r("closeAutoFocus")
    }
    function z(W) {
        var J;
        ((J = W.detail) == null ? void 0 : J.focusReason) === "pointer" && W.preventDefault()
    }
    e.lockScroll && i2(l);
    function ne() {
        e.closeOnPressEscape && B()
    }
    return $e(()=>e.modelValue, W=>{
        W ? (c.value = !1,
        R(),
        f.value = !0,
        u.value = e.zIndex ? u.value++ : o(),
        ft(()=>{
            r("open"),
            t.value && (t.value.scrollTop = 0)
        }
        )) : l.value && x()
    }
    ),
    $e(()=>e.fullscreen, W=>{
        !t.value || (W ? (s = t.value.style.transform,
        t.value.style.transform = "") : t.value.style.transform = s)
    }
    ),
    Je(()=>{
        e.modelValue && (l.value = !0,
        f.value = !0,
        R())
    }
    ),
    {
        afterEnter: $,
        afterLeave: D,
        beforeLeave: U,
        handleClose: B,
        onModalClick: L,
        close: x,
        doClose: k,
        onOpenAutoFocus: A,
        onCloseAutoFocus: te,
        onCloseRequested: ne,
        onFocusoutPrevented: z,
        titleId: i,
        bodyId: a,
        closed: c,
        style: g,
        overlayDialogStyle: b,
        rendered: f,
        visible: l,
        zIndex: u
    }
}
  , vS = Pt({
    ...pS,
    direction: {
        type: String,
        default: "rtl",
        values: ["ltr", "rtl", "ttb", "btt"]
    },
    size: {
        type: [String, Number],
        default: "30%"
    },
    withHeader: {
        type: Boolean,
        default: !0
    },
    modalFade: {
        type: Boolean,
        default: !0
    }
})
  , gS = hS
  , yS = Ce({
    name: "ElDrawer",
    components: {
        ElOverlay: fS,
        ElFocusTrap: Y2,
        ElIcon: et,
        Close: Ws
    },
    inheritAttrs: !1,
    props: vS,
    emits: gS,
    setup(e, {slots: t}) {
        cs({
            scope: "el-drawer",
            from: "the title slot",
            replacement: "the header slot",
            version: "3.0.0",
            ref: "https://element-plus.org/en-US/component/drawer.html#slots"
        }, Y(()=>!!t.title)),
        cs({
            scope: "el-drawer",
            from: "custom-class",
            replacement: "class",
            version: "2.3.0",
            ref: "https://element-plus.org/en-US/component/drawer.html#attributes",
            type: "Attribute"
        }, Y(()=>!!e.customClass));
        const n = q()
          , r = q()
          , o = ut("drawer")
          , {t: s} = wd()
          , i = Y(()=>e.direction === "rtl" || e.direction === "ltr")
          , a = Y(()=>Mr(e.size));
        return {
            ...mS(e, n),
            drawerRef: n,
            focusStartRef: r,
            isHorizontal: i,
            drawerSize: a,
            ns: o,
            t: s
        }
    }
})
  , _S = ["aria-label", "aria-labelledby", "aria-describedby"]
  , bS = ["id"]
  , wS = ["aria-label"]
  , xS = ["id"];
function SS(e, t, n, r, o, s) {
    const i = Yr("close")
      , a = Yr("el-icon")
      , l = Yr("el-focus-trap")
      , c = Yr("el-overlay");
    return O(),
    Ie(Cm, {
        to: "body",
        disabled: !e.appendToBody
    }, [de(lr, {
        name: e.ns.b("fade"),
        onAfterEnter: e.afterEnter,
        onAfterLeave: e.afterLeave,
        onBeforeLeave: e.beforeLeave,
        persisted: ""
    }, {
        default: Te(()=>[gt(de(c, {
            mask: e.modal,
            "overlay-class": e.modalClass,
            "z-index": e.zIndex,
            onClick: e.onModalClick
        }, {
            default: Te(()=>[de(l, {
                loop: "",
                trapped: e.visible,
                "focus-trap-el": e.drawerRef,
                "focus-start-el": e.focusStartRef,
                onReleaseRequested: e.onCloseRequested
            }, {
                default: Te(()=>[N("div", or({
                    ref: "drawerRef",
                    "aria-modal": "true",
                    "aria-label": e.title || void 0,
                    "aria-labelledby": e.title ? void 0 : e.titleId,
                    "aria-describedby": e.bodyId
                }, e.$attrs, {
                    class: [e.ns.b(), e.direction, e.visible && "open", e.customClass],
                    style: e.isHorizontal ? "width: " + e.drawerSize : "height: " + e.drawerSize,
                    role: "dialog",
                    onClick: t[1] || (t[1] = lt(()=>{}
                    , ["stop"]))
                }), [N("span", {
                    ref: "focusStartRef",
                    class: pe(e.ns.e("sr-focus")),
                    tabindex: "-1"
                }, null, 2), e.withHeader ? (O(),
                K("header", {
                    key: 0,
                    class: pe(e.ns.e("header"))
                }, [e.$slots.title ? Ve(e.$slots, "title", {
                    key: 1
                }, ()=>[ye(" DEPRECATED SLOT ")]) : Ve(e.$slots, "header", {
                    key: 0,
                    close: e.handleClose,
                    titleId: e.titleId,
                    titleClass: e.ns.e("title")
                }, ()=>[e.$slots.title ? ye("v-if", !0) : (O(),
                K("span", {
                    key: 0,
                    id: e.titleId,
                    role: "heading",
                    class: pe(e.ns.e("title"))
                }, we(e.title), 11, bS))]), e.showClose ? (O(),
                K("button", {
                    key: 2,
                    "aria-label": e.t("el.drawer.close"),
                    class: pe(e.ns.e("close-btn")),
                    type: "button",
                    onClick: t[0] || (t[0] = (...f)=>e.handleClose && e.handleClose(...f))
                }, [de(a, {
                    class: pe(e.ns.e("close"))
                }, {
                    default: Te(()=>[de(i)]),
                    _: 1
                }, 8, ["class"])], 10, wS)) : ye("v-if", !0)], 2)) : ye("v-if", !0), e.rendered ? (O(),
                K("div", {
                    key: 1,
                    id: e.bodyId,
                    class: pe(e.ns.e("body"))
                }, [Ve(e.$slots, "default")], 10, xS)) : ye("v-if", !0), e.$slots.footer ? (O(),
                K("div", {
                    key: 2,
                    class: pe(e.ns.e("footer"))
                }, [Ve(e.$slots, "footer")], 2)) : ye("v-if", !0)], 16, _S)]),
                _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])]),
            _: 3
        }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [[cr, e.visible]])]),
        _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])], 8, ["disabled"])
}
var ES = wt(yS, [["render", SS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);
const CS = _n(ES)
  , TS = {
    viewBox: "0 0 79 86",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
}
  , $S = ["id"]
  , IS = ["stop-color"]
  , AS = ["stop-color"]
  , OS = ["id"]
  , kS = ["stop-color"]
  , RS = ["stop-color"]
  , NS = ["id"]
  , PS = {
    id: "Illustrations",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
}
  , LS = {
    id: "B-type",
    transform: "translate(-1268.000000, -535.000000)"
}
  , MS = {
    id: "Group-2",
    transform: "translate(1268.000000, 535.000000)"
}
  , DS = ["fill"]
  , BS = ["fill"]
  , FS = {
    id: "Group-Copy",
    transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
}
  , US = ["fill"]
  , zS = ["fill"]
  , jS = ["fill"]
  , HS = ["fill"]
  , VS = ["fill"]
  , WS = {
    id: "Rectangle-Copy-17",
    transform: "translate(53.000000, 45.000000)"
}
  , KS = ["fill", "xlink:href"]
  , YS = ["fill", "mask"]
  , qS = ["fill"]
  , GS = Ce({
    name: "ImgEmpty"
})
  , JS = Ce({
    ...GS,
    setup(e) {
        const t = ut("empty")
          , n = us();
        return (r,o)=>(O(),
        K("svg", TS, [N("defs", null, [N("linearGradient", {
            id: `linearGradient-1-${d(n)}`,
            x1: "38.8503086%",
            y1: "0%",
            x2: "61.1496914%",
            y2: "100%"
        }, [N("stop", {
            "stop-color": `var(${d(t).cssVarBlockName("fill-color-1")})`,
            offset: "0%"
        }, null, 8, IS), N("stop", {
            "stop-color": `var(${d(t).cssVarBlockName("fill-color-4")})`,
            offset: "100%"
        }, null, 8, AS)], 8, $S), N("linearGradient", {
            id: `linearGradient-2-${d(n)}`,
            x1: "0%",
            y1: "9.5%",
            x2: "100%",
            y2: "90.5%"
        }, [N("stop", {
            "stop-color": `var(${d(t).cssVarBlockName("fill-color-1")})`,
            offset: "0%"
        }, null, 8, kS), N("stop", {
            "stop-color": `var(${d(t).cssVarBlockName("fill-color-6")})`,
            offset: "100%"
        }, null, 8, RS)], 8, OS), N("rect", {
            id: `path-3-${d(n)}`,
            x: "0",
            y: "0",
            width: "17",
            height: "36"
        }, null, 8, NS)]), N("g", PS, [N("g", LS, [N("g", MS, [N("path", {
            id: "Oval-Copy-2",
            d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
            fill: `var(${d(t).cssVarBlockName("fill-color-3")})`
        }, null, 8, DS), N("polygon", {
            id: "Rectangle-Copy-14",
            fill: `var(${d(t).cssVarBlockName("fill-color-7")})`,
            transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
            points: "13 58 53 58 42 45 2 45"
        }, null, 8, BS), N("g", FS, [N("polygon", {
            id: "Rectangle-Copy-10",
            fill: `var(${d(t).cssVarBlockName("fill-color-7")})`,
            transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
            points: "2.84078316e-14 3 18 3 23 7 5 7"
        }, null, 8, US), N("polygon", {
            id: "Rectangle-Copy-11",
            fill: `var(${d(t).cssVarBlockName("fill-color-5")})`,
            points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
        }, null, 8, zS), N("rect", {
            id: "Rectangle-Copy-12",
            fill: `url(#linearGradient-1-${d(n)})`,
            transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
            x: "38",
            y: "7",
            width: "17",
            height: "36"
        }, null, 8, jS), N("polygon", {
            id: "Rectangle-Copy-13",
            fill: `var(${d(t).cssVarBlockName("fill-color-2")})`,
            transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
            points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
        }, null, 8, HS)]), N("rect", {
            id: "Rectangle-Copy-15",
            fill: `url(#linearGradient-2-${d(n)})`,
            x: "13",
            y: "45",
            width: "40",
            height: "36"
        }, null, 8, VS), N("g", WS, [N("use", {
            id: "Mask",
            fill: `var(${d(t).cssVarBlockName("fill-color-8")})`,
            transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
            "xlink:href": `#path-3-${d(n)}`
        }, null, 8, KS), N("polygon", {
            id: "Rectangle-Copy",
            fill: `var(${d(t).cssVarBlockName("fill-color-9")})`,
            mask: `url(#mask-4-${d(n)})`,
            transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
            points: "7 0 24 0 20 18 7 16.5"
        }, null, 8, YS)]), N("polygon", {
            id: "Rectangle-Copy-18",
            fill: `var(${d(t).cssVarBlockName("fill-color-2")})`,
            transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
            points: "62 45 79 45 70 58 53 58"
        }, null, 8, qS)])])])]))
    }
});
var QS = wt(JS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue"]]);
const XS = Pt({
    image: {
        type: String,
        default: ""
    },
    imageSize: Number,
    description: {
        type: String,
        default: ""
    }
})
  , ZS = ["src"]
  , eE = {
    key: 1
}
  , tE = Ce({
    name: "ElEmpty"
})
  , nE = Ce({
    ...tE,
    props: XS,
    setup(e) {
        const t = e
          , {t: n} = wd()
          , r = ut("empty")
          , o = Y(()=>t.description || n("el.table.emptyText"))
          , s = Y(()=>({
            width: Mr(t.imageSize)
        }));
        return (i,a)=>(O(),
        K("div", {
            class: pe(d(r).b())
        }, [N("div", {
            class: pe(d(r).e("image")),
            style: Qe(d(s))
        }, [i.image ? (O(),
        K("img", {
            key: 0,
            src: i.image,
            ondragstart: "return false"
        }, null, 8, ZS)) : Ve(i.$slots, "image", {
            key: 1
        }, ()=>[de(QS)])], 6), N("div", {
            class: pe(d(r).e("description"))
        }, [i.$slots.description ? Ve(i.$slots, "description", {
            key: 0
        }) : (O(),
        K("p", eE, we(d(o)), 1))], 2), i.$slots.default ? (O(),
        K("div", {
            key: 0,
            class: pe(d(r).e("bottom"))
        }, [Ve(i.$slots, "default")], 2)) : ye("v-if", !0)], 2))
    }
});
var rE = wt(nE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue"]]);
const oE = _n(rE)
  , sE = Pt({
    modelValue: {
        type: [Boolean, String, Number],
        default: !1
    },
    disabled: {
        type: Boolean,
        default: !1
    },
    loading: {
        type: Boolean,
        default: !1
    },
    size: {
        type: String,
        validator: Y1
    },
    width: {
        type: [String, Number],
        default: ""
    },
    inlinePrompt: {
        type: Boolean,
        default: !1
    },
    activeIcon: {
        type: zn
    },
    inactiveIcon: {
        type: zn
    },
    activeText: {
        type: String,
        default: ""
    },
    inactiveText: {
        type: String,
        default: ""
    },
    activeValue: {
        type: [Boolean, String, Number],
        default: !0
    },
    inactiveValue: {
        type: [Boolean, String, Number],
        default: !1
    },
    activeColor: {
        type: String,
        default: ""
    },
    inactiveColor: {
        type: String,
        default: ""
    },
    borderColor: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    validateEvent: {
        type: Boolean,
        default: !0
    },
    beforeChange: {
        type: jt(Function)
    },
    id: String,
    tabindex: {
        type: [String, Number]
    },
    value: {
        type: [Boolean, String, Number],
        default: !1
    }
})
  , iE = {
    [Wt]: e=>Mn(e) || Ne(e) || zt(e),
    [oa]: e=>Mn(e) || Ne(e) || zt(e),
    [sa]: e=>Mn(e) || Ne(e) || zt(e)
}
  , aE = ["onClick"]
  , lE = ["id", "aria-checked", "aria-disabled", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]
  , cE = ["aria-hidden"]
  , uE = ["aria-hidden"]
  , fE = ["aria-hidden"]
  , ca = "ElSwitch"
  , dE = Ce({
    name: ca
})
  , pE = Ce({
    ...dE,
    props: sE,
    emits: iE,
    setup(e, {expose: t, emit: n}) {
        const r = e
          , o = Ot()
          , {formItem: s} = Dr()
          , i = go()
          , a = ut("switch");
        (S=>{
            S.forEach(k=>{
                cs({
                    from: k[0],
                    replacement: k[1],
                    scope: ca,
                    version: "2.3.0",
                    ref: "https://element-plus.org/en-US/component/switch.html#attributes",
                    type: "Attribute"
                }, Y(()=>{
                    var A;
                    return !!((A = o.vnode.props) != null && A[k[2]])
                }
                ))
            }
            )
        }
        )([['"value"', '"model-value" or "v-model"', "value"], ['"active-color"', "CSS var `--el-switch-on-color`", "activeColor"], ['"inactive-color"', "CSS var `--el-switch-off-color`", "inactiveColor"], ['"border-color"', "CSS var `--el-switch-border-color`", "borderColor"]]);
        const {inputId: c} = qs(r, {
            formItemContext: s
        })
          , f = So(Y(()=>r.loading))
          , u = q(r.modelValue !== !1)
          , p = q()
          , h = q()
          , m = Y(()=>[a.b(), a.m(i.value), a.is("disabled", f.value), a.is("checked", U.value)])
          , g = Y(()=>[a.e("label"), a.em("label", "left"), a.is("active", !U.value)])
          , b = Y(()=>[a.e("label"), a.em("label", "right"), a.is("active", U.value)])
          , $ = Y(()=>({
            width: Mr(r.width)
        }));
        $e(()=>r.modelValue, ()=>{
            u.value = !0
        }
        ),
        $e(()=>r.value, ()=>{
            u.value = !1
        }
        );
        const D = Y(()=>u.value ? r.modelValue : r.value)
          , U = Y(()=>D.value === r.activeValue);
        [r.activeValue, r.inactiveValue].includes(D.value) || (n(Wt, r.inactiveValue),
        n(oa, r.inactiveValue),
        n(sa, r.inactiveValue)),
        $e(U, S=>{
            var k;
            p.value.checked = S,
            r.validateEvent && ((k = s == null ? void 0 : s.validate) == null || k.call(s, "change").catch(A=>void 0))
        }
        );
        const R = ()=>{
            const S = U.value ? r.inactiveValue : r.activeValue;
            n(Wt, S),
            n(oa, S),
            n(sa, S),
            ft(()=>{
                p.value.checked = U.value
            }
            )
        }
          , x = ()=>{
            if (f.value)
                return;
            const {beforeChange: S} = r;
            if (!S) {
                R();
                return
            }
            const k = S();
            [Qo(k), Mn(k)].includes(!0) || md(ca, "beforeChange must return type `Promise<boolean>` or `boolean`"),
            Qo(k) ? k.then(te=>{
                te && R()
            }
            ).catch(te=>{}
            ) : k && R()
        }
          , B = Y(()=>a.cssVarBlock({
            ...r.activeColor ? {
                "on-color": r.activeColor
            } : null,
            ...r.inactiveColor ? {
                "off-color": r.inactiveColor
            } : null,
            ...r.borderColor ? {
                "border-color": r.borderColor
            } : null
        }))
          , L = ()=>{
            var S, k;
            (k = (S = p.value) == null ? void 0 : S.focus) == null || k.call(S)
        }
        ;
        return Je(()=>{
            p.value.checked = U.value
        }
        ),
        t({
            focus: L,
            checked: U
        }),
        (S,k)=>(O(),
        K("div", {
            class: pe(d(m)),
            style: Qe(d(B)),
            onClick: lt(x, ["prevent"])
        }, [N("input", {
            id: d(c),
            ref_key: "input",
            ref: p,
            class: pe(d(a).e("input")),
            type: "checkbox",
            role: "switch",
            "aria-checked": d(U),
            "aria-disabled": d(f),
            name: S.name,
            "true-value": S.activeValue,
            "false-value": S.inactiveValue,
            disabled: d(f),
            tabindex: S.tabindex,
            onChange: R,
            onKeydown: eo(x, ["enter"])
        }, null, 42, lE), !S.inlinePrompt && (S.inactiveIcon || S.inactiveText) ? (O(),
        K("span", {
            key: 0,
            class: pe(d(g))
        }, [S.inactiveIcon ? (O(),
        Ie(d(et), {
            key: 0
        }, {
            default: Te(()=>[(O(),
            Ie(Ct(S.inactiveIcon)))]),
            _: 1
        })) : ye("v-if", !0), !S.inactiveIcon && S.inactiveText ? (O(),
        K("span", {
            key: 1,
            "aria-hidden": d(U)
        }, we(S.inactiveText), 9, cE)) : ye("v-if", !0)], 2)) : ye("v-if", !0), N("span", {
            ref_key: "core",
            ref: h,
            class: pe(d(a).e("core")),
            style: Qe(d($))
        }, [S.inlinePrompt ? (O(),
        K("div", {
            key: 0,
            class: pe(d(a).e("inner"))
        }, [S.activeIcon || S.inactiveIcon ? (O(),
        Ie(d(et), {
            key: 0,
            class: pe(d(a).is("icon"))
        }, {
            default: Te(()=>[(O(),
            Ie(Ct(d(U) ? S.activeIcon : S.inactiveIcon)))]),
            _: 1
        }, 8, ["class"])) : S.activeText || S.inactiveText ? (O(),
        K("span", {
            key: 1,
            class: pe(d(a).is("text")),
            "aria-hidden": !d(U)
        }, we(d(U) ? S.activeText : S.inactiveText), 11, uE)) : ye("v-if", !0)], 2)) : ye("v-if", !0), N("div", {
            class: pe(d(a).e("action"))
        }, [S.loading ? (O(),
        Ie(d(et), {
            key: 0,
            class: pe(d(a).is("loading"))
        }, {
            default: Te(()=>[de(d(Xa))]),
            _: 1
        }, 8, ["class"])) : ye("v-if", !0)], 2)], 6), !S.inlinePrompt && (S.activeIcon || S.activeText) ? (O(),
        K("span", {
            key: 1,
            class: pe(d(b))
        }, [S.activeIcon ? (O(),
        Ie(d(et), {
            key: 0
        }, {
            default: Te(()=>[(O(),
            Ie(Ct(S.activeIcon)))]),
            _: 1
        })) : ye("v-if", !0), !S.activeIcon && S.activeText ? (O(),
        K("span", {
            key: 1,
            "aria-hidden": !d(U)
        }, we(S.activeText), 9, fE)) : ye("v-if", !0)], 2)) : ye("v-if", !0)], 14, aE))
    }
});
var hE = wt(pE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);
const mE = _n(hE);
const bn = ks("settings", {
    state: ()=>settings,
    actions: {
        async updateGroup(e, t) {
            await me.set(`group.${e}`, t),
            this.group[e] = t
        },
        async updateConfig(e, t) {
            await me.set(`config.${e}`, t),
            this.config[e] = t
        },
        getConfig(e, t) {
            return this.config[e]
        }
    }
});
function vE(e) {
    e.forEach(t=>{
        const n = new Image;
        n.src = t
    }
    )
}
function Js(e, [t,n]=[innerWidth / 2, 96]) {
    return new Promise(r=>{
        r({
            r: 255,
            g: 255,
            b: 255,
            a: 255 / 255
        })
    }
    )
}
function Qs(e, t) {
    const n = q()
      , r = q(!1);
    if (!t)
        return ka(async()=>{
            r.value = !0;
            const s = await e();
            n.value = s,
            r.value = !1
        }
        ),
        [r, n];
    const o = Vs(async()=>{
        const s = await e();
        n.value = s,
        r.value = !1
    }
    , t == null ? void 0 : t.debounce);
    return t != null && t.trigger && $e(t.trigger, ()=>{
        r.value = !0,
        o()
    }
    , {
        immediate: !0
    }),
    [r, n]
}
function Eo() {
    return bn(),
    q(1)
}
const wr = (e,t=!0)=>{
    !e || window.open(e, t ? "_blank" : "_self")
}
  , gE = "https://cn.bing.com/?mkt=zh-CN&q={{keyword}}"
  , yE = "https://google.com/complete/search?client=chrome&q={{keyword}}";
var _E = Object.defineProperty
  , bE = Object.getOwnPropertyDescriptor
  , wE = (e,t,n,r)=>{
    for (var o = r > 1 ? void 0 : r ? bE(t, n) : t, s = e.length - 1, i; s >= 0; s--)
        (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
    return r && o && _E(t, n, o),
    o
}
;
class Fd extends Bs {
    async search(t, n) {
        const r = t.includes("baidu.com")
          , o = r ? gE : yE;
        return this.service.get(o.replace("{{keyword}}", n)).then(s=>s.status !== 200 ? [s.statusText, []] : r ? this.handleBaiduResponse(s) : this.handleGoogleResponse(s))
    }
    handleBaiduResponse(t) {
        const n = t.data
          , o = /s:(\[[\w\W]*\])/.exec(n);
        return JSON.parse(o[1]).map(a=>a)
    }
    handleGoogleResponse(t) {
        return t.data[1]
    }
}
wE([jn()(e=>e)], Fd.prototype, "search", 1);
const xE = new Fd;
var ua = (e=>(e.up = "up",
e.down = "down",
e))(ua || {});
function SE() {
    const e = q()
      , t = q("")
      , n = q([])
      , r = q(!1)
      , o = q("");
    function s(l) {
        let c = n.value.length - 1;
        if (l === "up") {
            if (e.value === void 0) {
                e.value = c,
                t.value = n.value[e.value];
                return
            }
            if (e.value === 0) {
                e.value = void 0,
                t.value = o.value;
                return
            }
            e.value -= 1,
            t.value = n.value[e.value]
        }
        if (l === "down") {
            if (e.value === void 0) {
                e.value = 0,
                t.value = n.value[e.value];
                return
            }
            if (e.value === c) {
                e.value = void 0,
                t.value = o.value;
                return
            }
            e.value += 1,
            t.value = n.value[e.value]
        }
    }
    function i() {
        t.value = "",
        n.value = [],
        o.value = "",
        e.value = void 0,
        r.value = !1
    }
    function a(l) {
        e.value = l,
        t.value = n.value[l],
        r.value = !1
    }
    return {
        searchIndex: e,
        searchValue: t,
        list: n,
        visiable: r,
        backup: o,
        onChoose: s,
        onReset: i,
        onDecide: a
    }
}
class EE {
    constructor(t) {
        tn(this, "_baseQuery", {
            v: 2,
            tid: "",
            _p: "",
            cid: "",
            ul: "",
            sr: "0x0",
            _s: 1,
            seg: 1,
            dl: "",
            dt: ""
        });
        tn(this, "nanoid", (t=10)=>{
            const n = "useandom26T198340PX75pxJACKVERYMINDBUSHWOLFGQZbfghjklqvwyzrict"
              , r = n.length;
            let o = ""
              , s = t;
            for (; s--; )
                o += n[Math.random() * r | 0];
            return o
        }
        );
        tn(this, "queue", []);
        tn(this, "sendEvent", ()=>{
            const t = Object.keys(this._baseQuery).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(this._baseQuery[n])}`).join("&");
            if (navigator.sendBeacon) {
                if (this.queue.length === 1) {
                    const n = `https://www.google-analytics.com/g/collect?${t}&${this.queue[0]}`;
                    navigator.sendBeacon(n)
                } else if (this.queue.length > 1) {
                    const n = `https://www.google-analytics.com/g/collect?${t}`;
                    navigator.sendBeacon(n, this.queue.join(`\r
`))
                }
            } else
                this.queue.forEach(n=>{
                    const r = `https://www.google-analytics.com/g/collect?${t}&${n}`;
                    fetch(r)
                }
                );
            this.queue = [],
            this._baseQuery._s = Number(this._baseQuery._s) + 1
        }
        );
        tn(this, "throttleSend", ra(this.sendEvent, 2e3, {
            leading: !1,
            trailing: !0
        }));
        this._baseQuery.tid = t,
        this._baseQuery._p = this.nanoid();
        const n = this.safeGetLocalStorage("ga.cid");
        n ? this._baseQuery.cid = n : (this._baseQuery.cid = `${this.nanoid()}.${bw(Date.now() / 1e3)}`,
        this.safeSetLocalStorage("ga.cid", this._baseQuery.cid));
        try {
            this._baseQuery.dl = location.href,
            this._baseQuery.ul = navigator.language,
            this._baseQuery.sr = `${screen.width}x${screen.height}`,
            this._baseQuery.dt = document.title
        } catch {}
    }
    addEvent(t, n) {
        const r = [`en=${t}`, "_ee=1"];
        if (n) {
            const o = Object.keys(n).map(s=>`ep.${encodeURIComponent(s)}=${encodeURIComponent(n[s])}`).join("&");
            r.push(o)
        }
        this.queue.push(r.join("&")),
        this.throttleSend()
    }
    safeSetLocalStorage(t, n) {
        try {
            return localStorage.setItem(t, n)
        } catch {}
    }
    safeGetLocalStorage(t) {
        try {
            return localStorage.getItem(t)
        } catch {}
    }
}
const Ud = new EE("G-02HR9J6Q2G")
  , zd = e=>(Mh("data-v-854a30e3"),
e = e(),
Dh(),
e)
  , CE = {
    class: "absolute mx-auto top-[16vh] left-1/2 ml-[calc(-574px/2)] w-[574px] z-[1000]"
}
  , TE = {
    class: "mb-[10px]"
}
  , $E = zd(()=>N("p", {
    class: "indent-4 text-[14px] text-[#2f2f2fcc]"
}, "https://suggestion.baidu.com", -1))
  , IE = zd(()=>N("p", {
    class: "indent-4 text-[14px] text-[#2f2f2fcc]"
}, "https://google.com", -1))
  , AE = {
    class: "text-[16px] text-right"
}
  , OE = {
    key: 1,
    class: "absolute w-full top-[54px] bg-white rounded-xl text-[#2F2F2FCC] text-[16px] overflow-hidden transition-all"
}
  , kE = ["onClick"]
  , RE = Ce({
    __name: "search-input",
    setup(e) {
        var re;
        const {searchIndex: t, searchValue: n, list: r, backup: o, visiable: s, onChoose: i, onReset: a, onDecide: l} = SE()
          , c = $t({
            lock: 0
        })
          , f = Xt()
          , u = bn()
          , p = q(!1)
          , h = q(!1)
          , m = Eo()
          , g = q()
          , b = q()
          , $ = q(u.config.searchRightRaw === void 0 ? void 0 : !1)
          , [,D] = Qs(async()=>{
            var X;
            if (!((X = f.currentWallpaper) != null && X.url))
                return "";
            const M = await Js(f.currentWallpaper.url)
              , Q = M.r + M.g + M.b <= 255 * 3 ? 255 : 0;
            return `rgba(${Q}, ${Q}, ${Q}, 1)`
        }
        )
          , U = Y(()=>{
            var M;
            return p.value || h.value ? (M = D.value) == null ? void 0 : M.replace(/, 1\)/, ", 1)") : D.value
        }
        )
          , R = ()=>{
            p.value = !0
        }
          , x = ()=>{
            h.value || (p.value = !1)
        }
          , B = ()=>{
            h.value = !0,
            r.value.length && (s.value = !0)
        }
          , L = ()=>wr(u.config.searchEngine.replace("{{keyword}}", n.value), u.config.searchOpenNewTab)
          , S = M=>{
            var Q;
            (Q = g.value) != null && Q.contains(M.target) || (h.value = !1,
            p.value = !1,
            s.value = !1)
        }
          , k = M=>{
            var Q;
            (Q = b.value) != null && Q.contains(M.target) || $.value === !0 && ($.value = void 0)
        }
          , A = Vs(async M=>{
            let Q = c.lock + 1;
            if (c.lock = Q,
            o.value = M,
            !M)
                return a();
            s.value = !0;
            const X = u.config.searchEngine;
            Ud.addEvent("user-search", {
                id: chrome.runtime.id,
                keywords: M,
                lang: bt(),
                name: "user-search",
                engine: X
            });
            const ge = await xE.search(X, M);
            if (c.lock !== Q)
                return;
            const [Se,xe] = ge;
            Se || (r.value = xe.slice(0, 8))
        }
        , 350, {
            leading: !0,
            trailing: !0
        })
          , te = (M,Q)=>{
            Q.preventDefault(),
            r.value.length !== 0 && i(M)
        }
          , z = async M=>{
            l(M),
            await ft(),
            L()
        }
          , ne = ()=>{
            A("")
        }
          , W = M=>{
            M.stopPropagation(),
            $.value === void 0 && ($.value = !0),
            document.querySelector("#search").focus()
        }
          , J = M=>{
            $.value = !1,
            EVENT_BUS == null || EVENT_BUS.emit("change-search-right", M),
            window.BC.postMessage("sync-search-right-request-dialog"),
            M === !1 && window.BC.postMessage("sync-search-right", M)
        }
        ;
        return Je(()=>{
            document.addEventListener("click", S),
            document.addEventListener("click", k)
        }
        ),
        EVENT_BUS == null || EVENT_BUS.on("sync-search-right-request-dialog", ()=>{
            $.value = !1
        }
        ),
        (re = window.BC) == null || re.on("sync-search-right-request-dialog", ()=>{
            $.value = !1
        }
        ),
        (M,Q)=>{
            const X = et
              , ge = Td
              , Se = Cx;
            return O(),
            K("section", CE, [N("div", {
                ref_key: "inputRef",
                ref: g,
                onClick: W
            }, [de(ge, {
                modelValue: d(n),
                "onUpdate:modelValue": Q[0] || (Q[0] = xe=>Fe(n) ? n.value = xe : null),
                id: "search",
                spellcheck: "false",
                class: "fixed w-[574px] h-[46px] rounded-full transition-opacity duration-300 bg-rgba(0,0,0,.1))",
                style: Qe({
                    boxShadow: `0 0 0 2px ${d(U)}`,
                    opacity: d(m)
                }),
                "input-style": {
                    color: d(U)
                },
                placeholder: M.$t("search.placeholder"),
                size: "large",
                clearable: !1,
                onMouseenter: R,
                onMouseleave: x,
                onFocus: B,
                onInput: d(A),
                onKeyup: eo(L, ["enter"]),
                onKeydown: [Q[1] || (Q[1] = eo(xe=>te(d(ua).up, xe), ["up"])), Q[2] || (Q[2] = eo(xe=>te(d(ua).down, xe), ["down"]))]
            }, {
                suffix: Te(()=>[de(X, {
                    color: "#fff",
                    size: "20",
                    class: "font-black cursor-pointer"
                }, {
                    default: Te(()=>[d(n) ? (O(),
                    Ie(d(Ws), {
                        key: 0,
                        onClick: ne
                    })) : (O(),
                    Ie(d(B1), {
                        key: 1
                    }))]),
                    _: 1
                })]),
                _: 1
            }, 8, ["modelValue", "style", "input-style", "placeholder", "onInput", "onKeyup"])], 512), d($) ? (O(),
            K("div", {
                key: 0,
                ref_key: "authModalRef",
                ref: b,
                class: "absolute w-full top-[54px] bg-white rounded-xl text-[#2F2F2FCC] text-[16px] overflow-hidden transition-all p-6"
            }, [N("div", null, [N("p", TE, we(M.$t("search.right.asked")), 1), $E, IE]), N("div", AE, [de(Se, {
                type: "info",
                link: "",
                onClick: Q[3] || (Q[3] = xe=>J(!1))
            }, {
                default: Te(()=>[Fn(we(M.$t("settings.config.searchRight.options.deny")), 1)]),
                _: 1
            }), de(Se, {
                type: "primary",
                link: "",
                onClick: Q[4] || (Q[4] = xe=>J(!0))
            }, {
                default: Te(()=>[Fn(we(M.$t("settings.config.searchRight.options.allow")), 1)]),
                _: 1
            })])], 512)) : ye("", !0), d(s) ? (O(),
            K("div", OE, [d(r).length > 0 ? (O(!0),
            K(De, {
                key: 0
            }, Nt(d(r), (xe,Ue)=>(O(),
            K("div", {
                key: xe,
                class: pe({
                    "hover:bg-[#F0F0F0] hover:text-[#2F2F2F] px-[30px] py-[10px] cursor-pointer transition-all": !0,
                    "bg-[#F0F0F0]": Ue === d(t)
                }),
                onClick: at=>z(Ue)
            }, we(xe), 11, kE))), 128)) : ye("", !0)])) : ye("", !0)])
        }
    }
});
const en = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,o] of t)
        n[r] = o;
    return n
}
  , NE = en(RE, [["__scopeId", "data-v-854a30e3"]]);
function Xs(e) {
    return gs() ? (ys(e),
    !0) : !1
}
function mt(e) {
    return typeof e == "function" ? e() : d(e)
}
const jd = typeof window < "u"
  , PE = e=>e != null
  , Ht = ()=>{}
  , fa = LE();
function LE() {
    var e;
    return jd && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent)
}
function Hd(e, t) {
    function n(...r) {
        return new Promise((o,s)=>{
            Promise.resolve(e(()=>t.apply(this, r), {
                fn: t,
                thisArg: this,
                args: r
            })).then(o).catch(s)
        }
        )
    }
    return n
}
function ME(e, t={}) {
    let n, r, o = Ht;
    const s = a=>{
        clearTimeout(a),
        o(),
        o = Ht
    }
    ;
    return a=>{
        const l = mt(e)
          , c = mt(t.maxWait);
        return n && s(n),
        l <= 0 || c !== void 0 && c <= 0 ? (r && (s(r),
        r = null),
        Promise.resolve(a())) : new Promise((f,u)=>{
            o = t.rejectOnCancel ? u : f,
            c && !r && (r = setTimeout(()=>{
                n && s(n),
                r = null,
                f(a())
            }
            , c)),
            n = setTimeout(()=>{
                r && s(r),
                r = null,
                f(a())
            }
            , l)
        }
        )
    }
}
function DE(e, t=!0, n=!0, r=!1) {
    let o = 0, s, i = !0, a = Ht, l;
    const c = ()=>{
        s && (clearTimeout(s),
        s = void 0,
        a(),
        a = Ht)
    }
    ;
    return u=>{
        const p = mt(e)
          , h = Date.now() - o
          , m = ()=>l = u();
        return c(),
        p <= 0 ? (o = Date.now(),
        m()) : (h > p && (n || !i) ? (o = Date.now(),
        m()) : t && (l = new Promise((g,b)=>{
            a = r ? b : g,
            s = setTimeout(()=>{
                o = Date.now(),
                i = !0,
                g(m()),
                c()
            }
            , Math.max(0, p - h))
        }
        )),
        !n && !s && (s = setTimeout(()=>i = !0, p)),
        i = !1,
        l)
    }
}
const ln = {
    mounted: "mounted",
    updated: "updated",
    unmounted: "unmounted"
};
function BE(...e) {
    if (e.length !== 1)
        return io(...e);
    const t = e[0];
    return typeof t == "function" ? bs(Ch(()=>({
        get: t,
        set: Ht
    }))) : q(t)
}
function FE(e, t=200, n={}) {
    return Hd(ME(t, n), e)
}
function UE(e, t=200, n=!1, r=!0, o=!1) {
    return Hd(DE(t, n, r, o), e)
}
function Tt(e) {
    var t;
    const n = mt(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Hn = jd ? window : void 0;
function Vt(...e) {
    let t, n, r, o;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,o] = e,
    t = Hn) : [t,n,r,o] = e,
    !t)
        return Ht;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const s = []
      , i = ()=>{
        s.forEach(f=>f()),
        s.length = 0
    }
      , a = (f,u,p,h)=>(f.addEventListener(u, p, h),
    ()=>f.removeEventListener(u, p, h))
      , l = $e(()=>[Tt(t), mt(o)], ([f,u])=>{
        i(),
        f && s.push(...n.flatMap(p=>r.map(h=>a(f, p, h, u))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , c = ()=>{
        l(),
        i()
    }
    ;
    return Xs(c),
    c
}
let cu = !1;
function uu(e, t, n={}) {
    const {window: r=Hn, ignore: o=[], capture: s=!0, detectIframe: i=!1} = n;
    if (!r)
        return;
    fa && !cu && (cu = !0,
    Array.from(r.document.body.children).forEach(p=>p.addEventListener("click", Ht)));
    let a = !0;
    const l = p=>o.some(h=>{
        if (typeof h == "string")
            return Array.from(r.document.querySelectorAll(h)).some(m=>m === p.target || p.composedPath().includes(m));
        {
            const m = Tt(h);
            return m && (p.target === m || p.composedPath().includes(m))
        }
    }
    )
      , f = [Vt(r, "click", p=>{
        const h = Tt(e);
        if (!(!h || h === p.target || p.composedPath().includes(h))) {
            if (p.detail === 0 && (a = !l(p)),
            !a) {
                a = !0;
                return
            }
            t(p)
        }
    }
    , {
        passive: !0,
        capture: s
    }), Vt(r, "pointerdown", p=>{
        const h = Tt(e);
        h && (a = !p.composedPath().includes(h) && !l(p))
    }
    , {
        passive: !0
    }), i && Vt(r, "blur", p=>{
        setTimeout(()=>{
            var h;
            const m = Tt(e);
            ((h = r.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(m != null && m.contains(r.document.activeElement)) && t(p)
        }
        , 0)
    }
    )].filter(Boolean);
    return ()=>f.forEach(p=>p())
}
const ol = {
    [ln.mounted](e, t) {
        const n = !t.modifiers.bubble;
        if (typeof t.value == "function")
            e.__onClickOutside_stop = uu(e, t.value, {
                capture: n
            });
        else {
            const [r,o] = t.value;
            e.__onClickOutside_stop = uu(e, r, Object.assign({
                capture: n
            }, o))
        }
    },
    [ln.unmounted](e) {
        e.__onClickOutside_stop()
    }
};
function zE(e) {
    return typeof e == "function" ? e : typeof e == "string" ? t=>t.key === e : Array.isArray(e) ? t=>e.includes(t.key) : ()=>!0
}
function fu(...e) {
    let t, n, r = {};
    e.length === 3 ? (t = e[0],
    n = e[1],
    r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0,
    n = e[0],
    r = e[1]) : (t = e[0],
    n = e[1]) : (t = !0,
    n = e[0]);
    const {target: o=Hn, eventName: s="keydown", passive: i=!1, dedupe: a=!1} = r
      , l = zE(t);
    return Vt(o, s, f=>{
        f.repeat && mt(a) || l(f) && n(f)
    }
    , i)
}
var jE = Object.defineProperty
  , du = Object.getOwnPropertySymbols
  , HE = Object.prototype.hasOwnProperty
  , VE = Object.prototype.propertyIsEnumerable
  , pu = (e,t,n)=>t in e ? jE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , WE = (e,t)=>{
    for (var n in t || (t = {}))
        HE.call(t, n) && pu(e, n, t[n]);
    if (du)
        for (var n of du(t))
            VE.call(t, n) && pu(e, n, t[n]);
    return e
}
;
ln.mounted + "";
const KE = 500;
function hu(e, t, n) {
    var r, o;
    const s = Y(()=>Tt(e));
    let i;
    function a() {
        i && (clearTimeout(i),
        i = void 0)
    }
    function l(f) {
        var u, p, h, m;
        ((u = n == null ? void 0 : n.modifiers) == null ? void 0 : u.self) && f.target !== s.value || (a(),
        (p = n == null ? void 0 : n.modifiers) != null && p.prevent && f.preventDefault(),
        (h = n == null ? void 0 : n.modifiers) != null && h.stop && f.stopPropagation(),
        i = setTimeout(()=>t(f), (m = n == null ? void 0 : n.delay) != null ? m : KE))
    }
    const c = {
        capture: (r = n == null ? void 0 : n.modifiers) == null ? void 0 : r.capture,
        once: (o = n == null ? void 0 : n.modifiers) == null ? void 0 : o.once
    };
    Vt(s, "pointerdown", l, c),
    Vt(s, "pointerup", a, c),
    Vt(s, "pointerleave", a, c)
}
ln.mounted + "";
function YE() {
    const e = q(!1);
    return Ot() && Je(()=>{
        e.value = !0
    }
    ),
    e
}
function Vd(e) {
    const t = YE();
    return Y(()=>(t.value,
    Boolean(e())))
}
function qE(e, t={}) {
    const {delayEnter: n=0, delayLeave: r=0, window: o=Hn} = t
      , s = q(!1);
    let i;
    const a = l=>{
        const c = l ? n : r;
        i && (clearTimeout(i),
        i = void 0),
        c ? i = setTimeout(()=>s.value = l, c) : s.value = l
    }
    ;
    return o && (Vt(e, "mouseenter", ()=>a(!0), {
        passive: !0
    }),
    Vt(e, "mouseleave", ()=>a(!1), {
        passive: !0
    })),
    s
}
ln.mounted + "";
var mu = Object.getOwnPropertySymbols
  , GE = Object.prototype.hasOwnProperty
  , JE = Object.prototype.propertyIsEnumerable
  , QE = (e,t)=>{
    var n = {};
    for (var r in e)
        GE.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && mu)
        for (var r of mu(e))
            t.indexOf(r) < 0 && JE.call(e, r) && (n[r] = e[r]);
    return n
}
;
function XE(e, t, n={}) {
    const r = n
      , {window: o=Hn} = r
      , s = QE(r, ["window"]);
    let i;
    const a = Vd(()=>o && "ResizeObserver"in o)
      , l = ()=>{
        i && (i.disconnect(),
        i = void 0)
    }
      , c = Y(()=>Array.isArray(e) ? e.map(p=>Tt(p)) : [Tt(e)])
      , f = $e(c, p=>{
        if (l(),
        a.value && o) {
            i = new ResizeObserver(t);
            for (const h of p)
                h && i.observe(h, s)
        }
    }
    , {
        immediate: !0,
        flush: "post",
        deep: !0
    })
      , u = ()=>{
        l(),
        f()
    }
    ;
    return Xs(u),
    {
        isSupported: a,
        stop: u
    }
}
function ZE(e, t={
    width: 0,
    height: 0
}, n={}) {
    const {window: r=Hn, box: o="content-box"} = n
      , s = Y(()=>{
        var l, c;
        return (c = (l = Tt(e)) == null ? void 0 : l.namespaceURI) == null ? void 0 : c.includes("svg")
    }
    )
      , i = q(t.width)
      , a = q(t.height);
    return XE(e, ([l])=>{
        const c = o === "border-box" ? l.borderBoxSize : o === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
        if (r && s.value) {
            const f = Tt(e);
            if (f) {
                const u = r.getComputedStyle(f);
                i.value = Number.parseFloat(u.width),
                a.value = Number.parseFloat(u.height)
            }
        } else if (c) {
            const f = Array.isArray(c) ? c : [c];
            i.value = f.reduce((u,{inlineSize: p})=>u + p, 0),
            a.value = f.reduce((u,{blockSize: p})=>u + p, 0)
        } else
            i.value = l.contentRect.width,
            a.value = l.contentRect.height
    }
    , n),
    $e(()=>Tt(e), l=>{
        i.value = l ? t.width : 0,
        a.value = l ? t.height : 0
    }
    ),
    {
        width: i,
        height: a
    }
}
ln.mounted + "";
function da(e, t, n={}) {
    const {root: r, rootMargin: o="0px", threshold: s=.1, window: i=Hn, immediate: a=!0} = n
      , l = Vd(()=>i && "IntersectionObserver"in i)
      , c = Y(()=>{
        const m = mt(e);
        return (Array.isArray(m) ? m : [m]).map(Tt).filter(PE)
    }
    );
    let f = Ht;
    const u = q(a)
      , p = l.value ? $e(()=>[c.value, Tt(r), u.value], ([m,g])=>{
        if (f(),
        !u.value || !m.length)
            return;
        const b = new IntersectionObserver(t,{
            root: Tt(g),
            rootMargin: o,
            threshold: s
        });
        m.forEach($=>$ && b.observe($)),
        f = ()=>{
            b.disconnect(),
            f = Ht
        }
    }
    , {
        immediate: a,
        flush: "post"
    }) : Ht
      , h = ()=>{
        f(),
        p(),
        u.value = !1
    }
    ;
    return Xs(h),
    {
        isSupported: l,
        isActive: u,
        pause() {
            f(),
            u.value = !1
        },
        resume() {
            u.value = !0
        },
        stop: h
    }
}
function vu(e, {window: t=Hn, scrollTarget: n}={}) {
    const r = q(!1);
    return da(e, ([{isIntersecting: o}])=>{
        r.value = o
    }
    , {
        root: n,
        window: t
    }),
    r
}
ln.mounted + "";
const gu = 1;
function pa(e, t={}) {
    const {throttle: n=0, idle: r=200, onStop: o=Ht, onScroll: s=Ht, offset: i={
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, eventListenerOptions: a={
        capture: !1,
        passive: !0
    }, behavior: l="auto"} = t
      , c = q(0)
      , f = q(0)
      , u = Y({
        get() {
            return c.value
        },
        set(x) {
            h(x, void 0)
        }
    })
      , p = Y({
        get() {
            return f.value
        },
        set(x) {
            h(void 0, x)
        }
    });
    function h(x, B) {
        var L, S, k;
        const A = mt(e);
        !A || (k = A instanceof Document ? document.body : A) == null || k.scrollTo({
            top: (L = mt(B)) != null ? L : p.value,
            left: (S = mt(x)) != null ? S : u.value,
            behavior: mt(l)
        })
    }
    const m = q(!1)
      , g = $t({
        left: !0,
        right: !1,
        top: !0,
        bottom: !1
    })
      , b = $t({
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
    })
      , $ = x=>{
        !m.value || (m.value = !1,
        b.left = !1,
        b.right = !1,
        b.top = !1,
        b.bottom = !1,
        o(x))
    }
      , D = FE($, n + r)
      , U = x=>{
        const B = x === window ? x.document.documentElement : x === document ? x.documentElement : x
          , {display: L, flexDirection: S} = getComputedStyle(B)
          , k = B.scrollLeft;
        b.left = k < c.value,
        b.right = k > c.value;
        const A = Math.abs(k) <= 0 + (i.left || 0)
          , te = Math.abs(k) + B.clientWidth >= B.scrollWidth - (i.right || 0) - gu;
        L === "flex" && S === "row-reverse" ? (g.left = te,
        g.right = A) : (g.left = A,
        g.right = te),
        c.value = k;
        let z = B.scrollTop;
        x === document && !z && (z = document.body.scrollTop),
        b.top = z < f.value,
        b.bottom = z > f.value;
        const ne = Math.abs(z) <= 0 + (i.top || 0)
          , W = Math.abs(z) + B.clientHeight >= B.scrollHeight - (i.bottom || 0) - gu;
        L === "flex" && S === "column-reverse" ? (g.top = W,
        g.bottom = ne) : (g.top = ne,
        g.bottom = W),
        f.value = z
    }
      , R = x=>{
        const B = x.target === document ? x.target.documentElement : x.target;
        U(B),
        m.value = !0,
        D(x),
        s(x)
    }
    ;
    return Vt(e, "scroll", n ? UE(R, n, !0, !1) : R, a),
    Vt(e, "scrollend", $, a),
    {
        x: u,
        y: p,
        isScrolling: m,
        arrivedState: g,
        directions: b,
        measure() {
            const x = mt(e);
            x && U(x)
        }
    }
}
var eC = Object.defineProperty
  , tC = Object.defineProperties
  , nC = Object.getOwnPropertyDescriptors
  , yu = Object.getOwnPropertySymbols
  , rC = Object.prototype.hasOwnProperty
  , oC = Object.prototype.propertyIsEnumerable
  , _u = (e,t,n)=>t in e ? eC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , bu = (e,t)=>{
    for (var n in t || (t = {}))
        rC.call(t, n) && _u(e, n, t[n]);
    if (yu)
        for (var n of yu(t))
            oC.call(t, n) && _u(e, n, t[n]);
    return e
}
  , sC = (e,t)=>tC(e, nC(t));
function wu(e, t, n={}) {
    var r;
    const {direction: o="bottom", interval: s=100} = n
      , i = $t(pa(e, sC(bu({}, n), {
        offset: bu({
            [o]: (r = n.distance) != null ? r : 0
        }, n.offset)
    })))
      , a = q()
      , l = Y(()=>!!a.value);
    function c() {
        i.measure();
        const f = mt(e);
        if (!f || !f.offsetParent)
            return;
        const u = o === "bottom" || o === "top" ? f.scrollHeight <= f.clientHeight : f.scrollWidth <= f.clientWidth;
        (i.arrivedState[o] || u) && (a.value || (a.value = Promise.all([t(i), new Promise(p=>setTimeout(p, s))]).finally(()=>{
            a.value = null,
            ft(()=>c())
        }
        )))
    }
    return $e(()=>[i.arrivedState[o], mt(e)], c, {
        immediate: !0
    }),
    {
        isLoading: l
    }
}
ln.mounted + "";
ln.mounted + "";
var iC = Object.defineProperty
  , aC = Object.defineProperties
  , lC = Object.getOwnPropertyDescriptors
  , xu = Object.getOwnPropertySymbols
  , cC = Object.prototype.hasOwnProperty
  , uC = Object.prototype.propertyIsEnumerable
  , Su = (e,t,n)=>t in e ? iC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , fC = (e,t)=>{
    for (var n in t || (t = {}))
        cC.call(t, n) && Su(e, n, t[n]);
    if (xu)
        for (var n of xu(t))
            uC.call(t, n) && Su(e, n, t[n]);
    return e
}
  , dC = (e,t)=>aC(e, lC(t));
ln.mounted + "";
function Wd(e) {
    const t = window.getComputedStyle(e);
    if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
        return !0;
    {
        const n = e.parentNode;
        return !n || n.tagName === "BODY" ? !1 : Wd(n)
    }
}
function pC(e) {
    const t = e || window.event
      , n = t.target;
    return Wd(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(),
    !1)
}
function hC(e, t=!1) {
    const n = q(t);
    let r = null, o;
    $e(BE(e), a=>{
        if (a) {
            const l = a;
            o = l.style.overflow,
            n.value && (l.style.overflow = "hidden")
        }
    }
    , {
        immediate: !0
    });
    const s = ()=>{
        const a = mt(e);
        !a || n.value || (fa && (r = Vt(a, "touchmove", l=>{
            pC(l)
        }
        , {
            passive: !1
        })),
        a.style.overflow = "hidden",
        n.value = !0)
    }
      , i = ()=>{
        const a = mt(e);
        !a || !n.value || (fa && (r == null || r()),
        a.style.overflow = o,
        n.value = !1)
    }
    ;
    return Xs(i),
    Y({
        get() {
            return n.value
        },
        set(a) {
            a ? s() : i()
        }
    })
}
function mC() {
    let e = !1;
    const t = q(!1);
    return (n,r)=>{
        if (t.value = r.value,
        e)
            return;
        e = !0;
        const o = hC(n, r.value);
        $e(t, s=>o.value = s)
    }
}
mC();
const vC = {
    class: "w-full text-[14px] leading-[18px] text-black cursor-pointer relative select-none"
}
  , gC = ["onClick"]
  , yC = {
    key: 0,
    class: "expanded-select absolute top-0 left-0 w-full bg-white rounded-md z-10"
}
  , _C = ["onClick"]
  , bC = ["onClick"]
  , wC = Ce({
    __name: "settings-select",
    props: {
        modelValue: {},
        options: {},
        disabled: {
            type: Boolean
        }
    },
    emits: ["update:modelValue", "change"],
    setup(e, {emit: t}) {
        const n = e
          , r = q(!1)
          , o = ()=>{
            n.disabled || (r.value = !r.value)
        }
          , s = a=>{
            t("update:modelValue", a),
            t("change", a),
            r.value = !1
        }
          , i = ()=>{
            r.value = !1
        }
        ;
        return (a,l)=>{
            var f, u;
            const c = et;
            return gt((O(),
            K("div", vC, [N("div", {
                class: pe(["py-2 px-3 bg-gray-100 rounded-md", {
                    "opacity-70": n.disabled,
                    "cursor-default": n.disabled
                }]),
                onClick: lt(o, ["stop"])
            }, [Fn(we((f = n.options.find(p=>p.value === n.modelValue)) == null ? void 0 : f.label) + " ", 1), de(c, {
                class: "absolute top-1/2 right-3 -translate-y-1/2",
                size: "18",
                color: "#9b9b9b"
            }, {
                default: Te(()=>[de(d(Wc))]),
                _: 1
            })], 10, gC), d(r) ? (O(),
            K("div", yC, [N("div", {
                class: "py-2 px-3 border-b border-gray-100 rounded-t-md bg-white relative",
                onClick: lt(o, ["stop"])
            }, [Fn(we((u = n.options.find(p=>p.value === n.modelValue)) == null ? void 0 : u.label) + " ", 1), de(c, {
                class: "absolute top-1/2 right-3 -translate-y-1/2",
                size: "18",
                color: "#9b9b9b"
            }, {
                default: Te(()=>[de(d(Wc))]),
                _: 1
            })], 8, _C), (O(!0),
            K(De, null, Nt(n.options, p=>(O(),
            K("div", {
                key: p.value,
                class: "py-2 px-3 cursor-pointer hover:bg-gray-100",
                onClick: lt(h=>s(p.value), ["stop"])
            }, we(p.label), 9, bC))), 128))])) : ye("", !0)])), [[d(ol), i]])
        }
    }
});
const xC = en(wC, [["__scopeId", "data-v-e9d74294"]])
  , SC = {
    class: "text-xs mt-4 mb-2 text-[rgba(74,74,74,.8)]"
}
  , EC = Ce({
    __name: "settings-item",
    props: {
        label: {},
        disabled: {
            type: Boolean
        }
    },
    setup(e) {
        const t = e;
        return (n,r)=>(O(),
        K("div", {
            class: pe({
                "opacity-70": t.disabled
            })
        }, [N("div", SC, we(t.label), 1), Ve(n.$slots, "default")], 2))
    }
});
const CC = {
    class: "w-full flex justify-between items-center mt-8"
}
  , TC = {
    class: "text-lg !text-[#2F2F2F] font-[500]"
}
  , $C = Ce({
    __name: "settings-group",
    props: {
        title: {},
        name: {},
        modelValue: {
            type: Boolean
        },
        switchable: {
            type: Boolean
        }
    },
    emits: ["update:modelValue"],
    setup(e, {emit: t}) {
        const n = e;
        return Je(()=>{
            document.querySelectorAll(".el-collapse-item__arrow").forEach(r=>r.remove())
        }
        ),
        (r,o)=>{
            const s = mE;
            return O(),
            K("div", null, [N("div", CC, [N("span", TC, we(n.title), 1), r.switchable ? (O(),
            Ie(s, {
                key: 0,
                "model-value": n.modelValue,
                onClick: o[0] || (o[0] = lt(()=>{}
                , ["stop"])),
                onChange: o[1] || (o[1] = i=>t("update:modelValue", i))
            }, null, 8, ["model-value"])) : ye("", !0)]), Ve(r.$slots, "default", {}, void 0, !0)])
        }
    }
});
const IC = en($C, [["__scopeId", "data-v-5728c6bc"]]);
function Kd() {
    const e = q(!1)
      , t = $t({
        searchEngineList: []
    })
      , n = $t({
        ...settings.group
    })
      , r = $t({
        ...settings.config
    });
    return {
        visible: e,
        data: t,
        groups: n,
        config: r,
        open: async()=>{
            e.value = !0
        }
        ,
        close: ()=>{
            e.value = !1
        }
    }
}
function AC() {
    const e = Xt()
      , t = Wa;
    return Y(()=>[{
        key: "search",
        title: t("settings.groups.search.title"),
        children: [{
            key: "searchEngine",
            label: t("settings.config.searchEngine.label"),
            options: [...e.searchEngineList.map(r=>({
                label: r.title[bt() === "zh-CN" ? "zh-CN" : "en"],
                value: r.url
            }))]
        }, {
            key: "searchRight",
            label: t("settings.config.searchRight.label"),
            options: [{
                label: t("settings.config.searchRight.options.allow"),
                value: !0
            }, {
                label: t("settings.config.searchRight.options.deny"),
                value: !1
            }]
        }, {
            key: "searchOpenNewTab",
            label: t("settings.config.searchOpenNewTab.label"),
            options: [{
                label: t("settings.config.searchOpenNewTab.options.current"),
                value: !1
            }, {
                label: t("settings.config.searchOpenNewTab.options.new"),
                value: !0
            }]
        }]
    }, {
        key: "clockVisible",
        title: t("settings.groups.clockVisible.title"),
        children: [{
            key: "clockFormat",
            label: t("settings.config.clockFormat.label"),
            options: [{
                label: t("settings.config.clockFormat.options.12h"),
                value: "12"
            }, {
                label: t("settings.config.clockFormat.options.24h"),
                value: "24"
            }]
        }]
    }, {
        key: "weatherVisible",
        title: t("settings.groups.weatherVisible.title"),
        children: [{
            key: "weatherUnit",
            label: t("settings.config.weatherUnit.label"),
            options: [{
                label: t("settings.config.weatherUnit.options.c"),
                value: "c"
            }, {
                label: t("settings.config.weatherUnit.options.f"),
                value: "f"
            }]
        }]
    }, {
        key: "wallpaperChangeable",
        title: t("settings.groups.wallpaperChangeable.title"),
        children: [{
            key: "wallpaperChangeFrequency",
            label: t("settings.config.wallpaperChangeFrequency.label"),
            options: [{
                label: t("settings.config.wallpaperChangeFrequency.options.reopen"),
                value: "reopen"
            }, {
                label: t("settings.config.wallpaperChangeFrequency.options.1h"),
                value: "1h"
            }, {
                label: t("settings.config.wallpaperChangeFrequency.options.1d"),
                value: "1d"
            }]
        }, {
            key: "wallpaperChangeBy",
            label: t("settings.config.wallpaperChangeBy.label"),
            options: [{
                label: t("settings.config.wallpaperChangeBy.options.random"),
                value: "random"
            }, {
                label: t("settings.config.wallpaperChangeBy.options.order"),
                value: "order"
            }]
        }]
    }])
}
function OC() {
    const e = $t({
        switchTimer: void 0,
        countdownTimer: void 0
    });
    return {
        timers: e,
        clearTimer: r,
        updateCountdownTimer: a
    };
    function t() {
        clearInterval(e.switchTimer),
        e.switchTimer = void 0
    }
    function n() {
        clearTimeout(e.countdownTimer),
        e.countdownTimer = void 0
    }
    function r() {
        t(),
        n()
    }
    function o(l) {
        let c = 36e5;
        return l === "reopen" && (c = 0),
        /^\d+s$/.test(l) && (c = /^(\d+)s$/.exec(l)[1] * 1e3),
        (l === "24h" || l === "1d") && (c = 24 * 60 * 60 * 1e3),
        l === "1h" && (c = 60 * 60 * 1e3),
        c
    }
    function s(l) {
        const c = l.fullList || []
          , f = c.filter(g=>g.like !== !1)
          , u = l.currentIndex
          , p = l.isRandomMode
          , h = kC(f, c, u);
        if (h === -1)
            return Eu(f, c, -1);
        if (p)
            return Eu(f, c, h);
        const m = (h + 1) % f.length;
        return Yd(f, c, m)
    }
    async function i() {
        if (document.hidden)
            return;
        const [l,c="random",f] = await Promise.all([me.get("currentWallpaperIndex"), me.get("config.wallpaperChangeBy"), me.get("wallpaperList")])
          , u = f || window.config.wallpaperList
          , p = s({
            fullList: u,
            isRandomMode: c === "random",
            currentIndex: l
        })
          , h = Date.now();
        await me.set("currentWallpaperIndex", p),
        await me.set("config.wallpaperUpdateAt", h),
        EVENT_BUS == null || EVENT_BUS.emit("indexdb-update-wp-index", p)
    }
    async function a() {
        if (document.hidden)
            return;
        r();
        const [l="reopen",c=0,f] = await Promise.all([me.get("config.wallpaperChangeFrequency"), me.get("config.wallpaperUpdateAt"), me.get("group.wallpaperChangeable")]);
        if (l === "reopen" || f === !1)
            return;
        const u = o(l)
          , p = Date.now() - c
          , h = u - p;
        if (h <= 0) {
            await i(),
            Ti(u) && (e.switchTimer = setInterval(i, u));
            return
        }
        Ti(u) && (e.countdownTimer = setTimeout(()=>{
            i(),
            u !== 1 / 0 && Ti(u) && e.switchTimer === void 0 && (e.switchTimer = setInterval(i, u))
        }
        , h))
    }
}
function Ti(e) {
    return e > 0
}
function kC(e, t, n) {
    let r = t[n];
    return e.findIndex(o=>o.id === r.id)
}
function Eu(e, t, n) {
    let r = RC(n, e.length);
    return Yd(e, t, r)
}
function RC(e, t) {
    let n;
    for (; n === e || n === void 0; )
        n = Math.floor(Math.random() * t);
    return n
}
function Yd(e, t, n) {
    return t.findIndex(r=>r.id === e[n].id)
}
const NC = OC()
  , sl = ks("wallpaper", {
    state: ()=>({
        wallpaperManager: NC
    }),
    getters: {},
    actions: {}
})
  , PC = {
    class: "text-black text-2xl font-bold"
}
  , LC = {
    class: "absolute w-full p-4 z-10 bg-white"
}
  , MC = ["src"]
  , DC = {
    class: "mt-4"
}
  , BC = {
    class: "mt-4"
}
  , FC = {
    class: "text-xs text-gray-400 hover:underline mr-4",
    href: "https://api.mytab.me/pages/privacy-policy.html",
    target: "_blank"
}
  , UC = {
    class: "text-xs text-gray-400 hover:underline mr-4",
    href: "https://api.mytab.me/pages/terms-of-use.html",
    target: "_blank"
}
  , zC = Ce({
    __name: "settings-popup",
    setup(e) {
        var $, D;
        const t = Kd()
          , n = bn()
          , r = Xt()
          , {wallpaperManager: o} = sl()
          , s = AC()
          , i = q()
          , a = Eo()
          , l = bt()
          , c = Y(()=>{
            var U;
            return encodeURIComponent(((U = r.name) == null ? void 0 : U[l]) || "")
        }
        );
        Y(()=>{
            var U;
            return encodeURIComponent(((U = r.description) == null ? void 0 : U[l]) || "")
        }
        );
        const f = /edge/g.test(navigator.userAgent.toLowerCase())
          , u = encodeURIComponent(f ? `https://microsoftedge.microsoft.com/addons/detail/${chrome.runtime.id || ""}` : `https://chrome.google.com/webstore/detail/${(($ = chrome == null ? void 0 : chrome.runtime) == null ? void 0 : $.id) || ""}`)
          , p = Y(()=>encodeURIComponent(r.promotionalImageUrl || ""));
        q(!1),
        Je(()=>{}
        );
        const h = (U,R)=>{
            n.updateConfig(U, R)
        }
        ;
        EVENT_BUS == null || EVENT_BUS.on("change-search-right", m),
        $e(()=>n.config.wallpaperChangeFrequency, async U=>{
            await me.set("config.wallpaperUpdateAt", Date.now()),
            o.updateCountdownTimer()
        }
        , {
            deep: !0
        }),
        $e(()=>n.group.wallpaperChangeable, async U=>{
            o.updateCountdownTimer()
        }
        , {
            deep: !0
        }),
        $e(()=>t.config.searchRight, U=>{
            console.log("searchRight", U),
            m(U),
            window.BC.postMessage("sync-search-right", U);
            const R = ["https://suggestion.baidu.com/*", "https://google.com/*"];
            U === !0 ? chrome.permissions.request({
                origins: R
            }, x=>{
                x !== void 0 && (m(x),
                window.BC.postMessage("sync-search-right", x),
                x === !0 && (window.BC.postMessage("sync-search-right-request-dialog"),
                EVENT_BUS.emit("sync-search-right-request-dialog")))
            }
            ) : chrome.permissions.remove({
                origins: R
            })
        }
        );
        function m(U) {
            t.config.searchRight = U,
            r.searchRight = U,
            n.updateConfig("searchRight", U)
        }
        (D = window.BC) == null || D.on("sync-search-right", m);
        function g() {
            window.open("https://forms.gle/zxNWkqBojAAjYH1h7", "_blank")
        }
        function b() {
            window.open("https://theme.mytab.me", "_blank")
        }
        return Je(()=>{
            
        }
        ),
        (U,R)=>{
            const x = xC
              , B = EC
              , L = IC
              , S = ex
              , k = CS;
            return O(),
            K(De, null, [N("div", {
                class: "trigger fixed top-8 right-8 cursor-pointer text-black",
                onClick: R[0] || (R[0] = (...A)=>d(t).open && d(t).open(...A))
            }), de(k, {
                class: "transition-all duration-300",
                ref_key: "drawer",
                ref: i,
                modelValue: d(t).visible.value,
                "onUpdate:modelValue": R[6] || (R[6] = A=>d(t).visible.value = A),
                direction: "rtl",
                size: "420px",
                "show-close": !1,
                "modal-class": {
                    "opacity-100": d(a),
                    "opacity-0": !d(a),
                    "duration-300": !0
                },
                style: Qe({
                    opacity: d(a) ? 1 : 0
                })
            }, {
                
            }, 8, ["modelValue", "modal-class", "style"])], 64)
        }
    }
});
const jC = en(zC, [["__scopeId", "data-v-66891202"]]);
var HC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(rl.exports)
    }
    )(tr, function(n) {
        function r(i) {
            return i && typeof i == "object" && "default"in i ? i : {
                default: i
            }
        }
        var o = r(n)
          , s = {
            name: "zh-cn",
            weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
            weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),
            weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
            months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
            monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
            ordinal: function(i, a) {
                return a === "W" ? i + "\u5468" : i + "\u65E5"
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY\u5E74M\u6708D\u65E5",
                LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",
                LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",
                l: "YYYY/M/D",
                ll: "YYYY\u5E74M\u6708D\u65E5",
                lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
                llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm"
            },
            relativeTime: {
                future: "%s\u5185",
                past: "%s\u524D",
                s: "\u51E0\u79D2",
                m: "1 \u5206\u949F",
                mm: "%d \u5206\u949F",
                h: "1 \u5C0F\u65F6",
                hh: "%d \u5C0F\u65F6",
                d: "1 \u5929",
                dd: "%d \u5929",
                M: "1 \u4E2A\u6708",
                MM: "%d \u4E2A\u6708",
                y: "1 \u5E74",
                yy: "%d \u5E74"
            },
            meridiem: function(i, a) {
                var l = 100 * i + a;
                return l < 600 ? "\u51CC\u6668" : l < 900 ? "\u65E9\u4E0A" : l < 1100 ? "\u4E0A\u5348" : l < 1300 ? "\u4E2D\u5348" : l < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A"
            }
        };
        return o.default.locale(s, null, !0),
        s
    })
}
)(HC);
var VC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(tr, function() {
        return {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(n) {
                var r = ["th", "st", "nd", "rd"]
                  , o = n % 100;
                return "[" + n + (r[(o - 20) % 10] || r[o] || r[0]) + "]"
            }
        }
    })
}
)(VC);
const WC = {
    class: "text-4xl mb-1"
}
  , KC = {
    key: 0,
    class: "text-xl"
}
  , YC = {
    class: "text-sm font-normal"
}
  , qC = Ce({
    __name: "clock-shower",
    setup(e) {
        
    }
});
var GC = Object.defineProperty, JC = Object.getOwnPropertyDescriptor, qd = (e,t,n,r)=>{
    for (var o = r > 1 ? void 0 : r ? JC(t, n) : t, s = e.length - 1, i; s >= 0; s--)
        (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
    return r && o && GC(t, n, o),
    o
}
, $i;
const ha = ($i = class extends Bs {
    constructor() {
        super(...arguments);
        tn(this, "cid")
    }
    async getNow(t) {
        console.log("weather getNow");
    }
    async getWeek(t) {
        console.log("weather getWeek");
    }
}
,
tn($i, "DOMAIN", "https://weatheroffer.com"),
$i);
let Cr = ha;
qd([jn(function() {
    return new Promise(e=>{
        setTimeout(()=>{
            e(this.getNow(this.cid))
        }
        , 5e3)
    }
    )
})(e=>e)], Cr.prototype, "getNow", 1);
qd([jn()(e=>e)], Cr.prototype, "getWeek", 1);
const _r = new Cr;
var QC = Object.defineProperty
  , XC = Object.getOwnPropertyDescriptor
  , Gd = (e,t,n,r)=>{
    for (var o = r > 1 ? void 0 : r ? XC(t, n) : t, s = e.length - 1, i; s >= 0; s--)
        (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
    return r && o && QC(t, n, o),
    o
}
;
class il extends Bs {
    async getlocale(t) {
        console.log("weather getlocale");
    }
    async getCityList(t) {
        console.log("weather getCityList");
    }
}
Gd([jn()(e=>e)], il.prototype, "getlocale", 1);
Gd([jn()(e=>e)], il.prototype, "getCityList", 1);
const ma = new il;
function ir(e) {
    console.log("weather ");
}
const fs = e=>Math.round(Number(e) * 9 / 5 + 32)
  , Zs = ks("weather", {
    state: ()=>({
        now: weather.now,
        week: weather.week,
        timer: void 0,
        countdownTimer: void 0,
        timerToDo: void 0
    }),
    actions: {
        async updateNow(e) {
            e && await me.set("city.info", e),
            this.timer = clearTimeout(this.timer || 0),
            this.countdownTimer = clearTimeout(this.countdownTimer || 0);
            const t = 1e3 * 60 * 60 * 3
              , n = await me.get("weather.updateAt") || 0
              , r = Date.now() - n
              , o = r >= t;
            if (e || !n || o) {
                await this.updateWeather();
                return
            }
            this.countdownTimer = setTimeout(async()=>{
                await this.updateWeather()
            }
            , r)
        },
        async updateNowToDo(e) {
            const r = await me.get("weather.lang")
              , o = bt()
              , s = async u=>{
                await me.set("city.info", u),
                this.now = {
                    ...this.now,
                    ...u
                };
                const [p,h] = await _r.getNow(u.cid);
                let m = h || await p();
                Object.assign(this.now, {
                    ...m,
                    icon: ir(m.conditionCode)
                }),
                await me.set("weather.now", this.now),
                await me.set("weather.updateAt", Date.now());
                const [g,b] = await _r.getWeek(u.cid);
                this.week = b != null ? b : await g,
                me.set("weather.week", this.week),
                this.timerToDo = setTimeout(this.updateNowToDo, 108e5)
            }
              , i = async()=>{
                const [u,p] = await ma.getlocale();
                if (u) {
                    this.timerToDo = setTimeout(this.updateNowToDo, 36e5);
                    return
                }
                this.now = {
                    ...this.now,
                    ...p
                };
                const [h,m] = await _r.getNow(p.cid);
                let g = m || await h();
                Object.assign(this.now, {
                    ...g,
                    icon: ir(g.conditionCode)
                }),
                await me.set("weather.now", this.now),
                await me.set("weather.updateAt", Date.now());
                const [b,$] = await _r.getWeek(p.cid);
                this.week = $ != null ? $ : await b,
                me.set("weather.week", this.week),
                this.timerToDo = setTimeout(this.updateNowToDo, 108e5)
            }
            ;
            if (this.timerToDo = clearTimeout(this.timerToDo || 0),
            this.countdownTimer = clearTimeout(this.countdownTimer || 0),
            e) {
                await s(e);
                return
            }
            const a = await me.get("weather.updateAt") || 0
              , c = 108e5 - (Date.now() - a)
              , f = c > 0;
            if (o !== r) {
                await me.set("weather.lang", o),
                await i(),
                this.timerToDo = setTimeout(i, 108e5);
                return
            }
            if (f) {
                await i();
                return
            }
            this.countdownTimer = setTimeout(async()=>{
                await i()
            }
            , c)
        },
        async updateWeather() {
            const [n,r] = await ma.getlocale();
            if (n) {
                this.timer = setTimeout(this.updateNow, 36e5);
                return
            }
            this.now = {
                ...this.now,
                ...r
            };
            const [o,s] = await _r.getNow(r.cid);
            let i = s;
            i || (i = await o()),
            Object.assign(this.now, {
                ...i,
                icon: ir(i.conditionCode)
            }),
            await me.set("weather.now", this.now),
            await me.set("weather.updateAt", Date.now()),
            this.updateWeek(r.cid),
            this.timer = setTimeout(this.updateWeather, 108e5)
        },
        async updateWeek(e) {
            const [t,n] = await _r.getWeek(e);
            this.week = n != null ? n : await t,
            me.set("weather.week", this.week)
        }
    }
})
  , ZC = {
    class: "absolute top-0 left-0 w-[250px] h-[350px] bg-white z-50 rounded-xl font-normal text-black text-[14px] leading-[18px] overflow-hidden flex-col cursor-default"
}
  , eT = {
    class: "h-[140px] bg-[#f4f4f4] p-5"
}
  , tT = {
    class: "text-4xl mb-1 flex"
}
  , nT = {
    class: "flex-1"
}
  , rT = {
    class: "text-[14px] h-5 leading-7"
}
  , oT = {
    class: "mr-3"
}
  , sT = {
    class: "text-[#2f2f2f66]"
}
  , iT = {
    class: "mb-2"
}
  , aT = {
    class: "text-[#2f2f2f66] flex justify-between"
}
  , lT = {
    class: "flex-1 p-5"
}
  , cT = {
    class: "w-full h-[170px]"
}
  , uT = {
    class: "text-center"
}
  , fT = {
    class: "text-[#2f2f2f66] text-right"
}
  , dT = Ce({
    __name: "weather-detail",
    emits: ["citySearcherOpen"],
    setup(e, {emit: t}) {
        const n = Zs()
          , r = bn();
        q(!1);
        const o = Y(()=>{
            var f;
            return (f = n.now) != null && f.tmp ? r.config.weatherUnit === "c" ? n.now.tmp : fs(n.now.tmp) : ""
        }
        )
          , s = Y(()=>{
            var f;
            return (f = n.now) != null && f.tmp ? r.config.weatherUnit === "c" ? n.now.low : fs(n.now.low) : ""
        }
        )
          , i = Y(()=>{
            var f;
            return ir(((f = n.now) == null ? void 0 : f.conditionCode) || "")
        }
        )
          , a = ()=>{}
          , l = ()=>{
            t("citySearcherOpen")
        }
          , c = f=>{
            const u = kd(f).day();
            return {
                "en-US": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "zh-CN": ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"]
            }[bt() === "zh-CN" ? "zh-CN" : "en-US"][u]
        }
        ;
        return (f,u)=>{
            var p, h;
            return gt((O(),
            K("div", ZC, [N("div", eT, [N("div", null, [N("div", tT, [N("span", nT, we(d(o)) + "\xB0" + we(d(r).config.weatherUnit.toUpperCase()), 1), N("div", rT, [N("span", oT, we(d(o)) + "\xB0" + we(d(r).config.weatherUnit.toUpperCase()), 1), N("span", sT, we(d(s)) + "\xB0" + we(d(r).config.weatherUnit.toUpperCase()), 1)])]), N("div", iT, [N("i", {
                class: "icon inline-block w-[26px] h-[26px] -mb-2 mr-2",
                style: Qe({
                    maskImage: `url(${d(i)})`,
                    backgroundColor: "#2f2f2f66"
                })
            }, null, 4), N("span", null, we((p = d(n).now) == null ? void 0 : p.text), 1)]), N("div", aT, [N("div", null, we((h = d(n).now) == null ? void 0 : h.city), 1), N("img", {
                class: "cursor-pointer text-black",
                src: "https://api.mytab.me/images/icon/weather-city-setting.svg",
                onClick: l
            })])])]), N("div", lT, [N("table", cT, [N("tbody", null, [(O(!0),
            K(De, null, Nt(d(n).week, (m,g)=>(O(),
            K("tr", {
                class: "text-[13px]",
                key: g
            }, [N("td", null, we(c(m.date)), 1), N("td", null, [N("i", {
                class: "icon block w-[26px] h-[26px]",
                style: Qe({
                    maskImage: `url(${d(ir)(m.conditionCode)})`,
                    backgroundColor: "#2f2f2f66"
                })
            }, null, 4)]), N("td", uT, we(m.tmp) + "\xB0" + we(d(r).config.weatherUnit.toUpperCase()), 1), N("td", fT, we(m.low) + "\xB0" + we(d(r).config.weatherUnit.toUpperCase()), 1)]))), 128))])])])])), [[d(ol), a]])
        }
    }
});
const pT = en(dT, [["__scopeId", "data-v-0e68029e"]])
  , hT = Ce({
    __name: "svg-icon",
    props: {
        src: {},
        color: {}
    },
    setup(e) {
        const t = e;
        return (n,r)=>(O(),
        K("i", {
            class: "svg-icon w-6 h-6",
            style: Qe({
                maskImage: `url(${t.src})`,
                background: t.color
            })
        }, null, 4))
    }
});
const mT = en(hT, [["__scopeId", "data-v-9213f4a3"]])
  , vT = {
    class: "flex flex-col absolute top-0 left-0 w-[250px] h-[350px] bg-white z-50 rounded-xl font-normal text-black text-[14px] leading-[18px] overflow-hidden cursor-default"
}
  , gT = {
    class: "pt-4 pb-0 px-6 relative"
}
  , yT = {
    class: "border-b border-gray-200"
}
  , _T = ["placeholder"]
  , bT = {
    class: "relative flex-1 flex-col flex text-gray-700 overflow-hidden"
}
  , wT = ["onClick"]
  , xT = {
    class: "mr-3 whitespace-nowrap"
}
  , ST = {
    class: "text-xs line-clamp-1"
}
  , ET = {
    key: 1,
    class: "absolute top-0 right-0 bottom-0 left-0 h-[2rem] text-center m-auto translate-y-[-24px]"
}
  , CT = {
    class: "flex flex-0 justify-center items-center h-[43px] border-t border-gray-200"
}
  , TT = {
    key: 0,
    class: "absolute top-0 left-0 right-0 bottom-0 m-auto bg-[rgba(255,255,255,0.6)]"
}
  , $T = Ce({
    __name: "weather-city",
    emits: ["onBack"],
    setup(e, {emit: t}) {
        const n = Zs()
          , r = q("")
          , o = q([])
          , s = q()
          , i = q(!1)
          , a = q(0)
          , l = q();
        Je(()=>{
            var b;
            (b = l.value) == null || b.focus()
        }
        );
        let c = Vs(async b=>{
            const $ = a.value
              , [D,U] = await ma.getCityList(r.value);
            $ === a.value && (i.value = !1,
            o.value = D ? [] : U || [])
        }
        , 350, {
            leading: !1,
            trailing: !0
        });
        const f = ()=>{
            const b = r.value;
            if (a.value++,
            !b) {
                o.value = [],
                i.value = !1;
                return
            }
            i.value = !0,
            c(b)
        }
          , u = b=>{
            b.stopPropagation(),
            r.value = "",
            f()
        }
        ;
        async function p(b, $) {
            i.value = !0,
            await n.updateNowToDo({
                cid: b.id,
                city: b.name
            }),
            i.value = !1,
            h($)
        }
        function h(b) {
            t("onBack", b)
        }
        const m = q(!1)
          , g = ()=>{
            m.value = !1
        }
        ;
        return (b,$)=>{
            console.log("weather 2");
        }
    }
})
  , IT = {
    class: "text-4xl mb-1"
}
  , AT = {
    class: "text-sm font-normal"
}
  , OT = {
    key: 0
}
  , kT = Ce({
    __name: "weather-shower",
    setup(e) {
        const t = Zs()
          , n = Xt()
          , r = bn()
          , o = Eo()
          , s = q(!1)
          , i = q(!1)
          , a = q();
        function l(h) {
            var m;
            !h.target || (m = a.value) != null && m.contains(h.target) || (s.value = !1)
        }
        function c() {
            s.value = !0
        }
        Je(()=>{
            document.addEventListener("click", l),
            setTimeout(()=>{
                var h;
                (h = document.querySelector("#weather-icon-puppet")) == null || h.remove()
            }
            , 250)
        }
        ),
        Nr(()=>{
            document.removeEventListener("click", l)
        }
        );
        const [,f] = Qs(async()=>{
            var $;
            if (!(($ = n.currentWallpaper) != null && $.url))
                return "";
            const h = innerWidth - 32
              , m = innerHeight - 32
              , g = await Js(n.currentWallpaper.url, [h, m])
              , b = g.r + g.g + g.b <= 255 * 3 ? 255 : 0;
            return `rgba(${b}, ${b}, ${b}, 1)`
        }
        )
          , u = Y(()=>{
            var h;
            return (h = t.now) != null && h.tmp ? r.config.weatherUnit === "c" ? t.now.tmp : fs(t.now.tmp) : ""
        }
        );
        Y(()=>{
            var h;
            return (h = t.now) != null && h.tmp ? r.config.weatherUnit === "c" ? t.now.low : fs(t.now.low) : ""
        }
        );
        const p = Y(()=>{
            var h;
            return ir(((h = t.now) == null ? void 0 : h.conditionCode) || "")
        }
        );
        return (h,m)=>{
            var $;
            const g = pT
              , b = $T;
            return d(r).group.weatherVisible ? (O(),
            K("div", {
                key: 0,
                ref_key: "wrapperRef",
                ref: a,
                class: "fixed top-8 left-8 font-thin select-none flex gap-2 items-center cursor-pointer transition-opacity duration-300 z-[1000]",
                style: Qe({
                    color: d(f),
                    opacity: d(o)
                }),
                onClick: c
            }, [N("i", {
                class: "icon block w-[50px] h-[50px]",
                style: Qe({
                    maskImage: `url(${d(p)})`,
                    backgroundColor: d(f)
                })
            }, null, 4), N("div", null, [N("div", IT, we(d(u)) + "\xB0" + we(d(r).config.weatherUnit.toUpperCase()), 1), N("div", AT, we((($ = d(t).now) == null ? void 0 : $.city) || h.$t("weather.loading")), 1)]), d(s) ? (O(),
            K("div", OT, [de(g, {
                onCitySearcherOpen: m[0] || (m[0] = D=>i.value = !0)
            }), d(i) ? (O(),
            Ie(b, {
                key: 0,
                onOnBack: m[1] || (m[1] = D=>{
                    D.stopPropagation(),
                    i.value = !1
                }
                )
            })) : ye("", !0)])) : ye("", !0)], 4)) : ye("", !0)
        }
    }
});
const RT = en(kT, [["__scopeId", "data-v-f6399acf"]]);
const NT = ["src"]
  , PT = Ce({
    __name: "widget-item",
    props: {
        label: {},
        iconUrl: {},
        to: {}
    },
    setup(e) {
        const t = e
          , n = Xt()
          , r = bn()
          , [,o] = Qs(async()=>{
            var f;
            if (!((f = n.currentWallpaper) != null && f.url))
                return "";
            const i = innerWidth / 2
              , a = innerHeight - 100
              , l = await Js(n.currentWallpaper.url, [i, a])
              , c = l.r + l.g + l.b <= 255 * 3 ? 255 : 0;
            return `rgba(${c}, ${c}, ${c}, .9)`
        }
        )
          , s = ()=>{
            wr(t.to, r.config.searchOpenNewTab)
        }
        ;
        return (i,a)=>(O(),
        K("div", {
            class: "widget group w-12 h-20 relative flex flex-col items-center cursor-pointer gap-2",
            onClick: s
        }, [N("img", {
            class: "w-12 h-12 object-cover rounded-xl",
            src: t.iconUrl
        }, null, 8, NT), N("div", {
            class: "name text-xs opacity-0 transition-opacity",
            style: Qe({
                color: d(o)
            })
        }, we(t.label), 5)]))
    }
});
const LT = en(PT, [["__scopeId", "data-v-7b96c0ae"]])
  , MT = {
    key: 0,
    class: "relative z-[1000]"
}
  , DT = N("div", {
    class: "absolute w-[100vw] h-[100vh] top-0 left-0 bg-[rgba(0,0,0,0.6)]"
}, null, -1)
  , BT = {
    class: "modal bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-xl z-[20]"
}
  , FT = {
    class: "w-full h-full"
}
  , UT = Ce({
    __name: "widget-modal",
    props: {
        visible: {
            type: Boolean
        }
    },
    emits: ["update:visible"],
    setup(e, {emit: t}) {
        Xt();
        const n = ()=>{
            t("update:visible", !1)
        }
        ;
        return (r,o)=>{
            const s = et;
            return O(),
            Ie(lr, {
                name: "fade"
            }, {
                default: Te(()=>[r.visible ? (O(),
                K("div", MT, [de(lr, {
                    name: "fade"
                }, {
                    default: Te(()=>[DT]),
                    _: 1
                }), N("div", BT, [N("div", FT, [Ve(r.$slots, "default")]), de(s, {
                    class: "absolute right-4 top-4 cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-200",
                    color: "#2f2f2f",
                    size: 22,
                    onClick: n
                }, {
                    default: Te(()=>[de(d(Ws))]),
                    _: 1
                })])])) : ye("", !0)]),
                _: 3
            })
        }
    }
});
const zT = {
    class: "py-6 flex flex-col w-[872px] h-[570px] text-black"
}
  , jT = {
    class: "flex items-baseline pb-3 px-7 border-b border-b-gray-100"
}
  , HT = {
    class: "text-3xl leading-[1.3] mr-8"
}
  , VT = {
    class: "pt-5 px-7 flex-1 overflow-auto"
}
  , WT = {
    class: "flex flex-wrap gap-5"
}
  , KT = ["src", "onClick"]
  , YT = ["src", "onClick"]
  , qT = Ce({
    __name: "widget-wallpaper",
    setup(e) {
        const t = {
            dislike: "https://api.mytab.me/images/icon/dislike.svg",
            like: "https://api.mytab.me/images/icon/like.svg"
        }
          , n = Xt();
        bn();
        const {wallpaperManager: r} = sl()
          , o = q(!0)
          , s = Y(()=>n.wallpaperList.filter(c=>c.like === o.value))
          , i = (c,f)=>{
            f.stopPropagation(),
            a(c)
        }
        ;
        function a(c) {
            var f;
            if (n.likeWallpaper(c, !o.value),
            o.value) {
                if (n.wallpaperList.findIndex(h=>h.id === c) !== n.currentWallpaperIndex)
                    return;
                const p = (f = WALLPAPER_GLOBAL.calcNextFavIndex) == null ? void 0 : f.call(WALLPAPER_GLOBAL, {
                    globalList: n.wallpaperList,
                    isRandomMode: settings.config.wallpaperChangeBy === "random",
                    currentIndex: n.currentWallpaperIndex
                });
                l(n.wallpaperList[p].id)
            }
        }
        async function l(c) {
            const f = n.wallpaperList.findIndex(p=>p.id === c)
              , u = Date.now();
            await n.selectWallpaper(f, u),
            r.updateCountdownTimer()
        }
        return (c,f)=>{
            const u = oE;
            return O(),
            K("section", zT, [N("header", jT, [N("h1", HT, we(c.$t("widgets.wallpaper.title")), 1), N("span", {
                class: pe(["text-sm leading-3 mr-5 cursor-pointer hover:underline hover:hover:text-[#2F2F2F] transition-all", {
                    underline: d(o),
                    "text-[#9b9b9b]": !d(o)
                }]),
                onClick: f[0] || (f[0] = p=>o.value = !0)
            }, we(c.$t("widgets.wallpaper.current")), 3), N("span", {
                class: pe(["text-sm leading-3 cursor-pointer hover:underline hover:text-[#2F2F2F] transition-all", {
                    underline: !d(o),
                    "text-[#9b9b9b]": d(o)
                }]),
                onClick: f[1] || (f[1] = p=>o.value = !1)
            }, we(c.$t("widgets.wallpaper.dislike")), 3)]), N("main", VT, [N("div", WT, [d(s).length ? ye("", !0) : (O(),
            Ie(u, {
                key: 0,
                class: "mx-auto",
                description: c.$t("widgets.wallpaper.empty")
            }, null, 8, ["description"])), (O(!0),
            K(De, null, Nt(d(s), p=>(O(),
            K("div", {
                key: p.id,
                class: "wallpaper rounded h-24"
            }, [N("img", {
                class: "w-full h-full object-cover rounded cursor-pointer",
                src: p.preview_url,
                onClick: h=>l(p.id)
            }, null, 8, KT), d(o) === !0 && d(s).length === 1 ? ye("", !0) : (O(),
            K("img", {
                key: 0,
                class: "absolute right-2 top-2 cursor-pointer opacity-0 transition-opacity icon duration-300",
                src: t[d(o) ? "dislike" : "like"],
                onClick: h=>i(p.id, h)
            }, null, 8, YT))]))), 128))])])])
        }
    }
});
const GT = en(qT, [["__scopeId", "data-v-83067a84"]]);
const JT = {
    class: "py-6 px-7 flex flex-col w-[627px] h-[409px] text-black"
}
  , QT = {
    class: "flex items-end pb-4"
}
  , XT = {
    class: "text-xl leading-5 font-bold mr-8"
}
  , ZT = {
    class: "pt-4 flex-1 overflow-y-auto -pr-1"
}
  , e$ = {
    key: 0
}
  , t$ = {
    class: "text-xs my-2 text-gray-400"
}
  , n$ = ["onClick"]
  , r$ = {
    key: 1
}
  , o$ = {
    class: "text-xs my-2 text-gray-400 flex justify-between"
}
  , s$ = Ce({
    __name: "widget-todolist",
    setup(e) {
        const t = q([])
          , n = q("")
          , r = q();
        me.get("todolist").then(a=>{
            t.value = a != null ? a : []
        }
        );
        const o = ()=>{
            n.value && (t.value.push({
                id: Date.now().toString(),
                content: n.value,
                done: !1
            }),
            n.value = "")
        }
          , s = ()=>{
            t.value = t.value.filter(a=>!a.done)
        }
          , i = a=>{
            t.value = t.value.filter(l=>l.id !== a)
        }
        ;
        return ka(()=>{
            me.set("todolist", t.value)
        }
        ),
        Je(()=>{
            r.value.focus()
        }
        ),
        (a,l)=>{
            const c = Td
              , f = iS
              , u = Yr("close")
              , p = et;
            return O(),
            K("section", JT, [N("header", QT, [N("h1", XT, we(a.$t("widgets.todo.title")), 1)]), de(c, {
                ref_key: "inputRef",
                ref: r,
                class: "w-full border-b border-b-gray-100",
                placeholder: a.$t("widgets.todo.placeholder"),
                modelValue: d(n),
                "onUpdate:modelValue": l[0] || (l[0] = h=>Fe(n) ? n.value = h : null),
                onKeyup: eo(o, ["enter"])
            }, null, 8, ["placeholder", "modelValue", "onKeyup"]), N("main", ZT, [d(t).filter(h=>!h.done).length ? (O(),
            K("div", e$, [N("h3", t$, we(a.$t("widgets.todo.doing")), 1), (O(!0),
            K(De, null, Nt(d(t).filter(h=>!h.done), h=>(O(),
            K("div", {
                class: "todo px-4 mr-4 cursor-pointer hover:bg-gray-100 rounded-md flex items-center justify-between",
                key: h.id,
                onClick: m=>h.done = !h.done
            }, [de(f, {
                modelValue: h.done,
                "onUpdate:modelValue": m=>h.done = m,
                label: h.content,
                size: "large",
                onClick: l[1] || (l[1] = lt(()=>{}
                , ["stop"]))
            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), de(p, {
                class: "remove-btn cursor-pointer hidden",
                onClick: lt(m=>i(h.id), ["stop"])
            }, {
                default: Te(()=>[de(u)]),
                _: 2
            }, 1032, ["onClick"])], 8, n$))), 128))])) : ye("", !0), d(t).filter(h=>h.done).length ? (O(),
            K("div", r$, [N("h3", o$, [N("span", null, we(a.$t("widgets.todo.done")), 1), N("span", {
                class: "select-none cursor-pointer",
                onClick: s
            }, we(a.$t("widgets.todo.clear")), 1)]), (O(!0),
            K(De, null, Nt(d(t).filter(h=>h.done), h=>(O(),
            K("div", {
                class: "todo px-4 cursor-pointer hover:bg-gray-100 rounded-md flex items-center justify-between",
                key: h.id
            }, [de(f, {
                modelValue: h.done,
                "onUpdate:modelValue": m=>h.done = m,
                label: h.content,
                size: "large"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]), de(p, {
                class: "remove-btn cursor-pointer hidden",
                onClick: m=>i(h.id)
            }, {
                default: Te(()=>[de(u)]),
                _: 2
            }, 1032, ["onClick"])]))), 128))])) : ye("", !0)])])
        }
    }
});
const i$ = en(s$, [["__scopeId", "data-v-f18903ad"]])
  , a$ = {
    class: "p-6 flex flex-col w-[627px] h-[409px] text-black"
}
  , l$ = {
    class: "flex items-end pb-4 border-b border-b-gray-100"
}
  , c$ = {
    class: "text-xl leading-5 font-bold mr-8"
}
  , u$ = {
    class: "flex gap-4 flex-1 pt-4 overflow-hidden"
}
  , f$ = {
    class: "w-52 h-full flex flex-col gap-2 items-center"
}
  , d$ = ["onClick"]
  , p$ = {
    class: "text-sm leading-5 line-clamp-1"
}
  , h$ = {
    class: "flex-1 h-full"
}
  , m$ = ["placeholder"]
  , v$ = Ce({
    __name: "widget-note",
    setup(e) {
        const t = {
            id: Date.now().toString(),
            content: ""
        }
          , n = [t]
          , r = q(n)
          , o = q(t.id)
          , s = q()
          , i = q();
        me.get("notelist").then(u=>{
            r.value = u != null ? u : n,
            r.value = r.value.length === 0 ? n : r.value,
            o.value = r.value[0].id
        }
        );
        const a = ()=>{
            var p;
            const u = Date.now().toString();
            o.value = u,
            r.value.unshift({
                id: u,
                content: ""
            }),
            i.value.scrollTop = 0,
            (p = s.value) == null || p.focus()
        }
          , l = u=>{
            o.value = u
        }
          , c = u=>{
            if (o.value === r.value[0].id)
                return;
            const p = r.value.findIndex(m=>m.id === u)
              , h = r.value.splice(p, 1)[0];
            r.value.unshift(h),
            i.value.scrollTop = 0
        }
          , f = u=>{
            if (r.value.length === 1) {
                r.value[0].content = "";
                return
            }
            r.value = r.value.filter(p=>p.id !== u),
            u === o.value && (o.value = r.value[0].id)
        }
        ;
        return ka(()=>{
            me.set("notelist", r.value)
        }
        ),
        Je(()=>{
            var u;
            (u = s.value) == null || u.focus()
        }
        ),
        (u,p)=>{
            const h = et;
            return O(),
            K("section", a$, [N("header", l$, [N("h1", c$, we(u.$t("widgets.note.title")), 1)]), N("div", u$, [N("div", f$, [N("div", {
                ref_key: "titleListRef",
                ref: i,
                class: "flex-1 w-full overflow-auto"
            }, [(O(!0),
            K(De, null, Nt(d(r), m=>(O(),
            K("div", {
                key: m.id,
                class: pe(["group relative flex items-center justify-between rounded h-8 hover:bg-gray-100 cursor-pointer transition-all px-2 select-none", {
                    "bg-gray-100": d(o) === m.id
                }]),
                onClick: g=>l(m.id)
            }, [N("span", p$, we(m.content ? m.content.split(`
`)[0] : d(Wa)("widgets.note.untitled")), 1), de(h, {
                class: "absolute right-1 top-2 cursor-pointer opacity-0 transition-opacity icon bg-gray-100 group-hover:opacity-100 hover:text-black",
                size: "16",
                color: "#666",
                onClick: lt(g=>f(m.id), ["stop"])
            }, {
                default: Te(()=>[de(d(Ws))]),
                _: 2
            }, 1032, ["onClick"])], 10, d$))), 128))], 512), N("div", {
                class: "h-[58px] w-[58px] rounded-full border-gray-100 border-4 bg-gray-400 box-border flex items-center justify-center cursor-pointer hover:shadow-md mb-[5px] transition-[box-shadow]",
                onClick: a
            }, [de(h, {
                class: "text-white font-black",
                size: "24"
            }, {
                default: Te(()=>[de(d(T1))]),
                _: 1
            })])]), N("div", h$, [gt(N("textarea", {
                ref_key: "textareaRef",
                ref: s,
                "onUpdate:modelValue": p[0] || (p[0] = m=>d(r).find(g=>g.id === d(o)).content = m),
                rows: "12",
                class: "w-full h-full outline-none bg-gray-100 rounded p-4 text-[16px] resize-none",
                spellcheck: "false",
                placeholder: u.$t("widgets.note.placeholder"),
                onInput: p[1] || (p[1] = m=>c(d(o)))
            }, `
        `, 40, m$), [[Cf, d(r).find(m=>m.id === d(o)).content]])])])])
        }
    }
})
  , zo = 9
  , g$ = Ce({
    __name: "widget-list",
    setup(e) {
        const t = ju({
            __wallpaper__: GT,
            __todos__: i$,
            __notes__: v$
        })
          , n = q(!1)
          , r = q()
          , o = Xt()
          , s = Eo()
          , i = q("");
        $e(()=>r.value, f=>{
            setTimeout(()=>{
                var u;
                (u = document.getElementById("widgets-puppet")) == null || u.remove()
            }
            , 500)
        }
        );
        const a = f=>{
            const u = bt() === "zh-CN" ? "zh-CN" : "en";
            Ud.addEvent(`open-icon-${f.title[u]}`, {
                id: chrome.runtime.id,
                type: f.type,
                to: f.url || "",
                lang: bt(),
                name: `open-icon-${f.title[u]}`
            }),
            f.type === "modal" && (n.value = !0,
            i.value = f.id)
        }
        ;
        let l = {
            isScroll: !0,
            scrollTime: 0,
            timer: void 0,
            interval: 400,
            distance: /macintosh|mac os x/i.test(navigator.userAgent) ? 60 : 40,
            delay: 300
        }
          , c = f=>{
            const u = performance.now()
              , p = f.deltaY
              , h = f.deltaX;
            l.scrollTime && u - l.scrollTime > l.interval && (Math.abs(p) >= l.distance || Math.abs(h) >= l.distance) && (Math.abs(p) <= 60 || Math.abs(h) <= 60) && (m(),
            clearTimeout(l.timer),
            l.isScroll = !1,
            l.scrollTime = u),
            l.isScroll && (m(),
            l.scrollTime = performance.now(),
            l.isScroll = !1),
            l.timer && clearTimeout(l.timer),
            l.timer = setTimeout(()=>{
                l.isScroll = !0
            }
            , l.delay);
            function m() {
                f.deltaX === 0 ? f.deltaY > 0 ? r.value.next() : r.value.prev() : f.deltaX > 0 ? r.value.next() : r.value.prev()
            }
        }
        ;
        return $e(()=>o.widgetList, f=>{
            console.log(o.widgetList)
        }
        ),
        (f,u)=>{
            const p = LT
              , h = Ux
              , m = Fx
              , g = UT;
            return O(),
            K(De, null, [de(m, {
                ref_key: "carousel",
                ref: r,
                class: "fixed bottom-8 left-1/2 z-[1000] -translate-x-1/2 w-[720px] !overflow-x-hidden !overflow-y-visible transition-opacity duration-300",
                height: "80px",
                style: Qe({
                    opacity: d(s)
                }),
                "indicator-position": "none",
                arrow: d(o).widgetList.length > zo ? "hover" : "never",
                autoplay: !1,
                onWheel: lt(d(c), ["prevent"])
            }, {
                default: Te(()=>[(O(!0),
                K(De, null, Nt(Math.ceil(d(o).widgetList.length / zo), b=>(O(),
                Ie(h, {
                    key: b,
                    class: "flex gap-5 justify-center"
                }, {
                    default: Te(()=>[(O(!0),
                    K(De, null, Nt(d(o).widgetList.slice((b - 1) * zo, b * zo), $=>(O(),
                    Ie(p, {
                        key: $.id,
                        label: $.title[d(bt)() === "zh-CN" ? "zh-CN" : "en"],
                        "icon-url": $.src,
                        to: $.url,
                        onClick: D=>a($)
                    }, null, 8, ["label", "icon-url", "to", "onClick"]))), 128))]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }, 8, ["style", "arrow", "onWheel"]), de(g, {
                visible: d(n),
                "onUpdate:visible": u[0] || (u[0] = b=>Fe(n) ? n.value = b : null)
            }, {
                default: Te(()=>[(O(),
                Ie(Ct(d(t)[d(i)])))]),
                _: 1
            }, 8, ["visible"])], 64)
        }
    }
});
const y$ = en(g$, [["__scopeId", "data-v-5bafcff4"]])
  , _$ = Ce({
    __name: "App",
    setup(e) {
        Kd();
        const t = Xt();
        bn();
        const {wallpaperManager: n} = sl()
          , r = Zs();
        return (async()=>(await t.init(),
        !document.hidden && vE(t.wallpaperList.map(o=>o.url))))(),
        Je(async()=>{
            var s, i;
            let o = new SharedWorker("/scripts/shared-worker.js","fetch init data");
            o.port.onmessage = async function(a) {
                const l = a.data;
                if (l.eventName === "init-searcher" && !await me.get("config.searchEngineList")) {
                    const c = l.data;
                    t.fetchSearchEngine(c)
                }
                if (l.eventName === "init-icons" && !await me.get("config.widgetList")) {
                    const c = l.data;
                    t.fetchWidgetList(c)
                }
                if (l.eventName === "init-weather") {
                    if (r.updateNowToDo(),
                    await me.get("weather.now"))
                        return;
                    const c = l.data;
                    c.now && (r.now = {
                        ...c.now,
                        icon: ir(c.now.conditionCode)
                    },
                    await me.set("weather.now", r.now),
                    await me.set("weather.updateAt", Date.now())),
                    c.week && (r.week = c.week,
                    await me.set("weather.week", c.week))
                }
            }
            ,
            EVENT_BUS == null || EVENT_BUS.on("indexdb-update-wp-index", a=>{
                t.currentWallpaperIndex = a
            }
            ),
            (s = window.BC) == null || s.on("sync-wallpaper-list", a=>{
                me.set("wallpaperList", a),
                t.wallpaperList = a
            }
            ),
            (i = window.BC) == null || i.on("sync-wallpaper", async a=>{
                await t.selectWallpaper(a.index, a.date),
                n == null || n.updateCountdownTimer()
            }
            ),
            t.currentWallpaperIndex = await me.get("currentWallpaperIndex"),
            n == null || n.updateCountdownTimer()
        }
        ),
        document.addEventListener("visibilitychange", ()=>{
            document.hidden ? n.clearTimer() : (window.BC.runTasks(),
            n == null || n.updateCountdownTimer())
        }
        ),
        (o,s)=>{
            const i = Kg
              , a = qg
              , l = NE
              , c = jC
              , f = qC
              , u = RT
              , p = y$;
            return O(),
            K(De, null, [de(i, {
                onWheel: s[0] || (s[0] = lt(()=>{}
                , ["prevent"]))
            }), de(a), de(l), de(c), de(f), de(u), de(p)], 64)
        }
    }
})
  , b$ = {
    install: e=>{
        e.config.globalProperties.$t = Wa
    }
};
function S$() {
    hv(_$).use(b$).use(gv()).mount("#app")
}
export {S$ as init};
