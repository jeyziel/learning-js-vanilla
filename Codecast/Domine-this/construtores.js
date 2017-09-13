const Pessoa = {
	nome : "jeyziel",
	idade : 18,

	falar : function( palavras ) {
		console.log( this.nome + ' diz ' + palavras )
	},

	envelhecer : function( anos ) {
		this.idade += anos || 1
		console.log(this)
	}
}

function Pessoa( nome, idade ) {
	this.nome = nome,
	this.idade = idade || 1,

	this.falar = function( palavras ) {
		console.log( this.nome + ' diz ' + palavras)
	},

	this.envelhecer = function( anos ) {
		this.idade += anos || 1
		console.log(this)
	}
}

const jeyziel = new Pessoa( 'jeyziel', 18 )
jeyziel.falar('merda')
jeyziel.envelhecer()





// Pessoa.falar('bobagem')
// Pessoa.envelhecer()
// Pessoa.envelhecer(2)