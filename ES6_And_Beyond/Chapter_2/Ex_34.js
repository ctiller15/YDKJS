// Both forms of destructuring can offer a default value option for an assignment:

var [ a = 3, b = 6, c = 9, d = 12 ] = foo();
var { x = 5, y = 10, z = 15, w = 20 } = bar();

console.log( a, b, c, d );					// 1 2 3 12
console.log( x, y, z, w );					// 3 5 6 20

// You can combine the default value assignment with
// the alternative assignment expression syntax.

var {x, y, z, w: WW = 20 } = bar();

console.log( x, y, z, WW );					// 4 5 6 20