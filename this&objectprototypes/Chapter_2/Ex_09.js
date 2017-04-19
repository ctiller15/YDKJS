function setTimeout(fn, delay) {
	// wait (somehow) for 'delay' milliseconds
	fn();	// <-- call-site!
}