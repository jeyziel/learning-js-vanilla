const inverse = ( x ) => x * -1

const add = ( x ) => ( y ) => x + y;
const substract = ( x ) => ( y ) => add( inverse( x ) )( y )

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

const divide = ( x ) => ( y ) => {
    
    let multiplyfor10 = 0;
    const multiply10 = add(10)
    const decrement1 = add(-1)
    const addFinal = add(0.1)
    const decrementY = add(-y)
    let resultFinal = 0
    
    while ( x > 0 ) {
        multiplyfor10 = multiply10(multiplyfor10)
        x = decrement1(x)
    }
    
    while ( multiplyfor10 > 0) {
        multiplyfor10 = decrementY(multiplyfor10)
        resultFinal = addFinal(resultFinal)
    }
    
   return resultFinal.toFixed(1)   
}

const pow = ( y ) => ( x ) => Math.pow( x, y )
const root = ( y ) => ( x ) => Math.pow( x , 1/y)

const square = pow(2)
//const squareRoot = root(2)
//const multiplyByFour = multiplyByFour(4)
const multiplyByFour = (a) => multiply(4)(a)
const multiplyByTwo = (a) => multiply(2)(a)

const dividendo = ( a ) => multiplyByTwo(a)

const delta = ( a , b, c) => {
    return square(b) - ( multiplyByFour( multiply(a)(c) ) )
}


// const x1 = ( b, square) => add( square )(b)
// const x2 = ( b, square ) => substract(square)(b)



const bhaskara = ( a, b, c) => {
    if ( delta(a,b,c) >= 0 ){
        const squareRoot =  root(2)(delta(a,b,c))
        const dividendo = multiplyByTwo(a)
        x1 = add( inverse(b) )( squareRoot ) / dividendo
        x2 = substract( squareRoot )( inverse(b) ) / dividendo 
         
        console.log(`x' = ${x1}  x'' = ${x2} `)
    }else{
        console.log("equacao nao possui raizes, delta menor que 0")
    }

}



//console.log( substract(14)(-12))

bhaskara(1,4,-5)
bhaskara(2,2,4)








// console.log( multiply(2)(-2) )


