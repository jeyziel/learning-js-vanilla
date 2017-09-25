const cachorro = {
	nome : 'beethoven',
	idade : 4,
	idadeCanina() {
		return this.idade * 7
	},
	falar( vezes = 1 ) {
		console.log(`${this.nome} latiu : au au au ${vezes} vezes`)
	},
}

const pessoa = {
	nome : "jeyziel",
	idade: 18,
	falar ( palavras ) {
		console.log(`${this.nome} falou: ${palavras}`)
	},
	// latir( vezes = 4) {
	// 	cachorro.falar.apply(this, arguments)
	// }
}

console.log( cachorro.idadeCanina() )
pessoa.latir = cachorro.falar.bind(pessoa, 10)
pessoa.latir()

//bind pega uma funcao e retorna outra funcao com o contexto modificado