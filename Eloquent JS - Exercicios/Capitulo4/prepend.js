const prepend = ( value,rest ) => ( { value: value, rest: rest } )

console.log(prepend(10, prepend(20, null)))