// The most common way for pointer confusion is with
// function parameters.

function foo(x) {
	x.push( 4 );
	x;	// [1,2,3,4]

	// later
	x = [4,5,6];
	x.push( 7 );
	x;	// [4,5,6,7]
}

var a = [1,2,3];

foo( a );

a;	// [1,2,3,4] not [4,5,6,7]