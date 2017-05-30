// ES6 introduces destructuring, which can be thought of as structured assignment.

function foo() {
	return [1,2,3];
}

var tmp = foo(),
	a = tmp[0], b = tmp[1], c = tmp[2];

console.log( a, b, c );					// 1 2 3

// Created a manual assignmment of the values in the array that foo() returns
// to individual variables a, b, and c.