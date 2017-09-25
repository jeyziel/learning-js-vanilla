function makePessoa( nome, idade ) {
	function falar( palavras ) {
		console.log(` ${nome} falou: ${palavras} `)
	}
	return { nome, idade, falar }
}

const jeyziel = makePessoa('jeyziel', 18 )
jeyziel.falar('merda')