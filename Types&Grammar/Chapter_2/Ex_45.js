// Since references point to the values and not the variables,
// you cannot use one reference to change where
// another is pointed.


var a = [1,2,3];
var b = a;
console.log( a );	// [ 1, 2, 3 ]
console.log( b );	// [ 1, 2, 3 ]

b = [4,5,6];
console.log( a );	// [ 1, 2, 3 ]
console.log( b );	// [ 4, 5, 6 ]