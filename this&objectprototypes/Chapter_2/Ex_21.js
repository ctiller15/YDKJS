// the part allowing new to override is:

this instanceof fNOP &&
oThis ? this : oThis

// ... and:

fNOP.prototype = this.prototype;
fBound.prototype = new fNOP();// creates an entirely new object with this pointing to baz.