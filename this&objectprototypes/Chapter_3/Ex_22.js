// Sometimes you want to make items/props that can't be changed.
// If an object has another ref to an object the contents remain mutable.

myImmutableObject.foo;	// [1,2,3]
myImmutableObject.foo.push( 4 );
myImmutableObject.foo;	// [1,2,3,4]