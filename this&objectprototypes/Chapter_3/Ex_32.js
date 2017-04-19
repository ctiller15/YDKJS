// understanding enumeration.

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
	// make `b` NON-enumerable
	{ enumerable: false, value: 3}
);

myObject.b;	// 3
("b" in myObject);	// true
myObject.hasOwnProperty( "b" );	// true

// .......

for (var k in myObject) {
	console.log( k, myObject[k] );
}

// "a" 2

// myObject.b exists and has an accessible value, but it doesn't show up
// in the for..in loop.

// "enumerable" basically means "will be included if the object's properties are iterated through".

