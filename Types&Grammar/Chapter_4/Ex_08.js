// using the replacer function:

var a = {
	b: 42,
	c: "42",
	d: [1,2,3]
};

JSON.stringify( a, ["b","c"] );	// "{"b":42,"c":"42"}"

JSON.stringify( a, function(k,v){
	if (k !== "c") return v;
} );

// "{"b":42,"d":[1,2,3]}"