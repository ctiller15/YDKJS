// It is sometimes mistakenly thought that you can encapsulate
// the after side effect of a++ by wrapping it in a ( ) pair:

var a = 42;
var b = (a++);

console.log( a );	// 43
console.log( b );	// 42

// ( ) itself doesn't define a new wrapped expression that would be evaluated after
// the after side effect of the a++ expression.