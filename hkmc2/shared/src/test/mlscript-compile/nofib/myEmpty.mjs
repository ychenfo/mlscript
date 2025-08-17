import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let myEmpty1;
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
  static toString() { return "myEmpty"; }
});
let myEmpty = myEmpty1; export default myEmpty;
