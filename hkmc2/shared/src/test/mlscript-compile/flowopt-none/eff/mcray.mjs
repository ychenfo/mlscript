const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const within$accessorSymbol = globalThis.Symbol("within");
const rgbAdd$accessorSymbol = globalThis.Symbol("rgbAdd");
const rgbModulate$accessorSymbol = globalThis.Symbol("rgbModulate");
const rgbScale$accessorSymbol = globalThis.Symbol("rgbScale");
const vec3Add$accessorSymbol = globalThis.Symbol("vec3Add");
const vec3Sub$accessorSymbol = globalThis.Symbol("vec3Sub");
const vec3Scale$accessorSymbol = globalThis.Symbol("vec3Scale");
const vec3Dot$accessorSymbol = globalThis.Symbol("vec3Dot");
const vec3RandomPointInSphere$accessorSymbol = globalThis.Symbol("vec3RandomPointInSphere");
const getEmission$accessorSymbol = globalThis.Symbol("getEmission");
const getHitInfo$accessorSymbol = globalThis.Symbol("getHitInfo");
const closer$accessorSymbol = globalThis.Symbol("closer");
const rayToRGB$accessorSymbol = globalThis.Symbol("rayToRGB");
const listFoldl$tailrec$accessorSymbol = globalThis.Symbol("listFoldl$tailrec");
let go, hitTest1, hitTest11, mkRay, trace, mcray1, lambda, lambda1, lambda2, lambda3, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, hitTest1$, lambda$5, hitTest1$1, mkRay$, lambda$6, lambda$7, lambda$8;
lambda$8 = (undefined, function (mcray2, world, maxDepth, minMaxT) {
  return (ray) => {
    return trace(mcray2, world, minMaxT, ray, maxDepth)
  }
});
trace = function trace(mcray2, world, minMaxT, ray, depth) {
  let scrut, scrut1, arg$ObjHit$0$, arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
  scrut = depth <= 0;
  if (scrut === true) {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
  {
    let receiver, inlinedVal;
    receiver = mcray2;
    if (world instanceof receiver.Obj.class) {
      inlinedVal = runtime.safeCall(world.hit(ray, minMaxT));
      if (inlinedVal instanceof mcray2.Miss.class) {
        return mcray2[rayToRGB$accessorSymbol](ray)
      } else if (inlinedVal instanceof mcray2.ObjHit.class) {
        arg$ObjHit$0$ = inlinedVal.hit;
        scrut1 = mcray2[getHitInfo$accessorSymbol](arg$ObjHit$0$, ray);
        if (scrut1 instanceof mcray2.None.class) {
          return mcray2[getEmission$accessorSymbol](arg$ObjHit$0$)
        } else if (scrut1 instanceof mcray2.Some.class) {
          arg$Some$0$ = scrut1.value;
          if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Some$0$, 0);
            element1$ = runtime.Tuple.get(arg$Some$0$, 1);
            tmp = mcray2[getEmission$accessorSymbol](arg$ObjHit$0$);
            tmp1 = depth - 1;
            tmp2 = trace(mcray2, world, minMaxT, element1$, tmp1);
            tmp3 = mcray2[rgbModulate$accessorSymbol](element0$, tmp2);
            return mcray2[rgbAdd$accessorSymbol](tmp, tmp3)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$7 = (undefined, function (mcray2, trace1) {
  return (ray, c1) => {
    let tmp;
    tmp = runtime.safeCall(trace1(ray));
    return mcray2[rgbAdd$accessorSymbol](c1, tmp)
  }
});
lambda$6 = (undefined, function (mcray2, trace1, rfp, scale) {
  return (r, c) => {
    return lambda3(mcray2, trace1, rfp, scale, r, c)
  }
});
lambda3 = (undefined, function (mcray2, trace1, rfp, scale, r, c) {
  let tmp, inlinedVal, f, inlinedVal1;
  inlinedVal = globalThis.Object.freeze([
    0.0,
    0.0,
    0.0
  ]);
  tmp = runtime.safeCall(rfp(r, c));
  f = lambda$7(mcray2, trace1);
  inlinedVal1 = mcray2[listFoldl$tailrec$accessorSymbol](f, inlinedVal, tmp);
  return mcray2[rgbScale$accessorSymbol](scale, inlinedVal1)
});
mkRay$ = function mkRay$(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  return (i) => {
    return mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir, i)
  }
};
mkRay = function mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir, i) {
  let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp2, scale, tmp3, scale1, inlinedVal4, x, tmp4, x1, tmp5, inlinedVal5, inlinedVal6, inlinedVal7, scrut, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11;
  scale1 = 1.0 / 2147483647.0;
  x1 = rng.value;
  tmp5 = x1 * 48271;
  tmp10 = tmp5 / 2147483647;
  inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp10));
  tmp11 = 2147483647 * inlinedVal8;
  inlinedVal5 = tmp5 - tmp11;
  rng.value = inlinedVal5;
  inlinedVal = scale1 * inlinedVal5;
  tmp = r1 + inlinedVal;
  tmp3 = mcray2[vec3Scale$accessorSymbol](tmp, vvec);
  inlinedVal1 = mcray2[vec3Add$accessorSymbol](ulcDir, tmp3);
  scale = 1.0 / 2147483647.0;
  x = rng.value;
  tmp4 = x * 48271;
  tmp8 = tmp4 / 2147483647;
  inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp9 = 2147483647 * inlinedVal9;
  inlinedVal6 = tmp4 - tmp9;
  rng.value = inlinedVal6;
  inlinedVal2 = scale * inlinedVal6;
  tmp1 = c1 + inlinedVal2;
  tmp2 = mcray2[vec3Scale$accessorSymbol](tmp1, hvec);
  inlinedVal3 = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp2);
  inlinedVal10 = mcray2[vec3Dot$accessorSymbol](inlinedVal3, inlinedVal3);
  inlinedVal11 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal10));
  scrut = inlinedVal11 < 0.0001;
  if (scrut === true) {
    let inlinedVal12;
    inlinedVal12 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    inlinedVal7 = globalThis.Object.freeze([
      0.0,
      inlinedVal12
    ]);
  } else {
    tmp6 = 1.0 / inlinedVal11;
    tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, inlinedVal3);
    inlinedVal7 = globalThis.Object.freeze([
      inlinedVal11,
      tmp7
    ]);
  }
  if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
    runtime.Tuple.get(inlinedVal7, 0);
    inlinedVal4 = runtime.Tuple.get(inlinedVal7, 1);
    return globalThis.Object.freeze([
      pos,
      inlinedVal4
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
hitTest1$1 = function hitTest1$(mcray2, center, material, rSq, invR) {
  return (ray, minMaxT) => {
    return hitTest11(mcray2, center, material, rSq, invR, ray, minMaxT)
  }
};
hitTest11 = function hitTest1(mcray2, center, material, rSq, invR, ray, minMaxT) {
  let q, b, c, disc, scrut, t, scrut1, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element0$ = runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    q = mcray2[vec3Sub$accessorSymbol](element0$, center);
    tmp = mcray2[vec3Dot$accessorSymbol](element1$, q);
    b = 2.0 * tmp;
    tmp1 = mcray2[vec3Dot$accessorSymbol](q, q);
    c = tmp1 - rSq;
    tmp2 = b * b;
    tmp3 = 4.0 * c;
    disc = tmp2 - tmp3;
    scrut = disc < 0.0;
    if (scrut === true) {
      return mcray2.Miss
    }
    {
      let inlinedVal;
      tmp4 = - b;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
      tmp5 = tmp4 - inlinedVal;
      t = 0.5 * tmp5;
      scrut1 = mcray2[within$accessorSymbol](t, minMaxT);
      if (scrut1 === true) {
        let element1$1, element0$1;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          let inlinedVal1, tmp9;
          element0$1 = runtime.Tuple.get(ray, 0);
          element1$1 = runtime.Tuple.get(ray, 1);
          tmp9 = mcray2[vec3Scale$accessorSymbol](t, element1$1);
          inlinedVal1 = mcray2[vec3Add$accessorSymbol](element0$1, tmp9);
          tmp6 = mcray2[vec3Sub$accessorSymbol](inlinedVal1, center);
          tmp7 = mcray2[vec3Scale$accessorSymbol](invR, tmp6);
          tmp8 = mcray2.MatHit(t, inlinedVal1, tmp7, material);
          return mcray2.ObjHit(tmp8)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      return mcray2.Miss;
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$5 = (undefined, function (mcray2, ray, minMaxT) {
  return (obj, mhit) => {
    return lambda2(mcray2, ray, minMaxT, obj, mhit)
  }
});
lambda2 = (undefined, function (mcray2, ray, minMaxT, obj, mhit) {
  let inlinedVal;
  if (obj instanceof mcray2.Obj.class) {
    inlinedVal = runtime.safeCall(obj.hit(ray, minMaxT));
    return mcray2[closer$accessorSymbol](mhit, inlinedVal)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
hitTest1$ = function hitTest1$(mcray2, objs) {
  return (ray, minMaxT) => {
    return hitTest1(mcray2, objs, ray, minMaxT)
  }
};
hitTest1 = function hitTest1(mcray2, objs, ray, minMaxT) {
  let f, init;
  f = lambda$5(mcray2, ray, minMaxT);
  init = mcray2.Miss;
  return mcray2[listFoldl$tailrec$accessorSymbol](f, init, objs)
};
lambda$4 = (undefined, function (mcray2) {
  return (ray, minMaxT) => {
    return mcray2.Miss
  }
});
lambda$3 = (undefined, function (mcray2) {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
});
lambda$2 = (undefined, function (mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return lambda1(mcray2, rng, albedo, fuzz, ray, hit)
  }
});
lambda1 = (undefined, function (mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          runtime.Tuple.get(inlinedVal4, 0);
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (mcray2) {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
});
lambda$ = (undefined, function (mcray2, rng, albedo) {
  return (ray, hit) => {
    return lambda(mcray2, rng, albedo, ray, hit)
  }
});
lambda = (undefined, function (mcray2, rng, albedo, ray, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      runtime.Tuple.get(inlinedVal2, 0);
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
go = function go(mcray2, n, f, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return mcray2.Nil
  }
  tmp = runtime.safeCall(f(i));
  tmp1 = i + 1;
  tmp2 = go(mcray2, n, f, tmp1);
  return mcray2.Cons(tmp, tmp2);
};
(class mcray {
  static {
    mcray1 = this
  }
  static get [listFoldl$tailrec$accessorSymbol]() { return mcray.#listFoldl$tailrec; }
  static get [within$accessorSymbol]() { return mcray.#within; }
  static get [rgbAdd$accessorSymbol]() { return mcray.#rgbAdd; }
  static get [rgbModulate$accessorSymbol]() { return mcray.#rgbModulate; }
  static get [rgbScale$accessorSymbol]() { return mcray.#rgbScale; }
  static get [vec3Add$accessorSymbol]() { return mcray.#vec3Add; }
  static get [vec3Sub$accessorSymbol]() { return mcray.#vec3Sub; }
  static get [vec3Scale$accessorSymbol]() { return mcray.#vec3Scale; }
  static get [vec3Dot$accessorSymbol]() { return mcray.#vec3Dot; }
  static get [vec3RandomPointInSphere$accessorSymbol]() { return mcray.#vec3RandomPointInSphere; }
  static get [getEmission$accessorSymbol]() { return mcray.#getEmission; }
  static get [getHitInfo$accessorSymbol]() { return mcray.#getHitInfo; }
  static get [closer$accessorSymbol]() { return mcray.#closer; }
  static get [rayToRGB$accessorSymbol]() { return mcray.#rayToRGB; }
  static {
    mcray.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        mcray.Cons.class = this
      }
      constructor(head, tail) {
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]];
    });
    (class Nil {
      static {
        new this
      }
      constructor() {
        mcray.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    mcray.Some = function Some(value) {
      return globalThis.Object.freeze(new Some.class(value));
    };
    (class Some {
      static {
        mcray.Some.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Some", ["value"]];
    });
    (class None {
      static {
        new this
      }
      constructor() {
        mcray.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    mcray.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        mcray.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    mcray.MatHit = function MatHit(t, pt, norm, material) {
      return globalThis.Object.freeze(new MatHit.class(t, pt, norm, material));
    };
    (class MatHit {
      static {
        mcray.MatHit.class = this
      }
      constructor(t, pt, norm, material) {
        this.t = t;
        this.pt = pt;
        this.norm = norm;
        this.material = material;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MatHit", ["t", "pt", "norm", "material"]];
    });
    mcray.Material = function Material(emit, scatter) {
      return globalThis.Object.freeze(new Material.class(emit, scatter));
    };
    (class Material {
      static {
        mcray.Material.class = this
      }
      constructor(emit, scatter) {
        this.emit = emit;
        this.scatter = scatter;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Material", ["emit", "scatter"]];
    });
    (class Miss {
      static {
        new this
      }
      constructor() {
        mcray.Miss = this;
        Object.defineProperty(this, "class", {
          value: Miss
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Miss"];
    });
    mcray.ObjHit = function ObjHit(hit) {
      return globalThis.Object.freeze(new ObjHit.class(hit));
    };
    (class ObjHit {
      static {
        mcray.ObjHit.class = this
      }
      constructor(hit) {
        this.hit = hit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ObjHit", ["hit"]];
    });
    mcray.Obj = function Obj(hit) {
      return globalThis.Object.freeze(new Obj.class(hit));
    };
    (class Obj {
      static {
        mcray.Obj.class = this
      }
      constructor(hit) {
        this.hit = hit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Obj", ["hit"]];
    });
    mcray.Img = function Img(wid, ht, pixels) {
      return globalThis.Object.freeze(new Img.class(wid, ht, pixels));
    };
    (class Img {
      static {
        mcray.Img.class = this
      }
      constructor(wid, ht, pixels) {
        this.wid = wid;
        this.ht = ht;
        this.pixels = pixels;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Img", ["wid", "ht", "pixels"]];
    });
    mcray.Cam = function Cam(wid, ht, ns, pos, ulc, hvec, vvec) {
      return globalThis.Object.freeze(new Cam.class(wid, ht, ns, pos, ulc, hvec, vvec));
    };
    (class Cam {
      static {
        mcray.Cam.class = this
      }
      constructor(wid, ht, ns, pos, ulc, hvec, vvec) {
        this.wid = wid;
        this.ht = ht;
        this.ns = ns;
        this.pos = pos;
        this.ulc = ulc;
        this.hvec = hvec;
        this.vvec = vvec;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cam", ["wid", "ht", "ns", "pos", "ulc", "hvec", "vvec"]];
    });
  }
  static #listFoldl$tailrec(f, init, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof mcray.Nil.class) {
        return init
      } else if (l instanceof mcray.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, init));
        init = tmp;
        l = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listTabulate(n, f) {
    return go(mcray, n, f, 0)
  }
  static #posInf() {
    return 1.0 / 0.0
  }
  static #pi() {
    return 3.14159265358979323846
  }
  static #sqrt(x) {
    return runtime.safeCall(globalThis.Math.sqrt(x))
  }
  static #tan(x) {
    return runtime.safeCall(globalThis.Math.tan(x))
  }
  static #floor(x) {
    return runtime.safeCall(globalThis.Math.floor(x))
  }
  static #real(x) {
    return x
  }
  static #intMod(a, b) {
    let tmp, tmp1, tmp2;
    tmp = a / b;
    tmp1 = mcray.#floor(tmp);
    tmp2 = b * tmp1;
    return a - tmp2
  }
  static #gen32(rng) {
    let x, x1, tmp;
    x = rng.value;
    tmp = x * 48271;
    x1 = mcray.#intMod(tmp, 2147483647);
    rng.value = x1;
    return x1
  }
  static #rand(rng) {
    let scale, tmp, tmp1;
    scale = 1.0 / 2147483647.0;
    tmp = mcray.#gen32(rng);
    tmp1 = mcray.#real(tmp);
    return scale * tmp1
  }
  static #within(t, minMax) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(minMax) && minMax.length === 2) {
      element0$ = runtime.Tuple.get(minMax, 0);
      element1$ = runtime.Tuple.get(minMax, 1);
      tmp = element0$ <= t;
      if (tmp === true) {
        return t <= element1$
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rgbAdd(c1, c2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(c1) && c1.length === 3) {
      element0$ = runtime.Tuple.get(c1, 0);
      element1$ = runtime.Tuple.get(c1, 1);
      element2$ = runtime.Tuple.get(c1, 2);
      if (runtime.Tuple.isArrayLike(c2) && c2.length === 3) {
        element0$1 = runtime.Tuple.get(c2, 0);
        element1$1 = runtime.Tuple.get(c2, 1);
        element2$1 = runtime.Tuple.get(c2, 2);
        tmp = element0$ + element0$1;
        tmp1 = element1$ + element1$1;
        tmp2 = element2$ + element2$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rgbModulate(c1, c2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(c1) && c1.length === 3) {
      element0$ = runtime.Tuple.get(c1, 0);
      element1$ = runtime.Tuple.get(c1, 1);
      element2$ = runtime.Tuple.get(c1, 2);
      if (runtime.Tuple.isArrayLike(c2) && c2.length === 3) {
        element0$1 = runtime.Tuple.get(c2, 0);
        element1$1 = runtime.Tuple.get(c2, 1);
        element2$1 = runtime.Tuple.get(c2, 2);
        tmp = element0$ * element0$1;
        tmp1 = element1$ * element1$1;
        tmp2 = element2$ * element2$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rgbScale(s, c) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(c) && c.length === 3) {
      element0$ = runtime.Tuple.get(c, 0);
      element1$ = runtime.Tuple.get(c, 1);
      element2$ = runtime.Tuple.get(c, 2);
      tmp = s * element0$;
      tmp1 = s * element1$;
      tmp2 = s * element2$;
      return globalThis.Object.freeze([
        tmp,
        tmp1,
        tmp2
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rgbLerp(c1, t, c2) {
    let tmp, tmp1, tmp2;
    tmp = 1.0 - t;
    tmp1 = mcray.#rgbScale(tmp, c1);
    tmp2 = mcray.#rgbScale(t, c2);
    return mcray.#rgbAdd(tmp1, tmp2)
  }
  static #rgbWhite() {
    return globalThis.Object.freeze([
      1.0,
      1.0,
      1.0
    ])
  }
  static #rgbGray(v) {
    return globalThis.Object.freeze([
      v,
      v,
      v
    ])
  }
  static #toByte(f) {
    let f1, scrut, scrut1, tmp;
    tmp = f * 255.99;
    f1 = mcray.#floor(tmp);
    scrut = f1 <= 0;
    if (scrut === true) {
      return 0
    }
    scrut1 = 255 <= f1;
    if (scrut1 === true) {
      return 255
    }
    return f1;
  }
  static #colorFromRGBWithGamma(c) {
    let element2$, element1$, element0$;
    if (runtime.Tuple.isArrayLike(c) && c.length === 3) {
      let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
      element0$ = runtime.Tuple.get(c, 0);
      element1$ = runtime.Tuple.get(c, 1);
      element2$ = runtime.Tuple.get(c, 2);
      inlinedVal5 = runtime.safeCall(globalThis.Math.sqrt(element0$));
      inlinedVal = mcray.#toByte(inlinedVal5);
      inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(element1$));
      inlinedVal1 = mcray.#toByte(inlinedVal4);
      inlinedVal3 = runtime.safeCall(globalThis.Math.sqrt(element2$));
      inlinedVal2 = mcray.#toByte(inlinedVal3);
      return globalThis.Object.freeze([
        inlinedVal,
        inlinedVal1,
        inlinedVal2
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #epsilon() {
    return 0.0001
  }
  static #vec3Zero() {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
  static #vec3Add(v1, v2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(v1) && v1.length === 3) {
      element0$ = runtime.Tuple.get(v1, 0);
      element1$ = runtime.Tuple.get(v1, 1);
      element2$ = runtime.Tuple.get(v1, 2);
      if (runtime.Tuple.isArrayLike(v2) && v2.length === 3) {
        element0$1 = runtime.Tuple.get(v2, 0);
        element1$1 = runtime.Tuple.get(v2, 1);
        element2$1 = runtime.Tuple.get(v2, 2);
        tmp = element0$ + element0$1;
        tmp1 = element1$ + element1$1;
        tmp2 = element2$ + element2$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vec3Sub(v1, v2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(v1) && v1.length === 3) {
      element0$ = runtime.Tuple.get(v1, 0);
      element1$ = runtime.Tuple.get(v1, 1);
      element2$ = runtime.Tuple.get(v1, 2);
      if (runtime.Tuple.isArrayLike(v2) && v2.length === 3) {
        element0$1 = runtime.Tuple.get(v2, 0);
        element1$1 = runtime.Tuple.get(v2, 1);
        element2$1 = runtime.Tuple.get(v2, 2);
        tmp = element0$ - element0$1;
        tmp1 = element1$ - element1$1;
        tmp2 = element2$ - element2$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vec3Scale(s, v) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(v) && v.length === 3) {
      element0$ = runtime.Tuple.get(v, 0);
      element1$ = runtime.Tuple.get(v, 1);
      element2$ = runtime.Tuple.get(v, 2);
      tmp = s * element0$;
      tmp1 = s * element1$;
      tmp2 = s * element2$;
      return globalThis.Object.freeze([
        tmp,
        tmp1,
        tmp2
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vec3Dot(v1, v2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(v1) && v1.length === 3) {
      element0$ = runtime.Tuple.get(v1, 0);
      element1$ = runtime.Tuple.get(v1, 1);
      element2$ = runtime.Tuple.get(v1, 2);
      if (runtime.Tuple.isArrayLike(v2) && v2.length === 3) {
        element0$1 = runtime.Tuple.get(v2, 0);
        element1$1 = runtime.Tuple.get(v2, 1);
        element2$1 = runtime.Tuple.get(v2, 2);
        tmp = element0$ * element0$1;
        tmp1 = element1$ * element1$1;
        tmp2 = tmp + tmp1;
        tmp3 = element2$ * element2$1;
        return tmp2 + tmp3
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vec3Cross(v1, v2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (runtime.Tuple.isArrayLike(v1) && v1.length === 3) {
      element0$ = runtime.Tuple.get(v1, 0);
      element1$ = runtime.Tuple.get(v1, 1);
      element2$ = runtime.Tuple.get(v1, 2);
      if (runtime.Tuple.isArrayLike(v2) && v2.length === 3) {
        element0$1 = runtime.Tuple.get(v2, 0);
        element1$1 = runtime.Tuple.get(v2, 1);
        element2$1 = runtime.Tuple.get(v2, 2);
        tmp = element1$ * element2$1;
        tmp1 = element2$ * element1$1;
        tmp2 = tmp - tmp1;
        tmp3 = element2$ * element0$1;
        tmp4 = element0$ * element2$1;
        tmp5 = tmp3 - tmp4;
        tmp6 = element0$ * element1$1;
        tmp7 = element1$ * element0$1;
        tmp8 = tmp6 - tmp7;
        return globalThis.Object.freeze([
          tmp2,
          tmp5,
          tmp8
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vec3LengthSq(v) {
    return mcray.#vec3Dot(v, v)
  }
  static #vec3Length(v) {
    let tmp;
    tmp = mcray.#vec3LengthSq(v);
    return mcray.#sqrt(tmp)
  }
  static #vec3LengthAndDir(v) {
    let l, scrut, tmp, tmp1, tmp2, tmp3;
    l = mcray.#vec3Length(v);
    tmp = mcray.#epsilon();
    scrut = l < tmp;
    if (scrut === true) {
      tmp1 = mcray.#vec3Zero();
      return globalThis.Object.freeze([
        0.0,
        tmp1
      ])
    }
    tmp2 = 1.0 / l;
    tmp3 = mcray.#vec3Scale(tmp2, v);
    return globalThis.Object.freeze([
      l,
      tmp3
    ]);
  }
  static #vec3Normalize(v) {
    let scrut;
    scrut = mcray.#vec3LengthAndDir(v);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      runtime.Tuple.get(scrut, 0);
      return runtime.Tuple.get(scrut, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vec3RandomPointInSphere(rng) {
    loopLabel: while (true) {
      let pt, scrut, tmp, tmp1, tmp2, tmp3;
      tmp = mcray.#rand(rng);
      tmp1 = mcray.#rand(rng);
      tmp2 = mcray.#rand(rng);
      pt = globalThis.Object.freeze([
        tmp,
        tmp1,
        tmp2
      ]);
      tmp3 = mcray.#vec3Dot(pt, pt);
      scrut = tmp3 < 1.0;
      if (scrut === true) {
        return pt
      }
      continue loopLabel;
    }
  }
  static #getEmission(hit) {
    let arg$MatHit$3$;
    if (hit instanceof mcray.MatHit.class) {
      arg$MatHit$3$ = hit.material;
      if (arg$MatHit$3$ instanceof mcray.Material.class) {
        return runtime.safeCall(arg$MatHit$3$.emit(hit))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #getHitInfo(hit, ray) {
    let arg$MatHit$3$;
    if (hit instanceof mcray.MatHit.class) {
      arg$MatHit$3$ = hit.material;
      if (arg$MatHit$3$ instanceof mcray.Material.class) {
        return runtime.safeCall(arg$MatHit$3$.scatter(ray, hit))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lambertian(rng, albedo) {
    let lambda$here, lambda$here1;
    lambda$here = lambda$1(mcray);
    lambda$here1 = lambda$(mcray, rng, albedo);
    return mcray.Material(lambda$here, lambda$here1)
  }
  static #metal(rng, albedo, fuzz) {
    let lambda$here, lambda$here1;
    lambda$here = lambda$3(mcray);
    lambda$here1 = lambda$2(mcray, rng, albedo, fuzz);
    return mcray.Material(lambda$here, lambda$here1)
  }
  static #objectEmpty() {
    let lambda$here;
    lambda$here = lambda$4(mcray);
    return mcray.Obj(lambda$here)
  }
  static #closer(maybeHit1, maybeHit2) {
    let scrut, arg$ObjHit$0$, arg$MatHit$0$, arg$ObjHit$0$1, arg$MatHit$0$1;
    if (maybeHit1 instanceof mcray.Miss.class) {
      return maybeHit2
    }
    if (maybeHit2 instanceof mcray.Miss.class) {
      return maybeHit1
    }
    if (maybeHit1 instanceof mcray.ObjHit.class) {
      arg$ObjHit$0$ = maybeHit1.hit;
      if (arg$ObjHit$0$ instanceof mcray.MatHit.class) {
        arg$MatHit$0$ = arg$ObjHit$0$.t;
        if (maybeHit2 instanceof mcray.ObjHit.class) {
          arg$ObjHit$0$1 = maybeHit2.hit;
          if (arg$ObjHit$0$1 instanceof mcray.MatHit.class) {
            arg$MatHit$0$1 = arg$ObjHit$0$1.t;
            scrut = arg$MatHit$0$ <= arg$MatHit$0$1;
            if (scrut === true) {
              return maybeHit1
            }
            return maybeHit2;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #fromList(objs) {
    let arg$Cons$0$, arg$Cons$1$, hitTest1$here;
    if (objs instanceof mcray.Nil.class) {
      return mcray.#objectEmpty()
    }
    if (objs instanceof mcray.Cons.class) {
      arg$Cons$0$ = objs.head;
      arg$Cons$1$ = objs.tail;
      if (arg$Cons$1$ instanceof mcray.Nil.class) {
        return arg$Cons$0$
      }
    }
    hitTest1$here = hitTest1$(mcray, objs);
    return mcray.Obj(hitTest1$here);
  }
  static #sphereMake(center, radius, material) {
    let rSq, invR, hitTest1$here;
    rSq = radius * radius;
    invR = 1.0 / radius;
    hitTest1$here = hitTest1$1(mcray, center, material, rSq, invR);
    return mcray.Obj(hitTest1$here)
  }
  static #cameraMake(wid, ht, ns, pos, lookAt, up, fov) {
    let dir, right, up1, pw, aspect, theta, flen, imgCenter, ulc, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
    tmp = mcray.#vec3Sub(lookAt, pos);
    dir = mcray.#vec3Normalize(tmp);
    tmp1 = mcray.#vec3Cross(dir, up);
    right = mcray.#vec3Normalize(tmp1);
    tmp2 = mcray.#vec3Cross(right, dir);
    up1 = mcray.#vec3Normalize(tmp2);
    tmp3 = mcray.#real(wid);
    pw = 2.0 / tmp3;
    tmp4 = mcray.#real(ht);
    tmp5 = mcray.#real(wid);
    aspect = tmp4 / tmp5;
    tmp6 = mcray.#pi();
    tmp7 = tmp6 * fov;
    theta = tmp7 / 180.0;
    tmp8 = 0.5 * theta;
    tmp9 = mcray.#tan(tmp8);
    flen = 1.0 / tmp9;
    tmp10 = mcray.#vec3Scale(flen, dir);
    imgCenter = mcray.#vec3Add(pos, tmp10);
    tmp11 = mcray.#vec3Scale(aspect, up1);
    tmp12 = mcray.#vec3Add(imgCenter, tmp11);
    ulc = mcray.#vec3Sub(tmp12, right);
    tmp13 = mcray.#vec3Scale(pw, right);
    tmp14 = - pw;
    tmp15 = mcray.#vec3Scale(tmp14, up1);
    return mcray.Cam(wid, ht, ns, pos, ulc, tmp13, tmp15)
  }
  static #makePixelRenderer(toRGB, cvt) {
    return (r, c) => {
      let tmp;
      tmp = runtime.safeCall(toRGB(r, c));
      return runtime.safeCall(cvt(tmp))
    }
  }
  static #foreachPixel(cam, pr) {
    let arg$Cam$0$, arg$Cam$1$, tmp;
    if (cam instanceof mcray.Cam.class) {
      let colors, id, param0, param1, param2, param3, param4, param5, inlinedVal;
      arg$Cam$0$ = cam.wid;
      arg$Cam$1$ = cam.ht;
      tmp = arg$Cam$1$ - 1;
      colors = mcray.Nil;
      id = 0;
      param0 = mcray;
      param1 = pr;
      param2 = arg$Cam$0$;
      param3 = tmp;
      param4 = colors;
      param5 = undefined;
      inlinedLbl: {
        loopLabel: while (true) {
          switch (id) {
            case 0:
              {
                let scrut, tmp1, tmp2;
                scrut = param3 < 0;
                if (scrut === true) {
                  inlinedVal = param4;
                  break inlinedLbl
                }
                {
                  let param4_tmp;
                  tmp1 = param3 - 1;
                  tmp2 = param2 - 1;
                  param4_tmp = param4;
                  param3 = tmp1;
                  param4 = tmp2;
                  param5 = param4_tmp;
                  id = 1;
                  continue loopLabel;
                }
              }
            case 1:
              {
                let scrut, tmp1, tmp2, tmp3;
                scrut = param4 < 0;
                if (scrut === true) {
                  param4 = param5;
                  id = 0;
                  continue loopLabel
                }
                tmp1 = param4 - 1;
                tmp2 = runtime.safeCall(param1(param3, param4));
                tmp3 = param0.Cons(tmp2, param5);
                param4 = tmp1;
                param5 = tmp3;
                id = 1;
                continue loopLabel;
              }
          }
        }
      }
      return mcray.Img(arg$Cam$0$, arg$Cam$1$, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rayToRGB(ray) {
    let element1$, element1$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
      runtime.Tuple.get(ray, 0);
      element1$ = runtime.Tuple.get(ray, 1);
      if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 3) {
        runtime.Tuple.get(element1$, 0);
        element1$1 = runtime.Tuple.get(element1$, 1);
        runtime.Tuple.get(element1$, 2);
        tmp = mcray.#rgbWhite();
        tmp1 = element1$1 + 1.0;
        tmp2 = 0.5 * tmp1;
        tmp3 = globalThis.Object.freeze([
          0.5,
          0.7,
          1.0
        ]);
        return mcray.#rgbLerp(tmp, tmp2, tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #raysForPixel(rng, cam) {
    return (r, c) => {
      let r1, c1, ulcDir, arg$Cam$2$, arg$Cam$3$, arg$Cam$4$, arg$Cam$5$, arg$Cam$6$, mkRay$here;
      if (cam instanceof mcray.Cam.class) {
        arg$Cam$2$ = cam.ns;
        arg$Cam$3$ = cam.pos;
        arg$Cam$4$ = cam.ulc;
        arg$Cam$5$ = cam.hvec;
        arg$Cam$6$ = cam.vvec;
        r1 = mcray.#real(r);
        c1 = mcray.#real(c);
        ulcDir = mcray.#vec3Sub(arg$Cam$4$, arg$Cam$3$);
        mkRay$here = mkRay$(mcray, rng, arg$Cam$5$, arg$Cam$6$, arg$Cam$3$, r1, c1, ulcDir);
        return mcray.#listTabulate(arg$Cam$2$, mkRay$here)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #aaPixelToRGB(rng, cam, trace1) {
    let rfp, scrut, arg$Cam$2$, tmp, tmp1;
    if (cam instanceof mcray.Cam.class) {
      arg$Cam$2$ = cam.ns;
      rfp = mcray.#raysForPixel(rng, cam);
      scrut = arg$Cam$2$ == 0;
      if (scrut === true) {
        return lambda$6(mcray, trace1, rfp, 1.0)
      }
      tmp1 = mcray.#real(arg$Cam$2$);
      tmp = 1.0 / tmp1;
      return lambda$6(mcray, trace1, rfp, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #traceRay(world, maxDepth) {
    let minMaxT, tmp;
    tmp = mcray.#posInf();
    minMaxT = globalThis.Object.freeze([
      0.001,
      tmp
    ]);
    return lambda$8(mcray, world, maxDepth, minMaxT)
  }
  static #rayTracer(rng, cam, world) {
    let tmp, tmp1, tmp2;
    tmp = mcray.#traceRay(world, 20);
    tmp1 = mcray.#aaPixelToRGB(rng, cam, tmp);
    tmp2 = mcray.#makePixelRenderer(tmp1, mcray.#colorFromRGBWithGamma);
    return mcray.#foreachPixel(cam, tmp2)
  }
  static #randomSphere(rng, x, z) {
    let chooseMat, x1, z1, c, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28;
    chooseMat = mcray.#rand(rng);
    tmp = mcray.#real(x);
    tmp1 = mcray.#rand(rng);
    tmp2 = 0.9 * tmp1;
    x1 = tmp + tmp2;
    tmp3 = mcray.#real(z);
    tmp4 = mcray.#rand(rng);
    tmp5 = 0.9 * tmp4;
    z1 = tmp3 + tmp5;
    c = globalThis.Object.freeze([
      x1,
      0.2,
      z1
    ]);
    scrut = chooseMat < 0.8;
    if (scrut === true) {
      tmp6 = mcray.#rand(rng);
      tmp7 = mcray.#rand(rng);
      tmp8 = tmp6 * tmp7;
      tmp9 = mcray.#rand(rng);
      tmp10 = mcray.#rand(rng);
      tmp11 = tmp9 * tmp10;
      tmp12 = mcray.#rand(rng);
      tmp13 = mcray.#rand(rng);
      tmp14 = tmp12 * tmp13;
      tmp15 = globalThis.Object.freeze([
        tmp8,
        tmp11,
        tmp14
      ]);
      tmp16 = mcray.#lambertian(rng, tmp15);
      return mcray.#sphereMake(c, 0.2, tmp16)
    }
    tmp17 = mcray.#rand(rng);
    tmp18 = 1.0 + tmp17;
    tmp19 = 0.5 * tmp18;
    tmp20 = mcray.#rand(rng);
    tmp21 = 1.0 + tmp20;
    tmp22 = 0.5 * tmp21;
    tmp23 = mcray.#rand(rng);
    tmp24 = 1.0 + tmp23;
    tmp25 = 0.5 * tmp24;
    tmp26 = globalThis.Object.freeze([
      tmp19,
      tmp22,
      tmp25
    ]);
    tmp27 = mcray.#rand(rng);
    tmp28 = 0.5 * tmp27;
    tmp16 = mcray.#metal(rng, tmp26, tmp28);
    return mcray.#sphereMake(c, 0.2, tmp16);
  }
  static #makeScene(rng) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, mcray2, rng1, x, z, objs, inlinedVal;
    tmp = - 1000.0;
    tmp1 = globalThis.Object.freeze([
      0.0,
      tmp,
      0.0
    ]);
    tmp2 = mcray.#rgbGray(0.5);
    tmp3 = mcray.#lambertian(rng, tmp2);
    tmp4 = mcray.#sphereMake(tmp1, 1000.0, tmp3);
    tmp5 = globalThis.Object.freeze([
      4.0,
      1.0,
      0.0
    ]);
    tmp6 = globalThis.Object.freeze([
      0.7,
      0.6,
      0.5
    ]);
    tmp7 = mcray.#metal(rng, tmp6, 0.0);
    tmp8 = mcray.#sphereMake(tmp5, 1.0, tmp7);
    tmp9 = - 4.0;
    tmp10 = globalThis.Object.freeze([
      tmp9,
      1.0,
      0.0
    ]);
    tmp11 = globalThis.Object.freeze([
      0.4,
      0.2,
      0.1
    ]);
    tmp12 = mcray.#lambertian(rng, tmp11);
    tmp13 = mcray.#sphereMake(tmp10, 1.0, tmp12);
    tmp14 = mcray.Cons(tmp13, mcray.Nil);
    tmp15 = mcray.Cons(tmp8, tmp14);
    tmp16 = mcray.Cons(tmp4, tmp15);
    mcray2 = mcray;
    rng1 = rng;
    x = -11;
    z = -11;
    objs = tmp16;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, scrut1, tmp17, tmp18, tmp19, tmp20;
        scrut = z < 11;
        if (scrut === true) {
          tmp17 = z + 1;
          tmp18 = mcray2.#randomSphere(rng1, x, z);
          tmp19 = mcray2.Cons(tmp18, objs);
          z = tmp17;
          objs = tmp19;
          continue loopLabel
        }
        scrut1 = x < 11;
        if (scrut1 === true) {
          tmp20 = x + 1;
          x = tmp20;
          z = -11;
          continue loopLabel
        }
        inlinedVal = objs;
        break inlinedLbl;
      }
    }
    return mcray.#fromList(inlinedVal)
  }
  static #buildScene(rng, wid, ht, ns) {
    let cam, world, tmp, tmp1, tmp2;
    tmp = globalThis.Object.freeze([
      13.0,
      2.0,
      3.0
    ]);
    tmp1 = mcray.#vec3Zero();
    tmp2 = globalThis.Object.freeze([
      0.0,
      1.0,
      0.0
    ]);
    cam = mcray.#cameraMake(wid, ht, ns, tmp, tmp1, tmp2, 30.0);
    world = mcray.#makeScene(rng);
    return globalThis.Object.freeze([
      cam,
      world
    ])
  }
  static main() {
    let rng, scrut, element1$, element0$;
    rng = new mcray.Ref.class(1234567);
    scrut = mcray.#buildScene(rng, 3, 2, 5);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      return mcray.#rayTracer(rng, element0$, element1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mcray"];
});
export { go as _$_modulePrivate_$_go };
export { hitTest1 as _$_modulePrivate_$_hitTest1 };
export { hitTest11 as _$_modulePrivate_$_hitTest11 };
export { mkRay as _$_modulePrivate_$_mkRay };
export { trace as _$_modulePrivate_$_trace };
export { mcray1 as _$_modulePrivate_$_mcray };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { hitTest1$ as _$_modulePrivate_$_hitTest1$ };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { hitTest1$1 as _$_modulePrivate_$_hitTest1$1 };
export { mkRay$ as _$_modulePrivate_$_mkRay$ };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export default mcray1;
