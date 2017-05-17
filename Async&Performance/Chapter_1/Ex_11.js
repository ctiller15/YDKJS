// Two concurrent processes that interact because of implied ordering.
// Only sometimes broken:

var res = [];

function response(data) {
	res.push( data );
}

// ajax(..) is some arbitrary Ajax function given by a library.

ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );