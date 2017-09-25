function Pessoa( nome, idade) {
	if (! (this instanceof Pessoa ) ) {
		return new Pessoa( nome, idade )
	}
	this.nome = nome
	this.idade = idade
}

Pessoa.prototype.falar = function ( palavras ) {
	console.log(`${this.nome} diz: ${palavras}`)
}

const jeyziel = new Pessoa('jeyziel',18)
jeyziel.falar('merda')