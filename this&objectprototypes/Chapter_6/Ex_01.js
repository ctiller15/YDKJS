// "abstracting" out general behavior to parent class.
// overriding it with our child classes.

// general parent class.
class Task {
	id;

	// constructor `Task()`
	Task(ID) { id = ID; }
	outputTask() { output( id ); }
}

class XYZ inherits Task {
	label;

	// constructor `XYZ()`
	XYZ(ID,Label) { super( ID ); label = Label; }
	outputTask() {super(); output( label ); }
}

class ABC inherits Task {
	// ...
}