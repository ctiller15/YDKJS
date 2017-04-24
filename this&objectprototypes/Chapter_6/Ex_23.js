// simplified type introspection with OLOO.

// relating `Foo` and `Bar` to each other
Foo.isPrototypeOf( Bar );	// true
Object.getPrototypeOf( Bar ) === Foo;	// true

// relating `b1` to both `Foo` and `Bar`
Foo.isPrototypeOf( b1 );	// true
Bar.isPrototypeOf( b1 );	// true
Object.getPrototypeOf( b1 ) === Bar;	// true
