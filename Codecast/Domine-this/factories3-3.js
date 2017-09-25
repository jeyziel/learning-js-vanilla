function envelhecer( anos = 1) {
	this.idade += anos
}

function makePessoa( nome, idade ) {
	const estado = { 
		nome, idade, 
		falar, envelhecer: localEnvelhecer 
	}
	function falar( palavras ) {
		console.log(` ${nome} falou: ${palavras} `)
	}

	function localEnvelhecer( anos ) {
		envelhecer.call( estado, anos )
	}
	
	return estado
}

const jeyziel = makePessoa('jeyziel', 18 )
jeyziel.envelhecer()
console.log(jeyziel.idade)