// Any valid eexpression can appear inside ${..} in an interpolated string literal.
// includes function calls, inline function expression calls, and other interpolated string literals.

function upper(s) {
	return s.toUpperCase();
}

var who = "reader";

var text =
`A very ${upper( "warm" )} welcome
to all of you ${upper( `${who}s` )}!`

console.log( text );
// A very WARM welcome
// to all of you READERS!