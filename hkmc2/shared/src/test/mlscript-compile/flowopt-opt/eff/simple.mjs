const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const rev$accessorSymbol = globalThis.Symbol("rev");
const for_$accessorSymbol = globalThis.Symbol("for_");
const from_$accessorSymbol = globalThis.Symbol("from_");
const update2$accessorSymbol = globalThis.Symbol("update2");
const sub1$accessorSymbol = globalThis.Symbol("sub1");
const kmin$accessorSymbol = globalThis.Symbol("kmin");
const kmax$accessorSymbol = globalThis.Symbol("kmax");
const lmin$accessorSymbol = globalThis.Symbol("lmin");
const lmax$accessorSymbol = globalThis.Symbol("lmax");
const specific_heat$accessorSymbol = globalThis.Symbol("specific_heat");
const extract_energy_tables_from_constants$accessorSymbol = globalThis.Symbol("extract_energy_tables_from_constants");
const extract_pressure_tables_from_constants$accessorSymbol = globalThis.Symbol("extract_pressure_tables_from_constants");
const nbc$accessorSymbol = globalThis.Symbol("nbc");
const pbb$accessorSymbol = globalThis.Symbol("pbb");
const pb$accessorSymbol = globalThis.Symbol("pb");
const qb$accessorSymbol = globalThis.Symbol("qb");
const newton_raphson$accessorSymbol = globalThis.Symbol("newton_raphson");
const map$tailrec$accessorSymbol = globalThis.Symbol("map$tailrec");
let interior_position, r_area_vol_den, update_asr, do_zones, from_, table_search, heat_flow, work_done, from_1, interior_position1, u2, simple1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda31, lambda32, lambda33, lambda34, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, lambda$21, lambda$22, lambda$23, interior_position$, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, lambda$29, lambda$30, lambda$31, f$, lambda$32, lambda$33, lambda$34, lambda$35, lambda$36, lambda$37, lambda$38, lambda$39, lambda$40, lambda$41, lambda$42, lambda$43, lambda$44, lambda$45, work_done$, lambda$46, lambda$47, lambda$48, interior_position$1, main_compute_initial_state_make_energy_lambda$_lambda$lambda, main_compute_initial_state_make_energy_lambda$$lambda$, main_compute_initial_state_make_energy_lambda$_lambda$lambda1, main_compute_initial_state_make_energy_lambda$$lambda$1, main_compute_initial_state_make_energy_lambda$_lambda$lambda2, main_compute_initial_state_make_energy_lambda$$lambda$2, main_compute_initial_state_make_energy_lambda$_lambda$lambda3, main_compute_initial_state_make_energy_lambda$$lambda$3, main_compute_initial_state_make_energy_lambda$_lambda$lambda4, main_compute_initial_state_make_energy_lambda$$lambda$4, main_compute_initial_state_make_pressure_lambda$_lambda$lambda, main_compute_initial_state_make_pressure_lambda$$lambda$, main_compute_initial_state_lambda$_reflect_south_reflect$reflect, main_compute_initial_state_lambda$_reflect_south$reflect_south, main_compute_initial_state_lambda$$lambda$, main_compute_initial_state_lambda$_reflect_east_reflect$reflect, main_compute_initial_state_lambda$_reflect_east$reflect_east, main_compute_initial_state_lambda$$lambda$1, main_compute_initial_state_lambda$_reflect_west_reflect$reflect, main_compute_initial_state_lambda$_reflect_west$reflect_west, main_compute_initial_state_lambda$$lambda$2, main_compute_initial_state_lambda$_reflect_north_reflect$reflect, main_compute_initial_state_lambda$_reflect_north$reflect_north, main_compute_initial_state_lambda$$lambda$3, main_compute_initial_state_lambda$_lambda$lambda, main_compute_initial_state_lambda$$lambda$4, main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda, main_compute_initial_state_make_position_matrix_lambda$$lambda$, main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda1, main_compute_initial_state_make_position_matrix_lambda$$lambda$1, main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda2, main_compute_initial_state_make_position_matrix_lambda$$lambda$2, main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda3, main_compute_initial_state_make_position_matrix_lambda$$lambda$3, main_make_velocity_lambda$_lambda$_lambda$lambda, main_make_velocity_lambda$$lambda$, main_make_position_make_position_matrix_lambda$_lambda$lambda, main_make_position_make_position_matrix_lambda$$lambda$, main_make_position_make_position_matrix_lambda$_lambda$lambda1, main_make_position_make_position_matrix_lambda$$lambda$1, main_make_position_make_position_matrix_lambda$_lambda$lambda2, main_make_position_make_position_matrix_lambda$$lambda$2, main_make_position_make_position_matrix_lambda$_lambda$lambda3, main_make_position_make_position_matrix_lambda$$lambda$3, main_make_area_density_volume_lambda$_reflect_south_reflect$reflect, main_make_area_density_volume_lambda$_reflect_south$reflect_south, main_make_area_density_volume_lambda$$lambda$, main_make_area_density_volume_lambda$_reflect_east_reflect$reflect, main_make_area_density_volume_lambda$_reflect_east$reflect_east, main_make_area_density_volume_lambda$$lambda$1, main_make_area_density_volume_lambda$_reflect_west_reflect$reflect, main_make_area_density_volume_lambda$_reflect_west$reflect_west, main_make_area_density_volume_lambda$$lambda$2, main_make_area_density_volume_lambda$_reflect_north_reflect$reflect, main_make_area_density_volume_lambda$_reflect_north$reflect_north, main_make_area_density_volume_lambda$$lambda$3, main_make_area_density_volume_lambda$_lambda$lambda, main_make_area_density_volume_lambda$$lambda$4, main_make_viscosity_lambda$_lambda$lambda, main_make_viscosity_lambda$$lambda$, main_lambda$_lambda_energy_equation$energy_equation, main_lambda$_lambda$lambda, main_lambda$$lambda$, main_lambda$_lambda_energy_equation$energy_equation1, main_compute_heat_conduction_make_gamma_lambda$_lambda$lambda, main_compute_heat_conduction_make_gamma_lambda$$lambda$, main_compute_heat_conduction_make_gamma_lambda$_lambda$lambda1, main_compute_heat_conduction_make_gamma_lambda$$lambda$1, main_compute_heat_conduction_make_cc_lambda$_lambda$lambda, main_compute_heat_conduction_make_cc_lambda$$lambda$, main_compute_heat_conduction_make_cc_lambda$_lambda$lambda1, main_compute_heat_conduction_make_cc_lambda$$lambda$1, main_compute_heat_conduction_make_cc_lambda$_lambda$lambda2, main_compute_heat_conduction_make_cc_lambda$$lambda$2, main_compute_heat_conduction_make_cc_lambda$_lambda$lambda3, main_compute_heat_conduction_make_cc_lambda$$lambda$3, main_compute_heat_conduction_make_cc_lambda$_lambda$lambda4, main_compute_heat_conduction_make_cc_lambda$$lambda$4, main_make_pressure_lambda$_lambda$lambda, main_make_pressure_lambda$$lambda$, main_make_energy_lambda$_lambda$lambda, main_make_energy_lambda$$lambda$, main_make_energy_lambda$_lambda$lambda1, main_make_energy_lambda$$lambda$1, main_make_energy_lambda$_lambda$lambda2, main_make_energy_lambda$$lambda$2, main_make_energy_lambda$_lambda$lambda3, main_make_energy_lambda$$lambda$3, main_make_energy_lambda$_lambda$lambda4, main_make_energy_lambda$$lambda$4, main_compute_energy_error_kinetic$_kinetic$kinetic, main_compute_energy_error_kinetic$$kinetic$, main_lambda$_lambda$lambda1, main_lambda$$lambda$1, main_compute_initial_state_make_position_matrix_lambda$$lambda$4, main_make_position_make_position_matrix_lambda$$lambda$4, heat_flow$worker, main_lambda$_lambda_energy_equation_zonal_energy$zonal_energy$worker, main_lambda$_lambda_energy_equation_zonal_energy$zonal_energy$worker1;
main_compute_initial_state_make_energy_lambda$_lambda$lambda = function main_compute_initial_state_make_energy_lambda$_lambda$lambda(simple2, sub2, update2, pow, rho_p, theta_p, epsilon_p, zone) {
  let tmp, tmp1, scrut, element3$, element2$, element1$, element0$;
  tmp = runtime.safeCall(sub2(rho_p, zone));
  tmp1 = runtime.safeCall(sub2(theta_p, zone));
  scrut = simple1[extract_energy_tables_from_constants$accessorSymbol];
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
    let rho_index, theta_index, a, tmp2, tmp3, f, inlinedVal;
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    element3$ = runtime.Tuple.get(scrut, 3);
    rho_index = table_search(simple1, element2$, tmp);
    theta_index = table_search(simple1, element3$, tmp1);
    tmp2 = globalThis.Object.freeze([
      rho_index,
      theta_index
    ]);
    a = runtime.safeCall(sub2(element0$, tmp2));
    tmp3 = from_(simple1, 0, element1$);
    f = lambda$28(simple1, sub2, pow, element1$, tmp, tmp1, a);
    inlinedVal = simple1[map$tailrec$accessorSymbol](f, tmp3);
    if (inlinedVal instanceof simple1.Cons.class) {
      let inlinedVal1;
      if (inlinedVal instanceof simple1.Nil.class) {
        return runtime.safeCall(update2(epsilon_p, zone, 0.0))
      } else if (inlinedVal instanceof simple1.Cons.class) {
        inlinedVal1 = lambda33(simple1, lambda, inlinedVal, 0.0);
        return runtime.safeCall(update2(epsilon_p, zone, inlinedVal1))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_compute_initial_state_make_energy_lambda$$lambda$ = function main_compute_initial_state_make_energy_lambda$$lambda$(simple2, sub2, update2, pow, rho_p, theta_p, epsilon_p) {
  return (zone) => {
    return main_compute_initial_state_make_energy_lambda$_lambda$lambda(simple2, sub2, update2, pow, rho_p, theta_p, epsilon_p, zone)
  }
};
main_compute_initial_state_make_energy_lambda$_lambda$lambda1 = function main_compute_initial_state_make_energy_lambda$_lambda$lambda(sub2, update2, north, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(north(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
};
main_compute_initial_state_make_energy_lambda$$lambda$1 = function main_compute_initial_state_make_energy_lambda$$lambda$(sub2, update2, north, epsilon_p) {
  return (zone) => {
    return main_compute_initial_state_make_energy_lambda$_lambda$lambda1(sub2, update2, north, epsilon_p, zone)
  }
};
main_compute_initial_state_make_energy_lambda$_lambda$lambda2 = function main_compute_initial_state_make_energy_lambda$_lambda$lambda(sub2, update2, east, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(east(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
};
main_compute_initial_state_make_energy_lambda$$lambda$2 = function main_compute_initial_state_make_energy_lambda$$lambda$(sub2, update2, east, epsilon_p) {
  return (zone) => {
    return main_compute_initial_state_make_energy_lambda$_lambda$lambda2(sub2, update2, east, epsilon_p, zone)
  }
};
main_compute_initial_state_make_energy_lambda$_lambda$lambda3 = function main_compute_initial_state_make_energy_lambda$_lambda$lambda(sub2, update2, west, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(west(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
};
main_compute_initial_state_make_energy_lambda$$lambda$3 = function main_compute_initial_state_make_energy_lambda$$lambda$(sub2, update2, west, epsilon_p) {
  return (zone) => {
    return main_compute_initial_state_make_energy_lambda$_lambda$lambda3(sub2, update2, west, epsilon_p, zone)
  }
};
main_compute_initial_state_make_energy_lambda$_lambda$lambda4 = function main_compute_initial_state_make_energy_lambda$_lambda$lambda(sub2, update2, south, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(south(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
};
main_compute_initial_state_make_energy_lambda$$lambda$4 = function main_compute_initial_state_make_energy_lambda$$lambda$(sub2, update2, south, epsilon_p) {
  return (zone) => {
    return main_compute_initial_state_make_energy_lambda$_lambda$lambda4(sub2, update2, south, epsilon_p, zone)
  }
};
main_compute_initial_state_make_pressure_lambda$_lambda$lambda = function main_compute_initial_state_make_pressure_lambda$_lambda$lambda(simple2, sub2, update2, pow, rho_p, theta_p, p, zone) {
  let tmp, tmp1, scrut, element3$, element2$, element1$, element0$;
  tmp = runtime.safeCall(sub2(rho_p, zone));
  tmp1 = runtime.safeCall(sub2(theta_p, zone));
  scrut = simple1[extract_pressure_tables_from_constants$accessorSymbol];
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
    let rho_index, theta_index, a, tmp2, tmp3, f, inlinedVal;
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    element3$ = runtime.Tuple.get(scrut, 3);
    rho_index = table_search(simple1, element2$, tmp);
    theta_index = table_search(simple1, element3$, tmp1);
    tmp2 = globalThis.Object.freeze([
      rho_index,
      theta_index
    ]);
    a = runtime.safeCall(sub2(element0$, tmp2));
    tmp3 = from_(simple1, 0, element1$);
    f = lambda$28(simple1, sub2, pow, element1$, tmp, tmp1, a);
    inlinedVal = simple1[map$tailrec$accessorSymbol](f, tmp3);
    if (inlinedVal instanceof simple1.Cons.class) {
      let inlinedVal1;
      if (inlinedVal instanceof simple1.Nil.class) {
        return runtime.safeCall(update2(p, zone, 0.0))
      } else if (inlinedVal instanceof simple1.Cons.class) {
        inlinedVal1 = lambda33(simple1, lambda, inlinedVal, 0.0);
        return runtime.safeCall(update2(p, zone, inlinedVal1))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_compute_initial_state_make_pressure_lambda$$lambda$ = function main_compute_initial_state_make_pressure_lambda$$lambda$(simple2, sub2, update2, pow, rho_p, theta_p, p) {
  return (zone) => {
    return main_compute_initial_state_make_pressure_lambda$_lambda$lambda(simple2, sub2, update2, pow, rho_p, theta_p, p, zone)
  }
};
main_compute_initial_state_lambda$_reflect_south_reflect$reflect = function main_compute_initial_state_lambda$_reflect_south_reflect$reflect(sub2) {
  return (dir) => {
    return (node) => {
      return (a) => {
        let tmp;
        tmp = runtime.safeCall(dir(node));
        return runtime.safeCall(sub2(a, tmp))
      }
    }
  }
};
main_compute_initial_state_lambda$_reflect_south$reflect_south = function main_compute_initial_state_lambda$_reflect_south$reflect_south(sub2, south) {
  return (x) => {
    return main_compute_initial_state_lambda$_reflect_south_reflect$reflect(sub2)(south)(x)
  }
};
main_compute_initial_state_lambda$$lambda$ = function main_compute_initial_state_lambda$$lambda$(simple2, sub2, update2, south, a2, s2) {
  return (z) => {
    let tmp;
    tmp = main_compute_initial_state_lambda$_reflect_south$reflect_south(sub2, south);
    return u2(update2, a2, s2, tmp, z)
  }
};
main_compute_initial_state_lambda$_reflect_east_reflect$reflect = function main_compute_initial_state_lambda$_reflect_east_reflect$reflect(sub2) {
  return (dir) => {
    return (node) => {
      return (a) => {
        let tmp;
        tmp = runtime.safeCall(dir(node));
        return runtime.safeCall(sub2(a, tmp))
      }
    }
  }
};
main_compute_initial_state_lambda$_reflect_east$reflect_east = function main_compute_initial_state_lambda$_reflect_east$reflect_east(sub2, east) {
  return (x) => {
    return main_compute_initial_state_lambda$_reflect_east_reflect$reflect(sub2)(east)(x)
  }
};
main_compute_initial_state_lambda$$lambda$1 = function main_compute_initial_state_lambda$$lambda$(simple2, sub2, update2, east, a2, s2) {
  return (z) => {
    let tmp;
    tmp = main_compute_initial_state_lambda$_reflect_east$reflect_east(sub2, east);
    return u2(update2, a2, s2, tmp, z)
  }
};
main_compute_initial_state_lambda$_reflect_west_reflect$reflect = function main_compute_initial_state_lambda$_reflect_west_reflect$reflect(sub2) {
  return (dir) => {
    return (node) => {
      return (a) => {
        let tmp;
        tmp = runtime.safeCall(dir(node));
        return runtime.safeCall(sub2(a, tmp))
      }
    }
  }
};
main_compute_initial_state_lambda$_reflect_west$reflect_west = function main_compute_initial_state_lambda$_reflect_west$reflect_west(sub2, west) {
  return (x) => {
    return main_compute_initial_state_lambda$_reflect_west_reflect$reflect(sub2)(west)(x)
  }
};
main_compute_initial_state_lambda$$lambda$2 = function main_compute_initial_state_lambda$$lambda$(simple2, sub2, update2, west, a2, s2) {
  return (z) => {
    let tmp;
    tmp = main_compute_initial_state_lambda$_reflect_west$reflect_west(sub2, west);
    return u2(update2, a2, s2, tmp, z)
  }
};
main_compute_initial_state_lambda$_reflect_north_reflect$reflect = function main_compute_initial_state_lambda$_reflect_north_reflect$reflect(sub2) {
  return (dir) => {
    return (node) => {
      return (a) => {
        let tmp;
        tmp = runtime.safeCall(dir(node));
        return runtime.safeCall(sub2(a, tmp))
      }
    }
  }
};
main_compute_initial_state_lambda$_reflect_north$reflect_north = function main_compute_initial_state_lambda$_reflect_north$reflect_north(sub2, north) {
  return (x) => {
    return main_compute_initial_state_lambda$_reflect_north_reflect$reflect(sub2)(north)(x)
  }
};
main_compute_initial_state_lambda$$lambda$3 = function main_compute_initial_state_lambda$$lambda$(simple2, sub2, update2, north, a2, s2) {
  return (z) => {
    let tmp;
    tmp = main_compute_initial_state_lambda$_reflect_north$reflect_north(sub2, north);
    return u2(update2, a2, s2, tmp, z)
  }
};
main_compute_initial_state_lambda$_lambda$lambda = function main_compute_initial_state_lambda$_lambda$lambda(simple2, sub2, update2, north, west, x, a2, s2, z) {
  let element1$, element0$, inlinedVal, r1, z1, r2, z2, r3, z3, r4, z4, area1, radius1, volume1, area2, radius2, volume2, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    let inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, tmp18, inlinedVal6, tmp19;
    element0$1 = runtime.Tuple.get(x, 0);
    element1$1 = runtime.Tuple.get(x, 1);
    inlinedVal1 = runtime.safeCall(west(z));
    r1 = runtime.safeCall(sub2(element0$1, inlinedVal1));
    inlinedVal2 = runtime.safeCall(west(z));
    z1 = runtime.safeCall(sub2(element1$1, inlinedVal2));
    r2 = runtime.safeCall(sub2(element0$1, z));
    z2 = runtime.safeCall(sub2(element1$1, z));
    inlinedVal3 = runtime.safeCall(north(z));
    r3 = runtime.safeCall(sub2(element0$1, inlinedVal3));
    inlinedVal4 = runtime.safeCall(north(z));
    z3 = runtime.safeCall(sub2(element1$1, inlinedVal4));
    tmp19 = runtime.safeCall(west(z));
    inlinedVal6 = runtime.safeCall(north(tmp19));
    r4 = runtime.safeCall(sub2(element0$1, inlinedVal6));
    tmp18 = runtime.safeCall(west(z));
    inlinedVal5 = runtime.safeCall(north(tmp18));
    z4 = runtime.safeCall(sub2(element1$1, inlinedVal5));
    tmp = r2 - r1;
    tmp1 = z3 - z1;
    tmp2 = tmp * tmp1;
    tmp3 = r3 - r2;
    tmp4 = z3 - z2;
    tmp5 = tmp3 * tmp4;
    area1 = tmp2 - tmp5;
    tmp6 = r1 + r2;
    tmp7 = tmp6 + r3;
    radius1 = 0.3333 * tmp7;
    volume1 = area1 * radius1;
    tmp8 = r3 - r1;
    tmp9 = z4 - z3;
    tmp10 = tmp8 * tmp9;
    tmp11 = r4 - r3;
    tmp12 = z3 - z1;
    tmp13 = tmp11 * tmp12;
    area2 = tmp10 - tmp13;
    tmp14 = r1 + r3;
    tmp15 = tmp14 + r4;
    radius2 = 0.3333 * tmp15;
    volume2 = area2 * radius2;
    tmp16 = area1 + area2;
    tmp17 = volume1 + volume2;
    inlinedVal = globalThis.Object.freeze([
      tmp16,
      tmp17
    ]);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal, 0);
      element1$ = runtime.Tuple.get(inlinedVal, 1);
      runtime.safeCall(update2(a2, z, element0$));
      return runtime.safeCall(update2(s2, z, element1$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_compute_initial_state_lambda$$lambda$4 = function main_compute_initial_state_lambda$$lambda$(simple2, sub2, update2, north, west, x, a2, s2) {
  return (z) => {
    return main_compute_initial_state_lambda$_lambda$lambda(simple2, sub2, update2, north, west, x, a2, s2, z)
  }
};
main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda = function main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda(simple2, sub2, update2, south, east, r_p, z_p, n) {
  let element1$, element0$, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, rax, zax, ryx, zyx, omega, rb, zb, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal7, tmp13, inlinedVal8, tmp14, inlinedVal9, tmp15, inlinedVal10, tmp16;
  tmp12 = runtime.safeCall(south(n));
  inlinedVal1 = runtime.safeCall(sub2(r_p, tmp12));
  tmp11 = runtime.safeCall(south(n));
  inlinedVal2 = runtime.safeCall(sub2(z_p, tmp11));
  tmp16 = runtime.safeCall(east(n));
  inlinedVal10 = runtime.safeCall(south(tmp16));
  inlinedVal3 = runtime.safeCall(sub2(r_p, inlinedVal10));
  tmp15 = runtime.safeCall(east(n));
  inlinedVal9 = runtime.safeCall(south(tmp15));
  inlinedVal4 = runtime.safeCall(sub2(z_p, inlinedVal9));
  tmp14 = runtime.safeCall(south(n));
  inlinedVal8 = runtime.safeCall(south(tmp14));
  inlinedVal5 = runtime.safeCall(sub2(r_p, inlinedVal8));
  tmp13 = runtime.safeCall(south(n));
  inlinedVal7 = runtime.safeCall(south(tmp13));
  inlinedVal6 = runtime.safeCall(sub2(z_p, inlinedVal7));
  rax = inlinedVal5 - inlinedVal1;
  zax = inlinedVal6 - inlinedVal2;
  ryx = inlinedVal3 - inlinedVal1;
  zyx = inlinedVal4 - inlinedVal2;
  tmp = rax * ryx;
  tmp1 = zax * zyx;
  tmp2 = tmp + tmp1;
  tmp3 = 2.0 * tmp2;
  tmp4 = ryx * ryx;
  tmp5 = zyx * zyx;
  tmp6 = tmp4 + tmp5;
  omega = tmp3 / tmp6;
  tmp7 = inlinedVal1 - rax;
  tmp8 = omega * ryx;
  rb = tmp7 + tmp8;
  tmp9 = inlinedVal2 - zax;
  tmp10 = omega * zyx;
  zb = tmp9 + tmp10;
  inlinedVal = globalThis.Object.freeze([
    rb,
    zb
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_compute_initial_state_make_position_matrix_lambda$$lambda$ = function main_compute_initial_state_make_position_matrix_lambda$$lambda$(simple2, sub2, update2, south, east, r_p, z_p) {
  return (n) => {
    return main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda(simple2, sub2, update2, south, east, r_p, z_p, n)
  }
};
main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda1 = function main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda(simple2, sub2, update2, north, east, r_p, z_p, n) {
  let element1$, element0$, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, rax, zax, ryx, zyx, omega, rb, zb, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal7, tmp13, inlinedVal8, tmp14, inlinedVal9, tmp15, inlinedVal10, tmp16;
  tmp12 = runtime.safeCall(north(n));
  inlinedVal1 = runtime.safeCall(sub2(r_p, tmp12));
  tmp11 = runtime.safeCall(north(n));
  inlinedVal2 = runtime.safeCall(sub2(z_p, tmp11));
  tmp16 = runtime.safeCall(east(n));
  inlinedVal10 = runtime.safeCall(north(tmp16));
  inlinedVal3 = runtime.safeCall(sub2(r_p, inlinedVal10));
  tmp15 = runtime.safeCall(east(n));
  inlinedVal9 = runtime.safeCall(north(tmp15));
  inlinedVal4 = runtime.safeCall(sub2(z_p, inlinedVal9));
  tmp14 = runtime.safeCall(north(n));
  inlinedVal8 = runtime.safeCall(north(tmp14));
  inlinedVal5 = runtime.safeCall(sub2(r_p, inlinedVal8));
  tmp13 = runtime.safeCall(north(n));
  inlinedVal7 = runtime.safeCall(north(tmp13));
  inlinedVal6 = runtime.safeCall(sub2(z_p, inlinedVal7));
  rax = inlinedVal5 - inlinedVal1;
  zax = inlinedVal6 - inlinedVal2;
  ryx = inlinedVal3 - inlinedVal1;
  zyx = inlinedVal4 - inlinedVal2;
  tmp = rax * ryx;
  tmp1 = zax * zyx;
  tmp2 = tmp + tmp1;
  tmp3 = 2.0 * tmp2;
  tmp4 = ryx * ryx;
  tmp5 = zyx * zyx;
  tmp6 = tmp4 + tmp5;
  omega = tmp3 / tmp6;
  tmp7 = inlinedVal1 - rax;
  tmp8 = omega * ryx;
  rb = tmp7 + tmp8;
  tmp9 = inlinedVal2 - zax;
  tmp10 = omega * zyx;
  zb = tmp9 + tmp10;
  inlinedVal = globalThis.Object.freeze([
    rb,
    zb
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_compute_initial_state_make_position_matrix_lambda$$lambda$1 = function main_compute_initial_state_make_position_matrix_lambda$$lambda$(simple2, sub2, update2, north, east, r_p, z_p) {
  return (n) => {
    return main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda1(simple2, sub2, update2, north, east, r_p, z_p, n)
  }
};
main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda2 = function main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda(simple2, sub2, update2, south, west, r_p, z_p, n) {
  let element1$, element0$, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, rax, zax, ryx, zyx, omega, rb, zb, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal7, tmp13, inlinedVal8, tmp14, inlinedVal9, tmp15, inlinedVal10, tmp16;
  tmp12 = runtime.safeCall(west(n));
  inlinedVal1 = runtime.safeCall(sub2(r_p, tmp12));
  tmp11 = runtime.safeCall(west(n));
  inlinedVal2 = runtime.safeCall(sub2(z_p, tmp11));
  tmp16 = runtime.safeCall(west(n));
  inlinedVal10 = runtime.safeCall(south(tmp16));
  inlinedVal3 = runtime.safeCall(sub2(r_p, inlinedVal10));
  tmp15 = runtime.safeCall(west(n));
  inlinedVal9 = runtime.safeCall(south(tmp15));
  inlinedVal4 = runtime.safeCall(sub2(z_p, inlinedVal9));
  tmp14 = runtime.safeCall(west(n));
  inlinedVal8 = runtime.safeCall(west(tmp14));
  inlinedVal5 = runtime.safeCall(sub2(r_p, inlinedVal8));
  tmp13 = runtime.safeCall(west(n));
  inlinedVal7 = runtime.safeCall(west(tmp13));
  inlinedVal6 = runtime.safeCall(sub2(z_p, inlinedVal7));
  rax = inlinedVal5 - inlinedVal1;
  zax = inlinedVal6 - inlinedVal2;
  ryx = inlinedVal3 - inlinedVal1;
  zyx = inlinedVal4 - inlinedVal2;
  tmp = rax * ryx;
  tmp1 = zax * zyx;
  tmp2 = tmp + tmp1;
  tmp3 = 2.0 * tmp2;
  tmp4 = ryx * ryx;
  tmp5 = zyx * zyx;
  tmp6 = tmp4 + tmp5;
  omega = tmp3 / tmp6;
  tmp7 = inlinedVal1 - rax;
  tmp8 = omega * ryx;
  rb = tmp7 + tmp8;
  tmp9 = inlinedVal2 - zax;
  tmp10 = omega * zyx;
  zb = tmp9 + tmp10;
  inlinedVal = globalThis.Object.freeze([
    rb,
    zb
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_compute_initial_state_make_position_matrix_lambda$$lambda$2 = function main_compute_initial_state_make_position_matrix_lambda$$lambda$(simple2, sub2, update2, south, west, r_p, z_p) {
  return (n) => {
    return main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda2(simple2, sub2, update2, south, west, r_p, z_p, n)
  }
};
main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda3 = function main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda(simple2, sub2, update2, south, east, r_p, z_p, n) {
  let element1$, element0$, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, rax, zax, ryx, zyx, omega, rb, zb, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal7, tmp13, inlinedVal8, tmp14, inlinedVal9, tmp15, inlinedVal10, tmp16;
  tmp12 = runtime.safeCall(east(n));
  inlinedVal1 = runtime.safeCall(sub2(r_p, tmp12));
  tmp11 = runtime.safeCall(east(n));
  inlinedVal2 = runtime.safeCall(sub2(z_p, tmp11));
  tmp16 = runtime.safeCall(east(n));
  inlinedVal10 = runtime.safeCall(south(tmp16));
  inlinedVal3 = runtime.safeCall(sub2(r_p, inlinedVal10));
  tmp15 = runtime.safeCall(east(n));
  inlinedVal9 = runtime.safeCall(south(tmp15));
  inlinedVal4 = runtime.safeCall(sub2(z_p, inlinedVal9));
  tmp14 = runtime.safeCall(east(n));
  inlinedVal8 = runtime.safeCall(east(tmp14));
  inlinedVal5 = runtime.safeCall(sub2(r_p, inlinedVal8));
  tmp13 = runtime.safeCall(east(n));
  inlinedVal7 = runtime.safeCall(east(tmp13));
  inlinedVal6 = runtime.safeCall(sub2(z_p, inlinedVal7));
  rax = inlinedVal5 - inlinedVal1;
  zax = inlinedVal6 - inlinedVal2;
  ryx = inlinedVal3 - inlinedVal1;
  zyx = inlinedVal4 - inlinedVal2;
  tmp = rax * ryx;
  tmp1 = zax * zyx;
  tmp2 = tmp + tmp1;
  tmp3 = 2.0 * tmp2;
  tmp4 = ryx * ryx;
  tmp5 = zyx * zyx;
  tmp6 = tmp4 + tmp5;
  omega = tmp3 / tmp6;
  tmp7 = inlinedVal1 - rax;
  tmp8 = omega * ryx;
  rb = tmp7 + tmp8;
  tmp9 = inlinedVal2 - zax;
  tmp10 = omega * zyx;
  zb = tmp9 + tmp10;
  inlinedVal = globalThis.Object.freeze([
    rb,
    zb
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_compute_initial_state_make_position_matrix_lambda$$lambda$3 = function main_compute_initial_state_make_position_matrix_lambda$$lambda$(simple2, sub2, update2, south, east, r_p, z_p) {
  return (n) => {
    return main_compute_initial_state_make_position_matrix_lambda$_lambda$lambda3(simple2, sub2, update2, south, east, r_p, z_p, n)
  }
};
main_make_velocity_lambda$_lambda$_lambda$lambda = function main_make_velocity_lambda$_lambda$_lambda$lambda(sub2, update2, north, south, east, west, p, q, alpha, rho, delta_t, u, w, r, z, uu, ww, k, l) {
  let element1$, element0$, tmp, tmp1, tmp2, inlinedVal, n1, n2, u_dot, w_dot, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal1, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, inlinedVal2, inlinedVal3, element1$1, element0$1, element1$2, element0$2;
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
    tmp10 = runtime.safeCall(sub2(rho, inlinedVal2));
    if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
      let inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, element1$3, element0$3, tmp25, element1$4, element0$4, tmp26, element1$5, element0$5, tmp27, tmp28, element1$6, element0$6, tmp29, tmp30, element1$7, element0$7, tmp31, element1$8, element0$8, tmp32;
      element0$2 = runtime.Tuple.get(tmp, 0);
      element1$2 = runtime.Tuple.get(tmp, 1);
      inlinedVal3 = globalThis.Object.freeze([
        element0$2,
        element1$2
      ]);
      tmp11 = runtime.safeCall(sub2(alpha, inlinedVal3));
      tmp12 = tmp10 * tmp11;
      if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
        element0$8 = runtime.Tuple.get(tmp, 0);
        element1$8 = runtime.Tuple.get(tmp, 1);
        tmp32 = element0$8 + 1;
        inlinedVal4 = globalThis.Object.freeze([
          tmp32,
          element1$8
        ]);
        tmp13 = runtime.safeCall(sub2(rho, inlinedVal4));
        if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
          element0$7 = runtime.Tuple.get(tmp, 0);
          element1$7 = runtime.Tuple.get(tmp, 1);
          tmp31 = element0$7 + 1;
          inlinedVal5 = globalThis.Object.freeze([
            tmp31,
            element1$7
          ]);
          tmp14 = runtime.safeCall(sub2(alpha, inlinedVal5));
          tmp15 = tmp13 * tmp14;
          if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
            element0$6 = runtime.Tuple.get(tmp, 0);
            element1$6 = runtime.Tuple.get(tmp, 1);
            tmp29 = element0$6 + 1;
            tmp30 = element1$6 + 1;
            inlinedVal6 = globalThis.Object.freeze([
              tmp29,
              tmp30
            ]);
            tmp16 = runtime.safeCall(sub2(rho, inlinedVal6));
            if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
              element0$5 = runtime.Tuple.get(tmp, 0);
              element1$5 = runtime.Tuple.get(tmp, 1);
              tmp27 = element0$5 + 1;
              tmp28 = element1$5 + 1;
              inlinedVal7 = globalThis.Object.freeze([
                tmp27,
                tmp28
              ]);
              tmp17 = runtime.safeCall(sub2(alpha, inlinedVal7));
              tmp18 = tmp16 * tmp17;
              tmp19 = tmp15 + tmp18;
              if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                element0$4 = runtime.Tuple.get(tmp, 0);
                element1$4 = runtime.Tuple.get(tmp, 1);
                tmp26 = element1$4 + 1;
                inlinedVal8 = globalThis.Object.freeze([
                  element0$4,
                  tmp26
                ]);
                tmp20 = runtime.safeCall(sub2(rho, inlinedVal8));
                if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                  let inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, inlinedVal14, element1$9, element0$9, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, inlinedVal15, element1$10, element0$10, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, inlinedVal16, element1$11, element0$11, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, inlinedVal17, element1$12, element0$12;
                  element0$3 = runtime.Tuple.get(tmp, 0);
                  element1$3 = runtime.Tuple.get(tmp, 1);
                  tmp25 = element1$3 + 1;
                  inlinedVal9 = globalThis.Object.freeze([
                    element0$3,
                    tmp25
                  ]);
                  tmp21 = runtime.safeCall(sub2(alpha, inlinedVal9));
                  tmp22 = tmp20 * tmp21;
                  tmp23 = tmp19 + tmp22;
                  tmp24 = tmp12 + tmp23;
                  inlinedVal1 = 0.5 * tmp24;
                  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                    let inlinedVal18, inlinedVal19, inlinedVal20, element1$13, element0$13, tmp153, element1$14, element0$14, tmp154, tmp155, element1$15, element0$15, tmp156;
                    element0$12 = runtime.Tuple.get(tmp, 0);
                    element1$12 = runtime.Tuple.get(tmp, 1);
                    inlinedVal17 = globalThis.Object.freeze([
                      element0$12,
                      element1$12
                    ]);
                    tmp123 = runtime.safeCall(sub2(p, inlinedVal17));
                    tmp124 = runtime.safeCall(west(tmp));
                    tmp125 = runtime.safeCall(sub2(z, tmp124));
                    tmp126 = runtime.safeCall(north(tmp));
                    tmp127 = runtime.safeCall(sub2(z, tmp126));
                    tmp128 = tmp125 - tmp127;
                    tmp129 = tmp123 * tmp128;
                    if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                      element0$15 = runtime.Tuple.get(tmp, 0);
                      element1$15 = runtime.Tuple.get(tmp, 1);
                      tmp156 = element0$15 + 1;
                      inlinedVal18 = globalThis.Object.freeze([
                        tmp156,
                        element1$15
                      ]);
                      tmp130 = runtime.safeCall(sub2(p, inlinedVal18));
                      tmp131 = runtime.safeCall(south(tmp));
                      tmp132 = runtime.safeCall(sub2(z, tmp131));
                      tmp133 = runtime.safeCall(west(tmp));
                      tmp134 = runtime.safeCall(sub2(z, tmp133));
                      tmp135 = tmp132 - tmp134;
                      tmp136 = tmp130 * tmp135;
                      if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                        element0$14 = runtime.Tuple.get(tmp, 0);
                        element1$14 = runtime.Tuple.get(tmp, 1);
                        tmp154 = element0$14 + 1;
                        tmp155 = element1$14 + 1;
                        inlinedVal19 = globalThis.Object.freeze([
                          tmp154,
                          tmp155
                        ]);
                        tmp137 = runtime.safeCall(sub2(p, inlinedVal19));
                        tmp138 = runtime.safeCall(east(tmp));
                        tmp139 = runtime.safeCall(sub2(z, tmp138));
                        tmp140 = runtime.safeCall(south(tmp));
                        tmp141 = runtime.safeCall(sub2(z, tmp140));
                        tmp142 = tmp139 - tmp141;
                        tmp143 = tmp137 * tmp142;
                        tmp144 = tmp136 + tmp143;
                        if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                          element0$13 = runtime.Tuple.get(tmp, 0);
                          element1$13 = runtime.Tuple.get(tmp, 1);
                          tmp153 = element1$13 + 1;
                          inlinedVal20 = globalThis.Object.freeze([
                            element0$13,
                            tmp153
                          ]);
                          tmp145 = runtime.safeCall(sub2(p, inlinedVal20));
                          tmp146 = runtime.safeCall(north(tmp));
                          tmp147 = runtime.safeCall(sub2(z, tmp146));
                          tmp148 = runtime.safeCall(east(tmp));
                          tmp149 = runtime.safeCall(sub2(z, tmp148));
                          tmp150 = tmp147 - tmp149;
                          tmp151 = tmp145 * tmp150;
                          tmp152 = tmp144 + tmp151;
                          inlinedVal10 = tmp129 + tmp152;
                          tmp3 = - inlinedVal10;
                          if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                            let inlinedVal21, inlinedVal22, inlinedVal23, element1$16, element0$16, tmp157, element1$17, element0$17, tmp158, tmp159, element1$18, element0$18, tmp160;
                            element0$11 = runtime.Tuple.get(tmp, 0);
                            element1$11 = runtime.Tuple.get(tmp, 1);
                            inlinedVal16 = globalThis.Object.freeze([
                              element0$11,
                              element1$11
                            ]);
                            tmp93 = runtime.safeCall(sub2(q, inlinedVal16));
                            tmp94 = runtime.safeCall(west(tmp));
                            tmp95 = runtime.safeCall(sub2(z, tmp94));
                            tmp96 = runtime.safeCall(north(tmp));
                            tmp97 = runtime.safeCall(sub2(z, tmp96));
                            tmp98 = tmp95 - tmp97;
                            tmp99 = tmp93 * tmp98;
                            if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                              element0$18 = runtime.Tuple.get(tmp, 0);
                              element1$18 = runtime.Tuple.get(tmp, 1);
                              tmp160 = element0$18 + 1;
                              inlinedVal21 = globalThis.Object.freeze([
                                tmp160,
                                element1$18
                              ]);
                              tmp100 = runtime.safeCall(sub2(q, inlinedVal21));
                              tmp101 = runtime.safeCall(south(tmp));
                              tmp102 = runtime.safeCall(sub2(z, tmp101));
                              tmp103 = runtime.safeCall(west(tmp));
                              tmp104 = runtime.safeCall(sub2(z, tmp103));
                              tmp105 = tmp102 - tmp104;
                              tmp106 = tmp100 * tmp105;
                              if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                                element0$17 = runtime.Tuple.get(tmp, 0);
                                element1$17 = runtime.Tuple.get(tmp, 1);
                                tmp158 = element0$17 + 1;
                                tmp159 = element1$17 + 1;
                                inlinedVal22 = globalThis.Object.freeze([
                                  tmp158,
                                  tmp159
                                ]);
                                tmp107 = runtime.safeCall(sub2(q, inlinedVal22));
                                tmp108 = runtime.safeCall(east(tmp));
                                tmp109 = runtime.safeCall(sub2(z, tmp108));
                                tmp110 = runtime.safeCall(south(tmp));
                                tmp111 = runtime.safeCall(sub2(z, tmp110));
                                tmp112 = tmp109 - tmp111;
                                tmp113 = tmp107 * tmp112;
                                tmp114 = tmp106 + tmp113;
                                if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                                  element0$16 = runtime.Tuple.get(tmp, 0);
                                  element1$16 = runtime.Tuple.get(tmp, 1);
                                  tmp157 = element1$16 + 1;
                                  inlinedVal23 = globalThis.Object.freeze([
                                    element0$16,
                                    tmp157
                                  ]);
                                  tmp115 = runtime.safeCall(sub2(q, inlinedVal23));
                                  tmp116 = runtime.safeCall(north(tmp));
                                  tmp117 = runtime.safeCall(sub2(z, tmp116));
                                  tmp118 = runtime.safeCall(east(tmp));
                                  tmp119 = runtime.safeCall(sub2(z, tmp118));
                                  tmp120 = tmp117 - tmp119;
                                  tmp121 = tmp115 * tmp120;
                                  tmp122 = tmp114 + tmp121;
                                  inlinedVal11 = tmp99 + tmp122;
                                  n1 = tmp3 - inlinedVal11;
                                  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                                    let inlinedVal24, inlinedVal25, inlinedVal26, element1$19, element0$19, tmp161, element1$20, element0$20, tmp162, tmp163, element1$21, element0$21, tmp164;
                                    element0$10 = runtime.Tuple.get(tmp, 0);
                                    element1$10 = runtime.Tuple.get(tmp, 1);
                                    inlinedVal15 = globalThis.Object.freeze([
                                      element0$10,
                                      element1$10
                                    ]);
                                    tmp63 = runtime.safeCall(sub2(p, inlinedVal15));
                                    tmp64 = runtime.safeCall(west(tmp));
                                    tmp65 = runtime.safeCall(sub2(r, tmp64));
                                    tmp66 = runtime.safeCall(north(tmp));
                                    tmp67 = runtime.safeCall(sub2(r, tmp66));
                                    tmp68 = tmp65 - tmp67;
                                    tmp69 = tmp63 * tmp68;
                                    if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                                      element0$21 = runtime.Tuple.get(tmp, 0);
                                      element1$21 = runtime.Tuple.get(tmp, 1);
                                      tmp164 = element0$21 + 1;
                                      inlinedVal24 = globalThis.Object.freeze([
                                        tmp164,
                                        element1$21
                                      ]);
                                      tmp70 = runtime.safeCall(sub2(p, inlinedVal24));
                                      tmp71 = runtime.safeCall(south(tmp));
                                      tmp72 = runtime.safeCall(sub2(r, tmp71));
                                      tmp73 = runtime.safeCall(west(tmp));
                                      tmp74 = runtime.safeCall(sub2(r, tmp73));
                                      tmp75 = tmp72 - tmp74;
                                      tmp76 = tmp70 * tmp75;
                                      if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                                        element0$20 = runtime.Tuple.get(tmp, 0);
                                        element1$20 = runtime.Tuple.get(tmp, 1);
                                        tmp162 = element0$20 + 1;
                                        tmp163 = element1$20 + 1;
                                        inlinedVal25 = globalThis.Object.freeze([
                                          tmp162,
                                          tmp163
                                        ]);
                                        tmp77 = runtime.safeCall(sub2(p, inlinedVal25));
                                        tmp78 = runtime.safeCall(east(tmp));
                                        tmp79 = runtime.safeCall(sub2(r, tmp78));
                                        tmp80 = runtime.safeCall(south(tmp));
                                        tmp81 = runtime.safeCall(sub2(r, tmp80));
                                        tmp82 = tmp79 - tmp81;
                                        tmp83 = tmp77 * tmp82;
                                        tmp84 = tmp76 + tmp83;
                                        if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                                          element0$19 = runtime.Tuple.get(tmp, 0);
                                          element1$19 = runtime.Tuple.get(tmp, 1);
                                          tmp161 = element1$19 + 1;
                                          inlinedVal26 = globalThis.Object.freeze([
                                            element0$19,
                                            tmp161
                                          ]);
                                          tmp85 = runtime.safeCall(sub2(p, inlinedVal26));
                                          tmp86 = runtime.safeCall(north(tmp));
                                          tmp87 = runtime.safeCall(sub2(r, tmp86));
                                          tmp88 = runtime.safeCall(east(tmp));
                                          tmp89 = runtime.safeCall(sub2(r, tmp88));
                                          tmp90 = tmp87 - tmp89;
                                          tmp91 = tmp85 * tmp90;
                                          tmp92 = tmp84 + tmp91;
                                          inlinedVal12 = tmp69 + tmp92;
                                          if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                                            let inlinedVal27, inlinedVal28, inlinedVal29, element1$22, element0$22, tmp165, element1$23, element0$23, tmp166, tmp167, element1$24, element0$24, tmp168;
                                            element0$9 = runtime.Tuple.get(tmp, 0);
                                            element1$9 = runtime.Tuple.get(tmp, 1);
                                            inlinedVal14 = globalThis.Object.freeze([
                                              element0$9,
                                              element1$9
                                            ]);
                                            tmp33 = runtime.safeCall(sub2(q, inlinedVal14));
                                            tmp34 = runtime.safeCall(west(tmp));
                                            tmp35 = runtime.safeCall(sub2(r, tmp34));
                                            tmp36 = runtime.safeCall(north(tmp));
                                            tmp37 = runtime.safeCall(sub2(r, tmp36));
                                            tmp38 = tmp35 - tmp37;
                                            tmp39 = tmp33 * tmp38;
                                            if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                                              element0$24 = runtime.Tuple.get(tmp, 0);
                                              element1$24 = runtime.Tuple.get(tmp, 1);
                                              tmp168 = element0$24 + 1;
                                              inlinedVal27 = globalThis.Object.freeze([
                                                tmp168,
                                                element1$24
                                              ]);
                                              tmp40 = runtime.safeCall(sub2(q, inlinedVal27));
                                              tmp41 = runtime.safeCall(south(tmp));
                                              tmp42 = runtime.safeCall(sub2(r, tmp41));
                                              tmp43 = runtime.safeCall(west(tmp));
                                              tmp44 = runtime.safeCall(sub2(r, tmp43));
                                              tmp45 = tmp42 - tmp44;
                                              tmp46 = tmp40 * tmp45;
                                              if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                                                element0$23 = runtime.Tuple.get(tmp, 0);
                                                element1$23 = runtime.Tuple.get(tmp, 1);
                                                tmp166 = element0$23 + 1;
                                                tmp167 = element1$23 + 1;
                                                inlinedVal28 = globalThis.Object.freeze([
                                                  tmp166,
                                                  tmp167
                                                ]);
                                                tmp47 = runtime.safeCall(sub2(q, inlinedVal28));
                                                tmp48 = runtime.safeCall(east(tmp));
                                                tmp49 = runtime.safeCall(sub2(r, tmp48));
                                                tmp50 = runtime.safeCall(south(tmp));
                                                tmp51 = runtime.safeCall(sub2(r, tmp50));
                                                tmp52 = tmp49 - tmp51;
                                                tmp53 = tmp47 * tmp52;
                                                tmp54 = tmp46 + tmp53;
                                                if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
                                                  element0$22 = runtime.Tuple.get(tmp, 0);
                                                  element1$22 = runtime.Tuple.get(tmp, 1);
                                                  tmp165 = element1$22 + 1;
                                                  inlinedVal29 = globalThis.Object.freeze([
                                                    element0$22,
                                                    tmp165
                                                  ]);
                                                  tmp55 = runtime.safeCall(sub2(q, inlinedVal29));
                                                  tmp56 = runtime.safeCall(north(tmp));
                                                  tmp57 = runtime.safeCall(sub2(r, tmp56));
                                                  tmp58 = runtime.safeCall(east(tmp));
                                                  tmp59 = runtime.safeCall(sub2(r, tmp58));
                                                  tmp60 = tmp57 - tmp59;
                                                  tmp61 = tmp55 * tmp60;
                                                  tmp62 = tmp54 + tmp61;
                                                  inlinedVal13 = tmp39 + tmp62;
                                                  n2 = inlinedVal12 + inlinedVal13;
                                                  u_dot = n1 / inlinedVal1;
                                                  w_dot = n2 / inlinedVal1;
                                                  tmp4 = runtime.safeCall(sub2(u, tmp));
                                                  tmp5 = delta_t * u_dot;
                                                  tmp6 = tmp4 + tmp5;
                                                  tmp7 = runtime.safeCall(sub2(w, tmp));
                                                  tmp8 = delta_t * w_dot;
                                                  tmp9 = tmp7 + tmp8;
                                                  inlinedVal = globalThis.Object.freeze([
                                                    tmp6,
                                                    tmp9
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
};
main_make_velocity_lambda$$lambda$ = function main_make_velocity_lambda$$lambda$(sub2, update2, north, south, east, west, p, q, alpha, rho, delta_t, u, w, r, z, uu, ww) {
  return (k) => {
    return (eta$0$0) => {
      return main_make_velocity_lambda$_lambda$_lambda$lambda(sub2, update2, north, south, east, west, p, q, alpha, rho, delta_t, u, w, r, z, uu, ww, k, eta$0$0)
    }
  }
};
main_make_position_make_position_matrix_lambda$_lambda$lambda = function main_make_position_make_position_matrix_lambda$_lambda$lambda(simple2, sub2, update2, south, east, r_p, z_p, n) {
  let element1$, element0$, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, rax, zax, ryx, zyx, omega, rb, zb, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal7, tmp13, inlinedVal8, tmp14, inlinedVal9, tmp15, inlinedVal10, tmp16;
  tmp12 = runtime.safeCall(south(n));
  inlinedVal1 = runtime.safeCall(sub2(r_p, tmp12));
  tmp11 = runtime.safeCall(south(n));
  inlinedVal2 = runtime.safeCall(sub2(z_p, tmp11));
  tmp16 = runtime.safeCall(east(n));
  inlinedVal10 = runtime.safeCall(south(tmp16));
  inlinedVal3 = runtime.safeCall(sub2(r_p, inlinedVal10));
  tmp15 = runtime.safeCall(east(n));
  inlinedVal9 = runtime.safeCall(south(tmp15));
  inlinedVal4 = runtime.safeCall(sub2(z_p, inlinedVal9));
  tmp14 = runtime.safeCall(south(n));
  inlinedVal8 = runtime.safeCall(south(tmp14));
  inlinedVal5 = runtime.safeCall(sub2(r_p, inlinedVal8));
  tmp13 = runtime.safeCall(south(n));
  inlinedVal7 = runtime.safeCall(south(tmp13));
  inlinedVal6 = runtime.safeCall(sub2(z_p, inlinedVal7));
  rax = inlinedVal5 - inlinedVal1;
  zax = inlinedVal6 - inlinedVal2;
  ryx = inlinedVal3 - inlinedVal1;
  zyx = inlinedVal4 - inlinedVal2;
  tmp = rax * ryx;
  tmp1 = zax * zyx;
  tmp2 = tmp + tmp1;
  tmp3 = 2.0 * tmp2;
  tmp4 = ryx * ryx;
  tmp5 = zyx * zyx;
  tmp6 = tmp4 + tmp5;
  omega = tmp3 / tmp6;
  tmp7 = inlinedVal1 - rax;
  tmp8 = omega * ryx;
  rb = tmp7 + tmp8;
  tmp9 = inlinedVal2 - zax;
  tmp10 = omega * zyx;
  zb = tmp9 + tmp10;
  inlinedVal = globalThis.Object.freeze([
    rb,
    zb
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_make_position_make_position_matrix_lambda$$lambda$ = function main_make_position_make_position_matrix_lambda$$lambda$(simple2, sub2, update2, south, east, r_p, z_p) {
  return (n) => {
    return main_make_position_make_position_matrix_lambda$_lambda$lambda(simple2, sub2, update2, south, east, r_p, z_p, n)
  }
};
main_make_position_make_position_matrix_lambda$_lambda$lambda1 = function main_make_position_make_position_matrix_lambda$_lambda$lambda(simple2, sub2, update2, north, east, r_p, z_p, n) {
  let element1$, element0$, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, rax, zax, ryx, zyx, omega, rb, zb, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal7, tmp13, inlinedVal8, tmp14, inlinedVal9, tmp15, inlinedVal10, tmp16;
  tmp12 = runtime.safeCall(north(n));
  inlinedVal1 = runtime.safeCall(sub2(r_p, tmp12));
  tmp11 = runtime.safeCall(north(n));
  inlinedVal2 = runtime.safeCall(sub2(z_p, tmp11));
  tmp16 = runtime.safeCall(east(n));
  inlinedVal10 = runtime.safeCall(north(tmp16));
  inlinedVal3 = runtime.safeCall(sub2(r_p, inlinedVal10));
  tmp15 = runtime.safeCall(east(n));
  inlinedVal9 = runtime.safeCall(north(tmp15));
  inlinedVal4 = runtime.safeCall(sub2(z_p, inlinedVal9));
  tmp14 = runtime.safeCall(north(n));
  inlinedVal8 = runtime.safeCall(north(tmp14));
  inlinedVal5 = runtime.safeCall(sub2(r_p, inlinedVal8));
  tmp13 = runtime.safeCall(north(n));
  inlinedVal7 = runtime.safeCall(north(tmp13));
  inlinedVal6 = runtime.safeCall(sub2(z_p, inlinedVal7));
  rax = inlinedVal5 - inlinedVal1;
  zax = inlinedVal6 - inlinedVal2;
  ryx = inlinedVal3 - inlinedVal1;
  zyx = inlinedVal4 - inlinedVal2;
  tmp = rax * ryx;
  tmp1 = zax * zyx;
  tmp2 = tmp + tmp1;
  tmp3 = 2.0 * tmp2;
  tmp4 = ryx * ryx;
  tmp5 = zyx * zyx;
  tmp6 = tmp4 + tmp5;
  omega = tmp3 / tmp6;
  tmp7 = inlinedVal1 - rax;
  tmp8 = omega * ryx;
  rb = tmp7 + tmp8;
  tmp9 = inlinedVal2 - zax;
  tmp10 = omega * zyx;
  zb = tmp9 + tmp10;
  inlinedVal = globalThis.Object.freeze([
    rb,
    zb
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_make_position_make_position_matrix_lambda$$lambda$1 = function main_make_position_make_position_matrix_lambda$$lambda$(simple2, sub2, update2, north, east, r_p, z_p) {
  return (n) => {
    return main_make_position_make_position_matrix_lambda$_lambda$lambda1(simple2, sub2, update2, north, east, r_p, z_p, n)
  }
};
main_make_position_make_position_matrix_lambda$_lambda$lambda2 = function main_make_position_make_position_matrix_lambda$_lambda$lambda(simple2, sub2, update2, south, west, r_p, z_p, n) {
  let element1$, element0$, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, rax, zax, ryx, zyx, omega, rb, zb, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal7, tmp13, inlinedVal8, tmp14, inlinedVal9, tmp15, inlinedVal10, tmp16;
  tmp12 = runtime.safeCall(west(n));
  inlinedVal1 = runtime.safeCall(sub2(r_p, tmp12));
  tmp11 = runtime.safeCall(west(n));
  inlinedVal2 = runtime.safeCall(sub2(z_p, tmp11));
  tmp16 = runtime.safeCall(west(n));
  inlinedVal10 = runtime.safeCall(south(tmp16));
  inlinedVal3 = runtime.safeCall(sub2(r_p, inlinedVal10));
  tmp15 = runtime.safeCall(west(n));
  inlinedVal9 = runtime.safeCall(south(tmp15));
  inlinedVal4 = runtime.safeCall(sub2(z_p, inlinedVal9));
  tmp14 = runtime.safeCall(west(n));
  inlinedVal8 = runtime.safeCall(west(tmp14));
  inlinedVal5 = runtime.safeCall(sub2(r_p, inlinedVal8));
  tmp13 = runtime.safeCall(west(n));
  inlinedVal7 = runtime.safeCall(west(tmp13));
  inlinedVal6 = runtime.safeCall(sub2(z_p, inlinedVal7));
  rax = inlinedVal5 - inlinedVal1;
  zax = inlinedVal6 - inlinedVal2;
  ryx = inlinedVal3 - inlinedVal1;
  zyx = inlinedVal4 - inlinedVal2;
  tmp = rax * ryx;
  tmp1 = zax * zyx;
  tmp2 = tmp + tmp1;
  tmp3 = 2.0 * tmp2;
  tmp4 = ryx * ryx;
  tmp5 = zyx * zyx;
  tmp6 = tmp4 + tmp5;
  omega = tmp3 / tmp6;
  tmp7 = inlinedVal1 - rax;
  tmp8 = omega * ryx;
  rb = tmp7 + tmp8;
  tmp9 = inlinedVal2 - zax;
  tmp10 = omega * zyx;
  zb = tmp9 + tmp10;
  inlinedVal = globalThis.Object.freeze([
    rb,
    zb
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_make_position_make_position_matrix_lambda$$lambda$2 = function main_make_position_make_position_matrix_lambda$$lambda$(simple2, sub2, update2, south, west, r_p, z_p) {
  return (n) => {
    return main_make_position_make_position_matrix_lambda$_lambda$lambda2(simple2, sub2, update2, south, west, r_p, z_p, n)
  }
};
main_make_position_make_position_matrix_lambda$_lambda$lambda3 = function main_make_position_make_position_matrix_lambda$_lambda$lambda(simple2, sub2, update2, south, east, r_p, z_p, n) {
  let element1$, element0$, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, rax, zax, ryx, zyx, omega, rb, zb, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal7, tmp13, inlinedVal8, tmp14, inlinedVal9, tmp15, inlinedVal10, tmp16;
  tmp12 = runtime.safeCall(east(n));
  inlinedVal1 = runtime.safeCall(sub2(r_p, tmp12));
  tmp11 = runtime.safeCall(east(n));
  inlinedVal2 = runtime.safeCall(sub2(z_p, tmp11));
  tmp16 = runtime.safeCall(east(n));
  inlinedVal10 = runtime.safeCall(south(tmp16));
  inlinedVal3 = runtime.safeCall(sub2(r_p, inlinedVal10));
  tmp15 = runtime.safeCall(east(n));
  inlinedVal9 = runtime.safeCall(south(tmp15));
  inlinedVal4 = runtime.safeCall(sub2(z_p, inlinedVal9));
  tmp14 = runtime.safeCall(east(n));
  inlinedVal8 = runtime.safeCall(east(tmp14));
  inlinedVal5 = runtime.safeCall(sub2(r_p, inlinedVal8));
  tmp13 = runtime.safeCall(east(n));
  inlinedVal7 = runtime.safeCall(east(tmp13));
  inlinedVal6 = runtime.safeCall(sub2(z_p, inlinedVal7));
  rax = inlinedVal5 - inlinedVal1;
  zax = inlinedVal6 - inlinedVal2;
  ryx = inlinedVal3 - inlinedVal1;
  zyx = inlinedVal4 - inlinedVal2;
  tmp = rax * ryx;
  tmp1 = zax * zyx;
  tmp2 = tmp + tmp1;
  tmp3 = 2.0 * tmp2;
  tmp4 = ryx * ryx;
  tmp5 = zyx * zyx;
  tmp6 = tmp4 + tmp5;
  omega = tmp3 / tmp6;
  tmp7 = inlinedVal1 - rax;
  tmp8 = omega * ryx;
  rb = tmp7 + tmp8;
  tmp9 = inlinedVal2 - zax;
  tmp10 = omega * zyx;
  zb = tmp9 + tmp10;
  inlinedVal = globalThis.Object.freeze([
    rb,
    zb
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    runtime.safeCall(update2(r_p, n, element0$));
    return runtime.safeCall(update2(z_p, n, element1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_make_position_make_position_matrix_lambda$$lambda$3 = function main_make_position_make_position_matrix_lambda$$lambda$(simple2, sub2, update2, south, east, r_p, z_p) {
  return (n) => {
    return main_make_position_make_position_matrix_lambda$_lambda$lambda3(simple2, sub2, update2, south, east, r_p, z_p, n)
  }
};
main_make_area_density_volume_lambda$_reflect_south_reflect$reflect = function main_make_area_density_volume_lambda$_reflect_south_reflect$reflect(sub2) {
  return (dir) => {
    return (node) => {
      return (a) => {
        let tmp;
        tmp = runtime.safeCall(dir(node));
        return runtime.safeCall(sub2(a, tmp))
      }
    }
  }
};
main_make_area_density_volume_lambda$_reflect_south$reflect_south = function main_make_area_density_volume_lambda$_reflect_south$reflect_south(sub2, south) {
  return (x) => {
    return main_make_area_density_volume_lambda$_reflect_south_reflect$reflect(sub2)(south)(x)
  }
};
main_make_area_density_volume_lambda$$lambda$ = function main_make_area_density_volume_lambda$$lambda$(simple2, sub2, update2, south, alpha_p, s_p, rho_p) {
  return (zone) => {
    let tmp;
    tmp = main_make_area_density_volume_lambda$_reflect_south$reflect_south(sub2, south);
    return r_area_vol_den(update2, alpha_p, s_p, rho_p, tmp, zone)
  }
};
main_make_area_density_volume_lambda$_reflect_east_reflect$reflect = function main_make_area_density_volume_lambda$_reflect_east_reflect$reflect(sub2) {
  return (dir) => {
    return (node) => {
      return (a) => {
        let tmp;
        tmp = runtime.safeCall(dir(node));
        return runtime.safeCall(sub2(a, tmp))
      }
    }
  }
};
main_make_area_density_volume_lambda$_reflect_east$reflect_east = function main_make_area_density_volume_lambda$_reflect_east$reflect_east(sub2, east) {
  return (x) => {
    return main_make_area_density_volume_lambda$_reflect_east_reflect$reflect(sub2)(east)(x)
  }
};
main_make_area_density_volume_lambda$$lambda$1 = function main_make_area_density_volume_lambda$$lambda$(simple2, sub2, update2, east, alpha_p, s_p, rho_p) {
  return (zone) => {
    let tmp;
    tmp = main_make_area_density_volume_lambda$_reflect_east$reflect_east(sub2, east);
    return r_area_vol_den(update2, alpha_p, s_p, rho_p, tmp, zone)
  }
};
main_make_area_density_volume_lambda$_reflect_west_reflect$reflect = function main_make_area_density_volume_lambda$_reflect_west_reflect$reflect(sub2) {
  return (dir) => {
    return (node) => {
      return (a) => {
        let tmp;
        tmp = runtime.safeCall(dir(node));
        return runtime.safeCall(sub2(a, tmp))
      }
    }
  }
};
main_make_area_density_volume_lambda$_reflect_west$reflect_west = function main_make_area_density_volume_lambda$_reflect_west$reflect_west(sub2, west) {
  return (x) => {
    return main_make_area_density_volume_lambda$_reflect_west_reflect$reflect(sub2)(west)(x)
  }
};
main_make_area_density_volume_lambda$$lambda$2 = function main_make_area_density_volume_lambda$$lambda$(simple2, sub2, update2, west, alpha_p, s_p, rho_p) {
  return (zone) => {
    let tmp;
    tmp = main_make_area_density_volume_lambda$_reflect_west$reflect_west(sub2, west);
    return r_area_vol_den(update2, alpha_p, s_p, rho_p, tmp, zone)
  }
};
main_make_area_density_volume_lambda$_reflect_north_reflect$reflect = function main_make_area_density_volume_lambda$_reflect_north_reflect$reflect(sub2) {
  return (dir) => {
    return (node) => {
      return (a) => {
        let tmp;
        tmp = runtime.safeCall(dir(node));
        return runtime.safeCall(sub2(a, tmp))
      }
    }
  }
};
main_make_area_density_volume_lambda$_reflect_north$reflect_north = function main_make_area_density_volume_lambda$_reflect_north$reflect_north(sub2, north) {
  return (x) => {
    return main_make_area_density_volume_lambda$_reflect_north_reflect$reflect(sub2)(north)(x)
  }
};
main_make_area_density_volume_lambda$$lambda$3 = function main_make_area_density_volume_lambda$$lambda$(simple2, sub2, update2, north, alpha_p, s_p, rho_p) {
  return (zone) => {
    let tmp;
    tmp = main_make_area_density_volume_lambda$_reflect_north$reflect_north(sub2, north);
    return r_area_vol_den(update2, alpha_p, s_p, rho_p, tmp, zone)
  }
};
main_make_area_density_volume_lambda$_lambda$lambda = function main_make_area_density_volume_lambda$_lambda$lambda(simple2, sub2, update2, north, west, rho, s, x_p, alpha_p, s_p, rho_p, zone) {
  let inlinedVal, density, element1$, element0$, tmp, tmp1, tmp2, inlinedVal1, r1, z1, r2, z2, r3, z3, r4, z4, area1, radius1, volume1, area2, radius2, volume2, element1$1, element0$1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
  if (runtime.Tuple.isArrayLike(x_p) && x_p.length === 2) {
    let inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, tmp21, inlinedVal7, tmp22;
    element0$1 = runtime.Tuple.get(x_p, 0);
    element1$1 = runtime.Tuple.get(x_p, 1);
    inlinedVal2 = runtime.safeCall(west(zone));
    r1 = runtime.safeCall(sub2(element0$1, inlinedVal2));
    inlinedVal3 = runtime.safeCall(west(zone));
    z1 = runtime.safeCall(sub2(element1$1, inlinedVal3));
    r2 = runtime.safeCall(sub2(element0$1, zone));
    z2 = runtime.safeCall(sub2(element1$1, zone));
    inlinedVal4 = runtime.safeCall(north(zone));
    r3 = runtime.safeCall(sub2(element0$1, inlinedVal4));
    inlinedVal5 = runtime.safeCall(north(zone));
    z3 = runtime.safeCall(sub2(element1$1, inlinedVal5));
    tmp22 = runtime.safeCall(west(zone));
    inlinedVal7 = runtime.safeCall(north(tmp22));
    r4 = runtime.safeCall(sub2(element0$1, inlinedVal7));
    tmp21 = runtime.safeCall(west(zone));
    inlinedVal6 = runtime.safeCall(north(tmp21));
    z4 = runtime.safeCall(sub2(element1$1, inlinedVal6));
    tmp3 = r2 - r1;
    tmp4 = z3 - z1;
    tmp5 = tmp3 * tmp4;
    tmp6 = r3 - r2;
    tmp7 = z3 - z2;
    tmp8 = tmp6 * tmp7;
    area1 = tmp5 - tmp8;
    tmp9 = r1 + r2;
    tmp10 = tmp9 + r3;
    radius1 = 0.3333 * tmp10;
    volume1 = area1 * radius1;
    tmp11 = r3 - r1;
    tmp12 = z4 - z3;
    tmp13 = tmp11 * tmp12;
    tmp14 = r4 - r3;
    tmp15 = z3 - z1;
    tmp16 = tmp14 * tmp15;
    area2 = tmp13 - tmp16;
    tmp17 = r1 + r3;
    tmp18 = tmp17 + r4;
    radius2 = 0.3333 * tmp18;
    volume2 = area2 * radius2;
    tmp19 = area1 + area2;
    tmp20 = volume1 + volume2;
    inlinedVal1 = globalThis.Object.freeze([
      tmp19,
      tmp20
    ]);
    if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal1, 0);
      element1$ = runtime.Tuple.get(inlinedVal1, 1);
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
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_make_area_density_volume_lambda$$lambda$4 = function main_make_area_density_volume_lambda$$lambda$(simple2, sub2, update2, north, west, rho, s, x_p, alpha_p, s_p, rho_p) {
  return (zone) => {
    return main_make_area_density_volume_lambda$_lambda$lambda(simple2, sub2, update2, north, west, rho, s, x_p, alpha_p, s_p, rho_p, zone)
  }
};
main_make_viscosity_lambda$_lambda$lambda = function main_make_viscosity_lambda$_lambda$lambda(sub2, update2, pow, north, west, p, alpha_p, rho_p, u_p, w_p, z_p, r_p, q_p, d, zone) {
  let element1$, element0$, inlinedVal, xi, eta, upper_disc, lower_disc, scrut, scrut1, speed_of_sound, ubar, viscosity, courant_delta, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, inlinedVal17, inlinedVal18, inlinedVal19, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, inlinedVal20, inlinedVal21, inlinedVal22, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, inlinedVal23, inlinedVal24, inlinedVal25, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, inlinedVal26, inlinedVal27, inlinedVal28, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, inlinedVal29, inlinedVal30, inlinedVal31, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, inlinedVal32, inlinedVal33, inlinedVal34, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, inlinedVal35, inlinedVal36, inlinedVal37, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, inlinedVal38, inlinedVal39, inlinedVal40, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, inlinedVal41, inlinedVal42, inlinedVal43, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, inlinedVal44, inlinedVal45, inlinedVal46, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, inlinedVal47, inlinedVal48, inlinedVal49, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, inlinedVal50, inlinedVal51, inlinedVal52, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, inlinedVal53, inlinedVal54, inlinedVal55, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, inlinedVal56, inlinedVal57, inlinedVal58, tmp137;
  tmp130 = runtime.safeCall(sub2(r_p, zone));
  inlinedVal56 = runtime.safeCall(north(zone));
  tmp131 = runtime.safeCall(sub2(r_p, inlinedVal56));
  tmp132 = tmp130 - tmp131;
  inlinedVal57 = runtime.safeCall(west(zone));
  tmp133 = runtime.safeCall(sub2(r_p, inlinedVal57));
  tmp137 = runtime.safeCall(west(zone));
  inlinedVal58 = runtime.safeCall(north(tmp137));
  tmp134 = runtime.safeCall(sub2(r_p, inlinedVal58));
  tmp135 = tmp133 - tmp134;
  tmp136 = tmp132 + tmp135;
  inlinedVal3 = 0.5 * tmp136;
  tmp = runtime.safeCall(pow(inlinedVal3, 2));
  tmp122 = runtime.safeCall(sub2(z_p, zone));
  inlinedVal53 = runtime.safeCall(north(zone));
  tmp123 = runtime.safeCall(sub2(z_p, inlinedVal53));
  tmp124 = tmp122 - tmp123;
  inlinedVal54 = runtime.safeCall(west(zone));
  tmp125 = runtime.safeCall(sub2(z_p, inlinedVal54));
  tmp129 = runtime.safeCall(west(zone));
  inlinedVal55 = runtime.safeCall(north(tmp129));
  tmp126 = runtime.safeCall(sub2(z_p, inlinedVal55));
  tmp127 = tmp125 - tmp126;
  tmp128 = tmp124 + tmp127;
  inlinedVal4 = 0.5 * tmp128;
  tmp1 = runtime.safeCall(pow(inlinedVal4, 2));
  xi = tmp + tmp1;
  tmp114 = runtime.safeCall(sub2(r_p, zone));
  inlinedVal50 = runtime.safeCall(west(zone));
  tmp115 = runtime.safeCall(sub2(r_p, inlinedVal50));
  tmp116 = tmp114 - tmp115;
  inlinedVal51 = runtime.safeCall(north(zone));
  tmp117 = runtime.safeCall(sub2(r_p, inlinedVal51));
  tmp121 = runtime.safeCall(west(zone));
  inlinedVal52 = runtime.safeCall(north(tmp121));
  tmp118 = runtime.safeCall(sub2(r_p, inlinedVal52));
  tmp119 = tmp117 - tmp118;
  tmp120 = tmp116 + tmp119;
  inlinedVal5 = 0.5 * tmp120;
  tmp2 = runtime.safeCall(pow(inlinedVal5, 2));
  tmp106 = runtime.safeCall(sub2(z_p, zone));
  inlinedVal47 = runtime.safeCall(west(zone));
  tmp107 = runtime.safeCall(sub2(z_p, inlinedVal47));
  tmp108 = tmp106 - tmp107;
  inlinedVal48 = runtime.safeCall(north(zone));
  tmp109 = runtime.safeCall(sub2(z_p, inlinedVal48));
  tmp113 = runtime.safeCall(west(zone));
  inlinedVal49 = runtime.safeCall(north(tmp113));
  tmp110 = runtime.safeCall(sub2(z_p, inlinedVal49));
  tmp111 = tmp109 - tmp110;
  tmp112 = tmp108 + tmp111;
  inlinedVal6 = 0.5 * tmp112;
  tmp3 = runtime.safeCall(pow(inlinedVal6, 2));
  eta = tmp2 + tmp3;
  tmp98 = runtime.safeCall(sub2(r_p, zone));
  inlinedVal44 = runtime.safeCall(north(zone));
  tmp99 = runtime.safeCall(sub2(r_p, inlinedVal44));
  tmp100 = tmp98 - tmp99;
  inlinedVal45 = runtime.safeCall(west(zone));
  tmp101 = runtime.safeCall(sub2(r_p, inlinedVal45));
  tmp105 = runtime.safeCall(west(zone));
  inlinedVal46 = runtime.safeCall(north(tmp105));
  tmp102 = runtime.safeCall(sub2(r_p, inlinedVal46));
  tmp103 = tmp101 - tmp102;
  tmp104 = tmp100 + tmp103;
  inlinedVal7 = 0.5 * tmp104;
  tmp90 = runtime.safeCall(sub2(w_p, zone));
  inlinedVal41 = runtime.safeCall(west(zone));
  tmp91 = runtime.safeCall(sub2(w_p, inlinedVal41));
  tmp92 = tmp90 - tmp91;
  inlinedVal42 = runtime.safeCall(north(zone));
  tmp93 = runtime.safeCall(sub2(w_p, inlinedVal42));
  tmp97 = runtime.safeCall(west(zone));
  inlinedVal43 = runtime.safeCall(north(tmp97));
  tmp94 = runtime.safeCall(sub2(w_p, inlinedVal43));
  tmp95 = tmp93 - tmp94;
  tmp96 = tmp92 + tmp95;
  inlinedVal8 = 0.5 * tmp96;
  tmp4 = inlinedVal7 * inlinedVal8;
  tmp82 = runtime.safeCall(sub2(z_p, zone));
  inlinedVal38 = runtime.safeCall(north(zone));
  tmp83 = runtime.safeCall(sub2(z_p, inlinedVal38));
  tmp84 = tmp82 - tmp83;
  inlinedVal39 = runtime.safeCall(west(zone));
  tmp85 = runtime.safeCall(sub2(z_p, inlinedVal39));
  tmp89 = runtime.safeCall(west(zone));
  inlinedVal40 = runtime.safeCall(north(tmp89));
  tmp86 = runtime.safeCall(sub2(z_p, inlinedVal40));
  tmp87 = tmp85 - tmp86;
  tmp88 = tmp84 + tmp87;
  inlinedVal9 = 0.5 * tmp88;
  tmp74 = runtime.safeCall(sub2(u_p, zone));
  inlinedVal35 = runtime.safeCall(west(zone));
  tmp75 = runtime.safeCall(sub2(u_p, inlinedVal35));
  tmp76 = tmp74 - tmp75;
  inlinedVal36 = runtime.safeCall(north(zone));
  tmp77 = runtime.safeCall(sub2(u_p, inlinedVal36));
  tmp81 = runtime.safeCall(west(zone));
  inlinedVal37 = runtime.safeCall(north(tmp81));
  tmp78 = runtime.safeCall(sub2(u_p, inlinedVal37));
  tmp79 = tmp77 - tmp78;
  tmp80 = tmp76 + tmp79;
  inlinedVal10 = 0.5 * tmp80;
  tmp5 = inlinedVal9 * inlinedVal10;
  upper_disc = tmp4 - tmp5;
  tmp66 = runtime.safeCall(sub2(u_p, zone));
  inlinedVal32 = runtime.safeCall(north(zone));
  tmp67 = runtime.safeCall(sub2(u_p, inlinedVal32));
  tmp68 = tmp66 - tmp67;
  inlinedVal33 = runtime.safeCall(west(zone));
  tmp69 = runtime.safeCall(sub2(u_p, inlinedVal33));
  tmp73 = runtime.safeCall(west(zone));
  inlinedVal34 = runtime.safeCall(north(tmp73));
  tmp70 = runtime.safeCall(sub2(u_p, inlinedVal34));
  tmp71 = tmp69 - tmp70;
  tmp72 = tmp68 + tmp71;
  inlinedVal11 = 0.5 * tmp72;
  tmp58 = runtime.safeCall(sub2(z_p, zone));
  inlinedVal29 = runtime.safeCall(west(zone));
  tmp59 = runtime.safeCall(sub2(z_p, inlinedVal29));
  tmp60 = tmp58 - tmp59;
  inlinedVal30 = runtime.safeCall(north(zone));
  tmp61 = runtime.safeCall(sub2(z_p, inlinedVal30));
  tmp65 = runtime.safeCall(west(zone));
  inlinedVal31 = runtime.safeCall(north(tmp65));
  tmp62 = runtime.safeCall(sub2(z_p, inlinedVal31));
  tmp63 = tmp61 - tmp62;
  tmp64 = tmp60 + tmp63;
  inlinedVal12 = 0.5 * tmp64;
  tmp6 = inlinedVal11 * inlinedVal12;
  tmp50 = runtime.safeCall(sub2(w_p, zone));
  inlinedVal26 = runtime.safeCall(north(zone));
  tmp51 = runtime.safeCall(sub2(w_p, inlinedVal26));
  tmp52 = tmp50 - tmp51;
  inlinedVal27 = runtime.safeCall(west(zone));
  tmp53 = runtime.safeCall(sub2(w_p, inlinedVal27));
  tmp57 = runtime.safeCall(west(zone));
  inlinedVal28 = runtime.safeCall(north(tmp57));
  tmp54 = runtime.safeCall(sub2(w_p, inlinedVal28));
  tmp55 = tmp53 - tmp54;
  tmp56 = tmp52 + tmp55;
  inlinedVal13 = 0.5 * tmp56;
  tmp42 = runtime.safeCall(sub2(r_p, zone));
  inlinedVal23 = runtime.safeCall(west(zone));
  tmp43 = runtime.safeCall(sub2(r_p, inlinedVal23));
  tmp44 = tmp42 - tmp43;
  inlinedVal24 = runtime.safeCall(north(zone));
  tmp45 = runtime.safeCall(sub2(r_p, inlinedVal24));
  tmp49 = runtime.safeCall(west(zone));
  inlinedVal25 = runtime.safeCall(north(tmp49));
  tmp46 = runtime.safeCall(sub2(r_p, inlinedVal25));
  tmp47 = tmp45 - tmp46;
  tmp48 = tmp44 + tmp47;
  inlinedVal14 = 0.5 * tmp48;
  tmp7 = inlinedVal13 * inlinedVal14;
  lower_disc = tmp6 - tmp7;
  scrut = upper_disc < 0.0;
  if (scrut === true) {
    tmp8 = upper_disc / xi;
  } else {
    tmp8 = 0.0;
  }
  scrut1 = lower_disc < 0.0;
  if (scrut1 === true) {
    tmp9 = lower_disc / eta;
  } else {
    tmp9 = 0.0;
  }
  tmp10 = runtime.safeCall(sub2(p, zone));
  tmp11 = 1.6 * tmp10;
  tmp12 = runtime.safeCall(sub2(rho_p, zone));
  speed_of_sound = tmp11 / tmp12;
  tmp13 = runtime.safeCall(pow(tmp8, 2));
  tmp14 = runtime.safeCall(pow(tmp9, 2));
  ubar = tmp13 + tmp14;
  tmp15 = runtime.safeCall(sub2(rho_p, zone));
  tmp16 = 1.5 * ubar;
  tmp17 = 0.5 * speed_of_sound;
  inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(ubar));
  tmp18 = tmp17 * inlinedVal1;
  tmp19 = tmp16 + tmp18;
  viscosity = tmp15 * tmp19;
  tmp34 = runtime.safeCall(sub2(r_p, zone));
  inlinedVal20 = runtime.safeCall(north(zone));
  tmp35 = runtime.safeCall(sub2(r_p, inlinedVal20));
  tmp36 = tmp34 - tmp35;
  inlinedVal21 = runtime.safeCall(west(zone));
  tmp37 = runtime.safeCall(sub2(r_p, inlinedVal21));
  tmp41 = runtime.safeCall(west(zone));
  inlinedVal22 = runtime.safeCall(north(tmp41));
  tmp38 = runtime.safeCall(sub2(r_p, inlinedVal22));
  tmp39 = tmp37 - tmp38;
  tmp40 = tmp36 + tmp39;
  inlinedVal15 = 0.5 * tmp40;
  tmp20 = runtime.safeCall(pow(inlinedVal15, 2));
  tmp26 = runtime.safeCall(sub2(r_p, zone));
  inlinedVal17 = runtime.safeCall(west(zone));
  tmp27 = runtime.safeCall(sub2(r_p, inlinedVal17));
  tmp28 = tmp26 - tmp27;
  inlinedVal18 = runtime.safeCall(north(zone));
  tmp29 = runtime.safeCall(sub2(r_p, inlinedVal18));
  tmp33 = runtime.safeCall(west(zone));
  inlinedVal19 = runtime.safeCall(north(tmp33));
  tmp30 = runtime.safeCall(sub2(r_p, inlinedVal19));
  tmp31 = tmp29 - tmp30;
  tmp32 = tmp28 + tmp31;
  inlinedVal16 = 0.5 * tmp32;
  tmp21 = runtime.safeCall(pow(inlinedVal16, 2));
  tmp22 = tmp20 + tmp21;
  inlinedVal2 = runtime.safeCall(globalThis.Math.sqrt(tmp22));
  tmp23 = runtime.safeCall(sub2(alpha_p, zone));
  tmp24 = 0.5 * tmp23;
  tmp25 = speed_of_sound * inlinedVal2;
  courant_delta = tmp24 / tmp25;
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
};
main_make_viscosity_lambda$$lambda$ = function main_make_viscosity_lambda$$lambda$(sub2, update2, pow, north, west, p, alpha_p, rho_p, u_p, w_p, z_p, r_p, q_p, d) {
  return (zone) => {
    return main_make_viscosity_lambda$_lambda$lambda(sub2, update2, pow, north, west, p, alpha_p, rho_p, u_p, w_p, z_p, r_p, q_p, d, zone)
  }
};
main_lambda$_lambda_energy_equation_zonal_energy$zonal_energy$worker1 = function main_lambda$_lambda_energy_equation_zonal_energy$zonal_energy$worker(sub2, pow, rho_value, theta_value) {
  let scrut, element3$, element2$, element1$, element0$;
  scrut = simple1[extract_energy_tables_from_constants$accessorSymbol];
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
    let rho_index, theta_index, a, tmp, tmp1, f, inlinedVal;
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    element3$ = runtime.Tuple.get(scrut, 3);
    rho_index = table_search(simple1, element2$, rho_value);
    theta_index = table_search(simple1, element3$, theta_value);
    tmp = globalThis.Object.freeze([
      rho_index,
      theta_index
    ]);
    a = runtime.safeCall(sub2(element0$, tmp));
    tmp1 = from_(simple1, 0, element1$);
    f = lambda$28(simple1, sub2, pow, element1$, rho_value, theta_value, a);
    inlinedVal = simple1[map$tailrec$accessorSymbol](f, tmp1);
    if (inlinedVal instanceof simple1.Cons.class) {
      if (inlinedVal instanceof simple1.Nil.class) {
        return 0.0
      } else if (inlinedVal instanceof simple1.Cons.class) {
        return lambda33(simple1, lambda, inlinedVal, 0.0)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_lambda$_lambda_energy_equation$energy_equation = function main_lambda$_lambda_energy_equation$energy_equation(simple2, sub2, pow, rho_kl, epsilon_kl) {
  return (theta_kl) => {
    let inlinedVal;
    inlinedVal = main_lambda$_lambda_energy_equation_zonal_energy$zonal_energy$worker1(sub2, pow, rho_kl, theta_kl);
    return epsilon_kl - inlinedVal
  }
};
main_lambda$_lambda$lambda = function main_lambda$_lambda$lambda(simple2, sub2, update2, pow, p, epsilon, rho, theta, rho_prime, q_prime, m, zone) {
  let qkl, rho_kl, rho_prime_kl, tau_kl, epsilon_0, p_0, theta_0, tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, scrut, element3$, element2$, element1$, element0$;
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
  tmp4 = main_lambda$_lambda_energy_equation$energy_equation(simple2, sub2, pow, rho_kl, inlinedVal);
  inlinedVal1 = simple2[newton_raphson$accessorSymbol](tmp4, theta_0);
  scrut = simple1[extract_pressure_tables_from_constants$accessorSymbol];
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
    let rho_index, theta_index, a, tmp8, tmp9, f, inlinedVal4;
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    element3$ = runtime.Tuple.get(scrut, 3);
    rho_index = table_search(simple1, element2$, rho_kl);
    theta_index = table_search(simple1, element3$, inlinedVal1);
    tmp8 = globalThis.Object.freeze([
      rho_index,
      theta_index
    ]);
    a = runtime.safeCall(sub2(element0$, tmp8));
    tmp9 = from_(simple1, 0, element1$);
    f = lambda$28(simple1, sub2, pow, element1$, rho_kl, inlinedVal1, a);
    inlinedVal4 = simple1[map$tailrec$accessorSymbol](f, tmp9);
    if (inlinedVal4 instanceof simple1.Cons.class) {
      let inlinedVal5;
      if (inlinedVal4 instanceof simple1.Nil.class) {
        inlinedVal5 = 0.0;
      } else if (inlinedVal4 instanceof simple1.Cons.class) {
        inlinedVal5 = lambda33(simple1, lambda, inlinedVal4, 0.0);
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      tmp5 = inlinedVal5 + qkl;
      tmp6 = tmp5 * tau_kl;
      inlinedVal2 = epsilon_0 - tmp6;
      tmp7 = main_lambda$_lambda_energy_equation$energy_equation1(simple2, sub2, pow, rho_kl, inlinedVal2);
      inlinedVal3 = simple2[newton_raphson$accessorSymbol](tmp7, inlinedVal1);
      return runtime.safeCall(update2(m, zone, inlinedVal3))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_lambda$$lambda$ = function main_lambda$$lambda$(simple2, sub2, update2, pow, p, epsilon, rho, theta, rho_prime, q_prime, m) {
  return (zone) => {
    return main_lambda$_lambda$lambda(simple2, sub2, update2, pow, p, epsilon, rho, theta, rho_prime, q_prime, m, zone)
  }
};
main_lambda$_lambda_energy_equation_zonal_energy$zonal_energy$worker = function main_lambda$_lambda_energy_equation_zonal_energy$zonal_energy$worker(sub2, pow, rho_value, theta_value) {
  let scrut, element3$, element2$, element1$, element0$;
  scrut = simple1[extract_energy_tables_from_constants$accessorSymbol];
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
    let rho_index, theta_index, a, tmp, tmp1, f, inlinedVal;
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    element3$ = runtime.Tuple.get(scrut, 3);
    rho_index = table_search(simple1, element2$, rho_value);
    theta_index = table_search(simple1, element3$, theta_value);
    tmp = globalThis.Object.freeze([
      rho_index,
      theta_index
    ]);
    a = runtime.safeCall(sub2(element0$, tmp));
    tmp1 = from_(simple1, 0, element1$);
    f = lambda$28(simple1, sub2, pow, element1$, rho_value, theta_value, a);
    inlinedVal = simple1[map$tailrec$accessorSymbol](f, tmp1);
    if (inlinedVal instanceof simple1.Cons.class) {
      if (inlinedVal instanceof simple1.Nil.class) {
        return 0.0
      } else if (inlinedVal instanceof simple1.Cons.class) {
        return lambda33(simple1, lambda, inlinedVal, 0.0)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_lambda$_lambda_energy_equation$energy_equation1 = function main_lambda$_lambda_energy_equation$energy_equation(simple2, sub2, pow, rho_kl, epsilon_kl) {
  return (theta_kl) => {
    let inlinedVal;
    inlinedVal = main_lambda$_lambda_energy_equation_zonal_energy$zonal_energy$worker(sub2, pow, rho_kl, theta_kl);
    return epsilon_kl - inlinedVal
  }
};
main_compute_heat_conduction_make_gamma_lambda$_lambda$lambda = function main_compute_heat_conduction_make_gamma_lambda$_lambda$lambda(sub2, update2, pow, cc, succeeding, adjacent, r_prime, z_prime, m, zone) {
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
};
main_compute_heat_conduction_make_gamma_lambda$$lambda$ = function main_compute_heat_conduction_make_gamma_lambda$$lambda$(sub2, update2, pow, cc, succeeding, adjacent, r_prime, z_prime, m) {
  return (zone) => {
    return main_compute_heat_conduction_make_gamma_lambda$_lambda$lambda(sub2, update2, pow, cc, succeeding, adjacent, r_prime, z_prime, m, zone)
  }
};
main_compute_heat_conduction_make_gamma_lambda$_lambda$lambda1 = function main_compute_heat_conduction_make_gamma_lambda$_lambda$lambda(sub2, update2, pow, cc, succeeding, adjacent, r_prime, z_prime, m, zone) {
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
};
main_compute_heat_conduction_make_gamma_lambda$$lambda$1 = function main_compute_heat_conduction_make_gamma_lambda$$lambda$(sub2, update2, pow, cc, succeeding, adjacent, r_prime, z_prime, m) {
  return (zone) => {
    return main_compute_heat_conduction_make_gamma_lambda$_lambda$lambda1(sub2, update2, pow, cc, succeeding, adjacent, r_prime, z_prime, m, zone)
  }
};
main_compute_heat_conduction_make_cc_lambda$_lambda$lambda = function main_compute_heat_conduction_make_cc_lambda$_lambda$lambda(sub2, update2, pow, alpha_prime, theta_hat, cc, zone) {
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
};
main_compute_heat_conduction_make_cc_lambda$$lambda$ = function main_compute_heat_conduction_make_cc_lambda$$lambda$(sub2, update2, pow, alpha_prime, theta_hat, cc) {
  return (zone) => {
    return main_compute_heat_conduction_make_cc_lambda$_lambda$lambda(sub2, update2, pow, alpha_prime, theta_hat, cc, zone)
  }
};
main_compute_heat_conduction_make_cc_lambda$_lambda$lambda1 = function main_compute_heat_conduction_make_cc_lambda$_lambda$lambda(sub2, update2, north, cc, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(north(zone));
  inlinedVal = runtime.safeCall(sub2(cc, tmp));
  return runtime.safeCall(update2(cc, zone, inlinedVal))
};
main_compute_heat_conduction_make_cc_lambda$$lambda$1 = function main_compute_heat_conduction_make_cc_lambda$$lambda$(sub2, update2, north, cc) {
  return (zone) => {
    return main_compute_heat_conduction_make_cc_lambda$_lambda$lambda1(sub2, update2, north, cc, zone)
  }
};
main_compute_heat_conduction_make_cc_lambda$_lambda$lambda2 = function main_compute_heat_conduction_make_cc_lambda$_lambda$lambda(sub2, update2, east, cc, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(east(zone));
  inlinedVal = runtime.safeCall(sub2(cc, tmp));
  return runtime.safeCall(update2(cc, zone, inlinedVal))
};
main_compute_heat_conduction_make_cc_lambda$$lambda$2 = function main_compute_heat_conduction_make_cc_lambda$$lambda$(sub2, update2, east, cc) {
  return (zone) => {
    return main_compute_heat_conduction_make_cc_lambda$_lambda$lambda2(sub2, update2, east, cc, zone)
  }
};
main_compute_heat_conduction_make_cc_lambda$_lambda$lambda3 = function main_compute_heat_conduction_make_cc_lambda$_lambda$lambda(sub2, update2, west, cc, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(west(zone));
  inlinedVal = runtime.safeCall(sub2(cc, tmp));
  return runtime.safeCall(update2(cc, zone, inlinedVal))
};
main_compute_heat_conduction_make_cc_lambda$$lambda$3 = function main_compute_heat_conduction_make_cc_lambda$$lambda$(sub2, update2, west, cc) {
  return (zone) => {
    return main_compute_heat_conduction_make_cc_lambda$_lambda$lambda3(sub2, update2, west, cc, zone)
  }
};
main_compute_heat_conduction_make_cc_lambda$_lambda$lambda4 = function main_compute_heat_conduction_make_cc_lambda$_lambda$lambda(sub2, update2, south, cc, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(south(zone));
  inlinedVal = runtime.safeCall(sub2(cc, tmp));
  return runtime.safeCall(update2(cc, zone, inlinedVal))
};
main_compute_heat_conduction_make_cc_lambda$$lambda$4 = function main_compute_heat_conduction_make_cc_lambda$$lambda$(sub2, update2, south, cc) {
  return (zone) => {
    return main_compute_heat_conduction_make_cc_lambda$_lambda$lambda4(sub2, update2, south, cc, zone)
  }
};
main_make_pressure_lambda$_lambda$lambda = function main_make_pressure_lambda$_lambda$lambda(simple2, sub2, update2, pow, rho_p, theta_p, p, zone) {
  let tmp, tmp1, scrut, element3$, element2$, element1$, element0$;
  tmp = runtime.safeCall(sub2(rho_p, zone));
  tmp1 = runtime.safeCall(sub2(theta_p, zone));
  scrut = simple1[extract_pressure_tables_from_constants$accessorSymbol];
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
    let rho_index, theta_index, a, tmp2, tmp3, f, inlinedVal;
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    element3$ = runtime.Tuple.get(scrut, 3);
    rho_index = table_search(simple1, element2$, tmp);
    theta_index = table_search(simple1, element3$, tmp1);
    tmp2 = globalThis.Object.freeze([
      rho_index,
      theta_index
    ]);
    a = runtime.safeCall(sub2(element0$, tmp2));
    tmp3 = from_(simple1, 0, element1$);
    f = lambda$28(simple1, sub2, pow, element1$, tmp, tmp1, a);
    inlinedVal = simple1[map$tailrec$accessorSymbol](f, tmp3);
    if (inlinedVal instanceof simple1.Cons.class) {
      let inlinedVal1;
      if (inlinedVal instanceof simple1.Nil.class) {
        return runtime.safeCall(update2(p, zone, 0.0))
      } else if (inlinedVal instanceof simple1.Cons.class) {
        inlinedVal1 = lambda33(simple1, lambda, inlinedVal, 0.0);
        return runtime.safeCall(update2(p, zone, inlinedVal1))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_make_pressure_lambda$$lambda$ = function main_make_pressure_lambda$$lambda$(simple2, sub2, update2, pow, rho_p, theta_p, p) {
  return (zone) => {
    return main_make_pressure_lambda$_lambda$lambda(simple2, sub2, update2, pow, rho_p, theta_p, p, zone)
  }
};
main_make_energy_lambda$_lambda$lambda = function main_make_energy_lambda$_lambda$lambda(sub2, update2, south, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(south(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
};
main_make_energy_lambda$$lambda$ = function main_make_energy_lambda$$lambda$(sub2, update2, south, epsilon_p) {
  return (zone) => {
    return main_make_energy_lambda$_lambda$lambda(sub2, update2, south, epsilon_p, zone)
  }
};
main_make_energy_lambda$_lambda$lambda1 = function main_make_energy_lambda$_lambda$lambda(sub2, update2, west, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(west(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
};
main_make_energy_lambda$$lambda$1 = function main_make_energy_lambda$$lambda$(sub2, update2, west, epsilon_p) {
  return (zone) => {
    return main_make_energy_lambda$_lambda$lambda1(sub2, update2, west, epsilon_p, zone)
  }
};
main_make_energy_lambda$_lambda$lambda2 = function main_make_energy_lambda$_lambda$lambda(sub2, update2, east, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(east(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
};
main_make_energy_lambda$$lambda$2 = function main_make_energy_lambda$$lambda$(sub2, update2, east, epsilon_p) {
  return (zone) => {
    return main_make_energy_lambda$_lambda$lambda2(sub2, update2, east, epsilon_p, zone)
  }
};
main_make_energy_lambda$_lambda$lambda3 = function main_make_energy_lambda$_lambda$lambda(sub2, update2, north, epsilon_p, zone) {
  let inlinedVal, tmp;
  tmp = runtime.safeCall(north(zone));
  inlinedVal = runtime.safeCall(sub2(epsilon_p, tmp));
  return runtime.safeCall(update2(epsilon_p, zone, inlinedVal))
};
main_make_energy_lambda$$lambda$3 = function main_make_energy_lambda$$lambda$(sub2, update2, north, epsilon_p) {
  return (zone) => {
    return main_make_energy_lambda$_lambda$lambda3(sub2, update2, north, epsilon_p, zone)
  }
};
main_make_energy_lambda$_lambda$lambda4 = function main_make_energy_lambda$_lambda$lambda(simple2, sub2, update2, pow, rho_p, theta_p, epsilon_p, zone) {
  let tmp, tmp1, scrut, element3$, element2$, element1$, element0$;
  tmp = runtime.safeCall(sub2(rho_p, zone));
  tmp1 = runtime.safeCall(sub2(theta_p, zone));
  scrut = simple1[extract_energy_tables_from_constants$accessorSymbol];
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
    let rho_index, theta_index, a, tmp2, tmp3, f, inlinedVal;
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    element3$ = runtime.Tuple.get(scrut, 3);
    rho_index = table_search(simple1, element2$, tmp);
    theta_index = table_search(simple1, element3$, tmp1);
    tmp2 = globalThis.Object.freeze([
      rho_index,
      theta_index
    ]);
    a = runtime.safeCall(sub2(element0$, tmp2));
    tmp3 = from_(simple1, 0, element1$);
    f = lambda$28(simple1, sub2, pow, element1$, tmp, tmp1, a);
    inlinedVal = simple1[map$tailrec$accessorSymbol](f, tmp3);
    if (inlinedVal instanceof simple1.Cons.class) {
      let inlinedVal1;
      if (inlinedVal instanceof simple1.Nil.class) {
        return runtime.safeCall(update2(epsilon_p, zone, 0.0))
      } else if (inlinedVal instanceof simple1.Cons.class) {
        inlinedVal1 = lambda33(simple1, lambda, inlinedVal, 0.0);
        return runtime.safeCall(update2(epsilon_p, zone, inlinedVal1))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_make_energy_lambda$$lambda$4 = function main_make_energy_lambda$$lambda$(simple2, sub2, update2, pow, rho_p, theta_p, epsilon_p) {
  return (zone) => {
    return main_make_energy_lambda$_lambda$lambda4(simple2, sub2, update2, pow, rho_p, theta_p, epsilon_p, zone)
  }
};
main_compute_energy_error_kinetic$_kinetic$kinetic = function main_compute_energy_error_kinetic$_kinetic$kinetic(sub2, pow, rho_p, alpha_p, u_p, w_p, node) {
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
main_compute_energy_error_kinetic$$kinetic$ = function main_compute_energy_error_kinetic$$kinetic$(sub2, pow, rho_p, alpha_p, u_p, w_p) {
  return (node) => {
    return main_compute_energy_error_kinetic$_kinetic$kinetic(sub2, pow, rho_p, alpha_p, u_p, w_p, node)
  }
};
main_lambda$_lambda$lambda1 = function main_lambda$_lambda$lambda(sub2, theta_hat, theta_p, z) {
  let tmp, tmp1, tmp2, tmp3, inlinedVal;
  tmp = runtime.safeCall(sub2(theta_hat, z));
  tmp1 = runtime.safeCall(sub2(theta_p, z));
  tmp2 = tmp - tmp1;
  inlinedVal = runtime.safeCall(globalThis.Math.abs(tmp2));
  tmp3 = runtime.safeCall(sub2(theta_hat, z));
  return inlinedVal / tmp3
};
main_lambda$$lambda$1 = function main_lambda$$lambda$(sub2, theta_hat, theta_p) {
  return (z) => {
    return main_lambda$_lambda$lambda1(sub2, theta_hat, theta_p, z)
  }
};
main_compute_initial_state_make_position_matrix_lambda$$lambda$4 = function main_compute_initial_state_make_position_matrix_lambda$$lambda$(update2, interior_function, r_p, z_p) {
  return (k) => {
    return (eta$0$0) => {
      return lambda34(update2, interior_function, r_p, z_p, k, eta$0$0)
    }
  }
};
main_make_position_make_position_matrix_lambda$$lambda$4 = function main_make_position_make_position_matrix_lambda$$lambda$(update2, interior_function, r_p, z_p) {
  return (k) => {
    return (eta$0$0) => {
      return lambda34(update2, interior_function, r_p, z_p, k, eta$0$0)
    }
  }
};
interior_position$1 = function interior_position$(simple2) {
  return (kl) => {
    return interior_position1(simple2, kl)
  }
};
lambda$48 = (undefined, function (update2, rr) {
  return (z) => {
    return runtime.safeCall(update2(rr, z, 1.4))
  }
});
lambda$47 = (undefined, function (update2, tt) {
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
lambda$46 = (undefined, function (sub2, d) {
  return (zone) => {
    return runtime.safeCall(sub2(d, zone))
  }
});
work_done$ = function work_done$(sub2, p_p, q_p, deltat, z_p, r_p) {
  return (nodes) => {
    return work_done(sub2, p_p, q_p, deltat, z_p, r_p, nodes)
  }
};
lambda$45 = (undefined, function (sub2, epsilon_p, rho_p, alpha_p) {
  return (z) => {
    return lambda22(sub2, epsilon_p, rho_p, alpha_p, z)
  }
});
lambda$44 = (undefined, function (simple2, west) {
  return (l) => {
    return lambda23(simple2, west, l)
  }
});
lambda$43 = (undefined, function (simple2, west) {
  return (l) => {
    return lambda24(simple2, west, l)
  }
});
lambda$42 = (undefined, function (simple2, south) {
  return (k) => {
    return lambda25(simple2, south, k)
  }
});
lambda$41 = (undefined, function (simple2, south) {
  return (k) => {
    return lambda26(simple2, south, k)
  }
});
lambda$40 = (undefined, function (north, k_north) {
  return (l) => {
    return lambda27(north, k_north, l)
  }
});
lambda$39 = (undefined, function (south, k_south) {
  return (l) => {
    return lambda28(south, k_south, l)
  }
});
lambda$38 = (undefined, function (east, l_east) {
  return (k) => {
    return lambda29(east, l_east, k)
  }
});
lambda$37 = (undefined, function (west, l_west) {
  return (k) => {
    return lambda30(west, l_west, k)
  }
});
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
lambda22 = (undefined, function (sub2, epsilon_p, rho_p, alpha_p, z) {
  let tmp, inlinedVal, tmp1, tmp2;
  tmp = runtime.safeCall(sub2(epsilon_p, z));
  tmp1 = runtime.safeCall(sub2(rho_p, z));
  tmp2 = runtime.safeCall(sub2(alpha_p, z));
  inlinedVal = tmp1 * tmp2;
  return tmp * inlinedVal
});
lambda23 = (undefined, function (simple2, west, l) {
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
lambda24 = (undefined, function (simple2, west, l) {
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
lambda25 = (undefined, function (simple2, south, k) {
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
lambda26 = (undefined, function (simple2, south, k) {
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
lambda27 = (undefined, function (north, k_north, l) {
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
lambda28 = (undefined, function (south, k_south, l) {
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
lambda29 = (undefined, function (east, l_east, k) {
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
lambda30 = (undefined, function (west, l_west, k) {
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
lambda$36 = (undefined, function (simple2, sub2, update2, north, p) {
  return (zone) => {
    return lambda18(simple2, sub2, update2, north, p, zone)
  }
});
lambda$35 = (undefined, function (simple2, sub2, update2, west, p) {
  return (zone) => {
    return lambda19(simple2, sub2, update2, west, p, zone)
  }
});
lambda$34 = (undefined, function (simple2, sub2, update2, east, p) {
  return (zone) => {
    return lambda20(simple2, sub2, update2, east, p, zone)
  }
});
lambda$33 = (undefined, function (simple2, sub2, update2, south, p) {
  return (zone) => {
    return lambda21(simple2, sub2, update2, south, p, zone)
  }
});
lambda18 = (undefined, function (simple2, sub2, update2, north, p, zone) {
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
lambda19 = (undefined, function (simple2, sub2, update2, west, p, zone) {
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
lambda20 = (undefined, function (simple2, sub2, update2, east, p, zone) {
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
lambda21 = (undefined, function (simple2, sub2, update2, south, p, zone) {
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
lambda$32 = (undefined, function (sub2, update2, a, b, succeeding, theta) {
  return (kl) => {
    return lambda17(sub2, update2, a, b, succeeding, theta, kl)
  }
});
lambda17 = (undefined, function (sub2, update2, a, b, succeeding, theta, kl) {
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
lambda$31 = (undefined, function (sub2, update2, theta, sigma, gamma_, preceding, a, b) {
  return (zone) => {
    return lambda16(sub2, update2, theta, sigma, gamma_, preceding, a, b, zone)
  }
});
lambda16 = (undefined, function (sub2, update2, theta, sigma, gamma_, preceding, a, b, zone) {
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
lambda$30 = (undefined, function (simple2, sub2, update2, deltat, rho_prime, alpha_prime, m) {
  return (zone) => {
    return lambda15(simple2, sub2, update2, deltat, rho_prime, alpha_prime, m, zone)
  }
});
lambda15 = (undefined, function (simple2, sub2, update2, deltat, rho_prime, alpha_prime, m, zone) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3;
  tmp = runtime.safeCall(sub2(rho_prime, zone));
  tmp1 = runtime.safeCall(sub2(alpha_prime, zone));
  tmp2 = tmp * tmp1;
  tmp3 = tmp2 * simple2[specific_heat$accessorSymbol];
  inlinedVal = tmp3 / deltat;
  return runtime.safeCall(update2(m, zone, inlinedVal))
});
lambda$29 = (undefined, function (sub2, pow, rho_value, theta_value, a, i) {
  return (j) => {
    return lambda13(sub2, pow, rho_value, theta_value, a, i, j)
  }
});
lambda13 = (undefined, function (sub2, pow, rho_value, theta_value, a, i, j) {
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
lambda$28 = (undefined, function (simple2, sub2, pow, degree, rho_value, theta_value, a) {
  return (i) => {
    return lambda14(simple2, sub2, pow, degree, rho_value, theta_value, a, i)
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
lambda14 = (undefined, function (simple2, sub2, pow, degree, rho_value, theta_value, a, i) {
  let tmp, f, inlinedVal;
  tmp = from_(simple2, 0, degree);
  f = lambda$29(sub2, pow, rho_value, theta_value, a, i);
  inlinedVal = simple2[map$tailrec$accessorSymbol](f, tmp);
  if (inlinedVal instanceof simple2.Cons.class) {
    if (inlinedVal instanceof simple2.Nil.class) {
      return 0.0
    } else if (inlinedVal instanceof simple2.Cons.class) {
      return lambda33(simple2, lambda, inlinedVal, 0.0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$27 = (undefined, function (simple2, sub2, update2, north, q_p) {
  return (zone) => {
    return do_zones(simple2, sub2, update2, q_p, north, zone)
  }
});
lambda$26 = (undefined, function (simple2, sub2, update2, west, q_p) {
  return (zone) => {
    return do_zones(simple2, sub2, update2, q_p, west, zone)
  }
});
lambda$25 = (undefined, function (simple2, sub2, update2, east, q_p) {
  return (zone) => {
    return do_zones(simple2, sub2, update2, q_p, east, zone)
  }
});
lambda$24 = (undefined, function (simple2, sub2, update2, south, q_p) {
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
lambda34 = (undefined, function (update2, interior_function, r_p, z_p, k, l) {
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
lambda$23 = (undefined, function (simple2, f) {
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
lambda$22 = (undefined, function (simple2, f) {
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
lambda$21 = (undefined, function (simple2, f) {
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
lambda$20 = (undefined, function (simple2, f) {
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
lambda$19 = (undefined, function (simple2, f) {
  return (k) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      simple2[lmin$accessorSymbol]
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$18 = (undefined, function (simple2, f) {
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
lambda$17 = (undefined, function (simple2, f) {
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
lambda$16 = (undefined, function (simple2, f) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      simple2[kmin$accessorSymbol],
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$15 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$14 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda6(simple2, f, k)
  }
});
lambda6 = (undefined, function (simple2, f, k) {
  let tmp, lambda$here;
  tmp = simple2[lmin$accessorSymbol] + 1;
  lambda$here = lambda$15(f, k);
  return simple2[for_$accessorSymbol](simple2[lmax$accessorSymbol], -1, tmp)(lambda$here)
});
lambda$13 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$12 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda5(simple2, f, k)
  }
});
lambda5 = (undefined, function (simple2, f, k) {
  let tmp, lambda$here;
  tmp = simple2[lmin$accessorSymbol] + 1;
  lambda$here = lambda$13(f, k);
  return simple2[for_$accessorSymbol](tmp, 1, simple2[lmax$accessorSymbol])(lambda$here)
});
lambda$11 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$10 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda4(simple2, f, k)
  }
});
lambda4 = (undefined, function (simple2, f, k) {
  let tmp, tmp1, f1;
  tmp = simple2[lmin$accessorSymbol] + 1;
  tmp1 = simple2[from_$accessorSymbol](tmp, simple2[lmax$accessorSymbol]);
  f1 = lambda$11(f, k);
  return simple2[map$tailrec$accessorSymbol](f1, tmp1)
});
lambda$9 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$8 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda3(simple2, f, k)
  }
});
lambda3 = (undefined, function (simple2, f, k) {
  let tmp, f1;
  tmp = simple2[from_$accessorSymbol](simple2[lmin$accessorSymbol], simple2[lmax$accessorSymbol]);
  f1 = lambda$9(f, k);
  return simple2[map$tailrec$accessorSymbol](f1, tmp)
});
lambda$7 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$6 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda2(simple2, f, k)
  }
});
lambda2 = (undefined, function (simple2, f, k) {
  let tmp, lambda$here;
  tmp = simple2[lmin$accessorSymbol] + 1;
  lambda$here = lambda$7(f, k);
  return simple2[for_$accessorSymbol](tmp, 1, simple2[lmax$accessorSymbol])(lambda$here)
});
lambda$5 = (undefined, function (f, k) {
  return (l) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      k,
      l
    ]);
    return runtime.safeCall(f(tmp))
  }
});
lambda$4 = (undefined, function (simple2, f) {
  return (k) => {
    return lambda1(simple2, f, k)
  }
});
lambda1 = (undefined, function (simple2, f, k) {
  let tmp, lambda$here;
  tmp = simple2[lmax$accessorSymbol] + 1;
  lambda$here = lambda$5(f, k);
  return simple2[for_$accessorSymbol](simple2[lmin$accessorSymbol], 1, tmp)(lambda$here)
});
lambda$3 = (undefined, function (f, k) {
  return (l) => {
    let callPrefix;
    callPrefix = runtime.safeCall(f(k));
    return runtime.safeCall(callPrefix(l))
  }
});
lambda$2 = (undefined, function (simple2, f) {
  return (k) => {
    let lambda$here;
    lambda$here = lambda$3(f, k);
    return simple2[for_$accessorSymbol](simple2[lmin$accessorSymbol], 1, simple2[lmax$accessorSymbol])(lambda$here)
  }
});
lambda = (undefined, function (a, b) {
  return a + b
});
lambda$1 = (undefined, function (simple2, f, l) {
  return (b) => {
    return lambda33(simple2, f, l, b)
  }
});
lambda33 = (undefined, function (simple2, f, l, b) {
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
lambda32 = (undefined, function (b) {
  return b
});
lambda$ = (undefined, function (simple2, m) {
  return (j) => {
    return lambda31(simple2, m, j)
  }
});
lambda31 = (undefined, function (simple2, m, j) {
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
  static get [extract_energy_tables_from_constants$accessorSymbol]() { return simple.#extract_energy_tables_from_constants; }
  static set [extract_energy_tables_from_constants$accessorSymbol](value) { simple.#extract_energy_tables_from_constants = value; }
  static get [extract_pressure_tables_from_constants$accessorSymbol]() { return simple.#extract_pressure_tables_from_constants; }
  static set [extract_pressure_tables_from_constants$accessorSymbol](value) { simple.#extract_pressure_tables_from_constants = value; }
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
                    let element1$4, element0$4, element0$5, tmp77, element1$5, element0$6, element0$7, tmp78, element1$6, element0$8, element0$9, tmp79, element1$7, element0$10, element0$11, tmp80, element1$8, element0$12, element0$13, tmp81, element1$9, element0$14, element0$15, tmp82, element1$10, element0$16, element0$17, tmp83, element1$11, element0$18, element0$19, tmp84, element1$12, element0$20, element1$13, element0$21, element0$22, element0$23, element1$14, element0$24, tmp85, tmp86, tmp87, element1$15, element0$25, element1$16, element0$26, element0$27, element0$28, element1$17, element0$29, tmp88, tmp89, tmp90;
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
                    if (runtime.Tuple.isArrayLike(m) && m.length === 2) {
                      element0$25 = runtime.Tuple.get(m, 0);
                      element1$15 = runtime.Tuple.get(m, 1);
                      if (runtime.Tuple.isArrayLike(element1$15) && element1$15.length === 2) {
                        element0$26 = runtime.Tuple.get(element1$15, 0);
                        element1$16 = runtime.Tuple.get(element1$15, 1);
                        if (runtime.Tuple.isArrayLike(element0$26) && element0$26.length === 2) {
                          element0$27 = runtime.Tuple.get(element0$26, 0);
                          if (runtime.Tuple.isArrayLike(element1$16) && element1$16.length === 2) {
                            element0$28 = runtime.Tuple.get(element1$16, 0);
                            if (runtime.Tuple.isArrayLike(tmp47) && tmp47.length === 2) {
                              let arg$A2$0$, arg$A2$1$, tmp91;
                              element0$29 = runtime.Tuple.get(tmp47, 0);
                              element1$17 = runtime.Tuple.get(tmp47, 1);
                              tmp88 = element0$29 - element0$27;
                              tmp89 = element1$17 - element0$28;
                              tmp90 = globalThis.Object.freeze([
                                tmp88,
                                tmp89
                              ]);
                              if (element0$25 instanceof simple1.A2.class) {
                                arg$A2$0$ = element0$25.size;
                                arg$A2$1$ = element0$25.value;
                                tmp91 = simple1.#a2Index(tmp90, arg$A2$0$);
                                arg$A2$1$[tmp91] = 0.06698;
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
                                if (runtime.Tuple.isArrayLike(m1) && m1.length === 2) {
                                  element0$20 = runtime.Tuple.get(m1, 0);
                                  element1$12 = runtime.Tuple.get(m1, 1);
                                  if (runtime.Tuple.isArrayLike(element1$12) && element1$12.length === 2) {
                                    element0$21 = runtime.Tuple.get(element1$12, 0);
                                    element1$13 = runtime.Tuple.get(element1$12, 1);
                                    if (runtime.Tuple.isArrayLike(element0$21) && element0$21.length === 2) {
                                      element0$22 = runtime.Tuple.get(element0$21, 0);
                                      if (runtime.Tuple.isArrayLike(element1$13) && element1$13.length === 2) {
                                        element0$23 = runtime.Tuple.get(element1$13, 0);
                                        if (runtime.Tuple.isArrayLike(tmp51) && tmp51.length === 2) {
                                          let arg$A2$0$1, arg$A2$1$1, tmp92;
                                          element0$24 = runtime.Tuple.get(tmp51, 0);
                                          element1$14 = runtime.Tuple.get(tmp51, 1);
                                          tmp85 = element0$24 - element0$22;
                                          tmp86 = element1$14 - element0$23;
                                          tmp87 = globalThis.Object.freeze([
                                            tmp85,
                                            tmp86
                                          ]);
                                          if (element0$20 instanceof simple1.A2.class) {
                                            arg$A2$0$1 = element0$20.size;
                                            arg$A2$1$1 = element0$20.value;
                                            tmp92 = simple1.#a2Index(tmp87, arg$A2$0$1);
                                            arg$A2$1$1[tmp92] = 0.1;
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
                                            if (runtime.Tuple.isArrayLike(vv) && vv.length === 2) {
                                              element0$18 = runtime.Tuple.get(vv, 0);
                                              element1$11 = runtime.Tuple.get(vv, 1);
                                              if (runtime.Tuple.isArrayLike(element1$11) && element1$11.length === 2) {
                                                element0$19 = runtime.Tuple.get(element1$11, 0);
                                                tmp84 = 2 - element0$19;
                                                element0$18[tmp84] = 1.0;
                                                if (runtime.Tuple.isArrayLike(vv) && vv.length === 2) {
                                                  element0$16 = runtime.Tuple.get(vv, 0);
                                                  element1$10 = runtime.Tuple.get(vv, 1);
                                                  if (runtime.Tuple.isArrayLike(element1$10) && element1$10.length === 2) {
                                                    element0$17 = runtime.Tuple.get(element1$10, 0);
                                                    tmp83 = 3 - element0$17;
                                                    element0$16[tmp83] = 100.0;
                                                    simple.#rho_table = vv;
                                                    tmp61 = globalThis.Object.freeze([
                                                      1,
                                                      4
                                                    ]);
                                                    vv1 = simple.#array1(tmp61, 0.0);
                                                    if (runtime.Tuple.isArrayLike(vv1) && vv1.length === 2) {
                                                      element0$14 = runtime.Tuple.get(vv1, 0);
                                                      element1$9 = runtime.Tuple.get(vv1, 1);
                                                      if (runtime.Tuple.isArrayLike(element1$9) && element1$9.length === 2) {
                                                        element0$15 = runtime.Tuple.get(element1$9, 0);
                                                        tmp82 = 2 - element0$15;
                                                        element0$14[tmp82] = 3.0;
                                                        if (runtime.Tuple.isArrayLike(vv1) && vv1.length === 2) {
                                                          element0$12 = runtime.Tuple.get(vv1, 0);
                                                          element1$8 = runtime.Tuple.get(vv1, 1);
                                                          if (runtime.Tuple.isArrayLike(element1$8) && element1$8.length === 2) {
                                                            element0$13 = runtime.Tuple.get(element1$8, 0);
                                                            tmp81 = 3 - element0$13;
                                                            element0$12[tmp81] = 300.0;
                                                            if (runtime.Tuple.isArrayLike(vv1) && vv1.length === 2) {
                                                              element0$10 = runtime.Tuple.get(vv1, 0);
                                                              element1$7 = runtime.Tuple.get(vv1, 1);
                                                              if (runtime.Tuple.isArrayLike(element1$7) && element1$7.length === 2) {
                                                                element0$11 = runtime.Tuple.get(element1$7, 0);
                                                                tmp80 = 4 - element0$11;
                                                                element0$10[tmp80] = 3000.0;
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
                                                                if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
                                                                  element0$8 = runtime.Tuple.get(a, 0);
                                                                  element1$6 = runtime.Tuple.get(a, 1);
                                                                  if (runtime.Tuple.isArrayLike(element1$6) && element1$6.length === 2) {
                                                                    element0$9 = runtime.Tuple.get(element1$6, 0);
                                                                    tmp79 = 2 - element0$9;
                                                                    element0$8[tmp79] = 6.0;
                                                                    simple.#pbb = a;
                                                                    tmp74 = globalThis.Object.freeze([
                                                                      1,
                                                                      4
                                                                    ]);
                                                                    a1 = simple.#array1(tmp74, 1.0);
                                                                    if (runtime.Tuple.isArrayLike(a1) && a1.length === 2) {
                                                                      element0$6 = runtime.Tuple.get(a1, 0);
                                                                      element1$5 = runtime.Tuple.get(a1, 1);
                                                                      if (runtime.Tuple.isArrayLike(element1$5) && element1$5.length === 2) {
                                                                        element0$7 = runtime.Tuple.get(element1$5, 0);
                                                                        tmp78 = 2 - element0$7;
                                                                        element0$6[tmp78] = 0.0;
                                                                        if (runtime.Tuple.isArrayLike(a1) && a1.length === 2) {
                                                                          element0$4 = runtime.Tuple.get(a1, 0);
                                                                          element1$4 = runtime.Tuple.get(a1, 1);
                                                                          if (runtime.Tuple.isArrayLike(element1$4) && element1$4.length === 2) {
                                                                            element0$5 = runtime.Tuple.get(element1$4, 0);
                                                                            tmp77 = 3 - element0$5;
                                                                            element0$4[tmp77] = 0.0;
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
  static #trunc(x) {
    return runtime.safeCall(globalThis.Math.trunc(x))
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
  static #for_north_ward_interior_zones(f) {
    let tmp, lambda$here;
    tmp = simple.#kmin + 1;
    lambda$here = lambda$12(simple, f);
    return simple.#for_(simple.#kmax, -1, tmp)(lambda$here)
  }
  static #for_west_ward_interior_zones(f) {
    let tmp, lambda$here;
    tmp = simple.#kmin + 1;
    lambda$here = lambda$14(simple, f);
    return simple.#for_(tmp, 1, simple.#kmax)(lambda$here)
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
  static main() {
    let delta, c, element10$, element9$, tmp, simple2, i, state, inlinedVal, sub2, update2, pow, north, south, east, west, inlinedVal1, v, a2, s2, rr, tt, q, f, f1, f2, f3, f4, f5, f6, tmp1, lambda$here, tmp2, lambda$here1, tmp3, lambda$here2, tmp4, tmp5, lambda$here3, tmp6, tmp7, lambda$here4, tmp8, lambda$here5, tmp9, lambda$here6, interior_function, inlinedVal2, r_p, z_p, n, n1, n2, n3, n4, n5, n6, n7, element1$, element0$, element1$1, element0$1, element1$2, element0$2, element1$3, element0$3, element1$4, element0$4, element1$5, element0$5, element1$6, element0$6, element1$7, element0$7, f7, f8, f9, f10, f11, node, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, rax, zax, ryx, zyx, omega, rb, zb, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, lambda$here7, tmp24, lambda$here8, tmp25, lambda$here9, tmp26, lambda$here10, lambda$here11, inlinedVal10, tmp27, inlinedVal11, tmp28, inlinedVal12, tmp29, inlinedVal13, tmp30, p, f12, f13, f14, f15, f16, tmp31, lambda$here12, tmp32, tmp33, lambda$here13, tmp34, tmp35, lambda$here14, tmp36, lambda$here15, tmp37, lambda$here16, epsilon_p, f17, f18, f19, f20, f21, tmp38, lambda$here17, tmp39, tmp40, lambda$here18, tmp41, tmp42, lambda$here19, tmp43, lambda$here20, tmp44, lambda$here21;
    sub2 = simple.#sub2;
    update2 = simple.#update2;
    pow = simple.#pow;
    north = simple.#north;
    south = simple.#south;
    east = simple.#east;
    west = simple.#west;
    v = globalThis.Object.freeze([
      simple1.#all_zero_nodes,
      simple1.#all_zero_nodes
    ]);
    interior_function = interior_position$1(simple1);
    r_p = simple1.#array2(simple1.#dimension_all_nodes, 0.0);
    z_p = simple1.#array2(simple1.#dimension_all_nodes, 0.0);
    f7 = main_compute_initial_state_make_position_matrix_lambda$$lambda$4(update2, interior_function, r_p, z_p);
    lambda$here11 = lambda$2(simple1, f7);
    simple1.#for_(simple1.#kmin, 1, simple1.#kmax)(lambda$here11);
    f8 = main_compute_initial_state_make_position_matrix_lambda$$lambda$(simple1, sub2, update2, south, east, r_p, z_p);
    tmp26 = simple1.#lmax - 1;
    lambda$here10 = lambda$20(simple1, f8);
    simple1.#for_(simple1.#lmin, 1, tmp26)(lambda$here10);
    f9 = main_compute_initial_state_make_position_matrix_lambda$$lambda$1(simple1, sub2, update2, north, east, r_p, z_p);
    tmp25 = simple1.#lmax - 1;
    lambda$here9 = lambda$21(simple1, f9);
    simple1.#for_(simple1.#lmin, 1, tmp25)(lambda$here9);
    f10 = main_compute_initial_state_make_position_matrix_lambda$$lambda$2(simple1, sub2, update2, south, west, r_p, z_p);
    tmp24 = simple1.#kmax - 1;
    lambda$here8 = lambda$22(simple1, f10);
    simple1.#for_(simple1.#kmin, 1, tmp24)(lambda$here8);
    f11 = main_compute_initial_state_make_position_matrix_lambda$$lambda$3(simple1, sub2, update2, south, east, r_p, z_p);
    tmp23 = simple1.#kmax - 1;
    lambda$here7 = lambda$23(simple1, f11);
    simple1.#for_(simple1.#kmin, 1, tmp23)(lambda$here7);
    node = simple1.#west_of_north_east;
    tmp22 = runtime.safeCall(south(node));
    inlinedVal4 = runtime.safeCall(sub2(r_p, tmp22));
    tmp21 = runtime.safeCall(south(node));
    inlinedVal5 = runtime.safeCall(sub2(z_p, tmp21));
    tmp27 = runtime.safeCall(west(node));
    inlinedVal10 = runtime.safeCall(south(tmp27));
    inlinedVal6 = runtime.safeCall(sub2(r_p, inlinedVal10));
    tmp28 = runtime.safeCall(west(node));
    inlinedVal11 = runtime.safeCall(south(tmp28));
    inlinedVal7 = runtime.safeCall(sub2(z_p, inlinedVal11));
    tmp29 = runtime.safeCall(south(node));
    inlinedVal12 = runtime.safeCall(south(tmp29));
    inlinedVal8 = runtime.safeCall(sub2(r_p, inlinedVal12));
    tmp30 = runtime.safeCall(south(node));
    inlinedVal13 = runtime.safeCall(south(tmp30));
    inlinedVal9 = runtime.safeCall(sub2(z_p, inlinedVal13));
    rax = inlinedVal8 - inlinedVal4;
    zax = inlinedVal9 - inlinedVal5;
    ryx = inlinedVal6 - inlinedVal4;
    zyx = inlinedVal7 - inlinedVal5;
    tmp10 = rax * ryx;
    tmp11 = zax * zyx;
    tmp12 = tmp10 + tmp11;
    tmp13 = 2.0 * tmp12;
    tmp14 = ryx * ryx;
    tmp15 = zyx * zyx;
    tmp16 = tmp14 + tmp15;
    omega = tmp13 / tmp16;
    tmp17 = inlinedVal4 - rax;
    tmp18 = omega * ryx;
    rb = tmp17 + tmp18;
    tmp19 = inlinedVal5 - zax;
    tmp20 = omega * zyx;
    zb = tmp19 + tmp20;
    inlinedVal3 = globalThis.Object.freeze([
      rb,
      zb
    ]);
    n = simple1.#west_of_north_east;
    if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 2) {
      let node1, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, rax1, zax1, ryx1, zyx1, omega1, rb1, zb1, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, inlinedVal21, tmp58, inlinedVal22, tmp59, inlinedVal23, tmp60, inlinedVal24, tmp61;
      element0$7 = runtime.Tuple.get(inlinedVal3, 0);
      element1$7 = runtime.Tuple.get(inlinedVal3, 1);
      runtime.safeCall(update2(r_p, n, element0$7));
      runtime.safeCall(update2(z_p, n, element1$7));
      node1 = simple1.#west_of_south_east;
      tmp57 = runtime.safeCall(north(node1));
      inlinedVal15 = runtime.safeCall(sub2(r_p, tmp57));
      tmp56 = runtime.safeCall(north(node1));
      inlinedVal16 = runtime.safeCall(sub2(z_p, tmp56));
      tmp58 = runtime.safeCall(west(node1));
      inlinedVal21 = runtime.safeCall(north(tmp58));
      inlinedVal17 = runtime.safeCall(sub2(r_p, inlinedVal21));
      tmp59 = runtime.safeCall(west(node1));
      inlinedVal22 = runtime.safeCall(north(tmp59));
      inlinedVal18 = runtime.safeCall(sub2(z_p, inlinedVal22));
      tmp60 = runtime.safeCall(north(node1));
      inlinedVal23 = runtime.safeCall(north(tmp60));
      inlinedVal19 = runtime.safeCall(sub2(r_p, inlinedVal23));
      tmp61 = runtime.safeCall(north(node1));
      inlinedVal24 = runtime.safeCall(north(tmp61));
      inlinedVal20 = runtime.safeCall(sub2(z_p, inlinedVal24));
      rax1 = inlinedVal19 - inlinedVal15;
      zax1 = inlinedVal20 - inlinedVal16;
      ryx1 = inlinedVal17 - inlinedVal15;
      zyx1 = inlinedVal18 - inlinedVal16;
      tmp45 = rax1 * ryx1;
      tmp46 = zax1 * zyx1;
      tmp47 = tmp45 + tmp46;
      tmp48 = 2.0 * tmp47;
      tmp49 = ryx1 * ryx1;
      tmp50 = zyx1 * zyx1;
      tmp51 = tmp49 + tmp50;
      omega1 = tmp48 / tmp51;
      tmp52 = inlinedVal15 - rax1;
      tmp53 = omega1 * ryx1;
      rb1 = tmp52 + tmp53;
      tmp54 = inlinedVal16 - zax1;
      tmp55 = omega1 * zyx1;
      zb1 = tmp54 + tmp55;
      inlinedVal14 = globalThis.Object.freeze([
        rb1,
        zb1
      ]);
      n1 = simple1.#west_of_south_east;
      if (runtime.Tuple.isArrayLike(inlinedVal14) && inlinedVal14.length === 2) {
        let node2, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, inlinedVal31, rax2, zax2, ryx2, zyx2, omega2, rb2, zb2, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, inlinedVal32, tmp75, inlinedVal33, tmp76, inlinedVal34, tmp77, inlinedVal35, tmp78;
        element0$6 = runtime.Tuple.get(inlinedVal14, 0);
        element1$6 = runtime.Tuple.get(inlinedVal14, 1);
        runtime.safeCall(update2(r_p, n1, element0$6));
        runtime.safeCall(update2(z_p, n1, element1$6));
        node2 = simple1.#north_of_south_east;
        tmp74 = runtime.safeCall(west(node2));
        inlinedVal26 = runtime.safeCall(sub2(r_p, tmp74));
        tmp73 = runtime.safeCall(west(node2));
        inlinedVal27 = runtime.safeCall(sub2(z_p, tmp73));
        tmp75 = runtime.safeCall(west(node2));
        inlinedVal32 = runtime.safeCall(north(tmp75));
        inlinedVal28 = runtime.safeCall(sub2(r_p, inlinedVal32));
        tmp76 = runtime.safeCall(west(node2));
        inlinedVal33 = runtime.safeCall(north(tmp76));
        inlinedVal29 = runtime.safeCall(sub2(z_p, inlinedVal33));
        tmp77 = runtime.safeCall(west(node2));
        inlinedVal34 = runtime.safeCall(west(tmp77));
        inlinedVal30 = runtime.safeCall(sub2(r_p, inlinedVal34));
        tmp78 = runtime.safeCall(west(node2));
        inlinedVal35 = runtime.safeCall(west(tmp78));
        inlinedVal31 = runtime.safeCall(sub2(z_p, inlinedVal35));
        rax2 = inlinedVal30 - inlinedVal26;
        zax2 = inlinedVal31 - inlinedVal27;
        ryx2 = inlinedVal28 - inlinedVal26;
        zyx2 = inlinedVal29 - inlinedVal27;
        tmp62 = rax2 * ryx2;
        tmp63 = zax2 * zyx2;
        tmp64 = tmp62 + tmp63;
        tmp65 = 2.0 * tmp64;
        tmp66 = ryx2 * ryx2;
        tmp67 = zyx2 * zyx2;
        tmp68 = tmp66 + tmp67;
        omega2 = tmp65 / tmp68;
        tmp69 = inlinedVal26 - rax2;
        tmp70 = omega2 * ryx2;
        rb2 = tmp69 + tmp70;
        tmp71 = inlinedVal27 - zax2;
        tmp72 = omega2 * zyx2;
        zb2 = tmp71 + tmp72;
        inlinedVal25 = globalThis.Object.freeze([
          rb2,
          zb2
        ]);
        n2 = simple1.#north_of_south_east;
        if (runtime.Tuple.isArrayLike(inlinedVal25) && inlinedVal25.length === 2) {
          let node3, inlinedVal36, inlinedVal37, inlinedVal38, inlinedVal39, inlinedVal40, inlinedVal41, inlinedVal42, rax3, zax3, ryx3, zyx3, omega3, rb3, zb3, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, inlinedVal43, tmp92, inlinedVal44, tmp93, inlinedVal45, tmp94, inlinedVal46, tmp95;
          element0$5 = runtime.Tuple.get(inlinedVal25, 0);
          element1$5 = runtime.Tuple.get(inlinedVal25, 1);
          runtime.safeCall(update2(r_p, n2, element0$5));
          runtime.safeCall(update2(z_p, n2, element1$5));
          node3 = simple1.#north_of_south_west;
          tmp91 = runtime.safeCall(east(node3));
          inlinedVal37 = runtime.safeCall(sub2(r_p, tmp91));
          tmp90 = runtime.safeCall(east(node3));
          inlinedVal38 = runtime.safeCall(sub2(z_p, tmp90));
          tmp92 = runtime.safeCall(east(node3));
          inlinedVal43 = runtime.safeCall(north(tmp92));
          inlinedVal39 = runtime.safeCall(sub2(r_p, inlinedVal43));
          tmp93 = runtime.safeCall(east(node3));
          inlinedVal44 = runtime.safeCall(north(tmp93));
          inlinedVal40 = runtime.safeCall(sub2(z_p, inlinedVal44));
          tmp94 = runtime.safeCall(east(node3));
          inlinedVal45 = runtime.safeCall(east(tmp94));
          inlinedVal41 = runtime.safeCall(sub2(r_p, inlinedVal45));
          tmp95 = runtime.safeCall(east(node3));
          inlinedVal46 = runtime.safeCall(east(tmp95));
          inlinedVal42 = runtime.safeCall(sub2(z_p, inlinedVal46));
          rax3 = inlinedVal41 - inlinedVal37;
          zax3 = inlinedVal42 - inlinedVal38;
          ryx3 = inlinedVal39 - inlinedVal37;
          zyx3 = inlinedVal40 - inlinedVal38;
          tmp79 = rax3 * ryx3;
          tmp80 = zax3 * zyx3;
          tmp81 = tmp79 + tmp80;
          tmp82 = 2.0 * tmp81;
          tmp83 = ryx3 * ryx3;
          tmp84 = zyx3 * zyx3;
          tmp85 = tmp83 + tmp84;
          omega3 = tmp82 / tmp85;
          tmp86 = inlinedVal37 - rax3;
          tmp87 = omega3 * ryx3;
          rb3 = tmp86 + tmp87;
          tmp88 = inlinedVal38 - zax3;
          tmp89 = omega3 * zyx3;
          zb3 = tmp88 + tmp89;
          inlinedVal36 = globalThis.Object.freeze([
            rb3,
            zb3
          ]);
          n3 = simple1.#north_of_south_west;
          if (runtime.Tuple.isArrayLike(inlinedVal36) && inlinedVal36.length === 2) {
            let node4, inlinedVal47, inlinedVal48, inlinedVal49, inlinedVal50, inlinedVal51, inlinedVal52, inlinedVal53, rax4, zax4, ryx4, zyx4, omega4, rb4, zb4, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, inlinedVal54, tmp109, inlinedVal55, tmp110, inlinedVal56, tmp111, inlinedVal57, tmp112;
            element0$4 = runtime.Tuple.get(inlinedVal36, 0);
            element1$4 = runtime.Tuple.get(inlinedVal36, 1);
            runtime.safeCall(update2(r_p, n3, element0$4));
            runtime.safeCall(update2(z_p, n3, element1$4));
            node4 = simple1.#north_east_corner;
            tmp109 = runtime.safeCall(west(node4));
            inlinedVal54 = runtime.safeCall(south(tmp109));
            inlinedVal48 = runtime.safeCall(sub2(r_p, inlinedVal54));
            tmp110 = runtime.safeCall(west(node4));
            inlinedVal55 = runtime.safeCall(south(tmp110));
            inlinedVal49 = runtime.safeCall(sub2(z_p, inlinedVal55));
            tmp108 = runtime.safeCall(west(node4));
            inlinedVal50 = runtime.safeCall(sub2(r_p, tmp108));
            tmp107 = runtime.safeCall(west(node4));
            inlinedVal51 = runtime.safeCall(sub2(z_p, tmp107));
            tmp111 = runtime.safeCall(west(node4));
            inlinedVal56 = runtime.safeCall(west(tmp111));
            inlinedVal52 = runtime.safeCall(sub2(r_p, inlinedVal56));
            tmp112 = runtime.safeCall(west(node4));
            inlinedVal57 = runtime.safeCall(west(tmp112));
            inlinedVal53 = runtime.safeCall(sub2(z_p, inlinedVal57));
            rax4 = inlinedVal52 - inlinedVal48;
            zax4 = inlinedVal53 - inlinedVal49;
            ryx4 = inlinedVal50 - inlinedVal48;
            zyx4 = inlinedVal51 - inlinedVal49;
            tmp96 = rax4 * ryx4;
            tmp97 = zax4 * zyx4;
            tmp98 = tmp96 + tmp97;
            tmp99 = 2.0 * tmp98;
            tmp100 = ryx4 * ryx4;
            tmp101 = zyx4 * zyx4;
            tmp102 = tmp100 + tmp101;
            omega4 = tmp99 / tmp102;
            tmp103 = inlinedVal48 - rax4;
            tmp104 = omega4 * ryx4;
            rb4 = tmp103 + tmp104;
            tmp105 = inlinedVal49 - zax4;
            tmp106 = omega4 * zyx4;
            zb4 = tmp105 + tmp106;
            inlinedVal47 = globalThis.Object.freeze([
              rb4,
              zb4
            ]);
            n4 = simple1.#north_east_corner;
            if (runtime.Tuple.isArrayLike(inlinedVal47) && inlinedVal47.length === 2) {
              let node5, inlinedVal58, inlinedVal59, inlinedVal60, inlinedVal61, inlinedVal62, inlinedVal63, inlinedVal64, rax5, zax5, ryx5, zyx5, omega5, rb5, zb5, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, inlinedVal65, tmp126, inlinedVal66, tmp127, inlinedVal67, tmp128, inlinedVal68, tmp129;
              element0$3 = runtime.Tuple.get(inlinedVal47, 0);
              element1$3 = runtime.Tuple.get(inlinedVal47, 1);
              runtime.safeCall(update2(r_p, n4, element0$3));
              runtime.safeCall(update2(z_p, n4, element1$3));
              node5 = simple1.#south_east_corner;
              tmp126 = runtime.safeCall(west(node5));
              inlinedVal65 = runtime.safeCall(north(tmp126));
              inlinedVal59 = runtime.safeCall(sub2(r_p, inlinedVal65));
              tmp127 = runtime.safeCall(west(node5));
              inlinedVal66 = runtime.safeCall(north(tmp127));
              inlinedVal60 = runtime.safeCall(sub2(z_p, inlinedVal66));
              tmp125 = runtime.safeCall(west(node5));
              inlinedVal61 = runtime.safeCall(sub2(r_p, tmp125));
              tmp124 = runtime.safeCall(west(node5));
              inlinedVal62 = runtime.safeCall(sub2(z_p, tmp124));
              tmp128 = runtime.safeCall(west(node5));
              inlinedVal67 = runtime.safeCall(west(tmp128));
              inlinedVal63 = runtime.safeCall(sub2(r_p, inlinedVal67));
              tmp129 = runtime.safeCall(west(node5));
              inlinedVal68 = runtime.safeCall(west(tmp129));
              inlinedVal64 = runtime.safeCall(sub2(z_p, inlinedVal68));
              rax5 = inlinedVal63 - inlinedVal59;
              zax5 = inlinedVal64 - inlinedVal60;
              ryx5 = inlinedVal61 - inlinedVal59;
              zyx5 = inlinedVal62 - inlinedVal60;
              tmp113 = rax5 * ryx5;
              tmp114 = zax5 * zyx5;
              tmp115 = tmp113 + tmp114;
              tmp116 = 2.0 * tmp115;
              tmp117 = ryx5 * ryx5;
              tmp118 = zyx5 * zyx5;
              tmp119 = tmp117 + tmp118;
              omega5 = tmp116 / tmp119;
              tmp120 = inlinedVal59 - rax5;
              tmp121 = omega5 * ryx5;
              rb5 = tmp120 + tmp121;
              tmp122 = inlinedVal60 - zax5;
              tmp123 = omega5 * zyx5;
              zb5 = tmp122 + tmp123;
              inlinedVal58 = globalThis.Object.freeze([
                rb5,
                zb5
              ]);
              n5 = simple1.#south_east_corner;
              if (runtime.Tuple.isArrayLike(inlinedVal58) && inlinedVal58.length === 2) {
                let node6, inlinedVal69, inlinedVal70, inlinedVal71, inlinedVal72, inlinedVal73, inlinedVal74, inlinedVal75, rax6, zax6, ryx6, zyx6, omega6, rb6, zb6, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, inlinedVal76, tmp143, inlinedVal77, tmp144, inlinedVal78, tmp145, inlinedVal79, tmp146;
                element0$2 = runtime.Tuple.get(inlinedVal58, 0);
                element1$2 = runtime.Tuple.get(inlinedVal58, 1);
                runtime.safeCall(update2(r_p, n5, element0$2));
                runtime.safeCall(update2(z_p, n5, element1$2));
                node6 = simple1.#north_west_corner;
                tmp143 = runtime.safeCall(east(node6));
                inlinedVal76 = runtime.safeCall(south(tmp143));
                inlinedVal70 = runtime.safeCall(sub2(r_p, inlinedVal76));
                tmp144 = runtime.safeCall(east(node6));
                inlinedVal77 = runtime.safeCall(south(tmp144));
                inlinedVal71 = runtime.safeCall(sub2(z_p, inlinedVal77));
                tmp142 = runtime.safeCall(south(node6));
                inlinedVal72 = runtime.safeCall(sub2(r_p, tmp142));
                tmp141 = runtime.safeCall(south(node6));
                inlinedVal73 = runtime.safeCall(sub2(z_p, tmp141));
                tmp145 = runtime.safeCall(south(node6));
                inlinedVal78 = runtime.safeCall(south(tmp145));
                inlinedVal74 = runtime.safeCall(sub2(r_p, inlinedVal78));
                tmp146 = runtime.safeCall(south(node6));
                inlinedVal79 = runtime.safeCall(south(tmp146));
                inlinedVal75 = runtime.safeCall(sub2(z_p, inlinedVal79));
                rax6 = inlinedVal74 - inlinedVal70;
                zax6 = inlinedVal75 - inlinedVal71;
                ryx6 = inlinedVal72 - inlinedVal70;
                zyx6 = inlinedVal73 - inlinedVal71;
                tmp130 = rax6 * ryx6;
                tmp131 = zax6 * zyx6;
                tmp132 = tmp130 + tmp131;
                tmp133 = 2.0 * tmp132;
                tmp134 = ryx6 * ryx6;
                tmp135 = zyx6 * zyx6;
                tmp136 = tmp134 + tmp135;
                omega6 = tmp133 / tmp136;
                tmp137 = inlinedVal70 - rax6;
                tmp138 = omega6 * ryx6;
                rb6 = tmp137 + tmp138;
                tmp139 = inlinedVal71 - zax6;
                tmp140 = omega6 * zyx6;
                zb6 = tmp139 + tmp140;
                inlinedVal69 = globalThis.Object.freeze([
                  rb6,
                  zb6
                ]);
                n6 = simple1.#north_west_corner;
                if (runtime.Tuple.isArrayLike(inlinedVal69) && inlinedVal69.length === 2) {
                  let node7, inlinedVal80, inlinedVal81, inlinedVal82, inlinedVal83, inlinedVal84, inlinedVal85, inlinedVal86, rax7, zax7, ryx7, zyx7, omega7, rb7, zb7, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, inlinedVal87, tmp160, inlinedVal88, tmp161, inlinedVal89, tmp162, inlinedVal90, tmp163;
                  element0$1 = runtime.Tuple.get(inlinedVal69, 0);
                  element1$1 = runtime.Tuple.get(inlinedVal69, 1);
                  runtime.safeCall(update2(r_p, n6, element0$1));
                  runtime.safeCall(update2(z_p, n6, element1$1));
                  node7 = simple1.#south_west_corner;
                  tmp160 = runtime.safeCall(east(node7));
                  inlinedVal87 = runtime.safeCall(north(tmp160));
                  inlinedVal81 = runtime.safeCall(sub2(r_p, inlinedVal87));
                  tmp161 = runtime.safeCall(east(node7));
                  inlinedVal88 = runtime.safeCall(north(tmp161));
                  inlinedVal82 = runtime.safeCall(sub2(z_p, inlinedVal88));
                  tmp159 = runtime.safeCall(east(node7));
                  inlinedVal83 = runtime.safeCall(sub2(r_p, tmp159));
                  tmp158 = runtime.safeCall(east(node7));
                  inlinedVal84 = runtime.safeCall(sub2(z_p, tmp158));
                  tmp162 = runtime.safeCall(east(node7));
                  inlinedVal89 = runtime.safeCall(east(tmp162));
                  inlinedVal85 = runtime.safeCall(sub2(r_p, inlinedVal89));
                  tmp163 = runtime.safeCall(east(node7));
                  inlinedVal90 = runtime.safeCall(east(tmp163));
                  inlinedVal86 = runtime.safeCall(sub2(z_p, inlinedVal90));
                  rax7 = inlinedVal85 - inlinedVal81;
                  zax7 = inlinedVal86 - inlinedVal82;
                  ryx7 = inlinedVal83 - inlinedVal81;
                  zyx7 = inlinedVal84 - inlinedVal82;
                  tmp147 = rax7 * ryx7;
                  tmp148 = zax7 * zyx7;
                  tmp149 = tmp147 + tmp148;
                  tmp150 = 2.0 * tmp149;
                  tmp151 = ryx7 * ryx7;
                  tmp152 = zyx7 * zyx7;
                  tmp153 = tmp151 + tmp152;
                  omega7 = tmp150 / tmp153;
                  tmp154 = inlinedVal81 - rax7;
                  tmp155 = omega7 * ryx7;
                  rb7 = tmp154 + tmp155;
                  tmp156 = inlinedVal82 - zax7;
                  tmp157 = omega7 * zyx7;
                  zb7 = tmp156 + tmp157;
                  inlinedVal80 = globalThis.Object.freeze([
                    rb7,
                    zb7
                  ]);
                  n7 = simple1.#south_west_corner;
                  if (runtime.Tuple.isArrayLike(inlinedVal80) && inlinedVal80.length === 2) {
                    element0$ = runtime.Tuple.get(inlinedVal80, 0);
                    element1$ = runtime.Tuple.get(inlinedVal80, 1);
                    runtime.safeCall(update2(r_p, n7, element0$));
                    runtime.safeCall(update2(z_p, n7, element1$));
                    inlinedVal2 = globalThis.Object.freeze([
                      r_p,
                      z_p
                    ]);
                    a2 = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                    s2 = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                    f = main_compute_initial_state_lambda$$lambda$4(simple1, sub2, update2, north, west, inlinedVal2, a2, s2);
                    tmp9 = simple1.#kmin + 1;
                    lambda$here6 = lambda$6(simple1, f);
                    simple1.#for_(tmp9, 1, simple1.#kmax)(lambda$here6);
                    f1 = main_compute_initial_state_lambda$$lambda$3(simple1, sub2, update2, north, a2, s2);
                    tmp8 = simple1.#lmin + 1;
                    lambda$here5 = lambda$17(simple1, f1);
                    simple1.#for_(tmp8, 1, simple1.#lmax)(lambda$here5);
                    f2 = main_compute_initial_state_lambda$$lambda$2(simple1, sub2, update2, west, a2, s2);
                    tmp6 = simple1.#kmin + 1;
                    tmp7 = simple1.#kmax + 1;
                    lambda$here4 = lambda$18(simple1, f2);
                    simple1.#for_(tmp6, 1, tmp7)(lambda$here4);
                    f3 = main_compute_initial_state_lambda$$lambda$1(simple1, sub2, update2, east, a2, s2);
                    tmp4 = simple1.#kmin + 1;
                    tmp5 = simple1.#kmax + 1;
                    lambda$here3 = lambda$19(simple1, f3);
                    simple1.#for_(tmp4, 1, tmp5)(lambda$here3);
                    f4 = main_compute_initial_state_lambda$$lambda$(simple1, sub2, update2, south, a2, s2);
                    tmp3 = simple1.#lmax + 1;
                    lambda$here2 = lambda$16(simple1, f4);
                    simple1.#for_(simple1.#lmin, 1, tmp3)(lambda$here2);
                    rr = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                    f5 = lambda$48(update2, rr);
                    tmp2 = simple1.#kmax + 1;
                    lambda$here1 = lambda$4(simple1, f5);
                    simple1.#for_(simple1.#kmin, 1, tmp2)(lambda$here1);
                    tt = simple1.#array2(simple1.#dimension_all_zones, simple1.#constant_heat_source);
                    f6 = lambda$47(update2, tt);
                    tmp1 = simple1.#kmin + 1;
                    lambda$here = lambda$6(simple1, f6);
                    simple1.#for_(tmp1, 1, simple1.#kmax)(lambda$here);
                    p = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                    f12 = main_compute_initial_state_make_pressure_lambda$$lambda$(simple1, sub2, update2, pow, rr, tt, p);
                    tmp37 = simple1.#kmin + 1;
                    lambda$here16 = lambda$6(simple1, f12);
                    simple1.#for_(tmp37, 1, simple1.#kmax)(lambda$here16);
                    f13 = lambda$36(simple1, sub2, update2, north, p);
                    tmp36 = simple1.#lmin + 1;
                    lambda$here15 = lambda$17(simple1, f13);
                    simple1.#for_(tmp36, 1, simple1.#lmax)(lambda$here15);
                    f14 = lambda$35(simple1, sub2, update2, west, p);
                    tmp34 = simple1.#kmin + 1;
                    tmp35 = simple1.#kmax + 1;
                    lambda$here14 = lambda$18(simple1, f14);
                    simple1.#for_(tmp34, 1, tmp35)(lambda$here14);
                    f15 = lambda$34(simple1, sub2, update2, east, p);
                    tmp32 = simple1.#kmin + 1;
                    tmp33 = simple1.#kmax + 1;
                    lambda$here13 = lambda$19(simple1, f15);
                    simple1.#for_(tmp32, 1, tmp33)(lambda$here13);
                    f16 = lambda$33(simple1, sub2, update2, south, p);
                    tmp31 = simple1.#lmax + 1;
                    lambda$here12 = lambda$16(simple1, f16);
                    simple1.#for_(simple1.#lmin, 1, tmp31)(lambda$here12);
                    q = simple1.#all_zero_zones;
                    epsilon_p = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                    f17 = main_compute_initial_state_make_energy_lambda$$lambda$(simple1, sub2, update2, pow, rr, tt, epsilon_p);
                    tmp44 = simple1.#kmin + 1;
                    lambda$here21 = lambda$6(simple1, f17);
                    simple1.#for_(tmp44, 1, simple1.#kmax)(lambda$here21);
                    f18 = main_compute_initial_state_make_energy_lambda$$lambda$1(sub2, update2, north, epsilon_p);
                    tmp43 = simple1.#lmin + 1;
                    lambda$here20 = lambda$17(simple1, f18);
                    simple1.#for_(tmp43, 1, simple1.#lmax)(lambda$here20);
                    f19 = main_compute_initial_state_make_energy_lambda$$lambda$2(sub2, update2, east, epsilon_p);
                    tmp41 = simple1.#kmin + 1;
                    tmp42 = simple1.#kmax + 1;
                    lambda$here19 = lambda$19(simple1, f19);
                    simple1.#for_(tmp41, 1, tmp42)(lambda$here19);
                    f20 = main_compute_initial_state_make_energy_lambda$$lambda$3(sub2, update2, west, epsilon_p);
                    tmp39 = simple1.#kmin + 1;
                    tmp40 = simple1.#kmax + 1;
                    lambda$here18 = lambda$18(simple1, f20);
                    simple1.#for_(tmp39, 1, tmp40)(lambda$here18);
                    f21 = main_compute_initial_state_make_energy_lambda$$lambda$4(sub2, update2, south, epsilon_p);
                    tmp38 = simple1.#lmax + 1;
                    lambda$here17 = lambda$16(simple1, f21);
                    simple1.#for_(simple1.#lmin, 1, tmp38)(lambda$here17);
                    inlinedVal1 = globalThis.Object.freeze([
                      v,
                      inlinedVal2,
                      a2,
                      s2,
                      rr,
                      p,
                      q,
                      epsilon_p,
                      tt,
                      0.01,
                      0.0
                    ]);
                    simple2 = simple;
                    i = simple.#step_count;
                    state = inlinedVal1;
                    inlinedLbl: {
                      loopLabel: while (true) {
                        let scrut, element9$1, element8$, element7$, element6$, element5$, element4$, element3$, element2$, element1$8, element0$8, element2$1, element1$9, element0$9, element1$10, element0$10, element2$2, element1$11, element0$11, tmp164, tmp165;
                        scrut = i == 0;
                        if (scrut === true) {
                          inlinedVal = state;
                          break inlinedLbl
                        }
                        if (runtime.Tuple.isArrayLike(state) && state.length === 11) {
                          let sub21, update21, north1, south1, east1, west1, sub22, update22, north2, south2, east2, west2, sub23, update23, north3, south3, east3, west3, inlinedVal91, inlinedVal92, alpha_p, s_p, rho_p, f22, f23, f24, f25, f26, tmp166, lambda$here22, tmp167, tmp168, lambda$here23, tmp169, tmp170, lambda$here24, tmp171, lambda$here25, tmp172, lambda$here26, element1$12, element0$12, element1$13, element0$13, uu, ww, element1$14, element0$14, element1$15, element0$15;
                          element0$8 = runtime.Tuple.get(state, 0);
                          element1$8 = runtime.Tuple.get(state, 1);
                          element2$ = runtime.Tuple.get(state, 2);
                          element3$ = runtime.Tuple.get(state, 3);
                          element4$ = runtime.Tuple.get(state, 4);
                          element5$ = runtime.Tuple.get(state, 5);
                          element6$ = runtime.Tuple.get(state, 6);
                          element7$ = runtime.Tuple.get(state, 7);
                          element8$ = runtime.Tuple.get(state, 8);
                          element9$1 = runtime.Tuple.get(state, 9);
                          sub21 = simple2.#sub2;
                          update21 = simple2.#update2;
                          north1 = simple2.#north;
                          south1 = simple2.#south;
                          east1 = simple2.#east;
                          west1 = simple2.#west;
                          if (runtime.Tuple.isArrayLike(element0$8) && element0$8.length === 2) {
                            element0$14 = runtime.Tuple.get(element0$8, 0);
                            element1$14 = runtime.Tuple.get(element0$8, 1);
                            if (runtime.Tuple.isArrayLike(element1$8) && element1$8.length === 2) {
                              let f27, lambda$here27;
                              element0$15 = runtime.Tuple.get(element1$8, 0);
                              element1$15 = runtime.Tuple.get(element1$8, 1);
                              uu = simple1.#array2(simple1.#dimension_interior_nodes, 0.0);
                              ww = simple1.#array2(simple1.#dimension_interior_nodes, 0.0);
                              f27 = main_make_velocity_lambda$$lambda$(sub21, update21, north1, south1, east1, west1, element5$, element6$, element2$, element4$, element9$1, element0$14, element1$14, element0$15, element1$15, uu, ww);
                              lambda$here27 = lambda$2(simple1, f27);
                              simple1.#for_(simple1.#kmin, 1, simple1.#kmax)(lambda$here27);
                              inlinedVal91 = globalThis.Object.freeze([
                                uu,
                                ww
                              ]);
                              sub22 = simple2.#sub2;
                              update22 = simple2.#update2;
                              north2 = simple2.#north;
                              south2 = simple2.#south;
                              east2 = simple2.#east;
                              west2 = simple2.#west;
                              if (runtime.Tuple.isArrayLike(element1$8) && element1$8.length === 2) {
                                element0$12 = runtime.Tuple.get(element1$8, 0);
                                element1$12 = runtime.Tuple.get(element1$8, 1);
                                if (runtime.Tuple.isArrayLike(inlinedVal91) && inlinedVal91.length === 2) {
                                  let interior_function1, inlinedVal93, r_p1, z_p1, n8, n9, n10, n11, n12, n13, n14, n15, element1$16, element0$16, element1$17, element0$17, element1$18, element0$18, element1$19, element0$19, element1$20, element0$20, element1$21, element0$21, element1$22, element0$22, element1$23, element0$23, f28, f29, f30, f31, f32, node8, inlinedVal94, inlinedVal95, inlinedVal96, inlinedVal97, inlinedVal98, inlinedVal99, inlinedVal100, rax8, zax8, ryx8, zyx8, omega8, rb8, zb8, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, lambda$here28, tmp187, lambda$here29, tmp188, lambda$here30, tmp189, lambda$here31, lambda$here32, inlinedVal101, tmp190, inlinedVal102, tmp191, inlinedVal103, tmp192, inlinedVal104, tmp193;
                                  element0$13 = runtime.Tuple.get(inlinedVal91, 0);
                                  element1$13 = runtime.Tuple.get(inlinedVal91, 1);
                                  interior_function1 = interior_position$(sub22, element9$1, element0$12, element1$12, element0$13, element1$13);
                                  r_p1 = simple1.#array2(simple1.#dimension_all_nodes, 0.0);
                                  z_p1 = simple1.#array2(simple1.#dimension_all_nodes, 0.0);
                                  f28 = main_make_position_make_position_matrix_lambda$$lambda$4(update22, interior_function1, r_p1, z_p1);
                                  lambda$here32 = lambda$2(simple1, f28);
                                  simple1.#for_(simple1.#kmin, 1, simple1.#kmax)(lambda$here32);
                                  f29 = main_make_position_make_position_matrix_lambda$$lambda$(simple1, sub22, update22, south2, east2, r_p1, z_p1);
                                  tmp189 = simple1.#lmax - 1;
                                  lambda$here31 = lambda$20(simple1, f29);
                                  simple1.#for_(simple1.#lmin, 1, tmp189)(lambda$here31);
                                  f30 = main_make_position_make_position_matrix_lambda$$lambda$1(simple1, sub22, update22, north2, east2, r_p1, z_p1);
                                  tmp188 = simple1.#lmax - 1;
                                  lambda$here30 = lambda$21(simple1, f30);
                                  simple1.#for_(simple1.#lmin, 1, tmp188)(lambda$here30);
                                  f31 = main_make_position_make_position_matrix_lambda$$lambda$2(simple1, sub22, update22, south2, west2, r_p1, z_p1);
                                  tmp187 = simple1.#kmax - 1;
                                  lambda$here29 = lambda$22(simple1, f31);
                                  simple1.#for_(simple1.#kmin, 1, tmp187)(lambda$here29);
                                  f32 = main_make_position_make_position_matrix_lambda$$lambda$3(simple1, sub22, update22, south2, east2, r_p1, z_p1);
                                  tmp186 = simple1.#kmax - 1;
                                  lambda$here28 = lambda$23(simple1, f32);
                                  simple1.#for_(simple1.#kmin, 1, tmp186)(lambda$here28);
                                  node8 = simple1.#west_of_north_east;
                                  tmp185 = runtime.safeCall(south2(node8));
                                  inlinedVal95 = runtime.safeCall(sub22(r_p1, tmp185));
                                  tmp184 = runtime.safeCall(south2(node8));
                                  inlinedVal96 = runtime.safeCall(sub22(z_p1, tmp184));
                                  tmp190 = runtime.safeCall(west2(node8));
                                  inlinedVal101 = runtime.safeCall(south2(tmp190));
                                  inlinedVal97 = runtime.safeCall(sub22(r_p1, inlinedVal101));
                                  tmp191 = runtime.safeCall(west2(node8));
                                  inlinedVal102 = runtime.safeCall(south2(tmp191));
                                  inlinedVal98 = runtime.safeCall(sub22(z_p1, inlinedVal102));
                                  tmp192 = runtime.safeCall(south2(node8));
                                  inlinedVal103 = runtime.safeCall(south2(tmp192));
                                  inlinedVal99 = runtime.safeCall(sub22(r_p1, inlinedVal103));
                                  tmp193 = runtime.safeCall(south2(node8));
                                  inlinedVal104 = runtime.safeCall(south2(tmp193));
                                  inlinedVal100 = runtime.safeCall(sub22(z_p1, inlinedVal104));
                                  rax8 = inlinedVal99 - inlinedVal95;
                                  zax8 = inlinedVal100 - inlinedVal96;
                                  ryx8 = inlinedVal97 - inlinedVal95;
                                  zyx8 = inlinedVal98 - inlinedVal96;
                                  tmp173 = rax8 * ryx8;
                                  tmp174 = zax8 * zyx8;
                                  tmp175 = tmp173 + tmp174;
                                  tmp176 = 2.0 * tmp175;
                                  tmp177 = ryx8 * ryx8;
                                  tmp178 = zyx8 * zyx8;
                                  tmp179 = tmp177 + tmp178;
                                  omega8 = tmp176 / tmp179;
                                  tmp180 = inlinedVal95 - rax8;
                                  tmp181 = omega8 * ryx8;
                                  rb8 = tmp180 + tmp181;
                                  tmp182 = inlinedVal96 - zax8;
                                  tmp183 = omega8 * zyx8;
                                  zb8 = tmp182 + tmp183;
                                  inlinedVal94 = globalThis.Object.freeze([
                                    rb8,
                                    zb8
                                  ]);
                                  n8 = simple1.#west_of_north_east;
                                  if (runtime.Tuple.isArrayLike(inlinedVal94) && inlinedVal94.length === 2) {
                                    let node9, inlinedVal105, inlinedVal106, inlinedVal107, inlinedVal108, inlinedVal109, inlinedVal110, inlinedVal111, rax9, zax9, ryx9, zyx9, omega9, rb9, zb9, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, inlinedVal112, tmp207, inlinedVal113, tmp208, inlinedVal114, tmp209, inlinedVal115, tmp210;
                                    element0$23 = runtime.Tuple.get(inlinedVal94, 0);
                                    element1$23 = runtime.Tuple.get(inlinedVal94, 1);
                                    runtime.safeCall(update22(r_p1, n8, element0$23));
                                    runtime.safeCall(update22(z_p1, n8, element1$23));
                                    node9 = simple1.#west_of_south_east;
                                    tmp206 = runtime.safeCall(north2(node9));
                                    inlinedVal106 = runtime.safeCall(sub22(r_p1, tmp206));
                                    tmp205 = runtime.safeCall(north2(node9));
                                    inlinedVal107 = runtime.safeCall(sub22(z_p1, tmp205));
                                    tmp207 = runtime.safeCall(west2(node9));
                                    inlinedVal112 = runtime.safeCall(north2(tmp207));
                                    inlinedVal108 = runtime.safeCall(sub22(r_p1, inlinedVal112));
                                    tmp208 = runtime.safeCall(west2(node9));
                                    inlinedVal113 = runtime.safeCall(north2(tmp208));
                                    inlinedVal109 = runtime.safeCall(sub22(z_p1, inlinedVal113));
                                    tmp209 = runtime.safeCall(north2(node9));
                                    inlinedVal114 = runtime.safeCall(north2(tmp209));
                                    inlinedVal110 = runtime.safeCall(sub22(r_p1, inlinedVal114));
                                    tmp210 = runtime.safeCall(north2(node9));
                                    inlinedVal115 = runtime.safeCall(north2(tmp210));
                                    inlinedVal111 = runtime.safeCall(sub22(z_p1, inlinedVal115));
                                    rax9 = inlinedVal110 - inlinedVal106;
                                    zax9 = inlinedVal111 - inlinedVal107;
                                    ryx9 = inlinedVal108 - inlinedVal106;
                                    zyx9 = inlinedVal109 - inlinedVal107;
                                    tmp194 = rax9 * ryx9;
                                    tmp195 = zax9 * zyx9;
                                    tmp196 = tmp194 + tmp195;
                                    tmp197 = 2.0 * tmp196;
                                    tmp198 = ryx9 * ryx9;
                                    tmp199 = zyx9 * zyx9;
                                    tmp200 = tmp198 + tmp199;
                                    omega9 = tmp197 / tmp200;
                                    tmp201 = inlinedVal106 - rax9;
                                    tmp202 = omega9 * ryx9;
                                    rb9 = tmp201 + tmp202;
                                    tmp203 = inlinedVal107 - zax9;
                                    tmp204 = omega9 * zyx9;
                                    zb9 = tmp203 + tmp204;
                                    inlinedVal105 = globalThis.Object.freeze([
                                      rb9,
                                      zb9
                                    ]);
                                    n9 = simple1.#west_of_south_east;
                                    if (runtime.Tuple.isArrayLike(inlinedVal105) && inlinedVal105.length === 2) {
                                      let node10, inlinedVal116, inlinedVal117, inlinedVal118, inlinedVal119, inlinedVal120, inlinedVal121, inlinedVal122, rax10, zax10, ryx10, zyx10, omega10, rb10, zb10, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, inlinedVal123, tmp224, inlinedVal124, tmp225, inlinedVal125, tmp226, inlinedVal126, tmp227;
                                      element0$22 = runtime.Tuple.get(inlinedVal105, 0);
                                      element1$22 = runtime.Tuple.get(inlinedVal105, 1);
                                      runtime.safeCall(update22(r_p1, n9, element0$22));
                                      runtime.safeCall(update22(z_p1, n9, element1$22));
                                      node10 = simple1.#north_of_south_east;
                                      tmp223 = runtime.safeCall(west2(node10));
                                      inlinedVal117 = runtime.safeCall(sub22(r_p1, tmp223));
                                      tmp222 = runtime.safeCall(west2(node10));
                                      inlinedVal118 = runtime.safeCall(sub22(z_p1, tmp222));
                                      tmp224 = runtime.safeCall(west2(node10));
                                      inlinedVal123 = runtime.safeCall(north2(tmp224));
                                      inlinedVal119 = runtime.safeCall(sub22(r_p1, inlinedVal123));
                                      tmp225 = runtime.safeCall(west2(node10));
                                      inlinedVal124 = runtime.safeCall(north2(tmp225));
                                      inlinedVal120 = runtime.safeCall(sub22(z_p1, inlinedVal124));
                                      tmp226 = runtime.safeCall(west2(node10));
                                      inlinedVal125 = runtime.safeCall(west2(tmp226));
                                      inlinedVal121 = runtime.safeCall(sub22(r_p1, inlinedVal125));
                                      tmp227 = runtime.safeCall(west2(node10));
                                      inlinedVal126 = runtime.safeCall(west2(tmp227));
                                      inlinedVal122 = runtime.safeCall(sub22(z_p1, inlinedVal126));
                                      rax10 = inlinedVal121 - inlinedVal117;
                                      zax10 = inlinedVal122 - inlinedVal118;
                                      ryx10 = inlinedVal119 - inlinedVal117;
                                      zyx10 = inlinedVal120 - inlinedVal118;
                                      tmp211 = rax10 * ryx10;
                                      tmp212 = zax10 * zyx10;
                                      tmp213 = tmp211 + tmp212;
                                      tmp214 = 2.0 * tmp213;
                                      tmp215 = ryx10 * ryx10;
                                      tmp216 = zyx10 * zyx10;
                                      tmp217 = tmp215 + tmp216;
                                      omega10 = tmp214 / tmp217;
                                      tmp218 = inlinedVal117 - rax10;
                                      tmp219 = omega10 * ryx10;
                                      rb10 = tmp218 + tmp219;
                                      tmp220 = inlinedVal118 - zax10;
                                      tmp221 = omega10 * zyx10;
                                      zb10 = tmp220 + tmp221;
                                      inlinedVal116 = globalThis.Object.freeze([
                                        rb10,
                                        zb10
                                      ]);
                                      n10 = simple1.#north_of_south_east;
                                      if (runtime.Tuple.isArrayLike(inlinedVal116) && inlinedVal116.length === 2) {
                                        let node11, inlinedVal127, inlinedVal128, inlinedVal129, inlinedVal130, inlinedVal131, inlinedVal132, inlinedVal133, rax11, zax11, ryx11, zyx11, omega11, rb11, zb11, tmp228, tmp229, tmp230, tmp231, tmp232, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, tmp240, inlinedVal134, tmp241, inlinedVal135, tmp242, inlinedVal136, tmp243, inlinedVal137, tmp244;
                                        element0$21 = runtime.Tuple.get(inlinedVal116, 0);
                                        element1$21 = runtime.Tuple.get(inlinedVal116, 1);
                                        runtime.safeCall(update22(r_p1, n10, element0$21));
                                        runtime.safeCall(update22(z_p1, n10, element1$21));
                                        node11 = simple1.#north_of_south_west;
                                        tmp240 = runtime.safeCall(east2(node11));
                                        inlinedVal128 = runtime.safeCall(sub22(r_p1, tmp240));
                                        tmp239 = runtime.safeCall(east2(node11));
                                        inlinedVal129 = runtime.safeCall(sub22(z_p1, tmp239));
                                        tmp241 = runtime.safeCall(east2(node11));
                                        inlinedVal134 = runtime.safeCall(north2(tmp241));
                                        inlinedVal130 = runtime.safeCall(sub22(r_p1, inlinedVal134));
                                        tmp242 = runtime.safeCall(east2(node11));
                                        inlinedVal135 = runtime.safeCall(north2(tmp242));
                                        inlinedVal131 = runtime.safeCall(sub22(z_p1, inlinedVal135));
                                        tmp243 = runtime.safeCall(east2(node11));
                                        inlinedVal136 = runtime.safeCall(east2(tmp243));
                                        inlinedVal132 = runtime.safeCall(sub22(r_p1, inlinedVal136));
                                        tmp244 = runtime.safeCall(east2(node11));
                                        inlinedVal137 = runtime.safeCall(east2(tmp244));
                                        inlinedVal133 = runtime.safeCall(sub22(z_p1, inlinedVal137));
                                        rax11 = inlinedVal132 - inlinedVal128;
                                        zax11 = inlinedVal133 - inlinedVal129;
                                        ryx11 = inlinedVal130 - inlinedVal128;
                                        zyx11 = inlinedVal131 - inlinedVal129;
                                        tmp228 = rax11 * ryx11;
                                        tmp229 = zax11 * zyx11;
                                        tmp230 = tmp228 + tmp229;
                                        tmp231 = 2.0 * tmp230;
                                        tmp232 = ryx11 * ryx11;
                                        tmp233 = zyx11 * zyx11;
                                        tmp234 = tmp232 + tmp233;
                                        omega11 = tmp231 / tmp234;
                                        tmp235 = inlinedVal128 - rax11;
                                        tmp236 = omega11 * ryx11;
                                        rb11 = tmp235 + tmp236;
                                        tmp237 = inlinedVal129 - zax11;
                                        tmp238 = omega11 * zyx11;
                                        zb11 = tmp237 + tmp238;
                                        inlinedVal127 = globalThis.Object.freeze([
                                          rb11,
                                          zb11
                                        ]);
                                        n11 = simple1.#north_of_south_west;
                                        if (runtime.Tuple.isArrayLike(inlinedVal127) && inlinedVal127.length === 2) {
                                          let node12, inlinedVal138, inlinedVal139, inlinedVal140, inlinedVal141, inlinedVal142, inlinedVal143, inlinedVal144, rax12, zax12, ryx12, zyx12, omega12, rb12, zb12, tmp245, tmp246, tmp247, tmp248, tmp249, tmp250, tmp251, tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, inlinedVal145, tmp258, inlinedVal146, tmp259, inlinedVal147, tmp260, inlinedVal148, tmp261;
                                          element0$20 = runtime.Tuple.get(inlinedVal127, 0);
                                          element1$20 = runtime.Tuple.get(inlinedVal127, 1);
                                          runtime.safeCall(update22(r_p1, n11, element0$20));
                                          runtime.safeCall(update22(z_p1, n11, element1$20));
                                          node12 = simple1.#north_east_corner;
                                          tmp258 = runtime.safeCall(west2(node12));
                                          inlinedVal145 = runtime.safeCall(south2(tmp258));
                                          inlinedVal139 = runtime.safeCall(sub22(r_p1, inlinedVal145));
                                          tmp259 = runtime.safeCall(west2(node12));
                                          inlinedVal146 = runtime.safeCall(south2(tmp259));
                                          inlinedVal140 = runtime.safeCall(sub22(z_p1, inlinedVal146));
                                          tmp257 = runtime.safeCall(west2(node12));
                                          inlinedVal141 = runtime.safeCall(sub22(r_p1, tmp257));
                                          tmp256 = runtime.safeCall(west2(node12));
                                          inlinedVal142 = runtime.safeCall(sub22(z_p1, tmp256));
                                          tmp260 = runtime.safeCall(west2(node12));
                                          inlinedVal147 = runtime.safeCall(west2(tmp260));
                                          inlinedVal143 = runtime.safeCall(sub22(r_p1, inlinedVal147));
                                          tmp261 = runtime.safeCall(west2(node12));
                                          inlinedVal148 = runtime.safeCall(west2(tmp261));
                                          inlinedVal144 = runtime.safeCall(sub22(z_p1, inlinedVal148));
                                          rax12 = inlinedVal143 - inlinedVal139;
                                          zax12 = inlinedVal144 - inlinedVal140;
                                          ryx12 = inlinedVal141 - inlinedVal139;
                                          zyx12 = inlinedVal142 - inlinedVal140;
                                          tmp245 = rax12 * ryx12;
                                          tmp246 = zax12 * zyx12;
                                          tmp247 = tmp245 + tmp246;
                                          tmp248 = 2.0 * tmp247;
                                          tmp249 = ryx12 * ryx12;
                                          tmp250 = zyx12 * zyx12;
                                          tmp251 = tmp249 + tmp250;
                                          omega12 = tmp248 / tmp251;
                                          tmp252 = inlinedVal139 - rax12;
                                          tmp253 = omega12 * ryx12;
                                          rb12 = tmp252 + tmp253;
                                          tmp254 = inlinedVal140 - zax12;
                                          tmp255 = omega12 * zyx12;
                                          zb12 = tmp254 + tmp255;
                                          inlinedVal138 = globalThis.Object.freeze([
                                            rb12,
                                            zb12
                                          ]);
                                          n12 = simple1.#north_east_corner;
                                          if (runtime.Tuple.isArrayLike(inlinedVal138) && inlinedVal138.length === 2) {
                                            let node13, inlinedVal149, inlinedVal150, inlinedVal151, inlinedVal152, inlinedVal153, inlinedVal154, inlinedVal155, rax13, zax13, ryx13, zyx13, omega13, rb13, zb13, tmp262, tmp263, tmp264, tmp265, tmp266, tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, inlinedVal156, tmp275, inlinedVal157, tmp276, inlinedVal158, tmp277, inlinedVal159, tmp278;
                                            element0$19 = runtime.Tuple.get(inlinedVal138, 0);
                                            element1$19 = runtime.Tuple.get(inlinedVal138, 1);
                                            runtime.safeCall(update22(r_p1, n12, element0$19));
                                            runtime.safeCall(update22(z_p1, n12, element1$19));
                                            node13 = simple1.#south_east_corner;
                                            tmp275 = runtime.safeCall(west2(node13));
                                            inlinedVal156 = runtime.safeCall(north2(tmp275));
                                            inlinedVal150 = runtime.safeCall(sub22(r_p1, inlinedVal156));
                                            tmp276 = runtime.safeCall(west2(node13));
                                            inlinedVal157 = runtime.safeCall(north2(tmp276));
                                            inlinedVal151 = runtime.safeCall(sub22(z_p1, inlinedVal157));
                                            tmp274 = runtime.safeCall(west2(node13));
                                            inlinedVal152 = runtime.safeCall(sub22(r_p1, tmp274));
                                            tmp273 = runtime.safeCall(west2(node13));
                                            inlinedVal153 = runtime.safeCall(sub22(z_p1, tmp273));
                                            tmp277 = runtime.safeCall(west2(node13));
                                            inlinedVal158 = runtime.safeCall(west2(tmp277));
                                            inlinedVal154 = runtime.safeCall(sub22(r_p1, inlinedVal158));
                                            tmp278 = runtime.safeCall(west2(node13));
                                            inlinedVal159 = runtime.safeCall(west2(tmp278));
                                            inlinedVal155 = runtime.safeCall(sub22(z_p1, inlinedVal159));
                                            rax13 = inlinedVal154 - inlinedVal150;
                                            zax13 = inlinedVal155 - inlinedVal151;
                                            ryx13 = inlinedVal152 - inlinedVal150;
                                            zyx13 = inlinedVal153 - inlinedVal151;
                                            tmp262 = rax13 * ryx13;
                                            tmp263 = zax13 * zyx13;
                                            tmp264 = tmp262 + tmp263;
                                            tmp265 = 2.0 * tmp264;
                                            tmp266 = ryx13 * ryx13;
                                            tmp267 = zyx13 * zyx13;
                                            tmp268 = tmp266 + tmp267;
                                            omega13 = tmp265 / tmp268;
                                            tmp269 = inlinedVal150 - rax13;
                                            tmp270 = omega13 * ryx13;
                                            rb13 = tmp269 + tmp270;
                                            tmp271 = inlinedVal151 - zax13;
                                            tmp272 = omega13 * zyx13;
                                            zb13 = tmp271 + tmp272;
                                            inlinedVal149 = globalThis.Object.freeze([
                                              rb13,
                                              zb13
                                            ]);
                                            n13 = simple1.#south_east_corner;
                                            if (runtime.Tuple.isArrayLike(inlinedVal149) && inlinedVal149.length === 2) {
                                              let node14, inlinedVal160, inlinedVal161, inlinedVal162, inlinedVal163, inlinedVal164, inlinedVal165, inlinedVal166, rax14, zax14, ryx14, zyx14, omega14, rb14, zb14, tmp279, tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287, tmp288, tmp289, tmp290, tmp291, inlinedVal167, tmp292, inlinedVal168, tmp293, inlinedVal169, tmp294, inlinedVal170, tmp295;
                                              element0$18 = runtime.Tuple.get(inlinedVal149, 0);
                                              element1$18 = runtime.Tuple.get(inlinedVal149, 1);
                                              runtime.safeCall(update22(r_p1, n13, element0$18));
                                              runtime.safeCall(update22(z_p1, n13, element1$18));
                                              node14 = simple1.#north_west_corner;
                                              tmp292 = runtime.safeCall(east2(node14));
                                              inlinedVal167 = runtime.safeCall(south2(tmp292));
                                              inlinedVal161 = runtime.safeCall(sub22(r_p1, inlinedVal167));
                                              tmp293 = runtime.safeCall(east2(node14));
                                              inlinedVal168 = runtime.safeCall(south2(tmp293));
                                              inlinedVal162 = runtime.safeCall(sub22(z_p1, inlinedVal168));
                                              tmp291 = runtime.safeCall(south2(node14));
                                              inlinedVal163 = runtime.safeCall(sub22(r_p1, tmp291));
                                              tmp290 = runtime.safeCall(south2(node14));
                                              inlinedVal164 = runtime.safeCall(sub22(z_p1, tmp290));
                                              tmp294 = runtime.safeCall(south2(node14));
                                              inlinedVal169 = runtime.safeCall(south2(tmp294));
                                              inlinedVal165 = runtime.safeCall(sub22(r_p1, inlinedVal169));
                                              tmp295 = runtime.safeCall(south2(node14));
                                              inlinedVal170 = runtime.safeCall(south2(tmp295));
                                              inlinedVal166 = runtime.safeCall(sub22(z_p1, inlinedVal170));
                                              rax14 = inlinedVal165 - inlinedVal161;
                                              zax14 = inlinedVal166 - inlinedVal162;
                                              ryx14 = inlinedVal163 - inlinedVal161;
                                              zyx14 = inlinedVal164 - inlinedVal162;
                                              tmp279 = rax14 * ryx14;
                                              tmp280 = zax14 * zyx14;
                                              tmp281 = tmp279 + tmp280;
                                              tmp282 = 2.0 * tmp281;
                                              tmp283 = ryx14 * ryx14;
                                              tmp284 = zyx14 * zyx14;
                                              tmp285 = tmp283 + tmp284;
                                              omega14 = tmp282 / tmp285;
                                              tmp286 = inlinedVal161 - rax14;
                                              tmp287 = omega14 * ryx14;
                                              rb14 = tmp286 + tmp287;
                                              tmp288 = inlinedVal162 - zax14;
                                              tmp289 = omega14 * zyx14;
                                              zb14 = tmp288 + tmp289;
                                              inlinedVal160 = globalThis.Object.freeze([
                                                rb14,
                                                zb14
                                              ]);
                                              n14 = simple1.#north_west_corner;
                                              if (runtime.Tuple.isArrayLike(inlinedVal160) && inlinedVal160.length === 2) {
                                                let node15, inlinedVal171, inlinedVal172, inlinedVal173, inlinedVal174, inlinedVal175, inlinedVal176, inlinedVal177, rax15, zax15, ryx15, zyx15, omega15, rb15, zb15, tmp296, tmp297, tmp298, tmp299, tmp300, tmp301, tmp302, tmp303, tmp304, tmp305, tmp306, tmp307, tmp308, inlinedVal178, tmp309, inlinedVal179, tmp310, inlinedVal180, tmp311, inlinedVal181, tmp312;
                                                element0$17 = runtime.Tuple.get(inlinedVal160, 0);
                                                element1$17 = runtime.Tuple.get(inlinedVal160, 1);
                                                runtime.safeCall(update22(r_p1, n14, element0$17));
                                                runtime.safeCall(update22(z_p1, n14, element1$17));
                                                node15 = simple1.#south_west_corner;
                                                tmp309 = runtime.safeCall(east2(node15));
                                                inlinedVal178 = runtime.safeCall(north2(tmp309));
                                                inlinedVal172 = runtime.safeCall(sub22(r_p1, inlinedVal178));
                                                tmp310 = runtime.safeCall(east2(node15));
                                                inlinedVal179 = runtime.safeCall(north2(tmp310));
                                                inlinedVal173 = runtime.safeCall(sub22(z_p1, inlinedVal179));
                                                tmp308 = runtime.safeCall(east2(node15));
                                                inlinedVal174 = runtime.safeCall(sub22(r_p1, tmp308));
                                                tmp307 = runtime.safeCall(east2(node15));
                                                inlinedVal175 = runtime.safeCall(sub22(z_p1, tmp307));
                                                tmp311 = runtime.safeCall(east2(node15));
                                                inlinedVal180 = runtime.safeCall(east2(tmp311));
                                                inlinedVal176 = runtime.safeCall(sub22(r_p1, inlinedVal180));
                                                tmp312 = runtime.safeCall(east2(node15));
                                                inlinedVal181 = runtime.safeCall(east2(tmp312));
                                                inlinedVal177 = runtime.safeCall(sub22(z_p1, inlinedVal181));
                                                rax15 = inlinedVal176 - inlinedVal172;
                                                zax15 = inlinedVal177 - inlinedVal173;
                                                ryx15 = inlinedVal174 - inlinedVal172;
                                                zyx15 = inlinedVal175 - inlinedVal173;
                                                tmp296 = rax15 * ryx15;
                                                tmp297 = zax15 * zyx15;
                                                tmp298 = tmp296 + tmp297;
                                                tmp299 = 2.0 * tmp298;
                                                tmp300 = ryx15 * ryx15;
                                                tmp301 = zyx15 * zyx15;
                                                tmp302 = tmp300 + tmp301;
                                                omega15 = tmp299 / tmp302;
                                                tmp303 = inlinedVal172 - rax15;
                                                tmp304 = omega15 * ryx15;
                                                rb15 = tmp303 + tmp304;
                                                tmp305 = inlinedVal173 - zax15;
                                                tmp306 = omega15 * zyx15;
                                                zb15 = tmp305 + tmp306;
                                                inlinedVal171 = globalThis.Object.freeze([
                                                  rb15,
                                                  zb15
                                                ]);
                                                n15 = simple1.#south_west_corner;
                                                if (runtime.Tuple.isArrayLike(inlinedVal171) && inlinedVal171.length === 2) {
                                                  element0$16 = runtime.Tuple.get(inlinedVal171, 0);
                                                  element1$16 = runtime.Tuple.get(inlinedVal171, 1);
                                                  runtime.safeCall(update22(r_p1, n15, element0$16));
                                                  runtime.safeCall(update22(z_p1, n15, element1$16));
                                                  inlinedVal93 = globalThis.Object.freeze([
                                                    r_p1,
                                                    z_p1
                                                  ]);
                                                  sub23 = simple2.#sub2;
                                                  update23 = simple2.#update2;
                                                  north3 = simple2.#north;
                                                  south3 = simple2.#south;
                                                  east3 = simple2.#east;
                                                  west3 = simple2.#west;
                                                  alpha_p = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                  s_p = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                  rho_p = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                  f22 = main_make_area_density_volume_lambda$$lambda$4(simple1, sub23, update23, north3, west3, element4$, element3$, inlinedVal93, alpha_p, s_p, rho_p);
                                                  tmp172 = simple1.#kmin + 1;
                                                  lambda$here26 = lambda$6(simple1, f22);
                                                  simple1.#for_(tmp172, 1, simple1.#kmax)(lambda$here26);
                                                  f23 = main_make_area_density_volume_lambda$$lambda$3(simple1, sub23, update23, north3, alpha_p, s_p, rho_p);
                                                  tmp171 = simple1.#lmin + 1;
                                                  lambda$here25 = lambda$17(simple1, f23);
                                                  simple1.#for_(tmp171, 1, simple1.#lmax)(lambda$here25);
                                                  f24 = main_make_area_density_volume_lambda$$lambda$2(simple1, sub23, update23, west3, alpha_p, s_p, rho_p);
                                                  tmp169 = simple1.#kmin + 1;
                                                  tmp170 = simple1.#kmax + 1;
                                                  lambda$here24 = lambda$18(simple1, f24);
                                                  simple1.#for_(tmp169, 1, tmp170)(lambda$here24);
                                                  f25 = main_make_area_density_volume_lambda$$lambda$1(simple1, sub23, update23, east3, alpha_p, s_p, rho_p);
                                                  tmp167 = simple1.#kmin + 1;
                                                  tmp168 = simple1.#kmax + 1;
                                                  lambda$here23 = lambda$19(simple1, f25);
                                                  simple1.#for_(tmp167, 1, tmp168)(lambda$here23);
                                                  f26 = main_make_area_density_volume_lambda$$lambda$(simple1, sub23, update23, south3, alpha_p, s_p, rho_p);
                                                  tmp166 = simple1.#lmax + 1;
                                                  lambda$here22 = lambda$16(simple1, f26);
                                                  simple1.#for_(simple1.#lmin, 1, tmp166)(lambda$here22);
                                                  inlinedVal92 = globalThis.Object.freeze([
                                                    alpha_p,
                                                    rho_p,
                                                    s_p
                                                  ]);
                                                  if (runtime.Tuple.isArrayLike(inlinedVal92) && inlinedVal92.length === 3) {
                                                    let sub24, update24, pow1, north4, south4, east4, west4, inlinedVal182, q_p, d, element1$24, element0$24, element1$25, element0$25;
                                                    element0$9 = runtime.Tuple.get(inlinedVal92, 0);
                                                    element1$9 = runtime.Tuple.get(inlinedVal92, 1);
                                                    element2$1 = runtime.Tuple.get(inlinedVal92, 2);
                                                    sub24 = simple2.#sub2;
                                                    update24 = simple2.#update2;
                                                    pow1 = simple2.#pow;
                                                    north4 = simple2.#north;
                                                    south4 = simple2.#south;
                                                    east4 = simple2.#east;
                                                    west4 = simple2.#west;
                                                    if (runtime.Tuple.isArrayLike(inlinedVal91) && inlinedVal91.length === 2) {
                                                      element0$24 = runtime.Tuple.get(inlinedVal91, 0);
                                                      element1$24 = runtime.Tuple.get(inlinedVal91, 1);
                                                      if (runtime.Tuple.isArrayLike(inlinedVal93) && inlinedVal93.length === 2) {
                                                        let f33, f34, f35, f36, f37, tmp313, lambda$here33, tmp314, tmp315, lambda$here34, tmp316, tmp317, lambda$here35, tmp318, lambda$here36, tmp319, lambda$here37;
                                                        element0$25 = runtime.Tuple.get(inlinedVal93, 0);
                                                        element1$25 = runtime.Tuple.get(inlinedVal93, 1);
                                                        q_p = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                        d = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                        f33 = main_make_viscosity_lambda$$lambda$(sub24, update24, pow1, north4, west4, element5$, element0$9, element1$9, element0$24, element1$24, element1$25, element0$25, q_p, d);
                                                        tmp319 = simple1.#kmin + 1;
                                                        lambda$here37 = lambda$6(simple1, f33);
                                                        simple1.#for_(tmp319, 1, simple1.#kmax)(lambda$here37);
                                                        f34 = lambda$27(simple1, sub24, update24, north4, q_p);
                                                        tmp318 = simple1.#lmin + 1;
                                                        lambda$here36 = lambda$17(simple1, f34);
                                                        simple1.#for_(tmp318, 1, simple1.#lmax)(lambda$here36);
                                                        f35 = lambda$26(simple1, sub24, update24, west4, q_p);
                                                        tmp316 = simple1.#kmin + 1;
                                                        tmp317 = simple1.#kmax + 1;
                                                        lambda$here35 = lambda$18(simple1, f35);
                                                        simple1.#for_(tmp316, 1, tmp317)(lambda$here35);
                                                        f36 = lambda$25(simple1, sub24, update24, east4, q_p);
                                                        tmp314 = simple1.#kmin + 1;
                                                        tmp315 = simple1.#kmax + 1;
                                                        lambda$here34 = lambda$19(simple1, f36);
                                                        simple1.#for_(tmp314, 1, tmp315)(lambda$here34);
                                                        f37 = lambda$24(simple1, sub24, update24, south4, q_p);
                                                        tmp313 = simple1.#lmax + 1;
                                                        lambda$here33 = lambda$16(simple1, f37);
                                                        simple1.#for_(simple1.#lmin, 1, tmp313)(lambda$here33);
                                                        inlinedVal182 = globalThis.Object.freeze([
                                                          q_p,
                                                          d
                                                        ]);
                                                        if (runtime.Tuple.isArrayLike(inlinedVal182) && inlinedVal182.length === 2) {
                                                          let sub25, update25, pow2, m, f38, tmp320, lambda$here38, sub26, update26, pow3, north5, south5, east5, west5, inlinedVal183, scrut1, element1$26, element0$26, element1$27, element0$27, inlinedVal184, m1, f39, tmp321, lambda$here39, cc, f40, f41, f42, f43, f44, tmp322, lambda$here40, tmp323, tmp324, lambda$here41, tmp325, tmp326, lambda$here42, tmp327, lambda$here43, tmp328, lambda$here44, m2, element1$28, element0$28, a, b, f45, f46, f47, f48, f49, tmp329, lambda$here45, tmp330, tmp331, lambda$here46, tmp332, tmp333, lambda$here47, tmp334, lambda$here48, tmp335, lambda$here49;
                                                          element0$10 = runtime.Tuple.get(inlinedVal182, 0);
                                                          element1$10 = runtime.Tuple.get(inlinedVal182, 1);
                                                          sub25 = simple2.#sub2;
                                                          update25 = simple2.#update2;
                                                          pow2 = simple2.#pow;
                                                          m = simple2.#array2(simple2.#dimension_all_zones, simple2.#constant_heat_source);
                                                          f38 = main_lambda$$lambda$(simple2, sub25, update25, pow2, element5$, element7$, element4$, element8$, element1$9, element0$10, m);
                                                          tmp320 = simple2.#kmin + 1;
                                                          lambda$here38 = lambda$6(simple2, f38);
                                                          simple2.#for_(tmp320, 1, simple2.#kmax)(lambda$here38);
                                                          sub26 = simple2.#sub2;
                                                          update26 = simple2.#update2;
                                                          pow3 = simple2.#pow;
                                                          north5 = simple2.#north;
                                                          south5 = simple2.#south;
                                                          east5 = simple2.#east;
                                                          west5 = simple2.#west;
                                                          m1 = simple1.#array2(simple1.#dimension_interior_zones, 0.0);
                                                          f39 = lambda$30(simple1, sub26, update26, element9$1, element1$9, element0$9, m1);
                                                          tmp321 = simple1.#kmin + 1;
                                                          lambda$here39 = lambda$6(simple1, f39);
                                                          simple1.#for_(tmp321, 1, simple1.#kmax)(lambda$here39);
                                                          cc = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                          f40 = main_compute_heat_conduction_make_cc_lambda$$lambda$(sub26, update26, pow3, element0$9, m, cc);
                                                          tmp328 = simple1.#kmin + 1;
                                                          lambda$here44 = lambda$6(simple1, f40);
                                                          simple1.#for_(tmp328, 1, simple1.#kmax)(lambda$here44);
                                                          f41 = main_compute_heat_conduction_make_cc_lambda$$lambda$1(sub26, update26, north5, cc);
                                                          tmp327 = simple1.#lmin + 1;
                                                          lambda$here43 = lambda$17(simple1, f41);
                                                          simple1.#for_(tmp327, 1, simple1.#lmax)(lambda$here43);
                                                          f42 = main_compute_heat_conduction_make_cc_lambda$$lambda$2(sub26, update26, east5, cc);
                                                          tmp325 = simple1.#kmin + 1;
                                                          tmp326 = simple1.#kmax + 1;
                                                          lambda$here42 = lambda$19(simple1, f42);
                                                          simple1.#for_(tmp325, 1, tmp326)(lambda$here42);
                                                          f43 = main_compute_heat_conduction_make_cc_lambda$$lambda$3(sub26, update26, west5, cc);
                                                          tmp323 = simple1.#kmin + 1;
                                                          tmp324 = simple1.#kmax + 1;
                                                          lambda$here41 = lambda$18(simple1, f43);
                                                          simple1.#for_(tmp323, 1, tmp324)(lambda$here41);
                                                          f44 = main_compute_heat_conduction_make_cc_lambda$$lambda$4(sub26, update26, south5, cc);
                                                          tmp322 = simple1.#lmax + 1;
                                                          lambda$here40 = lambda$16(simple1, f44);
                                                          simple1.#for_(simple1.#lmin, 1, tmp322)(lambda$here40);
                                                          if (runtime.Tuple.isArrayLike(inlinedVal93) && inlinedVal93.length === 2) {
                                                            let f50, tmp336, lambda$here50;
                                                            element0$28 = runtime.Tuple.get(inlinedVal93, 0);
                                                            element1$28 = runtime.Tuple.get(inlinedVal93, 1);
                                                            m2 = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                            f50 = main_compute_heat_conduction_make_gamma_lambda$$lambda$1(sub26, update26, pow3, cc, north5, east5, element0$28, element1$28, m2);
                                                            tmp336 = simple1.#kmin + 1;
                                                            lambda$here50 = lambda$6(simple1, f50);
                                                            simple1.#for_(tmp336, 1, simple1.#kmax)(lambda$here50);
                                                            a = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                            b = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                            f45 = f$(sub26, update26, m, b);
                                                            tmp335 = simple1.#lmax + 1;
                                                            lambda$here49 = lambda$16(simple1, f45);
                                                            simple1.#for_(simple1.#lmin, 1, tmp335)(lambda$here49);
                                                            f46 = f$(sub26, update26, m, b);
                                                            tmp334 = simple1.#lmin + 1;
                                                            lambda$here48 = lambda$17(simple1, f46);
                                                            simple1.#for_(tmp334, 1, simple1.#lmax)(lambda$here48);
                                                            f47 = f$(sub26, update26, m, b);
                                                            tmp332 = simple1.#kmin + 1;
                                                            tmp333 = simple1.#kmax + 1;
                                                            lambda$here47 = lambda$19(simple1, f47);
                                                            simple1.#for_(tmp332, 1, tmp333)(lambda$here47);
                                                            f48 = f$(sub26, update26, m, b);
                                                            tmp330 = simple1.#kmin + 1;
                                                            tmp331 = simple1.#kmax + 1;
                                                            lambda$here46 = lambda$18(simple1, f48);
                                                            simple1.#for_(tmp330, 1, tmp331)(lambda$here46);
                                                            f49 = lambda$31(sub26, update26, m, m1, m2, north5, a, b);
                                                            tmp329 = simple1.#kmin + 1;
                                                            lambda$here45 = lambda$6(simple1, f49);
                                                            simple1.#for_(tmp329, 1, simple1.#kmax)(lambda$here45);
                                                            inlinedVal184 = globalThis.Object.freeze([
                                                              a,
                                                              b
                                                            ]);
                                                            if (runtime.Tuple.isArrayLike(inlinedVal184) && inlinedVal184.length === 2) {
                                                              let int_zones, inlinedVal185, theta, lambda$here51, m3, element1$29, element0$29, a1, b1, f51, f52, f53, f54, f55, tmp337, lambda$here52, tmp338, tmp339, lambda$here53, tmp340, tmp341, lambda$here54, tmp342, lambda$here55, tmp343, lambda$here56;
                                                              element0$26 = runtime.Tuple.get(inlinedVal184, 0);
                                                              element1$26 = runtime.Tuple.get(inlinedVal184, 1);
                                                              int_zones = simple1.#for_north_ward_interior_zones;
                                                              theta = simple1.#array2(simple1.#dimension_all_zones, simple1.#constant_heat_source);
                                                              lambda$here51 = lambda$32(sub26, update26, element0$26, element1$26, south5, theta);
                                                              runtime.safeCall(int_zones(lambda$here51));
                                                              if (runtime.Tuple.isArrayLike(inlinedVal93) && inlinedVal93.length === 2) {
                                                                let f56, tmp344, lambda$here57;
                                                                element0$29 = runtime.Tuple.get(inlinedVal93, 0);
                                                                element1$29 = runtime.Tuple.get(inlinedVal93, 1);
                                                                m3 = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                                f56 = main_compute_heat_conduction_make_gamma_lambda$$lambda$(sub26, update26, pow3, cc, west5, south5, element0$29, element1$29, m3);
                                                                tmp344 = simple1.#kmin + 1;
                                                                lambda$here57 = lambda$6(simple1, f56);
                                                                simple1.#for_(tmp344, 1, simple1.#kmax)(lambda$here57);
                                                                a1 = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                                b1 = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                                f51 = f$(sub26, update26, theta, b1);
                                                                tmp343 = simple1.#lmax + 1;
                                                                lambda$here56 = lambda$16(simple1, f51);
                                                                simple1.#for_(simple1.#lmin, 1, tmp343)(lambda$here56);
                                                                f52 = f$(sub26, update26, theta, b1);
                                                                tmp342 = simple1.#lmin + 1;
                                                                lambda$here55 = lambda$17(simple1, f52);
                                                                simple1.#for_(tmp342, 1, simple1.#lmax)(lambda$here55);
                                                                f53 = f$(sub26, update26, theta, b1);
                                                                tmp340 = simple1.#kmin + 1;
                                                                tmp341 = simple1.#kmax + 1;
                                                                lambda$here54 = lambda$19(simple1, f53);
                                                                simple1.#for_(tmp340, 1, tmp341)(lambda$here54);
                                                                f54 = f$(sub26, update26, theta, b1);
                                                                tmp338 = simple1.#kmin + 1;
                                                                tmp339 = simple1.#kmax + 1;
                                                                lambda$here53 = lambda$18(simple1, f54);
                                                                simple1.#for_(tmp338, 1, tmp339)(lambda$here53);
                                                                f55 = lambda$31(sub26, update26, theta, m1, m3, west5, a1, b1);
                                                                tmp337 = simple1.#kmin + 1;
                                                                lambda$here52 = lambda$6(simple1, f55);
                                                                simple1.#for_(tmp337, 1, simple1.#kmax)(lambda$here52);
                                                                inlinedVal185 = globalThis.Object.freeze([
                                                                  a1,
                                                                  b1
                                                                ]);
                                                                if (runtime.Tuple.isArrayLike(inlinedVal185) && inlinedVal185.length === 2) {
                                                                  let int_zones1, theta1, lambda$here58;
                                                                  element0$27 = runtime.Tuple.get(inlinedVal185, 0);
                                                                  element1$27 = runtime.Tuple.get(inlinedVal185, 1);
                                                                  int_zones1 = simple1.#for_west_ward_interior_zones;
                                                                  theta1 = simple1.#array2(simple1.#dimension_all_zones, simple1.#constant_heat_source);
                                                                  lambda$here58 = lambda$32(sub26, update26, element0$27, element1$27, east5, theta1);
                                                                  runtime.safeCall(int_zones1(lambda$here58));
                                                                  scrut1 = simple1.#trace.value;
                                                                  if (scrut1 === true) {
                                                                    inlinedVal183 = globalThis.Object.freeze([
                                                                      theta1,
                                                                      m2,
                                                                      m3
                                                                    ]);
                                                                  } else {
                                                                    inlinedVal183 = globalThis.Object.freeze([
                                                                      theta1,
                                                                      m2,
                                                                      m3
                                                                    ]);
                                                                  }
                                                                  if (runtime.Tuple.isArrayLike(inlinedVal183) && inlinedVal183.length === 3) {
                                                                    let sub27, f57, inlinedVal186, receiver, inlinedVal187, f58, inlinedVal188, receiver1, inlinedVal189, inlinedVal190, x, inlinedVal191, scrut2, scrut3, tmp345, tmp346, tmp347, tmp348, f59, inlinedVal192, sub28, update27, pow4, north6, south6, east6, west6, sub29, update28, pow5, north7, south7, east7, west7, sub210, pow6, north8, south8, east8, west8, inlinedVal193, boundary_work, k_north, k_south, l_east, l_west, boundary_heat, element1$30, element0$30, element1$31, element0$31, tmp349, tmp350, tmp351, tmp352, tmp353, tmp354, tmp355, tmp356, tmp357, tmp358, tmp359, tmp360, tmp361, tmp362, tmp363, tmp364, tmp365, tmp366, tmp367, tmp368, tmp369, tmp370, tmp371, epsilon_p1, f60, f61, f62, f63, f64, tmp372, lambda$here59, tmp373, tmp374, lambda$here60, tmp375, tmp376, lambda$here61, tmp377, lambda$here62, tmp378, lambda$here63, p1, f65, f66, f67, f68, f69, tmp379, lambda$here64, tmp380, tmp381, lambda$here65, tmp382, tmp383, lambda$here66, tmp384, lambda$here67, tmp385, lambda$here68;
                                                                    element0$11 = runtime.Tuple.get(inlinedVal183, 0);
                                                                    element1$11 = runtime.Tuple.get(inlinedVal183, 1);
                                                                    element2$2 = runtime.Tuple.get(inlinedVal183, 2);
                                                                    sub28 = simple2.#sub2;
                                                                    update27 = simple2.#update2;
                                                                    pow4 = simple2.#pow;
                                                                    north6 = simple2.#north;
                                                                    south6 = simple2.#south;
                                                                    east6 = simple2.#east;
                                                                    west6 = simple2.#west;
                                                                    p1 = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                                    f65 = main_make_pressure_lambda$$lambda$(simple1, sub28, update27, pow4, element1$9, element0$11, p1);
                                                                    tmp385 = simple1.#kmin + 1;
                                                                    lambda$here68 = lambda$6(simple1, f65);
                                                                    simple1.#for_(tmp385, 1, simple1.#kmax)(lambda$here68);
                                                                    f66 = lambda$36(simple1, sub28, update27, north6, p1);
                                                                    tmp384 = simple1.#lmin + 1;
                                                                    lambda$here67 = lambda$17(simple1, f66);
                                                                    simple1.#for_(tmp384, 1, simple1.#lmax)(lambda$here67);
                                                                    f67 = lambda$35(simple1, sub28, update27, west6, p1);
                                                                    tmp382 = simple1.#kmin + 1;
                                                                    tmp383 = simple1.#kmax + 1;
                                                                    lambda$here66 = lambda$18(simple1, f67);
                                                                    simple1.#for_(tmp382, 1, tmp383)(lambda$here66);
                                                                    f68 = lambda$34(simple1, sub28, update27, east6, p1);
                                                                    tmp380 = simple1.#kmin + 1;
                                                                    tmp381 = simple1.#kmax + 1;
                                                                    lambda$here65 = lambda$19(simple1, f68);
                                                                    simple1.#for_(tmp380, 1, tmp381)(lambda$here65);
                                                                    f69 = lambda$33(simple1, sub28, update27, south6, p1);
                                                                    tmp379 = simple1.#lmax + 1;
                                                                    lambda$here64 = lambda$16(simple1, f69);
                                                                    simple1.#for_(simple1.#lmin, 1, tmp379)(lambda$here64);
                                                                    sub29 = simple2.#sub2;
                                                                    update28 = simple2.#update2;
                                                                    pow5 = simple2.#pow;
                                                                    north7 = simple2.#north;
                                                                    south7 = simple2.#south;
                                                                    east7 = simple2.#east;
                                                                    west7 = simple2.#west;
                                                                    epsilon_p1 = simple1.#array2(simple1.#dimension_all_zones, 0.0);
                                                                    f60 = main_make_energy_lambda$$lambda$4(simple1, sub29, update28, pow5, element1$9, element0$11, epsilon_p1);
                                                                    tmp378 = simple1.#kmin + 1;
                                                                    lambda$here63 = lambda$6(simple1, f60);
                                                                    simple1.#for_(tmp378, 1, simple1.#kmax)(lambda$here63);
                                                                    f61 = main_make_energy_lambda$$lambda$3(sub29, update28, north7, epsilon_p1);
                                                                    tmp377 = simple1.#lmin + 1;
                                                                    lambda$here62 = lambda$17(simple1, f61);
                                                                    simple1.#for_(tmp377, 1, simple1.#lmax)(lambda$here62);
                                                                    f62 = main_make_energy_lambda$$lambda$2(sub29, update28, east7, epsilon_p1);
                                                                    tmp375 = simple1.#kmin + 1;
                                                                    tmp376 = simple1.#kmax + 1;
                                                                    lambda$here61 = lambda$19(simple1, f62);
                                                                    simple1.#for_(tmp375, 1, tmp376)(lambda$here61);
                                                                    f63 = main_make_energy_lambda$$lambda$1(sub29, update28, west7, epsilon_p1);
                                                                    tmp373 = simple1.#kmin + 1;
                                                                    tmp374 = simple1.#kmax + 1;
                                                                    lambda$here60 = lambda$18(simple1, f63);
                                                                    simple1.#for_(tmp373, 1, tmp374)(lambda$here60);
                                                                    f64 = main_make_energy_lambda$$lambda$(sub29, update28, south7, epsilon_p1);
                                                                    tmp372 = simple1.#lmax + 1;
                                                                    lambda$here59 = lambda$16(simple1, f64);
                                                                    simple1.#for_(simple1.#lmin, 1, tmp372)(lambda$here59);
                                                                    sub210 = simple2.#sub2;
                                                                    pow6 = simple2.#pow;
                                                                    north8 = simple2.#north;
                                                                    south8 = simple2.#south;
                                                                    east8 = simple2.#east;
                                                                    west8 = simple2.#west;
                                                                    if (runtime.Tuple.isArrayLike(inlinedVal91) && inlinedVal91.length === 2) {
                                                                      element0$30 = runtime.Tuple.get(inlinedVal91, 0);
                                                                      element1$30 = runtime.Tuple.get(inlinedVal91, 1);
                                                                      if (runtime.Tuple.isArrayLike(inlinedVal93) && inlinedVal93.length === 2) {
                                                                        let f70, inlinedVal194, f71, inlinedVal195, f72, inlinedVal196, f73, inlinedVal197, f74, inlinedVal198, f75, inlinedVal199, f76, inlinedVal200, f77, inlinedVal201, f78, inlinedVal202, f79, inlinedVal203, f80, inlinedVal204, f81, inlinedVal205, f82, inlinedVal206, f83, inlinedVal207, f84, inlinedVal208, f85, inlinedVal209, f86, inlinedVal210, f87, inlinedVal211, tmp386, tmp387, f88, inlinedVal212;
                                                                        element0$31 = runtime.Tuple.get(inlinedVal93, 0);
                                                                        element1$31 = runtime.Tuple.get(inlinedVal93, 1);
                                                                        f70 = lambda$45(sub210, epsilon_p1, element1$9, element0$9);
                                                                        tmp386 = simple1.#kmin + 1;
                                                                        tmp387 = simple1.#from_(tmp386, simple1.#kmax);
                                                                        f88 = lambda$10(simple1, f70);
                                                                        inlinedVal212 = simple1.#map$tailrec(f88, tmp387);
                                                                        inlinedVal194 = simple1.#flatten(inlinedVal212);
                                                                        if (inlinedVal194 instanceof simple1.Cons.class) {
                                                                          let tmp388, inlinedVal213, f89, inlinedVal214;
                                                                          if (inlinedVal194 instanceof simple1.Nil.class) {
                                                                            inlinedVal213 = 0.0;
                                                                          } else if (inlinedVal194 instanceof simple1.Cons.class) {
                                                                            inlinedVal213 = lambda33(simple1, lambda, inlinedVal194, 0.0);
                                                                          } else {
                                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                          }
                                                                          f71 = main_compute_energy_error_kinetic$$kinetic$(sub210, pow6, element1$9, element0$9, element0$30, element1$30);
                                                                          tmp388 = simple1.#from_(simple1.#kmin, simple1.#kmax);
                                                                          f89 = lambda$8(simple1, f71);
                                                                          inlinedVal214 = simple1.#map$tailrec(f89, tmp388);
                                                                          inlinedVal195 = simple1.#flatten(inlinedVal214);
                                                                          if (inlinedVal195 instanceof simple1.Cons.class) {
                                                                            let inlinedVal215;
                                                                            if (inlinedVal195 instanceof simple1.Nil.class) {
                                                                              inlinedVal215 = 0.0;
                                                                            } else if (inlinedVal195 instanceof simple1.Cons.class) {
                                                                              inlinedVal215 = lambda33(simple1, lambda, inlinedVal195, 0.0);
                                                                            } else {
                                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                            }
                                                                            tmp349 = simple1.#lmin + 1;
                                                                            tmp350 = from_1(simple1, tmp349, simple1.#lmax);
                                                                            f72 = lambda$44(simple1, west8);
                                                                            inlinedVal196 = simple1.#map$tailrec(f72, tmp350);
                                                                            tmp351 = simple1.#lmin + 1;
                                                                            tmp352 = from_1(simple1, tmp351, simple1.#lmax);
                                                                            f73 = lambda$43(simple1, west8);
                                                                            inlinedVal197 = simple1.#map$tailrec(f73, tmp352);
                                                                            tmp353 = simple1.#kmin + 1;
                                                                            tmp354 = from_1(simple1, tmp353, simple1.#kmax);
                                                                            f74 = lambda$42(simple1, south8);
                                                                            inlinedVal198 = simple1.#map$tailrec(f74, tmp354);
                                                                            tmp355 = simple1.#kmin + 1;
                                                                            tmp356 = from_1(simple1, tmp355, simple1.#kmax);
                                                                            f75 = lambda$41(simple1, south8);
                                                                            inlinedVal199 = simple1.#map$tailrec(f75, tmp356);
                                                                            f76 = work_done$(sub210, p1, element0$10, element9$1, element1$31, element0$31);
                                                                            inlinedVal200 = simple1.#map$tailrec(f76, inlinedVal196);
                                                                            if (inlinedVal200 instanceof simple1.Cons.class) {
                                                                              let inlinedVal216;
                                                                              if (inlinedVal200 instanceof simple1.Nil.class) {
                                                                                inlinedVal216 = 0.0;
                                                                              } else if (inlinedVal200 instanceof simple1.Cons.class) {
                                                                                inlinedVal216 = lambda33(simple1, lambda, inlinedVal200, 0.0);
                                                                              } else {
                                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                              }
                                                                              f77 = work_done$(sub210, p1, element0$10, element9$1, element1$31, element0$31);
                                                                              inlinedVal201 = simple1.#map$tailrec(f77, inlinedVal197);
                                                                              if (inlinedVal201 instanceof simple1.Cons.class) {
                                                                                let inlinedVal217;
                                                                                if (inlinedVal201 instanceof simple1.Nil.class) {
                                                                                  inlinedVal217 = 0.0;
                                                                                } else if (inlinedVal201 instanceof simple1.Cons.class) {
                                                                                  inlinedVal217 = lambda33(simple1, lambda, inlinedVal201, 0.0);
                                                                                } else {
                                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                }
                                                                                f78 = work_done$(sub210, p1, element0$10, element9$1, element1$31, element0$31);
                                                                                inlinedVal202 = simple1.#map$tailrec(f78, inlinedVal198);
                                                                                if (inlinedVal202 instanceof simple1.Cons.class) {
                                                                                  let inlinedVal218;
                                                                                  if (inlinedVal202 instanceof simple1.Nil.class) {
                                                                                    inlinedVal218 = 0.0;
                                                                                  } else if (inlinedVal202 instanceof simple1.Cons.class) {
                                                                                    inlinedVal218 = lambda33(simple1, lambda, inlinedVal202, 0.0);
                                                                                  } else {
                                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                  }
                                                                                  f79 = work_done$(sub210, p1, element0$10, element9$1, element1$31, element0$31);
                                                                                  inlinedVal203 = simple1.#map$tailrec(f79, inlinedVal199);
                                                                                  if (inlinedVal203 instanceof simple1.Cons.class) {
                                                                                    let inlinedVal219;
                                                                                    if (inlinedVal203 instanceof simple1.Nil.class) {
                                                                                      inlinedVal219 = 0.0;
                                                                                    } else if (inlinedVal203 instanceof simple1.Cons.class) {
                                                                                      inlinedVal219 = lambda33(simple1, lambda, inlinedVal203, 0.0);
                                                                                    } else {
                                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                    }
                                                                                    tmp357 = inlinedVal216 + inlinedVal217;
                                                                                    tmp358 = tmp357 + inlinedVal218;
                                                                                    boundary_work = tmp358 + inlinedVal219;
                                                                                    k_north = simple1.#kmin + 1;
                                                                                    tmp359 = simple1.#lmin + 1;
                                                                                    tmp360 = from_1(simple1, tmp359, simple1.#lmax);
                                                                                    f80 = lambda$40(north8, k_north);
                                                                                    inlinedVal204 = simple1.#map$tailrec(f80, tmp360);
                                                                                    k_south = simple1.#kmax;
                                                                                    tmp361 = simple1.#lmin + 2;
                                                                                    tmp362 = simple1.#lmax - 1;
                                                                                    tmp363 = from_1(simple1, tmp361, tmp362);
                                                                                    f81 = lambda$39(south8, k_south);
                                                                                    inlinedVal205 = simple1.#map$tailrec(f81, tmp363);
                                                                                    l_east = simple1.#lmax;
                                                                                    tmp364 = simple1.#kmin + 2;
                                                                                    tmp365 = from_1(simple1, tmp364, simple1.#kmax);
                                                                                    f82 = lambda$38(east8, l_east);
                                                                                    inlinedVal206 = simple1.#map$tailrec(f82, tmp365);
                                                                                    l_west = simple1.#lmin + 1;
                                                                                    tmp366 = simple1.#kmin + 2;
                                                                                    tmp367 = from_1(simple1, tmp366, simple1.#kmax);
                                                                                    f83 = lambda$37(west8, l_west);
                                                                                    inlinedVal207 = simple1.#map$tailrec(f83, tmp367);
                                                                                    f84 = heat_flow(sub210, element0$11, element9$1, element1$11);
                                                                                    inlinedVal208 = simple1.#map$tailrec(f84, inlinedVal204);
                                                                                    if (inlinedVal208 instanceof simple1.Cons.class) {
                                                                                      let inlinedVal220;
                                                                                      if (inlinedVal208 instanceof simple1.Nil.class) {
                                                                                        inlinedVal220 = 0.0;
                                                                                      } else if (inlinedVal208 instanceof simple1.Cons.class) {
                                                                                        inlinedVal220 = lambda33(simple1, lambda, inlinedVal208, 0.0);
                                                                                      } else {
                                                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                      }
                                                                                      f85 = heat_flow(sub210, element0$11, element9$1, element1$11);
                                                                                      inlinedVal209 = simple1.#map$tailrec(f85, inlinedVal205);
                                                                                      if (inlinedVal209 instanceof simple1.Cons.class) {
                                                                                        let inlinedVal221;
                                                                                        if (inlinedVal209 instanceof simple1.Nil.class) {
                                                                                          inlinedVal221 = 0.0;
                                                                                        } else if (inlinedVal209 instanceof simple1.Cons.class) {
                                                                                          inlinedVal221 = lambda33(simple1, lambda, inlinedVal209, 0.0);
                                                                                        } else {
                                                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                        }
                                                                                        f86 = heat_flow(sub210, element0$11, element9$1, element2$2);
                                                                                        inlinedVal210 = simple1.#map$tailrec(f86, inlinedVal206);
                                                                                        if (inlinedVal210 instanceof simple1.Cons.class) {
                                                                                          let inlinedVal222;
                                                                                          if (inlinedVal210 instanceof simple1.Nil.class) {
                                                                                            inlinedVal222 = 0.0;
                                                                                          } else if (inlinedVal210 instanceof simple1.Cons.class) {
                                                                                            inlinedVal222 = lambda33(simple1, lambda, inlinedVal210, 0.0);
                                                                                          } else {
                                                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                          }
                                                                                          f87 = heat_flow(sub210, element0$11, element9$1, element2$2);
                                                                                          inlinedVal211 = simple1.#map$tailrec(f87, inlinedVal207);
                                                                                          if (inlinedVal211 instanceof simple1.Cons.class) {
                                                                                            let inlinedVal223;
                                                                                            if (inlinedVal211 instanceof simple1.Nil.class) {
                                                                                              inlinedVal223 = 0.0;
                                                                                            } else if (inlinedVal211 instanceof simple1.Cons.class) {
                                                                                              inlinedVal223 = lambda33(simple1, lambda, inlinedVal211, 0.0);
                                                                                            } else {
                                                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                            }
                                                                                            tmp368 = inlinedVal220 + inlinedVal221;
                                                                                            tmp369 = tmp368 + inlinedVal222;
                                                                                            boundary_heat = tmp369 + inlinedVal223;
                                                                                            tmp370 = inlinedVal213 + inlinedVal215;
                                                                                            tmp371 = tmp370 - boundary_heat;
                                                                                            inlinedVal193 = tmp371 - boundary_work;
                                                                                            sub27 = simple2.#sub2;
                                                                                            f57 = lambda$46(sub27, element1$10);
                                                                                            tmp347 = simple2.#kmin + 1;
                                                                                            tmp348 = simple2.#from_(tmp347, simple2.#kmax);
                                                                                            f59 = lambda$10(simple2, f57);
                                                                                            inlinedVal192 = simple2.#map$tailrec(f59, tmp348);
                                                                                            inlinedVal186 = simple2.#flatten(inlinedVal192);
                                                                                            receiver = simple2;
                                                                                            if (inlinedVal186 instanceof receiver.Cons.class) {
                                                                                              let receiver2, f90, inlinedVal224, receiver3, inlinedVal225, f91, inlinedVal226;
                                                                                              receiver2 = simple2;
                                                                                              f90 = simple2.#min;
                                                                                              if (inlinedVal186 instanceof receiver2.Nil.class) {
                                                                                                inlinedVal224 = lambda32;
                                                                                              } else if (inlinedVal186 instanceof receiver2.Cons.class) {
                                                                                                inlinedVal224 = lambda$1(simple2, f90, inlinedVal186);
                                                                                              } else {
                                                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                              }
                                                                                              receiver3 = simple2;
                                                                                              if (inlinedVal186 instanceof receiver3.Cons.class) {
                                                                                                inlinedVal225 = inlinedVal186.head;
                                                                                                inlinedVal187 = runtime.safeCall(inlinedVal224(inlinedVal225));
                                                                                                f58 = main_lambda$$lambda$1(sub27, m, element0$11);
                                                                                                tmp345 = simple2.#kmin + 1;
                                                                                                tmp346 = simple2.#from_(tmp345, simple2.#kmax);
                                                                                                f91 = lambda$10(simple2, f58);
                                                                                                inlinedVal226 = simple2.#map$tailrec(f91, tmp346);
                                                                                                inlinedVal188 = simple2.#flatten(inlinedVal226);
                                                                                                receiver1 = simple2;
                                                                                                if (inlinedVal188 instanceof receiver1.Cons.class) {
                                                                                                  let receiver4, f92, inlinedVal227, receiver5, inlinedVal228;
                                                                                                  receiver4 = simple2;
                                                                                                  f92 = simple2.#max;
                                                                                                  if (inlinedVal188 instanceof receiver4.Nil.class) {
                                                                                                    inlinedVal227 = lambda32;
                                                                                                  } else if (inlinedVal188 instanceof receiver4.Cons.class) {
                                                                                                    inlinedVal227 = lambda$1(simple2, f92, inlinedVal188);
                                                                                                  } else {
                                                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                                                  }
                                                                                                  receiver5 = simple2;
                                                                                                  if (inlinedVal188 instanceof receiver5.Cons.class) {
                                                                                                    inlinedVal228 = inlinedVal188.head;
                                                                                                    inlinedVal189 = runtime.safeCall(inlinedVal227(inlinedVal228));
                                                                                                    scrut3 = inlinedVal187 < inlinedVal189;
                                                                                                    if (scrut3 === true) {
                                                                                                      inlinedVal190 = inlinedVal187;
                                                                                                    } else {
                                                                                                      inlinedVal190 = inlinedVal189;
                                                                                                    }
                                                                                                    x = simple2.#deltat_maximum;
                                                                                                    scrut2 = x < inlinedVal190;
                                                                                                    if (scrut2 === true) {
                                                                                                      inlinedVal191 = x;
                                                                                                    } else {
                                                                                                      inlinedVal191 = inlinedVal190;
                                                                                                    }
                                                                                                    tmp164 = globalThis.Object.freeze([
                                                                                                      inlinedVal91,
                                                                                                      inlinedVal93,
                                                                                                      element0$9,
                                                                                                      element2$1,
                                                                                                      element1$9,
                                                                                                      p1,
                                                                                                      element0$10,
                                                                                                      epsilon_p1,
                                                                                                      element0$11,
                                                                                                      inlinedVal191,
                                                                                                      inlinedVal193
                                                                                                    ]);
                                                                                                    tmp165 = i - 1;
                                                                                                    i = tmp165;
                                                                                                    state = tmp164;
                                                                                                    continue loopLabel
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
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                    }
                    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 11) {
                      element9$ = runtime.Tuple.get(inlinedVal, 9);
                      element10$ = runtime.Tuple.get(inlinedVal, 10);
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
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "simple"];
});
export default simple1;
