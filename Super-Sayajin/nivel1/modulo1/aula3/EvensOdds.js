const NOT = ( x ) => !x

const isDivisibleBy = ( y ) => ( x ) => NOT( x % y )

const isEven = isDivisibleBy( 2 )
const isOdd = ( x ) => NOT( isEven( x ) )

const N = [1,2,3,4,5,6,7,8,9,10]

const Evens = N.filter( isEven )
const Odds = N.filter( isOdd )

console.log(`Eh par : ${Evens}`);
console.log(`Eh impar : ${Odds}`)