// Callback functions as continuations:

// A
ajax( "..", function(..){
	// C
} );
// B

// A and B happen now under the direct control of the main JS program.

// C gets deferred to happen later.