const inverse = ( x ) => x *- 1

const add = ( y ) => ( x ) => x + y
const substract = ( y ) => ( x ) => add( inverse( y ) )( x )

const divide = ( y ) => ( x ) => {
    let result = 0;

    const subX = substract( x )
    const add1 = add(1)

    while ( y >= x ) {
        result = add1( result )
        y = subX( y )

    }
    return result;
}

console.log ( divide( 2 )( 2 ) )
