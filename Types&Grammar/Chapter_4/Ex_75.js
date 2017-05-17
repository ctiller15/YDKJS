// Some weirdness though...

var a = { b: 42 };
var b = { b: 43 };

console.log(a < b);			// false	
console.log(a == b);		// false	
console.log(a > b);			// false

console.log(a <= b);		// true
console.log(a >= b);		// true