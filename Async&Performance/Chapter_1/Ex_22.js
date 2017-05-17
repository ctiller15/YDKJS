// Specific optimizations can be unsafe!

var a, b;

a = 10;
b = 30;

// we need `a` and `b` in their preincremented state!
console.log( a * b );	// 300

a = a + 1;
b = b + 1;

console.log( a + b );	// 42