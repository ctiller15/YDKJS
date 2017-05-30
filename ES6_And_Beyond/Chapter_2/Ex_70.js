// ES6 comes with a built-in function that can be used as a string literal tag:
// It simply passes through the raw versions of the strings values:

console.log( `Hello\nWorld` );
// Hello
// World

console.log( String.raw`Hello\nWorld` );
// Hello\nWorld

String.raw`Hello\nWorld`.length;
// 12