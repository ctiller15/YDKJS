// ES6 introduces a new type of string literal, using backticks. `
// Allows basic string interpolation expressions to be
// embedded, and then automatically parsed and evaluated.

var name = "Kyle";

var greeting = "Hello " + name + "!";

console.log( greeting );				// "Hello Kyle!"
console.log( typeof greeting );		// "string"

// And this is the new ES6 way:

var name = "Kyle";

var greeting = `Hello ${name}!`;

console.log( greeting );				// "Hello Kyle!"
console.log( typeof greeting );		// "string"