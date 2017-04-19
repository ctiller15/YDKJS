// If you reference a variable that cannot be resolved within lexical scope,
// A referenceError is thrown, not undefined.


var myObject = {
	a: undefined
};

console.log(myObject.a);	// undefined

console.log(myObject.b);	// undefined