// property accesses subtlety:

var myObject = {
	a: 2
};

console.log(myObject.a);	// 2

// This performs a [[Get]] operation on the myObject.