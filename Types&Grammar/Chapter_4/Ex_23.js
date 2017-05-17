// It's pretty common to try to use indexOf(..) as a boolean check of presence/absence of a substring in another string.

var a = "Hello World";

if (a.indexOf( "lo" ) >= 0) {	// true
		// found it!
}
if (a.indexOf( "lo" ) != -1) {	// true
		// found it
}

if (a.indexOf( "ol" ) < 0) {	// true
		// not found!
}
if (a.indexOf( "ol" ) == -1) {	// true
		// not found!
}