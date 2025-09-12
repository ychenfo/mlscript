const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let myEmpty1;
globalThis.Object.freeze(class myEmpty {
  static {
    myEmpty1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    globalThis.Object.freeze(class X {
      static {
        myEmpty.X = globalThis.Object.freeze(new this)
      }
      constructor() {
        Object.defineProperty(this, "class", {
          value: X
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "X"]; 
    });
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "myEmpty"]; 
});
let myEmpty = myEmpty1; export default myEmpty;
