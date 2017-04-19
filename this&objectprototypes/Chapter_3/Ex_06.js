// In objects, property names are always strings.
// anything that isn't a string will also be converted to a string.

var myObject = { };

console.log(myObject[true] = "foo");	// foo
console.log(myObject[3] = "bar");	// bar
console.log(myObject[myObject] = "baz");	// baz

console.log(myObject["true"]);	// foo
console.log(myObject["3"]);	// bar
console.log(myObject["[object Object]"]);	// baz