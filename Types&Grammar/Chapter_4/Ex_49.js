// Another way of thinking about the operators:

a || b;
// roughly equivalent to:
a ? a : b;

a && b;
// roughly equivalent to:
a ? b: a;