// Implicit coercion really shines in simplifying certain types of complicated boolean logic into simple numeric addition.

function onlyOne(a,b,c) {
	return !!((a && !b && !c) ||
			(!a && b && !c) || (!a && !b && !c));
}

var a = true;
var b = false;

console.log( onlyOne( a, b, b ));		// true
console.log( onlyOne( b, a, b ));		// true

console.log( onlyOne( a, b, a ));		// false