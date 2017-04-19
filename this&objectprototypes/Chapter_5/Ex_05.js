// All functions get a public, non-enumerable property on them called prototype.
// prototype points at an otherwise arbitrary object.

function Foo() {
	// ...
}

console.log(Foo.prototype);	// { }

// this object is "object arbitrarily named foo dot prototype"