// There's a lot of tests that when you analyze them
// are flawed or bogus.

// Case 1
var x = [];
for (var i=0; i<10; i++) {
	x[i] = "x";
}

// Case 2
var x = [];
for (var i=0; i<10; i++) {
	x[x.length] = "x";
}

// Case 3
var x = [];
for (var i=0; i<10; i++) {
	x.push( "x" );
}