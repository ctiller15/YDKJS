// Typically, the string literal tag function should compute an appropriate string value
// and return it, so that you can use the tagged string literal
// just like untagged string literals:

function tag(strings, ...values) {
	return strings.reduce( function(s,v,idx){
		return s + (idx > 0 ? values[idx-1] : "") + v;
	}, "" );
}

var desc = "awesome";

var text = tag`Everything is ${desc}!`;

console.log( text );			// Everything is awesome!

// tag(..) is a pass-through operation.
// It doesn't perform any special modifications, but just uses
// reduce(..) to loop over and splice/interleave strings and values together.