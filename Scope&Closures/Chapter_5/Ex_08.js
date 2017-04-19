// Loops and closure.

for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}

// 6 is printed each time.

// all functions close over the same global scope.