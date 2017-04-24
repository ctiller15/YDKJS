// In a pre-ES5 environment you could use a custom utility instead of polyfilling.

function createAndLinkObject(o) {
	function F(){}
	F.prototype = o;
	return new F();
}

var anotherObject = {
	a: 2
};

var myObject = createAndLinkObject( anotherObject );

console.log(myObject.a);	// 2