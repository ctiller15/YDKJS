// If let declarations are used in the head of a for-loop, it will be declared for each iteration.

for (let i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000);
}