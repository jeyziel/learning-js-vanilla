console.log( /cat/.test("concatenate") );
// → true
console.log( /\bcat\b/.test("concatenate") );
// → false

var contagemAnimal = /\b\d+ (porco|vaca|galinha)s?\b/;
console.log( contagemAnimal.test("the 3 porcos") );
// → true
console.log( contagemAnimal.test("15 porcosgalinhas") );
// → false