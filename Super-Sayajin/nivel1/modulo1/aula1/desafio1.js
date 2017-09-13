const add = ( x ) => ( y ) => x + y

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

console.log( divide(5)(2) ) // 5 * 10 = 50 | 50 / 2 = 25 | 25 * 0.1 = 2.5 
console.log( divide(7)(2) ) 

//pertecem ao conjunto dos numeros racionais decimais.

