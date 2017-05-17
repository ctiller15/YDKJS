// What should the then callbacks be called?

function fulfilled(msg) {
	console.log( msg );
}

function rejected(err) {
	console.error( err );
}

p.then( 
	fulfilled,
	rejected
);