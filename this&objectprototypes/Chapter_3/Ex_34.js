// With numerically-indexed arrays, iterating over the values is typically
// done with a standard for loop.

var myArray = [1, 2, 3];

for (var i = 0; i< myArray.length; i++) {
	console.log( myArray[i] );
}
// 1 2 3

// This isn't actually iterating over values though. Just indices.
// You then use the index to reference the value.