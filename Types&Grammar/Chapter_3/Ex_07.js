// Object Wrapper Gotchas

var a = new Boolean( false );

if (!a) {
	console.log( "Oops" );	// never runs
}

// We've created an object wrapper around the false value,
// but objects are "truthy".