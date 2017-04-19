// Using object.assign. Only for shallow copies.

// This won't actually run. It's just for demo purposes.

var newObj = Object.assign( {}, myObject );

newObj.a;								// 2
newObj.b === anotherObject;				// true
newObj.c === anotherArray;				// true
newObj.d === anotherFunction;			// true