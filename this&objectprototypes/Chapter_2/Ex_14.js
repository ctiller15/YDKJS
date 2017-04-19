// hard binding is so common, it's provided with a built-in utility for ES5.
// Function.prototype.bind

function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = foo.bind( obj );
var b = bar( 3 );	// 2 3
console.log( b );	// 5

// bind returns a new function that is hard-coded to call the original function with the this context set as specified.