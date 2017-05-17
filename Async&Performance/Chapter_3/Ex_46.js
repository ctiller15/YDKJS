// If a promise is rejected, it defaults to reporting that to the dev console.
// Can opt out implicitly or explicitly.
// You control the false positives.

var p = Promise.reject( "Oops" ).defer();

// `foo(..)` is Promise-aware
foo( 42 )
.then(
	function fulfilled(){
		return p;
	},
	function rejected(err){
		// handle `foo(..)` error
	}
);