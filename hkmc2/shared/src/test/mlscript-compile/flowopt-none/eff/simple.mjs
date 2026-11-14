const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const rev$accessorSymbol = globalThis.Symbol("rev");
const for_$accessorSymbol = globalThis.Symbol("for_");
const from_$accessorSymbol = globalThis.Symbol("from_");
const update2$accessorSymbol = globalThis.Symbol("update2");
const sub1$accessorSymbol = globalThis.Symbol("sub1");
const northeast$accessorSymbol = globalThis.Symbol("northeast");
const southeast$accessorSymbol = globalThis.Symbol("southeast");
const southwest$accessorSymbol = globalThis.Symbol("southwest");
const farnorth$accessorSymbol = globalThis.Symbol("farnorth");
const farsouth$accessorSymbol = globalThis.Symbol("farsouth");
const fareast$accessorSymbol = globalThis.Symbol("fareast");
const farwest$accessorSymbol = globalThis.Symbol("farwest");
const kmin$accessorSymbol = globalThis.Symbol("kmin");
const kmax$accessorSymbol = globalThis.Symbol("kmax");
const lmin$accessorSymbol = globalThis.Symbol("lmin");
const lmax$accessorSymbol = globalThis.Symbol("lmax");
const reflect_north$accessorSymbol = globalThis.Symbol("reflect_north");
const reflect_south$accessorSymbol = globalThis.Symbol("reflect_south");
const reflect_east$accessorSymbol = globalThis.Symbol("reflect_east");
const reflect_west$accessorSymbol = globalThis.Symbol("reflect_west");
const specific_heat$accessorSymbol = globalThis.Symbol("specific_heat");
const nbc$accessorSymbol = globalThis.Symbol("nbc");
const pbb$accessorSymbol = globalThis.Symbol("pbb");
const pb$accessorSymbol = globalThis.Symbol("pb");
const qb$accessorSymbol = globalThis.Symbol("qb");
const zone_area_vol$accessorSymbol = globalThis.Symbol("zone_area_vol");
const zonal_pressure$accessorSymbol = globalThis.Symbol("zonal_pressure");
const zonal_energy$accessorSymbol = globalThis.Symbol("zonal_energy");
const newton_raphson$accessorSymbol = globalThis.Symbol("newton_raphson");
const map$tailrec$accessorSymbol = globalThis.Symbol("map$tailrec");
let reflect_node, line_integral, interior_position, r_area_vol_den, update_asr, lower_del, upper_del, do_zones, from_, table_search, energy_equation, heat_flow, work_done, from_1, kinetic, interior_position1, u2, simple1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda31, lambda32, lambda33, lambda34, lambda35, lambda36, lambda37, lambda38, lambda39, lambda40, lambda41, lambda42, lambda43, lambda44, lambda45, lambda46, lambda47, lambda48, lambda49, lambda50, lambda51, lambda52, lambda53, lambda54, lambda55, lambda56, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, lambda$29, lambda$30, lambda$31, lambda$32, interior_position$, lambda$33, lambda$34, lambda$35, lambda$36, lambda$37, lambda$38, lambda$39, lambda$40, lambda$41, lambda$42, lambda$43, lambda$44, lambda$45, lambda$46, lambda$47, lambda$48, lambda$49, lambda$50, lambda$51, lambda$52, lambda$53, f$, lambda$54, lambda$55, lambda$56, lambda$57, lambda$58, lambda$59, lambda$60, lambda$61, lambda$62, lambda$63, lambda$64, lambda$65, lambda$66, lambda$67, lambda$68, lambda$69, lambda$70, lambda$71, lambda$72, lambda$73, work_done$, kinetic$, lambda$74, lambda$75, lambda$76, lambda$77, lambda$78, lambda$79, lambda$80, lambda$81, lambda$82, interior_position$1, heat_flow$worker;
interior_position$1 = function interior_position$(simple2) {
  return (kl) => {
    return interior_position1(simple2, kl)
  }
};
lambda$82 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, x, a2, s2) {
  return (z) => {
    return lambda51(simple2, sub2, update2, pow, north, south, east, west, x, a2, s2, z)
  }
});
lambda$81 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, a2, s2) {
  return (z) => {
    let tmp;
    tmp = simple2[reflect_north$accessorSymbol](sub2, update2, pow, north, south, east, west);
    return u2(update2, a2, s2, tmp, z)
  }
});
lambda$80 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, a2, s2) {
  return (z) => {
    let tmp;
    tmp = simple2[reflect_west$accessorSymbol](sub2, update2, pow, north, south, east, west);
    return u2(update2, a2, s2, tmp, z)
  }
});
lambda$79 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, a2, s2) {
  return (z) => {
    let tmp;
    tmp = simple2[reflect_east$accessorSymbol](sub2, update2, pow, north, south, east, west);
    return u2(update2, a2, s2, tmp, z)
  }
});
lambda$78 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, a2, s2) {
  return (z) => {
    let tmp;
    tmp = simple2[reflect_south$accessorSymbol](sub2, update2, pow, north, south, east, west);
    return u2(update2, a2, s2, tmp, z)
  }
});
lambda$77 = (undefined, function (update2, rr) {
  return (z) => {
    return runtime.safeCall(update2(rr, z, 1.4))
  }
});
lambda$76 = (undefined, function (update2, tt) {
  return (z) => {
    return runtime.safeCall(update2(tt, z, 0.0001))
  }
});
interior_position1 = function interior_position(simple2, kl) {
  let zz, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
    let inlinedVal, inlinedVal1;
    element0$ = runtime.Tuple.get(kl, 0);
    element1$ = runtime.Tuple.get(kl, 1);
    tmp = simple2[lmax$accessorSymbol] - simple2[lmin$accessorSymbol];
    tmp1 = 10 + element0$;
    tmp2 = tmp1 - simple2[kmin$accessorSymbol];
    tmp3 = - 0.5;
    tmp4 = element1$ - simple2[lmin$accessorSymbol];
    tmp5 = tmp4 / tmp;
    tmp6 = tmp3 + tmp5;
    zz = tmp6 * 3.1415926535898;
    inlinedVal = runtime.safeCall(globalThis.Math.cos(zz));
    tmp7 = tmp2 * inlinedVal;
    inlinedVal1 = runtime.safeCall(globalThis.Math.sin(zz));
    tmp8 = tmp2 * inlinedVal1;
    return globalThis.Object.freeze([
      tmp7,
      tmp8
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
u2 = function u2(update2, a2, s2, f, z) {
  let element1$, element0$, tmp, inlinedVal, tmp1, tmp2;
  tmp = runtime.safeCall(f(z));
  tmp1 = runtime.safeCall(tmp(a2));
  tmp2 = runtime.safeCall(tmp(s2));
  inlinedVal = globalThis.Object.freeze([
    tmp1,
    tmp2
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(a2, z, element0$));
    return runtime.safeCall(update2(s2, z, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda51 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, x, a2, s2, z) {
  let scrut, element1$, element0$;
  scrut = simple2[zone_area_vol$accessorSymbol](sub2, update2, pow, north, south, east, west)(x, z);
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    runtime.safeCall(update2(a2, z, element0$));
    return runtime.safeCall(update2(s2, z, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$75 = (undefined, function (sub2, d) {
  return (zone) => {
    return runtime.safeCall(sub2(d, zone))
  }
});
lambda$74 = (undefined, function (simple2, sub2, theta_hat, theta_p) {
  return (z) => {
    return lambda50(simple2, sub2, theta_hat, theta_p, z)
  }
});
lambda50 = (undefined, function (simple2, sub2, theta_hat, theta_p, z) {
  let tmp, tmp1, tmp2, tmp3, inlinedVal;
  tmp = runtime.safeCall(sub2(theta_hat, z));
  tmp1 = runtime.safeCall(sub2(theta_p, z));
  tmp2 = tmp - tmp1;
  inlinedVal = runtime.safeCall(globalThis.Math.abs(tmp2));
  tmp3 = runtime.safeCall(sub2(theta_hat, z));
  return inlinedVal / tmp3
});
kinetic$ = function kinetic$(simple2, sub2, pow, rho_p, alpha_p, u_p, w_p) {
  return (node) => {
    return kinetic(simple2, sub2, pow, rho_p, alpha_p, u_p, w_p, node)
  }
};
work_done$ = function work_done$(sub2, p_p, q_p, deltat, z_p, r_p) {
  return (nodes) => {
    return work_done(sub2, p_p, q_p, deltat, z_p, r_p, nodes)
  }
};
lambda$73 = (undefined, function (sub2, epsilon_p, rho_p, alpha_p) {
  return (z) => {
    return lambda41(sub2, epsilon_p, rho_p, alpha_p, z)
  }
});
lambda$72 = (undefined, function (simple2, west) {
  return (l) => {
    return lambda42(simple2, west, l)
  }
});
lambda$71 = (undefined, function (simple2, west) {
  return (l) => {
    return lambda43(simple2, west, l)
  }
});
lambda$70 = (undefined, function (simple2, south) {
  return (k) => {
    return lambda44(simple2, south, k)
  }
});
lambda$69 = (undefined, function (simple2, south) {
  return (k) => {
    return lambda45(simple2, south, k)
  }
});
lambda$68 = (undefined, function (north, k_north) {
  return (l) => {
    return lambda46(north, k_north, l)
  }
});
lambda$67 = (undefined, function (south, k_south) {
  return (l) => {
    return lambda47(south, k_south, l)
  }
});
lambda$66 = (undefined, function (east, l_east) {
  return (k) => {
    return lambda48(east, l_east, k)
  }
});
lambda$65 = (undefined, function (west, l_west) {
  return (k) => {
    return lambda49(west, l_west, k)
  }
});
kinetic = function kinetic(simple2, sub2, pow, rho_p, alpha_p, u_p, w_p, node) {
  let average_mass, v_square, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, element1$, element0$;
  if (runtime.Tuple.isArrayLike(node) && node.length === 2) {
    let inlinedVal5, inlinedVal6, inlinedVal7, element1$1, element0$1, tmp16, element1$2, element0$2, tmp17, tmp18, element1$3, element0$3, tmp19;
    element0$ = runtime.Tuple.get(node, 0);
    element1$ = runtime.Tuple.get(node, 1);
    inlinedVal = globalThis.Object.freeze([
      element0$,
      element1$
    ]);
    tmp14 = runtime.safeCall(sub2(rho_p, inlinedVal));
    tmp15 = runtime.safeCall(sub2(alpha_p, inlinedVal));
    inlinedVal1 = tmp14 * tmp15;
    if (runtime.Tuple.isArrayLike(node) && node.length === 2) {
      element0$3 = runtime.Tuple.get(node, 0);
      element1$3 = runtime.Tuple.get(node, 1);
      tmp19 = element0$3 + 1;
      inlinedVal5 = globalThis.Object.freeze([
        tmp19,
        element1$3
      ]);
      tmp12 = runtime.safeCall(sub2(rho_p, inlinedVal5));
      tmp13 = runtime.safeCall(sub2(alpha_p, inlinedVal5));
      inlinedVal2 = tmp12 * tmp13;
      tmp = inlinedVal1 + inlinedVal2;
      if (runtime.Tuple.isArrayLike(node) && node.length === 2) {
        element0$2 = runtime.Tuple.get(node, 0);
        element1$2 = runtime.Tuple.get(node, 1);
        tmp17 = element0$2 + 1;
        tmp18 = element1$2 + 1;
        inlinedVal6 = globalThis.Object.freeze([
          tmp17,
          tmp18
        ]);
        tmp10 = runtime.safeCall(sub2(rho_p, inlinedVal6));
        tmp11 = runtime.safeCall(sub2(alpha_p, inlinedVal6));
        inlinedVal3 = tmp10 * tmp11;
        tmp1 = tmp + inlinedVal3;
        if (runtime.Tuple.isArrayLike(node) && node.length === 2) {
          element0$1 = runtime.Tuple.get(node, 0);
          element1$1 = runtime.Tuple.get(node, 1);
          tmp16 = element1$1 + 1;
          inlinedVal7 = globalThis.Object.freeze([
            element0$1,
            tmp16
          ]);
          tmp8 = runtime.safeCall(sub2(rho_p, inlinedVal7));
          tmp9 = runtime.safeCall(sub2(alpha_p, inlinedVal7));
          inlinedVal4 = tmp8 * tmp9;
          tmp2 = tmp1 + inlinedVal4;
          average_mass = 0.25 * tmp2;
          tmp3 = runtime.safeCall(sub2(u_p, node));
          tmp4 = runtime.safeCall(pow(tmp3, 2));
          tmp5 = runtime.safeCall(sub2(w_p, node));
          tmp6 = runtime.safeCall(pow(tmp5, 2));
          v_square = tmp4 + tmp6;
          tmp7 = 0.5 * average_mass;
          return tmp7 * v_square
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
work_done = function work_done(sub2, p_p, q_p, deltat, z_p, r_p, nodes) {
  let r1, r2, z1, z2, u1, u21, w1, w2, p1, p2, q1, q2, force, radius, area, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
  if (runtime.Tuple.isArrayLike(nodes) && nodes.length === 2) {
    element0$ = runtime.Tuple.get(nodes, 0);
    element1$ = runtime.Tuple.get(nodes, 1);
    r1 = runtime.safeCall(sub2(r_p, element0$));
    r2 = runtime.safeCall(sub2(r_p, element1$));
    z1 = runtime.safeCall(sub2(z_p, element0$));
    z2 = runtime.safeCall(sub2(z_p, element1$));
    u1 = runtime.safeCall(sub2(p_p, element0$));
    u21 = runtime.safeCall(sub2(p_p, element1$));
    w1 = runtime.safeCall(sub2(z_p, element0$));
    w2 = runtime.safeCall(sub2(z_p, element1$));
    p1 = runtime.safeCall(sub2(p_p, element0$));
    p2 = runtime.safeCall(sub2(p_p, element1$));
    q1 = runtime.safeCall(sub2(q_p, element0$));
    q2 = runtime.safeCall(sub2(q_p, element1$));
    tmp = p1 + p2;
    tmp1 = tmp + q1;
    tmp2 = tmp1 + q2;
    force = 0.5 * tmp2;
    tmp3 = r1 + r2;
    radius = 0.5 * tmp3;
    tmp4 = r1 - r2;
    tmp5 = u1 - u21;
    tmp6 = tmp4 * tmp5;
    tmp7 = z1 - z2;
    tmp8 = w1 - w2;
    tmp9 = tmp7 * tmp8;
    tmp10 = tmp6 - tmp9;
    area = 0.5 * tmp10;
    tmp11 = force * radius;
    tmp12 = tmp11 * area;
    return tmp12 * deltat
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
from_1 = function from_(simple2, n, m) {
  let scrut, tmp, tmp1;
  scrut = n > m;
  if (scrut === true) {
    return simple2.Nil
  }
  tmp = n + 1;
  tmp1 = from_1(simple2, tmp, m);
  return simple2.Cons(n, tmp1);
};
heat_flow = function heat_flow(sub2, theta_p, deltat, gamma_) {
  return (zones) => {
    return heat_flow$worker(sub2, theta_p, deltat, gamma_, zones)
  }
};
heat_flow$worker = function heat_flow$worker(sub2, theta_p, deltat, gamma_, zones) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (runtime.Tuple.isArrayLike(zones) && zones.length === 2) {
    element0$ = runtime.Tuple.get(zones, 0);
    element1$ = runtime.Tuple.get(zones, 1);
    tmp = runtime.safeCall(sub2(gamma_, element0$));
    tmp1 = deltat * tmp;
    tmp2 = runtime.safeCall(sub2(theta_p, element0$));
    tmp3 = runtime.safeCall(sub2(theta_p, element1$));
    tmp4 = tmp2 - tmp3;
    return tmp1 * tmp4
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda41 = (undefined, function (sub2, epsilon_p, rho_p, alpha_p, z) {
  let tmp, inlinedVal, tmp1, tmp2;
  tmp = runtime.safeCall(sub2(epsilon_p, z));
  tmp1 = runtime.safeCall(sub2(rho_p, z));
  tmp2 = runtime.safeCall(sub2(alpha_p, z));
  inlinedVal = tmp1 * tmp2;
  return tmp * inlinedVal
});
lambda42 = (undefined, function (simple2, west, l) {
  let tmp, tmp1, tmp2;
  tmp = globalThis.Object.freeze([
    simple2[kmin$accessorSymbol],
    l
  ]);
  tmp1 = runtime.safeCall(west(tmp));
  tmp2 = globalThis.Object.freeze([
    simple2[kmin$accessorSymbol],
    l
  ]);
  return globalThis.Object.freeze([
    tmp1,
    tmp2
  ])
});
lambda43 = (undefined, function (simple2, west, l) {
  let tmp, tmp1, tmp2;
  tmp = globalThis.Object.freeze([
    simple2[kmax$accessorSymbol],
    l
  ]);
  tmp1 = runtime.safeCall(west(tmp));
  tmp2 = globalThis.Object.freeze([
    simple2[kmax$accessorSymbol],
    l
  ]);
  return globalThis.Object.freeze([
    tmp1,
    tmp2
  ])
});
lambda44 = (undefined, function (simple2, south, k) {
  let tmp, tmp1, tmp2;
  tmp = globalThis.Object.freeze([
    k,
    simple2[lmax$accessorSymbol]
  ]);
  tmp1 = runtime.safeCall(south(tmp));
  tmp2 = globalThis.Object.freeze([
    k,
    simple2[lmax$accessorSymbol]
  ]);
  return globalThis.Object.freeze([
    tmp1,
    tmp2
  ])
});
lambda45 = (undefined, function (simple2, south, k) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = simple2[lmin$accessorSymbol] + 1;
  tmp1 = globalThis.Object.freeze([
    k,
    tmp
  ]);
  tmp2 = runtime.safeCall(south(tmp1));
  tmp3 = simple2[lmin$accessorSymbol] + 1;
  tmp4 = globalThis.Object.freeze([
    k,
    tmp3
  ]);
  return globalThis.Object.freeze([
    tmp2,
    tmp4
  ])
});
lambda46 = (undefined, function (north, k_north, l) {
  let tmp, tmp1, tmp2;
  tmp = globalThis.Object.freeze([
    k_north,
    l
  ]);
  tmp1 = runtime.safeCall(north(tmp));
  tmp2 = globalThis.Object.freeze([
    k_north,
    l
  ]);
  return globalThis.Object.freeze([
    tmp1,
    tmp2
  ])
});
lambda47 = (undefined, function (south, k_south, l) {
  let tmp, tmp1, tmp2;
  tmp = globalThis.Object.freeze([
    k_south,
    l
  ]);
  tmp1 = runtime.safeCall(south(tmp));
  tmp2 = globalThis.Object.freeze([
    k_south,
    l
  ]);
  return globalThis.Object.freeze([
    tmp1,
    tmp2
  ])
});
lambda48 = (undefined, function (east, l_east, k) {
  let tmp, tmp1, tmp2;
  tmp = globalThis.Object.freeze([
    k,
    l_east
  ]);
  tmp1 = runtime.safeCall(east(tmp));
  tmp2 = globalThis.Object.freeze([
    k,
    l_east
  ]);
  return globalThis.Object.freeze([
    tmp1,
    tmp2
  ])
});
lambda49 = (undefined, function (west, l_west, k) {
  let tmp, tmp1, tmp2;
  tmp = globalThis.Object.freeze([
    k,
    l_west
  ]);
  tmp1 = runtime.safeCall(west(tmp));
  tmp2 = globalThis.Object.freeze([
    k,
    l_west
  ]);
  return globalThis.Object.freeze([
    tmp1,
    tmp2
  ])
});
lambda$64 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, rho_p, theta_p, epsilon_p) {
  return (zone) => {
    return lambda36(simple2, sub2, update2, pow, north, south, east, west, rho_p, theta_p, epsilon_p, zone)
  }
});
lambda$63 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, epsilon_p) {
  return (zone) => {
    return lambda37(simple2, sub2, update2, pow, north, south, east, west, epsilon_p, zone)
  }
});
lambda$62 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, epsilon_p) {
  return (zone) => {
    return lambda38(simple2, sub2, update2, pow, north, south, east, west, epsilon_p, zone)
  }
});
lambda$61 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, epsilon_p) {
  return (zone) => {
    return lambda39(simple2, sub2, update2, pow, north, south, east, west, epsilon_p, zone)
  }
});
lambda$60 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, epsilon_p) {
  return (zone) => {
    return lambda40(simple2, sub2, update2, pow, north, south, east, west, epsilon_p, zone)
  }
});
lambda36 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, rho_p, theta_p, epsilon_p, zone) {
  let tmp, tmp1, tmp2;
  tmp = runtime.safeCall(sub2(rho_p, zone));
  tmp1 = runtime.safeCall(sub2(theta_p, zone));
  tmp2 = simple2[zonal_energy$accessorSymbol](sub2, update2, pow, north, south, east, west)(tmp, tmp1);
  return runtime.safeCall(update2(epsilon_p, zone, tmp2))
});
lambda37 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(north(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
});
lambda38 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(east(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
});
lambda39 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(west(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
});
lambda40 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(south(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
});
lambda$59 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, rho_p, theta_p, p) {
  return (zone) => {
    return lambda31(simple2, sub2, update2, pow, north, south, east, west, rho_p, theta_p, p, zone)
  }
});
lambda$58 = (undefined, function (simple2, sub2, update2, north, p) {
  return (zone) => {
    return lambda32(simple2, sub2, update2, north, p, zone)
  }
});
lambda$57 = (undefined, function (simple2, sub2, update2, west, p) {
  return (zone) => {
    return lambda33(simple2, sub2, update2, west, p, zone)
  }
});
lambda$56 = (undefined, function (simple2, sub2, update2, east, p) {
  return (zone) => {
    return lambda34(simple2, sub2, update2, east, p, zone)
  }
});
lambda$55 = (undefined, function (simple2, sub2, update2, south, p) {
  return (zone) => {
    return lambda35(simple2, sub2, update2, south, p, zone)
  }
});
lambda31 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, rho_p, theta_p, p, zone) {
  let tmp, tmp1, tmp2;
  tmp = runtime.safeCall(sub2(rho_p, zone));
  tmp1 = runtime.safeCall(sub2(theta_p, zone));
  tmp2 = simple2[zonal_pressure$accessorSymbol](sub2, update2, pow, north, south, east, west)(tmp, tmp1);
  return runtime.safeCall(update2(p, zone, tmp2))
});
lambda32 = (undefined, function (simple2, sub2, update2, north, p, zone) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = runtime.safeCall(sub2(simple2[nbc$accessorSymbol], zone));
  tmp1 = simple2[sub1$accessorSymbol](simple2[pbb$accessorSymbol], tmp);
  tmp2 = runtime.safeCall(sub2(simple2[nbc$accessorSymbol], zone));
  tmp3 = simple2[sub1$accessorSymbol](simple2[pb$accessorSymbol], tmp2);
  tmp4 = runtime.safeCall(north(zone));
  tmp5 = runtime.safeCall(sub2(p, tmp4));
  tmp6 = tmp3 * tmp5;
  inlinedVal = tmp1 + tmp6;
  return runtime.safeCall(update2(p, zone, inlinedVal))
});
lambda33 = (undefined, function (simple2, sub2, update2, west, p, zone) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = runtime.safeCall(sub2(simple2[nbc$accessorSymbol], zone));
  tmp1 = simple2[sub1$accessorSymbol](simple2[pbb$accessorSymbol], tmp);
  tmp2 = runtime.safeCall(sub2(simple2[nbc$accessorSymbol], zone));
  tmp3 = simple2[sub1$accessorSymbol](simple2[pb$accessorSymbol], tmp2);
  tmp4 = runtime.safeCall(west(zone));
  tmp5 = runtime.safeCall(sub2(p, tmp4));
  tmp6 = tmp3 * tmp5;
  inlinedVal = tmp1 + tmp6;
  return runtime.safeCall(update2(p, zone, inlinedVal))
});
lambda34 = (undefined, function (simple2, sub2, update2, east, p, zone) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = runtime.safeCall(sub2(simple2[nbc$accessorSymbol], zone));
  tmp1 = simple2[sub1$accessorSymbol](simple2[pbb$accessorSymbol], tmp);
  tmp2 = runtime.safeCall(sub2(simple2[nbc$accessorSymbol], zone));
  tmp3 = simple2[sub1$accessorSymbol](simple2[pb$accessorSymbol], tmp2);
  tmp4 = runtime.safeCall(east(zone));
  tmp5 = runtime.safeCall(sub2(p, tmp4));
  tmp6 = tmp3 * tmp5;
  inlinedVal = tmp1 + tmp6;
  return runtime.safeCall(update2(p, zone, inlinedVal))
});
lambda35 = (undefined, function (simple2, sub2, update2, south, p, zone) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = runtime.safeCall(sub2(simple2[nbc$accessorSymbol], zone));
  tmp1 = simple2[sub1$accessorSymbol](simple2[pbb$accessorSymbol], tmp);
  tmp2 = runtime.safeCall(sub2(simple2[nbc$accessorSymbol], zone));
  tmp3 = simple2[sub1$accessorSymbol](simple2[pb$accessorSymbol], tmp2);
  tmp4 = runtime.safeCall(south(zone));
  tmp5 = runtime.safeCall(sub2(p, tmp4));
  tmp6 = tmp3 * tmp5;
  inlinedVal = tmp1 + tmp6;
  return runtime.safeCall(update2(p, zone, inlinedVal))
});
lambda$54 = (undefined, function (sub2, update2, a, b, succeeding, theta) {
  return (kl) => {
    return lambda30(sub2, update2, a, b, succeeding, theta, kl)
  }
});
lambda30 = (undefined, function (sub2, update2, a, b, succeeding, theta, kl) {
  let element1$, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
    let inlinedVal, tmp2, tmp3, tmp4, tmp5, tmp6;
    element0$ = runtime.Tuple.get(kl, 0);
    element1$ = runtime.Tuple.get(kl, 1);
    tmp = globalThis.Object.freeze([
      element0$,
      element1$
    ]);
    tmp1 = globalThis.Object.freeze([
      element0$,
      element1$
    ]);
    tmp2 = runtime.safeCall(sub2(a, tmp1));
    tmp3 = runtime.safeCall(succeeding(tmp1));
    tmp4 = runtime.safeCall(sub2(theta, tmp3));
    tmp5 = tmp2 * tmp4;
    tmp6 = runtime.safeCall(sub2(b, tmp1));
    inlinedVal = tmp5 + tmp6;
    return runtime.safeCall(update2(theta, tmp, inlinedVal))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
f$ = function f$(sub2, update2, theta, b) {
  return (zone) => {
    let tmp;
    tmp = runtime.safeCall(sub2(theta, zone));
    return runtime.safeCall(update2(b, zone, tmp))
  }
};
lambda$53 = (undefined, function (sub2, update2, theta, sigma, gamma_, preceding, a, b) {
  return (zone) => {
    return lambda29(sub2, update2, theta, sigma, gamma_, preceding, a, b, zone)
  }
});
lambda29 = (undefined, function (sub2, update2, theta, sigma, gamma_, preceding, a, b, zone) {
  let element1$, element0$, inlinedVal, denom, nume1, nume2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18;
  tmp = runtime.safeCall(sub2(sigma, zone));
  tmp1 = runtime.safeCall(sub2(gamma_, zone));
  tmp2 = tmp + tmp1;
  tmp3 = runtime.safeCall(preceding(zone));
  tmp4 = runtime.safeCall(sub2(gamma_, tmp3));
  tmp5 = runtime.safeCall(preceding(zone));
  tmp6 = runtime.safeCall(sub2(a, tmp5));
  tmp7 = 1.0 - tmp6;
  tmp8 = tmp4 * tmp7;
  denom = tmp2 + tmp8;
  nume1 = runtime.safeCall(sub2(gamma_, zone));
  tmp9 = runtime.safeCall(preceding(zone));
  tmp10 = runtime.safeCall(sub2(gamma_, tmp9));
  tmp11 = runtime.safeCall(preceding(zone));
  tmp12 = runtime.safeCall(sub2(b, tmp11));
  tmp13 = tmp10 * tmp12;
  tmp14 = runtime.safeCall(sub2(sigma, zone));
  tmp15 = runtime.safeCall(sub2(theta, zone));
  tmp16 = tmp14 * tmp15;
  nume2 = tmp13 + tmp16;
  tmp17 = nume1 / denom;
  tmp18 = nume2 / denom;
  inlinedVal = globalThis.Object.freeze([
    tmp17,
    tmp18
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(a, zone, element0$));
    return runtime.safeCall(update2(b, zone, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$52 = (undefined, function (simple2, sub2, update2, pow, cc, succeeding, adjacent, r_prime, z_prime, m) {
  return (zone) => {
    return lambda28(simple2, sub2, update2, pow, cc, succeeding, adjacent, r_prime, z_prime, m, zone)
  }
});
lambda28 = (undefined, function (simple2, sub2, update2, pow, cc, succeeding, adjacent, r_prime, z_prime, m, zone) {
  let inlinedVal, r1, z1, r2, z2, cross_section, c1, c2, specific_conductivity, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
  r1 = runtime.safeCall(sub2(r_prime, zone));
  z1 = runtime.safeCall(sub2(z_prime, zone));
  tmp = runtime.safeCall(adjacent(zone));
  r2 = runtime.safeCall(sub2(r_prime, tmp));
  tmp1 = runtime.safeCall(adjacent(zone));
  z2 = runtime.safeCall(sub2(z_prime, tmp1));
  tmp2 = r1 + r2;
  tmp3 = 0.5 * tmp2;
  tmp4 = r1 - r2;
  tmp5 = runtime.safeCall(pow(tmp4, 2));
  tmp6 = z1 - z2;
  tmp7 = runtime.safeCall(pow(tmp6, 2));
  tmp8 = tmp5 + tmp7;
  cross_section = tmp3 * tmp8;
  c1 = runtime.safeCall(sub2(cc, zone));
  tmp9 = runtime.safeCall(succeeding(zone));
  c2 = runtime.safeCall(sub2(cc, tmp9));
  tmp10 = 2.0 * c1;
  tmp11 = tmp10 * c2;
  tmp12 = c1 + c2;
  specific_conductivity = tmp11 / tmp12;
  inlinedVal = cross_section * specific_conductivity;
  return runtime.safeCall(update2(m, zone, inlinedVal))
});
lambda$51 = (undefined, function (simple2, sub2, update2, deltat, rho_prime, alpha_prime, m) {
  return (zone) => {
    return lambda27(simple2, sub2, update2, deltat, rho_prime, alpha_prime, m, zone)
  }
});
lambda27 = (undefined, function (simple2, sub2, update2, deltat, rho_prime, alpha_prime, m, zone) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3;
  tmp = runtime.safeCall(sub2(rho_prime, zone));
  tmp1 = runtime.safeCall(sub2(alpha_prime, zone));
  tmp2 = tmp * tmp1;
  tmp3 = tmp2 * simple2[specific_heat$accessorSymbol];
  inlinedVal = tmp3 / deltat;
  return runtime.safeCall(update2(m, zone, inlinedVal))
});
lambda$50 = (undefined, function (simple2, sub2, update2, pow, alpha_prime, theta_hat, cc) {
  return (zone) => {
    return lambda22(simple2, sub2, update2, pow, alpha_prime, theta_hat, cc, zone)
  }
});
lambda$49 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, cc) {
  return (zone) => {
    return lambda23(simple2, sub2, update2, pow, north, south, east, west, cc, zone)
  }
});
lambda$48 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, cc) {
  return (zone) => {
    return lambda24(simple2, sub2, update2, pow, north, south, east, west, cc, zone)
  }
});
lambda$47 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, cc) {
  return (zone) => {
    return lambda25(simple2, sub2, update2, pow, north, south, east, west, cc, zone)
  }
});
lambda$46 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, cc) {
  return (zone) => {
    return lambda26(simple2, sub2, update2, pow, north, south, east, west, cc, zone)
  }
});
lambda22 = (undefined, function (simple2, sub2, update2, pow, alpha_prime, theta_hat, cc, zone) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, inlinedVal1, inlinedVal2;
  tmp = runtime.safeCall(sub2(theta_hat, zone));
  tmp1 = runtime.safeCall(pow(tmp, 2));
  tmp2 = 0.0001 * tmp1;
  tmp3 = runtime.safeCall(sub2(theta_hat, zone));
  inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp3));
  inlinedVal2 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal1));
  tmp4 = tmp2 * inlinedVal2;
  tmp5 = runtime.safeCall(sub2(alpha_prime, zone));
  inlinedVal = tmp4 / tmp5;
  return runtime.safeCall(update2(cc, zone, inlinedVal))
});
lambda23 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, cc, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(north(zone));
  inlinedVal = runtime.safeCall(sub2(cc, tmp));
  return runtime.safeCall(update2(cc, zone, inlinedVal))
});
lambda24 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, cc, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(east(zone));
  inlinedVal = runtime.safeCall(sub2(cc, tmp));
  return runtime.safeCall(update2(cc, zone, inlinedVal))
});
lambda25 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, cc, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(west(zone));
  inlinedVal = runtime.safeCall(sub2(cc, tmp));
  return runtime.safeCall(update2(cc, zone, inlinedVal))
});
lambda26 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, cc, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(south(zone));
  inlinedVal = runtime.safeCall(sub2(cc, tmp));
  return runtime.safeCall(update2(cc, zone, inlinedVal))
});
energy_equation = function energy_equation(simple2, sub2, update2, pow, north, south, east, west, rho_kl, epsilon_kl) {
  return (theta_kl) => {
    let tmp;
    tmp = simple2[zonal_energy$accessorSymbol](sub2, update2, pow, north, south, east, west)(rho_kl, theta_kl);
    return epsilon_kl - tmp
  }
};
lambda$45 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, p, epsilon, rho, theta, rho_prime, q_prime, m) {
  return (zone) => {
    return lambda21(simple2, sub2, update2, pow, north, south, east, west, p, epsilon, rho, theta, rho_prime, q_prime, m, zone)
  }
});
lambda21 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, p, epsilon, rho, theta, rho_prime, q_prime, m, zone) {
  let qkl, rho_kl, rho_prime_kl, tau_kl, epsilon_0, p_0, theta_0, tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  qkl = runtime.safeCall(sub2(q_prime, zone));
  rho_kl = runtime.safeCall(sub2(rho, zone));
  rho_prime_kl = runtime.safeCall(sub2(rho_prime, zone));
  tmp = 1.0 / rho_prime_kl;
  tmp1 = 1.0 / rho_kl;
  tau_kl = tmp - tmp1;
  epsilon_0 = runtime.safeCall(sub2(epsilon, zone));
  p_0 = runtime.safeCall(sub2(p, zone));
  theta_0 = runtime.safeCall(sub2(theta, zone));
  tmp2 = p_0 + qkl;
  tmp3 = tmp2 * tau_kl;
  inlinedVal = epsilon_0 - tmp3;
  tmp4 = energy_equation(simple2, sub2, update2, pow, north, south, east, west, rho_kl, inlinedVal);
  inlinedVal1 = simple2[newton_raphson$accessorSymbol](tmp4, theta_0);
  inlinedVal2 = simple2[zonal_pressure$accessorSymbol](sub2, update2, pow, north, south, east, west)(rho_kl, inlinedVal1);
  tmp5 = inlinedVal2 + qkl;
  tmp6 = tmp5 * tau_kl;
  inlinedVal3 = epsilon_0 - tmp6;
  tmp7 = energy_equation(simple2, sub2, update2, pow, north, south, east, west, rho_kl, inlinedVal3);
  inlinedVal4 = simple2[newton_raphson$accessorSymbol](tmp7, inlinedVal1);
  return runtime.safeCall(update2(m, zone, inlinedVal4))
});
lambda$44 = (undefined, function (sub2, pow, rho_value, theta_value, a, i) {
  return (j) => {
    return lambda19(sub2, pow, rho_value, theta_value, a, i, j)
  }
});
lambda19 = (undefined, function (sub2, pow, rho_value, theta_value, a, i, j) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = globalThis.Object.freeze([
    i,
    j
  ]);
  tmp1 = runtime.safeCall(sub2(a, tmp));
  tmp2 = runtime.safeCall(pow(rho_value, i));
  tmp3 = tmp1 * tmp2;
  tmp4 = runtime.safeCall(pow(theta_value, j));
  return tmp3 * tmp4
});
lambda$43 = (undefined, function (simple2, sub2, pow, degree, rho_value, theta_value, a) {
  return (i) => {
    return lambda20(simple2, sub2, pow, degree, rho_value, theta_value, a, i)
  }
});
table_search = function table_search(simple2, table, value) {
  let scrut, scrut1, element1$, element0$, tmp, tmp1, element1$1;
  if (runtime.Tuple.isArrayLike(table) && table.length === 2) {
    runtime.Tuple.get(table, 0);
    element1$1 = runtime.Tuple.get(table, 1);
    if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 2) {
      element0$ = runtime.Tuple.get(element1$1, 0);
      element1$ = runtime.Tuple.get(element1$1, 1);
      tmp = simple2[sub1$accessorSymbol](table, element1$);
      scrut = value > tmp;
      if (scrut === true) {
        return element1$ + 1
      }
      tmp1 = simple2[sub1$accessorSymbol](table, element0$);
      scrut1 = value <= tmp1;
      if (scrut1 === true) {
        return element0$
      }
      {
        let simple3, table1, value1, i, inlinedVal;
        simple3 = simple2;
        table1 = table;
        value1 = value;
        i = element1$;
        inlinedLbl: {
          loopLabel: while (true) {
            let scrut2, tmp2, tmp3, tmp4;
            tmp2 = i - 1;
            tmp3 = simple3[sub1$accessorSymbol](table1, tmp2);
            scrut2 = value1 > tmp3;
            if (scrut2 === true) {
              inlinedVal = i;
              break inlinedLbl
            }
            tmp4 = i - 1;
            i = tmp4;
            continue loopLabel;
          }
        }
        return inlinedVal;
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
from_ = function from_(simple2, n, m) {
  let scrut, tmp, tmp1;
  scrut = n > m;
  if (scrut === true) {
    return simple2.Nil
  }
  tmp = n + 1;
  tmp1 = from_(simple2, tmp, m);
  return simple2.Cons(n, tmp1);
};
lambda20 = (undefined, function (simple2, sub2, pow, degree, rho_value, theta_value, a, i) {
  let tmp, f, inlinedVal;
  tmp = from_(simple2, 0, degree);
  f = lambda$44(sub2, pow, rho_value, theta_value, a, i);
  inlinedVal = simple2[map$tailrec$accessorSymbol](f, tmp);
  if (inlinedVal instanceof simple2.Cons.class) {
    if (inlinedVal instanceof simple2.Nil.class) {
      return 0.0
    } else if (inlinedVal instanceof simple2.Cons.class) {
      return lambda54(simple2, lambda, inlinedVal, 0.0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
upper_del = function upper_del(simple2, sub2, update2, pow, north, south, east, west, zone, f) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1, inlinedVal2, tmp7;
  tmp = runtime.safeCall(sub2(f, zone));
  inlinedVal = runtime.safeCall(north(zone));
  tmp1 = runtime.safeCall(sub2(f, inlinedVal));
  tmp2 = tmp - tmp1;
  inlinedVal1 = runtime.safeCall(west(zone));
  tmp3 = runtime.safeCall(sub2(f, inlinedVal1));
  tmp7 = runtime.safeCall(west(zone));
  inlinedVal2 = runtime.safeCall(north(tmp7));
  tmp4 = runtime.safeCall(sub2(f, inlinedVal2));
  tmp5 = tmp3 - tmp4;
  tmp6 = tmp2 + tmp5;
  return 0.5 * tmp6
};
lower_del = function lower_del(simple2, sub2, update2, pow, north, south, east, west, zone, f) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1, inlinedVal2, tmp7;
  tmp = runtime.safeCall(sub2(f, zone));
  inlinedVal = runtime.safeCall(west(zone));
  tmp1 = runtime.safeCall(sub2(f, inlinedVal));
  tmp2 = tmp - tmp1;
  inlinedVal1 = runtime.safeCall(north(zone));
  tmp3 = runtime.safeCall(sub2(f, inlinedVal1));
  tmp7 = runtime.safeCall(west(zone));
  inlinedVal2 = runtime.safeCall(north(tmp7));
  tmp4 = runtime.safeCall(sub2(f, inlinedVal2));
  tmp5 = tmp3 - tmp4;
  tmp6 = tmp2 + tmp5;
  return 0.5 * tmp6
};
lambda$42 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, p, alpha_p, rho_p, u_p, w_p, z_p, r_p, q_p, d) {
  return (zone) => {
    return lambda18(simple2, sub2, update2, pow, north, south, east, west, p, alpha_p, rho_p, u_p, w_p, z_p, r_p, q_p, d, zone)
  }
});
lambda$41 = (undefined, function (simple2, sub2, update2, north, q_p) {
  return (zone) => {
    return do_zones(simple2, sub2, update2, q_p, north, zone)
  }
});
lambda$40 = (undefined, function (simple2, sub2, update2, west, q_p) {
  return (zone) => {
    return do_zones(simple2, sub2, update2, q_p, west, zone)
  }
});
lambda$39 = (undefined, function (simple2, sub2, update2, east, q_p) {
  return (zone) => {
    return do_zones(simple2, sub2, update2, q_p, east, zone)
  }
});
lambda$38 = (undefined, function (simple2, sub2, update2, south, q_p) {
  return (zone) => {
    return do_zones(simple2, sub2, update2, q_p, south, zone)
  }
});
do_zones = function do_zones(simple2, sub2, update2, q_p, dir, zone) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3;
  tmp = runtime.safeCall(dir(zone));
  tmp1 = runtime.safeCall(sub2(q_p, tmp));
  tmp2 = runtime.safeCall(sub2(simple2[nbc$accessorSymbol], zone));
  tmp3 = simple2[sub1$accessorSymbol](simple2[qb$accessorSymbol], tmp2);
  inlinedVal = tmp1 * tmp3;
  return runtime.safeCall(update2(q_p, zone, inlinedVal))
};
lambda18 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, p, alpha_p, rho_p, u_p, w_p, z_p, r_p, q_p, d, zone) {
  let element1$, element0$, inlinedVal, xi, eta, upper_disc, lower_disc, scrut, scrut1, speed_of_sound, ubar, viscosity, courant_delta, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, inlinedVal1, inlinedVal2;
  tmp = upper_del(simple2, sub2, update2, pow, north, south, east, west, zone, r_p);
  tmp1 = runtime.safeCall(pow(tmp, 2));
  tmp2 = upper_del(simple2, sub2, update2, pow, north, south, east, west, zone, z_p);
  tmp3 = runtime.safeCall(pow(tmp2, 2));
  xi = tmp1 + tmp3;
  tmp4 = lower_del(simple2, sub2, update2, pow, north, south, east, west, zone, r_p);
  tmp5 = runtime.safeCall(pow(tmp4, 2));
  tmp6 = lower_del(simple2, sub2, update2, pow, north, south, east, west, zone, z_p);
  tmp7 = runtime.safeCall(pow(tmp6, 2));
  eta = tmp5 + tmp7;
  tmp8 = upper_del(simple2, sub2, update2, pow, north, south, east, west, zone, r_p);
  tmp9 = lower_del(simple2, sub2, update2, pow, north, south, east, west, zone, w_p);
  tmp10 = tmp8 * tmp9;
  tmp11 = upper_del(simple2, sub2, update2, pow, north, south, east, west, zone, z_p);
  tmp12 = lower_del(simple2, sub2, update2, pow, north, south, east, west, zone, u_p);
  tmp13 = tmp11 * tmp12;
  upper_disc = tmp10 - tmp13;
  tmp14 = upper_del(simple2, sub2, update2, pow, north, south, east, west, zone, u_p);
  tmp15 = lower_del(simple2, sub2, update2, pow, north, south, east, west, zone, z_p);
  tmp16 = tmp14 * tmp15;
  tmp17 = upper_del(simple2, sub2, update2, pow, north, south, east, west, zone, w_p);
  tmp18 = lower_del(simple2, sub2, update2, pow, north, south, east, west, zone, r_p);
  tmp19 = tmp17 * tmp18;
  lower_disc = tmp16 - tmp19;
  scrut = upper_disc < 0.0;
  if (scrut === true) {
    tmp20 = upper_disc / xi;
  } else {
    tmp20 = 0.0;
  }
  scrut1 = lower_disc < 0.0;
  if (scrut1 === true) {
    tmp21 = lower_disc / eta;
  } else {
    tmp21 = 0.0;
  }
  tmp22 = runtime.safeCall(sub2(p, zone));
  tmp23 = 1.6 * tmp22;
  tmp24 = runtime.safeCall(sub2(rho_p, zone));
  speed_of_sound = tmp23 / tmp24;
  tmp25 = runtime.safeCall(pow(tmp20, 2));
  tmp26 = runtime.safeCall(pow(tmp21, 2));
  ubar = tmp25 + tmp26;
  tmp27 = runtime.safeCall(sub2(rho_p, zone));
  tmp28 = 1.5 * ubar;
  tmp29 = 0.5 * speed_of_sound;
  inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(ubar));
  tmp30 = tmp29 * inlinedVal1;
  tmp31 = tmp28 + tmp30;
  viscosity = tmp27 * tmp31;
  tmp32 = upper_del(simple2, sub2, update2, pow, north, south, east, west, zone, r_p);
  tmp33 = runtime.safeCall(pow(tmp32, 2));
  tmp34 = lower_del(simple2, sub2, update2, pow, north, south, east, west, zone, r_p);
  tmp35 = runtime.safeCall(pow(tmp34, 2));
  tmp36 = tmp33 + tmp35;
  inlinedVal2 = runtime.safeCall(globalThis.Math.sqrt(tmp36));
  tmp37 = runtime.safeCall(sub2(alpha_p, zone));
  tmp38 = 0.5 * tmp37;
  tmp39 = speed_of_sound * inlinedVal2;
  courant_delta = tmp38 / tmp39;
  inlinedVal = globalThis.Object.freeze([
    viscosity,
    courant_delta
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(q_p, zone, element0$));
    return runtime.safeCall(update2(d, zone, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$37 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, rho, s, x_p, alpha_p, s_p, rho_p) {
  return (zone) => {
    return lambda17(simple2, sub2, update2, pow, north, south, east, west, rho, s, x_p, alpha_p, s_p, rho_p, zone)
  }
});
lambda$36 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, alpha_p, s_p, rho_p) {
  return (zone) => {
    let tmp;
    tmp = simple2[reflect_north$accessorSymbol](sub2, update2, pow, north, south, east, west);
    return r_area_vol_den(update2, alpha_p, s_p, rho_p, tmp, zone)
  }
});
lambda$35 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, alpha_p, s_p, rho_p) {
  return (zone) => {
    let tmp;
    tmp = simple2[reflect_west$accessorSymbol](sub2, update2, pow, north, south, east, west);
    return r_area_vol_den(update2, alpha_p, s_p, rho_p, tmp, zone)
  }
});
lambda$34 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, alpha_p, s_p, rho_p) {
  return (zone) => {
    let tmp;
    tmp = simple2[reflect_east$accessorSymbol](sub2, update2, pow, north, south, east, west);
    return r_area_vol_den(update2, alpha_p, s_p, rho_p, tmp, zone)
  }
});
lambda$33 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, alpha_p, s_p, rho_p) {
  return (zone) => {
    let tmp;
    tmp = simple2[reflect_south$accessorSymbol](sub2, update2, pow, north, south, east, west);
    return r_area_vol_den(update2, alpha_p, s_p, rho_p, tmp, zone)
  }
});
update_asr = function update_asr(update2, alpha_p, s_p, rho_p, zone, asr) {
  let element2$, element1$, element0$;
  if (runtime.Tuple.isArrayLike(asr) && asr.length === 3) {
    element0$ = runtime.Tuple.get(asr, 0);
    element1$ = runtime.Tuple.get(asr, 1);
    element2$ = runtime.Tuple.get(asr, 2);
    runtime.safeCall(update2(alpha_p, zone, element0$));
    runtime.safeCall(update2(s_p, zone, element1$));
    return runtime.safeCall(update2(rho_p, zone, element2$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
r_area_vol_den = function r_area_vol_den(update2, alpha_p, s_p, rho_p, reflect_dir, zone) {
  let tmp, inlinedVal, tmp1, tmp2, tmp3;
  tmp = runtime.safeCall(reflect_dir(zone));
  tmp1 = runtime.safeCall(tmp(alpha_p));
  tmp2 = runtime.safeCall(tmp(s_p));
  tmp3 = runtime.safeCall(tmp(rho_p));
  inlinedVal = globalThis.Object.freeze([
    tmp1,
    tmp2,
    tmp3
  ]);
  return update_asr(update2, alpha_p, s_p, rho_p, zone, inlinedVal)
};
lambda17 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, rho, s, x_p, alpha_p, s_p, rho_p, zone) {
  let inlinedVal, scrut, density, element1$, element0$, tmp, tmp1, tmp2;
  scrut = simple2[zone_area_vol$accessorSymbol](sub2, update2, pow, north, south, east, west)(x_p, zone);
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    tmp = runtime.safeCall(sub2(rho, zone));
    tmp1 = runtime.safeCall(sub2(s, zone));
    tmp2 = tmp * tmp1;
    density = tmp2 / element1$;
    inlinedVal = globalThis.Object.freeze([
      element0$,
      element1$,
      density
    ]);
    return update_asr(update2, alpha_p, s_p, rho_p, zone, inlinedVal)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
interior_position$ = function interior_position$(sub2, delta_t, r, z, u_p, w_p) {
  return (node) => {
    return interior_position(sub2, delta_t, r, z, u_p, w_p, node)
  }
};
interior_position = function interior_position(sub2, delta_t, r, z, u_p, w_p, node) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = runtime.safeCall(sub2(r, node));
  tmp1 = runtime.safeCall(sub2(u_p, node));
  tmp2 = delta_t * tmp1;
  tmp3 = tmp + tmp2;
  tmp4 = runtime.safeCall(sub2(z, node));
  tmp5 = runtime.safeCall(sub2(w_p, node));
  tmp6 = delta_t * tmp5;
  tmp7 = tmp4 + tmp6;
  return globalThis.Object.freeze([
    tmp3,
    tmp7
  ])
};
lambda$32 = (undefined, function (simple2, sub2, update2, north, south, east, west, p, q, alpha, rho, delta_t, u, w, r, z, uu, ww, k) {
  return (l) => {
    return lambda56(simple2, sub2, update2, north, south, east, west, p, q, alpha, rho, delta_t, u, w, r, z, uu, ww, k, l)
  }
});
lambda56 = (undefined, function (simple2, sub2, update2, north, south, east, west, p, q, alpha, rho, delta_t, u, w, r, z, uu, ww, k, l) {
  let element1$, element0$, tmp, tmp1, tmp2, inlinedVal, n1, n2, u_dot, w_dot, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, inlinedVal1, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, inlinedVal2, inlinedVal3, element1$1, element0$1, element1$2, element0$2;
  tmp = globalThis.Object.freeze([
    k,
    l
  ]);
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$1 = runtime.Tuple.get(tmp, 0);
    element1$1 = runtime.Tuple.get(tmp, 1);
    inlinedVal2 = globalThis.Object.freeze([
      element0$1,
      element1$1
    ]);
    tmp14 = runtime.safeCall(sub2(rho, inlinedVal2));
    if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
      let inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, element1$3, element0$3, tmp29, element1$4, element0$4, tmp30, element1$5, element0$5, tmp31, tmp32, element1$6, element0$6, tmp33, tmp34, element1$7, element0$7, tmp35, element1$8, element0$8, tmp36;
      element0$2 = runtime.Tuple.get(tmp, 0);
      element1$2 = runtime.Tuple.get(tmp, 1);
      inlinedVal3 = globalThis.Object.freeze([
        element0$2,
        element1$2
      ]);
      tmp15 = runtime.safeCall(sub2(alpha, inlinedVal3));
      tmp16 = tmp14 * tmp15;
      if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
        element0$8 = runtime.Tuple.get(tmp, 0);
        element1$8 = runtime.Tuple.get(tmp, 1);
        tmp36 = element0$8 + 1;
        inlinedVal4 = globalThis.Object.freeze([
          tmp36,
          element1$8
        ]);
        tmp17 = runtime.safeCall(sub2(rho, inlinedVal4));
        if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
          element0$7 = runtime.Tuple.get(tmp, 0);
          element1$7 = runtime.Tuple.get(tmp, 1);
          tmp35 = element0$7 + 1;
          inlinedVal5 = globalThis.Object.freeze([
            tmp35,
            element1$7
          ]);
          tmp18 = runtime.safeCall(sub2(alpha, inlinedVal5));
          tmp19 = tmp17 * tmp18;
          if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
            element0$6 = runtime.Tuple.get(tmp, 0);
            element1$6 = runtime.Tuple.get(tmp, 1);
            tmp33 = element0$6 + 1;
            tmp34 = element1$6 + 1;
            inlinedVal6 = globalThis.Object.freeze([
              tmp33,
              tmp34
            ]);
            tmp20 = runtime.safeCall(sub2(rho, inlinedVal6));
            if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
              element0$5 = runtime.Tuple.get(tmp, 0);
              element1$5 = runtime.Tuple.get(tmp, 1);
              tmp31 = element0$5 + 1;
              tmp32 = element1$5 + 1;
              inlinedVal7 = globalThis.Object.freeze([
                tmp31,
                tmp32
              ]);
              tmp21 = runtime.safeCall(sub2(alpha, inlinedVal7));
              tmp22 = tmp20 * tmp21;
              tmp23 = tmp19 + tmp22;
              if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                element0$4 = runtime.Tuple.get(tmp, 0);
                element1$4 = runtime.Tuple.get(tmp, 1);
                tmp30 = element1$4 + 1;
                inlinedVal8 = globalThis.Object.freeze([
                  element0$4,
                  tmp30
                ]);
                tmp24 = runtime.safeCall(sub2(rho, inlinedVal8));
                if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                  element0$3 = runtime.Tuple.get(tmp, 0);
                  element1$3 = runtime.Tuple.get(tmp, 1);
                  tmp29 = element1$3 + 1;
                  inlinedVal9 = globalThis.Object.freeze([
                    element0$3,
                    tmp29
                  ]);
                  tmp25 = runtime.safeCall(sub2(alpha, inlinedVal9));
                  tmp26 = tmp24 * tmp25;
                  tmp27 = tmp23 + tmp26;
                  tmp28 = tmp16 + tmp27;
                  inlinedVal1 = 0.5 * tmp28;
                  tmp3 = line_integral(simple2, sub2, north, south, east, west, p, z, tmp);
                  tmp4 = - tmp3;
                  tmp5 = line_integral(simple2, sub2, north, south, east, west, q, z, tmp);
                  n1 = tmp4 - tmp5;
                  tmp6 = line_integral(simple2, sub2, north, south, east, west, p, r, tmp);
                  tmp7 = line_integral(simple2, sub2, north, south, east, west, q, r, tmp);
                  n2 = tmp6 + tmp7;
                  u_dot = n1 / inlinedVal1;
                  w_dot = n2 / inlinedVal1;
                  tmp8 = runtime.safeCall(sub2(u, tmp));
                  tmp9 = delta_t * u_dot;
                  tmp10 = tmp8 + tmp9;
                  tmp11 = runtime.safeCall(sub2(w, tmp));
                  tmp12 = delta_t * w_dot;
                  tmp13 = tmp11 + tmp12;
                  inlinedVal = globalThis.Object.freeze([
                    tmp10,
                    tmp13
                  ]);
                  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
                    element0$ = runtime.Tuple.get(inlinedVal, 0);
                    element1$ = runtime.Tuple.get(inlinedVal, 1);
                    tmp1 = globalThis.Object.freeze([
                      k,
                      l
                    ]);
                    runtime.safeCall(update2(uu, tmp1, element0$));
                    tmp2 = globalThis.Object.freeze([
                      k,
                      l
                    ]);
                    return runtime.safeCall(update2(ww, tmp2, element1$))
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$31 = (undefined, function (simple2, sub2, update2, north, south, east, west, p, q, alpha, rho, delta_t, u, w, r, z, uu, ww) {
  return (k) => {
    return lambda$32(simple2, sub2, update2, north, south, east, west, p, q, alpha, rho, delta_t, u, w, r, z, uu, ww, k)
  }
});
line_integral = function line_integral(simple2, sub2, north, south, east, west, p, z, node) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, inlinedVal, element1$, element0$;
  if (runtime.Tuple.isArrayLike(node) && node.length === 2) {
    let inlinedVal1, inlinedVal2, inlinedVal3, element1$1, element0$1, tmp30, element1$2, element0$2, tmp31, tmp32, element1$3, element0$3, tmp33;
    element0$ = runtime.Tuple.get(node, 0);
    element1$ = runtime.Tuple.get(node, 1);
    inlinedVal = globalThis.Object.freeze([
      element0$,
      element1$
    ]);
    tmp = runtime.safeCall(sub2(p, inlinedVal));
    tmp1 = runtime.safeCall(west(node));
    tmp2 = runtime.safeCall(sub2(z, tmp1));
    tmp3 = runtime.safeCall(north(node));
    tmp4 = runtime.safeCall(sub2(z, tmp3));
    tmp5 = tmp2 - tmp4;
    tmp6 = tmp * tmp5;
    if (runtime.Tuple.isArrayLike(node) && node.length === 2) {
      element0$3 = runtime.Tuple.get(node, 0);
      element1$3 = runtime.Tuple.get(node, 1);
      tmp33 = element0$3 + 1;
      inlinedVal1 = globalThis.Object.freeze([
        tmp33,
        element1$3
      ]);
      tmp7 = runtime.safeCall(sub2(p, inlinedVal1));
      tmp8 = runtime.safeCall(south(node));
      tmp9 = runtime.safeCall(sub2(z, tmp8));
      tmp10 = runtime.safeCall(west(node));
      tmp11 = runtime.safeCall(sub2(z, tmp10));
      tmp12 = tmp9 - tmp11;
      tmp13 = tmp7 * tmp12;
      if (runtime.Tuple.isArrayLike(node) && node.length === 2) {
        element0$2 = runtime.Tuple.get(node, 0);
        element1$2 = runtime.Tuple.get(node, 1);
        tmp31 = element0$2 + 1;
        tmp32 = element1$2 + 1;
        inlinedVal2 = globalThis.Object.freeze([
          tmp31,
          tmp32
        ]);
        tmp14 = runtime.safeCall(sub2(p, inlinedVal2));
        tmp15 = runtime.safeCall(east(node));
        tmp16 = runtime.safeCall(sub2(z, tmp15));
        tmp17 = runtime.safeCall(south(node));
        tmp18 = runtime.safeCall(sub2(z, tmp17));
        tmp19 = tmp16 - tmp18;
        tmp20 = tmp14 * tmp19;
        tmp21 = tmp13 + tmp20;
        if (runtime.Tuple.isArrayLike(node) && node.length === 2) {
          element0$1 = runtime.Tuple.get(node, 0);
          element1$1 = runtime.Tuple.get(node, 1);
          tmp30 = element1$1 + 1;
          inlinedVal3 = globalThis.Object.freeze([
            element0$1,
            tmp30
          ]);
          tmp22 = runtime.safeCall(sub2(p, inlinedVal3));
          tmp23 = runtime.safeCall(north(node));
          tmp24 = runtime.safeCall(sub2(z, tmp23));
          tmp25 = runtime.safeCall(east(node));
          tmp26 = runtime.safeCall(sub2(z, tmp25));
          tmp27 = tmp24 - tmp26;
          tmp28 = tmp22 * tmp27;
          tmp29 = tmp21 + tmp28;
          return tmp6 + tmp29
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$30 = (undefined, function (update2, interior_function, r_p, z_p, k) {
  return (l) => {
    return lambda55(update2, interior_function, r_p, z_p, k, l)
  }
});
lambda55 = (undefined, function (update2, interior_function, r_p, z_p, k, l) {
  let tmp, tmp1, tmp2, element1$, element0$;
  tmp = globalThis.Object.freeze([
    k,
    l
  ]);
  tmp1 = runtime.safeCall(interior_function(tmp));
  tmp2 = globalThis.Object.freeze([
    k,
    l
  ]);
  if (runtime.Tuple.isArrayLike(tmp1) && tmp1.length === 2) {
    element0$ = runtime.Tuple.get(tmp1, 0);
    element1$ = runtime.Tuple.get(tmp1, 1);
    runtime.safeCall(update2(r_p, tmp2, element0$));
    return runtime.safeCall(update2(z_p, tmp2, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$29 = (undefined, function (update2, interior_function, r_p, z_p) {
  return (k) => {
    return lambda$30(update2, interior_function, r_p, z_p, k)
  }
});
lambda$28 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, r_p, z_p) {
  return (n) => {
    return lambda13(simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, n)
  }
});
lambda$27 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, r_p, z_p) {
  return (n) => {
    return lambda14(simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, n)
  }
});
lambda$26 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, r_p, z_p) {
  return (n) => {
    return lambda15(simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, n)
  }
});
lambda$25 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, r_p, z_p) {
  return (n) => {
    return lambda16(simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, n)
  }
});
reflect_node = function reflect_node(simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, x_dir, y_dir, a_dir, node) {
  let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, rax, zax, ryx, zyx, omega, rb, zb, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
  tmp16 = runtime.safeCall(x_dir(node));
  inlinedVal = runtime.safeCall(sub2(r_p, tmp16));
  tmp15 = runtime.safeCall(x_dir(node));
  inlinedVal1 = runtime.safeCall(sub2(z_p, tmp15));
  tmp14 = runtime.safeCall(y_dir(node));
  inlinedVal2 = runtime.safeCall(sub2(r_p, tmp14));
  tmp13 = runtime.safeCall(y_dir(node));
  inlinedVal3 = runtime.safeCall(sub2(z_p, tmp13));
  tmp12 = runtime.safeCall(a_dir(node));
  inlinedVal4 = runtime.safeCall(sub2(r_p, tmp12));
  tmp11 = runtime.safeCall(a_dir(node));
  inlinedVal5 = runtime.safeCall(sub2(z_p, tmp11));
  rax = inlinedVal4 - inlinedVal;
  zax = inlinedVal5 - inlinedVal1;
  ryx = inlinedVal2 - inlinedVal;
  zyx = inlinedVal3 - inlinedVal1;
  tmp = rax * ryx;
  tmp1 = zax * zyx;
  tmp2 = tmp + tmp1;
  tmp3 = 2.0 * tmp2;
  tmp4 = ryx * ryx;
  tmp5 = zyx * zyx;
  tmp6 = tmp4 + tmp5;
  omega = tmp3 / tmp6;
  tmp7 = inlinedVal - rax;
  tmp8 = omega * ryx;
  rb = tmp7 + tmp8;
  tmp9 = inlinedVal1 - zax;
  tmp10 = omega * zyx;
  zb = tmp9 + tmp10;
  return globalThis.Object.freeze([
    rb,
    zb
  ])
};
lambda13 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, n) {
  let tmp, tmp1, tmp2, element1$, element0$;
  tmp = simple2[southeast$accessorSymbol](sub2, update2, pow, north, south, east, west);
  tmp1 = simple2[farsouth$accessorSymbol](sub2, update2, pow, north, south, east, west);
  tmp2 = reflect_node(simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, south, tmp, tmp1, n);
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    element1$ = runtime.Tuple.get(tmp2, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda14 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, n) {
  let tmp, tmp1, tmp2, element1$, element0$;
  tmp = simple2[northeast$accessorSymbol](sub2, update2, pow, north, south, east, west);
  tmp1 = simple2[farnorth$accessorSymbol](sub2, update2, pow, north, south, east, west);
  tmp2 = reflect_node(simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, north, tmp, tmp1, n);
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    element1$ = runtime.Tuple.get(tmp2, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda15 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, n) {
  let tmp, tmp1, tmp2, element1$, element0$;
  tmp = simple2[southwest$accessorSymbol](sub2, update2, pow, north, south, east, west);
  tmp1 = simple2[farwest$accessorSymbol](sub2, update2, pow, north, south, east, west);
  tmp2 = reflect_node(simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, west, tmp, tmp1, n);
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    element1$ = runtime.Tuple.get(tmp2, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda16 = (undefined, function (simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, n) {
  let tmp, tmp1, tmp2, element1$, element0$;
  tmp = simple2[southeast$accessorSymbol](sub2, update2, pow, north, south, east, west);
  tmp1 = simple2[fareast$accessorSymbol](sub2, update2, pow, north, south, east, west);
  tmp2 = reflect_node(simple2, sub2, update2, pow, north, south, east, west, r_p, z_p, east, tmp, tmp1, n);
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    element1$ = runtime.Tuple.get(tmp2, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$24 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda12(simple2, f, k)
  }
});
lambda12 = (undefined, function (simple2, f, k) {
  let tmp, tmp1;
  tmp = simple2[lmin$accessorSymbol] - 1;
  tmp1 = globalThis.Object.freeze([
    k,
    tmp
  ]);
  return runtime.safeCall(f(tmp1))
});
lambda$23 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda11(simple2, f, k)
  }
});
lambda11 = (undefined, function (simple2, f, k) {
  let tmp, tmp1;
  tmp = simple2[lmax$accessorSymbol] + 1;
  tmp1 = globalThis.Object.freeze([
    k,
    tmp
  ]);
  return runtime.safeCall(f(tmp1))
});
lambda$22 = (undefined, function (simple2, f) {
  return (l) => {
    return lambda10(simple2, f, l)
  }
});
lambda10 = (undefined, function (simple2, f, l) {
  let tmp, tmp1;
  tmp = simple2[kmax$accessorSymbol] + 1;
  tmp1 = globalThis.Object.freeze([
    tmp,
    l
  ]);
  return runtime.safeCall(f(tmp1))
});
lambda$21 = (undefined, function (simple2, f) {
  return (l) => {
    return lambda9(simple2, f, l)
  }
});
lambda9 = (undefined, function (simple2, f, l) {
  let tmp, tmp1;
  tmp = simple2[kmin$accessorSymbol] - 1;
  tmp1 = globalThis.Object.freeze([
    tmp,
    l
  ]);
  return runtime.safeCall(f(tmp1))
});
lambda$20 = (undefined, function (simple2, f) {
  return (k) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      simple2[lmin$accessorSymbol]
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$19 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda8(simple2, f, k)
  }
});
lambda8 = (undefined, function (simple2, f, k) {
  let tmp, tmp1;
  tmp = simple2[lmax$accessorSymbol] + 1;
  tmp1 = globalThis.Object.freeze([
    k,
    tmp
  ]);
  return runtime.safeCall(f(tmp1))
});
lambda$18 = (undefined, function (simple2, f) {
  return (l) => {
    return lambda7(simple2, f, l)
  }
});
lambda7 = (undefined, function (simple2, f, l) {
  let tmp, tmp1;
  tmp = simple2[kmax$accessorSymbol] + 1;
  tmp1 = globalThis.Object.freeze([
    tmp,
    l
  ]);
  return runtime.safeCall(f(tmp1))
});
lambda$17 = (undefined, function (simple2, f) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      simple2[kmin$accessorSymbol],
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$16 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$15 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda6(simple2, f, k)
  }
});
lambda6 = (undefined, function (simple2, f, k) {
  let tmp, lambda$here;
  tmp = simple2[lmin$accessorSymbol] + 1;
  lambda$here = lambda$16(f, k);
  return simple2[for_$accessorSymbol](simple2[lmax$accessorSymbol], -1, tmp)(lambda$here)
});
lambda$14 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$13 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda5(simple2, f, k)
  }
});
lambda5 = (undefined, function (simple2, f, k) {
  let tmp, lambda$here;
  tmp = simple2[lmin$accessorSymbol] + 1;
  lambda$here = lambda$14(f, k);
  return simple2[for_$accessorSymbol](tmp, 1, simple2[lmax$accessorSymbol])(lambda$here)
});
lambda$12 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$11 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda4(simple2, f, k)
  }
});
lambda4 = (undefined, function (simple2, f, k) {
  let tmp, tmp1, f1;
  tmp = simple2[lmin$accessorSymbol] + 1;
  tmp1 = simple2[from_$accessorSymbol](tmp, simple2[lmax$accessorSymbol]);
  f1 = lambda$12(f, k);
  return simple2[map$tailrec$accessorSymbol](f1, tmp1)
});
lambda$10 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$9 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda3(simple2, f, k)
  }
});
lambda3 = (undefined, function (simple2, f, k) {
  let tmp, f1;
  tmp = simple2[from_$accessorSymbol](simple2[lmin$accessorSymbol], simple2[lmax$accessorSymbol]);
  f1 = lambda$10(f, k);
  return simple2[map$tailrec$accessorSymbol](f1, tmp)
});
lambda$8 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$7 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda2(simple2, f, k)
  }
});
lambda2 = (undefined, function (simple2, f, k) {
  let tmp, lambda$here;
  tmp = simple2[lmin$accessorSymbol] + 1;
  lambda$here = lambda$8(f, k);
  return simple2[for_$accessorSymbol](tmp, 1, simple2[lmax$accessorSymbol])(lambda$here)
});
lambda$6 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$5 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda1(simple2, f, k)
  }
});
lambda1 = (undefined, function (simple2, f, k) {
  let tmp, lambda$here;
  tmp = simple2[lmax$accessorSymbol] + 1;
  lambda$here = lambda$6(f, k);
  return simple2[for_$accessorSymbol](simple2[lmin$accessorSymbol], 1, tmp)(lambda$here)
});
lambda$4 = (undefined, function (f, k) {
  return (l) => {
    let callPrefix;
    callPrefix = runtime.safeCall(f(k));
    return runtime.safeCall(callPrefix(l))
  }
});
lambda$3 = (undefined, function (simple2, f) {
  return (k) => {
    let lambda$here;
    lambda$here = lambda$4(f, k);
    return simple2[for_$accessorSymbol](simple2[lmin$accessorSymbol], 1, simple2[lmax$accessorSymbol])(lambda$here)
  }
});
lambda = (undefined, function (a, b) {
  return a + b
});
lambda$2 = (undefined, function (simple2, f, l) {
  return (b) => {
    return lambda54(simple2, f, l, b)
  }
});
lambda54 = (undefined, function (simple2, f, l, b) {
  let tmp, simple3, f1, l2, acc, inlinedVal;
  tmp = simple2[rev$accessorSymbol](l);
  simple3 = simple2;
  f1 = f;
  l2 = tmp;
  acc = b;
  inlinedLbl: {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp1;
      if (l2 instanceof simple3.Nil.class) {
        inlinedVal = acc;
        break inlinedLbl
      } else if (l2 instanceof simple3.Cons.class) {
        arg$Cons$0$ = l2.head;
        arg$Cons$1$ = l2.tail;
        tmp1 = runtime.safeCall(f1(arg$Cons$0$, acc));
        l2 = arg$Cons$1$;
        acc = tmp1;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  return inlinedVal
});
lambda53 = (undefined, function (b) {
  return b
});
lambda$1 = (undefined, function (f, g) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(g(x));
    return runtime.safeCall(f(tmp))
  }
});
lambda$ = (undefined, function (simple2, m) {
  return (j) => {
    return lambda52(simple2, m, j)
  }
});
lambda52 = (undefined, function (simple2, m, j) {
  let tmp, tmp1;
  tmp = simple2[kmax$accessorSymbol] + 1;
  tmp1 = globalThis.Object.freeze([
    tmp,
    j
  ]);
  return simple2[update2$accessorSymbol](m, tmp1, 2)
});
(class simple {
  static {
    simple1 = this
  }
  static #grid_max;
  static #step_count;
  static #trace;
  static #grid_size;
  static #kmin;
  static #kmax;
  static #lmin;
  static #lmax;
  static #dimension_all_nodes;
  static #dimension_interior_nodes;
  static #dimension_all_zones;
  static #dimension_interior_zones;
  static #north_east_corner;
  static #north_west_corner;
  static #south_east_corner;
  static #south_west_corner;
  static #west_of_north_east;
  static #west_of_south_east;
  static #north_of_south_east;
  static #north_of_south_west;
  static #constant_heat_source;
  static #deltat_maximum;
  static #specific_heat;
  static #p_coeffs;
  static #e_coeffs;
  static #p_poly;
  static #e_poly;
  static #rho_table;
  static #theta_table;
  static #extract_energy_tables_from_constants;
  static #extract_pressure_tables_from_constants;
  static #nbc;
  static #pbb;
  static #pb;
  static #qb;
  static #all_zero_nodes;
  static #all_zero_zones;
  static #dx;
  static #tiny;
  static get [kmin$accessorSymbol]() { return simple.#kmin; }
  static set [kmin$accessorSymbol](value) { simple.#kmin = value; }
  static get [kmax$accessorSymbol]() { return simple.#kmax; }
  static set [kmax$accessorSymbol](value) { simple.#kmax = value; }
  static get [lmin$accessorSymbol]() { return simple.#lmin; }
  static set [lmin$accessorSymbol](value) { simple.#lmin = value; }
  static get [lmax$accessorSymbol]() { return simple.#lmax; }
  static set [lmax$accessorSymbol](value) { simple.#lmax = value; }
  static get [specific_heat$accessorSymbol]() { return simple.#specific_heat; }
  static set [specific_heat$accessorSymbol](value) { simple.#specific_heat = value; }
  static get [nbc$accessorSymbol]() { return simple.#nbc; }
  static set [nbc$accessorSymbol](value) { simple.#nbc = value; }
  static get [pbb$accessorSymbol]() { return simple.#pbb; }
  static set [pbb$accessorSymbol](value) { simple.#pbb = value; }
  static get [pb$accessorSymbol]() { return simple.#pb; }
  static set [pb$accessorSymbol](value) { simple.#pb = value; }
  static get [qb$accessorSymbol]() { return simple.#qb; }
  static set [qb$accessorSymbol](value) { simple.#qb = value; }
  static get [map$tailrec$accessorSymbol]() { return simple.#map$tailrec; }
  static get [rev$accessorSymbol]() { return simple.#rev; }
  static get [for_$accessorSymbol]() { return simple.#for_; }
  static get [from_$accessorSymbol]() { return simple.#from_; }
  static get [update2$accessorSymbol]() { return simple.#update2; }
  static get [sub1$accessorSymbol]() { return simple.#sub1; }
  static get [northeast$accessorSymbol]() { return simple.#northeast; }
  static get [southeast$accessorSymbol]() { return simple.#southeast; }
  static get [southwest$accessorSymbol]() { return simple.#southwest; }
  static get [farnorth$accessorSymbol]() { return simple.#farnorth; }
  static get [farsouth$accessorSymbol]() { return simple.#farsouth; }
  static get [fareast$accessorSymbol]() { return simple.#fareast; }
  static get [farwest$accessorSymbol]() { return simple.#farwest; }
  static get [reflect_north$accessorSymbol]() { return simple.#reflect_north; }
  static get [reflect_south$accessorSymbol]() { return simple.#reflect_south; }
  static get [reflect_east$accessorSymbol]() { return simple.#reflect_east; }
  static get [reflect_west$accessorSymbol]() { return simple.#reflect_west; }
  static get [zone_area_vol$accessorSymbol]() { return simple.#zone_area_vol; }
  static get [zonal_pressure$accessorSymbol]() { return simple.#zonal_pressure; }
  static get [zonal_energy$accessorSymbol]() { return simple.#zonal_energy; }
  static get [newton_raphson$accessorSymbol]() { return simple.#newton_raphson; }
  static {
    let scrut, scrut1, scrut2, scrut3, m, m1, vv, vv1, m2, a, a1, tmp, tmp1, tmp2, tmp3, element0$, element0$1, element0$2, element1$, element1$1, element0$3, element1$2, element1$3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, lambda$here;
    simple.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        simple.Cons.class = this
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
        simple.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    simple.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        simple.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    simple.#grid_max = 100;
    simple.#step_count = 1;
    tmp = new simple.Ref.class(false);
    simple.#trace = tmp;
    simple.A2 = function A2(size, value) {
      return globalThis.Object.freeze(new A2.class(size, value));
    };
    (class A2 {
      static {
        simple.A2.class = this
      }
      constructor(size, value) {
        this.size = size;
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "A2", ["size", "value"]];
    });
    tmp1 = globalThis.Object.freeze([
      2,
      simple.#grid_max
    ]);
    tmp2 = globalThis.Object.freeze([
      2,
      simple.#grid_max
    ]);
    tmp3 = globalThis.Object.freeze([
      tmp1,
      tmp2
    ]);
    simple.#grid_size = tmp3;
    scrut = simple.#grid_size;
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      runtime.Tuple.get(scrut, 1);
      if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 2) {
        element0$1 = runtime.Tuple.get(element0$, 0);
        runtime.Tuple.get(element0$, 1);
        simple.#kmin = element0$1;
        scrut1 = simple.#grid_size;
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          element0$2 = runtime.Tuple.get(scrut1, 0);
          runtime.Tuple.get(scrut1, 1);
          if (runtime.Tuple.isArrayLike(element0$2) && element0$2.length === 2) {
            runtime.Tuple.get(element0$2, 0);
            element1$ = runtime.Tuple.get(element0$2, 1);
            simple.#kmax = element1$;
            scrut2 = simple.#grid_size;
            if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
              runtime.Tuple.get(scrut2, 0);
              element1$1 = runtime.Tuple.get(scrut2, 1);
              if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 2) {
                element0$3 = runtime.Tuple.get(element1$1, 0);
                runtime.Tuple.get(element1$1, 1);
                simple.#lmin = element0$3;
                scrut3 = simple.#grid_size;
                if (runtime.Tuple.isArrayLike(scrut3) && scrut3.length === 2) {
                  runtime.Tuple.get(scrut3, 0);
                  element1$2 = runtime.Tuple.get(scrut3, 1);
                  if (runtime.Tuple.isArrayLike(element1$2) && element1$2.length === 2) {
                    runtime.Tuple.get(element1$2, 0);
                    element1$3 = runtime.Tuple.get(element1$2, 1);
                    simple.#lmax = element1$3;
                    tmp4 = simple.#kmin - 1;
                    tmp5 = simple.#kmax + 1;
                    tmp6 = globalThis.Object.freeze([
                      tmp4,
                      tmp5
                    ]);
                    tmp7 = simple.#lmin - 1;
                    tmp8 = simple.#lmax + 1;
                    tmp9 = globalThis.Object.freeze([
                      tmp7,
                      tmp8
                    ]);
                    tmp10 = globalThis.Object.freeze([
                      tmp6,
                      tmp9
                    ]);
                    simple.#dimension_all_nodes = tmp10;
                    tmp11 = globalThis.Object.freeze([
                      simple.#kmin,
                      simple.#kmax
                    ]);
                    tmp12 = globalThis.Object.freeze([
                      simple.#lmin,
                      simple.#lmax
                    ]);
                    tmp13 = globalThis.Object.freeze([
                      tmp11,
                      tmp12
                    ]);
                    simple.#dimension_interior_nodes = tmp13;
                    tmp14 = simple.#kmax + 1;
                    tmp15 = globalThis.Object.freeze([
                      simple.#kmin,
                      tmp14
                    ]);
                    tmp16 = simple.#lmax + 1;
                    tmp17 = globalThis.Object.freeze([
                      simple.#lmin,
                      tmp16
                    ]);
                    tmp18 = globalThis.Object.freeze([
                      tmp15,
                      tmp17
                    ]);
                    simple.#dimension_all_zones = tmp18;
                    tmp19 = simple.#kmin + 1;
                    tmp20 = globalThis.Object.freeze([
                      tmp19,
                      simple.#kmax
                    ]);
                    tmp21 = simple.#lmin + 1;
                    tmp22 = globalThis.Object.freeze([
                      tmp21,
                      simple.#lmax
                    ]);
                    tmp23 = globalThis.Object.freeze([
                      tmp20,
                      tmp22
                    ]);
                    simple.#dimension_interior_zones = tmp23;
                    tmp24 = simple.#kmin - 1;
                    tmp25 = simple.#lmax + 1;
                    tmp26 = globalThis.Object.freeze([
                      tmp24,
                      tmp25
                    ]);
                    simple.#north_east_corner = tmp26;
                    tmp27 = simple.#kmin - 1;
                    tmp28 = simple.#lmin - 1;
                    tmp29 = globalThis.Object.freeze([
                      tmp27,
                      tmp28
                    ]);
                    simple.#north_west_corner = tmp29;
                    tmp30 = simple.#kmax + 1;
                    tmp31 = simple.#lmax + 1;
                    tmp32 = globalThis.Object.freeze([
                      tmp30,
                      tmp31
                    ]);
                    simple.#south_east_corner = tmp32;
                    tmp33 = simple.#kmax + 1;
                    tmp34 = simple.#lmin - 1;
                    tmp35 = globalThis.Object.freeze([
                      tmp33,
                      tmp34
                    ]);
                    simple.#south_west_corner = tmp35;
                    tmp36 = simple.#kmin - 1;
                    tmp37 = globalThis.Object.freeze([
                      tmp36,
                      simple.#lmax
                    ]);
                    simple.#west_of_north_east = tmp37;
                    tmp38 = simple.#kmax + 1;
                    tmp39 = globalThis.Object.freeze([
                      tmp38,
                      simple.#lmax
                    ]);
                    simple.#west_of_south_east = tmp39;
                    tmp40 = simple.#lmax + 1;
                    tmp41 = globalThis.Object.freeze([
                      simple.#kmax,
                      tmp40
                    ]);
                    simple.#north_of_south_east = tmp41;
                    tmp42 = simple.#lmin - 1;
                    tmp43 = globalThis.Object.freeze([
                      simple.#kmax,
                      tmp42
                    ]);
                    simple.#north_of_south_west = tmp43;
                    simple.#constant_heat_source = 0.0;
                    simple.#deltat_maximum = 0.01;
                    simple.#specific_heat = 0.1;
                    tmp44 = globalThis.Object.freeze([
                      0,
                      2
                    ]);
                    tmp45 = globalThis.Object.freeze([
                      0,
                      2
                    ]);
                    tmp46 = globalThis.Object.freeze([
                      tmp44,
                      tmp45
                    ]);
                    m = simple.#array2(tmp46, 0.0);
                    tmp47 = globalThis.Object.freeze([
                      1,
                      1
                    ]);
                    simple.#update2(m, tmp47, 0.06698);
                    simple.#p_coeffs = m;
                    tmp48 = globalThis.Object.freeze([
                      0,
                      2
                    ]);
                    tmp49 = globalThis.Object.freeze([
                      0,
                      2
                    ]);
                    tmp50 = globalThis.Object.freeze([
                      tmp48,
                      tmp49
                    ]);
                    m1 = simple.#array2(tmp50, 0.0);
                    tmp51 = globalThis.Object.freeze([
                      0,
                      1
                    ]);
                    simple.#update2(m1, tmp51, 0.1);
                    simple.#e_coeffs = m1;
                    tmp52 = globalThis.Object.freeze([
                      1,
                      4
                    ]);
                    tmp53 = globalThis.Object.freeze([
                      1,
                      5
                    ]);
                    tmp54 = globalThis.Object.freeze([
                      tmp52,
                      tmp53
                    ]);
                    tmp55 = simple.#array2(tmp54, simple.#p_coeffs);
                    simple.#p_poly = tmp55;
                    tmp56 = globalThis.Object.freeze([
                      1,
                      4
                    ]);
                    tmp57 = globalThis.Object.freeze([
                      1,
                      5
                    ]);
                    tmp58 = globalThis.Object.freeze([
                      tmp56,
                      tmp57
                    ]);
                    tmp59 = simple.#array2(tmp58, simple.#e_coeffs);
                    simple.#e_poly = tmp59;
                    tmp60 = globalThis.Object.freeze([
                      1,
                      3
                    ]);
                    vv = simple.#array1(tmp60, 0.0);
                    simple.#update1(vv, 2, 1.0);
                    simple.#update1(vv, 3, 100.0);
                    simple.#rho_table = vv;
                    tmp61 = globalThis.Object.freeze([
                      1,
                      4
                    ]);
                    vv1 = simple.#array1(tmp61, 0.0);
                    simple.#update1(vv1, 2, 3.0);
                    simple.#update1(vv1, 3, 300.0);
                    simple.#update1(vv1, 4, 3000.0);
                    simple.#theta_table = vv1;
                    tmp62 = globalThis.Object.freeze([
                      simple.#e_poly,
                      2,
                      simple.#rho_table,
                      simple.#theta_table
                    ]);
                    simple.#extract_energy_tables_from_constants = tmp62;
                    tmp63 = globalThis.Object.freeze([
                      simple.#p_poly,
                      2,
                      simple.#rho_table,
                      simple.#theta_table
                    ]);
                    simple.#extract_pressure_tables_from_constants = tmp63;
                    m2 = simple.#array2(simple.#dimension_all_zones, 1);
                    tmp64 = simple.#lmin + 1;
                    lambda$here = lambda$(simple, m2);
                    simple.#for_(tmp64, 1, simple.#lmax)(lambda$here);
                    tmp65 = globalThis.Object.freeze([
                      simple.#kmin,
                      simple.#lmin
                    ]);
                    simple.#update2(m2, tmp65, 4);
                    tmp66 = simple.#lmax + 1;
                    tmp67 = globalThis.Object.freeze([
                      simple.#kmin,
                      tmp66
                    ]);
                    simple.#update2(m2, tmp67, 4);
                    tmp68 = simple.#kmax + 1;
                    tmp69 = globalThis.Object.freeze([
                      tmp68,
                      simple.#lmin
                    ]);
                    simple.#update2(m2, tmp69, 4);
                    tmp70 = simple.#kmax + 1;
                    tmp71 = simple.#lmax + 1;
                    tmp72 = globalThis.Object.freeze([
                      tmp70,
                      tmp71
                    ]);
                    simple.#update2(m2, tmp72, 4);
                    simple.#nbc = m2;
                    tmp73 = globalThis.Object.freeze([
                      1,
                      4
                    ]);
                    a = simple.#array1(tmp73, 0.0);
                    simple.#update1(a, 2, 6.0);
                    simple.#pbb = a;
                    tmp74 = globalThis.Object.freeze([
                      1,
                      4
                    ]);
                    a1 = simple.#array1(tmp74, 1.0);
                    simple.#update1(a1, 2, 0.0);
                    simple.#update1(a1, 3, 0.0);
                    simple.#pb = a1;
                    simple.#qb = simple.#pb;
                    tmp75 = simple.#array2(simple.#dimension_all_nodes, 0.0);
                    simple.#all_zero_nodes = tmp75;
                    tmp76 = simple.#array2(simple.#dimension_all_zones, 0.0);
                    simple.#all_zero_zones = tmp76;
                    simple.#dx = 0.000001;
                    simple.#tiny = 0.000001;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
  static #map$tailrec(f, l) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (l instanceof simple.Nil.class) {
      return simple.Nil
    } else if (l instanceof simple.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = simple.#map$tailrec(f, arg$Cons$1$);
      return simple.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sqrt(x) {
    return runtime.safeCall(globalThis.Math.sqrt(x))
  }
  static #cos(x) {
    return runtime.safeCall(globalThis.Math.cos(x))
  }
  static #sin(x) {
    return runtime.safeCall(globalThis.Math.sin(x))
  }
  static #abs(x) {
    return runtime.safeCall(globalThis.Math.abs(x))
  }
  static #trunc(x) {
    return runtime.safeCall(globalThis.Math.trunc(x))
  }
  static #real(i) {
    return i
  }
  static #hd(l) {
    if (l instanceof simple.Cons.class) {
      return l.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #append(l1, l2) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (l1 instanceof simple.Nil.class) {
      return l2
    } else if (l1 instanceof simple.Cons.class) {
      arg$Cons$0$ = l1.head;
      arg$Cons$1$ = l1.tail;
      tmp = simple.#append(arg$Cons$1$, l2);
      return simple.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rev(l) {
    let simple2, l1, acc, inlinedVal;
    simple2 = simple;
    l1 = l;
    acc = simple.Nil;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (l1 instanceof simple2.Nil.class) {
          inlinedVal = acc;
          break inlinedLbl
        } else if (l1 instanceof simple2.Cons.class) {
          arg$Cons$0$ = l1.head;
          arg$Cons$1$ = l1.tail;
          tmp = simple2.Cons(arg$Cons$0$, acc);
          l1 = arg$Cons$1$;
          acc = tmp;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #map(f) {
    return (l) => {
      return simple.#map$tailrec(f, l)
    }
  }
  static #compose(f, g) {
    return lambda$1(f, g)
  }
  static #fillArray(arr, i, n, x) {
    loopLabel: while (true) {
      let scrut, tmp;
      scrut = i == n;
      if (scrut === true) {
        return arr
      }
      arr[i] = x;
      tmp = i + 1;
      i = tmp;
      continue loopLabel;
    }
  }
  static #arrayArray(n, v) {
    let tmp;
    tmp = [];
    return simple.#fillArray(tmp, 0, n, v)
  }
  static #arraySub(a, i) {
    return a.at(i)
  }
  static #arrayUpdate(a, i, v) {
    a[i] = v;
    return runtime.Unit
  }
  static #print_(s) {
    return runtime.Unit
  }
  static #realToString(x) {
    return ""
  }
  static #a2Index(i, s) {
    let element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4;
    if (runtime.Tuple.isArrayLike(i) && i.length === 2) {
      element0$ = runtime.Tuple.get(i, 0);
      element1$ = runtime.Tuple.get(i, 1);
      if (runtime.Tuple.isArrayLike(s) && s.length === 2) {
        element0$1 = runtime.Tuple.get(s, 0);
        element1$1 = runtime.Tuple.get(s, 1);
        tmp = element0$ >= 0;
        if (tmp === true) {
          tmp1 = element0$ < element0$1;
          if (tmp1 === true) {
            tmp2 = element1$ >= 0;
            if (tmp2 === true) {
              tmp3 = element1$ < element1$1;
              if (tmp3 === true) {
                tmp4 = element0$ * element1$1;
                return tmp4 + element1$
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #a2Array(bnds, v) {
    let element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(bnds) && bnds.length === 2) {
      element0$ = runtime.Tuple.get(bnds, 0);
      element1$ = runtime.Tuple.get(bnds, 1);
      tmp = element0$ * element1$;
      tmp1 = simple.#arrayArray(tmp, v);
      return simple.A2(bnds, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #a2Sub(a, indx) {
    let arg$A2$0$, arg$A2$1$, tmp;
    if (a instanceof simple.A2.class) {
      arg$A2$0$ = a.size;
      arg$A2$1$ = a.value;
      tmp = simple.#a2Index(indx, arg$A2$0$);
      return simple.#arraySub(arg$A2$1$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #a2Update(a, i, v) {
    let arg$A2$0$, arg$A2$1$, tmp;
    if (a instanceof simple.A2.class) {
      arg$A2$0$ = a.size;
      arg$A2$1$ = a.value;
      tmp = simple.#a2Index(i, arg$A2$0$);
      return simple.#arrayUpdate(arg$A2$1$, tmp, v)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #fold(f) {
    return (l) => {
      if (l instanceof simple.Nil.class) {
        return lambda53
      } else if (l instanceof simple.Cons.class) {
        return lambda$2(simple, f, l)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #min(x, y) {
    let scrut;
    scrut = x < y;
    if (scrut === true) {
      return x
    }
    return y;
  }
  static #max(x, y) {
    let scrut;
    scrut = x < y;
    if (scrut === true) {
      return y
    }
    return x;
  }
  static #max_list(l) {
    let baseCall, tmp;
    if (l instanceof simple.Cons.class) {
      baseCall = simple.#fold(simple.#max)(l);
      tmp = simple.#hd(l);
      return runtime.safeCall(baseCall(tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #min_list(l) {
    let baseCall, tmp;
    if (l instanceof simple.Cons.class) {
      baseCall = simple.#fold(simple.#min)(l);
      tmp = simple.#hd(l);
      return runtime.safeCall(baseCall(tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sum_list(l) {
    let baseCall;
    if (l instanceof simple.Cons.class) {
      baseCall = simple.#fold(lambda)(l);
      return runtime.safeCall(baseCall(0.0))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #for_(start, delta, endd) {
    return (body) => {
      let scrut, tmp, tmp1;
      tmp = delta > 0;
      if (tmp === true) {
        tmp1 = endd >= start;
      } else {
        tmp1 = false;
      }
      if (tmp1 === true) {
        let delta1, endd1, body1, x, inlinedVal;
        delta1 = delta;
        endd1 = endd;
        body1 = body;
        x = start;
        inlinedLbl: {
          loopLabel: while (true) {
            let scrut1, tmp2;
            scrut1 = x > endd1;
            if (scrut1 === true) {
              inlinedVal = runtime.Unit;
              break inlinedLbl
            }
            runtime.safeCall(body1(x));
            tmp2 = x + delta1;
            x = tmp2;
            continue loopLabel;
          }
        }
        return inlinedVal
      }
      scrut = endd <= start;
      if (scrut === true) {
        let delta1, endd1, body1, x, inlinedVal;
        delta1 = delta;
        endd1 = endd;
        body1 = body;
        x = start;
        inlinedLbl: {
          loopLabel: while (true) {
            let scrut1, tmp2;
            scrut1 = x < endd1;
            if (scrut1 === true) {
              inlinedVal = runtime.Unit;
              break inlinedLbl
            }
            runtime.safeCall(body1(x));
            tmp2 = x + delta1;
            x = tmp2;
            continue loopLabel;
          }
        }
        return inlinedVal
      }
      return runtime.Unit;
    }
  }
  static #from_(n, m) {
    let scrut, tmp, tmp1;
    scrut = n > m;
    if (scrut === true) {
      return simple.Nil
    }
    tmp = n + 1;
    tmp1 = simple.#from_(tmp, m);
    return simple.Cons(n, tmp1);
  }
  static #flatten(l) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (l instanceof simple.Nil.class) {
      return simple.Nil
    } else if (l instanceof simple.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = simple.#flatten(arg$Cons$1$);
      return simple.#append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #pow(x, y) {
    let scrut, tmp, tmp1;
    scrut = y == 0;
    if (scrut === true) {
      return 1.0
    }
    tmp = y - 1;
    tmp1 = simple.#pow(x, tmp);
    return x * tmp1;
  }
  static #array2(bounds, v) {
    let element1$, element0$, element1$1, element0$1, element1$2, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (runtime.Tuple.isArrayLike(bounds) && bounds.length === 2) {
      element0$ = runtime.Tuple.get(bounds, 0);
      element1$ = runtime.Tuple.get(bounds, 1);
      if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 2) {
        element0$1 = runtime.Tuple.get(element0$, 0);
        element1$1 = runtime.Tuple.get(element0$, 1);
        if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
          element0$2 = runtime.Tuple.get(element1$, 0);
          element1$2 = runtime.Tuple.get(element1$, 1);
          tmp = element1$1 - element0$1;
          tmp1 = tmp + 1;
          tmp2 = element1$2 - element0$2;
          tmp3 = tmp2 + 1;
          tmp4 = globalThis.Object.freeze([
            tmp1,
            tmp3
          ]);
          tmp5 = simple.#a2Array(tmp4, v);
          return globalThis.Object.freeze([
            tmp5,
            bounds
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sub2(arr, kl) {
    let element1$, element0$, element1$1, element0$1, element0$2, element0$3, element1$2, element0$4, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(arr) && arr.length === 2) {
      element0$ = runtime.Tuple.get(arr, 0);
      element1$ = runtime.Tuple.get(arr, 1);
      if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
        element0$1 = runtime.Tuple.get(element1$, 0);
        element1$1 = runtime.Tuple.get(element1$, 1);
        if (runtime.Tuple.isArrayLike(element0$1) && element0$1.length === 2) {
          element0$2 = runtime.Tuple.get(element0$1, 0);
          runtime.Tuple.get(element0$1, 1);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 2) {
            element0$3 = runtime.Tuple.get(element1$1, 0);
            runtime.Tuple.get(element1$1, 1);
            if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
              element0$4 = runtime.Tuple.get(kl, 0);
              element1$2 = runtime.Tuple.get(kl, 1);
              tmp = element0$4 - element0$2;
              tmp1 = element1$2 - element0$3;
              tmp2 = globalThis.Object.freeze([
                tmp,
                tmp1
              ]);
              return simple.#a2Sub(element0$, tmp2)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #update2(arr, kl, v) {
    let element1$, element0$, element1$1, element0$1, element0$2, element0$3, element1$2, element0$4, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(arr) && arr.length === 2) {
      element0$ = runtime.Tuple.get(arr, 0);
      element1$ = runtime.Tuple.get(arr, 1);
      if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
        element0$1 = runtime.Tuple.get(element1$, 0);
        element1$1 = runtime.Tuple.get(element1$, 1);
        if (runtime.Tuple.isArrayLike(element0$1) && element0$1.length === 2) {
          element0$2 = runtime.Tuple.get(element0$1, 0);
          runtime.Tuple.get(element0$1, 1);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 2) {
            element0$3 = runtime.Tuple.get(element1$1, 0);
            runtime.Tuple.get(element1$1, 1);
            if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
              element0$4 = runtime.Tuple.get(kl, 0);
              element1$2 = runtime.Tuple.get(kl, 1);
              tmp = element0$4 - element0$2;
              tmp1 = element1$2 - element0$3;
              tmp2 = globalThis.Object.freeze([
                tmp,
                tmp1
              ]);
              return simple.#a2Update(element0$, tmp2, v)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #array1(lu, v) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(lu) && lu.length === 2) {
      element0$ = runtime.Tuple.get(lu, 0);
      element1$ = runtime.Tuple.get(lu, 1);
      tmp = element1$ - element0$;
      tmp1 = tmp + 1;
      tmp2 = simple.#arrayArray(tmp1, v);
      tmp3 = globalThis.Object.freeze([
        element0$,
        element1$
      ]);
      return globalThis.Object.freeze([
        tmp2,
        tmp3
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sub1(arr, i) {
    let element1$, element0$, element0$1, tmp;
    if (runtime.Tuple.isArrayLike(arr) && arr.length === 2) {
      element0$ = runtime.Tuple.get(arr, 0);
      element1$ = runtime.Tuple.get(arr, 1);
      if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
        element0$1 = runtime.Tuple.get(element1$, 0);
        runtime.Tuple.get(element1$, 1);
        tmp = i - element0$1;
        return simple.#arraySub(element0$, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #update1(arr, i, v) {
    let element1$, element0$, element0$1, tmp;
    if (runtime.Tuple.isArrayLike(arr) && arr.length === 2) {
      element0$ = runtime.Tuple.get(arr, 0);
      element1$ = runtime.Tuple.get(arr, 1);
      if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
        element0$1 = runtime.Tuple.get(element1$, 0);
        runtime.Tuple.get(element1$, 1);
        tmp = i - element0$1;
        return simple.#arrayUpdate(element0$, tmp, v)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #bounds1(arr) {
    if (runtime.Tuple.isArrayLike(arr) && arr.length === 2) {
      runtime.Tuple.get(arr, 0);
      return runtime.Tuple.get(arr, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #north(kl) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
      element0$ = runtime.Tuple.get(kl, 0);
      element1$ = runtime.Tuple.get(kl, 1);
      tmp = element0$ - 1;
      return globalThis.Object.freeze([
        tmp,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #south(kl) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
      element0$ = runtime.Tuple.get(kl, 0);
      element1$ = runtime.Tuple.get(kl, 1);
      tmp = element0$ + 1;
      return globalThis.Object.freeze([
        tmp,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #east(kl) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
      element0$ = runtime.Tuple.get(kl, 0);
      element1$ = runtime.Tuple.get(kl, 1);
      tmp = element1$ + 1;
      return globalThis.Object.freeze([
        element0$,
        tmp
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #west(kl) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
      element0$ = runtime.Tuple.get(kl, 0);
      element1$ = runtime.Tuple.get(kl, 1);
      tmp = element1$ - 1;
      return globalThis.Object.freeze([
        element0$,
        tmp
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #northeast(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      let baseCall;
      baseCall = simple.#compose(north, east);
      return runtime.safeCall(baseCall(x))
    }
  }
  static #southeast(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      let baseCall;
      baseCall = simple.#compose(south, east);
      return runtime.safeCall(baseCall(x))
    }
  }
  static #northwest(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      let baseCall;
      baseCall = simple.#compose(north, west);
      return runtime.safeCall(baseCall(x))
    }
  }
  static #southwest(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      let baseCall;
      baseCall = simple.#compose(south, west);
      return runtime.safeCall(baseCall(x))
    }
  }
  static #farnorth(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      let baseCall;
      baseCall = simple.#compose(north, north);
      return runtime.safeCall(baseCall(x))
    }
  }
  static #farsouth(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      let baseCall;
      baseCall = simple.#compose(south, south);
      return runtime.safeCall(baseCall(x))
    }
  }
  static #fareast(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      let baseCall;
      baseCall = simple.#compose(east, east);
      return runtime.safeCall(baseCall(x))
    }
  }
  static #farwest(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      let baseCall;
      baseCall = simple.#compose(west, west);
      return runtime.safeCall(baseCall(x))
    }
  }
  static #zone_A(kl) {
    let element1$, element0$;
    if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
      element0$ = runtime.Tuple.get(kl, 0);
      element1$ = runtime.Tuple.get(kl, 1);
      return globalThis.Object.freeze([
        element0$,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #zone_B(kl) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
      element0$ = runtime.Tuple.get(kl, 0);
      element1$ = runtime.Tuple.get(kl, 1);
      tmp = element0$ + 1;
      return globalThis.Object.freeze([
        tmp,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #zone_C(kl) {
    let element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
      element0$ = runtime.Tuple.get(kl, 0);
      element1$ = runtime.Tuple.get(kl, 1);
      tmp = element0$ + 1;
      tmp1 = element1$ + 1;
      return globalThis.Object.freeze([
        tmp,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #zone_D(kl) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(kl) && kl.length === 2) {
      element0$ = runtime.Tuple.get(kl, 0);
      element1$ = runtime.Tuple.get(kl, 1);
      tmp = element1$ + 1;
      return globalThis.Object.freeze([
        element0$,
        tmp
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #zone_corner_northeast(sub2, update2, pow, north, south, east, west) {
    return (zone) => {
      return runtime.safeCall(north(zone))
    }
  }
  static #zone_corner_northwest(sub2, update2, pow, north, south, east, west) {
    return (zone) => {
      return simple.#northwest(sub2, update2, pow, north, south, east, west)(zone)
    }
  }
  static #zone_corner_southeast(zone) {
    return zone
  }
  static #zone_corner_southwest(sub2, update2, pow, north, south, east, west) {
    return (zone) => {
      return runtime.safeCall(west(zone))
    }
  }
  static #for_interior_nodes(f) {
    let lambda$here;
    lambda$here = lambda$3(simple, f);
    return simple.#for_(simple.#kmin, 1, simple.#kmax)(lambda$here)
  }
  static #for_all_zones(f) {
    let tmp, lambda$here;
    tmp = simple.#kmax + 1;
    lambda$here = lambda$5(simple, f);
    return simple.#for_(simple.#kmin, 1, tmp)(lambda$here)
  }
  static #for_interior_zones(f) {
    let tmp, lambda$here;
    tmp = simple.#kmin + 1;
    lambda$here = lambda$7(simple, f);
    return simple.#for_(tmp, 1, simple.#kmax)(lambda$here)
  }
  static #map_interior_nodes(f) {
    let tmp, tmp1, lambda$here;
    tmp = simple.#from_(simple.#kmin, simple.#kmax);
    lambda$here = lambda$9(simple, f);
    tmp1 = simple.#map(lambda$here)(tmp);
    return simple.#flatten(tmp1)
  }
  static #map_interior_zones(f) {
    let tmp, tmp1, tmp2, lambda$here;
    tmp = simple.#kmin + 1;
    tmp1 = simple.#from_(tmp, simple.#kmax);
    lambda$here = lambda$11(simple, f);
    tmp2 = simple.#map(lambda$here)(tmp1);
    return simple.#flatten(tmp2)
  }
  static #for_north_ward_interior_zones(f) {
    let tmp, lambda$here;
    tmp = simple.#kmin + 1;
    lambda$here = lambda$13(simple, f);
    return simple.#for_(simple.#kmax, -1, tmp)(lambda$here)
  }
  static #for_west_ward_interior_zones(f) {
    let tmp, lambda$here;
    tmp = simple.#kmin + 1;
    lambda$here = lambda$15(simple, f);
    return simple.#for_(tmp, 1, simple.#kmax)(lambda$here)
  }
  static #for_north_zones(f) {
    let tmp, lambda$here;
    tmp = simple.#lmax + 1;
    lambda$here = lambda$17(simple, f);
    return simple.#for_(simple.#lmin, 1, tmp)(lambda$here)
  }
  static #for_south_zones(f) {
    let tmp, lambda$here;
    tmp = simple.#lmin + 1;
    lambda$here = lambda$18(simple, f);
    return simple.#for_(tmp, 1, simple.#lmax)(lambda$here)
  }
  static #for_east_zones(f) {
    let tmp, tmp1, lambda$here;
    tmp = simple.#kmin + 1;
    tmp1 = simple.#kmax + 1;
    lambda$here = lambda$19(simple, f);
    return simple.#for_(tmp, 1, tmp1)(lambda$here)
  }
  static #for_west_zones(f) {
    let tmp, tmp1, lambda$here;
    tmp = simple.#kmin + 1;
    tmp1 = simple.#kmax + 1;
    lambda$here = lambda$20(simple, f);
    return simple.#for_(tmp, 1, tmp1)(lambda$here)
  }
  static #reflect(sub2, update2, pow, north, south, east, west) {
    return (dir) => {
      return (node) => {
        return (a) => {
          let tmp;
          tmp = runtime.safeCall(dir(node));
          return runtime.safeCall(sub2(a, tmp))
        }
      }
    }
  }
  static #reflect_north(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      return simple.#reflect(sub2, update2, pow, north, south, east, west)(north)(x)
    }
  }
  static #reflect_south(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      return simple.#reflect(sub2, update2, pow, north, south, east, west)(south)(x)
    }
  }
  static #reflect_east(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      return simple.#reflect(sub2, update2, pow, north, south, east, west)(east)(x)
    }
  }
  static #reflect_west(sub2, update2, pow, north, south, east, west) {
    return (x) => {
      return simple.#reflect(sub2, update2, pow, north, south, east, west)(west)(x)
    }
  }
  static #for_north_nodes(f) {
    let tmp, lambda$here;
    tmp = simple.#lmax - 1;
    lambda$here = lambda$21(simple, f);
    return simple.#for_(simple.#lmin, 1, tmp)(lambda$here)
  }
  static #for_south_nodes(f) {
    let tmp, lambda$here;
    tmp = simple.#lmax - 1;
    lambda$here = lambda$22(simple, f);
    return simple.#for_(simple.#lmin, 1, tmp)(lambda$here)
  }
  static #for_east_nodes(f) {
    let tmp, lambda$here;
    tmp = simple.#kmax - 1;
    lambda$here = lambda$23(simple, f);
    return simple.#for_(simple.#kmin, 1, tmp)(lambda$here)
  }
  static #for_west_nodes(f) {
    let tmp, lambda$here;
    tmp = simple.#kmax - 1;
    lambda$here = lambda$24(simple, f);
    return simple.#for_(simple.#kmin, 1, tmp)(lambda$here)
  }
  static #make_position_matrix(sub2, update2, pow, north, south, east, west) {
    return (interior_function) => {
      let r_p, z_p, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, n, n1, n2, n3, n4, n5, n6, n7, element1$, element0$, element1$1, element0$1, element1$2, element0$2, element1$3, element0$3, element1$4, element0$4, element1$5, element0$5, element1$6, element0$6, element1$7, element0$7;
      r_p = simple.#array2(simple.#dimension_all_nodes, 0.0);
      z_p = simple.#array2(simple.#dimension_all_nodes, 0.0);
      lambda$here = lambda$29(update2, interior_function, r_p, z_p);
      simple.#for_interior_nodes(lambda$here);
      lambda$here1 = lambda$28(simple, sub2, update2, pow, north, south, east, west, r_p, z_p);
      simple.#for_north_nodes(lambda$here1);
      lambda$here2 = lambda$27(simple, sub2, update2, pow, north, south, east, west, r_p, z_p);
      simple.#for_south_nodes(lambda$here2);
      lambda$here3 = lambda$26(simple, sub2, update2, pow, north, south, east, west, r_p, z_p);
      simple.#for_east_nodes(lambda$here3);
      lambda$here4 = lambda$25(simple, sub2, update2, pow, north, south, east, west, r_p, z_p);
      simple.#for_west_nodes(lambda$here4);
      tmp = simple.#southwest(sub2, update2, pow, north, south, east, west);
      tmp1 = simple.#farsouth(sub2, update2, pow, north, south, east, west);
      tmp2 = reflect_node(simple, sub2, update2, pow, north, south, east, west, r_p, z_p, south, tmp, tmp1, simple.#west_of_north_east);
      n = simple.#west_of_north_east;
      if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
        element0$7 = runtime.Tuple.get(tmp2, 0);
        element1$7 = runtime.Tuple.get(tmp2, 1);
        runtime.safeCall(update2(r_p, n, element0$7));
        runtime.safeCall(update2(z_p, n, element1$7));
        tmp3 = simple.#northwest(sub2, update2, pow, north, south, east, west);
        tmp4 = simple.#farnorth(sub2, update2, pow, north, south, east, west);
        tmp5 = reflect_node(simple, sub2, update2, pow, north, south, east, west, r_p, z_p, north, tmp3, tmp4, simple.#west_of_south_east);
        n1 = simple.#west_of_south_east;
        if (runtime.Tuple.isArrayLike(tmp5) && tmp5.length === 2) {
          element0$6 = runtime.Tuple.get(tmp5, 0);
          element1$6 = runtime.Tuple.get(tmp5, 1);
          runtime.safeCall(update2(r_p, n1, element0$6));
          runtime.safeCall(update2(z_p, n1, element1$6));
          tmp6 = simple.#northwest(sub2, update2, pow, north, south, east, west);
          tmp7 = simple.#farwest(sub2, update2, pow, north, south, east, west);
          tmp8 = reflect_node(simple, sub2, update2, pow, north, south, east, west, r_p, z_p, west, tmp6, tmp7, simple.#north_of_south_east);
          n2 = simple.#north_of_south_east;
          if (runtime.Tuple.isArrayLike(tmp8) && tmp8.length === 2) {
            element0$5 = runtime.Tuple.get(tmp8, 0);
            element1$5 = runtime.Tuple.get(tmp8, 1);
            runtime.safeCall(update2(r_p, n2, element0$5));
            runtime.safeCall(update2(z_p, n2, element1$5));
            tmp9 = simple.#northeast(sub2, update2, pow, north, south, east, west);
            tmp10 = simple.#fareast(sub2, update2, pow, north, south, east, west);
            tmp11 = reflect_node(simple, sub2, update2, pow, north, south, east, west, r_p, z_p, east, tmp9, tmp10, simple.#north_of_south_west);
            n3 = simple.#north_of_south_west;
            if (runtime.Tuple.isArrayLike(tmp11) && tmp11.length === 2) {
              element0$4 = runtime.Tuple.get(tmp11, 0);
              element1$4 = runtime.Tuple.get(tmp11, 1);
              runtime.safeCall(update2(r_p, n3, element0$4));
              runtime.safeCall(update2(z_p, n3, element1$4));
              tmp12 = simple.#southwest(sub2, update2, pow, north, south, east, west);
              tmp13 = simple.#farwest(sub2, update2, pow, north, south, east, west);
              tmp14 = reflect_node(simple, sub2, update2, pow, north, south, east, west, r_p, z_p, tmp12, west, tmp13, simple.#north_east_corner);
              n4 = simple.#north_east_corner;
              if (runtime.Tuple.isArrayLike(tmp14) && tmp14.length === 2) {
                element0$3 = runtime.Tuple.get(tmp14, 0);
                element1$3 = runtime.Tuple.get(tmp14, 1);
                runtime.safeCall(update2(r_p, n4, element0$3));
                runtime.safeCall(update2(z_p, n4, element1$3));
                tmp15 = simple.#northwest(sub2, update2, pow, north, south, east, west);
                tmp16 = simple.#farwest(sub2, update2, pow, north, south, east, west);
                tmp17 = reflect_node(simple, sub2, update2, pow, north, south, east, west, r_p, z_p, tmp15, west, tmp16, simple.#south_east_corner);
                n5 = simple.#south_east_corner;
                if (runtime.Tuple.isArrayLike(tmp17) && tmp17.length === 2) {
                  element0$2 = runtime.Tuple.get(tmp17, 0);
                  element1$2 = runtime.Tuple.get(tmp17, 1);
                  runtime.safeCall(update2(r_p, n5, element0$2));
                  runtime.safeCall(update2(z_p, n5, element1$2));
                  tmp18 = simple.#southeast(sub2, update2, pow, north, south, east, west);
                  tmp19 = simple.#farsouth(sub2, update2, pow, north, south, east, west);
                  tmp20 = reflect_node(simple, sub2, update2, pow, north, south, east, west, r_p, z_p, tmp18, south, tmp19, simple.#north_west_corner);
                  n6 = simple.#north_west_corner;
                  if (runtime.Tuple.isArrayLike(tmp20) && tmp20.length === 2) {
                    element0$1 = runtime.Tuple.get(tmp20, 0);
                    element1$1 = runtime.Tuple.get(tmp20, 1);
                    runtime.safeCall(update2(r_p, n6, element0$1));
                    runtime.safeCall(update2(z_p, n6, element1$1));
                    tmp21 = simple.#northeast(sub2, update2, pow, north, south, east, west);
                    tmp22 = simple.#fareast(sub2, update2, pow, north, south, east, west);
                    tmp23 = reflect_node(simple, sub2, update2, pow, north, south, east, west, r_p, z_p, tmp21, east, tmp22, simple.#south_west_corner);
                    n7 = simple.#south_west_corner;
                    if (runtime.Tuple.isArrayLike(tmp23) && tmp23.length === 2) {
                      element0$ = runtime.Tuple.get(tmp23, 0);
                      element1$ = runtime.Tuple.get(tmp23, 1);
                      runtime.safeCall(update2(r_p, n7, element0$));
                      runtime.safeCall(update2(z_p, n7, element1$));
                      return globalThis.Object.freeze([
                        r_p,
                        z_p
                      ])
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #zone_area_vol(sub2, update2, pow, north, south, east, west) {
    return (rz, zone) => {
      let r1, z1, r2, z2, r3, z3, r4, z4, area1, radius1, volume1, area2, radius2, volume2, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25;
      if (runtime.Tuple.isArrayLike(rz) && rz.length === 2) {
        element0$ = runtime.Tuple.get(rz, 0);
        element1$ = runtime.Tuple.get(rz, 1);
        tmp = simple.#zone_corner_southwest(sub2, update2, pow, north, south, east, west)(zone);
        r1 = runtime.safeCall(sub2(element0$, tmp));
        tmp1 = simple.#zone_corner_southwest(sub2, update2, pow, north, south, east, west)(zone);
        z1 = runtime.safeCall(sub2(element1$, tmp1));
        tmp2 = simple.#zone_corner_southeast(zone);
        r2 = runtime.safeCall(sub2(element0$, tmp2));
        tmp3 = simple.#zone_corner_southeast(zone);
        z2 = runtime.safeCall(sub2(element1$, tmp3));
        tmp4 = simple.#zone_corner_northeast(sub2, update2, pow, north, south, east, west)(zone);
        r3 = runtime.safeCall(sub2(element0$, tmp4));
        tmp5 = simple.#zone_corner_northeast(sub2, update2, pow, north, south, east, west)(zone);
        z3 = runtime.safeCall(sub2(element1$, tmp5));
        tmp6 = simple.#zone_corner_northwest(sub2, update2, pow, north, south, east, west)(zone);
        r4 = runtime.safeCall(sub2(element0$, tmp6));
        tmp7 = simple.#zone_corner_northwest(sub2, update2, pow, north, south, east, west)(zone);
        z4 = runtime.safeCall(sub2(element1$, tmp7));
        tmp8 = r2 - r1;
        tmp9 = z3 - z1;
        tmp10 = tmp8 * tmp9;
        tmp11 = r3 - r2;
        tmp12 = z3 - z2;
        tmp13 = tmp11 * tmp12;
        area1 = tmp10 - tmp13;
        tmp14 = r1 + r2;
        tmp15 = tmp14 + r3;
        radius1 = 0.3333 * tmp15;
        volume1 = area1 * radius1;
        tmp16 = r3 - r1;
        tmp17 = z4 - z3;
        tmp18 = tmp16 * tmp17;
        tmp19 = r4 - r3;
        tmp20 = z3 - z1;
        tmp21 = tmp19 * tmp20;
        area2 = tmp18 - tmp21;
        tmp22 = r1 + r3;
        tmp23 = tmp22 + r4;
        radius2 = 0.3333 * tmp23;
        volume2 = area2 * radius2;
        tmp24 = area1 + area2;
        tmp25 = volume1 + volume2;
        return globalThis.Object.freeze([
          tmp24,
          tmp25
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #make_velocity(sub2, update2, pow, north, south, east, west) {
    return (uw, rz, p, q, alpha, rho, delta_t) => {
      let uu, ww, element1$, element0$, element1$1, element0$1, lambda$here;
      if (runtime.Tuple.isArrayLike(uw) && uw.length === 2) {
        element0$ = runtime.Tuple.get(uw, 0);
        element1$ = runtime.Tuple.get(uw, 1);
        if (runtime.Tuple.isArrayLike(rz) && rz.length === 2) {
          element0$1 = runtime.Tuple.get(rz, 0);
          element1$1 = runtime.Tuple.get(rz, 1);
          uu = simple.#array2(simple.#dimension_interior_nodes, 0.0);
          ww = simple.#array2(simple.#dimension_interior_nodes, 0.0);
          lambda$here = lambda$31(simple, sub2, update2, north, south, east, west, p, q, alpha, rho, delta_t, element0$, element1$, element0$1, element1$1, uu, ww);
          simple.#for_interior_nodes(lambda$here);
          return globalThis.Object.freeze([
            uu,
            ww
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #make_position(sub2, update2, pow, north, south, east, west) {
    return (rz, delta_t, uw_p) => {
      let element1$, element0$, element1$1, element0$1, interior_position$here;
      if (runtime.Tuple.isArrayLike(rz) && rz.length === 2) {
        element0$ = runtime.Tuple.get(rz, 0);
        element1$ = runtime.Tuple.get(rz, 1);
        if (runtime.Tuple.isArrayLike(uw_p) && uw_p.length === 2) {
          element0$1 = runtime.Tuple.get(uw_p, 0);
          element1$1 = runtime.Tuple.get(uw_p, 1);
          interior_position$here = interior_position$(sub2, delta_t, element0$, element1$, element0$1, element1$1);
          return simple.#make_position_matrix(sub2, update2, pow, north, south, east, west)(interior_position$here)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #make_area_density_volume(sub2, update2, pow, north, south, east, west) {
    return (rho, s, x_p) => {
      let alpha_p, s_p, rho_p, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
      alpha_p = simple.#array2(simple.#dimension_all_zones, 0.0);
      s_p = simple.#array2(simple.#dimension_all_zones, 0.0);
      rho_p = simple.#array2(simple.#dimension_all_zones, 0.0);
      lambda$here = lambda$37(simple, sub2, update2, pow, north, south, east, west, rho, s, x_p, alpha_p, s_p, rho_p);
      simple.#for_interior_zones(lambda$here);
      lambda$here1 = lambda$36(simple, sub2, update2, pow, north, south, east, west, alpha_p, s_p, rho_p);
      simple.#for_south_zones(lambda$here1);
      lambda$here2 = lambda$35(simple, sub2, update2, pow, north, south, east, west, alpha_p, s_p, rho_p);
      simple.#for_east_zones(lambda$here2);
      lambda$here3 = lambda$34(simple, sub2, update2, pow, north, south, east, west, alpha_p, s_p, rho_p);
      simple.#for_west_zones(lambda$here3);
      lambda$here4 = lambda$33(simple, sub2, update2, pow, north, south, east, west, alpha_p, s_p, rho_p);
      simple.#for_north_zones(lambda$here4);
      return globalThis.Object.freeze([
        alpha_p,
        rho_p,
        s_p
      ])
    }
  }
  static #make_viscosity(sub2, update2, pow, north, south, east, west) {
    return (p, uw_p, rz_p, alpha_p, rho_p) => {
      let q_p, d, element1$, element0$, element1$1, element0$1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
      if (runtime.Tuple.isArrayLike(uw_p) && uw_p.length === 2) {
        element0$ = runtime.Tuple.get(uw_p, 0);
        element1$ = runtime.Tuple.get(uw_p, 1);
        if (runtime.Tuple.isArrayLike(rz_p) && rz_p.length === 2) {
          element0$1 = runtime.Tuple.get(rz_p, 0);
          element1$1 = runtime.Tuple.get(rz_p, 1);
          q_p = simple.#array2(simple.#dimension_all_zones, 0.0);
          d = simple.#array2(simple.#dimension_all_zones, 0.0);
          lambda$here = lambda$42(simple, sub2, update2, pow, north, south, east, west, p, alpha_p, rho_p, element0$, element1$, element1$1, element0$1, q_p, d);
          simple.#for_interior_zones(lambda$here);
          lambda$here1 = lambda$41(simple, sub2, update2, north, q_p);
          simple.#for_south_zones(lambda$here1);
          lambda$here2 = lambda$40(simple, sub2, update2, west, q_p);
          simple.#for_east_zones(lambda$here2);
          lambda$here3 = lambda$39(simple, sub2, update2, east, q_p);
          simple.#for_west_zones(lambda$here3);
          lambda$here4 = lambda$38(simple, sub2, update2, south, q_p);
          simple.#for_north_zones(lambda$here4);
          return globalThis.Object.freeze([
            q_p,
            d
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #polynomial(sub2, update2, pow, north, south, east, west) {
    return (g, degree, rho_table, theta_table, rho_value, theta_value) => {
      let rho_index, theta_index, a, tmp, tmp1, tmp2, lambda$here;
      rho_index = table_search(simple, rho_table, rho_value);
      theta_index = table_search(simple, theta_table, theta_value);
      tmp = globalThis.Object.freeze([
        rho_index,
        theta_index
      ]);
      a = runtime.safeCall(sub2(g, tmp));
      tmp1 = from_(simple, 0, degree);
      lambda$here = lambda$43(simple, sub2, pow, degree, rho_value, theta_value, a);
      tmp2 = simple.#map(lambda$here)(tmp1);
      return simple.#sum_list(tmp2)
    }
  }
  static #zonal_pressure(sub2, update2, pow, north, south, east, west) {
    return (rho_value, theta_value) => {
      let scrut, element3$, element2$, element1$, element0$;
      scrut = simple.#extract_pressure_tables_from_constants;
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        element2$ = runtime.Tuple.get(scrut, 2);
        element3$ = runtime.Tuple.get(scrut, 3);
        return simple.#polynomial(sub2, update2, pow, north, south, east, west)(element0$, element1$, element2$, element3$, rho_value, theta_value)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #zonal_energy(sub2, update2, pow, north, south, east, west) {
    return (rho_value, theta_value) => {
      let scrut, element3$, element2$, element1$, element0$;
      scrut = simple.#extract_energy_tables_from_constants;
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        element2$ = runtime.Tuple.get(scrut, 2);
        element3$ = runtime.Tuple.get(scrut, 3);
        return simple.#polynomial(sub2, update2, pow, north, south, east, west)(element0$, element1$, element2$, element3$, rho_value, theta_value)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #newton_raphson(f, x) {
    let tmp, simple2, f1, x1, fx, inlinedVal;
    tmp = runtime.safeCall(f(x));
    simple2 = simple;
    f1 = f;
    x1 = x;
    fx = tmp;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, fxdx, denom, scrut1, tmp1, tmp2, tmp3, tmp4;
        scrut = fx > simple2.#tiny;
        if (scrut === true) {
          tmp1 = x1 + simple2.#dx;
          fxdx = runtime.safeCall(f1(tmp1));
          denom = fxdx - fx;
          scrut1 = denom < simple2.#tiny;
          if (scrut1 === true) {
            fx = simple2.#tiny;
            continue loopLabel
          }
          tmp2 = fx * simple2.#dx;
          tmp3 = tmp2 / denom;
          tmp4 = x1 - tmp3;
          x1 = tmp4;
          fx = fxdx;
          continue loopLabel;
        }
        inlinedVal = x1;
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #make_temperature(sub2, update2, pow, north, south, east, west) {
    return (p, epsilon, rho, theta, rho_prime, q_prime) => {
      let m, lambda$here;
      m = simple.#array2(simple.#dimension_all_zones, simple.#constant_heat_source);
      lambda$here = lambda$45(simple, sub2, update2, pow, north, south, east, west, p, epsilon, rho, theta, rho_prime, q_prime, m);
      simple.#for_interior_zones(lambda$here);
      return m
    }
  }
  static #make_cc(sub2, update2, pow, north, south, east, west) {
    return (alpha_prime, theta_hat) => {
      let cc, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
      cc = simple.#array2(simple.#dimension_all_zones, 0.0);
      lambda$here = lambda$50(simple, sub2, update2, pow, alpha_prime, theta_hat, cc);
      simple.#for_interior_zones(lambda$here);
      lambda$here1 = lambda$49(simple, sub2, update2, pow, north, south, east, west, cc);
      simple.#for_south_zones(lambda$here1);
      lambda$here2 = lambda$48(simple, sub2, update2, pow, north, south, east, west, cc);
      simple.#for_west_zones(lambda$here2);
      lambda$here3 = lambda$47(simple, sub2, update2, pow, north, south, east, west, cc);
      simple.#for_east_zones(lambda$here3);
      lambda$here4 = lambda$46(simple, sub2, update2, pow, north, south, east, west, cc);
      simple.#for_north_zones(lambda$here4);
      return cc
    }
  }
  static #make_sigma(sub2, update2, pow, north, south, east, west) {
    return (deltat, rho_prime, alpha_prime) => {
      let m, scrut, tmp, tmp1, tmp2, lambda$here;
      m = simple.#array2(simple.#dimension_interior_zones, 0.0);
      scrut = simple.#trace.value;
      if (scrut === true) {
        tmp = simple.#realToString(deltat);
        tmp1 = "\t\tmake_sigma:deltat = " + tmp;
        tmp2 = tmp1 + "\n";
        simple.#print_(tmp2);
      }
      lambda$here = lambda$51(simple, sub2, update2, deltat, rho_prime, alpha_prime, m);
      simple.#for_interior_zones(lambda$here);
      return m
    }
  }
  static #make_gamma(sub2, update2, pow, north, south, east, west) {
    return (rz_prime, cc, succeeding, adjacent) => {
      let m, element1$, element0$, lambda$here;
      if (runtime.Tuple.isArrayLike(rz_prime) && rz_prime.length === 2) {
        element0$ = runtime.Tuple.get(rz_prime, 0);
        element1$ = runtime.Tuple.get(rz_prime, 1);
        m = simple.#array2(simple.#dimension_all_zones, 0.0);
        lambda$here = lambda$52(simple, sub2, update2, pow, cc, succeeding, adjacent, element0$, element1$, m);
        simple.#for_interior_zones(lambda$here);
        return m
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #make_ab(sub2, update2, pow, north, south, east, west) {
    return (theta, sigma, gamma_, preceding) => {
      let a, b, f, lambda$here;
      a = simple.#array2(simple.#dimension_all_zones, 0.0);
      b = simple.#array2(simple.#dimension_all_zones, 0.0);
      f = f$(sub2, update2, theta, b);
      simple.#for_north_zones(f);
      simple.#for_south_zones(f);
      simple.#for_west_zones(f);
      simple.#for_east_zones(f);
      lambda$here = lambda$53(sub2, update2, theta, sigma, gamma_, preceding, a, b);
      simple.#for_interior_zones(lambda$here);
      return globalThis.Object.freeze([
        a,
        b
      ])
    }
  }
  static #make_theta(sub2, update2, pow, north, south, east, west) {
    return (a, b, succeeding, int_zones) => {
      let theta, lambda$here;
      theta = simple.#array2(simple.#dimension_all_zones, simple.#constant_heat_source);
      lambda$here = lambda$54(sub2, update2, a, b, succeeding, theta);
      runtime.safeCall(int_zones(lambda$here));
      return theta
    }
  }
  static #compute_heat_conduction(sub2, update2, pow, north, south, east, west) {
    return (theta_hat, deltat, x_p, alpha_p, rho_p) => {
      let sigma, scrut, cc, scrut1, gamma_k, scrut2, scrut3, scrut4, theta_k, scrut5, gamma_l, scrut6, scrut7, scrut8, theta_l, scrut9, element1$, element0$, element1$1, element0$1;
      sigma = simple.#make_sigma(sub2, update2, pow, north, south, east, west)(deltat, rho_p, alpha_p);
      scrut = simple.#trace.value;
      if (scrut === true) {
        simple.#print_("\tdone make_sigma(sub2, update2, pow, north, south, east, west)\n");
      }
      cc = simple.#make_cc(sub2, update2, pow, north, south, east, west)(alpha_p, theta_hat);
      scrut1 = simple.#trace.value;
      if (scrut1 === true) {
        simple.#print_("\tdone make_cc(sub2, update2, pow, north, south, east, west)\n");
      }
      gamma_k = simple.#make_gamma(sub2, update2, pow, north, south, east, west)(x_p, cc, north, east);
      scrut2 = simple.#trace.value;
      if (scrut2 === true) {
        simple.#print_("\tdone make_gamma(sub2, update2, pow, north, south, east, west)\n");
      }
      scrut3 = simple.#make_ab(sub2, update2, pow, north, south, east, west)(theta_hat, sigma, gamma_k, north);
      if (runtime.Tuple.isArrayLike(scrut3) && scrut3.length === 2) {
        element0$ = runtime.Tuple.get(scrut3, 0);
        element1$ = runtime.Tuple.get(scrut3, 1);
        scrut4 = simple.#trace.value;
        if (scrut4 === true) {
          simple.#print_("\tdone make_ab(sub2, update2, pow, north, south, east, west)\n");
        }
        theta_k = simple.#make_theta(sub2, update2, pow, north, south, east, west)(element0$, element1$, south, simple.#for_north_ward_interior_zones);
        scrut5 = simple.#trace.value;
        if (scrut5 === true) {
          simple.#print_("\tdone make_theta(sub2, update2, pow, north, south, east, west)\n");
        }
        gamma_l = simple.#make_gamma(sub2, update2, pow, north, south, east, west)(x_p, cc, west, south);
        scrut6 = simple.#trace.value;
        if (scrut6 === true) {
          simple.#print_("\tdone make_gamma(sub2, update2, pow, north, south, east, west)\n");
        }
        scrut7 = simple.#make_ab(sub2, update2, pow, north, south, east, west)(theta_k, sigma, gamma_l, west);
        if (runtime.Tuple.isArrayLike(scrut7) && scrut7.length === 2) {
          element0$1 = runtime.Tuple.get(scrut7, 0);
          element1$1 = runtime.Tuple.get(scrut7, 1);
          scrut8 = simple.#trace.value;
          if (scrut8 === true) {
            simple.#print_("\tdone make_ab(sub2, update2, pow, north, south, east, west)\n");
          }
          theta_l = simple.#make_theta(sub2, update2, pow, north, south, east, west)(element0$1, element1$1, east, simple.#for_west_ward_interior_zones);
          scrut9 = simple.#trace.value;
          if (scrut9 === true) {
            simple.#print_("\tdone make_theta(sub2, update2, pow, north, south, east, west)\n");
            return globalThis.Object.freeze([
              theta_l,
              gamma_k,
              gamma_l
            ])
          }
          return globalThis.Object.freeze([
            theta_l,
            gamma_k,
            gamma_l
          ]);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #make_pressure(sub2, update2, pow, north, south, east, west) {
    return (rho_p, theta_p) => {
      let p, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
      p = simple.#array2(simple.#dimension_all_zones, 0.0);
      lambda$here = lambda$59(simple, sub2, update2, pow, north, south, east, west, rho_p, theta_p, p);
      simple.#for_interior_zones(lambda$here);
      lambda$here1 = lambda$58(simple, sub2, update2, north, p);
      simple.#for_south_zones(lambda$here1);
      lambda$here2 = lambda$57(simple, sub2, update2, west, p);
      simple.#for_east_zones(lambda$here2);
      lambda$here3 = lambda$56(simple, sub2, update2, east, p);
      simple.#for_west_zones(lambda$here3);
      lambda$here4 = lambda$55(simple, sub2, update2, south, p);
      simple.#for_north_zones(lambda$here4);
      return p
    }
  }
  static #make_energy(sub2, update2, pow, north, south, east, west) {
    return (rho_p, theta_p) => {
      let epsilon_p, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
      epsilon_p = simple.#array2(simple.#dimension_all_zones, 0.0);
      lambda$here = lambda$64(simple, sub2, update2, pow, north, south, east, west, rho_p, theta_p, epsilon_p);
      simple.#for_interior_zones(lambda$here);
      lambda$here1 = lambda$63(simple, sub2, update2, pow, north, south, east, west, epsilon_p);
      simple.#for_south_zones(lambda$here1);
      lambda$here2 = lambda$62(simple, sub2, update2, pow, north, south, east, west, epsilon_p);
      simple.#for_west_zones(lambda$here2);
      lambda$here3 = lambda$61(simple, sub2, update2, pow, north, south, east, west, epsilon_p);
      simple.#for_east_zones(lambda$here3);
      lambda$here4 = lambda$60(simple, sub2, update2, pow, north, south, east, west, epsilon_p);
      simple.#for_north_zones(lambda$here4);
      return epsilon_p
    }
  }
  static #compute_energy_error(sub2, update2, pow, north, south, east, west) {
    return (uw_p, rz_p, p_p, q_p, epsilon_p, theta_p, rho_p, alpha_p, gamma_k, gamma_l, deltat) => {
      let internal_energy, kinetic_energy, north_line, south_line, east_line, west_line, w1, w2, w3, w4, boundary_work, k_north, north_flow, k_south, south_flow, l_east, east_flow, l_west, west_flow, h1, h2, h3, h4, boundary_heat, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, lambda$here, kinetic$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, work_done$here, lambda$here5, lambda$here6, lambda$here7, lambda$here8;
      if (runtime.Tuple.isArrayLike(uw_p) && uw_p.length === 2) {
        element0$ = runtime.Tuple.get(uw_p, 0);
        element1$ = runtime.Tuple.get(uw_p, 1);
        if (runtime.Tuple.isArrayLike(rz_p) && rz_p.length === 2) {
          element0$1 = runtime.Tuple.get(rz_p, 0);
          element1$1 = runtime.Tuple.get(rz_p, 1);
          lambda$here = lambda$73(sub2, epsilon_p, rho_p, alpha_p);
          tmp = simple.#map_interior_zones(lambda$here);
          internal_energy = simple.#sum_list(tmp);
          kinetic$here = kinetic$(simple, sub2, pow, rho_p, alpha_p, element0$, element1$);
          tmp1 = simple.#map_interior_nodes(kinetic$here);
          kinetic_energy = simple.#sum_list(tmp1);
          tmp2 = simple.#lmin + 1;
          tmp3 = from_1(simple, tmp2, simple.#lmax);
          lambda$here1 = lambda$72(simple, west);
          north_line = simple.#map(lambda$here1)(tmp3);
          tmp4 = simple.#lmin + 1;
          tmp5 = from_1(simple, tmp4, simple.#lmax);
          lambda$here2 = lambda$71(simple, west);
          south_line = simple.#map(lambda$here2)(tmp5);
          tmp6 = simple.#kmin + 1;
          tmp7 = from_1(simple, tmp6, simple.#kmax);
          lambda$here3 = lambda$70(simple, south);
          east_line = simple.#map(lambda$here3)(tmp7);
          tmp8 = simple.#kmin + 1;
          tmp9 = from_1(simple, tmp8, simple.#kmax);
          lambda$here4 = lambda$69(simple, south);
          west_line = simple.#map(lambda$here4)(tmp9);
          work_done$here = work_done$(sub2, p_p, q_p, deltat, element1$1, element0$1);
          tmp10 = simple.#map(work_done$here)(north_line);
          w1 = simple.#sum_list(tmp10);
          work_done$here = work_done$(sub2, p_p, q_p, deltat, element1$1, element0$1);
          tmp11 = simple.#map(work_done$here)(south_line);
          w2 = simple.#sum_list(tmp11);
          work_done$here = work_done$(sub2, p_p, q_p, deltat, element1$1, element0$1);
          tmp12 = simple.#map(work_done$here)(east_line);
          w3 = simple.#sum_list(tmp12);
          work_done$here = work_done$(sub2, p_p, q_p, deltat, element1$1, element0$1);
          tmp13 = simple.#map(work_done$here)(west_line);
          w4 = simple.#sum_list(tmp13);
          tmp14 = w1 + w2;
          tmp15 = tmp14 + w3;
          boundary_work = tmp15 + w4;
          k_north = simple.#kmin + 1;
          tmp16 = simple.#lmin + 1;
          tmp17 = from_1(simple, tmp16, simple.#lmax);
          lambda$here5 = lambda$68(north, k_north);
          north_flow = simple.#map(lambda$here5)(tmp17);
          k_south = simple.#kmax;
          tmp18 = simple.#lmin + 2;
          tmp19 = simple.#lmax - 1;
          tmp20 = from_1(simple, tmp18, tmp19);
          lambda$here6 = lambda$67(south, k_south);
          south_flow = simple.#map(lambda$here6)(tmp20);
          l_east = simple.#lmax;
          tmp21 = simple.#kmin + 2;
          tmp22 = from_1(simple, tmp21, simple.#kmax);
          lambda$here7 = lambda$66(east, l_east);
          east_flow = simple.#map(lambda$here7)(tmp22);
          l_west = simple.#lmin + 1;
          tmp23 = simple.#kmin + 2;
          tmp24 = from_1(simple, tmp23, simple.#kmax);
          lambda$here8 = lambda$65(west, l_west);
          west_flow = simple.#map(lambda$here8)(tmp24);
          tmp25 = heat_flow(sub2, theta_p, deltat, gamma_k);
          tmp26 = simple.#map(tmp25)(north_flow);
          h1 = simple.#sum_list(tmp26);
          tmp27 = heat_flow(sub2, theta_p, deltat, gamma_k);
          tmp28 = simple.#map(tmp27)(south_flow);
          h2 = simple.#sum_list(tmp28);
          tmp29 = heat_flow(sub2, theta_p, deltat, gamma_l);
          tmp30 = simple.#map(tmp29)(east_flow);
          h3 = simple.#sum_list(tmp30);
          tmp31 = heat_flow(sub2, theta_p, deltat, gamma_l);
          tmp32 = simple.#map(tmp31)(west_flow);
          h4 = simple.#sum_list(tmp32);
          tmp33 = h1 + h2;
          tmp34 = tmp33 + h3;
          boundary_heat = tmp34 + h4;
          tmp35 = internal_energy + kinetic_energy;
          tmp36 = tmp35 - boundary_heat;
          return tmp36 - boundary_work
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #compute_time_step(sub2, update2, pow, north, south, east, west) {
    return (d, theta_hat, theta_p) => {
      let deltat_courant, deltat_conduct, deltat_minimum, tmp, tmp1, lambda$here, lambda$here1;
      lambda$here = lambda$75(sub2, d);
      tmp = simple.#map_interior_zones(lambda$here);
      deltat_courant = simple.#min_list(tmp);
      lambda$here1 = lambda$74(simple, sub2, theta_hat, theta_p);
      tmp1 = simple.#map_interior_zones(lambda$here1);
      deltat_conduct = simple.#max_list(tmp1);
      deltat_minimum = simple.#min(deltat_courant, deltat_conduct);
      return simple.#min(simple.#deltat_maximum, deltat_minimum)
    }
  }
  static #compute_initial_state(sub2, update2, pow, north, south, east, west) {
    return () => {
      let v, x, a2, s2, rr, tt, p, q, epsilon, interior_position$here, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, lambda$here5, lambda$here6;
      v = globalThis.Object.freeze([
        simple.#all_zero_nodes,
        simple.#all_zero_nodes
      ]);
      interior_position$here = interior_position$1(simple);
      x = simple.#make_position_matrix(sub2, update2, pow, north, south, east, west)(interior_position$here);
      a2 = simple.#array2(simple.#dimension_all_zones, 0.0);
      s2 = simple.#array2(simple.#dimension_all_zones, 0.0);
      lambda$here = lambda$82(simple, sub2, update2, pow, north, south, east, west, x, a2, s2);
      simple.#for_interior_zones(lambda$here);
      lambda$here1 = lambda$81(simple, sub2, update2, pow, north, south, east, west, a2, s2);
      simple.#for_south_zones(lambda$here1);
      lambda$here2 = lambda$80(simple, sub2, update2, pow, north, south, east, west, a2, s2);
      simple.#for_east_zones(lambda$here2);
      lambda$here3 = lambda$79(simple, sub2, update2, pow, north, south, east, west, a2, s2);
      simple.#for_west_zones(lambda$here3);
      lambda$here4 = lambda$78(simple, sub2, update2, pow, north, south, east, west, a2, s2);
      simple.#for_north_zones(lambda$here4);
      rr = simple.#array2(simple.#dimension_all_zones, 0.0);
      lambda$here5 = lambda$77(update2, rr);
      simple.#for_all_zones(lambda$here5);
      tt = simple.#array2(simple.#dimension_all_zones, simple.#constant_heat_source);
      lambda$here6 = lambda$76(update2, tt);
      simple.#for_interior_zones(lambda$here6);
      p = simple.#make_pressure(sub2, update2, pow, north, south, east, west)(rr, tt);
      q = simple.#all_zero_zones;
      epsilon = simple.#make_energy(sub2, update2, pow, north, south, east, west)(rr, tt);
      return globalThis.Object.freeze([
        v,
        x,
        a2,
        s2,
        rr,
        p,
        q,
        epsilon,
        tt,
        0.01,
        0.0
      ])
    }
  }
  static #compute_next_state(sub2, update2, pow, north, south, east, west) {
    return (state) => {
      let v_p, scrut, x_p, scrut1, scrut2, scrut3, scrut4, scrut5, theta_hat, scrut6, scrut7, scrut8, p_p, scrut9, epsilon_p, scrut10, c_p, scrut11, deltat_p, scrut12, element9$, element8$, element7$, element6$, element5$, element4$, element3$, element2$, element1$, element0$, element2$1, element1$1, element0$1, element1$2, element0$2, element2$2, element1$3, element0$3;
      if (runtime.Tuple.isArrayLike(state) && state.length === 11) {
        element0$ = runtime.Tuple.get(state, 0);
        element1$ = runtime.Tuple.get(state, 1);
        element2$ = runtime.Tuple.get(state, 2);
        element3$ = runtime.Tuple.get(state, 3);
        element4$ = runtime.Tuple.get(state, 4);
        element5$ = runtime.Tuple.get(state, 5);
        element6$ = runtime.Tuple.get(state, 6);
        element7$ = runtime.Tuple.get(state, 7);
        element8$ = runtime.Tuple.get(state, 8);
        element9$ = runtime.Tuple.get(state, 9);
        runtime.Tuple.get(state, 10);
        v_p = simple.#make_velocity(sub2, update2, pow, north, south, east, west)(element0$, element1$, element5$, element6$, element2$, element4$, element9$);
        scrut = simple.#trace.value;
        if (scrut === true) {
          simple.#print_("done make_velocity(sub2, update2, pow, north, south, east, west)\n");
        }
        x_p = simple.#make_position(sub2, update2, pow, north, south, east, west)(element1$, element9$, v_p);
        scrut1 = simple.#trace.value;
        if (scrut1 === true) {
          simple.#print_("done make_position(sub2, update2, pow, north, south, east, west)\n");
        }
        scrut2 = simple.#make_area_density_volume(sub2, update2, pow, north, south, east, west)(element4$, element3$, x_p);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 3) {
          element0$1 = runtime.Tuple.get(scrut2, 0);
          element1$1 = runtime.Tuple.get(scrut2, 1);
          element2$1 = runtime.Tuple.get(scrut2, 2);
          scrut3 = simple.#trace.value;
          if (scrut3 === true) {
            simple.#print_("done make_area_density_volume(sub2, update2, pow, north, south, east, west)\n");
          }
          scrut4 = simple.#make_viscosity(sub2, update2, pow, north, south, east, west)(element5$, v_p, x_p, element0$1, element1$1);
          if (runtime.Tuple.isArrayLike(scrut4) && scrut4.length === 2) {
            element0$2 = runtime.Tuple.get(scrut4, 0);
            element1$2 = runtime.Tuple.get(scrut4, 1);
            scrut5 = simple.#trace.value;
            if (scrut5 === true) {
              simple.#print_("done make_viscosity(sub2, update2, pow, north, south, east, west)\n");
            }
            theta_hat = simple.#make_temperature(sub2, update2, pow, north, south, east, west)(element5$, element7$, element4$, element8$, element1$1, element0$2);
            scrut6 = simple.#trace.value;
            if (scrut6 === true) {
              simple.#print_("done make_temperature(sub2, update2, pow, north, south, east, west)\n");
            }
            scrut7 = simple.#compute_heat_conduction(sub2, update2, pow, north, south, east, west)(theta_hat, element9$, x_p, element0$1, element1$1);
            if (runtime.Tuple.isArrayLike(scrut7) && scrut7.length === 3) {
              element0$3 = runtime.Tuple.get(scrut7, 0);
              element1$3 = runtime.Tuple.get(scrut7, 1);
              element2$2 = runtime.Tuple.get(scrut7, 2);
              scrut8 = simple.#trace.value;
              if (scrut8 === true) {
                simple.#print_("done compute_heat_conduction(sub2, update2, pow, north, south, east, west)\n");
              }
              p_p = simple.#make_pressure(sub2, update2, pow, north, south, east, west)(element1$1, element0$3);
              scrut9 = simple.#trace.value;
              if (scrut9 === true) {
                simple.#print_("done make_pressure(sub2, update2, pow, north, south, east, west)\n");
              }
              epsilon_p = simple.#make_energy(sub2, update2, pow, north, south, east, west)(element1$1, element0$3);
              scrut10 = simple.#trace.value;
              if (scrut10 === true) {
                simple.#print_("done make_energy(sub2, update2, pow, north, south, east, west)\n");
              }
              c_p = simple.#compute_energy_error(sub2, update2, pow, north, south, east, west)(v_p, x_p, p_p, element0$2, epsilon_p, element0$3, element1$1, element0$1, element1$3, element2$2, element9$);
              scrut11 = simple.#trace.value;
              if (scrut11 === true) {
                simple.#print_("done compute_energy_error(sub2, update2, pow, north, south, east, west)\n");
              }
              deltat_p = simple.#compute_time_step(sub2, update2, pow, north, south, east, west)(element1$2, theta_hat, element0$3);
              scrut12 = simple.#trace.value;
              if (scrut12 === true) {
                simple.#print_("done compute_time_step(sub2, update2, pow, north, south, east, west)\n\n");
                return globalThis.Object.freeze([
                  v_p,
                  x_p,
                  element0$1,
                  element2$1,
                  element1$1,
                  p_p,
                  element0$2,
                  epsilon_p,
                  element0$3,
                  deltat_p,
                  c_p
                ])
              }
              return globalThis.Object.freeze([
                v_p,
                x_p,
                element0$1,
                element2$1,
                element1$1,
                p_p,
                element0$2,
                epsilon_p,
                element0$3,
                deltat_p,
                c_p
              ]);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #runit(sub2, update2, pow, north, south, east, west) {
    return () => {
      let tmp, simple2, sub21, update21, pow1, north1, south1, east1, west1, i, state, inlinedVal;
      tmp = simple.#compute_initial_state(sub2, update2, pow, north, south, east, west)();
      simple2 = simple;
      sub21 = sub2;
      update21 = update2;
      pow1 = pow;
      north1 = north;
      south1 = south;
      east1 = east;
      west1 = west;
      i = simple.#step_count;
      state = tmp;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, tmp1, tmp2;
          scrut = i == 0;
          if (scrut === true) {
            inlinedVal = state;
            break inlinedLbl
          }
          tmp1 = i - 1;
          tmp2 = simple2.#compute_next_state(sub21, update21, pow1, north1, south1, east1, west1)(state);
          i = tmp1;
          state = tmp2;
          continue loopLabel;
        }
      }
      return inlinedVal
    }
  }
  static main() {
    let scrut, delta, c, element10$, element9$, tmp;
    scrut = simple.#runit(simple.#sub2, simple.#update2, simple.#pow, simple.#north, simple.#south, simple.#east, simple.#west)();
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 11) {
      runtime.Tuple.get(scrut, 0);
      runtime.Tuple.get(scrut, 1);
      runtime.Tuple.get(scrut, 2);
      runtime.Tuple.get(scrut, 3);
      runtime.Tuple.get(scrut, 4);
      runtime.Tuple.get(scrut, 5);
      runtime.Tuple.get(scrut, 6);
      runtime.Tuple.get(scrut, 7);
      runtime.Tuple.get(scrut, 8);
      element9$ = runtime.Tuple.get(scrut, 9);
      element10$ = runtime.Tuple.get(scrut, 10);
      delta = simple.#trunc(element9$);
      tmp = element10$ * 10000.0;
      c = simple.#trunc(tmp);
      return globalThis.Object.freeze([
        delta,
        c
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "simple"];
});
export { reflect_node as _$_modulePrivate_$_reflect_node };
export { line_integral as _$_modulePrivate_$_line_integral };
export { interior_position as _$_modulePrivate_$_interior_position };
export { r_area_vol_den as _$_modulePrivate_$_r_area_vol_den };
export { update_asr as _$_modulePrivate_$_update_asr };
export { lower_del as _$_modulePrivate_$_lower_del };
export { upper_del as _$_modulePrivate_$_upper_del };
export { do_zones as _$_modulePrivate_$_do_zones };
export { from_ as _$_modulePrivate_$_from_ };
export { table_search as _$_modulePrivate_$_table_search };
export { energy_equation as _$_modulePrivate_$_energy_equation };
export { heat_flow as _$_modulePrivate_$_heat_flow };
export { work_done as _$_modulePrivate_$_work_done };
export { from_1 as _$_modulePrivate_$_from_1 };
export { kinetic as _$_modulePrivate_$_kinetic };
export { interior_position1 as _$_modulePrivate_$_interior_position1 };
export { u2 as _$_modulePrivate_$_u2 };
export { simple1 as _$_modulePrivate_$_simple };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda8 as _$_modulePrivate_$_lambda8 };
export { lambda9 as _$_modulePrivate_$_lambda9 };
export { lambda10 as _$_modulePrivate_$_lambda10 };
export { lambda11 as _$_modulePrivate_$_lambda11 };
export { lambda12 as _$_modulePrivate_$_lambda12 };
export { lambda13 as _$_modulePrivate_$_lambda13 };
export { lambda14 as _$_modulePrivate_$_lambda14 };
export { lambda15 as _$_modulePrivate_$_lambda15 };
export { lambda16 as _$_modulePrivate_$_lambda16 };
export { lambda17 as _$_modulePrivate_$_lambda17 };
export { lambda18 as _$_modulePrivate_$_lambda18 };
export { lambda19 as _$_modulePrivate_$_lambda19 };
export { lambda20 as _$_modulePrivate_$_lambda20 };
export { lambda21 as _$_modulePrivate_$_lambda21 };
export { lambda22 as _$_modulePrivate_$_lambda22 };
export { lambda23 as _$_modulePrivate_$_lambda23 };
export { lambda24 as _$_modulePrivate_$_lambda24 };
export { lambda25 as _$_modulePrivate_$_lambda25 };
export { lambda26 as _$_modulePrivate_$_lambda26 };
export { lambda27 as _$_modulePrivate_$_lambda27 };
export { lambda28 as _$_modulePrivate_$_lambda28 };
export { lambda29 as _$_modulePrivate_$_lambda29 };
export { lambda30 as _$_modulePrivate_$_lambda30 };
export { lambda31 as _$_modulePrivate_$_lambda31 };
export { lambda32 as _$_modulePrivate_$_lambda32 };
export { lambda33 as _$_modulePrivate_$_lambda33 };
export { lambda34 as _$_modulePrivate_$_lambda34 };
export { lambda35 as _$_modulePrivate_$_lambda35 };
export { lambda36 as _$_modulePrivate_$_lambda36 };
export { lambda37 as _$_modulePrivate_$_lambda37 };
export { lambda38 as _$_modulePrivate_$_lambda38 };
export { lambda39 as _$_modulePrivate_$_lambda39 };
export { lambda40 as _$_modulePrivate_$_lambda40 };
export { lambda41 as _$_modulePrivate_$_lambda41 };
export { lambda42 as _$_modulePrivate_$_lambda42 };
export { lambda43 as _$_modulePrivate_$_lambda43 };
export { lambda44 as _$_modulePrivate_$_lambda44 };
export { lambda45 as _$_modulePrivate_$_lambda45 };
export { lambda46 as _$_modulePrivate_$_lambda46 };
export { lambda47 as _$_modulePrivate_$_lambda47 };
export { lambda48 as _$_modulePrivate_$_lambda48 };
export { lambda49 as _$_modulePrivate_$_lambda49 };
export { lambda50 as _$_modulePrivate_$_lambda50 };
export { lambda51 as _$_modulePrivate_$_lambda51 };
export { lambda52 as _$_modulePrivate_$_lambda52 };
export { lambda53 as _$_modulePrivate_$_lambda53 };
export { lambda54 as _$_modulePrivate_$_lambda54 };
export { lambda55 as _$_modulePrivate_$_lambda55 };
export { lambda56 as _$_modulePrivate_$_lambda56 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export { lambda$9 as _$_modulePrivate_$_lambda$9 };
export { lambda$10 as _$_modulePrivate_$_lambda$10 };
export { lambda$11 as _$_modulePrivate_$_lambda$11 };
export { lambda$12 as _$_modulePrivate_$_lambda$12 };
export { lambda$13 as _$_modulePrivate_$_lambda$13 };
export { lambda$14 as _$_modulePrivate_$_lambda$14 };
export { lambda$15 as _$_modulePrivate_$_lambda$15 };
export { lambda$16 as _$_modulePrivate_$_lambda$16 };
export { lambda$17 as _$_modulePrivate_$_lambda$17 };
export { lambda$18 as _$_modulePrivate_$_lambda$18 };
export { lambda$19 as _$_modulePrivate_$_lambda$19 };
export { lambda$20 as _$_modulePrivate_$_lambda$20 };
export { lambda$21 as _$_modulePrivate_$_lambda$21 };
export { lambda$22 as _$_modulePrivate_$_lambda$22 };
export { lambda$23 as _$_modulePrivate_$_lambda$23 };
export { lambda$24 as _$_modulePrivate_$_lambda$24 };
export { lambda$25 as _$_modulePrivate_$_lambda$25 };
export { lambda$26 as _$_modulePrivate_$_lambda$26 };
export { lambda$27 as _$_modulePrivate_$_lambda$27 };
export { lambda$28 as _$_modulePrivate_$_lambda$28 };
export { lambda$29 as _$_modulePrivate_$_lambda$29 };
export { lambda$30 as _$_modulePrivate_$_lambda$30 };
export { lambda$31 as _$_modulePrivate_$_lambda$31 };
export { lambda$32 as _$_modulePrivate_$_lambda$32 };
export { interior_position$ as _$_modulePrivate_$_interior_position$ };
export { lambda$33 as _$_modulePrivate_$_lambda$33 };
export { lambda$34 as _$_modulePrivate_$_lambda$34 };
export { lambda$35 as _$_modulePrivate_$_lambda$35 };
export { lambda$36 as _$_modulePrivate_$_lambda$36 };
export { lambda$37 as _$_modulePrivate_$_lambda$37 };
export { lambda$38 as _$_modulePrivate_$_lambda$38 };
export { lambda$39 as _$_modulePrivate_$_lambda$39 };
export { lambda$40 as _$_modulePrivate_$_lambda$40 };
export { lambda$41 as _$_modulePrivate_$_lambda$41 };
export { lambda$42 as _$_modulePrivate_$_lambda$42 };
export { lambda$43 as _$_modulePrivate_$_lambda$43 };
export { lambda$44 as _$_modulePrivate_$_lambda$44 };
export { lambda$45 as _$_modulePrivate_$_lambda$45 };
export { lambda$46 as _$_modulePrivate_$_lambda$46 };
export { lambda$47 as _$_modulePrivate_$_lambda$47 };
export { lambda$48 as _$_modulePrivate_$_lambda$48 };
export { lambda$49 as _$_modulePrivate_$_lambda$49 };
export { lambda$50 as _$_modulePrivate_$_lambda$50 };
export { lambda$51 as _$_modulePrivate_$_lambda$51 };
export { lambda$52 as _$_modulePrivate_$_lambda$52 };
export { lambda$53 as _$_modulePrivate_$_lambda$53 };
export { f$ as _$_modulePrivate_$_f$ };
export { lambda$54 as _$_modulePrivate_$_lambda$54 };
export { lambda$55 as _$_modulePrivate_$_lambda$55 };
export { lambda$56 as _$_modulePrivate_$_lambda$56 };
export { lambda$57 as _$_modulePrivate_$_lambda$57 };
export { lambda$58 as _$_modulePrivate_$_lambda$58 };
export { lambda$59 as _$_modulePrivate_$_lambda$59 };
export { lambda$60 as _$_modulePrivate_$_lambda$60 };
export { lambda$61 as _$_modulePrivate_$_lambda$61 };
export { lambda$62 as _$_modulePrivate_$_lambda$62 };
export { lambda$63 as _$_modulePrivate_$_lambda$63 };
export { lambda$64 as _$_modulePrivate_$_lambda$64 };
export { lambda$65 as _$_modulePrivate_$_lambda$65 };
export { lambda$66 as _$_modulePrivate_$_lambda$66 };
export { lambda$67 as _$_modulePrivate_$_lambda$67 };
export { lambda$68 as _$_modulePrivate_$_lambda$68 };
export { lambda$69 as _$_modulePrivate_$_lambda$69 };
export { lambda$70 as _$_modulePrivate_$_lambda$70 };
export { lambda$71 as _$_modulePrivate_$_lambda$71 };
export { lambda$72 as _$_modulePrivate_$_lambda$72 };
export { lambda$73 as _$_modulePrivate_$_lambda$73 };
export { work_done$ as _$_modulePrivate_$_work_done$ };
export { kinetic$ as _$_modulePrivate_$_kinetic$ };
export { lambda$74 as _$_modulePrivate_$_lambda$74 };
export { lambda$75 as _$_modulePrivate_$_lambda$75 };
export { lambda$76 as _$_modulePrivate_$_lambda$76 };
export { lambda$77 as _$_modulePrivate_$_lambda$77 };
export { lambda$78 as _$_modulePrivate_$_lambda$78 };
export { lambda$79 as _$_modulePrivate_$_lambda$79 };
export { lambda$80 as _$_modulePrivate_$_lambda$80 };
export { lambda$81 as _$_modulePrivate_$_lambda$81 };
export { lambda$82 as _$_modulePrivate_$_lambda$82 };
export { interior_position$1 as _$_modulePrivate_$_interior_position$1 };
export { heat_flow$worker as _$_modulePrivate_$_heat_flow$worker };
export default simple1;
