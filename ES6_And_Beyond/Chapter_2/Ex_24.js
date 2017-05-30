function bar() {
	return {
		x: 4,
		y: 5,
		z: 6
	};
}

// We've been using destrcturing assignment with var declarations.
// Destructuring is a general assignment operation, not just a declaration:

var a, b, c, x, y, z;

[a,b,c] = foo();
( { x, y, z } = bar() );

console.log( a, b, c );			// 1 2 3
console.log( x, y, z );			// 4 5 6