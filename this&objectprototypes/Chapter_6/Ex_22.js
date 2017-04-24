// Type-introspection turns out to be pretty clean.

var Foo = { /* .. */};

var Bar = Object.create( Foo );
Bar...

var b1 = Object.create( Bar );