class Pessoa {
	constructor( nome, idade) {
		this.nome = nome
		this.idade = idade
	}

	falar( palavras ) {
		console.log(`${this.nome} diz: ${palavras}`)
	}

}

Pessoa.factory = function( nome, idade = 1 ) {
	if (idade < 1){
		idade = 1
	}
	return new Pessoa(nome, idade)
}

// function makePessoa(nome, idade) {
// 	return new Pessoa(nome, idade)
// }

const Jeyziel = Pessoa.factory('jeyziel',18)
Jeyziel.falar('merda')