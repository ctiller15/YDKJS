// The object destructuring form allows a source property to be listed multiple times.

var { a: X, a: Y } = { a: 1 };

X;			// 1
Y;			// 1

// You can both destructure a sub-object/array property and also capture the sub-object/array's value itself.

var { a: { x: X, x: Y }, a } = { a: { c: 1 } };

X;			// 1
Y;			// 1
a;			// { x: 1 }

( { a: X, a: Y, a: [ Z ] } = { a: [ 1 ] } );

X.push( 2 );
Y[0] = 10;

X;			// [10,2]
Y;			// [10,2]
Z;			// 1