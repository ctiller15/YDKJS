// property names that act as pointers are what is stored in objects.

var myObject = {
	a: 2
};

console.log(myObject.a);	// 2

console.log(myObject["a"]);	// 2

// to access the value at location a, we either use . or [] operators.

// the main difference is that . requires an identifier-compatible property name
// while the [".."] syntax can take any UTF-8 compatible string.