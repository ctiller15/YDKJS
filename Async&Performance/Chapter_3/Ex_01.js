// When you write code to reason about a value, you're assuming that the value already is a "now" value.

var x, y = 2;

console.log( x + y );		// NaN <-- because `x` isn't set yet.