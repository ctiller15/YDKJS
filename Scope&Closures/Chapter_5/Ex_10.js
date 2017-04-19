for (var i=1; i<=5; i++) {
	(function(){
		var j = i;
		setTimeout( function timer(){
			console.log( j );
		}, j*1000 );
	})();
}

// This works the way we want!

// A slight variation:
// for (var i = 1; i<=5; i++) {
// 	(function(j){
// 		setTimeout( function timer(){
// 			console.log( j );
// 		}, j*1000);
// 	})( i );
// }

// Uing the IIFE inside each iteration created a scope for each iteration.
// Our timeout function callbacks were able to close over a new scope for each.