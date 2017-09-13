//prototype objeto padrao do js, onde praticamento todos os objetos os herdem
function Pessoa( nome, idade ) {
	this.nome = nome,
	this.idade = idade || 1

	// this.falar = function( palavras ) {
	// 	console.log( this.nome + ' diz ' + palavras)
	// },

	// this.envelhecer = function( anos ) {
	// 	this.idade += anos || 1
	// 	console.log(this)
	// }
}

Pessoa.prototype.falar = function( palavras ) {
	console.log( this.nome + ' diz ' + palavras )
}
Pessoa.prototype.envelhecer = function( anos ) {
	this.idade += anos || 1
	console.log(this)
}
function Homem( nome, idade ) {
	Pessoa.call(this, nome, idade)
	this.sexo = 'masculino'
}

Homem.prototype = Pessoa.prototype
Homem.prototype.caminhar = function( passos ) {
	console.log( this.nome + ' caminho ' + passos + ' passos ')
}

const jeyziel = new Homem( 'jeyziel', 18 )
const fulana = new Pessoa('fulana',24)

jeyziel.falar('merda')
jeyziel.envelhecer()
jeyziel.caminhar( 200 )
fulana.caminhar( 100 )





