(function(){

  function calculator( a, b ) {
      return function( callback ) {
        return callback(a, b)
      }
  }

  const sum = calculator(2,3)

  console.log( sum( function(a, b){
      return a + b
  } ))

  const multiplication = calculator(3, 3)

  console.log( multiplication( function( a, b) {
     return a * b
  }))
}())

