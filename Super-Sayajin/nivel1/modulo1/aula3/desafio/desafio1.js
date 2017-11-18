const pow = ( y ) => ( x ) => Math.pow( x, y )
const square = pow(2)
const isGreatThan = ( y ) => ( x ) => x > y
const isGreatThan20 = isGreatThan(20)


const RadicandoGreatThan20 = ( value ) => isGreatThan20( square( value ) )

const list = [1,2,3,4,5,6,7,8,9,10]

const listFilter = list.filter( RadicandoGreatThan20 )

console.log( listFilter ) //5,6,7,8,9,10