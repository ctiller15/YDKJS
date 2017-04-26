// having a reference to the shared object is not going to give you the ability to modify the shared primitive value.

function foo(x) {
	x = x + 1;
	x;	// 3
}

var a = 2;
var b = new Number( a );

foo( b );
console.log( b );	// 2, not 3