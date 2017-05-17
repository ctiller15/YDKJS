// code might find opportunities to run code faster by rearranging.

var a, b;

a = 10;
a++;

b = 30;
b++;

console.log( a + b );	// 42

// Or it might do:

var a, b;

a = 11;
b = 31;

console.log( a + b );	// 42

// Or even...

// because `a` and `b` aren't used anymore, we can
// inline and don't even need them!

console.log( 42 );	// 42