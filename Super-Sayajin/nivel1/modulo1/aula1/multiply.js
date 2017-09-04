const inverse = ( x ) => x *- 1

const add = ( y ) => ( x ) => x + y
const substract = ( y ) => ( x ) => add( inverse( y ) )( x )

const multiply = ( y ) => ( x ) => {
    let result = 0

    const addX = add( x )
    const decrement1 = substract( 1 )

    while ( y > 0 ) {
        result = addX( result )
        y = decrement1( y )
    }
    
    return result
    

}

console.log( multiply( 3 )( 4 ) )