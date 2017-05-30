// There are cases where that IIFE pattern is useful:

function ajax(url, cb = function(){}) {
	// ..
}

ajax( "http://some.url.1" );