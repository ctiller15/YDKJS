// An earlier example:

// var a = 42, b;
// b = ( a++, a );

// a;	// 43
// b;	// 43

// But what happens if we remove the ( )?

var a = 42, b;
b = a++, a;

console.log(a);	// 43
console.log(b);	// 42

// The "," operator has lower precedence than the "=" operator.