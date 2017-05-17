// We could make a static helper utility that lets us observe the resolution of a Promise:

// polyfill-safe guard check
if (!Promise.observe) {
	Promise.observe = function(pr,cb) {
		// side-observe `pr`'s resolution
		pr.then(
			function fulfilled(msg){
				// schedule callback async (as Job)
				Promise.resolve( msg ).then( cb );
			},
			function rejected(err){
				// schedule callback async (as Job)
				Promise.resolve( err ).then( cb );
			}
		);

		// return original promise
		return pr;
		
	};
}