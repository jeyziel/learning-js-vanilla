function adder(x) {
    return function(y) {
        return x + y
    }
}

console.log( adder(2)(3) )

function showOtherFunction( func ) {
    return func();
}

console.log( showOtherFunction( function() {
    return 'js ninja'
}))

