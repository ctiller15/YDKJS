// Any arguments passed after the first this binding argument are
// defaulted as standard arguments to the underlying function.

function foo(p1, p2) {
	this.val = p1 + p2;
}

// using 'null' here because we don't care about
// the 'this' hard-binding in this scenario, and
// it will be overridden by the 'new' call anyway!

var bar = foo.bind( null, "p1" );

console.log( bar );

var baz = new bar( "p2" );

console.log(baz.val); // p1p2