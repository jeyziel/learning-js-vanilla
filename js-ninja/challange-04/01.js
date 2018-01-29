var isTruthy = function( args ) { 
    return !!args;
}


//falsy
console.log( isTruthy(0) )
console.log( isTruthy(-0) )
console.log( isTruthy("") )

//truthy
console.log( isTruthy(1) )
console.log( isTruthy('string') )



/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca : "fiat",
    modelo : "Bravo" ,
    placa : "abc-1234",
    ano : "1980",
    cor : "azul",
    qntPortas : 4,
    assentos : 5,
    qntPessoas : 0,
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function( cor ) {
    this.cor = cor;
} 

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.getCor = function() {
    return this.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.getModelo = function() {
    return this.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.getMarca = function() {
    return this.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.getMarcaModelo = function() {
    return `Esse carro é um ${this.marca} ${this.modelo}`;
}

/*
Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function( qnt ) {
    if ( this.qntPessoas + qnt <= 5 ) {
        this.qntPessoas += qnt;
        return `Já temos ${this.qntPessoas} pessoas no carro `;
    }else if( this.qntPessoas === 5 ) {
        return "Carro lotado";
    }
    var assentosDisponiveis =  this.assentos - this.qntPessoas;

    var plural = assentosDisponiveis > 1 ? 's':'';
    return `Só cabem mais ${assentosDisponiveis} pessoa${plural}`;
    
}


// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho");
console.log(carro.getCor()); 


// Qual a marca e modelo do carro?
console.log(carro.getMarcaModelo())


// Adicione 2 pessoas no carro.
console.log( carro.addPessoas(2) )


// Adicione mais 4 pessoas no carro.
console.log( carro.addPessoas(4) )

// Faça o carro encher.
console.log( carro.addPessoas(3) )

console.log( carro.addPessoas(1) )

console.log( carro.addPessoas(-1) )




// Adicione 10 pessoas no carro.


// Quantas pessoas temos no carro?
