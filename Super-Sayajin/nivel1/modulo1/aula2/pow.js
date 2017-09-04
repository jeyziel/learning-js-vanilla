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

const pow = ( y ) => ( x ) => {

    let result = 1;

    while ( y > 0 ) {
        result = multiply( result )( x )
        y = substract(1)(y)
    }
    return result

}

console.log("3 ^ 3 = " +  pow( 2) ( 9) );