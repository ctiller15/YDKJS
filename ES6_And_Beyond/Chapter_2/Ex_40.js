// Quick destructuring illustrations:

function f1([ x=2, y=3, z ]) { .. }
function f2( x, y, ...z], w) { .. }
function f3([ x, y, ...z], ...w) { .. }

function f4({ x: X, y }) { .. }
function f5({ x: X = 10, y = 20 }) { .. }
function f6({ x = 10 } = {}, { y } = { y: 10 }) { .. }

// Take an example from this snippet and examine it:

function f3([ x, y, ...z], ...w) {
	console.log( x, y, z, w );
}

f3( [] );								// undefined undefined [] []
f3( [1,2,3,4], 5, 6 );			// 1 2 [3,4] [5,6]

// ...z gathers from the rest of the values left over in the first array argument.
// ...w gathers from the rest of the main arguments left over after the first.