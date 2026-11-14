const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let MyEmpty1, lambda;
lambda = (undefined, function (x) {
  return 4
});
(class MyEmpty {
  static {
    MyEmpty1 = this
  }
  static {
    (class A {
      static {
        new this
      }
      constructor() {
        MyEmpty.A = this;
        Object.defineProperty(this, "class", {
          value: A
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "A"];
    });
  }
  static #f() {
    let scrut;
    scrut = MyEmpty.A;
    if (scrut instanceof MyEmpty.A.class) {
      return 4
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    MyEmpty.#f();
    return MyEmpty.#f()
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "MyEmpty"];
});
export { MyEmpty1 as _$_modulePrivate_$_MyEmpty };
export { lambda as _$_modulePrivate_$_lambda };