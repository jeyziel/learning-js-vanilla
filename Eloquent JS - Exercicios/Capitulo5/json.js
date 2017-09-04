const file = require('./ancestry.js')

const ancestry = JSON.parse(file)
console.log(ancestry.length)

//pessoa que eram jovem em 1924
const filterYoung = (person) => person.born > 1900 && person.born < 1925
const young = ancestry.filter(filterYoung);
console.log(young)

//pessoas que viveram mais de 90 anos....
console.log('------------------------------------------');
const filterOverNinety = person => person.died - person.born > 90 
const overNinety = ancestry.filter(filterOverNinety)
console.log(overNinety);

console.log('------------------------------------------');
const compareYears = (min, cur) => cur.born < min.born ? cur : min;

//ancestral mais antigo
const mostAncient = ancestry.reduce( compareYears );
console.log(mostAncient); 

console.log('------------------------------------------');
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);


console.log('------------------------------------------');

var theSet = ["Carel Haverbeke", "Maria van Brussel",
              "Donald Duck"];
function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(isInSet.bind(null, theSet)));
// → … same result
