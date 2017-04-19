// Each object created from calling new Foo() will end up [[Prototype]]-linked to this "Foo dot prototype" object.

function Foo() {
	// ...
}

var a = new Foo();

Object.getPrototypeOf( a ) === Foo.prototype; // true

// when a was created, it gets an internal [[Prototype]] link to the object that
// Foo.prototype is pointing at.