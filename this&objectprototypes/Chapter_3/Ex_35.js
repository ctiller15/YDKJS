// What if I want to iterate over values directly instead of array indices?

// ES6 adds a for..of loop syntax for iterating over arrays.

var myArray = [ 4, 5, 6];

for (var v of myArray) {
	console.log( v );
}
// 4
// 5
// 6