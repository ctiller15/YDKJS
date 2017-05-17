// Here's how we could define first([ .. ]):

// polyfill-safe guard check
if (!Promise.first) {
	Promise.first = function(prs) {

		return new Promise( function(resolve,reject){
			// loop through all promises
			prs.forEach(function(pr){
				// normalize the value
				Promise.resolve( pr )
				// whichever one fulfills first wins, and
				// gets to resolve the main promise
				.then( resolve );
			} );
		} );
	};
}