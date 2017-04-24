// Many devs prefer to do the actions separately.

if (!APP.ready) {
	// try again later
	setTimeout( doSomething, 100 );
	return;
}