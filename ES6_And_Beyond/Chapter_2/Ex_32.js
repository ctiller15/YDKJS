// If you try to assign more values than are present
// in the val you are destructuring/decomposing,
// you get a graceful fallback to undefined.

var [,,c,d] = foo();
var { w, z } = bar();

console.log( c, z );			// 3 6
console.log( d, w );			// undefined undefined