// If a case expression results in something truthy but not true, it wouldn't work.

var a = "hello world";
var b = 10;

switch (true) {
	case (a || b == 10):
		// never gets here
		break;
	default:
		console.log( "Oops" );
}
// Oops