const protoRabbit = {
	fala: function ( linha ) {
		console.log("O coelho " + this.tipo + " fala '" +
                linha + "'");
	}
}

const rabbitAssassin = Object.create( protoRabbit );
rabbitAssassin.tipo = "assasin";
rabbitAssassin.fala("skreee");
rabbitAssassin.email = "gato@gmail";

const jeyziel = {
	nome : "jeyziel"
}

const sayMyName = function( person ) {
	console.log( person.nome )
}


console.log( rabbitAssassin )