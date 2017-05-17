// statement blocks do not require ; termination. ASI unnecessary.

var a = 42;

while (a) {
	// ..
}	// <-- no ; expected here
a;