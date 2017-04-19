// If we don't use a break statement and want the fall through...

switch (a) {
	//This essentially functions to pick 2 OR 10.
	case 2:
	case 10:
		// some cool stuff
		break;
	case 42:
		// other stuff
		break;
	default:
		// fallback
}