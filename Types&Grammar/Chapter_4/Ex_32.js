// half-explicit half-implicit coercion can be a good thing...

var a = {
	num: 21,
	toString: function() { return String( this.num * 2 ); }
};

console.log(parseInt( a ));	// 42