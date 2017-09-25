//prototype objeto padrao do js, onde praticamento todos os objetos os herdem
function Pessoa( nome, idade ) {
	this.nome = nome,
	this.idade = idade || 1

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

herdar(Homem, Pessoa);
//Homem.prototype = new Pessoa(); //herda sem referencia o mesmo endereco de pessoa
Homem.prototype.caminhar = function( passos ) {
	console.log( this.nome + ' caminho ' + passos + ' passos ')
}

const jeyziel = new Homem( 'jeyziel', 18 )
console.log(jeyziel.idade)
delete jeyziel.idade
console.log(jeyziel.idade)

function herdar( filha, mae ) {
	function P(){ }
	P.prototype = mae.prototype
	filha.prototype = new P()
}






