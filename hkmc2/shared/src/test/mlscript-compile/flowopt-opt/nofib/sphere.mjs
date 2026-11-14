const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const sphereintersect$accessorSymbol = globalThis.Symbol("sphereintersect");
const lightray$accessorSymbol = globalThis.Symbol("lightray");
const tracepixel$accessorSymbol = globalThis.Symbol("tracepixel");
let lscomp, lscomp1, lscomp2, lscomp3, lscomp4, lscomp5, lscomp6, lscomp7, f, sphmap, u8, lscomp21, f1, lscomp11, sphere1, lambda, lambda1, lambda$, lambda$1, lscomp1_lscomp2;
lscomp1_lscomp2 = function lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param6 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param6 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param6.head;
            arg$Cons$1$ = param6.tail;
            tmp = param1 - 1;
            tmp1 = NofibPrelude.enumFromTo(0, tmp);
            param6 = arg$Cons$0$;
            param7 = arg$Cons$1$;
            param8 = tmp1;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
          if (param8 instanceof NofibPrelude.Nil.class) {
            param6 = param7;
            id = 0;
            continue loopLabel
          } else if (param8 instanceof NofibPrelude.Cons.class) {
            let inlinedVal;
            arg$Cons$0$ = param8.head;
            arg$Cons$1$ = param8.tail;
            tmp = globalThis.Object.freeze([
              param6,
              arg$Cons$0$
            ]);
            inlinedVal = param0[tracepixel$accessorSymbol](param0.testspheres, param2, param6, arg$Cons$0$, param4, param3, param5);
            tmp1 = globalThis.Object.freeze([
              tmp,
              inlinedVal
            ]);
            tmp2 = lscomp1_lscomp2(1, param0, param1, param2, param3, param4, param5, param6, param7, arg$Cons$1$);
            return NofibPrelude.Cons(tmp1, tmp2)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lscomp21 = function lscomp2(sphere2, winsize, lights, scrnx, firstray, scrny, i, t1, ls2) {
  return lscomp1_lscomp2(1, sphere2, winsize, lights, scrnx, firstray, scrny, i, t1, ls2)
};
f1 = function f(sphere2, lights, scrnx, firstray, scrny, i, j) {
  return sphere2[tracepixel$accessorSymbol](sphere2.testspheres, lights, i, j, firstray, scrnx, scrny)
};
lscomp11 = function lscomp1(sphere2, winsize, lights, scrnx, firstray, scrny, ls1) {
  return lscomp1_lscomp2(0, sphere2, winsize, lights, scrnx, firstray, scrny, ls1, undefined, undefined)
};
lambda$1 = (undefined, function (sphere2) {
  return (rgb, acc) => {
    return lambda1(sphere2, rgb, acc)
  }
});
u8 = function u8(sphere2, x) {
  let tmp, inlinedVal;
  tmp = 255 * x;
  inlinedVal = runtime.safeCall(globalThis.Math.round(tmp));
  return runtime.safeCall(globalThis.BigInt(inlinedVal))
};
lambda1 = (undefined, function (sphere2, rgb, acc) {
  let element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (runtime.Tuple.isArrayLike(rgb) && rgb.length === 3) {
    let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, tmp5, inlinedVal6, tmp6, inlinedVal7, tmp7, inlinedVal8;
    element0$ = runtime.Tuple.get(rgb, 0);
    element1$ = runtime.Tuple.get(rgb, 1);
    element2$ = runtime.Tuple.get(rgb, 2);
    tmp7 = 255 * element0$;
    inlinedVal8 = runtime.safeCall(globalThis.Math.round(tmp7));
    inlinedVal3 = runtime.safeCall(globalThis.BigInt(inlinedVal8));
    tmp6 = 255 * element1$;
    inlinedVal7 = runtime.safeCall(globalThis.Math.round(tmp6));
    inlinedVal4 = runtime.safeCall(globalThis.BigInt(inlinedVal7));
    inlinedVal = runtime.safeCall(globalThis.BigInt(7));
    tmp = inlinedVal4 * inlinedVal;
    tmp1 = inlinedVal3 + tmp;
    tmp5 = 255 * element2$;
    inlinedVal6 = runtime.safeCall(globalThis.Math.round(tmp5));
    inlinedVal5 = runtime.safeCall(globalThis.BigInt(inlinedVal6));
    inlinedVal1 = runtime.safeCall(globalThis.BigInt(23));
    tmp2 = inlinedVal5 * inlinedVal1;
    tmp3 = tmp1 + tmp2;
    inlinedVal2 = runtime.safeCall(globalThis.BigInt(61));
    tmp4 = acc * inlinedVal2;
    return tmp3 + tmp4
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$ = (undefined, function (sphere2, hitpos, surf, norm, refl) {
  return (l) => {
    return sphere2[lightray$accessorSymbol](l, hitpos, norm, refl, surf)
  }
});
lambda = (undefined, function (sphere2, hitpos, surf, norm, refl, l) {
  return sphere2[lightray$accessorSymbol](l, hitpos, norm, refl, surf)
});
f = function f(d1s1, d2s2) {
  let scrut, element1$, element0$, element1$1, element0$1;
  if (runtime.Tuple.isArrayLike(d1s1) && d1s1.length === 2) {
    element0$ = runtime.Tuple.get(d1s1, 0);
    element1$ = runtime.Tuple.get(d1s1, 1);
    if (runtime.Tuple.isArrayLike(d2s2) && d2s2.length === 2) {
      element0$1 = runtime.Tuple.get(d2s2, 0);
      element1$1 = runtime.Tuple.get(d2s2, 1);
      scrut = element0$ < element0$1;
      if (scrut === true) {
        return globalThis.Object.freeze([
          element0$,
          element1$
        ])
      }
      return globalThis.Object.freeze([
        element0$1,
        element1$1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
sphmap = function sphmap(sphere2, pos, dir, xss) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      scrut = sphere2[sphereintersect$accessorSymbol](pos, dir, arg$Cons$0$);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        if (element0$ === true) {
          tmp = globalThis.Object.freeze([
            element1$,
            arg$Cons$0$
          ]);
          tmp1 = sphmap(sphere2, pos, dir, arg$Cons$1$);
          return NofibPrelude.Cons(tmp, tmp1)
        }
        xss = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp7 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Body$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Body.class) {
        arg$Body$0$ = arg$Cons$0$.v;
        tmp = lscomp7(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Body$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp6 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Refract$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Refract.class) {
        arg$Refract$0$ = arg$Cons$0$.v;
        tmp = lscomp6(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Refract$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp5 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Transmit$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Transmit.class) {
        arg$Transmit$0$ = arg$Cons$0$.v;
        tmp = lscomp5(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Transmit$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp4 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Reflect$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Reflect.class) {
        arg$Reflect$0$ = arg$Cons$0$.v;
        tmp = lscomp4(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Reflect$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp3 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Specpow$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Specpow.class) {
        arg$Specpow$0$ = arg$Cons$0$.v;
        tmp = lscomp3(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Specpow$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp2 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Specular$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Specular.class) {
        arg$Specular$0$ = arg$Cons$0$.v;
        tmp = lscomp2(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Specular$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp1 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Diffuse$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Diffuse.class) {
        arg$Diffuse$0$ = arg$Cons$0$.v;
        tmp = lscomp1(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Diffuse$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Ambient$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Ambient.class) {
        arg$Ambient$0$ = arg$Cons$0$.v;
        tmp = lscomp(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Ambient$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
(class sphere {
  static {
    sphere1 = this
  }
  static get [sphereintersect$accessorSymbol]() { return sphere.#sphereintersect; }
  static get [lightray$accessorSymbol]() { return sphere.#lightray; }
  static get [tracepixel$accessorSymbol]() { return sphere.#tracepixel; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68;
    sphere.pi = globalThis.Math.PI;
    sphere.epsilon = 0.000001;
    sphere.infinity = 100000000.0;
    (class Light {
      static {
        sphere.Light = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Light"];
    });
    sphere.Directional = function Directional(x, y) {
      return globalThis.Object.freeze(new Directional.class(x, y));
    };
    (class Directional extends sphere.Light {
      static {
        sphere.Directional.class = this
      }
      constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Directional", ["x", "y"]];
    });
    sphere.Point = function Point(x, y) {
      return globalThis.Object.freeze(new Point.class(x, y));
    };
    (class Point extends sphere.Light {
      static {
        sphere.Point.class = this
      }
      constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Point", ["x", "y"]];
    });
    (class Surfspec {
      static {
        sphere.Surfspec = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Surfspec"];
    });
    sphere.Ambient = function Ambient(v) {
      return globalThis.Object.freeze(new Ambient.class(v));
    };
    (class Ambient extends sphere.Surfspec {
      static {
        sphere.Ambient.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ambient", ["v"]];
    });
    sphere.Diffuse = function Diffuse(v) {
      return globalThis.Object.freeze(new Diffuse.class(v));
    };
    (class Diffuse extends sphere.Surfspec {
      static {
        sphere.Diffuse.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Diffuse", ["v"]];
    });
    sphere.Specular = function Specular(v) {
      return globalThis.Object.freeze(new Specular.class(v));
    };
    (class Specular extends sphere.Surfspec {
      static {
        sphere.Specular.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Specular", ["v"]];
    });
    sphere.Specpow = function Specpow(v) {
      return globalThis.Object.freeze(new Specpow.class(v));
    };
    (class Specpow extends sphere.Surfspec {
      static {
        sphere.Specpow.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Specpow", ["v"]];
    });
    sphere.Reflect = function Reflect(v) {
      return globalThis.Object.freeze(new Reflect.class(v));
    };
    (class Reflect extends sphere.Surfspec {
      static {
        sphere.Reflect.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Reflect", ["v"]];
    });
    sphere.Transmit = function Transmit(v) {
      return globalThis.Object.freeze(new Transmit.class(v));
    };
    (class Transmit extends sphere.Surfspec {
      static {
        sphere.Transmit.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Transmit", ["v"]];
    });
    sphere.Refract = function Refract(v) {
      return globalThis.Object.freeze(new Refract.class(v));
    };
    (class Refract extends sphere.Surfspec {
      static {
        sphere.Refract.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Refract", ["v"]];
    });
    sphere.Body = function Body(v) {
      return globalThis.Object.freeze(new Body.class(v));
    };
    (class Body extends sphere.Surfspec {
      static {
        sphere.Body.class = this
      }
      constructor(v) {
        super();
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Body", ["v"]];
    });
    sphere.Sphere = function Sphere(pos, radius, surface) {
      return globalThis.Object.freeze(new Sphere.class(pos, radius, surface));
    };
    (class Sphere {
      static {
        sphere.Sphere.class = this
      }
      constructor(pos, radius, surface) {
        this.pos = pos;
        this.radius = radius;
        this.surface = surface;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Sphere", ["pos", "radius", "surface"]];
    });
    tmp = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    sphere.lookat = tmp;
    tmp1 = globalThis.Object.freeze([
      0.0,
      0.0,
      1.0
    ]);
    sphere.vup = tmp1;
    sphere.fov = 45.0;
    tmp2 = globalThis.Object.freeze([
      0.035,
      0.0325,
      0.025
    ]);
    tmp3 = sphere.Ambient(tmp2);
    tmp4 = globalThis.Object.freeze([
      0.5,
      0.45,
      0.35
    ]);
    tmp5 = sphere.Diffuse(tmp4);
    tmp6 = globalThis.Object.freeze([
      0.8,
      0.8,
      0.8
    ]);
    tmp7 = sphere.Specular(tmp6);
    tmp8 = sphere.Specpow(3.0);
    tmp9 = sphere.Reflect(0.5);
    tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
    tmp11 = NofibPrelude.Cons(tmp8, tmp10);
    tmp12 = NofibPrelude.Cons(tmp7, tmp11);
    tmp13 = NofibPrelude.Cons(tmp5, tmp12);
    tmp14 = NofibPrelude.Cons(tmp3, tmp13);
    sphere.s2 = tmp14;
    tmp15 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp16 = sphere.Sphere(tmp15, 0.5, sphere.s2);
    tmp17 = globalThis.Object.freeze([
      0.272166,
      0.272166,
      0.544331
    ]);
    tmp18 = sphere.Sphere(tmp17, 0.166667, sphere.s2);
    tmp19 = globalThis.Object.freeze([
      0.643951,
      0.172546,
      0.0
    ]);
    tmp20 = sphere.Sphere(tmp19, 0.166667, sphere.s2);
    tmp21 = globalThis.Object.freeze([
      0.172546,
      0.643951,
      0.0
    ]);
    tmp22 = sphere.Sphere(tmp21, 0.166667, sphere.s2);
    tmp23 = - 0.371785;
    tmp24 = globalThis.Object.freeze([
      tmp23,
      0.0996195,
      0.544331
    ]);
    tmp25 = sphere.Sphere(tmp24, 0.166667, sphere.s2);
    tmp26 = - 0.471405;
    tmp27 = globalThis.Object.freeze([
      tmp26,
      0.471405,
      0.0
    ]);
    tmp28 = sphere.Sphere(tmp27, 0.166667, sphere.s2);
    tmp29 = - 0.643951;
    tmp30 = - 0.172546;
    tmp31 = globalThis.Object.freeze([
      tmp29,
      tmp30,
      0.0
    ]);
    tmp32 = sphere.Sphere(tmp31, 0.166667, sphere.s2);
    tmp33 = - 0.371785;
    tmp34 = globalThis.Object.freeze([
      0.0996195,
      tmp33,
      0.544331
    ]);
    tmp35 = sphere.Sphere(tmp34, 0.166667, sphere.s2);
    tmp36 = - 0.172546;
    tmp37 = - 0.643951;
    tmp38 = globalThis.Object.freeze([
      tmp36,
      tmp37,
      0.0
    ]);
    tmp39 = sphere.Sphere(tmp38, 0.166667, sphere.s2);
    tmp40 = - 0.471405;
    tmp41 = globalThis.Object.freeze([
      0.471405,
      tmp40,
      0.0
    ]);
    tmp42 = sphere.Sphere(tmp41, 0.166667, sphere.s2);
    tmp43 = NofibPrelude.Cons(tmp42, NofibPrelude.Nil);
    tmp44 = NofibPrelude.Cons(tmp39, tmp43);
    tmp45 = NofibPrelude.Cons(tmp35, tmp44);
    tmp46 = NofibPrelude.Cons(tmp32, tmp45);
    tmp47 = NofibPrelude.Cons(tmp28, tmp46);
    tmp48 = NofibPrelude.Cons(tmp25, tmp47);
    tmp49 = NofibPrelude.Cons(tmp22, tmp48);
    tmp50 = NofibPrelude.Cons(tmp20, tmp49);
    tmp51 = NofibPrelude.Cons(tmp18, tmp50);
    tmp52 = NofibPrelude.Cons(tmp16, tmp51);
    sphere.testspheres = tmp52;
    tmp53 = globalThis.Object.freeze([
      4.0,
      3.0,
      2.0
    ]);
    tmp54 = globalThis.Object.freeze([
      0.288675,
      0.288675,
      0.288675
    ]);
    tmp55 = sphere.Point(tmp53, tmp54);
    tmp56 = - 4.0;
    tmp57 = globalThis.Object.freeze([
      1.0,
      tmp56,
      4.0
    ]);
    tmp58 = globalThis.Object.freeze([
      0.288675,
      0.288675,
      0.288675
    ]);
    tmp59 = sphere.Point(tmp57, tmp58);
    tmp60 = - 3.0;
    tmp61 = globalThis.Object.freeze([
      tmp60,
      1.0,
      5.0
    ]);
    tmp62 = globalThis.Object.freeze([
      0.288675,
      0.288675,
      0.288675
    ]);
    tmp63 = sphere.Point(tmp61, tmp62);
    tmp64 = NofibPrelude.Cons(tmp63, NofibPrelude.Nil);
    tmp65 = NofibPrelude.Cons(tmp59, tmp64);
    tmp66 = NofibPrelude.Cons(tmp55, tmp65);
    sphere.testlights = tmp66;
    tmp67 = globalThis.Object.freeze([
      2.1,
      1.3,
      1.7
    ]);
    sphere.lookfrom = tmp67;
    tmp68 = globalThis.Object.freeze([
      0.078,
      0.361,
      0.753
    ]);
    sphere.background = tmp68;
  }
  static #shade_transmitray_reflectray(id, param0, param1, param2, param3, param4, param5, param6, param7) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let hitpos, ambientlight, surf, amb, norm, refl, diff, transmitted, simple, trintensity, scrut, reflsurf, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, element1$, element0$, tmp10, tmp11, tmp12;
            tmp = sphere.#vecscale(param3, param4);
            hitpos = sphere.#vecadd(param2, tmp);
            ambientlight = globalThis.Object.freeze([
              1.0,
              1.0,
              1.0
            ]);
            surf = sphere.#spheresurf(param1);
            tmp1 = sphere.#ambientsurf(surf);
            amb = sphere.#vecmult(ambientlight, tmp1);
            norm = sphere.#spherenormal(hitpos, param1);
            tmp2 = sphere.#vecdot(param3, norm);
            tmp3 = 2.0 * tmp2;
            tmp4 = - tmp3;
            tmp5 = sphere.#vecscale(norm, tmp4);
            refl = sphere.#vecadd(param3, tmp5);
            tmp6 = NofibPrelude.map(lambda$(sphere, hitpos, surf, norm, refl), param0);
            diff = sphere.#vecsum(tmp6);
            transmitted = sphere.#transmitsurf(surf);
            simple = sphere.#vecadd(amb, diff);
            tmp7 = sphere.#bodysurf(surf);
            trintensity = sphere.#vecscale(tmp7, transmitted);
            scrut = transmitted < sphere.epsilon;
            if (scrut === true) {
              tmp8 = globalThis.Object.freeze([
                false,
                simple
              ]);
            } else {
              tmp9 = sphere.#refractsurf(surf);
              tmp8 = sphere.#shade_transmitray_reflectray(1, param0, simple, hitpos, param3, tmp9, trintensity, param5, norm);
            }
            if (runtime.Tuple.isArrayLike(tmp8) && tmp8.length === 2) {
              element0$ = runtime.Tuple.get(tmp8, 0);
              element1$ = runtime.Tuple.get(tmp8, 1);
              tmp10 = sphere.#specularsurf(surf);
              tmp11 = sphere.#reflectsurf(surf);
              reflsurf = sphere.#vecscale(tmp10, tmp11);
              if (element0$ === true) {
                tmp12 = sphere.#vecadd(trintensity, reflsurf);
              } else {
                tmp12 = reflsurf;
              }
              scrut1 = sphere.#is_zerovector(tmp12);
              if (scrut1 === true) {
                return element1$
              }
              {
                let param0_tmp;
                param0_tmp = param0;
                id = 2;
                param0 = hitpos;
                param1 = refl;
                param2 = param0_tmp;
                param3 = tmp12;
                param4 = param5;
                param5 = element1$;
                param6 = undefined;
                param7 = undefined;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 1:
          {
            let newcontrib, scrut, nearpos, scrut1, scrut2, element1$, tmp, element2$, element1$1, element0$, tmp1, tmp2, tmp3;
            newcontrib = sphere.#vecmult(param5, param6);
            scrut = sphere.#refractray(param4, param3, param7);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              runtime.Tuple.get(scrut, 0);
              element1$ = runtime.Tuple.get(scrut, 1);
              tmp = sphere.#vecscale(element1$, sphere.epsilon);
              nearpos = sphere.#vecadd(param2, tmp);
              scrut1 = sphere.#trace(sphere.testspheres, nearpos, element1$);
              if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
                element0$ = runtime.Tuple.get(scrut1, 0);
                element1$1 = runtime.Tuple.get(scrut1, 1);
                element2$ = runtime.Tuple.get(scrut1, 2);
                if (element0$ === true) {
                  tmp1 = sphere.#shade_transmitray_reflectray(0, param0, element2$, nearpos, element1$, element1$1, newcontrib, undefined, undefined);
                } else {
                  tmp1 = sphere.background;
                }
                scrut2 = sphere.#is_zerovector(newcontrib);
                if (scrut2 === true) {
                  return globalThis.Object.freeze([
                    false,
                    param1
                  ])
                }
                tmp2 = sphere.#vecmult(tmp1, param5);
                tmp3 = sphere.#vecadd(tmp2, param1);
                return globalThis.Object.freeze([
                  false,
                  tmp3
                ]);
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 2:
          {
            let newcontrib, nearpos, scrut, scrut1, tmp, element2$, element1$, element0$, tmp1, tmp2;
            newcontrib = sphere.#vecmult(param3, param4);
            tmp = sphere.#vecscale(param1, sphere.epsilon);
            nearpos = sphere.#vecadd(param0, tmp);
            scrut = sphere.#trace(sphere.testspheres, nearpos, param1);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
              element0$ = runtime.Tuple.get(scrut, 0);
              element1$ = runtime.Tuple.get(scrut, 1);
              element2$ = runtime.Tuple.get(scrut, 2);
              if (element0$ === true) {
                tmp1 = sphere.#shade_transmitray_reflectray(0, param2, element2$, nearpos, param1, element1$, newcontrib, undefined, undefined);
              } else {
                tmp1 = sphere.background;
              }
              scrut1 = sphere.#is_zerovector(newcontrib);
              if (scrut1 === true) {
                return param5
              }
              tmp2 = sphere.#vecmult(tmp1, param3);
              return sphere.#vecadd(param5, tmp2);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
      }
    }
  }
  static #vecadd(a1, a2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a1) && a1.length === 3) {
      element0$ = runtime.Tuple.get(a1, 0);
      element1$ = runtime.Tuple.get(a1, 1);
      element2$ = runtime.Tuple.get(a1, 2);
      if (runtime.Tuple.isArrayLike(a2) && a2.length === 3) {
        element0$1 = runtime.Tuple.get(a2, 0);
        element1$1 = runtime.Tuple.get(a2, 1);
        element2$1 = runtime.Tuple.get(a2, 2);
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
  static #vecsub(a1, a2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a1) && a1.length === 3) {
      element0$ = runtime.Tuple.get(a1, 0);
      element1$ = runtime.Tuple.get(a1, 1);
      element2$ = runtime.Tuple.get(a1, 2);
      if (runtime.Tuple.isArrayLike(a2) && a2.length === 3) {
        element0$1 = runtime.Tuple.get(a2, 0);
        element1$1 = runtime.Tuple.get(a2, 1);
        element2$1 = runtime.Tuple.get(a2, 2);
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
  static #vecmult(a1, a2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a1) && a1.length === 3) {
      element0$ = runtime.Tuple.get(a1, 0);
      element1$ = runtime.Tuple.get(a1, 1);
      element2$ = runtime.Tuple.get(a1, 2);
      if (runtime.Tuple.isArrayLike(a2) && a2.length === 3) {
        element0$1 = runtime.Tuple.get(a2, 0);
        element1$1 = runtime.Tuple.get(a2, 1);
        element2$1 = runtime.Tuple.get(a2, 2);
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
  static #vecsum(param) {
    let tmp;
    tmp = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    return NofibPrelude.foldr(sphere.#vecadd, tmp, param)
  }
  static #vecnorm(xyz) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (runtime.Tuple.isArrayLike(xyz) && xyz.length === 3) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(xyz, 0);
      element1$ = runtime.Tuple.get(xyz, 1);
      element2$ = runtime.Tuple.get(xyz, 2);
      tmp = element0$ * element0$;
      tmp1 = element1$ * element1$;
      tmp2 = tmp + tmp1;
      tmp3 = element2$ * element2$;
      tmp4 = tmp2 + tmp3;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(tmp4));
      tmp5 = element0$ / inlinedVal;
      tmp6 = element1$ / inlinedVal;
      tmp7 = element2$ / inlinedVal;
      tmp8 = globalThis.Object.freeze([
        tmp5,
        tmp6,
        tmp7
      ]);
      return globalThis.Object.freeze([
        tmp8,
        inlinedVal
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vecscale(xyz, a) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(xyz) && xyz.length === 3) {
      element0$ = runtime.Tuple.get(xyz, 0);
      element1$ = runtime.Tuple.get(xyz, 1);
      element2$ = runtime.Tuple.get(xyz, 2);
      tmp = a * element0$;
      tmp1 = a * element1$;
      tmp2 = a * element2$;
      return globalThis.Object.freeze([
        tmp,
        tmp1,
        tmp2
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vecdot(x1, x2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(x1) && x1.length === 3) {
      element0$ = runtime.Tuple.get(x1, 0);
      element1$ = runtime.Tuple.get(x1, 1);
      element2$ = runtime.Tuple.get(x1, 2);
      if (runtime.Tuple.isArrayLike(x2) && x2.length === 3) {
        element0$1 = runtime.Tuple.get(x2, 0);
        element1$1 = runtime.Tuple.get(x2, 1);
        element2$1 = runtime.Tuple.get(x2, 2);
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
  static #veccross(x1, x2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (runtime.Tuple.isArrayLike(x1) && x1.length === 3) {
      element0$ = runtime.Tuple.get(x1, 0);
      element1$ = runtime.Tuple.get(x1, 1);
      element2$ = runtime.Tuple.get(x1, 2);
      if (runtime.Tuple.isArrayLike(x2) && x2.length === 3) {
        element0$1 = runtime.Tuple.get(x2, 0);
        element1$1 = runtime.Tuple.get(x2, 1);
        element2$1 = runtime.Tuple.get(x2, 2);
        tmp = element1$ * element2$1;
        tmp1 = element1$1 * element2$;
        tmp2 = tmp - tmp1;
        tmp3 = element2$ * element0$1;
        tmp4 = element2$1 * element0$;
        tmp5 = tmp3 - tmp4;
        tmp6 = element0$ * element1$1;
        tmp7 = element0$1 * element1$;
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
  static #is_zerovector(x) {
    let element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(x) && x.length === 3) {
      element0$ = runtime.Tuple.get(x, 0);
      element1$ = runtime.Tuple.get(x, 1);
      element2$ = runtime.Tuple.get(x, 2);
      tmp = element0$ < sphere.epsilon;
      if (tmp === true) {
        tmp1 = element1$ < sphere.epsilon;
        if (tmp1 === true) {
          return element2$ < sphere.epsilon
        }
        return false;
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lightpos(p) {
    if (p instanceof sphere.Point.class) {
      return p.x
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lightdir(d) {
    let arg$Directional$0$, tmp;
    if (d instanceof sphere.Directional.class) {
      let element0$;
      arg$Directional$0$ = d.x;
      tmp = sphere.#vecnorm(arg$Directional$0$);
      if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
        element0$ = runtime.Tuple.get(tmp, 0);
        runtime.Tuple.get(tmp, 1);
        return element0$
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lightcolour(x) {
    if (x instanceof sphere.Directional.class) {
      return x.y
    } else if (x instanceof sphere.Point.class) {
      return x.y
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #ambientsurf(ss) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = lscomp(sphere, ss);
    tmp1 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.append(tmp, tmp2);
    if (tmp3 instanceof NofibPrelude.Cons.class) {
      return tmp3.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #diffusesurf(ss) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = lscomp1(sphere, ss);
    tmp1 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.append(tmp, tmp2);
    if (tmp3 instanceof NofibPrelude.Cons.class) {
      return tmp3.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #specularsurf(ss) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = lscomp2(sphere, ss);
    tmp1 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.append(tmp, tmp2);
    if (tmp3 instanceof NofibPrelude.Cons.class) {
      return tmp3.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #specpowsurf(ss) {
    let tmp, tmp1, tmp2;
    tmp = lscomp3(sphere, ss);
    tmp1 = NofibPrelude.Cons(8.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.append(tmp, tmp1);
    if (tmp2 instanceof NofibPrelude.Cons.class) {
      return tmp2.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #reflectsurf(ss) {
    let tmp, tmp1, tmp2;
    tmp = lscomp4(sphere, ss);
    tmp1 = NofibPrelude.Cons(0.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.append(tmp, tmp1);
    if (tmp2 instanceof NofibPrelude.Cons.class) {
      return tmp2.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #transmitsurf(ss) {
    let tmp, tmp1, tmp2;
    tmp = lscomp5(sphere, ss);
    tmp1 = NofibPrelude.Cons(0.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.append(tmp, tmp1);
    if (tmp2 instanceof NofibPrelude.Cons.class) {
      return tmp2.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #refractsurf(ss) {
    let tmp, tmp1, tmp2;
    tmp = lscomp6(sphere, ss);
    tmp1 = NofibPrelude.Cons(1.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.append(tmp, tmp1);
    if (tmp2 instanceof NofibPrelude.Cons.class) {
      return tmp2.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #bodysurf(ss) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = lscomp7(sphere, ss);
    tmp1 = globalThis.Object.freeze([
      1.0,
      1.0,
      1.0
    ]);
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.append(tmp, tmp2);
    if (tmp3 instanceof NofibPrelude.Cons.class) {
      return tmp3.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #spheresurf(s) {
    if (s instanceof sphere.Sphere.class) {
      return s.surface
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #spherenormal(pos, sp) {
    let arg$Sphere$0$, arg$Sphere$1$, tmp, tmp1;
    if (sp instanceof sphere.Sphere.class) {
      arg$Sphere$0$ = sp.pos;
      arg$Sphere$1$ = sp.radius;
      tmp = sphere.#vecsub(pos, arg$Sphere$0$);
      tmp1 = 1 / arg$Sphere$1$;
      return sphere.#vecscale(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #dtor(x) {
    let tmp;
    tmp = x * sphere.pi;
    return tmp / 180.0
  }
  static #camparams(lookfrom, lookat, vup, fov, winsize) {
    let initfirstray, scrut, magx, magy, scrnx, scrny, firstray, scrut1, scrut2, element1$, element0$, element0$1, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    initfirstray = sphere.#vecsub(lookat, lookfrom);
    scrut = sphere.#vecnorm(initfirstray);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp = sphere.#veccross(element0$, vup);
      scrut2 = sphere.#vecnorm(tmp);
      if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
        element0$1 = runtime.Tuple.get(scrut2, 0);
        runtime.Tuple.get(scrut2, 1);
        tmp1 = sphere.#veccross(element0$1, element0$);
        scrut1 = sphere.#vecnorm(tmp1);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          let inlinedVal, inlinedVal1;
          element0$2 = runtime.Tuple.get(scrut1, 0);
          runtime.Tuple.get(scrut1, 1);
          tmp2 = 2.0 * element1$;
          tmp3 = fov / 2;
          tmp4 = sphere.#dtor(tmp3);
          inlinedVal = runtime.safeCall(globalThis.Math.tan(tmp4));
          tmp5 = tmp2 * inlinedVal;
          magx = tmp5 / winsize;
          tmp6 = 2.0 * element1$;
          tmp7 = fov / 2;
          tmp8 = sphere.#dtor(tmp7);
          inlinedVal1 = runtime.safeCall(globalThis.Math.tan(tmp8));
          tmp9 = tmp6 * inlinedVal1;
          magy = tmp9 / winsize;
          scrnx = sphere.#vecscale(element0$1, magx);
          scrny = sphere.#vecscale(element0$2, magy);
          tmp10 = 0.5 * winsize;
          tmp11 = sphere.#vecscale(scrnx, tmp10);
          tmp12 = 0.5 * winsize;
          tmp13 = sphere.#vecscale(scrny, tmp12);
          tmp14 = sphere.#vecadd(tmp11, tmp13);
          firstray = sphere.#vecsub(initfirstray, tmp14);
          return globalThis.Object.freeze([
            firstray,
            scrnx,
            scrny
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sphereintersect(pos, dir, sp) {
    let m, bm, m2, disc, slo, shi, scrut, scrut1, scrut2, arg$Sphere$0$, arg$Sphere$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (sp instanceof sphere.Sphere.class) {
      let inlinedVal, inlinedVal1;
      arg$Sphere$0$ = sp.pos;
      arg$Sphere$1$ = sp.radius;
      m = sphere.#vecsub(pos, arg$Sphere$0$);
      bm = sphere.#vecdot(m, dir);
      m2 = sphere.#vecdot(m, m);
      tmp = bm * bm;
      tmp1 = tmp - m2;
      tmp2 = arg$Sphere$1$ * arg$Sphere$1$;
      disc = tmp1 + tmp2;
      tmp3 = - bm;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
      slo = tmp3 - inlinedVal;
      tmp4 = - bm;
      inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(disc));
      shi = tmp4 + inlinedVal1;
      scrut = disc < 0.0;
      if (scrut === true) {
        return globalThis.Object.freeze([
          false,
          0.0
        ])
      }
      scrut1 = slo < 0.0;
      if (scrut1 === true) {
        scrut2 = shi < 0.0;
        if (scrut2 === true) {
          return globalThis.Object.freeze([
            false,
            0.0
          ])
        }
        return globalThis.Object.freeze([
          true,
          shi
        ]);
      }
      return globalThis.Object.freeze([
        true,
        slo
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #trace(spheres, pos, dir) {
    let dists, scrut, element1$, element0$;
    dists = sphmap(sphere, pos, dir, spheres);
    if (dists instanceof NofibPrelude.Nil.class) {
      let inlinedVal;
      if (spheres instanceof NofibPrelude.Cons.class) {
        inlinedVal = spheres.head;
        return globalThis.Object.freeze([
          false,
          sphere.infinity,
          inlinedVal
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    {
      let inlinedVal, inlinedVal1;
      if (dists instanceof NofibPrelude.Cons.class) {
        inlinedVal = dists.head;
        if (dists instanceof NofibPrelude.Cons.class) {
          inlinedVal1 = dists.tail;
          scrut = NofibPrelude.foldr(f, inlinedVal, inlinedVal1);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            element0$ = runtime.Tuple.get(scrut, 0);
            element1$ = runtime.Tuple.get(scrut, 1);
            return globalThis.Object.freeze([
              true,
              element0$,
              element1$
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #refractray(newindex, olddir, innorm) {
    let dotp, scrut, disc, t, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, element2$, element1$, element0$, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    tmp = sphere.#vecdot(olddir, innorm);
    dotp = - tmp;
    scrut = dotp < 0.0;
    if (scrut === true) {
      tmp1 = - 1.0;
      tmp2 = sphere.#vecscale(innorm, tmp1);
      tmp3 = - dotp;
      tmp4 = 1.0 / newindex;
      tmp5 = globalThis.Object.freeze([
        tmp2,
        tmp3,
        tmp4
      ]);
    } else {
      tmp5 = globalThis.Object.freeze([
        innorm,
        dotp,
        newindex
      ]);
    }
    if (runtime.Tuple.isArrayLike(tmp5) && tmp5.length === 3) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(tmp5, 0);
      element1$ = runtime.Tuple.get(tmp5, 1);
      element2$ = runtime.Tuple.get(tmp5, 2);
      tmp6 = element2$ * element2$;
      tmp7 = element1$ * element1$;
      tmp8 = 1.0 - tmp7;
      tmp9 = tmp6 * tmp8;
      disc = 1.0 - tmp9;
      tmp10 = element2$ * element1$;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
      t = tmp10 - inlinedVal;
      scrut1 = disc < 0.0;
      if (scrut1 === true) {
        tmp11 = globalThis.Object.freeze([
          0.0,
          0.0,
          0.0
        ]);
        return globalThis.Object.freeze([
          true,
          tmp11
        ])
      }
      tmp12 = sphere.#vecscale(element0$, t);
      tmp13 = sphere.#vecscale(olddir, element2$);
      tmp14 = sphere.#vecadd(tmp12, tmp13);
      return globalThis.Object.freeze([
        false,
        tmp14
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lightdirection(l, pt) {
    let arg$Point$0$, arg$Directional$0$, tmp, tmp1;
    if (l instanceof sphere.Directional.class) {
      let element0$;
      arg$Directional$0$ = l.x;
      tmp = sphere.#vecnorm(arg$Directional$0$);
      if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
        element0$ = runtime.Tuple.get(tmp, 0);
        runtime.Tuple.get(tmp, 1);
        return globalThis.Object.freeze([
          element0$,
          sphere.infinity
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (l instanceof sphere.Point.class) {
      arg$Point$0$ = l.x;
      tmp1 = sphere.#vecsub(arg$Point$0$, pt);
      return sphere.#vecnorm(tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #shadowed(pos, dir, lcolour) {
    let scrut, scrut1, element0$, tmp, tmp1;
    tmp = sphere.#vecscale(dir, sphere.epsilon);
    tmp1 = sphere.#vecadd(pos, tmp);
    scrut = sphere.#trace(sphere.testspheres, tmp1, dir);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
      element0$ = runtime.Tuple.get(scrut, 0);
      runtime.Tuple.get(scrut, 1);
      runtime.Tuple.get(scrut, 2);
      scrut1 = ! element0$;
      if (scrut1 === true) {
        return globalThis.Object.freeze([
          false,
          lcolour
        ])
      }
      return globalThis.Object.freeze([
        true,
        lcolour
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lightray(l, pos, norm, refl, surf) {
    let scrut, cosangle, scrut1, diff, spow, scrut2, bodycol, cosalpha, diffcont, scrut3, spec, cosalpha1, diffcont1, scrut4, element0$, element1$, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    scrut = sphere.#lightdirection(l, pos);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      runtime.Tuple.get(scrut, 1);
      cosangle = sphere.#vecdot(element0$, norm);
      tmp = sphere.#lightcolour(l);
      scrut1 = sphere.#shadowed(pos, element0$, tmp);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$1 = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        if (element0$1 === true) {
          return globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ])
        }
        diff = sphere.#diffusesurf(surf);
        spow = sphere.#specpowsurf(surf);
        scrut2 = cosangle <= 0.0;
        if (scrut2 === true) {
          bodycol = sphere.#bodysurf(surf);
          tmp1 = sphere.#vecdot(refl, element0$);
          cosalpha = - tmp1;
          tmp2 = - cosangle;
          tmp3 = sphere.#vecscale(diff, tmp2);
          diffcont = sphere.#vecmult(tmp3, element1$);
          scrut3 = cosalpha <= 0.0;
          if (scrut3 === true) {
            tmp4 = globalThis.Object.freeze([
              0.0,
              0.0,
              0.0
            ]);
            return sphere.#vecadd(diffcont, tmp4)
          }
          {
            let inlinedVal;
            inlinedVal = runtime.safeCall(globalThis.Math.pow(cosalpha, spow));
            tmp5 = sphere.#vecscale(bodycol, inlinedVal);
            tmp4 = sphere.#vecmult(tmp5, element1$);
            return sphere.#vecadd(diffcont, tmp4);
          }
        }
        spec = sphere.#specularsurf(surf);
        cosalpha1 = sphere.#vecdot(refl, element0$);
        tmp6 = sphere.#vecscale(diff, cosangle);
        diffcont1 = sphere.#vecmult(tmp6, element1$);
        scrut4 = cosalpha1 < 0.0;
        if (scrut4 === true) {
          tmp7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          return sphere.#vecadd(diffcont1, tmp7)
        }
        {
          let inlinedVal;
          inlinedVal = runtime.safeCall(globalThis.Math.pow(cosalpha1, spow));
          tmp8 = sphere.#vecscale(spec, inlinedVal);
          tmp7 = sphere.#vecmult(tmp8, element1$);
          return sphere.#vecadd(diffcont1, tmp7);
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #shade(lights, sp, lookpos, dir, dist, contrib) {
    return sphere.#shade_transmitray_reflectray(0, lights, sp, lookpos, dir, dist, contrib, undefined, undefined)
  }
  static #transmitray(lights, colour, pos, dir, index, intens, contrib, norm) {
    return sphere.#shade_transmitray_reflectray(1, lights, colour, pos, dir, index, intens, contrib, norm)
  }
  static #reflectray(pos, newdir, lights, intens, contrib, colour) {
    return sphere.#shade_transmitray_reflectray(2, pos, newdir, lights, intens, contrib, colour, undefined, undefined)
  }
  static #tracepixel(spheres, lights, x, y, firstray, scrnx, scrny) {
    let pos, scrut, scrut1, element0$, element2$, element1$, element0$1, tmp, tmp1, tmp2, tmp3, tmp4;
    pos = sphere.lookfrom;
    tmp = sphere.#vecscale(scrnx, x);
    tmp1 = sphere.#vecadd(firstray, tmp);
    tmp2 = sphere.#vecscale(scrny, y);
    tmp3 = sphere.#vecadd(tmp1, tmp2);
    scrut = sphere.#vecnorm(tmp3);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      runtime.Tuple.get(scrut, 1);
      scrut1 = sphere.#trace(spheres, pos, element0$);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
        element0$1 = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        element2$ = runtime.Tuple.get(scrut1, 2);
        if (element0$1 === true) {
          tmp4 = globalThis.Object.freeze([
            1.0,
            1.0,
            1.0
          ]);
          return sphere.#shade(lights, element2$, pos, element0$, element1$, tmp4)
        }
        return sphere.background;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #z_of_int(x) {
    return runtime.safeCall(globalThis.BigInt(x))
  }
  static #hash(param) {
    let tmp;
    tmp = sphere.#z_of_int(0);
    return NofibPrelude.foldr(lambda$1(sphere), tmp, param)
  }
  static #ray(winsize) {
    let lights, scrut, element2$, element1$, element0$, tmp, tmp1;
    lights = sphere.testlights;
    scrut = sphere.#camparams(sphere.lookfrom, sphere.lookat, sphere.vup, sphere.fov, winsize);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      element2$ = runtime.Tuple.get(scrut, 2);
      tmp = winsize - 1;
      tmp1 = NofibPrelude.enumFromTo(0, tmp);
      return lscomp1_lscomp2(0, sphere, winsize, lights, element1$, element0$, element2$, tmp1, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #run(winsize) {
    let tmp, tmp1;
    tmp = sphere.#ray(winsize);
    tmp1 = NofibPrelude.map(NofibPrelude.snd, tmp);
    return sphere.#hash(tmp1)
  }
  static #testSphere_nofib(n) {
    return sphere.#run(n)
  }
  static main() {
    return sphere.#testSphere_nofib(30)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "sphere"];
});
export { lscomp as _$_modulePrivate_$_lscomp };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { lscomp3 as _$_modulePrivate_$_lscomp3 };
export { lscomp4 as _$_modulePrivate_$_lscomp4 };
export { lscomp5 as _$_modulePrivate_$_lscomp5 };
export { lscomp6 as _$_modulePrivate_$_lscomp6 };
export { lscomp7 as _$_modulePrivate_$_lscomp7 };
export { f as _$_modulePrivate_$_f };
export { sphmap as _$_modulePrivate_$_sphmap };
export { u8 as _$_modulePrivate_$_u8 };
export { lscomp21 as _$_modulePrivate_$_lscomp21 };
export { f1 as _$_modulePrivate_$_f1 };
export { lscomp11 as _$_modulePrivate_$_lscomp11 };
export { sphere1 as _$_modulePrivate_$_sphere };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lscomp1_lscomp2 as _$_modulePrivate_$_lscomp1_lscomp2 };
export default sphere1;
