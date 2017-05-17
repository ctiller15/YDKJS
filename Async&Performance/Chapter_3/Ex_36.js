// If the resolve parameter is used to fulfill the promise,
// why shouldn't it be called fulfill(..) instead of resolve(..) to be more accurate?

var fulfilledPr = Promise.resolve( 42 );

var rejectedPr = Promise.reject( "Oops" );