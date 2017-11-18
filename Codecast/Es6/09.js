const VOANDO = Symbol('VOANDO')

//quando nao é usado arrow function o this dentro do setinterval
//referencia a window
function Inseto( nome ) {
	this.nome = nome
	const self = this

	this[VOANDO] = setInterval( () => {
		//console.log( this )
		console.log(`${this.nome} esta voando`)
	}, 3000 )
} 

Inseto.prototype.morrer = function() {
	clearInterval(this[VOANDO])
	console.log(`${this.nome} morreu`)
}

const politico = new Inseto('SaSá')

setTimeout(function () {
	politico.morrer()
}, 10000)