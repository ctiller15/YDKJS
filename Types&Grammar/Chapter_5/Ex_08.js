// Other side-effecting expressions:

var a = 42;
var b = a++;

console.log( a );	// 43
console.log( b );	// 42

// FIRST the current value of a is returned and assigned to b.
// THEN the value of a is changed.

