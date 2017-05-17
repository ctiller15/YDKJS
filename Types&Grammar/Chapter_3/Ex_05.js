// for string, number, and boolean, we get "boxing"

console.log(Object.prototype.toString.call( "abc" ));	// [object String]
console.log(Object.prototype.toString.call( 42 ));		// [object Number]
console.log(Object.prototype.toString.call( true ));	// [object Boolean]