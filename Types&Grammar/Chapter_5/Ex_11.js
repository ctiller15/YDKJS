// The , statement-series comma operator allows you to string
// together multiple standalone expression statements into a single statement.

var a = 42, b;
b = ( a++, a );

console.log( a );	// 43
console.log( b );	// 43