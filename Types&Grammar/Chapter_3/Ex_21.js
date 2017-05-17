// By virtue of prototype delegation, any string value can
// access those methods.

var a = " abc ";

console.log(a.indexOf( "c" ));	// 3
console.log(a.toUpperCase());	// " ABC "
console.log(a.trim());			// "abc"