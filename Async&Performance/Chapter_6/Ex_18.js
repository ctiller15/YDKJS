// If the value of the const is complex, the contents
// of the value can still be modified:

{
	const a = [1,2,3];
	a.push( 4 );
	console.log( a );				// [1,2,3,4]

	a = 42;								// TypeError!
}