// "later" doesn't happen strictly and immediately after now.

// Tasks that cannot complete now are going to complete asynchronously.

// ajax(..) is some arbitrary Ajax function given by a library.
var data = ajax( "http://some.url.1" );

console.log( data );
// Oops! `data` generally won't have the Ajax results