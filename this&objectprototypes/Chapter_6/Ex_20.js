// various checks required for type introspection.

// relating `Foo` and `Bar` to each other
Bar.prototype instanceof Foo;	// true
Object.getPrototypeOf( Bar.prototype ) === Foo.prototype;	// true
Foo.prototype.isPrototypeOf( Bar.prototype );	// true

// relating `b1` to both `Foo` and `Bar`
b1 instanceof Foo;	// true
b1 instanceof Bar;	// true
Object.getPrototypeOf( b1 ) === Bar.prototype;	// true
Foo.prototype.isPrototypeOf( b1 );	// true
Bar.prototype.isPrototypeOf( b1 );	// true