// IIFE with for loop closure.

for (var i=1; i<=5; i++) {
	(function(){
		setTimeout( function timer(){
			console.log( i );
		}, i*1000 );
	})();
}

// Still logs 6!

// The IIFE scope is empty. It doesn't have anything.

// It needs a variable to be useful to us.