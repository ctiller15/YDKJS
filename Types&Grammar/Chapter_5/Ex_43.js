// There are places where ASI is helpful:

var a = 42;

do {
	// ..
}	while (a)	// <-- ;	expected here!
console.log(a);