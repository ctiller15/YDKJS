// In addition to the gather/rest usage in func declarations,
// ... can perform the same behavior in destructuring assignments.
var a = [2,3,4];
var b = [ 1, ...a, 5 ];

console.log( b );					// [1,2,3,4,5]

// ...a is spreading out.

// if ...a appears in an array destructuring position, it performs the gather behavior:

var a = [2,3,4];
var [ b, ...c ] = a;

console.log( b, c );