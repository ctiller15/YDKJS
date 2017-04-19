// If you try to add a property to an array, but the property name
// "looks" like a number, it will end up as a numeric index and modify the array contents.

var myArray = [ "foo", 42, "bar" ];

myArray["3"] = "baz";

console.log(myArray.length);	// 4

console.log(myArray[3]);					// "baz"