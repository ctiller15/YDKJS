// Order of expression isn't necessarily the same as order of execution:

var a, b;

a = 10;
b = 30;

a = a + 1;
b = b + 1;

console.log( a + b );	// 42