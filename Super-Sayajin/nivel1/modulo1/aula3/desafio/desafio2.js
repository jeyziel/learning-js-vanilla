const pow = ( y ) => ( x ) => Math.pow( x, y )
const cube = pow(3)

const NOT = ( x ) => !x

const isDivisibleBy = ( y ) => ( x ) => NOT( x % y )

const isEven = isDivisibleBy(2)
const isOdd = ( x ) => NOT( isEven( x ) )

const N = [1,2,3,4,5,6,7,8,9,10]

const radicandoIsOdd = ( x ) => isOdd( cube( x ) )
const filterRadicando = N.filter( radicandoIsOdd )

console.log( filterRadicando ) //[ 1, 3, 5, 7, 9 ]
