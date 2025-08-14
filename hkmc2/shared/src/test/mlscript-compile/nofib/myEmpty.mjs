import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
let t, g, h, myEmpty1, privateFun, lambda, f_inst_0_tsni, lambda_inst_0_tsni, f_inst_1_tsni, privateFun_inst_1_tsni, lambda_inst_2_tsni, privateFun_inst_2_tsni;
f_inst_0_tsni = function f_inst_0_tsni(x) {
  return lambda_inst_0_tsni
};
lambda_inst_0_tsni = (undefined, function () {
  let tmp, tmp1, tmp2, tmp3;
  tmp = g();
  tmp1 = t();
  tmp2 = tmp + tmp1;
  tmp3 = privateFun();
  return tmp2 + tmp3
});
f_inst_1_tsni = function f_inst_1_tsni(x) {
  return lambda
};
privateFun_inst_1_tsni = function privateFun_inst_1_tsni() {
  let scrut;
  scrut = () => {
    let tmp, tmp1;
    tmp = f_inst_1_tsni(3);
    tmp1 = f_inst_1_tsni(4);
    return tmp + tmp1
  };
  return runtime.safeCall(scrut())
};
lambda_inst_2_tsni = (undefined, function () {
  let tmp, tmp1, tmp2, tmp3;
  tmp = g();
  tmp1 = t();
  tmp2 = tmp + tmp1;
  tmp3 = privateFun_inst_2_tsni();
  return tmp2 + tmp3
});
privateFun_inst_2_tsni = function privateFun_inst_2_tsni() {
  let scrut;
  scrut = () => {
    let tmp, tmp1;
    tmp = myEmpty1.f(3);
    tmp1 = myEmpty1.f(4);
    return tmp + tmp1
  };
  return runtime.safeCall(scrut())
};
privateFun = function privateFun() {
  let scrut;
  scrut = () => {
    let tmp, tmp1;
    tmp = f_inst_0_tsni(3);
    tmp1 = f_inst_0_tsni(4);
    return tmp + tmp1
  };
  return runtime.safeCall(scrut())
};
h = function h() {
  return myEmpty1.X
};
g = function g() {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = h();
  tmp1 = g();
  tmp2 = tmp + tmp1;
  tmp3 = h();
  tmp4 = tmp2 + tmp3;
  tmp5 = h();
  return tmp4 + tmp5
};
t = function t() {
  return h()
};
lambda = (undefined, function () {
  let tmp, tmp1, tmp2, tmp3;
  tmp = g();
  tmp1 = t();
  tmp2 = tmp + tmp1;
  tmp3 = privateFun_inst_1_tsni();
  return tmp2 + tmp3
});
(class myEmpty {
  static {
    myEmpty1 = myEmpty;
    const X$class = class X {
      constructor() {}
      toString() { return "X"; }
    };
    this.X = new X$class;
    this.X.class = X$class;
  }
  static f(x) {
    return lambda_inst_2_tsni
  }
  static toString() { return "myEmpty"; }
});
let myEmpty = myEmpty1; export default myEmpty;
