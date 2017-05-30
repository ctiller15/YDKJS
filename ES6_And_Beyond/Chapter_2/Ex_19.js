// ES6 adds a dedicated syntax for destructuring, specifically
// array and object destructuring.

var [ a, b, c ] = foo();
var { x: x, y: y, z: z } = bar();

console.log( a, b, c );					// 1 2 3
console.log( x, y, z );					// 4 5 6