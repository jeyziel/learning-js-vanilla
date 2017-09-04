const inverse = ( x ) => x *- 1

const add = ( y ) => ( x ) => x + y
const substract = ( y ) => ( x ) => add( inverse( y ) )( x )

const root = ( y ) => ( x ) => Math.pow( x , 1/y)
const squareRoot = root( 2 )


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

const square = pow(2)

const teoremaDePitagoras = ( b, c ) => {
    const a = add( pow(2)( b ) )( pow(2)( c ) )
    //const a = add( square( b ) )( square(c) )
    return squareRoot(a)
}

console.log( teoremaDePitagoras( 9, 12)); // 15
console.log(  square( 9 ) ) //81
console.log( square( 2 ) ) // 1 ???
//poderia me explicar pq isso está acontecendo?
