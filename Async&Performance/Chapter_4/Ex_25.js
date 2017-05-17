// The try..catch inside the generator:

try {
	var text = yield foo( 11, 31 );
	console.log( text );
}
catch (err) {
	console.error( err );
}