const f = ( x ) => x
const inverse = ( x ) => x *- 1

const add = ( y ) => ( x ) => x + y
const substract = ( y ) => ( x ) => add( inverse( y ) )( x )

const PA = ( y ) => ( x ) => x + y

console.log( add( 6 )( 4 ) )
console.log( substract( 4 )( 6 ) )
console.log( PA( 2 )( 5 ) )