// If you pass null or undefined as a this binding parameter to call, apply, or bind
// those values are effectively ignored, and instead the
// default binding rule applies to the invocation.

function foo() {
	console.log( this.a );
}

var a = 2;

foo.call( null ); // 2

// seems to actually return undefined.