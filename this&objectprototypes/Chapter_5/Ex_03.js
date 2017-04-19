// if you use a for..in loop to iterate over an object,
// any property that can be reached via its chain and
// is also enumerable will be enumerated.

var anotherObject = {
	a: 2
};

// create an object linked to `anotherObject`
var myObject = Object.create( anotherObject );

for (var k in myObject) {
	console.log("found: " + k);
}
// found: a

console.log(("a" in myObject));	// true

// the prototype chain is consulted, one link at a time.