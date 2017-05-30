// The worker needs a way to know which program a message comes from.
// Called a "port".

w1.port.addEventListener( "message", handleMessages );

// ..

w1.port.postMessage( "something cool" );

// and it must be initialized as...

w1.port.start();