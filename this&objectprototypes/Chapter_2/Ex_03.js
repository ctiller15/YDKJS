// global object is only eligible for default binding if
// foo's contents are not running in strict mode.
// (The strict mode state of the call site doesn't matter.)

// Note: This still doesn't seem to work in sublime, but works
// very well in devtools.

function foo() {
	console.log( this.a );
}

var a = 2;

(function(){
	"use strict";

	// Using strict mode on the call-site of foo().
	foo();	// 2 Doesn't change a thing!
})();

