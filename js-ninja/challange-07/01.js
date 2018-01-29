let newvar = [1, 'a', true, null]

function addItem( item ) {
    return newvar.push(item)
}

let arr = ['3', 'jeyziel', false]

addItem( arr )
console.log( newvar );

let n = 10;

while( n <= 20) {
    if ( n % 2 === 0) {
        console.log( n )
    }
    n++;
}
