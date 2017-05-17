// JSON.stringify(..) will automatically omit undefined, function, and symbol.
// if found in an array, it's replaced by null.
// If found in an object, it will be excluded.

console.log(JSON.stringify( undefined ));					// undefined
console.log(JSON.stringify( function(){} ));				// undefined

console.log(JSON.stringify( [1,undefined,function(){},4] ));	// "[1,null,null,4]"
console.log(JSON.stringify( {a:2, b:function(){} } ));			// "{"a":2}"