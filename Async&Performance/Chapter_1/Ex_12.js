// To address race conditions, you can coordinate ordering interaction:

var res = [];

function response(data) {
	if (data.url == "http://some.url.1") {
		res[0] = data;
	}
	else if (data.url == "http://some.url.2") {
		res[1] = data;
	}
}

// ajax(..) is some arbitrary Ajax function given by a library.
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );