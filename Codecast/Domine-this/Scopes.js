var	CONFIG = {
	host : "https://google.com",
}

var nome = "Jeyziel";

function init(  ) {
	nome = "Jeyziel Gama";
	console.log( CONFIG, nome );
}

console.log( nome );

init();

//escopo filho tem acesso ao escopo pai
console.log( nome );