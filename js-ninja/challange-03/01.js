
var myvar = {};

var pessoa = {
    nome : 'jeyziel',
    sobrenome : 'gama',
    sexo : 'masculino',
    idade : 18,
    altura : 1.80,
    peso : 100,
    andando : false,
    caminhouQuantosMetros : 0
}

//adicionar metodo fazer aniversario
pessoa.fazerAniversario = function() { this.idade++ }
pessoa.fazerAniversario();

console.log( pessoa.idade )

pessoa.andar = function( qnt ) {
    this.caminhouQuantosMetros += qnt;
    this.andando = true;

}

pessoa.andar(100);
console.log( pessoa );

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function() {
    this.andando = false;
}

pessoa.parar();
console.log( pessoa );






