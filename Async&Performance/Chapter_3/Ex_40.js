// The most natural form of error handling for most developers is the synchronous try..catch construct.
// It is synchronous-only.

function foo() {
	setTimeout( function(){
		baz.bar();
	}, 100 );
}

try {
	foo();
	// later throws global error from `baz.bar()`
}
catch (err) {
	// never gets here
}