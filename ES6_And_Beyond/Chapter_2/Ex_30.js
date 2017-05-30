// The assignment expression with object or array destructuring has
// as its completion value the full righthand object/array value.

var o = { a:1, b:2, c:3 },
		a, b, c, p;

p = { a, b, c } = o;

console.log( a, b, c );				// 1 2 3
p === o;

// p was assigned to the o object reference.
// The same is true of array destructuring:

var o = [1,2,3],
		a, b, c, p;

p = [ a, b, c ] = o;

console.log( a, b, c );				// 1 2 3
p === o;											// true

// By carrying the object/array value through as the completion,
// you can chain destructuring assignment expressions together:

var o = { a:1, b:2, c:3 },
		p = [4,5,6],
		a, b, c, x, y, z;

( {a} = {b,c} = o );			// 1 2 3
[x,y] = [z] = p;				// 4 5 4

console.log( a, b, c );
console.log( x, y, z );