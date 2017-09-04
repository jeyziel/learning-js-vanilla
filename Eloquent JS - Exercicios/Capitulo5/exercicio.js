const file = require('./ancestry.js')

const ancestry = JSON.parse(file)

const arrays = [[1, 2, 3], [4, 5], [6]]
const reduceArray = ( prev, next ) =>  prev.concat(next);
const concatArrays = arrays.reduce( reduceArray )
console.log(concatArrays)

console.log('----------------')
console.log('Historico expectativa de vida')

function average(array) {
    function plus(a,b) { return a + b;}
    return array.reduce( plus ) / array.length;
}

function groupBy( ancestry, century ) {
    const groups = {};
    ancestry.forEach( function (element) {
        let groupName = century( element );
        if ( groupName in groups ) {
            groups[groupName].push(element);
        }else {
            groups[groupName] = [element]
        }
    });
    return groups;
}

const byCentury = groupBy( ancestry, function ( person ) {
    return Math.ceil( person.died / 100 );
});

for (let century in byCentury) {
    let ages = byCentury[century].map(function(person) {
      return person.died - person.born;
    });
    console.log(century + ": " + average(ages));
}

//exercicio todos e alguns
console.log('some and every');

function every( array, predicate ) {
    for (let i = 0; i < array.length; i++){
        if (!predicate( array[i] )) {
            return false;
        }
    }
    return true;
}

function some( array, predicate ) {
    for (let i = 0; i < array.length; i++){
        if (predicate( array[i] )) {
            return true;
        }
    }
    return false;
}






console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false






