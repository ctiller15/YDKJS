// Another with example

function foo(obj) {
	with (obj) {
		a = 2;
	}
}

var o1 = {
	a: 3
};

var o2 = {
	b: 3
};

foo( o1 );
console.log( o1.a );	// 2

foo( o2 );
console.log( o2.a );	// undefined
console.log( o2.b );	// 3, as expected.
console.log( a );		// 2	-- Leaked global.

//The with statement takes an object with zero or more properties,
// and treats that object as if it is a wholly separate lexical scope.