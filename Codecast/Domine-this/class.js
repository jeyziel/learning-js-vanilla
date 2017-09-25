class Pessoa {
	constructor( nome, idade = 1 ) {
		this.nome = nome
		this.idade = idade
	}

	falar( palavras ) {
		console.log( this.nome +  ' diz ' + palavras )
	}

	envelhecer( anos = 1 ) {
		this.idade += anos
		console.log(this)
	}
}

class Homem extends Pessoa {
	constructor(nome, idade = 1) {
		super( nome, idade )
		this.sexo = "masculino"
	}
}

const Jeyziel = new Homem('jeyziel', 18)
console.log(Jeyziel.falar('besteira'))