function twoArguments( x, y ) {
	return x + y;
} 

var sumThreeNumber = twoArguments( 5 , 6) + 10;

console.log( sumThreeNumber );

//21

var notValue;

function setValue(value) {
	notValue = value;

	return "O novo valor da variaval eh " + notValue;
}

var hasValue = setValue('jeyziel');

console.log(hasValue, notValue);



// jeyziel

function threeArguments( a, b, c ) {
	if ( a == null || b == null || c == null) {
		return "preencha todos corretamente";
	}

	return (a * b * c) + 2;
}

var multiply = threeArguments(2,3,4);

console.log( multiply );

function threeArguments2( a,b,c ) {
	//nenhum argumento passado
	if ( ( a == null ) && ( b == null ) && ( c == null ) ) {
		return false;
	}
	//todos argumentos passados
	if ( ( a != null ) && ( b != null ) && ( c != null ) ) {
		return (a + b) / c;
	}

	//1 argumento passado
	if ( a != null && b == null && c == null ) {
		return a;
	}else if( a == null && b != null && c == null ) {
		return b;
	}else if (a == null && b == null && c != null){
		return c;
	}

	// 2 argumento passado
	if ( (a != null) && (b != null) && (c == null)) {
		return a + b;
	}else if( (a != null) && (b == null) && (c != null) ) {
		return a + c;
	}else if ( (a == null) && (b != null) && (c != null) ) {
		return c + b;
	}

	return null;


}

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro 
com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

var withoutArguments = threeArguments2();
var twoArguments = threeArguments2(2,4);
var threeArguments = threeArguments2(2,4,3);
console.log( withoutArguments, twoArguments, threeArguments );


// Invoque a função acima utilizando todas as possibilidades
// (com nenhum argumento, com um, com dois e com três.) 
//Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

