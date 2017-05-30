// A default value expression can even be an inline function expression call.
// Immediately invoked function expression!

function foo( x = 
	(function(v){ return v + 11; })( 31 )
){
		console.log( x );
}

foo();					// 42