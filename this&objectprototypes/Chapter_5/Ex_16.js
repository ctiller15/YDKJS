// helper utility to see if `o1` is
// related to (delegates to) `o2`

function isRelatedTo(o1, o2) {
	function F(){}
	F.prototype = o2;
	return o1 instanceof F;
}

var a = {};
var b = Object.create( a );

console.log(isRelatedTo( b, a ));	// True;

// But this is silly.

// The second, cleaner approach to prototype reflection is...

Foo.prototype.isPrototypeOf( a );	// true

// Here we just need an object to test against another object.

// "in the entire [[Prototype]] chain of a, does Foo.prototype ever appear?"