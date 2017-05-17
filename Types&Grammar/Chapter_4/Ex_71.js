// the algorithm first calls ToPrimitive coercion.
// If not a string, both are coerced to number values.

var a = [ 42 ];
var b = [ "43" ];

console.log(a < b);	// true
console.log(b < a); 	// false