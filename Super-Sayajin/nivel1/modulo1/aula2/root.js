const pow = ( y ) => ( x ) => Math.pow( x, y )
const root = ( y ) => ( x ) => Math.pow( x , 1/y)


console.log( "raiz quadrada de  4 eh =  ", root(2)(4) )