const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let myEmpty1;
(class myEmpty {
  static {
    myEmpty1 = myEmpty;
    const X$class = class X {
      constructor() {
        Object.defineProperty(this, "class", {
          value: X
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "X"]; 
    };
    this.X = globalThis.Object.freeze(new X$class);
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "myEmpty"]; 
});
let myEmpty = myEmpty1; export default myEmpty;
