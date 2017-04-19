// It's a good idea to use for..in loops only on objects and traditional for loops for arrays.

// More distinguishing between enumerable and non-enumerable properties!

var myObject = { };

Object.defineProperty(
	myObject,
	"a",
	// make `a` enumerable, as normal
	{ enumerable: true, value: 2 }
	);

	Object.defineProperty(
		myObject,
		"b",
		// make `b` non-enumerable
		{ enumerable: false, value: 3 }
		);

	console.log(myObject.propertyIsEnumerable( "a" ));	// true
	console.log(myObject.propertyIsEnumerable( "b" ));	// false

	console.log(Object.keys( myObject ));	// ["a"]
	console.log(Object.getOwnPropertyNames( myObject ));	// ["a", "b"]

	// propertyIsEnumerable(..) tests whether the property exists on the object and is also true.

	// Object.keys returns an array of all enumerable properties.

	// Object.getOwnPropertyNames(..) returns an array of all properties, enumerable or not.