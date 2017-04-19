// But is hard binding more precedent than new binding?

function foo(something) {
	this.a = something;
}

var obj1 = {};

// doing hard binding.

// Remember, hard binding forcibly makes the given object be well,the object
// that this will point to.
var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a );	// 2

// creates an entirely new object with this pointing to baz.
var baz = new bar( 3 );
console.log( obj1.a );	// 2
console.log( baz.a );	// 3

