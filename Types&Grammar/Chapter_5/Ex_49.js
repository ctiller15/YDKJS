// Another strict mode early error is an object literal having more than one prop of the same name:

(function(){
	"use strict";

	var a = {
		b: 42,
		b: 43
	};		// Should have an error, but not receiving one.
})();