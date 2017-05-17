// Another example of a side-effecting operator is delete.
// delete is used to remove a property from an object or a slot from an array.

// USually just called as a standalone statement:

var obj = {
	a: 42
};

console.log(obj.a);			// 42
console.log(delete obj.a);				// true
console.log(obj.a);			// undefined