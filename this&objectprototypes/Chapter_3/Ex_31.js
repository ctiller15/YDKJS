// We can ask an object if it has a certain property without asking that property's value:

var myObject = {
	a: 2
};

console.log(("a" in myObject));	// true
console.log(("b" in myObject));	// false

console.log(myObject.hasOwnProperty( "a" ));	// true
console.log(myObject.hasOwnProperty( "b" ));	// false

// in checks to see if the property is in the object.
// hasownproperty checks to see if the object has the property or not.