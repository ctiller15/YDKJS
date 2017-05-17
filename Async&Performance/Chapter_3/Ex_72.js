// Rather than waste too much time talking about how this helper works,
// let's just look at how to use it:

var request = Promise.wrap( ajax );

request( "http://some.url.1/" )
.then( .. )
..