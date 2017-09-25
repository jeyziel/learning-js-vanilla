function makePessoa( nome, idade ) {
	const estado = { nome, idade, falar, envelhecer }
	function falar( palavras ) {
		console.log(` ${nome} falou: ${palavras} `)
	}

	function envelhecer( anos = 1 ) {
		estado.idade += anos
	}
	
	return estado
}

const jeyziel = makePessoa('jeyziel', 18 )
jeyziel.envelhecer()
jeyziel.envelhecer()
jeyziel.envelhecer()
console.log(jeyziel)