// Explicit coercion of a symbol to a string is allowed,
// while implicit coercion of the same is disallowed.

var s1 = Symbol( "cool" );
String( s1 );

var s2 = Symbol( "not cool" );
s2 + "";