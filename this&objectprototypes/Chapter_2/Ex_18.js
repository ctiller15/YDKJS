// How does new binding fit into the puzzle?

// remember, in new binding we construct a new object and set that object
// as the this for whatever call we're interested in.

function foo(something) {
	this.a = something;
}

var obj1 = {
	foo: foo
};

var obj2 = {};

obj1.foo( 2 );
console.log( obj1.a );	// 2

obj1.foo.call( obj2, 3);
console.log( obj2.a );	// 3

var bar = new obj1.foo( 4 );
console.log( obj1.a );	// 2
console.log( bar.a );	// 4

// remember, new binding creates an object bar that gets referenced
// by this.
