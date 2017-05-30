// -- The difference in behavior between a destructuring default value and a
// function parameter default value.

function f6({ x = 10 } = {}, { y } = { y: 10 }) {
	console.log( x, y );
}

f6();			// 10 10

//It *seems* that we've declared a default value of 10 for both the x and y params, but in two different ways.
// Both approaches behave differently in certain cases.

f6( {}, {} );					// 10 undefined