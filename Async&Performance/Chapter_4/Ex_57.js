// Thunkory is symmetric to the Promisory idea:

var fooThunkory = thunkify( foo );

var fooThunk1 = fooThunkory( 3, 4 );
var fooThunk2 = fooThunkory( 5, 6 );

// later

fooThunk1( function(sum) {
	console.log( sum );					// 7
} );

fooThunk2( function(sum) {
	console.log( sum );					// 11
} );