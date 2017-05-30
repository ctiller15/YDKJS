// ES6 introduces the "..." operator."
// It is called the spread/rest operator:

function foo(x,y,z) {
	console.log( x, y, z );
}

foo( ...[1,2,3] );		// 1 2 3

// In this usage, it gives us a simpler syntatic replacement for apply(..)

foo.apply( null, [1,2,3] );			// 1 2 3

// ... can be used to spread out/expand a value in other contexts as well.
// For example, inside another array declaration:

var a = [2,3,4];

var b = [ 1, ...a, 5 ];

console.log( b );	// [1,2,3,4,5]