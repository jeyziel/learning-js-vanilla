var match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8

console.log(/bad(ba)?/.exec("bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123"));
// → ["123", "3"]

function buscaData(string) {
  var dateTime = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
  var match = dateTime.exec(string);
  return new Date( Number(match[3]), Number(match[2] ), Number(match[1]) );
}
console.log( buscaData("21/1/2014") );
// → Fri Feb 21 2014 00:00:00 GMT-0300 (BRT)