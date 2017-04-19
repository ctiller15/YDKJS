// Anonymous function.

setTimeout( function(){
	console.log("I waited 1 second!");
}, 1000 );

// Because function() has no name on it, this is called an anonymous function expression.

/*Drawbacks:
1: No useful name. Debugging is far more difficult.

2: Cannot refer to itself. Would have to use
arguments.callee 

3: less readable code.






*/