// "error-first" callback style.

function response(err,data) {
	// error?
	if (err) {
		console.error( err );
	}
	// otherwise, assume success
	else {
		console.log( data );
	}
}

ajax( "http://some.url.1", response );