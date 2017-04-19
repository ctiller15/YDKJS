// If you create a new object, and replace a function's default
// .prototype object reference, the new object will not by default magically get a .constructor on it.

function Foo() {/* .. */}

Foo.prototype = { /* .. */ }; // ceate a new prototype object

var a1 = new Foo();
console.log(a1.constructor === Foo); // false!
console.log(a1.constructor === Object);	// true!

// a1 has no .constructor property, so it delegates up the [[Prototype]] chain to Foo.prototype.
// That object doesn't have a .constructor either, so it keeps delegating.
// This time up to Object.protptype.
// The Object.prototype has a .constructor on it that ponts to Object(..)