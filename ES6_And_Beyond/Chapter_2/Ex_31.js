// With both array destructuring assignment and object destructuring assignment, you do not
// have to assign all the values that are present:

var [,b] = foo();
var {x, z } = bar();

console.log( b, x, z );			// 2 4 6

// The 1 and 3 values are discarded, as is the 5 from bar.