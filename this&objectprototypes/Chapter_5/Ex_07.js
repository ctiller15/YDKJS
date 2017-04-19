function Foo() {
	// ...
}

console.log(Foo.prototype.constructor === Foo);	// true

var a = new Foo();
console.log(a.constructor === Foo);	// true

// The foo.prototype object by default gets a public,
// non-enumerable property called .constructor.
// That property is a reference back to the function the object
// is associated with.

//*** Constructor does not actually mean "was constructed by".
