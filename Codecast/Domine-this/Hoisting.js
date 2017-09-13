const jeyziel = {
	name : "jeyziel"
}
const pessoa = JSON.parse( JSON.stringify( jeyziel ) )
const gama = "gama"
jeyziel.name = "Jeyziel Gama"

const sayMyName = function ( fulano ) {
	console.log(  fulano.name  )
}
sayMyName( pessoa )
sayMyName( jeyziel )



// console.log( gama )
// console.log( jeyziel )
// console.log( pessoa )