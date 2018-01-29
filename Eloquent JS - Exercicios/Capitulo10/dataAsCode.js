function evalAndReturnX( code ) {
    eval( code )
    return y + x
}

console.log(evalAndReturnX("y = 3, x = 2"));

const plusOne = new Function( "n", "return n + 1" );
console.log( plusOne(5) )
