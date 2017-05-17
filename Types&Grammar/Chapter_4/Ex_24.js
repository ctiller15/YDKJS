// Using ~ with indexOf() "coerces" the value to be boolean-coercible.

var a = "Hello World";


~a.indexOf( "lo" );					// -4 <-- truthy!

if (~a.indexOf( "lo" )) {		// true
	// found it!
}

~a.indexOf( "ol" );					// 0 <-- falsy!
!~a.indexOf( "ol" );			// true

if (!~a.indexOf( "ol" )) {		// true
	// not found!
}