// the type of the value solely controls whether that value will
// be assigned by value-copy or by reference-copy

var a = 2;
var b = a;	// `b` is always a copy of the value in `a`
b++;
a;
b;

var c = [1,2,3];
var d = c;	// `d` is a reference to the shared `[1,2,3]` value
d.push( 4 );
c;	// [1,2,3,4]
d;	// [1,2,3,4]