// Even when you declare a function expression as part of the object-literal, that function doesn't
// magically belong more to the object -- still just multiple
// references to the same function object.

var myObject = {
	foo: function foo() {
		console.log( "foo" );
	}
};

var someFoo = myObject.foo;

someFoo;		// function foo(){..}

myObject.foo;	// function foo(){..}